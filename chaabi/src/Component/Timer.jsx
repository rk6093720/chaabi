import React from 'react'
import { useSelector } from 'react-redux'

const Timer = () => {
  const h = useSelector((state)=> state.hour)
  console.log(h);
  return (
    <div>Timer</div>
  )
}

export default Timer