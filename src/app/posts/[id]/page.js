

export async function generateStaticParams(){
    const res = await fetch("http://localhost:5000/posts");
    const posts = await res.json();

    const ids = posts.map((post) => {
        return {
            id: post.id + "",
        }
    })
    console.log(ids)
    return [{id:"1"}, {id:"2"}];
}

const DetailsPage = async ({ params }) => {

    // const res = await fetch(`http://localhost:5000/posts/{params.id}`)
    // const post = await res.json();
    // console.log(params.id)
    return (
        <div>
            <h1>Post Details Page</h1>

            {/* <div key={post.id}
                    className="card mx-auto w-[50%] my-5 bg-slate-300 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">{post.title}</h2>
                        <p>{post.description}</p>
                        <p>{post.like_count}</p>
                    </div>
                </div> */}
        </div>
    );
};

export default DetailsPage;