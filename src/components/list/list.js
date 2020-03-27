import React from 'react';

import ListItem from '../list-item';
import './list.css';

const List = ({li, onLabelClick}) => {

    const elements = li.map(i => {

        const {id, ...itemProps} = i;

        return (
            <li className="nav-item li-item" key={id}>
                <ListItem
                    {...itemProps}
                    onLabelClick={() => onLabelClick(id)} />
            </li>
        );
    })

    return (
        <ul className="nav nav-tabs">
            {elements}
        </ul>
    );
}

export default List;