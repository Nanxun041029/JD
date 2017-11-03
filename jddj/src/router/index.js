import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom'
import Index from '../components/Index'
import Fenlei from '../components/Fenlei'
import Gouwuche from '../components/Gouwuche'
import Dingdan from '../components/Dingdan'
import Wode from '../components/Wode'
import Denglu from '../components/Denglu'
import Zhuce from '../components/Zhuce'
import Xiangqing from '../components/Xiangqing'
import Xiangqing2 from '../components/Xiangqing_2'

const App = () => (
  <Router id="router-index">
    <div>
      <Route exact path="/" component={Index}/>
      <Route path="/fenlei" component={Fenlei}/>
      <Route path="/gouwuche" component={Gouwuche}/>
      <Route path="/dingdan" component={Dingdan}/>
      <Route path="/wode" component={Wode}/>
      <Route path="/denglu" component={Denglu}/>
      <Route path="/zhuce" component={Zhuce}/>
      <Route path="/xiangqing/:storeId" component={Xiangqing}/>
      <Route path="/xiangqing2/:Id" component={Xiangqing2}/>
    <ul className="it-ul">
        <li><NavLink activeClassName="green" exact to="/">
           <p className="iconfont">&#xe608;</p> 首页
        </NavLink></li>
        <li><NavLink  activeClassName="green" to="/fenlei">
         <p className="iconfont">&#xe600;</p>  分类
        </NavLink></li>
        <li><NavLink activeClassName="green" to="/gouwuche">
          <p className="iconfont">&#xe601;</p> 购物车
        </NavLink></li>
        <li><NavLink activeClassName="green" to="/dingdan">
          <p className="iconfont">&#xe6c1;</p> 订单
        </NavLink></li>
        <li><NavLink activeClassName="green" to="/wode">
          <p className="iconfont">&#xe61c;</p>   我的
        </NavLink></li>
      </ul>

    </div>
  </Router>
)
export default App
