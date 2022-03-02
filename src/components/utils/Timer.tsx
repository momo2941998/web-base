import React, { FC, useState, useRef, useEffect } from 'react'
import * as moment from 'moment'
import momentDurationFormatSetup from 'moment-duration-format'
momentDurationFormatSetup(moment)
interface TimerProps {
  initialSeconds: number,
  onTimeUp?: () => void
}
export const Timer: FC<TimerProps> = (props) => {
  const [seconds, setSeconds] = useState(props.initialSeconds)
  let myInterval = useRef<NodeJS.Timer>()

  useEffect(() => {
    myInterval.current = setInterval(() => {
      if (seconds > 0) setSeconds(seconds - 1)
      if (seconds === 0) {
        props.onTimeUp!()
        if (myInterval.current) {
          clearInterval(myInterval.current)
        }
      }
    }, 1000)
    return () => {
      if (myInterval.current) {
        clearInterval(myInterval.current)
      }
    }
  })
  return (
    <div>
      {moment.duration({
        seconds: seconds
      }).format("h:mm:ss", { trim: false})}
    </div>
  )
}

Timer.defaultProps = {
  onTimeUp: () => {}
}