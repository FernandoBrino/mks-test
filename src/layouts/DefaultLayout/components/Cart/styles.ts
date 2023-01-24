import styled from "styled-components";

export const CartContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    z-index: 1;

    position: fixed;
    right: 0;

    background-color: ${({theme}) => theme["mks-blue"]};
    min-width: 48.6rem;
    box-shadow: -5px 0px 6px rgba(0, 0, 0, 0.13);

    header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 2rem;
        padding: 3.6rem 2.2rem 4.3rem 4.7rem;

        h1 {
            width: 18rem;
            font-weight: 700;
            font-size: 2.7rem;
            color: ${({theme}) => theme.white};
        }
    }

    @media(max-width: 1094px) {
        min-width: 37rem;

        header {
            min-width: 37.5rem;
            padding: 2.5rem 1.5rem 5.5rem 3.2rem; 
        }
    }
`

export const ProductsList = styled.main`
    display: flex;
    flex-direction: column; 
    align-items: center;
    gap: 2.2rem;
    overflow-y: auto;
    padding: 1rem 0;
    height: 60%;

    &::-webkit-scrollbar {
        width: 3px;
    }

    &::-webkit-scrollbar-thumb {
        border-radius: 10px;
        box-shadow: inset 0 0 6px ${({theme}) => theme.white};
        background-color: ${({theme}) => theme.white};
        border: 1px solid ${({theme}) => theme.white};
    }

`

export const Total = styled.footer`
    display: flex;
    flex-direction: column;
    position: absolute;
    bottom: 0;
    gap: 4.2rem;
    width: 100%;

    span {
        display: flex;
        justify-content: space-between;
        padding: 0rem 2.2rem 0rem 4.7rem;

        p {
            color: ${({theme}) => theme.white};
            font-weight: 700;
            font-size: 2.8rem;
        }
    }

    button {
        display: flex;
        align-items: center;
        justify-content: center;

        border: none;
        padding: 4rem 0;

        font-weight: 700;
        font-size: 2.8rem;

        background-color: ${({theme}) => theme.black};
        color: ${({theme}) => theme.white};
        cursor: pointer;
    }
`

export const CloseCart = styled.button`
    display: flex;
    padding: 1rem;

    border: none;
    border-radius: 21px;

    background-color: ${({theme}) => theme.black};
    color: ${({theme}) => theme.white};

    cursor: pointer;

    @media(max-width: 1094px) {
        svg {
            color: ${({theme}) => theme["mks-blue"]};
        }
    }
`