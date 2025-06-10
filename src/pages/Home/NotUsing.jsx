const NotUsing = () => {
  return (
    <div
      className="absolute max-h-full p-1 overflow-y-auto bg-zinc-800"
      style={{
        zIndex: 1001,
        top: "-100%",
        left: "0px",
        width: "100%",
        transition: "top 0.3s ease-in-out",
      }}
    >
      <div className="px-2 py-1 flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={16}
          height={16}
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
        <span className="text-white text-xs font-medium">Trend Chart </span>
        <span className="text-white/50 text-[10px] font-normal">
          last 100 rounds
        </span>
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
          className="text-white ml-auto"
        >
          <path d="M18 6l-12 12" />
          <path d="M6 6l12 12" />
        </svg>
      </div>
      <div className="rounded-xl flex w-full bg-zinc-900 overflow-auto scrollbar-thin scrollbar-thumb-gray-500 p-1 gap-0.5">
        <div className="flex flex-col gap-0.5">
          <div className="rounded-full">
            <div className="w-6 h-6 bg-white/5 rounded-lg p-[3px]">
              <svg
                className="p-1 w-full h-full"
                width={199}
                height={199}
                viewBox="0 0 199 199"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_3851_14)">
                  <path
                    d="M29.3969 169.3L0.296875 99.2L29.2969 29L99.3969 0L169.497 29L198.597 99.1L169.597 169.2L99.4969 198.3L29.3969 169.3Z"
                    fill="#FFB240"
                  />
                  <path
                    d="M48.0016 150.6L26.6016 99.1998L47.9016 47.5998L99.4016 26.2998L150.902 47.5998L172.302 99.0998L151.002 150.6L99.5016 172L48.0016 150.6Z"
                    fill="#FCBA63"
                  />
                  <path
                    d="M99.5 198.3V172L151 150.6L169.6 169.2L99.5 198.3Z"
                    fill="#DE9A3B"
                  />
                  <path
                    d="M99.4985 198.3V172L47.9985 150.6L29.3984 169.2L99.4985 198.3Z"
                    fill="#E48914"
                  />
                  <path
                    d="M169.6 169.2L151 150.6L172.3 99.0996H198.6L169.6 169.2Z"
                    fill="#E48914"
                  />
                  <path
                    opacity="0.3"
                    d="M29.3969 169.3L47.9969 150.7L26.6969 99.1996L0.296875 99.0996L29.3969 169.3Z"
                    fill="white"
                  />
                  <path
                    opacity="0.3"
                    d="M198.598 99.1H172.298L150.898 47.6L169.498 29L198.598 99.1Z"
                    fill="white"
                  />
                  <g opacity="0.3">
                    <path
                      d="M29.2969 29L47.8969 47.6L26.5969 99.2H0.296875L29.2969 29Z"
                      fill="#FCBA63"
                    />
                  </g>
                  <path
                    opacity="0.3"
                    d="M99.4047 0V26.3L47.9047 47.6L29.3047 29L99.4047 0Z"
                    fill="white"
                  />
                  <g opacity="0.3">
                    <path
                      d="M73.3984 37.1002L33.8984 116.7L37.2985 125L82.8984 33.2002L73.3984 37.1002Z"
                      fill="white"
                    />
                    <path
                      d="M123.798 36.3994L63.8984 157.199L70.1985 159.799L130.098 38.9994L123.798 36.3994Z"
                      fill="white"
                    />
                    <path
                      d="M162.098 74.5L117.398 164.5L126.898 160.6L165.498 82.8L162.098 74.5Z"
                      fill="white"
                    />
                    <path
                      d="M99.4 26.2998L97 27.2998L42.5 137.3L48 150.6L59 155.2L119 34.3998L99.4 26.2998Z"
                      fill="white"
                    />
                    <path
                      d="M150.903 47.5998L146.603 45.7998L86.7031 166.7L99.5031 172L103.003 170.5L156.803 61.7998L150.903 47.5998Z"
                      fill="white"
                    />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_3851_14">
                    <rect width={199} height={199} fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
          <div className="rounded-full">
            <div className="w-6 h-6 bg-white/5 rounded-lg p-[3px]">
              <svg
                className="p-1 w-full h-full"
                width={199}
                height={199}
                viewBox="0 0 199 199"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_3851_14)">
                  <path
                    d="M29.3969 169.3L0.296875 99.2L29.2969 29L99.3969 0L169.497 29L198.597 99.1L169.597 169.2L99.4969 198.3L29.3969 169.3Z"
                    fill="#FFB240"
                  />
                  <path
                    d="M48.0016 150.6L26.6016 99.1998L47.9016 47.5998L99.4016 26.2998L150.902 47.5998L172.302 99.0998L151.002 150.6L99.5016 172L48.0016 150.6Z"
                    fill="#FCBA63"
                  />
                  <path
                    d="M99.5 198.3V172L151 150.6L169.6 169.2L99.5 198.3Z"
                    fill="#DE9A3B"
                  />
                  <path
                    d="M99.4985 198.3V172L47.9985 150.6L29.3984 169.2L99.4985 198.3Z"
                    fill="#E48914"
                  />
                  <path
                    d="M169.6 169.2L151 150.6L172.3 99.0996H198.6L169.6 169.2Z"
                    fill="#E48914"
                  />
                  <path
                    opacity="0.3"
                    d="M29.3969 169.3L47.9969 150.7L26.6969 99.1996L0.296875 99.0996L29.3969 169.3Z"
                    fill="white"
                  />
                  <path
                    opacity="0.3"
                    d="M198.598 99.1H172.298L150.898 47.6L169.498 29L198.598 99.1Z"
                    fill="white"
                  />
                  <g opacity="0.3">
                    <path
                      d="M29.2969 29L47.8969 47.6L26.5969 99.2H0.296875L29.2969 29Z"
                      fill="#FCBA63"
                    />
                  </g>
                  <path
                    opacity="0.3"
                    d="M99.4047 0V26.3L47.9047 47.6L29.3047 29L99.4047 0Z"
                    fill="white"
                  />
                  <g opacity="0.3">
                    <path
                      d="M73.3984 37.1002L33.8984 116.7L37.2985 125L82.8984 33.2002L73.3984 37.1002Z"
                      fill="white"
                    />
                    <path
                      d="M123.798 36.3994L63.8984 157.199L70.1985 159.799L130.098 38.9994L123.798 36.3994Z"
                      fill="white"
                    />
                    <path
                      d="M162.098 74.5L117.398 164.5L126.898 160.6L165.498 82.8L162.098 74.5Z"
                      fill="white"
                    />
                    <path
                      d="M99.4 26.2998L97 27.2998L42.5 137.3L48 150.6L59 155.2L119 34.3998L99.4 26.2998Z"
                      fill="white"
                    />
                    <path
                      d="M150.903 47.5998L146.603 45.7998L86.7031 166.7L99.5031 172L103.003 170.5L156.803 61.7998L150.903 47.5998Z"
                      fill="white"
                    />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_3851_14">
                    <rect width={199} height={199} fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-0.5">
          <div className="rounded-full">
            <div className="w-6 h-6 bg-white/5 rounded-lg p-[3px]">
              <svg
                className="p-1 w-full h-full"
                width={199}
                height={199}
                viewBox="0 0 199 199"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_3851_32)">
                  <path
                    d="M29.3969 169.3L0.296875 99.2L29.2969 29L99.3969 0L169.497 29L198.597 99.1L169.597 169.2L99.4969 198.3L29.3969 169.3Z"
                    fill="#F44F52"
                  />
                  <path
                    d="M48.0016 150.6L26.6016 99.1998L47.9016 47.5998L99.4016 26.2998L150.902 47.5998L172.302 99.0998L151.002 150.6L99.5016 172L48.0016 150.6Z"
                    fill="#FF6E6E"
                  />
                  <path
                    d="M99.5 198.3V172L151 150.6L169.6 169.2L99.5 198.3Z"
                    fill="#FF6E6E"
                  />
                  <path
                    d="M99.4985 198.3V172L47.9985 150.6L29.3984 169.2L99.4985 198.3Z"
                    fill="#FF514B"
                  />
                  <path
                    d="M169.6 169.2L151 150.6L172.3 99.0996H198.6L169.6 169.2Z"
                    fill="#FF514B"
                  />
                  <path
                    opacity="0.3"
                    d="M29.3969 169.3L47.9969 150.7L26.6969 99.1996L0.296875 99.0996L29.3969 169.3Z"
                    fill="white"
                  />
                  <path
                    opacity="0.3"
                    d="M198.598 99.1H172.298L150.898 47.6L169.498 29L198.598 99.1Z"
                    fill="white"
                  />
                  <g opacity="0.3">
                    <path
                      d="M29.2969 29L47.8969 47.6L26.5969 99.2H0.296875L29.2969 29Z"
                      fill="#FF6E6E"
                    />
                  </g>
                  <path
                    opacity="0.3"
                    d="M99.4047 0V26.3L47.9047 47.6L29.3047 29L99.4047 0Z"
                    fill="white"
                  />
                  <g opacity="0.3">
                    <path
                      d="M73.3984 37.1002L33.8984 116.7L37.2985 125L82.8984 33.2002L73.3984 37.1002Z"
                      fill="white"
                    />
                    <path
                      d="M123.798 36.3994L63.8984 157.199L70.1985 159.799L130.098 38.9994L123.798 36.3994Z"
                      fill="white"
                    />
                    <path
                      d="M162.098 74.5L117.398 164.5L126.898 160.6L165.498 82.8L162.098 74.5Z"
                      fill="white"
                    />
                    <path
                      d="M99.4 26.2998L97 27.2998L42.5 137.3L48 150.6L59 155.2L119 34.3998L99.4 26.2998Z"
                      fill="white"
                    />
                    <path
                      d="M150.903 47.5998L146.603 45.7998L86.7031 166.7L99.5031 172L103.003 170.5L156.803 61.7998L150.903 47.5998Z"
                      fill="white"
                    />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_3851_32">
                    <rect width={199} height={199} fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-0.5">
          <div className="rounded-full">
            <div className="w-6 h-6 bg-white/5 rounded-lg p-[3px]">
              <svg
                className="p-1 w-full h-full"
                width={199}
                height={199}
                viewBox="0 0 199 199"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_3851_14)">
                  <path
                    d="M29.3969 169.3L0.296875 99.2L29.2969 29L99.3969 0L169.497 29L198.597 99.1L169.597 169.2L99.4969 198.3L29.3969 169.3Z"
                    fill="#FFB240"
                  />
                  <path
                    d="M48.0016 150.6L26.6016 99.1998L47.9016 47.5998L99.4016 26.2998L150.902 47.5998L172.302 99.0998L151.002 150.6L99.5016 172L48.0016 150.6Z"
                    fill="#FCBA63"
                  />
                  <path
                    d="M99.5 198.3V172L151 150.6L169.6 169.2L99.5 198.3Z"
                    fill="#DE9A3B"
                  />
                  <path
                    d="M99.4985 198.3V172L47.9985 150.6L29.3984 169.2L99.4985 198.3Z"
                    fill="#E48914"
                  />
                  <path
                    d="M169.6 169.2L151 150.6L172.3 99.0996H198.6L169.6 169.2Z"
                    fill="#E48914"
                  />
                  <path
                    opacity="0.3"
                    d="M29.3969 169.3L47.9969 150.7L26.6969 99.1996L0.296875 99.0996L29.3969 169.3Z"
                    fill="white"
                  />
                  <path
                    opacity="0.3"
                    d="M198.598 99.1H172.298L150.898 47.6L169.498 29L198.598 99.1Z"
                    fill="white"
                  />
                  <g opacity="0.3">
                    <path
                      d="M29.2969 29L47.8969 47.6L26.5969 99.2H0.296875L29.2969 29Z"
                      fill="#FCBA63"
                    />
                  </g>
                  <path
                    opacity="0.3"
                    d="M99.4047 0V26.3L47.9047 47.6L29.3047 29L99.4047 0Z"
                    fill="white"
                  />
                  <g opacity="0.3">
                    <path
                      d="M73.3984 37.1002L33.8984 116.7L37.2985 125L82.8984 33.2002L73.3984 37.1002Z"
                      fill="white"
                    />
                    <path
                      d="M123.798 36.3994L63.8984 157.199L70.1985 159.799L130.098 38.9994L123.798 36.3994Z"
                      fill="white"
                    />
                    <path
                      d="M162.098 74.5L117.398 164.5L126.898 160.6L165.498 82.8L162.098 74.5Z"
                      fill="white"
                    />
                    <path
                      d="M99.4 26.2998L97 27.2998L42.5 137.3L48 150.6L59 155.2L119 34.3998L99.4 26.2998Z"
                      fill="white"
                    />
                    <path
                      d="M150.903 47.5998L146.603 45.7998L86.7031 166.7L99.5031 172L103.003 170.5L156.803 61.7998L150.903 47.5998Z"
                      fill="white"
                    />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_3851_14">
                    <rect width={199} height={199} fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
          <div className="rounded-full">
            <div className="w-6 h-6 bg-white/5 rounded-lg p-[3px]">
              <svg
                className="p-1 w-full h-full"
                width={199}
                height={199}
                viewBox="0 0 199 199"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_3851_14)">
                  <path
                    d="M29.3969 169.3L0.296875 99.2L29.2969 29L99.3969 0L169.497 29L198.597 99.1L169.597 169.2L99.4969 198.3L29.3969 169.3Z"
                    fill="#FFB240"
                  />
                  <path
                    d="M48.0016 150.6L26.6016 99.1998L47.9016 47.5998L99.4016 26.2998L150.902 47.5998L172.302 99.0998L151.002 150.6L99.5016 172L48.0016 150.6Z"
                    fill="#FCBA63"
                  />
                  <path
                    d="M99.5 198.3V172L151 150.6L169.6 169.2L99.5 198.3Z"
                    fill="#DE9A3B"
                  />
                  <path
                    d="M99.4985 198.3V172L47.9985 150.6L29.3984 169.2L99.4985 198.3Z"
                    fill="#E48914"
                  />
                  <path
                    d="M169.6 169.2L151 150.6L172.3 99.0996H198.6L169.6 169.2Z"
                    fill="#E48914"
                  />
                  <path
                    opacity="0.3"
                    d="M29.3969 169.3L47.9969 150.7L26.6969 99.1996L0.296875 99.0996L29.3969 169.3Z"
                    fill="white"
                  />
                  <path
                    opacity="0.3"
                    d="M198.598 99.1H172.298L150.898 47.6L169.498 29L198.598 99.1Z"
                    fill="white"
                  />
                  <g opacity="0.3">
                    <path
                      d="M29.2969 29L47.8969 47.6L26.5969 99.2H0.296875L29.2969 29Z"
                      fill="#FCBA63"
                    />
                  </g>
                  <path
                    opacity="0.3"
                    d="M99.4047 0V26.3L47.9047 47.6L29.3047 29L99.4047 0Z"
                    fill="white"
                  />
                  <g opacity="0.3">
                    <path
                      d="M73.3984 37.1002L33.8984 116.7L37.2985 125L82.8984 33.2002L73.3984 37.1002Z"
                      fill="white"
                    />
                    <path
                      d="M123.798 36.3994L63.8984 157.199L70.1985 159.799L130.098 38.9994L123.798 36.3994Z"
                      fill="white"
                    />
                    <path
                      d="M162.098 74.5L117.398 164.5L126.898 160.6L165.498 82.8L162.098 74.5Z"
                      fill="white"
                    />
                    <path
                      d="M99.4 26.2998L97 27.2998L42.5 137.3L48 150.6L59 155.2L119 34.3998L99.4 26.2998Z"
                      fill="white"
                    />
                    <path
                      d="M150.903 47.5998L146.603 45.7998L86.7031 166.7L99.5031 172L103.003 170.5L156.803 61.7998L150.903 47.5998Z"
                      fill="white"
                    />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_3851_14">
                    <rect width={199} height={199} fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-0.5">
          <div className="rounded-full">
            <div className="w-6 h-6 bg-white/5 rounded-lg p-[3px]">
              <svg
                className="p-1 w-full h-full"
                width={199}
                height={199}
                viewBox="0 0 199 199"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_3851_32)">
                  <path
                    d="M29.3969 169.3L0.296875 99.2L29.2969 29L99.3969 0L169.497 29L198.597 99.1L169.597 169.2L99.4969 198.3L29.3969 169.3Z"
                    fill="#F44F52"
                  />
                  <path
                    d="M48.0016 150.6L26.6016 99.1998L47.9016 47.5998L99.4016 26.2998L150.902 47.5998L172.302 99.0998L151.002 150.6L99.5016 172L48.0016 150.6Z"
                    fill="#FF6E6E"
                  />
                  <path
                    d="M99.5 198.3V172L151 150.6L169.6 169.2L99.5 198.3Z"
                    fill="#FF6E6E"
                  />
                  <path
                    d="M99.4985 198.3V172L47.9985 150.6L29.3984 169.2L99.4985 198.3Z"
                    fill="#FF514B"
                  />
                  <path
                    d="M169.6 169.2L151 150.6L172.3 99.0996H198.6L169.6 169.2Z"
                    fill="#FF514B"
                  />
                  <path
                    opacity="0.3"
                    d="M29.3969 169.3L47.9969 150.7L26.6969 99.1996L0.296875 99.0996L29.3969 169.3Z"
                    fill="white"
                  />
                  <path
                    opacity="0.3"
                    d="M198.598 99.1H172.298L150.898 47.6L169.498 29L198.598 99.1Z"
                    fill="white"
                  />
                  <g opacity="0.3">
                    <path
                      d="M29.2969 29L47.8969 47.6L26.5969 99.2H0.296875L29.2969 29Z"
                      fill="#FF6E6E"
                    />
                  </g>
                  <path
                    opacity="0.3"
                    d="M99.4047 0V26.3L47.9047 47.6L29.3047 29L99.4047 0Z"
                    fill="white"
                  />
                  <g opacity="0.3">
                    <path
                      d="M73.3984 37.1002L33.8984 116.7L37.2985 125L82.8984 33.2002L73.3984 37.1002Z"
                      fill="white"
                    />
                    <path
                      d="M123.798 36.3994L63.8984 157.199L70.1985 159.799L130.098 38.9994L123.798 36.3994Z"
                      fill="white"
                    />
                    <path
                      d="M162.098 74.5L117.398 164.5L126.898 160.6L165.498 82.8L162.098 74.5Z"
                      fill="white"
                    />
                    <path
                      d="M99.4 26.2998L97 27.2998L42.5 137.3L48 150.6L59 155.2L119 34.3998L99.4 26.2998Z"
                      fill="white"
                    />
                    <path
                      d="M150.903 47.5998L146.603 45.7998L86.7031 166.7L99.5031 172L103.003 170.5L156.803 61.7998L150.903 47.5998Z"
                      fill="white"
                    />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_3851_32">
                    <rect width={199} height={199} fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
          <div className="rounded-full">
            <div className="w-6 h-6 bg-white/5 rounded-lg p-[3px]">
              <svg
                className="p-1 w-full h-full"
                width={199}
                height={199}
                viewBox="0 0 199 199"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_3851_32)">
                  <path
                    d="M29.3969 169.3L0.296875 99.2L29.2969 29L99.3969 0L169.497 29L198.597 99.1L169.597 169.2L99.4969 198.3L29.3969 169.3Z"
                    fill="#F44F52"
                  />
                  <path
                    d="M48.0016 150.6L26.6016 99.1998L47.9016 47.5998L99.4016 26.2998L150.902 47.5998L172.302 99.0998L151.002 150.6L99.5016 172L48.0016 150.6Z"
                    fill="#FF6E6E"
                  />
                  <path
                    d="M99.5 198.3V172L151 150.6L169.6 169.2L99.5 198.3Z"
                    fill="#FF6E6E"
                  />
                  <path
                    d="M99.4985 198.3V172L47.9985 150.6L29.3984 169.2L99.4985 198.3Z"
                    fill="#FF514B"
                  />
                  <path
                    d="M169.6 169.2L151 150.6L172.3 99.0996H198.6L169.6 169.2Z"
                    fill="#FF514B"
                  />
                  <path
                    opacity="0.3"
                    d="M29.3969 169.3L47.9969 150.7L26.6969 99.1996L0.296875 99.0996L29.3969 169.3Z"
                    fill="white"
                  />
                  <path
                    opacity="0.3"
                    d="M198.598 99.1H172.298L150.898 47.6L169.498 29L198.598 99.1Z"
                    fill="white"
                  />
                  <g opacity="0.3">
                    <path
                      d="M29.2969 29L47.8969 47.6L26.5969 99.2H0.296875L29.2969 29Z"
                      fill="#FF6E6E"
                    />
                  </g>
                  <path
                    opacity="0.3"
                    d="M99.4047 0V26.3L47.9047 47.6L29.3047 29L99.4047 0Z"
                    fill="white"
                  />
                  <g opacity="0.3">
                    <path
                      d="M73.3984 37.1002L33.8984 116.7L37.2985 125L82.8984 33.2002L73.3984 37.1002Z"
                      fill="white"
                    />
                    <path
                      d="M123.798 36.3994L63.8984 157.199L70.1985 159.799L130.098 38.9994L123.798 36.3994Z"
                      fill="white"
                    />
                    <path
                      d="M162.098 74.5L117.398 164.5L126.898 160.6L165.498 82.8L162.098 74.5Z"
                      fill="white"
                    />
                    <path
                      d="M99.4 26.2998L97 27.2998L42.5 137.3L48 150.6L59 155.2L119 34.3998L99.4 26.2998Z"
                      fill="white"
                    />
                    <path
                      d="M150.903 47.5998L146.603 45.7998L86.7031 166.7L99.5031 172L103.003 170.5L156.803 61.7998L150.903 47.5998Z"
                      fill="white"
                    />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_3851_32">
                    <rect width={199} height={199} fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
          <div className="rounded-full">
            <div className="w-6 h-6 bg-white/5 rounded-lg p-[3px]">
              <svg
                className="p-1 w-full h-full"
                width={199}
                height={199}
                viewBox="0 0 199 199"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_3851_32)">
                  <path
                    d="M29.3969 169.3L0.296875 99.2L29.2969 29L99.3969 0L169.497 29L198.597 99.1L169.597 169.2L99.4969 198.3L29.3969 169.3Z"
                    fill="#F44F52"
                  />
                  <path
                    d="M48.0016 150.6L26.6016 99.1998L47.9016 47.5998L99.4016 26.2998L150.902 47.5998L172.302 99.0998L151.002 150.6L99.5016 172L48.0016 150.6Z"
                    fill="#FF6E6E"
                  />
                  <path
                    d="M99.5 198.3V172L151 150.6L169.6 169.2L99.5 198.3Z"
                    fill="#FF6E6E"
                  />
                  <path
                    d="M99.4985 198.3V172L47.9985 150.6L29.3984 169.2L99.4985 198.3Z"
                    fill="#FF514B"
                  />
                  <path
                    d="M169.6 169.2L151 150.6L172.3 99.0996H198.6L169.6 169.2Z"
                    fill="#FF514B"
                  />
                  <path
                    opacity="0.3"
                    d="M29.3969 169.3L47.9969 150.7L26.6969 99.1996L0.296875 99.0996L29.3969 169.3Z"
                    fill="white"
                  />
                  <path
                    opacity="0.3"
                    d="M198.598 99.1H172.298L150.898 47.6L169.498 29L198.598 99.1Z"
                    fill="white"
                  />
                  <g opacity="0.3">
                    <path
                      d="M29.2969 29L47.8969 47.6L26.5969 99.2H0.296875L29.2969 29Z"
                      fill="#FF6E6E"
                    />
                  </g>
                  <path
                    opacity="0.3"
                    d="M99.4047 0V26.3L47.9047 47.6L29.3047 29L99.4047 0Z"
                    fill="white"
                  />
                  <g opacity="0.3">
                    <path
                      d="M73.3984 37.1002L33.8984 116.7L37.2985 125L82.8984 33.2002L73.3984 37.1002Z"
                      fill="white"
                    />
                    <path
                      d="M123.798 36.3994L63.8984 157.199L70.1985 159.799L130.098 38.9994L123.798 36.3994Z"
                      fill="white"
                    />
                    <path
                      d="M162.098 74.5L117.398 164.5L126.898 160.6L165.498 82.8L162.098 74.5Z"
                      fill="white"
                    />
                    <path
                      d="M99.4 26.2998L97 27.2998L42.5 137.3L48 150.6L59 155.2L119 34.3998L99.4 26.2998Z"
                      fill="white"
                    />
                    <path
                      d="M150.903 47.5998L146.603 45.7998L86.7031 166.7L99.5031 172L103.003 170.5L156.803 61.7998L150.903 47.5998Z"
                      fill="white"
                    />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_3851_32">
                    <rect width={199} height={199} fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-0.5">
          <div className="rounded-full">
            <div className="w-6 h-6 bg-white/5 rounded-lg p-[3px]">
              <svg
                className="p-1 w-full h-full"
                width={199}
                height={199}
                viewBox="0 0 199 199"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_3851_14)">
                  <path
                    d="M29.3969 169.3L0.296875 99.2L29.2969 29L99.3969 0L169.497 29L198.597 99.1L169.597 169.2L99.4969 198.3L29.3969 169.3Z"
                    fill="#FFB240"
                  />
                  <path
                    d="M48.0016 150.6L26.6016 99.1998L47.9016 47.5998L99.4016 26.2998L150.902 47.5998L172.302 99.0998L151.002 150.6L99.5016 172L48.0016 150.6Z"
                    fill="#FCBA63"
                  />
                  <path
                    d="M99.5 198.3V172L151 150.6L169.6 169.2L99.5 198.3Z"
                    fill="#DE9A3B"
                  />
                  <path
                    d="M99.4985 198.3V172L47.9985 150.6L29.3984 169.2L99.4985 198.3Z"
                    fill="#E48914"
                  />
                  <path
                    d="M169.6 169.2L151 150.6L172.3 99.0996H198.6L169.6 169.2Z"
                    fill="#E48914"
                  />
                  <path
                    opacity="0.3"
                    d="M29.3969 169.3L47.9969 150.7L26.6969 99.1996L0.296875 99.0996L29.3969 169.3Z"
                    fill="white"
                  />
                  <path
                    opacity="0.3"
                    d="M198.598 99.1H172.298L150.898 47.6L169.498 29L198.598 99.1Z"
                    fill="white"
                  />
                  <g opacity="0.3">
                    <path
                      d="M29.2969 29L47.8969 47.6L26.5969 99.2H0.296875L29.2969 29Z"
                      fill="#FCBA63"
                    />
                  </g>
                  <path
                    opacity="0.3"
                    d="M99.4047 0V26.3L47.9047 47.6L29.3047 29L99.4047 0Z"
                    fill="white"
                  />
                  <g opacity="0.3">
                    <path
                      d="M73.3984 37.1002L33.8984 116.7L37.2985 125L82.8984 33.2002L73.3984 37.1002Z"
                      fill="white"
                    />
                    <path
                      d="M123.798 36.3994L63.8984 157.199L70.1985 159.799L130.098 38.9994L123.798 36.3994Z"
                      fill="white"
                    />
                    <path
                      d="M162.098 74.5L117.398 164.5L126.898 160.6L165.498 82.8L162.098 74.5Z"
                      fill="white"
                    />
                    <path
                      d="M99.4 26.2998L97 27.2998L42.5 137.3L48 150.6L59 155.2L119 34.3998L99.4 26.2998Z"
                      fill="white"
                    />
                    <path
                      d="M150.903 47.5998L146.603 45.7998L86.7031 166.7L99.5031 172L103.003 170.5L156.803 61.7998L150.903 47.5998Z"
                      fill="white"
                    />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_3851_14">
                    <rect width={199} height={199} fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-0.5">
          <div className="rounded-full">
            <div className="w-6 h-6 bg-white/5 rounded-lg p-[3px]">
              <svg
                className="p-1 w-full h-full"
                width={199}
                height={199}
                viewBox="0 0 199 199"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_3851_32)">
                  <path
                    d="M29.3969 169.3L0.296875 99.2L29.2969 29L99.3969 0L169.497 29L198.597 99.1L169.597 169.2L99.4969 198.3L29.3969 169.3Z"
                    fill="#F44F52"
                  />
                  <path
                    d="M48.0016 150.6L26.6016 99.1998L47.9016 47.5998L99.4016 26.2998L150.902 47.5998L172.302 99.0998L151.002 150.6L99.5016 172L48.0016 150.6Z"
                    fill="#FF6E6E"
                  />
                  <path
                    d="M99.5 198.3V172L151 150.6L169.6 169.2L99.5 198.3Z"
                    fill="#FF6E6E"
                  />
                  <path
                    d="M99.4985 198.3V172L47.9985 150.6L29.3984 169.2L99.4985 198.3Z"
                    fill="#FF514B"
                  />
                  <path
                    d="M169.6 169.2L151 150.6L172.3 99.0996H198.6L169.6 169.2Z"
                    fill="#FF514B"
                  />
                  <path
                    opacity="0.3"
                    d="M29.3969 169.3L47.9969 150.7L26.6969 99.1996L0.296875 99.0996L29.3969 169.3Z"
                    fill="white"
                  />
                  <path
                    opacity="0.3"
                    d="M198.598 99.1H172.298L150.898 47.6L169.498 29L198.598 99.1Z"
                    fill="white"
                  />
                  <g opacity="0.3">
                    <path
                      d="M29.2969 29L47.8969 47.6L26.5969 99.2H0.296875L29.2969 29Z"
                      fill="#FF6E6E"
                    />
                  </g>
                  <path
                    opacity="0.3"
                    d="M99.4047 0V26.3L47.9047 47.6L29.3047 29L99.4047 0Z"
                    fill="white"
                  />
                  <g opacity="0.3">
                    <path
                      d="M73.3984 37.1002L33.8984 116.7L37.2985 125L82.8984 33.2002L73.3984 37.1002Z"
                      fill="white"
                    />
                    <path
                      d="M123.798 36.3994L63.8984 157.199L70.1985 159.799L130.098 38.9994L123.798 36.3994Z"
                      fill="white"
                    />
                    <path
                      d="M162.098 74.5L117.398 164.5L126.898 160.6L165.498 82.8L162.098 74.5Z"
                      fill="white"
                    />
                    <path
                      d="M99.4 26.2998L97 27.2998L42.5 137.3L48 150.6L59 155.2L119 34.3998L99.4 26.2998Z"
                      fill="white"
                    />
                    <path
                      d="M150.903 47.5998L146.603 45.7998L86.7031 166.7L99.5031 172L103.003 170.5L156.803 61.7998L150.903 47.5998Z"
                      fill="white"
                    />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_3851_32">
                    <rect width={199} height={199} fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
          <div className="rounded-full">
            <div className="w-6 h-6 bg-white/5 rounded-lg p-[3px]">
              <svg
                className="p-1 w-full h-full"
                width={199}
                height={199}
                viewBox="0 0 199 199"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_3851_32)">
                  <path
                    d="M29.3969 169.3L0.296875 99.2L29.2969 29L99.3969 0L169.497 29L198.597 99.1L169.597 169.2L99.4969 198.3L29.3969 169.3Z"
                    fill="#F44F52"
                  />
                  <path
                    d="M48.0016 150.6L26.6016 99.1998L47.9016 47.5998L99.4016 26.2998L150.902 47.5998L172.302 99.0998L151.002 150.6L99.5016 172L48.0016 150.6Z"
                    fill="#FF6E6E"
                  />
                  <path
                    d="M99.5 198.3V172L151 150.6L169.6 169.2L99.5 198.3Z"
                    fill="#FF6E6E"
                  />
                  <path
                    d="M99.4985 198.3V172L47.9985 150.6L29.3984 169.2L99.4985 198.3Z"
                    fill="#FF514B"
                  />
                  <path
                    d="M169.6 169.2L151 150.6L172.3 99.0996H198.6L169.6 169.2Z"
                    fill="#FF514B"
                  />
                  <path
                    opacity="0.3"
                    d="M29.3969 169.3L47.9969 150.7L26.6969 99.1996L0.296875 99.0996L29.3969 169.3Z"
                    fill="white"
                  />
                  <path
                    opacity="0.3"
                    d="M198.598 99.1H172.298L150.898 47.6L169.498 29L198.598 99.1Z"
                    fill="white"
                  />
                  <g opacity="0.3">
                    <path
                      d="M29.2969 29L47.8969 47.6L26.5969 99.2H0.296875L29.2969 29Z"
                      fill="#FF6E6E"
                    />
                  </g>
                  <path
                    opacity="0.3"
                    d="M99.4047 0V26.3L47.9047 47.6L29.3047 29L99.4047 0Z"
                    fill="white"
                  />
                  <g opacity="0.3">
                    <path
                      d="M73.3984 37.1002L33.8984 116.7L37.2985 125L82.8984 33.2002L73.3984 37.1002Z"
                      fill="white"
                    />
                    <path
                      d="M123.798 36.3994L63.8984 157.199L70.1985 159.799L130.098 38.9994L123.798 36.3994Z"
                      fill="white"
                    />
                    <path
                      d="M162.098 74.5L117.398 164.5L126.898 160.6L165.498 82.8L162.098 74.5Z"
                      fill="white"
                    />
                    <path
                      d="M99.4 26.2998L97 27.2998L42.5 137.3L48 150.6L59 155.2L119 34.3998L99.4 26.2998Z"
                      fill="white"
                    />
                    <path
                      d="M150.903 47.5998L146.603 45.7998L86.7031 166.7L99.5031 172L103.003 170.5L156.803 61.7998L150.903 47.5998Z"
                      fill="white"
                    />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_3851_32">
                    <rect width={199} height={199} fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-0.5">
          <div className="rounded-full">
            <div className="w-6 h-6 bg-white/5 rounded-lg p-[3px]">
              <svg
                className="p-1 w-full h-full"
                width={199}
                height={199}
                viewBox="0 0 199 199"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_3851_14)">
                  <path
                    d="M29.3969 169.3L0.296875 99.2L29.2969 29L99.3969 0L169.497 29L198.597 99.1L169.597 169.2L99.4969 198.3L29.3969 169.3Z"
                    fill="#FFB240"
                  />
                  <path
                    d="M48.0016 150.6L26.6016 99.1998L47.9016 47.5998L99.4016 26.2998L150.902 47.5998L172.302 99.0998L151.002 150.6L99.5016 172L48.0016 150.6Z"
                    fill="#FCBA63"
                  />
                  <path
                    d="M99.5 198.3V172L151 150.6L169.6 169.2L99.5 198.3Z"
                    fill="#DE9A3B"
                  />
                  <path
                    d="M99.4985 198.3V172L47.9985 150.6L29.3984 169.2L99.4985 198.3Z"
                    fill="#E48914"
                  />
                  <path
                    d="M169.6 169.2L151 150.6L172.3 99.0996H198.6L169.6 169.2Z"
                    fill="#E48914"
                  />
                  <path
                    opacity="0.3"
                    d="M29.3969 169.3L47.9969 150.7L26.6969 99.1996L0.296875 99.0996L29.3969 169.3Z"
                    fill="white"
                  />
                  <path
                    opacity="0.3"
                    d="M198.598 99.1H172.298L150.898 47.6L169.498 29L198.598 99.1Z"
                    fill="white"
                  />
                  <g opacity="0.3">
                    <path
                      d="M29.2969 29L47.8969 47.6L26.5969 99.2H0.296875L29.2969 29Z"
                      fill="#FCBA63"
                    />
                  </g>
                  <path
                    opacity="0.3"
                    d="M99.4047 0V26.3L47.9047 47.6L29.3047 29L99.4047 0Z"
                    fill="white"
                  />
                  <g opacity="0.3">
                    <path
                      d="M73.3984 37.1002L33.8984 116.7L37.2985 125L82.8984 33.2002L73.3984 37.1002Z"
                      fill="white"
                    />
                    <path
                      d="M123.798 36.3994L63.8984 157.199L70.1985 159.799L130.098 38.9994L123.798 36.3994Z"
                      fill="white"
                    />
                    <path
                      d="M162.098 74.5L117.398 164.5L126.898 160.6L165.498 82.8L162.098 74.5Z"
                      fill="white"
                    />
                    <path
                      d="M99.4 26.2998L97 27.2998L42.5 137.3L48 150.6L59 155.2L119 34.3998L99.4 26.2998Z"
                      fill="white"
                    />
                    <path
                      d="M150.903 47.5998L146.603 45.7998L86.7031 166.7L99.5031 172L103.003 170.5L156.803 61.7998L150.903 47.5998Z"
                      fill="white"
                    />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_3851_14">
                    <rect width={199} height={199} fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-0.5">
          <div className="rounded-full">
            <div className="w-6 h-6 bg-white/5 rounded-lg p-[3px]">
              <svg
                className="p-1 w-full h-full"
                width={199}
                height={199}
                viewBox="0 0 199 199"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_3851_32)">
                  <path
                    d="M29.3969 169.3L0.296875 99.2L29.2969 29L99.3969 0L169.497 29L198.597 99.1L169.597 169.2L99.4969 198.3L29.3969 169.3Z"
                    fill="#F44F52"
                  />
                  <path
                    d="M48.0016 150.6L26.6016 99.1998L47.9016 47.5998L99.4016 26.2998L150.902 47.5998L172.302 99.0998L151.002 150.6L99.5016 172L48.0016 150.6Z"
                    fill="#FF6E6E"
                  />
                  <path
                    d="M99.5 198.3V172L151 150.6L169.6 169.2L99.5 198.3Z"
                    fill="#FF6E6E"
                  />
                  <path
                    d="M99.4985 198.3V172L47.9985 150.6L29.3984 169.2L99.4985 198.3Z"
                    fill="#FF514B"
                  />
                  <path
                    d="M169.6 169.2L151 150.6L172.3 99.0996H198.6L169.6 169.2Z"
                    fill="#FF514B"
                  />
                  <path
                    opacity="0.3"
                    d="M29.3969 169.3L47.9969 150.7L26.6969 99.1996L0.296875 99.0996L29.3969 169.3Z"
                    fill="white"
                  />
                  <path
                    opacity="0.3"
                    d="M198.598 99.1H172.298L150.898 47.6L169.498 29L198.598 99.1Z"
                    fill="white"
                  />
                  <g opacity="0.3">
                    <path
                      d="M29.2969 29L47.8969 47.6L26.5969 99.2H0.296875L29.2969 29Z"
                      fill="#FF6E6E"
                    />
                  </g>
                  <path
                    opacity="0.3"
                    d="M99.4047 0V26.3L47.9047 47.6L29.3047 29L99.4047 0Z"
                    fill="white"
                  />
                  <g opacity="0.3">
                    <path
                      d="M73.3984 37.1002L33.8984 116.7L37.2985 125L82.8984 33.2002L73.3984 37.1002Z"
                      fill="white"
                    />
                    <path
                      d="M123.798 36.3994L63.8984 157.199L70.1985 159.799L130.098 38.9994L123.798 36.3994Z"
                      fill="white"
                    />
                    <path
                      d="M162.098 74.5L117.398 164.5L126.898 160.6L165.498 82.8L162.098 74.5Z"
                      fill="white"
                    />
                    <path
                      d="M99.4 26.2998L97 27.2998L42.5 137.3L48 150.6L59 155.2L119 34.3998L99.4 26.2998Z"
                      fill="white"
                    />
                    <path
                      d="M150.903 47.5998L146.603 45.7998L86.7031 166.7L99.5031 172L103.003 170.5L156.803 61.7998L150.903 47.5998Z"
                      fill="white"
                    />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_3851_32">
                    <rect width={199} height={199} fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
          <div className="rounded-full">
            <div className="w-6 h-6 bg-white/5 rounded-lg p-[3px]">
              <svg
                className="p-1 w-full h-full"
                width={199}
                height={199}
                viewBox="0 0 199 199"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_3851_32)">
                  <path
                    d="M29.3969 169.3L0.296875 99.2L29.2969 29L99.3969 0L169.497 29L198.597 99.1L169.597 169.2L99.4969 198.3L29.3969 169.3Z"
                    fill="#F44F52"
                  />
                  <path
                    d="M48.0016 150.6L26.6016 99.1998L47.9016 47.5998L99.4016 26.2998L150.902 47.5998L172.302 99.0998L151.002 150.6L99.5016 172L48.0016 150.6Z"
                    fill="#FF6E6E"
                  />
                  <path
                    d="M99.5 198.3V172L151 150.6L169.6 169.2L99.5 198.3Z"
                    fill="#FF6E6E"
                  />
                  <path
                    d="M99.4985 198.3V172L47.9985 150.6L29.3984 169.2L99.4985 198.3Z"
                    fill="#FF514B"
                  />
                  <path
                    d="M169.6 169.2L151 150.6L172.3 99.0996H198.6L169.6 169.2Z"
                    fill="#FF514B"
                  />
                  <path
                    opacity="0.3"
                    d="M29.3969 169.3L47.9969 150.7L26.6969 99.1996L0.296875 99.0996L29.3969 169.3Z"
                    fill="white"
                  />
                  <path
                    opacity="0.3"
                    d="M198.598 99.1H172.298L150.898 47.6L169.498 29L198.598 99.1Z"
                    fill="white"
                  />
                  <g opacity="0.3">
                    <path
                      d="M29.2969 29L47.8969 47.6L26.5969 99.2H0.296875L29.2969 29Z"
                      fill="#FF6E6E"
                    />
                  </g>
                  <path
                    opacity="0.3"
                    d="M99.4047 0V26.3L47.9047 47.6L29.3047 29L99.4047 0Z"
                    fill="white"
                  />
                  <g opacity="0.3">
                    <path
                      d="M73.3984 37.1002L33.8984 116.7L37.2985 125L82.8984 33.2002L73.3984 37.1002Z"
                      fill="white"
                    />
                    <path
                      d="M123.798 36.3994L63.8984 157.199L70.1985 159.799L130.098 38.9994L123.798 36.3994Z"
                      fill="white"
                    />
                    <path
                      d="M162.098 74.5L117.398 164.5L126.898 160.6L165.498 82.8L162.098 74.5Z"
                      fill="white"
                    />
                    <path
                      d="M99.4 26.2998L97 27.2998L42.5 137.3L48 150.6L59 155.2L119 34.3998L99.4 26.2998Z"
                      fill="white"
                    />
                    <path
                      d="M150.903 47.5998L146.603 45.7998L86.7031 166.7L99.5031 172L103.003 170.5L156.803 61.7998L150.903 47.5998Z"
                      fill="white"
                    />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_3851_32">
                    <rect width={199} height={199} fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
          <div className="rounded-full">
            <div className="w-6 h-6 bg-white/5 rounded-lg p-[3px]">
              <svg
                className="p-1 w-full h-full"
                width={199}
                height={199}
                viewBox="0 0 199 199"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_3851_32)">
                  <path
                    d="M29.3969 169.3L0.296875 99.2L29.2969 29L99.3969 0L169.497 29L198.597 99.1L169.597 169.2L99.4969 198.3L29.3969 169.3Z"
                    fill="#F44F52"
                  />
                  <path
                    d="M48.0016 150.6L26.6016 99.1998L47.9016 47.5998L99.4016 26.2998L150.902 47.5998L172.302 99.0998L151.002 150.6L99.5016 172L48.0016 150.6Z"
                    fill="#FF6E6E"
                  />
                  <path
                    d="M99.5 198.3V172L151 150.6L169.6 169.2L99.5 198.3Z"
                    fill="#FF6E6E"
                  />
                  <path
                    d="M99.4985 198.3V172L47.9985 150.6L29.3984 169.2L99.4985 198.3Z"
                    fill="#FF514B"
                  />
                  <path
                    d="M169.6 169.2L151 150.6L172.3 99.0996H198.6L169.6 169.2Z"
                    fill="#FF514B"
                  />
                  <path
                    opacity="0.3"
                    d="M29.3969 169.3L47.9969 150.7L26.6969 99.1996L0.296875 99.0996L29.3969 169.3Z"
                    fill="white"
                  />
                  <path
                    opacity="0.3"
                    d="M198.598 99.1H172.298L150.898 47.6L169.498 29L198.598 99.1Z"
                    fill="white"
                  />
                  <g opacity="0.3">
                    <path
                      d="M29.2969 29L47.8969 47.6L26.5969 99.2H0.296875L29.2969 29Z"
                      fill="#FF6E6E"
                    />
                  </g>
                  <path
                    opacity="0.3"
                    d="M99.4047 0V26.3L47.9047 47.6L29.3047 29L99.4047 0Z"
                    fill="white"
                  />
                  <g opacity="0.3">
                    <path
                      d="M73.3984 37.1002L33.8984 116.7L37.2985 125L82.8984 33.2002L73.3984 37.1002Z"
                      fill="white"
                    />
                    <path
                      d="M123.798 36.3994L63.8984 157.199L70.1985 159.799L130.098 38.9994L123.798 36.3994Z"
                      fill="white"
                    />
                    <path
                      d="M162.098 74.5L117.398 164.5L126.898 160.6L165.498 82.8L162.098 74.5Z"
                      fill="white"
                    />
                    <path
                      d="M99.4 26.2998L97 27.2998L42.5 137.3L48 150.6L59 155.2L119 34.3998L99.4 26.2998Z"
                      fill="white"
                    />
                    <path
                      d="M150.903 47.5998L146.603 45.7998L86.7031 166.7L99.5031 172L103.003 170.5L156.803 61.7998L150.903 47.5998Z"
                      fill="white"
                    />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_3851_32">
                    <rect width={199} height={199} fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-0.5">
          <div className="rounded-full">
            <div className="w-6 h-6 bg-white/5 rounded-lg p-[3px]">
              <svg
                className="p-1 w-full h-full"
                width={199}
                height={199}
                viewBox="0 0 199 199"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_3851_14)">
                  <path
                    d="M29.3969 169.3L0.296875 99.2L29.2969 29L99.3969 0L169.497 29L198.597 99.1L169.597 169.2L99.4969 198.3L29.3969 169.3Z"
                    fill="#FFB240"
                  />
                  <path
                    d="M48.0016 150.6L26.6016 99.1998L47.9016 47.5998L99.4016 26.2998L150.902 47.5998L172.302 99.0998L151.002 150.6L99.5016 172L48.0016 150.6Z"
                    fill="#FCBA63"
                  />
                  <path
                    d="M99.5 198.3V172L151 150.6L169.6 169.2L99.5 198.3Z"
                    fill="#DE9A3B"
                  />
                  <path
                    d="M99.4985 198.3V172L47.9985 150.6L29.3984 169.2L99.4985 198.3Z"
                    fill="#E48914"
                  />
                  <path
                    d="M169.6 169.2L151 150.6L172.3 99.0996H198.6L169.6 169.2Z"
                    fill="#E48914"
                  />
                  <path
                    opacity="0.3"
                    d="M29.3969 169.3L47.9969 150.7L26.6969 99.1996L0.296875 99.0996L29.3969 169.3Z"
                    fill="white"
                  />
                  <path
                    opacity="0.3"
                    d="M198.598 99.1H172.298L150.898 47.6L169.498 29L198.598 99.1Z"
                    fill="white"
                  />
                  <g opacity="0.3">
                    <path
                      d="M29.2969 29L47.8969 47.6L26.5969 99.2H0.296875L29.2969 29Z"
                      fill="#FCBA63"
                    />
                  </g>
                  <path
                    opacity="0.3"
                    d="M99.4047 0V26.3L47.9047 47.6L29.3047 29L99.4047 0Z"
                    fill="white"
                  />
                  <g opacity="0.3">
                    <path
                      d="M73.3984 37.1002L33.8984 116.7L37.2985 125L82.8984 33.2002L73.3984 37.1002Z"
                      fill="white"
                    />
                    <path
                      d="M123.798 36.3994L63.8984 157.199L70.1985 159.799L130.098 38.9994L123.798 36.3994Z"
                      fill="white"
                    />
                    <path
                      d="M162.098 74.5L117.398 164.5L126.898 160.6L165.498 82.8L162.098 74.5Z"
                      fill="white"
                    />
                    <path
                      d="M99.4 26.2998L97 27.2998L42.5 137.3L48 150.6L59 155.2L119 34.3998L99.4 26.2998Z"
                      fill="white"
                    />
                    <path
                      d="M150.903 47.5998L146.603 45.7998L86.7031 166.7L99.5031 172L103.003 170.5L156.803 61.7998L150.903 47.5998Z"
                      fill="white"
                    />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_3851_14">
                    <rect width={199} height={199} fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-0.5">
          <div className="rounded-full">
            <div className="w-6 h-6 bg-white/5 rounded-lg p-[3px]">
              <svg
                className="p-1 w-full h-full"
                width={199}
                height={199}
                viewBox="0 0 199 199"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_3851_32)">
                  <path
                    d="M29.3969 169.3L0.296875 99.2L29.2969 29L99.3969 0L169.497 29L198.597 99.1L169.597 169.2L99.4969 198.3L29.3969 169.3Z"
                    fill="#F44F52"
                  />
                  <path
                    d="M48.0016 150.6L26.6016 99.1998L47.9016 47.5998L99.4016 26.2998L150.902 47.5998L172.302 99.0998L151.002 150.6L99.5016 172L48.0016 150.6Z"
                    fill="#FF6E6E"
                  />
                  <path
                    d="M99.5 198.3V172L151 150.6L169.6 169.2L99.5 198.3Z"
                    fill="#FF6E6E"
                  />
                  <path
                    d="M99.4985 198.3V172L47.9985 150.6L29.3984 169.2L99.4985 198.3Z"
                    fill="#FF514B"
                  />
                  <path
                    d="M169.6 169.2L151 150.6L172.3 99.0996H198.6L169.6 169.2Z"
                    fill="#FF514B"
                  />
                  <path
                    opacity="0.3"
                    d="M29.3969 169.3L47.9969 150.7L26.6969 99.1996L0.296875 99.0996L29.3969 169.3Z"
                    fill="white"
                  />
                  <path
                    opacity="0.3"
                    d="M198.598 99.1H172.298L150.898 47.6L169.498 29L198.598 99.1Z"
                    fill="white"
                  />
                  <g opacity="0.3">
                    <path
                      d="M29.2969 29L47.8969 47.6L26.5969 99.2H0.296875L29.2969 29Z"
                      fill="#FF6E6E"
                    />
                  </g>
                  <path
                    opacity="0.3"
                    d="M99.4047 0V26.3L47.9047 47.6L29.3047 29L99.4047 0Z"
                    fill="white"
                  />
                  <g opacity="0.3">
                    <path
                      d="M73.3984 37.1002L33.8984 116.7L37.2985 125L82.8984 33.2002L73.3984 37.1002Z"
                      fill="white"
                    />
                    <path
                      d="M123.798 36.3994L63.8984 157.199L70.1985 159.799L130.098 38.9994L123.798 36.3994Z"
                      fill="white"
                    />
                    <path
                      d="M162.098 74.5L117.398 164.5L126.898 160.6L165.498 82.8L162.098 74.5Z"
                      fill="white"
                    />
                    <path
                      d="M99.4 26.2998L97 27.2998L42.5 137.3L48 150.6L59 155.2L119 34.3998L99.4 26.2998Z"
                      fill="white"
                    />
                    <path
                      d="M150.903 47.5998L146.603 45.7998L86.7031 166.7L99.5031 172L103.003 170.5L156.803 61.7998L150.903 47.5998Z"
                      fill="white"
                    />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_3851_32">
                    <rect width={199} height={199} fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
          <div className="rounded-full">
            <div className="w-6 h-6 bg-white/5 rounded-lg p-[3px]">
              <svg
                className="p-1 w-full h-full"
                width={199}
                height={199}
                viewBox="0 0 199 199"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_3851_32)">
                  <path
                    d="M29.3969 169.3L0.296875 99.2L29.2969 29L99.3969 0L169.497 29L198.597 99.1L169.597 169.2L99.4969 198.3L29.3969 169.3Z"
                    fill="#F44F52"
                  />
                  <path
                    d="M48.0016 150.6L26.6016 99.1998L47.9016 47.5998L99.4016 26.2998L150.902 47.5998L172.302 99.0998L151.002 150.6L99.5016 172L48.0016 150.6Z"
                    fill="#FF6E6E"
                  />
                  <path
                    d="M99.5 198.3V172L151 150.6L169.6 169.2L99.5 198.3Z"
                    fill="#FF6E6E"
                  />
                  <path
                    d="M99.4985 198.3V172L47.9985 150.6L29.3984 169.2L99.4985 198.3Z"
                    fill="#FF514B"
                  />
                  <path
                    d="M169.6 169.2L151 150.6L172.3 99.0996H198.6L169.6 169.2Z"
                    fill="#FF514B"
                  />
                  <path
                    opacity="0.3"
                    d="M29.3969 169.3L47.9969 150.7L26.6969 99.1996L0.296875 99.0996L29.3969 169.3Z"
                    fill="white"
                  />
                  <path
                    opacity="0.3"
                    d="M198.598 99.1H172.298L150.898 47.6L169.498 29L198.598 99.1Z"
                    fill="white"
                  />
                  <g opacity="0.3">
                    <path
                      d="M29.2969 29L47.8969 47.6L26.5969 99.2H0.296875L29.2969 29Z"
                      fill="#FF6E6E"
                    />
                  </g>
                  <path
                    opacity="0.3"
                    d="M99.4047 0V26.3L47.9047 47.6L29.3047 29L99.4047 0Z"
                    fill="white"
                  />
                  <g opacity="0.3">
                    <path
                      d="M73.3984 37.1002L33.8984 116.7L37.2985 125L82.8984 33.2002L73.3984 37.1002Z"
                      fill="white"
                    />
                    <path
                      d="M123.798 36.3994L63.8984 157.199L70.1985 159.799L130.098 38.9994L123.798 36.3994Z"
                      fill="white"
                    />
                    <path
                      d="M162.098 74.5L117.398 164.5L126.898 160.6L165.498 82.8L162.098 74.5Z"
                      fill="white"
                    />
                    <path
                      d="M99.4 26.2998L97 27.2998L42.5 137.3L48 150.6L59 155.2L119 34.3998L99.4 26.2998Z"
                      fill="white"
                    />
                    <path
                      d="M150.903 47.5998L146.603 45.7998L86.7031 166.7L99.5031 172L103.003 170.5L156.803 61.7998L150.903 47.5998Z"
                      fill="white"
                    />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_3851_32">
                    <rect width={199} height={199} fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
          <div className="rounded-full">
            <div className="w-6 h-6 bg-white/5 rounded-lg p-[3px]">
              <svg
                className="p-1 w-full h-full"
                width={199}
                height={199}
                viewBox="0 0 199 199"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_3851_32)">
                  <path
                    d="M29.3969 169.3L0.296875 99.2L29.2969 29L99.3969 0L169.497 29L198.597 99.1L169.597 169.2L99.4969 198.3L29.3969 169.3Z"
                    fill="#F44F52"
                  />
                  <path
                    d="M48.0016 150.6L26.6016 99.1998L47.9016 47.5998L99.4016 26.2998L150.902 47.5998L172.302 99.0998L151.002 150.6L99.5016 172L48.0016 150.6Z"
                    fill="#FF6E6E"
                  />
                  <path
                    d="M99.5 198.3V172L151 150.6L169.6 169.2L99.5 198.3Z"
                    fill="#FF6E6E"
                  />
                  <path
                    d="M99.4985 198.3V172L47.9985 150.6L29.3984 169.2L99.4985 198.3Z"
                    fill="#FF514B"
                  />
                  <path
                    d="M169.6 169.2L151 150.6L172.3 99.0996H198.6L169.6 169.2Z"
                    fill="#FF514B"
                  />
                  <path
                    opacity="0.3"
                    d="M29.3969 169.3L47.9969 150.7L26.6969 99.1996L0.296875 99.0996L29.3969 169.3Z"
                    fill="white"
                  />
                  <path
                    opacity="0.3"
                    d="M198.598 99.1H172.298L150.898 47.6L169.498 29L198.598 99.1Z"
                    fill="white"
                  />
                  <g opacity="0.3">
                    <path
                      d="M29.2969 29L47.8969 47.6L26.5969 99.2H0.296875L29.2969 29Z"
                      fill="#FF6E6E"
                    />
                  </g>
                  <path
                    opacity="0.3"
                    d="M99.4047 0V26.3L47.9047 47.6L29.3047 29L99.4047 0Z"
                    fill="white"
                  />
                  <g opacity="0.3">
                    <path
                      d="M73.3984 37.1002L33.8984 116.7L37.2985 125L82.8984 33.2002L73.3984 37.1002Z"
                      fill="white"
                    />
                    <path
                      d="M123.798 36.3994L63.8984 157.199L70.1985 159.799L130.098 38.9994L123.798 36.3994Z"
                      fill="white"
                    />
                    <path
                      d="M162.098 74.5L117.398 164.5L126.898 160.6L165.498 82.8L162.098 74.5Z"
                      fill="white"
                    />
                    <path
                      d="M99.4 26.2998L97 27.2998L42.5 137.3L48 150.6L59 155.2L119 34.3998L99.4 26.2998Z"
                      fill="white"
                    />
                    <path
                      d="M150.903 47.5998L146.603 45.7998L86.7031 166.7L99.5031 172L103.003 170.5L156.803 61.7998L150.903 47.5998Z"
                      fill="white"
                    />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_3851_32">
                    <rect width={199} height={199} fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-0.5">
          <div className="rounded-full">
            <div className="w-6 h-6 bg-white/5 rounded-lg p-[3px]">
              <svg
                className="p-1 w-full h-full"
                width={199}
                height={199}
                viewBox="0 0 199 199"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_3851_14)">
                  <path
                    d="M29.3969 169.3L0.296875 99.2L29.2969 29L99.3969 0L169.497 29L198.597 99.1L169.597 169.2L99.4969 198.3L29.3969 169.3Z"
                    fill="#FFB240"
                  />
                  <path
                    d="M48.0016 150.6L26.6016 99.1998L47.9016 47.5998L99.4016 26.2998L150.902 47.5998L172.302 99.0998L151.002 150.6L99.5016 172L48.0016 150.6Z"
                    fill="#FCBA63"
                  />
                  <path
                    d="M99.5 198.3V172L151 150.6L169.6 169.2L99.5 198.3Z"
                    fill="#DE9A3B"
                  />
                  <path
                    d="M99.4985 198.3V172L47.9985 150.6L29.3984 169.2L99.4985 198.3Z"
                    fill="#E48914"
                  />
                  <path
                    d="M169.6 169.2L151 150.6L172.3 99.0996H198.6L169.6 169.2Z"
                    fill="#E48914"
                  />
                  <path
                    opacity="0.3"
                    d="M29.3969 169.3L47.9969 150.7L26.6969 99.1996L0.296875 99.0996L29.3969 169.3Z"
                    fill="white"
                  />
                  <path
                    opacity="0.3"
                    d="M198.598 99.1H172.298L150.898 47.6L169.498 29L198.598 99.1Z"
                    fill="white"
                  />
                  <g opacity="0.3">
                    <path
                      d="M29.2969 29L47.8969 47.6L26.5969 99.2H0.296875L29.2969 29Z"
                      fill="#FCBA63"
                    />
                  </g>
                  <path
                    opacity="0.3"
                    d="M99.4047 0V26.3L47.9047 47.6L29.3047 29L99.4047 0Z"
                    fill="white"
                  />
                  <g opacity="0.3">
                    <path
                      d="M73.3984 37.1002L33.8984 116.7L37.2985 125L82.8984 33.2002L73.3984 37.1002Z"
                      fill="white"
                    />
                    <path
                      d="M123.798 36.3994L63.8984 157.199L70.1985 159.799L130.098 38.9994L123.798 36.3994Z"
                      fill="white"
                    />
                    <path
                      d="M162.098 74.5L117.398 164.5L126.898 160.6L165.498 82.8L162.098 74.5Z"
                      fill="white"
                    />
                    <path
                      d="M99.4 26.2998L97 27.2998L42.5 137.3L48 150.6L59 155.2L119 34.3998L99.4 26.2998Z"
                      fill="white"
                    />
                    <path
                      d="M150.903 47.5998L146.603 45.7998L86.7031 166.7L99.5031 172L103.003 170.5L156.803 61.7998L150.903 47.5998Z"
                      fill="white"
                    />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_3851_14">
                    <rect width={199} height={199} fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
          <div className="rounded-full">
            <div className="w-6 h-6 bg-white/5 rounded-lg p-[3px]">
              <svg
                className="p-1 w-full h-full"
                width={199}
                height={199}
                viewBox="0 0 199 199"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_3851_14)">
                  <path
                    d="M29.3969 169.3L0.296875 99.2L29.2969 29L99.3969 0L169.497 29L198.597 99.1L169.597 169.2L99.4969 198.3L29.3969 169.3Z"
                    fill="#FFB240"
                  />
                  <path
                    d="M48.0016 150.6L26.6016 99.1998L47.9016 47.5998L99.4016 26.2998L150.902 47.5998L172.302 99.0998L151.002 150.6L99.5016 172L48.0016 150.6Z"
                    fill="#FCBA63"
                  />
                  <path
                    d="M99.5 198.3V172L151 150.6L169.6 169.2L99.5 198.3Z"
                    fill="#DE9A3B"
                  />
                  <path
                    d="M99.4985 198.3V172L47.9985 150.6L29.3984 169.2L99.4985 198.3Z"
                    fill="#E48914"
                  />
                  <path
                    d="M169.6 169.2L151 150.6L172.3 99.0996H198.6L169.6 169.2Z"
                    fill="#E48914"
                  />
                  <path
                    opacity="0.3"
                    d="M29.3969 169.3L47.9969 150.7L26.6969 99.1996L0.296875 99.0996L29.3969 169.3Z"
                    fill="white"
                  />
                  <path
                    opacity="0.3"
                    d="M198.598 99.1H172.298L150.898 47.6L169.498 29L198.598 99.1Z"
                    fill="white"
                  />
                  <g opacity="0.3">
                    <path
                      d="M29.2969 29L47.8969 47.6L26.5969 99.2H0.296875L29.2969 29Z"
                      fill="#FCBA63"
                    />
                  </g>
                  <path
                    opacity="0.3"
                    d="M99.4047 0V26.3L47.9047 47.6L29.3047 29L99.4047 0Z"
                    fill="white"
                  />
                  <g opacity="0.3">
                    <path
                      d="M73.3984 37.1002L33.8984 116.7L37.2985 125L82.8984 33.2002L73.3984 37.1002Z"
                      fill="white"
                    />
                    <path
                      d="M123.798 36.3994L63.8984 157.199L70.1985 159.799L130.098 38.9994L123.798 36.3994Z"
                      fill="white"
                    />
                    <path
                      d="M162.098 74.5L117.398 164.5L126.898 160.6L165.498 82.8L162.098 74.5Z"
                      fill="white"
                    />
                    <path
                      d="M99.4 26.2998L97 27.2998L42.5 137.3L48 150.6L59 155.2L119 34.3998L99.4 26.2998Z"
                      fill="white"
                    />
                    <path
                      d="M150.903 47.5998L146.603 45.7998L86.7031 166.7L99.5031 172L103.003 170.5L156.803 61.7998L150.903 47.5998Z"
                      fill="white"
                    />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_3851_14">
                    <rect width={199} height={199} fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
          <div className="rounded-full">
            <div className="w-6 h-6 bg-white/5 rounded-lg p-[3px]">
              <svg
                className="p-1 w-full h-full"
                width={199}
                height={199}
                viewBox="0 0 199 199"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_3851_14)">
                  <path
                    d="M29.3969 169.3L0.296875 99.2L29.2969 29L99.3969 0L169.497 29L198.597 99.1L169.597 169.2L99.4969 198.3L29.3969 169.3Z"
                    fill="#FFB240"
                  />
                  <path
                    d="M48.0016 150.6L26.6016 99.1998L47.9016 47.5998L99.4016 26.2998L150.902 47.5998L172.302 99.0998L151.002 150.6L99.5016 172L48.0016 150.6Z"
                    fill="#FCBA63"
                  />
                  <path
                    d="M99.5 198.3V172L151 150.6L169.6 169.2L99.5 198.3Z"
                    fill="#DE9A3B"
                  />
                  <path
                    d="M99.4985 198.3V172L47.9985 150.6L29.3984 169.2L99.4985 198.3Z"
                    fill="#E48914"
                  />
                  <path
                    d="M169.6 169.2L151 150.6L172.3 99.0996H198.6L169.6 169.2Z"
                    fill="#E48914"
                  />
                  <path
                    opacity="0.3"
                    d="M29.3969 169.3L47.9969 150.7L26.6969 99.1996L0.296875 99.0996L29.3969 169.3Z"
                    fill="white"
                  />
                  <path
                    opacity="0.3"
                    d="M198.598 99.1H172.298L150.898 47.6L169.498 29L198.598 99.1Z"
                    fill="white"
                  />
                  <g opacity="0.3">
                    <path
                      d="M29.2969 29L47.8969 47.6L26.5969 99.2H0.296875L29.2969 29Z"
                      fill="#FCBA63"
                    />
                  </g>
                  <path
                    opacity="0.3"
                    d="M99.4047 0V26.3L47.9047 47.6L29.3047 29L99.4047 0Z"
                    fill="white"
                  />
                  <g opacity="0.3">
                    <path
                      d="M73.3984 37.1002L33.8984 116.7L37.2985 125L82.8984 33.2002L73.3984 37.1002Z"
                      fill="white"
                    />
                    <path
                      d="M123.798 36.3994L63.8984 157.199L70.1985 159.799L130.098 38.9994L123.798 36.3994Z"
                      fill="white"
                    />
                    <path
                      d="M162.098 74.5L117.398 164.5L126.898 160.6L165.498 82.8L162.098 74.5Z"
                      fill="white"
                    />
                    <path
                      d="M99.4 26.2998L97 27.2998L42.5 137.3L48 150.6L59 155.2L119 34.3998L99.4 26.2998Z"
                      fill="white"
                    />
                    <path
                      d="M150.903 47.5998L146.603 45.7998L86.7031 166.7L99.5031 172L103.003 170.5L156.803 61.7998L150.903 47.5998Z"
                      fill="white"
                    />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_3851_14">
                    <rect width={199} height={199} fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
          <div className="rounded-full">
            <div className="w-6 h-6 bg-white/5 rounded-lg p-[3px]">
              <svg
                className="p-1 w-full h-full"
                width={199}
                height={199}
                viewBox="0 0 199 199"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_3851_14)">
                  <path
                    d="M29.3969 169.3L0.296875 99.2L29.2969 29L99.3969 0L169.497 29L198.597 99.1L169.597 169.2L99.4969 198.3L29.3969 169.3Z"
                    fill="#FFB240"
                  />
                  <path
                    d="M48.0016 150.6L26.6016 99.1998L47.9016 47.5998L99.4016 26.2998L150.902 47.5998L172.302 99.0998L151.002 150.6L99.5016 172L48.0016 150.6Z"
                    fill="#FCBA63"
                  />
                  <path
                    d="M99.5 198.3V172L151 150.6L169.6 169.2L99.5 198.3Z"
                    fill="#DE9A3B"
                  />
                  <path
                    d="M99.4985 198.3V172L47.9985 150.6L29.3984 169.2L99.4985 198.3Z"
                    fill="#E48914"
                  />
                  <path
                    d="M169.6 169.2L151 150.6L172.3 99.0996H198.6L169.6 169.2Z"
                    fill="#E48914"
                  />
                  <path
                    opacity="0.3"
                    d="M29.3969 169.3L47.9969 150.7L26.6969 99.1996L0.296875 99.0996L29.3969 169.3Z"
                    fill="white"
                  />
                  <path
                    opacity="0.3"
                    d="M198.598 99.1H172.298L150.898 47.6L169.498 29L198.598 99.1Z"
                    fill="white"
                  />
                  <g opacity="0.3">
                    <path
                      d="M29.2969 29L47.8969 47.6L26.5969 99.2H0.296875L29.2969 29Z"
                      fill="#FCBA63"
                    />
                  </g>
                  <path
                    opacity="0.3"
                    d="M99.4047 0V26.3L47.9047 47.6L29.3047 29L99.4047 0Z"
                    fill="white"
                  />
                  <g opacity="0.3">
                    <path
                      d="M73.3984 37.1002L33.8984 116.7L37.2985 125L82.8984 33.2002L73.3984 37.1002Z"
                      fill="white"
                    />
                    <path
                      d="M123.798 36.3994L63.8984 157.199L70.1985 159.799L130.098 38.9994L123.798 36.3994Z"
                      fill="white"
                    />
                    <path
                      d="M162.098 74.5L117.398 164.5L126.898 160.6L165.498 82.8L162.098 74.5Z"
                      fill="white"
                    />
                    <path
                      d="M99.4 26.2998L97 27.2998L42.5 137.3L48 150.6L59 155.2L119 34.3998L99.4 26.2998Z"
                      fill="white"
                    />
                    <path
                      d="M150.903 47.5998L146.603 45.7998L86.7031 166.7L99.5031 172L103.003 170.5L156.803 61.7998L150.903 47.5998Z"
                      fill="white"
                    />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_3851_14">
                    <rect width={199} height={199} fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-0.5">
          <div className="rounded-full">
            <div className="w-6 h-6 bg-white/5 rounded-lg p-[3px]">
              <svg
                className="p-1 w-full h-full"
                width={194}
                height={194}
                viewBox="0 0 194 194"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_3851_2)">
                  <path
                    d="M97.3984 194L0.898438 97.4004L97.3984 0.900391L193.998 97.4004L97.3984 194Z"
                    fill="#2ABFA3"
                  />
                  <path
                    d="M97.3953 158.2L36.6953 97.4002L97.3953 36.7002L158.195 97.4002L97.3953 158.2Z"
                    fill="#45CFB5"
                  />
                  <path
                    d="M97.3984 194V158.2L158.198 97.4004H193.998L97.3984 194Z"
                    fill="#09967B"
                  />
                  <path
                    d="M193.998 97.4004H158.198L97.3984 36.7004V0.900391L193.998 97.4004Z"
                    fill="#1CA289"
                  />
                  <path
                    d="M0.898438 97.4004H36.6984L97.3984 158.2V194L0.898438 97.4004Z"
                    fill="#1CA289"
                  />
                  <g opacity="0.3">
                    <path
                      d="M97.3984 36.7002L83.9984 50.1002L49.8984 110.7L53.7984 114.6L97.5984 36.8002L97.3984 36.7002Z"
                      fill="white"
                    />
                    <path
                      d="M119.698 58.9004L75.8984 136.7L79.7984 140.6L123.598 62.8004L119.698 58.9004Z"
                      fill="white"
                    />
                    <path
                      d="M103.503 42.7002L59.7031 120.4L72.9031 133.7L116.703 55.9002L103.503 42.7002Z"
                      fill="white"
                    />
                    <path
                      d="M105.103 150.6L143.403 82.6002L134.003 73.2002L90.2031 151L97.4031 158.2L105.103 150.6Z"
                      fill="white"
                    />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_3851_2">
                    <rect width={194} height={194} fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-0.5">
          <div className="rounded-full">
            <div className="w-6 h-6 bg-white/5 rounded-lg p-[3px]">
              <svg
                className="p-1 w-full h-full"
                width={199}
                height={199}
                viewBox="0 0 199 199"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_3851_32)">
                  <path
                    d="M29.3969 169.3L0.296875 99.2L29.2969 29L99.3969 0L169.497 29L198.597 99.1L169.597 169.2L99.4969 198.3L29.3969 169.3Z"
                    fill="#F44F52"
                  />
                  <path
                    d="M48.0016 150.6L26.6016 99.1998L47.9016 47.5998L99.4016 26.2998L150.902 47.5998L172.302 99.0998L151.002 150.6L99.5016 172L48.0016 150.6Z"
                    fill="#FF6E6E"
                  />
                  <path
                    d="M99.5 198.3V172L151 150.6L169.6 169.2L99.5 198.3Z"
                    fill="#FF6E6E"
                  />
                  <path
                    d="M99.4985 198.3V172L47.9985 150.6L29.3984 169.2L99.4985 198.3Z"
                    fill="#FF514B"
                  />
                  <path
                    d="M169.6 169.2L151 150.6L172.3 99.0996H198.6L169.6 169.2Z"
                    fill="#FF514B"
                  />
                  <path
                    opacity="0.3"
                    d="M29.3969 169.3L47.9969 150.7L26.6969 99.1996L0.296875 99.0996L29.3969 169.3Z"
                    fill="white"
                  />
                  <path
                    opacity="0.3"
                    d="M198.598 99.1H172.298L150.898 47.6L169.498 29L198.598 99.1Z"
                    fill="white"
                  />
                  <g opacity="0.3">
                    <path
                      d="M29.2969 29L47.8969 47.6L26.5969 99.2H0.296875L29.2969 29Z"
                      fill="#FF6E6E"
                    />
                  </g>
                  <path
                    opacity="0.3"
                    d="M99.4047 0V26.3L47.9047 47.6L29.3047 29L99.4047 0Z"
                    fill="white"
                  />
                  <g opacity="0.3">
                    <path
                      d="M73.3984 37.1002L33.8984 116.7L37.2985 125L82.8984 33.2002L73.3984 37.1002Z"
                      fill="white"
                    />
                    <path
                      d="M123.798 36.3994L63.8984 157.199L70.1985 159.799L130.098 38.9994L123.798 36.3994Z"
                      fill="white"
                    />
                    <path
                      d="M162.098 74.5L117.398 164.5L126.898 160.6L165.498 82.8L162.098 74.5Z"
                      fill="white"
                    />
                    <path
                      d="M99.4 26.2998L97 27.2998L42.5 137.3L48 150.6L59 155.2L119 34.3998L99.4 26.2998Z"
                      fill="white"
                    />
                    <path
                      d="M150.903 47.5998L146.603 45.7998L86.7031 166.7L99.5031 172L103.003 170.5L156.803 61.7998L150.903 47.5998Z"
                      fill="white"
                    />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_3851_32">
                    <rect width={199} height={199} fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
          <div className="rounded-full">
            <div className="w-6 h-6 bg-white/5 rounded-lg p-[3px]">
              <svg
                className="p-1 w-full h-full"
                width={199}
                height={199}
                viewBox="0 0 199 199"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_3851_32)">
                  <path
                    d="M29.3969 169.3L0.296875 99.2L29.2969 29L99.3969 0L169.497 29L198.597 99.1L169.597 169.2L99.4969 198.3L29.3969 169.3Z"
                    fill="#F44F52"
                  />
                  <path
                    d="M48.0016 150.6L26.6016 99.1998L47.9016 47.5998L99.4016 26.2998L150.902 47.5998L172.302 99.0998L151.002 150.6L99.5016 172L48.0016 150.6Z"
                    fill="#FF6E6E"
                  />
                  <path
                    d="M99.5 198.3V172L151 150.6L169.6 169.2L99.5 198.3Z"
                    fill="#FF6E6E"
                  />
                  <path
                    d="M99.4985 198.3V172L47.9985 150.6L29.3984 169.2L99.4985 198.3Z"
                    fill="#FF514B"
                  />
                  <path
                    d="M169.6 169.2L151 150.6L172.3 99.0996H198.6L169.6 169.2Z"
                    fill="#FF514B"
                  />
                  <path
                    opacity="0.3"
                    d="M29.3969 169.3L47.9969 150.7L26.6969 99.1996L0.296875 99.0996L29.3969 169.3Z"
                    fill="white"
                  />
                  <path
                    opacity="0.3"
                    d="M198.598 99.1H172.298L150.898 47.6L169.498 29L198.598 99.1Z"
                    fill="white"
                  />
                  <g opacity="0.3">
                    <path
                      d="M29.2969 29L47.8969 47.6L26.5969 99.2H0.296875L29.2969 29Z"
                      fill="#FF6E6E"
                    />
                  </g>
                  <path
                    opacity="0.3"
                    d="M99.4047 0V26.3L47.9047 47.6L29.3047 29L99.4047 0Z"
                    fill="white"
                  />
                  <g opacity="0.3">
                    <path
                      d="M73.3984 37.1002L33.8984 116.7L37.2985 125L82.8984 33.2002L73.3984 37.1002Z"
                      fill="white"
                    />
                    <path
                      d="M123.798 36.3994L63.8984 157.199L70.1985 159.799L130.098 38.9994L123.798 36.3994Z"
                      fill="white"
                    />
                    <path
                      d="M162.098 74.5L117.398 164.5L126.898 160.6L165.498 82.8L162.098 74.5Z"
                      fill="white"
                    />
                    <path
                      d="M99.4 26.2998L97 27.2998L42.5 137.3L48 150.6L59 155.2L119 34.3998L99.4 26.2998Z"
                      fill="white"
                    />
                    <path
                      d="M150.903 47.5998L146.603 45.7998L86.7031 166.7L99.5031 172L103.003 170.5L156.803 61.7998L150.903 47.5998Z"
                      fill="white"
                    />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_3851_32">
                    <rect width={199} height={199} fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-0.5">
          <div className="rounded-full">
            <div className="w-6 h-6 bg-white/5 rounded-lg p-[3px]">
              <svg
                className="p-1 w-full h-full"
                width={199}
                height={199}
                viewBox="0 0 199 199"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_3851_14)">
                  <path
                    d="M29.3969 169.3L0.296875 99.2L29.2969 29L99.3969 0L169.497 29L198.597 99.1L169.597 169.2L99.4969 198.3L29.3969 169.3Z"
                    fill="#FFB240"
                  />
                  <path
                    d="M48.0016 150.6L26.6016 99.1998L47.9016 47.5998L99.4016 26.2998L150.902 47.5998L172.302 99.0998L151.002 150.6L99.5016 172L48.0016 150.6Z"
                    fill="#FCBA63"
                  />
                  <path
                    d="M99.5 198.3V172L151 150.6L169.6 169.2L99.5 198.3Z"
                    fill="#DE9A3B"
                  />
                  <path
                    d="M99.4985 198.3V172L47.9985 150.6L29.3984 169.2L99.4985 198.3Z"
                    fill="#E48914"
                  />
                  <path
                    d="M169.6 169.2L151 150.6L172.3 99.0996H198.6L169.6 169.2Z"
                    fill="#E48914"
                  />
                  <path
                    opacity="0.3"
                    d="M29.3969 169.3L47.9969 150.7L26.6969 99.1996L0.296875 99.0996L29.3969 169.3Z"
                    fill="white"
                  />
                  <path
                    opacity="0.3"
                    d="M198.598 99.1H172.298L150.898 47.6L169.498 29L198.598 99.1Z"
                    fill="white"
                  />
                  <g opacity="0.3">
                    <path
                      d="M29.2969 29L47.8969 47.6L26.5969 99.2H0.296875L29.2969 29Z"
                      fill="#FCBA63"
                    />
                  </g>
                  <path
                    opacity="0.3"
                    d="M99.4047 0V26.3L47.9047 47.6L29.3047 29L99.4047 0Z"
                    fill="white"
                  />
                  <g opacity="0.3">
                    <path
                      d="M73.3984 37.1002L33.8984 116.7L37.2985 125L82.8984 33.2002L73.3984 37.1002Z"
                      fill="white"
                    />
                    <path
                      d="M123.798 36.3994L63.8984 157.199L70.1985 159.799L130.098 38.9994L123.798 36.3994Z"
                      fill="white"
                    />
                    <path
                      d="M162.098 74.5L117.398 164.5L126.898 160.6L165.498 82.8L162.098 74.5Z"
                      fill="white"
                    />
                    <path
                      d="M99.4 26.2998L97 27.2998L42.5 137.3L48 150.6L59 155.2L119 34.3998L99.4 26.2998Z"
                      fill="white"
                    />
                    <path
                      d="M150.903 47.5998L146.603 45.7998L86.7031 166.7L99.5031 172L103.003 170.5L156.803 61.7998L150.903 47.5998Z"
                      fill="white"
                    />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_3851_14">
                    <rect width={199} height={199} fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-0.5">
          <div className="rounded-full">
            <div className="w-6 h-6 bg-white/5 rounded-lg p-[3px]">
              <svg
                className="p-1 w-full h-full"
                width={199}
                height={199}
                viewBox="0 0 199 199"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_3851_32)">
                  <path
                    d="M29.3969 169.3L0.296875 99.2L29.2969 29L99.3969 0L169.497 29L198.597 99.1L169.597 169.2L99.4969 198.3L29.3969 169.3Z"
                    fill="#F44F52"
                  />
                  <path
                    d="M48.0016 150.6L26.6016 99.1998L47.9016 47.5998L99.4016 26.2998L150.902 47.5998L172.302 99.0998L151.002 150.6L99.5016 172L48.0016 150.6Z"
                    fill="#FF6E6E"
                  />
                  <path
                    d="M99.5 198.3V172L151 150.6L169.6 169.2L99.5 198.3Z"
                    fill="#FF6E6E"
                  />
                  <path
                    d="M99.4985 198.3V172L47.9985 150.6L29.3984 169.2L99.4985 198.3Z"
                    fill="#FF514B"
                  />
                  <path
                    d="M169.6 169.2L151 150.6L172.3 99.0996H198.6L169.6 169.2Z"
                    fill="#FF514B"
                  />
                  <path
                    opacity="0.3"
                    d="M29.3969 169.3L47.9969 150.7L26.6969 99.1996L0.296875 99.0996L29.3969 169.3Z"
                    fill="white"
                  />
                  <path
                    opacity="0.3"
                    d="M198.598 99.1H172.298L150.898 47.6L169.498 29L198.598 99.1Z"
                    fill="white"
                  />
                  <g opacity="0.3">
                    <path
                      d="M29.2969 29L47.8969 47.6L26.5969 99.2H0.296875L29.2969 29Z"
                      fill="#FF6E6E"
                    />
                  </g>
                  <path
                    opacity="0.3"
                    d="M99.4047 0V26.3L47.9047 47.6L29.3047 29L99.4047 0Z"
                    fill="white"
                  />
                  <g opacity="0.3">
                    <path
                      d="M73.3984 37.1002L33.8984 116.7L37.2985 125L82.8984 33.2002L73.3984 37.1002Z"
                      fill="white"
                    />
                    <path
                      d="M123.798 36.3994L63.8984 157.199L70.1985 159.799L130.098 38.9994L123.798 36.3994Z"
                      fill="white"
                    />
                    <path
                      d="M162.098 74.5L117.398 164.5L126.898 160.6L165.498 82.8L162.098 74.5Z"
                      fill="white"
                    />
                    <path
                      d="M99.4 26.2998L97 27.2998L42.5 137.3L48 150.6L59 155.2L119 34.3998L99.4 26.2998Z"
                      fill="white"
                    />
                    <path
                      d="M150.903 47.5998L146.603 45.7998L86.7031 166.7L99.5031 172L103.003 170.5L156.803 61.7998L150.903 47.5998Z"
                      fill="white"
                    />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_3851_32">
                    <rect width={199} height={199} fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
          <div className="rounded-full">
            <div className="w-6 h-6 bg-white/5 rounded-lg p-[3px]">
              <svg
                className="p-1 w-full h-full"
                width={199}
                height={199}
                viewBox="0 0 199 199"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_3851_32)">
                  <path
                    d="M29.3969 169.3L0.296875 99.2L29.2969 29L99.3969 0L169.497 29L198.597 99.1L169.597 169.2L99.4969 198.3L29.3969 169.3Z"
                    fill="#F44F52"
                  />
                  <path
                    d="M48.0016 150.6L26.6016 99.1998L47.9016 47.5998L99.4016 26.2998L150.902 47.5998L172.302 99.0998L151.002 150.6L99.5016 172L48.0016 150.6Z"
                    fill="#FF6E6E"
                  />
                  <path
                    d="M99.5 198.3V172L151 150.6L169.6 169.2L99.5 198.3Z"
                    fill="#FF6E6E"
                  />
                  <path
                    d="M99.4985 198.3V172L47.9985 150.6L29.3984 169.2L99.4985 198.3Z"
                    fill="#FF514B"
                  />
                  <path
                    d="M169.6 169.2L151 150.6L172.3 99.0996H198.6L169.6 169.2Z"
                    fill="#FF514B"
                  />
                  <path
                    opacity="0.3"
                    d="M29.3969 169.3L47.9969 150.7L26.6969 99.1996L0.296875 99.0996L29.3969 169.3Z"
                    fill="white"
                  />
                  <path
                    opacity="0.3"
                    d="M198.598 99.1H172.298L150.898 47.6L169.498 29L198.598 99.1Z"
                    fill="white"
                  />
                  <g opacity="0.3">
                    <path
                      d="M29.2969 29L47.8969 47.6L26.5969 99.2H0.296875L29.2969 29Z"
                      fill="#FF6E6E"
                    />
                  </g>
                  <path
                    opacity="0.3"
                    d="M99.4047 0V26.3L47.9047 47.6L29.3047 29L99.4047 0Z"
                    fill="white"
                  />
                  <g opacity="0.3">
                    <path
                      d="M73.3984 37.1002L33.8984 116.7L37.2985 125L82.8984 33.2002L73.3984 37.1002Z"
                      fill="white"
                    />
                    <path
                      d="M123.798 36.3994L63.8984 157.199L70.1985 159.799L130.098 38.9994L123.798 36.3994Z"
                      fill="white"
                    />
                    <path
                      d="M162.098 74.5L117.398 164.5L126.898 160.6L165.498 82.8L162.098 74.5Z"
                      fill="white"
                    />
                    <path
                      d="M99.4 26.2998L97 27.2998L42.5 137.3L48 150.6L59 155.2L119 34.3998L99.4 26.2998Z"
                      fill="white"
                    />
                    <path
                      d="M150.903 47.5998L146.603 45.7998L86.7031 166.7L99.5031 172L103.003 170.5L156.803 61.7998L150.903 47.5998Z"
                      fill="white"
                    />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_3851_32">
                    <rect width={199} height={199} fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
          <div className="rounded-full">
            <div className="w-6 h-6 bg-white/5 rounded-lg p-[3px]">
              <svg
                className="p-1 w-full h-full"
                width={199}
                height={199}
                viewBox="0 0 199 199"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_3851_32)">
                  <path
                    d="M29.3969 169.3L0.296875 99.2L29.2969 29L99.3969 0L169.497 29L198.597 99.1L169.597 169.2L99.4969 198.3L29.3969 169.3Z"
                    fill="#F44F52"
                  />
                  <path
                    d="M48.0016 150.6L26.6016 99.1998L47.9016 47.5998L99.4016 26.2998L150.902 47.5998L172.302 99.0998L151.002 150.6L99.5016 172L48.0016 150.6Z"
                    fill="#FF6E6E"
                  />
                  <path
                    d="M99.5 198.3V172L151 150.6L169.6 169.2L99.5 198.3Z"
                    fill="#FF6E6E"
                  />
                  <path
                    d="M99.4985 198.3V172L47.9985 150.6L29.3984 169.2L99.4985 198.3Z"
                    fill="#FF514B"
                  />
                  <path
                    d="M169.6 169.2L151 150.6L172.3 99.0996H198.6L169.6 169.2Z"
                    fill="#FF514B"
                  />
                  <path
                    opacity="0.3"
                    d="M29.3969 169.3L47.9969 150.7L26.6969 99.1996L0.296875 99.0996L29.3969 169.3Z"
                    fill="white"
                  />
                  <path
                    opacity="0.3"
                    d="M198.598 99.1H172.298L150.898 47.6L169.498 29L198.598 99.1Z"
                    fill="white"
                  />
                  <g opacity="0.3">
                    <path
                      d="M29.2969 29L47.8969 47.6L26.5969 99.2H0.296875L29.2969 29Z"
                      fill="#FF6E6E"
                    />
                  </g>
                  <path
                    opacity="0.3"
                    d="M99.4047 0V26.3L47.9047 47.6L29.3047 29L99.4047 0Z"
                    fill="white"
                  />
                  <g opacity="0.3">
                    <path
                      d="M73.3984 37.1002L33.8984 116.7L37.2985 125L82.8984 33.2002L73.3984 37.1002Z"
                      fill="white"
                    />
                    <path
                      d="M123.798 36.3994L63.8984 157.199L70.1985 159.799L130.098 38.9994L123.798 36.3994Z"
                      fill="white"
                    />
                    <path
                      d="M162.098 74.5L117.398 164.5L126.898 160.6L165.498 82.8L162.098 74.5Z"
                      fill="white"
                    />
                    <path
                      d="M99.4 26.2998L97 27.2998L42.5 137.3L48 150.6L59 155.2L119 34.3998L99.4 26.2998Z"
                      fill="white"
                    />
                    <path
                      d="M150.903 47.5998L146.603 45.7998L86.7031 166.7L99.5031 172L103.003 170.5L156.803 61.7998L150.903 47.5998Z"
                      fill="white"
                    />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_3851_32">
                    <rect width={199} height={199} fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-0.5">
          <div className="rounded-full">
            <div className="w-6 h-6 bg-white/5 rounded-lg p-[3px]">
              <svg
                className="p-1 w-full h-full"
                width={199}
                height={199}
                viewBox="0 0 199 199"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_3851_14)">
                  <path
                    d="M29.3969 169.3L0.296875 99.2L29.2969 29L99.3969 0L169.497 29L198.597 99.1L169.597 169.2L99.4969 198.3L29.3969 169.3Z"
                    fill="#FFB240"
                  />
                  <path
                    d="M48.0016 150.6L26.6016 99.1998L47.9016 47.5998L99.4016 26.2998L150.902 47.5998L172.302 99.0998L151.002 150.6L99.5016 172L48.0016 150.6Z"
                    fill="#FCBA63"
                  />
                  <path
                    d="M99.5 198.3V172L151 150.6L169.6 169.2L99.5 198.3Z"
                    fill="#DE9A3B"
                  />
                  <path
                    d="M99.4985 198.3V172L47.9985 150.6L29.3984 169.2L99.4985 198.3Z"
                    fill="#E48914"
                  />
                  <path
                    d="M169.6 169.2L151 150.6L172.3 99.0996H198.6L169.6 169.2Z"
                    fill="#E48914"
                  />
                  <path
                    opacity="0.3"
                    d="M29.3969 169.3L47.9969 150.7L26.6969 99.1996L0.296875 99.0996L29.3969 169.3Z"
                    fill="white"
                  />
                  <path
                    opacity="0.3"
                    d="M198.598 99.1H172.298L150.898 47.6L169.498 29L198.598 99.1Z"
                    fill="white"
                  />
                  <g opacity="0.3">
                    <path
                      d="M29.2969 29L47.8969 47.6L26.5969 99.2H0.296875L29.2969 29Z"
                      fill="#FCBA63"
                    />
                  </g>
                  <path
                    opacity="0.3"
                    d="M99.4047 0V26.3L47.9047 47.6L29.3047 29L99.4047 0Z"
                    fill="white"
                  />
                  <g opacity="0.3">
                    <path
                      d="M73.3984 37.1002L33.8984 116.7L37.2985 125L82.8984 33.2002L73.3984 37.1002Z"
                      fill="white"
                    />
                    <path
                      d="M123.798 36.3994L63.8984 157.199L70.1985 159.799L130.098 38.9994L123.798 36.3994Z"
                      fill="white"
                    />
                    <path
                      d="M162.098 74.5L117.398 164.5L126.898 160.6L165.498 82.8L162.098 74.5Z"
                      fill="white"
                    />
                    <path
                      d="M99.4 26.2998L97 27.2998L42.5 137.3L48 150.6L59 155.2L119 34.3998L99.4 26.2998Z"
                      fill="white"
                    />
                    <path
                      d="M150.903 47.5998L146.603 45.7998L86.7031 166.7L99.5031 172L103.003 170.5L156.803 61.7998L150.903 47.5998Z"
                      fill="white"
                    />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_3851_14">
                    <rect width={199} height={199} fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-0.5">
          <div className="rounded-full">
            <div className="w-6 h-6 bg-white/5 rounded-lg p-[3px]">
              <svg
                className="p-1 w-full h-full"
                width={199}
                height={199}
                viewBox="0 0 199 199"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_3851_32)">
                  <path
                    d="M29.3969 169.3L0.296875 99.2L29.2969 29L99.3969 0L169.497 29L198.597 99.1L169.597 169.2L99.4969 198.3L29.3969 169.3Z"
                    fill="#F44F52"
                  />
                  <path
                    d="M48.0016 150.6L26.6016 99.1998L47.9016 47.5998L99.4016 26.2998L150.902 47.5998L172.302 99.0998L151.002 150.6L99.5016 172L48.0016 150.6Z"
                    fill="#FF6E6E"
                  />
                  <path
                    d="M99.5 198.3V172L151 150.6L169.6 169.2L99.5 198.3Z"
                    fill="#FF6E6E"
                  />
                  <path
                    d="M99.4985 198.3V172L47.9985 150.6L29.3984 169.2L99.4985 198.3Z"
                    fill="#FF514B"
                  />
                  <path
                    d="M169.6 169.2L151 150.6L172.3 99.0996H198.6L169.6 169.2Z"
                    fill="#FF514B"
                  />
                  <path
                    opacity="0.3"
                    d="M29.3969 169.3L47.9969 150.7L26.6969 99.1996L0.296875 99.0996L29.3969 169.3Z"
                    fill="white"
                  />
                  <path
                    opacity="0.3"
                    d="M198.598 99.1H172.298L150.898 47.6L169.498 29L198.598 99.1Z"
                    fill="white"
                  />
                  <g opacity="0.3">
                    <path
                      d="M29.2969 29L47.8969 47.6L26.5969 99.2H0.296875L29.2969 29Z"
                      fill="#FF6E6E"
                    />
                  </g>
                  <path
                    opacity="0.3"
                    d="M99.4047 0V26.3L47.9047 47.6L29.3047 29L99.4047 0Z"
                    fill="white"
                  />
                  <g opacity="0.3">
                    <path
                      d="M73.3984 37.1002L33.8984 116.7L37.2985 125L82.8984 33.2002L73.3984 37.1002Z"
                      fill="white"
                    />
                    <path
                      d="M123.798 36.3994L63.8984 157.199L70.1985 159.799L130.098 38.9994L123.798 36.3994Z"
                      fill="white"
                    />
                    <path
                      d="M162.098 74.5L117.398 164.5L126.898 160.6L165.498 82.8L162.098 74.5Z"
                      fill="white"
                    />
                    <path
                      d="M99.4 26.2998L97 27.2998L42.5 137.3L48 150.6L59 155.2L119 34.3998L99.4 26.2998Z"
                      fill="white"
                    />
                    <path
                      d="M150.903 47.5998L146.603 45.7998L86.7031 166.7L99.5031 172L103.003 170.5L156.803 61.7998L150.903 47.5998Z"
                      fill="white"
                    />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_3851_32">
                    <rect width={199} height={199} fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-0.5">
          <div className="rounded-full">
            <div className="w-6 h-6 bg-white/5 rounded-lg p-[3px]">
              <svg
                className="p-1 w-full h-full"
                width={199}
                height={199}
                viewBox="0 0 199 199"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_3851_14)">
                  <path
                    d="M29.3969 169.3L0.296875 99.2L29.2969 29L99.3969 0L169.497 29L198.597 99.1L169.597 169.2L99.4969 198.3L29.3969 169.3Z"
                    fill="#FFB240"
                  />
                  <path
                    d="M48.0016 150.6L26.6016 99.1998L47.9016 47.5998L99.4016 26.2998L150.902 47.5998L172.302 99.0998L151.002 150.6L99.5016 172L48.0016 150.6Z"
                    fill="#FCBA63"
                  />
                  <path
                    d="M99.5 198.3V172L151 150.6L169.6 169.2L99.5 198.3Z"
                    fill="#DE9A3B"
                  />
                  <path
                    d="M99.4985 198.3V172L47.9985 150.6L29.3984 169.2L99.4985 198.3Z"
                    fill="#E48914"
                  />
                  <path
                    d="M169.6 169.2L151 150.6L172.3 99.0996H198.6L169.6 169.2Z"
                    fill="#E48914"
                  />
                  <path
                    opacity="0.3"
                    d="M29.3969 169.3L47.9969 150.7L26.6969 99.1996L0.296875 99.0996L29.3969 169.3Z"
                    fill="white"
                  />
                  <path
                    opacity="0.3"
                    d="M198.598 99.1H172.298L150.898 47.6L169.498 29L198.598 99.1Z"
                    fill="white"
                  />
                  <g opacity="0.3">
                    <path
                      d="M29.2969 29L47.8969 47.6L26.5969 99.2H0.296875L29.2969 29Z"
                      fill="#FCBA63"
                    />
                  </g>
                  <path
                    opacity="0.3"
                    d="M99.4047 0V26.3L47.9047 47.6L29.3047 29L99.4047 0Z"
                    fill="white"
                  />
                  <g opacity="0.3">
                    <path
                      d="M73.3984 37.1002L33.8984 116.7L37.2985 125L82.8984 33.2002L73.3984 37.1002Z"
                      fill="white"
                    />
                    <path
                      d="M123.798 36.3994L63.8984 157.199L70.1985 159.799L130.098 38.9994L123.798 36.3994Z"
                      fill="white"
                    />
                    <path
                      d="M162.098 74.5L117.398 164.5L126.898 160.6L165.498 82.8L162.098 74.5Z"
                      fill="white"
                    />
                    <path
                      d="M99.4 26.2998L97 27.2998L42.5 137.3L48 150.6L59 155.2L119 34.3998L99.4 26.2998Z"
                      fill="white"
                    />
                    <path
                      d="M150.903 47.5998L146.603 45.7998L86.7031 166.7L99.5031 172L103.003 170.5L156.803 61.7998L150.903 47.5998Z"
                      fill="white"
                    />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_3851_14">
                    <rect width={199} height={199} fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-0.5">
          <div className="rounded-full">
            <div className="w-6 h-6 bg-white/5 rounded-lg p-[3px]">
              <svg
                className="p-1 w-full h-full"
                width={199}
                height={199}
                viewBox="0 0 199 199"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_3851_32)">
                  <path
                    d="M29.3969 169.3L0.296875 99.2L29.2969 29L99.3969 0L169.497 29L198.597 99.1L169.597 169.2L99.4969 198.3L29.3969 169.3Z"
                    fill="#F44F52"
                  />
                  <path
                    d="M48.0016 150.6L26.6016 99.1998L47.9016 47.5998L99.4016 26.2998L150.902 47.5998L172.302 99.0998L151.002 150.6L99.5016 172L48.0016 150.6Z"
                    fill="#FF6E6E"
                  />
                  <path
                    d="M99.5 198.3V172L151 150.6L169.6 169.2L99.5 198.3Z"
                    fill="#FF6E6E"
                  />
                  <path
                    d="M99.4985 198.3V172L47.9985 150.6L29.3984 169.2L99.4985 198.3Z"
                    fill="#FF514B"
                  />
                  <path
                    d="M169.6 169.2L151 150.6L172.3 99.0996H198.6L169.6 169.2Z"
                    fill="#FF514B"
                  />
                  <path
                    opacity="0.3"
                    d="M29.3969 169.3L47.9969 150.7L26.6969 99.1996L0.296875 99.0996L29.3969 169.3Z"
                    fill="white"
                  />
                  <path
                    opacity="0.3"
                    d="M198.598 99.1H172.298L150.898 47.6L169.498 29L198.598 99.1Z"
                    fill="white"
                  />
                  <g opacity="0.3">
                    <path
                      d="M29.2969 29L47.8969 47.6L26.5969 99.2H0.296875L29.2969 29Z"
                      fill="#FF6E6E"
                    />
                  </g>
                  <path
                    opacity="0.3"
                    d="M99.4047 0V26.3L47.9047 47.6L29.3047 29L99.4047 0Z"
                    fill="white"
                  />
                  <g opacity="0.3">
                    <path
                      d="M73.3984 37.1002L33.8984 116.7L37.2985 125L82.8984 33.2002L73.3984 37.1002Z"
                      fill="white"
                    />
                    <path
                      d="M123.798 36.3994L63.8984 157.199L70.1985 159.799L130.098 38.9994L123.798 36.3994Z"
                      fill="white"
                    />
                    <path
                      d="M162.098 74.5L117.398 164.5L126.898 160.6L165.498 82.8L162.098 74.5Z"
                      fill="white"
                    />
                    <path
                      d="M99.4 26.2998L97 27.2998L42.5 137.3L48 150.6L59 155.2L119 34.3998L99.4 26.2998Z"
                      fill="white"
                    />
                    <path
                      d="M150.903 47.5998L146.603 45.7998L86.7031 166.7L99.5031 172L103.003 170.5L156.803 61.7998L150.903 47.5998Z"
                      fill="white"
                    />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_3851_32">
                    <rect width={199} height={199} fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
          <div className="rounded-full">
            <div className="w-6 h-6 bg-white/5 rounded-lg p-[3px]">
              <svg
                className="p-1 w-full h-full"
                width={199}
                height={199}
                viewBox="0 0 199 199"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_3851_32)">
                  <path
                    d="M29.3969 169.3L0.296875 99.2L29.2969 29L99.3969 0L169.497 29L198.597 99.1L169.597 169.2L99.4969 198.3L29.3969 169.3Z"
                    fill="#F44F52"
                  />
                  <path
                    d="M48.0016 150.6L26.6016 99.1998L47.9016 47.5998L99.4016 26.2998L150.902 47.5998L172.302 99.0998L151.002 150.6L99.5016 172L48.0016 150.6Z"
                    fill="#FF6E6E"
                  />
                  <path
                    d="M99.5 198.3V172L151 150.6L169.6 169.2L99.5 198.3Z"
                    fill="#FF6E6E"
                  />
                  <path
                    d="M99.4985 198.3V172L47.9985 150.6L29.3984 169.2L99.4985 198.3Z"
                    fill="#FF514B"
                  />
                  <path
                    d="M169.6 169.2L151 150.6L172.3 99.0996H198.6L169.6 169.2Z"
                    fill="#FF514B"
                  />
                  <path
                    opacity="0.3"
                    d="M29.3969 169.3L47.9969 150.7L26.6969 99.1996L0.296875 99.0996L29.3969 169.3Z"
                    fill="white"
                  />
                  <path
                    opacity="0.3"
                    d="M198.598 99.1H172.298L150.898 47.6L169.498 29L198.598 99.1Z"
                    fill="white"
                  />
                  <g opacity="0.3">
                    <path
                      d="M29.2969 29L47.8969 47.6L26.5969 99.2H0.296875L29.2969 29Z"
                      fill="#FF6E6E"
                    />
                  </g>
                  <path
                    opacity="0.3"
                    d="M99.4047 0V26.3L47.9047 47.6L29.3047 29L99.4047 0Z"
                    fill="white"
                  />
                  <g opacity="0.3">
                    <path
                      d="M73.3984 37.1002L33.8984 116.7L37.2985 125L82.8984 33.2002L73.3984 37.1002Z"
                      fill="white"
                    />
                    <path
                      d="M123.798 36.3994L63.8984 157.199L70.1985 159.799L130.098 38.9994L123.798 36.3994Z"
                      fill="white"
                    />
                    <path
                      d="M162.098 74.5L117.398 164.5L126.898 160.6L165.498 82.8L162.098 74.5Z"
                      fill="white"
                    />
                    <path
                      d="M99.4 26.2998L97 27.2998L42.5 137.3L48 150.6L59 155.2L119 34.3998L99.4 26.2998Z"
                      fill="white"
                    />
                    <path
                      d="M150.903 47.5998L146.603 45.7998L86.7031 166.7L99.5031 172L103.003 170.5L156.803 61.7998L150.903 47.5998Z"
                      fill="white"
                    />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_3851_32">
                    <rect width={199} height={199} fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-0.5">
          <div className="rounded-full">
            <div className="w-6 h-6 bg-white/5 rounded-lg p-[3px]">
              <svg
                className="p-1 w-full h-full"
                width={199}
                height={199}
                viewBox="0 0 199 199"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_3851_14)">
                  <path
                    d="M29.3969 169.3L0.296875 99.2L29.2969 29L99.3969 0L169.497 29L198.597 99.1L169.597 169.2L99.4969 198.3L29.3969 169.3Z"
                    fill="#FFB240"
                  />
                  <path
                    d="M48.0016 150.6L26.6016 99.1998L47.9016 47.5998L99.4016 26.2998L150.902 47.5998L172.302 99.0998L151.002 150.6L99.5016 172L48.0016 150.6Z"
                    fill="#FCBA63"
                  />
                  <path
                    d="M99.5 198.3V172L151 150.6L169.6 169.2L99.5 198.3Z"
                    fill="#DE9A3B"
                  />
                  <path
                    d="M99.4985 198.3V172L47.9985 150.6L29.3984 169.2L99.4985 198.3Z"
                    fill="#E48914"
                  />
                  <path
                    d="M169.6 169.2L151 150.6L172.3 99.0996H198.6L169.6 169.2Z"
                    fill="#E48914"
                  />
                  <path
                    opacity="0.3"
                    d="M29.3969 169.3L47.9969 150.7L26.6969 99.1996L0.296875 99.0996L29.3969 169.3Z"
                    fill="white"
                  />
                  <path
                    opacity="0.3"
                    d="M198.598 99.1H172.298L150.898 47.6L169.498 29L198.598 99.1Z"
                    fill="white"
                  />
                  <g opacity="0.3">
                    <path
                      d="M29.2969 29L47.8969 47.6L26.5969 99.2H0.296875L29.2969 29Z"
                      fill="#FCBA63"
                    />
                  </g>
                  <path
                    opacity="0.3"
                    d="M99.4047 0V26.3L47.9047 47.6L29.3047 29L99.4047 0Z"
                    fill="white"
                  />
                  <g opacity="0.3">
                    <path
                      d="M73.3984 37.1002L33.8984 116.7L37.2985 125L82.8984 33.2002L73.3984 37.1002Z"
                      fill="white"
                    />
                    <path
                      d="M123.798 36.3994L63.8984 157.199L70.1985 159.799L130.098 38.9994L123.798 36.3994Z"
                      fill="white"
                    />
                    <path
                      d="M162.098 74.5L117.398 164.5L126.898 160.6L165.498 82.8L162.098 74.5Z"
                      fill="white"
                    />
                    <path
                      d="M99.4 26.2998L97 27.2998L42.5 137.3L48 150.6L59 155.2L119 34.3998L99.4 26.2998Z"
                      fill="white"
                    />
                    <path
                      d="M150.903 47.5998L146.603 45.7998L86.7031 166.7L99.5031 172L103.003 170.5L156.803 61.7998L150.903 47.5998Z"
                      fill="white"
                    />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_3851_14">
                    <rect width={199} height={199} fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-0.5">
          <div className="rounded-full">
            <div className="w-6 h-6 bg-white/5 rounded-lg p-[3px]">
              <svg
                className="p-1 w-full h-full"
                width={199}
                height={199}
                viewBox="0 0 199 199"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_3851_32)">
                  <path
                    d="M29.3969 169.3L0.296875 99.2L29.2969 29L99.3969 0L169.497 29L198.597 99.1L169.597 169.2L99.4969 198.3L29.3969 169.3Z"
                    fill="#F44F52"
                  />
                  <path
                    d="M48.0016 150.6L26.6016 99.1998L47.9016 47.5998L99.4016 26.2998L150.902 47.5998L172.302 99.0998L151.002 150.6L99.5016 172L48.0016 150.6Z"
                    fill="#FF6E6E"
                  />
                  <path
                    d="M99.5 198.3V172L151 150.6L169.6 169.2L99.5 198.3Z"
                    fill="#FF6E6E"
                  />
                  <path
                    d="M99.4985 198.3V172L47.9985 150.6L29.3984 169.2L99.4985 198.3Z"
                    fill="#FF514B"
                  />
                  <path
                    d="M169.6 169.2L151 150.6L172.3 99.0996H198.6L169.6 169.2Z"
                    fill="#FF514B"
                  />
                  <path
                    opacity="0.3"
                    d="M29.3969 169.3L47.9969 150.7L26.6969 99.1996L0.296875 99.0996L29.3969 169.3Z"
                    fill="white"
                  />
                  <path
                    opacity="0.3"
                    d="M198.598 99.1H172.298L150.898 47.6L169.498 29L198.598 99.1Z"
                    fill="white"
                  />
                  <g opacity="0.3">
                    <path
                      d="M29.2969 29L47.8969 47.6L26.5969 99.2H0.296875L29.2969 29Z"
                      fill="#FF6E6E"
                    />
                  </g>
                  <path
                    opacity="0.3"
                    d="M99.4047 0V26.3L47.9047 47.6L29.3047 29L99.4047 0Z"
                    fill="white"
                  />
                  <g opacity="0.3">
                    <path
                      d="M73.3984 37.1002L33.8984 116.7L37.2985 125L82.8984 33.2002L73.3984 37.1002Z"
                      fill="white"
                    />
                    <path
                      d="M123.798 36.3994L63.8984 157.199L70.1985 159.799L130.098 38.9994L123.798 36.3994Z"
                      fill="white"
                    />
                    <path
                      d="M162.098 74.5L117.398 164.5L126.898 160.6L165.498 82.8L162.098 74.5Z"
                      fill="white"
                    />
                    <path
                      d="M99.4 26.2998L97 27.2998L42.5 137.3L48 150.6L59 155.2L119 34.3998L99.4 26.2998Z"
                      fill="white"
                    />
                    <path
                      d="M150.903 47.5998L146.603 45.7998L86.7031 166.7L99.5031 172L103.003 170.5L156.803 61.7998L150.903 47.5998Z"
                      fill="white"
                    />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_3851_32">
                    <rect width={199} height={199} fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-0.5">
          <div className="rounded-full">
            <div className="w-6 h-6 bg-white/5 rounded-lg p-[3px]">
              <svg
                className="p-1 w-full h-full"
                width={199}
                height={199}
                viewBox="0 0 199 199"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_3851_14)">
                  <path
                    d="M29.3969 169.3L0.296875 99.2L29.2969 29L99.3969 0L169.497 29L198.597 99.1L169.597 169.2L99.4969 198.3L29.3969 169.3Z"
                    fill="#FFB240"
                  />
                  <path
                    d="M48.0016 150.6L26.6016 99.1998L47.9016 47.5998L99.4016 26.2998L150.902 47.5998L172.302 99.0998L151.002 150.6L99.5016 172L48.0016 150.6Z"
                    fill="#FCBA63"
                  />
                  <path
                    d="M99.5 198.3V172L151 150.6L169.6 169.2L99.5 198.3Z"
                    fill="#DE9A3B"
                  />
                  <path
                    d="M99.4985 198.3V172L47.9985 150.6L29.3984 169.2L99.4985 198.3Z"
                    fill="#E48914"
                  />
                  <path
                    d="M169.6 169.2L151 150.6L172.3 99.0996H198.6L169.6 169.2Z"
                    fill="#E48914"
                  />
                  <path
                    opacity="0.3"
                    d="M29.3969 169.3L47.9969 150.7L26.6969 99.1996L0.296875 99.0996L29.3969 169.3Z"
                    fill="white"
                  />
                  <path
                    opacity="0.3"
                    d="M198.598 99.1H172.298L150.898 47.6L169.498 29L198.598 99.1Z"
                    fill="white"
                  />
                  <g opacity="0.3">
                    <path
                      d="M29.2969 29L47.8969 47.6L26.5969 99.2H0.296875L29.2969 29Z"
                      fill="#FCBA63"
                    />
                  </g>
                  <path
                    opacity="0.3"
                    d="M99.4047 0V26.3L47.9047 47.6L29.3047 29L99.4047 0Z"
                    fill="white"
                  />
                  <g opacity="0.3">
                    <path
                      d="M73.3984 37.1002L33.8984 116.7L37.2985 125L82.8984 33.2002L73.3984 37.1002Z"
                      fill="white"
                    />
                    <path
                      d="M123.798 36.3994L63.8984 157.199L70.1985 159.799L130.098 38.9994L123.798 36.3994Z"
                      fill="white"
                    />
                    <path
                      d="M162.098 74.5L117.398 164.5L126.898 160.6L165.498 82.8L162.098 74.5Z"
                      fill="white"
                    />
                    <path
                      d="M99.4 26.2998L97 27.2998L42.5 137.3L48 150.6L59 155.2L119 34.3998L99.4 26.2998Z"
                      fill="white"
                    />
                    <path
                      d="M150.903 47.5998L146.603 45.7998L86.7031 166.7L99.5031 172L103.003 170.5L156.803 61.7998L150.903 47.5998Z"
                      fill="white"
                    />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_3851_14">
                    <rect width={199} height={199} fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
          <div className="rounded-full">
            <div className="w-6 h-6 bg-white/5 rounded-lg p-[3px]">
              <svg
                className="p-1 w-full h-full"
                width={199}
                height={199}
                viewBox="0 0 199 199"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_3851_14)">
                  <path
                    d="M29.3969 169.3L0.296875 99.2L29.2969 29L99.3969 0L169.497 29L198.597 99.1L169.597 169.2L99.4969 198.3L29.3969 169.3Z"
                    fill="#FFB240"
                  />
                  <path
                    d="M48.0016 150.6L26.6016 99.1998L47.9016 47.5998L99.4016 26.2998L150.902 47.5998L172.302 99.0998L151.002 150.6L99.5016 172L48.0016 150.6Z"
                    fill="#FCBA63"
                  />
                  <path
                    d="M99.5 198.3V172L151 150.6L169.6 169.2L99.5 198.3Z"
                    fill="#DE9A3B"
                  />
                  <path
                    d="M99.4985 198.3V172L47.9985 150.6L29.3984 169.2L99.4985 198.3Z"
                    fill="#E48914"
                  />
                  <path
                    d="M169.6 169.2L151 150.6L172.3 99.0996H198.6L169.6 169.2Z"
                    fill="#E48914"
                  />
                  <path
                    opacity="0.3"
                    d="M29.3969 169.3L47.9969 150.7L26.6969 99.1996L0.296875 99.0996L29.3969 169.3Z"
                    fill="white"
                  />
                  <path
                    opacity="0.3"
                    d="M198.598 99.1H172.298L150.898 47.6L169.498 29L198.598 99.1Z"
                    fill="white"
                  />
                  <g opacity="0.3">
                    <path
                      d="M29.2969 29L47.8969 47.6L26.5969 99.2H0.296875L29.2969 29Z"
                      fill="#FCBA63"
                    />
                  </g>
                  <path
                    opacity="0.3"
                    d="M99.4047 0V26.3L47.9047 47.6L29.3047 29L99.4047 0Z"
                    fill="white"
                  />
                  <g opacity="0.3">
                    <path
                      d="M73.3984 37.1002L33.8984 116.7L37.2985 125L82.8984 33.2002L73.3984 37.1002Z"
                      fill="white"
                    />
                    <path
                      d="M123.798 36.3994L63.8984 157.199L70.1985 159.799L130.098 38.9994L123.798 36.3994Z"
                      fill="white"
                    />
                    <path
                      d="M162.098 74.5L117.398 164.5L126.898 160.6L165.498 82.8L162.098 74.5Z"
                      fill="white"
                    />
                    <path
                      d="M99.4 26.2998L97 27.2998L42.5 137.3L48 150.6L59 155.2L119 34.3998L99.4 26.2998Z"
                      fill="white"
                    />
                    <path
                      d="M150.903 47.5998L146.603 45.7998L86.7031 166.7L99.5031 172L103.003 170.5L156.803 61.7998L150.903 47.5998Z"
                      fill="white"
                    />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_3851_14">
                    <rect width={199} height={199} fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
          <div className="rounded-full">
            <div className="w-6 h-6 bg-white/5 rounded-lg p-[3px]">
              <svg
                className="p-1 w-full h-full"
                width={199}
                height={199}
                viewBox="0 0 199 199"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_3851_14)">
                  <path
                    d="M29.3969 169.3L0.296875 99.2L29.2969 29L99.3969 0L169.497 29L198.597 99.1L169.597 169.2L99.4969 198.3L29.3969 169.3Z"
                    fill="#FFB240"
                  />
                  <path
                    d="M48.0016 150.6L26.6016 99.1998L47.9016 47.5998L99.4016 26.2998L150.902 47.5998L172.302 99.0998L151.002 150.6L99.5016 172L48.0016 150.6Z"
                    fill="#FCBA63"
                  />
                  <path
                    d="M99.5 198.3V172L151 150.6L169.6 169.2L99.5 198.3Z"
                    fill="#DE9A3B"
                  />
                  <path
                    d="M99.4985 198.3V172L47.9985 150.6L29.3984 169.2L99.4985 198.3Z"
                    fill="#E48914"
                  />
                  <path
                    d="M169.6 169.2L151 150.6L172.3 99.0996H198.6L169.6 169.2Z"
                    fill="#E48914"
                  />
                  <path
                    opacity="0.3"
                    d="M29.3969 169.3L47.9969 150.7L26.6969 99.1996L0.296875 99.0996L29.3969 169.3Z"
                    fill="white"
                  />
                  <path
                    opacity="0.3"
                    d="M198.598 99.1H172.298L150.898 47.6L169.498 29L198.598 99.1Z"
                    fill="white"
                  />
                  <g opacity="0.3">
                    <path
                      d="M29.2969 29L47.8969 47.6L26.5969 99.2H0.296875L29.2969 29Z"
                      fill="#FCBA63"
                    />
                  </g>
                  <path
                    opacity="0.3"
                    d="M99.4047 0V26.3L47.9047 47.6L29.3047 29L99.4047 0Z"
                    fill="white"
                  />
                  <g opacity="0.3">
                    <path
                      d="M73.3984 37.1002L33.8984 116.7L37.2985 125L82.8984 33.2002L73.3984 37.1002Z"
                      fill="white"
                    />
                    <path
                      d="M123.798 36.3994L63.8984 157.199L70.1985 159.799L130.098 38.9994L123.798 36.3994Z"
                      fill="white"
                    />
                    <path
                      d="M162.098 74.5L117.398 164.5L126.898 160.6L165.498 82.8L162.098 74.5Z"
                      fill="white"
                    />
                    <path
                      d="M99.4 26.2998L97 27.2998L42.5 137.3L48 150.6L59 155.2L119 34.3998L99.4 26.2998Z"
                      fill="white"
                    />
                    <path
                      d="M150.903 47.5998L146.603 45.7998L86.7031 166.7L99.5031 172L103.003 170.5L156.803 61.7998L150.903 47.5998Z"
                      fill="white"
                    />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_3851_14">
                    <rect width={199} height={199} fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-0.5">
          <div className="rounded-full">
            <div className="w-6 h-6 bg-white/5 rounded-lg p-[3px]">
              <svg
                className="p-1 w-full h-full"
                width={199}
                height={199}
                viewBox="0 0 199 199"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_3851_32)">
                  <path
                    d="M29.3969 169.3L0.296875 99.2L29.2969 29L99.3969 0L169.497 29L198.597 99.1L169.597 169.2L99.4969 198.3L29.3969 169.3Z"
                    fill="#F44F52"
                  />
                  <path
                    d="M48.0016 150.6L26.6016 99.1998L47.9016 47.5998L99.4016 26.2998L150.902 47.5998L172.302 99.0998L151.002 150.6L99.5016 172L48.0016 150.6Z"
                    fill="#FF6E6E"
                  />
                  <path
                    d="M99.5 198.3V172L151 150.6L169.6 169.2L99.5 198.3Z"
                    fill="#FF6E6E"
                  />
                  <path
                    d="M99.4985 198.3V172L47.9985 150.6L29.3984 169.2L99.4985 198.3Z"
                    fill="#FF514B"
                  />
                  <path
                    d="M169.6 169.2L151 150.6L172.3 99.0996H198.6L169.6 169.2Z"
                    fill="#FF514B"
                  />
                  <path
                    opacity="0.3"
                    d="M29.3969 169.3L47.9969 150.7L26.6969 99.1996L0.296875 99.0996L29.3969 169.3Z"
                    fill="white"
                  />
                  <path
                    opacity="0.3"
                    d="M198.598 99.1H172.298L150.898 47.6L169.498 29L198.598 99.1Z"
                    fill="white"
                  />
                  <g opacity="0.3">
                    <path
                      d="M29.2969 29L47.8969 47.6L26.5969 99.2H0.296875L29.2969 29Z"
                      fill="#FF6E6E"
                    />
                  </g>
                  <path
                    opacity="0.3"
                    d="M99.4047 0V26.3L47.9047 47.6L29.3047 29L99.4047 0Z"
                    fill="white"
                  />
                  <g opacity="0.3">
                    <path
                      d="M73.3984 37.1002L33.8984 116.7L37.2985 125L82.8984 33.2002L73.3984 37.1002Z"
                      fill="white"
                    />
                    <path
                      d="M123.798 36.3994L63.8984 157.199L70.1985 159.799L130.098 38.9994L123.798 36.3994Z"
                      fill="white"
                    />
                    <path
                      d="M162.098 74.5L117.398 164.5L126.898 160.6L165.498 82.8L162.098 74.5Z"
                      fill="white"
                    />
                    <path
                      d="M99.4 26.2998L97 27.2998L42.5 137.3L48 150.6L59 155.2L119 34.3998L99.4 26.2998Z"
                      fill="white"
                    />
                    <path
                      d="M150.903 47.5998L146.603 45.7998L86.7031 166.7L99.5031 172L103.003 170.5L156.803 61.7998L150.903 47.5998Z"
                      fill="white"
                    />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_3851_32">
                    <rect width={199} height={199} fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-0.5">
          <div className="rounded-full">
            <div className="w-6 h-6 bg-white/5 rounded-lg p-[3px]">
              <svg
                className="p-1 w-full h-full"
                width={199}
                height={199}
                viewBox="0 0 199 199"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_3851_14)">
                  <path
                    d="M29.3969 169.3L0.296875 99.2L29.2969 29L99.3969 0L169.497 29L198.597 99.1L169.597 169.2L99.4969 198.3L29.3969 169.3Z"
                    fill="#FFB240"
                  />
                  <path
                    d="M48.0016 150.6L26.6016 99.1998L47.9016 47.5998L99.4016 26.2998L150.902 47.5998L172.302 99.0998L151.002 150.6L99.5016 172L48.0016 150.6Z"
                    fill="#FCBA63"
                  />
                  <path
                    d="M99.5 198.3V172L151 150.6L169.6 169.2L99.5 198.3Z"
                    fill="#DE9A3B"
                  />
                  <path
                    d="M99.4985 198.3V172L47.9985 150.6L29.3984 169.2L99.4985 198.3Z"
                    fill="#E48914"
                  />
                  <path
                    d="M169.6 169.2L151 150.6L172.3 99.0996H198.6L169.6 169.2Z"
                    fill="#E48914"
                  />
                  <path
                    opacity="0.3"
                    d="M29.3969 169.3L47.9969 150.7L26.6969 99.1996L0.296875 99.0996L29.3969 169.3Z"
                    fill="white"
                  />
                  <path
                    opacity="0.3"
                    d="M198.598 99.1H172.298L150.898 47.6L169.498 29L198.598 99.1Z"
                    fill="white"
                  />
                  <g opacity="0.3">
                    <path
                      d="M29.2969 29L47.8969 47.6L26.5969 99.2H0.296875L29.2969 29Z"
                      fill="#FCBA63"
                    />
                  </g>
                  <path
                    opacity="0.3"
                    d="M99.4047 0V26.3L47.9047 47.6L29.3047 29L99.4047 0Z"
                    fill="white"
                  />
                  <g opacity="0.3">
                    <path
                      d="M73.3984 37.1002L33.8984 116.7L37.2985 125L82.8984 33.2002L73.3984 37.1002Z"
                      fill="white"
                    />
                    <path
                      d="M123.798 36.3994L63.8984 157.199L70.1985 159.799L130.098 38.9994L123.798 36.3994Z"
                      fill="white"
                    />
                    <path
                      d="M162.098 74.5L117.398 164.5L126.898 160.6L165.498 82.8L162.098 74.5Z"
                      fill="white"
                    />
                    <path
                      d="M99.4 26.2998L97 27.2998L42.5 137.3L48 150.6L59 155.2L119 34.3998L99.4 26.2998Z"
                      fill="white"
                    />
                    <path
                      d="M150.903 47.5998L146.603 45.7998L86.7031 166.7L99.5031 172L103.003 170.5L156.803 61.7998L150.903 47.5998Z"
                      fill="white"
                    />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_3851_14">
                    <rect width={199} height={199} fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
          <div className="rounded-full">
            <div className="w-6 h-6 bg-white/5 rounded-lg p-[3px]">
              <svg
                className="p-1 w-full h-full"
                width={199}
                height={199}
                viewBox="0 0 199 199"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_3851_14)">
                  <path
                    d="M29.3969 169.3L0.296875 99.2L29.2969 29L99.3969 0L169.497 29L198.597 99.1L169.597 169.2L99.4969 198.3L29.3969 169.3Z"
                    fill="#FFB240"
                  />
                  <path
                    d="M48.0016 150.6L26.6016 99.1998L47.9016 47.5998L99.4016 26.2998L150.902 47.5998L172.302 99.0998L151.002 150.6L99.5016 172L48.0016 150.6Z"
                    fill="#FCBA63"
                  />
                  <path
                    d="M99.5 198.3V172L151 150.6L169.6 169.2L99.5 198.3Z"
                    fill="#DE9A3B"
                  />
                  <path
                    d="M99.4985 198.3V172L47.9985 150.6L29.3984 169.2L99.4985 198.3Z"
                    fill="#E48914"
                  />
                  <path
                    d="M169.6 169.2L151 150.6L172.3 99.0996H198.6L169.6 169.2Z"
                    fill="#E48914"
                  />
                  <path
                    opacity="0.3"
                    d="M29.3969 169.3L47.9969 150.7L26.6969 99.1996L0.296875 99.0996L29.3969 169.3Z"
                    fill="white"
                  />
                  <path
                    opacity="0.3"
                    d="M198.598 99.1H172.298L150.898 47.6L169.498 29L198.598 99.1Z"
                    fill="white"
                  />
                  <g opacity="0.3">
                    <path
                      d="M29.2969 29L47.8969 47.6L26.5969 99.2H0.296875L29.2969 29Z"
                      fill="#FCBA63"
                    />
                  </g>
                  <path
                    opacity="0.3"
                    d="M99.4047 0V26.3L47.9047 47.6L29.3047 29L99.4047 0Z"
                    fill="white"
                  />
                  <g opacity="0.3">
                    <path
                      d="M73.3984 37.1002L33.8984 116.7L37.2985 125L82.8984 33.2002L73.3984 37.1002Z"
                      fill="white"
                    />
                    <path
                      d="M123.798 36.3994L63.8984 157.199L70.1985 159.799L130.098 38.9994L123.798 36.3994Z"
                      fill="white"
                    />
                    <path
                      d="M162.098 74.5L117.398 164.5L126.898 160.6L165.498 82.8L162.098 74.5Z"
                      fill="white"
                    />
                    <path
                      d="M99.4 26.2998L97 27.2998L42.5 137.3L48 150.6L59 155.2L119 34.3998L99.4 26.2998Z"
                      fill="white"
                    />
                    <path
                      d="M150.903 47.5998L146.603 45.7998L86.7031 166.7L99.5031 172L103.003 170.5L156.803 61.7998L150.903 47.5998Z"
                      fill="white"
                    />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_3851_14">
                    <rect width={199} height={199} fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-0.5">
          <div className="rounded-full">
            <div className="w-6 h-6 bg-white/5 rounded-lg p-[3px]">
              <svg
                className="p-1 w-full h-full"
                width={199}
                height={199}
                viewBox="0 0 199 199"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_3851_32)">
                  <path
                    d="M29.3969 169.3L0.296875 99.2L29.2969 29L99.3969 0L169.497 29L198.597 99.1L169.597 169.2L99.4969 198.3L29.3969 169.3Z"
                    fill="#F44F52"
                  />
                  <path
                    d="M48.0016 150.6L26.6016 99.1998L47.9016 47.5998L99.4016 26.2998L150.902 47.5998L172.302 99.0998L151.002 150.6L99.5016 172L48.0016 150.6Z"
                    fill="#FF6E6E"
                  />
                  <path
                    d="M99.5 198.3V172L151 150.6L169.6 169.2L99.5 198.3Z"
                    fill="#FF6E6E"
                  />
                  <path
                    d="M99.4985 198.3V172L47.9985 150.6L29.3984 169.2L99.4985 198.3Z"
                    fill="#FF514B"
                  />
                  <path
                    d="M169.6 169.2L151 150.6L172.3 99.0996H198.6L169.6 169.2Z"
                    fill="#FF514B"
                  />
                  <path
                    opacity="0.3"
                    d="M29.3969 169.3L47.9969 150.7L26.6969 99.1996L0.296875 99.0996L29.3969 169.3Z"
                    fill="white"
                  />
                  <path
                    opacity="0.3"
                    d="M198.598 99.1H172.298L150.898 47.6L169.498 29L198.598 99.1Z"
                    fill="white"
                  />
                  <g opacity="0.3">
                    <path
                      d="M29.2969 29L47.8969 47.6L26.5969 99.2H0.296875L29.2969 29Z"
                      fill="#FF6E6E"
                    />
                  </g>
                  <path
                    opacity="0.3"
                    d="M99.4047 0V26.3L47.9047 47.6L29.3047 29L99.4047 0Z"
                    fill="white"
                  />
                  <g opacity="0.3">
                    <path
                      d="M73.3984 37.1002L33.8984 116.7L37.2985 125L82.8984 33.2002L73.3984 37.1002Z"
                      fill="white"
                    />
                    <path
                      d="M123.798 36.3994L63.8984 157.199L70.1985 159.799L130.098 38.9994L123.798 36.3994Z"
                      fill="white"
                    />
                    <path
                      d="M162.098 74.5L117.398 164.5L126.898 160.6L165.498 82.8L162.098 74.5Z"
                      fill="white"
                    />
                    <path
                      d="M99.4 26.2998L97 27.2998L42.5 137.3L48 150.6L59 155.2L119 34.3998L99.4 26.2998Z"
                      fill="white"
                    />
                    <path
                      d="M150.903 47.5998L146.603 45.7998L86.7031 166.7L99.5031 172L103.003 170.5L156.803 61.7998L150.903 47.5998Z"
                      fill="white"
                    />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_3851_32">
                    <rect width={199} height={199} fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
          <div className="rounded-full">
            <div className="w-6 h-6 bg-white/5 rounded-lg p-[3px]">
              <svg
                className="p-1 w-full h-full"
                width={199}
                height={199}
                viewBox="0 0 199 199"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_3851_32)">
                  <path
                    d="M29.3969 169.3L0.296875 99.2L29.2969 29L99.3969 0L169.497 29L198.597 99.1L169.597 169.2L99.4969 198.3L29.3969 169.3Z"
                    fill="#F44F52"
                  />
                  <path
                    d="M48.0016 150.6L26.6016 99.1998L47.9016 47.5998L99.4016 26.2998L150.902 47.5998L172.302 99.0998L151.002 150.6L99.5016 172L48.0016 150.6Z"
                    fill="#FF6E6E"
                  />
                  <path
                    d="M99.5 198.3V172L151 150.6L169.6 169.2L99.5 198.3Z"
                    fill="#FF6E6E"
                  />
                  <path
                    d="M99.4985 198.3V172L47.9985 150.6L29.3984 169.2L99.4985 198.3Z"
                    fill="#FF514B"
                  />
                  <path
                    d="M169.6 169.2L151 150.6L172.3 99.0996H198.6L169.6 169.2Z"
                    fill="#FF514B"
                  />
                  <path
                    opacity="0.3"
                    d="M29.3969 169.3L47.9969 150.7L26.6969 99.1996L0.296875 99.0996L29.3969 169.3Z"
                    fill="white"
                  />
                  <path
                    opacity="0.3"
                    d="M198.598 99.1H172.298L150.898 47.6L169.498 29L198.598 99.1Z"
                    fill="white"
                  />
                  <g opacity="0.3">
                    <path
                      d="M29.2969 29L47.8969 47.6L26.5969 99.2H0.296875L29.2969 29Z"
                      fill="#FF6E6E"
                    />
                  </g>
                  <path
                    opacity="0.3"
                    d="M99.4047 0V26.3L47.9047 47.6L29.3047 29L99.4047 0Z"
                    fill="white"
                  />
                  <g opacity="0.3">
                    <path
                      d="M73.3984 37.1002L33.8984 116.7L37.2985 125L82.8984 33.2002L73.3984 37.1002Z"
                      fill="white"
                    />
                    <path
                      d="M123.798 36.3994L63.8984 157.199L70.1985 159.799L130.098 38.9994L123.798 36.3994Z"
                      fill="white"
                    />
                    <path
                      d="M162.098 74.5L117.398 164.5L126.898 160.6L165.498 82.8L162.098 74.5Z"
                      fill="white"
                    />
                    <path
                      d="M99.4 26.2998L97 27.2998L42.5 137.3L48 150.6L59 155.2L119 34.3998L99.4 26.2998Z"
                      fill="white"
                    />
                    <path
                      d="M150.903 47.5998L146.603 45.7998L86.7031 166.7L99.5031 172L103.003 170.5L156.803 61.7998L150.903 47.5998Z"
                      fill="white"
                    />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_3851_32">
                    <rect width={199} height={199} fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
          <div className="rounded-full">
            <div className="w-6 h-6 bg-white/5 rounded-lg p-[3px]">
              <svg
                className="p-1 w-full h-full"
                width={199}
                height={199}
                viewBox="0 0 199 199"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_3851_32)">
                  <path
                    d="M29.3969 169.3L0.296875 99.2L29.2969 29L99.3969 0L169.497 29L198.597 99.1L169.597 169.2L99.4969 198.3L29.3969 169.3Z"
                    fill="#F44F52"
                  />
                  <path
                    d="M48.0016 150.6L26.6016 99.1998L47.9016 47.5998L99.4016 26.2998L150.902 47.5998L172.302 99.0998L151.002 150.6L99.5016 172L48.0016 150.6Z"
                    fill="#FF6E6E"
                  />
                  <path
                    d="M99.5 198.3V172L151 150.6L169.6 169.2L99.5 198.3Z"
                    fill="#FF6E6E"
                  />
                  <path
                    d="M99.4985 198.3V172L47.9985 150.6L29.3984 169.2L99.4985 198.3Z"
                    fill="#FF514B"
                  />
                  <path
                    d="M169.6 169.2L151 150.6L172.3 99.0996H198.6L169.6 169.2Z"
                    fill="#FF514B"
                  />
                  <path
                    opacity="0.3"
                    d="M29.3969 169.3L47.9969 150.7L26.6969 99.1996L0.296875 99.0996L29.3969 169.3Z"
                    fill="white"
                  />
                  <path
                    opacity="0.3"
                    d="M198.598 99.1H172.298L150.898 47.6L169.498 29L198.598 99.1Z"
                    fill="white"
                  />
                  <g opacity="0.3">
                    <path
                      d="M29.2969 29L47.8969 47.6L26.5969 99.2H0.296875L29.2969 29Z"
                      fill="#FF6E6E"
                    />
                  </g>
                  <path
                    opacity="0.3"
                    d="M99.4047 0V26.3L47.9047 47.6L29.3047 29L99.4047 0Z"
                    fill="white"
                  />
                  <g opacity="0.3">
                    <path
                      d="M73.3984 37.1002L33.8984 116.7L37.2985 125L82.8984 33.2002L73.3984 37.1002Z"
                      fill="white"
                    />
                    <path
                      d="M123.798 36.3994L63.8984 157.199L70.1985 159.799L130.098 38.9994L123.798 36.3994Z"
                      fill="white"
                    />
                    <path
                      d="M162.098 74.5L117.398 164.5L126.898 160.6L165.498 82.8L162.098 74.5Z"
                      fill="white"
                    />
                    <path
                      d="M99.4 26.2998L97 27.2998L42.5 137.3L48 150.6L59 155.2L119 34.3998L99.4 26.2998Z"
                      fill="white"
                    />
                    <path
                      d="M150.903 47.5998L146.603 45.7998L86.7031 166.7L99.5031 172L103.003 170.5L156.803 61.7998L150.903 47.5998Z"
                      fill="white"
                    />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_3851_32">
                    <rect width={199} height={199} fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-0.5">
          <div className="rounded-full">
            <div className="w-6 h-6 bg-white/5 rounded-lg p-[3px]">
              <svg
                className="p-1 w-full h-full"
                width={199}
                height={199}
                viewBox="0 0 199 199"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_3851_14)">
                  <path
                    d="M29.3969 169.3L0.296875 99.2L29.2969 29L99.3969 0L169.497 29L198.597 99.1L169.597 169.2L99.4969 198.3L29.3969 169.3Z"
                    fill="#FFB240"
                  />
                  <path
                    d="M48.0016 150.6L26.6016 99.1998L47.9016 47.5998L99.4016 26.2998L150.902 47.5998L172.302 99.0998L151.002 150.6L99.5016 172L48.0016 150.6Z"
                    fill="#FCBA63"
                  />
                  <path
                    d="M99.5 198.3V172L151 150.6L169.6 169.2L99.5 198.3Z"
                    fill="#DE9A3B"
                  />
                  <path
                    d="M99.4985 198.3V172L47.9985 150.6L29.3984 169.2L99.4985 198.3Z"
                    fill="#E48914"
                  />
                  <path
                    d="M169.6 169.2L151 150.6L172.3 99.0996H198.6L169.6 169.2Z"
                    fill="#E48914"
                  />
                  <path
                    opacity="0.3"
                    d="M29.3969 169.3L47.9969 150.7L26.6969 99.1996L0.296875 99.0996L29.3969 169.3Z"
                    fill="white"
                  />
                  <path
                    opacity="0.3"
                    d="M198.598 99.1H172.298L150.898 47.6L169.498 29L198.598 99.1Z"
                    fill="white"
                  />
                  <g opacity="0.3">
                    <path
                      d="M29.2969 29L47.8969 47.6L26.5969 99.2H0.296875L29.2969 29Z"
                      fill="#FCBA63"
                    />
                  </g>
                  <path
                    opacity="0.3"
                    d="M99.4047 0V26.3L47.9047 47.6L29.3047 29L99.4047 0Z"
                    fill="white"
                  />
                  <g opacity="0.3">
                    <path
                      d="M73.3984 37.1002L33.8984 116.7L37.2985 125L82.8984 33.2002L73.3984 37.1002Z"
                      fill="white"
                    />
                    <path
                      d="M123.798 36.3994L63.8984 157.199L70.1985 159.799L130.098 38.9994L123.798 36.3994Z"
                      fill="white"
                    />
                    <path
                      d="M162.098 74.5L117.398 164.5L126.898 160.6L165.498 82.8L162.098 74.5Z"
                      fill="white"
                    />
                    <path
                      d="M99.4 26.2998L97 27.2998L42.5 137.3L48 150.6L59 155.2L119 34.3998L99.4 26.2998Z"
                      fill="white"
                    />
                    <path
                      d="M150.903 47.5998L146.603 45.7998L86.7031 166.7L99.5031 172L103.003 170.5L156.803 61.7998L150.903 47.5998Z"
                      fill="white"
                    />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_3851_14">
                    <rect width={199} height={199} fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
          <div className="rounded-full">
            <div className="w-6 h-6 bg-white/5 rounded-lg p-[3px]">
              <svg
                className="p-1 w-full h-full"
                width={199}
                height={199}
                viewBox="0 0 199 199"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_3851_14)">
                  <path
                    d="M29.3969 169.3L0.296875 99.2L29.2969 29L99.3969 0L169.497 29L198.597 99.1L169.597 169.2L99.4969 198.3L29.3969 169.3Z"
                    fill="#FFB240"
                  />
                  <path
                    d="M48.0016 150.6L26.6016 99.1998L47.9016 47.5998L99.4016 26.2998L150.902 47.5998L172.302 99.0998L151.002 150.6L99.5016 172L48.0016 150.6Z"
                    fill="#FCBA63"
                  />
                  <path
                    d="M99.5 198.3V172L151 150.6L169.6 169.2L99.5 198.3Z"
                    fill="#DE9A3B"
                  />
                  <path
                    d="M99.4985 198.3V172L47.9985 150.6L29.3984 169.2L99.4985 198.3Z"
                    fill="#E48914"
                  />
                  <path
                    d="M169.6 169.2L151 150.6L172.3 99.0996H198.6L169.6 169.2Z"
                    fill="#E48914"
                  />
                  <path
                    opacity="0.3"
                    d="M29.3969 169.3L47.9969 150.7L26.6969 99.1996L0.296875 99.0996L29.3969 169.3Z"
                    fill="white"
                  />
                  <path
                    opacity="0.3"
                    d="M198.598 99.1H172.298L150.898 47.6L169.498 29L198.598 99.1Z"
                    fill="white"
                  />
                  <g opacity="0.3">
                    <path
                      d="M29.2969 29L47.8969 47.6L26.5969 99.2H0.296875L29.2969 29Z"
                      fill="#FCBA63"
                    />
                  </g>
                  <path
                    opacity="0.3"
                    d="M99.4047 0V26.3L47.9047 47.6L29.3047 29L99.4047 0Z"
                    fill="white"
                  />
                  <g opacity="0.3">
                    <path
                      d="M73.3984 37.1002L33.8984 116.7L37.2985 125L82.8984 33.2002L73.3984 37.1002Z"
                      fill="white"
                    />
                    <path
                      d="M123.798 36.3994L63.8984 157.199L70.1985 159.799L130.098 38.9994L123.798 36.3994Z"
                      fill="white"
                    />
                    <path
                      d="M162.098 74.5L117.398 164.5L126.898 160.6L165.498 82.8L162.098 74.5Z"
                      fill="white"
                    />
                    <path
                      d="M99.4 26.2998L97 27.2998L42.5 137.3L48 150.6L59 155.2L119 34.3998L99.4 26.2998Z"
                      fill="white"
                    />
                    <path
                      d="M150.903 47.5998L146.603 45.7998L86.7031 166.7L99.5031 172L103.003 170.5L156.803 61.7998L150.903 47.5998Z"
                      fill="white"
                    />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_3851_14">
                    <rect width={199} height={199} fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-0.5">
          <div className="rounded-full">
            <div className="w-6 h-6 bg-white/5 rounded-lg p-[3px]">
              <svg
                className="p-1 w-full h-full"
                width={199}
                height={199}
                viewBox="0 0 199 199"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_3851_32)">
                  <path
                    d="M29.3969 169.3L0.296875 99.2L29.2969 29L99.3969 0L169.497 29L198.597 99.1L169.597 169.2L99.4969 198.3L29.3969 169.3Z"
                    fill="#F44F52"
                  />
                  <path
                    d="M48.0016 150.6L26.6016 99.1998L47.9016 47.5998L99.4016 26.2998L150.902 47.5998L172.302 99.0998L151.002 150.6L99.5016 172L48.0016 150.6Z"
                    fill="#FF6E6E"
                  />
                  <path
                    d="M99.5 198.3V172L151 150.6L169.6 169.2L99.5 198.3Z"
                    fill="#FF6E6E"
                  />
                  <path
                    d="M99.4985 198.3V172L47.9985 150.6L29.3984 169.2L99.4985 198.3Z"
                    fill="#FF514B"
                  />
                  <path
                    d="M169.6 169.2L151 150.6L172.3 99.0996H198.6L169.6 169.2Z"
                    fill="#FF514B"
                  />
                  <path
                    opacity="0.3"
                    d="M29.3969 169.3L47.9969 150.7L26.6969 99.1996L0.296875 99.0996L29.3969 169.3Z"
                    fill="white"
                  />
                  <path
                    opacity="0.3"
                    d="M198.598 99.1H172.298L150.898 47.6L169.498 29L198.598 99.1Z"
                    fill="white"
                  />
                  <g opacity="0.3">
                    <path
                      d="M29.2969 29L47.8969 47.6L26.5969 99.2H0.296875L29.2969 29Z"
                      fill="#FF6E6E"
                    />
                  </g>
                  <path
                    opacity="0.3"
                    d="M99.4047 0V26.3L47.9047 47.6L29.3047 29L99.4047 0Z"
                    fill="white"
                  />
                  <g opacity="0.3">
                    <path
                      d="M73.3984 37.1002L33.8984 116.7L37.2985 125L82.8984 33.2002L73.3984 37.1002Z"
                      fill="white"
                    />
                    <path
                      d="M123.798 36.3994L63.8984 157.199L70.1985 159.799L130.098 38.9994L123.798 36.3994Z"
                      fill="white"
                    />
                    <path
                      d="M162.098 74.5L117.398 164.5L126.898 160.6L165.498 82.8L162.098 74.5Z"
                      fill="white"
                    />
                    <path
                      d="M99.4 26.2998L97 27.2998L42.5 137.3L48 150.6L59 155.2L119 34.3998L99.4 26.2998Z"
                      fill="white"
                    />
                    <path
                      d="M150.903 47.5998L146.603 45.7998L86.7031 166.7L99.5031 172L103.003 170.5L156.803 61.7998L150.903 47.5998Z"
                      fill="white"
                    />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_3851_32">
                    <rect width={199} height={199} fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-0.5">
          <div className="rounded-full">
            <div className="w-6 h-6 bg-white/5 rounded-lg p-[3px]">
              <svg
                className="p-1 w-full h-full"
                width={199}
                height={199}
                viewBox="0 0 199 199"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_3851_14)">
                  <path
                    d="M29.3969 169.3L0.296875 99.2L29.2969 29L99.3969 0L169.497 29L198.597 99.1L169.597 169.2L99.4969 198.3L29.3969 169.3Z"
                    fill="#FFB240"
                  />
                  <path
                    d="M48.0016 150.6L26.6016 99.1998L47.9016 47.5998L99.4016 26.2998L150.902 47.5998L172.302 99.0998L151.002 150.6L99.5016 172L48.0016 150.6Z"
                    fill="#FCBA63"
                  />
                  <path
                    d="M99.5 198.3V172L151 150.6L169.6 169.2L99.5 198.3Z"
                    fill="#DE9A3B"
                  />
                  <path
                    d="M99.4985 198.3V172L47.9985 150.6L29.3984 169.2L99.4985 198.3Z"
                    fill="#E48914"
                  />
                  <path
                    d="M169.6 169.2L151 150.6L172.3 99.0996H198.6L169.6 169.2Z"
                    fill="#E48914"
                  />
                  <path
                    opacity="0.3"
                    d="M29.3969 169.3L47.9969 150.7L26.6969 99.1996L0.296875 99.0996L29.3969 169.3Z"
                    fill="white"
                  />
                  <path
                    opacity="0.3"
                    d="M198.598 99.1H172.298L150.898 47.6L169.498 29L198.598 99.1Z"
                    fill="white"
                  />
                  <g opacity="0.3">
                    <path
                      d="M29.2969 29L47.8969 47.6L26.5969 99.2H0.296875L29.2969 29Z"
                      fill="#FCBA63"
                    />
                  </g>
                  <path
                    opacity="0.3"
                    d="M99.4047 0V26.3L47.9047 47.6L29.3047 29L99.4047 0Z"
                    fill="white"
                  />
                  <g opacity="0.3">
                    <path
                      d="M73.3984 37.1002L33.8984 116.7L37.2985 125L82.8984 33.2002L73.3984 37.1002Z"
                      fill="white"
                    />
                    <path
                      d="M123.798 36.3994L63.8984 157.199L70.1985 159.799L130.098 38.9994L123.798 36.3994Z"
                      fill="white"
                    />
                    <path
                      d="M162.098 74.5L117.398 164.5L126.898 160.6L165.498 82.8L162.098 74.5Z"
                      fill="white"
                    />
                    <path
                      d="M99.4 26.2998L97 27.2998L42.5 137.3L48 150.6L59 155.2L119 34.3998L99.4 26.2998Z"
                      fill="white"
                    />
                    <path
                      d="M150.903 47.5998L146.603 45.7998L86.7031 166.7L99.5031 172L103.003 170.5L156.803 61.7998L150.903 47.5998Z"
                      fill="white"
                    />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_3851_14">
                    <rect width={199} height={199} fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-0.5">
          <div className="rounded-full">
            <div className="w-6 h-6 bg-white/5 rounded-lg p-[3px]">
              <svg
                className="p-1 w-full h-full"
                width={199}
                height={199}
                viewBox="0 0 199 199"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_3851_32)">
                  <path
                    d="M29.3969 169.3L0.296875 99.2L29.2969 29L99.3969 0L169.497 29L198.597 99.1L169.597 169.2L99.4969 198.3L29.3969 169.3Z"
                    fill="#F44F52"
                  />
                  <path
                    d="M48.0016 150.6L26.6016 99.1998L47.9016 47.5998L99.4016 26.2998L150.902 47.5998L172.302 99.0998L151.002 150.6L99.5016 172L48.0016 150.6Z"
                    fill="#FF6E6E"
                  />
                  <path
                    d="M99.5 198.3V172L151 150.6L169.6 169.2L99.5 198.3Z"
                    fill="#FF6E6E"
                  />
                  <path
                    d="M99.4985 198.3V172L47.9985 150.6L29.3984 169.2L99.4985 198.3Z"
                    fill="#FF514B"
                  />
                  <path
                    d="M169.6 169.2L151 150.6L172.3 99.0996H198.6L169.6 169.2Z"
                    fill="#FF514B"
                  />
                  <path
                    opacity="0.3"
                    d="M29.3969 169.3L47.9969 150.7L26.6969 99.1996L0.296875 99.0996L29.3969 169.3Z"
                    fill="white"
                  />
                  <path
                    opacity="0.3"
                    d="M198.598 99.1H172.298L150.898 47.6L169.498 29L198.598 99.1Z"
                    fill="white"
                  />
                  <g opacity="0.3">
                    <path
                      d="M29.2969 29L47.8969 47.6L26.5969 99.2H0.296875L29.2969 29Z"
                      fill="#FF6E6E"
                    />
                  </g>
                  <path
                    opacity="0.3"
                    d="M99.4047 0V26.3L47.9047 47.6L29.3047 29L99.4047 0Z"
                    fill="white"
                  />
                  <g opacity="0.3">
                    <path
                      d="M73.3984 37.1002L33.8984 116.7L37.2985 125L82.8984 33.2002L73.3984 37.1002Z"
                      fill="white"
                    />
                    <path
                      d="M123.798 36.3994L63.8984 157.199L70.1985 159.799L130.098 38.9994L123.798 36.3994Z"
                      fill="white"
                    />
                    <path
                      d="M162.098 74.5L117.398 164.5L126.898 160.6L165.498 82.8L162.098 74.5Z"
                      fill="white"
                    />
                    <path
                      d="M99.4 26.2998L97 27.2998L42.5 137.3L48 150.6L59 155.2L119 34.3998L99.4 26.2998Z"
                      fill="white"
                    />
                    <path
                      d="M150.903 47.5998L146.603 45.7998L86.7031 166.7L99.5031 172L103.003 170.5L156.803 61.7998L150.903 47.5998Z"
                      fill="white"
                    />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_3851_32">
                    <rect width={199} height={199} fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-0.5">
          <div className="rounded-full">
            <div className="w-6 h-6 bg-white/5 rounded-lg p-[3px]">
              <svg
                className="p-1 w-full h-full"
                width={199}
                height={199}
                viewBox="0 0 199 199"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_3851_14)">
                  <path
                    d="M29.3969 169.3L0.296875 99.2L29.2969 29L99.3969 0L169.497 29L198.597 99.1L169.597 169.2L99.4969 198.3L29.3969 169.3Z"
                    fill="#FFB240"
                  />
                  <path
                    d="M48.0016 150.6L26.6016 99.1998L47.9016 47.5998L99.4016 26.2998L150.902 47.5998L172.302 99.0998L151.002 150.6L99.5016 172L48.0016 150.6Z"
                    fill="#FCBA63"
                  />
                  <path
                    d="M99.5 198.3V172L151 150.6L169.6 169.2L99.5 198.3Z"
                    fill="#DE9A3B"
                  />
                  <path
                    d="M99.4985 198.3V172L47.9985 150.6L29.3984 169.2L99.4985 198.3Z"
                    fill="#E48914"
                  />
                  <path
                    d="M169.6 169.2L151 150.6L172.3 99.0996H198.6L169.6 169.2Z"
                    fill="#E48914"
                  />
                  <path
                    opacity="0.3"
                    d="M29.3969 169.3L47.9969 150.7L26.6969 99.1996L0.296875 99.0996L29.3969 169.3Z"
                    fill="white"
                  />
                  <path
                    opacity="0.3"
                    d="M198.598 99.1H172.298L150.898 47.6L169.498 29L198.598 99.1Z"
                    fill="white"
                  />
                  <g opacity="0.3">
                    <path
                      d="M29.2969 29L47.8969 47.6L26.5969 99.2H0.296875L29.2969 29Z"
                      fill="#FCBA63"
                    />
                  </g>
                  <path
                    opacity="0.3"
                    d="M99.4047 0V26.3L47.9047 47.6L29.3047 29L99.4047 0Z"
                    fill="white"
                  />
                  <g opacity="0.3">
                    <path
                      d="M73.3984 37.1002L33.8984 116.7L37.2985 125L82.8984 33.2002L73.3984 37.1002Z"
                      fill="white"
                    />
                    <path
                      d="M123.798 36.3994L63.8984 157.199L70.1985 159.799L130.098 38.9994L123.798 36.3994Z"
                      fill="white"
                    />
                    <path
                      d="M162.098 74.5L117.398 164.5L126.898 160.6L165.498 82.8L162.098 74.5Z"
                      fill="white"
                    />
                    <path
                      d="M99.4 26.2998L97 27.2998L42.5 137.3L48 150.6L59 155.2L119 34.3998L99.4 26.2998Z"
                      fill="white"
                    />
                    <path
                      d="M150.903 47.5998L146.603 45.7998L86.7031 166.7L99.5031 172L103.003 170.5L156.803 61.7998L150.903 47.5998Z"
                      fill="white"
                    />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_3851_14">
                    <rect width={199} height={199} fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
          <div className="rounded-full">
            <div className="w-6 h-6 bg-white/5 rounded-lg p-[3px]">
              <svg
                className="p-1 w-full h-full"
                width={199}
                height={199}
                viewBox="0 0 199 199"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_3851_14)">
                  <path
                    d="M29.3969 169.3L0.296875 99.2L29.2969 29L99.3969 0L169.497 29L198.597 99.1L169.597 169.2L99.4969 198.3L29.3969 169.3Z"
                    fill="#FFB240"
                  />
                  <path
                    d="M48.0016 150.6L26.6016 99.1998L47.9016 47.5998L99.4016 26.2998L150.902 47.5998L172.302 99.0998L151.002 150.6L99.5016 172L48.0016 150.6Z"
                    fill="#FCBA63"
                  />
                  <path
                    d="M99.5 198.3V172L151 150.6L169.6 169.2L99.5 198.3Z"
                    fill="#DE9A3B"
                  />
                  <path
                    d="M99.4985 198.3V172L47.9985 150.6L29.3984 169.2L99.4985 198.3Z"
                    fill="#E48914"
                  />
                  <path
                    d="M169.6 169.2L151 150.6L172.3 99.0996H198.6L169.6 169.2Z"
                    fill="#E48914"
                  />
                  <path
                    opacity="0.3"
                    d="M29.3969 169.3L47.9969 150.7L26.6969 99.1996L0.296875 99.0996L29.3969 169.3Z"
                    fill="white"
                  />
                  <path
                    opacity="0.3"
                    d="M198.598 99.1H172.298L150.898 47.6L169.498 29L198.598 99.1Z"
                    fill="white"
                  />
                  <g opacity="0.3">
                    <path
                      d="M29.2969 29L47.8969 47.6L26.5969 99.2H0.296875L29.2969 29Z"
                      fill="#FCBA63"
                    />
                  </g>
                  <path
                    opacity="0.3"
                    d="M99.4047 0V26.3L47.9047 47.6L29.3047 29L99.4047 0Z"
                    fill="white"
                  />
                  <g opacity="0.3">
                    <path
                      d="M73.3984 37.1002L33.8984 116.7L37.2985 125L82.8984 33.2002L73.3984 37.1002Z"
                      fill="white"
                    />
                    <path
                      d="M123.798 36.3994L63.8984 157.199L70.1985 159.799L130.098 38.9994L123.798 36.3994Z"
                      fill="white"
                    />
                    <path
                      d="M162.098 74.5L117.398 164.5L126.898 160.6L165.498 82.8L162.098 74.5Z"
                      fill="white"
                    />
                    <path
                      d="M99.4 26.2998L97 27.2998L42.5 137.3L48 150.6L59 155.2L119 34.3998L99.4 26.2998Z"
                      fill="white"
                    />
                    <path
                      d="M150.903 47.5998L146.603 45.7998L86.7031 166.7L99.5031 172L103.003 170.5L156.803 61.7998L150.903 47.5998Z"
                      fill="white"
                    />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_3851_14">
                    <rect width={199} height={199} fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
          <div className="rounded-full">
            <div className="w-6 h-6 bg-white/5 rounded-lg p-[3px]">
              <svg
                className="p-1 w-full h-full"
                width={199}
                height={199}
                viewBox="0 0 199 199"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_3851_14)">
                  <path
                    d="M29.3969 169.3L0.296875 99.2L29.2969 29L99.3969 0L169.497 29L198.597 99.1L169.597 169.2L99.4969 198.3L29.3969 169.3Z"
                    fill="#FFB240"
                  />
                  <path
                    d="M48.0016 150.6L26.6016 99.1998L47.9016 47.5998L99.4016 26.2998L150.902 47.5998L172.302 99.0998L151.002 150.6L99.5016 172L48.0016 150.6Z"
                    fill="#FCBA63"
                  />
                  <path
                    d="M99.5 198.3V172L151 150.6L169.6 169.2L99.5 198.3Z"
                    fill="#DE9A3B"
                  />
                  <path
                    d="M99.4985 198.3V172L47.9985 150.6L29.3984 169.2L99.4985 198.3Z"
                    fill="#E48914"
                  />
                  <path
                    d="M169.6 169.2L151 150.6L172.3 99.0996H198.6L169.6 169.2Z"
                    fill="#E48914"
                  />
                  <path
                    opacity="0.3"
                    d="M29.3969 169.3L47.9969 150.7L26.6969 99.1996L0.296875 99.0996L29.3969 169.3Z"
                    fill="white"
                  />
                  <path
                    opacity="0.3"
                    d="M198.598 99.1H172.298L150.898 47.6L169.498 29L198.598 99.1Z"
                    fill="white"
                  />
                  <g opacity="0.3">
                    <path
                      d="M29.2969 29L47.8969 47.6L26.5969 99.2H0.296875L29.2969 29Z"
                      fill="#FCBA63"
                    />
                  </g>
                  <path
                    opacity="0.3"
                    d="M99.4047 0V26.3L47.9047 47.6L29.3047 29L99.4047 0Z"
                    fill="white"
                  />
                  <g opacity="0.3">
                    <path
                      d="M73.3984 37.1002L33.8984 116.7L37.2985 125L82.8984 33.2002L73.3984 37.1002Z"
                      fill="white"
                    />
                    <path
                      d="M123.798 36.3994L63.8984 157.199L70.1985 159.799L130.098 38.9994L123.798 36.3994Z"
                      fill="white"
                    />
                    <path
                      d="M162.098 74.5L117.398 164.5L126.898 160.6L165.498 82.8L162.098 74.5Z"
                      fill="white"
                    />
                    <path
                      d="M99.4 26.2998L97 27.2998L42.5 137.3L48 150.6L59 155.2L119 34.3998L99.4 26.2998Z"
                      fill="white"
                    />
                    <path
                      d="M150.903 47.5998L146.603 45.7998L86.7031 166.7L99.5031 172L103.003 170.5L156.803 61.7998L150.903 47.5998Z"
                      fill="white"
                    />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_3851_14">
                    <rect width={199} height={199} fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-0.5">
          <div className="rounded-full">
            <div className="w-6 h-6 bg-white/5 rounded-lg p-[3px]">
              <svg
                className="p-1 w-full h-full"
                width={199}
                height={199}
                viewBox="0 0 199 199"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_3851_32)">
                  <path
                    d="M29.3969 169.3L0.296875 99.2L29.2969 29L99.3969 0L169.497 29L198.597 99.1L169.597 169.2L99.4969 198.3L29.3969 169.3Z"
                    fill="#F44F52"
                  />
                  <path
                    d="M48.0016 150.6L26.6016 99.1998L47.9016 47.5998L99.4016 26.2998L150.902 47.5998L172.302 99.0998L151.002 150.6L99.5016 172L48.0016 150.6Z"
                    fill="#FF6E6E"
                  />
                  <path
                    d="M99.5 198.3V172L151 150.6L169.6 169.2L99.5 198.3Z"
                    fill="#FF6E6E"
                  />
                  <path
                    d="M99.4985 198.3V172L47.9985 150.6L29.3984 169.2L99.4985 198.3Z"
                    fill="#FF514B"
                  />
                  <path
                    d="M169.6 169.2L151 150.6L172.3 99.0996H198.6L169.6 169.2Z"
                    fill="#FF514B"
                  />
                  <path
                    opacity="0.3"
                    d="M29.3969 169.3L47.9969 150.7L26.6969 99.1996L0.296875 99.0996L29.3969 169.3Z"
                    fill="white"
                  />
                  <path
                    opacity="0.3"
                    d="M198.598 99.1H172.298L150.898 47.6L169.498 29L198.598 99.1Z"
                    fill="white"
                  />
                  <g opacity="0.3">
                    <path
                      d="M29.2969 29L47.8969 47.6L26.5969 99.2H0.296875L29.2969 29Z"
                      fill="#FF6E6E"
                    />
                  </g>
                  <path
                    opacity="0.3"
                    d="M99.4047 0V26.3L47.9047 47.6L29.3047 29L99.4047 0Z"
                    fill="white"
                  />
                  <g opacity="0.3">
                    <path
                      d="M73.3984 37.1002L33.8984 116.7L37.2985 125L82.8984 33.2002L73.3984 37.1002Z"
                      fill="white"
                    />
                    <path
                      d="M123.798 36.3994L63.8984 157.199L70.1985 159.799L130.098 38.9994L123.798 36.3994Z"
                      fill="white"
                    />
                    <path
                      d="M162.098 74.5L117.398 164.5L126.898 160.6L165.498 82.8L162.098 74.5Z"
                      fill="white"
                    />
                    <path
                      d="M99.4 26.2998L97 27.2998L42.5 137.3L48 150.6L59 155.2L119 34.3998L99.4 26.2998Z"
                      fill="white"
                    />
                    <path
                      d="M150.903 47.5998L146.603 45.7998L86.7031 166.7L99.5031 172L103.003 170.5L156.803 61.7998L150.903 47.5998Z"
                      fill="white"
                    />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_3851_32">
                    <rect width={199} height={199} fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-0.5">
          <div className="rounded-full">
            <div className="w-6 h-6 bg-white/5 rounded-lg p-[3px]">
              <svg
                className="p-1 w-full h-full"
                width={199}
                height={199}
                viewBox="0 0 199 199"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_3851_14)">
                  <path
                    d="M29.3969 169.3L0.296875 99.2L29.2969 29L99.3969 0L169.497 29L198.597 99.1L169.597 169.2L99.4969 198.3L29.3969 169.3Z"
                    fill="#FFB240"
                  />
                  <path
                    d="M48.0016 150.6L26.6016 99.1998L47.9016 47.5998L99.4016 26.2998L150.902 47.5998L172.302 99.0998L151.002 150.6L99.5016 172L48.0016 150.6Z"
                    fill="#FCBA63"
                  />
                  <path
                    d="M99.5 198.3V172L151 150.6L169.6 169.2L99.5 198.3Z"
                    fill="#DE9A3B"
                  />
                  <path
                    d="M99.4985 198.3V172L47.9985 150.6L29.3984 169.2L99.4985 198.3Z"
                    fill="#E48914"
                  />
                  <path
                    d="M169.6 169.2L151 150.6L172.3 99.0996H198.6L169.6 169.2Z"
                    fill="#E48914"
                  />
                  <path
                    opacity="0.3"
                    d="M29.3969 169.3L47.9969 150.7L26.6969 99.1996L0.296875 99.0996L29.3969 169.3Z"
                    fill="white"
                  />
                  <path
                    opacity="0.3"
                    d="M198.598 99.1H172.298L150.898 47.6L169.498 29L198.598 99.1Z"
                    fill="white"
                  />
                  <g opacity="0.3">
                    <path
                      d="M29.2969 29L47.8969 47.6L26.5969 99.2H0.296875L29.2969 29Z"
                      fill="#FCBA63"
                    />
                  </g>
                  <path
                    opacity="0.3"
                    d="M99.4047 0V26.3L47.9047 47.6L29.3047 29L99.4047 0Z"
                    fill="white"
                  />
                  <g opacity="0.3">
                    <path
                      d="M73.3984 37.1002L33.8984 116.7L37.2985 125L82.8984 33.2002L73.3984 37.1002Z"
                      fill="white"
                    />
                    <path
                      d="M123.798 36.3994L63.8984 157.199L70.1985 159.799L130.098 38.9994L123.798 36.3994Z"
                      fill="white"
                    />
                    <path
                      d="M162.098 74.5L117.398 164.5L126.898 160.6L165.498 82.8L162.098 74.5Z"
                      fill="white"
                    />
                    <path
                      d="M99.4 26.2998L97 27.2998L42.5 137.3L48 150.6L59 155.2L119 34.3998L99.4 26.2998Z"
                      fill="white"
                    />
                    <path
                      d="M150.903 47.5998L146.603 45.7998L86.7031 166.7L99.5031 172L103.003 170.5L156.803 61.7998L150.903 47.5998Z"
                      fill="white"
                    />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_3851_14">
                    <rect width={199} height={199} fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-0.5">
          <div className="rounded-full">
            <div className="w-6 h-6 bg-white/5 rounded-lg p-[3px]">
              <svg
                className="p-1 w-full h-full"
                width={199}
                height={199}
                viewBox="0 0 199 199"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_3851_32)">
                  <path
                    d="M29.3969 169.3L0.296875 99.2L29.2969 29L99.3969 0L169.497 29L198.597 99.1L169.597 169.2L99.4969 198.3L29.3969 169.3Z"
                    fill="#F44F52"
                  />
                  <path
                    d="M48.0016 150.6L26.6016 99.1998L47.9016 47.5998L99.4016 26.2998L150.902 47.5998L172.302 99.0998L151.002 150.6L99.5016 172L48.0016 150.6Z"
                    fill="#FF6E6E"
                  />
                  <path
                    d="M99.5 198.3V172L151 150.6L169.6 169.2L99.5 198.3Z"
                    fill="#FF6E6E"
                  />
                  <path
                    d="M99.4985 198.3V172L47.9985 150.6L29.3984 169.2L99.4985 198.3Z"
                    fill="#FF514B"
                  />
                  <path
                    d="M169.6 169.2L151 150.6L172.3 99.0996H198.6L169.6 169.2Z"
                    fill="#FF514B"
                  />
                  <path
                    opacity="0.3"
                    d="M29.3969 169.3L47.9969 150.7L26.6969 99.1996L0.296875 99.0996L29.3969 169.3Z"
                    fill="white"
                  />
                  <path
                    opacity="0.3"
                    d="M198.598 99.1H172.298L150.898 47.6L169.498 29L198.598 99.1Z"
                    fill="white"
                  />
                  <g opacity="0.3">
                    <path
                      d="M29.2969 29L47.8969 47.6L26.5969 99.2H0.296875L29.2969 29Z"
                      fill="#FF6E6E"
                    />
                  </g>
                  <path
                    opacity="0.3"
                    d="M99.4047 0V26.3L47.9047 47.6L29.3047 29L99.4047 0Z"
                    fill="white"
                  />
                  <g opacity="0.3">
                    <path
                      d="M73.3984 37.1002L33.8984 116.7L37.2985 125L82.8984 33.2002L73.3984 37.1002Z"
                      fill="white"
                    />
                    <path
                      d="M123.798 36.3994L63.8984 157.199L70.1985 159.799L130.098 38.9994L123.798 36.3994Z"
                      fill="white"
                    />
                    <path
                      d="M162.098 74.5L117.398 164.5L126.898 160.6L165.498 82.8L162.098 74.5Z"
                      fill="white"
                    />
                    <path
                      d="M99.4 26.2998L97 27.2998L42.5 137.3L48 150.6L59 155.2L119 34.3998L99.4 26.2998Z"
                      fill="white"
                    />
                    <path
                      d="M150.903 47.5998L146.603 45.7998L86.7031 166.7L99.5031 172L103.003 170.5L156.803 61.7998L150.903 47.5998Z"
                      fill="white"
                    />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_3851_32">
                    <rect width={199} height={199} fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
          <div className="rounded-full">
            <div className="w-6 h-6 bg-white/5 rounded-lg p-[3px]">
              <svg
                className="p-1 w-full h-full"
                width={199}
                height={199}
                viewBox="0 0 199 199"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_3851_32)">
                  <path
                    d="M29.3969 169.3L0.296875 99.2L29.2969 29L99.3969 0L169.497 29L198.597 99.1L169.597 169.2L99.4969 198.3L29.3969 169.3Z"
                    fill="#F44F52"
                  />
                  <path
                    d="M48.0016 150.6L26.6016 99.1998L47.9016 47.5998L99.4016 26.2998L150.902 47.5998L172.302 99.0998L151.002 150.6L99.5016 172L48.0016 150.6Z"
                    fill="#FF6E6E"
                  />
                  <path
                    d="M99.5 198.3V172L151 150.6L169.6 169.2L99.5 198.3Z"
                    fill="#FF6E6E"
                  />
                  <path
                    d="M99.4985 198.3V172L47.9985 150.6L29.3984 169.2L99.4985 198.3Z"
                    fill="#FF514B"
                  />
                  <path
                    d="M169.6 169.2L151 150.6L172.3 99.0996H198.6L169.6 169.2Z"
                    fill="#FF514B"
                  />
                  <path
                    opacity="0.3"
                    d="M29.3969 169.3L47.9969 150.7L26.6969 99.1996L0.296875 99.0996L29.3969 169.3Z"
                    fill="white"
                  />
                  <path
                    opacity="0.3"
                    d="M198.598 99.1H172.298L150.898 47.6L169.498 29L198.598 99.1Z"
                    fill="white"
                  />
                  <g opacity="0.3">
                    <path
                      d="M29.2969 29L47.8969 47.6L26.5969 99.2H0.296875L29.2969 29Z"
                      fill="#FF6E6E"
                    />
                  </g>
                  <path
                    opacity="0.3"
                    d="M99.4047 0V26.3L47.9047 47.6L29.3047 29L99.4047 0Z"
                    fill="white"
                  />
                  <g opacity="0.3">
                    <path
                      d="M73.3984 37.1002L33.8984 116.7L37.2985 125L82.8984 33.2002L73.3984 37.1002Z"
                      fill="white"
                    />
                    <path
                      d="M123.798 36.3994L63.8984 157.199L70.1985 159.799L130.098 38.9994L123.798 36.3994Z"
                      fill="white"
                    />
                    <path
                      d="M162.098 74.5L117.398 164.5L126.898 160.6L165.498 82.8L162.098 74.5Z"
                      fill="white"
                    />
                    <path
                      d="M99.4 26.2998L97 27.2998L42.5 137.3L48 150.6L59 155.2L119 34.3998L99.4 26.2998Z"
                      fill="white"
                    />
                    <path
                      d="M150.903 47.5998L146.603 45.7998L86.7031 166.7L99.5031 172L103.003 170.5L156.803 61.7998L150.903 47.5998Z"
                      fill="white"
                    />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_3851_32">
                    <rect width={199} height={199} fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
          <div className="rounded-full">
            <div className="w-6 h-6 bg-white/5 rounded-lg p-[3px]">
              <svg
                className="p-1 w-full h-full"
                width={199}
                height={199}
                viewBox="0 0 199 199"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_3851_32)">
                  <path
                    d="M29.3969 169.3L0.296875 99.2L29.2969 29L99.3969 0L169.497 29L198.597 99.1L169.597 169.2L99.4969 198.3L29.3969 169.3Z"
                    fill="#F44F52"
                  />
                  <path
                    d="M48.0016 150.6L26.6016 99.1998L47.9016 47.5998L99.4016 26.2998L150.902 47.5998L172.302 99.0998L151.002 150.6L99.5016 172L48.0016 150.6Z"
                    fill="#FF6E6E"
                  />
                  <path
                    d="M99.5 198.3V172L151 150.6L169.6 169.2L99.5 198.3Z"
                    fill="#FF6E6E"
                  />
                  <path
                    d="M99.4985 198.3V172L47.9985 150.6L29.3984 169.2L99.4985 198.3Z"
                    fill="#FF514B"
                  />
                  <path
                    d="M169.6 169.2L151 150.6L172.3 99.0996H198.6L169.6 169.2Z"
                    fill="#FF514B"
                  />
                  <path
                    opacity="0.3"
                    d="M29.3969 169.3L47.9969 150.7L26.6969 99.1996L0.296875 99.0996L29.3969 169.3Z"
                    fill="white"
                  />
                  <path
                    opacity="0.3"
                    d="M198.598 99.1H172.298L150.898 47.6L169.498 29L198.598 99.1Z"
                    fill="white"
                  />
                  <g opacity="0.3">
                    <path
                      d="M29.2969 29L47.8969 47.6L26.5969 99.2H0.296875L29.2969 29Z"
                      fill="#FF6E6E"
                    />
                  </g>
                  <path
                    opacity="0.3"
                    d="M99.4047 0V26.3L47.9047 47.6L29.3047 29L99.4047 0Z"
                    fill="white"
                  />
                  <g opacity="0.3">
                    <path
                      d="M73.3984 37.1002L33.8984 116.7L37.2985 125L82.8984 33.2002L73.3984 37.1002Z"
                      fill="white"
                    />
                    <path
                      d="M123.798 36.3994L63.8984 157.199L70.1985 159.799L130.098 38.9994L123.798 36.3994Z"
                      fill="white"
                    />
                    <path
                      d="M162.098 74.5L117.398 164.5L126.898 160.6L165.498 82.8L162.098 74.5Z"
                      fill="white"
                    />
                    <path
                      d="M99.4 26.2998L97 27.2998L42.5 137.3L48 150.6L59 155.2L119 34.3998L99.4 26.2998Z"
                      fill="white"
                    />
                    <path
                      d="M150.903 47.5998L146.603 45.7998L86.7031 166.7L99.5031 172L103.003 170.5L156.803 61.7998L150.903 47.5998Z"
                      fill="white"
                    />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_3851_32">
                    <rect width={199} height={199} fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-0.5">
          <div className="rounded-full">
            <div className="w-6 h-6 bg-white/5 rounded-lg p-[3px]">
              <svg
                className="p-1 w-full h-full"
                width={199}
                height={199}
                viewBox="0 0 199 199"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_3851_14)">
                  <path
                    d="M29.3969 169.3L0.296875 99.2L29.2969 29L99.3969 0L169.497 29L198.597 99.1L169.597 169.2L99.4969 198.3L29.3969 169.3Z"
                    fill="#FFB240"
                  />
                  <path
                    d="M48.0016 150.6L26.6016 99.1998L47.9016 47.5998L99.4016 26.2998L150.902 47.5998L172.302 99.0998L151.002 150.6L99.5016 172L48.0016 150.6Z"
                    fill="#FCBA63"
                  />
                  <path
                    d="M99.5 198.3V172L151 150.6L169.6 169.2L99.5 198.3Z"
                    fill="#DE9A3B"
                  />
                  <path
                    d="M99.4985 198.3V172L47.9985 150.6L29.3984 169.2L99.4985 198.3Z"
                    fill="#E48914"
                  />
                  <path
                    d="M169.6 169.2L151 150.6L172.3 99.0996H198.6L169.6 169.2Z"
                    fill="#E48914"
                  />
                  <path
                    opacity="0.3"
                    d="M29.3969 169.3L47.9969 150.7L26.6969 99.1996L0.296875 99.0996L29.3969 169.3Z"
                    fill="white"
                  />
                  <path
                    opacity="0.3"
                    d="M198.598 99.1H172.298L150.898 47.6L169.498 29L198.598 99.1Z"
                    fill="white"
                  />
                  <g opacity="0.3">
                    <path
                      d="M29.2969 29L47.8969 47.6L26.5969 99.2H0.296875L29.2969 29Z"
                      fill="#FCBA63"
                    />
                  </g>
                  <path
                    opacity="0.3"
                    d="M99.4047 0V26.3L47.9047 47.6L29.3047 29L99.4047 0Z"
                    fill="white"
                  />
                  <g opacity="0.3">
                    <path
                      d="M73.3984 37.1002L33.8984 116.7L37.2985 125L82.8984 33.2002L73.3984 37.1002Z"
                      fill="white"
                    />
                    <path
                      d="M123.798 36.3994L63.8984 157.199L70.1985 159.799L130.098 38.9994L123.798 36.3994Z"
                      fill="white"
                    />
                    <path
                      d="M162.098 74.5L117.398 164.5L126.898 160.6L165.498 82.8L162.098 74.5Z"
                      fill="white"
                    />
                    <path
                      d="M99.4 26.2998L97 27.2998L42.5 137.3L48 150.6L59 155.2L119 34.3998L99.4 26.2998Z"
                      fill="white"
                    />
                    <path
                      d="M150.903 47.5998L146.603 45.7998L86.7031 166.7L99.5031 172L103.003 170.5L156.803 61.7998L150.903 47.5998Z"
                      fill="white"
                    />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_3851_14">
                    <rect width={199} height={199} fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-0.5">
          <div className="rounded-full">
            <div className="w-6 h-6 bg-white/5 rounded-lg p-[3px]">
              <svg
                className="p-1 w-full h-full"
                width={199}
                height={199}
                viewBox="0 0 199 199"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_3851_32)">
                  <path
                    d="M29.3969 169.3L0.296875 99.2L29.2969 29L99.3969 0L169.497 29L198.597 99.1L169.597 169.2L99.4969 198.3L29.3969 169.3Z"
                    fill="#F44F52"
                  />
                  <path
                    d="M48.0016 150.6L26.6016 99.1998L47.9016 47.5998L99.4016 26.2998L150.902 47.5998L172.302 99.0998L151.002 150.6L99.5016 172L48.0016 150.6Z"
                    fill="#FF6E6E"
                  />
                  <path
                    d="M99.5 198.3V172L151 150.6L169.6 169.2L99.5 198.3Z"
                    fill="#FF6E6E"
                  />
                  <path
                    d="M99.4985 198.3V172L47.9985 150.6L29.3984 169.2L99.4985 198.3Z"
                    fill="#FF514B"
                  />
                  <path
                    d="M169.6 169.2L151 150.6L172.3 99.0996H198.6L169.6 169.2Z"
                    fill="#FF514B"
                  />
                  <path
                    opacity="0.3"
                    d="M29.3969 169.3L47.9969 150.7L26.6969 99.1996L0.296875 99.0996L29.3969 169.3Z"
                    fill="white"
                  />
                  <path
                    opacity="0.3"
                    d="M198.598 99.1H172.298L150.898 47.6L169.498 29L198.598 99.1Z"
                    fill="white"
                  />
                  <g opacity="0.3">
                    <path
                      d="M29.2969 29L47.8969 47.6L26.5969 99.2H0.296875L29.2969 29Z"
                      fill="#FF6E6E"
                    />
                  </g>
                  <path
                    opacity="0.3"
                    d="M99.4047 0V26.3L47.9047 47.6L29.3047 29L99.4047 0Z"
                    fill="white"
                  />
                  <g opacity="0.3">
                    <path
                      d="M73.3984 37.1002L33.8984 116.7L37.2985 125L82.8984 33.2002L73.3984 37.1002Z"
                      fill="white"
                    />
                    <path
                      d="M123.798 36.3994L63.8984 157.199L70.1985 159.799L130.098 38.9994L123.798 36.3994Z"
                      fill="white"
                    />
                    <path
                      d="M162.098 74.5L117.398 164.5L126.898 160.6L165.498 82.8L162.098 74.5Z"
                      fill="white"
                    />
                    <path
                      d="M99.4 26.2998L97 27.2998L42.5 137.3L48 150.6L59 155.2L119 34.3998L99.4 26.2998Z"
                      fill="white"
                    />
                    <path
                      d="M150.903 47.5998L146.603 45.7998L86.7031 166.7L99.5031 172L103.003 170.5L156.803 61.7998L150.903 47.5998Z"
                      fill="white"
                    />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_3851_32">
                    <rect width={199} height={199} fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
          <div className="rounded-full">
            <div className="w-6 h-6 bg-white/5 rounded-lg p-[3px]">
              <svg
                className="p-1 w-full h-full"
                width={199}
                height={199}
                viewBox="0 0 199 199"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_3851_32)">
                  <path
                    d="M29.3969 169.3L0.296875 99.2L29.2969 29L99.3969 0L169.497 29L198.597 99.1L169.597 169.2L99.4969 198.3L29.3969 169.3Z"
                    fill="#F44F52"
                  />
                  <path
                    d="M48.0016 150.6L26.6016 99.1998L47.9016 47.5998L99.4016 26.2998L150.902 47.5998L172.302 99.0998L151.002 150.6L99.5016 172L48.0016 150.6Z"
                    fill="#FF6E6E"
                  />
                  <path
                    d="M99.5 198.3V172L151 150.6L169.6 169.2L99.5 198.3Z"
                    fill="#FF6E6E"
                  />
                  <path
                    d="M99.4985 198.3V172L47.9985 150.6L29.3984 169.2L99.4985 198.3Z"
                    fill="#FF514B"
                  />
                  <path
                    d="M169.6 169.2L151 150.6L172.3 99.0996H198.6L169.6 169.2Z"
                    fill="#FF514B"
                  />
                  <path
                    opacity="0.3"
                    d="M29.3969 169.3L47.9969 150.7L26.6969 99.1996L0.296875 99.0996L29.3969 169.3Z"
                    fill="white"
                  />
                  <path
                    opacity="0.3"
                    d="M198.598 99.1H172.298L150.898 47.6L169.498 29L198.598 99.1Z"
                    fill="white"
                  />
                  <g opacity="0.3">
                    <path
                      d="M29.2969 29L47.8969 47.6L26.5969 99.2H0.296875L29.2969 29Z"
                      fill="#FF6E6E"
                    />
                  </g>
                  <path
                    opacity="0.3"
                    d="M99.4047 0V26.3L47.9047 47.6L29.3047 29L99.4047 0Z"
                    fill="white"
                  />
                  <g opacity="0.3">
                    <path
                      d="M73.3984 37.1002L33.8984 116.7L37.2985 125L82.8984 33.2002L73.3984 37.1002Z"
                      fill="white"
                    />
                    <path
                      d="M123.798 36.3994L63.8984 157.199L70.1985 159.799L130.098 38.9994L123.798 36.3994Z"
                      fill="white"
                    />
                    <path
                      d="M162.098 74.5L117.398 164.5L126.898 160.6L165.498 82.8L162.098 74.5Z"
                      fill="white"
                    />
                    <path
                      d="M99.4 26.2998L97 27.2998L42.5 137.3L48 150.6L59 155.2L119 34.3998L99.4 26.2998Z"
                      fill="white"
                    />
                    <path
                      d="M150.903 47.5998L146.603 45.7998L86.7031 166.7L99.5031 172L103.003 170.5L156.803 61.7998L150.903 47.5998Z"
                      fill="white"
                    />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_3851_32">
                    <rect width={199} height={199} fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
          <div className="rounded-full">
            <div className="w-6 h-6 bg-white/5 rounded-lg p-[3px]">
              <svg
                className="p-1 w-full h-full"
                width={199}
                height={199}
                viewBox="0 0 199 199"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_3851_32)">
                  <path
                    d="M29.3969 169.3L0.296875 99.2L29.2969 29L99.3969 0L169.497 29L198.597 99.1L169.597 169.2L99.4969 198.3L29.3969 169.3Z"
                    fill="#F44F52"
                  />
                  <path
                    d="M48.0016 150.6L26.6016 99.1998L47.9016 47.5998L99.4016 26.2998L150.902 47.5998L172.302 99.0998L151.002 150.6L99.5016 172L48.0016 150.6Z"
                    fill="#FF6E6E"
                  />
                  <path
                    d="M99.5 198.3V172L151 150.6L169.6 169.2L99.5 198.3Z"
                    fill="#FF6E6E"
                  />
                  <path
                    d="M99.4985 198.3V172L47.9985 150.6L29.3984 169.2L99.4985 198.3Z"
                    fill="#FF514B"
                  />
                  <path
                    d="M169.6 169.2L151 150.6L172.3 99.0996H198.6L169.6 169.2Z"
                    fill="#FF514B"
                  />
                  <path
                    opacity="0.3"
                    d="M29.3969 169.3L47.9969 150.7L26.6969 99.1996L0.296875 99.0996L29.3969 169.3Z"
                    fill="white"
                  />
                  <path
                    opacity="0.3"
                    d="M198.598 99.1H172.298L150.898 47.6L169.498 29L198.598 99.1Z"
                    fill="white"
                  />
                  <g opacity="0.3">
                    <path
                      d="M29.2969 29L47.8969 47.6L26.5969 99.2H0.296875L29.2969 29Z"
                      fill="#FF6E6E"
                    />
                  </g>
                  <path
                    opacity="0.3"
                    d="M99.4047 0V26.3L47.9047 47.6L29.3047 29L99.4047 0Z"
                    fill="white"
                  />
                  <g opacity="0.3">
                    <path
                      d="M73.3984 37.1002L33.8984 116.7L37.2985 125L82.8984 33.2002L73.3984 37.1002Z"
                      fill="white"
                    />
                    <path
                      d="M123.798 36.3994L63.8984 157.199L70.1985 159.799L130.098 38.9994L123.798 36.3994Z"
                      fill="white"
                    />
                    <path
                      d="M162.098 74.5L117.398 164.5L126.898 160.6L165.498 82.8L162.098 74.5Z"
                      fill="white"
                    />
                    <path
                      d="M99.4 26.2998L97 27.2998L42.5 137.3L48 150.6L59 155.2L119 34.3998L99.4 26.2998Z"
                      fill="white"
                    />
                    <path
                      d="M150.903 47.5998L146.603 45.7998L86.7031 166.7L99.5031 172L103.003 170.5L156.803 61.7998L150.903 47.5998Z"
                      fill="white"
                    />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_3851_32">
                    <rect width={199} height={199} fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-0.5">
          <div className="rounded-full">
            <div className="w-6 h-6 bg-white/5 rounded-lg p-[3px]">
              <svg
                className="p-1 w-full h-full"
                width={199}
                height={199}
                viewBox="0 0 199 199"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_3851_14)">
                  <path
                    d="M29.3969 169.3L0.296875 99.2L29.2969 29L99.3969 0L169.497 29L198.597 99.1L169.597 169.2L99.4969 198.3L29.3969 169.3Z"
                    fill="#FFB240"
                  />
                  <path
                    d="M48.0016 150.6L26.6016 99.1998L47.9016 47.5998L99.4016 26.2998L150.902 47.5998L172.302 99.0998L151.002 150.6L99.5016 172L48.0016 150.6Z"
                    fill="#FCBA63"
                  />
                  <path
                    d="M99.5 198.3V172L151 150.6L169.6 169.2L99.5 198.3Z"
                    fill="#DE9A3B"
                  />
                  <path
                    d="M99.4985 198.3V172L47.9985 150.6L29.3984 169.2L99.4985 198.3Z"
                    fill="#E48914"
                  />
                  <path
                    d="M169.6 169.2L151 150.6L172.3 99.0996H198.6L169.6 169.2Z"
                    fill="#E48914"
                  />
                  <path
                    opacity="0.3"
                    d="M29.3969 169.3L47.9969 150.7L26.6969 99.1996L0.296875 99.0996L29.3969 169.3Z"
                    fill="white"
                  />
                  <path
                    opacity="0.3"
                    d="M198.598 99.1H172.298L150.898 47.6L169.498 29L198.598 99.1Z"
                    fill="white"
                  />
                  <g opacity="0.3">
                    <path
                      d="M29.2969 29L47.8969 47.6L26.5969 99.2H0.296875L29.2969 29Z"
                      fill="#FCBA63"
                    />
                  </g>
                  <path
                    opacity="0.3"
                    d="M99.4047 0V26.3L47.9047 47.6L29.3047 29L99.4047 0Z"
                    fill="white"
                  />
                  <g opacity="0.3">
                    <path
                      d="M73.3984 37.1002L33.8984 116.7L37.2985 125L82.8984 33.2002L73.3984 37.1002Z"
                      fill="white"
                    />
                    <path
                      d="M123.798 36.3994L63.8984 157.199L70.1985 159.799L130.098 38.9994L123.798 36.3994Z"
                      fill="white"
                    />
                    <path
                      d="M162.098 74.5L117.398 164.5L126.898 160.6L165.498 82.8L162.098 74.5Z"
                      fill="white"
                    />
                    <path
                      d="M99.4 26.2998L97 27.2998L42.5 137.3L48 150.6L59 155.2L119 34.3998L99.4 26.2998Z"
                      fill="white"
                    />
                    <path
                      d="M150.903 47.5998L146.603 45.7998L86.7031 166.7L99.5031 172L103.003 170.5L156.803 61.7998L150.903 47.5998Z"
                      fill="white"
                    />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_3851_14">
                    <rect width={199} height={199} fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
          <div className="rounded-full">
            <div className="w-6 h-6 bg-white/5 rounded-lg p-[3px]">
              <svg
                className="p-1 w-full h-full"
                width={199}
                height={199}
                viewBox="0 0 199 199"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_3851_14)">
                  <path
                    d="M29.3969 169.3L0.296875 99.2L29.2969 29L99.3969 0L169.497 29L198.597 99.1L169.597 169.2L99.4969 198.3L29.3969 169.3Z"
                    fill="#FFB240"
                  />
                  <path
                    d="M48.0016 150.6L26.6016 99.1998L47.9016 47.5998L99.4016 26.2998L150.902 47.5998L172.302 99.0998L151.002 150.6L99.5016 172L48.0016 150.6Z"
                    fill="#FCBA63"
                  />
                  <path
                    d="M99.5 198.3V172L151 150.6L169.6 169.2L99.5 198.3Z"
                    fill="#DE9A3B"
                  />
                  <path
                    d="M99.4985 198.3V172L47.9985 150.6L29.3984 169.2L99.4985 198.3Z"
                    fill="#E48914"
                  />
                  <path
                    d="M169.6 169.2L151 150.6L172.3 99.0996H198.6L169.6 169.2Z"
                    fill="#E48914"
                  />
                  <path
                    opacity="0.3"
                    d="M29.3969 169.3L47.9969 150.7L26.6969 99.1996L0.296875 99.0996L29.3969 169.3Z"
                    fill="white"
                  />
                  <path
                    opacity="0.3"
                    d="M198.598 99.1H172.298L150.898 47.6L169.498 29L198.598 99.1Z"
                    fill="white"
                  />
                  <g opacity="0.3">
                    <path
                      d="M29.2969 29L47.8969 47.6L26.5969 99.2H0.296875L29.2969 29Z"
                      fill="#FCBA63"
                    />
                  </g>
                  <path
                    opacity="0.3"
                    d="M99.4047 0V26.3L47.9047 47.6L29.3047 29L99.4047 0Z"
                    fill="white"
                  />
                  <g opacity="0.3">
                    <path
                      d="M73.3984 37.1002L33.8984 116.7L37.2985 125L82.8984 33.2002L73.3984 37.1002Z"
                      fill="white"
                    />
                    <path
                      d="M123.798 36.3994L63.8984 157.199L70.1985 159.799L130.098 38.9994L123.798 36.3994Z"
                      fill="white"
                    />
                    <path
                      d="M162.098 74.5L117.398 164.5L126.898 160.6L165.498 82.8L162.098 74.5Z"
                      fill="white"
                    />
                    <path
                      d="M99.4 26.2998L97 27.2998L42.5 137.3L48 150.6L59 155.2L119 34.3998L99.4 26.2998Z"
                      fill="white"
                    />
                    <path
                      d="M150.903 47.5998L146.603 45.7998L86.7031 166.7L99.5031 172L103.003 170.5L156.803 61.7998L150.903 47.5998Z"
                      fill="white"
                    />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_3851_14">
                    <rect width={199} height={199} fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-0.5">
          <div className="rounded-full">
            <div className="w-6 h-6 bg-white/5 rounded-lg p-[3px]">
              <svg
                className="p-1 w-full h-full"
                width={199}
                height={199}
                viewBox="0 0 199 199"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_3851_32)">
                  <path
                    d="M29.3969 169.3L0.296875 99.2L29.2969 29L99.3969 0L169.497 29L198.597 99.1L169.597 169.2L99.4969 198.3L29.3969 169.3Z"
                    fill="#F44F52"
                  />
                  <path
                    d="M48.0016 150.6L26.6016 99.1998L47.9016 47.5998L99.4016 26.2998L150.902 47.5998L172.302 99.0998L151.002 150.6L99.5016 172L48.0016 150.6Z"
                    fill="#FF6E6E"
                  />
                  <path
                    d="M99.5 198.3V172L151 150.6L169.6 169.2L99.5 198.3Z"
                    fill="#FF6E6E"
                  />
                  <path
                    d="M99.4985 198.3V172L47.9985 150.6L29.3984 169.2L99.4985 198.3Z"
                    fill="#FF514B"
                  />
                  <path
                    d="M169.6 169.2L151 150.6L172.3 99.0996H198.6L169.6 169.2Z"
                    fill="#FF514B"
                  />
                  <path
                    opacity="0.3"
                    d="M29.3969 169.3L47.9969 150.7L26.6969 99.1996L0.296875 99.0996L29.3969 169.3Z"
                    fill="white"
                  />
                  <path
                    opacity="0.3"
                    d="M198.598 99.1H172.298L150.898 47.6L169.498 29L198.598 99.1Z"
                    fill="white"
                  />
                  <g opacity="0.3">
                    <path
                      d="M29.2969 29L47.8969 47.6L26.5969 99.2H0.296875L29.2969 29Z"
                      fill="#FF6E6E"
                    />
                  </g>
                  <path
                    opacity="0.3"
                    d="M99.4047 0V26.3L47.9047 47.6L29.3047 29L99.4047 0Z"
                    fill="white"
                  />
                  <g opacity="0.3">
                    <path
                      d="M73.3984 37.1002L33.8984 116.7L37.2985 125L82.8984 33.2002L73.3984 37.1002Z"
                      fill="white"
                    />
                    <path
                      d="M123.798 36.3994L63.8984 157.199L70.1985 159.799L130.098 38.9994L123.798 36.3994Z"
                      fill="white"
                    />
                    <path
                      d="M162.098 74.5L117.398 164.5L126.898 160.6L165.498 82.8L162.098 74.5Z"
                      fill="white"
                    />
                    <path
                      d="M99.4 26.2998L97 27.2998L42.5 137.3L48 150.6L59 155.2L119 34.3998L99.4 26.2998Z"
                      fill="white"
                    />
                    <path
                      d="M150.903 47.5998L146.603 45.7998L86.7031 166.7L99.5031 172L103.003 170.5L156.803 61.7998L150.903 47.5998Z"
                      fill="white"
                    />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_3851_32">
                    <rect width={199} height={199} fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-0.5">
          <div className="rounded-full">
            <div className="w-6 h-6 bg-white/5 rounded-lg p-[3px]">
              <svg
                className="p-1 w-full h-full"
                width={199}
                height={199}
                viewBox="0 0 199 199"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_3851_14)">
                  <path
                    d="M29.3969 169.3L0.296875 99.2L29.2969 29L99.3969 0L169.497 29L198.597 99.1L169.597 169.2L99.4969 198.3L29.3969 169.3Z"
                    fill="#FFB240"
                  />
                  <path
                    d="M48.0016 150.6L26.6016 99.1998L47.9016 47.5998L99.4016 26.2998L150.902 47.5998L172.302 99.0998L151.002 150.6L99.5016 172L48.0016 150.6Z"
                    fill="#FCBA63"
                  />
                  <path
                    d="M99.5 198.3V172L151 150.6L169.6 169.2L99.5 198.3Z"
                    fill="#DE9A3B"
                  />
                  <path
                    d="M99.4985 198.3V172L47.9985 150.6L29.3984 169.2L99.4985 198.3Z"
                    fill="#E48914"
                  />
                  <path
                    d="M169.6 169.2L151 150.6L172.3 99.0996H198.6L169.6 169.2Z"
                    fill="#E48914"
                  />
                  <path
                    opacity="0.3"
                    d="M29.3969 169.3L47.9969 150.7L26.6969 99.1996L0.296875 99.0996L29.3969 169.3Z"
                    fill="white"
                  />
                  <path
                    opacity="0.3"
                    d="M198.598 99.1H172.298L150.898 47.6L169.498 29L198.598 99.1Z"
                    fill="white"
                  />
                  <g opacity="0.3">
                    <path
                      d="M29.2969 29L47.8969 47.6L26.5969 99.2H0.296875L29.2969 29Z"
                      fill="#FCBA63"
                    />
                  </g>
                  <path
                    opacity="0.3"
                    d="M99.4047 0V26.3L47.9047 47.6L29.3047 29L99.4047 0Z"
                    fill="white"
                  />
                  <g opacity="0.3">
                    <path
                      d="M73.3984 37.1002L33.8984 116.7L37.2985 125L82.8984 33.2002L73.3984 37.1002Z"
                      fill="white"
                    />
                    <path
                      d="M123.798 36.3994L63.8984 157.199L70.1985 159.799L130.098 38.9994L123.798 36.3994Z"
                      fill="white"
                    />
                    <path
                      d="M162.098 74.5L117.398 164.5L126.898 160.6L165.498 82.8L162.098 74.5Z"
                      fill="white"
                    />
                    <path
                      d="M99.4 26.2998L97 27.2998L42.5 137.3L48 150.6L59 155.2L119 34.3998L99.4 26.2998Z"
                      fill="white"
                    />
                    <path
                      d="M150.903 47.5998L146.603 45.7998L86.7031 166.7L99.5031 172L103.003 170.5L156.803 61.7998L150.903 47.5998Z"
                      fill="white"
                    />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_3851_14">
                    <rect width={199} height={199} fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
          <div className="rounded-full">
            <div className="w-6 h-6 bg-white/5 rounded-lg p-[3px]">
              <svg
                className="p-1 w-full h-full"
                width={199}
                height={199}
                viewBox="0 0 199 199"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_3851_14)">
                  <path
                    d="M29.3969 169.3L0.296875 99.2L29.2969 29L99.3969 0L169.497 29L198.597 99.1L169.597 169.2L99.4969 198.3L29.3969 169.3Z"
                    fill="#FFB240"
                  />
                  <path
                    d="M48.0016 150.6L26.6016 99.1998L47.9016 47.5998L99.4016 26.2998L150.902 47.5998L172.302 99.0998L151.002 150.6L99.5016 172L48.0016 150.6Z"
                    fill="#FCBA63"
                  />
                  <path
                    d="M99.5 198.3V172L151 150.6L169.6 169.2L99.5 198.3Z"
                    fill="#DE9A3B"
                  />
                  <path
                    d="M99.4985 198.3V172L47.9985 150.6L29.3984 169.2L99.4985 198.3Z"
                    fill="#E48914"
                  />
                  <path
                    d="M169.6 169.2L151 150.6L172.3 99.0996H198.6L169.6 169.2Z"
                    fill="#E48914"
                  />
                  <path
                    opacity="0.3"
                    d="M29.3969 169.3L47.9969 150.7L26.6969 99.1996L0.296875 99.0996L29.3969 169.3Z"
                    fill="white"
                  />
                  <path
                    opacity="0.3"
                    d="M198.598 99.1H172.298L150.898 47.6L169.498 29L198.598 99.1Z"
                    fill="white"
                  />
                  <g opacity="0.3">
                    <path
                      d="M29.2969 29L47.8969 47.6L26.5969 99.2H0.296875L29.2969 29Z"
                      fill="#FCBA63"
                    />
                  </g>
                  <path
                    opacity="0.3"
                    d="M99.4047 0V26.3L47.9047 47.6L29.3047 29L99.4047 0Z"
                    fill="white"
                  />
                  <g opacity="0.3">
                    <path
                      d="M73.3984 37.1002L33.8984 116.7L37.2985 125L82.8984 33.2002L73.3984 37.1002Z"
                      fill="white"
                    />
                    <path
                      d="M123.798 36.3994L63.8984 157.199L70.1985 159.799L130.098 38.9994L123.798 36.3994Z"
                      fill="white"
                    />
                    <path
                      d="M162.098 74.5L117.398 164.5L126.898 160.6L165.498 82.8L162.098 74.5Z"
                      fill="white"
                    />
                    <path
                      d="M99.4 26.2998L97 27.2998L42.5 137.3L48 150.6L59 155.2L119 34.3998L99.4 26.2998Z"
                      fill="white"
                    />
                    <path
                      d="M150.903 47.5998L146.603 45.7998L86.7031 166.7L99.5031 172L103.003 170.5L156.803 61.7998L150.903 47.5998Z"
                      fill="white"
                    />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_3851_14">
                    <rect width={199} height={199} fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-0.5">
          <div className="rounded-full">
            <div className="w-6 h-6 bg-white/5 rounded-lg p-[3px]">
              <svg
                className="p-1 w-full h-full"
                width={199}
                height={199}
                viewBox="0 0 199 199"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_3851_32)">
                  <path
                    d="M29.3969 169.3L0.296875 99.2L29.2969 29L99.3969 0L169.497 29L198.597 99.1L169.597 169.2L99.4969 198.3L29.3969 169.3Z"
                    fill="#F44F52"
                  />
                  <path
                    d="M48.0016 150.6L26.6016 99.1998L47.9016 47.5998L99.4016 26.2998L150.902 47.5998L172.302 99.0998L151.002 150.6L99.5016 172L48.0016 150.6Z"
                    fill="#FF6E6E"
                  />
                  <path
                    d="M99.5 198.3V172L151 150.6L169.6 169.2L99.5 198.3Z"
                    fill="#FF6E6E"
                  />
                  <path
                    d="M99.4985 198.3V172L47.9985 150.6L29.3984 169.2L99.4985 198.3Z"
                    fill="#FF514B"
                  />
                  <path
                    d="M169.6 169.2L151 150.6L172.3 99.0996H198.6L169.6 169.2Z"
                    fill="#FF514B"
                  />
                  <path
                    opacity="0.3"
                    d="M29.3969 169.3L47.9969 150.7L26.6969 99.1996L0.296875 99.0996L29.3969 169.3Z"
                    fill="white"
                  />
                  <path
                    opacity="0.3"
                    d="M198.598 99.1H172.298L150.898 47.6L169.498 29L198.598 99.1Z"
                    fill="white"
                  />
                  <g opacity="0.3">
                    <path
                      d="M29.2969 29L47.8969 47.6L26.5969 99.2H0.296875L29.2969 29Z"
                      fill="#FF6E6E"
                    />
                  </g>
                  <path
                    opacity="0.3"
                    d="M99.4047 0V26.3L47.9047 47.6L29.3047 29L99.4047 0Z"
                    fill="white"
                  />
                  <g opacity="0.3">
                    <path
                      d="M73.3984 37.1002L33.8984 116.7L37.2985 125L82.8984 33.2002L73.3984 37.1002Z"
                      fill="white"
                    />
                    <path
                      d="M123.798 36.3994L63.8984 157.199L70.1985 159.799L130.098 38.9994L123.798 36.3994Z"
                      fill="white"
                    />
                    <path
                      d="M162.098 74.5L117.398 164.5L126.898 160.6L165.498 82.8L162.098 74.5Z"
                      fill="white"
                    />
                    <path
                      d="M99.4 26.2998L97 27.2998L42.5 137.3L48 150.6L59 155.2L119 34.3998L99.4 26.2998Z"
                      fill="white"
                    />
                    <path
                      d="M150.903 47.5998L146.603 45.7998L86.7031 166.7L99.5031 172L103.003 170.5L156.803 61.7998L150.903 47.5998Z"
                      fill="white"
                    />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_3851_32">
                    <rect width={199} height={199} fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
          <div className="rounded-full">
            <div className="w-6 h-6 bg-white/5 rounded-lg p-[3px]">
              <svg
                className="p-1 w-full h-full"
                width={199}
                height={199}
                viewBox="0 0 199 199"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_3851_32)">
                  <path
                    d="M29.3969 169.3L0.296875 99.2L29.2969 29L99.3969 0L169.497 29L198.597 99.1L169.597 169.2L99.4969 198.3L29.3969 169.3Z"
                    fill="#F44F52"
                  />
                  <path
                    d="M48.0016 150.6L26.6016 99.1998L47.9016 47.5998L99.4016 26.2998L150.902 47.5998L172.302 99.0998L151.002 150.6L99.5016 172L48.0016 150.6Z"
                    fill="#FF6E6E"
                  />
                  <path
                    d="M99.5 198.3V172L151 150.6L169.6 169.2L99.5 198.3Z"
                    fill="#FF6E6E"
                  />
                  <path
                    d="M99.4985 198.3V172L47.9985 150.6L29.3984 169.2L99.4985 198.3Z"
                    fill="#FF514B"
                  />
                  <path
                    d="M169.6 169.2L151 150.6L172.3 99.0996H198.6L169.6 169.2Z"
                    fill="#FF514B"
                  />
                  <path
                    opacity="0.3"
                    d="M29.3969 169.3L47.9969 150.7L26.6969 99.1996L0.296875 99.0996L29.3969 169.3Z"
                    fill="white"
                  />
                  <path
                    opacity="0.3"
                    d="M198.598 99.1H172.298L150.898 47.6L169.498 29L198.598 99.1Z"
                    fill="white"
                  />
                  <g opacity="0.3">
                    <path
                      d="M29.2969 29L47.8969 47.6L26.5969 99.2H0.296875L29.2969 29Z"
                      fill="#FF6E6E"
                    />
                  </g>
                  <path
                    opacity="0.3"
                    d="M99.4047 0V26.3L47.9047 47.6L29.3047 29L99.4047 0Z"
                    fill="white"
                  />
                  <g opacity="0.3">
                    <path
                      d="M73.3984 37.1002L33.8984 116.7L37.2985 125L82.8984 33.2002L73.3984 37.1002Z"
                      fill="white"
                    />
                    <path
                      d="M123.798 36.3994L63.8984 157.199L70.1985 159.799L130.098 38.9994L123.798 36.3994Z"
                      fill="white"
                    />
                    <path
                      d="M162.098 74.5L117.398 164.5L126.898 160.6L165.498 82.8L162.098 74.5Z"
                      fill="white"
                    />
                    <path
                      d="M99.4 26.2998L97 27.2998L42.5 137.3L48 150.6L59 155.2L119 34.3998L99.4 26.2998Z"
                      fill="white"
                    />
                    <path
                      d="M150.903 47.5998L146.603 45.7998L86.7031 166.7L99.5031 172L103.003 170.5L156.803 61.7998L150.903 47.5998Z"
                      fill="white"
                    />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_3851_32">
                    <rect width={199} height={199} fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-0.5">
          <div className="rounded-full">
            <div className="w-6 h-6 bg-white/5 rounded-lg p-[3px]">
              <svg
                className="p-1 w-full h-full"
                width={199}
                height={199}
                viewBox="0 0 199 199"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_3851_14)">
                  <path
                    d="M29.3969 169.3L0.296875 99.2L29.2969 29L99.3969 0L169.497 29L198.597 99.1L169.597 169.2L99.4969 198.3L29.3969 169.3Z"
                    fill="#FFB240"
                  />
                  <path
                    d="M48.0016 150.6L26.6016 99.1998L47.9016 47.5998L99.4016 26.2998L150.902 47.5998L172.302 99.0998L151.002 150.6L99.5016 172L48.0016 150.6Z"
                    fill="#FCBA63"
                  />
                  <path
                    d="M99.5 198.3V172L151 150.6L169.6 169.2L99.5 198.3Z"
                    fill="#DE9A3B"
                  />
                  <path
                    d="M99.4985 198.3V172L47.9985 150.6L29.3984 169.2L99.4985 198.3Z"
                    fill="#E48914"
                  />
                  <path
                    d="M169.6 169.2L151 150.6L172.3 99.0996H198.6L169.6 169.2Z"
                    fill="#E48914"
                  />
                  <path
                    opacity="0.3"
                    d="M29.3969 169.3L47.9969 150.7L26.6969 99.1996L0.296875 99.0996L29.3969 169.3Z"
                    fill="white"
                  />
                  <path
                    opacity="0.3"
                    d="M198.598 99.1H172.298L150.898 47.6L169.498 29L198.598 99.1Z"
                    fill="white"
                  />
                  <g opacity="0.3">
                    <path
                      d="M29.2969 29L47.8969 47.6L26.5969 99.2H0.296875L29.2969 29Z"
                      fill="#FCBA63"
                    />
                  </g>
                  <path
                    opacity="0.3"
                    d="M99.4047 0V26.3L47.9047 47.6L29.3047 29L99.4047 0Z"
                    fill="white"
                  />
                  <g opacity="0.3">
                    <path
                      d="M73.3984 37.1002L33.8984 116.7L37.2985 125L82.8984 33.2002L73.3984 37.1002Z"
                      fill="white"
                    />
                    <path
                      d="M123.798 36.3994L63.8984 157.199L70.1985 159.799L130.098 38.9994L123.798 36.3994Z"
                      fill="white"
                    />
                    <path
                      d="M162.098 74.5L117.398 164.5L126.898 160.6L165.498 82.8L162.098 74.5Z"
                      fill="white"
                    />
                    <path
                      d="M99.4 26.2998L97 27.2998L42.5 137.3L48 150.6L59 155.2L119 34.3998L99.4 26.2998Z"
                      fill="white"
                    />
                    <path
                      d="M150.903 47.5998L146.603 45.7998L86.7031 166.7L99.5031 172L103.003 170.5L156.803 61.7998L150.903 47.5998Z"
                      fill="white"
                    />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_3851_14">
                    <rect width={199} height={199} fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
          <div className="rounded-full">
            <div className="w-6 h-6 bg-white/5 rounded-lg p-[3px]">
              <svg
                className="p-1 w-full h-full"
                width={199}
                height={199}
                viewBox="0 0 199 199"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_3851_14)">
                  <path
                    d="M29.3969 169.3L0.296875 99.2L29.2969 29L99.3969 0L169.497 29L198.597 99.1L169.597 169.2L99.4969 198.3L29.3969 169.3Z"
                    fill="#FFB240"
                  />
                  <path
                    d="M48.0016 150.6L26.6016 99.1998L47.9016 47.5998L99.4016 26.2998L150.902 47.5998L172.302 99.0998L151.002 150.6L99.5016 172L48.0016 150.6Z"
                    fill="#FCBA63"
                  />
                  <path
                    d="M99.5 198.3V172L151 150.6L169.6 169.2L99.5 198.3Z"
                    fill="#DE9A3B"
                  />
                  <path
                    d="M99.4985 198.3V172L47.9985 150.6L29.3984 169.2L99.4985 198.3Z"
                    fill="#E48914"
                  />
                  <path
                    d="M169.6 169.2L151 150.6L172.3 99.0996H198.6L169.6 169.2Z"
                    fill="#E48914"
                  />
                  <path
                    opacity="0.3"
                    d="M29.3969 169.3L47.9969 150.7L26.6969 99.1996L0.296875 99.0996L29.3969 169.3Z"
                    fill="white"
                  />
                  <path
                    opacity="0.3"
                    d="M198.598 99.1H172.298L150.898 47.6L169.498 29L198.598 99.1Z"
                    fill="white"
                  />
                  <g opacity="0.3">
                    <path
                      d="M29.2969 29L47.8969 47.6L26.5969 99.2H0.296875L29.2969 29Z"
                      fill="#FCBA63"
                    />
                  </g>
                  <path
                    opacity="0.3"
                    d="M99.4047 0V26.3L47.9047 47.6L29.3047 29L99.4047 0Z"
                    fill="white"
                  />
                  <g opacity="0.3">
                    <path
                      d="M73.3984 37.1002L33.8984 116.7L37.2985 125L82.8984 33.2002L73.3984 37.1002Z"
                      fill="white"
                    />
                    <path
                      d="M123.798 36.3994L63.8984 157.199L70.1985 159.799L130.098 38.9994L123.798 36.3994Z"
                      fill="white"
                    />
                    <path
                      d="M162.098 74.5L117.398 164.5L126.898 160.6L165.498 82.8L162.098 74.5Z"
                      fill="white"
                    />
                    <path
                      d="M99.4 26.2998L97 27.2998L42.5 137.3L48 150.6L59 155.2L119 34.3998L99.4 26.2998Z"
                      fill="white"
                    />
                    <path
                      d="M150.903 47.5998L146.603 45.7998L86.7031 166.7L99.5031 172L103.003 170.5L156.803 61.7998L150.903 47.5998Z"
                      fill="white"
                    />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_3851_14">
                    <rect width={199} height={199} fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
          <div className="rounded-full">
            <div className="w-6 h-6 bg-white/5 rounded-lg p-[3px]">
              <svg
                className="p-1 w-full h-full"
                width={199}
                height={199}
                viewBox="0 0 199 199"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_3851_14)">
                  <path
                    d="M29.3969 169.3L0.296875 99.2L29.2969 29L99.3969 0L169.497 29L198.597 99.1L169.597 169.2L99.4969 198.3L29.3969 169.3Z"
                    fill="#FFB240"
                  />
                  <path
                    d="M48.0016 150.6L26.6016 99.1998L47.9016 47.5998L99.4016 26.2998L150.902 47.5998L172.302 99.0998L151.002 150.6L99.5016 172L48.0016 150.6Z"
                    fill="#FCBA63"
                  />
                  <path
                    d="M99.5 198.3V172L151 150.6L169.6 169.2L99.5 198.3Z"
                    fill="#DE9A3B"
                  />
                  <path
                    d="M99.4985 198.3V172L47.9985 150.6L29.3984 169.2L99.4985 198.3Z"
                    fill="#E48914"
                  />
                  <path
                    d="M169.6 169.2L151 150.6L172.3 99.0996H198.6L169.6 169.2Z"
                    fill="#E48914"
                  />
                  <path
                    opacity="0.3"
                    d="M29.3969 169.3L47.9969 150.7L26.6969 99.1996L0.296875 99.0996L29.3969 169.3Z"
                    fill="white"
                  />
                  <path
                    opacity="0.3"
                    d="M198.598 99.1H172.298L150.898 47.6L169.498 29L198.598 99.1Z"
                    fill="white"
                  />
                  <g opacity="0.3">
                    <path
                      d="M29.2969 29L47.8969 47.6L26.5969 99.2H0.296875L29.2969 29Z"
                      fill="#FCBA63"
                    />
                  </g>
                  <path
                    opacity="0.3"
                    d="M99.4047 0V26.3L47.9047 47.6L29.3047 29L99.4047 0Z"
                    fill="white"
                  />
                  <g opacity="0.3">
                    <path
                      d="M73.3984 37.1002L33.8984 116.7L37.2985 125L82.8984 33.2002L73.3984 37.1002Z"
                      fill="white"
                    />
                    <path
                      d="M123.798 36.3994L63.8984 157.199L70.1985 159.799L130.098 38.9994L123.798 36.3994Z"
                      fill="white"
                    />
                    <path
                      d="M162.098 74.5L117.398 164.5L126.898 160.6L165.498 82.8L162.098 74.5Z"
                      fill="white"
                    />
                    <path
                      d="M99.4 26.2998L97 27.2998L42.5 137.3L48 150.6L59 155.2L119 34.3998L99.4 26.2998Z"
                      fill="white"
                    />
                    <path
                      d="M150.903 47.5998L146.603 45.7998L86.7031 166.7L99.5031 172L103.003 170.5L156.803 61.7998L150.903 47.5998Z"
                      fill="white"
                    />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_3851_14">
                    <rect width={199} height={199} fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
          <div className="rounded-full">
            <div className="w-6 h-6 bg-white/5 rounded-lg p-[3px]">
              <svg
                className="p-1 w-full h-full"
                width={199}
                height={199}
                viewBox="0 0 199 199"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_3851_14)">
                  <path
                    d="M29.3969 169.3L0.296875 99.2L29.2969 29L99.3969 0L169.497 29L198.597 99.1L169.597 169.2L99.4969 198.3L29.3969 169.3Z"
                    fill="#FFB240"
                  />
                  <path
                    d="M48.0016 150.6L26.6016 99.1998L47.9016 47.5998L99.4016 26.2998L150.902 47.5998L172.302 99.0998L151.002 150.6L99.5016 172L48.0016 150.6Z"
                    fill="#FCBA63"
                  />
                  <path
                    d="M99.5 198.3V172L151 150.6L169.6 169.2L99.5 198.3Z"
                    fill="#DE9A3B"
                  />
                  <path
                    d="M99.4985 198.3V172L47.9985 150.6L29.3984 169.2L99.4985 198.3Z"
                    fill="#E48914"
                  />
                  <path
                    d="M169.6 169.2L151 150.6L172.3 99.0996H198.6L169.6 169.2Z"
                    fill="#E48914"
                  />
                  <path
                    opacity="0.3"
                    d="M29.3969 169.3L47.9969 150.7L26.6969 99.1996L0.296875 99.0996L29.3969 169.3Z"
                    fill="white"
                  />
                  <path
                    opacity="0.3"
                    d="M198.598 99.1H172.298L150.898 47.6L169.498 29L198.598 99.1Z"
                    fill="white"
                  />
                  <g opacity="0.3">
                    <path
                      d="M29.2969 29L47.8969 47.6L26.5969 99.2H0.296875L29.2969 29Z"
                      fill="#FCBA63"
                    />
                  </g>
                  <path
                    opacity="0.3"
                    d="M99.4047 0V26.3L47.9047 47.6L29.3047 29L99.4047 0Z"
                    fill="white"
                  />
                  <g opacity="0.3">
                    <path
                      d="M73.3984 37.1002L33.8984 116.7L37.2985 125L82.8984 33.2002L73.3984 37.1002Z"
                      fill="white"
                    />
                    <path
                      d="M123.798 36.3994L63.8984 157.199L70.1985 159.799L130.098 38.9994L123.798 36.3994Z"
                      fill="white"
                    />
                    <path
                      d="M162.098 74.5L117.398 164.5L126.898 160.6L165.498 82.8L162.098 74.5Z"
                      fill="white"
                    />
                    <path
                      d="M99.4 26.2998L97 27.2998L42.5 137.3L48 150.6L59 155.2L119 34.3998L99.4 26.2998Z"
                      fill="white"
                    />
                    <path
                      d="M150.903 47.5998L146.603 45.7998L86.7031 166.7L99.5031 172L103.003 170.5L156.803 61.7998L150.903 47.5998Z"
                      fill="white"
                    />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_3851_14">
                    <rect width={199} height={199} fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
          <div className="rounded-full">
            <div className="w-6 h-6 bg-white/5 rounded-lg p-[3px]">
              <svg
                className="p-1 w-full h-full"
                width={199}
                height={199}
                viewBox="0 0 199 199"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_3851_14)">
                  <path
                    d="M29.3969 169.3L0.296875 99.2L29.2969 29L99.3969 0L169.497 29L198.597 99.1L169.597 169.2L99.4969 198.3L29.3969 169.3Z"
                    fill="#FFB240"
                  />
                  <path
                    d="M48.0016 150.6L26.6016 99.1998L47.9016 47.5998L99.4016 26.2998L150.902 47.5998L172.302 99.0998L151.002 150.6L99.5016 172L48.0016 150.6Z"
                    fill="#FCBA63"
                  />
                  <path
                    d="M99.5 198.3V172L151 150.6L169.6 169.2L99.5 198.3Z"
                    fill="#DE9A3B"
                  />
                  <path
                    d="M99.4985 198.3V172L47.9985 150.6L29.3984 169.2L99.4985 198.3Z"
                    fill="#E48914"
                  />
                  <path
                    d="M169.6 169.2L151 150.6L172.3 99.0996H198.6L169.6 169.2Z"
                    fill="#E48914"
                  />
                  <path
                    opacity="0.3"
                    d="M29.3969 169.3L47.9969 150.7L26.6969 99.1996L0.296875 99.0996L29.3969 169.3Z"
                    fill="white"
                  />
                  <path
                    opacity="0.3"
                    d="M198.598 99.1H172.298L150.898 47.6L169.498 29L198.598 99.1Z"
                    fill="white"
                  />
                  <g opacity="0.3">
                    <path
                      d="M29.2969 29L47.8969 47.6L26.5969 99.2H0.296875L29.2969 29Z"
                      fill="#FCBA63"
                    />
                  </g>
                  <path
                    opacity="0.3"
                    d="M99.4047 0V26.3L47.9047 47.6L29.3047 29L99.4047 0Z"
                    fill="white"
                  />
                  <g opacity="0.3">
                    <path
                      d="M73.3984 37.1002L33.8984 116.7L37.2985 125L82.8984 33.2002L73.3984 37.1002Z"
                      fill="white"
                    />
                    <path
                      d="M123.798 36.3994L63.8984 157.199L70.1985 159.799L130.098 38.9994L123.798 36.3994Z"
                      fill="white"
                    />
                    <path
                      d="M162.098 74.5L117.398 164.5L126.898 160.6L165.498 82.8L162.098 74.5Z"
                      fill="white"
                    />
                    <path
                      d="M99.4 26.2998L97 27.2998L42.5 137.3L48 150.6L59 155.2L119 34.3998L99.4 26.2998Z"
                      fill="white"
                    />
                    <path
                      d="M150.903 47.5998L146.603 45.7998L86.7031 166.7L99.5031 172L103.003 170.5L156.803 61.7998L150.903 47.5998Z"
                      fill="white"
                    />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_3851_14">
                    <rect width={199} height={199} fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-0.5">
          <div className="rounded-full">
            <div className="w-6 h-6 bg-white/5 rounded-lg p-[3px]">
              <svg
                className="p-1 w-full h-full"
                width={199}
                height={199}
                viewBox="0 0 199 199"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_3851_32)">
                  <path
                    d="M29.3969 169.3L0.296875 99.2L29.2969 29L99.3969 0L169.497 29L198.597 99.1L169.597 169.2L99.4969 198.3L29.3969 169.3Z"
                    fill="#F44F52"
                  />
                  <path
                    d="M48.0016 150.6L26.6016 99.1998L47.9016 47.5998L99.4016 26.2998L150.902 47.5998L172.302 99.0998L151.002 150.6L99.5016 172L48.0016 150.6Z"
                    fill="#FF6E6E"
                  />
                  <path
                    d="M99.5 198.3V172L151 150.6L169.6 169.2L99.5 198.3Z"
                    fill="#FF6E6E"
                  />
                  <path
                    d="M99.4985 198.3V172L47.9985 150.6L29.3984 169.2L99.4985 198.3Z"
                    fill="#FF514B"
                  />
                  <path
                    d="M169.6 169.2L151 150.6L172.3 99.0996H198.6L169.6 169.2Z"
                    fill="#FF514B"
                  />
                  <path
                    opacity="0.3"
                    d="M29.3969 169.3L47.9969 150.7L26.6969 99.1996L0.296875 99.0996L29.3969 169.3Z"
                    fill="white"
                  />
                  <path
                    opacity="0.3"
                    d="M198.598 99.1H172.298L150.898 47.6L169.498 29L198.598 99.1Z"
                    fill="white"
                  />
                  <g opacity="0.3">
                    <path
                      d="M29.2969 29L47.8969 47.6L26.5969 99.2H0.296875L29.2969 29Z"
                      fill="#FF6E6E"
                    />
                  </g>
                  <path
                    opacity="0.3"
                    d="M99.4047 0V26.3L47.9047 47.6L29.3047 29L99.4047 0Z"
                    fill="white"
                  />
                  <g opacity="0.3">
                    <path
                      d="M73.3984 37.1002L33.8984 116.7L37.2985 125L82.8984 33.2002L73.3984 37.1002Z"
                      fill="white"
                    />
                    <path
                      d="M123.798 36.3994L63.8984 157.199L70.1985 159.799L130.098 38.9994L123.798 36.3994Z"
                      fill="white"
                    />
                    <path
                      d="M162.098 74.5L117.398 164.5L126.898 160.6L165.498 82.8L162.098 74.5Z"
                      fill="white"
                    />
                    <path
                      d="M99.4 26.2998L97 27.2998L42.5 137.3L48 150.6L59 155.2L119 34.3998L99.4 26.2998Z"
                      fill="white"
                    />
                    <path
                      d="M150.903 47.5998L146.603 45.7998L86.7031 166.7L99.5031 172L103.003 170.5L156.803 61.7998L150.903 47.5998Z"
                      fill="white"
                    />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_3851_32">
                    <rect width={199} height={199} fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
          <div className="rounded-full">
            <div className="w-6 h-6 bg-white/5 rounded-lg p-[3px]">
              <svg
                className="p-1 w-full h-full"
                width={199}
                height={199}
                viewBox="0 0 199 199"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_3851_32)">
                  <path
                    d="M29.3969 169.3L0.296875 99.2L29.2969 29L99.3969 0L169.497 29L198.597 99.1L169.597 169.2L99.4969 198.3L29.3969 169.3Z"
                    fill="#F44F52"
                  />
                  <path
                    d="M48.0016 150.6L26.6016 99.1998L47.9016 47.5998L99.4016 26.2998L150.902 47.5998L172.302 99.0998L151.002 150.6L99.5016 172L48.0016 150.6Z"
                    fill="#FF6E6E"
                  />
                  <path
                    d="M99.5 198.3V172L151 150.6L169.6 169.2L99.5 198.3Z"
                    fill="#FF6E6E"
                  />
                  <path
                    d="M99.4985 198.3V172L47.9985 150.6L29.3984 169.2L99.4985 198.3Z"
                    fill="#FF514B"
                  />
                  <path
                    d="M169.6 169.2L151 150.6L172.3 99.0996H198.6L169.6 169.2Z"
                    fill="#FF514B"
                  />
                  <path
                    opacity="0.3"
                    d="M29.3969 169.3L47.9969 150.7L26.6969 99.1996L0.296875 99.0996L29.3969 169.3Z"
                    fill="white"
                  />
                  <path
                    opacity="0.3"
                    d="M198.598 99.1H172.298L150.898 47.6L169.498 29L198.598 99.1Z"
                    fill="white"
                  />
                  <g opacity="0.3">
                    <path
                      d="M29.2969 29L47.8969 47.6L26.5969 99.2H0.296875L29.2969 29Z"
                      fill="#FF6E6E"
                    />
                  </g>
                  <path
                    opacity="0.3"
                    d="M99.4047 0V26.3L47.9047 47.6L29.3047 29L99.4047 0Z"
                    fill="white"
                  />
                  <g opacity="0.3">
                    <path
                      d="M73.3984 37.1002L33.8984 116.7L37.2985 125L82.8984 33.2002L73.3984 37.1002Z"
                      fill="white"
                    />
                    <path
                      d="M123.798 36.3994L63.8984 157.199L70.1985 159.799L130.098 38.9994L123.798 36.3994Z"
                      fill="white"
                    />
                    <path
                      d="M162.098 74.5L117.398 164.5L126.898 160.6L165.498 82.8L162.098 74.5Z"
                      fill="white"
                    />
                    <path
                      d="M99.4 26.2998L97 27.2998L42.5 137.3L48 150.6L59 155.2L119 34.3998L99.4 26.2998Z"
                      fill="white"
                    />
                    <path
                      d="M150.903 47.5998L146.603 45.7998L86.7031 166.7L99.5031 172L103.003 170.5L156.803 61.7998L150.903 47.5998Z"
                      fill="white"
                    />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_3851_32">
                    <rect width={199} height={199} fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
          <div className="rounded-full">
            <div className="w-6 h-6 bg-white/5 rounded-lg p-[3px]">
              <svg
                className="p-1 w-full h-full"
                width={199}
                height={199}
                viewBox="0 0 199 199"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_3851_32)">
                  <path
                    d="M29.3969 169.3L0.296875 99.2L29.2969 29L99.3969 0L169.497 29L198.597 99.1L169.597 169.2L99.4969 198.3L29.3969 169.3Z"
                    fill="#F44F52"
                  />
                  <path
                    d="M48.0016 150.6L26.6016 99.1998L47.9016 47.5998L99.4016 26.2998L150.902 47.5998L172.302 99.0998L151.002 150.6L99.5016 172L48.0016 150.6Z"
                    fill="#FF6E6E"
                  />
                  <path
                    d="M99.5 198.3V172L151 150.6L169.6 169.2L99.5 198.3Z"
                    fill="#FF6E6E"
                  />
                  <path
                    d="M99.4985 198.3V172L47.9985 150.6L29.3984 169.2L99.4985 198.3Z"
                    fill="#FF514B"
                  />
                  <path
                    d="M169.6 169.2L151 150.6L172.3 99.0996H198.6L169.6 169.2Z"
                    fill="#FF514B"
                  />
                  <path
                    opacity="0.3"
                    d="M29.3969 169.3L47.9969 150.7L26.6969 99.1996L0.296875 99.0996L29.3969 169.3Z"
                    fill="white"
                  />
                  <path
                    opacity="0.3"
                    d="M198.598 99.1H172.298L150.898 47.6L169.498 29L198.598 99.1Z"
                    fill="white"
                  />
                  <g opacity="0.3">
                    <path
                      d="M29.2969 29L47.8969 47.6L26.5969 99.2H0.296875L29.2969 29Z"
                      fill="#FF6E6E"
                    />
                  </g>
                  <path
                    opacity="0.3"
                    d="M99.4047 0V26.3L47.9047 47.6L29.3047 29L99.4047 0Z"
                    fill="white"
                  />
                  <g opacity="0.3">
                    <path
                      d="M73.3984 37.1002L33.8984 116.7L37.2985 125L82.8984 33.2002L73.3984 37.1002Z"
                      fill="white"
                    />
                    <path
                      d="M123.798 36.3994L63.8984 157.199L70.1985 159.799L130.098 38.9994L123.798 36.3994Z"
                      fill="white"
                    />
                    <path
                      d="M162.098 74.5L117.398 164.5L126.898 160.6L165.498 82.8L162.098 74.5Z"
                      fill="white"
                    />
                    <path
                      d="M99.4 26.2998L97 27.2998L42.5 137.3L48 150.6L59 155.2L119 34.3998L99.4 26.2998Z"
                      fill="white"
                    />
                    <path
                      d="M150.903 47.5998L146.603 45.7998L86.7031 166.7L99.5031 172L103.003 170.5L156.803 61.7998L150.903 47.5998Z"
                      fill="white"
                    />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_3851_32">
                    <rect width={199} height={199} fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-0.5">
          <div className="rounded-full">
            <div className="w-6 h-6 bg-white/5 rounded-lg p-[3px]">
              <svg
                className="p-1 w-full h-full"
                width={199}
                height={199}
                viewBox="0 0 199 199"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_3851_14)">
                  <path
                    d="M29.3969 169.3L0.296875 99.2L29.2969 29L99.3969 0L169.497 29L198.597 99.1L169.597 169.2L99.4969 198.3L29.3969 169.3Z"
                    fill="#FFB240"
                  />
                  <path
                    d="M48.0016 150.6L26.6016 99.1998L47.9016 47.5998L99.4016 26.2998L150.902 47.5998L172.302 99.0998L151.002 150.6L99.5016 172L48.0016 150.6Z"
                    fill="#FCBA63"
                  />
                  <path
                    d="M99.5 198.3V172L151 150.6L169.6 169.2L99.5 198.3Z"
                    fill="#DE9A3B"
                  />
                  <path
                    d="M99.4985 198.3V172L47.9985 150.6L29.3984 169.2L99.4985 198.3Z"
                    fill="#E48914"
                  />
                  <path
                    d="M169.6 169.2L151 150.6L172.3 99.0996H198.6L169.6 169.2Z"
                    fill="#E48914"
                  />
                  <path
                    opacity="0.3"
                    d="M29.3969 169.3L47.9969 150.7L26.6969 99.1996L0.296875 99.0996L29.3969 169.3Z"
                    fill="white"
                  />
                  <path
                    opacity="0.3"
                    d="M198.598 99.1H172.298L150.898 47.6L169.498 29L198.598 99.1Z"
                    fill="white"
                  />
                  <g opacity="0.3">
                    <path
                      d="M29.2969 29L47.8969 47.6L26.5969 99.2H0.296875L29.2969 29Z"
                      fill="#FCBA63"
                    />
                  </g>
                  <path
                    opacity="0.3"
                    d="M99.4047 0V26.3L47.9047 47.6L29.3047 29L99.4047 0Z"
                    fill="white"
                  />
                  <g opacity="0.3">
                    <path
                      d="M73.3984 37.1002L33.8984 116.7L37.2985 125L82.8984 33.2002L73.3984 37.1002Z"
                      fill="white"
                    />
                    <path
                      d="M123.798 36.3994L63.8984 157.199L70.1985 159.799L130.098 38.9994L123.798 36.3994Z"
                      fill="white"
                    />
                    <path
                      d="M162.098 74.5L117.398 164.5L126.898 160.6L165.498 82.8L162.098 74.5Z"
                      fill="white"
                    />
                    <path
                      d="M99.4 26.2998L97 27.2998L42.5 137.3L48 150.6L59 155.2L119 34.3998L99.4 26.2998Z"
                      fill="white"
                    />
                    <path
                      d="M150.903 47.5998L146.603 45.7998L86.7031 166.7L99.5031 172L103.003 170.5L156.803 61.7998L150.903 47.5998Z"
                      fill="white"
                    />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_3851_14">
                    <rect width={199} height={199} fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
          <div className="rounded-full">
            <div className="w-6 h-6 bg-white/5 rounded-lg p-[3px]">
              <svg
                className="p-1 w-full h-full"
                width={199}
                height={199}
                viewBox="0 0 199 199"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_3851_14)">
                  <path
                    d="M29.3969 169.3L0.296875 99.2L29.2969 29L99.3969 0L169.497 29L198.597 99.1L169.597 169.2L99.4969 198.3L29.3969 169.3Z"
                    fill="#FFB240"
                  />
                  <path
                    d="M48.0016 150.6L26.6016 99.1998L47.9016 47.5998L99.4016 26.2998L150.902 47.5998L172.302 99.0998L151.002 150.6L99.5016 172L48.0016 150.6Z"
                    fill="#FCBA63"
                  />
                  <path
                    d="M99.5 198.3V172L151 150.6L169.6 169.2L99.5 198.3Z"
                    fill="#DE9A3B"
                  />
                  <path
                    d="M99.4985 198.3V172L47.9985 150.6L29.3984 169.2L99.4985 198.3Z"
                    fill="#E48914"
                  />
                  <path
                    d="M169.6 169.2L151 150.6L172.3 99.0996H198.6L169.6 169.2Z"
                    fill="#E48914"
                  />
                  <path
                    opacity="0.3"
                    d="M29.3969 169.3L47.9969 150.7L26.6969 99.1996L0.296875 99.0996L29.3969 169.3Z"
                    fill="white"
                  />
                  <path
                    opacity="0.3"
                    d="M198.598 99.1H172.298L150.898 47.6L169.498 29L198.598 99.1Z"
                    fill="white"
                  />
                  <g opacity="0.3">
                    <path
                      d="M29.2969 29L47.8969 47.6L26.5969 99.2H0.296875L29.2969 29Z"
                      fill="#FCBA63"
                    />
                  </g>
                  <path
                    opacity="0.3"
                    d="M99.4047 0V26.3L47.9047 47.6L29.3047 29L99.4047 0Z"
                    fill="white"
                  />
                  <g opacity="0.3">
                    <path
                      d="M73.3984 37.1002L33.8984 116.7L37.2985 125L82.8984 33.2002L73.3984 37.1002Z"
                      fill="white"
                    />
                    <path
                      d="M123.798 36.3994L63.8984 157.199L70.1985 159.799L130.098 38.9994L123.798 36.3994Z"
                      fill="white"
                    />
                    <path
                      d="M162.098 74.5L117.398 164.5L126.898 160.6L165.498 82.8L162.098 74.5Z"
                      fill="white"
                    />
                    <path
                      d="M99.4 26.2998L97 27.2998L42.5 137.3L48 150.6L59 155.2L119 34.3998L99.4 26.2998Z"
                      fill="white"
                    />
                    <path
                      d="M150.903 47.5998L146.603 45.7998L86.7031 166.7L99.5031 172L103.003 170.5L156.803 61.7998L150.903 47.5998Z"
                      fill="white"
                    />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_3851_14">
                    <rect width={199} height={199} fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
          <div className="rounded-full">
            <div className="w-6 h-6 bg-white/5 rounded-lg p-[3px]">
              <svg
                className="p-1 w-full h-full"
                width={199}
                height={199}
                viewBox="0 0 199 199"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_3851_14)">
                  <path
                    d="M29.3969 169.3L0.296875 99.2L29.2969 29L99.3969 0L169.497 29L198.597 99.1L169.597 169.2L99.4969 198.3L29.3969 169.3Z"
                    fill="#FFB240"
                  />
                  <path
                    d="M48.0016 150.6L26.6016 99.1998L47.9016 47.5998L99.4016 26.2998L150.902 47.5998L172.302 99.0998L151.002 150.6L99.5016 172L48.0016 150.6Z"
                    fill="#FCBA63"
                  />
                  <path
                    d="M99.5 198.3V172L151 150.6L169.6 169.2L99.5 198.3Z"
                    fill="#DE9A3B"
                  />
                  <path
                    d="M99.4985 198.3V172L47.9985 150.6L29.3984 169.2L99.4985 198.3Z"
                    fill="#E48914"
                  />
                  <path
                    d="M169.6 169.2L151 150.6L172.3 99.0996H198.6L169.6 169.2Z"
                    fill="#E48914"
                  />
                  <path
                    opacity="0.3"
                    d="M29.3969 169.3L47.9969 150.7L26.6969 99.1996L0.296875 99.0996L29.3969 169.3Z"
                    fill="white"
                  />
                  <path
                    opacity="0.3"
                    d="M198.598 99.1H172.298L150.898 47.6L169.498 29L198.598 99.1Z"
                    fill="white"
                  />
                  <g opacity="0.3">
                    <path
                      d="M29.2969 29L47.8969 47.6L26.5969 99.2H0.296875L29.2969 29Z"
                      fill="#FCBA63"
                    />
                  </g>
                  <path
                    opacity="0.3"
                    d="M99.4047 0V26.3L47.9047 47.6L29.3047 29L99.4047 0Z"
                    fill="white"
                  />
                  <g opacity="0.3">
                    <path
                      d="M73.3984 37.1002L33.8984 116.7L37.2985 125L82.8984 33.2002L73.3984 37.1002Z"
                      fill="white"
                    />
                    <path
                      d="M123.798 36.3994L63.8984 157.199L70.1985 159.799L130.098 38.9994L123.798 36.3994Z"
                      fill="white"
                    />
                    <path
                      d="M162.098 74.5L117.398 164.5L126.898 160.6L165.498 82.8L162.098 74.5Z"
                      fill="white"
                    />
                    <path
                      d="M99.4 26.2998L97 27.2998L42.5 137.3L48 150.6L59 155.2L119 34.3998L99.4 26.2998Z"
                      fill="white"
                    />
                    <path
                      d="M150.903 47.5998L146.603 45.7998L86.7031 166.7L99.5031 172L103.003 170.5L156.803 61.7998L150.903 47.5998Z"
                      fill="white"
                    />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_3851_14">
                    <rect width={199} height={199} fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-0.5">
          <div className="rounded-full">
            <div className="w-6 h-6 bg-white/5 rounded-lg p-[3px]">
              <svg
                className="p-1 w-full h-full"
                width={199}
                height={199}
                viewBox="0 0 199 199"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_3851_32)">
                  <path
                    d="M29.3969 169.3L0.296875 99.2L29.2969 29L99.3969 0L169.497 29L198.597 99.1L169.597 169.2L99.4969 198.3L29.3969 169.3Z"
                    fill="#F44F52"
                  />
                  <path
                    d="M48.0016 150.6L26.6016 99.1998L47.9016 47.5998L99.4016 26.2998L150.902 47.5998L172.302 99.0998L151.002 150.6L99.5016 172L48.0016 150.6Z"
                    fill="#FF6E6E"
                  />
                  <path
                    d="M99.5 198.3V172L151 150.6L169.6 169.2L99.5 198.3Z"
                    fill="#FF6E6E"
                  />
                  <path
                    d="M99.4985 198.3V172L47.9985 150.6L29.3984 169.2L99.4985 198.3Z"
                    fill="#FF514B"
                  />
                  <path
                    d="M169.6 169.2L151 150.6L172.3 99.0996H198.6L169.6 169.2Z"
                    fill="#FF514B"
                  />
                  <path
                    opacity="0.3"
                    d="M29.3969 169.3L47.9969 150.7L26.6969 99.1996L0.296875 99.0996L29.3969 169.3Z"
                    fill="white"
                  />
                  <path
                    opacity="0.3"
                    d="M198.598 99.1H172.298L150.898 47.6L169.498 29L198.598 99.1Z"
                    fill="white"
                  />
                  <g opacity="0.3">
                    <path
                      d="M29.2969 29L47.8969 47.6L26.5969 99.2H0.296875L29.2969 29Z"
                      fill="#FF6E6E"
                    />
                  </g>
                  <path
                    opacity="0.3"
                    d="M99.4047 0V26.3L47.9047 47.6L29.3047 29L99.4047 0Z"
                    fill="white"
                  />
                  <g opacity="0.3">
                    <path
                      d="M73.3984 37.1002L33.8984 116.7L37.2985 125L82.8984 33.2002L73.3984 37.1002Z"
                      fill="white"
                    />
                    <path
                      d="M123.798 36.3994L63.8984 157.199L70.1985 159.799L130.098 38.9994L123.798 36.3994Z"
                      fill="white"
                    />
                    <path
                      d="M162.098 74.5L117.398 164.5L126.898 160.6L165.498 82.8L162.098 74.5Z"
                      fill="white"
                    />
                    <path
                      d="M99.4 26.2998L97 27.2998L42.5 137.3L48 150.6L59 155.2L119 34.3998L99.4 26.2998Z"
                      fill="white"
                    />
                    <path
                      d="M150.903 47.5998L146.603 45.7998L86.7031 166.7L99.5031 172L103.003 170.5L156.803 61.7998L150.903 47.5998Z"
                      fill="white"
                    />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_3851_32">
                    <rect width={199} height={199} fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
          <div className="rounded-full">
            <div className="w-6 h-6 bg-white/5 rounded-lg p-[3px]">
              <svg
                className="p-1 w-full h-full"
                width={199}
                height={199}
                viewBox="0 0 199 199"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_3851_32)">
                  <path
                    d="M29.3969 169.3L0.296875 99.2L29.2969 29L99.3969 0L169.497 29L198.597 99.1L169.597 169.2L99.4969 198.3L29.3969 169.3Z"
                    fill="#F44F52"
                  />
                  <path
                    d="M48.0016 150.6L26.6016 99.1998L47.9016 47.5998L99.4016 26.2998L150.902 47.5998L172.302 99.0998L151.002 150.6L99.5016 172L48.0016 150.6Z"
                    fill="#FF6E6E"
                  />
                  <path
                    d="M99.5 198.3V172L151 150.6L169.6 169.2L99.5 198.3Z"
                    fill="#FF6E6E"
                  />
                  <path
                    d="M99.4985 198.3V172L47.9985 150.6L29.3984 169.2L99.4985 198.3Z"
                    fill="#FF514B"
                  />
                  <path
                    d="M169.6 169.2L151 150.6L172.3 99.0996H198.6L169.6 169.2Z"
                    fill="#FF514B"
                  />
                  <path
                    opacity="0.3"
                    d="M29.3969 169.3L47.9969 150.7L26.6969 99.1996L0.296875 99.0996L29.3969 169.3Z"
                    fill="white"
                  />
                  <path
                    opacity="0.3"
                    d="M198.598 99.1H172.298L150.898 47.6L169.498 29L198.598 99.1Z"
                    fill="white"
                  />
                  <g opacity="0.3">
                    <path
                      d="M29.2969 29L47.8969 47.6L26.5969 99.2H0.296875L29.2969 29Z"
                      fill="#FF6E6E"
                    />
                  </g>
                  <path
                    opacity="0.3"
                    d="M99.4047 0V26.3L47.9047 47.6L29.3047 29L99.4047 0Z"
                    fill="white"
                  />
                  <g opacity="0.3">
                    <path
                      d="M73.3984 37.1002L33.8984 116.7L37.2985 125L82.8984 33.2002L73.3984 37.1002Z"
                      fill="white"
                    />
                    <path
                      d="M123.798 36.3994L63.8984 157.199L70.1985 159.799L130.098 38.9994L123.798 36.3994Z"
                      fill="white"
                    />
                    <path
                      d="M162.098 74.5L117.398 164.5L126.898 160.6L165.498 82.8L162.098 74.5Z"
                      fill="white"
                    />
                    <path
                      d="M99.4 26.2998L97 27.2998L42.5 137.3L48 150.6L59 155.2L119 34.3998L99.4 26.2998Z"
                      fill="white"
                    />
                    <path
                      d="M150.903 47.5998L146.603 45.7998L86.7031 166.7L99.5031 172L103.003 170.5L156.803 61.7998L150.903 47.5998Z"
                      fill="white"
                    />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_3851_32">
                    <rect width={199} height={199} fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
          <div className="rounded-full">
            <div className="w-6 h-6 bg-white/5 rounded-lg p-[3px]">
              <svg
                className="p-1 w-full h-full"
                width={199}
                height={199}
                viewBox="0 0 199 199"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_3851_32)">
                  <path
                    d="M29.3969 169.3L0.296875 99.2L29.2969 29L99.3969 0L169.497 29L198.597 99.1L169.597 169.2L99.4969 198.3L29.3969 169.3Z"
                    fill="#F44F52"
                  />
                  <path
                    d="M48.0016 150.6L26.6016 99.1998L47.9016 47.5998L99.4016 26.2998L150.902 47.5998L172.302 99.0998L151.002 150.6L99.5016 172L48.0016 150.6Z"
                    fill="#FF6E6E"
                  />
                  <path
                    d="M99.5 198.3V172L151 150.6L169.6 169.2L99.5 198.3Z"
                    fill="#FF6E6E"
                  />
                  <path
                    d="M99.4985 198.3V172L47.9985 150.6L29.3984 169.2L99.4985 198.3Z"
                    fill="#FF514B"
                  />
                  <path
                    d="M169.6 169.2L151 150.6L172.3 99.0996H198.6L169.6 169.2Z"
                    fill="#FF514B"
                  />
                  <path
                    opacity="0.3"
                    d="M29.3969 169.3L47.9969 150.7L26.6969 99.1996L0.296875 99.0996L29.3969 169.3Z"
                    fill="white"
                  />
                  <path
                    opacity="0.3"
                    d="M198.598 99.1H172.298L150.898 47.6L169.498 29L198.598 99.1Z"
                    fill="white"
                  />
                  <g opacity="0.3">
                    <path
                      d="M29.2969 29L47.8969 47.6L26.5969 99.2H0.296875L29.2969 29Z"
                      fill="#FF6E6E"
                    />
                  </g>
                  <path
                    opacity="0.3"
                    d="M99.4047 0V26.3L47.9047 47.6L29.3047 29L99.4047 0Z"
                    fill="white"
                  />
                  <g opacity="0.3">
                    <path
                      d="M73.3984 37.1002L33.8984 116.7L37.2985 125L82.8984 33.2002L73.3984 37.1002Z"
                      fill="white"
                    />
                    <path
                      d="M123.798 36.3994L63.8984 157.199L70.1985 159.799L130.098 38.9994L123.798 36.3994Z"
                      fill="white"
                    />
                    <path
                      d="M162.098 74.5L117.398 164.5L126.898 160.6L165.498 82.8L162.098 74.5Z"
                      fill="white"
                    />
                    <path
                      d="M99.4 26.2998L97 27.2998L42.5 137.3L48 150.6L59 155.2L119 34.3998L99.4 26.2998Z"
                      fill="white"
                    />
                    <path
                      d="M150.903 47.5998L146.603 45.7998L86.7031 166.7L99.5031 172L103.003 170.5L156.803 61.7998L150.903 47.5998Z"
                      fill="white"
                    />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_3851_32">
                    <rect width={199} height={199} fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-0.5">
          <div className="rounded-full">
            <div className="w-6 h-6 bg-white/5 rounded-lg p-[3px]">
              <svg
                className="p-1 w-full h-full"
                width={199}
                height={199}
                viewBox="0 0 199 199"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_3851_14)">
                  <path
                    d="M29.3969 169.3L0.296875 99.2L29.2969 29L99.3969 0L169.497 29L198.597 99.1L169.597 169.2L99.4969 198.3L29.3969 169.3Z"
                    fill="#FFB240"
                  />
                  <path
                    d="M48.0016 150.6L26.6016 99.1998L47.9016 47.5998L99.4016 26.2998L150.902 47.5998L172.302 99.0998L151.002 150.6L99.5016 172L48.0016 150.6Z"
                    fill="#FCBA63"
                  />
                  <path
                    d="M99.5 198.3V172L151 150.6L169.6 169.2L99.5 198.3Z"
                    fill="#DE9A3B"
                  />
                  <path
                    d="M99.4985 198.3V172L47.9985 150.6L29.3984 169.2L99.4985 198.3Z"
                    fill="#E48914"
                  />
                  <path
                    d="M169.6 169.2L151 150.6L172.3 99.0996H198.6L169.6 169.2Z"
                    fill="#E48914"
                  />
                  <path
                    opacity="0.3"
                    d="M29.3969 169.3L47.9969 150.7L26.6969 99.1996L0.296875 99.0996L29.3969 169.3Z"
                    fill="white"
                  />
                  <path
                    opacity="0.3"
                    d="M198.598 99.1H172.298L150.898 47.6L169.498 29L198.598 99.1Z"
                    fill="white"
                  />
                  <g opacity="0.3">
                    <path
                      d="M29.2969 29L47.8969 47.6L26.5969 99.2H0.296875L29.2969 29Z"
                      fill="#FCBA63"
                    />
                  </g>
                  <path
                    opacity="0.3"
                    d="M99.4047 0V26.3L47.9047 47.6L29.3047 29L99.4047 0Z"
                    fill="white"
                  />
                  <g opacity="0.3">
                    <path
                      d="M73.3984 37.1002L33.8984 116.7L37.2985 125L82.8984 33.2002L73.3984 37.1002Z"
                      fill="white"
                    />
                    <path
                      d="M123.798 36.3994L63.8984 157.199L70.1985 159.799L130.098 38.9994L123.798 36.3994Z"
                      fill="white"
                    />
                    <path
                      d="M162.098 74.5L117.398 164.5L126.898 160.6L165.498 82.8L162.098 74.5Z"
                      fill="white"
                    />
                    <path
                      d="M99.4 26.2998L97 27.2998L42.5 137.3L48 150.6L59 155.2L119 34.3998L99.4 26.2998Z"
                      fill="white"
                    />
                    <path
                      d="M150.903 47.5998L146.603 45.7998L86.7031 166.7L99.5031 172L103.003 170.5L156.803 61.7998L150.903 47.5998Z"
                      fill="white"
                    />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_3851_14">
                    <rect width={199} height={199} fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-0.5">
          <div className="rounded-full">
            <div className="w-6 h-6 bg-white/5 rounded-lg p-[3px]">
              <svg
                className="p-1 w-full h-full"
                width={199}
                height={199}
                viewBox="0 0 199 199"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_3851_32)">
                  <path
                    d="M29.3969 169.3L0.296875 99.2L29.2969 29L99.3969 0L169.497 29L198.597 99.1L169.597 169.2L99.4969 198.3L29.3969 169.3Z"
                    fill="#F44F52"
                  />
                  <path
                    d="M48.0016 150.6L26.6016 99.1998L47.9016 47.5998L99.4016 26.2998L150.902 47.5998L172.302 99.0998L151.002 150.6L99.5016 172L48.0016 150.6Z"
                    fill="#FF6E6E"
                  />
                  <path
                    d="M99.5 198.3V172L151 150.6L169.6 169.2L99.5 198.3Z"
                    fill="#FF6E6E"
                  />
                  <path
                    d="M99.4985 198.3V172L47.9985 150.6L29.3984 169.2L99.4985 198.3Z"
                    fill="#FF514B"
                  />
                  <path
                    d="M169.6 169.2L151 150.6L172.3 99.0996H198.6L169.6 169.2Z"
                    fill="#FF514B"
                  />
                  <path
                    opacity="0.3"
                    d="M29.3969 169.3L47.9969 150.7L26.6969 99.1996L0.296875 99.0996L29.3969 169.3Z"
                    fill="white"
                  />
                  <path
                    opacity="0.3"
                    d="M198.598 99.1H172.298L150.898 47.6L169.498 29L198.598 99.1Z"
                    fill="white"
                  />
                  <g opacity="0.3">
                    <path
                      d="M29.2969 29L47.8969 47.6L26.5969 99.2H0.296875L29.2969 29Z"
                      fill="#FF6E6E"
                    />
                  </g>
                  <path
                    opacity="0.3"
                    d="M99.4047 0V26.3L47.9047 47.6L29.3047 29L99.4047 0Z"
                    fill="white"
                  />
                  <g opacity="0.3">
                    <path
                      d="M73.3984 37.1002L33.8984 116.7L37.2985 125L82.8984 33.2002L73.3984 37.1002Z"
                      fill="white"
                    />
                    <path
                      d="M123.798 36.3994L63.8984 157.199L70.1985 159.799L130.098 38.9994L123.798 36.3994Z"
                      fill="white"
                    />
                    <path
                      d="M162.098 74.5L117.398 164.5L126.898 160.6L165.498 82.8L162.098 74.5Z"
                      fill="white"
                    />
                    <path
                      d="M99.4 26.2998L97 27.2998L42.5 137.3L48 150.6L59 155.2L119 34.3998L99.4 26.2998Z"
                      fill="white"
                    />
                    <path
                      d="M150.903 47.5998L146.603 45.7998L86.7031 166.7L99.5031 172L103.003 170.5L156.803 61.7998L150.903 47.5998Z"
                      fill="white"
                    />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_3851_32">
                    <rect width={199} height={199} fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-0.5">
          <div className="rounded-full">
            <div className="w-6 h-6 bg-white/5 rounded-lg p-[3px]">
              <svg
                className="p-1 w-full h-full"
                width={199}
                height={199}
                viewBox="0 0 199 199"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_3851_14)">
                  <path
                    d="M29.3969 169.3L0.296875 99.2L29.2969 29L99.3969 0L169.497 29L198.597 99.1L169.597 169.2L99.4969 198.3L29.3969 169.3Z"
                    fill="#FFB240"
                  />
                  <path
                    d="M48.0016 150.6L26.6016 99.1998L47.9016 47.5998L99.4016 26.2998L150.902 47.5998L172.302 99.0998L151.002 150.6L99.5016 172L48.0016 150.6Z"
                    fill="#FCBA63"
                  />
                  <path
                    d="M99.5 198.3V172L151 150.6L169.6 169.2L99.5 198.3Z"
                    fill="#DE9A3B"
                  />
                  <path
                    d="M99.4985 198.3V172L47.9985 150.6L29.3984 169.2L99.4985 198.3Z"
                    fill="#E48914"
                  />
                  <path
                    d="M169.6 169.2L151 150.6L172.3 99.0996H198.6L169.6 169.2Z"
                    fill="#E48914"
                  />
                  <path
                    opacity="0.3"
                    d="M29.3969 169.3L47.9969 150.7L26.6969 99.1996L0.296875 99.0996L29.3969 169.3Z"
                    fill="white"
                  />
                  <path
                    opacity="0.3"
                    d="M198.598 99.1H172.298L150.898 47.6L169.498 29L198.598 99.1Z"
                    fill="white"
                  />
                  <g opacity="0.3">
                    <path
                      d="M29.2969 29L47.8969 47.6L26.5969 99.2H0.296875L29.2969 29Z"
                      fill="#FCBA63"
                    />
                  </g>
                  <path
                    opacity="0.3"
                    d="M99.4047 0V26.3L47.9047 47.6L29.3047 29L99.4047 0Z"
                    fill="white"
                  />
                  <g opacity="0.3">
                    <path
                      d="M73.3984 37.1002L33.8984 116.7L37.2985 125L82.8984 33.2002L73.3984 37.1002Z"
                      fill="white"
                    />
                    <path
                      d="M123.798 36.3994L63.8984 157.199L70.1985 159.799L130.098 38.9994L123.798 36.3994Z"
                      fill="white"
                    />
                    <path
                      d="M162.098 74.5L117.398 164.5L126.898 160.6L165.498 82.8L162.098 74.5Z"
                      fill="white"
                    />
                    <path
                      d="M99.4 26.2998L97 27.2998L42.5 137.3L48 150.6L59 155.2L119 34.3998L99.4 26.2998Z"
                      fill="white"
                    />
                    <path
                      d="M150.903 47.5998L146.603 45.7998L86.7031 166.7L99.5031 172L103.003 170.5L156.803 61.7998L150.903 47.5998Z"
                      fill="white"
                    />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_3851_14">
                    <rect width={199} height={199} fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-0.5">
          <div className="rounded-full">
            <div className="w-6 h-6 bg-white/5 rounded-lg p-[3px]">
              <svg
                className="p-1 w-full h-full"
                width={199}
                height={199}
                viewBox="0 0 199 199"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_3851_32)">
                  <path
                    d="M29.3969 169.3L0.296875 99.2L29.2969 29L99.3969 0L169.497 29L198.597 99.1L169.597 169.2L99.4969 198.3L29.3969 169.3Z"
                    fill="#F44F52"
                  />
                  <path
                    d="M48.0016 150.6L26.6016 99.1998L47.9016 47.5998L99.4016 26.2998L150.902 47.5998L172.302 99.0998L151.002 150.6L99.5016 172L48.0016 150.6Z"
                    fill="#FF6E6E"
                  />
                  <path
                    d="M99.5 198.3V172L151 150.6L169.6 169.2L99.5 198.3Z"
                    fill="#FF6E6E"
                  />
                  <path
                    d="M99.4985 198.3V172L47.9985 150.6L29.3984 169.2L99.4985 198.3Z"
                    fill="#FF514B"
                  />
                  <path
                    d="M169.6 169.2L151 150.6L172.3 99.0996H198.6L169.6 169.2Z"
                    fill="#FF514B"
                  />
                  <path
                    opacity="0.3"
                    d="M29.3969 169.3L47.9969 150.7L26.6969 99.1996L0.296875 99.0996L29.3969 169.3Z"
                    fill="white"
                  />
                  <path
                    opacity="0.3"
                    d="M198.598 99.1H172.298L150.898 47.6L169.498 29L198.598 99.1Z"
                    fill="white"
                  />
                  <g opacity="0.3">
                    <path
                      d="M29.2969 29L47.8969 47.6L26.5969 99.2H0.296875L29.2969 29Z"
                      fill="#FF6E6E"
                    />
                  </g>
                  <path
                    opacity="0.3"
                    d="M99.4047 0V26.3L47.9047 47.6L29.3047 29L99.4047 0Z"
                    fill="white"
                  />
                  <g opacity="0.3">
                    <path
                      d="M73.3984 37.1002L33.8984 116.7L37.2985 125L82.8984 33.2002L73.3984 37.1002Z"
                      fill="white"
                    />
                    <path
                      d="M123.798 36.3994L63.8984 157.199L70.1985 159.799L130.098 38.9994L123.798 36.3994Z"
                      fill="white"
                    />
                    <path
                      d="M162.098 74.5L117.398 164.5L126.898 160.6L165.498 82.8L162.098 74.5Z"
                      fill="white"
                    />
                    <path
                      d="M99.4 26.2998L97 27.2998L42.5 137.3L48 150.6L59 155.2L119 34.3998L99.4 26.2998Z"
                      fill="white"
                    />
                    <path
                      d="M150.903 47.5998L146.603 45.7998L86.7031 166.7L99.5031 172L103.003 170.5L156.803 61.7998L150.903 47.5998Z"
                      fill="white"
                    />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_3851_32">
                    <rect width={199} height={199} fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-0.5">
          <div className="rounded-full">
            <div className="w-6 h-6 bg-white/5 rounded-lg p-[3px]">
              <svg
                className="p-1 w-full h-full"
                width={199}
                height={199}
                viewBox="0 0 199 199"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_3851_14)">
                  <path
                    d="M29.3969 169.3L0.296875 99.2L29.2969 29L99.3969 0L169.497 29L198.597 99.1L169.597 169.2L99.4969 198.3L29.3969 169.3Z"
                    fill="#FFB240"
                  />
                  <path
                    d="M48.0016 150.6L26.6016 99.1998L47.9016 47.5998L99.4016 26.2998L150.902 47.5998L172.302 99.0998L151.002 150.6L99.5016 172L48.0016 150.6Z"
                    fill="#FCBA63"
                  />
                  <path
                    d="M99.5 198.3V172L151 150.6L169.6 169.2L99.5 198.3Z"
                    fill="#DE9A3B"
                  />
                  <path
                    d="M99.4985 198.3V172L47.9985 150.6L29.3984 169.2L99.4985 198.3Z"
                    fill="#E48914"
                  />
                  <path
                    d="M169.6 169.2L151 150.6L172.3 99.0996H198.6L169.6 169.2Z"
                    fill="#E48914"
                  />
                  <path
                    opacity="0.3"
                    d="M29.3969 169.3L47.9969 150.7L26.6969 99.1996L0.296875 99.0996L29.3969 169.3Z"
                    fill="white"
                  />
                  <path
                    opacity="0.3"
                    d="M198.598 99.1H172.298L150.898 47.6L169.498 29L198.598 99.1Z"
                    fill="white"
                  />
                  <g opacity="0.3">
                    <path
                      d="M29.2969 29L47.8969 47.6L26.5969 99.2H0.296875L29.2969 29Z"
                      fill="#FCBA63"
                    />
                  </g>
                  <path
                    opacity="0.3"
                    d="M99.4047 0V26.3L47.9047 47.6L29.3047 29L99.4047 0Z"
                    fill="white"
                  />
                  <g opacity="0.3">
                    <path
                      d="M73.3984 37.1002L33.8984 116.7L37.2985 125L82.8984 33.2002L73.3984 37.1002Z"
                      fill="white"
                    />
                    <path
                      d="M123.798 36.3994L63.8984 157.199L70.1985 159.799L130.098 38.9994L123.798 36.3994Z"
                      fill="white"
                    />
                    <path
                      d="M162.098 74.5L117.398 164.5L126.898 160.6L165.498 82.8L162.098 74.5Z"
                      fill="white"
                    />
                    <path
                      d="M99.4 26.2998L97 27.2998L42.5 137.3L48 150.6L59 155.2L119 34.3998L99.4 26.2998Z"
                      fill="white"
                    />
                    <path
                      d="M150.903 47.5998L146.603 45.7998L86.7031 166.7L99.5031 172L103.003 170.5L156.803 61.7998L150.903 47.5998Z"
                      fill="white"
                    />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_3851_14">
                    <rect width={199} height={199} fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-0.5">
          <div className="rounded-full">
            <div className="w-6 h-6 bg-white/5 rounded-lg p-[3px]">
              <svg
                className="p-1 w-full h-full"
                width={199}
                height={199}
                viewBox="0 0 199 199"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_3851_32)">
                  <path
                    d="M29.3969 169.3L0.296875 99.2L29.2969 29L99.3969 0L169.497 29L198.597 99.1L169.597 169.2L99.4969 198.3L29.3969 169.3Z"
                    fill="#F44F52"
                  />
                  <path
                    d="M48.0016 150.6L26.6016 99.1998L47.9016 47.5998L99.4016 26.2998L150.902 47.5998L172.302 99.0998L151.002 150.6L99.5016 172L48.0016 150.6Z"
                    fill="#FF6E6E"
                  />
                  <path
                    d="M99.5 198.3V172L151 150.6L169.6 169.2L99.5 198.3Z"
                    fill="#FF6E6E"
                  />
                  <path
                    d="M99.4985 198.3V172L47.9985 150.6L29.3984 169.2L99.4985 198.3Z"
                    fill="#FF514B"
                  />
                  <path
                    d="M169.6 169.2L151 150.6L172.3 99.0996H198.6L169.6 169.2Z"
                    fill="#FF514B"
                  />
                  <path
                    opacity="0.3"
                    d="M29.3969 169.3L47.9969 150.7L26.6969 99.1996L0.296875 99.0996L29.3969 169.3Z"
                    fill="white"
                  />
                  <path
                    opacity="0.3"
                    d="M198.598 99.1H172.298L150.898 47.6L169.498 29L198.598 99.1Z"
                    fill="white"
                  />
                  <g opacity="0.3">
                    <path
                      d="M29.2969 29L47.8969 47.6L26.5969 99.2H0.296875L29.2969 29Z"
                      fill="#FF6E6E"
                    />
                  </g>
                  <path
                    opacity="0.3"
                    d="M99.4047 0V26.3L47.9047 47.6L29.3047 29L99.4047 0Z"
                    fill="white"
                  />
                  <g opacity="0.3">
                    <path
                      d="M73.3984 37.1002L33.8984 116.7L37.2985 125L82.8984 33.2002L73.3984 37.1002Z"
                      fill="white"
                    />
                    <path
                      d="M123.798 36.3994L63.8984 157.199L70.1985 159.799L130.098 38.9994L123.798 36.3994Z"
                      fill="white"
                    />
                    <path
                      d="M162.098 74.5L117.398 164.5L126.898 160.6L165.498 82.8L162.098 74.5Z"
                      fill="white"
                    />
                    <path
                      d="M99.4 26.2998L97 27.2998L42.5 137.3L48 150.6L59 155.2L119 34.3998L99.4 26.2998Z"
                      fill="white"
                    />
                    <path
                      d="M150.903 47.5998L146.603 45.7998L86.7031 166.7L99.5031 172L103.003 170.5L156.803 61.7998L150.903 47.5998Z"
                      fill="white"
                    />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_3851_32">
                    <rect width={199} height={199} fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
          <div className="rounded-full">
            <div className="w-6 h-6 bg-white/5 rounded-lg p-[3px]">
              <svg
                className="p-1 w-full h-full"
                width={199}
                height={199}
                viewBox="0 0 199 199"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_3851_32)">
                  <path
                    d="M29.3969 169.3L0.296875 99.2L29.2969 29L99.3969 0L169.497 29L198.597 99.1L169.597 169.2L99.4969 198.3L29.3969 169.3Z"
                    fill="#F44F52"
                  />
                  <path
                    d="M48.0016 150.6L26.6016 99.1998L47.9016 47.5998L99.4016 26.2998L150.902 47.5998L172.302 99.0998L151.002 150.6L99.5016 172L48.0016 150.6Z"
                    fill="#FF6E6E"
                  />
                  <path
                    d="M99.5 198.3V172L151 150.6L169.6 169.2L99.5 198.3Z"
                    fill="#FF6E6E"
                  />
                  <path
                    d="M99.4985 198.3V172L47.9985 150.6L29.3984 169.2L99.4985 198.3Z"
                    fill="#FF514B"
                  />
                  <path
                    d="M169.6 169.2L151 150.6L172.3 99.0996H198.6L169.6 169.2Z"
                    fill="#FF514B"
                  />
                  <path
                    opacity="0.3"
                    d="M29.3969 169.3L47.9969 150.7L26.6969 99.1996L0.296875 99.0996L29.3969 169.3Z"
                    fill="white"
                  />
                  <path
                    opacity="0.3"
                    d="M198.598 99.1H172.298L150.898 47.6L169.498 29L198.598 99.1Z"
                    fill="white"
                  />
                  <g opacity="0.3">
                    <path
                      d="M29.2969 29L47.8969 47.6L26.5969 99.2H0.296875L29.2969 29Z"
                      fill="#FF6E6E"
                    />
                  </g>
                  <path
                    opacity="0.3"
                    d="M99.4047 0V26.3L47.9047 47.6L29.3047 29L99.4047 0Z"
                    fill="white"
                  />
                  <g opacity="0.3">
                    <path
                      d="M73.3984 37.1002L33.8984 116.7L37.2985 125L82.8984 33.2002L73.3984 37.1002Z"
                      fill="white"
                    />
                    <path
                      d="M123.798 36.3994L63.8984 157.199L70.1985 159.799L130.098 38.9994L123.798 36.3994Z"
                      fill="white"
                    />
                    <path
                      d="M162.098 74.5L117.398 164.5L126.898 160.6L165.498 82.8L162.098 74.5Z"
                      fill="white"
                    />
                    <path
                      d="M99.4 26.2998L97 27.2998L42.5 137.3L48 150.6L59 155.2L119 34.3998L99.4 26.2998Z"
                      fill="white"
                    />
                    <path
                      d="M150.903 47.5998L146.603 45.7998L86.7031 166.7L99.5031 172L103.003 170.5L156.803 61.7998L150.903 47.5998Z"
                      fill="white"
                    />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_3851_32">
                    <rect width={199} height={199} fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
          <div className="rounded-full">
            <div className="w-6 h-6 bg-white/5 rounded-lg p-[3px]">
              <svg
                className="p-1 w-full h-full"
                width={199}
                height={199}
                viewBox="0 0 199 199"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_3851_32)">
                  <path
                    d="M29.3969 169.3L0.296875 99.2L29.2969 29L99.3969 0L169.497 29L198.597 99.1L169.597 169.2L99.4969 198.3L29.3969 169.3Z"
                    fill="#F44F52"
                  />
                  <path
                    d="M48.0016 150.6L26.6016 99.1998L47.9016 47.5998L99.4016 26.2998L150.902 47.5998L172.302 99.0998L151.002 150.6L99.5016 172L48.0016 150.6Z"
                    fill="#FF6E6E"
                  />
                  <path
                    d="M99.5 198.3V172L151 150.6L169.6 169.2L99.5 198.3Z"
                    fill="#FF6E6E"
                  />
                  <path
                    d="M99.4985 198.3V172L47.9985 150.6L29.3984 169.2L99.4985 198.3Z"
                    fill="#FF514B"
                  />
                  <path
                    d="M169.6 169.2L151 150.6L172.3 99.0996H198.6L169.6 169.2Z"
                    fill="#FF514B"
                  />
                  <path
                    opacity="0.3"
                    d="M29.3969 169.3L47.9969 150.7L26.6969 99.1996L0.296875 99.0996L29.3969 169.3Z"
                    fill="white"
                  />
                  <path
                    opacity="0.3"
                    d="M198.598 99.1H172.298L150.898 47.6L169.498 29L198.598 99.1Z"
                    fill="white"
                  />
                  <g opacity="0.3">
                    <path
                      d="M29.2969 29L47.8969 47.6L26.5969 99.2H0.296875L29.2969 29Z"
                      fill="#FF6E6E"
                    />
                  </g>
                  <path
                    opacity="0.3"
                    d="M99.4047 0V26.3L47.9047 47.6L29.3047 29L99.4047 0Z"
                    fill="white"
                  />
                  <g opacity="0.3">
                    <path
                      d="M73.3984 37.1002L33.8984 116.7L37.2985 125L82.8984 33.2002L73.3984 37.1002Z"
                      fill="white"
                    />
                    <path
                      d="M123.798 36.3994L63.8984 157.199L70.1985 159.799L130.098 38.9994L123.798 36.3994Z"
                      fill="white"
                    />
                    <path
                      d="M162.098 74.5L117.398 164.5L126.898 160.6L165.498 82.8L162.098 74.5Z"
                      fill="white"
                    />
                    <path
                      d="M99.4 26.2998L97 27.2998L42.5 137.3L48 150.6L59 155.2L119 34.3998L99.4 26.2998Z"
                      fill="white"
                    />
                    <path
                      d="M150.903 47.5998L146.603 45.7998L86.7031 166.7L99.5031 172L103.003 170.5L156.803 61.7998L150.903 47.5998Z"
                      fill="white"
                    />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_3851_32">
                    <rect width={199} height={199} fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-0.5">
          <div className="rounded-full">
            <div className="w-6 h-6 bg-white/5 rounded-lg p-[3px]">
              <svg
                className="p-1 w-full h-full"
                width={199}
                height={199}
                viewBox="0 0 199 199"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_3851_14)">
                  <path
                    d="M29.3969 169.3L0.296875 99.2L29.2969 29L99.3969 0L169.497 29L198.597 99.1L169.597 169.2L99.4969 198.3L29.3969 169.3Z"
                    fill="#FFB240"
                  />
                  <path
                    d="M48.0016 150.6L26.6016 99.1998L47.9016 47.5998L99.4016 26.2998L150.902 47.5998L172.302 99.0998L151.002 150.6L99.5016 172L48.0016 150.6Z"
                    fill="#FCBA63"
                  />
                  <path
                    d="M99.5 198.3V172L151 150.6L169.6 169.2L99.5 198.3Z"
                    fill="#DE9A3B"
                  />
                  <path
                    d="M99.4985 198.3V172L47.9985 150.6L29.3984 169.2L99.4985 198.3Z"
                    fill="#E48914"
                  />
                  <path
                    d="M169.6 169.2L151 150.6L172.3 99.0996H198.6L169.6 169.2Z"
                    fill="#E48914"
                  />
                  <path
                    opacity="0.3"
                    d="M29.3969 169.3L47.9969 150.7L26.6969 99.1996L0.296875 99.0996L29.3969 169.3Z"
                    fill="white"
                  />
                  <path
                    opacity="0.3"
                    d="M198.598 99.1H172.298L150.898 47.6L169.498 29L198.598 99.1Z"
                    fill="white"
                  />
                  <g opacity="0.3">
                    <path
                      d="M29.2969 29L47.8969 47.6L26.5969 99.2H0.296875L29.2969 29Z"
                      fill="#FCBA63"
                    />
                  </g>
                  <path
                    opacity="0.3"
                    d="M99.4047 0V26.3L47.9047 47.6L29.3047 29L99.4047 0Z"
                    fill="white"
                  />
                  <g opacity="0.3">
                    <path
                      d="M73.3984 37.1002L33.8984 116.7L37.2985 125L82.8984 33.2002L73.3984 37.1002Z"
                      fill="white"
                    />
                    <path
                      d="M123.798 36.3994L63.8984 157.199L70.1985 159.799L130.098 38.9994L123.798 36.3994Z"
                      fill="white"
                    />
                    <path
                      d="M162.098 74.5L117.398 164.5L126.898 160.6L165.498 82.8L162.098 74.5Z"
                      fill="white"
                    />
                    <path
                      d="M99.4 26.2998L97 27.2998L42.5 137.3L48 150.6L59 155.2L119 34.3998L99.4 26.2998Z"
                      fill="white"
                    />
                    <path
                      d="M150.903 47.5998L146.603 45.7998L86.7031 166.7L99.5031 172L103.003 170.5L156.803 61.7998L150.903 47.5998Z"
                      fill="white"
                    />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_3851_14">
                    <rect width={199} height={199} fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
          <div className="rounded-full">
            <div className="w-6 h-6 bg-white/5 rounded-lg p-[3px]">
              <svg
                className="p-1 w-full h-full"
                width={199}
                height={199}
                viewBox="0 0 199 199"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_3851_14)">
                  <path
                    d="M29.3969 169.3L0.296875 99.2L29.2969 29L99.3969 0L169.497 29L198.597 99.1L169.597 169.2L99.4969 198.3L29.3969 169.3Z"
                    fill="#FFB240"
                  />
                  <path
                    d="M48.0016 150.6L26.6016 99.1998L47.9016 47.5998L99.4016 26.2998L150.902 47.5998L172.302 99.0998L151.002 150.6L99.5016 172L48.0016 150.6Z"
                    fill="#FCBA63"
                  />
                  <path
                    d="M99.5 198.3V172L151 150.6L169.6 169.2L99.5 198.3Z"
                    fill="#DE9A3B"
                  />
                  <path
                    d="M99.4985 198.3V172L47.9985 150.6L29.3984 169.2L99.4985 198.3Z"
                    fill="#E48914"
                  />
                  <path
                    d="M169.6 169.2L151 150.6L172.3 99.0996H198.6L169.6 169.2Z"
                    fill="#E48914"
                  />
                  <path
                    opacity="0.3"
                    d="M29.3969 169.3L47.9969 150.7L26.6969 99.1996L0.296875 99.0996L29.3969 169.3Z"
                    fill="white"
                  />
                  <path
                    opacity="0.3"
                    d="M198.598 99.1H172.298L150.898 47.6L169.498 29L198.598 99.1Z"
                    fill="white"
                  />
                  <g opacity="0.3">
                    <path
                      d="M29.2969 29L47.8969 47.6L26.5969 99.2H0.296875L29.2969 29Z"
                      fill="#FCBA63"
                    />
                  </g>
                  <path
                    opacity="0.3"
                    d="M99.4047 0V26.3L47.9047 47.6L29.3047 29L99.4047 0Z"
                    fill="white"
                  />
                  <g opacity="0.3">
                    <path
                      d="M73.3984 37.1002L33.8984 116.7L37.2985 125L82.8984 33.2002L73.3984 37.1002Z"
                      fill="white"
                    />
                    <path
                      d="M123.798 36.3994L63.8984 157.199L70.1985 159.799L130.098 38.9994L123.798 36.3994Z"
                      fill="white"
                    />
                    <path
                      d="M162.098 74.5L117.398 164.5L126.898 160.6L165.498 82.8L162.098 74.5Z"
                      fill="white"
                    />
                    <path
                      d="M99.4 26.2998L97 27.2998L42.5 137.3L48 150.6L59 155.2L119 34.3998L99.4 26.2998Z"
                      fill="white"
                    />
                    <path
                      d="M150.903 47.5998L146.603 45.7998L86.7031 166.7L99.5031 172L103.003 170.5L156.803 61.7998L150.903 47.5998Z"
                      fill="white"
                    />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_3851_14">
                    <rect width={199} height={199} fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-0.5">
          <div className="rounded-full">
            <div className="w-6 h-6 bg-white/5 rounded-lg p-[3px]">
              <svg
                className="p-1 w-full h-full"
                width={199}
                height={199}
                viewBox="0 0 199 199"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_3851_32)">
                  <path
                    d="M29.3969 169.3L0.296875 99.2L29.2969 29L99.3969 0L169.497 29L198.597 99.1L169.597 169.2L99.4969 198.3L29.3969 169.3Z"
                    fill="#F44F52"
                  />
                  <path
                    d="M48.0016 150.6L26.6016 99.1998L47.9016 47.5998L99.4016 26.2998L150.902 47.5998L172.302 99.0998L151.002 150.6L99.5016 172L48.0016 150.6Z"
                    fill="#FF6E6E"
                  />
                  <path
                    d="M99.5 198.3V172L151 150.6L169.6 169.2L99.5 198.3Z"
                    fill="#FF6E6E"
                  />
                  <path
                    d="M99.4985 198.3V172L47.9985 150.6L29.3984 169.2L99.4985 198.3Z"
                    fill="#FF514B"
                  />
                  <path
                    d="M169.6 169.2L151 150.6L172.3 99.0996H198.6L169.6 169.2Z"
                    fill="#FF514B"
                  />
                  <path
                    opacity="0.3"
                    d="M29.3969 169.3L47.9969 150.7L26.6969 99.1996L0.296875 99.0996L29.3969 169.3Z"
                    fill="white"
                  />
                  <path
                    opacity="0.3"
                    d="M198.598 99.1H172.298L150.898 47.6L169.498 29L198.598 99.1Z"
                    fill="white"
                  />
                  <g opacity="0.3">
                    <path
                      d="M29.2969 29L47.8969 47.6L26.5969 99.2H0.296875L29.2969 29Z"
                      fill="#FF6E6E"
                    />
                  </g>
                  <path
                    opacity="0.3"
                    d="M99.4047 0V26.3L47.9047 47.6L29.3047 29L99.4047 0Z"
                    fill="white"
                  />
                  <g opacity="0.3">
                    <path
                      d="M73.3984 37.1002L33.8984 116.7L37.2985 125L82.8984 33.2002L73.3984 37.1002Z"
                      fill="white"
                    />
                    <path
                      d="M123.798 36.3994L63.8984 157.199L70.1985 159.799L130.098 38.9994L123.798 36.3994Z"
                      fill="white"
                    />
                    <path
                      d="M162.098 74.5L117.398 164.5L126.898 160.6L165.498 82.8L162.098 74.5Z"
                      fill="white"
                    />
                    <path
                      d="M99.4 26.2998L97 27.2998L42.5 137.3L48 150.6L59 155.2L119 34.3998L99.4 26.2998Z"
                      fill="white"
                    />
                    <path
                      d="M150.903 47.5998L146.603 45.7998L86.7031 166.7L99.5031 172L103.003 170.5L156.803 61.7998L150.903 47.5998Z"
                      fill="white"
                    />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_3851_32">
                    <rect width={199} height={199} fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
          <div className="rounded-full">
            <div className="w-6 h-6 bg-white/5 rounded-lg p-[3px]">
              <svg
                className="p-1 w-full h-full"
                width={199}
                height={199}
                viewBox="0 0 199 199"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_3851_32)">
                  <path
                    d="M29.3969 169.3L0.296875 99.2L29.2969 29L99.3969 0L169.497 29L198.597 99.1L169.597 169.2L99.4969 198.3L29.3969 169.3Z"
                    fill="#F44F52"
                  />
                  <path
                    d="M48.0016 150.6L26.6016 99.1998L47.9016 47.5998L99.4016 26.2998L150.902 47.5998L172.302 99.0998L151.002 150.6L99.5016 172L48.0016 150.6Z"
                    fill="#FF6E6E"
                  />
                  <path
                    d="M99.5 198.3V172L151 150.6L169.6 169.2L99.5 198.3Z"
                    fill="#FF6E6E"
                  />
                  <path
                    d="M99.4985 198.3V172L47.9985 150.6L29.3984 169.2L99.4985 198.3Z"
                    fill="#FF514B"
                  />
                  <path
                    d="M169.6 169.2L151 150.6L172.3 99.0996H198.6L169.6 169.2Z"
                    fill="#FF514B"
                  />
                  <path
                    opacity="0.3"
                    d="M29.3969 169.3L47.9969 150.7L26.6969 99.1996L0.296875 99.0996L29.3969 169.3Z"
                    fill="white"
                  />
                  <path
                    opacity="0.3"
                    d="M198.598 99.1H172.298L150.898 47.6L169.498 29L198.598 99.1Z"
                    fill="white"
                  />
                  <g opacity="0.3">
                    <path
                      d="M29.2969 29L47.8969 47.6L26.5969 99.2H0.296875L29.2969 29Z"
                      fill="#FF6E6E"
                    />
                  </g>
                  <path
                    opacity="0.3"
                    d="M99.4047 0V26.3L47.9047 47.6L29.3047 29L99.4047 0Z"
                    fill="white"
                  />
                  <g opacity="0.3">
                    <path
                      d="M73.3984 37.1002L33.8984 116.7L37.2985 125L82.8984 33.2002L73.3984 37.1002Z"
                      fill="white"
                    />
                    <path
                      d="M123.798 36.3994L63.8984 157.199L70.1985 159.799L130.098 38.9994L123.798 36.3994Z"
                      fill="white"
                    />
                    <path
                      d="M162.098 74.5L117.398 164.5L126.898 160.6L165.498 82.8L162.098 74.5Z"
                      fill="white"
                    />
                    <path
                      d="M99.4 26.2998L97 27.2998L42.5 137.3L48 150.6L59 155.2L119 34.3998L99.4 26.2998Z"
                      fill="white"
                    />
                    <path
                      d="M150.903 47.5998L146.603 45.7998L86.7031 166.7L99.5031 172L103.003 170.5L156.803 61.7998L150.903 47.5998Z"
                      fill="white"
                    />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_3851_32">
                    <rect width={199} height={199} fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
          <div className="rounded-full">
            <div className="w-6 h-6 bg-white/5 rounded-lg p-[3px]">
              <svg
                className="p-1 w-full h-full"
                width={199}
                height={199}
                viewBox="0 0 199 199"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_3851_32)">
                  <path
                    d="M29.3969 169.3L0.296875 99.2L29.2969 29L99.3969 0L169.497 29L198.597 99.1L169.597 169.2L99.4969 198.3L29.3969 169.3Z"
                    fill="#F44F52"
                  />
                  <path
                    d="M48.0016 150.6L26.6016 99.1998L47.9016 47.5998L99.4016 26.2998L150.902 47.5998L172.302 99.0998L151.002 150.6L99.5016 172L48.0016 150.6Z"
                    fill="#FF6E6E"
                  />
                  <path
                    d="M99.5 198.3V172L151 150.6L169.6 169.2L99.5 198.3Z"
                    fill="#FF6E6E"
                  />
                  <path
                    d="M99.4985 198.3V172L47.9985 150.6L29.3984 169.2L99.4985 198.3Z"
                    fill="#FF514B"
                  />
                  <path
                    d="M169.6 169.2L151 150.6L172.3 99.0996H198.6L169.6 169.2Z"
                    fill="#FF514B"
                  />
                  <path
                    opacity="0.3"
                    d="M29.3969 169.3L47.9969 150.7L26.6969 99.1996L0.296875 99.0996L29.3969 169.3Z"
                    fill="white"
                  />
                  <path
                    opacity="0.3"
                    d="M198.598 99.1H172.298L150.898 47.6L169.498 29L198.598 99.1Z"
                    fill="white"
                  />
                  <g opacity="0.3">
                    <path
                      d="M29.2969 29L47.8969 47.6L26.5969 99.2H0.296875L29.2969 29Z"
                      fill="#FF6E6E"
                    />
                  </g>
                  <path
                    opacity="0.3"
                    d="M99.4047 0V26.3L47.9047 47.6L29.3047 29L99.4047 0Z"
                    fill="white"
                  />
                  <g opacity="0.3">
                    <path
                      d="M73.3984 37.1002L33.8984 116.7L37.2985 125L82.8984 33.2002L73.3984 37.1002Z"
                      fill="white"
                    />
                    <path
                      d="M123.798 36.3994L63.8984 157.199L70.1985 159.799L130.098 38.9994L123.798 36.3994Z"
                      fill="white"
                    />
                    <path
                      d="M162.098 74.5L117.398 164.5L126.898 160.6L165.498 82.8L162.098 74.5Z"
                      fill="white"
                    />
                    <path
                      d="M99.4 26.2998L97 27.2998L42.5 137.3L48 150.6L59 155.2L119 34.3998L99.4 26.2998Z"
                      fill="white"
                    />
                    <path
                      d="M150.903 47.5998L146.603 45.7998L86.7031 166.7L99.5031 172L103.003 170.5L156.803 61.7998L150.903 47.5998Z"
                      fill="white"
                    />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_3851_32">
                    <rect width={199} height={199} fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-0.5">
          <div className="rounded-full">
            <div className="w-6 h-6 bg-white/5 rounded-lg p-[3px]">
              <svg
                className="p-1 w-full h-full"
                width={199}
                height={199}
                viewBox="0 0 199 199"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_3851_14)">
                  <path
                    d="M29.3969 169.3L0.296875 99.2L29.2969 29L99.3969 0L169.497 29L198.597 99.1L169.597 169.2L99.4969 198.3L29.3969 169.3Z"
                    fill="#FFB240"
                  />
                  <path
                    d="M48.0016 150.6L26.6016 99.1998L47.9016 47.5998L99.4016 26.2998L150.902 47.5998L172.302 99.0998L151.002 150.6L99.5016 172L48.0016 150.6Z"
                    fill="#FCBA63"
                  />
                  <path
                    d="M99.5 198.3V172L151 150.6L169.6 169.2L99.5 198.3Z"
                    fill="#DE9A3B"
                  />
                  <path
                    d="M99.4985 198.3V172L47.9985 150.6L29.3984 169.2L99.4985 198.3Z"
                    fill="#E48914"
                  />
                  <path
                    d="M169.6 169.2L151 150.6L172.3 99.0996H198.6L169.6 169.2Z"
                    fill="#E48914"
                  />
                  <path
                    opacity="0.3"
                    d="M29.3969 169.3L47.9969 150.7L26.6969 99.1996L0.296875 99.0996L29.3969 169.3Z"
                    fill="white"
                  />
                  <path
                    opacity="0.3"
                    d="M198.598 99.1H172.298L150.898 47.6L169.498 29L198.598 99.1Z"
                    fill="white"
                  />
                  <g opacity="0.3">
                    <path
                      d="M29.2969 29L47.8969 47.6L26.5969 99.2H0.296875L29.2969 29Z"
                      fill="#FCBA63"
                    />
                  </g>
                  <path
                    opacity="0.3"
                    d="M99.4047 0V26.3L47.9047 47.6L29.3047 29L99.4047 0Z"
                    fill="white"
                  />
                  <g opacity="0.3">
                    <path
                      d="M73.3984 37.1002L33.8984 116.7L37.2985 125L82.8984 33.2002L73.3984 37.1002Z"
                      fill="white"
                    />
                    <path
                      d="M123.798 36.3994L63.8984 157.199L70.1985 159.799L130.098 38.9994L123.798 36.3994Z"
                      fill="white"
                    />
                    <path
                      d="M162.098 74.5L117.398 164.5L126.898 160.6L165.498 82.8L162.098 74.5Z"
                      fill="white"
                    />
                    <path
                      d="M99.4 26.2998L97 27.2998L42.5 137.3L48 150.6L59 155.2L119 34.3998L99.4 26.2998Z"
                      fill="white"
                    />
                    <path
                      d="M150.903 47.5998L146.603 45.7998L86.7031 166.7L99.5031 172L103.003 170.5L156.803 61.7998L150.903 47.5998Z"
                      fill="white"
                    />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_3851_14">
                    <rect width={199} height={199} fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-0.5">
          <div className="rounded-full">
            <div className="w-6 h-6 bg-white/5 rounded-lg p-[3px]">
              <svg
                className="p-1 w-full h-full"
                width={199}
                height={199}
                viewBox="0 0 199 199"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_3851_32)">
                  <path
                    d="M29.3969 169.3L0.296875 99.2L29.2969 29L99.3969 0L169.497 29L198.597 99.1L169.597 169.2L99.4969 198.3L29.3969 169.3Z"
                    fill="#F44F52"
                  />
                  <path
                    d="M48.0016 150.6L26.6016 99.1998L47.9016 47.5998L99.4016 26.2998L150.902 47.5998L172.302 99.0998L151.002 150.6L99.5016 172L48.0016 150.6Z"
                    fill="#FF6E6E"
                  />
                  <path
                    d="M99.5 198.3V172L151 150.6L169.6 169.2L99.5 198.3Z"
                    fill="#FF6E6E"
                  />
                  <path
                    d="M99.4985 198.3V172L47.9985 150.6L29.3984 169.2L99.4985 198.3Z"
                    fill="#FF514B"
                  />
                  <path
                    d="M169.6 169.2L151 150.6L172.3 99.0996H198.6L169.6 169.2Z"
                    fill="#FF514B"
                  />
                  <path
                    opacity="0.3"
                    d="M29.3969 169.3L47.9969 150.7L26.6969 99.1996L0.296875 99.0996L29.3969 169.3Z"
                    fill="white"
                  />
                  <path
                    opacity="0.3"
                    d="M198.598 99.1H172.298L150.898 47.6L169.498 29L198.598 99.1Z"
                    fill="white"
                  />
                  <g opacity="0.3">
                    <path
                      d="M29.2969 29L47.8969 47.6L26.5969 99.2H0.296875L29.2969 29Z"
                      fill="#FF6E6E"
                    />
                  </g>
                  <path
                    opacity="0.3"
                    d="M99.4047 0V26.3L47.9047 47.6L29.3047 29L99.4047 0Z"
                    fill="white"
                  />
                  <g opacity="0.3">
                    <path
                      d="M73.3984 37.1002L33.8984 116.7L37.2985 125L82.8984 33.2002L73.3984 37.1002Z"
                      fill="white"
                    />
                    <path
                      d="M123.798 36.3994L63.8984 157.199L70.1985 159.799L130.098 38.9994L123.798 36.3994Z"
                      fill="white"
                    />
                    <path
                      d="M162.098 74.5L117.398 164.5L126.898 160.6L165.498 82.8L162.098 74.5Z"
                      fill="white"
                    />
                    <path
                      d="M99.4 26.2998L97 27.2998L42.5 137.3L48 150.6L59 155.2L119 34.3998L99.4 26.2998Z"
                      fill="white"
                    />
                    <path
                      d="M150.903 47.5998L146.603 45.7998L86.7031 166.7L99.5031 172L103.003 170.5L156.803 61.7998L150.903 47.5998Z"
                      fill="white"
                    />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_3851_32">
                    <rect width={199} height={199} fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-0.5">
          <div className="rounded-full">
            <div className="w-6 h-6 bg-white/5 rounded-lg p-[3px]">
              <svg
                className="p-1 w-full h-full"
                width={199}
                height={199}
                viewBox="0 0 199 199"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_3851_14)">
                  <path
                    d="M29.3969 169.3L0.296875 99.2L29.2969 29L99.3969 0L169.497 29L198.597 99.1L169.597 169.2L99.4969 198.3L29.3969 169.3Z"
                    fill="#FFB240"
                  />
                  <path
                    d="M48.0016 150.6L26.6016 99.1998L47.9016 47.5998L99.4016 26.2998L150.902 47.5998L172.302 99.0998L151.002 150.6L99.5016 172L48.0016 150.6Z"
                    fill="#FCBA63"
                  />
                  <path
                    d="M99.5 198.3V172L151 150.6L169.6 169.2L99.5 198.3Z"
                    fill="#DE9A3B"
                  />
                  <path
                    d="M99.4985 198.3V172L47.9985 150.6L29.3984 169.2L99.4985 198.3Z"
                    fill="#E48914"
                  />
                  <path
                    d="M169.6 169.2L151 150.6L172.3 99.0996H198.6L169.6 169.2Z"
                    fill="#E48914"
                  />
                  <path
                    opacity="0.3"
                    d="M29.3969 169.3L47.9969 150.7L26.6969 99.1996L0.296875 99.0996L29.3969 169.3Z"
                    fill="white"
                  />
                  <path
                    opacity="0.3"
                    d="M198.598 99.1H172.298L150.898 47.6L169.498 29L198.598 99.1Z"
                    fill="white"
                  />
                  <g opacity="0.3">
                    <path
                      d="M29.2969 29L47.8969 47.6L26.5969 99.2H0.296875L29.2969 29Z"
                      fill="#FCBA63"
                    />
                  </g>
                  <path
                    opacity="0.3"
                    d="M99.4047 0V26.3L47.9047 47.6L29.3047 29L99.4047 0Z"
                    fill="white"
                  />
                  <g opacity="0.3">
                    <path
                      d="M73.3984 37.1002L33.8984 116.7L37.2985 125L82.8984 33.2002L73.3984 37.1002Z"
                      fill="white"
                    />
                    <path
                      d="M123.798 36.3994L63.8984 157.199L70.1985 159.799L130.098 38.9994L123.798 36.3994Z"
                      fill="white"
                    />
                    <path
                      d="M162.098 74.5L117.398 164.5L126.898 160.6L165.498 82.8L162.098 74.5Z"
                      fill="white"
                    />
                    <path
                      d="M99.4 26.2998L97 27.2998L42.5 137.3L48 150.6L59 155.2L119 34.3998L99.4 26.2998Z"
                      fill="white"
                    />
                    <path
                      d="M150.903 47.5998L146.603 45.7998L86.7031 166.7L99.5031 172L103.003 170.5L156.803 61.7998L150.903 47.5998Z"
                      fill="white"
                    />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_3851_14">
                    <rect width={199} height={199} fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-4 pt-1 px-2">
        <div className="text-sm flex gap-1 items-center">
          <div className="w-6 h-6 bg-white/5 rounded-lg p-[3px]">
            <svg
              className="p-1 w-full h-full"
              width={199}
              height={199}
              viewBox="0 0 199 199"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_3851_14)">
                <path
                  d="M29.3969 169.3L0.296875 99.2L29.2969 29L99.3969 0L169.497 29L198.597 99.1L169.597 169.2L99.4969 198.3L29.3969 169.3Z"
                  fill="#FFB240"
                />
                <path
                  d="M48.0016 150.6L26.6016 99.1998L47.9016 47.5998L99.4016 26.2998L150.902 47.5998L172.302 99.0998L151.002 150.6L99.5016 172L48.0016 150.6Z"
                  fill="#FCBA63"
                />
                <path
                  d="M99.5 198.3V172L151 150.6L169.6 169.2L99.5 198.3Z"
                  fill="#DE9A3B"
                />
                <path
                  d="M99.4985 198.3V172L47.9985 150.6L29.3984 169.2L99.4985 198.3Z"
                  fill="#E48914"
                />
                <path
                  d="M169.6 169.2L151 150.6L172.3 99.0996H198.6L169.6 169.2Z"
                  fill="#E48914"
                />
                <path
                  opacity="0.3"
                  d="M29.3969 169.3L47.9969 150.7L26.6969 99.1996L0.296875 99.0996L29.3969 169.3Z"
                  fill="white"
                />
                <path
                  opacity="0.3"
                  d="M198.598 99.1H172.298L150.898 47.6L169.498 29L198.598 99.1Z"
                  fill="white"
                />
                <g opacity="0.3">
                  <path
                    d="M29.2969 29L47.8969 47.6L26.5969 99.2H0.296875L29.2969 29Z"
                    fill="#FCBA63"
                  />
                </g>
                <path
                  opacity="0.3"
                  d="M99.4047 0V26.3L47.9047 47.6L29.3047 29L99.4047 0Z"
                  fill="white"
                />
                <g opacity="0.3">
                  <path
                    d="M73.3984 37.1002L33.8984 116.7L37.2985 125L82.8984 33.2002L73.3984 37.1002Z"
                    fill="white"
                  />
                  <path
                    d="M123.798 36.3994L63.8984 157.199L70.1985 159.799L130.098 38.9994L123.798 36.3994Z"
                    fill="white"
                  />
                  <path
                    d="M162.098 74.5L117.398 164.5L126.898 160.6L165.498 82.8L162.098 74.5Z"
                    fill="white"
                  />
                  <path
                    d="M99.4 26.2998L97 27.2998L42.5 137.3L48 150.6L59 155.2L119 34.3998L99.4 26.2998Z"
                    fill="white"
                  />
                  <path
                    d="M150.903 47.5998L146.603 45.7998L86.7031 166.7L99.5031 172L103.003 170.5L156.803 61.7998L150.903 47.5998Z"
                    fill="white"
                  />
                </g>
              </g>
              <defs>
                <clipPath id="clip0_3851_14">
                  <rect width={199} height={199} fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="text-sm font-medium text-white">47</div>
        </div>
        <div className="text-sm flex gap-1 items-center">
          <div className="w-6 h-6 bg-white/5 rounded-lg p-[3px]">
            <svg
              className="p-1 w-full h-full"
              width={199}
              height={199}
              viewBox="0 0 199 199"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_3851_32)">
                <path
                  d="M29.3969 169.3L0.296875 99.2L29.2969 29L99.3969 0L169.497 29L198.597 99.1L169.597 169.2L99.4969 198.3L29.3969 169.3Z"
                  fill="#F44F52"
                />
                <path
                  d="M48.0016 150.6L26.6016 99.1998L47.9016 47.5998L99.4016 26.2998L150.902 47.5998L172.302 99.0998L151.002 150.6L99.5016 172L48.0016 150.6Z"
                  fill="#FF6E6E"
                />
                <path
                  d="M99.5 198.3V172L151 150.6L169.6 169.2L99.5 198.3Z"
                  fill="#FF6E6E"
                />
                <path
                  d="M99.4985 198.3V172L47.9985 150.6L29.3984 169.2L99.4985 198.3Z"
                  fill="#FF514B"
                />
                <path
                  d="M169.6 169.2L151 150.6L172.3 99.0996H198.6L169.6 169.2Z"
                  fill="#FF514B"
                />
                <path
                  opacity="0.3"
                  d="M29.3969 169.3L47.9969 150.7L26.6969 99.1996L0.296875 99.0996L29.3969 169.3Z"
                  fill="white"
                />
                <path
                  opacity="0.3"
                  d="M198.598 99.1H172.298L150.898 47.6L169.498 29L198.598 99.1Z"
                  fill="white"
                />
                <g opacity="0.3">
                  <path
                    d="M29.2969 29L47.8969 47.6L26.5969 99.2H0.296875L29.2969 29Z"
                    fill="#FF6E6E"
                  />
                </g>
                <path
                  opacity="0.3"
                  d="M99.4047 0V26.3L47.9047 47.6L29.3047 29L99.4047 0Z"
                  fill="white"
                />
                <g opacity="0.3">
                  <path
                    d="M73.3984 37.1002L33.8984 116.7L37.2985 125L82.8984 33.2002L73.3984 37.1002Z"
                    fill="white"
                  />
                  <path
                    d="M123.798 36.3994L63.8984 157.199L70.1985 159.799L130.098 38.9994L123.798 36.3994Z"
                    fill="white"
                  />
                  <path
                    d="M162.098 74.5L117.398 164.5L126.898 160.6L165.498 82.8L162.098 74.5Z"
                    fill="white"
                  />
                  <path
                    d="M99.4 26.2998L97 27.2998L42.5 137.3L48 150.6L59 155.2L119 34.3998L99.4 26.2998Z"
                    fill="white"
                  />
                  <path
                    d="M150.903 47.5998L146.603 45.7998L86.7031 166.7L99.5031 172L103.003 170.5L156.803 61.7998L150.903 47.5998Z"
                    fill="white"
                  />
                </g>
              </g>
              <defs>
                <clipPath id="clip0_3851_32">
                  <rect width={199} height={199} fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="text-sm font-medium text-white">52</div>
        </div>
        <div className="text-sm flex gap-1 items-center">
          <div className="w-6 h-6 bg-white/5 rounded-lg p-[3px]">
            <svg
              className="p-1 w-full h-full"
              width={194}
              height={194}
              viewBox="0 0 194 194"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_3851_2)">
                <path
                  d="M97.3984 194L0.898438 97.4004L97.3984 0.900391L193.998 97.4004L97.3984 194Z"
                  fill="#2ABFA3"
                />
                <path
                  d="M97.3953 158.2L36.6953 97.4002L97.3953 36.7002L158.195 97.4002L97.3953 158.2Z"
                  fill="#45CFB5"
                />
                <path
                  d="M97.3984 194V158.2L158.198 97.4004H193.998L97.3984 194Z"
                  fill="#09967B"
                />
                <path
                  d="M193.998 97.4004H158.198L97.3984 36.7004V0.900391L193.998 97.4004Z"
                  fill="#1CA289"
                />
                <path
                  d="M0.898438 97.4004H36.6984L97.3984 158.2V194L0.898438 97.4004Z"
                  fill="#1CA289"
                />
                <g opacity="0.3">
                  <path
                    d="M97.3984 36.7002L83.9984 50.1002L49.8984 110.7L53.7984 114.6L97.5984 36.8002L97.3984 36.7002Z"
                    fill="white"
                  />
                  <path
                    d="M119.698 58.9004L75.8984 136.7L79.7984 140.6L123.598 62.8004L119.698 58.9004Z"
                    fill="white"
                  />
                  <path
                    d="M103.503 42.7002L59.7031 120.4L72.9031 133.7L116.703 55.9002L103.503 42.7002Z"
                    fill="white"
                  />
                  <path
                    d="M105.103 150.6L143.403 82.6002L134.003 73.2002L90.2031 151L97.4031 158.2L105.103 150.6Z"
                    fill="white"
                  />
                </g>
              </g>
              <defs>
                <clipPath id="clip0_3851_2">
                  <rect width={194} height={194} fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="text-sm font-medium text-white">1</div>
        </div>
      </div>
    </div>
  );
};

export default NotUsing;
