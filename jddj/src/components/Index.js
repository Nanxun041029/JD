import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import '../style/index.css'
class IndexUI extends Component{
	componentDidMount(){
		this.props.getData();
	}
	render(){
		return(
			<div id="zhuye">
			<h1>你好， 我是主页</h1>
			<ul>
				{
				this.props.list.map((item,index)=>{
					return <li key={item.id}>
								{item.name}
							</li>
				})
				}
			</ul>
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
			axios.get('/api/getdata')
			.then((res)=>{
				dispatch({
					type:"INDEX_GET_DATA",
					payload:res.data
				})
			})
		}
	}
}
const Index = connect(mapStateToProps,mapDispatchToProps)(IndexUI);

export default Index;