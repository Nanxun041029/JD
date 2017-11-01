import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import '../style/dingdan.scss'
import Denglu from './Denglu'
import Zhuce from './Zhuce'
import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom'

class DingdanUI extends Component{
	componentDidMount(){

	}
	render(){
		return(
			<div id="dingdan">
					<table>
						<tbody>
							<tr>
								<td>
									<div>
										<br/>
										登录后才能查看订单哦～
										<NavLink to="/denglu">立即登录</NavLink>
									</div>
								</td>
							</tr>
						</tbody>
					</table>					</div>
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