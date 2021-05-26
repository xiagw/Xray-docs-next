(self.webpackChunkXray_docs_next=self.webpackChunkXray_docs_next||[]).push([[4922],{3966:(l,n,m)=>{"use strict";m.r(n),m.d(n,{data:()=>e});const e={key:"v-a75683b8",path:"/en/document/level-0/ch04-security.html",title:"【第 4 章】安全防护篇",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"4.1 为什么要做安全防护",slug:"_4-1-为什么要做安全防护",children:[]},{level:2,title:"4.2 具体的风险到底是什么",slug:"_4-2-具体的风险到底是什么",children:[]},{level:2,title:"4.3 我们要做的安全防护有哪些",slug:"_4-3-我们要做的安全防护有哪些",children:[]},{level:2,title:"4.4 将 SSH 远程登录端口修改为非 22 端口",slug:"_4-4-将-ssh-远程登录端口修改为非-22-端口",children:[]},{level:2,title:"4.5 建立非 root 的新用户",slug:"_4-5-建立非-root-的新用户",children:[]},{level:2,title:"4.6 禁用 root 用户 SSH 远程登录",slug:"_4-6-禁用-root-用户-ssh-远程登录",children:[]},{level:2,title:"4.7 使用 RSA 密钥登录并禁用密码登录",slug:"_4-7-使用-rsa-密钥登录并禁用密码登录",children:[]},{level:2,title:"4.8 你的进度",slug:"_4-8-你的进度",children:[]}],filePathRelative:"en/document/level-0/ch04-security.md",git:{updatedTime:1622027153e3,contributors:[]}}},6201:(l,n,m)=>{"use strict";m.r(n),m.d(n,{default:()=>vl});var e=m(6252);const u=m.p+"assets/img/ch04-img01-nano-ui.dc6314df.png",W=m.p+"assets/img/ch04-img02-sshd-conf-full.36a5653c.gif",s=m.p+"assets/img/ch04-img03-adduser.fe42e5be.png",t=m.p+"assets/img/ch04-img04-adduser-full.a7402a93.gif",c=m.p+"assets/img/ch04-img05-sudo-full.df3f7d98.gif",a=m.p+"assets/img/ch04-img06-ssh-no-root-full.383837a7.gif",i=m.p+"assets/img/ch04-img07-putty-default-user.6d3ef556.png",o=m.p+"assets/img/ch04-img08-puttygen-save.21bcf24c.png",d=m.p+"assets/img/ch04-img09-puttygen-save-keys.91da0f95.png",r=m.p+"assets/img/ch04-img10-winscp-import-session.7ecebe3e.png",k=m.p+"assets/img/ch04-img11-winscp-ui.05e01458.png",p=m.p+"assets/img/ch04-img12-winscp-locations.4a369254.png",U=m.p+"assets/img/ch04-img13-winscp-newfolder-key.c4572908.png",g=m.p+"assets/img/ch04-img14-winscp-upload-key.c5e6a8d3.png",h=m.p+"assets/img/ch04-img15-winscp-rename-key.0d35e494.png",S=m.p+"assets/img/ch04-img16-winscp-full.48f1826c.gif",b=m.p+"assets/img/ch04-img17-rsa-login-full.bea4cbd4.gif",y=m.p+"assets/img/ch04-img18-putty-privatekey-location.6c472eca.png",x=m.p+"assets/img/ch04-img19-putty-privatekey-passphrase.3a69a4c3.png",P=m.p+"assets/img/ch04-img20-winscp-privatekey-location.c3444a4e.png",v=(0,e.Wm)("h1",{id:"【第-4-章】安全防护篇"},[(0,e.Wm)("a",{class:"header-anchor",href:"#【第-4-章】安全防护篇"},"#"),(0,e.Uk)(" 【第 4 章】安全防护篇")],-1),f=(0,e.Wm)("h2",{id:"_4-1-为什么要做安全防护"},[(0,e.Wm)("a",{class:"header-anchor",href:"#_4-1-为什么要做安全防护"},"#"),(0,e.Uk)(" 4.1 为什么要做安全防护")],-1),_=(0,e.Wm)("p",null,"Linux 服务器的安全防护是一个纷繁复杂的巨大课题。无数的网站、APP、服务、甚至线下基础设施都建立在 Linux 的基石之上，这背后牵涉到巨大的经济利益和商业价值，当然也就就意味着黑灰产有巨大的攻击动力。但是这些服务是如此重要、根本不允许出现重大的安全漏洞。于是无数的运维专业人员都在安全攻防的战场上拼搏努力，这才让大家能享受到基本稳定的现代化数字生活。",-1),T=(0,e.Wm)("p",null,"现在，你拥有了一台 VPS，并且将会敞开他的数据访问渠道来达到流量转发的目标，那就相当于你已经置身于安全攻防战场的第一线、直面所有风险。但与此同时，新人由于知识和信息的不足，看待安全问题是总是难免两极分化：要么觉得轻如鸿毛和自己没有半点关系，要么觉得重于泰山甚至惶惶不可终日。",-1),w=(0,e.Wm)("ul",null,[(0,e.Wm)("li",null,[(0,e.Wm)("p",null,"对于前者，我的建议是：安全无小事，尽量多查一些安全方面的信息，免得自己真的受了损失才后悔莫及")]),(0,e.Wm)("li",null,[(0,e.Wm)("p",null,"对于后者，我的建议是：不用紧张，我们的服务器仍不具有太高的价值、一般不会吸引到高水平的攻击，需要面对的基本都是一些自动化脚本的恶意扫描和登录尝试，跟着本文做一些基础的防护即可")])],-1),A=(0,e.Wm)("h2",{id:"_4-2-具体的风险到底是什么"},[(0,e.Wm)("a",{class:"header-anchor",href:"#_4-2-具体的风险到底是什么"},"#"),(0,e.Uk)(" 4.2 具体的风险到底是什么")],-1),L=(0,e.Wm)("p",null,"就像我们在《远程登录篇》配置的一样，任何人只需要知道【IP 地址】+【端口】+【用户名】+【密码】这四个要素，就能登录你的 VPS 服务器。那很显然，这四要素的安全就是我们要防护的底线。我们来逐一分析：",-1),H=(0,e.Wm)("ol",null,[(0,e.Wm)("li",null,[(0,e.Wm)("p",null,"【IP 地址】：恶意脚本会随机尝试和扫描 IP 段，可以简单认为是公开信息、无法隐藏")]),(0,e.Wm)("li",null,[(0,e.Wm)("p",null,[(0,e.Uk)("【端口】：如果使用默认端口，那么【端口 = "),(0,e.Wm)("code",null,"22"),(0,e.Uk)("】")])]),(0,e.Wm)("li",null,[(0,e.Wm)("p",null,[(0,e.Uk)("【用户名】：如果使用默认用户，那么【用户名 = "),(0,e.Wm)("code",null,"root"),(0,e.Uk)("】")])]),(0,e.Wm)("li",null,[(0,e.Wm)("p",null,"【密码】：密码不存在默认值，一定是由 VPS 后台随机生成或由你自行设置的。也就是说，如果你的服务器都是默认设置，则四要素中的三个已经是已知的，那么你整个服务器的安全，就全部寄托在一串小小的密码上了。这时有几种情况："),(0,e.Wm)("ul",null,[(0,e.Wm)("li",null,[(0,e.Wm)("p",null,"如果你用了 VPS 管理后台随机生成密码，它一般包含随机的十几个大小写混杂的字母和符号，相对比较安全")]),(0,e.Wm)("li",null,[(0,e.Wm)("p",null,[(0,e.Uk)("如果你为了好记、把密码改成了类似"),(0,e.Wm)("code",null,"123456"),(0,e.Uk)("这种超弱的密码，破解你的 VPS 服务器可谓不费吹灰之力")])]),(0,e.Wm)("li",null,[(0,e.Wm)("p",null,[(0,e.Uk)("如果你为了好记、把密码改成了比较复杂、但在别的地方用过的密码，其实也并不安全。你要明白黑客手里有作弊器，比如说"),(0,e.Wm)("code",null,"密码表"),(0,e.Uk)("，包含数万、数十万、数百万甚至更多曾经泄漏的真实密码）")])])])]),(0,e.Wm)("li",null,[(0,e.Wm)("p",null,"但你要明白，没有哪个黑客真的要坐在电脑前一次一次的尝试你的密码，全部的攻击尝试都是恶意脚本自动进行的，它会 24 小时不眠不休的工作。也许每天你酣睡之时，你的服务器都在经受着一轮又一轮的冲击。"),(0,e.Wm)("p",null,[(0,e.Uk)("一旦密码被成功撞破，意味着你的四要素全部被攻击者掌握，恶意脚本就会快速登录服务器、获取服务器的最高 "),(0,e.Wm)("code",null,"root"),(0,e.Uk)(" 控制权、安装部署它的恶意服务，然后就可以用你的服务器来 24 小时做各种坏事（比如挖矿、传播病毒、发送垃圾邮件、欺诈邮件、做 BT 中继、甚至暗网公众节点等等等等）。如果恶意脚本比较克制，其实可以做到相当的隐蔽性。而新人一般也不会去观察留意 VPS 的登录记录、进程变化、CPU 占用变化、流量变化等指标，你其实就很难发现自己被黑了。直到你的 VPS 服务商封禁你的账号、或者收到律师函为止。")])]),(0,e.Wm)("li",null,[(0,e.Wm)("p",null,[(0,e.Uk)("别忘了，你获得 VPS 时大概率需要使用真实的支付信息，你登录各种网站、社交平台时也会留下你的 IP 地址，这些都与你的身份有直接或者间接的关系。于是，"),(0,e.Wm)("strong",null,"一旦这些坏事发生，它们就不可避免的与你产生了关联。")])])],-1),V=(0,e.Wm)("h2",{id:"_4-3-我们要做的安全防护有哪些"},[(0,e.Wm)("a",{class:"header-anchor",href:"#_4-3-我们要做的安全防护有哪些"},"#"),(0,e.Uk)(" 4.3 我们要做的安全防护有哪些")],-1),Y=(0,e.Wm)("p",null,"基于上述分析，我们要做的，自然就是对【端口】、【用户名】、【密码】这三要素进行加强，来降低被攻破的风险：",-1),C=(0,e.Wm)("ol",null,[(0,e.Wm)("li",null,"【端口】：将 SSH 远程登录端口修改为【非 22 端口】 （4.4）"),(0,e.Wm)("li",null,"【用户名】：建立【非 root】的新用户、并禁用 root 用户 SSH 远程登录 （4.5、4.6）"),(0,e.Wm)("li",null,"【密码】：SSH 启用 RSA 密钥验证登录、同时禁用密码验证登录 （4.7）")],-1),R=(0,e.Wm)("p",null,"记得按顺序来，别把自己锁在门外了。",-1),z=(0,e.Wm)("h2",{id:"_4-4-将-ssh-远程登录端口修改为非-22-端口"},[(0,e.Wm)("a",{class:"header-anchor",href:"#_4-4-将-ssh-远程登录端口修改为非-22-端口"},"#"),(0,e.Uk)(" 4.4 将 SSH 远程登录端口修改为非 22 端口")],-1),E=(0,e.Wm)("p",null,[(0,e.Uk)("现在，我们来解决【端口 = "),(0,e.Wm)("code",null,"22"),(0,e.Uk)("】的问题。（注意：有些 VPS 服务商，默认的端口已经是非 22 端口，那么你可以忽略这一步，当然也可以跟着本文改成别的端口）")],-1),D=(0,e.Wm)("ol",null,[(0,e.Wm)("li",null,[(0,e.Wm)("p",null,"小小白白 Linux 基础命令："),(0,e.Wm)("table",null,[(0,e.Wm)("thead",null,[(0,e.Wm)("tr",null,[(0,e.Wm)("th",{style:{"text-align":"center"}},"编号"),(0,e.Wm)("th",{style:{"text-align":"center"}},"命令名称"),(0,e.Wm)("th",{style:{"text-align":"center"}},"命令说明")])]),(0,e.Wm)("tbody",null,[(0,e.Wm)("tr",null,[(0,e.Wm)("td",{style:{"text-align":"center"}},[(0,e.Wm)("code",null,"cmd-03")]),(0,e.Wm)("td",{style:{"text-align":"center"}},[(0,e.Wm)("code",null,"nano")]),(0,e.Wm)("td",{style:{"text-align":"center"}},"文本编辑器")]),(0,e.Wm)("tr",null,[(0,e.Wm)("td",{style:{"text-align":"center"}},[(0,e.Wm)("code",null,"cmd-04")]),(0,e.Wm)("td",{style:{"text-align":"center"}},[(0,e.Wm)("code",null,"systemctl restart")]),(0,e.Wm)("td",{style:{"text-align":"center"}},"重启某个服务")])])])]),(0,e.Wm)("li",null,[(0,e.Wm)("p",null,"小小白白 Linux 基础配置文件"),(0,e.Wm)("table",null,[(0,e.Wm)("thead",null,[(0,e.Wm)("tr",null,[(0,e.Wm)("th",{style:{"text-align":"center"}},"编号"),(0,e.Wm)("th",{style:{"text-align":"center"}},"配置文件位置"),(0,e.Wm)("th",{style:{"text-align":"center"}},"文件说明")])]),(0,e.Wm)("tbody",null,[(0,e.Wm)("tr",null,[(0,e.Wm)("td",{style:{"text-align":"center"}},[(0,e.Wm)("code",null,"conf-01")]),(0,e.Wm)("td",{style:{"text-align":"center"}},[(0,e.Wm)("code",null,"/etc/ssh/sshd_config")]),(0,e.Wm)("td",{style:{"text-align":"center"}},"SSH 远程登录程序设置")])])])]),(0,e.Wm)("li",null,[(0,e.Wm)("p",null,[(0,e.Uk)("我们要做的第一件事，当然就是【用"),(0,e.Wm)("code",null,"nano"),(0,e.Uk)("这个文本编辑器打开"),(0,e.Wm)("code",null,"SSH远程登录程序设置"),(0,e.Uk)("】，在 Windows 下，你会【找到文件并双击】，在 Linux 下该怎么办呢？仔细看看上面的命令说明，是不是就很简单了？没错，就是：")]),(0,e.Wm)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,e.Wm)("pre",{class:"language-bash"},[(0,e.Wm)("code",null,[(0,e.Wm)("span",{class:"token function"},"nano"),(0,e.Uk)(" /etc/ssh/sshd_config\n")])]),(0,e.Wm)("div",{class:"line-numbers"},[(0,e.Wm)("span",{class:"line-number"},"1"),(0,e.Wm)("br")])])]),(0,e.Wm)("li",null,[(0,e.Wm)("p",null,[(0,e.Uk)("文件打开后，你就进入了"),(0,e.Wm)("code",null,"nano"),(0,e.Uk)("的界面，稍微观察一下，你会发现，它把重要的快捷键都显示在屏幕下方了（下图红框内），直接开卷考试、不用死记硬背，是不是很贴心呢？")]),(0,e.Wm)("p",null,[(0,e.Wm)("img",{src:u,alt:"nano的界面"})])])],-1),N=(0,e.Wm)("ol",{start:"5"},[(0,e.Wm)("li",null,[(0,e.Wm)("p",null,[(0,e.Uk)("我们要做的第二件事，是【在打开的文件中找到"),(0,e.Wm)("code",null,"Port"),(0,e.Uk)("这一项，并修改它的端口】。Port 后面的数字就是 SSH 的端口，一般建议把它改成一个大于"),(0,e.Wm)("code",null,"1024"),(0,e.Uk)("小于"),(0,e.Wm)("code",null,"65535"),(0,e.Uk)("的整数（本文以"),(0,e.Wm)("code",null,"9753"),(0,e.Uk)("为例）。请结合"),(0,e.Wm)("code",null,"nano"),(0,e.Uk)("的快捷键，想一下该怎么操作呢？果然，你又说对了！就是：")]),(0,e.Wm)("ul",null,[(0,e.Wm)("li",null,[(0,e.Uk)("使用 "),(0,e.Wm)("code",null,"ctrl+w"),(0,e.Uk)(" 进入搜索模式，然后输入 "),(0,e.Wm)("code",null,"Port 22"),(0,e.Uk)(" 并回车")]),(0,e.Wm)("li",null,[(0,e.Uk)("删除 "),(0,e.Wm)("code",null,"22"),(0,e.Uk)(" 并改成 "),(0,e.Wm)("code",null,"9753")]),(0,e.Wm)("li",null,[(0,e.Uk)("说明：如果这一行开头有个"),(0,e.Wm)("code",null,"#"),(0,e.Uk)("，证明这一行【不生效】（被注释掉了），你可像我一样在文件最后写一个不带"),(0,e.Wm)("code",null,"#"),(0,e.Uk)("的，或者把"),(0,e.Wm)("code",null,"#"),(0,e.Uk)("删掉就好。")])]),(0,e.Wm)("div",{class:"custom-container warning"},[(0,e.Wm)("p",{class:"custom-container-title"},"注意"),(0,e.Wm)("p",null,[(0,e.Uk)("本文以"),(0,e.Wm)("code",null,"9753"),(0,e.Uk)("为例，就意味着随着本文的发布，这个端口会变成一个不大不小的特征，也许会被攻击者优先尝试、也许被 GFW 干扰、阻断。所以我强烈建议你用一个自己想到的其他端口，毕竟，你有 6 万多个端口可以自由选择。")])])])],-1),O=(0,e.Wm)("ol",{start:"6"},[(0,e.Wm)("li",null,[(0,e.Wm)("p",null,"我们要做的第三件事，是【保存文件并退出】"),(0,e.Wm)("ul",null,[(0,e.Wm)("li",null,[(0,e.Uk)("如果第 3 步你有仔细观察，就会发现保存并不是常见的 "),(0,e.Wm)("code",null,"ctrl+s"),(0,e.Uk)("。")]),(0,e.Wm)("li",null,[(0,e.Uk)("正确的快捷键：保存是 "),(0,e.Wm)("code",null,"ctrl+o"),(0,e.Uk)(" + "),(0,e.Wm)("code",null,"回车"),(0,e.Uk)("，退出是 "),(0,e.Wm)("code",null,"ctrl+x")])])]),(0,e.Wm)("li",null,[(0,e.Wm)("p",null,"我们最后要做的事，是【重启 ssh 服务，使变更生效】"),(0,e.Wm)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,e.Wm)("pre",{class:"language-bash"},[(0,e.Wm)("code",null,[(0,e.Uk)("systemctl restart "),(0,e.Wm)("span",{class:"token function"},"ssh"),(0,e.Uk)("\n")])]),(0,e.Wm)("div",{class:"line-numbers"},[(0,e.Wm)("span",{class:"line-number"},"1"),(0,e.Wm)("br")])])]),(0,e.Wm)("li",null,[(0,e.Wm)("p",null,"完整流程演示如下："),(0,e.Wm)("p",null,[(0,e.Wm)("img",{src:W,alt:"修改非22端口演示"})])]),(0,e.Wm)("li",null,[(0,e.Wm)("p",null,"修改 PuTTY 配置"),(0,e.Wm)("p",null,[(0,e.Uk)("现在新的端口已经生效，下次使用 PuTTY 登录时就要用"),(0,e.Wm)("code",null,"9753"),(0,e.Uk)("了。所以现在请到 PuTTY 的设置中修改端口号码，然后保存 Session。嗯，你应该知道去哪里改了吧？（如果不知道的话，要重读前面的内容了哦！）")])])],-1),I=(0,e.Wm)("h2",{id:"_4-5-建立非-root-的新用户"},[(0,e.Wm)("a",{class:"header-anchor",href:"#_4-5-建立非-root-的新用户"},"#"),(0,e.Uk)(" 4.5 建立非 root 的新用户")],-1),X=(0,e.Wm)("p",null,[(0,e.Uk)("第二步，我们来解决【用户名 = "),(0,e.Wm)("code",null,"root"),(0,e.Uk)("】的问题。")],-1),G=(0,e.Wm)("p",null,[(0,e.Uk)("首先你要理解， Linux 系统中的"),(0,e.Wm)("code",null,"root"),(0,e.Uk)("，不仅仅是一个管理员账号那么简单。它是整个系统的【根基】、是系统的主宰、至高无上的神。一旦"),(0,e.Wm)("code",null,"root"),(0,e.Uk)("账号出现安全问题，整个系统都只能任人鱼肉、无处可逃。那么就跟随我进行操作吧：")],-1),j=(0,e.Wm)("ol",null,[(0,e.Wm)("li",null,[(0,e.Wm)("p",null,"小小白白 Linux 基础命令："),(0,e.Wm)("table",null,[(0,e.Wm)("thead",null,[(0,e.Wm)("tr",null,[(0,e.Wm)("th",{style:{"text-align":"center"}},"编号"),(0,e.Wm)("th",{style:{"text-align":"center"}},"命令名称"),(0,e.Wm)("th",{style:{"text-align":"center"}},"命令说明")])]),(0,e.Wm)("tbody",null,[(0,e.Wm)("tr",null,[(0,e.Wm)("td",{style:{"text-align":"center"}},[(0,e.Wm)("code",null,"cmd-05")]),(0,e.Wm)("td",{style:{"text-align":"center"}},[(0,e.Wm)("code",null,"adduser")]),(0,e.Wm)("td",{style:{"text-align":"center"}},"给系统新增用户")]),(0,e.Wm)("tr",null,[(0,e.Wm)("td",{style:{"text-align":"center"}},[(0,e.Wm)("code",null,"cmd-06")]),(0,e.Wm)("td",{style:{"text-align":"center"}},[(0,e.Wm)("code",null,"apt install")]),(0,e.Wm)("td",{style:{"text-align":"center"}},"安装某个软件")]),(0,e.Wm)("tr",null,[(0,e.Wm)("td",{style:{"text-align":"center"}},[(0,e.Wm)("code",null,"cmd-07")]),(0,e.Wm)("td",{style:{"text-align":"center"}},[(0,e.Wm)("code",null,"visudo")]),(0,e.Wm)("td",{style:{"text-align":"center"}},"修改 sudo 权限设置专用编辑器")])])])]),(0,e.Wm)("li",null,[(0,e.Wm)("p",null,[(0,e.Uk)("我们要做的第一件事，是【新增一个用户并设定登录密码】，名字你可以随便起，我这里以"),(0,e.Wm)("code",null,"vpsadmin"),(0,e.Uk)("为例：")]),(0,e.Wm)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,e.Wm)("pre",{class:"language-bash"},[(0,e.Wm)("code",null,"adduser vpsadmin\n")]),(0,e.Wm)("div",{class:"line-numbers"},[(0,e.Wm)("span",{class:"line-number"},"1"),(0,e.Wm)("br")])]),(0,e.Wm)("p",null,[(0,e.Uk)("执行命令后，根据提示操作即可。请务必设置一个用户密码（别忘记设置密码时你时看不到 "),(0,e.Wm)("code",null,"******"),(0,e.Uk)(" 的）。之后系统会询问你一些用户的附加信息，这些就可以无视，一路回车即可。")]),(0,e.Wm)("p",null,[(0,e.Wm)("img",{src:s,alt:"建立新用户"})]),(0,e.Wm)("div",{class:"custom-container warning"},[(0,e.Wm)("p",{class:"custom-container-title"},"注意"),(0,e.Wm)("p",null,[(0,e.Uk)("本文以"),(0,e.Wm)("code",null,"vpsadmin"),(0,e.Uk)("为例，就意味着随着本文的发布，这个用户名也会变成一个不大不小的特征，也许会被攻击者优先尝试。所以和端口一样，我强烈建议你用一个自己想到的其他用户名。")])])]),(0,e.Wm)("li",null,[(0,e.Wm)("p",null,"完整流程演示如下："),(0,e.Wm)("p",null,[(0,e.Wm)("img",{src:t,alt:"建立新用户"})])]),(0,e.Wm)("li",null,[(0,e.Wm)("p",null,[(0,e.Uk)("我们要做的第二件事，是【安装"),(0,e.Wm)("code",null,"sudo"),(0,e.Uk)("功能】（"),(0,e.Wm)("code",null,"sudo"),(0,e.Uk)(" 就是在关键时刻，让普通账户临时获得 "),(0,e.Wm)("code",null,"root"),(0,e.Uk)(" 的神力，战力全开拯救世界）")]),(0,e.Wm)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,e.Wm)("pre",{class:"language-bash"},[(0,e.Wm)("code",null,[(0,e.Wm)("span",{class:"token function"},"apt"),(0,e.Uk)(" update "),(0,e.Wm)("span",{class:"token operator"},"&&"),(0,e.Uk)(),(0,e.Wm)("span",{class:"token function"},"apt"),(0,e.Uk)(),(0,e.Wm)("span",{class:"token function"},"install"),(0,e.Uk)(),(0,e.Wm)("span",{class:"token function"},"sudo"),(0,e.Uk)("\n")])]),(0,e.Wm)("div",{class:"line-numbers"},[(0,e.Wm)("span",{class:"line-number"},"1"),(0,e.Wm)("br")])]),(0,e.Wm)("p",null,[(0,e.Uk)("聪明的你大概已经发现，这一行命令其实是两个命令。前一半 "),(0,e.Wm)("code",null,"apt update"),(0,e.Uk)(" 你之前已经见过并且用过了，是去服务器刷新软件版本信息。后面的 "),(0,e.Wm)("code",null,"apt install"),(0,e.Uk)(" 就是这一次要用到的【安装命令】。两条连接在一起，就是让系统去【刷新可用的最新软件，然后安装最新版的"),(0,e.Wm)("code",null,"sudo"),(0,e.Uk)("程序】。 "),(0,e.Wm)("code",null,"&&"),(0,e.Uk)(" 则是把两个命令连起来执行的意思。")])]),(0,e.Wm)("li",null,[(0,e.Wm)("p",null,[(0,e.Uk)("我们要做的第三件事，是【把"),(0,e.Wm)("code",null,"vpsadmin"),(0,e.Uk)("用户加入"),(0,e.Wm)("code",null,"sudo"),(0,e.Uk)("名单里，让他有资格借用"),(0,e.Wm)("code",null,"root"),(0,e.Uk)("的神力】")]),(0,e.Wm)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,e.Wm)("pre",{class:"language-bash"},[(0,e.Wm)("code",null,"visudo\n")]),(0,e.Wm)("div",{class:"line-numbers"},[(0,e.Wm)("span",{class:"line-number"},"1"),(0,e.Wm)("br")])]),(0,e.Wm)("p",null,[(0,e.Uk)("在 "),(0,e.Wm)("code",null,"User Privilege Specification"),(0,e.Uk)(" 下加入一行 "),(0,e.Wm)("code",null,"vpsadmin ALL=(ALL) NOPASSWD: ALL"),(0,e.Uk)(" 即可。")]),(0,e.Wm)("div",{class:"custom-container warning"},[(0,e.Wm)("p",{class:"custom-container-title"},"注意"),(0,e.Wm)("p",null,[(0,e.Uk)("我要特别说明的是"),(0,e.Wm)("code",null,"NOPASSWD"),(0,e.Uk)("这个设置，它的意思是"),(0,e.Wm)("code",null,"vpsadmin"),(0,e.Uk)("用户临时使用"),(0,e.Wm)("code",null,"root"),(0,e.Uk)("权限时，不用额外输入密码。"),(0,e.Wm)("strong",null,"这与一般的安全建议相反"),(0,e.Uk)("。我之所以如此推荐，是因为很多新人不顾危险坚持使用"),(0,e.Wm)("code",null,"root"),(0,e.Uk)("账号就是因为用"),(0,e.Wm)("code",null,"root"),(0,e.Uk)("时不用重复输入密码、觉得轻松。“两害相权取其轻”，我认为【直接用"),(0,e.Wm)("code",null,"root"),(0,e.Uk)("用户的风险】大于【使用"),(0,e.Wm)("code",null,"sudo"),(0,e.Uk)(" 时不用输密码的风险】，所以做了以上的建议。")]),(0,e.Wm)("p",null,[(0,e.Uk)("如果你希望遵守传统习惯、每次使用"),(0,e.Wm)("code",null,"sudo"),(0,e.Uk)("时需要输入密码，那么这一行改成 "),(0,e.Wm)("code",null,"vpsadmin ALL=(ALL:ALL) ALL"),(0,e.Uk)(" 即可。")])])]),(0,e.Wm)("li",null,[(0,e.Wm)("p",null,"完整流程演示如下："),(0,e.Wm)("p",null,[(0,e.Wm)("img",{src:c,alt:"建立新用户"})])])],-1),q=(0,e.Wm)("h2",{id:"_4-6-禁用-root-用户-ssh-远程登录"},[(0,e.Wm)("a",{class:"header-anchor",href:"#_4-6-禁用-root-用户-ssh-远程登录"},"#"),(0,e.Uk)(" 4.6 禁用 root 用户 SSH 远程登录")],-1),B=(0,e.Wm)("ol",null,[(0,e.Wm)("li",null,[(0,e.Wm)("p",null,[(0,e.Uk)("现在你已经逐渐熟悉 Linux 了，所以这次换你思考，我们要做的第一件事是什么呢？没错，还是【用"),(0,e.Wm)("code",null,"nano"),(0,e.Uk)("编辑器打开"),(0,e.Wm)("code",null,"SSH远程登录程序设置"),(0,e.Uk)("】，什么，你想不起来怎么操作了？那去复习一下上面的内容再回来吧！............ 正确答案：")]),(0,e.Wm)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,e.Wm)("pre",{class:"language-bash"},[(0,e.Wm)("code",null,[(0,e.Wm)("span",{class:"token function"},"nano"),(0,e.Uk)(" /etc/ssh/sshd_config\n")])]),(0,e.Wm)("div",{class:"line-numbers"},[(0,e.Wm)("span",{class:"line-number"},"1"),(0,e.Wm)("br")])])]),(0,e.Wm)("li",null,[(0,e.Wm)("p",null,[(0,e.Uk)("找到"),(0,e.Wm)("code",null,"PermitRootLogin Yes"),(0,e.Uk)("这一项，然后把它后面的设定值改为"),(0,e.Wm)("code",null,"no"),(0,e.Uk)("即可。还记得怎么操作吗？............ 正确答案：")]),(0,e.Wm)("ul",null,[(0,e.Wm)("li",null,[(0,e.Uk)("使用 "),(0,e.Wm)("code",null,"ctrl+w"),(0,e.Uk)(" 进入搜索模式，然后输入 "),(0,e.Wm)("code",null,"PermitRootLogin"),(0,e.Uk)(" 并回车")]),(0,e.Wm)("li",null,[(0,e.Uk)("删除 "),(0,e.Wm)("code",null,"yes"),(0,e.Uk)(" 并改成 "),(0,e.Wm)("code",null,"no")])])]),(0,e.Wm)("li",null,[(0,e.Wm)("p",null,"保存文件并退出。还记得怎么操作吗？............ 正确答案："),(0,e.Wm)("ul",null,[(0,e.Wm)("li",null,[(0,e.Uk)("保存是 "),(0,e.Wm)("code",null,"ctrl+o"),(0,e.Uk)("，然后 "),(0,e.Wm)("code",null,"回车"),(0,e.Uk)(" 确认")]),(0,e.Wm)("li",null,[(0,e.Uk)("退出是 "),(0,e.Wm)("code",null,"ctrl+x")])])]),(0,e.Wm)("li",null,[(0,e.Wm)("p",null,"重启 ssh 服务，让变更生效。还记得............ 算了直接公布正确答案："),(0,e.Wm)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,e.Wm)("pre",{class:"language-bash"},[(0,e.Wm)("code",null,[(0,e.Uk)("systemctl restart "),(0,e.Wm)("span",{class:"token function"},"ssh"),(0,e.Uk)("\n")])]),(0,e.Wm)("div",{class:"line-numbers"},[(0,e.Wm)("span",{class:"line-number"},"1"),(0,e.Wm)("br")])])]),(0,e.Wm)("li",null,[(0,e.Wm)("p",null,"完整流程演示如下："),(0,e.Wm)("p",null,[(0,e.Wm)("img",{src:a,alt:"禁用root用户SSH远程登录"})])]),(0,e.Wm)("li",null,[(0,e.Wm)("p",null,[(0,e.Uk)("下次通过 PuTTY 远程 SSH 登录的时候，"),(0,e.Wm)("code",null,"root"),(0,e.Uk)("用户已无法连接，用户名就要换成"),(0,e.Wm)("code",null,"vpsadmin"),(0,e.Uk)("了！方便起见，我们可以在 PuTTY 中把"),(0,e.Wm)("code",null,"vpsadmin"),(0,e.Uk)("设置成默认登录用户名。（啰嗦君：别忘了保存 Session）")]),(0,e.Wm)("p",null,[(0,e.Wm)("img",{src:i,alt:"PuTTY设置默认用户名"})])])],-1),F=(0,e.Wm)("h2",{id:"_4-7-使用-rsa-密钥登录并禁用密码登录"},[(0,e.Wm)("a",{class:"header-anchor",href:"#_4-7-使用-rsa-密钥登录并禁用密码登录"},"#"),(0,e.Uk)(" 4.7 使用 RSA 密钥登录并禁用密码登录")],-1),J=(0,e.Wm)("p",null,"第三步，我们来解决【密码】可能被撞破的问题。",-1),K=(0,e.Wm)("p",null,"前面我说过，黑客并不是很蠢的用穷举法破解你的密码，而是会用一些比如“密码表”的作弊手段。除非你用的是随机生成的超长密码（比如借助 1Password，或者 macOS 的 keychain 等密码管理工具），否则很容易中招。",-1),M=(0,e.Wm)("p",null,"超长随机密码虽然安全性有所提高，但是基本上无法记忆，手动输入也十分麻烦易错。为了解决这个困境，我们可以直接弃用【密码验证】方式，改用更安全的【密钥验证】。",-1),Q=(0,e.Wm)("p",null,"所谓的【密钥验证】，就是生成【一对】相关联的密钥文件（公钥和私钥），然后把【公钥】上传到 VPS 备用。每次登录时，SSH 会将【公钥】和【私钥】进行匹配，若验证是正确的【密钥对】，则验证通过。（换言之，你无需记忆和输入复杂的密码，只要保护好【私钥】这个文件不外泄即可）",-1),Z=(0,e.Wm)("div",{class:"custom-container warning"},[(0,e.Wm)("p",{class:"custom-container-title"},"注意"),(0,e.Wm)("p",null,[(0,e.Uk)("本文以 "),(0,e.Wm)("code",null,"RSA"),(0,e.Uk)(" 密钥举例，是因为 "),(0,e.Wm)("code",null,"RSA"),(0,e.Uk)(" 密钥在各种设备、各种 "),(0,e.Wm)("code",null,"SSH"),(0,e.Uk)(" 客户端中有广泛悠久的支持历史，且目前依然能提供够用的安全性。但它绝非唯一选择。")]),(0,e.Wm)("p",null,"其他的常见密钥还有："),(0,e.Wm)("ul",null,[(0,e.Wm)("li",null,[(0,e.Wm)("code",null,"DSA"),(0,e.Uk)(" - 已经从数学层面被证明不安全，所以永远不要用它")]),(0,e.Wm)("li",null,[(0,e.Wm)("code",null,"ECDSA"),(0,e.Uk)(" - 密钥小安全性高，但其算法被指留有 NSA 的后门，如果你的 VPS 上有值得 NSA 关注的东西就不要用它")]),(0,e.Wm)("li",null,[(0,e.Wm)("code",null,"Ed25519"),(0,e.Uk)(" - 这是一个与 "),(0,e.Wm)("code",null,"ECDSA"),(0,e.Uk)(" 十分类似的算法，故具有相似的性能优势。同时其文档全部公开，所以普遍认为无后门")])]),(0,e.Wm)("p",null,[(0,e.Uk)("所以，如果你的设备和软件都支持的话，我建议优先选择 "),(0,e.Wm)("code",null,"Ed25519"),(0,e.Uk)(" 密钥。")])],-1),$=(0,e.Wm)("p",null,"那我们现在就来配置【密钥验证】吧！",-1),ll=(0,e.Wm)("li",null,[(0,e.Wm)("p",null,[(0,e.Uk)("运行"),(0,e.Wm)("code",null,"PuTTYgen"),(0,e.Uk)(" (PuTTY 密钥生成器)。位置是 "),(0,e.Wm)("code",null,"开始菜单"),(0,e.Uk)(" --\x3e "),(0,e.Wm)("code",null,"所有程序"),(0,e.Uk)(" --\x3e "),(0,e.Wm)("code",null,"PuTTY (64-bit)"),(0,e.Uk)(" --\x3e "),(0,e.Wm)("code",null,"PuTTYgen")]),(0,e.Wm)("ol",null,[(0,e.Wm)("li",null,[(0,e.Wm)("p",null,[(0,e.Uk)("点击"),(0,e.Wm)("code",null,"Generate"),(0,e.Uk)("开始生成（在界面空白处乱晃鼠标增加随机数）")]),(0,e.Wm)("p",null,[(0,e.Wm)("img",{src:o,alt:"生成密钥"})])])]),(0,e.Wm)("div",{class:"custom-container warning"},[(0,e.Wm)("p",{class:"custom-container-title"},"注意"),(0,e.Wm)("p",null,[(0,e.Uk)("本图中是以 "),(0,e.Wm)("code",null,"2048"),(0,e.Uk)(" 位的 "),(0,e.Wm)("code",null,"RSA"),(0,e.Uk)(" 密钥为例的。但实际上，如果要获得与 "),(0,e.Wm)("code",null,"EDCSA/Ed25519"),(0,e.Uk)(" 的 "),(0,e.Wm)("code",null,"256"),(0,e.Uk)(" 位密钥相同的安全性，你需要使用 "),(0,e.Wm)("code",null,"3072"),(0,e.Uk)(" 位的 "),(0,e.Wm)("code",null,"RSA"),(0,e.Uk)(" 密钥。（即右下角的数字改成 "),(0,e.Wm)("code",null,"3072"),(0,e.Uk)("）")])]),(0,e.Wm)("ol",{start:"2"},[(0,e.Wm)("li",null,[(0,e.Wm)("p",null,"你可以给私钥设置密码，增加一层安全性")]),(0,e.Wm)("li",null,[(0,e.Wm)("p",null,[(0,e.Uk)("点击 "),(0,e.Wm)("code",null,"Save public key"),(0,e.Uk)(" 保存公钥，文件名为 "),(0,e.Wm)("code",null,"id_rsa.pub")])]),(0,e.Wm)("li",null,[(0,e.Wm)("p",null,[(0,e.Uk)("点击 "),(0,e.Wm)("code",null,"Save private key"),(0,e.Uk)(" 保存私钥，文件名为 "),(0,e.Wm)("code",null,"id_rsa"),(0,e.Uk)(" (PuTTY 私钥自带"),(0,e.Wm)("code",null,".ppk"),(0,e.Uk)("后缀)")])]),(0,e.Wm)("li",null,[(0,e.Wm)("p",null,[(0,e.Uk)("最重要的，将上方红框内的内容，向下滚动全部复制出来并保存，文件名为 "),(0,e.Wm)("code",null,"authorized_keys"),(0,e.Uk)("。（用 vscode 保存，默认会变成带"),(0,e.Wm)("code",null,"txt"),(0,e.Uk)("后缀的文本文件，这没关系，之后上传 VPS 时我们会把后缀名去掉）")]),(0,e.Wm)("p",null,[(0,e.Wm)("img",{src:d,alt:"保存密钥"})])])])],-1),nl=(0,e.Wm)("p",null,[(0,e.Uk)("将公钥上传至 VPS 的"),(0,e.Wm)("code",null,"vpsadmin"),(0,e.Uk)("用户下")],-1),ml=(0,e.Wm)("li",null,[(0,e.Wm)("p",null,[(0,e.Uk)("这一步就需要用到之前准备的"),(0,e.Wm)("code",null,"WinSCP"),(0,e.Uk)("了。")])],-1),el=(0,e.Uk)("去"),ul={href:"https://winscp.net/eng/index.php",target:"_blank",rel:"noopener noreferrer"},Wl=(0,e.Uk)("官网"),sl=(0,e.Uk)("下载并安装，会提示你导入 PuTTY 的设置，当然一键导入啦！"),tl=(0,e.Wm)("p",null,[(0,e.Wm)("img",{src:r,alt:"一键导入Session"})],-1),cl=(0,e.Wm)("li",null,[(0,e.Wm)("p",null,"如果没有提示导入或者你已经提前安装好了，那按照下图进行配置即可"),(0,e.Wm)("p",null,[(0,e.Wm)("img",{src:k,alt:"WinSCP登录设置"})])],-1),al=(0,e.Wm)("li",null,[(0,e.Wm)("p",null,"WinSCP 左边的目录就是本地电脑上的文件夹和文件，请定位到密钥所在的文件夹")],-1),il=(0,e.Wm)("li",null,[(0,e.Wm)("p",null,[(0,e.Uk)("WinSCP 右边的目录则是 VPS 服务器上的文件夹和文件，默认就在 "),(0,e.Wm)("code",null,"/home/vpsadmin/"),(0,e.Uk)(" 文件夹，此时在请点击右下角 "),(0,e.Wm)("code",null,"X hidden"),(0,e.Uk)(" 来显示隐藏文件")]),(0,e.Wm)("p",null,[(0,e.Wm)("img",{src:p,alt:"本地和远程文件夹"})])],-1),ol=(0,e.Wm)("li",null,[(0,e.Wm)("p",null,[(0,e.Uk)("在右边（VPS 中）点击右键并新建文件夹，起名"),(0,e.Wm)("code",null,".ssh"),(0,e.Uk)(" （注意有一个"),(0,e.Wm)("code",null,"."),(0,e.Uk)("）")]),(0,e.Wm)("p",null,[(0,e.Wm)("img",{src:U,alt:"在VPS中建立放置公钥的文件夹"})])],-1),dl=(0,e.Wm)("li",null,[(0,e.Wm)("p",null,[(0,e.Uk)("将【公钥】"),(0,e.Wm)("code",null,"authorized_keys"),(0,e.Uk)("上传到"),(0,e.Wm)("code",null,".ssh"),(0,e.Uk)("文件夹内")]),(0,e.Wm)("p",null,[(0,e.Wm)("img",{src:g,alt:"上传authorized_keys"})])],-1),rl=(0,e.Wm)("li",null,[(0,e.Wm)("p",null,[(0,e.Uk)("在上传时，将【公钥】从 "),(0,e.Wm)("code",null,"authorized_keys.txt"),(0,e.Uk)(" 改名为 "),(0,e.Wm)("code",null,"authorized_keys"),(0,e.Uk)("（去掉"),(0,e.Wm)("code",null,".txt"),(0,e.Uk)("这个后缀名）")]),(0,e.Wm)("p",null,[(0,e.Wm)("img",{src:h,alt:"确保没有任何后缀"})])],-1),kl=(0,e.Wm)("li",null,[(0,e.Wm)("p",null,"完整流程演示如下："),(0,e.Wm)("p",null,[(0,e.Wm)("img",{src:S,alt:"WinSCP操作完整演示"})])],-1),pl=(0,e.Wm)("li",null,[(0,e.Wm)("p",null,"在 VPS 端设置 SSH 启用 RSA 密钥验证登录、同时禁用密码验证登录"),(0,e.Wm)("ol",null,[(0,e.Wm)("li",null,[(0,e.Wm)("p",null,"小小白白 Linux 基础命令："),(0,e.Wm)("table",null,[(0,e.Wm)("thead",null,[(0,e.Wm)("tr",null,[(0,e.Wm)("th",{style:{"text-align":"center"}},"编号"),(0,e.Wm)("th",{style:{"text-align":"center"}},"命令名称"),(0,e.Wm)("th",{style:{"text-align":"center"}},"命令说明")])]),(0,e.Wm)("tbody",null,[(0,e.Wm)("tr",null,[(0,e.Wm)("td",{style:{"text-align":"center"}},[(0,e.Wm)("code",null,"cmd-08")]),(0,e.Wm)("td",{style:{"text-align":"center"}},[(0,e.Wm)("code",null,"sudo")]),(0,e.Wm)("td",{style:{"text-align":"center"}},[(0,e.Uk)("用"),(0,e.Wm)("code",null,"root"),(0,e.Uk)("权限运行某个命令")])]),(0,e.Wm)("tr",null,[(0,e.Wm)("td",{style:{"text-align":"center"}},[(0,e.Wm)("code",null,"cmd-09")]),(0,e.Wm)("td",{style:{"text-align":"center"}},[(0,e.Wm)("code",null,"chmod")]),(0,e.Wm)("td",{style:{"text-align":"center"}},"修改目标文件/文件夹的权限")])])])]),(0,e.Wm)("li",null,[(0,e.Wm)("p",null,"SSH 远程连接到 VPS 上（PuTTY）")]),(0,e.Wm)("li",null,[(0,e.Wm)("p",null,[(0,e.Uk)("修改 "),(0,e.Wm)("code",null,"authorized_keys"),(0,e.Uk)(" 文件权限为 "),(0,e.Wm)("code",null,"600"),(0,e.Uk)(" （仅所有者可读可写）")]),(0,e.Wm)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,e.Wm)("pre",{class:"language-bash"},[(0,e.Wm)("code",null,[(0,e.Wm)("span",{class:"token function"},"chmod"),(0,e.Uk)(),(0,e.Wm)("span",{class:"token number"},"600"),(0,e.Uk)(" ~/.ssh/authorized_keys\n")])]),(0,e.Wm)("div",{class:"line-numbers"},[(0,e.Wm)("span",{class:"line-number"},"1"),(0,e.Wm)("br")])])]),(0,e.Wm)("li",null,[(0,e.Wm)("p",null,[(0,e.Uk)("修改 SSH 配置。这个我们已经用了很多次，但现在我们已经从无所不能的"),(0,e.Wm)("code",null,"root"),(0,e.Uk)("变成了普通用户"),(0,e.Wm)("code",null,"vpsadmin"),(0,e.Uk)("，此时的我们是没有权限直接编辑 SSH 配置的。这时候就需要使用"),(0,e.Wm)("code",null,"sudo"),(0,e.Uk)("命令了：")]),(0,e.Wm)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,e.Wm)("pre",{class:"language-bash"},[(0,e.Wm)("code",null,[(0,e.Wm)("span",{class:"token function"},"sudo"),(0,e.Uk)(),(0,e.Wm)("span",{class:"token function"},"nano"),(0,e.Uk)(" /etc/ssh/sshd_config\n")])]),(0,e.Wm)("div",{class:"line-numbers"},[(0,e.Wm)("span",{class:"line-number"},"1"),(0,e.Wm)("br")])])]),(0,e.Wm)("li",null,[(0,e.Wm)("p",null,[(0,e.Uk)("找到("),(0,e.Wm)("code",null,"ctrl+w"),(0,e.Uk)(") "),(0,e.Wm)("code",null,"PasswordAuthentication"),(0,e.Uk)(" 改成 "),(0,e.Wm)("code",null,"no")])]),(0,e.Wm)("li",null,[(0,e.Wm)("p",null,[(0,e.Uk)("找到("),(0,e.Wm)("code",null,"ctrl+w"),(0,e.Uk)(") "),(0,e.Wm)("code",null,"PubkeyAuthentication"),(0,e.Uk)(" 改成 "),(0,e.Wm)("code",null,"yes"),(0,e.Uk)("，然后保存("),(0,e.Wm)("code",null,"ctrl+o"),(0,e.Uk)(")退出("),(0,e.Wm)("code",null,"ctrl+x"),(0,e.Uk)(")")])]),(0,e.Wm)("li",null,[(0,e.Wm)("p",null,[(0,e.Uk)("重启 SSH 服务。（啰嗦君：别忘了现在需要使用"),(0,e.Wm)("code",null,"sudo"),(0,e.Uk)("来获得权限）")]),(0,e.Wm)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,e.Wm)("pre",{class:"language-bash"},[(0,e.Wm)("code",null,[(0,e.Wm)("span",{class:"token function"},"sudo"),(0,e.Uk)(" systemctl restart "),(0,e.Wm)("span",{class:"token function"},"ssh"),(0,e.Uk)("\n")])]),(0,e.Wm)("div",{class:"line-numbers"},[(0,e.Wm)("span",{class:"line-number"},"1"),(0,e.Wm)("br")])])]),(0,e.Wm)("li",null,[(0,e.Wm)("p",null,"完整流程如下:"),(0,e.Wm)("p",null,[(0,e.Wm)("img",{src:b,alt:"SSH开启密钥验证并禁用密码验证"})])])])],-1),Ul=(0,e.Wm)("li",null,[(0,e.Wm)("p",null,"VPS 端已经设置好了公钥，现在要给 PuTTY 指定私钥位置供登录时使用（啰嗦君：别忘了保存 Session）"),(0,e.Wm)("p",null,[(0,e.Wm)("img",{src:y,alt:"PuTTY指定私钥位置"})])],-1),gl=(0,e.Wm)("li",null,[(0,e.Wm)("p",null,[(0,e.Uk)("至此，【密钥登录】已成功开启、【密码验证】已成功关闭、并且还给 PuTTY 保存了默认的登录用户名和私钥。未来使用 PuTTY 登录时，载入"),(0,e.Wm)("code",null,"VPS-SERVER"),(0,e.Uk)("配置后，点击"),(0,e.Wm)("code",null,"Open"),(0,e.Uk)("就可以一键登录了。")]),(0,e.Wm)("p",null,"如果你给私钥设置了密码保护，登录时当然还需要输入这个密码才能使用密钥，如下图："),(0,e.Wm)("p",null,[(0,e.Wm)("img",{src:x,alt:"输入私钥密码"})])],-1),hl=(0,e.Wm)("li",null,[(0,e.Wm)("p",null,[(0,e.Uk)("别忘了给"),(0,e.Wm)("code",null,"WinSCP"),(0,e.Uk)("也做对应的密钥设置，否则之后想要传输文件时就无法登录了：")]),(0,e.Wm)("p",null,[(0,e.Wm)("img",{src:P,alt:"WinSCP指定私钥位置"})])],-1),Sl=(0,e.Wm)("div",{class:"custom-container warning"},[(0,e.Wm)("p",{class:"custom-container-title"},"注意"),(0,e.Wm)("p",null,"任何需要借助 SSH 进行登录的软件都需要密钥验证了，软件过多，无法逐一展示，请根据你的需要自行设置好哦")],-1),bl=(0,e.Wm)("h2",{id:"_4-8-你的进度"},[(0,e.Wm)("a",{class:"header-anchor",href:"#_4-8-你的进度"},"#"),(0,e.Uk)(" 4.8 你的进度")],-1),yl=(0,e.Wm)("p",null,"到这里为止，你的 VPS 已经完成了【端口】、【用户名】、【密码】这三要素的基本安全保障，虽然远称不上固若金汤，但一般的恶意脚本应该已经无法对你造成伤害了！",-1),xl=(0,e.Wm)("p",null,"现在我们终于有了一个安全的系统基础，下一章，我们就可以开始逐步安装配置 Xray 需要的基础设施了！（什么基础设施呢？一个网页，一张证书）",-1),Pl=(0,e.Wm)("blockquote",null,[(0,e.Wm)("p",null,"⬛⬛⬛⬛⬜⬜⬜⬜ 50%")],-1),vl={render:function(l,n){const m=(0,e.up)("OutboundLink");return(0,e.wg)(),(0,e.j4)(e.HY,null,[v,f,_,T,w,A,L,H,V,Y,C,R,z,E,D,N,O,I,X,G,j,q,B,F,J,K,M,Q,Z,$,(0,e.Wm)("ol",null,[ll,(0,e.Wm)("li",null,[nl,(0,e.Wm)("ol",null,[ml,(0,e.Wm)("li",null,[(0,e.Wm)("p",null,[el,(0,e.Wm)("a",ul,[Wl,(0,e.Wm)(m)]),sl]),tl]),cl,al,il,ol,dl,rl,kl])]),pl,Ul,gl,hl]),Sl,bl,yl,xl,Pl],64)}}}}]);