import React from 'react';
import ReactDOM from 'react-dom';
console.log('blaa');

const Header = (props) => {
  console.log('header props', props)
  return (
    <div>
      <h1>
        {props.course} 
      </h1>
    </div>
  )
}

const Part = (props) => {
  console.log('part props ', props)
  const name = props.name
  const ne = props.ne
  console.log('part ne ', ne)
  return (
    <div>
      <p>
        {name} {ne}
      </p>
    </div>
  )
}

const Content = (props) => {
  console.log('Content props ', props)
  const part1 = props.part1
  console.log('Content props part1 ', props.part1)
  const part2 = props.part2
  const part3 = props.part3
  return (
    <div>
       < Part name = {part1.name} ne = {part1.ne}/>
       < Part name = {part2.name} ne = {part2.ne}/>
       < Part name = {part3.name} ne = {part3.ne}/>
    </div>
  )
}

function Total(props) {
  console.log('Total props', props)
  const ne1 = props.part1.ne  
  const ne2 = props.part2.ne
  const ne3 = props.part3.ne
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
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React', 
    ne: 10,
  }
  const part2 = {
    name: 'Using props to pass data',
    ne: 7 ,
  }
  const part3 = {
    name: 'State of a component',
    ne: 14,
  }

  return (
    <div>
      <Header course = {course}/>
      <Content 
      part1 = {part1}
      part2 = {part2}
      part3 = {part3}

      />    
      <Total         
      part1 = {part1}
      part2 = {part2}
      part3 = {part3}
      />
    </div>
  )
}

ReactDOM.render(<App />,  document.getElementById('root')
);


