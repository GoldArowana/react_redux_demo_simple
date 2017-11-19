/*React或Redux等系统自带的库*/
import React from 'react'
import {render} from 'react-dom'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import {combineReducers} from 'redux'
/*导入自定义的两个组件App和HomePage*/
import App from './containers/App'
import Home from './containers/HomePage'

/*其中一个Redux处理*/
let userinfoFunction = (state, action) => {
    switch (action.type) {
        case 'USERINFO_UPDATE':/*如果是update请求*/
            return action.data;
        default:/*如果是其他情况，则返回空数据*/
            return {}
    }
};

/*在这里以json格式汇总所有的Reudx处理。（本例子中只有一个，所以只有一个键值对儿）*/
let rootReducer = combineReducers({
    userinfo: userinfoFunction
});

/*把rootReducer配置好，封装起来。*/
let configureStore = (initialState) => {
    const store = createStore(
        rootReducer,
        initialState,
        window.devToolsExtension ? window.devToolsExtension() : undefined
    );
    console.log(rootReducer);
    return store
};

render(
    // 获取刚刚配置封装好的Redux Store
    <Provider store={configureStore()}>
        <div>
            <App/>
            <Home/>
        </div>
    </Provider>,
    document.getElementById('root')
);
