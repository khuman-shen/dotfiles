var v=Object.defineProperty;var y=(e,t,a)=>t in e?v(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;var h=(e,t,a)=>y(e,typeof t!="symbol"?t+"":t,a);import{g as b,d as x,t as E,p as C,Q as w,h as T,R as q,s as L}from"./shared.js";import{g as n,a as S,d as u,c as p}from"./common.js";/* empty css             *//* empty css   */import"./vendors.js";const Q=`.qrcode-reader-cnt-root {
    all: initial;
    margin: 0;
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
    font-size: 14px;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    text-align: left;
    background-color: #fff;
}

.reader-notifiation-panel .qr-read-panel-container {
    margin: 0px !important;
    padding: 0px 5px 10px 10px;
}

.reader-notifiation-panel .alert {
    margin: 0px;
    padding: 10px;
}

.reader-notifiation-panel .qr-read-panel-container *:first-child {
    margin-top: 0px !important;
}

.reader-notifiation-panel .qr-read-panel-container-footer {
    display: none;
}

.qrcode-reader-popup-open .qr-read-panel-container-footer {
    position: unset;
}

.qrcode-reader-popup-open .qr-read-panel-container {
    margin: 0px !important;
}

.qrcode-reader-cnt-modal .modal-content {
    min-width: 600px;
    min-height: 400px;
    margin-left: calc('100vw - 600px/2');
    box-shadow: 0 2px 10px rgba(0, 0,0, .5);
}

.qrcode-reader-popup-mask {
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
background-color: rgba(0, 0, 0, 0.65);
opacity: 0.8;
filter: alpha(opacity=50);
transition: opacity .3s linear, height 0s ease .3s;
z-index: 1000;
}


.decode-modal-content .qr-read-panel-footer {
    position: inherit;
}

.qrcode-reader-cnt-notify-container {
    position: fixed;
    top: 10px;
    right: 50px;
    z-index: 9999;
}`,A=`<div class="modal fade" tabindex="-1" aria-labelledby="modal" aria-hidden="true">
    <div class="modal-dialog modal-dialog-scrollable qrcode-reader-cnt-modal">
        <div class="modal-content rounded-0">
            <div class="modal-header p-2 ml-2">
                <h6 class="modal-title"></h6>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body pt-1">
                <div class="container">
                    <div class="row">
                        <div class="col p-0">
                            
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-footer d-none">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              </div>
        </div>
    </div>
</div>`;function R(e){const t=a=>{a.key==="Escape"&&(document.removeEventListener("keydown",t),e())};document.addEventListener("keydown",t)}function f(e,{title:t,content:a,onCancel:r,contentClass:i}){const o=$(A);o.find(".modal-title").text(t),$(o).find(".modal-body .col").append(a),i&&o.find(".modal-content").addClass(i);const d=document.createElement("div");d.className="qrcode-reader-popup-mask",e.appendChild(d),o.removeClass("fade").addClass("qrcode-reader-popup-open").fadeIn(),e.appendChild(o[0]);const s=()=>{o.fadeOut(()=>{o.remove(),d.remove(),r&&r()})};return R(s),o.find('[data-dismiss="modal"]').on("click",s),s}const k=`<div class="d-flex mt-2">
    <div data-app-role="qrOrignalInfoPanel" class="qr-original-info-panel w-50">
        <div class="bg-light p-1" style="min-height: 50%;overflow-y: auto;">
            <span data-app-role="qrOriginalText" class="pre"></span>
        </div>
        <div class="text-center">
            <small class="text-muted" data-app-role="creatingQrText" data-i18n-message="textCreatingQr"></small>
        </div>
    </div>
    <div class="w-50" data-app-role="qrcodePanel"></div>
</div>`;class _{constructor(t){h(this,"initPanel",async(t,{text:a,title:r})=>{const i=new x;i.init(null,async()=>{$(i.element).appendTo(t.qrcodePanel),$(t.qrOriginalText).text(a),E(this.panel);const o=C(a);try{await o.generateQr(),o.otherInfo=o.otherInfo||{},o.otherInfo.isCreated=!0,i.showQrCode(o),o.addToHistory(),$(t.creatingQrText).remove(),o.type===w.LINK?n.gaEventALV(`${this.eventSource}-CreateGenQr-Link`,n.vals.Success+(o.shortUrl?"-ShortUrl":"-NoShortUrl")):n.gaEventALV(`${this.eventSource}-CreateGenQr-${o.type}`,n.vals.Success+(o.shortUrl?"-ShortUrl":"-NoShortUrl"))}catch(l){i.showQrCode(o),n.gaEventALV(`${this.eventSource}-CreateGenQr-`,`${n.vals.Fail}-Text`,a),n.gaEventALV(`${this.eventSource}-CreateGenQr-`,`${n.vals.Fail}-Err`,l)}})});this.eventSource=t||n.label.Popup}init(t,a){this.panel=$(k),b(this.panel).then(r=>this.initPanel(r,{text:a,title:t}))}}let c;const I="qrcode-reader-cnt";function m(){if(!c){const e=document.createElement("div");e.attachShadow({mode:"open"}),document.body.append(e),c=document.createElement("div"),c.className="qrcode-reader-cnt-root",e.shadowRoot.append(c),$(document.createElement("link")).attr("rel","stylesheet").attr("href",chrome.runtime.getURL("css/icons.css")).appendTo(e.shadowRoot),$(document.createElement("link")).attr("rel","stylesheet").attr("href",chrome.runtime.getURL("css/bootstrap.css")).appendTo(e.shadowRoot),$(document.createElement("link")).attr("rel","stylesheet").attr("href",chrome.runtime.getURL("css/app.css")).appendTo(e.shadowRoot).on("load",()=>{$(e).css({display:"block"}),$(e.shadowRoot).append(`<style>${Q}</style>`)})}return c}function P(e,{title:t,duration:a}){return L({message:e,duration:a,title:t})}async function g(e,t){const a=`${n.label.Content}ShowDecodeQr${t?"-Local":""}`;try{const r=document.createElement("div"),i=new q(n.label.Content);i.init(r,e);const o=chrome.i18n.getMessage("labelAppName");$(r).addClass("reader-notifiation-panel");let l,d=setTimeout(()=>{d=null;const s=6e4*10;l=P(r,{duration:s,title:o})},500);i.on("qrcode.decode.status",s=>{s.detail.status==="success"?(d&&clearTimeout(d),l&&l(),f(m(),{title:o,content:$(r).children()})):s.detail.status==="fail"&&setTimeout(()=>l&&l(),5e3)}),n.gaEventAL(a,n.vals.Success)}catch(r){n.gaEventALV(a,n.vals.Fail,r)}}function U({title:e,text:t}){try{const a=new _(n.label.Content);a.init(e,t),f(m(),{title:chrome.i18n.getMessage("labelCreateQr"),content:a.panel}),n.gaEventAL(`${n.label.Content}-ShowCreateQr`,n.vals.Success)}catch(a){n.gaEventALV(`${n.label.Content}-ShowCreateQr`,n.vals.Fail,a)}}function N(){try{const e=document.createElement("input");e.type="file",e.accept="image/*",e.onchange=async t=>{u.log("file change");const a=t.target.files[0];if(!a)return;const r=new FileReader;r.readAsDataURL(a),r.onload=i=>{g(i.target.result,!0)}},e.style.width="0px",e.style.height="0px",e.style.opacity="0",e.click()}catch(e){n.gaEventALV(`${n.label.Content}-IdentifyLocalImg`,n.vals.Fail,e)}}function O(e){e.type===p.ProtocolType.DECODE_IMAGE?g(e.data.url):e.type===p.ProtocolType.CREATE_QR?U({title:e.data.url,text:e.data.text}):e.type===p.ProtocolType.DECODE_LOCAL_IMAGE&&N()}chrome.runtime.onMessage.addListener(O);globalThis._qrcode_reader_=globalThis._qrcode_reader_||{};globalThis._qrcode_reader_.init=()=>S.load().then(()=>{const e=m(),t=document.createElement("div");return $(t).addClass(`${I}-notify-container`).appendTo(e),T(t),globalThis._qrcode_reader_.isLoaded=!0,!0}).catch(e=>{n.gaEventALV(`${n.label.Content}-Load`,n.vals.Fail,e),u.error("Error in init content script",e)});
