import Link from "next/link";
import {FontAwesomeIcon} from '@fortawesome/fontawesome-free'

function Header(props) {
	return (
		<div className="flex flex-row-reverse bg-base-200 h-12 gap-2 pr-5">
			<Link href="/">
				<button className="btn btn-ghost">Home</button>
			</Link>
			<Link href="/">
				<button className="btn btn-ghost">Projects</button>
			</Link>
            <Link href="/blog">
				<button className="btn btn-ghost">Posts</button>
			</Link>
		</div>
	);
}

export default Header;
