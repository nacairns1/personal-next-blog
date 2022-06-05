import fs from "fs";
import matter from "gray-matter";
import md from "markdown-it";

// The page for each post
export default function Post({ frontmatter, content }) {
	const { title, author, category, date, bannerImage, tags, description } =
		frontmatter;

	return (
		<main className="flex flex-row">
			<div className="flex flex-col w-96 prose h-full mx-10">
				<section>
					<h1>{title}</h1>
				</section>
				<section>
					<h2>{description}</h2>
				</section>
			</div>
            <div className="divider divider-horizontal"></div>
			<div className="prose-lg px-20">
				<div dangerouslySetInnerHTML={{ __html: md().render(content) }} />
			</div>
		</main>
	);
}

// Generating the paths for each post
export async function getStaticPaths() {
	// Get list of all files from our posts directory
	const files = fs.readdirSync("./public/posts");
	// Generate a path for each one
	const paths = files.map((fileName) => ({
		params: {
			slug: fileName.replace(".md", ""),
		},
	}));
	// return list of paths
	return {
		paths,
		fallback: false,
	};
}

// Generate the static props for the page
export async function getStaticProps({ params: { slug } }) {
	const fileName = fs.readFileSync(`./public/posts/${slug}.md`, "utf-8");
	const { data: frontmatter, content } = matter(fileName);
	return {
		props: {
			frontmatter,
			content,
		},
	};
}
