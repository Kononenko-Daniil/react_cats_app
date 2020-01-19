import React from 'react';

const CatDetailComponent = (props) => {
    const {cat} = props;
    return (
    <div className={"cal-sm"} className={"component CatDiElement margin"}>
        <h1 style={{height: "5px"}}></h1>
        <img src={cat.url} className={"imgDetail"}></img>
        <h2 style={{fontWeight: "lighter", color: "white"}}>Name: {cat.name}</h2>
    </div>
    )
}
export default CatDetailComponent;