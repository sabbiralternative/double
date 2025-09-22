import { useEffect, useState } from "react";
import Green from "./Card/Green";
import Red from "./Card/Red";
import Yellow from "./Card/Yellow";

const cards = [
  {
    component: <Yellow />,
    name: "yellow",
  },
  {
    component: <Green />,
    name: "green",
  },
  {
    component: <Red />,
    name: "red",
  },
  {
    component: <Yellow />,
    name: "yellow",
  },
  {
    component: <Green />,
    name: "green",
  },
  {
    component: <Red />,
    name: "red",
  },
  {
    component: <Yellow />,
    name: "yellow",
  },
  {
    component: <Green />,
    name: "green",
  },
  {
    component: <Red />,
    name: "red",
  },
  {
    component: <Yellow />,
    name: "yellow",
  },
  {
    component: <Green />,
    name: "green",
  },
  {
    component: <Red />,
    name: "red",
  },
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
  ...cards,
  ...cards,
  ...cards,
  ...cards,
  ...cards,
  ...cards,
];

const Animation = ({ loading, counter, setLoading, setCounter }) => {
  const [translateX, setTranslateX] = useState(0);

  useEffect(() => {
    if (counter === 0) {
      setTranslateX(-10000);

      const timeout = setTimeout(() => {
        /* 60 green, red 200, yellow 80 */
        const numbers = [-60, -200, 80];
        const randomCardPosition =
          numbers[Math.floor(Math.random() * numbers.length)];
        const element = document.querySelector(".animation-container");
        element.style.transition = "none";
        setTranslateX(randomCardPosition);
        element.offsetHeight; // trigger reflow
        element.style.transition = "transform 5s";

        setTimeout(() => {
          setLoading(true);
          setCounter(8);
        }, 6000);
      }, 2000);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [counter, setLoading, setCounter]);

  return (
    <>
      <div className="absolute top-[60px] lg:top-[150px] left-0 z-50 w-full backdrop-blur-sm p-2">
        <div className="relative flex flex-col justify-center items-center">
          <div
            className="h-[120%] lg:h-[140%] absolute flex items-center justify-center w-[6px] z-[99999]"
            style={{
              backgroundImage:
                "linear-gradient(to bottom, #272729, white,#272729)",
            }}
          />
          <div
            className="flex w-full whitespace-nowrap gap-x-3 items-center justify-start py-5 lg:py-0 animation-container"
            style={{
              transform: loading ? "none" : `translateX(${translateX}px)`,
              transitionProperty: "transform",
              transitionDuration: "5s",
              // transitionTimingFunction: "ease-in-out",
            }}
          >
            {moreCards.map((Card, i) => (
              <div key={i} className="inline-block">
                {Card.component}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Animation;
