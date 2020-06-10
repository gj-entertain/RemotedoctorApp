// pages/Prescription/Prescription.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    arr:["苹果","香蕉","西瓜"],
    a:3,
    person:{
      name:"小明",
      height:180
    }
  }, 
  goToAddPx: function(){
    wx.navigateTo({
      url:'../../pages/pxadd/pxadd',
    })
  },
  goToViewPx: function () {
    wx.navigateTo({
      url: '../../pages/pxview/pxview',
    })
  },
  invitation(e) {
    console.log(e);
    let num = e.currentTarget.id;
    if (num == 0) {
      wx.navigateTo({
        url: '../../pages/outweb/outweb', //路径必须跟app.json一致
        success: function () {
          },       //成功后的回调；
        fail: function () { },         //失败后的回调；
        complete: function () { }
      })
    }

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