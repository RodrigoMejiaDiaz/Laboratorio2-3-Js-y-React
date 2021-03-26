import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
    return (
      <h1>{props.course}</h1>
    )
}

const Content = (props) => {
  return (
    <div>
      <Part part={props.parts1.name}/>
      <Part part={props.parts1.exercises}/>
      <Part part={props.parts2.name}/>
      <Part part={props.parts2.exercises}/>
      <Part part={props.parts3.name}/>
      <Part part={props.parts3.exercises}/>
    </div>
  )
}

const Part = (props) => {
  return (
    <p>{props.part}</p>
  )
}

const Total = (props) => {
  var total = props.parts1.exercises + props.parts2.exercises + props.parts3.exercises

  return (
    <p>El número total de ejercicios es: {total}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course} />
      <Content parts1={part1} parts2={part2} parts3={part3}/>
      <Total parts1={part1} parts2={part2} parts3={part3}/>
         
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))