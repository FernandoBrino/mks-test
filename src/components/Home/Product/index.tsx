import Image from "next/image";
import { FC } from "react";
import { Container, Description, MainInfo, ProductImage } from "./styles";
import { FiShoppingBag } from 'react-icons/fi';
import { addProduct } from "@/features/cart/cart-slice"
import { useDispatch } from "react-redux";
import { useAppSelector } from "@/hooks/selector";
import { priceFormatter } from "@/utils/formatter";

interface ProductProps {
    product: {
        id: number
        title: string
        price: number
        description: string
        quantity: number
        img: string
    }
}

export const Product: FC<ProductProps> = ({ product }) => {
    const dispatch = useDispatch()


    function handleBuyProduct() {
        const newProduct = {
            id: product.id,
            title: product.title,
            price: product.price,
            quantity: 1,
            img: product.img
        }

        dispatch(addProduct(newProduct))
    }

    return (
        <Container>
            <ProductImage>
                <Image src={product.img} alt="" priority/>
            </ProductImage>


            <Description>
                <MainInfo>
                    <h1>{product.title}</h1>
                    <span>{priceFormatter.format(product.price)}</span>
                </MainInfo>

                <p>{product.description}</p>
            </Description>

      
            <button onClick={handleBuyProduct}>
                <FiShoppingBag size={15}/>
                Comprar
            </button>
        </Container>
    )
}