import toast from "react-hot-toast";

const Sidebar = ({ setStake, stake, handlePlaceBet }) => {
  const handleDecreaseAmount = () => {
    const decreaseAmount = stake / 2;
    if (decreaseAmount < 50) {
      return toast.error("Minimum amount is 50");
    } else {
      setStake(stake / 2);
    }
  };
  const handleIncreaseAmount = () => {
    const decreaseAmount = stake * 2;
    if (decreaseAmount > 10000) {
      return toast.error("Maximum amount is 10000");
    } else {
      setStake(stake * 2);
    }
  };

  return (
    <div className="lg:w-[40%] relative w-full px-2 scrollbar-none lg:overflow-y-auto lg:h-[94dvh]">
      <div className="flex items-center gap-2 py-2 px-1 text-xs font-semibold text-zinc-500">
        <span className="flex items-center gap-2">
          Round 150774341
          <span className="rounded-full cursor-pointer text-zinc-500 active:text-green-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4"
            >
              <path d="M7 7m0 2.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667z" />
              <path d="M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1" />
            </svg>
          </span>
        </span>
        <span className="ml-auto">Bet Limits</span>
        <span>50 - 10K</span>
      </div>
      <div className="flex flex-col items-center justify-start w-full text-white rounded-2xl lg:rounded-3xl bg-zinc-800">
        <div className="w-full h-full flex flex-col lg:p-2">
          <div className="flex flex-col gap-2 p-1">
            <div className="grid grid-cols-2 gap-1 lg:grid-cols-1">
              <div className="flex flex-col items-center justify-between w-full gap-[1px]">
                <div className="flex items-center justify-between gap-1 border rounded-t-xl p-1 bg-zinc-900 w-full has-[input:focus]:border-green-400 border-transparent">
                  <button
                    onClick={handleDecreaseAmount}
                    className="flex items-center justify-center w-8 h-6 p-2 text-xs font-medium rounded-lg cursor-pointer lg:w-10 lg:h-10 bg-zinc-800 text-zinc-400 lg:text-base active:scale-95"
                  >
                    1/2
                  </button>
                  <input
                    placeholder="Amount"
                    className="w-full text-center h-6 bg-transparent outline-none font-semibold"
                    type="text"
                    value={stake ? stake : null}
                  />
                  <button
                    onClick={handleIncreaseAmount}
                    className="flex items-center justify-center w-8 h-6 p-2 text-xs font-medium rounded-lg cursor-pointer lg:w-10 lg:h-10 bg-zinc-800 text-zinc-400 lg:text-base active:scale-95"
                  >
                    2x
                  </button>
                </div>
                <div className="flex items-center justify-between w-full gap-1 p-1 border border-transparent rounded-b-xl bg-zinc-900 text-white/50">
                  <button
                    onClick={() => setStake(250)}
                    className="hidden lg:flex items-center justify-center w-full h-6 text-xs font-medium rounded-lg cursor-pointer lg:h-10 lg:text-base bg-zinc-800 text-zinc-400 active:scale-95"
                  >
                    250
                  </button>
                  <button
                    onClick={() => setStake(500)}
                    className="flex items-center justify-center w-full h-6 text-xs font-medium rounded-lg cursor-pointer lg:h-10 lg:text-base bg-zinc-800 text-zinc-400 active:scale-95"
                  >
                    500
                  </button>
                  <button
                    onClick={() => setStake(5000)}
                    className="flex items-center justify-center w-full h-6 text-xs font-medium rounded-lg cursor-pointer lg:h-10 lg:text-base bg-zinc-800 text-zinc-400 active:scale-95"
                  >
                    5K
                  </button>
                  <button
                    onClick={() => setStake(10000)}
                    className="flex items-center justify-center w-full h-6 text-xs font-medium rounded-lg cursor-pointer lg:h-10 lg:text-base bg-zinc-800 text-zinc-400 active:scale-95"
                  >
                    10K
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-center w-full h-full gap-1 select-none overflow-hidden">
                <button className="w-full h-full flex-grow p-4 rounded-xl font-bold active:scale-[0.99] cursor-pointer whitespace-nowrap bg-zinc-800 text-zinc-400 hidden lg:flex items-center justify-center border-4 border-zinc-900">
                  ALL IN
                </button>
                <button
                  onClick={handlePlaceBet}
                  className="relative w-full h-full flex-grow p-4 font-bold overflow-hidden rounded-xl active:scale-[0.99] cursor-pointer whitespace-nowrap"
                  style={{
                    background:
                      "linear-gradient( to right,rgb(87, 222, 119),  rgb(2, 185, 121), rgb(2, 185, 121))",
                  }}
                >
                  <div className="flex-col flex justify-center items-center -gap-1 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    BET
                    <span className="text-[10px]">For next round</span>
                  </div>
                </button>
              </div>
            </div>
            <div className="flex items-center justify-between w-full p-1 rounded-md">
              <div className="flex items-center justify-start w-1/2 gap-2" />
              <div className="flex items-center justify-center gap-2 text-white/50">
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={20}
                    height={20}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-zinc-500"
                  >
                    <path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z" />
                    <path d="M12 8v4" />
                    <path d="M12 16h.01" />
                  </svg>
                </button>
                <button className="flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={20}
                    height={20}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-zinc-300"
                  >
                    <path d="M15 8a5 5 0 0 1 0 8" />
                    <path d="M17.7 5a9 9 0 0 1 0 14" />
                    <path d="M6 15h-2a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h2l3.5 -4.5a.8 .8 0 0 1 1.5 .5v14a.8 .8 0 0 1 -1.5 .5l-3.5 -4.5" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="w-full flex flex-col items-center justify-start rounded-md gap-3 transition-all duration-300 overflow-hidden max-h-0 -mt-2 opacity-0">
              <div className="flex flex-col w-full gap-0.5 font-semibold">
                <span className="px-2 text-sm text-zinc-400 font-medium">
                  Number of rounds
                </span>
                <div className="flex group items-center w-full gap-1 p-1 rounded-xl border bg-zinc-900 has-[input:focus]:border-green-400 border-zinc-800 text-zinc-300">
                  <input
                    min={0}
                    placeholder="∞"
                    className="z-40 w-full p-1 pl-2 bg-transparent border border-transparent focus:outline-none"
                    type="numaric"
                    defaultValue
                  />
                  <button
                    value={0}
                    className="px-4 py-2 h-full text-sm rounded-lg bg-zinc-800 font-medium active:scale-95 text-zinc-400"
                  >
                    ∞
                  </button>
                  <button
                    value={10}
                    className="px-4 py-2 h-full text-sm rounded-lg bg-zinc-800 font-medium active:scale-95 text-zinc-400"
                  >
                    10
                  </button>
                  <button
                    value={100}
                    className="px-4 py-2 h-full text-sm rounded-lg bg-zinc-800 font-medium active:scale-95 text-zinc-400"
                  >
                    100
                  </button>
                </div>
              </div>
              <div className="flex flex-col w-full gap-0.5 font-semibold">
                <div className="flex items-center justify-between font-medium w-full gap-1">
                  <span className="px-2 text-sm text-zinc-400">On lose</span>
                </div>
                <div className="flex w-full gap-0.5">
                  <div className="flex items-center gap-1 p-1 border rounded-xl bg-zinc-900 border-zinc-800">
                    <button
                      value="Reset"
                      className="px-2 h-full text-xs whitespace-nowrap font-medium rounded-lg active:scale-95 bg-zinc-800 text-zinc-300"
                    >
                      Reset
                    </button>
                    <button
                      value="Increase By"
                      className="px-2 h-full text-xs whitespace-nowrap font-medium rounded-lg active:scale-95 text-zinc-500"
                    >
                      Increase By
                    </button>
                  </div>
                  <div className="relative flex items-center w-full text-zinc-300 bg-zinc-900 rounded-xl border border-zinc-800 has-[input:focus]:border-red-400">
                    <input
                      disabled
                      placeholder={0}
                      className="z-40 w-full p-2 pl-3 bg-transparent disabled:text-zinc-600 border border-transparent focus:outline-none opacity-10"
                      type="text"
                      defaultValue
                    />
                    <span className="absolute transform -translate-y-1/2 text-zinc-600 top-1/2 right-2">
                      %
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-full gap-0.5 font-semibold">
                <div className="flex items-center justify-between w-full font-medium gap-1">
                  <span className="px-2 text-sm text-zinc-400">On win</span>
                </div>
                <div className="flex w-full gap-0.5">
                  <div className="flex items-center gap-1 p-1 border rounded-xl bg-zinc-900 border-zinc-800">
                    <button
                      value="Reset"
                      className="px-2 h-full text-xs whitespace-nowrap font-medium rounded-lg active:scale-95 bg-zinc-800 text-zinc-300"
                    >
                      Reset
                    </button>
                    <button
                      value="Increase By"
                      className="px-2 h-full text-xs whitespace-nowrap font-medium rounded-lg active:scale-95 text-zinc-500"
                    >
                      Increase By
                    </button>
                  </div>
                  <div className="relative flex items-center w-full text-zinc-300 bg-zinc-900 rounded-xl border border-zinc-800 has-[input:focus]:border-red-400">
                    <input
                      disabled
                      placeholder={0}
                      className="z-40 w-full p-2 pl-3 bg-transparent disabled:text-zinc-600 border border-transparent focus:outline-none opacity-10"
                      type="text"
                      defaultValue
                    />
                    <span className="absolute transform -translate-y-1/2 text-zinc-600 top-1/2 right-2">
                      %
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-full gap-0.5 font-semibold">
                <div className="flex items-center justify-between w-full gap-1">
                  <span className="px-2 text-sm text-zinc-400 font-medium">
                    Stop on lose
                  </span>
                </div>
                <div className="relative overflow-hidden flex items-center w-full text-zinc-300 bg-zinc-900 rounded-xl border has-[input:focus]:border-green-400 border-zinc-800">
                  <input
                    placeholder={0}
                    className="z-40 w-full p-2 pl-3 bg-transparent disabled:text-zinc-600 border border-transparent focus:outline-none"
                    type="text"
                    defaultValue
                  />
                  <span
                    className="absolute flex items-center font-mono text-xs transform -translate-y-1/2 text-zinc-600 top-1/2 right-2"
                    style={{ opacity: 0 }}
                  >
                    0/0
                  </span>
                  <div
                    className="absolute bottom-0 left-0 flex items-center justify-center h-1 bg-red-400 autoAnimate"
                    style={{ opacity: 0 }}
                  />
                </div>
              </div>
              <div className="flex flex-col w-full gap-0.5 font-semibold">
                <div className="flex items-center justify-between w-full gap-1">
                  <span className="px-2 text-sm text-zinc-400 font-medium">
                    Stop on win
                  </span>
                </div>
                <div className="relative flex items-center overflow-hidden w-full text-zinc-300 bg-zinc-900 rounded-xl border has-[input:focus]:border-green-400 border-zinc-800">
                  <input
                    placeholder={0}
                    className="z-40 w-full p-2 pl-3 bg-transparent disabled:text-zinc-600 border border-transparent focus:outline-none"
                    type="text"
                    defaultValue
                  />
                  <span
                    className="absolute font-mono text-xs transform -translate-y-1/2 text-zinc-600 top-1/2 right-2"
                    style={{ opacity: 0 }}
                  >
                    0/0
                  </span>
                  <div
                    className="absolute bottom-0 left-0 flex items-center justify-center h-1 bg-green-400 autoAnimate"
                    style={{ opacity: 0 }}
                  />
                </div>
              </div>
              <p className="p-2 text-xs tracking-wider text-justify font-semibold text-zinc-500">
                Use of script is optional and players must take full
                responsibility for any attendant risks.We will not be held
                liable in this regard.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        id="step-gameParticipants"
        className="jsx-2622757222 relative w-full overflow-hidden min-h-[420px] scrollbar-none"
      >
        <div className="jsx-2622757222 flex items-center justify-between p-2">
          <span className="jsx-2622757222 text-sm font-semibold text-zinc-400">
            ALL BETS
            <span className="jsx-2622757222 text-green-500">1</span>
          </span>
          <div className="jsx-2622757222 relative flex items-center gap-1 p-1 ml-auto font-medium border rounded-full bg-zinc-800 border-zinc-700/50">
            <button className="jsx-2622757222 flex z-50 items-center justify-between text-zinc-400 px-4 py-2 text-xs font-medium rounded-full">
              All bets
            </button>
            <button className="jsx-2622757222 flex z-50 items-center justify-between text-zinc-400 px-4 py-2 text-xs font-medium rounded-full">
              My bets
            </button>
            <span className="jsx-2622757222 absolute left-0 z-40 bg-zinc-900 transition-all w-1/2 h-full rounded-l-full" />
          </div>
        </div>
        <div className="jsx-2622757222 flex flex-col gap-0.5 rounded-2xl overflow-hidden whitespace-nowrap border border-zinc-800">
          <div className="jsx-2622757222 flex w-full px-4 py-2 text-xs font-medium bg-zinc-800 text-zinc-100">
            <div className="jsx-2622757222 flex-1 p-2 text-left">User</div>
            <div className="jsx-2622757222 flex-1 p-2 text-right">Amount</div>
            <div className="jsx-2622757222 flex-1 p-2 text-left">Options</div>
            <div className="jsx-2622757222 flex-1 p-2 text-right">Profit</div>
          </div>
          <div className="jsx-2622757222 w-full px-4 rounded-sm text-xs font-medium flex text-zinc-400 bg-zinc-900">
            <div className="jsx-2622757222 flex-1 p-2 text-start">8032***</div>
            <div className="jsx-2622757222 flex-1 p-2 text-right">50.00</div>
            <div className="jsx-2622757222 p-2 text-start flex-1">orange</div>
            <div className="jsx-2622757222 p-2 flex items-center gap-1 text-right justify-end flex-1 text-gray-500">
              <span className="jsx-2622757222 profit-animation"> 50</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
