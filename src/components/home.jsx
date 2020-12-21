import React from 'react';
import Slider from './_slider';
import GroupItem from './_groupItem';
import data from '../assets/data.json';

function Home () {
  const collectionsDomestic = data.collectionDomestic;
  const collectionForeign = data.collectionForeign;
  const blogIndex= data.blogIndex;

  return (
    <>
      <Slider />
      <GroupItem collections={ collectionsDomestic }/>
      <GroupItem collections={ collectionForeign }/>
      <GroupItem blogs={ blogIndex }/>
    </>
  );
}

export default Home;
