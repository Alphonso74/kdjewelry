import React, {Component} from 'react';
import Navbar from "../UI/Navbar";
import './CatalogCSS.css';
import {NavLink} from "react-router-dom";
import photo from "../../pictures/jewelry1.jpg";
import photo1 from "../../pictures/jewcrystal.jpg";
import photo2 from "../../pictures/jewhand2.jpg";
import photo3 from "../../pictures/jewcone.jpg";
import link3 from "../../pictures/linkedin.png";
import link1 from "../../pictures/insta4.jpg";
import M from "materialize-css/dist/js/materialize.min";

class Catalog extends Component {


    componentDidMount() {


        var elems = document.querySelectorAll('.carousel');
        var instances = M.Slider.init(elems, {
            indicators: true,
            padding: 200,
        });


    }

    render(){



        return (
            <body className="backgroundimg12 ">

            <header>

                <Navbar />

                <div className="row  center-align">
                    <div className=" col s12">
                        <br/>
                        <br/>
                        <br/>
                        <span className="center center-align Caveat black-text">Catalog</span>


                    </div>
                </div>

            </header>

            <main >

                <div className="center container">

                <div className="carousel " >

                    <a className="carousel-item" href="www.youtube.com" ><img  alt="fsfe" src={photo1}/></a>

                    <a className="carousel-item" href="www.youtube.com"><img alt="fsfe" src={photo2}/></a>

                    <a className="carousel-item" href="www.youtube.com"><img alt="fsfe" src={photo3}/></a>

                    <a className="carousel-item" href="www.youtube.com"><img alt="fsfe" src={photo}/></a>

                    <a className="carousel-item" href="www.youtube.com"><img alt="fsfe" src={photo}/></a>

                </div>

            </div>







            </main>

            <footer className="page-footer black Caveat">
                <div className="container">
                    <div className="row">
                        <div className="col  s6 center-align">
                            <h5 className="white-text">Rings</h5>
                            <h5 className="white-text ">Braclets</h5>
                            <h5 className="white-text ">Necklaces</h5>

                        </div>
                        <div className="col  s6 center-align">
                            <h5 className="white-text">Contact Me About Customs</h5>
                            <h5 className="white-text">Kyleigh Dague</h5>
                            <h5 className="white-text">Jewelry By Ky</h5>


                        </div>
                    </div>
                </div>


            </footer>


            </body>
        );
    }
}

export default Catalog;
