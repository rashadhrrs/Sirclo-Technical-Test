import React, { Component } from 'react'

import Header from "parts/Header"
import Content from "parts/Content"
import Footer from "parts/Footer"
import DataDummy from "DataDummy"

export default class HomePage extends Component {
    constructor(props){
        super(props);
        this.state={
            banner: DataDummy.banners,
            menProduct: DataDummy.menProducts,
            womenProducts: DataDummy.womenProducts,
            accProducts: DataDummy.accProducts,
        }
    }

    render(){
    return (
        <div>
        <Header {...this.props}></Header>
        <Content state = {this.state}/>
        <Footer></Footer>
        </div>
    )
}
}



