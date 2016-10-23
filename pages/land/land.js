//获取应用实例
var app = getApp()
Page({
    data: {
        imgUrls: [
            '../../images/land/1.png',
            '../../images/land/2.png',
            '../../images/land/3.png'
        ],
        windowHeight: 440
    },
    onLoad: function () {
        wx.getSystemInfo({
            success: function (res) {
                console.log(res.model)
                console.log(res.pixelRatio)
                console.log(res.windowWidth)
                console.log(res.windowHeight)
                console.log(res.language)
                console.log(res.version)
            }
        })
    },
    swiperchange: function (e) {
        if (e.detail.current == 2) {
            wx.navigateTo({
                url: "pages/index/index"
            })
        }
    }
})