const  IndexReducer = (state={},action)=>{
		switch(action.type) {
			case "INDEX_GET_DATA":
				console.log(action.payload)

				return action.payload
			default:
				return state;
		}
}

export default IndexReducer;