import React from "react";
import '../src/Title.css';

function listener() {
    let offset = window.pageYOffset;
    const parallax1 = document.getElementById("parallax1")
    parallax1.style.backgroundPositionY = offset * 0.7 + "px";
}

class Title extends React.Component {

    componentDidMount() {
        window.addEventListener("scroll", listener)
        // console.log("Mounted")
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", listener)
        // console.log("Dismounted")
    }

    render() {
        return(
            <div id="parallax1">
                <h3 id="title-wrapper">
                    <p>{this.props.text}</p>
                    <p id="title-description">{this.props.description}</p>
                </h3>
            </div>
        )
    }
}

export default Title;