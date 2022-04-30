import { useEffect, useRef, useState } from 'react';

const Timer = ({ t, clicked }) => {
	const time = useRef(t);
	const timerld = useRef(null);
	const [min, setMin] = useState(parseInt(time.current / 60));
	const [sec, setSec] = useState(time.current % 60);
	function useInterval(callback, delay) {
		const savedCallback = useRef();
		// Remember the latest callback.
		useEffect(() => {
			savedCallback.current = callback;
		}, [callback]);

		// Set up the interval.
		useEffect(() => {
			function tick() {
				savedCallback.current();
			}
			if (delay !== null) {
				callback();
				let id = setInterval(tick, delay);
				return () => clearInterval(id);
			}
		}, [delay]);
	}
	// useEffect(() => {
	timerld.current = useInterval(
		() => {
			setMin(parseInt(time.current / 60));
			setSec(time.current % 60);
			time.current--;
		},
		clicked ? 1000 : null
	);

	// 	return () => clearInterval(timerld.current);
	// }, []); // 최초에만 실행

	useEffect(() => {
		// 타임 아웃이 발생했을 경우
		if (time.current <= -1) {
			clearInterval(timerld.current);
		}
	}, [sec]);

	return (
		<div>
			{min < 10 ? '0' : ''}
			{min} :{sec < 10 ? ' 0' : ' '}
			{sec}
		</div>
	);
};

export default Timer;
