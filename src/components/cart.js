import React from 'react';
import Banner from '../assets/banner-collection.jpg';

import { Table } from 'antd';

const Cart = () => {
  const columns = [
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Age', dataIndex: 'age', key: 'age' },
    { title: 'Address', dataIndex: 'address', key: 'address' },
    {
      title: 'Action',
      dataIndex: '',
      key: 'x',
    },
  ];
  return (
    <>
      <div className='cart'>
        <div className='banner image'>
          <img className='img-responsive image__center' src={ Banner } alt='Banner'/>
        </div>

        <div className='container'>
          <h2 className='page-title'>Giỏ hàng</h2>
          <Table
            columns={columns}
            expandable={{
              expandedRowRender: record => <p style={{ margin: 0 }}>{record.description}</p>,
              rowExpandable: record => record.name !== 'Not Expandable',
            }}
            dataSource={''}
          />
        </div>
      </div>
    </>
  );
}

export default Cart;