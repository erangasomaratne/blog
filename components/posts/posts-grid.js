import PostItem from './post-item';
import styled from './posts-grid.module.css';


const PostsGrid = ({ posts }) => {
    return (
        <ul className={styled.grid}>
        {
            posts.map(({ slug, image, title, excerpt, date}) => <PostItem key={slug} image={image} date={date} slug={slug}  excerpt={excerpt} title={title} />)
        }
        </ul>
    );
};

export default PostsGrid;