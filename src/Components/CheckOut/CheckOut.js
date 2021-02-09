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
import {Link, Redirect} from "react-router-dom";
import {Route} from 'react-router-dom'

import history from '../../history';


class CheckOut extends Component {

    state = {
        authRedirect : null

    }


submitOrder = () => {
    window.event.preventDefault();
    document.getElementById("formyform").reset();


    const elem = document.getElementById('modal13');
    const instance = M.Modal.init(elem, {dismissible: false });
    instance.open();



    // if(instance.closed){
    //
    // }

}


render() {
    return (
        <body className="backgroundimg12345 ">

        {this.state.authRedirect}

        <div id="modal13" className="modal modal-fixed-footer Caveat">
            <div className="modal-content center-align">
                <h4>Your Order Has Been Submitted!</h4>
                <p>Your order will go directly to Kyleigh, and she will contact you through the email provided. Thanks!</p>

                {/*Attempting to navigate to Home page after modal close*/}


                <Link className="Caveat waves-effect waves-light btn-large white black-text hoverable" to='/' >Back to Home!</Link>

                {/*<Route render={({ history}) => (*/}
                {/*    <button className="Caveat waves-effect waves-light btn-large white black-text hoverable" onClick={() => { history.push('/') }}> Back To Main Page</button>*/}

                {/*        )} />*/}
                {/*<i className="material-icons centerAlign">thumb_up</i>*/}

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

            <div className="  Caveat card transparent z-depth-0">

                <h1 className="center center-align white-text">Please Enter User Information</h1>
                <form className="row s12 center-align container" id="formyform" onSubmit={this.submitOrder}>
                    <div className="input-field row s12">
                        <input id="email" type="email" required=" " className="validate white-text" onChange={this.emailChange}/>
                        <label htmlFor="email" className="white-text">Email</label>
                    </div>

                    {/*<div className="row s12">*/}
                    <div className="input-field row s6">
                        <input id="first_name" type="text" required=" " className="validate white-text" onChange={this.firstNameChange}/>
                        <label htmlFor="first_name" className="white-text">First Name</label>
                    </div>
                    <div className="input-field row s6">
                        <input id="last_name" type="text" className="validate white-text" required=" " onChange={this.lastNameChange}/>
                        <label htmlFor="last_name" className="white-text">Last Name</label>
                    </div>
                    {/*</div>*/}

                    {/*<div className="row s12">*/}
                    <div className="input-field row s12">
                        <textarea id="message" className="validate materialize-textarea white-text" required=" " onChange={this.messageChange}/>
                        <label htmlFor="message" className="white-text">Special Requests</label>
                    </div>
                    {/*</div>*/}

                    <button className="Caveat waves-effect waves-light btn-large white black-text hoverable"><i
                        className="material-icons right">send</i>Submit Order</button>

                </form>
            </div>

            {/*<button className="Caveat waves-effect waves-light btn-large white black-text hoverable " onClick={this.submitOrder}>Submit Order</button>*/}


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
