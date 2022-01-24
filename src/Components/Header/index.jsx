import Image from "next/image";
import Link from "next/link";
import styles from "src/styles/Home.module.css";

export function Header() {
	return (
		<div>
			<header className={styles.footer}>
				<div className="">
					<Link href="/">
						<a>Home</a>
					</Link>

					<Link href="/list">
						<a>Lists</a>
					</Link>
				</div>
			</header>
		</div>
	);
}
