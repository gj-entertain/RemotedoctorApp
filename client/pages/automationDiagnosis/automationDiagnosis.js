// pages/automationDiagnosis/automationDiagnosis.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    symptoms: "",
    first:"",
    dict:"headache stomache cold disgusting",
    lastword:"",
    rs:[]
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
  // res: function (e) {
  //   wx.cloud.init()
  //   const db = wx.cloud.database()
  //   db.collection('Destription').add({
  //     data: {
  //       symSentence: String(e.detail.value.symptoms),
        
  //       date: db.serverDate(),
  //     },
  //     success: res => {
  //       // 在返回结果中会包含新创建的记录的 _id
  //       this.setData({
  //         symSentence: String(e.detail.value.symptoms),
          
  //         date: db.serverDate(),
  //       })
  //       wx.showToast({
  //         title: 'Successful',
  //       })
  //       console.log('[数据库] [新增记录] 成功，记录 _id: ', res._id)
  //     },
  //     fail: err => {
  //       wx.showToast({
  //         icon: 'none',
  //         title: 'Failed'
  //       })
  //       console.error('[数据库] [新增记录] 失败：', err)
  //     }
  //   })
  // },
  res: function (e) {
    const that = this;
    
    that.setData({
      first: e.detail.value.symptoms
      
    })
    
  },

  

  divide: function divide(text){
    if (text.length == 0) return true;
    var word = text.substring(0, 1) + "";
    var regExp = /\w/;
    //英文  
    if (regExp.test(word)) {
      var tmp = text.replace(/^\s*(\w+)\s*.*$/, "$1");
      text = text.replace(/^\s*\w+\s*/, "");
      rs.push(tmp);
      divide(text);
      return;
    }

    var words = [];
    var end = 0;
    var start = -1;
    while ((start = dict.indexOf('\r\n' + word, end)) != -1) {
      end = dict.indexOf('\r\n', start + 1);
      if (start == -1 || end == -1) return false;
      if (start > end) return false;
      words.push(dict.substr(start, end - start).replace(/(\r\n|\s)/g, ""));
    }

    var tmp = "";
    for (j = 0; j < words.length; j++) {
      //找到最长的词，当然也可以将所有词保留  
      if (text.indexOf(words[j]) != -1 && words[j].length > tmp.length) {
        tmp = words[j];
      }
    }
    //词库不存在的词  
    if (tmp == "") {
      tmp = word;
    }
    text = text.replace(tmp, "");
    if (tmp.replace(/\s/g, '') != "")
      this.rs.push(tmp);
    divide(text);
  },


  

  res2: function (e) {
    const that = this;
    that.setData({
      symptoms: this.divide(e.detail.value.symptoms)
    })
  },
  goBaidu: function () {
    let url = 'https://www.baidu.com/s?wd=' + this.data.first;
    wx.setStorageSync('url', url);
    wx.navigateTo({
      url: '../automationDiagnosis/out', //
      success: function () {

      },       //成功后的回调；
      fail: function () { },         //失败后的回调；
      complete: function () { }
    })      
  },

  goWebmd: function () {
    let url = 'https://www.webmd.com/search/search_results/default.aspx?query=' + this.data.first;
    wx.setStorageSync('url', url);
    wx.navigateTo({
      url: '../automationDiagnosis/out', //
      success: function () {

      },       //成功后的回调；
      fail: function () { },         //失败后的回调；
      complete: function () { }
    })
  },

  goGoogle: function () {
    let url = 'https://www.google.com/search?q=' + this.data.first;
    wx.setStorageSync('url', url);
    wx.navigateTo({
      url: '../automationDiagnosis/out', //
      success: function () {

      },       //成功后的回调；
      fail: function () { },         //失败后的回调；
      complete: function () { }
    })
  },

  goDingxiang: function () {
    let url = 'https://dxy.com/search/index?keyword=' + this.data.first;
    wx.setStorageSync('url', url);
    wx.navigateTo({
      url: '../automationDiagnosis/out', //
      success: function () {

      },       //成功后的回调；
      fail: function () { },         //失败后的回调；
      complete: function () { }
    })
  },
  
  goBing: function () {
    let url = 'https://cn.bing.com/search?q=' + this.data.first;
    wx.setStorageSync('url', url);
    wx.navigateTo({
      url: '../automationDiagnosis/out', //
      success: function () {

      },       //成功后的回调；
      fail: function () { },         //失败后的回调；
      complete: function () { }
    })
  },



})
