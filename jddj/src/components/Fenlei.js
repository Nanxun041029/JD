import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import '../style/fenlei.scss'
class FenleiUI extends Component{
	constructor() {
		super();
		this.changeTo = this.changeTo.bind(this);
	}
	changeTo(){
		var lis = document.querySelectorAll('.list-one .left-one .nameone');
		var chils= document.querySelector('.left-one').childNodes;
		var divs = document.querySelectorAll('.list-one .right-big')
		for (var i = 0; i < lis.length; i++) {
			lis[0].className ='nameone nametwo'
			var a =lis[i]
			a.index = i
			lis[i].onclick = function (){
				for(var j = 0; j < chils.length; j++){
					chils[j].className = ''
					}
					this.className += ' nametwo'
					
				if(this.className = 'nametwo'){
				var b = this.index
				for(var c = 0; c < divs.length; c++){
					divs[c].style.display='none'
					}
					divs[b].style.display='block'
				}
			}
		}
	}
	componentDidMount(){
		this.props.getData();
	}
	componentDidUpdate(){
		this.changeTo();
	}
	render(){
	var listBig = null;
	if(this.props.lists.lists){
	listBig = this.props.lists.lists.map((item,index)=>{
						return	(<li className="nameone" key={item.catId} onClick={this.changeTo}>
									<p className="name-samll">
										{item.name}
									</p>
								</li>)
		})
}
	var Right_one = null;
	if(this.props.lists.lists){
	Right_one = this.props.lists.lists.map((item,index)=>{
			return(	<div className="right-big" key={item.catId}>
								{item.groupList.map((it,index)=>{
					return  <div key={it.catId} className="right-one">
								<p className="title">{it.name}</p>
								<ul className="details">
								{it.tabCateList.map((ite,index)=>{
							return 	<li className="content" key={ite.catId}>
										<img src={ite.imgUrl} alt=""/>
										<p className="name-details">{ite.name}</p>
									</li>
									})}	
								</ul>
							</div>
										
							})}
					</div>)
})
	}


		return (
			<div id="fenlei">
				<div className="tou">
					<div className="nei">
						<span className="iconfont">&#xe60b;</span>
						<input type="text" placeholder="搜索附近的商品和门店"/>
					</div>
				</div>
				<div className="list-one">
					<ul className="left-one">
						{listBig}
					</ul>
					{Right_one}
				</div>


			</div>
		)	
	}
}
const mapStateToProps = (state)=>{
	return {
	lists:state.lists,
	groupList:state.groupList
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		getData:function(){
			axios.get('/client?_djrandom=15093237193832&functionId=homeSearch%2FtabCateList&body=%7B%22longitude%22%3A121.53528%2C%22latitude%22%3A38.89061%2C%22cityId%22%3A573%7D&appVersion=4.7.0&appName=paidaojia&platCode=H5')
			.then((res)=>{
				console.log(res)

				dispatch({
					type:"FENLEI_GET_DATA",
					payload:{lists:res.data.result.firstTabCate,
							groupList:res.data.result.firstTabCate[0].groupList
						}
				})
			})
		}
	}
}
const Fenlei = connect(mapStateToProps,mapDispatchToProps)(FenleiUI);

export default Fenlei;