import React from 'react';
import ReactDOM from 'react-dom';
import './style/zhuye.scss'
import App from './router/index';
import registerServiceWorker from './registerServiceWorker';
import {createStore,combineReducers} from 'redux';
import {Provider} from 'react-redux';
import IndexReducer from './reducers/IndexReducer'
import FenleiReducer from './reducers/FenleiReducer'


import ZmdReducer from './reducers/ZmdReducer'
import Lunbo from './reducers/Lunbo'
import Lunbo1 from './reducers/Lunbo1'
import Index_listReducers from './reducers/Index_listReducers'
import LoginReducers from './reducers/LoginReducers'
import Xiangqing from './reducers/Xiangqing'




const recuders = combineReducers({
	list:IndexReducer,
	lists:FenleiReducer,
	groupList:FenleiReducer,
	list1:IndexReducer,
	lbt:ZmdReducer,
	sk:Lunbo,
	sl:Lunbo1,
	shop:Index_listReducers,
	login:LoginReducers,
	xq:Xiangqing
})
const store = createStore(recuders,{})

function renderPage(){
		ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
}
renderPage();
store.subscribe(renderPage)

registerServiceWorker();
