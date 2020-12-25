import React from "react";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      searchString: "",
      selectedEmployee: null,
      employee: [
        {
          id: 1,
          empId: 1001,
          title: "Mr",
          name: "anuj kumar",
          gender: "male",
          age: 20,
          job: "software engineer",
          email: "anuj@gmail.com",
          phone: "555555",
        },

        {
          id: 2,
          empId: 1023,
          title: "Mrs",
          name: "surabhi gupta",
          gender: "female",
          age: 22,
          job: "backend engineer",
          email: "surabhi@gmail.com",
          phone: "555555",
        },

        {
          id: 3,
          empId: 1027,
          title: "Mr",
          name: "abhishek chaudhary",
          gender: "male",
          age: 20,
          job: "react developer",
          email: "abhishek@gmail.com",
          phone: "9898989898",
        },

        {
          id: 4,
          empId: 1035,
          title: "Mr",
          name: "abhi kumar",
          gender: "male",
          age: 20,
          job: "software engineer",
          email: "abhishek@gmail.com",
          phone: "9898989898",
        },

        {
          id: 5,
          empId: 1029,
          title: "Mr",
          name: "navik kumar",
          gender: "male",
          age: 20,
          job: "software engineer",
          email: "navik@gmail.com",
          phone: "9898989898",
        },

        {
          id: 6,
          empId: 1039,
          title: "Mr",
          name: "naveen gupta",
          gender: "male",
          age: 20,
          job: "android developer",
          email: "naveen@gmail.com",
          phone: "9898989898",
        },

        {
          id: 7,
          empId: 1000,
          title: "Mr",
          name: "abhi singh",
          gender: "male",
          age: 20,
          job: "software engineer",
          email: "abhi@gmail.com",
          phone: "9898989898",
        },

        {
          id: 8,
          empId: 1045,
          title: "Mrs",
          name: "ankita singh",
          gender: "female",
          age: 19,
          job: "data engineer",
          email: "anku@gmail.com",
          phone: "9898989898",
        },

        {
          id: 9,
          empId: 1049,
          title: "Mr",
          name: "pranjal dutt",
          gender: "male",
          age: 17,
          job: "software engineer",
          email: "pr@gmail.com",
          phone: "9898989898",
        },

        {
          id: 10,
          empId: 1019,
          title: "Mr",
          name: "anuu malik",
          gender: "male",
          age: 20,
          job: "web developer",
          email: "anuu@gmail.com",
          phone: "9898989898",
        },

        {
          id: 11,
          empId: 1004,
          title: "Mrs",
          name: "priya",
          gender: "female",
          age: 18,
          job: "software engineer",
          email: "p@gmail.com",
          phone: "9898989898",
        },
      ],
    };

    this.sortBy = this.sortBy.bind(this);
    this.compareByEmpId = this.compareByEmpId.bind(this);
  }
  compareByEmpId(id) {
    return function (a, b) {
      if (a[id] < b[id]) return -1;
      if (a[id] > b[id]) return 1;
      return 0;
    };
  }

  sortBy(id) {
    let arrayCopy = [...this.state.employee];
    arrayCopy.sort(this.compareByEmpId(id));
    this.setState({ employee: arrayCopy });
  }

  handleChange = (e) => {
    this.setState({ searchString: e.target.value });
  };

  onSelectEmployee(i) {
    this.setState({ selectedEmployee: i });
  }

  render() {
    var employee = this.state.employee;

    var searchString = this.state.searchString.trim().toLowerCase();

    if (searchString.length > 0) {
      employee = employee.filter(function (i) {
        return i.name.toLowerCase().match(searchString);
      });
    }

    return (
      <div className="container container-fluid">
        <nav className="navbar navbar-light bg-light">
          <h1 className="navbar-brand">Employee Directory</h1>
          <form className="form-inline">
            <input
              className="form-control mr-sm-2"
              type="text"
              aria-label="Search"
              value={this.state.searchString}
              onChange={this.handleChange}
              placeholder="Filter by name..."
            />
          </form>
          <button type="button" className="btn btn-primary" onClick={() => this.sortBy("empId")}>
            Sort By Emp Id
          </button>
        </nav>
        <table className="table table-hover ">
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

          {employee.map((i) => {
            return (
              <tbody key={i.id}>
                <tr>
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
export default App;
