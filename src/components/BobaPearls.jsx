import React, { useMemo } from 'react';
import './BobaPearls.css';

const MAX_PEARLS = 50;

const BobaPearls = ({ count }) => {
  // Generate pearl positions ONCE
  const pearlData = useMemo(() => {
    return Array.from({ length: MAX_PEARLS }, () => ({
      left: Math.random() * 90,
      bottom: 5 + Math.random() * 65,
      duration: 2.5,
    }));
  }, []);

  return (
    <>
      {pearlData.map((p, i) => (
        <img
          key={i}
          src={"/images/boba_pearl.webp"}
          className="boba-pearl"
          style={{
            left: `${p.left}%`,
            bottom: `${p.bottom}%`,
            animationDuration: `${p.duration}s`,
            display: i < count ? 'block' : 'none',
            width: '2.5vw',
          }}
          alt="boba pearl"
        />
      ))}
    </>
  );
};

export default BobaPearls;
