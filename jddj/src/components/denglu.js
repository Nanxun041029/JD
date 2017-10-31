import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import '../style/denglu.scss'

class DengluUI extends Component{
	componentDidMount(){

	}
	render(){
		return(
			<div id="denglu">
				<div className="heade">
					<span className="txt-header">京东登录</span>
				</div>
				<div className="denglu1">
					<div className="yi">
						<span className="zh">账号</span>
						<input className="form-control" id="inputEmail3" placeholder="请输入账号"/>
					</div>
					<div className="er">
						<span className="mm">密码</span>
						<input type="password" className="form-control" id="inputPassword3" placeholder="请输入密码" />
					</div>
					<button type="submit" className="btn btn-default" >登录</button>
					<div className="xiamian">
					</div>
				</div>
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
const Denglu = connect(mapStateToProps,mapDispatchToProps)(DengluUI);

export default Denglu;