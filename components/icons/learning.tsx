import React from 'react'

const Learning = ({ size = 30 as number, ...rest }) => (
  <svg
    width="1024"
    height="1024"
    viewBox="0 0 1024 1024"
    style={{ width: size, height: size }}
    {...rest}
  >
    <g>
      <path
        d="M896 128v832h-672c-53.026 0-96-42.98-96-96s42.974-96 96-96h608v-768h-640c-70.398 0-128 57.6-128 128v768c0 70.4 57.602 128 128 128h768v-896h-64z"
        fill="#DEA54B"
      ></path>
      <path
        d="M224.056 832v0c-0.018 0.002-0.038 0-0.056 0-17.672 0-32 14.326-32 32s14.328 32 32 32c0.018 0 0.038-0.002 0.056-0.002v0.002h607.89v-64h-607.89z"
        fill="#DEA54B"
      ></path>
    </g>
  </svg>
)

export default Learning
