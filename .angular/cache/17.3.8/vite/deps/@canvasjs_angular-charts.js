import {
  CommonModule,
  NgIf,
  NgStyle
} from "./chunk-U5OSXHD5.js";
import {
  Component,
  EventEmitter,
  Input,
  NgModule,
  Output,
  setClassMetadata,
  ɵɵNgOnChangesFeature,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelement,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpropertyInterpolate,
  ɵɵtemplate
} from "./chunk-XIMIHY4B.js";
import {
  __commonJS
} from "./chunk-WKYGNSYM.js";

// node_modules/@canvasjs/charts/canvasjs.min.js
var require_canvasjs_min = __commonJS({
  "node_modules/@canvasjs/charts/canvasjs.min.js"(exports, module) {
    (function() {
      function pa(d, p) {
        d.prototype = eb(p.prototype);
        d.prototype.constructor = d;
        d.base = p.prototype;
      }
      function eb(d) {
        function p() {
        }
        p.prototype = d;
        return new p();
      }
      function Ya(d, p, T) {
        "millisecond" === T ? d.setMilliseconds(d.getMilliseconds() + 1 * p) : "second" === T ? d.setSeconds(d.getSeconds() + 1 * p) : "minute" === T ? d.setMinutes(d.getMinutes() + 1 * p) : "hour" === T ? d.setHours(d.getHours() + 1 * p) : "day" === T ? d.setDate(d.getDate() + 1 * p) : "week" === T ? d.setDate(d.getDate() + 7 * p) : "month" === T ? d.setMonth(d.getMonth() + 1 * p) : "year" === T && d.setFullYear(d.getFullYear() + 1 * p);
        return d;
      }
      function da(d, p) {
        var T = false;
        0 > d && (T = true, d *= -1);
        d = "" + d;
        for (p = p ? p : 1; d.length < p; )
          d = "0" + d;
        return T ? "-" + d : d;
      }
      function Ga(d) {
        if (!d)
          return d;
        d = d.replace(/^\s\s*/, "");
        for (var p = /\s/, T = d.length; p.test(d.charAt(--T)); )
          ;
        return d.slice(0, T + 1);
      }
      function za(d) {
        d.roundRect = function(d2, T, n2, v2, ra, A, t2, B2) {
          t2 && (this.fillStyle = t2);
          B2 && (this.strokeStyle = B2);
          "undefined" === typeof ra && (ra = 5);
          this.lineWidth = A;
          this.beginPath();
          this.moveTo(d2 + ra, T);
          this.lineTo(d2 + n2 - ra, T);
          this.quadraticCurveTo(d2 + n2, T, d2 + n2, T + ra);
          this.lineTo(d2 + n2, T + v2 - ra);
          this.quadraticCurveTo(d2 + n2, T + v2, d2 + n2 - ra, T + v2);
          this.lineTo(d2 + ra, T + v2);
          this.quadraticCurveTo(d2, T + v2, d2, T + v2 - ra);
          this.lineTo(d2, T + ra);
          this.quadraticCurveTo(d2, T, d2 + ra, T);
          this.closePath();
          t2 && this.fill();
          B2 && 0 < A && this.stroke();
        };
      }
      function Sa(d, p) {
        return d - p;
      }
      function U(d) {
        var p = ((d & 16711680) >> 16).toString(16), n2 = ((d & 65280) >> 8).toString(16);
        d = ((d & 255) >> 0).toString(16);
        p = 2 > p.length ? "0" + p : p;
        n2 = 2 > n2.length ? "0" + n2 : n2;
        d = 2 > d.length ? "0" + d : d;
        return "#" + p + n2 + d;
      }
      function fb(d, p) {
        var n2 = this.length >>> 0, v2 = Number(p) || 0, v2 = 0 > v2 ? Math.ceil(v2) : Math.floor(v2);
        for (0 > v2 && (v2 += n2); v2 < n2; v2++)
          if (v2 in this && this[v2] === d)
            return v2;
        return -1;
      }
      function n(d) {
        return null === d || "undefined" === typeof d;
      }
      function Da(d) {
        d.indexOf || (d.indexOf = fb);
        return d;
      }
      function gb(d) {
        if (va.fSDec)
          d[ia("`eeDwdouMhrudods")](ia("e`u`@ohl`uhnoHuds`uhnoDoe"), function() {
            va._fTWm && va._fTWm(d);
          });
      }
      function Za(d, p, n2) {
        n2 = n2 || "normal";
        var v2 = d + "_" + p + "_" + n2, $ = $a[v2];
        if (isNaN($)) {
          try {
            if (!xa) {
              var ra = document.body;
              xa = document.createElement("span");
              xa.innerHTML = "";
              var A = document.createTextNode("Mpgyi");
              xa.appendChild(A);
              ra.appendChild(xa);
            }
            xa.style.display = "";
            Q(xa, { position: "absolute", left: "0px", top: "-20000px", padding: "0px", margin: "0px", border: "none", whiteSpace: "pre", lineHeight: "normal", fontFamily: d, fontSize: p + "px", fontWeight: n2 });
            $ = Math.round(xa.offsetHeight);
            xa.style.display = "none";
          } catch (t2) {
            $ = Math.ceil(1.1 * p);
          }
          $ = Math.max($, p);
          $a[v2] = $;
        }
        return $;
      }
      function G(d, p) {
        var n2 = [];
        if (n2 = { solid: [], shortDash: [3, 1], shortDot: [1, 1], shortDashDot: [3, 1, 1, 1], shortDashDotDot: [3, 1, 1, 1, 1, 1], dot: [1, 2], dash: [4, 2], dashDot: [
          4,
          2,
          1,
          2
        ], longDash: [8, 2], longDashDot: [8, 2, 1, 2], longDashDotDot: [8, 2, 1, 2, 1, 2] }[d || "solid"])
          for (var v2 = 0; v2 < n2.length; v2++)
            n2[v2] *= p;
        else
          n2 = [];
        return n2;
      }
      function H(d, p, T, v2, $) {
        v2 = v2 || [];
        $ = n($) ? hb ? { passive: false, capture: false } : false : $;
        v2.push([d, p, T, $]);
        return d.addEventListener ? (d.addEventListener(p, T, $), T) : d.attachEvent ? (v2 = function(p2) {
          p2 = p2 || window.event;
          p2.preventDefault = p2.preventDefault || function() {
            p2.returnValue = false;
          };
          p2.stopPropagation = p2.stopPropagation || function() {
            p2.cancelBubble = true;
          };
          T.call(d, p2);
        }, d.attachEvent("on" + p, v2), v2) : false;
      }
      function ib(d) {
        if (d._menuButton)
          d.exportEnabled ? (Q(d._menuButton, { backgroundColor: d.toolbar.itemBackgroundColor, color: d.toolbar.fontColor }), La(d._menuButton), ta(d, d._menuButton, "menu"), 0 >= navigator.userAgent.search("MSIE") && d._menuButton.childNodes[0] && Q(d._menuButton.childNodes[0], { WebkitFilter: "invert(0%)", filter: "invert(0%)" })) : wa(d._menuButton);
        else if (d.exportEnabled && v) {
          var p = false;
          d._menuButton = document.createElement("button");
          ta(d, d._menuButton, "menu");
          d._toolBar.appendChild(d._menuButton);
          H(d._menuButton, "touchstart", function(d2) {
            p = true;
          }, d.allDOMEventHandlers);
          H(d._menuButton, "click", function() {
            "none" !== d._dropdownMenu.style.display || d._dropDownCloseTime && 500 >= (/* @__PURE__ */ new Date()).getTime() - d._dropDownCloseTime.getTime() || (d._dropdownMenu.style.display = "block", d._menuButton.blur(), d._dropdownMenu.focus());
          }, d.allDOMEventHandlers, true);
          H(d._menuButton, "mousemove", function() {
            p || (Q(d._menuButton, { backgroundColor: d.toolbar.itemBackgroundColorOnHover, color: d.toolbar.fontColorOnHover }), 0 >= navigator.userAgent.search("MSIE") && Q(d._menuButton.childNodes[0], { WebkitFilter: "invert(100%)", filter: "invert(100%)" }));
          }, d.allDOMEventHandlers, true);
          H(d._menuButton, "mouseout", function() {
            p || (Q(d._menuButton, { backgroundColor: d.toolbar.itemBackgroundColor, color: d.toolbar.fontColor }), 0 >= navigator.userAgent.search("MSIE") && Q(d._menuButton.childNodes[0], { WebkitFilter: "invert(0%)", filter: "invert(0%)" }));
          }, d.allDOMEventHandlers, true);
        }
        if (d.exportEnabled && d._dropdownMenu) {
          var n2 = d.theme && -1 !== d.theme.indexOf("dark") ? "black" : "#888888";
          Q(
            d._dropdownMenu,
            { backgroundColor: d.toolbar.itemBackgroundColor, color: d.toolbar.fontColor, boxShadow: "2px 2px 10px " + n2 }
          );
          for (var n2 = d._dropdownMenu.childNodes, P = [d._cultureInfo.printText, d._cultureInfo.saveJPGText, d._cultureInfo.savePNGText], $ = 0; $ < P.length; $++)
            Q(n2[$], { backgroundColor: d.toolbar.itemBackgroundColor, color: d.toolbar.fontColor }), n2[$].innerHTML = P[$];
        } else
          !d._dropdownMenu && (d.exportEnabled && v) && (p = false, d._dropdownMenu = document.createElement("div"), d._dropdownMenu.setAttribute("tabindex", -1), n2 = d.theme && -1 !== d.theme.indexOf("dark") ? "black" : "#888888", Q(d._dropdownMenu, { position: "absolute", zIndex: 1, userSelect: "none", MozUserSeelct: "none", WebkitUserSelect: "none", msUserSelect: "none", cursor: "pointer", right: "0px", top: "25px", minWidth: "120px", outline: 0, fontSize: "14px", fontFamily: "Arial, Helvetica, sans-serif", padding: "5px 0px 5px 0px", textAlign: "left", lineHeight: "10px", backgroundColor: d.toolbar.itemBackgroundColor, boxShadow: "2px 2px 10px " + n2 }), d._dropdownMenu.style.display = "none", d._toolBar.appendChild(d._dropdownMenu), H(
            d._dropdownMenu,
            "blur",
            function() {
              wa(d._dropdownMenu);
              d._dropDownCloseTime = /* @__PURE__ */ new Date();
            },
            d.allDOMEventHandlers,
            true
          ), n2 = document.createElement("div"), Q(n2, { padding: "12px 8px 12px 8px" }), n2.innerHTML = d._cultureInfo.printText, n2.style.backgroundColor = d.toolbar.itemBackgroundColor, n2.style.color = d.toolbar.fontColor, d._dropdownMenu.appendChild(n2), H(n2, "touchstart", function(d2) {
            p = true;
          }, d.allDOMEventHandlers), H(
            n2,
            "mousemove",
            function() {
              p || (this.style.backgroundColor = d.toolbar.itemBackgroundColorOnHover, this.style.color = d.toolbar.fontColorOnHover);
            },
            d.allDOMEventHandlers,
            true
          ), H(n2, "mouseout", function() {
            p || (this.style.backgroundColor = d.toolbar.itemBackgroundColor, this.style.color = d.toolbar.fontColor);
          }, d.allDOMEventHandlers, true), H(n2, "click", function() {
            d.print();
            wa(d._dropdownMenu);
          }, d.allDOMEventHandlers, true), n2 = document.createElement("div"), Q(n2, { padding: "12px 8px 12px 8px" }), n2.innerHTML = d._cultureInfo.saveJPGText, n2.style.backgroundColor = d.toolbar.itemBackgroundColor, n2.style.color = d.toolbar.fontColor, d._dropdownMenu.appendChild(n2), H(n2, "touchstart", function(d2) {
            p = true;
          }, d.allDOMEventHandlers), H(n2, "mousemove", function() {
            p || (this.style.backgroundColor = d.toolbar.itemBackgroundColorOnHover, this.style.color = d.toolbar.fontColorOnHover);
          }, d.allDOMEventHandlers, true), H(n2, "mouseout", function() {
            p || (this.style.backgroundColor = d.toolbar.itemBackgroundColor, this.style.color = d.toolbar.fontColor);
          }, d.allDOMEventHandlers, true), H(n2, "click", function() {
            d.exportChart({ format: "jpeg", fileName: d.exportFileName });
            wa(d._dropdownMenu);
          }, d.allDOMEventHandlers, true), n2 = document.createElement("div"), Q(n2, { padding: "12px 8px 12px 8px" }), n2.innerHTML = d._cultureInfo.savePNGText, n2.style.backgroundColor = d.toolbar.itemBackgroundColor, n2.style.color = d.toolbar.fontColor, d._dropdownMenu.appendChild(n2), H(n2, "touchstart", function(d2) {
            p = true;
          }, d.allDOMEventHandlers), H(n2, "mousemove", function() {
            p || (this.style.backgroundColor = d.toolbar.itemBackgroundColorOnHover, this.style.color = d.toolbar.fontColorOnHover);
          }, d.allDOMEventHandlers, true), H(n2, "mouseout", function() {
            p || (this.style.backgroundColor = d.toolbar.itemBackgroundColor, this.style.color = d.toolbar.fontColor);
          }, d.allDOMEventHandlers, true), H(n2, "click", function() {
            d.exportChart({ format: "png", fileName: d.exportFileName });
            wa(d._dropdownMenu);
          }, d.allDOMEventHandlers, true));
      }
      function ab(d, p, n2) {
        d *= la;
        p *= la;
        d = n2.getImageData(d, p, 2, 2).data;
        p = true;
        for (n2 = 0; 4 > n2; n2++)
          if (d[n2] !== d[n2 + 4] | d[n2] !== d[n2 + 8] | d[n2] !== d[n2 + 12]) {
            p = false;
            break;
          }
        return p ? d[0] << 16 | d[1] << 8 | d[2] : 0;
      }
      function ma(d, p, n2) {
        return d in p ? p[d] : n2[d];
      }
      function Ma(d, p, T, P) {
        v && bb ? (P = !n(P) && P ? d.getContext("2d", { willReadFrequently: true }) : d.getContext("2d"), Na = P.webkitBackingStorePixelRatio || P.mozBackingStorePixelRatio || P.msBackingStorePixelRatio || P.oBackingStorePixelRatio || P.backingStorePixelRatio || 1, la = Ta / Na, d.width = p * la, d.height = T * la, Ta !== Na && (d.style.width = p + "px", d.style.height = T + "px", P.scale(la, la))) : (d.width = p, d.height = T);
      }
      function jb(d) {
        if (!kb) {
          var p = false, n2 = false;
          "undefined" === typeof qa.Chart.creditHref ? (d.creditHref = ia("iuuqr;..b`ow`rkr/bnl."), d.creditText = ia("B`ow`rKR/bnl")) : (p = d.updateOption("creditText"), n2 = d.updateOption("creditHref"));
          if (d.creditHref && d.creditText) {
            d._creditLink || (d._creditLink = document.createElement("a"), d._creditLink.setAttribute("class", "canvasjs-chart-credit"), d._creditLink.setAttribute("title", "JavaScript Charts"), Q(d._creditLink, { outline: "none", margin: "0px", position: "absolute", right: "2px", top: d.height - 14 + "px", color: "dimgrey", textDecoration: "none", fontSize: "11px", fontFamily: "Calibri, Lucida Grande, Lucida Sans Unicode, Arial, sans-serif" }), d._creditLink.setAttribute("tabIndex", -1), d._creditLink.setAttribute("target", "_blank"));
            if (0 === d.renderCount || p || n2)
              d._creditLink.setAttribute("href", d.creditHref), d._creditLink.innerHTML = d.creditText;
            d._creditLink && d.creditHref && d.creditText ? (d._creditLink.parentElement || d._canvasJSContainer.appendChild(d._creditLink), d._creditLink.style.top = d.height - 14 + "px") : d._creditLink.parentElement && d._canvasJSContainer.removeChild(d._creditLink);
          }
        }
      }
      function ua(d, p, n2) {
        Ha && (this.canvasCount |= 0, window.console.log(++this.canvasCount));
        var P = document.createElement("canvas");
        P.setAttribute("class", "canvasjs-chart-canvas");
        Ma(P, d, p, n2);
        v || "undefined" === typeof G_vmlCanvasManager || G_vmlCanvasManager.initElement(P);
        return P;
      }
      function Q(d, p) {
        for (var n2 in p)
          d.style[n2] = p[n2];
      }
      function ta(d, p, n2) {
        p.getAttribute("state") || (p.style.backgroundColor = d.toolbar.itemBackgroundColor, p.style.color = d.toolbar.fontColor, p.style.border = "none", Q(p, { WebkitUserSelect: "none", MozUserSelect: "none", msUserSelect: "none", userSelect: "none" }));
        p.getAttribute("state") !== n2 && (p.setAttribute("state", n2), p.setAttribute("type", "button"), Q(p, {
          padding: "5px 12px",
          cursor: "pointer",
          "float": "left",
          width: "40px",
          height: "25px",
          outline: "0px",
          verticalAlign: "baseline",
          lineHeight: "0"
        }), p.innerHTML = "<img src='" + lb[n2].image + "' alt='" + d._cultureInfo[n2 + "Text"] + "' />", Q(p.childNodes[0], { height: "95%", pointerEvents: "none" }));
        p.setAttribute("title", d._cultureInfo[n2 + "Text"]);
      }
      function La() {
        for (var d = null, p = 0; p < arguments.length; p++)
          d = arguments[p], d.style && (d.style.display = "inline");
      }
      function wa() {
        for (var d = null, p = 0; p < arguments.length; p++)
          (d = arguments[p]) && d.style && (d.style.display = "none");
      }
      function Ua(d, p, n2, v2, $) {
        if (null === d || "undefined" === typeof d)
          return "undefined" === typeof n2 ? p : n2;
        d = parseFloat(d.toString()) * (0 <= d.toString().indexOf("%") ? p / 100 : 1);
        "undefined" !== typeof v2 && (d = Math.min(v2, d), "undefined" !== typeof $ && (d = Math.max($, d)));
        return !isNaN(d) && d <= p && 0 <= d ? d : "undefined" === typeof n2 ? p : n2;
      }
      function Y(d, p, v2, P, $) {
        this._defaultsKey = d;
        this._themeOptionsKey = p;
        this._index = P;
        this.parent = $;
        this._eventListeners = [];
        d = {};
        this.theme && n(this.parent) && n(p) && n(P) ? d = n(this.predefinedThemes[this.theme]) ? this.predefinedThemes.light1 : this.predefinedThemes[this.theme] : this.parent && (this.parent.themeOptions && this.parent.themeOptions[p]) && (null === P ? d = this.parent.themeOptions[p] : 0 < this.parent.themeOptions[p].length && (P = Math.min(this.parent.themeOptions[p].length - 1, P), d = this.parent.themeOptions[p][P]));
        this.themeOptions = d;
        this.options = v2 ? v2 : { _isPlaceholder: true };
        this.setOptions(this.options, d);
      }
      function Ea(d, p, n2, v2, $) {
        "undefined" === typeof $ && ($ = 0);
        this._padding = $;
        this._x1 = d;
        this._y1 = p;
        this._x2 = n2;
        this._y2 = v2;
        this._rightOccupied = this._leftOccupied = this._bottomOccupied = this._topOccupied = this._padding;
      }
      function ja(d, p) {
        ja.base.constructor.call(this, "TextBlock", null, p, null, null);
        this.ctx = d;
        this._isDirty = true;
        this._wrappedText = null;
        this._initialize();
      }
      function Va(d, p) {
        Va.base.constructor.call(this, "Toolbar", "toolbar", p, null, d);
        this.chart = d;
        this.canvas = d.canvas;
        this.ctx = this.chart.ctx;
        this.optionsName = "toolbar";
      }
      function Aa(d, p) {
        Aa.base.constructor.call(this, "Title", "title", p, null, d);
        this.chart = d;
        this.canvas = d.canvas;
        this.ctx = this.chart.ctx;
        this.optionsName = "title";
        if (n(this.options.margin) && d.options.subtitles) {
          for (var v2 = d.options.subtitles, P = 0; P < v2.length; P++)
            if ((n(v2[P].horizontalAlign) && "center" === this.horizontalAlign || v2[P].horizontalAlign === this.horizontalAlign) && (n(v2[P].verticalAlign) && "top" === this.verticalAlign || v2[P].verticalAlign === this.verticalAlign) && !v2[P].dockInsidePlotArea === !this.dockInsidePlotArea) {
              this.margin = 0;
              break;
            }
        }
        "undefined" === typeof this.options.fontSize && (this.fontSize = this.chart.getAutoFontSize(this.fontSize));
        this.height = this.width = null;
        this.bounds = { x1: null, y1: null, x2: null, y2: null };
      }
      function Ia(d, p, n2) {
        Ia.base.constructor.call(this, "Subtitle", "subtitles", p, n2, d);
        this.chart = d;
        this.canvas = d.canvas;
        this.ctx = this.chart.ctx;
        this.optionsName = "subtitles";
        this.isOptionsInArray = true;
        "undefined" === typeof this.options.fontSize && (this.fontSize = this.chart.getAutoFontSize(this.fontSize));
        this.height = this.width = null;
        this.bounds = { x1: null, y1: null, x2: null, y2: null };
      }
      function Wa() {
        this.pool = [];
      }
      function Ja(d) {
        var p;
        d && Ka[d] && (p = Ka[d]);
        Ja.base.constructor.call(
          this,
          "CultureInfo",
          null,
          p,
          null,
          null
        );
      }
      var Ha = false, va = {}, v = !!document.createElement("canvas").getContext, qa = {
        Chart: { width: 500, height: 400, zoomEnabled: false, zoomType: "x", backgroundColor: "white", theme: "light1", animationEnabled: false, animationDuration: 1200, dataPointWidth: null, dataPointMinWidth: null, dataPointMaxWidth: null, colorSet: "colorSet1", culture: "en", creditText: "CanvasJS", interactivityEnabled: true, exportEnabled: false, exportFileName: "Chart", rangeChanging: null, rangeChanged: null, publicProperties: {
          title: "readWrite",
          subtitles: "readWrite",
          toolbar: "readWrite",
          toolTip: "readWrite",
          legend: "readWrite",
          axisX: "readWrite",
          axisY: "readWrite",
          axisX2: "readWrite",
          axisY2: "readWrite",
          data: "readWrite",
          options: "readWrite",
          bounds: "readOnly",
          container: "readOnly",
          selectedColorSet: "readOnly"
        } },
        Title: {
          padding: 0,
          text: null,
          verticalAlign: "top",
          horizontalAlign: "center",
          fontSize: 20,
          fontFamily: "Calibri",
          fontWeight: "normal",
          fontColor: "black",
          fontStyle: "normal",
          borderThickness: 0,
          borderColor: "black",
          cornerRadius: 0,
          backgroundColor: v ? "transparent" : null,
          margin: 5,
          wrap: true,
          maxWidth: null,
          textAlign: "center",
          dockInsidePlotArea: false,
          publicProperties: { options: "readWrite", bounds: "readOnly", chart: "readOnly" }
        },
        Subtitle: { padding: 0, text: null, verticalAlign: "top", horizontalAlign: "center", fontSize: 14, fontFamily: "Calibri", fontWeight: "normal", fontColor: "black", fontStyle: "normal", borderThickness: 0, borderColor: "black", cornerRadius: 0, backgroundColor: null, margin: 2, wrap: true, maxWidth: null, textAlign: "center", dockInsidePlotArea: false, publicProperties: { options: "readWrite", bounds: "readOnly", chart: "readOnly" } },
        Toolbar: { itemBackgroundColor: "white", itemBackgroundColorOnHover: "#2196f3", buttonBorderColor: "#2196f3", buttonBorderThickness: 1, fontColor: "black", fontColorOnHover: "white", publicProperties: { options: "readWrite", chart: "readOnly" } },
        Legend: { name: null, verticalAlign: "center", horizontalAlign: "right", fontSize: 14, fontFamily: "calibri", fontWeight: "normal", fontColor: "black", fontStyle: "normal", cursor: null, itemmouseover: null, itemmouseout: null, itemmousemove: null, itemclick: null, dockInsidePlotArea: false, reversed: false, backgroundColor: v ? "transparent" : null, borderColor: v ? "transparent" : null, borderThickness: 0, cornerRadius: 0, maxWidth: null, maxHeight: null, markerMargin: null, itemMaxWidth: null, itemWidth: null, itemWrap: true, itemTextFormatter: null, publicProperties: { options: "readWrite", bounds: "readOnly", chart: "readOnly" } },
        ToolTip: {
          enabled: true,
          shared: false,
          animationEnabled: true,
          content: null,
          contentFormatter: null,
          reversed: false,
          backgroundColor: v ? "rgba(255,255,255,.9)" : "rgb(255,255,255)",
          borderColor: null,
          borderThickness: 2,
          cornerRadius: 5,
          fontSize: 14,
          fontColor: "black",
          fontFamily: "Calibri, Arial, Georgia, serif;",
          fontWeight: "normal",
          fontStyle: "italic",
          updated: null,
          hidden: null,
          publicProperties: { options: "readWrite", chart: "readOnly" }
        },
        Axis: {
          minimum: null,
          maximum: null,
          viewportMinimum: null,
          viewportMaximum: null,
          interval: null,
          intervalType: null,
          reversed: false,
          logarithmic: false,
          logarithmBase: 10,
          title: null,
          titleFontColor: "black",
          titleFontSize: 20,
          titleFontFamily: "arial",
          titleFontWeight: "normal",
          titleFontStyle: "normal",
          titleWrap: true,
          titleMaxWidth: null,
          titleBackgroundColor: v ? "transparent" : null,
          titleBorderColor: v ? "transparent" : null,
          titleBorderThickness: 0,
          titleCornerRadius: 0,
          titleTextAlign: "left",
          labelAngle: 0,
          labelFontFamily: "arial",
          labelFontColor: "black",
          labelFontSize: 12,
          labelFontWeight: "normal",
          labelFontStyle: "normal",
          labelAutoFit: true,
          labelWrap: true,
          labelMaxWidth: null,
          labelFormatter: null,
          labelBackgroundColor: v ? "transparent" : null,
          labelBorderColor: v ? "transparent" : null,
          labelBorderThickness: 0,
          labelCornerRadius: 0,
          labelPlacement: "outside",
          labelTextAlign: "left",
          prefix: "",
          suffix: "",
          includeZero: false,
          tickLength: 5,
          tickColor: "black",
          tickThickness: 1,
          tickPlacement: "outside",
          lineColor: "black",
          lineThickness: 1,
          lineDashType: "solid",
          gridColor: "#A0A0A0",
          gridThickness: 0,
          gridDashType: "solid",
          interlacedColor: v ? "transparent" : null,
          valueFormatString: null,
          margin: 2,
          publicProperties: { options: "readWrite", stripLines: "readWrite", scaleBreaks: "readWrite", crosshair: "readWrite", bounds: "readOnly", chart: "readOnly" }
        },
        StripLine: {
          value: null,
          startValue: null,
          endValue: null,
          color: "orange",
          opacity: null,
          thickness: 2,
          lineDashType: "solid",
          label: "",
          labelPlacement: "inside",
          labelAlign: "far",
          labelWrap: true,
          labelMaxWidth: null,
          labelBackgroundColor: null,
          labelBorderColor: v ? "transparent" : null,
          labelBorderThickness: 0,
          labelCornerRadius: 0,
          labelFontFamily: "arial",
          labelFontColor: "orange",
          labelFontSize: 12,
          labelFontWeight: "normal",
          labelFontStyle: "normal",
          labelFormatter: null,
          labelTextAlign: "left",
          showOnTop: false,
          publicProperties: { options: "readWrite", axis: "readOnly", bounds: "readOnly", chart: "readOnly" }
        },
        ScaleBreaks: {
          autoCalculate: false,
          collapsibleThreshold: "25%",
          maxNumberOfAutoBreaks: 2,
          spacing: 8,
          type: "straight",
          color: "#FFFFFF",
          fillOpacity: 0.9,
          lineThickness: 2,
          lineColor: "#E16E6E",
          lineDashType: "solid",
          publicProperties: { options: "readWrite", customBreaks: "readWrite", axis: "readOnly", autoBreaks: "readOnly", bounds: "readOnly", chart: "readOnly" }
        },
        Break: { startValue: null, endValue: null, spacing: 8, type: "straight", color: "#FFFFFF", fillOpacity: 0.9, lineThickness: 2, lineColor: "#E16E6E", lineDashType: "solid", publicProperties: {
          options: "readWrite",
          scaleBreaks: "readOnly",
          bounds: "readOnly",
          chart: "readOnly"
        } },
        Crosshair: {
          enabled: false,
          snapToDataPoint: false,
          color: "grey",
          opacity: null,
          thickness: 2,
          lineDashType: "solid",
          label: "",
          labelWrap: true,
          labelMaxWidth: null,
          labelTextAlign: "left",
          labelBackgroundColor: v ? "grey" : null,
          labelBorderColor: v ? "grey" : null,
          labelBorderThickness: 0,
          labelCornerRadius: 0,
          labelFontFamily: v ? "Calibri, Optima, Candara, Verdana, Geneva, sans-serif" : "calibri",
          labelFontSize: 12,
          labelFontColor: "#fff",
          labelFontWeight: "normal",
          labelFontStyle: "normal",
          labelFormatter: null,
          valueFormatString: null,
          updated: null,
          hidden: null,
          publicProperties: { options: "readWrite", axis: "readOnly", bounds: "readOnly", chart: "readOnly" }
        },
        DataSeries: {
          name: null,
          dataPoints: null,
          label: "",
          bevelEnabled: false,
          highlightEnabled: true,
          cursor: "default",
          indexLabel: "",
          indexLabelPlacement: "auto",
          indexLabelOrientation: "horizontal",
          indexLabelTextAlign: "left",
          indexLabelFontColor: "black",
          indexLabelFontSize: 12,
          indexLabelFontStyle: "normal",
          indexLabelFontFamily: "Arial",
          indexLabelFontWeight: "normal",
          indexLabelBackgroundColor: null,
          indexLabelBorderColor: null,
          indexLabelBorderThickness: 0,
          indexLabelLineColor: "gray",
          indexLabelLineThickness: 1,
          indexLabelLineDashType: "solid",
          indexLabelMaxWidth: null,
          indexLabelWrap: true,
          indexLabelFormatter: null,
          lineThickness: 2,
          lineDashType: "solid",
          connectNullData: false,
          nullDataLineDashType: "dash",
          color: null,
          lineColor: null,
          risingColor: "white",
          fallingColor: "red",
          fillOpacity: null,
          startAngle: 0,
          radius: null,
          innerRadius: null,
          explodeOnClick: true,
          neckHeight: null,
          neckWidth: null,
          reversed: false,
          valueRepresents: null,
          linkedDataSeriesIndex: null,
          whiskerThickness: 2,
          whiskerDashType: "solid",
          whiskerColor: null,
          whiskerLength: null,
          stemThickness: 2,
          stemColor: null,
          stemDashType: "solid",
          upperBoxColor: "white",
          lowerBoxColor: "white",
          type: "column",
          xValueType: "number",
          axisXType: "primary",
          axisYType: "primary",
          axisXIndex: 0,
          axisYIndex: 0,
          xValueFormatString: null,
          yValueFormatString: null,
          zValueFormatString: null,
          percentFormatString: null,
          showInLegend: false,
          legendMarkerType: null,
          legendMarkerColor: null,
          legendText: null,
          legendMarkerBorderColor: v ? "transparent" : null,
          legendMarkerBorderThickness: 0,
          markerType: "circle",
          markerColor: null,
          markerSize: null,
          markerBorderColor: v ? "transparent" : null,
          markerBorderThickness: 0,
          mouseover: null,
          mouseout: null,
          mousemove: null,
          click: null,
          toolTipContent: null,
          visible: true,
          publicProperties: { options: "readWrite", axisX: "readWrite", axisY: "readWrite", chart: "readOnly" }
        },
        TextBlock: {
          x: 0,
          y: 0,
          width: null,
          height: null,
          maxWidth: null,
          maxHeight: null,
          padding: 0,
          angle: 0,
          text: "",
          horizontalAlign: "center",
          textAlign: "left",
          fontSize: 12,
          fontFamily: "calibri",
          fontWeight: "normal",
          fontColor: "black",
          fontStyle: "normal",
          borderThickness: 0,
          borderColor: "black",
          cornerRadius: 0,
          backgroundColor: null,
          textBaseline: "top"
        },
        CultureInfo: {
          decimalSeparator: ".",
          digitGroupSeparator: ",",
          zoomText: "Zoom",
          panText: "Pan",
          resetText: "Reset",
          menuText: "More Options",
          saveJPGText: "Save as JPEG",
          savePNGText: "Save as PNG",
          printText: "Print",
          days: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
          shortDays: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
          months: "January February March April May June July August September October November December".split(" "),
          shortMonths: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" ")
        }
      }, Ka = { en: {} }, t = v ? "Trebuchet MS, Helvetica, sans-serif" : "Arial", Fa = v ? "Impact, Charcoal, sans-serif" : "Arial", Ba = { colorSet1: "#4F81BC #C0504E #9BBB58 #23BFAA #8064A1 #4AACC5 #F79647 #7F6084 #77A033 #33558B #E59566".split(" "), colorSet2: "#6D78AD #51CDA0 #DF7970 #4C9CA0 #AE7D99 #C9D45C #5592AD #DF874D #52BCA8 #8E7AA3 #E3CB64 #C77B85 #C39762 #8DD17E #B57952 #FCC26C".split(" "), colorSet3: "#8CA1BC #36845C #017E82 #8CB9D0 #708C98 #94838D #F08891 #0366A7 #008276 #EE7757 #E5BA3A #F2990B #03557B #782970".split(" ") }, S, ca, V, ha, W;
      ca = "#333333";
      V = "#000000";
      S = "#666666";
      W = ha = "#000000";
      var ea = 20, B = 14, Xa = { colorSet: "colorSet1", backgroundColor: "#FFFFFF", title: { fontFamily: Fa, fontSize: 32, fontColor: ca, fontWeight: "normal", verticalAlign: "top", margin: 5 }, subtitles: [{ fontFamily: Fa, fontSize: B, fontColor: ca, fontWeight: "normal", verticalAlign: "top", margin: 5 }], data: [{ indexLabelFontFamily: t, indexLabelFontSize: B, indexLabelFontColor: ca, indexLabelFontWeight: "normal", indexLabelLineThickness: 1 }], axisX: [{
        titleFontFamily: t,
        titleFontSize: ea,
        titleFontColor: ca,
        titleFontWeight: "normal",
        labelFontFamily: t,
        labelFontSize: B,
        labelFontColor: V,
        labelFontWeight: "normal",
        lineThickness: 1,
        lineColor: S,
        tickThickness: 1,
        tickColor: S,
        gridThickness: 0,
        gridColor: S,
        stripLines: [{ labelFontFamily: t, labelFontSize: B, labelFontColor: "#FF7300", labelFontWeight: "normal", labelBackgroundColor: null, color: "#FF7300", thickness: 1 }],
        crosshair: { labelFontFamily: t, labelFontSize: B, labelFontColor: "#EEEEEE", labelFontWeight: "normal", labelBackgroundColor: W, color: ha, thickness: 1, lineDashType: "dash" },
        scaleBreaks: { type: "zigzag", spacing: "2%", lineColor: "#BBBBBB", lineThickness: 1, lineDashType: "solid" }
      }], axisX2: [{ titleFontFamily: t, titleFontSize: ea, titleFontColor: ca, titleFontWeight: "normal", labelFontFamily: t, labelFontSize: B, labelFontColor: V, labelFontWeight: "normal", lineThickness: 1, lineColor: S, tickThickness: 1, tickColor: S, gridThickness: 0, gridColor: S, stripLines: [{ labelFontFamily: t, labelFontSize: B, labelFontColor: "#FF7300", labelFontWeight: "normal", labelBackgroundColor: null, color: "#FF7300", thickness: 1 }], crosshair: {
        labelFontFamily: t,
        labelFontSize: B,
        labelFontColor: "#EEEEEE",
        labelFontWeight: "normal",
        labelBackgroundColor: W,
        color: ha,
        thickness: 1,
        lineDashType: "dash"
      }, scaleBreaks: { type: "zigzag", spacing: "2%", lineColor: "#BBBBBB", lineThickness: 1, lineDashType: "solid" } }], axisY: [{ titleFontFamily: t, titleFontSize: ea, titleFontColor: ca, titleFontWeight: "normal", labelFontFamily: t, labelFontSize: B, labelFontColor: V, labelFontWeight: "normal", lineThickness: 1, lineColor: S, tickThickness: 1, tickColor: S, gridThickness: 1, gridColor: S, stripLines: [{
        labelFontFamily: t,
        labelFontSize: B,
        labelFontColor: "#FF7300",
        labelFontWeight: "normal",
        labelBackgroundColor: null,
        color: "#FF7300",
        thickness: 1
      }], crosshair: { labelFontFamily: t, labelFontSize: B, labelFontColor: "#EEEEEE", labelFontWeight: "normal", labelBackgroundColor: W, color: ha, thickness: 1, lineDashType: "dash" }, scaleBreaks: { type: "zigzag", spacing: "2%", lineColor: "#BBBBBB", lineThickness: 1, lineDashType: "solid" } }], axisY2: [{
        titleFontFamily: t,
        titleFontSize: ea,
        titleFontColor: ca,
        titleFontWeight: "normal",
        labelFontFamily: t,
        labelFontSize: B,
        labelFontColor: V,
        labelFontWeight: "normal",
        lineThickness: 1,
        lineColor: S,
        tickThickness: 1,
        tickColor: S,
        gridThickness: 1,
        gridColor: S,
        stripLines: [{ labelFontFamily: t, labelFontSize: B, labelFontColor: "#FF7300", labelFontWeight: "normal", labelBackgroundColor: null, color: "#FF7300", thickness: 1 }],
        crosshair: { labelFontFamily: t, labelFontSize: B, labelFontColor: "#EEEEEE", labelFontWeight: "normal", labelBackgroundColor: W, color: ha, thickness: 1, lineDashType: "dash" },
        scaleBreaks: {
          type: "zigzag",
          spacing: "2%",
          lineColor: "#BBBBBB",
          lineThickness: 1,
          lineDashType: "solid"
        }
      }], legend: { fontFamily: t, fontSize: 14, fontColor: ca, fontWeight: "bold", verticalAlign: "bottom", horizontalAlign: "center" }, toolTip: { fontFamily: t, fontSize: 14, fontStyle: "normal", cornerRadius: 0, borderThickness: 1 }, toolbar: { itemBackgroundColor: "white", itemBackgroundColorOnHover: "#2196f3", buttonBorderColor: "#2196f3", buttonBorderThickness: 1, fontColor: "black", fontColorOnHover: "white" } };
      V = ca = "#F5F5F5";
      S = "#FFFFFF";
      ha = "#40BAF1";
      W = "#F5F5F5";
      var ea = 20, B = 14, cb = { colorSet: "colorSet2", title: {
        fontFamily: t,
        fontSize: 33,
        fontColor: "#3A3A3A",
        fontWeight: "bold",
        verticalAlign: "top",
        margin: 5
      }, subtitles: [{ fontFamily: t, fontSize: B, fontColor: "#3A3A3A", fontWeight: "normal", verticalAlign: "top", margin: 5 }], data: [{ indexLabelFontFamily: t, indexLabelFontSize: B, indexLabelFontColor: "#666666", indexLabelFontWeight: "normal", indexLabelLineThickness: 1 }], axisX: [{
        titleFontFamily: t,
        titleFontSize: ea,
        titleFontColor: "#666666",
        titleFontWeight: "normal",
        labelFontFamily: t,
        labelFontSize: B,
        labelFontColor: "#666666",
        labelFontWeight: "normal",
        lineThickness: 1,
        lineColor: "#BBBBBB",
        tickThickness: 1,
        tickColor: "#BBBBBB",
        gridThickness: 1,
        gridColor: "#BBBBBB",
        stripLines: [{ labelFontFamily: t, labelFontSize: B, labelFontColor: "#FFA500", labelFontWeight: "normal", labelBackgroundColor: null, color: "#FFA500", thickness: 1 }],
        crosshair: { labelFontFamily: t, labelFontSize: B, labelFontColor: "#EEEEEE", labelFontWeight: "normal", labelBackgroundColor: "black", color: "black", thickness: 1, lineDashType: "dot" },
        scaleBreaks: {
          type: "zigzag",
          spacing: "2%",
          lineColor: "#BBBBBB",
          lineThickness: 1,
          lineDashType: "solid"
        }
      }], axisX2: [{ titleFontFamily: t, titleFontSize: ea, titleFontColor: "#666666", titleFontWeight: "normal", labelFontFamily: t, labelFontSize: B, labelFontColor: "#666666", labelFontWeight: "normal", lineThickness: 1, lineColor: "#BBBBBB", tickColor: "#BBBBBB", tickThickness: 1, gridThickness: 1, gridColor: "#BBBBBB", stripLines: [{ labelFontFamily: t, labelFontSize: B, labelFontColor: "#FFA500", labelFontWeight: "normal", labelBackgroundColor: null, color: "#FFA500", thickness: 1 }], crosshair: {
        labelFontFamily: t,
        labelFontSize: B,
        labelFontColor: "#EEEEEE",
        labelFontWeight: "normal",
        labelBackgroundColor: "black",
        color: "black",
        thickness: 1,
        lineDashType: "dot"
      }, scaleBreaks: { type: "zigzag", spacing: "2%", lineColor: "#BBBBBB", lineThickness: 1, lineDashType: "solid" } }], axisY: [{
        titleFontFamily: t,
        titleFontSize: ea,
        titleFontColor: "#666666",
        titleFontWeight: "normal",
        labelFontFamily: t,
        labelFontSize: B,
        labelFontColor: "#666666",
        labelFontWeight: "normal",
        lineThickness: 0,
        lineColor: "#BBBBBB",
        tickColor: "#BBBBBB",
        tickThickness: 1,
        gridThickness: 1,
        gridColor: "#BBBBBB",
        stripLines: [{ labelFontFamily: t, labelFontSize: B, labelFontColor: "#FFA500", labelFontWeight: "normal", labelBackgroundColor: null, color: "#FFA500", thickness: 1 }],
        crosshair: { labelFontFamily: t, labelFontSize: B, labelFontColor: "#EEEEEE", labelFontWeight: "normal", labelBackgroundColor: "black", color: "black", thickness: 1, lineDashType: "dot" },
        scaleBreaks: { type: "zigzag", spacing: "2%", lineColor: "#BBBBBB", lineThickness: 1, lineDashType: "solid" }
      }], axisY2: [{
        titleFontFamily: t,
        titleFontSize: ea,
        titleFontColor: "#666666",
        titleFontWeight: "normal",
        labelFontFamily: t,
        labelFontSize: B,
        labelFontColor: "#666666",
        labelFontWeight: "normal",
        lineThickness: 0,
        lineColor: "#BBBBBB",
        tickColor: "#BBBBBB",
        tickThickness: 1,
        gridThickness: 1,
        gridColor: "#BBBBBB",
        stripLines: [{ labelFontFamily: t, labelFontSize: B, labelFontColor: "#FFA500", labelFontWeight: "normal", labelBackgroundColor: null, color: "#FFA500", thickness: 1 }],
        crosshair: { labelFontFamily: t, labelFontSize: B, labelFontColor: "#EEEEEE", labelFontWeight: "normal", labelBackgroundColor: "black", color: "black", thickness: 1, lineDashType: "dot" },
        scaleBreaks: { type: "zigzag", spacing: "2%", lineColor: "#BBBBBB", lineThickness: 1, lineDashType: "solid" }
      }], legend: { fontFamily: t, fontSize: 14, fontColor: "#3A3A3A", fontWeight: "bold", verticalAlign: "bottom", horizontalAlign: "center" }, toolTip: { fontFamily: t, fontSize: 14, fontStyle: "normal", cornerRadius: 0, borderThickness: 1 }, toolbar: { itemBackgroundColor: "white", itemBackgroundColorOnHover: "#2196f3", buttonBorderColor: "#2196f3", buttonBorderThickness: 1, fontColor: "black", fontColorOnHover: "white" } };
      V = ca = "#F5F5F5";
      S = "#FFFFFF";
      ha = "#40BAF1";
      W = "#F5F5F5";
      ea = 20;
      B = 14;
      Fa = { colorSet: "colorSet1", backgroundColor: "#2A2A2A", title: { fontFamily: Fa, fontSize: 32, fontColor: ca, fontWeight: "normal", verticalAlign: "top", margin: 5 }, subtitles: [{ fontFamily: Fa, fontSize: B, fontColor: ca, fontWeight: "normal", verticalAlign: "top", margin: 5 }], toolbar: { itemBackgroundColor: "#666666", itemBackgroundColorOnHover: "#FF7372", buttonBorderColor: "#FF7372", buttonBorderThickness: 1, fontColor: "#F5F5F5", fontColorOnHover: "#F5F5F5" }, data: [{
        indexLabelFontFamily: t,
        indexLabelFontSize: B,
        indexLabelFontColor: V,
        indexLabelFontWeight: "normal",
        indexLabelLineThickness: 1
      }], axisX: [{ titleFontFamily: t, titleFontSize: ea, titleFontColor: V, titleFontWeight: "normal", labelFontFamily: t, labelFontSize: B, labelFontColor: V, labelFontWeight: "normal", lineThickness: 1, lineColor: S, tickThickness: 1, tickColor: S, gridThickness: 0, gridColor: S, stripLines: [{ labelFontFamily: t, labelFontSize: B, labelFontColor: "#FF7300", labelFontWeight: "normal", labelBackgroundColor: null, color: "#FF7300", thickness: 1 }], crosshair: {
        labelFontFamily: t,
        labelFontSize: B,
        labelFontColor: "#000000",
        labelFontWeight: "normal",
        labelBackgroundColor: W,
        color: ha,
        thickness: 1,
        lineDashType: "dash"
      }, scaleBreaks: { type: "zigzag", spacing: "2%", lineColor: "#777777", lineThickness: 1, lineDashType: "solid", color: "#111111" } }], axisX2: [{ titleFontFamily: t, titleFontSize: ea, titleFontColor: V, titleFontWeight: "normal", labelFontFamily: t, labelFontSize: B, labelFontColor: V, labelFontWeight: "normal", lineThickness: 1, lineColor: S, tickThickness: 1, tickColor: S, gridThickness: 0, gridColor: S, stripLines: [{
        labelFontFamily: t,
        labelFontSize: B,
        labelFontColor: "#FF7300",
        labelFontWeight: "normal",
        labelBackgroundColor: null,
        color: "#FF7300",
        thickness: 1
      }], crosshair: { labelFontFamily: t, labelFontSize: B, labelFontColor: "#000000", labelFontWeight: "normal", labelBackgroundColor: W, color: ha, thickness: 1, lineDashType: "dash" }, scaleBreaks: { type: "zigzag", spacing: "2%", lineColor: "#777777", lineThickness: 1, lineDashType: "solid", color: "#111111" } }], axisY: [{
        titleFontFamily: t,
        titleFontSize: ea,
        titleFontColor: V,
        titleFontWeight: "normal",
        labelFontFamily: t,
        labelFontSize: B,
        labelFontColor: V,
        labelFontWeight: "normal",
        lineThickness: 1,
        lineColor: S,
        tickThickness: 1,
        tickColor: S,
        gridThickness: 1,
        gridColor: S,
        stripLines: [{ labelFontFamily: t, labelFontSize: B, labelFontColor: "#FF7300", labelFontWeight: "normal", labelBackgroundColor: null, color: "#FF7300", thickness: 1 }],
        crosshair: { labelFontFamily: t, labelFontSize: B, labelFontColor: "#000000", labelFontWeight: "normal", labelBackgroundColor: W, color: ha, thickness: 1, lineDashType: "dash" },
        scaleBreaks: {
          type: "zigzag",
          spacing: "2%",
          lineColor: "#777777",
          lineThickness: 1,
          lineDashType: "solid",
          color: "#111111"
        }
      }], axisY2: [{ titleFontFamily: t, titleFontSize: ea, titleFontColor: V, titleFontWeight: "normal", labelFontFamily: t, labelFontSize: B, labelFontColor: V, labelFontWeight: "normal", lineThickness: 1, lineColor: S, tickThickness: 1, tickColor: S, gridThickness: 1, gridColor: S, stripLines: [{ labelFontFamily: t, labelFontSize: B, labelFontColor: "#FF7300", labelFontWeight: "normal", labelBackgroundColor: null, color: "#FF7300", thickness: 1 }], crosshair: {
        labelFontFamily: t,
        labelFontSize: B,
        labelFontColor: "#000000",
        labelFontWeight: "normal",
        labelBackgroundColor: W,
        color: ha,
        thickness: 1,
        lineDashType: "dash"
      }, scaleBreaks: { type: "zigzag", spacing: "2%", lineColor: "#777777", lineThickness: 1, lineDashType: "solid", color: "#111111" } }], legend: { fontFamily: t, fontSize: 14, fontColor: ca, fontWeight: "bold", verticalAlign: "bottom", horizontalAlign: "center" }, toolTip: { fontFamily: t, fontSize: 14, fontStyle: "normal", cornerRadius: 0, borderThickness: 1, fontColor: V, backgroundColor: "rgba(0, 0, 0, .7)" } };
      S = "#FFFFFF";
      V = ca = "#FAFAFA";
      ha = "#40BAF1";
      W = "#F5F5F5";
      var ea = 20, B = 14, Oa = { light1: Xa, light2: cb, dark1: Fa, dark2: { colorSet: "colorSet2", backgroundColor: "#32373A", title: { fontFamily: t, fontSize: 32, fontColor: ca, fontWeight: "normal", verticalAlign: "top", margin: 5 }, subtitles: [{ fontFamily: t, fontSize: B, fontColor: ca, fontWeight: "normal", verticalAlign: "top", margin: 5 }], toolbar: { itemBackgroundColor: "#666666", itemBackgroundColorOnHover: "#FF7372", buttonBorderColor: "#FF7372", buttonBorderThickness: 1, fontColor: "#F5F5F5", fontColorOnHover: "#F5F5F5" }, data: [{
        indexLabelFontFamily: t,
        indexLabelFontSize: B,
        indexLabelFontColor: V,
        indexLabelFontWeight: "normal",
        indexLabelLineThickness: 1
      }], axisX: [{ titleFontFamily: t, titleFontSize: ea, titleFontColor: V, titleFontWeight: "normal", labelFontFamily: t, labelFontSize: B, labelFontColor: V, labelFontWeight: "normal", lineThickness: 1, lineColor: S, tickThickness: 1, tickColor: S, gridThickness: 0, gridColor: S, stripLines: [{ labelFontFamily: t, labelFontSize: B, labelFontColor: "#FF7300", labelFontWeight: "normal", labelBackgroundColor: null, color: "#FF7300", thickness: 1 }], crosshair: {
        labelFontFamily: t,
        labelFontSize: B,
        labelFontColor: "#000000",
        labelFontWeight: "normal",
        labelBackgroundColor: W,
        color: ha,
        thickness: 1,
        lineDashType: "dash"
      }, scaleBreaks: { type: "zigzag", spacing: "2%", lineColor: "#777777", lineThickness: 1, lineDashType: "solid", color: "#111111" } }], axisX2: [{ titleFontFamily: t, titleFontSize: ea, titleFontColor: V, titleFontWeight: "normal", labelFontFamily: t, labelFontSize: B, labelFontColor: V, labelFontWeight: "normal", lineThickness: 1, lineColor: S, tickThickness: 1, tickColor: S, gridThickness: 0, gridColor: S, stripLines: [{
        labelFontFamily: t,
        labelFontSize: B,
        labelFontColor: "#FF7300",
        labelFontWeight: "normal",
        labelBackgroundColor: null,
        color: "#FF7300",
        thickness: 1
      }], crosshair: { labelFontFamily: t, labelFontSize: B, labelFontColor: "#000000", labelFontWeight: "normal", labelBackgroundColor: W, color: ha, thickness: 1, lineDashType: "dash" }, scaleBreaks: { type: "zigzag", spacing: "2%", lineColor: "#777777", lineThickness: 1, lineDashType: "solid", color: "#111111" } }], axisY: [{
        titleFontFamily: t,
        titleFontSize: ea,
        titleFontColor: V,
        titleFontWeight: "normal",
        labelFontFamily: t,
        labelFontSize: B,
        labelFontColor: V,
        labelFontWeight: "normal",
        lineThickness: 0,
        lineColor: S,
        tickThickness: 1,
        tickColor: S,
        gridThickness: 1,
        gridColor: S,
        stripLines: [{ labelFontFamily: t, labelFontSize: B, labelFontColor: "#FF7300", labelFontWeight: "normal", labelBackgroundColor: null, color: "#FF7300", thickness: 1 }],
        crosshair: { labelFontFamily: t, labelFontSize: B, labelFontColor: "#000000", labelFontWeight: "normal", labelBackgroundColor: W, color: ha, thickness: 1, lineDashType: "dash" },
        scaleBreaks: {
          type: "zigzag",
          spacing: "2%",
          lineColor: "#777777",
          lineThickness: 1,
          lineDashType: "solid",
          color: "#111111"
        }
      }], axisY2: [{ titleFontFamily: t, titleFontSize: ea, titleFontColor: V, titleFontWeight: "normal", labelFontFamily: t, labelFontSize: B, labelFontColor: V, labelFontWeight: "normal", lineThickness: 0, lineColor: S, tickThickness: 1, tickColor: S, gridThickness: 1, gridColor: S, stripLines: [{ labelFontFamily: t, labelFontSize: B, labelFontColor: "#FF7300", labelFontWeight: "normal", labelBackgroundColor: null, color: "#FF7300", thickness: 1 }], crosshair: {
        labelFontFamily: t,
        labelFontSize: B,
        labelFontColor: "#000000",
        labelFontWeight: "normal",
        labelBackgroundColor: W,
        color: ha,
        thickness: 1,
        lineDashType: "dash"
      }, scaleBreaks: { type: "zigzag", spacing: "2%", lineColor: "#777777", lineThickness: 1, lineDashType: "solid", color: "#111111" } }], legend: { fontFamily: t, fontSize: 14, fontColor: ca, fontWeight: "bold", verticalAlign: "bottom", horizontalAlign: "center" }, toolTip: { fontFamily: t, fontSize: 14, fontStyle: "normal", cornerRadius: 0, borderThickness: 1, fontColor: V, backgroundColor: "rgba(0, 0, 0, .7)" } }, theme1: Xa, theme2: cb, theme3: Xa }, M = {
        numberDuration: 1,
        yearDuration: 314496e5,
        monthDuration: 2592e6,
        weekDuration: 6048e5,
        dayDuration: 864e5,
        hourDuration: 36e5,
        minuteDuration: 6e4,
        secondDuration: 1e3,
        millisecondDuration: 1,
        dayOfWeekFromInt: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" ")
      };
      (function() {
        va.fSDec = function(d) {
          for (var p = "", n2 = 0; n2 < d.length; n2++)
            p += String.fromCharCode(Math.ceil(d.length / 57 / 5) ^ d.charCodeAt(n2));
          return p;
        };
        delete qa[va.fSDec("Bi`su")][va.fSDec("bsdehuIsdg")];
        va.pro = { sCH: qa[va.fSDec("Bi`su")][va.fSDec("bsdehuIsdg")] };
      })();
      var hb = function() {
        var d = false;
        try {
          var p = Object.defineProperty && Object.defineProperty({}, "passive", { get: function() {
            d = true;
            return false;
          } });
          window.addEventListener && (window.addEventListener("test", null, p), window.removeEventListener("test", null, p));
        } catch (n2) {
          d = false;
        }
        return d;
      }(), $a = {}, xa = null, mb = function() {
        this.ctx.clearRect(0, 0, this.width, this.height);
        this.backgroundColor && (this.ctx.fillStyle = this.backgroundColor, this.ctx.fillRect(0, 0, this.width, this.height));
      }, ya = function(d) {
        d.width = 1;
        d.height = 1;
        d.getContext("2d") && d.getContext("2d").clearRect(0, 0, 1, 1);
      }, nb = function(d, p, n2) {
        p = Math.min(this.width, this.height);
        return Math.max("theme4" === this.theme ? 0 : 300 <= p ? 12 : 11, Math.round(p * (d / 400)));
      }, Ca = function() {
        var d = /D{1,4}|M{1,4}|Y{1,4}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|f{1,3}|t{1,2}|T{1,2}|K|z{1,3}|"[^"]*"|'[^']*'/g, p = "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "), n2 = "Sun Mon Tue Wed Thu Fri Sat".split(" "), v2 = "January February March April May June July August September October November December".split(" "), $ = "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "), t2 = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g, A = /[^-+\dA-Z]/g;
        return function(B2, G2, N) {
          var S2 = N ? N.days : p, U2 = N ? N.months : v2, H2 = N ? N.shortDays : n2, M2 = N ? N.shortMonths : $;
          N = "";
          var Q2 = false;
          B2 = B2 && B2.getTime ? B2 : B2 ? new Date(B2) : /* @__PURE__ */ new Date();
          if (isNaN(B2))
            throw SyntaxError("invalid date");
          "UTC:" === G2.slice(0, 4) && (G2 = G2.slice(4), Q2 = true);
          N = Q2 ? "getUTC" : "get";
          var Y2 = B2[N + "Date"](), L = B2[N + "Day"](), X = B2[N + "Month"](), a = B2[N + "FullYear"](), g = B2[N + "Hours"](), c = B2[N + "Minutes"](), b = B2[N + "Seconds"](), e = B2[N + "Milliseconds"](), h = Q2 ? 0 : B2.getTimezoneOffset();
          return N = G2.replace(d, function(m) {
            switch (m) {
              case "D":
                return Y2;
              case "DD":
                return da(Y2, 2);
              case "DDD":
                return H2[L];
              case "DDDD":
                return S2[L];
              case "M":
                return X + 1;
              case "MM":
                return da(X + 1, 2);
              case "MMM":
                return M2[X];
              case "MMMM":
                return U2[X];
              case "Y":
                return parseInt(String(a).slice(-2));
              case "YY":
                return da(String(a).slice(-2), 2);
              case "YYY":
                return da(
                  String(a).slice(-3),
                  3
                );
              case "YYYY":
                return da(a, 4);
              case "h":
                return g % 12 || 12;
              case "hh":
                return da(g % 12 || 12, 2);
              case "H":
                return g;
              case "HH":
                return da(g, 2);
              case "m":
                return c;
              case "mm":
                return da(c, 2);
              case "s":
                return b;
              case "ss":
                return da(b, 2);
              case "f":
                return da(String(e), 3).slice(0, 1);
              case "ff":
                return da(String(e), 3).slice(0, 2);
              case "fff":
                return da(String(e), 3).slice(0, 3);
              case "t":
                return 12 > g ? "a" : "p";
              case "tt":
                return 12 > g ? "am" : "pm";
              case "T":
                return 12 > g ? "A" : "P";
              case "TT":
                return 12 > g ? "AM" : "PM";
              case "K":
                return Q2 ? "UTC" : (String(B2).match(t2) || [""]).pop().replace(A, "");
              case "z":
                return (0 < h ? "-" : "+") + Math.floor(Math.abs(h) / 60);
              case "zz":
                return (0 < h ? "-" : "+") + da(Math.floor(Math.abs(h) / 60), 2);
              case "zzz":
                return (0 < h ? "-" : "+") + da(Math.floor(Math.abs(h) / 60), 2) + da(Math.abs(h) % 60, 2);
              default:
                return m.slice(1, m.length - 1);
            }
          });
        };
      }(), ob = function(d) {
        var p = 0 > d;
        if (1 > Math.abs(d)) {
          var n2 = parseInt(d.toString().split("e-")[1]);
          n2 && (d = (p ? -1 * d : d) * Math.pow(10, n2 - 1), d = "0." + Array(n2).join("0") + d.toString().substring(2), d = p ? "-" + d : d);
        } else
          n2 = parseInt(d.toString().split("+")[1]), 20 < n2 && (n2 -= 20, d /= Math.pow(10, n2), d = d.toString() + Array(n2 + 1).join("0"));
        return String(d);
      }, fa = function(d, p, n2) {
        if (null === d)
          return "";
        if (!isFinite(d))
          return d;
        d = Number(d);
        var v2 = 0 > d ? true : false;
        v2 && (d *= -1);
        var $ = n2 ? n2.decimalSeparator : ".", t2 = n2 ? n2.digitGroupSeparator : ",", A = "";
        p = String(p);
        var A = 1, B2 = n2 = "", G2 = -1, N = [], S2 = [], U2 = 0, Q2 = 0, H2 = 0, M2 = false, Y2 = 0, B2 = p.match(/"[^"]*"|'[^']*'|[eE][+-]*[0]+|[,]+[.]|\u2030|./g);
        p = null;
        for (var L = 0; B2 && L < B2.length; L++)
          if (p = B2[L], "." === p && 0 > G2)
            G2 = L;
          else {
            if ("%" === p)
              A *= 100;
            else if ("‰" === p) {
              A *= 1e3;
              continue;
            } else if ("," === p[0] && "." === p[p.length - 1]) {
              A /= Math.pow(1e3, p.length - 1);
              G2 = L + p.length - 1;
              continue;
            } else
              "E" !== p[0] && "e" !== p[0] || "0" !== p[p.length - 1] || (M2 = true);
            0 > G2 ? (N.push(p), "#" === p || "0" === p ? U2++ : "," === p && H2++) : (S2.push(p), "#" !== p && "0" !== p || Q2++);
          }
        M2 && (p = Math.floor(d), B2 = -Math.floor(Math.log(d) / Math.LN10 + 1), Y2 = 0 === d ? 0 : 0 === p ? -(U2 + B2) : ob(p).length - U2, A /= Math.pow(10, Y2));
        0 > G2 && (G2 = L);
        A = (d * A).toFixed(Q2);
        p = A.split(".");
        A = (p[0] + "").split("");
        d = (p[1] + "").split("");
        A && "0" === A[0] && A.shift();
        for (M2 = B2 = L = Q2 = G2 = 0; 0 < N.length; )
          if (p = N.pop(), "#" === p || "0" === p)
            if (G2++, G2 === U2) {
              var X = A, A = [];
              if ("0" === p)
                for (p = U2 - Q2 - (X ? X.length : 0); 0 < p; )
                  X.unshift("0"), p--;
              for (; 0 < X.length; )
                n2 = X.pop() + n2, M2++, 0 === M2 % B2 && (L === H2 && 0 < X.length) && (n2 = t2 + n2);
            } else
              0 < A.length ? (n2 = A.pop() + n2, Q2++, M2++) : "0" === p && (n2 = "0" + n2, Q2++, M2++), 0 === M2 % B2 && (L === H2 && 0 < A.length) && (n2 = t2 + n2);
          else
            "E" !== p[0] && "e" !== p[0] || "0" !== p[p.length - 1] || !/[eE][+-]*[0]+/.test(p) ? "," === p ? (L++, B2 = M2, M2 = 0, 0 < A.length && (n2 = t2 + n2)) : n2 = 1 < p.length && ('"' === p[0] && '"' === p[p.length - 1] || "'" === p[0] && "'" === p[p.length - 1]) ? p.slice(1, p.length - 1) + n2 : p + n2 : (p = 0 > Y2 ? p.replace(
              "+",
              ""
            ).replace("-", "") : p.replace("-", ""), n2 += p.replace(/[0]+/, function(a) {
              return da(Y2, a.length);
            }));
        t2 = "";
        for (N = false; 0 < S2.length; )
          p = S2.shift(), "#" === p || "0" === p ? 0 < d.length && 0 !== Number(d.join("")) ? (t2 += d.shift(), N = true) : "0" === p && (t2 += "0", N = true) : 1 < p.length && ('"' === p[0] && '"' === p[p.length - 1] || "'" === p[0] && "'" === p[p.length - 1]) ? t2 += p.slice(1, p.length - 1) : "E" !== p[0] && "e" !== p[0] || "0" !== p[p.length - 1] || !/[eE][+-]*[0]+/.test(p) ? t2 += p : (p = 0 > Y2 ? p.replace("+", "").replace("-", "") : p.replace("-", ""), t2 += p.replace(/[0]+/, function(a) {
            return da(
              Y2,
              a.length
            );
          }));
        n2 += (N ? $ : "") + t2;
        return v2 ? "-" + n2 : n2;
      }, Pa = function(d) {
        var n2 = 0, v2 = 0;
        d = d || window.event;
        d.offsetX || 0 === d.offsetX ? (n2 = d.offsetX, v2 = d.offsetY) : d.layerX || 0 == d.layerX ? (n2 = d.layerX, v2 = d.layerY) : (n2 = d.pageX - d.target.offsetLeft, v2 = d.pageY - d.target.offsetTop);
        return { x: n2, y: v2 };
      }, bb = true, Ta = window.devicePixelRatio || 1, Na = 1, la = bb ? Ta / Na : 1, ba = function(d, n2, v2, P, t2, B2, A, G2, M2, N, U2, S2, Q2) {
        "undefined" === typeof Q2 && (Q2 = 1);
        A = A || 0;
        G2 = G2 || "black";
        var H2 = 15 < P - n2 && 15 < t2 - v2 ? 8 : 0.35 * Math.min(P - n2, t2 - v2);
        d.beginPath();
        d.moveTo(n2, v2);
        d.save();
        d.fillStyle = B2;
        d.globalAlpha = Q2;
        d.fillRect(n2, v2, P - n2, t2 - v2);
        d.globalAlpha = 1;
        0 < A && (Q2 = 0 === A % 2 ? 0 : 0.5, d.beginPath(), d.lineWidth = A, d.strokeStyle = G2, d.moveTo(n2, v2), d.rect(n2 - Q2, v2 - Q2, P - n2 + 2 * Q2, t2 - v2 + 2 * Q2), d.stroke());
        d.restore();
        true === M2 && (d.save(), d.beginPath(), d.moveTo(n2, v2), d.lineTo(n2 + H2, v2 + H2), d.lineTo(P - H2, v2 + H2), d.lineTo(P, v2), d.closePath(), A = d.createLinearGradient((P + n2) / 2, v2 + H2, (P + n2) / 2, v2), A.addColorStop(0, B2), A.addColorStop(1, "rgba(255, 255, 255, .4)"), d.fillStyle = A, d.fill(), d.restore());
        true === N && (d.save(), d.beginPath(), d.moveTo(n2, t2), d.lineTo(n2 + H2, t2 - H2), d.lineTo(P - H2, t2 - H2), d.lineTo(P, t2), d.closePath(), A = d.createLinearGradient((P + n2) / 2, t2 - H2, (P + n2) / 2, t2), A.addColorStop(0, B2), A.addColorStop(1, "rgba(255, 255, 255, .4)"), d.fillStyle = A, d.fill(), d.restore());
        true === U2 && (d.save(), d.beginPath(), d.moveTo(n2, v2), d.lineTo(n2 + H2, v2 + H2), d.lineTo(n2 + H2, t2 - H2), d.lineTo(n2, t2), d.closePath(), A = d.createLinearGradient(n2 + H2, (t2 + v2) / 2, n2, (t2 + v2) / 2), A.addColorStop(0, B2), A.addColorStop(1, "rgba(255, 255, 255, 0.1)"), d.fillStyle = A, d.fill(), d.restore());
        true === S2 && (d.save(), d.beginPath(), d.moveTo(
          P,
          v2
        ), d.lineTo(P - H2, v2 + H2), d.lineTo(P - H2, t2 - H2), d.lineTo(P, t2), A = d.createLinearGradient(P - H2, (t2 + v2) / 2, P, (t2 + v2) / 2), A.addColorStop(0, B2), A.addColorStop(1, "rgba(255, 255, 255, 0.1)"), d.fillStyle = A, A.addColorStop(0, B2), A.addColorStop(1, "rgba(255, 255, 255, 0.1)"), d.fillStyle = A, d.fill(), d.closePath(), d.restore());
      }, ia = function(d) {
        for (var n2 = "", v2 = 0; v2 < d.length; v2++)
          n2 += String.fromCharCode(Math.ceil(d.length / 57 / 5) ^ d.charCodeAt(v2));
        return n2;
      }, kb = window && (window[ia("mnb`uhno")] && window[ia("mnb`uhno")].href && window[ia("mnb`uhno")].href.indexOf && (-1 !== window[ia("mnb`uhno")].href.indexOf(ia("b`ow`rkr/bnl")) || -1 !== window[ia("mnb`uhno")].href.indexOf(ia("gdonqhy/bnl")) || -1 !== window[ia("mnb`uhno")].href.indexOf(ia("gheemd")))) && -1 === window[ia("mnb`uhno")].href.indexOf(ia("gheemd")), lb = {
        reset: { image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAeCAYAAABJ/8wUAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAPjSURBVFhHxVdJaFNRFP1J/jwkP5MxsbaC1WJEglSxOFAXIsFpVRE3ggi1K90obioRRBA33XXnQnciirhQcMCdorgQxBkXWlREkFKsWkv5npvckp/XnzRpKh64kLw733fffe9L/wrL0+mVUdO8uTSZ3MBL/we2qg4rkuSpodCELstXE46ziVkLQ6FQcGOmeSSq6wd4aV50d3drWjj8kQKZJTUc9kxFGenv79dZrDksTSTWWJp2QYtEPiErysyzdX0LsxsCQR8keX8gs6RHIk8ysdgKFg2G53mhuOPsshTlBjKaFo1g7SqLNoShKLdFXT8huQ/paLSbxatYnc2mHMM4hr18Vi8TIvCmXF3vYrW6cF23gGTOk0M1wA4RKvOmq6vLZRVJipvmSWT6tZ6CSEYkco5V50VPT4+D7RwOqi6RiSZm0fJ+vggSqkeoypdsNmuyelNwbXsbgvkWYMtzDWNvWaijoyOBqE+hVK8abcssUeXQ/YfKyi0gFYv1Ipgfoj34fYGTJLOYJA0ODirok32GLN8XhUWCwSes1hIwBg6LydJ/tEeRRapAdUp+wSAiZchtZZWWgAZ+JNpD8peYXQVK9UwUxNpzOK8pq97kURZhYTCKBwPD7h2zK+js7Myi7D8Fod+0TkMI8+EMAngLGc/WtBFWawkFHFnoj/t9KLgGmF0B3QfkxC+EarxkdhnFYlFLY06USqUwL7UMjICHfh/wOc2sCqhpxGbCkLvL7EUDbF73+6DkmVWB6zi7xUDQSLeYvWjAILvm9zEnkJhlbRcDQZcv6Kg2AipyT/Axw6wKlqVSqxDdjF8Izfod13qURdrG/nxehY+xGh+h0CSzKygGvSNQIcc097BI24jb9hax6kj2E7OrMFX1il+ICEf2NrPbhiXLl+fYl+U7zK4iYdsDcyLGf+ofFlkwcN+s10KhmpuYhhtm0hCLVIFL0MDsqNlDIqy9x2CLs1jL6OvrI7vPRbtohXG6eFmsFnHDGAp6n9AgyuVySRZrGvROxRgIfLXhzjrNYnNBUxNX/dMgRWT1mt4XLDovaApD53E9W3ilNX5M55LJHpRtIsgAvciR4WWcgK2Dvb1YqgXevmF8z2zEBTcKG39EfSKsT9EbhVUaI2FZO+oZIqImxol6j66/hcAu4sSN4vc1ZPoKeoE6RGhYL2YYA+ymOSSi0Z0wWntbtkGUWCvfSDXIxONraZ/FY90KUfNTpfC5spnNLgxoYNnR9RO4F8ofXEHOgogCQE99w+fF2Xw+b7O59rEOsyRqGEfpVoaDMQQ1CZrG46bcM6AZ0C/wPqNfHliqejyTySxh9TqQpL+xmbIlkB9SlAAAAABJRU5ErkJggg==" },
        pan: { image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAICSURBVEhLxZbPahNRGMUn/5MpuAiBEAIufQGfzr5E40YptBXajYzudCEuGqS+gGlrFwquDGRTutBdYfydzJ3LzeQmJGZue+Dw/Z17Mnfmu5Pof9Hr9Z61Wq0bWZMKj263O6xWq99wU9lOpzPMKgEhEcRucNOcioOK+0RzBhNvt9tPV4nmVF19+OWhVqt9xXgFXZq+8lCv119UKpUJ7iX2FmvFTKz8RH34YdBsNk8wVtjE4fGYwm8wrrDi3WBG5oKXZGRSS9hGuNFojLTe2lFz5xThWZIktayyiE2FdT3rzXBXz7krKiL8c17wAKFDjCus2AvW+YGZ9y2JF0VFRuMPfI//rsCE/C+s26s4gQu9ul7r4NteKx7H8XOC724xNNGbaNu++IrBqbOV7Tj3FgMRvc/YKOr3+3sE47wgEt/Bl/gaK5cHbNU11vYSXylfpK7XOvjuumPp4Wcoipu30Qsez2uMXYz4lfI+mOmwothY+SLiXJy7mKVpWs3Si0CoOMfeI9Od43Wic+jO+ZVv+crsm9QSNhUW9LXSeoPBYLXopthGuFQgdIxxhY+UDwlt1x5CZ1hX+NTUdt/OIvjKaDSmuOJfaIVNPKX+W18j/PLA2/kR44p5Sd8HbHngT/yTfNRWUXX14ZcL3wmX0+TLf8YO7CGT8yFE5zB3/gney25/OETRP9CtPDFe5jShAAAAAElFTkSuQmCC" },
        zoom: { image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAJcEhZcwAADsMAAA7DAcdvqGQAAALWSURBVEhLvZZLaBNRFIabyftBIgEfqCCBoCC6MYqiXYiIj4U76U4X7sUHbhQhUBfixhZEUBDB16YuFERaUaQLK7ooCOJj4UKtYEFU0EptShO/A9Ph3js3k8lo/eHnP7n3nP/M3LlzMz1hkUwmNziOcyKRSFyFt+LxeD/c2Wq1Ym7Kv0M2m11Os1OxWGycn1OwZXCGuXfwIhezkd9/jRgNT2L4ldhs1pbkX5OLJe4euVxuGQaPCa3mnUjtJx7BDuKusJTCV6jVVGHTMuYRjxma7yIOhTgFY6jNaAKew2xPKpVay9ganmkvj+M448/MfJdT5K5Gg4HJacRngPFgqVRaRNwW1B4i7yehWfsEDdz1K+A01AoxPIqGAiuwGfkOTY8+1A6u7AyiFTB2Hu0KPIrdiOnzHLWDybeImvy+Wq2mZa5bUHsD0Zpz+KxHdWQymV6kAb1ElqeORgJLvgnRdj1+R1AfzkIvSUjxVjQSarVakrueIPT8+H1F5jSUy+WXiJrUYBVWyVxU4PEU8TzhfaijUqnMIWrjaY492eWRwdKOIqrnIxnXwLLeRLwk2GQzrEMjg0avEbXxkIxr4OoOImpj2QwyFgms1koa/SZUG8s+0iGnEhNfCNXEhzIXBVz0McTzEvJ+70P9oNFtxEzei3aFYrFYxmuSUPWSv9Yi9IMm2xE1We56Mp1OV4nDwqFmBDV9gk9AEh4gZtFHNt8W4kAUCoXF5MorY9Z/kDni9nDv7hc0i2fhgLvTtX8a99PoMPPagTFPxofRzmDJ9yM+AyEmTfgGysYbQcfhDzPPJDmX0c7gDg4gs9BqFIWhm/Nct5H8gtBq1I7UfIbtvmIuoaGQcp+fdpbbSM43eEH5wrwLbXmhm/fU63VHXjcuok7hEByFY/AeHGC8L5/PL3HT5xGH1uYwfPOICGo+CBcU0vwO1BqzUqILDl/z/9VYIMfpddiAc47jDP8BsUpb13wOLRwAAAAASUVORK5CYII=" },
        menu: { image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAeCAYAAABE4bxTAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAJcEhZcwAADsMAAA7DAcdvqGQAAADoSURBVFhH7dc9CsJAFATgRxIIBCwCqZKATX5sbawsY2MvWOtF9AB6AU8gguAJbD2AnZ2VXQT/Ko2TYGCL2OYtYQc+BuYA+1hCtnCVwMm27SGaXpDJIAiCvCkVR05hGOZNN3HkFMdx3nQRR06+76/R1IcFLJlNQEWlmWlBTwJtKLKHynehZqnjOGM0PYWRVXk61C37p7xlZ3Hk5HneCk1dmMH811xGoKLSzDiQwIBZB4ocoPJdqNkDt2yKlueWRVGUtzy3rPwo3sWRU3nLjuLI6OO67oZM00wMw3hrmpZx0XU9syxrR0T0BeMpb9dneSR2AAAAAElFTkSuQmCC" }
      };
      Y.prototype.setOptions = function(d, n2) {
        if (qa[this._defaultsKey]) {
          var v2 = qa[this._defaultsKey], t2;
          for (t2 in v2)
            "publicProperties" !== t2 && v2.hasOwnProperty(t2) && (this[t2] = d && t2 in d ? d[t2] : n2 && t2 in n2 ? n2[t2] : v2[t2]);
        } else
          Ha && window.console && console.log("defaults not set");
      };
      Y.prototype.get = function(d) {
        var n2 = qa[this._defaultsKey];
        if ("options" === d)
          return this.options && this.options._isPlaceholder ? null : this.options;
        if (n2.hasOwnProperty(d) || n2.publicProperties && n2.publicProperties.hasOwnProperty(d))
          return this[d];
        window.console && window.console.log('Property "' + d + `" doesn't exist. Please check for typo.`);
      };
      Y.prototype.set = function(d, n2, v2) {
        v2 = "undefined" === typeof v2 ? true : v2;
        var t2 = qa[this._defaultsKey];
        if ("options" === d)
          this.createUserOptions(n2);
        else if (t2.hasOwnProperty(d) || t2.publicProperties && t2.publicProperties.hasOwnProperty(d) && "readWrite" === t2.publicProperties[d])
          this.options._isPlaceholder && this.createUserOptions(), this.options[d] = n2;
        else {
          window.console && (t2.publicProperties && t2.publicProperties.hasOwnProperty(d) && "readOnly" === t2.publicProperties[d] ? window.console.log('Property "' + d + '" is read-only.') : window.console.log('Property "' + d + `" doesn't exist. Please check for typo.`));
          return;
        }
        v2 && (this.stockChart || this.chart || this).render();
      };
      Y.prototype.addTo = function(d, n2, v2, t2) {
        t2 = "undefined" === typeof t2 ? true : t2;
        var B2 = qa[this._defaultsKey];
        B2.hasOwnProperty(d) || B2.publicProperties && B2.publicProperties.hasOwnProperty(d) && "readWrite" === B2.publicProperties[d] ? (this.options._isPlaceholder && this.createUserOptions(), "undefined" === typeof this.options[d] && (this.options[d] = []), d = this.options[d], v2 = "undefined" === typeof v2 || null === v2 ? d.length : v2, d.splice(v2, 0, n2), t2 && (this.stockChart || this.chart || this).render()) : window.console && (B2.publicProperties && B2.publicProperties.hasOwnProperty(d) && "readOnly" === B2.publicProperties[d] ? window.console.log('Property "' + d + '" is read-only.') : window.console.log('Property "' + d + `" doesn't exist. Please check for typo.`));
      };
      Y.prototype.createUserOptions = function(d) {
        if ("undefined" !== typeof d || this.options._isPlaceholder)
          if (this.parent && this.parent.options._isPlaceholder && this.parent.createUserOptions(), this.isOptionsInArray) {
            this.parent.options[this.optionsName] || (this.parent.options[this.optionsName] = []);
            var n2 = this.parent.options[this.optionsName], v2 = n2.length;
            this.options._isPlaceholder || (Da(n2), v2 = n2.indexOf(this.options));
            this.options = "undefined" === typeof d ? {} : d;
            n2[v2] = this.options;
          } else
            this.options = "undefined" === typeof d ? {} : d, this.parent && (d = this.parent.options, this.optionsName ? n2 = this.optionsName : (n2 = this._defaultsKey) && 0 !== n2.length ? (v2 = n2.charAt(0).toLowerCase(), 1 < n2.length && (v2 = v2.concat(n2.slice(1))), n2 = v2) : n2 = void 0, d[n2] = this.options);
      };
      Y.prototype.remove = function(d) {
        d = "undefined" === typeof d ? true : d;
        if (this.isOptionsInArray) {
          var n2 = this.parent.options[this.optionsName];
          Da(n2);
          var v2 = n2.indexOf(this.options);
          0 <= v2 && n2.splice(v2, 1);
        } else
          delete this.parent.options[this.optionsName];
        d && (this.stockChart || this.chart || this).render();
      };
      Y.prototype.updateOption = function(d) {
        !qa[this._defaultsKey] && (Ha && window.console) && console.log("defaults not set");
        var p = qa[this._defaultsKey], v2 = {}, t2 = this[d], B2 = this._themeOptionsKey, G2 = this._index;
        this.theme && n(this.parent) && n(B2) && n(G2) ? v2 = n(this.predefinedThemes[this.theme]) ? this.predefinedThemes.light1 : this.predefinedThemes[this.theme] : this.parent && this.parent.themeOptions && (this.options.theme && Oa[this.options.theme] ? v2 = Oa[this.options.theme] : this.parent.themeOptions[B2] && (null === G2 ? v2 = this.parent.themeOptions[B2] : 0 < this.parent.themeOptions[B2].length && (v2 = Math.min(this.parent.themeOptions[B2].length - 1, G2), v2 = this.parent.themeOptions[B2][v2])));
        this.themeOptions = v2;
        d in p && (t2 = d in this.options ? this.options[d] : v2 && d in v2 ? v2[d] : p[d]);
        if (t2 === this[d])
          return false;
        this[d] = t2;
        return true;
      };
      Y.prototype.trackChanges = function(d) {
        if (!this.sessionVariables)
          throw "Session Variable Store not set";
        this.sessionVariables[d] = this.options[d];
      };
      Y.prototype.isBeingTracked = function(d) {
        this.options._oldOptions || (this.options._oldOptions = {});
        return this.options._oldOptions[d] ? true : false;
      };
      Y.prototype.hasOptionChanged = function(d) {
        if (!this.sessionVariables)
          throw "Session Variable Store not set";
        return this.sessionVariables[d] !== this.options[d];
      };
      Y.prototype.addEventListener = function(d, n2, v2) {
        d && n2 && (this._eventListeners[d] = this._eventListeners[d] || [], this._eventListeners[d].push({ context: v2 || this, eventHandler: n2 }));
      };
      Y.prototype.removeEventListener = function(d, n2) {
        if (d && n2 && this._eventListeners[d]) {
          for (var v2 = this._eventListeners[d], t2 = 0; t2 < v2.length; t2++)
            if (v2[t2].eventHandler === n2) {
              v2[t2].splice(t2, 1);
              break;
            }
        }
      };
      Y.prototype.removeAllEventListeners = function() {
        this._eventListeners = [];
      };
      Y.prototype.dispatchEvent = function(d, n2, v2) {
        if (d && this._eventListeners[d]) {
          n2 = n2 || {};
          for (var t2 = this._eventListeners[d], B2 = 0; B2 < t2.length; B2++)
            t2[B2].eventHandler.call(t2[B2].context, n2);
        }
        "function" === typeof this[d] && this[d].call(v2 || this.chart, n2);
      };
      Ea.prototype.registerSpace = function(d, n2) {
        "top" === d ? this._topOccupied += n2.height : "bottom" === d ? this._bottomOccupied += n2.height : "left" === d ? this._leftOccupied += n2.width : "right" === d && (this._rightOccupied += n2.width);
      };
      Ea.prototype.unRegisterSpace = function(d, n2) {
        "top" === d ? this._topOccupied -= n2.height : "bottom" === d ? this._bottomOccupied -= n2.height : "left" === d ? this._leftOccupied -= n2.width : "right" === d && (this._rightOccupied -= n2.width);
      };
      Ea.prototype.getFreeSpace = function() {
        return { x1: this._x1 + this._leftOccupied, y1: this._y1 + this._topOccupied, x2: this._x2 - this._rightOccupied, y2: this._y2 - this._bottomOccupied, width: this._x2 - this._x1 - this._rightOccupied - this._leftOccupied, height: this._y2 - this._y1 - this._bottomOccupied - this._topOccupied };
      };
      Ea.prototype.reset = function() {
        this._rightOccupied = this._leftOccupied = this._bottomOccupied = this._topOccupied = this._padding;
      };
      pa(
        ja,
        Y
      );
      ja.prototype._initialize = function() {
        n(this.padding) || "object" !== typeof this.padding ? this.topPadding = this.rightPadding = this.bottomPadding = this.leftPadding = Number(this.padding) | 0 : (this.topPadding = n(this.padding.top) ? 0 : Number(this.padding.top) | 0, this.rightPadding = n(this.padding.right) ? 0 : Number(this.padding.right) | 0, this.bottomPadding = n(this.padding.bottom) ? 0 : Number(this.padding.bottom) | 0, this.leftPadding = n(this.padding.left) ? 0 : Number(this.padding.left) | 0);
      };
      ja.prototype.render = function(d) {
        if (0 !== this.fontSize) {
          d && this.ctx.save();
          var n2 = this.ctx.font;
          this.ctx.textBaseline = this.textBaseline;
          var v2 = 0;
          this._isDirty && this.measureText(this.ctx);
          this.ctx.translate(this.x, this.y + v2);
          "middle" === this.textBaseline && (v2 = -this._lineHeight / 2);
          this.ctx.font = this._getFontString();
          this.ctx.rotate(Math.PI / 180 * this.angle);
          var t2 = 0, B2 = this.topPadding, G2 = null;
          this.ctx.roundRect || za(this.ctx);
          (0 < this.borderThickness && this.borderColor || this.backgroundColor) && this.ctx.roundRect(
            0,
            v2,
            this.width,
            this.height,
            this.cornerRadius,
            this.borderThickness,
            this.backgroundColor,
            this.borderColor
          );
          this.ctx.fillStyle = this.fontColor;
          for (v2 = 0; v2 < this._wrappedText.lines.length; v2++)
            G2 = this._wrappedText.lines[v2], "right" === this.textAlign ? t2 = this.width - G2.width - this.rightPadding : "left" === this.textAlign ? t2 = this.leftPadding : "center" === this.textAlign && (t2 = (this.width - (this.leftPadding + this.rightPadding)) / 2 - G2.width / 2 + this.leftPadding), this.ctx.fillText(G2.text, t2, B2), B2 += G2.height;
          this.ctx.font = n2;
          d && this.ctx.restore();
        }
      };
      ja.prototype.setText = function(d) {
        this.text = d;
        this._isDirty = true;
        this._wrappedText = null;
      };
      ja.prototype.measureText = function() {
        this._lineHeight = Za(this.fontFamily, this.fontSize, this.fontWeight);
        if (null === this.maxWidth)
          throw "Please set maxWidth and height for TextBlock";
        this._wrapText(this.ctx);
        this._isDirty = false;
        return { width: this.width, height: this.height };
      };
      ja.prototype._getLineWithWidth = function(d, n2, v2) {
        d = String(d);
        if (!d)
          return { text: "", width: 0 };
        var t2 = v2 = 0, B2 = d.length - 1, G2 = Infinity;
        for (this.ctx.font = this._getFontString(); t2 <= B2; ) {
          var G2 = Math.floor((t2 + B2) / 2), A = d.substr(
            0,
            G2 + 1
          );
          v2 = this.ctx.measureText(A).width;
          if (v2 < n2)
            t2 = G2 + 1;
          else if (v2 > n2)
            B2 = G2 - 1;
          else
            break;
        }
        v2 > n2 && 1 < A.length && (A = A.substr(0, A.length - 1), v2 = this.ctx.measureText(A).width);
        n2 = true;
        if (A.length === d.length || " " === d[A.length])
          n2 = false;
        n2 && (d = A.split(" "), 1 < d.length && d.pop(), A = d.join(" "), v2 = this.ctx.measureText(A).width);
        return { text: A, width: v2 };
      };
      ja.prototype._wrapText = function() {
        var d = new String(Ga(String(this.text))), n2 = [], v2 = this.ctx.font, t2 = 0, B2 = 0;
        this.ctx.font = this._getFontString();
        if (0 === this.frontSize)
          B2 = t2 = 0;
        else
          for (; 0 < d.length; ) {
            var G2 = this.maxHeight - (this.topPadding + this.bottomPadding), A = this._getLineWithWidth(d, this.maxWidth - (this.leftPadding + this.rightPadding), false);
            A.height = this._lineHeight;
            n2.push(A);
            var H2 = B2, B2 = Math.max(B2, A.width), t2 = t2 + A.height, d = Ga(d.slice(A.text.length, d.length));
            G2 && t2 > G2 && (A = n2.pop(), t2 -= A.height, B2 = H2);
          }
        this._wrappedText = { lines: n2, width: B2, height: t2 };
        this.width = B2 + (this.leftPadding + this.rightPadding);
        this.height = t2 + (this.topPadding + this.bottomPadding);
        this.ctx.font = v2;
      };
      ja.prototype._getFontString = function() {
        var d;
        d = this.fontStyle ? this.fontStyle + " " : "";
        d += this.fontWeight ? this.fontWeight + " " : "";
        d += this.fontSize ? this.fontSize + "px " : "";
        var n2 = this.fontFamily ? this.fontFamily + "" : "";
        !v && n2 && (n2 = n2.split(",")[0], "'" !== n2[0] && '"' !== n2[0] && (n2 = "'" + n2 + "'"));
        return d += n2;
      };
      pa(Va, Y);
      pa(Aa, Y);
      Aa.prototype.setLayout = function() {
        if (this.text) {
          var d = this.dockInsidePlotArea ? this.chart.plotArea : this.chart, v2 = d.layoutManager.getFreeSpace(), t2 = v2.x1, B2 = v2.y1, G2 = 0, H2 = 0, A = this.chart._menuButton && this.chart.exportEnabled && "top" === this.verticalAlign ? 40 : 0, Q2, M2;
          this.textAlign = n(this.options.textAlign) ? this.horizontalAlign : this.textAlign;
          "top" === this.verticalAlign || "bottom" === this.verticalAlign ? (null === this.maxWidth && (this.maxWidth = v2.width - 4 - A * ("center" === this.horizontalAlign ? 2 : 1)), H2 = 0.5 * v2.height - this.margin - 2, G2 = 0) : "center" === this.verticalAlign && ("left" === this.horizontalAlign || "right" === this.horizontalAlign ? (null === this.maxWidth && (this.maxWidth = v2.height - 4), H2 = 0.5 * v2.width - this.margin - 2) : "center" === this.horizontalAlign && (null === this.maxWidth && (this.maxWidth = v2.width - 4), H2 = 0.5 * v2.height - 4));
          var N;
          n(this.padding) || "number" !== typeof this.padding ? n(this.padding) || "object" !== typeof this.padding || (N = this.padding.top ? this.padding.top : this.padding.bottom ? this.padding.bottom : 0, N += this.padding.bottom ? this.padding.bottom : this.padding.top ? this.padding.top : 0) : N = 2 * this.padding;
          this.wrap || (H2 = Math.min(H2, 1.5 * this.fontSize + N));
          H2 = new ja(this.ctx, {
            fontSize: this.fontSize,
            fontFamily: this.fontFamily,
            fontColor: this.fontColor,
            fontStyle: this.fontStyle,
            fontWeight: this.fontWeight,
            textAlign: this.textAlign,
            verticalAlign: this.verticalAlign,
            borderColor: this.borderColor,
            borderThickness: this.borderThickness,
            backgroundColor: this.backgroundColor,
            maxWidth: this.maxWidth,
            maxHeight: H2,
            cornerRadius: this.cornerRadius,
            text: this.text,
            padding: this.padding,
            textBaseline: "middle"
          });
          N = H2.measureText();
          "top" === this.verticalAlign || "bottom" === this.verticalAlign ? ("top" === this.verticalAlign ? (B2 = v2.y1 + 2 + this.fontSize / 2 + 4, M2 = "top") : "bottom" === this.verticalAlign && (B2 = v2.y2 - 2 - N.height + this.fontSize / 2 + 4, M2 = "bottom"), "left" === this.horizontalAlign ? t2 = v2.x1 + 2 : "center" === this.horizontalAlign ? t2 = v2.x1 + v2.width / 2 - N.width / 2 : "right" === this.horizontalAlign && (t2 = v2.x2 - 2 - N.width - A), Q2 = this.horizontalAlign, this.width = N.width, this.height = N.height) : "center" === this.verticalAlign && ("left" === this.horizontalAlign ? (t2 = v2.x1 + 2 + (this.fontSize / 2 + 4), B2 = v2.y2 - 2 - (this.maxWidth / 2 - N.width / 2), G2 = -90, M2 = "left", this.width = N.height, this.height = N.width) : "right" === this.horizontalAlign ? (t2 = v2.x2 - 2 - (this.fontSize / 2 + 4), B2 = v2.y1 + 2 + (this.maxWidth / 2 - N.width / 2), G2 = 90, M2 = "right", this.width = N.height, this.height = N.width) : "center" === this.horizontalAlign && (B2 = d.y1 + (d.height / 2 - N.height / 2) + this.fontSize / 2 + 4, t2 = d.x1 + (d.width / 2 - N.width / 2), M2 = "center", this.width = N.width, this.height = N.height), Q2 = "center");
          H2.x = t2;
          H2.y = B2;
          H2.angle = G2;
          H2.horizontalAlign = Q2;
          this._textBlock = H2;
          d.layoutManager.registerSpace(M2, { width: this.width + ("left" === M2 || "right" === M2 ? this.margin + 2 : 0), height: this.height + ("top" === M2 || "bottom" === M2 ? this.margin + 2 : 0) });
          this.bounds = { x1: t2, y1: B2, x2: t2 + this.width, y2: B2 + this.height };
          this.ctx.textBaseline = "top";
        }
      };
      Aa.prototype.render = function() {
        this._textBlock && this._textBlock.render(true);
      };
      pa(Ia, Y);
      Ia.prototype.setLayout = Aa.prototype.setLayout;
      Ia.prototype.render = Aa.prototype.render;
      Wa.prototype.get = function(d, n2) {
        var v2 = null;
        0 < this.pool.length ? (v2 = this.pool.pop(), Ma(v2, d, n2)) : v2 = ua(d, n2);
        return v2;
      };
      Wa.prototype.release = function(d) {
        this.pool.push(d);
      };
      pa(Ja, Y);
      var Qa = { addTheme: function(d, n2) {
        Oa[d] = n2;
      }, addColorSet: function(d, n2) {
        Ba[d] = n2;
      }, addCultureInfo: function(d, n2) {
        Ka[d] = n2;
      }, formatNumber: function(d, n2, v2) {
        v2 = v2 || "en";
        if (Ka[v2])
          return fa(
            d,
            n2 || "#,##0.##",
            new Ja(v2)
          );
        throw "Unknown Culture Name";
      }, formatDate: function(d, n2, v2) {
        v2 = v2 || "en";
        if (Ka[v2])
          return Ca(d, n2 || "DD MMM YYYY", new Ja(v2));
        throw "Unknown Culture Name";
      } };
      "undefined" !== typeof module && "undefined" !== typeof module.exports ? module.exports = Qa : "function" === typeof define && define.amd ? define([], function() {
        return Qa;
      }) : (window.CanvasJS && window.console && window.console.log("CanvasJS namespace already exists. If you are loading both chart and stockchart scripts, just load stockchart alone as it includes all chart features."), window.CanvasJS = window.CanvasJS ? window.CanvasJS : Qa);
      t = Qa.Chart = function() {
        function d(a, g) {
          return a.x - g.x;
        }
        function p(a, g, c) {
          g = g || {};
          n(c) ? (this.predefinedThemes = Oa, this.optionsName = this.parent = this.index = null) : (this.parent = c.parent, this.index = c.index, this.predefinedThemes = c.predefinedThemes, this.optionsName = c.optionsName, this.stockChart = c.stockChart, this.panel = a, this.isOptionsInArray = c.isOptionsInArray);
          this.theme = n(g.theme) || n(this.predefinedThemes[g.theme]) ? "light1" : g.theme;
          p.base.constructor.call(
            this,
            "Chart",
            this.optionsName,
            g,
            this.index,
            this.parent
          );
          var b = this;
          this._containerId = a;
          this._objectsInitialized = false;
          this.overlaidCanvasCtx = this.ctx = null;
          this._indexLabels = [];
          this._panTimerId = 0;
          this._lastTouchEventType = "";
          this._lastTouchData = null;
          this.isAnimating = false;
          this.renderCount = 0;
          this.disableToolTip = this.animatedRender = false;
          this.canvasPool = new Wa();
          this.allDOMEventHandlers = [];
          this.panEnabled = false;
          this._defaultCursor = "default";
          this.plotArea = { canvas: null, ctx: null, x1: 0, y1: 0, x2: 0, y2: 0, width: 0, height: 0 };
          this._dataInRenderedOrder = [];
          (this.container = "string" === typeof this._containerId ? document.getElementById(this._containerId) : this._containerId) ? (this.container.innerHTML = "", g = a = 0, a = this.options.width ? this.width : 0 < this.container.clientWidth ? this.container.clientWidth : this.width, g = c && c.height ? c.height : this.options.height ? this.height : 0 < this.container.clientHeight ? this.container.clientHeight : this.height, this.width = a, this.height = g, this.x1 = this.y1 = 0, this.x2 = this.width, this.y2 = this.height, this.selectedColorSet = "undefined" !== typeof Ba[this.colorSet] ? Ba[this.colorSet] : Ba.colorSet1, this._canvasJSContainer = document.createElement("div"), this._canvasJSContainer.setAttribute("class", "canvasjs-chart-container"), this._canvasJSContainer.style.position = "relative", this._canvasJSContainer.style.textAlign = "left", this._canvasJSContainer.style.cursor = "auto", this._canvasJSContainer.style.direction = "ltr", v || (this._canvasJSContainer.style.height = "0px"), this.container.appendChild(this._canvasJSContainer), this.canvas = ua(a, g), this._preRenderCanvas = ua(a, g), this.canvas.style.position = "absolute", this.canvas.style.WebkitUserSelect = "none", this.canvas.style.MozUserSelect = "none", this.canvas.style.msUserSelect = "none", this.canvas.style.userSelect = "none", this.canvas.getContext && (this._canvasJSContainer.appendChild(this.canvas), this.ctx = this.canvas.getContext("2d"), this.ctx.textBaseline = "top", za(this.ctx), this._preRenderCtx = this._preRenderCanvas.getContext("2d"), this._preRenderCtx.textBaseline = "top", za(this._preRenderCtx), v ? this.plotArea.ctx = this.ctx : (this.plotArea.canvas = ua(a, g), this.plotArea.canvas.style.position = "absolute", this.plotArea.canvas.setAttribute("class", "plotAreaCanvas"), this._canvasJSContainer.appendChild(this.plotArea.canvas), this.plotArea.ctx = this.plotArea.canvas.getContext("2d")), this.overlaidCanvas = ua(a, g), this.overlaidCanvas.style.position = "absolute", this.overlaidCanvas.style.webkitTapHighlightColor = "transparent", this.overlaidCanvas.style.WebkitUserSelect = "none", this.overlaidCanvas.style.MozUserSelect = "none", this.overlaidCanvas.style.msUserSelect = "none", this.overlaidCanvas.style.userSelect = "none", this.overlaidCanvas.getContext && (this._canvasJSContainer.appendChild(this.overlaidCanvas), this.overlaidCanvasCtx = this.overlaidCanvas.getContext("2d"), this.overlaidCanvasCtx.textBaseline = "top", za(this.overlaidCanvasCtx)), this._eventManager = new ha2(this), this.windowResizeHandler = H(window, "resize", function() {
            b._updateSize() && b.render();
          }, this.allDOMEventHandlers), this._toolBar = document.createElement("div"), this._toolBar.setAttribute("class", "canvasjs-chart-toolbar"), Q(this._toolBar, {
            position: "absolute",
            right: "1px",
            top: "1px"
          }), this._canvasJSContainer.appendChild(this._toolBar), this.bounds = { x1: 0, y1: 0, x2: this.width, y2: this.height }, H(this.overlaidCanvas, "click", function(a2) {
            b._mouseEventHandler(a2);
          }, this.allDOMEventHandlers), H(this.overlaidCanvas, "mousemove", function(a2) {
            b._mouseEventHandler(a2);
          }, this.allDOMEventHandlers), H(this.overlaidCanvas, "mouseup", function(a2) {
            b._mouseEventHandler(a2);
          }, this.allDOMEventHandlers), H(
            this.overlaidCanvas,
            "mousedown",
            function(a2) {
              b._mouseEventHandler(a2);
              wa(b._dropdownMenu);
            },
            this.allDOMEventHandlers
          ), H(this.overlaidCanvas, "mouseout", function(a2) {
            b._mouseEventHandler(a2);
          }, this.allDOMEventHandlers), H(this.overlaidCanvas, window.navigator.msPointerEnabled ? "MSPointerDown" : "touchstart", function(a2) {
            b._touchEventHandler(a2);
          }, this.allDOMEventHandlers), H(this.overlaidCanvas, window.navigator.msPointerEnabled ? "MSPointerMove" : "touchmove", function(a2) {
            b._touchEventHandler(a2);
          }, this.allDOMEventHandlers), H(
            this.overlaidCanvas,
            window.navigator.msPointerEnabled ? "MSPointerUp" : "touchend",
            function(a2) {
              b._touchEventHandler(a2);
            },
            this.allDOMEventHandlers
          ), H(this.overlaidCanvas, window.navigator.msPointerEnabled ? "MSPointerCancel" : "touchcancel", function(a2) {
            b._touchEventHandler(a2);
          }, this.allDOMEventHandlers), this.toolTip = new na(this, this.options.toolTip), this.data = null, this.axisX = [], this.axisX2 = [], this.axisY = [], this.axisY2 = [], this.sessionVariables = { axisX: [], axisX2: [], axisY: [], axisY2: [] })) : window.console && window.console.log('CanvasJS Error: Chart Container with id "' + this._containerId + '" was not found');
        }
        function t2(a, g) {
          for (var c = [], b, e = 0; e < a.length; e++)
            if (0 == e)
              c.push(a[0]);
            else {
              var h, m, y;
              y = e - 1;
              h = 0 === y ? 0 : y - 1;
              m = y === a.length - 1 ? y : y + 1;
              b = Math.abs((a[m].x - a[h].x) / (0 === a[m].x - a[y].x ? 0.01 : a[m].x - a[y].x)) * (g - 1) / 2 + 1;
              var I = (a[m].x - a[h].x) / b;
              b = (a[m].y - a[h].y) / b;
              c[c.length] = a[y].x > a[h].x && 0 < I || a[y].x < a[h].x && 0 > I ? { x: a[y].x + I / 3, y: a[y].y + b / 3 } : { x: a[y].x, y: a[y].y + (1 === c.length ? 0 : b / 9) };
              y = e;
              h = 0 === y ? 0 : y - 1;
              m = y === a.length - 1 ? y : y + 1;
              b = Math.abs((a[m].x - a[h].x) / (0 === a[y].x - a[h].x ? 0.01 : a[y].x - a[h].x)) * (g - 1) / 2 + 1;
              I = (a[m].x - a[h].x) / b;
              b = (a[m].y - a[h].y) / b;
              c[c.length] = a[y].x > a[h].x && 0 < I || a[y].x < a[h].x && 0 > I ? { x: a[y].x - I / 3, y: a[y].y - b / 3 } : { x: a[y].x, y: a[y].y - b / 9 };
              c[c.length] = a[e];
            }
          return c;
        }
        function B2(a, g, c, b, e, h, m, y, I, k) {
          var l = 0;
          k ? (m.color = h, y.color = h) : k = 1;
          l = I ? Math.abs(e - c) : Math.abs(b - g);
          l = 0 < m.trimLength ? Math.abs(l * m.trimLength / 100) : Math.abs(l - m.length);
          I ? (c += l / 2, e -= l / 2) : (g += l / 2, b -= l / 2);
          var l = 1 === Math.round(m.thickness) % 2 ? 0.5 : 0, q = 1 === Math.round(y.thickness) % 2 ? 0.5 : 0;
          a.save();
          a.globalAlpha = k;
          a.strokeStyle = y.color || h;
          a.lineWidth = y.thickness || 2;
          a.setLineDash && a.setLineDash(G(y.dashType, y.thickness));
          a.beginPath();
          I && 0 < y.thickness ? (a.moveTo(b - m.thickness / 2, Math.round((c + e) / 2) - q), a.lineTo(g + m.thickness / 2, Math.round((c + e) / 2) - q)) : 0 < y.thickness && (a.moveTo(Math.round((g + b) / 2) - q, c + m.thickness / 2), a.lineTo(Math.round((g + b) / 2) - q, e - m.thickness / 2));
          a.stroke();
          a.strokeStyle = m.color || h;
          a.lineWidth = m.thickness || 2;
          a.setLineDash && a.setLineDash(G(m.dashType, m.thickness));
          a.beginPath();
          I && 0 < m.thickness ? (a.moveTo(b - l, c), a.lineTo(b - l, e), a.moveTo(g + l, c), a.lineTo(g + l, e)) : 0 < m.thickness && (a.moveTo(g, c + l), a.lineTo(b, c + l), a.moveTo(g, e - l), a.lineTo(b, e - l));
          a.stroke();
          a.restore();
        }
        function S2(a, g) {
          S2.base.constructor.call(this, "Legend", "legend", g, null, a);
          this.chart = a;
          this.canvas = a.canvas;
          this.ctx = this.chart.ctx;
          this.ghostCtx = this.chart._eventManager.ghostCtx;
          this.items = [];
          this.optionsName = "legend";
          this.height = this.width = 0;
          this.orientation = null;
          this.dataSeries = [];
          this.bounds = { x1: null, y1: null, x2: null, y2: null };
          "undefined" === typeof this.options.fontSize && (this.fontSize = this.chart.getAutoFontSize(this.fontSize));
          this.lineHeight = Za(this.fontFamily, this.fontSize, this.fontWeight);
          this.horizontalSpacing = this.fontSize;
        }
        function V2(a, g, c, b) {
          V2.base.constructor.call(this, "DataSeries", "data", g, c, a);
          this.chart = a;
          this.canvas = a.canvas;
          this._ctx = a.canvas.ctx;
          this.index = c;
          this.noDataPointsInPlotArea = 0;
          this.id = b;
          this.chart._eventManager.objectMap[b] = { id: b, objectType: "dataSeries", dataSeriesIndex: c };
          a = g.dataPoints ? g.dataPoints.length : 0;
          this.dataPointEOs = [];
          for (g = 0; g < a; g++)
            this.dataPointEOs[g] = {};
          this.dataPointIds = [];
          this.plotUnit = [];
          this.axisY = this.axisX = null;
          this.optionsName = "data";
          this.isOptionsInArray = true;
          null === this.fillOpacity && (this.type.match(/area/i) ? this.fillOpacity = 0.7 : this.fillOpacity = 1);
          this.axisPlacement = this.getDefaultAxisPlacement();
          "undefined" === typeof this.options.indexLabelFontSize && (this.indexLabelFontSize = this.chart.getAutoFontSize(this.indexLabelFontSize));
        }
        function A(a, g, c, b, e, h) {
          A.base.constructor.call(this, "Axis", g, c, b, a);
          this.chart = a;
          this.canvas = a.canvas;
          this.ctx = a.ctx;
          this.intervalStartPosition = this.maxHeight = this.maxWidth = 0;
          this.labels = [];
          this.dataSeries = [];
          this._stripLineLabels = this._ticks = this._labels = null;
          this.dataInfo = { min: Infinity, max: -Infinity, viewPortMin: Infinity, viewPortMax: -Infinity, minDiff: Infinity };
          this.isOptionsInArray = true;
          "axisX" === e ? ("left" === h || "bottom" === h ? (this.optionsName = "axisX", n(this.chart.sessionVariables.axisX[b]) && (this.chart.sessionVariables.axisX[b] = {}), this.sessionVariables = this.chart.sessionVariables.axisX[b]) : (this.optionsName = "axisX2", n(this.chart.sessionVariables.axisX2[b]) && (this.chart.sessionVariables.axisX2[b] = {}), this.sessionVariables = this.chart.sessionVariables.axisX2[b]), this.options.interval || (this.intervalType = null)) : "left" === h || "bottom" === h ? (this.optionsName = "axisY", n(this.chart.sessionVariables.axisY[b]) && (this.chart.sessionVariables.axisY[b] = {}), this.sessionVariables = this.chart.sessionVariables.axisY[b]) : (this.optionsName = "axisY2", n(this.chart.sessionVariables.axisY2[b]) && (this.chart.sessionVariables.axisY2[b] = {}), this.sessionVariables = this.chart.sessionVariables.axisY2[b]);
          "undefined" === typeof this.options.titleFontSize && (this.titleFontSize = this.chart.getAutoFontSize(this.titleFontSize));
          "undefined" === typeof this.options.labelFontSize && (this.labelFontSize = this.chart.getAutoFontSize(this.labelFontSize));
          this.type = e;
          "axisX" !== e || c && "undefined" !== typeof c.gridThickness || (this.gridThickness = 0);
          this._position = h;
          this.lineCoordinates = { x1: null, y1: null, x2: null, y2: null, width: null };
          this.labelAngle = (this.labelAngle % 360 + 360) % 360;
          90 < this.labelAngle && 270 > this.labelAngle ? this.labelAngle -= 180 : 270 <= this.labelAngle && 360 >= this.labelAngle && (this.labelAngle -= 360);
          this.options.scaleBreaks && (this.scaleBreaks = new ea2(this.chart, this.options.scaleBreaks, ++this.chart._eventManager.lastObjectId, this));
          this.stripLines = [];
          if (this.options.stripLines && 0 < this.options.stripLines.length)
            for (a = 0; a < this.options.stripLines.length; a++)
              this.stripLines.push(new N(this.chart, this.options.stripLines[a], a, ++this.chart._eventManager.lastObjectId, this));
          this.options.crosshair && (this.crosshair = new da2(
            this.chart,
            this.options.crosshair,
            this
          ), this.crosshair._updatedValue = n(this.sessionVariables.crosshairValue) ? null : this.sessionVariables.crosshairValue);
          this._titleTextBlock = null;
          this.hasOptionChanged("viewportMinimum") && null === this.viewportMinimum && (this.options.viewportMinimum = void 0, this.sessionVariables.viewportMinimum = null);
          this.hasOptionChanged("viewportMinimum") || isNaN(this.sessionVariables.newViewportMinimum) || null === this.sessionVariables.newViewportMinimum ? this.sessionVariables.newViewportMinimum = null : this.viewportMinimum = this.sessionVariables.newViewportMinimum;
          this.hasOptionChanged("viewportMaximum") && null === this.viewportMaximum && (this.options.viewportMaximum = void 0, this.sessionVariables.viewportMaximum = null);
          this.hasOptionChanged("viewportMaximum") || isNaN(this.sessionVariables.newViewportMaximum) || null === this.sessionVariables.newViewportMaximum ? this.sessionVariables.newViewportMaximum = null : this.viewportMaximum = this.sessionVariables.newViewportMaximum;
          null !== this.minimum && null !== this.viewportMinimum && (this.viewportMinimum = Math.max(this.viewportMinimum, this.minimum));
          null !== this.maximum && null !== this.viewportMaximum && (this.viewportMaximum = Math.min(this.viewportMaximum, this.maximum));
          this.trackChanges("viewportMinimum");
          this.trackChanges("viewportMaximum");
        }
        function ea2(a, g, c, b) {
          ea2.base.constructor.call(this, "ScaleBreaks", "scaleBreaks", g, null, b);
          this.id = c;
          this.chart = a;
          this.ctx = this.chart.ctx;
          this.axis = b;
          this.optionsName = "scaleBreaks";
          this.isOptionsInArray = false;
          this._appliedBreaks = [];
          this.customBreaks = [];
          this.autoBreaks = [];
          "string" === typeof this.spacing ? (this.spacing = parseFloat(this.spacing), this.spacing = isNaN(this.spacing) ? 8 : (10 < this.spacing ? 10 : this.spacing) + "%") : "number" !== typeof this.spacing && (this.spacing = 8);
          this.autoCalculate && (this.maxNumberOfAutoBreaks = Math.min(this.maxNumberOfAutoBreaks, 5));
          if (this.options.customBreaks && 0 < this.options.customBreaks.length) {
            for (a = 0; a < this.options.customBreaks.length; a++)
              this.customBreaks.push(new ca2(
                this.chart,
                "customBreaks",
                this.options.customBreaks[a],
                a,
                ++this.chart._eventManager.lastObjectId,
                this
              )), "number" === typeof this.customBreaks[a].startValue && ("number" === typeof this.customBreaks[a].endValue && this.customBreaks[a].endValue !== this.customBreaks[a].startValue) && this._appliedBreaks.push(this.customBreaks[a]);
            this._appliedBreaks.sort(function(a2, b2) {
              return a2.startValue - b2.startValue;
            });
            for (a = 0; a < this._appliedBreaks.length - 1; a++)
              this._appliedBreaks[a].endValue >= this._appliedBreaks[a + 1].startValue && (this._appliedBreaks[a].endValue = Math.max(
                this._appliedBreaks[a].endValue,
                this._appliedBreaks[a + 1].endValue
              ), window.console && window.console.log("CanvasJS Error: Breaks " + a + " and " + (a + 1) + " are overlapping."), this._appliedBreaks.splice(a, 2), a--);
          }
        }
        function ca2(a, g, c, b, e, h) {
          ca2.base.constructor.call(this, "Break", g, c, b, h);
          this.id = e;
          this.chart = a;
          this.ctx = this.chart.ctx;
          this.scaleBreaks = h;
          this.optionsName = g;
          this.isOptionsInArray = true;
          this.type = c.type ? this.type : h.type;
          this.fillOpacity = n(c.fillOpacity) ? h.fillOpacity : this.fillOpacity;
          this.lineThickness = n(c.lineThickness) ? h.lineThickness : this.lineThickness;
          this.color = c.color ? this.color : h.color;
          this.lineColor = c.lineColor ? this.lineColor : h.lineColor;
          this.lineDashType = c.lineDashType ? this.lineDashType : h.lineDashType;
          !n(this.startValue) && this.startValue.getTime && (this.startValue = this.startValue.getTime());
          !n(this.endValue) && this.endValue.getTime && (this.endValue = this.endValue.getTime());
          "number" === typeof this.startValue && ("number" === typeof this.endValue && this.endValue < this.startValue) && (a = this.startValue, this.startValue = this.endValue, this.endValue = a);
          this.spacing = "undefined" === typeof c.spacing ? h.spacing : c.spacing;
          "string" === typeof this.options.spacing ? (this.spacing = parseFloat(this.spacing), this.spacing = isNaN(this.spacing) ? 0 : (10 < this.spacing ? 10 : this.spacing) + "%") : "number" !== typeof this.options.spacing && (this.spacing = h.spacing);
          this.size = h.parent.logarithmic ? 1 : 0;
        }
        function N(a, g, c, b, e) {
          N.base.constructor.call(this, "StripLine", "stripLines", g, c, e);
          this.id = b;
          this.chart = a;
          this.ctx = this.chart.ctx;
          this.label = this.label;
          this.axis = e;
          this.optionsName = "stripLines";
          this.isOptionsInArray = true;
          this._thicknessType = "pixel";
          null !== this.startValue && null !== this.endValue && (this.value = e.logarithmic ? Math.sqrt((this.startValue.getTime ? this.startValue.getTime() : this.startValue) * (this.endValue.getTime ? this.endValue.getTime() : this.endValue)) : ((this.startValue.getTime ? this.startValue.getTime() : this.startValue) + (this.endValue.getTime ? this.endValue.getTime() : this.endValue)) / 2, this._thicknessType = null);
        }
        function da2(a, g, c) {
          da2.base.constructor.call(
            this,
            "Crosshair",
            "crosshair",
            g,
            null,
            c
          );
          this.chart = a;
          this.ctx = this.chart.ctx;
          this.axis = c;
          this.optionsName = "crosshair";
          this._thicknessType = "pixel";
        }
        function na(a, g) {
          na.base.constructor.call(this, "ToolTip", "toolTip", g, null, a);
          this.chart = a;
          this.canvas = a.canvas;
          this.ctx = this.chart.ctx;
          this.currentDataPointIndex = this.currentSeriesIndex = -1;
          this._prevY = this._prevX = NaN;
          this.containerTransitionDuration = 0.1;
          this.mozContainerTransition = this.getContainerTransition(this.containerTransitionDuration);
          this.optionsName = "toolTip";
          this._initialize();
        }
        function ha2(a) {
          this.chart = a;
          this.lastObjectId = 0;
          this.objectMap = [];
          this.rectangularRegionEventSubscriptions = [];
          this.previousDataPointEventObject = null;
          this.ghostCanvas = ua(this.chart.width, this.chart.height, true);
          this.ghostCtx = this.ghostCanvas.getContext("2d");
          this.mouseoveredObjectMaps = [];
        }
        function W2(a) {
          this.chart = a;
          this.ctx = this.chart.plotArea.ctx;
          this.animations = [];
          this.animationRequestId = null;
        }
        pa(p, Y);
        p.prototype.destroy = function() {
          var a = this.allDOMEventHandlers;
          this._animator && this._animator.cancelAllAnimations();
          this._panTimerId && clearTimeout(this._panTimerId);
          for (var g = 0; g < a.length; g++) {
            var c = a[g][0], b = a[g][1], e = a[g][2], h = a[g][3], h = h || false;
            c.removeEventListener ? c.removeEventListener(b, e, h) : c.detachEvent && c.detachEvent("on" + b, e);
          }
          this.allDOMEventHandlers = [];
          for (this.removeAllEventListeners(); this._canvasJSContainer && this._canvasJSContainer.hasChildNodes(); )
            this._canvasJSContainer.removeChild(this._canvasJSContainer.lastChild);
          for (; this.container && this.container.hasChildNodes(); )
            this.container.removeChild(this.container.lastChild);
          for (; this._dropdownMenu && this._dropdownMenu.hasChildNodes(); )
            this._dropdownMenu.removeChild(this._dropdownMenu.lastChild);
          this.container = this._canvasJSContainer = null;
          this.toolTip.container = null;
          this.canvas && ya(this.canvas);
          this.overlaidCanvas && ya(this.overlaidCanvas);
          this._preRenderCanvas && ya(this._preRenderCanvas);
          this._breaksCanvas && ya(this._breaksCanvas);
          this._eventManager && this._eventManager.ghostCanvas && ya(this._eventManager.ghostCanvas);
          this._toolBar = this._dropdownMenu = this._menuButton = this._resetButton = this._zoomButton = null;
        };
        p.prototype._updateOptions = function() {
          var a = this;
          this.updateOption("width");
          this.updateOption("height");
          this.updateOption("dataPointWidth");
          this.updateOption("dataPointMinWidth");
          this.updateOption("dataPointMaxWidth");
          this.updateOption("interactivityEnabled");
          this.updateOption("theme");
          this.stockChart && (this.stockChart.options && "undefined" !== typeof this.stockChart.options.theme && n(this.options.theme)) && (this.theme = this.stockChart.theme);
          this.updateOption("colorSet") && (this.selectedColorSet = "undefined" !== typeof Ba[this.colorSet] ? Ba[this.colorSet] : Ba.colorSet1);
          this.updateOption("backgroundColor");
          this.stockChart && (this.stockChart.options && "undefined" !== typeof this.stockChart.options.backgroundColor && n(this.options.backgroundColor)) && (this.backgroundColor = this.stockChart.backgroundColor);
          this.backgroundColor || (this.backgroundColor = "rgba(0,0,0,0)");
          this.updateOption("culture");
          this.stockChart && n(this.options.culture) && (this.culture = this.stockChart.culture);
          this._cultureInfo = new Ja(this.culture);
          this.updateOption("animationEnabled");
          this.animationEnabled = this.animationEnabled && v;
          this.updateOption("animationDuration");
          this.updateOption("rangeChanging");
          this.updateOption("rangeChanged");
          this.updateOption("exportEnabled");
          this.updateOption("exportFileName");
          this.updateOption("zoomType");
          this.toolbar = new Va(this, this.options.toolbar);
          if (this.stockChart && this.stockChart.options && this.stockChart.options.toolbar && !this.options.toolbar)
            for (var g in this.stockChart.options.toolbar)
              this.toolbar[g] = this.stockChart.options.toolbar[g];
          if (this.options.zoomEnabled || this.panEnabled) {
            if (this._zoomButton)
              Q(this._zoomButton, { borderRight: this.toolbar.buttonBorderThickness + "px solid " + this.toolbar.buttonBorderColor, backgroundColor: a.toolbar.itemBackgroundColor, color: a.toolbar.fontColor }), 0 >= navigator.userAgent.search("MSIE") && this._zoomButton.childNodes[0] && Q(this._zoomButton.childNodes[0], { WebkitFilter: "invert(0%)", filter: "invert(0%)" });
            else {
              var c = false;
              wa(this._zoomButton = document.createElement("button"));
              ta(this, this._zoomButton, "pan");
              this._toolBar.appendChild(this._zoomButton);
              this._zoomButton.style.borderRight = this.toolbar.buttonBorderThickness + "px solid " + this.toolbar.buttonBorderColor;
              H(this._zoomButton, "touchstart", function(a2) {
                c = true;
              }, this.allDOMEventHandlers);
              H(this._zoomButton, "click", function() {
                a.zoomEnabled ? (a.zoomEnabled = false, a.panEnabled = true, ta(a, a._zoomButton, "zoom")) : (a.zoomEnabled = true, a.panEnabled = false, ta(a, a._zoomButton, "pan"));
                a.render();
              }, this.allDOMEventHandlers);
              H(
                this._zoomButton,
                "mousemove",
                function() {
                  c ? c = false : (Q(a._zoomButton, { backgroundColor: a.toolbar.itemBackgroundColorOnHover, color: a.toolbar.fontColorOnHover, transition: "0.4s", WebkitTransition: "0.4s" }), 0 >= navigator.userAgent.search("MSIE") && Q(a._zoomButton.childNodes[0], { WebkitFilter: "invert(100%)", filter: "invert(100%)" }));
                },
                this.allDOMEventHandlers
              );
              H(this._zoomButton, "mouseout", function() {
                c || (Q(a._zoomButton, { backgroundColor: a.toolbar.itemBackgroundColor, color: a.toolbar.fontColor, transition: "0.4s", WebkitTransition: "0.4s" }), 0 >= navigator.userAgent.search("MSIE") && Q(a._zoomButton.childNodes[0], { WebkitFilter: "invert(0%)", filter: "invert(0%)" }));
              }, this.allDOMEventHandlers);
            }
            this._resetButton ? (Q(this._resetButton, { borderRight: this.toolbar.buttonBorderThickness + "px solid " + this.toolbar.buttonBorderColor, backgroundColor: a.toolbar.itemBackgroundColor, color: a.toolbar.fontColor }), 0 >= navigator.userAgent.search("MSIE") && this._resetButton.childNodes[0] && Q(this._resetButton.childNodes[0], { WebkitFilter: "invert(0%)", filter: "invert(0%)" }), this._resetButton.title = this._cultureInfo.resetText) : (c = false, wa(this._resetButton = document.createElement("button")), ta(this, this._resetButton, "reset"), this._resetButton.style.borderRight = (this.exportEnabled ? this.toolbar.buttonBorderThickness : 0) + "px solid " + this.toolbar.buttonBorderColor, this._toolBar.appendChild(this._resetButton), H(this._resetButton, "touchstart", function(a2) {
              c = true;
            }, this.allDOMEventHandlers), H(this._resetButton, "click", function() {
              a.toolTip.hide();
              a.toolTip && a.toolTip.enabled && a.toolTip.dispatchEvent(
                "hidden",
                { chart: a, toolTip: a.toolTip },
                a.toolTip
              );
              a.zoomEnabled || a.panEnabled ? (a.zoomEnabled = true, a.panEnabled = false, ta(a, a._zoomButton, "pan"), a._defaultCursor = "default", a.overlaidCanvas.style.cursor = a._defaultCursor) : (a.zoomEnabled = false, a.panEnabled = false);
              if (a.sessionVariables.axisX)
                for (var b = 0; b < a.sessionVariables.axisX.length; b++)
                  a.sessionVariables.axisX[b].newViewportMinimum = null, a.sessionVariables.axisX[b].newViewportMaximum = null;
              if (a.sessionVariables.axisX2)
                for (b = 0; b < a.sessionVariables.axisX2.length; b++)
                  a.sessionVariables.axisX2[b].newViewportMinimum = null, a.sessionVariables.axisX2[b].newViewportMaximum = null;
              if (a.sessionVariables.axisY)
                for (b = 0; b < a.sessionVariables.axisY.length; b++)
                  a.sessionVariables.axisY[b].newViewportMinimum = null, a.sessionVariables.axisY[b].newViewportMaximum = null;
              if (a.sessionVariables.axisY2)
                for (b = 0; b < a.sessionVariables.axisY2.length; b++)
                  a.sessionVariables.axisY2[b].newViewportMinimum = null, a.sessionVariables.axisY2[b].newViewportMaximum = null;
              a.resetOverlayedCanvas();
              0 >= navigator.userAgent.search("MSIE") && Q(
                a._resetButton.childNodes[0],
                { WebkitFilter: "invert(0%)", filter: "invert(0%)" }
              );
              wa(a._zoomButton, a._resetButton);
              a.stockChart && (a.stockChart._rangeEventParameter = { stockChart: a.stockChart, source: "chart", index: a.stockChart.charts.indexOf(a), minimum: null, maximum: null });
              a._dispatchRangeEvent("rangeChanging", "reset");
              a.stockChart && (a.stockChart._rangeEventParameter.type = "rangeChanging", a.stockChart.dispatchEvent("rangeChanging", a.stockChart._rangeEventParameter, a.stockChart));
              a.render();
              a.syncCharts && a.stockChart && (a.stockChart.rangeUpdatedBy = !a.stockChart.navigator.slider || n(a.stockChart.navigator.slider.options.minimum) && n(a.stockChart.navigator.slider.options.maximum) ? !a.stockChart.rangeSelector.enabled || !a.stockChart.rangeSelector.inputFields.enabled || n(a.stockChart.rangeSelector.inputFields.options.startValue) && n(a.stockChart.rangeSelector.inputFields.options.endValue) ? null : "inputFields" : "navigator", n(a.stockChart._selectedRangeButtonIndex) || (a.stockChart.rangeUpdatedBy = "rangeButton"), a.syncCharts(null, null), "rangeButton" === a.stockChart.rangeUpdatedBy && a.stockChart.rangeSelector.selectedRangeButtonIndex < a.stockChart.rangeSelector.buttons.length && (b = a.stockChart.rangeSelector.buttons[a.stockChart.rangeSelector.selectedRangeButtonIndex], b.enabled && (b.state = "on", b.textBlock.fontWeight = "bold", b.textBlock.fontColor = a.stockChart.rangeSelector.buttonStyle.labelFontColorOnHover, b.textBlock.backgroundColor = a.stockChart.rangeSelector.buttonStyle.backgroundColorOnSelect, b.render())));
              a._dispatchRangeEvent("rangeChanged", "reset");
              a.stockChart && (a.stockChart._rangeEventParameter.type = "rangeChanged", a.stockChart.dispatchEvent("rangeChanged", a.stockChart._rangeEventParameter, a.stockChart));
            }, this.allDOMEventHandlers), H(this._resetButton, "mousemove", function() {
              c || (Q(a._resetButton, { backgroundColor: a.toolbar.itemBackgroundColorOnHover, color: a.toolbar.fontColorOnHover, transition: "0.4s", WebkitTransition: "0.4s" }), 0 >= navigator.userAgent.search("MSIE") && Q(a._resetButton.childNodes[0], { WebkitFilter: "invert(100%)", filter: "invert(100%)" }));
            }, this.allDOMEventHandlers), H(
              this._resetButton,
              "mouseout",
              function() {
                c || (Q(a._resetButton, { backgroundColor: a.toolbar.itemBackgroundColor, color: a.toolbar.fontColor, transition: "0.4s", WebkitTransition: "0.4s" }), 0 >= navigator.userAgent.search("MSIE") && Q(a._resetButton.childNodes[0], { WebkitFilter: "invert(0%)", filter: "invert(0%)" }));
              },
              this.allDOMEventHandlers
            ), this.overlaidCanvas.style.cursor = a._defaultCursor);
            this.zoomEnabled || this.panEnabled || (this._zoomButton ? (a._zoomButton.getAttribute("state") === a._cultureInfo.zoomText ? (this.panEnabled = true, this.zoomEnabled = false) : (this.zoomEnabled = true, this.panEnabled = false), La(a._zoomButton, a._resetButton)) : (this.zoomEnabled = true, this.panEnabled = false));
          } else
            this.panEnabled = this.zoomEnabled = false;
          ib(this);
          "none" !== this._toolBar.style.display && this._zoomButton && (this.panEnabled ? ta(a, a._zoomButton, "zoom") : ta(a, a._zoomButton, "pan"), a._resetButton.getAttribute("state") !== a._cultureInfo.resetText && ta(a, a._resetButton, "reset"));
          this.options.toolTip && this.toolTip.options !== this.options.toolTip && (this.toolTip.options = this.options.toolTip);
          for (g in this.toolTip.options)
            this.toolTip.options.hasOwnProperty(g) && this.toolTip.updateOption(g);
        };
        p.prototype._updateSize = function() {
          var a;
          a = [this.canvas, this.overlaidCanvas, this._eventManager.ghostCanvas];
          var g = 0, c = 0;
          this.options.width ? g = this.width : this.width = g = 0 < this.container.clientWidth ? this.container.clientWidth : this.width;
          n(this.stockChart) || n(this.index) ? this.options.height ? c = this.height : this.height = c = 0 < this.container.clientHeight ? this.container.clientHeight : this.height : c = this.height = this.stockChart._chartsHeight[this.index];
          if (this.canvas.width !== g * la || this.canvas.height !== c * la) {
            for (var b = 0; b < a.length; b++)
              Ma(a[b], g, c);
            this.bounds = { x1: 0, y1: 0, x2: this.width, y2: this.height, width: this.width, height: this.height };
            a = true;
          } else
            a = false;
          return a;
        };
        p.prototype._initialize = function() {
          this.isNavigator = n(this.parent) || n(this.parent._defaultsKey) || "Navigator" !== this.parent._defaultsKey ? false : true;
          this._animator ? this._animator.cancelAllAnimations() : this._animator = new W2(this);
          this.removeAllEventListeners();
          this.disableToolTip = false;
          this._axes = [];
          this.funnelPyramidClickHandler = this.pieDoughnutClickHandler = null;
          this._updateOptions();
          this.animatedRender = v && this.animationEnabled && 0 === this.renderCount;
          this._updateSize();
          this.clearCanvas();
          this.ctx.beginPath();
          this.axisX = [];
          this.axisX2 = [];
          this.axisY = [];
          this.axisY2 = [];
          this._indexLabels = [];
          this._dataInRenderedOrder = [];
          this._events = [];
          this._eventManager && this._eventManager.reset();
          this.plotInfo = { axisPlacement: null, plotTypes: [] };
          this.layoutManager = new Ea(0, 0, this.width, this.height, this.isNavigator ? 0 : 2);
          this.plotArea.layoutManager && this.plotArea.layoutManager.reset();
          this.data = [];
          this.title = null;
          this.subtitles = [];
          var a = 0, g = null;
          if (this.options.data) {
            for (var c = 0; c < this.options.data.length; c++)
              if (a++, !this.options.data[c].type || 0 <= p._supportedChartTypes.indexOf(this.options.data[c].type)) {
                var b = new V2(this, this.options.data[c], a - 1, ++this._eventManager.lastObjectId);
                if (!n(b) && b.dataPoints) {
                  for (var e = 0; e < b.dataPoints.length; e++)
                    if (b.dataPoints[e].x && b.dataPoints[e].x.getTime) {
                      b.xValueType = "dateTime";
                      break;
                    }
                }
                "error" === b.type && (b.linkedDataSeriesIndex = n(this.options.data[c].linkedDataSeriesIndex) ? c - 1 : this.options.data[c].linkedDataSeriesIndex, 0 > b.linkedDataSeriesIndex || b.linkedDataSeriesIndex >= this.options.data.length || "number" !== typeof b.linkedDataSeriesIndex || "error" === this.options.data[b.linkedDataSeriesIndex].type) && (b.linkedDataSeriesIndex = null);
                null === b.name && (b.name = "DataSeries " + a);
                null === b.color ? 1 < this.options.data.length ? (b._colorSet = [this.selectedColorSet[b.index % this.selectedColorSet.length]], b.color = this.selectedColorSet[b.index % this.selectedColorSet.length]) : b._colorSet = "line" === b.type || "stepLine" === b.type || "spline" === b.type || "area" === b.type || "stepArea" === b.type || "splineArea" === b.type || "stackedArea" === b.type || "stackedArea100" === b.type || "rangeArea" === b.type || "rangeSplineArea" === b.type || "candlestick" === b.type || "ohlc" === b.type || "waterfall" === b.type || "boxAndWhisker" === b.type ? [this.selectedColorSet[0]] : this.selectedColorSet : b._colorSet = [b.color];
                null === b.markerSize && (("line" === b.type || "stepLine" === b.type || "spline" === b.type || 0 <= b.type.toLowerCase().indexOf("area")) && b.dataPoints && b.dataPoints.length < this.width / 16 || "scatter" === b.type) && (b.markerSize = 8);
                "bubble" !== b.type && "scatter" !== b.type || !b.dataPoints || (b.dataPoints.some ? b.dataPoints.some(function(a2) {
                  return a2.x;
                }) && b.dataPoints.sort(d) : b.dataPoints.sort(d));
                this.data.push(b);
                var e = b.axisPlacement, g = g || e, h;
                "normal" === e ? "xySwapped" === this.plotInfo.axisPlacement ? h = 'You cannot combine "' + b.type + '" with bar chart' : "none" === this.plotInfo.axisPlacement ? h = 'You cannot combine "' + b.type + '" with pie chart' : null === this.plotInfo.axisPlacement && (this.plotInfo.axisPlacement = "normal") : "xySwapped" === e ? "normal" === this.plotInfo.axisPlacement ? h = 'You cannot combine "' + b.type + '" with line, area, column or pie chart' : "none" === this.plotInfo.axisPlacement ? h = 'You cannot combine "' + b.type + '" with pie chart' : null === this.plotInfo.axisPlacement && (this.plotInfo.axisPlacement = "xySwapped") : "none" === e ? "normal" === this.plotInfo.axisPlacement ? h = 'You cannot combine "' + b.type + '" with line, area, column or bar chart' : "xySwapped" === this.plotInfo.axisPlacement ? h = 'You cannot combine "' + b.type + '" with bar chart' : null === this.plotInfo.axisPlacement && (this.plotInfo.axisPlacement = "none") : null === e && "none" === this.plotInfo.axisPlacement && (h = 'You cannot combine "' + b.type + '" with pie chart');
                if (h && window.console) {
                  window.console.log(h);
                  return;
                }
              }
            for (c = 0; c < this.data.length; c++) {
              if ("none" == g && "error" === this.data[c].type && window.console) {
                window.console.log('You cannot combine "' + b.type + '" with error chart');
                return;
              }
              "error" === this.data[c].type && (this.data[c].axisPlacement = this.plotInfo.axisPlacement = g || "normal", this.data[c]._linkedSeries = null === this.data[c].linkedDataSeriesIndex ? null : this.data[this.data[c].linkedDataSeriesIndex]);
            }
          }
          this._objectsInitialized = true;
          this._plotAreaElements = [];
        };
        p._supportedChartTypes = Da("line stepLine spline column area stepArea splineArea bar bubble scatter stackedColumn stackedColumn100 stackedBar stackedBar100 stackedArea stackedArea100 candlestick ohlc boxAndWhisker rangeColumn error rangeBar rangeArea rangeSplineArea pie doughnut funnel pyramid waterfall".split(" "));
        p.prototype.setLayout = function() {
          for (var a = this._plotAreaElements, g = 0; g < this.data.length; g++)
            if ("normal" === this.plotInfo.axisPlacement || "xySwapped" === this.plotInfo.axisPlacement) {
              if (!this.data[g].axisYType || "primary" === this.data[g].axisYType)
                if (this.options.axisY && 0 < this.options.axisY.length) {
                  if (!this.axisY.length)
                    for (var c = 0; c < this.options.axisY.length; c++)
                      "normal" === this.plotInfo.axisPlacement ? this._axes.push(this.axisY[c] = new A(this, "axisY", this.options.axisY[c], c, "axisY", "left")) : "xySwapped" === this.plotInfo.axisPlacement && this._axes.push(this.axisY[c] = new A(this, "axisY", this.options.axisY[c], c, "axisY", "bottom"));
                  this.data[g].axisY = this.axisY[0 <= this.data[g].axisYIndex && this.data[g].axisYIndex < this.axisY.length ? this.data[g].axisYIndex : 0];
                  this.axisY[0 <= this.data[g].axisYIndex && this.data[g].axisYIndex < this.axisY.length ? this.data[g].axisYIndex : 0].dataSeries.push(this.data[g]);
                } else
                  this.axisY.length || ("normal" === this.plotInfo.axisPlacement ? this._axes.push(this.axisY[0] = new A(
                    this,
                    "axisY",
                    this.options.axisY,
                    0,
                    "axisY",
                    "left"
                  )) : "xySwapped" === this.plotInfo.axisPlacement && this._axes.push(this.axisY[0] = new A(this, "axisY", this.options.axisY, 0, "axisY", "bottom"))), this.data[g].axisY = this.axisY[0], this.axisY[0].dataSeries.push(this.data[g]);
              if ("secondary" === this.data[g].axisYType)
                if (this.options.axisY2 && 0 < this.options.axisY2.length) {
                  if (!this.axisY2.length)
                    for (c = 0; c < this.options.axisY2.length; c++)
                      "normal" === this.plotInfo.axisPlacement ? this._axes.push(this.axisY2[c] = new A(
                        this,
                        "axisY2",
                        this.options.axisY2[c],
                        c,
                        "axisY",
                        "right"
                      )) : "xySwapped" === this.plotInfo.axisPlacement && this._axes.push(this.axisY2[c] = new A(this, "axisY2", this.options.axisY2[c], c, "axisY", "top"));
                  this.data[g].axisY = this.axisY2[0 <= this.data[g].axisYIndex && this.data[g].axisYIndex < this.axisY2.length ? this.data[g].axisYIndex : 0];
                  this.axisY2[0 <= this.data[g].axisYIndex && this.data[g].axisYIndex < this.axisY2.length ? this.data[g].axisYIndex : 0].dataSeries.push(this.data[g]);
                } else
                  this.axisY2.length || ("normal" === this.plotInfo.axisPlacement ? this._axes.push(this.axisY2[0] = new A(this, "axisY2", this.options.axisY2, 0, "axisY", "right")) : "xySwapped" === this.plotInfo.axisPlacement && this._axes.push(this.axisY2[0] = new A(this, "axisY2", this.options.axisY2, 0, "axisY", "top"))), this.data[g].axisY = this.axisY2[0], this.axisY2[0].dataSeries.push(this.data[g]);
              if (!this.data[g].axisXType || "primary" === this.data[g].axisXType)
                if (this.options.axisX && 0 < this.options.axisX.length) {
                  if (!this.axisX.length)
                    for (c = 0; c < this.options.axisX.length; c++)
                      "normal" === this.plotInfo.axisPlacement ? this._axes.push(this.axisX[c] = new A(this, "axisX", this.options.axisX[c], c, "axisX", "bottom")) : "xySwapped" === this.plotInfo.axisPlacement && this._axes.push(this.axisX[c] = new A(this, "axisX", this.options.axisX[c], c, "axisX", "left"));
                  this.data[g].axisX = this.axisX[0 <= this.data[g].axisXIndex && this.data[g].axisXIndex < this.axisX.length ? this.data[g].axisXIndex : 0];
                  this.axisX[0 <= this.data[g].axisXIndex && this.data[g].axisXIndex < this.axisX.length ? this.data[g].axisXIndex : 0].dataSeries.push(this.data[g]);
                } else
                  this.axisX.length || ("normal" === this.plotInfo.axisPlacement ? this._axes.push(this.axisX[0] = new A(this, "axisX", this.options.axisX, 0, "axisX", "bottom")) : "xySwapped" === this.plotInfo.axisPlacement && this._axes.push(this.axisX[0] = new A(this, "axisX", this.options.axisX, 0, "axisX", "left"))), this.data[g].axisX = this.axisX[0], this.axisX[0].dataSeries.push(this.data[g]);
              if ("secondary" === this.data[g].axisXType)
                if (this.options.axisX2 && 0 < this.options.axisX2.length) {
                  if (!this.axisX2.length)
                    for (c = 0; c < this.options.axisX2.length; c++)
                      "normal" === this.plotInfo.axisPlacement ? this._axes.push(this.axisX2[c] = new A(this, "axisX2", this.options.axisX2[c], c, "axisX", "top")) : "xySwapped" === this.plotInfo.axisPlacement && this._axes.push(this.axisX2[c] = new A(this, "axisX2", this.options.axisX2[c], c, "axisX", "right"));
                  this.data[g].axisX = this.axisX2[0 <= this.data[g].axisXIndex && this.data[g].axisXIndex < this.axisX2.length ? this.data[g].axisXIndex : 0];
                  this.axisX2[0 <= this.data[g].axisXIndex && this.data[g].axisXIndex < this.axisX2.length ? this.data[g].axisXIndex : 0].dataSeries.push(this.data[g]);
                } else
                  this.axisX2.length || ("normal" === this.plotInfo.axisPlacement ? this._axes.push(this.axisX2[0] = new A(this, "axisX2", this.options.axisX2, 0, "axisX", "top")) : "xySwapped" === this.plotInfo.axisPlacement && this._axes.push(this.axisX2[0] = new A(this, "axisX2", this.options.axisX2, 0, "axisX", "right"))), this.data[g].axisX = this.axisX2[0], this.axisX2[0].dataSeries.push(this.data[g]);
            }
          if (this.axisY) {
            for (c = 1; c < this.axisY.length; c++)
              "undefined" === typeof this.axisY[c].options.gridThickness && (this.axisY[c].gridThickness = 0);
            for (c = 0; c < this.axisY.length - 1; c++)
              "undefined" === typeof this.axisY[c].options.margin && (this.axisY[c].margin = 10);
          }
          if (this.axisY2) {
            for (c = 1; c < this.axisY2.length; c++)
              "undefined" === typeof this.axisY2[c].options.gridThickness && (this.axisY2[c].gridThickness = 0);
            for (c = 0; c < this.axisY2.length - 1; c++)
              "undefined" === typeof this.axisY2[c].options.margin && (this.axisY2[c].margin = 10);
          }
          this.axisY && 0 < this.axisY.length && (this.axisY2 && 0 < this.axisY2.length) && (0 < this.axisY[0].gridThickness && "undefined" === typeof this.axisY2[0].options.gridThickness ? this.axisY2[0].gridThickness = 0 : 0 < this.axisY2[0].gridThickness && "undefined" === typeof this.axisY[0].options.gridThickness && (this.axisY[0].gridThickness = 0));
          if (this.axisX)
            for (c = 0; c < this.axisX.length; c++)
              "undefined" === typeof this.axisX[c].options.gridThickness && (this.axisX[c].gridThickness = 0);
          if (this.axisX2)
            for (c = 0; c < this.axisX2.length; c++)
              "undefined" === typeof this.axisX2[c].options.gridThickness && (this.axisX2[c].gridThickness = 0);
          this.axisX && 0 < this.axisX.length && (this.axisX2 && 0 < this.axisX2.length) && (0 < this.axisX[0].gridThickness && "undefined" === typeof this.axisX2[0].options.gridThickness ? this.axisX2[0].gridThickness = 0 : 0 < this.axisX2[0].gridThickness && "undefined" === typeof this.axisX[0].options.gridThickness && (this.axisX[0].gridThickness = 0));
          c = false;
          if (0 < this._axes.length && this.options.zoomEnabled && (this.zoomEnabled || this.panEnabled)) {
            for (g = 0; g < this._axes.length; g++)
              if (!n(this._axes[g].viewportMinimum) || !n(this._axes[g].viewportMaximum)) {
                c = true;
                break;
              }
          }
          c ? (La(this._zoomButton, this._resetButton), this._toolBar.style.border = this.toolbar.buttonBorderThickness + "px solid " + this.toolbar.buttonBorderColor, this._zoomButton.style.borderRight = this.toolbar.buttonBorderThickness + "px solid " + this.toolbar.buttonBorderColor, this._resetButton.style.borderRight = (this.exportEnabled ? this.toolbar.buttonBorderThickness : 0) + "px solid " + this.toolbar.buttonBorderColor) : (wa(this._zoomButton, this._resetButton), this._toolBar.style.border = this.toolbar.buttonBorderThickness + "px solid transparent", this.options.zoomEnabled && (this.zoomEnabled = true, this.panEnabled = false));
          gb(this);
          this._processData();
          this.options.title && (this.title = new Aa(this, this.options.title), this.title.dockInsidePlotArea ? a.push(this.title) : this.title.setLayout());
          if (this.options.subtitles)
            for (g = 0; g < this.options.subtitles.length; g++)
              c = new Ia(this, this.options.subtitles[g], g), this.subtitles.push(c), c.dockInsidePlotArea ? a.push(c) : c.setLayout();
          this.legend = new S2(this, this.options.legend);
          for (g = 0; g < this.data.length; g++)
            (this.data[g].showInLegend || "pie" === this.data[g].type || "doughnut" === this.data[g].type || "funnel" === this.data[g].type || "pyramid" === this.data[g].type) && this.legend.dataSeries.push(this.data[g]);
          this.legend.dockInsidePlotArea ? a.push(this.legend) : this.legend.setLayout();
          for (g = 0; g < this._axes.length; g++)
            if (this._axes[g].scaleBreaks && this._axes[g].scaleBreaks._appliedBreaks.length) {
              v ? (this._breaksCanvas = ua(this.width, this.height, true), this._breaksCanvasCtx = this._breaksCanvas.getContext("2d")) : (this._breaksCanvas = this.canvas, this._breaksCanvasCtx = this.ctx);
              break;
            }
          this._preRenderCanvas = ua(this.width, this.height);
          this._preRenderCtx = this._preRenderCanvas.getContext("2d");
          "normal" !== this.plotInfo.axisPlacement && "xySwapped" !== this.plotInfo.axisPlacement || A.setLayout(this.axisX, this.axisX2, this.axisY, this.axisY2, this.plotInfo.axisPlacement, this.layoutManager.getFreeSpace());
        };
        p.prototype.renderElements = function() {
          if (this.height) {
            var a = this._plotAreaElements;
            this.title && !this.title.dockInsidePlotArea && this.title.render();
            for (var g = 0; g < this.subtitles.length; g++)
              this.subtitles[g].dockInsidePlotArea || this.subtitles[g].render();
            this.legend.dockInsidePlotArea || this.legend.render();
            if ("normal" === this.plotInfo.axisPlacement || "xySwapped" === this.plotInfo.axisPlacement)
              A.render(this.axisX, this.axisX2, this.axisY, this.axisY2, this.plotInfo.axisPlacement);
            else if ("none" === this.plotInfo.axisPlacement)
              this.preparePlotArea();
            else
              return;
            for (g = 0; g < a.length; g++)
              a[g].setLayout(), a[g].render();
            var c = [];
            if (this.animatedRender) {
              var b = ua(this.width, this.height);
              b.getContext("2d").drawImage(this.canvas, 0, 0, this.width, this.height);
            }
            jb(this);
            var a = this.ctx.miterLimit, e;
            this.ctx.miterLimit = 3;
            v && this._breaksCanvas && (this._preRenderCtx.drawImage(this.canvas, 0, 0, this.width, this.height), this._preRenderCtx.drawImage(this._breaksCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx.globalCompositeOperation = "source-atop", this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), this._preRenderCtx.clearRect(0, 0, this.width, this.height));
            for (g = 0; g < this.plotInfo.plotTypes.length; g++)
              for (var h = this.plotInfo.plotTypes[g], m = 0; m < h.plotUnits.length; m++) {
                var y = h.plotUnits[m], I = null;
                y.targetCanvas && ya(y.targetCanvas);
                y.targetCanvas = null;
                this.animatedRender && (y.targetCanvas = ua(this.width, this.height), y.targetCanvasCtx = y.targetCanvas.getContext("2d"), e = y.targetCanvasCtx.miterLimit, y.targetCanvasCtx.miterLimit = 3);
                "line" === y.type ? I = this.renderLine(y) : "stepLine" === y.type ? I = this.renderStepLine(y) : "spline" === y.type ? I = this.renderSpline(y) : "column" === y.type ? I = this.renderColumn(y) : "bar" === y.type ? I = this.renderBar(y) : "area" === y.type ? I = this.renderArea(y) : "stepArea" === y.type ? I = this.renderStepArea(y) : "splineArea" === y.type ? I = this.renderSplineArea(y) : "stackedColumn" === y.type ? I = this.renderStackedColumn(y) : "stackedColumn100" === y.type ? I = this.renderStackedColumn100(y) : "stackedBar" === y.type ? I = this.renderStackedBar(y) : "stackedBar100" === y.type ? I = this.renderStackedBar100(y) : "stackedArea" === y.type ? I = this.renderStackedArea(y) : "stackedArea100" === y.type ? I = this.renderStackedArea100(y) : "bubble" === y.type ? I = I = this.renderBubble(y) : "scatter" === y.type ? I = this.renderScatter(y) : "pie" === y.type ? this.renderPie(y) : "doughnut" === y.type ? this.renderPie(y) : "funnel" === y.type ? I = this.renderFunnel(y) : "pyramid" === y.type ? I = this.renderFunnel(y) : "candlestick" === y.type ? I = this.renderCandlestick(y) : "ohlc" === y.type ? I = this.renderCandlestick(y) : "rangeColumn" === y.type ? I = this.renderRangeColumn(y) : "error" === y.type ? I = this.renderError(y) : "rangeBar" === y.type ? I = this.renderRangeBar(y) : "rangeArea" === y.type ? I = this.renderRangeArea(y) : "rangeSplineArea" === y.type ? I = this.renderRangeSplineArea(y) : "waterfall" === y.type ? I = this.renderWaterfall(y) : "boxAndWhisker" === y.type && (I = this.renderBoxAndWhisker(y));
                for (var k = 0; k < y.dataSeriesIndexes.length; k++)
                  this._dataInRenderedOrder.push(this.data[y.dataSeriesIndexes[k]]);
                this.animatedRender && (y.targetCanvasCtx.miterLimit = e, I && c.push(I));
              }
            this.ctx.miterLimit = a;
            this.animatedRender && this._breaksCanvasCtx && c.push({ source: this._breaksCanvasCtx, dest: this.plotArea.ctx, animationCallback: L.fadeInAnimation, easingFunction: L.easing.easeInQuad, animationBase: 0, startTimePercent: 0.7 });
            this.animatedRender && 0 < this._indexLabels.length && (e = ua(this.width, this.height).getContext("2d"), za(e), c.push(this.renderIndexLabels(e)));
            var l = this;
            if (0 < c.length)
              l.disableToolTip = true, l._animator.animate(200, l.animationDuration, function(a2) {
                l.ctx.clearRect(0, 0, l.width, l.height);
                l.ctx.drawImage(b, 0, 0, Math.floor(l.width * la), Math.floor(l.height * la), 0, 0, l.width, l.height);
                for (var e2 = 0; e2 < c.length; e2++)
                  I = c[e2], 1 > a2 && "undefined" !== typeof I.startTimePercent ? a2 >= I.startTimePercent && I.animationCallback(
                    I.easingFunction(a2 - I.startTimePercent, 0, 1, 1 - I.startTimePercent),
                    I
                  ) : I.animationCallback(I.easingFunction(a2, 0, 1, 1), I);
                l.dispatchEvent("dataAnimationIterationEnd", { chart: l });
              }, function() {
                c = [];
                for (var a2 = 0; a2 < l.plotInfo.plotTypes.length; a2++)
                  for (var e2 = l.plotInfo.plotTypes[a2], f = 0; f < e2.plotUnits.length; f++) {
                    var g2 = e2.plotUnits[f];
                    g2.targetCanvas && ya(g2.targetCanvas);
                    g2.targetCanvas = null;
                  }
                b = null;
                l.disableToolTip = false;
                l.dispatchEvent("dataAnimationEnd", { chart: l });
              });
            else {
              if (l._breaksCanvas)
                if (v)
                  l.plotArea.ctx.drawImage(l._breaksCanvas, 0, 0, this.width, this.height);
                else
                  for (k = 0; k < l._axes.length; k++)
                    l._axes[k].createMask();
              0 < l._indexLabels.length && l.renderIndexLabels();
              l.dispatchEvent("dataAnimationIterationEnd", { chart: l });
              l.dispatchEvent("dataAnimationEnd", { chart: l });
            }
            this.attachPlotAreaEventHandlers();
            this.zoomEnabled || (this.panEnabled || !this._zoomButton || "none" === this._zoomButton.style.display) || wa(this._zoomButton, this._resetButton);
            n(this.toolTip._xValue) || n(this.toolTip._dataSeriesIndex) || this.toolTip.showAtX(this.toolTip._xValue, this.toolTip._dataSeriesIndex);
            this.toolTip._updateToolTip();
            this.renderCount++;
            Ha && (l = this, setTimeout(function() {
              var a2 = document.getElementById("ghostCanvasCopy");
              a2 && (Ma(a2, l.width, l.height), a2.getContext("2d").drawImage(l._eventManager.ghostCanvas, 0, 0));
            }, 2e3));
            this._breaksCanvas && (delete this._breaksCanvas, delete this._breaksCanvasCtx);
            for (k = 0; k < this._axes.length; k++)
              this._axes[k].maskCanvas && (delete this._axes[k].maskCanvas, delete this._axes[k].maskCtx);
          }
        };
        p.prototype.render = function(a) {
          a && (this.options = a);
          this._initialize();
          this.setLayout();
          this.renderElements();
          this._preRenderCanvas && ya(this._preRenderCanvas);
        };
        p.prototype.attachPlotAreaEventHandlers = function() {
          this.attachEvent({ context: this, chart: this, mousedown: this._plotAreaMouseDown, mouseup: this._plotAreaMouseUp, mousemove: this._plotAreaMouseMove, cursor: this.panEnabled ? "move" : "default", capture: true, bounds: this.plotArea });
        };
        p.prototype.categoriseDataSeries = function() {
          for (var a = "", g = 0; g < this.data.length; g++)
            if (a = this.data[g], a.dataPoints && (0 !== a.dataPoints.length && a.visible) && 0 <= p._supportedChartTypes.indexOf(a.type)) {
              for (var c = null, b = false, e = null, h = false, m = 0; m < this.plotInfo.plotTypes.length; m++)
                if (this.plotInfo.plotTypes[m].type === a.type) {
                  b = true;
                  c = this.plotInfo.plotTypes[m];
                  break;
                }
              b || (c = { type: a.type, totalDataSeries: 0, plotUnits: [] }, this.plotInfo.plotTypes.push(c));
              for (m = 0; m < c.plotUnits.length; m++)
                if (c.plotUnits[m].axisYType === a.axisYType && c.plotUnits[m].axisXType === a.axisXType && c.plotUnits[m].axisYIndex === a.axisYIndex && c.plotUnits[m].axisXIndex === a.axisXIndex) {
                  h = true;
                  e = c.plotUnits[m];
                  break;
                }
              h || (e = {
                type: a.type,
                previousDataSeriesCount: 0,
                index: c.plotUnits.length,
                plotType: c,
                axisXType: a.axisXType,
                axisYType: a.axisYType,
                axisYIndex: a.axisYIndex,
                axisXIndex: a.axisXIndex,
                axisY: "primary" === a.axisYType ? this.axisY[0 <= a.axisYIndex && a.axisYIndex < this.axisY.length ? a.axisYIndex : 0] : this.axisY2[0 <= a.axisYIndex && a.axisYIndex < this.axisY2.length ? a.axisYIndex : 0],
                axisX: "primary" === a.axisXType ? this.axisX[0 <= a.axisXIndex && a.axisXIndex < this.axisX.length ? a.axisXIndex : 0] : this.axisX2[0 <= a.axisXIndex && a.axisXIndex < this.axisX2.length ? a.axisXIndex : 0],
                dataSeriesIndexes: [],
                yTotals: [],
                yAbsTotals: []
              }, c.plotUnits.push(e));
              c.totalDataSeries++;
              e.dataSeriesIndexes.push(g);
              a.plotUnit = e;
            }
          for (g = 0; g < this.plotInfo.plotTypes.length; g++)
            for (c = this.plotInfo.plotTypes[g], m = a = 0; m < c.plotUnits.length; m++)
              c.plotUnits[m].previousDataSeriesCount = a, a += c.plotUnits[m].dataSeriesIndexes.length;
        };
        p.prototype.assignIdToDataPoints = function() {
          for (var a = 0; a < this.data.length; a++) {
            var g = this.data[a];
            if (g.dataPoints)
              for (var c = g.dataPoints.length, b = 0; b < c; b++)
                g.dataPointIds[b] = ++this._eventManager.lastObjectId;
          }
        };
        p.prototype._processData = function() {
          this.assignIdToDataPoints();
          this.categoriseDataSeries();
          for (var a = 0; a < this.plotInfo.plotTypes.length; a++)
            for (var g = this.plotInfo.plotTypes[a], c = 0; c < g.plotUnits.length; c++) {
              var b = g.plotUnits[c];
              "line" === b.type || "stepLine" === b.type || "spline" === b.type || "column" === b.type || "area" === b.type || "stepArea" === b.type || "splineArea" === b.type || "bar" === b.type || "bubble" === b.type || "scatter" === b.type ? this._processMultiseriesPlotUnit(b) : "stackedColumn" === b.type || "stackedBar" === b.type || "stackedArea" === b.type ? this._processStackedPlotUnit(b) : "stackedColumn100" === b.type || "stackedBar100" === b.type || "stackedArea100" === b.type ? this._processStacked100PlotUnit(b) : "candlestick" === b.type || "ohlc" === b.type || "rangeColumn" === b.type || "rangeBar" === b.type || "rangeArea" === b.type || "rangeSplineArea" === b.type || "error" === b.type || "boxAndWhisker" === b.type ? this._processMultiYPlotUnit(b) : "waterfall" === b.type && this._processSpecificPlotUnit(b);
            }
          this.calculateAutoBreaks();
        };
        p.prototype._processMultiseriesPlotUnit = function(a) {
          if (a.dataSeriesIndexes && !(1 > a.dataSeriesIndexes.length))
            for (var g = a.axisY.dataInfo, c = a.axisX.dataInfo, b, e, h = false, m = 0; m < a.dataSeriesIndexes.length; m++) {
              var y = this.data[a.dataSeriesIndexes[m]], I = 0, k = false, l = false, q;
              if ("normal" === y.axisPlacement || "xySwapped" === y.axisPlacement)
                var r = a.axisX.sessionVariables.newViewportMinimum ? a.axisX.sessionVariables.newViewportMinimum : a.axisX.options && a.axisX.options.viewportMinimum ? a.axisX.options.viewportMinimum : a.axisX.options && a.axisX.options.minimum ? a.axisX.options.minimum : a.axisX.logarithmic ? 0 : -Infinity, f = a.axisX.sessionVariables.newViewportMaximum ? a.axisX.sessionVariables.newViewportMaximum : a.axisX.options && a.axisX.options.viewportMaximum ? a.axisX.options.viewportMaximum : a.axisX.options && a.axisX.options.maximum ? a.axisX.options.maximum : Infinity;
              if (y.dataPoints[I].x && y.dataPoints[I].x.getTime || "dateTime" === y.xValueType)
                h = true;
              for (I = 0; I < y.dataPoints.length; I++) {
                "undefined" === typeof y.dataPoints[I].x && (y.dataPoints[I].x = I + (a.axisX.logarithmic ? 1 : 0));
                y.dataPoints[I].x.getTime ? (h = true, b = y.dataPoints[I].x.getTime()) : b = y.dataPoints[I].x;
                e = y.dataPoints[I].y;
                b < c.min && (c.min = b);
                b > c.max && (c.max = b);
                e < g.min && "number" === typeof e && (g.min = e);
                e > g.max && "number" === typeof e && (g.max = e);
                if (0 < I) {
                  if (a.axisX.logarithmic) {
                    var d2 = b / y.dataPoints[I - 1].x;
                    1 > d2 && (d2 = 1 / d2);
                    c.minDiff > d2 && 1 !== d2 && (c.minDiff = d2);
                  } else
                    d2 = b - y.dataPoints[I - 1].x, 0 > d2 && (d2 *= -1), c.minDiff > d2 && 0 !== d2 && (c.minDiff = d2);
                  null !== e && null !== y.dataPoints[I - 1].y && (a.axisY.logarithmic ? (d2 = e / y.dataPoints[I - 1].y, 1 > d2 && (d2 = 1 / d2), g.minDiff > d2 && 1 !== d2 && (g.minDiff = d2)) : (d2 = e - y.dataPoints[I - 1].y, 0 > d2 && (d2 *= -1), g.minDiff > d2 && 0 !== d2 && (g.minDiff = d2)));
                }
                if (b < r && !k)
                  null !== e && (q = b);
                else {
                  if (!k && (k = true, 0 < I)) {
                    I -= 2;
                    continue;
                  }
                  if (b > f && !l)
                    l = true;
                  else if (b > f && l)
                    continue;
                  y.dataPoints[I].label && (a.axisX.labels[b] = y.dataPoints[I].label);
                  b < c.viewPortMin && (c.viewPortMin = b);
                  b > c.viewPortMax && (c.viewPortMax = b);
                  null === e ? c.viewPortMin === b && q < b && (c.viewPortMin = q) : (e < g.viewPortMin && "number" === typeof e && (g.viewPortMin = e), e > g.viewPortMax && "number" === typeof e && (g.viewPortMax = e));
                }
              }
              y.axisX.valueType = y.xValueType = h ? "dateTime" : "number";
            }
        };
        p.prototype._processStackedPlotUnit = function(a) {
          if (a.dataSeriesIndexes && !(1 > a.dataSeriesIndexes.length)) {
            for (var g = a.axisY.dataInfo, c = a.axisX.dataInfo, b, e, h = false, m = [], y = [], I = Infinity, k = -Infinity, l = {}, q = 0; q < a.dataSeriesIndexes.length; q++) {
              var r = this.data[a.dataSeriesIndexes[q]], f = 0, d2 = false, w = false, x;
              if ("normal" === r.axisPlacement || "xySwapped" === r.axisPlacement)
                var s = a.axisX.sessionVariables.newViewportMinimum ? a.axisX.sessionVariables.newViewportMinimum : a.axisX.options && a.axisX.options.viewportMinimum ? a.axisX.options.viewportMinimum : a.axisX.options && a.axisX.options.minimum ? a.axisX.options.minimum : -Infinity, z = a.axisX.sessionVariables.newViewportMaximum ? a.axisX.sessionVariables.newViewportMaximum : a.axisX.options && a.axisX.options.viewportMaximum ? a.axisX.options.viewportMaximum : a.axisX.options && a.axisX.options.maximum ? a.axisX.options.maximum : Infinity;
              if (r.dataPoints[f].x && r.dataPoints[f].x.getTime || "dateTime" === r.xValueType)
                h = true;
              for (f = 0; f < r.dataPoints.length; f++) {
                "undefined" === typeof r.dataPoints[f].x && (r.dataPoints[f].x = f + (a.axisX.logarithmic ? 1 : 0));
                r.dataPoints[f].x.getTime ? (h = true, b = r.dataPoints[f].x.getTime()) : b = r.dataPoints[f].x;
                e = n(r.dataPoints[f].y) ? 0 : r.dataPoints[f].y;
                b < c.min && (c.min = b);
                b > c.max && (c.max = b);
                if (0 < f) {
                  if (a.axisX.logarithmic) {
                    var u = b / r.dataPoints[f - 1].x;
                    1 > u && (u = 1 / u);
                    c.minDiff > u && 1 !== u && (c.minDiff = u);
                  } else
                    u = b - r.dataPoints[f - 1].x, 0 > u && (u *= -1), c.minDiff > u && 0 !== u && (c.minDiff = u);
                  null !== e && null !== r.dataPoints[f - 1].y && (a.axisY.logarithmic ? 0 < e && (u = e / r.dataPoints[f - 1].y, 1 > u && (u = 1 / u), g.minDiff > u && 1 !== u && (g.minDiff = u)) : (u = e - r.dataPoints[f - 1].y, 0 > u && (u *= -1), g.minDiff > u && 0 !== u && (g.minDiff = u)));
                }
                if (b < s && !d2)
                  null !== r.dataPoints[f].y && (x = b);
                else {
                  if (!d2 && (d2 = true, 0 < f)) {
                    f -= 2;
                    continue;
                  }
                  if (b > z && !w)
                    w = true;
                  else if (b > z && w)
                    continue;
                  r.dataPoints[f].label && (a.axisX.labels[b] = r.dataPoints[f].label);
                  b < c.viewPortMin && (c.viewPortMin = b);
                  b > c.viewPortMax && (c.viewPortMax = b);
                  null === r.dataPoints[f].y ? c.viewPortMin === b && x < b && (c.viewPortMin = x) : (l[b] = (l[b] || 0) + r.dataPoints[f].y, r.dataPointEOs[f].cumulativeY = l[b], a.yTotals[b] = (a.yTotals[b] ? a.yTotals[b] : 0) + e, a.yAbsTotals[b] = (a.yAbsTotals[b] ? a.yAbsTotals[b] : 0) + Math.abs(e), 0 <= e ? m[b] ? m[b] += e : (m[b] = e, I = Math.min(e, I)) : y[b] ? y[b] += e : (y[b] = e, k = Math.max(e, k)));
                }
              }
              a.axisY.scaleBreaks && (a.axisY.scaleBreaks.autoCalculate && 1 <= a.axisY.scaleBreaks.maxNumberOfAutoBreaks) && (g.dataPointYPositiveSums ? (g.dataPointYPositiveSums.push.apply(g.dataPointYPositiveSums, m), g.dataPointYNegativeSums.push.apply(g.dataPointYPositiveSums, y)) : (g.dataPointYPositiveSums = m, g.dataPointYNegativeSums = y));
              r.axisX.valueType = r.xValueType = h ? "dateTime" : "number";
            }
            for (f in m)
              m.hasOwnProperty(f) && !isNaN(f) && (a = m[f], a < g.min && (g.min = Math.min(a, I)), a > g.max && (g.max = a), f < c.viewPortMin || f > c.viewPortMax || (a < g.viewPortMin && (g.viewPortMin = Math.min(a, I)), a > g.viewPortMax && (g.viewPortMax = a)));
            for (f in y)
              y.hasOwnProperty(f) && !isNaN(f) && (a = y[f], a < g.min && (g.min = a), a > g.max && (g.max = Math.max(a, k)), f < c.viewPortMin || f > c.viewPortMax || (a < g.viewPortMin && (g.viewPortMin = a), a > g.viewPortMax && (g.viewPortMax = Math.max(a, k))));
          }
        };
        p.prototype._processStacked100PlotUnit = function(a) {
          if (a.dataSeriesIndexes && !(1 > a.dataSeriesIndexes.length)) {
            for (var g = a.axisY.dataInfo, c = a.axisX.dataInfo, b, e, h = false, m = false, y = false, I = {}, k = [], l = 0; l < a.dataSeriesIndexes.length; l++) {
              var q = this.data[a.dataSeriesIndexes[l]], r = 0, f = false, d2 = false, w;
              if ("normal" === q.axisPlacement || "xySwapped" === q.axisPlacement)
                var x = a.axisX.sessionVariables.newViewportMinimum ? a.axisX.sessionVariables.newViewportMinimum : a.axisX.options && a.axisX.options.viewportMinimum ? a.axisX.options.viewportMinimum : a.axisX.options && a.axisX.options.minimum ? a.axisX.options.minimum : -Infinity, s = a.axisX.sessionVariables.newViewportMaximum ? a.axisX.sessionVariables.newViewportMaximum : a.axisX.options && a.axisX.options.viewportMaximum ? a.axisX.options.viewportMaximum : a.axisX.options && a.axisX.options.maximum ? a.axisX.options.maximum : Infinity;
              if (q.dataPoints[r].x && q.dataPoints[r].x.getTime || "dateTime" === q.xValueType)
                h = true;
              for (r = 0; r < q.dataPoints.length; r++) {
                "undefined" === typeof q.dataPoints[r].x && (q.dataPoints[r].x = r + (a.axisX.logarithmic ? 1 : 0));
                q.dataPoints[r].x.getTime ? (h = true, b = q.dataPoints[r].x.getTime()) : b = q.dataPoints[r].x;
                e = n(q.dataPoints[r].y) ? null : q.dataPoints[r].y;
                b < c.min && (c.min = b);
                b > c.max && (c.max = b);
                if (0 < r) {
                  if (a.axisX.logarithmic) {
                    var z = b / q.dataPoints[r - 1].x;
                    1 > z && (z = 1 / z);
                    c.minDiff > z && 1 !== z && (c.minDiff = z);
                  } else
                    z = b - q.dataPoints[r - 1].x, 0 > z && (z *= -1), c.minDiff > z && 0 !== z && (c.minDiff = z);
                  n(e) || null === q.dataPoints[r - 1].y || (a.axisY.logarithmic ? 0 < e && (z = e / q.dataPoints[r - 1].y, 1 > z && (z = 1 / z), g.minDiff > z && 1 !== z && (g.minDiff = z)) : (z = e - q.dataPoints[r - 1].y, 0 > z && (z *= -1), g.minDiff > z && 0 !== z && (g.minDiff = z)));
                }
                if (b < x && !f)
                  null !== e && (w = b);
                else {
                  if (!f && (f = true, 0 < r)) {
                    r -= 2;
                    continue;
                  }
                  if (b > s && !d2)
                    d2 = true;
                  else if (b > s && d2)
                    continue;
                  q.dataPoints[r].label && (a.axisX.labels[b] = q.dataPoints[r].label);
                  b < c.viewPortMin && (c.viewPortMin = b);
                  b > c.viewPortMax && (c.viewPortMax = b);
                  null === e ? c.viewPortMin === b && w < b && (c.viewPortMin = w) : (I[b] = (I[b] || 0) + q.dataPoints[r].y, q.dataPointEOs[r].cumulativeY = I[b], a.yTotals[b] = (a.yTotals[b] ? a.yTotals[b] : 0) + e, a.yAbsTotals[b] = (a.yAbsTotals[b] ? a.yAbsTotals[b] : 0) + Math.abs(e), 0 <= e ? m = true : 0 > e && (y = true), k[b] = k[b] ? k[b] + Math.abs(e) : Math.abs(e));
                }
              }
              q.axisX.valueType = q.xValueType = h ? "dateTime" : "number";
            }
            a.axisY.logarithmic ? (g.max = n(g.viewPortMax) ? 99 * Math.pow(a.axisY.logarithmBase, -0.05) : Math.max(g.viewPortMax, 99 * Math.pow(a.axisY.logarithmBase, -0.05)), g.min = n(g.viewPortMin) ? 1 : Math.min(g.viewPortMin, 1)) : m && !y ? (g.max = n(g.viewPortMax) ? 99 : Math.max(g.viewPortMax, 99), g.min = n(g.viewPortMin) ? 1 : Math.min(g.viewPortMin, 1)) : m && y ? (g.max = n(g.viewPortMax) ? 99 : Math.max(g.viewPortMax, 99), g.min = n(g.viewPortMin) ? -99 : Math.min(g.viewPortMin, -99)) : !m && y && (g.max = n(g.viewPortMax) ? -1 : Math.max(
              g.viewPortMax,
              -1
            ), g.min = n(g.viewPortMin) ? -99 : Math.min(g.viewPortMin, -99));
            g.viewPortMin = g.min;
            g.viewPortMax = g.max;
            a.dataPointYSums = k;
          }
        };
        p.prototype._processMultiYPlotUnit = function(a) {
          if (a.dataSeriesIndexes && !(1 > a.dataSeriesIndexes.length))
            for (var g = a.axisY.dataInfo, c = a.axisX.dataInfo, b, e, h, m, y = false, I = 0; I < a.dataSeriesIndexes.length; I++) {
              var k = this.data[a.dataSeriesIndexes[I]], l = 0, q = false, r = false, f, d2, n2;
              if ("normal" === k.axisPlacement || "xySwapped" === k.axisPlacement)
                var x = a.axisX.sessionVariables.newViewportMinimum ? a.axisX.sessionVariables.newViewportMinimum : a.axisX.options && a.axisX.options.viewportMinimum ? a.axisX.options.viewportMinimum : a.axisX.options && a.axisX.options.minimum ? a.axisX.options.minimum : a.axisX.logarithmic ? 0 : -Infinity, s = a.axisX.sessionVariables.newViewportMaximum ? a.axisX.sessionVariables.newViewportMaximum : a.axisX.options && a.axisX.options.viewportMaximum ? a.axisX.options.viewportMaximum : a.axisX.options && a.axisX.options.maximum ? a.axisX.options.maximum : Infinity;
              if (k.dataPoints[l].x && k.dataPoints[l].x.getTime || "dateTime" === k.xValueType)
                y = true;
              for (l = 0; l < k.dataPoints.length; l++) {
                "undefined" === typeof k.dataPoints[l].x && (k.dataPoints[l].x = l + (a.axisX.logarithmic ? 1 : 0));
                k.dataPoints[l].x.getTime ? (y = true, b = k.dataPoints[l].x.getTime()) : b = k.dataPoints[l].x;
                if ((e = k.dataPoints[l].y) && e.length) {
                  h = Math.min.apply(null, e);
                  m = Math.max.apply(null, e);
                  d2 = true;
                  for (var z = 0; z < e.length; z++)
                    null === e.k && (d2 = false);
                  d2 && (q || (n2 = f), f = b);
                }
                b < c.min && (c.min = b);
                b > c.max && (c.max = b);
                h < g.min && (g.min = h);
                m > g.max && (g.max = m);
                0 < l && (a.axisX.logarithmic ? (d2 = b / k.dataPoints[l - 1].x, 1 > d2 && (d2 = 1 / d2), c.minDiff > d2 && 1 !== d2 && (c.minDiff = d2)) : (d2 = b - k.dataPoints[l - 1].x, 0 > d2 && (d2 *= -1), c.minDiff > d2 && 0 !== d2 && (c.minDiff = d2)), e && (null !== e[0] && k.dataPoints[l - 1].y && null !== k.dataPoints[l - 1].y[0]) && (a.axisY.logarithmic ? (d2 = e[0] / k.dataPoints[l - 1].y[0], 1 > d2 && (d2 = 1 / d2), g.minDiff > d2 && 1 !== d2 && (g.minDiff = d2)) : (d2 = e[0] - k.dataPoints[l - 1].y[0], 0 > d2 && (d2 *= -1), g.minDiff > d2 && 0 !== d2 && (g.minDiff = d2))));
                if (!(b < x) || q) {
                  if (!q && (q = true, 0 < l)) {
                    l -= 2;
                    f = n2;
                    continue;
                  }
                  if (b > s && !r)
                    r = true;
                  else if (b > s && r)
                    continue;
                  k.dataPoints[l].label && (a.axisX.labels[b] = k.dataPoints[l].label);
                  b < c.viewPortMin && (c.viewPortMin = b);
                  b > c.viewPortMax && (c.viewPortMax = b);
                  if (c.viewPortMin === b && e) {
                    for (z = 0; z < e.length; z++)
                      if (null === e[z] && f < b) {
                        c.viewPortMin = f;
                        break;
                      }
                  }
                  null === e ? c.viewPortMin === b && f < b && (c.viewPortMin = f) : (h < g.viewPortMin && (g.viewPortMin = h), m > g.viewPortMax && (g.viewPortMax = m));
                }
              }
              k.axisX.valueType = k.xValueType = y ? "dateTime" : "number";
            }
        };
        p.prototype._processSpecificPlotUnit = function(a) {
          if ("waterfall" === a.type && a.dataSeriesIndexes && !(1 > a.dataSeriesIndexes.length))
            for (var g = a.axisY.dataInfo, c = a.axisX.dataInfo, b, e, h = false, m = 0; m < a.dataSeriesIndexes.length; m++) {
              var y = this.data[a.dataSeriesIndexes[m]], d2 = 0, k = false, l = false, q = b = 0;
              if ("normal" === y.axisPlacement || "xySwapped" === y.axisPlacement)
                var r = a.axisX.sessionVariables.newViewportMinimum ? a.axisX.sessionVariables.newViewportMinimum : a.axisX.options && a.axisX.options.viewportMinimum ? a.axisX.options.viewportMinimum : a.axisX.options && a.axisX.options.minimum ? a.axisX.options.minimum : a.axisX.logarithmic ? 0 : -Infinity, f = a.axisX.sessionVariables.newViewportMaximum ? a.axisX.sessionVariables.newViewportMaximum : a.axisX.options && a.axisX.options.viewportMaximum ? a.axisX.options.viewportMaximum : a.axisX.options && a.axisX.options.maximum ? a.axisX.options.maximum : Infinity;
              if (y.dataPoints[d2].x && y.dataPoints[d2].x.getTime || "dateTime" === y.xValueType)
                h = true;
              for (d2 = 0; d2 < y.dataPoints.length; d2++)
                "undefined" !== typeof y.dataPoints[d2].isCumulativeSum && true === y.dataPoints[d2].isCumulativeSum ? (y.dataPointEOs[d2].cumulativeSumYStartValue = 0, y.dataPointEOs[d2].cumulativeSum = 0 === d2 ? 0 : y.dataPointEOs[d2 - 1].cumulativeSum, y.dataPoints[d2].y = 0 === d2 ? 0 : y.dataPointEOs[d2 - 1].cumulativeSum) : "undefined" !== typeof y.dataPoints[d2].isIntermediateSum && true === y.dataPoints[d2].isIntermediateSum ? (y.dataPointEOs[d2].cumulativeSumYStartValue = q, y.dataPointEOs[d2].cumulativeSum = 0 === d2 ? 0 : y.dataPointEOs[d2 - 1].cumulativeSum, y.dataPoints[d2].y = 0 === d2 ? 0 : b, q = 0 === d2 ? 0 : y.dataPointEOs[d2 - 1].cumulativeSum, b = 0) : (e = "number" !== typeof y.dataPoints[d2].y ? 0 : y.dataPoints[d2].y, y.dataPointEOs[d2].cumulativeSumYStartValue = 0 === d2 ? 0 : y.dataPointEOs[d2 - 1].cumulativeSum, y.dataPointEOs[d2].cumulativeSum = 0 === d2 ? e : y.dataPointEOs[d2 - 1].cumulativeSum + e, b += e);
              for (d2 = 0; d2 < y.dataPoints.length; d2++)
                if ("undefined" === typeof y.dataPoints[d2].x && (y.dataPoints[d2].x = d2 + (a.axisX.logarithmic ? 1 : 0)), y.dataPoints[d2].x.getTime ? (h = true, b = y.dataPoints[d2].x.getTime()) : b = y.dataPoints[d2].x, e = y.dataPoints[d2].y, b < c.min && (c.min = b), b > c.max && (c.max = b), y.dataPointEOs[d2].cumulativeSum < g.min && (g.min = y.dataPointEOs[d2].cumulativeSum), y.dataPointEOs[d2].cumulativeSum > g.max && (g.max = y.dataPointEOs[d2].cumulativeSum), 0 < d2 && (a.axisX.logarithmic ? (q = b / y.dataPoints[d2 - 1].x, 1 > q && (q = 1 / q), c.minDiff > q && 1 !== q && (c.minDiff = q)) : (q = b - y.dataPoints[d2 - 1].x, 0 > q && (q *= -1), c.minDiff > q && 0 !== q && (c.minDiff = q)), null !== e && null !== y.dataPoints[d2 - 1].y && (a.axisY.logarithmic ? (e = y.dataPointEOs[d2].cumulativeSum / y.dataPointEOs[d2 - 1].cumulativeSum, 1 > e && (e = 1 / e), g.minDiff > e && 1 !== e && (g.minDiff = e)) : (e = y.dataPointEOs[d2].cumulativeSum - y.dataPointEOs[d2 - 1].cumulativeSum, 0 > e && (e *= -1), g.minDiff > e && 0 !== e && (g.minDiff = e)))), !(b < r) || k) {
                  if (!k && (k = true, 0 < d2)) {
                    d2 -= 2;
                    continue;
                  }
                  if (b > f && !l)
                    l = true;
                  else if (b > f && l)
                    continue;
                  y.dataPoints[d2].label && (a.axisX.labels[b] = y.dataPoints[d2].label);
                  b < c.viewPortMin && (c.viewPortMin = b);
                  b > c.viewPortMax && (c.viewPortMax = b);
                  0 < d2 && (y.dataPointEOs[d2 - 1].cumulativeSum < g.viewPortMin && (g.viewPortMin = y.dataPointEOs[d2 - 1].cumulativeSum), y.dataPointEOs[d2 - 1].cumulativeSum > g.viewPortMax && (g.viewPortMax = y.dataPointEOs[d2 - 1].cumulativeSum));
                  y.dataPointEOs[d2].cumulativeSum < g.viewPortMin && (g.viewPortMin = y.dataPointEOs[d2].cumulativeSum);
                  y.dataPointEOs[d2].cumulativeSum > g.viewPortMax && (g.viewPortMax = y.dataPointEOs[d2].cumulativeSum);
                }
              y.axisX.valueType = y.xValueType = h ? "dateTime" : "number";
            }
        };
        p.prototype.calculateAutoBreaks = function() {
          function a(a2, b2, c2, e2) {
            if (e2)
              return c2 = Math.pow(Math.min(c2 * a2 / b2, b2 / a2), 0.2), 1 >= c2 && (c2 = Math.pow(1 > a2 ? 1 / a2 : Math.min(b2 / a2, a2), 0.25)), { startValue: a2 * c2, endValue: b2 / c2 };
            c2 = 0.2 * Math.min(c2 - b2 + a2, b2 - a2);
            0 >= c2 && (c2 = 0.25 * Math.min(b2 - a2, Math.abs(a2)));
            return { startValue: a2 + c2, endValue: b2 - c2 };
          }
          function g(a2) {
            if (a2.dataSeriesIndexes && !(1 > a2.dataSeriesIndexes.length)) {
              var b2 = a2.axisX.scaleBreaks && a2.axisX.scaleBreaks.autoCalculate && 1 <= a2.axisX.scaleBreaks.maxNumberOfAutoBreaks, c2 = a2.axisY.scaleBreaks && a2.axisY.scaleBreaks.autoCalculate && 1 <= a2.axisY.scaleBreaks.maxNumberOfAutoBreaks;
              if (b2 || c2)
                for (var f2 = a2.axisY.dataInfo, g2 = a2.axisX.dataInfo, h2, m2 = g2.min, k2 = g2.max, l2 = f2.min, q2 = f2.max, g2 = g2._dataRanges, f2 = f2._dataRanges, r2, y2 = 0, d3 = 0; d3 < a2.dataSeriesIndexes.length; d3++) {
                  var I = e.data[a2.dataSeriesIndexes[d3]];
                  if (!(4 > I.dataPoints.length)) {
                    for (y2 = 0; y2 < I.dataPoints.length; y2++)
                      if (b2 && (r2 = (k2 + 1 - m2) * Math.max(parseFloat(a2.axisX.scaleBreaks.collapsibleThreshold) || 10, 10) / 100, h2 = I.dataPoints[y2].x.getTime ? I.dataPoints[y2].x.getTime() : I.dataPoints[y2].x, r2 = Math.floor((h2 - m2) / r2), h2 < g2[r2].min && (g2[r2].min = h2), h2 > g2[r2].max && (g2[r2].max = h2)), c2) {
                        var v2 = (q2 + 1 - l2) * Math.max(parseFloat(a2.axisY.scaleBreaks.collapsibleThreshold) || 10, 10) / 100;
                        if ((h2 = "waterfall" === a2.type ? I.dataPointEOs[y2].cumulativeSum : I.dataPoints[y2].y) && h2.length)
                          for (var p2 = 0; p2 < h2.length; p2++)
                            r2 = Math.floor((h2[p2] - l2) / v2), h2[p2] < f2[r2].min && (f2[r2].min = h2[p2]), h2[p2] > f2[r2].max && (f2[r2].max = h2[p2]);
                        else
                          n(h2) || (r2 = Math.floor((h2 - l2) / v2), h2 < f2[r2].min && (f2[r2].min = h2), h2 > f2[r2].max && (f2[r2].max = h2));
                      }
                  }
                }
            }
          }
          function c(a2) {
            if (a2.dataSeriesIndexes && !(1 > a2.dataSeriesIndexes.length) && a2.axisX.scaleBreaks && a2.axisX.scaleBreaks.autoCalculate && 1 <= a2.axisX.scaleBreaks.maxNumberOfAutoBreaks)
              for (var b2 = a2.axisX.dataInfo, c2 = b2.min, f2 = b2.max, g2 = b2._dataRanges, h2, m2 = 0, k2 = 0; k2 < a2.dataSeriesIndexes.length; k2++) {
                var l2 = e.data[a2.dataSeriesIndexes[k2]];
                if (!(4 > l2.dataPoints.length))
                  for (m2 = 0; m2 < l2.dataPoints.length; m2++)
                    h2 = (f2 + 1 - c2) * Math.max(parseFloat(a2.axisX.scaleBreaks.collapsibleThreshold) || 10, 10) / 100, b2 = l2.dataPoints[m2].x.getTime ? l2.dataPoints[m2].x.getTime() : l2.dataPoints[m2].x, h2 = Math.floor((b2 - c2) / h2), b2 < g2[h2].min && (g2[h2].min = b2), b2 > g2[h2].max && (g2[h2].max = b2);
              }
          }
          for (var b, e = this, h = false, m = 0; m < this._axes.length; m++)
            if (this._axes[m].scaleBreaks && this._axes[m].scaleBreaks.autoCalculate && 1 <= this._axes[m].scaleBreaks.maxNumberOfAutoBreaks) {
              h = true;
              this._axes[m].dataInfo._dataRanges = [];
              for (var y = 0; y < 100 / Math.max(parseFloat(this._axes[m].scaleBreaks.collapsibleThreshold) || 10, 10); y++)
                this._axes[m].dataInfo._dataRanges.push({ min: Infinity, max: -Infinity });
            }
          if (h) {
            for (m = 0; m < this.plotInfo.plotTypes.length; m++)
              for (h = this.plotInfo.plotTypes[m], y = 0; y < h.plotUnits.length; y++)
                b = h.plotUnits[y], "line" === b.type || "stepLine" === b.type || "spline" === b.type || "column" === b.type || "area" === b.type || "stepArea" === b.type || "splineArea" === b.type || "bar" === b.type || "bubble" === b.type || "scatter" === b.type || "candlestick" === b.type || "ohlc" === b.type || "rangeColumn" === b.type || "rangeBar" === b.type || "rangeArea" === b.type || "rangeSplineArea" === b.type || "waterfall" === b.type || "error" === b.type || "boxAndWhisker" === b.type ? g(b) : 0 <= b.type.indexOf("stacked") && c(b);
            for (m = 0; m < this._axes.length; m++)
              if (this._axes[m].dataInfo._dataRanges) {
                var d2 = this._axes[m].dataInfo.min;
                b = (this._axes[m].dataInfo.max + 1 - d2) * Math.max(parseFloat(this._axes[m].scaleBreaks.collapsibleThreshold) || 10, 10) / 100;
                var k = this._axes[m].dataInfo._dataRanges, l, q, h = [];
                if (this._axes[m].dataInfo.dataPointYPositiveSums) {
                  var r = this._axes[m].dataInfo.dataPointYPositiveSums;
                  l = k;
                  for (y in r)
                    if (r.hasOwnProperty(y) && !isNaN(y) && (q = r[y], !n(q))) {
                      var f = Math.floor((q - d2) / b);
                      q < l[f].min && (l[f].min = q);
                      q > l[f].max && (l[f].max = q);
                    }
                  delete this._axes[m].dataInfo.dataPointYPositiveSums;
                }
                if (this._axes[m].dataInfo.dataPointYNegativeSums) {
                  r = this._axes[m].dataInfo.dataPointYNegativeSums;
                  l = k;
                  for (y in r)
                    r.hasOwnProperty(y) && !isNaN(y) && (q = -1 * r[y], n(q) || (f = Math.floor((q - d2) / b), q < l[f].min && (l[f].min = q), q > l[f].max && (l[f].max = q)));
                  delete this._axes[m].dataInfo.dataPointYNegativeSums;
                }
                for (y = 0; y < k.length - 1; y++)
                  if (l = k[y].max, isFinite(l))
                    for (; y < k.length - 1; )
                      if (d2 = k[y + 1].min, isFinite(d2)) {
                        q = d2 - l;
                        q > b && h.push({ diff: q, start: l, end: d2 });
                        break;
                      } else
                        y++;
                if (this._axes[m].scaleBreaks.customBreaks) {
                  for (y = 0; y < this._axes[m].scaleBreaks.customBreaks.length; y++)
                    for (b = 0; b < h.length; b++)
                      if (this._axes[m].scaleBreaks.customBreaks[y].startValue <= h[b].start && h[b].start <= this._axes[m].scaleBreaks.customBreaks[y].endValue || this._axes[m].scaleBreaks.customBreaks[y].startValue <= h[b].start && h[b].start <= this._axes[m].scaleBreaks.customBreaks[y].endValue || h[b].start <= this._axes[m].scaleBreaks.customBreaks[y].startValue && this._axes[m].scaleBreaks.customBreaks[y].startValue <= h[b].end || h[b].start <= this._axes[m].scaleBreaks.customBreaks[y].endValue && this._axes[m].scaleBreaks.customBreaks[y].endValue <= h[b].end)
                        h.splice(b, 1), b--;
                }
                h.sort(function(a2, b2) {
                  return b2.diff - a2.diff;
                });
                for (y = 0; y < Math.min(h.length, this._axes[m].scaleBreaks.maxNumberOfAutoBreaks); y++)
                  b = a(h[y].start, h[y].end, this._axes[m].logarithmic ? this._axes[m].dataInfo.max / this._axes[m].dataInfo.min : this._axes[m].dataInfo.max - this._axes[m].dataInfo.min, this._axes[m].logarithmic), this._axes[m].scaleBreaks.autoBreaks.push(new ca2(this, "autoBreaks", b, y, ++this._eventManager.lastObjectId, this._axes[m].scaleBreaks)), this._axes[m].scaleBreaks._appliedBreaks.push(this._axes[m].scaleBreaks.autoBreaks[this._axes[m].scaleBreaks.autoBreaks.length - 1]);
                this._axes[m].scaleBreaks._appliedBreaks.sort(function(a2, b2) {
                  return a2.startValue - b2.startValue;
                });
              }
          }
        };
        p.prototype.renderCrosshairs = function(a) {
          for (var g = 0; g < this.axisX.length; g++)
            this.axisX[g] != a && (this.axisX[g].crosshair && this.axisX[g].crosshair.enabled && !this.axisX[g].crosshair._hidden) && this.axisX[g].showCrosshair(this.axisX[g].crosshair._updatedValue);
          for (g = 0; g < this.axisX2.length; g++)
            this.axisX2[g] != a && (this.axisX2[g].crosshair && this.axisX2[g].crosshair.enabled && !this.axisX2[g].crosshair._hidden) && this.axisX2[g].showCrosshair(this.axisX2[g].crosshair._updatedValue);
          for (g = 0; g < this.axisY.length; g++)
            this.axisY[g] != a && (this.axisY[g].crosshair && this.axisY[g].crosshair.enabled && !this.axisY[g].crosshair._hidden) && this.axisY[g].showCrosshair(this.axisY[g].crosshair._updatedValue);
          for (g = 0; g < this.axisY2.length; g++)
            this.axisY2[g] != a && (this.axisY2[g].crosshair && this.axisY2[g].crosshair.enabled && !this.axisY2[g].crosshair._hidden) && this.axisY2[g].showCrosshair(this.axisY2[g].crosshair._updatedValue);
        };
        p.prototype.getDataPointAtXY = function(a, g, c) {
          c = c || false;
          for (var b = [], e = this._dataInRenderedOrder.length - 1; 0 <= e; e--) {
            var h = null;
            (h = this._dataInRenderedOrder[e].getDataPointAtXY(a, g, c)) && b.push(h);
          }
          a = null;
          g = false;
          for (c = 0; c < b.length; c++)
            if ("line" === b[c].dataSeries.type || "stepLine" === b[c].dataSeries.type || "area" === b[c].dataSeries.type || "stepArea" === b[c].dataSeries.type) {
              if (e = ma("markerSize", b[c].dataPoint, b[c].dataSeries) || 8, b[c].distance <= e / 2) {
                g = true;
                break;
              }
            }
          for (c = 0; c < b.length; c++)
            g && "line" !== b[c].dataSeries.type && "stepLine" !== b[c].dataSeries.type && "area" !== b[c].dataSeries.type && "stepArea" !== b[c].dataSeries.type || (a ? b[c].distance <= a.distance && (a = b[c]) : a = b[c]);
          return a;
        };
        p.prototype.getObjectAtXY = function(a, g, c) {
          var b = null;
          if (c = this.getDataPointAtXY(a, g, c || false))
            b = c.dataSeries.dataPointIds[c.dataPointIndex];
          else if (v)
            b = ab(a, g, this._eventManager.ghostCtx);
          else
            for (c = 0; c < this.legend.items.length; c++) {
              var e = this.legend.items[c];
              a >= e.x1 && (a <= e.x2 && g >= e.y1 && g <= e.y2) && (b = e.id);
            }
          return b;
        };
        p.prototype.getAutoFontSize = nb;
        p.prototype.resetOverlayedCanvas = function() {
          this.overlaidCanvasCtx.clearRect(0, 0, this.width, this.height);
        };
        p.prototype.clearCanvas = mb;
        p.prototype.attachEvent = function(a) {
          this._events.push(a);
        };
        p.prototype._touchEventHandler = function(a) {
          if (a.changedTouches && this.interactivityEnabled) {
            var g = [], c = a.changedTouches, b = c ? c[0] : a, e = null;
            switch (a.type) {
              case "touchstart":
              case "MSPointerDown":
                g = ["mousemove", "mousedown"];
                this._lastTouchData = Pa(b);
                this._lastTouchData.time = /* @__PURE__ */ new Date();
                break;
              case "touchmove":
              case "MSPointerMove":
                g = ["mousemove"];
                break;
              case "touchend":
              case "MSPointerUp":
                var h = this._lastTouchData && this._lastTouchData.time ? /* @__PURE__ */ new Date() - this._lastTouchData.time : 0, g = "touchstart" === this._lastTouchEventType || "MSPointerDown" === this._lastTouchEventType || 300 > h ? ["mouseup", "click"] : ["mouseup"];
                break;
              default:
                return;
            }
            if (!(c && 1 < c.length)) {
              e = Pa(b);
              e.time = /* @__PURE__ */ new Date();
              try {
                var m = e.y - this._lastTouchData.y, h = e.time - this._lastTouchData.time;
                if (1 < Math.abs(m) && this._lastTouchData.scroll || 5 < Math.abs(m) && 250 > h)
                  this._lastTouchData.scroll = true;
              } catch (y) {
              }
              this._lastTouchEventType = a.type;
              if (this._lastTouchData.scroll && this.zoomEnabled)
                this.isDrag && this.resetOverlayedCanvas(), this.isDrag = false;
              else
                for (c = 0; c < g.length; c++)
                  if (e = g[c], m = document.createEvent("MouseEvent"), m.initMouseEvent(
                    e,
                    true,
                    true,
                    window,
                    1,
                    b.screenX,
                    b.screenY,
                    b.clientX,
                    b.clientY,
                    false,
                    false,
                    false,
                    false,
                    0,
                    null
                  ), b.target.dispatchEvent(m), !n(this._lastTouchData.scroll) && !this._lastTouchData.scroll || !this._lastTouchData.scroll && 250 < h || "click" === e)
                    a.preventManipulation && a.preventManipulation(), a.preventDefault && a.cancelable && a.preventDefault();
            }
          }
        };
        p.prototype._dispatchRangeEvent = function(a, g) {
          var c = { chart: this };
          c.type = a;
          c.trigger = g;
          var b = [];
          this.axisX && 0 < this.axisX.length && b.push("axisX");
          this.axisX2 && 0 < this.axisX2.length && b.push("axisX2");
          this.axisY && 0 < this.axisY.length && b.push("axisY");
          this.axisY2 && 0 < this.axisY2.length && b.push("axisY2");
          for (var e = 0; e < b.length; e++)
            if (n(c[b[e]]) && (c[b[e]] = []), "axisY" === b[e])
              for (var h = 0; h < this.axisY.length; h++)
                c[b[e]].push({ viewportMinimum: this[b[e]][h].sessionVariables.newViewportMinimum, viewportMaximum: this[b[e]][h].sessionVariables.newViewportMaximum });
            else if ("axisY2" === b[e])
              for (h = 0; h < this.axisY2.length; h++)
                c[b[e]].push({ viewportMinimum: this[b[e]][h].sessionVariables.newViewportMinimum, viewportMaximum: this[b[e]][h].sessionVariables.newViewportMaximum });
            else if ("axisX" === b[e])
              for (h = 0; h < this.axisX.length; h++)
                c[b[e]].push({ viewportMinimum: this[b[e]][h].sessionVariables.newViewportMinimum, viewportMaximum: this[b[e]][h].sessionVariables.newViewportMaximum });
            else if ("axisX2" === b[e])
              for (h = 0; h < this.axisX2.length; h++)
                c[b[e]].push({ viewportMinimum: this[b[e]][h].sessionVariables.newViewportMinimum, viewportMaximum: this[b[e]][h].sessionVariables.newViewportMaximum });
          this.dispatchEvent(a, c, this);
        };
        p.prototype._mouseEventHandler = function(a) {
          function g() {
            p.capturedEventParam && (e = p.capturedEventParam, m = e.bounds, "mouseup" === b && (p.capturedEventParam = null, e.chart.overlaidCanvas.releaseCapture ? e.chart.overlaidCanvas.releaseCapture() : document.documentElement.removeEventListener("mouseup", e.chart._mouseEventHandler, false)), e.hasOwnProperty(b) && ("mouseup" !== b || e.chart.overlaidCanvas.releaseCapture ? a.target !== e.chart.overlaidCanvas && v || e[b].call(e.context, c.x, c.y) : a.target !== e.chart.overlaidCanvas && (e.chart.isDrag = false)));
          }
          "undefined" === typeof a.target && a.srcElement && (a.target = a.srcElement);
          var c = Pa(a), b = a.type, e, h;
          a.which ? h = 3 == a.which : a.button && (h = 2 == a.button);
          if (this._ignoreNextEvent)
            g(), this._ignoreNextEvent = false;
          else if (g(), this.interactivityEnabled) {
            a.preventManipulation && a.preventManipulation();
            a.preventDefault && a.preventDefault();
            var m;
            Ha && window.console && (window.console.log(b + " --> x: " + c.x + "; y:" + c.y), h && window.console.log(a.which), "mouseup" === b && window.console.log("mouseup"));
            if (!h) {
              if (!p.capturedEventParam && this._events) {
                for (h = 0; h < this._events.length; h++)
                  if (this._events[h].hasOwnProperty(b))
                    if (e = this._events[h], m = e.bounds, c.x >= m.x1 && c.x <= m.x2 && c.y >= m.y1 && c.y <= m.y2) {
                      e[b].call(e.context, c.x, c.y);
                      "mousedown" === b && true === e.capture ? (p.capturedEventParam = e, this.overlaidCanvas.setCapture ? this.overlaidCanvas.setCapture() : document.documentElement.addEventListener("mouseup", this._mouseEventHandler, false)) : "mouseup" === b && (e.chart.overlaidCanvas.releaseCapture ? e.chart.overlaidCanvas.releaseCapture() : document.documentElement.removeEventListener("mouseup", this._mouseEventHandler, false));
                      break;
                    } else
                      e = null;
                a.target.style.cursor = e && e.cursor ? e.cursor : this._defaultCursor;
              }
              h = this.plotArea;
              if (c.x < h.x1 || c.x > h.x2 || c.y < h.y1 || c.y > h.y2) {
                this.toolTip && this.toolTip.enabled ? (this.toolTip.hide(), this.toolTip.dispatchEvent("hidden", { chart: this, toolTip: this.toolTip }, this.toolTip)) : this.resetOverlayedCanvas();
                for (h = 0; h < this.axisX.length; h++)
                  this.axisX[h].crosshair && this.axisX[h].crosshair.enabled && (this.axisX[h].crosshair.hide(), this.axisX[h].crosshair.dispatchEvent("hidden", { chart: this, axis: this.axisX[h].options }, this.axisX[h].crosshair));
                for (h = 0; h < this.axisX2.length; h++)
                  this.axisX2[h].crosshair && this.axisX2[h].crosshair.enabled && (this.axisX2[h].crosshair.hide(), this.axisX2[h].crosshair.dispatchEvent("hidden", { chart: this, axis: this.axisX2[h].options }, this.axisX2[h].crosshair));
                for (h = 0; h < this.axisY.length; h++)
                  this.axisY[h].crosshair && this.axisY[h].crosshair.enabled && (this.axisY[h].crosshair.hide(), this.axisY[h].crosshair.dispatchEvent("hidden", { chart: this, axis: this.axisY[h].options }, this.axisY[h].crosshair));
                for (h = 0; h < this.axisY2.length; h++)
                  this.axisY2[h].crosshair && this.axisY2[h].crosshair.enabled && (this.axisY2[h].crosshair.hide(), this.axisY2[h].crosshair.dispatchEvent("hidden", { chart: this, axis: this.axisY2[h].options }, this.axisY2[h].crosshair));
              }
              this.isDrag && this.zoomEnabled || !this._eventManager || this._eventManager.mouseEventHandler(a);
            }
          }
        };
        p.prototype._plotAreaMouseDown = function(a, g) {
          this.isDrag = true;
          this.dragStartPoint = { x: a, y: g };
        };
        p.prototype._plotAreaMouseUp = function(a, g) {
          if (("normal" === this.plotInfo.axisPlacement || "xySwapped" === this.plotInfo.axisPlacement) && this.isDrag) {
            var c = g - this.dragStartPoint.y, b = a - this.dragStartPoint.x, e = 0 <= this.zoomType.indexOf("x"), h = 0 <= this.zoomType.indexOf("y"), m = false;
            this.resetOverlayedCanvas();
            if ("xySwapped" === this.plotInfo.axisPlacement)
              var y = h, h = e, e = y;
            if (this.panEnabled || this.zoomEnabled) {
              if (this.panEnabled)
                for (e = h = 0; e < this._axes.length; e++)
                  c = this._axes[e], c.logarithmic ? c.viewportMinimum < c.minimum ? (h = c.minimum / c.viewportMinimum, c.sessionVariables.newViewportMinimum = c.viewportMinimum * h, c.sessionVariables.newViewportMaximum = c.viewportMaximum * h, m = true) : c.viewportMaximum > c.maximum && (h = c.viewportMaximum / c.maximum, c.sessionVariables.newViewportMinimum = c.viewportMinimum / h, c.sessionVariables.newViewportMaximum = c.viewportMaximum / h, m = true) : c.viewportMinimum < c.minimum ? (h = c.minimum - c.viewportMinimum, c.sessionVariables.newViewportMinimum = c.viewportMinimum + h, c.sessionVariables.newViewportMaximum = c.viewportMaximum + h, m = true) : c.viewportMaximum > c.maximum && (h = c.viewportMaximum - c.maximum, c.sessionVariables.newViewportMinimum = c.viewportMinimum - h, c.sessionVariables.newViewportMaximum = c.viewportMaximum - h, m = true);
              else if ((!e || 2 < Math.abs(b)) && (!h || 2 < Math.abs(c)) && this.zoomEnabled) {
                if (!this.dragStartPoint)
                  return;
                c = e ? this.dragStartPoint.x : this.plotArea.x1;
                b = h ? this.dragStartPoint.y : this.plotArea.y1;
                e = e ? a : this.plotArea.x2;
                h = h ? g : this.plotArea.y2;
                2 < Math.abs(c - e) && 2 < Math.abs(b - h) && this._zoomPanToSelectedRegion(c, b, e, h) && (m = true);
              }
              m && (this._ignoreNextEvent = true, this._dispatchRangeEvent("rangeChanging", "zoom"), this.stockChart && (this.stockChart.navigator && this.stockChart.navigator.enabled) && (this.stockChart._rangeEventParameter || (this.stockChart._rangeEventParameter = { stockChart: this.stockChart, source: "chart", index: this.stockChart.charts.indexOf(this), minimum: this.stockChart.sessionVariables._axisXMin, maximum: this.stockChart.sessionVariables._axisXMax }), this.stockChart._rangeEventParameter.type = "rangeChanging", this.stockChart.dispatchEvent("rangeChanging", this.stockChart._rangeEventParameter, this.stockChart)), this.render(), this._dispatchRangeEvent("rangeChanged", "zoom"), this.stockChart && (this.stockChart.rangeUpdatedBy = "chart", this.stockChart.navigator && this.stockChart.navigator.enabled && (this.stockChart._rangeEventParameter.type = "rangeChanged", this.stockChart.dispatchEvent("rangeChanged", this.stockChart._rangeEventParameter, this.stockChart))), m && (this.zoomEnabled && "none" === this._zoomButton.style.display) && (La(this._zoomButton, this._resetButton), ta(this, this._zoomButton, "pan"), ta(this, this._resetButton, "reset")));
            }
          }
          this.isDrag = false;
          if ("none" !== this.plotInfo.axisPlacement) {
            this.resetOverlayedCanvas();
            if (this.axisX && 0 < this.axisX.length)
              for (m = 0; m < this.axisX.length; m++)
                this.axisX[m].crosshair && this.axisX[m].crosshair.enabled && this.axisX[m].renderCrosshair(a, g);
            if (this.axisX2 && 0 < this.axisX2.length)
              for (m = 0; m < this.axisX2.length; m++)
                this.axisX2[m].crosshair && this.axisX2[m].crosshair.enabled && this.axisX2[m].renderCrosshair(a, g);
            if (this.axisY && 0 < this.axisY.length)
              for (m = 0; m < this.axisY.length; m++)
                this.axisY[m].crosshair && this.axisY[m].crosshair.enabled && this.axisY[m].renderCrosshair(a, g);
            if (this.axisY2 && 0 < this.axisY2.length)
              for (m = 0; m < this.axisY2.length; m++)
                this.axisY2[m].crosshair && this.axisY2[m].crosshair.enabled && this.axisY2[m].renderCrosshair(a, g);
            if (this.axisX && 0 < this.axisX.length)
              for (m = 0; m < this.axisX.length; m++)
                this.axisX[m].crosshair && this.axisX[m].crosshair.enabled && this.axisX[m].crosshair.renderLabel();
            if (this.axisX2 && 0 < this.axisX2.length)
              for (m = 0; m < this.axisX2.length; m++)
                this.axisX2[m].crosshair && this.axisX2[m].crosshair.enabled && this.axisX2[m].crosshair.renderLabel();
            if (this.axisY && 0 < this.axisY.length)
              for (m = 0; m < this.axisY.length; m++)
                this.axisY[m].crosshair && this.axisY[m].crosshair.enabled && this.axisY[m].crosshair.renderLabel();
            if (this.axisY2 && 0 < this.axisY2.length)
              for (m = 0; m < this.axisY2.length; m++)
                this.axisY2[m].crosshair && this.axisY2[m].crosshair.enabled && this.axisY2[m].crosshair.renderLabel();
          }
        };
        p.prototype._plotAreaMouseMove = function(a, g) {
          if (this.isDrag && "none" !== this.plotInfo.axisPlacement) {
            var c = 0, b = 0, e = c = null, e = 0 <= this.zoomType.indexOf("x"), h = 0 <= this.zoomType.indexOf("y"), m = this;
            "xySwapped" === this.plotInfo.axisPlacement && (c = h, h = e, e = c);
            c = this.dragStartPoint.x - a;
            b = this.dragStartPoint.y - g;
            if (2 < Math.abs(c) && 8 > Math.abs(c) && (this.panEnabled || this.zoomEnabled)) {
              this.toolTip.hide();
              this.toolTip && this.toolTip.enabled && this.toolTip.dispatchEvent("hidden", { chart: this, toolTip: this.toolTip }, this.toolTip);
              for (var y = 0; y < this.axisX.length; y++)
                this.axisX[y].crosshair && this.axisX[y].crosshair.enabled && (this.axisX[y].crosshair.hide(), this.axisX[y].crosshair.dispatchEvent("hidden", { chart: this, axis: this.axisX[y].options }, this.axisX[y].crosshair));
              for (y = 0; y < this.axisX2.length; y++)
                this.axisX2[y].crosshair && this.axisX2[y].crosshair.enabled && (this.axisX2[y].crosshair.hide(), this.axisX2[y].crosshair.dispatchEvent("hidden", { chart: this, axis: this.axisX2[y].options }, this.axisX2[y].crosshair));
              for (y = 0; y < this.axisY.length; y++)
                this.axisY[y].crosshair && this.axisY[y].crosshair.enabled && (this.axisY[y].crosshair.hide(), this.axisY[y].crosshair.dispatchEvent("hidden", { chart: this, axis: this.axisY[y].options }, this.axisY[y].crosshair));
              for (y = 0; y < this.axisY2.length; y++)
                this.axisY2[y].crosshair && this.axisY2[y].crosshair.enabled && (this.axisY2[y].crosshair.hide(), this.axisY2[y].crosshair.dispatchEvent("hidden", { chart: this, axis: this.axisY2[y].options }, this.axisY2[y].crosshair));
            } else
              this.panEnabled || this.zoomEnabled || this.toolTip.mouseMoveHandler(a, g);
            if ((!e || 2 < Math.abs(c) || !h || 2 < Math.abs(b)) && (this.panEnabled || this.zoomEnabled)) {
              if (this.panEnabled)
                e = { x1: e ? this.plotArea.x1 + c : this.plotArea.x1, y1: h ? this.plotArea.y1 + b : this.plotArea.y1, x2: e ? this.plotArea.x2 + c : this.plotArea.x2, y2: h ? this.plotArea.y2 + b : this.plotArea.y2 }, clearTimeout(m._panTimerId), m._panTimerId = setTimeout(/* @__PURE__ */ function(b2, c2, e2, f) {
                  return function() {
                    m._zoomPanToSelectedRegion(b2, c2, e2, f, true) && (m._dispatchRangeEvent("rangeChanging", "pan"), m.stockChart && (m.stockChart.navigator && m.stockChart.navigator.enabled) && (m.stockChart._rangeEventParameter.type = "rangeChanging", m.stockChart.dispatchEvent("rangeChanging", m.stockChart._rangeEventParameter, m.stockChart)), m.render(), m._dispatchRangeEvent("rangeChanged", "pan"), m.stockChart && (m.stockChart.navigator && m.stockChart.navigator.enabled) && (m.stockChart._rangeEventParameter.type = "rangeChanged", m.stockChart.dispatchEvent("rangeChanged", m.stockChart._rangeEventParameter, m.stockChart)), m.dragStartPoint.x = a, m.dragStartPoint.y = g);
                  };
                }(e.x1, e.y1, e.x2, e.y2), 0);
              else if (this.zoomEnabled) {
                this.resetOverlayedCanvas();
                c = this.overlaidCanvasCtx.globalAlpha;
                this.overlaidCanvasCtx.fillStyle = "#A89896";
                var b = e ? this.dragStartPoint.x : this.plotArea.x1, y = h ? this.dragStartPoint.y : this.plotArea.y1, d2 = e ? a - this.dragStartPoint.x : this.plotArea.x2 - this.plotArea.x1, k = h ? g - this.dragStartPoint.y : this.plotArea.y2 - this.plotArea.y1;
                this.validateRegion(b, y, e ? a : this.plotArea.x2 - this.plotArea.x1, h ? g : this.plotArea.y2 - this.plotArea.y1, "xy" !== this.zoomType).isValid && (this.resetOverlayedCanvas(), this.overlaidCanvasCtx.fillStyle = "#99B2B5");
                this.overlaidCanvasCtx.globalAlpha = 0.7;
                this.overlaidCanvasCtx.fillRect(b, y, d2, k);
                this.overlaidCanvasCtx.globalAlpha = c;
              }
            }
          } else if (this.toolTip.mouseMoveHandler(a, g), "none" !== this.plotInfo.axisPlacement) {
            if (this.axisX && 0 < this.axisX.length)
              for (e = 0; e < this.axisX.length; e++)
                this.axisX[e].crosshair && this.axisX[e].crosshair.enabled && this.axisX[e].renderCrosshair(a, g);
            if (this.axisX2 && 0 < this.axisX2.length)
              for (e = 0; e < this.axisX2.length; e++)
                this.axisX2[e].crosshair && this.axisX2[e].crosshair.enabled && this.axisX2[e].renderCrosshair(a, g);
            if (this.axisY && 0 < this.axisY.length)
              for (e = 0; e < this.axisY.length; e++)
                this.axisY[e].crosshair && this.axisY[e].crosshair.enabled && this.axisY[e].renderCrosshair(a, g);
            if (this.axisY2 && 0 < this.axisY2.length)
              for (e = 0; e < this.axisY2.length; e++)
                this.axisY2[e].crosshair && this.axisY2[e].crosshair.enabled && this.axisY2[e].renderCrosshair(a, g);
            if (this.axisX && 0 < this.axisX.length)
              for (e = 0; e < this.axisX.length; e++)
                this.axisX[e].crosshair && this.axisX[e].crosshair.enabled && this.axisX[e].crosshair.renderLabel();
            if (this.axisX2 && 0 < this.axisX2.length)
              for (e = 0; e < this.axisX2.length; e++)
                this.axisX2[e].crosshair && this.axisX2[e].crosshair.enabled && this.axisX2[e].crosshair.renderLabel();
            if (this.axisY && 0 < this.axisY.length)
              for (e = 0; e < this.axisY.length; e++)
                this.axisY[e].crosshair && this.axisY[e].crosshair.enabled && this.axisY[e].crosshair.renderLabel();
            if (this.axisY2 && 0 < this.axisY2.length)
              for (e = 0; e < this.axisY2.length; e++)
                this.axisY2[e].crosshair && this.axisY2[e].crosshair.enabled && this.axisY2[e].crosshair.renderLabel();
          }
        };
        p.prototype._zoomPanToSelectedRegion = function(a, g, c, b, e) {
          a = this.validateRegion(a, g, c, b, e);
          g = a.axesWithValidRange;
          c = a.axesRanges;
          if (a.isValid)
            for (b = 0; b < g.length; b++)
              e = c[b], g[b].setViewPortRange(e.val1, e.val2), this.syncCharts && "y" != this.zoomType && this.syncCharts(e.val1, e.val2), this.stockChart && (this.stockChart._rangeEventParameter = { stockChart: this.stockChart, source: "chart", index: this.stockChart.charts.indexOf(this), minimum: e.val1, maximum: e.val2 });
          return a.isValid;
        };
        p.prototype.validateRegion = function(a, g, c, b, e) {
          e = e || false;
          for (var h = 0 <= this.zoomType.indexOf("x"), m = 0 <= this.zoomType.indexOf("y"), y = false, d2 = [], k = [], l = [], q = 0; q < this._axes.length; q++)
            ("axisX" === this._axes[q].type && h || "axisY" === this._axes[q].type && m) && k.push(this._axes[q]);
          for (m = 0; m < k.length; m++) {
            var q = k[m], h = false, r = q.convertPixelToValue({ x: a, y: g }), f = q.convertPixelToValue({
              x: c,
              y: b
            });
            if (r > f)
              var n2 = f, f = r, r = n2;
            if (q.scaleBreaks)
              for (n2 = 0; !h && n2 < q.scaleBreaks._appliedBreaks.length; n2++)
                h = q.scaleBreaks._appliedBreaks[n2].startValue <= r && q.scaleBreaks._appliedBreaks[n2].endValue >= f;
            if (isFinite(q.dataInfo.minDiff)) {
              if (n2 = q.getApparentDifference(r, f, null, true), !(h || !(this.panEnabled && q.scaleBreaks && q.scaleBreaks._appliedBreaks.length) && (q.logarithmic && n2 < Math.pow(q.dataInfo.minDiff, 3) || !q.logarithmic && n2 < 3 * Math.abs(q.dataInfo.minDiff)) || r < q.minimum || f > q.maximum))
                d2.push(q), l.push({ val1: r, val2: f }), y = true;
              else if (!e) {
                y = false;
                break;
              }
            }
          }
          return { isValid: y, axesWithValidRange: d2, axesRanges: l };
        };
        p.prototype.preparePlotArea = function() {
          var a = this.plotArea;
          !v && (0 < a.x1 || 0 < a.y1) && a.ctx.translate(a.x1, a.y1);
          if ((this.axisX[0] || this.axisX2[0]) && (this.axisY[0] || this.axisY2[0])) {
            var g = this.axisX[0] ? this.axisX[0].lineCoordinates : this.axisX2[0].lineCoordinates;
            if (this.axisY && 0 < this.axisY.length && this.axisY[0]) {
              var c = this.axisY[0];
              a.x1 = g.x1 < g.x2 ? g.x1 : c.lineCoordinates.x1;
              a.y1 = g.y1 < c.lineCoordinates.y1 ? g.y1 : c.lineCoordinates.y1;
              a.x2 = g.x2 > c.lineCoordinates.x2 ? g.x2 : c.lineCoordinates.x2;
              a.y2 = g.y1 > c.lineCoordinates.y2 ? g.y1 : c.lineCoordinates.y2;
              a.width = a.x2 - a.x1;
              a.height = a.y2 - a.y1;
            }
            this.axisY2 && 0 < this.axisY2.length && this.axisY2[0] && (c = this.axisY2[0], a.x1 = g.x1 < g.x2 ? g.x1 : c.lineCoordinates.x1, a.y1 = g.y1 < c.lineCoordinates.y1 ? g.y1 : c.lineCoordinates.y1, a.x2 = g.x2 > c.lineCoordinates.x2 ? g.x2 : c.lineCoordinates.x2, a.y2 = g.y2 > c.lineCoordinates.y2 ? g.y2 : c.lineCoordinates.y2, a.width = a.x2 - a.x1, a.height = a.y2 - a.y1);
          } else
            g = this.layoutManager.getFreeSpace(), a.x1 = g.x1, a.x2 = g.x2, a.y1 = g.y1, a.y2 = g.y2, a.width = g.width, a.height = g.height;
          v || (a.canvas.width = a.width, a.canvas.height = a.height, a.canvas.style.left = a.x1 + "px", a.canvas.style.top = a.y1 + "px", (0 < a.x1 || 0 < a.y1) && a.ctx.translate(-a.x1, -a.y1));
          a.layoutManager = new Ea(a.x1, a.y1, a.x2, a.y2, 2);
        };
        p.prototype.renderIndexLabels = function(a) {
          var g = a || this.plotArea.ctx, c = this.plotArea, b = 0, e = 0, h = 0, m = e = h = 0, y = 0, d2 = b = 0, k = 0;
          for (a = 0; a < this._indexLabels.length; a++) {
            var l = this._indexLabels[a], q = l.chartType.toLowerCase(), r, f, y = ma(
              "indexLabelFontColor",
              l.dataPoint,
              l.dataSeries
            ), Ra = ma("indexLabelFontSize", l.dataPoint, l.dataSeries), d2 = ma("indexLabelFontFamily", l.dataPoint, l.dataSeries), k = ma("indexLabelFontStyle", l.dataPoint, l.dataSeries);
            r = ma("indexLabelFontWeight", l.dataPoint, l.dataSeries);
            var w = ma("indexLabelBackgroundColor", l.dataPoint, l.dataSeries);
            f = ma("indexLabelBorderColor", l.dataPoint, l.dataSeries);
            var h = ma("indexLabelBorderThickness", l.dataPoint, l.dataSeries), e = ma("indexLabelMaxWidth", l.dataPoint, l.dataSeries), m = ma(
              "indexLabelWrap",
              l.dataPoint,
              l.dataSeries
            ), x = ma("indexLabelLineDashType", l.dataPoint, l.dataSeries), s = ma("indexLabelLineColor", l.dataPoint, l.dataSeries), z = n(l.dataPoint.indexLabelLineThickness) ? n(l.dataSeries.options.indexLabelLineThickness) ? 0 : l.dataSeries.options.indexLabelLineThickness : l.dataPoint.indexLabelLineThickness, b = 0 < z ? Math.min(10, ("normal" === this.plotInfo.axisPlacement ? this.plotArea.height : this.plotArea.width) << 0) : 0, u = { percent: null, total: null }, p2 = null;
            if (0 <= l.dataSeries.type.indexOf("stacked") || "pie" === l.dataSeries.type || "doughnut" === l.dataSeries.type)
              u = this.getPercentAndTotal(l.dataSeries, l.dataPoint);
            if (l.dataSeries.indexLabelFormatter || l.dataPoint.indexLabelFormatter)
              p2 = { chart: this, dataSeries: l.dataSeries, dataPoint: l.dataPoint, index: l.indexKeyword, total: u.total, percent: u.percent };
            var D = l.dataPoint.indexLabelFormatter ? l.dataPoint.indexLabelFormatter(p2) : l.dataPoint.indexLabel ? this.replaceKeywordsWithValue(l.dataPoint.indexLabel, l.dataPoint, l.dataSeries, null, l.indexKeyword) : l.dataSeries.indexLabelFormatter ? l.dataSeries.indexLabelFormatter(p2) : l.dataSeries.indexLabel ? this.replaceKeywordsWithValue(l.dataSeries.indexLabel, l.dataPoint, l.dataSeries, null, l.indexKeyword) : null;
            if (null !== D && "" !== D) {
              var u = ma("indexLabelPlacement", l.dataPoint, l.dataSeries), p2 = ma("indexLabelOrientation", l.dataPoint, l.dataSeries), C = ma("indexLabelTextAlign", l.dataPoint, l.dataSeries), t3 = l.direction, B3 = l.dataSeries.axisX, J = l.dataSeries.axisY, K = false, w = new ja(g, {
                x: 0,
                y: 0,
                maxWidth: e ? e : 0.5 * this.width,
                maxHeight: m ? 5 * Ra : 1.5 * Ra,
                angle: "horizontal" === p2 ? 0 : -90,
                text: D,
                padding: 0,
                backgroundColor: w,
                borderColor: f,
                borderThickness: h,
                textAlign: C,
                fontSize: Ra,
                fontFamily: d2,
                fontWeight: r,
                fontColor: y,
                fontStyle: k,
                textBaseline: "middle"
              });
              w.measureText();
              l.dataSeries.indexLabelMaxWidth = w.maxWidth;
              if ("stackedarea100" === q) {
                if (l.point.x < c.x1 || l.point.x > c.x2 || l.point.y < c.y1 - 1 || l.point.y > c.y2 + 1)
                  continue;
              } else if ("rangearea" === q || "rangesplinearea" === q) {
                if (l.dataPoint.x < B3.viewportMinimum || l.dataPoint.x > B3.viewportMaximum || Math.max.apply(null, l.dataPoint.y) < J.viewportMinimum || Math.min.apply(null, l.dataPoint.y) > J.viewportMaximum)
                  continue;
              } else if (0 <= q.indexOf("line") || 0 <= q.indexOf("area") || 0 <= q.indexOf("bubble") || 0 <= q.indexOf("scatter")) {
                if (l.dataPoint.x < B3.viewportMinimum || l.dataPoint.x > B3.viewportMaximum || l.dataPoint.y < J.viewportMinimum || l.dataPoint.y > J.viewportMaximum)
                  continue;
              } else if (0 <= q.indexOf("column") || "waterfall" === q || "error" === q && !l.axisSwapped) {
                if (l.dataPoint.x < B3.viewportMinimum || l.dataPoint.x > B3.viewportMaximum || l.bounds.y1 > c.y2 || l.bounds.y2 < c.y1)
                  continue;
              } else if (0 <= q.indexOf("bar") || "error" === q) {
                if (l.dataPoint.x < B3.viewportMinimum || l.dataPoint.x > B3.viewportMaximum || l.bounds.x1 > c.x2 || l.bounds.x2 < c.x1)
                  continue;
              } else if ("candlestick" === q || "ohlc" === q) {
                if (l.dataPoint.x < B3.viewportMinimum || l.dataPoint.x > B3.viewportMaximum || Math.max.apply(null, l.dataPoint.y) < J.viewportMinimum || Math.min.apply(null, l.dataPoint.y) > J.viewportMaximum)
                  continue;
              } else if (l.dataPoint.x < B3.viewportMinimum || l.dataPoint.x > B3.viewportMaximum)
                continue;
              m = y = 2;
              "horizontal" === p2 ? (d2 = w.width, k = w.height) : (k = w.width, d2 = w.height);
              if ("normal" === this.plotInfo.axisPlacement) {
                if (0 <= q.indexOf("line") || 0 <= q.indexOf("area"))
                  u = "auto", y = 4;
                else if (0 <= q.indexOf("stacked"))
                  "auto" === u && (u = "inside");
                else if ("bubble" === q || "scatter" === q)
                  u = "inside";
                r = l.point.x - d2 / 2 + ("horizontal" === p2 ? 0 : w._lineHeight / 2);
                if ("inside" !== u)
                  e = c.y1, h = c.y2, 0 < t3 ? (f = l.point.y + w._lineHeight / 2 - k - y - b, f < e && (f = "auto" === u ? Math.max(l.point.y, e) + w._lineHeight / 2 + y + b : e + w._lineHeight / 2 + y + b, K = f + ("horizontal" === p2 ? k - w._lineHeight / 2 : 0) > l.point.y, !K || (0 <= q.indexOf("line") || 0 <= q.indexOf("area")) || (f -= b))) : (f = l.point.y + w._lineHeight / 2 + y + b, f > h - k + w._lineHeight / 2 - y && (f = "auto" === u ? Math.min(l.point.y, h) + w._lineHeight / 2 - k - y - b : h + w._lineHeight / 2 - k - y - b, K = f - ("horizontal" === p2 ? w._lineHeight / 2 : k) < l.point.y, !K || (0 <= q.indexOf("line") || 0 <= q.indexOf("area")) || (f += b)));
                else {
                  Math.max(l.bounds.y1, c.y1);
                  h = Math.min(l.bounds.y2, c.y2) - k + w._lineHeight / 2;
                  b = 0 <= q.indexOf("range") || "error" === q ? 0 < t3 ? Math.max(l.bounds.y1, c.y1) + w._lineHeight / 2 + y : Math.min(l.bounds.y2, c.y2) + w._lineHeight / 2 - k - y : (Math.max(l.bounds.y1, c.y1) + Math.min(l.bounds.y2, c.y2)) / 2 - k / 2 + w._lineHeight / 2;
                  if (0 < t3) {
                    if (f = b, "bubble" === q || "scatter" === q)
                      f = l.point.y - k / 2 + w._lineHeight / 2, k > l.bounds.y2 - l.bounds.y1 && (f -= k / 2 + y), 0 > f - w._lineHeight / 2 && (f += Math.abs(f - w._lineHeight / 2) <= (l.bounds.y2 - l.bounds.y1) / 2 + y ? Math.abs(f - w._lineHeight / 2) : (l.bounds.y2 - l.bounds.y1) / 2 + y);
                  } else
                    f = Math.min(l.point.y, b), f > h - k - y && ("bubble" === q || "scatter" === q) && (f = Math.min(l.point.y + y, c.y2 - k - y));
                  f = Math.min(f, h);
                }
              } else
                0 <= q.indexOf("line") || 0 <= q.indexOf("area") || 0 <= q.indexOf("scatter") ? (u = "auto", m = 4) : 0 <= q.indexOf("stacked") ? "auto" === u && (u = "inside") : "bubble" === q && (u = "inside"), f = l.point.y + w._lineHeight / 2 - k / 2, "inside" !== u ? (h = c.x1, e = c.x2, 0 > t3 ? (r = l.point.x - d2 + ("horizontal" === p2 ? 0 : w._lineHeight / 2) - m - b, ("horizontal" === p2 ? r : r - w._lineHeight / 2) < h && (r = "auto" === u ? Math.max(l.point.x, h) + ("horizontal" === p2 ? 0 : w._lineHeight / 2) + y + b : h + ("horizontal" === p2 ? 0 : w._lineHeight / 2) + m, (K = r + d2 - ("horizontal" === p2 ? 0 : w._lineHeight / 2) > l.point.x) && (r -= b))) : (r = l.point.x + ("horizontal" === p2 ? 0 : w._lineHeight / 2) + m + b, ("horizontal" === p2 ? r : r - w._lineHeight / 2) > e - d2 - m - b && (r = "auto" === u ? Math.min(l.point.x, e) - ("horizontal" === p2 ? d2 : d2 - w._lineHeight / 2) - m - b : e - d2 - m + ("horizontal" === p2 ? 0 : w._lineHeight / 2), (K = r - ("horizontal" === p2 ? 0 : w._lineHeight / 2) < l.point.x) && (r += b)))) : (h = Math.max(l.bounds.x1, c.x1), Math.min(l.bounds.x2, c.x2), b = 0 <= q.indexOf("range") || "error" === q ? 0 > t3 ? Math.max(l.bounds.x1, c.x1) : Math.min(l.bounds.x2, c.x2) - d2 - m + ("horizontal" === p2 ? 0 : w._lineHeight / 2) : (Math.max(l.bounds.x1, c.x1) + Math.min(l.bounds.x2, c.x2)) / 2 - d2 / 2 + ("horizontal" === p2 ? 0 : w._lineHeight / 2), r = 0 > t3 ? b : Math.min(l.point.x, b), r = Math.max(
                  r,
                  h + ("horizontal" === p2 ? 0 : w._lineHeight / 2 + y)
                ));
              "vertical" === p2 && (f += k - w._lineHeight / 2, 0 <= "ohlc candlestick boxandwhisker column rangecolumn stackedcolumn stackedcolumn100 error".split(" ").indexOf(q) && (K = 0 < t3 ? f + ("horizontal" === p2 ? k - w._lineHeight / 2 : 0) > l.point.y : f - ("horizontal" === p2 ? w._lineHeight / 2 : k) < l.point.y), "bubble" === q || "scatter" === q) && (r += w._lineHeight / 2 - Ra / 2);
              w.x = r;
              w.y = f;
              w.render(true);
              z && ("inside" !== u && (0 > q.indexOf("bar") && ("error" !== q || !l.axisSwapped) && l.point.x > c.x1 && l.point.x < c.x2 || !K) && (-1 === "ohlc candlestick boxandwhisker column rangecolumn stackedcolumn stackedcolumn100 error".split(" ").indexOf(q) && ("error" !== q || l.axisSwapped) && l.point.y > c.y1 && l.point.y < c.y2 || !K)) && (g.lineWidth = z, g.strokeStyle = s ? s : "gray", g.setLineDash && g.setLineDash(G(x, z)), g.beginPath(), g.moveTo(l.point.x, l.point.y), 0 <= q.indexOf("bar") || "error" === q && l.axisSwapped ? g.lineTo(r + (0 < l.direction ? 0 : d2) + ("vertical" === p2 ? -w._lineHeight / 2 : 0), f + ("vertical" === p2 ? -k / 2 : k / 2 - w._lineHeight / 2)) : 0 <= q.indexOf("column") || "error" === q && !l.axisSwapped ? g.lineTo(r + d2 / 2 - ("horizontal" === p2 ? 0 : w._lineHeight / 2), f + ("vertical" === p2 ? f - k < l.point.y ? 0 : -k : (f - w._lineHeight / 2 < l.point.y ? k : 0) - w._lineHeight / 2)) : 0 <= q.indexOf("waterfall") ? g.lineTo(r + d2 / 2 - ("horizontal" === p2 ? 0 : w._lineHeight / 2), "vertical" === p2 ? 0 < t3 && f < l.point.y ? f : 0 > t3 && f - k > l.point.y ? f - k : l.point.y : 0 < t3 && f + k - w._lineHeight / 2 < l.point.y ? f + k - w._lineHeight / 2 : 0 > t3 && f - w._lineHeight / 2 > l.point.y ? f - w._lineHeight / 2 : l.point.y) : g.lineTo(r + d2 / 2 - ("horizontal" === p2 ? 0 : w._lineHeight / 2), f + ("vertical" === p2 ? f - k < l.point.y ? 0 : -k : (f + k - w._lineHeight / 2 < l.point.y ? k : 0) - w._lineHeight / 2)), g.stroke());
            }
          }
          g = {
            source: g,
            dest: this.plotArea.ctx,
            animationCallback: L.fadeInAnimation,
            easingFunction: L.easing.easeInQuad,
            animationBase: 0,
            startTimePercent: 0.7
          };
          for (a = 0; a < this._indexLabels.length; a++)
            l = this._indexLabels[a], w = ma("indexLabelBackgroundColor", l.dataPoint, l.dataSeries), l.dataSeries.indexLabelBackgroundColor = n(w) ? v ? "transparent" : null : w;
          return g;
        };
        p.prototype.renderLine = function(a) {
          var g = a.targetCanvasCtx || this.plotArea.ctx, c = v ? this._preRenderCtx : g;
          if (!(0 >= a.dataSeriesIndexes.length)) {
            var b = this._eventManager.ghostCtx;
            c.save();
            var e = this.plotArea;
            c.beginPath();
            c.rect(
              e.x1,
              e.y1,
              e.width,
              e.height
            );
            c.clip();
            for (var h = [], m, y = 0; y < a.dataSeriesIndexes.length; y++) {
              var d2 = a.dataSeriesIndexes[y], k = this.data[d2];
              c.lineWidth = k.lineThickness;
              var l = k.dataPoints, q = "solid";
              if (c.setLineDash) {
                var r = G(k.nullDataLineDashType, k.lineThickness), q = k.lineDashType, f = G(q, k.lineThickness);
                c.setLineDash(f);
              }
              var n2 = k.id;
              this._eventManager.objectMap[n2] = { objectType: "dataSeries", dataSeriesIndex: d2 };
              n2 = U(n2);
              b.strokeStyle = n2;
              b.lineWidth = 0 < k.lineThickness ? Math.max(k.lineThickness, 4) : 0;
              var n2 = k._colorSet, w = n2 = k.lineColor = k.options.lineColor ? k.options.lineColor : n2[0];
              c.strokeStyle = n2;
              var x = true, s = 0, z, u;
              c.beginPath();
              if (0 < l.length) {
                for (var p2 = false, s = 0; s < l.length; s++)
                  if (z = l[s].x.getTime ? l[s].x.getTime() : l[s].x, !(z < a.axisX.dataInfo.viewPortMin || z > a.axisX.dataInfo.viewPortMax && (!k.connectNullData || !p2)))
                    if ("number" !== typeof l[s].y)
                      0 < s && !(k.connectNullData || p2 || x) && (c.stroke(), v && b.stroke()), p2 = true;
                    else {
                      z = a.axisX.convertValueToPixel(z);
                      u = a.axisY.convertValueToPixel(l[s].y);
                      var D = k.dataPointIds[s];
                      this._eventManager.objectMap[D] = {
                        id: D,
                        objectType: "dataPoint",
                        dataSeriesIndex: d2,
                        dataPointIndex: s,
                        x1: z,
                        y1: u
                      };
                      x || p2 ? (!x && k.connectNullData ? (c.setLineDash && (k.options.nullDataLineDashType || q === k.lineDashType && k.lineDashType !== k.nullDataLineDashType) && (c.stroke(), c.beginPath(), c.moveTo(m.x, m.y), q = k.nullDataLineDashType, c.setLineDash(r)), c.lineTo(z, u), v && b.lineTo(z, u)) : (c.beginPath(), c.moveTo(z, u), v && (b.beginPath(), b.moveTo(z, u))), p2 = x = false) : (c.lineTo(z, u), v && b.lineTo(z, u), 0 == s % 500 && (c.stroke(), c.beginPath(), c.moveTo(z, u), v && (b.stroke(), b.beginPath(), b.moveTo(z, u))));
                      m = { x: z, y: u };
                      s < l.length - 1 && (w !== (l[s].lineColor || n2) || q !== (l[s].lineDashType || k.lineDashType)) && (c.stroke(), c.beginPath(), c.moveTo(z, u), w = l[s].lineColor || n2, c.strokeStyle = w, c.setLineDash && (l[s].lineDashType ? (q = l[s].lineDashType, c.setLineDash(G(q, k.lineThickness))) : (q = k.lineDashType, c.setLineDash(f))));
                      if (0 !== l[s].markerSize && (0 < l[s].markerSize || 0 < k.markerSize)) {
                        var C = k.getMarkerProperties(s, z, u, c);
                        h.push(C);
                        D = U(D);
                        v && h.push({
                          x: z,
                          y: u,
                          ctx: b,
                          type: C.type,
                          size: C.size,
                          color: D,
                          borderColor: D,
                          borderThickness: C.borderThickness
                        });
                      }
                      (l[s].indexLabel || k.indexLabel || l[s].indexLabelFormatter || k.indexLabelFormatter) && this._indexLabels.push({ chartType: "line", dataPoint: l[s], dataSeries: k, point: { x: z, y: u }, direction: 0 > l[s].y === a.axisY.reversed ? 1 : -1, color: n2 });
                    }
                c.stroke();
                v && b.stroke();
              }
            }
            X.drawMarkers(h);
            v && (g.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.clearRect(e.x1, e.y1, e.width, e.height), b.beginPath());
            c.restore();
            c.beginPath();
            return { source: g, dest: this.plotArea.ctx, animationCallback: L.xClipAnimation, easingFunction: L.easing.linear, animationBase: 0 };
          }
        };
        p.prototype.renderStepLine = function(a) {
          var g = a.targetCanvasCtx || this.plotArea.ctx, c = v ? this._preRenderCtx : g;
          if (!(0 >= a.dataSeriesIndexes.length)) {
            var b = this._eventManager.ghostCtx;
            c.save();
            var e = this.plotArea;
            c.beginPath();
            c.rect(e.x1, e.y1, e.width, e.height);
            c.clip();
            for (var h = [], m, y = 0; y < a.dataSeriesIndexes.length; y++) {
              var d2 = a.dataSeriesIndexes[y], k = this.data[d2];
              c.lineWidth = k.lineThickness;
              var l = k.dataPoints, q = "solid";
              if (c.setLineDash) {
                var r = G(k.nullDataLineDashType, k.lineThickness), q = k.lineDashType, f = G(q, k.lineThickness);
                c.setLineDash(f);
              }
              var n2 = k.id;
              this._eventManager.objectMap[n2] = { objectType: "dataSeries", dataSeriesIndex: d2 };
              n2 = U(n2);
              b.strokeStyle = n2;
              b.lineWidth = 0 < k.lineThickness ? Math.max(k.lineThickness, 4) : 0;
              var n2 = k._colorSet, w = n2 = k.lineColor = k.options.lineColor ? k.options.lineColor : n2[0];
              c.strokeStyle = n2;
              var x = true, s = 0, z, u;
              c.beginPath();
              if (0 < l.length) {
                for (var p2 = false, s = 0; s < l.length; s++)
                  if (z = l[s].getTime ? l[s].x.getTime() : l[s].x, !(z < a.axisX.dataInfo.viewPortMin || z > a.axisX.dataInfo.viewPortMax && (!k.connectNullData || !p2)))
                    if ("number" !== typeof l[s].y)
                      0 < s && !(k.connectNullData || p2 || x) && (c.stroke(), v && b.stroke()), p2 = true;
                    else {
                      var D = u;
                      z = a.axisX.convertValueToPixel(z);
                      u = a.axisY.convertValueToPixel(l[s].y);
                      var C = k.dataPointIds[s];
                      this._eventManager.objectMap[C] = { id: C, objectType: "dataPoint", dataSeriesIndex: d2, dataPointIndex: s, x1: z, y1: u };
                      x || p2 ? (!x && k.connectNullData ? (c.setLineDash && (k.options.nullDataLineDashType || q === k.lineDashType && k.lineDashType !== k.nullDataLineDashType) && (c.stroke(), c.beginPath(), c.moveTo(m.x, m.y), q = k.nullDataLineDashType, c.setLineDash(r)), c.lineTo(z, D), c.lineTo(z, u), v && (b.lineTo(z, D), b.lineTo(z, u))) : (c.beginPath(), c.moveTo(z, u), v && (b.beginPath(), b.moveTo(z, u))), p2 = x = false) : (c.lineTo(z, D), v && b.lineTo(z, D), c.lineTo(z, u), v && b.lineTo(z, u), 0 == s % 500 && (c.stroke(), c.beginPath(), c.moveTo(z, u), v && (b.stroke(), b.beginPath(), b.moveTo(z, u))));
                      m = { x: z, y: u };
                      s < l.length - 1 && (w !== (l[s].lineColor || n2) || q !== (l[s].lineDashType || k.lineDashType)) && (c.stroke(), c.beginPath(), c.moveTo(z, u), w = l[s].lineColor || n2, c.strokeStyle = w, c.setLineDash && (l[s].lineDashType ? (q = l[s].lineDashType, c.setLineDash(G(q, k.lineThickness))) : (q = k.lineDashType, c.setLineDash(f))));
                      0 !== l[s].markerSize && (0 < l[s].markerSize || 0 < k.markerSize) && (D = k.getMarkerProperties(s, z, u, c), h.push(D), C = U(C), v && h.push({ x: z, y: u, ctx: b, type: D.type, size: D.size, color: C, borderColor: C, borderThickness: D.borderThickness }));
                      (l[s].indexLabel || k.indexLabel || l[s].indexLabelFormatter || k.indexLabelFormatter) && this._indexLabels.push({ chartType: "stepLine", dataPoint: l[s], dataSeries: k, point: { x: z, y: u }, direction: 0 > l[s].y === a.axisY.reversed ? 1 : -1, color: n2 });
                    }
                c.stroke();
                v && b.stroke();
              }
            }
            X.drawMarkers(h);
            v && (g.drawImage(
              this._preRenderCanvas,
              0,
              0,
              this.width,
              this.height
            ), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.clearRect(e.x1, e.y1, e.width, e.height), b.beginPath());
            c.restore();
            c.beginPath();
            return {
              source: g,
              dest: this.plotArea.ctx,
              animationCallback: L.xClipAnimation,
              easingFunction: L.easing.linear,
              animationBase: 0
            };
          }
        };
        p.prototype.renderSpline = function(a) {
          function g(a2) {
            a2 = t2(a2, 2);
            if (0 < a2.length) {
              b.beginPath();
              v && e.beginPath();
              b.moveTo(a2[0].x, a2[0].y);
              a2[0].newStrokeStyle && (b.strokeStyle = a2[0].newStrokeStyle);
              a2[0].newLineDashArray && b.setLineDash(a2[0].newLineDashArray);
              v && e.moveTo(a2[0].x, a2[0].y);
              for (var c2 = 0; c2 < a2.length - 3; c2 += 3)
                if (b.bezierCurveTo(a2[c2 + 1].x, a2[c2 + 1].y, a2[c2 + 2].x, a2[c2 + 2].y, a2[c2 + 3].x, a2[c2 + 3].y), v && e.bezierCurveTo(a2[c2 + 1].x, a2[c2 + 1].y, a2[c2 + 2].x, a2[c2 + 2].y, a2[c2 + 3].x, a2[c2 + 3].y), 0 < c2 && 0 === c2 % 3e3 || a2[c2 + 3].newStrokeStyle || a2[c2 + 3].newLineDashArray)
                  b.stroke(), b.beginPath(), b.moveTo(a2[c2 + 3].x, a2[c2 + 3].y), a2[c2 + 3].newStrokeStyle && (b.strokeStyle = a2[c2 + 3].newStrokeStyle), a2[c2 + 3].newLineDashArray && b.setLineDash(a2[c2 + 3].newLineDashArray), v && (e.stroke(), e.beginPath(), e.moveTo(a2[c2 + 3].x, a2[c2 + 3].y));
              b.stroke();
              v && e.stroke();
            }
          }
          var c = a.targetCanvasCtx || this.plotArea.ctx, b = v ? this._preRenderCtx : c;
          if (!(0 >= a.dataSeriesIndexes.length)) {
            var e = this._eventManager.ghostCtx;
            b.save();
            var h = this.plotArea;
            b.beginPath();
            b.rect(h.x1, h.y1, h.width, h.height);
            b.clip();
            for (var m = [], y = 0; y < a.dataSeriesIndexes.length; y++) {
              var d2 = a.dataSeriesIndexes[y], k = this.data[d2];
              b.lineWidth = k.lineThickness;
              var l = k.dataPoints, q = "solid";
              if (b.setLineDash) {
                var r = G(k.nullDataLineDashType, k.lineThickness), q = k.lineDashType, f = G(q, k.lineThickness);
                b.setLineDash(f);
              }
              var n2 = k.id;
              this._eventManager.objectMap[n2] = { objectType: "dataSeries", dataSeriesIndex: d2 };
              n2 = U(n2);
              e.strokeStyle = n2;
              e.lineWidth = 0 < k.lineThickness ? Math.max(k.lineThickness, 4) : 0;
              var n2 = k._colorSet, w = n2 = k.lineColor = k.options.lineColor ? k.options.lineColor : n2[0];
              b.strokeStyle = n2;
              var x = 0, s, z, u = [];
              b.beginPath();
              if (0 < l.length) {
                for (z = false, x = 0; x < l.length; x++)
                  if (s = l[x].getTime ? l[x].x.getTime() : l[x].x, !(s < a.axisX.dataInfo.viewPortMin || s > a.axisX.dataInfo.viewPortMax && (!k.connectNullData || !z)))
                    if ("number" !== typeof l[x].y)
                      0 < x && !z && (k.connectNullData ? b.setLineDash && (0 < u.length && (k.options.nullDataLineDashType || !l[x - 1].lineDashType)) && (u[u.length - 1].newLineDashArray = r, q = k.nullDataLineDashType) : (g(u), u = [])), z = true;
                    else {
                      s = a.axisX.convertValueToPixel(s);
                      z = a.axisY.convertValueToPixel(l[x].y);
                      var p2 = k.dataPointIds[x];
                      this._eventManager.objectMap[p2] = { id: p2, objectType: "dataPoint", dataSeriesIndex: d2, dataPointIndex: x, x1: s, y1: z };
                      u[u.length] = { x: s, y: z };
                      x < l.length - 1 && (w !== (l[x].lineColor || n2) || q !== (l[x].lineDashType || k.lineDashType)) && (w = l[x].lineColor || n2, u[u.length - 1].newStrokeStyle = w, b.setLineDash && (l[x].lineDashType ? (q = l[x].lineDashType, u[u.length - 1].newLineDashArray = G(q, k.lineThickness)) : (q = k.lineDashType, u[u.length - 1].newLineDashArray = f)));
                      if (0 !== l[x].markerSize && (0 < l[x].markerSize || 0 < k.markerSize)) {
                        var D = k.getMarkerProperties(x, s, z, b);
                        m.push(D);
                        p2 = U(p2);
                        v && m.push({ x: s, y: z, ctx: e, type: D.type, size: D.size, color: p2, borderColor: p2, borderThickness: D.borderThickness });
                      }
                      (l[x].indexLabel || k.indexLabel || l[x].indexLabelFormatter || k.indexLabelFormatter) && this._indexLabels.push({ chartType: "spline", dataPoint: l[x], dataSeries: k, point: { x: s, y: z }, direction: 0 > l[x].y === a.axisY.reversed ? 1 : -1, color: n2 });
                      z = false;
                    }
              }
              g(u);
            }
            X.drawMarkers(m);
            v && (c.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && b.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && b.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.clearRect(h.x1, h.y1, h.width, h.height), e.beginPath());
            b.restore();
            b.beginPath();
            return { source: c, dest: this.plotArea.ctx, animationCallback: L.xClipAnimation, easingFunction: L.easing.linear, animationBase: 0 };
          }
        };
        p.prototype.renderColumn = function(a) {
          var g = a.targetCanvasCtx || this.plotArea.ctx, c = v ? this._preRenderCtx : g;
          if (!(0 >= a.dataSeriesIndexes.length)) {
            var b = null, e = this.plotArea, h = 0, m, y, d2, k = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0), h = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1, l = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : Math.min(0.15 * this.width, 0.9 * (this.plotArea.width / a.plotType.totalDataSeries)) << 0, q = a.axisX.dataInfo.minDiff;
            isFinite(q) || (q = 0.3 * Math.abs(a.axisX.range));
            q = this.dataPointWidth = this.options.dataPointWidth ? this.dataPointWidth : 0.9 * (e.width * (a.axisX.logarithmic ? Math.log(q) / Math.log(a.axisX.range) : Math.abs(q) / Math.abs(a.axisX.range)) / a.plotType.totalDataSeries) << 0;
            this.dataPointMaxWidth && h > l && (h = Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, l));
            !this.dataPointMaxWidth && (this.dataPointMinWidth && l < h) && (l = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -Infinity, h));
            q < h && (q = h);
            q > l && (q = l);
            c.save();
            v && this._eventManager.ghostCtx.save();
            c.beginPath();
            c.rect(e.x1, e.y1, e.width, e.height);
            c.clip();
            v && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(e.x1, e.y1, e.width, e.height), this._eventManager.ghostCtx.clip());
            for (l = 0; l < a.dataSeriesIndexes.length; l++) {
              var r = a.dataSeriesIndexes[l], f = this.data[r], n2 = f.dataPoints;
              if (0 < n2.length) {
                for (var w = 5 < q && f.bevelEnabled ? true : false, h = 0; h < n2.length; h++)
                  if (n2[h].getTime ? d2 = n2[h].x.getTime() : d2 = n2[h].x, !(d2 < a.axisX.dataInfo.viewPortMin || d2 > a.axisX.dataInfo.viewPortMax) && "number" === typeof n2[h].y) {
                    m = a.axisX.convertValueToPixel(d2);
                    y = a.axisY.convertValueToPixel(n2[h].y);
                    m = a.axisX.reversed ? m + a.plotType.totalDataSeries * q / 2 - (a.previousDataSeriesCount + l) * q << 0 : m - a.plotType.totalDataSeries * q / 2 + (a.previousDataSeriesCount + l) * q << 0;
                    var x = a.axisX.reversed ? m - q << 0 : m + q << 0, s;
                    0 <= n2[h].y ? s = k : (s = y, y = k);
                    y > s && (b = y, y = s, s = b);
                    b = n2[h].color ? n2[h].color : f._colorSet[h % f._colorSet.length];
                    ba(c, a.axisX.reversed ? x : m, y, a.axisX.reversed ? m : x, s, b, 0, null, w && (a.axisY.reversed ? 0 > n2[h].y : 0 <= n2[h].y), (a.axisY.reversed ? 0 <= n2[h].y : 0 > n2[h].y) && w, false, false, f.fillOpacity);
                    b = f.dataPointIds[h];
                    this._eventManager.objectMap[b] = { id: b, objectType: "dataPoint", dataSeriesIndex: r, dataPointIndex: h, x1: m, y1: y, x2: x, y2: s };
                    b = U(b);
                    v && ba(this._eventManager.ghostCtx, a.axisX.reversed ? x : m, y, a.axisX.reversed ? m : x, s, b, 0, null, false, false, false, false);
                    (n2[h].indexLabel || f.indexLabel || n2[h].indexLabelFormatter || f.indexLabelFormatter) && this._indexLabels.push({
                      chartType: "column",
                      dataPoint: n2[h],
                      dataSeries: f,
                      point: { x: m + (x - m) / 2, y: 0 > n2[h].y === a.axisY.reversed ? y : s },
                      direction: 0 > n2[h].y === a.axisY.reversed ? 1 : -1,
                      bounds: { x1: m, y1: Math.min(y, s), x2: x, y2: Math.max(y, s) },
                      color: b
                    });
                  }
              }
            }
            v && (g.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(
              this._preRenderCanvas,
              0,
              0,
              this.width,
              this.height
            ), c.clearRect(e.x1, e.y1, e.width, e.height), this._eventManager.ghostCtx.restore());
            c.restore();
            return { source: g, dest: this.plotArea.ctx, animationCallback: L.yScaleAnimation, easingFunction: L.easing.easeOutQuart, animationBase: k < a.axisY.bounds.y1 ? a.axisY.bounds.y1 : k > a.axisY.bounds.y2 ? a.axisY.bounds.y2 : k };
          }
        };
        p.prototype.renderStackedColumn = function(a) {
          var g = a.targetCanvasCtx || this.plotArea.ctx, c = v ? this._preRenderCtx : g;
          if (!(0 >= a.dataSeriesIndexes.length)) {
            var b = null, e = this.plotArea, h = [], m = [], y = [], d2 = [], k = 0, l, q, r = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0), k = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1, f = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : 0.15 * this.width << 0, n2 = a.axisX.dataInfo.minDiff;
            isFinite(n2) || (n2 = 0.3 * Math.abs(a.axisX.range));
            n2 = this.options.dataPointWidth ? this.dataPointWidth : 0.9 * (e.width * (a.axisX.logarithmic ? Math.log(n2) / Math.log(a.axisX.range) : Math.abs(n2) / Math.abs(a.axisX.range)) / a.plotType.plotUnits.length) << 0;
            this.dataPointMaxWidth && k > f && (k = Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, f));
            !this.dataPointMaxWidth && (this.dataPointMinWidth && f < k) && (f = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -Infinity, k));
            n2 < k && (n2 = k);
            n2 > f && (n2 = f);
            c.save();
            v && this._eventManager.ghostCtx.save();
            c.beginPath();
            c.rect(e.x1, e.y1, e.width, e.height);
            c.clip();
            v && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(
              e.x1,
              e.y1,
              e.width,
              e.height
            ), this._eventManager.ghostCtx.clip());
            for (f = 0; f < a.dataSeriesIndexes.length; f++) {
              var w = a.dataSeriesIndexes[f], x = this.data[w], s = x.dataPoints;
              if (0 < s.length) {
                var z = 5 < n2 && x.bevelEnabled ? true : false;
                c.strokeStyle = "#4572A7 ";
                for (k = 0; k < s.length; k++)
                  if (b = s[k].x.getTime ? s[k].x.getTime() : s[k].x, !(b < a.axisX.dataInfo.viewPortMin || b > a.axisX.dataInfo.viewPortMax) && "number" === typeof s[k].y) {
                    l = a.axisX.convertValueToPixel(b);
                    l = l - a.plotType.plotUnits.length * n2 / 2 + a.index * n2 << 0;
                    var u = l + n2 << 0, p2;
                    if (a.axisY.logarithmic || a.axisY.scaleBreaks && 0 < a.axisY.scaleBreaks._appliedBreaks.length && 0 < s[k].y)
                      y[b] = s[k].y + (y[b] ? y[b] : 0), 0 < y[b] && (q = a.axisY.convertValueToPixel(y[b]), p2 = "undefined" !== typeof h[b] ? h[b] : r, h[b] = q);
                    else if (a.axisY.scaleBreaks && 0 < a.axisY.scaleBreaks._appliedBreaks.length && 0 >= s[k].y)
                      d2[b] = s[k].y + (d2[b] ? d2[b] : 0), p2 = a.axisY.convertValueToPixel(d2[b]), q = "undefined" !== typeof m[b] ? m[b] : r, m[b] = p2;
                    else if (q = a.axisY.convertValueToPixel(s[k].y), 0 <= s[k].y) {
                      var D = "undefined" !== typeof h[b] ? h[b] : 0;
                      q -= D;
                      p2 = r - D;
                      h[b] = D + (p2 - q);
                    } else
                      D = m[b] ? m[b] : 0, p2 = q + D, q = r + D, m[b] = D + (p2 - q);
                    b = s[k].color ? s[k].color : x._colorSet[k % x._colorSet.length];
                    ba(c, l, a.axisY.reversed ? p2 : q, u, a.axisY.reversed ? q : p2, b, 0, null, z && (a.axisY.reversed ? 0 > s[k].y : 0 <= s[k].y), (a.axisY.reversed ? 0 <= s[k].y : 0 > s[k].y) && z, false, false, x.fillOpacity);
                    b = x.dataPointIds[k];
                    this._eventManager.objectMap[b] = { id: b, objectType: "dataPoint", dataSeriesIndex: w, dataPointIndex: k, x1: l, y1: q, x2: u, y2: p2 };
                    b = U(b);
                    v && ba(this._eventManager.ghostCtx, l, q, u, p2, b, 0, null, false, false, false, false);
                    (s[k].indexLabel || x.indexLabel || s[k].indexLabelFormatter || x.indexLabelFormatter) && this._indexLabels.push({ chartType: "stackedColumn", dataPoint: s[k], dataSeries: x, point: { x: l + (u - l) / 2, y: 0 <= s[k].y ? q : p2 }, direction: 0 > s[k].y === a.axisY.reversed ? 1 : -1, bounds: { x1: l, y1: Math.min(q, p2), x2: u, y2: Math.max(q, p2) }, color: b });
                  }
              }
            }
            v && (g.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.clearRect(e.x1, e.y1, e.width, e.height), this._eventManager.ghostCtx.restore());
            c.restore();
            return { source: g, dest: this.plotArea.ctx, animationCallback: L.yScaleAnimation, easingFunction: L.easing.easeOutQuart, animationBase: r < a.axisY.bounds.y1 ? a.axisY.bounds.y1 : r > a.axisY.bounds.y2 ? a.axisY.bounds.y2 : r };
          }
        };
        p.prototype.renderStackedColumn100 = function(a) {
          var g = a.targetCanvasCtx || this.plotArea.ctx, c = v ? this._preRenderCtx : g;
          if (!(0 >= a.dataSeriesIndexes.length)) {
            var b = null, e = this.plotArea, h = [], m = [], y = [], d2 = [], k = 0, l, q, r = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0), k = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1, f = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : 0.15 * this.width << 0, n2 = a.axisX.dataInfo.minDiff;
            isFinite(n2) || (n2 = 0.3 * Math.abs(a.axisX.range));
            n2 = this.options.dataPointWidth ? this.dataPointWidth : 0.9 * (e.width * (a.axisX.logarithmic ? Math.log(n2) / Math.log(a.axisX.range) : Math.abs(n2) / Math.abs(a.axisX.range)) / a.plotType.plotUnits.length) << 0;
            this.dataPointMaxWidth && k > f && (k = Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, f));
            !this.dataPointMaxWidth && (this.dataPointMinWidth && f < k) && (f = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -Infinity, k));
            n2 < k && (n2 = k);
            n2 > f && (n2 = f);
            c.save();
            v && this._eventManager.ghostCtx.save();
            c.beginPath();
            c.rect(e.x1, e.y1, e.width, e.height);
            c.clip();
            v && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(e.x1, e.y1, e.width, e.height), this._eventManager.ghostCtx.clip());
            for (f = 0; f < a.dataSeriesIndexes.length; f++) {
              var w = a.dataSeriesIndexes[f], x = this.data[w], s = x.dataPoints;
              if (0 < s.length) {
                for (var z = 5 < n2 && x.bevelEnabled ? true : false, k = 0; k < s.length; k++)
                  if (b = s[k].x.getTime ? s[k].x.getTime() : s[k].x, !(b < a.axisX.dataInfo.viewPortMin || b > a.axisX.dataInfo.viewPortMax) && "number" === typeof s[k].y) {
                    l = a.axisX.convertValueToPixel(b);
                    q = 0 !== a.dataPointYSums[b] ? 100 * (s[k].y / a.dataPointYSums[b]) : 0;
                    l = l - a.plotType.plotUnits.length * n2 / 2 + a.index * n2 << 0;
                    var u = l + n2 << 0, p2;
                    if (a.axisY.logarithmic || a.axisY.scaleBreaks && 0 < a.axisY.scaleBreaks._appliedBreaks.length && 0 < s[k].y) {
                      y[b] = q + ("undefined" !== typeof y[b] ? y[b] : 0);
                      if (0 >= y[b])
                        continue;
                      q = a.axisY.convertValueToPixel(y[b]);
                      p2 = h[b] ? h[b] : r;
                      h[b] = q;
                    } else if (a.axisY.scaleBreaks && 0 < a.axisY.scaleBreaks._appliedBreaks.length && 0 >= s[k].y)
                      d2[b] = q + ("undefined" !== typeof d2[b] ? d2[b] : 0), p2 = a.axisY.convertValueToPixel(d2[b]), q = m[b] ? m[b] : r, m[b] = p2;
                    else if (q = a.axisY.convertValueToPixel(q), 0 <= s[k].y) {
                      var D = "undefined" !== typeof h[b] ? h[b] : 0;
                      q -= D;
                      p2 = r - D;
                      a.dataSeriesIndexes.length - 1 === f && 1 >= Math.abs(e.y1 - q) && (q = e.y1);
                      h[b] = D + (p2 - q);
                    } else
                      D = "undefined" !== typeof m[b] ? m[b] : 0, p2 = q + D, q = r + D, a.dataSeriesIndexes.length - 1 === f && 1 >= Math.abs(e.y2 - p2) && (p2 = e.y2), m[b] = D + (p2 - q);
                    b = s[k].color ? s[k].color : x._colorSet[k % x._colorSet.length];
                    ba(c, l, a.axisY.reversed ? p2 : q, u, a.axisY.reversed ? q : p2, b, 0, null, z && (a.axisY.reversed ? 0 > s[k].y : 0 <= s[k].y), (a.axisY.reversed ? 0 <= s[k].y : 0 > s[k].y) && z, false, false, x.fillOpacity);
                    b = x.dataPointIds[k];
                    this._eventManager.objectMap[b] = { id: b, objectType: "dataPoint", dataSeriesIndex: w, dataPointIndex: k, x1: l, y1: q, x2: u, y2: p2 };
                    b = U(b);
                    v && ba(this._eventManager.ghostCtx, l, q, u, p2, b, 0, null, false, false, false, false);
                    (s[k].indexLabel || x.indexLabel || s[k].indexLabelFormatter || x.indexLabelFormatter) && this._indexLabels.push({ chartType: "stackedColumn100", dataPoint: s[k], dataSeries: x, point: { x: l + (u - l) / 2, y: 0 <= s[k].y ? q : p2 }, direction: 0 > s[k].y === a.axisY.reversed ? 1 : -1, bounds: {
                      x1: l,
                      y1: Math.min(q, p2),
                      x2: u,
                      y2: Math.max(q, p2)
                    }, color: b });
                  }
              }
            }
            v && (g.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.clearRect(e.x1, e.y1, e.width, e.height), this._eventManager.ghostCtx.restore());
            c.restore();
            return {
              source: g,
              dest: this.plotArea.ctx,
              animationCallback: L.yScaleAnimation,
              easingFunction: L.easing.easeOutQuart,
              animationBase: r < a.axisY.bounds.y1 ? a.axisY.bounds.y1 : r > a.axisY.bounds.y2 ? a.axisY.bounds.y2 : r
            };
          }
        };
        p.prototype.renderBar = function(a) {
          var g = a.targetCanvasCtx || this.plotArea.ctx, c = v ? this._preRenderCtx : g;
          if (!(0 >= a.dataSeriesIndexes.length)) {
            var b = null, e = this.plotArea, h = 0, m, d2, n2, k = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0), h = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1, l = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : Math.min(0.15 * this.height, 0.9 * (this.plotArea.height / a.plotType.totalDataSeries)) << 0, q = a.axisX.dataInfo.minDiff;
            isFinite(q) || (q = 0.3 * Math.abs(a.axisX.range));
            q = this.options.dataPointWidth ? this.dataPointWidth : 0.9 * (e.height * (a.axisX.logarithmic ? Math.log(q) / Math.log(a.axisX.range) : Math.abs(q) / Math.abs(a.axisX.range)) / a.plotType.totalDataSeries) << 0;
            this.dataPointMaxWidth && h > l && (h = Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, l));
            !this.dataPointMaxWidth && (this.dataPointMinWidth && l < h) && (l = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -Infinity, h));
            q < h && (q = h);
            q > l && (q = l);
            c.save();
            v && this._eventManager.ghostCtx.save();
            c.beginPath();
            c.rect(e.x1, e.y1, e.width, e.height);
            c.clip();
            v && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(e.x1, e.y1, e.width, e.height), this._eventManager.ghostCtx.clip());
            for (l = 0; l < a.dataSeriesIndexes.length; l++) {
              var r = a.dataSeriesIndexes[l], f = this.data[r], p2 = f.dataPoints;
              if (0 < p2.length) {
                var w = 5 < q && f.bevelEnabled ? true : false;
                c.strokeStyle = "#4572A7 ";
                for (h = 0; h < p2.length; h++)
                  if (p2[h].getTime ? n2 = p2[h].x.getTime() : n2 = p2[h].x, !(n2 < a.axisX.dataInfo.viewPortMin || n2 > a.axisX.dataInfo.viewPortMax) && "number" === typeof p2[h].y) {
                    d2 = a.axisX.convertValueToPixel(n2);
                    m = a.axisY.convertValueToPixel(p2[h].y);
                    d2 = a.axisX.reversed ? d2 + a.plotType.totalDataSeries * q / 2 - (a.previousDataSeriesCount + l) * q << 0 : d2 - a.plotType.totalDataSeries * q / 2 + (a.previousDataSeriesCount + l) * q << 0;
                    var x = a.axisX.reversed ? d2 - q << 0 : d2 + q << 0, s;
                    0 <= p2[h].y ? s = k : (s = m, m = k);
                    b = p2[h].color ? p2[h].color : f._colorSet[h % f._colorSet.length];
                    ba(c, a.axisY.reversed ? m : s, a.axisX.reversed ? x : d2, a.axisY.reversed ? s : m, a.axisX.reversed ? d2 : x, b, 0, null, w, false, false, false, f.fillOpacity);
                    b = f.dataPointIds[h];
                    this._eventManager.objectMap[b] = { id: b, objectType: "dataPoint", dataSeriesIndex: r, dataPointIndex: h, x1: s, y1: d2, x2: m, y2: x };
                    b = U(b);
                    v && ba(this._eventManager.ghostCtx, s, a.axisX.reversed ? x : d2, m, a.axisX.reversed ? d2 : x, b, 0, null, false, false, false, false);
                    (p2[h].indexLabel || f.indexLabel || p2[h].indexLabelFormatter || f.indexLabelFormatter) && this._indexLabels.push({ chartType: "bar", dataPoint: p2[h], dataSeries: f, point: { x: 0 <= p2[h].y ? m : s, y: d2 + (x - d2) / 2 }, direction: 0 > p2[h].y === a.axisY.reversed ? 1 : -1, bounds: { x1: Math.min(s, m), y1: d2, x2: Math.max(s, m), y2: x }, color: b });
                  }
              }
            }
            v && (g.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && c.drawImage(
              a.axisY.maskCanvas,
              0,
              0,
              this.width,
              this.height
            ), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.clearRect(e.x1, e.y1, e.width, e.height), this._eventManager.ghostCtx.restore());
            c.restore();
            return { source: g, dest: this.plotArea.ctx, animationCallback: L.xScaleAnimation, easingFunction: L.easing.easeOutQuart, animationBase: k < a.axisY.bounds.x1 ? a.axisY.bounds.x1 : k > a.axisY.bounds.x2 ? a.axisY.bounds.x2 : k };
          }
        };
        p.prototype.renderStackedBar = function(a) {
          var g = a.targetCanvasCtx || this.plotArea.ctx, c = v ? this._preRenderCtx : g;
          if (!(0 >= a.dataSeriesIndexes.length)) {
            var b = null, e = this.plotArea, h = [], m = [], d2 = [], n2 = [], k = 0, l, q, r = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0), k = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1, f = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : 0.15 * this.height << 0, p2 = a.axisX.dataInfo.minDiff;
            isFinite(p2) || (p2 = 0.3 * Math.abs(a.axisX.range));
            p2 = this.options.dataPointWidth ? this.dataPointWidth : 0.9 * (e.height * (a.axisX.logarithmic ? Math.log(p2) / Math.log(a.axisX.range) : Math.abs(p2) / Math.abs(a.axisX.range)) / a.plotType.plotUnits.length) << 0;
            this.dataPointMaxWidth && k > f && (k = Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, f));
            !this.dataPointMaxWidth && (this.dataPointMinWidth && f < k) && (f = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -Infinity, k));
            p2 < k && (p2 = k);
            p2 > f && (p2 = f);
            c.save();
            v && this._eventManager.ghostCtx.save();
            c.beginPath();
            c.rect(e.x1, e.y1, e.width, e.height);
            c.clip();
            v && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(e.x1, e.y1, e.width, e.height), this._eventManager.ghostCtx.clip());
            for (f = 0; f < a.dataSeriesIndexes.length; f++) {
              var w = a.dataSeriesIndexes[f], x = this.data[w], s = x.dataPoints;
              if (0 < s.length) {
                var z = 5 < p2 && x.bevelEnabled ? true : false;
                c.strokeStyle = "#4572A7 ";
                for (k = 0; k < s.length; k++)
                  if (b = s[k].x.getTime ? s[k].x.getTime() : s[k].x, !(b < a.axisX.dataInfo.viewPortMin || b > a.axisX.dataInfo.viewPortMax) && "number" === typeof s[k].y) {
                    q = a.axisX.convertValueToPixel(b);
                    q = q - a.plotType.plotUnits.length * p2 / 2 + a.index * p2 << 0;
                    var u = q + p2 << 0, t3;
                    if (a.axisY.logarithmic || a.axisY.scaleBreaks && 0 < a.axisY.scaleBreaks._appliedBreaks.length && 0 < s[k].y)
                      d2[b] = s[k].y + (d2[b] ? d2[b] : 0), 0 < d2[b] && (t3 = h[b] ? h[b] : r, h[b] = l = a.axisY.convertValueToPixel(d2[b]));
                    else if (a.axisY.scaleBreaks && 0 < a.axisY.scaleBreaks._appliedBreaks.length && 0 >= s[k].y)
                      n2[b] = s[k].y + (n2[b] ? n2[b] : 0), l = m[b] ? m[b] : r, m[b] = t3 = a.axisY.convertValueToPixel(n2[b]);
                    else if (l = a.axisY.convertValueToPixel(s[k].y), 0 <= s[k].y) {
                      var D = h[b] ? h[b] : 0;
                      t3 = r + D;
                      l += D;
                      h[b] = D + (l - t3);
                    } else
                      D = m[b] ? m[b] : 0, t3 = l - D, l = r - D, m[b] = D + (l - t3);
                    b = s[k].color ? s[k].color : x._colorSet[k % x._colorSet.length];
                    ba(c, a.axisY.reversed ? l : t3, q, a.axisY.reversed ? t3 : l, u, b, 0, null, z, false, false, false, x.fillOpacity);
                    b = x.dataPointIds[k];
                    this._eventManager.objectMap[b] = { id: b, objectType: "dataPoint", dataSeriesIndex: w, dataPointIndex: k, x1: t3, y1: q, x2: l, y2: u };
                    b = U(b);
                    v && ba(this._eventManager.ghostCtx, t3, q, l, u, b, 0, null, false, false, false, false);
                    (s[k].indexLabel || x.indexLabel || s[k].indexLabelFormatter || x.indexLabelFormatter) && this._indexLabels.push({
                      chartType: "stackedBar",
                      dataPoint: s[k],
                      dataSeries: x,
                      point: { x: 0 <= s[k].y ? l : t3, y: q + (u - q) / 2 },
                      direction: 0 > s[k].y === a.axisY.reversed ? 1 : -1,
                      bounds: { x1: Math.min(t3, l), y1: q, x2: Math.max(t3, l), y2: u },
                      color: b
                    });
                  }
              }
            }
            v && (g.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(
              this._preRenderCanvas,
              0,
              0,
              this.width,
              this.height
            ), c.clearRect(e.x1, e.y1, e.width, e.height), this._eventManager.ghostCtx.restore());
            c.restore();
            return { source: g, dest: this.plotArea.ctx, animationCallback: L.xScaleAnimation, easingFunction: L.easing.easeOutQuart, animationBase: r < a.axisY.bounds.x1 ? a.axisY.bounds.x1 : r > a.axisY.bounds.x2 ? a.axisY.bounds.x2 : r };
          }
        };
        p.prototype.renderStackedBar100 = function(a) {
          var g = a.targetCanvasCtx || this.plotArea.ctx, c = v ? this._preRenderCtx : g;
          if (!(0 >= a.dataSeriesIndexes.length)) {
            var b = null, e = this.plotArea, h = [], m = [], d2 = [], n2 = [], k = 0, l, q, r = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0), k = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1, f = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : 0.15 * this.height << 0, p2 = a.axisX.dataInfo.minDiff;
            isFinite(p2) || (p2 = 0.3 * Math.abs(a.axisX.range));
            p2 = this.options.dataPointWidth ? this.dataPointWidth : 0.9 * (e.height * (a.axisX.logarithmic ? Math.log(p2) / Math.log(a.axisX.range) : Math.abs(p2) / Math.abs(a.axisX.range)) / a.plotType.plotUnits.length) << 0;
            this.dataPointMaxWidth && k > f && (k = Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, f));
            !this.dataPointMaxWidth && (this.dataPointMinWidth && f < k) && (f = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -Infinity, k));
            p2 < k && (p2 = k);
            p2 > f && (p2 = f);
            c.save();
            v && this._eventManager.ghostCtx.save();
            c.beginPath();
            c.rect(e.x1, e.y1, e.width, e.height);
            c.clip();
            v && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(
              e.x1,
              e.y1,
              e.width,
              e.height
            ), this._eventManager.ghostCtx.clip());
            for (f = 0; f < a.dataSeriesIndexes.length; f++) {
              var w = a.dataSeriesIndexes[f], x = this.data[w], s = x.dataPoints;
              if (0 < s.length) {
                var z = 5 < p2 && x.bevelEnabled ? true : false;
                c.strokeStyle = "#4572A7 ";
                for (k = 0; k < s.length; k++)
                  if (b = s[k].x.getTime ? s[k].x.getTime() : s[k].x, !(b < a.axisX.dataInfo.viewPortMin || b > a.axisX.dataInfo.viewPortMax) && "number" === typeof s[k].y) {
                    q = a.axisX.convertValueToPixel(b);
                    var u;
                    u = 0 !== a.dataPointYSums[b] ? 100 * (s[k].y / a.dataPointYSums[b]) : 0;
                    q = q - a.plotType.plotUnits.length * p2 / 2 + a.index * p2 << 0;
                    var t3 = q + p2 << 0;
                    if (a.axisY.logarithmic || a.axisY.scaleBreaks && 0 < a.axisY.scaleBreaks._appliedBreaks.length && 0 < s[k].y) {
                      d2[b] = u + (d2[b] ? d2[b] : 0);
                      if (0 >= d2[b])
                        continue;
                      u = h[b] ? h[b] : r;
                      h[b] = l = a.axisY.convertValueToPixel(d2[b]);
                    } else if (a.axisY.scaleBreaks && 0 < a.axisY.scaleBreaks._appliedBreaks.length && 0 >= s[k].y)
                      n2[b] = u + (n2[b] ? n2[b] : 0), l = m[b] ? m[b] : r, m[b] = u = a.axisY.convertValueToPixel(n2[b]);
                    else if (l = a.axisY.convertValueToPixel(u), 0 <= s[k].y) {
                      var D = h[b] ? h[b] : 0;
                      u = r + D;
                      l += D;
                      a.dataSeriesIndexes.length - 1 === f && 1 >= Math.abs(e.x2 - l) && (l = e.x2);
                      h[b] = D + (l - u);
                    } else
                      D = m[b] ? m[b] : 0, u = l - D, l = r - D, a.dataSeriesIndexes.length - 1 === f && 1 >= Math.abs(e.x1 - u) && (u = e.x1), m[b] = D + (l - u);
                    b = s[k].color ? s[k].color : x._colorSet[k % x._colorSet.length];
                    ba(c, a.axisY.reversed ? l : u, q, a.axisY.reversed ? u : l, t3, b, 0, null, z, false, false, false, x.fillOpacity);
                    b = x.dataPointIds[k];
                    this._eventManager.objectMap[b] = { id: b, objectType: "dataPoint", dataSeriesIndex: w, dataPointIndex: k, x1: u, y1: q, x2: l, y2: t3 };
                    b = U(b);
                    v && ba(this._eventManager.ghostCtx, u, q, l, t3, b, 0, null, false, false, false, false);
                    (s[k].indexLabel || x.indexLabel || s[k].indexLabelFormatter || x.indexLabelFormatter) && this._indexLabels.push({ chartType: "stackedBar100", dataPoint: s[k], dataSeries: x, point: { x: 0 <= s[k].y ? l : u, y: q + (t3 - q) / 2 }, direction: 0 > s[k].y === a.axisY.reversed ? 1 : -1, bounds: { x1: Math.min(u, l), y1: q, x2: Math.max(u, l), y2: t3 }, color: b });
                  }
              }
            }
            v && (g.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.clearRect(e.x1, e.y1, e.width, e.height), this._eventManager.ghostCtx.restore());
            c.restore();
            return { source: g, dest: this.plotArea.ctx, animationCallback: L.xScaleAnimation, easingFunction: L.easing.easeOutQuart, animationBase: r < a.axisY.bounds.x1 ? a.axisY.bounds.x1 : r > a.axisY.bounds.x2 ? a.axisY.bounds.x2 : r };
          }
        };
        p.prototype.renderArea = function(a) {
          var g, c;
          function b() {
            D && (0 < f.lineThickness && h.stroke(), a.axisY.logarithmic || 0 >= a.axisY.viewportMinimum && 0 <= a.axisY.viewportMaximum ? t3 = u : 0 > a.axisY.viewportMaximum ? t3 = d2.y1 : 0 < a.axisY.viewportMinimum && (t3 = u), h.lineTo(x, t3), h.lineTo(D.x, t3), h.closePath(), h.globalAlpha = f.fillOpacity, h.fill(), h.globalAlpha = 1, v && (m.lineTo(x, t3), m.lineTo(D.x, t3), m.closePath(), m.fill()), h.beginPath(), h.moveTo(x, s), m.beginPath(), m.moveTo(x, s), D = { x, y: s });
          }
          var e = a.targetCanvasCtx || this.plotArea.ctx, h = v ? this._preRenderCtx : e;
          if (!(0 >= a.dataSeriesIndexes.length)) {
            var m = this._eventManager.ghostCtx, d2 = a.axisY.lineCoordinates, n2 = [], k = this.plotArea, l;
            h.save();
            v && m.save();
            h.beginPath();
            h.rect(k.x1, k.y1, k.width, k.height);
            h.clip();
            v && (m.beginPath(), m.rect(k.x1, k.y1, k.width, k.height), m.clip());
            for (var q = 0; q < a.dataSeriesIndexes.length; q++) {
              var r = a.dataSeriesIndexes[q], f = this.data[r], p2 = f.dataPoints, n2 = f.id;
              this._eventManager.objectMap[n2] = { objectType: "dataSeries", dataSeriesIndex: r };
              n2 = U(n2);
              m.fillStyle = n2;
              n2 = [];
              g = true;
              var w = 0, x, s, z, u = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0), t3, D = null;
              if (0 < p2.length) {
                var C = f._colorSet[w % f._colorSet.length], B3 = f.lineColor = f.options.lineColor || C, A2 = B3;
                h.fillStyle = C;
                h.strokeStyle = B3;
                h.lineWidth = f.lineThickness;
                c = "solid";
                if (h.setLineDash) {
                  var J = G(f.nullDataLineDashType, f.lineThickness);
                  c = f.lineDashType;
                  var K = G(c, f.lineThickness);
                  h.setLineDash(K);
                }
                for (var aa = true; w < p2.length; w++)
                  if (z = p2[w].x.getTime ? p2[w].x.getTime() : p2[w].x, !(z < a.axisX.dataInfo.viewPortMin || z > a.axisX.dataInfo.viewPortMax && (!f.connectNullData || !aa)))
                    if ("number" !== typeof p2[w].y)
                      f.connectNullData || (aa || g) || b(), aa = true;
                    else {
                      x = a.axisX.convertValueToPixel(z);
                      s = a.axisY.convertValueToPixel(p2[w].y);
                      g || aa ? (!g && f.connectNullData ? (h.setLineDash && (f.options.nullDataLineDashType || c === f.lineDashType && f.lineDashType !== f.nullDataLineDashType) && (g = x, c = s, x = l.x, s = l.y, b(), h.moveTo(l.x, l.y), x = g, s = c, D = l, c = f.nullDataLineDashType, h.setLineDash(J)), h.lineTo(x, s), v && m.lineTo(x, s)) : (h.beginPath(), h.moveTo(x, s), v && (m.beginPath(), m.moveTo(x, s)), D = { x, y: s }), aa = g = false) : (h.lineTo(x, s), v && m.lineTo(
                        x,
                        s
                      ), 0 == w % 250 && b());
                      l = { x, y: s };
                      w < p2.length - 1 && (A2 !== (p2[w].lineColor || B3) || c !== (p2[w].lineDashType || f.lineDashType)) && (b(), A2 = p2[w].lineColor || B3, h.strokeStyle = A2, h.setLineDash && (p2[w].lineDashType ? (c = p2[w].lineDashType, h.setLineDash(G(c, f.lineThickness))) : (c = f.lineDashType, h.setLineDash(K))));
                      var Z = f.dataPointIds[w];
                      this._eventManager.objectMap[Z] = { id: Z, objectType: "dataPoint", dataSeriesIndex: r, dataPointIndex: w, x1: x, y1: s };
                      0 !== p2[w].markerSize && (0 < p2[w].markerSize || 0 < f.markerSize) && (z = f.getMarkerProperties(
                        w,
                        x,
                        s,
                        h
                      ), n2.push(z), Z = U(Z), v && n2.push({ x, y: s, ctx: m, type: z.type, size: z.size, color: Z, borderColor: Z, borderThickness: z.borderThickness }));
                      (p2[w].indexLabel || f.indexLabel || p2[w].indexLabelFormatter || f.indexLabelFormatter) && this._indexLabels.push({ chartType: "area", dataPoint: p2[w], dataSeries: f, point: { x, y: s }, direction: 0 > p2[w].y === a.axisY.reversed ? 1 : -1, color: C });
                    }
                b();
                X.drawMarkers(n2);
              }
            }
            v && (e.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), h.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && h.drawImage(
              a.axisX.maskCanvas,
              0,
              0,
              this.width,
              this.height
            ), a.axisY.maskCanvas && h.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), h.clearRect(k.x1, k.y1, k.width, k.height), this._eventManager.ghostCtx.restore());
            h.restore();
            return { source: e, dest: this.plotArea.ctx, animationCallback: L.xClipAnimation, easingFunction: L.easing.linear, animationBase: 0 };
          }
        };
        p.prototype.renderSplineArea = function(a) {
          function g() {
            var c2 = t2(z, 2);
            if (0 < c2.length) {
              if (0 < l.lineThickness) {
                b.beginPath();
                b.moveTo(c2[0].x, c2[0].y);
                c2[0].newStrokeStyle && (b.strokeStyle = c2[0].newStrokeStyle);
                c2[0].newLineDashArray && b.setLineDash(c2[0].newLineDashArray);
                for (var f2 = 0; f2 < c2.length - 3; f2 += 3)
                  if (b.bezierCurveTo(c2[f2 + 1].x, c2[f2 + 1].y, c2[f2 + 2].x, c2[f2 + 2].y, c2[f2 + 3].x, c2[f2 + 3].y), v && e.bezierCurveTo(c2[f2 + 1].x, c2[f2 + 1].y, c2[f2 + 2].x, c2[f2 + 2].y, c2[f2 + 3].x, c2[f2 + 3].y), c2[f2 + 3].newStrokeStyle || c2[f2 + 3].newLineDashArray)
                    b.stroke(), b.beginPath(), b.moveTo(c2[f2 + 3].x, c2[f2 + 3].y), c2[f2 + 3].newStrokeStyle && (b.strokeStyle = c2[f2 + 3].newStrokeStyle), c2[f2 + 3].newLineDashArray && b.setLineDash(c2[f2 + 3].newLineDashArray);
                b.stroke();
              }
              b.beginPath();
              b.moveTo(c2[0].x, c2[0].y);
              v && (e.beginPath(), e.moveTo(c2[0].x, c2[0].y));
              for (f2 = 0; f2 < c2.length - 3; f2 += 3)
                b.bezierCurveTo(c2[f2 + 1].x, c2[f2 + 1].y, c2[f2 + 2].x, c2[f2 + 2].y, c2[f2 + 3].x, c2[f2 + 3].y), v && e.bezierCurveTo(c2[f2 + 1].x, c2[f2 + 1].y, c2[f2 + 2].x, c2[f2 + 2].y, c2[f2 + 3].x, c2[f2 + 3].y);
              a.axisY.logarithmic || 0 >= a.axisY.viewportMinimum && 0 <= a.axisY.viewportMaximum ? x = w : 0 > a.axisY.viewportMaximum ? x = h.y1 : 0 < a.axisY.viewportMinimum && (x = w);
              s = { x: c2[0].x, y: c2[0].y };
              b.lineTo(c2[c2.length - 1].x, x);
              b.lineTo(s.x, x);
              b.closePath();
              b.globalAlpha = l.fillOpacity;
              b.fill();
              b.globalAlpha = 1;
              v && (e.lineTo(c2[c2.length - 1].x, x), e.lineTo(s.x, x), e.closePath(), e.fill());
            }
          }
          var c = a.targetCanvasCtx || this.plotArea.ctx, b = v ? this._preRenderCtx : c;
          if (!(0 >= a.dataSeriesIndexes.length)) {
            var e = this._eventManager.ghostCtx, h = a.axisY.lineCoordinates, m = [], d2 = this.plotArea;
            b.save();
            v && e.save();
            b.beginPath();
            b.rect(d2.x1, d2.y1, d2.width, d2.height);
            b.clip();
            v && (e.beginPath(), e.rect(d2.x1, d2.y1, d2.width, d2.height), e.clip());
            for (var n2 = 0; n2 < a.dataSeriesIndexes.length; n2++) {
              var k = a.dataSeriesIndexes[n2], l = this.data[k], q = l.dataPoints, m = l.id;
              this._eventManager.objectMap[m] = { objectType: "dataSeries", dataSeriesIndex: k };
              m = U(m);
              e.fillStyle = m;
              var m = [], r = 0, f, p2, w = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0), x, s = null, z = [];
              if (0 < q.length) {
                var u = l._colorSet[r % l._colorSet.length], B3 = l.lineColor = l.options.lineColor || u, D = B3;
                b.fillStyle = u;
                b.strokeStyle = B3;
                b.lineWidth = l.lineThickness;
                var C = "solid";
                if (b.setLineDash) {
                  var A2 = G(
                    l.nullDataLineDashType,
                    l.lineThickness
                  ), C = l.lineDashType, db = G(C, l.lineThickness);
                  b.setLineDash(db);
                }
                for (p2 = false; r < q.length; r++)
                  if (f = q[r].x.getTime ? q[r].x.getTime() : q[r].x, !(f < a.axisX.dataInfo.viewPortMin || f > a.axisX.dataInfo.viewPortMax && (!l.connectNullData || !p2)))
                    if ("number" !== typeof q[r].y)
                      0 < r && !p2 && (l.connectNullData ? b.setLineDash && (0 < z.length && (l.options.nullDataLineDashType || !q[r - 1].lineDashType)) && (z[z.length - 1].newLineDashArray = A2, C = l.nullDataLineDashType) : (g(), z = [])), p2 = true;
                    else {
                      f = a.axisX.convertValueToPixel(f);
                      p2 = a.axisY.convertValueToPixel(q[r].y);
                      var J = l.dataPointIds[r];
                      this._eventManager.objectMap[J] = { id: J, objectType: "dataPoint", dataSeriesIndex: k, dataPointIndex: r, x1: f, y1: p2 };
                      z[z.length] = { x: f, y: p2 };
                      r < q.length - 1 && (D !== (q[r].lineColor || B3) || C !== (q[r].lineDashType || l.lineDashType)) && (D = q[r].lineColor || B3, z[z.length - 1].newStrokeStyle = D, b.setLineDash && (q[r].lineDashType ? (C = q[r].lineDashType, z[z.length - 1].newLineDashArray = G(C, l.lineThickness)) : (C = l.lineDashType, z[z.length - 1].newLineDashArray = db)));
                      if (0 !== q[r].markerSize && (0 < q[r].markerSize || 0 < l.markerSize)) {
                        var K = l.getMarkerProperties(r, f, p2, b);
                        m.push(K);
                        J = U(J);
                        v && m.push({ x: f, y: p2, ctx: e, type: K.type, size: K.size, color: J, borderColor: J, borderThickness: K.borderThickness });
                      }
                      (q[r].indexLabel || l.indexLabel || q[r].indexLabelFormatter || l.indexLabelFormatter) && this._indexLabels.push({ chartType: "splineArea", dataPoint: q[r], dataSeries: l, point: { x: f, y: p2 }, direction: 0 > q[r].y === a.axisY.reversed ? 1 : -1, color: u });
                      p2 = false;
                    }
                g();
                X.drawMarkers(m);
              }
            }
            v && (c.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && b.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && b.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.clearRect(d2.x1, d2.y1, d2.width, d2.height), this._eventManager.ghostCtx.restore());
            b.restore();
            return { source: c, dest: this.plotArea.ctx, animationCallback: L.xClipAnimation, easingFunction: L.easing.linear, animationBase: 0 };
          }
        };
        p.prototype.renderStepArea = function(a) {
          var g, c;
          function b() {
            D && (0 < f.lineThickness && h.stroke(), a.axisY.logarithmic || 0 >= a.axisY.viewportMinimum && 0 <= a.axisY.viewportMaximum ? t3 = u : 0 > a.axisY.viewportMaximum ? t3 = d2.y1 : 0 < a.axisY.viewportMinimum && (t3 = u), h.lineTo(x, t3), h.lineTo(D.x, t3), h.closePath(), h.globalAlpha = f.fillOpacity, h.fill(), h.globalAlpha = 1, v && (m.lineTo(x, t3), m.lineTo(D.x, t3), m.closePath(), m.fill()), h.beginPath(), h.moveTo(x, s), m.beginPath(), m.moveTo(x, s), D = { x, y: s });
          }
          var e = a.targetCanvasCtx || this.plotArea.ctx, h = v ? this._preRenderCtx : e;
          if (!(0 >= a.dataSeriesIndexes.length)) {
            var m = this._eventManager.ghostCtx, d2 = a.axisY.lineCoordinates, n2 = [], k = this.plotArea, l;
            h.save();
            v && m.save();
            h.beginPath();
            h.rect(k.x1, k.y1, k.width, k.height);
            h.clip();
            v && (m.beginPath(), m.rect(k.x1, k.y1, k.width, k.height), m.clip());
            for (var q = 0; q < a.dataSeriesIndexes.length; q++) {
              var r = a.dataSeriesIndexes[q], f = this.data[r], p2 = f.dataPoints, n2 = f.id;
              this._eventManager.objectMap[n2] = { objectType: "dataSeries", dataSeriesIndex: r };
              n2 = U(n2);
              m.fillStyle = n2;
              n2 = [];
              g = true;
              var w = 0, x, s, z, u = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0), t3, D = null;
              c = false;
              if (0 < p2.length) {
                var C = f._colorSet[w % f._colorSet.length], B3 = f.lineColor = f.options.lineColor || C, A2 = B3;
                h.fillStyle = C;
                h.strokeStyle = B3;
                h.lineWidth = f.lineThickness;
                var J = "solid";
                if (h.setLineDash) {
                  var K = G(f.nullDataLineDashType, f.lineThickness), J = f.lineDashType, aa = G(J, f.lineThickness);
                  h.setLineDash(aa);
                }
                for (; w < p2.length; w++)
                  if (z = p2[w].x.getTime ? p2[w].x.getTime() : p2[w].x, !(z < a.axisX.dataInfo.viewPortMin || z > a.axisX.dataInfo.viewPortMax && (!f.connectNullData || !c))) {
                    var Z = s;
                    "number" !== typeof p2[w].y ? (f.connectNullData || (c || g) || b(), c = true) : (x = a.axisX.convertValueToPixel(z), s = a.axisY.convertValueToPixel(p2[w].y), g || c ? (!g && f.connectNullData ? (h.setLineDash && (f.options.nullDataLineDashType || J === f.lineDashType && f.lineDashType !== f.nullDataLineDashType) && (g = x, c = s, x = l.x, s = l.y, b(), h.moveTo(l.x, l.y), x = g, s = c, D = l, J = f.nullDataLineDashType, h.setLineDash(K)), h.lineTo(x, Z), h.lineTo(x, s), v && (m.lineTo(x, Z), m.lineTo(x, s))) : (h.beginPath(), h.moveTo(x, s), v && (m.beginPath(), m.moveTo(x, s)), D = { x, y: s }), c = g = false) : (h.lineTo(x, Z), v && m.lineTo(x, Z), h.lineTo(x, s), v && m.lineTo(x, s), 0 == w % 250 && b()), l = { x, y: s }, w < p2.length - 1 && (A2 !== (p2[w].lineColor || B3) || J !== (p2[w].lineDashType || f.lineDashType)) && (b(), A2 = p2[w].lineColor || B3, h.strokeStyle = A2, h.setLineDash && (p2[w].lineDashType ? (J = p2[w].lineDashType, h.setLineDash(G(J, f.lineThickness))) : (J = f.lineDashType, h.setLineDash(aa)))), z = f.dataPointIds[w], this._eventManager.objectMap[z] = { id: z, objectType: "dataPoint", dataSeriesIndex: r, dataPointIndex: w, x1: x, y1: s }, 0 !== p2[w].markerSize && (0 < p2[w].markerSize || 0 < f.markerSize) && (Z = f.getMarkerProperties(w, x, s, h), n2.push(Z), z = U(z), v && n2.push({ x, y: s, ctx: m, type: Z.type, size: Z.size, color: z, borderColor: z, borderThickness: Z.borderThickness })), (p2[w].indexLabel || f.indexLabel || p2[w].indexLabelFormatter || f.indexLabelFormatter) && this._indexLabels.push({ chartType: "stepArea", dataPoint: p2[w], dataSeries: f, point: { x, y: s }, direction: 0 > p2[w].y === a.axisY.reversed ? 1 : -1, color: C }));
                  }
                b();
                X.drawMarkers(n2);
              }
            }
            v && (e.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), h.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && h.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && h.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), h.clearRect(k.x1, k.y1, k.width, k.height), this._eventManager.ghostCtx.restore());
            h.restore();
            return { source: e, dest: this.plotArea.ctx, animationCallback: L.xClipAnimation, easingFunction: L.easing.linear, animationBase: 0 };
          }
        };
        p.prototype.renderStackedArea = function(a) {
          function g() {
            if (!(1 > k.length)) {
              for (0 < C.lineThickness && b.stroke(); 0 < k.length; ) {
                var a2 = k.pop();
                b.lineTo(a2.x, a2.y);
                v && x.lineTo(a2.x, a2.y);
              }
              b.closePath();
              b.globalAlpha = C.fillOpacity;
              b.fill();
              b.globalAlpha = 1;
              b.beginPath();
              v && (x.closePath(), x.fill(), x.beginPath());
              k = [];
            }
          }
          var c = a.targetCanvasCtx || this.plotArea.ctx, b = v ? this._preRenderCtx : c;
          if (!(0 >= a.dataSeriesIndexes.length)) {
            var e = null, h = null, m = [], d2 = this.plotArea, n2 = [], k = [], l = [], q = [], r = 0, f, p2, w = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0), x = this._eventManager.ghostCtx, s, z, u;
            v && x.beginPath();
            b.save();
            v && x.save();
            b.beginPath();
            b.rect(d2.x1, d2.y1, d2.width, d2.height);
            b.clip();
            v && (x.beginPath(), x.rect(d2.x1, d2.y1, d2.width, d2.height), x.clip());
            for (var e = [], t3 = 0; t3 < a.dataSeriesIndexes.length; t3++) {
              var D = a.dataSeriesIndexes[t3], C = this.data[D], B3 = C.dataPoints;
              C.dataPointIndexes = [];
              for (r = 0; r < B3.length; r++)
                D = B3[r].x.getTime ? B3[r].x.getTime() : B3[r].x, C.dataPointIndexes[D] = r, e[D] || (l.push(D), e[D] = true);
              l.sort(Sa);
            }
            for (t3 = 0; t3 < a.dataSeriesIndexes.length; t3++) {
              D = a.dataSeriesIndexes[t3];
              C = this.data[D];
              B3 = C.dataPoints;
              z = true;
              k = [];
              r = C.id;
              this._eventManager.objectMap[r] = { objectType: "dataSeries", dataSeriesIndex: D };
              r = U(r);
              x.fillStyle = r;
              if (0 < l.length) {
                var e = C._colorSet[0], A2 = C.lineColor = C.options.lineColor || e, J = A2;
                b.fillStyle = e;
                b.strokeStyle = A2;
                b.lineWidth = C.lineThickness;
                u = "solid";
                if (b.setLineDash) {
                  var K = G(C.nullDataLineDashType, C.lineThickness);
                  u = C.lineDashType;
                  var aa = G(u, C.lineThickness);
                  b.setLineDash(aa);
                }
                for (var Z = true, r = 0; r < l.length; r++) {
                  var h = l[r], ga = null, ga = 0 <= C.dataPointIndexes[h] ? B3[C.dataPointIndexes[h]] : { x: h, y: null };
                  if (!(h < a.axisX.dataInfo.viewPortMin || h > a.axisX.dataInfo.viewPortMax && (!C.connectNullData || !Z)))
                    if ("number" !== typeof ga.y)
                      C.connectNullData || (Z || z) || g(), Z = true;
                    else {
                      f = a.axisX.convertValueToPixel(h);
                      var oa = n2[h] ? n2[h] : 0;
                      if (a.axisY.logarithmic || a.axisY.scaleBreaks && 0 < a.axisY.scaleBreaks._appliedBreaks.length) {
                        q[h] = ga.y + (q[h] ? q[h] : 0);
                        if (0 >= q[h] && a.axisY.logarithmic)
                          continue;
                        p2 = a.axisY.convertValueToPixel(q[h]);
                      } else
                        p2 = a.axisY.convertValueToPixel(ga.y), p2 -= oa;
                      k.push({ x: f, y: w - oa });
                      n2[h] = w - p2;
                      z || Z ? (!z && C.connectNullData ? (b.setLineDash && (C.options.nullDataLineDashType || u === C.lineDashType && C.lineDashType !== C.nullDataLineDashType) && (z = k.pop(), u = k[k.length - 1], g(), b.moveTo(s.x, s.y), k.push(u), k.push(z), u = C.nullDataLineDashType, b.setLineDash(K)), b.lineTo(f, p2), v && x.lineTo(f, p2)) : (b.beginPath(), b.moveTo(f, p2), v && (x.beginPath(), x.moveTo(f, p2))), Z = z = false) : (b.lineTo(f, p2), v && x.lineTo(f, p2), 0 == r % 250 && (g(), b.moveTo(f, p2), v && x.moveTo(f, p2), k.push({ x: f, y: w - oa })));
                      s = { x: f, y: p2 };
                      r < B3.length - 1 && (J !== (B3[r].lineColor || A2) || u !== (B3[r].lineDashType || C.lineDashType)) && (g(), b.beginPath(), b.moveTo(f, p2), k.push({ x: f, y: w - oa }), J = B3[r].lineColor || A2, b.strokeStyle = J, b.setLineDash && (B3[r].lineDashType ? (u = B3[r].lineDashType, b.setLineDash(G(u, C.lineThickness))) : (u = C.lineDashType, b.setLineDash(aa))));
                      if (0 <= C.dataPointIndexes[h]) {
                        var ka = C.dataPointIds[C.dataPointIndexes[h]];
                        this._eventManager.objectMap[ka] = { id: ka, objectType: "dataPoint", dataSeriesIndex: D, dataPointIndex: C.dataPointIndexes[h], x1: f, y1: p2 };
                      }
                      0 <= C.dataPointIndexes[h] && 0 !== ga.markerSize && (0 < ga.markerSize || 0 < C.markerSize) && (oa = C.getMarkerProperties(C.dataPointIndexes[h], f, p2, b), m.push(oa), h = U(ka), v && m.push({ x: f, y: p2, ctx: x, type: oa.type, size: oa.size, color: h, borderColor: h, borderThickness: oa.borderThickness }));
                      (ga.indexLabel || C.indexLabel || ga.indexLabelFormatter || C.indexLabelFormatter) && this._indexLabels.push({ chartType: "stackedArea", dataPoint: ga, dataSeries: C, point: { x: f, y: p2 }, direction: 0 > ga.y === a.axisY.reversed ? 1 : -1, color: e });
                    }
                }
                g();
                b.moveTo(f, p2);
                v && x.moveTo(f, p2);
              }
              delete C.dataPointIndexes;
            }
            X.drawMarkers(m);
            v && (c.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && b.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && b.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.clearRect(d2.x1, d2.y1, d2.width, d2.height), x.restore());
            b.restore();
            return {
              source: c,
              dest: this.plotArea.ctx,
              animationCallback: L.xClipAnimation,
              easingFunction: L.easing.linear,
              animationBase: 0
            };
          }
        };
        p.prototype.renderStackedArea100 = function(a) {
          function g() {
            for (0 < C.lineThickness && b.stroke(); 0 < k.length; ) {
              var a2 = k.pop();
              b.lineTo(a2.x, a2.y);
              v && u.lineTo(a2.x, a2.y);
            }
            b.closePath();
            b.globalAlpha = C.fillOpacity;
            b.fill();
            b.globalAlpha = 1;
            b.beginPath();
            v && (u.closePath(), u.fill(), u.beginPath());
            k = [];
          }
          var c = a.targetCanvasCtx || this.plotArea.ctx, b = v ? this._preRenderCtx : c;
          if (!(0 >= a.dataSeriesIndexes.length)) {
            var e = null, h = null, m = this.plotArea, d2 = [], n2 = [], k = [], l = [], q = [], r = 0, f, p2, w, x, s, z = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0), u = this._eventManager.ghostCtx;
            b.save();
            v && u.save();
            b.beginPath();
            b.rect(m.x1, m.y1, m.width, m.height);
            b.clip();
            v && (u.beginPath(), u.rect(m.x1, m.y1, m.width, m.height), u.clip());
            for (var e = [], t3 = 0; t3 < a.dataSeriesIndexes.length; t3++) {
              var D = a.dataSeriesIndexes[t3], C = this.data[D], B3 = C.dataPoints;
              C.dataPointIndexes = [];
              for (r = 0; r < B3.length; r++)
                D = B3[r].x.getTime ? B3[r].x.getTime() : B3[r].x, C.dataPointIndexes[D] = r, e[D] || (l.push(D), e[D] = true);
              l.sort(Sa);
            }
            for (t3 = 0; t3 < a.dataSeriesIndexes.length; t3++) {
              D = a.dataSeriesIndexes[t3];
              C = this.data[D];
              B3 = C.dataPoints;
              x = true;
              e = C.id;
              this._eventManager.objectMap[e] = { objectType: "dataSeries", dataSeriesIndex: D };
              e = U(e);
              u.fillStyle = e;
              k = [];
              if (0 < l.length) {
                var e = C._colorSet[r % C._colorSet.length], A2 = C.lineColor = C.options.lineColor || e, J = A2;
                b.fillStyle = e;
                b.strokeStyle = A2;
                b.lineWidth = C.lineThickness;
                s = "solid";
                if (b.setLineDash) {
                  var K = G(C.nullDataLineDashType, C.lineThickness);
                  s = C.lineDashType;
                  var aa = G(s, C.lineThickness);
                  b.setLineDash(aa);
                }
                for (var Z = true, r = 0; r < l.length; r++) {
                  var h = l[r], ga = null, ga = 0 <= C.dataPointIndexes[h] ? B3[C.dataPointIndexes[h]] : { x: h, y: null };
                  if (!(h < a.axisX.dataInfo.viewPortMin || h > a.axisX.dataInfo.viewPortMax && (!C.connectNullData || !Z)))
                    if ("number" !== typeof ga.y)
                      C.connectNullData || (Z || x) || g(), Z = true;
                    else {
                      var oa;
                      oa = 0 !== a.dataPointYSums[h] ? 100 * (ga.y / a.dataPointYSums[h]) : 0;
                      f = a.axisX.convertValueToPixel(h);
                      var ka = n2[h] ? n2[h] : 0;
                      if (a.axisY.logarithmic || a.axisY.scaleBreaks && 0 < a.axisY.scaleBreaks._appliedBreaks.length) {
                        q[h] = oa + (q[h] ? q[h] : 0);
                        if (0 >= q[h] && a.axisY.logarithmic)
                          continue;
                        p2 = a.axisY.convertValueToPixel(q[h]);
                      } else
                        p2 = a.axisY.convertValueToPixel(oa), p2 -= ka;
                      k.push({ x: f, y: z - ka });
                      n2[h] = z - p2;
                      x || Z ? (!x && C.connectNullData ? (b.setLineDash && (C.options.nullDataLineDashType || s === C.lineDashType && C.lineDashType !== C.nullDataLineDashType) && (x = k.pop(), s = k[k.length - 1], g(), b.moveTo(w.x, w.y), k.push(s), k.push(x), s = C.nullDataLineDashType, b.setLineDash(K)), b.lineTo(f, p2), v && u.lineTo(f, p2)) : (b.beginPath(), b.moveTo(f, p2), v && (u.beginPath(), u.moveTo(
                        f,
                        p2
                      ))), Z = x = false) : (b.lineTo(f, p2), v && u.lineTo(f, p2), 0 == r % 250 && (g(), b.moveTo(f, p2), v && u.moveTo(f, p2), k.push({ x: f, y: z - ka })));
                      w = { x: f, y: p2 };
                      r < B3.length - 1 && (J !== (B3[r].lineColor || A2) || s !== (B3[r].lineDashType || C.lineDashType)) && (g(), b.beginPath(), b.moveTo(f, p2), k.push({ x: f, y: z - ka }), J = B3[r].lineColor || A2, b.strokeStyle = J, b.setLineDash && (B3[r].lineDashType ? (s = B3[r].lineDashType, b.setLineDash(G(s, C.lineThickness))) : (s = C.lineDashType, b.setLineDash(aa))));
                      if (0 <= C.dataPointIndexes[h]) {
                        var E = C.dataPointIds[C.dataPointIndexes[h]];
                        this._eventManager.objectMap[E] = { id: E, objectType: "dataPoint", dataSeriesIndex: D, dataPointIndex: C.dataPointIndexes[h], x1: f, y1: p2 };
                      }
                      0 <= C.dataPointIndexes[h] && 0 !== ga.markerSize && (0 < ga.markerSize || 0 < C.markerSize) && (ka = C.getMarkerProperties(C.dataPointIndexes[h], f, p2, b), d2.push(ka), h = U(E), v && d2.push({ x: f, y: p2, ctx: u, type: ka.type, size: ka.size, color: h, borderColor: h, borderThickness: ka.borderThickness }));
                      (ga.indexLabel || C.indexLabel || ga.indexLabelFormatter || C.indexLabelFormatter) && this._indexLabels.push({
                        chartType: "stackedArea100",
                        dataPoint: ga,
                        dataSeries: C,
                        point: { x: f, y: p2 },
                        direction: 0 > ga.y === a.axisY.reversed ? 1 : -1,
                        color: e
                      });
                    }
                }
                g();
                b.moveTo(f, p2);
                v && u.moveTo(f, p2);
              }
              delete C.dataPointIndexes;
            }
            X.drawMarkers(d2);
            v && (c.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && b.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && b.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(
              this._preRenderCanvas,
              0,
              0,
              this.width,
              this.height
            ), b.clearRect(m.x1, m.y1, m.width, m.height), u.restore());
            b.restore();
            return { source: c, dest: this.plotArea.ctx, animationCallback: L.xClipAnimation, easingFunction: L.easing.linear, animationBase: 0 };
          }
        };
        p.prototype.renderBubble = function(a) {
          var g = a.targetCanvasCtx || this.plotArea.ctx, c = v ? this._preRenderCtx : g;
          if (!(0 >= a.dataSeriesIndexes.length)) {
            var b = this.plotArea, e = 0, h, m;
            c.save();
            v && this._eventManager.ghostCtx.save();
            c.beginPath();
            c.rect(b.x1, b.y1, b.width, b.height);
            c.clip();
            v && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(b.x1, b.y1, b.width, b.height), this._eventManager.ghostCtx.clip());
            for (var d2 = -Infinity, n2 = Infinity, k = 0; k < a.dataSeriesIndexes.length; k++)
              for (var l = a.dataSeriesIndexes[k], q = this.data[l], r = q.dataPoints, f = 0, e = 0; e < r.length; e++)
                h = r[e].getTime ? h = r[e].x.getTime() : h = r[e].x, h < a.axisX.dataInfo.viewPortMin || h > a.axisX.dataInfo.viewPortMax || "undefined" === typeof r[e].z || (f = r[e].z, f > d2 && (d2 = f), f < n2 && (n2 = f));
            for (var p2 = 25 * Math.PI, w = Math.max(
              Math.pow(0.25 * Math.min(b.height, b.width) / 2, 2) * Math.PI,
              p2
            ), k = 0; k < a.dataSeriesIndexes.length; k++)
              if (l = a.dataSeriesIndexes[k], q = this.data[l], r = q.dataPoints, 0 < r.length) {
                for (c.strokeStyle = "#4572A7 ", e = 0; e < r.length; e++)
                  if (h = r[e].getTime ? h = r[e].x.getTime() : h = r[e].x, !(h < a.axisX.dataInfo.viewPortMin || h > a.axisX.dataInfo.viewPortMax) && "number" === typeof r[e].y) {
                    h = a.axisX.convertValueToPixel(h);
                    m = a.axisY.convertValueToPixel(r[e].y);
                    var f = r[e].z, x = 2 * Math.max(Math.sqrt((d2 === n2 ? w / 2 : p2 + (w - p2) / (d2 - n2) * (f - n2)) / Math.PI) << 0, 1), f = q.getMarkerProperties(e, c);
                    f.size = x;
                    c.globalAlpha = q.fillOpacity;
                    X.drawMarker(h, m, c, f.type, f.size, f.color, f.borderColor, f.borderThickness);
                    c.globalAlpha = 1;
                    var s = q.dataPointIds[e];
                    this._eventManager.objectMap[s] = { id: s, objectType: "dataPoint", dataSeriesIndex: l, dataPointIndex: e, x1: h, y1: m, size: x };
                    x = U(s);
                    v && X.drawMarker(h, m, this._eventManager.ghostCtx, f.type, f.size, x, x, f.borderThickness);
                    (r[e].indexLabel || q.indexLabel || r[e].indexLabelFormatter || q.indexLabelFormatter) && this._indexLabels.push({
                      chartType: "bubble",
                      dataPoint: r[e],
                      dataSeries: q,
                      point: { x: h, y: m },
                      direction: 1,
                      bounds: { x1: h - f.size / 2, y1: m - f.size / 2, x2: h + f.size / 2, y2: m + f.size / 2 },
                      color: null
                    });
                  }
              }
            v && (g.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.clearRect(b.x1, b.y1, b.width, b.height), this._eventManager.ghostCtx.restore());
            c.restore();
            return { source: g, dest: this.plotArea.ctx, animationCallback: L.fadeInAnimation, easingFunction: L.easing.easeInQuad, animationBase: 0 };
          }
        };
        p.prototype.renderScatter = function(a) {
          var g = a.targetCanvasCtx || this.plotArea.ctx, c = v ? this._preRenderCtx : g;
          if (!(0 >= a.dataSeriesIndexes.length)) {
            var b = this.plotArea, e = 0, h, m;
            c.save();
            v && this._eventManager.ghostCtx.save();
            c.beginPath();
            c.rect(b.x1, b.y1, b.width, b.height);
            c.clip();
            v && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(
              b.x1,
              b.y1,
              b.width,
              b.height
            ), this._eventManager.ghostCtx.clip());
            for (var d2 = 0; d2 < a.dataSeriesIndexes.length; d2++) {
              var n2 = a.dataSeriesIndexes[d2], k = this.data[n2], l = k.dataPoints;
              if (0 < l.length) {
                c.strokeStyle = "#4572A7 ";
                Math.pow(0.3 * Math.min(b.height, b.width) / 2, 2);
                for (var q = 0, r = 0, e = 0; e < l.length; e++)
                  if (h = l[e].getTime ? h = l[e].x.getTime() : h = l[e].x, !(h < a.axisX.dataInfo.viewPortMin || h > a.axisX.dataInfo.viewPortMax) && "number" === typeof l[e].y) {
                    h = a.axisX.convertValueToPixel(h);
                    m = a.axisY.convertValueToPixel(l[e].y);
                    var f = k.getMarkerProperties(
                      e,
                      h,
                      m,
                      c
                    );
                    c.globalAlpha = k.fillOpacity;
                    X.drawMarker(f.x, f.y, f.ctx, f.type, f.size, f.color, f.borderColor, f.borderThickness);
                    c.globalAlpha = 1;
                    Math.sqrt((q - h) * (q - h) + (r - m) * (r - m)) < Math.min(f.size, 5) && l.length > Math.min(this.plotArea.width, this.plotArea.height) || (q = k.dataPointIds[e], this._eventManager.objectMap[q] = { id: q, objectType: "dataPoint", dataSeriesIndex: n2, dataPointIndex: e, x1: h, y1: m }, q = U(q), v && X.drawMarker(f.x, f.y, this._eventManager.ghostCtx, f.type, f.size, q, q, f.borderThickness), (l[e].indexLabel || k.indexLabel || l[e].indexLabelFormatter || k.indexLabelFormatter) && this._indexLabels.push({ chartType: "scatter", dataPoint: l[e], dataSeries: k, point: { x: h, y: m }, direction: 1, bounds: { x1: h - f.size / 2, y1: m - f.size / 2, x2: h + f.size / 2, y2: m + f.size / 2 }, color: null }), q = h, r = m);
                  }
              }
            }
            v && (g.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.clearRect(b.x1, b.y1, b.width, b.height), this._eventManager.ghostCtx.restore());
            c.restore();
            return { source: g, dest: this.plotArea.ctx, animationCallback: L.fadeInAnimation, easingFunction: L.easing.easeInQuad, animationBase: 0 };
          }
        };
        p.prototype.renderCandlestick = function(a) {
          var g = a.targetCanvasCtx || this.plotArea.ctx, c = v ? this._preRenderCtx : g, b = this._eventManager.ghostCtx;
          if (!(0 >= a.dataSeriesIndexes.length)) {
            var e = null, h = null, m = this.plotArea, d2 = 0, p2, k, l, q, r, f, e = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1, h = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : 0.015 * this.width, t3 = a.axisX.dataInfo.minDiff;
            isFinite(t3) || (t3 = 0.3 * Math.abs(a.axisX.range));
            t3 = this.options.dataPointWidth ? this.dataPointWidth : 0.7 * m.width * (a.axisX.logarithmic ? Math.log(t3) / Math.log(a.axisX.range) : Math.abs(t3) / Math.abs(a.axisX.range)) << 0;
            this.dataPointMaxWidth && e > h && (e = Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, h));
            !this.dataPointMaxWidth && (this.dataPointMinWidth && h < e) && (h = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -Infinity, e));
            t3 < e && (t3 = e);
            t3 > h && (t3 = h);
            c.save();
            v && b.save();
            c.beginPath();
            c.rect(m.x1, m.y1, m.width, m.height);
            c.clip();
            v && (b.beginPath(), b.rect(m.x1, m.y1, m.width, m.height), b.clip());
            for (var w = 0; w < a.dataSeriesIndexes.length; w++) {
              var x = a.dataSeriesIndexes[w], s = this.data[x], z = s.dataPoints;
              if (0 < z.length) {
                for (var u = 5 < t3 && s.bevelEnabled ? true : false, d2 = 0; d2 < z.length; d2++)
                  if (z[d2].getTime ? f = z[d2].x.getTime() : f = z[d2].x, !(f < a.axisX.dataInfo.viewPortMin || f > a.axisX.dataInfo.viewPortMax) && !n(z[d2].y) && z[d2].y.length && "number" === typeof z[d2].y[0] && "number" === typeof z[d2].y[1] && "number" === typeof z[d2].y[2] && "number" === typeof z[d2].y[3]) {
                    p2 = a.axisX.convertValueToPixel(f);
                    k = a.axisY.convertValueToPixel(z[d2].y[0]);
                    l = a.axisY.convertValueToPixel(z[d2].y[1]);
                    q = a.axisY.convertValueToPixel(z[d2].y[2]);
                    r = a.axisY.convertValueToPixel(z[d2].y[3]);
                    var B3 = p2 - t3 / 2 << 0, D = B3 + t3 << 0, h = s.options.fallingColor ? s.fallingColor : s._colorSet[0], e = z[d2].color ? z[d2].color : s._colorSet[0], C = Math.round(Math.max(1, 0.15 * t3)), A2 = 0 === C % 2 ? 0 : 0.5, G2 = s.dataPointIds[d2];
                    this._eventManager.objectMap[G2] = { id: G2, objectType: "dataPoint", dataSeriesIndex: x, dataPointIndex: d2, x1: B3, y1: k, x2: D, y2: l, x3: p2, y3: q, x4: p2, y4: r, borderThickness: C, color: e };
                    c.strokeStyle = e;
                    c.beginPath();
                    c.lineWidth = C;
                    b.lineWidth = Math.max(C, 4);
                    "candlestick" === s.type ? (c.moveTo(p2 - A2, l), c.lineTo(p2 - A2, Math.min(k, r)), c.stroke(), c.moveTo(p2 - A2, Math.max(k, r)), c.lineTo(p2 - A2, q), c.stroke(), ba(c, B3, Math.min(k, r), D, Math.max(k, r), z[d2].y[0] <= z[d2].y[3] ? s.risingColor : h, C, e, u, u, false, false, s.fillOpacity), v && (e = U(G2), b.strokeStyle = e, b.moveTo(p2 - A2, l), b.lineTo(p2 - A2, Math.min(k, r)), b.stroke(), b.moveTo(p2 - A2, Math.max(k, r)), b.lineTo(p2 - A2, q), b.stroke(), ba(b, B3, Math.min(k, r), D, Math.max(k, r), e, 0, null, false, false, false, false))) : "ohlc" === s.type && (c.moveTo(p2 - A2, l), c.lineTo(p2 - A2, q), c.stroke(), c.beginPath(), c.moveTo(p2, k), c.lineTo(B3, k), c.stroke(), c.beginPath(), c.moveTo(p2, r), c.lineTo(D, r), c.stroke(), v && (e = U(G2), b.strokeStyle = e, b.moveTo(p2 - A2, l), b.lineTo(p2 - A2, q), b.stroke(), b.beginPath(), b.moveTo(p2, k), b.lineTo(B3, k), b.stroke(), b.beginPath(), b.moveTo(p2, r), b.lineTo(D, r), b.stroke()));
                    (z[d2].indexLabel || s.indexLabel || z[d2].indexLabelFormatter || s.indexLabelFormatter) && this._indexLabels.push({ chartType: s.type, dataPoint: z[d2], dataSeries: s, point: { x: B3 + (D - B3) / 2, y: a.axisY.reversed ? q : l }, direction: 1, bounds: { x1: B3, y1: Math.min(l, q), x2: D, y2: Math.max(l, q) }, color: e });
                  }
              }
            }
            v && (g.drawImage(
              this._preRenderCanvas,
              0,
              0,
              this.width,
              this.height
            ), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.clearRect(m.x1, m.y1, m.width, m.height), b.restore());
            c.restore();
            return {
              source: g,
              dest: this.plotArea.ctx,
              animationCallback: L.fadeInAnimation,
              easingFunction: L.easing.easeInQuad,
              animationBase: 0
            };
          }
        };
        p.prototype.renderBoxAndWhisker = function(a) {
          var g = a.targetCanvasCtx || this.plotArea.ctx, c = v ? this._preRenderCtx : g, b = this._eventManager.ghostCtx;
          if (!(0 >= a.dataSeriesIndexes.length)) {
            var e = null, h = this.plotArea, m = 0, d2, p2, k, l, q, r, f, e = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1, m = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : 0.015 * this.width, t3 = a.axisX.dataInfo.minDiff;
            isFinite(t3) || (t3 = 0.3 * Math.abs(a.axisX.range));
            t3 = this.options.dataPointWidth ? this.dataPointWidth : 0.7 * h.width * (a.axisX.logarithmic ? Math.log(t3) / Math.log(a.axisX.range) : Math.abs(t3) / Math.abs(a.axisX.range)) << 0;
            this.dataPointMaxWidth && e > m && (e = Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, m));
            !this.dataPointMaxWidth && (this.dataPointMinWidth && m < e) && (m = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -Infinity, e));
            t3 < e && (t3 = e);
            t3 > m && (t3 = m);
            c.save();
            v && b.save();
            c.beginPath();
            c.rect(
              h.x1,
              h.y1,
              h.width,
              h.height
            );
            c.clip();
            v && (b.beginPath(), b.rect(h.x1, h.y1, h.width, h.height), b.clip());
            for (var w = false, w = !!a.axisY.reversed, x = 0; x < a.dataSeriesIndexes.length; x++) {
              var s = a.dataSeriesIndexes[x], z = this.data[s], u = z.dataPoints;
              if (0 < u.length) {
                for (var B3 = 5 < t3 && z.bevelEnabled ? true : false, m = 0; m < u.length; m++)
                  if (u[m].getTime ? f = u[m].x.getTime() : f = u[m].x, !(f < a.axisX.dataInfo.viewPortMin || f > a.axisX.dataInfo.viewPortMax) && !n(u[m].y) && u[m].y.length && "number" === typeof u[m].y[0] && "number" === typeof u[m].y[1] && "number" === typeof u[m].y[2] && "number" === typeof u[m].y[3] && "number" === typeof u[m].y[4] && 5 === u[m].y.length) {
                    d2 = a.axisX.convertValueToPixel(f);
                    p2 = a.axisY.convertValueToPixel(u[m].y[0]);
                    k = a.axisY.convertValueToPixel(u[m].y[1]);
                    l = a.axisY.convertValueToPixel(u[m].y[2]);
                    q = a.axisY.convertValueToPixel(u[m].y[3]);
                    r = a.axisY.convertValueToPixel(u[m].y[4]);
                    var D = d2 - t3 / 2 << 0, C = d2 + t3 / 2 << 0, e = u[m].color ? u[m].color : z._colorSet[0], A2 = Math.round(Math.max(1, 0.15 * t3)), H2 = 0 === A2 % 2 ? 0 : 0.5, J = u[m].whiskerColor ? u[m].whiskerColor : u[m].color ? z.whiskerColor ? z.whiskerColor : u[m].color : z.whiskerColor ? z.whiskerColor : e, K = "number" === typeof u[m].whiskerThickness ? u[m].whiskerThickness : "number" === typeof z.options.whiskerThickness ? z.whiskerThickness : A2, aa = u[m].whiskerDashType ? u[m].whiskerDashType : z.whiskerDashType, Z = n(u[m].whiskerLength) ? n(z.options.whiskerLength) ? t3 : z.whiskerLength : u[m].whiskerLength, Z = "number" === typeof Z ? 0 >= Z ? 0 : Z >= t3 ? t3 : Z : "string" === typeof Z ? parseInt(Z) * t3 / 100 > t3 ? t3 : parseInt(Z) * t3 / 100 : t3, ga = 1 === Math.round(K) % 2 ? 0.5 : 0, oa = u[m].stemColor ? u[m].stemColor : u[m].color ? z.stemColor ? z.stemColor : u[m].color : z.stemColor ? z.stemColor : e, ka = "number" === typeof u[m].stemThickness ? u[m].stemThickness : "number" === typeof z.options.stemThickness ? z.stemThickness : A2, E = 1 === Math.round(ka) % 2 ? 0.5 : 0, M2 = u[m].stemDashType ? u[m].stemDashType : z.stemDashType, Q2 = u[m].lineColor ? u[m].lineColor : u[m].color ? z.lineColor ? z.lineColor : u[m].color : z.lineColor ? z.lineColor : e, N2 = "number" === typeof u[m].lineThickness ? u[m].lineThickness : "number" === typeof z.options.lineThickness ? z.lineThickness : A2, S3 = u[m].lineDashType ? u[m].lineDashType : z.lineDashType, O = 1 === Math.round(N2) % 2 ? 0.5 : 0, P = z.upperBoxColor, pb = z.lowerBoxColor, sa = n(z.options.fillOpacity) ? 1 : z.fillOpacity, R = z.dataPointIds[m];
                    this._eventManager.objectMap[R] = { id: R, objectType: "dataPoint", dataSeriesIndex: s, dataPointIndex: m, x1: D, y1: p2, x2: C, y2: k, x3: d2, y3: l, x4: d2, y4: q, y5: r, borderThickness: A2, color: e, stemThickness: ka, stemColor: oa, whiskerThickness: K, whiskerLength: Z, whiskerColor: J, lineThickness: N2, lineColor: Q2 };
                    c.save();
                    0 < ka && (c.beginPath(), c.strokeStyle = oa, c.lineWidth = ka, c.setLineDash && c.setLineDash(G(
                      M2,
                      ka
                    )), c.moveTo(d2 - E, k), c.lineTo(d2 - E, p2), c.stroke(), c.moveTo(d2 - E, q), c.lineTo(d2 - E, l), c.stroke());
                    c.restore();
                    b.lineWidth = Math.max(A2, 4);
                    c.beginPath();
                    ba(c, D, Math.min(r, k), C, Math.max(k, r), pb, 0, e, w ? B3 : false, w ? false : B3, false, false, sa);
                    c.beginPath();
                    ba(c, D, Math.min(l, r), C, Math.max(r, l), P, 0, e, w ? false : B3, w ? B3 : false, false, false, sa);
                    c.beginPath();
                    c.lineWidth = A2;
                    c.strokeStyle = e;
                    c.rect(D - H2, Math.min(k, l) - H2, C - D + 2 * H2, Math.max(k, l) - Math.min(k, l) + 2 * H2);
                    c.stroke();
                    c.save();
                    0 < N2 && (c.beginPath(), c.globalAlpha = 1, c.setLineDash && c.setLineDash(G(S3, N2)), c.strokeStyle = Q2, c.lineWidth = N2, c.moveTo(D, r - O), c.lineTo(C, r - O), c.stroke());
                    c.restore();
                    c.save();
                    0 < K && (c.beginPath(), c.setLineDash && c.setLineDash(G(aa, K)), c.strokeStyle = J, c.lineWidth = K, c.moveTo(d2 - Z / 2 << 0, q - ga), c.lineTo(d2 + Z / 2 << 0, q - ga), c.stroke(), c.moveTo(d2 - Z / 2 << 0, p2 + ga), c.lineTo(d2 + Z / 2 << 0, p2 + ga), c.stroke());
                    c.restore();
                    v && (e = U(R), b.strokeStyle = e, b.lineWidth = ka, 0 < ka && (b.moveTo(d2 - H2 - E, k), b.lineTo(d2 - H2 - E, Math.max(p2, q)), b.stroke(), b.moveTo(d2 - H2 - E, Math.min(p2, q)), b.lineTo(d2 - H2 - E, l), b.stroke()), ba(b, D, Math.max(k, l), C, Math.min(
                      k,
                      l
                    ), e, 0, null, false, false, false, false), 0 < K && (b.beginPath(), b.lineWidth = K, b.moveTo(d2 + Z / 2, q - ga), b.lineTo(d2 - Z / 2, q - ga), b.stroke(), b.moveTo(d2 + Z / 2, p2 + ga), b.lineTo(d2 - Z / 2, p2 + ga), b.stroke()));
                    (u[m].indexLabel || z.indexLabel || u[m].indexLabelFormatter || z.indexLabelFormatter) && this._indexLabels.push({ chartType: z.type, dataPoint: u[m], dataSeries: z, point: { x: D + (C - D) / 2, y: a.axisY.reversed ? p2 : q }, direction: 1, bounds: { x1: D, y1: Math.min(p2, q), x2: C, y2: Math.max(p2, q) }, color: e });
                  }
              }
            }
            v && (g.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.clearRect(h.x1, h.y1, h.width, h.height), b.restore());
            c.restore();
            return { source: g, dest: this.plotArea.ctx, animationCallback: L.fadeInAnimation, easingFunction: L.easing.easeInQuad, animationBase: 0 };
          }
        };
        p.prototype.renderRangeColumn = function(a) {
          var g = a.targetCanvasCtx || this.plotArea.ctx, c = v ? this._preRenderCtx : g;
          if (!(0 >= a.dataSeriesIndexes.length)) {
            var b = null, e = this.plotArea, h = 0, m, d2, p2, h = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1;
            m = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : 0.03 * this.width;
            var k = a.axisX.dataInfo.minDiff;
            isFinite(k) || (k = 0.3 * Math.abs(a.axisX.range));
            k = this.options.dataPointWidth ? this.dataPointWidth : 0.9 * (e.width * (a.axisX.logarithmic ? Math.log(k) / Math.log(a.axisX.range) : Math.abs(k) / Math.abs(a.axisX.range)) / a.plotType.totalDataSeries) << 0;
            this.dataPointMaxWidth && h > m && (h = Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, m));
            !this.dataPointMaxWidth && (this.dataPointMinWidth && m < h) && (m = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -Infinity, h));
            k < h && (k = h);
            k > m && (k = m);
            c.save();
            v && this._eventManager.ghostCtx.save();
            c.beginPath();
            c.rect(e.x1, e.y1, e.width, e.height);
            c.clip();
            v && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(e.x1, e.y1, e.width, e.height), this._eventManager.ghostCtx.clip());
            for (var l = 0; l < a.dataSeriesIndexes.length; l++) {
              var q = a.dataSeriesIndexes[l], r = this.data[q], f = r.dataPoints;
              if (0 < f.length) {
                for (var t3 = 5 < k && r.bevelEnabled ? true : false, h = 0; h < f.length; h++)
                  if (f[h].getTime ? p2 = f[h].x.getTime() : p2 = f[h].x, !(p2 < a.axisX.dataInfo.viewPortMin || p2 > a.axisX.dataInfo.viewPortMax) && !n(f[h].y) && f[h].y.length && "number" === typeof f[h].y[0] && "number" === typeof f[h].y[1]) {
                    b = a.axisX.convertValueToPixel(p2);
                    m = a.axisY.convertValueToPixel(f[h].y[0]);
                    d2 = a.axisY.convertValueToPixel(f[h].y[1]);
                    var w = a.axisX.reversed ? b + a.plotType.totalDataSeries * k / 2 - (a.previousDataSeriesCount + l) * k << 0 : b - a.plotType.totalDataSeries * k / 2 + (a.previousDataSeriesCount + l) * k << 0, x = a.axisX.reversed ? w - k << 0 : w + k << 0, b = f[h].color ? f[h].color : r._colorSet[h % r._colorSet.length];
                    if (m > d2) {
                      var s = m;
                      m = d2;
                      d2 = s;
                    }
                    s = r.dataPointIds[h];
                    this._eventManager.objectMap[s] = { id: s, objectType: "dataPoint", dataSeriesIndex: q, dataPointIndex: h, x1: w, y1: m, x2: x, y2: d2 };
                    ba(c, a.axisX.reversed ? x : w, m, a.axisX.reversed ? w : x, d2, b, 0, b, t3, t3, false, false, r.fillOpacity);
                    b = U(s);
                    v && ba(this._eventManager.ghostCtx, a.axisX.reversed ? x : w, m, a.axisX.reversed ? w : x, d2, b, 0, null, false, false, false, false);
                    if (f[h].indexLabel || r.indexLabel || f[h].indexLabelFormatter || r.indexLabelFormatter)
                      this._indexLabels.push({ chartType: "rangeColumn", dataPoint: f[h], dataSeries: r, indexKeyword: 0, point: { x: w + (x - w) / 2, y: f[h].y[1] >= f[h].y[0] ? d2 : m }, direction: f[h].y[1] >= f[h].y[0] ? -1 : 1, bounds: { x1: w, y1: Math.min(m, d2), x2: x, y2: Math.max(m, d2) }, color: b }), this._indexLabels.push({
                        chartType: "rangeColumn",
                        dataPoint: f[h],
                        dataSeries: r,
                        indexKeyword: 1,
                        point: { x: w + (x - w) / 2, y: f[h].y[1] >= f[h].y[0] ? m : d2 },
                        direction: f[h].y[1] >= f[h].y[0] ? 1 : -1,
                        bounds: { x1: w, y1: Math.min(m, d2), x2: x, y2: Math.max(m, d2) },
                        color: b
                      });
                  }
              }
            }
            v && (g.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(
              this._preRenderCanvas,
              0,
              0,
              this.width,
              this.height
            ), c.clearRect(e.x1, e.y1, e.width, e.height), this._eventManager.ghostCtx.restore());
            c.restore();
            return { source: g, dest: this.plotArea.ctx, animationCallback: L.fadeInAnimation, easingFunction: L.easing.easeInQuad, animationBase: 0 };
          }
        };
        p.prototype.renderError = function(a) {
          var g = a.targetCanvasCtx || this.plotArea.ctx, c = v ? this._preRenderCtx : g, b = a.axisY._position ? "left" === a.axisY._position || "right" === a.axisY._position ? false : true : false;
          if (!(0 >= a.dataSeriesIndexes.length)) {
            var e = null, h = false, m = this.plotArea, d2 = 0, p2, k, l, q, r, f, t3, w = a.axisX.dataInfo.minDiff;
            isFinite(w) || (w = 0.3 * Math.abs(a.axisX.range));
            c.save();
            v && this._eventManager.ghostCtx.save();
            c.beginPath();
            c.rect(m.x1, m.y1, m.width, m.height);
            c.clip();
            v && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(m.x1, m.y1, m.width, m.height), this._eventManager.ghostCtx.clip());
            for (var x = 0, s = 0; s < this.data.length; s++)
              !this.data[s].type.match(/(bar|column)/ig) || !this.data[s].visible || this.data[s].type.match(/(stacked)/ig) && x || x++;
            for (var z = 0; z < a.dataSeriesIndexes.length; z++) {
              var u = a.dataSeriesIndexes[z], A2 = this.data[u], D = A2.dataPoints, C = n(A2._linkedSeries) ? false : A2._linkedSeries.type.match(/(bar|column)/ig) && A2._linkedSeries.visible ? true : false, G2 = 0;
              if (C)
                for (e = A2._linkedSeries.id, s = 0; s < e; s++)
                  !this.data[s].type.match(/(bar|column)/ig) || !this.data[s].visible || this.data[s].type.match(/(stacked)/ig) && G2 || (this.data[s].type.match(/(range)/ig) && (h = true), G2++);
              e = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1;
              d2 = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : b ? Math.min(0.15 * this.height, 0.9 * (this.plotArea.height / (C ? x : 1))) << 0 : 0.3 * this.width;
              h && (d2 = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : b ? Math.min(0.15 * this.height, 0.9 * (this.plotArea.height / (C ? x : 1))) << 0 : 0.03 * this.width);
              s = this.options.dataPointWidth ? this.dataPointWidth : 0.9 * ((b ? m.height : m.width) * (a.axisX.logarithmic ? Math.log(w) / Math.log(a.axisX.range) : Math.abs(w) / Math.abs(a.axisX.range)) / (C ? x : 1)) << 0;
              this.dataPointMaxWidth && e > d2 && (e = Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, d2));
              !this.dataPointMaxWidth && (this.dataPointMinWidth && d2 < e) && (d2 = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -Infinity, e));
              s < e && (s = e);
              s > d2 && (s = d2);
              if (0 < D.length)
                for (var H2 = A2._colorSet, d2 = 0; d2 < D.length; d2++) {
                  var e = A2.lineColor = A2.options.color ? A2.options.color : H2[0], J = { color: D[d2].whiskerColor ? D[d2].whiskerColor : D[d2].color ? A2.whiskerColor ? A2.whiskerColor : D[d2].color : A2.whiskerColor ? A2.whiskerColor : e, thickness: n(D[d2].whiskerThickness) ? A2.whiskerThickness : D[d2].whiskerThickness, dashType: D[d2].whiskerDashType ? D[d2].whiskerDashType : A2.whiskerDashType, length: n(D[d2].whiskerLength) ? n(A2.options.whiskerLength) ? s : A2.options.whiskerLength : D[d2].whiskerLength, trimLength: n(D[d2].whiskerLength) ? n(A2.options.whiskerLength) ? 50 : 0 : 0 };
                  J.length = "number" === typeof J.length ? 0 >= J.length ? 0 : J.length >= s ? s : J.length : "string" === typeof J.length ? parseInt(J.length) * s / 100 > s ? s : parseInt(J.length) * s / 100 > s : s;
                  J.thickness = "number" === typeof J.thickness ? 0 > J.thickness ? 0 : Math.round(J.thickness) : 2;
                  var K = { color: D[d2].stemColor ? D[d2].stemColor : D[d2].color ? A2.stemColor ? A2.stemColor : D[d2].color : A2.stemColor ? A2.stemColor : e, thickness: D[d2].stemThickness ? D[d2].stemThickness : A2.stemThickness, dashType: D[d2].stemDashType ? D[d2].stemDashType : A2.stemDashType };
                  K.thickness = "number" === typeof K.thickness ? 0 > K.thickness ? 0 : Math.round(K.thickness) : 2;
                  D[d2].getTime ? t3 = D[d2].x.getTime() : t3 = D[d2].x;
                  if (!(t3 < a.axisX.dataInfo.viewPortMin || t3 > a.axisX.dataInfo.viewPortMax) && !n(D[d2].y) && D[d2].y.length && "number" === typeof D[d2].y[0] && "number" === typeof D[d2].y[1]) {
                    var aa = a.axisX.convertValueToPixel(t3);
                    b ? k = aa : p2 = aa;
                    aa = a.axisY.convertValueToPixel(D[d2].y[0]);
                    b ? l = aa : r = aa;
                    aa = a.axisY.convertValueToPixel(D[d2].y[1]);
                    b ? q = aa : f = aa;
                    b ? (r = a.axisX.reversed ? k + (C ? x : 1) * s / 2 - (C ? G2 - 1 : 0) * s << 0 : k - (C ? x : 1) * s / 2 + (C ? G2 - 1 : 0) * s << 0, f = a.axisX.reversed ? r - s << 0 : r + s << 0) : (l = a.axisX.reversed ? p2 + (C ? x : 1) * s / 2 - (C ? G2 - 1 : 0) * s << 0 : p2 - (C ? x : 1) * s / 2 + (C ? G2 - 1 : 0) * s << 0, q = a.axisX.reversed ? l - s << 0 : l + s << 0);
                    !b && r > f && (aa = r, r = f, f = aa);
                    b && l > q && (aa = l, l = q, q = aa);
                    aa = A2.dataPointIds[d2];
                    this._eventManager.objectMap[aa] = { id: aa, objectType: "dataPoint", dataSeriesIndex: u, dataPointIndex: d2, x1: Math.min(l, q), y1: Math.min(r, f), x2: Math.max(q, l), y2: Math.max(f, r), isXYSwapped: b, stemProperties: K, whiskerProperties: J };
                    B2(c, Math.min(l, q), Math.min(r, f), Math.max(q, l), Math.max(f, r), e, J, K, b);
                    v && B2(this._eventManager.ghostCtx, l, r, q, f, e, J, K, b);
                    if (D[d2].indexLabel || A2.indexLabel || D[d2].indexLabelFormatter || A2.indexLabelFormatter)
                      this._indexLabels.push({
                        chartType: "error",
                        dataPoint: D[d2],
                        dataSeries: A2,
                        indexKeyword: 0,
                        point: { x: b ? D[d2].y[1] >= D[d2].y[0] ? l : q : l + (q - l) / 2, y: b ? r + (f - r) / 2 : D[d2].y[1] >= D[d2].y[0] ? f : r },
                        direction: D[d2].y[1] >= D[d2].y[0] ? -1 : 1,
                        bounds: { x1: b ? Math.min(l, q) : l, y1: b ? r : Math.min(r, f), x2: b ? Math.max(l, q) : q, y2: b ? f : Math.max(r, f) },
                        color: e,
                        axisSwapped: b
                      }), this._indexLabels.push({ chartType: "error", dataPoint: D[d2], dataSeries: A2, indexKeyword: 1, point: { x: b ? D[d2].y[1] >= D[d2].y[0] ? q : l : l + (q - l) / 2, y: b ? r + (f - r) / 2 : D[d2].y[1] >= D[d2].y[0] ? r : f }, direction: D[d2].y[1] >= D[d2].y[0] ? 1 : -1, bounds: { x1: b ? Math.min(l, q) : l, y1: b ? r : Math.min(r, f), x2: b ? Math.max(l, q) : q, y2: b ? f : Math.max(r, f) }, color: e, axisSwapped: b });
                  }
                }
            }
            v && (g.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.clearRect(m.x1, m.y1, m.width, m.height), this._eventManager.ghostCtx.restore());
            c.restore();
            return { source: g, dest: this.plotArea.ctx, animationCallback: L.fadeInAnimation, easingFunction: L.easing.easeInQuad, animationBase: 0 };
          }
        };
        p.prototype.renderRangeBar = function(a) {
          var g = a.targetCanvasCtx || this.plotArea.ctx, c = v ? this._preRenderCtx : g;
          if (!(0 >= a.dataSeriesIndexes.length)) {
            var b = null, e = this.plotArea, h = 0, m, d2, p2, k, h = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1;
            m = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : Math.min(0.15 * this.height, 0.9 * (this.plotArea.height / a.plotType.totalDataSeries)) << 0;
            var l = a.axisX.dataInfo.minDiff;
            isFinite(l) || (l = 0.3 * Math.abs(a.axisX.range));
            l = this.options.dataPointWidth ? this.dataPointWidth : 0.9 * (e.height * (a.axisX.logarithmic ? Math.log(l) / Math.log(a.axisX.range) : Math.abs(l) / Math.abs(a.axisX.range)) / a.plotType.totalDataSeries) << 0;
            this.dataPointMaxWidth && h > m && (h = Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, m));
            !this.dataPointMaxWidth && (this.dataPointMinWidth && m < h) && (m = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -Infinity, h));
            l < h && (l = h);
            l > m && (l = m);
            c.save();
            v && this._eventManager.ghostCtx.save();
            c.beginPath();
            c.rect(e.x1, e.y1, e.width, e.height);
            c.clip();
            v && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(e.x1, e.y1, e.width, e.height), this._eventManager.ghostCtx.clip());
            for (var q = 0; q < a.dataSeriesIndexes.length; q++) {
              var r = a.dataSeriesIndexes[q], f = this.data[r], t3 = f.dataPoints;
              if (0 < t3.length) {
                var w = 5 < l && f.bevelEnabled ? true : false;
                c.strokeStyle = "#4572A7 ";
                for (h = 0; h < t3.length; h++)
                  if (t3[h].getTime ? k = t3[h].x.getTime() : k = t3[h].x, !(k < a.axisX.dataInfo.viewPortMin || k > a.axisX.dataInfo.viewPortMax) && !n(t3[h].y) && t3[h].y.length && "number" === typeof t3[h].y[0] && "number" === typeof t3[h].y[1]) {
                    m = a.axisY.convertValueToPixel(t3[h].y[0]);
                    d2 = a.axisY.convertValueToPixel(t3[h].y[1]);
                    p2 = a.axisX.convertValueToPixel(k);
                    p2 = a.axisX.reversed ? p2 + a.plotType.totalDataSeries * l / 2 - (a.previousDataSeriesCount + q) * l << 0 : p2 - a.plotType.totalDataSeries * l / 2 + (a.previousDataSeriesCount + q) * l << 0;
                    var x = a.axisX.reversed ? p2 - l << 0 : p2 + l << 0;
                    m > d2 && (b = m, m = d2, d2 = b);
                    b = t3[h].color ? t3[h].color : f._colorSet[h % f._colorSet.length];
                    ba(c, m, a.axisX.reversed ? x : p2, d2, a.axisX.reversed ? p2 : x, b, 0, null, w, false, false, false, f.fillOpacity);
                    b = f.dataPointIds[h];
                    this._eventManager.objectMap[b] = { id: b, objectType: "dataPoint", dataSeriesIndex: r, dataPointIndex: h, x1: m, y1: p2, x2: d2, y2: x };
                    b = U(b);
                    v && ba(
                      this._eventManager.ghostCtx,
                      m,
                      a.axisX.reversed ? x : p2,
                      d2,
                      a.axisX.reversed ? p2 : x,
                      b,
                      0,
                      null,
                      false,
                      false,
                      false,
                      false
                    );
                    if (t3[h].indexLabel || f.indexLabel || t3[h].indexLabelFormatter || f.indexLabelFormatter)
                      this._indexLabels.push({ chartType: "rangeBar", dataPoint: t3[h], dataSeries: f, indexKeyword: 0, point: { x: t3[h].y[1] >= t3[h].y[0] ? m : d2, y: p2 + (x - p2) / 2 }, direction: t3[h].y[1] >= t3[h].y[0] ? -1 : 1, bounds: { x1: Math.min(m, d2), y1: p2, x2: Math.max(m, d2), y2: x }, color: b }), this._indexLabels.push({ chartType: "rangeBar", dataPoint: t3[h], dataSeries: f, indexKeyword: 1, point: { x: t3[h].y[1] >= t3[h].y[0] ? d2 : m, y: p2 + (x - p2) / 2 }, direction: t3[h].y[1] >= t3[h].y[0] ? 1 : -1, bounds: { x1: Math.min(m, d2), y1: p2, x2: Math.max(m, d2), y2: x }, color: b });
                  }
              }
            }
            v && (g.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.clearRect(e.x1, e.y1, e.width, e.height), this._eventManager.ghostCtx.restore());
            c.restore();
            return { source: g, dest: this.plotArea.ctx, animationCallback: L.fadeInAnimation, easingFunction: L.easing.easeInQuad, animationBase: 0 };
          }
        };
        p.prototype.renderRangeArea = function(a) {
          function g() {
            if (z) {
              for (var a2 = null, c2 = n2.length - 1; 0 <= c2; c2--)
                a2 = n2[c2], b.lineTo(a2.x, a2.y2), e.lineTo(a2.x, a2.y2);
              b.closePath();
              b.globalAlpha = l.fillOpacity;
              b.fill();
              b.globalAlpha = 1;
              e.fill();
              if (0 < l.lineThickness) {
                b.beginPath();
                b.moveTo(a2.x, a2.y2);
                for (c2 = 0; c2 < n2.length; c2++)
                  a2 = n2[c2], b.lineTo(a2.x, a2.y2);
                b.moveTo(n2[0].x, n2[0].y1);
                for (c2 = 0; c2 < n2.length; c2++)
                  a2 = n2[c2], b.lineTo(a2.x, a2.y1);
                b.stroke();
              }
              b.beginPath();
              b.moveTo(p2, w);
              e.beginPath();
              e.moveTo(p2, w);
              z = { x: p2, y: w };
              n2 = [];
              n2.push({ x: p2, y1: w, y2: x });
            }
          }
          var c = a.targetCanvasCtx || this.plotArea.ctx, b = v ? this._preRenderCtx : c;
          if (!(0 >= a.dataSeriesIndexes.length)) {
            var e = this._eventManager.ghostCtx, h = [], m = this.plotArea;
            b.save();
            v && e.save();
            b.beginPath();
            b.rect(m.x1, m.y1, m.width, m.height);
            b.clip();
            v && (e.beginPath(), e.rect(m.x1, m.y1, m.width, m.height), e.clip());
            for (var d2 = 0; d2 < a.dataSeriesIndexes.length; d2++) {
              var n2 = [], k = a.dataSeriesIndexes[d2], l = this.data[k], q = l.dataPoints, h = l.id;
              this._eventManager.objectMap[h] = { objectType: "dataSeries", dataSeriesIndex: k };
              h = U(h);
              e.fillStyle = h;
              var h = [], r = true, f = 0, p2, w, x, s, z = null;
              if (0 < q.length) {
                var u = l._colorSet[f % l._colorSet.length], t3 = l.lineColor = l.options.lineColor || u, D = t3;
                b.fillStyle = u;
                b.strokeStyle = t3;
                b.lineWidth = l.lineThickness;
                var C = "solid";
                if (b.setLineDash) {
                  var B3 = G(l.nullDataLineDashType, l.lineThickness), C = l.lineDashType, A2 = G(C, l.lineThickness);
                  b.setLineDash(A2);
                }
                for (var J = true; f < q.length; f++)
                  if (s = q[f].x.getTime ? q[f].x.getTime() : q[f].x, !(s < a.axisX.dataInfo.viewPortMin || s > a.axisX.dataInfo.viewPortMax && (!l.connectNullData || !J)))
                    if (null !== q[f].y && q[f].y.length && "number" === typeof q[f].y[0] && "number" === typeof q[f].y[1]) {
                      p2 = a.axisX.convertValueToPixel(s);
                      w = a.axisY.convertValueToPixel(q[f].y[0]);
                      x = a.axisY.convertValueToPixel(q[f].y[1]);
                      r || J ? (l.connectNullData && !r ? (b.setLineDash && (l.options.nullDataLineDashType || C === l.lineDashType && l.lineDashType !== l.nullDataLineDashType) && (n2[n2.length - 1].newLineDashArray = A2, C = l.nullDataLineDashType, b.setLineDash(B3)), b.lineTo(p2, w), v && e.lineTo(p2, w), n2.push({ x: p2, y1: w, y2: x })) : (b.beginPath(), b.moveTo(p2, w), z = { x: p2, y: w }, n2 = [], n2.push({ x: p2, y1: w, y2: x }), v && (e.beginPath(), e.moveTo(p2, w))), J = r = false) : (b.lineTo(p2, w), n2.push({ x: p2, y1: w, y2: x }), v && e.lineTo(p2, w), 0 == f % 250 && g());
                      s = l.dataPointIds[f];
                      this._eventManager.objectMap[s] = { id: s, objectType: "dataPoint", dataSeriesIndex: k, dataPointIndex: f, x1: p2, y1: w, y2: x };
                      f < q.length - 1 && (D !== (q[f].lineColor || t3) || C !== (q[f].lineDashType || l.lineDashType)) && (g(), D = q[f].lineColor || t3, n2[n2.length - 1].newStrokeStyle = D, b.strokeStyle = D, b.setLineDash && (q[f].lineDashType ? (C = q[f].lineDashType, n2[n2.length - 1].newLineDashArray = G(C, l.lineThickness), b.setLineDash(n2[n2.length - 1].newLineDashArray)) : (C = l.lineDashType, n2[n2.length - 1].newLineDashArray = A2, b.setLineDash(A2))));
                      if (0 !== q[f].markerSize && (0 < q[f].markerSize || 0 < l.markerSize)) {
                        var K = l.getMarkerProperties(f, p2, x, b);
                        h.push(K);
                        var aa = U(s);
                        v && h.push({ x: p2, y: x, ctx: e, type: K.type, size: K.size, color: aa, borderColor: aa, borderThickness: K.borderThickness });
                        K = l.getMarkerProperties(
                          f,
                          p2,
                          w,
                          b
                        );
                        h.push(K);
                        aa = U(s);
                        v && h.push({ x: p2, y: w, ctx: e, type: K.type, size: K.size, color: aa, borderColor: aa, borderThickness: K.borderThickness });
                      }
                      if (q[f].indexLabel || l.indexLabel || q[f].indexLabelFormatter || l.indexLabelFormatter)
                        this._indexLabels.push({ chartType: "rangeArea", dataPoint: q[f], dataSeries: l, indexKeyword: 0, point: { x: p2, y: w }, direction: q[f].y[0] > q[f].y[1] === a.axisY.reversed ? -1 : 1, color: u }), this._indexLabels.push({ chartType: "rangeArea", dataPoint: q[f], dataSeries: l, indexKeyword: 1, point: { x: p2, y: x }, direction: q[f].y[0] > q[f].y[1] === a.axisY.reversed ? 1 : -1, color: u });
                    } else
                      J || r || g(), J = true;
                g();
                X.drawMarkers(h);
              }
            }
            v && (c.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && b.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && b.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.clearRect(m.x1, m.y1, m.width, m.height), this._eventManager.ghostCtx.restore());
            b.restore();
            return { source: c, dest: this.plotArea.ctx, animationCallback: L.xClipAnimation, easingFunction: L.easing.linear, animationBase: 0 };
          }
        };
        p.prototype.renderRangeSplineArea = function(a) {
          function g(a2, c2) {
            var f2 = t2(w, 2);
            if (0 < f2.length) {
              if (0 < k.lineThickness) {
                b.strokeStyle = c2;
                b.setLineDash && b.setLineDash(a2);
                b.beginPath();
                b.moveTo(f2[0].x, f2[0].y);
                for (var g2 = 0; g2 < f2.length - 3; g2 += 3) {
                  if (f2[g2].newStrokeStyle || f2[g2].newLineDashArray)
                    b.stroke(), b.beginPath(), b.moveTo(f2[g2].x, f2[g2].y), f2[g2].newStrokeStyle && (b.strokeStyle = f2[g2].newStrokeStyle), f2[g2].newLineDashArray && b.setLineDash(f2[g2].newLineDashArray);
                  b.bezierCurveTo(f2[g2 + 1].x, f2[g2 + 1].y, f2[g2 + 2].x, f2[g2 + 2].y, f2[g2 + 3].x, f2[g2 + 3].y);
                }
              }
              b.beginPath();
              b.moveTo(f2[0].x, f2[0].y);
              v && (e.beginPath(), e.moveTo(f2[0].x, f2[0].y));
              for (g2 = 0; g2 < f2.length - 3; g2 += 3)
                b.bezierCurveTo(f2[g2 + 1].x, f2[g2 + 1].y, f2[g2 + 2].x, f2[g2 + 2].y, f2[g2 + 3].x, f2[g2 + 3].y), v && e.bezierCurveTo(f2[g2 + 1].x, f2[g2 + 1].y, f2[g2 + 2].x, f2[g2 + 2].y, f2[g2 + 3].x, f2[g2 + 3].y);
              f2 = t2(x, 2);
              b.lineTo(x[x.length - 1].x, x[x.length - 1].y);
              for (g2 = f2.length - 1; 2 < g2; g2 -= 3)
                b.bezierCurveTo(
                  f2[g2 - 1].x,
                  f2[g2 - 1].y,
                  f2[g2 - 2].x,
                  f2[g2 - 2].y,
                  f2[g2 - 3].x,
                  f2[g2 - 3].y
                ), v && e.bezierCurveTo(f2[g2 - 1].x, f2[g2 - 1].y, f2[g2 - 2].x, f2[g2 - 2].y, f2[g2 - 3].x, f2[g2 - 3].y);
              b.closePath();
              b.globalAlpha = k.fillOpacity;
              b.fill();
              v && (e.closePath(), e.fill());
              b.globalAlpha = 1;
              if (0 < k.lineThickness) {
                b.strokeStyle = c2;
                b.setLineDash && b.setLineDash(a2);
                b.beginPath();
                b.moveTo(f2[0].x, f2[0].y);
                for (var h2 = g2 = 0; g2 < f2.length - 3; g2 += 3, h2++) {
                  if (w[h2].newStrokeStyle || w[h2].newLineDashArray)
                    b.stroke(), b.beginPath(), b.moveTo(f2[g2].x, f2[g2].y), w[h2].newStrokeStyle && (b.strokeStyle = w[h2].newStrokeStyle), w[h2].newLineDashArray && b.setLineDash(w[h2].newLineDashArray);
                  b.bezierCurveTo(f2[g2 + 1].x, f2[g2 + 1].y, f2[g2 + 2].x, f2[g2 + 2].y, f2[g2 + 3].x, f2[g2 + 3].y);
                }
                f2 = t2(w, 2);
                b.moveTo(f2[0].x, f2[0].y);
                for (h2 = g2 = 0; g2 < f2.length - 3; g2 += 3, h2++) {
                  if (w[h2].newStrokeStyle || w[h2].newLineDashArray)
                    b.stroke(), b.beginPath(), b.moveTo(f2[g2].x, f2[g2].y), w[h2].newStrokeStyle && (b.strokeStyle = w[h2].newStrokeStyle), w[h2].newLineDashArray && b.setLineDash(w[h2].newLineDashArray);
                  b.bezierCurveTo(f2[g2 + 1].x, f2[g2 + 1].y, f2[g2 + 2].x, f2[g2 + 2].y, f2[g2 + 3].x, f2[g2 + 3].y);
                }
                b.stroke();
              }
              b.beginPath();
            }
          }
          var c = a.targetCanvasCtx || this.plotArea.ctx, b = v ? this._preRenderCtx : c;
          if (!(0 >= a.dataSeriesIndexes.length)) {
            var e = this._eventManager.ghostCtx, h = [], m = this.plotArea;
            b.save();
            v && e.save();
            b.beginPath();
            b.rect(m.x1, m.y1, m.width, m.height);
            b.clip();
            v && (e.beginPath(), e.rect(m.x1, m.y1, m.width, m.height), e.clip());
            for (var d2 = 0; d2 < a.dataSeriesIndexes.length; d2++) {
              var n2 = a.dataSeriesIndexes[d2], k = this.data[n2], l = k.dataPoints, h = k.id;
              this._eventManager.objectMap[h] = { objectType: "dataSeries", dataSeriesIndex: n2 };
              h = U(h);
              e.fillStyle = h;
              var h = [], q = 0, r, f, p2, w = [], x = [];
              if (0 < l.length) {
                var s = k._colorSet[q % k._colorSet.length], z = k.lineColor = k.options.lineColor || s, u = z;
                b.fillStyle = s;
                b.lineWidth = k.lineThickness;
                var B3 = "solid", D;
                if (b.setLineDash) {
                  var C = G(k.nullDataLineDashType, k.lineThickness), B3 = k.lineDashType;
                  D = G(B3, k.lineThickness);
                }
                for (f = false; q < l.length; q++)
                  if (r = l[q].x.getTime ? l[q].x.getTime() : l[q].x, !(r < a.axisX.dataInfo.viewPortMin || r > a.axisX.dataInfo.viewPortMax && (!k.connectNullData || !f)))
                    if (null !== l[q].y && l[q].y.length && "number" === typeof l[q].y[0] && "number" === typeof l[q].y[1]) {
                      r = a.axisX.convertValueToPixel(r);
                      f = a.axisY.convertValueToPixel(l[q].y[0]);
                      p2 = a.axisY.convertValueToPixel(l[q].y[1]);
                      var A2 = k.dataPointIds[q];
                      this._eventManager.objectMap[A2] = { id: A2, objectType: "dataPoint", dataSeriesIndex: n2, dataPointIndex: q, x1: r, y1: f, y2: p2 };
                      w[w.length] = { x: r, y: f };
                      x[x.length] = { x: r, y: p2 };
                      q < l.length - 1 && (u !== (l[q].lineColor || z) || B3 !== (l[q].lineDashType || k.lineDashType)) && (u = l[q].lineColor || z, w[w.length - 1].newStrokeStyle = u, b.setLineDash && (l[q].lineDashType ? (B3 = l[q].lineDashType, w[w.length - 1].newLineDashArray = G(B3, k.lineThickness)) : (B3 = k.lineDashType, w[w.length - 1].newLineDashArray = D)));
                      if (0 !== l[q].markerSize && (0 < l[q].markerSize || 0 < k.markerSize)) {
                        var H2 = k.getMarkerProperties(q, r, f, b);
                        h.push(H2);
                        var J = U(A2);
                        v && h.push({ x: r, y: f, ctx: e, type: H2.type, size: H2.size, color: J, borderColor: J, borderThickness: H2.borderThickness });
                        H2 = k.getMarkerProperties(q, r, p2, b);
                        h.push(H2);
                        J = U(A2);
                        v && h.push({ x: r, y: p2, ctx: e, type: H2.type, size: H2.size, color: J, borderColor: J, borderThickness: H2.borderThickness });
                      }
                      if (l[q].indexLabel || k.indexLabel || l[q].indexLabelFormatter || k.indexLabelFormatter)
                        this._indexLabels.push({ chartType: "rangeSplineArea", dataPoint: l[q], dataSeries: k, indexKeyword: 0, point: { x: r, y: f }, direction: l[q].y[0] <= l[q].y[1] ? -1 : 1, color: s }), this._indexLabels.push({ chartType: "rangeSplineArea", dataPoint: l[q], dataSeries: k, indexKeyword: 1, point: { x: r, y: p2 }, direction: l[q].y[0] <= l[q].y[1] ? 1 : -1, color: s });
                      f = false;
                    } else
                      0 < q && !f && (k.connectNullData ? b.setLineDash && (0 < w.length && (k.options.nullDataLineDashType || !l[q - 1].lineDashType)) && (w[w.length - 1].newLineDashArray = C, B3 = k.nullDataLineDashType) : (g(D, z), w = [], x = [])), f = true;
                g(D, z);
                X.drawMarkers(h);
              }
            }
            v && (c.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && b.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && b.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.clearRect(m.x1, m.y1, m.width, m.height), this._eventManager.ghostCtx.restore());
            b.restore();
            return { source: c, dest: this.plotArea.ctx, animationCallback: L.xClipAnimation, easingFunction: L.easing.linear, animationBase: 0 };
          }
        };
        p.prototype.renderWaterfall = function(a) {
          var g = a.targetCanvasCtx || this.plotArea.ctx, c = v ? this._preRenderCtx : g;
          if (!(0 >= a.dataSeriesIndexes.length)) {
            var b = this._eventManager.ghostCtx, e = null, h = this.plotArea, m = 0, d2, n2, k, l, q = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0), m = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1;
            n2 = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : Math.min(0.15 * this.width, 0.9 * (this.plotArea.width / a.plotType.totalDataSeries)) << 0;
            var r = a.axisX.dataInfo.minDiff;
            isFinite(r) || (r = 0.3 * Math.abs(a.axisX.range));
            r = this.options.dataPointWidth ? this.dataPointWidth : 0.6 * (h.width * (a.axisX.logarithmic ? Math.log(r) / Math.log(a.axisX.range) : Math.abs(r) / Math.abs(a.axisX.range)) / a.plotType.totalDataSeries) << 0;
            this.dataPointMaxWidth && m > n2 && (m = Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, n2));
            !this.dataPointMaxWidth && (this.dataPointMinWidth && n2 < m) && (n2 = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -Infinity, m));
            r < m && (r = m);
            r > n2 && (r = n2);
            c.save();
            v && this._eventManager.ghostCtx.save();
            c.beginPath();
            c.rect(h.x1, h.y1, h.width, h.height);
            c.clip();
            v && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(h.x1, h.y1, h.width, h.height), this._eventManager.ghostCtx.clip());
            for (var f = 0; f < a.dataSeriesIndexes.length; f++) {
              var p2 = a.dataSeriesIndexes[f], w = this.data[p2], x = w.dataPoints, e = w._colorSet[0];
              w.risingColor = w.options.risingColor ? w.options.risingColor : e;
              w.fallingColor = w.options.fallingColor ? w.options.fallingColor : "#e40a0a";
              var s = "number" === typeof w.options.lineThickness ? Math.round(w.lineThickness) : 1, z = 1 === Math.round(s) % 2 ? -0.5 : 0;
              if (0 < x.length)
                for (var u = 5 < r && w.bevelEnabled ? true : false, t3 = false, D = null, C = null, m = 0; m < x.length; m++)
                  if (x[m].getTime ? l = x[m].x.getTime() : l = x[m].x, "number" !== typeof x[m].y) {
                    if (0 < m && !t3 && w.connectNullData)
                      var B3 = w.options.nullDataLineDashType || !x[m - 1].lineDashType ? w.nullDataLineDashType : x[m - 1].lineDashType;
                    t3 = true;
                  } else {
                    d2 = a.axisX.convertValueToPixel(l);
                    n2 = 0 === w.dataPointEOs[m].cumulativeSum ? q : a.axisY.convertValueToPixel(w.dataPointEOs[m].cumulativeSum);
                    k = 0 === w.dataPointEOs[m].cumulativeSumYStartValue ? q : a.axisY.convertValueToPixel(w.dataPointEOs[m].cumulativeSumYStartValue);
                    d2 = a.axisX.reversed ? d2 + a.plotType.totalDataSeries * r / 2 - (a.previousDataSeriesCount + f) * r << 0 : d2 - a.plotType.totalDataSeries * r / 2 + (a.previousDataSeriesCount + f) * r << 0;
                    var A2 = a.axisX.reversed ? d2 - r << 0 : d2 + r << 0;
                    n2 > k && (e = n2, n2 = k, k = e);
                    a.axisY.reversed && (e = n2, n2 = k, k = e);
                    e = w.dataPointIds[m];
                    this._eventManager.objectMap[e] = { id: e, objectType: "dataPoint", dataSeriesIndex: p2, dataPointIndex: m, x1: d2, y1: n2, x2: A2, y2: k };
                    var J = x[m].color ? x[m].color : 0 < x[m].y ? w.risingColor : w.fallingColor;
                    ba(c, a.axisX.reversed ? A2 : d2, a.axisY.reversed ? k : n2, a.axisX.reversed ? d2 : A2, a.axisY.reversed ? n2 : k, J, 0, J, u, u, false, false, w.fillOpacity);
                    e = U(e);
                    v && ba(this._eventManager.ghostCtx, a.axisX.reversed ? A2 : d2, n2, a.axisX.reversed ? d2 : A2, k, e, 0, null, false, false, false, false);
                    var K, J = d2;
                    K = "undefined" !== typeof x[m].isIntermediateSum && true === x[m].isIntermediateSum || "undefined" !== typeof x[m].isCumulativeSum && true === x[m].isCumulativeSum ? 0 < x[m].y ? n2 : k : 0 < x[m].y ? k : n2;
                    0 < m && D && (!t3 || w.connectNullData) && (t3 && c.setLineDash && c.setLineDash(G(B3, s)), c.beginPath(), c.moveTo(D, C - z), c.lineTo(J, K - z), 0 < s && c.stroke(), v && (b.beginPath(), b.moveTo(D, C - z), b.lineTo(J, K - z), 0 < s && b.stroke()));
                    t3 = false;
                    D = A2;
                    C = 0 < x[m].y ? n2 : k;
                    J = x[m].lineDashType ? x[m].lineDashType : w.options.lineDashType ? w.options.lineDashType : "shortDash";
                    c.strokeStyle = x[m].lineColor ? x[m].lineColor : w.options.lineColor ? w.options.lineColor : "#9e9e9e";
                    c.lineWidth = s;
                    c.setLineDash && (J = G(J, s), c.setLineDash(J));
                    (x[m].indexLabel || w.indexLabel || x[m].indexLabelFormatter || w.indexLabelFormatter) && this._indexLabels.push({ chartType: "waterfall", dataPoint: x[m], dataSeries: w, point: { x: d2 + (A2 - d2) / 2, y: 0 <= x[m].y ? n2 : k }, direction: 0 > x[m].y === a.axisY.reversed ? 1 : -1, bounds: { x1: d2, y1: Math.min(n2, k), x2: A2, y2: Math.max(n2, k) }, color: e });
                  }
            }
            v && (g.drawImage(
              this._preRenderCanvas,
              0,
              0,
              this.width,
              this.height
            ), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.clearRect(h.x1, h.y1, h.width, h.height), this._eventManager.ghostCtx.restore());
            c.restore();
            return {
              source: g,
              dest: this.plotArea.ctx,
              animationCallback: L.fadeInAnimation,
              easingFunction: L.easing.easeInQuad,
              animationBase: 0
            };
          }
        };
        var ia2 = function(a, g, c, b, e, h, m, d2, n2) {
          if (!(0 > c)) {
            "undefined" === typeof d2 && (d2 = 1);
            if (!v) {
              var k = Number((m % (2 * Math.PI)).toFixed(8));
              Number((h % (2 * Math.PI)).toFixed(8)) === k && (m -= 1e-4);
            }
            a.save();
            a.globalAlpha = d2;
            "pie" === e ? (a.beginPath(), a.moveTo(g.x, g.y), a.arc(g.x, g.y, c, h, m, false), a.fillStyle = b, a.strokeStyle = "white", a.lineWidth = 2, a.closePath(), a.fill()) : "doughnut" === e && (a.beginPath(), a.arc(g.x, g.y, c, h, m, false), 0 <= n2 && a.arc(g.x, g.y, n2 * c, m, h, true), a.closePath(), a.fillStyle = b, a.strokeStyle = "white", a.lineWidth = 2, a.fill());
            a.globalAlpha = 1;
            a.restore();
          }
        };
        p.prototype.renderPie = function(a) {
          function g() {
            if (k && l) {
              var a2 = 0, b2 = 0, c2 = 0, g2 = 0;
              n(k.options.indexLabelMaxWidth) && (k.indexLabelMaxWidth = 0.33 * r.width);
              for (var e2 = 0; e2 < l.length; e2++) {
                var h2 = l[e2], m2 = k.dataPointIds[e2];
                f[e2].id = m2;
                f[e2].objectType = "dataPoint";
                f[e2].dataPointIndex = e2;
                f[e2].dataSeriesIndex = 0;
                var d3 = f[e2], q2 = { percent: null, total: null }, y = null, q2 = p2.getPercentAndTotal(k, h2);
                if (k.indexLabelFormatter || h2.indexLabelFormatter)
                  y = {
                    chart: p2.options,
                    dataSeries: k,
                    dataPoint: h2,
                    total: q2.total,
                    percent: q2.percent
                  };
                q2 = h2.indexLabelFormatter ? h2.indexLabelFormatter(y) : h2.indexLabel ? p2.replaceKeywordsWithValue(h2.indexLabel, h2, k, e2) : k.indexLabelFormatter ? k.indexLabelFormatter(y) : k.indexLabel ? p2.replaceKeywordsWithValue(k.indexLabel, h2, k, e2) : h2.label ? h2.label : "";
                p2._eventManager.objectMap[m2] = d3;
                d3.center = { x: u.x, y: u.y };
                d3.y = h2.y;
                d3.radius = A2;
                d3.percentInnerRadius = H2;
                d3.indexLabelText = q2;
                d3.indexLabelPlacement = k.indexLabelPlacement;
                d3.indexLabelLineColor = h2.indexLabelLineColor ? h2.indexLabelLineColor : k.options.indexLabelLineColor ? k.options.indexLabelLineColor : h2.color ? h2.color : k._colorSet[e2 % k._colorSet.length];
                d3.indexLabelLineThickness = n(h2.indexLabelLineThickness) ? k.indexLabelLineThickness : h2.indexLabelLineThickness;
                d3.indexLabelLineDashType = h2.indexLabelLineDashType ? h2.indexLabelLineDashType : k.indexLabelLineDashType;
                d3.indexLabelFontColor = h2.indexLabelFontColor ? h2.indexLabelFontColor : k.indexLabelFontColor;
                d3.indexLabelFontStyle = h2.indexLabelFontStyle ? h2.indexLabelFontStyle : k.indexLabelFontStyle;
                d3.indexLabelFontWeight = h2.indexLabelFontWeight ? h2.indexLabelFontWeight : k.indexLabelFontWeight;
                d3.indexLabelFontSize = n(h2.indexLabelFontSize) ? k.indexLabelFontSize : h2.indexLabelFontSize;
                d3.indexLabelFontFamily = h2.indexLabelFontFamily ? h2.indexLabelFontFamily : k.indexLabelFontFamily;
                d3.indexLabelBackgroundColor = h2.indexLabelBackgroundColor ? h2.indexLabelBackgroundColor : k.options.indexLabelBackgroundColor ? k.options.indexLabelBackgroundColor : k.indexLabelBackgroundColor;
                d3.indexLabelBorderColor = h2.indexLabelBorderColor ? h2.indexLabelBorderColor : k.options.indexLabelBorderColor ? k.options.indexLabelBorderColor : k.indexLabelBorderColor;
                d3.indexLabelBorderThickness = h2.indexLabelBorderThickness ? h2.indexLabelBorderThickness : k.options.indexLabelBorderThickness ? k.options.indexLabelBorderThickness : k.indexLabelBorderThickness;
                d3.indexLabelMaxWidth = h2.indexLabelMaxWidth ? h2.indexLabelMaxWidth : k.indexLabelMaxWidth;
                d3.indexLabelWrap = "undefined" !== typeof h2.indexLabelWrap ? h2.indexLabelWrap : k.indexLabelWrap;
                d3.indexLabelTextAlign = h2.indexLabelTextAlign ? h2.indexLabelTextAlign : k.indexLabelTextAlign ? k.indexLabelTextAlign : "left";
                d3.startAngle = 0 === e2 ? k.startAngle ? k.startAngle / 180 * Math.PI : 0 : f[e2 - 1].endAngle;
                d3.startAngle = (d3.startAngle + 2 * Math.PI) % (2 * Math.PI);
                d3.endAngle = d3.startAngle + 2 * Math.PI / t3 * Math.abs(h2.y);
                h2 = (d3.endAngle + d3.startAngle) / 2;
                h2 = (h2 + 2 * Math.PI) % (2 * Math.PI);
                d3.midAngle = h2;
                if (d3.midAngle > Math.PI / 2 - s && d3.midAngle < Math.PI / 2 + s) {
                  if (0 === a2 || f[c2].midAngle > d3.midAngle)
                    c2 = e2;
                  a2++;
                } else if (d3.midAngle > 3 * Math.PI / 2 - s && d3.midAngle < 3 * Math.PI / 2 + s) {
                  if (0 === b2 || f[g2].midAngle > d3.midAngle)
                    g2 = e2;
                  b2++;
                }
                d3.hemisphere = h2 > Math.PI / 2 && h2 <= 3 * Math.PI / 2 ? "left" : "right";
                d3.indexLabelTextBlock = new ja(p2.plotArea.ctx, {
                  fontSize: d3.indexLabelFontSize,
                  fontFamily: d3.indexLabelFontFamily,
                  fontColor: d3.indexLabelFontColor,
                  fontStyle: d3.indexLabelFontStyle,
                  fontWeight: d3.indexLabelFontWeight,
                  textAlign: d3.indexLabelTextAlign,
                  backgroundColor: d3.indexLabelBackgroundColor,
                  borderColor: d3.indexLabelBorderColor,
                  borderThickness: d3.indexLabelBorderThickness,
                  maxWidth: d3.indexLabelMaxWidth,
                  maxHeight: d3.indexLabelWrap ? 5 * d3.indexLabelFontSize : 1.5 * d3.indexLabelFontSize,
                  text: d3.indexLabelText,
                  padding: 0,
                  textBaseline: "middle"
                });
                d3.indexLabelTextBlock.measureText();
              }
              m2 = h2 = 0;
              q2 = false;
              for (e2 = 0; e2 < l.length; e2++)
                d3 = f[(c2 + e2) % l.length], 1 < a2 && (d3.midAngle > Math.PI / 2 - s && d3.midAngle < Math.PI / 2 + s) && (h2 <= a2 / 2 && !q2 ? (d3.hemisphere = "right", h2++) : (d3.hemisphere = "left", q2 = true));
              q2 = false;
              for (e2 = 0; e2 < l.length; e2++)
                d3 = f[(g2 + e2) % l.length], 1 < b2 && (d3.midAngle > 3 * Math.PI / 2 - s && d3.midAngle < 3 * Math.PI / 2 + s) && (m2 <= b2 / 2 && !q2 ? (d3.hemisphere = "left", m2++) : (d3.hemisphere = "right", q2 = true));
            }
          }
          function c(a2, b2) {
            var c2 = p2.plotArea.ctx;
            c2.clearRect(r.x1, r.y1, r.width, r.height);
            c2.fillStyle = p2.backgroundColor;
            c2.fillRect(r.x1, r.y1, r.width, r.height);
            for (c2 = 0; c2 < l.length; c2++) {
              var e2 = f[c2].startAngle, g2 = f[c2].endAngle;
              if (g2 > e2) {
                var h2 = 0.07 * A2 * Math.cos(f[c2].midAngle), d3 = 0.07 * A2 * Math.sin(f[c2].midAngle), m2 = false;
                if (l[c2].exploded) {
                  if (1e-9 < Math.abs(f[c2].center.x - (u.x + h2)) || 1e-9 < Math.abs(f[c2].center.y - (u.y + d3)))
                    f[c2].center.x = u.x + h2 * a2, f[c2].center.y = u.y + d3 * a2, m2 = true;
                } else if (0 < Math.abs(f[c2].center.x - u.x) || 0 < Math.abs(f[c2].center.y - u.y))
                  f[c2].center.x = u.x + h2 * (1 - a2), f[c2].center.y = u.y + d3 * (1 - a2), m2 = true;
                m2 && b2 && (h2 = {}, h2.dataSeries = k, h2.dataPoint = k.dataPoints[c2], h2.index = c2, p2.toolTip.highlightObjects([h2]));
                ia2(p2.plotArea.ctx, f[c2].center, f[c2].radius, l[c2].color ? l[c2].color : k._colorSet[c2 % k._colorSet.length], k.type, e2, g2, k.fillOpacity, f[c2].percentInnerRadius);
              }
            }
            c2 = p2.plotArea.ctx;
            c2.save();
            c2.fillStyle = "black";
            c2.strokeStyle = "grey";
            c2.textBaseline = "middle";
            c2.lineJoin = "round";
            for (e2 = e2 = 0; e2 < l.length; e2++)
              g2 = f[e2], g2.indexLabelText && (g2.indexLabelTextBlock.y -= g2.indexLabelTextBlock.height / 2 - g2.indexLabelTextBlock.fontSize / 2, h2 = 0, h2 = "left" === g2.hemisphere ? "inside" !== k.indexLabelPlacement ? -(g2.indexLabelTextBlock.width + q) : -g2.indexLabelTextBlock.width / 2 : "inside" !== k.indexLabelPlacement ? q : -g2.indexLabelTextBlock.width / 2, g2.indexLabelTextBlock.x += h2, g2.indexLabelTextBlock.render(true), g2.indexLabelTextBlock.x -= h2, g2.indexLabelTextBlock.y += g2.indexLabelTextBlock.height / 2 - g2.indexLabelTextBlock.fontSize / 2, "inside" !== g2.indexLabelPlacement && 0 < g2.indexLabelLineThickness && (h2 = g2.center.x + A2 * Math.cos(g2.midAngle), d3 = g2.center.y + A2 * Math.sin(g2.midAngle), c2.strokeStyle = g2.indexLabelLineColor, c2.lineWidth = g2.indexLabelLineThickness, c2.setLineDash && c2.setLineDash(G(g2.indexLabelLineDashType, g2.indexLabelLineThickness)), c2.beginPath(), c2.moveTo(h2, d3), c2.lineTo(g2.indexLabelTextBlock.x, g2.indexLabelTextBlock.y), c2.lineTo(g2.indexLabelTextBlock.x + ("left" === g2.hemisphere ? -q : q), g2.indexLabelTextBlock.y), c2.stroke()), c2.lineJoin = "miter");
            c2.save();
          }
          function b(a2, b2) {
            var c2 = 0, c2 = a2.indexLabelTextBlock.y - a2.indexLabelTextBlock.height / 2, f2 = a2.indexLabelTextBlock.y + a2.indexLabelTextBlock.height / 2, g2 = b2.indexLabelTextBlock.y - b2.indexLabelTextBlock.height / 2, e2 = b2.indexLabelTextBlock.y + b2.indexLabelTextBlock.height / 2;
            return c2 = b2.indexLabelTextBlock.y > a2.indexLabelTextBlock.y ? g2 - f2 : c2 - e2;
          }
          function e(a2) {
            for (var c2 = null, g2 = 1; g2 < l.length; g2++)
              if (c2 = (a2 + g2 + f.length) % f.length, f[c2].hemisphere !== f[a2].hemisphere) {
                c2 = null;
                break;
              } else if (f[c2].indexLabelText && c2 !== a2 && (0 > b(f[c2], f[a2]) || ("right" === f[a2].hemisphere ? f[c2].indexLabelTextBlock.y >= f[a2].indexLabelTextBlock.y : f[c2].indexLabelTextBlock.y <= f[a2].indexLabelTextBlock.y)))
                break;
              else
                c2 = null;
            return c2;
          }
          function h(a2, c2, g2) {
            g2 = (g2 || 0) + 1;
            if (1e3 < g2)
              return 0;
            c2 = c2 || 0;
            var d3 = 0, m2 = u.y - 1 * w, k2 = u.y + 1 * w;
            if (0 <= a2 && a2 < l.length) {
              var q2 = f[a2];
              if (0 > c2 && q2.indexLabelTextBlock.y < m2 || 0 < c2 && q2.indexLabelTextBlock.y > k2)
                return 0;
              var r2 = 0, n2 = 0, n2 = r2 = r2 = 0;
              0 > c2 ? q2.indexLabelTextBlock.y - q2.indexLabelTextBlock.height / 2 > m2 && q2.indexLabelTextBlock.y - q2.indexLabelTextBlock.height / 2 + c2 < m2 && (c2 = -(m2 - (q2.indexLabelTextBlock.y - q2.indexLabelTextBlock.height / 2 + c2))) : q2.indexLabelTextBlock.y + q2.indexLabelTextBlock.height / 2 < m2 && q2.indexLabelTextBlock.y + q2.indexLabelTextBlock.height / 2 + c2 > k2 && (c2 = q2.indexLabelTextBlock.y + q2.indexLabelTextBlock.height / 2 + c2 - k2);
              c2 = q2.indexLabelTextBlock.y + c2;
              m2 = 0;
              m2 = "right" === q2.hemisphere ? u.x + Math.sqrt(Math.pow(w, 2) - Math.pow(c2 - u.y, 2)) : u.x - Math.sqrt(Math.pow(w, 2) - Math.pow(c2 - u.y, 2));
              n2 = u.x + A2 * Math.cos(q2.midAngle);
              r2 = u.y + A2 * Math.sin(q2.midAngle);
              r2 = Math.sqrt(Math.pow(m2 - n2, 2) + Math.pow(c2 - r2, 2));
              n2 = Math.acos(A2 / w);
              r2 = Math.acos((w * w + A2 * A2 - r2 * r2) / (2 * A2 * w));
              c2 = r2 < n2 ? c2 - q2.indexLabelTextBlock.y : 0;
              m2 = null;
              for (k2 = 1; k2 < l.length; k2++)
                if (m2 = (a2 - k2 + f.length) % f.length, f[m2].hemisphere !== f[a2].hemisphere) {
                  m2 = null;
                  break;
                } else if (f[m2].indexLabelText && f[m2].hemisphere === f[a2].hemisphere && m2 !== a2 && (0 > b(f[m2], f[a2]) || ("right" === f[a2].hemisphere ? f[m2].indexLabelTextBlock.y <= f[a2].indexLabelTextBlock.y : f[m2].indexLabelTextBlock.y >= f[a2].indexLabelTextBlock.y)))
                  break;
                else
                  m2 = null;
              n2 = m2;
              r2 = e(a2);
              k2 = m2 = 0;
              0 > c2 ? (k2 = "right" === q2.hemisphere ? n2 : r2, d3 = c2, null !== k2 && (n2 = -c2, c2 = q2.indexLabelTextBlock.y - q2.indexLabelTextBlock.height / 2 - (f[k2].indexLabelTextBlock.y + f[k2].indexLabelTextBlock.height / 2), c2 - n2 < v2 && (m2 = -n2, k2 = h(k2, m2, g2 + 1), +k2.toFixed(z) > +m2.toFixed(z) && (d3 = c2 > v2 ? -(c2 - v2) : -(n2 - (k2 - m2)))))) : 0 < c2 && (k2 = "right" === q2.hemisphere ? r2 : n2, d3 = c2, null !== k2 && (n2 = c2, c2 = f[k2].indexLabelTextBlock.y - f[k2].indexLabelTextBlock.height / 2 - (q2.indexLabelTextBlock.y + q2.indexLabelTextBlock.height / 2), c2 - n2 < v2 && (m2 = n2, k2 = h(k2, m2, g2 + 1), +k2.toFixed(z) < +m2.toFixed(z) && (d3 = c2 > v2 ? c2 - v2 : n2 - (m2 - k2)))));
              d3 && (g2 = q2.indexLabelTextBlock.y + d3, c2 = 0, c2 = "right" === q2.hemisphere ? u.x + Math.sqrt(Math.pow(w, 2) - Math.pow(g2 - u.y, 2)) : u.x - Math.sqrt(Math.pow(w, 2) - Math.pow(g2 - u.y, 2)), q2.midAngle > Math.PI / 2 - s && q2.midAngle < Math.PI / 2 + s ? (m2 = (a2 - 1 + f.length) % f.length, m2 = f[m2], a2 = f[(a2 + 1 + f.length) % f.length], "left" === q2.hemisphere && "right" === m2.hemisphere && c2 > m2.indexLabelTextBlock.x ? c2 = m2.indexLabelTextBlock.x - 15 : "right" === q2.hemisphere && ("left" === a2.hemisphere && c2 < a2.indexLabelTextBlock.x) && (c2 = a2.indexLabelTextBlock.x + 15)) : q2.midAngle > 3 * Math.PI / 2 - s && q2.midAngle < 3 * Math.PI / 2 + s && (m2 = (a2 - 1 + f.length) % f.length, m2 = f[m2], a2 = f[(a2 + 1 + f.length) % f.length], "right" === q2.hemisphere && "left" === m2.hemisphere && c2 < m2.indexLabelTextBlock.x ? c2 = m2.indexLabelTextBlock.x + 15 : "left" === q2.hemisphere && ("right" === a2.hemisphere && c2 > a2.indexLabelTextBlock.x) && (c2 = a2.indexLabelTextBlock.x - 15)), q2.indexLabelTextBlock.y = g2, q2.indexLabelTextBlock.x = c2, q2.indexLabelAngle = Math.atan2(q2.indexLabelTextBlock.y - u.y, q2.indexLabelTextBlock.x - u.x));
            }
            return d3;
          }
          function m() {
            var a2 = p2.plotArea.ctx;
            a2.fillStyle = "grey";
            a2.strokeStyle = "grey";
            a2.font = "16px Arial";
            a2.textBaseline = "middle";
            for (var c2 = a2 = 0, g2 = 0, m2 = true, c2 = 0; 10 > c2 && (1 > c2 || 0 < g2); c2++) {
              if (k.radius || !k.radius && "undefined" !== typeof k.innerRadius && null !== k.innerRadius && A2 - g2 <= B3)
                m2 = false;
              m2 && (A2 -= g2);
              g2 = 0;
              if ("inside" !== k.indexLabelPlacement) {
                w = A2 * x;
                for (a2 = 0; a2 < l.length; a2++) {
                  var d3 = f[a2];
                  d3.indexLabelTextBlock.x = u.x + w * Math.cos(d3.midAngle);
                  d3.indexLabelTextBlock.y = u.y + w * Math.sin(d3.midAngle);
                  d3.indexLabelAngle = d3.midAngle;
                  d3.radius = A2;
                  d3.percentInnerRadius = H2;
                }
                for (var n2, s2, a2 = 0; a2 < l.length; a2++) {
                  var d3 = f[a2], y = e(a2);
                  if (null !== y) {
                    n2 = f[a2];
                    s2 = f[y];
                    var t4 = 0, t4 = b(n2, s2) - v2;
                    if (0 > t4) {
                      for (var D2 = s2 = 0, G2 = 0; G2 < l.length; G2++)
                        G2 !== a2 && f[G2].hemisphere === d3.hemisphere && (f[G2].indexLabelTextBlock.y < d3.indexLabelTextBlock.y ? s2++ : D2++);
                      s2 = t4 / (s2 + D2 || 1) * D2;
                      var D2 = -1 * (t4 - s2), L2 = G2 = 0;
                      "right" === d3.hemisphere ? (G2 = h(a2, s2), D2 = -1 * (t4 - G2), L2 = h(y, D2), +L2.toFixed(z) < +D2.toFixed(z) && +G2.toFixed(z) <= +s2.toFixed(z) && h(a2, -(D2 - L2))) : (G2 = h(y, s2), D2 = -1 * (t4 - G2), L2 = h(a2, D2), +L2.toFixed(z) < +D2.toFixed(z) && +G2.toFixed(z) <= +s2.toFixed(z) && h(y, -(D2 - L2)));
                    }
                  }
                }
              } else
                for (a2 = 0; a2 < l.length; a2++)
                  d3 = f[a2], w = "pie" === k.type ? 0.7 * A2 : 0.85 * A2, y = u.x + w * Math.cos(d3.midAngle), s2 = u.y + w * Math.sin(d3.midAngle), d3.indexLabelTextBlock.x = y, d3.indexLabelTextBlock.y = s2;
              for (a2 = 0; a2 < l.length; a2++)
                if (d3 = f[a2], y = d3.indexLabelTextBlock.measureText(), 0 !== y.height && 0 !== y.width)
                  y = y = 0, "right" === d3.hemisphere ? (y = r.x2 - (d3.indexLabelTextBlock.x + d3.indexLabelTextBlock.width + q), y *= -1) : y = r.x1 - (d3.indexLabelTextBlock.x - d3.indexLabelTextBlock.width - q), 0 < y && (!m2 && d3.indexLabelText && (s2 = "right" === d3.hemisphere ? r.x2 - d3.indexLabelTextBlock.x : d3.indexLabelTextBlock.x - r.x1, 0.3 * d3.indexLabelTextBlock.maxWidth > s2 ? d3.indexLabelText = "" : d3.indexLabelTextBlock.maxWidth = 0.85 * s2, 0.3 * d3.indexLabelTextBlock.maxWidth < s2 && (d3.indexLabelTextBlock.x -= "right" === d3.hemisphere ? 2 : -2)), Math.abs(d3.indexLabelTextBlock.y - d3.indexLabelTextBlock.height / 2 - u.y) < A2 || Math.abs(d3.indexLabelTextBlock.y + d3.indexLabelTextBlock.height / 2 - u.y) < A2) && (y /= Math.abs(Math.cos(d3.indexLabelAngle)), 9 < y && (y *= 0.3), y > g2 && (g2 = y)), y = y = 0, 0 < d3.indexLabelAngle && d3.indexLabelAngle < Math.PI ? (y = r.y2 - (d3.indexLabelTextBlock.y + d3.indexLabelTextBlock.height / 2 + 5), y *= -1) : y = r.y1 - (d3.indexLabelTextBlock.y - d3.indexLabelTextBlock.height / 2 - 5), 0 < y && (!m2 && d3.indexLabelText && (s2 = 0 < d3.indexLabelAngle && d3.indexLabelAngle < Math.PI ? -1 : 1, 0 === h(a2, y * s2) && h(a2, 2 * s2)), Math.abs(d3.indexLabelTextBlock.x - u.x) < A2 && (y /= Math.abs(Math.sin(d3.indexLabelAngle)), 9 < y && (y *= 0.3), y > g2 && (g2 = y)));
              var O = function(a3, b2, c3) {
                for (var g3 = [], e2 = 0; g3.push(f[b2]), b2 !== c3; b2 = (b2 + 1 + l.length) % l.length)
                  ;
                g3.sort(function(a4, b3) {
                  return a4.y - b3.y;
                });
                for (b2 = 0; b2 < g3.length; b2++)
                  if (c3 = g3[b2], e2 < 0.7 * a3)
                    e2 += c3.indexLabelTextBlock.height, c3.indexLabelTextBlock.text = "", c3.indexLabelText = "", c3.indexLabelTextBlock.measureText();
                  else
                    break;
              };
              (function() {
                for (var a3 = -1, c3 = -1, g3 = 0, h2 = false, d4 = 0; d4 < l.length; d4++)
                  if (h2 = false, n2 = f[d4], n2.indexLabelText) {
                    var m3 = e(d4);
                    if (null !== m3) {
                      var k2 = f[m3];
                      t4 = 0;
                      t4 = b(n2, k2);
                      var r2;
                      if (r2 = 0 > t4) {
                        r2 = n2.indexLabelTextBlock.x;
                        var p3 = n2.indexLabelTextBlock.y - n2.indexLabelTextBlock.height / 2, s3 = n2.indexLabelTextBlock.y + n2.indexLabelTextBlock.height / 2, y2 = k2.indexLabelTextBlock.y - k2.indexLabelTextBlock.height / 2, u2 = k2.indexLabelTextBlock.x + k2.indexLabelTextBlock.width, w2 = k2.indexLabelTextBlock.y + k2.indexLabelTextBlock.height / 2;
                        r2 = n2.indexLabelTextBlock.x + n2.indexLabelTextBlock.width < k2.indexLabelTextBlock.x - q || r2 > u2 + q || p3 > w2 + q || s3 < y2 - q ? false : true;
                      }
                      r2 ? (0 > a3 && (a3 = d4), m3 !== a3 && (c3 = m3, g3 += -t4), 0 === d4 % Math.max(l.length / 10, 3) && (h2 = true)) : h2 = true;
                      h2 && (0 < g3 && 0 <= a3 && 0 <= c3) && (O(g3, a3, c3), c3 = a3 = -1, g3 = 0);
                    }
                  }
                0 < g3 && O(g3, a3, c3);
              })();
            }
          }
          function d2() {
            p2.plotArea.layoutManager.reset();
            p2.title && (p2.title.dockInsidePlotArea || "center" === p2.title.horizontalAlign && "center" === p2.title.verticalAlign) && p2.title.render();
            if (p2.subtitles)
              for (var a2 = 0; a2 < p2.subtitles.length; a2++) {
                var b2 = p2.subtitles[a2];
                (b2.dockInsidePlotArea || "center" === b2.horizontalAlign && "center" === b2.verticalAlign) && b2.render();
              }
            p2.legend && (p2.legend.dockInsidePlotArea || "center" === p2.legend.horizontalAlign && "center" === p2.legend.verticalAlign) && (p2.legend.setLayout(), p2.legend.render());
          }
          var p2 = this;
          if (!(0 >= a.dataSeriesIndexes.length)) {
            var k = this.data[a.dataSeriesIndexes[0]], l = k.dataPoints, q = 10, r = this.plotArea, f = k.dataPointEOs, v2 = 2, w, x = 1.3, s = 20 / 180 * Math.PI, z = 6, u = { x: (r.x2 + r.x1) / 2, y: (r.y2 + r.y1) / 2 }, t3 = 0;
            a = false;
            for (var D = 0; D < l.length; D++)
              t3 += Math.abs(l[D].y), !a && ("undefined" !== typeof l[D].indexLabel && null !== l[D].indexLabel && 0 < l[D].indexLabel.toString().length) && (a = true), !a && ("undefined" !== typeof l[D].label && null !== l[D].label && 0 < l[D].label.toString().length) && (a = true);
            if (0 !== t3) {
              a = a || "undefined" !== typeof k.indexLabel && null !== k.indexLabel && 0 < k.indexLabel.toString().length;
              var A2 = "inside" !== k.indexLabelPlacement && a ? 0.75 * Math.min(r.width, r.height) / 2 : 0.92 * Math.min(r.width, r.height) / 2;
              k.radius && (A2 = Ua(k.radius, A2));
              var B3 = "undefined" !== typeof k.innerRadius && null !== k.innerRadius ? Ua(k.innerRadius, A2) : 0.7 * A2;
              k.radius = A2;
              "doughnut" === k.type && (k.innerRadius = B3);
              var H2 = Math.min(B3 / A2, (A2 - 1) / A2);
              this.pieDoughnutClickHandler = function(a2) {
                p2.isAnimating || !n(this.explodeOnClick) && !this.explodeOnClick || (a2 = a2.dataPoint, a2.exploded = a2.exploded ? false : true, 1 < this.dataPoints.length && p2._animator.animate(
                  0,
                  500,
                  function(a3) {
                    c(a3, true);
                    d2();
                    p2.dispatchEvent("dataAnimationIterationEnd", { chart: p2 });
                    p2.dispatchEvent("dataAnimationEnd", { chart: p2 });
                  }
                ));
              };
              g();
              m();
              m();
              m();
              m();
              this.disableToolTip = true;
              this._animator.animate(0, this.animatedRender ? this.animationDuration : 0, function(a2) {
                var b2 = p2.plotArea.ctx;
                b2.clearRect(r.x1, r.y1, r.width, r.height);
                b2.fillStyle = p2.backgroundColor;
                b2.fillRect(r.x1, r.y1, r.width, r.height);
                for (var b2 = f[0].startAngle + 2 * Math.PI * a2, c2 = 0; c2 < l.length; c2++) {
                  var g2 = 0 === c2 ? f[c2].startAngle : e2, e2 = g2 + (f[c2].endAngle - f[c2].startAngle), h2 = false;
                  e2 > b2 && (e2 = b2, h2 = true);
                  var m2 = l[c2].color ? l[c2].color : k._colorSet[c2 % k._colorSet.length];
                  e2 > g2 && ia2(p2.plotArea.ctx, f[c2].center, f[c2].radius, m2, k.type, g2, e2, k.fillOpacity, f[c2].percentInnerRadius);
                  if (h2)
                    break;
                }
                d2();
                p2.dispatchEvent("dataAnimationIterationEnd", { chart: p2 });
                1 <= a2 && p2.dispatchEvent("dataAnimationEnd", { chart: p2 });
              }, function() {
                p2.disableToolTip = false;
                p2._animator.animate(0, p2.animatedRender ? 500 : 0, function(a2) {
                  c(a2, false);
                  d2();
                  p2.dispatchEvent("dataAnimationIterationEnd", { chart: p2 });
                });
                p2.dispatchEvent("dataAnimationEnd", { chart: p2 });
              });
            }
          }
        };
        var qa2 = function(a, g, c, b) {
          "undefined" === typeof c && (c = 1);
          0 >= Math.round(g.y4 - g.y1) || (a.save(), a.globalAlpha = c, a.beginPath(), a.moveTo(Math.round(g.x1), Math.round(g.y1)), a.lineTo(Math.round(g.x2), Math.round(g.y2)), a.lineTo(Math.round(g.x3), Math.round(g.y3)), a.lineTo(Math.round(g.x4), Math.round(g.y4)), "undefined" !== g.x5 && (a.lineTo(Math.round(g.x5), Math.round(g.y5)), a.lineTo(Math.round(g.x6), Math.round(g.y6))), a.closePath(), a.fillStyle = b ? b : g.color, a.fill(), a.globalAplha = 1, a.restore());
        };
        p.prototype.renderFunnel = function(a) {
          function g() {
            for (var a2 = 0, b2 = [], c2 = 0; c2 < z.length; c2++) {
              if ("undefined" === typeof z[c2].y)
                return -1;
              z[c2].y = "number" === typeof z[c2].y ? z[c2].y : 0;
              a2 += Math.abs(z[c2].y);
            }
            if (0 === a2)
              return -1;
            for (c2 = b2[0] = 0; c2 < z.length; c2++)
              b2.push(Math.abs(z[c2].y) * H2 / a2);
            return b2;
          }
          function c() {
            var a2 = V3, b2 = Y2, c2 = O, g2 = $, f2, e2;
            f2 = Z;
            e2 = Q2 - P;
            g2 = Math.abs((e2 - f2) * (b2 - a2 + (g2 - c2)) / 2);
            c2 = $ - O;
            f2 = e2 - f2;
            e2 = c2 * (e2 - Q2);
            e2 = Math.abs(e2);
            e2 = g2 + e2;
            for (var g2 = [], h2 = 0, d3 = 0; d3 < z.length; d3++) {
              if ("undefined" === typeof z[d3].y)
                return -1;
              z[d3].y = "number" === typeof z[d3].y ? z[d3].y : 0;
              h2 += Math.abs(z[d3].y);
            }
            if (0 === h2)
              return -1;
            for (var m = g2[0] = 0, k2 = 0, l2, q2, b2 = b2 - a2, m = false, d3 = 0; d3 < z.length; d3++)
              a2 = Math.abs(z[d3].y) * e2 / h2, m ? l2 = 0 == Number(c2.toFixed(3)) ? 0 : a2 / c2 : (q2 = ca3 * ca3 * b2 * b2 - 4 * Math.abs(ca3) * a2, 0 > q2 ? (q2 = c2, m = (b2 + q2) * (f2 - k2) / 2, a2 -= m, l2 = f2 - k2, k2 += f2 - k2, l2 += 0 == q2 ? 0 : a2 / q2, k2 += a2 / q2, m = true) : (l2 = (Math.abs(ca3) * b2 - Math.sqrt(q2)) / 2, q2 = b2 - 2 * l2 / Math.abs(ca3), k2 += l2, k2 > f2 && (k2 -= l2, q2 = c2, m = (b2 + q2) * (f2 - k2) / 2, a2 -= m, l2 = f2 - k2, k2 += f2 - k2, l2 += a2 / q2, k2 += a2 / q2, m = true), b2 = q2)), g2.push(l2);
            return g2;
          }
          function b() {
            if (s && z) {
              for (var a2, b2, c2, g2, e2, h2, d3, m, k2, l2, q2, r2, p3, y, u2, w2, t4, I = [], A3 = [], B4 = { percent: null, total: null }, D2 = null, C2 = 0; C2 < z.length; C2++)
                t4 = R[C2], t4 = "undefined" !== typeof t4.x5 ? (t4.y2 + t4.y4) / 2 : (t4.y2 + t4.y3) / 2, t4 = f(t4).x2 + 1, I[C2] = N2 - t4 - U2;
              t4 = 0.5 * U2;
              for (var C2 = 0, E2 = z.length - 1; C2 < z.length || 0 <= E2; C2++, E2--) {
                b2 = s.reversed ? z[E2] : z[C2];
                a2 = b2.color ? b2.color : s.reversed ? s._colorSet[(z.length - 1 - C2) % s._colorSet.length] : s._colorSet[C2 % s._colorSet.length];
                c2 = b2.indexLabelPlacement || s.indexLabelPlacement || "outside";
                w2 = b2.indexLabelTextAlign || s.indexLabelTextAlign || "left";
                g2 = b2.indexLabelBackgroundColor || s.indexLabelBackgroundColor || (v ? "transparent" : null);
                e2 = b2.indexLabelBorderColor || s.indexLabelBorderColor || (v ? "transparent" : null);
                h2 = n(b2.indexLabelBorderThickness) ? s.indexLabelBorderThickness : b2.indexLabelBorderThickness;
                d3 = b2.indexLabelFontColor || s.indexLabelFontColor || "#979797";
                m = n(b2.indexLabelFontSize) ? s.indexLabelFontSize : b2.indexLabelFontSize;
                k2 = b2.indexLabelFontStyle || s.indexLabelFontStyle || "normal";
                l2 = b2.indexLabelFontFamily || s.indexLabelFontFamily || "arial";
                q2 = b2.indexLabelFontWeight || s.indexLabelFontWeight || "normal";
                a2 = b2.indexLabelLineColor || s.options.indexLabelLineColor || a2;
                r2 = "number" === typeof b2.indexLabelLineThickness ? b2.indexLabelLineThickness : "number" === typeof s.indexLabelLineThickness ? s.indexLabelLineThickness : 2;
                p3 = b2.indexLabelLineDashType || s.indexLabelLineDashType || "solid";
                y = "undefined" !== typeof b2.indexLabelWrap ? b2.indexLabelWrap : "undefined" !== typeof s.indexLabelWrap ? s.indexLabelWrap : true;
                u2 = s.dataPointIds[C2];
                x._eventManager.objectMap[u2] = { id: u2, objectType: "dataPoint", dataPointIndex: C2, dataSeriesIndex: 0, funnelSection: R[s.reversed ? z.length - 1 - C2 : C2] };
                "inside" === s.indexLabelPlacement && (I[C2] = C2 !== da3 ? s.reversed ? R[C2].x2 - R[C2].x1 : R[C2].x3 - R[C2].x4 : R[C2].x3 - R[C2].x6, 20 > I[C2] && (I[C2] = C2 !== da3 ? s.reversed ? R[C2].x3 - R[C2].x4 : R[C2].x2 - R[C2].x1 : R[C2].x2 - R[C2].x1, I[C2] /= 2));
                u2 = b2.indexLabelMaxWidth ? b2.indexLabelMaxWidth : s.options.indexLabelMaxWidth ? s.indexLabelMaxWidth : I[C2];
                if (u2 > I[C2] || 0 > u2)
                  u2 = I[C2];
                A3[C2] = "inside" === s.indexLabelPlacement ? y ? Math.max(R[C2].height, m) : 1.5 * m : false;
                B4 = x.getPercentAndTotal(s, b2);
                if (s.indexLabelFormatter || b2.indexLabelFormatter)
                  D2 = { chart: x.options, dataSeries: s, dataPoint: b2, total: B4.total, percent: B4.percent };
                b2 = b2.indexLabelFormatter ? b2.indexLabelFormatter(D2) : b2.indexLabel ? x.replaceKeywordsWithValue(b2.indexLabel, b2, s, C2) : s.indexLabelFormatter ? s.indexLabelFormatter(D2) : s.indexLabel ? x.replaceKeywordsWithValue(s.indexLabel, b2, s, C2) : b2.label ? b2.label : "";
                0 >= r2 && (r2 = 0);
                1e3 > u2 && 1e3 - u2 < t4 && (u2 += 1e3 - u2);
                n(s.options.indexLabelMaxWidth) && (s.indexLabelMaxWidth = n(s.indexLabelMaxWidth) ? u2 : Math.max(u2, s.indexLabelMaxWidth));
                S3.roundRect || za(S3);
                c2 = new ja(S3, {
                  fontSize: m,
                  fontFamily: l2,
                  fontColor: d3,
                  fontStyle: k2,
                  fontWeight: q2,
                  horizontalAlign: c2,
                  textAlign: w2,
                  backgroundColor: g2,
                  borderColor: e2,
                  borderThickness: h2,
                  maxWidth: u2,
                  maxHeight: false === A3[C2] ? y ? 4.28571429 * m : 1.5 * m : A3[C2],
                  text: b2,
                  padding: ea3,
                  textBaseline: "middle"
                });
                c2.measureText();
                c2.height = c2.height === 2 * c2.padding ? 0 : c2.height;
                c2.width = c2.width === 2 * c2.padding ? 0 : c2.width;
                F.push({ textBlock: c2, id: s.reversed ? E2 : C2, isDirty: false, lineColor: a2, lineThickness: r2, lineDashType: p3, height: c2.height < c2.maxHeight ? c2.height : c2.maxHeight, width: c2.width < c2.maxWidth ? c2.width : c2.maxWidth });
              }
            }
          }
          function e() {
            var a2, b2, c2, g2, f2, e2 = [];
            f2 = false;
            c2 = 0;
            for (var h2, d3 = N2 - Y2 - U2 / 2, d3 = s.options.indexLabelMaxWidth ? s.indexLabelMaxWidth > d3 ? d3 : s.indexLabelMaxWidth : d3, m = F.length - 1; 0 <= m; m--) {
              h2 = z[F[m].id];
              c2 = F[m];
              g2 = c2.textBlock;
              b2 = (a2 = r(m) < R.length ? F[r(m)] : null) ? a2.textBlock : null;
              c2 = c2.height;
              a2 && g2.y + c2 + ea3 > b2.y && (f2 = true);
              c2 = h2.indexLabelMaxWidth || d3;
              if (c2 > d3 || 0 > c2)
                c2 = d3;
              e2.push(c2);
            }
            if (f2)
              for (m = F.length - 1; 0 <= m; m--)
                a2 = R[m], F[m].textBlock.maxWidth = e2[e2.length - (m + 1)], F[m].textBlock.measureText(), F[m].textBlock.height = F[m].textBlock.height === 2 * F[m].textBlock.padding ? 0 : F[m].textBlock.height, F[m].textBlock.width = F[m].textBlock.width === 2 * F[m].textBlock.padding ? 0 : F[m].textBlock.width, F[m].textBlock.x = N2 - d3, c2 = F[m].textBlock.height < F[m].textBlock.maxHeight ? F[m].textBlock.height : F[m].textBlock.maxHeight, f2 = F[m].textBlock.width < F[m].textBlock.maxWidth ? F[m].textBlock.width : F[m].textBlock.maxWidth, F[m].height = c2, F[m].width = f2, c2 = "undefined" !== typeof a2.x5 ? (a2.y2 + a2.y4) / 2 : (a2.y2 + a2.y3) / 2, F[m].textBlock.y = c2 - F[m].height / 2, s.reversed ? (F[m].textBlock.y + F[m].height > T + B3 && (F[m].textBlock.y = T + B3 - F[m].height), F[m].textBlock.y < sa - B3 && (F[m].textBlock.y = sa - B3)) : (F[m].textBlock.y < T - B3 && (F[m].textBlock.y = T - B3), F[m].textBlock.y + F[m].height > sa + B3 && (F[m].textBlock.y = sa + B3 - F[m].height));
          }
          function h() {
            var a2, b2, c2, g2;
            if ("inside" !== s.indexLabelPlacement)
              for (var e2 = 0; e2 < R.length; e2++)
                0 == F[e2].textBlock.text.length ? F[e2].isDirty = true : (a2 = R[e2], c2 = "undefined" !== typeof a2.x5 ? (a2.y2 + a2.y4) / 2 : (a2.y2 + a2.y3) / 2, b2 = s.reversed ? "undefined" !== typeof a2.x5 ? c2 > X2 ? f(c2).x2 + 1 : (a2.x2 + a2.x3) / 2 + 1 : (a2.x2 + a2.x3) / 2 + 1 : "undefined" !== typeof a2.x5 ? c2 < X2 ? f(c2).x2 + 1 : (a2.x4 + a2.x3) / 2 + 1 : (a2.x2 + a2.x3) / 2 + 1, F[e2].textBlock.x = b2 + U2, F[e2].textBlock.y = c2 - F[e2].height / 2, s.reversed ? (F[e2].textBlock.y + F[e2].height > T + B3 && (F[e2].textBlock.y = T + B3 - F[e2].height), F[e2].textBlock.y < sa - B3 && (F[e2].textBlock.y = sa - B3)) : (F[e2].textBlock.y < T - B3 && (F[e2].textBlock.y = T - B3), F[e2].textBlock.y + F[e2].height > sa + B3 && (F[e2].textBlock.y = sa + B3 - F[e2].height)));
            else
              for (e2 = 0; e2 < R.length; e2++)
                0 == F[e2].textBlock.text.length ? F[e2].isDirty = true : (a2 = R[e2], b2 = a2.height, c2 = F[e2].height, g2 = F[e2].width, b2 >= c2 ? (b2 = e2 != da3 ? (a2.x4 + a2.x3) / 2 - g2 / 2 : (a2.x5 + a2.x4) / 2 - g2 / 2, c2 = e2 != da3 ? (a2.y1 + a2.y3) / 2 - c2 / 2 : (a2.y1 + a2.y4) / 2 - c2 / 2, F[e2].textBlock.x = b2, F[e2].textBlock.y = c2) : F[e2].isDirty = true);
          }
          function d2() {
            function a2(b3, c3) {
              var g3;
              if (0 > b3 || b3 >= F.length)
                return 0;
              var e3, f3 = F[b3].textBlock;
              if (0 > c3) {
                c3 *= -1;
                e3 = q(b3);
                g3 = p2(e3, b3);
                if (g3 >= c3)
                  return f3.y -= c3, c3;
                if (0 == b3)
                  return 0 < g3 && (f3.y -= g3), g3;
                g3 += a2(e3, -(c3 - g3));
                0 < g3 && (f3.y -= g3);
                return g3;
              }
              e3 = r(b3);
              g3 = p2(b3, e3);
              if (g3 >= c3)
                return f3.y += c3, c3;
              if (b3 == R.length - 1)
                return 0 < g3 && (f3.y += g3), g3;
              g3 += a2(e3, c3 - g3);
              0 < g3 && (f3.y += g3);
              return g3;
            }
            function b2() {
              var a3, g3, e3, f3, h3 = 0, d3;
              f3 = (Q2 - Z + 2 * B3) / l2;
              d3 = l2;
              for (var m2, k3 = 1; k3 < d3; k3++) {
                e3 = k3 * f3;
                for (var n3 = F.length - 1; 0 <= n3; n3--)
                  !F[n3].isDirty && (F[n3].textBlock.y < e3 && F[n3].textBlock.y + F[n3].height > e3) && (m2 = r(n3), !(m2 >= F.length - 1) && F[n3].textBlock.y + F[n3].height + ea3 > F[m2].textBlock.y && (F[n3].textBlock.y = F[n3].textBlock.y + F[n3].height - e3 > e3 - F[n3].textBlock.y ? e3 + 1 : e3 - F[n3].height - 1));
              }
              for (m2 = R.length - 1; 0 < m2; m2--)
                if (!F[m2].isDirty) {
                  e3 = q(m2);
                  if (0 > e3 && (e3 = 0, F[e3].isDirty))
                    break;
                  if (F[m2].textBlock.y < F[e3].textBlock.y + F[e3].height) {
                    g3 = g3 || m2;
                    f3 = m2;
                    for (d3 = 0; F[f3].textBlock.y < F[e3].textBlock.y + F[e3].height + ea3; ) {
                      a3 = a3 || F[f3].textBlock.y + F[f3].height;
                      d3 += F[f3].height;
                      d3 += ea3;
                      f3 = e3;
                      if (0 >= f3) {
                        f3 = 0;
                        d3 += F[f3].height;
                        break;
                      }
                      e3 = q(f3);
                      if (0 > e3) {
                        f3 = 0;
                        d3 += F[f3].height;
                        break;
                      }
                    }
                    if (f3 != m2) {
                      h3 = F[f3].textBlock.y;
                      a3 -= h3;
                      a3 = d3 - a3;
                      h3 = c2(a3, g3, f3);
                      break;
                    }
                  }
                }
              return h3;
            }
            function c2(a3, b3, g3) {
              var e3 = [], f3 = 0, h3 = 0;
              for (a3 = Math.abs(a3); g3 <= b3; g3++)
                e3.push(R[g3]);
              e3.sort(function(a4, b4) {
                return a4.height - b4.height;
              });
              for (g3 = 0; g3 < e3.length; g3++)
                if (b3 = e3[g3], f3 < a3)
                  h3++, f3 += F[b3.id].height + ea3, F[b3.id].textBlock.text = "", F[b3.id].indexLabelText = "", F[b3.id].isDirty = true, F[b3.id].textBlock.measureText();
                else
                  break;
              return h3;
            }
            for (var g2, e2, f2, h2, m, k2, l2 = 1, n2 = 0; n2 < 2 * l2; n2++) {
              for (var s2 = F.length - 1; 0 <= s2 && !(0 <= q(s2) && q(s2), f2 = F[s2], h2 = f2.textBlock, k2 = (m = r(s2) < R.length ? F[r(s2)] : null) ? m.textBlock : null, g2 = +f2.height.toFixed(6), e2 = +h2.y.toFixed(6), !f2.isDirty && (m && e2 + g2 + ea3 > +k2.y.toFixed(6)) && (g2 = h2.y + g2 + ea3 - k2.y, e2 = a2(s2, -g2), e2 < g2 && (0 < e2 && (g2 -= e2), e2 = a2(r(s2), g2), e2 != g2))); s2--)
                ;
              b2();
            }
          }
          function p2(a2, b2) {
            return (b2 < R.length ? F[b2].textBlock.y : s.reversed ? T + B3 : sa + B3) - (0 > a2 ? s.reversed ? sa - B3 : T - B3 : F[a2].textBlock.y + F[a2].height + ea3);
          }
          function t3(a2, b2, c2) {
            var g2, e2, f2, d3 = [], m = B3, q2 = [];
            -1 !== b2 && (0 <= W3.indexOf(b2) ? (e2 = W3.indexOf(b2), W3.splice(e2, 1)) : (W3.push(b2), W3 = W3.sort(function(a3, b3) {
              return a3 - b3;
            })));
            if (0 === W3.length)
              d3 = ia3;
            else {
              e2 = B3 * (1 != W3.length || 0 != W3[0] && W3[0] != R.length - 1 ? 2 : 1) / k();
              for (var r2 = 0; r2 < R.length; r2++) {
                if (1 == W3.length && 0 == W3[0]) {
                  if (0 === r2) {
                    d3.push(ia3[r2]);
                    g2 = m;
                    continue;
                  }
                } else
                  0 === r2 && (g2 = -1 * m);
                d3.push(ia3[r2] + g2);
                if (0 <= W3.indexOf(r2) || r2 < R.length && 0 <= W3.indexOf(r2 + 1))
                  g2 += e2;
              }
            }
            f2 = function() {
              for (var a3 = [], b3 = 0; b3 < R.length; b3++)
                a3.push(d3[b3] - R[b3].y1);
              return a3;
            }();
            var n2 = { startTime: (/* @__PURE__ */ new Date()).getTime(), duration: c2 || 500, easingFunction: function(a3, b3, c3, g3) {
              return L.easing.easeOutQuart(a3, b3, c3, g3);
            }, changeSection: function(a3) {
              for (var b3, c3, g3 = 0; g3 < R.length; g3++)
                b3 = f2[g3], c3 = R[g3], b3 *= a3, "undefined" === typeof q2[g3] && (q2[g3] = 0), 0 > q2 && (q2 *= -1), c3.y1 += b3 - q2[g3], c3.y2 += b3 - q2[g3], c3.y3 += b3 - q2[g3], c3.y4 += b3 - q2[g3], c3.y5 && (c3.y5 += b3 - q2[g3], c3.y6 += b3 - q2[g3]), q2[g3] = b3;
            } };
            a2._animator.animate(0, c2, function(c3) {
              var g3 = a2.plotArea.ctx || a2.ctx;
              ha3 = true;
              g3.clearRect(u.x1, u.y1, u.x2 - u.x1, u.y2 - u.y1);
              g3.fillStyle = a2.backgroundColor;
              g3.fillRect(u.x1, u.y1, u.width, u.height);
              n2.changeSection(c3, b2);
              var e3 = {};
              e3.dataSeries = s;
              e3.dataPoint = s.reversed ? s.dataPoints[z.length - 1 - b2] : s.dataPoints[b2];
              e3.index = s.reversed ? z.length - 1 - b2 : b2;
              a2.toolTip.highlightObjects([e3]);
              for (e3 = 0; e3 < R.length; e3++)
                qa2(
                  g3,
                  R[e3],
                  s.fillOpacity
                );
              w(g3);
              J && ("inside" !== s.indexLabelPlacement ? l(g3) : h(), A2(g3));
              1 <= c3 && (ha3 = false);
            }, null, L.easing.easeOutQuart);
          }
          function k() {
            for (var a2 = 0, b2 = 0; b2 < R.length - 1; b2++)
              (0 <= W3.indexOf(b2) || 0 <= W3.indexOf(b2 + 1)) && a2++;
            return a2;
          }
          function l(a2) {
            for (var b2, c2, g2, e2, h2 = 0; h2 < R.length; h2++)
              e2 = 1 === F[h2].lineThickness % 2 ? 0.5 : 0, c2 = ((R[h2].y2 + R[h2].y4) / 2 << 0) + e2, b2 = f(c2).x2 - 1, g2 = F[h2].textBlock.x, e2 = (F[h2].textBlock.y + F[h2].height / 2 << 0) + e2, F[h2].isDirty || 0 == F[h2].lineThickness || (a2.strokeStyle = F[h2].lineColor, a2.lineWidth = F[h2].lineThickness, a2.setLineDash && a2.setLineDash(G(F[h2].lineDashType, F[h2].lineThickness)), a2.beginPath(), a2.moveTo(b2, c2), a2.lineTo(g2, e2), a2.stroke());
          }
          function q(a2) {
            for (a2 -= 1; -1 <= a2 && -1 != a2 && F[a2].isDirty; a2--)
              ;
            return a2;
          }
          function r(a2) {
            for (a2 += 1; a2 <= R.length && a2 != R.length && F[a2].isDirty; a2++)
              ;
            return a2;
          }
          function f(a2) {
            for (var b2, c2 = 0; c2 < z.length; c2++)
              if (R[c2].y1 < a2 && R[c2].y4 > a2) {
                b2 = R[c2];
                break;
              }
            return b2 ? (a2 = b2.y6 ? a2 > b2.y6 ? b2.x3 + (b2.x4 - b2.x3) / (b2.y4 - b2.y3) * (a2 - b2.y3) : b2.x2 + (b2.x3 - b2.x2) / (b2.y3 - b2.y2) * (a2 - b2.y2) : b2.x2 + (b2.x3 - b2.x2) / (b2.y3 - b2.y2) * (a2 - b2.y2), { x1: a2, x2: a2 }) : -1;
          }
          function A2(a2) {
            for (var b2 = 0; b2 < R.length; b2++)
              F[b2].isDirty || (a2 && (F[b2].textBlock.ctx = a2), F[b2].textBlock.y += F[b2].textBlock._lineHeight / 2, F[b2].textBlock.render(true), F[b2].textBlock.y -= F[b2].textBlock._lineHeight / 2);
          }
          function w(a2) {
            x.plotArea.layoutManager.reset();
            a2.roundRect || za(a2);
            x.title && (x.title.dockInsidePlotArea || "center" === x.title.horizontalAlign && "center" === x.title.verticalAlign) && (x.title.ctx = a2, x.title.render());
            if (x.subtitles)
              for (var b2 = 0; b2 < x.subtitles.length; b2++) {
                var c2 = x.subtitles[b2];
                if (c2.dockInsidePlotArea || "center" === c2.horizontalAlign && "center" === c2.verticalAlign)
                  x.subtitles.ctx = a2, c2.render();
              }
            x.legend && (x.legend.dockInsidePlotArea || "center" === x.legend.horizontalAlign && "center" === x.legend.verticalAlign) && (x.legend.ctx = a2, x.legend.setLayout(), x.legend.render());
            va.fNg && va.fNg(x);
          }
          var x = this;
          if (!(0 >= a.dataSeriesIndexes.length)) {
            for (var s = this.data[a.dataSeriesIndexes[0]], z = s.dataPoints, u = this.plotArea, B3 = 0.025 * u.width, D = 0.01 * u.width, C = 0, H2 = u.height - 2 * B3, M2 = Math.min(u.width - 2 * D, 2.8 * u.height), J = false, K = 0; K < z.length; K++)
              if (!J && ("undefined" !== typeof z[K].indexLabel && null !== z[K].indexLabel && 0 < z[K].indexLabel.toString().length) && (J = true), !J && ("undefined" !== typeof z[K].label && null !== z[K].label && 0 < z[K].label.toString().length) && (J = true), !J && "function" === typeof s.indexLabelFormatter || "function" === typeof z[K].indexLabelFormatter)
                J = true;
            J = J || "undefined" !== typeof s.indexLabel && null !== s.indexLabel && 0 < s.indexLabel.toString().length;
            "inside" !== s.indexLabelPlacement && J || (D = (u.width - 0.75 * M2) / 2);
            var K = u.x1 + D, N2 = u.x2 - D, Z = u.y1 + B3, Q2 = u.y2 - B3, S3 = a.targetCanvasCtx || this.plotArea.ctx || this.ctx;
            if (0 != s.length && (s.dataPoints && s.visible) && 0 !== z.length) {
              var P, E;
              a = 75 * M2 / 100;
              var U2 = 30 * (N2 - a) / 100;
              "funnel" === s.type ? (P = n(s.options.neckHeight) ? 0.35 * H2 : s.neckHeight, E = n(s.options.neckWidth) ? 0.25 * a : s.neckWidth, "string" === typeof P && P.match(/%$/) ? (P = parseInt(P), P = P * H2 / 100) : P = parseInt(P), "string" === typeof E && E.match(/%$/) ? (E = parseInt(E), E = E * a / 100) : E = parseInt(E), P > H2 ? P = H2 : 0 >= P && (P = 0), E > a ? E = a - 0.5 : 0 >= E && (E = 0)) : "pyramid" === s.type && (E = P = 0, s.reversed = s.reversed ? false : true);
              var D = K + a / 2, V3 = K, Y2 = K + a, T = s.reversed ? Q2 : Z, O = D - E / 2, $ = D + E / 2, X2 = s.reversed ? Z + P : Q2 - P, sa = s.reversed ? Z : Q2;
              E = s.valueRepresents = s.valueRepresents ? s.valueRepresents : "height";
              K = [];
              a = [];
              var R = [], D = [], ba2 = Z, da3, ca3 = (X2 - T) / (O - V3), fa2 = -ca3, M2 = "area" === E ? c() : g();
              if (-1 !== M2) {
                if (s.reversed)
                  for (D.push(ba2), E = M2.length - 1; 0 < E; E--)
                    ba2 += M2[E], D.push(ba2);
                else
                  for (E = 0; E < M2.length; E++)
                    ba2 += M2[E], D.push(ba2);
                if (s.reversed)
                  for (E = 0; E < M2.length; E++)
                    D[E] < X2 ? (K.push(O), a.push($), da3 = E) : (K.push((D[E] - T + ca3 * V3) / ca3), a.push((D[E] - T + fa2 * Y2) / fa2));
                else
                  for (E = 0; E < M2.length; E++)
                    D[E] < X2 ? (K.push((D[E] - T + ca3 * V3) / ca3), a.push((D[E] - T + fa2 * Y2) / fa2), da3 = E) : (K.push(O), a.push($));
                for (E = 0; E < M2.length - 1; E++)
                  ba2 = s.reversed ? z[z.length - 1 - E].color ? z[z.length - 1 - E].color : s._colorSet[(z.length - 1 - E) % s._colorSet.length] : z[E].color ? z[E].color : s._colorSet[E % s._colorSet.length], E === da3 ? R.push({ x1: K[E], y1: D[E], x2: a[E], y2: D[E], x3: $, y3: X2, x4: a[E + 1], y4: D[E + 1], x5: K[E + 1], y5: D[E + 1], x6: O, y6: X2, id: E, height: D[E + 1] - D[E], color: ba2 }) : R.push({ x1: K[E], y1: D[E], x2: a[E], y2: D[E], x3: a[E + 1], y3: D[E + 1], x4: K[E + 1], y4: D[E + 1], id: E, height: D[E + 1] - D[E], color: ba2 });
                var ea3 = 2, F = [], ha3 = false, W3 = [], ia3 = [], K = false;
                a = a = 0;
                Da(W3);
                for (E = 0; E < z.length; E++)
                  z[E].exploded && (K = true, s.reversed ? W3.push(z.length - 1 - E) : W3.push(E));
                S3.clearRect(u.x1, u.y1, u.width, u.height);
                S3.fillStyle = x.backgroundColor;
                S3.fillRect(u.x1, u.y1, u.width, u.height);
                if (J && s.visible && (b(), h(), "inside" !== s.indexLabelPlacement)) {
                  e();
                  d2();
                  for (E = 0; E < z.length; E++)
                    F[E].isDirty || (a = F[E].textBlock.x + F[E].width, a = (N2 - a) / 2, 0 == E && (C = a), C > a && (C = a));
                  for (E = 0; E < R.length; E++)
                    R[E].x1 += C, R[E].x2 += C, R[E].x3 += C, R[E].x4 += C, R[E].x5 && (R[E].x5 += C, R[E].x6 += C), F[E].textBlock.x += C;
                }
                for (E = 0; E < R.length; E++)
                  C = R[E], qa2(S3, C, s.fillOpacity), ia3.push(C.y1);
                w(S3);
                J && s.visible && ("inside" === s.indexLabelPlacement || x.animationEnabled || l(S3), x.animationEnabled || A2());
                if (!J)
                  for (E = 0; E < z.length; E++)
                    C = s.dataPointIds[E], a = { id: C, objectType: "dataPoint", dataPointIndex: E, dataSeriesIndex: 0, funnelSection: R[s.reversed ? z.length - 1 - E : E] }, x._eventManager.objectMap[C] = a;
                !x.animationEnabled && K ? t3(x, -1, 0) : x.animationEnabled && !x.animatedRender && t3(x, -1, 0);
                this.funnelPyramidClickHandler = function(a2) {
                  var b2 = -1;
                  if (!ha3 && !x.isAnimating && (n(a2.dataSeries.explodeOnClick) || a2.dataSeries.explodeOnClick) && (b2 = s.reversed ? z.length - 1 - a2.dataPointIndex : a2.dataPointIndex, 0 <= b2)) {
                    a2 = b2;
                    if ("funnel" === s.type || "pyramid" === s.type)
                      s.reversed ? z[z.length - 1 - a2].exploded = z[z.length - 1 - a2].exploded ? false : true : z[a2].exploded = z[a2].exploded ? false : true;
                    t3(x, b2, 500);
                  }
                };
                return { source: S3, dest: this.plotArea.ctx, animationCallback: function(a2, b2) {
                  L.fadeInAnimation(a2, b2);
                  1 <= a2 && (t3(x, -1, 500), w(x.plotArea.ctx || x.ctx));
                }, easingFunction: L.easing.easeInQuad, animationBase: 0 };
              }
            }
          }
        };
        p.prototype.requestAnimFrame = function() {
          return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(a) {
            window.setTimeout(a, 1e3 / 60);
          };
        }();
        p.prototype.cancelRequestAnimFrame = window.cancelAnimationFrame || window.webkitCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || clearTimeout;
        p.prototype.set = function(a, g, c) {
          c = "undefined" === typeof c ? true : c;
          "options" === a ? (this.options = g, c && this.render()) : p.base.set.call(this, a, g, c);
        };
        p.prototype.exportChart = function(a) {
          a = "undefined" === typeof a ? {} : a;
          var g = a.format ? a.format : "png", c = a.fileName ? a.fileName : this.exportFileName;
          if (a.toDataURL)
            return this.canvas.toDataURL("image/" + g);
          var b = this.canvas;
          if (b && g && c) {
            c = c + "." + g;
            a = "image/" + g;
            var b = b.toDataURL(a), e = false, h = document.createElement("a");
            h.download = c;
            h.href = b;
            if ("undefined" !== typeof Blob && new Blob()) {
              for (var d2 = b.replace(
                /^data:[a-z\/]*;base64,/,
                ""
              ), d2 = atob(d2), n2 = new ArrayBuffer(d2.length), n2 = new Uint8Array(n2), p2 = 0; p2 < d2.length; p2++)
                n2[p2] = d2.charCodeAt(p2);
              g = new Blob([n2.buffer], { type: "image/" + g });
              try {
                window.navigator.msSaveBlob(g, c), e = true;
              } catch (k) {
                h.dataset.downloadurl = [a, h.download, h.href].join(":"), h.href = window.URL.createObjectURL(g);
              }
            }
            if (!e)
              try {
                event = document.createEvent("MouseEvents"), event.initMouseEvent("click", true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null), h.dispatchEvent ? h.dispatchEvent(event) : h.fireEvent && h.fireEvent("onclick");
              } catch (l) {
                g = window.open(), g.document.write("<img src='" + b + "'></img><div>Please right click on the image and save it to your device</div>"), g.document.close();
              }
          }
        };
        p.prototype.print = function() {
          var a = this.exportChart({ toDataURL: true }), g = document.createElement("iframe");
          g.setAttribute("class", "canvasjs-chart-print-frame");
          Q(g, { position: "absolute", width: "100%", border: "0px", margin: "0px 0px 0px 0px", padding: "0px 0px 0px 0px" });
          g.style.height = this.height + "px";
          this._canvasJSContainer.appendChild(g);
          var c = this, b = g.contentWindow || g.contentDocument.document || g.contentDocument;
          b.document.open();
          b.document.write('<!DOCTYPE HTML>\n<html><body><img src="' + a + '"/><body/></html>');
          b.document.body && b.document.body.style && (b.document.body.style.margin = "0px 0px 0px 0px", b.document.body.style.padding = "0px 0px 0px 0px");
          b.document.close();
          setTimeout(function() {
            b.focus();
            b.print();
            setTimeout(function() {
              c._canvasJSContainer.removeChild(g);
            }, 1e3);
          }, 500);
        };
        p.prototype.getPercentAndTotal = function(a, g) {
          var c = null, b = null, e = c = null;
          if (0 <= a.type.indexOf("stacked"))
            b = 0, c = g.x.getTime ? g.x.getTime() : g.x, c in a.plotUnit.yTotals && (b = a.plotUnit.yTotals[c], c = a.plotUnit.yAbsTotals[c], e = isNaN(g.y) ? 0 : 0 === c ? 0 : 100 * (g.y / c));
          else if ("pie" === a.type || "doughnut" === a.type || "funnel" === a.type || "pyramid" === a.type) {
            for (c = b = 0; c < a.dataPoints.length; c++)
              isNaN(a.dataPoints[c].y) || (b += a.dataPoints[c].y);
            e = isNaN(g.y) ? 0 : 100 * (g.y / b);
          }
          return { percent: e, total: b };
        };
        p.prototype.replaceKeywordsWithValue = function(a, g, c, b, e) {
          var h = this;
          e = "undefined" === typeof e ? 0 : e;
          if ((0 <= c.type.indexOf("stacked") || "pie" === c.type || "doughnut" === c.type || "funnel" === c.type || "pyramid" === c.type) && (0 <= a.indexOf("#percent") || 0 <= a.indexOf("#total"))) {
            var d2 = "#percent", n2 = "#total", p2 = this.getPercentAndTotal(c, g), n2 = isNaN(p2.total) ? n2 : p2.total, d2 = isNaN(p2.percent) ? d2 : p2.percent;
            do {
              p2 = "";
              if (c.percentFormatString)
                p2 = c.percentFormatString;
              else {
                var p2 = "#,##0.", k = Math.max(Math.ceil(Math.log(1 / Math.abs(d2)) / Math.LN10), 2);
                if (isNaN(k) || !isFinite(k))
                  k = 2;
                for (var l = 0; l < k; l++)
                  p2 += "#";
                c.percentFormatString = p2;
              }
              a = a.replace("#percent", fa(d2, p2, h._cultureInfo));
              a = a.replace(
                "#total",
                fa(n2, c.yValueFormatString ? c.yValueFormatString : "#,##0.########", h._cultureInfo)
              );
            } while (0 <= a.indexOf("#percent") || 0 <= a.indexOf("#total"));
          }
          return a.replace(/\{.*?\}|"[^"]*"|'[^']*'/g, function(a2) {
            if ('"' === a2[0] && '"' === a2[a2.length - 1] || "'" === a2[0] && "'" === a2[a2.length - 1])
              return a2.slice(1, a2.length - 1);
            a2 = Ga(a2.slice(1, a2.length - 1));
            a2 = a2.replace("#index", e);
            var d3 = null;
            try {
              var f = a2.match(/(.*?)\s*\[\s*(.*?)\s*\]/);
              f && 0 < f.length && (d3 = Ga(f[2]), a2 = Ga(f[1]));
            } catch (m) {
            }
            f = null;
            if ("color" === a2)
              return "waterfall" === c.type ? g.color ? g.color : 0 < g.y ? c.risingColor : c.fallingColor : "error" === c.type ? c.color ? c.color : c._colorSet[d3 % c._colorSet.length] : g.color ? g.color : c.color ? c.color : c._colorSet[b % c._colorSet.length];
            if (g.hasOwnProperty(a2))
              f = g;
            else if (c.hasOwnProperty(a2))
              f = c;
            else
              return "";
            f = f[a2];
            null !== d3 && (f = f[d3]);
            return "x" === a2 ? (c.axisX && "dateTime" === c.axisX.valueType || "dateTime" === c.xValueType || g.x && g.x.getTime) && !c.axisX.logarithmic ? Ca(f, g.xValueFormatString ? g.xValueFormatString : c.xValueFormatString ? c.xValueFormatString : c.xValueFormatString = h.axisX && h.axisX.autoValueFormatString ? h.axisX.autoValueFormatString : "DD MMM YY", h._cultureInfo) : fa(f, g.xValueFormatString ? g.xValueFormatString : c.xValueFormatString ? c.xValueFormatString : c.xValueFormatString = "#,##0.########", h._cultureInfo) : "y" === a2 ? fa(f, g.yValueFormatString ? g.yValueFormatString : c.yValueFormatString ? c.yValueFormatString : c.yValueFormatString = "#,##0.########", h._cultureInfo) : "z" === a2 ? fa(f, g.zValueFormatString ? g.zValueFormatString : c.zValueFormatString ? c.zValueFormatString : c.zValueFormatString = "#,##0.########", h._cultureInfo) : f;
          });
        };
        pa(S2, Y);
        S2.prototype.setLayout = function() {
          var a = this.dockInsidePlotArea ? this.chart.plotArea : this.chart, g = a.layoutManager.getFreeSpace(), c = null, b = 0, e = 0, h = 0, d2 = 0, p2 = this.markerMargin = this.chart.options.legend && !n(this.chart.options.legend.markerMargin) ? this.chart.options.legend.markerMargin : 0.3 * this.fontSize;
          this.height = 0;
          var v2 = [], k = [];
          if ("top" === this.verticalAlign || "bottom" === this.verticalAlign)
            this.orientation = "horizontal", c = this.verticalAlign, h = this.maxWidth = null !== this.maxWidth ? this.maxWidth : g.width, d2 = this.maxHeight = null !== this.maxHeight ? this.maxHeight : 0.5 * g.height;
          else if ("center" === this.verticalAlign) {
            this.orientation = "vertical";
            if ("left" === this.horizontalAlign || "center" === this.horizontalAlign || "right" === this.horizontalAlign)
              c = this.horizontalAlign;
            h = this.maxWidth = null !== this.maxWidth ? this.maxWidth : 0.5 * g.width;
            d2 = this.maxHeight = null !== this.maxHeight ? this.maxHeight : g.height;
          }
          this.errorMarkerColor = [];
          for (var l = 0; l < this.dataSeries.length; l++) {
            var q = this.dataSeries[l];
            if (q.dataPoints && q.dataPoints.length) {
              if ("pie" !== q.type && "doughnut" !== q.type && "funnel" !== q.type && "pyramid" !== q.type) {
                var r = q.legendMarkerType = q.legendMarkerType ? q.legendMarkerType : "line" !== q.type && "stepLine" !== q.type && "spline" !== q.type && "scatter" !== q.type && "bubble" !== q.type || !q.markerType ? "error" === q.type && q._linkedSeries ? q._linkedSeries.legendMarkerType ? q._linkedSeries.legendMarkerType : V2.getDefaultLegendMarker(q._linkedSeries.type) : V2.getDefaultLegendMarker(q.type) : q.markerType, f = q.legendText ? q.legendText : this.itemTextFormatter ? this.itemTextFormatter({ chart: this.chart, legend: this.options, dataSeries: q, dataPoint: null }) : q.name, t3 = q.legendMarkerColor = q.legendMarkerColor ? q.legendMarkerColor : q.markerColor ? q.markerColor : "error" === q.type ? n(q.whiskerColor) ? q._colorSet[0] : q.whiskerColor : q._colorSet[0], w = q.markerSize || "line" !== q.type && "stepLine" !== q.type && "spline" !== q.type ? 0.75 * this.lineHeight : 0, x = q.legendMarkerBorderColor ? q.legendMarkerBorderColor : q.markerBorderColor, s = q.legendMarkerBorderThickness ? q.legendMarkerBorderThickness : q.markerBorderThickness ? Math.max(1, Math.round(0.2 * w)) : 0;
                "error" === q.type && this.errorMarkerColor.push(t3);
                f = q.legendText = this.chart.replaceKeywordsWithValue(f, q.dataPoints[0], q, l);
                r = { markerType: r, markerColor: t3, text: f, textBlock: null, chartType: q.type, markerSize: w, lineColor: q._colorSet[0], dataSeriesIndex: q.index, dataPointIndex: null, markerBorderColor: x, markerBorderThickness: s };
                v2.push(r);
              } else
                for (var z = 0; z < q.dataPoints.length; z++) {
                  var u = q.dataPoints[z], r = u.legendMarkerType ? u.legendMarkerType : q.legendMarkerType ? q.legendMarkerType : V2.getDefaultLegendMarker(q.type), f = u.legendText ? u.legendText : q.legendText ? q.legendText : this.itemTextFormatter ? this.itemTextFormatter({ chart: this.chart, legend: this.options, dataSeries: q, dataPoint: u }) : u.name ? u.name : "DataPoint: " + (z + 1), t3 = u.legendMarkerColor ? u.legendMarkerColor : q.legendMarkerColor ? q.legendMarkerColor : u.color ? u.color : q.color ? q.color : q._colorSet[z % q._colorSet.length], w = 0.75 * this.lineHeight, x = u.legendMarkerBorderColor ? u.legendMarkerBorderColor : q.legendMarkerBorderColor ? q.legendMarkerBorderColor : u.markerBorderColor ? u.markerBorderColor : q.markerBorderColor, s = u.legendMarkerBorderThickness ? u.legendMarkerBorderThickness : q.legendMarkerBorderThickness ? q.legendMarkerBorderThickness : u.markerBorderThickness || q.markerBorderThickness ? Math.max(1, Math.round(0.2 * w)) : 0, f = this.chart.replaceKeywordsWithValue(f, u, q, z), r = { markerType: r, markerColor: t3, text: f, textBlock: null, chartType: q.type, markerSize: w, dataSeriesIndex: l, dataPointIndex: z, markerBorderColor: x, markerBorderThickness: s };
                  (u.showInLegend || q.showInLegend && false !== u.showInLegend) && v2.push(r);
                }
              n(q.legendText) && (q.legendText = q.name);
            }
          }
          true === this.reversed && v2.reverse();
          if (0 < v2.length) {
            q = null;
            f = u = z = 0;
            u = null !== this.itemWidth ? null !== this.itemMaxWidth ? Math.min(this.itemWidth, this.itemMaxWidth, h) : this.itemMaxWidth = Math.min(this.itemWidth, h) : null !== this.itemMaxWidth ? Math.min(this.itemMaxWidth, h) : this.itemMaxWidth = h;
            w = 0 === w ? 0.75 * this.lineHeight : w;
            u = (this.itemMaxWidth ? this.itemMaxWidth : u) - (w + p2);
            for (l = 0; l < v2.length; l++) {
              r = v2[l];
              t3 = u;
              if ("line" === r.chartType || "spline" === r.chartType || "stepLine" === r.chartType)
                t3 -= 2 * 0.1 * this.lineHeight;
              if (!(0 >= d2 || "undefined" === typeof d2 || 0 >= t3 || "undefined" === typeof t3))
                if ("horizontal" === this.orientation) {
                  r.textBlock = new ja(this.ctx, { x: 0, y: 0, maxWidth: t3, maxHeight: this.itemWrap ? d2 : this.lineHeight, angle: 0, text: r.text, textAlign: "left", fontSize: this.fontSize, fontFamily: this.fontFamily, fontWeight: this.fontWeight, fontColor: this.fontColor, fontStyle: this.fontStyle, textBaseline: "middle" });
                  r.textBlock.measureText();
                  null !== this.itemWidth && (r.textBlock.width = this.itemWidth - (w + p2 + ("line" === r.chartType || "spline" === r.chartType || "stepLine" === r.chartType ? 2 * 0.1 * this.lineHeight : 0)));
                  if (!q || q.width + Math.round(r.textBlock.width + w + p2 + (0 === q.width ? 0 : this.horizontalSpacing) + ("line" === r.chartType || "spline" === r.chartType || "stepLine" === r.chartType ? 2 * 0.1 * this.lineHeight : 0)) > h)
                    q = { items: [], width: 0 }, k.push(q), this.height += f, f = 0;
                  f = Math.max(f, r.textBlock.height ? r.textBlock.height : this.lineHeight);
                  r.textBlock.x = q.width;
                  r.textBlock.y = 0;
                  q.width += Math.round(r.textBlock.width + w + p2 + (0 === q.width ? 0 : this.horizontalSpacing) + ("line" === r.chartType || "spline" === r.chartType || "stepLine" === r.chartType ? 2 * 0.1 * this.lineHeight : 0));
                  q.items.push(r);
                  this.width = Math.max(q.width, this.width);
                } else
                  r.textBlock = new ja(this.ctx, { x: 0, y: 0, maxWidth: u, maxHeight: true === this.itemWrap ? d2 : 1.5 * this.fontSize, angle: 0, text: r.text, textAlign: "left", fontSize: this.fontSize, fontFamily: this.fontFamily, fontWeight: this.fontWeight, fontColor: this.fontColor, fontStyle: this.fontStyle, textBaseline: "middle" }), r.textBlock.measureText(), null !== this.itemWidth && (r.textBlock.width = this.itemWidth - (w + p2 + ("line" === r.chartType || "spline" === r.chartType || "stepLine" === r.chartType ? 2 * 0.1 * this.lineHeight : 0))), this.height < d2 - this.lineHeight ? (q = { items: [], width: 0 }, k.push(q)) : (q = k[z], z = (z + 1) % k.length), q && (this.height += r.textBlock.height ? r.textBlock.height : this.lineHeight, r.textBlock.x = q.width, r.textBlock.y = 0, q.width += Math.round(r.textBlock.width + w + p2 + (0 === q.width ? 0 : this.horizontalSpacing) + ("line" === r.chartType || "spline" === r.chartType || "stepLine" === r.chartType ? 2 * 0.1 * this.lineHeight : 0)), q.items.push(r), this.width = Math.max(q.width, this.width));
            }
            this.height = false === this.itemWrap ? k.length * this.lineHeight : this.height + f;
            this.height = Math.min(d2, this.height);
            this.width = Math.min(h, this.width);
          }
          "top" === this.verticalAlign ? (e = "left" === this.horizontalAlign ? g.x1 : "right" === this.horizontalAlign ? g.x2 - this.width : g.x1 + g.width / 2 - this.width / 2, b = g.y1) : "center" === this.verticalAlign ? (e = "left" === this.horizontalAlign ? g.x1 : "right" === this.horizontalAlign ? g.x2 - this.width : g.x1 + g.width / 2 - this.width / 2, b = g.y1 + g.height / 2 - this.height / 2) : "bottom" === this.verticalAlign && (e = "left" === this.horizontalAlign ? g.x1 : "right" === this.horizontalAlign ? g.x2 - this.width : g.x1 + g.width / 2 - this.width / 2, b = g.y2 - this.height);
          this.items = v2;
          for (l = 0; l < this.items.length; l++)
            r = v2[l], r.id = ++this.chart._eventManager.lastObjectId, this.chart._eventManager.objectMap[r.id] = { id: r.id, objectType: "legendItem", legendItemIndex: l, dataSeriesIndex: r.dataSeriesIndex, dataPointIndex: r.dataPointIndex };
          this.markerSize = w;
          this.rows = k;
          0 < v2.length && a.layoutManager.registerSpace(c, { width: this.width + 2 + 2, height: this.height + 5 + 5 });
          this.bounds = { x1: e, y1: b, x2: e + this.width, y2: b + this.height };
        };
        S2.prototype.render = function() {
          var a = this.bounds.x1, g = this.bounds.y1, c = this.markerMargin, b = this.maxWidth, e = this.maxHeight, h = this.markerSize, d2 = this.rows;
          (0 < this.borderThickness && this.borderColor || this.backgroundColor) && this.ctx.roundRect(a, g, this.width, this.height, this.cornerRadius, this.borderThickness, this.backgroundColor, this.borderColor);
          for (var n2 = 0, p2 = 0; p2 < d2.length; p2++) {
            for (var k = d2[p2], l = 0, q = 0; q < k.items.length; q++) {
              var r = k.items[q], f = r.textBlock.x + a + (0 === q ? 0.2 * h : this.horizontalSpacing), v2 = g + n2, w = f;
              this.chart.data[r.dataSeriesIndex].visible || (this.ctx.globalAlpha = 0.5);
              this.ctx.save();
              this.ctx.beginPath();
              this.ctx.rect(a, g, b, Math.max(e - e % this.lineHeight, 0));
              this.ctx.clip();
              if ("line" === r.chartType || "stepLine" === r.chartType || "spline" === r.chartType)
                this.ctx.strokeStyle = r.lineColor, this.ctx.lineWidth = Math.ceil(this.lineHeight / 8), this.ctx.beginPath(), this.ctx.moveTo(
                  f - 0.1 * this.lineHeight,
                  v2 + this.lineHeight / 2
                ), this.ctx.lineTo(f + 0.85 * this.lineHeight, v2 + this.lineHeight / 2), this.ctx.stroke(), w -= 0.1 * this.lineHeight;
              if ("error" === r.chartType) {
                this.ctx.strokeStyle = this.errorMarkerColor[0];
                this.ctx.lineWidth = h / 8;
                this.ctx.beginPath();
                var x = f - 0.08 * this.lineHeight + 0.1 * this.lineHeight, s = v2 + 0.15 * this.lineHeight, z = 0.7 * this.lineHeight, u = z + 0.02 * this.lineHeight;
                this.ctx.moveTo(x, s);
                this.ctx.lineTo(x + z, s);
                this.ctx.stroke();
                this.ctx.beginPath();
                this.ctx.moveTo(x + z / 2, s);
                this.ctx.lineTo(x + z / 2, s + u);
                this.ctx.stroke();
                this.ctx.beginPath();
                this.ctx.moveTo(x, s + u);
                this.ctx.lineTo(x + z, s + u);
                this.ctx.stroke();
                this.errorMarkerColor.shift();
              }
              X.drawMarker(f + h / 2, v2 + this.lineHeight / 2, this.ctx, r.markerType, "error" === r.chartType || "line" === r.chartType || "spline" === r.chartType ? r.markerSize / 2 : r.markerSize, r.markerColor, r.markerBorderColor, r.markerBorderThickness);
              r.textBlock.x = f + c + h;
              if ("line" === r.chartType || "stepLine" === r.chartType || "spline" === r.chartType)
                r.textBlock.x += 0.1 * this.lineHeight;
              r.textBlock.y = Math.round(v2 + this.lineHeight / 2);
              r.textBlock.render(true);
              this.ctx.restore();
              l = 0 < q ? Math.max(l, r.textBlock.height ? r.textBlock.height : this.lineHeight) : r.textBlock.height ? r.textBlock.height : this.lineHeight;
              this.chart.data[r.dataSeriesIndex].visible || (this.ctx.globalAlpha = 1);
              f = U(r.id);
              this.ghostCtx.fillStyle = f;
              this.ghostCtx.beginPath();
              this.ghostCtx.fillRect(w, r.textBlock.y - this.lineHeight / 2, r.textBlock.x + r.textBlock.width - w, r.textBlock.height ? r.textBlock.height : this.lineHeight);
              r.x1 = this.chart._eventManager.objectMap[r.id].x1 = w;
              r.y1 = this.chart._eventManager.objectMap[r.id].y1 = r.textBlock.y - this.lineHeight / 2;
              r.x2 = this.chart._eventManager.objectMap[r.id].x2 = r.textBlock.x + r.textBlock.width;
              r.y2 = this.chart._eventManager.objectMap[r.id].y2 = r.textBlock.y + (r.textBlock.height ? r.textBlock.height : this.lineHeight) - this.lineHeight / 2;
            }
            n2 += l;
          }
        };
        pa(V2, Y);
        V2.prototype.getDefaultAxisPlacement = function() {
          var a = this.type;
          if ("column" === a || "line" === a || "stepLine" === a || "spline" === a || "area" === a || "stepArea" === a || "splineArea" === a || "stackedColumn" === a || "stackedLine" === a || "bubble" === a || "scatter" === a || "stackedArea" === a || "stackedColumn100" === a || "stackedLine100" === a || "stackedArea100" === a || "candlestick" === a || "ohlc" === a || "rangeColumn" === a || "rangeArea" === a || "rangeSplineArea" === a || "boxAndWhisker" === a || "waterfall" === a)
            return "normal";
          if ("bar" === a || "stackedBar" === a || "stackedBar100" === a || "rangeBar" === a)
            return "xySwapped";
          if ("pie" === a || "doughnut" === a || "funnel" === a || "pyramid" === a)
            return "none";
          "error" !== a && window.console.log("Unknown Chart Type: " + a);
          return null;
        };
        V2.getDefaultLegendMarker = function(a) {
          if ("column" === a || "stackedColumn" === a || "stackedLine" === a || "bar" === a || "stackedBar" === a || "stackedBar100" === a || "bubble" === a || "scatter" === a || "stackedColumn100" === a || "stackedLine100" === a || "stepArea" === a || "candlestick" === a || "ohlc" === a || "rangeColumn" === a || "rangeBar" === a || "rangeArea" === a || "rangeSplineArea" === a || "boxAndWhisker" === a || "waterfall" === a)
            return "square";
          if ("line" === a || "stepLine" === a || "spline" === a || "pie" === a || "doughnut" === a)
            return "circle";
          if ("area" === a || "splineArea" === a || "stackedArea" === a || "stackedArea100" === a || "funnel" === a || "pyramid" === a)
            return "triangle";
          if ("error" === a)
            return "none";
          window.console.log("Unknown Chart Type: " + a);
          return null;
        };
        V2.prototype.getDataPointAtX = function(a, g) {
          if (!this.dataPoints || 0 === this.dataPoints.length)
            return null;
          var c = { dataPoint: null, distance: Infinity, index: NaN }, b = null, e = 0, h = 0, d2 = 1, n2 = Infinity, p2 = 0, k = 0, l = 0;
          "none" !== this.chart.plotInfo.axisPlacement && (this.axisX.logarithmic ? (l = Math.log(this.dataPoints[this.dataPoints.length - 1].x / this.dataPoints[0].x), l = 1 < l ? Math.min(Math.max((this.dataPoints.length - 1) / l * Math.log(a / this.dataPoints[0].x) >> 0, 0), this.dataPoints.length) : 0) : (l = this.dataPoints[this.dataPoints.length - 1].x - this.dataPoints[0].x, l = 0 < l ? Math.min(Math.max((this.dataPoints.length - 1) / l * (a - this.dataPoints[0].x) >> 0, 0), this.dataPoints.length) : 0));
          for (; ; ) {
            h = 0 < d2 ? l + e : l - e;
            if (0 <= h && h < this.dataPoints.length) {
              var b = this.dataPoints[h], q = this.axisX.logarithmic ? b.x > a ? b.x / a : a / b.x : Math.abs(b.x - a);
              q < c.distance && (c.dataPoint = b, c.distance = q, c.index = h);
              b = q;
              b <= n2 ? n2 = b : 0 < d2 ? p2++ : k++;
              if (1e3 < p2 && 1e3 < k)
                break;
            } else if (0 > l - e && l + e >= this.dataPoints.length)
              break;
            -1 === d2 ? (e++, d2 = 1) : d2 = -1;
          }
          return g || (c.dataPoint.x.getTime ? c.dataPoint.x.getTime() : c.dataPoint.x) !== (a.getTime ? a.getTime() : a) ? g && null !== c.dataPoint ? c : null : c;
        };
        V2.prototype.getDataPointAtXY = function(a, g, c) {
          if (!this.dataPoints || 0 === this.dataPoints.length || a < this.chart.plotArea.x1 || a > this.chart.plotArea.x2 || g < this.chart.plotArea.y1 || g > this.chart.plotArea.y2)
            return null;
          c = c || false;
          var b = [], e = 0, h = 0, d2 = 1, p2 = false, v2 = Infinity, k = 0, l = 0, q = 0;
          if ("none" !== this.chart.plotInfo.axisPlacement)
            if (q = (this.chart.axisX[0] ? this.chart.axisX[0] : this.chart.axisX2[0]).getXValueAt({ x: a, y: g }), this.axisX.logarithmic)
              var r = Math.log(this.dataPoints[this.dataPoints.length - 1].x / this.dataPoints[0].x), q = 1 < r ? Math.min(Math.max((this.dataPoints.length - 1) / r * Math.log(q / this.dataPoints[0].x) >> 0, 0), this.dataPoints.length) : 0;
            else
              r = this.dataPoints[this.dataPoints.length - 1].x - this.dataPoints[0].x, q = 0 < r ? Math.min(Math.max((this.dataPoints.length - 1) / r * (q - this.dataPoints[0].x) >> 0, 0), this.dataPoints.length) : 0;
          for (; ; ) {
            h = 0 < d2 ? q + e : q - e;
            if (0 <= h && h < this.dataPoints.length) {
              var r = this.chart._eventManager.objectMap[this.dataPointIds[h]], f = this.dataPoints[h], t3 = null;
              if (r) {
                switch (this.type) {
                  case "column":
                  case "stackedColumn":
                  case "stackedColumn100":
                  case "bar":
                  case "stackedBar":
                  case "stackedBar100":
                  case "rangeColumn":
                  case "rangeBar":
                  case "waterfall":
                  case "error":
                    a >= r.x1 && (a <= r.x2 && g >= r.y1 && g <= r.y2) && (b.push({ dataPoint: f, dataPointIndex: h, dataSeries: this, distance: Math.min(Math.abs(r.x1 - a), Math.abs(r.x2 - a), Math.abs(r.y1 - g), Math.abs(r.y2 - g)) }), p2 = true);
                    break;
                  case "line":
                  case "stepLine":
                  case "spline":
                  case "area":
                  case "stepArea":
                  case "stackedArea":
                  case "stackedArea100":
                  case "splineArea":
                  case "scatter":
                    var w = ma("markerSize", f, this) || 4, x = c ? 20 : w, t3 = Math.sqrt(Math.pow(r.x1 - a, 2) + Math.pow(r.y1 - g, 2));
                    t3 <= x && b.push({ dataPoint: f, dataPointIndex: h, dataSeries: this, distance: t3 });
                    r = Math.abs(r.x1 - a);
                    r <= v2 ? v2 = r : 0 < d2 ? k++ : l++;
                    t3 <= w / 2 && (p2 = true);
                    break;
                  case "rangeArea":
                  case "rangeSplineArea":
                    w = ma("markerSize", f, this) || 4;
                    x = c ? 20 : w;
                    t3 = Math.min(Math.sqrt(Math.pow(r.x1 - a, 2) + Math.pow(r.y1 - g, 2)), Math.sqrt(Math.pow(r.x1 - a, 2) + Math.pow(r.y2 - g, 2)));
                    t3 <= x && b.push({ dataPoint: f, dataPointIndex: h, dataSeries: this, distance: t3 });
                    r = Math.abs(r.x1 - a);
                    r <= v2 ? v2 = r : 0 < d2 ? k++ : l++;
                    t3 <= w / 2 && (p2 = true);
                    break;
                  case "bubble":
                    w = r.size;
                    t3 = Math.sqrt(Math.pow(r.x1 - a, 2) + Math.pow(r.y1 - g, 2));
                    t3 <= w / 2 && (b.push({ dataPoint: f, dataPointIndex: h, dataSeries: this, distance: t3 }), p2 = true);
                    break;
                  case "pie":
                  case "doughnut":
                    w = r.center;
                    x = "doughnut" === this.type ? r.percentInnerRadius * r.radius : 0;
                    t3 = Math.sqrt(Math.pow(w.x - a, 2) + Math.pow(w.y - g, 2));
                    t3 < r.radius && t3 > x && (t3 = Math.atan2(g - w.y, a - w.x), 0 > t3 && (t3 += 2 * Math.PI), t3 = Number(((180 * (t3 / Math.PI) % 360 + 360) % 360).toFixed(12)), w = Number(((180 * (r.startAngle / Math.PI) % 360 + 360) % 360).toFixed(12)), x = Number(((180 * (r.endAngle / Math.PI) % 360 + 360) % 360).toFixed(12)), 0 === x && 1 < r.endAngle && (x = 360), w >= x && (0 !== f.y && !n(f.y)) && (x += 360, t3 < w && (t3 += 360)), t3 > w && t3 < x && (b.push({ dataPoint: f, dataPointIndex: h, dataSeries: this, distance: 0 }), p2 = true));
                    break;
                  case "funnel":
                  case "pyramid":
                    t3 = r.funnelSection;
                    g > t3.y1 && g < t3.y4 && (t3.y6 ? g > t3.y6 ? (h = t3.x6 + (t3.x5 - t3.x6) / (t3.y5 - t3.y6) * (g - t3.y6), t3 = t3.x3 + (t3.x4 - t3.x3) / (t3.y4 - t3.y3) * (g - t3.y3)) : (h = t3.x1 + (t3.x6 - t3.x1) / (t3.y6 - t3.y1) * (g - t3.y1), t3 = t3.x2 + (t3.x3 - t3.x2) / (t3.y3 - t3.y2) * (g - t3.y2)) : (h = t3.x1 + (t3.x4 - t3.x1) / (t3.y4 - t3.y1) * (g - t3.y1), t3 = t3.x2 + (t3.x3 - t3.x2) / (t3.y3 - t3.y2) * (g - t3.y2)), a > h && a < t3 && (b.push({ dataPoint: f, dataPointIndex: r.dataPointIndex, dataSeries: this, distance: 0 }), p2 = true));
                    break;
                  case "boxAndWhisker":
                    if (a >= r.x1 - r.borderThickness / 2 && a <= r.x2 + r.borderThickness / 2 && g >= r.y4 - r.borderThickness / 2 && g <= r.y1 + r.borderThickness / 2 || Math.abs(r.x2 - a + r.x1 - a) < r.borderThickness && g >= r.y1 && g <= r.y4)
                      b.push({ dataPoint: f, dataPointIndex: h, dataSeries: this, distance: Math.min(Math.abs(r.x1 - a), Math.abs(r.x2 - a), Math.abs(r.y2 - g), Math.abs(r.y3 - g)) }), p2 = true;
                    break;
                  case "candlestick":
                    if (a >= r.x1 - r.borderThickness / 2 && a <= r.x2 + r.borderThickness / 2 && g >= r.y2 - r.borderThickness / 2 && g <= r.y3 + r.borderThickness / 2 || Math.abs(r.x2 - a + r.x1 - a) < r.borderThickness && g >= r.y1 && g <= r.y4)
                      b.push({ dataPoint: f, dataPointIndex: h, dataSeries: this, distance: Math.min(
                        Math.abs(r.x1 - a),
                        Math.abs(r.x2 - a),
                        Math.abs(r.y2 - g),
                        Math.abs(r.y3 - g)
                      ) }), p2 = true;
                    break;
                  case "ohlc":
                    if (Math.abs(r.x2 - a + r.x1 - a) < r.borderThickness && g >= r.y2 && g <= r.y3 || a >= r.x1 && a <= (r.x2 + r.x1) / 2 && g >= r.y1 - r.borderThickness / 2 && g <= r.y1 + r.borderThickness / 2 || a >= (r.x1 + r.x2) / 2 && a <= r.x2 && g >= r.y4 - r.borderThickness / 2 && g <= r.y4 + r.borderThickness / 2)
                      b.push({ dataPoint: f, dataPointIndex: h, dataSeries: this, distance: Math.min(Math.abs(r.x1 - a), Math.abs(r.x2 - a), Math.abs(r.y2 - g), Math.abs(r.y3 - g)) }), p2 = true;
                }
                if (p2 || 1e3 < k && 1e3 < l)
                  break;
              }
            } else if (0 > q - e && q + e >= this.dataPoints.length)
              break;
            -1 === d2 ? (e++, d2 = 1) : d2 = -1;
          }
          a = null;
          for (g = 0; g < b.length; g++)
            a ? b[g].distance <= a.distance && (a = b[g]) : a = b[g];
          return a;
        };
        V2.prototype.getMarkerProperties = function(a, g, c, b) {
          var e = this.dataPoints, h = e[a].markerColor ? e[a].markerColor : this.markerColor ? this.markerColor : e[a].color ? e[a].color : this.color ? this.color : this._colorSet[a % this._colorSet.length], d2 = e[a].markerBorderColor ? e[a].markerBorderColor : this.markerBorderColor ? this.markerBorderColor : null, p2 = n(e[a].markerBorderThickness) ? this.markerBorderThickness ? this.markerBorderThickness : null : e[a].markerBorderThickness, t3 = e[a].markerType ? e[a].markerType : this.markerType;
          a = n(e[a].markerSize) ? this.markerSize : e[a].markerSize;
          return { x: g, y: c, ctx: b, type: t3, size: a, color: h, borderColor: d2, borderThickness: p2 };
        };
        pa(A, Y);
        A.prototype.createExtraLabelsForLog = function(a) {
          a = (a || 0) + 1;
          if (!(5 < a)) {
            var g = this.logLabelValues[0] || this.intervalStartPosition;
            if (Math.log(this.range) / Math.log(g / this.viewportMinimum) < this.noTicks - 1) {
              for (var c = A.getNiceNumber((g - this.viewportMinimum) / Math.min(Math.max(
                2,
                this.noTicks - this.logLabelValues.length
              ), 3), true), b = Math.ceil(this.viewportMinimum / c) * c; b < g; b += c)
                b < this.viewportMinimum || this.logLabelValues.push(b);
              this.logLabelValues.sort(Sa);
              this.createExtraLabelsForLog(a);
            }
          }
        };
        A.prototype.createLabels = function() {
          var a, g, c = 0, b = 0, e, h = 0, d2 = 0, b = 0, b = this.interval, p2 = 0, t3, k = 0.6 * this.chart.height, l;
          a = false;
          var q = this.scaleBreaks ? this.scaleBreaks._appliedBreaks : [], r = q.length ? n(this.scaleBreaks.firstBreakIndex) ? 0 : this.scaleBreaks.firstBreakIndex : 0;
          if ("axisX" !== this.type || "dateTime" !== this.valueType || this.logarithmic) {
            e = this.viewportMaximum;
            if (this.labels) {
              a = Math.ceil(b);
              for (var b = Math.ceil(this.intervalStartPosition), f = false, c = b; c < this.viewportMaximum; c += a)
                if (this.labels[c])
                  f = true;
                else {
                  f = false;
                  break;
                }
              f && (this.interval = a, this.intervalStartPosition = b);
            }
            if (this.logarithmic && !this.equidistantInterval)
              for (this.logLabelValues || (this.logLabelValues = [], this.createExtraLabelsForLog()), b = 0, f = r; b < this.logLabelValues.length; b++)
                if (c = this.logLabelValues[b], c < this.viewportMinimum)
                  b++;
                else {
                  for (; f < q.length && c > q[f].endValue; f++)
                    ;
                  a = f < q.length && c >= q[f].startValue && c <= q[f].endValue;
                  l = c;
                  a || (a = this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.options, value: l, label: this.labels[l] ? this.labels[l] : null }) : "axisX" === this.type && this.labels[l] ? this.labels[l] : fa(l, this.valueFormatString, this.chart._cultureInfo), a = new ja(this.ctx, {
                    x: 0,
                    y: 0,
                    maxWidth: h,
                    maxHeight: d2,
                    angle: this.labelAngle,
                    text: this.prefix + a + this.suffix,
                    backgroundColor: this.labelBackgroundColor,
                    borderColor: this.labelBorderColor,
                    cornerRadius: this.labelCornerRadius,
                    textAlign: this.labelTextAlign,
                    fontSize: this.labelFontSize,
                    fontFamily: this.labelFontFamily,
                    fontWeight: this.labelFontWeight,
                    fontColor: this.labelFontColor,
                    fontStyle: this.labelFontStyle,
                    textBaseline: "middle",
                    borderThickness: this.labelBorderThickness
                  }), this._labels.push({ position: l, textBlock: a, effectiveHeight: null }));
                }
            f = r;
            for (c = this.intervalStartPosition; c <= e; c = parseFloat(1e-12 > this.interval ? this.logarithmic && this.equidistantInterval ? c * Math.pow(this.logarithmBase, this.interval) : c + this.interval : (this.logarithmic && this.equidistantInterval ? c * Math.pow(this.logarithmBase, this.interval) : c + this.interval).toFixed(12))) {
              for (; f < q.length && c > q[f].endValue; f++)
                ;
              a = f < q.length && c >= q[f].startValue && c <= q[f].endValue;
              l = c;
              a || (a = this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.options, value: l, label: this.labels[l] ? this.labels[l] : null }) : "axisX" === this.type && this.labels[l] ? this.labels[l] : fa(l, this.valueFormatString, this.chart._cultureInfo), a = new ja(this.ctx, {
                x: 0,
                y: 0,
                maxWidth: h,
                maxHeight: d2,
                angle: this.labelAngle,
                text: this.prefix + a + this.suffix,
                textAlign: this.labelTextAlign,
                backgroundColor: this.labelBackgroundColor,
                borderColor: this.labelBorderColor,
                borderThickness: this.labelBorderThickness,
                cornerRadius: this.labelCornerRadius,
                fontSize: this.labelFontSize,
                fontFamily: this.labelFontFamily,
                fontWeight: this.labelFontWeight,
                fontColor: this.labelFontColor,
                fontStyle: this.labelFontStyle,
                textBaseline: "middle"
              }), this._labels.push({ position: l, textBlock: a, effectiveHeight: null }));
            }
          } else
            for (this.intervalStartPosition = this.getLabelStartPoint(
              new Date(this.viewportMinimum),
              this.intervalType,
              this.interval
            ), e = Ya(new Date(this.viewportMaximum), this.interval, this.intervalType), f = r, c = this.intervalStartPosition; c < e; Ya(c, b, this.intervalType)) {
              for (a = c.getTime(); f < q.length && a > q[f].endValue; f++)
                ;
              l = a;
              a = f < q.length && a >= q[f].startValue && a <= q[f].endValue;
              a || (a = this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.options, value: new Date(l), label: this.labels[l] ? this.labels[l] : null }) : "axisX" === this.type && this.labels[l] ? this.labels[l] : Ca(l, this.valueFormatString, this.chart._cultureInfo), a = new ja(this.ctx, { x: 0, y: 0, maxWidth: h, backgroundColor: this.labelBackgroundColor, borderColor: this.labelBorderColor, borderThickness: this.labelBorderThickness, cornerRadius: this.labelCornerRadius, maxHeight: d2, angle: this.labelAngle, text: this.prefix + a + this.suffix, textAlign: this.labelTextAlign, fontSize: this.labelFontSize, fontFamily: this.labelFontFamily, fontWeight: this.labelFontWeight, fontColor: this.labelFontColor, fontStyle: this.labelFontStyle, textBaseline: "middle" }), this._labels.push({
                position: l,
                textBlock: a,
                effectiveHeight: null,
                breaksLabelType: void 0
              }));
            }
          if ("bottom" === this._position || "top" === this._position)
            p2 = this.logarithmic && !this.equidistantInterval && 2 <= this._labels.length ? this.lineCoordinates.width * Math.log(Math.min(this._labels[this._labels.length - 1].position / this._labels[this._labels.length - 2].position, this._labels[1].position / this._labels[0].position)) / Math.log(this.range) : this.lineCoordinates.width / (this.logarithmic && this.equidistantInterval ? Math.log(this.range) / Math.log(this.logarithmBase) : Math.abs(this.range)) * M[this.intervalType + "Duration"] * this.interval, h = "undefined" === typeof this.options.labelMaxWidth ? 0.5 * this.chart.width >> 0 : this.options.labelMaxWidth, this.chart.panEnabled || (d2 = "undefined" === typeof this.options.labelWrap || this.labelWrap ? 0.8 * this.chart.height >> 0 : 1.5 * this.labelFontSize);
          else if ("left" === this._position || "right" === this._position)
            p2 = this.logarithmic && !this.equidistantInterval && 2 <= this._labels.length ? this.lineCoordinates.height * Math.log(Math.min(this._labels[this._labels.length - 1].position / this._labels[this._labels.length - 2].position, this._labels[1].position / this._labels[0].position)) / Math.log(this.range) : this.lineCoordinates.height / (this.logarithmic && this.equidistantInterval ? Math.log(this.range) / Math.log(this.logarithmBase) : Math.abs(this.range)) * M[this.intervalType + "Duration"] * this.interval, this.chart.panEnabled || (h = "undefined" === typeof this.options.labelMaxWidth ? 0.3 * this.chart.width >> 0 : this.options.labelMaxWidth), d2 = "undefined" === typeof this.options.labelWrap || this.labelWrap ? 0.3 * this.chart.height >> 0 : 1.5 * this.labelFontSize;
          for (b = 0; b < this._labels.length; b++) {
            a = this._labels[b].textBlock;
            a.maxWidth = h;
            a.maxHeight = d2;
            var A2 = a.measureText();
            t3 = A2.height;
          }
          e = [];
          r = q = 0;
          if (this.labelAutoFit || this.options.labelAutoFit) {
            if (n(this.labelAngle) || (this.labelAngle = (this.labelAngle % 360 + 360) % 360, 90 < this.labelAngle && 270 > this.labelAngle ? this.labelAngle -= 180 : 270 <= this.labelAngle && 360 >= this.labelAngle && (this.labelAngle -= 360)), "bottom" === this._position || "top" === this._position)
              if (h = 0.9 * p2 >> 0, r = 0, !this.chart.panEnabled && 1 <= this._labels.length) {
                this.sessionVariables.labelFontSize = this.labelFontSize;
                this.sessionVariables.labelMaxWidth = h;
                this.sessionVariables.labelMaxHeight = d2;
                this.sessionVariables.labelAngle = this.labelAngle;
                this.sessionVariables.labelWrap = this.labelWrap;
                for (c = 0; c < this._labels.length; c++)
                  if (!this._labels[c].breaksLabelType) {
                    a = this._labels[c].textBlock;
                    for (var w, f = a.text.split(" "), b = 0; b < f.length; b++)
                      l = f[b], this.ctx.font = a.fontStyle + " " + a.fontWeight + " " + a.fontSize + "px " + a.fontFamily, l = this.ctx.measureText(l), l.width > r && (w = c, r = l.width);
                  }
                c = 0;
                for (c = this.intervalStartPosition < this.viewportMinimum ? 1 : 0; c < this._labels.length; c++)
                  if (!this._labels[c].breaksLabelType) {
                    a = this._labels[c].textBlock;
                    A2 = a.measureText();
                    for (f = c + 1; f < this._labels.length; f++)
                      if (!this._labels[f].breaksLabelType) {
                        g = this._labels[f].textBlock;
                        g = g.measureText();
                        break;
                      }
                    e.push(a.height);
                    this.sessionVariables.labelMaxHeight = Math.max.apply(Math, e);
                    Math.cos(Math.PI / 180 * Math.abs(this.labelAngle));
                    Math.sin(Math.PI / 180 * Math.abs(this.labelAngle));
                    b = h * Math.sin(Math.PI / 180 * Math.abs(this.labelAngle)) + (d2 - a.fontSize / 2) * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle));
                    if (n(this.options.labelAngle) && isNaN(this.options.labelAngle) && 0 !== this.options.labelAngle)
                      if (this.sessionVariables.labelMaxHeight = 0 === this.labelAngle ? d2 : Math.min((b - h * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle))) / Math.sin(Math.PI / 180 * Math.abs(this.labelAngle)), b), l = (k - (t3 + a.fontSize / 2) * Math.cos(Math.PI / 180 * Math.abs(-25))) / Math.sin(Math.PI / 180 * Math.abs(-25)), !n(this.options.labelWrap))
                        this.labelWrap ? n(this.options.labelMaxWidth) ? (this.sessionVariables.labelMaxWidth = Math.min(Math.max(h, r), l), this.sessionVariables.labelWrap = this.labelWrap, g && A2.width + g.width >> 0 > 2 * h && (this.sessionVariables.labelAngle = -25)) : (this.sessionVariables.labelWrap = this.labelWrap, this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth, this.sessionVariables.labelAngle = this.sessionVariables.labelMaxWidth > h ? -25 : this.sessionVariables.labelAngle) : n(this.options.labelMaxWidth) ? (this.sessionVariables.labelWrap = this.labelWrap, this.sessionVariables.labelMaxHeight = d2, this.sessionVariables.labelMaxWidth = h, g && A2.width + g.width >> 0 > 2 * h && (this.sessionVariables.labelAngle = -25, this.sessionVariables.labelMaxWidth = l)) : (this.sessionVariables.labelAngle = this.sessionVariables.labelMaxWidth > h ? -25 : this.sessionVariables.labelAngle, this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth, this.sessionVariables.labelMaxHeight = d2, this.sessionVariables.labelWrap = this.labelWrap);
                      else {
                        if (n(this.options.labelWrap)) {
                          if (!n(this.options.labelMaxWidth))
                            this.options.labelMaxWidth < h ? (this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth, this.sessionVariables.labelMaxHeight = b) : (this.sessionVariables.labelAngle = -25, this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth, this.sessionVariables.labelMaxHeight = d2);
                          else if (!n(g)) {
                            if (b = A2.width + g.width >> 0, f = this.labelFontSize, r < h)
                              b - 2 * h > q && (q = b - 2 * h, b >= 2 * h && b < 2.2 * h ? (this.sessionVariables.labelMaxWidth = h, n(this.options.labelFontSize) && 12 < f && (f = Math.floor(12 / 13 * f), a.measureText()), this.sessionVariables.labelFontSize = n(this.options.labelFontSize) ? f : this.options.labelFontSize, this.sessionVariables.labelAngle = this.labelAngle) : b >= 2.2 * h && b < 2.8 * h ? (this.sessionVariables.labelAngle = -25, this.sessionVariables.labelMaxWidth = l, this.sessionVariables.labelFontSize = f) : b >= 2.8 * h && b < 3.2 * h ? (this.sessionVariables.labelMaxWidth = Math.max(h, r), this.sessionVariables.labelWrap = true, n(this.options.labelFontSize) && 12 < this.labelFontSize && (this.labelFontSize = Math.floor(12 / 13 * this.labelFontSize), a.measureText()), this.sessionVariables.labelFontSize = n(this.options.labelFontSize) ? f : this.options.labelFontSize, this.sessionVariables.labelAngle = this.labelAngle) : b >= 3.2 * h && b < 3.6 * h ? (this.sessionVariables.labelAngle = -25, this.sessionVariables.labelWrap = true, this.sessionVariables.labelMaxWidth = l, this.sessionVariables.labelFontSize = this.labelFontSize) : b > 3.6 * h && b < 5 * h ? (n(this.options.labelFontSize) && 12 < f && (f = Math.floor(12 / 13 * f), a.measureText()), this.sessionVariables.labelFontSize = n(this.options.labelFontSize) ? f : this.options.labelFontSize, this.sessionVariables.labelWrap = true, this.sessionVariables.labelAngle = -25, this.sessionVariables.labelMaxWidth = l) : b > 5 * h && (this.sessionVariables.labelWrap = true, this.sessionVariables.labelMaxWidth = h, this.sessionVariables.labelFontSize = f, this.sessionVariables.labelMaxHeight = d2, this.sessionVariables.labelAngle = this.labelAngle));
                            else if (w === c && (0 === w && r + this._labels[w + 1].textBlock.measureText().width - 2 * h > q || w === this._labels.length - 1 && r + this._labels[w - 1].textBlock.measureText().width - 2 * h > q || 0 < w && w < this._labels.length - 1 && r + this._labels[w + 1].textBlock.measureText().width - 2 * h > q && r + this._labels[w - 1].textBlock.measureText().width - 2 * h > q))
                              q = 0 === w ? r + this._labels[w + 1].textBlock.measureText().width - 2 * h : r + this._labels[w - 1].textBlock.measureText().width - 2 * h, this.sessionVariables.labelFontSize = n(this.options.labelFontSize) ? f : this.options.labelFontSize, this.sessionVariables.labelWrap = true, this.sessionVariables.labelAngle = -25, this.sessionVariables.labelMaxWidth = l;
                            else if (0 === q)
                              for (this.sessionVariables.labelFontSize = n(this.options.labelFontSize) ? f : this.options.labelFontSize, this.sessionVariables.labelWrap = true, b = 0; b < this._labels.length; b++)
                                a = this._labels[b].textBlock, a.maxWidth = this.sessionVariables.labelMaxWidth = Math.min(Math.max(h, r), l), A2 = a.measureText(), b < this._labels.length - 1 && (f = b + 1, g = this._labels[f].textBlock, g.maxWidth = this.sessionVariables.labelMaxWidth = Math.min(Math.max(h, r), l), g = g.measureText(), A2.width + g.width >> 0 > 2 * h && (this.sessionVariables.labelAngle = -25));
                          }
                        }
                      }
                    else
                      (this.sessionVariables.labelAngle = this.labelAngle, this.sessionVariables.labelMaxHeight = 0 === this.labelAngle ? d2 : Math.min((b - h * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle))) / Math.sin(Math.PI / 180 * Math.abs(this.labelAngle)), b), l = 0 != this.labelAngle ? (k - (t3 + a.fontSize / 2) * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle))) / Math.sin(Math.PI / 180 * Math.abs(this.labelAngle)) : h, this.sessionVariables.labelMaxHeight = this.labelWrap ? (k - l * Math.sin(Math.PI / 180 * Math.abs(this.labelAngle))) / Math.cos(Math.PI / 180 * Math.abs(this.labelAngle)) : 1.5 * this.labelFontSize, n(this.options.labelWrap)) ? n(this.options.labelWrap) && (this.labelWrap && !n(this.options.labelMaxWidth) ? (this.sessionVariables.labelWrap = this.labelWrap, this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth ? this.options.labelMaxWidth : l, this.sessionVariables.labelMaxHeight = d2) : (this.sessionVariables.labelAngle = this.labelAngle, this.sessionVariables.labelMaxWidth = l, this.sessionVariables.labelMaxHeight = b < 0.9 * p2 ? 0.9 * p2 : b, this.sessionVariables.labelWrap = this.labelWrap)) : (this.options.labelWrap ? (this.sessionVariables.labelWrap = this.labelWrap, this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth ? this.options.labelMaxWidth : l) : (n(this.options.labelMaxWidth), this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth ? this.options.labelMaxWidth : l, this.sessionVariables.labelWrap = this.labelWrap), this.sessionVariables.labelMaxHeight = d2);
                  }
                for (b = 0; b < this._labels.length; b++)
                  a = this._labels[b].textBlock, a.maxWidth = this.labelMaxWidth = this.sessionVariables.labelMaxWidth, a.fontSize = this.sessionVariables.labelFontSize, a.angle = this.labelAngle = this.sessionVariables.labelAngle, a.wrap = this.labelWrap = this.sessionVariables.labelWrap, a.maxHeight = this.sessionVariables.labelMaxHeight, a.measureText();
              } else
                for (c = 0; c < this._labels.length; c++)
                  a = this._labels[c].textBlock, a.maxWidth = this.labelMaxWidth = n(this.options.labelMaxWidth) ? n(this.sessionVariables.labelMaxWidth) ? this.sessionVariables.labelMaxWidth = h : this.sessionVariables.labelMaxWidth : this.options.labelMaxWidth, a.fontSize = this.labelFontSize = n(this.options.labelFontSize) ? n(this.sessionVariables.labelFontSize) ? this.sessionVariables.labelFontSize = this.labelFontSize : this.sessionVariables.labelFontSize : this.options.labelFontSize, a.angle = this.labelAngle = n(this.options.labelAngle) ? n(this.sessionVariables.labelAngle) ? this.sessionVariables.labelAngle = this.labelAngle : this.sessionVariables.labelAngle : this.labelAngle, a.wrap = this.labelWrap = n(this.options.labelWrap) ? n(this.sessionVariables.labelWrap) ? this.sessionVariables.labelWrap = this.labelWrap : this.sessionVariables.labelWrap : this.options.labelWrap, a.maxHeight = n(this.sessionVariables.labelMaxHeight) ? this.sessionVariables.labelMaxHeight = d2 : this.sessionVariables.labelMaxHeight, a.measureText();
            else if ("left" === this._position || "right" === this._position)
              if (h = n(this.options.labelMaxWidth) ? 0.3 * this.chart.width >> 0 : this.options.labelMaxWidth, d2 = "undefined" === typeof this.options.labelWrap || this.labelWrap ? 0.3 * this.chart.height >> 0 : 1.5 * this.labelFontSize, !this.chart.panEnabled && 1 <= this._labels.length) {
                this.sessionVariables.labelFontSize = this.labelFontSize;
                this.sessionVariables.labelMaxWidth = h;
                this.sessionVariables.labelMaxHeight = d2;
                this.sessionVariables.labelAngle = n(this.sessionVariables.labelAngle) ? 0 : this.sessionVariables.labelAngle;
                this.sessionVariables.labelWrap = this.labelWrap;
                for (c = 0; c < this._labels.length; c++)
                  if (!this._labels[c].breaksLabelType) {
                    a = this._labels[c].textBlock;
                    A2 = a.measureText();
                    for (f = c + 1; f < this._labels.length; f++)
                      if (!this._labels[f].breaksLabelType) {
                        g = this._labels[f].textBlock;
                        g = g.measureText();
                        break;
                      }
                    e.push(a.height);
                    this.sessionVariables.labelMaxHeight = Math.max.apply(Math, e);
                    b = h * Math.sin(Math.PI / 180 * Math.abs(this.labelAngle)) + (d2 - a.fontSize / 2) * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle));
                    Math.cos(Math.PI / 180 * Math.abs(this.labelAngle));
                    Math.sin(Math.PI / 180 * Math.abs(this.labelAngle));
                    n(this.options.labelAngle) && isNaN(this.options.labelAngle) && 0 !== this.options.labelAngle ? n(this.options.labelWrap) ? n(this.options.labelWrap) && (n(this.options.labelMaxWidth) ? n(g) || (p2 = A2.height + g.height >> 0, p2 - 2 * d2 > r && (r = p2 - 2 * d2, p2 >= 2 * d2 && p2 < 2.4 * d2 ? (n(this.options.labelFontSize) && 12 < this.labelFontSize && (this.labelFontSize = Math.floor(12 / 13 * this.labelFontSize), a.measureText()), this.sessionVariables.labelMaxHeight = d2, this.sessionVariables.labelFontSize = n(this.options.labelFontSize) ? this.labelFontSize : this.options.labelFontSize) : p2 >= 2.4 * d2 && p2 < 2.8 * d2 ? (this.sessionVariables.labelMaxHeight = b, this.sessionVariables.labelFontSize = this.labelFontSize, this.sessionVariables.labelWrap = true) : p2 >= 2.8 * d2 && p2 < 3.2 * d2 ? (this.sessionVariables.labelMaxHeight = d2, this.sessionVariables.labelWrap = true, n(this.options.labelFontSize) && 12 < this.labelFontSize && (this.labelFontSize = Math.floor(12 / 13 * this.labelFontSize), a.measureText()), this.sessionVariables.labelFontSize = n(this.options.labelFontSize) ? this.labelFontSize : this.options.labelFontSize, this.sessionVariables.labelAngle = n(this.sessionVariables.labelAngle) ? 0 : this.sessionVariables.labelAngle) : p2 >= 3.2 * d2 && p2 < 3.6 * d2 ? (this.sessionVariables.labelMaxHeight = b, this.sessionVariables.labelWrap = true, this.sessionVariables.labelFontSize = this.labelFontSize) : p2 > 3.6 * d2 && p2 < 10 * d2 ? (n(this.options.labelFontSize) && 12 < this.labelFontSize && (this.labelFontSize = Math.floor(12 / 13 * this.labelFontSize), a.measureText()), this.sessionVariables.labelFontSize = n(this.options.labelFontSize) ? this.labelFontSize : this.options.labelFontSize, this.sessionVariables.labelMaxWidth = h, this.sessionVariables.labelMaxHeight = d2, this.sessionVariables.labelAngle = n(this.sessionVariables.labelAngle) ? 0 : this.sessionVariables.labelAngle) : p2 > 10 * d2 && p2 < 50 * d2 && (n(this.options.labelFontSize) && 12 < this.labelFontSize && (this.labelFontSize = Math.floor(12 / 13 * this.labelFontSize), a.measureText()), this.sessionVariables.labelFontSize = n(this.options.labelFontSize) ? this.labelFontSize : this.options.labelFontSize, this.sessionVariables.labelMaxHeight = d2, this.sessionVariables.labelMaxWidth = h, this.sessionVariables.labelAngle = n(this.sessionVariables.labelAngle) ? 0 : this.sessionVariables.labelAngle))) : (this.sessionVariables.labelMaxHeight = d2, this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth ? this.options.labelMaxWidth : this.sessionVariables.labelMaxWidth)) : (this.sessionVariables.labelMaxWidth = this.labelWrap ? this.options.labelMaxWidth ? this.options.labelMaxWidth : this.sessionVariables.labelMaxWidth : this.labelMaxWidth ? this.options.labelMaxWidth ? this.options.labelMaxWidth : this.sessionVariables.labelMaxWidth : h, this.sessionVariables.labelMaxHeight = d2) : (this.sessionVariables.labelAngle = this.labelAngle, this.sessionVariables.labelMaxWidth = 0 === this.labelAngle ? h : Math.min((b - d2 * Math.sin(Math.PI / 180 * Math.abs(this.labelAngle))) / Math.cos(Math.PI / 180 * Math.abs(this.labelAngle)), d2), n(this.options.labelWrap)) ? n(this.options.labelWrap) && (this.labelWrap && !n(this.options.labelMaxWidth) ? (this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth ? this.options.labelMaxWidth : this.sessionVariables.labelMaxWidth, this.sessionVariables.labelWrap = this.labelWrap, this.sessionVariables.labelMaxHeight = b) : (this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth ? this.options.labelMaxWidth : h, this.sessionVariables.labelMaxHeight = 0 === this.labelAngle ? d2 : b, n(this.options.labelMaxWidth) && (this.sessionVariables.labelAngle = this.labelAngle))) : this.options.labelWrap ? (this.sessionVariables.labelMaxHeight = 0 === this.labelAngle ? d2 : b, this.sessionVariables.labelWrap = this.labelWrap, this.sessionVariables.labelMaxWidth = h) : (this.sessionVariables.labelMaxHeight = d2, n(this.options.labelMaxWidth), this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth ? this.options.labelMaxWidth : this.sessionVariables.labelMaxWidth, this.sessionVariables.labelWrap = this.labelWrap);
                  }
                for (b = 0; b < this._labels.length; b++)
                  a = this._labels[b].textBlock, a.maxWidth = this.labelMaxWidth = this.sessionVariables.labelMaxWidth, a.fontSize = this.labelFontSize = this.sessionVariables.labelFontSize, a.angle = this.labelAngle = this.sessionVariables.labelAngle, a.wrap = this.labelWrap = this.sessionVariables.labelWrap, a.maxHeight = this.sessionVariables.labelMaxHeight, a.measureText();
              } else
                for (n(this.chart.stockChart) || this.chart.isNavigator || (this.sessionVariables.labelMaxHeight = d2), c = 0; c < this._labels.length; c++)
                  a = this._labels[c].textBlock, a.maxWidth = this.labelMaxWidth = n(this.options.labelMaxWidth) ? n(this.sessionVariables.labelMaxWidth) ? this.sessionVariables.labelMaxWidth = h : this.sessionVariables.labelMaxWidth : this.options.labelMaxWidth, a.fontSize = this.labelFontSize = n(this.options.labelFontSize) ? n(this.sessionVariables.labelFontSize) ? this.sessionVariables.labelFontSize = this.labelFontSize : this.sessionVariables.labelFontSize : this.options.labelFontSize, a.angle = this.labelAngle = n(this.options.labelAngle) ? n(this.sessionVariables.labelAngle) ? this.sessionVariables.labelAngle = this.labelAngle : this.sessionVariables.labelAngle : this.labelAngle, a.wrap = this.labelWrap = n(this.options.labelWrap) ? n(this.sessionVariables.labelWrap) ? this.sessionVariables.labelWrap = this.labelWrap : this.sessionVariables.labelWrap : this.options.labelWrap, a.maxHeight = n(this.sessionVariables.labelMaxHeight) ? this.sessionVariables.labelMaxHeight = d2 : this.sessionVariables.labelMaxHeight, a.measureText();
          }
          for (c = 0; c < this.stripLines.length; c++) {
            var h = this.stripLines[c], x;
            if ("outside" === h.labelPlacement) {
              d2 = this.sessionVariables.labelMaxWidth;
              if ("bottom" === this._position || "top" === this._position)
                n(h.options.labelWrap) && !n(this.sessionVariables.stripLineLabelMaxHeight) ? x = this.sessionVariables.stripLineLabelMaxHeight : this.sessionVariables.stripLineLabelMaxHeight = x = h.labelWrap ? 0.8 * this.chart.height >> 0 : 1.5 * this.labelFontSize;
              if ("left" === this._position || "right" === this._position)
                n(h.options.labelWrap) && !n(this.sessionVariables.stripLineLabelMaxHeight) ? x = this.sessionVariables.stripLineLabelMaxHeight : this.sessionVariables.stripLineLabelMaxHeight = x = h.labelWrap ? 0.8 * this.chart.width >> 0 : 1.5 * this.labelFontSize;
              n(h.labelBackgroundColor) && (h.labelBackgroundColor = "#EEEEEE");
            } else
              d2 = "bottom" === this._position || "top" === this._position ? 0.9 * this.chart.width >> 0 : 0.9 * this.chart.height >> 0, x = n(h.options.labelWrap) || h.labelWrap ? "bottom" === this._position || "top" === this._position ? 0.8 * this.chart.width >> 0 : 0.8 * this.chart.height >> 0 : 1.5 * this.labelFontSize, n(h.labelBackgroundColor) && (n(h.startValue) && 0 !== h.startValue ? h.labelBackgroundColor = v ? "transparent" : null : h.labelBackgroundColor = "#EEEEEE");
            h.labelFontSize = "outside" === h.labelPlacement && n(h.options.labelFontSize) ? this.labelFontSize : h.labelFontSize;
            h.labelFontFamily = "outside" === h.labelPlacement && n(h.options.labelFontFamily) ? this.labelFontFamily : h.labelFontFamily;
            h.labelFontWeight = "outside" === h.labelPlacement && n(h.options.labelFontWeight) ? this.labelFontWeight : h.labelFontWeight;
            h.labelFontStyle = "outside" === h.labelPlacement && n(h.options.labelFontStyle) ? this.labelFontStyle : h.labelFontStyle;
            a = new ja(this.ctx, {
              x: 0,
              y: 0,
              backgroundColor: h.labelBackgroundColor,
              borderColor: h.labelBorderColor,
              borderThickness: h.labelBorderThickness,
              cornerRadius: h.labelCornerRadius,
              maxWidth: h.options.labelMaxWidth ? h.options.labelMaxWidth : d2,
              maxHeight: x,
              angle: this.labelAngle,
              text: h.labelFormatter ? h.labelFormatter({ chart: this.chart, axis: this, stripLine: h }) : h.label,
              textAlign: h.labelTextAlign,
              fontSize: h.labelFontSize,
              fontFamily: h.labelFontFamily,
              fontWeight: h.labelFontWeight,
              fontColor: h.labelFontColor || h.color,
              fontStyle: h.labelFontStyle,
              textBaseline: "middle"
            });
            this._stripLineLabels.push({ position: h.value, textBlock: a, effectiveHeight: null, stripLine: h });
          }
        };
        A.prototype.createLabelsAndCalculateWidth = function() {
          var a = 0, g = 0;
          this._labels = [];
          this._stripLineLabels = [];
          var c = this.chart.isNavigator ? 0 : 5;
          if ("left" === this._position || "right" === this._position) {
            this.createLabels();
            if ("inside" != this.labelPlacement || "inside" === this.labelPlacement && 0 < this._index)
              for (g = 0; g < this._labels.length; g++) {
                var b = this._labels[g].textBlock, b = b.measureText(), e = 0, e = 0 === this.labelAngle ? b.width : b.width * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle)) + b.height * Math.sin(Math.PI / 180 * Math.abs(this.labelAngle));
                a < e && (this.labelEffectiveWidth = a = e);
                this._labels[g].effectiveWidth = e;
              }
            for (g = 0; g < this._stripLineLabels.length; g++)
              "outside" === this._stripLineLabels[g].stripLine.labelPlacement && (this._stripLineLabels[g].stripLine.value >= this.viewportMinimum && this._stripLineLabels[g].stripLine.value <= this.viewportMaximum) && (b = this._stripLineLabels[g].textBlock, b = b.measureText(), e = 0 === this.labelAngle ? b.width : b.width * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle)) + b.height * Math.sin(Math.PI / 180 * Math.abs(this.labelAngle)), "inside" === this.tickPlacement && (e += this.tickLength), "inside" === this.labelPlacement && (a += 0 < this._index ? e : 0), a < e && (a = e), this.stripLineLabelEffectiveWidth = this._stripLineLabels[g].effectiveWidth = e);
          }
          return (this.title ? this._titleTextBlock.measureText().height + 2 : 0) + a + ("inside" === this.tickPlacement ? 0 < this._index ? this.tickLength : 0 : this.tickLength) + c;
        };
        A.prototype.createLabelsAndCalculateHeight = function() {
          var a = 0;
          this._labels = [];
          this._stripLineLabels = [];
          var g, c = 0, b = this.chart.isNavigator ? 0 : 5;
          if ("bottom" === this._position || "top" === this._position) {
            this.createLabels();
            if ("inside" != this.labelPlacement || "inside" === this.labelPlacement && 0 < this._index)
              for (c = 0; c < this._labels.length; c++) {
                g = this._labels[c].textBlock;
                g = g.measureText();
                var e = 0, e = 0 === this.labelAngle ? g.height : g.width * Math.sin(Math.PI / 180 * Math.abs(this.labelAngle)) + g.height * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle));
                a < e && (this.labelEffectiveHeight = a = e);
                this._labels[c].effectiveHeight = e;
              }
            for (c = 0; c < this._stripLineLabels.length; c++)
              "outside" === this._stripLineLabels[c].stripLine.labelPlacement && (this._stripLineLabels[c].stripLine.value >= this.viewportMinimum && this._stripLineLabels[c].stripLine.value <= this.viewportMaximum) && (g = this._stripLineLabels[c].textBlock, g = g.measureText(), e = 0 === this.labelAngle ? g.height : g.width * Math.sin(Math.PI / 180 * Math.abs(this.labelAngle)) + g.height * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle)), "inside" === this.tickPlacement && (e += this.tickLength), "inside" === this.labelPlacement && (a += 0 < this._index ? e : 0), a < e && (a = e), this.stripLineLabelEffectiveHeight = this._stripLineLabels[c].effectiveHeight = e);
          }
          return (this.title ? this._titleTextBlock.measureText().height + 2 : 0) + a + ("inside" === this.tickPlacement ? 0 < this._index ? this.tickLength : 0 : this.tickLength) + b;
        };
        A.setLayout = function(a, g, c, b, e, h) {
          var d2, p2, t3, k, l = a[0] ? a[0].chart : g[0].chart, q = l.isNavigator ? 0 : 10, r = l._axes;
          if (a && 0 < a.length)
            for (var f = 0; f < a.length; f++)
              a[f] && a[f].calculateAxisParameters();
          if (g && 0 < g.length)
            for (f = 0; f < g.length; f++)
              g[f].calculateAxisParameters();
          if (c && 0 < c.length)
            for (f = 0; f < c.length; f++)
              c[f].calculateAxisParameters();
          if (b && 0 < b.length)
            for (f = 0; f < b.length; f++)
              b[f].calculateAxisParameters();
          for (f = 0; f < r.length; f++)
            if (r[f] && r[f].scaleBreaks && r[f].scaleBreaks._appliedBreaks.length)
              for (var v2 = r[f].scaleBreaks._appliedBreaks, w = 0; w < v2.length && !(v2[w].startValue > r[f].viewportMaximum); w++)
                v2[w].endValue < r[f].viewportMinimum || (n(r[f].scaleBreaks.firstBreakIndex) && (r[f].scaleBreaks.firstBreakIndex = w), v2[w].startValue >= r[f].viewPortMinimum && (r[f].scaleBreaks.lastBreakIndex = w));
          for (var x = w = 0, s = 0, z = 0, u = 0, A2 = 0, B3 = 0, C, G2, H2 = p2 = 0, J, K, L2, v2 = J = K = L2 = false, f = 0; f < r.length; f++)
            r[f] && r[f].title && (r[f]._titleTextBlock = new ja(r[f].ctx, {
              text: r[f].title,
              fontSize: r[f].titleFontSize,
              fontFamily: r[f].titleFontFamily,
              fontWeight: r[f].titleFontWeight,
              fontColor: r[f].titleFontColor,
              fontStyle: r[f].titleFontStyle,
              borderColor: r[f].titleBorderColor,
              borderThickness: r[f].titleBorderThickness,
              backgroundColor: r[f].titleBackgroundColor,
              cornerRadius: r[f].titleCornerRadius,
              textBaseline: "middle",
              textAlign: r[f].titleTextAlign
            }));
          for (f = 0; f < r.length; f++)
            if (r[f].title)
              switch (r[f]._position) {
                case "left":
                  r[f]._titleTextBlock.maxWidth = r[f].titleMaxWidth || h.height;
                  r[f]._titleTextBlock.maxHeight = r[f].titleWrap ? 0.8 * h.width : 1.5 * r[f].titleFontSize;
                  r[f]._titleTextBlock.angle = -90;
                  break;
                case "right":
                  r[f]._titleTextBlock.maxWidth = r[f].titleMaxWidth || h.height;
                  r[f]._titleTextBlock.maxHeight = r[f].titleWrap ? 0.8 * h.width : 1.5 * r[f].titleFontSize;
                  r[f]._titleTextBlock.angle = 90;
                  break;
                default:
                  r[f]._titleTextBlock.maxWidth = r[f].titleMaxWidth || h.width, r[f]._titleTextBlock.maxHeight = r[f].titleWrap ? 0.8 * h.height : 1.5 * r[f].titleFontSize, r[f]._titleTextBlock.angle = 0;
              }
          if ("normal" === e) {
            for (var z = [], u = [], A2 = [], B3 = [], M2 = [], P = [], N2 = [], Q2 = []; 4 > w; ) {
              var E = 0, S3 = 0, U2 = 0, T = 0, V3 = e = 0, O = 0, Y2 = 0, W3 = 0, X2 = 0, R = 0, $ = 0;
              if (c && 0 < c.length)
                for (A2 = [], f = R = 0; f < c.length; f++)
                  A2.push(Math.ceil(c[f] ? c[f].createLabelsAndCalculateWidth() : 0)), R += A2[f], O += c[f] && !l.isNavigator ? c[f].margin : 0;
              else
                A2.push(Math.ceil(c[0] ? c[0].createLabelsAndCalculateWidth() : 0));
              N2.push(A2);
              if (b && 0 < b.length)
                for (B3 = [], f = $ = 0; f < b.length; f++)
                  B3.push(Math.ceil(b[f] ? b[f].createLabelsAndCalculateWidth() : 0)), $ += B3[f], Y2 += b[f] ? b[f].margin : 0;
              else
                B3.push(Math.ceil(b[0] ? b[0].createLabelsAndCalculateWidth() : 0));
              Q2.push(B3);
              d2 = Math.round(h.x1 + R + O);
              t3 = Math.round(h.x2 - $ - Y2 > l.width - q ? l.width - q : h.x2 - $ - Y2);
              if (a && 0 < a.length)
                for (z = [], f = W3 = 0; f < a.length; f++)
                  a[f] && (a[f].lineCoordinates = {}), a[f].lineCoordinates.width = Math.abs(t3 - d2), a[f].title && (a[f]._titleTextBlock.maxWidth = 0 < a[f].titleMaxWidth && a[f].titleMaxWidth < a[f].lineCoordinates.width ? a[f].titleMaxWidth : a[f].lineCoordinates.width), z.push(Math.ceil(a[f] ? a[f].createLabelsAndCalculateHeight() : 0)), W3 += z[f], e += a[f] && !l.isNavigator ? a[f].margin : 0;
              else
                z.push(Math.ceil(a[0] ? a[0].createLabelsAndCalculateHeight() : 0));
              M2.push(z);
              if (g && 0 < g.length)
                for (u = [], f = X2 = 0; f < g.length; f++)
                  g[f] && (g[f].lineCoordinates = {}), g[f].lineCoordinates.width = Math.abs(t3 - d2), g[f].title && (g[f]._titleTextBlock.maxWidth = 0 < g[f].titleMaxWidth && g[f].titleMaxWidth < g[f].lineCoordinates.width ? g[f].titleMaxWidth : g[f].lineCoordinates.width), u.push(Math.ceil(g[f] ? g[f].createLabelsAndCalculateHeight() : 0)), X2 += u[f], V3 += g[f] && !l.isNavigator ? g[f].margin : 0;
              else
                u.push(Math.ceil(g[0] ? g[0].createLabelsAndCalculateHeight() : 0));
              P.push(u);
              if (a && 0 < a.length)
                for (f = 0; f < a.length; f++)
                  a[f] && (a[f].lineCoordinates.x1 = d2, t3 = Math.round(h.x2 - $ - Y2 > l.width - q ? l.width - q : h.x2 - $ - Y2), a[f]._labels && 1 < a[f]._labels.length && (p2 = k = 0, k = a[f]._labels[1], p2 = "dateTime" === a[f].valueType ? a[f]._labels[a[f]._labels.length - 2] : a[f]._labels[a[f]._labels.length - 1], x = k.textBlock.width * Math.cos(Math.PI / 180 * Math.abs(k.textBlock.angle)) + (k.textBlock.height - p2.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(k.textBlock.angle)), s = p2.textBlock.width * Math.cos(Math.PI / 180 * Math.abs(p2.textBlock.angle)) + (p2.textBlock.height - p2.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(p2.textBlock.angle))), !a[f] || (!a[f].labelAutoFit || n(C) || n(G2) || l.isNavigator || l.stockChart) || (p2 = 0, 0 < a[f].labelAngle ? G2 + s > t3 && (p2 += 0 < a[f].labelAngle ? G2 + s - t3 - $ : 0) : 0 > a[f].labelAngle ? C - x < d2 && C - x < a[f].viewportMinimum && (H2 = d2 - (O + a[f].tickLength + A2 + C - x + a[f].labelFontSize / 2)) : 0 === a[f].labelAngle && (G2 + s > t3 && (p2 = G2 + s / 2 - t3 - $), C - x < d2 && C - x < a[f].viewportMinimum && (H2 = d2 - O - a[f].tickLength - A2 - C + x / 2)), a[f].viewportMaximum === a[f].maximum && a[f].viewportMinimum === a[f].minimum && 0 < a[f].labelAngle && 0 < p2 ? t3 -= p2 : a[f].viewportMaximum === a[f].maximum && a[f].viewportMinimum === a[f].minimum && 0 > a[f].labelAngle && 0 < H2 ? d2 += H2 : a[f].viewportMaximum === a[f].maximum && a[f].viewportMinimum === a[f].minimum && 0 === a[f].labelAngle && (0 < H2 && (d2 += H2), 0 < p2 && (t3 -= p2))), l.panEnabled ? W3 = n(l.sessionVariables.axisX.height) || l.stockChart ? l.sessionVariables.axisX.height = W3 : l.sessionVariables.axisX.height : l.sessionVariables.axisX.height = W3, p2 = Math.round(h.y2 - W3 - e + E), k = Math.round(h.y2), a[f].lineCoordinates.x2 = t3, a[f].lineCoordinates.width = t3 - d2, a[f].lineCoordinates.y1 = p2, a[f].lineCoordinates.y2 = p2, "inside" === a[f].labelPlacement && 0 < f && (a[f].lineCoordinates.y1 = a[0].lineCoordinates.y2 + E + (a[f].labelEffectiveHeight || 0), a[f].lineCoordinates.y2 = a[f].lineCoordinates.y1 + a[f].lineThickness / 2), "inside" === a[f].tickPlacement && 0 < f && (a[f].lineCoordinates.y1 += a[f].tickLength, a[f].lineCoordinates.y2 = a[f].lineCoordinates.y1 + a[f].lineThickness / 2), a[f].bounds = { x1: d2, y1: p2, x2: t3, y2: k - (W3 + e - z[f] - E), width: t3 - d2 }, a[f].bounds.height = a[f].bounds.y2 - a[f].bounds.y1), E += z[f] + a[f].margin;
              if (g && 0 < g.length)
                for (f = 0; f < g.length; f++)
                  g[f].lineCoordinates.x1 = Math.round(h.x1 + R + O), g[f].lineCoordinates.x2 = Math.round(h.x2 - $ - Y2 > l.width - q ? l.width - q : h.x2 - $ - Y2), g[f].lineCoordinates.width = Math.abs(t3 - d2), g[f]._labels && 1 < g[f]._labels.length && (k = g[f]._labels[1], p2 = "dateTime" === g[f].valueType ? g[f]._labels[g[f]._labels.length - 2] : g[f]._labels[g[f]._labels.length - 1], x = k.textBlock.width * Math.cos(Math.PI / 180 * Math.abs(k.textBlock.angle)) + (k.textBlock.height - p2.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(k.textBlock.angle)), s = p2.textBlock.width * Math.cos(Math.PI / 180 * Math.abs(p2.textBlock.angle)) + (p2.textBlock.height - p2.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(p2.textBlock.angle))), l.panEnabled ? X2 = n(l.sessionVariables.axisX2.height) || l.stockChart ? l.sessionVariables.axisX2.height = X2 : l.sessionVariables.axisX2.height : l.sessionVariables.axisX2.height = X2, p2 = Math.round(h.y1), k = g[f].lineCoordinates.y1 = p2 + X2 + V3 - S3, g[f].lineCoordinates.y2 = p2, "inside" === g[f].labelPlacement && 0 < f && (g[f].lineCoordinates.y1 = g[0].lineCoordinates.y1 - S3 - (g[f].labelEffectiveHeight || 0) - 5), "inside" === g[f].tickPlacement && 0 < f && (g[f].lineCoordinates.y1 -= g[f].tickLength), g[f].bounds = { x1: d2, y1: p2 + (X2 + V3 - ("inside" === g[f].labelPlacement && 0 === f ? u[f] - 5 : u[f]) - S3), x2: t3, y2: k, width: t3 - d2 }, g[f].bounds.height = g[f].bounds.y2 - g[f].bounds.y1, S3 += ("inside" === g[f].labelPlacement && 0 === f ? u[f] - 5 : u[f]) + g[f].margin;
              if (c && 0 < c.length)
                for (f = 0; f < c.length; f++)
                  O = l.isNavigator ? 0 : 10, c[f] && (d2 = Math.round(a[0] ? a[0].lineCoordinates.x1 : g[0].lineCoordinates.x1), O = c[f]._labels && 0 < c[f]._labels.length ? c[f]._labels[c[f]._labels.length - 1].textBlock.height / 2 : q, p2 = Math.round(h.y1 + X2 + V3 < Math.max(O, q) ? Math.max(O, q) : h.y1 + X2 + V3), t3 = Math.round(a[0] ? a[0].lineCoordinates.x1 : g[0].lineCoordinates.x1), O = 0 < a.length ? 0 : c[f]._labels && 0 < c[f]._labels.length ? c[f]._labels[0].textBlock.height / 2 : q, k = Math.round(h.y2 - W3 - e - O), c[f].lineCoordinates = { x1: d2 - U2, y1: p2, x2: t3 - U2, y2: k, height: Math.abs(k - p2) }, "inside" === c[f].labelPlacement && 0 < f && (c[f].lineCoordinates.x1 = c[0].lineCoordinates.x1 - U2 - (c[f].labelEffectiveWidth || 0) - 5, c[f].lineCoordinates.x2 = c[f].lineCoordinates.x1 + c[f].lineThickness / 2), "inside" === c[f].tickPlacement && 0 < f && (c[f].lineCoordinates.x1 -= c[f].tickLength, c[f].lineCoordinates.x2 = c[f].lineCoordinates.x1 + c[f].lineThickness / 2), c[f].bounds = { x1: d2 - (("inside" === c[f].labelPlacement && 0 === f ? A2[f] - 5 : A2[f]) + U2), y1: p2, x2: t3 - U2, y2: k, height: k - p2 }, c[f].bounds.width = c[f].bounds.x2 - c[f].bounds.x1, c[f].title && (c[f]._titleTextBlock.maxWidth = 0 < c[f].titleMaxWidth && c[f].titleMaxWidth < c[f].lineCoordinates.height ? c[f].titleMaxWidth : c[f].lineCoordinates.height), U2 += ("inside" === c[f].labelPlacement && 0 === f ? A2[f] - 5 : A2[f]) + c[f].margin);
              if (b && 0 < b.length)
                for (f = 0; f < b.length; f++)
                  b[f] && (d2 = Math.round(a[0] ? a[0].lineCoordinates.x2 : g[0].lineCoordinates.x2), t3 = Math.round(d2), O = b[f]._labels && 0 < b[f]._labels.length ? b[f]._labels[b[f]._labels.length - 1].textBlock.height / 2 : 0, p2 = Math.round(h.y1 + X2 + V3 < Math.max(O, q) ? Math.max(O, q) : h.y1 + X2 + V3), O = 0 < a.length ? 0 : b[f]._labels && 0 < b[f]._labels.length ? b[f]._labels[0].textBlock.height / 2 : 0, k = Math.round(h.y2 - (W3 + e + O)), b[f].lineCoordinates = { x1: d2 + T, y1: p2, x2: d2 + T, y2: k, height: Math.abs(k - p2) }, "inside" === b[f].labelPlacement && 0 < f && (b[f].lineCoordinates.x1 = b[0].lineCoordinates.x2 + T + (b[f].labelEffectiveWidth || 0) + 5, b[f].lineCoordinates.x2 = b[f].lineCoordinates.x1 + b[f].lineThickness / 2), "inside" === b[f].tickPlacement && 0 < f && (b[f].lineCoordinates.x1 += b[f].tickLength, b[f].lineCoordinates.x2 = b[f].lineCoordinates.x1 + b[f].lineThickness / 2), b[f].bounds = { x1: d2 + T, y1: p2, x2: t3 + (("inside" === b[f].labelPlacement && 0 === f ? B3[f] - 5 : B3[f]) + T), y2: k, height: k - p2 }, b[f].bounds.width = b[f].bounds.x2 - b[f].bounds.x1, b[f].title && (b[f]._titleTextBlock.maxWidth = 0 < b[f].titleMaxWidth && b[f].titleMaxWidth < b[f].lineCoordinates.height ? b[f].titleMaxWidth : b[f].lineCoordinates.height), T += ("inside" === b[f].labelPlacement && 0 === f ? B3[f] - 5 : B3[f]) + b[f].margin);
              if (a && 0 < a.length)
                for (f = 0; f < a.length; f++)
                  a[f] && (a[f].calculateValueToPixelConversionParameters(), a[f].calculateBreaksSizeInValues(), a[f]._labels && 1 < a[f]._labels.length && (C = (a[f].logarithmic ? Math.log(a[f]._labels[1].position / a[f].viewportMinimum) / a[f].conversionParameters.lnLogarithmBase : a[f]._labels[1].position - a[f].viewportMinimum) * Math.abs(a[f].conversionParameters.pixelPerUnit) + a[f].lineCoordinates.x1, d2 = a[f]._labels[a[f]._labels.length - ("dateTime" === a[f].valueType ? 2 : 1)].position, d2 = a[f].getApparentDifference(a[f].viewportMinimum, d2), G2 = a[f].logarithmic ? (1 < d2 ? Math.log(d2) / a[f].conversionParameters.lnLogarithmBase * Math.abs(a[f].conversionParameters.pixelPerUnit) : 0) + a[f].lineCoordinates.x1 : (0 < d2 ? d2 * Math.abs(a[f].conversionParameters.pixelPerUnit) : 0) + a[f].lineCoordinates.x1));
              if (g && 0 < g.length)
                for (f = 0; f < g.length; f++)
                  g[f].calculateValueToPixelConversionParameters(), g[f].calculateBreaksSizeInValues(), g[f]._labels && 1 < g[f]._labels.length && (C = (g[f].logarithmic ? Math.log(g[f]._labels[1].position / g[f].viewportMinimum) / g[f].conversionParameters.lnLogarithmBase : g[f]._labels[1].position - g[f].viewportMinimum) * Math.abs(g[f].conversionParameters.pixelPerUnit) + g[f].lineCoordinates.x1, d2 = g[f]._labels[g[f]._labels.length - ("dateTime" === g[f].valueType ? 2 : 1)].position, d2 = g[f].getApparentDifference(g[f].viewportMinimum, d2), G2 = g[f].logarithmic ? (1 < d2 ? Math.log(d2) / g[f].conversionParameters.lnLogarithmBase * Math.abs(g[f].conversionParameters.pixelPerUnit) : 0) + g[f].lineCoordinates.x1 : (0 < d2 ? d2 * Math.abs(g[f].conversionParameters.pixelPerUnit) : 0) + g[f].lineCoordinates.x1);
              for (f = 0; f < r.length; f++)
                "axisY" === r[f].type && (r[f].calculateValueToPixelConversionParameters(), r[f].calculateBreaksSizeInValues());
              if (0 < w) {
                if (a && 0 < a.length)
                  for (f = 0; f < a.length; f++)
                    v2 = M2[w - 1][f] === M2[w][f] ? true : false;
                else
                  v2 = true;
                if (g && 0 < g.length)
                  for (f = 0; f < g.length; f++)
                    J = P[w - 1][f] === P[w][f] ? true : false;
                else
                  J = true;
                if (c && 0 < c.length)
                  for (f = 0; f < c.length; f++)
                    K = N2[w - 1][f] === N2[w][f] ? true : false;
                else
                  K = true;
                if (b && 0 < b.length)
                  for (f = 0; f < b.length; f++)
                    L2 = Q2[w - 1][f] === Q2[w][f] ? true : false;
                else
                  L2 = true;
              }
              if (v2 && J && K && L2)
                break;
              w++;
            }
            if (a && 0 < a.length)
              for (f = 0; f < a.length; f++)
                a[f].calculateStripLinesThicknessInValues(), a[f].calculateBreaksInPixels();
            if (g && 0 < g.length)
              for (f = 0; f < g.length; f++)
                g[f].calculateStripLinesThicknessInValues(), g[f].calculateBreaksInPixels();
            if (c && 0 < c.length)
              for (f = 0; f < c.length; f++)
                c[f].calculateStripLinesThicknessInValues(), c[f].calculateBreaksInPixels();
            if (b && 0 < b.length)
              for (f = 0; f < b.length; f++)
                b[f].calculateStripLinesThicknessInValues(), b[f].calculateBreaksInPixels();
          } else {
            q = [];
            C = [];
            H2 = [];
            x = [];
            G2 = [];
            s = [];
            M2 = [];
            for (P = []; 4 > w; ) {
              W3 = T = U2 = Y2 = O = V3 = e = Q2 = N2 = E = X2 = 0;
              if (a && 0 < a.length)
                for (H2 = [], f = T = 0; f < a.length; f++)
                  H2.push(Math.ceil(a[f] ? a[f].createLabelsAndCalculateWidth() : 0)), T += H2[f], e += a[f] && !l.isNavigator ? a[f].margin : 0;
              else
                H2.push(Math.ceil(a[0] ? a[0].createLabelsAndCalculateWidth() : 0));
              M2.push(H2);
              if (g && 0 < g.length)
                for (x = [], f = W3 = 0; f < g.length; f++)
                  x.push(Math.ceil(g[f] ? g[f].createLabelsAndCalculateWidth() : 0)), W3 += x[f], V3 += g[f] ? g[f].margin : 0;
              else
                x.push(Math.ceil(g[0] ? g[0].createLabelsAndCalculateWidth() : 0));
              P.push(x);
              if (c && 0 < c.length)
                for (f = 0; f < c.length; f++)
                  c[f].lineCoordinates = {}, d2 = Math.round(h.x1 + T + e), t3 = Math.round(h.x2 - W3 - V3 > l.width - 10 ? l.width - 10 : h.x2 - W3 - V3), c[f].labelAutoFit && !n(z) && (0 < !a.length && (d2 = 0 > c[f].labelAngle ? Math.max(d2, z) : 0 === c[f].labelAngle ? Math.max(d2, z / 2) : d2), 0 < !g.length && (t3 = 0 < c[f].labelAngle ? t3 - u / 2 : 0 === c[f].labelAngle ? t3 - u / 2 : t3)), c[f].lineCoordinates.x1 = d2, c[f].lineCoordinates.x2 = t3, c[f].lineCoordinates.width = Math.abs(t3 - d2), c[f].title && (c[f]._titleTextBlock.maxWidth = 0 < c[f].titleMaxWidth && c[f].titleMaxWidth < c[f].lineCoordinates.width ? c[f].titleMaxWidth : c[f].lineCoordinates.width);
              if (b && 0 < b.length)
                for (f = 0; f < b.length; f++)
                  b[f].lineCoordinates = {}, d2 = Math.round(h.x1 + T + e), t3 = Math.round(h.x2 - W3 - V3 > b[f].chart.width - 10 ? b[f].chart.width - 10 : h.x2 - W3 - V3), b[f] && b[f].labelAutoFit && !n(A2) && (0 < !a.length && (d2 = 0 < b[f].labelAngle ? Math.max(d2, A2) : 0 === b[f].labelAngle ? Math.max(d2, A2 / 2) : d2), 0 < !g.length && (t3 -= B3 / 2)), b[f].lineCoordinates.x1 = d2, b[f].lineCoordinates.x2 = t3, b[f].lineCoordinates.width = Math.abs(t3 - d2), b[f].title && (b[f]._titleTextBlock.maxWidth = 0 < b[f].titleMaxWidth && b[f].titleMaxWidth < b[f].lineCoordinates.width ? b[f].titleMaxWidth : b[f].lineCoordinates.width);
              if (c && 0 < c.length)
                for (q = [], f = U2 = 0; f < c.length; f++)
                  q.push(Math.ceil(c[f] ? c[f].createLabelsAndCalculateHeight() : 0)), U2 += q[f] + c[f].margin, O += c[f].margin;
              else
                q.push(Math.ceil(c[0] ? c[0].createLabelsAndCalculateHeight() : 0));
              G2.push(q);
              if (b && 0 < b.length)
                for (C = [], f = 0; f < b.length; f++)
                  C.push(Math.ceil(b[f] ? b[f].createLabelsAndCalculateHeight() : 0)), Y2 += b[f].margin;
              else
                C.push(Math.ceil(b[0] ? b[0].createLabelsAndCalculateHeight() : 0));
              s.push(C);
              if (c && 0 < c.length)
                for (f = 0; f < c.length; f++)
                  0 < c[f]._labels.length && (k = c[f]._labels[0], p2 = c[f]._labels[c[f]._labels.length - 1], z = k.textBlock.width * Math.cos(Math.PI / 180 * Math.abs(k.textBlock.angle)) + (k.textBlock.height - p2.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(k.textBlock.angle)), u = p2.textBlock.width * Math.cos(Math.PI / 180 * Math.abs(p2.textBlock.angle)) + (p2.textBlock.height - p2.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(p2.textBlock.angle)));
              if (b && 0 < b.length)
                for (f = 0; f < b.length; f++)
                  b[f] && 0 < b[f]._labels.length && (k = b[f]._labels[0], p2 = b[f]._labels[b[f]._labels.length - 1], A2 = k.textBlock.width * Math.cos(Math.PI / 180 * Math.abs(k.textBlock.angle)) + (k.textBlock.height - p2.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(k.textBlock.angle)), B3 = p2.textBlock.width * Math.cos(Math.PI / 180 * Math.abs(p2.textBlock.angle)) + (p2.textBlock.height - p2.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(p2.textBlock.angle)));
              if (l.panEnabled)
                for (f = 0; f < c.length; f++)
                  q[f] = n(l.sessionVariables.axisY[f].height) ? l.sessionVariables.axisY[f].height = q[f] : l.sessionVariables.axisY[f].height;
              else
                for (f = 0; f < c.length; f++)
                  l.sessionVariables.axisY[f].height = q[f];
              if (c && 0 < c.length)
                for (f = c.length - 1; 0 <= f; f--)
                  p2 = Math.round(h.y2), k = Math.round(h.y2 > c[f].chart.height ? c[f].chart.height : h.y2), c[f].lineCoordinates.y1 = p2 - (q[f] + c[f].margin + X2), c[f].lineCoordinates.y2 = p2 - (q[f] + c[f].margin + X2), "inside" === c[f].labelPlacement && 0 < f && (c[f].lineCoordinates.y1 = c[f].lineCoordinates.y1 + q[f] - (c[f]._titleTextBlock ? c[f]._titleTextBlock.height : 0) - c[f].tickLength - (c[f].stripLineLabelEffectiveHeight || 0) - 5, c[f].lineCoordinates.y2 = c[f].lineCoordinates.y1 + c[f].lineThickness / 2), "inside" === c[f].tickPlacement && 0 < f && (c[f].lineCoordinates.y1 += c[f].tickLength, c[f].lineCoordinates.y2 = c[f].lineCoordinates.y1 + c[f].lineThickness / 2), c[f].bounds = { x1: d2, y1: p2 - (q[f] + X2 + c[f].margin), x2: t3, y2: k - (X2 + c[f].margin), width: t3 - d2, height: q[f] }, c[f].title && (c[f]._titleTextBlock.maxWidth = 0 < c[f].titleMaxWidth && c[f].titleMaxWidth < c[f].lineCoordinates.width ? c[f].titleMaxWidth : c[f].lineCoordinates.width), X2 += q[f] + c[f].margin;
              if (b && 0 < b.length)
                for (f = b.length - 1; 0 <= f; f--)
                  b[f] && (p2 = Math.round(h.y1), k = Math.round(h.y1 + (C[f] + b[f].margin + E)), b[f].lineCoordinates.y1 = k, b[f].lineCoordinates.y2 = k, "inside" === b[f].labelPlacement && 0 < f && (b[f].lineCoordinates.y1 = k - C[f] + (b[f]._titleTextBlock ? b[f]._titleTextBlock.height : 0) + b[f].tickLength + (b[f].stripLineLabelEffectiveHeight || 0), b[f].lineCoordinates.y2 = b[f].lineCoordinates.y1 - b[f].lineThickness / 2), "inside" === b[f].tickPlacement && 0 < f && (b[f].lineCoordinates.y1 -= b[f].tickLength, b[f].lineCoordinates.y2 = b[f].lineCoordinates.y1 - b[f].lineThickness / 2), b[f].bounds = { x1: d2, y1: p2 + (b[f].margin + E), x2: t3, y2: k, width: t3 - d2 }, b[f].bounds.height = b[f].bounds.y2 - b[f].bounds.y1, b[f].title && (b[f]._titleTextBlock.maxWidth = 0 < b[f].titleMaxWidth && b[f].titleMaxWidth < b[f].lineCoordinates.width ? b[f].titleMaxWidth : b[f].lineCoordinates.width), E += C[f] + b[f].margin);
              if (a && 0 < a.length)
                for (f = 0; f < a.length; f++) {
                  O = a[f]._labels && 0 < a[f]._labels.length ? a[f]._labels[0].textBlock.fontSize / 2 : 0;
                  d2 = Math.round(h.x1 + e);
                  p2 = b && 0 < b.length ? Math.round(b[0] ? b[0].lineCoordinates.y2 : h.y1 < Math.max(O, 10) ? Math.max(O, 10) : h.y1) : h.y1 < Math.max(O, 10) ? Math.max(O, 10) : h.y1;
                  t3 = Math.round(h.x1 + T + e);
                  k = c && 0 < c.length ? Math.round(c[0] ? c[0].lineCoordinates.y1 : h.y2 - U2 > l.height - Math.max(O, 10) ? l.height - Math.max(O, 10) : h.y2 - U2) : h.y2 > l.height - Math.max(O, 10) ? l.height - Math.max(O, 10) : h.y2;
                  if (c && 0 < c.length)
                    for (O = 0; O < c.length; O++)
                      c[O] && c[O].labelAutoFit && (t3 = c[O].lineCoordinates.x1, d2 = 0 > c[O].labelAngle || 0 === c[O].labelAngle ? t3 - T : d2);
                  if (b && 0 < b.length)
                    for (O = 0; O < b.length; O++)
                      b[O] && b[O].labelAutoFit && (t3 = b[O].lineCoordinates.x1, d2 = t3 - T);
                  a[f].lineCoordinates = { x1: t3 - N2, y1: p2, x2: t3 - N2, y2: k, height: Math.abs(k - p2) };
                  "inside" === a[f].labelPlacement && 0 < f && (a[f].lineCoordinates.x1 = a[f].lineCoordinates.x1 - (H2[f] - (a[f]._titleTextBlock ? a[f]._titleTextBlock.height : 0)) + a[f].tickLength + (a[f].stripLineLabelEffectiveWidth || 0), a[f].lineCoordinates.x2 = a[f].lineCoordinates.x1 + a[f].lineThickness / 2);
                  "inside" === a[f].tickPlacement && 0 < f && (a[f].lineCoordinates.x1 -= a[f].tickLength, a[f].lineCoordinates.x2 = a[f].lineCoordinates.x1 + a[f].lineThickness / 2);
                  a[f].bounds = { x1: t3 - (H2[f] + N2), y1: p2, x2: t3 - N2, y2: k, height: k - p2 };
                  a[f].bounds.width = a[f].bounds.x2 - a[f].bounds.x1;
                  a[f].title && (a[f]._titleTextBlock.maxWidth = 0 < a[f].titleMaxWidth && a[f].titleMaxWidth < a[f].lineCoordinates.height ? a[f].titleMaxWidth : a[f].lineCoordinates.height);
                  a[f].calculateValueToPixelConversionParameters();
                  a[f].calculateBreaksSizeInValues();
                  N2 += H2[f] + a[f].margin;
                }
              if (g && 0 < g.length)
                for (f = 0; f < g.length; f++) {
                  O = g[f]._labels && 0 < g[f]._labels.length ? g[f]._labels[0].textBlock.fontSize / 2 : 0;
                  d2 = Math.round(h.x1 - e);
                  p2 = b && 0 < b.length ? Math.round(b[0] ? b[0].lineCoordinates.y2 : h.y1 < Math.max(O, 10) ? Math.max(O, 10) : h.y1) : h.y1 < Math.max(O, 10) ? Math.max(O, 10) : h.y1;
                  t3 = Math.round(h.x2 - W3 - V3);
                  k = c && 0 < c.length ? Math.round(c[0] ? c[0].lineCoordinates.y1 : h.y2 - U2 > l.height - Math.max(O, 10) ? l.height - Math.max(O, 10) : h.y2 - U2) : h.y2 > l.height - Math.max(O, 10) ? l.height - Math.max(O, 10) : h.y2;
                  if (c && 0 < c.length)
                    for (O = 0; O < c.length; O++)
                      c[O] && c[O].labelAutoFit && (t3 = 0 > c[O].labelAngle ? Math.max(t3, z) : 0 === c[O].labelAngle ? Math.max(t3, z / 2) : t3, d2 = 0 > c[O].labelAngle || 0 === c[O].labelAngle ? t3 - W3 : d2);
                  if (b && 0 < b.length)
                    for (O = 0; O < b.length; O++)
                      b[O] && b[O].labelAutoFit && (t3 = b[O].lineCoordinates.x2, d2 = t3 - W3);
                  g[f].lineCoordinates = { x1: t3 + Q2, y1: p2, x2: t3 + Q2, y2: k, height: Math.abs(k - p2) };
                  "inside" === g[f].labelPlacement && 0 < f && (g[f].lineCoordinates.x1 = g[f].lineCoordinates.x1 + (x[f] - (g[f]._titleTextBlock ? g[f]._titleTextBlock.height : 0) - 2) - g[f].tickLength - (g[f].stripLineLabelEffectiveWidth || 0), g[f].lineCoordinates.x2 = g[f].lineCoordinates.x1 + g[f].lineThickness / 2);
                  "inside" === g[f].tickPlacement && 0 < f && (g[f].lineCoordinates.x1 += g[f].tickLength, g[f].lineCoordinates.x2 = g[f].lineCoordinates.x1 + g[f].lineThickness / 2);
                  g[f].bounds = { x1: g[f].lineCoordinates.x1, y1: p2, x2: t3 + x[f] + Q2, y2: k, width: t3 - d2, height: k - p2 };
                  g[f].bounds.width = g[f].bounds.x2 - g[f].bounds.x1;
                  g[f].title && (g[f]._titleTextBlock.maxWidth = 0 < g[f].titleMaxWidth && g[f].titleMaxWidth < g[f].lineCoordinates.height ? g[f].titleMaxWidth : g[f].lineCoordinates.height);
                  g[f].calculateValueToPixelConversionParameters();
                  g[f].calculateBreaksSizeInValues();
                  Q2 += x[f] + g[f].margin;
                }
              for (f = 0; f < r.length; f++)
                "axisY" === r[f].type && (r[f].calculateValueToPixelConversionParameters(), r[f].calculateBreaksSizeInValues());
              if (0 < w) {
                if (a && 0 < a.length)
                  for (f = 0; f < a.length; f++)
                    v2 = M2[w - 1][f] === M2[w][f] ? true : false;
                else
                  v2 = true;
                if (g && 0 < g.length)
                  for (f = 0; f < g.length; f++)
                    J = P[w - 1][f] === P[w][f] ? true : false;
                else
                  J = true;
                if (c && 0 < c.length)
                  for (f = 0; f < c.length; f++)
                    K = G2[w - 1][f] === G2[w][f] ? true : false;
                else
                  K = true;
                if (b && 0 < b.length)
                  for (f = 0; f < b.length; f++)
                    L2 = s[w - 1][f] === s[w][f] ? true : false;
                else
                  L2 = true;
              }
              if (v2 && J && K && L2)
                break;
              w++;
            }
            if (c && 0 < c.length)
              for (f = 0; f < c.length; f++)
                c[f].calculateStripLinesThicknessInValues(), c[f].calculateBreaksInPixels();
            if (b && 0 < b.length)
              for (f = 0; f < b.length; f++)
                b[f].calculateStripLinesThicknessInValues(), b[f].calculateBreaksInPixels();
            if (a && 0 < a.length)
              for (f = 0; f < a.length; f++)
                a[f].calculateStripLinesThicknessInValues(), a[f].calculateBreaksInPixels();
            if (g && 0 < g.length)
              for (f = 0; f < g.length; f++)
                g[f].calculateStripLinesThicknessInValues(), g[f].calculateBreaksInPixels();
          }
        };
        A.render = function(a, g, c, b, e) {
          e = a[0] ? a[0].chart : g[0].chart;
          var h = e.ctx;
          e.alignVerticalAxes && e.alignVerticalAxes();
          h.save();
          h.beginPath();
          a && a.length && h.rect(2, a[0].bounds.y1, a[0].chart.width - 4, a[a.length - 1].bounds.y2);
          g && g.length && h.rect(2, g[g.length - 1].bounds.y1, g[0].chart.width - 4, g[0].bounds.y2);
          h.clip();
          if (a && 0 < a.length)
            for (var d2 = 0; d2 < a.length; d2++)
              a[d2].renderLabelsTicksAndTitle();
          if (g && 0 < g.length)
            for (d2 = 0; d2 < g.length; d2++)
              g[d2].renderLabelsTicksAndTitle();
          h.restore();
          if (c && 0 < c.length)
            for (d2 = 0; d2 < c.length; d2++)
              c[d2].renderLabelsTicksAndTitle();
          if (b && 0 < b.length)
            for (d2 = 0; d2 < b.length; d2++)
              b[d2].renderLabelsTicksAndTitle();
          e.preparePlotArea();
          d2 = e.plotArea;
          h.save();
          h.beginPath();
          h.rect(d2.x1, d2.y1, Math.abs(d2.x2 - d2.x1), Math.abs(d2.y2 - d2.y1));
          h.clip();
          if (a && 0 < a.length)
            for (d2 = 0; d2 < a.length; d2++)
              a[d2].renderStripLinesOfThicknessType("value");
          if (g && 0 < g.length)
            for (d2 = 0; d2 < g.length; d2++)
              g[d2].renderStripLinesOfThicknessType("value");
          if (c && 0 < c.length)
            for (d2 = 0; d2 < c.length; d2++)
              c[d2].renderStripLinesOfThicknessType("value");
          if (b && 0 < b.length)
            for (d2 = 0; d2 < b.length; d2++)
              b[d2].renderStripLinesOfThicknessType("value");
          if (a && 0 < a.length)
            for (d2 = 0; d2 < a.length; d2++)
              a[d2].renderInterlacedColors();
          if (g && 0 < g.length)
            for (d2 = 0; d2 < g.length; d2++)
              g[d2].renderInterlacedColors();
          if (c && 0 < c.length)
            for (d2 = 0; d2 < c.length; d2++)
              c[d2].renderInterlacedColors();
          if (b && 0 < b.length)
            for (d2 = 0; d2 < b.length; d2++)
              b[d2].renderInterlacedColors();
          h.restore();
          if (a && 0 < a.length)
            for (d2 = 0; d2 < a.length; d2++)
              a[d2].renderGrid(), v && (a[d2].createMask(), a[d2].renderBreaksBackground());
          if (g && 0 < g.length)
            for (d2 = 0; d2 < g.length; d2++)
              g[d2].renderGrid(), v && (g[d2].createMask(), g[d2].renderBreaksBackground());
          if (c && 0 < c.length)
            for (d2 = 0; d2 < c.length; d2++)
              c[d2].renderGrid(), v && (c[d2].createMask(), c[d2].renderBreaksBackground());
          if (b && 0 < b.length)
            for (d2 = 0; d2 < b.length; d2++)
              b[d2].renderGrid(), v && (b[d2].createMask(), b[d2].renderBreaksBackground());
          if (a && 0 < a.length)
            for (d2 = 0; d2 < a.length; d2++)
              a[d2].renderAxisLine();
          if (g && 0 < g.length)
            for (d2 = 0; d2 < g.length; d2++)
              g[d2].renderAxisLine();
          if (c && 0 < c.length)
            for (d2 = 0; d2 < c.length; d2++)
              c[d2].renderAxisLine();
          if (b && 0 < b.length)
            for (d2 = 0; d2 < b.length; d2++)
              b[d2].renderAxisLine();
          h = false;
          if (a && 0 < a.length)
            for (d2 = 0; d2 < a.length; d2++)
              a[d2].renderStripLinesOfThicknessType("pixel"), a[d2].crosshair && a[d2].crosshair.enabled && (h = true, e.clearedOverlayedCanvas = a[d2].type);
          if (g && 0 < g.length)
            for (d2 = 0; d2 < g.length; d2++)
              g[d2].renderStripLinesOfThicknessType("pixel"), g[d2].crosshair && g[d2].crosshair.enabled && (h = true, e.clearedOverlayedCanvas = g[d2].type);
          if (c && 0 < c.length)
            for (d2 = 0; d2 < c.length; d2++)
              c[d2].renderStripLinesOfThicknessType("pixel"), c[d2].crosshair && c[d2].crosshair.enabled && (h = true, e.clearedOverlayedCanvas = c[d2].type);
          if (b && 0 < b.length)
            for (d2 = 0; d2 < b.length; d2++)
              b[d2].renderStripLinesOfThicknessType("pixel"), b[d2].crosshair && b[d2].crosshair.enabled && (h = true, e.clearedOverlayedCanvas = b[d2].type);
          h && (e.resetOverlayedCanvas(), e.renderCrosshairs());
        };
        A.prototype.calculateStripLinesThicknessInValues = function() {
          for (var a = 0; a < this.stripLines.length; a++)
            if (null !== this.stripLines[a].startValue && null !== this.stripLines[a].endValue) {
              var g = Math.min(this.stripLines[a].startValue, this.stripLines[a].endValue), c = Math.max(this.stripLines[a].startValue, this.stripLines[a].endValue), b = this.getApparentDifference(g, c);
              this.stripLines[a].value = this.convertPixelToValue(Math.abs(this.convertValueToPixel(g) + this.convertValueToPixel(c)) / 2);
              this.stripLines[a].thickness = b;
              this.stripLines[a]._thicknessType = "value";
            }
        };
        A.prototype.calculateBreaksSizeInValues = function() {
          for (var a = "left" === this._position || "right" === this._position ? this.lineCoordinates.height || this.chart.height : this.lineCoordinates.width || this.chart.width, g = this.scaleBreaks ? this.scaleBreaks._appliedBreaks : [], c = this.conversionParameters.pixelPerUnit || a / (this.logarithmic ? this.conversionParameters.maximum / this.conversionParameters.minimum : this.conversionParameters.maximum - this.conversionParameters.minimum), b = this.scaleBreaks && !n(this.scaleBreaks.options.spacing), e, h = 0; h < g.length; h++)
            e = b || !n(g[h].options.spacing), g[h].spacing = Ua(g[h].spacing, a, 8, e ? 0.1 * a : 8, e ? 0 : 3) << 0, g[h].size = 0 > g[h].spacing ? 0 : Math.abs(g[h].spacing / c), this.logarithmic && (g[h].size = Math.pow(this.logarithmBase, g[h].size));
        };
        A.prototype.calculateBreaksInPixels = function() {
          if (!(this.scaleBreaks && 0 >= this.scaleBreaks._appliedBreaks.length)) {
            var a = this.scaleBreaks ? this.scaleBreaks._appliedBreaks : [];
            a.length && (this.scaleBreaks.firstBreakIndex = this.scaleBreaks.lastBreakIndex = null);
            for (var g = 0; g < a.length && !(a[g].startValue > this.conversionParameters.maximum); g++)
              a[g].endValue < this.conversionParameters.minimum || (n(this.scaleBreaks.firstBreakIndex) && (this.scaleBreaks.firstBreakIndex = g), a[g].startValue >= this.conversionParameters.minimum && (a[g].startPixel = this.convertValueToPixel(a[g].startValue), this.scaleBreaks.lastBreakIndex = g), a[g].endValue <= this.conversionParameters.maximum && (a[g].endPixel = this.convertValueToPixel(a[g].endValue)));
          }
        };
        A.prototype.renderLabelsTicksAndTitle = function() {
          var a = this, g = false, c = 0, b = 0, e = 1, h = 0;
          0 !== this.labelAngle && 360 !== this.labelAngle && (e = 1.2);
          if ("undefined" === typeof this.options.interval) {
            if ("bottom" === this._position || "top" === this._position)
              if (this.logarithmic && !this.equidistantInterval && this.labelAutoFit) {
                for (var c = [], e = 0 !== this.labelAngle && 360 !== this.labelAngle ? 1 : 1.2, d2, n2 = this.viewportMaximum, p2 = this.lineCoordinates.width / Math.log(this.range), k = this._labels.length - 1; 0 <= k; k--) {
                  q = this._labels[k];
                  if (q.position < this.viewportMinimum)
                    break;
                  q.position > this.viewportMaximum || !(k === this._labels.length - 1 || d2 < Math.log(n2 / q.position) * p2 / e) || (c.push(q), n2 = q.position, d2 = q.textBlock.width * Math.abs(Math.cos(Math.PI / 180 * this.labelAngle)) + q.textBlock.height * Math.abs(Math.sin(Math.PI / 180 * this.labelAngle)));
                }
                this._labels = c;
              } else {
                for (k = 0; k < this._labels.length; k++)
                  q = this._labels[k], q.position < this.viewportMinimum || (d2 = q.textBlock.width * Math.abs(Math.cos(Math.PI / 180 * this.labelAngle)) + q.textBlock.height * Math.abs(Math.sin(Math.PI / 180 * this.labelAngle)), c += d2);
                c > this.lineCoordinates.width * e && this.labelAutoFit && (g = true);
              }
            if ("left" === this._position || "right" === this._position)
              if (this.logarithmic && !this.equidistantInterval && this.labelAutoFit) {
                for (var c = [], l, n2 = this.viewportMaximum, p2 = this.lineCoordinates.height / Math.log(this.range), k = this._labels.length - 1; 0 <= k; k--) {
                  q = this._labels[k];
                  if (q.position < this.viewportMinimum)
                    break;
                  q.position > this.viewportMaximum || !(k === this._labels.length - 1 || l < Math.log(n2 / q.position) * p2) || (c.push(q), n2 = q.position, l = q.textBlock.height * Math.abs(Math.cos(Math.PI / 180 * this.labelAngle)) + q.textBlock.width * Math.abs(Math.sin(Math.PI / 180 * this.labelAngle)));
                }
                this._labels = c;
              } else {
                for (k = 0; k < this._labels.length; k++)
                  q = this._labels[k], q.position < this.viewportMinimum || (l = q.textBlock.height * Math.abs(Math.cos(Math.PI / 180 * this.labelAngle)) + q.textBlock.width * Math.abs(Math.sin(Math.PI / 180 * this.labelAngle)), b += l);
                b > this.lineCoordinates.height * e && this.labelAutoFit && (g = true);
              }
          }
          this.logarithmic && (!this.equidistantInterval && this.labelAutoFit) && this._labels.sort(function(a2, b2) {
            return a2.position - b2.position;
          });
          var k = 0, q, r;
          if ("bottom" === this._position) {
            for (k = 0; k < this._labels.length; k++)
              q = this._labels[k], q.position < this.viewportMinimum || q.position > this.viewportMaximum || (r = this.getPixelCoordinatesOnAxis(q.position), this.tickThickness && "inside" != this.tickPlacement && (this.ctx.lineWidth = this.tickThickness, this.ctx.strokeStyle = this.tickColor, b = 1 === this.ctx.lineWidth % 2 ? (r.x << 0) + 0.5 : r.x << 0, this.ctx.beginPath(), this.ctx.moveTo(b, r.y << 0), this.ctx.lineTo(b, r.y + this.tickLength << 0), this.ctx.stroke()), g && 0 !== h++ % 2 && this.labelAutoFit || (0 === q.textBlock.angle ? (r.x -= q.textBlock.width / 2, r.y = "inside" === this.labelPlacement ? r.y - (("inside" === this.tickPlacement ? this.tickLength : 0) + q.textBlock.height - q.textBlock.fontSize / 2) : r.y + ("inside" === this.tickPlacement ? 0 : this.tickLength) + q.textBlock.fontSize / 2 + 5) : 0 > this.labelAngle ? (r.x -= "inside" === this.labelPlacement ? 0 : q.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle), r.y = "inside" === this.labelPlacement ? r.y - ("inside" === this.tickPlacement ? this.tickLength : 0) - (q.textBlock.height - q.textBlock.fontSize / 2) * Math.cos(Math.PI / 180 * this.labelAngle) : r.y + ("inside" === this.tickPlacement ? 0 : this.tickLength) + 5 + Math.abs(q.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle) - q.textBlock.fontSize / 2 * Math.cos(Math.PI / 180 * this.labelAngle))) : (r.x -= "inside" === this.labelPlacement ? q.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) : 0, r.y = "inside" === this.labelPlacement ? r.y - ("inside" === this.tickPlacement ? this.tickLength : 0) - q.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle) - (q.textBlock.height - q.textBlock.fontSize / 2) * Math.cos(Math.PI / 180 * this.labelAngle) : r.y + ("inside" === this.tickPlacement ? 0 : this.tickLength) + 5 + Math.abs(q.textBlock.fontSize / 2 * Math.cos(Math.PI / 180 * this.labelAngle))), q.textBlock.x = r.x, q.textBlock.y = r.y));
            "inside" === this.tickPlacement && this.chart.addEventListener("dataAnimationIterationEnd", function() {
              for (k = 0; k < a._labels.length; k++)
                if (q = a._labels[k], !(q.position < a.viewportMinimum || q.position > a.viewportMaximum) && (r = a.getPixelCoordinatesOnAxis(q.position), a.tickThickness)) {
                  a.ctx.lineWidth = a.tickThickness;
                  a.ctx.strokeStyle = a.tickColor;
                  var b2 = 1 === a.ctx.lineWidth % 2 ? (r.x << 0) + 0.5 : r.x << 0;
                  a.ctx.save();
                  a.ctx.beginPath();
                  a.ctx.moveTo(b2, r.y << 0);
                  a.ctx.lineTo(b2, r.y - a.tickLength << 0);
                  a.ctx.stroke();
                  a.ctx.restore();
                }
            }, this);
            this.title && (this._titleTextBlock.measureText(), this._titleTextBlock.x = this.lineCoordinates.x1 + this.lineCoordinates.width / 2 - this._titleTextBlock.width / 2, this._titleTextBlock.y = this.bounds.y2 - this._titleTextBlock.height + this._titleTextBlock._lineHeight / 2 - 1, this.titleMaxWidth = this._titleTextBlock.maxWidth, this._titleTextBlock.render(true));
          } else if ("top" === this._position) {
            for (k = 0; k < this._labels.length; k++)
              q = this._labels[k], q.position < this.viewportMinimum || q.position > this.viewportMaximum || (r = this.getPixelCoordinatesOnAxis(q.position), this.tickThickness && "inside" != this.tickPlacement && (this.ctx.lineWidth = this.tickThickness, this.ctx.strokeStyle = this.tickColor, b = 1 === this.ctx.lineWidth % 2 ? (r.x << 0) + 0.5 : r.x << 0, this.ctx.beginPath(), this.ctx.moveTo(b, r.y << 0), this.ctx.lineTo(b, r.y - this.tickLength << 0), this.ctx.stroke()), g && 0 !== h++ % 2 && this.labelAutoFit || (0 === q.textBlock.angle ? (r.x -= q.textBlock.width / 2, r.y = "inside" === this.labelPlacement ? r.y + this.labelFontSize / 2 + ("inside" === this.tickPlacement ? this.tickLength : 0) + 5 : r.y - (("inside" === this.tickPlacement ? 0 : this.tickLength) + q.textBlock.height - q.textBlock.fontSize / 2)) : 0 > this.labelAngle ? (r.x -= "inside" === this.labelPlacement ? q.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) : 0, r.y = "inside" === this.labelPlacement ? r.y + ("inside" === this.tickPlacement ? this.tickLength : 0) + 5 - q.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle) + q.textBlock.fontSize / 2 * Math.cos(Math.PI / 180 * this.labelAngle) : r.y - ("inside" === this.tickPlacement ? 0 : this.tickLength) - 2 - (q.textBlock.height - q.textBlock.fontSize / 2) * Math.cos(Math.PI / 180 * this.labelAngle)) : (r.x -= "inside" === this.labelPlacement ? 0 : q.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle), r.y = "inside" === this.labelPlacement ? r.y + ("inside" === this.tickPlacement ? this.tickLength : 0) + 5 + q.textBlock.fontSize / 2 * Math.cos(Math.PI / 180 * this.labelAngle) : r.y - ("inside" === this.tickPlacement ? 0 : this.tickLength) - 2 - ((q.textBlock.height - q.textBlock.fontSize / 2) * Math.cos(Math.PI / 180 * this.labelAngle) + q.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle))), q.textBlock.x = r.x, q.textBlock.y = r.y));
            "inside" === this.tickPlacement && this.chart.addEventListener("dataAnimationIterationEnd", function() {
              for (k = 0; k < a._labels.length; k++)
                if (q = a._labels[k], !(q.position < a.viewportMinimum || q.position > a.viewportMaximum) && (r = a.getPixelCoordinatesOnAxis(q.position), a.tickThickness)) {
                  a.ctx.lineWidth = a.tickThickness;
                  a.ctx.strokeStyle = a.tickColor;
                  var b2 = 1 === a.ctx.lineWidth % 2 ? (r.x << 0) + 0.5 : r.x << 0;
                  a.ctx.save();
                  a.ctx.beginPath();
                  a.ctx.moveTo(b2, r.y << 0);
                  a.ctx.lineTo(b2, r.y + a.tickLength << 0);
                  a.ctx.stroke();
                  a.ctx.restore();
                }
            }, this);
            this.title && (this._titleTextBlock.measureText(), this._titleTextBlock.x = this.lineCoordinates.x1 + this.lineCoordinates.width / 2 - this._titleTextBlock.width / 2, this._titleTextBlock.y = this.bounds.y1 + this._titleTextBlock._lineHeight / 2 + 1, this.titleMaxWidth = this._titleTextBlock.maxWidth, this._titleTextBlock.render(true));
          } else if ("left" === this._position) {
            for (k = 0; k < this._labels.length; k++)
              q = this._labels[k], q.position < this.viewportMinimum || q.position > this.viewportMaximum || (r = this.getPixelCoordinatesOnAxis(q.position), this.tickThickness && "inside" != this.tickPlacement && (this.ctx.lineWidth = this.tickThickness, this.ctx.strokeStyle = this.tickColor, b = 1 === this.ctx.lineWidth % 2 ? (r.y << 0) + 0.5 : r.y << 0, this.ctx.beginPath(), this.ctx.moveTo(r.x << 0, b), this.ctx.lineTo(r.x - this.tickLength << 0, b), this.ctx.stroke()), g && 0 !== h++ % 2 && this.labelAutoFit || (0 === this.labelAngle ? (q.textBlock.y = r.y, q.textBlock.x = "inside" === this.labelPlacement ? r.x + ("inside" === this.tickPlacement ? this.tickLength : 0) + 5 : r.x - q.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) - ("inside" === this.tickPlacement ? 0 : this.tickLength) - 5) : 0 > this.labelAngle ? (q.textBlock.y = "inside" === this.labelPlacement ? r.y : r.y - q.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle), q.textBlock.x = "inside" === this.labelPlacement ? r.x - q.textBlock.fontSize / 2 * Math.sin(Math.PI / 180 * this.labelAngle) + ("inside" === this.tickPlacement ? this.tickLength : 0) + 5 : r.x - q.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) + (q.textBlock.height - q.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * this.labelAngle) - ("inside" === this.tickPlacement ? 0 : this.tickLength) - 5) : (q.textBlock.y = "inside" === this.labelPlacement ? r.y : r.y - q.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle), q.textBlock.x = "inside" === this.labelPlacement ? r.x + (q.textBlock.height - q.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * this.labelAngle) + ("inside" === this.tickPlacement ? this.tickLength : 0) + 5 : r.x - q.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) - q.textBlock.fontSize / 2 * Math.sin(Math.PI / 180 * this.labelAngle) - ("inside" === this.tickPlacement ? 0 : this.tickLength) - 5)));
            "inside" === this.tickPlacement && this.chart.addEventListener("dataAnimationIterationEnd", function() {
              for (k = 0; k < a._labels.length; k++)
                if (q = a._labels[k], !(q.position < a.viewportMinimum || q.position > a.viewportMaximum) && (r = a.getPixelCoordinatesOnAxis(q.position), a.tickThickness)) {
                  a.ctx.lineWidth = a.tickThickness;
                  a.ctx.strokeStyle = a.tickColor;
                  var b2 = 1 === a.ctx.lineWidth % 2 ? (r.y << 0) + 0.5 : r.y << 0;
                  a.ctx.save();
                  a.ctx.beginPath();
                  a.ctx.moveTo(r.x << 0, b2);
                  a.ctx.lineTo(r.x + a.tickLength << 0, b2);
                  a.ctx.stroke();
                  a.ctx.restore();
                }
            }, this);
            this.title && (this._titleTextBlock.measureText(), this._titleTextBlock.x = this.bounds.x1 + this._titleTextBlock._lineHeight / 2, this._titleTextBlock.y = this.lineCoordinates.height / 2 + this._titleTextBlock.width / 2 + this.lineCoordinates.y1, this.titleMaxWidth = this._titleTextBlock.maxWidth, this._titleTextBlock.render(true));
          } else if ("right" === this._position) {
            for (k = 0; k < this._labels.length; k++)
              q = this._labels[k], q.position < this.viewportMinimum || q.position > this.viewportMaximum || (r = this.getPixelCoordinatesOnAxis(q.position), this.tickThickness && "inside" != this.tickPlacement && (this.ctx.lineWidth = this.tickThickness, this.ctx.strokeStyle = this.tickColor, b = 1 === this.ctx.lineWidth % 2 ? (r.y << 0) + 0.5 : r.y << 0, this.ctx.beginPath(), this.ctx.moveTo(r.x << 0, b), this.ctx.lineTo(r.x + this.tickLength << 0, b), this.ctx.stroke()), g && 0 !== h++ % 2 && this.labelAutoFit || (0 === this.labelAngle ? (q.textBlock.y = r.y, q.textBlock.x = "inside" === this.labelPlacement ? r.x - q.textBlock.width - ("inside" === this.tickPlacement ? this.tickLength : 0) - 5 : r.x + ("inside" === this.tickPlacement ? 0 : this.tickLength) + 5) : 0 > this.labelAngle ? (q.textBlock.y = "inside" === this.labelPlacement ? r.y - q.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle) : r.y, q.textBlock.x = "inside" === this.labelPlacement ? r.x - q.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) + (q.textBlock.height - q.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * this.labelAngle) - ("inside" === this.tickPlacement ? this.tickLength : 0) - 5 : r.x - q.textBlock.fontSize / 2 * Math.sin(Math.PI / 180 * this.labelAngle) + ("inside" === this.tickPlacement ? 0 : this.tickLength) + 5) : (q.textBlock.y = "inside" === this.labelPlacement ? r.y - q.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle) : r.y, q.textBlock.x = "inside" === this.labelPlacement ? r.x - q.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) - q.textBlock.fontSize / 2 * Math.sin(Math.PI / 180 * this.labelAngle) - ("inside" === this.tickPlacement ? this.tickLength : 0) - 5 : r.x + (q.textBlock.height - q.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * this.labelAngle) + ("inside" === this.tickPlacement ? 0 : this.tickLength) + 5)));
            "inside" === this.tickPlacement && this.chart.addEventListener("dataAnimationIterationEnd", function() {
              for (k = 0; k < a._labels.length; k++)
                if (q = a._labels[k], !(q.position < a.viewportMinimum || q.position > a.viewportMaximum) && (r = a.getPixelCoordinatesOnAxis(q.position), a.tickThickness)) {
                  a.ctx.lineWidth = a.tickThickness;
                  a.ctx.strokeStyle = a.tickColor;
                  var b2 = 1 === a.ctx.lineWidth % 2 ? (r.y << 0) + 0.5 : r.y << 0;
                  a.ctx.save();
                  a.ctx.beginPath();
                  a.ctx.moveTo(r.x << 0, b2);
                  a.ctx.lineTo(r.x - a.tickLength << 0, b2);
                  a.ctx.stroke();
                  a.ctx.restore();
                }
            }, this);
            this.title && (this._titleTextBlock.measureText(), this._titleTextBlock.x = this.bounds.x2 - this._titleTextBlock._lineHeight / 2, this._titleTextBlock.y = this.lineCoordinates.height / 2 - this._titleTextBlock.width / 2 + this.lineCoordinates.y1, this.titleMaxWidth = this._titleTextBlock.maxWidth, this._titleTextBlock.render(true));
          }
          h = 0;
          if ("inside" === this.labelPlacement)
            this.chart.addEventListener("dataAnimationIterationEnd", function() {
              for (k = 0; k < a._labels.length; k++)
                q = a._labels[k], q.position < a.viewportMinimum || (q.position > a.viewportMaximum || g && 0 !== h++ % 2 && a.labelAutoFit) || (a.ctx.save(), a.ctx.beginPath(), q.textBlock.render(true), a.ctx.restore());
            }, this);
          else
            for (k = 0; k < this._labels.length; k++)
              q = this._labels[k], q.position < this.viewportMinimum || (q.position > this.viewportMaximum || g && 0 !== h++ % 2 && this.labelAutoFit) || q.textBlock.render(true);
        };
        A.prototype.renderInterlacedColors = function() {
          var a = this.chart.plotArea.ctx, g, c, b = this.chart.plotArea, e = 0;
          g = true;
          if (("bottom" === this._position || "top" === this._position) && this.interlacedColor)
            for (a.fillStyle = this.interlacedColor, e = 0; e < this._labels.length; e++)
              g ? (g = this.getPixelCoordinatesOnAxis(this._labels[e].position), c = e + 1 > this._labels.length - 1 ? this.getPixelCoordinatesOnAxis(this.viewportMaximum) : this.getPixelCoordinatesOnAxis(this._labels[e + 1].position), a.fillRect(Math.min(c.x, g.x), b.y1, Math.abs(c.x - g.x), Math.abs(b.y1 - b.y2)), g = false) : g = true;
          else if (("left" === this._position || "right" === this._position) && this.interlacedColor)
            for (a.fillStyle = this.interlacedColor, e = 0; e < this._labels.length; e++)
              g ? (c = this.getPixelCoordinatesOnAxis(this._labels[e].position), g = e + 1 > this._labels.length - 1 ? this.getPixelCoordinatesOnAxis(this.viewportMaximum) : this.getPixelCoordinatesOnAxis(this._labels[e + 1].position), a.fillRect(
                b.x1,
                Math.min(c.y, g.y),
                Math.abs(b.x1 - b.x2),
                Math.abs(g.y - c.y)
              ), g = false) : g = true;
          a.beginPath();
        };
        A.prototype.renderStripLinesOfThicknessType = function(a) {
          if (this.stripLines && 0 < this.stripLines.length && a) {
            var g = this, c, b, e = 0, h = 0, d2 = false;
            b = false;
            for (var p2 = [], t3 = [], k = false, e = 0; e < this.stripLines.length; e++) {
              var l = this.stripLines[e];
              l._thicknessType === a && ("pixel" === a && (l.value < this.viewportMinimum || l.value > this.viewportMaximum || n(l.value) || isNaN(this.range)) || "value" === a && (l.startValue <= this.viewportMinimum && l.endValue <= this.viewportMinimum || l.startValue >= this.viewportMaximum && l.endValue >= this.viewportMaximum || n(l.startValue) || n(l.endValue) || isNaN(this.range)) || p2.push(l));
            }
            for (e = 0; e < this._stripLineLabels.length; e++)
              if (l = this.stripLines[e], c = this._stripLineLabels[e], !(c.position < this.viewportMinimum || c.position > this.viewportMaximum || isNaN(this.range)))
                if (b = this.getPixelCoordinatesOnAxis(c.position), "outside" === c.stripLine.labelPlacement) {
                  l && (this.ctx.strokeStyle = l.color, this.ctx.lineWidth = "pixel" === l._thicknessType ? l.thickness : this.tickThickness);
                  if ("bottom" === this._position) {
                    var q = 1 === this.ctx.lineWidth % 2 ? (b.x << 0) + 0.5 : b.x << 0;
                    this.ctx.beginPath();
                    this.ctx.moveTo(q, b.y << 0);
                    this.ctx.lineTo(q, b.y + this.tickLength << 0);
                    this.ctx.stroke();
                    0 === this.labelAngle ? (b.x -= c.textBlock.width / 2, b.y += this.tickLength + c.textBlock.fontSize / 2 + 5) : (b.x -= 0 > this.labelAngle ? c.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) : 0, b.y += this.tickLength + 5 + (0 > this.labelAngle ? Math.abs(c.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle) - c.textBlock.fontSize / 2 * Math.cos(Math.PI / 180 * this.labelAngle)) : Math.abs(c.textBlock.fontSize / 2 * Math.cos(Math.PI / 180 * this.labelAngle))));
                  } else
                    "top" === this._position ? (q = 1 === this.ctx.lineWidth % 2 ? (b.x << 0) + 0.5 : b.x << 0, this.ctx.beginPath(), this.ctx.moveTo(q, b.y << 0), this.ctx.lineTo(q, b.y - this.tickLength << 0), this.ctx.stroke(), 0 === this.labelAngle ? (b.x -= c.textBlock.width / 2, b.y -= this.tickLength + c.textBlock.height - c.textBlock.fontSize / 2) : (b.x -= 0 < this.labelAngle ? c.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) : 0, b.y -= this.tickLength + 2 + (0 < this.labelAngle ? (c.textBlock.height - c.textBlock.fontSize / 2) * Math.cos(Math.PI / 180 * this.labelAngle) + c.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle) : (c.textBlock.height - c.textBlock.fontSize / 2) * Math.cos(Math.PI / 180 * this.labelAngle)))) : "left" === this._position ? (q = 1 === this.ctx.lineWidth % 2 ? (b.y << 0) + 0.5 : b.y << 0, this.ctx.beginPath(), this.ctx.moveTo(b.x << 0, q), this.ctx.lineTo(b.x - this.tickLength << 0, q), this.ctx.stroke(), 0 === this.labelAngle ? b.x = b.x - c.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) - this.tickLength - 5 : (b.y -= c.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle), b.x -= this.tickLength + 5 + (0 < this.labelAngle ? c.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) + c.textBlock.fontSize / 2 * Math.sin(Math.PI / 180 * this.labelAngle) : c.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) - (c.textBlock.height - c.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * this.labelAngle)))) : "right" === this._position && (q = 1 === this.ctx.lineWidth % 2 ? (b.y << 0) + 0.5 : b.y << 0, this.ctx.beginPath(), this.ctx.moveTo(b.x << 0, q), this.ctx.lineTo(b.x + this.tickLength << 0, q), this.ctx.stroke(), b.x = 0 === this.labelAngle ? b.x + this.tickLength + 5 : this.tickLength + 5 + (0 < this.labelAngle ? b.x + (c.textBlock.height - c.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * this.labelAngle) : b.x - c.textBlock.fontSize / 2 * Math.sin(Math.PI / 180 * this.labelAngle)));
                  c.textBlock.x = b.x;
                  c.textBlock.y = b.y;
                  t3.push(c);
                } else
                  l._thicknessType === a && (c.textBlock.angle = -90, "bottom" === this._position ? (c.textBlock.maxWidth = this.options.stripLines[e].labelMaxWidth ? this.options.stripLines[e].labelMaxWidth : this.chart.plotArea.height - 3, c.textBlock.measureText(), b.x - c.textBlock.height - l.thickness / 2 > this.chart.plotArea.x1 ? n(l.startValue) ? b.x -= c.textBlock.height - c.textBlock.fontSize / 2 + l.thickness / 2 : b.x -= c.textBlock.height / 2 - c.textBlock.fontSize / 2 : (c.textBlock.angle = 90, n(l.startValue) ? b.x += c.textBlock.height - c.textBlock.fontSize / 2 + l.thickness / 2 : b.x += c.textBlock.height / 2 - c.textBlock.fontSize / 2), b.y = -90 === c.textBlock.angle ? "near" === c.stripLine.labelAlign ? this.chart.plotArea.y2 - 3 : "center" === c.stripLine.labelAlign ? (this.chart.plotArea.y2 + this.chart.plotArea.y1 + c.textBlock.width) / 2 : this.chart.plotArea.y1 + c.textBlock.width + 3 : "near" === c.stripLine.labelAlign ? this.chart.plotArea.y2 - c.textBlock.width - 3 : "center" === c.stripLine.labelAlign ? (this.chart.plotArea.y2 + this.chart.plotArea.y1 - c.textBlock.width) / 2 : this.chart.plotArea.y1 + 3) : "top" === this._position ? (c.textBlock.maxWidth = this.options.stripLines[e].labelMaxWidth ? this.options.stripLines[e].labelMaxWidth : this.chart.plotArea.height - 3, c.textBlock.measureText(), b.x - c.textBlock.height - l.thickness / 2 > this.chart.plotArea.x1 ? n(l.startValue) ? b.x -= c.textBlock.height - c.textBlock.fontSize / 2 + l.thickness / 2 : b.x -= c.textBlock.height / 2 - c.textBlock.fontSize / 2 : (c.textBlock.angle = 90, n(l.startValue) ? b.x += c.textBlock.height - c.textBlock.fontSize / 2 + l.thickness / 2 : b.x += c.textBlock.height / 2 - c.textBlock.fontSize / 2), b.y = -90 === c.textBlock.angle ? "near" === c.stripLine.labelAlign ? this.chart.plotArea.y1 + c.textBlock.width + 3 : "center" === c.stripLine.labelAlign ? (this.chart.plotArea.y2 + this.chart.plotArea.y1 + c.textBlock.width) / 2 : this.chart.plotArea.y2 - 3 : "near" === c.stripLine.labelAlign ? this.chart.plotArea.y1 + 3 : "center" === c.stripLine.labelAlign ? (this.chart.plotArea.y2 + this.chart.plotArea.y1 - c.textBlock.width) / 2 : this.chart.plotArea.y2 - c.textBlock.width - 3) : "left" === this._position ? (c.textBlock.maxWidth = this.options.stripLines[e].labelMaxWidth ? this.options.stripLines[e].labelMaxWidth : this.chart.plotArea.width - 3, c.textBlock.angle = 0, c.textBlock.measureText(), b.y - c.textBlock.height - l.thickness / 2 > this.chart.plotArea.y1 ? n(l.startValue) ? b.y -= c.textBlock.height - c.textBlock.fontSize / 2 + l.thickness / 2 : b.y -= c.textBlock.height / 2 - c.textBlock.fontSize / 2 : n(l.startValue) ? b.y += c.textBlock.height - c.textBlock.fontSize / 2 + l.thickness / 2 : b.y += c.textBlock.height / 2 - c.textBlock.fontSize + 3, b.x = "near" === c.stripLine.labelAlign ? this.chart.plotArea.x1 + 3 : "center" === c.stripLine.labelAlign ? (this.chart.plotArea.x2 + this.chart.plotArea.x1) / 2 - c.textBlock.width / 2 : this.chart.plotArea.x2 - c.textBlock.width - 3) : "right" === this._position && (c.textBlock.maxWidth = this.options.stripLines[e].labelMaxWidth ? this.options.stripLines[e].labelMaxWidth : this.chart.plotArea.width - 3, c.textBlock.angle = 0, c.textBlock.measureText(), b.y - c.textBlock.height - l.thickness / 2 > this.chart.plotArea.y1 ? n(l.startValue) ? b.y -= c.textBlock.height - c.textBlock.fontSize / 2 + l.thickness / 2 : b.y -= c.textBlock.height / 2 - c.textBlock.fontSize / 2 : n(l.startValue) ? b.y += c.textBlock.height - c.textBlock.fontSize / 2 + l.thickness / 2 : b.y -= c.textBlock.height / 2 - c.textBlock.fontSize / 2 + 3, b.x = "near" === c.stripLine.labelAlign ? this.chart.plotArea.x2 - c.textBlock.width - 3 : "center" === c.stripLine.labelAlign ? (this.chart.plotArea.x2 + this.chart.plotArea.x1) / 2 - c.textBlock.width / 2 : this.chart.plotArea.x1 + 3), c.textBlock.x = b.x, c.textBlock.y = b.y, t3.push(c));
            if (!k) {
              b = false;
              this.ctx.save();
              this.ctx.beginPath();
              this.ctx.rect(this.chart.plotArea.x1, this.chart.plotArea.y1, this.chart.plotArea.width, this.chart.plotArea.height);
              this.ctx.clip();
              for (e = 0; e < p2.length; e++)
                l = p2[e], l.showOnTop ? d2 || (d2 = true, this.chart.addEventListener("dataAnimationIterationEnd", function() {
                  this.ctx.save();
                  this.ctx.beginPath();
                  this.ctx.rect(this.chart.plotArea.x1, this.chart.plotArea.y1, this.chart.plotArea.width, this.chart.plotArea.height);
                  this.ctx.clip();
                  for (h = 0; h < p2.length; h++)
                    l = p2[h], l.showOnTop && l.render();
                  this.ctx.restore();
                }, l)) : l.render();
              for (e = 0; e < t3.length; e++)
                c = t3[e], c.stripLine.showOnTop ? b || (b = true, this.chart.addEventListener("dataAnimationIterationEnd", function() {
                  for (h = 0; h < t3.length; h++)
                    c = t3[h], "inside" === c.stripLine.labelPlacement && c.stripLine.showOnTop && (g.ctx.save(), g.ctx.beginPath(), g.ctx.rect(
                      g.chart.plotArea.x1,
                      g.chart.plotArea.y1,
                      g.chart.plotArea.width,
                      g.chart.plotArea.height
                    ), g.ctx.clip(), c.textBlock.render(true), g.ctx.restore());
                }, c.textBlock)) : "inside" === c.stripLine.labelPlacement && c.textBlock.render(true);
              this.ctx.restore();
              k = true;
            }
            if (k)
              for (b = false, e = 0; e < t3.length; e++)
                c = t3[e], "outside" === c.stripLine.labelPlacement && c.textBlock.render(true);
          }
        };
        A.prototype.renderBreaksBackground = function() {
          this.chart._breaksCanvas && (this.scaleBreaks && 0 < this.scaleBreaks._appliedBreaks.length && this.maskCanvas) && (this.chart._breaksCanvasCtx.save(), this.chart._breaksCanvasCtx.beginPath(), this.chart._breaksCanvasCtx.rect(this.chart.plotArea.x1, this.chart.plotArea.y1, this.chart.plotArea.width, this.chart.plotArea.height), this.chart._breaksCanvasCtx.clip(), this.chart._breaksCanvasCtx.drawImage(this.maskCanvas, 0, 0, this.chart.width, this.chart.height), this.chart._breaksCanvasCtx.restore());
        };
        A.prototype.createMask = function() {
          if (this.scaleBreaks && 0 < this.scaleBreaks._appliedBreaks.length) {
            var a = this.scaleBreaks._appliedBreaks;
            v ? (this.maskCanvas = ua(
              this.chart.width,
              this.chart.height
            ), this.maskCtx = this.maskCanvas.getContext("2d")) : (this.maskCanvas = this.chart.plotArea.canvas, this.maskCtx = this.chart.plotArea.ctx);
            this.maskCtx.save();
            this.maskCtx.beginPath();
            this.maskCtx.rect(this.chart.plotArea.x1, this.chart.plotArea.y1, this.chart.plotArea.width, this.chart.plotArea.height);
            this.maskCtx.clip();
            for (var g = 0; g < a.length; g++)
              a[g].endValue < this.viewportMinimum || (a[g].startValue > this.viewportMaximum || isNaN(this.range)) || a[g].render(this.maskCtx);
            this.maskCtx.restore();
          }
        };
        A.prototype.renderCrosshair = function(a, g) {
          isFinite(this.minimum) && isFinite(this.maximum) && this.crosshair.render(a, g);
        };
        A.prototype.showCrosshair = function(a) {
          n(a) || (a < this.viewportMinimum || a > this.viewportMaximum) || ("top" === this._position || "bottom" === this._position ? this.crosshair.render(this.convertValueToPixel(a), null, a) : this.crosshair.render(null, this.convertValueToPixel(a), a));
        };
        A.prototype.renderGrid = function() {
          if (this.gridThickness && 0 < this.gridThickness) {
            var a = this.chart.ctx;
            a.save();
            var g, c = this.chart.plotArea;
            a.lineWidth = this.gridThickness;
            a.strokeStyle = this.gridColor;
            a.setLineDash && a.setLineDash(G(this.gridDashType, this.gridThickness));
            if ("bottom" === this._position || "top" === this._position)
              for (b = 0; b < this._labels.length; b++)
                this._labels[b].position < this.viewportMinimum || (this._labels[b].position > this.viewportMaximum || this._labels[b].breaksLabelType) || (a.beginPath(), g = this.getPixelCoordinatesOnAxis(this._labels[b].position), g = 1 === a.lineWidth % 2 ? (g.x << 0) + 0.5 : g.x << 0, a.moveTo(g, c.y1 << 0), a.lineTo(g, c.y2 << 0), a.stroke());
            else if ("left" === this._position || "right" === this._position)
              for (var b = 0; b < this._labels.length; b++)
                this._labels[b].position < this.viewportMinimum || (this._labels[b].position > this.viewportMaximum || this._labels[b].breaksLabelType) || (a.beginPath(), g = this.getPixelCoordinatesOnAxis(this._labels[b].position), g = 1 === a.lineWidth % 2 ? (g.y << 0) + 0.5 : g.y << 0, a.moveTo(c.x1 << 0, g), a.lineTo(c.x2 << 0, g), a.stroke());
            a.restore();
          }
        };
        A.prototype.renderAxisLine = function() {
          var a = this.chart.ctx, g = v ? this.chart._preRenderCtx : a, c = Math.ceil(this.tickThickness / (this.reversed ? -2 : 2)), b = Math.ceil(this.tickThickness / (this.reversed ? 2 : -2)), e, d2;
          g.save();
          if ("bottom" === this._position || "top" === this._position) {
            if (this.lineThickness) {
              this.reversed ? (e = this.lineCoordinates.x2, d2 = this.lineCoordinates.x1) : (e = this.lineCoordinates.x1, d2 = this.lineCoordinates.x2);
              g.lineWidth = this.lineThickness;
              g.strokeStyle = this.lineColor ? this.lineColor : "black";
              g.setLineDash && g.setLineDash(G(this.lineDashType, this.lineThickness));
              var m = 1 === this.lineThickness % 2 ? (this.lineCoordinates.y1 << 0) + 0.5 : this.lineCoordinates.y1 << 0;
              g.beginPath();
              if (this.scaleBreaks && !n(this.scaleBreaks.firstBreakIndex))
                if (n(this.scaleBreaks.lastBreakIndex))
                  e = this.scaleBreaks._appliedBreaks[this.scaleBreaks.firstBreakIndex].endPixel + b;
                else
                  for (var p2 = this.scaleBreaks.firstBreakIndex; p2 <= this.scaleBreaks.lastBreakIndex; p2++)
                    g.moveTo(e, m), g.lineTo(this.scaleBreaks._appliedBreaks[p2].startPixel + c, m), e = this.scaleBreaks._appliedBreaks[p2].endPixel + b;
              e && (g.moveTo(e, m), g.lineTo(d2, m));
              g.stroke();
            }
          } else if (("left" === this._position || "right" === this._position) && this.lineThickness) {
            this.reversed ? (e = this.lineCoordinates.y1, d2 = this.lineCoordinates.y2) : (e = this.lineCoordinates.y2, d2 = this.lineCoordinates.y1);
            g.lineWidth = this.lineThickness;
            g.strokeStyle = this.lineColor;
            g.setLineDash && g.setLineDash(G(this.lineDashType, this.lineThickness));
            m = 1 === this.lineThickness % 2 ? (this.lineCoordinates.x1 << 0) + 0.5 : this.lineCoordinates.x1 << 0;
            g.beginPath();
            if (this.scaleBreaks && !n(this.scaleBreaks.firstBreakIndex))
              if (n(this.scaleBreaks.lastBreakIndex))
                e = this.scaleBreaks._appliedBreaks[this.scaleBreaks.firstBreakIndex].endPixel + c;
              else
                for (p2 = this.scaleBreaks.firstBreakIndex; p2 <= this.scaleBreaks.lastBreakIndex; p2++)
                  g.moveTo(m, e), g.lineTo(m, this.scaleBreaks._appliedBreaks[p2].startPixel + b), e = this.scaleBreaks._appliedBreaks[p2].endPixel + c;
            e && (g.moveTo(m, e), g.lineTo(m, d2));
            g.stroke();
          }
          v && (a.drawImage(this.chart._preRenderCanvas, 0, 0, this.chart.width, this.chart.height), this.chart._breaksCanvasCtx && this.chart._breaksCanvasCtx.drawImage(this.chart._preRenderCanvas, 0, 0, this.chart.width, this.chart.height), g.clearRect(
            0,
            0,
            this.chart.width,
            this.chart.height
          ));
          g.restore();
        };
        A.prototype.getPixelCoordinatesOnAxis = function(a) {
          var g = {};
          if ("bottom" === this._position || "top" === this._position)
            g.x = this.convertValueToPixel(a), g.y = this.lineCoordinates.y1;
          if ("left" === this._position || "right" === this._position)
            g.y = this.convertValueToPixel(a), g.x = this.lineCoordinates.x2;
          return g;
        };
        A.prototype.convertPixelToValue = function(a) {
          if ("undefined" === typeof a)
            return null;
          var g = 0, c = 0, b, g = true, e = this.scaleBreaks ? this.scaleBreaks._appliedBreaks : [], c = "number" === typeof a ? a : "left" === this._position || "right" === this._position ? a.y : a.x;
          if (this.logarithmic) {
            a = b = Math.pow(this.logarithmBase, (c - this.conversionParameters.reference) / this.conversionParameters.pixelPerUnit);
            if (c <= this.conversionParameters.reference === ("left" === this._position || "right" === this._position) !== this.reversed)
              for (c = 0; c < e.length; c++) {
                if (!(e[c].endValue < this.conversionParameters.minimum))
                  if (g)
                    if (e[c].startValue < this.conversionParameters.minimum) {
                      if (1 < e[c].size && this.conversionParameters.minimum * Math.pow(e[c].endValue / e[c].startValue, Math.log(b) / Math.log(e[c].size)) < e[c].endValue) {
                        a = Math.pow(e[c].endValue / e[c].startValue, Math.log(b) / Math.log(e[c].size));
                        break;
                      } else
                        a *= e[c].endValue / this.conversionParameters.minimum / Math.pow(e[c].size, Math.log(e[c].endValue / this.conversionParameters.minimum) / Math.log(e[c].endValue / e[c].startValue)), b /= Math.pow(e[c].size, Math.log(e[c].endValue / this.conversionParameters.minimum) / Math.log(e[c].endValue / e[c].startValue));
                      g = false;
                    } else if (b > e[c].startValue / this.conversionParameters.minimum) {
                      b /= e[c].startValue / this.conversionParameters.minimum;
                      if (b < e[c].size) {
                        a *= Math.pow(e[c].endValue / e[c].startValue, 1 === e[c].size ? 1 : Math.log(b) / Math.log(e[c].size)) / b;
                        break;
                      } else
                        a *= e[c].endValue / e[c].startValue / e[c].size;
                      b /= e[c].size;
                      g = false;
                    } else
                      break;
                  else if (b > e[c].startValue / e[c - 1].endValue) {
                    b /= e[c].startValue / e[c - 1].endValue;
                    if (b < e[c].size) {
                      a *= Math.pow(e[c].endValue / e[c].startValue, 1 === e[c].size ? 1 : Math.log(b) / Math.log(e[c].size)) / b;
                      break;
                    } else
                      a *= e[c].endValue / e[c].startValue / e[c].size;
                    b /= e[c].size;
                  } else
                    break;
              }
            else
              for (c = e.length - 1; 0 <= c; c--)
                if (!(e[c].startValue > this.conversionParameters.minimum))
                  if (g)
                    if (e[c].endValue > this.conversionParameters.minimum) {
                      if (1 < e[c].size && this.conversionParameters.minimum * Math.pow(e[c].endValue / e[c].startValue, Math.log(b) / Math.log(e[c].size)) > e[c].startValue) {
                        a = Math.pow(e[c].endValue / e[c].startValue, Math.log(b) / Math.log(e[c].size));
                        break;
                      } else
                        a *= e[c].startValue / this.conversionParameters.minimum * Math.pow(e[c].size, Math.log(e[c].startValue / this.conversionParameters.minimum) / Math.log(e[c].endValue / e[c].startValue)) * b, b *= Math.pow(e[c].size, Math.log(this.conversionParameters.minimum / e[c].startValue) / Math.log(e[c].endValue / e[c].startValue));
                      g = false;
                    } else if (b < e[c].endValue / this.conversionParameters.minimum) {
                      b /= e[c].endValue / this.conversionParameters.minimum;
                      if (b > 1 / e[c].size) {
                        a *= Math.pow(e[c].endValue / e[c].startValue, 1 >= e[c].size ? 1 : Math.log(b) / Math.log(e[c].size)) * b;
                        break;
                      } else
                        a /= e[c].endValue / e[c].startValue / e[c].size;
                      b *= e[c].size;
                      g = false;
                    } else
                      break;
                  else if (b < e[c].endValue / e[c + 1].startValue) {
                    b /= e[c].endValue / e[c + 1].startValue;
                    if (b > 1 / e[c].size) {
                      a *= Math.pow(e[c].endValue / e[c].startValue, 1 >= e[c].size ? 1 : Math.log(b) / Math.log(e[c].size)) * b;
                      break;
                    } else
                      a /= e[c].endValue / e[c].startValue / e[c].size;
                    b *= e[c].size;
                  } else
                    break;
            g = a * this.viewportMinimum;
          } else {
            a = b = (c - this.conversionParameters.reference) / this.conversionParameters.pixelPerUnit;
            if (c <= this.conversionParameters.reference === ("left" === this._position || "right" === this._position) !== this.reversed)
              for (c = 0; c < e.length; c++) {
                if (!(e[c].endValue < this.conversionParameters.minimum))
                  if (g)
                    if (e[c].startValue < this.conversionParameters.minimum) {
                      if (e[c].size && this.conversionParameters.minimum + b * (e[c].endValue - e[c].startValue) / e[c].size < e[c].endValue) {
                        a = 0 >= e[c].size ? 0 : b * (e[c].endValue - e[c].startValue) / e[c].size;
                        break;
                      } else
                        a += e[c].endValue - this.conversionParameters.minimum - e[c].size * (e[c].endValue - this.conversionParameters.minimum) / (e[c].endValue - e[c].startValue), b -= e[c].size * (e[c].endValue - this.conversionParameters.minimum) / (e[c].endValue - e[c].startValue);
                      g = false;
                    } else if (b > e[c].startValue - this.conversionParameters.minimum) {
                      b -= e[c].startValue - this.conversionParameters.minimum;
                      if (b < e[c].size) {
                        a += (e[c].endValue - e[c].startValue) * (0 === e[c].size ? 1 : b / e[c].size) - b;
                        break;
                      } else
                        a += e[c].endValue - e[c].startValue - e[c].size;
                      b -= e[c].size;
                      g = false;
                    } else
                      break;
                  else if (b > e[c].startValue - e[c - 1].endValue) {
                    b -= e[c].startValue - e[c - 1].endValue;
                    if (b < e[c].size) {
                      a += (e[c].endValue - e[c].startValue) * (0 === e[c].size ? 1 : b / e[c].size) - b;
                      break;
                    } else
                      a += e[c].endValue - e[c].startValue - e[c].size;
                    b -= e[c].size;
                  } else
                    break;
              }
            else
              for (c = e.length - 1; 0 <= c; c--)
                if (!(e[c].startValue > this.conversionParameters.minimum))
                  if (g)
                    if (e[c].endValue > this.conversionParameters.minimum)
                      if (e[c].size && this.conversionParameters.minimum + b * (e[c].endValue - e[c].startValue) / e[c].size > e[c].startValue) {
                        a = 0 >= e[c].size ? 0 : b * (e[c].endValue - e[c].startValue) / e[c].size;
                        break;
                      } else
                        a += e[c].startValue - this.conversionParameters.minimum + e[c].size * (this.conversionParameters.minimum - e[c].startValue) / (e[c].endValue - e[c].startValue), b += e[c].size * (this.conversionParameters.minimum - e[c].startValue) / (e[c].endValue - e[c].startValue), g = false;
                    else if (b < e[c].endValue - this.conversionParameters.minimum) {
                      b -= e[c].endValue - this.conversionParameters.minimum;
                      if (b > -1 * e[c].size) {
                        a += (e[c].endValue - e[c].startValue) * (0 === e[c].size ? 1 : b / e[c].size) + b;
                        break;
                      } else
                        a -= e[c].endValue - e[c].startValue - e[c].size;
                      b += e[c].size;
                      g = false;
                    } else
                      break;
                  else if (b < e[c].endValue - e[c + 1].startValue) {
                    b -= e[c].endValue - e[c + 1].startValue;
                    if (b > -1 * e[c].size) {
                      a += (e[c].endValue - e[c].startValue) * (0 === e[c].size ? 1 : b / e[c].size) + b;
                      break;
                    } else
                      a -= e[c].endValue - e[c].startValue - e[c].size;
                    b += e[c].size;
                  } else
                    break;
            g = this.conversionParameters.minimum + a;
          }
          return g;
        };
        A.prototype.convertValueToPixel = function(a) {
          a = this.getApparentDifference(this.conversionParameters.minimum, a, a);
          return this.logarithmic ? this.conversionParameters.reference + this.conversionParameters.pixelPerUnit * Math.log(a / this.conversionParameters.minimum) / this.conversionParameters.lnLogarithmBase + 0.5 << 0 : "axisX" === this.type ? this.conversionParameters.reference + this.conversionParameters.pixelPerUnit * (a - this.conversionParameters.minimum) + 0.5 << 0 : this.conversionParameters.reference + this.conversionParameters.pixelPerUnit * (a - this.conversionParameters.minimum) + 0.5;
        };
        A.prototype.getApparentDifference = function(a, g, c, b) {
          var e = this.scaleBreaks ? this.scaleBreaks._appliedBreaks : [];
          if (this.logarithmic) {
            c = n(c) ? g / a : c;
            for (var d2 = 0; d2 < e.length && !(g < e[d2].startValue); d2++)
              a > e[d2].endValue || (a <= e[d2].startValue && g >= e[d2].endValue ? c = c / e[d2].endValue * e[d2].startValue * e[d2].size : a >= e[d2].startValue && g >= e[d2].endValue ? c = c / e[d2].endValue * a * Math.pow(e[d2].size, Math.log(e[d2].endValue / a) / Math.log(e[d2].endValue / e[d2].startValue)) : a <= e[d2].startValue && g <= e[d2].endValue ? c = c / g * e[d2].startValue * Math.pow(e[d2].size, Math.log(g / e[d2].startValue) / Math.log(e[d2].endValue / e[d2].startValue)) : !b && (a > e[d2].startValue && g < e[d2].endValue) && (c = a * Math.pow(e[d2].size, Math.log(g / a) / Math.log(e[d2].endValue / e[d2].startValue))));
          } else
            for (c = n(c) ? Math.abs(g - a) : c, d2 = 0; d2 < e.length && !(g < e[d2].startValue); d2++)
              a > e[d2].endValue || (a <= e[d2].startValue && g >= e[d2].endValue ? c = c - e[d2].endValue + e[d2].startValue + e[d2].size : a > e[d2].startValue && g >= e[d2].endValue ? c = c - e[d2].endValue + a + e[d2].size * (e[d2].endValue - a) / (e[d2].endValue - e[d2].startValue) : a <= e[d2].startValue && g < e[d2].endValue ? c = c - g + e[d2].startValue + e[d2].size * (g - e[d2].startValue) / (e[d2].endValue - e[d2].startValue) : !b && (a > e[d2].startValue && g < e[d2].endValue) && (c = a + e[d2].size * (g - a) / (e[d2].endValue - e[d2].startValue)));
          return c;
        };
        A.prototype.setViewPortRange = function(a, g) {
          this.sessionVariables.newViewportMinimum = this.viewportMinimum = Math.min(a, g);
          this.sessionVariables.newViewportMaximum = this.viewportMaximum = Math.max(a, g);
        };
        A.prototype.getXValueAt = function(a) {
          if (!a)
            return null;
          var g = null;
          "left" === this._position ? g = this.convertPixelToValue(a.y) : "bottom" === this._position && (g = this.convertPixelToValue(a.x));
          return g;
        };
        A.prototype.calculateValueToPixelConversionParameters = function(a) {
          a = this.scaleBreaks ? this.scaleBreaks._appliedBreaks : [];
          var g = { pixelPerUnit: null, minimum: null, reference: null }, c = this.lineCoordinates.width, b = this.lineCoordinates.height, c = "bottom" === this._position || "top" === this._position ? c : b, b = Math.abs(this.range);
          if (this.logarithmic)
            for (var e = 0; e < a.length && !(this.viewportMaximum < a[e].startValue); e++)
              this.viewportMinimum > a[e].endValue || (this.viewportMinimum >= a[e].startValue && this.viewportMaximum <= a[e].endValue ? c = 0 : this.viewportMinimum <= a[e].startValue && this.viewportMaximum >= a[e].endValue ? (b = b / a[e].endValue * a[e].startValue, c = 0 < a[e].spacing.toString().indexOf("%") ? c * (1 - parseFloat(a[e].spacing) / 100) : c - Math.min(a[e].spacing, 0.1 * c)) : this.viewportMinimum > a[e].startValue && this.viewportMaximum >= a[e].endValue ? (b = b / a[e].endValue * this.viewportMinimum, c = 0 < a[e].spacing.toString().indexOf("%") ? c * (1 - parseFloat(a[e].spacing) / 100 * Math.log(a[e].endValue / this.viewportMinimum) / Math.log(a[e].endValue / a[e].startValue)) : c - Math.min(a[e].spacing, 0.1 * c) * Math.log(a[e].endValue / this.viewportMinimum) / Math.log(a[e].endValue / a[e].startValue)) : this.viewportMinimum <= a[e].startValue && this.viewportMaximum < a[e].endValue && (b = b / this.viewportMaximum * a[e].startValue, c = 0 < a[e].spacing.toString().indexOf("%") ? c * (1 - parseFloat(a[e].spacing) / 100 * Math.log(this.viewportMaximum / a[e].startValue) / Math.log(a[e].endValue / a[e].startValue)) : c - Math.min(a[e].spacing, 0.1 * c) * Math.log(this.viewportMaximum / a[e].startValue) / Math.log(a[e].endValue / a[e].startValue)));
          else
            for (e = 0; e < a.length && !(this.viewportMaximum < a[e].startValue); e++)
              this.viewportMinimum > a[e].endValue || (this.viewportMinimum >= a[e].startValue && this.viewportMaximum <= a[e].endValue ? c = 0 : this.viewportMinimum <= a[e].startValue && this.viewportMaximum >= a[e].endValue ? (b = b - a[e].endValue + a[e].startValue, c = 0 < a[e].spacing.toString().indexOf("%") ? c * (1 - parseFloat(a[e].spacing) / 100) : c - Math.min(a[e].spacing, 0.1 * c)) : this.viewportMinimum > a[e].startValue && this.viewportMaximum >= a[e].endValue ? (b = b - a[e].endValue + this.viewportMinimum, c = 0 < a[e].spacing.toString().indexOf("%") ? c * (1 - parseFloat(a[e].spacing) / 100 * (a[e].endValue - this.viewportMinimum) / (a[e].endValue - a[e].startValue)) : c - Math.min(a[e].spacing, 0.1 * c) * (a[e].endValue - this.viewportMinimum) / (a[e].endValue - a[e].startValue)) : this.viewportMinimum <= a[e].startValue && this.viewportMaximum < a[e].endValue && (b = b - this.viewportMaximum + a[e].startValue, c = 0 < a[e].spacing.toString().indexOf("%") ? c * (1 - parseFloat(a[e].spacing) / 100 * (this.viewportMaximum - a[e].startValue) / (a[e].endValue - a[e].startValue)) : c - Math.min(a[e].spacing, 0.1 * c) * (this.viewportMaximum - a[e].startValue) / (a[e].endValue - a[e].startValue)));
          g.minimum = this.viewportMinimum;
          g.maximum = this.viewportMaximum;
          g.range = b;
          if ("bottom" === this._position || "top" === this._position)
            this.logarithmic ? (g.lnLogarithmBase = Math.log(this.logarithmBase), g.pixelPerUnit = (this.reversed ? -1 : 1) * c * g.lnLogarithmBase / Math.log(Math.abs(b))) : g.pixelPerUnit = (this.reversed ? -1 : 1) * c / Math.abs(b), g.reference = this.reversed ? this.lineCoordinates.x2 : this.lineCoordinates.x1;
          if ("left" === this._position || "right" === this._position)
            this.logarithmic ? (g.lnLogarithmBase = Math.log(this.logarithmBase), g.pixelPerUnit = (this.reversed ? 1 : -1) * c * g.lnLogarithmBase / Math.log(Math.abs(b))) : g.pixelPerUnit = (this.reversed ? 1 : -1) * c / Math.abs(b), g.reference = this.reversed ? this.lineCoordinates.y1 : this.lineCoordinates.y2;
          this.conversionParameters = g;
        };
        A.prototype.calculateAxisParameters = function() {
          if (this.logarithmic)
            this.calculateLogarithmicAxisParameters();
          else {
            var a = this.chart.layoutManager.getFreeSpace(), g = false, c = false;
            "bottom" === this._position || "top" === this._position ? (this.maxWidth = a.width, this.maxHeight = a.height) : (this.maxWidth = a.height, this.maxHeight = a.width);
            var a = "axisX" === this.type ? "xySwapped" === this.chart.plotInfo.axisPlacement ? 62 : 70 : "xySwapped" === this.chart.plotInfo.axisPlacement ? 50 : 40, b = 4;
            "axisX" === this.type && (b = 600 > this.maxWidth ? 8 : 6);
            var a = Math.max(b, Math.floor(this.maxWidth / a)), e, d2, m, b = 0;
            !n(this.options.viewportMinimum) && (!n(this.options.viewportMaximum) && this.options.viewportMinimum >= this.options.viewportMaximum) && (this.viewportMinimum = this.viewportMaximum = null);
            if (n(this.options.viewportMinimum) && !n(this.sessionVariables.newViewportMinimum) && !isNaN(this.sessionVariables.newViewportMinimum))
              this.viewportMinimum = this.sessionVariables.newViewportMinimum;
            else if (null === this.viewportMinimum || isNaN(this.viewportMinimum))
              this.viewportMinimum = this.minimum;
            if (n(this.options.viewportMaximum) && !n(this.sessionVariables.newViewportMaximum) && !isNaN(this.sessionVariables.newViewportMaximum))
              this.viewportMaximum = this.sessionVariables.newViewportMaximum;
            else if (null === this.viewportMaximum || isNaN(this.viewportMaximum))
              this.viewportMaximum = this.maximum;
            if (this.scaleBreaks) {
              for (b = 0; b < this.scaleBreaks._appliedBreaks.length; b++)
                if ((!n(this.sessionVariables.newViewportMinimum) && this.sessionVariables.newViewportMinimum >= this.scaleBreaks._appliedBreaks[b].startValue || !n(this.options.minimum) && this.options.minimum >= this.scaleBreaks._appliedBreaks[b].startValue || !n(this.options.viewportMinimum) && this.viewportMinimum >= this.scaleBreaks._appliedBreaks[b].startValue) && (!n(this.sessionVariables.newViewportMaximum) && this.sessionVariables.newViewportMaximum <= this.scaleBreaks._appliedBreaks[b].endValue || !n(this.options.maximum) && this.options.maximum <= this.scaleBreaks._appliedBreaks[b].endValue || !n(this.options.viewportMaximum) && this.viewportMaximum <= this.scaleBreaks._appliedBreaks[b].endValue)) {
                  this.scaleBreaks._appliedBreaks.splice(
                    b,
                    1
                  );
                  break;
                }
            }
            if ("axisX" === this.type) {
              if (this.dataSeries && 0 < this.dataSeries.length)
                for (e = 0; e < this.dataSeries.length; e++)
                  "dateTime" === this.dataSeries[e].xValueType && (c = true);
              e = null !== this.viewportMinimum ? this.viewportMinimum : this.dataInfo.viewPortMin;
              d2 = null !== this.viewportMaximum ? this.viewportMaximum : this.dataInfo.viewPortMax;
              0 === d2 - e && (b = "undefined" === typeof this.options.interval ? 0.4 : this.options.interval, d2 += b, e -= b);
              Infinity !== this.dataInfo.minDiff ? m = this.dataInfo.minDiff : 1 < d2 - e ? m = 0.5 * Math.abs(d2 - e) : (m = 1, c && (g = true));
            } else
              "axisY" === this.type && (e = null !== this.viewportMinimum ? this.viewportMinimum : this.dataInfo.viewPortMin, d2 = null !== this.viewportMaximum ? this.viewportMaximum : this.dataInfo.viewPortMax, isFinite(e) || isFinite(d2) ? isFinite(e) ? isFinite(d2) || (d2 = e) : e = d2 : (d2 = "undefined" === typeof this.options.interval ? -Infinity : this.options.interval, e = "undefined" !== typeof this.options.interval || isFinite(this.dataInfo.minDiff) ? 0 : Infinity), 0 === e && 0 === d2 ? (d2 += 9, e = 0) : 0 === d2 - e ? (b = Math.min(Math.abs(0.01 * Math.abs(d2)), 5), d2 += b, e -= b) : e > d2 ? (b = Math.min(0.01 * Math.abs(this.getApparentDifference(d2, e, null, true)), 5), 0 <= d2 ? e = d2 - b : d2 = isFinite(e) ? e + b : 0) : (b = Math.min(0.01 * Math.abs(this.getApparentDifference(e, d2, null, true)), 0.05), 0 !== d2 && (d2 += b), 0 !== e && (e -= b)), m = Infinity !== this.dataInfo.minDiff ? this.dataInfo.minDiff : 1 < d2 - e ? 0.5 * Math.abs(d2 - e) : 1, this.includeZero && (null === this.viewportMinimum || isNaN(this.viewportMinimum)) && 0 < e && (e = 0), this.includeZero && (null === this.viewportMaximum || isNaN(this.viewportMaximum)) && 0 > d2 && (d2 = 0));
            b = this.getApparentDifference(isNaN(this.viewportMinimum) || null === this.viewportMinimum ? e : this.viewportMinimum, isNaN(this.viewportMaximum) || null === this.viewportMaximum ? d2 : this.viewportMaximum, null, true);
            if ("axisX" === this.type && c) {
              this.valueType = "dateTime";
              this.intervalType || (b / 1 <= a ? (this.interval = 1, this.intervalType = "millisecond") : b / 2 <= a ? (this.interval = 2, this.intervalType = "millisecond") : b / 5 <= a ? (this.interval = 5, this.intervalType = "millisecond") : b / 10 <= a ? (this.interval = 10, this.intervalType = "millisecond") : b / 20 <= a ? (this.interval = 20, this.intervalType = "millisecond") : b / 50 <= a ? (this.interval = 50, this.intervalType = "millisecond") : b / 100 <= a ? (this.interval = 100, this.intervalType = "millisecond") : b / 200 <= a ? (this.interval = 200, this.intervalType = "millisecond") : b / 250 <= a ? (this.interval = 250, this.intervalType = "millisecond") : b / 300 <= a ? (this.interval = 300, this.intervalType = "millisecond") : b / 400 <= a ? (this.interval = 400, this.intervalType = "millisecond") : b / 500 <= a ? (this.interval = 500, this.intervalType = "millisecond") : b / (1 * M.secondDuration) <= a ? (this.interval = 1, this.intervalType = "second") : b / (2 * M.secondDuration) <= a ? (this.interval = 2, this.intervalType = "second") : b / (5 * M.secondDuration) <= a ? (this.interval = 5, this.intervalType = "second") : b / (10 * M.secondDuration) <= a ? (this.interval = 10, this.intervalType = "second") : b / (15 * M.secondDuration) <= a ? (this.interval = 15, this.intervalType = "second") : b / (20 * M.secondDuration) <= a ? (this.interval = 20, this.intervalType = "second") : b / (30 * M.secondDuration) <= a ? (this.interval = 30, this.intervalType = "second") : b / (1 * M.minuteDuration) <= a ? (this.interval = 1, this.intervalType = "minute") : b / (2 * M.minuteDuration) <= a ? (this.interval = 2, this.intervalType = "minute") : b / (5 * M.minuteDuration) <= a ? (this.interval = 5, this.intervalType = "minute") : b / (10 * M.minuteDuration) <= a ? (this.interval = 10, this.intervalType = "minute") : b / (15 * M.minuteDuration) <= a ? (this.interval = 15, this.intervalType = "minute") : b / (20 * M.minuteDuration) <= a ? (this.interval = 20, this.intervalType = "minute") : b / (30 * M.minuteDuration) <= a ? (this.interval = 30, this.intervalType = "minute") : b / (1 * M.hourDuration) <= a ? (this.interval = 1, this.intervalType = "hour") : b / (2 * M.hourDuration) <= a ? (this.interval = 2, this.intervalType = "hour") : b / (3 * M.hourDuration) <= a ? (this.interval = 3, this.intervalType = "hour") : b / (6 * M.hourDuration) <= a ? (this.interval = 6, this.intervalType = "hour") : b / (1 * M.dayDuration) <= a ? (this.interval = 1, this.intervalType = "day") : b / (2 * M.dayDuration) <= a ? (this.interval = 2, this.intervalType = "day") : b / (4 * M.dayDuration) <= a ? (this.interval = 4, this.intervalType = "day") : b / (1 * M.weekDuration) <= a ? (this.interval = 1, this.intervalType = "week") : b / (2 * M.weekDuration) <= a ? (this.interval = 2, this.intervalType = "week") : b / (3 * M.weekDuration) <= a ? (this.interval = 3, this.intervalType = "week") : b / (1 * M.monthDuration) <= a ? (this.interval = 1, this.intervalType = "month") : b / (2 * M.monthDuration) <= a ? (this.interval = 2, this.intervalType = "month") : b / (3 * M.monthDuration) <= a ? (this.interval = 3, this.intervalType = "month") : b / (6 * M.monthDuration) <= a ? (this.interval = 6, this.intervalType = "month") : (this.interval = b / (1 * M.yearDuration) <= a ? 1 : b / (2 * M.yearDuration) <= a ? 2 : b / (4 * M.yearDuration) <= a ? 4 : Math.floor(A.getNiceNumber(b / (a - 1), true) / M.yearDuration), this.intervalType = "year"));
              if (null === this.viewportMinimum || isNaN(this.viewportMinimum))
                this.viewportMinimum = e - m / 2;
              if (null === this.viewportMaximum || isNaN(this.viewportMaximum))
                this.viewportMaximum = d2 + m / 2;
              g ? this.autoValueFormatString = "MMM DD YYYY HH:mm" : "year" === this.intervalType ? this.autoValueFormatString = "YYYY" : "month" === this.intervalType ? this.autoValueFormatString = "MMM YYYY" : "week" === this.intervalType ? this.autoValueFormatString = "MMM DD YYYY" : "day" === this.intervalType ? this.autoValueFormatString = "MMM DD YYYY" : "hour" === this.intervalType ? this.autoValueFormatString = "hh:mm TT" : "minute" === this.intervalType ? this.autoValueFormatString = "hh:mm TT" : "second" === this.intervalType ? this.autoValueFormatString = "hh:mm:ss TT" : "millisecond" === this.intervalType && (this.autoValueFormatString = "fff'ms'");
              this.valueFormatString || (this.valueFormatString = this.autoValueFormatString);
            } else {
              this.intervalType = "number";
              b = A.getNiceNumber(b, false);
              this.interval = this.options && 0 < this.options.interval ? this.options.interval : A.getNiceNumber(b / (a - 1), true);
              if (null === this.viewportMinimum || isNaN(this.viewportMinimum))
                this.viewportMinimum = "axisX" === this.type ? e - m / 2 : Math.floor(e / this.interval) * this.interval;
              if (null === this.viewportMaximum || isNaN(this.viewportMaximum))
                this.viewportMaximum = "axisX" === this.type ? d2 + m / 2 : Math.ceil(d2 / this.interval) * this.interval;
              0 === this.viewportMaximum && 0 === this.viewportMinimum && (0 === this.options.viewportMinimum ? this.viewportMaximum += 10 : 0 === this.options.viewportMaximum && (this.viewportMinimum -= 10), this.options && "undefined" === typeof this.options.interval && (this.interval = A.getNiceNumber((this.viewportMaximum - this.viewportMinimum) / (a - 1), true)));
            }
            if (null === this.minimum || null === this.maximum)
              if ("axisX" === this.type ? (e = null !== this.minimum ? this.minimum : this.dataInfo.min, d2 = null !== this.maximum ? this.maximum : this.dataInfo.max, 0 === d2 - e && (b = "undefined" === typeof this.options.interval ? 0.4 : this.options.interval, d2 += b, e -= b), m = Infinity !== this.dataInfo.minDiff ? this.dataInfo.minDiff : 1 < d2 - e ? 0.5 * Math.abs(d2 - e) : 1) : "axisY" === this.type && (e = null !== this.minimum ? this.minimum : this.dataInfo.min, d2 = null !== this.maximum ? this.maximum : this.dataInfo.max, isFinite(e) || isFinite(d2) ? 0 === e && 0 === d2 ? (d2 += 9, e = 0) : 0 === d2 - e ? (b = Math.min(Math.abs(0.01 * Math.abs(d2)), 5), d2 += b, e -= b) : e > d2 ? (b = Math.min(0.01 * Math.abs(this.getApparentDifference(d2, e, null, true)), 5), 0 <= d2 ? e = d2 - b : d2 = isFinite(e) ? e + b : 0) : (b = Math.min(0.01 * Math.abs(this.getApparentDifference(e, d2, null, true)), 0.05), 0 !== d2 && (d2 += b), 0 !== e && (e -= b)) : (d2 = "undefined" === typeof this.options.interval ? -Infinity : this.options.interval, e = "undefined" !== typeof this.options.interval || isFinite(this.dataInfo.minDiff) ? 0 : Infinity), m = Infinity !== this.dataInfo.minDiff ? this.dataInfo.minDiff : 1 < d2 - e ? 0.5 * Math.abs(d2 - e) : 1, this.includeZero && (null === this.minimum || isNaN(this.minimum)) && 0 < e && (e = 0), this.includeZero && (null === this.maximum || isNaN(this.maximum)) && 0 > d2 && (d2 = 0)), Math.abs(this.getApparentDifference(e, d2, null, true)), "axisX" === this.type && c) {
                this.valueType = "dateTime";
                if (null === this.minimum || isNaN(this.minimum))
                  this.minimum = e - m / 2, this.minimum = Math.min(this.minimum, null === this.sessionVariables.viewportMinimum || isNaN(this.sessionVariables.viewportMinimum) ? Infinity : this.sessionVariables.viewportMinimum);
                if (null === this.maximum || isNaN(this.maximum))
                  this.maximum = d2 + m / 2, this.maximum = Math.max(this.maximum, null === this.sessionVariables.viewportMaximum || isNaN(this.sessionVariables.viewportMaximum) ? -Infinity : this.sessionVariables.viewportMaximum);
              } else
                this.intervalType = this.valueType = "number", null === this.minimum && (this.minimum = "axisX" === this.type ? e - m / 2 : Math.floor(e / this.interval) * this.interval, this.minimum = Math.min(
                  this.minimum,
                  null === this.sessionVariables.viewportMinimum || isNaN(this.sessionVariables.viewportMinimum) ? Infinity : this.sessionVariables.viewportMinimum
                )), null === this.maximum && (this.maximum = "axisX" === this.type ? d2 + m / 2 : Math.ceil(d2 / this.interval) * this.interval, this.maximum = Math.max(this.maximum, null === this.sessionVariables.viewportMaximum || isNaN(this.sessionVariables.viewportMaximum) ? -Infinity : this.sessionVariables.viewportMaximum)), 0 === this.maximum && 0 === this.minimum && (0 === this.options.minimum ? this.maximum += 10 : 0 === this.options.maximum && (this.minimum -= 10));
            n(this.sessionVariables.newViewportMinimum) && (this.viewportMinimum = Math.max(this.viewportMinimum, this.minimum));
            n(this.sessionVariables.newViewportMaximum) && (this.viewportMaximum = Math.min(this.viewportMaximum, this.maximum));
            this.range = this.viewportMaximum - this.viewportMinimum;
            this.intervalStartPosition = "axisX" === this.type && c ? this.getLabelStartPoint(new Date(this.viewportMinimum), this.intervalType, this.interval) : Math.floor((this.viewportMinimum + 0.2 * this.interval) / this.interval) * this.interval;
            this.valueFormatString || (this.valueFormatString = A.generateValueFormatString(this.range, 2));
          }
        };
        A.prototype.calculateLogarithmicAxisParameters = function() {
          var a = this.chart.layoutManager.getFreeSpace(), g = Math.log(this.logarithmBase), c;
          "bottom" === this._position || "top" === this._position ? (this.maxWidth = a.width, this.maxHeight = a.height) : (this.maxWidth = a.height, this.maxHeight = a.width);
          var a = "axisX" === this.type ? 500 > this.maxWidth ? 7 : Math.max(7, Math.floor(this.maxWidth / 100)) : Math.max(Math.floor(this.maxWidth / 50), 3), b, e, d2, m;
          m = 1;
          if (null === this.viewportMinimum || isNaN(this.viewportMinimum))
            this.viewportMinimum = this.minimum;
          if (null === this.viewportMaximum || isNaN(this.viewportMaximum))
            this.viewportMaximum = this.maximum;
          if (this.scaleBreaks) {
            for (m = 0; m < this.scaleBreaks._appliedBreaks.length; m++)
              if ((!n(this.sessionVariables.newViewportMinimum) && this.sessionVariables.newViewportMinimum >= this.scaleBreaks._appliedBreaks[m].startValue || !n(this.options.minimum) && this.options.minimum >= this.scaleBreaks._appliedBreaks[m].startValue || !n(this.options.viewportMinimum) && this.viewportMinimum >= this.scaleBreaks._appliedBreaks[m].startValue) && (!n(this.sessionVariables.newViewportMaximum) && this.sessionVariables.newViewportMaximum <= this.scaleBreaks._appliedBreaks[m].endValue || !n(this.options.maximum) && this.options.maximum <= this.scaleBreaks._appliedBreaks[m].endValue || !n(this.options.viewportMaximum) && this.viewportMaximum <= this.scaleBreaks._appliedBreaks[m].endValue)) {
                this.scaleBreaks._appliedBreaks.splice(m, 1);
                break;
              }
          }
          "axisX" === this.type ? (b = null !== this.viewportMinimum ? this.viewportMinimum : this.dataInfo.viewPortMin, e = null !== this.viewportMaximum ? this.viewportMaximum : this.dataInfo.viewPortMax, 1 === e / b && (m = Math.pow(this.logarithmBase, "undefined" === typeof this.options.interval ? 0.4 : this.options.interval), e *= m, b /= m), d2 = Infinity !== this.dataInfo.minDiff ? this.dataInfo.minDiff : e / b > this.logarithmBase ? e / b * Math.pow(this.logarithmBase, 0.5) : this.logarithmBase) : "axisY" === this.type && (b = null !== this.viewportMinimum ? this.viewportMinimum : this.dataInfo.viewPortMin, e = null !== this.viewportMaximum ? this.viewportMaximum : this.dataInfo.viewPortMax, 0 >= b && !isFinite(e) ? (e = "undefined" === typeof this.options.interval ? 0 : this.options.interval, b = 1) : 0 >= b ? b = e : isFinite(e) || (e = b), 1 === b && 1 === e ? (e *= this.logarithmBase - 1 / this.logarithmBase, b = 1) : 1 === e / b ? (m = Math.min(e * Math.pow(this.logarithmBase, 0.01), Math.pow(this.logarithmBase, 5)), e *= m, b /= m) : b > e ? (m = Math.min(b / e * Math.pow(this.logarithmBase, 0.01), Math.pow(this.logarithmBase, 5)), 1 <= e ? b = e / m : e = b * m) : (m = Math.min(e / b * Math.pow(
            this.logarithmBase,
            0.01
          ), Math.pow(this.logarithmBase, 0.04)), 1 !== e && (e *= m), 1 !== b && (b /= m)), d2 = Infinity !== this.dataInfo.minDiff ? this.dataInfo.minDiff : e / b > this.logarithmBase ? e / b * Math.pow(this.logarithmBase, 0.5) : this.logarithmBase, this.includeZero && (null === this.viewportMinimum || isNaN(this.viewportMinimum)) && 1 < b && (b = 1), this.includeZero && (null === this.viewportMaximum || isNaN(this.viewportMaximum)) && 1 > e && (e = 1));
          m = (isNaN(this.viewportMaximum) || null === this.viewportMaximum ? e : this.viewportMaximum) / (isNaN(this.viewportMinimum) || null === this.viewportMinimum ? b : this.viewportMinimum);
          var p2 = (isNaN(this.viewportMaximum) || null === this.viewportMaximum ? e : this.viewportMaximum) - (isNaN(this.viewportMinimum) || null === this.viewportMinimum ? b : this.viewportMinimum);
          this.intervalType = "number";
          m = Math.pow(this.logarithmBase, A.getNiceNumber(Math.abs(Math.log(m) / g), false));
          this.options && 0 < this.options.interval ? this.interval = this.options.interval : (this.interval = A.getNiceExponent(Math.log(m) / g / (a - 1), true), c = A.getNiceNumber(p2 / (a - 1), true));
          if (null === this.viewportMinimum || isNaN(this.viewportMinimum))
            this.viewportMinimum = "axisX" === this.type ? b / Math.sqrt(d2) : Math.pow(this.logarithmBase, this.interval * Math.floor(Math.log(b) / g / this.interval));
          if (null === this.viewportMaximum || isNaN(this.viewportMaximum))
            this.viewportMaximum = "axisX" === this.type ? e * Math.sqrt(d2) : Math.pow(this.logarithmBase, this.interval * Math.ceil(Math.log(e) / g / this.interval));
          1 === this.viewportMaximum && 1 === this.viewportMinimum && (1 === this.options.viewportMinimum ? this.viewportMaximum *= this.logarithmBase - 1 / this.logarithmBase : 1 === this.options.viewportMaximum && (this.viewportMinimum /= this.logarithmBase - 1 / this.logarithmBase), this.options && "undefined" === typeof this.options.interval && (this.interval = A.getNiceExponent(Math.ceil(Math.log(m) / g) / (a - 1)), c = A.getNiceNumber((this.viewportMaximum - this.viewportMinimum) / (a - 1), true)));
          if (null === this.minimum || null === this.maximum)
            "axisX" === this.type ? (b = null !== this.minimum ? this.minimum : this.dataInfo.min, e = null !== this.maximum ? this.maximum : this.dataInfo.max, 1 === e / b && (m = Math.pow(
              this.logarithmBase,
              "undefined" === typeof this.options.interval ? 0.4 : this.options.interval
            ), e *= m, b /= m), d2 = Infinity !== this.dataInfo.minDiff ? this.dataInfo.minDiff : e / b > this.logarithmBase ? e / b * Math.pow(this.logarithmBase, 0.5) : this.logarithmBase) : "axisY" === this.type && (b = null !== this.minimum ? this.minimum : this.dataInfo.min, e = null !== this.maximum ? this.maximum : this.dataInfo.max, isFinite(b) || isFinite(e) ? 1 === b && 1 === e ? (e *= this.logarithmBase, b /= this.logarithmBase) : 1 === e / b ? (m = Math.pow(this.logarithmBase, this.interval), e *= m, b /= m) : b > e ? (m = Math.min(0.01 * (b / e), 5), 1 <= e ? b = e / m : e = b * m) : (m = Math.min(e / b * Math.pow(this.logarithmBase, 0.01), Math.pow(this.logarithmBase, 0.04)), 1 !== e && (e *= m), 1 !== b && (b /= m)) : (e = "undefined" === typeof this.options.interval ? 0 : this.options.interval, b = 1), d2 = Infinity !== this.dataInfo.minDiff ? this.dataInfo.minDiff : e / b > this.logarithmBase ? e / b * Math.pow(this.logarithmBase, 0.5) : this.logarithmBase, this.includeZero && (null === this.minimum || isNaN(this.minimum)) && 1 < b && (b = 1), this.includeZero && (null === this.maximum || isNaN(this.maximum)) && 1 > e && (e = 1)), this.intervalType = "number", null === this.minimum && (this.minimum = "axisX" === this.type ? b / Math.sqrt(d2) : Math.pow(this.logarithmBase, this.interval * Math.floor(Math.log(b) / g / this.interval)), n(null === this.sessionVariables.viewportMinimum || isNaN(this.sessionVariables.viewportMinimum) ? "undefined" === typeof this.sessionVariables.newViewportMinimum ? Infinity : this.sessionVariables.newViewportMinimum : this.sessionVariables.viewportMinimum) || (this.minimum = Math.min(this.minimum, null === this.sessionVariables.viewportMinimum || isNaN(this.sessionVariables.viewportMinimum) ? "undefined" === typeof this.sessionVariables.newViewportMinimum ? Infinity : this.sessionVariables.newViewportMinimum : this.sessionVariables.viewportMinimum))), null === this.maximum && (this.maximum = "axisX" === this.type ? e * Math.sqrt(d2) : Math.pow(this.logarithmBase, this.interval * Math.ceil(Math.log(e) / g / this.interval)), n(null === this.sessionVariables.viewportMaximum || isNaN(this.sessionVariables.viewportMaximum) ? "undefined" === typeof this.sessionVariables.newViewportMaximum ? 0 : this.sessionVariables.newViewportMaximum : this.sessionVariables.viewportMaximum) || (this.maximum = Math.max(this.maximum, null === this.sessionVariables.viewportMaximum || isNaN(this.sessionVariables.viewportMaximum) ? "undefined" === typeof this.sessionVariables.newViewportMaximum ? 0 : this.sessionVariables.newViewportMaximum : this.sessionVariables.viewportMaximum))), 1 === this.maximum && 1 === this.minimum && (1 === this.options.minimum ? this.maximum *= this.logarithmBase - 1 / this.logarithmBase : 1 === this.options.maximum && (this.minimum /= this.logarithmBase - 1 / this.logarithmBase));
          this.viewportMinimum = Math.max(this.viewportMinimum, this.minimum);
          this.viewportMaximum = Math.min(this.viewportMaximum, this.maximum);
          this.viewportMinimum > this.viewportMaximum && (!this.options.viewportMinimum && !this.options.minimum || this.options.viewportMaximum || this.options.maximum ? this.options.viewportMinimum || this.options.minimum || !this.options.viewportMaximum && !this.options.maximum || (this.viewportMinimum = this.minimum = (this.options.viewportMaximum || this.options.maximum) / Math.pow(this.logarithmBase, 2 * Math.ceil(this.interval))) : this.viewportMaximum = this.maximum = this.options.viewportMinimum || this.options.minimum);
          b = Math.pow(this.logarithmBase, Math.floor(Math.log(this.viewportMinimum) / (g * this.interval) + 0.2) * this.interval);
          this.range = this.viewportMaximum / this.viewportMinimum;
          this.noTicks = a;
          if (!this.options.interval && this.range < Math.pow(this.logarithmBase, 8 > this.viewportMaximum || 3 > a ? 2 : 3)) {
            for (g = Math.floor(this.viewportMinimum / c + 0.5) * c; g < this.viewportMinimum; )
              g += c;
            this.equidistantInterval = false;
            this.intervalStartPosition = g;
            this.interval = c;
          } else
            this.options.interval || (c = Math.ceil(this.interval), this.range > this.interval && (this.interval = c, b = Math.pow(this.logarithmBase, Math.floor(Math.log(this.viewportMinimum) / (g * this.interval) + 0.2) * this.interval))), this.equidistantInterval = true, this.intervalStartPosition = b;
          if (!this.valueFormatString && (this.valueFormatString = "#,##0.##", 1 > this.viewportMinimum)) {
            g = Math.floor(Math.abs(Math.log(this.viewportMinimum) / Math.LN10)) + 2;
            if (isNaN(g) || !isFinite(g))
              g = 2;
            if (2 < g)
              for (m = 0; m < g - 2; m++)
                this.valueFormatString += "#";
          }
        };
        A.generateValueFormatString = function(a, g) {
          var c = "#,##0.", b = g;
          1 > a && (b += Math.floor(Math.abs(Math.log(a) / Math.LN10)), isNaN(b) || !isFinite(b)) && (b = g);
          for (var e = 0; e < b; e++)
            c += "#";
          return c;
        };
        A.getNiceExponent = function(a, g) {
          var c = Math.floor(Math.log(a) / Math.LN10), b = a / Math.pow(10, c), b = 0 > c ? 1 >= b ? 1 : 5 >= b ? 5 : 10 : Math.max(Math.floor(b), 1);
          return -20 > c ? Number(b * Math.pow(10, c)) : Number((b * Math.pow(10, c)).toFixed(20));
        };
        A.getNiceNumber = function(a, g) {
          var c = Math.floor(Math.log(a) / Math.LN10), b = a / Math.pow(10, c), b = g ? 1.5 > b ? 1 : 3 > b ? 2 : 7 > b ? 5 : 10 : 1 >= b ? 1 : 2 >= b ? 2 : 5 >= b ? 5 : 10;
          return -20 > c ? Number(b * Math.pow(10, c)) : Number((b * Math.pow(10, c)).toFixed(20));
        };
        A.prototype.getLabelStartPoint = function() {
          var a = M[this.intervalType + "Duration"] * this.interval, a = new Date(Math.floor(this.viewportMinimum / a) * a);
          if ("millisecond" !== this.intervalType)
            if ("second" === this.intervalType)
              0 < a.getMilliseconds() && (a.setSeconds(a.getSeconds() + 1), a.setMilliseconds(0));
            else if ("minute" === this.intervalType) {
              if (0 < a.getSeconds() || 0 < a.getMilliseconds())
                a.setMinutes(a.getMinutes() + 1), a.setSeconds(0), a.setMilliseconds(0);
            } else if ("hour" === this.intervalType) {
              if (0 < a.getMinutes() || 0 < a.getSeconds() || 0 < a.getMilliseconds())
                a.setHours(a.getHours() + 1), a.setMinutes(0), a.setSeconds(0), a.setMilliseconds(0);
            } else if ("day" === this.intervalType) {
              if (0 < a.getHours() || 0 < a.getMinutes() || 0 < a.getSeconds() || 0 < a.getMilliseconds())
                a.setDate(a.getDate() + 1), a.setHours(0), a.setMinutes(0), a.setSeconds(0), a.setMilliseconds(0);
            } else if ("week" === this.intervalType) {
              if (0 < a.getDay() || 0 < a.getHours() || 0 < a.getMinutes() || 0 < a.getSeconds() || 0 < a.getMilliseconds())
                a.setDate(a.getDate() + (7 - a.getDay())), a.setHours(0), a.setMinutes(0), a.setSeconds(0), a.setMilliseconds(0);
            } else if ("month" === this.intervalType) {
              if (1 < a.getDate() || 0 < a.getHours() || 0 < a.getMinutes() || 0 < a.getSeconds() || 0 < a.getMilliseconds())
                a.setMonth(a.getMonth() + 1), a.setDate(1), a.setHours(0), a.setMinutes(0), a.setSeconds(0), a.setMilliseconds(0);
            } else
              "year" === this.intervalType && (0 < a.getMonth() || 1 < a.getDate() || 0 < a.getHours() || 0 < a.getMinutes() || 0 < a.getSeconds() || 0 < a.getMilliseconds()) && (a.setFullYear(a.getFullYear() + 1), a.setMonth(0), a.setDate(1), a.setHours(0), a.setMinutes(0), a.setSeconds(0), a.setMilliseconds(0));
          return a;
        };
        pa(ea2, Y);
        pa(ca2, Y);
        ca2.prototype.createUserOptions = function(a) {
          if ("undefined" !== typeof a || this.options._isPlaceholder) {
            var g = 0;
            this.parent.options._isPlaceholder && this.parent.createUserOptions();
            this.options._isPlaceholder || (Da(this.parent[this.optionsName]), g = this.parent.options[this.optionsName].indexOf(this.options));
            this.options = "undefined" === typeof a ? {} : a;
            this.parent.options[this.optionsName][g] = this.options;
          }
        };
        ca2.prototype.render = function(a) {
          if (0 !== this.spacing || 0 !== this.options.lineThickness && ("undefined" !== typeof this.options.lineThickness || 0 !== this.parent.lineThickness)) {
            var g = this.ctx, c = this.ctx.globalAlpha;
            this.ctx = a || this.ctx;
            this.ctx.save();
            this.ctx.beginPath();
            this.ctx.rect(this.chart.plotArea.x1, this.chart.plotArea.y1, this.chart.plotArea.width, this.chart.plotArea.height);
            this.ctx.clip();
            var b = this.scaleBreaks.parent.getPixelCoordinatesOnAxis(this.startValue), e = this.scaleBreaks.parent.getPixelCoordinatesOnAxis(this.endValue);
            this.ctx.strokeStyle = this.lineColor;
            this.ctx.fillStyle = this.color;
            this.ctx.beginPath();
            this.ctx.globalAlpha = 1;
            U(this.id);
            var d2, m, p2, n2, k, l;
            a = Math.max(this.spacing, 3);
            var q = Math.max(0, this.lineThickness);
            this.ctx.lineWidth = q;
            this.ctx.setLineDash && this.ctx.setLineDash(G(this.lineDashType, q));
            if ("bottom" === this.scaleBreaks.parent._position || "top" === this.scaleBreaks.parent._position)
              if (b = 1 === q % 2 ? (b.x << 0) + 0.5 : b.x << 0, m = 1 === q % 2 ? (e.x << 0) + 0.5 : e.x << 0, "top" === this.scaleBreaks.parent._position ? (e = this.chart.plotArea.y1, p2 = this.chart.plotArea.y2 + q / 2 + 0.5 << 0) : (e = this.chart.plotArea.y2, p2 = this.chart.plotArea.y1 - q / 2 + 0.5 << 0, a *= -1), this.bounds = { x1: b - q / 2, y1: e, x2: m + q / 2, y2: p2 }, this.ctx.moveTo(b, e), "straight" === this.type || "top" === this.scaleBreaks.parent._position && 0 >= a || "bottom" === this.scaleBreaks.parent._position && 0 <= a)
                this.ctx.lineTo(b, p2), this.ctx.lineTo(m, p2), this.ctx.lineTo(m, e);
              else if ("wavy" === this.type) {
                n2 = b;
                k = e;
                d2 = 0.5;
                l = (p2 - k) / a / 3;
                for (var r = 0; r < l; r++)
                  this.ctx.bezierCurveTo(n2 + d2 * a, k + a, n2 + d2 * a, k + 2 * a, n2, k + 3 * a), k += 3 * a, d2 *= -1;
                this.ctx.bezierCurveTo(n2 + d2 * a, k + a, n2 + d2 * a, k + 2 * a, n2, k + 3 * a);
                n2 = m;
                d2 *= -1;
                this.ctx.lineTo(n2, k);
                for (r = 0; r < l; r++)
                  this.ctx.bezierCurveTo(n2 + d2 * a, k - a, n2 + d2 * a, k - 2 * a, n2, k - 3 * a), k -= 3 * a, d2 *= -1;
              } else {
                if ("zigzag" === this.type) {
                  d2 = -1;
                  k = e + a;
                  n2 = b + a;
                  l = (p2 - k) / a / 2;
                  for (r = 0; r < l; r++)
                    this.ctx.lineTo(n2, k), n2 += 2 * d2 * a, k += 2 * a, d2 *= -1;
                  this.ctx.lineTo(n2, k);
                  n2 += m - b;
                  for (r = 0; r < l + 1; r++)
                    this.ctx.lineTo(n2, k), n2 += 2 * d2 * a, k -= 2 * a, d2 *= -1;
                  this.ctx.lineTo(n2 + d2 * a, k + a);
                }
              }
            else if ("left" === this.scaleBreaks.parent._position || "right" === this.scaleBreaks.parent._position) {
              if (e = 1 === q % 2 ? (e.y << 0) + 0.5 : e.y << 0, p2 = 1 === q % 2 ? (b.y << 0) + 0.5 : b.y << 0, "left" === this.scaleBreaks.parent._position ? (b = this.chart.plotArea.x1, m = this.chart.plotArea.x2 + q / 2 + 0.5 << 0) : (b = this.chart.plotArea.x2, m = this.chart.plotArea.x1 - q / 2 + 0.5 << 0, a *= -1), this.bounds = { x1: b, y1: e - q / 2, x2: m, y2: p2 + q / 2 }, this.ctx.moveTo(b, e), "straight" === this.type || "left" === this.scaleBreaks.parent._position && 0 >= a || "right" === this.scaleBreaks.parent._position && 0 <= a)
                this.ctx.lineTo(m, e), this.ctx.lineTo(m, p2), this.ctx.lineTo(b, p2);
              else if ("wavy" === this.type) {
                n2 = b;
                k = e;
                d2 = 0.5;
                l = (m - n2) / a / 3;
                for (r = 0; r < l; r++)
                  this.ctx.bezierCurveTo(n2 + a, k + d2 * a, n2 + 2 * a, k + d2 * a, n2 + 3 * a, k), n2 += 3 * a, d2 *= -1;
                this.ctx.bezierCurveTo(n2 + a, k + d2 * a, n2 + 2 * a, k + d2 * a, n2 + 3 * a, k);
                k = p2;
                d2 *= -1;
                this.ctx.lineTo(n2, k);
                for (r = 0; r < l; r++)
                  this.ctx.bezierCurveTo(n2 - a, k + d2 * a, n2 - 2 * a, k + d2 * a, n2 - 3 * a, k), n2 -= 3 * a, d2 *= -1;
              } else if ("zigzag" === this.type) {
                d2 = 1;
                k = e - a;
                n2 = b + a;
                l = (m - n2) / a / 2;
                for (r = 0; r < l; r++)
                  this.ctx.lineTo(n2, k), k += 2 * d2 * a, n2 += 2 * a, d2 *= -1;
                this.ctx.lineTo(n2, k);
                k += p2 - e;
                for (r = 0; r < l + 1; r++)
                  this.ctx.lineTo(
                    n2,
                    k
                  ), k += 2 * d2 * a, n2 -= 2 * a, d2 *= -1;
                this.ctx.lineTo(n2 + a, k + d2 * a);
              }
            }
            0 < q && this.ctx.stroke();
            this.ctx.closePath();
            this.ctx.globalAlpha = this.fillOpacity;
            this.ctx.globalCompositeOperation = "destination-over";
            this.ctx.fill();
            this.ctx.restore();
            this.ctx.globalAlpha = c;
            this.ctx = g;
          }
        };
        pa(N, Y);
        N.prototype.createUserOptions = function(a) {
          if ("undefined" !== typeof a || this.options._isPlaceholder) {
            var g = 0;
            this.parent.options._isPlaceholder && this.parent.createUserOptions();
            this.options._isPlaceholder || (Da(this.parent.stripLines), g = this.parent.options.stripLines.indexOf(this.options));
            this.options = "undefined" === typeof a ? {} : a;
            this.parent.options.stripLines[g] = this.options;
          }
        };
        N.prototype.render = function() {
          this.ctx.save();
          var a = this.parent.getPixelCoordinatesOnAxis(this.value), g = Math.abs("pixel" === this._thicknessType ? this.thickness : Math.abs(this.parent.convertValueToPixel(this.endValue) - this.parent.convertValueToPixel(this.startValue)));
          if (0 < g) {
            var c = null === this.opacity ? 1 : this.opacity;
            this.ctx.strokeStyle = this.color;
            this.ctx.beginPath();
            var b = this.ctx.globalAlpha;
            this.ctx.globalAlpha = c;
            U(this.id);
            var e, d2, m, n2;
            this.ctx.lineWidth = g;
            this.ctx.setLineDash && this.ctx.setLineDash(G(this.lineDashType, g));
            if ("bottom" === this.parent._position || "top" === this.parent._position)
              e = d2 = 1 === this.ctx.lineWidth % 2 ? (a.x << 0) + 0.5 : a.x << 0, m = this.chart.plotArea.y1, n2 = this.chart.plotArea.y2, this.bounds = { x1: e - g / 2, y1: m, x2: d2 + g / 2, y2: n2 };
            else if ("left" === this.parent._position || "right" === this.parent._position)
              m = n2 = 1 === this.ctx.lineWidth % 2 ? (a.y << 0) + 0.5 : a.y << 0, e = this.chart.plotArea.x1, d2 = this.chart.plotArea.x2, this.bounds = { x1: e, y1: m - g / 2, x2: d2, y2: n2 + g / 2 };
            this.ctx.moveTo(e, m);
            this.ctx.lineTo(d2, n2);
            this.ctx.stroke();
            this.ctx.globalAlpha = b;
          }
          this.ctx.restore();
        };
        pa(da2, Y);
        da2.prototype.showAt = function(a) {
          if (!this.enabled)
            return false;
          var g = this.chart, c = false;
          g.resetOverlayedCanvas();
          g.clearedOverlayedCanvas = this.parent.type;
          this.chart.renderCrosshairs(this.parent);
          if ("xySwapped" === g.plotInfo.axisPlacement)
            if ("bottom" === this.parent._position)
              for (var b = 0; b < g.axisY.length; b++)
                this.parent === g.axisY[b] && (g.axisY[b]._crosshairValue = a >= g.axisY[b].viewportMinimum && a <= g.axisY[b].viewportMaximum ? a : null);
            else if ("top" === this.parent._position)
              for (b = 0; b < g.axisY2.length; b++)
                this.parent === g.axisY2[b] && (g.axisY2[b]._crosshairValue = a >= g.axisY2[b].viewportMinimum && a <= g.axisY2[b].viewportMaximum ? a : null);
            else if ("left" === this.parent._position)
              for (b = 0; b < g.axisX.length; b++)
                this.parent === g.axisX[b] && (g.axisX[b]._crosshairValue = a >= g.axisX[b].viewportMinimum && a <= g.axisX[b].viewportMaximum ? a : null);
            else {
              if ("right" === this.parent._position)
                for (b = 0; b < g.axisX2.length; b++)
                  this.parent === g.axisX2[b] && (g.axisX2[b]._crosshairValue = a >= g.axisX2[b].viewportMinimum && a <= g.axisX2[b].viewportMaximum ? a : null);
            }
          else if ("bottom" === this.parent._position)
            for (b = 0; b < g.axisX.length; b++)
              this.parent === g.axisX[b] && (g.axisX[b]._crosshairValue = a >= g.axisX[b].viewportMinimum && a <= g.axisX[b].viewportMaximum ? a : null);
          else if ("top" === this.parent._position)
            for (b = 0; b < g.axisX2.length; b++)
              this.parent === g.axisX2[b] && (g.axisX2[b]._crosshairValue = a >= g.axisX2[b].viewportMinimum && a <= g.axisX2[b].viewportMaximum ? a : null);
          else if ("left" === this.parent._position)
            for (b = 0; b < g.axisY.length; b++)
              this.parent === g.axisY[b] && (g.axisY[b]._crosshairValue = a >= g.axisY[b].viewportMinimum && a <= g.axisY[b].viewportMaximum ? a : null);
          else if ("right" === this.parent._position)
            for (b = 0; b < g.axisY2.length; b++)
              this.parent === g.axisY2[b] && (g.axisY2[b]._crosshairValue = a >= g.axisY2[b].viewportMinimum && a <= g.axisY2[b].viewportMaximum ? a : null);
          for (b = 0; b < g.axisX.length; b++)
            a = g.axisX[b]._crosshairValue, g.axisX[b].crosshair && (g.axisX[b].crosshair.enabled && !n(a) && a >= g.axisX[b].viewportMinimum && a <= g.axisX[b].viewportMaximum) && (g.axisX[b].showCrosshair(a), g.axisX[b].sessionVariables.crosshairValue = g.axisX[b].crosshair._updatedValue = a, this === g.axisX[b].crosshair && (c = true));
          for (b = 0; b < g.axisX2.length; b++)
            a = g.axisX2[b]._crosshairValue, g.axisX2[b].crosshair && (g.axisX2[b].crosshair.enabled && !n(a) && a >= g.axisX2[b].viewportMinimum && a <= g.axisX2[b].viewportMaximum) && (g.axisX2[b].showCrosshair(a), g.axisX2[b].sessionVariables.crosshairValue = g.axisX2[b].crosshair._updatedValue = a, this === g.axisX2[b].crosshair && (c = true));
          for (b = 0; b < g.axisY.length; b++)
            a = g.axisY[b]._crosshairValue, g.axisY[b].crosshair && (g.axisY[b].crosshair.enabled && !n(a) && a >= g.axisY[b].viewportMinimum && a <= g.axisY[b].viewportMaximum) && (g.axisY[b].showCrosshair(a), g.axisY[b].sessionVariables.crosshairValue = g.axisY[b].crosshair._updatedValue = a, this === g.axisY[b].crosshair && (c = true));
          for (b = 0; b < g.axisY2.length; b++)
            a = g.axisY2[b]._crosshairValue, g.axisY2[b].crosshair && (g.axisY2[b].crosshair.enabled && !n(a) && a >= g.axisY2[b].viewportMinimum && a <= g.axisY2[b].viewportMaximum) && (g.axisY2[b].showCrosshair(a), g.axisY2[b].sessionVariables.crosshairValue = g.axisY2[b].crosshair._updatedValue = a, this === g.axisY2[b].crosshair && (c = true));
          this.chart.toolTip && this.chart.toolTip._entries && this.chart.toolTip.highlightObjects(this.chart.toolTip._entries);
          return c;
        };
        da2.prototype.hide = function() {
          this.chart.resetOverlayedCanvas();
          this.chart.renderCrosshairs(this.parent);
          this._hidden = true;
        };
        da2.prototype.render = function(a, g, c) {
          var b, d2, h, m, p2 = null, t3 = null, k = null, l = "";
          this.valueFormatString || ("dateTime" === this.parent.valueType ? this.valueFormatString = this.parent.valueFormatString : (k = 0, k = "xySwapped" === this.chart.plotInfo.axisPlacement ? 50 < this.parent.range ? 0 : 500 < this.chart.width && 25 > this.parent.range ? 2 : Math.floor(Math.abs(Math.log(this.parent.range) / Math.LN10)) + (5 > this.parent.range ? 2 : 10 > this.parent.range ? 1 : 0) : 50 < this.parent.range ? 0 : Math.floor(Math.abs(Math.log(this.parent.range) / Math.LN10)) + (5 > this.parent.range ? 2 : 10 > this.parent.range ? 1 : 0), this.valueFormatString = A.generateValueFormatString(
            this.parent.range,
            k
          )));
          var q = null === this.opacity ? 1 : this.opacity, r = Math.abs("pixel" === this._thicknessType ? this.thickness : this.parent.conversionParameters.pixelPerUnit * this.thickness), f = this.chart.overlaidCanvasCtx, v2 = f.globalAlpha;
          f.beginPath();
          f.strokeStyle = this.color;
          f.lineWidth = r;
          f.save();
          this.labelFontSize = Math.abs(n(this.options.labelFontSize) ? this.parent.labelFontSize : this.labelFontSize);
          this.labelMaxWidth = n(this.options.labelMaxWidth) ? 0.3 * this.chart.width : this.labelMaxWidth;
          this.labelMaxHeight = n(this.options.labelWrap) || this.labelWrap ? 0.3 * this.chart.height : 2 * this.labelFontSize;
          0 < r && f.setLineDash && f.setLineDash(G(this.lineDashType, r));
          k = new ja(f, {
            x: 0,
            y: 0,
            padding: { top: 2, right: 3, bottom: 2, left: 4 },
            backgroundColor: this.labelBackgroundColor,
            borderColor: this.labelBorderColor,
            borderThickness: this.labelBorderThickness,
            cornerRadius: this.labelCornerRadius,
            maxWidth: this.labelMaxWidth,
            maxHeight: this.labelMaxHeight,
            angle: this.labelAngle,
            text: l,
            textAlign: this.labelTextAlign,
            fontSize: this.labelFontSize,
            fontFamily: this.labelFontFamily,
            fontWeight: this.labelFontWeight,
            fontColor: this.labelFontColor,
            fontStyle: this.labelFontStyle,
            textBaseline: "middle"
          });
          if (this.snapToDataPoint) {
            var w = 0, l = [];
            if ("xySwapped" === this.chart.plotInfo.axisPlacement) {
              var x = null;
              if ("bottom" === this.parent._position || "top" === this.parent._position)
                w = this.parent.dataSeries[0].axisX.convertPixelToValue({ y: g });
              else if ("left" === this.parent._position || "right" === this.parent._position)
                w = this.parent.convertPixelToValue({ y: g });
              for (var s = 0; s < this.parent.dataSeries.length; s++)
                (x = this.parent.dataSeries[s].getDataPointAtX(w, true)) && 0 <= x.index && (x.dataSeries = this.parent.dataSeries[s], null !== x.dataPoint.y && x.dataSeries.visible && l.push(x));
              x = null;
              if (0 === l.length)
                return;
              l.sort(function(a2, b2) {
                return a2.distance - b2.distance;
              });
              var z = x = 0;
              yPercent = cumulativeY = 0;
              for (var w = Infinity, u, s = 0; s < l.length; s++) {
                if ("rangeBar" === l[s].dataSeries.type || "error" === l[s].dataSeries.type) {
                  if (l[s].dataPoint.y)
                    for (var B3 = 0; B3 < l[s].dataPoint.y.length; B3++)
                      z = Math.abs(a - this.parent.convertValueToPixel(l[s].dataPoint.y[B3])), z <= w && (w = z, x = s);
                } else
                  "stackedBar" === l[s].dataSeries.type ? (cumulativeY = l[s].dataSeries.dataPointEOs[l[s].index].cumulativeY, z = Math.abs(a - this.parent.convertValueToPixel(cumulativeY)), z <= w && (w = z, x = s)) : "stackedBar100" === l[s].dataSeries.type ? (z = l[0].dataPoint.x.getTime ? l[0].dataPoint.x.getTime() : l[0].dataPoint.x, n(u) && (u = Math.abs(a - this.parent.convertValueToPixel(100 * (l[0].dataSeries.dataPointEOs[l[0].index].cumulativeY / l[0].dataSeries.plotUnit.dataPointYSums[z])))), cumulativeY = l[s].dataSeries.dataPointEOs[l[s].index].cumulativeY, z = l[s].dataPoint.x.getTime ? l[s].dataPoint.x.getTime() : l[s].dataPoint.x, yPercent = 100 * (cumulativeY / l[s].dataSeries.plotUnit.dataPointYSums[z]), z = Math.abs(a - this.parent.convertValueToPixel(yPercent)), z <= u && (u = z, x = s)) : (z = Math.abs(a - this.parent.convertValueToPixel(l[s].dataPoint.y)), z <= w && (w = z, x = s));
                n(u) || (w = Math.min(w, u));
              }
              u = l[x];
              s = 0;
              if ("bottom" === this.parent._position || "top" === this.parent._position) {
                if ("rangeBar" === u.dataSeries.type || "error" === u.dataSeries.type) {
                  w = Math.abs(a - this.parent.convertValueToPixel(u.dataPoint.y[0]));
                  for (l = 0; l < u.dataPoint.y.length; l++)
                    z = Math.abs(a - this.parent.convertValueToPixel(u.dataPoint.y[l])), z < w && (w = z, s = l);
                  p2 = 1 === f.lineWidth % 2 ? (this.parent.convertValueToPixel(u.dataPoint.y[s]) << 0) + 0.5 : this.parent.convertValueToPixel(u.dataPoint.y[s]) << 0;
                  this.value = u.dataPoint.y[s];
                  k.text = this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: u.dataPoint.y[s] }) : n(this.options.label) ? fa(n(c) ? u.dataPoint.y[s] : c, this.valueFormatString, this.chart._cultureInfo) : this.label;
                } else
                  "stackedBar" === u.dataSeries.type ? (w = Math.abs(a - this.parent.convertValueToPixel(l[0].dataPoint.y)), cumulativeY = u.dataSeries.dataPointEOs[u.index].cumulativeY, p2 = 1 === f.lineWidth % 2 ? (this.parent.convertValueToPixel(cumulativeY) << 0) + 0.5 : this.parent.convertValueToPixel(cumulativeY) << 0, this.value = cumulativeY, k.text = this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: cumulativeY }) : n(this.options.label) ? fa(
                    n(c) ? cumulativeY : c,
                    this.valueFormatString,
                    this.chart._cultureInfo
                  ) : this.label) : "stackedBar100" === u.dataSeries.type ? (w = Math.abs(a - this.parent.convertValueToPixel(l[0].dataPoint.y)), cumulativeY = u.dataSeries.dataPointEOs[u.index].cumulativeY, z = u.dataPoint.x.getTime ? u.dataPoint.x.getTime() : u.dataPoint.x, yPercent = 100 * (cumulativeY / u.dataSeries.plotUnit.dataPointYSums[z]), p2 = 1 === f.lineWidth % 2 ? (this.parent.convertValueToPixel(yPercent) << 0) + 0.5 : this.parent.convertValueToPixel(yPercent) << 0, this.value = yPercent, k.text = this.labelFormatter ? this.labelFormatter({
                    chart: this.chart,
                    axis: this.parent.options,
                    crosshair: this.options,
                    value: yPercent
                  }) : n(this.options.label) ? fa(n(c) ? yPercent : c, this.valueFormatString, this.chart._cultureInfo) : this.label) : (p2 = 1 === f.lineWidth % 2 ? (this.parent.convertValueToPixel(u.dataPoint.y) << 0) + 0.5 : this.parent.convertValueToPixel(u.dataPoint.y) << 0, this.value = u.dataPoint.y, k.text = this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: u.dataPoint.y }) : n(this.options.label) ? fa(
                    n(c) ? u.dataPoint.y : c,
                    this.valueFormatString,
                    this.chart._cultureInfo
                  ) : this.label);
                b = d2 = p2;
                h = this.chart.plotArea.y1;
                m = this.chart.plotArea.y2;
                this.bounds = { x1: b - r / 2, y1: h, x2: d2 + r / 2, y2: m };
                k.x = b - k.measureText().width / 2;
                k.x + k.width > this.chart.bounds.x2 ? k.x = this.chart.bounds.x2 - k.width : k.x < this.chart.bounds.x1 && (k.x = this.chart.bounds.x1);
                k.y = this.parent.lineCoordinates.y2 + ("top" === this.parent._position ? -k.height + this.parent.tickLength : k.fontSize / 2) + 2;
                k.y + k.height > this.chart.bounds.y2 ? k.y = this.chart.bounds.y2 - k.height : k.y < this.chart.bounds.y1 && (k.y = this.chart.bounds.y1);
              } else if ("left" === this.parent._position || "right" === this.parent._position) {
                h = m = t3 = 1 === f.lineWidth % 2 ? (this.parent.convertValueToPixel(u.dataPoint.x) << 0) + 0.5 : this.parent.convertValueToPixel(u.dataPoint.x) << 0;
                b = this.chart.plotArea.x1;
                d2 = this.chart.plotArea.x2;
                this.bounds = { x1: b, y1: h - r / 2, x2: d2, y2: m + r / 2 };
                s = false;
                if (this.parent.labels)
                  for (w = Math.ceil(this.parent.interval), l = 0; l < this.parent.viewportMaximum; l += w)
                    if (this.parent.labels[l])
                      s = true;
                    else {
                      s = false;
                      break;
                    }
                if (s) {
                  if ("axisX" === this.parent.type)
                    for (w = this.parent.convertPixelToValue({ y: g }), x = null, s = 0; s < this.parent.dataSeries.length; s++)
                      (x = this.parent.dataSeries[s].getDataPointAtX(w, true)) && 0 <= x.index && (k.text = this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: u.dataPoint.x }) : n(this.options.label) ? x.dataPoint.label : this.label);
                } else
                  k.text = "dateTime" !== this.parent.valueType || this.parent.logarithmic ? this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: u.dataPoint.x }) : n(this.options.label) ? fa(u.dataPoint.x, this.valueFormatString, this.chart._cultureInfo) : this.label : this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: u.dataPoint.x }) : n(this.options.label) ? Ca(u.dataPoint.x, this.valueFormatString, this.chart._cultureInfo) : this.label;
                this.value = u.dataPoint.x;
                k.y = m + k.fontSize / 2 - k.measureText().height / 2 + 2;
                k.y - k.fontSize / 2 < this.chart.bounds.y1 ? k.y = this.chart.bounds.y1 + k.fontSize / 2 + 2 : k.y + k.measureText().height - k.fontSize / 2 > this.chart.bounds.y2 && (k.y = this.chart.bounds.y2 - k.measureText().height + k.fontSize / 2);
                "left" === this.parent._position ? k.x = this.parent.lineCoordinates.x2 - k.measureText().width : "right" === this.parent._position && (k.x = this.parent.lineCoordinates.x2);
              }
            } else if ("bottom" === this.parent._position || "top" === this.parent._position) {
              w = this.parent.convertPixelToValue({ x: a });
              for (s = 0; s < this.parent.dataSeries.length; s++)
                (x = this.parent.dataSeries[s].getDataPointAtX(w, true)) && 0 <= x.index && (x.dataSeries = this.parent.dataSeries[s], null !== x.dataPoint.y && x.dataSeries.visible && l.push(x));
              if (0 === l.length)
                return;
              l.sort(function(a2, b2) {
                return a2.distance - b2.distance;
              });
              u = l[0];
              b = d2 = p2 = 1 === f.lineWidth % 2 ? (this.parent.convertValueToPixel(u.dataPoint.x) << 0) + 0.5 : this.parent.convertValueToPixel(u.dataPoint.x) << 0;
              h = this.chart.plotArea.y1;
              m = this.chart.plotArea.y2;
              this.bounds = { x1: b - r / 2, y1: h, x2: d2 + r / 2, y2: m };
              s = false;
              if (this.parent.labels)
                for (w = Math.ceil(this.parent.interval), l = 0; l < this.parent.viewportMaximum; l += w)
                  if (this.parent.labels[l])
                    s = true;
                  else {
                    s = false;
                    break;
                  }
              if (s) {
                if ("axisX" === this.parent.type)
                  for (w = this.parent.convertPixelToValue({ x: a }), x = null, s = 0; s < this.parent.dataSeries.length; s++)
                    (x = this.parent.dataSeries[s].getDataPointAtX(w, true)) && 0 <= x.index && (k.text = this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: u.dataPoint.x }) : n(this.options.label) ? x.dataPoint.label : this.label);
              } else
                k.text = "dateTime" !== this.parent.valueType || this.parent.logarithmic ? this.labelFormatter ? this.labelFormatter({
                  chart: this.chart,
                  axis: this.parent.options,
                  crosshair: this.options,
                  value: u.dataPoint.x
                }) : n(this.options.label) ? fa(u.dataPoint.x, this.valueFormatString, this.chart._cultureInfo) : this.label : this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: u.dataPoint.x }) : n(this.options.label) ? Ca(u.dataPoint.x, this.valueFormatString, this.chart._cultureInfo) : this.label;
              this.value = u.dataPoint.x;
              k.x = b - k.measureText().width / 2;
              k.x + k.width > this.chart.bounds.x2 && (k.x = this.chart.bounds.x2 - k.width);
              k.x < this.chart.bounds.x1 && (k.x = this.chart.bounds.x1);
              "bottom" === this.parent._position ? k.y = this.parent.lineCoordinates.y2 + k.fontSize / 2 + 2 : "top" === this.parent._position && (k.y = this.parent.lineCoordinates.y1 - k.height + k.fontSize / 2 + 2);
            } else if ("left" === this.parent._position || "right" === this.parent._position) {
              !n(this.parent.dataSeries) && 0 < this.parent.dataSeries.length && (w = this.parent.dataSeries[0].axisX.convertPixelToValue({ x: a }));
              for (s = 0; s < this.parent.dataSeries.length; s++)
                (x = this.parent.dataSeries[s].getDataPointAtX(w, true)) && 0 <= x.index && (x.dataSeries = this.parent.dataSeries[s], null !== x.dataPoint.y && x.dataSeries.visible && l.push(x));
              if (0 === l.length)
                return;
              l.sort(function(a2, b2) {
                return a2.distance - b2.distance;
              });
              z = x = 0;
              w = Infinity;
              for (s = 0; s < l.length; s++) {
                if ("rangeColumn" === l[s].dataSeries.type || "rangeArea" === l[s].dataSeries.type || "error" === l[s].dataSeries.type || "rangeSplineArea" === l[s].dataSeries.type || "candlestick" === l[s].dataSeries.type || "ohlc" === l[s].dataSeries.type || "boxAndWhisker" === l[s].dataSeries.type) {
                  if (l[s].dataPoint.y)
                    for (B3 = 0; B3 < l[s].dataPoint.y.length; B3++)
                      z = Math.abs(g - this.parent.convertValueToPixel(l[s].dataPoint.y[B3])), z <= w && (w = z, x = s);
                } else
                  "stackedColumn" === l[s].dataSeries.type ? (b = l[s].dataSeries.dataPointEOs[l[s].index].cumulativeY, z = Math.abs(g - this.parent.convertValueToPixel(b)), z <= w && (w = z, x = s)) : "stackedArea" === l[s].dataSeries.type ? (b = l[s].dataSeries.dataPointEOs[l[s].index].cumulativeY, z = Math.abs(g - this.parent.convertValueToPixel(b)), z <= w && (w = z, x = s)) : "stackedColumn100" === l[s].dataSeries.type || "stackedArea100" === l[s].dataSeries.type ? (z = l[0].dataPoint.x.getTime ? l[0].dataPoint.x.getTime() : l[0].dataPoint.x, n(u) && (u = Math.abs(g - this.parent.convertValueToPixel(100 * (l[0].dataSeries.dataPointEOs[l[0].index].cumulativeY / l[0].dataSeries.plotUnit.dataPointYSums[z])))), "stackedColumn100" === l[s].dataSeries.type ? (t3 = l[s].dataSeries.dataPointEOs[l[s].index].cumulativeY, z = l[s].dataPoint.x.getTime ? l[s].dataPoint.x.getTime() : l[s].dataPoint.x, b = 100 * (t3 / l[s].dataSeries.plotUnit.dataPointYSums[z]), z = Math.abs(g - this.parent.convertValueToPixel(b)), z <= u && (u = z, x = s)) : "stackedArea100" === l[s].dataSeries.type && (t3 = l[s].dataSeries.dataPointEOs[l[s].index].cumulativeY, z = l[s].dataPoint.x.getTime ? l[s].dataPoint.x.getTime() : l[s].dataPoint.x, b = 100 * (t3 / l[s].dataSeries.plotUnit.dataPointYSums[z]), z = Math.abs(g - this.parent.convertValueToPixel(b)), z <= u && (u = z, x = s))) : "waterfall" === l[s].dataSeries.type ? (z = Math.abs(g - this.parent.convertValueToPixel(l[s].dataSeries.dataPointEOs[l[s].index].cumulativeSum)), z <= w && (u = w = z, x = s)) : (z = Math.abs(g - this.parent.convertValueToPixel(l[s].dataPoint.y)), z <= w && (w = z, x = s));
                n(u) || (w = Math.min(w, u));
              }
              u = l[x];
              s = 0;
              if ("rangeColumn" === u.dataSeries.type || "rangeArea" === u.dataSeries.type || "error" === u.dataSeries.type || "rangeSplineArea" === u.dataSeries.type || "candlestick" === u.dataSeries.type || "ohlc" === u.dataSeries.type || "boxAndWhisker" === u.dataSeries.type) {
                w = Math.abs(g - this.parent.convertValueToPixel(u.dataPoint.y[0]));
                for (l = 0; l < u.dataPoint.y.length; l++)
                  z = Math.abs(g - this.parent.convertValueToPixel(u.dataPoint.y[l])), z < w && (w = z, s = l);
                t3 = 1 === f.lineWidth % 2 ? (this.parent.convertValueToPixel(u.dataPoint.y[s]) << 0) + 0.5 : this.parent.convertValueToPixel(u.dataPoint.y[s]) << 0;
                k.text = this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: u.dataPoint.y[s] }) : n(this.options.label) ? fa(n(c) ? u.dataPoint.y[s] : c, this.valueFormatString, this.chart._cultureInfo) : this.label;
                this.value = u.dataPoint.y[s];
              } else
                "stackedColumn" === u.dataSeries.type ? (b = u.dataSeries.dataPointEOs[u.index].cumulativeY, t3 = 1 === f.lineWidth % 2 ? (this.parent.convertValueToPixel(b) << 0) + 0.5 : this.parent.convertValueToPixel(b) << 0, k.text = this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: b }) : n(this.options.label) ? fa(n(c) ? b : c, this.valueFormatString, this.chart._cultureInfo) : this.label, this.value = b) : "stackedArea" === u.dataSeries.type ? (b = u.dataSeries.dataPointEOs[u.index].cumulativeY, t3 = 1 === f.lineWidth % 2 ? (this.parent.convertValueToPixel(b) << 0) + 0.5 : this.parent.convertValueToPixel(b) << 0, k.text = this.labelFormatter ? this.labelFormatter({
                  chart: this.chart,
                  axis: this.parent.options,
                  crosshair: this.options,
                  value: b
                }) : n(this.options.label) ? fa(n(c) ? b : c, this.valueFormatString, this.chart._cultureInfo) : this.label, this.value = b) : "stackedColumn100" === u.dataSeries.type ? (t3 = u.dataSeries.dataPointEOs[u.index].cumulativeY, z = u.dataPoint.x.getTime ? u.dataPoint.x.getTime() : u.dataPoint.x, b = 100 * (t3 / u.dataSeries.plotUnit.dataPointYSums[z]), t3 = 1 === f.lineWidth % 2 ? (this.parent.convertValueToPixel(b) << 0) + 0.5 : this.parent.convertValueToPixel(b) << 0, k.text = this.labelFormatter ? this.labelFormatter({
                  chart: this.chart,
                  axis: this.parent.options,
                  crosshair: this.options,
                  value: b
                }) : n(this.options.label) ? fa(n(c) ? b : c, this.valueFormatString, this.chart._cultureInfo) : this.label, this.value = b) : "stackedArea100" === u.dataSeries.type ? (t3 = u.dataSeries.dataPointEOs[u.index].cumulativeY, z = u.dataPoint.x.getTime ? u.dataPoint.x.getTime() : u.dataPoint.x, b = 100 * (t3 / u.dataSeries.plotUnit.dataPointYSums[z]), t3 = 1 === f.lineWidth % 2 ? (this.parent.convertValueToPixel(b) << 0) + 0.5 : this.parent.convertValueToPixel(b) << 0, k.text = this.labelFormatter ? this.labelFormatter({
                  chart: this.chart,
                  axis: this.parent.options,
                  crosshair: this.options,
                  value: b
                }) : n(this.options.label) ? fa(n(c) ? b : c, this.valueFormatString, this.chart._cultureInfo) : this.label, this.value = b) : "waterfall" === u.dataSeries.type ? (t3 = 1 === f.lineWidth % 2 ? (this.parent.convertValueToPixel(u.dataSeries.dataPointEOs[u.index].cumulativeSum) << 0) + 0.5 : this.parent.convertValueToPixel(u.dataSeries.dataPointEOs[u.index].cumulativeSum) << 0, k.text = this.labelFormatter ? this.labelFormatter({
                  chart: this.chart,
                  axis: this.parent.options,
                  crosshair: this.options,
                  value: u.dataSeries.dataPointEOs[u.index].cumulativeSum
                }) : n(this.options.label) ? fa(n(c) ? u.dataSeries.dataPointEOs[u.index].cumulativeSum : c, this.valueFormatString, this.chart._cultureInfo) : this.label, this.value = u.dataSeries.dataPointEOs[u.index].cumulativeSum) : (t3 = 1 === f.lineWidth % 2 ? (n(a) ? g : this.parent.convertValueToPixel(u.dataPoint.y) << 0) + 0.5 : n(a) ? g : this.parent.convertValueToPixel(u.dataPoint.y) << 0, k.text = this.labelFormatter ? this.labelFormatter({
                  chart: this.chart,
                  axis: this.parent.options,
                  crosshair: this.options,
                  value: n(c) ? u.dataPoint.y : c
                }) : n(this.options.label) ? fa(n(c) ? u.dataPoint.y : c, this.valueFormatString, this.chart._cultureInfo) : this.label, this.value = u.dataPoint.y);
              h = m = t3;
              b = this.chart.plotArea.x1;
              d2 = this.chart.plotArea.x2;
              this.bounds = { x1: b, y1: h - r / 2, x2: d2, y2: m + r / 2 };
              k.y = m + k.fontSize / 2 - k.measureText().height / 2 + 2;
              k.y - k.fontSize / 2 < this.chart.bounds.y1 ? k.y = this.chart.bounds.y1 + k.fontSize / 2 + 2 : k.y + k.measureText().height - k.fontSize / 2 > this.chart.bounds.y2 && (k.y = this.chart.bounds.y2 - k.measureText().height + k.fontSize / 2);
              "left" === this.parent._position ? k.x = this.parent.lineCoordinates.x2 - k.measureText().width : "right" === this.parent._position && (k.x = this.parent.lineCoordinates.x2);
            }
            l = null;
            f.globalAlpha = q;
            if ("bottom" === this.parent._position || "top" === this.parent._position)
              "top" === this.parent._position && k.y - k.fontSize / 2 < this.chart.bounds.y1 && (k.y = this.chart.bounds.y1 + k.fontSize / 2), "bottom" === this.parent._position && this.parent.lineCoordinates.y2 - k.fontSize / 2 + k.measureText().height > this.chart.bounds.y2 && (k.y = this.chart.bounds.y2 - k.height + k.fontSize / 2 + 2), this.value >= Math.min(this.parent.viewportMinimum, this.parent.viewportMaximum) && this.value <= Math.max(this.parent.viewportMinimum, this.parent.viewportMaximum) && 0 < r && (f.moveTo(b, h), f.lineTo(d2, m), f.stroke(), this._hidden = false);
            if ("left" === this.parent._position || "right" === this.parent._position)
              "left" === this.parent._position && k.x < this.chart.bounds.x1 && (k.x = this.chart.bounds.x1), "right" === this.parent._position && k.x + k.measureText().width > this.chart.bounds.x2 && (k.x = this.chart.bounds.x2 - k.measureText().width), this.value >= Math.min(this.parent.viewportMinimum, this.parent.viewportMaximum) && this.value <= Math.max(this.parent.viewportMinimum, this.parent.viewportMaximum) && 0 < r && (f.moveTo(b, h), f.lineTo(d2, m), f.stroke(), this._hidden = false);
          } else {
            if ("bottom" === this.parent._position || "top" === this.parent._position)
              b = d2 = p2 = 1 === f.lineWidth % 2 ? (a << 0) + 0.5 : a << 0, h = this.chart.plotArea.y1, m = this.chart.plotArea.y2, this.bounds = { x1: b - r / 2, y1: h, x2: d2 + r / 2, y2: m };
            else if ("left" === this.parent._position || "right" === this.parent._position)
              h = m = t3 = 1 === f.lineWidth % 2 ? (g << 0) + 0.5 : g << 0, b = this.chart.plotArea.x1, d2 = this.chart.plotArea.x2, this.bounds = { x1: b, y1: h - r / 2, x2: d2, y2: m + r / 2 };
            if ("xySwapped" === this.chart.plotInfo.axisPlacement)
              if ("left" === this.parent._position || "right" === this.parent._position) {
                s = false;
                if (this.parent.labels)
                  for (w = Math.ceil(this.parent.interval), l = 0; l < this.parent.viewportMaximum; l += w)
                    if (this.parent.labels[l])
                      s = true;
                    else {
                      s = false;
                      break;
                    }
                if (s) {
                  if ("axisX" === this.parent.type)
                    for (w = this.parent.convertPixelToValue({ y: g }), x = null, s = 0; s < this.parent.dataSeries.length; s++)
                      (x = this.parent.dataSeries[s].getDataPointAtX(w, true)) && 0 <= x.index && (k.text = this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: n(c) ? this.parent.convertPixelToValue(a) : c }) : n(this.options.label) ? x.dataPoint.label : this.label);
                } else
                  k.text = "dateTime" !== this.parent.valueType || this.parent.logarithmic ? this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: n(c) ? this.parent.convertPixelToValue(g) : c }) : n(this.options.label) ? fa(n(c) ? this.parent.convertPixelToValue(g) : c, this.valueFormatString, this.chart._cultureInfo) : this.label : this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: n(c) ? this.parent.convertPixelToValue(g) : c }) : n(this.options.label) ? Ca(n(c) ? this.parent.convertPixelToValue(g) : c, this.valueFormatString, this.chart._cultureInfo) : this.label;
                k.y = g + k.fontSize / 2 - k.measureText().height / 2 + 2;
                k.y - k.fontSize / 2 < this.chart.bounds.y1 ? k.y = this.chart.bounds.y1 + k.fontSize / 2 + 2 : k.y + k.measureText().height - k.fontSize / 2 > this.chart.bounds.y2 && (k.y = this.chart.bounds.y2 - k.measureText().height + k.fontSize / 2);
                "left" === this.parent._position ? k.x = this.parent.lineCoordinates.x1 - k.measureText().width : "right" === this.parent._position && (k.x = this.parent.lineCoordinates.x2);
              } else {
                if ("bottom" === this.parent._position || "top" === this.parent._position)
                  k.text = this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: n(c) ? this.parent.convertPixelToValue(a) : c }) : n(this.options.label) ? fa(n(c) ? this.parent.convertPixelToValue(a) : c, this.valueFormatString, this.chart._cultureInfo) : this.label, k.x = b - k.measureText().width / 2, k.x + k.width > this.chart.bounds.x2 && (k.x = this.chart.bounds.x2 - k.width), k.x < this.chart.bounds.x1 && (k.x = this.chart.bounds.x1), "bottom" === this.parent._position ? k.y = this.parent.lineCoordinates.y2 + k.fontSize / 2 + 2 : "top" === this.parent._position && (k.y = this.parent.lineCoordinates.y1 - k.height + k.fontSize / 2 + 2);
              }
            else if ("bottom" === this.parent._position || "top" === this.parent._position) {
              s = false;
              l = "";
              if (this.parent.labels)
                for (w = Math.ceil(this.parent.interval), l = 0; l < this.parent.viewportMaximum; l += w)
                  if (this.parent.labels[l])
                    s = true;
                  else {
                    s = false;
                    break;
                  }
              if (s) {
                if ("axisX" === this.parent.type)
                  for (w = this.parent.convertPixelToValue({ x: a }), x = null, s = 0; s < this.parent.dataSeries.length; s++)
                    (x = this.parent.dataSeries[s].getDataPointAtX(w, true)) && 0 <= x.index && (k.text = this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: n(c) ? this.parent.convertPixelToValue(a) : c }) : n(this.options.label) ? n(c) ? x.dataPoint.label : c : this.label);
              } else
                k.text = "dateTime" !== this.parent.valueType || this.parent.logarithmic ? this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: n(c) ? 0 < this.parent.dataSeries.length ? this.parent.convertPixelToValue(a) : "" : c }) : n(this.options.label) ? fa(n(c) ? this.parent.convertPixelToValue(a) : c, this.valueFormatString, this.chart._cultureInfo) : this.label : this.labelFormatter ? this.labelFormatter({
                  chart: this.chart,
                  axis: this.parent.options,
                  crosshair: this.options,
                  value: n(c) ? this.parent.convertPixelToValue(a) : c
                }) : n(this.options.label) ? Ca(n(c) ? this.parent.convertPixelToValue(a) : c, this.valueFormatString, this.chart._cultureInfo) : this.label;
              k.x = b - k.measureText().width / 2;
              k.x + k.width > this.chart.bounds.x2 && (k.x = this.chart.bounds.x2 - k.width);
              k.x < this.chart.bounds.x1 && (k.x = this.chart.bounds.x1);
              "bottom" === this.parent._position ? k.y = this.parent.lineCoordinates.y2 + k.fontSize / 2 + 2 : "top" === this.parent._position && (k.y = this.parent.lineCoordinates.y1 - k.height + k.fontSize / 2 + 2);
            } else if ("left" === this.parent._position || "right" === this.parent._position)
              k.text = this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: n(c) ? this.parent.convertPixelToValue(g) : c }) : n(this.options.label) ? fa(n(c) ? this.parent.convertPixelToValue(g) : c, this.valueFormatString, this.chart._cultureInfo) : this.label, k.y = g + k.fontSize / 2 - k.measureText().height / 2 + 2, k.y - k.fontSize / 2 < this.chart.bounds.y1 ? k.y = this.chart.bounds.y1 + k.fontSize / 2 + 2 : k.y + k.measureText().height - k.fontSize / 2 > this.chart.bounds.y2 && (k.y = this.chart.bounds.y2 - k.measureText().height + k.fontSize / 2), "left" === this.parent._position ? k.x = this.parent.lineCoordinates.x2 - k.measureText().width : "right" === this.parent._position && (k.x = this.parent.lineCoordinates.x2);
            "left" === this.parent._position && k.x < this.chart.bounds.x1 ? k.x = this.chart.bounds.x1 : "right" === this.parent._position && k.x + k.measureText().width > this.chart.bounds.x2 ? k.x = this.chart.bounds.x2 - k.measureText().width : "top" === this.parent._position && k.y - k.fontSize / 2 < this.chart.bounds.y1 ? k.y = this.chart.bounds.y1 + k.fontSize / 2 : "bottom" === this.parent._position && this.parent.lineCoordinates.y2 - k.fontSize / 2 + k.measureText().height > this.chart.bounds.y2 && (k.y = this.chart.bounds.y2 - k.height + k.fontSize / 2 + 2);
            f.globalAlpha = q;
            0 < r && (f.moveTo(b, h), f.lineTo(d2, m), f.stroke(), this._hidden = false);
            this.value = "bottom" === this.parent._position || "top" === this.parent._position ? this.parent.convertPixelToValue(a) : this.parent.convertPixelToValue(g);
          }
          if ("bottom" === this.parent._position || "top" === this.parent._position)
            this.parent.sessionVariables.crosshairValue = this._updatedValue = this.parent.convertPixelToValue(p2);
          if ("left" === this.parent._position || "right" === this.parent._position)
            this.parent.sessionVariables.crosshairValue = this._updatedValue = this.parent.convertPixelToValue(t3);
          this._textBlock = k;
          this._label = c;
          n(c) || this.renderLabel();
          f.restore();
          f.globalAlpha = v2;
        };
        da2.prototype.renderLabel = function() {
          this.value >= Math.min(this.parent.viewportMinimum, this.parent.viewportMaximum) && this.value <= Math.max(this.parent.viewportMinimum, this.parent.viewportMaximum) && (n(this._textBlock) || (n(this._textBlock.text) || !("number" === typeof this._textBlock.text.valueOf() || 0 < this._textBlock.text.length) || this._hidden) || this._textBlock.render(true), n(this._label) && this.dispatchEvent("updated", { chart: this.chart, crosshair: this.options, axis: this.parent, value: this.value }, this.parent));
        };
        pa(na, Y);
        na.prototype._updateOptions = function() {
          this.updateOption("enabled");
          this.updateOption("shared");
          this.updateOption("animationEnabled");
          this.updateOption("content");
          this.updateOption("contentFormatter");
          this.updateOption("reversed");
          this.updateOption("backgroundColor");
          this.updateOption("borderColor");
          this.updateOption("borderThickness");
          this.updateOption("cornerRadius");
          this.updateOption("fontSize");
          this.updateOption("fontColor");
          this.updateOption("fontFamily");
          this.updateOption("fontWeight");
          this.updateOption("fontStyle");
        };
        na.prototype._initialize = function() {
          this.updateOption("updated");
          this.updateOption("hidden");
          if (this.enabled) {
            this.container = document.createElement("div");
            this.container.setAttribute("class", "canvasjs-chart-tooltip");
            this.container.style.position = "absolute";
            this.container.style.height = "auto";
            this.container.style.boxShadow = "1px 1px 2px 2px rgba(0,0,0,0.1)";
            this.container.style.zIndex = "1000";
            this.container.style.pointerEvents = "none";
            this.container.style.display = "none";
            var a = document.createElement("div");
            a.style.width = "auto";
            a.style.height = "auto";
            a.style.minWidth = "50px";
            a.style.lineHeight = "normal";
            a.style.margin = "0px 0px 0px 0px";
            a.style.padding = "5px";
            a.style.fontFamily = "Calibri, Arial, Georgia, serif";
            a.style.fontWeight = "normal";
            a.style.fontStyle = v ? "italic" : "normal";
            a.style.fontSize = "14px";
            a.style.color = "#000000";
            a.style.textShadow = "1px 1px 1px rgba(0, 0, 0, 0.1)";
            a.style.textAlign = "left";
            a.style.border = "2px solid gray";
            a.style.background = v ? "rgba(255,255,255,.9)" : "rgb(255,255,255)";
            a.style.textIndent = "0px";
            a.style.whiteSpace = "nowrap";
            a.style.borderRadius = "5px";
            a.style.MozUserSelect = "none";
            a.style.WebkitUserSelect = "none";
            a.style.msUserSelect = "none";
            a.style.userSelect = "none";
            v || (a.style.filter = "alpha(opacity = 90)", a.style.filter = "progid:DXImageTransform.Microsoft.Shadow(Strength=3, Direction=135, Color='#666666')");
            a.innerText = "Sample Tooltip";
            this.container.appendChild(a);
            this.contentDiv = this.container.firstChild;
            this.container.style.borderRadius = this.contentDiv.style.borderRadius;
            this.chart._canvasJSContainer.appendChild(this.container);
          }
        };
        na.prototype.mouseMoveHandler = function(a, g) {
          this._lastUpdated && 4 > (/* @__PURE__ */ new Date()).getTime() - this._lastUpdated || (this._lastUpdated = (/* @__PURE__ */ new Date()).getTime(), this.chart.resetOverlayedCanvas(), this._updateToolTip(a, g), this.enabled && (this._updatedEventParameters && !isNaN(this._prevX) && !isNaN(this._prevY)) && this.dispatchEvent("updated", this._updatedEventParameters, this));
        };
        na.prototype._updateToolTip = function(a, g, c) {
          c = "undefined" === typeof c ? true : c;
          this._updateOptions();
          this.container || this._initialize();
          this.enabled || this.hide();
          if (!this.chart.disableToolTip) {
            if ("undefined" === typeof a || "undefined" === typeof g) {
              if (isNaN(this._prevX) || isNaN(this._prevY))
                return;
              a = this._prevX;
              g = this._prevY;
            } else
              this._prevX = a, this._prevY = g;
            var b = null, d2 = null, h = [], m = 0;
            if (this.shared && this.enabled && "none" !== this.chart.plotInfo.axisPlacement) {
              var p2 = [];
              if (this.chart.axisX)
                for (var t3 = 0; t3 < this.chart.axisX.length; t3++) {
                  for (var m = "xySwapped" === this.chart.plotInfo.axisPlacement ? this.chart.axisX[t3].convertPixelToValue({ y: g }) : this.chart.axisX[t3].convertPixelToValue({ x: a }), k = null, b = 0; b < this.chart.axisX[t3].dataSeries.length; b++)
                    (k = this.chart.axisX[t3].dataSeries[b].getDataPointAtX(m, c)) && 0 <= k.index && (k.dataSeries = this.chart.axisX[t3].dataSeries[b], null !== k.dataPoint.y && k.dataSeries.visible && p2.push(k));
                  k = null;
                }
              if (this.chart.axisX2)
                for (t3 = 0; t3 < this.chart.axisX2.length; t3++) {
                  m = "xySwapped" === this.chart.plotInfo.axisPlacement ? this.chart.axisX2[t3].convertPixelToValue({ y: g }) : this.chart.axisX2[t3].convertPixelToValue({ x: a });
                  k = null;
                  for (b = 0; b < this.chart.axisX2[t3].dataSeries.length; b++)
                    (k = this.chart.axisX2[t3].dataSeries[b].getDataPointAtX(
                      m,
                      c
                    )) && 0 <= k.index && (k.dataSeries = this.chart.axisX2[t3].dataSeries[b], null !== k.dataPoint.y && k.dataSeries.visible && p2.push(k));
                  k = null;
                }
              if (0 === p2.length)
                return;
              p2.sort(function(a2, b2) {
                return a2.dataSeries.axisX.logarithmic || b2.dataSeries.axisX.logarithmic ? a2.distance - b2.distance : a2.distance / a2.dataSeries.axisX.range - b2.distance / b2.dataSeries.axisX.range;
              });
              c = p2[0];
              for (b = 0; b < p2.length; b++)
                p2[b].dataPoint.x.valueOf() === c.dataPoint.x.valueOf() && h.push(p2[b]);
              p2 = null;
            } else {
              if (b = this.chart.getDataPointAtXY(a, g, c))
                this.currentDataPointIndex = b.dataPointIndex, this.currentSeriesIndex = b.dataSeries.index;
              else if (v)
                if (b = ab(a, g, this.chart._eventManager.ghostCtx), 0 < b && "undefined" !== typeof this.chart._eventManager.objectMap[b]) {
                  b = this.chart._eventManager.objectMap[b];
                  if ("legendItem" === b.objectType)
                    return;
                  this.currentSeriesIndex = b.dataSeriesIndex;
                  this.currentDataPointIndex = 0 <= b.dataPointIndex ? b.dataPointIndex : -1;
                } else
                  this.currentDataPointIndex = -1;
              else
                this.currentDataPointIndex = -1;
              if (0 <= this.currentSeriesIndex) {
                d2 = this.chart.data[this.currentSeriesIndex];
                k = {};
                if (0 <= this.currentDataPointIndex)
                  b = d2.dataPoints[this.currentDataPointIndex], k.dataSeries = d2, k.dataPoint = b, k.index = this.currentDataPointIndex, k.distance = Math.abs(b.x - m), "waterfall" === d2.type && (k.cumulativeSumYStartValue = d2.dataPointEOs[this.currentDataPointIndex].cumulativeSumYStartValue, k.cumulativeSum = d2.dataPointEOs[this.currentDataPointIndex].cumulativeSum);
                else if (this.enabled && d2 && ("line" === d2.type || "stepLine" === d2.type || "spline" === d2.type || "area" === d2.type || "stepArea" === d2.type || "splineArea" === d2.type || "stackedArea" === d2.type || "stackedArea100" === d2.type || "rangeArea" === d2.type || "rangeSplineArea" === d2.type || "candlestick" === d2.type || "ohlc" === d2.type || "boxAndWhisker" === d2.type))
                  m = d2.axisX.convertPixelToValue({ x: a }), k = d2.getDataPointAtX(m, c), n(k) || (k.dataSeries = d2, this.currentDataPointIndex = k.index, b = k.dataPoint);
                else {
                  "toolTip" === this.chart.clearedOverlayedCanvas && (this.chart.resetOverlayedCanvas(), this.chart.clearedOverlayedCanvas = null);
                  return;
                }
                if (!n(k) && !n(k.dataPoint) && !n(k.dataPoint.y))
                  if (k.dataSeries.axisY)
                    if (0 < k.dataPoint.y.length) {
                      for (b = c = 0; b < k.dataPoint.y.length; b++)
                        k.dataPoint.y[b] < k.dataSeries.axisY.viewportMinimum ? c-- : k.dataPoint.y[b] > k.dataSeries.axisY.viewportMaximum && c++;
                      c < k.dataPoint.y.length && c > -k.dataPoint.y.length && h.push(k);
                    } else
                      "column" === d2.type || "bar" === d2.type ? 0 > k.dataPoint.y ? 0 > k.dataSeries.axisY.viewportMinimum && k.dataSeries.axisY.viewportMaximum >= k.dataPoint.y && h.push(k) : k.dataSeries.axisY.viewportMinimum <= k.dataPoint.y && 0 <= k.dataSeries.axisY.viewportMaximum && h.push(k) : "bubble" === d2.type ? (c = this.chart._eventManager.objectMap[d2.dataPointIds[k.index]].size / 2, k.dataPoint.y >= k.dataSeries.axisY.viewportMinimum - c && k.dataPoint.y <= k.dataSeries.axisY.viewportMaximum + c && h.push(k)) : "waterfall" === d2.type ? (c = 0, k.cumulativeSumYStartValue < k.dataSeries.axisY.viewportMinimum ? c-- : k.cumulativeSumYStartValue > k.dataSeries.axisY.viewportMaximum && c++, k.cumulativeSum < k.dataSeries.axisY.viewportMinimum ? c-- : k.cumulativeSum > k.dataSeries.axisY.viewportMaximum && c++, 2 > c && -2 < c && h.push(k)) : (0 <= k.dataSeries.type.indexOf("100") || "stackedColumn" === d2.type || "stackedBar" === d2.type || k.dataPoint.y >= k.dataSeries.axisY.viewportMinimum && k.dataPoint.y <= k.dataSeries.axisY.viewportMaximum) && h.push(k);
                  else
                    h.push(k);
              }
            }
            if (0 < h.length) {
              if (this.highlightObjects(h), this.enabled) {
                c = "";
                c = this.getToolTipInnerHTML({ entries: h });
                if (null !== c) {
                  this.contentDiv.innerHTML = c;
                  if (this.isToolTipDefinedInData && n(this.options.content) && n(this.options.contentFormatter))
                    for (m = this.contentDiv.getElementsByTagName("span"), b = 0; b < m.length; b++)
                      m[b] && (m[b].style.color = m[b].getAttribute("data-color"));
                  m = false;
                  "none" === this.container.style.display && (m = true, this.container.style.display = "block");
                  try {
                    this.contentDiv.style.background = this.backgroundColor ? this.backgroundColor : v ? "rgba(255,255,255,.9)" : "rgb(255,255,255)", this.borderColor = "waterfall" === h[0].dataSeries.type ? this.contentDiv.style.borderRightColor = this.contentDiv.style.borderLeftColor = this.contentDiv.style.borderColor = this.options.borderColor ? this.options.borderColor : h[0].dataPoint.color ? h[0].dataPoint.color : 0 < h[0].dataPoint.y ? h[0].dataSeries.risingColor : h[0].dataSeries.fallingColor : "error" === h[0].dataSeries.type ? this.contentDiv.style.borderRightColor = this.contentDiv.style.borderLeftColor = this.contentDiv.style.borderColor = this.options.borderColor ? this.options.borderColor : h[0].dataSeries.color ? h[0].dataSeries.color : h[0].dataSeries._colorSet[d2.index % h[0].dataSeries._colorSet.length] : this.contentDiv.style.borderRightColor = this.contentDiv.style.borderLeftColor = this.contentDiv.style.borderColor = this.options.borderColor ? this.options.borderColor : h[0].dataPoint.color ? h[0].dataPoint.color : h[0].dataSeries.color ? h[0].dataSeries.color : h[0].dataSeries._colorSet[h[0].index % h[0].dataSeries._colorSet.length], this.contentDiv.style.borderWidth = this.borderThickness || 0 === this.borderThickness ? this.borderThickness + "px" : "2px", this.contentDiv.style.borderRadius = this.cornerRadius || 0 === this.cornerRadius ? this.cornerRadius + "px" : "5px", this.container.style.borderRadius = this.contentDiv.style.borderRadius, this.contentDiv.style.fontSize = this.fontSize || 0 === this.fontSize ? this.fontSize + "px" : "14px", this.contentDiv.style.color = this.fontColor ? this.fontColor : "#000000", this.contentDiv.style.fontFamily = this.fontFamily ? this.fontFamily : "Calibri, Arial, Georgia, serif;", this.contentDiv.style.fontWeight = this.fontWeight ? this.fontWeight : "normal", this.contentDiv.style.fontStyle = this.fontStyle ? this.fontStyle : v ? "italic" : "normal";
                  } catch (l) {
                  }
                  "pie" === h[0].dataSeries.type || "doughnut" === h[0].dataSeries.type || "funnel" === h[0].dataSeries.type || "pyramid" === h[0].dataSeries.type || "bar" === h[0].dataSeries.type || "rangeBar" === h[0].dataSeries.type || "stackedBar" === h[0].dataSeries.type || "stackedBar100" === h[0].dataSeries.type ? a = a - 10 - this.container.clientWidth : (a = h[0].dataSeries.axisX.convertValueToPixel(h[0].dataPoint.x) - this.container.clientWidth << 0, a -= 10);
                  0 > a && (a += this.container.clientWidth + 20);
                  a + this.container.clientWidth > Math.max(this.chart.container.clientWidth, this.chart.width) && (a = Math.max(0, Math.max(this.chart.container.clientWidth, this.chart.width) - this.container.clientWidth));
                  g = 1 !== h.length || this.shared || "line" !== h[0].dataSeries.type && "stepLine" !== h[0].dataSeries.type && "spline" !== h[0].dataSeries.type && "area" !== h[0].dataSeries.type && "stepArea" !== h[0].dataSeries.type && "splineArea" !== h[0].dataSeries.type ? "bar" === h[0].dataSeries.type || "rangeBar" === h[0].dataSeries.type || "stackedBar" === h[0].dataSeries.type || "stackedBar100" === h[0].dataSeries.type ? h[0].dataSeries.axisX.convertValueToPixel(h[0].dataPoint.x) : g : h[0].dataSeries.axisY.convertValueToPixel(h[0].dataPoint.y);
                  g = -g + 10;
                  0 < g + this.container.clientHeight + 5 && (g -= g + this.container.clientHeight + 5 - 0);
                  this.fixMozTransitionDelay(a, g);
                  !this.animationEnabled || m ? this.disableAnimation() : (this.enableAnimation(), this.container.style.MozTransition = this.mozContainerTransition);
                  this.positionLeft = a;
                  this.positionBottom = g;
                  this.container.style.left = a + "px";
                  this.container.style.bottom = g + "px";
                } else
                  this.hide(false), this.enabled && this.dispatchEvent("hidden", { chart: this.chart, toolTip: this }, this);
                g = [];
                for (b = 0; b < h.length; b++)
                  g.push({
                    xValue: h[b].dataPoint.x,
                    dataPoint: h[b].dataPoint,
                    dataSeries: h[b].dataSeries,
                    dataPointIndex: h[b].index,
                    dataSeriesIndex: h[b].dataSeries._index
                  });
                this._updatedEventParameters = { chart: this.chart, toolTip: this.options, content: c, entries: g };
                this._entries = h;
              }
            } else
              this.hide(), this.enabled && this.dispatchEvent("hidden", { chart: this.chart, toolTip: this }, this);
            this._dataSeriesIndex = this._xValue = null;
          }
        };
        na.prototype.highlightObjects = function(a) {
          var d2 = this.chart.overlaidCanvasCtx;
          n(this.chart.clearedOverlayedCanvas) || "toolTip" === this.chart.clearedOverlayedCanvas ? (this.chart.resetOverlayedCanvas(), d2.clearRect(0, 0, this.chart.width, this.chart.height), this.chart.clearedOverlayedCanvas = "toolTip") : this.chart.clearedOverlayedCanvas = null;
          d2.save();
          var c = this.chart.plotArea, b = 0;
          d2.beginPath();
          d2.rect(c.x1, c.y1, c.x2 - c.x1, c.y2 - c.y1);
          d2.clip();
          for (c = 0; c < a.length; c++) {
            var e = a[c];
            if ((e = this.chart._eventManager.objectMap[e.dataSeries.dataPointIds[e.index]]) && e.objectType && "dataPoint" === e.objectType) {
              var b = this.chart.data[e.dataSeriesIndex], h = b.dataPoints[e.dataPointIndex], m = e.dataPointIndex;
              false === h.highlightEnabled || true !== b.highlightEnabled && true !== h.highlightEnabled || ("line" === b.type || "stepLine" === b.type || "spline" === b.type || "scatter" === b.type || "area" === b.type || "stepArea" === b.type || "splineArea" === b.type || "stackedArea" === b.type || "stackedArea100" === b.type || "rangeArea" === b.type || "rangeSplineArea" === b.type ? (h = b.getMarkerProperties(m, e.x1, e.y1, this.chart.overlaidCanvasCtx), h.size = Math.max(1.5 * h.size << 0, 10), h.borderColor = h.borderColor || "#FFFFFF", h.borderThickness = h.borderThickness || Math.ceil(0.1 * h.size), X.drawMarkers([h]), "undefined" !== typeof e.y2 && (h = b.getMarkerProperties(m, e.x1, e.y2, this.chart.overlaidCanvasCtx), h.size = Math.max(1.5 * h.size << 0, 10), h.borderColor = h.borderColor || "#FFFFFF", h.borderThickness = h.borderThickness || Math.ceil(0.1 * h.size), X.drawMarkers([h]))) : "bubble" === b.type ? (h = b.getMarkerProperties(m, e.x1, e.y1, this.chart.overlaidCanvasCtx), h.size = e.size, h.color = "white", h.borderColor = "white", d2.globalAlpha = 0.3, X.drawMarkers([h]), d2.globalAlpha = 1) : "column" === b.type || "stackedColumn" === b.type || "stackedColumn100" === b.type || "bar" === b.type || "rangeBar" === b.type || "stackedBar" === b.type || "stackedBar100" === b.type || "rangeColumn" === b.type || "waterfall" === b.type ? ba(d2, e.x1, e.y1, e.x2, e.y2, "white", 0, null, false, false, false, false, 0.3) : "pie" === b.type || "doughnut" === b.type ? ia2(d2, e.center, e.radius, "white", b.type, e.startAngle, e.endAngle, 0.3, e.percentInnerRadius) : "funnel" === b.type || "pyramid" === b.type ? qa2(d2, e.funnelSection, 0.3, "white") : "candlestick" === b.type ? (d2.globalAlpha = 1, d2.strokeStyle = e.color, d2.lineWidth = 2 * e.borderThickness, b = 0 === d2.lineWidth % 2 ? 0 : 0.5, d2.beginPath(), d2.moveTo(e.x3 - b, Math.min(e.y2, e.y3)), d2.lineTo(e.x3 - b, Math.min(e.y1, e.y4)), d2.stroke(), d2.beginPath(), d2.moveTo(e.x3 - b, Math.max(e.y1, e.y4)), d2.lineTo(e.x3 - b, Math.max(e.y2, e.y3)), d2.stroke(), ba(d2, e.x1, Math.min(e.y1, e.y4), e.x2, Math.max(e.y1, e.y4), "transparent", 2 * e.borderThickness, e.color, false, false, false, false), d2.globalAlpha = 1) : "ohlc" === b.type ? (d2.globalAlpha = 1, d2.strokeStyle = e.color, d2.lineWidth = 2 * e.borderThickness, b = 0 === d2.lineWidth % 2 ? 0 : 0.5, d2.beginPath(), d2.moveTo(e.x3 - b, e.y2), d2.lineTo(e.x3 - b, e.y3), d2.stroke(), d2.beginPath(), d2.moveTo(e.x3, e.y1), d2.lineTo(e.x1, e.y1), d2.stroke(), d2.beginPath(), d2.moveTo(e.x3, e.y4), d2.lineTo(e.x2, e.y4), d2.stroke(), d2.globalAlpha = 1) : "boxAndWhisker" === b.type ? (d2.save(), d2.globalAlpha = 1, d2.strokeStyle = e.stemColor, d2.lineWidth = 2 * e.stemThickness, 0 < e.stemThickness && (d2.beginPath(), d2.moveTo(e.x3, e.y2 + e.borderThickness / 2), d2.lineTo(e.x3, e.y1 + e.whiskerThickness / 2), d2.stroke(), d2.beginPath(), d2.moveTo(e.x3, e.y4 - e.whiskerThickness / 2), d2.lineTo(e.x3, e.y3 - e.borderThickness / 2), d2.stroke()), d2.beginPath(), ba(d2, e.x1, Math.max(e.y2, e.y3), e.x2, Math.min(e.y2, e.y3), "transparent", 2 * e.borderThickness, e.color, false, false, false, false), d2.globalAlpha = 1, d2.strokeStyle = e.whiskerColor, d2.lineWidth = 2 * e.whiskerThickness, 0 < e.whiskerThickness && (d2.beginPath(), d2.moveTo(Math.floor(e.x3 - e.whiskerLength / 2), e.y4), d2.lineTo(Math.ceil(e.x3 + e.whiskerLength / 2), e.y4), d2.stroke(), d2.beginPath(), d2.moveTo(Math.floor(e.x3 - e.whiskerLength / 2), e.y1), d2.lineTo(Math.ceil(e.x3 + e.whiskerLength / 2), e.y1), d2.stroke()), d2.globalAlpha = 1, d2.strokeStyle = e.lineColor, d2.lineWidth = 2 * e.lineThickness, 0 < e.lineThickness && (d2.beginPath(), d2.moveTo(e.x1, e.y5), d2.lineTo(e.x2, e.y5), d2.stroke()), d2.restore(), d2.globalAlpha = 1) : "error" === b.type && B2(d2, e.x1, e.y1, e.x2, e.y2, "white", e.whiskerProperties, e.stemProperties, e.isXYSwapped, 0.3));
            }
          }
          d2.restore();
          d2.globalAlpha = 1;
          d2.beginPath();
        };
        na.prototype.getToolTipInnerHTML = function(a) {
          a = a.entries;
          var d2 = null, c = null, b = null, e = 0, h = "";
          this.isToolTipDefinedInData = true;
          for (var m = 0; m < a.length; m++)
            if (a[m].dataSeries.toolTipContent || a[m].dataPoint.toolTipContent) {
              this.isToolTipDefinedInData = false;
              break;
            }
          if (this.isToolTipDefinedInData && (this.content && "function" === typeof this.content || this.contentFormatter))
            a = { chart: this.chart, toolTip: this.options, entries: a }, d2 = this.contentFormatter ? this.contentFormatter(a) : this.content(a);
          else if (this.shared && "none" !== this.chart.plotInfo.axisPlacement) {
            for (var n2 = null, p2 = "", m = 0; m < a.length; m++) {
              c = a[m].dataSeries;
              b = a[m].dataPoint;
              e = a[m].index;
              h = "";
              if (0 === m && this.isToolTipDefinedInData && !this.content) {
                this.chart.axisX && 0 < this.chart.axisX.length ? p2 += "undefined" !== typeof this.chart.axisX[0].labels[b.x] ? this.chart.axisX[0].labels[b.x] : "{x}" : this.chart.axisX2 && 0 < this.chart.axisX2.length && (p2 += "undefined" !== typeof this.chart.axisX2[0].labels[b.x] ? this.chart.axisX2[0].labels[b.x] : "{x}");
                p2 += "</br>";
                if (!c.visible)
                  continue;
                p2 = this.chart.replaceKeywordsWithValue(p2, b, c, e);
              }
              null === b.toolTipContent || "undefined" === typeof b.toolTipContent && null === c.options.toolTipContent || ("line" === c.type || "stepLine" === c.type || "spline" === c.type || "area" === c.type || "stepArea" === c.type || "splineArea" === c.type || "column" === c.type || "bar" === c.type || "scatter" === c.type || "stackedColumn" === c.type || "stackedColumn100" === c.type || "stackedBar" === c.type || "stackedBar100" === c.type || "stackedArea" === c.type || "stackedArea100" === c.type || "waterfall" === c.type ? (this.chart.axisX && 1 < this.chart.axisX.length && (h += n2 != c.axisXIndex ? c.axisX.title ? c.axisX.title + "<br/>" : "X:{axisXIndex}<br/>" : ""), h += b.toolTipContent ? b.toolTipContent : c.toolTipContent ? c.toolTipContent : this.content && "function" !== typeof this.content ? this.content : `<span data-color='"` + (this.options.fontColor ? "" : "'{color}'") + `"'>{name}:</span>&nbsp;&nbsp;{y}`, n2 = c.axisXIndex) : "bubble" === c.type ? (this.chart.axisX && 1 < this.chart.axisX.length && (h += n2 != c.axisXIndex ? c.axisX.title ? c.axisX.title + "<br/>" : "X:{axisXIndex}<br/>" : ""), h += b.toolTipContent ? b.toolTipContent : c.toolTipContent ? c.toolTipContent : this.content && "function" !== typeof this.content ? this.content : `<span data-color='"` + (this.options.fontColor ? "" : "'{color}'") + `"'>{name}:</span>&nbsp;&nbsp;{y}, &nbsp;&nbsp;{z}`) : "rangeColumn" === c.type || "rangeBar" === c.type || "rangeArea" === c.type || "rangeSplineArea" === c.type || "error" === c.type ? (this.chart.axisX && 1 < this.chart.axisX.length && (h += n2 != c.axisXIndex ? c.axisX.title ? c.axisX.title + "<br/>" : "X:{axisXIndex}<br/>" : ""), h += b.toolTipContent ? b.toolTipContent : c.toolTipContent ? c.toolTipContent : this.content && "function" !== typeof this.content ? this.content : `<span data-color='"` + (this.options.fontColor ? "" : "'{color}'") + `"'>{name}:</span>&nbsp;&nbsp;{y[0]},&nbsp;{y[1]}`) : "candlestick" === c.type || "ohlc" === c.type ? (this.chart.axisX && 1 < this.chart.axisX.length && (h += n2 != c.axisXIndex ? c.axisX.title ? c.axisX.title + "<br/>" : "X:{axisXIndex}<br/>" : ""), h += b.toolTipContent ? b.toolTipContent : c.toolTipContent ? c.toolTipContent : this.content && "function" !== typeof this.content ? this.content : `<span data-color='"` + (this.options.fontColor ? "" : "'{color}'") + `"'>{name}:</span><br/>Open: &nbsp;&nbsp;{y[0]}<br/>High: &nbsp;&nbsp;&nbsp;{y[1]}<br/>Low:&nbsp;&nbsp;&nbsp;{y[2]}<br/>Close: &nbsp;&nbsp;{y[3]}`) : "boxAndWhisker" === c.type && (this.chart.axisX && 1 < this.chart.axisX.length && (h += n2 != c.axisXIndex ? c.axisX.title ? c.axisX.title + "<br/>" : "X:{axisXIndex}<br/>" : ""), h += b.toolTipContent ? b.toolTipContent : c.toolTipContent ? c.toolTipContent : this.content && "function" !== typeof this.content ? this.content : `<span data-color='"` + (this.options.fontColor ? "" : "'{color}'") + `"'>{name}:</span><br/>Minimum: &nbsp;{y[0]}<br/>Q1:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{y[1]}<br/>Q2:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{y[4]}<br/>Q3:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{y[2]}<br/>Maximum: &nbsp;{y[3]}`), null === d2 && (d2 = ""), c.visible && (true === this.reversed ? (d2 = this.chart.replaceKeywordsWithValue(h, b, c, e) + d2, m < a.length - 1 && (d2 = "</br>" + d2)) : (d2 += this.chart.replaceKeywordsWithValue(h, b, c, e), m < a.length - 1 && (d2 += "</br>"))));
            }
            null !== d2 && (d2 = p2 + d2);
          } else {
            c = a[0].dataSeries;
            b = a[0].dataPoint;
            e = a[0].index;
            if (null === b.toolTipContent || "undefined" === typeof b.toolTipContent && null === c.options.toolTipContent)
              return null;
            "line" === c.type || "stepLine" === c.type || "spline" === c.type || "area" === c.type || "stepArea" === c.type || "splineArea" === c.type || "column" === c.type || "bar" === c.type || "scatter" === c.type || "stackedColumn" === c.type || "stackedColumn100" === c.type || "stackedBar" === c.type || "stackedBar100" === c.type || "stackedArea" === c.type || "stackedArea100" === c.type || "waterfall" === c.type ? h = b.toolTipContent ? b.toolTipContent : c.toolTipContent ? c.toolTipContent : this.content && "function" !== typeof this.content ? this.content : `<span data-color='"` + (this.options.fontColor ? "" : "'{color}'") + `"'>` + (b.label ? "{label}" : "{x}") + ":</span>&nbsp;&nbsp;{y}" : "bubble" === c.type ? h = b.toolTipContent ? b.toolTipContent : c.toolTipContent ? c.toolTipContent : this.content && "function" !== typeof this.content ? this.content : `<span data-color='"` + (this.options.fontColor ? "" : "'{color}'") + `"'>` + (b.label ? "{label}" : "{x}") + ":</span>&nbsp;&nbsp;{y}, &nbsp;&nbsp;{z}" : "pie" === c.type || "doughnut" === c.type || "funnel" === c.type || "pyramid" === c.type ? h = b.toolTipContent ? b.toolTipContent : c.toolTipContent ? c.toolTipContent : this.content && "function" !== typeof this.content ? this.content : `<span data-color='"` + (this.options.fontColor ? "" : "'{color}'") + `"'>` + (b.name ? "{name}:</span>&nbsp;&nbsp;" : b.label ? "{label}:</span>&nbsp;&nbsp;" : "</span>") + "{y}" : "rangeColumn" === c.type || "rangeBar" === c.type || "rangeArea" === c.type || "rangeSplineArea" === c.type || "error" === c.type ? h = b.toolTipContent ? b.toolTipContent : c.toolTipContent ? c.toolTipContent : this.content && "function" !== typeof this.content ? this.content : `<span data-color='"` + (this.options.fontColor ? "" : "'{color}'") + `"'>` + (b.label ? "{label}" : "{x}") + " :</span>&nbsp;&nbsp;{y[0]}, &nbsp;{y[1]}" : "candlestick" === c.type || "ohlc" === c.type ? h = b.toolTipContent ? b.toolTipContent : c.toolTipContent ? c.toolTipContent : this.content && "function" !== typeof this.content ? this.content : `<span data-color='"` + (this.options.fontColor ? "" : "'{color}'") + `"'>` + (b.label ? "{label}" : "{x}") + "</span><br/>Open: &nbsp;&nbsp;{y[0]}<br/>High: &nbsp;&nbsp;&nbsp;{y[1]}<br/>Low: &nbsp;&nbsp;&nbsp;&nbsp;{y[2]}<br/>Close: &nbsp;&nbsp;{y[3]}" : "boxAndWhisker" === c.type && (h = b.toolTipContent ? b.toolTipContent : c.toolTipContent ? c.toolTipContent : this.content && "function" !== typeof this.content ? this.content : `<span data-color='"` + (this.options.fontColor ? "" : "'{color}'") + `"'>` + (b.label ? "{label}" : "{x}") + "</span><br/>Minimum: &nbsp;{y[0]}<br/>Q1:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{y[1]}<br/>Q2:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{y[4]}<br/>Q3:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{y[2]}<br/>Maximum: &nbsp;{y[3]}");
            null === d2 && (d2 = "");
            d2 += this.chart.replaceKeywordsWithValue(
              h,
              b,
              c,
              e
            );
          }
          return d2;
        };
        na.prototype.enableAnimation = function() {
          if (!this.container.style.WebkitTransition) {
            var a = this.getContainerTransition(this.containerTransitionDuration);
            this.container.style.WebkitTransition = a;
            this.container.style.MsTransition = a;
            this.container.style.transition = a;
            this.container.style.MozTransition = this.mozContainerTransition;
          }
        };
        na.prototype.disableAnimation = function() {
          this.container.style.WebkitTransition && (this.container.style.WebkitTransition = "", this.container.style.MozTransition = "", this.container.style.MsTransition = "", this.container.style.transition = "");
        };
        na.prototype.hide = function(a) {
          this.container && (this.container.style.display = "none", this.currentSeriesIndex = -1, this._entries = this._dataSeriesIndex = this._xValue = null, this._prevY = this._prevX = NaN, this._updatedEventParameters = null, ("undefined" === typeof a || a) && this.chart.resetOverlayedCanvas());
        };
        na.prototype.show = function(a, d2, c) {
          this._updateToolTip(a, d2, "undefined" === typeof c ? false : c);
        };
        na.prototype.showAtIndex = function(a, d2) {
        };
        na.prototype.showAtX = function(a, d2) {
          if (!this.enabled)
            return false;
          this.chart.clearedOverlayedCanvas = null;
          this._updateOptions();
          var c, b, e, h = [];
          e = false;
          d2 = !n(d2) && 0 <= d2 && d2 < this.chart.data.length ? d2 : 0;
          if (this.shared)
            for (var m = 0; m < this.chart.data.length; m++)
              c = this.chart.data[m], (b = c.getDataPointAtX(a, false)) && (b.dataPoint && !n(b.dataPoint.y) && c.visible) && (b.dataSeries = c, this.chart.data[d2].axisX.convertValueToPixel(a) === c.axisX.convertValueToPixel(b.dataPoint.x) && h.push(b));
          else
            c = this.chart.data[d2], (b = c.getDataPointAtX(a, false)) && (b.dataPoint && !n(b.dataPoint.y) && c.visible) && (b.dataSeries = c, h.push(b));
          if (0 < h.length) {
            for (m = 0; m < h.length; m++)
              if (b = h[m], (this.shared || 0 <= b.dataSeries.type.indexOf("100")) && b.dataPoint.x >= b.dataSeries.axisX.viewportMinimum && b.dataPoint.x <= b.dataSeries.axisX.viewportMaximum) {
                e = false;
                break;
              } else if (b.dataPoint.x < b.dataSeries.axisX.viewportMinimum || b.dataPoint.x > b.dataSeries.axisX.viewportMaximum || b.dataPoint.y < b.dataSeries.axisY.viewportMinimum || b.dataPoint.y > b.dataSeries.axisY.viewportMaximum)
                e = true;
              else {
                e = false;
                break;
              }
            if (e)
              return this.hide(), false;
            this.highlightObjects(h);
            this._entries = h;
            m = "";
            m = this.getToolTipInnerHTML({ entries: h });
            if (null !== m) {
              this.contentDiv.innerHTML = m;
              if (this.isToolTipDefinedInData && n(this.options.content) && n(this.options.contentFormatter))
                for (b = this.contentDiv.getElementsByTagName("span"), m = 0; m < b.length; m++)
                  b[m] && (b[m].style.color = b[m].getAttribute("data-color"));
              m = false;
              "none" === this.container.style.display && (m = true, this.container.style.display = "block");
              try {
                this.contentDiv.style.background = this.backgroundColor ? this.backgroundColor : v ? "rgba(255,255,255,.9)" : "rgb(255,255,255)", this.borderColor = "waterfall" === h[0].dataSeries.type ? this.contentDiv.style.borderRightColor = this.contentDiv.style.borderLeftColor = this.contentDiv.style.borderColor = this.options.borderColor ? this.options.borderColor : h[0].dataPoint.color ? h[0].dataPoint.color : 0 < h[0].dataPoint.y ? h[0].dataSeries.risingColor : h[0].dataSeries.fallingColor : "error" === h[0].dataSeries.type ? this.contentDiv.style.borderRightColor = this.contentDiv.style.borderLeftColor = this.contentDiv.style.borderColor = this.options.borderColor ? this.options.borderColor : h[0].dataSeries.color ? h[0].dataSeries.color : h[0].dataSeries._colorSet[c.index % h[0].dataSeries._colorSet.length] : this.contentDiv.style.borderRightColor = this.contentDiv.style.borderLeftColor = this.contentDiv.style.borderColor = this.options.borderColor ? this.options.borderColor : h[0].dataPoint.color ? h[0].dataPoint.color : h[0].dataSeries.color ? h[0].dataSeries.color : h[0].dataSeries._colorSet[h[0].index % h[0].dataSeries._colorSet.length], this.contentDiv.style.borderWidth = this.borderThickness || 0 === this.borderThickness ? this.borderThickness + "px" : "2px", this.contentDiv.style.borderRadius = this.cornerRadius || 0 === this.cornerRadius ? this.cornerRadius + "px" : "5px", this.container.style.borderRadius = this.contentDiv.style.borderRadius, this.contentDiv.style.fontSize = this.fontSize || 0 === this.fontSize ? this.fontSize + "px" : "14px", this.contentDiv.style.color = this.fontColor ? this.fontColor : "#000000", this.contentDiv.style.fontFamily = this.fontFamily ? this.fontFamily : "Calibri, Arial, Georgia, serif;", this.contentDiv.style.fontWeight = this.fontWeight ? this.fontWeight : "normal", this.contentDiv.style.fontStyle = this.fontStyle ? this.fontStyle : v ? "italic" : "normal";
              } catch (p2) {
              }
              "pie" === h[0].dataSeries.type || "doughnut" === h[0].dataSeries.type || "funnel" === h[0].dataSeries.type || "pyramid" === h[0].dataSeries.type ? c = mouseX - 10 - this.container.clientWidth : (c = "bar" === h[0].dataSeries.type || "rangeBar" === h[0].dataSeries.type || "stackedBar" === h[0].dataSeries.type || "stackedBar100" === h[0].dataSeries.type ? h[0].dataSeries.axisY.convertValueToPixel(h[0].dataPoint.y) - this.container.clientWidth << 0 : h[0].dataSeries.axisX.convertValueToPixel(h[0].dataPoint.x) - this.container.clientWidth << 0, c -= 10);
              0 > c && (c += this.container.clientWidth + 20);
              c + this.container.clientWidth > Math.max(this.chart.container.clientWidth, this.chart.width) && (c = Math.max(0, Math.max(this.chart.container.clientWidth, this.chart.width) - this.container.clientWidth));
              h = 1 !== h.length || this.shared || "line" !== h[0].dataSeries.type && "stepLine" !== h[0].dataSeries.type && "spline" !== h[0].dataSeries.type && "area" !== h[0].dataSeries.type && "stepArea" !== h[0].dataSeries.type && "splineArea" !== h[0].dataSeries.type ? "bar" === h[0].dataSeries.type || "rangeBar" === h[0].dataSeries.type || "stackedBar" === h[0].dataSeries.type || "stackedBar100" === h[0].dataSeries.type ? h[0].dataSeries.axisX.convertValueToPixel(h[0].dataPoint.x) : h[0].dataSeries.axisY.convertValueToPixel(h[0].dataPoint.y) : h[0].dataSeries.axisY.convertValueToPixel(h[0].dataPoint.y);
              h = -h + 10;
              0 < h + this.container.clientHeight + 5 && (h -= h + this.container.clientHeight + 5 - 0);
              this.fixMozTransitionDelay(
                c,
                h
              );
              !this.animationEnabled || m ? this.disableAnimation() : (this.enableAnimation(), this.container.style.MozTransition = this.mozContainerTransition);
              this.container.style.left = c + "px";
              this.container.style.bottom = h + "px";
            } else
              return this.hide(false), false;
          } else
            return this.hide(), false;
          this._xValue = a;
          this._dataSeriesIndex = d2;
          this._prevY = this._prevX = NaN;
          return true;
        };
        na.prototype.fixMozTransitionDelay = function(a, d2) {
          if (20 < this.chart._eventManager.lastObjectId)
            this.mozContainerTransition = this.getContainerTransition(0);
          else {
            var c = parseFloat(this.container.style.left), c = isNaN(c) ? 0 : c, b = parseFloat(this.container.style.bottom), b = isNaN(b) ? 0 : b;
            10 < Math.sqrt(Math.pow(c - a, 2) + Math.pow(b - d2, 2)) ? this.mozContainerTransition = this.getContainerTransition(0.1) : this.mozContainerTransition = this.getContainerTransition(0);
          }
        };
        na.prototype.getContainerTransition = function(a) {
          return "left " + a + "s ease-out 0s, bottom " + a + "s ease-out 0s";
        };
        ha2.prototype.reset = function() {
          this.lastObjectId = 0;
          this.objectMap = [];
          this.rectangularRegionEventSubscriptions = [];
          this.previousDataPointEventObject = null;
          this.eventObjects = [];
          v && (this.ghostCtx.clearRect(0, 0, this.chart.width, this.chart.height), this.ghostCtx.beginPath());
        };
        ha2.prototype.getNewObjectTrackingId = function() {
          return ++this.lastObjectId;
        };
        ha2.prototype.mouseEventHandler = function(a) {
          if ("mousemove" === a.type || "click" === a.type) {
            var d2 = [], c = Pa(a), b = null;
            if ((b = this.chart.getObjectAtXY(c.x, c.y, false)) && "undefined" !== typeof this.objectMap[b])
              if (b = this.objectMap[b], "dataPoint" === b.objectType) {
                var e = this.chart.data[b.dataSeriesIndex], h = e.dataPoints[b.dataPointIndex], m = b.dataPointIndex;
                b.eventParameter = { x: c.x, y: c.y, dataPoint: h, dataSeries: e.options, dataPointIndex: m, dataSeriesIndex: e.index, chart: this.chart };
                b.eventContext = { context: h, userContext: h, mouseover: "mouseover", mousemove: "mousemove", mouseout: "mouseout", click: "click" };
                d2.push(b);
                b = this.objectMap[e.id];
                b.eventParameter = { x: c.x, y: c.y, dataPoint: h, dataSeries: e.options, dataPointIndex: m, dataSeriesIndex: e.index, chart: this.chart };
                b.eventContext = {
                  context: e,
                  userContext: e.options,
                  mouseover: "mouseover",
                  mousemove: "mousemove",
                  mouseout: "mouseout",
                  click: "click"
                };
                d2.push(this.objectMap[e.id]);
              } else
                "legendItem" === b.objectType && (e = this.chart.data[b.dataSeriesIndex], h = null !== b.dataPointIndex ? e.dataPoints[b.dataPointIndex] : null, b.eventParameter = { x: c.x, y: c.y, dataSeries: e.options, dataPoint: h, dataPointIndex: b.dataPointIndex, dataSeriesIndex: b.dataSeriesIndex, chart: this.chart }, b.eventContext = { context: this.chart.legend, userContext: this.chart.legend.options, mouseover: "itemmouseover", mousemove: "itemmousemove", mouseout: "itemmouseout", click: "itemclick" }, d2.push(b));
            e = [];
            for (c = 0; c < this.mouseoveredObjectMaps.length; c++) {
              h = true;
              for (b = 0; b < d2.length; b++)
                if (d2[b].id === this.mouseoveredObjectMaps[c].id) {
                  h = false;
                  break;
                }
              h ? this.fireEvent(this.mouseoveredObjectMaps[c], "mouseout", a) : e.push(this.mouseoveredObjectMaps[c]);
            }
            this.mouseoveredObjectMaps = e;
            for (c = 0; c < d2.length; c++) {
              e = false;
              for (b = 0; b < this.mouseoveredObjectMaps.length; b++)
                if (d2[c].id === this.mouseoveredObjectMaps[b].id) {
                  e = true;
                  break;
                }
              e || (this.fireEvent(d2[c], "mouseover", a), this.mouseoveredObjectMaps.push(d2[c]));
              "click" === a.type ? this.fireEvent(d2[c], "click", a) : "mousemove" === a.type && this.fireEvent(d2[c], "mousemove", a);
            }
          }
        };
        ha2.prototype.fireEvent = function(a, d2, c) {
          if (a && d2) {
            var b = a.eventParameter, e = a.eventContext, h = a.eventContext.userContext;
            h && (e && h[e[d2]]) && h[e[d2]].call(h, b);
            "mouseout" !== d2 ? h.cursor && h.cursor !== c.target.style.cursor && (c.target.style.cursor = h.cursor) : (c.target.style.cursor = this.chart.panEnabled ? "itemmouseout" !== e.mouseout || h.dockInsidePlotArea ? "move" : this.chart._defaultCursor : this.chart._defaultCursor, delete a.eventParameter, delete a.eventContext);
            "click" === d2 && ("dataPoint" === a.objectType && this.chart.pieDoughnutClickHandler) && this.chart.pieDoughnutClickHandler.call(this.chart.data[a.dataSeriesIndex], b);
            "click" === d2 && ("dataPoint" === a.objectType && this.chart.funnelPyramidClickHandler) && this.chart.funnelPyramidClickHandler.call(this.chart.data[a.dataSeriesIndex], b);
          }
        };
        W2.prototype.animate = function(a, d2, c, b, e) {
          var h = this;
          this.chart.isAnimating = true;
          e = e || L.easing.linear;
          c && this.animations.push({ startTime: (/* @__PURE__ */ new Date()).getTime() + (a ? a : 0), duration: d2, animationCallback: c, onComplete: b });
          for (a = []; 0 < this.animations.length; )
            if (d2 = this.animations.shift(), c = (/* @__PURE__ */ new Date()).getTime(), b = 0, d2.startTime <= c && (b = e(Math.min(c - d2.startTime, d2.duration), 0, 1, d2.duration), b = Math.min(b, 1), isNaN(b) || !isFinite(b)) && (b = 1), 1 > b && a.push(d2), d2.animationCallback(b), 1 <= b && d2.onComplete)
              d2.onComplete();
          this.animations = a;
          0 < this.animations.length ? this.animationRequestId = this.chart.requestAnimFrame.call(window, function() {
            h.animate.call(h);
          }) : this.chart.isAnimating = false;
        };
        W2.prototype.cancelAllAnimations = function() {
          this.animations = [];
          this.animationRequestId && this.chart.cancelRequestAnimFrame.call(window, this.animationRequestId);
          this.animationRequestId = null;
          this.chart.isAnimating = false;
        };
        var L = { yScaleAnimation: function(a, d2) {
          if (0 !== a) {
            var c = d2.dest, b = d2.source.canvas, e = d2.animationBase;
            c.drawImage(b, 0, 0, b.width, b.height, 0, e - e * a, c.canvas.width / la, a * c.canvas.height / la);
          }
        }, xScaleAnimation: function(a, d2) {
          if (0 !== a) {
            var c = d2.dest, b = d2.source.canvas, e = d2.animationBase;
            c.drawImage(b, 0, 0, b.width, b.height, e - e * a, 0, a * c.canvas.width / la, c.canvas.height / la);
          }
        }, xClipAnimation: function(a, d2) {
          if (0 !== a) {
            var c = d2.dest, b = d2.source.canvas;
            c.save();
            0 < a && c.drawImage(b, 0, 0, b.width * a, b.height, 0, 0, b.width * a / la, b.height / la);
            c.restore();
          }
        }, fadeInAnimation: function(a, d2) {
          if (0 !== a) {
            var c = d2.dest, b = d2.source.canvas;
            c.save();
            c.globalAlpha = a;
            c.drawImage(b, 0, 0, b.width, b.height, 0, 0, c.canvas.width / la, c.canvas.height / la);
            c.restore();
          }
        }, easing: { linear: function(a, d2, c, b) {
          return c * a / b + d2;
        }, easeOutQuad: function(a, d2, c, b) {
          return -c * (a /= b) * (a - 2) + d2;
        }, easeOutQuart: function(a, d2, c, b) {
          return -c * ((a = a / b - 1) * a * a * a - 1) + d2;
        }, easeInQuad: function(a, d2, c, b) {
          return c * (a /= b) * a + d2;
        }, easeInQuart: function(a, d2, c, b) {
          return c * (a /= b) * a * a * a + d2;
        } } }, X = { drawMarker: function(a, d2, c, b, e, h, m, n2) {
          if (c) {
            var p2 = 1;
            c.fillStyle = h ? h : "#000000";
            c.strokeStyle = m ? m : "#000000";
            c.lineWidth = n2 ? n2 : 0;
            c.setLineDash && c.setLineDash(G("solid", n2));
            "circle" === b ? (c.moveTo(a, d2), c.beginPath(), c.arc(a, d2, e / 2, 0, 2 * Math.PI, false), h && c.fill(), n2 && (m ? c.stroke() : (p2 = c.globalAlpha, c.globalAlpha = 0.15, c.strokeStyle = "black", c.stroke(), c.globalAlpha = p2))) : "square" === b ? (c.beginPath(), c.rect(a - e / 2, d2 - e / 2, e, e), h && c.fill(), n2 && (m ? c.stroke() : (p2 = c.globalAlpha, c.globalAlpha = 0.15, c.strokeStyle = "black", c.stroke(), c.globalAlpha = p2))) : "triangle" === b ? (c.beginPath(), c.moveTo(a - e / 2, d2 + e / 2), c.lineTo(a + e / 2, d2 + e / 2), c.lineTo(a, d2 - e / 2), c.closePath(), h && c.fill(), n2 && (m ? c.stroke() : (p2 = c.globalAlpha, c.globalAlpha = 0.15, c.strokeStyle = "black", c.stroke(), c.globalAlpha = p2)), c.beginPath()) : "cross" === b && (c.strokeStyle = h, c.lineWidth = e / 4, c.beginPath(), c.moveTo(a - e / 2, d2 - e / 2), c.lineTo(a + e / 2, d2 + e / 2), c.stroke(), c.moveTo(a + e / 2, d2 - e / 2), c.lineTo(a - e / 2, d2 + e / 2), c.stroke());
          }
        }, drawMarkers: function(a) {
          for (var d2 = 0; d2 < a.length; d2++) {
            var c = a[d2];
            X.drawMarker(c.x, c.y, c.ctx, c.type, c.size, c.color, c.borderColor, c.borderThickness);
          }
        } };
        return p;
      }();
      t.version = "v3.10.2 GA";
      window.CanvasJS && (t && !window.CanvasJS.Chart) && (window.CanvasJS.Chart = t);
    })();
    document.createElement("canvas").getContext || function() {
      function V() {
        return this.context_ || (this.context_ = new C(this));
      }
      function W(a, b, c) {
        var g = M.call(arguments, 2);
        return function() {
          return a.apply(b, g.concat(M.call(arguments)));
        };
      }
      function N(a) {
        return String(a).replace(/&/g, "&amp;").replace(/"/g, "&quot;");
      }
      function O(a) {
        a.namespaces.g_vml_ || a.namespaces.add("g_vml_", "urn:schemas-microsoft-com:vml", "#default#VML");
        a.namespaces.g_o_ || a.namespaces.add("g_o_", "urn:schemas-microsoft-com:office:office", "#default#VML");
        a.styleSheets.ex_canvas_ || (a = a.createStyleSheet(), a.owningElement.id = "ex_canvas_", a.cssText = "canvas{display:inline-block;overflow:hidden;text-align:left;width:300px;height:150px}");
      }
      function X(a) {
        var b = a.srcElement;
        switch (a.propertyName) {
          case "width":
            b.getContext().clearRect();
            b.style.width = b.attributes.width.nodeValue + "px";
            b.firstChild.style.width = b.clientWidth + "px";
            break;
          case "height":
            b.getContext().clearRect(), b.style.height = b.attributes.height.nodeValue + "px", b.firstChild.style.height = b.clientHeight + "px";
        }
      }
      function Y(a) {
        a = a.srcElement;
        a.firstChild && (a.firstChild.style.width = a.clientWidth + "px", a.firstChild.style.height = a.clientHeight + "px");
      }
      function D() {
        return [[1, 0, 0], [0, 1, 0], [0, 0, 1]];
      }
      function t(a, b) {
        for (var c = D(), g = 0; 3 > g; g++)
          for (var e = 0; 3 > e; e++) {
            for (var f = 0, d2 = 0; 3 > d2; d2++)
              f += a[g][d2] * b[d2][e];
            c[g][e] = f;
          }
        return c;
      }
      function P(a, b) {
        b.fillStyle = a.fillStyle;
        b.lineCap = a.lineCap;
        b.lineJoin = a.lineJoin;
        b.lineWidth = a.lineWidth;
        b.miterLimit = a.miterLimit;
        b.shadowBlur = a.shadowBlur;
        b.shadowColor = a.shadowColor;
        b.shadowOffsetX = a.shadowOffsetX;
        b.shadowOffsetY = a.shadowOffsetY;
        b.strokeStyle = a.strokeStyle;
        b.globalAlpha = a.globalAlpha;
        b.font = a.font;
        b.textAlign = a.textAlign;
        b.textBaseline = a.textBaseline;
        b.arcScaleX_ = a.arcScaleX_;
        b.arcScaleY_ = a.arcScaleY_;
        b.lineScale_ = a.lineScale_;
      }
      function Q(a) {
        var b = a.indexOf("(", 3), c = a.indexOf(")", b + 1), b = a.substring(b + 1, c).split(",");
        if (4 != b.length || "a" != a.charAt(3))
          b[3] = 1;
        return b;
      }
      function E(a, b, c) {
        return Math.min(c, Math.max(b, a));
      }
      function F(a, b, c) {
        0 > c && c++;
        1 < c && c--;
        return 1 > 6 * c ? a + 6 * (b - a) * c : 1 > 2 * c ? b : 2 > 3 * c ? a + 6 * (b - a) * (2 / 3 - c) : a;
      }
      function G(a) {
        if (a in H)
          return H[a];
        var b, c = 1;
        a = String(a);
        if ("#" == a.charAt(0))
          b = a;
        else if (/^rgb/.test(a)) {
          c = Q(a);
          b = "#";
          for (var g, e = 0; 3 > e; e++)
            g = -1 != c[e].indexOf("%") ? Math.floor(255 * (parseFloat(c[e]) / 100)) : +c[e], b += v[E(g, 0, 255)];
          c = +c[3];
        } else if (/^hsl/.test(a)) {
          e = c = Q(a);
          b = parseFloat(e[0]) / 360 % 360;
          0 > b && b++;
          g = E(parseFloat(e[1]) / 100, 0, 1);
          e = E(parseFloat(e[2]) / 100, 0, 1);
          if (0 == g)
            g = e = b = e;
          else {
            var f = 0.5 > e ? e * (1 + g) : e + g - e * g, d2 = 2 * e - f;
            g = F(d2, f, b + 1 / 3);
            e = F(d2, f, b);
            b = F(d2, f, b - 1 / 3);
          }
          b = "#" + v[Math.floor(255 * g)] + v[Math.floor(255 * e)] + v[Math.floor(255 * b)];
          c = c[3];
        } else
          b = Z[a] || a;
        return H[a] = { color: b, alpha: c };
      }
      function C(a) {
        this.m_ = D();
        this.mStack_ = [];
        this.aStack_ = [];
        this.currentPath_ = [];
        this.fillStyle = this.strokeStyle = "#000";
        this.lineWidth = 1;
        this.lineJoin = "miter";
        this.lineCap = "butt";
        this.miterLimit = 1 * q;
        this.globalAlpha = 1;
        this.font = "10px sans-serif";
        this.textAlign = "left";
        this.textBaseline = "alphabetic";
        this.canvas = a;
        var b = "width:" + a.clientWidth + "px;height:" + a.clientHeight + "px;overflow:hidden;position:absolute", c = a.ownerDocument.createElement("div");
        c.style.cssText = b;
        a.appendChild(c);
        b = c.cloneNode(false);
        b.style.backgroundColor = "red";
        b.style.filter = "alpha(opacity=0)";
        a.appendChild(b);
        this.element_ = c;
        this.lineScale_ = this.arcScaleY_ = this.arcScaleX_ = 1;
      }
      function R(a, b, c, g) {
        a.currentPath_.push({ type: "bezierCurveTo", cp1x: b.x, cp1y: b.y, cp2x: c.x, cp2y: c.y, x: g.x, y: g.y });
        a.currentX_ = g.x;
        a.currentY_ = g.y;
      }
      function S(a, b) {
        var c = G(a.strokeStyle), g = c.color, c = c.alpha * a.globalAlpha, e = a.lineScale_ * a.lineWidth;
        1 > e && (c *= e);
        b.push(
          "<g_vml_:stroke",
          ' opacity="',
          c,
          '"',
          ' joinstyle="',
          a.lineJoin,
          '"',
          ' miterlimit="',
          a.miterLimit,
          '"',
          ' endcap="',
          $[a.lineCap] || "square",
          '"',
          ' weight="',
          e,
          'px"',
          ' color="',
          g,
          '" />'
        );
      }
      function T(a, b, c, g) {
        var e = a.fillStyle, f = a.arcScaleX_, d2 = a.arcScaleY_, k2 = g.x - c.x, n = g.y - c.y;
        if (e instanceof w) {
          var h = 0, l = g = 0, u = 0, m = 1;
          if ("gradient" == e.type_) {
            h = e.x1_ / f;
            c = e.y1_ / d2;
            var p = s(a, e.x0_ / f, e.y0_ / d2), h = s(a, h, c), h = 180 * Math.atan2(h.x - p.x, h.y - p.y) / Math.PI;
            0 > h && (h += 360);
            1e-6 > h && (h = 0);
          } else
            p = s(a, e.x0_, e.y0_), g = (p.x - c.x) / k2, l = (p.y - c.y) / n, k2 /= f * q, n /= d2 * q, m = x.max(k2, n), u = 2 * e.r0_ / m, m = 2 * e.r1_ / m - u;
          f = e.colors_;
          f.sort(function(a2, b2) {
            return a2.offset - b2.offset;
          });
          d2 = f.length;
          p = f[0].color;
          c = f[d2 - 1].color;
          k2 = f[0].alpha * a.globalAlpha;
          a = f[d2 - 1].alpha * a.globalAlpha;
          for (var n = [], r2 = 0; r2 < d2; r2++) {
            var t2 = f[r2];
            n.push(t2.offset * m + u + " " + t2.color);
          }
          b.push('<g_vml_:fill type="', e.type_, '"', ' method="none" focus="100%"', ' color="', p, '"', ' color2="', c, '"', ' colors="', n.join(","), '"', ' opacity="', a, '"', ' g_o_:opacity2="', k2, '"', ' angle="', h, '"', ' focusposition="', g, ",", l, '" />');
        } else
          e instanceof I ? k2 && n && b.push("<g_vml_:fill", ' position="', -c.x / k2 * f * f, ",", -c.y / n * d2 * d2, '"', ' type="tile"', ' src="', e.src_, '" />') : (e = G(a.fillStyle), b.push('<g_vml_:fill color="', e.color, '" opacity="', e.alpha * a.globalAlpha, '" />'));
      }
      function s(a, b, c) {
        a = a.m_;
        return { x: q * (b * a[0][0] + c * a[1][0] + a[2][0]) - r, y: q * (b * a[0][1] + c * a[1][1] + a[2][1]) - r };
      }
      function z(a, b, c) {
        isFinite(b[0][0]) && (isFinite(b[0][1]) && isFinite(b[1][0]) && isFinite(b[1][1]) && isFinite(b[2][0]) && isFinite(b[2][1])) && (a.m_ = b, c && (a.lineScale_ = aa(ba(b[0][0] * b[1][1] - b[0][1] * b[1][0]))));
      }
      function w(a) {
        this.type_ = a;
        this.r1_ = this.y1_ = this.x1_ = this.r0_ = this.y0_ = this.x0_ = 0;
        this.colors_ = [];
      }
      function I(a, b) {
        if (!a || 1 != a.nodeType || "IMG" != a.tagName)
          throw new A("TYPE_MISMATCH_ERR");
        if ("complete" != a.readyState)
          throw new A("INVALID_STATE_ERR");
        switch (b) {
          case "repeat":
          case null:
          case "":
            this.repetition_ = "repeat";
            break;
          case "repeat-x":
          case "repeat-y":
          case "no-repeat":
            this.repetition_ = b;
            break;
          default:
            throw new A("SYNTAX_ERR");
        }
        this.src_ = a.src;
        this.width_ = a.width;
        this.height_ = a.height;
      }
      function A(a) {
        this.code = this[a];
        this.message = a + ": DOM Exception " + this.code;
      }
      var x = Math, k = x.round, J = x.sin, K = x.cos, ba = x.abs, aa = x.sqrt, q = 10, r = q / 2;
      navigator.userAgent.match(/MSIE ([\d.]+)?/);
      var M = Array.prototype.slice;
      O(document);
      var U = { init: function(a) {
        a = a || document;
        a.createElement("canvas");
        a.attachEvent("onreadystatechange", W(this.init_, this, a));
      }, init_: function(a) {
        a = a.getElementsByTagName("canvas");
        for (var b = 0; b < a.length; b++)
          this.initElement(a[b]);
      }, initElement: function(a) {
        if (!a.getContext) {
          a.getContext = V;
          O(a.ownerDocument);
          a.innerHTML = "";
          a.attachEvent("onpropertychange", X);
          a.attachEvent("onresize", Y);
          var b = a.attributes;
          b.width && b.width.specified ? a.style.width = b.width.nodeValue + "px" : a.width = a.clientWidth;
          b.height && b.height.specified ? a.style.height = b.height.nodeValue + "px" : a.height = a.clientHeight;
        }
        return a;
      } };
      U.init();
      for (var v = [], d = 0; 16 > d; d++)
        for (var B = 0; 16 > B; B++)
          v[16 * d + B] = d.toString(16) + B.toString(16);
      var Z = {
        aliceblue: "#F0F8FF",
        antiquewhite: "#FAEBD7",
        aquamarine: "#7FFFD4",
        azure: "#F0FFFF",
        beige: "#F5F5DC",
        bisque: "#FFE4C4",
        black: "#000000",
        blanchedalmond: "#FFEBCD",
        blueviolet: "#8A2BE2",
        brown: "#A52A2A",
        burlywood: "#DEB887",
        cadetblue: "#5F9EA0",
        chartreuse: "#7FFF00",
        chocolate: "#D2691E",
        coral: "#FF7F50",
        cornflowerblue: "#6495ED",
        cornsilk: "#FFF8DC",
        crimson: "#DC143C",
        cyan: "#00FFFF",
        darkblue: "#00008B",
        darkcyan: "#008B8B",
        darkgoldenrod: "#B8860B",
        darkgray: "#A9A9A9",
        darkgreen: "#006400",
        darkgrey: "#A9A9A9",
        darkkhaki: "#BDB76B",
        darkmagenta: "#8B008B",
        darkolivegreen: "#556B2F",
        darkorange: "#FF8C00",
        darkorchid: "#9932CC",
        darkred: "#8B0000",
        darksalmon: "#E9967A",
        darkseagreen: "#8FBC8F",
        darkslateblue: "#483D8B",
        darkslategray: "#2F4F4F",
        darkslategrey: "#2F4F4F",
        darkturquoise: "#00CED1",
        darkviolet: "#9400D3",
        deeppink: "#FF1493",
        deepskyblue: "#00BFFF",
        dimgray: "#696969",
        dimgrey: "#696969",
        dodgerblue: "#1E90FF",
        firebrick: "#B22222",
        floralwhite: "#FFFAF0",
        forestgreen: "#228B22",
        gainsboro: "#DCDCDC",
        ghostwhite: "#F8F8FF",
        gold: "#FFD700",
        goldenrod: "#DAA520",
        grey: "#808080",
        greenyellow: "#ADFF2F",
        honeydew: "#F0FFF0",
        hotpink: "#FF69B4",
        indianred: "#CD5C5C",
        indigo: "#4B0082",
        ivory: "#FFFFF0",
        khaki: "#F0E68C",
        lavender: "#E6E6FA",
        lavenderblush: "#FFF0F5",
        lawngreen: "#7CFC00",
        lemonchiffon: "#FFFACD",
        lightblue: "#ADD8E6",
        lightcoral: "#F08080",
        lightcyan: "#E0FFFF",
        lightgoldenrodyellow: "#FAFAD2",
        lightgreen: "#90EE90",
        lightgrey: "#D3D3D3",
        lightpink: "#FFB6C1",
        lightsalmon: "#FFA07A",
        lightseagreen: "#20B2AA",
        lightskyblue: "#87CEFA",
        lightslategray: "#778899",
        lightslategrey: "#778899",
        lightsteelblue: "#B0C4DE",
        lightyellow: "#FFFFE0",
        limegreen: "#32CD32",
        linen: "#FAF0E6",
        magenta: "#FF00FF",
        mediumaquamarine: "#66CDAA",
        mediumblue: "#0000CD",
        mediumorchid: "#BA55D3",
        mediumpurple: "#9370DB",
        mediumseagreen: "#3CB371",
        mediumslateblue: "#7B68EE",
        mediumspringgreen: "#00FA9A",
        mediumturquoise: "#48D1CC",
        mediumvioletred: "#C71585",
        midnightblue: "#191970",
        mintcream: "#F5FFFA",
        mistyrose: "#FFE4E1",
        moccasin: "#FFE4B5",
        navajowhite: "#FFDEAD",
        oldlace: "#FDF5E6",
        olivedrab: "#6B8E23",
        orange: "#FFA500",
        orangered: "#FF4500",
        orchid: "#DA70D6",
        palegoldenrod: "#EEE8AA",
        palegreen: "#98FB98",
        paleturquoise: "#AFEEEE",
        palevioletred: "#DB7093",
        papayawhip: "#FFEFD5",
        peachpuff: "#FFDAB9",
        peru: "#CD853F",
        pink: "#FFC0CB",
        plum: "#DDA0DD",
        powderblue: "#B0E0E6",
        rosybrown: "#BC8F8F",
        royalblue: "#4169E1",
        saddlebrown: "#8B4513",
        salmon: "#FA8072",
        sandybrown: "#F4A460",
        seagreen: "#2E8B57",
        seashell: "#FFF5EE",
        sienna: "#A0522D",
        skyblue: "#87CEEB",
        slateblue: "#6A5ACD",
        slategray: "#708090",
        slategrey: "#708090",
        snow: "#FFFAFA",
        springgreen: "#00FF7F",
        steelblue: "#4682B4",
        tan: "#D2B48C",
        thistle: "#D8BFD8",
        tomato: "#FF6347",
        turquoise: "#40E0D0",
        violet: "#EE82EE",
        wheat: "#F5DEB3",
        whitesmoke: "#F5F5F5",
        yellowgreen: "#9ACD32"
      }, H = {}, L = {}, $ = { butt: "flat", round: "round" }, d = C.prototype;
      d.clearRect = function() {
        this.textMeasureEl_ && (this.textMeasureEl_.removeNode(true), this.textMeasureEl_ = null);
        this.element_.innerHTML = "";
      };
      d.beginPath = function() {
        this.currentPath_ = [];
      };
      d.moveTo = function(a, b) {
        var c = s(this, a, b);
        this.currentPath_.push({ type: "moveTo", x: c.x, y: c.y });
        this.currentX_ = c.x;
        this.currentY_ = c.y;
      };
      d.lineTo = function(a, b) {
        var c = s(this, a, b);
        this.currentPath_.push({ type: "lineTo", x: c.x, y: c.y });
        this.currentX_ = c.x;
        this.currentY_ = c.y;
      };
      d.bezierCurveTo = function(a, b, c, g, e, f) {
        e = s(this, e, f);
        a = s(this, a, b);
        c = s(this, c, g);
        R(this, a, c, e);
      };
      d.quadraticCurveTo = function(a, b, c, g) {
        a = s(this, a, b);
        c = s(this, c, g);
        g = { x: this.currentX_ + 2 / 3 * (a.x - this.currentX_), y: this.currentY_ + 2 / 3 * (a.y - this.currentY_) };
        R(this, g, { x: g.x + (c.x - this.currentX_) / 3, y: g.y + (c.y - this.currentY_) / 3 }, c);
      };
      d.arc = function(a, b, c, g, e, f) {
        c *= q;
        var d2 = f ? "at" : "wa", k2 = a + K(g) * c - r, n = b + J(g) * c - r;
        g = a + K(e) * c - r;
        e = b + J(e) * c - r;
        k2 != g || f || (k2 += 0.125);
        a = s(this, a, b);
        k2 = s(this, k2, n);
        g = s(this, g, e);
        this.currentPath_.push({
          type: d2,
          x: a.x,
          y: a.y,
          radius: c,
          xStart: k2.x,
          yStart: k2.y,
          xEnd: g.x,
          yEnd: g.y
        });
      };
      d.rect = function(a, b, c, g) {
        this.moveTo(a, b);
        this.lineTo(a + c, b);
        this.lineTo(a + c, b + g);
        this.lineTo(a, b + g);
        this.closePath();
      };
      d.strokeRect = function(a, b, c, g) {
        var e = this.currentPath_;
        this.beginPath();
        this.moveTo(a, b);
        this.lineTo(a + c, b);
        this.lineTo(a + c, b + g);
        this.lineTo(a, b + g);
        this.closePath();
        this.stroke();
        this.currentPath_ = e;
      };
      d.fillRect = function(a, b, c, g) {
        var e = this.currentPath_;
        this.beginPath();
        this.moveTo(a, b);
        this.lineTo(a + c, b);
        this.lineTo(a + c, b + g);
        this.lineTo(a, b + g);
        this.closePath();
        this.fill();
        this.currentPath_ = e;
      };
      d.createLinearGradient = function(a, b, c, g) {
        var e = new w("gradient");
        e.x0_ = a;
        e.y0_ = b;
        e.x1_ = c;
        e.y1_ = g;
        return e;
      };
      d.createRadialGradient = function(a, b, c, g, e, f) {
        var d2 = new w("gradientradial");
        d2.x0_ = a;
        d2.y0_ = b;
        d2.r0_ = c;
        d2.x1_ = g;
        d2.y1_ = e;
        d2.r1_ = f;
        return d2;
      };
      d.drawImage = function(a, b) {
        var c, g, e, d2, r2, y, n, h;
        e = a.runtimeStyle.width;
        d2 = a.runtimeStyle.height;
        a.runtimeStyle.width = "auto";
        a.runtimeStyle.height = "auto";
        var l = a.width, u = a.height;
        a.runtimeStyle.width = e;
        a.runtimeStyle.height = d2;
        if (3 == arguments.length)
          c = arguments[1], g = arguments[2], r2 = y = 0, n = e = l, h = d2 = u;
        else if (5 == arguments.length)
          c = arguments[1], g = arguments[2], e = arguments[3], d2 = arguments[4], r2 = y = 0, n = l, h = u;
        else if (9 == arguments.length)
          r2 = arguments[1], y = arguments[2], n = arguments[3], h = arguments[4], c = arguments[5], g = arguments[6], e = arguments[7], d2 = arguments[8];
        else
          throw Error("Invalid number of arguments");
        var m = s(this, c, g), p = [];
        p.push(
          " <g_vml_:group",
          ' coordsize="',
          10 * q,
          ",",
          10 * q,
          '"',
          ' coordorigin="0,0"',
          ' style="width:',
          10,
          "px;height:",
          10,
          "px;position:absolute;"
        );
        if (1 != this.m_[0][0] || this.m_[0][1] || 1 != this.m_[1][1] || this.m_[1][0]) {
          var t2 = [];
          t2.push("M11=", this.m_[0][0], ",", "M12=", this.m_[1][0], ",", "M21=", this.m_[0][1], ",", "M22=", this.m_[1][1], ",", "Dx=", k(m.x / q), ",", "Dy=", k(m.y / q), "");
          var v2 = s(this, c + e, g), w2 = s(this, c, g + d2);
          c = s(this, c + e, g + d2);
          m.x = x.max(m.x, v2.x, w2.x, c.x);
          m.y = x.max(m.y, v2.y, w2.y, c.y);
          p.push("padding:0 ", k(m.x / q), "px ", k(m.y / q), "px 0;filter:progid:DXImageTransform.Microsoft.Matrix(", t2.join(""), ", sizingmethod='clip');");
        } else
          p.push(
            "top:",
            k(m.y / q),
            "px;left:",
            k(m.x / q),
            "px;"
          );
        p.push(' ">', '<g_vml_:image src="', a.src, '"', ' style="width:', q * e, "px;", " height:", q * d2, 'px"', ' cropleft="', r2 / l, '"', ' croptop="', y / u, '"', ' cropright="', (l - r2 - n) / l, '"', ' cropbottom="', (u - y - h) / u, '"', " />", "</g_vml_:group>");
        this.element_.insertAdjacentHTML("BeforeEnd", p.join(""));
      };
      d.stroke = function(a) {
        var b = [];
        b.push(
          "<g_vml_:shape",
          ' filled="',
          !!a,
          '"',
          ' style="position:absolute;width:',
          10,
          "px;height:",
          10,
          'px;"',
          ' coordorigin="0,0"',
          ' coordsize="',
          10 * q,
          ",",
          10 * q,
          '"',
          ' stroked="',
          !a,
          '"',
          ' path="'
        );
        for (var c = { x: null, y: null }, d2 = { x: null, y: null }, e = 0; e < this.currentPath_.length; e++) {
          var f = this.currentPath_[e];
          switch (f.type) {
            case "moveTo":
              b.push(" m ", k(f.x), ",", k(f.y));
              break;
            case "lineTo":
              b.push(" l ", k(f.x), ",", k(f.y));
              break;
            case "close":
              b.push(" x ");
              f = null;
              break;
            case "bezierCurveTo":
              b.push(" c ", k(f.cp1x), ",", k(f.cp1y), ",", k(f.cp2x), ",", k(f.cp2y), ",", k(f.x), ",", k(f.y));
              break;
            case "at":
            case "wa":
              b.push(" ", f.type, " ", k(f.x - this.arcScaleX_ * f.radius), ",", k(f.y - this.arcScaleY_ * f.radius), " ", k(f.x + this.arcScaleX_ * f.radius), ",", k(f.y + this.arcScaleY_ * f.radius), " ", k(f.xStart), ",", k(f.yStart), " ", k(f.xEnd), ",", k(f.yEnd));
          }
          if (f) {
            if (null == c.x || f.x < c.x)
              c.x = f.x;
            if (null == d2.x || f.x > d2.x)
              d2.x = f.x;
            if (null == c.y || f.y < c.y)
              c.y = f.y;
            if (null == d2.y || f.y > d2.y)
              d2.y = f.y;
          }
        }
        b.push(' ">');
        a ? T(this, b, c, d2) : S(this, b);
        b.push("</g_vml_:shape>");
        this.element_.insertAdjacentHTML("beforeEnd", b.join(""));
      };
      d.fill = function() {
        this.stroke(true);
      };
      d.closePath = function() {
        this.currentPath_.push({ type: "close" });
      };
      d.save = function() {
        var a = {};
        P(this, a);
        this.aStack_.push(a);
        this.mStack_.push(this.m_);
        this.m_ = t(D(), this.m_);
      };
      d.restore = function() {
        this.aStack_.length && (P(this.aStack_.pop(), this), this.m_ = this.mStack_.pop());
      };
      d.translate = function(a, b) {
        z(this, t([[1, 0, 0], [0, 1, 0], [a, b, 1]], this.m_), false);
      };
      d.rotate = function(a) {
        var b = K(a);
        a = J(a);
        z(this, t([[b, a, 0], [-a, b, 0], [0, 0, 1]], this.m_), false);
      };
      d.scale = function(a, b) {
        this.arcScaleX_ *= a;
        this.arcScaleY_ *= b;
        z(this, t([[a, 0, 0], [0, b, 0], [0, 0, 1]], this.m_), true);
      };
      d.transform = function(a, b, c, d2, e, f) {
        z(this, t([[
          a,
          b,
          0
        ], [c, d2, 0], [e, f, 1]], this.m_), true);
      };
      d.setTransform = function(a, b, c, d2, e, f) {
        z(this, [[a, b, 0], [c, d2, 0], [e, f, 1]], true);
      };
      d.drawText_ = function(a, b, c, d2, e) {
        var f = this.m_;
        d2 = 0;
        var r2 = 1e3, t2 = 0, n = [], h;
        h = this.font;
        if (L[h])
          h = L[h];
        else {
          var l = document.createElement("div").style;
          try {
            l.font = h;
          } catch (u) {
          }
          h = L[h] = { style: l.fontStyle || "normal", variant: l.fontVariant || "normal", weight: l.fontWeight || "normal", size: l.fontSize || 10, family: l.fontFamily || "sans-serif" };
        }
        var l = h, m = this.element_;
        h = {};
        for (var p in l)
          h[p] = l[p];
        p = parseFloat(m.currentStyle.fontSize);
        m = parseFloat(l.size);
        "number" == typeof l.size ? h.size = l.size : -1 != l.size.indexOf("px") ? h.size = m : -1 != l.size.indexOf("em") ? h.size = p * m : -1 != l.size.indexOf("%") ? h.size = p / 100 * m : -1 != l.size.indexOf("pt") ? h.size = m / 0.75 : h.size = p;
        h.size *= 0.981;
        p = h.style + " " + h.variant + " " + h.weight + " " + h.size + "px " + h.family;
        m = this.element_.currentStyle;
        l = this.textAlign.toLowerCase();
        switch (l) {
          case "left":
          case "center":
          case "right":
            break;
          case "end":
            l = "ltr" == m.direction ? "right" : "left";
            break;
          case "start":
            l = "rtl" == m.direction ? "right" : "left";
            break;
          default:
            l = "left";
        }
        switch (this.textBaseline) {
          case "hanging":
          case "top":
            t2 = h.size / 1.75;
            break;
          case "middle":
            break;
          default:
          case null:
          case "alphabetic":
          case "ideographic":
          case "bottom":
            t2 = -h.size / 2.25;
        }
        switch (l) {
          case "right":
            d2 = 1e3;
            r2 = 0.05;
            break;
          case "center":
            d2 = r2 = 500;
        }
        b = s(this, b + 0, c + t2);
        n.push('<g_vml_:line from="', -d2, ' 0" to="', r2, ' 0.05" ', ' coordsize="100 100" coordorigin="0 0"', ' filled="', !e, '" stroked="', !!e, '" style="position:absolute;width:1px;height:1px;">');
        e ? S(this, n) : T(
          this,
          n,
          { x: -d2, y: 0 },
          { x: r2, y: h.size }
        );
        e = f[0][0].toFixed(3) + "," + f[1][0].toFixed(3) + "," + f[0][1].toFixed(3) + "," + f[1][1].toFixed(3) + ",0,0";
        b = k(b.x / q) + "," + k(b.y / q);
        n.push('<g_vml_:skew on="t" matrix="', e, '" ', ' offset="', b, '" origin="', d2, ' 0" />', '<g_vml_:path textpathok="true" />', '<g_vml_:textpath on="true" string="', N(a), '" style="v-text-align:', l, ";font:", N(p), '" /></g_vml_:line>');
        this.element_.insertAdjacentHTML("beforeEnd", n.join(""));
      };
      d.fillText = function(a, b, c, d2) {
        this.drawText_(a, b, c, d2, false);
      };
      d.strokeText = function(a, b, c, d2) {
        this.drawText_(a, b, c, d2, true);
      };
      d.measureText = function(a) {
        this.textMeasureEl_ || (this.element_.insertAdjacentHTML("beforeEnd", '<span style="position:absolute;top:-20000px;left:0;padding:0;margin:0;border:none;white-space:pre;"></span>'), this.textMeasureEl_ = this.element_.lastChild);
        var b = this.element_.ownerDocument;
        this.textMeasureEl_.innerHTML = "";
        this.textMeasureEl_.style.font = this.font;
        this.textMeasureEl_.appendChild(b.createTextNode(a));
        return { width: this.textMeasureEl_.offsetWidth };
      };
      d.clip = function() {
      };
      d.arcTo = function() {
      };
      d.createPattern = function(a, b) {
        return new I(a, b);
      };
      w.prototype.addColorStop = function(a, b) {
        b = G(b);
        this.colors_.push({ offset: a, color: b.color, alpha: b.alpha });
      };
      d = A.prototype = Error();
      d.INDEX_SIZE_ERR = 1;
      d.DOMSTRING_SIZE_ERR = 2;
      d.HIERARCHY_REQUEST_ERR = 3;
      d.WRONG_DOCUMENT_ERR = 4;
      d.INVALID_CHARACTER_ERR = 5;
      d.NO_DATA_ALLOWED_ERR = 6;
      d.NO_MODIFICATION_ALLOWED_ERR = 7;
      d.NOT_FOUND_ERR = 8;
      d.NOT_SUPPORTED_ERR = 9;
      d.INUSE_ATTRIBUTE_ERR = 10;
      d.INVALID_STATE_ERR = 11;
      d.SYNTAX_ERR = 12;
      d.INVALID_MODIFICATION_ERR = 13;
      d.NAMESPACE_ERR = 14;
      d.INVALID_ACCESS_ERR = 15;
      d.VALIDATION_ERR = 16;
      d.TYPE_MISMATCH_ERR = 17;
      G_vmlCanvasManager = U;
      CanvasRenderingContext2D = C;
      CanvasGradient = w;
      CanvasPattern = I;
      DOMException = A;
    }();
  }
});

// node_modules/@canvasjs/angular-charts/fesm2015/canvasjs-angular-charts.js
function CanvasJSChart_div_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 1);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵpropertyInterpolate("id", ctx_r0.chartContainerId);
    ɵɵproperty("ngStyle", ctx_r0.styles);
  }
}
if (typeof document === "object" && !!document) {
  CanvasJS = require_canvasjs_min();
}
var CanvasJS;
var CanvasJSChart = class _CanvasJSChart {
  constructor() {
    this.shouldUpdateChart = false;
    this.isDOMPresent = typeof document === "object" && !!document;
    this.chartInstance = new EventEmitter();
    this.options = this.options ? this.options : {};
    this.styles = this.styles ? this.styles : {
      width: "100%",
      position: "relative"
    };
    this.styles.height = this.options.height ? this.options.height + "px" : "400px";
    this.chartContainerId = "canvasjs-angular-chart-container-" + _CanvasJSChart._cjsChartContainerId++;
  }
  ngDoCheck() {
    if (this.prevChartOptions != this.options) {
      this.shouldUpdateChart = true;
    }
  }
  ngOnChanges() {
    if (this.shouldUpdateChart && this.chart) {
      this.chart.options = this.options;
      this.chart.render();
      this.shouldUpdateChart = false;
      this.prevChartOptions = this.options;
    }
  }
  ngAfterViewInit() {
    if (this.isDOMPresent) {
      this.chart = new CanvasJS.Chart(this.chartContainerId, this.options);
      this.chart.render();
      this.prevChartOptions = this.options;
      this.chartInstance.emit(this.chart);
    }
  }
  ngOnDestroy() {
    if (this.chart)
      this.chart.destroy();
  }
};
CanvasJSChart._cjsChartContainerId = 0;
CanvasJSChart.ɵfac = function CanvasJSChart_Factory(t) {
  return new (t || CanvasJSChart)();
};
CanvasJSChart.ɵcmp = ɵɵdefineComponent({
  type: CanvasJSChart,
  selectors: [["canvasjs-chart"]],
  inputs: {
    options: "options",
    styles: "styles"
  },
  outputs: {
    chartInstance: "chartInstance"
  },
  features: [ɵɵNgOnChangesFeature],
  decls: 1,
  vars: 1,
  consts: [[3, "id", "ngStyle", 4, "ngIf"], [3, "id", "ngStyle"]],
  template: function CanvasJSChart_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, CanvasJSChart_div_0_Template, 1, 2, "div", 0);
    }
    if (rf & 2) {
      ɵɵproperty("ngIf", ctx.isDOMPresent);
    }
  },
  dependencies: [NgIf, NgStyle],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CanvasJSChart, [{
    type: Component,
    args: [{
      selector: "canvasjs-chart",
      template: '<div *ngIf="isDOMPresent" id="{{chartContainerId}}" [ngStyle]="styles"></div>'
    }]
  }], function() {
    return [];
  }, {
    options: [{
      type: Input
    }],
    styles: [{
      type: Input
    }],
    chartInstance: [{
      type: Output
    }]
  });
})();
var CanvasJSAngularChartsModule = class {
};
CanvasJSAngularChartsModule.ɵfac = function CanvasJSAngularChartsModule_Factory(t) {
  return new (t || CanvasJSAngularChartsModule)();
};
CanvasJSAngularChartsModule.ɵmod = ɵɵdefineNgModule({
  type: CanvasJSAngularChartsModule,
  declarations: [CanvasJSChart],
  imports: [CommonModule],
  exports: [CanvasJSChart]
});
CanvasJSAngularChartsModule.ɵinj = ɵɵdefineInjector({
  imports: [[CommonModule]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CanvasJSAngularChartsModule, [{
    type: NgModule,
    args: [{
      declarations: [CanvasJSChart],
      imports: [CommonModule],
      exports: [CanvasJSChart]
    }]
  }], null, null);
})();
export {
  CanvasJS,
  CanvasJSAngularChartsModule,
  CanvasJSChart
};
//# sourceMappingURL=@canvasjs_angular-charts.js.map
