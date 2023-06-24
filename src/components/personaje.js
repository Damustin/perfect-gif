

import React from "react";


export default class Personajes extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (

            <div id={this.props.key} className="col p-5">
                <div className="card">
                    <img src={this.props.img} className="card-img-top" />
                    <div className="card-body">
                        <h5 className="card-title">{this.props.title}</h5>
                        <p className="card-text">{this.props.desc}</p>
                    </div>
                </div>
            </div>
        )
    }

}