import React from "react";
import styled from "styled-components";
import CheckoutItem from "./CheckoutItem";
import { useSelector } from "react-redux/es/exports";
import { useDispatch } from "react-redux/es/exports";
import { clearBasket } from "../future/cartSlice";
export default function Checkout() {
  const { basket, amount , total } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  if (amount <= 0) {
    return (
      <Empty_basket>
        <h1>Your basket is empty </h1>
      </Empty_basket>
    );
  }
  return (
    <>
    <Total>
          <h1>Total : {total} $ </h1>
          <div className="clear">
            <span onClick={()=>dispatch(clearBasket())}>Clear Items</span>
          </div>
    </Total>
      <Contaienr>
        {basket.map((item) => {
          return <CheckoutItem key={item.id} {...item} />;
        })}
      </Contaienr>
    </>
  );
}
const Total = styled.div`
  display:flex;
  align-items:center;
  justify-content: space-around;
  margin:20px;
  padding:10px;
  background-color:#ecf0f1 ;
  font-size:10px;
  font-weight:400;
  letter-spacing: 3px;
  .clear{
    display:flex;
    
    margin-top:10px;
  }
  span{
    
    background-color:orange;
    padding:8px;
    font-size:14px;
    cursor:pointer;
  }


`;
const Contaienr = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 10px;
  padding: 10px;
  max-width: 100%;
  justify-content: space-between;
`;
const Empty_basket = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
  h1 {
    letter-spacing: 2px;
    font-weight: 400;
  }
`;
