import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import '../style/zhuce.scss'

class ZhuceUI extends Component{
	componentDidMount(){

	}
	render(){
		return(
			<div id="zhuce">
				<div className="heade">
					<span className="txt-header">京东注册</span>
				</div>

				<div className="zhuce1">
					<div className="yi">
						<span className="zh">账号</span>
						<input className="form-control" id="inputEmail3" placeholder="请输入账号" />
					</div>
					<div className="er">
						<span className="mm">密码</span>
						<input type="password" className="form-control" id="inputPassword3" placeholder="请输入密码" />
					</div>
					<button type="submit" className="btn btn-default" >注册</button>
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
					axios.post("/api/one","username="+this.username+"&password="+this.password)
			.then((res)=>{

			})
		}
	}
}
const Zhuce = connect(mapStateToProps,mapDispatchToProps)(ZhuceUI);

export default Zhuce;