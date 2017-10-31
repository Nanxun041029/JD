const  Lunbo = (state=[],action)=>{
		switch(action.type) {
			case "LB_GET_DATA":
				return action.payload;
			default:
				return state;
		}
}

export default Lunbo;