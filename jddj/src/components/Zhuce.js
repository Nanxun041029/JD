import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import '../style/zhuce.scss'

class ZhuceUI extends Component{
		constructor(){
		super();
		this.reg = this.reg.bind(this)
	}

	componentDidUpdate(){
		this.reg()
	}
		reg(){
            		var that = this;
                axios.post("/api/one","username="+this.refs.username.value+"&password="+this.refs.password.value)
                    .then(function(res){
                        if(res.data){
                        	alert("注册成功！宝贝儿")
                          
                        // this.$router.go('/up');
               	 	// req.session.dasb = result[0];
                	// res.cookie('username',result[0].username);
                	// res.redirect('/up');
                        that.props.history.push('/denglu')
                        }else{
                            alert("已有的用户名")
                        }
                    })
                    .catch(function(error){
                    // 	var that = this;
                    // that.$router.go('/up');
                })
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
						<input className="form-control" id="inputEmail3" placeholder="请输入账号" ref="username" />
					</div>
					<div className="er">
						<span className="mm">密码</span>
						<input type="password" className="form-control" id="inputPassword3" placeholder="请输入密码" ref="password"/>
					</div>
					<button type="submit" className="btn btn-default" onClick={this.reg}>注册</button>
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
const Zhuce = connect(mapStateToProps,mapDispatchToProps)(ZhuceUI);

export default Zhuce;