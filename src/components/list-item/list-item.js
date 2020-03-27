import React, { Component } from 'react';

import './list-item.css';

export default class ListItem extends Component {

    render() {
        const {label, onLabelClick, select} = this.props;

        let classNames = "span-item";

        if(select) {
            classNames += " select";
        }
    
        return (
            <span
                className={classNames}
                onClick={onLabelClick}>
                    {label}
            </span>
            );
    };
}