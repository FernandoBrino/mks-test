import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 25rem;

    border-radius: 8px;

    background-color: ${({theme}) => theme.white};
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);

    button {
        display: flex;
        align-items: center;
        justify-content: center;

        padding: 0.7rem 0;
        width: 100%;
        gap: 1rem;

        border: none;
        border-radius: 0 0 8px 8px;

        color: ${({theme}) => theme.white};
        background-color: ${({theme}) => theme["mks-blue"]};

        font-weight: 600;
        font-size: 1.4rem;
        text-transform: uppercase;

        cursor: pointer;
    }
`

export const Description = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    padding: 1.4rem 1.2rem 1.2rem 1.4rem;

    p {
        color: ${({theme}) => theme["gray-paragraph"]};
        font-size: 1rem;
    }
` 

export const MainInfo = styled.div `
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.8rem;

    h1 {
        font-size: 1.6rem;
        font-weight: 400;
        color: ${({theme}) => theme["gray-paragraph"]};
    }

    span {
        background-color: ${({theme}) => theme["gray-price"]};
        color: ${({theme}) => theme.white};

        font-size: 1.5rem;
        font-weight: 700;

        padding: 0.4rem 0.6rem;
        border-radius: 5px;
    }
`

export const ProductImage = styled.div`
    flex: 1;
    padding: 1.9rem 5.3rem;
`