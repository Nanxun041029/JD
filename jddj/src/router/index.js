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


const App = () => (
  <Router id="router-index">
    <div>
      <Route exact path="/" component={Index}/>
      <Route path="/fenlei" component={Fenlei}/>
      <Route path="/gouwuche" component={Gouwuche}/>
      <Route path="/dingdan" component={Dingdan}/>
      <Route path="/wode" component={Wode}/>
      <hr/>

    <ul>
        <li><NavLink activeClassName="green" exact to="/">
           <p>icon</p> 首页
        </NavLink></li>
        <li><NavLink  activeClassName="green" to="/fenlei">
         <p>icon</p>  分类
        </NavLink></li>
        <li><NavLink activeClassName="green" to="/gouwuche">
          <p>icon</p> 购物车
        </NavLink></li>
        <li><NavLink activeClassName="green" to="/dingdan">
          <p>icon</p> 订单
        </NavLink></li>
        <li><NavLink activeClassName="green" to="/wode">
          <p>icon</p>   我的
        </NavLink></li>
      </ul>

    </div>
  </Router>
)
export default App
