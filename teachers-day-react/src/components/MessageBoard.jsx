import { useState, useEffect } from 'react';
import {
  collection,
  addDoc,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
} from 'firebase/firestore';
import { db } from '../firebase';
import { launchConfetti } from '../utils/confetti';

function MessageCard({ msg }) {
  return (
    <div className="msg-card">
      <div className="msg-name">💬 {msg.name}</div>
      <div className="msg-text">{msg.text}</div>
      <div className="msg-time">{msg.time}</div>
    </div>
  );
}

export default function MessageBoard() {
  const [messages, setMessages] = useState([]);
  const [name, setName] = useState('');
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(true);
  const [sending, setSending] = useState(false);

  // ── Real-time listener ────────────────────────────────────────
  useEffect(() => {
    const q = query(
      collection(db, 'wishes'),
      orderBy('createdAt', 'desc')
    );

    const unsub = onSnapshot(q, (snapshot) => {
      const msgs = snapshot.docs.map((doc) => {
        const data = doc.data();
        const ts = data.createdAt?.toDate();
        const time = ts
          ? ts.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
          : '';
        return { id: doc.id, name: data.name, text: data.text, time };
      });
      setMessages(msgs);
      setLoading(false);
    });

    return () => unsub(); // cleanup on unmount
  }, []);

  // ── Submit handler ────────────────────────────────────────────
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!text.trim() || sending) return;

    setSending(true);
    try {
      await addDoc(collection(db, 'wishes'), {
        name: name.trim() || 'Anonymous',
        text: text.trim(),
        createdAt: serverTimestamp(),
      });
      setName('');
      setText('');
      launchConfetti();
    } catch (err) {
      console.error('Error saving wish:', err);
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="board-section" id="board">
      <h2 className="section-title">Leave a Wish 💌</h2>
      <p className="section-subtitle">Write a heartfelt message for your teacher — everyone can see it!</p>
      <div className="board-container">

        <form className="board-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your name (e.g. Rahul, Class 10-B)"
            value={name}
            onChange={(e) => setName(e.target.value)}
            maxLength={60}
            id="msg-name"
          />
          <textarea
            rows={4}
            placeholder="Write your wish for your teacher… 💛"
            value={text}
            onChange={(e) => setText(e.target.value)}
            id="msg-text"
          />
          <button type="submit" className="board-submit" disabled={sending}>
            {sending ? 'Sending…' : 'Send Wish ✨'}
          </button>
        </form>

        {loading ? (
          <p className="board-loading">Loading wishes… ✨</p>
        ) : messages.length === 0 ? (
          <p className="board-empty">Be the first to leave a wish! 💛</p>
        ) : (
          <div className="messages-list">
            {messages.map((msg) => (
              <MessageCard key={msg.id} msg={msg} />
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
