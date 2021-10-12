import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';

// useState
// function computeInitialCounter(){
//   console.log('Some calculations')
//   return Math.trunc(Math.random()*20)
// }

function App() {
// const [count, setCount]= useState(() =>{
//   return computeInitialCounter()
// })
  
// const[state, setState] = useState({
//   title: 'Лічильник',
//   date: Date.now()
// })


// function increment()
// {
//   // setCount(count + 1)
// // функція приймає попередній стан
// setCount((prevCounter) => {
//   return prevCounter + 1
// })

// }
// function decrement()
// {
// setCount(count - 1)
// }

// function updateTitle(){
//   setState(prev =>{
//     return{
//       ...prev,
//       title:'новий стан'
//     }
//   })
// }

//useEffect
const[type, setType] = useState('users')
const[data, setData] = useState([])
const[pos, setPos] = useState({
  x:0, y:0
})
// виводить список користувачів і дані про них
useEffect(() => {
  fetch(`https://jsonplaceholder.typicode.com/${type}`)
    .then(response => response.json())
    .then(json => setData(json))
  }, [type])

// показує координати мишки
  useEffect(() => {
   window.addEventListener('mousemove', event =>{
     setPos({
       x: event.clientX,
       y:event.clientY
     })
   })
    }, [])

  return (
    <div>
       {/* useEffect */}
       <h1>Ресурс: {type}</h1>
          <button onClick={() => setType('users')}>Користувачі</button>
          <button onClick={() => setType('todos')}>Todos</button>
          <button onClick={() => setType('posts')}>Пости</button>

       {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
       <pre>{JSON.stringify(pos, null, 2)}</pre>
       {/* useState */}
     {/* <h1>Лічильник: {count}</h1>
     <button onClick={increment} className="btn btn-success">Додати</button>
     <button onClick={decrement} className="btn btn-danger">Відняти</button>
     <button onClick={updateTitle} className="btn btn-default">Змінити назву</button>
     <pre>{JSON.stringify(state, null, 2)}</pre> */}
    
    </div>
  );
}

export default App;
