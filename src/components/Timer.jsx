import { useEffect, useRef, useState } from 'react';

const Timer = ({ t, clicked }) => {
	const time = useRef(t);
	const timerId = useRef(null);
	const [min, setMin] = useState(parseInt(time.current / 60));
	const [sec, setSec] = useState(time.current % 60);

	function useInterval(callback, delay, timer) {
		if (timer < 0) {
			delay = null;
		}
		const savedCallback = useRef();
		useEffect(() => {
			savedCallback.current = callback;
		}, [callback]);
		useEffect(() => {
			function tick() {
				savedCallback.current();
			}
			if (delay !== null) {
				let id = setInterval(tick, delay);
				callback();
				return () => clearInterval(id);
			}
		}, [delay]);
	}
	timerId.current = useInterval(
		() => {
			setMin(parseInt(time.current / 60));
			setSec(time.current % 60);
			time.current--;
		},
		clicked ? 1000 : null,
		time.current
	);

	useEffect(() => {
		// 타임 아웃이 발생했을 경우
		if (time.current <= -1) {
			clearInterval(timerId.current);
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
