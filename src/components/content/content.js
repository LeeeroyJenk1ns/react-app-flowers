import React, {Component} from 'react';

import Card from '../card';
import './content.css';

export default class Content extends Component {

    render() {
        return (
            <div className="container content">
                <Card
                    item={this.props.item}
                    onDeleted={this.props.onDeleted} />
            </div>
        );
    }
}