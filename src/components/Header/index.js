
import { useState } from 'react';
import AppModal from '../AppModal';
import DesktobNav from '../DesktobNav';
import './style.css';







const Header=()=>{

  const [hidden,setHidden] =useState(false);

  function hiddenHandler(){
    setHidden(!hidden)
  }


  return (
    <header className='header' style={{display:`${hidden?'none':'flex'}`}}>
      <div>
        <img src='http://demos.codexcoder.com/labartisan/html/maxino/assets/images/logo/logo.gif' alt='logo' />
      </div>
      <AppModal onClick={hiddenHandler}/>
       <DesktobNav/>
     
      
    </header>
  )
}
export default Header;