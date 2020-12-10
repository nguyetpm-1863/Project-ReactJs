import React, { useState } from 'react';
import { Card, Col, Button } from 'antd';

import {
  Link
} from 'react-router-dom';

const { Meta } = Card;

const Item = (props) => {
  const [count, setCount] = useState(0);
  return (
    <>
      <Col span='6' key= { props.items.id }>
        <Card
          cover={
            <img
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
                <Link to={ props.items.url } className='button__detail'>
                  <Button type='primary' className='button__detail'>Chi tiết</Button>
                </Link>
                <Button type='primary' className='button__add' onClick={() => setCount(count + 1)}>Add to cart</Button>
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