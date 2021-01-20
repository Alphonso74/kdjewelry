import React, {Component} from 'react';
import Navbar from "../UI/Navbar";
import './MyOrderCSS.css';
// import photo1 from "../../pictures/jewcrystal.jpg";
// import photo2 from "../../pictures/jewhand2.jpg";
// import photo3 from "../../pictures/jewcone.jpg";
// import photo from "../../pictures/jewelry1.jpg";
import {connect} from 'react-redux';
import * as actionTypes from '../../store/actions';

class MyOrder extends Component {


    deleteItem = () => {


    };

    render(){

        let currItems = null;

        if(this.props.numItems === 0 || this.props.numItems < 0 || this.props.numItems === null) {
            currItems = (


                <div>
                    <h1 className="center center-align white-text Caveat">No Orders Just Yet......</h1>
                </div>
            )

            // console.log("poop")

        }

        else {
            // console.log(this.props.numItems)

            currItems = (


                    <div className="section transparent z-depth-0  Caveat  center    white-text">

                        <table className=" bodyHeight">
                            <thead>
                            <tr>
                                <th className="center-align"></th>

                                <th className="center-align">Items</th>
                                <th className="center-align">Price</th>
                                <th className="center-align">Components</th>

                            </tr>
                            </thead>
                            <tbody className="bodyHeight1" >
                            {this.props.items.map((item) => {

                                return (

                                    <tr>
                                        <td className="center-align"><button className="btn black white-text hoverable"><i className="material-icons " onClick={this.deleteItem}>cancel</i></button></td>
                                        <td className="center-align">{item.itemName}</td>
                                        <td className="center-align">${item.itemPrice}</td>
                                        <td className="center-align">{item.itemComponents.style} <br/>{item.itemComponents.wireType}<br/>{item.itemComponents.beadType}<br/>{item.itemComponents.specialInstructions} </td>


                                    </tr>

                                )
                            })
                            }



                            </tbody>
                        </table>
                    </div>





            )


        }


        return (
            <body className="backgroundimg12345 ">

            <header className="section ">

                <Navbar numItems={this.props.numItems}/>

                <div className="row  center-align">
                    <div className=" col s12">
                        <br/>
                        <br/>
                        <br/>
                        <span className="center center-align Caveat black-text">My Order</span>


                    </div>
                </div>

            </header>

            <main >



                {currItems}

                <br/>
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

export default connect(mapStateToProps, mapDispatchToProps)(MyOrder);

