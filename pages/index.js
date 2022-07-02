import Link from 'next/link';
import Navbar from '../components/navbar';
import styles from '../styles/index.module.css';
import Image from 'next/image';
import Head from 'next/head';

const index = () =>{
  return (
    <div className={styles.main}>
      <Head>
        <title>Home Page</title>
      </Head>
      <h1>Home Page</h1>
      <Navbar/>
      <section>
        <style>
          {`
          h1{
            color:red;
          }
          `}
        </style>
      </section>
      <section>
          <Image 
          src="/img.jpg"
          height="300px"
          width="500px"></Image>
          <Image
          src="https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__480.jpg"
          height="300px"
          width="500px"
          >
          </Image>
      </section>
    </div>
  );
};

export default index; //Very Important
