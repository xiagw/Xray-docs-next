import{_ as u,r as p,o as r,c as l,a as n,b as e,w as a,F as i,e as s,d as t}from"./app.9843a57b.js";const d={},b=n("h1",{id:"vmess",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#vmess","aria-hidden":"true"},"#"),s(" VMess")],-1),q=s("VMess"),k=s(" \u662F\u4E00\u4E2A\u52A0\u5BC6\u4F20\u8F93\u534F\u8BAE\uFF0C\u901A\u5E38\u4F5C\u4E3A Xray \u5BA2\u6237\u7AEF\u548C\u670D\u52A1\u5668\u4E4B\u95F4\u7684\u6865\u6881\u3002"),m=t(`<div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>VMess \u4F9D\u8D56\u4E8E\u7CFB\u7EDF\u65F6\u95F4\uFF0C\u8BF7\u786E\u4FDD\u4F7F\u7528 Xray \u7684\u7CFB\u7EDF UTC \u65F6\u95F4\u8BEF\u5DEE\u5728 90 \u79D2\u4E4B\u5185\uFF0C\u65F6\u533A\u65E0\u5173\u3002\u5728 Linux \u7CFB\u7EDF\u4E2D\u53EF\u4EE5\u5B89\u88C5<code>ntp</code>\u670D\u52A1\u6765\u81EA\u52A8\u540C\u6B65\u7CFB\u7EDF\u65F6\u95F4\u3002</p></div><h2 id="outboundconfigurationobject" tabindex="-1"><a class="header-anchor" href="#outboundconfigurationobject" aria-hidden="true">#</a> OutboundConfigurationObject</h2><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;vnext&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;address&quot;</span><span class="token operator">:</span> <span class="token string">&quot;127.0.0.1&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;port&quot;</span><span class="token operator">:</span> <span class="token number">37192</span><span class="token punctuation">,</span>
      <span class="token property">&quot;users&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;5783a3e7-e373-51cd-8642-c83782b807c5&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;alterId&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
          <span class="token property">&quot;security&quot;</span><span class="token operator">:</span> <span class="token string">&quot;auto&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;level&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><blockquote><p><code>vnext</code>\uFF1A[ <a href="#serverobject">ServerObject</a> ]</p></blockquote><p>\u4E00\u4E2A\u6570\u7EC4\uFF0C\u5305\u542B\u4E00\u7EC4\u7684\u670D\u52A1\u7AEF\u914D\u7F6E.</p><p>\u5176\u4E2D\u6BCF\u4E00\u9879\u662F\u4E00\u4E2A\u670D\u52A1\u7AEF\u914D\u7F6E<a href="#serverobject">ServerObject</a>\u3002</p><h3 id="serverobject" tabindex="-1"><a class="header-anchor" href="#serverobject" aria-hidden="true">#</a> ServerObject</h3><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;address&quot;</span><span class="token operator">:</span> <span class="token string">&quot;127.0.0.1&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;port&quot;</span><span class="token operator">:</span> <span class="token number">37192</span><span class="token punctuation">,</span>
  <span class="token property">&quot;users&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><blockquote><p><code>address</code>: address</p></blockquote><p>\u670D\u52A1\u7AEF\u5730\u5740\uFF0C\u652F\u6301 IP \u5730\u5740\u6216\u8005\u57DF\u540D\u3002</p><blockquote><p><code>port</code>: number</p></blockquote><p>\u670D\u52A1\u7AEF\u76D1\u542C\u7684\u7AEF\u53E3\u53F7, \u5FC5\u586B\u3002</p><blockquote><p><code>users</code>: [ <a href="#userobject">UserObject</a> ]</p></blockquote><p>\u4E00\u4E2A\u6570\u7EC4\uFF0C\u4EE3\u8868\u4E00\u7EC4\u670D\u52A1\u7AEF\u8BA4\u53EF\u7684\u7528\u6237.</p><p>\u5176\u4E2D\u6BCF\u4E00\u9879\u662F\u4E00\u4E2A\u7528\u6237<a href="#userobject">UserObject</a>\u3002</p><h4 id="userobject" tabindex="-1"><a class="header-anchor" href="#userobject" aria-hidden="true">#</a> UserObject</h4><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;5783a3e7-e373-51cd-8642-c83782b807c5&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;alterId&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token property">&quot;security&quot;</span><span class="token operator">:</span> <span class="token string">&quot;auto&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;level&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><blockquote><p><code>id</code>\uFF1Astring</p></blockquote><p>Vmess \u7684\u7528\u6237 ID\uFF0C\u53EF\u4EE5\u662F\u4EFB\u610F\u5C0F\u4E8E 30 \u5B57\u8282\u7684\u5B57\u7B26\u4E32, \u4E5F\u53EF\u4EE5\u662F\u4E00\u4E2A\u5408\u6CD5\u7684 UUID.</p><p>\u81EA\u5B9A\u4E49\u5B57\u7B26\u4E32\u548C\u5176\u6620\u5C04\u7684 UUID \u662F\u7B49\u4EF7\u7684, \u8FD9\u610F\u5473\u7740\u4F60\u5C06\u53EF\u4EE5\u8FD9\u6837\u5728\u914D\u7F6E\u6587\u4EF6\u4E2D\u5199 id \u6765\u6807\u8BC6\u540C\u4E00\u7528\u6237,\u5373</p><ul><li>\u5199 <code>&quot;id&quot;: &quot;\u6211\u7231\u{1F349}\u8001\u5E081314&quot;</code>,</li><li>\u6216\u5199 <code>&quot;id&quot;: &quot;5783a3e7-e373-51cd-8642-c83782b807c5&quot;</code> (\u6B64 UUID \u662F <code>\u6211\u7231\u{1F349}\u8001\u5E081314</code> \u7684 UUID \u6620\u5C04)</li></ul>`,21),h=s("\u5176\u6620\u5C04\u6807\u51C6\u5728 "),_={href:"https://github.com/XTLS/Xray-core/issues/158",target:"_blank",rel:"noopener noreferrer"},v=s("VLESS UUID \u6620\u5C04\u6807\u51C6\uFF1A\u5C06\u81EA\u5B9A\u4E49\u5B57\u7B26\u4E32\u6620\u5C04\u4E3A\u4E00\u4E2A UUIDv5"),g=t('<p>\u4F60\u53EF\u4EE5\u4F7F\u7528\u547D\u4EE4 <code>xray uuid -i &quot;\u81EA\u5B9A\u4E49\u5B57\u7B26\u4E32&quot;</code> \u751F\u6210\u81EA\u5B9A\u4E49\u5B57\u7B26\u4E32\u6240\u6620\u5C04\u7684\u7684 UUID, \u4E5F\u53EF\u4EE5\u4F7F\u7528\u547D\u4EE4 <code>xray uuid</code> \u751F\u6210\u968F\u673A\u7684 UUID\u3002</p><blockquote><p><code>alterId</code>\uFF1Anumber</p></blockquote><p>\u4E3A\u4E86\u8FDB\u4E00\u6B65\u9632\u6B62\u88AB\u63A2\u6D4B\uFF0C\u4E00\u4E2A\u7528\u6237\u53EF\u4EE5\u5728\u4E3B ID \u7684\u57FA\u7840\u4E0A\uFF0C\u518D\u989D\u5916\u751F\u6210\u591A\u4E2A ID\u3002\u8FD9\u91CC\u53EA\u9700\u8981\u6307\u5B9A\u989D\u5916\u7684 ID \u7684\u6570\u91CF\uFF0C\u63A8\u8350\u503C\u4E3A 0 \u4EE3\u8868\u542F\u7528 VMessAEAD\u3002 \u6700\u5927\u503C 65535\u3002\u8FD9\u4E2A\u503C\u4E0D\u80FD\u8D85\u8FC7\u670D\u52A1\u5668\u7AEF\u6240\u6307\u5B9A\u7684\u503C\u3002</p><p>\u4E0D\u6307\u5B9A\u7684\u8BDD\uFF0C\u9ED8\u8BA4\u503C\u662F 0\u3002</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>\u5BA2\u6237\u7AEF AlterID \u8BBE\u7F6E\u4E3A 0 \u4EE3\u8868\u542F\u7528 VMessAEAD \uFF1B\u670D\u52A1\u7AEF\u4E3A\u81EA\u52A8\u9002\u914D\uFF0C\u53EF\u540C\u65F6\u517C\u5BB9\u542F\u7528\u548C\u672A\u5F00\u542F VMessAEAD \u7684\u5BA2\u6237\u7AEF\u3002 \u5BA2\u6237\u7AEF\u53EF\u901A\u8FC7\u8BBE\u7F6E\u73AF\u5883\u53D8\u91CF <code>Xray_VMESS_AEAD_DISABLED=true</code> \u5F3A\u884C\u7981\u7528 VMessAEAD</p></div><blockquote><p><code>level</code>: number</p></blockquote>',6),y=s("\u7528\u6237\u7B49\u7EA7\uFF0C\u8FDE\u63A5\u4F1A\u4F7F\u7528\u8FD9\u4E2A\u7528\u6237\u7B49\u7EA7\u5BF9\u5E94\u7684 "),j=s("\u672C\u5730\u7B56\u7565"),f=s("\u3002"),D=s("level \u7684\u503C, \u5BF9\u5E94 "),I=s("policy"),x=s(" \u4E2D "),U=n("code",null,"level",-1),A=s(" \u7684\u503C\u3002 \u5982\u4E0D\u6307\u5B9A, \u9ED8\u8BA4\u4E3A 0\u3002"),V=t('<blockquote><p><code>security</code>: &quot;aes-128-gcm&quot; | &quot;chacha20-poly1305&quot; | &quot;auto&quot; | &quot;none&quot; | &quot;zero&quot;</p></blockquote><p>\u52A0\u5BC6\u65B9\u5F0F\uFF0C\u5BA2\u6237\u7AEF\u5C06\u4F7F\u7528\u914D\u7F6E\u7684\u52A0\u5BC6\u65B9\u5F0F\u53D1\u9001\u6570\u636E\uFF0C\u670D\u52A1\u5668\u7AEF\u81EA\u52A8\u8BC6\u522B\uFF0C\u65E0\u9700\u914D\u7F6E\u3002</p><ul><li><code>&quot;aes-128-gcm&quot;</code>\uFF1A\u63A8\u8350\u5728 PC \u4E0A\u4F7F\u7528</li><li><code>&quot;chacha20-poly1305&quot;</code>\uFF1A\u63A8\u8350\u5728\u624B\u673A\u7AEF\u4F7F\u7528</li><li><code>&quot;auto&quot;</code>\uFF1A\u9ED8\u8BA4\u503C\uFF0C\u81EA\u52A8\u9009\u62E9\uFF08\u8FD0\u884C\u6846\u67B6\u4E3A AMD64\u3001ARM64 \u6216 s390x \u65F6\u4E3A aes-128-gcm \u52A0\u5BC6\u65B9\u5F0F\uFF0C\u5176\u4ED6\u60C5\u51B5\u5219\u4E3A Chacha20-Poly1305 \u52A0\u5BC6\u65B9\u5F0F\uFF09</li><li><code>&quot;none&quot;</code>\uFF1A\u4E0D\u52A0\u5BC6</li></ul><ul><li><code>&quot;zero&quot;</code>\uFF1A\u4E0D\u52A0\u5BC6\uFF0C\u4E5F\u4E0D\u8FDB\u884C\u6D88\u606F\u8BA4\u8BC1 (v1.4.0+)</li></ul><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>\u63A8\u8350\u4F7F\u7528<code>&quot;auto&quot;</code>\u52A0\u5BC6\u65B9\u5F0F\uFF0C\u8FD9\u6837\u53EF\u4EE5\u6C38\u4E45\u4FDD\u8BC1\u5B89\u5168\u6027\u548C\u517C\u5BB9\u6027\u3002</p><p><code>&quot;none&quot;</code> \u4F2A\u52A0\u5BC6\u65B9\u5F0F\u4F1A\u8BA1\u7B97\u5E76\u9A8C\u8BC1\u6570\u636E\u5305\u7684\u6821\u9A8C\u6570\u636E\uFF0C\u7531\u4E8E\u8BA4\u8BC1\u7B97\u6CD5\u6CA1\u6709\u786C\u4EF6\u652F\u6301\uFF0C\u5728\u90E8\u5206\u5E73\u53F0\u53EF\u80FD\u901F\u5EA6\u6BD4\u6709\u786C\u4EF6\u52A0\u901F\u7684 <code>&quot;aes-128-gcm&quot;</code> \u8FD8\u6162\u3002</p><p><code>&quot;zero&quot;</code> \u4F2A\u52A0\u5BC6\u65B9\u5F0F\u4E0D\u4F1A\u52A0\u5BC6\u6D88\u606F\u4E5F\u4E0D\u4F1A\u8BA1\u7B97\u6570\u636E\u7684\u6821\u9A8C\u6570\u636E\uFF0C\u56E0\u6B64\u7406\u8BBA\u4E0A\u901F\u5EA6\u4F1A\u9AD8\u4E8E\u5176\u4ED6\u4EFB\u4F55\u52A0\u5BC6\u65B9\u5F0F\u3002\u5B9E\u9645\u901F\u5EA6\u53EF\u80FD\u53D7\u5230\u5176\u4ED6\u56E0\u7D20\u5F71\u54CD\u3002</p><p>\u4E0D\u63A8\u8350\u5728\u672A\u5F00\u542F TLS \u52A0\u5BC6\u5E76\u5F3A\u5236\u6821\u9A8C\u8BC1\u4E66\u7684\u60C5\u51B5\u4E0B\u4F7F\u7528 <code>&quot;none&quot;</code> <code>&quot;zero&quot;</code> \u4F2A\u52A0\u5BC6\u65B9\u5F0F\u3002 \u5982\u679C\u4F7F\u7528 CDN \u6216\u5176\u4ED6\u4F1A\u89E3\u5BC6 TLS \u7684\u4E2D\u8F6C\u5E73\u53F0\u6216\u7F51\u7EDC\u73AF\u5883\u5EFA\u7ACB\u8FDE\u63A5\uFF0C\u4E0D\u5EFA\u8BAE\u4F7F\u7528 <code>&quot;none&quot;</code> <code>&quot;zero&quot;</code> \u4F2A\u52A0\u5BC6\u65B9\u5F0F\u3002</p><p>\u65E0\u8BBA\u4F7F\u7528\u54EA\u79CD\u52A0\u5BC6\u65B9\u5F0F\uFF0C VMess \u7684\u5305\u5934\u90FD\u4F1A\u53D7\u5230\u52A0\u5BC6\u548C\u8BA4\u8BC1\u7684\u4FDD\u62A4\u3002</p></div>',5);function E(S,M){const o=p("RouterLink"),c=p("ExternalLinkIcon");return r(),l(i,null,[b,n("p",null,[e(o,{to:"/en/development/protocols/vmess.html"},{default:a(()=>[q]),_:1}),k]),m,n("p",null,[h,n("a",_,[v,e(c)])]),g,n("p",null,[y,e(o,{to:"/en/config/policy.html#levelpolicyobject"},{default:a(()=>[j]),_:1}),f]),n("p",null,[D,e(o,{to:"/en/config/policy.html#policyobject"},{default:a(()=>[I]),_:1}),x,U,A]),V],64)}var O=u(d,[["render",E],["__file","vmess.html.vue"]]);export{O as default};