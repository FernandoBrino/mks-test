import { FC } from "react";
import { ChangeQuantity, PriceByQuantity, ProductBuyedContainer, Quantity, RemoveProduct, Title } from "./styles";
import { AiOutlineMinus, AiOutlinePlus, AiOutlineClose } from "react-icons/ai"
import Image from "next/image";
import { useDispatch } from "react-redux";
import { removeProduct, increaseQuantity, decreaseQuantity } from "@/features/cart/cart-slice";
import { priceFormatter } from "@/utils/formatter";

interface ICart {
    id: number
    title: string
    price: number
    quantity: number
    img: string
}

interface ProductBuyedProps {
    product: ICart
}

export const ProductBuyed: FC<ProductBuyedProps> = ({ product }) => {
    const dispatch = useDispatch()

    function handleRemoveProduct() {
        dispatch(removeProduct(product.id))
    }

    function handleIncreaseQuantity() {
        dispatch(increaseQuantity(product.id))
    }

    function handleDecreaseQuantity() {
        dispatch(decreaseQuantity(product.id)) 
    }

    return (
        <ProductBuyedContainer>
            <RemoveProduct onClick={handleRemoveProduct}>
                <AiOutlineClose />
            </RemoveProduct>

            <Title>
                <Image src={product.img} alt="" width={46} height={57}/>
                <h1>{product.title}</h1>
            </Title>
            
            <PriceByQuantity>
                <Quantity>
                    <p>Qtd:</p>

                    <ChangeQuantity>
                        <AiOutlineMinus size={10} onClick={handleDecreaseQuantity}/>
                        <span>{product.quantity}</span>
                        <AiOutlinePlus size={10} onClick={handleIncreaseQuantity}/>
                    </ChangeQuantity>
                </Quantity>

                <p className="price">
                    {priceFormatter.format(product.price)}
                </p>
            </PriceByQuantity>
            
        </ProductBuyedContainer>
    )
}