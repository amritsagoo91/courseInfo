import { useState } from 'react'
const Part=({part})=><p>{part.name} {part.exercises}</p>

const Header = ({name}) => {
  return (<h1>{name}</h1>)
}

const Content = ({parts}) => {
  return <>
    {
      parts.map((part)=><Part key={part.id} part={part}/>)
    }
  </>
}

const Total =({parts})=>{
  return<h4>total of {parts.reduce((sum,part)=>sum+part.exercises,0)} exercises</h4>
}


const Course = ({ course }) => {
  return <>
    <Header name={course.name} />
    <Content parts={course.parts} />
    <Total parts={course.parts}/>
  </>
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

return<>
{
  courses.map((course)=><Course course={course}/>)
}
</>


  //return <Course course={courses} />
}

export default App