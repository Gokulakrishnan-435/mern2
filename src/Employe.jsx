import React, { Component } from 'react';


class Employe extends Component {
  state={
    Employess:[
      {
        emp_id:"type1",
        emp_name:"sheshi",
        emp_sal:3000,
        emp_designation:"web developer"
      },
      {
        emp_id:"type2",
        emp_name:"Dixith",
        emp_sal:30000,
        emp_designation:"Java developer"
      },
      {
        emp_id:"type3",
        emp_name:"Priyanka",
        emp_sal:4000,
        emp_designation:"Javascript developer"
      }
    ]
  }
  render() {
      let Empdata=this.state.Employess.map(emp=>{
          let {emp_id,emp_name,emp_sal,emp_designation}=emp;
          return(
              <tr key={emp_id}>
                  <td>{emp_id}</td>
                  <td>{emp_name}</td>
                  <td>{emp_sal}</td>
                  <td>{emp_designation}</td>
              </tr>
          ) 
      }
      )
    return (
      <div>
        <h1>List of employees</h1>
        <table>
            <thead> <tr>
                <th>emp id</th>
                <th>emp name</th>
                <th>emp sal</th>
                <th>emp designation</th>
            </tr></thead>
            <tbody>
                {Empdata}
            </tbody>
           
        </table>
      </div>
    );
  }
}

export default Employe;