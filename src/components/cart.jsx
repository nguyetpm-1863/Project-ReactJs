import React from 'react';
import Banner from '../assets/banner-collection.jpg';

import { Table } from 'antd';

const Cart = () => {
  const columns = [
    { title: 'STT', dataIndex: 'number', key: 'number' },
    { title: 'Sản phẩm', dataIndex: 'name', key: 'name' },
    { title: 'Hình ảnh', dataIndex: 'image', key: 'image' },
    { title: 'Số lượng', dataIndex: 'quantily', key: 'quantily' },
    {
      title: 'Delete',
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
