import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import '../style/fenlei.scss'
class FenleiUI extends Component{
	componentDidMount(){

	}
	render(){
		return(
			<div id="fenlai">
				<h1>你好， 我是分类页面</h1>
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
const Fenlei = connect(mapStateToProps,mapDispatchToProps)(FenleiUI);

export default Fenlei;