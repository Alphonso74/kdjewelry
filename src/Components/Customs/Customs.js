import React, {Component} from 'react';
import Navbar from "../UI/Navbar";
import './CustomsCSS.css';
import photo1 from "../../pictures/jewcrystal.jpg";
import photo2 from "../../pictures/jewhand2.jpg";
import photo3 from "../../pictures/jewcone.jpg";
import photo from "../../pictures/jewelry1.jpg";
import {connect} from 'react-redux';
import * as actionTypes from '../../store/actions';
import M from "materialize-css/dist/js/materialize.min";

class Customs extends Component {

    state = {

        itemName: null,
        itemPrice: 0,
        itemComponents: {

            itemType: null,
            style: null,
            wireType: null,
            beadType: null,
            specialInstructions: 'None'

        },
        done: false,
        button: (

            <button className=" Caveat waves-effect waves-light btn-large white black-text hoverable disabled" ><i
                className="material-icons right" >add_task</i>Add Item</button>
        )

    };

    optionClick1 = () => {

        this.setState({itemName: 'Ring', itemComponents: {...this.state.itemComponents, itemType: 'Ring' }, itemPrice: 5   });

        // console.log('poop');
        document.getElementById('Ring').setAttribute("class", "card-content transparent z-depth-0 Caveat style1 contentSize valign-wrapper");
        document.getElementById('Necklace').setAttribute("class", "card-content transparent z-depth-0 Caveat style3 contentSize valign-wrapper");
        document.getElementById('Bracelet').setAttribute("class", "card-content transparent z-depth-0 Caveat style3 contentSize valign-wrapper");


    };

    optionClick2 = () => {

        this.setState({itemName: 'Necklace', itemComponents: {...this.state.itemComponents, itemType: 'Necklace' }, itemPrice: 6   });

        // console.log('poop');
        document.getElementById('Necklace').setAttribute("class", "card-content transparent z-depth-0 Caveat style1 contentSize valign-wrapper");

        document.getElementById('Ring').setAttribute("class", "card-content transparent z-depth-0 Caveat style3 contentSize valign-wrapper");
        // document.getElementById('Test').setAttribute("class", "style3");
        document.getElementById('Bracelet').setAttribute("class", "card-content transparent z-depth-0 Caveat style3 contentSize valign-wrapper");


    };

    optionClick3 = () => {

        this.setState({itemName: 'Bracelet', itemComponents: {...this.state.itemComponents, itemType: 'Bracelet' }, itemPrice: 5  });


        // console.log('poop');
        document.getElementById('Bracelet').setAttribute("class", "card-content transparent z-depth-0 Caveat style1 contentSize valign-wrapper");

        document.getElementById('Necklace').setAttribute("class", "card-content transparent z-depth-0 Caveat style3 contentSize valign-wrapper");
        // document.getElementById('Test').setAttribute("class", "style3");
        document.getElementById('Ring').setAttribute("class", "card-content transparent z-depth-0 Caveat style3 contentSize valign-wrapper");


    };

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    optionClick4 = () => {
        this.setState({itemComponents: {...this.state.itemComponents, style: 'Spiral' }});


        // console.log('poop');
        document.getElementById('Spiral').setAttribute("class", "card-content transparent z-depth-0 Caveat style1 contentSize valign-wrapper");

        document.getElementById('Diamond').setAttribute("class", "card-content transparent z-depth-0 Caveat style3 contentSize valign-wrapper");
        document.getElementById('Triangular').setAttribute("class", "card-content transparent z-depth-0 Caveat style3 contentSize valign-wrapper");
        document.getElementById('Wrapped').setAttribute("class", "card-content transparent z-depth-0 Caveat style3 contentSize valign-wrapper");

    }

    optionClick5 = () => {
        this.setState({itemComponents: {...this.state.itemComponents, style: 'Diamond' }});


        // console.log('poop');
        document.getElementById('Diamond').setAttribute("class", "card-content transparent z-depth-0 Caveat style1 contentSize valign-wrapper");

        document.getElementById('Spiral').setAttribute("class", "card-content transparent z-depth-0 Caveat style3 contentSize valign-wrapper");
        document.getElementById('Triangular').setAttribute("class", "card-content transparent z-depth-0 Caveat style3 contentSize valign-wrapper");
        document.getElementById('Wrapped').setAttribute("class", "card-content transparent z-depth-0 Caveat style3 contentSize valign-wrapper");

    }

