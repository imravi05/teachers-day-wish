import { launchConfetti } from '../utils/confetti';

export default function Curtain({ hidden, onEnter }) {
  const handleEnter = () => {
    launchConfetti();
    onEnter();
  };

  return (
    <div className={`curtain${hidden ? ' hidden' : ''}`} id="curtain">
      <div className="curtain-candle">🕯️</div>
      <h1 className="curtain-title">
        September 5 is<br />
        <span>Teachers&apos; Day</span>
      </h1>
      <p className="curtain-sub">A surprise is waiting for you</p>
      <button className="curtain-cta" onClick={handleEnter} id="enter-btn">
        ✨ Open the Tribute
      </button>
    </div>
  );
}

