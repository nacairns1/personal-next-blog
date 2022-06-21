import Image from "next/image";
import md from "markdown-it";

export default function ProjectPreview(props) {
	return (
		<div className="flex flex-grow gap-10 mx-5">
			<div className="card w-80 h-80 bg-base-100 rounded-md">
				<Image src={props.src} alt={props.alt} layout="fill" />
			</div>
			<div className="flex flex-col flex-grow h-80 relative w-fit">
				<h2 className="card-title">{props.title}</h2>
				<p className="italic mb-2">{props.description}</p>
                <div dangerouslySetInnerHTML={{ __html: md().render(props.content) }} />
				<div className="absolute bottom-0">
					<a href={props.repo} target={"_blank"}>
						<button className="btn btn-primary">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							>
								<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
							</svg>
						</button>
					</a>
					<a href={props.link} target={"_blank"}>
						<button className="btn btn-info">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								strokeWidth={2}
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
								/>
							</svg>
						</button>
					</a>
				</div>
			</div>
		</div>
	);
}
