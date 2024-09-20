import React from 'react';
import images from './assets/images';
import Image from 'next/image';
import Container1 from './components/container1'
import Container2 from './components/container2'
import Container3 from './components/container3'
import Container4 from './components/container4'
import Container5 from './components/container5'

function View() {  
  return (
    <div className='bg-white min-h-screen'> 
      <Image
        src={images.vector1}
        alt="vector1"
        className="w-[100vw]"
      />
      <Container1/>
      <Container2/>
      <Container3/>
      <Container4/>
      <Container5/>
    </div>
  );
}

export default View;
