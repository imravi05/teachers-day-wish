import { useState } from 'react';
import './index.css';

import ParticleCanvas from './components/ParticleCanvas';
import Curtain        from './components/Curtain';
import Hero           from './components/Hero';
import QuotesWall     from './components/QuotesWall';
import TributeLetter  from './components/TributeLetter';
import Pillars        from './components/Pillars';
import MessageBoard   from './components/MessageBoard';

export default function App() {
  const [revealed, setRevealed] = useState(false);

  return (
    <>
      <ParticleCanvas />

      <Curtain hidden={revealed} onEnter={() => setRevealed(true)} />

      <main>
        <Hero />
        <QuotesWall />
        <TributeLetter />
        <Pillars />
        <MessageBoard />
      </main>

      <footer>
        <p>Made with <span className="heart">♥</span> to honour every teacher who ever believed in a student.</p>
        <p style={{ marginTop: '0.5rem' }}>Happy Teachers&apos; Day · September 5</p>
      </footer>
    </>
  );
}

