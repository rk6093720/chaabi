import React from 'react'
import { useSelector } from 'react-redux'

const Timer = () => {
  const h = useSelector((state)=> state.hour);
  const m = useSelector((state)=> state.min);
  const s = useSelector((state)=> state.sec)
  // console.log(h);
  return (
    <div>
        <div>{h}:{m}:{s}</div>
    </div>
  )
}

export default Timer