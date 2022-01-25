import styles from "src/styles/Home.module.css";
import { useState, useEffect, useCallback } from "react";

export function Main() {
	const [movies, setMovies] = useState([]);

	const getPosts = useCallback(async () => {
		const res = await fetch(
			"https://api.themoviedb.org/3/movie/550?api_key=60e6623055cb0d1da9e0ded2de736088"
		);
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
