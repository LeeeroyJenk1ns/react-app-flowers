import React, {Component} from 'react';

import './search-panel.css';

export default class SearchPanel extends Component {

    state= {
        searchValue: ''
    }

    onChange = (e) => {
        this.setState({
            searchValue: e.target.value
        });
    };

    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.searchValue !== '') {
            this.props.searchCard(this.state.searchValue.toLowerCase());
        }
    }

    render() {
        return (
            <form onSubmit={this.onSubmit} className="form-inline">
                <input onChange={this.onChange} className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-info my-2 my-sm-0" type="submit">Search</button>
            </form>
        );
    }
}