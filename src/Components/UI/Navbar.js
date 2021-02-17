import React, {Component} from 'react';
import M from 'materialize-css/dist/js/materialize.min';
import {NavLink} from "react-router-dom";
// import photo from '../../../asset/alphonsopicture.jpg';
import './NavbarCSS.css';
import * as Icon from 'react-feather';

class Navbar extends Component{


    componentDidMount() {


        const elems = document.querySelectorAll('.sidenav');
        const instances = M.Sidenav.init(elems, {});

        var elems1 = document.querySelectorAll('.fixed-action-btn');
        var instances1 = M.FloatingActionButton.init(elems1, {});


    }

    render() {

        let bar = null;

        if(this.props.numItems === 0 || this.props.numItems < 0 || this.props.numItems === null || this.props.numItems === undefined){

            bar = (

                <div>


                    <nav className=" transparent z-depth-0 container">
                        <div className="nav-wrapper  ">

                            {/*<i className="brand-logo left  Caveat center-align white-text "><NavLink  to='/' exact >Jewelry By Ky</NavLink></i>*/}
                            <i className=" brand-logo right hide-on-large-only white-text"><NavLink  to='/MyOrder' exact ><i className="material-icons ">shopping_cart</i></NavLink></i>
                            <i className=" brand-logo center hide-on-large-only white-text"><NavLink  to='/' exact ><i className="material-icons ">home</i></NavLink></i>

                            <a href="/" data-target="mobile-demo" className="sidenav-trigger">
                                <i className="material-icons white-text left">menu</i></a>
                            <ul className="right hide-on-med-and-down ">
                                <div className="Caveat ">
                                    <li  ><NavLink  to='/' exact >Home</NavLink></li>
                                    {/*<li ><NavLink  to='/Catalog' exact >Gallery</NavLink></li>*/}
                                    <li ><NavLink  to='/Customs' exact >Customs</NavLink></li>
                                    <li ><NavLink to='/Reviews' exact >Reviews</NavLink></li>
                                    <li ><NavLink to='/MyOrder' exact ><i className="material-icons ">shopping_cart</i></NavLink></li>
                                    <li ><NavLink  to='/Contact' exact >Contact Me </NavLink></li>
                                    {/*<li ><NavLink  to='/Contact' exact ><Icon.Instagram color="white" size={35} position='center'/></NavLink></li>*/}



                                </div>
                            </ul>
                        </div>
                    </nav>

                    <ul className="sidenav sidenav-close  navimg Caveat " id="mobile-demo">
                        <li  ><NavLink className="white-text hoverable sizeFont1"  to='/' exact >Home</NavLink></li>
                        {/*<li ><NavLink className="white-text hoverable" to='/Catalog' exact >Gallery</NavLink></li>*/}
                        <li ><NavLink className="white-text hoverable sizeFont1"  to='/Customs' exact >Customs - Create Your Own!</NavLink></li>
                        <li ><NavLink className="white-text hoverable sizeFont1" to='/Reviews' exact >Reviews</NavLink></li>
                        {/*<li ><NavLink className="white-text hoverable" to='/MyOrder' exact ><i className="material-icons ">shopping_cart</i></NavLink></li>*/}
                        <li ><NavLink className="white-text hoverable sizeFont1" to='/Contact' exact >Contact Me</NavLink></li>

                    </ul>

                    {/*<ul className="sidenav sidenav-close  navimg" id="mobile-demo">*/}
                    {/*<div className="fixed-action-btn horizontal click-to-toggle hide-on-large-only">*/}
                    {/*    <a className="btn-floating btn-large purple">*/}
                    {/*        <i className="material-icons">menu</i>*/}
                    {/*    </a>*/}
                    {/*    <ul>*/}
                    {/*            <li  ><NavLink className="white-text hoverable btn-floating red"  to='/' exact ><i className="material-icons">home</i></NavLink></li>*/}
                    {/*            /!*<li ><NavLink className="white-text hoverable" to='/Catalog' exact >Gallery</NavLink></li>*!/*/}
                    {/*            <li ><NavLink className="white-text hoverable btn-floating blue darken-1"  to='/Customs' exact ><i className="material-icons">dashboard_customize</i></NavLink></li>*/}
                    {/*            <li ><NavLink className="white-text hoverable btn-floating pink" to='/Reviews' exact ><i className="material-icons">reviews</i></NavLink></li>*/}
                    {/*            /!*<li ><NavLink className="white-text hoverable btn-floating blue" to='/MyOrder' exact ><i className="material-icons ">shopping_cart</i></NavLink></li>*!/*/}
                    {/*            <li ><NavLink className="white-text hoverable btn-floating green" to='/Contact' exact ><i className="material-icons">contact_phone</i></NavLink></li>*/}


                    {/*        /!*<li><a className="btn-floating red"><i className="material-icons">timeline</i></a></li>*!/*/}
                    {/*        /!*<li><a className="btn-floating yellow darken-1"><i className="material-icons">voice_chat</i></a>*!/*/}
                    {/*        /!*</li>*!/*/}
                    {/*        /!*<li><a className="btn-floating green"><i className="material-icons">cloud_upload</i></a>*!/*/}
                    {/*        /!*</li>*!/*/}
                    {/*        /!*<li><a className="btn-floating blue"><i className="material-icons">attach_file</i></a></li>*!/*/}
                    {/*    </ul>*/}
                    {/*</div>*/}

                    {/*</ul>*/}


                </div>
            )

        } else {

            bar = (

            <div>


                <nav className=" transparent z-depth-0 container ">
                    <div className="nav-wrapper  ">

                        {/*<i className="brand-logo left Caveat center-align white-text "><NavLink  to='/' exact >Jewelry By Ky</NavLink></i>*/}
                        <i className=" brand-logo right Caveat hide-on-large-only white-text "><NavLink to='/MyOrder' exact >Cart: {this.props.numItems}</NavLink></i>
                        <i className=" brand-logo center hide-on-large-only white-text"><NavLink  to='/' exact ><i className="material-icons ">home</i></NavLink></i>

                        <a href="/" data-target="mobile-demo" className="sidenav-trigger">
                            <i className="material-icons white-text left">menu</i></a>
                        <ul className="right hide-on-med-and-down ">
                            <div className="Caveat ">
                                <li  ><NavLink  to='/' exact >Home</NavLink></li>
                                {/*<li ><NavLink  to='/Catalog' exact >Gallery</NavLink></li>*/}
                                <li ><NavLink  to='/Customs' exact >Customs</NavLink></li>
                                <li ><NavLink to='/Reviews' exact >Reviews</NavLink></li>
                                <li ><NavLink to='/MyOrder' exact >Cart: {this.props.numItems}</NavLink></li>
                                <li ><NavLink  to='/Contact' exact >Contact Me </NavLink></li>



                            </div>
                        </ul>
                    </div>
                </nav>

                <ul className="sidenav sidenav-close  navimg Caveat sizeFont1" id="mobile-demo">
                    <li  ><NavLink className="white-text hoverable sizeFont1"  to='/' exact >Home</NavLink></li>
                    {/*<li ><NavLink className="white-text hoverable" to='/Catalog' exact >Gallery</NavLink></li>*/}
                    <li ><NavLink className="white-text hoverable sizeFont1"  to='/Customs' exact >Customs - Create Your Own!</NavLink></li>
                    <li ><NavLink className="white-text hoverable sizeFont1" to='/Reviews' exact >Reviews</NavLink></li>
                    {/*<li ><NavLink className="white-text hoverable" to='/MyOrder' exact >Cart: {this.props.numItems}</NavLink></li>*/}
                    <li ><NavLink className="white-text hoverable sizeFont1" to='/Contact' exact >Contact Me</NavLink></li>

                </ul>
                {/*<div className="fixed-action-btn horizontal click-to-toggle hide-on-large-only">*/}
                {/*    <a className="btn-floating btn-large purple">*/}
                {/*        <i className="material-icons">menu</i>*/}
                {/*    </a>*/}
                {/*    <ul>*/}
                {/*        <li  ><NavLink className="white-text hoverable btn-floating red"  to='/' exact ><i className="material-icons">home</i></NavLink></li>*/}
                {/*        /!*<li ><NavLink className="white-text hoverable" to='/Catalog' exact >Gallery</NavLink></li>*!/*/}
                {/*        <li ><NavLink className="white-text hoverable btn-floating blue darken-1"  to='/Customs' exact ><i className="material-icons">dashboard_customize</i></NavLink></li>*/}
                {/*        <li ><NavLink className="white-text hoverable btn-floating pink" to='/Reviews' exact ><i className="material-icons">reviews</i></NavLink></li>*/}
                {/*        /!*<li ><NavLink className="white-text hoverable btn-floating blue" to='/MyOrder' exact >{this.props.numItems}</NavLink></li>*!/*/}
                {/*        <li ><NavLink className="white-text hoverable btn-floating green" to='/Contact' exact ><i className="material-icons">contact_phone</i></NavLink></li>*/}

                {/*        /!*<li><a className="btn-floating red"><i className="material-icons">timeline</i></a></li>*!/*/}
                {/*        /!*<li><a className="btn-floating yellow darken-1"><i className="material-icons">voice_chat</i></a>*!/*/}
                {/*        /!*</li>*!/*/}
                {/*        /!*<li><a className="btn-floating green"><i className="material-icons">cloud_upload</i></a></li>*!/*/}
                {/*        /!*<li><a className="btn-floating blue"><i className="material-icons">attach_file</i></a></li>*!/*/}
                {/*    </ul>*/}
                {/*</div>*/}


            </div>

            )
        }

        return (




            <div>


                {bar}


            </div>




        )
    }

}

export default Navbar;
