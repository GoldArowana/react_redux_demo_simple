/*调用React或Redux自带的库*/
import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

/*调用 ‘actions/userinfo.js’ 然后为它起个别名：userInfoActionsFromOtherFile */
import * as userInfoActionsFromOtherFile from '../actions/userinfo'

class App extends React.Component {
    render () {
        return (
            <div style={{border: '3px solid blue', padding: '5%'}}>
                <div>大家好，我是App组件，我这里有一个很重要的数据cityName,很多人都想要</div>
                <div>因为想要这个数据的人非常多，但我又不可能认识所有人，做不到把数据主动发给所有人</div>
                <div>我现在把cityName的值存到Redux里，让他们向Redux索取数据就好了</div>
                <div>你想知道我存的cityName是哪个城市吗？快去问问Redux吧</div>
            </div>
        )
    }

    componentDidMount () {
        let data = {
            cityName: '纽约'
        };
        this.props.userInfoActions.update(data);
    }
}

/*本页面不向Redux取东西*/
function mapStateToProps (state) {
    return {}
}

/*把 'actions/uerinfo.js' 里的update函数 绑定到 userInfoActions。
* 用的时候这样用： this.props.userInfoActions.update()
* 参见：本页的 componentDidMount 部分
*/
function mapDispatchToProps (dispatch) {
    return {
        userInfoActions: bindActionCreators(userInfoActionsFromOtherFile, dispatch)
        /*这个userInfoActionsFromOtherFile变量，参见本页面头部的import部分，是‘actions/userinfo.js’的别名*/
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);