var E=Object.defineProperty;var T=(o,e,t)=>e in o?E(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t;var l=(o,e,t)=>T(o,typeof e!="symbol"?e+"":e,t);/* empty css             *//* empty css   *//* empty css     */import{g as c,t as m,p as x,Q as u,a as h,b,c as g,s as C,d as f,e as Q,R as w,f as P}from"./shared.js";import{d as y,g as s,b as k,a as q,c as v,s as F,p as S}from"./common.js";import"./vendors.js";const B=`<div>
<form data-app-role="qrForm" novalidate>
    <div class="form-group mb-2">
        <label for="name" data-i18n-message="labelName">
            
        </label>
        <div>
        <input type="text" class="form-control form-control-sm" data-app-role="qrName"
         required name="name" maxlength="30">
        <div class="invalid-feedback" data-i18n-message="textRequired"></div>
    </div>
    </div>
    <div class="form-group mb-2">
        <label for="name" data-i18n-message="labelType">
            
        </label>
        <div>
        <select required class="custom-select custom-select-sm" data-app-role="qrTypeDropDown">
            <option value="" selected data-i18n-message="labelSelect"></option>
            <option value="link" data-i18n-message="labelLink"></option>
            <option value="sms" data-i18n-message="labelSMS"></option>
            <option value="phone" data-i18n-message="labelPhoneNo"></option>
            <option value="text" data-i18n-message="labelText"></option>
        </select>
        <div class="invalid-feedback" data-i18n-message="textRequired"></div>
        </div>
    </div>
    <div class="form-group form-check">
        <input data-app-role="qrModeCheckBox" checked type="checkbox" class="form-check-input" id="qrMode" name="qrMode">
        <label class="form-check-label" for="qrMode" data-i18n-message="labelDynamic">
        </label>
    </div>
    <div class="form-group d-flex justify-content-around" data-app-role="formButtons" class="mt-3">
        <button type="submit" data-app-role="generateButton" class="btn btn-outline-primary btn-sm" data-i18n-message="labelGenerateQr"></button>
        <button type="reset" data-app-role="resetButton"  class="btn btn-outline-secondary btn-sm" data-i18n-message="labelReset"></button>
        <button type="button" data-app-role="createNewButton"  class="d-none btn btn-outline-primary btn-sm" data-i18n-message="labelCreateNew"></button>
    </div>
</form>
</div>`;function L(o,e,t,a,n){t.labelWidth;const i=n&&n[e],r=$('<div class="form-group mb-3"><label></label></div>');let d;switch(t.input){case"text":d=$(`<input class="form-control form-control-sm name" name="qrp_${e}" type="${t.type}">`);break;case"multiline":d=$(`<textarea class="form-control form-control-sm" name="qrp_${e}" type="${t.type}">`);break;default:return}i&&d.val(i),r.find("label").text(chrome.i18n.getMessage(t.label));const p=$("<div>").append(d);return r.append(p),t.maxlen&&d.attr("maxlength",t.maxlen),t.required&&(d.attr("required",!0),p.append(`<div class="invalid-feedback">${chrome.i18n.getMessage("textRequired")}</div>`)),r[0]}function N(o,e){const t=e&&e.data,a=h[o].props;return Object.entries(h[o].props).map(([n,i])=>L(o,n,i,a,t)).filter(n=>n!==void 0)}class O{constructor(){l(this,"loadDefaultContent",e=>{if(e.text)try{const t=x(e.text);t&&(t.type===u.LINK||t.type===u.TEXT)&&(this.defaultQrContent={name:e.name,qrItem:t},$(this.panelElements.qrTypeDropDown).val(t.type).trigger("change"),this.handleOnQrTyChange(t.type),$(this.panelElements.qrName).val(e.name))}catch(t){y.error(`Error while parsing qrText${e.text}`,t)}});l(this,"handleOnQrTyChange",e=>{const t=this.selectQrType;this.hidePrevQrTypeElements(t),e&&(this.showQrTypeElements(e),this.selectQrType=e)});l(this,"handleOnSubmitForm",e=>{e.preventDefault();const t=e.target;if($(t).addClass("was-validated"),!t.checkValidity())return!1;this.saveQr(!1)});l(this,"handleOnCreateNewQr",()=>{this.enableForm(),this.defaultQrContent=null,this.onCreateQr(null)});l(this,"handleOnResetClick",()=>{this.defaultQrContent=null,this.handleOnQrTyChange(null),this.qrTypeElements&&Object.entries(this.qrTypeElements).forEach(([,e])=>{$(e).each(function(){$(this).remove()}),this.qrTypeElements={}}),s.gaEventAL(`${s.label.Popup}-QrForm`,"Reset")});l(this,"saveQr",async e=>{const t={},a=new FormData(this.panelElements.qrForm);Object.entries(h[this.selectQrType].props).forEach(([p])=>{t[p]=a.get(`qrp_${p}`)});const n={name:a.get("name"),type:this.selectQrType,data:t};n.name&&n.name.length>30&&(n.name=n.name.substring(0,30)),n.mode=$(this.panelElements.qrModeCheckBox).is(":checked")?b.DYNAMIC:b.STATIC;const i=$(this.panelElements.generateButton).text();$(this.panelElements.generateButton).attr("disabled",!0).text("Creating ...");const r=new g(n);try{await r.generateQr({useGlobalSettings:e})}catch(p){s.gaEventALV(`${s.label.Popup}-CreateQrTab`,`${s.vals.Fail}-GenQr-${this.selectQrType}`,p)}$(this.panelElements.generateButton).removeAttr("disabled").text(i);const d=n.mode||"";r.shortUrl?s.gaEventALV(`${s.label.Popup}-CreateQrTab`,`${s.vals.Success}-WithShortUrl`,`${this.selectQrType}-${d}`):s.gaEventALV(`${s.label.Popup}-CreateQrTab`,`${s.vals.Success}-NoShortUrl`,`${this.selectQrType}-${d}`),r.getQrText()||(s.gaEventALV(`${s.label.Popup}-CreateQrTab`,`${s.vals.Fail}-NoQrText`,this.selectQrType),C({type:"error",message:chrome.i18n.getMessage("textFailed")})),$(this.panelElements.resetButton).text("Clear"),r.addToHistory(),this.onCreateQr(r),this.disableForm()});l(this,"disableForm",()=>{$("input,textarea,select",this.panelElements.qrForm).attr("disabled",!0),$(this.panelElements.generateButton).addClass("d-none"),$(this.panelElements.resetButton).addClass("d-none"),$(this.panelElements.createNewButton).removeClass("d-none")});l(this,"enableForm",()=>{$("input,textarea,select",this.panelElements.qrForm).removeAttr("disabled"),$(this.panelElements.generateButton).removeClass("d-none"),$(this.panelElements.resetButton).removeClass("d-none"),$(this.panelElements.createNewButton).addClass("d-none"),$(this.panelElements.qrForm).removeClass("was-validated"),$(this.panelElements.resetButton).trigger("click")});l(this,"showQrTypeElements",e=>{let t=this.qrTypeElements[e];t||(t=N(e,this.defaultQrContent&&this.defaultQrContent.qrItem),this.qrTypeElements[e]=t),$(t).insertBefore(this.panelElements.formButtons)});l(this,"hidePrevQrTypeElements",e=>{const t=this.qrTypeElements[e];t&&$(t).remove()})}init({onCreateQr:e,defaultContent:t}){const a=$(B);return this.selectQrType="",this.qrTypeElements={},c(a[0]).then(n=>{this.panelElements=n,this.initTab(t)}),this.onCreateQr=e,m(a[0]),a[0]}initTab(e){$(this.panelElements.qrTypeDropDown).on("change",t=>this.handleOnQrTyChange($(t.target).val())),$(this.panelElements.qrForm).on("submit",this.handleOnSubmitForm),$(this.panelElements.createNewButton).on("click",this.handleOnCreateNewQr),$(this.panelElements.resetButton).on("click",this.handleOnResetClick),e&&this.loadDefaultContent(e)}}const R=`<div class="d-flex">
    <div class="container m-0 p-0" data-app-role="qrFormPanel">
        
    </div>
    <div class="container" data-app-role="qrCodePanel">

    </div>
</div>`;class A{constructor(){l(this,"initTab",()=>{this.qrForm=new O,this.qrCodePanel=new f;const e={active:!0,lastFocusedWindow:!0};chrome.tabs.query(e).then(t=>{const[a]=t,n=a?a.url:"";let i=a&&a.title||"";if(i.length&&n.length){const r=n.indexOf("://");r!==-1&&n.substring(r+3)===i&&(i=i.replace(/[@#?\\/?]/g,""))}$(this.tabElemnts.qrFormPanel).append(this.qrForm.init({onCreateQr:this.handleOnCreateQr,defaultContent:{text:n,name:i}})),$(this.tabElemnts.qrCodePanel).append(this.qrCodePanel.init())})});l(this,"handleOnCreateQr",e=>{if(!e){this.qrCodePanel.clear();return}this.qrCodePanel.showQrCode(e)})}init(e){const t=$(R);c(t).then(a=>{this.tabElemnts=a,this.initTab()}),$(e).append(t),m(t[0])}}const U=`<div class="modal fade" tabindex="-1" aria-labelledby="shortUrlQrCode" aria-hidden="true">
    <div class="modal-dialog qrpopup-modal">
        <div class="modal-content rounded-0">
            <div class="modal-header p-2">
                <h6 class="modal-title"></h6>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body p-3">
                <div class="container">
                    <div class="row">
                        <div class="col">
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>`;function D(o){const e=$(U),t=e.find(".modal-title");o.name?t.text(o.name):o.shortUrl?t.text(o.shortUrl):t.text("QR Code");const a=new f;$(e).find(".modal-body .col").append(a.init(o)),$(e).modal("show"),e.on("hidden.bs.modal",()=>{e.modal("dispose"),e.remove()})}const M=`<div class="position-relative h-100">
    <div class="flex flex-column history-list-items pr-2">
        <div class="list-group list-group-flush mb-2">
            <div class="list-group-item list-group-item-action p-0 mb-2 cursor-pointer">
                <div class="d-flex flex-column">
                    <div class="p-0 m-0 d-flex">
                        <i class="b-icon mt-1" data-app-role="sourceTypeIcon" data-toggle="tooltip"></i>
                        <span class="ml-1 mt-1 badge badge-success" data-app-role="typeElement"></span>
                        <div class="ml-2 text-truncate">
                            <span data-app-role="nameElement"></span>
                        </div>
                        <div class="ml-2 flex-fill d-flex justify-content-end">
                            <a data-app-role="shortUrlElement" target="_blank"></a>
                            <i data-toggle="tooltip" data-i18n-message="statsText|title" data-placement="top" 
                            data-app-role="statsIcon" class="b-icon b-icon-graph-up-arrow ml-2 mt-1"></i>
                            <button type="button" data-i18n-message="labelRemove|title" title="Remove" class="ml-2 close" aria-label="Close" data-app-role="removeButton">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div> 
                        </div>
                    <div class="d-flex">
                        <div class="pt-1 pb-1 flex-fill text-truncate " data-app-role="previewElement"></div>
                        <small class="p-1 ml-2 d-block text-nowrap" data-app-role="dateElement"></small>
                    </div>
                </div>
            </div>
            </div>
    </div>
<span class="text-muted position-absolute" style="bottom: 5px;"><a target="_blank" href="options.html" data-i18n-message="tipChangeHistoryLimit|link"></a></span>
</div>`,H=k("historyTab");class _{constructor(){l(this,"reload",()=>{$(this.element).empty(),this.showHistory()});l(this,"showHistory",()=>{g.getQRHistory().forEach(t=>{this.renderHistoryItem(t)})});l(this,"renderHistoryItem",e=>{const t=this.templateNode.cloneNode(!0);c(t).then(a=>{e.name||e.otherInfo&&e.otherInfo.isCreated?(e.name?$(a.nameElement).text(e.name).attr("title",e.name):$(a.nameElement).addClass("text-muted").text("Unknown"),$(a.sourceTypeIcon).addClass("b-icon-person").attr("title",chrome.i18n.getMessage("tipCreatedQr"))):($(a.nameElement).addClass("text-muted").text("Unknown"),$(a.sourceTypeIcon).addClass("b-icon-globe").attr("title",chrome.i18n.getMessage("tipScannedQR"))),$(a.typeElement).text(chrome.i18n.getMessage(Q[e.type]||"textUnknown")),e.timestamp&&$(a.dateElement).text(new Date(e.timestamp).toDateString()),e.shortUrl?$(a.shortUrlElement).text(e.shortUrl).attr("href",e.shortUrl).off("click").on("click",n=>{n.stopPropagation(),s.gaEventAL(`${s.label.Popup}-History`,`OpenShortLink-${e.type}`)}).removeClass("d-none"):($(a.statsIcon).remove(),$(a.shortUrlElement).remove());try{const n=e.getQrRawText(),i=n.length>100?n.substr(0,100):n;$(a.previewElement).text(i).attr("title",n)}catch(n){H.error(`Error while rendering qrType preview ${e.type}`,n),$(a.previewElement).text("NA"),s.gaEventAL(`${s.label.Popup}-HistoryItem`,`${s.vals.Fail}-${e.type}`,n)}$(a.removeButton).on("click",n=>{n.stopPropagation(),e.removeFromHistory(),setTimeout(()=>{$(t).empty().remove()}),s.gaEventALV(`${s.label.Popup}-History`,"Delete",e.type)}),this.element.append(t),$(t).on("click",()=>{s.gaEventALV(`${s.label.Popup}-History`,"ShowQrPopup",e.type),D(e)})}).then(()=>this.renderComplete())});l(this,"renderComplete",()=>{$('[data-toggle="tooltip"]',this.tabElement).tooltip(),m(this.tabElement)})}init(e){const t=$(M);m(t[0]),this.element=t.find(".list-group"),this.templateNode=this.element.find(".list-group-item").remove()[0],setTimeout(this.showHistory),$(e).append(t)}}class V{constructor(){l(this,"selectTab",(e,t)=>{$(this.appElements.selectedTabBorder).css({left:$(e).position().left,width:$(e).width()});const a=t.substr(1);if(s.gaEventAL(`${s.label.Popup}-ShowTab`,a.toUpperCase()),this.tabsLoaded[a]){this.tabsLoaded[a]&&this.tabsLoaded[a].reload&&this.tabsLoaded[a].reload();return}if($(t).removeClass("d-none"),a==="create-qr"){this.createQrTab=new A,this.createQrTab.init(this.appElements.createTabBody),this.tabsLoaded[a]=this.qrReaderTab;return}a==="qrcode-reader"&&(this.qrReaderTab=new w,this.qrReaderTab.init(this.appElements.readerTabBody),this.tabsLoaded[a]=this.qrReaderTab),a==="history"&&(this.historyTab=new _,this.historyTab.init(this.appElements.historyTabBody),this.tabsLoaded[a]=this.historyTab)})}async init(){this.appElements=await c(document.body),this.tabsLoaded={};const e=$('a[data-toggle="pill"]').on("shown.bs.tab",t=>{t.preventDefault(),this.selectTab($(t.target).parent("li"),$(t.target).attr("href"))})[0];this.selectTab($(e).parent(),$(e).attr("href"))}}function G(){const o=Date.now(),e=S;F((t,a,n,i)=>{e(t,a,n,i)}),chrome.runtime.sendMessage({type:v.ProtocolType.PUSH_GA_SESSION_EVENT,data:{action:`${s.label.Popup}-OpenTime`,label:s.vals.Show,sessionId:o,engagementTime:1,value:Date.now()-o}}),document.onvisibilitychange=()=>{document.visibilityState==="hidden"&&chrome.runtime.sendMessage({type:v.PUSH_GA_SESSION_EVENT,data:{action:s.label.Popup,label:s.vals.Close,sessionId:o,engagementTime:Date.now()-o}})}}function j(){setTimeout(()=>{P()},1500)}q.load().then(()=>new V().init()).then(()=>{m(document.body),setTimeout(G),j()}).catch(o=>{y.log("error init",o),s.gaEventALV(`${s.label.Popup}-LoadDb`,s.vals.Fail,o)});
