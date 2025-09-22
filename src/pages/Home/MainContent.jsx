import { useEffect, useRef, useState } from "react";
import Animation from "./Animation";
import BetSlip from "./BetSlip";
import History from "./History";

const MainContent = () => {
  const ref = useRef();
  const [counter, setCounter] = useState(8);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (counter > 0) {
      setLoading(false);
      const interval = setInterval(() => {
        setCounter((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [counter, loading]);

  return (
    <div
      ref={ref}
      className="lg:w-[60%] w-full lg:h-full flex transition-all xl:max-h-[800px] duration-300 flex-col items-center justify-center lg:py-2 lg:pl-0 px-2 py-1"
    >
      <div
        id="game-container"
        className="relative flex flex-col items-center justify-start w-full h-full overflow-hidden rounded-2xl bg-zinc-800"
        style={{
          pointerEvents: "auto",
          backgroundImage: 'url("images/bg.webp")',
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      >
        {/* <NotUsing /> */}
        <Animation
          innerWidth={ref.current?.clientWidth}
          loading={loading}
          counter={counter}
          setLoading={setLoading}
          setCounter={setCounter}
        />
        <div
          className="absolute bg-white/10 top-12 left-2 p-2 rounded-full flex items-center gap-2"
          style={{ zIndex: 1000 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={15}
            height={15}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-white"
          >
            <path d="M18 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
            <path d="M6 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
            <path d="M6 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
            <path d="M18 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
            <path d="M8 18h8" />
            <path d="M18 20v1" />
            <path d="M18 3v1" />
            <path d="M6 20v1" />
            <path d="M6 10v-7" />
            <path d="M12 3v18" />
            <path d="M18 8v8" />
            <path d="M8 12h13" />
            <path d="M21 6h-1" />
            <path d="M16 6h-13" />
            <path d="M3 12h1" />
            <path d="M20 18h1" />
            <path d="M3 18h1" />
            <path d="M6 14v2" />
          </svg>
        </div>
        <History />
        <div className="__className_c0817f flex w-full lg:h-full h-80 flex-col gap-2 justify-center items-center">
          {counter > 0 && (
            <div
              className="text-2xl absolute top-[13%] left-1/2 -translate-x-1/2 font-bold lg:text-4xl -py-2 text-transparent bg-clip-text"
              style={{
                backgroundImage:
                  "linear-gradient(to top,white 50%, rgba(255, 255, 255, 0.314) 51%)",
                backgroundSize: "100% 200%",
                backgroundPositionY: loading ? "100%" : "20%",
                opacity: 1,
                transition: "background-position-y 8s linear",
              }}
            >
              Rolling in {counter}s
            </div>
          )}

          {/* <div className="text-2xl absolute top-[20%] left-1/2 -translate-x-1/2 font-bold lg:text-4xl -py-2 text-transparent bg-clip-text" style="background-image: linear-gradient(to top, white 50%, rgba(255, 255, 255, 0.314) 51%); background-size: 100% 200%; background-position-y: 0%; opacity: 1; transition: background-position-y 8s linear;">Rolling in 2s</div> */}
          <div
            className="w-full h-full max-w-7xl mx-auto"
            style={{
              maskImage:
                "linear-gradient(to right,rgba(0, 0, 0, 0), rgb(0, 0, 0), rgba(0,0, 0, 0))",
            }}
          >
            <div className style={{ width: "100%", height: "100%" }}>
              <canvas
                style={{
                  verticalAlign: "top",
                  width: "560px",
                  height: "320px",
                }}
                width={560}
                height={320}
              />
            </div>
          </div>
          <BetSlip />
        </div>
      </div>
    </div>
  );
};

export default MainContent;
