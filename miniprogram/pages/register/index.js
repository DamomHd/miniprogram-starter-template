// miniprogram/pages/register/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        radioItems: [
            {name: '我要申请贷款', value: '0', checked: true},
            {name: '城市合伙人', value: '1'},
            {name: '银行金融经理', value: '2'},
            {name: '财务规划师', value: '3'}
        ]
    },


    submitForm(){
        let {radioItems} = this.data
        let checkedVal = radioItems.find(item=>item.checked)['value']
        wx.navigateTo({
          url: '/pages/register/next/index?value='+checkedVal,
        })
    },  
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})