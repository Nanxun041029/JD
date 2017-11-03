import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import '../style/xiangqing.scss'
import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom'
import Xiangqing2 from './Xiangqing_2'

class XiangqingUI extends Component{
	constructor(){
		super();
		this.state = {
			list11:{},
			list111:[]
		}
		this.liebiaoTo = this.liebiaoTo.bind(this)
	}
	liebiaoTo(){
	 		 		var uls = document.querySelector('.ulbig')
	 		 			uls.onclick=function(event){
	 		 				var event = event||window.event;
	 		 				var target = event.target||event.srcElement;
	 		 				
	 		 				if(target.className==="a1w"){
	 		 					var lis = target.parentNode
	 		 					var a1z = lis.lastChild;
	 		 					var sp = a1z.childNodes;
	 		 						for(var sps = 0; sps<sp.length; sps++){
	 		 							sp[sps].style.height==='46px';
	 		 							(sp[sps].style.height==='46px')?(sp[sps].style.height='0px'):(sp[sps].style.height='46px')
	 		 							}
	 		 						 		 				
	 		 						 		 			}
	 		 				
	 		 			}
	 		 			}

	componentDidMount(){
		this.props.getData();


	}
	componentDidUpdate(){
		this.liebiaoTo()
	}
	render(){

	 var ck = null;
	 var cb = null;
	 var cv = null;
	 var cm = null;
	 var cn = null;
	 	if(this.props.xq.xq){
	 		ck= this.props.xq.xq.logoUrl;
	 		cb= this.props.xq.xq.storeName;
	 		cv=this.props.xq.xq.deliveryFirst;
	 		cm=this.props.xq.xq.freightWords
	 	};
	 	if(this.props.xq.lb){
	 		cn = this.props.xq.lb.map((it,index)=>{
	 		if(it.childCategoryList !=[]){
	 			var a = it.childCategoryList;
	 			var an = [];
	 			var ju = [];
	 			for(var i=0; i<a.length; i++){
			 		var co = a[i]
			 		an.push(co);
	 			}
	 			for(var s=0; s<a.length; s++){
	 				var catid = a[s];
	 				ju.push(catid);
	 			}
	 		 return  <li key={it+index} className="lis" onClick={this.liebiaoTo} onClick={()=>{
	 		 	var that = this;
	 		 		axios.get(`/client?_djrandom=15096203245655&functionId=productsearch%2Fsearch&body=%7B%22key%22%3A%22%22%2C%22catId%22%3A%22${it.catId}%22%2C%22storeId%22%3A%22${that.props.match.params.storeId}%22%2C%22sortType%22%3A1%2C%22page%22%3A1%2C%22pageSize%22%3A10%2C%22cartUuid%22%3A%22%22%2C%22promotLable%22%3A%22%22%2C%22timeTag%22%3A1509620190918%7D&appVersion=4.8.0&appName=paidaojia&platCode=H5&lng=121.51744&lat=38.84722&city_id=573`)
					.then((res)=>{
						that.state.list11 = res.data.result.searchResultVOList[1]
						that.setState({
							list11:that.state.list11
						})
					})
							
	 		 }}>
	 		 			<strong className="a1w" >{it.title}</strong>
	 		 			<strong className="a1z" >
	 		 			{an.map((item,index)=>{
	 		 				return <span key={item+index} onClick={(e)=>{

	 		 	var that = this;
	 		 		axios.get(`/client?_djrandom=15096203245655&functionId=productsearch%2Fsearch&body=%7B%22key%22%3A%22%22%2C%22catId%22%3A%22${item.catId}%22%2C%22storeId%22%3A%22${that.props.match.params.storeId}%22%2C%22sortType%22%3A1%2C%22page%22%3A1%2C%22pageSize%22%3A10%2C%22cartUuid%22%3A%22%22%2C%22promotLable%22%3A%22%22%2C%22timeTag%22%3A1509620190918%7D&appVersion=4.8.0&appName=paidaojia&platCode=H5&lng=121.51744&lat=38.84722&city_id=573`)
					.then((res)=>{
						that.state.list11 = res.data.result.searchResultVOList[1]
						that.setState({
							list11:that.state.list11
						})
					})
					e.stopPropagation();		
	 		 }}>{item.title}</span>
	 		 			})}
	 		 			</strong>

	 				 </li>
	 		
	 		}
	 	})}

		return(
			<div id="xq">
			<div className="z4">

				<div className="z5">
					<img src={ck} />
					<div className="re">
						<div className="a26">
							<h2>{cb}</h2>
						</div>
						<p className="z6">
						达达专送 | <span>{cv}</span>
						</p>
						<p className="z6">
							<span>
								{cm}
							</span>
						</p>
					</div>
					<div className="a0h">
						<i className="ionfont">❤️</i>
					</div>
					<div className="ala">
						<ul>
							<li>
								<i>
									满折
								</i>
								<span>
									关爱健康满2件打8折
								</span>
							</li>
						</ul>
						<div className="w4">
						<span>1个活动</span>
						</div>
					</div>
					<div className="zj">
						<div className="vc">
							<div className="w8">
								<span className="wg">
									搜索店内商品
								</span>
							</div>
						</div>
						<div className="a01">
						<ul className="ulbig">
							{cn}
						</ul>
						<div className="ceshi">{
							this.state.list11.skuName
						}
						</div>
					</div>

					</div>
				</div>
				</div>
			</div>
		)	
	}

}
		
const mapStateToProps = (state)=>{
	return {
	xq:state.xq,
	lb:state.lb,
	lb1:state.lb1
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		getData:function(){
			axios.get(`/client?_djrandom=15095142970701&functionId=store%2FstoreDetailV220&body=%7B%22storeId%22%3A%22${this.match.params.storeId}%22%2C%22skuId%22%3A%22%22%2C%22activityId%22%3A%22%22%2C%22promotionType%22%3A%22%22%2C%22longitude%22%3A121.51744%2C%22latitude%22%3A38.84722%7D&appVersion=4.7.0&appName=paidaojia&platCode=H5&lng=121.51744&lat=38.84722&city_id=573`)
			.then((res)=>{
				dispatch({
					type:"XQ_GET_DATA",
					payload:{
					xq:res.data.result.storeInfo,
					lb:res.data.result.cateList,
					lb1:res.data.result.cateList.childCategoryList
					}
				})
			})

		}
	}
}
const Xiangqing = connect(mapStateToProps,mapDispatchToProps)(XiangqingUI);

export default Xiangqing;