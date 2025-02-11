import { motion } from 'framer-motion'; // Assurez-vous que vous utilisez la bonne importation pour Framer Motion
import './App.css';
import { useState } from 'react';

function App() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const [imageSrc, setImageSrc] = useState('/vert.jpg');

  const [animation, setAnimation] = useState({ scale: 1, rotate: 0 });

  const [, setTimer] = useState<NodeJS.Timeout | null>(null);

  const generateRandomPosition = () => {
    const randomX = Math.random() * 2000 - 1000;
    const randomY = Math.random() * 400 - 200;
    return { x: randomX, y: randomY };
  };

  const handleHoverStartNo = () => {
    setPosition(generateRandomPosition());
    setImageSrc('/rouge.png');

    const newTimer = setTimeout(() => {
      setImageSrc('/vert.jpg');
    }, 300);
    setTimer(newTimer);
  };

  const handleHoverStartYes = () => {
    setAnimation({ scale: 3, rotate: 360 });
    setImageSrc('/Happy.jpeg');
  };

  const handleHoverEndYes = () => {
    setAnimation({ scale: 1, rotate: 0 });
    setImageSrc('/rouge.png');
  };

  return (
    <div className="hero">
      <img src={imageSrc} alt="Placeholder" />
      <h1> ?</h1>
      <div className="buttons">
        <motion.button
          initial={{ scale: 1 }}
          animate={animation}
          onHoverStart={handleHoverStartYes}
          onHoverEnd={handleHoverEndYes}
          transition={{ type: 'spring' }}
        >
          Yes
        </motion.button>

        <motion.button
          initial={{ x: 0, y: 0 }}
          animate={{ x: position.x, y: position.y }}
          onHoverStart={handleHoverStartNo}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          No
        </motion.button>
      </div>
    </div>
  );
}

export default App;
