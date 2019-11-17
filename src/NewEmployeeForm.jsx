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
      this.addNewUser = this.addNewUser.bind(this);
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
            <div>
                <p>New Employee: </p>
                <div>
                    Name: <input type="text" name="name" onChange={this.handleChange} />
                </div>
                <div>
                    Age: <input type="number" name="age" onChange={this.handleChange} />
                </div>
                <div>
                    Company: <input type="text" name="company" onChange={this.handleChange} />
                </div>
                <div>
                    Email: <input type="text" name="email" onChange={this.handleChange} />
                </div>
                <div>
                    Active:<input type="radio" value="true" checked={this.state.isActive} onChange={(e)=>this.activeness(e, true)}/>
                    Inactive:<input type="radio" value="false" checked={!this.state.isActive} onChange={(e)=>this.activeness(e, false)}/>
                </div>           
            <button onClick={this.addNewUser}>Submit</button>
            <button onClick={this.props.cancel}>Cancel</button>
        </div>          
        );
    }
}
export default NewEmployeeForm;