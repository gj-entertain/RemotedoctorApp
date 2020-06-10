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



  //添加
  res: function (e) {
    wx.cloud.init()
    const db = wx.cloud.database()
    db.collection('Prescription').add({
      data: {
        name: e.detail.value.name,
        Drug_Name: e.detail.value.drugName,
        Dosage_Form: e.detail.value.dosageForm,
        R_oute: e.detail.value.route,
        Prescription_Id: e.detail.value.pxid,
      },
      success: res => {
        // 在返回结果中会包含新创建的记录的 _id
        this.setData({
          Drug_Name: '',
          Dosage_Form: '',
          R_oute: '',
          Prescription_Id: '',
        })
        wx.showToast({
          title: 'Successful',
        })
        console.log('[数据库] [新增记录] 成功，记录 _id: ', res._id)
        // wx.navigateTo({
        //   url: '/pages/recordHistory/recordHistory'
        // })
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