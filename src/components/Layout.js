import React, { Component } from 'react';
import './layout.css'
import List from './List'
import {Link } from "react-router-dom"
class Layout extends Component {
 
constructor(props){
	super(props);
	this.state={
		
	};
}
	
	
  render() {
  
    return (
     <div key={this.props.key} className="">
 		<button className='button'> <Link to="/app">ADD</Link></button>
 		<div className='flex-container'>
 		<div className='name'>NAME</div>
 		<div className='phone'>PHONE</div>
 		</div >
 		{this.props.list?
 		 		<div>	{this.props.list.map((iu)=>{
 		 			return(			<div className='list'>
 		 			 		 		 		 				<List name={iu.name} phone={iu.phone} Delete={this.props.Delete}/>
 		 			 		 		 	</div>	 )			})
 		 		 		 			
 		 		 	}	 	</div>	:null}
 		
     </div>
    );
  }
}


export default Layout;
