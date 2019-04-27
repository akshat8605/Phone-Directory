import React, { Component } from 'react';
import './form.css'
import {connect}  from 'react-redux'
import {Link } from "react-router-dom"
 class Form extends Component {
	
	render() {
		return (
			<div >
  <form >
   	<div className='back'> <Link to="/">BACK</Link></div>
    <label >NAME</label>
    <input type="text"  placeholder="" onChange={this.props.onName}/>

    <label >PHONE</label>
    <input type="number"  placeholder="" onChange={this.props.onPhone}/>

    <div>Subscriber to be added:</div>
	<div>NAME: {this.props.name}</div>   
  	<div>PHONE: {this.props.phone}</div>
    <div className="submit"  onClick={()=>this.props.onSubmit(this.state.name,this.state.phone)}> <Link to="/">ADD</Link></div>
  </form>
</div>
		);
	}
}
const mapStateToProps=state=>{
  return{
    phone:state.phone,
    name:state.name
  };
}

const mapDispatchToProps=(event,dispatch)=>{
	return {
			onPhone:(event)=>dispatch({type:'PHONE',payload:event.target.value}),
			onName:(event)=>dispatch({type:'NAME',payload:event.target.value})
	}
}


export default connect(mapStateToProps,mapDispatchToProps)(Form);