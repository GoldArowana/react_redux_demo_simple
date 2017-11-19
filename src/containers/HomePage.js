import React from 'react'
import {connect} from 'react-redux'

class Home extends React.Component {
    render () {
        return (
            <div style={{border:'3px solid yellow',padding:'5%'}}>
                <div>大家好，我是HomePage组件</div>
                <div>我不认识App组件（我和他不是父子关系，从来没见过面），但是这不重要。</div>
                <div>我只需要认识Redux就行了。</div>
                <div>嘿Redux,你知不知道cityName是什么东西啊？</div>
                <div>什么？
                    <span style={{color:'red',fontSize:'20px',fontWeight:'bold'}}>
                        {this.props.userinfo.cityName}
                    </span>
                    是吗？
                </div>
                <div>Redux不会骗人，如果他不知道，他会说‘undefined’</div>
            </div>
        )
    }
}

/*从Redux取值， userinfo.cityName就是我想要的城市信息*/
function mapStateToProps (state) {
    return {
        userinfo:state.userinfo
        /*冒号前面的userinfo是本页面起作用的变量
        * 冒号后面的state.userinfo是index.js中的rootReducer里的userinfo
        */
    }
}

/*本页面不向Redux存任何东西*/
function mapDispatchToProps (dispatch) {
    return {}
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);