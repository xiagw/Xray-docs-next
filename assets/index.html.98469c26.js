import{r as o,o as l,c as e,a as n,b as t,w as r,F as a,e as s}from"./app.edd06e55.js";const u={},c=n("h1",{id:"入站协议",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#入站协议","aria-hidden":"true"},"#"),s(" 入站协议")],-1),d=n("blockquote",null,[n("p",null,"这个章节包含了目前所有可用于 Inbounds 的协议及具体配置细节.")],-1),p=n("h2",{id:"协议列表",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#协议列表","aria-hidden":"true"},"#"),s(" 协议列表")],-1),i=s("Dokodemo-door"),k=n("p",null,"Dokodemo door（任意门）可以监听一个本地端口，并把所有进入此端口的数据发送至指定服务器的一个端口，从而达到端口映射的效果。",-1),h=s("HTTP"),f=n("p",null,"HTTP 协议",-1),b=s("Socks"),m=s("标准 Socks 协议实现，兼容 "),g={href:"http://ftp.icm.edu.pl/packages/socks/socks4/SOCKS4.protocol",target:"_blank",rel:"noopener noreferrer"},S=s("Socks 4"),_=s("、Socks 4a 和 "),q={href:"http://ftp.icm.edu.pl/packages/socks/socks4/SOCKS4.protocol",target:"_blank",rel:"noopener noreferrer"},w=s("Socks 5"),j=s("。"),T=s("VLESS"),v=n("p",null,"VLESS 是一个无状态的轻量传输协议，可以作为 Xray 客户端和服务器之间的桥梁。",-1),L=s("VMess"),V=s("VMess"),x=s(" 是一个加密传输协议，，可以作为 Xray 客户端和服务器之间的桥梁。"),O=s("Trojan"),y={href:"https://trojan-gfw.github.io/trojan/protocol",target:"_blank",rel:"noopener noreferrer"},C=s("Trojan"),D=s(" 协议"),E=s("Shadowsocks"),H={href:"https://zh.wikipedia.org/wiki/Shadowsocks",target:"_blank",rel:"noopener noreferrer"},K=s("Shadowsocks"),M=s(" 协议。");u.render=function(s,u){const P=o("RouterLink"),X=o("OutboundLink");return l(),e(a,null,[c,d,p,n("blockquote",null,[n("p",null,[t(P,{to:"/config/inbounds/dokodemo.html"},{default:r((()=>[i])),_:1})])]),k,n("blockquote",null,[n("p",null,[t(P,{to:"/config/inbounds/http.html"},{default:r((()=>[h])),_:1})])]),f,n("blockquote",null,[n("p",null,[t(P,{to:"/config/inbounds/socks.html"},{default:r((()=>[b])),_:1})])]),n("p",null,[m,n("a",g,[S,t(X)]),_,n("a",q,[w,t(X)]),j]),n("blockquote",null,[n("p",null,[t(P,{to:"/config/inbounds/vless.html"},{default:r((()=>[T])),_:1})])]),v,n("blockquote",null,[n("p",null,[t(P,{to:"/config/inbounds/vmess.html"},{default:r((()=>[L])),_:1})])]),n("p",null,[t(P,{to:"/config/development/protocols/vmess.html"},{default:r((()=>[V])),_:1}),x]),n("blockquote",null,[n("p",null,[t(P,{to:"/config/inbounds/trojan.html"},{default:r((()=>[O])),_:1})])]),n("p",null,[n("a",y,[C,t(X)]),D]),n("blockquote",null,[n("p",null,[t(P,{to:"/config/inbounds/shadowsocks.html"},{default:r((()=>[E])),_:1})])]),n("p",null,[n("a",H,[K,t(X)]),M])],64)};export default u;
