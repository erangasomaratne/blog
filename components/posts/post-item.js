import Link from 'next/link';
import Image from 'next/image';
import styled from './post-item.module.css';

const PostItem = ({ title, image, excerpt,date, slug}) => {
    console.log(slug);
    const formattedDate = new Date(date).toLocaleDateString('en-US',{
        day:'numeric',
        month:'long',
        year:'numeric'
    });

    const imagePath = `/image/posts/${slug}/${image}`
    return (
        <li className={styled.post}>
            <Link href={`/posts/${slug}`}>
                <a> 
                    <div className={styled.image}>
                        <Image src={imagePath} alt={title} width={300} height={200} layout='responsive' />
                    </div>
                    <div className={styled.content}>
                        <h3>{title}</h3>
                        <time>{formattedDate}</time>
                        <p>{excerpt}</p>
                    </div>
                </a>
            </Link>
        
        </li>
    );
};

export default PostItem;