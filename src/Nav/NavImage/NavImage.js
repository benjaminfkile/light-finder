import React, { Component } from 'react';

class NavImage extends Component {

    render() {

            return (
                <div className="Nav_Header">
                    <img src={this.props.lights.picture} alt='loading' height={250} width={400}></img>
                </div>
            )
    }
}

export default NavImage;