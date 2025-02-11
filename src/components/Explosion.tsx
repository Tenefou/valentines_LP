import { motion } from 'framer-motion';

const Explosion = () => {
  const particles = Array.from({ length: 100 });

  return (
    <div
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
      }}
    >
      {particles.map((_, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 1, scale: 0 }}
          animate={{
            opacity: 0,
            scale: 10,
            x: Math.random() * 2000 - 1000,
            y: Math.random() * 2000 - 1000,
          }}
          transition={{ duration: 1 }}
          style={{
            position: 'absolute',
            width: '10px',
            height: '10px',
            backgroundColor: 'red',
            borderRadius: '50%',
          }}
        />
      ))}
    </div>
  );
};

export default Explosion;
