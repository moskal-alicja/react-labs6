import React from 'react'
import ListEmployees from './ListEmployees'

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
            </div>
        );
    }
}

export default PageEmployeesList

