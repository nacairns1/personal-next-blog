import Link from "next/link";
import { useState } from "react";
import ResumeModal from "./ResumeModal";

export default function Hero() {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div className="flex justify-center md:px-24 lg:px-32 xl:px-48 lg:justify-start pt-32 pb-16 sm:mx-10 rounded-sm min-w-[20rem]">
			<div className="flex flex-col max-w-xl items-center lg:items-start lg:justify-start flex-wrap lg:flex-nowrap text-center">
				<h1 className="text-6xl font-bold">Noah Cairns</h1>
				<h2 className="text-3xl py-6">Software Engineer</h2>
				<div className="flex flex-col lg:flex-row gap-2">
					<Link href="/about">
						<button className="btn btn-outline ">About</button>
					</Link>
					<div className="divider divider-horizontal"></div>
					<Link href="/projects">
						<button className="btn btn-outline">Projects</button>
					</Link>
					<div className="divider divider-horizontal"></div>
					<Link href="/blog">
						<button className="btn btn-outline ">Posts</button>
					</Link>
					<div className="divider divider-horizontal"></div>
					<button
						className="btn btn-outline"
						onClick={() => {
							setIsOpen(true);
						}}
					>
						Resume
					</button>

					<div className="divider divider-horizontal"></div>

					<button className="btn btn-primary ">
						<a href="mailto: cairns.noah.dev@gmail.com">Contact </a>
					</button>
				</div>
			</div>
			<ResumeModal
				isOpen={isOpen}
				closeHandler={() => {
					setIsOpen(false);
				}}
			/>
		</div>
	);
}
