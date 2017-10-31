import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import '../style/dingdan.scss'

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
										<a href="">立即登录</a>
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