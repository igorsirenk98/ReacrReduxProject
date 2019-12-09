import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchProductsBySearch } from '../../actions/ProductsBySearch';

const mapStateToProps = state => ({
    searchValue: '',
    products: state.topProducts.products,
    error: state.topProducts.error
});

export class SearchInput extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchValue: ''
        }
    }

    handleChange(e) {
        const { value } = e.target.value;

        this.setState({
            searchValue: e.target.value
        });
    }

    render() {
        const { searchValue } = this.state;

        return (
            <>
                <input 
                    type="text" 
                    value={searchValue}
                    name="keyword" 
                    placeholder="Enter bike name..."
                    onChange={this.handleChange.bind(this)}
                />
                <Link to={{
                    pathname: `/products/search=${searchValue}`,
                    searchValue
                }}>
                    Search
                </Link>
            </> 
        )
    }
}


export default connect(mapStateToProps)(SearchInput);