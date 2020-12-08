import React, { useState } from 'react';
import { Row, Col, Alert } from 'antd';
import { Form, Input, Button } from 'antd';
import Logo from '../public/logo.png';
import Banner from '../public/banner.jpg';
// import MapSection from './map';
import { MailOutlined, PhoneOutlined, GlobalOutlined } from '@ant-design/icons';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

// const location = {
//   address: 'KeangNam, Phạm Hùng, Mễ Trì, Nam Từ Liêm, Hà Nội',
//   lat: 21.01664189874211,
//   lng: 105.78386923103054,
// }

const Contact = () => {
  const onFinish = values => {
    setShowForm(false);
  };

  const validateMessages = {
    required: 'Bạn chưa nhập thông tin',
    types: {
      email: 'Sai định dạng email',
    },
  };
  const [showForm, setShowForm] = useState(true);
  return (
    <>
      <Row>
        <div className='image'>
          <img className='img-responsive image__center' src={ Banner } alt='Banner' />
        </div>
      </Row>
      <div className='contact'>
        <div className='container'>
          <Row>
            <Col span={16}>
              <h2 className='page-title'>
                Liên hệ
              </h2>
            { showForm ?
              <Form onFinish={onFinish} validateMessages={validateMessages}>
                <Form.Item name={['user', 'name']} label='Nhập tên' rules={[{ required: true }]}>
                  <Input />
                </Form.Item>
                <Form.Item name={['user', 'email']} label='Nhập email' rules={[{ type: 'email' }]}>
                  <Input />
                </Form.Item>
                <Form.Item name={['user', 'messenger']} label='Để lại tin nhắn'>
                  <Input.TextArea />
                </Form.Item>
                <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 7 }}>
                  <Button type='primary' htmlType='submit'>
                    Submit
                  </Button>
                </Form.Item>
              </Form>
              :
              <div className='form-submit'>
                <Alert message='Bạn đã gửi thông tin liên hệ thành công. Vui lòng đợi phản hồi từ chúng tôi!' type='success' />
              </div>
            }
            </Col>
            <Col span={8} >
              <div className='contact-wrapper'>
                <div className=' text-center'>
                  <a href='/'>
                    <img src={ Logo } alt='Việt Nam Tiptop Travel'/>
                  </a>
                </div>
                <div className='ft-contact'>
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
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <Row>
        <Col span={24}>

        </Col>
      </Row>
    </>
  );
}

export default Contact;