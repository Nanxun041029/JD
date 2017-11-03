import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom'

class Xiangqing_2UI extends Component{
	componentDidMount(){

	}
	render(){
		return(
			<div id="Xiangqing_2">
				<h1>{this.props.catId}</h1>		
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
const Xiangqing_2 = connect(mapStateToProps,mapDispatchToProps)(Xiangqing_2UI);

export default Xiangqing_2;