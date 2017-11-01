import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';

class XiangqingUI extends Component{
	componentDidMount(){

	}
	render(){
		return(
			<div id="xiangqing">
				<h1>
				详情
				</h1>
			</div>
		)	
	}
}
const mapStateToProps = (state)=>{
	return {
	list:state.list
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		getData:function(){

		}
	}
}
const Xiangqing = connect(mapStateToProps,mapDispatchToProps)(XiangqingUI);

export default Xiangqing;