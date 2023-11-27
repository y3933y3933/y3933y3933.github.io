"use strict";(self.webpackChunkminimal_blog=self.webpackChunkminimal_blog||[]).push([[711],{4765:function(e,t,n){n.d(t,{F:function(){return u},Z:function(){return g}});var a=n(7294),r=n(8733),l=n(795),i=n(8377),c=n(6799),o=n(8871);var m=e=>{let{post:t}=e;return null};const s=["16px","8px","4px"].map((e=>`rgba(0, 0, 0, 0.1) 0px ${e} ${e} 0px`));var p=e=>{let{data:{post:t},children:n}=e;return(0,r.tZ)(i.Z,null,(0,r.tZ)(l.X6,{as:"h1",variant:"styles.h1"},t.title),(0,r.tZ)("p",{sx:{color:"secondary",mt:3,a:{color:"secondary"},fontSize:[1,1,2]}},(0,r.tZ)("time",null,t.date),t.tags&&(0,r.tZ)(a.Fragment,null," — ",(0,r.tZ)(c.Z,{tags:t.tags})),t.timeToRead&&" — ",t.timeToRead&&(0,r.tZ)("span",null,t.timeToRead," min read")),(0,r.tZ)("section",{sx:{my:5,".gatsby-resp-image-wrapper":{my:[4,4,5],borderRadius:"4px",boxShadow:s.join(", "),".gatsby-resp-image-image":{borderRadius:"4px"}},variant:"layout.content"}},n),(0,r.tZ)(m,{post:t}))};const u=e=>{var t,n,a;let{data:{post:l}}=e;return(0,r.tZ)(o.Z,{title:l.title,description:l.description?l.description:l.excerpt,image:l.banner?null===(t=l.banner)||void 0===t||null===(n=t.childImageSharp)||void 0===n||null===(a=n.resize)||void 0===a?void 0:a.src:void 0,pathname:l.slug,canonicalUrl:l.canonicalUrl})};function g(e){let{...t}=e;return a.createElement(p,t)}},6799:function(e,t,n){var a=n(8733),r=n(7294),l=n(1883),i=n(3494),c=n(9706);t.Z=e=>{let{tags:t}=e;const{tagsPath:n,basePath:o}=(0,i.Z)();return(0,a.tZ)(r.Fragment,null,t.map(((e,t)=>(0,a.tZ)(r.Fragment,{key:e.slug},!!t&&", ",(0,a.tZ)(l.Link,{sx:e=>{var t;return{...null===(t=e.styles)||void 0===t?void 0:t.a}},to:(0,c.Z)(`/${o}/${n}/${e.slug}`)},e.name)))))}},8871:function(e,t,n){var a=n(7294),r=n(1883),l=n(4232);t.Z=e=>{let{title:t="",description:n="",pathname:i="",image:c="",children:o=null,canonicalUrl:m=""}=e;const s=(0,l.Z)(),{siteTitle:p,siteTitleAlt:u,siteUrl:g,siteDescription:d,siteImage:h,author:E,siteLanguage:f}=s,y={title:t?`${t} | ${p}`:u,description:n||d,url:`${g}${i||""}`,image:`${g}${c||h}`};return a.createElement(a.Fragment,null,a.createElement("html",{lang:f}),a.createElement("title",null,y.title),a.createElement("meta",{name:"description",content:y.description}),a.createElement("meta",{name:"image",content:y.image}),a.createElement("meta",{property:"og:title",content:y.title}),a.createElement("meta",{property:"og:url",content:y.url}),a.createElement("meta",{property:"og:description",content:y.description}),a.createElement("meta",{property:"og:image",content:y.image}),a.createElement("meta",{property:"og:type",content:"website"}),a.createElement("meta",{property:"og:image:alt",content:y.description}),a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),a.createElement("meta",{name:"twitter:title",content:y.title}),a.createElement("meta",{name:"twitter:url",content:y.url}),a.createElement("meta",{name:"twitter:description",content:y.description}),a.createElement("meta",{name:"twitter:image",content:y.image}),a.createElement("meta",{name:"twitter:image:alt",content:y.description}),a.createElement("meta",{name:"twitter:creator",content:E}),a.createElement("meta",{name:"gatsby-theme",content:"@lekoarts/gatsby-theme-minimal-blog"}),a.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:(0,r.withPrefix)("/favicon-32x32.png")}),a.createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:(0,r.withPrefix)("/favicon-16x16.png")}),a.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:(0,r.withPrefix)("/apple-touch-icon.png")}),m?a.createElement("link",{rel:"canonical",href:m}):null,o)}},9472:function(e,t,n){n.r(t),n.d(t,{Head:function(){return c.F},default:function(){return o}});var a=n(7294),r=n(1151);function l(e){const t=Object.assign({h2:"h2",p:"p",a:"a",pre:"pre",code:"code",img:"img",h3:"h3"},(0,r.ah)(),e.components);return a.createElement(a.Fragment,null,a.createElement(t.h2,null,"問題描述"),"\n",a.createElement(t.p,null,"在 Vite + React + TypeScript 項目中，我們經常需要在 tsconfig.json 中配置",a.createElement(t.a,{href:"(https://www.typescriptlang.org/tsconfig#paths)"},"路徑別名"),"，以方便我們在代碼中使用絕對路徑引入模組。例如："),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-json"},'{\n  "compilerOptions": {\n    "paths": {\n      "@layouts/*": ["./src/layouts/*"]\n    }\n  }\n}\n')),"\n",a.createElement(t.p,null,"上述設定中，我們告訴 TypeScript，當我們在代碼中使用類似 ",a.createElement(t.code,null,'import Header from "@layouts/Header"')," 的絕對路徑時，應該從 ./src/layouts/Header 尋找對應的模塊。然而，在 Vite 環境下，這樣的設定可能會導致報錯，因為 Vite 默認不支持這樣的路徑別名解析。"),"\n",a.createElement(t.img,{src:"https://github.com/y3933y3933/notes/assets/28300286/bd167592-47b8-461e-8399-6ce2063b1973",alt:"error"}),"\n",a.createElement(t.h2,null,"解決方案：安裝 ",a.createElement(t.a,{href:"https://github.com/aleclarson/vite-tsconfig-paths"},a.createElement(t.code,null,"vite-tsconfig-paths"))," plugin"),"\n",a.createElement(t.h3,null,"安裝plugin"),"\n",a.createElement(t.p,null,"將vite-tsconfig-paths 安裝為開發依賴"),"\n",a.createElement(t.pre,null,a.createElement(t.code,null,"npm install --save-dev vite-tsconfig-paths\n")),"\n",a.createElement(t.h3,null,"設定vite-config.ts"),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-ts"},"import { defineConfig } from 'vite';\nimport tsconfigPaths from 'vite-tsconfig-paths';\n\nexport default defineConfig({\n  plugins: [tsconfigPaths()],\n});\n\n")),"\n",a.createElement(t.p,null,"通過這樣的設定，plugin會自動讀取 TypeScript 的配置，將路徑別名同步到 Vite 中，從而解決了在 Vite 環境中使用 tsconfig paths 時的問題。"))}var i=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?a.createElement(t,e,a.createElement(l,e)):l(e)},c=n(4765);function o(e){return a.createElement(c.Z,e,a.createElement(i,e))}c.Z}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-post-query-tsx-content-file-path-content-posts-vite-tsconfig-paths-index-mdx-be6e4d080e5f02003e16.js.map