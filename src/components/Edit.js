import React from 'react'

const Edit = () => {
    return(
        <div className="row justify-content-center">
            <div className="col-md-5">
                <div clasname="card">
                    <div clasname="card-body">
                        <h2 clasname="text-center mb-4 font-weight-bold">
                            Edit item
                        </h2>
                        <form>
                            <div className="form-group">
                                <label>Name Item</label>
                                <input
                                    name="name"
                                    type="text"
                                    className="form-control"
                                    placeholder="Name Item"
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