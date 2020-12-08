import React from 'react';
import { Card, Col, Button } from 'antd';

const { Meta } = Card;

const Item = (props) => {
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
              <div className='product-add__button' >
                <Button type='primary'>Chi tiết</Button>
                <Button type='primary'>Add to cart</Button>
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