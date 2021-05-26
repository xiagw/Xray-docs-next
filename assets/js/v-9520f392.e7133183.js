(self.webpackChunkXray_docs_next=self.webpackChunkXray_docs_next||[]).push([[7322],{5212:(e,a,o)=>{"use strict";o.r(a),o.d(a,{data:()=>n});const n={key:"v-9520f392",path:"/en/config/transports/websocket.html",title:"WebSocket",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"WebSocketObject",slug:"websocketobject",children:[]},{level:2,title:"Browser Dialer",slug:"browser-dialer",children:[{level:3,title:"Background",slug:"background",children:[]},{level:3,title:"Xray & JS",slug:"xray-js",children:[]},{level:3,title:"Early data",slug:"early-data",children:[]},{level:3,title:"Configuration",slug:"configuration",children:[]}]}],filePathRelative:"en/config/transports/websocket.md",git:{updatedTime:1622027153e3,contributors:[]}}},5398:(e,a,o)=>{"use strict";o.r(a),o.d(a,{default:()=>B});var n=o(6252);const s=(0,n.uE)('<h1 id="websocket"><a class="header-anchor" href="#websocket">#</a> WebSocket</h1><p>使用标准的 WebSocket 来传输数据。</p><p>WebSocket 连接可以被其它 HTTP 服务器（如 Nginx）分流，也可以被 VLESS fallbacks path 分流。</p><div class="custom-container tip"><p class="custom-container-title">提示</p><p>Websocket 会识别 HTTP 请求的 X-Forwarded-For 头来覆写流量的源地址，优先级高于 PROXY protocol。</p></div><h2 id="websocketobject"><a class="header-anchor" href="#websocketobject">#</a> WebSocketObject</h2><p><code>WebSocketObject</code> 对应传输配置的 <code>wsSettings</code> 项。</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;acceptProxyProtocol&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;headers&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">&quot;Host&quot;</span><span class="token operator">:</span> <span class="token string">&quot;xray.com&quot;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><blockquote><p><code>acceptProxyProtocol</code>: true | false</p></blockquote><p>仅用于 inbound，指示是否接收 PROXY protocol。</p>',9),t={href:"https://www.haproxy.org/download/2.2/doc/proxy-protocol.txt",target:"_blank",rel:"noopener noreferrer"},r=(0,n.Uk)("PROXY protocol"),l=(0,n.Uk)(" 专用于传递请求的真实来源 IP 和端口，"),c=(0,n.Wm)("strong",null,"若你不了解它，请先忽略该项",-1),p=(0,n.Uk)("。"),i=(0,n.uE)('<p>常见的反代软件（如 HAProxy、Nginx）都可以配置发送它，VLESS fallbacks xver 也可以发送它。</p><p>填写 <code>true</code> 时，最底层 TCP 连接建立后，请求方必须先发送 PROXY protocol v1 或 v2，否则连接会被关闭。</p><blockquote><p><code>path</code> string</p></blockquote><p>WebSocket 所使用的 HTTP 协议路径，默认值为 <code>&quot;/&quot;</code>。</p><p>如果路径中包含 <code>ed</code> 参数，将会启用 <code>Early Data</code> 以降低延迟，其值为首包长度阈值。如果首包长度超过此值，就不会启用 <code>Early Data</code>。建议的值为 2048。</p><div class="custom-container warning"><p class="custom-container-title">注意</p><p><code>Early Data</code> 使用 <code>Sec-WebSocket-Protocol</code> 头承载数据。如果你遇到兼容性问题，可以尝试调低阈值。</p></div><blockquote><p><code>headers</code>: map {string: string}</p></blockquote><p>自定义 HTTP 头，一个键值对，每个键表示一个 HTTP 头的名称，对应的值是字符串。</p><p>默认值为空。</p>',9),d={id:"browser-dialer"},u=(0,n.Wm)("a",{class:"header-anchor",href:"#browser-dialer"},"#",-1),k=(0,n.Uk)(" Browser Dialer "),b=(0,n.Wm)("h3",{id:"background"},[(0,n.Wm)("a",{class:"header-anchor",href:"#background"},"#"),(0,n.Uk)(" Background")],-1),h={href:"https://github.com/v2ray/discussion/issues/754#issuecomment-647934994",target:"_blank",rel:"noopener noreferrer"},m=(0,n.Uk)("v2ray/discussion#754"),g=(0,n.Uk)(" 基于一年前的想法，原生 JS 实现了简洁的 WSS Browser Dialer，真实浏览器的 TLS 指纹、行为特征。"),W=(0,n.uE)('<p>不过 WSS 仍存在 ALPN 明显的问题，所以下一步是浏览器转发 HTTP/2、QUIC。</p><h3 id="xray-js"><a class="header-anchor" href="#xray-js">#</a> Xray &amp; JS</h3><p>创造了一个非常简单、巧妙的通信机制：</p><ul><li>Xray 监听地址端口 A，作为 HTTP 服务，浏览器访问 A，加载网页中的 JS。</li><li>JS 主动向 A 建立 WebSocket 连接，成功后，Xray 将连接发给 channel。</li><li>需要建立连接时，Xray 从 channel 接收一个可用的连接，并发送目标 URL 和可选的 early data。</li><li>JS 成功连接到目标后告知 Xray，并继续用这个 conn 全双工双向转发数据，连接关闭行为同步。</li><li>连接使用后就会被关闭，但 JS 会确保始终有新空闲连接可用。</li></ul><h3 id="early-data"><a class="header-anchor" href="#early-data">#</a> Early data</h3><p>根据浏览器的需求，对 early data 机制进行了如下调整：</p>',6),y=(0,n.Wm)("li",null,[(0,n.Uk)("服务端响应头会带有请求的 "),(0,n.Wm)("code",null,"Sec-WebSocket-Protocol"),(0,n.Uk)("，这也初步混淆了 WSS 握手响应的长度特征。")],-1),S=(0,n.Wm)("li",null,[(0,n.Uk)("用于浏览器的 early data 编码是 "),(0,n.Wm)("code",null,"base64.RawURLEncoding"),(0,n.Uk)(" 而不是 "),(0,n.Wm)("code",null,"StdEncoding"),(0,n.Uk)("，服务端做了兼容。")],-1),f=(0,n.Uk)("此外，由于 "),w={href:"https://github.com/XTLS/Xray-core/pull/375",target:"_blank",rel:"noopener noreferrer"},v=(0,n.Uk)("#375"),P=(0,n.Uk)(" 推荐 "),x=(0,n.Wm)("code",null,"?ed=2048",-1),U=(0,n.Uk)("，这个 PR 顺便将服务端一处 "),q=(0,n.Wm)("code",null,"MaxHeaderBytes",-1),T=(0,n.Uk)(" 扩至了 4096。 "),X=(0,n.Wm)("s",null,"（虽然好像不改也没问题）",-1),E={id:"configuration"},j=(0,n.Wm)("a",{class:"header-anchor",href:"#configuration"},"#",-1),R=(0,n.Uk)(" Configuration "),H=(0,n.uE)("<p>这是一个探索的过程，目前两边都是 Xray-core v1.4.1 时的配置方式：</p><ul><li>准备一份可用的 WSS 配置，注意 address 必须填域名，若需要指定 IP，请配置 DNS 或系统 hosts。</li><li>若浏览器的流量也会经过 Xray-core，务必将这个域名设为直连，否则会造成流量回环。</li><li>设置环境变量指定要监听的地址端口，比如 <code>XRAY_BROWSER_DIALER = 127.0.0.1:8080</code>。</li><li>先运行 Xray-core，再用任一浏览器访问上面指定的地址端口，还可以 <code>F12</code> 看 <code>Console</code> 和 <code>Network</code>。</li><li>浏览器会限制 WebSocket 连接数，所以建议开启 <code>Mux.Cool</code>。</li></ul>",2),B={render:function(e,a){const o=(0,n.up)("OutboundLink"),B=(0,n.up)("Badge");return(0,n.wg)(),(0,n.j4)(n.HY,null,[s,(0,n.Wm)("p",null,[(0,n.Wm)("a",t,[r,(0,n.Wm)(o)]),l,c,p]),i,(0,n.Wm)("h2",d,[u,k,(0,n.Wm)(B,{text:"BETA",type:"warning"})]),b,(0,n.Wm)("p",null,[(0,n.Wm)("a",h,[m,(0,n.Wm)(o)]),g]),W,(0,n.Wm)("ul",null,[y,S,(0,n.Wm)("li",null,[f,(0,n.Wm)("a",w,[v,(0,n.Wm)(o)]),P,x,U,q,T,X])]),(0,n.Wm)("h3",E,[j,R,(0,n.Wm)(B,{text:"v1.4.1",type:"warning"})]),H],64)}}}}]);