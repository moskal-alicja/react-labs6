import React from 'react'

class ListEmployees extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        hits: [],
        isLoading: false,
      };
    }

    componentDidMount() {
      this.setState({ isLoading: true });

      fetch('http://localhost:3000/employees')
        .then(response => response.json())
        .then(data => this.setState({ hits: data, isLoading: false }));
    }
    
    render() {
        const { hits, isLoading } = this.state;
        if (isLoading) {
          return <p>Loading ...</p>;
        }
        return (
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Company</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {hits.map(hit =>
                    <tr key={hit._id}>
                        <td>{hit.name}</td>
                        <td>{hit.age}</td>
                        <td>{hit.company}</td>
                        <td>{hit.email}</td>
                    </tr>)}
                </tbody>                               
            </table>        
        );
    }
}
export default ListEmployees;