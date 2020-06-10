// client/pages/remoteDiagnosis/specialist.js
const DC = require("./doctorData.js")

Page({

  /**
   * 页面的初始数据
   */
  data: {
    screenHeight:300,
    doctorData:DC.doctorData
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this;
    //获取屏幕高度
    wx.getSystemInfo({
      success: function(res) {
        console.log(res)
        that.setData({
          screenHeight:res.windowHeight
        })
      },
    })

    var doctorData = this.data.doctorData

    this.setData({
      doctorName:doctorData[0].name,
      doctorTitle: doctorData[0].title,
      doctorTel: doctorData[0].contact.tel,
      doctorWC: doctorData[0].contact.wechat,
      doctorEmail: doctorData[0].contact.email,
      doctorAddr: doctorData[0].contact.addr,
      doctorSpec: doctorData[0].spec
    })

  },

  //chooseDoctor
  clickItem:function(e){
    console.log(e)
    var doctorData = this.data.doctorData
    var id = e.currentTarget.id
    var name = ''
    var title = ''
    var contact = this.data.doctorData.contact
    var spec =""
    for(var i = 0; i < doctorData.length;i++){
      if(doctorData[i].id == id){
        doctorData[i].cls = "cur-doctor"
        name = doctorData[i].name
        title = doctorData[i].title
        // tel = doctorData[i].tel
        // wechat = doctorData[i].wechat
        contact = doctorData[i].contact
        spec = doctorData[i].spec
      }else{
        doctorData[i].cls = ""
      }
    }

    this.setData({
      doctorData: doctorData,
      doctorName:name,
      doctorTitle: title,
      doctorTel: contact.tel,
      doctorWC: contact.wechat,
      doctorEmail: contact.email,
      doctorAddr: contact.addr,
      doctorSpec: spec
    })
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