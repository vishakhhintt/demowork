import React from 'react';

import { Link } from 'react-router-dom';
import '../node_modules/font-awesome/css/font-awesome.min.css';
const Footer = props => {
    return (

        <footer >

            <div className="footer-form" data-aos="fade-up" style={{ backgroundImage: 'url(../../../assets/images/Kerala-Food-Idiyappam-and-Egg-Curry.jpg)' }}>
                <div className="container">
                    <h4 className="section-title mb-25 text-white">Feel Free to contact us for your customized meal plan</h4>
                    <form >
                        <div className="form-row">
                            <div className="form-group col-md-10 p12">
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label >Name</label>
                                        <input type="text" className="form-control" id="inputName" name="inputName" placeholder="Name*" />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label >Email</label>
                                        <input type="text" className="form-control" id="inputPhone" name="inputPhone" placeholder="Email*" />
                                    </div>

                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-6 ">
                                        <label >Mobile</label>
                                        <input type="text" className="form-control" id="inputmob" name="inputmob" placeholder="Mobile*" />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label >Message</label>
                                        <input type="text" className="form-control" id="inputmsg" name="inputmsg" placeholder="Message*" />
                                    </div>

                                </div>
                            </div>
                            <div className="form-group col-md-2 mb-0">
                                <button type="button" className="btn btn-success contact-btn mb-0" name="submitBtn" >Send Now</button>
                            </div>
                        </div>





                        <div className="clearfix"></div>
                    </form>

                </div>
            </div>
            <div className="footer-links" data-aos="zoom-in-up">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-2 col-md-6">
                            <a className="navbar-brand" href="/#" >
                                <img src={window.location.origin + "/assets/images/logo-new.png"} className="logo" alt="LOGO" width="110" />
                            </a>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h4 className="font-20">About</h4>
                            <p>Edible Kitchen Services<br /> JN Stadium, Kaloor<br /> Kochi - 6806644</p>
                        </div>
                        <div className="col-lg-2 col-md-6">
                            <h4 className="font-20">Phone Number</h4>


                            <p><a href="tel:0124 398 6371">0124 398 6371</a></p>
                        </div>
                        <div className="col-lg-2 col-md-6">
                            <h4 className="font-20">Quick Links</h4>
                            <ul><li><a href="#">My Account</a></li>
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Keto Plans</a></li>
                                <li><a href="#">Our Dishes</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6"><h4 class="font-20">Social media </h4>
                            <ul className="social-media">
                                <li><a href="#" target="_blank"><i className="fa fa-facebook-f"></i></a></li>
                                <li><a href="#" target="_blank"><i className="fa fa-whatsapp"></i></a></li>
                                <li><a href="#" target="_blank"><i className="fa fa-twitter"></i></a></li>
                                <li><a href="#" target="_blank"><i className="fa fa-instagram"></i></a></li>


                                <li><a href="#" target="_blank"><i className="fa fa-youtube-play"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copy-right">
                <div className="container">
                    <div className="copy-right-links">
                        <a href="#">Copyright 2020-2021 Edibles - All Rights Reserved</a>

                    </div>
                </div>
            </div>
        </footer >
    );

}

export default Footer;
