import Image from "next/image";
import profilePic from "../public/noah_pic.jpg";


export default function About() {
	return (
		<div className="flex flex-col md:flex-row justify-center items-center gap-10 h-full">
			<div className="avatar">
				<div className=" w-48 md:w-96 md:h-96 rounded-full md:rounded md:place-self-start">
					<img src={"./noah_pic.jpg"} alt="Noah Cairns Picture" />
				</div>
			</div>

			<div className="flex bg-base-300 p-10 h-fit-content prose">
				<div className="flex flex-col justify-center max-w-lg h-full ">
					<h2 className="text-3xl font-bold uppercase">Noah Cairns</h2>
					<span className=" font-thin italic">
						B.S. in Business Adminstration, UNC-Chapel Hill, 2019{" "}
					</span>
					<p>
						Noah Cairns is a Software Engineer with experience developing web
						products and applications. His current preferred tech stack for
						professional development is the MERN stack (MongoDB, Express, React,
						and Node.js), though he enjoys learning new languages and frameworks
						frequently. His latest interest has been terminal applications
						developed in Rust as well as Tauri, a toolkit for building native
						desktop apps developed in Rust.
					</p>
					<p>
						Fueled by the exciting challenges that Software Development brings,
						Noah always emphasizes the end-user experience and bringing delight
						to clients. He also enjoys giving back to the community and
						contributing to open source projects.
					</p>
					<p>
						Noah Cairns is currently working as freelance Software Engineer and
						is always interested in a challenge. Looking to hire, freelance or
						fulltime? Reach out to{" "}
						<a href="mailto: cairns.noah.dev@gmail.com">
							cairns.noah.dev@gmail.com
						</a>
						!
					</p>
				</div>
			</div>
		</div>
	);
}
