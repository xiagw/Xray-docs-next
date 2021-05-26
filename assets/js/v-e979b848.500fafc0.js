(self.webpackChunkXray_docs_next=self.webpackChunkXray_docs_next||[]).push([[346],{7726:(n,s,e)=>{"use strict";e.r(s),e.d(s,{data:()=>o});const o={key:"v-e979b848",path:"/en/config/outbounds/dns.html",title:"DNS",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"OutboundConfigurationObject",slug:"outboundconfigurationobject",children:[]},{level:2,title:"DNS 配置实例",slug:"dns-配置实例",children:[]}],filePathRelative:"en/config/outbounds/dns.md",git:{updatedTime:1622027153e3,contributors:[]}}},7206:(n,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>k});var o=e(6252);const t=(0,o.Wm)("h1",{id:"dns"},[(0,o.Wm)("a",{class:"header-anchor",href:"#dns"},"#"),(0,o.Uk)(" DNS")],-1),a=(0,o.Wm)("p",null,"DNS 是一个出站协议，主要用于拦截和转发 DNS 查询。",-1),u=(0,o.Wm)("p",null,"此出站协议只能接收 DNS 流量（包含基于 UDP 和 TCP 协议的查询），其它类型的流量会导致错误。",-1),p=(0,o.Uk)("在处理 DNS 查询时，此出站协议会将 IP 查询（即 A 和 AAAA）转发给内置的 "),c=(0,o.Uk)("DNS 服务器"),r=(0,o.Uk)("。其它类型的查询流量将被转发至它们原本的目标地址。"),l=(0,o.uE)('<h2 id="outboundconfigurationobject"><a class="header-anchor" href="#outboundconfigurationobject">#</a> OutboundConfigurationObject</h2><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;network&quot;</span><span class="token operator">:</span> <span class="token string">&quot;tcp&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;address&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.1.1.1&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;port&quot;</span><span class="token operator">:</span> <span class="token number">53</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><blockquote><p><code>network</code>: &quot;tcp&quot; | &quot;udp&quot;</p></blockquote><p>修改 DNS 流量的传输层协议，可选的值有 <code>&quot;tcp&quot;</code> 和 <code>&quot;udp&quot;</code>。当不指定时，保持来源的传输方式不变。</p><blockquote><p><code>address</code>: address</p></blockquote><p>修改 DNS 服务器地址。当不指定时，保持来源中指定的地址不变。</p><blockquote><p><code>port</code>: number</p></blockquote><p>修改 DNS 服务器端口。当不指定时，保持来源中指定的端口不变。</p>',8),d={id:"dns-配置实例"},i=(0,o.Wm)("a",{class:"header-anchor",href:"#dns-配置实例"},"#",-1),b=(0,o.Uk)(" DNS 配置实例 "),k={render:function(n,s){const e=(0,o.up)("RouterLink"),k=(0,o.up)("Badge");return(0,o.wg)(),(0,o.j4)(o.HY,null,[t,a,u,(0,o.Wm)("p",null,[p,(0,o.Wm)(e,{to:"/en/config/dns.html"},{default:(0,o.w5)((()=>[c])),_:1}),r]),l,(0,o.Wm)("h2",d,[i,b,(0,o.Wm)(k,{text:"WIP",type:"warning"})])],64)}}}}]);