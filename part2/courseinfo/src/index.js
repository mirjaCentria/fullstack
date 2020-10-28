import React from 'react';
import ReactDOM from 'react-dom';
console.log('blaa');

const Header = ({name}) => { 
  console.log('header ', name)
  return (
    <div>
      <h1>
        {name} 
      </h1>
    </div>
  )
}

const Part = ({name, ne}) => {
  console.log('part ne ', ne, name)
  return (
    <div>
      <p>
        {name} {ne}
      </p>
    </div>
  )
}

const Content = ({parts}) => {
  console.log('content ', parts)
  return (
    <div>
        {parts.map(part => 
          <Part key={part.id} name = {part.name} ne = {part.ne} />
        )}
      </div>
  )
}

const Course = ({course}) => {
  console.log('course ', course)
  return (
    <div>
       < Header name = {course.name} />
       < Content parts = {course.parts}/>
    </div>
  )
}


const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React', 
        ne: 10,
        id: 1,
      },
      {
        name: 'Using props to pass data',
        ne: 7 ,
        id: 2,
      },
      {
        name: 'State of a component',
        ne: 14,
        id: 3,
      },
    ]
  }

  return (
    <div>
      <Header name = {course.name}/>
      <Content 
        parts = {course.parts}
      />    
     </div>
  )
}

ReactDOM.render(<App />,  document.getElementById('root')
);


