import React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux';
import { removeFromBasket } from '../future/cartSlice';
import { useSelector } from 'react-redux/es/exports';
function CheckoutItem({id , title , price , img , rating}) {
    const dispatch = useDispatch();
    const {total } = useSelector((state)=>state.cart);
    const rat = Array(rating).fill().map((_)=>{ return `⭐`});

  return (
    <Container>
      <img src={img} />
      <h1>{title}</h1>
      <p className='price'>price: {price} $</p>
      <p className='rating'>{rat}</p>
      <div className='remove-item' onClick={()=>dispatch(removeFromBasket(id))}>Remove item</div>
    </Container>
  )
}

export default CheckoutItem
const Container = styled.div`
margin:20px;
height:450px;
background-color:#FAFAFA;

    img{
        widht:300px;
        height:250px;
    }
    h1{
        font-size:30px;
        font-weight:400;
        padding:2px;
        letter-spacing: 2px;

    }
    .price{
        margin-top:
        font-size:15px;
        font-weight:bold;
        padding:2px;
    }
    .rating{
        margin-top:10px;
        font-size:20px;
    }
    .remove-item{
        margin-top:15px;
        background-color:orange;
        width:150px;
        padding:5px;
        font-size:20px;
        text-align:center;
        letter-spacing: 2px;
        cursor:pointer;
    }


`
