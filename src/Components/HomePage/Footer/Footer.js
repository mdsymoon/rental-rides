import React from 'react';
import { RiFacebookCircleLine } from 'react-icons/ri';
import { TiSocialTwitterCircular } from 'react-icons/ti';
import { TiSocialGooglePlusCircular } from 'react-icons/ti';
import { TiSocialLinkedinCircular } from 'react-icons/ti';
import { IoLogoInstagram } from 'react-icons/io';

const Footer = () => {
    return (
        <div className="footer  text-white " style={{backgroundColor:'#282E35'}}>
            <div className="container p-5 ">
                <div className="row ">
                    <div className="col-md-4">
                        <h3>CONTACT US</h3>
                        <p style={{borderBottom:'3px solid #2A7CE4', width:"80px"}}></p>
                        <p>mdsymoon11@gmail.com</p>
                        <p>+880 1864160100</p>
                        <p>Halishahar,Bangladesh</p>
                    </div>
                    <div className="col-md-4">
                        <h3>OPENING HOURS</h3>
                        <p style={{borderBottom:'3px solid #2A7CE4', width:"80px"}}></p>
                        <p>Monday-Friday: 9:00-20:00</p>
                        <p>Saturday: 9:00-17:00</p>
                        <p>Sunday: 9:00-15:00</p>
                    </div>
                    <div className="col-md-4">
                        <h3 >ABOUT US</h3>
                        <p style={{borderBottom:'3px solid #2A7CE4', width:"80px"}}></p>
                        <p>Lorem ipsum dolor  amet, consectetur adipisicing elit.<br/> In nemo ducimus delectus. Voluptatibus veniam sequi.</p>
                        <RiFacebookCircleLine style={{fontSize:'30px', marginRight:'5px'}}/>
                        <TiSocialTwitterCircular style={{fontSize:'30px', marginRight:'5px'}}/>
                        <TiSocialGooglePlusCircular style={{fontSize:'30px', marginRight:'5px'}}/>
                        <TiSocialLinkedinCircular style={{fontSize:'30px', marginRight:'5px'}}/>
                        <IoLogoInstagram style={{fontSize:'30px', marginRight:'5px'}}/>

                    </div>
                </div>
            </div>
            <p  className="bg-dark py-3 text-center m-0" >Copyright © All Rights Reserved</p>
        </div>
        
       
    );
};

export default Footer;