import {
  FocusMonitor
} from "./chunk-VQTGEUV4.js";
import {
  NzOutletModule,
  NzStringTemplateOutletDirective
} from "./chunk-3QNY2SH4.js";
import {
  NzFormItemFeedbackIconComponent,
  NzFormNoStatusService,
  NzFormPatchModule,
  NzFormStatusService
} from "./chunk-PGVEYJVB.js";
import {
  DOWN_ARROW,
  ENTER,
  UP_ARROW
} from "./chunk-T4JA2NQD.js";
import {
  NzDestroyService
} from "./chunk-7UXDNT2U.js";
import "./chunk-ICUNVL6H.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NG_VALUE_ACCESSOR,
  NgControlStatus,
  NgModel
} from "./chunk-QS47QVHG.js";
import {
  Directionality
} from "./chunk-7DIIEDL6.js";
import {
  NzIconDirective,
  NzIconModule
} from "./chunk-X43JKLZC.js";
import "./chunk-J7ZMYXK5.js";
import {
  InputBoolean,
  getStatusClassNames,
  isNotNil
} from "./chunk-PGMGKWAT.js";
import "./chunk-2FVUDUB4.js";
import "./chunk-UPSRJ2V7.js";
import "./chunk-WCYJYOZL.js";
import {
  NgClass,
  NgTemplateOutlet
} from "./chunk-KKPSRQXY.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  Directive,
  ElementRef,
  EventEmitter,
  Input,
  NgModule,
  NgZone,
  Optional,
  Output,
  Renderer2,
  Subject,
  ViewChild,
  ViewEncapsulation$1,
  __decorate,
  distinctUntilChanged,
  forwardRef,
  fromEvent,
  map,
  merge,
  mergeMap,
  setClassMetadata,
  startWith,
  switchMap,
  takeUntil,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵviewQuery
} from "./chunk-QIBLZIJK.js";
import {
  __spreadValues
} from "./chunk-J4B6MK7R.js";

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-input-number.mjs
var _c0 = ["upHandler"];
var _c1 = ["downHandler"];
var _c2 = ["inputElement"];
function NzInputNumberComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "nz-form-item-feedback-icon", 10);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("status", ctx_r1.status);
  }
}
var _c3 = ["nz-input-number-group-slot", ""];
var _c4 = ["*"];
function NzInputNumberGroupSlotComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 0);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("nzType", ctx_r0.icon);
  }
}
function NzInputNumberGroupSlotComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r0.template);
  }
}
function NzInputNumberGroupComponent_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 3);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵproperty("icon", ctx_r0.nzAddOnBeforeIcon)("template", ctx_r0.nzAddOnBefore);
  }
}
function NzInputNumberGroupComponent_Conditional_0_Conditional_2_ng_template_1_Template(rf, ctx) {
}
function NzInputNumberGroupComponent_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 5);
    ɵɵtemplate(1, NzInputNumberGroupComponent_Conditional_0_Conditional_2_ng_template_1_Template, 0, 0, "ng-template", 6);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    const affixTemplate_r2 = ɵɵreference(3);
    ɵɵclassProp("ant-input-number-affix-wrapper-disabled", ctx_r0.disabled)("ant-input-number-affix-wrapper-sm", ctx_r0.isSmall)("ant-input-number-affix-wrapper-lg", ctx_r0.isLarge)("ant-input-number-affix-wrapper-focused", ctx_r0.focused);
    ɵɵproperty("ngClass", ctx_r0.affixInGroupStatusCls);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", affixTemplate_r2);
  }
}
function NzInputNumberGroupComponent_Conditional_0_Conditional_3_ng_template_0_Template(rf, ctx) {
}
function NzInputNumberGroupComponent_Conditional_0_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NzInputNumberGroupComponent_Conditional_0_Conditional_3_ng_template_0_Template, 0, 0, "ng-template", 6);
  }
  if (rf & 2) {
    ɵɵnextContext(2);
    const contentTemplate_r3 = ɵɵreference(5);
    ɵɵproperty("ngTemplateOutlet", contentTemplate_r3);
  }
}
function NzInputNumberGroupComponent_Conditional_0_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 3);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵproperty("icon", ctx_r0.nzAddOnAfterIcon)("template", ctx_r0.nzAddOnAfter);
  }
}
function NzInputNumberGroupComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 2);
    ɵɵtemplate(1, NzInputNumberGroupComponent_Conditional_0_Conditional_1_Template, 1, 2, "div", 3)(2, NzInputNumberGroupComponent_Conditional_0_Conditional_2_Template, 2, 10, "div", 4)(3, NzInputNumberGroupComponent_Conditional_0_Conditional_3_Template, 1, 1)(4, NzInputNumberGroupComponent_Conditional_0_Conditional_4_Template, 1, 2, "span", 3);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵconditional(1, ctx_r0.nzAddOnBefore || ctx_r0.nzAddOnBeforeIcon ? 1 : -1);
    ɵɵadvance();
    ɵɵconditional(2, ctx_r0.isAffix || ctx_r0.hasFeedback ? 2 : 3);
    ɵɵadvance(2);
    ɵɵconditional(4, ctx_r0.nzAddOnAfter || ctx_r0.nzAddOnAfterIcon ? 4 : -1);
  }
}
function NzInputNumberGroupComponent_Conditional_1_Conditional_0_ng_template_0_Template(rf, ctx) {
}
function NzInputNumberGroupComponent_Conditional_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NzInputNumberGroupComponent_Conditional_1_Conditional_0_ng_template_0_Template, 0, 0, "ng-template", 6);
  }
  if (rf & 2) {
    ɵɵnextContext(2);
    const affixTemplate_r2 = ɵɵreference(3);
    ɵɵproperty("ngTemplateOutlet", affixTemplate_r2);
  }
}
function NzInputNumberGroupComponent_Conditional_1_Conditional_1_ng_template_0_Template(rf, ctx) {
}
function NzInputNumberGroupComponent_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NzInputNumberGroupComponent_Conditional_1_Conditional_1_ng_template_0_Template, 0, 0, "ng-template", 6);
  }
  if (rf & 2) {
    ɵɵnextContext(2);
    const contentTemplate_r3 = ɵɵreference(5);
    ɵɵproperty("ngTemplateOutlet", contentTemplate_r3);
  }
}
function NzInputNumberGroupComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NzInputNumberGroupComponent_Conditional_1_Conditional_0_Template, 1, 1, null, 6)(1, NzInputNumberGroupComponent_Conditional_1_Conditional_1_Template, 1, 1);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵconditional(0, ctx_r0.isAffix ? 0 : 1);
  }
}
function NzInputNumberGroupComponent_ng_template_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 7);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵproperty("icon", ctx_r0.nzPrefixIcon)("template", ctx_r0.nzPrefix);
  }
}
function NzInputNumberGroupComponent_ng_template_2_ng_template_1_Template(rf, ctx) {
}
function NzInputNumberGroupComponent_ng_template_2_Conditional_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "nz-form-item-feedback-icon", 9);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵproperty("status", ctx_r0.status);
  }
}
function NzInputNumberGroupComponent_ng_template_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 8);
    ɵɵtemplate(1, NzInputNumberGroupComponent_ng_template_2_Conditional_2_Conditional_1_Template, 1, 1, "nz-form-item-feedback-icon", 9);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵproperty("icon", ctx_r0.nzSuffixIcon)("template", ctx_r0.nzSuffix);
    ɵɵadvance();
    ɵɵconditional(1, ctx_r0.isFeedback ? 1 : -1);
  }
}
function NzInputNumberGroupComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NzInputNumberGroupComponent_ng_template_2_Conditional_0_Template, 1, 2, "span", 7)(1, NzInputNumberGroupComponent_ng_template_2_ng_template_1_Template, 0, 0, "ng-template", 6)(2, NzInputNumberGroupComponent_ng_template_2_Conditional_2_Template, 2, 3, "span", 8);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    const contentTemplate_r3 = ɵɵreference(5);
    ɵɵconditional(0, ctx_r0.nzPrefix || ctx_r0.nzPrefixIcon ? 0 : -1);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", contentTemplate_r3);
    ɵɵadvance();
    ɵɵconditional(2, ctx_r0.nzSuffix || ctx_r0.nzSuffixIcon || ctx_r0.isFeedback ? 2 : -1);
  }
}
function NzInputNumberGroupComponent_ng_template_4_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "nz-form-item-feedback-icon", 9);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵproperty("status", ctx_r0.status);
  }
}
function NzInputNumberGroupComponent_ng_template_4_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 10);
    ɵɵtemplate(1, NzInputNumberGroupComponent_ng_template_4_Conditional_1_Conditional_1_Template, 1, 1, "nz-form-item-feedback-icon", 9);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵconditional(1, ctx_r0.isFeedback ? 1 : -1);
  }
}
function NzInputNumberGroupComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵprojection(0);
    ɵɵtemplate(1, NzInputNumberGroupComponent_ng_template_4_Conditional_1_Template, 2, 1, "span", 10);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵconditional(1, !ctx_r0.isAddOn && !ctx_r0.isAffix && ctx_r0.isFeedback ? 1 : -1);
  }
}
var _NzInputNumberComponent = class _NzInputNumberComponent {
  onModelChange(value) {
    this.parsedValue = this.nzParser(value);
    this.inputElement.nativeElement.value = `${this.parsedValue}`;
    const validValue = this.getCurrentValidValue(this.parsedValue);
    this.setValue(validValue);
  }
  getCurrentValidValue(value) {
    let val = value;
    if (val === "") {
      val = "";
    } else if (!this.isNotCompleteNumber(val)) {
      val = `${this.getValidValue(val)}`;
    } else {
      val = this.value;
    }
    return this.toNumber(val);
  }
  // '1.' '1x' 'xx' '' => are not complete numbers
  isNotCompleteNumber(num) {
    return isNaN(num) || num === "" || num === null || !!(num && num.toString().indexOf(".") === num.toString().length - 1);
  }
  getValidValue(value) {
    let val = parseFloat(value);
    if (isNaN(val)) {
      return value;
    }
    if (val < this.nzMin) {
      val = this.nzMin;
    }
    if (val > this.nzMax) {
      val = this.nzMax;
    }
    return val;
  }
  toNumber(num) {
    if (this.isNotCompleteNumber(num)) {
      return num;
    }
    const numStr = String(num);
    if (numStr.indexOf(".") >= 0 && isNotNil(this.nzPrecision)) {
      if (typeof this.nzPrecisionMode === "function") {
        return this.nzPrecisionMode(num, this.nzPrecision);
      } else if (this.nzPrecisionMode === "cut") {
        const numSplit = numStr.split(".");
        numSplit[1] = numSplit[1].slice(0, this.nzPrecision);
        return Number(numSplit.join("."));
      }
      return Number(Number(num).toFixed(this.nzPrecision));
    }
    return Number(num);
  }
  getRatio(e) {
    let ratio = 1;
    if (e.metaKey || e.ctrlKey) {
      ratio = 0.1;
    } else if (e.shiftKey) {
      ratio = 10;
    }
    return ratio;
  }
  down(e, ratio) {
    if (!this.isFocused) {
      this.focus();
    }
    this.step("down", e, ratio);
  }
  up(e, ratio) {
    if (!this.isFocused) {
      this.focus();
    }
    this.step("up", e, ratio);
  }
  getPrecision(value) {
    const valueString = value.toString();
    if (valueString.indexOf("e-") >= 0) {
      return parseInt(valueString.slice(valueString.indexOf("e-") + 2), 10);
    }
    let precision = 0;
    if (valueString.indexOf(".") >= 0) {
      precision = valueString.length - valueString.indexOf(".") - 1;
    }
    return precision;
  }
  // step={1.0} value={1.51}
  // press +
  // then value should be 2.51, rather than 2.5
  // if this.props.precision is undefined
  // https://github.com/react-component/input-number/issues/39
  getMaxPrecision(currentValue, ratio) {
    if (isNotNil(this.nzPrecision)) {
      return this.nzPrecision;
    }
    const ratioPrecision = this.getPrecision(ratio);
    const stepPrecision = this.getPrecision(this.nzStep);
    const currentValuePrecision = this.getPrecision(currentValue);
    if (!currentValue) {
      return ratioPrecision + stepPrecision;
    }
    return Math.max(currentValuePrecision, ratioPrecision + stepPrecision);
  }
  getPrecisionFactor(currentValue, ratio) {
    const precision = this.getMaxPrecision(currentValue, ratio);
    return Math.pow(10, precision);
  }
  upStep(val, rat) {
    const precisionFactor = this.getPrecisionFactor(val, rat);
    const precision = Math.abs(this.getMaxPrecision(val, rat));
    let result;
    if (typeof val === "number") {
      result = ((precisionFactor * val + precisionFactor * this.nzStep * rat) / precisionFactor).toFixed(precision);
    } else {
      result = this.nzMin === -Infinity ? this.nzStep : this.nzMin;
    }
    return this.toNumber(result);
  }
  downStep(val, rat) {
    const precisionFactor = this.getPrecisionFactor(val, rat);
    const precision = Math.abs(this.getMaxPrecision(val, rat));
    let result;
    if (typeof val === "number") {
      result = ((precisionFactor * val - precisionFactor * this.nzStep * rat) / precisionFactor).toFixed(precision);
    } else {
      result = this.nzMin === -Infinity ? -this.nzStep : this.nzMin;
    }
    return this.toNumber(result);
  }
  step(type, e, ratio = 1) {
    this.stop();
    e.preventDefault();
    if (this.nzDisabled) {
      return;
    }
    const value = this.getCurrentValidValue(this.parsedValue) || 0;
    let val = 0;
    if (type === "up") {
      val = this.upStep(value, ratio);
    } else if (type === "down") {
      val = this.downStep(value, ratio);
    }
    const outOfRange = val > this.nzMax || val < this.nzMin;
    if (val > this.nzMax) {
      val = this.nzMax;
    } else if (val < this.nzMin) {
      val = this.nzMin;
    }
    this.setValue(val);
    this.updateDisplayValue(val);
    this.isFocused = true;
    if (outOfRange) {
      return;
    }
    this.autoStepTimer = setTimeout(() => {
      this[type](e, ratio);
    }, 300);
  }
  stop() {
    if (this.autoStepTimer) {
      clearTimeout(this.autoStepTimer);
    }
  }
  setValue(value) {
    if (`${this.value}` !== `${value}`) {
      this.onChange(value);
    }
    this.value = value;
    this.parsedValue = value;
    this.disabledUp = this.disabledDown = false;
    if (value || value === 0) {
      const val = Number(value);
      if (val >= this.nzMax) {
        this.disabledUp = true;
      }
      if (val <= this.nzMin) {
        this.disabledDown = true;
      }
    }
  }
  updateDisplayValue(value) {
    const displayValue = isNotNil(this.nzFormatter(value)) ? this.nzFormatter(value) : "";
    this.displayValue = displayValue;
    this.inputElement.nativeElement.value = `${displayValue}`;
  }
  writeValue(value) {
    this.value = value;
    this.setValue(value);
    this.updateDisplayValue(value);
    this.cdr.markForCheck();
  }
  registerOnChange(fn) {
    this.onChange = fn;
  }
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  setDisabledState(disabled) {
    this.nzDisabled = this.isNzDisableFirstChange && this.nzDisabled || disabled;
    this.isNzDisableFirstChange = false;
    this.disabled$.next(this.nzDisabled);
    this.cdr.markForCheck();
  }
  focus() {
    this.focusMonitor.focusVia(this.inputElement, "keyboard");
  }
  blur() {
    this.inputElement.nativeElement.blur();
  }
  constructor(ngZone, elementRef, cdr, focusMonitor, renderer, directionality, destroy$, nzFormStatusService, nzFormNoStatusService) {
    this.ngZone = ngZone;
    this.elementRef = elementRef;
    this.cdr = cdr;
    this.focusMonitor = focusMonitor;
    this.renderer = renderer;
    this.directionality = directionality;
    this.destroy$ = destroy$;
    this.nzFormStatusService = nzFormStatusService;
    this.nzFormNoStatusService = nzFormNoStatusService;
    this.isNzDisableFirstChange = true;
    this.isFocused = false;
    this.disabled$ = new Subject();
    this.disabledUp = false;
    this.disabledDown = false;
    this.dir = "ltr";
    this.prefixCls = "ant-input-number";
    this.status = "";
    this.statusCls = {};
    this.hasFeedback = false;
    this.onChange = () => {
    };
    this.onTouched = () => {
    };
    this.nzBlur = new EventEmitter();
    this.nzFocus = new EventEmitter();
    this.nzSize = "default";
    this.nzMin = -Infinity;
    this.nzMax = Infinity;
    this.nzParser = (value) => value.trim().replace(/。/g, ".").replace(/[^\w\.-]+/g, "");
    this.nzPrecisionMode = "toFixed";
    this.nzPlaceHolder = "";
    this.nzStatus = "";
    this.nzStep = 1;
    this.nzInputMode = "decimal";
    this.nzId = null;
    this.nzDisabled = false;
    this.nzReadOnly = false;
    this.nzAutoFocus = false;
    this.nzBorderless = false;
    this.nzFormatter = (value) => value;
  }
  ngOnInit() {
    this.nzFormStatusService?.formStatusChanges.pipe(distinctUntilChanged((pre, cur) => {
      return pre.status === cur.status && pre.hasFeedback === cur.hasFeedback;
    }), takeUntil(this.destroy$)).subscribe(({
      status,
      hasFeedback
    }) => {
      this.setStatusStyles(status, hasFeedback);
    });
    this.focusMonitor.monitor(this.elementRef, true).pipe(takeUntil(this.destroy$)).subscribe((focusOrigin) => {
      if (!focusOrigin) {
        this.isFocused = false;
        this.updateDisplayValue(this.value);
        this.nzBlur.emit();
        Promise.resolve().then(() => this.onTouched());
      } else {
        this.isFocused = true;
        this.nzFocus.emit();
      }
    });
    this.dir = this.directionality.value;
    this.directionality.change.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
      this.dir = direction;
    });
    this.setupHandlersListeners();
    this.ngZone.runOutsideAngular(() => {
      fromEvent(this.inputElement.nativeElement, "keyup").pipe(takeUntil(this.destroy$)).subscribe(() => this.stop());
      fromEvent(this.inputElement.nativeElement, "keydown").pipe(takeUntil(this.destroy$)).subscribe((event) => {
        const {
          keyCode
        } = event;
        if (keyCode !== UP_ARROW && keyCode !== DOWN_ARROW && keyCode !== ENTER) {
          return;
        }
        this.ngZone.run(() => {
          if (keyCode === UP_ARROW) {
            const ratio = this.getRatio(event);
            this.up(event, ratio);
            this.stop();
          } else if (keyCode === DOWN_ARROW) {
            const ratio = this.getRatio(event);
            this.down(event, ratio);
            this.stop();
          } else {
            this.updateDisplayValue(this.value);
          }
          this.cdr.markForCheck();
        });
      });
    });
  }
  ngOnChanges(changes) {
    const {
      nzStatus,
      nzDisabled
    } = changes;
    if (changes.nzFormatter && !changes.nzFormatter.isFirstChange()) {
      const validValue = this.getCurrentValidValue(this.parsedValue);
      this.setValue(validValue);
      this.updateDisplayValue(validValue);
    }
    if (nzDisabled) {
      this.disabled$.next(this.nzDisabled);
    }
    if (nzStatus) {
      this.setStatusStyles(this.nzStatus, this.hasFeedback);
    }
  }
  ngAfterViewInit() {
    if (this.nzAutoFocus) {
      this.focus();
    }
  }
  ngOnDestroy() {
    this.focusMonitor.stopMonitoring(this.elementRef);
  }
  setupHandlersListeners() {
    this.ngZone.runOutsideAngular(() => {
      merge(fromEvent(this.upHandler.nativeElement, "mouseup"), fromEvent(this.upHandler.nativeElement, "mouseleave"), fromEvent(this.downHandler.nativeElement, "mouseup"), fromEvent(this.downHandler.nativeElement, "mouseleave")).pipe(takeUntil(this.destroy$)).subscribe(() => this.stop());
    });
  }
  setStatusStyles(status, hasFeedback) {
    this.status = status;
    this.hasFeedback = hasFeedback;
    this.cdr.markForCheck();
    this.statusCls = getStatusClassNames(this.prefixCls, status, hasFeedback);
    Object.keys(this.statusCls).forEach((status2) => {
      if (this.statusCls[status2]) {
        this.renderer.addClass(this.elementRef.nativeElement, status2);
      } else {
        this.renderer.removeClass(this.elementRef.nativeElement, status2);
      }
    });
  }
};
_NzInputNumberComponent.ɵfac = function NzInputNumberComponent_Factory(t) {
  return new (t || _NzInputNumberComponent)(ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(FocusMonitor), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(Directionality, 8), ɵɵdirectiveInject(NzDestroyService), ɵɵdirectiveInject(NzFormStatusService, 8), ɵɵdirectiveInject(NzFormNoStatusService, 8));
};
_NzInputNumberComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzInputNumberComponent,
  selectors: [["nz-input-number"]],
  viewQuery: function NzInputNumberComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c0, 7);
      ɵɵviewQuery(_c1, 7);
      ɵɵviewQuery(_c2, 7);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.upHandler = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.downHandler = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.inputElement = _t.first);
    }
  },
  hostAttrs: [1, "ant-input-number"],
  hostVars: 16,
  hostBindings: function NzInputNumberComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("ant-input-number-in-form-item", !!ctx.nzFormStatusService)("ant-input-number-focused", ctx.isFocused)("ant-input-number-lg", ctx.nzSize === "large")("ant-input-number-sm", ctx.nzSize === "small")("ant-input-number-disabled", ctx.nzDisabled)("ant-input-number-readonly", ctx.nzReadOnly)("ant-input-number-rtl", ctx.dir === "rtl")("ant-input-number-borderless", ctx.nzBorderless);
    }
  },
  inputs: {
    nzSize: "nzSize",
    nzMin: "nzMin",
    nzMax: "nzMax",
    nzParser: "nzParser",
    nzPrecision: "nzPrecision",
    nzPrecisionMode: "nzPrecisionMode",
    nzPlaceHolder: "nzPlaceHolder",
    nzStatus: "nzStatus",
    nzStep: "nzStep",
    nzInputMode: "nzInputMode",
    nzId: "nzId",
    nzDisabled: "nzDisabled",
    nzReadOnly: "nzReadOnly",
    nzAutoFocus: "nzAutoFocus",
    nzBorderless: "nzBorderless",
    nzFormatter: "nzFormatter"
  },
  outputs: {
    nzBlur: "nzBlur",
    nzFocus: "nzFocus"
  },
  exportAs: ["nzInputNumber"],
  standalone: true,
  features: [ɵɵProvidersFeature([{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => _NzInputNumberComponent),
    multi: true
  }, NzDestroyService]), ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
  decls: 11,
  vars: 15,
  consts: [["upHandler", ""], ["downHandler", ""], ["inputElement", ""], [1, "ant-input-number-handler-wrap"], ["unselectable", "unselectable", 1, "ant-input-number-handler", "ant-input-number-handler-up", 3, "mousedown"], ["nz-icon", "", "nzType", "up", 1, "ant-input-number-handler-up-inner"], ["unselectable", "unselectable", 1, "ant-input-number-handler", "ant-input-number-handler-down", 3, "mousedown"], ["nz-icon", "", "nzType", "down", 1, "ant-input-number-handler-down-inner"], [1, "ant-input-number-input-wrap"], ["autocomplete", "off", 1, "ant-input-number-input", 3, "ngModelChange", "disabled", "placeholder", "readOnly", "ngModel"], [1, "ant-input-number-suffix", 3, "status"]],
  template: function NzInputNumberComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = ɵɵgetCurrentView();
      ɵɵelementStart(0, "div", 3)(1, "span", 4, 0);
      ɵɵlistener("mousedown", function NzInputNumberComponent_Template_span_mousedown_1_listener($event) {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.up($event));
      });
      ɵɵelement(3, "span", 5);
      ɵɵelementEnd();
      ɵɵelementStart(4, "span", 6, 1);
      ɵɵlistener("mousedown", function NzInputNumberComponent_Template_span_mousedown_4_listener($event) {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.down($event));
      });
      ɵɵelement(6, "span", 7);
      ɵɵelementEnd()();
      ɵɵelementStart(7, "div", 8)(8, "input", 9, 2);
      ɵɵlistener("ngModelChange", function NzInputNumberComponent_Template_input_ngModelChange_8_listener($event) {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.onModelChange($event));
      });
      ɵɵelementEnd()();
      ɵɵtemplate(10, NzInputNumberComponent_Conditional_10_Template, 1, 1, "nz-form-item-feedback-icon", 10);
    }
    if (rf & 2) {
      ɵɵadvance();
      ɵɵclassProp("ant-input-number-handler-up-disabled", ctx.disabledUp);
      ɵɵadvance(3);
      ɵɵclassProp("ant-input-number-handler-down-disabled", ctx.disabledDown);
      ɵɵadvance(4);
      ɵɵproperty("disabled", ctx.nzDisabled)("placeholder", ctx.nzPlaceHolder)("readOnly", ctx.nzReadOnly)("ngModel", ctx.displayValue);
      ɵɵattribute("id", ctx.nzId)("autofocus", ctx.nzAutoFocus ? "autofocus" : null)("min", ctx.nzMin)("max", ctx.nzMax)("step", ctx.nzStep)("inputmode", ctx.nzInputMode);
      ɵɵadvance(2);
      ɵɵconditional(10, ctx.hasFeedback && !!ctx.status && !ctx.nzFormNoStatusService ? 10 : -1);
    }
  },
  dependencies: [NzIconModule, NzIconDirective, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, NzFormPatchModule, NzFormItemFeedbackIconComponent],
  encapsulation: 2,
  changeDetection: 0
});
var NzInputNumberComponent = _NzInputNumberComponent;
__decorate([InputBoolean()], NzInputNumberComponent.prototype, "nzDisabled", void 0);
__decorate([InputBoolean()], NzInputNumberComponent.prototype, "nzReadOnly", void 0);
__decorate([InputBoolean()], NzInputNumberComponent.prototype, "nzAutoFocus", void 0);
__decorate([InputBoolean()], NzInputNumberComponent.prototype, "nzBorderless", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzInputNumberComponent, [{
    type: Component,
    args: [{
      selector: "nz-input-number",
      exportAs: "nzInputNumber",
      template: `
    <div class="ant-input-number-handler-wrap">
      <span
        #upHandler
        unselectable="unselectable"
        class="ant-input-number-handler ant-input-number-handler-up"
        (mousedown)="up($event)"
        [class.ant-input-number-handler-up-disabled]="disabledUp"
      >
        <span nz-icon nzType="up" class="ant-input-number-handler-up-inner"></span>
      </span>
      <span
        #downHandler
        unselectable="unselectable"
        class="ant-input-number-handler ant-input-number-handler-down"
        (mousedown)="down($event)"
        [class.ant-input-number-handler-down-disabled]="disabledDown"
      >
        <span nz-icon nzType="down" class="ant-input-number-handler-down-inner"></span>
      </span>
    </div>
    <div class="ant-input-number-input-wrap">
      <input
        #inputElement
        autocomplete="off"
        class="ant-input-number-input"
        [attr.id]="nzId"
        [attr.autofocus]="nzAutoFocus ? 'autofocus' : null"
        [disabled]="nzDisabled"
        [attr.min]="nzMin"
        [attr.max]="nzMax"
        [placeholder]="nzPlaceHolder"
        [attr.step]="nzStep"
        [readOnly]="nzReadOnly"
        [attr.inputmode]="nzInputMode"
        [ngModel]="displayValue"
        (ngModelChange)="onModelChange($event)"
      />
    </div>
    @if (hasFeedback && !!status && !nzFormNoStatusService) {
      <nz-form-item-feedback-icon class="ant-input-number-suffix" [status]="status" />
    }
  `,
      providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => NzInputNumberComponent),
        multi: true
      }, NzDestroyService],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      host: {
        class: "ant-input-number",
        "[class.ant-input-number-in-form-item]": "!!nzFormStatusService",
        "[class.ant-input-number-focused]": "isFocused",
        "[class.ant-input-number-lg]": `nzSize === 'large'`,
        "[class.ant-input-number-sm]": `nzSize === 'small'`,
        "[class.ant-input-number-disabled]": "nzDisabled",
        "[class.ant-input-number-readonly]": "nzReadOnly",
        "[class.ant-input-number-rtl]": `dir === 'rtl'`,
        "[class.ant-input-number-borderless]": `nzBorderless`
      },
      imports: [NzIconModule, FormsModule, NzFormPatchModule],
      standalone: true
    }]
  }], () => [{
    type: NgZone
  }, {
    type: ElementRef
  }, {
    type: ChangeDetectorRef
  }, {
    type: FocusMonitor
  }, {
    type: Renderer2
  }, {
    type: Directionality,
    decorators: [{
      type: Optional
    }]
  }, {
    type: NzDestroyService
  }, {
    type: NzFormStatusService,
    decorators: [{
      type: Optional
    }]
  }, {
    type: NzFormNoStatusService,
    decorators: [{
      type: Optional
    }]
  }], {
    nzBlur: [{
      type: Output
    }],
    nzFocus: [{
      type: Output
    }],
    upHandler: [{
      type: ViewChild,
      args: ["upHandler", {
        static: true
      }]
    }],
    downHandler: [{
      type: ViewChild,
      args: ["downHandler", {
        static: true
      }]
    }],
    inputElement: [{
      type: ViewChild,
      args: ["inputElement", {
        static: true
      }]
    }],
    nzSize: [{
      type: Input
    }],
    nzMin: [{
      type: Input
    }],
    nzMax: [{
      type: Input
    }],
    nzParser: [{
      type: Input
    }],
    nzPrecision: [{
      type: Input
    }],
    nzPrecisionMode: [{
      type: Input
    }],
    nzPlaceHolder: [{
      type: Input
    }],
    nzStatus: [{
      type: Input
    }],
    nzStep: [{
      type: Input
    }],
    nzInputMode: [{
      type: Input
    }],
    nzId: [{
      type: Input
    }],
    nzDisabled: [{
      type: Input
    }],
    nzReadOnly: [{
      type: Input
    }],
    nzAutoFocus: [{
      type: Input
    }],
    nzBorderless: [{
      type: Input
    }],
    nzFormatter: [{
      type: Input
    }]
  });
})();
var _NzInputNumberGroupSlotComponent = class _NzInputNumberGroupSlotComponent {
  constructor() {
    this.icon = null;
    this.type = null;
    this.template = null;
  }
};
_NzInputNumberGroupSlotComponent.ɵfac = function NzInputNumberGroupSlotComponent_Factory(t) {
  return new (t || _NzInputNumberGroupSlotComponent)();
};
_NzInputNumberGroupSlotComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzInputNumberGroupSlotComponent,
  selectors: [["", "nz-input-number-group-slot", ""]],
  hostVars: 6,
  hostBindings: function NzInputNumberGroupSlotComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("ant-input-number-group-addon", ctx.type === "addon")("ant-input-number-prefix", ctx.type === "prefix")("ant-input-number-suffix", ctx.type === "suffix");
    }
  },
  inputs: {
    icon: "icon",
    type: "type",
    template: "template"
  },
  standalone: true,
  features: [ɵɵStandaloneFeature],
  attrs: _c3,
  ngContentSelectors: _c4,
  decls: 3,
  vars: 2,
  consts: [["nz-icon", "", 3, "nzType"], [4, "nzStringTemplateOutlet"]],
  template: function NzInputNumberGroupSlotComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵtemplate(0, NzInputNumberGroupSlotComponent_Conditional_0_Template, 1, 1, "span", 0)(1, NzInputNumberGroupSlotComponent_ng_container_1_Template, 2, 1, "ng-container", 1);
      ɵɵprojection(2);
    }
    if (rf & 2) {
      ɵɵconditional(0, ctx.icon ? 0 : -1);
      ɵɵadvance();
      ɵɵproperty("nzStringTemplateOutlet", ctx.template);
    }
  },
  dependencies: [NzIconModule, NzIconDirective, NzOutletModule, NzStringTemplateOutletDirective],
  encapsulation: 2,
  changeDetection: 0
});
var NzInputNumberGroupSlotComponent = _NzInputNumberGroupSlotComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzInputNumberGroupSlotComponent, [{
    type: Component,
    args: [{
      selector: "[nz-input-number-group-slot]",
      preserveWhitespaces: false,
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `
    @if (icon) {
      <span nz-icon [nzType]="icon"></span>
    }
    <ng-container *nzStringTemplateOutlet="template">{{ template }}</ng-container>
    <ng-content></ng-content>
  `,
      host: {
        "[class.ant-input-number-group-addon]": `type === 'addon'`,
        "[class.ant-input-number-prefix]": `type === 'prefix'`,
        "[class.ant-input-number-suffix]": `type === 'suffix'`
      },
      imports: [NzIconModule, NzOutletModule],
      standalone: true
    }]
  }], null, {
    icon: [{
      type: Input
    }],
    type: [{
      type: Input
    }],
    template: [{
      type: Input
    }]
  });
})();
var _NzInputNumberGroupWhitSuffixOrPrefixDirective = class _NzInputNumberGroupWhitSuffixOrPrefixDirective {
  constructor(elementRef) {
    this.elementRef = elementRef;
  }
};
_NzInputNumberGroupWhitSuffixOrPrefixDirective.ɵfac = function NzInputNumberGroupWhitSuffixOrPrefixDirective_Factory(t) {
  return new (t || _NzInputNumberGroupWhitSuffixOrPrefixDirective)(ɵɵdirectiveInject(ElementRef));
};
_NzInputNumberGroupWhitSuffixOrPrefixDirective.ɵdir = ɵɵdefineDirective({
  type: _NzInputNumberGroupWhitSuffixOrPrefixDirective,
  selectors: [["nz-input-number-group", "nzSuffix", ""], ["nz-input-number-group", "nzPrefix", ""]],
  standalone: true
});
var NzInputNumberGroupWhitSuffixOrPrefixDirective = _NzInputNumberGroupWhitSuffixOrPrefixDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzInputNumberGroupWhitSuffixOrPrefixDirective, [{
    type: Directive,
    args: [{
      selector: `nz-input-number-group[nzSuffix], nz-input-number-group[nzPrefix]`,
      standalone: true
    }]
  }], () => [{
    type: ElementRef
  }], null);
})();
var _NzInputNumberGroupComponent = class _NzInputNumberGroupComponent {
  constructor(focusMonitor, elementRef, renderer, cdr, directionality, nzFormStatusService, nzFormNoStatusService) {
    this.focusMonitor = focusMonitor;
    this.elementRef = elementRef;
    this.renderer = renderer;
    this.cdr = cdr;
    this.directionality = directionality;
    this.nzFormStatusService = nzFormStatusService;
    this.nzFormNoStatusService = nzFormNoStatusService;
    this.nzAddOnBeforeIcon = null;
    this.nzAddOnAfterIcon = null;
    this.nzPrefixIcon = null;
    this.nzSuffixIcon = null;
    this.nzStatus = "";
    this.nzSize = "default";
    this.nzCompact = false;
    this.isLarge = false;
    this.isSmall = false;
    this.isAffix = false;
    this.isAddOn = false;
    this.isFeedback = false;
    this.focused = false;
    this.disabled = false;
    this.dir = "ltr";
    this.prefixCls = "ant-input-number";
    this.affixStatusCls = {};
    this.groupStatusCls = {};
    this.affixInGroupStatusCls = {};
    this.status = "";
    this.hasFeedback = false;
    this.destroy$ = new Subject();
  }
  updateChildrenInputSize() {
    if (this.listOfNzInputNumberComponent) {
      this.listOfNzInputNumberComponent.forEach((item) => item.nzSize = this.nzSize);
    }
  }
  ngOnInit() {
    this.nzFormStatusService?.formStatusChanges.pipe(distinctUntilChanged((pre, cur) => {
      return pre.status === cur.status && pre.hasFeedback === cur.hasFeedback;
    }), takeUntil(this.destroy$)).subscribe(({
      status,
      hasFeedback
    }) => {
      this.setStatusStyles(status, hasFeedback);
    });
    this.focusMonitor.monitor(this.elementRef, true).pipe(takeUntil(this.destroy$)).subscribe((focusOrigin) => {
      this.focused = !!focusOrigin;
      this.cdr.markForCheck();
    });
    this.dir = this.directionality.value;
    this.directionality.change?.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
      this.dir = direction;
    });
  }
  ngAfterContentInit() {
    this.updateChildrenInputSize();
    const listOfInputChange$ = this.listOfNzInputNumberComponent.changes.pipe(startWith(this.listOfNzInputNumberComponent));
    listOfInputChange$.pipe(switchMap((list) => merge(...[listOfInputChange$, ...list.map((input) => input.disabled$)])), mergeMap(() => listOfInputChange$), map((list) => list.some((input) => input.nzDisabled)), takeUntil(this.destroy$)).subscribe((disabled) => {
      this.disabled = disabled;
      this.cdr.markForCheck();
    });
  }
  ngOnChanges(changes) {
    const {
      nzSize,
      nzSuffix,
      nzPrefix,
      nzPrefixIcon,
      nzSuffixIcon,
      nzAddOnAfter,
      nzAddOnBefore,
      nzAddOnAfterIcon,
      nzAddOnBeforeIcon,
      nzStatus
    } = changes;
    if (nzSize) {
      this.updateChildrenInputSize();
      this.isLarge = this.nzSize === "large";
      this.isSmall = this.nzSize === "small";
    }
    if (nzSuffix || nzPrefix || nzPrefixIcon || nzSuffixIcon) {
      this.isAffix = !!(this.nzSuffix || this.nzPrefix || this.nzPrefixIcon || this.nzSuffixIcon);
    }
    if (nzAddOnAfter || nzAddOnBefore || nzAddOnAfterIcon || nzAddOnBeforeIcon) {
      this.isAddOn = !!(this.nzAddOnAfter || this.nzAddOnBefore || this.nzAddOnAfterIcon || this.nzAddOnBeforeIcon);
      this.nzFormNoStatusService?.noFormStatus?.next(this.isAddOn);
    }
    if (nzStatus) {
      this.setStatusStyles(this.nzStatus, this.hasFeedback);
    }
  }
  ngOnDestroy() {
    this.focusMonitor.stopMonitoring(this.elementRef);
    this.destroy$.next();
    this.destroy$.complete();
  }
  setStatusStyles(status, hasFeedback) {
    this.status = status;
    this.hasFeedback = hasFeedback;
    this.isFeedback = !!status && hasFeedback;
    const baseAffix = !!(this.nzSuffix || this.nzPrefix || this.nzPrefixIcon || this.nzSuffixIcon);
    this.isAffix = baseAffix || !this.isAddOn && hasFeedback;
    this.affixInGroupStatusCls = this.isAffix || this.isFeedback ? this.affixStatusCls = getStatusClassNames(`${this.prefixCls}-affix-wrapper`, status, hasFeedback) : {};
    this.cdr.markForCheck();
    this.affixStatusCls = getStatusClassNames(`${this.prefixCls}-affix-wrapper`, this.isAddOn ? "" : status, this.isAddOn ? false : hasFeedback);
    this.groupStatusCls = getStatusClassNames(`${this.prefixCls}-group-wrapper`, this.isAddOn ? status : "", this.isAddOn ? hasFeedback : false);
    const statusCls = __spreadValues(__spreadValues({}, this.affixStatusCls), this.groupStatusCls);
    Object.keys(statusCls).forEach((status2) => {
      if (statusCls[status2]) {
        this.renderer.addClass(this.elementRef.nativeElement, status2);
      } else {
        this.renderer.removeClass(this.elementRef.nativeElement, status2);
      }
    });
  }
};
_NzInputNumberGroupComponent.ɵfac = function NzInputNumberGroupComponent_Factory(t) {
  return new (t || _NzInputNumberGroupComponent)(ɵɵdirectiveInject(FocusMonitor), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(Directionality, 8), ɵɵdirectiveInject(NzFormStatusService, 8), ɵɵdirectiveInject(NzFormNoStatusService, 8));
};
_NzInputNumberGroupComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzInputNumberGroupComponent,
  selectors: [["nz-input-number-group"]],
  contentQueries: function NzInputNumberGroupComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, NzInputNumberComponent, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.listOfNzInputNumberComponent = _t);
    }
  },
  hostVars: 24,
  hostBindings: function NzInputNumberGroupComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("ant-input-number-group", ctx.nzCompact)("ant-input-number-group-compact", ctx.nzCompact)("ant-input-number-group-wrapper", ctx.isAddOn)("ant-input-number-group-wrapper-rtl", ctx.isAddOn && ctx.dir === "rtl")("ant-input-number-group-wrapper-lg", ctx.isAddOn && ctx.isLarge)("ant-input-number-group-wrapper-sm", ctx.isAddOn && ctx.isSmall)("ant-input-number-affix-wrapper", !ctx.isAddOn && ctx.isAffix)("ant-input-number-affix-wrapper-rtl", !ctx.isAddOn && ctx.dir === "rtl")("ant-input-number-affix-wrapper-focused", !ctx.isAddOn && ctx.isAffix && ctx.focused)("ant-input-number-affix-wrapper-disabled", !ctx.isAddOn && ctx.isAffix && ctx.disabled)("ant-input-number-affix-wrapper-lg", !ctx.isAddOn && ctx.isAffix && ctx.isLarge)("ant-input-number-affix-wrapper-sm", !ctx.isAddOn && ctx.isAffix && ctx.isSmall);
    }
  },
  inputs: {
    nzAddOnBeforeIcon: "nzAddOnBeforeIcon",
    nzAddOnAfterIcon: "nzAddOnAfterIcon",
    nzPrefixIcon: "nzPrefixIcon",
    nzSuffixIcon: "nzSuffixIcon",
    nzAddOnBefore: "nzAddOnBefore",
    nzAddOnAfter: "nzAddOnAfter",
    nzPrefix: "nzPrefix",
    nzStatus: "nzStatus",
    nzSuffix: "nzSuffix",
    nzSize: "nzSize",
    nzCompact: "nzCompact"
  },
  exportAs: ["nzInputNumberGroup"],
  standalone: true,
  features: [ɵɵProvidersFeature([NzFormNoStatusService]), ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
  ngContentSelectors: _c4,
  decls: 6,
  vars: 1,
  consts: [["affixTemplate", ""], ["contentTemplate", ""], [1, "ant-input-number-wrapper", "ant-input-number-group"], ["nz-input-number-group-slot", "", "type", "addon", 3, "icon", "template"], [1, "ant-input-number-affix-wrapper", 3, "ant-input-number-affix-wrapper-disabled", "ant-input-number-affix-wrapper-sm", "ant-input-number-affix-wrapper-lg", "ant-input-number-affix-wrapper-focused", "ngClass"], [1, "ant-input-number-affix-wrapper", 3, "ngClass"], [3, "ngTemplateOutlet"], ["nz-input-number-group-slot", "", "type", "prefix", 3, "icon", "template"], ["nz-input-number-group-slot", "", "type", "suffix", 3, "icon", "template"], [3, "status"], ["nz-input-number-group-slot", "", "type", "suffix"]],
  template: function NzInputNumberGroupComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵtemplate(0, NzInputNumberGroupComponent_Conditional_0_Template, 5, 3, "span", 2)(1, NzInputNumberGroupComponent_Conditional_1_Template, 2, 1)(2, NzInputNumberGroupComponent_ng_template_2_Template, 3, 3, "ng-template", null, 0, ɵɵtemplateRefExtractor)(4, NzInputNumberGroupComponent_ng_template_4_Template, 2, 1, "ng-template", null, 1, ɵɵtemplateRefExtractor);
    }
    if (rf & 2) {
      ɵɵconditional(0, ctx.isAddOn ? 0 : 1);
    }
  },
  dependencies: [NzInputNumberGroupSlotComponent, NgClass, NgTemplateOutlet, NzFormPatchModule, NzFormItemFeedbackIconComponent],
  encapsulation: 2,
  changeDetection: 0
});
var NzInputNumberGroupComponent = _NzInputNumberGroupComponent;
__decorate([InputBoolean()], NzInputNumberGroupComponent.prototype, "nzCompact", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzInputNumberGroupComponent, [{
    type: Component,
    args: [{
      selector: "nz-input-number-group",
      exportAs: "nzInputNumberGroup",
      preserveWhitespaces: false,
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [NzFormNoStatusService],
      template: `
    @if (isAddOn) {
      <span class="ant-input-number-wrapper ant-input-number-group">
        @if (nzAddOnBefore || nzAddOnBeforeIcon) {
          <div nz-input-number-group-slot type="addon" [icon]="nzAddOnBeforeIcon" [template]="nzAddOnBefore"></div>
        }

        @if (isAffix || hasFeedback) {
          <div
            class="ant-input-number-affix-wrapper"
            [class.ant-input-number-affix-wrapper-disabled]="disabled"
            [class.ant-input-number-affix-wrapper-sm]="isSmall"
            [class.ant-input-number-affix-wrapper-lg]="isLarge"
            [class.ant-input-number-affix-wrapper-focused]="focused"
            [ngClass]="affixInGroupStatusCls"
          >
            <ng-template [ngTemplateOutlet]="affixTemplate"></ng-template>
          </div>
        } @else {
          <ng-template [ngTemplateOutlet]="contentTemplate" />
        }

        @if (nzAddOnAfter || nzAddOnAfterIcon) {
          <span nz-input-number-group-slot type="addon" [icon]="nzAddOnAfterIcon" [template]="nzAddOnAfter"></span>
        }
      </span>
    } @else {
      @if (isAffix) {
        <ng-template [ngTemplateOutlet]="affixTemplate" />
      } @else {
        <ng-template [ngTemplateOutlet]="contentTemplate" />
      }
    }

    <!-- Affix Template -->
    <ng-template #affixTemplate>
      @if (nzPrefix || nzPrefixIcon) {
        <span nz-input-number-group-slot type="prefix" [icon]="nzPrefixIcon" [template]="nzPrefix"></span>
      }
      <ng-template [ngTemplateOutlet]="contentTemplate" />
      @if (nzSuffix || nzSuffixIcon || isFeedback) {
        <span nz-input-number-group-slot type="suffix" [icon]="nzSuffixIcon" [template]="nzSuffix">
          @if (isFeedback) {
            <nz-form-item-feedback-icon [status]="status" />
          }
        </span>
      }
    </ng-template>

    <!-- Content Template -->
    <ng-template #contentTemplate>
      <ng-content />
      @if (!isAddOn && !isAffix && isFeedback) {
        <span nz-input-number-group-slot type="suffix">
          @if (isFeedback) {
            <nz-form-item-feedback-icon [status]="status" />
          }
        </span>
      }
    </ng-template>
  `,
      host: {
        "[class.ant-input-number-group]": "nzCompact",
        "[class.ant-input-number-group-compact]": "nzCompact",
        "[class.ant-input-number-group-wrapper]": `isAddOn`,
        "[class.ant-input-number-group-wrapper-rtl]": `isAddOn && dir === 'rtl'`,
        "[class.ant-input-number-group-wrapper-lg]": `isAddOn && isLarge`,
        "[class.ant-input-number-group-wrapper-sm]": `isAddOn && isSmall`,
        "[class.ant-input-number-affix-wrapper]": `!isAddOn && isAffix`,
        "[class.ant-input-number-affix-wrapper-rtl]": `!isAddOn && dir === 'rtl'`,
        "[class.ant-input-number-affix-wrapper-focused]": `!isAddOn && isAffix && focused`,
        "[class.ant-input-number-affix-wrapper-disabled]": `!isAddOn && isAffix && disabled`,
        "[class.ant-input-number-affix-wrapper-lg]": `!isAddOn && isAffix && isLarge`,
        "[class.ant-input-number-affix-wrapper-sm]": `!isAddOn && isAffix && isSmall`
      },
      imports: [NzInputNumberGroupSlotComponent, NgClass, NgTemplateOutlet, NzFormPatchModule],
      standalone: true
    }]
  }], () => [{
    type: FocusMonitor
  }, {
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: ChangeDetectorRef
  }, {
    type: Directionality,
    decorators: [{
      type: Optional
    }]
  }, {
    type: NzFormStatusService,
    decorators: [{
      type: Optional
    }]
  }, {
    type: NzFormNoStatusService,
    decorators: [{
      type: Optional
    }]
  }], {
    listOfNzInputNumberComponent: [{
      type: ContentChildren,
      args: [NzInputNumberComponent, {
        descendants: true
      }]
    }],
    nzAddOnBeforeIcon: [{
      type: Input
    }],
    nzAddOnAfterIcon: [{
      type: Input
    }],
    nzPrefixIcon: [{
      type: Input
    }],
    nzSuffixIcon: [{
      type: Input
    }],
    nzAddOnBefore: [{
      type: Input
    }],
    nzAddOnAfter: [{
      type: Input
    }],
    nzPrefix: [{
      type: Input
    }],
    nzStatus: [{
      type: Input
    }],
    nzSuffix: [{
      type: Input
    }],
    nzSize: [{
      type: Input
    }],
    nzCompact: [{
      type: Input
    }]
  });
})();
var _NzInputNumberModule = class _NzInputNumberModule {
};
_NzInputNumberModule.ɵfac = function NzInputNumberModule_Factory(t) {
  return new (t || _NzInputNumberModule)();
};
_NzInputNumberModule.ɵmod = ɵɵdefineNgModule({
  type: _NzInputNumberModule,
  imports: [NzInputNumberComponent, NzInputNumberGroupComponent, NzInputNumberGroupWhitSuffixOrPrefixDirective, NzInputNumberGroupSlotComponent],
  exports: [NzInputNumberComponent, NzInputNumberGroupComponent, NzInputNumberGroupWhitSuffixOrPrefixDirective]
});
_NzInputNumberModule.ɵinj = ɵɵdefineInjector({
  imports: [NzInputNumberComponent, NzInputNumberGroupComponent, NzInputNumberGroupSlotComponent]
});
var NzInputNumberModule = _NzInputNumberModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzInputNumberModule, [{
    type: NgModule,
    args: [{
      imports: [NzInputNumberComponent, NzInputNumberGroupComponent, NzInputNumberGroupWhitSuffixOrPrefixDirective, NzInputNumberGroupSlotComponent],
      exports: [NzInputNumberComponent, NzInputNumberGroupComponent, NzInputNumberGroupWhitSuffixOrPrefixDirective]
    }]
  }], null, null);
})();
export {
  NzInputNumberComponent,
  NzInputNumberGroupComponent,
  NzInputNumberGroupSlotComponent,
  NzInputNumberGroupWhitSuffixOrPrefixDirective,
  NzInputNumberModule
};
//# sourceMappingURL=ng-zorro-antd_input-number.js.map
