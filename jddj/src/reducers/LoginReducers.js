const  LoginReducers = (state=[],action)=>{
		switch(action.type) {
			case "LOGIN_GET_DATA":
			console.log(action.payload)
				return action.payload;
			default:
				return state;
		}
}

export default LoginReducers;