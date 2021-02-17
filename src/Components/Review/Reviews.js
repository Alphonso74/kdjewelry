import React, {Component} from 'react';
import Navbar from "../UI/Navbar";
import './ReviewsCSS.css';
import M from "materialize-css/dist/js/materialize.min";
import photo from '../../pictures/jewelry1.jpg';
import photo1 from '../../pictures/jewcrystal.jpg';
// import photo2 from '../../pictures/jewhand2.jpg';
import photo3 from '../../pictures/jewcone.jpg';
// import link1 from '../../pictures/insta4.jpg';
// import link2 from '../../pictures/newnewghub.png';
// import link3 from '../../pictures/linkedin.png';
import axios from '../../axios-reviews';
import {onLog} from "firebase";
import Review from "./Review";
import firebase from '../../firebase';
import {connect} from 'react-redux';
import * as actionTypes from '../../store/actions';
import history from "../../history";

class Reviews extends Component {

    state = {
        name: '',
        first_name: '',
        last_name: '',
        item: null,
        message: '',
        sentMessage: false,
        modal: null,
        reviews: []


    };




    componentDidMount() {
        // console.log("Reviews 1Poop");

        // var elems = document.querySelectorAll('.modal');

        var elems1 = document.querySelectorAll('select');
        var instances = M.FormSelect.init(elems1, {color: "white"});

        const reviewref = firebase.database().ref('reviews');
        reviewref.on('value', (snapshot) => {

            let reviews = snapshot.val();
            let newState = [];

            for( let review in reviews ) {
                newState.push({
                    id: review,
                    name: reviews[review].name,
                    item: reviews[review].item,
                    message: reviews[review].message
                });
            }

            this.setState({
                reviews : newState
            })
        } )

    }




    nameChange = (event) => {

        // console.log(event.target.value.toString())
        this.setState({
            ...this.state,
            name: (event.target.value).trim()



        })


    }

    itemChange = (event) => {
        // console.log(event.target.value);

        this.setState({
            ...this.state,
            item: (event.target.value).trim()


        })

    }


    messageChange = (event) => {
        this.setState({
            ...this.state,
            message: (event.target.value).trim()


        })


    }

    postReview = () => {
        window.event.preventDefault();


        if(this.state.item === null){

            const elem = document.getElementById('modal24');
            const instance = M.Modal.init(elem, {dismissible: true});
            instance.open();



        }

        else{

        const review = {

            name: this.state.name,
            item: this.state.item,
            message: this.state.message
        }

        axios.post('/reviews.json', review)
            .then(response => {
                // console.log(response);
                document.getElementById("formyform1").reset();
                // document.getElementById("item-selector").reset();


                const elem = document.getElementById('modal2');
                const instance = M.Modal.init(elem, {dismissible: true});
                instance.open();

                }
            )
            .catch(error => {
                    console.log(error);
                document.getElementById("formyform1").reset();
                // document.getElementById("item-selector").reset();

                const elem = document.getElementById('modal3');
                const instance = M.Modal.init(elem, {dismissible: true});
                instance.open();
                    })



    }
    }


