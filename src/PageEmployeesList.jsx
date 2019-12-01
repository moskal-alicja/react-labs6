import React from 'react'
import ListEmployees from './ListEmployees'
import {Link} from 'react-router-dom'

class PageEmployeesList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { };
      }

    render(){
        return(
            <div>
                <h3>List of employees: </h3>
                <ListEmployees/>
                <Link to="/new">
                    <button>Add new employee</button>
                </Link>
            </div>
        );
    }
}

export default PageEmployeesList

