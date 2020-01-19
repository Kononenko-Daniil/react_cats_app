import React from "react";
import CatsStrokeComponent from './../components/CatsStrokeComponent';
import catsArray from './../../../static/catsArray'

const CatsComponent = (props) => {
    let id = 0;
    return (
        <div>
            <h1 style={{height: "10px"}}></h1>
            <div className={"container-fluid"}>
                <div className={"container"}>
                    {
                        catsArray.map(item => {
                            return(
                                <CatsStrokeComponent 
                                    key = {++id}
                                    cats = {item}>
                                </CatsStrokeComponent>
                            )
                        })
                    } 
                </div>
            </div>
        </div>
    )
}

export default CatsComponent;