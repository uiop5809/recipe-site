export default function Recipe({
	id,
	title,
	subtitle,
	desc,
	coverImg,
	totalTime,
}) {
	return (
		<div className={id}>
			<img src={coverImg} alt={title} />
			<div>
				<h2>{title}</h2>
				<h4>{subtitle}</h4>
				<h4>{totalTime}</h4>
				<p>{desc}</p>
			</div>
		</div>
	);
}
