import './App.css';
import UserName from './UserName.js';
import Welcome from './Welcome.js';
import Todo from './Todo.js'
import React from 'react';



class App extends React.Component{
  state = {
    username: '',
    todoList: []
  };
  changeUser (event) {
    console.log(event)
    event.preventDefault()
    this.setState({username: event.target[0].value})
  }
  changeToDoList (event) {
    event.preventDefault()
    this.setState({todoList: [...this.state.todoList, event.target[0].value]})
  }
  removeToDoItem (event) {
    console.log(event.target.className)
    let tmp = this.state.todoList.filter( item => item !== event.target.className)
    this.setState({todoList: tmp})
    alert (`Deleted ${event.target.className} 😇`)
  }
  finishAll(){
    this.setState({todoList: []})
    const myImage = new Image();
    myImage.src = "https://media4.giphy.com/media/jJQC2puVZpTMO4vUs0/giphy.gif?cid=ecf05e47ujm45g30zvzwm1h6lfh5ex8fowjmk6q1cinxvbo7&rid=giphy.gif&ct=g";
    let main = document.getElementById("main")
    main.appendChild(myImage);
    setTimeout(()=>{myImage.remove()}, 3000)
  }

  render() {
    return (
      <div id="main">
        <Welcome username={this.state.username}/>
        <UserName newUser={this.changeUser.bind(this)}/>
        <Todo addTodo={this.changeToDoList.bind(this)}/>
        {this.state.todoList.map(item => {
         return <div className="list">{item}<button className={item} onClick={this.removeToDoItem.bind(this)}>Complete! 🏄🏼</button></div>;
        })}
        <button onClick={this.finishAll.bind(this)}>Finish All! 🎯</button>
      </div>
  );
  }
}

export default App;

// React.useEffect(()=>{
//   localStorage.setItem("username", this.state.username)
//   }, [username])
