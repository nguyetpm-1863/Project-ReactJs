import React, { useState, useEffect } from 'react';
import Banner from '../assets/banner-collection.jpg';

import { Button, Alert } from 'antd';
import { DeleteFilled } from '@ant-design/icons';

const Cart = () => {
  const dataCart = JSON.parse(localStorage.getItem('cart'));
  const [show, setShowCart] = useState(true);
  const toggleShowCart = () => setShowCart(!show);

  const [list, deleteItem] = useState(dataCart);

  const deleteItemCart = (id) => {
    deleteItem(list.filter(item => item.id !== id));
  }

  useEffect (() => {
    localStorage.setItem('cart', JSON.stringify(list));
  })

  return (
    <>
      <div className='cart'>
        <div className='banner image'>
          <img className='img-responsive image__center' src={ Banner } alt='Banner'/>
        </div>

        <div className='container'>
          <h2 className='page-title'>Giỏ hàng</h2>
          { show ?
            <>
              <div className='table-responsive'>
                <table>
                  <thead>
                    <tr>
                      <th>STT</th>
                      <th>Sản phẩm</th>
                      <th>Hình ảnh</th>
                      <th>Số lượng</th>
                      <th>Giá</th>
                      <th>Xoá</th>
                    </tr>
                  </thead>
                  <tbody>
                    { list.map( (item, index) =>
                      <tr key={ item.id } >
                        <td>{ index + 1 }</td>
                        <td>{ item.title }</td>
                        <td>
                          <img src={ item.image } alt={ item.name } className='img-responsive'/>
                        </td>
                        <td>{ item.quantity }</td>
                        <td>{ item.price }</td>
                        <td>
                          <Button onClick={() => deleteItemCart(item.id)} className='button__add'><DeleteFilled /></Button>
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
              <div className='cart__button' >
                <Button className='cart__button-submit' onClick={toggleShowCart} >Xác nhận đặt hàng</Button>
              </div>
            </>
          :
            <div className='cart__submit'>
              <Alert
                message="Đặt hàng thành công"
                description="Chúng tôi sẽ liên hệ trong thời gian sớm nhất"
                type="success"
                showIcon
              />
            </div>
          }
        </div>
      </div>
    </>
  );
}

export default Cart;
