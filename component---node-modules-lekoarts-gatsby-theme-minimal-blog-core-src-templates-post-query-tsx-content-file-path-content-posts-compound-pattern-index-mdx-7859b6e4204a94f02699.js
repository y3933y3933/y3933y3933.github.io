"use strict";(self.webpackChunkminimal_blog=self.webpackChunkminimal_blog||[]).push([[893],{4765:function(e,n,t){t.d(n,{F:function(){return i},Z:function(){return s}});var l=t(7294),a=t(8733),r=t(795),c=t(8377),o=t(6799),d=t(8871);var m=e=>{let{post:n}=e;return null};const u=["16px","8px","4px"].map((e=>`rgba(0, 0, 0, 0.1) 0px ${e} ${e} 0px`));var p=e=>{let{data:{post:n},children:t}=e;return(0,a.tZ)(c.Z,null,(0,a.tZ)(r.X6,{as:"h1",variant:"styles.h1"},n.title),(0,a.tZ)("p",{sx:{color:"secondary",mt:3,a:{color:"secondary"},fontSize:[1,1,2]}},(0,a.tZ)("time",null,n.date),n.tags&&(0,a.tZ)(l.Fragment,null," — ",(0,a.tZ)(o.Z,{tags:n.tags})),n.timeToRead&&" — ",n.timeToRead&&(0,a.tZ)("span",null,n.timeToRead," min read")),(0,a.tZ)("section",{sx:{my:5,".gatsby-resp-image-wrapper":{my:[4,4,5],borderRadius:"4px",boxShadow:u.join(", "),".gatsby-resp-image-image":{borderRadius:"4px"}},variant:"layout.content"}},t),(0,a.tZ)(m,{post:n}))};const i=e=>{var n,t,l;let{data:{post:r}}=e;return(0,a.tZ)(d.Z,{title:r.title,description:r.description?r.description:r.excerpt,image:r.banner?null===(n=r.banner)||void 0===n||null===(t=n.childImageSharp)||void 0===t||null===(l=t.resize)||void 0===l?void 0:l.src:void 0,pathname:r.slug,canonicalUrl:r.canonicalUrl})};function s(e){let{...n}=e;return l.createElement(p,n)}},6799:function(e,n,t){var l=t(8733),a=t(7294),r=t(1883),c=t(3494),o=t(9706);n.Z=e=>{let{tags:n}=e;const{tagsPath:t,basePath:d}=(0,c.Z)();return(0,l.tZ)(a.Fragment,null,n.map(((e,n)=>(0,l.tZ)(a.Fragment,{key:e.slug},!!n&&", ",(0,l.tZ)(r.Link,{sx:e=>{var n;return{...null===(n=e.styles)||void 0===n?void 0:n.a}},to:(0,o.Z)(`/${d}/${t}/${e.slug}`)},e.name)))))}},8871:function(e,n,t){var l=t(7294),a=t(1883),r=t(4232);n.Z=e=>{let{title:n="",description:t="",pathname:c="",image:o="",children:d=null,canonicalUrl:m=""}=e;const u=(0,r.Z)(),{siteTitle:p,siteTitleAlt:i,siteUrl:s,siteDescription:E,siteImage:g,author:x,siteLanguage:h}=u,f={title:n?`${n} | ${p}`:i,description:t||E,url:`${s}${c||""}`,image:`${s}${o||g}`};return l.createElement(l.Fragment,null,l.createElement("html",{lang:h}),l.createElement("title",null,f.title),l.createElement("meta",{name:"description",content:f.description}),l.createElement("meta",{name:"image",content:f.image}),l.createElement("meta",{property:"og:title",content:f.title}),l.createElement("meta",{property:"og:url",content:f.url}),l.createElement("meta",{property:"og:description",content:f.description}),l.createElement("meta",{property:"og:image",content:f.image}),l.createElement("meta",{property:"og:type",content:"website"}),l.createElement("meta",{property:"og:image:alt",content:f.description}),l.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),l.createElement("meta",{name:"twitter:title",content:f.title}),l.createElement("meta",{name:"twitter:url",content:f.url}),l.createElement("meta",{name:"twitter:description",content:f.description}),l.createElement("meta",{name:"twitter:image",content:f.image}),l.createElement("meta",{name:"twitter:image:alt",content:f.description}),l.createElement("meta",{name:"twitter:creator",content:x}),l.createElement("meta",{name:"gatsby-theme",content:"@lekoarts/gatsby-theme-minimal-blog"}),l.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:(0,a.withPrefix)("/favicon-32x32.png")}),l.createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:(0,a.withPrefix)("/favicon-16x16.png")}),l.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:(0,a.withPrefix)("/apple-touch-icon.png")}),m?l.createElement("link",{rel:"canonical",href:m}):null,d)}},836:function(e,n,t){t.r(n),t.d(n,{Head:function(){return o.F},default:function(){return d}});var l=t(7294),a=t(1151);function r(e){const n=Object.assign({h2:"h2",p:"p",code:"code",strong:"strong",pre:"pre",img:"img",a:"a",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",ol:"ol",li:"li",ul:"ul"},(0,a.ah)(),e.components);return l.createElement(l.Fragment,null,l.createElement(n.h2,null,"什麼是 Compound Pattern?"),"\n",l.createElement(n.p,null,l.createElement(n.code,null,"Compound Pattern")," 是一種 React 的元件設計模式。"),"\n",l.createElement(n.p,null,l.createElement(n.strong,null,"Compound"),"指的是組合，意思是由兩個或以上的元件所組合而成的元件，且會有一個主要的元件(通常是",l.createElement(n.strong,null,"parent component"),")，其它元件如果不在主元件內使用就無效。"),"\n",l.createElement(n.p,null,"常見的例子如：Select、Expand 元件"),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-jsx"},"<Select>\n  <Option>選項1</Option>\n  <Option>選項2</Option>\n<Select>\n\n")),"\n",l.createElement(n.h2,null,"Expand 元件設計"),"\n",l.createElement(n.p,null,"Expand 元件是一種可展開的元件，如圖所示："),"\n",l.createElement(n.p,null,l.createElement(n.img,{src:"https://github.com/y3933y3933/blog/assets/28300286/1b17d4e4-3d7f-48e5-b8ca-ed85a6f0c201",alt:"expand"}),"\n(圖片來源為",l.createElement(n.a,{href:"https://ui.shadcn.com/docs/components/accordion"},"shadcn.ui"),")"),"\n",l.createElement(n.p,null,"根據結構，我們可以將其簡單地切分為 3 個元件："),"\n",l.createElement(n.table,null,l.createElement(n.thead,null,l.createElement(n.tr,null,l.createElement(n.th,null,"元件"),l.createElement(n.th,null,"說明"))),l.createElement(n.tbody,null,l.createElement(n.tr,null,l.createElement(n.td,null,"Expand"),l.createElement(n.td,null,"Parent Component")),l.createElement(n.tr,null,l.createElement(n.td,null,"Header"),l.createElement(n.td,null,"表頭，固定會顯示")),l.createElement(n.tr,null,l.createElement(n.td,null,"Body"),l.createElement(n.td,null,"依照展開與否顯示的內容")))),"\n",l.createElement(n.p,null,"預期結果："),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-jsx"},"<Expand>\n  <Expand.Header> 表頭內容</Expand.Header>\n  <Expand.Icon />\n  <Expand.Body> Body內容</Expand.Body>\n</Expand>\n")),"\n",l.createElement(n.h2,null,"實作技巧一：使用",l.createElement(n.code,null,"useContext"),"傳遞state"),"\n",l.createElement(n.p,null,"使用 Expand 元件，我們會需要一個 state 跟更新 state 的 function，用來控制 body 內容是否顯示，這裡命名為",l.createElement(n.code,null,"expand"),"與",l.createElement(n.code,null,"toggle"),"，因為需要傳遞給其他子元件使用，可以用",l.createElement(n.a,{href:"https://react.dev/reference/react/useContext"},l.createElement(n.code,null,"useContext")),"來實作。"),"\n",l.createElement(n.ol,null,"\n",l.createElement(n.li,null,"透過",l.createElement(n.code,null,"createContext"),"建立一個context"),"\n",l.createElement(n.li,null,"使用",l.createElement(n.code,null,"context.Provider")," 傳遞state"),"\n"),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-jsx"},'import React, { createContext, useState } from "react";\n\nconst ExpandContext = createContext();\n\nconst Expand = ({ children }) => {\n  const [expanded, setExpanded] = useState(false);\n  const toggle = setExpanded((prevExpanded) => !prevExpanded);\n  const value = { expanded, toggle };\n  return (\n    <ExpandContext.Provider value={value}>{children}</ExpandContext.Provider>\n  );\n};\n\nconst Header = ({ children }) => {\n  const { toggle } = useContext(ExpandContext);\n  return <div onClick={toggle}>{children}</div>;\n};\n\nconst Body = ({ children }) => {\n  const { expanded } = useContext(ExpandContext);\n  return expanded ? children : null;\n};\n\nExpand.Header = Header;\nExpand.Body = Body;\n\nexport default Expand;\n\n')),"\n",l.createElement(n.h2,null,"實作技巧二：使用",l.createElement(n.code,null,"useCallback"),"＆",l.createElement(n.code,null,"useMemo"),"避免重複渲染問題"),"\n",l.createElement(n.p,null,"上述程式碼執行後，會出現以下錯誤：\n",l.createElement(n.img,{src:"https://github.com/y3933y3933/notes/assets/28300286/5b435b2a-7966-487f-95b3-63db34c3cfb5",alt:"error"})),"\n",l.createElement(n.p,null,"原因是我們所傳遞的",l.createElement(n.code,null,"value"),"跟",l.createElement(n.code,null,"toggle"),"型別是",l.createElement(n.code,null,"object"),"跟",l.createElement(n.code,null,"function"),"，React re-render時會認為其refernece不同，導致子元件也會不停的被re-render。"),"\n",l.createElement(n.p,null,"解決辦法為："),"\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,"toggle加上",l.createElement(n.code,null,"uesCallback"),"，dependencies設為空陣列，確保初始化後toggle就不會再被改變"),"\n",l.createElement(n.li,null,"value加上",l.createElement(n.code,null,"uesMemo"),"，dependencies帶入",l.createElement(n.code,null,"expanded"),"及",l.createElement(n.code,null,"toggle"),"，當相依值有改變，",l.createElement(n.code,null,"value"),"才會跟著變。"),"\n"),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-jsx"},"const toggle = useCallback(() => {\n    setExpanded((prevExpanded) => !prevExpanded);\n  }, []);\nconst value = useMemo(() => ({ expanded, toggle }), [expanded, toggle]);\n")),"\n",l.createElement(n.h2,null,"實用技巧三：透過",l.createElement(n.code,null,"useRef"),"解決",l.createElement(n.code,null,"useEffect"),"第一次mount時就會觸發"),"\n",l.createElement(n.p,null,"元件基本功能已完成，但我們還想加上一個",l.createElement(n.code,null,"onExpand"),"參數，當",l.createElement(n.code,null,"expand"),"狀態改變時，可以傳入處理的事件。\n我們改寫一下Expand，加上",l.createElement(n.code,null,"onExpand")," prop跟 ",l.createElement(n.code,null,"uesEffect"),"的處理："),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-jsx",highlight:"1,8-10"},"const Expand = ({ children, onExpand = () => {} }) => {\n  const [expanded, setExpanded] = useState(false);\n  const toggle = useCallback(() => {\n    setExpanded((prevExpanded) => !prevExpanded);\n  }, []);\n  const value = useMemo(() => ({ expanded, toggle }), [expanded, toggle]);\n\n  useEffect(() => {\n    onExpand(expanded);\n  }, [expanded]);\n  return (\n    <ExpandContext.Provider value={value}>{children}</ExpandContext.Provider>\n  );\n};\n")),"\n",l.createElement(n.p,null,"但這裡會遇到一個問題，我們希望在元件mount時不要觸發",l.createElement(n.code,null,"onExpand"),"，但",l.createElement(n.code,null,"useEffect"),"預設會在mount的時候被觸發。"),"\n",l.createElement(n.p,null,"解決辦法為透過",l.createElement(n.code,null,"useRef"),"加入一個flag判斷，",l.createElement(n.code,null,"useRef"),"是可以讓元件記住某些資訊，可以re-render時該值不會被改變，我們可以用它來紀錄是否為mount的時機點："),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-jsx",highlight:"8,11-14"},"const Expand = ({ children, onExpand = () => {} }) => {\n  const [expanded, setExpanded] = useState(false);\n  const toggle = useCallback(() => {\n    setExpanded((prevExpanded) => !prevExpanded);\n  }, []);\n  const value = useMemo(() => ({ expanded, toggle }), [expanded, toggle]);\n\n  const isMounted = useRef(true);\n\n  useEffect(() => {\n    if (!isMounted.current) {\n      onExpand(expanded);\n    }\n    isMounted.current = false;\n  }, [expanded]);\n  return (\n    <ExpandContext.Provider value={value}>{children}</ExpandContext.Provider>\n  );\n};\n\n")),"\n",l.createElement(n.h2,null,"Summary"),"\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,l.createElement(n.code,null,"Compound Pattern")," 是一種元件設計模式，是指由一個主元件跟其他元件組合而成的元件。"),"\n",l.createElement(n.li,null,l.createElement(n.code,null,"Compound Pattern")," 常搭配",l.createElement(n.code,null,"useContext")),"\n"),"\n",l.createElement(n.h2,null,"參考資料"),"\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,l.createElement(n.a,{href:"https://www.patterns.dev/react/compound-pattern"},"pattern.dev")),"\n"))}var c=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,a.ah)(),e.components);return n?l.createElement(n,e,l.createElement(r,e)):r(e)},o=t(4765);function d(e){return l.createElement(o.Z,e,l.createElement(c,e))}o.Z}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-post-query-tsx-content-file-path-content-posts-compound-pattern-index-mdx-7859b6e4204a94f02699.js.map