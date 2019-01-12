import React, {Component} from "react"
import FormPractice from "./containers/FormPractice"
import Form from "./components/Form"

class App extends Component{
  constructor(){
    super()
  }
  render(){
    return(
        <div className="container">
            <label className="h1"><u>Form Sample - 1 </u></label>
            <Form />
            <hr/>
            <hr />
            <label className="h1"><u>Form Sample - 2</u></label>
            <FormPractice/>
        </div>
      )
  }
}

export default App
