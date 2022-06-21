import fs from "fs";
import matter from "gray-matter";
import md from "markdown-it";

export default function Post({ frontmatter, content }) {
	const { title, author, category, date, bannerImage, tags, description, } =
		frontmatter;

	return (
		<main className="flex flex-col bg-base-300 w-3/4 items-center my-10 mx-auto">
			<div className="flex flex-col prose prose-sm md:prose-base lg:prose-xl justify-center items-center">
				<section className="pt-20">
					<h1>{title}</h1>
				</section>
				<section className="italic font-thin">
					<h2>{description}</h2>
				</section> 
			</div>
			<div className="prose prose-sm md:prose-xl prose-blue">
				<div dangerouslySetInnerHTML={{ __html: md().render(content) }} />
			</div>
		</main>
	);
}

export async function getStaticPaths() {

	const files = fs.readdirSync("./public/posts");
	const paths = files.map((fileName) => ({
		params: {
			slug: fileName.replace(".md", ""),
		},
	}));
	return {
		paths,
		fallback: false,
	};
}

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
