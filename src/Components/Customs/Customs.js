import React, {Component} from 'react';
import Navbar from "../UI/Navbar";
import './CustomsCSS.css';
// import photo1 from "../../pictures/jewcrystal.jpg";
// import photo2 from "../../pictures/jewhand2.jpg";
// import photo3 from "../../pictures/jewcone.jpg";
// import photo from "../../pictures/jewelry1.jpg";
import {connect} from 'react-redux';
import * as actionTypes from '../../store/actions';

class Customs extends Component {

    state = {

        itemComponents: {

            style: 'Spiral Design',
            wireType: 'Silver Wire',
            beadType: 'Sparkle Bead',
            specialInstructions: ''

        }

    }


    addItem = () => {


       return  this.props.onItemAdded("Necklace Silver Wire", 12, this.state.itemComponents);

    }

    render(){



        return (
            <body className="backgroundimg123 ">

            <header className="section ">

                <Navbar numItems={this.props.numItems} />

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


                <div className="center">
                <button className="waves-effect  btn center center-align" onClick={this.addItem}>Add Item</button>

                    <h1 className="white-text">Price Total: ${this.props.currPrice}</h1>
                </div>

                <div className="center">

                    <h4 className="white-text">Number of Items: {this.props.numItems}</h4>
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

const mapStateToProps = state => {
    return {
            items: state.Items,
            numItems: state.numberOfItems,
            currPrice: state.totalPrice
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onItemAdded: (itemName, itemPrice, itemComponents) => dispatch({type: actionTypes.ADD_ITEMTOCART, itemName: itemName, itemPrice: itemPrice, itemComponents: itemComponents  }),
        onItemRemove: (itemID, itemPrice) => dispatch({type: actionTypes.REMOVE_ITEMFROMCART, itemID: itemID,itemPrice: itemPrice  })

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Customs);
