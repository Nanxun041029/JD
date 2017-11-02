import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import '../style/xiangqing.scss'

class XiangqingUI extends Component{
	constructor(){
		super();
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
	 var cb =null;
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
	 			for(var i=0; i<a.length; i++){
			 		var co = a[i].title;
			 		an.push(co);
			 		
			 	
	 			}
	 		 return  <li key={it+index} className="lis" onClick={this.liebiaoTo}>
	 		 			<strong className="a1w" >{it.title}</strong>
	 		 			<strong className="a1z" >
	 		 			{an.map((item,index)=>{
	 		 				return <span key={item+index}>{item}</span>
	 		 				
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
	lb:state.lb
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
					payload:{
					xq:res.data.result.storeInfo,
					lb:res.data.result.cateList
					}
				})
			})

		}
	}
}
const Xiangqing = connect(mapStateToProps,mapDispatchToProps)(XiangqingUI);

export default Xiangqing;