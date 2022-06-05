import Link from "next/link";

export default function Hero() {
	return (
		<div className="flex bg-base-200 justify-center md:px-24 lg:px-64 lg:justify-start pt-32 pb-16">
			<div className="flex flex-col max-w-xl items-center md:items-start md:justify-start flex-wrap md:flex-nowrap">
				<h1 className="text-6xl font-bold">Noah Cairns</h1>
				<h2 className="text-3xl py-6">Software Engineer</h2>
				<div className="flex flex-col md:flex-row">
					<Link href="#">
						<button className="btn btn-outline btn-md">About</button>
					</Link>
					<div className="divider divider-horizontal"></div>
					<Link href="#">
						<button className="btn btn-outline">Projects</button>
					</Link>
					<div className="divider divider-horizontal"></div>
					<Link href="/blog">
						<button className="btn btn-outline">Posts</button>
					</Link>
					<Link href="#">
						<div className="divider divider-horizontal"></div>
					</Link>
					<Link href="#">
						<button className="btn btn-outline">Resume</button>
					</Link>

					<div className="divider divider-horizontal"></div>
					<Link href="#">
						<button className="btn btn-primary">Contact</button>
					</Link>
				</div>
			</div>
		</div>
	);
}
