// pages/online_sensation/detail/detail.js
const http = require('../../../utils/http.js');

Page({
    /**
     * 页面的初始数据
     */
    data: {
        id: '',
        image: [],
        price: '',
        title: '',
        indicatorDots: true,
        autoplay: true,
        interval: 5000,
        duration: 1000,
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.loadDetailData(options.id);
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

    },
    /**
     * 载入详情数据
     */
    loadDetailData: function ($id) {
        let vm = this;
        http.get({
            url: '/good/' + $id,
            success: function (res) {
                vm.setData({
                    image: res.image,
                    price: res.price,
                    title: res.introduction
                })
            },
            fail: function (res) {
                console.log(res.message);
            }
        })
    },
});