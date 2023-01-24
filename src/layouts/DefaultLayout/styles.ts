import styled from "styled-components";

export const LayoutContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 10rem;

    @media (max-width: 1094px) {
        gap: 2rem;
    }
`

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2.9rem 6.5rem;

    background-color: ${({theme}) => theme["mks-blue"]};

    button {
        display: flex;
        align-items: center;
        padding: 1.5rem;
        gap: 1.5rem;
        min-width: 9rem;

        border: none;
        border-radius: 8px;
        cursor: pointer;

        background-color: ${({theme}) => theme.white};
        transition: 0.5s opacity ease-in-out;

        &:hover {
            opacity: 0.6;
        }


        span {
            font-size: 1.8rem;
            font-weight: 700;
        }
    }

    @media (max-width: 1094px) {
        padding: 1rem 2rem;
        
        button {
            padding: 1rem;
            gap: 1rem;
            min-width: 5.2rem;
        }
    }
`

export const Footer = styled.footer`
    position: relative;
    bottom: 0;

    width: 100%;
    padding: 0.8rem;

    text-align: center;
    font-size: 1.2rem;

    background-color: ${({theme}) => theme.gray};
    
    p {
        color: ${({theme}) => theme.black};
    }
`
