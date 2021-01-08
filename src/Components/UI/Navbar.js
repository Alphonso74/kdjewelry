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


                <nav className=" transparent z-depth-0 ">
                    <div className="nav-wrapper transparent z-depth-0 ">

                        <i className="brand-logo Caveat center-align black-text ">Jewelry By Ky</i>
                        <a href="/" data-target="mobile-demo" className="sidenav-trigger">
                            <i className="material-icons black-text">menu</i></a>
                        <ul className="right hide-on-med-and-down ">
                            <div className="Caveat ">
                                <li  ><NavLink  to='/' exact >Home</NavLink></li>
                                <li ><NavLink  to='/Catalog' exact >Catalog</NavLink></li>
                                <li ><NavLink  to='/Contact' exact >Contact Me</NavLink></li>
                                <li ><NavLink  to='/Customs' exact >Customs</NavLink></li>
                                <li ><NavLink to='/MyOrder' exact >My Order</NavLink></li>

                                {/*<li><a href="sass.html">Resume</a></li>*/}
                                {/*<li><a href="badges.html">Blog</a></li>*/}
                                {/*<li><a href="collapsible.html">Contact Me</a></li>*/}
                            </div>
                        </ul>
                    </div>
                </nav>

                <ul className="sidenav sidenav-close grey " id="mobile-demo">
                    <li   ><NavLink  to='/' exact >Home</NavLink></li>
                    <li ><NavLink  to='/Catalog' exact >Catalog</NavLink></li>
                    <li ><NavLink  to='/Contact' exact >Contact Me</NavLink></li>
                    <li ><NavLink  to='/Customs' exact >Customs</NavLink></li>
                    <li ><NavLink  to='/MyOrder' exact >My Order</NavLink></li>
                </ul>


            </div>




        )
    }

}

export default Navbar;
