App({
  onLaunch(options) {
    // 登录
    wx.login({
      success: res => {
        console.log(res);
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        console.log(res);
        console.log('得到用户信息成功');
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              console.log(res.userInfo);
              console.log(2);
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })

    // wx.request({
    //   url: 'http://www.easy-mock.com/mock/5a1ffb42583969285ab22bb7/orderOnline/orderOnline',
    //   complete: res => {
    //     console.log(res);
    //     this.globalData.classifyList = res.data;
    //   },
    // })
  },
  onShow(options) {
  },
  onHide() {
  },
  onError(error) {
  },

  globalData: {
    classifyList: {
      "myFruits": [
        [
          {
            "name": "肉包",
            "price": "1.5",
            "url": " ",
            "introduce": "1.5元/个",
            "stock": "1",
            "category": "面点类",
            "id": " ",
            "num": "1"
          },
          {
            "name": "芝麻包",
            "price": "1",
            "url": " ",
            "introduce": "1元/个",
            "stock": "1",
            "category": "面点类",
            "id": " ",
            "num": "1"
          },
          {
            "name": "三鲜包",
            "price": "2",
            "url": " ",
            "introduce": "2元/个",
            "stock": "1",
            "category": "面点类",
            "id": " ",
            "num": "1"
          },
          {
            "name": "花卷/馒头",
            "price": "1.5",
            "url": " ",
            "introduce": "1.5元/两个",
            "stock": "1",
            "category": "面点类",
            "id": " ",
            "num": "1"
          },
          {
            "name": "红糖发糕",
            "price": "2.5",
            "url": " ",
            "introduce": "2.5元/块",
            "stock": "1",
            "category": "面点类",
            "id": " ",
            "num": "1"
          }
        ],
        [
          {
            "name": "油条",
            "price": "1",
            "url": " ",
            "introduce": "1元/根",
            "stock": "1",
            "category": "油炸类",
            "id": "1",
            "num": "1"
          },
          {
            "name": "煎饺",
            "price": "3",
            "url": " ",
            "introduce": "3元/一份（四个）",
            "stock": "1",
            "category": "油炸类",
            "id": "1",
            "num": "1"
          },
          {
            "name": "糖果",
            "price": "1",
            "url": " ",
            "introduce": "1元/个",
            "stock": "1",
            "category": "油炸类",
            "id": "1",
            "num": "1"
          },
          {
            "name": "麻园",
            "price": "1.5",
            "url": " ",
            "introduce": "1.5/个",
            "stock": "1",
            "category": "油炸类",
            "id": "1",
            "num": "1"
          }
        ],
        [
          {
            "name": "拌粉/拌面",
            "price": "3",
            "url": " ",
            "introduce": "3元/碗",
            "stock": "1",
            "category": "粉面类",
            "id": "2",
            "num": "1"
          },
          {
            "name": "牛肉拌粉",
            "price": "8",
            "url": " ",
            "introduce": "8元/碗",
            "stock": "1",
            "category": "粉面类",
            "id": "2",
            "num": "1"
          },
          {
            "name": "肥肠拌粉",
            "price": "8",
            "url": " ",
            "introduce": "8元/碗",
            "stock": "1",
            "category": "粉面类",
            "id": "2",
            "num": "1"
          },
          {
            "name": "牛肉汤粉",
            "price": "10",
            "url": " ",
            "introduce": "10元/碗",
            "stock": "1",
            "category": "粉面类",
            "id": "2",
            "num": "1"
          },
          {
            "name": "肥肠汤粉",
            "price": "10",
            "url": " ",
            "introduce": "10元/碗",
            "stock": "1",
            "category": "粉面类",
            "id": "2",
            "num": "1"
          },
          {
            "name": "猪血汤粉",
            "price": "5",
            "url": " ",
            "introduce": "5元/碗",
            "stock": "1",
            "category": "粉面类",
            "id": "2",
            "num": "1"
          },
          {
            "name": "排骨汤粉",
            "price": "8",
            "url": " ",
            "introduce": "8元/碗",
            "stock": "1",
            "category": "粉面类",
            "id": "2",
            "num": "1"
          }
        ],
        [
          {
            "name": "红薯",
            "price": "3",
            "url": " ",
            "introduce": "3元/个",
            "stock": "1",
            "category": "粗粮类",
            "id": "3",
            "num": "1"
          },
          {
            "name": "玉米",
            "price": "3",
            "url": " ",
            "introduce": "3元/根",
            "stock": "1",
            "category": "粗粮类",
            "id": "3",
            "num": "1"
          }
        ],
        [
          {
            "name": "茶蛋",
            "price": "1.5",
            "url": " ",
            "introduce": "1.5元/个",
            "stock": "1",
            "category": "蛋类",
            "id": "4",
            "num": "1"
          },
          {
            "name": "卤蛋",
            "price": "1.5",
            "url": " ",
            "introduce": "1.5元/个",
            "stock": "1",
            "category": "蛋类",
            "id": "4",
            "num": "1"
          },
          {
            "name": "水煮蛋",
            "price": "1.5",
            "url": " ",
            "introduce": "1.5元/个",
            "stock": "1",
            "category": "蛋类",
            "id": "4",
            "num": "1"
          }
        ],
        [
          {
            "name": "红豆汤",
            "price": "3",
            "url": " ",
            "introduce": "3元/碗",
            "stock": "1",
            "category": "甜品类",
            "id": "5",
            "num": "1"
          },
          {
            "name": "白木耳莲子汤",
            "price": "3",
            "url": " ",
            "introduce": "3元/碗",
            "stock": "1",
            "category": "甜品类",
            "id": "5",
            "num": "1"
          },
          {
            "name": "五谷豆浆",
            "price": "3",
            "url": " ",
            "introduce": "3元/碗",
            "stock": "1",
            "category": "甜品类",
            "id": "5",
            "num": "1"
          }
        ],
        [
          {
            "name": "鸡蛋肉饼汤",
            "price": "3.5",
            "url": " ",
            "introduce": "3.5元/份",
            "stock": "1",
            "category": "煨汤类",
            "id": "6",
            "num": "1"
          },
          {
            "name": "香菇肉饼汤",
            "price": "3.5",
            "url": " ",
            "introduce": "3.5元/份",
            "stock": "1",
            "category": "煨汤类",
            "id": "6",
            "num": "1"
          },
          {
            "name": "墨鱼肉饼汤",
            "price": "3.5",
            "url": " ",
            "introduce": "3.5元/份",
            "stock": "1",
            "category": "煨汤类",
            "id": "6",
            "num": "1"
          },
          {
            "name": "桂圆肉饼汤",
            "price": "3.5",
            "url": " ",
            "introduce": "3.5元/份",
            "stock": "1",
            "category": "煨汤类",
            "id": "6",
            "num": "1"
          },
          {
            "name": "海带排骨汤",
            "price": "3.5",
            "url": " ",
            "introduce": "3.5元/份",
            "stock": "1",
            "category": "煨汤类",
            "id": "6",
            "num": "1"
          }
        ],
        [
          {
            "name": "养生糖醋生姜",
            "price": "2",
            "url": " ",
            "introduce": "2元/份",
            "stock": "1",
            "category": "凉菜类",
            "id": "7",
            "num": "1"
          },
          {
            "name": "油炸花生米",
            "price": "2",
            "url": " ",
            "introduce": "2元/份",
            "stock": "1",
            "category": "凉菜类",
            "id": "7",
            "num": "1"
          },
          {
            "name": "酸辣黄瓜",
            "price": "2",
            "url": " ",
            "introduce": "2元/份",
            "stock": "1",
            "category": "凉菜类",
            "id": "7",
            "num": "1"
          }
        ],
        [
          {
            "name": "白粥",
            "price": "1.5",
            "url": " ",
            "introduce": "1.5元/碗",
            "stock": "1",
            "category": "稀饭类",
            "id": "8",
            "num": "1"
          },
          {
            "name": "八宝粥/小米粥",
            "price": "3",
            "url": " ",
            "introduce": "3元/碗",
            "stock": "1",
            "category": "稀饭类",
            "id": "8",
            "num": "1"
          },
          {
            "name": "皮蛋瘦肉粥",
            "price": "5",
            "url": " ",
            "introduce": "5元/碗",
            "stock": "1",
            "category": "稀饭类",
            "id": "8",
            "num": "1"
          }
        ],
        [
          {
            "name": "A套餐：牛肉（肥肠）拌粉+汤",
            "price": "10",
            "url": " ",
            "introduce": "10元/份",
            "stock": "1",
            "category": "套餐类",
            "id": "9",
            "num": "1"
          },
          {
            "name": "B套餐：两肉包+鸡蛋+红薯（玉米）+汤",
            "price": "10",
            "url": " ",
            "introduce": "10元/份",
            "stock": "1",
            "category": "套餐类",
            "id": "9",
            "num": "1"
          },
          {
            "name": "C套餐：排骨（肥肠）汤粉+肉包+油条",
            "price": "10",
            "url": " ",
            "introduce": "10元/份",
            "stock": "1",
            "category": "套餐类",
            "id": "9",
            "num": "1"
          }
        ]
      ]
    },  //商品列表
    userInfo: {},     //用户信息
    carts: [],       //购物车信息
    cartTotal: 0,     //购物车数量
    cartTotalPrice: 0,  //购物车价值
    cartAllIn: false,   //购物车是否全选
  },

})
