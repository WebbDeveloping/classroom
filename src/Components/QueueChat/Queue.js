import React from "react";
import './Queue.scss'

class Queue extends React.Component {
  constructor(){
    super()
    this.state = {
      peopleInQueue: [
        {name: 'Sam', time: '4:32', question: 'What is google'},
        {name: 'Bill', time: '4:32', question: 'How do you set up a fullstack application'},
        {name: 'Max', time: '4:33', question: 'Please teach me PHP'},
        {name: 'Kevin', time: '4:35'}
      ],
      questionText: ''
      // yourName: 'Tom',
      // currentTime: '10:46'
    }
  }
  displayPeopelInQueue = ()=>{
    let displayed = this.state.peopleInQueue.map((ele)=>{
      return (
        <div className='name_and_time'>
          <div>
            <span>{ele.name}</span><span>{ele.time}</span>
          </div>
          <div>{ele.question}</div>
        </div>
      )
    })
    return displayed
  }
  handleRaiseHand = ()=>{
    let newQueueItem = {name: 'Tom', time: '10:48', question: this.state.questionText}
    this.setState({
      peopleInQueue: [...this.state.peopleInQueue, newQueueItem],
      questionText: ''
    })
  }
  handleTextInput = (val)=>{
    this.setState({
      questionText: val
    })
  }
  render(){
    return (
      <div className='queue_component'>
        <div>        
          {this.displayPeopelInQueue()}
        </div>
        <input value={this.state.questionText} onChange={(e)=>this.handleTextInput(e.target.value)}/>
        <button onClick={this.handleRaiseHand}>
          Raise hand
        </button>
      </div>
    )
  }
}

export default Queue;