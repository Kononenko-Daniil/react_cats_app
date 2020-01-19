import React, {Component} from 'react';
import CatsComponent from './component'

class CatsContainer extends Component {
    constructor (props){
        super(props);
    }

    render() {
        return(
            <CatsComponent>
            </CatsComponent>
        )
    }
}

export default CatsContainer;