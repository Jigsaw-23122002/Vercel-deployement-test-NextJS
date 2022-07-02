export const getStaticPaths=async()=>{
    const res=await fetch("https://jsonplaceholder.typicode.com/posts");
    const data=await res.json();

    const paths=data.map((curr)=>{
        return {
            params:{
                blogn:curr.id.toString(),
            }
        }
    });
    return {
        paths,
        fallback:false,
    }
}

export const getStaticProps=async(context)=>{
    const res=await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.blogn}`);
    const data=await res.json();
    return {
        props:{
            data:data,
        }
    }
}

const blogn=({data})=>{
    return (
        <div>
            <h3>{data.id}</h3>
            <h2>{data.title}</h2>
            <h3>{data.body}</h3>
        </div>
    );
}
export default blogn;