import React from "react"


const FormPracticeComponent = (props) => {
    return(
            <div>
                <form onSubmit={props.handleSubmit} className="form-group">
                    <label>First Name:</label>
                        <input type="text"
                                name="firstname"
                                placeholder="First Name"
                                value={props.data.firstname}
                                onChange={props.handleChange}
                                className="form-control"
                        />
                    <br/>
                    <label>Last Name:</label>
                        <input
                            type="text"
                            name="lastname"
                            placeholder="Last Name"
                            value={props.data.lastname}
                            onChange={props.handleChange}
                            className="form-control"
                            />
                    <br/>
                    <label>Age:</label>
                        <input
                            type="number"
                            name="age"
                            placeholder="Age"
                            value={props.data.age}
                            onChange={props.handleChange}
                            className="form-control"
                            />
                    <br/>
                    <label>Gender:</label>
                        <input
                            type="radio"
                            name="gender"
                            value="male"
                            checked={props.data.gender === 'male'}
                            onChange={props.handleChange}
                            className="form-control"
                        />Male
                        <input
                            type="radio"
                            name="gender"
                            value="female"
                            checked={props.data.gender === 'female'}
                            onChange={props.handleChange}
                            className="form-control"
                        />Female
                    <br/>
                    <label>Travel Destination: </label>
                    <select
                    name="location"
                    value={props.data.location}
                    onChange={props.handleChange}
                    className="form-control"
                    >
                        <option value="">----Please Select A Location----</option>
                        <option value="Kathmandu">Kathmandu</option>
                        <option value="Pokhara">Pokhara</option>
                        <option value="Dharan">Dharan</option>
                    </select>
                    <br/>
                    <label>Dietary Restrictions(Please select any):</label>
                    <br/>
                    <input
                        type="checkbox"
                        name="isVegan"
                        checked={props.data.isVegan}
                        onChange={props.handleChange}
                        className="form-control"
                    />Vegan?<br/>
                    <input
                        type="checkbox"
                        name="isKosher"
                        checked={props.data.isKosher}
                        onChange={props.handleChange}
                        className="form-control"
                    />Kosher?<br/>
                    <input
                        type="checkbox"
                        name="isLactoseFree"
                        checked={props.data.isLactoseFree}
                        onChange={props.handleChange}
                        className="form-control"
                    />Lactose free?<br/>
                    <br/>
                    {/* <button>Submit</button> */}
                    <input type="submit" value="submit" className="btn btn-primary"/>

                </form>
                <hr/>
            <div>
                <h1><u>Entered Information:-</u></h1>
                <label>Name: {props.data.firstname} {props.data.lastname}</label><br/>
                <label>Age: {props.data.age}</label><br/>
                <label>Gender: {props.data.gender}</label><br/>
                <label>Destination: {props.data.location}</label><br/>
                <label>Vegan?: {props.data.isVegan ? "Yes" : "No"}</label><br/>
                <label>Kosher?: {props.data.isKosher ? "Yes" : "No"}</label><br/>
                <label>Lactose Free?: {props.data.isLactoseFree ? "Yes" : "No"}</label><br/>
            </div>
            </div>
        )
}


export default FormPracticeComponent
