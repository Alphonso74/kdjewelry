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


        console.log('poop');
        document.getElementById('Ring').setAttribute("class", "style1");
        document.getElementById('Necklace').setAttribute("class", "style3");
        // document.getElementById('Test').setAttribute("class", "style3");
        document.getElementById('Bracelet').setAttribute("class", "style3");


    }

    optionClick2 = () => {


        console.log('poop');
        document.getElementById('Necklace').setAttribute("class", "style1");

        document.getElementById('Ring').setAttribute("class", "style3");
        // document.getElementById('Test').setAttribute("class", "style3");
        document.getElementById('Bracelet').setAttribute("class", "style3");


    }

    optionClick3 = () => {


        console.log('poop');
        document.getElementById('Bracelet').setAttribute("class", "style1");

        document.getElementById('Necklace').setAttribute("class", "style3");
        // document.getElementById('Test').setAttribute("class", "style3");
        document.getElementById('Ring').setAttribute("class", "style3");


    }

    optionClick4 = () => {


        console.log('poop');
        document.getElementById('Test').setAttribute("class", "style1");

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

                <div className="container hide-on-small-and-down">
                    <div className="row ">
                        <div className="col s12">
                            <div className="card transparent z-depth-0  Caveat">
                                <div className="card-content center-align center">
                                    <p className="card-title center-align center white-text">Choose an Item Type:</p>
                                    {/*<p className="center center-align white-text">Options</p>*/}
                                    <br/>
                                    <div className="row ">
                                        <div className="col s4 center center-align">
                                            <div className="card " id="Ring" onClick={this.optionClick1}>
                                                <div className="card-content center-block center-align">
                                                    {/*<span className="card-title">Ring</span>*/}
                                                    <div className="card-image">
                                                        <img src={photo1}/>
                                                            <span className="card-title black-text">Ring</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col s4 center center-align" >
                                            <div className="card " id="Bracelet" onClick={this.optionClick3}>
                                                <div className="card-content center-block center-align">
                                                    {/*<span className="card-title">Bracelet</span>*/}
                                                    <div className="card-image">
                                                        <img src={photo3}/>
                                                            <span className="card-title black-text">Bracelet</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col s4  ">
                                            <div className="card " id="Necklace" onClick={this.optionClick2}>
                                                <div className="card-content  ">
                                                    {/*<span className="card-title  ">Necklace</span>*/}
                                                    <div className="card-image">
                                                        <img src={photo}/>
                                                        <span className="card-title black-text">Necklace</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row  ">


                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>



                </div>

                <hr className="tubular hide-on-small-and-down"/>



                <div className="container hide-on-small-and-down">
                    <div className="row ">
                        <div className="col s12">
                            <div className="card transparent z-depth-0  Caveat">
                                <div className="card-content center-align center">
                                    <p className="card-title center-align center white-text">Choose a Style:</p>
                                    {/*<p className="center center-align white-text">Options</p>*/}
                                    <br/>
                                    <div className="row ">
                                        <div className="col s3 center center-align">
                                            <div className="card " id="Ring" onClick={this.optionClick1}>
                                                <div className="card-content center-block center-align">
                                                    {/*<span className="card-title">Ring</span>*/}
                                                    <div className="card-image">
                                                        <img src={photo1}/>
                                                        <span className="card-title black-text">Spiral</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col s3 center center-align" >
                                            <div className="card " id="Bracelet" onClick={this.optionClick3}>
                                                <div className="card-content center-block center-align">
                                                    {/*<span className="card-title">Bracelet</span>*/}
                                                    <div className="card-image">
                                                        <img src={photo3}/>
                                                        <span className="card-title black-text">Double Loop</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col s3  ">
                                            <div className="card " id="Necklace" onClick={this.optionClick2}>
                                                <div className="card-content  ">
                                                    {/*<span className="card-title  ">Necklace</span>*/}
                                                    <div className="card-image">
                                                        <img src={photo}/>
                                                        <span className="card-title black-text">Laser</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col s3  ">
                                            <div className="card " id="Necklace" onClick={this.optionClick2}>
                                                <div className="card-content  ">
                                                    {/*<span className="card-title  ">Necklace</span>*/}
                                                    <div className="card-image">
                                                        <img src={photo}/>
                                                        <span className="card-title black-text">Tri</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row  ">

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>



                </div>

                <hr className="tubular hide-on-small-and-down"/>



                <div className="container hide-on-small-and-down ">
                    <div className="row container">
                        <div className="col s12">
                            <div className="card transparent z-depth-0  Caveat">
                                <div className="card-content center-align center">
                                    <p className="card-title center-align center white-text">Choose a Wire Type:</p>
                                    {/*<p className="center center-align white-text">Options</p>*/}
                                    <br/>
                                    <div className="row ">
                                        <div className="col s6 center center-align">
                                            <div className="card " id="Ring" onClick={this.optionClick1}>
                                                <div className="card-content center-block center-align">
                                                    {/*<span className="card-title">Ring</span>*/}
                                                    <div className="card-image">
                                                        <img src={photo1}/>
                                                        <span className="card-title black-text">Silver</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col s6 center center-align" >
                                            <div className="card " id="Bracelet" onClick={this.optionClick3}>
                                                <div className="card-content center-block center-align">
                                                    {/*<span className="card-title">Bracelet</span>*/}
                                                    <div className="card-image">
                                                        <img src={photo3}/>
                                                        <span className="card-title black-text">Bronze</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                    </div>
                                    <div className="row  ">

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>



                </div>

                <hr className="tubular hide-on-small-and-down"/>



                <div className="container hide-on-small-and-down">
                    <div className="row ">
                        <div className="col s12">
                            <div className="card transparent z-depth-0  Caveat">
                                <div className="card-content center-align center">
                                    <p className="card-title center-align center white-text">Choose a Bead:</p>
                                    {/*<p className="center center-align white-text">Options</p>*/}
                                    <br/>
                                    <div className="row ">
                                        <div className="col s3 center center-align">
                                            <div className="card " id="Ring" onClick={this.optionClick1}>
                                                <div className="card-content center-block center-align">
                                                    {/*<span className="card-title">Ring</span>*/}
                                                    <div className="card-image">
                                                        <img src={photo1}/>
                                                        <span className="card-title black-text">Ring</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col s3 center center-align" >
                                            <div className="card " id="Bracelet" onClick={this.optionClick3}>
                                                <div className="card-content center-block center-align">
                                                    {/*<span className="card-title">Bracelet</span>*/}
                                                    <div className="card-image">
                                                        <img src={photo3}/>
                                                        <span className="card-title black-text">Bracelet</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col s3  ">
                                            <div className="card " id="Necklace" onClick={this.optionClick2}>
                                                <div className="card-content  ">
                                                    {/*<span className="card-title  ">Necklace</span>*/}
                                                    <div className="card-image">
                                                        <img src={photo}/>
                                                        <span className="card-title black-text">Necklace</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col s3  ">
                                            <div className="card " id="Necklace" onClick={this.optionClick2}>
                                                <div className="card-content  ">
                                                    {/*<span className="card-title  ">Necklace</span>*/}
                                                    <div className="card-image">
                                                        <img src={photo}/>
                                                        <span className="card-title black-text">Necklace</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row  ">

                                        <div className="col s3 center center-align">
                                            <div className="card " id="Ring" onClick={this.optionClick1}>
                                                <div className="card-content center-block center-align">
                                                    {/*<span className="card-title">Ring</span>*/}
                                                    <div className="card-image">
                                                        <img src={photo1}/>
                                                        <span className="card-title black-text">Ring</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col s3 center center-align" >
                                            <div className="card " id="Bracelet" onClick={this.optionClick3}>
                                                <div className="card-content center-block center-align">
                                                    {/*<span className="card-title">Bracelet</span>*/}
                                                    <div className="card-image">
                                                        <img src={photo3}/>
                                                        <span className="card-title black-text">Bracelet</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col s3  ">
                                            <div className="card " id="Necklace" onClick={this.optionClick2}>
                                                <div className="card-content  ">
                                                    {/*<span className="card-title  ">Necklace</span>*/}
                                                    <div className="card-image">
                                                        <img src={photo}/>
                                                        <span className="card-title black-text">Necklace</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col s3  ">
                                            <div className="card " id="Necklace" onClick={this.optionClick2}>
                                                <div className="card-content  ">
                                                    {/*<span className="card-title  ">Necklace</span>*/}
                                                    <div className="card-image">
                                                        <img src={photo}/>
                                                        <span className="card-title black-text">Necklace</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="row  ">

                                        <div className="col s3 center center-align">
                                            <div className="card " id="Ring" onClick={this.optionClick1}>
                                                <div className="card-content center-block center-align">
                                                    {/*<span className="card-title">Ring</span>*/}
                                                    <div className="card-image">
                                                        <img src={photo1}/>
                                                        <span className="card-title black-text">Ring</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col s3 center center-align" >
                                            <div className="card " id="Bracelet" onClick={this.optionClick3}>
                                                <div className="card-content center-block center-align">
                                                    {/*<span className="card-title">Bracelet</span>*/}
                                                    <div className="card-image">
                                                        <img src={photo3}/>
                                                        <span className="card-title black-text">Bracelet</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col s3  ">
                                            <div className="card " id="Necklace" onClick={this.optionClick2}>
                                                <div className="card-content  ">
                                                    {/*<span className="card-title  ">Necklace</span>*/}
                                                    <div className="card-image">
                                                        <img src={photo}/>
                                                        <span className="card-title black-text">Necklace</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col s3  ">
                                            <div className="card " id="Necklace" onClick={this.optionClick2}>
                                                <div className="card-content  ">
                                                    {/*<span className="card-title  ">Necklace</span>*/}
                                                    <div className="card-image">
                                                        <img src={photo}/>
                                                        <span className="card-title black-text">Necklace</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="row  ">

                                        <div className="col s3 center center-align">
                                            <div className="card " id="Ring" onClick={this.optionClick1}>
                                                <div className="card-content center-block center-align">
                                                    {/*<span className="card-title">Ring</span>*/}
                                                    <div className="card-image">
                                                        <img src={photo1}/>
                                                        <span className="card-title black-text">Ring</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col s3 center center-align" >
                                            <div className="card " id="Bracelet" onClick={this.optionClick3}>
                                                <div className="card-content center-block center-align">
                                                    {/*<span className="card-title">Bracelet</span>*/}
                                                    <div className="card-image">
                                                        <img src={photo3}/>
                                                        <span className="card-title black-text">Bracelet</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col s3  ">
                                            <div className="card " id="Necklace" onClick={this.optionClick2}>
                                                <div className="card-content  ">
                                                    {/*<span className="card-title  ">Necklace</span>*/}
                                                    <div className="card-image">
                                                        <img src={photo}/>
                                                        <span className="card-title black-text">Necklace</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col s3  ">
                                            <div className="card " id="Necklace" onClick={this.optionClick2}>
                                                <div className="card-content  ">
                                                    {/*<span className="card-title  ">Necklace</span>*/}
                                                    <div className="card-image">
                                                        <img src={photo}/>
                                                        <span className="card-title black-text">Necklace</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="row  ">

                                        <div className="col s3 center center-align">
                                            <div className="card " id="Ring" onClick={this.optionClick1}>
                                                <div className="card-content center-block center-align">
                                                    {/*<span className="card-title">Ring</span>*/}
                                                    <div className="card-image">
                                                        <img src={photo1}/>
                                                        <span className="card-title black-text">Ring</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col s3 center center-align" >
                                            <div className="card " id="Bracelet" onClick={this.optionClick3}>
                                                <div className="card-content center-block center-align">
                                                    {/*<span className="card-title">Bracelet</span>*/}
                                                    <div className="card-image">
                                                        <img src={photo3}/>
                                                        <span className="card-title black-text">Bracelet</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col s3  ">
                                            <div className="card " id="Necklace" onClick={this.optionClick2}>
                                                <div className="card-content  ">
                                                    {/*<span className="card-title  ">Necklace</span>*/}
                                                    <div className="card-image">
                                                        <img src={photo}/>
                                                        <span className="card-title black-text">Necklace</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col s3  ">
                                            <div className="card " id="Necklace" onClick={this.optionClick2}>
                                                <div className="card-content  ">
                                                    {/*<span className="card-title  ">Necklace</span>*/}
                                                    <div className="card-image">
                                                        <img src={photo}/>
                                                        <span className="card-title black-text">Necklace</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>



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
