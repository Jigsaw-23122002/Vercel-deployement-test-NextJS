import Link from "next/link";
import { useRouter } from "next/router";
import Navbar from "../components/navbar";

const error = () => {
  const router = useRouter();
  const handleInput = () => {
    router.push("/");
  };

  setTimeout(()=>{
    router.push('/');
  },5000);

  return (
    <div>
      <Navbar/>
      <h1>Error 404, Page not found :(</h1>
      <Link href="/">
        <a>Back to home</a>
      </Link>
      <button
        onClick={() => {
          router.push("/");
        }}
      >
        Back to home
      </button>
      <button onClick={handleInput}>Back to home</button>
    </div>
  );
};

export default error;
