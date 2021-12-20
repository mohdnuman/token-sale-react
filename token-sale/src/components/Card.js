import React, { Component } from 'react';
import {Image} from 'semantic-ui-react';

class Card extends Component {
    constructor(props){
        super(props);
        this.state={
            url:this.props.url,
            heading:this.props.heading
        }
    }
    render() {
        return (
            <div>
                <Image src={this.state.url} className='card-image'/>
                <h3>{this.state.heading}</h3>
            </div>
        );
    }
}

export default Card;