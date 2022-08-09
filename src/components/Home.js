import React from 'react'
import ImageSlider from './ImageSlider';
import styled from 'styled-components';
import ProductContainer from './ProductContainer';

function Home() {
  return (
    <Contaienr>
        <ImageSlider />
        <ProductContainer />

    </Contaienr>
  )
}

export default Home;

const Contaienr = styled.div`
    height:100%;
    background-color:#F5F5F5;
    overflow-x : hidden;
    overflow-y : hidden;

`
