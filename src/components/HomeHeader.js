import React, { Component } from 'react';
import './../assets/scss/header.scss';

class HomeHeader extends Component {
    constructor(props){
        super(props);
    }
    // var headlineStyle = {

    // };
    
    render() {
        return (
            <div className="row" style={{background: '#00aeef'}}>
                <div className="col-sm-5">
                    <i className=""></i>
                    <h5>Hotline</h5>
                </div>
                <div className="col-sm-7">b</div>
            </div>
        );
    }
}

export default HomeHeader;