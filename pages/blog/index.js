import Link from 'next/link';

export const getStaticProps=async()=>{
    const res=await fetch("https://jsonplaceholder.typicode.com/posts");
    const data=await res.json();
    return {
        props:{
            data:data,
        }
    }
}

const blog=({data})=>{
    return (
        <div>
            <h1>Blog Page</h1>
            <section>
                {data.slice(0,5).map((curr)=>{
                    return (
                        <div key={curr.id}>
                            <h3>{curr.id}</h3>
                            <Link href={`/blog/${curr.id}`}>
                            <h2>{curr.title}</h2>
                            </Link>
                        </div>
                    );
                })}
            </section>
        </div>
    );
}

export default blog;