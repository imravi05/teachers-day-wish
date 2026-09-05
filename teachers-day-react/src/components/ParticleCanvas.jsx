import { useEffect, useRef } from 'react';

export default function ParticleCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animId;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    class Particle {
      constructor() { this.reset(); }
      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.r = 0.5 + Math.random() * 1.5;
        this.vx = (Math.random() - 0.5) * 0.3;
        this.vy = -0.1 - Math.random() * 0.4;
        this.alpha = 0.2 + Math.random() * 0.5;
        this.color = Math.random() > 0.5
          ? `rgba(245,200,66,${this.alpha})`
          : `rgba(200,160,255,${this.alpha})`;
      }
      update() {
        this.x += this.vx; this.y += this.vy;
        if (this.y < -5 || this.x < -5 || this.x > canvas.width + 5) this.reset();
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }

    const particles = Array.from({ length: 120 }, () => new Particle());

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => { p.update(); p.draw(); });
      animId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animId);
    };
  }, []);

  return <canvas ref={canvasRef} id="particle-canvas" />;
}
