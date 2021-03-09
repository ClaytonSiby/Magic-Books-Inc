import React from 'react';
import { connect } from 'react-redux';

const BooksList = () => {
    return (
        <div>
            <h2>Books List here!</h2>
            <table>
                <tr>
                    <th>Book ID</th>
                    <th>Title</th>
                    <th>Category</th>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Tom and Jery</td>
                    <td>Kids</td>
                </tr>
            </table>
        </div>
    )
}

export default connect()(BooksList)
