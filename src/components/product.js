import React from 'react';
import { Row, Col, Button } from 'antd';

const Product = (props) => {
  const product = JSON.parse(localStorage.getItem('detail'));

  return (
    <>
      <div className='detail'>
        <div className='container'>
          <Row>
            <Col span='12'>
              <img
                className='img-responsive'
                alt= { product.title }
                src= { product.image }
              />
            </Col>
            <Col span='12'>
              <div className='product'>
                <h2 className='product__title'>
                  { product.title }
                </h2>
                <p className='product__description'>
                  { product.description }
                </p>
                <p className='product__price'>
                  { product.price }
                </p>
                <div className='button'>
                  <Button type='primary' className='button__product'>Add to cart</Button>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}

export default Product;