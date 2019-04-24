import React, { Component } from 'react';
import Layout from './components/Layout';
import Form from './components/Form';
import './App.css'
import { Route, Switch} from 'react-router-dom'
var list=[]
class App extends Component { 
	constructor(){
      super();
      this.state={
      	key:''
      }

       }

onSubmit(name,phone){
	var temp={}
	temp['name']=name;
	temp['phone']=phone;
	list.push(temp)
}
Delete=(name)=>{
for( var i = 0; i < list.length; i++){ 
   if ( list[i].name === name) {
     list.splice(i, 1); 
   }
   this.setState({key:Math.random()})
}
}

  render() {

    return (
    	<div className='container'>
    	<Switch>
    	 <Route path='/' exact
           render={(props)=>(<div className='Phone'>PHONE DIRECTORY</div> )}/>       
    	<Route path='/app' exact
           render={(props)=>(<div className='Phone'>ADD SUBSCRIBER</div> )}/>    
     	</Switch>
     	<Switch>
    	 <Route path='/' exact
           render={(props)=>(<Layout list={list} Delete={this.Delete} key={this.state.key}/>)}/>       
    	<Route path='/app' exact
           render={(props)=>(<Form onSubmit={this.onSubmit}/> )}/>    
     	</Switch>
     	
     </div>
    );
  }
}



export default App;
