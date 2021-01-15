import React, {Component} from 'react';
import Navbar from "../UI/Navbar";
import './CustomsCSS.css';
// import photo1 from "../../pictures/jewcrystal.jpg";
// import photo2 from "../../pictures/jewhand2.jpg";
// import photo3 from "../../pictures/jewcone.jpg";
// import photo from "../../pictures/jewelry1.jpg";

class Customs extends Component {


    render(){



        return (
            <body className="backgroundimg123 ">

            <header className="section ">

                <Navbar />

                <div className="row  center-align">
                    <div className=" col s12">
                        <br/>
                        <br/>
                        <br/>
                        <span className="center center-align Caveat white-text">Customs</span>


                    </div>
                </div>

            </header>

            <main >








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

export default Customs;
