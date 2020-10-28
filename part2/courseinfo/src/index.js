import React from 'react';
import ReactDOM from 'react-dom';
console.log('blaa');

const Header = ({name}) => { 
  console.log('header ', name)
  return (
    <div>
      <h2>
        {name} 
      </h2>
    </div>
  )
}

const Part = ({name, exercises}) => {
  console.log('part ne ', name, exercises)
  return (
    <div>
      <p>
        {name} {exercises}
      </p>
    </div>
  )
}

const Content = ({parts}) => {
  console.log('content ', parts)
  return (
    <div>
        {parts.map(part => 
          <Part key={part.id} 
            name = {part.name} 
            exercises = {part.ecercises} />
        )}
    </div>
  )
}

const Course = ({course}) => {
  console.log('course ', course)
  console.log('course ', course.name)

  return (
    <div>
       < Header name = {course.name} />
       < Content parts = {course.parts}/>
       < Total parts = {course.parts}  />
    </div>
  )
}
const Total  = ({parts}) => {
    const totalE = parts.reduce((totalE, part) => totalE + part.exercises, 0);
  console.log('Total ', totalE, parts)
  return (
    <div>
     <p>Total of {totalE} exercises</p>
    </div>
  )
}

const App = () => {
    const courses = [
      {
        name: 'Half Stack application development',
        id: 1,
        parts: [
          {
            name: 'Fundamentals of React',
            exercises: 10,
            id: 1
          },
          {
            name: 'Using props to pass data',
            exercises: 7,
            id: 2
          },
          {
            name: 'State of a component',
            exercises: 14,
            id: 3
          },
          {
            name: 'Redux',
            exercises: 11,
            id: 4
          }
        ]
      }, 
      {
        name: 'Node.js',
        id: 2,
        parts: [
          {
            name: 'Routing',
            exercises: 3,
            id: 1
          },
          {
            name: 'Middlewares',
            exercises: 7,
            id: 2
          }
        ]
      }
    ]

  return (  
    <div>
      <h1>Web development curriculum</h1>
      {courses.map(course => 
        <Course key={course.id} 
          course = {course} 
        />
      )}
    </div>
  )
}

ReactDOM.render(<App />,  document.getElementById('root')
);