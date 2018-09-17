const { mysql } = require('../qcloud')
module.exports = async ctx => {
  var inserted = await mysql('orderInfo').insert({ id: 5, foods: '{"food1":3,"food2":4}' })

  var json = await mysql("orderInfo").select('*')
  ctx.state.data = {
    msg: json
  }
}