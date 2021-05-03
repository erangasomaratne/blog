import Head from 'next/head'
import FeaturedPosts from '../components/home-page/featuredPosts'
import Hero from '../components/home-page/hero'
import { getFeaturedPosts } from '../lib/posts-utils';


const HomePage = ({ posts }) => {  
 return (
    <div>
      <Hero />
      <FeaturedPosts posts={posts} />
    </div>
  );
};

export const getStaticProps = () => {
  const posts = getFeaturedPosts();  
  return {
    props : {
      posts
    },    
  }
}

export default HomePage;
