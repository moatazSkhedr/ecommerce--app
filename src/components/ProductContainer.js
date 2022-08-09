import React from 'react'
import styled from 'styled-components'
import ProductItem from './ProductItem'
import { useSelector } from 'react-redux'
function ProductContainer() {
  const {cartItems} = useSelector((state)=>state.cart);
  return (
    <Containdr>
     
      {
        cartItems.map((item)=>{
          return <ProductItem key = {item.id} {...item} />
        })

      }
    </Containdr>
  )
}

export default ProductContainer;

const Containdr = styled.div`
  width:100vw;
  height:100%;
  margin-top:40px;
  display:flex;
  flex-wrap:wrap;
  justify-content: space-around;
  width:100vw;
`
