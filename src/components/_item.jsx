import React from 'react';
import { useSelector } from 'react-redux';

import { Card, Col, Button } from 'antd';
import { useDispatch } from 'react-redux';

import data from '../assets/data.json';

import * as actions from '../redux/actions';

import {
  Link
} from 'react-router-dom';

const { Meta } = Card;

const Item = (props) => {
  const dispatch = useDispatch();
  const countItem = useSelector((state) => state.count);
  let cart = [];
  let listProduct = data.collections.list;

  const addToCart = (id) => {
    dispatch(actions.getCountCartItem(countItem));

    let item = listProduct.find(product => parseInt(product.id) === parseInt(id));
    item.quantity = 1;

    if (localStorage.getItem('cart') !== null) {
      cart = JSON.parse(localStorage.getItem('cart'));

      // check if item in cart
      if (cart.find(product => parseInt(product.id) === parseInt(id)) !== undefined) {
        var foundIndex = cart.findIndex(x => parseInt(x.id) === parseInt(item.id));
        item.quantity = parseInt(item.quantity) + 1;
        cart[foundIndex] = item;
      }

      // if not in cart
      else {
        item.quantity = 1;
        cart.push(item);
      }
    } else {
      item.quantity = 1;
      cart.push(item);
    }

    localStorage.setItem('cart', JSON.stringify(cart));
  }

  return (
    <>
      <Col sm={{ span: 6 }} span='24' key= { props.items.id }>
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
                <Link to={`/product/${props.items.id}`}  className='button__detail'>
                  <Button type='primary' className='button__detail'>Chi tiết</Button>
                </Link>
                <Button onClick={() => addToCart(props.items.id)} type='primary' className='button__add'>Add to cart</Button>
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
