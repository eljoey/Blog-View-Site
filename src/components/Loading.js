import React from 'react'

const Loading = () => {
  return (
    <>
      <div className="flex justify-center mt-20 mb-3">
        <svg
          className=""
          width={100}
          height={100}
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid"
          display="block"
        >
          <g transform="matrix(.7 0 0 .7 15 15)">
            <animateTransform
              attributeName="transform"
              type="rotate"
              repeatCount="indefinite"
              values="0 50 50;360 50 50"
              keyTimes="0;1"
              dur="1.3888888888888888s"
            />
            <path fillOpacity={0.8} fill="#222" d="M50 50V0a50 50 0 0150 50z" />
          </g>
          <g transform="matrix(.7 0 0 .7 15 15)">
            <animateTransform
              attributeName="transform"
              type="rotate"
              repeatCount="indefinite"
              values="0 50 50;360 50 50"
              keyTimes="0;1"
              dur="1.8518518518518516s"
            />
            <path
              fillOpacity={0.8}
              fill="#00d8ff"
              d="M50 50h50a50 50 0 01-50 50z"
            />
          </g>
          <g transform="matrix(.7 0 0 .7 15 15)">
            <animateTransform
              attributeName="transform"
              type="rotate"
              repeatCount="indefinite"
              values="0 50 50;360 50 50"
              keyTimes="0;1"
              dur="2.7777777777777777s"
            />
            <path fillOpacity={0.8} fill="#222" d="M50 50v50A50 50 0 010 50z" />
          </g>
          <g transform="matrix(.7 0 0 .7 15 15)">
            <animateTransform
              attributeName="transform"
              type="rotate"
              repeatCount="indefinite"
              values="0 50 50;360 50 50"
              keyTimes="0;1"
              dur="5.555555555555555s"
            />
            <path
              fillOpacity={0.8}
              fill="#00d8ff"
              d="M50 50H0A50 50 0 0150 0z"
            />
          </g>
        </svg>
      </div>
      {/* <!-- [ldio] generated by https://loading.io/ --> */}

      <h1 className="text-center">Fetching Blogs from DB.</h1>
    </>
  )
}

export default Loading
