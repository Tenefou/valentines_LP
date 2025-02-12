import { motion } from 'framer-motion';
import { useState } from 'react';
import Explosion from './Explosion';
import { useNavigate } from 'react-router-dom';

const Question = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const navigate = useNavigate();
  const [imageSrc, setImageSrc] = useState('/yoyo-monkey.gif');
  const [animation, setAnimation] = useState({ scale: 1, rotate: 0 });
  const [showExplosion, setShowExplosion] = useState(false);
  const [, setTimer] = useState<NodeJS.Timeout | null>(null);

  const generateRandomPosition = () => {
    const randomX = Math.random() * 1400 - 700;
    const randomY = Math.random() * 400 - 400;
    return { x: randomX, y: randomY };
  };

  const handleHoverStartNo = () => {
    setPosition(generateRandomPosition());
    setImageSrc('/Monkey_Mad.gif');

    const newTimer = setTimeout(() => {
      setImageSrc('/yoyo-monkey.gif');
    }, 700);
    setTimer(newTimer);
  };

  const handleHoverStartYes = () => {
    setAnimation({ scale: 3, rotate: 360 });
    setImageSrc('/Happy.jpeg');
  };

  const handleHoverEndYes = () => {
    setAnimation({ scale: 1, rotate: 0 });
    setImageSrc('/yoyo-monkey.gif');
  };

  const handleOnYes = () => {
    navigate('/final');
    setShowExplosion(true);
    setTimeout(() => setShowExplosion(false), 3000);
  };

  return (
    <div className="hero" style={{ position: 'relative' }}>
      <img src={imageSrc} alt="Placeholder" className="responsive-image" />
      <h1>Would you be my Valentine?</h1>
      <div className="buttons">
        <motion.button
          initial={{ scale: 1 }}
          animate={animation}
          onHoverStart={handleHoverStartYes}
          onHoverEnd={handleHoverEndYes}
          transition={{ type: 'spring' }}
          onClick={handleOnYes}
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
      {showExplosion && <Explosion />}
    </div>
  );
};

export default Question;
