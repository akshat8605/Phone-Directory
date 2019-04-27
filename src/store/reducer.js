const initialState={
	phone:'',
	name:''
}
const reducer =(state=initialState, action)=>{
	if(action.type==='PHONE'){
		return{
			phone:action.payload
		}
	}
	if(action.type==='NAME'){
		return{
			name:action.payload
		}
	}
	return state;
};

export default reducer