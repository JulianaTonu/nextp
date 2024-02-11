import Link from 'next/link';
import React from 'react';
import styles from './post.module.css'
const PostsPage = async () => {
    const res = await fetch("http://localhost:5000/posts", {
        next: {
            revalidate: 5,
        },
    });

    const posts = await res.json();
    console.log(posts)
    return (
        <div>
           <h1 className={styles.header_text}>Total Post:{posts.length} </h1>
            {posts.map((post, inbox) =>
                <div key={post.id} 
                    className="card mx-auto w-[50%] my-5 bg-slate-300 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">{post.title}</h2>
                        <p>{post.description}</p>
                        <p>{post.like_count}</p>
                        <div className="card-actions justify-end">
                            <Link href={`/posts/${post.id}`}> <button className="btn btn-primary">See More</button>
                            </Link>
                        </div>

                    </div>
                </div>
            )}
        </div>
    );
};

export default PostsPage;