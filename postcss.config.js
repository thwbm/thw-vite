module.exports = {
  plugins: {
    // autoprefixer: {
    //   browsers: ['Android >= 4.0', 'iOS >= 7'],
    // },
    'postcss-pxtorem': {
      rootValue: 100, // 计算比例
      propList: ['*'],
      selectorBlackList: ['van'], // 过滤数组中存在样式名字开头的转化（.van-...{font-size:30px}）
    },
  },
}

// 可以在package.json中添加
// "postcss": {
//   "plugins": {
//     "postcss-pxtorem": {
//       "rootValue": 100,
//       "propList": ["*"],
//       "selectorBlackList": ["van"]
//     }
//   }
// }
