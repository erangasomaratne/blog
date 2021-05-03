import React from 'react';
import PostsGrid from '../posts/posts-grid';
import styled from './featured-posts.module.css';

const FeaturedPosts = ({ posts }) => {
    return (
        <div className={styled.latest}>
            <h2>Featured Posts</h2>
            <PostsGrid posts={posts} />
        </div>
    );
};

export default FeaturedPosts;