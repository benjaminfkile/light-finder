import React, { Component } from 'react';

class NavImage extends Component {

    constructor(props) {
        super(props);
        this.state = { loaded: false };
    }

    handleImageLoaded() {
        this.setState({ loaded: true });
    }

    render() {

        console.log(this.state.loaded)

        return (
            <div className="Nav_Header">
                <img src={this.props.lights.picture} onLoad={this.handleImageLoaded.bind(this)} alt='' height={0} width={0}></img>
                {this.state.loaded && <img src={this.props.lights.picture} id="loaded" onLoad={this.handleImageLoaded.bind(this)} alt='loading'></img>}
                {!this.state.loaded && <img src="./res/splash.png" id="loading" alt='A tree'></img>}
                {!this.state.loaded && <h1>Loading...</h1>}
            </div>
        )
    }
}

export default NavImage;