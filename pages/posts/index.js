import PostsGrid from "../../components/posts/posts-grid"
import { getAllPosts } from "../../lib/posts-utils";

const Posts = ({ posts }) => {
    return (
        <div>
            <h1>All Post</h1>
            <PostsGrid posts={posts} />
        </div>
    );
};


export const getStaticProps = () => {
    const posts = getAllPosts();
    return {
        props : {
            posts
        }
    }
}

export default Posts;
