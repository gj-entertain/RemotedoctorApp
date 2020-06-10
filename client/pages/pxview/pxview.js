var util = require('../../utils/util.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    records: [],
    pxid: " ",
  },

  goodsNameInput: function (e) {
    this.setData({
     pxid: e.detail.value,
    })
  },
  clickButton: function(e){
    wx.cloud.init()
    const db = wx.cloud.database()
    
    db.collection("Prescription").where({
      Prescription_Id:this.data.pxid
    })
      .get({
        success: res => {
          // for (var i = 0; i < res.data.length; i++) {
          //   res.data[i].date = util.formatTime(res.data[i].date, "yyyy-mm-dd HH:mm:ss")
          // }
          this.setData({
            records: res.data
          })
          console.log(res.data)
          console.log("yes")
        },
        fail: err => {
          console.log("Get health records failed", res)
        }
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