    optionClick6 = () => {
        this.setState({itemComponents: {...this.state.itemComponents, style: 'Triangular' }});


        // console.log('poop');
        document.getElementById('Triangular').setAttribute("class", "card-content transparent z-depth-0 Caveat style1 contentSize valign-wrapper");

        document.getElementById('Spiral').setAttribute("class", "card-content transparent z-depth-0 Caveat style3 contentSize valign-wrapper");
        document.getElementById('Wrapped').setAttribute("class", "card-content transparent z-depth-0 Caveat style3 contentSize valign-wrapper");
        document.getElementById('Diamond').setAttribute("class", "card-content transparent z-depth-0 Caveat style3 contentSize valign-wrapper");

    }

    optionClick7 = () => {

        this.setState({itemComponents: {...this.state.itemComponents, style: 'Wrapped' }});

        // console.log('poop');
        document.getElementById('Wrapped').setAttribute("class", "card-content transparent z-depth-0 Caveat style1 contentSize valign-wrapper");

        document.getElementById('Diamond').setAttribute("class", "card-content transparent z-depth-0 Caveat style3 contentSize valign-wrapper");
        document.getElementById('Spiral').setAttribute("class", "card-content transparent z-depth-0 Caveat style3 contentSize valign-wrapper");
        document.getElementById('Triangular').setAttribute("class", "card-content transparent z-depth-0 Caveat style3 contentSize valign-wrapper");

    }

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


    optionClick8 = () => {

        this.setState({itemComponents: {...this.state.itemComponents, wireType: 'Silver' }});

        // console.log('poop');
        document.getElementById('Silver').setAttribute("class", "card-content transparent z-depth-0 Caveat style1 contentSize valign-wrapper");

        document.getElementById('Brass').setAttribute("class", "card-content transparent z-depth-0 Caveat style3 contentSize valign-wrapper");
        // document.getElementById('Spiral').setAttribute("class", "card-content transparent z-depth-0 Caveat style3 contentSize valign-wrapper");
        // document.getElementById('Triangular').setAttribute("class", "card-content transparent z-depth-0 Caveat style3 contentSize valign-wrapper");

    }

    optionClick9 = () => {

        this.setState({itemComponents: {...this.state.itemComponents, wireType: 'Brass' }});

        // console.log('poop');
        document.getElementById('Silver').setAttribute("class", "card-content transparent z-depth-0 Caveat style3 contentSize valign-wrapper");
        document.getElementById('Brass').setAttribute("class", "card-content transparent z-depth-0 Caveat style1 contentSize valign-wrapper");

        // document.getElementById('Diamond').setAttribute("class", "card-content transparent z-depth-0 Caveat style3 contentSize valign-wrapper");
        // document.getElementById('Spiral').setAttribute("class", "card-content transparent z-depth-0 Caveat style3 contentSize valign-wrapper");
        // document.getElementById('Triangular').setAttribute("class", "card-content transparent z-depth-0 Caveat style3 contentSize valign-wrapper");

    }

    optionClick9 = () => {

        this.setState({itemComponents: {...this.state.itemComponents, wireType: 'Brass' }});

        // console.log('poop');
        document.getElementById('Silver').setAttribute("class", "card-content transparent z-depth-0 Caveat style3 contentSize valign-wrapper");
        document.getElementById('Brass').setAttribute("class", "card-content transparent z-depth-0 Caveat style1 contentSize valign-wrapper");

        // document.getElementById('Diamond').setAttribute("class", "card-content transparent z-depth-0 Caveat style3 contentSize valign-wrapper");
        // document.getElementById('Spiral').setAttribute("class", "card-content transparent z-depth-0 Caveat style3 contentSize valign-wrapper");
        // document.getElementById('Triangular').setAttribute("class", "card-content transparent z-depth-0 Caveat style3 contentSize valign-wrapper");

    }

    optionClick10 = () => {

        this.setState({itemComponents: {...this.state.itemComponents, beadType: 'Red' }});

        // console.log('poop');
        // document.getElementById('Silver').setAttribute("class", "card-content transparent z-depth-0 Caveat style3 contentSize valign-wrapper");
        document.getElementById('Red').setAttribute("class", "card-content transparent z-depth-0 Caveat style1 contentSize valign-wrapper");

        document.getElementById('Blue').setAttribute("class", "card-content transparent z-depth-0 Caveat style3 contentSize valign-wrapper");
        document.getElementById('Green').setAttribute("class", "card-content transparent z-depth-0 Caveat style3 contentSize valign-wrapper");
        document.getElementById('White').setAttribute("class", "card-content transparent z-depth-0 Caveat style3 contentSize valign-wrapper");

    }

