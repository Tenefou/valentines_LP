import { useEffect, useState } from 'react';
import Explosion from './Explosion';

function Final() {
  const [showExplosion, setShowExplosion] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowExplosion(true);
      setTimeout(() => {
        setShowExplosion(false);
      }, 1000);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="hero"
      style={{
        height: '100vh',
        backgroundImage:
          'url(/watercolor-hearts-seamless-pattern_1108-561.jpg)',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
          gap: '300px',
          position: 'relative',
          overflow: 'hidden',
          width: '100vw',
          height: '100vh',
        }}
      >
        {showExplosion && <Explosion />}
        <img src="/monke-monkey.gif" alt="monkey1" />
        <img src="/spinning-monkey.gif" alt="monkey2" />
        <img src="/giphy.webp" alt="monkey3" />
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '100px',
        }}
      >
        <h1>YAAAAAY !!!!</h1>
      </div>
    </div>
  );
}

export default Final;
