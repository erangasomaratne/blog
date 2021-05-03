import PostContent from "../../components/posts/post-details/post-content";
import { getPost } from "../../lib/posts-utils";

const PostDetails = ({ post }) => {  
    return (
        <PostContent post={post} />
    );
};

export const getStaticProps = context => {
    const { params } = context;
    const post = getPost(params.slug);
    return {
        props: {
            post
        },
        revalidate:600
    }
};

export const getStaticPaths = () => {
    return {
        paths:[],
        fallback:'blocking'
    }
}

export default PostDetails;