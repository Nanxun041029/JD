import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import Xiangqing from './Xiangqing'
import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom'


class Index_listUI extends Component{
	componentDidMount(){
		this.props.gotData();
	}
	render(){
		var items =null;	
		var it = null;
		   it= this.props.shop.map((item,index)=>{
		 	  if(item.floorCellData.skus){
				items =item.floorCellData.skus.map((ie,index)=>{
					
									return <div href="" key={ie.skuId} className="a9d">
												<span className="d0">
											<img src={ie.imgUrl}/>
											<span className="cz">{ie.priceDesc}</span>
												</span>
												<span className="d1">¥{ie.realTimePrice}</span>
											</div>
										})

			                      }else{
			                      	items = null;
			                      }


						return <li key={item.floorCellData.imgUrl} >
							<NavLink to={"/xiangqing/"+item.floorCellData.params.storeId}>
							<div className="shop_box1">
								<span>
									<img src={item.floorCellData.imgUrl}/>
								</span>
								<div className="shop_box2">
									<div className="shop_box2_bx">
										<h2>{item.floorCellData.name}</h2>
									</div>
									<div className="shop_box2_bx1">
										<strong className="i9">
											<span>达达专送</span>
											<span>-</span>
											<span>{item.floorCellData.deliveryFirst}</span>
										</strong>
									</div>
									<div className="shop_box2_bx2">
										<p>
											<span>
												🌟🌟
											</span>
										</p>
										<p>
											<span className="line_split">|</span>
										{item.floorCellData.monthSale}
										</p>
									</div>
									<span className="uh">
										{item.floorCellData.freightWords}
									</span>
									<div className="bo">
									{item.floorCellData.tags.map((it,index)=>{
									
											return <div key={it.name}>
												<span className="jj">{it.iconText}</span>
												<span className="gg">{it.words}</span>
											</div>
											
										})}
									</div>

									<div className="a9c">
									{items}
									</div>

								</div>

							</div>
						</NavLink>
								</li>
					})
		return(
<div id="index_list">
		<div>
			<ul>
				{
				it
				}
			</ul>
		</div>
</div>
		)	
	}
}
const mapStateToProps = (state)=>{
	return {
			shop:state.shop
	}

}

const mapDispatchToProps = (dispatch) => {
	return {
		gotData:function(){

			axios.get('/client?_djrandom=15093523067183&functionId=zone%2FrecommendStoreList&body=%7B%22channelId%22%3A%22%22%2C%22city%22%3A%22%E5%A4%A7%E8%BF%9E%E5%B8%82%22%2C%22longitude%22%3A121.51744%2C%22latitude%22%3A38.84722%2C%22currentPage%22%3A1%2C%22pageSize%22%3A10%2C%22areaCode%22%3A573%2C%22coordType%22%3A%222%22%2C%22platform%22%3A%221%22%7D&platCode=H5&appVersion=4.7.0&appName=paidaojia')
			.then((res)=>{
				dispatch({
					type:"INDEX_LIST_GET_DATA",
					payload:res.data.result.data.data
				})
			})
		}

	}
}
const Index_list  = connect(mapStateToProps,mapDispatchToProps)(Index_listUI);

export default Index_list ;