const PILLARS = [
  { icon: '🔥', title: 'Passion',    desc: 'They ignite the spark that no storm can extinguish.' },
  { icon: '🧭', title: 'Direction',  desc: 'They are the compass when we are lost in the fog.' },
  { icon: '🛡️', title: 'Confidence', desc: 'They believe in us — and teach us to believe in ourselves.' },
  { icon: '🌱', title: 'Growth',     desc: 'They water our potential with patience and care.' },
  { icon: '🌍', title: 'Vision',     desc: 'They open our eyes to a world bigger than our fears.' },
];

export default function Pillars() {
  return (
    <section className="pillars-section" id="pillars">
      <h2 className="section-title">What Teachers Give Us</h2>
      <p className="section-subtitle">Gifts that last a lifetime</p>
      <div className="pillars-grid">
        {PILLARS.map((p, i) => (
          <div className="pillar-card" key={i}>
            <div className="pillar-icon">{p.icon}</div>
            <div className="pillar-title">{p.title}</div>
            <div className="pillar-desc">{p.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
