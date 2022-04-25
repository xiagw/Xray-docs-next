import{_ as u,r as c,o as l,c as i,a as o,b as s,w as p,F as r,d as t,e as n}from"./app.9843a57b.js";const d={},q=t(`<h1 id="\u8DEF\u7531" tabindex="-1"><a class="header-anchor" href="#\u8DEF\u7531" aria-hidden="true">#</a> \u8DEF\u7531</h1><p>\u8DEF\u7531\u529F\u80FD\u6A21\u5757\u53EF\u4EE5\u5C06\u5165\u7AD9\u6570\u636E\u6309\u4E0D\u540C\u89C4\u5219\u7531\u4E0D\u540C\u7684\u51FA\u7AD9\u8FDE\u63A5\u53D1\u51FA\uFF0C\u4EE5\u8FBE\u5230\u6309\u9700\u4EE3\u7406\u7684\u76EE\u7684\u3002</p><p>\u5982\u5E38\u89C1\u7528\u6CD5\u662F\u5206\u6D41\u56FD\u5185\u5916\u6D41\u91CF\uFF0CXray \u53EF\u4EE5\u901A\u8FC7\u5185\u90E8\u673A\u5236\u5224\u65AD\u4E0D\u540C\u5730\u533A\u7684\u6D41\u91CF\uFF0C\u7136\u540E\u5C06\u5B83\u4EEC\u53D1\u9001\u5230\u4E0D\u540C\u7684\u51FA\u7AD9\u4EE3\u7406\u3002</p><h2 id="routingobject" tabindex="-1"><a class="header-anchor" href="#routingobject" aria-hidden="true">#</a> RoutingObject</h2><p><code>RoutingObject</code> \u5BF9\u5E94\u914D\u7F6E\u6587\u4EF6\u7684 <code>routing</code> \u9879\u3002</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;routing&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;domainStrategy&quot;</span><span class="token operator">:</span> <span class="token string">&quot;AsIs&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;rules&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;balancers&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><blockquote><p><code>domainStrategy</code>: &quot;AsIs&quot; | &quot;IPIfNonMatch&quot; | &quot;IPOnDemand&quot;</p></blockquote><p>\u57DF\u540D\u89E3\u6790\u7B56\u7565\uFF0C\u6839\u636E\u4E0D\u540C\u7684\u8BBE\u7F6E\u4F7F\u7528\u4E0D\u540C\u7684\u7B56\u7565\u3002</p><ul><li><code>&quot;AsIs&quot;</code>\uFF1A\u53EA\u4F7F\u7528\u57DF\u540D\u8FDB\u884C\u8DEF\u7531\u9009\u62E9\u3002\u9ED8\u8BA4\u503C\u3002</li><li><code>&quot;IPIfNonMatch&quot;</code>\uFF1A\u5F53\u57DF\u540D\u6CA1\u6709\u5339\u914D\u4EFB\u4F55\u89C4\u5219\u65F6\uFF0C\u5C06\u57DF\u540D\u89E3\u6790\u6210 IP\uFF08A \u8BB0\u5F55\u6216 AAAA \u8BB0\u5F55\uFF09\u518D\u6B21\u8FDB\u884C\u5339\u914D\uFF1B <ul><li>\u5F53\u4E00\u4E2A\u57DF\u540D\u6709\u591A\u4E2A A \u8BB0\u5F55\u65F6\uFF0C\u4F1A\u5C1D\u8BD5\u5339\u914D\u6240\u6709\u7684 A \u8BB0\u5F55\uFF0C\u76F4\u5230\u5176\u4E2D\u4E00\u4E2A\u4E0E\u67D0\u4E2A\u89C4\u5219\u5339\u914D\u4E3A\u6B62\uFF1B</li><li>\u89E3\u6790\u540E\u7684 IP \u4EC5\u5728\u8DEF\u7531\u9009\u62E9\u65F6\u8D77\u4F5C\u7528\uFF0C\u8F6C\u53D1\u7684\u6570\u636E\u5305\u4E2D\u4F9D\u7136\u4F7F\u7528\u539F\u59CB\u57DF\u540D\uFF1B</li></ul></li><li><code>&quot;IPOnDemand&quot;</code>\uFF1A\u5F53\u5339\u914D\u65F6\u78B0\u5230\u4EFB\u4F55\u57FA\u4E8E IP \u7684\u89C4\u5219\uFF0C\u5C06\u57DF\u540D\u7ACB\u5373\u89E3\u6790\u4E3A IP \u8FDB\u884C\u5339\u914D\uFF1B</li></ul><blockquote><p><code>rules</code>: [<a href="#ruleobject">RuleObject</a>]</p></blockquote><p>\u5BF9\u5E94\u4E00\u4E2A\u6570\u7EC4\uFF0C\u6570\u7EC4\u4E2D\u6BCF\u4E00\u9879\u662F\u4E00\u4E2A\u89C4\u5219\u3002</p><p>\u5BF9\u4E8E\u6BCF\u4E00\u4E2A\u8FDE\u63A5\uFF0C\u8DEF\u7531\u5C06\u6839\u636E\u8FD9\u4E9B\u89C4\u5219\u4F9D\u6B21\u8FDB\u884C\u5224\u65AD\uFF0C\u5F53\u4E00\u4E2A\u89C4\u5219\u751F\u6548\u65F6\uFF0C\u5373\u5C06\u8FD9\u4E2A\u8FDE\u63A5\u8F6C\u53D1\u81F3\u5B83\u6240\u6307\u5B9A\u7684 <code>outboundTag</code>\u6216 <code>balancerTag</code>\u3002</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>\u5F53\u6CA1\u6709\u5339\u914D\u5230\u4EFB\u4F55\u89C4\u5219\u65F6\uFF0C\u6D41\u91CF\u9ED8\u8BA4\u7531\u7B2C\u4E00\u4E2A outbound \u53D1\u51FA\u3002</p></div><blockquote><p><code>balancers</code>: [ <a href="#balancerobject">BalancerObject</a> ]</p></blockquote><p>\u4E00\u4E2A\u6570\u7EC4\uFF0C\u6570\u7EC4\u4E2D\u6BCF\u4E00\u9879\u662F\u4E00\u4E2A\u8D1F\u8F7D\u5747\u8861\u5668\u7684\u914D\u7F6E\u3002</p><p>\u5F53\u4E00\u4E2A\u89C4\u5219\u6307\u5411\u4E00\u4E2A\u8D1F\u8F7D\u5747\u8861\u5668\u65F6\uFF0CXray \u4F1A\u901A\u8FC7\u6B64\u8D1F\u8F7D\u5747\u8861\u5668\u9009\u51FA\u4E00\u4E2A outbound, \u7136\u540E\u7531\u5B83\u8F6C\u53D1\u6D41\u91CF\u3002</p><h3 id="ruleobject" tabindex="-1"><a class="header-anchor" href="#ruleobject" aria-hidden="true">#</a> RuleObject</h3><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;field&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;domain&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;baidu.com&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;qq.com&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;geosite:cn&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;ip&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;0.0.0.0/8&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;10.0.0.0/8&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;fc00::/7&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;fe80::/10&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;geoip:cn&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;port&quot;</span><span class="token operator">:</span> <span class="token string">&quot;53,443,1000-2000&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;sourcePort&quot;</span><span class="token operator">:</span> <span class="token string">&quot;53,443,1000-2000&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;network&quot;</span><span class="token operator">:</span> <span class="token string">&quot;tcp&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;source&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;10.0.0.1&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;user&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;love@xray.com&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;inboundTag&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;tag-vmess&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;protocol&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;http&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;tls&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;bittorrent&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;attrs&quot;</span><span class="token operator">:</span> <span class="token string">&quot;attrs[&#39;:method&#39;] == &#39;GET&#39;&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;outboundTag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;direct&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;balancerTag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;balancer&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>\u5F53\u591A\u4E2A\u5C5E\u6027\u540C\u65F6\u6307\u5B9A\u65F6\uFF0C\u8FD9\u4E9B\u5C5E\u6027\u9700\u8981<strong>\u540C\u65F6</strong>\u6EE1\u8DB3\uFF0C\u624D\u53EF\u4EE5\u4F7F\u5F53\u524D\u89C4\u5219\u751F\u6548\u3002</p></div><blockquote><p><code>type</code>: &quot;field&quot;</p></blockquote><p>\u76EE\u524D\u53EA\u652F\u6301<code>&quot;field&quot;</code>\u8FD9\u4E00\u4E2A\u9009\u9879\u3002</p><blockquote><p><code>domain</code>: [string]</p></blockquote><p>\u4E00\u4E2A\u6570\u7EC4\uFF0C\u6570\u7EC4\u6BCF\u4E00\u9879\u662F\u4E00\u4E2A\u57DF\u540D\u7684\u5339\u914D\u3002\u6709\u4EE5\u4E0B\u51E0\u79CD\u5F62\u5F0F\uFF1A</p>`,23),k=t('<li>\u7EAF\u5B57\u7B26\u4E32\uFF1A\u5F53\u6B64\u5B57\u7B26\u4E32\u5339\u914D\u76EE\u6807\u57DF\u540D\u4E2D\u4EFB\u610F\u90E8\u5206\uFF0C\u8BE5\u89C4\u5219\u751F\u6548\u3002\u6BD4\u5982 &quot;sina.com&quot; \u53EF\u4EE5\u5339\u914D &quot;sina.com&quot;\u3001&quot;sina.com.cn&quot; \u548C &quot;www.sina.com&quot;\uFF0C\u4F46\u4E0D\u5339\u914D &quot;sina.cn&quot;\u3002</li><li>\u6B63\u5219\u8868\u8FBE\u5F0F\uFF1A\u7531 <code>&quot;regexp:&quot;</code> \u5F00\u59CB\uFF0C\u4F59\u4E0B\u90E8\u5206\u662F\u4E00\u4E2A\u6B63\u5219\u8868\u8FBE\u5F0F\u3002\u5F53\u6B64\u6B63\u5219\u8868\u8FBE\u5F0F\u5339\u914D\u76EE\u6807\u57DF\u540D\u65F6\uFF0C\u8BE5\u89C4\u5219\u751F\u6548\u3002\u4F8B\u5982 &quot;regexp:\\\\.goo.*\\\\.com$&quot; \u5339\u914D &quot;www.google.com&quot; \u6216 &quot;fonts.googleapis.com&quot;\uFF0C\u4F46\u4E0D\u5339\u914D &quot;google.com&quot;\u3002</li><li>\u5B50\u57DF\u540D\uFF08\u63A8\u8350\uFF09\uFF1A\u7531 <code>&quot;domain:&quot;</code> \u5F00\u59CB\uFF0C\u4F59\u4E0B\u90E8\u5206\u662F\u4E00\u4E2A\u57DF\u540D\u3002\u5F53\u6B64\u57DF\u540D\u662F\u76EE\u6807\u57DF\u540D\u6216\u5176\u5B50\u57DF\u540D\u65F6\uFF0C\u8BE5\u89C4\u5219\u751F\u6548\u3002\u4F8B\u5982 &quot;domain:xray.com&quot; \u5339\u914D &quot;www.xray.com&quot;\u3001&quot;xray.com&quot;\uFF0C\u4F46\u4E0D\u5339\u914D &quot;wxray.com&quot;\u3002</li><li>\u5B8C\u6574\u5339\u914D\uFF1A\u7531 <code>&quot;full:&quot;</code> \u5F00\u59CB\uFF0C\u4F59\u4E0B\u90E8\u5206\u662F\u4E00\u4E2A\u57DF\u540D\u3002\u5F53\u6B64\u57DF\u540D\u5B8C\u6574\u5339\u914D\u76EE\u6807\u57DF\u540D\u65F6\uFF0C\u8BE5\u89C4\u5219\u751F\u6548\u3002\u4F8B\u5982 &quot;full:xray.com&quot; \u5339\u914D &quot;xray.com&quot; \u4F46\u4E0D\u5339\u914D &quot;www.xray.com&quot;\u3002</li><li>\u9884\u5B9A\u4E49\u57DF\u540D\u5217\u8868\uFF1A\u7531 <code>&quot;geosite:&quot;</code> \u5F00\u5934\uFF0C\u4F59\u4E0B\u90E8\u5206\u662F\u4E00\u4E2A\u540D\u79F0\uFF0C\u5982 <code>geosite:google</code> \u6216\u8005 <code>geosite:cn</code>\u3002\u540D\u79F0\u53CA\u57DF\u540D\u5217\u8868\u53C2\u8003 <a href="#%E9%A2%84%E5%AE%9A%E4%B9%89%E5%9F%9F%E5%90%8D%E5%88%97%E8%A1%A8">\u9884\u5B9A\u4E49\u57DF\u540D\u5217\u8868</a>\u3002</li>',5),b=n("\u4ECE\u6587\u4EF6\u4E2D\u52A0\u8F7D\u57DF\u540D\uFF1A\u5F62\u5982 "),g=o("code",null,'"ext:file:tag"',-1),h=n("\uFF0C\u5FC5\u987B\u4EE5 "),_=o("code",null,"ext:",-1),m=n("\uFF08\u5C0F\u5199\uFF09\u5F00\u5934\uFF0C\u540E\u9762\u8DDF\u6587\u4EF6\u540D\u548C\u6807\u7B7E\uFF0C\u6587\u4EF6\u5B58\u653E\u5728 "),f=n("\u8D44\u6E90\u76EE\u5F55"),y=n(" \u4E2D\uFF0C\u6587\u4EF6\u683C\u5F0F\u4E0E "),I=o("code",null,"geosite.dat",-1),x=n(" \u76F8\u540C\uFF0C\u6807\u7B7E\u5FC5\u987B\u5728\u6587\u4EF6\u4E2D\u5B58\u5728\u3002"),v=o("div",{class:"custom-container tip"},[o("p",{class:"custom-container-title"},"TIP"),o("p",null,[o("code",null,'"ext:geoip.dat:cn"'),n(" \u7B49\u4EF7\u4E8E "),o("code",null,'"geoip:cn"')])],-1),E=o("blockquote",null,[o("p",null,[o("code",null,"ip"),n(": [string]")])],-1),P=o("p",null,"\u4E00\u4E2A\u6570\u7EC4\uFF0C\u6570\u7EC4\u5185\u6BCF\u4E00\u9879\u4EE3\u8868\u4E00\u4E2A IP \u8303\u56F4\u3002\u5F53\u67D0\u4E00\u9879\u5339\u914D\u76EE\u6807 IP \u65F6\uFF0C\u6B64\u89C4\u5219\u751F\u6548\u3002\u6709\u4EE5\u4E0B\u51E0\u79CD\u5F62\u5F0F\uFF1A",-1),T=o("li",null,[n("IP\uFF1A\u5F62\u5982 "),o("code",null,'"127.0.0.1"'),n("\u3002")],-1),j={href:"https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing",target:"_blank",rel:"noopener noreferrer"},w=n("CIDR"),A=n("\uFF1A\u5F62\u5982 "),B=o("code",null,'"10.0.0.0/8"',-1),R=n("\u3002"),N=t("<li>\u9884\u5B9A\u4E49 IP \u5217\u8868\uFF1A\u6B64\u5217\u8868\u9884\u7F6E\u4E8E\u6BCF\u4E00\u4E2A Xray \u7684\u5B89\u88C5\u5305\u4E2D\uFF0C\u6587\u4EF6\u540D\u4E3A <code>geoip.dat</code>\u3002\u4F7F\u7528\u65B9\u5F0F\u5F62\u5982 <code>&quot;geoip:cn&quot;</code>\uFF0C\u5FC5\u987B\u4EE5 <code>geoip:</code>\uFF08\u5C0F\u5199\uFF09\u5F00\u5934\uFF0C\u540E\u9762\u8DDF\u53CC\u5B57\u7B26\u56FD\u5BB6\u4EE3\u7801\uFF0C\u652F\u6301\u51E0\u4E4E\u6240\u6709\u53EF\u4EE5\u4E0A\u7F51\u7684\u56FD\u5BB6\u3002 <ul><li>\u7279\u6B8A\u503C\uFF1A<code>&quot;geoip:private&quot;</code>\uFF0C\u5305\u542B\u6240\u6709\u79C1\u6709\u5730\u5740\uFF0C\u5982 <code>127.0.0.1</code>\u3002</li></ul></li>",1),O=n("\u4ECE\u6587\u4EF6\u4E2D\u52A0\u8F7D IP\uFF1A\u5F62\u5982 "),C=o("code",null,'"ext:file:tag"',-1),D=n("\uFF0C\u5FC5\u987B\u4EE5 "),F=o("code",null,"ext:",-1),G=n("\uFF08\u5C0F\u5199\uFF09\u5F00\u5934\uFF0C\u540E\u9762\u8DDF\u6587\u4EF6\u540D\u548C\u6807\u7B7E\uFF0C\u6587\u4EF6\u5B58\u653E\u5728 "),S=n("\u8D44\u6E90\u76EE\u5F55"),L=n(" \u4E2D\uFF0C\u6587\u4EF6\u683C\u5F0F\u4E0E "),V=o("code",null,"geoip.dat",-1),X=n(" \u76F8\u540C\u6807\u7B7E\u5FC5\u987B\u5728\u6587\u4EF6\u4E2D\u5B58\u5728\u3002"),M=t('<blockquote><p><code>port</code>\uFF1Anumber | string</p></blockquote><p>\u76EE\u6807\u7AEF\u53E3\u8303\u56F4\uFF0C\u6709\u4E09\u79CD\u5F62\u5F0F\uFF1A</p><ul><li><code>&quot;a-b&quot;</code>\uFF1Aa \u548C b \u5747\u4E3A\u6B63\u6574\u6570\uFF0C\u4E14\u5C0F\u4E8E 65536\u3002\u8FD9\u4E2A\u8303\u56F4\u662F\u4E00\u4E2A\u524D\u540E\u95ED\u5408\u533A\u95F4\uFF0C\u5F53\u76EE\u6807\u7AEF\u53E3\u843D\u5728\u6B64\u8303\u56F4\u5185\u65F6\uFF0C\u6B64\u89C4\u5219\u751F\u6548\u3002</li><li><code>a</code>\uFF1Aa \u4E3A\u6B63\u6574\u6570\uFF0C\u4E14\u5C0F\u4E8E 65536\u3002\u5F53\u76EE\u6807\u7AEF\u53E3\u4E3A a \u65F6\uFF0C\u6B64\u89C4\u5219\u751F\u6548\u3002</li><li>\u4EE5\u4E0A\u4E24\u79CD\u5F62\u5F0F\u7684\u6DF7\u5408\uFF0C\u4EE5\u9017\u53F7 &quot;,&quot; \u5206\u9694\u3002\u5F62\u5982\uFF1A<code>&quot;53,443,1000-2000&quot;</code>\u3002</li></ul><blockquote><p><code>sourcePort</code>\uFF1Anumber | string</p></blockquote><p>\u6765\u6E90\u7AEF\u53E3\uFF0C\u6709\u4E09\u79CD\u5F62\u5F0F\uFF1A</p><ul><li><code>&quot;a-b&quot;</code>\uFF1Aa \u548C b \u5747\u4E3A\u6B63\u6574\u6570\uFF0C\u4E14\u5C0F\u4E8E 65536\u3002\u8FD9\u4E2A\u8303\u56F4\u662F\u4E00\u4E2A\u524D\u540E\u95ED\u5408\u533A\u95F4\uFF0C\u5F53\u76EE\u6807\u7AEF\u53E3\u843D\u5728\u6B64\u8303\u56F4\u5185\u65F6\uFF0C\u6B64\u89C4\u5219\u751F\u6548\u3002</li><li><code>a</code>\uFF1Aa \u4E3A\u6B63\u6574\u6570\uFF0C\u4E14\u5C0F\u4E8E 65536\u3002\u5F53\u76EE\u6807\u7AEF\u53E3\u4E3A a \u65F6\uFF0C\u6B64\u89C4\u5219\u751F\u6548\u3002</li><li>\u4EE5\u4E0A\u4E24\u79CD\u5F62\u5F0F\u7684\u6DF7\u5408\uFF0C\u4EE5\u9017\u53F7 &quot;,&quot; \u5206\u9694\u3002\u5F62\u5982\uFF1A<code>&quot;53,443,1000-2000&quot;</code>\u3002</li></ul><blockquote><p><code>network</code>: &quot;tcp&quot; | &quot;udp&quot; | &quot;tcp,udp&quot;</p></blockquote><p>\u53EF\u9009\u7684\u503C\u6709 &quot;tcp&quot;\u3001&quot;udp&quot; \u6216 &quot;tcp,udp&quot;\uFF0C\u5F53\u8FDE\u63A5\u65B9\u5F0F\u662F\u6307\u5B9A\u7684\u65B9\u5F0F\u65F6\uFF0C\u6B64\u89C4\u5219\u751F\u6548\u3002</p><blockquote><p><code>source</code>: [string]</p></blockquote><p>\u4E00\u4E2A\u6570\u7EC4\uFF0C\u6570\u7EC4\u5185\u6BCF\u4E00\u9879\u4EE3\u8868\u4E00\u4E2A IP \u8303\u56F4\uFF0C\u5F62\u5F0F\u6709 IP\u3001CIDR\u3001GeoIP \u548C\u4ECE\u6587\u4EF6\u4E2D\u52A0\u8F7D IP\u3002\u5F53\u67D0\u4E00\u9879\u5339\u914D\u6765\u6E90 IP \u65F6\uFF0C\u6B64\u89C4\u5219\u751F\u6548\u3002</p><blockquote><p><code>user</code>: [string]</p></blockquote><p>\u4E00\u4E2A\u6570\u7EC4\uFF0C\u6570\u7EC4\u5185\u6BCF\u4E00\u9879\u662F\u4E00\u4E2A\u90AE\u7BB1\u5730\u5740\u3002\u5F53\u67D0\u4E00\u9879\u5339\u914D\u6765\u6E90\u7528\u6237\u65F6\uFF0C\u6B64\u89C4\u5219\u751F\u6548\u3002</p><blockquote><p><code>inboundTag</code>: [string]</p></blockquote><p>\u4E00\u4E2A\u6570\u7EC4\uFF0C\u6570\u7EC4\u5185\u6BCF\u4E00\u9879\u662F\u4E00\u4E2A\u6807\u8BC6\u3002\u5F53\u67D0\u4E00\u9879\u5339\u914D\u5165\u7AD9\u534F\u8BAE\u7684\u6807\u8BC6\u65F6\uFF0C\u6B64\u89C4\u5219\u751F\u6548\u3002</p><blockquote><p><code>protocol</code>: [ &quot;http&quot; | &quot;tls&quot; | &quot;bittorrent&quot; ]</p></blockquote><p>\u4E00\u4E2A\u6570\u7EC4\uFF0C\u6570\u7EC4\u5185\u6BCF\u4E00\u9879\u8868\u793A\u4E00\u79CD\u534F\u8BAE\u3002\u5F53\u67D0\u4E00\u4E2A\u534F\u8BAE\u5339\u914D\u5F53\u524D\u8FDE\u63A5\u7684\u534F\u8BAE\u7C7B\u578B\u65F6\uFF0C\u6B64\u89C4\u5219\u751F\u6548\u3002</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>\u5FC5\u987B\u5F00\u542F\u5165\u7AD9\u4EE3\u7406\u4E2D\u7684 <code>sniffing</code> \u9009\u9879, \u624D\u80FD\u55C5\u63A2\u51FA\u8FDE\u63A5\u6240\u4F7F\u7528\u7684\u534F\u8BAE\u7C7B\u578B.</p></div><blockquote><p><code>attrs</code>: string</p></blockquote><p>\u4E00\u6BB5\u811A\u672C\uFF0C\u7528\u4E8E\u68C0\u6D4B\u6D41\u91CF\u7684\u5C5E\u6027\u503C\u3002\u5F53\u6B64\u811A\u672C\u8FD4\u56DE\u771F\u503C\u65F6\uFF0C\u6B64\u89C4\u5219\u751F\u6548\u3002</p>',19),H=n("\u811A\u672C\u8BED\u8A00\u4E3A "),z={href:"https://github.com/bazelbuild/starlark",target:"_blank",rel:"noopener noreferrer"},$=n("Starlark"),J=n("\uFF0C\u5B83\u7684\u8BED\u6CD5\u662F Python \u7684\u5B50\u96C6\u3002\u811A\u672C\u63A5\u53D7\u4E00\u4E2A\u5168\u5C40\u53D8\u91CF "),K=o("code",null,"attrs",-1),Q=n("\uFF0C\u5176\u4E2D\u5305\u542B\u4E86\u6D41\u91CF\u76F8\u5173\u7684\u5C5E\u6027\u3002"),U=t(`<p>\u76EE\u524D\u53EA\u6709 http \u5165\u7AD9\u4EE3\u7406\u4F1A\u8BBE\u7F6E\u8FD9\u4E00\u5C5E\u6027\u3002</p><p>\u793A\u4F8B\uFF1A</p><ul><li>\u68C0\u6D4B HTTP GET\uFF1A<code>&quot;attrs[&#39;:method&#39;] == &#39;GET&#39;&quot;</code></li><li>\u68C0\u6D4B HTTP Path\uFF1A<code>&quot;attrs[&#39;:path&#39;].startswith(&#39;/test&#39;)&quot;</code></li><li>\u68C0\u6D4B Content Type\uFF1A<code>&quot;attrs[&#39;accept&#39;].index(&#39;text/html&#39;) &gt;= 0&quot;</code></li></ul><blockquote><p><code>outboundTag</code>: string</p></blockquote><p>\u5BF9\u5E94\u4E00\u4E2A outbound \u7684\u6807\u8BC6\u3002</p><blockquote><p><code>balancerTag</code>: string</p></blockquote><p>\u5BF9\u5E94\u4E00\u4E2A Balancer \u7684\u6807\u8BC6\u3002</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p><code>balancerTag</code> \u548C <code>outboundTag</code> \u987B\u4E8C\u9009\u4E00\u3002\u5F53\u540C\u65F6\u6307\u5B9A\u65F6\uFF0C<code>outboundTag</code> \u751F\u6548\u3002</p></div><h3 id="balancerobject" tabindex="-1"><a class="header-anchor" href="#balancerobject" aria-hidden="true">#</a> BalancerObject</h3><p>\u8D1F\u8F7D\u5747\u8861\u5668\u914D\u7F6E\u3002\u5F53\u4E00\u4E2A\u8D1F\u8F7D\u5747\u8861\u5668\u751F\u6548\u65F6\uFF0C\u5B83\u4F1A\u4ECE\u6307\u5B9A\u7684 outbound \u4E2D\uFF0C\u6309\u914D\u7F6E\u9009\u51FA\u4E00\u4E2A\u6700\u5408\u9002\u7684 outbound\uFF0C\u8FDB\u884C\u6D41\u91CF\u8F6C\u53D1\u3002</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;tag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;balancer&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;selector&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><blockquote><p><code>tag</code>: string</p></blockquote><p>\u6B64\u8D1F\u8F7D\u5747\u8861\u5668\u7684\u6807\u8BC6\uFF0C\u7528\u4E8E\u5339\u914D <code>RuleObject</code> \u4E2D\u7684 <code>balancerTag</code>\u3002</p><blockquote><p><code>selector</code>: [ string ]</p></blockquote><p>\u4E00\u4E2A\u5B57\u7B26\u4E32\u6570\u7EC4\uFF0C\u5176\u4E2D\u6BCF\u4E00\u4E2A\u5B57\u7B26\u4E32\u5C06\u7528\u4E8E\u548C outbound \u6807\u8BC6\u7684\u524D\u7F00\u5339\u914D\u3002\u5728\u4EE5\u4E0B\u51E0\u4E2A outbound \u6807\u8BC6\u4E2D\uFF1A<code>[ &quot;a&quot;, &quot;ab&quot;, &quot;c&quot;, &quot;ba&quot; ]</code>\uFF0C<code>&quot;selector&quot;: [&quot;a&quot;]</code> \u5C06\u5339\u914D\u5230 <code>[ &quot;a&quot;, &quot;ab&quot; ]</code>\u3002</p><p>\u5982\u679C\u5339\u914D\u5230\u591A\u4E2A outbound\uFF0C\u8D1F\u8F7D\u5747\u8861\u5668\u76EE\u524D\u4F1A\u4ECE\u4E2D\u968F\u673A\u9009\u51FA\u4E00\u4E2A\u4F5C\u4E3A\u6700\u7EC8\u7684 outbound\u3002</p><h3 id="\u9884\u5B9A\u4E49\u57DF\u540D\u5217\u8868" tabindex="-1"><a class="header-anchor" href="#\u9884\u5B9A\u4E49\u57DF\u540D\u5217\u8868" aria-hidden="true">#</a> \u9884\u5B9A\u4E49\u57DF\u540D\u5217\u8868</h3><p>\u6B64\u5217\u8868\u9884\u7F6E\u4E8E\u6BCF\u4E00\u4E2A Xray \u7684\u5B89\u88C5\u5305\u4E2D\uFF0C\u6587\u4EF6\u540D\u4E3A <code>geosite.dat</code>\u3002\u8FD9\u4E2A\u6587\u4EF6\u5305\u542B\u4E86\u4E00\u4E9B\u5E38\u89C1\u7684\u57DF\u540D\uFF0C\u4F7F\u7528\u65B9\u5F0F\uFF1A<code>geosite:filename</code>\uFF0C\u5982 <code>geosite:google</code> \u8868\u793A\u5BF9\u6587\u4EF6\u5185\u7B26\u5408 <code>google</code> \u5185\u5305\u542B\u7684\u57DF\u540D\uFF0C\u8FDB\u884C\u8DEF\u7531\u7B5B\u9009\u6216 DNS \u7B5B\u9009\u3002</p><p>\u5E38\u89C1\u7684\u57DF\u540D\u6709\uFF1A</p><ul><li><code>category-ads</code>\uFF1A\u5305\u542B\u4E86\u5E38\u89C1\u7684\u5E7F\u544A\u57DF\u540D\u3002</li><li><code>category-ads-all</code>\uFF1A\u5305\u542B\u4E86\u5E38\u89C1\u7684\u5E7F\u544A\u57DF\u540D\uFF0C\u4EE5\u53CA\u5E7F\u544A\u63D0\u4F9B\u5546\u7684\u57DF\u540D\u3002</li><li><code>cn</code>\uFF1A\u76F8\u5F53\u4E8E <code>geolocation-cn</code> \u548C <code>tld-cn</code> \u7684\u5408\u96C6\u3002</li><li><code>apple</code>\uFF1A\u5305\u542B\u4E86 Apple \u65D7\u4E0B\u7EDD\u5927\u90E8\u5206\u57DF\u540D\u3002</li><li><code>google</code>\uFF1A\u5305\u542B\u4E86 Google \u65D7\u4E0B\u7EDD\u5927\u90E8\u5206\u57DF\u540D\u3002</li><li><code>microsoft</code>\uFF1A\u5305\u542B\u4E86 Microsoft \u65D7\u4E0B\u7EDD\u5927\u90E8\u5206\u57DF\u540D\u3002</li><li><code>facebook</code>\uFF1A\u5305\u542B\u4E86 Facebook \u65D7\u4E0B\u7EDD\u5927\u90E8\u5206\u57DF\u540D\u3002</li><li><code>twitter</code>\uFF1A\u5305\u542B\u4E86 Twitter \u65D7\u4E0B\u7EDD\u5927\u90E8\u5206\u57DF\u540D\u3002</li><li><code>telegram</code>\uFF1A\u5305\u542B\u4E86 Telegram \u65D7\u4E0B\u7EDD\u5927\u90E8\u5206\u57DF\u540D\u3002</li><li><code>geolocation-cn</code>\uFF1A\u5305\u542B\u4E86\u5E38\u89C1\u7684\u5927\u9646\u7AD9\u70B9\u57DF\u540D\u3002</li><li><code>geolocation-!cn</code>\uFF1A\u5305\u542B\u4E86\u5E38\u89C1\u7684\u975E\u5927\u9646\u7AD9\u70B9\u57DF\u540D\uFF0C\u540C\u65F6\u5305\u542B\u4E86 <code>tld-!cn</code>\u3002</li><li><code>tld-cn</code>\uFF1A\u5305\u542B\u4E86 CNNIC \u7BA1\u7406\u7684\u7528\u4E8E\u4E2D\u56FD\u5927\u9646\u7684\u9876\u7EA7\u57DF\u540D\uFF0C\u5982\u4EE5 <code>.cn</code>\u3001<code>.\u4E2D\u56FD</code> \u7ED3\u5C3E\u7684\u57DF\u540D\u3002</li><li><code>tld-!cn</code>\uFF1A\u5305\u542B\u4E86\u975E\u4E2D\u56FD\u5927\u9646\u4F7F\u7528\u7684\u9876\u7EA7\u57DF\u540D\uFF0C\u5982\u4EE5 <code>.hk</code>\uFF08\u9999\u6E2F\uFF09\u3001<code>.tw</code>\uFF08\u53F0\u6E7E\uFF09\u3001<code>.jp</code>\uFF08\u65E5\u672C\uFF09\u3001<code>.sg</code>\uFF08\u65B0\u52A0\u5761\uFF09\u3001<code>.us</code>\uFF08\u7F8E\u56FD\uFF09<code>.ca</code>\uFF08\u52A0\u62FF\u5927\uFF09\u7B49\u7ED3\u5C3E\u7684\u57DF\u540D\u3002</li></ul>`,20);function W(Y,Z){const e=c("RouterLink"),a=c("ExternalLinkIcon");return l(),i(r,null,[q,o("ul",null,[k,o("li",null,[b,g,h,_,m,s(e,{to:"/en/config/features/env.html#%E8%B5%84%E6%BA%90%E6%96%87%E4%BB%B6%E8%B7%AF%E5%BE%84"},{default:p(()=>[f]),_:1}),y,I,x])]),v,E,P,o("ul",null,[T,o("li",null,[o("a",j,[w,s(a)]),A,B,R]),N,o("li",null,[O,C,D,F,G,s(e,{to:"/en/config/features/env.html#%E8%B5%84%E6%BA%90%E6%96%87%E4%BB%B6%E8%B7%AF%E5%BE%84"},{default:p(()=>[S]),_:1}),L,V,X])]),M,o("p",null,[H,o("a",z,[$,s(a)]),J,K,Q]),U],64)}var no=u(d,[["render",W],["__file","routing.html.vue"]]);export{no as default};