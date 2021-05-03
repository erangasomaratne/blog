import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';



const getPostData = fileName => {
    const filePath =  path.join(process.cwd(),'posts',fileName);
    const fileContent = fs.readFileSync(filePath, 'utf-8');    
    const { data, content } = matter(fileContent); 
    const postSlug = fileName.replace(/\.md$/,'');   
    const postData = {
        slug:postSlug,
        ...data,        
        content,        
    };     
    return postData;
};

export const getPost = fileName => {
    const allPosts = getAllPosts();
    const post = allPosts.filter(post => post.slug === fileName);
    return post;    
};


export const getAllPosts = () => {
    const filePath = path.join(process.cwd(),'posts');    
    const postFiles = fs.readdirSync(filePath);   
    const allPosts = postFiles.map( postFile => getPostData(postFile));   
    return allPosts;
};

export const getFeaturedPosts = () => {
    const allPosts = getAllPosts();       
    const featuredPosts = allPosts.filter(post => post.isFeatured);    
    return featuredPosts;
}



