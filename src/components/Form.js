import React, { Component } from 'react';
import './form.css'

import {Link } from "react-router-dom"
export default class Form extends Component {
	constructor(props){
	super(props);
	this.state={
		name:'',
		phone:''
	};
}
	onNameChange=(e)=>{
		this.setState({name:e.target.value})
	}
	onPhoneChange=(e)=>{
		this.setState({phone:e.target.value})
	}
	render() {
		return (
			<div >
  <form >
   	<div className='back'> <Link to="/">BACK</Link></div>
    <label >NAME</label>
    <input type="text"  placeholder="" onChange={this.onNameChange}/>

    <label >PHONE</label>
    <input type="number"  placeholder="" onChange={this.onPhoneChange}/>

    <div>Subscriber to be added:</div>
	<div>NAME: {this.state.name}</div>   
  	<div>PHONE: {this.state.phone}</div>
    <div className="submit"  onClick={()=>this.props.onSubmit(this.state.name,this.state.phone)}> <Link to="/">ADD</Link></div>
  </form>
</div>
		);
	}
}
