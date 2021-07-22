import React from 'react'
import "./Contact.css"
function Contact() {
  const handlesubmit=(e)=>{
 e.preventDefault();
  }
  return (
    <div className="contact" id="contact">
      <div className="image">
      <img className="imgee" src="https://img.freepik.com/free-vector/contact-us-concept-illustration_114360-2299.jpg?size=338&ext=jpg" alt=""/>
      <h3>hiii</h3>
      </div>
      
      <div className="inputss">
      <h2>CONTACT</h2>
      <form onSubmit={handlesubmit}>
      <input type="email" placeholder="Email" required="email"/>
      <textarea placeholder="Message"></textarea>
      <button type="submit">Send</button>
      </form>
      
      </div>
     
    </div>
  )
}

export default Contact
