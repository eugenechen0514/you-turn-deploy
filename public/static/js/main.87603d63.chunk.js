(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{177:function(e,t,n){e.exports=n(428)},182:function(e,t,n){},185:function(e,t,n){},190:function(e,t){},192:function(e,t){},257:function(e,t){},258:function(e,t){},428:function(e,t,n){"use strict";n.r(t);var a,i,r=n(0),o=n.n(r),c=n(21),l=n.n(c),s=(n(182),n(19)),u=n(20),h=n(26),m=n(17),d=n(25),p=n(14),g=n(48),f=n(5),y=n.n(f),T=n(23),x=n.n(T),v=n(56),C=n(32),b=n.n(C),S=n(160),E=n.n(S),O=n(73),k=n.n(O),w=n(74),j=n.n(w),I=n(22),M=n.n(I),P=n(39),N=n.n(P),D=n(174),q=n.n(D),R=n(175),F=n.n(R),G=n(173),W=n.n(G),Y=n(35),U=n.n(Y),B=n(93),A=n.n(B),V=n(95),$=n.n(V),J=n(94),H=n.n(J),z=n(96),L=n.n(z),_=n(16),K=n.n(_),Q=n(34),X=n.n(Q),Z=n(172),ee=n.n(Z),te=n(170),ne=n.n(te),ae=n(171),ie=n.n(ae),re=n(98),oe=n.n(re),ce=n(97),le=n.n(ce),se=n(169),ue=n.n(se),he=n(176),me=n.n(he),de=n(168),pe=n.n(de),ge=(n(185),n(99)),fe=n(161),ye=n.n(fe),Te=n(2),xe=n(162),ve=n.n(xe),Ce=1,be=b()("5h")/1e3;!function(e){e.ready="GameStateTypeReady",e.play="GameStateTypePlay",e.pause="GameStateTypePause",e.end="GameStateTypeEnd"}(a||(a={})),function(e){e.unknown="unknown",e.turnTo="turnTo",e.gameStateChange="gameStateChange"}(i||(i={}));var Se=function(){function e(t){var n=t.channel,a=t.type,r=t.clientId;Object(s.a)(this,e),this.channel="",this.type=i.unknown,this.channel=n,this.clientId=r,this.type&&(this.type=a)}return Object(u.a)(e,[{key:"toObject",value:function(){return{type:this.type,channel:this.channel,clientId:this.clientId}}},{key:"toString",value:function(){return JSON.stringify(this.toObject())}}]),e}(),Ee=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(h.a)(this,Object(m.a)(t).call(this,e))).type=i.gameStateChange,n.state=a.ready,n.clients=[],n.currentClientId="",n.thinkTimeOut=b()("5s"),n.delayTimeOut=b()("2s"),n.epic=Ce,e&&e.state&&(n.state=e.state),e&&e.clients&&(n.clients=e.clients),e&&e.currentClientId&&(n.currentClientId=e.currentClientId),e&&e.thinkTimeOut&&(n.thinkTimeOut=e.thinkTimeOut),e&&e.delayTimeOut&&(n.delayTimeOut=e.delayTimeOut),e&&x.a.isNumber(e.epic)&&(n.epic=e.epic),n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"toObject",value:function(){var e=Object(ge.a)(Object(m.a)(t.prototype),"toObject",this).call(this);return Object(g.a)({},e,{state:this.state,clients:this.clients,currentClientId:this.currentClientId,thinkTimeOut:this.thinkTimeOut,delayTimeOut:this.delayTimeOut,epic:this.epic})}},{key:"getHost",value:function(){return this.clientId}}]),t}(Se),Oe=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(h.a)(this,Object(m.a)(t).call(this,e))).type=i.turnTo,n.turnToClientId="",e.turnToClientId&&(n.turnToClientId=e.turnToClientId),n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"toObject",value:function(){var e=Object(ge.a)(Object(m.a)(t.prototype),"toObject",this).call(this);return Object(g.a)({},e,{turnToClientId:this.turnToClientId})}}]),t}(Se),ke=function(){function e(t){var n=t.channel,a=t.clientId;Object(s.a)(this,e),this.channel="",this.clientId="",this.context=new Ee(this.getMeta()),this.channel=n,this.clientId=a,this.context=new Ee(this.getMeta())}return Object(u.a)(e,[{key:"getMeta",value:function(){return{channel:this.channel,clientId:this.clientId}}},{key:"loadCurrentState",value:function(e){if(!(e instanceof Ee))throw new Error("can not load current state");return this.context=e,this.context}},{key:"joinClient",value:function(e,t){return x.a.find(this.context.clients,function(t){return t.id===e})||this.context.clients.push({id:e,name:t,order:this.context.clients.length+1,epic:this.context.epic,enable:!0}),this.context}},{key:"exitClient",value:function(e){var t=x.a.find(this.context.clients,function(t){return t.id===e});return t&&x.a.pull(this.context.clients,t),this.context}},{key:"getStateMessage",value:function(){return this.context.toString()}},{key:"changeToReady",value:function(){return this.context.state=a.ready,this.context}},{key:"changeToEnd",value:function(){return this.context.state=a.end,this.context}},{key:"changeToPause",value:function(){return this.context.state=a.pause,this.context}},{key:"changeToPlay",value:function(){return this.context.state=a.play,this.context}},{key:"changeTimeout",value:function(e){var t=e.thinkTimeOut,n=e.delayTimeOut;return this.context.thinkTimeOut=t,this.context.delayTimeOut=n,this.context}},{key:"getTurnInfo",value:function(){var e=this;if(0===this.context.clients.length)throw new Error("At least one client");var t=this.context.currentClientId,n=this.context.clients.filter(function(t){return t.enable&&e.context.epic===t.epic});if(0!==n.length){var a=n.map(function(e){return e.id}).indexOf(t);a=-1===a?0:a;var i=n.length;return{currentClientId:n[a].id,nextClientId:n[(a+1)%i].id}}}},{key:"deltaOrder",value:function(e,t){var n=x.a.find(this.context.clients,function(t){return t.id===e});return n?(n.order+=t,this.context.clients=this.context.clients.sort(function(e,t){return e.epic-t.epic||e.order-t.order}),this.context):(console.log("[deltaOrder] Can not find ".concat(e)),this.context)}},{key:"deltaEpic",value:function(e){return this.context.epic+=e,this.context}},{key:"deltaClientEpic",value:function(e,t,n){var a=x.a.find(this.context.clients,function(t){return t.id===e});return a?(a.epic+=t,x.a.isNumber(n)&&(a.order=n),this.context.clients=this.context.clients.sort(function(e,t){return e.epic-t.epic||e.order-t.order}),this.context):(console.log("[deltaClientEpic] Can not find ".concat(e)),this.context)}},{key:"toggleEnable",value:function(e){var t=x.a.find(this.context.clients,function(t){return t.id===e});if(t)return t.enable=!t.enable,this.context;console.log("[deltaOrder] Can not find ".concat(e))}}]),e}(),we=function(){function e(t){var n=t.channel,a=t.clientId;Object(s.a)(this,e),this.channel="",this.clientId="",this.channel=n,this.clientId=a}return Object(u.a)(e,[{key:"getMeta",value:function(){return{channel:this.channel,clientId:this.clientId}}},{key:"turnTo",value:function(e){return new Oe(Object(g.a)({},this.getMeta(),{turnToClientId:e})).toString()}}]),e}(),je=function(e){function t(){return Object(s.a)(this,t),Object(h.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"next",value:function(e){e.topic;var t,n=e.message;if((t=n instanceof Te.object?n:JSON.parse(n.toString())).type){var a=t.type;this.emit("message",t),this.emit(a,t)}else this.emit("error",new Error("can not find message type"))}}]),t}(ve.a),Ie=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(h.a)(this,Object(m.a)(t).call(this,e))).client=void 0,n.gameStateManager=void 0,n.messageFactory=void 0,n.messageDispatcher=void 0,n.channel="testchannel",n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"close",value:function(){this.client&&(this.client.connected&&this.client.end(),this.props.onChangeConnected&&this.props.onChangeConnected(!1)),this.client=void 0}},{key:"open",value:function(e){var t=this;this.close(),this.channel=e;var n=this.props.clientId,r=new ke({channel:e,clientId:n}),o=new we({channel:e,clientId:n}),c=new je,l=ye.a.connect(this.props.mqttUrl,{keepalive:be,clientId:n});l.on("connect",function(){l.subscribe(e,function(e){e&&console.error(e)}),t.props.onConnected&&t.props.onConnected(l),t.props.onChangeConnected&&t.props.onChangeConnected(l.connected)}),l.on("message",function(e,t){c.next({topic:e,message:t})}),c.on(i.gameStateChange,function(e){var n=new Ee(e);r.loadCurrentState(n),console.log("=============================="),console.log("Channel by : "+r.context.channel),console.log("thinkTimeOut : "+b()(r.context.thinkTimeOut)),console.log("delayTimeOut : "+b()(r.context.delayTimeOut)),console.log("Host by : "+r.context.getHost()),console.log("Game state : "+r.context.state),console.log("Epic : "+r.context.epic),console.log("Current : "+r.context.currentClientId),console.log("Clients : \n"+r.context.clients.map(function(e){return"".concat(e.enable," - (").concat(e.epic,",").concat(e.order,") - ").concat(e.name," - ").concat(e.id)}).join("\n")),console.log("=============================="),t.props.onChangeThinkTimeOut&&t.props.onChangeThinkTimeOut(r.context.thinkTimeOut),t.props.onChangeDelayTimeOut&&t.props.onChangeDelayTimeOut(r.context.delayTimeOut),t.props.onChangeClients&&t.props.onChangeClients(r.context.clients),t.props.onChangeGameState&&t.props.onChangeGameState(r.context.state),t.props.onTurnTo&&t.props.onTurnTo(r.context.currentClientId),t.props.onChangeEpic&&t.props.onChangeEpic(r.context.epic),r.context.state===a.play&&c.emit(a.play),r.context.state===a.ready&&c.emit(a.ready),r.context.state===a.pause&&c.emit(a.pause),r.context.state===a.end&&c.emit(a.end)}),c.on(i.turnTo,function(e){var n=new Oe(e);t.props.onTurnTo&&t.props.onTurnTo(n.turnToClientId),t.props.clientId===n.turnToClientId?t.props.onTurnYou&&t.props.onTurnYou():t.props.onNotTurnYou&&t.props.onNotTurnYou()}),this.client=l,this.gameStateManager=r,this.messageFactory=o,this.messageDispatcher=c}},{key:"join",value:function(e,t){if(this.gameStateManager&&this.gameStateManager.context.state!==a.ready){var n=new Error('Only join client for "ready" state');return console.error(n),void(this.props.onError&&this.props.onError(n))}if(this.client&&this.gameStateManager){var i=this.gameStateManager.joinClient(e,t);this.client.publish(this.channel,i.toString(),{qos:2,retain:!0})}}},{key:"exit",value:function(e){if(this.client&&this.gameStateManager){var t=this.gameStateManager.exitClient(e);this.client.publish(this.channel,t.toString(),{qos:2,retain:!0})}}},{key:"play",value:function(){if(this.client&&this.gameStateManager&&this.messageFactory){var e=this.gameStateManager.changeToPlay();this.client.publish(this.channel,this.messageFactory.turnTo(e.currentClientId),{qos:2}),this.client.publish(this.channel,e.toString(),{qos:2,retain:!0})}}},{key:"next",value:function(){if(this.client&&this.gameStateManager){var e=this.gameStateManager.context,t=void 0;try{t=this.gameStateManager.getTurnInfo()}catch(n){console.error(n)}t?this.messageFactory&&t&&""===e.currentClientId?(e.currentClientId=t?t.currentClientId:"",this.client.publish(this.channel,this.messageFactory.turnTo(e.currentClientId),{qos:2})):this.messageFactory&&t&&e.currentClientId!==t.nextClientId?(e.currentClientId=t?t.nextClientId:"",this.client.publish(this.channel,this.messageFactory.turnTo(e.currentClientId),{qos:2})):this.messageFactory&&t&&e.currentClientId&&e.currentClientId===t.nextClientId&&(e.currentClientId=t?t.nextClientId:"",this.client.publish(this.channel,this.messageFactory.turnTo(e.currentClientId),{qos:2})):this.props.onEmptyClientInEpic&&this.props.onEmptyClientInEpic(),this.client.publish(this.channel,this.gameStateManager.getStateMessage(),{qos:2,retain:!0})}}},{key:"pause",value:function(){this.client&&this.gameStateManager&&(this.gameStateManager.changeToPause(),this.client.publish(this.channel,this.gameStateManager.getStateMessage(),{qos:2,retain:!0}))}},{key:"end",value:function(){this.client&&this.gameStateManager&&(this.gameStateManager.changeToEnd().currentClientId="",this.client.publish(this.channel,this.gameStateManager.getStateMessage(),{qos:2,retain:!0}))}},{key:"changeTimeout",value:function(e){var t=e.thinkTimeOut,n=e.delayTimeOut;if(this.client&&this.gameStateManager){var a=this.gameStateManager.changeTimeout({thinkTimeOut:t,delayTimeOut:n});this.client.publish(this.channel,a.toString(),{qos:2,retain:!0})}}},{key:"ready",value:function(){this.client&&this.gameStateManager&&(this.gameStateManager.changeToReady().currentClientId="",this.client.publish(this.channel,this.gameStateManager.getStateMessage(),{qos:2,retain:!0}))}},{key:"deltaOrder",value:function(e,t){if(this.client&&this.gameStateManager){this.gameStateManager.deltaOrder(e,t);this.client.publish(this.channel,this.gameStateManager.getStateMessage(),{qos:2,retain:!0})}}},{key:"deltaEpic",value:function(e){if(this.client&&this.gameStateManager){this.gameStateManager.deltaEpic(e);this.client.publish(this.channel,this.gameStateManager.getStateMessage(),{qos:2,retain:!0})}}},{key:"toggleEnable",value:function(e){if(this.client&&this.gameStateManager){this.gameStateManager.toggleEnable(e);this.client.publish(this.channel,this.gameStateManager.getStateMessage(),{qos:2,retain:!0})}}},{key:"deltaClientEpic",value:function(e,t){if(this.client&&this.gameStateManager){this.gameStateManager.deltaClientEpic(e,t);this.client.publish(this.channel,this.gameStateManager.getStateMessage(),{qos:2,retain:!0})}}},{key:"nextClientEpic",value:function(e,t){if(this.client&&this.gameStateManager){var n=this.gameStateManager.context.epic+t,a=this.gameStateManager.context.clients.filter(function(e){return e.enable&&n===e.epic}).map(function(e){return e.order}),i=x.a.isEmpty(a)?0:x.a.max(a),r=(i=i||0)+1;this.gameStateManager.deltaClientEpic(e,t,r);this.client.publish(this.channel,this.gameStateManager.getStateMessage(),{qos:2,retain:!0})}}},{key:"render",value:function(){return o.a.createElement("div",{className:"websocket-proxy"},this.props.children)}}]),t}(r.Component),Me=n(72),Pe=n.n(Me),Ne=n(166),De=n.n(Ne),qe=n(165),Re=n.n(qe),Fe=n(164),Ge=n.n(Fe),We=n(71),Ye=n.n(We);function Ue(e){return o.a.createElement(Ye.a,Object.assign({direction:"up"},e))}var Be=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(n=Object(h.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).handleSave=function(){n.props.onSave&&(n.props.onSave(),n.handleClose())},n.handleClose=function(){n.props.onClose&&n.props.onClose()},n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(Pe.a,{open:this.props.open,TransitionComponent:Ue,keepMounted:!0,onClose:this.handleClose,"aria-labelledby":"alert-dialog-slide-title","aria-describedby":"alert-dialog-slide-description"},o.a.createElement(Ge.a,{id:"alert-dialog-slide-title"},"\u8a2d\u5b9a"),o.a.createElement(Re.a,null,this.props.children),o.a.createElement(De.a,null,o.a.createElement(K.a,{onClick:this.handleClose,color:"primary"},"\u53d6\u6d88"),o.a.createElement(K.a,{onClick:this.handleSave,color:"primary"},"\u5132\u5b58"))))}}]),t}(o.a.Component),Ae=n(167),Ve=n.n(Ae);function $e(e){return o.a.createElement(Ye.a,Object.assign({direction:"up"},e))}var Je=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(n=Object(h.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).handleClose=function(){n.props.onClose&&n.props.onClose()},n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,n=e.title,a=void 0===n?"":n;return o.a.createElement("div",null,o.a.createElement(Pe.a,{fullScreen:!0,open:this.props.open,onClose:this.handleClose,TransitionComponent:$e},o.a.createElement(k.a,{className:t.appBar},o.a.createElement(j.a,null,o.a.createElement(M.a,{color:"inherit",onClick:this.handleClose,"aria-label":"Close"},o.a.createElement(Ve.a,null)),o.a.createElement(N.a,{variant:"h6",color:"inherit",className:t.flex},a))),this.props.children))}}]),t}(o.a.Component),He=Object(v.withStyles)({appBar:{position:"relative"},flex:{flex:1}})(Je),ze=b()("1s");function Le(e,t){var n={title:e,content:{element:"textarea",attributes:{value:t}}};E()(n)}function _e(e){try{return b()(e)}catch(t){console.error(t),Le(t.message,t.stack)}return""}function Ke(e){sessionStorage.setItem("clientId",e.id),sessionStorage.setItem("clientName",e.name)}function Qe(){var e=sessionStorage.getItem("clientId"),t=sessionStorage.getItem("clientName"),n="you-turn_"+Math.random().toString(16).substr(2,8),a={id:e||n,name:t||n};return Ke(a),a}function Xe(e,t){var n=String(e);return x.a.forEach(t,function(e,t){n=n.replace("${"+t+"}",e)}),n}var Ze=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(h.a)(this,Object(m.a)(t).call(this,e))).state={mqttUrl:"",clients:[],clientId:Qe().id,clientName:Qe().name,channel:"testchannel",gameState:a.end,currentClientId:"",connected:!1,thinkTimeOut:0,delayTimeOut:0,settingDialog:!1,turnTimeoutDialog:!1,delayTurnMeSpeechText:"${name} \u518d\u60f3\u4e00\u4e0b",turnMeSpeechText:"${name} \u63db\u4f60\u4e86",timeoutSpeechText:"${name} \u6642\u9593\u5230\u4e86",timeoutTimer:void 0,timeRemain:0,timeRemainTimer:void 0,epic:0,nextEpicDialog:!1},n.wsProxy=o.a.createRef(),n.audioComponent=o.a.createRef(),n.handelChangeClient=n.handelChangeClient.bind(Object(p.a)(Object(p.a)(n))),n.renderClients=n.renderClients.bind(Object(p.a)(Object(p.a)(n))),n.handelTurnTo=n.handelTurnTo.bind(Object(p.a)(Object(p.a)(n))),n.handleTurnYou=n.handleTurnYou.bind(Object(p.a)(Object(p.a)(n))),n.handleCloseTurnTimeoutDialog=n.handleCloseTurnTimeoutDialog.bind(Object(p.a)(Object(p.a)(n))),n.clearTimeoutTimer=n.clearTimeoutTimer.bind(Object(p.a)(Object(p.a)(n))),n.setTimeoutTimer=n.setTimeoutTimer.bind(Object(p.a)(Object(p.a)(n))),n.countdownTimer=n.countdownTimer.bind(Object(p.a)(Object(p.a)(n))),n.playTTS=n.playTTS.bind(Object(p.a)(Object(p.a)(n))),n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("/mymqtt",{method:"GET"}).then(function(e){return e.json()}).then(function(t){t.mqttUrl&&e.setState(function(){return{mqttUrl:t.mqttUrl}})}).catch(function(e){Le(e.message,e.stack)})}},{key:"handelChangeClient",value:function(e){this.setState(function(){return{clients:e}})}},{key:"handelTurnTo",value:function(e){this.setState(function(){return{currentClientId:e}})}},{key:"handleCloseTurnTimeoutDialog",value:function(){this.setState(function(){return{turnTimeoutDialog:!1}})}},{key:"handleOpenTurnTimeoutDialog",value:function(){this.setState(function(){return{turnTimeoutDialog:!0}})}},{key:"handleCloseNextEpicDialog",value:function(){this.setState(function(){return{nextEpicDialog:!1}})}},{key:"handleOpenNextEpicDialog",value:function(){this.setState(function(){return{nextEpicDialog:!0}})}},{key:"playTTS",value:function(e){arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(this.state.gameState===a.play&&this.audioComponent.current){var t=encodeURIComponent(e),n="https://google-translate-proxy.herokuapp.com/api/tts?query=".concat(t,"&language=zh-TW&speed=0.5");this.audioComponent.current.setAttribute("src",n),this.audioComponent.current.load(),this.audioComponent.current.play()}}},{key:"countdownTimer",value:function(e){var t=this,n=e-ze,a=setTimeout(function(){n>0?t.countdownTimer(n):t.setState(function(){return{timeRemain:0,timeRemainTimer:void 0}})},ze);this.setState(function(){return{timeRemain:e,timeRemainTimer:a}})}},{key:"setTimeoutTimer",value:function(e,t){var n=this;this.state.gameState===a.play&&this.clearTimeoutTimer(function(){var a=setTimeout(e,t);n.countdownTimer(t),n.setState(function(){return{timeoutTimer:a,timeRemain:t}})})}},{key:"clearTimeoutTimer",value:function(e){this.state.timeoutTimer&&clearTimeout(this.state.timeoutTimer),this.state.timeRemainTimer&&clearTimeout(this.state.timeRemainTimer),this.setState(function(){return{timeoutTimer:void 0,timeRemainTimer:void 0}},e)}},{key:"handleTurnYou",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.state.thinkTimeOut;if(this.state.gameState===a.play){var n=this.state.clientName;console.log("Turn me: "+n);var i=Xe(this.state.turnMeSpeechText,{name:n});this.playTTS(i),this.handleOpenTurnTimeoutDialog(),this.setTimeoutTimer(function(){var t=Xe(e.state.timeoutSpeechText,{name:n});e.playTTS(t)},t)}}},{key:"handleDelayTurnYou",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.state.delayTimeOut;if(this.state.gameState===a.play){var n=this.state.clientName,i=Xe(this.state.delayTurnMeSpeechText,{name:n});this.playTTS(i),this.setTimeoutTimer(function(){var t=Xe(e.state.timeoutSpeechText,{name:n});e.playTTS(t)},t)}}},{key:"renderClients",value:function(e){var t=this,n=this.props.classes,a=[];return e.forEach(function(e){a.push(o.a.createElement(A.a,{key:e.id},o.a.createElement(H.a,{expandIcon:o.a.createElement($.a,null)},o.a.createElement(N.a,{variant:"body1"},o.a.createElement("span",{className:y()({"App-highlight":e.id===t.state.currentClientId})},"(",e.epic,",",e.order,") ",e.name," - ",e.id))),o.a.createElement(L.a,null,o.a.createElement("div",null,o.a.createElement(M.a,{onClick:function(){t.wsProxy.current&&t.wsProxy.current.deltaClientEpic(e.id,-1)}},o.a.createElement(le.a,null)),o.a.createElement(M.a,{onClick:function(){t.wsProxy.current&&t.wsProxy.current.deltaClientEpic(e.id,1)}},o.a.createElement(oe.a,null)),o.a.createElement(ue.a,{checked:e.enable,onClick:function(){t.wsProxy.current&&t.wsProxy.current.toggleEnable(e.id)},value:e.enable}),o.a.createElement(M.a,{onClick:function(){t.wsProxy.current&&t.wsProxy.current.deltaOrder(e.id,-1)}},o.a.createElement(ne.a,null)),o.a.createElement(M.a,{onClick:function(){t.wsProxy.current&&t.wsProxy.current.deltaOrder(e.id,1)}},o.a.createElement(ie.a,null)),o.a.createElement(M.a,{onClick:function(){t.wsProxy.current&&t.wsProxy.current.exit(e.id)}},o.a.createElement(ee.a,null))))))}),o.a.createElement("div",{className:n.clientPanel},a)}},{key:"renderGameState",value:function(e){return e===a.play?"Play":e===a.ready?"Ready":e===a.end?"End":e===a.pause?"Pause":"End"}},{key:"render",value:function(){var e=this,t=this.props.classes;return o.a.createElement("div",{className:"App"},o.a.createElement(k.a,{position:"static"},o.a.createElement(j.a,null,this.renderGameState(this.state.gameState),o.a.createElement(N.a,{variant:"title",color:"inherit",className:t.grow},this.state.clientName),o.a.createElement(N.a,{variant:"caption",color:"inherit",className:t.grow},this.state.clientId),this.state.connected&&o.a.createElement(M.a,{color:"inherit",onClick:function(){e.setState(function(){return{settingDialog:!0}})}},o.a.createElement(W.a,null)))),o.a.createElement(X.a,{container:!0,spacing:16},o.a.createElement(X.a,{item:!0,xs:12},o.a.createElement(A.a,null,o.a.createElement(H.a,{expandIcon:o.a.createElement($.a,null)},o.a.createElement(N.a,{className:t.heading},this.state.connected?o.a.createElement(q.a,null):o.a.createElement(F.a,null),"\u9023\u7dda")),o.a.createElement(L.a,null,o.a.createElement(X.a,{container:!0,spacing:16},o.a.createElement(X.a,{item:!0,xs:12},o.a.createElement(U.a,{fullWidth:!0,label:"Server",value:this.state.mqttUrl,defaultValue:this.state.mqttUrl,className:t.textField,margin:"normal",onChange:function(t){var n=t.target.value;e.setState(function(){return{mqttUrl:n}})}}),o.a.createElement(U.a,{id:"network-channel",fullWidth:!0,label:"Channel",value:this.state.channel,defaultValue:this.state.channel,className:t.textField,margin:"normal",onChange:function(t){var n=t.target.value;e.setState(function(){return{channel:n}})}}),o.a.createElement(K.a,{variant:"contained",color:"primary",className:t.button,onClick:function(){e.wsProxy.current&&e.wsProxy.current.open(e.state.channel)}},"Open"),o.a.createElement(K.a,{variant:"contained",className:t.button,onClick:function(){e.wsProxy.current&&(e.wsProxy.current.exit(e.state.clientId),e.wsProxy.current.close())}},"Close")),o.a.createElement(X.a,{item:!0,xs:12},o.a.createElement(U.a,{id:"game-name",fullWidth:!0,label:"\u540d\u7a31",value:this.state.clientName,defaultValue:this.state.clientName,className:t.textField,margin:"normal",onChange:function(t){var n=t.target.value;e.setState(function(){return{clientName:n}})}}),o.a.createElement(K.a,{variant:"contained",color:"primary",className:t.button,onClick:function(){e.wsProxy.current&&(Ke({id:e.state.clientId,name:e.state.clientName}),e.wsProxy.current.join(e.state.clientId,e.state.clientName))}},"\u52a0\u5165")))))),o.a.createElement(X.a,{item:!0,xs:12},o.a.createElement(K.a,{className:t.button,onClick:function(){e.wsProxy.current&&e.wsProxy.current.ready()}},"Ready"),o.a.createElement(K.a,{className:t.button,onClick:function(){e.wsProxy.current&&e.wsProxy.current.end()}},"End"),o.a.createElement(K.a,{className:t.button,onClick:function(){e.wsProxy.current&&e.wsProxy.current.play()}},"Play"),o.a.createElement(K.a,{className:t.button,onClick:function(){e.wsProxy.current&&e.wsProxy.current.pause()}},"Pause"),o.a.createElement(K.a,{className:t.button,onClick:function(){e.wsProxy.current&&e.wsProxy.current.next()}},"Next")),o.a.createElement(X.a,{item:!0,xs:12},o.a.createElement("div",{className:t.row},o.a.createElement(M.a,{onClick:function(){e.wsProxy.current&&e.wsProxy.current.deltaEpic(-1)}},o.a.createElement(le.a,null)),o.a.createElement(me.a,{className:t.purpleAvatar},this.state.epic),o.a.createElement(M.a,{onClick:function(){e.wsProxy.current&&e.wsProxy.current.deltaEpic(1)}},o.a.createElement(oe.a,null)))),o.a.createElement(X.a,{item:!0,xs:12},this.renderClients(this.state.clients))),o.a.createElement(Ie,{mqttUrl:this.state.mqttUrl,clientId:this.state.clientId,ref:this.wsProxy,onTurnTo:this.handelTurnTo,onChangeClients:this.handelChangeClient,onChangeGameState:function(t){e.setState(function(){return{gameState:t}})},onTurnYou:this.handleTurnYou,onNotTurnYou:function(){e.clearTimeoutTimer(),e.handleCloseTurnTimeoutDialog()},onChangeConnected:function(t){e.setState(function(){return{connected:t}})},onChangeThinkTimeOut:function(t){e.setState(function(){return{thinkTimeOut:t}})},onChangeDelayTimeOut:function(t){e.setState(function(){return{delayTimeOut:t}})},onError:function(e){Le(e.message,e.stack||"")},onChangeEpic:function(t){e.setState(function(){return{epic:t}})},onEmptyClientInEpic:function(){e.handleOpenNextEpicDialog()}}),o.a.createElement("audio",{id:"player",src:"#",ref:this.audioComponent}),o.a.createElement(Be,{open:this.state.settingDialog,onClose:function(){e.setState(function(){return{settingDialog:!1}})},onSave:function(){e.wsProxy.current&&e.wsProxy.current.changeTimeout({thinkTimeOut:e.state.thinkTimeOut,delayTimeOut:e.state.delayTimeOut})}},o.a.createElement(U.a,{id:"setting-think-timeout",fullWidth:!0,label:"\u601d\u8003\u6642\u9593",value:this.state.thinkTimeOut,defaultValue:this.state.thinkTimeOut,className:t.textField,helperText:_e(this.state.thinkTimeOut),margin:"normal",onChange:function(t){var n=t.target.value;e.setState(function(){return{thinkTimeOut:+n}})}}),o.a.createElement(U.a,{id:"setting-delay-timeout",fullWidth:!0,label:"\u5ef6\u6642\u6642\u9593",value:this.state.delayTimeOut,defaultValue:this.state.delayTimeOut,className:t.textField,helperText:_e(this.state.delayTimeOut),margin:"normal",onChange:function(t){var n=t.target.value;e.setState(function(){return{delayTimeOut:+n}})}}),o.a.createElement(U.a,{fullWidth:!0,label:"\u300c\u63db\u4f60\u300d\u8a9e\u97f3\u6a23\u7248",value:this.state.turnMeSpeechText,defaultValue:this.state.turnMeSpeechText,className:t.textField,helperText:"${name}: \u540d\u7a31",margin:"normal",onChange:function(t){var n=t.target.value;e.setState(function(){return{turnMeSpeechText:n}})}}),o.a.createElement(U.a,{fullWidth:!0,label:"\u300c\u5230\u6642\u300d\u8a9e\u97f3\u6a23\u7248",value:this.state.timeoutSpeechText,defaultValue:this.state.timeoutSpeechText,className:t.textField,helperText:"${name}: \u540d\u7a31",margin:"normal",onChange:function(t){var n=t.target.value;e.setState(function(){return{timeoutSpeechText:n}})}}),o.a.createElement(U.a,{fullWidth:!0,label:"\u300c\u5ef6\u6642\u300d\u8a9e\u97f3\u6a23\u7248",value:this.state.delayTurnMeSpeechText,defaultValue:this.state.delayTurnMeSpeechText,className:t.textField,helperText:"${name}: \u540d\u7a31",margin:"normal",onChange:function(t){var n=t.target.value;e.setState(function(){return{delayTurnMeSpeechText:n}})}})),o.a.createElement(He,{title:"\u63db\u4f60:"+b()(this.state.timeRemain),open:this.state.turnTimeoutDialog,onClose:this.handleCloseTurnTimeoutDialog},o.a.createElement(K.a,{className:t.bigButton,variant:"contained",onClick:function(){e.clearTimeoutTimer(),e.handleDelayTurnYou()}},"\u518d\u4e00\u4e0b"),o.a.createElement(K.a,{className:t.bigButton,variant:"contained",color:"primary",onClick:function(){e.clearTimeoutTimer(),e.wsProxy.current&&e.wsProxy.current.next(),e.handleCloseTurnTimeoutDialog()}},"\u4e0b\u4e00\u4f4d"),o.a.createElement(K.a,{className:t.bigButton,variant:"contained",color:"secondary",onClick:function(){e.clearTimeoutTimer(),e.wsProxy.current&&(e.wsProxy.current.nextClientEpic(e.state.clientId,1),e.wsProxy.current.next()),e.handleCloseTurnTimeoutDialog()}},"\u9032\u5165\u4e0b\u56de\u5408\u4e26\u4e0b\u4e00\u4f4d")),o.a.createElement(He,{title:"\u4e0b\u4e00\u56de\u5408",open:this.state.nextEpicDialog,onClose:this.handleCloseNextEpicDialog},o.a.createElement(K.a,{className:t.bigButton,variant:"contained",color:"primary",onClick:function(){e.wsProxy.current&&e.wsProxy.current.deltaEpic(1),e.wsProxy.current&&e.wsProxy.current.next(),e.handleCloseNextEpicDialog()}},"\u958b\u59cb\u4e0b\u56de\u5408")))}}]),t}(r.Component),et=Object(v.withStyles)(function(e){return{root:{flexGrow:1},grow:{flexGrow:1},heading:{fontSize:e.typography.pxToRem(15),fontWeight:e.typography.fontWeightRegular},textField:{marginLeft:e.spacing.unit,marginRight:e.spacing.unit},button:{margin:e.spacing.unit},bigButton:{margin:e.spacing.unit,width:"95%",height:"32%"},purpleAvatar:{margin:10,color:"#fff",backgroundColor:pe.a[500]},row:{display:"flex",justifyContent:"center"},clientPanel:Object(g.a)({},e.mixins.gutters(),{paddingTop:2*e.spacing.unit,paddingBottom:2*e.spacing.unit})}})(Ze);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(et,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[177,2,1]]]);
//# sourceMappingURL=main.87603d63.chunk.js.map