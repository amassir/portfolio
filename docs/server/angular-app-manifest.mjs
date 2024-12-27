
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/my-portfolio-angular/home/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/my-portfolio-angular/home/home",
    "route": "/my-portfolio-angular/home"
  },
  {
    "renderMode": 2,
    "route": "/my-portfolio-angular/home/home"
  },
  {
    "renderMode": 2,
    "route": "/my-portfolio-angular/home/portfolio"
  },
  {
    "renderMode": 2,
    "route": "/my-portfolio-angular/home/resume"
  },
  {
    "renderMode": 2,
    "route": "/my-portfolio-angular/home/contact"
  },
  {
    "renderMode": 2,
    "route": "/my-portfolio-angular/home/**"
  }
],
  assets: {
    'index.csr.html': {size: 4935, hash: '44812bcf4a98a7c3b3f8ee1fd4d2e675c447623b8c75b0b95f6e6d8387d1899d', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1034, hash: 'ccce16eb79dd68c270e25385dd6e17e719048ce8587cf609f19d80f27571730f', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'home/index.html': {size: 12043, hash: '0885987323c094509360176e32f87481d5f78efbd2844d524210c44920aa0365', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 13594, hash: '64e4f4e21be59e8af35ab244ae4625b6c0dc2d3b2d802434e8ab20cbe28fe624', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'portfolio/index.html': {size: 27663, hash: '9e985256bc7d617b12da07ebced94c10f18bea9aa06a4ecbc34886556566d971', text: () => import('./assets-chunks/portfolio_index_html.mjs').then(m => m.default)},
    'resume/index.html': {size: 26093, hash: 'a5dd932844b2016bb3c7c0e9069d86d3a8fd36a2a9f99d8c2f42c62fe48cce7b', text: () => import('./assets-chunks/resume_index_html.mjs').then(m => m.default)},
    'styles-TVQGSK22.css': {size: 250447, hash: '8GQrmKHGtMc', text: () => import('./assets-chunks/styles-TVQGSK22_css.mjs').then(m => m.default)}
  },
};
