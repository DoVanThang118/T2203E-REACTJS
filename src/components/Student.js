import React from "react";

export default class Student extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            age:18
        }
        this.incrementAge = this.incrementAge.bind(this);
        this.reduceAge = this.reduceAge.bind(this);
    }

    incrementAge(){
        const age =this.state.age;
        this.setState({
            age: age+1
        })
    }

    reduceAge(){
        const age =this.state.age;
        this.setState({
            age: age-1
        })
    }

    render(){
        const student_name = this.props.name;

        const mark = this.props.mark;

        const tel = this.props.tel?this.props.tel:[];   //array

        const age = this.state.age;

        return(
            <div>
                <h1>{student_name}</h1>
                <h2>Class: T2203E</h2>
                <h3>Age: <button onClick={this.reduceAge}>-</button> {age} <button onClick={this.incrementAge}>+</button></h3>
                <h2>Mark: {mark}</h2>
                <h2>Telephone List:</h2>
                <ul>
                    {
                        tel.map((t,k)=>{
                            return(<li key={k}>{t}</li>);
                        })
                    }
                </ul>
            </div>
        )
    }
}