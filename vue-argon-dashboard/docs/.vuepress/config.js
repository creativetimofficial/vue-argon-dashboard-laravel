const markdownParser = require('./markdownParser')
const path = require('path');

module.exports = {
  base: process.env.NODE_ENV ? '/documentation/' : '',
  title: 'Vue Argon Dashboard Laravel by Creative Tim & UPDIVISION',
  markdown: {
    config: markdownParser
  },
  extendMarkdown: markdownParser,
  configureWebpack: (config, isServer) => {
    config.resolve.alias['@'] = path.resolve(__dirname, '../../src')
    config.resolve.alias['src'] = path.resolve(__dirname, '../../src')
    config.resolve.alias['assets'] = path.resolve(__dirname, '../../src/assets')
    config.resolve.alias['@theme'] = path.resolve(__dirname, '../node_modules/@vuepress/theme-default')
  },
  chainWebpack: config => {
    config.module
      .rule('vue')
      .use('vue-loader')
      .tap(options => {
          options.optimizeSSR = false
          return options;
        }
      )
  },
  head: [
    ['link', { rel: 'stylesheet', href: "https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700" }],
    ['link', { rel: 'stylesheet', href: "https://use.fontawesome.com/releases/v5.6.3/css/all.css", integrity: 'sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/', crossorigin: 'anonymous' }],
    ['meta ', { name: 'keywords', content:'creative tim, updivision, html dashboard, laravel, vue, vuejs, json:api, json, api, html css dashboard laravel, vue argon dashboard laravel, vue argon dashboard, argon admin, vue dashboard, vue admin, web dashboard, bootstrap 4 dashboard laravel, bootstrap 4, css3 dashboard, bootstrap 4 admin laravel, argon dashboard bootstrap 4 laravel, frontend, responsive bootstrap 4 dashboard, argon dashboard, argon laravel bootstrap 4 dashboard' }],
    ['meta ', { name: 'description', content:'Vue Argon Dashboard Laravel comes with an API-powered Laravel backend, a Vue frontend and an awesome-looking Argon design.' }],
    ['meta ', { itemprop: 'name', content:'Vue Argon Dashboard Laravel by Creative Tim & UPDIVISION' }],
    ['meta ', { itemprop: 'description', content:'Vue Argon Dashboard Laravel comes with an API-powered Laravel backend, a Vue frontend and an awesome-looking Argon design.' }],
    ['meta ', { itemprop: 'image', content:'https://s3.amazonaws.com/creativetim_bucket/products/352/original/opt_ad_vue_laravel_thumbnail.jpg' }],
    ['meta ', { name: 'twitter:card', content:'product' }],
    ['meta ', { name: 'twitter:site', content:'@creativetim' }],
    ['meta ', { name: 'twitter:title', content:'Vue Argon Dashboard Laravel by Creative Tim & UPDIVISION' }],
    ['meta ', { name: 'twitter:description', content:'Vue Argon Dashboard Laravel comes with an API-powered Laravel backend, a Vue frontend and an awesome-looking Argon design.' }],
    ['meta ', { name: 'twitter:creator', content:'@creativetim' }],
    ['meta ', { name: 'twitter:image', content:'https://s3.amazonaws.com/creativetim_bucket/products/352/original/opt_ad_vue_laravel_thumbnail.jpg' }],
    ['meta ', { property: 'fb:app_id', content:'655968634437471' }],
    ['meta ', { property: 'og:title', content:'Vue Argon Dashboard Laravel by Creative Tim & UPDIVISION' }],
    ['meta ', { property: 'og:type', content:'article' }],
    ['meta ', { property: 'og:url', content:'https://www.creative-tim.com/live/vue-argon-dashboard-laravel' }],
    ['meta ', { property: 'og:image', content:'https://s3.amazonaws.com/creativetim_bucket/products/352/original/opt_ad_vue_laravel_thumbnail.jpg' }],
    ['meta ', { property: 'og:description', content:'Vue Argon Dashboard Laravel comes with an API-powered Laravel backend, a Vue frontend and an awesome-looking Argon design.' }],
    ['meta ', { property: 'og:site_name', content:'Creative Tim' }],
    ['script', {}, `
       (function(a,s,y,n,c,h,i,d,e){s.className+=' '+y;h.start=1*new Date;
       h.end=i=function(){s.className=s.className.replace(RegExp(' ?'+y),'')};
       (a[n]=a[n]||[]).hide=h;setTimeout(function(){i();h.end=null},c);h.timeout=c;
       })(window,document.documentElement,'async-hide','dataLayer',4000,
       {'GTM-K9BGS8K':true});
    `],
    ['script', {}, `(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
        ga('create', 'UA-46172202-22', 'auto', {allowLinker: true});
        ga('set', 'anonymizeIp', true);
        ga('require', 'GTM-K9BGS8K');
        ga('require', 'displayfeatures');
        ga('require', 'linker');
        ga('linker:autoLink', ["2checkout.com","avangate.com"]);
      `],
    ['script', {}, `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-NKDMSK6');
      `],
  ],
  plugins: [
    ['@vuepress/search', {
      searchMaxSuggestions: 10
    }]
  ],
  themeConfig: {
    sidebarDepth: 1,

    sidebar: [{
      title: 'Getting Started',
      collapsable: false,
      children: [
        '/laravel-example-pages/download',
        '/',
        '/laravel-example-pages/api-installation',
        '/licence',
        '/contents',
        '/build-tools'
      ]
    },
    {
      title: 'Vue Laravel Examples',
      collapsable: false,
      children: [
        '/laravel-example-pages/login',
        '/laravel-example-pages/register',
        '/laravel-example-pages/profile',
      ]
    },
    {
      title: 'Foundation',
      collapsable: false,
      children: [
        '/foundation/colors',
        '/foundation/grid',
        '/foundation/typography',
        '/foundation/icons',
      ]
    },
    {
      title: 'Components',
      collapsable: false,
      children: [
        '/components/alerts',
        '/components/badges',
        '/components/buttons',
        '/components/dropdowns',
        '/components/forms',
        '/components/modal',
        '/components/tabs',
        '/components/navbar',
        '/components/pagination',
        '/components/popovers',
        '/components/progress',
        '/components/tooltips',
      ]
    },
    {
      title: 'Plugins',
      collapsable: false,
      children: [
        '/components/plugin_datepicker',
        '/components/plugin_charts',
        '/components/plugin_slider',
      ]
    }
    ],
    nav: [
      { text: 'Home', link: '/' },
    ]
  }
};
