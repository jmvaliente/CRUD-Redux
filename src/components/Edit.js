import React, {useState, useEffect} from 'react'

//Redux
import { startEditElementAction } from '../actions/elementActions'
import { useDispatch, useSelector} from 'react-redux'
import { useHistory } from 'react-router-dom'

const Edit = () => {

    const history = useHistory()
    const dispatch = useDispatch()

    const [state, setState] = useState({
        name:'',
        quantity:''
    })

    const element = useSelector(state => state.list.editElement)

    useEffect(()=>{
        setState(element)
    },[element])

    const changeItem = e =>{
        setState({
            ...state,
            [e.target.name] : e.target.value
        })
    }
    

    const submitEdit = (e) =>{
        e.preventDefault()

        dispatch(startEditElementAction(state))

        history.push('/')
        
    }



    return(
        <div className="row justify-content-center">
            <div className="col-md-5">
                <div clasname="card">
                    <div clasname="card-body">
                        <h2 clasname="text-center mb-4 font-weight-bold">
                            Edit item
                        </h2>
                        <form
                            onSubmit={submitEdit}
                        >
                            <div className="form-group">
                                <label>Name Item</label>
                                <input
                                    name="name"
                                    type="text"
                                    className="form-control"
                                    placeholder="Name Item"
                                    value = {element ? state.name : null}
                                    onChange = {changeItem}
                                    
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
                                    value={element ? state.quantity : null}
                                    onChange={changeItem}
                                    
                                >
                                </input>
                            </div>

                            <button
                                type="submit"
                                className="btn btn-primary"
                            >
                                Edit Item
                            </button>

                        </form>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Edit