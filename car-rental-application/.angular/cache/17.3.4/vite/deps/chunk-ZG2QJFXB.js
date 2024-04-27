import {
  FocusMonitor
} from "./chunk-VQTGEUV4.js";
import {
  NzI18nService
} from "./chunk-OA5SA4XI.js";
import {
  NzConnectedOverlayDirective,
  NzNoAnimationDirective,
  NzOverlayModule,
  POSITION_MAP,
  getPlacementName
} from "./chunk-KA3MSJAB.js";
import {
  CdkConnectedOverlay,
  CdkFixedSizeVirtualScroll,
  CdkOverlayOrigin,
  CdkPortalOutlet,
  CdkVirtualForOf,
  CdkVirtualScrollViewport,
  ComponentPortal,
  OverlayModule,
  PortalModule,
  TemplatePortal,
  slideMotion
} from "./chunk-Y2LXB4LJ.js";
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
  BACKSPACE,
  DOWN_ARROW,
  ENTER,
  ESCAPE,
  SPACE,
  TAB,
  UP_ARROW
} from "./chunk-T4JA2NQD.js";
import {
  NzDestroyService,
  cancelRequestAnimationFrame,
  reqAnimFrame
} from "./chunk-7UXDNT2U.js";
import {
  COMPOSITION_BUFFER_MODE,
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
import {
  NzConfigService,
  WithConfig
} from "./chunk-J7ZMYXK5.js";
import {
  InputBoolean,
  getStatusClassNames,
  isNotNil
} from "./chunk-PGMGKWAT.js";
import {
  Platform
} from "./chunk-2FVUDUB4.js";
import {
  NgForOf,
  NgIf,
  NgStyle,
  NgSwitch,
  NgSwitchCase,
  NgSwitchDefault,
  NgTemplateOutlet,
  isPlatformBrowser
} from "./chunk-KKPSRQXY.js";
import {
  BehaviorSubject,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  ElementRef,
  EventEmitter,
  Host,
  InjectionToken,
  Injector,
  Input,
  NgModule,
  NgZone,
  Optional,
  Output,
  PLATFORM_ID,
  Renderer2,
  Subject,
  TemplateRef,
  Type,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation$1,
  __decorate,
  combineLatest,
  distinctUntilChanged,
  forwardRef,
  fromEvent,
  inject,
  map,
  merge,
  of,
  setClassMetadata,
  startWith,
  switchMap,
  takeUntil,
  withLatestFrom,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
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
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵviewQuery
} from "./chunk-QIBLZIJK.js";

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-empty.mjs
function NzEmptyComponent_Conditional_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "img", 4);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("src", ctx_r0.nzNotFoundImage, ɵɵsanitizeUrl)("alt", ctx_r0.isContentString ? ctx_r0.nzNotFoundContent : "empty");
  }
}
function NzEmptyComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NzEmptyComponent_Conditional_1_ng_container_0_Template, 2, 2, "ng-container", 3);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("nzStringTemplateOutlet", ctx_r0.nzNotFoundImage);
  }
}
function NzEmptyComponent_Conditional_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "nz-empty-simple");
  }
}
function NzEmptyComponent_Conditional_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "nz-empty-default");
  }
}
function NzEmptyComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NzEmptyComponent_Conditional_2_Conditional_0_Template, 1, 0, "nz-empty-simple")(1, NzEmptyComponent_Conditional_2_Conditional_1_Template, 1, 0);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵconditional(0, ctx_r0.nzNotFoundImage === "simple" ? 0 : 1);
  }
}
function NzEmptyComponent_Conditional_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r0.isContentString ? ctx_r0.nzNotFoundContent : ctx_r0.locale["description"], " ");
  }
}
function NzEmptyComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "p", 1);
    ɵɵtemplate(1, NzEmptyComponent_Conditional_3_ng_container_1_Template, 2, 1, "ng-container", 3);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("nzStringTemplateOutlet", ctx_r0.nzNotFoundContent);
  }
}
function NzEmptyComponent_Conditional_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r0.nzNotFoundFooter, " ");
  }
}
function NzEmptyComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 2);
    ɵɵtemplate(1, NzEmptyComponent_Conditional_4_ng_container_1_Template, 2, 1, "ng-container", 3);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("nzStringTemplateOutlet", ctx_r0.nzNotFoundFooter);
  }
}
function NzEmbedEmptyComponent_Conditional_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵtextInterpolate1(" ", ctx_r0.content, " ");
  }
}
function NzEmbedEmptyComponent_Conditional_0_Conditional_1_ng_template_0_Template(rf, ctx) {
}
function NzEmbedEmptyComponent_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NzEmbedEmptyComponent_Conditional_0_Conditional_1_ng_template_0_Template, 0, 0, "ng-template", 0);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵproperty("cdkPortalOutlet", ctx_r0.contentPortal);
  }
}
function NzEmbedEmptyComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NzEmbedEmptyComponent_Conditional_0_Conditional_0_Template, 1, 1)(1, NzEmbedEmptyComponent_Conditional_0_Conditional_1_Template, 1, 1);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵconditional(0, ctx_r0.contentType === "string" ? 0 : 1);
  }
}
function NzEmbedEmptyComponent_Conditional_1_Conditional_0_Case_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "nz-empty", 1);
  }
}
function NzEmbedEmptyComponent_Conditional_1_Conditional_0_Case_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "nz-empty", 2);
  }
}
function NzEmbedEmptyComponent_Conditional_1_Conditional_0_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "nz-empty");
  }
}
function NzEmbedEmptyComponent_Conditional_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NzEmbedEmptyComponent_Conditional_1_Conditional_0_Case_0_Template, 1, 0)(1, NzEmbedEmptyComponent_Conditional_1_Conditional_0_Case_1_Template, 1, 0)(2, NzEmbedEmptyComponent_Conditional_1_Conditional_0_Case_2_Template, 1, 0);
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵconditional(0, (tmp_2_0 = ctx_r0.size) === "normal" ? 0 : tmp_2_0 === "small" ? 1 : 2);
  }
}
function NzEmbedEmptyComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NzEmbedEmptyComponent_Conditional_1_Conditional_0_Template, 3, 1);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵconditional(0, ctx_r0.specificContent !== null ? 0 : -1);
  }
}
var NZ_EMPTY_COMPONENT_NAME = new InjectionToken("nz-empty-component-name");
var _NzEmptyDefaultComponent = class _NzEmptyDefaultComponent {
};
_NzEmptyDefaultComponent.ɵfac = function NzEmptyDefaultComponent_Factory(t) {
  return new (t || _NzEmptyDefaultComponent)();
};
_NzEmptyDefaultComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzEmptyDefaultComponent,
  selectors: [["nz-empty-default"]],
  exportAs: ["nzEmptyDefault"],
  standalone: true,
  features: [ɵɵStandaloneFeature],
  decls: 12,
  vars: 0,
  consts: [["width", "184", "height", "152", "viewBox", "0 0 184 152", "xmlns", "http://www.w3.org/2000/svg", 1, "ant-empty-img-default"], ["fill", "none", "fill-rule", "evenodd"], ["transform", "translate(24 31.67)"], ["cx", "67.797", "cy", "106.89", "rx", "67.797", "ry", "12.668", 1, "ant-empty-img-default-ellipse"], ["d", "M122.034 69.674L98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z", 1, "ant-empty-img-default-path-1"], ["d", "M101.537 86.214L80.63 61.102c-1.001-1.207-2.507-1.867-4.048-1.867H31.724c-1.54 0-3.047.66-4.048 1.867L6.769 86.214v13.792h94.768V86.214z", "transform", "translate(13.56)", 1, "ant-empty-img-default-path-2"], ["d", "M33.83 0h67.933a4 4 0 0 1 4 4v93.344a4 4 0 0 1-4 4H33.83a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z", 1, "ant-empty-img-default-path-3"], ["d", "M42.678 9.953h50.237a2 2 0 0 1 2 2V36.91a2 2 0 0 1-2 2H42.678a2 2 0 0 1-2-2V11.953a2 2 0 0 1 2-2zM42.94 49.767h49.713a2.262 2.262 0 1 1 0 4.524H42.94a2.262 2.262 0 0 1 0-4.524zM42.94 61.53h49.713a2.262 2.262 0 1 1 0 4.525H42.94a2.262 2.262 0 0 1 0-4.525zM121.813 105.032c-.775 3.071-3.497 5.36-6.735 5.36H20.515c-3.238 0-5.96-2.29-6.734-5.36a7.309 7.309 0 0 1-.222-1.79V69.675h26.318c2.907 0 5.25 2.448 5.25 5.42v.04c0 2.971 2.37 5.37 5.277 5.37h34.785c2.907 0 5.277-2.421 5.277-5.393V75.1c0-2.972 2.343-5.426 5.25-5.426h26.318v33.569c0 .617-.077 1.216-.221 1.789z", 1, "ant-empty-img-default-path-4"], ["d", "M149.121 33.292l-6.83 2.65a1 1 0 0 1-1.317-1.23l1.937-6.207c-2.589-2.944-4.109-6.534-4.109-10.408C138.802 8.102 148.92 0 161.402 0 173.881 0 184 8.102 184 18.097c0 9.995-10.118 18.097-22.599 18.097-4.528 0-8.744-1.066-12.28-2.902z", 1, "ant-empty-img-default-path-5"], ["transform", "translate(149.65 15.383)", 1, "ant-empty-img-default-g"], ["cx", "20.654", "cy", "3.167", "rx", "2.849", "ry", "2.815"], ["d", "M5.698 5.63H0L2.898.704zM9.259.704h4.985V5.63H9.259z"]],
  template: function NzEmptyDefaultComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵnamespaceSVG();
      ɵɵelementStart(0, "svg", 0)(1, "g", 1)(2, "g", 2);
      ɵɵelement(3, "ellipse", 3)(4, "path", 4)(5, "path", 5)(6, "path", 6)(7, "path", 7);
      ɵɵelementEnd();
      ɵɵelement(8, "path", 8);
      ɵɵelementStart(9, "g", 9);
      ɵɵelement(10, "ellipse", 10)(11, "path", 11);
      ɵɵelementEnd()()();
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
var NzEmptyDefaultComponent = _NzEmptyDefaultComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzEmptyDefaultComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      selector: "nz-empty-default",
      exportAs: "nzEmptyDefault",
      standalone: true,
      template: `
    <svg
      class="ant-empty-img-default"
      width="184"
      height="152"
      viewBox="0 0 184 152"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill="none" fill-rule="evenodd">
        <g transform="translate(24 31.67)">
          <ellipse class="ant-empty-img-default-ellipse" cx="67.797" cy="106.89" rx="67.797" ry="12.668" />
          <path
            class="ant-empty-img-default-path-1"
            d="M122.034 69.674L98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z"
          />
          <path
            class="ant-empty-img-default-path-2"
            d="M101.537 86.214L80.63 61.102c-1.001-1.207-2.507-1.867-4.048-1.867H31.724c-1.54 0-3.047.66-4.048 1.867L6.769 86.214v13.792h94.768V86.214z"
            transform="translate(13.56)"
          />
          <path
            class="ant-empty-img-default-path-3"
            d="M33.83 0h67.933a4 4 0 0 1 4 4v93.344a4 4 0 0 1-4 4H33.83a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z"
          />
          <path
            class="ant-empty-img-default-path-4"
            d="M42.678 9.953h50.237a2 2 0 0 1 2 2V36.91a2 2 0 0 1-2 2H42.678a2 2 0 0 1-2-2V11.953a2 2 0 0 1 2-2zM42.94 49.767h49.713a2.262 2.262 0 1 1 0 4.524H42.94a2.262 2.262 0 0 1 0-4.524zM42.94 61.53h49.713a2.262 2.262 0 1 1 0 4.525H42.94a2.262 2.262 0 0 1 0-4.525zM121.813 105.032c-.775 3.071-3.497 5.36-6.735 5.36H20.515c-3.238 0-5.96-2.29-6.734-5.36a7.309 7.309 0 0 1-.222-1.79V69.675h26.318c2.907 0 5.25 2.448 5.25 5.42v.04c0 2.971 2.37 5.37 5.277 5.37h34.785c2.907 0 5.277-2.421 5.277-5.393V75.1c0-2.972 2.343-5.426 5.25-5.426h26.318v33.569c0 .617-.077 1.216-.221 1.789z"
          />
        </g>
        <path
          class="ant-empty-img-default-path-5"
          d="M149.121 33.292l-6.83 2.65a1 1 0 0 1-1.317-1.23l1.937-6.207c-2.589-2.944-4.109-6.534-4.109-10.408C138.802 8.102 148.92 0 161.402 0 173.881 0 184 8.102 184 18.097c0 9.995-10.118 18.097-22.599 18.097-4.528 0-8.744-1.066-12.28-2.902z"
        />
        <g class="ant-empty-img-default-g" transform="translate(149.65 15.383)">
          <ellipse cx="20.654" cy="3.167" rx="2.849" ry="2.815" />
          <path d="M5.698 5.63H0L2.898.704zM9.259.704h4.985V5.63H9.259z" />
        </g>
      </g>
    </svg>
  `
    }]
  }], null, null);
})();
var _NzEmptySimpleComponent = class _NzEmptySimpleComponent {
};
_NzEmptySimpleComponent.ɵfac = function NzEmptySimpleComponent_Factory(t) {
  return new (t || _NzEmptySimpleComponent)();
};
_NzEmptySimpleComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzEmptySimpleComponent,
  selectors: [["nz-empty-simple"]],
  exportAs: ["nzEmptySimple"],
  standalone: true,
  features: [ɵɵStandaloneFeature],
  decls: 6,
  vars: 0,
  consts: [["width", "64", "height", "41", "viewBox", "0 0 64 41", "xmlns", "http://www.w3.org/2000/svg", 1, "ant-empty-img-simple"], ["transform", "translate(0 1)", "fill", "none", "fill-rule", "evenodd"], ["cx", "32", "cy", "33", "rx", "32", "ry", "7", 1, "ant-empty-img-simple-ellipse"], ["fill-rule", "nonzero", 1, "ant-empty-img-simple-g"], ["d", "M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z"], ["d", "M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z", 1, "ant-empty-img-simple-path"]],
  template: function NzEmptySimpleComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵnamespaceSVG();
      ɵɵelementStart(0, "svg", 0)(1, "g", 1);
      ɵɵelement(2, "ellipse", 2);
      ɵɵelementStart(3, "g", 3);
      ɵɵelement(4, "path", 4)(5, "path", 5);
      ɵɵelementEnd()()();
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
var NzEmptySimpleComponent = _NzEmptySimpleComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzEmptySimpleComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      selector: "nz-empty-simple",
      exportAs: "nzEmptySimple",
      template: `
    <svg class="ant-empty-img-simple" width="64" height="41" viewBox="0 0 64 41" xmlns="http://www.w3.org/2000/svg">
      <g transform="translate(0 1)" fill="none" fill-rule="evenodd">
        <ellipse class="ant-empty-img-simple-ellipse" cx="32" cy="33" rx="32" ry="7" />
        <g class="ant-empty-img-simple-g" fill-rule="nonzero">
          <path
            d="M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z"
          />
          <path
            d="M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z"
            class="ant-empty-img-simple-path"
          />
        </g>
      </g>
    </svg>
  `,
      standalone: true
    }]
  }], null, null);
})();
var NzEmptyDefaultImages = ["default", "simple"];
var _NzEmptyComponent = class _NzEmptyComponent {
  constructor(i18n, cdr) {
    this.i18n = i18n;
    this.cdr = cdr;
    this.nzNotFoundImage = "default";
    this.isContentString = false;
    this.isImageBuildIn = true;
    this.destroy$ = new Subject();
  }
  ngOnChanges(changes) {
    const {
      nzNotFoundContent,
      nzNotFoundImage
    } = changes;
    if (nzNotFoundContent) {
      const content = nzNotFoundContent.currentValue;
      this.isContentString = typeof content === "string";
    }
    if (nzNotFoundImage) {
      const image = nzNotFoundImage.currentValue || "default";
      this.isImageBuildIn = NzEmptyDefaultImages.findIndex((i) => i === image) > -1;
    }
  }
  ngOnInit() {
    this.i18n.localeChange.pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.locale = this.i18n.getLocaleData("Empty");
      this.cdr.markForCheck();
    });
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
};
_NzEmptyComponent.ɵfac = function NzEmptyComponent_Factory(t) {
  return new (t || _NzEmptyComponent)(ɵɵdirectiveInject(NzI18nService), ɵɵdirectiveInject(ChangeDetectorRef));
};
_NzEmptyComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzEmptyComponent,
  selectors: [["nz-empty"]],
  hostAttrs: [1, "ant-empty"],
  inputs: {
    nzNotFoundImage: "nzNotFoundImage",
    nzNotFoundContent: "nzNotFoundContent",
    nzNotFoundFooter: "nzNotFoundFooter"
  },
  exportAs: ["nzEmpty"],
  standalone: true,
  features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
  decls: 5,
  vars: 3,
  consts: [[1, "ant-empty-image"], [1, "ant-empty-description"], [1, "ant-empty-footer"], [4, "nzStringTemplateOutlet"], [3, "src", "alt"]],
  template: function NzEmptyComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "div", 0);
      ɵɵtemplate(1, NzEmptyComponent_Conditional_1_Template, 1, 1, "ng-container")(2, NzEmptyComponent_Conditional_2_Template, 2, 1);
      ɵɵelementEnd();
      ɵɵtemplate(3, NzEmptyComponent_Conditional_3_Template, 2, 1, "p", 1)(4, NzEmptyComponent_Conditional_4_Template, 2, 1, "div", 2);
    }
    if (rf & 2) {
      ɵɵadvance();
      ɵɵconditional(1, !ctx.isImageBuildIn ? 1 : 2);
      ɵɵadvance(2);
      ɵɵconditional(3, ctx.nzNotFoundContent !== null ? 3 : -1);
      ɵɵadvance();
      ɵɵconditional(4, ctx.nzNotFoundFooter ? 4 : -1);
    }
  },
  dependencies: [NzOutletModule, NzStringTemplateOutletDirective, NzEmptyDefaultComponent, NzEmptySimpleComponent],
  encapsulation: 2,
  changeDetection: 0
});
var NzEmptyComponent = _NzEmptyComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzEmptyComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      selector: "nz-empty",
      exportAs: "nzEmpty",
      template: `
    <div class="ant-empty-image">
      @if (!isImageBuildIn) {
        <ng-container *nzStringTemplateOutlet="nzNotFoundImage">
          <img [src]="nzNotFoundImage" [alt]="isContentString ? nzNotFoundContent : 'empty'" />
        </ng-container>
      } @else {
        @if (nzNotFoundImage === 'simple') {
          <nz-empty-simple />
        } @else {
          <nz-empty-default />
        }
      }
    </div>
    @if (nzNotFoundContent !== null) {
      <p class="ant-empty-description">
        <ng-container *nzStringTemplateOutlet="nzNotFoundContent">
          {{ isContentString ? nzNotFoundContent : locale['description'] }}
        </ng-container>
      </p>
    }

    @if (nzNotFoundFooter) {
      <div class="ant-empty-footer">
        <ng-container *nzStringTemplateOutlet="nzNotFoundFooter">
          {{ nzNotFoundFooter }}
        </ng-container>
      </div>
    }
  `,
      host: {
        class: "ant-empty"
      },
      imports: [NzOutletModule, NzEmptyDefaultComponent, NzEmptySimpleComponent],
      standalone: true
    }]
  }], () => [{
    type: NzI18nService
  }, {
    type: ChangeDetectorRef
  }], {
    nzNotFoundImage: [{
      type: Input
    }],
    nzNotFoundContent: [{
      type: Input
    }],
    nzNotFoundFooter: [{
      type: Input
    }]
  });
})();
function getEmptySize(componentName) {
  switch (componentName) {
    case "table":
    case "list":
      return "normal";
    case "select":
    case "tree-select":
    case "cascader":
    case "transfer":
      return "small";
    default:
      return "";
  }
}
var _NzEmbedEmptyComponent = class _NzEmbedEmptyComponent {
  constructor(configService, viewContainerRef, cdr, injector) {
    this.configService = configService;
    this.viewContainerRef = viewContainerRef;
    this.cdr = cdr;
    this.injector = injector;
    this.contentType = "string";
    this.size = "";
    this.destroy$ = new Subject();
  }
  ngOnChanges(changes) {
    if (changes.nzComponentName) {
      this.size = getEmptySize(changes.nzComponentName.currentValue);
    }
    if (changes.specificContent && !changes.specificContent.isFirstChange()) {
      this.content = changes.specificContent.currentValue;
      this.renderEmpty();
    }
  }
  ngOnInit() {
    this.subscribeDefaultEmptyContentChange();
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  renderEmpty() {
    const content = this.content;
    if (typeof content === "string") {
      this.contentType = "string";
    } else if (content instanceof TemplateRef) {
      const context = {
        $implicit: this.nzComponentName
      };
      this.contentType = "template";
      this.contentPortal = new TemplatePortal(content, this.viewContainerRef, context);
    } else if (content instanceof Type) {
      const injector = Injector.create({
        parent: this.injector,
        providers: [{
          provide: NZ_EMPTY_COMPONENT_NAME,
          useValue: this.nzComponentName
        }]
      });
      this.contentType = "component";
      this.contentPortal = new ComponentPortal(content, this.viewContainerRef, injector);
    } else {
      this.contentType = "string";
      this.contentPortal = void 0;
    }
    this.cdr.detectChanges();
  }
  subscribeDefaultEmptyContentChange() {
    this.configService.getConfigChangeEventForComponent("empty").pipe(startWith(true), takeUntil(this.destroy$)).subscribe(() => {
      this.content = this.specificContent || this.getUserDefaultEmptyContent();
      this.renderEmpty();
    });
  }
  getUserDefaultEmptyContent() {
    return (this.configService.getConfigForComponent("empty") || {}).nzDefaultEmptyContent;
  }
};
_NzEmbedEmptyComponent.ɵfac = function NzEmbedEmptyComponent_Factory(t) {
  return new (t || _NzEmbedEmptyComponent)(ɵɵdirectiveInject(NzConfigService), ɵɵdirectiveInject(ViewContainerRef), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(Injector));
};
_NzEmbedEmptyComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzEmbedEmptyComponent,
  selectors: [["nz-embed-empty"]],
  inputs: {
    nzComponentName: "nzComponentName",
    specificContent: "specificContent"
  },
  exportAs: ["nzEmbedEmpty"],
  standalone: true,
  features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
  decls: 2,
  vars: 1,
  consts: [[3, "cdkPortalOutlet"], ["nzNotFoundImage", "simple", 1, "ant-empty-normal"], ["nzNotFoundImage", "simple", 1, "ant-empty-small"]],
  template: function NzEmbedEmptyComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, NzEmbedEmptyComponent_Conditional_0_Template, 2, 1)(1, NzEmbedEmptyComponent_Conditional_1_Template, 1, 1);
    }
    if (rf & 2) {
      ɵɵconditional(0, ctx.content ? 0 : 1);
    }
  },
  dependencies: [NzEmptyComponent, PortalModule, CdkPortalOutlet],
  encapsulation: 2,
  changeDetection: 0
});
var NzEmbedEmptyComponent = _NzEmbedEmptyComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzEmbedEmptyComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      selector: "nz-embed-empty",
      exportAs: "nzEmbedEmpty",
      template: `
    @if (content) {
      @if (contentType === 'string') {
        {{ content }}
      } @else {
        <ng-template [cdkPortalOutlet]="contentPortal" />
      }
    } @else {
      @if (specificContent !== null) {
        @switch (size) {
          @case ('normal') {
            <nz-empty class="ant-empty-normal" nzNotFoundImage="simple" />
          }
          @case ('small') {
            <nz-empty class="ant-empty-small" nzNotFoundImage="simple" />
          }
          @default {
            <nz-empty />
          }
        }
      }
    }
  `,
      imports: [NzEmptyComponent, PortalModule],
      standalone: true
    }]
  }], () => [{
    type: NzConfigService
  }, {
    type: ViewContainerRef
  }, {
    type: ChangeDetectorRef
  }, {
    type: Injector
  }], {
    nzComponentName: [{
      type: Input
    }],
    specificContent: [{
      type: Input
    }]
  });
})();
var _NzEmptyModule = class _NzEmptyModule {
};
_NzEmptyModule.ɵfac = function NzEmptyModule_Factory(t) {
  return new (t || _NzEmptyModule)();
};
_NzEmptyModule.ɵmod = ɵɵdefineNgModule({
  type: _NzEmptyModule,
  imports: [NzEmptyComponent, NzEmbedEmptyComponent, NzEmptyDefaultComponent, NzEmptySimpleComponent],
  exports: [NzEmptyComponent, NzEmbedEmptyComponent]
});
_NzEmptyModule.ɵinj = ɵɵdefineInjector({
  imports: [NzEmptyComponent, NzEmbedEmptyComponent]
});
var NzEmptyModule = _NzEmptyModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzEmptyModule, [{
    type: NgModule,
    args: [{
      imports: [NzEmptyComponent, NzEmbedEmptyComponent, NzEmptyDefaultComponent, NzEmptySimpleComponent],
      exports: [NzEmptyComponent, NzEmbedEmptyComponent]
    }]
  }], null, null);
})();

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-select.mjs
var _c0 = ["*"];
function NzOptionItemGroupComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r0.nzLabel);
  }
}
function NzOptionItemComponent_ng_template_1_ng_template_0_Template(rf, ctx) {
}
function NzOptionItemComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NzOptionItemComponent_ng_template_1_ng_template_0_Template, 0, 0, "ng-template", 4);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.template);
  }
}
function NzOptionItemComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵtextInterpolate(ctx_r0.label);
  }
}
function NzOptionItemComponent_div_4_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 7);
  }
}
function NzOptionItemComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 5);
    ɵɵtemplate(1, NzOptionItemComponent_div_4_span_1_Template, 1, 0, "span", 6);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r0.icon)("ngIfElse", ctx_r0.icon);
  }
}
function NzOptionContainerComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 4);
    ɵɵelement(1, "nz-embed-empty", 5);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("specificContent", ctx_r0.notFoundContent);
  }
}
function NzOptionContainerComponent_ng_template_3_nz_option_item_group_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "nz-option-item-group", 9);
  }
  if (rf & 2) {
    const item_r2 = ɵɵnextContext().$implicit;
    ɵɵproperty("nzLabel", item_r2.groupLabel);
  }
}
function NzOptionContainerComponent_ng_template_3_nz_option_item_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "nz-option-item", 10);
    ɵɵlistener("itemHover", function NzOptionContainerComponent_ng_template_3_nz_option_item_2_Template_nz_option_item_itemHover_0_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r0 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r0.onItemHover($event));
    })("itemClick", function NzOptionContainerComponent_ng_template_3_nz_option_item_2_Template_nz_option_item_itemClick_0_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r0 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r0.onItemClick($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const item_r2 = ɵɵnextContext().$implicit;
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("icon", ctx_r0.menuItemSelectedIcon)("customContent", item_r2.nzCustomContent)("template", item_r2.template)("grouped", !!item_r2.groupLabel)("disabled", item_r2.nzDisabled || ctx_r0.isMaxLimitReached && !ctx_r0.listOfSelectedValue.includes(item_r2["nzValue"]))("showState", ctx_r0.mode === "tags" || ctx_r0.mode === "multiple")("title", item_r2.nzTitle)("label", item_r2.nzLabel)("compareWith", ctx_r0.compareWith)("activatedValue", ctx_r0.activatedValue)("listOfSelectedValue", ctx_r0.listOfSelectedValue)("value", item_r2.nzValue);
  }
}
function NzOptionContainerComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0, 6);
    ɵɵtemplate(1, NzOptionContainerComponent_ng_template_3_nz_option_item_group_1_Template, 1, 1, "nz-option-item-group", 7)(2, NzOptionContainerComponent_ng_template_3_nz_option_item_2_Template, 1, 12, "nz-option-item", 8);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    ɵɵproperty("ngSwitch", item_r2.type);
    ɵɵadvance();
    ɵɵproperty("ngSwitchCase", "group");
    ɵɵadvance();
    ɵɵproperty("ngSwitchCase", "item");
  }
}
function NzOptionContainerComponent_ng_template_4_Template(rf, ctx) {
}
function NzOptionComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵprojection(0);
  }
}
function NzSelectArrowComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "span");
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵtextInterpolate2("", ctx_r0.listOfValue.length, " / ", ctx_r0.nzMaxMultipleCount, "");
  }
}
function NzSelectArrowComponent_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 5);
  }
}
function NzSelectArrowComponent_ng_template_2_ng_container_0_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 9);
  }
}
function NzSelectArrowComponent_ng_template_2_ng_container_0_span_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 10);
  }
}
function NzSelectArrowComponent_ng_template_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, NzSelectArrowComponent_ng_template_2_ng_container_0_span_1_Template, 1, 0, "span", 7)(2, NzSelectArrowComponent_ng_template_2_ng_container_0_span_2_Template, 1, 0, "span", 8);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r0.search);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.search);
  }
}
function NzSelectArrowComponent_ng_template_2_ng_template_1_ng_container_0_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 12);
  }
  if (rf & 2) {
    const suffixIcon_r2 = ɵɵnextContext().$implicit;
    ɵɵproperty("nzType", suffixIcon_r2);
  }
}
function NzSelectArrowComponent_ng_template_2_ng_template_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, NzSelectArrowComponent_ng_template_2_ng_template_1_ng_container_0_span_1_Template, 1, 1, "span", 11);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const suffixIcon_r2 = ctx.$implicit;
    ɵɵadvance();
    ɵɵproperty("ngIf", suffixIcon_r2);
  }
}
function NzSelectArrowComponent_ng_template_2_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NzSelectArrowComponent_ng_template_2_ng_template_1_ng_container_0_Template, 2, 1, "ng-container", 4);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵproperty("nzStringTemplateOutlet", ctx_r0.suffixIcon);
  }
}
function NzSelectArrowComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NzSelectArrowComponent_ng_template_2_ng_container_0_Template, 3, 2, "ng-container", 6)(1, NzSelectArrowComponent_ng_template_2_ng_template_1_Template, 1, 1, "ng-template", null, 1, ɵɵtemplateRefExtractor);
  }
  if (rf & 2) {
    const suffixTemplate_r3 = ɵɵreference(2);
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngIf", ctx_r0.showArrow && !ctx_r0.suffixIcon)("ngIfElse", suffixTemplate_r3);
  }
}
function NzSelectArrowComponent_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r0.feedbackIcon);
  }
}
function NzSelectClearComponent_span_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 1);
  }
}
var _c1 = (a0) => ({
  $implicit: a0
});
function NzSelectItemComponent_ng_container_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 4);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r0.label);
  }
}
function NzSelectItemComponent_ng_container_0_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵtextInterpolate(ctx_r0.label);
  }
}
function NzSelectItemComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, NzSelectItemComponent_ng_container_0_div_1_Template, 2, 1, "div", 3)(2, NzSelectItemComponent_ng_container_0_ng_template_2_Template, 1, 1, "ng-template", null, 0, ɵɵtemplateRefExtractor);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const labelTemplate_r2 = ɵɵreference(3);
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.deletable)("ngIfElse", labelTemplate_r2);
  }
}
function NzSelectItemComponent_span_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 7);
  }
}
function NzSelectItemComponent_span_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "span", 5);
    ɵɵlistener("click", function NzSelectItemComponent_span_1_Template_span_click_0_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r0 = ɵɵnextContext();
      return ɵɵresetView(ctx_r0.onDelete($event));
    });
    ɵɵtemplate(1, NzSelectItemComponent_span_1_span_1_Template, 1, 0, "span", 6);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r0.removeIcon)("ngIfElse", ctx_r0.removeIcon);
  }
}
function NzSelectPlaceholderComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r0.placeholder, " ");
  }
}
var _c2 = ["inputElement"];
var _c3 = ["mirrorElement"];
function NzSelectSearchComponent_span_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 4, 1);
  }
}
function NzSelectTopControlComponent_ng_container_1_nz_select_item_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "nz-select-item", 6);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("deletable", false)("disabled", false)("removeIcon", ctx_r1.removeIcon)("label", ctx_r1.listOfTopItem[0].nzLabel)("contentTemplateOutlet", ctx_r1.customTemplate)("contentTemplateOutletContext", ctx_r1.listOfTopItem[0]);
  }
}
function NzSelectTopControlComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "nz-select-search", 4);
    ɵɵlistener("isComposingChange", function NzSelectTopControlComponent_ng_container_1_Template_nz_select_search_isComposingChange_1_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.isComposingChange($event));
    })("valueChange", function NzSelectTopControlComponent_ng_container_1_Template_nz_select_search_valueChange_1_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onInputValueChange($event));
    });
    ɵɵelementEnd();
    ɵɵtemplate(2, NzSelectTopControlComponent_ng_container_1_nz_select_item_2_Template, 1, 6, "nz-select-item", 5);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("nzId", ctx_r1.nzId)("disabled", ctx_r1.disabled)("value", ctx_r1.inputValue)("showInput", ctx_r1.showSearch)("mirrorSync", false)("autofocus", ctx_r1.autofocus)("focusTrigger", ctx_r1.open);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.isShowSingleLabel);
  }
}
function NzSelectTopControlComponent_ng_container_2_nz_select_item_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "nz-select-item", 9);
    ɵɵlistener("delete", function NzSelectTopControlComponent_ng_container_2_nz_select_item_1_Template_nz_select_item_delete_0_listener() {
      const item_r5 = ɵɵrestoreView(_r4).$implicit;
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onDeleteItem(item_r5.contentTemplateOutletContext));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("removeIcon", ctx_r1.removeIcon)("label", item_r5.nzLabel)("disabled", item_r5.nzDisabled || ctx_r1.disabled)("contentTemplateOutlet", item_r5.contentTemplateOutlet)("deletable", true)("contentTemplateOutletContext", item_r5.contentTemplateOutletContext);
  }
}
function NzSelectTopControlComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, NzSelectTopControlComponent_ng_container_2_nz_select_item_1_Template, 1, 6, "nz-select-item", 7);
    ɵɵelementStart(2, "nz-select-search", 8);
    ɵɵlistener("isComposingChange", function NzSelectTopControlComponent_ng_container_2_Template_nz_select_search_isComposingChange_2_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.isComposingChange($event));
    })("valueChange", function NzSelectTopControlComponent_ng_container_2_Template_nz_select_search_valueChange_2_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onInputValueChange($event));
    });
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r1.listOfSlicedItem)("ngForTrackBy", ctx_r1.trackValue);
    ɵɵadvance();
    ɵɵproperty("nzId", ctx_r1.nzId)("disabled", ctx_r1.disabled)("value", ctx_r1.inputValue)("autofocus", ctx_r1.autofocus)("showInput", true)("mirrorSync", true)("focusTrigger", ctx_r1.open);
  }
}
function NzSelectTopControlComponent_nz_select_placeholder_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "nz-select-placeholder", 10);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("placeholder", ctx_r1.placeHolder);
  }
}
function NzSelectComponent_nz_select_arrow_2_ng_template_1_nz_form_item_feedback_icon_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "nz-form-item-feedback-icon", 8);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵproperty("status", ctx_r1.status);
  }
}
function NzSelectComponent_nz_select_arrow_2_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NzSelectComponent_nz_select_arrow_2_ng_template_1_nz_form_item_feedback_icon_0_Template, 1, 1, "nz-form-item-feedback-icon", 7);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("ngIf", ctx_r1.hasFeedback && !!ctx_r1.status);
  }
}
function NzSelectComponent_nz_select_arrow_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "nz-select-arrow", 6);
    ɵɵtemplate(1, NzSelectComponent_nz_select_arrow_2_ng_template_1_Template, 1, 1, "ng-template", null, 1, ɵɵtemplateRefExtractor);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const feedbackIconTpl_r3 = ɵɵreference(2);
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("showArrow", ctx_r1.nzShowArrow)("loading", ctx_r1.nzLoading)("search", ctx_r1.nzOpen && ctx_r1.nzShowSearch)("suffixIcon", ctx_r1.nzSuffixIcon)("feedbackIcon", feedbackIconTpl_r3)("nzMaxMultipleCount", ctx_r1.nzMaxMultipleCount)("listOfValue", ctx_r1.listOfValue)("isMaxTagCountSet", ctx_r1.isMaxTagCountSet);
  }
}
function NzSelectComponent_nz_select_clear_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "nz-select-clear", 9);
    ɵɵlistener("clear", function NzSelectComponent_nz_select_clear_3_Template_nz_select_clear_clear_0_listener() {
      ɵɵrestoreView(_r4);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onClearSelection());
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("clearIcon", ctx_r1.nzClearIcon);
  }
}
function NzSelectComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "nz-option-container", 10);
    ɵɵlistener("keydown", function NzSelectComponent_ng_template_4_Template_nz_option_container_keydown_0_listener($event) {
      ɵɵrestoreView(_r5);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onKeyDown($event));
    })("itemClick", function NzSelectComponent_ng_template_4_Template_nz_option_container_itemClick_0_listener($event) {
      ɵɵrestoreView(_r5);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onItemClick($event));
    })("scrollToBottom", function NzSelectComponent_ng_template_4_Template_nz_option_container_scrollToBottom_0_listener() {
      ɵɵrestoreView(_r5);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.nzScrollToBottom.emit());
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵclassProp("ant-select-dropdown-placement-bottomLeft", ctx_r1.dropDownPosition === "bottomLeft")("ant-select-dropdown-placement-topLeft", ctx_r1.dropDownPosition === "topLeft")("ant-select-dropdown-placement-bottomRight", ctx_r1.dropDownPosition === "bottomRight")("ant-select-dropdown-placement-topRight", ctx_r1.dropDownPosition === "topRight");
    ɵɵproperty("ngStyle", ctx_r1.nzDropdownStyle)("itemSize", ctx_r1.nzOptionHeightPx)("maxItemLength", ctx_r1.nzOptionOverflowSize)("matchWidth", ctx_r1.nzDropdownMatchSelectWidth)("@slideMotion", "enter")("@.disabled", !!(ctx_r1.noAnimation == null ? null : ctx_r1.noAnimation.nzNoAnimation))("nzNoAnimation", ctx_r1.noAnimation == null ? null : ctx_r1.noAnimation.nzNoAnimation)("listOfContainerItem", ctx_r1.listOfContainerItem)("menuItemSelectedIcon", ctx_r1.nzMenuItemSelectedIcon)("notFoundContent", ctx_r1.nzNotFoundContent)("activatedValue", ctx_r1.activatedValue)("listOfSelectedValue", ctx_r1.listOfValue)("dropdownRender", ctx_r1.nzDropdownRender)("compareWith", ctx_r1.compareWith)("mode", ctx_r1.nzMode)("isMaxLimitReached", ctx_r1.isMaxLimitReached);
  }
}
var _NzOptionGroupComponent = class _NzOptionGroupComponent {
  constructor() {
    this.nzLabel = null;
    this.changes = new Subject();
  }
  ngOnChanges() {
    this.changes.next();
  }
};
_NzOptionGroupComponent.ɵfac = function NzOptionGroupComponent_Factory(t) {
  return new (t || _NzOptionGroupComponent)();
};
_NzOptionGroupComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzOptionGroupComponent,
  selectors: [["nz-option-group"]],
  inputs: {
    nzLabel: "nzLabel"
  },
  exportAs: ["nzOptionGroup"],
  standalone: true,
  features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function NzOptionGroupComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
