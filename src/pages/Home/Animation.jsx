import { useEffect, useRef, useState } from "react";
import Green from "./Card/Green";
import Red from "./Card/Red";
import Yellow from "./Card/Yellow";

const Animation = () => {
  const [translateX, setTranslateX] = useState(0);
  const requestRef = useRef();
  const speed = 10; // Adjust this for faster/slower scroll
  const cards = [
    <Yellow key="y1" />,
    <Red key="r1" />,
    <Green key="g1" />,
    <Red key="r2" />,
    <Yellow key="y2" />,
    <Green key="g2" />,
    <Red key="r3" />,
    <Yellow key="y3" />,
    <Green key="g3" />,
    <Yellow key="y4" />,
    <Red key="r4" />,
    <Yellow key="y5" />,
    <Green key="g4" />,
    <Red key="r5" />,
    <Yellow key="y6" />,
    <Green key="g5" />,
    <Yellow key="y7" />,
    <Red key="r6" />,
    <Yellow key="y8" />,
    <Green key="g6" />,
  ];

  const animate = () => {
    setTranslateX((prev) => {
      // Reset when fully scrolled to simulate infinite loop
      const resetAt = -1000; // Change this based on actual width of content
      return prev <= resetAt ? 0 : prev - speed;
    });
    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, []);

  return (
    <>
      <div className="h-[300px] fixed right-[30%] top-[20%] flex items-center justify-center w-[5px] bg-white z-[99999]" />

      <div className="absolute top-[60px] lg:top-[150px] left-0 z-50 w-full overflow-hidden backdrop-blur-sm p-2">
        <div
          className="flex w-max whitespace-nowrap gap-3"
          style={{
            transform: `translateX(${translateX}px)`,
          }}
        >
          {[...cards, ...cards, ...cards].map((Card, i) => (
            <div key={i} className="inline-block">
              {Card}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Animation;
