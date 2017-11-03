const  Xq = (state={},action)=>{
		switch(action.type) {
			case "XQ_GET_DATA":
				return action.payload;
			default:
				return state;
		}
}

export default Xq;