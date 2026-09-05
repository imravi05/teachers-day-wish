import { useState } from 'react';
import { launchConfetti } from '../utils/confetti';

const DEFAULT_MESSAGES = [
  {
    name: 'Priya, Class 12-A',
    text: "Thank you for always staying back after class to help me understand. You changed my life, ma'am! 💛",
    time: '9:12 AM',
  },
  {
    name: 'Arjun Sharma',
    text: "Sir, your physics classes were the highlight of my school days. I'm an engineer today because of you. 🚀",
    time: '10:30 AM',
  },
  {
    name: 'Anonymous',
    text: "To every teacher who ever believed in a 'difficult' student — your patience is a superpower. 🌟",
    time: '11:45 AM',
  },
];

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
  const [messages, setMessages] = useState(DEFAULT_MESSAGES);
  const [name, setName] = useState('');
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    const now = new Date();
    const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    setMessages(prev => [{ name: name.trim() || 'Anonymous', text: text.trim(), time }, ...prev]);
    setName('');
    setText('');
    launchConfetti();
  };

  return (
    <section className="board-section" id="board">
      <h2 className="section-title">Leave a Wish 💌</h2>
      <p className="section-subtitle">Write a heartfelt message for your teacher</p>
      <div className="board-container">
        <form className="board-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your name (e.g. Rahul, Class 10-B)"
            value={name}
            onChange={e => setName(e.target.value)}
            maxLength={60}
            id="msg-name"
          />
          <textarea
            rows={4}
            placeholder="Write your message or wish to your teacher… 💛"
            value={text}
            onChange={e => setText(e.target.value)}
            id="msg-text"
          />
          <button type="submit" className="board-submit">Send Wish ✨</button>
        </form>

        <div className="messages-list">
          {messages.map((msg, i) => <MessageCard key={i} msg={msg} />)}
        </div>
      </div>
    </section>
  );
}
