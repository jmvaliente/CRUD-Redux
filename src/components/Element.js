import React from 'react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'

// Redux
import { useDispatch } from 'react-redux'
import  { deleteElementAction, editElementAction } from '../actions/elementActions'

const Element = ({element}) =>{

    const dispatch = useDispatch()

    const buttonDelete = id => {
        //answer user

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.value) {
                //go to Action
                dispatch( deleteElementAction(id) )
            }
          })

    }

    const buttonEdit = (element) =>{
        dispatch (editElementAction(element))
    }

    return(
        <tr>
            <td>{element.name}</td>
            <td>{element.quantity}</td>
            <td><Link to = {`/edit/${element.id}`}
                    className="btn btn-primary mr-2"
                    onClick={()=>buttonEdit(element)}>
                Edit</Link>
                <button
                    type="button"
                    className="btn btn-danger"
                    onClick={()=>buttonDelete(element.id)}>      
                    Delete</button>
                </td>
        </tr>
    )
}

export default Element