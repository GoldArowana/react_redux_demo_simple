/*
* Redux相应的动作
* 这里是更新传进来的data的函数update
*/
export function update(data) {
    return {
        type: 'USERINFO_UPDATE',
        data
    }
}