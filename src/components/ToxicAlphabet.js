import React from "react";
import './ToxicAlphabet.css'

class ToxicAlphabet extends React.Component {
    render() {
        return (
            <h1>{this.props.alphabet}</h1>
        );
    }
}

export default ToxicAlphabet;