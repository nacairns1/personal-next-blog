import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";

export default function Blog({ posts }) {
	return (
		<main>
			<div className="flex flex-col gap-5 w-5/6 mx-auto justify-center items-center">
				{posts.map((post,idx) => {

					const { slug, frontmatter } = post;

					const { title, author, category, date, bannerImage, tags, description } =
						frontmatter;


					return (
						<div className="w-2/3 md:w-1/2 rounded-xl container flex flex-col " key={title}>
							<Link href={`/blog/${slug}`}>
								<article className="artboard artboard-horizontal prose prose-lg btn-ghost bg-base-300 w-full p-5 md:p-10 btn h-56 ">
									<h2 className="font-extrabold text-3xl">{title}</h2>
									<h4 className="font-light text-xl italic">{description}</h4>
								</article>
							</Link>
							{idx !== posts.length -1 && <div className="divider" />}
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
