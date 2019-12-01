import React from 'react'
import NewEmployeeForm from './NewEmployeeForm'
import {Link} from 'react-router-dom'

class PageEmployee extends React.Component {
    constructor(props) {
      super(props);
      this.state = { };
    }

    render(){
        return(
            <div>
                <NewEmployeeForm/>
                <Link to="/">Back to list</Link>
            </div>
        );
    }
}

export default PageEmployee