    optionClick11 = () => {

        this.setState({itemComponents: {...this.state.itemComponents, beadType: 'Blue' }});

        // console.log('poop');
        document.getElementById('Blue').setAttribute("class", "card-content transparent z-depth-0 Caveat style1 contentSize valign-wrapper");

        document.getElementById('Red').setAttribute("class", "card-content transparent z-depth-0 Caveat style3 contentSize valign-wrapper");
        document.getElementById('Green').setAttribute("class", "card-content transparent z-depth-0 Caveat style3 contentSize valign-wrapper");
        document.getElementById('White').setAttribute("class", "card-content transparent z-depth-0 Caveat style3 contentSize valign-wrapper");

        // document.getElementById('Diamond').setAttribute("class", "card-content transparent z-depth-0 Caveat style3 contentSize valign-wrapper");
        // document.getElementById('Spiral').setAttribute("class", "card-content transparent z-depth-0 Caveat style3 contentSize valign-wrapper");
        // document.getElementById('Triangular').setAttribute("class", "card-content transparent z-depth-0 Caveat style3 contentSize valign-wrapper");

    }

    optionClick12= () => {

        this.setState({itemComponents: {...this.state.itemComponents, beadType: 'Green' }});

        // console.log('poop');
        document.getElementById('Green').setAttribute("class", "card-content transparent z-depth-0 Caveat style1 contentSize valign-wrapper");

        document.getElementById('Red').setAttribute("class", "card-content transparent z-depth-0 Caveat style3 contentSize valign-wrapper");
        document.getElementById('Blue').setAttribute("class", "card-content transparent z-depth-0 Caveat style3 contentSize valign-wrapper");
        document.getElementById('White').setAttribute("class", "card-content transparent z-depth-0 Caveat style3 contentSize valign-wrapper");

        // document.getElementById('Diamond').setAttribute("class", "card-content transparent z-depth-0 Caveat style3 contentSize valign-wrapper");
        // document.getElementById('Spiral').setAttribute("class", "card-content transparent z-depth-0 Caveat style3 contentSize valign-wrapper");
        // document.getElementById('Triangular').setAttribute("class", "card-content transparent z-depth-0 Caveat style3 contentSize valign-wrapper");

    }
    optionClick13 = () => {

        this.setState({itemComponents: {...this.state.itemComponents, beadType: 'White' }});

        // console.log('poop');
        document.getElementById('White').setAttribute("class", "card-content transparent z-depth-0 Caveat style1 contentSize valign-wrapper");

        document.getElementById('Blue').setAttribute("class", "card-content transparent z-depth-0 Caveat style3 contentSize valign-wrapper");
        document.getElementById('Green').setAttribute("class", "card-content transparent z-depth-0 Caveat style3 contentSize valign-wrapper");
        document.getElementById('Red').setAttribute("class", "card-content transparent z-depth-0 Caveat style3 contentSize valign-wrapper");
        // document.getElementById('Diamond').setAttribute("class", "card-content transparent z-depth-0 Caveat style3 contentSize valign-wrapper");
        // document.getElementById('Spiral').setAttribute("class", "card-content transparent z-depth-0 Caveat style3 contentSize valign-wrapper");
        // document.getElementById('Triangular').setAttribute("class", "card-content transparent z-depth-0 Caveat style3 contentSize valign-wrapper");

    }




