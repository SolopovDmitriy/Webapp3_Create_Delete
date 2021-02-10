import React from 'react';
import MainMenu from '../MainMenu/MainMenu';
import Footer from '../Footer/Footer';

// import popper from 'popper.js';
// import bootstrap from 'bootstrap';
// import $ from 'jquery';

export default  class TemplatePage extends React.Component{
    render() {
        return (

            <div className="row">
                <MainMenu />
                <h1>Я разрабатываюсь</h1>
                {this.props.children}
                <Footer />
            </div>
        )
    }
}