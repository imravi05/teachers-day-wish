import { useEffect } from 'react';

const FLOAT_ICONS = ['📚','✏️','🎓','📝','🌟','💡','🔬','🎨','📐','🧮','🌍','🏆'];

export default function Hero() {
  useEffect(() => {
    const container = document.getElementById('floating-icons');
    if (!container) return;
    FLOAT_ICONS.forEach((icon, i) => {
      const el = document.createElement('span');
      el.className = 'fi';
      el.textContent = icon;
      el.style.left = Math.random() * 95 + '%';
      el.style.bottom = '-60px';
      el.style.animationDuration = (12 + Math.random() * 14) + 's';
      el.style.animationDelay = (i * 1.8) + 's';
      el.style.fontSize = (1.2 + Math.random() * 1.4) + 'rem';
      container.appendChild(el);
    });
  }, []);

  return (
    <section className="hero" id="home">
      <div className="floating-icons" id="floating-icons" />

      <div className="hero-badge">🎓 Happy Teachers&apos; Day · September 5th</div>

      <h1 className="hero-title">
        To the<br />
        <span className="line-gold">Architects</span><br />
        of Minds
      </h1>

      <p className="hero-sub">Every great soul was shaped by a great teacher.</p>

      <p className="hero-desc">
        On this special day, we pause to honour the incredible people who gave us
        more than knowledge — they gave us <em>wings</em>. This tribute is for every
        teacher who saw potential in us before we saw it ourselves.
      </p>

      <div className="hero-scroll">
        <div className="scroll-arrow" />
        <span>Scroll to explore</span>
      </div>
    </section>
  );
}
