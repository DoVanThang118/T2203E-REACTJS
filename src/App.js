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
      className: "T2203E"
    }
    this.changeClassName = this.changeClassName.bind(this);
  }

  changeClassName(event){
    const v = event.target.value;
    this.setState({
      className: v
    })
  }

  render(){
    const students = this.state.students;
    const className = this.state.className;
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
      </div>
  );
  }
}

export default App;
