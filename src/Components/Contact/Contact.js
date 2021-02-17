import React, {Component} from 'react';
import Navbar from "../UI/Navbar";
import './ContactCSS.css';
import M from "materialize-css/dist/js/materialize.min";
import {connect} from 'react-redux';
import * as actionTypes from '../../store/actions';

class Contact extends Component {

    state = {
        email: '',
        first_name: '',
        last_name: '',
        message: '',
        sentMessage: false,
        modal: null


    };


    componentDidMount() {
        // console.log("Poop");

        var elems = document.querySelectorAll('.modal');




    }

    componentDidUpdate(prevProps, prevState, snapshot) {

        // console.log(this.state.email);



    }



    emailChange = (event) => {

        this.setState({
            ...this.state,
            email: (event.target.value).trim()



        })


    }

    firstNameChange = (event) => {

        this.setState({
            ...this.state,
            first_name: (event.target.value).trim()



        })

    }

    lastNameChange = (event) => {

        this.setState({
            ...this.state,
            last_name: (event.target.value).trim()



        })

    }

    messageChange = (event) => {
        this.setState({
            ...this.state,
            message: (event.target.value).trim()


        })


    }

    sendEmail = () => {
        window.event.preventDefault();



        const templateParams = {
            email: this.state.email,
            from_name: this.state.first_name + ' ' + this.state.last_name,
            message: this.state.message,
            reply_to: this.state.email
        };


        window.emailjs.send('service_qtd51pe', 'template_bb3fn9e', templateParams, 'user_rlThFHOxD9FMHRy5Os1E1') //use your Service ID and Template ID
            .then(function (response) {
                const elem = document.getElementById('modal1');
                const instance = M.Modal.init(elem, {dismissible: true});
                instance.open();

                console.log('SUCCESS!', response.status, response.text);
                document.getElementById("formyform").reset();

                // window.location.reload();
            }, function (error) {
                console.log('FAILED...', error);
            });


    };


    render(){



        return (
            <body className="backgroundimg1234 ">

            <header className="section ">

                <Navbar numItems={this.props.numItems}/>

                <div className="section  Caveat white-text">
                    <div className="row s12 container center-align">
                        <div className="col s12 ">
                            <h2 className="header">Contact Me</h2>
                            <p className="white-text text-darken-3 lighten-3">If you want to get in touch with me send me a message!</p>
                            <p className="white-text text-darken-3 lighten-3">This will go directly to my email, and I will get back in touch with you.</p>
                        </div>
                    </div>


                </div>

            </header>

            <main >

                {/*<div className="section grey RussoOne">*/}
                {/*    <div className="row container center-align">*/}
                {/*        <div className="col s12 ">*/}
                {/*            <h2 className="header">Contact Me</h2>*/}
                {/*            <p className="black-text text-darken-3 lighten-3">If you want to get in touch with me send me a message!</p>*/}
                {/*            <p className="black-text text-darken-3 lighten-3">This will go directly to my email, and I will get back in touch with you.</p>*/}


                {/*        </div>*/}
                {/*    </div>*/}


                {/*</div>*/}


                <div className="  Caveat card transparent z-depth-0">
                    <form className="row s12 center-align container" id="formyform" onSubmit={this.sendEmail}>
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
                                <label htmlFor="message" className="white-text">Message</label>
                            </div>
                        {/*</div>*/}

                        <button className="Caveat waves-effect waves-light btn-large white black-text hoverable"><i
                            className="material-icons right">send</i>Submit</button>

                    </form>
                </div>


                {/*<div id="modal1" className="modal modal-fixed-footer Caveat">*/}
                {/*    <div className="modal-content center-align">*/}
                {/*        <h4>Thanks For The Message!</h4>*/}
                {/*        <p>This message will go directly to Kyleigh, and she will contact you through the email provided.</p>*/}
                {/*        <p>Thanks!</p>*/}
                {/*        <i className="material-icons centerAlign">thumb_up</i>*/}
                {/*    </div>*/}

                {/*</div>*/}

                <div id="modal1" className="modal modal-fixed-footer Caveat modal1">
                    <div className="modal-content center center-align">
                        <h4>Thanks For The Message!</h4>
                        <p>This message will go directly to Kyleigh, and she will contact you through the email provided.</p>
                        <p>Thanks!</p>
                        <i className="material-icons centerAlign">thumb_up</i>

                    </div>
                    <div className="modal-footer center center-align">
                        <a  className="modal-action modal-close waves-effect waves-red btn red darken-3">Close</a>
                    </div>
                </div>






            </main>

            <footer className="page-footer black Caveat">
                <div className="container">
                    <div className="row s12">
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

export default connect(mapStateToProps, mapDispatchToProps)(Contact);

