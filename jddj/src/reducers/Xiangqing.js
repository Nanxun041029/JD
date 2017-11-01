const  Xiangqing = (state={},action)=>{
		switch(action.type) {
			case "XQ_GET_DATA":
			console.log(action.payload)
				return action.payload;
			default:
				return state;
		}
}

export default Xiangqing;