(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{175:function(e,t,n){e.exports=n(425)},180:function(e,t,n){},183:function(e,t,n){},188:function(e,t){},190:function(e,t){},255:function(e,t){},256:function(e,t){},425:function(e,t,n){"use strict";n.r(t);var a,i,r=n(0),o=n.n(r),c=n(20),l=n.n(c),s=(n(180),n(18)),u=n(19),h=n(24),m=n(15),d=n(23),g=n(21),p=n(5),f=n.n(p),y=n(47),T=n.n(y),C=n(55),v=n(35),O=n.n(v),x=n(156),b=n.n(x),S=n(73),k=n.n(S),E=n(74),j=n.n(E),I=n(46),w=n.n(I),M=n(34),N=n.n(M),P=n(172),D=n.n(P),F=n(173),q=n.n(F),G=n(168),R=n.n(G),W=n(39),Y=n.n(W),B=n(169),A=n.n(B),V=n(171),$=n.n(V),J=n(170),H=n.n(J),z=n(174),L=n.n(z),U=n(16),_=n.n(U),K=n(36),Q=n.n(K),X=n(94),Z=n.n(X),ee=n(164),te=n.n(ee),ne=n(166),ae=n.n(ne),ie=n(165),re=n.n(ie),oe=n(167),ce=n.n(oe),le=(n(183),n(75)),se=n(95),ue=n(157),he=n.n(ue),me=n(2),de=n(158),ge=n.n(de),pe=O()("5h")/1e3;!function(e){e.ready="GameStateTypeReady",e.play="GameStateTypePlay",e.pause="GameStateTypePause",e.end="GameStateTypeEnd"}(a||(a={})),function(e){e.unknown="unknown",e.turnTo="turnTo",e.gameStateChange="gameStateChange"}(i||(i={}));var fe=function(){function e(t){var n=t.channel,a=t.type,r=t.clientId;Object(s.a)(this,e),this.channel="",this.type=i.unknown,this.channel=n,this.clientId=r,this.type&&(this.type=a)}return Object(u.a)(e,[{key:"toObject",value:function(){return{type:this.type,channel:this.channel,clientId:this.clientId}}},{key:"toString",value:function(){return JSON.stringify(this.toObject())}}]),e}(),ye=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(h.a)(this,Object(m.a)(t).call(this,e))).type=i.gameStateChange,n.state=a.ready,n.clients=[],n.currentClientId="",n.thinkTimeOut=O()("5s"),n.delayTimeOut=O()("2s"),e&&e.state&&(n.state=e.state),e&&e.clients&&(n.clients=e.clients),e&&e.currentClientId&&(n.currentClientId=e.currentClientId),e&&e.thinkTimeOut&&(n.thinkTimeOut=e.thinkTimeOut),e&&e.delayTimeOut&&(n.delayTimeOut=e.delayTimeOut),n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"toObject",value:function(){var e=Object(se.a)(Object(m.a)(t.prototype),"toObject",this).call(this);return Object(le.a)({},e,{state:this.state,clients:this.clients,currentClientId:this.currentClientId,thinkTimeOut:this.thinkTimeOut,delayTimeOut:this.delayTimeOut})}},{key:"getHost",value:function(){return this.clientId}}]),t}(fe),Te=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(h.a)(this,Object(m.a)(t).call(this,e))).type=i.turnTo,n.turnToClientId="",e.turnToClientId&&(n.turnToClientId=e.turnToClientId),n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"toObject",value:function(){var e=Object(se.a)(Object(m.a)(t.prototype),"toObject",this).call(this);return Object(le.a)({},e,{turnToClientId:this.turnToClientId})}}]),t}(fe),Ce=function(){function e(t){var n=t.channel,a=t.clientId;Object(s.a)(this,e),this.channel="",this.clientId="",this.context=new ye(this.getMeta()),this.channel=n,this.clientId=a,this.context=new ye(this.getMeta())}return Object(u.a)(e,[{key:"getMeta",value:function(){return{channel:this.channel,clientId:this.clientId}}},{key:"loadCurrentState",value:function(e){if(!(e instanceof ye))throw new Error("can not load current state");return this.context=e,this.context}},{key:"joinClient",value:function(e,t){return T.a.find(this.context.clients,function(t){return t.id===e})||this.context.clients.push({id:e,name:t}),this.context}},{key:"exitClient",value:function(e){var t=T.a.find(this.context.clients,function(t){return t.id===e});return t&&T.a.pull(this.context.clients,t),this.context}},{key:"getStateMessage",value:function(){return this.context.toString()}},{key:"changeToReady",value:function(){return this.context.state=a.ready,this.context}},{key:"changeToEnd",value:function(){return this.context.state=a.end,this.context}},{key:"changeToPause",value:function(){return this.context.state=a.pause,this.context}},{key:"changeToPlay",value:function(){return this.context.state=a.play,this.context}},{key:"changeTimeout",value:function(e){var t=e.thinkTimeOut,n=e.delayTimeOut;return this.context.thinkTimeOut=t,this.context.delayTimeOut=n,this.context}},{key:"getTurnInfo",value:function(){if(0!==this.context.clients.length){var e=this.context.currentClientId,t=this.context.clients.map(function(e){return e.id}).indexOf(e);t=-1===t?0:t;var n=this.context.clients.length;return{currentClientId:this.context.clients[t].id,nextClientId:this.context.clients[(t+1)%n].id}}var a=new Error("At least one client");console.error(a)}}]),e}(),ve=function(){function e(t){var n=t.channel,a=t.clientId;Object(s.a)(this,e),this.channel="",this.clientId="",this.channel=n,this.clientId=a}return Object(u.a)(e,[{key:"getMeta",value:function(){return{channel:this.channel,clientId:this.clientId}}},{key:"turnTo",value:function(e){return new Te(Object(le.a)({},this.getMeta(),{turnToClientId:e})).toString()}}]),e}(),Oe=function(e){function t(){return Object(s.a)(this,t),Object(h.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"next",value:function(e){e.topic;var t,n=e.message;if((t=n instanceof me.object?n:JSON.parse(n.toString())).type){var a=t.type;this.emit("message",t),this.emit(a,t)}else this.emit("error",new Error("can not find message type"))}}]),t}(ge.a),xe=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(h.a)(this,Object(m.a)(t).call(this,e))).client=void 0,n.gameStateManager=void 0,n.messageFactory=void 0,n.messageDispatcher=void 0,n.channel="testchannel",n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"close",value:function(){this.client&&(this.client.connected&&this.client.end(),this.props.onChangeConnected&&this.props.onChangeConnected(!1)),this.client=void 0}},{key:"open",value:function(e){var t=this;this.close(),this.channel=e;var n=this.props.clientId,r=new Ce({channel:e,clientId:n}),o=new ve({channel:e,clientId:n}),c=new Oe,l=he.a.connect("wss://aud.ssp.hinet.net:443/mqtt",{keepalive:pe,clientId:n});l.on("connect",function(){l.subscribe(e,function(e){e&&console.error(e)}),t.props.onConnected&&t.props.onConnected(l),t.props.onChangeConnected&&t.props.onChangeConnected(l.connected)}),l.on("message",function(e,t){c.next({topic:e,message:t})}),c.on(i.gameStateChange,function(e){var n=new ye(e);r.loadCurrentState(n),console.log("=============================="),console.log("Channel by : "+r.context.channel),console.log("thinkTimeOut : "+O()(r.context.thinkTimeOut)),console.log("delayTimeOut : "+O()(r.context.delayTimeOut)),console.log("Host by : "+r.context.getHost()),console.log("Game state : "+r.context.state),console.log("Current : "+r.context.currentClientId),console.log("Clients : \n"+r.context.clients.map(function(e){return"".concat(e.id," - ").concat(e.name)}).join("\n")),console.log("=============================="),t.props.onChangeThinkTimeOut&&t.props.onChangeThinkTimeOut(r.context.thinkTimeOut),t.props.onChangeDelayTimeOut&&t.props.onChangeDelayTimeOut(r.context.delayTimeOut),t.props.onChangeClients&&t.props.onChangeClients(r.context.clients),t.props.onChangeGameState&&t.props.onChangeGameState(r.context.state),t.props.onTurnTo&&t.props.onTurnTo(r.context.currentClientId),r.context.state===a.play&&c.emit(a.play),r.context.state===a.ready&&c.emit(a.ready),r.context.state===a.pause&&c.emit(a.pause),r.context.state===a.end&&c.emit(a.end)}),c.on(i.turnTo,function(e){var n=new Te(e);t.props.onTurnTo&&t.props.onTurnTo(n.turnToClientId),t.props.clientId===n.turnToClientId&&t.props.onTurnYou&&t.props.onTurnYou()}),this.client=l,this.gameStateManager=r,this.messageFactory=o,this.messageDispatcher=c}},{key:"join",value:function(e,t){if(this.gameStateManager&&this.gameStateManager.context.state!==a.ready)console.error(new Error('Only join client for "ready" state'));else if(this.client&&this.gameStateManager){var n=this.gameStateManager.joinClient(e,t);this.client.publish(this.channel,n.toString(),{qos:2,retain:!0})}}},{key:"exit",value:function(e){if(this.client&&this.gameStateManager){var t=this.gameStateManager.exitClient(e);this.client.publish(this.channel,t.toString(),{qos:2,retain:!0})}}},{key:"play",value:function(){if(this.client&&this.gameStateManager&&this.messageFactory){var e=this.gameStateManager.changeToPlay();this.client.publish(this.channel,this.messageFactory.turnTo(e.currentClientId),{qos:2}),this.client.publish(this.channel,e.toString(),{qos:2,retain:!0})}}},{key:"next",value:function(){if(this.client&&this.gameStateManager){var e=this.gameStateManager.context,t=this.gameStateManager.getTurnInfo();this.messageFactory&&t&&""===e.currentClientId?(e.currentClientId=t?t.currentClientId:"",this.client.publish(this.channel,this.messageFactory.turnTo(e.currentClientId),{qos:2})):this.messageFactory&&t&&e.currentClientId!==t.nextClientId&&(e.currentClientId=t?t.nextClientId:"",this.client.publish(this.channel,this.messageFactory.turnTo(e.currentClientId),{qos:2})),this.client.publish(this.channel,this.gameStateManager.getStateMessage(),{qos:2,retain:!0})}}},{key:"pause",value:function(){this.client&&this.gameStateManager&&(this.gameStateManager.changeToPause(),this.client.publish(this.channel,this.gameStateManager.getStateMessage(),{qos:2,retain:!0}))}},{key:"end",value:function(){this.client&&this.gameStateManager&&(this.gameStateManager.changeToEnd().currentClientId="",this.client.publish(this.channel,this.gameStateManager.getStateMessage(),{qos:2,retain:!0}))}},{key:"changeTimeout",value:function(e){var t=e.thinkTimeOut,n=e.delayTimeOut;if(this.client&&this.gameStateManager){var a=this.gameStateManager.changeTimeout({thinkTimeOut:t,delayTimeOut:n});this.client.publish(this.channel,a.toString(),{qos:2,retain:!0})}}},{key:"ready",value:function(){this.client&&this.gameStateManager&&(this.gameStateManager.changeToReady().currentClientId="",this.client.publish(this.channel,this.gameStateManager.getStateMessage(),{qos:2,retain:!0}))}},{key:"render",value:function(){return o.a.createElement("div",{className:"websocket-proxy"},this.props.children)}}]),t}(r.Component),be=n(72),Se=n.n(be),ke=n(162),Ee=n.n(ke),je=n(161),Ie=n.n(je),we=n(160),Me=n.n(we),Ne=n(71),Pe=n.n(Ne);function De(e){return o.a.createElement(Pe.a,Object.assign({direction:"up"},e))}var Fe=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(n=Object(h.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).handleSave=function(){n.props.onSave&&(n.props.onSave(),n.handleClose())},n.handleClose=function(){n.props.onClose&&n.props.onClose()},n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(Se.a,{open:this.props.open,TransitionComponent:De,keepMounted:!0,onClose:this.handleClose,"aria-labelledby":"alert-dialog-slide-title","aria-describedby":"alert-dialog-slide-description"},o.a.createElement(Me.a,{id:"alert-dialog-slide-title"},"\u8a2d\u5b9a"),o.a.createElement(Ie.a,null,this.props.children),o.a.createElement(Ee.a,null,o.a.createElement(_.a,{onClick:this.handleClose,color:"primary"},"\u53d6\u6d88"),o.a.createElement(_.a,{onClick:this.handleSave,color:"primary"},"\u5132\u5b58"))))}}]),t}(o.a.Component),qe=n(163),Ge=n.n(qe);function Re(e){return o.a.createElement(Pe.a,Object.assign({direction:"up"},e))}var We=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(n=Object(h.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).handleClose=function(){n.props.onClose&&n.props.onClose()},n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,n=e.title,a=void 0===n?"":n;return o.a.createElement("div",null,o.a.createElement(Se.a,{fullScreen:!0,open:this.props.open,onClose:this.handleClose,TransitionComponent:Re},o.a.createElement(k.a,{className:t.appBar},o.a.createElement(j.a,null,o.a.createElement(w.a,{color:"inherit",onClick:this.handleClose,"aria-label":"Close"},o.a.createElement(Ge.a,null)),o.a.createElement(N.a,{variant:"h6",color:"inherit",className:t.flex},a))),this.props.children))}}]),t}(o.a.Component),Ye=Object(C.withStyles)({appBar:{position:"relative"},flex:{flex:1}})(We);function Be(e){try{return O()(e)}catch(t){console.error(t),function(e,t){var n={title:e,content:{element:"textarea",attributes:{value:t}}};b()(n)}(t.message,t.stack)}return""}function Ae(e){sessionStorage.setItem("clientId",e.id),sessionStorage.setItem("clientName",e.name)}function Ve(){var e=sessionStorage.getItem("clientId"),t=sessionStorage.getItem("clientName"),n="you-turn_"+Math.random().toString(16).substr(2,8),a={id:e||n,name:t||n};return Ae(a),a}function $e(e,t){var n=String(e);return T.a.forEach(t,function(e,t){n=n.replace("${"+t+"}",e)}),console.log(n),n}var Je=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(h.a)(this,Object(m.a)(t).call(this,e))).state={clients:[],clientId:Ve().id,clientName:Ve().name,channel:"testchannel",gameState:a.end,currentClientId:"",connected:!1,thinkTimeOut:0,delayTimeOut:0,settingDialog:!1,turnTimeoutDialog:!1,turnMeSpeechText:"${name} \u63db\u4f60\u4e86",timeoutSpeechText:"${name} \u6642\u9593\u5230\u4e86"},n.wsProxy=o.a.createRef(),n.audioComponent=o.a.createRef(),n.handelChangeClient=n.handelChangeClient.bind(Object(g.a)(Object(g.a)(n))),n.renderClients=n.renderClients.bind(Object(g.a)(Object(g.a)(n))),n.handelTurnTo=n.handelTurnTo.bind(Object(g.a)(Object(g.a)(n))),n.handleTurnYou=n.handleTurnYou.bind(Object(g.a)(Object(g.a)(n))),n.handleCloseTurnTimeoutDialog=n.handleCloseTurnTimeoutDialog.bind(Object(g.a)(Object(g.a)(n))),n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){}},{key:"handelChangeClient",value:function(e){this.setState(function(){return{clients:e}})}},{key:"handelTurnTo",value:function(e){this.setState(function(){return{currentClientId:e}})}},{key:"handleCloseTurnTimeoutDialog",value:function(){this.setState(function(){return{turnTimeoutDialog:!1}})}},{key:"handleOpenTurnTimeoutDialog",value:function(){this.setState(function(){return{turnTimeoutDialog:!0}})}},{key:"playTTS",value:function(e){if(this.audioComponent.current){var t=encodeURIComponent(e),n="https://google-translate-proxy.herokuapp.com/api/tts?query=".concat(t,"&language=zh-TW&speed=0.5");this.audioComponent.current.setAttribute("src",n),this.audioComponent.current.load(),this.audioComponent.current.play()}}},{key:"handleTurnYou",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.state.thinkTimeOut;if(this.state.gameState===a.play){var n=this.state.clientName;console.log("Turn me: "+n);var i=$e(this.state.turnMeSpeechText,{name:n});this.playTTS(i);setTimeout(function(){var t=$e(e.state.timeoutSpeechText,{name:n});e.playTTS(t),e.handleOpenTurnTimeoutDialog()},t)}}},{key:"renderClients",value:function(e){var t=this,n=[];return e.forEach(function(e){n.push(o.a.createElement(te.a,{key:e.id,dense:!0},o.a.createElement(re.a,{primary:o.a.createElement("span",{className:f()({"App-highlight":e.id===t.state.currentClientId})},e.name)}),o.a.createElement(ae.a,null,o.a.createElement(w.a,{onClick:function(){t.wsProxy.current&&t.wsProxy.current.exit(e.id)}},o.a.createElement(ce.a,null)))))}),o.a.createElement(Z.a,null,n)}},{key:"renderGameState",value:function(e){return e===a.play?"Play":e===a.ready?"Ready":e===a.end?"End":e===a.pause?"Pause":"End"}},{key:"render",value:function(){var e=this,t=this.props.classes;return o.a.createElement("div",{className:"App"},o.a.createElement(k.a,{position:"static"},o.a.createElement(j.a,null,this.renderGameState(this.state.gameState),o.a.createElement(N.a,{variant:"title",color:"inherit",className:t.grow},this.state.clientName),o.a.createElement(N.a,{variant:"caption",color:"inherit",className:t.grow},this.state.clientId),this.state.connected&&o.a.createElement(w.a,{color:"inherit",onClick:function(){e.setState(function(){return{settingDialog:!0}})}},o.a.createElement(R.a,null)))),o.a.createElement(Q.a,{container:!0,spacing:16},o.a.createElement(Q.a,{item:!0,xs:12},o.a.createElement(A.a,null,o.a.createElement(H.a,{expandIcon:o.a.createElement($.a,null)},o.a.createElement(N.a,{className:t.heading},this.state.connected?o.a.createElement(D.a,null):o.a.createElement(q.a,null),"\u9023\u7dda")),o.a.createElement(L.a,null,o.a.createElement(Q.a,{container:!0,spacing:16},o.a.createElement(Q.a,{item:!0,xs:12},o.a.createElement(Y.a,{id:"network-channel",fullWidth:!0,label:"Channel",value:this.state.channel,defaultValue:this.state.channel,className:t.textField,margin:"normal",onChange:function(t){var n=t.target.value;e.setState(function(){return{channel:n}})}}),o.a.createElement(_.a,{variant:"contained",color:"primary",className:t.button,onClick:function(){e.wsProxy.current&&e.wsProxy.current.open(e.state.channel)}},"Open"),o.a.createElement(_.a,{variant:"contained",className:t.button,onClick:function(){e.wsProxy.current&&(e.wsProxy.current.exit(e.state.clientId),e.wsProxy.current.close())}},"Close")),o.a.createElement(Q.a,{item:!0,xs:12},o.a.createElement(Y.a,{id:"game-name",fullWidth:!0,label:"\u540d\u7a31",value:this.state.clientName,defaultValue:this.state.clientName,className:t.textField,margin:"normal",onChange:function(t){var n=t.target.value;e.setState(function(){return{clientName:n}})}}),o.a.createElement(_.a,{variant:"contained",color:"primary",className:t.button,onClick:function(){e.wsProxy.current&&(Ae({id:e.state.clientId,name:e.state.clientName}),e.wsProxy.current.join(e.state.clientId,e.state.clientName))}},"\u52a0\u5165")))))),o.a.createElement(Q.a,{item:!0,xs:12},o.a.createElement(_.a,{className:t.button,onClick:function(){e.wsProxy.current&&e.wsProxy.current.ready()}},"Ready"),o.a.createElement(_.a,{className:t.button,onClick:function(){e.wsProxy.current&&e.wsProxy.current.end()}},"End"),o.a.createElement(_.a,{className:t.button,onClick:function(){e.wsProxy.current&&e.wsProxy.current.play()}},"Play"),o.a.createElement(_.a,{className:t.button,onClick:function(){e.wsProxy.current&&e.wsProxy.current.pause()}},"Pause"),o.a.createElement(_.a,{className:t.button,onClick:function(){e.wsProxy.current&&e.wsProxy.current.next()}},"Next")),o.a.createElement(Q.a,{item:!0,xs:12},this.renderClients(this.state.clients))),o.a.createElement(xe,{clientId:this.state.clientId,ref:this.wsProxy,onTurnTo:this.handelTurnTo,onChangeClients:this.handelChangeClient,onChangeGameState:function(t){e.setState(function(){return{gameState:t}})},onTurnYou:this.handleTurnYou,onChangeConnected:function(t){e.setState(function(){return{connected:t}})},onChangeThinkTimeOut:function(t){e.setState(function(){return{thinkTimeOut:t}})},onChangeDelayTimeOut:function(t){e.setState(function(){return{delayTimeOut:t}})}}),o.a.createElement("audio",{id:"player",src:"#",ref:this.audioComponent}),o.a.createElement(Fe,{open:this.state.settingDialog,onClose:function(){e.setState(function(){return{settingDialog:!1}})},onSave:function(){e.wsProxy.current&&e.wsProxy.current.changeTimeout({thinkTimeOut:e.state.thinkTimeOut,delayTimeOut:e.state.delayTimeOut})}},o.a.createElement(Y.a,{id:"setting-think-timeout",fullWidth:!0,label:"\u601d\u8003\u6642\u9593",value:this.state.thinkTimeOut,defaultValue:this.state.thinkTimeOut,className:t.textField,helperText:Be(this.state.thinkTimeOut),margin:"normal",onChange:function(t){var n=t.target.value;e.setState(function(){return{thinkTimeOut:+n}})}}),o.a.createElement(Y.a,{id:"setting-delay-timeout",fullWidth:!0,label:"\u5ef6\u6642\u6642\u9593",value:this.state.delayTimeOut,defaultValue:this.state.delayTimeOut,className:t.textField,helperText:Be(this.state.delayTimeOut),margin:"normal",onChange:function(t){var n=t.target.value;e.setState(function(){return{delayTimeOut:+n}})}}),o.a.createElement(Y.a,{fullWidth:!0,label:"\u300c\u63db\u4f60\u300d\u8a9e\u97f3\u6a23\u7248",value:this.state.turnMeSpeechText,defaultValue:this.state.turnMeSpeechText,className:t.textField,helperText:"${name}: \u540d\u7a31",margin:"normal",onChange:function(t){var n=t.target.value;e.setState(function(){return{turnMeSpeechText:n}})}}),o.a.createElement(Y.a,{fullWidth:!0,label:"\u300c\u5230\u6642\u300d\u8a9e\u97f3\u6a23\u7248",value:this.state.timeoutSpeechText,defaultValue:this.state.timeoutSpeechText,className:t.textField,helperText:"${name}: \u540d\u7a31",margin:"normal",onChange:function(t){var n=t.target.value;e.setState(function(){return{timeoutSpeechText:n}})}})),o.a.createElement(Ye,{title:"\u6642\u9593\u5230\u4e86",open:this.state.turnTimeoutDialog,onClose:this.handleCloseTurnTimeoutDialog},o.a.createElement(_.a,{className:t.bigButton,variant:"contained",onClick:function(){e.handleTurnYou(e.state.delayTimeOut),e.handleCloseTurnTimeoutDialog()}},"\u518d\u4e00\u4e0b"),o.a.createElement(_.a,{className:t.bigButton,variant:"contained",color:"primary",onClick:function(){e.wsProxy.current&&e.wsProxy.current.next(),e.handleCloseTurnTimeoutDialog()}},"\u4e0b\u4e00\u4f4d")))}}]),t}(r.Component),He=Object(C.withStyles)(function(e){return{root:{flexGrow:1},grow:{flexGrow:1},heading:{fontSize:e.typography.pxToRem(15),fontWeight:e.typography.fontWeightRegular},textField:{marginLeft:e.spacing.unit,marginRight:e.spacing.unit},button:{margin:e.spacing.unit},bigButton:{margin:e.spacing.unit,width:"100%",height:"45%"}}})(Je);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(He,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[175,2,1]]]);
//# sourceMappingURL=main.aae1508a.chunk.js.map