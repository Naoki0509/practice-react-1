import styles from "src/styles/Home.module.css";
import { useState, useEffect, useCallback } from "react";

export function Main() {
	const [posts, setPosts] = useState([]);
	const getPosts = useCallback(async () => {
		const res = await fetch("https://jsonplaceholder.typicode.com/posts");
		const json = await res.json();
		setPosts(json);
	}, []);

	useEffect(() => {
		getPosts();
	}, [getPosts]);
	return (
		<main className={styles.main}>
			<div>
				<ol>
					{posts.map((post) => {
						return <li key={post.id}>{post.title}</li>;
					})}
				</ol>
			</div>
		</main>
	);
}
