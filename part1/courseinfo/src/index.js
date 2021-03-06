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
       < Part name = {parts[0].name} ne = {parts[0].ne}/>
       < Part name = {parts[1].name} ne = {parts[1].ne}/>
       < Part name = {parts[2].name} ne = {parts[2].ne}/>
    </div>
  )
}

function Total(props) {
  console.log('Total props', props)
  const ne1 = props.parts[0].ne  
  const ne2 = props.parts[1].ne
  const ne3 = props.parts[2].ne
  const totalE = ne1 + ne2 + ne3
  console.log('Total ne1', ne1)
  console.log('TotalE ', totalE)
  return (
    <div>
      <p>Number of exercises {totalE} </p>
    </div>
  );
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React', 
        ne: 10,
      },
      {
        name: 'Using props to pass data',
        ne: 7 ,
      },
      {
        name: 'State of a component',
        ne: 14,
      },
    ]
  }

  return (
    <div>
      <Header name = {course.name}/>
      <Content 
        parts = {course.parts}
      />    
      <Total         
        parts = {course.parts}
      />

    </div>
  )
}

ReactDOM.render(<App />,  document.getElementById('root')
);


