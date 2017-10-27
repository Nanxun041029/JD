import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';

class DingdanUI extends Component{
	componentDidMount(){

	}
	render(){
		return(
			<div id="fenlai">
				<h1>你好， 我是订单页面</h1>
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
const Dingdan = connect(mapStateToProps,mapDispatchToProps)(DingdanUI);

export default Dingdan;