    addItem = () => {



        const elem = document.getElementById('modal2');
        const instance = M.Modal.init(elem, {dismissible: true});
        instance.open();


        console.log("poopy")
       return  (
           this.props.onItemAdded(this.state.itemName, this.state.itemPrice, this.state.itemComponents),
               this.setState({itemName: 'None', itemComponents: { itemType: 'None', beadType: 'None', wireType: 'None', style: 'None'  }, itemPrice: 0   }),
               document.getElementById('Bracelet').setAttribute("class", "card-content transparent z-depth-0 Caveat style3 contentSize valign-wrapper"),
               document.getElementById('Necklace').setAttribute("class", "card-content transparent z-depth-0 Caveat style3 contentSize valign-wrapper"),
               document.getElementById('Ring').setAttribute("class", "card-content transparent z-depth-0 Caveat style3 contentSize valign-wrapper"),
               document.getElementById('White').setAttribute("class", "card-content transparent z-depth-0 Caveat style3 contentSize valign-wrapper"),
               document.getElementById('Blue').setAttribute("class", "card-content transparent z-depth-0 Caveat style3 contentSize valign-wrapper"),
        document.getElementById('Green').setAttribute("class", "card-content transparent z-depth-0 Caveat style3 contentSize valign-wrapper"),
        document.getElementById('Red').setAttribute("class", "card-content transparent z-depth-0 Caveat style3 contentSize valign-wrapper"),
        // document.getElementById('button1').setAttribute("class", "Caveat waves-effect waves-light btn-large white black-text hoverable disabled"),

               document.getElementById('Wrapped').setAttribute("class", "card-content transparent z-depth-0 Caveat style3 contentSize valign-wrapper"),

        document.getElementById('Diamond').setAttribute("class", "card-content transparent z-depth-0 Caveat style3 contentSize valign-wrapper"),
        document.getElementById('Spiral').setAttribute("class", "card-content transparent z-depth-0 Caveat style3 contentSize valign-wrapper"),
        document.getElementById('Triangular').setAttribute("class", "card-content transparent z-depth-0 Caveat style3 contentSize valign-wrapper"),
               document.getElementById('Silver').setAttribute("class", "card-content transparent z-depth-0 Caveat style3 contentSize valign-wrapper"),
        document.getElementById('Brass').setAttribute("class", "card-content transparent z-depth-0 Caveat style3 contentSize valign-wrapper"),
               document.getElementById('Ring').setAttribute("class", "card-content transparent z-depth-0 Caveat style3 contentSize valign-wrapper"),
        document.getElementById('Necklace').setAttribute("class", "card-content transparent z-depth-0 Caveat style3 contentSize valign-wrapper"),
        document.getElementById('Bracelet').setAttribute("class", "card-content transparent z-depth-0 Caveat style3 contentSize valign-wrapper")

        // this.setState({done: false})




    )


    };



