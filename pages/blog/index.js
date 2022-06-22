import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";
import * as dayjs from "dayjs";

export default function Blog({ posts }) {
	return (
		<main>
			<div className="flex flex-col gap-5  w-full md:w-5/6 mx-auto justify-center items-center mt-10">
				{posts
					.sort((a, b) => dayjs(b.frontmatter.date) - dayjs(a.frontmatter.date))
					.map((post, idx) => {
						const { slug, frontmatter } = post;

						const {
							title,
							author,
							category,
							date,
							bannerImage,
							tags,
							description,
						} = frontmatter;

						return (
							<div
								className="w-2/3 rounded-xl flex flex-col justify-center items-center"
								key={title}
							>
								<Link href={`/blog/${slug}`}>
									<div className="flex flex-col prose prose-base sm:prose-lg btn-ghost bg-base-300 w-full md:p-5 btn min-h-[14rem] h-fit">
										<h2 className="">{title}</h2>
										<span className="italic pb-2">{description}</span>
											<span className="font-light italic block">
												{dayjs(date).format("D MMMM YYYY")}
											</span>
		
									</div>
								</Link>
								{idx !== posts.length - 1 && <div className="divider" />}
							</div>
						);
					})}
			</div>
		</main>
	);
}

//Generating the Static Props for the Blog Page
export async function getStaticProps() {
	// get list of files from the posts folder
	const files = fs.readdirSync("./public/posts/");

	// get frontmatter & slug from each post
	const posts = files.map((fileName) => {
		const slug = fileName.replace(".md", "");
		const readFile = fs.readFileSync(`./public/posts/${fileName}`, "utf-8");
		const { data: frontmatter } = matter(readFile);

		return {
			slug,
			frontmatter,
		};
	});

	// Return the pages static props
	return {
		props: {
			posts,
		},
	};
}
