import React from 'react';
import catsArray from "./../../../static/catsArray";
import CatDetailComponent from "./CatDetailComponent";

const CatsStrokeComponent = (props) => {
    const {cats} = props;
    let id = 0;
    return (
        <div className={"row text-center"}>
            {
                cats.map(item => {
                    return(
                        <CatDetailComponent 
                            key = {++id}
                            cat = {item}>
                        </CatDetailComponent>
                    )
                })
            }
        </div>
    )
}
export default CatsStrokeComponent;