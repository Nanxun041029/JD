import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import '../style/wode.scss'
import Denglu from './Denglu'
import Zhuce from './Zhuce'
import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom'

class WodeUI extends Component{
			constructor(){
		super();
		this.tui = this.tui.bind(this)
	}
	componentDidMount(){
		this.props.gotData();
		var ck = document.cookie;
		var userid = document.cookie.substring(68);
		var p = document.querySelector(".login");
		var t = document.querySelector(".tui")
		if(userid){
			p.innerText = userid;
			t.style.display="block";
		}

	}
	tui(){
	var that = this; 
    var keys=document.cookie.match(/[^ =;]+(?=\=)/g); 
    if (keys) { 
        for (var i = keys.length; i--;) 
            document.cookie=keys[i]+'=0;expires=' + new Date( 0).toUTCString()
            alert("退出成功") 
       		 that.props.history.push('/')
        } 
	}
	render(){
		return(
			<div id="wode">
				 <div className="st">
				 	<i className="logo"></i>
				 	
				 	<span className="login">
						<NavLink to="/denglu">
				 			登录
				 		</NavLink>	
				 	/
				 	<NavLink to="/zhuce">
				 		注册
				 	</NavLink>
				 	</span>
				 	<div className="tui" onClick={this.tui}>退出</div>
				 	<div className="um">
				 		<label>icon</label>
				 		<label>icon</label>
				 	</div>
				 </div>
				 <div className="t0">
				 	<ul>
				 		<li>
				 			<i></i>
				 			<b>我的钱包</b>
				 		</li>
				 		<li>
				 			<i>--</i>
				 			<b>优惠卷</b>
				 		</li>
				 		<li>
				 			<i>--</i>
				 			<b>白条</b>
				 		</li>
				 	</ul>
				 </div>
				 <div className="b2">
				 </div>

				 <div className="t5">
				 		{
				 		this.props.login.map((it,index)=>{

				 			return <a href=""key={it+index} >
				 				<img src={it.img}/>
				 				{it.name}
				 			</a>
				 		})
				 		}
				 </div>
			</div>
		)	
	}
}
const mapStateToProps = (state)=>{
	return {
	login:state.login
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		gotData:function(){
			axios.get('/client?_djrandom=15094174795702&functionId=mine%2FgetModuleInfo&body=%7B%22fromSource%22%3A2%2C%22channelType%22%3A8%2C%22cityId%22%3A573%2C%22platform%22%3A3%2C%22longtitude%22%3A121.51744%2C%22latitude%22%3A38.84722%7D&appVersion=4.7.0&appName=paidaojia&platCode=H5')
			.then((res)=>{
				dispatch({
					type:"LOGIN_GET_DATA",
					payload:res.data.result.userModuleList
				})
			})
		}
	}
}
const Wode = connect(mapStateToProps,mapDispatchToProps)(WodeUI);

export default Wode;