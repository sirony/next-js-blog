import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';


export default function Home() {
  const home = true;

  const content = "Hello, I&quot;m <span className={`${utilStyles.boldText} ${utilStyles.redColor}`}>Shariful</span>. I&quot;m Software enginer and <span className={utilStyles.brownColor}>Full Stack Web Developer</span> from Bangladesh";


  return (
    <Layout home={home}>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, I am <span className={`${utilStyles.boldText} ${utilStyles.redColor}`}>Shariful</span>. I am Software enginer and <span className={utilStyles.brownColor}>Full Stack Web Developer</span> from Bangladesh</p>
        <p>
          Contact Information:<br></br>    
          Email: <a href="ailto:sirony25@gmail.com">sirony25@gmail.com</a>
        </p>
      </section>

      
    </Layout>
  );
}