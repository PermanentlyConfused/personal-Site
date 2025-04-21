"use client";
import { useEffect, useRef, useState } from "react";

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [cursorPosition, setCursorPosition] = useState<{
    x: number;
    y: number;
  }>({
    x: 0,
    y: 0,
  });

  const requestRef = useRef<number | undefined>(undefined);

  const handleMouseMove = (e: MouseEvent) => {
    const scrollX = window.scrollX;
    const scrollY = window.scrollY;

    setCursorPosition({
      x: e.clientX + scrollX,
      y: e.clientY + scrollY,
    });
  };

  useEffect(() => {
    const updateCursorPosition = () => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${cursorPosition.x}px`;
        cursorRef.current.style.top = `${cursorPosition.y}px`;
      }

      requestRef.current = requestAnimationFrame(updateCursorPosition);
    };

    requestRef.current = requestAnimationFrame(updateCursorPosition);

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      cancelAnimationFrame(requestRef.current!);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [cursorPosition]);

  return (
    <>
      <div
        ref={cursorRef}
        className={`pointer-events-none absolute h-12 w-12 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-white opacity-80 transition-all duration-100 ease-out`}
      ></div>

      <div
        className="pointer-events-none absolute h-16 w-16 -translate-x-1/2 -translate-y-1/2 transform rounded-full border-2 border-white opacity-40 transition-all duration-100 ease-out"
        style={{
          left: `${cursorPosition.x}px`,
          top: `${cursorPosition.y}px`,
          opacity: isHovered ? 0.6 : 0,
        }}
      ></div>
    </>
  );
};

export default CustomCursor;
