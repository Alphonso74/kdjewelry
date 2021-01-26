import React, {Component} from 'react';
import Navbar from "../UI/Navbar";
import './CatalogCSS.css';
// import {NavLink} from "react-router-dom";
import photo from "../../pictures/jewelry1.jpg";
import photo1 from "../../pictures/jewcrystal.jpg";
import photo2 from "../../pictures/jewhand2.jpg";
import photo3 from "../../pictures/jewcone.jpg";
import link3 from "../../pictures/jewtable.jpg";
// import link1 from "../../pictures/insta4.jpg";
import M from "materialize-css/dist/js/materialize.min";
import {connect} from 'react-redux';
import * as actionTypes from '../../store/actions';

class Catalog extends Component {


    componentDidMount() {


        var elems = document.querySelectorAll('.carousel');
        var instances = M.Carousel.init(elems, {
            indicators: true,
        });


    }

    render(){



        return (
            <body className="backgroundimg12 ">

            <header className="section">

                <Navbar numItems={this.props.numItems}/>

                {/*<h1 className="center  Caveat black-text">Catalog</h1>*/}
            </header>

            <main >


                <h1 className="center  Caveat white-text">Rings</h1>

                    <div className="carousel center container">


                        <a className="carousel-item" href="#one!"><img
                            src={photo1}/></a>
                        <a className="carousel-item" href="#two!"><img
                            src={photo}/></a>
                        <a className="carousel-item" href="#three!"><img src={photo2}/></a>
                        <a className="carousel-item" href="#four!"><img
                            src={photo3}/></a>
                        <a className="carousel-item" href="#five!"><img
                            src={link3}/></a>
                    </div>


                <br/>
                <br/>
                <br/>
                <br/>




                <h1 className="center  Caveat white-text">Bracelets</h1>

                <div className="carousel center container">


                    <a className="carousel-item" href="#one!"><img
                        src={photo3}/></a>
                    <a className="carousel-item" href="#two!"><img
                        src={photo1}/></a>
                    <a className="carousel-item" href="#three!"><img src={photo2}/></a>
                    <a className="carousel-item" href="#four!"><img
                        src={photo}/></a>
                    <a className="carousel-item" href="#five!"><img
                        src={link3}/></a>
                </div>


                <br/>
                <br/>
                <br/>
                <br/>



                <h1 className="center  Caveat white-text">Necklaces</h1>

                <div className="carousel center container">


                    <a className="carousel-item" href="#one!"><img
                        src={link3}/></a>
                    <a className="carousel-item" href="#two!"><img
                        src={photo1}/></a>
                    <a className="carousel-item" href="#three!"><img src={photo2}/></a>
                    <a className="carousel-item" href="#four!"><img
                        src={photo3}/></a>
                    <a className="carousel-item" href="#five!"><img
                        src={photo}/></a>
                </div>


                <br/>
                <br/>
                <br/>
                <br/>









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

export default connect(mapStateToProps, mapDispatchToProps)(Catalog);
