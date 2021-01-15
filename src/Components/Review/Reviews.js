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

class Reviews extends Component {

    state = {
        name: '',
        first_name: '',
        last_name: '',
        item: '',
        message: '',
        sentMessage: false,
        modal: null,
        reviews: []


    };




    componentDidMount() {
        // console.log("Poop");

        // var elems = document.querySelectorAll('.modal');

        var elems1 = document.querySelectorAll('select');
        var instances = M.FormSelect.init(elems1, {color: "white"});

        // axios.get("https://jewelry-byky-default-rtdb.firebaseio.com/reviews")
        //     .then(response => {
        //         console.log("help " +response)
        //     })


        // axios.get('/reviews.json' )
        //     .then(res => {
        //         const fetchedOrders = [];
        //         for (let key in res.data) {
        //             // console.log(res.data);
        //
        //             fetchedOrders.push(
        //                 {
        //                     ...res.data[key],
        //                     id: key
        //                 });
        //             console.log(fetchedOrders);
        //
        //         }
        //         // dispatch(fetchOrdersSuccess(fetchedOrders));
        //     })
        //     .catch(err => {
        //
        //         console.log(err)
        //         // dispatch(fetchOrdersFail(err))
        //     })


    }

    componentDidUpdate(prevProps, prevState, snapshot) {

        // console.log(this.state.email);



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


        const review = {

            name: this.state.name,
            item: this.state.item,
            message: this.state.message
        }

        axios.post('/reviews.json', review)
            .then(response => {
                // console.log(response);
                document.getElementById("formyform1").reset();

                const elem = document.getElementById('modal2');
                const instance = M.Modal.init(elem, {dismissible: true});
                instance.open();

                }
            )
            .catch(error => {
                    console.log(error);
                document.getElementById("formyform1").reset();

                const elem = document.getElementById('modal3');
                const instance = M.Modal.init(elem, {dismissible: true});
                instance.open();
                    })



    }


    render(){
        const fetchedOrders = [];

        let orders = null;

        axios.get('/reviews.json' )
            .then(res => {

                for (let key in res.data) {
                    // console.log(res.data);

                    fetchedOrders.push(
                        {
                        ...res.data[key],
                        id: key
                    });

                    // this.state.reviews = fetchedOrders;

                    // console.log(this.state.reviews)

                  orders =  fetchedOrders.map(review => (


                        <Review
                            name={review.name}
                            item={review.item}
                            message={review.message}
                            key={review.id}
                            // key={+order.id}
                        />
                    ))
                    console.log(fetchedOrders);

                }
                // dispatch(fetchOrdersSuccess(fetchedOrders));
            })
            .catch(err => {

                console.log(err)
                // dispatch(fetchOrdersFail(err))
            })


        // let displayReviews = [];
        // console.log(fetchedOrders + "fewf")
        //
        // displayReviews = fetchedOrders.map(review => (
        //
        //
        //     <div>
        //         <h1>{review.name} </h1>
        //
        //     </div>
        // ))
        //
        // console.log(displayReviews + "fewf")


        return (
            <body className="backgroundimg123456 ">

            <header className="section ">

                <Navbar />

                <div className="section  Caveat white-text">
                    <div className="row s12 container center-align">
                        <div className="col s12 ">
                            <h2 className="header">Reviews</h2>

                        </div>
                    </div>


                </div>

            </header>

            <main>


                <div id="modal2" className="modal modal-fixed-footer Caveat">
                    <div className="modal-content center-align">
                        <h4>Thanks For The Review!</h4>
                        <p>Your feedback matter !</p>
                        <i className="material-icons centerAlign">thumb_up</i>
                    </div>

                </div>

                <div id="modal3" className="modal modal-fixed-footer Caveat">
                    <div className="modal-content center-align">
                        <h4>Something went wrong.....</h4>

                        <i className="material-icons centerAlign">thumb_down</i>
                    </div>

                </div>

                <div className="card transparent z-depth-0">
                {/*<body>*/}
                <div className="col s12 m6 l white-text container">

                    <table>
                        <thead>
                        <tr>
                            <th>Customer</th>
                            <th>Item</th>
                            <th>Review</th>

                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>Alphonso Mckenzie</td>
                            <td>Necklace</td>
                            <td>Amazing!</td>

                        </tr>
                        <tr>
                            <td>Alphonso Mckenzie</td>
                            <td>Ring</td>
                            <td>Awesome Stuff! I really like how the ring fit my hand, and super nice material!</td>

                        </tr>
                        <tr>
                            <td>Alphonso Mckenzie</td>
                            <td>Necklace</td>
                            <td>Amazing!</td>

                        </tr>
                        <tr>
                            <td>Alphonso Mckenzie</td>
                            <td>Ring</td>
                            <td>Awesome Stuff! I really like how the ring fit my hand, and super nice material!</td>

                        </tr>

                        <tr>
                            <td>Alphonso Mckenzie</td>
                            <td>Necklace</td>
                            <td>Amazing!</td>

                        </tr>
                        <tr>
                            <td>Alphonso Mckenzie</td>
                            <td>Ring</td>
                            <td>Awesome Stuff! I really like how the ring fit my hand, and super nice material!</td>

                        </tr>


                        </tbody>
                    </table>
                </div>
                </div>


            {/*    </body>*/}
            {/*</html>*/}

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

                {orders}


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

export default Reviews;
