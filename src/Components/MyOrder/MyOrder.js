import React, {Component} from 'react';
import Navbar from "../UI/Navbar";
import Order from "./Order";
import './MyOrderCSS.css';
import photo1 from "../../pictures/jewcrystal.jpg";
import photo2 from "../../pictures/jewhand2.jpg";
import photo3 from "../../pictures/jewcone.jpg";
import photo from "../../pictures/jewelry1.jpg";
import {connect} from 'react-redux';
import * as actionTypes from '../../store/actions';
import {Link, NavLink, Redirect} from 'react-router-dom';
import CheckOut from "../CheckOut/CheckOut";
import M from "materialize-css/dist/js/materialize.min";

import history from '../../history';



class MyOrder extends Component {


    deleteItem = (id, price) => {

        this.props.onItemRemove(id, price)

    };

    componentDidMount() {

        // let carouselElem = document.querySelectorAll('.carousel.carousel-slider');
        //
        //
        // M.Carousel.init(carouselElem,{
        //     indicators : true,
        //     fullWidth : true,
        //     autoplay: true
        // });

        // setTimeout(()=>{
        //     M.Carousel.getInstance(carouselElem[0]).next();
        // },2000);


            // initialize carousel
            const carousel = document.querySelectorAll('.carousel');
            M.Carousel.init(carousel, {
                fullWidth: true,
                indicators: true, // this option is require for autoplay functionnality
            });

            let indicatorItems = document.querySelectorAll('.carousel .indicator-item'),
                slideTime = 2000,
                activeClass = "active";

            setInterval(() => {
                indicatorItems.forEach(el => {
                    if (el.classList.contains(activeClass)) {
                        const sib = el.nextElementSibling;
                        if (sib == null) {
                            indicatorItems[0].click();
                        } else {
                            sib.click()
                        }
                    }
                });
            }, slideTime);


    }

    render(){

        let currItems = null;

        if(this.props.numItems === 0 || this.props.numItems < 0 || this.props.numItems === null || this.props.numItems === undefined) {
            currItems = (


                <div>
                    <h1 className="center center-align white-text Caveat">No Items Just Yet......</h1>

                    <h2 className="center center-align white-text Caveat">Check out these other designs</h2>
                    <div className="carousel carousel-slider center">
                        <div className="carousel-fixed-item center white-text">
                        </div>
                        <div className="carousel-item white-text" >
                            <img src={photo}/>
                        </div>
                        <div className="carousel-item white-text" >
                            <img src={photo3}/>
                        </div>
                        <div className="carousel-item white-text" >
                            <img src={photo2}/>
                        </div>
                        <div className="carousel-item white-text" >
                            <img src={photo1}/>
                        </div>
                    </div>
                </div>
            )

            // console.log("poop")

        }

        else {
            // console.log(this.props.numItems)

            currItems = (


                    <div className="section transparent z-depth-0  Caveat  center    white-text">

                        <table className=" bodyHeight">
                            <h1 className="white-text center center-align Caveat">Total Price: ${this.props.currPrice}</h1>

                            <thead>

                            <tr>

                                <th className="center-align"></th>

                                <th className="center-align">Items</th>
                                <th className="center-align">Price</th>
                                {/*<th className="center-align">Components</th>*/}

                            </tr>
                            </thead>

                            <tbody className="bodyHeight1" >
                            {this.props.items.map((item) => {

                                return (

                                    <Order key={item.id}
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



                            </tbody>

                        </table>
                        <br/>

                        <button className="Caveat waves-effect waves-light btn-large white black-text hoverable" onClick={() => { history.push('/CheckOut') }} >Check Out</button>

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

                        <span className="center center-align Caveat black-text">My Order</span>


                    </div>
                </div>

            </header>

            <main >



                {currItems}


                <br/>



            </main>

            <footer className="page-footer black Caveat">
                <div className="container">
                    <div className="row">
                        <div className="col  s6 center-align">
                            <h5 className="white-text " onClick={() => { history.push('/') }}>Home</h5>

                            <h5 className="white-text" onClick={() => { history.push('/Customs') }}>Customs</h5>
                            <h5 className="white-text " onClick={() => { history.push('/Reviews') }}>Reviews</h5>

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

export default connect(mapStateToProps, mapDispatchToProps)(MyOrder);

