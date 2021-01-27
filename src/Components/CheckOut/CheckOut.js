import React, {Component} from 'react';
import Navbar from "../UI/Navbar";
// import Order from "./Order";
import Check from "./Check";
// import photo1 from "../../pictures/jewcrystal.jpg";
// import photo2 from "../../pictures/jewhand2.jpg";
// import photo3 from "../../pictures/jewcone.jpg";
// import photo from "../../pictures/jewelry1.jpg";
import {connect} from 'react-redux';
import * as actionTypes from '../../store/actions';
import Order from "../MyOrder/Order";
import M from "materialize-css/dist/js/materialize.min";


class CheckOut extends Component {


submitOrder = () => {


    const elem = document.getElementById('modal13');
    const instance = M.Modal.init(elem, {dismissible: true});
    instance.open();


    // if(instance.closed){
    //
    // }

}


render() {
    return (
        <body className="backgroundimg12345 ">

        <div id="modal13" className="modal modal-fixed-footer Caveat">
            <div className="modal-content center-align">
                <h4>Your Order Has Been Submitted!</h4>
                <p>Your order will go directly to Kyleigh, and she will contact you through the email provided.</p>
                <p>Thanks!</p>
                <i className="material-icons centerAlign">thumb_up</i>
            </div>

        </div>


        <header>

            <Navbar numItems={this.props.numItems}/>

        </header>


        <main>
        <div className="center center-align">

            <h1 className=" Caveat">Check Out</h1>
            <div className="container">
                {/*<hr className="rounded "/>*/}


                <div className="transparent z-depth-0 center center-align card grey">
            {this.props.items.map((item) => {

                return (


                    <Check key={item.id}
                           name={item.itemName}
                           price={item.itemPrice}
                           components={item.itemComponents}
                           clicked={() => this.props.onItemRemove(item.id, item.itemPrice)}
                    />


                    // <tr key={item.id}>
                    //     <td className="center-align"><button className="btn black white-text hoverable" ><i className="material-icons " onClick={this.deleteItem}>cancel</i></button></td>
                    //     <td className="center-align">{item.itemName}</td>
                    //     <td className="center-align">${item.itemPrice}</td>
                    //     <td className="center-align">{item.itemComponents.style} <br/>{item.itemComponents.wireType}<br/>{item.itemComponents.beadType}<br/>{item.itemComponents.specialInstructions} </td>
                    //
                    //
                    // </tr>

                )
            })
            }
            <br/>

            </div>
            </div>

            <button className="Caveat waves-effect waves-light btn-large white black-text hoverable " onClick={this.submitOrder}>Submit Order</button>


            <br/>
            <br/>
            <br/>

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
    )
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

export default connect(mapStateToProps, mapDispatchToProps)(CheckOut);
