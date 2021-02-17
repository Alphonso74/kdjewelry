import React, {Component} from 'react';
import Navbar from "../UI/Navbar";
import './MainPageCSS.css';
import M from "materialize-css/dist/js/materialize.min";
import photo from '../../pictures/jewelry1.jpg';
import photo1 from '../../pictures/jewcrystal.jpg';
import photo2 from '../../pictures/jewhand2.jpg';
import photo3 from '../../pictures/jewcone.jpg';
import link1 from '../../pictures/insta4.jpg';
import poop from '../../pictures/insta1.png';
// import link2 from '../../pictures/newnewghub.png';
import link3 from '../../pictures/linkedin.png';
import {connect} from 'react-redux';
import * as actionTypes from '../../store/actions';
import './materialize-social.css';
import * as Icon from 'react-feather';
import linky from '../../pictures/jewtable.jpg';
import linky1 from '../../pictures/jewcollection.jpg';
import linky2 from '../../pictures/jewhand.jpg';
import linky3 from '../../pictures/jewelry.jpeg';
import linky4 from '../../pictures/jewelry1.jpg';
import linky5 from '../../pictures/jewelry3.jpg';
import history from '../../history';














class MainPage extends Component {

    componentDidMount() {


        var elems = document.querySelectorAll('.slider');
        var instances = M.Slider.init(elems, {});




            var elems1 = document.querySelectorAll('.carousel');
            var instances1 = M.Carousel.init(elems1, {
                indicators: true,
            });





    }


