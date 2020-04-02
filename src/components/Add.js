import React,{useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'

// Action Redux
import { createElementAction } from '../actions/elementActions'
import { alertAction, alertActionNull } from '../actions/alertActions'

const Add = ({history}) => { //history is a navigation props

    const [name,setName] = useState('')
    const [quantity,setQuantity] = useState(0)
    
    //use dispatch for create a function
    const dispatch = useDispatch()
    
    //read state of store
    const loading = useSelector(state => state.list.loading)
    const error = useSelector(state => state.list.error)
    const alert = useSelector(state => state.alert)
    
    

    //call the action using dispatch
    const addElement = (element) => dispatch(createElementAction(element))

    const submitNewElement = e => {
        e.preventDefault()

        // validate form

        // validate error
        if(name.trim()==='' || quantity <= 0){
            
            const alert = {
                msg: 'Name and Quantity is need',
                class: 'alert alert-danger text-center'
            }
            dispatch( alertAction(alert) )
            return
        }else{
            dispatch(alertActionNull())
        }


        // Create Element
        addElement({
            name,
            quantity
        })
        
        history.push('/') // Redirect to '/'
    }
        
        



    return(
        <div className="row justify-content-center">
            <div className="col-md-5">
                <div clasname="card">
                    <div clasname="card-body">
                        <h2 clasname="text-center mb-4 font-weight-bold">
                            Add item
                        </h2>
                            {alert.alert ? <p className={alert.msg.class}>{alert.msg.msg}</p> :null}
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
                        {loading ? <p>Loading...</p> : null}
                        {error ? <p className="alert alert-danger mt-2 text-center">Error</p>: null}
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Add