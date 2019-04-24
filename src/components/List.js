import React, { Component } from 'react';

export default class List extends Component {
	render() {
		const {name, phone}=this.props
		return (
		<div className='flex-container'>
 		<div className='name'>{name}</div>
 		<div className='phone'>{phone}</div>
 		<div className='DangerButton phone' onClick={()=>this.props.Delete(name)}>DELETE</div>
 		</div>
		);
	}
}
