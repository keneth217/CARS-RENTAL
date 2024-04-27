import {
  NzSpinComponent
} from "./chunk-RDUCPWED.js";
import {
  NzEmbedEmptyComponent,
  NzEmptyModule,
  NzOptionComponent,
  NzSelectComponent,
  NzSelectModule
} from "./chunk-ZG2QJFXB.js";
import {
  MenuService,
  NzIsMenuInsideDropDownToken,
  NzMenuDirective,
  NzMenuItemComponent,
  NzMenuModule
} from "./chunk-FVT4LRN6.js";
import {
  NzRadioComponent
} from "./chunk-HLFLNXT2.js";
import {
  FocusMonitor
} from "./chunk-VQTGEUV4.js";
import "./chunk-ZAE72LJJ.js";
import {
  NzResizeObserver
} from "./chunk-OC6Z4MTO.js";
import {
  NzI18nService
} from "./chunk-OA5SA4XI.js";
import {
  NzNoAnimationDirective,
  POSITION_MAP
} from "./chunk-KA3MSJAB.js";
import {
  CdkFixedSizeVirtualScroll,
  CdkVirtualForOf,
  CdkVirtualScrollViewport,
  ConnectionPositionPair,
  Overlay,
  ScrollingModule,
  TemplatePortal,
  slideMotion
} from "./chunk-Y2LXB4LJ.js";
import {
  NzOutletModule,
  NzStringTemplateOutletDirective
} from "./chunk-3QNY2SH4.js";
import {
  NzFormStatusService
} from "./chunk-PGVEYJVB.js";
import {
  ESCAPE,
  hasModifierKey
} from "./chunk-T4JA2NQD.js";
import {
  NzBreakpointEnum,
  NzBreakpointService,
  NzDestroyService,
  NzResizeService,
  gridResponsiveMap
} from "./chunk-7UXDNT2U.js";
import "./chunk-ICUNVL6H.js";
import {
  CheckboxControlValueAccessor,
  FormsModule,
  NG_VALUE_ACCESSOR,
  NgControlStatus,
  NgModel
} from "./chunk-QS47QVHG.js";
import {
  NzButtonComponent,
  NzButtonGroupComponent,
  NzButtonModule
} from "./chunk-GP2JUUTZ.js";
import {
  NzWaveDirective
} from "./chunk-HMAJJIJ3.js";
import {
  NzTransitionPatchDirective
} from "./chunk-DKLNMX2E.js";
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
  InputNumber,
  arraysEqual,
  isNil,
  measureScrollbar,
  toNumber
} from "./chunk-PGMGKWAT.js";
import {
  Platform
} from "./chunk-2FVUDUB4.js";
import "./chunk-WE3FPTZW.js";
import "./chunk-SQLFNYNC.js";
import "./chunk-B4HWDAU2.js";
import "./chunk-UPSRJ2V7.js";
import "./chunk-WCYJYOZL.js";
import {
  AsyncPipe,
  NgClass,
  NgForOf,
  NgIf,
  NgStyle,
  NgTemplateOutlet
} from "./chunk-KKPSRQXY.js";
import {
  BehaviorSubject,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  ContentChildren,
  Directive,
  EMPTY,
  ElementRef,
  EventEmitter,
  Host,
  Injectable,
  Input,
  NgModule,
  NgZone,
  Optional,
  Output,
  Renderer2,
  ReplaySubject,
  Subject,
  Subscription,
  TemplateRef,
  ViewChild,
  ViewChildren,
  ViewContainerRef,
  ViewEncapsulation$1,
  __decorate,
  auditTime,
  combineLatest,
  debounceTime,
  delay,
  distinctUntilChanged,
  filter,
  first,
  forwardRef,
  fromEvent,
  map,
  mapTo,
  merge,
  mergeMap,
  of,
  setClassMetadata,
  skip,
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
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵhostProperty,
  ɵɵinject,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction2,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-QIBLZIJK.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-J4B6MK7R.js";

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-dropdown.mjs
var _c0 = ["*"];
function NzDropdownMenuComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 0);
    ɵɵlistener("@slideMotion.done", function NzDropdownMenuComponent_ng_template_0_Template_div_animation_slideMotion_done_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onAnimationEvent($event));
    })("mouseenter", function NzDropdownMenuComponent_ng_template_0_Template_div_mouseenter_0_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.setMouseState(true));
    })("mouseleave", function NzDropdownMenuComponent_ng_template_0_Template_div_mouseleave_0_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.setMouseState(false));
    });
    ɵɵprojection(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵclassProp("ant-dropdown-rtl", ctx_r1.dir === "rtl");
    ɵɵproperty("ngClass", ctx_r1.nzOverlayClassName)("ngStyle", ctx_r1.nzOverlayStyle)("@slideMotion", void 0)("@.disabled", !!(ctx_r1.noAnimation == null ? null : ctx_r1.noAnimation.nzNoAnimation))("nzNoAnimation", ctx_r1.noAnimation == null ? null : ctx_r1.noAnimation.nzNoAnimation);
  }
}
var NZ_CONFIG_MODULE_NAME = "dropDown";
var listOfPositions = [POSITION_MAP.bottomLeft, POSITION_MAP.bottomRight, POSITION_MAP.topRight, POSITION_MAP.topLeft];
var _NzDropDownDirective = class _NzDropDownDirective {
  setDropdownMenuValue(key, value) {
    if (this.nzDropdownMenu) {
      this.nzDropdownMenu.setValue(key, value);
    }
  }
  constructor(nzConfigService, elementRef, overlay, renderer, viewContainerRef, platform) {
    this.nzConfigService = nzConfigService;
    this.elementRef = elementRef;
    this.overlay = overlay;
    this.renderer = renderer;
    this.viewContainerRef = viewContainerRef;
    this.platform = platform;
    this._nzModuleName = NZ_CONFIG_MODULE_NAME;
    this.overlayRef = null;
    this.destroy$ = new Subject();
    this.positionStrategy = this.overlay.position().flexibleConnectedTo(this.elementRef.nativeElement).withLockedPosition().withTransformOriginOn(".ant-dropdown");
    this.inputVisible$ = new BehaviorSubject(false);
    this.nzTrigger$ = new BehaviorSubject("hover");
    this.overlayClose$ = new Subject();
    this.nzDropdownMenu = null;
    this.nzTrigger = "hover";
    this.nzMatchWidthElement = null;
    this.nzBackdrop = false;
    this.nzClickHide = true;
    this.nzDisabled = false;
    this.nzVisible = false;
    this.nzOverlayClassName = "";
    this.nzOverlayStyle = {};
    this.nzPlacement = "bottomLeft";
    this.nzVisibleChange = new EventEmitter();
  }
  ngAfterViewInit() {
    if (this.nzDropdownMenu) {
      const nativeElement = this.elementRef.nativeElement;
      const hostMouseState$ = merge(fromEvent(nativeElement, "mouseenter").pipe(mapTo(true)), fromEvent(nativeElement, "mouseleave").pipe(mapTo(false)));
      const menuMouseState$ = this.nzDropdownMenu.mouseState$;
      const mergedMouseState$ = merge(menuMouseState$, hostMouseState$);
      const hostClickState$ = fromEvent(nativeElement, "click").pipe(map(() => !this.nzVisible));
      const visibleStateByTrigger$ = this.nzTrigger$.pipe(switchMap((trigger) => {
        if (trigger === "hover") {
          return mergedMouseState$;
        } else if (trigger === "click") {
          return hostClickState$;
        } else {
          return EMPTY;
        }
      }));
      const descendantMenuItemClick$ = this.nzDropdownMenu.descendantMenuItemClick$.pipe(filter(() => this.nzClickHide), mapTo(false));
      const domTriggerVisible$ = merge(visibleStateByTrigger$, descendantMenuItemClick$, this.overlayClose$).pipe(filter(() => !this.nzDisabled));
      const visible$ = merge(this.inputVisible$, domTriggerVisible$);
      combineLatest([visible$, this.nzDropdownMenu.isChildSubMenuOpen$]).pipe(map(([visible, sub]) => visible || sub), auditTime(150), distinctUntilChanged(), filter(() => this.platform.isBrowser), takeUntil(this.destroy$)).subscribe((visible) => {
        const element = this.nzMatchWidthElement ? this.nzMatchWidthElement.nativeElement : nativeElement;
        const triggerWidth = element.getBoundingClientRect().width;
        if (this.nzVisible !== visible) {
          this.nzVisibleChange.emit(visible);
        }
        this.nzVisible = visible;
        if (visible) {
          if (!this.overlayRef) {
            this.overlayRef = this.overlay.create({
              positionStrategy: this.positionStrategy,
              minWidth: triggerWidth,
              disposeOnNavigation: true,
              hasBackdrop: this.nzBackdrop && this.nzTrigger === "click",
              scrollStrategy: this.overlay.scrollStrategies.reposition()
            });
            merge(this.overlayRef.backdropClick(), this.overlayRef.detachments(), this.overlayRef.outsidePointerEvents().pipe(filter((e) => !this.elementRef.nativeElement.contains(e.target))), this.overlayRef.keydownEvents().pipe(filter((e) => e.keyCode === ESCAPE && !hasModifierKey(e)))).pipe(takeUntil(this.destroy$)).subscribe(() => {
              this.overlayClose$.next(false);
            });
          } else {
            const overlayConfig = this.overlayRef.getConfig();
            overlayConfig.minWidth = triggerWidth;
          }
          this.positionStrategy.withPositions([POSITION_MAP[this.nzPlacement], ...listOfPositions]);
          if (!this.portal || this.portal.templateRef !== this.nzDropdownMenu.templateRef) {
            this.portal = new TemplatePortal(this.nzDropdownMenu.templateRef, this.viewContainerRef);
          }
          this.overlayRef.attach(this.portal);
        } else {
          if (this.overlayRef) {
            this.overlayRef.detach();
          }
        }
      });
      this.nzDropdownMenu.animationStateChange$.pipe(takeUntil(this.destroy$)).subscribe((event) => {
        if (event.toState === "void") {
          if (this.overlayRef) {
            this.overlayRef.dispose();
          }
          this.overlayRef = null;
        }
      });
    }
  }
  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
    if (this.overlayRef) {
      this.overlayRef.dispose();
      this.overlayRef = null;
    }
  }
  ngOnChanges(changes) {
    const {
      nzVisible,
      nzDisabled,
      nzOverlayClassName,
      nzOverlayStyle,
      nzTrigger
    } = changes;
    if (nzTrigger) {
      this.nzTrigger$.next(this.nzTrigger);
    }
    if (nzVisible) {
      this.inputVisible$.next(this.nzVisible);
    }
    if (nzDisabled) {
      const nativeElement = this.elementRef.nativeElement;
      if (this.nzDisabled) {
        this.renderer.setAttribute(nativeElement, "disabled", "");
        this.inputVisible$.next(false);
      } else {
        this.renderer.removeAttribute(nativeElement, "disabled");
      }
    }
    if (nzOverlayClassName) {
      this.setDropdownMenuValue("nzOverlayClassName", this.nzOverlayClassName);
    }
    if (nzOverlayStyle) {
      this.setDropdownMenuValue("nzOverlayStyle", this.nzOverlayStyle);
    }
  }
};
_NzDropDownDirective.ɵfac = function NzDropDownDirective_Factory(t) {
  return new (t || _NzDropDownDirective)(ɵɵdirectiveInject(NzConfigService), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Overlay), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ViewContainerRef), ɵɵdirectiveInject(Platform));
};
_NzDropDownDirective.ɵdir = ɵɵdefineDirective({
  type: _NzDropDownDirective,
  selectors: [["", "nz-dropdown", ""]],
  hostAttrs: [1, "ant-dropdown-trigger"],
  inputs: {
    nzDropdownMenu: "nzDropdownMenu",
    nzTrigger: "nzTrigger",
    nzMatchWidthElement: "nzMatchWidthElement",
    nzBackdrop: "nzBackdrop",
    nzClickHide: "nzClickHide",
    nzDisabled: "nzDisabled",
    nzVisible: "nzVisible",
    nzOverlayClassName: "nzOverlayClassName",
    nzOverlayStyle: "nzOverlayStyle",
    nzPlacement: "nzPlacement"
  },
  outputs: {
    nzVisibleChange: "nzVisibleChange"
  },
  exportAs: ["nzDropdown"],
  standalone: true,
  features: [ɵɵNgOnChangesFeature]
});
var NzDropDownDirective = _NzDropDownDirective;
__decorate([WithConfig(), InputBoolean()], NzDropDownDirective.prototype, "nzBackdrop", void 0);
__decorate([InputBoolean()], NzDropDownDirective.prototype, "nzClickHide", void 0);
__decorate([InputBoolean()], NzDropDownDirective.prototype, "nzDisabled", void 0);
__decorate([InputBoolean()], NzDropDownDirective.prototype, "nzVisible", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzDropDownDirective, [{
    type: Directive,
    args: [{
      selector: "[nz-dropdown]",
      exportAs: "nzDropdown",
      host: {
        class: "ant-dropdown-trigger"
      },
      standalone: true
    }]
  }], () => [{
    type: NzConfigService
  }, {
    type: ElementRef
  }, {
    type: Overlay
  }, {
    type: Renderer2
  }, {
    type: ViewContainerRef
  }, {
    type: Platform
  }], {
    nzDropdownMenu: [{
      type: Input
    }],
    nzTrigger: [{
      type: Input
    }],
    nzMatchWidthElement: [{
      type: Input
    }],
    nzBackdrop: [{
      type: Input
    }],
    nzClickHide: [{
      type: Input
    }],
    nzDisabled: [{
      type: Input
    }],
    nzVisible: [{
      type: Input
    }],
    nzOverlayClassName: [{
      type: Input
    }],
    nzOverlayStyle: [{
      type: Input
    }],
    nzPlacement: [{
      type: Input
    }],
    nzVisibleChange: [{
      type: Output
    }]
  });
})();
var _NzContextMenuServiceModule = class _NzContextMenuServiceModule {
};
_NzContextMenuServiceModule.ɵfac = function NzContextMenuServiceModule_Factory(t) {
  return new (t || _NzContextMenuServiceModule)();
};
_NzContextMenuServiceModule.ɵmod = ɵɵdefineNgModule({
  type: _NzContextMenuServiceModule
});
_NzContextMenuServiceModule.ɵinj = ɵɵdefineInjector({});
var NzContextMenuServiceModule = _NzContextMenuServiceModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzContextMenuServiceModule, [{
    type: NgModule
  }], null, null);
})();
var _NzDropDownADirective = class _NzDropDownADirective {
  constructor() {
  }
};
_NzDropDownADirective.ɵfac = function NzDropDownADirective_Factory(t) {
  return new (t || _NzDropDownADirective)();
};
_NzDropDownADirective.ɵdir = ɵɵdefineDirective({
  type: _NzDropDownADirective,
  selectors: [["a", "nz-dropdown", ""]],
  hostAttrs: [1, "ant-dropdown-link"],
  standalone: true
});
var NzDropDownADirective = _NzDropDownADirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzDropDownADirective, [{
    type: Directive,
    args: [{
      selector: "a[nz-dropdown]",
      host: {
        class: "ant-dropdown-link"
      },
      standalone: true
    }]
  }], () => [], null);
})();
var _NzDropdownButtonDirective = class _NzDropdownButtonDirective {
  constructor(renderer, nzButtonGroupComponent, elementRef) {
    this.renderer = renderer;
    this.nzButtonGroupComponent = nzButtonGroupComponent;
    this.elementRef = elementRef;
  }
  ngAfterViewInit() {
    const parentElement = this.renderer.parentNode(this.elementRef.nativeElement);
    if (this.nzButtonGroupComponent && parentElement) {
      this.renderer.addClass(parentElement, "ant-dropdown-button");
    }
  }
};
_NzDropdownButtonDirective.ɵfac = function NzDropdownButtonDirective_Factory(t) {
  return new (t || _NzDropdownButtonDirective)(ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(NzButtonGroupComponent, 9), ɵɵdirectiveInject(ElementRef));
};
_NzDropdownButtonDirective.ɵdir = ɵɵdefineDirective({
  type: _NzDropdownButtonDirective,
  selectors: [["", "nz-button", "", "nz-dropdown", ""]],
  standalone: true
});
var NzDropdownButtonDirective = _NzDropdownButtonDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzDropdownButtonDirective, [{
    type: Directive,
    args: [{
      selector: "[nz-button][nz-dropdown]",
      standalone: true
    }]
  }], () => [{
    type: Renderer2
  }, {
    type: NzButtonGroupComponent,
    decorators: [{
      type: Host
    }, {
      type: Optional
    }]
  }, {
    type: ElementRef
  }], null);
})();
var _NzDropdownMenuComponent = class _NzDropdownMenuComponent {
  onAnimationEvent(event) {
    this.animationStateChange$.emit(event);
  }
  setMouseState(visible) {
    this.mouseState$.next(visible);
  }
  setValue(key, value) {
    this[key] = value;
    this.cdr.markForCheck();
  }
  constructor(cdr, elementRef, renderer, viewContainerRef, nzMenuService, directionality, noAnimation) {
    this.cdr = cdr;
    this.elementRef = elementRef;
    this.renderer = renderer;
    this.viewContainerRef = viewContainerRef;
    this.nzMenuService = nzMenuService;
    this.directionality = directionality;
    this.noAnimation = noAnimation;
    this.mouseState$ = new BehaviorSubject(false);
    this.isChildSubMenuOpen$ = this.nzMenuService.isChildSubMenuOpen$;
    this.descendantMenuItemClick$ = this.nzMenuService.descendantMenuItemClick$;
    this.animationStateChange$ = new EventEmitter();
    this.nzOverlayClassName = "";
    this.nzOverlayStyle = {};
    this.dir = "ltr";
    this.destroy$ = new Subject();
  }
  ngOnInit() {
    this.directionality.change?.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
      this.dir = direction;
      this.cdr.detectChanges();
    });
    this.dir = this.directionality.value;
  }
  ngAfterContentInit() {
    this.renderer.removeChild(this.renderer.parentNode(this.elementRef.nativeElement), this.elementRef.nativeElement);
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
};
_NzDropdownMenuComponent.ɵfac = function NzDropdownMenuComponent_Factory(t) {
  return new (t || _NzDropdownMenuComponent)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ViewContainerRef), ɵɵdirectiveInject(MenuService), ɵɵdirectiveInject(Directionality, 8), ɵɵdirectiveInject(NzNoAnimationDirective, 9));
};
_NzDropdownMenuComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzDropdownMenuComponent,
  selectors: [["nz-dropdown-menu"]],
  viewQuery: function NzDropdownMenuComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(TemplateRef, 7);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.templateRef = _t.first);
    }
  },
  exportAs: ["nzDropdownMenu"],
  standalone: true,
  features: [ɵɵProvidersFeature([
    MenuService,
    /** menu is inside dropdown-menu component **/
    {
      provide: NzIsMenuInsideDropDownToken,
      useValue: true
    }
  ]), ɵɵStandaloneFeature],
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  consts: [[1, "ant-dropdown", 3, "mouseenter", "mouseleave", "ngClass", "ngStyle", "nzNoAnimation"]],
  template: function NzDropdownMenuComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵtemplate(0, NzDropdownMenuComponent_ng_template_0_Template, 2, 7, "ng-template");
    }
  },
  dependencies: [NgClass, NgStyle, NzNoAnimationDirective],
  encapsulation: 2,
  data: {
    animation: [slideMotion]
  },
  changeDetection: 0
});
var NzDropdownMenuComponent = _NzDropdownMenuComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzDropdownMenuComponent, [{
    type: Component,
    args: [{
      selector: `nz-dropdown-menu`,
      exportAs: `nzDropdownMenu`,
      animations: [slideMotion],
      providers: [
        MenuService,
        /** menu is inside dropdown-menu component **/
        {
          provide: NzIsMenuInsideDropDownToken,
          useValue: true
        }
      ],
      template: `
    <ng-template>
      <div
        class="ant-dropdown"
        [class.ant-dropdown-rtl]="dir === 'rtl'"
        [ngClass]="nzOverlayClassName"
        [ngStyle]="nzOverlayStyle"
        @slideMotion
        (@slideMotion.done)="onAnimationEvent($event)"
        [@.disabled]="!!noAnimation?.nzNoAnimation"
        [nzNoAnimation]="noAnimation?.nzNoAnimation"
        (mouseenter)="setMouseState(true)"
        (mouseleave)="setMouseState(false)"
      >
        <ng-content></ng-content>
      </div>
    </ng-template>
  `,
      preserveWhitespaces: false,
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      imports: [NgClass, NgStyle, NzNoAnimationDirective],
      standalone: true
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: ViewContainerRef
  }, {
    type: MenuService
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
  }], {
    templateRef: [{
      type: ViewChild,
      args: [TemplateRef, {
        static: true
      }]
    }]
  });
})();
var _NzDropDownModule = class _NzDropDownModule {
};
_NzDropDownModule.ɵfac = function NzDropDownModule_Factory(t) {
  return new (t || _NzDropDownModule)();
};
_NzDropDownModule.ɵmod = ɵɵdefineNgModule({
  type: _NzDropDownModule,
  imports: [NzDropDownDirective, NzDropDownADirective, NzDropdownMenuComponent, NzDropdownButtonDirective, NzContextMenuServiceModule],
  exports: [NzMenuModule, NzDropDownDirective, NzDropDownADirective, NzDropdownMenuComponent, NzDropdownButtonDirective]
});
_NzDropDownModule.ɵinj = ɵɵdefineInjector({
  imports: [NzContextMenuServiceModule, NzMenuModule]
});
var NzDropDownModule = _NzDropDownModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzDropDownModule, [{
    type: NgModule,
    args: [{
      imports: [NzDropDownDirective, NzDropDownADirective, NzDropdownMenuComponent, NzDropdownButtonDirective, NzContextMenuServiceModule],
      exports: [NzMenuModule, NzDropDownDirective, NzDropDownADirective, NzDropdownMenuComponent, NzDropdownButtonDirective]
    }]
  }], null, null);
})();
var LIST_OF_POSITIONS = [new ConnectionPositionPair({
  originX: "start",
  originY: "top"
}, {
  overlayX: "start",
  overlayY: "top"
}), new ConnectionPositionPair({
  originX: "start",
  originY: "top"
}, {
  overlayX: "start",
  overlayY: "bottom"
}), new ConnectionPositionPair({
  originX: "start",
  originY: "top"
}, {
  overlayX: "end",
  overlayY: "bottom"
}), new ConnectionPositionPair({
  originX: "start",
  originY: "top"
}, {
  overlayX: "end",
  overlayY: "top"
})];
var _NzContextMenuService = class _NzContextMenuService {
  constructor(ngZone, overlay) {
    this.ngZone = ngZone;
    this.overlay = overlay;
    this.overlayRef = null;
    this.closeSubscription = Subscription.EMPTY;
  }
  create($event, nzDropdownMenuComponent) {
    this.close(true);
    const {
      x,
      y
    } = $event;
    if ($event instanceof MouseEvent) {
      $event.preventDefault();
    }
    const positionStrategy = this.overlay.position().flexibleConnectedTo({
      x,
      y
    }).withPositions(LIST_OF_POSITIONS).withTransformOriginOn(".ant-dropdown");
    this.overlayRef = this.overlay.create({
      positionStrategy,
      disposeOnNavigation: true,
      scrollStrategy: this.overlay.scrollStrategies.close()
    });
    this.closeSubscription = new Subscription();
    this.closeSubscription.add(nzDropdownMenuComponent.descendantMenuItemClick$.subscribe(() => this.close()));
    this.closeSubscription.add(this.ngZone.runOutsideAngular(() => merge(fromEvent(document, "click").pipe(
      filter((event) => !!this.overlayRef && !this.overlayRef.overlayElement.contains(event.target)),
      /** handle firefox contextmenu event **/
      filter((event) => event.button !== 2)
    ), fromEvent(document, "keydown").pipe(filter((event) => event.key === "Escape"))).pipe(first()).subscribe(() => this.ngZone.run(() => this.close()))));
    return this.overlayRef.attach(new TemplatePortal(nzDropdownMenuComponent.templateRef, nzDropdownMenuComponent.viewContainerRef));
  }
  close(clear = false) {
    if (this.overlayRef) {
      this.overlayRef.detach();
      if (clear) {
        this.overlayRef.dispose();
      }
      this.overlayRef = null;
      this.closeSubscription.unsubscribe();
    }
  }
};
_NzContextMenuService.ɵfac = function NzContextMenuService_Factory(t) {
  return new (t || _NzContextMenuService)(ɵɵinject(NgZone), ɵɵinject(Overlay));
};
_NzContextMenuService.ɵprov = ɵɵdefineInjectable({
  token: _NzContextMenuService,
  factory: _NzContextMenuService.ɵfac,
  providedIn: NzContextMenuServiceModule
});
var NzContextMenuService = _NzContextMenuService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzContextMenuService, [{
    type: Injectable,
    args: [{
      providedIn: NzContextMenuServiceModule
    }]
  }], () => [{
    type: NgZone
  }, {
    type: Overlay
  }], null);
})();

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-checkbox.mjs
var _c02 = ["*"];
var _c1 = ["inputElement"];
var _c2 = ["nz-checkbox", ""];
var _forTrack0 = ($index, $item) => $item.value;
function NzCheckboxGroupComponent_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "label", 1);
    ɵɵlistener("nzCheckedChange", function NzCheckboxGroupComponent_For_1_Template_label_nzCheckedChange_0_listener($event) {
      const option_r2 = ɵɵrestoreView(_r1).$implicit;
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.onCheckedChange(option_r2, $event));
    });
    ɵɵelementStart(1, "span");
    ɵɵtext(2);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const option_r2 = ctx.$implicit;
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("nzDisabled", option_r2.disabled || ctx_r2.nzDisabled)("nzChecked", option_r2.checked);
    ɵɵadvance(2);
    ɵɵtextInterpolate(option_r2.label);
  }
}
var _NzCheckboxWrapperComponent = class _NzCheckboxWrapperComponent {
  constructor() {
    this.nzOnChange = new EventEmitter();
    this.checkboxList = [];
  }
  addCheckbox(value) {
    this.checkboxList.push(value);
  }
  removeCheckbox(value) {
    this.checkboxList.splice(this.checkboxList.indexOf(value), 1);
  }
  onChange() {
    const listOfCheckedValue = this.checkboxList.filter((item) => item.nzChecked).map((item) => item.nzValue);
    this.nzOnChange.emit(listOfCheckedValue);
  }
};
_NzCheckboxWrapperComponent.ɵfac = function NzCheckboxWrapperComponent_Factory(t) {
  return new (t || _NzCheckboxWrapperComponent)();
};
_NzCheckboxWrapperComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzCheckboxWrapperComponent,
  selectors: [["nz-checkbox-wrapper"]],
  hostAttrs: [1, "ant-checkbox-group"],
  outputs: {
    nzOnChange: "nzOnChange"
  },
  exportAs: ["nzCheckboxWrapper"],
  standalone: true,
  features: [ɵɵStandaloneFeature],
  ngContentSelectors: _c02,
  decls: 1,
  vars: 0,
  template: function NzCheckboxWrapperComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
