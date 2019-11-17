import React from 'react'
import NewEmployeeForm from './NewEmployeeForm';

class ListEmployees extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        hits: [],
        isLoading: false,
        isAddNewUser: false,
        idDeleting: "",
      };
      this.handleReloadData = this.handleReloadData.bind(this);
      this.cancelAddUser = this.cancelAddUser.bind(this);
      this.newUserForm = this.newUserForm.bind(this);
      this.deleteEmployee = this.deleteEmployee.bind(this);
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

    deleteEmployee(id) {
        this.setState({idDeleting: id});

        fetch(`http://localhost:3000/employees/${id}`, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({id: id})
        })
        .then(response => response.json())
        .then(() => this.handleReloadData());
    }
    
    render() {
        const { hits, isLoading, isAddNewUser, idDeleting } = this.state;
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
                                <td><button onClick={() => this.deleteEmployee(hit.id)}>Delete</button></td>
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