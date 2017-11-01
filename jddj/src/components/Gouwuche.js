import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import '../style/gouwuche.scss'
import Denglu from './Denglu'
import Zhuce from './Zhuce'
import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom'

class GouwucheUI extends Component{
	componentDidMount(){

	}
	render(){
		return(
			<div id="gouwuche">
					<table>
						<tbody>
							<tr>
								<td>
									<div>
										购物车空空如也哦～
										<br/>
										登录后将同步购物车中商品
										<NavLink to="denglu">立即登录</NavLink>
									</div>
								</td>
							</tr>
						</tbody>
					</table>			
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