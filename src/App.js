import React, { useState } from 'react';
import './App.css';

function App() {

  const[todo,setTodo] = useState('');
  const[todoList,setTodoList] = useState([]);

  var today = new Date();
  var day = today.getDay();
  var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];

  const inputHandler = (e) =>{
    setTodo(e.target.value);
  }

  const addBtnHandler = () =>{
    setTodoList([...todoList,{id: Date.now(), todoText:todo, isComplete:false}]);
    setTodo('');
  }

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Let's make your {daylist[day]} list</h2>
      </div>
      <div className="input">
        <input  type="text" placeholder="Add item..." value={todo} onChange={inputHandler}/>
        <i className="fas fa-plus" onClick={addBtnHandler}></i>
      </div>
      <div className="todos">
        {
          todoList.map((eachTodo)=>{
            return(
              <div className="todo" key={eachTodo.id}>
               <div className="left">
                 <input 
                    type="checkbox" 
                    name="" 
                    id=""
                    value={eachTodo.isComplete}
                    onChange={(e)=>{
                      console.log(eachTodo);
                      setTodoList(todoList.filter((obj)=>{
                        if(obj.id===eachTodo.id){
                           obj.isComplete = e.target.checked
                        }
                        return obj;
                      }));
                    }} 
                  />
                  { eachTodo.isComplete
                    ? <p style={{textDecoration: 'line-through'}}>{eachTodo.todoText}</p>
                    :<p>{eachTodo.todoText}</p>
                  }
               </div>
               <div className="right">
                 <i className="fas fa-times"
                    onClick={()=>{
                      setTodoList(todoList.filter((obj)=>{return(obj.id !== eachTodo.id)}))
                    }}
                 />
               </div>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
