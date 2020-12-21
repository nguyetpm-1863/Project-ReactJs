import React from 'react';
import { Row } from 'antd';
import Banner from '../assets/banner-collection.jpg';
import GroupItem from './_groupItem';
import data from '../assets/data.json';

const Collection = () => {
  const collections = data.collections;
  return (
    <>
      <Row>
        <div className='image'>
          <img className='img-responsive image__center' src={ Banner } alt='Banner' />
        </div>
      </Row>
      <GroupItem collections={ collections }/>
    </>
  );
}

export default Collection;
