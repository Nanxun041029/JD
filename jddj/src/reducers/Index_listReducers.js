const  Index_listReducers = (state=[],action)=>{
		switch(action.type) {
			case "INDEX_LIST_GET_DATA":
				return action.payload;
			default:
				return state;
		}
}

export default Index_listReducers;