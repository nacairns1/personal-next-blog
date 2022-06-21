import Link from "next/link";
import { useState } from "react";
import ResumeModal from "./ResumeModal";

export default function Hero() {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div className="flex bg-base-300 justify-center md:px-24 lg:px-64 lg:justify-start pt-32 pb-16 mx-10 rounded-sm">
			<div className="flex flex-col max-w-xl items-center md:items-start md:justify-start flex-wrap md:flex-nowrap">
				<h1 className="text-6xl font-bold">Noah Cairns</h1>
				<h2 className="text-3xl py-6">Software Engineer</h2>
				<div className="flex flex-col md:flex-row">
					<Link href="/about">
						<button className="btn btn-outline btn-md">About</button>
					</Link>
					<div className="divider divider-horizontal"></div>
					<Link href="/projects">
						<button className="btn btn-outline">Projects</button>
					</Link>
					<div className="divider divider-horizontal"></div>
					<Link href="/blog">
						<button className="btn btn-outline">Posts</button>
					</Link>
					<Link href="#">
						<div className="divider divider-horizontal"></div>
					</Link>

					<button
						className="btn btn-outline"
						onClick={() => {
							setIsOpen(true);
						}}
					>
						Resume
					</button>

					<div className="divider divider-horizontal"></div>
					<Link href="#">
						<button className="btn btn-primary">Contact</button>
					</Link>
				</div>
			</div>
			<ResumeModal isOpen={isOpen} closeHandler={()=> {setIsOpen(false)}}/>
		</div>
	);
}
