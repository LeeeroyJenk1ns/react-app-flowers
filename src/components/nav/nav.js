import React from 'react';

import Title from '../title';
import SearchPanel from '../search-panel';
import List from '../list';
import './nav.css';

const Nav = ({li, onLabelClick, searchCard}) => {
    return (
        <nav className="navbar nav-header">
                <Title/>
                <List
                    li={li}
                    onLabelClick={onLabelClick} />
                <SearchPanel
                searchCard={searchCard} />
        </nav>
    );
}

export default Nav;