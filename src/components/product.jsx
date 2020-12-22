import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Row, Col, Button, Tabs } from 'antd';

import data from '../assets/data.json';

import * as actions from '../redux/actions';

const { TabPane } = Tabs;

const Product = (props) => {
  const dispatch = useDispatch();
  const { productId } = useParams();
  const countItem = useSelector((state) => state.count);

  let itemProduct = data.collections.list.find(detail => parseInt(detail.id) === parseInt(productId));

  const addToCart = (item) => {
    dispatch(actions.getCountCartItem(countItem));
  }

  return (
    <>
      <div className='detail'>
        <div className='container'>
          <Row>
            <Col span='24' sm={{ span: 12 }}>
              <img
                className='img-responsive'
                alt= { itemProduct.title }
                src= { itemProduct.image }
              />
            </Col>
            <Col span='24' sm={{ span: 12 }}>
              <div className='product'>
                <h2 className='product__title'>
                  { itemProduct.title }
                </h2>
                <p className='product__description'>
                  { itemProduct.description }
                </p>
                <p className='product__price'>
                  { itemProduct.price }
                </p>
                <div className='button'>
                  <Button type='primary' onClick={() => addToCart(props.items)} className='button__product'>Add to cart</Button>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col span='24'>
              <Tabs defaultActiveKey='1' className='tabpanel'>
                <TabPane tab='Chi tiết tour' key='1'>
                  { itemProduct.detail }
                </TabPane>
                <TabPane tab='Chính sách' key='2'>
                  { itemProduct.policy }
                </TabPane>
              </Tabs>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}

export default Product;
