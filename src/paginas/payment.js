import Navbar from "../components/navbar";
import Contact from "../components/contact";
import React from "react";
import PaymentMethodSelector from "../components/PaymentMethodSelector";


export default class Payment extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <>
            <Navbar/>
            <PaymentMethodSelector/>
            <Contact/>
            </>
        )
    }
}


