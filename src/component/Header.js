import React from 'react'

function Header() {
  return (
    <div className="heade-main">
    <div className="header">
    <div className="info">
    <h5>Hello , I'm</h5>
    <h2> Rajnandani Bais</h2>
        <h6>  Full Stack Developer </h6>
        <div className="info-link">
       <a href="https://www.linkedin.com/in/rajnandani-bais-197a99184/" className="link">
       <img src="data:image/png;base64,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" 
       alt="" width="50px" height="50px" borderRadius="2px"/></a>
       <a href="https://github.com/Rajnandanibais" className="linkk"><img src="https://image.flaticon.com/icons/png/512/25/25231.png" alt=""
       width="40px" height="40px" borderRadius="2px"
       /></a>
       <a href="https://www.instagram.com/nandani.singh/"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfUPA6AP0KfR5JeMg128H1axkKI9ZOud1ybg&usqp=CAU"
        alt=""   width="40px" height="40px" borderRadius="2px"/></a>
         <section>
       <img src="https://www.vhv.rs/dpng/d/443-4438519_transparent-gmail-icon-blue-email-address-icon-png.png"
   alt="" width="40" height="40px" borderRadius="2rem"/><h7>rajnandanisinghbais@gmail.com</h7></section>
        </div></div>
    <div className="imagee">
    <img src="image/ima.JPG"alt="img" width="250px"
  height="250px"/>
    </div>
    
    </div>
    </div>
      
    
  )
}

export default Header;
