import React, {Component} from 'react';
import M from 'materialize-css/dist/js/materialize.min';
import {NavLink} from "react-router-dom";
// import photo from '../../../asset/alphonsopicture.jpg';
import './NavbarCSS.css';
class Navbar extends Component{


    componentDidMount() {


        const elems = document.querySelectorAll('.sidenav');
        const instances = M.Sidenav.init(elems, {});


    }

    render() {

        return (




            <div>


                <nav className=" transparent z-depth-0 container">
                    <div className="nav-wrapper  ">

                        <i className="brand-logo  Caveat center-align white-text ">Jewelry By Ky</i>
                        <a href="/" data-target="mobile-demo" className="sidenav-trigger">
                            <i className="material-icons white-text">menu</i></a>
                        <ul className="right hide-on-med-and-down ">
                            <div className="Caveat ">
                                <li  ><NavLink  to='/' exact >Home</NavLink></li>
                                <li ><NavLink  to='/Catalog' exact >Gallery</NavLink></li>
                                <li ><NavLink  to='/Customs' exact >Customs</NavLink></li>
                                <li ><NavLink to='/Reviews' exact >Reviews</NavLink></li>
                                <li ><NavLink to='/MyOrder' exact ><i className="material-icons ">shopping_cart</i></NavLink></li>
                                <li ><NavLink  to='/Contact' exact >Contact Me </NavLink></li>



                            </div>
                        </ul>
                    </div>
                </nav>

                <ul className="sidenav sidenav-close  navimg" id="mobile-demo">
                    <li  ><NavLink className="white-text hoverable"  to='/' exact >Home</NavLink></li>
                    <li ><NavLink className="white-text hoverable" to='/Catalog' exact >Gallery</NavLink></li>
                    <li ><NavLink className="white-text hoverable"  to='/Customs' exact >Customs</NavLink></li>
                    <li ><NavLink className="white-text hoverable" to='/Reviews' exact >Reviews</NavLink></li>
                    <li ><NavLink className="white-text hoverable" to='/MyOrder' exact >My Cart</NavLink></li>
                    <li ><NavLink className="white-text hoverable" to='/Contact' exact >Contact Me</NavLink></li>

                </ul>


            </div>




        )
    }

}

export default Navbar;
