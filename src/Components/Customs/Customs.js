import React, {Component} from 'react';
import Navbar from "../UI/Navbar";
import './CustomsCSS.css';
import photo1 from "../../pictures/jewcrystal.jpg";
import photo2 from "../../pictures/jewhand2.jpg";
import photo3 from "../../pictures/jewcone.jpg";
import photo from "../../pictures/jewelry1.jpg";
import {connect} from 'react-redux';
import * as actionTypes from '../../store/actions';

class Customs extends Component {

    state = {

        itemName: 'None',
        itemPrice: 0,
        itemComponents: {

            itemType: 'None',
            style: 'None',
            wireType: 'None',
            beadType: 'None',
            specialInstructions: 'None'

        }

    };



    addItem = () => {


       return  this.props.onItemAdded(this.state.itemName, this.state.itemPrice, this.state.itemComponents);

    };

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


                <div className=" row  container">

                    <h1 className="center-align center Caveat white-text">Choose an Item Type</h1>

                    <div className="col s4  center-align center card  small transparent z-depth-0">
                        <div className="card-image">
                            <img src={photo} alt=""
                                 className=" responsive-img"/>
                        </div>
                        <div className=" card-content center center-align">
                            <span className="Caveat white-text ">Necklace</span>
                        </div>
                    </div>

                            <div className="col s4  center-align card small  transparent z-depth-0">
                                <div className="card-image">
                                    <img src={photo1} alt=""
                                         className=" responsive-img"/>
                                </div>
                                <div className=" card-content center center-align ">
                                    <span className="Caveat white-text ">Ring</span>
                                </div>
                            </div>



                            <div className="col s4  center-align card small transparent z-depth-0">
                                <div className="card-image">
                                <img src={photo3} alt=""
                                     className=" responsive-img psize"/>
                                </div>
                                <div className="card-content center center-align">
                                <span className="Caveat white-text ">Bracelet</span>
                                </div>

                            </div>
                    {/*<i className="material-icons centerAlign center green">check_circle</i>*/}

                </div>


                <div className=" row  container">

                    <h1 className="center-align center Caveat white-text">Choose a Style</h1>

                    <div className="col s4  center-align center card  small transparent z-depth-0">
                        <div className="card-image">
                            <img src={photo} alt=""
                                 className=" responsive-img"/>
                        </div>
                        <div className=" card-content center center-align">
                            <span className="Caveat white-text ">Spiral</span>
                        </div>
                    </div>

                    <div className="col s4  center-align card small  transparent z-depth-0">
                        <div className="card-image">
                            <img src={photo1} alt=""
                                 className=" responsive-img"/>
                        </div>
                        <div className=" card-content center center-align ">
                            <span className="Caveat white-text ">Cone</span>
                        </div>
                    </div>



                    <div className="col s4  center-align card small transparent z-depth-0">
                        <div className="card-image">
                            <img src={photo3} alt=""
                                 className=" responsive-img psize"/>
                        </div>
                        <div className="card-content center center-align">
                            <span className="Caveat white-text ">Diamond</span>
                        </div>

                    </div>
                    {/*<i className="material-icons centerAlign center green">check_circle</i>*/}

                </div>


                <div className=" row  container">

                    <h1 className="center-align center Caveat white-text">Choose a Wire Type</h1>


                    <div className="col s6  center-align card medium  transparent z-depth-0">
                        <div className="card-image">
                            <img src={photo1} alt=""
                                 className=" responsive-img"/>
                        </div>
                        <div className=" card-content center center-align ">
                            <span className="Caveat white-text ">Silver</span>
                        </div>
                    </div>



                    <div className="col s6  center-align card medium transparent z-depth-0">
                        <div className="card-image">
                            <img src={photo3} alt=""
                                 className=" responsive-img psize"/>
                        </div>
                        <div className="card-content center center-align">
                            <span className="Caveat white-text ">Brass</span>
                        </div>

                    </div>
                    {/*<i className="material-icons centerAlign center green">check_circle</i>*/}

                </div>






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
};

const mapDispatchToProps = dispatch => {
    return {
        onItemAdded: (itemName, itemPrice, itemComponents) => dispatch({type: actionTypes.ADD_ITEMTOCART, itemName: itemName, itemPrice: itemPrice, itemComponents: itemComponents  }),
        onItemRemove: (itemID, itemPrice) => dispatch({type: actionTypes.REMOVE_ITEMFROMCART, itemID: itemID,itemPrice: itemPrice  })

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Customs);
