import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import PostHeader from './post-header';
import styled from './post-content.module.css';

const PostContent = ({ post }) => {
    
    const imagePath = `/image/posts/${post[0].slug}/${post[0].image}`;
    
    
    return (
        <article className={styled.content}>
            <PostHeader image={imagePath} title={post[0].title} />
            <ReactMarkdown>
            {
                post[0].content
            }
            </ReactMarkdown>
        </article>
    );
};

export default PostContent;