(function(e){function t(t){for(var i,a,r=t[0],d=t[1],l=t[2],h=0,u=[];h<r.length;h++)a=r[h],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&u.push(s[a][0]),s[a]=0;for(i in d)Object.prototype.hasOwnProperty.call(d,i)&&(e[i]=d[i]);c&&c(t);while(u.length)u.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],i=!0,r=1;r<n.length;r++){var d=n[r];0!==s[d]&&(i=!1)}i&&(o.splice(t--,1),e=a(a.s=n[0]))}return e}var i={},s={app:0},o=[];function a(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=i,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)a.d(n,i,function(t){return e[t]}.bind(null,i));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],d=r.push.bind(r);r.push=t,r=r.slice();for(var l=0;l<r.length;l++)t(r[l]);var c=d;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"229a":function(e,t,n){},"444b":function(e,t,n){"use strict";n("229a")},"48fd":function(e,t,n){"use strict";n("c5c2")},"56d7":function(e,t,n){"use strict";n.r(t);var i=n("2b0e"),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ModelingPanel")},o=[],a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"visual-modeling-graph-panel"},[n("div",{staticStyle:{width:"300px",position:"absolute",left:"10px",top:"10px","z-index":"2"}},[n("el-dropdown",{attrs:{"split-button":"",size:"medium"},on:{command:e.handleCommand}},[e._v(" 添加节点 "),n("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},e._l(e.componentDefs,(function(t){return n("el-dropdown-item",{key:t.mc,attrs:{command:t.type}},[e._v(e._s(t.mc))])})),1)],1),n("el-tooltip",{attrs:{content:"运行"}},[n("el-button",{staticStyle:{"margin-left":"10px"},attrs:{icon:"el-icon-video-play",size:"medium"},on:{click:e.run2}})],1),n("el-tooltip",{attrs:{content:"保存"}},[n("el-button",{staticStyle:{"margin-left":"10px"},attrs:{icon:"el-icon-edit-outline",size:"medium"},on:{click:e.handleClickAtSaveBtn}})],1)],1),n("div",{staticClass:"visual-modeling-graph-wrapper",on:{drop:e.handleDropAtGraph,dragover:e.handleDragoverAtGraph,contextmenu:e.handleContextmenuAtWrapper}},[n("modeling-graph",{ref:"modelingGraph",on:{selectNodeChange:e.handleNodeSelectChange,nodeContextMenu:e.handleContextmenuAtNode,deleteEdge:e.deleteEdge,connectEdge:e.handleConnectEdge}}),n("div",{staticClass:"modeling-graph-tools"},[n("el-tooltip",{attrs:{content:"放大画布",placement:"left",effect:"light"}},[n("el-button",{attrs:{icon:"el-icon-circle-plus-outline",size:"small",type:"text"},on:{click:e.zoomInGraph}})],1),n("el-tooltip",{attrs:{content:"缩小画布",placement:"left",effect:"light"}},[n("el-button",{attrs:{icon:"el-icon-remove-outline",size:"small",type:"text"},on:{click:e.zoomOutGraph}})],1),n("el-tooltip",{attrs:{content:"自动布局",placement:"left",effect:"light"}},[n("el-button",{attrs:{icon:"el-icon-refresh-left",size:"small",type:"text"},on:{click:e.layoutGraph}})],1),n("el-tooltip",{attrs:{content:"全屏",placement:"left",effect:"light"}},[n("el-button",{attrs:{icon:"el-icon-full-screen",size:"small",type:"text"},on:{click:e.requestFullscreen}})],1)],1),n("context-menu",{attrs:{items:e.contextMenuCommands,hidden:e.hideContextMenu,target:e.contextMenuTarget}}),n("context-menu",{attrs:{items:e.edgeContextMenuCommands,hidden:e.hideEdgeContextMenu,target:e.edgeContextMenuTarget}})],1)])},r=[],d=n("8f8f"),l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"modeling-graph",on:{mousemove:e.handleMousemoveAtGraph,mouseup:e.handleMouseupAtGraph}},[n("div",{staticClass:"modeling-graph-canvas"},[n("svg",{staticClass:"edge-graph"})])])},c=[],h=n("898b"),u=n("e34f"),p=n.n(u);const g=[{mc:"读数据表",type:"01",ywm:"tableI",category:0,categoryName:"源数据读取",icon:"cestc-sandbox-S_data_line1",input:{min:0,max:0},output:{min:0,max:1/0}},{mc:"表连接",type:"21",ywm:"join",category:1,categoryName:"数据预处理",icon:"cestc-sandbox-S_handle_line",input:{min:2,max:1/0},output:{min:0,max:1/0}},{mc:"表过滤",type:"22",ywm:"filter",category:1,categoryName:"数据预处理",icon:"cestc-sandbox-S_handle_line",input:{min:1,max:1},output:{min:0,max:1/0}},{mc:"列排序",type:"25",ywm:"order",category:1,categoryName:"数据预处理",icon:"cestc-sandbox-S_handle_line",input:{min:1,max:1},output:{min:0,max:1/0}},{mc:"聚合",type:"24",ywm:"poly",category:1,categoryName:"数据预处理",icon:"cestc-sandbox-S_handle_line",input:{min:1,max:1},output:{min:0,max:1/0}},{type:"46",mc:"文件输出",ywm:"ftp",icon:"cestc-sandbox-S_share_line",category:2,categoryName:"数据输出",input:{min:1,max:1},output:{min:0,max:0}},{type:"49",mc:"图形输出",ywm:"ftp",icon:"cestc-sandbox-S_share_line",category:2,categoryName:"数据输出",input:{min:1,max:1},output:{min:0,max:0}}];var m=g;let f=0,y={};m.forEach(e=>y[e.type]=1);var x={data(){return{nodes:[],edges:[],containerBox:null,transformOfZoom:h["d"],currentNode:null,source:null}},created(){this.handleClickAtNode=(e,t)=>{e.stopPropagation(),this.selectNode(t),this.render()},this.handleClickAtDeleteBtn=(e,t)=>{this.$emit("deleteEdge",t)},this.handleContextmenuAtNode=(e,t)=>{this.$emit("nodeContextMenu",t,e)},this.handleMousedownAtOuput=(e,t)=>{e.stopPropagation(),this.recordSourceNode(t)},this.handleMouseupAtNode=(e,t)=>{if(!this.source)return;e.stopPropagation();const n=t,i=this.source,s=m.find(e=>e.type===n.type);if(n.input>=s.input.max)this.$emit("connectEdge",0===s.input.max?s.mc+"不能拥有输入":`${s.mc}只能拥有${s.input.max}个输入`);else{const e=this.createEdge(i.id,n.id);this.addEdge(e),this.$emit("connectEdge",null,{edge:e,source:i,target:n}),this.render()}this.clearConnnectEdge()}},mounted(){const e=h["b"](this.$el.querySelector(".edge-graph"));this.edgeGraphSelection=e;const t=h["b"](".modeling-graph-canvas"),n=h["b"](this.$el);this.canvasSelection=t,this.rootSelection=n;const i=this.$el.offsetWidth,s=this.$el.offsetHeight;e.attr("width",i).attr("height",s).attr("viewBox",[0,0,i,s]).attr("overflow","visible").append("defs").selectAll("maker.arrow").data(["default","active"]).join("marker").attr("id",e=>"arrow-"+e).attr("class","arrow").attr("viewbox","-10 -5 10 10").attr("viewbox","-10 -5 10 10").attr("refX",0).attr("refY",0).attr("markerWidth",6).attr("markerHeight",6).attr("overflow","visible").attr("orient","auto-start-reverse").attr("markerUnits","userSpaceOnUse").append("svg:path").attr("d","M -10,-5 L 0 ,0 L -10,5").attr("fill",e=>"default"===e?"#bcc1cc":"#006DFF").attr("stroke","none"),this.connectEdgeSelection=e.append("path").attr("marker-end","url(#arrow-default)").attr("fill","none").attr("stroke","#bcc1cc").attr("stroke-width",1.5).classed("connect-edge",!0),this.containerBox=this.$el.getBoundingClientRect(),this.d3Drag=h["a"]().on("start",(e,t)=>{t.dragging=!0,this.render()}).on("drag",(e,t)=>{t.x=e.x,t.y=e.y,this.render()}).on("end",(e,t)=>{t.dragging=!1,this.render()}),this.d3Zoom=h["c"]().filter(e=>!e.ctrlKey).extent([[0,0],[i,s]]).on("zoom",({transform:e})=>{this.transformOfZoom=e,t.style("transform",`translate(${e.x}px, ${e.y}px) scale(${e.k})`)}),n.call(this.d3Zoom)},methods:{empty(){return this.nodes.length<=0},valiadate(){return this.nodes.reduce((e,t)=>e&&t.available,!0)},clear(){this.nodes=[],this.edges=[]},layout(){const e=new p.a.graphlib.Graph;e.setGraph({}),e.setDefaultEdgeLabel(()=>({})),this.nodes.forEach(t=>{e.setNode(t.id,t)}),this.edges.forEach(t=>{e.setEdge(t.source,t.target)}),p.a.layout(e),this.render()},render(){this.canvasSelection.selectAll("div.node").data(this.nodes,e=>e.id).join(e=>e.append("div").classed("node",!0).attr("data-id",e=>e.id).on("click",this.handleClickAtNode).on("contextmenu",this.handleContextmenuAtNode).on("mouseup",this.handleMouseupAtNode).call(e=>{const t=e.append("span").classed("label",!0);t.append("i").attr("class",e=>e.icon).classed("component-icon icon cestc-sandbox",!0),t.append("span").classed("component-name",!0),e.filter(e=>{const t=m.find(t=>t.type===e.type);return t.output.max>0}).append("span").classed("circle",!0).classed("output",!0).attr("data-id",e=>e.id).on("mousedown",this.handleMousedownAtOuput).call(e=>{e.append("span").classed("outer-circle",!0),e.append("span").classed("inner-circle",!0)}),e.append("i").classed("icon cestc-sandbox cestc-sandbox-a-S_getready_line",!0).style("color","#6FC77E")}).call(this.d3Drag)).classed("selected",e=>e===this.currentNode).classed("available",e=>e.available).classed("dragging",e=>e.dragging).classed("connecting",e=>e.connecting).classed("hasEdge",e=>this.edges.find(t=>t.source===e.id)).style("transform",e=>`translate(${e.x}px, ${e.y}px)`).select("span.component-name").text(e=>e.label),this.renderEdges()},scaleBy(e){this.d3Zoom.scaleBy(this.rootSelection,e)},findNode(e){return this.nodes.find(t=>t.id===e)},createNode({id:e,type:t,label:n,x:i=0,y:s=0,available:o=!1}){if(void 0===t)return;const a=m.find(e=>e.type===t);return a?(e||(e="node-"+f++),n||(n=`${a.mc}-${y[a.type]++}`),{type:t,id:e,label:n,icon:a.icon,output:0,input:0,width:160,height:36,x:i,y:s,available:o}):void 0},addNode(e){if(this.nodes.find(t=>t.id===e.id))return!1;this.nodes.push(e)},createEdge(e,t){return{id:`${e}-${t}`,source:e,target:t}},addEdge(e){const t=this.findNode(e.source),n=this.findNode(e.target);if(this.edges.find(e=>e.id===`${t.id}-${n.id}`))return!1;t.output++,n.input++,this.edges.push(e)},renderConnectEdge(e){if(!this.source)return;const t=this.calNodeOuputPosition(this.source);this.connectEdgeSelection.attr("d",this.makeEdgePath(t,e))},makeEdgePath(e,t){const n=t[0]-e[0],i=t[1]-e[1],s=18;if(Math.abs(i)<=36||Math.abs(n)<=36)return`M ${e[0]} ${e[1]} L ${t[0]} ${t[1]}`;{const o=[e[0],e[1]+i/2+(i>0?-1:1)*s],a=[e[0],e[1]+i/2],r=[e[0]+(n>0?1:-1)*s,e[1]+i/2],d=[t[0]+(n>0?-1:1)*s,e[1]+i/2],l=[t[0],t[1]-i/2],c=[t[0],t[1]-i/2+(i>0?1:-1)*s];return`M ${e[0]} ${e[1]} \n                  L ${o[0]} ${o[1]}\n                  Q ${a[0]} ${a[1]} ${r[0]} ${r[1]}\n                  L ${d[0]} ${d[1]}\n                  Q ${l[0]} ${l[1]} ${c[0]} ${c[1]}\n                  L ${t[0]} ${t[1]}`}},clearConnnectEdge(){this.source.connecting=!1,this.source=null,this.connectEdgeSelection.attr("d",""),this.render()},animateEdges(...e){this.edges.forEach(t=>{e.include(t.id)&&(t.animating=!0)}),this.renderEdges()},stopAnimateEdges(...e){this.edges.forEach(t=>{e.include(t.id)||(t.animating=!1)}),this.renderEdges()},animateAllEdges(){this.edges.forEach(e=>{e.animating=!0}),this.renderEdges()},stopAnimateAllEdges(){this.edges.forEach(e=>{e.animating=!1}),this.renderEdges()},renderEdges(){this.edgeGraphSelection.selectAll("g.edge-group").data(this.edges,e=>e.id).join(e=>{const t=e.append("g").classed("edge-group",!0);return t.append("path").classed("edge",!0).attr("marker-end","url(#arrow-default)").attr("fill","none").attr("stroke","#bcc1cc").attr("stroke-width","1.5"),t.append("foreignObject").attr("width",16).attr("height",16).on("click",this.handleClickAtDeleteBtn).append("xhtml:i").style("color","#006DFF").classed("el-icon-remove-outline",!0),t}).call(e=>{e.select("foreignObject").attr("x",({source:e,target:t})=>{const n=this.findNode(e),i=this.findNode(t);if(!n||!i)return;const s=this.calNodeOuputPosition(n),o=this.calNodeInputPosition(i);return(s[0]+o[0])/2-8}).attr("y",({source:e,target:t})=>{const n=this.findNode(e),i=this.findNode(t);if(!n||!i)return;const s=this.calNodeOuputPosition(n),o=this.calNodeInputPosition(i);return(s[1]+o[1])/2-8}),e.select("path.edge").classed("anim",e=>e.animating).attr("d",({source:e,target:t})=>{const n=this.findNode(e),i=this.findNode(t);if(!n||!i)return;const s=this.calNodeOuputPosition(n),o=this.calNodeInputPosition(i);return this.makeEdgePath(s,o)})})},getNodes(){return this.nodes.map(e=>({...e}))},getEdges(){return this.edges.map(e=>({...e}))},selectNode(e){const t=m.find(t=>t.type===e.type);e.input<t.input.min?this.$message({type:"error",message:`${t.mc}需要${t.input.min}个${t.input.max===1/0?"以上":t.input.max===t.input.min?"":`-${t.input.max}个`}输入才能配置`}):(this.currentNode=e,this.$emit("selectNodeChange",e))},clearSelect(){this.currentNode=null},deleteNode(e){const t=this.nodes.indexOf(e);t>-1&&this.nodes.splice(t,1)},deleteEdge(e){const t=this.edges.indexOf(e);if(t>-1){const n=this.findNode(e.source),i=this.findNode(e.target);n.output--,i.input--,this.edges.splice(t,1)}},filterEdge(e){return this.edges.filter(e)},convertEventCoordToGraphCoord([e,t]){const n=this.containerBox,i=this.transformOfZoom;return[(e-n.left-i.x)/i.k,(t-n.top-i.y)/i.k]},calNodeInputPosition(e){return[e.x+e.width/2,e.y]},calNodeOuputPosition(e){return[e.x+e.width/2,e.y+e.height]},recordSourceNode(e){this.source=e,this.source.connecting=!0,this.render()},handleMousemoveAtGraph(e){this.source&&this.renderConnectEdge(this.convertEventCoordToGraphCoord([e.x,e.y]))},handleMouseupAtGraph(){this.clearConnnectEdge()}}},b=x,v=(n("de76"),n("2877")),$=Object(v["a"])(b,l,c,!1,null,null,null),E=$.exports,N=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"show",rawName:"v-show",value:e.myVisible,expression:"myVisible"}],staticClass:"easynous-context-layer",style:e.myPosition},[n("div",{staticClass:"easynous-context-layer__content"},[n("div",{staticClass:"easynous-context-menu"},[n("ul",e._l(e.items,(function(t){return n("li",{key:t.key,on:{click:t.onClick}},[t.icon?n("em",{staticClass:"icon cestc-sandbox",class:t.icon}):e._e(),n("span",[e._v(e._s(t.text))])])})),0)])])])},C=[],w={props:{items:{type:Array,default:()=>[]},hidden:{type:Boolean,default:!0},target:{default:null,validator:()=>!0}},data(){return{myVisible:!this.hidden,myPosition:null}},computed:{},watch:{hidden(e){this.myVisible=!e},target(e){if(e instanceof MouseEvent)this.myPosition={left:e.x+"px",top:e.y+"px"};else if(e instanceof Element){const t=e.getBoundingClientRect();this.myPosition={left:t.left+t.width+"px",top:t.top+"px"}}}},mounted(){this.$nextTick(()=>{document.body.appendChild(this.$el)})},destroyed(){setTimeout(()=>{document.body.removeChild(this.$el)},5)}},k=w,G=(n("48fd"),Object(v["a"])(k,N,C,!1,null,"163b2e94",null)),A=G.exports,_=n("5a0c"),M=n.n(_),S=n("b357"),D={components:{ModelingGraph:E,ContextMenu:A},data(){return{componentDefs:m,contextMenuCommands:[{icon:"el-icon-delete",key:"deleteNode",text:"删除",onClick:()=>this.deleteNode(this.relativeNode)}],hideContextMenu:!0,contextMenuTarget:null,edgeContextMenuCommands:[{icon:"el-icon-delete",key:"deleteEdge",text:"删除",onClick:()=>this.deleteEdge(this.relativeEdge)}],hideEdgeContextMenu:!0,edgeContextMenuTarget:null,relativeNode:null,relativeEdge:null,submitDialogVisible:!1,submitTaskForm:{taskName:"",taskDesc:""},submitTaskFormRules:{taskName:[{required:!0,message:"任务名称不能为空",trigger:"blur"},{min:3,max:40,message:"长度在 3 到 40 个字符",trigger:"blur"},{validator:(e,t,n)=>{const i=/^[\u4E00-\uFA29\uE7C7-\uE7F3a-zA-Z]/.test(t);i?n():n("只允许以中英文开头")}},{validator:(e,t,n)=>{const i=/^[\u4E00-\uFA29\uE7C7-\uE7F3a-zA-Z\d_\-.]*$/.test(t);i?n():n("只支持中英文数字-_.")}}]},selectNode:null,sqlArr:[],resultDialogVisible:!1,resultArr:null,currentResult:null,currentIndex:0,loading:!1,resultDialogActiveTab:"log",log:"",existTask:!1,intervalInstance:null,running:!1}},watch:{hideContextMenu(e){e&&(this.relativeNode=null)},hideEdgeContextMenu(e){e&&(this.relativeEdge=null)},submitDialogVisible(e){e||this.$refs.submitTaskForm.resetFields()},resultDialogVisible(e){e?this.getLog():this.stopGetLog()}},mounted(){this.handleClickAtBody=()=>{this.hideContextMenu=!0,this.hideEdgeContextMenu=!0,this.$refs.modelingGraph.clearSelect(),this.$refs.modelingGraph.render()},document.body.addEventListener("click",this.handleClickAtBody);let e=JSON.parse(localStorage.getItem("__dag__"));e||(e=S),this.data(e)},destroyed(){this.stopGetLog(),document.body.removeEventListener("click",this.handleClickAtBody)},methods:{handleCommand(e){const t=this.$refs.modelingGraph.createNode({type:e,x:window.innerWidth/2,y:window.innerHeight/2});this.$refs.modelingGraph.addNode(t),this.$refs.modelingGraph.render()},handleClickAtSaveBtn(){this.$confirm("确认保存为新版本？","保存新版本",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>{this.save()}).catch(()=>{})},getLog(){},stopGetLog(){clearTimeout(this.logTimer)},makeSubffix(){var e=new Date,t=e.getFullYear(),n=e.getMonth()+1;n=n<10?"0"+n:n;var i=e.getDate();i=i<10?"0"+i:i;var s=e.getHours();s=s<10?"0"+s:s;var o=e.getMinutes(),a=e.getSeconds();return o=o<10?"0"+o:o,a=a<10?"0"+a:a,t+n+i+s+o+a},handleClickAtSubmitBtn(){this.$refs.modelingGraph.empty()?this.$message({type:"error",message:"节点未配置，无法提交。"}):this.$refs.modelingGraph.valiadate()?(this.submitTaskForm.taskName=`${this.$route.query.name}-${this.makeSubffix()}`,this.submitDialogVisible=!0):this.$message({type:"error",message:"节点配置有误，无法提交。"})},data(e){this.$refs.modelingGraph.clear(),e.nodes.forEach(e=>{const t=this.$refs.modelingGraph.createNode({id:e.id,label:e.jdMc,type:e.type,x:parseFloat(e.x,10),y:parseFloat(e.y,10),available:e.available});this.$refs.modelingGraph.addNode(t)}),e.edges.forEach(({source:e,target:t})=>{const n=this.$refs.modelingGraph.createEdge(e,t);this.$refs.modelingGraph.addEdge(n)}),this.$refs.modelingGraph.render()},checkTempData(){Object(d["getTempDagJdList"])({rwId:this.$route.query.id}).then(({data:e})=>{e.forEach(e=>{const t=this.$refs.modelingGraph.findNode(e.id);t&&(t.available="0"===e.jdZt)}),this.$refs.modelingGraph.render()})},layoutGraph(){this.$refs.modelingGraph.layout()},requestFullscreen(){this.$parent.$el.requestFullscreen()},zoomOutGraph(){this.$refs.modelingGraph.scaleBy(.9)},zoomInGraph(){this.$refs.modelingGraph.scaleBy(1.1)},handleConnectEdge(e,{edge:t,source:n,target:i}={}){e&&this.$message({type:"error",message:e})},handleContextmenuAtWrapper(e){e.preventDefault()},handleContextmenuAtNode(e,t){this.relativeNode=e,this.contextMenuTarget=t,this.hideContextMenu=!1},handleContextmenuAtEdge(e,t){this.relativeEdge=e,this.edgeContextMenuTarget=t,this.hideEdgeContextMenu=!1},handleNodeSelectChange(e){this.selectNode=e,this.$emit("selectNodeChange",e)},getRwlRenderData(){const e=this.selectNode,t=this.$refs.modelingGraph.getEdges(),n=t.map(t=>{if(t.target===e.id)return t.source});return{fidList:n,id:e.id,rwMc:"",jdMs:"",type:e.type,xzb:e.x,yzb:e.y,ms:"",jdRwXxVO:"",data:{}}},handleDragoverAtGraph(e){e.preventDefault(),e.dataTransfer.dropEffect="copy"},handleDropAtGraph(e){const t=e.dataTransfer.getData("componentType"),[n,i]=this.$refs.modelingGraph.convertEventCoordToGraphCoord([e.pageX,e.pageY]),s=this.$refs.modelingGraph.createNode({type:t,x:n,y:i}),o=this.$refs.modelingGraph.getNodes();let a=[];o.forEach(e=>{"46"!==e.type&&"49"!==e.type||a.push(e)}),a.length>=3?this.$message({type:"error",message:"画布最多支持3个输出组件！"}):Object(d["createJd"])({jdCwxx:"",jdJb:0,jdLx:s.type,jdMc:s.label,jdZt:"0",rwId:this.$route.query.id,xzb:s.x,yzb:s.y}).then(({data:e})=>{s.id=e,this.$refs.modelingGraph.addNode(s),this.$refs.modelingGraph.render()})},save(){const e=this.$refs.modelingGraph.getNodes(),t=this.$refs.modelingGraph.getEdges();console.log(JSON.stringify({nodes:e,edges:t})),localStorage.setItem("__dag__",JSON.stringify({nodes:e,edges:t}))},handleChangeItem(e,t){this.currentIndex=t,this.currentResult=e},run2(){this.running||(this.running=!0,this.$refs.modelingGraph.animateAllEdges(),setTimeout(()=>{this.running=!1,this.$refs.modelingGraph.stopAnimateAllEdges(),this.$message({type:"success",message:"模型运行成功！"})},5e3))},async run(){if(this.intervalInstance)return void this.$message.error("当前运行还未结束,请勿重复提交");if(this.$refs.modelingGraph.empty())return void this.$message({type:"error",message:"节点未配置，无法运行。"});if(!this.$refs.modelingGraph.valiadate())return void this.$message({type:"error",message:"节点配置有误，无法运行。"});let e=await Object(d["getMultiSQL"])({bbId:"",id:this.$route.query.id,type:0,xmId:""}).finally(()=>{this.loading=!1,this.$refs.modelingGraph.stopAnimateAllEdges()});this.sqlArr=e.data;let t=Date.now();this.refreshConsoleContent(this.sqlArr);let n=await Object(d["getMultiExp"])({xmId:this.$route.query.id}).catch(e=>e);clearInterval(this.intervalInstance),this.intervalInstance=null;let i=Date.now();if(200===n.code){for(const t in n.data)this.resultArr.push({...n.data[t],id:t});this.resultDialogActiveTab="table",this.currentResult=this.resultArr[0],this.currentIndex=0;let e="";this.resultArr.forEach(t=>{e+=`\n        <li>\n        ${t.name}：${t.msg}\n        </li>\n        `}),this.printLog(`<ul style="margin: 0;list-style: none;padding: 0;">${e}</ul>`),this.printLog(`执行完毕，耗时${(i-t)/1e3}s`)}else this.$message.error(n.msg||"脚本运行异常！"),this.printLog(`<span style="color:red">${n.msg}，耗时${(i-t)/1e3}s</span>`)},async refreshConsoleContent(e){this.log="",this.resultArr=[],this.resultDialogActiveTab="log",this.loading=!0,this.resultDialogVisible=!0,this.$refs.modelingGraph.animateAllEdges();let t="";e.forEach(e=>{t+=`\n        <li>\n        ${e.jdName}：${e.sql}\n        </li>\n        `}),this.printLog(`<ul style="margin: 5px 0 0 142px;list-style: none;padding: 0;">${t}</ul>`,!0),this.intervalInstance=setInterval(()=>{this.printLog("sql正在运行")},5e3)},printLog(e,t){const n=t?`<div>\n      <div style="width:360px">[${M()(Date.now()).format("YYYY-MM-DD HH:mm:ss")}]<span style="display:inline-block;margin-left:5px">开始执行SQL语句：</span></div> `:`<div style="display: flex;margin-top: 5px;">\n      <div style="width: 140px;\n    text-align: right;">[${M()(Date.now()).format("YYYY-MM-DD HH:mm:ss")}]</div> `;this.log+=`${n}\n      <div style="width:660px;margin-left:5px">${e}</div>\n      </div>`},submit(){this.$refs.submitTaskForm.validate(e=>{e&&Object(d["getSql"])({bbId:"",id:this.$route.query.id,type:0,xmId:""}).then(({data:e})=>{this.sql=e,Object(d["submitModel"])({taskId:this.$route.query.taskId,sandboxId:this.$route.query.id,taskName:this.submitTaskForm.taskName,description:this.submitTaskForm.taskDesc,taskType:0,taskSql:this.sql,dagInfo:this.$refs.modelingGraph.getNodes().map(e=>e.id)}).then(()=>{this.submitDialogVisible=!1,this.$message({type:"success",message:"提交成功！"}),this.$emit("submit")},({msg:e})=>{this.$message({type:"error",message:e})})})})},deleteNode(e){if(!e)return;const t=this.$refs.modelingGraph;t.filterEdge(t=>t.source===e.id||t.target===e.id).forEach(e=>t.deleteEdge(e)),t.deleteNode(e),this.checkTempData()},deleteEdge(e){this.$refs.modelingGraph.findNode(e.source),this.$refs.modelingGraph.findNode(e.target);this.$refs.modelingGraph.deleteEdge(e),this.checkTempData()},renameNode(e,t){const n=this.$refs.modelingGraph.findNode(e);n.label=t,this.$refs.modelingGraph.render()}}},O=D,T=(n("444b"),Object(v["a"])(O,a,r,!1,null,null,null)),j=T.exports,I={name:"App",components:{ModelingPanel:j}},P=I,L=(n("034f"),Object(v["a"])(P,s,o,!1,null,null,null)),F=L.exports,q=n("5c96"),B=n.n(q);n("0fae");i["default"].use(B.a),new i["default"]({render:e=>e(F)}).$mount("#app")},7498:function(e,t,n){},"85ec":function(e,t,n){},"8f8f":function(e,t){},b357:function(e){e.exports=JSON.parse('{"nodes":[{"type":"01","id":"node-2","label":"读数据表-2","icon":"cestc-sandbox-S_data_line1","output":2,"input":0,"width":160,"height":36,"x":185,"y":18,"available":false},{"type":"22","id":"node-3","label":"表过滤-3","icon":"cestc-sandbox-S_handle_line","output":1,"input":1,"width":160,"height":36,"x":80,"y":104,"available":false},{"type":"25","id":"node-4","label":"列排序-2","icon":"cestc-sandbox-S_handle_line","output":0,"input":1,"width":160,"height":36,"x":290,"y":104,"available":false},{"type":"22","id":"node-0","label":"表过滤-4","icon":"cestc-sandbox-S_handle_line","output":0,"input":1,"width":160,"height":36,"x":80,"y":190,"available":false}],"edges":[{"id":"node-2-node-3","source":"node-2","target":"node-3"},{"id":"node-2-node-4","source":"node-2","target":"node-4"},{"id":"node-3-node-0","source":"node-3","target":"node-0"}]}')},c5c2:function(e,t,n){},de76:function(e,t,n){"use strict";n("7498")}});