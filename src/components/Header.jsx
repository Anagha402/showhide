import React from 'react'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
  } from 'mdb-react-ui-kit';
function Header() {
  return (
    <div>
      
        <MDBNavbar light bgColor='info'>
        <MDBContainer fluid className='bg-info'>
          <MDBNavbarBrand href='#'className='bg-info'>
            <img className='border rounded'
              src='https://th.bing.com/th/id/R.0ca9cc34607aab8cb722ab67b7b5f958?rik=FF2fM%2bCW7RqwCw&riu=http%3a%2f%2fwebbiquity.com%2fwp-content%2fuploads%2f2011%2f02%2fEmail-Icon.jpg&ehk=%2fGdR90TBkvGgN6Nmd6O6tOuSydW00%2bewtbcohsgmeQo%3d&risl=&pid=ImgRaw&r=0'
              height='50'
              alt=''
              loading='lazy'
            />
            SHOW-HIDE
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
      
    </div>
  )
}

export default Header
