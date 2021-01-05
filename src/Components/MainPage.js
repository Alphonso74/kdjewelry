import React, {Component} from 'react';
import Navbar from "./Navbar";
import './MainPageCSS.css';

class MainPage extends Component {


    render(){



        return (
            <body className="backgroundimg">

                <header className="section container ">

                <Navbar/>

                </header>

                <main>
                {/*<h1 className="white-text">Main Page</h1>*/}
                    <br/>
                    <br/>




                </main>

                <footer className="page-footer transparent Caveat">
                    <div className="container">
                        <div className="row">
                            <div className="col  s6 ">
                                <h5 className="white-text">Ky Ky</h5>
                                <p className="grey-text text-lighten-4">Custom Rings</p>
                                <p className="grey-text text-lighten-4">Place An Order!</p>
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

export default MainPage;
