import React from "react";

const BackgroundComponent = () => {
    return (
        <div>
            <div className={"container-fluid"} className={"background"}>
                <div className={"container"}>
                    <div className={"row text-center"}>
                        <div className={"cal-sm"} style={{width: "280px"}}></div>
                        <div className={"cal-sm"} style={{height: "200px"}}><label className={"background-text"}>Cats Site</label></div>
                    </div>
                </div>
            </div>
            <div className={"container-fluid"} style={{height: "60px", backgroundColor: "#424242"}}>
                <div className={"container"}>
                    <h1 style={{height: "10px"}}></h1>
                    <div className={"row"}>
                        <h1 style={{color: "white", fontSize: "20px"}}></h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BackgroundComponent;