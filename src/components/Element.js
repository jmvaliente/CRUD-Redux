import React from 'react'
import { Link } from 'react-router-dom'

const Element = ({element}) =>{
    return(
        <tr>
            <td>{element.name}</td>
            <td>{element.quantity}</td>
            <td><Link to = {`/edit/${element.id}`} className="btn btn-primary mr-2">
                Edit</Link>
                <button
                    type="button"
                    className="btn btn-danger">      
                    Delete</button>
                </td>
        </tr>
    )
}

export default Element