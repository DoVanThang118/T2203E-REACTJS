import React from "react";
import Student from './components/Student';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      students:[
        {
          name: "Student 01",
          mark: 8,
          tel: ["0912345"]
        },
        {
          name: "Student 00",
          mark: 12,
          tel: ["0923232"]
        }
      ],
      className: "T2203E",
      new_student:{
        name: "",
        mark: 0,
        tel: ""
      }
    }
    this.changeClassName = this.changeClassName.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.submitStudent = this.submitStudent.bind(this);
  }

  changeClassName(event){
    const v = event.target.value;
    this.setState({
      className: v
    })
  }

  handleInput(event){
    const input = event.target;
    const new_student = this.state.new_student;
    new_student[input.name] = input.value;
    this.setState({
      new_student: new_student
    })
  }

  submitStudent(event){
    event.preventDefault();
    const new_student = this.state.new_student;
    new_student.tel = [new_student.tel];
    const students = this.state.students;
    students.push(new_student);
    this.setState({students:students});
  }

  render(){
    const students = this.state.students;
    const className = this.state.className;
    const new_student = this.state.new_student;

    return (
      <div className="App">

        <h1> Student List: {className}</h1>
        {
          students.map((v,k)=>{
            return <Student key={k} name={v.name} mark={v.mark} tel={v.tel}/>
          })
        }
        <hr/>
        <input onChange={this.changeClassName} type='text' value={className} placeholder= 'enter class name ...' />

        <h1>Add Student</h1>
        <form method="post" onSubmit={this.submitStudent}>
          <input onChange={this.handleInput} value={new_student.name} name="name" type="text"  placeholder= 'enter name ...'/>
          <input onChange={this.handleInput} value={new_student.mark} name="mark" type="number"  placeholder= 'enter tel ...'/>
          <input onChange={this.handleInput} value={new_student.tel} name="tel" type="text"  placeholder= 'enter tel ...'/>
          <button type="submit">Submit</button>
        </form>

      </div>
    );
  }
}

export default App;
