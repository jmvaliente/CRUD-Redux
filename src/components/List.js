import React, { Fragment, useEffect } from 'react'
import Element from './Element'

//redux
import { useSelector, useDispatch } from 'react-redux'
import { listElementAction } from '../actions/elementActions'

const List = () => {

    const dispatch = useDispatch()

    useEffect(()=>{

        const chargeList = () => dispatch(listElementAction())
        chargeList()

    },[])

    const elements = useSelector(state => state.list.list)
    const error = useSelector(state => state.list.error)
    const loading = useSelector(state => state.list.loading)

    return(
        <Fragment>
            <h2 className="text-center my-5">Item List</h2>
            {error ? <p className="alert alert-danger text-center mt-4">Error List</p> : null}
            {loading ?<p className="text-center">Loading...</p> :null}

            <table className="table table-striped">
                <thead className="bg-primary table-dark">
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {elements === 0 ? <p>No Elements</p> : (
                        elements.map(element =>(
                            <Element
                                key={element.id}
                                element={element}
                            />
                        ))
                    ) }
                </tbody>
            </table>
        </Fragment>
    )
}

export default List