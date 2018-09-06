const app = getApp();
const http = require('../../utils/http.js');

Page({
    data: {
        imgUrls: [],
        indicatorDots: true,
        autoplay: true,
        interval: 5000,
        duration: 1000,
    },
    onLoad: function () {
        this.loadSliderData();
    },
    online_detail: function () {
        wx.navigateTo({
            url: "../online_sensation/online_sensation",
        })
    },
    showDetail: function (options, params) {
        console.log(options);
        console.log(params);
        wx.navigateTo({
            url: "../online_sensation/detail/detail?price=￥100&id=1&title=金属圆框眼镜架男女韩版复古超轻大脸全框眼镜架平光可配防蓝光&image=https://gd3.alicdn.com/imgextra/i3/419672087/TB2Z.I.DoR1BeNjy0FmXXb0wVXa_!!419672087.jpg",
        })
    },
    loadSliderData: function (e) {
        let vm = this;
        http.get({
            url: '/home/slider',
            success: function (res) {
                vm.setData({
                    imgUrls: res
                })
            },
            fail: function (res) {
                console.log(res.message);
            }
        })
    }
});
