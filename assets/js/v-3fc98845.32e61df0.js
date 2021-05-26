(self.webpackChunkXray_docs_next=self.webpackChunkXray_docs_next||[]).push([[5500],{2057:(s,n,a)=>{"use strict";a.r(n),a.d(n,{data:()=>e});const e={key:"v-3fc98845",path:"/en/config/outbounds/http.html",title:"HTTP",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"OutboundConfigurationObject",slug:"outboundconfigurationobject",children:[{level:3,title:"ServerObject",slug:"serverobject",children:[]}]}],filePathRelative:"en/config/outbounds/http.md",git:{updatedTime:1622027153e3,contributors:[]}}},6966:(s,n,a)=>{"use strict";a.r(n),a.d(n,{default:()=>t});const e=(0,a(6252).uE)('<h1 id="http"><a class="header-anchor" href="#http">#</a> HTTP</h1><p>HTTP 协议。</p><div class="custom-container danger"><p class="custom-container-title">警告</p><p><strong>http 协议没有对传输加密，不适宜经公网中传输，更容易成为被人用作攻击的肉鸡。</strong></p></div><div class="custom-container tip"><p class="custom-container-title">提示</p><p><code>http</code> 只能代理 tcp 协议，udp 系的协议均不能通过。</p></div><h2 id="outboundconfigurationobject"><a class="header-anchor" href="#outboundconfigurationobject">#</a> OutboundConfigurationObject</h2><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;servers&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">{</span>\n      <span class="token property">&quot;address&quot;</span><span class="token operator">:</span> <span class="token string">&quot;192.168.108.1&quot;</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;port&quot;</span><span class="token operator">:</span> <span class="token number">3128</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;users&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n        <span class="token punctuation">{</span>\n          <span class="token property">&quot;user&quot;</span><span class="token operator">:</span> <span class="token string">&quot;my-username&quot;</span><span class="token punctuation">,</span>\n          <span class="token property">&quot;pass&quot;</span><span class="token operator">:</span> <span class="token string">&quot;my-password&quot;</span>\n        <span class="token punctuation">}</span>\n      <span class="token punctuation">]</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">提示</p><p>目前 HTTP 协议 outbound 中 <code>streamSettings</code> 设置 <code>security</code> 和 <code>tlsSettings</code> 是生效的。</p></div><blockquote><p><code>servers</code>: [ <a href="#serverobject">ServerObject</a> ]</p></blockquote><p>HTTP 服务器列表，其中每一项是一个服务器配置，若配置多个，循环使用 (RoundRobin)。</p><h3 id="serverobject"><a class="header-anchor" href="#serverobject">#</a> ServerObject</h3><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;address&quot;</span><span class="token operator">:</span> <span class="token string">&quot;192.168.108.1&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;port&quot;</span><span class="token operator">:</span> <span class="token number">3128</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;users&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">{</span>\n      <span class="token property">&quot;user&quot;</span><span class="token operator">:</span> <span class="token string">&quot;my-username&quot;</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;pass&quot;</span><span class="token operator">:</span> <span class="token string">&quot;my-password&quot;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><blockquote><p><code>address</code>: string</p></blockquote><p>HTTP 代理服务器地址，必填。</p><blockquote><p><code>port</code>: int</p></blockquote><p>HTTP 代理服务器端口，必填。</p><blockquote><p><code>user</code>: [<a href="#accountobject">AccountObject</a>]</p></blockquote><p>一个数组，数组中每个元素为一个用户帐号。默认值为空。</p><h4 id="accountobject"><a class="header-anchor" href="#accountobject">#</a> AccountObject</h4><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;user&quot;</span><span class="token operator">:</span> <span class="token string">&quot;my-username&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;pass&quot;</span><span class="token operator">:</span> <span class="token string">&quot;my-password&quot;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><blockquote><p><code>user</code>: string</p></blockquote><p>用户名，字符串类型。必填。</p><blockquote><p><code>pass</code>: string</p></blockquote><p>密码，字符串类型。必填。</p>',23),t={render:function(s,n){return e}}}}]);