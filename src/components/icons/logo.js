import React from 'react';
import logo from 'assets/images/logo.png'
import Image from 'components/image'
const Logo = ({ white, ...props }) => {
  return (
   <Image src={logo}></Image>
  );
};

export default Logo;
