import { FC } from "react";
import { CartContainer, CloseCart, ProductsList, Total } from "./styles";
import { AiOutlineClose } from 'react-icons/ai'
import { ProductBuyed } from "./components/ProductBuyed";
import { useAppSelector } from "@/hooks/selector";
import { priceFormatter } from "@/utils/formatter";

interface CartProps {
    handleOpenCart: () => void;
}

export const Cart: FC<CartProps> = ({ handleOpenCart }) => {
    const cart = useAppSelector(state => state.cart.cart)
    const productsPrice = cart.map(product => {
        return {
            price: product.price,
            quantity: product.quantity
        }
    })

    const total = productsPrice.reduce((acc, current) => acc += current.price * current.quantity, 0)

    return (
        <CartContainer>
            <header>
                <h1>Carrinho de compras</h1>
                <CloseCart onClick={handleOpenCart}>
                    <AiOutlineClose size={20}/>
                </CloseCart>
            </header>

            <ProductsList>
                {cart.map(product => {
                    return (
                        <ProductBuyed key={product.id} product={product}/>
                    )
                })}
            </ProductsList>

            <Total>
                <span>
                    <p>Total</p>
                    <p>{priceFormatter.format(total)}</p>
                </span>

                <button>
                    Finalizar Compra
                </button>
            </Total>
        </CartContainer>
    )
}