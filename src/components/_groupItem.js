import React from 'react';
import { Row } from 'antd';
import Item from './_item';

import Icon from '../public/title_icon.png';

function GroupItem (props) {
  const groups = (props.collections === undefined) ? props.blogs : props.collections;

  return (
    <section className={ (props.collections === undefined) ? 'blog-index' : 'collection-index' }>
      <div className='container'>
        <div className='section-title'>
          <img
            alt= { groups.title }
            src= { Icon }
          />
          <h2>
            { groups.title }
          </h2>
        </div>
        <Row gutter={16}>
          { groups.list.map( (item, index) => <Item key={index} items={ item }/> )}
        </Row>
      </div>
    </section>
  )
}

export default GroupItem;