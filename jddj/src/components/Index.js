import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import '../style/index.scss'
import Zoumadeng from './zoumadeng'
import Lunbo from './Lunbo'
import Lunbo1 from './Lunbo1'
import Index_list from './Index_list'

class IndexUI extends Component{
	componentDidMount(){
		this.props.getData();
	}
	render(){
			var items = null;
			 	if(this.props.list.list){
		 		items = 
					
					this.props.list.list.map((item,index)=>{
						return <li key={item + index}>
							<img src={item.floorCellData.imgUrl}/>
							<p>{item.floorCellData.title}</p>
						</li>

					})	
		 }
		 	var items2 = null;
		 		if(this.props.list.list1){
		 		items2 = this.props.list.list1.map((item,index)=>{
		 				if(item.floorCellData){
						 return <li key={item.title}>
						 		<h2>{item.floorCellData.title}</h2>
						 		<p>{item.floorCellData.words}</p>
									<img src={item.floorCellData.imgUrl}/>
								</li>
						}
					})

		 		}
		 	var items1 = null;
		 if(this.props.list.list1){
		 		items1 = this.props.list.list1.map((item,index)=>{
		 				if(item.dataObj){
						 return <li key={item}>
									<h1>{item.dataObj.title}</h1>
									<p>{item.dataObj.adwords}</p>
									<img src={item.dataObj.imgUrl}/>
								</li>
						}
					})

		 		}

		return(

<div id="zhuye">
	<div id="zy-box1">
				<ul>
					<li><span>icon</span>
					    大连软
						<span>icon</span>
					</li>
					<li>
						<span>icon</span> 附近商家商品
					</li>
					<li>
						<span>icon 铃铛</span>
					</li>
				</ul>
			</div>
		<div>
			<Zoumadeng />
		</div>

		<div id="zy-box2">
			<ul>
				{items} 
			</ul>
		</div>
		<Lunbo/>

		<div id="zy-box3">
			<ul>
				{items1}
				{items2}

			</ul>
		</div>
		<Lunbo1/>

		<div id="zy-box4">
			<span>附近的店铺</span>
		</div>
		<Index_list />
		<div className="footer">
		</div>
		
</div>
		)	
	}
}
const mapStateToProps = (state)=>{
	return {
	list:state.list,
	list1:state.list1
	}

}

const mapDispatchToProps = (dispatch) => {
	return {
		getData:function(){
			axios.get('/client?_djrandom=15091069702541&functionId=indexh5%2FgetIndex&body=%7B%22address%22%3A%22%E5%A4%A7%E8%BF%9E%E8%BD%AF%E4%BB%B6%E5%9B%AD%E8%85%BE%E9%A3%9E%E5%9B%AD%E5%8C%BA%22%2C%22city%22%3A%22%E5%A4%A7%E8%BF%9E%E5%B8%82%22%2C%22longitude%22%3A121.51744%2C%22latitude%22%3A38.84722%2C%22coordType%22%3A%222%22%2C%22h5From%22%3A%22%22%2C%22isglb%22%3A%22%22%2C%22currentPage%22%3A%22%22%2C%22storeId%22%3A%22%22%2C%22activityId%22%3A%22%22%7D&platCode=H5&appVersion=4.7.0&appName=paidaojia')
			.then((res)=>{
				dispatch({
					type:"INDEX_GET_DATA",
					payload:{
					list:res.data.result.data[1].data,
					list1:res.data.result.data[4].data
					}
				})
			})
		}
	}
}
const Index = connect(mapStateToProps,mapDispatchToProps)(IndexUI);

export default Index;