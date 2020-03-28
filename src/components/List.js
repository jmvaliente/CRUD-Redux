import React, { Fragment } from 'react'

const List = () => {
    return(
        <Fragment>
            <h2 className="text-center my-5">Item List</h2>
            <table className="table table-striped">
                <thead className="bg-primary table-dark">
                    <th scope="col">Name</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Actions</th>
                </thead>
                <tbody>
                    
                </tbody>
            </table>
        </Fragment>
    )
}

export default List