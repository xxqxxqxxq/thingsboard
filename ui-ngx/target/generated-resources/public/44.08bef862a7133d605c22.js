(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{"+8KB":function(e,i){var s,t;s=jQuery,t={series:{pie:{show:!1,radius:"auto",innerRadius:0,startAngle:1.5,tilt:1,shadow:{left:5,top:15,alpha:.02},offset:{top:0,left:"auto"},stroke:{color:"#fff",width:1},label:{show:"auto",formatter:function(e,i){return"<div style='font-size:x-small;text-align:center;padding:2px;color:"+i.color+";'>"+e+"<br/>"+Math.round(i.percent)+"%</div>"},radius:1,background:{color:null,opacity:0},threshold:0},combine:{threshold:-1,color:null,label:"Other"},highlight:{opacity:.5}}}},void s.plot.plugins.push({init:function(e){var i=null,t=null,r=null,a=null,l=null,n=null,o=!1,p=null,h=[];function c(e){o||(o=!0,i=e.getCanvas(),t=s(i).parent(),r=e.getOptions(),e.setData(function(e){var i,t,a=0,l=0,n=0,o=r.series.pie.combine.color,p=[];for(i=0;i<e.length;++i)t=e[i].data,s.isArray(t)&&1===t.length&&(t=t[0]),s.isArray(t)?!isNaN(parseFloat(t[1]))&&isFinite(t[1])?t[1]=+t[1]:t[1]=0:t=!isNaN(parseFloat(t))&&isFinite(t)?[1,+t]:[1,0],e[i].data=[t];for(i=0;i<e.length;++i)a+=e[i].data[0][1];for(i=0;i<e.length;++i)(t=e[i].data[0][1])/a<=r.series.pie.combine.threshold&&(l+=t,n++,o||(o=e[i].color));for(i=0;i<e.length;++i)t=e[i].data[0][1],(n<2||t/a>r.series.pie.combine.threshold)&&p.push(s.extend(e[i],{data:[[1,t]],color:e[i].color,label:e[i].label,angle:t*Math.PI*2/a,percent:t/(a/100)}));return n>1&&p.push({data:[[1,l]],color:o,label:r.series.pie.combine.label,angle:l*Math.PI*2/a,percent:l/(a/100)}),p}(e.getData())))}function g(e,i){if(t){var h=e.getPlaceholder().width(),c=e.getPlaceholder().height(),g=t.children().filter(".legend").children().width()||0;p=i,o=!1,a=Math.min(h,c/r.series.pie.tilt)/2,n=c/2+r.series.pie.offset.top,l=h/2,"auto"===r.series.pie.offset.left?(r.legend.position.match("w")?l+=g/2:l-=g/2,l<a?l=a:l>h-a&&(l=h-a)):l+=r.series.pie.offset.left;var d=e.getData(),f=0;do{f>0&&(a*=.95),f+=1,b(),r.series.pie.tilt<=.8&&v()}while(!w()&&f<10);f>=10&&(b(),"object"==typeof console&&"function"==typeof console.warn&&console.warn("Could not draw pie with labels contained inside canvas")),e.setSeries&&e.insertLegend&&(e.setSeries(d),e.insertLegend())}function b(){p.clearRect(0,0,h,c),t.children().filter(".pieLabel, .pieLabelBackground").remove()}function v(){var e=r.series.pie.shadow.left,i=r.series.pie.shadow.top,s=r.series.pie.shadow.alpha,t=r.series.pie.radius>1?r.series.pie.radius:a*r.series.pie.radius;if(!(t>=h/2-e||t*r.series.pie.tilt>=c/2-i||t<=10)){p.save(),p.translate(e,i),p.globalAlpha=s,p.fillStyle="#000",p.translate(l,n),p.scale(1,r.series.pie.tilt);for(var o=1;o<=10;o++)p.beginPath(),p.arc(0,0,t,0,2*Math.PI,!1),p.fill(),t-=o;p.restore()}}function w(){var e,i=Math.PI*r.series.pie.startAngle,o=r.series.pie.radius>1?r.series.pie.radius:a*r.series.pie.radius;p.save(),p.translate(l,n),p.scale(1,r.series.pie.tilt),p.save();var g=i;for(e=0;e<d.length;++e)d[e].startAngle=g,f(d[e].angle,d[e].color,!0);if(p.restore(),r.series.pie.stroke.width>0){for(p.save(),p.lineWidth=r.series.pie.stroke.width,g=i,e=0;e<d.length;++e)f(d[e].angle,r.series.pie.stroke.color,!1);p.restore()}return u(p),p.restore(),!r.series.pie.label.show||function(){for(var e=i,o=r.series.pie.label.radius>1?r.series.pie.label.radius:a*r.series.pie.label.radius,p=0;p<d.length;++p){if(d[p].percent>=100*r.series.pie.label.threshold&&!g(d[p],e,p))return!1;e+=d[p].angle}return!0;function g(e,i,a){if(0===e.data[0][1])return!0;var p,g=r.legend.labelFormatter,u=r.series.pie.label.formatter;p=g?g(e.label,e):e.label,u&&(p=u(p,e));var d=(i+e.angle+i)/2,f=l+Math.round(Math.cos(d)*o),b=n+Math.round(Math.sin(d)*o)*r.series.pie.tilt,v="<span class='pieLabel' id='pieLabel"+a+"' style='position:absolute;top:"+b+"px;left:"+f+"px;'>"+p+"</span>";t.append(v);var w=t.children("#pieLabel"+a),k=b-w.height()/2,M=f-w.width()/2;if(w.css("top",k),w.css("left",M),0-k>0||0-M>0||c-(k+w.height())<0||h-(M+w.width())<0)return!1;if(0!==r.series.pie.label.background.opacity){var P=r.series.pie.label.background.color;null==P&&(P=e.color);var y="top:"+k+"px;left:"+M+"px;";s("<div class='pieLabelBackground' style='position:absolute;width:"+w.width()+"px;height:"+w.height()+"px;"+y+"background-color:"+P+";'></div>").css("opacity",r.series.pie.label.background.opacity).insertBefore(w)}return!0}}();function f(e,i,s){e<=0||isNaN(e)||(s?p.fillStyle=i:(p.strokeStyle=i,p.lineJoin="round"),p.beginPath(),Math.abs(e-2*Math.PI)>1e-9&&p.moveTo(0,0),p.arc(0,0,o,g,g+e/2,!1),p.arc(0,0,o,g+e/2,g+e,!1),p.closePath(),g+=e,s?p.fill():p.stroke())}}}function u(e){if(r.series.pie.innerRadius>0){e.save();var i=r.series.pie.innerRadius>1?r.series.pie.innerRadius:a*r.series.pie.innerRadius;e.globalCompositeOperation="destination-out",e.beginPath(),e.fillStyle=r.series.pie.stroke.color,e.arc(0,0,i,0,2*Math.PI,!1),e.fill(),e.closePath(),e.restore(),e.save(),e.beginPath(),e.strokeStyle=r.series.pie.stroke.color,e.arc(0,0,i,0,2*Math.PI,!1),e.stroke(),e.closePath(),e.restore()}}function d(e,i){for(var s=!1,t=-1,r=e.length,a=r-1;++t<r;a=t)(e[t][1]<=i[1]&&i[1]<e[a][1]||e[a][1]<=i[1]&&i[1]<e[t][1])&&i[0]<(e[a][0]-e[t][0])*(i[1]-e[t][1])/(e[a][1]-e[t][1])+e[t][0]&&(s=!s);return s}function f(e){v("plothover",e)}function b(e){v("plotclick",e)}function v(i,s){var o=e.offset(),c=function(i,s){for(var t,r,o=e.getData(),h=e.getOptions(),c=h.series.pie.radius>1?h.series.pie.radius:a*h.series.pie.radius,g=0;g<o.length;++g){var u=o[g];if(u.pie.show){if(p.save(),p.beginPath(),p.moveTo(0,0),p.arc(0,0,c,u.startAngle,u.startAngle+u.angle/2,!1),p.arc(0,0,c,u.startAngle+u.angle/2,u.startAngle+u.angle,!1),p.closePath(),t=i-l,r=s-n,p.isPointInPath){if(p.isPointInPath(i-l,s-n))return p.restore(),{datapoint:[u.percent,u.data],dataIndex:0,series:u,seriesIndex:g}}else if(d([[0,0],[c*Math.cos(u.startAngle),c*Math.sin(u.startAngle)],[c*Math.cos(u.startAngle+u.angle/4),c*Math.sin(u.startAngle+u.angle/4)],[c*Math.cos(u.startAngle+u.angle/2),c*Math.sin(u.startAngle+u.angle/2)],[c*Math.cos(u.startAngle+u.angle/1.5),c*Math.sin(u.startAngle+u.angle/1.5)],[c*Math.cos(u.startAngle+u.angle),c*Math.sin(u.startAngle+u.angle)]],[t,r]))return p.restore(),{datapoint:[u.percent,u.data],dataIndex:0,series:u,seriesIndex:g};p.restore()}}return null}(parseInt(s.pageX-o.left,10),parseInt(s.pageY-o.top,10));if(r.grid.autoHighlight)for(var g=0;g<h.length;++g){var u=h[g];u.auto!==i||c&&u.series===c.series||w(u.series)}c&&!function(i,s){var t=k(i);-1===t?(h.push({series:i,auto:s}),e.triggerRedrawOverlay()):s||(h[t].auto=!1)}(c.series,i);var f={pageX:s.pageX,pageY:s.pageY};t.trigger(i,[f,c])}function w(i){null==i&&(h=[],e.triggerRedrawOverlay());var s=k(i);-1!==s&&(h.splice(s,1),e.triggerRedrawOverlay())}function k(e){for(var i=0;i<h.length;++i)if(h[i].series===e)return i;return-1}e.hooks.processOptions.push((function(e,i){i.series.pie.show&&(i.grid.show=!1,"auto"===i.series.pie.label.show&&(i.legend.show?i.series.pie.label.show=!1:i.series.pie.label.show=!0),"auto"===i.series.pie.radius&&(i.series.pie.label.show?i.series.pie.radius=3/4:i.series.pie.radius=1),i.series.pie.tilt>1?i.series.pie.tilt=1:i.series.pie.tilt<0&&(i.series.pie.tilt=0))})),e.hooks.bindEvents.push((function(e,i){var s=e.getOptions();s.series.pie.show&&(s.grid.hoverable&&i.unbind("mousemove").mousemove(f),s.grid.clickable&&i.unbind("click").click(b))})),e.hooks.processDatapoints.push((function(e,i,s,t){e.getOptions().series.pie.show&&c(e)})),e.hooks.drawOverlay.push((function(e,i){e.getOptions().series.pie.show&&!function(e,i){var s,t=e.getOptions(),r=t.series.pie.radius>1?t.series.pie.radius:a*t.series.pie.radius;i.save(),i.translate(l,n),i.scale(1,t.series.pie.tilt);for(var o=0;o<h.length;++o)void((s=h[o].series).angle<=0||isNaN(s.angle)||(i.fillStyle="rgba(255, 255, 255, "+t.series.pie.highlight.opacity+")",i.beginPath(),Math.abs(s.angle-2*Math.PI)>1e-9&&i.moveTo(0,0),i.arc(0,0,r,s.startAngle,s.startAngle+s.angle/2,!1),i.arc(0,0,r,s.startAngle+s.angle/2,s.startAngle+s.angle,!1),i.closePath(),i.fill()));u(i),i.restore()}(e,i)})),e.hooks.draw.push((function(e,i){e.getOptions().series.pie.show&&g(e,i)}))},options:t,name:"pie",version:"1.1"})}}]);