var NzCheckboxWrapperComponent = _NzCheckboxWrapperComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzCheckboxWrapperComponent, [{
    type: Component,
    args: [{
      selector: "nz-checkbox-wrapper",
      exportAs: "nzCheckboxWrapper",
      preserveWhitespaces: false,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      template: ` <ng-content></ng-content> `,
      host: {
        class: "ant-checkbox-group"
      },
      standalone: true
    }]
  }], null, {
    nzOnChange: [{
      type: Output
    }]
  });
})();
var _NzCheckboxComponent = class _NzCheckboxComponent {
  innerCheckedChange(checked) {
    if (!this.nzDisabled) {
      this.nzChecked = checked;
      this.onChange(this.nzChecked);
      this.nzCheckedChange.emit(this.nzChecked);
      if (this.nzCheckboxWrapperComponent) {
        this.nzCheckboxWrapperComponent.onChange();
      }
    }
  }
  writeValue(value) {
    this.nzChecked = value;
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
  focus() {
    this.focusMonitor.focusVia(this.inputElement, "keyboard");
  }
  blur() {
    this.inputElement.nativeElement.blur();
  }
  constructor(ngZone, elementRef, nzCheckboxWrapperComponent, cdr, focusMonitor, directionality, nzFormStatusService) {
    this.ngZone = ngZone;
    this.elementRef = elementRef;
    this.nzCheckboxWrapperComponent = nzCheckboxWrapperComponent;
    this.cdr = cdr;
    this.focusMonitor = focusMonitor;
    this.directionality = directionality;
    this.nzFormStatusService = nzFormStatusService;
    this.dir = "ltr";
    this.destroy$ = new Subject();
    this.isNzDisableFirstChange = true;
    this.onChange = () => {
    };
    this.onTouched = () => {
    };
    this.nzCheckedChange = new EventEmitter();
    this.nzValue = null;
    this.nzAutoFocus = false;
    this.nzDisabled = false;
    this.nzIndeterminate = false;
    this.nzChecked = false;
    this.nzId = null;
  }
  ngOnInit() {
    this.focusMonitor.monitor(this.elementRef, true).pipe(takeUntil(this.destroy$)).subscribe((focusOrigin) => {
      if (!focusOrigin) {
        Promise.resolve().then(() => this.onTouched());
      }
    });
    if (this.nzCheckboxWrapperComponent) {
      this.nzCheckboxWrapperComponent.addCheckbox(this);
    }
    this.directionality.change.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
      this.dir = direction;
      this.cdr.detectChanges();
    });
    this.dir = this.directionality.value;
    this.ngZone.runOutsideAngular(() => {
      fromEvent(this.elementRef.nativeElement, "click").pipe(takeUntil(this.destroy$)).subscribe((event) => {
        event.preventDefault();
        this.focus();
        if (this.nzDisabled) {
          return;
        }
        this.ngZone.run(() => {
          this.innerCheckedChange(!this.nzChecked);
          this.cdr.markForCheck();
        });
      });
      fromEvent(this.inputElement.nativeElement, "click").pipe(takeUntil(this.destroy$)).subscribe((event) => event.stopPropagation());
    });
  }
  ngAfterViewInit() {
    if (this.nzAutoFocus) {
      this.focus();
    }
  }
  ngOnDestroy() {
    this.focusMonitor.stopMonitoring(this.elementRef);
    if (this.nzCheckboxWrapperComponent) {
      this.nzCheckboxWrapperComponent.removeCheckbox(this);
    }
    this.destroy$.next();
    this.destroy$.complete();
  }
};
_NzCheckboxComponent.ɵfac = function NzCheckboxComponent_Factory(t) {
  return new (t || _NzCheckboxComponent)(ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NzCheckboxWrapperComponent, 8), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(FocusMonitor), ɵɵdirectiveInject(Directionality, 8), ɵɵdirectiveInject(NzFormStatusService, 8));
};
_NzCheckboxComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzCheckboxComponent,
  selectors: [["", "nz-checkbox", ""]],
  viewQuery: function NzCheckboxComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c1, 7);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.inputElement = _t.first);
    }
  },
  hostAttrs: [1, "ant-checkbox-wrapper"],
  hostVars: 6,
  hostBindings: function NzCheckboxComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("ant-checkbox-wrapper-in-form-item", !!ctx.nzFormStatusService)("ant-checkbox-wrapper-checked", ctx.nzChecked)("ant-checkbox-rtl", ctx.dir === "rtl");
    }
  },
  inputs: {
    nzValue: "nzValue",
    nzAutoFocus: "nzAutoFocus",
    nzDisabled: "nzDisabled",
    nzIndeterminate: "nzIndeterminate",
    nzChecked: "nzChecked",
    nzId: "nzId"
  },
  outputs: {
    nzCheckedChange: "nzCheckedChange"
  },
  exportAs: ["nzCheckbox"],
  standalone: true,
  features: [ɵɵProvidersFeature([{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => _NzCheckboxComponent),
    multi: true
  }]), ɵɵStandaloneFeature],
  attrs: _c2,
  ngContentSelectors: _c02,
  decls: 6,
  vars: 11,
  consts: [["inputElement", ""], [1, "ant-checkbox"], ["type", "checkbox", 1, "ant-checkbox-input", 3, "ngModelChange", "checked", "ngModel", "disabled"], [1, "ant-checkbox-inner"]],
  template: function NzCheckboxComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = ɵɵgetCurrentView();
      ɵɵprojectionDef();
      ɵɵelementStart(0, "span", 1)(1, "input", 2, 0);
      ɵɵlistener("ngModelChange", function NzCheckboxComponent_Template_input_ngModelChange_1_listener($event) {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.innerCheckedChange($event));
      });
      ɵɵelementEnd();
      ɵɵelement(3, "span", 3);
      ɵɵelementEnd();
      ɵɵelementStart(4, "span");
      ɵɵprojection(5);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵclassProp("ant-checkbox-checked", ctx.nzChecked && !ctx.nzIndeterminate)("ant-checkbox-disabled", ctx.nzDisabled)("ant-checkbox-indeterminate", ctx.nzIndeterminate);
      ɵɵadvance();
      ɵɵproperty("checked", ctx.nzChecked)("ngModel", ctx.nzChecked)("disabled", ctx.nzDisabled);
      ɵɵattribute("autofocus", ctx.nzAutoFocus ? "autofocus" : null)("id", ctx.nzId);
    }
  },
  dependencies: [FormsModule, CheckboxControlValueAccessor, NgControlStatus, NgModel],
  encapsulation: 2,
  changeDetection: 0
});
var NzCheckboxComponent = _NzCheckboxComponent;
__decorate([InputBoolean()], NzCheckboxComponent.prototype, "nzAutoFocus", void 0);
__decorate([InputBoolean()], NzCheckboxComponent.prototype, "nzDisabled", void 0);
__decorate([InputBoolean()], NzCheckboxComponent.prototype, "nzIndeterminate", void 0);
__decorate([InputBoolean()], NzCheckboxComponent.prototype, "nzChecked", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzCheckboxComponent, [{
    type: Component,
    args: [{
      selector: "[nz-checkbox]",
      exportAs: "nzCheckbox",
      preserveWhitespaces: false,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      template: `
    <span
      class="ant-checkbox"
      [class.ant-checkbox-checked]="nzChecked && !nzIndeterminate"
      [class.ant-checkbox-disabled]="nzDisabled"
      [class.ant-checkbox-indeterminate]="nzIndeterminate"
    >
      <input
        #inputElement
        type="checkbox"
        class="ant-checkbox-input"
        [attr.autofocus]="nzAutoFocus ? 'autofocus' : null"
        [attr.id]="nzId"
        [checked]="nzChecked"
        [ngModel]="nzChecked"
        [disabled]="nzDisabled"
        (ngModelChange)="innerCheckedChange($event)"
      />
      <span class="ant-checkbox-inner"></span>
    </span>
    <span><ng-content></ng-content></span>
  `,
      providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => NzCheckboxComponent),
        multi: true
      }],
      host: {
        class: "ant-checkbox-wrapper",
        "[class.ant-checkbox-wrapper-in-form-item]": "!!nzFormStatusService",
        "[class.ant-checkbox-wrapper-checked]": "nzChecked",
        "[class.ant-checkbox-rtl]": `dir === 'rtl'`
      },
      imports: [FormsModule],
      standalone: true
    }]
  }], () => [{
    type: NgZone
  }, {
    type: ElementRef
  }, {
    type: NzCheckboxWrapperComponent,
    decorators: [{
      type: Optional
    }]
  }, {
    type: ChangeDetectorRef
  }, {
    type: FocusMonitor
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
  }], {
    inputElement: [{
      type: ViewChild,
      args: ["inputElement", {
        static: true
      }]
    }],
    nzCheckedChange: [{
      type: Output
    }],
    nzValue: [{
      type: Input
    }],
    nzAutoFocus: [{
      type: Input
    }],
    nzDisabled: [{
      type: Input
    }],
    nzIndeterminate: [{
      type: Input
    }],
    nzChecked: [{
      type: Input
    }],
    nzId: [{
      type: Input
    }]
  });
})();
var _NzCheckboxGroupComponent = class _NzCheckboxGroupComponent {
  onCheckedChange(option, checked) {
    option.checked = checked;
    this.onChange(this.options);
  }
  constructor(elementRef, focusMonitor, cdr, directionality) {
    this.elementRef = elementRef;
    this.focusMonitor = focusMonitor;
    this.cdr = cdr;
    this.directionality = directionality;
    this.onChange = () => {
    };
    this.onTouched = () => {
    };
    this.options = [];
    this.nzDisabled = false;
    this.dir = "ltr";
    this.destroy$ = new Subject();
    this.isNzDisableFirstChange = true;
  }
  ngOnInit() {
    this.focusMonitor.monitor(this.elementRef, true).pipe(takeUntil(this.destroy$)).subscribe((focusOrigin) => {
      if (!focusOrigin) {
        Promise.resolve().then(() => this.onTouched());
      }
    });
    this.directionality.change?.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
      this.dir = direction;
      this.cdr.detectChanges();
    });
    this.dir = this.directionality.value;
  }
  ngOnDestroy() {
    this.focusMonitor.stopMonitoring(this.elementRef);
    this.destroy$.next();
    this.destroy$.complete();
  }
  writeValue(value) {
    this.options = value;
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
_NzCheckboxGroupComponent.ɵfac = function NzCheckboxGroupComponent_Factory(t) {
  return new (t || _NzCheckboxGroupComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(FocusMonitor), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(Directionality, 8));
};
_NzCheckboxGroupComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzCheckboxGroupComponent,
  selectors: [["nz-checkbox-group"]],
  hostAttrs: [1, "ant-checkbox-group"],
  hostVars: 2,
  hostBindings: function NzCheckboxGroupComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("ant-checkbox-group-rtl", ctx.dir === "rtl");
    }
  },
  inputs: {
    nzDisabled: "nzDisabled"
  },
  exportAs: ["nzCheckboxGroup"],
  standalone: true,
  features: [ɵɵProvidersFeature([{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => _NzCheckboxGroupComponent),
    multi: true
  }]), ɵɵStandaloneFeature],
  decls: 2,
  vars: 0,
  consts: [["nz-checkbox", "", 1, "ant-checkbox-group-item", 3, "nzDisabled", "nzChecked"], ["nz-checkbox", "", 1, "ant-checkbox-group-item", 3, "nzCheckedChange", "nzDisabled", "nzChecked"]],
  template: function NzCheckboxGroupComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵrepeaterCreate(0, NzCheckboxGroupComponent_For_1_Template, 3, 3, "label", 0, _forTrack0);
    }
    if (rf & 2) {
      ɵɵrepeater(ctx.options);
    }
  },
  dependencies: [NzCheckboxComponent],
  encapsulation: 2
});
var NzCheckboxGroupComponent = _NzCheckboxGroupComponent;
__decorate([InputBoolean()], NzCheckboxGroupComponent.prototype, "nzDisabled", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzCheckboxGroupComponent, [{
    type: Component,
    args: [{
      selector: "nz-checkbox-group",
      exportAs: "nzCheckboxGroup",
      preserveWhitespaces: false,
      encapsulation: ViewEncapsulation$1.None,
      template: `
    @for (option of options; track option.value) {
      <label
        nz-checkbox
        class="ant-checkbox-group-item"
        [nzDisabled]="option.disabled || nzDisabled"
        [nzChecked]="option.checked!"
        (nzCheckedChange)="onCheckedChange(option, $event)"
      >
        <span>{{ option.label }}</span>
      </label>
    }
  `,
      providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => NzCheckboxGroupComponent),
        multi: true
      }],
      host: {
        class: "ant-checkbox-group",
        "[class.ant-checkbox-group-rtl]": `dir === 'rtl'`
      },
      imports: [NzCheckboxComponent],
      standalone: true
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: FocusMonitor
  }, {
    type: ChangeDetectorRef
  }, {
    type: Directionality,
    decorators: [{
      type: Optional
    }]
  }], {
    nzDisabled: [{
      type: Input
    }]
  });
})();
var _NzCheckboxModule = class _NzCheckboxModule {
};
_NzCheckboxModule.ɵfac = function NzCheckboxModule_Factory(t) {
  return new (t || _NzCheckboxModule)();
};
_NzCheckboxModule.ɵmod = ɵɵdefineNgModule({
  type: _NzCheckboxModule,
  imports: [NzCheckboxComponent, NzCheckboxGroupComponent, NzCheckboxWrapperComponent],
  exports: [NzCheckboxComponent, NzCheckboxGroupComponent, NzCheckboxWrapperComponent]
});
_NzCheckboxModule.ɵinj = ɵɵdefineInjector({
  imports: [NzCheckboxComponent, NzCheckboxGroupComponent]
});
var NzCheckboxModule = _NzCheckboxModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzCheckboxModule, [{
    type: NgModule,
    args: [{
      imports: [NzCheckboxComponent, NzCheckboxGroupComponent, NzCheckboxWrapperComponent],
      exports: [NzCheckboxComponent, NzCheckboxGroupComponent, NzCheckboxWrapperComponent]
    }]
  }], null, null);
})();

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-pagination.mjs
var _c03 = ["nz-pagination-item", ""];
var _c12 = (a0, a1) => ({
  $implicit: a0,
  page: a1
});
function NzPaginationItemComponent_ng_template_0_Case_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "a");
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const page_r1 = ɵɵnextContext().page;
    ɵɵadvance();
    ɵɵtextInterpolate(page_r1);
  }
}
function NzPaginationItemComponent_ng_template_0_Case_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 3);
  }
}
function NzPaginationItemComponent_ng_template_0_Case_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 4);
  }
}
function NzPaginationItemComponent_ng_template_0_Case_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "button", 2);
    ɵɵtemplate(1, NzPaginationItemComponent_ng_template_0_Case_1_Conditional_1_Template, 1, 0, "span", 3)(2, NzPaginationItemComponent_ng_template_0_Case_1_Conditional_2_Template, 1, 0);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("disabled", ctx_r1.disabled);
    ɵɵadvance();
    ɵɵconditional(1, ctx_r1.direction === "rtl" ? 1 : 2);
  }
}
function NzPaginationItemComponent_ng_template_0_Case_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 4);
  }
}
function NzPaginationItemComponent_ng_template_0_Case_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 3);
  }
}
function NzPaginationItemComponent_ng_template_0_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "button", 2);
    ɵɵtemplate(1, NzPaginationItemComponent_ng_template_0_Case_2_Conditional_1_Template, 1, 0, "span", 4)(2, NzPaginationItemComponent_ng_template_0_Case_2_Conditional_2_Template, 1, 0);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("disabled", ctx_r1.disabled);
    ɵɵadvance();
    ɵɵconditional(1, ctx_r1.direction === "rtl" ? 1 : 2);
  }
}
function NzPaginationItemComponent_ng_template_0_Case_3_Case_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 8);
  }
}
function NzPaginationItemComponent_ng_template_0_Case_3_Case_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 9);
  }
}
function NzPaginationItemComponent_ng_template_0_Case_3_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NzPaginationItemComponent_ng_template_0_Case_3_Case_2_Conditional_0_Template, 1, 0, "span", 8)(1, NzPaginationItemComponent_ng_template_0_Case_3_Case_2_Conditional_1_Template, 1, 0);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵconditional(0, ctx_r1.direction === "rtl" ? 0 : 1);
  }
}
function NzPaginationItemComponent_ng_template_0_Case_3_Case_3_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 9);
  }
}
function NzPaginationItemComponent_ng_template_0_Case_3_Case_3_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 8);
  }
}
function NzPaginationItemComponent_ng_template_0_Case_3_Case_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NzPaginationItemComponent_ng_template_0_Case_3_Case_3_Conditional_0_Template, 1, 0, "span", 9)(1, NzPaginationItemComponent_ng_template_0_Case_3_Case_3_Conditional_1_Template, 1, 0);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵconditional(0, ctx_r1.direction === "rtl" ? 0 : 1);
  }
}
function NzPaginationItemComponent_ng_template_0_Case_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "a", 5)(1, "div", 6);
    ɵɵtemplate(2, NzPaginationItemComponent_ng_template_0_Case_3_Case_2_Template, 2, 1)(3, NzPaginationItemComponent_ng_template_0_Case_3_Case_3_Template, 2, 1);
    ɵɵelementStart(4, "span", 7);
    ɵɵtext(5, "•••");
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    let tmp_5_0;
    const type_r3 = ɵɵnextContext().$implicit;
    ɵɵadvance(2);
    ɵɵconditional(2, (tmp_5_0 = type_r3) === "prev_5" ? 2 : tmp_5_0 === "next_5" ? 3 : -1);
  }
}
function NzPaginationItemComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NzPaginationItemComponent_ng_template_0_Case_0_Template, 2, 1)(1, NzPaginationItemComponent_ng_template_0_Case_1_Template, 3, 2)(2, NzPaginationItemComponent_ng_template_0_Case_2_Template, 3, 2)(3, NzPaginationItemComponent_ng_template_0_Case_3_Template, 6, 1);
  }
  if (rf & 2) {
    let tmp_4_0;
    const type_r3 = ctx.$implicit;
    ɵɵconditional(0, (tmp_4_0 = type_r3) === "page" ? 0 : tmp_4_0 === "prev" ? 1 : tmp_4_0 === "next" ? 2 : 3);
  }
}
function NzPaginationItemComponent_ng_template_2_Template(rf, ctx) {
}
var _c22 = ["nz-pagination-options", ""];
var _forTrack02 = ($index, $item) => $item.value;
function NzPaginationOptionsComponent_Conditional_0_For_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "nz-option", 3);
  }
  if (rf & 2) {
    const option_r3 = ctx.$implicit;
    ɵɵproperty("nzLabel", option_r3.label)("nzValue", option_r3.value);
  }
}
function NzPaginationOptionsComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "nz-select", 2);
    ɵɵlistener("ngModelChange", function NzPaginationOptionsComponent_Conditional_0_Template_nz_select_ngModelChange_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onPageSizeChange($event));
    });
    ɵɵrepeaterCreate(1, NzPaginationOptionsComponent_Conditional_0_For_2_Template, 1, 2, "nz-option", 3, _forTrack02);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("nzDisabled", ctx_r1.disabled)("nzSize", ctx_r1.nzSize)("ngModel", ctx_r1.pageSize);
    ɵɵadvance();
    ɵɵrepeater(ctx_r1.listOfPageSizeOption);
  }
}
function NzPaginationOptionsComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 1);
    ɵɵtext(1);
    ɵɵelementStart(2, "input", 4);
    ɵɵlistener("keydown.enter", function NzPaginationOptionsComponent_Conditional_1_Template_input_keydown_enter_2_listener($event) {
      ɵɵrestoreView(_r4);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.jumpToPageViaInput($event));
    });
    ɵɵelementEnd();
    ɵɵtext(3);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r1.locale.jump_to, " ");
    ɵɵadvance();
    ɵɵproperty("disabled", ctx_r1.disabled);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r1.locale.page, " ");
  }
}
var _c3 = ["containerTemplate"];
function _forTrack1($index, $item) {
  return this.trackByPageItem;
}
var _c4 = (a0, a1) => ({
  $implicit: a0,
  range: a1
});
function NzPaginationDefaultComponent_ng_template_0_Conditional_1_ng_template_1_Template(rf, ctx) {
}
function NzPaginationDefaultComponent_ng_template_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "li", 1);
    ɵɵtemplate(1, NzPaginationDefaultComponent_ng_template_0_Conditional_1_ng_template_1_Template, 0, 0, "ng-template", 4);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.showTotal)("ngTemplateOutletContext", ɵɵpureFunction2(2, _c4, ctx_r0.total, ctx_r0.ranges));
  }
}
function NzPaginationDefaultComponent_ng_template_0_For_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li", 5);
    ɵɵlistener("gotoIndex", function NzPaginationDefaultComponent_ng_template_0_For_3_Template_li_gotoIndex_0_listener($event) {
      ɵɵrestoreView(_r2);
      const ctx_r0 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r0.jumpPage($event));
    })("diffIndex", function NzPaginationDefaultComponent_ng_template_0_For_3_Template_li_diffIndex_0_listener($event) {
      ɵɵrestoreView(_r2);
      const ctx_r0 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r0.jumpDiff($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const page_r3 = ctx.$implicit;
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵproperty("locale", ctx_r0.locale)("type", page_r3.type)("index", page_r3.index)("disabled", !!page_r3.disabled)("itemRender", ctx_r0.itemRender)("active", ctx_r0.pageIndex === page_r3.index)("direction", ctx_r0.dir);
  }
}
function NzPaginationDefaultComponent_ng_template_0_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li", 6);
    ɵɵlistener("pageIndexChange", function NzPaginationDefaultComponent_ng_template_0_Conditional_4_Template_li_pageIndexChange_0_listener($event) {
      ɵɵrestoreView(_r4);
      const ctx_r0 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r0.onPageIndexChange($event));
    })("pageSizeChange", function NzPaginationDefaultComponent_ng_template_0_Conditional_4_Template_li_pageSizeChange_0_listener($event) {
      ɵɵrestoreView(_r4);
      const ctx_r0 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r0.onPageSizeChange($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵproperty("total", ctx_r0.total)("locale", ctx_r0.locale)("disabled", ctx_r0.disabled)("nzSize", ctx_r0.nzSize)("showSizeChanger", ctx_r0.showSizeChanger)("showQuickJumper", ctx_r0.showQuickJumper)("pageIndex", ctx_r0.pageIndex)("pageSize", ctx_r0.pageSize)("pageSizeOptions", ctx_r0.pageSizeOptions);
  }
}
function NzPaginationDefaultComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "ul");
    ɵɵtemplate(1, NzPaginationDefaultComponent_ng_template_0_Conditional_1_Template, 2, 5, "li", 1);
    ɵɵrepeaterCreate(2, NzPaginationDefaultComponent_ng_template_0_For_3_Template, 1, 7, "li", 2, _forTrack1, true);
    ɵɵtemplate(4, NzPaginationDefaultComponent_ng_template_0_Conditional_4_Template, 1, 9, "li", 3);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵconditional(1, ctx_r0.showTotal ? 1 : -1);
    ɵɵadvance();
    ɵɵrepeater(ctx_r0.listOfPageItem);
    ɵɵadvance(2);
    ɵɵconditional(4, ctx_r0.showQuickJumper || ctx_r0.showSizeChanger ? 4 : -1);
  }
}
function NzPaginationSimpleComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "ul")(1, "li", 1);
    ɵɵlistener("click", function NzPaginationSimpleComponent_ng_template_0_Template_li_click_1_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.prePage());
    });
    ɵɵelementEnd();
    ɵɵelementStart(2, "li", 2)(3, "input", 3);
    ɵɵlistener("keydown.enter", function NzPaginationSimpleComponent_ng_template_0_Template_input_keydown_enter_3_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.jumpToPageViaInput($event));
    });
    ɵɵelementEnd();
    ɵɵelementStart(4, "span", 4);
    ɵɵtext(5, "/");
    ɵɵelementEnd();
    ɵɵtext(6);
    ɵɵelementEnd();
    ɵɵelementStart(7, "li", 5);
    ɵɵlistener("click", function NzPaginationSimpleComponent_ng_template_0_Template_li_click_7_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.nextPage());
    });
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("disabled", ctx_r1.isFirstIndex)("direction", ctx_r1.dir)("itemRender", ctx_r1.itemRender);
    ɵɵattribute("title", ctx_r1.locale.prev_page);
    ɵɵadvance();
    ɵɵattribute("title", ctx_r1.pageIndex + "/" + ctx_r1.lastIndex);
    ɵɵadvance();
    ɵɵproperty("disabled", ctx_r1.disabled)("value", ctx_r1.pageIndex);
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ctx_r1.lastIndex, " ");
    ɵɵadvance();
    ɵɵproperty("disabled", ctx_r1.isLastIndex)("direction", ctx_r1.dir)("itemRender", ctx_r1.itemRender);
    ɵɵattribute("title", ctx_r1.locale == null ? null : ctx_r1.locale.next_page);
  }
}
function NzPaginationComponent_Conditional_0_Conditional_0_ng_template_0_Template(rf, ctx) {
}
function NzPaginationComponent_Conditional_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NzPaginationComponent_Conditional_0_Conditional_0_ng_template_0_Template, 0, 0, "ng-template", 4);
  }
  if (rf & 2) {
    ɵɵnextContext(2);
    const simplePagination_r2 = ɵɵreference(2);
    ɵɵproperty("ngTemplateOutlet", simplePagination_r2.template);
  }
}
function NzPaginationComponent_Conditional_0_Conditional_1_ng_template_0_Template(rf, ctx) {
}
function NzPaginationComponent_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NzPaginationComponent_Conditional_0_Conditional_1_ng_template_0_Template, 0, 0, "ng-template", 4);
  }
  if (rf & 2) {
    ɵɵnextContext(2);
    const defaultPagination_r3 = ɵɵreference(4);
    ɵɵproperty("ngTemplateOutlet", defaultPagination_r3.template);
  }
}
function NzPaginationComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NzPaginationComponent_Conditional_0_Conditional_0_Template, 1, 1, null, 4)(1, NzPaginationComponent_Conditional_0_Conditional_1_Template, 1, 1);
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    ɵɵconditional(0, ctx_r3.nzSimple ? 0 : 1);
  }
}
var _NzPaginationItemComponent = class _NzPaginationItemComponent {
  constructor() {
    this.active = false;
    this.index = null;
    this.disabled = false;
    this.direction = "ltr";
    this.type = null;
    this.itemRender = null;
    this.diffIndex = new EventEmitter();
    this.gotoIndex = new EventEmitter();
    this.title = null;
  }
  clickItem() {
    if (!this.disabled) {
      if (this.type === "page") {
        this.gotoIndex.emit(this.index);
      } else {
        this.diffIndex.emit({
          next: 1,
          prev: -1,
          prev_5: -5,
          next_5: 5
        }[this.type]);
      }
    }
  }
  ngOnChanges(changes) {
    const {
      locale,
      index,
      type
    } = changes;
    if (locale || index || type) {
      this.title = {
        page: `${this.index}`,
        next: this.locale?.next_page,
        prev: this.locale?.prev_page,
        prev_5: this.locale?.prev_5,
        next_5: this.locale?.next_5
      }[this.type];
    }
  }
};
_NzPaginationItemComponent.ɵfac = function NzPaginationItemComponent_Factory(t) {
  return new (t || _NzPaginationItemComponent)();
};
_NzPaginationItemComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzPaginationItemComponent,
  selectors: [["li", "nz-pagination-item", ""]],
  hostVars: 19,
  hostBindings: function NzPaginationItemComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("click", function NzPaginationItemComponent_click_HostBindingHandler() {
        return ctx.clickItem();
      });
    }
    if (rf & 2) {
      ɵɵattribute("title", ctx.title);
      ɵɵclassProp("ant-pagination-prev", ctx.type === "prev")("ant-pagination-next", ctx.type === "next")("ant-pagination-item", ctx.type === "page")("ant-pagination-jump-prev", ctx.type === "prev_5")("ant-pagination-jump-prev-custom-icon", ctx.type === "prev_5")("ant-pagination-jump-next", ctx.type === "next_5")("ant-pagination-jump-next-custom-icon", ctx.type === "next_5")("ant-pagination-disabled", ctx.disabled)("ant-pagination-item-active", ctx.active);
    }
  },
  inputs: {
    active: "active",
    locale: "locale",
    index: "index",
    disabled: "disabled",
    direction: "direction",
    type: "type",
    itemRender: "itemRender"
  },
  outputs: {
    diffIndex: "diffIndex",
    gotoIndex: "gotoIndex"
  },
  standalone: true,
  features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
  attrs: _c03,
  decls: 3,
  vars: 5,
  consts: [["renderItemTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["type", "button", 1, "ant-pagination-item-link", 3, "disabled"], ["nz-icon", "", "nzType", "right"], ["nz-icon", "", "nzType", "left"], [1, "ant-pagination-item-link"], [1, "ant-pagination-item-container"], [1, "ant-pagination-item-ellipsis"], ["nz-icon", "", "nzType", "double-right", 1, "ant-pagination-item-link-icon"], ["nz-icon", "", "nzType", "double-left", 1, "ant-pagination-item-link-icon"]],
  template: function NzPaginationItemComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, NzPaginationItemComponent_ng_template_0_Template, 4, 1, "ng-template", null, 0, ɵɵtemplateRefExtractor)(2, NzPaginationItemComponent_ng_template_2_Template, 0, 0, "ng-template", 1);
    }
    if (rf & 2) {
      const renderItemTemplate_r4 = ɵɵreference(1);
      ɵɵadvance(2);
      ɵɵproperty("ngTemplateOutlet", ctx.itemRender || renderItemTemplate_r4)("ngTemplateOutletContext", ɵɵpureFunction2(2, _c12, ctx.type, ctx.index));
    }
  },
  dependencies: [NzIconModule, NzIconDirective, NgTemplateOutlet],
  encapsulation: 2,
  changeDetection: 0
});
var NzPaginationItemComponent = _NzPaginationItemComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzPaginationItemComponent, [{
    type: Component,
    args: [{
      selector: "li[nz-pagination-item]",
      preserveWhitespaces: false,
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `
    <ng-template #renderItemTemplate let-type let-page="page">
      @switch (type) {
        @case ('page') {
          <a>{{ page }}</a>
        }
        @case ('prev') {
          <button type="button" [disabled]="disabled" class="ant-pagination-item-link">
            @if (direction === 'rtl') {
              <span nz-icon nzType="right"></span>
            } @else {
              <span nz-icon nzType="left"></span>
            }
          </button>
        }
        @case ('next') {
          <button type="button" [disabled]="disabled" class="ant-pagination-item-link">
            @if (direction === 'rtl') {
              <span nz-icon nzType="left"></span>
            } @else {
              <span nz-icon nzType="right"></span>
            }
          </button>
        }
        @default {
          <a class="ant-pagination-item-link">
            <div class="ant-pagination-item-container">
              @switch (type) {
                @case ('prev_5') {
                  @if (direction === 'rtl') {
                    <span
                      nz-icon
                      nzType="double-right"
                      class="ant-pagination-item-link-icon"
                    ></span>
                  } @else {
                    <span nz-icon nzType="double-left" class="ant-pagination-item-link-icon"></span>
                  }
                }
                @case ('next_5') {
                  @if (direction === 'rtl') {
                    <span nz-icon nzType="double-left"
                          class="ant-pagination-item-link-icon"></span>
                  } @else {
                    <span nz-icon nzType="double-right" class="ant-pagination-item-link-icon"></span>
                  }
                }
              }
              <span class="ant-pagination-item-ellipsis">•••</span>
            </div>
          </a>
        }
      }
    </ng-template>
    <ng-template
      [ngTemplateOutlet]="itemRender || renderItemTemplate"
      [ngTemplateOutletContext]="{ $implicit: type, page: index }"
    />
  `,
      host: {
        "[class.ant-pagination-prev]": `type === 'prev'`,
        "[class.ant-pagination-next]": `type === 'next'`,
        "[class.ant-pagination-item]": `type === 'page'`,
        "[class.ant-pagination-jump-prev]": `type === 'prev_5'`,
        "[class.ant-pagination-jump-prev-custom-icon]": `type === 'prev_5'`,
        "[class.ant-pagination-jump-next]": `type === 'next_5'`,
        "[class.ant-pagination-jump-next-custom-icon]": `type === 'next_5'`,
        "[class.ant-pagination-disabled]": "disabled",
        "[class.ant-pagination-item-active]": "active",
        "[attr.title]": "title",
        "(click)": "clickItem()"
      },
      imports: [NzIconModule, NgTemplateOutlet],
      standalone: true
    }]
  }], null, {
    active: [{
      type: Input
    }],
    locale: [{
      type: Input
    }],
    index: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    direction: [{
      type: Input
    }],
    type: [{
      type: Input
    }],
    itemRender: [{
      type: Input
    }],
    diffIndex: [{
      type: Output
    }],
    gotoIndex: [{
      type: Output
    }]
  });
})();
var _NzPaginationOptionsComponent = class _NzPaginationOptionsComponent {
  constructor() {
    this.nzSize = "default";
    this.disabled = false;
    this.showSizeChanger = false;
    this.showQuickJumper = false;
    this.total = 0;
    this.pageIndex = 1;
    this.pageSize = 10;
    this.pageSizeOptions = [];
    this.pageIndexChange = new EventEmitter();
    this.pageSizeChange = new EventEmitter();
    this.listOfPageSizeOption = [];
  }
  onPageSizeChange(size) {
    if (this.pageSize !== size) {
      this.pageSizeChange.next(size);
    }
  }
  jumpToPageViaInput($event) {
    const target = $event.target;
    const index = Math.floor(toNumber(target.value, this.pageIndex));
    this.pageIndexChange.next(index);
    target.value = "";
  }
  ngOnChanges(changes) {
    const {
      pageSize,
      pageSizeOptions,
      locale
    } = changes;
    if (pageSize || pageSizeOptions || locale) {
      this.listOfPageSizeOption = [.../* @__PURE__ */ new Set([...this.pageSizeOptions, this.pageSize])].map((item) => ({
        value: item,
        label: `${item} ${this.locale.items_per_page}`
      }));
    }
  }
};
_NzPaginationOptionsComponent.ɵfac = function NzPaginationOptionsComponent_Factory(t) {
  return new (t || _NzPaginationOptionsComponent)();
};
_NzPaginationOptionsComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzPaginationOptionsComponent,
  selectors: [["li", "nz-pagination-options", ""]],
  hostAttrs: [1, "ant-pagination-options"],
  inputs: {
    nzSize: "nzSize",
    disabled: "disabled",
    showSizeChanger: "showSizeChanger",
    showQuickJumper: "showQuickJumper",
    locale: "locale",
    total: "total",
    pageIndex: "pageIndex",
    pageSize: "pageSize",
    pageSizeOptions: "pageSizeOptions"
  },
  outputs: {
    pageIndexChange: "pageIndexChange",
    pageSizeChange: "pageSizeChange"
  },
  standalone: true,
  features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
  attrs: _c22,
  decls: 2,
  vars: 2,
  consts: [[1, "ant-pagination-options-size-changer", 3, "nzDisabled", "nzSize", "ngModel"], [1, "ant-pagination-options-quick-jumper"], [1, "ant-pagination-options-size-changer", 3, "ngModelChange", "nzDisabled", "nzSize", "ngModel"], [3, "nzLabel", "nzValue"], [3, "keydown.enter", "disabled"]],
  template: function NzPaginationOptionsComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, NzPaginationOptionsComponent_Conditional_0_Template, 3, 3, "nz-select", 0)(1, NzPaginationOptionsComponent_Conditional_1_Template, 4, 3, "div", 1);
    }
    if (rf & 2) {
      ɵɵconditional(0, ctx.showSizeChanger ? 0 : -1);
      ɵɵadvance();
      ɵɵconditional(1, ctx.showQuickJumper ? 1 : -1);
    }
  },
  dependencies: [NzSelectModule, NzOptionComponent, NzSelectComponent, FormsModule, NgControlStatus, NgModel],
  encapsulation: 2,
  changeDetection: 0
});
var NzPaginationOptionsComponent = _NzPaginationOptionsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzPaginationOptionsComponent, [{
    type: Component,
    args: [{
      selector: "li[nz-pagination-options]",
      preserveWhitespaces: false,
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `
    @if (showSizeChanger) {
      <nz-select
        class="ant-pagination-options-size-changer"
        [nzDisabled]="disabled"
        [nzSize]="nzSize"
        [ngModel]="pageSize"
        (ngModelChange)="onPageSizeChange($event)"
      >
        @for (option of listOfPageSizeOption; track option.value) {
          <nz-option [nzLabel]="option.label" [nzValue]="option.value" />
        }
      </nz-select>
    }

    @if (showQuickJumper) {
      <div class="ant-pagination-options-quick-jumper">
        {{ locale.jump_to }}
        <input [disabled]="disabled" (keydown.enter)="jumpToPageViaInput($event)" />
        {{ locale.page }}
      </div>
    }
  `,
      host: {
        class: "ant-pagination-options"
      },
      imports: [NzSelectModule, FormsModule],
      standalone: true
    }]
  }], () => [], {
    nzSize: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    showSizeChanger: [{
      type: Input
    }],
    showQuickJumper: [{
      type: Input
    }],
    locale: [{
      type: Input
    }],
    total: [{
      type: Input
    }],
    pageIndex: [{
      type: Input
    }],
    pageSize: [{
      type: Input
    }],
    pageSizeOptions: [{
      type: Input
    }],
    pageIndexChange: [{
      type: Output
    }],
    pageSizeChange: [{
      type: Output
    }]
  });
})();
var _NzPaginationDefaultComponent = class _NzPaginationDefaultComponent {
  constructor(cdr, renderer, elementRef, directionality) {
    this.cdr = cdr;
    this.renderer = renderer;
    this.elementRef = elementRef;
    this.directionality = directionality;
    this.nzSize = "default";
    this.itemRender = null;
    this.showTotal = null;
    this.disabled = false;
    this.showSizeChanger = false;
    this.showQuickJumper = false;
    this.total = 0;
    this.pageIndex = 1;
    this.pageSize = 10;
    this.pageSizeOptions = [10, 20, 30, 40];
    this.pageIndexChange = new EventEmitter();
    this.pageSizeChange = new EventEmitter();
    this.ranges = [0, 0];
    this.listOfPageItem = [];
    this.dir = "ltr";
    this.destroy$ = new Subject();
    renderer.removeChild(renderer.parentNode(elementRef.nativeElement), elementRef.nativeElement);
  }
  ngOnInit() {
    this.directionality.change?.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
      this.dir = direction;
      this.updateRtlStyle();
      this.cdr.detectChanges();
    });
    this.dir = this.directionality.value;
    this.updateRtlStyle();
  }
  updateRtlStyle() {
    if (this.dir === "rtl") {
      this.renderer.addClass(this.elementRef.nativeElement, "ant-pagination-rtl");
    } else {
      this.renderer.removeClass(this.elementRef.nativeElement, "ant-pagination-rtl");
    }
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  jumpPage(index) {
    this.onPageIndexChange(index);
  }
  jumpDiff(diff) {
    this.jumpPage(this.pageIndex + diff);
  }
  trackByPageItem(_, value) {
    return `${value.type}-${value.index}`;
  }
  onPageIndexChange(index) {
    this.pageIndexChange.next(index);
  }
  onPageSizeChange(size) {
    this.pageSizeChange.next(size);
  }
  getLastIndex(total, pageSize) {
    return Math.ceil(total / pageSize);
  }
  buildIndexes() {
    const lastIndex = this.getLastIndex(this.total, this.pageSize);
    this.listOfPageItem = this.getListOfPageItem(this.pageIndex, lastIndex);
  }
  getListOfPageItem(pageIndex, lastIndex) {
    const concatWithPrevNext = (listOfPage) => {
      const prevItem = {
        type: "prev",
        disabled: pageIndex === 1
      };
      const nextItem = {
        type: "next",
        disabled: pageIndex === lastIndex
      };
      return [prevItem, ...listOfPage, nextItem];
    };
    const generatePage = (start, end) => {
      const list = [];
      for (let i = start; i <= end; i++) {
        list.push({
          index: i,
          type: "page"
        });
      }
      return list;
    };
    if (lastIndex <= 9) {
      return concatWithPrevNext(generatePage(1, lastIndex));
    } else {
      const generateRangeItem = (selected, last) => {
        let listOfRange = [];
        const prevFiveItem = {
          type: "prev_5"
        };
        const nextFiveItem = {
          type: "next_5"
        };
        const firstPageItem = generatePage(1, 1);
        const lastPageItem = generatePage(lastIndex, lastIndex);
        if (selected < 5) {
          const maxLeft = selected === 4 ? 6 : 5;
          listOfRange = [...generatePage(2, maxLeft), nextFiveItem];
        } else if (selected < last - 3) {
          listOfRange = [prevFiveItem, ...generatePage(selected - 2, selected + 2), nextFiveItem];
        } else {
          const minRight = selected === last - 3 ? last - 5 : last - 4;
          listOfRange = [prevFiveItem, ...generatePage(minRight, last - 1)];
        }
        return [...firstPageItem, ...listOfRange, ...lastPageItem];
      };
      return concatWithPrevNext(generateRangeItem(pageIndex, lastIndex));
    }
  }
  ngOnChanges(changes) {
    const {
      pageIndex,
      pageSize,
      total
    } = changes;
    if (pageIndex || pageSize || total) {
      this.ranges = [(this.pageIndex - 1) * this.pageSize + 1, Math.min(this.pageIndex * this.pageSize, this.total)];
      this.buildIndexes();
    }
  }
};
_NzPaginationDefaultComponent.ɵfac = function NzPaginationDefaultComponent_Factory(t) {
  return new (t || _NzPaginationDefaultComponent)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Directionality, 8));
};
_NzPaginationDefaultComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzPaginationDefaultComponent,
  selectors: [["nz-pagination-default"]],
  viewQuery: function NzPaginationDefaultComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c3, 7);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.template = _t.first);
    }
  },
  inputs: {
    nzSize: "nzSize",
    itemRender: "itemRender",
    showTotal: "showTotal",
    disabled: "disabled",
    locale: "locale",
    showSizeChanger: "showSizeChanger",
    showQuickJumper: "showQuickJumper",
    total: "total",
    pageIndex: "pageIndex",
    pageSize: "pageSize",
    pageSizeOptions: "pageSizeOptions"
  },
  outputs: {
    pageIndexChange: "pageIndexChange",
    pageSizeChange: "pageSizeChange"
  },
  standalone: true,
  features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
  decls: 2,
  vars: 0,
  consts: [["containerTemplate", ""], [1, "ant-pagination-total-text"], ["nz-pagination-item", "", 3, "locale", "type", "index", "disabled", "itemRender", "active", "direction"], ["nz-pagination-options", "", 3, "total", "locale", "disabled", "nzSize", "showSizeChanger", "showQuickJumper", "pageIndex", "pageSize", "pageSizeOptions"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["nz-pagination-item", "", 3, "gotoIndex", "diffIndex", "locale", "type", "index", "disabled", "itemRender", "active", "direction"], ["nz-pagination-options", "", 3, "pageIndexChange", "pageSizeChange", "total", "locale", "disabled", "nzSize", "showSizeChanger", "showQuickJumper", "pageIndex", "pageSize", "pageSizeOptions"]],
  template: function NzPaginationDefaultComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, NzPaginationDefaultComponent_ng_template_0_Template, 5, 2, "ng-template", null, 0, ɵɵtemplateRefExtractor);
    }
  },
  dependencies: [NgTemplateOutlet, NzPaginationItemComponent, NzPaginationOptionsComponent],
  encapsulation: 2,
  changeDetection: 0
});
var NzPaginationDefaultComponent = _NzPaginationDefaultComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzPaginationDefaultComponent, [{
    type: Component,
    args: [{
      selector: "nz-pagination-default",
      preserveWhitespaces: false,
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `
    <ng-template #containerTemplate>
      <ul>
        @if (showTotal) {
          <li class="ant-pagination-total-text">
            <ng-template
              [ngTemplateOutlet]="showTotal"
              [ngTemplateOutletContext]="{ $implicit: total, range: ranges }"
            />
          </li>
        }

        @for (page of listOfPageItem; track trackByPageItem) {
          <li
            nz-pagination-item
            [locale]="locale"
            [type]="page.type"
            [index]="page.index"
            [disabled]="!!page.disabled"
            [itemRender]="itemRender"
            [active]="pageIndex === page.index"
            (gotoIndex)="jumpPage($event)"
            (diffIndex)="jumpDiff($event)"
            [direction]="dir"
          ></li>
        }

        @if (showQuickJumper || showSizeChanger) {
          <li
            nz-pagination-options
            [total]="total"
            [locale]="locale"
            [disabled]="disabled"
            [nzSize]="nzSize"
            [showSizeChanger]="showSizeChanger"
            [showQuickJumper]="showQuickJumper"
            [pageIndex]="pageIndex"
            [pageSize]="pageSize"
            [pageSizeOptions]="pageSizeOptions"
            (pageIndexChange)="onPageIndexChange($event)"
            (pageSizeChange)="onPageSizeChange($event)"
          ></li>
        }
      </ul>
    </ng-template>
  `,
      imports: [NgTemplateOutlet, NzPaginationItemComponent, NzPaginationOptionsComponent],
      standalone: true
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: Renderer2
  }, {
    type: ElementRef
  }, {
    type: Directionality,
    decorators: [{
      type: Optional
    }]
  }], {
    template: [{
      type: ViewChild,
      args: ["containerTemplate", {
        static: true
      }]
    }],
    nzSize: [{
      type: Input
    }],
    itemRender: [{
      type: Input
    }],
    showTotal: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    locale: [{
      type: Input
    }],
    showSizeChanger: [{
      type: Input
    }],
    showQuickJumper: [{
      type: Input
    }],
    total: [{
      type: Input
    }],
    pageIndex: [{
      type: Input
    }],
    pageSize: [{
      type: Input
    }],
    pageSizeOptions: [{
      type: Input
    }],
    pageIndexChange: [{
      type: Output
    }],
    pageSizeChange: [{
      type: Output
    }]
  });
})();
var _NzPaginationSimpleComponent = class _NzPaginationSimpleComponent {
  constructor(cdr, renderer, elementRef, directionality) {
    this.cdr = cdr;
    this.renderer = renderer;
    this.elementRef = elementRef;
    this.directionality = directionality;
    this.itemRender = null;
    this.disabled = false;
    this.total = 0;
    this.pageIndex = 1;
    this.pageSize = 10;
    this.pageIndexChange = new EventEmitter();
    this.lastIndex = 0;
    this.isFirstIndex = false;
    this.isLastIndex = false;
    this.dir = "ltr";
    this.destroy$ = new Subject();
    renderer.removeChild(renderer.parentNode(elementRef.nativeElement), elementRef.nativeElement);
  }
  ngOnInit() {
    this.directionality.change?.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
      this.dir = direction;
      this.updateRtlStyle();
      this.cdr.detectChanges();
    });
    this.dir = this.directionality.value;
    this.updateRtlStyle();
  }
  updateRtlStyle() {
    if (this.dir === "rtl") {
      this.renderer.addClass(this.elementRef.nativeElement, "ant-pagination-rtl");
    } else {
      this.renderer.removeClass(this.elementRef.nativeElement, "ant-pagination-rtl");
    }
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  jumpToPageViaInput($event) {
    const target = $event.target;
    const index = toNumber(target.value, this.pageIndex);
    this.onPageIndexChange(index);
    target.value = `${this.pageIndex}`;
  }
  prePage() {
    this.onPageIndexChange(this.pageIndex - 1);
  }
  nextPage() {
    this.onPageIndexChange(this.pageIndex + 1);
  }
  onPageIndexChange(index) {
    this.pageIndexChange.next(index);
  }
  updateBindingValue() {
    this.lastIndex = Math.ceil(this.total / this.pageSize);
    this.isFirstIndex = this.pageIndex === 1;
    this.isLastIndex = this.pageIndex === this.lastIndex;
  }
  ngOnChanges(changes) {
    const {
      pageIndex,
      total,
      pageSize
    } = changes;
    if (pageIndex || total || pageSize) {
      this.updateBindingValue();
    }
  }
};
_NzPaginationSimpleComponent.ɵfac = function NzPaginationSimpleComponent_Factory(t) {
  return new (t || _NzPaginationSimpleComponent)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Directionality, 8));
};
_NzPaginationSimpleComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzPaginationSimpleComponent,
  selectors: [["nz-pagination-simple"]],
  viewQuery: function NzPaginationSimpleComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c3, 7);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.template = _t.first);
    }
  },
  inputs: {
    itemRender: "itemRender",
    disabled: "disabled",
    locale: "locale",
    total: "total",
    pageIndex: "pageIndex",
    pageSize: "pageSize"
  },
  outputs: {
    pageIndexChange: "pageIndexChange"
  },
  standalone: true,
  features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
  decls: 2,
  vars: 0,
  consts: [["containerTemplate", ""], ["nz-pagination-item", "", "type", "prev", 3, "click", "disabled", "direction", "itemRender"], [1, "ant-pagination-simple-pager"], ["size", "3", 3, "keydown.enter", "disabled", "value"], [1, "ant-pagination-slash"], ["nz-pagination-item", "", "type", "next", 3, "click", "disabled", "direction", "itemRender"]],
  template: function NzPaginationSimpleComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, NzPaginationSimpleComponent_ng_template_0_Template, 8, 12, "ng-template", null, 0, ɵɵtemplateRefExtractor);
    }
  },
  dependencies: [NzPaginationItemComponent],
  encapsulation: 2,
  changeDetection: 0
});
var NzPaginationSimpleComponent = _NzPaginationSimpleComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzPaginationSimpleComponent, [{
    type: Component,
    args: [{
      selector: "nz-pagination-simple",
      preserveWhitespaces: false,
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `
    <ng-template #containerTemplate>
      <ul>
        <li
          nz-pagination-item
          [attr.title]="locale.prev_page"
          [disabled]="isFirstIndex"
          [direction]="dir"
          (click)="prePage()"
          type="prev"
          [itemRender]="itemRender"
        ></li>
        <li [attr.title]="pageIndex + '/' + lastIndex" class="ant-pagination-simple-pager">
          <input [disabled]="disabled" [value]="pageIndex" (keydown.enter)="jumpToPageViaInput($event)" size="3" />
          <span class="ant-pagination-slash">/</span>
          {{ lastIndex }}
        </li>
        <li
          nz-pagination-item
          [attr.title]="locale?.next_page"
          [disabled]="isLastIndex"
          [direction]="dir"
          (click)="nextPage()"
          type="next"
          [itemRender]="itemRender"
        ></li>
      </ul>
    </ng-template>
  `,
      imports: [NzPaginationItemComponent],
      standalone: true
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: Renderer2
  }, {
    type: ElementRef
  }, {
    type: Directionality,
    decorators: [{
      type: Optional
    }]
  }], {
    template: [{
      type: ViewChild,
      args: ["containerTemplate", {
        static: true
      }]
    }],
    itemRender: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    locale: [{
      type: Input
    }],
    total: [{
      type: Input
    }],
    pageIndex: [{
      type: Input
    }],
    pageSize: [{
      type: Input
    }],
    pageIndexChange: [{
      type: Output
    }]
  });
})();
var NZ_CONFIG_MODULE_NAME2 = "pagination";
var _NzPaginationComponent = class _NzPaginationComponent {
  validatePageIndex(value, lastIndex) {
    if (value > lastIndex) {
      return lastIndex;
    } else if (value < 1) {
      return 1;
    } else {
      return value;
    }
  }
  onPageIndexChange(index) {
    const lastIndex = this.getLastIndex(this.nzTotal, this.nzPageSize);
    const validIndex = this.validatePageIndex(index, lastIndex);
    if (validIndex !== this.nzPageIndex && !this.nzDisabled) {
      this.nzPageIndex = validIndex;
      this.nzPageIndexChange.emit(this.nzPageIndex);
    }
  }
  onPageSizeChange(size) {
    this.nzPageSize = size;
    this.nzPageSizeChange.emit(size);
    const lastIndex = this.getLastIndex(this.nzTotal, this.nzPageSize);
    if (this.nzPageIndex > lastIndex) {
      this.onPageIndexChange(lastIndex);
    }
  }
  onTotalChange(total) {
    const lastIndex = this.getLastIndex(total, this.nzPageSize);
    if (this.nzPageIndex > lastIndex) {
      Promise.resolve().then(() => {
        this.onPageIndexChange(lastIndex);
        this.cdr.markForCheck();
      });
    }
  }
  getLastIndex(total, pageSize) {
    return Math.ceil(total / pageSize);
  }
  constructor(i18n, cdr, breakpointService, nzConfigService, directionality) {
    this.i18n = i18n;
    this.cdr = cdr;
    this.breakpointService = breakpointService;
    this.nzConfigService = nzConfigService;
    this.directionality = directionality;
    this._nzModuleName = NZ_CONFIG_MODULE_NAME2;
    this.nzPageSizeChange = new EventEmitter();
    this.nzPageIndexChange = new EventEmitter();
    this.nzShowTotal = null;
    this.nzItemRender = null;
    this.nzSize = "default";
    this.nzPageSizeOptions = [10, 20, 30, 40];
    this.nzShowSizeChanger = false;
    this.nzShowQuickJumper = false;
    this.nzSimple = false;
    this.nzDisabled = false;
    this.nzResponsive = false;
    this.nzHideOnSinglePage = false;
    this.nzTotal = 0;
    this.nzPageIndex = 1;
    this.nzPageSize = 10;
    this.showPagination = true;
    this.size = "default";
    this.dir = "ltr";
    this.destroy$ = new Subject();
    this.total$ = new ReplaySubject(1);
  }
  ngOnInit() {
    this.i18n.localeChange.pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.locale = this.i18n.getLocaleData("Pagination");
      this.cdr.markForCheck();
    });
    this.total$.pipe(takeUntil(this.destroy$)).subscribe((total) => {
      this.onTotalChange(total);
    });
    this.breakpointService.subscribe(gridResponsiveMap).pipe(takeUntil(this.destroy$)).subscribe((bp) => {
      if (this.nzResponsive) {
        this.size = bp === NzBreakpointEnum.xs ? "small" : "default";
        this.cdr.markForCheck();
      }
    });
    this.directionality.change?.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
      this.dir = direction;
      this.cdr.detectChanges();
    });
    this.dir = this.directionality.value;
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  ngOnChanges(changes) {
    const {
      nzHideOnSinglePage,
      nzTotal,
      nzPageSize,
      nzSize
    } = changes;
    if (nzTotal) {
      this.total$.next(this.nzTotal);
    }
    if (nzHideOnSinglePage || nzTotal || nzPageSize) {
      this.showPagination = this.nzHideOnSinglePage && this.nzTotal > this.nzPageSize || this.nzTotal > 0 && !this.nzHideOnSinglePage;
    }
    if (nzSize) {
      this.size = nzSize.currentValue;
    }
  }
};
_NzPaginationComponent.ɵfac = function NzPaginationComponent_Factory(t) {
  return new (t || _NzPaginationComponent)(ɵɵdirectiveInject(NzI18nService), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(NzBreakpointService), ɵɵdirectiveInject(NzConfigService), ɵɵdirectiveInject(Directionality, 8));
};
_NzPaginationComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzPaginationComponent,
  selectors: [["nz-pagination"]],
  hostAttrs: [1, "ant-pagination"],
  hostVars: 8,
  hostBindings: function NzPaginationComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("ant-pagination-simple", ctx.nzSimple)("ant-pagination-disabled", ctx.nzDisabled)("mini", !ctx.nzSimple && ctx.size === "small")("ant-pagination-rtl", ctx.dir === "rtl");
    }
  },
  inputs: {
    nzShowTotal: "nzShowTotal",
    nzItemRender: "nzItemRender",
    nzSize: "nzSize",
    nzPageSizeOptions: "nzPageSizeOptions",
    nzShowSizeChanger: "nzShowSizeChanger",
    nzShowQuickJumper: "nzShowQuickJumper",
    nzSimple: "nzSimple",
    nzDisabled: "nzDisabled",
    nzResponsive: "nzResponsive",
    nzHideOnSinglePage: "nzHideOnSinglePage",
    nzTotal: "nzTotal",
    nzPageIndex: "nzPageIndex",
    nzPageSize: "nzPageSize"
  },
  outputs: {
    nzPageSizeChange: "nzPageSizeChange",
    nzPageIndexChange: "nzPageIndexChange"
  },
  exportAs: ["nzPagination"],
  standalone: true,
  features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
  decls: 5,
  vars: 18,
  consts: [["simplePagination", ""], ["defaultPagination", ""], [3, "pageIndexChange", "disabled", "itemRender", "locale", "pageSize", "total", "pageIndex"], [3, "pageIndexChange", "pageSizeChange", "nzSize", "itemRender", "showTotal", "disabled", "locale", "showSizeChanger", "showQuickJumper", "total", "pageIndex", "pageSize", "pageSizeOptions"], [3, "ngTemplateOutlet"]],
  template: function NzPaginationComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = ɵɵgetCurrentView();
      ɵɵtemplate(0, NzPaginationComponent_Conditional_0_Template, 2, 1);
      ɵɵelementStart(1, "nz-pagination-simple", 2, 0);
      ɵɵlistener("pageIndexChange", function NzPaginationComponent_Template_nz_pagination_simple_pageIndexChange_1_listener($event) {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.onPageIndexChange($event));
      });
      ɵɵelementEnd();
      ɵɵelementStart(3, "nz-pagination-default", 3, 1);
      ɵɵlistener("pageIndexChange", function NzPaginationComponent_Template_nz_pagination_default_pageIndexChange_3_listener($event) {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.onPageIndexChange($event));
      })("pageSizeChange", function NzPaginationComponent_Template_nz_pagination_default_pageSizeChange_3_listener($event) {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.onPageSizeChange($event));
      });
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵconditional(0, ctx.showPagination ? 0 : -1);
      ɵɵadvance();
      ɵɵproperty("disabled", ctx.nzDisabled)("itemRender", ctx.nzItemRender)("locale", ctx.locale)("pageSize", ctx.nzPageSize)("total", ctx.nzTotal)("pageIndex", ctx.nzPageIndex);
      ɵɵadvance(2);
      ɵɵproperty("nzSize", ctx.size)("itemRender", ctx.nzItemRender)("showTotal", ctx.nzShowTotal)("disabled", ctx.nzDisabled)("locale", ctx.locale)("showSizeChanger", ctx.nzShowSizeChanger)("showQuickJumper", ctx.nzShowQuickJumper)("total", ctx.nzTotal)("pageIndex", ctx.nzPageIndex)("pageSize", ctx.nzPageSize)("pageSizeOptions", ctx.nzPageSizeOptions);
    }
  },
  dependencies: [NgTemplateOutlet, NzPaginationSimpleComponent, NzPaginationDefaultComponent],
  encapsulation: 2,
  changeDetection: 0
});
var NzPaginationComponent = _NzPaginationComponent;
__decorate([WithConfig()], NzPaginationComponent.prototype, "nzSize", void 0);
__decorate([WithConfig()], NzPaginationComponent.prototype, "nzPageSizeOptions", void 0);
__decorate([WithConfig(), InputBoolean()], NzPaginationComponent.prototype, "nzShowSizeChanger", void 0);
__decorate([WithConfig(), InputBoolean()], NzPaginationComponent.prototype, "nzShowQuickJumper", void 0);
__decorate([WithConfig(), InputBoolean()], NzPaginationComponent.prototype, "nzSimple", void 0);
__decorate([InputBoolean()], NzPaginationComponent.prototype, "nzDisabled", void 0);
__decorate([InputBoolean()], NzPaginationComponent.prototype, "nzResponsive", void 0);
__decorate([InputBoolean()], NzPaginationComponent.prototype, "nzHideOnSinglePage", void 0);
__decorate([InputNumber()], NzPaginationComponent.prototype, "nzTotal", void 0);
__decorate([InputNumber()], NzPaginationComponent.prototype, "nzPageIndex", void 0);
__decorate([InputNumber()], NzPaginationComponent.prototype, "nzPageSize", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzPaginationComponent, [{
    type: Component,
    args: [{
      selector: "nz-pagination",
      exportAs: "nzPagination",
      preserveWhitespaces: false,
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `
    @if (showPagination) {
      @if (nzSimple) {
        <ng-template [ngTemplateOutlet]="simplePagination.template" />
      } @else {
        <ng-template [ngTemplateOutlet]="defaultPagination.template" />
      }
    }

    <nz-pagination-simple
      #simplePagination
      [disabled]="nzDisabled"
      [itemRender]="nzItemRender"
      [locale]="locale"
      [pageSize]="nzPageSize"
      [total]="nzTotal"
      [pageIndex]="nzPageIndex"
      (pageIndexChange)="onPageIndexChange($event)"
    ></nz-pagination-simple>
    <nz-pagination-default
      #defaultPagination
      [nzSize]="size"
      [itemRender]="nzItemRender"
      [showTotal]="nzShowTotal"
      [disabled]="nzDisabled"
      [locale]="locale"
      [showSizeChanger]="nzShowSizeChanger"
      [showQuickJumper]="nzShowQuickJumper"
      [total]="nzTotal"
      [pageIndex]="nzPageIndex"
      [pageSize]="nzPageSize"
      [pageSizeOptions]="nzPageSizeOptions"
      (pageIndexChange)="onPageIndexChange($event)"
      (pageSizeChange)="onPageSizeChange($event)"
    ></nz-pagination-default>
  `,
      host: {
        class: "ant-pagination",
        "[class.ant-pagination-simple]": "nzSimple",
        "[class.ant-pagination-disabled]": "nzDisabled",
        "[class.mini]": `!nzSimple && size === 'small'`,
        "[class.ant-pagination-rtl]": `dir === 'rtl'`
      },
      imports: [NgTemplateOutlet, NzPaginationSimpleComponent, NzPaginationDefaultComponent],
      standalone: true
    }]
  }], () => [{
    type: NzI18nService
  }, {
    type: ChangeDetectorRef
  }, {
    type: NzBreakpointService
  }, {
    type: NzConfigService
  }, {
    type: Directionality,
    decorators: [{
      type: Optional
    }]
  }], {
    nzPageSizeChange: [{
      type: Output
    }],
    nzPageIndexChange: [{
      type: Output
    }],
    nzShowTotal: [{
      type: Input
    }],
    nzItemRender: [{
      type: Input
    }],
    nzSize: [{
      type: Input
    }],
    nzPageSizeOptions: [{
      type: Input
    }],
    nzShowSizeChanger: [{
      type: Input
    }],
    nzShowQuickJumper: [{
      type: Input
    }],
    nzSimple: [{
      type: Input
    }],
    nzDisabled: [{
      type: Input
    }],
    nzResponsive: [{
      type: Input
    }],
    nzHideOnSinglePage: [{
      type: Input
    }],
    nzTotal: [{
      type: Input
    }],
    nzPageIndex: [{
      type: Input
    }],
    nzPageSize: [{
      type: Input
    }]
  });
})();
var _NzPaginationModule = class _NzPaginationModule {
};
_NzPaginationModule.ɵfac = function NzPaginationModule_Factory(t) {
  return new (t || _NzPaginationModule)();
};
_NzPaginationModule.ɵmod = ɵɵdefineNgModule({
  type: _NzPaginationModule,
  imports: [NzPaginationComponent, NzPaginationSimpleComponent, NzPaginationOptionsComponent, NzPaginationItemComponent, NzPaginationDefaultComponent],
  exports: [NzPaginationComponent]
});
_NzPaginationModule.ɵinj = ɵɵdefineInjector({
  imports: [NzPaginationComponent, NzPaginationSimpleComponent, NzPaginationOptionsComponent, NzPaginationItemComponent, NzPaginationDefaultComponent]
});
var NzPaginationModule = _NzPaginationModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzPaginationModule, [{
    type: NgModule,
    args: [{
      imports: [NzPaginationComponent, NzPaginationSimpleComponent, NzPaginationOptionsComponent, NzPaginationItemComponent, NzPaginationDefaultComponent],
      exports: [NzPaginationComponent]
    }]
  }], null, null);
})();

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-table.mjs
var _c04 = ["*"];
function NzTableFilterComponent_ng_template_1_Template(rf, ctx) {
}
function NzTableFilterComponent_ng_container_2_li_7_label_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "label", 15);
    ɵɵlistener("ngModelChange", function NzTableFilterComponent_ng_container_2_li_7_label_1_Template_label_ngModelChange_0_listener() {
      ɵɵrestoreView(_r5);
      const f_r4 = ɵɵnextContext().$implicit;
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.check(f_r4));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const f_r4 = ɵɵnextContext().$implicit;
    ɵɵproperty("ngModel", f_r4.checked);
  }
}
function NzTableFilterComponent_ng_container_2_li_7_label_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "label", 16);
    ɵɵlistener("ngModelChange", function NzTableFilterComponent_ng_container_2_li_7_label_2_Template_label_ngModelChange_0_listener() {
      ɵɵrestoreView(_r6);
      const f_r4 = ɵɵnextContext().$implicit;
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.check(f_r4));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const f_r4 = ɵɵnextContext().$implicit;
    ɵɵproperty("ngModel", f_r4.checked);
  }
}
function NzTableFilterComponent_ng_container_2_li_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li", 12);
    ɵɵlistener("click", function NzTableFilterComponent_ng_container_2_li_7_Template_li_click_0_listener() {
      const f_r4 = ɵɵrestoreView(_r3).$implicit;
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.check(f_r4));
    });
    ɵɵtemplate(1, NzTableFilterComponent_ng_container_2_li_7_label_1_Template, 1, 1, "label", 13)(2, NzTableFilterComponent_ng_container_2_li_7_label_2_Template, 1, 1, "label", 14);
    ɵɵelementStart(3, "span");
    ɵɵtext(4);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const f_r4 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("nzSelected", f_r4.checked);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r1.filterMultiple);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.filterMultiple);
    ɵɵadvance(2);
    ɵɵtextInterpolate(f_r4.text);
  }
}
function NzTableFilterComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "nz-filter-trigger", 4);
    ɵɵlistener("nzVisibleChange", function NzTableFilterComponent_ng_container_2_Template_nz_filter_trigger_nzVisibleChange_1_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onVisibleChange($event));
    });
    ɵɵelement(2, "span", 5);
    ɵɵelementEnd();
    ɵɵelementStart(3, "nz-dropdown-menu", null, 0)(5, "div", 6)(6, "ul", 7);
    ɵɵtemplate(7, NzTableFilterComponent_ng_container_2_li_7_Template, 5, 4, "li", 8);
    ɵɵelementEnd();
    ɵɵelementStart(8, "div", 9)(9, "button", 10);
    ɵɵlistener("click", function NzTableFilterComponent_ng_container_2_Template_button_click_9_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.reset());
    });
    ɵɵtext(10);
    ɵɵelementEnd();
    ɵɵelementStart(11, "button", 11);
    ɵɵlistener("click", function NzTableFilterComponent_ng_container_2_Template_button_click_11_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.confirm());
    });
    ɵɵtext(12);
    ɵɵelementEnd()()()();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const filterMenu_r7 = ɵɵreference(4);
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("nzVisible", ctx_r1.isVisible)("nzActive", ctx_r1.isChecked)("nzDropdownMenu", filterMenu_r7);
    ɵɵadvance(6);
    ɵɵproperty("ngForOf", ctx_r1.listOfParsedFilter)("ngForTrackBy", ctx_r1.trackByValue);
    ɵɵadvance(2);
    ɵɵproperty("disabled", !ctx_r1.isChecked);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r1.locale.filterReset, " ");
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r1.locale.filterConfirm);
  }
}
function NzTableSelectionComponent_label_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "label", 3);
    ɵɵlistener("ngModelChange", function NzTableSelectionComponent_label_0_Template_label_ngModelChange_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onCheckedChange($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵclassProp("ant-table-selection-select-all-custom", ctx_r1.showRowSelection);
    ɵɵproperty("ngModel", ctx_r1.checked)("nzDisabled", ctx_r1.disabled)("nzIndeterminate", ctx_r1.indeterminate);
    ɵɵattribute("aria-label", ctx_r1.label);
  }
}
function NzTableSelectionComponent_div_1_li_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li", 9);
    ɵɵlistener("click", function NzTableSelectionComponent_div_1_li_6_Template_li_click_0_listener() {
      const selection_r4 = ɵɵrestoreView(_r3).$implicit;
      return ɵɵresetView(selection_r4.onSelect());
    });
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const selection_r4 = ctx.$implicit;
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", selection_r4.text, " ");
  }
}
function NzTableSelectionComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 4)(1, "span", 5);
    ɵɵelement(2, "span", 6);
    ɵɵelementEnd();
    ɵɵelementStart(3, "nz-dropdown-menu", null, 0)(5, "ul", 7);
    ɵɵtemplate(6, NzTableSelectionComponent_div_1_li_6_Template, 2, 1, "li", 8);
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    const selectionMenu_r5 = ɵɵreference(4);
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("nzDropdownMenu", selectionMenu_r5);
    ɵɵadvance(5);
    ɵɵproperty("ngForOf", ctx_r1.listOfSelections);
  }
}
function NzTableSortersComponent_ng_template_1_Template(rf, ctx) {
}
function NzTableSortersComponent_span_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 6);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵclassProp("active", ctx_r0.sortOrder === "ascend");
  }
}
function NzTableSortersComponent_span_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 7);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵclassProp("active", ctx_r0.sortOrder === "descend");
  }
}
var _c13 = ["nzChecked", ""];
function NzTdAddOnComponent_ng_container_0_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 5);
    ɵɵlistener("expandChange", function NzTdAddOnComponent_ng_container_0_ng_template_2_Template_button_expandChange_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onExpandChange($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("expand", ctx_r1.nzExpand)("spaceMode", !ctx_r1.nzShowExpand);
  }
}
function NzTdAddOnComponent_ng_container_0_ng_container_4_ng_template_1_Template(rf, ctx) {
}
function NzTdAddOnComponent_ng_container_0_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, NzTdAddOnComponent_ng_container_0_ng_container_4_ng_template_1_Template, 0, 0, "ng-template", 6);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.nzExpandIcon);
  }
}
function NzTdAddOnComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "nz-row-indent", 3);
    ɵɵtemplate(2, NzTdAddOnComponent_ng_container_0_ng_template_2_Template, 1, 2, "ng-template", null, 0, ɵɵtemplateRefExtractor)(4, NzTdAddOnComponent_ng_container_0_ng_container_4_Template, 2, 1, "ng-container", 4);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const rowExpand_r3 = ɵɵreference(3);
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("indentSize", ctx_r1.nzIndentSize);
    ɵɵadvance(3);
    ɵɵproperty("ngIf", ctx_r1.nzExpandIcon)("ngIfElse", rowExpand_r3);
  }
}
function NzTdAddOnComponent_label_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "label", 7);
    ɵɵlistener("ngModelChange", function NzTdAddOnComponent_label_1_Template_label_ngModelChange_0_listener($event) {
      ɵɵrestoreView(_r4);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onCheckedChange($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("nzDisabled", ctx_r1.nzDisabled)("ngModel", ctx_r1.nzChecked)("nzIndeterminate", ctx_r1.nzIndeterminate);
    ɵɵattribute("aria-label", ctx_r1.nzLabel);
  }
}
var _c23 = ["nzColumnKey", ""];
var _c32 = [[["", "nz-th-extra", ""]], [["nz-filter-trigger"]], "*"];
var _c42 = ["[nz-th-extra]", "nz-filter-trigger", "*"];
function NzThAddOnComponent_nz_table_filter_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "nz-table-filter", 5);
    ɵɵlistener("filterChange", function NzThAddOnComponent_nz_table_filter_0_Template_nz_table_filter_filterChange_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onFilterValueChange($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    const notFilterTemplate_r3 = ɵɵreference(2);
    const extraTemplate_r4 = ɵɵreference(4);
    ɵɵproperty("contentTemplate", notFilterTemplate_r3)("extraTemplate", extraTemplate_r4)("customFilter", ctx_r1.nzCustomFilter)("filterMultiple", ctx_r1.nzFilterMultiple)("listOfFilter", ctx_r1.nzFilters);
  }
}
function NzThAddOnComponent_ng_template_1_ng_template_0_Template(rf, ctx) {
}
function NzThAddOnComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NzThAddOnComponent_ng_template_1_ng_template_0_Template, 0, 0, "ng-template", 6);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    const sortTemplate_r5 = ɵɵreference(6);
    const contentTemplate_r6 = ɵɵreference(8);
    ɵɵproperty("ngTemplateOutlet", ctx_r1.nzShowSort ? sortTemplate_r5 : contentTemplate_r6);
  }
}
function NzThAddOnComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵprojection(0);
    ɵɵprojection(1, 1);
  }
}
function NzThAddOnComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "nz-table-sorters", 7);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    const contentTemplate_r6 = ɵɵreference(8);
    ɵɵproperty("sortOrder", ctx_r1.sortOrder)("sortDirections", ctx_r1.sortDirections)("contentTemplate", contentTemplate_r6);
  }
}
function NzThAddOnComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵprojection(0, 2);
  }
}
var _c5 = ["nzSelections", ""];
var _c6 = ["nz-table-content", ""];
function NzTableContentComponent_col_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "col");
  }
  if (rf & 2) {
    const width_r1 = ctx.$implicit;
    ɵɵstyleProp("width", width_r1)("min-width", width_r1);
  }
}
function NzTableContentComponent_thead_1_ng_template_1_Template(rf, ctx) {
}
function NzTableContentComponent_thead_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "thead", 3);
    ɵɵtemplate(1, NzTableContentComponent_thead_1_ng_template_1_Template, 0, 0, "ng-template", 2);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.theadTemplate);
  }
}
function NzTableContentComponent_ng_template_2_Template(rf, ctx) {
}
var _c7 = ["tdElement"];
var _c8 = ["nz-table-fixed-row", ""];
function NzTableFixedRowComponent_div_2_ng_template_2_Template(rf, ctx) {
}
function NzTableFixedRowComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 4);
    ɵɵpipe(1, "async");
    ɵɵtemplate(2, NzTableFixedRowComponent_div_2_ng_template_2_Template, 0, 0, "ng-template", 5);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    const contentTemplate_r2 = ɵɵreference(5);
    ɵɵstyleProp("width", ɵɵpipeBind1(1, 3, ctx_r0.hostWidth$), "px");
    ɵɵadvance(2);
    ɵɵproperty("ngTemplateOutlet", contentTemplate_r2);
  }
}
function NzTableFixedRowComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵprojection(0);
  }
}
var _c9 = ["nz-table-measure-row", ""];
function NzTrMeasureComponent_td_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "td", 2, 0);
  }
}
function NzTbodyComponent_ng_container_0_tr_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "tr", 3);
    ɵɵlistener("listOfAutoWidth", function NzTbodyComponent_ng_container_0_tr_1_Template_tr_listOfAutoWidth_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onListOfAutoWidthChange($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const listOfMeasureColumn_r3 = ɵɵnextContext().ngIf;
    ɵɵproperty("listOfMeasureColumn", listOfMeasureColumn_r3);
  }
}
function NzTbodyComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, NzTbodyComponent_ng_container_0_tr_1_Template, 1, 1, "tr", 2);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const listOfMeasureColumn_r3 = ctx.ngIf;
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.isInsideTable && listOfMeasureColumn_r3.length);
  }
}
function NzTbodyComponent_tr_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "tr", 4);
    ɵɵelement(1, "nz-embed-empty", 5);
    ɵɵpipe(2, "async");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("specificContent", ɵɵpipeBind1(2, 1, ctx_r1.noResult$));
  }
}
var _c10 = ["tableHeaderElement"];
var _c11 = ["tableBodyElement"];
var _c122 = (a0, a1) => ({
  $implicit: a0,
  index: a1
});
function NzTableInnerScrollComponent_ng_container_0_div_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 8, 1);
    ɵɵelement(2, "table", 9);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵproperty("ngStyle", ctx_r0.bodyStyleMap);
    ɵɵadvance(2);
    ɵɵproperty("scrollX", ctx_r0.scrollX)("listOfColWidth", ctx_r0.listOfColWidth)("contentTemplate", ctx_r0.contentTemplate);
  }
}
function NzTableInnerScrollComponent_ng_container_0_cdk_virtual_scroll_viewport_5_ng_container_4_ng_template_1_Template(rf, ctx) {
}
function NzTableInnerScrollComponent_ng_container_0_cdk_virtual_scroll_viewport_5_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, NzTableInnerScrollComponent_ng_container_0_cdk_virtual_scroll_viewport_5_ng_container_4_ng_template_1_Template, 0, 0, "ng-template", 13);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.virtualTemplate)("ngTemplateOutletContext", ɵɵpureFunction2(2, _c122, item_r2, i_r3));
  }
}
function NzTableInnerScrollComponent_ng_container_0_cdk_virtual_scroll_viewport_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "cdk-virtual-scroll-viewport", 10, 1)(2, "table", 11)(3, "tbody");
    ɵɵtemplate(4, NzTableInnerScrollComponent_ng_container_0_cdk_virtual_scroll_viewport_5_ng_container_4_Template, 2, 5, "ng-container", 12);
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵstyleProp("height", ctx_r0.data.length ? ctx_r0.scrollY : ctx_r0.noDateVirtualHeight);
    ɵɵproperty("itemSize", ctx_r0.virtualItemSize)("maxBufferPx", ctx_r0.virtualMaxBufferPx)("minBufferPx", ctx_r0.virtualMinBufferPx);
    ɵɵadvance(2);
    ɵɵproperty("scrollX", ctx_r0.scrollX)("listOfColWidth", ctx_r0.listOfColWidth);
    ɵɵadvance(2);
    ɵɵproperty("cdkVirtualForOf", ctx_r0.data)("cdkVirtualForTrackBy", ctx_r0.virtualForTrackBy);
  }
}
function NzTableInnerScrollComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 4, 0);
    ɵɵelement(3, "table", 5);
    ɵɵelementEnd();
    ɵɵtemplate(4, NzTableInnerScrollComponent_ng_container_0_div_4_Template, 3, 4, "div", 6)(5, NzTableInnerScrollComponent_ng_container_0_cdk_virtual_scroll_viewport_5_Template, 5, 9, "cdk-virtual-scroll-viewport", 7);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngStyle", ctx_r0.headerStyleMap);
    ɵɵadvance(2);
    ɵɵproperty("scrollX", ctx_r0.scrollX)("listOfColWidth", ctx_r0.listOfColWidth)("theadTemplate", ctx_r0.theadTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r0.virtualTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.virtualTemplate);
  }
}
function NzTableInnerScrollComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 14, 1);
    ɵɵelement(2, "table", 15);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngStyle", ctx_r0.bodyStyleMap);
    ɵɵadvance(2);
    ɵɵproperty("scrollX", ctx_r0.scrollX)("listOfColWidth", ctx_r0.listOfColWidth)("theadTemplate", ctx_r0.theadTemplate)("contentTemplate", ctx_r0.contentTemplate);
  }
}
function NzTableTitleFooterComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r0.title);
  }
}
function NzTableTitleFooterComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r0.footer);
  }
}
function NzTableComponent_ng_container_1_ng_template_1_Template(rf, ctx) {
}
function NzTableComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, NzTableComponent_ng_container_1_ng_template_1_Template, 0, 0, "ng-template", 10);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    ɵɵnextContext();
    const paginationTemplate_r1 = ɵɵreference(11);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", paginationTemplate_r1);
  }
}
function NzTableComponent_nz_table_title_footer_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "nz-table-title-footer", 11);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("title", ctx_r1.nzTitle);
  }
}
function NzTableComponent_nz_table_inner_scroll_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "nz-table-inner-scroll", 12);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    const tableMainElement_r3 = ɵɵreference(3);
    const contentTemplate_r4 = ɵɵreference(13);
    ɵɵproperty("data", ctx_r1.data)("scrollX", ctx_r1.scrollX)("scrollY", ctx_r1.scrollY)("contentTemplate", contentTemplate_r4)("listOfColWidth", ctx_r1.listOfAutoColWidth)("theadTemplate", ctx_r1.theadTemplate)("verticalScrollBarWidth", ctx_r1.verticalScrollBarWidth)("virtualTemplate", ctx_r1.nzVirtualScrollDirective ? ctx_r1.nzVirtualScrollDirective.templateRef : null)("virtualItemSize", ctx_r1.nzVirtualItemSize)("virtualMaxBufferPx", ctx_r1.nzVirtualMaxBufferPx)("virtualMinBufferPx", ctx_r1.nzVirtualMinBufferPx)("tableMainElement", tableMainElement_r3)("virtualForTrackBy", ctx_r1.nzVirtualForTrackBy);
  }
}
function NzTableComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "nz-table-inner-default", 13);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    const contentTemplate_r4 = ɵɵreference(13);
    ɵɵproperty("tableLayout", ctx_r1.nzTableLayout)("listOfColWidth", ctx_r1.listOfManualColWidth)("theadTemplate", ctx_r1.theadTemplate)("contentTemplate", contentTemplate_r4);
  }
}
function NzTableComponent_nz_table_title_footer_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "nz-table-title-footer", 14);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("footer", ctx_r1.nzFooter);
  }
}
function NzTableComponent_ng_container_9_ng_template_1_Template(rf, ctx) {
}
function NzTableComponent_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, NzTableComponent_ng_container_9_ng_template_1_Template, 0, 0, "ng-template", 10);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    ɵɵnextContext();
    const paginationTemplate_r1 = ɵɵreference(11);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", paginationTemplate_r1);
  }
}
function NzTableComponent_ng_template_10_nz_pagination_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "nz-pagination", 16);
    ɵɵlistener("nzPageSizeChange", function NzTableComponent_ng_template_10_nz_pagination_0_Template_nz_pagination_nzPageSizeChange_0_listener($event) {
      ɵɵrestoreView(_r5);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onPageSizeChange($event));
    })("nzPageIndexChange", function NzTableComponent_ng_template_10_nz_pagination_0_Template_nz_pagination_nzPageIndexChange_0_listener($event) {
      ɵɵrestoreView(_r5);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onPageIndexChange($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("hidden", !ctx_r1.showPagination)("nzShowSizeChanger", ctx_r1.nzShowSizeChanger)("nzPageSizeOptions", ctx_r1.nzPageSizeOptions)("nzItemRender", ctx_r1.nzItemRender)("nzShowQuickJumper", ctx_r1.nzShowQuickJumper)("nzHideOnSinglePage", ctx_r1.nzHideOnSinglePage)("nzShowTotal", ctx_r1.nzShowTotal)("nzSize", ctx_r1.nzPaginationType === "small" ? "small" : ctx_r1.nzSize === "default" ? "default" : "small")("nzPageSize", ctx_r1.nzPageSize)("nzTotal", ctx_r1.nzTotal)("nzSimple", ctx_r1.nzSimple)("nzPageIndex", ctx_r1.nzPageIndex);
  }
}
function NzTableComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NzTableComponent_ng_template_10_nz_pagination_0_Template, 1, 12, "nz-pagination", 15);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("ngIf", ctx_r1.nzShowPagination && ctx_r1.data.length);
  }
}
function NzTableComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵprojection(0);
  }
}
var _c132 = ["contentTemplate"];
function NzTheadComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵprojection(0);
  }
}
function NzTheadComponent_ng_container_2_ng_template_1_Template(rf, ctx) {
}
function NzTheadComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, NzTheadComponent_ng_container_2_ng_template_1_Template, 0, 0, "ng-template", 2);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    ɵɵnextContext();
    const contentTemplate_r1 = ɵɵreference(1);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", contentTemplate_r1);
  }
}
var NZ_CONFIG_MODULE_NAME$1 = "filterTrigger";
var _NzFilterTriggerComponent = class _NzFilterTriggerComponent {
  onVisibleChange(visible) {
    this.nzVisible = visible;
    this.nzVisibleChange.next(visible);
  }
  hide() {
    this.nzVisible = false;
    this.cdr.markForCheck();
  }
  show() {
    this.nzVisible = true;
    this.cdr.markForCheck();
  }
  constructor(nzConfigService, ngZone, cdr, destroy$) {
    this.nzConfigService = nzConfigService;
    this.ngZone = ngZone;
    this.cdr = cdr;
    this.destroy$ = destroy$;
    this._nzModuleName = NZ_CONFIG_MODULE_NAME$1;
    this.nzActive = false;
    this.nzVisible = false;
    this.nzBackdrop = false;
    this.nzVisibleChange = new EventEmitter();
  }
  ngOnInit() {
    this.ngZone.runOutsideAngular(() => {
      fromEvent(this.nzDropdown.nativeElement, "click").pipe(takeUntil(this.destroy$)).subscribe((event) => {
        event.stopPropagation();
      });
    });
  }
};
_NzFilterTriggerComponent.ɵfac = function NzFilterTriggerComponent_Factory(t) {
  return new (t || _NzFilterTriggerComponent)(ɵɵdirectiveInject(NzConfigService), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(NzDestroyService));
};
_NzFilterTriggerComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzFilterTriggerComponent,
  selectors: [["nz-filter-trigger"]],
  viewQuery: function NzFilterTriggerComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(NzDropDownDirective, 7, ElementRef);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.nzDropdown = _t.first);
    }
  },
  inputs: {
    nzActive: "nzActive",
    nzDropdownMenu: "nzDropdownMenu",
    nzVisible: "nzVisible",
    nzBackdrop: "nzBackdrop"
  },
  outputs: {
    nzVisibleChange: "nzVisibleChange"
  },
  exportAs: ["nzFilterTrigger"],
  standalone: true,
  features: [ɵɵProvidersFeature([NzDestroyService]), ɵɵStandaloneFeature],
  ngContentSelectors: _c04,
  decls: 2,
  vars: 8,
  consts: [["nz-dropdown", "", "nzTrigger", "click", "nzPlacement", "bottomRight", 1, "ant-table-filter-trigger", 3, "nzVisibleChange", "nzBackdrop", "nzClickHide", "nzDropdownMenu", "nzVisible"]],
  template: function NzFilterTriggerComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵelementStart(0, "span", 0);
      ɵɵlistener("nzVisibleChange", function NzFilterTriggerComponent_Template_span_nzVisibleChange_0_listener($event) {
        return ctx.onVisibleChange($event);
      });
      ɵɵprojection(1);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵclassProp("active", ctx.nzActive)("ant-table-filter-open", ctx.nzVisible);
      ɵɵproperty("nzBackdrop", ctx.nzBackdrop)("nzClickHide", false)("nzDropdownMenu", ctx.nzDropdownMenu)("nzVisible", ctx.nzVisible);
    }
  },
  dependencies: [NzDropDownModule, NzDropDownDirective],
  encapsulation: 2,
  changeDetection: 0
});
var NzFilterTriggerComponent = _NzFilterTriggerComponent;
__decorate([WithConfig(), InputBoolean()], NzFilterTriggerComponent.prototype, "nzBackdrop", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzFilterTriggerComponent, [{
    type: Component,
    args: [{
      selector: "nz-filter-trigger",
      exportAs: `nzFilterTrigger`,
      changeDetection: ChangeDetectionStrategy.OnPush,
      preserveWhitespaces: false,
      encapsulation: ViewEncapsulation$1.None,
      template: `
    <span
      nz-dropdown
      class="ant-table-filter-trigger"
      nzTrigger="click"
      nzPlacement="bottomRight"
      [nzBackdrop]="nzBackdrop"
      [nzClickHide]="false"
      [nzDropdownMenu]="nzDropdownMenu"
      [class.active]="nzActive"
      [class.ant-table-filter-open]="nzVisible"
      [nzVisible]="nzVisible"
      (nzVisibleChange)="onVisibleChange($event)"
    >
      <ng-content></ng-content>
    </span>
  `,
      providers: [NzDestroyService],
      imports: [NzDropDownModule],
      standalone: true
    }]
  }], () => [{
    type: NzConfigService
  }, {
    type: NgZone
  }, {
    type: ChangeDetectorRef
  }, {
    type: NzDestroyService
  }], {
    nzActive: [{
      type: Input
    }],
    nzDropdownMenu: [{
      type: Input
    }],
    nzVisible: [{
      type: Input
    }],
    nzBackdrop: [{
      type: Input
    }],
    nzVisibleChange: [{
      type: Output
    }],
    nzDropdown: [{
      type: ViewChild,
      args: [NzDropDownDirective, {
        static: true,
        read: ElementRef
      }]
    }]
  });
})();
var _NzTableFilterComponent = class _NzTableFilterComponent {
  trackByValue(_, item) {
    return item.value;
  }
  check(filter2) {
    if (this.filterMultiple) {
      this.listOfParsedFilter = this.listOfParsedFilter.map((item) => {
        if (item === filter2) {
          return __spreadProps(__spreadValues({}, item), {
            checked: !filter2.checked
          });
        } else {
          return item;
        }
      });
      filter2.checked = !filter2.checked;
    } else {
      this.listOfParsedFilter = this.listOfParsedFilter.map((item) => __spreadProps(__spreadValues({}, item), {
        checked: item === filter2
      }));
    }
    this.isChecked = this.getCheckedStatus(this.listOfParsedFilter);
  }
  confirm() {
    this.isVisible = false;
    this.emitFilterData();
  }
  reset() {
    this.isVisible = false;
    this.listOfParsedFilter = this.parseListOfFilter(this.listOfFilter, true);
    this.isChecked = this.getCheckedStatus(this.listOfParsedFilter);
    this.emitFilterData();
  }
  onVisibleChange(value) {
    this.isVisible = value;
    if (!value) {
      this.emitFilterData();
    } else {
      this.listOfChecked = this.listOfParsedFilter.filter((item) => item.checked).map((item) => item.value);
    }
  }
  emitFilterData() {
    const listOfChecked = this.listOfParsedFilter.filter((item) => item.checked).map((item) => item.value);
    if (!arraysEqual(this.listOfChecked, listOfChecked)) {
      if (this.filterMultiple) {
        this.filterChange.emit(listOfChecked);
      } else {
        this.filterChange.emit(listOfChecked.length > 0 ? listOfChecked[0] : null);
      }
    }
  }
  parseListOfFilter(listOfFilter, reset) {
    return listOfFilter.map((item) => {
      const checked = reset ? false : !!item.byDefault;
      return {
        text: item.text,
        value: item.value,
        checked
      };
    });
  }
  getCheckedStatus(listOfParsedFilter) {
    return listOfParsedFilter.some((item) => item.checked);
  }
  constructor(cdr, i18n) {
    this.cdr = cdr;
    this.i18n = i18n;
    this.contentTemplate = null;
    this.customFilter = false;
    this.extraTemplate = null;
    this.filterMultiple = true;
    this.listOfFilter = [];
    this.filterChange = new EventEmitter();
    this.destroy$ = new Subject();
    this.isChecked = false;
    this.isVisible = false;
    this.listOfParsedFilter = [];
    this.listOfChecked = [];
  }
  ngOnInit() {
    this.i18n.localeChange.pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.locale = this.i18n.getLocaleData("Table");
      this.cdr.markForCheck();
    });
  }
  ngOnChanges(changes) {
    const {
      listOfFilter
    } = changes;
    if (listOfFilter && this.listOfFilter && this.listOfFilter.length) {
      this.listOfParsedFilter = this.parseListOfFilter(this.listOfFilter);
      this.isChecked = this.getCheckedStatus(this.listOfParsedFilter);
    }
  }
  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
};
_NzTableFilterComponent.ɵfac = function NzTableFilterComponent_Factory(t) {
  return new (t || _NzTableFilterComponent)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(NzI18nService));
};
_NzTableFilterComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzTableFilterComponent,
  selectors: [["nz-table-filter"]],
  hostAttrs: [1, "ant-table-filter-column"],
  inputs: {
    contentTemplate: "contentTemplate",
    customFilter: "customFilter",
    extraTemplate: "extraTemplate",
    filterMultiple: "filterMultiple",
    listOfFilter: "listOfFilter"
  },
  outputs: {
    filterChange: "filterChange"
  },
  standalone: true,
  features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
  decls: 3,
  vars: 3,
  consts: [["filterMenu", "nzDropdownMenu"], [1, "ant-table-column-title"], [3, "ngTemplateOutlet"], [4, "ngIf", "ngIfElse"], [3, "nzVisibleChange", "nzVisible", "nzActive", "nzDropdownMenu"], ["nz-icon", "", "nzType", "filter", "nzTheme", "fill"], [1, "ant-table-filter-dropdown"], ["nz-menu", ""], ["nz-menu-item", "", 3, "nzSelected", "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "ant-table-filter-dropdown-btns"], ["nz-button", "", "nzType", "link", "nzSize", "small", 3, "click", "disabled"], ["nz-button", "", "nzType", "primary", "nzSize", "small", 3, "click"], ["nz-menu-item", "", 3, "click", "nzSelected"], ["nz-radio", "", 3, "ngModel", "ngModelChange", 4, "ngIf"], ["nz-checkbox", "", 3, "ngModel", "ngModelChange", 4, "ngIf"], ["nz-radio", "", 3, "ngModelChange", "ngModel"], ["nz-checkbox", "", 3, "ngModelChange", "ngModel"]],
  template: function NzTableFilterComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "span", 1);
      ɵɵtemplate(1, NzTableFilterComponent_ng_template_1_Template, 0, 0, "ng-template", 2);
      ɵɵelementEnd();
      ɵɵtemplate(2, NzTableFilterComponent_ng_container_2_Template, 13, 8, "ng-container", 3);
    }
    if (rf & 2) {
      ɵɵadvance();
      ɵɵproperty("ngTemplateOutlet", ctx.contentTemplate);
      ɵɵadvance();
      ɵɵproperty("ngIf", !ctx.customFilter)("ngIfElse", ctx.extraTemplate);
    }
  },
  dependencies: [NgTemplateOutlet, NgIf, NzFilterTriggerComponent, NzIconModule, NzIconDirective, NzDropDownModule, NzMenuDirective, NzMenuItemComponent, NzDropdownMenuComponent, NgForOf, NzRadioComponent, NzCheckboxModule, NzCheckboxComponent, FormsModule, NgControlStatus, NgModel, NzButtonModule, NzButtonComponent, NzTransitionPatchDirective, NzWaveDirective],
  encapsulation: 2,
  changeDetection: 0
});
var NzTableFilterComponent = _NzTableFilterComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTableFilterComponent, [{
    type: Component,
    args: [{
      selector: "nz-table-filter",
      preserveWhitespaces: false,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      template: `
    <span class="ant-table-column-title">
      <ng-template [ngTemplateOutlet]="contentTemplate"></ng-template>
    </span>
    <ng-container *ngIf="!customFilter; else extraTemplate">
      <nz-filter-trigger
        [nzVisible]="isVisible"
        [nzActive]="isChecked"
        [nzDropdownMenu]="filterMenu"
        (nzVisibleChange)="onVisibleChange($event)"
      >
        <span nz-icon nzType="filter" nzTheme="fill"></span>
      </nz-filter-trigger>
      <nz-dropdown-menu #filterMenu="nzDropdownMenu">
        <div class="ant-table-filter-dropdown">
          <ul nz-menu>
            <li
              nz-menu-item
              [nzSelected]="f.checked"
              *ngFor="let f of listOfParsedFilter; trackBy: trackByValue"
              (click)="check(f)"
            >
              <label nz-radio *ngIf="!filterMultiple" [ngModel]="f.checked" (ngModelChange)="check(f)"></label>
              <label nz-checkbox *ngIf="filterMultiple" [ngModel]="f.checked" (ngModelChange)="check(f)"></label>
              <span>{{ f.text }}</span>
            </li>
          </ul>
          <div class="ant-table-filter-dropdown-btns">
            <button nz-button nzType="link" nzSize="small" (click)="reset()" [disabled]="!isChecked">
              {{ locale.filterReset }}
            </button>
            <button nz-button nzType="primary" nzSize="small" (click)="confirm()">{{ locale.filterConfirm }}</button>
          </div>
        </div>
      </nz-dropdown-menu>
    </ng-container>
  `,
      host: {
        class: "ant-table-filter-column"
      },
      imports: [NgTemplateOutlet, NgIf, NzFilterTriggerComponent, NzIconModule, NzDropDownModule, NgForOf, NzRadioComponent, NzCheckboxModule, FormsModule, NzButtonModule],
      standalone: true
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: NzI18nService
  }], {
    contentTemplate: [{
      type: Input
    }],
    customFilter: [{
      type: Input
    }],
    extraTemplate: [{
      type: Input
    }],
    filterMultiple: [{
      type: Input
    }],
    listOfFilter: [{
      type: Input
    }],
    filterChange: [{
      type: Output
    }]
  });
})();
var _NzRowExpandButtonDirective = class _NzRowExpandButtonDirective {
  constructor() {
    this.expand = false;
    this.spaceMode = false;
    this.expandChange = new EventEmitter();
  }
  onHostClick() {
    if (!this.spaceMode) {
      this.expand = !this.expand;
      this.expandChange.next(this.expand);
    }
  }
};
_NzRowExpandButtonDirective.ɵfac = function NzRowExpandButtonDirective_Factory(t) {
  return new (t || _NzRowExpandButtonDirective)();
};
_NzRowExpandButtonDirective.ɵdir = ɵɵdefineDirective({
  type: _NzRowExpandButtonDirective,
  selectors: [["button", "nz-row-expand-button", ""]],
  hostAttrs: [1, "ant-table-row-expand-icon"],
  hostVars: 7,
  hostBindings: function NzRowExpandButtonDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("click", function NzRowExpandButtonDirective_click_HostBindingHandler() {
        return ctx.onHostClick();
      });
    }
    if (rf & 2) {
      ɵɵhostProperty("type", "button");
      ɵɵclassProp("ant-table-row-expand-icon-expanded", !ctx.spaceMode && ctx.expand === true)("ant-table-row-expand-icon-collapsed", !ctx.spaceMode && ctx.expand === false)("ant-table-row-expand-icon-spaced", ctx.spaceMode);
    }
  },
  inputs: {
    expand: "expand",
    spaceMode: "spaceMode"
  },
  outputs: {
    expandChange: "expandChange"
  },
  standalone: true
});
var NzRowExpandButtonDirective = _NzRowExpandButtonDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzRowExpandButtonDirective, [{
    type: Directive,
    args: [{
      selector: "button[nz-row-expand-button]",
      host: {
        class: "ant-table-row-expand-icon",
        "[type]": `'button'`,
        "[class.ant-table-row-expand-icon-expanded]": `!spaceMode && expand === true`,
        "[class.ant-table-row-expand-icon-collapsed]": `!spaceMode && expand === false`,
        "[class.ant-table-row-expand-icon-spaced]": "spaceMode",
        "(click)": "onHostClick()"
      },
      standalone: true
    }]
  }], () => [], {
    expand: [{
      type: Input
    }],
    spaceMode: [{
      type: Input
    }],
    expandChange: [{
      type: Output
    }]
  });
})();
var _NzRowIndentDirective = class _NzRowIndentDirective {
  constructor() {
    this.indentSize = 0;
  }
};
_NzRowIndentDirective.ɵfac = function NzRowIndentDirective_Factory(t) {
  return new (t || _NzRowIndentDirective)();
};
_NzRowIndentDirective.ɵdir = ɵɵdefineDirective({
  type: _NzRowIndentDirective,
  selectors: [["nz-row-indent"]],
  hostAttrs: [1, "ant-table-row-indent"],
  hostVars: 2,
  hostBindings: function NzRowIndentDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵstyleProp("padding-left", ctx.indentSize, "px");
    }
  },
  inputs: {
    indentSize: "indentSize"
  },
  standalone: true
});
var NzRowIndentDirective = _NzRowIndentDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzRowIndentDirective, [{
    type: Directive,
    args: [{
      selector: "nz-row-indent",
      host: {
        class: "ant-table-row-indent",
        "[style.padding-left.px]": "indentSize"
      },
      standalone: true
    }]
  }], () => [], {
    indentSize: [{
      type: Input
    }]
  });
})();
var _NzTableSelectionComponent = class _NzTableSelectionComponent {
  constructor() {
    this.listOfSelections = [];
    this.checked = false;
    this.disabled = false;
    this.indeterminate = false;
    this.label = null;
    this.showCheckbox = false;
    this.showRowSelection = false;
    this.checkedChange = new EventEmitter();
  }
  onCheckedChange(checked) {
    this.checked = checked;
    this.checkedChange.emit(checked);
  }
};
_NzTableSelectionComponent.ɵfac = function NzTableSelectionComponent_Factory(t) {
  return new (t || _NzTableSelectionComponent)();
};
_NzTableSelectionComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzTableSelectionComponent,
  selectors: [["nz-table-selection"]],
  hostAttrs: [1, "ant-table-selection"],
  inputs: {
    listOfSelections: "listOfSelections",
    checked: "checked",
    disabled: "disabled",
    indeterminate: "indeterminate",
    label: "label",
    showCheckbox: "showCheckbox",
    showRowSelection: "showRowSelection"
  },
  outputs: {
    checkedChange: "checkedChange"
  },
  standalone: true,
  features: [ɵɵStandaloneFeature],
  decls: 2,
  vars: 2,
  consts: [["selectionMenu", "nzDropdownMenu"], ["nz-checkbox", "", 3, "ant-table-selection-select-all-custom", "ngModel", "nzDisabled", "nzIndeterminate", "ngModelChange", 4, "ngIf"], ["class", "ant-table-selection-extra", 4, "ngIf"], ["nz-checkbox", "", 3, "ngModelChange", "ngModel", "nzDisabled", "nzIndeterminate"], [1, "ant-table-selection-extra"], ["nz-dropdown", "", "nzPlacement", "bottomLeft", 1, "ant-table-selection-down", 3, "nzDropdownMenu"], ["nz-icon", "", "nzType", "down"], ["nz-menu", "", 1, "ant-table-selection-menu"], ["nz-menu-item", "", 3, "click", 4, "ngFor", "ngForOf"], ["nz-menu-item", "", 3, "click"]],
  template: function NzTableSelectionComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, NzTableSelectionComponent_label_0_Template, 1, 6, "label", 1)(1, NzTableSelectionComponent_div_1_Template, 7, 2, "div", 2);
    }
    if (rf & 2) {
      ɵɵproperty("ngIf", ctx.showCheckbox);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.showRowSelection);
    }
  },
  dependencies: [NgIf, FormsModule, NgControlStatus, NgModel, NzCheckboxModule, NzCheckboxComponent, NzDropDownModule, NzMenuDirective, NzMenuItemComponent, NzDropDownDirective, NzDropdownMenuComponent, NzIconModule, NzIconDirective, NgForOf],
  encapsulation: 2,
  changeDetection: 0
});
var NzTableSelectionComponent = _NzTableSelectionComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTableSelectionComponent, [{
    type: Component,
    args: [{
      selector: "nz-table-selection",
      preserveWhitespaces: false,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      template: `
    <label
      *ngIf="showCheckbox"
      nz-checkbox
      [class.ant-table-selection-select-all-custom]="showRowSelection"
      [ngModel]="checked"
      [nzDisabled]="disabled"
      [nzIndeterminate]="indeterminate"
      [attr.aria-label]="label"
      (ngModelChange)="onCheckedChange($event)"
    ></label>
    <div class="ant-table-selection-extra" *ngIf="showRowSelection">
      <span nz-dropdown class="ant-table-selection-down" nzPlacement="bottomLeft" [nzDropdownMenu]="selectionMenu">
        <span nz-icon nzType="down"></span>
      </span>
      <nz-dropdown-menu #selectionMenu="nzDropdownMenu">
        <ul nz-menu class="ant-table-selection-menu">
          <li nz-menu-item *ngFor="let selection of listOfSelections" (click)="selection.onSelect()">
            {{ selection.text }}
          </li>
        </ul>
      </nz-dropdown-menu>
    </div>
  `,
      host: {
        class: "ant-table-selection"
      },
      imports: [NgIf, FormsModule, NzCheckboxModule, NzDropDownModule, NzIconModule, NgForOf],
      standalone: true
    }]
  }], () => [], {
    listOfSelections: [{
      type: Input
    }],
    checked: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    indeterminate: [{
      type: Input
    }],
    label: [{
      type: Input
    }],
    showCheckbox: [{
      type: Input
    }],
    showRowSelection: [{
      type: Input
    }],
    checkedChange: [{
      type: Output
    }]
  });
})();
var _NzTableSortersComponent = class _NzTableSortersComponent {
  constructor() {
    this.sortDirections = ["ascend", "descend", null];
    this.sortOrder = null;
    this.contentTemplate = null;
    this.isUp = false;
    this.isDown = false;
  }
  ngOnChanges(changes) {
    const {
      sortDirections
    } = changes;
    if (sortDirections) {
      this.isUp = this.sortDirections.indexOf("ascend") !== -1;
      this.isDown = this.sortDirections.indexOf("descend") !== -1;
    }
  }
};
_NzTableSortersComponent.ɵfac = function NzTableSortersComponent_Factory(t) {
  return new (t || _NzTableSortersComponent)();
};
_NzTableSortersComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzTableSortersComponent,
  selectors: [["nz-table-sorters"]],
  hostAttrs: [1, "ant-table-column-sorters"],
  inputs: {
    sortDirections: "sortDirections",
    sortOrder: "sortOrder",
    contentTemplate: "contentTemplate"
  },
  standalone: true,
  features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
  decls: 6,
  vars: 5,
  consts: [[1, "ant-table-column-title"], [3, "ngTemplateOutlet"], [1, "ant-table-column-sorter"], [1, "ant-table-column-sorter-inner"], ["nz-icon", "", "nzType", "caret-up", "class", "ant-table-column-sorter-up", 3, "active", 4, "ngIf"], ["nz-icon", "", "nzType", "caret-down", "class", "ant-table-column-sorter-down", 3, "active", 4, "ngIf"], ["nz-icon", "", "nzType", "caret-up", 1, "ant-table-column-sorter-up"], ["nz-icon", "", "nzType", "caret-down", 1, "ant-table-column-sorter-down"]],
  template: function NzTableSortersComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "span", 0);
      ɵɵtemplate(1, NzTableSortersComponent_ng_template_1_Template, 0, 0, "ng-template", 1);
      ɵɵelementEnd();
      ɵɵelementStart(2, "span", 2)(3, "span", 3);
      ɵɵtemplate(4, NzTableSortersComponent_span_4_Template, 1, 2, "span", 4)(5, NzTableSortersComponent_span_5_Template, 1, 2, "span", 5);
      ɵɵelementEnd()();
    }
    if (rf & 2) {
      ɵɵadvance();
      ɵɵproperty("ngTemplateOutlet", ctx.contentTemplate);
      ɵɵadvance();
      ɵɵclassProp("ant-table-column-sorter-full", ctx.isDown && ctx.isUp);
      ɵɵadvance(2);
      ɵɵproperty("ngIf", ctx.isUp);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.isDown);
    }
  },
  dependencies: [NzIconModule, NzIconDirective, NgTemplateOutlet, NgIf],
  encapsulation: 2,
  changeDetection: 0
});
var NzTableSortersComponent = _NzTableSortersComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTableSortersComponent, [{
    type: Component,
    args: [{
      selector: "nz-table-sorters",
      preserveWhitespaces: false,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      template: `
    <span class="ant-table-column-title"><ng-template [ngTemplateOutlet]="contentTemplate"></ng-template></span>
    <span class="ant-table-column-sorter" [class.ant-table-column-sorter-full]="isDown && isUp">
      <span class="ant-table-column-sorter-inner">
        <span
          nz-icon
          nzType="caret-up"
          *ngIf="isUp"
          class="ant-table-column-sorter-up"
          [class.active]="sortOrder === 'ascend'"
        ></span>
        <span
          nz-icon
          nzType="caret-down"
          *ngIf="isDown"
          class="ant-table-column-sorter-down"
          [class.active]="sortOrder === 'descend'"
        ></span>
      </span>
    </span>
  `,
      host: {
        class: "ant-table-column-sorters"
      },
      imports: [NzIconModule, NgTemplateOutlet, NgIf],
      standalone: true
    }]
  }], () => [], {
    sortDirections: [{
      type: Input
    }],
    sortOrder: [{
      type: Input
    }],
    contentTemplate: [{
      type: Input
    }]
  });
})();
var _NzCellFixedDirective = class _NzCellFixedDirective {
  setAutoLeftWidth(autoLeft) {
    this.renderer.setStyle(this.elementRef.nativeElement, "left", autoLeft);
  }
  setAutoRightWidth(autoRight) {
    this.renderer.setStyle(this.elementRef.nativeElement, "right", autoRight);
  }
  setIsFirstRight(isFirstRight) {
    this.setFixClass(isFirstRight, "ant-table-cell-fix-right-first");
  }
  setIsLastLeft(isLastLeft) {
    this.setFixClass(isLastLeft, "ant-table-cell-fix-left-last");
  }
  setFixClass(flag, className) {
    this.renderer.removeClass(this.elementRef.nativeElement, className);
    if (flag) {
      this.renderer.addClass(this.elementRef.nativeElement, className);
    }
  }
  constructor(renderer, elementRef) {
    this.renderer = renderer;
    this.elementRef = elementRef;
    this.nzRight = false;
    this.nzLeft = false;
    this.colspan = null;
    this.colSpan = null;
    this.changes$ = new Subject();
    this.isAutoLeft = false;
    this.isAutoRight = false;
    this.isFixedLeft = false;
    this.isFixedRight = false;
    this.isFixed = false;
  }
  ngOnChanges() {
    this.setIsFirstRight(false);
    this.setIsLastLeft(false);
    this.isAutoLeft = this.nzLeft === "" || this.nzLeft === true;
    this.isAutoRight = this.nzRight === "" || this.nzRight === true;
    this.isFixedLeft = this.nzLeft !== false;
    this.isFixedRight = this.nzRight !== false;
    this.isFixed = this.isFixedLeft || this.isFixedRight;
    const validatePx = (value) => {
      if (typeof value === "string" && value !== "") {
        return value;
      } else {
        return null;
      }
    };
    this.setAutoLeftWidth(validatePx(this.nzLeft));
    this.setAutoRightWidth(validatePx(this.nzRight));
    this.changes$.next();
  }
};
_NzCellFixedDirective.ɵfac = function NzCellFixedDirective_Factory(t) {
  return new (t || _NzCellFixedDirective)(ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef));
};
_NzCellFixedDirective.ɵdir = ɵɵdefineDirective({
  type: _NzCellFixedDirective,
  selectors: [["td", "nzRight", ""], ["th", "nzRight", ""], ["td", "nzLeft", ""], ["th", "nzLeft", ""]],
  hostVars: 6,
  hostBindings: function NzCellFixedDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵstyleProp("position", ctx.isFixed ? "sticky" : null);
      ɵɵclassProp("ant-table-cell-fix-right", ctx.isFixedRight)("ant-table-cell-fix-left", ctx.isFixedLeft);
    }
  },
  inputs: {
    nzRight: "nzRight",
    nzLeft: "nzLeft",
    colspan: "colspan",
    colSpan: "colSpan"
  },
  standalone: true,
  features: [ɵɵNgOnChangesFeature]
});
var NzCellFixedDirective = _NzCellFixedDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzCellFixedDirective, [{
    type: Directive,
    args: [{
      selector: "td[nzRight],th[nzRight],td[nzLeft],th[nzLeft]",
      host: {
        "[class.ant-table-cell-fix-right]": `isFixedRight`,
        "[class.ant-table-cell-fix-left]": `isFixedLeft`,
        "[style.position]": `isFixed? 'sticky' : null`
      },
      standalone: true
    }]
  }], () => [{
    type: Renderer2
  }, {
    type: ElementRef
  }], {
    nzRight: [{
      type: Input
    }],
    nzLeft: [{
      type: Input
    }],
    colspan: [{
      type: Input
    }],
    colSpan: [{
      type: Input
    }]
  });
})();
var _NzTableStyleService = class _NzTableStyleService {
  setTheadTemplate(template) {
    this.theadTemplate$.next(template);
  }
  setHasFixLeft(hasFixLeft) {
    this.hasFixLeft$.next(hasFixLeft);
  }
  setHasFixRight(hasFixRight) {
    this.hasFixRight$.next(hasFixRight);
  }
  setTableWidthConfig(widthConfig) {
    this.tableWidthConfigPx$.next(widthConfig);
  }
  setListOfTh(listOfTh) {
    let columnCount = 0;
    listOfTh.forEach((th) => {
      columnCount += th.colspan && +th.colspan || th.colSpan && +th.colSpan || 1;
    });
    const listOfThPx = listOfTh.map((item) => item.nzWidth);
    this.columnCount$.next(columnCount);
    this.listOfThWidthConfigPx$.next(listOfThPx);
  }
  setListOfMeasureColumn(listOfTh) {
    const listOfKeys = [];
    listOfTh.forEach((th) => {
      const length = th.colspan && +th.colspan || th.colSpan && +th.colSpan || 1;
      for (let i = 0; i < length; i++) {
        listOfKeys.push(`measure_key_${i}`);
      }
    });
    this.listOfMeasureColumn$.next(listOfKeys);
  }
  setListOfAutoWidth(listOfAutoWidth) {
    this.listOfAutoWidthPx$.next(listOfAutoWidth.map((width) => `${width}px`));
  }
  setShowEmpty(showEmpty) {
    this.showEmpty$.next(showEmpty);
  }
  setNoResult(noResult) {
    this.noResult$.next(noResult);
  }
  setScroll(scrollX, scrollY) {
    const enableAutoMeasure = !!(scrollX || scrollY);
    if (!enableAutoMeasure) {
      this.setListOfAutoWidth([]);
    }
    this.enableAutoMeasure$.next(enableAutoMeasure);
  }
  constructor() {
    this.theadTemplate$ = new ReplaySubject(1);
    this.hasFixLeft$ = new ReplaySubject(1);
    this.hasFixRight$ = new ReplaySubject(1);
    this.hostWidth$ = new ReplaySubject(1);
    this.columnCount$ = new ReplaySubject(1);
    this.showEmpty$ = new ReplaySubject(1);
    this.noResult$ = new ReplaySubject(1);
    this.listOfThWidthConfigPx$ = new BehaviorSubject([]);
    this.tableWidthConfigPx$ = new BehaviorSubject([]);
    this.manualWidthConfigPx$ = combineLatest([this.tableWidthConfigPx$, this.listOfThWidthConfigPx$]).pipe(map(([widthConfig, listOfWidth]) => widthConfig.length ? widthConfig : listOfWidth));
    this.listOfAutoWidthPx$ = new ReplaySubject(1);
    this.listOfListOfThWidthPx$ = merge(
      /** init with manual width **/
      this.manualWidthConfigPx$,
      combineLatest([this.listOfAutoWidthPx$, this.manualWidthConfigPx$]).pipe(map(([autoWidth, manualWidth]) => {
        if (autoWidth.length === manualWidth.length) {
          return autoWidth.map((width, index) => {
            if (width === "0px") {
              return manualWidth[index] || null;
            } else {
              return manualWidth[index] || width;
            }
          });
        } else {
          return manualWidth;
        }
      }))
    );
    this.listOfMeasureColumn$ = new ReplaySubject(1);
    this.listOfListOfThWidth$ = this.listOfAutoWidthPx$.pipe(map((list) => list.map((width) => parseInt(width, 10))));
    this.enableAutoMeasure$ = new ReplaySubject(1);
  }
};
_NzTableStyleService.ɵfac = function NzTableStyleService_Factory(t) {
  return new (t || _NzTableStyleService)();
};
_NzTableStyleService.ɵprov = ɵɵdefineInjectable({
  token: _NzTableStyleService,
  factory: _NzTableStyleService.ɵfac
});
var NzTableStyleService = _NzTableStyleService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTableStyleService, [{
    type: Injectable
  }], () => [], null);
})();
var _NzTableCellDirective = class _NzTableCellDirective {
  constructor(nzTableStyleService) {
    this.isInsideTable = false;
    this.isInsideTable = !!nzTableStyleService;
  }
};
_NzTableCellDirective.ɵfac = function NzTableCellDirective_Factory(t) {
  return new (t || _NzTableCellDirective)(ɵɵdirectiveInject(NzTableStyleService, 8));
};
_NzTableCellDirective.ɵdir = ɵɵdefineDirective({
  type: _NzTableCellDirective,
  selectors: [["th", 9, "nz-disable-th", 3, "mat-cell", ""], ["td", 9, "nz-disable-td", 3, "mat-cell", ""]],
  hostVars: 2,
  hostBindings: function NzTableCellDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("ant-table-cell", ctx.isInsideTable);
    }
  },
  standalone: true
});
var NzTableCellDirective = _NzTableCellDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTableCellDirective, [{
    type: Directive,
    args: [{
      selector: "th:not(.nz-disable-th):not([mat-cell]), td:not(.nz-disable-td):not([mat-cell])",
      host: {
        "[class.ant-table-cell]": "isInsideTable"
      },
      standalone: true
    }]
  }], () => [{
    type: NzTableStyleService,
    decorators: [{
      type: Optional
    }]
  }], null);
})();
var _NzTableDataService = class _NzTableDataService {
  updatePageSize(size) {
    this.pageSize$.next(size);
  }
  updateFrontPagination(pagination) {
    this.frontPagination$.next(pagination);
  }
  updatePageIndex(index) {
    this.pageIndex$.next(index);
  }
  updateListOfData(list) {
    this.listOfData$.next(list);
  }
  updateListOfCustomColumn(list) {
    this.listOfCustomColumn$.next(list);
  }
  constructor() {
    this.destroy$ = new Subject();
    this.pageIndex$ = new BehaviorSubject(1);
    this.frontPagination$ = new BehaviorSubject(true);
    this.pageSize$ = new BehaviorSubject(10);
    this.listOfData$ = new BehaviorSubject([]);
    this.listOfCustomColumn$ = new BehaviorSubject([]);
    this.pageIndexDistinct$ = this.pageIndex$.pipe(distinctUntilChanged());
    this.pageSizeDistinct$ = this.pageSize$.pipe(distinctUntilChanged());
    this.listOfCalcOperator$ = new BehaviorSubject([]);
    this.queryParams$ = combineLatest([this.pageIndexDistinct$, this.pageSizeDistinct$, this.listOfCalcOperator$]).pipe(debounceTime(0), skip(1), map(([pageIndex, pageSize, listOfCalc]) => ({
      pageIndex,
      pageSize,
      sort: listOfCalc.filter((item) => item.sortFn).map((item) => ({
        key: item.key,
        value: item.sortOrder
      })),
      filter: listOfCalc.filter((item) => item.filterFn).map((item) => ({
        key: item.key,
        value: item.filterValue
      }))
    })));
    this.listOfDataAfterCalc$ = combineLatest([this.listOfData$, this.listOfCalcOperator$]).pipe(map(([listOfData, listOfCalcOperator]) => {
      let listOfDataAfterCalc = [...listOfData];
      const listOfFilterOperator = listOfCalcOperator.filter((item) => {
        const {
          filterValue,
          filterFn
        } = item;
        const isReset = filterValue === null || filterValue === void 0 || Array.isArray(filterValue) && filterValue.length === 0;
        return !isReset && typeof filterFn === "function";
      });
      for (const item of listOfFilterOperator) {
        const {
          filterFn,
          filterValue
        } = item;
        listOfDataAfterCalc = listOfDataAfterCalc.filter((data) => filterFn(filterValue, data));
      }
      const listOfSortOperator = listOfCalcOperator.filter((item) => item.sortOrder !== null && typeof item.sortFn === "function").sort((a, b) => +b.sortPriority - +a.sortPriority);
      if (listOfCalcOperator.length) {
        listOfDataAfterCalc.sort((record1, record2) => {
          for (const item of listOfSortOperator) {
            const {
              sortFn,
              sortOrder
            } = item;
            if (sortFn && sortOrder) {
              const compareResult = sortFn(record1, record2, sortOrder);
              if (compareResult !== 0) {
                return sortOrder === "ascend" ? compareResult : -compareResult;
              }
            }
          }
          return 0;
        });
      }
      return listOfDataAfterCalc;
    }));
    this.listOfFrontEndCurrentPageData$ = combineLatest([this.pageIndexDistinct$, this.pageSizeDistinct$, this.listOfDataAfterCalc$]).pipe(takeUntil(this.destroy$), filter((value) => {
      const [pageIndex, pageSize, listOfData] = value;
      const maxPageIndex = Math.ceil(listOfData.length / pageSize) || 1;
      return pageIndex <= maxPageIndex;
    }), map(([pageIndex, pageSize, listOfData]) => listOfData.slice((pageIndex - 1) * pageSize, pageIndex * pageSize)));
    this.listOfCurrentPageData$ = this.frontPagination$.pipe(switchMap((pagination) => pagination ? this.listOfFrontEndCurrentPageData$ : this.listOfDataAfterCalc$));
    this.total$ = this.frontPagination$.pipe(switchMap((pagination) => pagination ? this.listOfDataAfterCalc$ : this.listOfData$), map((list) => list.length), distinctUntilChanged());
  }
  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
};
_NzTableDataService.ɵfac = function NzTableDataService_Factory(t) {
  return new (t || _NzTableDataService)();
};
_NzTableDataService.ɵprov = ɵɵdefineInjectable({
  token: _NzTableDataService,
  factory: _NzTableDataService.ɵfac
});
var NzTableDataService = _NzTableDataService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTableDataService, [{
    type: Injectable
  }], () => [], null);
})();
var _NzCustomColumnDirective = class _NzCustomColumnDirective {
  constructor(el, renderer, nzTableDataService) {
    this.el = el;
    this.renderer = renderer;
    this.nzTableDataService = nzTableDataService;
    this.nzCellControl = null;
    this.destroy$ = new Subject();
  }
  ngOnInit() {
    this.nzTableDataService.listOfCustomColumn$.pipe(takeUntil(this.destroy$)).subscribe((item) => {
      if (item.length) {
        item.forEach((v, i) => {
          if (v.value === this.nzCellControl) {
            if (!v.default) {
              this.renderer.setStyle(this.el.nativeElement, "display", "none");
            } else {
              this.renderer.setStyle(this.el.nativeElement, "display", "block");
            }
            this.renderer.setStyle(this.el.nativeElement, "order", i);
            if (!v?.fixWidth) {
              this.renderer.setStyle(this.el.nativeElement, "flex", `1 1 ${v.width}px`);
            } else {
              this.renderer.setStyle(this.el.nativeElement, "flex", `1 0 ${v.width}px`);
            }
          }
        });
      }
    });
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
};
_NzCustomColumnDirective.ɵfac = function NzCustomColumnDirective_Factory(t) {
  return new (t || _NzCustomColumnDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(NzTableDataService));
};
_NzCustomColumnDirective.ɵdir = ɵɵdefineDirective({
  type: _NzCustomColumnDirective,
  selectors: [["td", "nzCellControl", ""], ["th", "nzCellControl", ""]],
  inputs: {
    nzCellControl: "nzCellControl"
  },
  standalone: true
});
var NzCustomColumnDirective = _NzCustomColumnDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzCustomColumnDirective, [{
    type: Directive,
    args: [{
      selector: "td[nzCellControl],th[nzCellControl]",
      standalone: true
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: NzTableDataService
  }], {
    nzCellControl: [{
      type: Input
    }]
  });
})();
var _NzTdAddOnComponent = class _NzTdAddOnComponent {
  constructor() {
    this.nzChecked = false;
    this.nzDisabled = false;
    this.nzIndeterminate = false;
    this.nzLabel = null;
    this.nzIndentSize = 0;
    this.nzShowExpand = false;
    this.nzShowCheckbox = false;
    this.nzExpand = false;
    this.nzExpandIcon = null;
    this.nzCheckedChange = new EventEmitter();
    this.nzExpandChange = new EventEmitter();
    this.isNzShowExpandChanged = false;
    this.isNzShowCheckboxChanged = false;
  }
  onCheckedChange(checked) {
    this.nzChecked = checked;
    this.nzCheckedChange.emit(checked);
  }
  onExpandChange(expand) {
    this.nzExpand = expand;
    this.nzExpandChange.emit(expand);
  }
  ngOnChanges(changes) {
    const isFirstChange = (value) => value && value.firstChange && value.currentValue !== void 0;
    const {
      nzExpand,
      nzChecked,
      nzShowExpand,
      nzShowCheckbox
    } = changes;
    if (nzShowExpand) {
      this.isNzShowExpandChanged = true;
    }
    if (nzShowCheckbox) {
      this.isNzShowCheckboxChanged = true;
    }
    if (isFirstChange(nzExpand) && !this.isNzShowExpandChanged) {
      this.nzShowExpand = true;
    }
    if (isFirstChange(nzChecked) && !this.isNzShowCheckboxChanged) {
      this.nzShowCheckbox = true;
    }
  }
};
_NzTdAddOnComponent.ɵfac = function NzTdAddOnComponent_Factory(t) {
  return new (t || _NzTdAddOnComponent)();
};
_NzTdAddOnComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzTdAddOnComponent,
  selectors: [["td", "nzChecked", ""], ["td", "nzDisabled", ""], ["td", "nzIndeterminate", ""], ["td", "nzIndentSize", ""], ["td", "nzExpand", ""], ["td", "nzShowExpand", ""], ["td", "nzShowCheckbox", ""]],
  hostVars: 4,
  hostBindings: function NzTdAddOnComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("ant-table-cell-with-append", ctx.nzShowExpand || ctx.nzIndentSize > 0)("ant-table-selection-column", ctx.nzShowCheckbox);
    }
  },
  inputs: {
    nzChecked: "nzChecked",
    nzDisabled: "nzDisabled",
    nzIndeterminate: "nzIndeterminate",
    nzLabel: "nzLabel",
    nzIndentSize: "nzIndentSize",
    nzShowExpand: "nzShowExpand",
    nzShowCheckbox: "nzShowCheckbox",
    nzExpand: "nzExpand",
    nzExpandIcon: "nzExpandIcon"
  },
  outputs: {
    nzCheckedChange: "nzCheckedChange",
    nzExpandChange: "nzExpandChange"
  },
  standalone: true,
  features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
  attrs: _c13,
  ngContentSelectors: _c04,
  decls: 3,
  vars: 2,
  consts: [["rowExpand", ""], [4, "ngIf"], ["nz-checkbox", "", 3, "nzDisabled", "ngModel", "nzIndeterminate", "ngModelChange", 4, "ngIf"], [3, "indentSize"], [4, "ngIf", "ngIfElse"], ["nz-row-expand-button", "", 3, "expandChange", "expand", "spaceMode"], [3, "ngTemplateOutlet"], ["nz-checkbox", "", 3, "ngModelChange", "nzDisabled", "ngModel", "nzIndeterminate"]],
  template: function NzTdAddOnComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵtemplate(0, NzTdAddOnComponent_ng_container_0_Template, 5, 3, "ng-container", 1)(1, NzTdAddOnComponent_label_1_Template, 1, 4, "label", 2);
      ɵɵprojection(2);
    }
    if (rf & 2) {
      ɵɵproperty("ngIf", ctx.nzShowExpand || ctx.nzIndentSize > 0);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.nzShowCheckbox);
    }
  },
  dependencies: [NzRowIndentDirective, NzRowExpandButtonDirective, NgIf, NgTemplateOutlet, NzCheckboxModule, NzCheckboxComponent, FormsModule, NgControlStatus, NgModel],
  encapsulation: 2,
  changeDetection: 0
});
var NzTdAddOnComponent = _NzTdAddOnComponent;
__decorate([InputBoolean()], NzTdAddOnComponent.prototype, "nzShowExpand", void 0);
__decorate([InputBoolean()], NzTdAddOnComponent.prototype, "nzShowCheckbox", void 0);
__decorate([InputBoolean()], NzTdAddOnComponent.prototype, "nzExpand", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTdAddOnComponent, [{
    type: Component,
    args: [{
      selector: "td[nzChecked], td[nzDisabled], td[nzIndeterminate], td[nzIndentSize], td[nzExpand], td[nzShowExpand], td[nzShowCheckbox]",
      changeDetection: ChangeDetectionStrategy.OnPush,
      preserveWhitespaces: false,
      encapsulation: ViewEncapsulation$1.None,
      template: `
    <ng-container *ngIf="nzShowExpand || nzIndentSize > 0">
      <nz-row-indent [indentSize]="nzIndentSize"></nz-row-indent>
      <ng-template #rowExpand>
        <button
          nz-row-expand-button
          [expand]="nzExpand"
          (expandChange)="onExpandChange($event)"
          [spaceMode]="!nzShowExpand"
        ></button>
      </ng-template>
      <ng-container *ngIf="nzExpandIcon; else rowExpand">
        <ng-template [ngTemplateOutlet]="nzExpandIcon"></ng-template>
      </ng-container>
    </ng-container>
    <label
      nz-checkbox
      *ngIf="nzShowCheckbox"
      [nzDisabled]="nzDisabled"
      [ngModel]="nzChecked"
      [nzIndeterminate]="nzIndeterminate"
      [attr.aria-label]="nzLabel"
      (ngModelChange)="onCheckedChange($event)"
    ></label>
    <ng-content></ng-content>
  `,
      host: {
        "[class.ant-table-cell-with-append]": `nzShowExpand || nzIndentSize > 0`,
        "[class.ant-table-selection-column]": `nzShowCheckbox`
      },
      imports: [NzRowIndentDirective, NzRowExpandButtonDirective, NgIf, NgTemplateOutlet, NzCheckboxModule, FormsModule],
      standalone: true
    }]
  }], null, {
    nzChecked: [{
      type: Input
    }],
    nzDisabled: [{
      type: Input
    }],
    nzIndeterminate: [{
      type: Input
    }],
    nzLabel: [{
      type: Input
    }],
    nzIndentSize: [{
      type: Input
    }],
    nzShowExpand: [{
      type: Input
    }],
    nzShowCheckbox: [{
      type: Input
    }],
    nzExpand: [{
      type: Input
    }],
    nzExpandIcon: [{
      type: Input
    }],
    nzCheckedChange: [{
      type: Output
    }],
    nzExpandChange: [{
      type: Output
    }]
  });
})();
var _NzThAddOnComponent = class _NzThAddOnComponent {
  getNextSortDirection(sortDirections, current) {
    const index = sortDirections.indexOf(current);
    if (index === sortDirections.length - 1) {
      return sortDirections[0];
    } else {
      return sortDirections[index + 1];
    }
  }
  setSortOrder(order) {
    this.sortOrderChange$.next(order);
  }
  clearSortOrder() {
    if (this.sortOrder !== null) {
      this.setSortOrder(null);
    }
  }
  onFilterValueChange(value) {
    this.nzFilterChange.emit(value);
    this.nzFilterValue = value;
    this.updateCalcOperator();
  }
  updateCalcOperator() {
    this.calcOperatorChange$.next();
  }
  constructor(host, cdr, ngZone, destroy$) {
    this.host = host;
    this.cdr = cdr;
    this.ngZone = ngZone;
    this.destroy$ = destroy$;
    this.manualClickOrder$ = new Subject();
    this.calcOperatorChange$ = new Subject();
    this.nzFilterValue = null;
    this.sortOrder = null;
    this.sortDirections = ["ascend", "descend", null];
    this.sortOrderChange$ = new Subject();
    this.isNzShowSortChanged = false;
    this.isNzShowFilterChanged = false;
    this.nzFilterMultiple = true;
    this.nzSortOrder = null;
    this.nzSortPriority = false;
    this.nzSortDirections = ["ascend", "descend", null];
    this.nzFilters = [];
    this.nzSortFn = null;
    this.nzFilterFn = null;
    this.nzShowSort = false;
    this.nzShowFilter = false;
    this.nzCustomFilter = false;
    this.nzCheckedChange = new EventEmitter();
    this.nzSortOrderChange = new EventEmitter();
    this.nzFilterChange = new EventEmitter();
  }
  ngOnInit() {
    this.ngZone.runOutsideAngular(() => fromEvent(this.host.nativeElement, "click").pipe(filter(() => this.nzShowSort), takeUntil(this.destroy$)).subscribe(() => {
      const nextOrder = this.getNextSortDirection(this.sortDirections, this.sortOrder);
      this.ngZone.run(() => {
        this.setSortOrder(nextOrder);
        this.manualClickOrder$.next(this);
      });
    }));
    this.sortOrderChange$.pipe(takeUntil(this.destroy$)).subscribe((order) => {
      if (this.sortOrder !== order) {
        this.sortOrder = order;
        this.nzSortOrderChange.emit(order);
      }
      this.updateCalcOperator();
      this.cdr.markForCheck();
    });
  }
  ngOnChanges(changes) {
    const {
      nzSortDirections,
      nzFilters,
      nzSortOrder,
      nzSortFn,
      nzFilterFn,
      nzSortPriority,
      nzFilterMultiple,
      nzShowSort,
      nzShowFilter
    } = changes;
    if (nzSortDirections) {
      if (this.nzSortDirections && this.nzSortDirections.length) {
        this.sortDirections = this.nzSortDirections;
      }
    }
    if (nzSortOrder) {
      this.sortOrder = this.nzSortOrder;
      this.setSortOrder(this.nzSortOrder);
    }
    if (nzShowSort) {
      this.isNzShowSortChanged = true;
    }
    if (nzShowFilter) {
      this.isNzShowFilterChanged = true;
    }
    const isFirstChange = (value) => value && value.firstChange && value.currentValue !== void 0;
    if ((isFirstChange(nzSortOrder) || isFirstChange(nzSortFn)) && !this.isNzShowSortChanged) {
      this.nzShowSort = true;
    }
    if (isFirstChange(nzFilters) && !this.isNzShowFilterChanged) {
      this.nzShowFilter = true;
    }
    if ((nzFilters || nzFilterMultiple) && this.nzShowFilter) {
      const listOfValue = this.nzFilters.filter((item) => item.byDefault).map((item) => item.value);
      this.nzFilterValue = this.nzFilterMultiple ? listOfValue : listOfValue[0] || null;
    }
    if (nzSortFn || nzFilterFn || nzSortPriority || nzFilters) {
      this.updateCalcOperator();
    }
  }
};
_NzThAddOnComponent.ɵfac = function NzThAddOnComponent_Factory(t) {
  return new (t || _NzThAddOnComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(NzDestroyService));
};
_NzThAddOnComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzThAddOnComponent,
  selectors: [["th", "nzColumnKey", ""], ["th", "nzSortFn", ""], ["th", "nzSortOrder", ""], ["th", "nzFilters", ""], ["th", "nzShowSort", ""], ["th", "nzShowFilter", ""], ["th", "nzCustomFilter", ""]],
  hostVars: 4,
  hostBindings: function NzThAddOnComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("ant-table-column-has-sorters", ctx.nzShowSort)("ant-table-column-sort", ctx.sortOrder === "descend" || ctx.sortOrder === "ascend");
    }
  },
  inputs: {
    nzColumnKey: "nzColumnKey",
    nzFilterMultiple: "nzFilterMultiple",
    nzSortOrder: "nzSortOrder",
    nzSortPriority: "nzSortPriority",
    nzSortDirections: "nzSortDirections",
    nzFilters: "nzFilters",
    nzSortFn: "nzSortFn",
    nzFilterFn: "nzFilterFn",
    nzShowSort: "nzShowSort",
    nzShowFilter: "nzShowFilter",
    nzCustomFilter: "nzCustomFilter"
  },
  outputs: {
    nzCheckedChange: "nzCheckedChange",
    nzSortOrderChange: "nzSortOrderChange",
    nzFilterChange: "nzFilterChange"
  },
  standalone: true,
  features: [ɵɵProvidersFeature([NzDestroyService]), ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
  attrs: _c23,
  ngContentSelectors: _c42,
  decls: 9,
  vars: 2,
  consts: [["notFilterTemplate", ""], ["extraTemplate", ""], ["sortTemplate", ""], ["contentTemplate", ""], [3, "contentTemplate", "extraTemplate", "customFilter", "filterMultiple", "listOfFilter", "filterChange", 4, "ngIf", "ngIfElse"], [3, "filterChange", "contentTemplate", "extraTemplate", "customFilter", "filterMultiple", "listOfFilter"], [3, "ngTemplateOutlet"], [3, "sortOrder", "sortDirections", "contentTemplate"]],
  template: function NzThAddOnComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef(_c32);
      ɵɵtemplate(0, NzThAddOnComponent_nz_table_filter_0_Template, 1, 5, "nz-table-filter", 4)(1, NzThAddOnComponent_ng_template_1_Template, 1, 1, "ng-template", null, 0, ɵɵtemplateRefExtractor)(3, NzThAddOnComponent_ng_template_3_Template, 2, 0, "ng-template", null, 1, ɵɵtemplateRefExtractor)(5, NzThAddOnComponent_ng_template_5_Template, 1, 3, "ng-template", null, 2, ɵɵtemplateRefExtractor)(7, NzThAddOnComponent_ng_template_7_Template, 1, 0, "ng-template", null, 3, ɵɵtemplateRefExtractor);
    }
    if (rf & 2) {
      const notFilterTemplate_r3 = ɵɵreference(2);
      ɵɵproperty("ngIf", ctx.nzShowFilter || ctx.nzCustomFilter)("ngIfElse", notFilterTemplate_r3);
    }
  },
  dependencies: [NzTableFilterComponent, NgIf, NgTemplateOutlet, NzTableSortersComponent],
  encapsulation: 2,
  changeDetection: 0
});
var NzThAddOnComponent = _NzThAddOnComponent;
__decorate([InputBoolean()], NzThAddOnComponent.prototype, "nzShowSort", void 0);
__decorate([InputBoolean()], NzThAddOnComponent.prototype, "nzShowFilter", void 0);
__decorate([InputBoolean()], NzThAddOnComponent.prototype, "nzCustomFilter", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzThAddOnComponent, [{
    type: Component,
    args: [{
      selector: "th[nzColumnKey], th[nzSortFn], th[nzSortOrder], th[nzFilters], th[nzShowSort], th[nzShowFilter], th[nzCustomFilter]",
      preserveWhitespaces: false,
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `
    <nz-table-filter
      *ngIf="nzShowFilter || nzCustomFilter; else notFilterTemplate"
      [contentTemplate]="notFilterTemplate"
      [extraTemplate]="extraTemplate"
      [customFilter]="nzCustomFilter"
      [filterMultiple]="nzFilterMultiple"
      [listOfFilter]="nzFilters"
      (filterChange)="onFilterValueChange($event)"
    ></nz-table-filter>
    <ng-template #notFilterTemplate>
      <ng-template [ngTemplateOutlet]="nzShowSort ? sortTemplate : contentTemplate"></ng-template>
    </ng-template>
    <ng-template #extraTemplate>
      <ng-content select="[nz-th-extra]"></ng-content>
      <ng-content select="nz-filter-trigger"></ng-content>
    </ng-template>
    <ng-template #sortTemplate>
      <nz-table-sorters
        [sortOrder]="sortOrder"
        [sortDirections]="sortDirections"
        [contentTemplate]="contentTemplate"
      ></nz-table-sorters>
    </ng-template>
    <ng-template #contentTemplate>
      <ng-content></ng-content>
    </ng-template>
  `,
      host: {
        "[class.ant-table-column-has-sorters]": "nzShowSort",
        "[class.ant-table-column-sort]": `sortOrder === 'descend' || sortOrder === 'ascend'`
      },
      providers: [NzDestroyService],
      imports: [NzTableFilterComponent, NgIf, NgTemplateOutlet, NzTableSortersComponent],
      standalone: true
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: ChangeDetectorRef
  }, {
    type: NgZone
  }, {
    type: NzDestroyService
  }], {
    nzColumnKey: [{
      type: Input
    }],
    nzFilterMultiple: [{
      type: Input
    }],
    nzSortOrder: [{
      type: Input
    }],
    nzSortPriority: [{
      type: Input
    }],
    nzSortDirections: [{
      type: Input
    }],
    nzFilters: [{
      type: Input
    }],
    nzSortFn: [{
      type: Input
    }],
    nzFilterFn: [{
      type: Input
    }],
    nzShowSort: [{
      type: Input
    }],
    nzShowFilter: [{
      type: Input
    }],
    nzCustomFilter: [{
      type: Input
    }],
    nzCheckedChange: [{
      type: Output
    }],
    nzSortOrderChange: [{
      type: Output
    }],
    nzFilterChange: [{
      type: Output
    }]
  });
})();
var _NzThMeasureDirective = class _NzThMeasureDirective {
  constructor(renderer, elementRef) {
    this.renderer = renderer;
    this.elementRef = elementRef;
    this.changes$ = new Subject();
    this.nzWidth = null;
    this.colspan = null;
    this.colSpan = null;
    this.rowspan = null;
    this.rowSpan = null;
  }
  ngOnChanges(changes) {
    const {
      nzWidth,
      colspan,
      rowspan,
      colSpan,
      rowSpan
    } = changes;
    if (colspan || colSpan) {
      const col = this.colspan || this.colSpan;
      if (!isNil(col)) {
        this.renderer.setAttribute(this.elementRef.nativeElement, "colspan", `${col}`);
      } else {
        this.renderer.removeAttribute(this.elementRef.nativeElement, "colspan");
      }
    }
    if (rowspan || rowSpan) {
      const row = this.rowspan || this.rowSpan;
      if (!isNil(row)) {
        this.renderer.setAttribute(this.elementRef.nativeElement, "rowspan", `${row}`);
      } else {
        this.renderer.removeAttribute(this.elementRef.nativeElement, "rowspan");
      }
    }
    if (nzWidth || colspan) {
      this.changes$.next();
    }
  }
};
_NzThMeasureDirective.ɵfac = function NzThMeasureDirective_Factory(t) {
  return new (t || _NzThMeasureDirective)(ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef));
};
_NzThMeasureDirective.ɵdir = ɵɵdefineDirective({
  type: _NzThMeasureDirective,
  selectors: [["th"]],
  inputs: {
    nzWidth: "nzWidth",
    colspan: "colspan",
    colSpan: "colSpan",
    rowspan: "rowspan",
    rowSpan: "rowSpan"
  },
  standalone: true,
  features: [ɵɵNgOnChangesFeature]
});
var NzThMeasureDirective = _NzThMeasureDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzThMeasureDirective, [{
    type: Directive,
    args: [{
      selector: "th",
      standalone: true
    }]
  }], () => [{
    type: Renderer2
  }, {
    type: ElementRef
  }], {
    nzWidth: [{
      type: Input
    }],
    colspan: [{
      type: Input
    }],
    colSpan: [{
      type: Input
    }],
    rowspan: [{
      type: Input
    }],
    rowSpan: [{
      type: Input
    }]
  });
})();
var _NzThSelectionComponent = class _NzThSelectionComponent {
  constructor() {
    this.nzSelections = [];
    this.nzChecked = false;
    this.nzDisabled = false;
    this.nzIndeterminate = false;
    this.nzLabel = null;
    this.nzShowCheckbox = false;
    this.nzShowRowSelection = false;
    this.nzCheckedChange = new EventEmitter();
    this.isNzShowExpandChanged = false;
    this.isNzShowCheckboxChanged = false;
  }
  onCheckedChange(checked) {
    this.nzChecked = checked;
    this.nzCheckedChange.emit(checked);
  }
  ngOnChanges(changes) {
    const isFirstChange = (value) => value && value.firstChange && value.currentValue !== void 0;
    const {
      nzChecked,
      nzSelections,
      nzShowExpand,
      nzShowCheckbox
    } = changes;
    if (nzShowExpand) {
      this.isNzShowExpandChanged = true;
    }
    if (nzShowCheckbox) {
      this.isNzShowCheckboxChanged = true;
    }
    if (isFirstChange(nzSelections) && !this.isNzShowExpandChanged) {
      this.nzShowRowSelection = true;
    }
    if (isFirstChange(nzChecked) && !this.isNzShowCheckboxChanged) {
      this.nzShowCheckbox = true;
    }
  }
};
_NzThSelectionComponent.ɵfac = function NzThSelectionComponent_Factory(t) {
  return new (t || _NzThSelectionComponent)();
};
_NzThSelectionComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzThSelectionComponent,
  selectors: [["th", "nzSelections", ""], ["th", "nzChecked", ""], ["th", "nzShowCheckbox", ""], ["th", "nzShowRowSelection", ""]],
  hostAttrs: [1, "ant-table-selection-column"],
  inputs: {
    nzSelections: "nzSelections",
    nzChecked: "nzChecked",
    nzDisabled: "nzDisabled",
    nzIndeterminate: "nzIndeterminate",
    nzLabel: "nzLabel",
    nzShowCheckbox: "nzShowCheckbox",
    nzShowRowSelection: "nzShowRowSelection"
  },
  outputs: {
    nzCheckedChange: "nzCheckedChange"
  },
  standalone: true,
  features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
  attrs: _c5,
  ngContentSelectors: _c04,
  decls: 2,
  vars: 7,
  consts: [[3, "checkedChange", "checked", "disabled", "indeterminate", "label", "listOfSelections", "showCheckbox", "showRowSelection"]],
  template: function NzThSelectionComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵelementStart(0, "nz-table-selection", 0);
      ɵɵlistener("checkedChange", function NzThSelectionComponent_Template_nz_table_selection_checkedChange_0_listener($event) {
        return ctx.onCheckedChange($event);
      });
      ɵɵelementEnd();
      ɵɵprojection(1);
    }
    if (rf & 2) {
      ɵɵproperty("checked", ctx.nzChecked)("disabled", ctx.nzDisabled)("indeterminate", ctx.nzIndeterminate)("label", ctx.nzLabel)("listOfSelections", ctx.nzSelections)("showCheckbox", ctx.nzShowCheckbox)("showRowSelection", ctx.nzShowRowSelection);
    }
  },
  dependencies: [NzTableSelectionComponent],
  encapsulation: 2,
  changeDetection: 0
});
var NzThSelectionComponent = _NzThSelectionComponent;
__decorate([InputBoolean()], NzThSelectionComponent.prototype, "nzShowCheckbox", void 0);
__decorate([InputBoolean()], NzThSelectionComponent.prototype, "nzShowRowSelection", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzThSelectionComponent, [{
    type: Component,
    args: [{
      selector: "th[nzSelections],th[nzChecked],th[nzShowCheckbox],th[nzShowRowSelection]",
      preserveWhitespaces: false,
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `
    <nz-table-selection
      [checked]="nzChecked"
      [disabled]="nzDisabled"
      [indeterminate]="nzIndeterminate"
      [label]="nzLabel"
      [listOfSelections]="nzSelections"
      [showCheckbox]="nzShowCheckbox"
      [showRowSelection]="nzShowRowSelection"
      (checkedChange)="onCheckedChange($event)"
    ></nz-table-selection>
    <ng-content></ng-content>
  `,
      host: {
        class: "ant-table-selection-column"
      },
      imports: [NzTableSelectionComponent],
      standalone: true
    }]
  }], () => [], {
    nzSelections: [{
      type: Input
    }],
    nzChecked: [{
      type: Input
    }],
    nzDisabled: [{
      type: Input
    }],
    nzIndeterminate: [{
      type: Input
    }],
    nzLabel: [{
      type: Input
    }],
    nzShowCheckbox: [{
      type: Input
    }],
    nzShowRowSelection: [{
      type: Input
    }],
    nzCheckedChange: [{
      type: Output
    }]
  });
})();
var _NzCellAlignDirective = class _NzCellAlignDirective {
  constructor() {
    this.nzAlign = null;
  }
};
_NzCellAlignDirective.ɵfac = function NzCellAlignDirective_Factory(t) {
  return new (t || _NzCellAlignDirective)();
};
_NzCellAlignDirective.ɵdir = ɵɵdefineDirective({
  type: _NzCellAlignDirective,
  selectors: [["th", "nzAlign", ""], ["td", "nzAlign", ""]],
  hostVars: 2,
  hostBindings: function NzCellAlignDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵstyleProp("text-align", ctx.nzAlign);
    }
  },
  inputs: {
    nzAlign: "nzAlign"
  },
  standalone: true
});
var NzCellAlignDirective = _NzCellAlignDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzCellAlignDirective, [{
    type: Directive,
    args: [{
      selector: "th[nzAlign],td[nzAlign]",
      host: {
        "[style.text-align]": "nzAlign"
      },
      standalone: true
    }]
  }], null, {
    nzAlign: [{
      type: Input
    }]
  });
})();
var _NzCellEllipsisDirective = class _NzCellEllipsisDirective {
  constructor() {
    this.nzEllipsis = true;
  }
};
_NzCellEllipsisDirective.ɵfac = function NzCellEllipsisDirective_Factory(t) {
  return new (t || _NzCellEllipsisDirective)();
};
_NzCellEllipsisDirective.ɵdir = ɵɵdefineDirective({
  type: _NzCellEllipsisDirective,
  selectors: [["th", "nzEllipsis", ""], ["td", "nzEllipsis", ""]],
  hostVars: 2,
  hostBindings: function NzCellEllipsisDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("ant-table-cell-ellipsis", ctx.nzEllipsis);
    }
  },
  inputs: {
    nzEllipsis: "nzEllipsis"
  },
  standalone: true
});
var NzCellEllipsisDirective = _NzCellEllipsisDirective;
__decorate([InputBoolean()], NzCellEllipsisDirective.prototype, "nzEllipsis", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzCellEllipsisDirective, [{
    type: Directive,
    args: [{
      selector: "th[nzEllipsis],td[nzEllipsis]",
      host: {
        "[class.ant-table-cell-ellipsis]": "nzEllipsis"
      },
      standalone: true
    }]
  }], null, {
    nzEllipsis: [{
      type: Input
    }]
  });
})();
var _NzCellBreakWordDirective = class _NzCellBreakWordDirective {
  constructor() {
    this.nzBreakWord = true;
  }
};
_NzCellBreakWordDirective.ɵfac = function NzCellBreakWordDirective_Factory(t) {
  return new (t || _NzCellBreakWordDirective)();
};
_NzCellBreakWordDirective.ɵdir = ɵɵdefineDirective({
  type: _NzCellBreakWordDirective,
  selectors: [["th", "nzBreakWord", ""], ["td", "nzBreakWord", ""]],
  hostVars: 2,
  hostBindings: function NzCellBreakWordDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵstyleProp("word-break", ctx.nzBreakWord ? "break-all" : "");
    }
  },
  inputs: {
    nzBreakWord: "nzBreakWord"
  },
  standalone: true
});
var NzCellBreakWordDirective = _NzCellBreakWordDirective;
__decorate([InputBoolean()], NzCellBreakWordDirective.prototype, "nzBreakWord", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzCellBreakWordDirective, [{
    type: Directive,
    args: [{
      selector: "th[nzBreakWord],td[nzBreakWord]",
      host: {
        "[style.word-break]": `nzBreakWord ? 'break-all' : ''`
      },
      standalone: true
    }]
  }], null, {
    nzBreakWord: [{
      type: Input
    }]
  });
})();
var _NzTableContentComponent = class _NzTableContentComponent {
  constructor() {
    this.tableLayout = "auto";
    this.theadTemplate = null;
    this.contentTemplate = null;
    this.listOfColWidth = [];
    this.scrollX = null;
  }
};
_NzTableContentComponent.ɵfac = function NzTableContentComponent_Factory(t) {
  return new (t || _NzTableContentComponent)();
};
_NzTableContentComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzTableContentComponent,
  selectors: [["table", "nz-table-content", ""]],
  hostVars: 8,
  hostBindings: function NzTableContentComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵstyleProp("table-layout", ctx.tableLayout)("width", ctx.scrollX)("min-width", ctx.scrollX ? "100%" : null);
      ɵɵclassProp("ant-table-fixed", ctx.scrollX);
    }
  },
  inputs: {
    tableLayout: "tableLayout",
    theadTemplate: "theadTemplate",
    contentTemplate: "contentTemplate",
    listOfColWidth: "listOfColWidth",
    scrollX: "scrollX"
  },
  standalone: true,
  features: [ɵɵStandaloneFeature],
  attrs: _c6,
  ngContentSelectors: _c04,
  decls: 4,
  vars: 3,
  consts: [[3, "width", "minWidth", 4, "ngFor", "ngForOf"], ["class", "ant-table-thead", 4, "ngIf"], [3, "ngTemplateOutlet"], [1, "ant-table-thead"]],
  template: function NzTableContentComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵtemplate(0, NzTableContentComponent_col_0_Template, 1, 4, "col", 0)(1, NzTableContentComponent_thead_1_Template, 2, 1, "thead", 1)(2, NzTableContentComponent_ng_template_2_Template, 0, 0, "ng-template", 2);
      ɵɵprojection(3);
    }
    if (rf & 2) {
      ɵɵproperty("ngForOf", ctx.listOfColWidth);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.theadTemplate);
      ɵɵadvance();
      ɵɵproperty("ngTemplateOutlet", ctx.contentTemplate);
    }
  },
  dependencies: [NgTemplateOutlet, NgIf, NgForOf],
  encapsulation: 2,
  changeDetection: 0
});
var NzTableContentComponent = _NzTableContentComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTableContentComponent, [{
    type: Component,
    args: [{
      selector: "table[nz-table-content]",
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      template: `
    <col [style.width]="width" [style.minWidth]="width" *ngFor="let width of listOfColWidth" />
    <thead class="ant-table-thead" *ngIf="theadTemplate">
      <ng-template [ngTemplateOutlet]="theadTemplate"></ng-template>
    </thead>
    <ng-template [ngTemplateOutlet]="contentTemplate"></ng-template>
    <ng-content></ng-content>
  `,
      host: {
        "[style.table-layout]": "tableLayout",
        "[class.ant-table-fixed]": "scrollX",
        "[style.width]": "scrollX",
        "[style.min-width]": `scrollX ? '100%' : null`
      },
      imports: [NgTemplateOutlet, NgIf, NgForOf],
      standalone: true
    }]
  }], null, {
    tableLayout: [{
      type: Input
    }],
    theadTemplate: [{
      type: Input
    }],
    contentTemplate: [{
      type: Input
    }],
    listOfColWidth: [{
      type: Input
    }],
    scrollX: [{
      type: Input
    }]
  });
})();
var _NzTableFixedRowComponent = class _NzTableFixedRowComponent {
  constructor(nzTableStyleService, renderer) {
    this.nzTableStyleService = nzTableStyleService;
    this.renderer = renderer;
    this.hostWidth$ = new BehaviorSubject(null);
    this.enableAutoMeasure$ = new BehaviorSubject(false);
    this.destroy$ = new Subject();
  }
  ngOnInit() {
    if (this.nzTableStyleService) {
      const {
        enableAutoMeasure$,
        hostWidth$
      } = this.nzTableStyleService;
      enableAutoMeasure$.pipe(takeUntil(this.destroy$)).subscribe(this.enableAutoMeasure$);
      hostWidth$.pipe(takeUntil(this.destroy$)).subscribe(this.hostWidth$);
    }
  }
  ngAfterViewInit() {
    this.nzTableStyleService.columnCount$.pipe(takeUntil(this.destroy$)).subscribe((count) => {
      this.renderer.setAttribute(this.tdElement.nativeElement, "colspan", `${count}`);
    });
  }
  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
};
_NzTableFixedRowComponent.ɵfac = function NzTableFixedRowComponent_Factory(t) {
  return new (t || _NzTableFixedRowComponent)(ɵɵdirectiveInject(NzTableStyleService), ɵɵdirectiveInject(Renderer2));
};
_NzTableFixedRowComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzTableFixedRowComponent,
  selectors: [["tr", "nz-table-fixed-row", ""], ["tr", "nzExpand", ""]],
  viewQuery: function NzTableFixedRowComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c7, 7);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.tdElement = _t.first);
    }
  },
  standalone: true,
  features: [ɵɵStandaloneFeature],
  attrs: _c8,
  ngContentSelectors: _c04,
  decls: 6,
  vars: 4,
  consts: [["tdElement", ""], ["contentTemplate", ""], [1, "nz-disable-td", "ant-table-cell"], ["class", "ant-table-expanded-row-fixed", "style", "position: sticky; left: 0px; overflow: hidden;", 3, "width", 4, "ngIf", "ngIfElse"], [1, "ant-table-expanded-row-fixed", 2, "position", "sticky", "left", "0px", "overflow", "hidden"], [3, "ngTemplateOutlet"]],
  template: function NzTableFixedRowComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵelementStart(0, "td", 2, 0);
      ɵɵtemplate(2, NzTableFixedRowComponent_div_2_Template, 3, 5, "div", 3);
      ɵɵpipe(3, "async");
      ɵɵelementEnd();
      ɵɵtemplate(4, NzTableFixedRowComponent_ng_template_4_Template, 1, 0, "ng-template", null, 1, ɵɵtemplateRefExtractor);
    }
    if (rf & 2) {
      const contentTemplate_r2 = ɵɵreference(5);
      ɵɵadvance(2);
      ɵɵproperty("ngIf", ɵɵpipeBind1(3, 2, ctx.enableAutoMeasure$))("ngIfElse", contentTemplate_r2);
    }
  },
  dependencies: [NgIf, AsyncPipe, NgTemplateOutlet],
  encapsulation: 2,
  changeDetection: 0
});
var NzTableFixedRowComponent = _NzTableFixedRowComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTableFixedRowComponent, [{
    type: Component,
    args: [{
      selector: "tr[nz-table-fixed-row], tr[nzExpand]",
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      template: `
    <td class="nz-disable-td ant-table-cell" #tdElement>
      <div
        class="ant-table-expanded-row-fixed"
        *ngIf="enableAutoMeasure$ | async; else contentTemplate"
        style="position: sticky; left: 0px; overflow: hidden;"
        [style.width.px]="hostWidth$ | async"
      >
        <ng-template [ngTemplateOutlet]="contentTemplate"></ng-template>
      </div>
    </td>
    <ng-template #contentTemplate>
      <ng-content></ng-content>
    </ng-template>
  `,
      imports: [NgIf, AsyncPipe, NgTemplateOutlet],
      standalone: true
    }]
  }], () => [{
    type: NzTableStyleService
  }, {
    type: Renderer2
  }], {
    tdElement: [{
      type: ViewChild,
      args: ["tdElement", {
        static: true
      }]
    }]
  });
})();
var _NzTableInnerDefaultComponent = class _NzTableInnerDefaultComponent {
  constructor() {
    this.tableLayout = "auto";
    this.listOfColWidth = [];
    this.theadTemplate = null;
    this.contentTemplate = null;
  }
};
_NzTableInnerDefaultComponent.ɵfac = function NzTableInnerDefaultComponent_Factory(t) {
  return new (t || _NzTableInnerDefaultComponent)();
};
_NzTableInnerDefaultComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzTableInnerDefaultComponent,
  selectors: [["nz-table-inner-default"]],
  hostAttrs: [1, "ant-table-container"],
  inputs: {
    tableLayout: "tableLayout",
    listOfColWidth: "listOfColWidth",
    theadTemplate: "theadTemplate",
    contentTemplate: "contentTemplate"
  },
  standalone: true,
  features: [ɵɵStandaloneFeature],
  decls: 2,
  vars: 4,
  consts: [[1, "ant-table-content"], ["nz-table-content", "", 3, "contentTemplate", "tableLayout", "listOfColWidth", "theadTemplate"]],
  template: function NzTableInnerDefaultComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "div", 0);
      ɵɵelement(1, "table", 1);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵadvance();
      ɵɵproperty("contentTemplate", ctx.contentTemplate)("tableLayout", ctx.tableLayout)("listOfColWidth", ctx.listOfColWidth)("theadTemplate", ctx.theadTemplate);
    }
  },
  dependencies: [NzTableContentComponent],
  encapsulation: 2,
  changeDetection: 0
});
var NzTableInnerDefaultComponent = _NzTableInnerDefaultComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTableInnerDefaultComponent, [{
    type: Component,
    args: [{
      selector: "nz-table-inner-default",
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      template: `
    <div class="ant-table-content">
      <table
        nz-table-content
        [contentTemplate]="contentTemplate"
        [tableLayout]="tableLayout"
        [listOfColWidth]="listOfColWidth"
        [theadTemplate]="theadTemplate"
      ></table>
    </div>
  `,
      host: {
        class: "ant-table-container"
      },
      imports: [NzTableContentComponent],
      standalone: true
    }]
  }], () => [], {
    tableLayout: [{
      type: Input
    }],
    listOfColWidth: [{
      type: Input
    }],
    theadTemplate: [{
      type: Input
    }],
    contentTemplate: [{
      type: Input
    }]
  });
})();
var _NzTrMeasureComponent = class _NzTrMeasureComponent {
  constructor(nzResizeObserver, ngZone) {
    this.nzResizeObserver = nzResizeObserver;
    this.ngZone = ngZone;
    this.listOfMeasureColumn = [];
    this.listOfAutoWidth = new EventEmitter();
    this.destroy$ = new Subject();
  }
  trackByFunc(_, key) {
    return key;
  }
  ngAfterViewInit() {
    this.listOfTdElement.changes.pipe(startWith(this.listOfTdElement)).pipe(switchMap((list) => combineLatest(list.toArray().map((item) => this.nzResizeObserver.observe(item).pipe(map(([entry]) => {
      const {
        width
      } = entry.target.getBoundingClientRect();
      return Math.floor(width);
    }))))), debounceTime(16), takeUntil(this.destroy$)).subscribe((data) => {
      if (this.ngZone instanceof NgZone && NgZone.isInAngularZone()) {
        this.listOfAutoWidth.next(data);
      } else {
        this.ngZone.run(() => this.listOfAutoWidth.next(data));
      }
    });
  }
  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
};
_NzTrMeasureComponent.ɵfac = function NzTrMeasureComponent_Factory(t) {
  return new (t || _NzTrMeasureComponent)(ɵɵdirectiveInject(NzResizeObserver), ɵɵdirectiveInject(NgZone));
};
_NzTrMeasureComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzTrMeasureComponent,
  selectors: [["tr", "nz-table-measure-row", ""]],
  viewQuery: function NzTrMeasureComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c7, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.listOfTdElement = _t);
    }
  },
  hostAttrs: [1, "ant-table-measure-now"],
  inputs: {
    listOfMeasureColumn: "listOfMeasureColumn"
  },
  outputs: {
    listOfAutoWidth: "listOfAutoWidth"
  },
  standalone: true,
  features: [ɵɵStandaloneFeature],
  attrs: _c9,
  decls: 1,
  vars: 2,
  consts: [["tdElement", ""], ["class", "nz-disable-td", "style", "padding: 0px; border: 0px; height: 0px;", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "nz-disable-td", 2, "padding", "0px", "border", "0px", "height", "0px"]],
  template: function NzTrMeasureComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, NzTrMeasureComponent_td_0_Template, 2, 0, "td", 1);
    }
    if (rf & 2) {
      ɵɵproperty("ngForOf", ctx.listOfMeasureColumn)("ngForTrackBy", ctx.trackByFunc);
    }
  },
  dependencies: [NgForOf],
  encapsulation: 2,
  changeDetection: 0
});
var NzTrMeasureComponent = _NzTrMeasureComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTrMeasureComponent, [{
    type: Component,
    args: [{
      selector: "tr[nz-table-measure-row]",
      preserveWhitespaces: false,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      template: `
    <td
      #tdElement
      class="nz-disable-td"
      style="padding: 0px; border: 0px; height: 0px;"
      *ngFor="let th of listOfMeasureColumn; trackBy: trackByFunc"
    ></td>
  `,
      host: {
        class: "ant-table-measure-now"
      },
      imports: [NgForOf],
      standalone: true
    }]
  }], () => [{
    type: NzResizeObserver
  }, {
    type: NgZone
  }], {
    listOfMeasureColumn: [{
      type: Input
    }],
    listOfAutoWidth: [{
      type: Output
    }],
    listOfTdElement: [{
      type: ViewChildren,
      args: ["tdElement"]
    }]
  });
})();
var _NzTbodyComponent = class _NzTbodyComponent {
  constructor(nzTableStyleService) {
    this.nzTableStyleService = nzTableStyleService;
    this.isInsideTable = false;
    this.showEmpty$ = new BehaviorSubject(false);
    this.noResult$ = new BehaviorSubject(void 0);
    this.listOfMeasureColumn$ = new BehaviorSubject([]);
    this.destroy$ = new Subject();
    this.isInsideTable = !!this.nzTableStyleService;
    if (this.nzTableStyleService) {
      const {
        showEmpty$,
        noResult$,
        listOfMeasureColumn$
      } = this.nzTableStyleService;
      noResult$.pipe(takeUntil(this.destroy$)).subscribe(this.noResult$);
      listOfMeasureColumn$.pipe(takeUntil(this.destroy$)).subscribe(this.listOfMeasureColumn$);
      showEmpty$.pipe(takeUntil(this.destroy$)).subscribe(this.showEmpty$);
    }
  }
  onListOfAutoWidthChange(listOfAutoWidth) {
    this.nzTableStyleService.setListOfAutoWidth(listOfAutoWidth);
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
};
_NzTbodyComponent.ɵfac = function NzTbodyComponent_Factory(t) {
  return new (t || _NzTbodyComponent)(ɵɵdirectiveInject(NzTableStyleService, 8));
};
_NzTbodyComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzTbodyComponent,
  selectors: [["tbody"]],
  hostVars: 2,
  hostBindings: function NzTbodyComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("ant-table-tbody", ctx.isInsideTable);
    }
  },
  standalone: true,
  features: [ɵɵStandaloneFeature],
  ngContentSelectors: _c04,
  decls: 5,
  vars: 6,
  consts: [[4, "ngIf"], ["class", "ant-table-placeholder", "nz-table-fixed-row", "", 4, "ngIf"], ["nz-table-measure-row", "", 3, "listOfMeasureColumn", "listOfAutoWidth", 4, "ngIf"], ["nz-table-measure-row", "", 3, "listOfAutoWidth", "listOfMeasureColumn"], ["nz-table-fixed-row", "", 1, "ant-table-placeholder"], ["nzComponentName", "table", 3, "specificContent"]],
  template: function NzTbodyComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵtemplate(0, NzTbodyComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
      ɵɵpipe(1, "async");
      ɵɵprojection(2);
      ɵɵtemplate(3, NzTbodyComponent_tr_3_Template, 3, 3, "tr", 1);
      ɵɵpipe(4, "async");
    }
    if (rf & 2) {
      ɵɵproperty("ngIf", ɵɵpipeBind1(1, 2, ctx.listOfMeasureColumn$));
      ɵɵadvance(3);
      ɵɵproperty("ngIf", ɵɵpipeBind1(4, 4, ctx.showEmpty$));
    }
  },
  dependencies: [NgIf, AsyncPipe, NzTrMeasureComponent, NzTableFixedRowComponent, NzEmptyModule, NzEmbedEmptyComponent],
  encapsulation: 2,
  changeDetection: 0
});
var NzTbodyComponent = _NzTbodyComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTbodyComponent, [{
    type: Component,
    args: [{
      selector: "tbody",
      preserveWhitespaces: false,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      template: `
    <ng-container *ngIf="listOfMeasureColumn$ | async as listOfMeasureColumn">
      <tr
        nz-table-measure-row
        *ngIf="isInsideTable && listOfMeasureColumn.length"
        [listOfMeasureColumn]="listOfMeasureColumn"
        (listOfAutoWidth)="onListOfAutoWidthChange($event)"
      ></tr>
    </ng-container>
    <ng-content></ng-content>
    <tr class="ant-table-placeholder" nz-table-fixed-row *ngIf="showEmpty$ | async">
      <nz-embed-empty nzComponentName="table" [specificContent]="(noResult$ | async)!"></nz-embed-empty>
    </tr>
  `,
      host: {
        "[class.ant-table-tbody]": "isInsideTable"
      },
      imports: [NgIf, AsyncPipe, NzTrMeasureComponent, NzTableFixedRowComponent, NzEmptyModule],
      standalone: true
    }]
  }], () => [{
    type: NzTableStyleService,
    decorators: [{
      type: Optional
    }]
  }], null);
})();
var _NzTableInnerScrollComponent = class _NzTableInnerScrollComponent {
  setScrollPositionClassName(clear = false) {
    const {
      scrollWidth,
      scrollLeft,
      clientWidth
    } = this.tableBodyElement.nativeElement;
    const leftClassName = "ant-table-ping-left";
    const rightClassName = "ant-table-ping-right";
    if (scrollWidth === clientWidth && scrollWidth !== 0 || clear) {
      this.renderer.removeClass(this.tableMainElement, leftClassName);
      this.renderer.removeClass(this.tableMainElement, rightClassName);
    } else if (scrollLeft === 0) {
      this.renderer.removeClass(this.tableMainElement, leftClassName);
      this.renderer.addClass(this.tableMainElement, rightClassName);
    } else if (scrollWidth === scrollLeft + clientWidth) {
      this.renderer.removeClass(this.tableMainElement, rightClassName);
      this.renderer.addClass(this.tableMainElement, leftClassName);
    } else {
      this.renderer.addClass(this.tableMainElement, leftClassName);
      this.renderer.addClass(this.tableMainElement, rightClassName);
    }
  }
  constructor(renderer, ngZone, platform, resizeService) {
    this.renderer = renderer;
    this.ngZone = ngZone;
    this.platform = platform;
    this.resizeService = resizeService;
    this.data = [];
    this.scrollX = null;
    this.scrollY = null;
    this.contentTemplate = null;
    this.widthConfig = [];
    this.listOfColWidth = [];
    this.theadTemplate = null;
    this.virtualTemplate = null;
    this.virtualItemSize = 0;
    this.virtualMaxBufferPx = 200;
    this.virtualMinBufferPx = 100;
    this.virtualForTrackBy = (index) => index;
    this.headerStyleMap = {};
    this.bodyStyleMap = {};
    this.verticalScrollBarWidth = 0;
    this.noDateVirtualHeight = "182px";
    this.data$ = new Subject();
    this.scroll$ = new Subject();
    this.destroy$ = new Subject();
  }
  ngOnChanges(changes) {
    const {
      scrollX,
      scrollY,
      data
    } = changes;
    if (scrollX || scrollY) {
      const hasVerticalScrollBar = this.verticalScrollBarWidth !== 0;
      this.headerStyleMap = {
        overflowX: "hidden",
        overflowY: this.scrollY && hasVerticalScrollBar ? "scroll" : "hidden"
      };
      this.bodyStyleMap = {
        overflowY: this.scrollY ? "scroll" : "hidden",
        overflowX: this.scrollX ? "auto" : null,
        maxHeight: this.scrollY
      };
      this.ngZone.runOutsideAngular(() => this.scroll$.next());
    }
    if (data) {
      this.ngZone.runOutsideAngular(() => this.data$.next());
    }
  }
  ngAfterViewInit() {
    if (this.platform.isBrowser) {
      this.ngZone.runOutsideAngular(() => {
        const scrollEvent$ = this.scroll$.pipe(startWith(null), delay(0), switchMap(() => fromEvent(this.tableBodyElement.nativeElement, "scroll").pipe(startWith(true))), takeUntil(this.destroy$));
        const resize$ = this.resizeService.subscribe().pipe(takeUntil(this.destroy$));
        const data$ = this.data$.pipe(takeUntil(this.destroy$));
        const setClassName$ = merge(scrollEvent$, resize$, data$, this.scroll$).pipe(startWith(true), delay(0), takeUntil(this.destroy$));
        setClassName$.subscribe(() => this.setScrollPositionClassName());
        scrollEvent$.pipe(filter(() => !!this.scrollY)).subscribe(() => this.tableHeaderElement.nativeElement.scrollLeft = this.tableBodyElement.nativeElement.scrollLeft);
      });
    }
  }
  ngOnDestroy() {
    this.setScrollPositionClassName(true);
    this.destroy$.next();
    this.destroy$.complete();
  }
};
_NzTableInnerScrollComponent.ɵfac = function NzTableInnerScrollComponent_Factory(t) {
  return new (t || _NzTableInnerScrollComponent)(ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(Platform), ɵɵdirectiveInject(NzResizeService));
};
_NzTableInnerScrollComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzTableInnerScrollComponent,
  selectors: [["nz-table-inner-scroll"]],
  viewQuery: function NzTableInnerScrollComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c10, 5, ElementRef);
      ɵɵviewQuery(_c11, 5, ElementRef);
      ɵɵviewQuery(CdkVirtualScrollViewport, 5, CdkVirtualScrollViewport);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.tableHeaderElement = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.tableBodyElement = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.cdkVirtualScrollViewport = _t.first);
    }
  },
  hostAttrs: [1, "ant-table-container"],
  inputs: {
    data: "data",
    scrollX: "scrollX",
    scrollY: "scrollY",
    contentTemplate: "contentTemplate",
    widthConfig: "widthConfig",
    listOfColWidth: "listOfColWidth",
    theadTemplate: "theadTemplate",
    virtualTemplate: "virtualTemplate",
    virtualItemSize: "virtualItemSize",
    virtualMaxBufferPx: "virtualMaxBufferPx",
    virtualMinBufferPx: "virtualMinBufferPx",
    tableMainElement: "tableMainElement",
    virtualForTrackBy: "virtualForTrackBy",
    verticalScrollBarWidth: "verticalScrollBarWidth"
  },
  standalone: true,
  features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
  decls: 2,
  vars: 2,
  consts: [["tableHeaderElement", ""], ["tableBodyElement", ""], [4, "ngIf"], ["class", "ant-table-content", 3, "ngStyle", 4, "ngIf"], [1, "ant-table-header", "nz-table-hide-scrollbar", 3, "ngStyle"], ["nz-table-content", "", "tableLayout", "fixed", 3, "scrollX", "listOfColWidth", "theadTemplate"], ["class", "ant-table-body", 3, "ngStyle", 4, "ngIf"], [3, "itemSize", "maxBufferPx", "minBufferPx", "height", 4, "ngIf"], [1, "ant-table-body", 3, "ngStyle"], ["nz-table-content", "", "tableLayout", "fixed", 3, "scrollX", "listOfColWidth", "contentTemplate"], [3, "itemSize", "maxBufferPx", "minBufferPx"], ["nz-table-content", "", "tableLayout", "fixed", 3, "scrollX", "listOfColWidth"], [4, "cdkVirtualFor", "cdkVirtualForOf", "cdkVirtualForTrackBy"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "ant-table-content", 3, "ngStyle"], ["nz-table-content", "", "tableLayout", "fixed", 3, "scrollX", "listOfColWidth", "theadTemplate", "contentTemplate"]],
  template: function NzTableInnerScrollComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, NzTableInnerScrollComponent_ng_container_0_Template, 6, 6, "ng-container", 2)(1, NzTableInnerScrollComponent_div_1_Template, 3, 5, "div", 3);
    }
    if (rf & 2) {
      ɵɵproperty("ngIf", ctx.scrollY);
      ɵɵadvance();
      ɵɵproperty("ngIf", !ctx.scrollY);
    }
  },
  dependencies: [NzTableContentComponent, NgIf, NgStyle, ScrollingModule, CdkFixedSizeVirtualScroll, CdkVirtualForOf, CdkVirtualScrollViewport, NgTemplateOutlet, NzTbodyComponent],
  encapsulation: 2,
  changeDetection: 0
});
var NzTableInnerScrollComponent = _NzTableInnerScrollComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTableInnerScrollComponent, [{
    type: Component,
    args: [{
      selector: "nz-table-inner-scroll",
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      template: `
    <ng-container *ngIf="scrollY">
      <div #tableHeaderElement [ngStyle]="headerStyleMap" class="ant-table-header nz-table-hide-scrollbar">
        <table
          nz-table-content
          tableLayout="fixed"
          [scrollX]="scrollX"
          [listOfColWidth]="listOfColWidth"
          [theadTemplate]="theadTemplate"
        ></table>
      </div>
      <div #tableBodyElement *ngIf="!virtualTemplate" class="ant-table-body" [ngStyle]="bodyStyleMap">
        <table
          nz-table-content
          tableLayout="fixed"
          [scrollX]="scrollX"
          [listOfColWidth]="listOfColWidth"
          [contentTemplate]="contentTemplate"
        ></table>
      </div>
      <cdk-virtual-scroll-viewport
        #tableBodyElement
        *ngIf="virtualTemplate"
        [itemSize]="virtualItemSize"
        [maxBufferPx]="virtualMaxBufferPx"
        [minBufferPx]="virtualMinBufferPx"
        [style.height]="data.length ? scrollY : noDateVirtualHeight"
      >
        <table nz-table-content tableLayout="fixed" [scrollX]="scrollX" [listOfColWidth]="listOfColWidth">
          <tbody>
            <ng-container *cdkVirtualFor="let item of data; let i = index; trackBy: virtualForTrackBy">
              <ng-template
                [ngTemplateOutlet]="virtualTemplate"
                [ngTemplateOutletContext]="{ $implicit: item, index: i }"
              ></ng-template>
            </ng-container>
          </tbody>
        </table>
      </cdk-virtual-scroll-viewport>
    </ng-container>
    <div class="ant-table-content" #tableBodyElement *ngIf="!scrollY" [ngStyle]="bodyStyleMap">
      <table
        nz-table-content
        tableLayout="fixed"
        [scrollX]="scrollX"
        [listOfColWidth]="listOfColWidth"
        [theadTemplate]="theadTemplate"
        [contentTemplate]="contentTemplate"
      ></table>
    </div>
  `,
      host: {
        class: "ant-table-container"
      },
      imports: [NzTableContentComponent, NgIf, NgStyle, ScrollingModule, NgTemplateOutlet, NzTbodyComponent],
      standalone: true
    }]
  }], () => [{
    type: Renderer2
  }, {
    type: NgZone
  }, {
    type: Platform
  }, {
    type: NzResizeService
  }], {
    data: [{
      type: Input
    }],
    scrollX: [{
      type: Input
    }],
    scrollY: [{
      type: Input
    }],
    contentTemplate: [{
      type: Input
    }],
    widthConfig: [{
      type: Input
    }],
    listOfColWidth: [{
      type: Input
    }],
    theadTemplate: [{
      type: Input
    }],
    virtualTemplate: [{
      type: Input
    }],
    virtualItemSize: [{
      type: Input
    }],
    virtualMaxBufferPx: [{
      type: Input
    }],
    virtualMinBufferPx: [{
      type: Input
    }],
    tableMainElement: [{
      type: Input
    }],
    virtualForTrackBy: [{
      type: Input
    }],
    tableHeaderElement: [{
      type: ViewChild,
      args: ["tableHeaderElement", {
        read: ElementRef
      }]
    }],
    tableBodyElement: [{
      type: ViewChild,
      args: ["tableBodyElement", {
        read: ElementRef
      }]
    }],
    cdkVirtualScrollViewport: [{
      type: ViewChild,
      args: [CdkVirtualScrollViewport, {
        read: CdkVirtualScrollViewport
      }]
    }],
    verticalScrollBarWidth: [{
      type: Input
    }]
  });
})();
var _NzTableVirtualScrollDirective = class _NzTableVirtualScrollDirective {
  constructor(templateRef) {
    this.templateRef = templateRef;
  }
  static ngTemplateContextGuard(_dir, _ctx) {
    return true;
  }
};
_NzTableVirtualScrollDirective.ɵfac = function NzTableVirtualScrollDirective_Factory(t) {
  return new (t || _NzTableVirtualScrollDirective)(ɵɵdirectiveInject(TemplateRef));
};
_NzTableVirtualScrollDirective.ɵdir = ɵɵdefineDirective({
  type: _NzTableVirtualScrollDirective,
  selectors: [["", "nz-virtual-scroll", ""]],
  exportAs: ["nzVirtualScroll"],
  standalone: true
});
var NzTableVirtualScrollDirective = _NzTableVirtualScrollDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTableVirtualScrollDirective, [{
    type: Directive,
    args: [{
      selector: "[nz-virtual-scroll]",
      exportAs: "nzVirtualScroll",
      standalone: true
    }]
  }], () => [{
    type: TemplateRef
  }], null);
})();
var _NzTableTitleFooterComponent = class _NzTableTitleFooterComponent {
  constructor() {
    this.title = null;
    this.footer = null;
  }
};
_NzTableTitleFooterComponent.ɵfac = function NzTableTitleFooterComponent_Factory(t) {
  return new (t || _NzTableTitleFooterComponent)();
};
_NzTableTitleFooterComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzTableTitleFooterComponent,
  selectors: [["nz-table-title-footer"]],
  hostVars: 4,
  hostBindings: function NzTableTitleFooterComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("ant-table-title", ctx.title !== null)("ant-table-footer", ctx.footer !== null);
    }
  },
  inputs: {
    title: "title",
    footer: "footer"
  },
  standalone: true,
  features: [ɵɵStandaloneFeature],
  decls: 2,
  vars: 2,
  consts: [[4, "nzStringTemplateOutlet"]],
  template: function NzTableTitleFooterComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, NzTableTitleFooterComponent_ng_container_0_Template, 2, 1, "ng-container", 0)(1, NzTableTitleFooterComponent_ng_container_1_Template, 2, 1, "ng-container", 0);
    }
    if (rf & 2) {
      ɵɵproperty("nzStringTemplateOutlet", ctx.title);
      ɵɵadvance();
      ɵɵproperty("nzStringTemplateOutlet", ctx.footer);
    }
  },
  dependencies: [NzOutletModule, NzStringTemplateOutletDirective],
  encapsulation: 2,
  changeDetection: 0
});
var NzTableTitleFooterComponent = _NzTableTitleFooterComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTableTitleFooterComponent, [{
    type: Component,
    args: [{
      selector: "nz-table-title-footer",
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      template: `
    <ng-container *nzStringTemplateOutlet="title">{{ title }}</ng-container>
    <ng-container *nzStringTemplateOutlet="footer">{{ footer }}</ng-container>
  `,
      host: {
        "[class.ant-table-title]": `title !== null`,
        "[class.ant-table-footer]": `footer !== null`
      },
      imports: [NzOutletModule],
      standalone: true
    }]
  }], null, {
    title: [{
      type: Input
    }],
    footer: [{
      type: Input
    }]
  });
})();
var NZ_CONFIG_MODULE_NAME3 = "table";
var _NzTableComponent = class _NzTableComponent {
  onPageSizeChange(size) {
    this.nzTableDataService.updatePageSize(size);
  }
  onPageIndexChange(index) {
    this.nzTableDataService.updatePageIndex(index);
  }
  constructor(elementRef, nzResizeObserver, nzConfigService, cdr, nzTableStyleService, nzTableDataService, directionality) {
    this.elementRef = elementRef;
    this.nzResizeObserver = nzResizeObserver;
    this.nzConfigService = nzConfigService;
    this.cdr = cdr;
    this.nzTableStyleService = nzTableStyleService;
    this.nzTableDataService = nzTableDataService;
    this.directionality = directionality;
    this._nzModuleName = NZ_CONFIG_MODULE_NAME3;
    this.nzTableLayout = "auto";
    this.nzShowTotal = null;
    this.nzItemRender = null;
    this.nzTitle = null;
    this.nzFooter = null;
    this.nzNoResult = void 0;
    this.nzPageSizeOptions = [10, 20, 30, 40, 50];
    this.nzVirtualItemSize = 0;
    this.nzVirtualMaxBufferPx = 200;
    this.nzVirtualMinBufferPx = 100;
    this.nzVirtualForTrackBy = (index) => index;
    this.nzLoadingDelay = 0;
    this.nzPageIndex = 1;
    this.nzPageSize = 10;
    this.nzTotal = 0;
    this.nzWidthConfig = [];
    this.nzData = [];
    this.nzCustomColumn = [];
    this.nzPaginationPosition = "bottom";
    this.nzScroll = {
      x: null,
      y: null
    };
    this.nzPaginationType = "default";
    this.nzFrontPagination = true;
    this.nzTemplateMode = false;
    this.nzShowPagination = true;
    this.nzLoading = false;
    this.nzOuterBordered = false;
    this.nzLoadingIndicator = null;
    this.nzBordered = false;
    this.nzSize = "default";
    this.nzShowSizeChanger = false;
    this.nzHideOnSinglePage = false;
    this.nzShowQuickJumper = false;
    this.nzSimple = false;
    this.nzPageSizeChange = new EventEmitter();
    this.nzPageIndexChange = new EventEmitter();
    this.nzQueryParams = new EventEmitter();
    this.nzCurrentPageDataChange = new EventEmitter();
    this.nzCustomColumnChange = new EventEmitter();
    this.data = [];
    this.scrollX = null;
    this.scrollY = null;
    this.theadTemplate = null;
    this.listOfAutoColWidth = [];
    this.listOfManualColWidth = [];
    this.hasFixLeft = false;
    this.hasFixRight = false;
    this.showPagination = true;
    this.destroy$ = new Subject();
    this.templateMode$ = new BehaviorSubject(false);
    this.dir = "ltr";
    this.verticalScrollBarWidth = 0;
    this.nzConfigService.getConfigChangeEventForComponent(NZ_CONFIG_MODULE_NAME3).pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.cdr.markForCheck();
    });
  }
  ngOnInit() {
    const {
      pageIndexDistinct$,
      pageSizeDistinct$,
      listOfCurrentPageData$,
      total$,
      queryParams$,
      listOfCustomColumn$
    } = this.nzTableDataService;
    const {
      theadTemplate$,
      hasFixLeft$,
      hasFixRight$
    } = this.nzTableStyleService;
    this.dir = this.directionality.value;
    this.directionality.change?.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
      this.dir = direction;
      this.cdr.detectChanges();
    });
    queryParams$.pipe(takeUntil(this.destroy$)).subscribe(this.nzQueryParams);
    pageIndexDistinct$.pipe(takeUntil(this.destroy$)).subscribe((pageIndex) => {
      if (pageIndex !== this.nzPageIndex) {
        this.nzPageIndex = pageIndex;
        this.nzPageIndexChange.next(pageIndex);
      }
    });
    pageSizeDistinct$.pipe(takeUntil(this.destroy$)).subscribe((pageSize) => {
      if (pageSize !== this.nzPageSize) {
        this.nzPageSize = pageSize;
        this.nzPageSizeChange.next(pageSize);
      }
    });
    total$.pipe(takeUntil(this.destroy$), filter(() => this.nzFrontPagination)).subscribe((total) => {
      if (total !== this.nzTotal) {
        this.nzTotal = total;
        this.cdr.markForCheck();
      }
    });
    listOfCurrentPageData$.pipe(takeUntil(this.destroy$)).subscribe((data) => {
      this.data = data;
      this.nzCurrentPageDataChange.next(data);
      this.cdr.markForCheck();
    });
    listOfCustomColumn$.pipe(takeUntil(this.destroy$)).subscribe((data) => {
      this.nzCustomColumn = data;
      this.nzCustomColumnChange.next(data);
      this.cdr.markForCheck();
    });
    theadTemplate$.pipe(takeUntil(this.destroy$)).subscribe((theadTemplate) => {
      this.theadTemplate = theadTemplate;
      this.cdr.markForCheck();
    });
    hasFixLeft$.pipe(takeUntil(this.destroy$)).subscribe((hasFixLeft) => {
      this.hasFixLeft = hasFixLeft;
      this.cdr.markForCheck();
    });
    hasFixRight$.pipe(takeUntil(this.destroy$)).subscribe((hasFixRight) => {
      this.hasFixRight = hasFixRight;
      this.cdr.markForCheck();
    });
    combineLatest([total$, this.templateMode$]).pipe(map(([total, templateMode]) => total === 0 && !templateMode), takeUntil(this.destroy$)).subscribe((empty) => {
      this.nzTableStyleService.setShowEmpty(empty);
    });
    this.verticalScrollBarWidth = measureScrollbar("vertical");
    this.nzTableStyleService.listOfListOfThWidthPx$.pipe(takeUntil(this.destroy$)).subscribe((listOfWidth) => {
      this.listOfAutoColWidth = listOfWidth;
      this.cdr.markForCheck();
    });
    this.nzTableStyleService.manualWidthConfigPx$.pipe(takeUntil(this.destroy$)).subscribe((listOfWidth) => {
      this.listOfManualColWidth = listOfWidth;
      this.cdr.markForCheck();
    });
  }
  ngOnChanges(changes) {
    const {
      nzScroll,
      nzPageIndex,
      nzPageSize,
      nzFrontPagination,
      nzData,
      nzCustomColumn,
      nzWidthConfig,
      nzNoResult,
      nzTemplateMode
    } = changes;
    if (nzPageIndex) {
      this.nzTableDataService.updatePageIndex(this.nzPageIndex);
    }
    if (nzPageSize) {
      this.nzTableDataService.updatePageSize(this.nzPageSize);
    }
    if (nzData) {
      this.nzData = this.nzData || [];
      this.nzTableDataService.updateListOfData(this.nzData);
    }
    if (nzCustomColumn) {
      this.nzCustomColumn = this.nzCustomColumn || [];
      this.nzTableDataService.updateListOfCustomColumn(this.nzCustomColumn);
    }
    if (nzFrontPagination) {
      this.nzTableDataService.updateFrontPagination(this.nzFrontPagination);
    }
    if (nzScroll) {
      this.setScrollOnChanges();
    }
    if (nzWidthConfig) {
      this.nzTableStyleService.setTableWidthConfig(this.nzWidthConfig);
    }
    if (nzTemplateMode) {
      this.templateMode$.next(this.nzTemplateMode);
    }
    if (nzNoResult) {
      this.nzTableStyleService.setNoResult(this.nzNoResult);
    }
    this.updateShowPagination();
  }
  ngAfterViewInit() {
    this.nzResizeObserver.observe(this.elementRef).pipe(map(([entry]) => {
      const {
        width
      } = entry.target.getBoundingClientRect();
      const scrollBarWidth = this.scrollY ? this.verticalScrollBarWidth : 0;
      return Math.floor(width - scrollBarWidth);
    }), takeUntil(this.destroy$)).subscribe(this.nzTableStyleService.hostWidth$);
    if (this.nzTableInnerScrollComponent && this.nzTableInnerScrollComponent.cdkVirtualScrollViewport) {
      this.cdkVirtualScrollViewport = this.nzTableInnerScrollComponent.cdkVirtualScrollViewport;
    }
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  setScrollOnChanges() {
    this.scrollX = this.nzScroll && this.nzScroll.x || null;
    this.scrollY = this.nzScroll && this.nzScroll.y || null;
    this.nzTableStyleService.setScroll(this.scrollX, this.scrollY);
  }
  updateShowPagination() {
    this.showPagination = this.nzHideOnSinglePage && this.nzData.length > this.nzPageSize || this.nzData.length > 0 && !this.nzHideOnSinglePage || !this.nzFrontPagination && this.nzTotal > this.nzPageSize;
  }
};
_NzTableComponent.ɵfac = function NzTableComponent_Factory(t) {
  return new (t || _NzTableComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NzResizeObserver), ɵɵdirectiveInject(NzConfigService), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(NzTableStyleService), ɵɵdirectiveInject(NzTableDataService), ɵɵdirectiveInject(Directionality, 8));
};
_NzTableComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzTableComponent,
  selectors: [["nz-table"]],
  contentQueries: function NzTableComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, NzTableVirtualScrollDirective, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.nzVirtualScrollDirective = _t.first);
    }
  },
  viewQuery: function NzTableComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(NzTableInnerScrollComponent, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.nzTableInnerScrollComponent = _t.first);
    }
  },
  hostAttrs: [1, "ant-table-wrapper"],
  hostVars: 4,
  hostBindings: function NzTableComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("ant-table-wrapper-rtl", ctx.dir === "rtl")("ant-table-custom-column", ctx.nzCustomColumn.length);
    }
  },
  inputs: {
    nzTableLayout: "nzTableLayout",
    nzShowTotal: "nzShowTotal",
    nzItemRender: "nzItemRender",
    nzTitle: "nzTitle",
    nzFooter: "nzFooter",
    nzNoResult: "nzNoResult",
    nzPageSizeOptions: "nzPageSizeOptions",
    nzVirtualItemSize: "nzVirtualItemSize",
    nzVirtualMaxBufferPx: "nzVirtualMaxBufferPx",
    nzVirtualMinBufferPx: "nzVirtualMinBufferPx",
    nzVirtualForTrackBy: "nzVirtualForTrackBy",
    nzLoadingDelay: "nzLoadingDelay",
    nzPageIndex: "nzPageIndex",
    nzPageSize: "nzPageSize",
    nzTotal: "nzTotal",
    nzWidthConfig: "nzWidthConfig",
    nzData: "nzData",
    nzCustomColumn: "nzCustomColumn",
    nzPaginationPosition: "nzPaginationPosition",
    nzScroll: "nzScroll",
    nzPaginationType: "nzPaginationType",
    nzFrontPagination: "nzFrontPagination",
    nzTemplateMode: "nzTemplateMode",
    nzShowPagination: "nzShowPagination",
    nzLoading: "nzLoading",
    nzOuterBordered: "nzOuterBordered",
    nzLoadingIndicator: "nzLoadingIndicator",
    nzBordered: "nzBordered",
    nzSize: "nzSize",
    nzShowSizeChanger: "nzShowSizeChanger",
    nzHideOnSinglePage: "nzHideOnSinglePage",
    nzShowQuickJumper: "nzShowQuickJumper",
    nzSimple: "nzSimple"
  },
  outputs: {
    nzPageSizeChange: "nzPageSizeChange",
    nzPageIndexChange: "nzPageIndexChange",
    nzQueryParams: "nzQueryParams",
    nzCurrentPageDataChange: "nzCurrentPageDataChange",
    nzCustomColumnChange: "nzCustomColumnChange"
  },
  exportAs: ["nzTable"],
  standalone: true,
  features: [ɵɵProvidersFeature([NzTableStyleService, NzTableDataService]), ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
  ngContentSelectors: _c04,
  decls: 14,
  vars: 27,
  consts: [["tableMainElement", ""], ["defaultTemplate", ""], ["paginationTemplate", ""], ["contentTemplate", ""], [3, "nzDelay", "nzSpinning", "nzIndicator"], [4, "ngIf"], [1, "ant-table"], [3, "title", 4, "ngIf"], [3, "data", "scrollX", "scrollY", "contentTemplate", "listOfColWidth", "theadTemplate", "verticalScrollBarWidth", "virtualTemplate", "virtualItemSize", "virtualMaxBufferPx", "virtualMinBufferPx", "tableMainElement", "virtualForTrackBy", 4, "ngIf", "ngIfElse"], [3, "footer", 4, "ngIf"], [3, "ngTemplateOutlet"], [3, "title"], [3, "data", "scrollX", "scrollY", "contentTemplate", "listOfColWidth", "theadTemplate", "verticalScrollBarWidth", "virtualTemplate", "virtualItemSize", "virtualMaxBufferPx", "virtualMinBufferPx", "tableMainElement", "virtualForTrackBy"], [3, "tableLayout", "listOfColWidth", "theadTemplate", "contentTemplate"], [3, "footer"], ["class", "ant-table-pagination ant-table-pagination-right", 3, "hidden", "nzShowSizeChanger", "nzPageSizeOptions", "nzItemRender", "nzShowQuickJumper", "nzHideOnSinglePage", "nzShowTotal", "nzSize", "nzPageSize", "nzTotal", "nzSimple", "nzPageIndex", "nzPageSizeChange", "nzPageIndexChange", 4, "ngIf"], [1, "ant-table-pagination", "ant-table-pagination-right", 3, "nzPageSizeChange", "nzPageIndexChange", "hidden", "nzShowSizeChanger", "nzPageSizeOptions", "nzItemRender", "nzShowQuickJumper", "nzHideOnSinglePage", "nzShowTotal", "nzSize", "nzPageSize", "nzTotal", "nzSimple", "nzPageIndex"]],
  template: function NzTableComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵelementStart(0, "nz-spin", 4);
      ɵɵtemplate(1, NzTableComponent_ng_container_1_Template, 2, 1, "ng-container", 5);
      ɵɵelementStart(2, "div", 6, 0);
      ɵɵtemplate(4, NzTableComponent_nz_table_title_footer_4_Template, 1, 1, "nz-table-title-footer", 7)(5, NzTableComponent_nz_table_inner_scroll_5_Template, 1, 13, "nz-table-inner-scroll", 8)(6, NzTableComponent_ng_template_6_Template, 1, 4, "ng-template", null, 1, ɵɵtemplateRefExtractor)(8, NzTableComponent_nz_table_title_footer_8_Template, 1, 1, "nz-table-title-footer", 9);
      ɵɵelementEnd();
      ɵɵtemplate(9, NzTableComponent_ng_container_9_Template, 2, 1, "ng-container", 5);
      ɵɵelementEnd();
      ɵɵtemplate(10, NzTableComponent_ng_template_10_Template, 1, 1, "ng-template", null, 2, ɵɵtemplateRefExtractor)(12, NzTableComponent_ng_template_12_Template, 1, 0, "ng-template", null, 3, ɵɵtemplateRefExtractor);
    }
    if (rf & 2) {
      const defaultTemplate_r6 = ɵɵreference(7);
      ɵɵproperty("nzDelay", ctx.nzLoadingDelay)("nzSpinning", ctx.nzLoading)("nzIndicator", ctx.nzLoadingIndicator);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.nzPaginationPosition === "both" || ctx.nzPaginationPosition === "top");
      ɵɵadvance();
      ɵɵclassProp("ant-table-rtl", ctx.dir === "rtl")("ant-table-fixed-header", ctx.nzData.length && ctx.scrollY)("ant-table-fixed-column", ctx.scrollX)("ant-table-has-fix-left", ctx.hasFixLeft)("ant-table-has-fix-right", ctx.hasFixRight)("ant-table-bordered", ctx.nzBordered)("nz-table-out-bordered", ctx.nzOuterBordered && !ctx.nzBordered)("ant-table-middle", ctx.nzSize === "middle")("ant-table-small", ctx.nzSize === "small");
      ɵɵadvance(2);
      ɵɵproperty("ngIf", ctx.nzTitle);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.scrollY || ctx.scrollX)("ngIfElse", defaultTemplate_r6);
      ɵɵadvance(3);
      ɵɵproperty("ngIf", ctx.nzFooter);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.nzPaginationPosition === "both" || ctx.nzPaginationPosition === "bottom");
    }
  },
  dependencies: [NzSpinComponent, NgIf, NgTemplateOutlet, NzTableTitleFooterComponent, NzTableInnerScrollComponent, NzTableInnerDefaultComponent, NzPaginationModule, NzPaginationComponent],
  encapsulation: 2,
  changeDetection: 0
});
var NzTableComponent = _NzTableComponent;
__decorate([InputBoolean()], NzTableComponent.prototype, "nzFrontPagination", void 0);
__decorate([InputBoolean()], NzTableComponent.prototype, "nzTemplateMode", void 0);
__decorate([InputBoolean()], NzTableComponent.prototype, "nzShowPagination", void 0);
__decorate([InputBoolean()], NzTableComponent.prototype, "nzLoading", void 0);
__decorate([InputBoolean()], NzTableComponent.prototype, "nzOuterBordered", void 0);
__decorate([WithConfig()], NzTableComponent.prototype, "nzLoadingIndicator", void 0);
__decorate([WithConfig(), InputBoolean()], NzTableComponent.prototype, "nzBordered", void 0);
__decorate([WithConfig()], NzTableComponent.prototype, "nzSize", void 0);
__decorate([WithConfig(), InputBoolean()], NzTableComponent.prototype, "nzShowSizeChanger", void 0);
__decorate([WithConfig(), InputBoolean()], NzTableComponent.prototype, "nzHideOnSinglePage", void 0);
__decorate([WithConfig(), InputBoolean()], NzTableComponent.prototype, "nzShowQuickJumper", void 0);
__decorate([WithConfig(), InputBoolean()], NzTableComponent.prototype, "nzSimple", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTableComponent, [{
    type: Component,
    args: [{
      selector: "nz-table",
      exportAs: "nzTable",
      providers: [NzTableStyleService, NzTableDataService],
      preserveWhitespaces: false,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      template: `
    <nz-spin [nzDelay]="nzLoadingDelay" [nzSpinning]="nzLoading" [nzIndicator]="nzLoadingIndicator">
      <ng-container *ngIf="nzPaginationPosition === 'both' || nzPaginationPosition === 'top'">
        <ng-template [ngTemplateOutlet]="paginationTemplate"></ng-template>
      </ng-container>
      <div
        #tableMainElement
        class="ant-table"
        [class.ant-table-rtl]="dir === 'rtl'"
        [class.ant-table-fixed-header]="nzData.length && scrollY"
        [class.ant-table-fixed-column]="scrollX"
        [class.ant-table-has-fix-left]="hasFixLeft"
        [class.ant-table-has-fix-right]="hasFixRight"
        [class.ant-table-bordered]="nzBordered"
        [class.nz-table-out-bordered]="nzOuterBordered && !nzBordered"
        [class.ant-table-middle]="nzSize === 'middle'"
        [class.ant-table-small]="nzSize === 'small'"
      >
        <nz-table-title-footer [title]="nzTitle" *ngIf="nzTitle"></nz-table-title-footer>
        <nz-table-inner-scroll
          *ngIf="scrollY || scrollX; else defaultTemplate"
          [data]="data"
          [scrollX]="scrollX"
          [scrollY]="scrollY"
          [contentTemplate]="contentTemplate"
          [listOfColWidth]="listOfAutoColWidth"
          [theadTemplate]="theadTemplate"
          [verticalScrollBarWidth]="verticalScrollBarWidth"
          [virtualTemplate]="nzVirtualScrollDirective ? nzVirtualScrollDirective.templateRef : null"
          [virtualItemSize]="nzVirtualItemSize"
          [virtualMaxBufferPx]="nzVirtualMaxBufferPx"
          [virtualMinBufferPx]="nzVirtualMinBufferPx"
          [tableMainElement]="tableMainElement"
          [virtualForTrackBy]="nzVirtualForTrackBy"
        ></nz-table-inner-scroll>
        <ng-template #defaultTemplate>
          <nz-table-inner-default
            [tableLayout]="nzTableLayout"
            [listOfColWidth]="listOfManualColWidth"
            [theadTemplate]="theadTemplate"
            [contentTemplate]="contentTemplate"
          ></nz-table-inner-default>
        </ng-template>
        <nz-table-title-footer [footer]="nzFooter" *ngIf="nzFooter"></nz-table-title-footer>
      </div>
      <ng-container *ngIf="nzPaginationPosition === 'both' || nzPaginationPosition === 'bottom'">
        <ng-template [ngTemplateOutlet]="paginationTemplate"></ng-template>
      </ng-container>
    </nz-spin>
    <ng-template #paginationTemplate>
      <nz-pagination
        *ngIf="nzShowPagination && data.length"
        [hidden]="!showPagination"
        class="ant-table-pagination ant-table-pagination-right"
        [nzShowSizeChanger]="nzShowSizeChanger"
        [nzPageSizeOptions]="nzPageSizeOptions"
        [nzItemRender]="nzItemRender!"
        [nzShowQuickJumper]="nzShowQuickJumper"
        [nzHideOnSinglePage]="nzHideOnSinglePage"
        [nzShowTotal]="nzShowTotal"
        [nzSize]="nzPaginationType === 'small' ? 'small' : nzSize === 'default' ? 'default' : 'small'"
        [nzPageSize]="nzPageSize"
        [nzTotal]="nzTotal"
        [nzSimple]="nzSimple"
        [nzPageIndex]="nzPageIndex"
        (nzPageSizeChange)="onPageSizeChange($event)"
        (nzPageIndexChange)="onPageIndexChange($event)"
      ></nz-pagination>
    </ng-template>
    <ng-template #contentTemplate>
      <ng-content></ng-content>
    </ng-template>
  `,
      host: {
        class: "ant-table-wrapper",
        "[class.ant-table-wrapper-rtl]": 'dir === "rtl"',
        "[class.ant-table-custom-column]": `nzCustomColumn.length`
      },
      imports: [NzSpinComponent, NgIf, NgTemplateOutlet, NzTableTitleFooterComponent, NzTableInnerScrollComponent, NzTableInnerDefaultComponent, NzPaginationModule],
      standalone: true
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: NzResizeObserver
  }, {
    type: NzConfigService
  }, {
    type: ChangeDetectorRef
  }, {
    type: NzTableStyleService
  }, {
    type: NzTableDataService
  }, {
    type: Directionality,
    decorators: [{
      type: Optional
    }]
  }], {
    nzTableLayout: [{
      type: Input
    }],
    nzShowTotal: [{
      type: Input
    }],
    nzItemRender: [{
      type: Input
    }],
    nzTitle: [{
      type: Input
    }],
    nzFooter: [{
      type: Input
    }],
    nzNoResult: [{
      type: Input
    }],
    nzPageSizeOptions: [{
      type: Input
    }],
    nzVirtualItemSize: [{
      type: Input
    }],
    nzVirtualMaxBufferPx: [{
      type: Input
    }],
    nzVirtualMinBufferPx: [{
      type: Input
    }],
    nzVirtualForTrackBy: [{
      type: Input
    }],
    nzLoadingDelay: [{
      type: Input
    }],
    nzPageIndex: [{
      type: Input
    }],
    nzPageSize: [{
      type: Input
    }],
    nzTotal: [{
      type: Input
    }],
    nzWidthConfig: [{
      type: Input
    }],
    nzData: [{
      type: Input
    }],
    nzCustomColumn: [{
      type: Input
    }],
    nzPaginationPosition: [{
      type: Input
    }],
    nzScroll: [{
      type: Input
    }],
    nzPaginationType: [{
      type: Input
    }],
    nzFrontPagination: [{
      type: Input
    }],
    nzTemplateMode: [{
      type: Input
    }],
    nzShowPagination: [{
      type: Input
    }],
    nzLoading: [{
      type: Input
    }],
    nzOuterBordered: [{
      type: Input
    }],
    nzLoadingIndicator: [{
      type: Input
    }],
    nzBordered: [{
      type: Input
    }],
    nzSize: [{
      type: Input
    }],
    nzShowSizeChanger: [{
      type: Input
    }],
    nzHideOnSinglePage: [{
      type: Input
    }],
    nzShowQuickJumper: [{
      type: Input
    }],
    nzSimple: [{
      type: Input
    }],
    nzPageSizeChange: [{
      type: Output
    }],
    nzPageIndexChange: [{
      type: Output
    }],
    nzQueryParams: [{
      type: Output
    }],
    nzCurrentPageDataChange: [{
      type: Output
    }],
    nzCustomColumnChange: [{
      type: Output
    }],
    nzVirtualScrollDirective: [{
      type: ContentChild,
      args: [NzTableVirtualScrollDirective, {
        static: false
      }]
    }],
    nzTableInnerScrollComponent: [{
      type: ViewChild,
      args: [NzTableInnerScrollComponent]
    }]
  });
})();
var _NzTrDirective = class _NzTrDirective {
  constructor(nzTableStyleService) {
    this.nzTableStyleService = nzTableStyleService;
    this.destroy$ = new Subject();
    this.listOfFixedColumns$ = new ReplaySubject(1);
    this.listOfColumns$ = new ReplaySubject(1);
    this.listOfFixedColumnsChanges$ = this.listOfFixedColumns$.pipe(switchMap((list) => merge(...[this.listOfFixedColumns$, ...list.map((c) => c.changes$)]).pipe(mergeMap(() => this.listOfFixedColumns$))), takeUntil(this.destroy$));
    this.listOfFixedLeftColumnChanges$ = this.listOfFixedColumnsChanges$.pipe(map((list) => list.filter((item) => item.nzLeft !== false)));
    this.listOfFixedRightColumnChanges$ = this.listOfFixedColumnsChanges$.pipe(map((list) => list.filter((item) => item.nzRight !== false)));
    this.listOfColumnsChanges$ = this.listOfColumns$.pipe(switchMap((list) => merge(...[this.listOfColumns$, ...list.map((c) => c.changes$)]).pipe(mergeMap(() => this.listOfColumns$))), takeUntil(this.destroy$));
    this.isInsideTable = false;
    this.isInsideTable = !!nzTableStyleService;
  }
  ngAfterContentInit() {
    if (this.nzTableStyleService) {
      this.listOfCellFixedDirective.changes.pipe(startWith(this.listOfCellFixedDirective), takeUntil(this.destroy$)).subscribe(this.listOfFixedColumns$);
      this.listOfNzThDirective.changes.pipe(startWith(this.listOfNzThDirective), takeUntil(this.destroy$)).subscribe(this.listOfColumns$);
      this.listOfFixedLeftColumnChanges$.subscribe((listOfFixedLeft) => {
        listOfFixedLeft.forEach((cell) => cell.setIsLastLeft(cell === listOfFixedLeft[listOfFixedLeft.length - 1]));
      });
      this.listOfFixedRightColumnChanges$.subscribe((listOfFixedRight) => {
        listOfFixedRight.forEach((cell) => cell.setIsFirstRight(cell === listOfFixedRight[0]));
      });
      combineLatest([this.nzTableStyleService.listOfListOfThWidth$, this.listOfFixedLeftColumnChanges$]).pipe(takeUntil(this.destroy$)).subscribe(([listOfAutoWidth, listOfLeftCell]) => {
        listOfLeftCell.forEach((cell, index) => {
          if (cell.isAutoLeft) {
            const currentArray = listOfLeftCell.slice(0, index);
            const count = currentArray.reduce((pre, cur) => pre + (cur.colspan || cur.colSpan || 1), 0);
            const width = listOfAutoWidth.slice(0, count).reduce((pre, cur) => pre + cur, 0);
            cell.setAutoLeftWidth(`${width}px`);
          }
        });
      });
      combineLatest([this.nzTableStyleService.listOfListOfThWidth$, this.listOfFixedRightColumnChanges$]).pipe(takeUntil(this.destroy$)).subscribe(([listOfAutoWidth, listOfRightCell]) => {
        listOfRightCell.forEach((_, index) => {
          const cell = listOfRightCell[listOfRightCell.length - index - 1];
          if (cell.isAutoRight) {
            const currentArray = listOfRightCell.slice(listOfRightCell.length - index, listOfRightCell.length);
            const count = currentArray.reduce((pre, cur) => pre + (cur.colspan || cur.colSpan || 1), 0);
            const width = listOfAutoWidth.slice(listOfAutoWidth.length - count, listOfAutoWidth.length).reduce((pre, cur) => pre + cur, 0);
            cell.setAutoRightWidth(`${width}px`);
          }
        });
      });
    }
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
};
_NzTrDirective.ɵfac = function NzTrDirective_Factory(t) {
  return new (t || _NzTrDirective)(ɵɵdirectiveInject(NzTableStyleService, 8));
};
_NzTrDirective.ɵdir = ɵɵdefineDirective({
  type: _NzTrDirective,
  selectors: [["tr", 3, "mat-row", "", 3, "mat-header-row", "", 3, "nz-table-measure-row", "", 3, "nzExpand", "", 3, "nz-table-fixed-row", ""]],
  contentQueries: function NzTrDirective_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, NzThMeasureDirective, 4);
      ɵɵcontentQuery(dirIndex, NzCellFixedDirective, 4);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.listOfNzThDirective = _t);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.listOfCellFixedDirective = _t);
    }
  },
  hostVars: 2,
  hostBindings: function NzTrDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("ant-table-row", ctx.isInsideTable);
    }
  },
  standalone: true
});
var NzTrDirective = _NzTrDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTrDirective, [{
    type: Directive,
    args: [{
      selector: "tr:not([mat-row]):not([mat-header-row]):not([nz-table-measure-row]):not([nzExpand]):not([nz-table-fixed-row])",
      host: {
        "[class.ant-table-row]": "isInsideTable"
      },
      standalone: true
    }]
  }], () => [{
    type: NzTableStyleService,
    decorators: [{
      type: Optional
    }]
  }], {
    listOfNzThDirective: [{
      type: ContentChildren,
      args: [NzThMeasureDirective]
    }],
    listOfCellFixedDirective: [{
      type: ContentChildren,
      args: [NzCellFixedDirective]
    }]
  });
})();
var _NzTheadComponent = class _NzTheadComponent {
  constructor(elementRef, renderer, nzTableStyleService, nzTableDataService) {
    this.elementRef = elementRef;
    this.renderer = renderer;
    this.nzTableStyleService = nzTableStyleService;
    this.nzTableDataService = nzTableDataService;
    this.destroy$ = new Subject();
    this.isInsideTable = false;
    this.nzSortOrderChange = new EventEmitter();
    this.isInsideTable = !!this.nzTableStyleService;
  }
  ngOnInit() {
    if (this.nzTableStyleService) {
      this.nzTableStyleService.setTheadTemplate(this.templateRef);
    }
  }
  ngAfterContentInit() {
    if (this.nzTableStyleService) {
      const firstTableRow$ = this.listOfNzTrDirective.changes.pipe(startWith(this.listOfNzTrDirective), map((item) => item && item.first));
      const listOfColumnsChanges$ = firstTableRow$.pipe(switchMap((firstTableRow) => firstTableRow ? firstTableRow.listOfColumnsChanges$ : EMPTY), takeUntil(this.destroy$));
      listOfColumnsChanges$.subscribe((data) => this.nzTableStyleService.setListOfTh(data));
      this.nzTableStyleService.enableAutoMeasure$.pipe(switchMap((enable) => enable ? listOfColumnsChanges$ : of([]))).pipe(takeUntil(this.destroy$)).subscribe((data) => this.nzTableStyleService.setListOfMeasureColumn(data));
      const listOfFixedLeftColumnChanges$ = firstTableRow$.pipe(switchMap((firstTr) => firstTr ? firstTr.listOfFixedLeftColumnChanges$ : EMPTY), takeUntil(this.destroy$));
      const listOfFixedRightColumnChanges$ = firstTableRow$.pipe(switchMap((firstTr) => firstTr ? firstTr.listOfFixedRightColumnChanges$ : EMPTY), takeUntil(this.destroy$));
      listOfFixedLeftColumnChanges$.subscribe((listOfFixedLeftColumn) => {
        this.nzTableStyleService.setHasFixLeft(listOfFixedLeftColumn.length !== 0);
      });
      listOfFixedRightColumnChanges$.subscribe((listOfFixedRightColumn) => {
        this.nzTableStyleService.setHasFixRight(listOfFixedRightColumn.length !== 0);
      });
    }
    if (this.nzTableDataService) {
      const listOfColumn$ = this.listOfNzThAddOnComponent.changes.pipe(startWith(this.listOfNzThAddOnComponent));
      const manualSort$ = listOfColumn$.pipe(switchMap(() => merge(...this.listOfNzThAddOnComponent.map((th) => th.manualClickOrder$))), takeUntil(this.destroy$));
      manualSort$.subscribe((data) => {
        const emitValue = {
          key: data.nzColumnKey,
          value: data.sortOrder
        };
        this.nzSortOrderChange.emit(emitValue);
        if (data.nzSortFn && data.nzSortPriority === false) {
          this.listOfNzThAddOnComponent.filter((th) => th !== data).forEach((th) => th.clearSortOrder());
        }
      });
      const listOfCalcOperator$ = listOfColumn$.pipe(
        switchMap((list) => merge(...[listOfColumn$, ...list.map((c) => c.calcOperatorChange$)]).pipe(mergeMap(() => listOfColumn$))),
        map((list) => list.filter((item) => !!item.nzSortFn || !!item.nzFilterFn).map((item) => {
          const {
            nzSortFn,
            sortOrder,
            nzFilterFn,
            nzFilterValue,
            nzSortPriority,
            nzColumnKey
          } = item;
          return {
            key: nzColumnKey,
            sortFn: nzSortFn,
            sortPriority: nzSortPriority,
            sortOrder,
            filterFn: nzFilterFn,
            filterValue: nzFilterValue
          };
        })),
        // TODO: after checked error here
        delay(0),
        takeUntil(this.destroy$)
      );
      listOfCalcOperator$.subscribe((list) => {
        this.nzTableDataService.listOfCalcOperator$.next(list);
      });
    }
  }
  ngAfterViewInit() {
    if (this.nzTableStyleService) {
      this.renderer.removeChild(this.renderer.parentNode(this.elementRef.nativeElement), this.elementRef.nativeElement);
    }
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
};
_NzTheadComponent.ɵfac = function NzTheadComponent_Factory(t) {
  return new (t || _NzTheadComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(NzTableStyleService, 8), ɵɵdirectiveInject(NzTableDataService, 8));
};
_NzTheadComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzTheadComponent,
  selectors: [["thead", 9, "ant-table-thead"]],
  contentQueries: function NzTheadComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, NzTrDirective, 5);
      ɵɵcontentQuery(dirIndex, NzThAddOnComponent, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.listOfNzTrDirective = _t);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.listOfNzThAddOnComponent = _t);
    }
  },
  viewQuery: function NzTheadComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c132, 7);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.templateRef = _t.first);
    }
  },
  outputs: {
    nzSortOrderChange: "nzSortOrderChange"
  },
  standalone: true,
  features: [ɵɵStandaloneFeature],
  ngContentSelectors: _c04,
  decls: 3,
  vars: 1,
  consts: [["contentTemplate", ""], [4, "ngIf"], [3, "ngTemplateOutlet"]],
  template: function NzTheadComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵtemplate(0, NzTheadComponent_ng_template_0_Template, 1, 0, "ng-template", null, 0, ɵɵtemplateRefExtractor)(2, NzTheadComponent_ng_container_2_Template, 2, 1, "ng-container", 1);
    }
    if (rf & 2) {
      ɵɵadvance(2);
      ɵɵproperty("ngIf", !ctx.isInsideTable);
    }
  },
  dependencies: [NgIf, NgTemplateOutlet],
  encapsulation: 2,
  changeDetection: 0
});
var NzTheadComponent = _NzTheadComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTheadComponent, [{
    type: Component,
    args: [{
      selector: "thead:not(.ant-table-thead)",
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      template: `
    <ng-template #contentTemplate>
      <ng-content></ng-content>
    </ng-template>
    <ng-container *ngIf="!isInsideTable">
      <ng-template [ngTemplateOutlet]="contentTemplate"></ng-template>
    </ng-container>
  `,
      imports: [NgIf, NgTemplateOutlet],
      standalone: true
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: NzTableStyleService,
    decorators: [{
      type: Optional
    }]
  }, {
    type: NzTableDataService,
    decorators: [{
      type: Optional
    }]
  }], {
    templateRef: [{
      type: ViewChild,
      args: ["contentTemplate", {
        static: true
      }]
    }],
    listOfNzTrDirective: [{
      type: ContentChildren,
      args: [NzTrDirective, {
        descendants: true
      }]
    }],
    listOfNzThAddOnComponent: [{
      type: ContentChildren,
      args: [NzThAddOnComponent, {
        descendants: true
      }]
    }],
    nzSortOrderChange: [{
      type: Output
    }]
  });
})();
var _NzTrExpandDirective = class _NzTrExpandDirective {
  constructor() {
    this.nzExpand = true;
  }
};
_NzTrExpandDirective.ɵfac = function NzTrExpandDirective_Factory(t) {
  return new (t || _NzTrExpandDirective)();
};
_NzTrExpandDirective.ɵdir = ɵɵdefineDirective({
  type: _NzTrExpandDirective,
  selectors: [["tr", "nzExpand", ""]],
  hostAttrs: [1, "ant-table-expanded-row"],
  hostVars: 1,
  hostBindings: function NzTrExpandDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵhostProperty("hidden", !ctx.nzExpand);
    }
  },
  inputs: {
    nzExpand: "nzExpand"
  },
  standalone: true
});
var NzTrExpandDirective = _NzTrExpandDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTrExpandDirective, [{
    type: Directive,
    args: [{
      selector: "tr[nzExpand]",
      host: {
        class: "ant-table-expanded-row",
        "[hidden]": `!nzExpand`
      },
      standalone: true
    }]
  }], () => [], {
    nzExpand: [{
      type: Input
    }]
  });
})();
var _NzTableModule = class _NzTableModule {
};
_NzTableModule.ɵfac = function NzTableModule_Factory(t) {
  return new (t || _NzTableModule)();
};
_NzTableModule.ɵmod = ɵɵdefineNgModule({
  type: _NzTableModule,
  imports: [NzTableComponent, NzThAddOnComponent, NzTableCellDirective, NzThMeasureDirective, NzTdAddOnComponent, NzTheadComponent, NzTbodyComponent, NzTrDirective, NzTrExpandDirective, NzTableVirtualScrollDirective, NzCellFixedDirective, NzCustomColumnDirective, NzTableContentComponent, NzTableTitleFooterComponent, NzTableInnerDefaultComponent, NzTableInnerScrollComponent, NzTrMeasureComponent, NzRowIndentDirective, NzRowExpandButtonDirective, NzCellBreakWordDirective, NzCellAlignDirective, NzTableSortersComponent, NzTableFilterComponent, NzTableSelectionComponent, NzCellEllipsisDirective, NzFilterTriggerComponent, NzTableFixedRowComponent, NzThSelectionComponent],
  exports: [NzTableComponent, NzThAddOnComponent, NzTableCellDirective, NzThMeasureDirective, NzTdAddOnComponent, NzTheadComponent, NzTbodyComponent, NzTrDirective, NzTableVirtualScrollDirective, NzCellFixedDirective, NzCustomColumnDirective, NzFilterTriggerComponent, NzTrExpandDirective, NzCellBreakWordDirective, NzCellAlignDirective, NzCellEllipsisDirective, NzTableFixedRowComponent, NzThSelectionComponent]
});
_NzTableModule.ɵinj = ɵɵdefineInjector({
  imports: [NzTableComponent, NzThAddOnComponent, NzTdAddOnComponent, NzTbodyComponent, NzTableTitleFooterComponent, NzTableInnerScrollComponent, NzTableSortersComponent, NzTableFilterComponent, NzTableSelectionComponent, NzFilterTriggerComponent, NzThSelectionComponent]
});
var NzTableModule = _NzTableModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTableModule, [{
    type: NgModule,
    args: [{
      imports: [NzTableComponent, NzThAddOnComponent, NzTableCellDirective, NzThMeasureDirective, NzTdAddOnComponent, NzTheadComponent, NzTbodyComponent, NzTrDirective, NzTrExpandDirective, NzTableVirtualScrollDirective, NzCellFixedDirective, NzCustomColumnDirective, NzTableContentComponent, NzTableTitleFooterComponent, NzTableInnerDefaultComponent, NzTableInnerScrollComponent, NzTrMeasureComponent, NzRowIndentDirective, NzRowExpandButtonDirective, NzCellBreakWordDirective, NzCellAlignDirective, NzTableSortersComponent, NzTableFilterComponent, NzTableSelectionComponent, NzCellEllipsisDirective, NzFilterTriggerComponent, NzTableFixedRowComponent, NzThSelectionComponent],
      exports: [NzTableComponent, NzThAddOnComponent, NzTableCellDirective, NzThMeasureDirective, NzTdAddOnComponent, NzTheadComponent, NzTbodyComponent, NzTrDirective, NzTableVirtualScrollDirective, NzCellFixedDirective, NzCustomColumnDirective, NzFilterTriggerComponent, NzTrExpandDirective, NzCellBreakWordDirective, NzCellAlignDirective, NzCellEllipsisDirective, NzTableFixedRowComponent, NzThSelectionComponent]
    }]
  }], null, null);
})();
export {
  NzCellAlignDirective,
  NzCellBreakWordDirective,
  NzCellEllipsisDirective,
  NzCellFixedDirective,
  NzCustomColumnDirective,
  NzFilterTriggerComponent,
  NzRowExpandButtonDirective,
  NzRowIndentDirective,
  NzTableCellDirective,
  NzTableComponent,
  NzTableContentComponent,
  NzTableDataService,
  NzTableFilterComponent,
  NzTableFixedRowComponent,
  NzTableInnerDefaultComponent,
  NzTableInnerScrollComponent,
  NzTableModule,
  NzTableSelectionComponent,
  NzTableSortersComponent,
  NzTableStyleService,
  NzTableTitleFooterComponent,
  NzTableVirtualScrollDirective,
  NzTbodyComponent,
  NzTdAddOnComponent,
  NzThAddOnComponent,
  NzThMeasureDirective,
  NzThSelectionComponent,
  NzTheadComponent,
  NzTrDirective,
  NzTrExpandDirective,
  NzTrMeasureComponent
};
//# sourceMappingURL=ng-zorro-antd_table.js.map
