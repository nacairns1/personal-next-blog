import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";
import ProjectPreview from "../components/ProjectPreview";

export default function Projects({ projects }) {
	return (
		<div className="w-full h-full">
			<main>
				<div className="flex flex-col gap-5 w-5/6 mx-auto justify-center items-center">
					<h2 className=" text-3xl font-light italic mb-5 place-self-start mx-5">
						Public Projects
					</h2>
					{projects.sort((a,b) => a.frontmatter.sortOrder - b.frontmatter.sortOrder).map((project, idx) => {
						const { slug, frontmatter, content } = project;

						const {
							title,
							author,
							category,
							date,
							bannerImage,
							description,
							tags,
							link,
							repo,
						} = frontmatter;

						return (
							<div
								className="w-full rounded-xl container flex flex-col items-center"
								key={title}
							>

								<div className="flex flex-row w-full justify-center items-center">
									<ProjectPreview
										src={bannerImage}
										title={title}
										link={link}
										repo={repo}
										description={description}
										content={content}
									/>
								</div>
								{idx !== projects.length - 1 && <div className="divider" />}
							</div>
						);
					})}
				</div>
			</main>
		</div>
	);
}

export async function getStaticProps() {

	const files = fs.readdirSync("./public/projects/");

	const projects = files.map((fileName) => {
		const slug = fileName.replace(".md", "");
		const readFile = fs.readFileSync(`./public/projects/${fileName}`, "utf-8");
		const { data: frontmatter, content } = matter(readFile);

		return {
			slug,
			frontmatter,
			content
		};
	});


	return {
		props: {
			projects
		},
	};
}