    render(){

        // if(this.state.itemComponents.beadType !== 'None' && this.state.itemComponents.itemType !== 'None' && this.state.itemComponents.style !== 'None' && this.state.itemComponents.wireType !== 'None'){
        //     this.setState({done: true})
        // }

        console.log(this.state.itemComponents.style + " " + this.state.itemComponents.wireType + " " + this.state.itemComponents.beadType + " " + this.state.itemComponents.itemType);


        let button = null;

        if(this.state.itemComponents.beadType !== null && this.state.itemComponents.itemType !== null && this.state.itemComponents.style !== null && this.state.itemComponents.wireType !== null )
        {


            // console.log('hello');
            button = (


                <button className="Caveat waves-effect waves-light btn-large white black-text hoverable" id="button1"><i
            className="material-icons right" onClick={this.addItem}>add_task</i>Add Item</button>
            )

        }
        else{

            console.log('hello23');

            button = (
                <button className=" Caveat waves-effect waves-light btn-large white black-text hoverable disabled"  ><i
                    className="material-icons right" >add_task</i>Add Item</button>
            )

        }



        return (
            <body className="backgroundimg123 ">

            <div id="modal2" className="modal modal-fixed-footer Caveat">
                <div className="modal-content center-align">
                    <h4>Item Added!</h4>
                    <i className="material-icons centerAlign">thumb_up</i>
                </div>

            </div>


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
                                    className="img-rounded activator resizeimg" alt="test" />
                            </div>
                            <div className="card-content transparent z-depth-0 Caveat contentSize valign-wrapper" id="Ring">
                                <span className='text-center scaleText' >Rings</span>
                            </div>
                        </div>
                    </div>
                    <div className="col s4">
                        <div className="card"  onClick={this.optionClick2}>
                            <div className="card-header card-image   ">
                                <img
                                    src={photo1}
                                    className="img-rounded activator resizeimg " alt="test" />
                            </div>
                            <div className="card-content transparent z-depth-0 Caveat contentSize valign-wrapper" id="Necklace">
                                <span className='text-center scaleText'>Necklaces</span>
                            </div>
                        </div>
                    </div>
                    <div className="col s4">
                        <div className="card"  onClick={this.optionClick3}>
                            <div className="card-header card-image   ">
                                <img src={photo3}
                                     className="img-rounded activator resizeimg" alt="test " />
                            </div>
                            <div className="card-content transparent z-depth-0 Caveat contentSize valign-wrapper" id="Bracelet">
                                <span className='text-center scaleText'>Bracelets</span>
                            </div>
                        </div>
                    </div>
                </div>


                <h2 className="card-title center-align center white-text Caveat">Choose a Style:</h2>

                <div className="row text-center container">
                    <div className="col s6" >
                        <div className="card"  onClick={this.optionClick4}>
                            <div className="card-header card-image   ">
                                <img
                                    src={photo}
                                    className="img-rounded activator resizeimg" alt="test" />
                            </div>
                            <div className="card-content transparent z-depth-0 Caveat contentSize valign-wrapper" id="Spiral">
                                <span className='text-center scaleText '>Spiral</span>
                            </div>
                        </div>
                    </div>
                    <div className="col s6">
                        <div className="card"  onClick={this.optionClick5}>
                            <div className="card-header card-image   ">
                                <img
                                    src={photo1}
                                    className="img-rounded activator resizeimg " alt="test" />
                            </div>
                            <div className="card-content transparent z-depth-0 Caveat contentSize valign-wrapper" id="Diamond">
                                <span className='text-center scaleText'>Diamond</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row text-center container">



                <div className="col s6">
                        <div className="card"  onClick={this.optionClick6}>
                            <div className="card-header card-image   ">
                                <img src={photo3}
                                     className="img-rounded activator resizeimg" alt="test " />
                            </div>
                            <div className="card-content transparent z-depth-0 Caveat contentSize valign-wrapper" id="Triangular">
                                <span className='text-center scaleText'>Triangular</span>
                            </div>
                        </div>
                    </div>
                    <div className="col s6">
                        <div className="card"  onClick={this.optionClick7}>
                            <div className="card-header card-image   ">
                                <img src={photo3}
                                     className="img-rounded activator resizeimg" alt="test " />
                            </div>
                            <div className="card-content transparent z-depth-0 Caveat contentSize valign-wrapper" id="Wrapped">
                                <span className='text-center scaleText center'>Wrapped</span>
                            </div>
                        </div>
                    </div>
                </div>




                <h2 className="card-title center-align center  Caveat white-text">Choose a Wire Type:</h2>

                <div className="row text-center container">
                    <div className="col s6" >
                        <div className="card"  onClick={this.optionClick8}>
                            <div className="card-header card-image   ">
                                <img
                                    src={photo}
                                    className="img-rounded activator resizeimg" alt="test" />
                            </div>
                            <div className="card-content transparent z-depth-0 Caveat contentSize valign-wrapper" id="Silver">
                                <span className='text-center scaleText '>Silver</span>
                            </div>
                        </div>
                    </div>
                    <div className="col s6">
                        <div className="card"  onClick={this.optionClick9}>
                            <div className="card-header card-image   ">
                                <img
                                    src={photo1}
                                    className="img-rounded activator resizeimg " alt="test" />
                            </div>
                            <div className="card-content transparent z-depth-0 Caveat contentSize valign-wrapper" id="Brass">
                                <span className='text-center scaleText'>Brass</span>
                            </div>
                        </div>
                    </div>
                </div>

                <h2 className="card-title center-align center white-text Caveat">Choose a bead Type:</h2>


                <div className="row text-center container">
                    <div className="col s6" >
                        <div className="card"  onClick={this.optionClick10}>
                            <div className="card-header card-image   ">
                                <img
                                    src={photo}
                                    className="img-rounded activator resizeimg" alt="test" />
                            </div>
                            <div className="card-content transparent z-depth-0 Caveat contentSize valign-wrapper" id="Red">
                                <span className='text-center scaleText '>Red</span>
                            </div>
                        </div>
                    </div>
                    <div className="col s6">
                        <div className="card"  onClick={this.optionClick11}>
                            <div className="card-header card-image   ">
                                <img
                                    src={photo1}
                                    className="img-rounded activator resizeimg " alt="test" />
                            </div>
                            <div className="card-content transparent z-depth-0 Caveat contentSize valign-wrapper" id="Blue">
                                <span className='text-center scaleText'>Blue</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row text-center container">



                    <div className="col s6">
                        <div className="card"  onClick={this.optionClick12}>
                            <div className="card-header card-image   ">
                                <img src={photo3}
                                     className="img-rounded activator resizeimg" alt="test " />
                            </div>
                            <div className="card-content transparent z-depth-0 Caveat contentSize valign-wrapper" id="Green">
                                <span className='text-center scaleText'>Green</span>
                            </div>
                        </div>
                    </div>
                    <div className="col s6">
                        <div className="card"  onClick={this.optionClick13}>
                            <div className="card-header card-image   ">
                                <img src={photo3}
                                     className="img-rounded activator resizeimg" alt="test " />
                            </div>
                            <div className="card-content transparent z-depth-0 Caveat contentSize valign-wrapper" id="White">
                                <span className='text-center scaleText center'>White</span>
                            </div>
                        </div>
                    </div>
                </div>







                <div className="center">
                    {button}
                    {/*<h1 className="white-text">Price Total: ${this.props.currPrice}</h1>*/}
                    <br/>
                    <br/>
                </div>

                {/*<div className="center">*/}

                {/*    <h4 className="white-text">Number of Items: {this.props.numItems}</h4>*/}
                {/*</div>*/}







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
