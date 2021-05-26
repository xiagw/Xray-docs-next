(self.webpackChunkXray_docs_next=self.webpackChunkXray_docs_next||[]).push([[3834],{1219:(n,s,a)=>{"use strict";a.r(s),a.d(s,{data:()=>e});const e={key:"v-773d731c",path:"/en/config/inbounds/http.html",title:"HTTP",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"InboundConfigurationObject",slug:"inboundconfigurationobject",children:[{level:3,title:"AccountObject",slug:"accountobject",children:[]}]}],filePathRelative:"en/config/inbounds/http.md",git:{updatedTime:1622027153e3,contributors:[]}}},2645:(n,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>k});var e=a(6252);const o=(0,e.uE)('<h1 id="http"><a class="header-anchor" href="#http">#</a> HTTP</h1><p>HTTP 协议。</p><div class="custom-container warning"><p class="custom-container-title">注意</p><p><strong>http 协议没有对传输加密，不适宜经公网中传输，更容易成为被人用作攻击的肉鸡。</strong></p></div><p><code>http</code> 入站更有意义的用法是在局域网或本机环境下监听，为其他程序提供本地服务。</p><div class="custom-container tip"><p class="custom-container-title">TIP 1</p><p><code>http proxy</code> 只能代理 tcp 协议，udp 系的协议均不能通过。</p></div><div class="custom-container tip"><p class="custom-container-title">TIP 2</p><p>在 Linux 中使用以下环境变量即可在当前 session 使用全局 HTTP 代理（很多软件都支持这一设置，也有不支持的）。</p><ul><li><code>export http_proxy=http://127.0.0.1:8080/</code> (地址须改成你配置的 HTTP 入站代理地址)</li><li><code>export https_proxy=$http_proxy</code></li></ul></div><h2 id="inboundconfigurationobject"><a class="header-anchor" href="#inboundconfigurationobject">#</a> InboundConfigurationObject</h2><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;timeout&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;accounts&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">{</span>\n      <span class="token property">&quot;user&quot;</span><span class="token operator">:</span> <span class="token string">&quot;my-username&quot;</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;pass&quot;</span><span class="token operator">:</span> <span class="token string">&quot;my-password&quot;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;allowTransparent&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;userLevel&quot;</span><span class="token operator">:</span> <span class="token number">0</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><blockquote><p><code>timeout</code>: number</p></blockquote><p>连接空闲的时间限制。单位为秒。默认值为 <code>300</code>, 0 表示不限时。</p><p>处理一个连接时，如果在 <code>timeout</code> 时间内，没有任何数据被传输，则中断该连接。</p><blockquote><p><code>accounts</code>: [<a href="#accountobject">AccountObject</a>]</p></blockquote><p>一个数组，数组中每个元素为一个用户帐号。默认值为空。</p><p>当 <code>accounts</code> 非空时，HTTP 代理将对入站连接进行 Basic Authentication 验证。</p><blockquote><p><code>allowTransparent</code>: true | false</p></blockquote><p>当为 <code>true</code> 时，会转发所有 HTTP 请求，而非只是代理请求。</p><div class="custom-container tip"><p class="custom-container-title">提示</p><p>若配置不当，开启此选项会导致死循环。</p></div><blockquote><p><code>userLevel</code>: number</p></blockquote>',18),t=(0,e.Uk)("用户等级，连接会使用这个用户等级对应的 "),p=(0,e.Uk)("本地策略"),c=(0,e.Uk)("。"),l=(0,e.Uk)("userLevel 的值, 对应 "),u=(0,e.Uk)("policy"),r=(0,e.Uk)(" 中 "),i=(0,e.Wm)("code",null,"level",-1),d=(0,e.Uk)(" 的值。 如不指定, 默认为 0。"),b=(0,e.uE)('<h3 id="accountobject"><a class="header-anchor" href="#accountobject">#</a> AccountObject</h3><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;user&quot;</span><span class="token operator">:</span> <span class="token string">&quot;my-username&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;pass&quot;</span><span class="token operator">:</span> <span class="token string">&quot;my-password&quot;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><blockquote><p><code>user</code>: string</p></blockquote><p>用户名，字符串类型。必填。</p><blockquote><p><code>pass</code>: string</p></blockquote><p>密码，字符串类型。必填。</p>',6),k={render:function(n,s){const a=(0,e.up)("RouterLink");return(0,e.wg)(),(0,e.j4)(e.HY,null,[o,(0,e.Wm)("p",null,[t,(0,e.Wm)(a,{to:"/en/config/policy.html#levelpolicyobject"},{default:(0,e.w5)((()=>[p])),_:1}),c]),(0,e.Wm)("p",null,[l,(0,e.Wm)(a,{to:"/en/config/policy.html#policyobject"},{default:(0,e.w5)((()=>[u])),_:1}),r,i,d]),b],64)}}}}]);