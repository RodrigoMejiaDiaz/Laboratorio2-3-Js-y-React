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
      <Part part={props.parts[0].name}/>
      <Part part={props.parts[0].exercises}/>
      <Part part={props.parts[1].name}/>
      <Part part={props.parts[1].exercises}/>
      <Part part={props.parts[2].name}/>
      <Part part={props.parts[2].exercises}/>
    </div>
  )
}

const Part = (props) => {
  return (
    <p>{props.part}</p>
  )
}

const Total = (props) => {
  var total = props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises

  return (
    <p>El número total de ejercicios es: {total}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
         
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))