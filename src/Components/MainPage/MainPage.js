import React, {Component} from 'react';
import Navbar from "../UI/Navbar";
import './MainPageCSS.css';
import M from "materialize-css/dist/js/materialize.min";
import photo from '../../pictures/jewelry1.jpg';
import photo1 from '../../pictures/jewcrystal.jpg';
import photo2 from '../../pictures/jewhand2.jpg';
import photo3 from '../../pictures/jewcone.jpg';





class MainPage extends Component {

    componentDidMount() {


        var elems = document.querySelectorAll('.slider');
        var instances = M.Slider.init(elems, {});


    }


    render(){



        return (
            <body className="backgroundimg1">

                <header className="section container ">
                <Navbar />
                <br/>
                </header>

                <main className="transparent z-depth-0">


                    <h1 className="center-align white-text Caveat">New Designs</h1>

                    <div className="container">
                    <div className="row  s12 ">
                        <div className="col s12 ">
                            <div className="card ">


                    <div className="slider">
                        <ul className="slides">
                            <li>
                                <img src={photo}/>
                                    <div className="caption center-align">
                                        {/*<h3>This is our big Tagline!</h3>*/}
                                        {/*<h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>*/}
                                    </div>
                            </li>
                            <li>
                                <img src={photo1}/>
                                    <div className="caption left-align">
                                        {/*<h3>Left Aligned Caption</h3>*/}
                                        {/*<h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>*/}
                                    </div>
                            </li>
                            <li>
                                <img src={photo2}/>
                                    <div className="caption right-align">
                                        {/*<h3>Right Aligned Caption</h3>*/}
                                        {/*<h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>*/}
                                    </div>
                            </li>
                            <li>
                                <img src={photo3}/>
                                    <div className="caption center-align">
                                        {/*<h3>This is our big Tagline!</h3>*/}
                                        {/*<h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>*/}
                                    </div>
                            </li>
                        </ul>
                    </div>


                    {/*<h1 className="white-text">Main Page</h1>*/}


                </div>
                        </div>
                    </div>
                    </div>



                </main>

                <footer className="page-footer transparent z-depth-0 Caveat">
                    <div className="container">
                        <div className="row">
                            <div className="col  s6 ">
                                <h5 className="white-text">Ky Ky</h5>
                                <p className="grey-text text-lighten-4">Custom Rings</p>
                                <p className="grey-text text-lighten-4">Place An Order!</p>
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

export default MainPage;
