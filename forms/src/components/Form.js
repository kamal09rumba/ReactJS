import React, {Component} from "react"

class Form extends Component{
    constructor(){
        super()
        this.state = {
            firstname : "",
            lastname : "",
            isFriendly: true,
            gender: "",
            favcolor:""
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(event){
        const {name,value,type,checked} = event.target
        type === "checkbox" ? this.setState({[name]:checked}) : this.setState({[name]: value})

    }
    handleSubmit(event){
        event.preventDefault()
    }
    render(){
        return(
            <div className="row justify-content-md-center well">
            <form className="form-group" onSubmit={this.handleSubmit}>
                <input
                    name="firstname"
                    type="text"
                    placeholder="First Name"
                    value = {this.state.firstname}
                    onChange={this.handleChange}
                    className="form-control"
                />
                <br/>
                <input
                    name="lastname"
                    type="text"
                    placeholder="Last Name"
                    value={this.state.lastname}
                    onChange={this.handleChange}
                    className="form-control"
                />
                <h1>{this.state.firstname} {this.state.lastname}</h1>
                <div className="form-group">
                    <label>Textarea</label><br/>
                    <textarea
                    value={"some default value"}
                    onChange={this.handleChange}
                    class="form-control"
                    />
                </div>
                <br/>
                <label>
                <input
                    type="checkbox"
                    name="isFriendly"
                    checked={this.state.isFriendly}
                    onChange={this.handleChange}
                />
                Check Box
                </label>
                <br/>
                <label>
                    <input
                        type="radio"
                        name="gender"
                        value="male"
                        checked={this.state.gender === 'male'}
                        onChange={this.handleChange}
                    />
                   Male
                </label>
                <br/>
                <label>
                <input
                    type="radio"
                    name="gender"
                    value="female"
                    checked={this.state.gender === 'female'}
                    onChange={this.handleChange}
                />
                Female
                </label>
                <h1>You are {this.state.gender}</h1>

                <label>Favorite Color:</label>
                <select
                    value={this.state.favcolor}
                    onChange={this.handleChange}
                    name="favcolor"
                >
                    <option value="Red">Red</option>
                    <option value="Green">Green</option>
                    <option value="Blue">Blue</option>
                </select>
                <h1>Your Favorite Color is {this.state.favcolor}</h1>
                <input type="submit" class="btn btn-primary"/>
            </form>
            </div>
            )
    }
}

export default Form
