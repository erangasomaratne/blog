import React from 'react';
import Image from 'next/image';
import styled from './hero.module.css';

const Hero = () => {
    return (
        <section className={styled.hero}>
            <div className={styled.image}>
                <Image src='/image/eranga.jpg' alt='image showing eranga' width={300} height={300} />
            </div>
            <h1>Hi I'm Eranga</h1>
            <p>Blog about web development especially frontend frameworks like React</p>
        </section>
    );
};

export default Hero;