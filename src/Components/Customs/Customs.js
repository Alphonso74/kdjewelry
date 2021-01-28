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

    optionClick1 = () => {

        this.setState({itemName: 'Ring', itemComponents: { itemType: 'Ring' }, itemPrice: 5   });

        console.log('poop');
        document.getElementById('Ring').setAttribute("class", "card-content transparent z-depth-0 Caveat style1");
        document.getElementById('Necklace').setAttribute("class", "card-content transparent z-depth-0 Caveat style3");
        // document.getElementById('Test').setAttribute("class", "style3");
        document.getElementById('Bracelet').setAttribute("class", "card-content transparent z-depth-0 Caveat style3");


    };

    optionClick2 = () => {

        this.setState({itemName: 'Necklace', itemComponents: { itemType: 'Necklace' }, itemPrice: 6   });

        console.log('poop');
        document.getElementById('Necklace').setAttribute("class", "card-content transparent z-depth-0 Caveat style1");

        document.getElementById('Ring').setAttribute("class", "card-content transparent z-depth-0 Caveat style3");
        // document.getElementById('Test').setAttribute("class", "style3");
        document.getElementById('Bracelet').setAttribute("class", "card-content transparent z-depth-0 Caveat style3");


    };

    optionClick3 = () => {

        this.setState({itemName: 'Bracelet', itemComponents: { itemType: 'Bracelet' }, itemPrice: 5  });


        console.log('poop');
        document.getElementById('Bracelet').setAttribute("class", "card-content transparent z-depth-0 Caveat style1");

        document.getElementById('Necklace').setAttribute("class", "card-content transparent z-depth-0 Caveat style3");
        // document.getElementById('Test').setAttribute("class", "style3");
        document.getElementById('Ring').setAttribute("class", "card-content transparent z-depth-0 Caveat style3");


    };

    optionClick4 = () => {


        console.log('poop');
        document.getElementById('Test').setAttribute("class", "card-content transparent z-depth-0 Caveat style1");

        document.getElementById('Ring').setAttribute("class", "style3");
        document.getElementById('Necklace').setAttribute("class", "style3");
        document.getElementById('Bracelet').setAttribute("class", "style3");

    }



    addItem = () => {


       return  this.props.onItemAdded(this.state.itemName, this.state.itemPrice, this.state.itemComponents);

    };

    render(){



        return (
            <body className="backgroundimg123 ">

            <header className="section ">

                <Navbar numItems={this.props.numItems} />

                {/*<div className="row  center-align">*/}
                    {/*<div className=" col s12">*/}
                    {/*    <br/>*/}
                    {/*    <span className="center center-align Caveat white-text">Customs</span>*/}


                    {/*</div>*/}
                {/*</div>*/}

            </header>

            <main >

                <h2 className="card-title center-align center white-text Caveat">Choose an Item Type:</h2>

                <div className="row text-center container">
                    <div className="col s4" >
                        <div className="card"  onClick={this.optionClick1}>
                            <div className="card-header card-image   ">
                                <img
                                    src={photo}
                                    className="img-rounded activator resizeimg" alt="test" height="226"/>
                            </div>
                            <div className="card-content transparent z-depth-0 Caveat" id="Ring">
                                <span className='text-center scaleText'>Ring</span>
                            </div>
                        </div>
                    </div>
                    <div className="col s4">
                        <div className="card"  onClick={this.optionClick2}>
                            <div className="card-header card-image   ">
                                <img
                                    src={photo1}
                                    className="img-rounded activator resizeimg " alt="test" height="226"/>
                            </div>
                            <div className="card-content transparent z-depth-0 Caveat" id="Necklace">
                                <span className='text-center scaleText'>Necklace</span>
                            </div>
                        </div>
                    </div>
                    <div className="col s4">
                        <div className="card"  onClick={this.optionClick3}>
                            <div className="card-header card-image   ">
                                <img src={photo3}
                                     className="img-rounded activator resizeimg" alt="test " height="226"/>
                            </div>
                            <div className="card-content transparent z-depth-0 Caveat" id="Bracelet">
                                <span className='text-center scaleText'>Bracelet</span>
                            </div>
                        </div>
                    </div>
                </div>


                <h2 className="card-title center-align center white-text Caveat">Choose a Style:</h2>

                <div className="row text-center container">
                    <div className="col s6" >
                        <div className="card"  onClick={this.optionClick1}>
                            <div className="card-header card-image   ">
                                <img
                                    src={photo}
                                    className="img-rounded activator resizeimg" alt="test" height="226"/>
                            </div>
                            <div className="card-content transparent z-depth-0 Caveat" id="Ring">
                                <span className='text-center scaleText'>Ring</span>
                            </div>
                        </div>
                    </div>
                    <div className="col s6">
                        <div className="card"  onClick={this.optionClick2}>
                            <div className="card-header card-image   ">
                                <img
                                    src={photo1}
                                    className="img-rounded activator resizeimg " alt="test" height="226"/>
                            </div>
                            <div className="card-content transparent z-depth-0 Caveat" id="Necklace">
                                <span className='text-center scaleText'>Necklace</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row text-center container">



                <div className="col s6">
                        <div className="card"  onClick={this.optionClick3}>
                            <div className="card-header card-image   ">
                                <img src={photo3}
                                     className="img-rounded activator resizeimg" alt="test " height="226"/>
                            </div>
                            <div className="card-content transparent z-depth-0 Caveat" id="Bracelet">
                                <span className='text-center scaleText'>Bracelet</span>
                            </div>
                        </div>
                    </div>
                    <div className="col s6">
                        <div className="card"  onClick={this.optionClick3}>
                            <div className="card-header card-image   ">
                                <img src={photo3}
                                     className="img-rounded activator resizeimg" alt="test " height="226"/>
                            </div>
                            <div className="card-content transparent z-depth-0 Caveat" id="Bracelet">
                                <span className='text-center scaleText'>Bracelet</span>
                            </div>
                        </div>
                    </div>
                </div>





                <div className="center">
                <button className="  btn center center-align" onClick={this.addItem}>Add Item</button>

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
