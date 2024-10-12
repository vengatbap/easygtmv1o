'use client'
import React from 'react';
import Image from "next/image";
import LogoIcon from "../../public/images/logo-icon-lg.svg";
import Link from 'next/link';

const Logo = (size: any | number | 40 ) => {
  return (
   <Link href={'/dashboard'}>
      <Image src={LogoIcon} alt="logo" loading='eager' width={size} height={size} />
    </Link>
  )
}


export default Logo
