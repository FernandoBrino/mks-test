import Image from "next/image"
import { FC, ReactNode, useState } from "react"
import { Footer, Header, LayoutContainer } from "./styles"
import logoMks  from "@/assets/logo.svg"

import { MdShoppingCart } from 'react-icons/md'
import { Cart } from "./components/Cart"
import { useAppSelector } from "@/hooks/selector"

interface LayoutProps {
    children: ReactNode
}

export const Layout: FC<LayoutProps> = ({ children }) => {
    const [cartIsOpen, setCartIsOpen] = useState(false);
    const cartQuantity = useAppSelector(state => state.cart.cart.length)

    function handleOpenCart () {
        setCartIsOpen(!cartIsOpen);
    }

    return (
        <>
            {cartIsOpen && <Cart handleOpenCart={handleOpenCart}/>}
            <LayoutContainer>

                <Header>
                    <Image src={logoMks} alt=""/>

                    <button onClick={handleOpenCart}>
                        <MdShoppingCart size={20}/>
                        <span>{cartQuantity}</span>
                    </button>
                </Header>
      
                <main>
                    {children}
                </main>

                <Footer>
                    <p>MKS sistemas © Todos os direitos reservados</p>
                </Footer>
            </LayoutContainer> 
        </>
        
    )
}