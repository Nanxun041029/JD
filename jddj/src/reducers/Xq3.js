const  Xq3 = (state={},action)=>{
		switch(action.type) {
			case "XQ3_LIST_GET_DATA":
				return action.payload;
			default:
				return state;
		}
}

export default Xq3;