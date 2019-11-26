import React from 'react'

class NewEmployeeForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isActive: true,
        age: 0,
        name: "",
        company: "",
        email: "",
        isSaving: false,
      };
      this.handleChange = this.handleChange.bind(this);
      this.addNewUser = this.addNewUser.bind(this);
      this.activeness = this.activeness.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value, 
        });

    }

    addNewUser() {
        this.setState({isSaving: true});

        const {isActive, age, name, company, email} = this.state;

        fetch('http://localhost:3000/employees', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                isActive: isActive,
                age: age,
                name: name,
                company: company,
                email: email
              })
        }).then(() => this.props.handleReloadData());
    }

    activeness(event, val) {
        this.setState({isActive: val});
    }
    
    render() { 
        const { isSaving } = this.state;
        if (isSaving) {
          return <p>Saving...</p>;
        }
        return (
            <form onSubmit={this.addNewUser}>
                <h3>New Employee: </h3>
                <label>
                    Name: <input type="text" name="name" onChange={this.handleChange} />
                </label>
                <br />
                <label>
                    Age: <input type="number" name="age" onChange={this.handleChange} />
                </label>
                <br />
                <label>
                    Company: <input type="text" name="company" onChange={this.handleChange} />
                </label>
                <br/>
                <label>
                    Email: <input type="text" name="email" onChange={this.handleChange} />
                </label>
                <br/>
                <label>
                    Active:<input type="radio" value="true" checked={this.state.isActive} onChange={(e)=>this.activeness(e, true)}/>
                    Inactive:<input type="radio" value="false" checked={!this.state.isActive} onChange={(e)=>this.activeness(e, false)}/>
                </label> 
                <br/> 
            <input type="submit" value="Submit" />            
        </form>          
        );
    }
}
export default NewEmployeeForm;