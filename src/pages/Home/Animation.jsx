import { useEffect, useState } from "react";
import Green from "./Card/Green";
import Red from "./Card/Red";
import Yellow from "./Card/Yellow";

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
const moreCards = [
  ...cards,
  ...cards,
  ...cards,
  ...cards,
  ...cards,
  ...cards,
  ...cards,
  ...cards,
  ...cards,
  ...cards,
  ...cards,
  ...cards,
  ...cards,
  ...cards,
  ...cards,
  ...cards,
  ...cards,
  ...cards,
  ...cards,
  ...cards,
];

const Animation = ({ loading, counter, setLoading, setCounter }) => {
  const [cardData, setCardData] = useState(moreCards);
  const [translateX, setTranslateX] = useState(0);

  useEffect(() => {
    if (counter === 0) {
      setCardData((prev) => [...prev, ...moreCards]);
      const random = Math.floor(Math.random() * (50 - 30 + 1)) + 30;
      const multiply = 200 * random;
      setTranslateX((prev) => prev + multiply);

      const timeout = setTimeout(() => {
        setLoading(true);
        setCounter(8);
      }, 6000);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [counter, setLoading, setCounter]);

  return (
    <>
      <div className="absolute top-[60px] lg:top-[150px] left-0 z-50 w-full  backdrop-blur-sm p-2 ">
        <div className="relative flex flex-col justify-center items-center">
          <div
            className="h-[120%] lg:h-[140%] absolute  flex items-center justify-center w-[6px]  z-[99999]"
            style={{
              backgroundImage:
                "linear-gradient(to bottom, #272729, white,#272729)",
            }}
          />
          <div
            className="flex w-max whitespace-nowrap gap-3"
            style={{
              transform: loading ? "none" : `translateX(-${translateX}px)`,
              transitionProperty: "transform",
              transitionDuration: "5s",
              transitionTimingFunction: "ease-in-out",
            }}
          >
            {cardData.map((Card, i) => (
              <div key={i} className="inline-block">
                {Card}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Animation;
