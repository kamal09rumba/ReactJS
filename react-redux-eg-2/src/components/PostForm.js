import React, { Component } from "react"
import PropTypes from "prop-types"
import {createPost} from "../actions/PostAction"
import { connect } from "react-redux"

import { Input } from "antd"


class PostForm extends Component{
    constructor(){
        super()
        this.state = {
            title: '',
            body: ''
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }
    onChange(event){
        const { name, value } =  event.target
        this.setState({
            [name]: value
        })
    }
    onSubmit(event){
        event.preventDefault()
        const post  = {
            title: this.state.title,
            body: this.state.body
        }
        //call action
        this.props.createPost(post)

    }
    render(){
        const { TextArea } = Input
        return (
                <form onSubmit={this.onSubmit}>
                    <label>Title</label><br/>
                    <Input
                        type="text"
                        name="title"
                        value={this.state.title}
                        onChange={this.onChange}
                        placeholder="Title"
                    /><br/>
                    <label>Description</label><br/>
                    <TextArea
                        name="body"
                        value={this.state.body}
                        onChange={this.onChange}
                        rows={4}
                    />
                    <br/>
                    <Input type="submit" value="Submit"/>
                </form>
            )
    }
}
PostForm.propTypes = {
    createPost: PropTypes.func.isRequired
}
export default connect(null,{createPost})(PostForm)
