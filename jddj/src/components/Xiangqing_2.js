import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom'
import '../style/xiangqing_2.scss'
import {Carousel} from 'antd'
import 'antd/dist/antd.css'


class Xiangqing_2UI extends Component{
	componentDidMount(){
		this.props.getData();
	}
	render(){
			var it = null;
			var ei =null;
			var eo =null;
			var ep =null;
			if(this.props.xq3.image){
				it=this.props.xq3.image.map((item,index)=>{
				      	return <div key={item+index} className="ll">
				      	 	<img src={item.big} />
				      	</div>
				      })}
			if(this.props.xq3.storeInfo){
				ei = this.props.xq3.skuPriceVO.basicPrice
			}
			if(this.props.xq3.skuPriceVO){
				eo = this.props.xq3.storeInfo.storeName
			}
			if(this.props.xq3.skuPriceVO){
				ep = this.props.xq3.skuPriceVO.mkPrice
			}
			
		return(
			<div id="xq2">
				<div className="need-left-right-margin">
				    <Carousel
				      className="my-carousel" autoplay={true} infinite
				    >
				      {it}
				    </Carousel>
				    </div>
				   <div className="e3">
				   	<h1>{this.props.xq3.name}</h1>
				   </div>

				   <div className="ei">
				   	<div>
				   		<p><span>¥</span>{ei}</p>
				   		<span className="ek">
				   			加入购物车
				   		</span>
				   	</div>
				   </div>
				    <div className="f9">
				    	<div className="fa">
				    		{eo}
				    	</div>
				    	<div className="fb">
				    		联系商家
				    	</div>
				    </div>
				    <div className="gs">
				    	<span>商品评价</span>
				    	<em>{ep}</em>
				    </div>

			</div>
		)	
	}
}
const mapStateToProps = (state)=>{
	return {
		xq3:state.xq3
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		getData:function(){
			console.log(this.match.params.Id)
			var ac = this.match.params.Id
			var orgCode = ac.substring(0,6)
			var storeId = ac.substring(6,14)
			var skuId = ac.substr(-10)
			axios.get(`/client?_djrandom=150969965662917&functionId=product%2FdetailV2_2&body=%7B%22ref%22%3A%22storeHome%2FstoreId%3A${storeId}%2ForgCode%3A${orgCode}%2FformFenxiang%3Afalse%2FLID%3A7%22%2C%22skuId%22%3A%22${skuId}%22%2C%22storeId%22%3A%22${storeId}%22%2C%22orgCode%22%3A%22${orgCode}%22%2C%22buyNum%22%3A1%7D&appVersion=4.8.0&appName=paidaojia&platCode=H5&lng=121.51744&lat=38.84722&city_id=573`)
			.then((res)=>{
				console.log(res.data.result)
				dispatch({
					type:"XQ3_LIST_GET_DATA",
					payload:res.data.result
				})
			})
		}
	}
}
const Xiangqing_2 = connect(mapStateToProps,mapDispatchToProps)(Xiangqing_2UI);

export default Xiangqing_2;