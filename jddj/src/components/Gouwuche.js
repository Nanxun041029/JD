import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import '../style/gouwuche.scss'

class GouwucheUI extends Component{
	componentDidMount(){

	}
	render(){
		return(
			<div id="gouwuche">
				<h1>你好， 我是购物车页面</h1>
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
const Gouwuche = connect(mapStateToProps,mapDispatchToProps)(GouwucheUI);

export default Gouwuche;