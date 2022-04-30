import { useEffect, useRef, useState } from "react";

const Timer = ({ t }) => {
  const time = useRef(t);
  const timerld = useRef(null);
  const [min, setMin] = useState(parseInt(time.current / 60));
  const [sec, setSec] = useState(time.current % 60);

  useEffect(() => {
    timerld.current = setInterval(() => {
      setMin(parseInt(time.current / 60));
      setSec(time.current % 60);
      time.current -= 1;
    }, 1000);

    return () => clearInterval(timerld.current);
  }, []); // 최초에만 실행

  useEffect(() => {
    // 타임 아웃이 발생했을 경우
    if (time.current <= 0) {
      console.log("타임 아웃");
      clearInterval(timerld.current);
    }
  }, [sec]);

  return (
    <div>
      {min} : {sec}
    </div>
  );
};

export default Timer;
