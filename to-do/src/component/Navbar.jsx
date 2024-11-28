import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Style/Navbar.css';
import GetUserDetails from '../util/GetUser';
import { Dropdown } from 'antd';

function Navbar({ active }) {
  const [users ,setusers]=useState("");

  useEffect(()=>{
    const userDetails= GetUserDetails();
    setusers(userDetails);
  },[]);
  const items=
  return (
    <div className='Main-Navbar'>
      <nav>
          <div className='Navbat-Container'>
            <Link  className={active==='home' && 'activeNav'} to='/'>Home</Link>
          {users &&<Link  className={active==='myTask' && 'activeNav'} to='/to-do-list'>MY Task</Link>}

          {users ?<Dropdown menu={{
              items,
            }}
            placement='bottom'
            arrow>
            
          </Dropdown>
           : <><Link className="ab" to='/login'>Login</Link>
            <Link className="ab" to='/signup'>Sign-up</Link>
      </>}
            
          </div>
      </nav>
    </div>
  )
}

export default Navbar