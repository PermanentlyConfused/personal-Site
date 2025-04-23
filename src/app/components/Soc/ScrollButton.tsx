import React, { useEffect, useRef } from "react";
import Lenis from "Lenis";

function MyComponent() {
  const lenisRef = useRef(null);

  useEffect(() => {
    lenisRef.current = new Lenis();

    const animate = (time) => {
      lenisRef.current.raf(time);
      requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);

    return () => {
      lenisRef.current.destroy();
    };
  }, []);

  const scrollToCoordinates = (x, y) => {
    lenisRef.current.scrollTo({ x: x, y: y });
  };

  return (
    <div>
      <button onClick={() => scrollToCoordinates(500, 1000)}>
        Scroll to (500, 1000)
      </button>
      {/* Content of your component */}
    </div>
  );
}

export default MyComponent;
