import React from 'react'

const Loader = () => {
  return (
    <>
<svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
<circle cx="50" cy="50" fill="none" stroke="#ffffff" strokeWidth={'5'} r="23" strokeDasharray={'108.38494654884786 38.12831551628262'}>
  <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1.075268817204301s" values="0 50 50;360 50 50" keyTimes="0;1"></animateTransform>
</circle>
</svg>
    </>
  )
}

export default Loader