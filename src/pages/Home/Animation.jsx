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

  const CARD_WIDTH_WITH_GAP = 142;

  useEffect(() => {
    if (counter === 0) {
      const totalCards = moreCards.length;
      const randomStopIndex = Math.floor(Math.random() * totalCards);
      const randomFinalTranslate = randomStopIndex * CARD_WIDTH_WITH_GAP;
      // const cardAtIndex = moreCards[randomStopIndex];
      // const cardType = cardAtIndex.name;

      // Find the first card of the same type
      // const firstCardOfTypeIndex = moreCards.findIndex(
      //   (card) => card.name === cardType
      // );

      // // Calculate final translate to center the first card of the same type
      // const finalTranslate =
      //   firstCardOfTypeIndex !== -1
      //     ? firstCardOfTypeIndex * CARD_WIDTH_WITH_GAP
      //     : randomFinalTranslate;

      // First move to random position (where any card will be centered)
      setTranslateX(randomFinalTranslate);

      const timeout = setTimeout(() => {
        /* 60 green, red 200, yellow 343 */
        const numbers = [60, 200, 343];
        const randomCardPosition =
          numbers[Math.floor(Math.random() * numbers.length)];
        setTranslateX(randomCardPosition);

        setTimeout(() => {
          setLoading(true);
          setCounter(8);
        }, 6000);
      }, 3000);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [counter, setLoading, setCounter]);
  console.log({ translateX });
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
            className="flex w-full whitespace-nowrap gap-x-3 items-center justify-start py-5 lg:py-0"
            style={{
              transform: loading ? "none" : `translateX(-${translateX}px)`,
              transitionProperty: "transform",
              transitionDuration: "5s",
              transitionTimingFunction: "ease-in-out",
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
