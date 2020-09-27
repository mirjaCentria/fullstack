import React from 'react';
import ReactDOM from 'react-dom';
console.log('blaaä');

const Header = (props) => {
  return (
    <div>
      <h1>
        {props.course} 
      </h1>
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>
        {props.subject} {props.ne}
      </p>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
       < Part subject = {props.line1.subject} ne = {props.line1.ne}/>
       < Part subject = {props.line2.subject} ne = {props.line2.ne}/>
       < Part subject = {props.line3.subject} ne = {props.line3.ne}/>
    </div>
  )
}

function Total(props) {
  return (
    <div>
      <p>Number of exercises {props.ne1 + props.ne2 + props.ne3}</p>
    </div>
  );
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7 
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course = {course}/>
      <Content 
        line1 = {{subject: part1, ne: exercises1}} 
        line2 = {{subject: part2, ne: exercises2}} 
        line3 = {{subject: part3, ne: exercises3}} 
      />    
      <Total ne1 = {exercises1} ne2 = {exercises2} ne3 = {exercises3} />
    </div>
  )
}

ReactDOM.render(<App />,  document.getElementById('root')
);


