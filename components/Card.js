export default function Card( props) {
	return (
		<div className="card w-96 bg-base-100 shadow-xl">
			<figure>
				<img
					src={props.src}
					alt={props.alt}
				/>
			</figure>
			<div className="card-body">
				<h2 className="card-title">{props.title}</h2>
				<p>{props.description}</p>
			</div>
		</div>
	);
}
