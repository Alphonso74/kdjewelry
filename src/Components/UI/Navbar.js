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




                <nav className="transparent z-depth-0 ">
                    <div className="nav-wrapper ">
                        <i className="brand-logo Caveat center black-text "><u>Jewelry By Ky</u></i>
                        <a href="/" data-target="mobile-demo" className="sidenav-trigger show-on-large">
                            <i className="material-icons black-text ">menu</i></a>
                        <ul className="sidenav sidenav-close  grey " id="mobile-demo">
                                    <li className="active " ><NavLink className="white-text" to='/' exact >Home</NavLink></li>
                                    <li className="active"><NavLink className="white-text" to='/Catalog' exact >Catalog</NavLink></li>
                                    <li className="active"><NavLink className="white-text" to='/Contact' exact >Contact Me</NavLink></li>
                                    <li className="active"><NavLink className="white-text" to='/Customs' exact >Customs</NavLink></li>
                                    <li className="active"><NavLink className="white-text" to='/MyOrder' exact >My Order</NavLink></li>
                    </ul>
                    </div>
                </nav>




        )
    }

}

export default Navbar;
