import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import { fetchTopProducts } from '../actions/TopProducts';
import { List } from './basicComponents/List';
import Loading from './basicComponents/Loading';

const mapStateToProps = state => ({
    products: state.topProducts.products,
    loading: state.topProducts.loading,
    error: state.topProducts.error
});

class TopProducts extends Component {
    componentDidMount() {
        this.props.dispatch(fetchTopProducts());
    }

    render() {
        const { products, loading, error } = this.props;

        if (error) {
            return <div className="error"><p>Error! {error.message}</p></div>;
        } else if (loading) {
            return (
                <>
                    <CssBaseline />
                    <Container className="containerStyles" fixed>
                        <div className="loadingContainer">
                            <Loading />
                        </div>
                    </Container>
                </>
            );
        }

        return (
            <>
                {!!products.length && 
                    <List products={products}/>
                }
            </>
        ); 
    }
}

export default connect(mapStateToProps)(TopProducts);