import React from 'react';
class Home extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            searchString : "",
            selectedEmployee : null,
            employee:this.props.employee
        }

        this.sortBy = this.sortBy.bind(this);
         this.compareByEmpId = this.compareByEmpId.bind(this);
    }

    compareByEmpId(id){
        return function (a, b) {
            if (a[id] < b[id]) return -1;
            if (a[id] > b[id]) return 1;
            return 0;  
    }
}

    sortBy(id) {
        let arrayCopy = [...this.state.employee];
        arrayCopy.sort(this.compareByEmpId(id));
        this.setState({employee: arrayCopy});
      }


    handleChange = (e) => {
        this.setState({ searchString:e.target.value });
    }

    onSelectEmployee(i){
        this.setState({selectedEmployee:i})
    }

    render(){

        var employee = this.state.employee;

       var searchString = this.state.searchString.trim().toLowerCase();

        if(searchString.length > 0){

          employee = employee.filter(function(i) {
              return i.name.toLowerCase().match( searchString);
          }); 
        }

        return (
    <div className="container container-fluid">
    <nav className="navbar navbar-light bg-light">
    <h1 className="navbar-brand">Employee Directory</h1>
    <form className="form-inline">
    <input className="form-control mr-sm-2" type="text" placeholder="Search by name" aria-label="Search" 
     value={this.state.searchString} onChange={this.handleChange} placeholder="Filter by name..." />
    </form>
    <button type="button" className="btn btn-primary"  onClick={() => this.sortBy('empId')}>Sort By Emp Id</button>
    </nav>
    <table className="table table-hover table-dark">
    <thead>
      <tr>
      <th scope="col">Emp Id</th>
      <th scope="col">Title</th>
      <th scope="col">Name</th>
      <th scope="col">Gender</th>
      <th scope="col">Age</th>
      <th scope="col">Job Title</th>
      <th scope="col">Email</th>
      <th scope="col">Contact No.</th>
      </tr>
      </thead>

      {  employee.map((i) => {
            return (
  <tbody key={i.id}>
    <tr >
    <th scope="row">{i.empId}</th>
    <td>{i.title}</td>
    <td>{i.name}</td>
    <td>{i.gender}</td>
    <td>{i.age}</td>
    <td>{i.job}</td>
    <td>{i.email}</td>
    <td>{i.phone}</td>
    </tr>
    </tbody>
            );
    })}
      </table> 
            </div>
        );
    }
}

export default Home;