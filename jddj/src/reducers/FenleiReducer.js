const  FenleiReducer = (state={},action)=>{
		switch(action.type) {
			case "FENLEI_GET_DATA":
			console.log(action.payload)
				return action.payload;
			default:
				return state;
		}
}

export default FenleiReducer;