import { useEffect, useState } from "react";

const fetchPost = () => {
    return fetch(`https://jsonplaceholder.typicode.com/posts`)
        .then(response => response.json())
}

export default async function PostPage({ params }: { params: any }) {

    const posts = await fetchPost();

    return (
        <div>
            {posts.map((post: any) => (
                <article key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </article>
            ))}
        </div>
    )
}