import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
   return (
      <div className='header'>
         <Link to='/'>Create person</Link>
         <Link to='/list'>Person list</Link>
      </div>
   );
};

export default Header;