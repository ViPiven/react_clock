(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(6),l=n.n(c),i=n(1),r=n(2),s=n(4),u=n(3),m=(n(12),function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).state={date:new Date},e}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.setState({time:setInterval((function(){e.setState({date:new Date}),console.log(e.state.date.toLocaleTimeString())}),1e3)})}},{key:"componentDidUpdate",value:function(e){e.newName!==this.props.newName&&console.log("The Clock was renamed from\n      +  ".concat(e.newName," to ").concat(this.props.newName))}},{key:"componentWillUnmount",value:function(){clearTimeout(this.state.time)}},{key:"render",value:function(){return o.a.createElement("span",null,this.state.date.toLocaleTimeString())}}]),n}(o.a.Component)),h=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).state={isClockVisible:!0,clockName:0},e.showClock=function(){e.setState({isClockVisible:!0})},e.hideClock=function(){e.setState({isClockVisible:!1})},e.randomClockName=function(){e.setState({clockName:Math.floor(10*Math.random())})},e}return Object(r.a)(n,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement("h1",null,"React clock"),o.a.createElement("p",null,"Current time:"," ",this.state.isClockVisible&&o.a.createElement(m,{newName:this.state.clockName})),o.a.createElement("button",{type:"button",onClick:this.hideClock},"Hide clock"),o.a.createElement("button",{type:"button",onClick:this.showClock},"Show clock"),o.a.createElement("button",{type:"button",onClick:this.randomClockName},"Set random name"))}}]),n}(o.a.Component);l.a.render(o.a.createElement(h,null),document.getElementById("root"))},7:function(e,t,n){e.exports=n(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.9d97d21a.chunk.js.map