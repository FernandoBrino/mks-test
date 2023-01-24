import { Product } from '@/components/Home/Product'
import { HomeContainer, ProductsContainer } from '@/styles/pages/home'
import Head from 'next/head'
import { productsList } from '@/utils/productList'

export default function Home() {
  return (
    <HomeContainer>
      <Head>
        <title>Home | MKS</title>
      </Head>
      
      <ProductsContainer>
        {productsList.map(product => {
          return(
            <Product product={product} key={product.id}/>
          )
        })}
      </ProductsContainer>
      
    </HomeContainer>
  )
}
