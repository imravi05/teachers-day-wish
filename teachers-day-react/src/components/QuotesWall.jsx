import { useEffect, useRef } from 'react';

const QUOTES = [
  { text: "The art of teaching is the art of assisting discovery.", author: "Mark Van Doren", emoji: "🔭" },
  { text: "A good teacher can inspire hope, ignite the imagination, and instill a love of learning.", author: "Brad Henry", emoji: "✨" },
  { text: "Teachers affect eternity; no one can tell where their influence stops.", author: "Henry Adams", emoji: "♾️" },
  { text: "Education is not the filling of a pail, but the lighting of a fire.", author: "W.B. Yeats", emoji: "🔥" },
  { text: "In learning you will teach, and in teaching you will learn.", author: "Phil Collins", emoji: "🌀" },
  { text: "One child, one teacher, one book, one pen can change the world.", author: "Malala Yousafzai", emoji: "📚" },
  { text: "The mediocre teacher tells. The good teacher explains. The superior teacher demonstrates. The great teacher inspires.", author: "William Arthur Ward", emoji: "⭐" },
  { text: "Teaching is the greatest act of optimism.", author: "Colleen Wilcox", emoji: "🌤️" },
  { text: "A teacher who loves learning earns the right and ability to help others learn.", author: "Ruth Beechick", emoji: "💡" },
];

function QuoteCard({ quote, index }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add('visible'); },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="quote-card"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <p className="quote-text">{quote.text}</p>
      <div className="quote-author">— {quote.author}</div>
      <span className="quote-emoji">{quote.emoji}</span>
    </div>
  );
}

export default function QuotesWall() {
  return (
    <section className="quotes-section" id="quotes">
      <h2 className="section-title">Words of Wisdom</h2>
      <p className="section-subtitle">Timeless truths from the greatest teachers the world has ever known</p>
      <div className="quotes-grid">
        {QUOTES.map((q, i) => <QuoteCard key={i} quote={q} index={i} />)}
      </div>
    </section>
  );
}
