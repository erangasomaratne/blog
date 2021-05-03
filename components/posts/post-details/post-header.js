import Image from 'next/image';
import styled from './post-header.module.css';


const PostHeader = ({ image, title }) => {
    return (
        <header className={styled.header}>
            <h1>{title}</h1>
            <Image src={image} alt={title} width={200} height={150} />
        </header>
    );
};

export default PostHeader;