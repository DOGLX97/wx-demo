//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [
      '/images/swiper01.jpg',
      '/images/swiper02.jpg',
      '/images/swiper03.jpg'
    ],
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 1000,
    proList: [{
      logo: '/images/pro_01.jpg',
      title: 'test',
      desc: 'asdfsdasda'
    }, {
      logo: '/images/pro_02.jpg',
      title: 'test',
      desc: 'asdfsdasda'
    }, {
      logo: '/images/pro_03.jpg',
      title: 'test',
      desc: 'asdfsdasda'
    }],
  },
  toDetail: function(e){
    console.log(e.currentTarget.dataset.index);
    var index = e.currentTarget.dataset.index;
    var proList = this.data.proList;
    var title = proList[index].title;
    wx.navigateTo({
      url: '/pages/detail/detail?title=' + title,
    })
  },
  copy: () => {
    if (wx.setClipboardData) {
      wx.setClipboardData({
        data: 'girlsgengration',
        success: function (res) {
          wx.getClipboardData({
            success: function (res) {
              wx.showModal({
                title: '复制成功',
                content: '内容已经成功复制',
              })
            }
          })
        }
      })
    } else {
      wx.showModal({
        title: '复制失败',
        content: '您的微信版本过低，请升级！',
      })
    }
  }
})
