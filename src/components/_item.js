import React, { useEffect } from 'react';
import { Card, Col, Button } from 'antd';
import { useDispatch } from 'react-redux';

import {
  Link
} from 'react-router-dom';

import {
  getDetailProduct,
} from '../redux/actions';

const { Meta } = Card;

const Item = (props) => {
  const dispatch = useDispatch();

  const addToCart = (item) => {

  }
  
  const handleProduct = (item) => {
    localStorage.setItem('detail', JSON.stringify(item));
  };

  return (
    <>
      <Col span='6' key= { props.items.id }>
        <Card
          cover={
            <img
              className='img-responsive'
              alt= { props.items.title }
              src= { props.items.image }
            />
          }
        >
          <Meta
            title= { props.items.title }
            description= { props.items.description }
          />
          { props.items.price !== undefined ?
            <div className='product-add' >
              <p className='price'>Giá: <span className='price__number'>{ props.items.price }</span></p>
              <div className='product-add__button button' >
                <Link to={`/product/${props.items.id}/details`}  className='button__detail'>
                  <Button onClick={() => handleProduct(props.items)} type='primary' className='button__detail'>Chi tiết</Button>
                </Link>
                <Button onClick={() => addToCart(props.items)} type='primary' className='button__add'>Add to cart</Button>
              </div>
            </div>
            :
            null
          }
        </Card>
      </Col>
    </>
  )
}

export default Item;