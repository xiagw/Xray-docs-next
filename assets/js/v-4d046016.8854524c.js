(self.webpackChunkXray_docs_next=self.webpackChunkXray_docs_next||[]).push([[5073],{8758:(n,e,s)=>{"use strict";s.r(e),s.d(e,{data:()=>a});const a={key:"v-4d046016",path:"/en/document/command.html",title:"命令参数",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"获取基本命令",slug:"获取基本命令",children:[{level:3,title:"xray run",slug:"xray-run",children:[]},{level:3,title:"xray version",slug:"xray-version",children:[]},{level:3,title:"xray api",slug:"xray-api",children:[]},{level:3,title:"xray tls",slug:"xray-tls",children:[]},{level:3,title:"xray uuid",slug:"xray-uuid",children:[]}]}],filePathRelative:"en/document/command.md",git:{updatedTime:1622027153e3,contributors:[]}}},5640:(n,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>m});var a=s(6252);const r=(0,a.uE)('<h1 id="命令参数"><a class="header-anchor" href="#命令参数">#</a> 命令参数</h1><div class="custom-container tip"><p class="custom-container-title">提示</p><p>Xray 使用 Go 风格的命令及参数</p></div><h2 id="获取基本命令"><a class="header-anchor" href="#获取基本命令">#</a> 获取基本命令</h2><p>您可以运行 <code>xray help</code> 来获得所有 xray 最基础的用法, 以及可用的命令及说明.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Xray is a platform for building proxies.\n\nUsage:\n\n        xray &lt;command&gt; [arguments]\n\nThe commands are:\n\n        run          Run Xray with config, the default command\n        version      Show current version of Xray\n        api          Call an API in an Xray process\n        tls          TLS tools\n        uuid         Generate new UUIDs\n\nUse &quot;xray help &lt;command&gt;&quot; for more information about a command.\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h3 id="xray-run"><a class="header-anchor" href="#xray-run">#</a> xray run</h3><p>指定一个或多个配置文件，并运行。</p><p>使用方法:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code> xray run [-c config.json] [-confdir dir]\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Run Xray with config, the default command.\n\nThe -config=file, -c=file flags set the config files for\nXray. Multiple assign is accepted.\n\nThe -confdir=dir flag sets a dir with multiple json config\n\nThe -format=json flag sets the format of config files.\nDefault &quot;json&quot;.\n\nThe -test flag tells Xray to test config files only,\nwithout launching the server\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h3 id="xray-version"><a class="header-anchor" href="#xray-version">#</a> xray version</h3><p>输出 Xray 版本、 Golang 版本等信息。</p><p>使用方法:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code> xray version\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="xray-api"><a class="header-anchor" href="#xray-api">#</a> xray api</h3><p>调用 Xray 的 gRPC API，需要在配置文件中开启。</p><p>使用方法:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>xray api &lt;command&gt; [arguments]\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>        restartlogger Restart the logger\n        stats         Get statistics\n        statsquery    Query statistics\n        statssys      Get system statistics\n        adi           Add inbounds\n        ado           Add outbounds\n        rmi           Remove inbounds\n        rmo           Remove outbounds\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="xray-tls"><a class="header-anchor" href="#xray-tls">#</a> xray tls</h3><p>一些与 TLS 相关的工具。</p><p>使用方法:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>xray tls &lt;command&gt; [arguments]\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>        cert         Generate TLS certificates\n        ping         Ping the domain with TLS handshake\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="xray-uuid"><a class="header-anchor" href="#xray-uuid">#</a> xray uuid</h3><p>生成 UUID。</p><p>使用方法:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>xray uuid\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>',28),l={class:"custom-container tip"},i=(0,a.Wm)("p",{class:"custom-container-title"},"提示",-1),t=(0,a.Wm)("p",null,[(0,a.Uk)("当"),(0,a.Wm)("code",null,"-config"),(0,a.Uk)("没有指定时，Xray 将先后尝试从以下路径加载"),(0,a.Wm)("code",null,"config.json"),(0,a.Uk)(":")],-1),c=(0,a.Wm)("li",null,"工作目录（Working Directory）",-1),u=(0,a.Uk)("环境变量"),p=(0,a.Uk)("中"),d=(0,a.Wm)("code",null,"Xray.location.asset",-1),o=(0,a.Uk)("所指定的路径"),m={render:function(n,e){const s=(0,a.up)("RouterLink");return(0,a.wg)(),(0,a.j4)(a.HY,null,[r,(0,a.Wm)("div",l,[i,t,(0,a.Wm)("ul",null,[c,(0,a.Wm)("li",null,[(0,a.Wm)(s,{to:"/en/config/features/env.html#%E8%B5%84%E6%BA%90%E6%96%87%E4%BB%B6%E8%B7%AF%E5%BE%84"},{default:(0,a.w5)((()=>[u])),_:1}),p,d,o])])])],64)}}}}]);