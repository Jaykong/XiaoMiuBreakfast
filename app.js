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
      "myFruits": [[
        {
          "name": "肉包",
          "introduce": "1.5元\/个",
          "id": 1,
          "num": 1,
          "stock": 1,
          "category": "面点类",
          "price": 1.5,
          "url": " "
        },
        {
          "name": "芝麻包",
          "introduce": "1元\/个",
          "id": 2,
          "num": 1,
          "stock": 1,
          "category": "面点类",
          "price": 1,
          "url": " "
        },
        {
          "name": "三鲜包",
          "introduce": "2元\/个",
          "id": 3,
          "num": 1,
          "stock": 1,
          "category": "面点类",
          "price": 2,
          "url": " "
        },
        {
          "name": "花卷\/馒头",
          "introduce": "1.5元\/两个",
          "id": 4,
          "num": 1,
          "stock": 1,
          "category": "面点类",
          "price": 1.5,
          "url": " "
        },
        {
          "name": "红糖发糕",
          "introduce": "2.5元\/块",
          "id": 5,
          "num": 1,
          "stock": 1,
          "category": "面点类",
          "price": 2.5,
          "url": " "
        }
      ],
      [
        {
          "name": "油条",
          "introduce": "1元\/根",
          "id": 6,
          "num": 1,
          "stock": 1,
          "category": "油炸类",
          "price": 1,
          "url": " "
        },
        {
          "name": "煎饺",
          "introduce": "3元\/一份（四个）",
          "id": 7,
          "num": 1,
          "stock": 1,
          "category": "油炸类",
          "price": 3,
          "url": " "
        },
        {
          "name": "糖果",
          "introduce": "1元\/个",
          "id": 8,
          "num": 1,
          "stock": 1,
          "category": "油炸类",
          "price": 1,
          "url": " "
        },
        {
          "name": "麻园",
          "introduce": "1.5\/个",
          "id": 9,
          "num": 1,
          "stock": 1,
          "category": "油炸类",
          "price": 1.5,
          "url": " "
        }
      ],
      [
        {
          "name": "拌粉\/拌面",
          "introduce": "3元\/碗",
          "id": 10,
          "num": 1,
          "stock": 1,
          "category": "粉面类",
          "price": 3,
          "url": " "
        },
        {
          "name": "牛肉拌粉",
          "introduce": "8元\/碗",
          "id": 11,
          "num": 1,
          "stock": 1,
          "category": "粉面类",
          "price": 8,
          "url": " "
        },
        {
          "name": "肥肠拌粉",
          "introduce": "8元\/碗",
          "id": 12,
          "num": 1,
          "stock": 1,
          "category": "粉面类",
          "price": 8,
          "url": " "
        },
        {
          "name": "牛肉汤粉",
          "introduce": "10元\/碗",
          "id": 13,
          "num": 1,
          "stock": 1,
          "category": "粉面类",
          "price": 10,
          "url": " "
        },
        {
          "name": "肥肠汤粉",
          "introduce": "10元\/碗",
          "id": 14,
          "num": 1,
          "stock": 1,
          "category": "粉面类",
          "price": 10,
          "url": " "
        },
        {
          "name": "猪血汤粉",
          "introduce": "5元\/碗",
          "id": 15,
          "num": 1,
          "stock": 1,
          "category": "粉面类",
          "price": 5,
          "url": " "
        },
        {
          "name": "排骨汤粉",
          "introduce": "8元\/碗",
          "id": 16,
          "num": 1,
          "stock": 1,
          "category": "粉面类",
          "price": 8,
          "url": " "
        }
      ],
      [
        {
          "name": "红薯",
          "introduce": "3元\/个",
          "id": 17,
          "num": 1,
          "stock": 1,
          "category": "粗粮类",
          "price": 3,
          "url": " "
        },
        {
          "name": "玉米",
          "introduce": "3元\/根",
          "id": 18,
          "num": 1,
          "stock": 1,
          "category": "粗粮类",
          "price": 3,
          "url": " "
        }
      ],
      [
        {
          "name": "茶蛋",
          "introduce": "1.5元\/个",
          "id": 19,
          "num": 1,
          "stock": 1,
          "category": "蛋类",
          "price": 1.5,
          "url": " "
        },
        {
          "name": "卤蛋",
          "introduce": "1.5元\/个",
          "id": 20,
          "num": 1,
          "stock": 1,
          "category": "蛋类",
          "price": 1.5,
          "url": " "
        },
        {
          "name": "水煮蛋",
          "introduce": "1.5元\/个",
          "id": 21,
          "num": 1,
          "stock": 1,
          "category": "蛋类",
          "price": 1.5,
          "url": " "
        }
      ],
      [
        {
          "name": "红豆汤",
          "introduce": "3元\/碗",
          "id": 22,
          "num": 1,
          "stock": 1,
          "category": "甜品类",
          "price": 3,
          "url": " "
        },
        {
          "name": "白木耳莲子汤",
          "introduce": "3元\/碗",
          "id": 23,
          "num": 1,
          "stock": 1,
          "category": "甜品类",
          "price": 3,
          "url": " "
        },
        {
          "name": "五谷豆浆",
          "introduce": "3元\/碗",
          "id": 24,
          "num": 1,
          "stock": 1,
          "category": "甜品类",
          "price": 3,
          "url": " "
        }
      ],
      [
        {
          "name": "鸡蛋肉饼汤",
          "introduce": "3.5元\/份",
          "id": 25,
          "num": 1,
          "stock": 1,
          "category": "煨汤类",
          "price": 3.5,
          "url": " "
        },
        {
          "name": "香菇肉饼汤",
          "introduce": "3.5元\/份",
          "id": 26,
          "num": 1,
          "stock": 1,
          "category": "煨汤类",
          "price": 3.5,
          "url": " "
        },
        {
          "name": "墨鱼肉饼汤",
          "introduce": "3.5元\/份",
          "id": 27,
          "num": 1,
          "stock": 1,
          "category": "煨汤类",
          "price": 3.5,
          "url": " "
        },
        {
          "name": "桂圆肉饼汤",
          "introduce": "3.5元\/份",
          "id": 28,
          "num": 1,
          "stock": 1,
          "category": "煨汤类",
          "price": 3.5,
          "url": " "
        },
        {
          "name": "海带排骨汤",
          "introduce": "3.5元\/份",
          "id": 29,
          "num": 1,
          "stock": 1,
          "category": "煨汤类",
          "price": 3.5,
          "url": " "
        }
      ],
      [
        {
          "name": "养生糖醋生姜",
          "introduce": "2元\/份",
          "id": 30,
          "num": 1,
          "stock": 1,
          "category": "凉菜类",
          "price": 2,
          "url": " "
        },
        {
          "name": "油炸花生米",
          "introduce": "2元\/份",
          "id": 31,
          "num": 1,
          "stock": 1,
          "category": "凉菜类",
          "price": 2,
          "url": " "
        },
        {
          "name": "酸辣黄瓜",
          "introduce": "2元\/份",
          "id": 32,
          "num": 1,
          "stock": 1,
          "category": "凉菜类",
          "price": 2,
          "url": " "
        }
      ],
      [
        {
          "name": "白粥",
          "introduce": "1.5元\/碗",
          "id": 33,
          "num": 1,
          "stock": 1,
          "category": "稀饭类",
          "price": 1.5,
          "url": " "
        },
        {
          "name": "八宝粥\/小米粥",
          "introduce": "3元\/碗",
          "id": 34,
          "num": 1,
          "stock": 1,
          "category": "稀饭类",
          "price": 3,
          "url": " "
        },
        {
          "name": "皮蛋瘦肉粥",
          "introduce": "5元\/碗",
          "id": 35,
          "num": 1,
          "stock": 1,
          "category": "稀饭类",
          "price": 5,
          "url": " "
        }
      ],
      [
        {
          "name": "A套餐：牛肉（肥肠）拌粉+汤",
          "introduce": "10元\/份",
          "id": 36,
          "num": 1,
          "stock": 1,
          "category": "套餐类",
          "price": 10,
          "url": " "
        },
        {
          "name": "B套餐：两肉包+鸡蛋+红薯（玉米）+汤",
          "introduce": "10元\/份",
          "id": 37,
          "num": 1,
          "stock": 1,
          "category": "套餐类",
          "price": 10,
          "url": " "
        },
        {
          "name": "C套餐：排骨（肥肠）汤粉+肉包+油条",
          "introduce": "10元\/份",
          "id": 38,
          "num": 1,
          "stock": 1,
          "category": "套餐类",
          "price": 10,
          "url": " "
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
