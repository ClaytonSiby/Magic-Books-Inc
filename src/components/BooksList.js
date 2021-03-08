import React from 'react';
import { connect } from 'react-redux';

const BooksList = () => {
    return (
        <table>
            <tr>
                <tr>Book ID</tr>
                <tr>Title</tr>
                <tr>Category</tr>
            </tr>
            <tr>
                <td>5</td>
                <td>6</td>
                <td>7</td>
            </tr>
        </table>
    )
}

const mapStateToProps = state => {
    state
}

export default connect(mapStateToProps)(BooksList)
