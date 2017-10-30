const  Lunbo1 = (state=[],action)=>{
		switch(action.type) {
			case "LB1_GET_DATA":
				return action.payload;
			default:
				return state;
		}
}

export default Lunbo1;