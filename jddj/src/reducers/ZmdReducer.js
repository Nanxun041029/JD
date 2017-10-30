const  ZmdReducer = (state=[],action)=>{
		switch(action.type) {
			case "ZMD_GET_DATA":
				return action.payload;
			default:
				return state;
		}
}

export default ZmdReducer;