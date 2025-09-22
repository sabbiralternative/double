import { useEffect, useState } from "react";
import { cards } from "./Card";

const Animation = ({ loading, counter, setLoading, setCounter }) => {
  const [cardName, setCardName] = useState(null);
  const [translateX, setTranslateX] = useState(0);

  useEffect(() => {
    if (counter === 0) {
      setTranslateX(-10000);

      const timeout = setTimeout(() => {
        const cards = ["green", "red", "yellow"];
        const randomCard = cards[Math.floor(Math.random() * cards.length)];
        setCardName(randomCard);
        setTranslateX(0);

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

  const style =
    cardName === "green"
      ? "+ 50% - 68px"
      : cardName === "red"
      ? "+ 50% - 68px - 140px"
      : "+ 50% - 68px - 140px - 140px";

  return (
    <>
      <div className="absolute top-[75px] lg:top-[150px] left-0 z-50 w-full  p-2">
        <div className="relative flex flex-col justify-center items-center">
          <div
            className="h-[105%] lg:h-[140%] absolute flex items-center justify-center w-[6px] z-[99999]"
            style={{
              backgroundImage:
                "linear-gradient(to bottom, #272729, white,#272729)",
            }}
          />
          <div
            className="flex w-full whitespace-nowrap gap-x-3 items-center justify-start py-2.5 lg:py-0 animation-container"
            style={{
              transform: loading
                ? "none"
                : cardName
                ? `translateX(calc(${translateX}px ${style}))`
                : `translateX(${translateX}px)`,
              transitionProperty: "transform",
              transitionDuration: "5s",
            }}
          >
            {cards.map((Card, i) => (
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
