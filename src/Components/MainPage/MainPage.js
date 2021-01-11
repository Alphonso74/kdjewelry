import React, {Component} from 'react';
import Navbar from "../UI/Navbar";
import './MainPageCSS.css';
import M from "materialize-css/dist/js/materialize.min";
import photo from '../../pictures/jewelry1.jpg';
import photo1 from '../../pictures/jewcrystal.jpg';
import photo2 from '../../pictures/jewhand2.jpg';
import photo3 from '../../pictures/jewcone.jpg';
import link1 from '../../pictures/utube.jpg';
import link2 from '../../pictures/newnewghub.png';
import link3 from '../../pictures/linkedin.png';









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
                {/*<br/>*/}

                {/*<div className="section headerpicture  ">*/}

                {/*    <div className="row  center-align">*/}
                {/*        <div className=" col s12">*/}
                {/*    <span className="white-text Caveat">Jewelry By Ky</span>*/}
                {/*        <br/>*/}
                {/*        <br/>*/}
                {/*        <br/>*/}
                {/*        <br/>*/}
                {/*        <br/>*/}
                {/*        <br/>*/}
                {/*        <br/>*/}
                {/*        <br/>*/}
                {/*        <br/>*/}


                {/*    </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
                </header>

                <main className="transparent z-depth-0">

                    <div className="section headerpicture  ">

                        <div className="row  center-align">
                            <div className=" col s12">
                                <span className="white-text Caveat">Custom Designs By Ky</span>
                                <br/>

                                <br/>
                                <br/>
                                <br/>
                                <br/>
                                <br/>
                                <br/>
                                <br/>
                                <br/>
                                <br/>


                            </div>
                        </div>
                    </div>


                    <h1 className="center-align black-text Caveat">New Designs</h1>

                    <div className="container">
                    <div className="row  s12 ">

                        <div className="col s12 hide-on-med-and-up">
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
                        </ul>
                    </div>
                        </div>


                            <div className="col s12 hide-on-med-and-down">
                                <div className="slider">


                            <ul className="slides">

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
                            </div>
                    </div>
                    </div>

                    <div className="section transparent z-depth-0 Caveat">
                        <div className="row container">
                            <div className="col s12 ">
                                <h2 className="header black-text center-align">About Jewelry By Ky</h2>
                                {/*<p className="grey-text text-darken-3 lighten-3">Parallax is an effect where the background*/}
                                {/*    content or image in this case, is moved at a different speed than the foreground content*/}
                                {/*    while scrolling.</p>*/}

                                <div className="col s12 ">
                                    <div className="card-panel grey">
                                        <div className="row valign-wrapper">

                                            <div className="col s12 center-align ">
              <span className="black-text ">
                "My creations are made to be unique and just what your looking for"
                  - Kyleigh Dague
              </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>


                    <div className="section transparent z-depth-0 Caveat">
                        <div className="row container center-align">
                            <div className="col s12 ">



                                <h1 className="black-text ">My Links</h1>
                                <pre><code className="language-markup col s12">
        </code></pre>
                            </div>
                        </div>




                        <div className="row center ">




                            <div className="col s6 ">
                                <div className="card  hoverable center-align" onClick={(e) => {
                                    e.preventDefault();
                                    window.location.href='https://www.linkedin.com/in/alphonso-mckenzie-a32440189/';
                                }}>
                                    <div className="card-image">
                                        <img src={link3} alt=""/>
                                    </div>
                                    <div className="card-content center-align">
                                        <a className="center-align" href="https://www.linkedin.com/in/alphonso-mckenzie-a32440189/">Connect!</a>

                                    </div>

                                </div>
                            </div>



                            <div className="col s6">
                                <div className="card  hoverable center-align" onClick={(e) => {
                                    e.preventDefault();
                                    window.location.href='https://www.youtube.com/playlist?list=PLW-hBvwtzj_6JMHwju6k46fW-G4k72AKp';
                                }}>
                                    <div className="card-image">
                                        <img src={link1} alt=""/>
                                    </div>
                                    <div className="card-content center-align">
                                        <a className="center-align" href="https://www.youtube.com/">Videos!</a>

                                    </div>

                                </div>
                            </div>


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

export default MainPage;
