import React from 'react'
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css"

function Footer(){
  return (
    <div className="footer">
      <div className='socialMedia'>
        <a href='https://www.instagram.com/pra_.ween/' target='_blank' rel="noreferrer">
          <InstagramIcon />
        </a>
        <a href='https://twitter.com/NookaPraveen' target='_blank' rel="noreferrer">
          <TwitterIcon />
        </a>
        <a href='https://www.facebook.com/praveen.nooka.96' target='_blank' rel="noreferrer">
          <FacebookIcon />
        </a>
        <a href='https://www.linkedin.com/in/praveennooka/' target='_blank' rel="noreferrer">
          <LinkedInIcon />
        </a>
        
        <p> &copy; 2023 praveennooka</p>
      </div>
    </div>
  );
}

export default Footer;