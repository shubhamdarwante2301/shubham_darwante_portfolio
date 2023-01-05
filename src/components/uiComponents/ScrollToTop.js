import React, {useEffect, useState} from 'react'
import styled, {keyframes} from 'styled-components'

const Wrapper = styled.div`
    position: fixed;
    display: inline-block;
    bottom: 2rem;
    right: 2rem;
`;
const anime = keyframes`
    0% {
        transform: translateY(-0.5rem);
    }
    100% {
        transform: translateY(0.5rem);
    }
`;
const ScrollBtn = styled.button`
    background-color: #fff;
    width: 2rem;
    height: 2.5rem;
    cursor: pointer;
    border-radius: 50%;
    font-size: 1.3rem;
    animation: 1s ${anime} 1s infinite alternate-reverse;
`;
const ScrollToTop = () => {
    const[isVisible, setIsVisible] = useState(false)

    const scrollTopBtn = () => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }

    const listenScroll = () => {
        const TOP_SCREEN = 450;
        let top_scroll = document.body.scrollTop || document.documentElement.scrollTop;

        if(TOP_SCREEN <= top_scroll) {
            setIsVisible(true)
        } else {
            setIsVisible(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', listenScroll)
    }, [])

    return (
        isVisible && (<Wrapper>
            <ScrollBtn onClick={scrollTopBtn}><i className="fa-solid fa-arrow-up"></i></ScrollBtn>
        </Wrapper>)
    )
}

export default ScrollToTop
