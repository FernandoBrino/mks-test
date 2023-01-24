import styled from "styled-components";

export const ProductBuyedContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 2rem;
    position: relative;

    width: 37.9rem;
    padding: 1.9rem 2.3rem;
    border-radius: 8px;

    background-color: ${({theme}) => theme.white};
    box-shadow: -2px 2px 10px rgba(0, 0, 0, 0.05);

    .price {
        font-size: 1.5rem;
        font-weight: 700;
        line-height: 1.7rem;
    }

    @media(max-width: 1094px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 25rem;
        padding: 2.2rem 1.6rem;


        .price {
            padding: 0.8rem 1.2rem;
            border-radius: 5px;
            height: 3.4rem;

            font-size: 1.5rem;
            font-weight: 700;
            line-height: 1.5rem;

            background-color: ${({theme}) => theme["gray-price"]};
            color: ${({theme}) => theme.white};
        }
    }
`

export const Title = styled.div`
    display: flex;
    align-items: center;
    gap: 2.1rem;

    h1 {
        width: 100%;
        font-weight: 400;
        font-size: 1.3rem;
        color: ${({theme}) => theme["gray-paragraph"]};
    }

    @media(max-width: 1094px) {
        display: flex;
        flex-direction: column;

        img {
            width: 8rem;
            height: 9.5rem;
        }

        h1 {
            width: 100%;
            padding: 0 1.6rem;
            white-space: nowrap;
        }
    }
`

export const Quantity = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 0.4rem;

    p {
        font-size: 0.7rem;
    }

    @media (max-width: 1094px) {
        p {
            display: none;
        }
    }
`

export const ChangeQuantity = styled.div`
    display: flex;
    border-radius: 4px;
    align-items: center;
    justify-content: center;
    
    padding: 0.5rem 0.4rem;
    gap: 0.4rem;
    margin-bottom: 1.5rem;

    border: 1px solid #BFBFBF;

    svg {
        cursor: pointer;
    }

    span {
        padding: 0 0.4rem;
        font-size: 1rem;
        border-right: 1px solid #BFBFBF;
        border-left: 1px solid #BFBFBF;
    }

    @media(max-width: 1094px) {
        margin-bottom: 0rem;
        padding: 1rem 1.5rem;
        gap: 0.8rem;
        height: 3.4rem;

        span {
            font-size: 2rem;
        }
    }
`

export const RemoveProduct = styled.button`
    display: flex;
    padding: 0.5rem;

    border: none;
    border-radius: 12px;

    position: absolute;
    right: -1rem;
    top: -1rem;


    background-color: ${({theme}) => theme.black};
    color: ${({theme}) => theme.white};

    cursor: pointer;

    @media (max-width: 1094px) {
        background-color: ${({theme}) => theme.white};
        right: 0;
        top: 0;

        svg {
            color: ${({theme}) => theme.black};
            font-size: 3rem;
        }
    }
`

export const PriceByQuantity = styled.div`
    display: flex;
    align-items: center;
    gap: 2rem;

    @media (max-width: 1094px) {
        display: flex;
        align-items: center;
    }
`
