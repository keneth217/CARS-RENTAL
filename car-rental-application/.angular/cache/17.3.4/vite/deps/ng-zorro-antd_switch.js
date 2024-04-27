import {
  FocusMonitor
} from "./chunk-VQTGEUV4.js";
import {
  NzOutletModule,
  NzStringTemplateOutletDirective
} from "./chunk-3QNY2SH4.js";
import {
  ENTER,
  LEFT_ARROW,
  RIGHT_ARROW,
  SPACE
} from "./chunk-T4JA2NQD.js";
import "./chunk-ICUNVL6H.js";
import {
  NG_VALUE_ACCESSOR
} from "./chunk-QS47QVHG.js";
import {
  NzWaveDirective,
  NzWaveModule
} from "./chunk-HMAJJIJ3.js";
import {
  Directionality
} from "./chunk-7DIIEDL6.js";
import {
  NzIconDirective,
  NzIconModule
} from "./chunk-X43JKLZC.js";
import {
  NzConfigService,
  WithConfig
} from "./chunk-J7ZMYXK5.js";
import {
  InputBoolean
} from "./chunk-PGMGKWAT.js";
import "./chunk-2FVUDUB4.js";
import "./chunk-WE3FPTZW.js";
import "./chunk-SQLFNYNC.js";
import "./chunk-B4HWDAU2.js";
import "./chunk-UPSRJ2V7.js";
import "./chunk-WCYJYOZL.js";
import {
  NgIf
} from "./chunk-KKPSRQXY.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  NgModule,
  NgZone,
  Optional,
  Subject,
  ViewChild,
  ViewEncapsulation$1,
  __decorate,
  forwardRef,
  fromEvent,
  setClassMetadata,
  takeUntil,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵviewQuery
} from "./chunk-QIBLZIJK.js";
import "./chunk-J4B6MK7R.js";

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-switch.mjs
var _c0 = ["switchElement"];
function NzSwitchComponent_span_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 8);
  }
}
function NzSwitchComponent_ng_container_5_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r0.nzCheckedChildren);
  }
}
function NzSwitchComponent_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, NzSwitchComponent_ng_container_5_ng_container_1_Template, 2, 1, "ng-container", 9);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("nzStringTemplateOutlet", ctx_r0.nzCheckedChildren);
  }
}
function NzSwitchComponent_ng_template_6_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r0.nzUnCheckedChildren);
  }
}
function NzSwitchComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NzSwitchComponent_ng_template_6_ng_container_0_Template, 2, 1, "ng-container", 9);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("nzStringTemplateOutlet", ctx_r0.nzUnCheckedChildren);
  }
}
var NZ_CONFIG_MODULE_NAME = "switch";
var _NzSwitchComponent = class _NzSwitchComponent {
  updateValue(value) {
    if (this.isChecked !== value) {
      this.isChecked = value;
      this.onChange(this.isChecked);
    }
  }
  focus() {
    this.focusMonitor.focusVia(this.switchElement.nativeElement, "keyboard");
  }
  blur() {
    this.switchElement.nativeElement.blur();
  }
  constructor(nzConfigService, host, ngZone, cdr, focusMonitor, directionality) {
    this.nzConfigService = nzConfigService;
    this.host = host;
    this.ngZone = ngZone;
    this.cdr = cdr;
    this.focusMonitor = focusMonitor;
    this.directionality = directionality;
    this._nzModuleName = NZ_CONFIG_MODULE_NAME;
    this.isChecked = false;
    this.onChange = () => {
    };
    this.onTouched = () => {
    };
    this.nzLoading = false;
    this.nzDisabled = false;
    this.nzControl = false;
    this.nzCheckedChildren = null;
    this.nzUnCheckedChildren = null;
    this.nzSize = "default";
    this.nzId = null;
    this.dir = "ltr";
    this.destroy$ = new Subject();
    this.isNzDisableFirstChange = true;
  }
  ngOnInit() {
    this.directionality.change.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
      this.dir = direction;
      this.cdr.detectChanges();
    });
    this.dir = this.directionality.value;
    this.ngZone.runOutsideAngular(() => {
      fromEvent(this.host.nativeElement, "click").pipe(takeUntil(this.destroy$)).subscribe((event) => {
        event.preventDefault();
        if (this.nzControl || this.nzDisabled || this.nzLoading) {
          return;
        }
        this.ngZone.run(() => {
          this.updateValue(!this.isChecked);
          this.cdr.markForCheck();
        });
      });
      fromEvent(this.switchElement.nativeElement, "keydown").pipe(takeUntil(this.destroy$)).subscribe((event) => {
        if (this.nzControl || this.nzDisabled || this.nzLoading) {
          return;
        }
        const {
          keyCode
        } = event;
        if (keyCode !== LEFT_ARROW && keyCode !== RIGHT_ARROW && keyCode !== SPACE && keyCode !== ENTER) {
          return;
        }
        event.preventDefault();
        this.ngZone.run(() => {
          if (keyCode === LEFT_ARROW) {
            this.updateValue(false);
          } else if (keyCode === RIGHT_ARROW) {
            this.updateValue(true);
          } else if (keyCode === SPACE || keyCode === ENTER) {
            this.updateValue(!this.isChecked);
          }
          this.cdr.markForCheck();
        });
      });
    });
  }
  ngAfterViewInit() {
    this.focusMonitor.monitor(this.switchElement.nativeElement, true).pipe(takeUntil(this.destroy$)).subscribe((focusOrigin) => {
      if (!focusOrigin) {
        Promise.resolve().then(() => this.onTouched());
      }
    });
  }
  ngOnDestroy() {
    this.focusMonitor.stopMonitoring(this.switchElement.nativeElement);
    this.destroy$.next();
    this.destroy$.complete();
  }
  writeValue(value) {
    this.isChecked = value;
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
    this.cdr.markForCheck();
  }
};
_NzSwitchComponent.ɵfac = function NzSwitchComponent_Factory(t) {
  return new (t || _NzSwitchComponent)(ɵɵdirectiveInject(NzConfigService), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(FocusMonitor), ɵɵdirectiveInject(Directionality, 8));
};
_NzSwitchComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzSwitchComponent,
  selectors: [["nz-switch"]],
  viewQuery: function NzSwitchComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c0, 7);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.switchElement = _t.first);
    }
  },
  inputs: {
    nzLoading: "nzLoading",
    nzDisabled: "nzDisabled",
    nzControl: "nzControl",
    nzCheckedChildren: "nzCheckedChildren",
    nzUnCheckedChildren: "nzUnCheckedChildren",
    nzSize: "nzSize",
    nzId: "nzId"
  },
  exportAs: ["nzSwitch"],
  standalone: true,
  features: [ɵɵProvidersFeature([{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => _NzSwitchComponent),
    multi: true
  }]), ɵɵStandaloneFeature],
  decls: 9,
  vars: 16,
  consts: [["switchElement", ""], ["uncheckTemplate", ""], ["nz-wave", "", "type", "button", 1, "ant-switch", 3, "disabled", "nzWaveExtraNode"], [1, "ant-switch-handle"], ["nz-icon", "", "nzType", "loading", "class", "ant-switch-loading-icon", 4, "ngIf"], [1, "ant-switch-inner"], [4, "ngIf", "ngIfElse"], [1, "ant-click-animating-node"], ["nz-icon", "", "nzType", "loading", 1, "ant-switch-loading-icon"], [4, "nzStringTemplateOutlet"]],
  template: function NzSwitchComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "button", 2, 0)(2, "span", 3);
      ɵɵtemplate(3, NzSwitchComponent_span_3_Template, 1, 0, "span", 4);
      ɵɵelementEnd();
      ɵɵelementStart(4, "span", 5);
      ɵɵtemplate(5, NzSwitchComponent_ng_container_5_Template, 2, 1, "ng-container", 6)(6, NzSwitchComponent_ng_template_6_Template, 1, 1, "ng-template", null, 1, ɵɵtemplateRefExtractor);
      ɵɵelementEnd();
      ɵɵelement(8, "div", 7);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      const uncheckTemplate_r2 = ɵɵreference(7);
      ɵɵclassProp("ant-switch-checked", ctx.isChecked)("ant-switch-loading", ctx.nzLoading)("ant-switch-disabled", ctx.nzDisabled)("ant-switch-small", ctx.nzSize === "small")("ant-switch-rtl", ctx.dir === "rtl");
      ɵɵproperty("disabled", ctx.nzDisabled)("nzWaveExtraNode", true);
      ɵɵattribute("id", ctx.nzId);
      ɵɵadvance(3);
      ɵɵproperty("ngIf", ctx.nzLoading);
      ɵɵadvance(2);
      ɵɵproperty("ngIf", ctx.isChecked)("ngIfElse", uncheckTemplate_r2);
    }
  },
  dependencies: [NzWaveModule, NzWaveDirective, NzIconModule, NzIconDirective, NgIf, NzOutletModule, NzStringTemplateOutletDirective],
  encapsulation: 2,
  changeDetection: 0
});
var NzSwitchComponent = _NzSwitchComponent;
__decorate([InputBoolean()], NzSwitchComponent.prototype, "nzLoading", void 0);
__decorate([InputBoolean()], NzSwitchComponent.prototype, "nzDisabled", void 0);
__decorate([InputBoolean()], NzSwitchComponent.prototype, "nzControl", void 0);
__decorate([WithConfig()], NzSwitchComponent.prototype, "nzSize", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzSwitchComponent, [{
    type: Component,
    args: [{
      selector: "nz-switch",
      exportAs: "nzSwitch",
      preserveWhitespaces: false,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => NzSwitchComponent),
        multi: true
      }],
      template: `
    <button
      nz-wave
      type="button"
      class="ant-switch"
      #switchElement
      [attr.id]="nzId"
      [disabled]="nzDisabled"
      [class.ant-switch-checked]="isChecked"
      [class.ant-switch-loading]="nzLoading"
      [class.ant-switch-disabled]="nzDisabled"
      [class.ant-switch-small]="nzSize === 'small'"
      [class.ant-switch-rtl]="dir === 'rtl'"
      [nzWaveExtraNode]="true"
    >
      <span class="ant-switch-handle">
        <span *ngIf="nzLoading" nz-icon nzType="loading" class="ant-switch-loading-icon"></span>
      </span>
      <span class="ant-switch-inner">
        <ng-container *ngIf="isChecked; else uncheckTemplate">
          <ng-container *nzStringTemplateOutlet="nzCheckedChildren">{{ nzCheckedChildren }}</ng-container>
        </ng-container>
        <ng-template #uncheckTemplate>
          <ng-container *nzStringTemplateOutlet="nzUnCheckedChildren">{{ nzUnCheckedChildren }}</ng-container>
        </ng-template>
      </span>
      <div class="ant-click-animating-node"></div>
    </button>
  `,
      imports: [NzWaveModule, NzIconModule, NgIf, NzOutletModule],
      standalone: true
    }]
  }], () => [{
    type: NzConfigService
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }, {
    type: ChangeDetectorRef
  }, {
    type: FocusMonitor
  }, {
    type: Directionality,
    decorators: [{
      type: Optional
    }]
  }], {
    switchElement: [{
      type: ViewChild,
      args: ["switchElement", {
        static: true
      }]
    }],
    nzLoading: [{
      type: Input
    }],
    nzDisabled: [{
      type: Input
    }],
    nzControl: [{
      type: Input
    }],
    nzCheckedChildren: [{
      type: Input
    }],
    nzUnCheckedChildren: [{
      type: Input
    }],
    nzSize: [{
      type: Input
    }],
    nzId: [{
      type: Input
    }]
  });
})();
var _NzSwitchModule = class _NzSwitchModule {
};
_NzSwitchModule.ɵfac = function NzSwitchModule_Factory(t) {
  return new (t || _NzSwitchModule)();
};
_NzSwitchModule.ɵmod = ɵɵdefineNgModule({
  type: _NzSwitchModule,
  imports: [NzSwitchComponent],
  exports: [NzSwitchComponent]
});
_NzSwitchModule.ɵinj = ɵɵdefineInjector({
  imports: [NzSwitchComponent]
});
var NzSwitchModule = _NzSwitchModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzSwitchModule, [{
    type: NgModule,
    args: [{
      imports: [NzSwitchComponent],
      exports: [NzSwitchComponent]
    }]
  }], null, null);
})();
export {
  NzSwitchComponent,
  NzSwitchModule
};
//# sourceMappingURL=ng-zorro-antd_switch.js.map
