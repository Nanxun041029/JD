import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import '../style/denglu.scss'

class DengluUI extends Component{
		constructor(){
		super();
		this.reg2 = this.reg2.bind(this)
	}
	componentDidUpdate(){
		this.reg2();
	}
	 reg2(){
            		var that = this;
                axios.post("/api/two","username="+this.refs.username.value+"&password="+this.refs.password.value)
                    .then(function(res){
                        if(res.data){
                        	alert("登录成功")
                        
                           that.props.history.push('/')             	
                        // this.$router.go('/up');
               	 	// req.session.dasb = result[0];
                	// res.cookie('username',result[0].username);
                	// res.redirect('/up');
                        
                        }else{
                            alert("用户名密码错误")
                        }
                    })
                    .catch(function(error){
                })
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
						<input className="form-control" id="inputEmail3" placeholder="请输入账号" ref="username"/>
					</div>
					<div className="er">
						<span className="mm">密码</span>
						<input type="password" className="form-control" id="inputPassword3" placeholder="请输入密码" ref="password" />
					</div>
					<button type="submit" className="btn btn-default"  onClick={this.reg2}>登录</button>
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