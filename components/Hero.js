import Link from "next/link";

export default function Hero() {
	return (
		<div class="flex bg-base-200 px-64 pt-16 pb-16">
			<div className="flex justify-start">
				<div className="max-w-xl">
					<h1 className="text-6xl font-bold">Noah Cairns</h1>
					<h2 className="text-3xl py-6">Software Engineer</h2>
					<div className="flex">
						<Link href='#'>
							<button className="btn btn-outline">About</button>
						</Link >
						<div className="divider divider-horizontal"></div>
						<Link href='#'>
							<button className="btn btn-outline">Projects</button>
						</Link>
						<div className="divider divider-horizontal"></div>
						<Link href='/blog'>
							<button className="btn btn-outline">Posts</button>
						</Link>
						<Link href='#'>
							<div className="divider divider-horizontal"></div>
						</Link>
						<Link href='#'>
							<button className="btn btn-outline">Resume</button>
						</Link>

						<div className="divider divider-horizontal"></div>
						<Link href='#'>
							<button className="btn btn-primary">Contact</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
