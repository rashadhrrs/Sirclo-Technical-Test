import React, { Component } from 'react'

import Header from "parts/Header"
import Content from "parts/Content"
import Footer from "parts/Footer"
import Api from "Api"

export default class HomePage extends Component {
    constructor(props){
        super(props);
        this.state={
            banner: []
        }
    }

    componentDidMount(){
        Api.create().getBanner().then((Response) => {
            console.log(Response)
        })
    }

    render(){
    return (
        <div>
        <Header {...this.props}></Header>
        <Content></Content>
        <Footer></Footer>
        </div>
    )
}
}



