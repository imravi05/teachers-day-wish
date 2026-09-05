export function launchConfetti() {
  const colors = ['#f5c842', '#ff8c42', '#ff6b8a', '#a78bfa', '#60efff', '#7fff6e'];
  for (let i = 0; i < 130; i++) {
    setTimeout(() => {
      const el = document.createElement('div');
      el.className = 'confetti-piece';
      el.style.left = Math.random() * 100 + 'vw';
      el.style.background = colors[Math.floor(Math.random() * colors.length)];
      el.style.width = (6 + Math.random() * 8) + 'px';
      el.style.height = (6 + Math.random() * 14) + 'px';
      el.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
      el.style.setProperty('--drift', (Math.random() * 200 - 100) + 'px');
      el.style.animationDuration = (2 + Math.random() * 2.5) + 's';
      document.body.appendChild(el);
      el.addEventListener('animationend', () => el.remove());
    }, i * 16);
  }
}
