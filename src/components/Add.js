import React,{useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
// Action Redux
import { createElementAction } from '../actions/elementActions'

const Add = () => {

    const [name,setName] = useState('')
    const [quantity,setQuantity] = useState(0)

    //use dispatch for create a function
    const dispatch = useDispatch()

    //call the action using dispatch
    const addElement = (element) => dispatch(createElementAction(element))

    const submitNewElement = e => {
        e.preventDefault()

        // validate form

        // validate error

        // Create Element
        addElement({
            name,
            quantity
        })
    }


    return(
        <div className="row justify-content-center">
            <div className="col-md-5">
                <div clasname="card">
                    <div clasname="card-body">
                        <h2 clasname="text-center mb-4 font-weight-bold">
                            Add item
                        </h2>
                        <form
                            onSubmit={submitNewElement}
                        >
                            <div className="form-group">
                                <label>Name Item</label>
                                <input
                                    name="name"
                                    type="text"
                                    className="form-control"
                                    placeholder="Name Item"
                                    value = {name}
                                    onChange = {e => setName(e.target.value)}
                                >
                                </input>
                            </div>

                            <div className="form-group">
                                <label>Quantity</label>
                                <input
                                    name="quantity"
                                    type="number"
                                    className="form-control"
                                    placeholder="Quantity"
                                    value = {quantity}
                                    onChange = {e => setQuantity(Number(e.target.value))}
                                >
                                </input>
                            </div>

                            <button
                                type="submit"
                                className="btn btn-primary"
                            >
                                Add Item
                            </button>

                        </form>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Add