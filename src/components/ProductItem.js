import React from 'react'
import styled from 'styled-components'
import { useDispatch , useSelector } from 'react-redux'
import { addToBasket } from '../future/cartSlice';
function ProductItem({id , title , price , img , rating}) {
  const dispatch = useDispatch();
  const {basket} = useSelector((state)=>state.cart);
  console.log(basket )
  const rat = Array(rating).fill().map((_)=>{ return `⭐`})
  return (
    <Container>
      <img src={img} />
      <h1>{title}</h1>
      <p className='price'>price: {price} $</p>
      <p className='rating'>{rat}</p>
      <div className='btn' onClick={()=>dispatch(addToBasket({
        id:id,
        title:title,
        price:price,
        img:img,
        rating:rating,
      }))}
      >Add Items</div>
    </Container>
  )
}

export default ProductItem;
const Container = styled.div`

cursor:pointer;
background-color:#FAFAFA;
padding:5px;
height:450px;

  img{
    max-width:400px;
    object-fit: contain ;
    margin-left:5px;
    widht:300px;
    height:250px;
  }
  h1{
    margin-left:5px;
    font-size:30px;
    font-weight:400;
    letter-spacing:3px;
  }
  .price{
    margin-left:5px;

    margin-top:5px;
    font-size:15px;
    font-weight:bold;
  }
  .rating{

    margin-top:5px;
    font-size:20px;
  }
  .btn{
    margin-top:10px;
    margin-left:5px;
    background-color:orange;
    max-width:150px;
    padding:5px;
    text-align:center;
    cursor:pointer;
    font-size:20px;
    font-weight:400; 
    &:hover{
      transform:scale(1.06);
      border-color:rgba(249 , 249 , 249 , 0.8);
    }
    
  }

`

