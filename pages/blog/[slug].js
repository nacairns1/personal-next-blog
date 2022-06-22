import fs from "fs";
import matter from "gray-matter";
import md from "markdown-it";
import * as dayjs from "dayjs";

export default function Post({ frontmatter, content }) {
	const { title, author, category, date, bannerImage, tags, description, } =
		frontmatter;

	return (
		<main className="flex flex-col sm:bg-base-300 w-full sm:w-3/4 items-center my-10 mx-auto">
			<div className="flex flex-col prose prose-sm md:prose-base lg:prose-xl justify-center mt-4 items-center text-left px-6">
				<section className="">
					<h1>{title}</h1>
				</section>
				<section className="italic font-thin flex flex-col">
					<h2>{description}</h2>
					<h4>{dayjs(date).format("D MMMM YYYY")}</h4>
				</section> 
			</div>
			<div className="prose prose-sm md:prose-xl prose-blue w-full px-6 text-left">
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
