import React from 'react'
import NewEmployeeForm from './NewEmployeeForm';

class ListEmployees extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        hits: [],
        isLoading: false,
        isAddNewUser: false,
      };
      this.handleReloadData = this.handleReloadData.bind(this);
      this.cancelAddUser = this.cancelAddUser.bind(this);
      this.newUserForm = this.newUserForm.bind(this);
    }

    componentDidMount() {
      this.setState({ isLoading: true });

      fetch('http://localhost:3000/employees')
        .then(response => response.json())
        .then(data => this.setState({ hits: data, isLoading: false }));
    }

    handleReloadData() {
      this.setState({ isLoading: true, isAddNewUser: false });

      fetch('http://localhost:3000/employees')
        .then(response => response.json())
        .then(data => this.setState({ hits: data, isLoading: false }));
    }

    cancelAddUser() {
        this.setState({isAddNewUser: false});
    }
    newUserForm() {
        this.setState({isAddNewUser: true});
    }

    addNewUser() {
    }
    
    render() {
        const { hits, isLoading, isAddNewUser } = this.state;
        if (isLoading) {
          return <p>Loading ...</p>;
        }
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Company</th>
                            <th>Email</th>
                            <th>IsActive</th>
                        </tr>
                    </thead>
                    <tbody>
                        {hits.map(hit =>
                        <tr key={hit.id}>
                            <td>{hit.name}</td>
                            <td>{hit.age}</td>
                            <td>{hit.company}</td>
                            <td>{hit.email}</td>
                            <td>{hit.isActive.toString()}</td>
                        </tr>)}
                    </tbody>                               
                </table>
                {!isAddNewUser &&  
                    <button onClick={this.newUserForm}>Add employee</button> } 
                {isAddNewUser &&  
                    <NewEmployeeForm handleReloadData={this.handleReloadData} cancel={this.cancelAddUser}/>}
            </div>   
        );
    }
}
export default ListEmployees;