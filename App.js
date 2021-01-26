import React from 'react'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state= {
      notes: [],
      note: '',
      noteText: '',
      date: '',
      isDate: false
    }
  }
  setDate = (e) => {
    this.setState({date: e.target.value}, () => {
      if (this.state.date) {
        this.setState({isDate: true})
        let noteText = this.state.notes.filter(item => item.date === this.state.date)
        if (noteText.length > 0) {
          this.setState({noteText: noteText[0].note})
        }
       
      } else {
        this.setState({isDate: false})
      }
    })
    
  }
  setData = e =>{
    let {value} = e.target
    let notes = []
    this.setState({
      note: value
    }, () => {
      let note = {date: this.state.date, note: this.state.note}
      notes = [...this.state.notes, note]
      this.setState({notes})
    })
   
  }
  render() {
    return (
      <div>
        <input type="date" onChange={this.setDate}></input>
        {this.state.isDate 
        ? 
          <input type="text" onBlur={this.setData}></input>
        :
        null}
        {this.state.noteText}
      </div>
    )
  }
}

export default App;