var NzOptionGroupComponent = _NzOptionGroupComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzOptionGroupComponent, [{
    type: Component,
    args: [{
      selector: "nz-option-group",
      exportAs: "nzOptionGroup",
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: ` <ng-content></ng-content> `,
      standalone: true
    }]
  }], null, {
    nzLabel: [{
      type: Input
    }]
  });
})();
var _NzOptionItemGroupComponent = class _NzOptionItemGroupComponent {
  constructor() {
    this.nzLabel = null;
  }
};
_NzOptionItemGroupComponent.ɵfac = function NzOptionItemGroupComponent_Factory(t) {
  return new (t || _NzOptionItemGroupComponent)();
};
_NzOptionItemGroupComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzOptionItemGroupComponent,
  selectors: [["nz-option-item-group"]],
  hostAttrs: [1, "ant-select-item", "ant-select-item-group"],
  inputs: {
    nzLabel: "nzLabel"
  },
  standalone: true,
  features: [ɵɵStandaloneFeature],
  decls: 1,
  vars: 1,
  consts: [[4, "nzStringTemplateOutlet"]],
  template: function NzOptionItemGroupComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, NzOptionItemGroupComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
    }
    if (rf & 2) {
      ɵɵproperty("nzStringTemplateOutlet", ctx.nzLabel);
    }
  },
  dependencies: [NzOutletModule, NzStringTemplateOutletDirective],
  encapsulation: 2,
  changeDetection: 0
});
var NzOptionItemGroupComponent = _NzOptionItemGroupComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzOptionItemGroupComponent, [{
    type: Component,
    args: [{
      selector: "nz-option-item-group",
      template: ` <ng-container *nzStringTemplateOutlet="nzLabel">{{ nzLabel }}</ng-container> `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      host: {
        class: "ant-select-item ant-select-item-group"
      },
      imports: [NzOutletModule],
      standalone: true
    }]
  }], () => [], {
    nzLabel: [{
      type: Input
    }]
  });
})();
var _NzOptionItemComponent = class _NzOptionItemComponent {
  constructor(elementRef, ngZone, destroy$) {
    this.elementRef = elementRef;
    this.ngZone = ngZone;
    this.destroy$ = destroy$;
    this.selected = false;
    this.activated = false;
    this.grouped = false;
    this.customContent = false;
    this.template = null;
    this.disabled = false;
    this.showState = false;
    this.label = null;
    this.value = null;
    this.activatedValue = null;
    this.listOfSelectedValue = [];
    this.icon = null;
    this.itemClick = new EventEmitter();
    this.itemHover = new EventEmitter();
  }
  ngOnChanges(changes) {
    const {
      value,
      activatedValue,
      listOfSelectedValue
    } = changes;
    if (value || listOfSelectedValue) {
      this.selected = this.listOfSelectedValue.some((v) => this.compareWith(v, this.value));
    }
    if (value || activatedValue) {
      this.activated = this.compareWith(this.activatedValue, this.value);
    }
  }
  ngOnInit() {
    this.ngZone.runOutsideAngular(() => {
      fromEvent(this.elementRef.nativeElement, "click").pipe(takeUntil(this.destroy$)).subscribe(() => {
        if (!this.disabled) {
          this.ngZone.run(() => this.itemClick.emit(this.value));
        }
      });
      fromEvent(this.elementRef.nativeElement, "mouseenter").pipe(takeUntil(this.destroy$)).subscribe(() => {
        if (!this.disabled) {
          this.ngZone.run(() => this.itemHover.emit(this.value));
        }
      });
    });
  }
};
_NzOptionItemComponent.ɵfac = function NzOptionItemComponent_Factory(t) {
  return new (t || _NzOptionItemComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(NzDestroyService));
};
_NzOptionItemComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzOptionItemComponent,
  selectors: [["nz-option-item"]],
  hostAttrs: [1, "ant-select-item", "ant-select-item-option"],
  hostVars: 9,
  hostBindings: function NzOptionItemComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("title", ctx.title);
      ɵɵclassProp("ant-select-item-option-grouped", ctx.grouped)("ant-select-item-option-selected", ctx.selected && !ctx.disabled)("ant-select-item-option-disabled", ctx.disabled)("ant-select-item-option-active", ctx.activated && !ctx.disabled);
    }
  },
  inputs: {
    grouped: "grouped",
    customContent: "customContent",
    template: "template",
    disabled: "disabled",
    showState: "showState",
    title: "title",
    label: "label",
    value: "value",
    activatedValue: "activatedValue",
    listOfSelectedValue: "listOfSelectedValue",
    icon: "icon",
    compareWith: "compareWith"
  },
  outputs: {
    itemClick: "itemClick",
    itemHover: "itemHover"
  },
  standalone: true,
  features: [ɵɵProvidersFeature([NzDestroyService]), ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
  decls: 5,
  vars: 3,
  consts: [["noCustomContent", ""], [1, "ant-select-item-option-content"], [3, "ngIf", "ngIfElse"], ["class", "ant-select-item-option-state", "style", "user-select: none", "unselectable", "on", 4, "ngIf"], [3, "ngTemplateOutlet"], ["unselectable", "on", 1, "ant-select-item-option-state", 2, "user-select", "none"], ["nz-icon", "", "nzType", "check", "class", "ant-select-selected-icon", 4, "ngIf", "ngIfElse"], ["nz-icon", "", "nzType", "check", 1, "ant-select-selected-icon"]],
  template: function NzOptionItemComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "div", 1);
      ɵɵtemplate(1, NzOptionItemComponent_ng_template_1_Template, 1, 1, "ng-template", 2)(2, NzOptionItemComponent_ng_template_2_Template, 1, 1, "ng-template", null, 0, ɵɵtemplateRefExtractor);
      ɵɵelementEnd();
      ɵɵtemplate(4, NzOptionItemComponent_div_4_Template, 2, 2, "div", 3);
    }
    if (rf & 2) {
      const noCustomContent_r2 = ɵɵreference(3);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.customContent)("ngIfElse", noCustomContent_r2);
      ɵɵadvance(3);
      ɵɵproperty("ngIf", ctx.showState && ctx.selected);
    }
  },
  dependencies: [NgIf, NgTemplateOutlet, NzIconModule, NzIconDirective],
  encapsulation: 2,
  changeDetection: 0
});
var NzOptionItemComponent = _NzOptionItemComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzOptionItemComponent, [{
    type: Component,
    args: [{
      selector: "nz-option-item",
      template: `
    <div class="ant-select-item-option-content">
      <ng-template [ngIf]="customContent" [ngIfElse]="noCustomContent">
        <ng-template [ngTemplateOutlet]="template"></ng-template>
      </ng-template>
      <ng-template #noCustomContent>{{ label }}</ng-template>
    </div>
    <div *ngIf="showState && selected" class="ant-select-item-option-state" style="user-select: none" unselectable="on">
      <span nz-icon nzType="check" class="ant-select-selected-icon" *ngIf="!icon; else icon"></span>
    </div>
  `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      host: {
        class: "ant-select-item ant-select-item-option",
        "[attr.title]": "title",
        "[class.ant-select-item-option-grouped]": "grouped",
        "[class.ant-select-item-option-selected]": "selected && !disabled",
        "[class.ant-select-item-option-disabled]": "disabled",
        "[class.ant-select-item-option-active]": "activated && !disabled"
      },
      providers: [NzDestroyService],
      imports: [NgIf, NgTemplateOutlet, NzIconModule],
      standalone: true
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: NgZone
  }, {
    type: NzDestroyService
  }], {
    grouped: [{
      type: Input
    }],
    customContent: [{
      type: Input
    }],
    template: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    showState: [{
      type: Input
    }],
    title: [{
      type: Input
    }],
    label: [{
      type: Input
    }],
    value: [{
      type: Input
    }],
    activatedValue: [{
      type: Input
    }],
    listOfSelectedValue: [{
      type: Input
    }],
    icon: [{
      type: Input
    }],
    compareWith: [{
      type: Input
    }],
    itemClick: [{
      type: Output
    }],
    itemHover: [{
      type: Output
    }]
  });
})();
var _NzOptionContainerComponent = class _NzOptionContainerComponent {
  constructor() {
    this.notFoundContent = void 0;
    this.menuItemSelectedIcon = null;
    this.dropdownRender = null;
    this.activatedValue = null;
    this.listOfSelectedValue = [];
    this.mode = "default";
    this.matchWidth = true;
    this.itemSize = 32;
    this.maxItemLength = 8;
    this.isMaxLimitReached = false;
    this.listOfContainerItem = [];
    this.itemClick = new EventEmitter();
    this.scrollToBottom = new EventEmitter();
    this.scrolledIndex = 0;
    this.ngZone = inject(NgZone);
    this.platformId = inject(PLATFORM_ID);
  }
  onItemClick(value) {
    this.itemClick.emit(value);
  }
  onItemHover(value) {
    this.activatedValue = value;
  }
  trackValue(_index, option) {
    return option.key;
  }
  onScrolledIndexChange(index) {
    this.scrolledIndex = index;
    if (index === this.listOfContainerItem.length - this.maxItemLength - 1) {
      this.scrollToBottom.emit();
    }
  }
  scrollToActivatedValue() {
    const index = this.listOfContainerItem.findIndex((item) => this.compareWith(item.key, this.activatedValue));
    if (index < this.scrolledIndex || index >= this.scrolledIndex + this.maxItemLength) {
      this.cdkVirtualScrollViewport.scrollToIndex(index || 0);
    }
  }
  ngOnChanges(changes) {
    const {
      listOfContainerItem,
      activatedValue
    } = changes;
    if (listOfContainerItem || activatedValue) {
      this.scrollToActivatedValue();
    }
  }
  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.ngZone.runOutsideAngular(() => setTimeout(() => this.scrollToActivatedValue()));
    }
  }
};
_NzOptionContainerComponent.ɵfac = function NzOptionContainerComponent_Factory(t) {
  return new (t || _NzOptionContainerComponent)();
};
_NzOptionContainerComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzOptionContainerComponent,
  selectors: [["nz-option-container"]],
  viewQuery: function NzOptionContainerComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(CdkVirtualScrollViewport, 7);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.cdkVirtualScrollViewport = _t.first);
    }
  },
  hostAttrs: [1, "ant-select-dropdown"],
  inputs: {
    notFoundContent: "notFoundContent",
    menuItemSelectedIcon: "menuItemSelectedIcon",
    dropdownRender: "dropdownRender",
    activatedValue: "activatedValue",
    listOfSelectedValue: "listOfSelectedValue",
    compareWith: "compareWith",
    mode: "mode",
    matchWidth: "matchWidth",
    itemSize: "itemSize",
    maxItemLength: "maxItemLength",
    isMaxLimitReached: "isMaxLimitReached",
    listOfContainerItem: "listOfContainerItem"
  },
  outputs: {
    itemClick: "itemClick",
    scrollToBottom: "scrollToBottom"
  },
  exportAs: ["nzOptionContainer"],
  standalone: true,
  features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
  decls: 5,
  vars: 14,
  consts: [["class", "ant-select-item-empty", 4, "ngIf"], [3, "scrolledIndexChange", "itemSize", "maxBufferPx", "minBufferPx"], ["cdkVirtualFor", "", 3, "cdkVirtualForOf", "cdkVirtualForTrackBy", "cdkVirtualForTemplateCacheSize"], [3, "ngTemplateOutlet"], [1, "ant-select-item-empty"], ["nzComponentName", "select", 3, "specificContent"], [3, "ngSwitch"], [3, "nzLabel", 4, "ngSwitchCase"], [3, "icon", "customContent", "template", "grouped", "disabled", "showState", "title", "label", "compareWith", "activatedValue", "listOfSelectedValue", "value", "itemHover", "itemClick", 4, "ngSwitchCase"], [3, "nzLabel"], [3, "itemHover", "itemClick", "icon", "customContent", "template", "grouped", "disabled", "showState", "title", "label", "compareWith", "activatedValue", "listOfSelectedValue", "value"]],
  template: function NzOptionContainerComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "div");
      ɵɵtemplate(1, NzOptionContainerComponent_div_1_Template, 2, 1, "div", 0);
      ɵɵelementStart(2, "cdk-virtual-scroll-viewport", 1);
      ɵɵlistener("scrolledIndexChange", function NzOptionContainerComponent_Template_cdk_virtual_scroll_viewport_scrolledIndexChange_2_listener($event) {
        return ctx.onScrolledIndexChange($event);
      });
      ɵɵtemplate(3, NzOptionContainerComponent_ng_template_3_Template, 3, 3, "ng-template", 2);
      ɵɵelementEnd();
      ɵɵtemplate(4, NzOptionContainerComponent_ng_template_4_Template, 0, 0, "ng-template", 3);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.listOfContainerItem.length === 0);
      ɵɵadvance();
      ɵɵstyleProp("height", ctx.listOfContainerItem.length * ctx.itemSize, "px")("max-height", ctx.itemSize * ctx.maxItemLength, "px");
      ɵɵclassProp("full-width", !ctx.matchWidth);
      ɵɵproperty("itemSize", ctx.itemSize)("maxBufferPx", ctx.itemSize * ctx.maxItemLength)("minBufferPx", ctx.itemSize * ctx.maxItemLength);
      ɵɵadvance();
      ɵɵproperty("cdkVirtualForOf", ctx.listOfContainerItem)("cdkVirtualForTrackBy", ctx.trackValue)("cdkVirtualForTemplateCacheSize", 0);
      ɵɵadvance();
      ɵɵproperty("ngTemplateOutlet", ctx.dropdownRender);
    }
  },
  dependencies: [NzEmptyModule, NzEmbedEmptyComponent, NgIf, NgSwitch, NzOptionItemGroupComponent, NgSwitchCase, NzOptionItemComponent, NgTemplateOutlet, OverlayModule, CdkFixedSizeVirtualScroll, CdkVirtualForOf, CdkVirtualScrollViewport, NzOverlayModule],
  encapsulation: 2,
  changeDetection: 0
});
var NzOptionContainerComponent = _NzOptionContainerComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzOptionContainerComponent, [{
    type: Component,
    args: [{
      selector: "nz-option-container",
      exportAs: "nzOptionContainer",
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      preserveWhitespaces: false,
      template: `
    <div>
      <div *ngIf="listOfContainerItem.length === 0" class="ant-select-item-empty">
        <nz-embed-empty nzComponentName="select" [specificContent]="notFoundContent!"></nz-embed-empty>
      </div>
      <cdk-virtual-scroll-viewport
        [class.full-width]="!matchWidth"
        [itemSize]="itemSize"
        [maxBufferPx]="itemSize * maxItemLength"
        [minBufferPx]="itemSize * maxItemLength"
        (scrolledIndexChange)="onScrolledIndexChange($event)"
        [style.height.px]="listOfContainerItem.length * itemSize"
        [style.max-height.px]="itemSize * maxItemLength"
      >
        <ng-template
          cdkVirtualFor
          [cdkVirtualForOf]="listOfContainerItem"
          [cdkVirtualForTrackBy]="trackValue"
          [cdkVirtualForTemplateCacheSize]="0"
          let-item
        >
          <ng-container [ngSwitch]="item.type">
            <nz-option-item-group *ngSwitchCase="'group'" [nzLabel]="item.groupLabel"></nz-option-item-group>
            <nz-option-item
              *ngSwitchCase="'item'"
              [icon]="menuItemSelectedIcon"
              [customContent]="item.nzCustomContent"
              [template]="item.template"
              [grouped]="!!item.groupLabel"
              [disabled]="item.nzDisabled || (isMaxLimitReached && !listOfSelectedValue.includes(item['nzValue']))"
              [showState]="mode === 'tags' || mode === 'multiple'"
              [title]="item.nzTitle"
              [label]="item.nzLabel"
              [compareWith]="compareWith"
              [activatedValue]="activatedValue"
              [listOfSelectedValue]="listOfSelectedValue"
              [value]="item.nzValue"
              (itemHover)="onItemHover($event)"
              (itemClick)="onItemClick($event)"
            ></nz-option-item>
          </ng-container>
        </ng-template>
      </cdk-virtual-scroll-viewport>
      <ng-template [ngTemplateOutlet]="dropdownRender"></ng-template>
    </div>
  `,
      host: {
        class: "ant-select-dropdown"
      },
      imports: [NzEmptyModule, NgIf, NgSwitch, NzOptionItemGroupComponent, NgSwitchCase, NzOptionItemComponent, NgTemplateOutlet, OverlayModule, NzOverlayModule],
      standalone: true
    }]
  }], null, {
    notFoundContent: [{
      type: Input
    }],
    menuItemSelectedIcon: [{
      type: Input
    }],
    dropdownRender: [{
      type: Input
    }],
    activatedValue: [{
      type: Input
    }],
    listOfSelectedValue: [{
      type: Input
    }],
    compareWith: [{
      type: Input
    }],
    mode: [{
      type: Input
    }],
    matchWidth: [{
      type: Input
    }],
    itemSize: [{
      type: Input
    }],
    maxItemLength: [{
      type: Input
    }],
    isMaxLimitReached: [{
      type: Input
    }],
    listOfContainerItem: [{
      type: Input
    }],
    itemClick: [{
      type: Output
    }],
    scrollToBottom: [{
      type: Output
    }],
    cdkVirtualScrollViewport: [{
      type: ViewChild,
      args: [CdkVirtualScrollViewport, {
        static: true
      }]
    }]
  });
})();
var _NzOptionComponent = class _NzOptionComponent {
  constructor(nzOptionGroupComponent, destroy$) {
    this.nzOptionGroupComponent = nzOptionGroupComponent;
    this.destroy$ = destroy$;
    this.changes = new Subject();
    this.groupLabel = null;
    this.nzLabel = null;
    this.nzValue = null;
    this.nzDisabled = false;
    this.nzHide = false;
    this.nzCustomContent = false;
  }
  ngOnInit() {
    if (this.nzOptionGroupComponent) {
      this.nzOptionGroupComponent.changes.pipe(startWith(true), takeUntil(this.destroy$)).subscribe(() => {
        this.groupLabel = this.nzOptionGroupComponent.nzLabel;
      });
    }
  }
  ngOnChanges() {
    this.changes.next();
  }
};
_NzOptionComponent.ɵfac = function NzOptionComponent_Factory(t) {
  return new (t || _NzOptionComponent)(ɵɵdirectiveInject(NzOptionGroupComponent, 8), ɵɵdirectiveInject(NzDestroyService));
};
_NzOptionComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzOptionComponent,
  selectors: [["nz-option"]],
  viewQuery: function NzOptionComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(TemplateRef, 7);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.template = _t.first);
    }
  },
  inputs: {
    nzTitle: "nzTitle",
    nzLabel: "nzLabel",
    nzValue: "nzValue",
    nzKey: "nzKey",
    nzDisabled: "nzDisabled",
    nzHide: "nzHide",
    nzCustomContent: "nzCustomContent"
  },
  exportAs: ["nzOption"],
  standalone: true,
  features: [ɵɵProvidersFeature([NzDestroyService]), ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function NzOptionComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵtemplate(0, NzOptionComponent_ng_template_0_Template, 1, 0, "ng-template");
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
var NzOptionComponent = _NzOptionComponent;
__decorate([InputBoolean()], NzOptionComponent.prototype, "nzDisabled", void 0);
__decorate([InputBoolean()], NzOptionComponent.prototype, "nzHide", void 0);
__decorate([InputBoolean()], NzOptionComponent.prototype, "nzCustomContent", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzOptionComponent, [{
    type: Component,
    args: [{
      selector: "nz-option",
      exportAs: "nzOption",
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [NzDestroyService],
      template: `
    <ng-template>
      <ng-content></ng-content>
    </ng-template>
  `,
      standalone: true
    }]
  }], () => [{
    type: NzOptionGroupComponent,
    decorators: [{
      type: Optional
    }]
  }, {
    type: NzDestroyService
  }], {
    template: [{
      type: ViewChild,
      args: [TemplateRef, {
        static: true
      }]
    }],
    nzTitle: [{
      type: Input
    }],
    nzLabel: [{
      type: Input
    }],
    nzValue: [{
      type: Input
    }],
    nzKey: [{
      type: Input
    }],
    nzDisabled: [{
      type: Input
    }],
    nzHide: [{
      type: Input
    }],
    nzCustomContent: [{
      type: Input
    }]
  });
})();
var _NzSelectArrowComponent = class _NzSelectArrowComponent {
  constructor() {
    this.listOfValue = [];
    this.loading = false;
    this.search = false;
    this.showArrow = false;
    this.isMaxTagCountSet = false;
    this.suffixIcon = null;
    this.feedbackIcon = null;
    this.nzMaxMultipleCount = Infinity;
  }
};
_NzSelectArrowComponent.ɵfac = function NzSelectArrowComponent_Factory(t) {
  return new (t || _NzSelectArrowComponent)();
};
_NzSelectArrowComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzSelectArrowComponent,
  selectors: [["nz-select-arrow"]],
  hostAttrs: [1, "ant-select-arrow"],
  hostVars: 2,
  hostBindings: function NzSelectArrowComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("ant-select-arrow-loading", ctx.loading);
    }
  },
  inputs: {
    listOfValue: "listOfValue",
    loading: "loading",
    search: "search",
    showArrow: "showArrow",
    isMaxTagCountSet: "isMaxTagCountSet",
    suffixIcon: "suffixIcon",
    feedbackIcon: "feedbackIcon",
    nzMaxMultipleCount: "nzMaxMultipleCount"
  },
  standalone: true,
  features: [ɵɵStandaloneFeature],
  decls: 5,
  vars: 4,
  consts: [["defaultArrow", ""], ["suffixTemplate", ""], [4, "ngIf"], ["nz-icon", "", "nzType", "loading", 4, "ngIf", "ngIfElse"], [4, "nzStringTemplateOutlet"], ["nz-icon", "", "nzType", "loading"], [4, "ngIf", "ngIfElse"], ["nz-icon", "", "nzType", "down", 4, "ngIf"], ["nz-icon", "", "nzType", "search", 4, "ngIf"], ["nz-icon", "", "nzType", "down"], ["nz-icon", "", "nzType", "search"], ["nz-icon", "", 3, "nzType", 4, "ngIf"], ["nz-icon", "", 3, "nzType"]],
  template: function NzSelectArrowComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, NzSelectArrowComponent_ng_container_0_Template, 3, 2, "ng-container", 2)(1, NzSelectArrowComponent_span_1_Template, 1, 0, "span", 3)(2, NzSelectArrowComponent_ng_template_2_Template, 3, 2, "ng-template", null, 0, ɵɵtemplateRefExtractor)(4, NzSelectArrowComponent_ng_container_4_Template, 2, 1, "ng-container", 4);
    }
    if (rf & 2) {
      const defaultArrow_r4 = ɵɵreference(3);
      ɵɵproperty("ngIf", ctx.isMaxTagCountSet);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.loading)("ngIfElse", defaultArrow_r4);
      ɵɵadvance(3);
      ɵɵproperty("nzStringTemplateOutlet", ctx.feedbackIcon);
    }
  },
  dependencies: [NzIconModule, NzIconDirective, NgIf, NzOutletModule, NzStringTemplateOutletDirective],
  encapsulation: 2,
  changeDetection: 0
});
var NzSelectArrowComponent = _NzSelectArrowComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzSelectArrowComponent, [{
    type: Component,
    args: [{
      selector: "nz-select-arrow",
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `
    <ng-container *ngIf="isMaxTagCountSet">
      <span>{{ listOfValue.length }} / {{ nzMaxMultipleCount }}</span>
    </ng-container>
    <span nz-icon nzType="loading" *ngIf="loading; else defaultArrow"></span>
    <ng-template #defaultArrow>
      <ng-container *ngIf="showArrow && !suffixIcon; else suffixTemplate">
        <span nz-icon nzType="down" *ngIf="!search"></span>
        <span nz-icon nzType="search" *ngIf="search"></span>
      </ng-container>
      <ng-template #suffixTemplate>
        <ng-container *nzStringTemplateOutlet="suffixIcon; let suffixIcon">
          <span *ngIf="suffixIcon" nz-icon [nzType]="suffixIcon"></span>
        </ng-container>
      </ng-template>
    </ng-template>
    <ng-container *nzStringTemplateOutlet="feedbackIcon">{{ feedbackIcon }}</ng-container>
  `,
      host: {
        class: "ant-select-arrow",
        "[class.ant-select-arrow-loading]": "loading"
      },
      imports: [NzIconModule, NgIf, NzOutletModule],
      standalone: true
    }]
  }], () => [], {
    listOfValue: [{
      type: Input
    }],
    loading: [{
      type: Input
    }],
    search: [{
      type: Input
    }],
    showArrow: [{
      type: Input
    }],
    isMaxTagCountSet: [{
      type: Input
    }],
    suffixIcon: [{
      type: Input
    }],
    feedbackIcon: [{
      type: Input
    }],
    nzMaxMultipleCount: [{
      type: Input
    }]
  });
})();
var _NzSelectClearComponent = class _NzSelectClearComponent {
  constructor() {
    this.clearIcon = null;
    this.clear = new EventEmitter();
  }
  onClick(e) {
    e.preventDefault();
    e.stopPropagation();
    this.clear.emit(e);
  }
};
_NzSelectClearComponent.ɵfac = function NzSelectClearComponent_Factory(t) {
  return new (t || _NzSelectClearComponent)();
};
_NzSelectClearComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzSelectClearComponent,
  selectors: [["nz-select-clear"]],
  hostAttrs: [1, "ant-select-clear"],
  hostBindings: function NzSelectClearComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("click", function NzSelectClearComponent_click_HostBindingHandler($event) {
        return ctx.onClick($event);
      });
    }
  },
  inputs: {
    clearIcon: "clearIcon"
  },
  outputs: {
    clear: "clear"
  },
  standalone: true,
  features: [ɵɵStandaloneFeature],
  decls: 1,
  vars: 2,
  consts: [["nz-icon", "", "nzType", "close-circle", "nzTheme", "fill", "class", "ant-select-close-icon", 4, "ngIf", "ngIfElse"], ["nz-icon", "", "nzType", "close-circle", "nzTheme", "fill", 1, "ant-select-close-icon"]],
  template: function NzSelectClearComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, NzSelectClearComponent_span_0_Template, 1, 0, "span", 0);
    }
    if (rf & 2) {
      ɵɵproperty("ngIf", !ctx.clearIcon)("ngIfElse", ctx.clearIcon);
    }
  },
  dependencies: [NzIconModule, NzIconDirective, NgIf],
  encapsulation: 2,
  changeDetection: 0
});
var NzSelectClearComponent = _NzSelectClearComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzSelectClearComponent, [{
    type: Component,
    args: [{
      selector: "nz-select-clear",
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `
    <span
      nz-icon
      nzType="close-circle"
      nzTheme="fill"
      *ngIf="!clearIcon; else clearIcon"
      class="ant-select-close-icon"
    ></span>
  `,
      host: {
        class: "ant-select-clear",
        "(click)": "onClick($event)"
      },
      imports: [NzIconModule, NgIf],
      standalone: true
    }]
  }], () => [], {
    clearIcon: [{
      type: Input
    }],
    clear: [{
      type: Output
    }]
  });
})();
var _NzSelectItemComponent = class _NzSelectItemComponent {
  constructor() {
    this.disabled = false;
    this.label = null;
    this.deletable = false;
    this.removeIcon = null;
    this.contentTemplateOutletContext = null;
    this.contentTemplateOutlet = null;
    this.delete = new EventEmitter();
  }
  onDelete(e) {
    e.preventDefault();
    e.stopPropagation();
    if (!this.disabled) {
      this.delete.next(e);
    }
  }
};
_NzSelectItemComponent.ɵfac = function NzSelectItemComponent_Factory(t) {
  return new (t || _NzSelectItemComponent)();
};
_NzSelectItemComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzSelectItemComponent,
  selectors: [["nz-select-item"]],
  hostAttrs: [1, "ant-select-selection-item"],
  hostVars: 3,
  hostBindings: function NzSelectItemComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("title", ctx.label);
      ɵɵclassProp("ant-select-selection-item-disabled", ctx.disabled);
    }
  },
  inputs: {
    disabled: "disabled",
    label: "label",
    deletable: "deletable",
    removeIcon: "removeIcon",
    contentTemplateOutletContext: "contentTemplateOutletContext",
    contentTemplateOutlet: "contentTemplateOutlet"
  },
  outputs: {
    delete: "delete"
  },
  standalone: true,
  features: [ɵɵStandaloneFeature],
  decls: 2,
  vars: 5,
  consts: [["labelTemplate", ""], [4, "nzStringTemplateOutlet", "nzStringTemplateOutletContext"], ["class", "ant-select-selection-item-remove", 3, "click", 4, "ngIf"], ["class", "ant-select-selection-item-content", 4, "ngIf", "ngIfElse"], [1, "ant-select-selection-item-content"], [1, "ant-select-selection-item-remove", 3, "click"], ["nz-icon", "", "nzType", "close", 4, "ngIf", "ngIfElse"], ["nz-icon", "", "nzType", "close"]],
  template: function NzSelectItemComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, NzSelectItemComponent_ng_container_0_Template, 4, 2, "ng-container", 1)(1, NzSelectItemComponent_span_1_Template, 2, 2, "span", 2);
    }
    if (rf & 2) {
      ɵɵproperty("nzStringTemplateOutlet", ctx.contentTemplateOutlet)("nzStringTemplateOutletContext", ɵɵpureFunction1(3, _c1, ctx.contentTemplateOutletContext));
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.deletable && !ctx.disabled);
    }
  },
  dependencies: [NzOutletModule, NzStringTemplateOutletDirective, NgIf, NzIconModule, NzIconDirective],
  encapsulation: 2,
  changeDetection: 0
});
var NzSelectItemComponent = _NzSelectItemComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzSelectItemComponent, [{
    type: Component,
    args: [{
      selector: "nz-select-item",
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `
    <ng-container *nzStringTemplateOutlet="contentTemplateOutlet; context: { $implicit: contentTemplateOutletContext }">
      <div class="ant-select-selection-item-content" *ngIf="deletable; else labelTemplate">{{ label }}</div>
      <ng-template #labelTemplate>{{ label }}</ng-template>
    </ng-container>
    <span *ngIf="deletable && !disabled" class="ant-select-selection-item-remove" (click)="onDelete($event)">
      <span nz-icon nzType="close" *ngIf="!removeIcon; else removeIcon"></span>
    </span>
  `,
      host: {
        class: "ant-select-selection-item",
        "[attr.title]": "label",
        "[class.ant-select-selection-item-disabled]": "disabled"
      },
      imports: [NzOutletModule, NgIf, NzIconModule],
      standalone: true
    }]
  }], () => [], {
    disabled: [{
      type: Input
    }],
    label: [{
      type: Input
    }],
    deletable: [{
      type: Input
    }],
    removeIcon: [{
      type: Input
    }],
    contentTemplateOutletContext: [{
      type: Input
    }],
    contentTemplateOutlet: [{
      type: Input
    }],
    delete: [{
      type: Output
    }]
  });
})();
var _NzSelectPlaceholderComponent = class _NzSelectPlaceholderComponent {
  constructor() {
    this.placeholder = null;
  }
};
_NzSelectPlaceholderComponent.ɵfac = function NzSelectPlaceholderComponent_Factory(t) {
  return new (t || _NzSelectPlaceholderComponent)();
};
_NzSelectPlaceholderComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzSelectPlaceholderComponent,
  selectors: [["nz-select-placeholder"]],
  hostAttrs: [1, "ant-select-selection-placeholder"],
  inputs: {
    placeholder: "placeholder"
  },
  standalone: true,
  features: [ɵɵStandaloneFeature],
  decls: 1,
  vars: 1,
  consts: [[4, "nzStringTemplateOutlet"]],
  template: function NzSelectPlaceholderComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, NzSelectPlaceholderComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
    }
    if (rf & 2) {
      ɵɵproperty("nzStringTemplateOutlet", ctx.placeholder);
    }
  },
  dependencies: [NzOutletModule, NzStringTemplateOutletDirective],
  encapsulation: 2,
  changeDetection: 0
});
var NzSelectPlaceholderComponent = _NzSelectPlaceholderComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzSelectPlaceholderComponent, [{
    type: Component,
    args: [{
      selector: "nz-select-placeholder",
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `
    <ng-container *nzStringTemplateOutlet="placeholder">
      {{ placeholder }}
    </ng-container>
  `,
      host: {
        class: "ant-select-selection-placeholder"
      },
      imports: [NzOutletModule],
      standalone: true
    }]
  }], () => [], {
    placeholder: [{
      type: Input
    }]
  });
})();
var _NzSelectSearchComponent = class _NzSelectSearchComponent {
  setCompositionState(isComposing) {
    this.isComposingChange.next(isComposing);
  }
  onValueChange(value) {
    this.value = value;
    this.valueChange.next(value);
    if (this.mirrorSync) {
      this.syncMirrorWidth();
    }
  }
  clearInputValue() {
    const inputDOM = this.inputElement.nativeElement;
    inputDOM.value = "";
    this.onValueChange("");
  }
  syncMirrorWidth() {
    const mirrorDOM = this.mirrorElement.nativeElement;
    const hostDOM = this.elementRef.nativeElement;
    const inputDOM = this.inputElement.nativeElement;
    this.renderer.removeStyle(hostDOM, "width");
    this.renderer.setProperty(mirrorDOM, "textContent", `${inputDOM.value} `);
    this.renderer.setStyle(hostDOM, "width", `${mirrorDOM.scrollWidth}px`);
  }
  focus() {
    this.focusMonitor.focusVia(this.inputElement, "keyboard");
  }
  blur() {
    this.inputElement.nativeElement.blur();
  }
  constructor(elementRef, renderer, focusMonitor) {
    this.elementRef = elementRef;
    this.renderer = renderer;
    this.focusMonitor = focusMonitor;
    this.nzId = null;
    this.disabled = false;
    this.mirrorSync = false;
    this.showInput = true;
    this.focusTrigger = false;
    this.value = "";
    this.autofocus = false;
    this.valueChange = new EventEmitter();
    this.isComposingChange = new EventEmitter();
  }
  ngOnChanges(changes) {
    const inputDOM = this.inputElement.nativeElement;
    const {
      focusTrigger,
      showInput
    } = changes;
    if (showInput) {
      if (this.showInput) {
        this.renderer.removeAttribute(inputDOM, "readonly");
      } else {
        this.renderer.setAttribute(inputDOM, "readonly", "readonly");
      }
    }
    if (focusTrigger && focusTrigger.currentValue === true && focusTrigger.previousValue === false) {
      inputDOM.focus();
    }
  }
  ngAfterViewInit() {
    if (this.mirrorSync) {
      this.syncMirrorWidth();
    }
    if (this.autofocus) {
      this.focus();
    }
  }
};
_NzSelectSearchComponent.ɵfac = function NzSelectSearchComponent_Factory(t) {
  return new (t || _NzSelectSearchComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(FocusMonitor));
};
_NzSelectSearchComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzSelectSearchComponent,
  selectors: [["nz-select-search"]],
  viewQuery: function NzSelectSearchComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c2, 7);
      ɵɵviewQuery(_c3, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.inputElement = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.mirrorElement = _t.first);
    }
  },
  hostAttrs: [1, "ant-select-selection-search"],
  inputs: {
    nzId: "nzId",
    disabled: "disabled",
    mirrorSync: "mirrorSync",
    showInput: "showInput",
    focusTrigger: "focusTrigger",
    value: "value",
    autofocus: "autofocus"
  },
  outputs: {
    valueChange: "valueChange",
    isComposingChange: "isComposingChange"
  },
  standalone: true,
  features: [ɵɵProvidersFeature([{
    provide: COMPOSITION_BUFFER_MODE,
    useValue: false
  }]), ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
  decls: 3,
  vars: 7,
  consts: [["inputElement", ""], ["mirrorElement", ""], ["autocomplete", "off", 1, "ant-select-selection-search-input", 3, "ngModelChange", "compositionstart", "compositionend", "ngModel", "disabled"], ["class", "ant-select-selection-search-mirror", 4, "ngIf"], [1, "ant-select-selection-search-mirror"]],
  template: function NzSelectSearchComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = ɵɵgetCurrentView();
      ɵɵelementStart(0, "input", 2, 0);
      ɵɵlistener("ngModelChange", function NzSelectSearchComponent_Template_input_ngModelChange_0_listener($event) {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.onValueChange($event));
      })("compositionstart", function NzSelectSearchComponent_Template_input_compositionstart_0_listener() {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.setCompositionState(true));
      })("compositionend", function NzSelectSearchComponent_Template_input_compositionend_0_listener() {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.setCompositionState(false));
      });
      ɵɵelementEnd();
      ɵɵtemplate(2, NzSelectSearchComponent_span_2_Template, 2, 0, "span", 3);
    }
    if (rf & 2) {
      ɵɵstyleProp("opacity", ctx.showInput ? null : 0);
      ɵɵproperty("ngModel", ctx.value)("disabled", ctx.disabled);
      ɵɵattribute("id", ctx.nzId)("autofocus", ctx.autofocus ? "autofocus" : null);
      ɵɵadvance(2);
      ɵɵproperty("ngIf", ctx.mirrorSync);
    }
  },
  dependencies: [FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, NgIf],
  encapsulation: 2,
  changeDetection: 0
});
var NzSelectSearchComponent = _NzSelectSearchComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzSelectSearchComponent, [{
    type: Component,
    args: [{
      selector: "nz-select-search",
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `
    <input
      #inputElement
      [attr.id]="nzId"
      autocomplete="off"
      class="ant-select-selection-search-input"
      [ngModel]="value"
      [attr.autofocus]="autofocus ? 'autofocus' : null"
      [disabled]="disabled"
      [style.opacity]="showInput ? null : 0"
      (ngModelChange)="onValueChange($event)"
      (compositionstart)="setCompositionState(true)"
      (compositionend)="setCompositionState(false)"
    />
    <span #mirrorElement *ngIf="mirrorSync" class="ant-select-selection-search-mirror"></span>
  `,
      host: {
        class: "ant-select-selection-search"
      },
      providers: [{
        provide: COMPOSITION_BUFFER_MODE,
        useValue: false
      }],
      imports: [FormsModule, NgIf],
      standalone: true
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: FocusMonitor
  }], {
    nzId: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    mirrorSync: [{
      type: Input
    }],
    showInput: [{
      type: Input
    }],
    focusTrigger: [{
      type: Input
    }],
    value: [{
      type: Input
    }],
    autofocus: [{
      type: Input
    }],
    valueChange: [{
      type: Output
    }],
    isComposingChange: [{
      type: Output
    }],
    inputElement: [{
      type: ViewChild,
      args: ["inputElement", {
        static: true
      }]
    }],
    mirrorElement: [{
      type: ViewChild,
      args: ["mirrorElement", {
        static: false
      }]
    }]
  });
})();
var _NzSelectTopControlComponent = class _NzSelectTopControlComponent {
  updateTemplateVariable() {
    const isSelectedValueEmpty = this.listOfTopItem.length === 0;
    this.isShowPlaceholder = isSelectedValueEmpty && !this.isComposing && !this.inputValue;
    this.isShowSingleLabel = !isSelectedValueEmpty && !this.isComposing && !this.inputValue;
  }
  isComposingChange(isComposing) {
    this.isComposing = isComposing;
    this.updateTemplateVariable();
  }
  onInputValueChange(value) {
    if (value !== this.inputValue) {
      this.inputValue = value;
      this.updateTemplateVariable();
      this.inputValueChange.emit(value);
      this.tokenSeparate(value, this.tokenSeparators);
    }
  }
  tokenSeparate(inputValue, tokenSeparators) {
    const includesSeparators = (str, separators) => {
      for (let i = 0; i < separators.length; ++i) {
        if (str.lastIndexOf(separators[i]) > 0) {
          return true;
        }
      }
      return false;
    };
    const splitBySeparators = (str, separators) => {
      const reg = new RegExp(`[${separators.join()}]`);
      const array = str.split(reg).filter((token) => token);
      return [...new Set(array)];
    };
    if (inputValue && inputValue.length && tokenSeparators.length && this.mode !== "default" && includesSeparators(inputValue, tokenSeparators)) {
      const listOfLabel = splitBySeparators(inputValue, tokenSeparators);
      this.tokenize.next(listOfLabel);
    }
  }
  clearInputValue() {
    if (this.nzSelectSearchComponent) {
      this.nzSelectSearchComponent.clearInputValue();
    }
  }
  focus() {
    if (this.nzSelectSearchComponent) {
      this.nzSelectSearchComponent.focus();
    }
  }
  blur() {
    if (this.nzSelectSearchComponent) {
      this.nzSelectSearchComponent.blur();
    }
  }
  trackValue(_index, option) {
    return option.nzValue;
  }
  onDeleteItem(item) {
    if (!this.disabled && !item.nzDisabled) {
      this.deleteItem.next(item);
    }
  }
  constructor(elementRef, ngZone, noAnimation) {
    this.elementRef = elementRef;
    this.ngZone = ngZone;
    this.noAnimation = noAnimation;
    this.nzId = null;
    this.showSearch = false;
    this.placeHolder = null;
    this.open = false;
    this.maxTagCount = Infinity;
    this.autofocus = false;
    this.disabled = false;
    this.mode = "default";
    this.customTemplate = null;
    this.maxTagPlaceholder = null;
    this.removeIcon = null;
    this.listOfTopItem = [];
    this.tokenSeparators = [];
    this.tokenize = new EventEmitter();
    this.inputValueChange = new EventEmitter();
    this.deleteItem = new EventEmitter();
    this.listOfSlicedItem = [];
    this.isShowPlaceholder = true;
    this.isShowSingleLabel = false;
    this.isComposing = false;
    this.inputValue = null;
    this.destroy$ = new Subject();
  }
  ngOnChanges(changes) {
    const {
      listOfTopItem,
      maxTagCount,
      customTemplate,
      maxTagPlaceholder
    } = changes;
    if (listOfTopItem) {
      this.updateTemplateVariable();
    }
    if (listOfTopItem || maxTagCount || customTemplate || maxTagPlaceholder) {
      const listOfSlicedItem = this.listOfTopItem.slice(0, this.maxTagCount).map((o) => ({
        nzLabel: o.nzLabel,
        nzValue: o.nzValue,
        nzDisabled: o.nzDisabled,
        contentTemplateOutlet: this.customTemplate,
        contentTemplateOutletContext: o
      }));
      if (this.listOfTopItem.length > this.maxTagCount) {
        const exceededLabel = `+ ${this.listOfTopItem.length - this.maxTagCount} ...`;
        const listOfSelectedValue = this.listOfTopItem.map((item) => item.nzValue);
        const exceededItem = {
          nzLabel: exceededLabel,
          nzValue: "$$__nz_exceeded_item",
          nzDisabled: true,
          contentTemplateOutlet: this.maxTagPlaceholder,
          contentTemplateOutletContext: listOfSelectedValue.slice(this.maxTagCount)
        };
        listOfSlicedItem.push(exceededItem);
      }
      this.listOfSlicedItem = listOfSlicedItem;
    }
  }
  ngOnInit() {
    this.ngZone.runOutsideAngular(() => {
      fromEvent(this.elementRef.nativeElement, "click").pipe(takeUntil(this.destroy$)).subscribe((event) => {
        if (event.target !== this.nzSelectSearchComponent.inputElement.nativeElement) {
          this.nzSelectSearchComponent.focus();
        }
      });
      fromEvent(this.elementRef.nativeElement, "keydown").pipe(takeUntil(this.destroy$)).subscribe((event) => {
        if (event.target instanceof HTMLInputElement) {
          const inputValue = event.target.value;
          if (event.keyCode === BACKSPACE && this.mode !== "default" && !inputValue && this.listOfTopItem.length > 0) {
            event.preventDefault();
            this.ngZone.run(() => this.onDeleteItem(this.listOfTopItem[this.listOfTopItem.length - 1]));
          }
        }
      });
    });
  }
  ngOnDestroy() {
    this.destroy$.next();
  }
};
_NzSelectTopControlComponent.ɵfac = function NzSelectTopControlComponent_Factory(t) {
  return new (t || _NzSelectTopControlComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(NzNoAnimationDirective, 9));
};
_NzSelectTopControlComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzSelectTopControlComponent,
  selectors: [["nz-select-top-control"]],
  viewQuery: function NzSelectTopControlComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(NzSelectSearchComponent, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.nzSelectSearchComponent = _t.first);
    }
  },
  hostAttrs: [1, "ant-select-selector"],
  inputs: {
    nzId: "nzId",
    showSearch: "showSearch",
    placeHolder: "placeHolder",
    open: "open",
    maxTagCount: "maxTagCount",
    autofocus: "autofocus",
    disabled: "disabled",
    mode: "mode",
    customTemplate: "customTemplate",
    maxTagPlaceholder: "maxTagPlaceholder",
    removeIcon: "removeIcon",
    listOfTopItem: "listOfTopItem",
    tokenSeparators: "tokenSeparators"
  },
  outputs: {
    tokenize: "tokenize",
    inputValueChange: "inputValueChange",
    deleteItem: "deleteItem"
  },
  exportAs: ["nzSelectTopControl"],
  standalone: true,
  features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
  decls: 4,
  vars: 3,
  consts: [[3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], [3, "placeholder", 4, "ngIf"], [3, "isComposingChange", "valueChange", "nzId", "disabled", "value", "showInput", "mirrorSync", "autofocus", "focusTrigger"], [3, "deletable", "disabled", "removeIcon", "label", "contentTemplateOutlet", "contentTemplateOutletContext", 4, "ngIf"], [3, "deletable", "disabled", "removeIcon", "label", "contentTemplateOutlet", "contentTemplateOutletContext"], [3, "removeIcon", "label", "disabled", "contentTemplateOutlet", "deletable", "contentTemplateOutletContext", "delete", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "isComposingChange", "valueChange", "nzId", "disabled", "value", "autofocus", "showInput", "mirrorSync", "focusTrigger"], [3, "delete", "removeIcon", "label", "disabled", "contentTemplateOutlet", "deletable", "contentTemplateOutletContext"], [3, "placeholder"]],
  template: function NzSelectTopControlComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementContainerStart(0, 0);
      ɵɵtemplate(1, NzSelectTopControlComponent_ng_container_1_Template, 3, 8, "ng-container", 1)(2, NzSelectTopControlComponent_ng_container_2_Template, 3, 9, "ng-container", 2);
      ɵɵelementContainerEnd();
      ɵɵtemplate(3, NzSelectTopControlComponent_nz_select_placeholder_3_Template, 1, 1, "nz-select-placeholder", 3);
    }
    if (rf & 2) {
      ɵɵproperty("ngSwitch", ctx.mode);
      ɵɵadvance();
      ɵɵproperty("ngSwitchCase", "default");
      ɵɵadvance(2);
      ɵɵproperty("ngIf", ctx.isShowPlaceholder);
    }
  },
  dependencies: [NgSwitch, NzSelectSearchComponent, NgSwitchCase, NzSelectItemComponent, NgIf, NgSwitchDefault, NgForOf, NzSelectPlaceholderComponent],
  encapsulation: 2,
  changeDetection: 0
});
var NzSelectTopControlComponent = _NzSelectTopControlComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzSelectTopControlComponent, [{
    type: Component,
    args: [{
      selector: "nz-select-top-control",
      exportAs: "nzSelectTopControl",
      preserveWhitespaces: false,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      template: `
    <!--single mode-->
    <ng-container [ngSwitch]="mode">
      <ng-container *ngSwitchCase="'default'">
        <nz-select-search
          [nzId]="nzId"
          [disabled]="disabled"
          [value]="inputValue!"
          [showInput]="showSearch"
          [mirrorSync]="false"
          [autofocus]="autofocus"
          [focusTrigger]="open"
          (isComposingChange)="isComposingChange($event)"
          (valueChange)="onInputValueChange($event)"
        ></nz-select-search>
        <nz-select-item
          *ngIf="isShowSingleLabel"
          [deletable]="false"
          [disabled]="false"
          [removeIcon]="removeIcon"
          [label]="listOfTopItem[0].nzLabel"
          [contentTemplateOutlet]="customTemplate"
          [contentTemplateOutletContext]="listOfTopItem[0]"
        ></nz-select-item>
      </ng-container>
      <ng-container *ngSwitchDefault>
        <!--multiple or tags mode-->
        <nz-select-item
          *ngFor="let item of listOfSlicedItem; trackBy: trackValue"
          [removeIcon]="removeIcon"
          [label]="item.nzLabel"
          [disabled]="item.nzDisabled || disabled"
          [contentTemplateOutlet]="item.contentTemplateOutlet"
          [deletable]="true"
          [contentTemplateOutletContext]="item.contentTemplateOutletContext"
          (delete)="onDeleteItem(item.contentTemplateOutletContext)"
        ></nz-select-item>
        <nz-select-search
          [nzId]="nzId"
          [disabled]="disabled"
          [value]="inputValue!"
          [autofocus]="autofocus"
          [showInput]="true"
          [mirrorSync]="true"
          [focusTrigger]="open"
          (isComposingChange)="isComposingChange($event)"
          (valueChange)="onInputValueChange($event)"
        ></nz-select-search>
      </ng-container>
    </ng-container>
    <nz-select-placeholder *ngIf="isShowPlaceholder" [placeholder]="placeHolder"></nz-select-placeholder>
  `,
      host: {
        class: "ant-select-selector"
      },
      imports: [NgSwitch, NzSelectSearchComponent, NgSwitchCase, NzSelectItemComponent, NgIf, NgSwitchDefault, NgForOf, NzSelectPlaceholderComponent],
      standalone: true
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: NgZone
  }, {
    type: NzNoAnimationDirective,
    decorators: [{
      type: Host
    }, {
      type: Optional
    }]
  }], {
    nzId: [{
      type: Input
    }],
    showSearch: [{
      type: Input
    }],
    placeHolder: [{
      type: Input
    }],
    open: [{
      type: Input
    }],
    maxTagCount: [{
      type: Input
    }],
    autofocus: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    mode: [{
      type: Input
    }],
    customTemplate: [{
      type: Input
    }],
    maxTagPlaceholder: [{
      type: Input
    }],
    removeIcon: [{
      type: Input
    }],
    listOfTopItem: [{
      type: Input
    }],
    tokenSeparators: [{
      type: Input
    }],
    tokenize: [{
      type: Output
    }],
    inputValueChange: [{
      type: Output
    }],
    deleteItem: [{
      type: Output
    }],
    nzSelectSearchComponent: [{
      type: ViewChild,
      args: [NzSelectSearchComponent]
    }]
  });
})();
var defaultFilterOption = (searchValue, item) => {
  if (item && item.nzLabel) {
    return item.nzLabel.toString().toLowerCase().indexOf(searchValue.toLowerCase()) > -1;
  } else {
    return false;
  }
};
var NZ_CONFIG_MODULE_NAME = "select";
var _NzSelectComponent = class _NzSelectComponent {
  set nzShowArrow(value) {
    this._nzShowArrow = value;
  }
  get nzShowArrow() {
    return this._nzShowArrow === void 0 ? this.nzMode === "default" : this._nzShowArrow;
  }
  get isMaxTagCountSet() {
    return this.nzMaxMultipleCount !== Infinity;
  }
  generateTagItem(value) {
    return {
      nzValue: value,
      nzLabel: value,
      type: "item"
    };
  }
  onItemClick(value) {
    this.activatedValue = value;
    if (this.nzMode === "default") {
      if (this.listOfValue.length === 0 || !this.compareWith(this.listOfValue[0], value)) {
        this.updateListOfValue([value]);
      }
      this.setOpenState(false);
    } else {
      const targetIndex = this.listOfValue.findIndex((o) => this.compareWith(o, value));
      if (targetIndex !== -1) {
        const listOfValueAfterRemoved = this.listOfValue.filter((_, i) => i !== targetIndex);
        this.updateListOfValue(listOfValueAfterRemoved);
      } else if (this.listOfValue.length < this.nzMaxMultipleCount) {
        const listOfValueAfterAdded = [...this.listOfValue, value];
        this.updateListOfValue(listOfValueAfterAdded);
      }
      this.focus();
      if (this.nzAutoClearSearchValue) {
        this.clearInput();
      }
    }
  }
  onItemDelete(item) {
    const listOfSelectedValue = this.listOfValue.filter((v) => !this.compareWith(v, item.nzValue));
    this.updateListOfValue(listOfSelectedValue);
    this.clearInput();
  }
  updateListOfContainerItem() {
    let listOfContainerItem = this.listOfTagAndTemplateItem.filter((item) => !item.nzHide).filter((item) => {
      if (!this.nzServerSearch && this.searchValue) {
        return this.nzFilterOption(this.searchValue, item);
      } else {
        return true;
      }
    });
    if (this.nzMode === "tags" && this.searchValue) {
      const matchedItem = this.listOfTagAndTemplateItem.find((item) => item.nzLabel === this.searchValue);
      if (!matchedItem) {
        const tagItem = this.generateTagItem(this.searchValue);
        listOfContainerItem = [tagItem, ...listOfContainerItem];
        this.activatedValue = tagItem.nzValue;
      } else {
        this.activatedValue = matchedItem.nzValue;
      }
    }
    const activatedItem = listOfContainerItem.find((item) => item.nzLabel === this.searchValue) || listOfContainerItem.find((item) => this.compareWith(item.nzValue, this.activatedValue)) || listOfContainerItem.find((item) => this.compareWith(item.nzValue, this.listOfValue[0])) || listOfContainerItem[0];
    this.activatedValue = activatedItem && activatedItem.nzValue || null;
    let listOfGroupLabel = [];
    if (this.isReactiveDriven) {
      listOfGroupLabel = [...new Set(this.nzOptions.filter((o) => o.groupLabel).map((o) => o.groupLabel))];
    } else {
      if (this.listOfNzOptionGroupComponent) {
        listOfGroupLabel = this.listOfNzOptionGroupComponent.map((o) => o.nzLabel);
      }
    }
    listOfGroupLabel.forEach((label) => {
      const index = listOfContainerItem.findIndex((item) => label === item.groupLabel);
      if (index > -1) {
        const groupItem = {
          groupLabel: label,
          type: "group",
          key: label
        };
        listOfContainerItem.splice(index, 0, groupItem);
      }
    });
    this.listOfContainerItem = [...listOfContainerItem];
    this.updateCdkConnectedOverlayPositions();
  }
  clearInput() {
    this.nzSelectTopControlComponent.clearInputValue();
  }
  updateListOfValue(listOfValue) {
    const covertListToModel = (list, mode) => {
      if (mode === "default") {
        if (list.length > 0) {
          return list[0];
        } else {
          return null;
        }
      } else {
        return list;
      }
    };
    const model = covertListToModel(listOfValue, this.nzMode);
    if (this.value !== model) {
      this.listOfValue = listOfValue;
      this.listOfValue$.next(listOfValue);
      this.value = model;
      this.onChange(this.value);
    }
    this.isMaxLimitReached = this.nzMaxMultipleCount !== Infinity && this.listOfValue.length === this.nzMaxMultipleCount;
  }
  onTokenSeparate(listOfLabel) {
    const listOfMatchedValue = this.listOfTagAndTemplateItem.filter((item) => listOfLabel.findIndex((label) => label === item.nzLabel) !== -1).map((item) => item.nzValue).filter((item) => this.listOfValue.findIndex((v) => this.compareWith(v, item)) === -1);
    if (this.nzMode === "multiple") {
      this.updateListOfValue([...this.listOfValue, ...listOfMatchedValue]);
    } else if (this.nzMode === "tags") {
      const listOfUnMatchedLabel = listOfLabel.filter((label) => this.listOfTagAndTemplateItem.findIndex((item) => item.nzLabel === label) === -1);
      this.updateListOfValue([...this.listOfValue, ...listOfMatchedValue, ...listOfUnMatchedLabel]);
    }
    this.clearInput();
  }
  onKeyDown(e) {
    if (this.nzDisabled) {
      return;
    }
    const listOfFilteredOptionNotDisabled = this.listOfContainerItem.filter((item) => item.type === "item").filter((item) => !item.nzDisabled);
    const activatedIndex = listOfFilteredOptionNotDisabled.findIndex((item) => this.compareWith(item.nzValue, this.activatedValue));
    switch (e.keyCode) {
      case UP_ARROW:
        e.preventDefault();
        if (this.nzOpen && listOfFilteredOptionNotDisabled.length > 0) {
          const preIndex = activatedIndex > 0 ? activatedIndex - 1 : listOfFilteredOptionNotDisabled.length - 1;
          this.activatedValue = listOfFilteredOptionNotDisabled[preIndex].nzValue;
        }
        break;
      case DOWN_ARROW:
        e.preventDefault();
        if (this.nzOpen && listOfFilteredOptionNotDisabled.length > 0) {
          const nextIndex = activatedIndex < listOfFilteredOptionNotDisabled.length - 1 ? activatedIndex + 1 : 0;
          this.activatedValue = listOfFilteredOptionNotDisabled[nextIndex].nzValue;
        } else {
          this.setOpenState(true);
        }
        break;
      case ENTER:
        e.preventDefault();
        if (this.nzOpen) {
          if (isNotNil(this.activatedValue) && activatedIndex !== -1) {
            this.onItemClick(this.activatedValue);
          }
        } else {
          this.setOpenState(true);
        }
        break;
      case SPACE:
        if (!this.nzOpen) {
          this.setOpenState(true);
          e.preventDefault();
        }
        break;
      case TAB:
        if (this.nzSelectOnTab) {
          if (this.nzOpen) {
            e.preventDefault();
            if (isNotNil(this.activatedValue)) {
              this.onItemClick(this.activatedValue);
            }
          }
        } else {
          this.setOpenState(false);
        }
        break;
      case ESCAPE:
        break;
      default:
        if (!this.nzOpen) {
          this.setOpenState(true);
        }
    }
  }
  setOpenState(value) {
    if (this.nzOpen !== value) {
      this.nzOpen = value;
      this.nzOpenChange.emit(value);
      this.onOpenChange();
      this.cdr.markForCheck();
    }
  }
  onOpenChange() {
    this.updateCdkConnectedOverlayStatus();
    if (this.nzAutoClearSearchValue) {
      this.clearInput();
    }
  }
  onInputValueChange(value) {
    this.searchValue = value;
    this.updateListOfContainerItem();
    this.nzOnSearch.emit(value);
    this.updateCdkConnectedOverlayPositions();
  }
  onClearSelection() {
    this.updateListOfValue([]);
  }
  onClickOutside(event) {
    if (!this.host.nativeElement.contains(event.target)) {
      this.setOpenState(false);
    }
  }
  focus() {
    this.nzSelectTopControlComponent.focus();
  }
  blur() {
    this.nzSelectTopControlComponent.blur();
  }
  onPositionChange(position) {
    const placement = getPlacementName(position);
    this.dropDownPosition = placement;
  }
  updateCdkConnectedOverlayStatus() {
    if (this.platform.isBrowser && this.originElement.nativeElement) {
      const triggerWidth = this.triggerWidth;
      cancelRequestAnimationFrame(this.requestId);
      this.requestId = reqAnimFrame(() => {
        this.triggerWidth = this.originElement.nativeElement.getBoundingClientRect().width;
        if (triggerWidth !== this.triggerWidth) {
          this.cdr.detectChanges();
        }
      });
    }
  }
  updateCdkConnectedOverlayPositions() {
    reqAnimFrame(() => {
      this.cdkConnectedOverlay?.overlayRef?.updatePosition();
    });
  }
  constructor(ngZone, destroy$, nzConfigService, cdr, host, renderer, platform, focusMonitor, directionality, noAnimation, nzFormStatusService, nzFormNoStatusService) {
    this.ngZone = ngZone;
    this.destroy$ = destroy$;
    this.nzConfigService = nzConfigService;
    this.cdr = cdr;
    this.host = host;
    this.renderer = renderer;
    this.platform = platform;
    this.focusMonitor = focusMonitor;
    this.directionality = directionality;
    this.noAnimation = noAnimation;
    this.nzFormStatusService = nzFormStatusService;
    this.nzFormNoStatusService = nzFormNoStatusService;
    this._nzModuleName = NZ_CONFIG_MODULE_NAME;
    this.nzId = null;
    this.nzSize = "default";
    this.nzStatus = "";
    this.nzOptionHeightPx = 32;
    this.nzOptionOverflowSize = 8;
    this.nzDropdownClassName = null;
    this.nzDropdownMatchSelectWidth = true;
    this.nzDropdownStyle = null;
    this.nzNotFoundContent = void 0;
    this.nzPlaceHolder = null;
    this.nzPlacement = null;
    this.nzMaxTagCount = Infinity;
    this.nzDropdownRender = null;
    this.nzCustomTemplate = null;
    this.nzSuffixIcon = null;
    this.nzClearIcon = null;
    this.nzRemoveIcon = null;
    this.nzMenuItemSelectedIcon = null;
    this.nzTokenSeparators = [];
    this.nzMaxTagPlaceholder = null;
    this.nzMaxMultipleCount = Infinity;
    this.nzMode = "default";
    this.nzFilterOption = defaultFilterOption;
    this.compareWith = (o1, o2) => o1 === o2;
    this.nzAllowClear = false;
    this.nzBorderless = false;
    this.nzShowSearch = false;
    this.nzLoading = false;
    this.nzAutoFocus = false;
    this.nzAutoClearSearchValue = true;
    this.nzServerSearch = false;
    this.nzDisabled = false;
    this.nzOpen = false;
    this.nzSelectOnTab = false;
    this.nzBackdrop = false;
    this.nzOptions = [];
    this.nzOnSearch = new EventEmitter();
    this.nzScrollToBottom = new EventEmitter();
    this.nzOpenChange = new EventEmitter();
    this.nzBlur = new EventEmitter();
    this.nzFocus = new EventEmitter();
    this.listOfValue$ = new BehaviorSubject([]);
    this.listOfTemplateItem$ = new BehaviorSubject([]);
    this.listOfTagAndTemplateItem = [];
    this.searchValue = "";
    this.isReactiveDriven = false;
    this.requestId = -1;
    this.isNzDisableFirstChange = true;
    this.onChange = () => {
    };
    this.onTouched = () => {
    };
    this.dropDownPosition = "bottomLeft";
    this.triggerWidth = null;
    this.listOfContainerItem = [];
    this.listOfTopItem = [];
    this.activatedValue = null;
    this.listOfValue = [];
    this.focused = false;
    this.dir = "ltr";
    this.positions = [];
    this.isMaxLimitReached = false;
    this.prefixCls = "ant-select";
    this.statusCls = {};
    this.status = "";
    this.hasFeedback = false;
  }
  writeValue(modelValue) {
    if (this.value !== modelValue) {
      this.value = modelValue;
      const covertModelToList = (model, mode) => {
        if (model === null || model === void 0) {
          return [];
        } else if (mode === "default") {
          return [model];
        } else {
          return model;
        }
      };
      const listOfValue = covertModelToList(modelValue, this.nzMode);
      this.listOfValue = listOfValue;
      this.listOfValue$.next(listOfValue);
      this.cdr.markForCheck();
    }
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
    if (this.nzDisabled) {
      this.setOpenState(false);
    }
    this.cdr.markForCheck();
  }
  ngOnChanges(changes) {
    const {
      nzOpen,
      nzDisabled,
      nzOptions,
      nzStatus,
      nzPlacement
    } = changes;
    if (nzOpen) {
      this.onOpenChange();
    }
    if (nzDisabled && this.nzDisabled) {
      this.setOpenState(false);
    }
    if (nzOptions) {
      this.isReactiveDriven = true;
      const listOfOptions = this.nzOptions || [];
      const listOfTransformedItem = listOfOptions.map((item) => {
        return {
          template: item.label instanceof TemplateRef ? item.label : null,
          nzTitle: this.getTitle(item.title, item.label),
          nzLabel: typeof item.label === "string" || typeof item.label === "number" ? item.label : null,
          nzValue: item.value,
          nzDisabled: item.disabled || false,
          nzHide: item.hide || false,
          nzCustomContent: item.label instanceof TemplateRef,
          groupLabel: item.groupLabel || null,
          type: "item",
          key: item.key === void 0 ? item.value : item.key
        };
      });
      this.listOfTemplateItem$.next(listOfTransformedItem);
    }
    if (nzStatus) {
      this.setStatusStyles(this.nzStatus, this.hasFeedback);
    }
    if (nzPlacement) {
      const {
        currentValue
      } = nzPlacement;
      this.dropDownPosition = currentValue;
      const listOfPlacement = ["bottomLeft", "topLeft", "bottomRight", "topRight"];
      if (currentValue && listOfPlacement.includes(currentValue)) {
        this.positions = [POSITION_MAP[currentValue]];
      } else {
        this.positions = listOfPlacement.map((e) => POSITION_MAP[e]);
      }
    }
  }
  ngOnInit() {
    this.nzFormStatusService?.formStatusChanges.pipe(distinctUntilChanged((pre, cur) => {
      return pre.status === cur.status && pre.hasFeedback === cur.hasFeedback;
    }), withLatestFrom(this.nzFormNoStatusService ? this.nzFormNoStatusService.noFormStatus : of(false)), map(([{
      status,
      hasFeedback
    }, noStatus]) => ({
      status: noStatus ? "" : status,
      hasFeedback
    })), takeUntil(this.destroy$)).subscribe(({
      status,
      hasFeedback
    }) => {
      this.setStatusStyles(status, hasFeedback);
    });
    this.focusMonitor.monitor(this.host, true).pipe(takeUntil(this.destroy$)).subscribe((focusOrigin) => {
      if (!focusOrigin) {
        this.focused = false;
        this.cdr.markForCheck();
        this.nzBlur.emit();
        Promise.resolve().then(() => {
          this.onTouched();
        });
      } else {
        this.focused = true;
        this.cdr.markForCheck();
        this.nzFocus.emit();
      }
    });
    combineLatest([this.listOfValue$, this.listOfTemplateItem$]).pipe(takeUntil(this.destroy$)).subscribe(([listOfSelectedValue, listOfTemplateItem]) => {
      const listOfTagItem = listOfSelectedValue.filter(() => this.nzMode === "tags").filter((value) => listOfTemplateItem.findIndex((o) => this.compareWith(o.nzValue, value)) === -1).map((value) => this.listOfTopItem.find((o) => this.compareWith(o.nzValue, value)) || this.generateTagItem(value));
      this.listOfTagAndTemplateItem = [...listOfTemplateItem, ...listOfTagItem];
      this.listOfTopItem = this.listOfValue.map((v) => [...this.listOfTagAndTemplateItem, ...this.listOfTopItem].find((item) => this.compareWith(v, item.nzValue))).filter((item) => !!item);
      this.updateListOfContainerItem();
    });
    this.directionality.change?.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
      this.dir = direction;
      this.cdr.detectChanges();
    });
    this.nzConfigService.getConfigChangeEventForComponent("select").pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.cdr.markForCheck();
    });
    this.dir = this.directionality.value;
    this.ngZone.runOutsideAngular(() => fromEvent(this.host.nativeElement, "click").pipe(takeUntil(this.destroy$)).subscribe(() => {
      if (this.nzOpen && this.nzShowSearch || this.nzDisabled) {
        return;
      }
      this.ngZone.run(() => this.setOpenState(!this.nzOpen));
    }));
    this.cdkConnectedOverlay.overlayKeydown.pipe(takeUntil(this.destroy$)).subscribe((event) => {
      if (event.keyCode === ESCAPE) {
        this.setOpenState(false);
      }
    });
  }
  ngAfterContentInit() {
    if (!this.isReactiveDriven) {
      merge(this.listOfNzOptionGroupComponent.changes, this.listOfNzOptionComponent.changes).pipe(startWith(true), switchMap(() => merge(...[this.listOfNzOptionComponent.changes, this.listOfNzOptionGroupComponent.changes, ...this.listOfNzOptionComponent.map((option) => option.changes), ...this.listOfNzOptionGroupComponent.map((option) => option.changes)]).pipe(startWith(true))), takeUntil(this.destroy$)).subscribe(() => {
        const listOfOptionInterface = this.listOfNzOptionComponent.toArray().map((item) => {
          const {
            template,
            nzLabel,
            nzValue,
            nzKey,
            nzDisabled,
            nzHide,
            nzCustomContent,
            groupLabel
          } = item;
          return {
            template,
            nzLabel,
            nzValue,
            nzDisabled,
            nzHide,
            nzCustomContent,
            groupLabel,
            nzTitle: this.getTitle(item.nzTitle, item.nzLabel),
            type: "item",
            key: nzKey === void 0 ? nzValue : nzKey
          };
        });
        this.listOfTemplateItem$.next(listOfOptionInterface);
        this.cdr.markForCheck();
      });
    }
  }
  ngOnDestroy() {
    cancelRequestAnimationFrame(this.requestId);
    this.focusMonitor.stopMonitoring(this.host);
  }
  setStatusStyles(status, hasFeedback) {
    this.status = status;
    this.hasFeedback = hasFeedback;
    this.cdr.markForCheck();
    this.statusCls = getStatusClassNames(this.prefixCls, status, hasFeedback);
    Object.keys(this.statusCls).forEach((status2) => {
      if (this.statusCls[status2]) {
        this.renderer.addClass(this.host.nativeElement, status2);
      } else {
        this.renderer.removeClass(this.host.nativeElement, status2);
      }
    });
  }
  getTitle(title, label) {
    let rawTitle = void 0;
    if (title === void 0) {
      if (typeof label === "string" || typeof label === "number") {
        rawTitle = label.toString();
      }
    } else if (typeof title === "string" || typeof title === "number") {
      rawTitle = title.toString();
    }
    return rawTitle;
  }
};
_NzSelectComponent.ɵfac = function NzSelectComponent_Factory(t) {
  return new (t || _NzSelectComponent)(ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(NzDestroyService), ɵɵdirectiveInject(NzConfigService), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(Platform), ɵɵdirectiveInject(FocusMonitor), ɵɵdirectiveInject(Directionality, 8), ɵɵdirectiveInject(NzNoAnimationDirective, 9), ɵɵdirectiveInject(NzFormStatusService, 8), ɵɵdirectiveInject(NzFormNoStatusService, 8));
};
_NzSelectComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzSelectComponent,
  selectors: [["nz-select"]],
  contentQueries: function NzSelectComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, NzOptionComponent, 5);
      ɵɵcontentQuery(dirIndex, NzOptionGroupComponent, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.listOfNzOptionComponent = _t);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.listOfNzOptionGroupComponent = _t);
    }
  },
  viewQuery: function NzSelectComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(CdkOverlayOrigin, 7, ElementRef);
      ɵɵviewQuery(CdkConnectedOverlay, 7);
      ɵɵviewQuery(NzSelectTopControlComponent, 7);
      ɵɵviewQuery(NzOptionGroupComponent, 7, ElementRef);
      ɵɵviewQuery(NzSelectTopControlComponent, 7, ElementRef);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.originElement = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.cdkConnectedOverlay = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.nzSelectTopControlComponent = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.nzOptionGroupComponentElement = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.nzSelectTopControlComponentElement = _t.first);
    }
  },
  hostAttrs: [1, "ant-select"],
  hostVars: 26,
  hostBindings: function NzSelectComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("ant-select-in-form-item", !!ctx.nzFormStatusService)("ant-select-lg", ctx.nzSize === "large")("ant-select-sm", ctx.nzSize === "small")("ant-select-show-arrow", ctx.nzShowArrow)("ant-select-disabled", ctx.nzDisabled)("ant-select-show-search", (ctx.nzShowSearch || ctx.nzMode !== "default") && !ctx.nzDisabled)("ant-select-allow-clear", ctx.nzAllowClear)("ant-select-borderless", ctx.nzBorderless)("ant-select-open", ctx.nzOpen)("ant-select-focused", ctx.nzOpen || ctx.focused)("ant-select-single", ctx.nzMode === "default")("ant-select-multiple", ctx.nzMode !== "default")("ant-select-rtl", ctx.dir === "rtl");
    }
  },
  inputs: {
    nzId: "nzId",
    nzSize: "nzSize",
    nzStatus: "nzStatus",
    nzOptionHeightPx: "nzOptionHeightPx",
    nzOptionOverflowSize: "nzOptionOverflowSize",
    nzDropdownClassName: "nzDropdownClassName",
    nzDropdownMatchSelectWidth: "nzDropdownMatchSelectWidth",
    nzDropdownStyle: "nzDropdownStyle",
    nzNotFoundContent: "nzNotFoundContent",
    nzPlaceHolder: "nzPlaceHolder",
    nzPlacement: "nzPlacement",
    nzMaxTagCount: "nzMaxTagCount",
    nzDropdownRender: "nzDropdownRender",
    nzCustomTemplate: "nzCustomTemplate",
    nzSuffixIcon: "nzSuffixIcon",
    nzClearIcon: "nzClearIcon",
    nzRemoveIcon: "nzRemoveIcon",
    nzMenuItemSelectedIcon: "nzMenuItemSelectedIcon",
    nzTokenSeparators: "nzTokenSeparators",
    nzMaxTagPlaceholder: "nzMaxTagPlaceholder",
    nzMaxMultipleCount: "nzMaxMultipleCount",
    nzMode: "nzMode",
    nzFilterOption: "nzFilterOption",
    compareWith: "compareWith",
    nzAllowClear: "nzAllowClear",
    nzBorderless: "nzBorderless",
    nzShowSearch: "nzShowSearch",
    nzLoading: "nzLoading",
    nzAutoFocus: "nzAutoFocus",
    nzAutoClearSearchValue: "nzAutoClearSearchValue",
    nzServerSearch: "nzServerSearch",
    nzDisabled: "nzDisabled",
    nzOpen: "nzOpen",
    nzSelectOnTab: "nzSelectOnTab",
    nzBackdrop: "nzBackdrop",
    nzOptions: "nzOptions",
    nzShowArrow: "nzShowArrow"
  },
  outputs: {
    nzOnSearch: "nzOnSearch",
    nzScrollToBottom: "nzScrollToBottom",
    nzOpenChange: "nzOpenChange",
    nzBlur: "nzBlur",
    nzFocus: "nzFocus"
  },
  exportAs: ["nzSelect"],
  standalone: true,
  features: [ɵɵProvidersFeature([NzDestroyService, {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => _NzSelectComponent),
    multi: true
  }]), ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
  decls: 5,
  vars: 25,
  consts: [["origin", "cdkOverlayOrigin"], ["feedbackIconTpl", ""], ["cdkOverlayOrigin", "", 3, "inputValueChange", "tokenize", "deleteItem", "keydown", "nzId", "open", "disabled", "mode", "nzNoAnimation", "maxTagPlaceholder", "removeIcon", "placeHolder", "maxTagCount", "customTemplate", "tokenSeparators", "showSearch", "autofocus", "listOfTopItem"], [3, "showArrow", "loading", "search", "suffixIcon", "feedbackIcon", "nzMaxMultipleCount", "listOfValue", "isMaxTagCountSet", 4, "ngIf"], [3, "clearIcon", "clear", 4, "ngIf"], ["cdkConnectedOverlay", "", "nzConnectedOverlay", "", 3, "overlayOutsideClick", "detach", "positionChange", "cdkConnectedOverlayHasBackdrop", "cdkConnectedOverlayMinWidth", "cdkConnectedOverlayWidth", "cdkConnectedOverlayOrigin", "cdkConnectedOverlayTransformOriginOn", "cdkConnectedOverlayPanelClass", "cdkConnectedOverlayOpen", "cdkConnectedOverlayPositions"], [3, "showArrow", "loading", "search", "suffixIcon", "feedbackIcon", "nzMaxMultipleCount", "listOfValue", "isMaxTagCountSet"], [3, "status", 4, "ngIf"], [3, "status"], [3, "clear", "clearIcon"], [3, "keydown", "itemClick", "scrollToBottom", "ngStyle", "itemSize", "maxItemLength", "matchWidth", "nzNoAnimation", "listOfContainerItem", "menuItemSelectedIcon", "notFoundContent", "activatedValue", "listOfSelectedValue", "dropdownRender", "compareWith", "mode", "isMaxLimitReached"]],
  template: function NzSelectComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = ɵɵgetCurrentView();
      ɵɵelementStart(0, "nz-select-top-control", 2, 0);
      ɵɵlistener("inputValueChange", function NzSelectComponent_Template_nz_select_top_control_inputValueChange_0_listener($event) {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.onInputValueChange($event));
      })("tokenize", function NzSelectComponent_Template_nz_select_top_control_tokenize_0_listener($event) {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.onTokenSeparate($event));
      })("deleteItem", function NzSelectComponent_Template_nz_select_top_control_deleteItem_0_listener($event) {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.onItemDelete($event));
      })("keydown", function NzSelectComponent_Template_nz_select_top_control_keydown_0_listener($event) {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.onKeyDown($event));
      });
      ɵɵelementEnd();
      ɵɵtemplate(2, NzSelectComponent_nz_select_arrow_2_Template, 3, 8, "nz-select-arrow", 3)(3, NzSelectComponent_nz_select_clear_3_Template, 1, 1, "nz-select-clear", 4)(4, NzSelectComponent_ng_template_4_Template, 1, 24, "ng-template", 5);
      ɵɵlistener("overlayOutsideClick", function NzSelectComponent_Template_ng_template_overlayOutsideClick_4_listener($event) {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.onClickOutside($event));
      })("detach", function NzSelectComponent_Template_ng_template_detach_4_listener() {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.setOpenState(false));
      })("positionChange", function NzSelectComponent_Template_ng_template_positionChange_4_listener($event) {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.onPositionChange($event));
      });
    }
    if (rf & 2) {
      const origin_r6 = ɵɵreference(1);
      ɵɵproperty("nzId", ctx.nzId)("open", ctx.nzOpen)("disabled", ctx.nzDisabled)("mode", ctx.nzMode)("@.disabled", !!(ctx.noAnimation == null ? null : ctx.noAnimation.nzNoAnimation))("nzNoAnimation", ctx.noAnimation == null ? null : ctx.noAnimation.nzNoAnimation)("maxTagPlaceholder", ctx.nzMaxTagPlaceholder)("removeIcon", ctx.nzRemoveIcon)("placeHolder", ctx.nzPlaceHolder)("maxTagCount", ctx.nzMaxTagCount)("customTemplate", ctx.nzCustomTemplate)("tokenSeparators", ctx.nzTokenSeparators)("showSearch", ctx.nzShowSearch)("autofocus", ctx.nzAutoFocus)("listOfTopItem", ctx.listOfTopItem);
      ɵɵadvance(2);
      ɵɵproperty("ngIf", ctx.nzShowArrow || ctx.hasFeedback && !!ctx.status || ctx.isMaxTagCountSet);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.nzAllowClear && !ctx.nzDisabled && ctx.listOfValue.length);
      ɵɵadvance();
      ɵɵproperty("cdkConnectedOverlayHasBackdrop", ctx.nzBackdrop)("cdkConnectedOverlayMinWidth", ctx.nzDropdownMatchSelectWidth ? null : ctx.triggerWidth)("cdkConnectedOverlayWidth", ctx.nzDropdownMatchSelectWidth ? ctx.triggerWidth : null)("cdkConnectedOverlayOrigin", origin_r6)("cdkConnectedOverlayTransformOriginOn", ".ant-select-dropdown")("cdkConnectedOverlayPanelClass", ctx.nzDropdownClassName)("cdkConnectedOverlayOpen", ctx.nzOpen)("cdkConnectedOverlayPositions", ctx.positions);
    }
  },
  dependencies: [NzSelectTopControlComponent, CdkOverlayOrigin, NzNoAnimationDirective, NzSelectArrowComponent, NgIf, NzFormPatchModule, NzFormItemFeedbackIconComponent, NzSelectClearComponent, CdkConnectedOverlay, NzOverlayModule, NzConnectedOverlayDirective, NzOptionContainerComponent, NgStyle],
  encapsulation: 2,
  data: {
    animation: [slideMotion]
  },
  changeDetection: 0
});
var NzSelectComponent = _NzSelectComponent;
__decorate([WithConfig()], NzSelectComponent.prototype, "nzSuffixIcon", void 0);
__decorate([InputBoolean()], NzSelectComponent.prototype, "nzAllowClear", void 0);
__decorate([WithConfig(), InputBoolean()], NzSelectComponent.prototype, "nzBorderless", void 0);
__decorate([InputBoolean()], NzSelectComponent.prototype, "nzShowSearch", void 0);
__decorate([InputBoolean()], NzSelectComponent.prototype, "nzLoading", void 0);
__decorate([InputBoolean()], NzSelectComponent.prototype, "nzAutoFocus", void 0);
__decorate([InputBoolean()], NzSelectComponent.prototype, "nzAutoClearSearchValue", void 0);
__decorate([InputBoolean()], NzSelectComponent.prototype, "nzServerSearch", void 0);
__decorate([InputBoolean()], NzSelectComponent.prototype, "nzDisabled", void 0);
__decorate([InputBoolean()], NzSelectComponent.prototype, "nzOpen", void 0);
__decorate([InputBoolean()], NzSelectComponent.prototype, "nzSelectOnTab", void 0);
__decorate([WithConfig(), InputBoolean()], NzSelectComponent.prototype, "nzBackdrop", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzSelectComponent, [{
    type: Component,
    args: [{
      selector: "nz-select",
      exportAs: "nzSelect",
      preserveWhitespaces: false,
      providers: [NzDestroyService, {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => NzSelectComponent),
        multi: true
      }],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      animations: [slideMotion],
      template: `
    <nz-select-top-control
      cdkOverlayOrigin
      #origin="cdkOverlayOrigin"
      [nzId]="nzId"
      [open]="nzOpen"
      [disabled]="nzDisabled"
      [mode]="nzMode"
      [@.disabled]="!!noAnimation?.nzNoAnimation"
      [nzNoAnimation]="noAnimation?.nzNoAnimation"
      [maxTagPlaceholder]="nzMaxTagPlaceholder"
      [removeIcon]="nzRemoveIcon"
      [placeHolder]="nzPlaceHolder"
      [maxTagCount]="nzMaxTagCount"
      [customTemplate]="nzCustomTemplate"
      [tokenSeparators]="nzTokenSeparators"
      [showSearch]="nzShowSearch"
      [autofocus]="nzAutoFocus"
      [listOfTopItem]="listOfTopItem"
      (inputValueChange)="onInputValueChange($event)"
      (tokenize)="onTokenSeparate($event)"
      (deleteItem)="onItemDelete($event)"
      (keydown)="onKeyDown($event)"
    ></nz-select-top-control>
    <nz-select-arrow
      *ngIf="nzShowArrow || (hasFeedback && !!status) || isMaxTagCountSet"
      [showArrow]="nzShowArrow"
      [loading]="nzLoading"
      [search]="nzOpen && nzShowSearch"
      [suffixIcon]="nzSuffixIcon"
      [feedbackIcon]="feedbackIconTpl"
      [nzMaxMultipleCount]="nzMaxMultipleCount"
      [listOfValue]="listOfValue"
      [isMaxTagCountSet]="isMaxTagCountSet"
    >
      <ng-template #feedbackIconTpl>
        <nz-form-item-feedback-icon *ngIf="hasFeedback && !!status" [status]="status"></nz-form-item-feedback-icon>
      </ng-template>
    </nz-select-arrow>

    <nz-select-clear
      *ngIf="nzAllowClear && !nzDisabled && listOfValue.length"
      [clearIcon]="nzClearIcon"
      (clear)="onClearSelection()"
    ></nz-select-clear>
    <ng-template
      cdkConnectedOverlay
      nzConnectedOverlay
      [cdkConnectedOverlayHasBackdrop]="nzBackdrop"
      [cdkConnectedOverlayMinWidth]="$any(nzDropdownMatchSelectWidth ? null : triggerWidth)"
      [cdkConnectedOverlayWidth]="$any(nzDropdownMatchSelectWidth ? triggerWidth : null)"
      [cdkConnectedOverlayOrigin]="origin"
      [cdkConnectedOverlayTransformOriginOn]="'.ant-select-dropdown'"
      [cdkConnectedOverlayPanelClass]="nzDropdownClassName!"
      [cdkConnectedOverlayOpen]="nzOpen"
      [cdkConnectedOverlayPositions]="positions"
      (overlayOutsideClick)="onClickOutside($event)"
      (detach)="setOpenState(false)"
      (positionChange)="onPositionChange($event)"
    >
      <nz-option-container
        [ngStyle]="nzDropdownStyle"
        [itemSize]="nzOptionHeightPx"
        [maxItemLength]="nzOptionOverflowSize"
        [matchWidth]="nzDropdownMatchSelectWidth"
        [class.ant-select-dropdown-placement-bottomLeft]="dropDownPosition === 'bottomLeft'"
        [class.ant-select-dropdown-placement-topLeft]="dropDownPosition === 'topLeft'"
        [class.ant-select-dropdown-placement-bottomRight]="dropDownPosition === 'bottomRight'"
        [class.ant-select-dropdown-placement-topRight]="dropDownPosition === 'topRight'"
        [@slideMotion]="'enter'"
        [@.disabled]="!!noAnimation?.nzNoAnimation"
        [nzNoAnimation]="noAnimation?.nzNoAnimation"
        [listOfContainerItem]="listOfContainerItem"
        [menuItemSelectedIcon]="nzMenuItemSelectedIcon"
        [notFoundContent]="nzNotFoundContent"
        [activatedValue]="activatedValue"
        [listOfSelectedValue]="listOfValue"
        [dropdownRender]="nzDropdownRender"
        [compareWith]="compareWith"
        [mode]="nzMode"
        [isMaxLimitReached]="isMaxLimitReached"
        (keydown)="onKeyDown($event)"
        (itemClick)="onItemClick($event)"
        (scrollToBottom)="nzScrollToBottom.emit()"
      ></nz-option-container>
    </ng-template>
  `,
      host: {
        class: "ant-select",
        "[class.ant-select-in-form-item]": "!!nzFormStatusService",
        "[class.ant-select-lg]": 'nzSize === "large"',
        "[class.ant-select-sm]": 'nzSize === "small"',
        "[class.ant-select-show-arrow]": `nzShowArrow`,
        "[class.ant-select-disabled]": "nzDisabled",
        "[class.ant-select-show-search]": `(nzShowSearch || nzMode !== 'default') && !nzDisabled`,
        "[class.ant-select-allow-clear]": "nzAllowClear",
        "[class.ant-select-borderless]": "nzBorderless",
        "[class.ant-select-open]": "nzOpen",
        "[class.ant-select-focused]": "nzOpen || focused",
        "[class.ant-select-single]": `nzMode === 'default'`,
        "[class.ant-select-multiple]": `nzMode !== 'default'`,
        "[class.ant-select-rtl]": `dir === 'rtl'`
      },
      imports: [NzSelectTopControlComponent, CdkOverlayOrigin, NzNoAnimationDirective, NzSelectArrowComponent, NgIf, NzFormPatchModule, NzSelectClearComponent, CdkConnectedOverlay, NzOverlayModule, NzOptionContainerComponent, NgStyle],
      standalone: true
    }]
  }], () => [{
    type: NgZone
  }, {
    type: NzDestroyService
  }, {
    type: NzConfigService
  }, {
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: Platform
  }, {
    type: FocusMonitor
  }, {
    type: Directionality,
    decorators: [{
      type: Optional
    }]
  }, {
    type: NzNoAnimationDirective,
    decorators: [{
      type: Host
    }, {
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
    nzId: [{
      type: Input
    }],
    nzSize: [{
      type: Input
    }],
    nzStatus: [{
      type: Input
    }],
    nzOptionHeightPx: [{
      type: Input
    }],
    nzOptionOverflowSize: [{
      type: Input
    }],
    nzDropdownClassName: [{
      type: Input
    }],
    nzDropdownMatchSelectWidth: [{
      type: Input
    }],
    nzDropdownStyle: [{
      type: Input
    }],
    nzNotFoundContent: [{
      type: Input
    }],
    nzPlaceHolder: [{
      type: Input
    }],
    nzPlacement: [{
      type: Input
    }],
    nzMaxTagCount: [{
      type: Input
    }],
    nzDropdownRender: [{
      type: Input
    }],
    nzCustomTemplate: [{
      type: Input
    }],
    nzSuffixIcon: [{
      type: Input
    }],
    nzClearIcon: [{
      type: Input
    }],
    nzRemoveIcon: [{
      type: Input
    }],
    nzMenuItemSelectedIcon: [{
      type: Input
    }],
    nzTokenSeparators: [{
      type: Input
    }],
    nzMaxTagPlaceholder: [{
      type: Input
    }],
    nzMaxMultipleCount: [{
      type: Input
    }],
    nzMode: [{
      type: Input
    }],
    nzFilterOption: [{
      type: Input
    }],
    compareWith: [{
      type: Input
    }],
    nzAllowClear: [{
      type: Input
    }],
    nzBorderless: [{
      type: Input
    }],
    nzShowSearch: [{
      type: Input
    }],
    nzLoading: [{
      type: Input
    }],
    nzAutoFocus: [{
      type: Input
    }],
    nzAutoClearSearchValue: [{
      type: Input
    }],
    nzServerSearch: [{
      type: Input
    }],
    nzDisabled: [{
      type: Input
    }],
    nzOpen: [{
      type: Input
    }],
    nzSelectOnTab: [{
      type: Input
    }],
    nzBackdrop: [{
      type: Input
    }],
    nzOptions: [{
      type: Input
    }],
    nzShowArrow: [{
      type: Input
    }],
    nzOnSearch: [{
      type: Output
    }],
    nzScrollToBottom: [{
      type: Output
    }],
    nzOpenChange: [{
      type: Output
    }],
    nzBlur: [{
      type: Output
    }],
    nzFocus: [{
      type: Output
    }],
    originElement: [{
      type: ViewChild,
      args: [CdkOverlayOrigin, {
        static: true,
        read: ElementRef
      }]
    }],
    cdkConnectedOverlay: [{
      type: ViewChild,
      args: [CdkConnectedOverlay, {
        static: true
      }]
    }],
    nzSelectTopControlComponent: [{
      type: ViewChild,
      args: [NzSelectTopControlComponent, {
        static: true
      }]
    }],
    listOfNzOptionComponent: [{
      type: ContentChildren,
      args: [NzOptionComponent, {
        descendants: true
      }]
    }],
    listOfNzOptionGroupComponent: [{
      type: ContentChildren,
      args: [NzOptionGroupComponent, {
        descendants: true
      }]
    }],
    nzOptionGroupComponentElement: [{
      type: ViewChild,
      args: [NzOptionGroupComponent, {
        static: true,
        read: ElementRef
      }]
    }],
    nzSelectTopControlComponentElement: [{
      type: ViewChild,
      args: [NzSelectTopControlComponent, {
        static: true,
        read: ElementRef
      }]
    }]
  });
})();
var _NzSelectModule = class _NzSelectModule {
};
_NzSelectModule.ɵfac = function NzSelectModule_Factory(t) {
  return new (t || _NzSelectModule)();
};
_NzSelectModule.ɵmod = ɵɵdefineNgModule({
  type: _NzSelectModule,
  imports: [NzOptionComponent, NzSelectComponent, NzOptionContainerComponent, NzOptionGroupComponent, NzOptionItemComponent, NzSelectTopControlComponent, NzSelectSearchComponent, NzSelectItemComponent, NzSelectClearComponent, NzSelectArrowComponent, NzSelectPlaceholderComponent, NzOptionItemGroupComponent],
  exports: [NzOptionComponent, NzSelectComponent, NzOptionGroupComponent, NzSelectArrowComponent, NzSelectClearComponent, NzSelectItemComponent, NzSelectPlaceholderComponent, NzSelectSearchComponent]
});
_NzSelectModule.ɵinj = ɵɵdefineInjector({
  imports: [NzSelectComponent, NzOptionContainerComponent, NzOptionItemComponent, NzSelectTopControlComponent, NzSelectSearchComponent, NzSelectItemComponent, NzSelectClearComponent, NzSelectArrowComponent, NzSelectPlaceholderComponent, NzOptionItemGroupComponent]
});
var NzSelectModule = _NzSelectModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzSelectModule, [{
    type: NgModule,
    args: [{
      imports: [NzOptionComponent, NzSelectComponent, NzOptionContainerComponent, NzOptionGroupComponent, NzOptionItemComponent, NzSelectTopControlComponent, NzSelectSearchComponent, NzSelectItemComponent, NzSelectClearComponent, NzSelectArrowComponent, NzSelectPlaceholderComponent, NzOptionItemGroupComponent],
      exports: [NzOptionComponent, NzSelectComponent, NzOptionGroupComponent, NzSelectArrowComponent, NzSelectClearComponent, NzSelectItemComponent, NzSelectPlaceholderComponent, NzSelectSearchComponent]
    }]
  }], null, null);
})();

export {
  NzEmbedEmptyComponent,
  NzEmptyModule,
  NzOptionGroupComponent,
  NzOptionItemGroupComponent,
  NzOptionItemComponent,
  NzOptionContainerComponent,
  NzOptionComponent,
  NzSelectArrowComponent,
  NzSelectClearComponent,
  NzSelectItemComponent,
  NzSelectPlaceholderComponent,
  NzSelectSearchComponent,
  NzSelectTopControlComponent,
  NzSelectComponent,
  NzSelectModule
};
//# sourceMappingURL=chunk-ZG2QJFXB.js.map
