import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
    return (
      <h1>{props.parts}</h1>
    )
}

const Content = (props) => {
  const parts = props.parts
  const listParts =  parts.map((part) =>
  <div>
    <Part part={part.name} />
    <Part part={part.exercises} />
  </div>
    )

  return (
    <div>
      {listParts}
    </div>
  )
}

const Part = (props) => {
  return (
    <p>{props.part}</p>
  )
}

const Total = (props) => {
  var total = 0
  props.parts.forEach((part) => {
    total += part.exercises
  })

  return (
    <p>El número total de ejercicios es: {total}</p>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
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
  }

  return (
    <div>
      <Header parts={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
         
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))