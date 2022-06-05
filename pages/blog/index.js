import fs from "fs";
import matter from "gray-matter";
import Image from "next/image";
import Link from "next/link";

// The Blog Page Content
export default function Blog({ posts }) {
	return (
		<main>
			<div className="flex flex-col gap-5 w-5/6 mx-auto justify-center items-center">
				{posts.map((post) => {
					//extract slug and frontmatter
					const { slug, frontmatter } = post;
					//extract frontmatter properties
					const { title, author, category, date, bannerImage, tags } =
						frontmatter;

					//JSX for individual blog listing
					return (
						<div className="w-2/3 md:w-1/2 rounded-xl" key={title}>
							<Link href={`/blog/${slug}`}>
								<article className="artboard-horizontal prose btn-ghost bg-base-300 w-full p-5 md:p-10 btn h-56">
									<h1>{title}</h1>
								</article>
							</Link>
							<div className="divider"></div>
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
