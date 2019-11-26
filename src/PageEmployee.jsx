import React from 'react'
import NewEmployeeForm from './NewEmployeeForm'

class PageEmployee extends React.Component {
    constructor(props) {
      super(props);
      this.state = { };
    }

    render(){
        return(
            <NewEmployeeForm/>
        );
    }
}

export default PageEmployee