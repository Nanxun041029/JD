import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import {Carousel} from 'antd'
import 'antd/dist/antd.css'

class LunboUI extends Component{
	componentDidMount(){
		this.props.gotData();
	}
	render(){
		return(
<div id="lunbo1">
	<div className="need-left-right-margin">
	    <Carousel
	      className="my-carousel" autoplay={true} infinite
	    >
	      {this.props.sl.map((item,index)=>{
	      	return <div key={item+index} className="ll">
	      	 	<img src={item.floorCellData.imgUrl} />
	      	</div>
	      })}
	    </Carousel>
	    </div>
	
</div>
		)	
	}
}
const mapStateToProps = (state)=>{
	return {
			sl:state.sl
	}

}

const mapDispatchToProps = (dispatch) => {
	return {
		gotData:function(){
			axios.get('/client?_djrandom=15091069702541&functionId=indexh5%2FgetIndex&body=%7B%22address%22%3A%22%E5%A4%A7%E8%BF%9E%E8%BD%AF%E4%BB%B6%E5%9B%AD%E8%85%BE%E9%A3%9E%E5%9B%AD%E5%8C%BA%22%2C%22city%22%3A%22%E5%A4%A7%E8%BF%9E%E5%B8%82%22%2C%22longitude%22%3A121.51744%2C%22latitude%22%3A38.84722%2C%22coordType%22%3A%222%22%2C%22h5From%22%3A%22%22%2C%22isglb%22%3A%22%22%2C%22currentPage%22%3A%22%22%2C%22storeId%22%3A%22%22%2C%22activityId%22%3A%22%22%7D&platCode=H5&appVersion=4.7.0&appName=paidaojia')
			.then((res)=>{
				dispatch({
					type:"LB1_GET_DATA",
					payload:res.data.result.data[5].data
				})
			})
		}

	}
}
const Lunbo  = connect(mapStateToProps,mapDispatchToProps)(LunboUI);

export default Lunbo ;