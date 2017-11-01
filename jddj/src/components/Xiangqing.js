import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import '../style/xiangqing.scss'

class XiangqingUI extends Component{
	componentDidMount(){
		this.props.getData();
	}
	render(){
		return(
			<div id="xiangqing">
				<h1>
				详情
				{this.props.xq.storeName}
				</h1>
			</div>
		)	
	}
}
const mapStateToProps = (state)=>{
	return {
	xq:state.xq
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		getData:function(){
			axios.get(`/client?_djrandom=15095142970701&functionId=store%2FstoreDetailV220&body=%7B%22storeId%22%3A%22${this.match.params.storeId}%22%2C%22skuId%22%3A%22%22%2C%22activityId%22%3A%22%22%2C%22promotionType%22%3A%22%22%2C%22longitude%22%3A121.51744%2C%22latitude%22%3A38.84722%7D&appVersion=4.7.0&appName=paidaojia&platCode=H5&lng=121.51744&lat=38.84722&city_id=573`)
			.then((res)=>{
				console.log(res)
				dispatch({
					type:"XQ_GET_DATA",
					payload:res.data.result.storeInfo
				})
			})

		}
	}
}
const Xiangqing = connect(mapStateToProps,mapDispatchToProps)(XiangqingUI);

export default Xiangqing;