    render(){


        let numItem1 = null;



        return (
            <body className="backgroundimg1 ">

                <header className="section  headerpicture">

                <Navbar numItems={this.props.numItems} />
                {/*<br/>*/}


                        {/*<div className="row  center-align">*/}
                        {/*    <div className=" col s12">*/}
                                {/*<span className="white-text Caveat">Custom Designs </span>*/}

                                <h1 className="center-align center Caveat white-text sizeFont s12"><u>Jewelry By Ky!</u></h1>


                    {/*<div className='section center center-align transparent z-depth-0'>*/}
                    {/*<Icon.Instagram color="white" size={48} position='center'/>*/}
                    {/*</div>*/}
                    {/*<div className='center'>*/}
                    {/*<a className="waves-effect waves-light btn social instagram">*/}
                    {/*    <i className="fa fa-instagram"></i> Instagram</a>*/}
                    {/*</div>*/}




                    {/*        <div className=" transparent z-depth-0 Caveat card center container">*/}




                        {/*                            /!*<div className="  col s6 ">*!/*/}
                        {/*                            /!*    <div className="center  center-align" onClick={(e) => {*!/*/}
                        {/*                            /!*        e.preventDefault();*!/*/}
                        {/*                            /!*        window.location.href='https://www.linkedin.com/in/alphonso-mckenzie-a32440189/';*!/*/}
                        {/*                            /!*    }}>*!/*/}
                        {/*                            /!*        <div className="card-image">*!/*/}
                        {/*                            /!*            <img src={link3} alt=""/>*!/*/}
                        {/*                            /!*        </div>*!/*/}
                        {/*                            /!*        /!*<div className="card-content center-align center">*!/*!/*/}
                        {/*                            /!*        /!*    /!*<span className="center-align" >Connect!</span>*!/*!/*!/*/}

                        {/*                            /!*        /!*</div>*!/*!/*/}

                        {/*                            /!*    </div>*!/*/}
                        {/*                            /!*</div>*!/*/}



                        {/*                            <div className="   s12">*/}
                        {/*                                <div className="center   center-align" onClick={(e) => {*/}
                        {/*                                    e.preventDefault();*/}
                        {/*                                    window.location.href='https://www.youtube.com/playlist?list=PLW-hBvwtzj_6JMHwju6k46fW-G4k72AKp';*/}
                        {/*                                }}>*/}
                        {/*                                    <div className="card-image center center-align setimg">*/}
                        {/*                                        <img src={poop} alt=""/>*/}
                        {/*                                    </div>*/}
                        {/*                                    /!*<div className="card-content center-align center">*!/*/}
                        {/*                                    /!*    /!*<span className="center-align" >Instagram!</span>*!/*!/*/}

                        {/*                                    /!*</div>*!/*/}

                        {/*                                </div>*/}
                        {/*                            </div>*/}


                        {/*                        </div>*/}




                        {/*    </div>*/}
                        {/*</div>*/}

                </header>

                <main className="transparent z-depth-0">

                    {/*<div className="section headerpicture  ">*/}

                    {/*    <div className="row  center-align">*/}
                    {/*        <div className=" col s12">*/}
                    {/*            <span className="white-text Caveat">Custom Designs By Ky</span>*/}
                    {/*            <br/>*/}

                    {/*            <br/>*/}
                    {/*            <br/>*/}
                    {/*            <br/>*/}
                    {/*            <br/>*/}
                    {/*            <br/>*/}
                    {/*            <br/>*/}
                    {/*            <br/>*/}
                    {/*            <br/>*/}
                    {/*            <br/>*/}


                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}


                    <h1 className="center-align white-text Caveat">New Designs</h1>

                    <div className="container">
                    <div className="row  s12 ">

                        <div className="col s12 ">
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


                    {/*        <div className="col s12 hide-on-med-and-down">*/}
                    {/*            <div className="slider">*/}


                    {/*        <ul className="slides">*/}

                    {/*        <li>*/}
                    {/*            <img src={photo2}/>*/}
                    {/*                <div className="caption right-align">*/}
                    {/*                    /!*<h3>Right Aligned Caption</h3>*!/*/}
                    {/*                    /!*<h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>*!/*/}
                    {/*                </div>*/}
                    {/*        </li>*/}
                    {/*        <li>*/}
                    {/*            <img src={photo3}/>*/}
                    {/*                <div className="caption center-align">*/}
                    {/*                    /!*<h3>This is our big Tagline!</h3>*!/*/}
                    {/*                    /!*<h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>*!/*/}
                    {/*                </div>*/}
                    {/*        </li>*/}
                    {/*    </ul>*/}
                    {/*</div>*/}
                    {/*        </div>*/}
                    </div>
                    </div>

                    <div className="section transparent z-depth-0 Caveat">
                        <div className="row container">
                            <div className="col s12 ">
                                <h2 className="header white-text center-align">About Jewelry By Ky</h2>
                                {/*<p className="grey-text text-darken-3 lighten-3">Parallax is an effect where the background*/}
                                {/*    content or image in this case, is moved at a different speed than the foreground content*/}
                                {/*    while scrolling.</p>*/}

                                <div className="col s12 ">
                                    <div className="card-panel grey">
                                        <div className="row valign-wrapper">

                                            <div className="col s12 center-align ">
              <span className="white-text ">
                Jewelry By Ky items are made with <b>100%</b> real silver and copper wiring.
              </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>


                    {/*<div className="section transparent z-depth-0 Caveat">*/}
                    {/*    <div className="row container center-align">*/}
                    {/*        <div className="col s12 ">*/}



        {/*                        <h1 className="white-text ">My Links</h1>*/}
        {/*                        <pre><code className="language-markup col s12">*/}
        {/*</code></pre>*/}
        {/*                    </div>*/}
        {/*                </div>*/}




        {/*                <div className="container">*/}
        {/*                <div className="row s12 card center container">*/}




        {/*                    <div className="  col s6 ">*/}
        {/*                        <div className="center  center-align" onClick={(e) => {*/}
        {/*                            e.preventDefault();*/}
        {/*                            window.location.href='https://www.linkedin.com/in/alphonso-mckenzie-a32440189/';*/}
        {/*                        }}>*/}
        {/*                            <div className="card-image">*/}
        {/*                                <img src={link3} alt=""/>*/}
        {/*                            </div>*/}
        {/*                            /!*<div className="card-content center-align center">*!/*/}
        {/*                            /!*    /!*<span className="center-align" >Connect!</span>*!/*!/*/}

        {/*                            /!*</div>*!/*/}

        {/*                        </div>*/}
        {/*                    </div>*/}



        {/*                    <div className="  col s6">*/}
        {/*                        <div className="center   center-align" onClick={(e) => {*/}
        {/*                            e.preventDefault();*/}
        {/*                            window.location.href='https://www.youtube.com/playlist?list=PLW-hBvwtzj_6JMHwju6k46fW-G4k72AKp';*/}
        {/*                        }}>*/}
        {/*                            <div className="card-image">*/}
        {/*                                <img src={poop} alt=""/>*/}
        {/*                            </div>*/}
        {/*                            /!*<div className="card-content center-align center">*!/*/}
        {/*                            /!*    /!*<span className="center-align" >Instagram!</span>*!/*!/*/}

        {/*                            /!*</div>*!/*/}

        {/*                        </div>*/}
        {/*                    </div>*/}


        {/*                </div>*/}
        {/*                </div>*/}

        {/*            </div>*/}
        <div className="   container center center-align row">
        <div className=" transparent z-depth-0 card col s12 center  ">
                    <h2 className="header white-text Caveat center-align sizeFont"><u>Gallery</u></h2>

        </div>
        </div>

                    <h1 className="center Caveat  white-text">Rings</h1>

                    <div className="carousel center container">


                        <a className="carousel-item" ><img
                            src={photo3}/></a>
                        <a className="carousel-item" ><img
                            src={linky}/></a>
                        <a className="carousel-item"><img src={linky2}/></a>
                        <a className="carousel-item" ><img
                            src={linky3}/></a>
                        <a className="carousel-item" ><img
                            src={linky4}/></a>
                    </div>



                    <br/>
                    <br/>




                    <h1 className="center  Caveat white-text">Bracelets</h1>

                    <div className="carousel center container">


                        <a className="carousel-item" ><img
                            src={photo}/></a>
                        <a className="carousel-item" ><img
                            src={photo1}/></a>
                        <a className="carousel-item" ><img src={photo2}/></a>
                        <a className="carousel-item" ><img
                            src={photo3}/></a>
                        <a className="carousel-item" ><img
                            src={photo}/></a>
                    </div>



                    <br/>
                    <br/>



                    <h1 className="center  Caveat white-text">Necklaces</h1>

                    <div className="carousel center container">


                        <a className="carousel-item" ><img
                            src={linky3}/></a>
                        <a className="carousel-item" ><img
                            src={linky3}/></a>
                        <a className="carousel-item" ><img src={linky1}/></a>
                        <a className="carousel-item" ><img
                            src={linky5}/></a>
                        <a className="carousel-item" ><img
                            src={linky}/></a>
                    </div>



                    <br/>
                    <br/>


                </main>

                <footer className="page-footer black Caveat">
                    <div className="container">
                        <div className="row">
                            <div className="col  s6 center-align">
                                <h5 className="white-text" onClick={() => { history.push('/Customs') }}>Customs</h5>
                                <h5 className="white-text " onClick={() => { history.push('/Reviews') }}>Reviews</h5>
                                <h5 className="white-text " onClick={() => { history.push('/MyOrder') }}>Orders</h5>

                            </div>
                            <div className="col  s6 center-align">
                                <h5 className="white-text" onClick={() => { history.push('/Contact') }}>Contact Me About Customs</h5>
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

const mapStateToProps = state => {
    return {
        items: state.Items,
        numItems: state.numberOfItems,
        currPrice: state.totalPrice
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onItemAdded: (itemName, itemPrice) => dispatch({type: actionTypes.ADD_ITEMTOCART, itemName: itemName, itemPrice: itemPrice  }),
        onItemRemove: (itemID, itemPrice) => dispatch({type: actionTypes.REMOVE_ITEMFROMCART, itemID: itemID,itemPrice: itemPrice  })

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
