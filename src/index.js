import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Counter from './task2';
import Counter1 from './task1';
import Student from './task3';
import { students } from './students';

const Hello = () => {
  return (
    <div>
      <h2>Hello</h2>
      <h4>Nice to meet you...</h4>
    </div>
  )
}

function Details() {
  return (
    <>
      <h1>Our Students</h1><hr></hr>
      <h2>Roll --- Name --- Marks</h2>
      <div>
        {students.map((stu) => {
          return <Student {...stu} key={stu.id} />;
        })}
      </div>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Hello/>);
root.render(<App/>);
root.render(<Counter/>);
root.render(<Counter1/>);
root.render(<Details/>);
export default Hello;
