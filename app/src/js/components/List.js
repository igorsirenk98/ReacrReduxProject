import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        data: state.data
    };
};

const ConnectedList = ({ data }) => (
    <ul>
        {data.bicycles.map(item => (
            <li key={item.id}>
                {item.title}
            </li>
        ))}
    </ul>
);

const List = connect(mapStateToProps)(ConnectedList);

export default List;