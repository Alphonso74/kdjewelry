import React, {Component} from 'react';
import Navbar from "../UI/Navbar";
import './ReviewsCSS.css';
import M from "materialize-css/dist/js/materialize.min";
import photo from '../../pictures/jewelry1.jpg';
import photo1 from '../../pictures/jewcrystal.jpg';
import photo2 from '../../pictures/jewhand2.jpg';
import photo3 from '../../pictures/jewcone.jpg';
import link1 from '../../pictures/insta4.jpg';
import link2 from '../../pictures/newnewghub.png';
import link3 from '../../pictures/linkedin.png';
import axios from '../../axios-reviews';

class Reviews extends Component {

    state = {
        name: '',
        first_name: '',
        last_name: '',
        item: '',
        message: '',
        sentMessage: false,
        modal: null


    };


    componentDidMount() {
        // console.log("Poop");

        var elems = document.querySelectorAll('.modal');

        var elems1 = document.querySelectorAll('select');
        var instances = M.FormSelect.init(elems1, {color: "white"});


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

        const review = {

            name: this.state.name,
            item: this.state.item,
            message: this.state.message
        }

        axios.post('/reviews.json', review)
            .then(response => console.log(response))
            .catch(error => console.log(error))
    }


    render(){



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

            <main >


                <div id="modal1" className="modal modal-fixed-footer Caveat">
                    <div className="modal-content center-align">
                        <h4>Thanks For The Message!</h4>
                        <p>This message will go directly to Kyleigh, and she will contact you through the email provided.</p>
                        <p>Thanks!</p>
                        <i className="material-icons centerAlign">thumb_up</i>
                    </div>

                </div>

                <div className="card transparent z-depth-0">
                {/*<body>*/}
                <div class="col s12 m6 l white container">

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
                            <td>Awesome Stuff!</td>

                        </tr>


                        </tbody>
                    </table>
                </div>
                </div>
            {/*    </body>*/}
            {/*</html>*/}

                <h1 className="center white-text Caveat header">Write A Review</h1>


                <div className="  Caveat card transparent z-depth-0">
                    <form className="row s12 center-align container" id="formyform" onSubmit={this.postReview}>

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
                            <select className="icons green-text" onChange={this.itemChange}>
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
