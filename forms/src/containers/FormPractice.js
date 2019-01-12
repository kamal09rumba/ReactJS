import React from "react"
import FormPracticeComponent from "../components/FormPractice"

class FormPractice extends React.Component{
    constructor(){
        super()
        this.state = {
            firstname: "",
            lastname: "",
            age: 0,
            gender: "",
            location: "",
            dietary_restrictions: "",
            isVegan: false,
            isKosher: false,
            isLactoseFree: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(event){
        const {name, value, type, checked} = event.target
        type === "checkbox" ? this.setState({[name]: checked}) : this.setState({[name]: value})

    }
    handleSubmit(event){
        event.preventDefault()
        const {name,value} = event.target
        var diet = []
        if(this.state.isVegan){
            diet.push('Vegan')
        }
        if(this.state.isKosher){diet.push('Kosher')}
        if(this.state.isLactoseFree){diet.push('Lactose Free')}
        var output = ''
        output += 'First Name : ' + this.state.firstname
        output += '\n'
        output += 'Last Name : ' + this.state.lastname
        output += '\n'
        output += 'Age : ' + this.state.age
        output += '\n'
        output += 'Gender : ' + this.state.gender
        output += '\n'
        output += 'Location : ' + this.state.location
        output += '\n'
        output += 'Dietary Restrictions : ' + diet

        alert(output)
    }
    render(){
        return(
                <FormPracticeComponent
                    data={this.state}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    />
                /*
                    ==> Using Object Spread Operator
                    <FormPracticeComponent
                    {..this.state}
                    />
                    ==> props.firstname --> to get value

                */
            )
    }
}

export default FormPractice