    render(){


        return (
            <body className="backgroundimg123456 ">

            <header className="section ">

                <Navbar numItems={this.props.numItems}/>

                <div className="section  Caveat white-text">
                    <div className="row s12 container center-align">
                        <div className="col s12 ">
                            <h2 className="header">Reviews</h2>

                        </div>
                    </div>


                </div>

            </header>

            <main>


                {/*{this.state.reviews.map((review) => {*/}
                {/*    return (*/}

                    <div className="card transparent z-depth-0">
                    {/*/!*<body>*!/*/}
                    <div className="col s12 m6 l white-text container">

                        <table>
                            <thead>
                            <tr>
                                <th className="center-align">Customer</th>
                                <th className="center-align">Item</th>
                                <th className="center-align">Review</th>

                            </tr>
                           </thead>
                            <tbody className="bodyHeight2">
                            {this.state.reviews.map((review) => {

                                return (

                                <tr >

                                    <td className="center-align">{review.name}</td>
                                    <td className="center-align">{review.item}</td>
                                    <td className="center-align">{review.message}</td>

                                </tr>

                                )
                            })
                            }



                           </tbody>
                        </table>
                    </div>
                    </div>



                <div id="modal24" className="modal modal-fixed-footer Caveat modal3">
                    <div className="modal-content center center-align">
                        <h4>Please select item type before submitting!</h4>
                        <p>Thanks!</p>

                    </div>
                    <div className="modal-footer center center-align">
                        <a  className="modal-action modal-close btn black white-text ">Close</a>
                    </div>
                </div>




                <div id="modal2" className="modal modal-fixed-footer Caveat modal3">
                    <div className="modal-content center center-align">
                        <h4>Thanks For The Review!</h4>
                        <p>Your feedback matters!</p>
                        <i className="material-icons centerAlign">thumb_up</i>

                    </div>
                    <div className="modal-footer center center-align">
                        <a  className="modal-action modal-close btn black white-text ">Close</a>
                    </div>
                </div>


                <div id="modal3" className="modal modal-fixed-footer Caveat modal3">
                    <div className="modal-content center center-align">
                        <h4>Something went wrong.....</h4>
                        <i className="material-icons centerAlign">thumb_up</i>

                    </div>
                    <div className="modal-footer center center-align">
                        <a  className="modal-action modal-close btn black white-text ">Close</a>
                    </div>
                </div>


                <div className="container" >
                <h1 className="center white-text Caveat header">Write A Review</h1>


                <div className="  Caveat card transparent z-depth-0">
                    <form className="row s12 center-align container" id="formyform1" onSubmit={this.postReview}>

                            <div className="input-field row s12">
                                <input id="name" type="text" required=" " className="validate white-text" onChange={this.nameChange}/>
                                <label htmlFor="name" className="white-text">Name</label>
                            </div>

                        {/*<div className="row s12">*/}
                        {/*<div className="input-field row s6">*/}
                        {/*    <input id="first_name" type="text" required=" " className="validate white-text" onChange={this.firstNameChange}/>*/}
                        {/*    <label htmlFor="first_name" className="white-text">First Name</label>*/}
                        {/*</div>*/}

                        <div className="input-field row s12   ">
                            <select className="icons green-text" id="item-selector" onChange={this.itemChange}>
                                <option className="" value="" disabled selected>Choose your option</option>
                                <option value="Ring" data-icon={photo3} className="left">Ring</option>
                                <option value="Necklace" data-icon={photo} className="left">Necklace</option>
                                <option value="Bracelet" data-icon={photo1} className="left">Bracelet</option>
                            </select>
                            <label className="white-text labelTitle">Item Type</label>
                        </div>



                        {/*</div>*/}

                        {/*<div className="row s12">*/}
                        <div className="input-field row s12">
                            <textarea id="message" className="validate materialize-textarea white-text" required=" " onChange={this.messageChange}/>
                            <label htmlFor="message" className="white-text">Review</label>
                        </div>
                        {/*</div>*/}

                        <button className="Caveat waves-effect waves-light btn-large white black-text hoverable"><i
                            className="material-icons right">send</i>Submit Review</button>

                    </form>
                </div>
                </div>

                {/*{orders}*/}




            </main>

            <footer className="page-footer black Caveat">
                <div className="container">
                    <div className="row">
                        <div className="col  s6 center-align">
                            <h5 className="white-text " onClick={() => { history.push('/') }}>Home</h5>

                            <h5 className="white-text" onClick={() => { history.push('/Customs') }}>Customs</h5>
                            <h5 className="white-text " onClick={() => { history.push('/MyOrder') }}>My Order</h5>

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

export default connect(mapStateToProps, mapDispatchToProps)(Reviews);
