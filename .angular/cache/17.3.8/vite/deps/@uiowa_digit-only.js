import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  NgModule,
  setClassMetadata,
  ɵɵNgOnChangesFeature,
  ɵɵdefineDirective,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵlistener
} from "./chunk-FJ2FORF3.js";
import "./chunk-WKYGNSYM.js";

// node_modules/@uiowa/digit-only/fesm2020/uiowa-digit-only.mjs
var DigitOnlyDirective = class {
  constructor(el) {
    this.el = el;
    this.hasDecimalPoint = false;
    this.hasNegativeSign = false;
    this.navigationKeys = ["Backspace", "Delete", "Tab", "Escape", "Enter", "Home", "End", "ArrowLeft", "ArrowRight", "Clear", "Copy", "Paste"];
    this.decimal = false;
    this.decimalSeparator = ".";
    this.allowNegatives = false;
    this.allowPaste = true;
    this.negativeSign = "-";
    this.min = -Infinity;
    this.max = Infinity;
    this.regex = null;
    this.inputElement = el.nativeElement;
  }
  ngOnChanges(changes) {
    if (changes["pattern"]) {
      this.regex = this.pattern ? RegExp(this.pattern) : null;
    }
    if (changes["min"]) {
      const maybeMin = Number(this.min);
      this.min = isNaN(maybeMin) ? -Infinity : maybeMin;
    }
    if (changes["max"]) {
      const maybeMax = Number(this.max);
      this.max = isNaN(maybeMax) ? Infinity : maybeMax;
    }
  }
  onBeforeInput(e) {
    if (isNaN(Number(e.data))) {
      if (e.data === this.decimalSeparator || e.data === this.negativeSign && this.allowNegatives) {
        return;
      }
      e.preventDefault();
      e.stopPropagation();
    }
  }
  onKeyDown(e) {
    if (this.navigationKeys.indexOf(e.key) > -1 || // Allow: navigation keys: backspace, delete, arrows etc.
    (e.key === "a" || e.code === "KeyA") && e.ctrlKey === true || // Allow: Ctrl+A
    (e.key === "c" || e.code === "KeyC") && e.ctrlKey === true || // Allow: Ctrl+C
    (e.key === "v" || e.code === "KeyV") && e.ctrlKey === true || // Allow: Ctrl+V
    (e.key === "x" || e.code === "KeyX") && e.ctrlKey === true || // Allow: Ctrl+X
    (e.key === "a" || e.code === "KeyA") && e.metaKey === true || // Allow: Cmd+A (Mac)
    (e.key === "c" || e.code === "KeyC") && e.metaKey === true || // Allow: Cmd+C (Mac)
    (e.key === "v" || e.code === "KeyV") && e.metaKey === true || // Allow: Cmd+V (Mac)
    (e.key === "x" || e.code === "KeyX") && e.metaKey === true) {
      return;
    }
    let newValue = "";
    if (this.decimal && e.key === this.decimalSeparator) {
      newValue = this.forecastValue(e.key);
      if (newValue.split(this.decimalSeparator).length > 2) {
        e.preventDefault();
        return;
      } else {
        this.hasDecimalPoint = newValue.indexOf(this.decimalSeparator) > -1;
        return;
      }
    }
    if (e.key === this.negativeSign && this.allowNegatives) {
      newValue = this.forecastValue(e.key);
      if (newValue.charAt(0) !== this.negativeSign || newValue.split(this.negativeSign).length > 2) {
        e.preventDefault();
        return;
      } else {
        this.hasNegativeSign = newValue.split(this.negativeSign).length > -1;
        return;
      }
    }
    if (e.key === " " || isNaN(Number(e.key))) {
      e.preventDefault();
      return;
    }
    newValue = newValue || this.forecastValue(e.key);
    if (this.regex) {
      if (!this.regex.test(newValue)) {
        e.preventDefault();
        return;
      }
    }
    const newNumber = Number(newValue);
    if (newNumber > this.max || newNumber < this.min) {
      e.preventDefault();
    }
  }
  onPaste(event) {
    if (this.allowPaste === true) {
      let pastedInput = "";
      if (window["clipboardData"]) {
        pastedInput = window["clipboardData"].getData("text");
      } else if (event.clipboardData && event.clipboardData.getData) {
        pastedInput = event.clipboardData.getData("text/plain");
      }
      this.pasteData(pastedInput);
      event.preventDefault();
    } else {
      event.preventDefault();
      event.stopPropagation();
    }
  }
  onDrop(event) {
    const textData = event.dataTransfer?.getData("text") ?? "";
    this.inputElement.focus();
    this.pasteData(textData);
    event.preventDefault();
  }
  pasteData(pastedContent) {
    const sanitizedContent = this.sanitizeInput(pastedContent);
    if (sanitizedContent.includes(this.negativeSign) && this.hasNegativeSign && !this.getSelection().includes(this.negativeSign)) {
      return;
    }
    const pasted = document.execCommand("insertText", false, sanitizedContent);
    if (!pasted) {
      if (this.inputElement.setRangeText) {
        const {
          selectionStart: start,
          selectionEnd: end
        } = this.inputElement;
        this.inputElement.setRangeText(sanitizedContent, start ?? 0, end ?? 0, "end");
        if (typeof window["InstallTrigger"] !== "undefined") {
          this.inputElement.dispatchEvent(new Event("input", {
            cancelable: true
          }));
        }
      } else {
        this.insertAtCursor(this.inputElement, sanitizedContent);
      }
    }
    if (this.decimal) {
      this.hasDecimalPoint = this.inputElement.value.indexOf(this.decimalSeparator) > -1;
    }
    this.hasNegativeSign = this.inputElement.value.indexOf(this.negativeSign) > -1;
  }
  // The following 2 methods were added from the below article for browsers that do not support setRangeText
  // https://stackoverflow.com/questions/11076975/how-to-insert-text-into-the-textarea-at-the-current-cursor-position
  insertAtCursor(myField, myValue) {
    const startPos = myField.selectionStart ?? 0;
    const endPos = myField.selectionEnd ?? 0;
    myField.value = myField.value.substring(0, startPos) + myValue + myField.value.substring(endPos, myField.value.length);
    const pos = startPos + myValue.length;
    myField.focus();
    myField.setSelectionRange(pos, pos);
    this.triggerEvent(myField, "input");
  }
  triggerEvent(el, type) {
    if ("createEvent" in document) {
      const e = document.createEvent("HTMLEvents");
      e.initEvent(type, false, true);
      el.dispatchEvent(e);
    }
  }
  // end stack overflow code
  sanitizeInput(input) {
    let result = "";
    let regex;
    if (this.decimal && this.isValidDecimal(input)) {
      regex = new RegExp(`${this.getNegativeSignRegExp()}[^0-9${this.decimalSeparator}]`, "g");
    } else {
      regex = new RegExp(`${this.getNegativeSignRegExp()}[^0-9]`, "g");
    }
    result = input.replace(regex, "");
    const maxLength = this.inputElement.maxLength;
    if (maxLength > 0) {
      const allowedLength = maxLength - this.inputElement.value.length + (result.includes(`${this.negativeSign}`) ? 1 : 0);
      result = allowedLength > 0 ? result.substring(0, allowedLength) : "";
    }
    return result;
  }
  getNegativeSignRegExp() {
    return this.allowNegatives && (!this.hasNegativeSign || this.getSelection().includes(this.negativeSign)) ? `(?!^${this.negativeSign})` : "";
  }
  isValidDecimal(string) {
    if (!this.hasDecimalPoint) {
      return string.split(this.decimalSeparator).length <= 2;
    } else {
      const selectedText = this.getSelection();
      if (selectedText && selectedText.indexOf(this.decimalSeparator) > -1) {
        return string.split(this.decimalSeparator).length <= 2;
      } else {
        return string.indexOf(this.decimalSeparator) < 0;
      }
    }
  }
  getSelection() {
    return this.inputElement.value.substring(this.inputElement.selectionStart ?? 0, this.inputElement.selectionEnd ?? 0);
  }
  forecastValue(key) {
    const selectionStart = this.inputElement.selectionStart ?? 0;
    const selectionEnd = this.inputElement.selectionEnd ?? 0;
    const oldValue = this.inputElement.value;
    return oldValue.substring(0, selectionStart) + key + oldValue.substring(selectionEnd);
  }
};
DigitOnlyDirective.ɵfac = function DigitOnlyDirective_Factory(t) {
  return new (t || DigitOnlyDirective)(ɵɵdirectiveInject(ElementRef));
};
DigitOnlyDirective.ɵdir = ɵɵdefineDirective({
  type: DigitOnlyDirective,
  selectors: [["", "digitOnly", ""]],
  hostBindings: function DigitOnlyDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("beforeinput", function DigitOnlyDirective_beforeinput_HostBindingHandler($event) {
        return ctx.onBeforeInput($event);
      })("keydown", function DigitOnlyDirective_keydown_HostBindingHandler($event) {
        return ctx.onKeyDown($event);
      })("paste", function DigitOnlyDirective_paste_HostBindingHandler($event) {
        return ctx.onPaste($event);
      })("drop", function DigitOnlyDirective_drop_HostBindingHandler($event) {
        return ctx.onDrop($event);
      });
    }
  },
  inputs: {
    decimal: "decimal",
    decimalSeparator: "decimalSeparator",
    allowNegatives: "allowNegatives",
    allowPaste: "allowPaste",
    negativeSign: "negativeSign",
    min: "min",
    max: "max",
    pattern: "pattern"
  },
  features: [ɵɵNgOnChangesFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DigitOnlyDirective, [{
    type: Directive,
    args: [{
      selector: "[digitOnly]"
    }]
  }], function() {
    return [{
      type: ElementRef
    }];
  }, {
    decimal: [{
      type: Input
    }],
    decimalSeparator: [{
      type: Input
    }],
    allowNegatives: [{
      type: Input
    }],
    allowPaste: [{
      type: Input
    }],
    negativeSign: [{
      type: Input
    }],
    min: [{
      type: Input
    }],
    max: [{
      type: Input
    }],
    pattern: [{
      type: Input
    }],
    onBeforeInput: [{
      type: HostListener,
      args: ["beforeinput", ["$event"]]
    }],
    onKeyDown: [{
      type: HostListener,
      args: ["keydown", ["$event"]]
    }],
    onPaste: [{
      type: HostListener,
      args: ["paste", ["$event"]]
    }],
    onDrop: [{
      type: HostListener,
      args: ["drop", ["$event"]]
    }]
  });
})();
var MaskDirective = class {
  constructor(el) {
    this.el = el;
    this.navigationKeys = ["Backspace", "Delete", "Tab", "Escape", "Enter", "Home", "End", "ArrowLeft", "ArrowRight", "Clear", "Copy", "Paste"];
    this.regex = new RegExp("");
    this.inputElement = el.nativeElement;
  }
  ngOnInit() {
    this.regex = new RegExp(this.inputElement.pattern);
  }
  onKeyDown(e) {
    if (this.navigationKeys.indexOf(e.key) > -1 || // Allow: navigation keys: backspace, delete, arrows etc.
    (e.key === "a" || e.code === "KeyA") && e.ctrlKey === true || // Allow: Ctrl+A
    (e.key === "c" || e.code === "KeyC") && e.ctrlKey === true || // Allow: Ctrl+C
    (e.key === "v" || e.code === "KeyV") && e.ctrlKey === true || // Allow: Ctrl+V
    (e.key === "x" || e.code === "KeyX") && e.ctrlKey === true || // Allow: Ctrl+X
    (e.key === "a" || e.code === "KeyA") && e.metaKey === true || // Allow: Cmd+A (Mac)
    (e.key === "c" || e.code === "KeyC") && e.metaKey === true || // Allow: Cmd+C (Mac)
    (e.key === "v" || e.code === "KeyV") && e.metaKey === true || // Allow: Cmd+V (Mac)
    (e.key === "x" || e.code === "KeyX") && e.metaKey === true) {
      return;
    }
    const newValue = this.forecastValue(e.key);
    if (!this.regex.test(newValue)) {
      e.preventDefault();
    }
  }
  forecastValue(key) {
    const selectionStart = this.inputElement.selectionStart ?? 0;
    const selectionEnd = this.inputElement.selectionEnd ?? 0;
    const oldValue = this.inputElement.value;
    const selection = oldValue.substring(selectionStart, selectionEnd);
    return selection ? oldValue.replace(selection, key) : oldValue.substring(0, selectionStart) + key + oldValue.substring(selectionStart);
  }
};
MaskDirective.ɵfac = function MaskDirective_Factory(t) {
  return new (t || MaskDirective)(ɵɵdirectiveInject(ElementRef));
};
MaskDirective.ɵdir = ɵɵdefineDirective({
  type: MaskDirective,
  selectors: [["", "mask", ""]],
  hostBindings: function MaskDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("keydown", function MaskDirective_keydown_HostBindingHandler($event) {
        return ctx.onKeyDown($event);
      });
    }
  }
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MaskDirective, [{
    type: Directive,
    args: [{
      selector: "[mask]"
    }]
  }], function() {
    return [{
      type: ElementRef
    }];
  }, {
    onKeyDown: [{
      type: HostListener,
      args: ["keydown", ["$event"]]
    }]
  });
})();
var DigitOnlyModule = class {
};
DigitOnlyModule.ɵfac = function DigitOnlyModule_Factory(t) {
  return new (t || DigitOnlyModule)();
};
DigitOnlyModule.ɵmod = ɵɵdefineNgModule({
  type: DigitOnlyModule,
  declarations: [DigitOnlyDirective, MaskDirective],
  exports: [DigitOnlyDirective, MaskDirective]
});
DigitOnlyModule.ɵinj = ɵɵdefineInjector({
  imports: [[]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DigitOnlyModule, [{
    type: NgModule,
    args: [{
      imports: [],
      declarations: [DigitOnlyDirective, MaskDirective],
      exports: [DigitOnlyDirective, MaskDirective]
    }]
  }], null, null);
})();
export {
  DigitOnlyDirective,
  DigitOnlyModule,
  MaskDirective
};
//# sourceMappingURL=@uiowa_digit-only.js.map
