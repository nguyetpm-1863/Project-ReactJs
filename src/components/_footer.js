import React from 'react';
import { MailOutlined, PhoneOutlined, GlobalOutlined } from '@ant-design/icons';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='ft container'>
        <div className='ft-contact'>
          <h3 className='ft__title'>
            THÔNG TIN LIÊN HỆ
          </h3>
          <div className='ft__contact-desc'>
            Vietnam Tiptop Travel cam kết nỗ lực hết mình nhằm cung cấp tours và dịch vụ đúng với những giá trị mà khách hàng mong đợi.
          </div>
          <div className='ft__contact-address'>
            <span className='ft__contact-icon'><GlobalOutlined /></span>
            <span className='ft__contact-detail'>
              Địa chỉ:  13 - KeangNam, Phạm Hùng, Mễ Trì, Nam Từ Liêm, Hà Nội
            </span>
          </div>
          <div className='ft__contact-tel'>
            <span className='ft__contact-icon'><PhoneOutlined /></span>
            <span className='ft__contact-detail'>
              Số điện thoại:   <a className='link' href='tel:+84123 456 7890'>+84123 456 7890</a>
            </span>
          </div>
          <div className='ft__contact-email'>
            <span className='ft__contact-icon'><MailOutlined /></span>
            <span className='ft__contact-detail'>
              Email:   <a className='link' href='mailto:abc.travel@gmail.com'>abc.travel@gmail.com</a>
            </span>
          </div>
        </div>
        <div className='ft__subscribe'>
          <h3 className='ft__title'>
            Chấp nhận thanh toán
          </h3>
          <div className='pay_acept'>
            <a className='link' href='/'>
              <img src='//theme.hstatic.net/1000346221/1000440535/14/pay_acept.png?v=1699' alt='Pay' className='img-responsive' />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;