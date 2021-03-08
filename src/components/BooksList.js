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
                <td></td>
                <td></td>
                <td></td>
            </tr>
        </table>
    )
}

export default connect(BooksList)
