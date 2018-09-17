const { mysql } = require('../qcloud')
module.exports = async ctx => {
 
  var json = await mysql("orderInfo").select('*')
  ctx.state.data = {
    msg: json
  }
}