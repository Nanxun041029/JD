import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import '../style/wode.scss'

class WodeUI extends Component{
	componentDidMount(){

	}
	render(){
		return(
			<div id="wode">
				<h1>你好， 我是我的页面</h1>
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
const Wode = connect(mapStateToProps,mapDispatchToProps)(WodeUI);

export default Wode;