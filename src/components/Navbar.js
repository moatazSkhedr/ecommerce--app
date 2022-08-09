import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
export default function Navbar() {
  const {amount} = useSelector((state)=>state.cart);
  return (
    <Nav>
        <Link to="/">
        <h1 className="logo">Shopping</h1>
        </Link>
      <div className="input">
        <input type="text" />
        <Search>
          <svg
            className="search"
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="17"
            fill="currentColor"
            class="bi bi-search"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
        </Search>
      </div>
      <Items>
        <Link to ="/login">
        <div className="items">
        <span>hello,</span>
        <p>Sing in</p>
      </div>
        </Link>
      <div className="items">
        <span>Returns,</span>
        <p>& Orders</p>
      </div>
      <div className="items">
        <span>Your</span>
        <p>Prime</p>
      </div>
      <Link to="/checout">
      <div className="items basket">
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-cart-fill" viewBox="0 0 16 16">
     <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
        </svg>
        <h1>{amount}</h1>
      </div>
      </Link>
      </Items>
    </Nav>
  );
}
const Nav = styled.div`
position:sticky;
top:0;
z-index:100;
height: 70px;
  background-color: #ecf0f1;
  padding: 10px;
  display: flex;
  align-items: center;
  .logo {
    padding-bottom:10px;
    margin-right:20px;
    cursor: pointer;
  }
  .input {
    display: flex;
    flex: 1;
    align-items: center;

    input {
      flex: 1;
      height: 30px;
    }
  }
`;
const Search = styled.div`
  background-color: orange;
  padding: 5px;
  cursor: pointer;
  border-radius: 2px;
  svg {
    font-size: 20px;
    font-weight: bold;
  }
`
const Items = styled.div`
display:flex;
align-items:center;
margin-left:10px;
cursor:pointer;
.items{
    margin-left:15px;
}
.basket{
    display:flex;
    align-items:center;
}
  span{
    font-size:10px;
    font-weight:bold;
  }
  p{
    font-size:15px;
    font-weight:bold; 
}
`
