// client/pages/healthRecord/healthRecord.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

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

  },

  goDevice: function () {
    let url = 'http://182.151.212.156:8020/DataListForSn.aspx?SN=190616001';
    wx.setStorageSync('url', url);
    wx.navigateTo({
      url: '../healthRecord/out', //
      success: function () {

      },       //成功后的回调；
      fail: function () { },         //失败后的回调；
      complete: function () { }
    })
  },



  //添加
  res: function (e) {
    wx.cloud.init()
    const db = wx.cloud.database()
    db.collection('Records').add({
      data: {
        name: e.detail.value.name,
        BPM: parseInt(e.detail.value.pulse),
        NIBP_H: parseInt(e.detail.value.hpressure),
        NIBP_L: parseInt(e.detail.value.lpressure),
        SpO2: parseInt(e.detail.value.oxygen),
        temp: parseFloat(e.detail.value.temp),
        date: db.serverDate(),
      },
      success: res => {
        // 在返回结果中会包含新创建的记录的 _id
        this.setData({
          name: '',
          BPM: '',
          NIBP_H: '',
          NIBP_L:'',
          SpO2: '',
          temp: '',
          date: db.serverDate(),
        })
        wx.showToast({
          title: 'Successful',
        })
        console.log('[数据库] [新增记录] 成功，记录 _id: ', res._id)
        wx.navigateTo({
          url: '/pages/recordHistory/recordHistory'
        })
      },
      fail: err => {
        wx.showToast({
          icon: 'none',
          title: 'Failed'
        })
        console.error('[数据库] [新增记录] 失败：', err)
      }
    })
  },

})