import React from 'react';

import Nav from '../nav';
import './header.css';

const Header = ({li, onLabelClick, searchCard}) => {
    return (
        <div className="container header">
            <Nav
            li={li}
            onLabelClick={onLabelClick}
            searchCard={searchCard} />
        </div>
    );
}

export default Header;