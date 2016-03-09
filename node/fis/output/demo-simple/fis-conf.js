
fis.match('*.{png,js,css}', {
  release: '/static/$0'
});

//清除其他配置，只剩下如下配置
fis.match('*.{js,css,png}', {
  useHash: true
});

fis.match('*.js', {
  // fis-optimizer-uglify-js 插件进行压缩，已内置
  optimizer: fis.plugin('uglify-js')
});

// fis-parser-sass
fis.match('*.sass', {
  parser: fis.plugin('sass'),
  rExt: '.css'
});

fis.match('*.css', {
  // fis-optimizer-clean-css 插件进行压缩，已内置
  optimizer: fis.plugin('clean-css')
});

fis.match('*.{png,jpg}', {
  release: '/static/img/$1$2'
  // fis-optimizer-png-compressor 插件进行压缩，已内置
  optimizer: fis.plugin('png-compressor')
});

// 启用 fis-spriter-csssprites 插件
fis.match('::package', {
  spriter: fis.plugin('csssprites')
})

// 对 CSS 进行图片合并
fis.match('*.css', {
  useSprite: true
});

//配置useMap让html加入manifest.json
fis.match('*.html',{
  useMap: true
})

//区分开发环境与调试环境  fis3 release debug
fis.media('debug').match('*.{js,css,png}', {
  useHash: false,
  useSprite: false,
  optimizer: null
})
