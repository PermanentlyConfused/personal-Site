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
        className={`to-[transparent_100%)] pointer-events-none fixed z-[50] hidden h-2 w-2 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-radial from-black opacity-30 select-none lg:block`}
      ></div>
    </>
  );
};

export default CustomCursor;
