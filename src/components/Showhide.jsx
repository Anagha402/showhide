import React, {useState} from 'react'
import { MDBBtn } from 'mdb-react-ui-kit';

function Showhide() {
  
  // useState hook to manage visibility state
  const [isVisible, setIsVisible] = useState(true);

  // Show function sets visibility to true
  function show() {
    setIsVisible(true);
  }

  // Hide function sets visibility to false
  function hide() {
    setIsVisible(false);

  }
  return (
    <div className='container text-center border border-success mt-5 p-5'>
      <div className="container bg-light  p-5">
        <img className='m-5' src="https://static.vecteezy.com/system/resources/previews/014/440/980/original/email-message-icon-design-in-blue-circle-png.png" height={150} />
  {/* Conditionally render the <p> element based on isVisible */}
        <div id="display"className='bg-light' >
        {isVisible && <p className='bg-light'style={{fontWeight:600,fontSize:20}}>Hello</p>}
        
        </div>
<br /><br />

{/* SHOW button */}
        <MDBBtn className='me-1' color='success'onClick={show}>
        Show
      </MDBBtn>

      {/* HIDE button */}
      <MDBBtn className='me-1' color='danger'onClick={hide}>
        Hide
      </MDBBtn>
      </div>

      
    </div>
  )
}

export default Showhide

