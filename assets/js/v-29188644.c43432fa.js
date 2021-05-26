(self.webpackChunkXray_docs_next=self.webpackChunkXray_docs_next||[]).push([[4316],{4293:(n,s,a)=>{"use strict";a.r(s),a.d(s,{data:()=>e});const e={key:"v-29188644",path:"/en/config/inbounds/trojan.html",title:"Trojan",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"InboundConfigurationObject",slug:"inboundconfigurationobject",children:[{level:3,title:"ClientObject",slug:"clientobject",children:[]}]}],filePathRelative:"en/config/inbounds/trojan.md",git:{updatedTime:1622027153e3,contributors:[]}}},4919:(n,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>A});var e=a(6252);const t=(0,e.Wm)("h1",{id:"trojan"},[(0,e.Wm)("a",{class:"header-anchor",href:"#trojan"},"#"),(0,e.Uk)(" Trojan")],-1),o={href:"https://trojan-gfw.github.io/trojan/protocol",target:"_blank",rel:"noopener noreferrer"},p=(0,e.Uk)("Trojan"),l=(0,e.Uk)(" 协议"),c=(0,e.uE)('<div class="custom-container danger"><p class="custom-container-title">警告</p><p>Trojan 被设计工作在正确配置的加密 TLS 隧道</p></div><h2 id="inboundconfigurationobject"><a class="header-anchor" href="#inboundconfigurationobject">#</a> InboundConfigurationObject</h2><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;clients&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">{</span>\n      <span class="token property">&quot;password&quot;</span><span class="token operator">:</span> <span class="token string">&quot;password&quot;</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;email&quot;</span><span class="token operator">:</span> <span class="token string">&quot;love@xray.com&quot;</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;level&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;flow&quot;</span><span class="token operator">:</span> <span class="token string">&quot;xtls-rprx-direct&quot;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;fallbacks&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">{</span>\n      <span class="token property">&quot;dest&quot;</span><span class="token operator">:</span> <span class="token number">80</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><blockquote><p><code>clients</code>: [ <a href="#clientobject">ClientObject</a> ]</p></blockquote><p>一个数组，代表一组服务端认可的用户.</p><p>其中每一项是一个用户 <a href="#clientobject">ClientObject</a>。</p>',6),r=(0,e.Wm)("code",null,"fallbacks",-1),u=(0,e.Uk)(": [ "),i=(0,e.Uk)("FallbackObject"),b=(0,e.Uk)(" ]"),k=(0,e.Uk)("一个数组，包含一系列强大的回落分流配置（可选）。 fallbacks 的具体配置请点击"),d=(0,e.Uk)("FallbackObject"),m=(0,e.uE)('<div class="custom-container tip"><p class="custom-container-title">提示</p><p>Xray 的 Trojan 有完整的 fallbacks 支持，配置方式完全一致。 触发回落的条件也与 VLESS 类似：首包长度 &lt; 58 或第 57 个字节不为 <code>\\r</code>（因为 Trojan 没有协议版本）或身份认证失败。</p></div><h3 id="clientobject"><a class="header-anchor" href="#clientobject">#</a> ClientObject</h3><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;password&quot;</span><span class="token operator">:</span> <span class="token string">&quot;password&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;email&quot;</span><span class="token operator">:</span> <span class="token string">&quot;love@xray.com&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;level&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;flow&quot;</span><span class="token operator">:</span> <span class="token string">&quot;xtls-rprx-direct&quot;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><blockquote><p><code>password</code>: string</p></blockquote><p>必填，任意字符串。</p><blockquote><p><code>email</code>: string</p></blockquote><p>邮件地址，可选，用于标识用户</p><div class="custom-container danger"><p class="custom-container-title">警告</p><p>如果存在多个 ClientObject, 请注意 email 不可以重复。</p></div><blockquote><p><code>level</code>: number</p></blockquote>',9),g=(0,e.Uk)("用户等级，连接会使用这个用户等级对应的 "),q=(0,e.Uk)("本地策略"),f=(0,e.Uk)("。"),j=(0,e.Uk)("userLevel 的值, 对应 "),h=(0,e.Uk)("policy"),v=(0,e.Uk)(" 中 "),W=(0,e.Wm)("code",null,"level",-1),x=(0,e.Uk)(" 的值。 如不指定, 默认为 0。"),y=(0,e.uE)("<blockquote><p><code>flow</code>: string</p></blockquote><p>流控模式，用于选择 XTLS 的算法。</p><p>目前入站协议中有以下流控模式可选：</p><ul><li><code>xtls-rprx-origin</code>：最初的流控模式，此时客户端仅可选择 <code>xtls-rprx-origin</code> 和 <code>xtls-rprx-origin-udp443</code> 这两种流控模式。该模式纪念价值大于实际使用价值。</li><li><code>xtls-rprx-direct</code>：<strong>推荐</strong>，所有平台皆可使用的典型流控方式，此时客户端可选择任何流控模式</li></ul>",4),U={class:"custom-container warning"},w=(0,e.Wm)("p",{class:"custom-container-title"},"注意",-1),C=(0,e.Uk)("当 "),T=(0,e.Wm)("code",null,"flow",-1),O=(0,e.Uk)(" 被指定时，还需要将该入站协议的 "),S=(0,e.Wm)("code",null,"streamSettings.security",-1),_=(0,e.Uk)(" 一项指定为 "),E=(0,e.Wm)("code",null,"xtls",-1),L=(0,e.Uk)("，"),X=(0,e.Wm)("code",null,"tlsSettings",-1),D=(0,e.Uk)(" 改为 "),P=(0,e.Wm)("code",null,"xtlsSettings",-1),F=(0,e.Uk)("。详情请参考 "),I=(0,e.Uk)("streamSettings"),R=(0,e.Uk)("。"),z=(0,e.Wm)("p",null,"此外，目前 XTLS 仅支持 TCP、mKCP、DomainSocket 这三种传输方式。",-1),A={render:function(n,s){const a=(0,e.up)("OutboundLink"),A=(0,e.up)("RouterLink");return(0,e.wg)(),(0,e.j4)(e.HY,null,[t,(0,e.Wm)("p",null,[(0,e.Wm)("a",o,[p,(0,e.Wm)(a)]),l]),c,(0,e.Wm)("blockquote",null,[(0,e.Wm)("p",null,[r,u,(0,e.Wm)(A,{to:"/en/config/examples/fallback.html"},{default:(0,e.w5)((()=>[i])),_:1}),b])]),(0,e.Wm)("p",null,[k,(0,e.Wm)(A,{to:"/en/config/examples/fallback.html#fallbacks-%E9%85%8D%E7%BD%AE"},{default:(0,e.w5)((()=>[d])),_:1})]),m,(0,e.Wm)("p",null,[g,(0,e.Wm)(A,{to:"/en/config/policy.html#levelpolicyobject"},{default:(0,e.w5)((()=>[q])),_:1}),f]),(0,e.Wm)("p",null,[j,(0,e.Wm)(A,{to:"/en/config/policy.html#policyobject"},{default:(0,e.w5)((()=>[h])),_:1}),v,W,x]),y,(0,e.Wm)("div",U,[w,(0,e.Wm)("p",null,[C,T,O,S,_,E,L,X,D,P,F,(0,e.Wm)(A,{to:"/en/config/transport.html#streamsettingsobject"},{default:(0,e.w5)((()=>[I])),_:1}),R])]),z],64)}}}}]);