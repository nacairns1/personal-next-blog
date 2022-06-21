import Link from "next/link";
import {FontAwesomeIcon} from '@fortawesome/fontawesome-free'

function Header(props) {
	return (
		<div className="fixed top-0 right-0 flex flex-row-reverse bg-base-200 h-12 gap-2 pr-5 mb-10 z-10 w-full">
			<Link href="/">
				<button className="btn btn-ghost">Home</button>
			</Link>
			<Link href="/projects">
				<button className="btn btn-ghost">Projects</button>
			</Link>
            <Link href="/blog">
				<button className="btn btn-ghost">Posts</button>
			</Link>
		</div>
	);
}

export default Header;
