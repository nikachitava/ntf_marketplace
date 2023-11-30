import { useEffect, useState } from "react";
import "./CountdownTimer.css";

interface ICountdownTimer {
  hours: number;
  minutes: number;
  seconds: number;
}

export const CountdownTimer: React.FC<ICountdownTimer> = ({
  hours = 0,
  minutes = 0,
  seconds = 0,
}) => {
  const [time, setTime] = useState<ICountdownTimer>({
    hours,
    minutes,
    seconds,
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Decrease seconds
      if (time.seconds > 0) {
        setTime((prevTime) => ({ ...prevTime, seconds: prevTime.seconds - 1 }));
      } else {
        // Decrease minutes
        if (time.minutes > 0) {
          setTime((prevTime) => ({
            hours: prevTime.hours,
            minutes: prevTime.minutes - 1,
            seconds: 59,
          }));
        } else {
          // Decrease hours
          if (time.hours > 0) {
            setTime((prevTime) => ({
              hours: prevTime.hours - 1,
              minutes: 59,
              seconds: 59,
            }));
          } else {
            // Countdown reached zero, stop the timer
            clearInterval(intervalId);
          }
        }
      }
    }, 1000);

    // Clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, [time]);

  return (
    <div className="auction_timer_container">
      <p className="auction_header">Autction Ends in: </p>
      <div className="clock_display">
        <div className="clock_digis">
          <p className="digit">{`${String(time.hours).padStart(2, "0")}`}</p>
          <h4>:</h4>
          <p className="digit">{`${String(time.minutes).padStart(2, "0")}`}</p>
          <h4>:</h4>
          <p className="digit">{`${String(time.seconds).padStart(2, "0")}`}</p>
        </div>
      </div>
      <div className="clock_headers">
        <p className="auction_header">Hours</p>
        <p className="auction_header">Minutes</p>
        <p className="auction_header">Seconds</p>
      </div>
    </div>
  );
};
