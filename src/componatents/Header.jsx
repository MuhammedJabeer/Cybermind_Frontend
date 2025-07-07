import React from 'react';
import Nav from './Nav';
import { Search } from 'lucide-react';
// import { Search } from 'lucide-react';
import Serarch from '../componatents/Search'
function Header() {
  return (
    <div className="w-[1440px] h-[214px] opacity-100 bg-white w-full  shadow-[0px_14px_14px_0px_#C6BFBF40]" >
      <Nav/>
      <Serarch/>
    </div>
  );
}

export default Header;
