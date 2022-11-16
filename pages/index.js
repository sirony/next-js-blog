import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';
import { getSortedPostsData } from '../lib/posts';
import utilStyles from '../styles/utils.module.css';

export async function getStaticProps(){
  const allPostsData = getSortedPostsData();
  return{
    props : {
      allPostsData
    }
  }
}

export default function Home({ allPostsData }) {
  const home = true;
  return (
    <Layout home={home}>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, I'm <span className={`${utilStyles.boldText} ${utilStyles.redColor}`}>Shariful</span>. I'm Software enginer and <span className={utilStyles.brownColor}>Full Stack Web Developer</span> from Bangladesh</p>
        <p>
          Contact Information:<br></br>    
          Email: <a href="ailto:sirony25@gmail.com">sirony25@gmail.com</a>
        </p>
      </section>

      
    </Layout>
  );
}