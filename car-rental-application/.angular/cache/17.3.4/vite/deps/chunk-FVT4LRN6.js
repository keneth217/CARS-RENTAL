import {
  NavigationEnd,
  Router,
  RouterLink
} from "./chunk-ZAE72LJJ.js";
import {
  NzNoAnimationDirective,
  POSITION_MAP,
  getPlacementName
} from "./chunk-KA3MSJAB.js";
import {
  CdkConnectedOverlay,
  CdkOverlayOrigin,
  OverlayModule,
  collapseMotion,
  slideMotion,
  zoomBigMotion
} from "./chunk-Y2LXB4LJ.js";
import {
  NzOutletModule,
  NzStringTemplateOutletDirective
} from "./chunk-3QNY2SH4.js";
import {
  Directionality
} from "./chunk-7DIIEDL6.js";
import {
  NzIconDirective,
  NzIconModule
} from "./chunk-X43JKLZC.js";
import {
  InputBoolean
} from "./chunk-PGMGKWAT.js";
import {
  Platform
} from "./chunk-2FVUDUB4.js";
import {
  NgClass,
  NgTemplateOutlet
} from "./chunk-KKPSRQXY.js";
import {
  BehaviorSubject,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  Directive,
  ElementRef,
  EventEmitter,
  Host,
  Inject,
  Injectable,
  InjectionToken,
  Input,
  NgModule,
  Optional,
  Output,
  Renderer2,
  SkipSelf,
  Subject,
  ViewChild,
  ViewEncapsulation$1,
  __decorate,
  auditTime,
  combineLatest,
  distinctUntilChanged,
  filter,
  forwardRef,
  inject,
  map,
  mapTo,
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
  ɵɵinject,
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
  ɵɵstyleProp,
  ɵɵsyntheticHostProperty,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵviewQuery
} from "./chunk-QIBLZIJK.js";

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-menu.mjs
var _c0 = ["nz-menu-item", ""];
var _c1 = ["*"];
var _c2 = ["nz-submenu-inline-child", ""];
function NzSubmenuInlineChildComponent_ng_template_0_Template(rf, ctx) {
}
var _c3 = ["nz-submenu-none-inline-child", ""];
function NzSubmenuNoneInlineChildComponent_ng_template_1_Template(rf, ctx) {
}
var _c4 = ["nz-submenu-title", ""];
function NzSubMenuTitleComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 0);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("nzType", ctx_r0.nzIcon);
  }
}
function NzSubMenuTitleComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "span", 3);
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r0.nzTitle);
  }
}
function NzSubMenuTitleComponent_Conditional_3_Case_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 4);
  }
}
function NzSubMenuTitleComponent_Conditional_3_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 5);
  }
}
function NzSubMenuTitleComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 2);
    ɵɵtemplate(1, NzSubMenuTitleComponent_Conditional_3_Case_1_Template, 1, 0)(2, NzSubMenuTitleComponent_Conditional_3_Case_2_Template, 1, 0);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵconditional(1, (tmp_1_0 = ctx_r0.dir) === "rtl" ? 1 : 2);
  }
}
function NzSubMenuTitleComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 6);
  }
}
var _c5 = ["nz-submenu", ""];
var _c6 = [[["", "title", ""]], "*"];
var _c7 = ["[title]", "*"];
function NzSubMenuComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵprojection(0);
  }
}
function NzSubMenuComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 3);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    const subMenuTemplate_r3 = ɵɵreference(6);
    ɵɵproperty("mode", ctx_r1.mode)("nzOpen", ctx_r1.nzOpen)("@.disabled", !!(ctx_r1.noAnimation == null ? null : ctx_r1.noAnimation.nzNoAnimation))("nzNoAnimation", ctx_r1.noAnimation == null ? null : ctx_r1.noAnimation.nzNoAnimation)("menuClass", ctx_r1.nzMenuClassName)("templateOutlet", subMenuTemplate_r3);
  }
}
function NzSubMenuComponent_Conditional_4_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 5);
    ɵɵlistener("subMenuMouseState", function NzSubMenuComponent_Conditional_4_ng_template_0_Template_div_subMenuMouseState_0_listener($event) {
      ɵɵrestoreView(_r5);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.setMouseEnterState($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    const subMenuTemplate_r3 = ɵɵreference(6);
    ɵɵproperty("theme", ctx_r1.theme)("mode", ctx_r1.mode)("nzOpen", ctx_r1.nzOpen)("position", ctx_r1.position)("nzDisabled", ctx_r1.nzDisabled)("isMenuInsideDropDown", ctx_r1.isMenuInsideDropDown)("templateOutlet", subMenuTemplate_r3)("menuClass", ctx_r1.nzMenuClassName)("@.disabled", !!(ctx_r1.noAnimation == null ? null : ctx_r1.noAnimation.nzNoAnimation))("nzNoAnimation", ctx_r1.noAnimation == null ? null : ctx_r1.noAnimation.nzNoAnimation);
  }
}
function NzSubMenuComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵtemplate(0, NzSubMenuComponent_Conditional_4_ng_template_0_Template, 1, 10, "ng-template", 4);
    ɵɵlistener("positionChange", function NzSubMenuComponent_Conditional_4_Template_ng_template_positionChange_0_listener($event) {
      ɵɵrestoreView(_r4);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onPositionChange($event));
    });
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    const origin_r6 = ɵɵreference(1);
    ɵɵproperty("cdkConnectedOverlayPositions", ctx_r1.overlayPositions)("cdkConnectedOverlayOrigin", origin_r6)("cdkConnectedOverlayWidth", ctx_r1.triggerWidth)("cdkConnectedOverlayOpen", ctx_r1.nzOpen)("cdkConnectedOverlayTransformOriginOn", ".ant-menu-submenu");
  }
}
function NzSubMenuComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵprojection(0, 1);
  }
}
var _c8 = ["titleElement"];
var _c9 = ["nz-menu-group", ""];
var _c10 = ["*", [["", "title", ""]]];
var _c11 = ["*", "[title]"];
function NzMenuGroupComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r0.nzTitle);
  }
}
function NzMenuGroupComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵprojection(0, 1);
  }
}
var NzIsMenuInsideDropDownToken = new InjectionToken("NzIsInDropDownMenuToken");
var NzMenuServiceLocalToken = new InjectionToken("NzMenuServiceLocalToken");
var _MenuService = class _MenuService {
  constructor() {
    this.descendantMenuItemClick$ = new Subject();
    this.childMenuItemClick$ = new Subject();
    this.theme$ = new BehaviorSubject("light");
    this.mode$ = new BehaviorSubject("vertical");
    this.inlineIndent$ = new BehaviorSubject(24);
    this.isChildSubMenuOpen$ = new BehaviorSubject(false);
  }
  onDescendantMenuItemClick(menu) {
    this.descendantMenuItemClick$.next(menu);
  }
  onChildMenuItemClick(menu) {
    this.childMenuItemClick$.next(menu);
  }
  setMode(mode) {
    this.mode$.next(mode);
  }
  setTheme(theme) {
    this.theme$.next(theme);
  }
  setInlineIndent(indent) {
    this.inlineIndent$.next(indent);
  }
};
_MenuService.ɵfac = function MenuService_Factory(t) {
  return new (t || _MenuService)();
};
_MenuService.ɵprov = ɵɵdefineInjectable({
  token: _MenuService,
  factory: _MenuService.ɵfac
});
var MenuService = _MenuService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MenuService, [{
    type: Injectable
  }], null, null);
})();
var _NzSubmenuService = class _NzSubmenuService {
  /**
   * menu item inside submenu clicked
   *
   * @param menu
   */
  onChildMenuItemClick(menu) {
    this.childMenuItemClick$.next(menu);
  }
  setOpenStateWithoutDebounce(value) {
    this.isCurrentSubMenuOpen$.next(value);
  }
  setMouseEnterTitleOrOverlayState(value) {
    this.isMouseEnterTitleOrOverlay$.next(value);
  }
  constructor(nzHostSubmenuService, nzMenuService, isMenuInsideDropDown) {
    this.nzHostSubmenuService = nzHostSubmenuService;
    this.nzMenuService = nzMenuService;
    this.isMenuInsideDropDown = isMenuInsideDropDown;
    this.mode$ = this.nzMenuService.mode$.pipe(map((mode) => {
      if (mode === "inline") {
        return "inline";
      } else if (mode === "vertical" || this.nzHostSubmenuService) {
        return "vertical";
      } else {
        return "horizontal";
      }
    }));
    this.level = 1;
    this.isCurrentSubMenuOpen$ = new BehaviorSubject(false);
    this.isChildSubMenuOpen$ = new BehaviorSubject(false);
    this.isMouseEnterTitleOrOverlay$ = new Subject();
    this.childMenuItemClick$ = new Subject();
    this.destroy$ = new Subject();
    if (this.nzHostSubmenuService) {
      this.level = this.nzHostSubmenuService.level + 1;
    }
    const isClosedByMenuItemClick = this.childMenuItemClick$.pipe(mergeMap(() => this.mode$), filter((mode) => mode !== "inline" || this.isMenuInsideDropDown), mapTo(false));
    const isCurrentSubmenuOpen$ = merge(this.isMouseEnterTitleOrOverlay$, isClosedByMenuItemClick);
    const isSubMenuOpenWithDebounce$ = combineLatest([this.isChildSubMenuOpen$, isCurrentSubmenuOpen$]).pipe(map(([isChildSubMenuOpen, isCurrentSubmenuOpen]) => isChildSubMenuOpen || isCurrentSubmenuOpen), auditTime(150), distinctUntilChanged(), takeUntil(this.destroy$));
    isSubMenuOpenWithDebounce$.pipe(distinctUntilChanged()).subscribe((data) => {
      this.setOpenStateWithoutDebounce(data);
      if (this.nzHostSubmenuService) {
        this.nzHostSubmenuService.isChildSubMenuOpen$.next(data);
      } else {
        this.nzMenuService.isChildSubMenuOpen$.next(data);
      }
    });
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
};
_NzSubmenuService.ɵfac = function NzSubmenuService_Factory(t) {
  return new (t || _NzSubmenuService)(ɵɵinject(_NzSubmenuService, 12), ɵɵinject(MenuService), ɵɵinject(NzIsMenuInsideDropDownToken));
};
_NzSubmenuService.ɵprov = ɵɵdefineInjectable({
  token: _NzSubmenuService,
  factory: _NzSubmenuService.ɵfac
});
var NzSubmenuService = _NzSubmenuService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzSubmenuService, [{
    type: Injectable
  }], () => [{
    type: NzSubmenuService,
    decorators: [{
      type: SkipSelf
    }, {
      type: Optional
    }]
  }, {
    type: MenuService
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [NzIsMenuInsideDropDownToken]
    }]
  }], null);
})();
var _NzMenuItemComponent = class _NzMenuItemComponent {
  /** clear all item selected status except this */
  clickMenuItem(e) {
    if (this.nzDisabled) {
      e.preventDefault();
      e.stopPropagation();
    } else {
      this.nzMenuService.onDescendantMenuItemClick(this);
      if (this.nzSubmenuService) {
        this.nzSubmenuService.onChildMenuItemClick(this);
      } else {
        this.nzMenuService.onChildMenuItemClick(this);
      }
    }
  }
  setSelectedState(value) {
    this.nzSelected = value;
    this.selected$.next(value);
  }
  updateRouterActive() {
    if (!this.listOfRouterLink || !this.router || !this.router.navigated || !this.nzMatchRouter) {
      return;
    }
    Promise.resolve().then(() => {
      const hasActiveLinks = this.hasActiveLinks();
      if (this.nzSelected !== hasActiveLinks) {
        this.nzSelected = hasActiveLinks;
        this.setSelectedState(this.nzSelected);
        this.cdr.markForCheck();
      }
    });
  }
  hasActiveLinks() {
    const isActiveCheckFn = this.isLinkActive(this.router);
    return this.routerLink && isActiveCheckFn(this.routerLink) || this.listOfRouterLink.some(isActiveCheckFn);
  }
  isLinkActive(router) {
    return (link) => router.isActive(link.urlTree || "", {
      paths: this.nzMatchRouterExact ? "exact" : "subset",
      queryParams: this.nzMatchRouterExact ? "exact" : "subset",
      fragment: "ignored",
      matrixParams: "ignored"
    });
  }
  constructor(nzMenuService, cdr, nzSubmenuService, isMenuInsideDropDown, directionality, routerLink, router) {
    this.nzMenuService = nzMenuService;
    this.cdr = cdr;
    this.nzSubmenuService = nzSubmenuService;
    this.isMenuInsideDropDown = isMenuInsideDropDown;
    this.directionality = directionality;
    this.routerLink = routerLink;
    this.router = router;
    this.destroy$ = new Subject();
    this.level = this.nzSubmenuService ? this.nzSubmenuService.level + 1 : 1;
    this.selected$ = new Subject();
    this.inlinePaddingLeft = null;
    this.dir = "ltr";
    this.nzDisabled = false;
    this.nzSelected = false;
    this.nzDanger = false;
    this.nzMatchRouterExact = false;
    this.nzMatchRouter = false;
    if (router) {
      this.router.events.pipe(takeUntil(this.destroy$), filter((e) => e instanceof NavigationEnd)).subscribe(() => {
        this.updateRouterActive();
      });
    }
  }
  ngOnInit() {
    combineLatest([this.nzMenuService.mode$, this.nzMenuService.inlineIndent$]).pipe(takeUntil(this.destroy$)).subscribe(([mode, inlineIndent]) => {
      this.inlinePaddingLeft = mode === "inline" ? this.level * inlineIndent : null;
    });
    this.dir = this.directionality.value;
    this.directionality.change?.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
      this.dir = direction;
    });
  }
  ngAfterContentInit() {
    this.listOfRouterLink.changes.pipe(takeUntil(this.destroy$)).subscribe(() => this.updateRouterActive());
    this.updateRouterActive();
  }
  ngOnChanges(changes) {
    if (changes.nzSelected) {
      this.setSelectedState(this.nzSelected);
    }
  }
  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
};
_NzMenuItemComponent.ɵfac = function NzMenuItemComponent_Factory(t) {
  return new (t || _NzMenuItemComponent)(ɵɵdirectiveInject(MenuService), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(NzSubmenuService, 8), ɵɵdirectiveInject(NzIsMenuInsideDropDownToken), ɵɵdirectiveInject(Directionality, 8), ɵɵdirectiveInject(RouterLink, 8), ɵɵdirectiveInject(Router, 8));
};
_NzMenuItemComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzMenuItemComponent,
  selectors: [["", "nz-menu-item", ""]],
  contentQueries: function NzMenuItemComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, RouterLink, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.listOfRouterLink = _t);
    }
  },
  hostVars: 20,
  hostBindings: function NzMenuItemComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("click", function NzMenuItemComponent_click_HostBindingHandler($event) {
        return ctx.clickMenuItem($event);
      });
    }
    if (rf & 2) {
      ɵɵstyleProp("padding-left", ctx.dir === "rtl" ? null : ctx.nzPaddingLeft || ctx.inlinePaddingLeft, "px")("padding-right", ctx.dir === "rtl" ? ctx.nzPaddingLeft || ctx.inlinePaddingLeft : null, "px");
      ɵɵclassProp("ant-dropdown-menu-item", ctx.isMenuInsideDropDown)("ant-dropdown-menu-item-selected", ctx.isMenuInsideDropDown && ctx.nzSelected)("ant-dropdown-menu-item-danger", ctx.isMenuInsideDropDown && ctx.nzDanger)("ant-dropdown-menu-item-disabled", ctx.isMenuInsideDropDown && ctx.nzDisabled)("ant-menu-item", !ctx.isMenuInsideDropDown)("ant-menu-item-selected", !ctx.isMenuInsideDropDown && ctx.nzSelected)("ant-menu-item-danger", !ctx.isMenuInsideDropDown && ctx.nzDanger)("ant-menu-item-disabled", !ctx.isMenuInsideDropDown && ctx.nzDisabled);
    }
  },
  inputs: {
    nzPaddingLeft: "nzPaddingLeft",
    nzDisabled: "nzDisabled",
    nzSelected: "nzSelected",
    nzDanger: "nzDanger",
    nzMatchRouterExact: "nzMatchRouterExact",
    nzMatchRouter: "nzMatchRouter"
  },
  exportAs: ["nzMenuItem"],
  standalone: true,
  features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
  attrs: _c0,
  ngContentSelectors: _c1,
  decls: 2,
  vars: 0,
  consts: [[1, "ant-menu-title-content"]],
  template: function NzMenuItemComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵelementStart(0, "span", 0);
      ɵɵprojection(1);
      ɵɵelementEnd();
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
var NzMenuItemComponent = _NzMenuItemComponent;
__decorate([InputBoolean()], NzMenuItemComponent.prototype, "nzDisabled", void 0);
__decorate([InputBoolean()], NzMenuItemComponent.prototype, "nzSelected", void 0);
__decorate([InputBoolean()], NzMenuItemComponent.prototype, "nzDanger", void 0);
__decorate([InputBoolean()], NzMenuItemComponent.prototype, "nzMatchRouterExact", void 0);
__decorate([InputBoolean()], NzMenuItemComponent.prototype, "nzMatchRouter", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzMenuItemComponent, [{
    type: Component,
    args: [{
      selector: "[nz-menu-item]",
      exportAs: "nzMenuItem",
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      preserveWhitespaces: false,
      template: `
    <span class="ant-menu-title-content">
      <ng-content></ng-content>
    </span>
  `,
      host: {
        "[class.ant-dropdown-menu-item]": `isMenuInsideDropDown`,
        "[class.ant-dropdown-menu-item-selected]": `isMenuInsideDropDown && nzSelected`,
        "[class.ant-dropdown-menu-item-danger]": `isMenuInsideDropDown && nzDanger`,
        "[class.ant-dropdown-menu-item-disabled]": `isMenuInsideDropDown && nzDisabled`,
        "[class.ant-menu-item]": `!isMenuInsideDropDown`,
        "[class.ant-menu-item-selected]": `!isMenuInsideDropDown && nzSelected`,
        "[class.ant-menu-item-danger]": `!isMenuInsideDropDown && nzDanger`,
        "[class.ant-menu-item-disabled]": `!isMenuInsideDropDown && nzDisabled`,
        "[style.paddingLeft.px]": `dir === 'rtl' ? null : nzPaddingLeft || inlinePaddingLeft`,
        "[style.paddingRight.px]": `dir === 'rtl' ? nzPaddingLeft || inlinePaddingLeft : null`,
        "(click)": "clickMenuItem($event)"
      },
      standalone: true
    }]
  }], () => [{
    type: MenuService
  }, {
    type: ChangeDetectorRef
  }, {
    type: NzSubmenuService,
    decorators: [{
      type: Optional
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [NzIsMenuInsideDropDownToken]
    }]
  }, {
    type: Directionality,
    decorators: [{
      type: Optional
    }]
  }, {
    type: RouterLink,
    decorators: [{
      type: Optional
    }]
  }, {
    type: Router,
    decorators: [{
      type: Optional
    }]
  }], {
    nzPaddingLeft: [{
      type: Input
    }],
    nzDisabled: [{
      type: Input
    }],
    nzSelected: [{
      type: Input
    }],
    nzDanger: [{
      type: Input
    }],
    nzMatchRouterExact: [{
      type: Input
    }],
    nzMatchRouter: [{
      type: Input
    }],
    listOfRouterLink: [{
      type: ContentChildren,
      args: [RouterLink, {
        descendants: true
      }]
    }]
  });
})();
var _NzSubmenuInlineChildComponent = class _NzSubmenuInlineChildComponent {
  constructor(elementRef, renderer, directionality) {
    this.elementRef = elementRef;
    this.renderer = renderer;
    this.directionality = directionality;
    this.templateOutlet = null;
    this.menuClass = "";
    this.mode = "vertical";
    this.nzOpen = false;
    this.listOfCacheClassName = [];
    this.expandState = "collapsed";
    this.dir = "ltr";
    this.destroy$ = new Subject();
  }
  calcMotionState() {
    if (this.nzOpen) {
      this.expandState = "expanded";
    } else {
      this.expandState = "collapsed";
    }
  }
  ngOnInit() {
    this.calcMotionState();
    this.dir = this.directionality.value;
    this.directionality.change?.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
      this.dir = direction;
    });
  }
  ngOnChanges(changes) {
    const {
      mode,
      nzOpen,
      menuClass
    } = changes;
    if (mode || nzOpen) {
      this.calcMotionState();
    }
    if (menuClass) {
      if (this.listOfCacheClassName.length) {
        this.listOfCacheClassName.filter((item) => !!item).forEach((className) => {
          this.renderer.removeClass(this.elementRef.nativeElement, className);
        });
      }
      if (this.menuClass) {
        this.listOfCacheClassName = this.menuClass.split(" ");
        this.listOfCacheClassName.filter((item) => !!item).forEach((className) => {
          this.renderer.addClass(this.elementRef.nativeElement, className);
        });
      }
    }
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
};
_NzSubmenuInlineChildComponent.ɵfac = function NzSubmenuInlineChildComponent_Factory(t) {
  return new (t || _NzSubmenuInlineChildComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(Directionality, 8));
};
_NzSubmenuInlineChildComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzSubmenuInlineChildComponent,
  selectors: [["", "nz-submenu-inline-child", ""]],
  hostAttrs: [1, "ant-menu", "ant-menu-inline", "ant-menu-sub"],
  hostVars: 3,
  hostBindings: function NzSubmenuInlineChildComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵsyntheticHostProperty("@collapseMotion", ctx.expandState);
      ɵɵclassProp("ant-menu-rtl", ctx.dir === "rtl");
    }
  },
  inputs: {
    templateOutlet: "templateOutlet",
    menuClass: "menuClass",
    mode: "mode",
    nzOpen: "nzOpen"
  },
  exportAs: ["nzSubmenuInlineChild"],
  standalone: true,
  features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
  attrs: _c2,
  decls: 1,
  vars: 1,
  consts: [[3, "ngTemplateOutlet"]],
  template: function NzSubmenuInlineChildComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, NzSubmenuInlineChildComponent_ng_template_0_Template, 0, 0, "ng-template", 0);
    }
    if (rf & 2) {
      ɵɵproperty("ngTemplateOutlet", ctx.templateOutlet);
    }
  },
  dependencies: [NgTemplateOutlet],
  encapsulation: 2,
  data: {
    animation: [collapseMotion]
  },
  changeDetection: 0
});
var NzSubmenuInlineChildComponent = _NzSubmenuInlineChildComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzSubmenuInlineChildComponent, [{
    type: Component,
    args: [{
      selector: "[nz-submenu-inline-child]",
      animations: [collapseMotion],
      exportAs: "nzSubmenuInlineChild",
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: ` <ng-template [ngTemplateOutlet]="templateOutlet"></ng-template> `,
      host: {
        class: "ant-menu ant-menu-inline ant-menu-sub",
        "[class.ant-menu-rtl]": `dir === 'rtl'`,
        "[@collapseMotion]": "expandState"
      },
      imports: [NgTemplateOutlet],
      standalone: true
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: Directionality,
    decorators: [{
      type: Optional
    }]
  }], {
    templateOutlet: [{
      type: Input
    }],
    menuClass: [{
      type: Input
    }],
    mode: [{
      type: Input
    }],
    nzOpen: [{
      type: Input
    }]
  });
})();
var _NzSubmenuNoneInlineChildComponent = class _NzSubmenuNoneInlineChildComponent {
  constructor(directionality) {
    this.directionality = directionality;
    this.menuClass = "";
    this.theme = "light";
    this.templateOutlet = null;
    this.isMenuInsideDropDown = false;
    this.mode = "vertical";
    this.position = "right";
    this.nzDisabled = false;
    this.nzOpen = false;
    this.subMenuMouseState = new EventEmitter();
    this.expandState = "collapsed";
    this.dir = "ltr";
    this.destroy$ = new Subject();
  }
  setMouseState(state) {
    if (!this.nzDisabled) {
      this.subMenuMouseState.next(state);
    }
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  calcMotionState() {
    if (this.nzOpen) {
      if (this.mode === "horizontal") {
        this.expandState = "bottom";
      } else if (this.mode === "vertical") {
        this.expandState = "active";
      }
    } else {
      this.expandState = "collapsed";
    }
  }
  ngOnInit() {
    this.calcMotionState();
    this.dir = this.directionality.value;
    this.directionality.change?.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
      this.dir = direction;
    });
  }
  ngOnChanges(changes) {
    const {
      mode,
      nzOpen
    } = changes;
    if (mode || nzOpen) {
      this.calcMotionState();
    }
  }
};
_NzSubmenuNoneInlineChildComponent.ɵfac = function NzSubmenuNoneInlineChildComponent_Factory(t) {
  return new (t || _NzSubmenuNoneInlineChildComponent)(ɵɵdirectiveInject(Directionality, 8));
};
_NzSubmenuNoneInlineChildComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzSubmenuNoneInlineChildComponent,
  selectors: [["", "nz-submenu-none-inline-child", ""]],
  hostAttrs: [1, "ant-menu-submenu", "ant-menu-submenu-popup"],
  hostVars: 14,
  hostBindings: function NzSubmenuNoneInlineChildComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("mouseenter", function NzSubmenuNoneInlineChildComponent_mouseenter_HostBindingHandler() {
        return ctx.setMouseState(true);
      })("mouseleave", function NzSubmenuNoneInlineChildComponent_mouseleave_HostBindingHandler() {
        return ctx.setMouseState(false);
      });
    }
    if (rf & 2) {
      ɵɵsyntheticHostProperty("@slideMotion", ctx.expandState)("@zoomBigMotion", ctx.expandState);
      ɵɵclassProp("ant-menu-light", ctx.theme === "light")("ant-menu-dark", ctx.theme === "dark")("ant-menu-submenu-placement-bottom", ctx.mode === "horizontal")("ant-menu-submenu-placement-right", ctx.mode === "vertical" && ctx.position === "right")("ant-menu-submenu-placement-left", ctx.mode === "vertical" && ctx.position === "left")("ant-menu-submenu-rtl", ctx.dir === "rtl");
    }
  },
  inputs: {
    menuClass: "menuClass",
    theme: "theme",
    templateOutlet: "templateOutlet",
    isMenuInsideDropDown: "isMenuInsideDropDown",
    mode: "mode",
    position: "position",
    nzDisabled: "nzDisabled",
    nzOpen: "nzOpen"
  },
  outputs: {
    subMenuMouseState: "subMenuMouseState"
  },
  exportAs: ["nzSubmenuNoneInlineChild"],
  standalone: true,
  features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
  attrs: _c3,
  decls: 2,
  vars: 16,
  consts: [[3, "ngClass"], [3, "ngTemplateOutlet"]],
  template: function NzSubmenuNoneInlineChildComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "div", 0);
      ɵɵtemplate(1, NzSubmenuNoneInlineChildComponent_ng_template_1_Template, 0, 0, "ng-template", 1);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵclassProp("ant-dropdown-menu", ctx.isMenuInsideDropDown)("ant-menu", !ctx.isMenuInsideDropDown)("ant-dropdown-menu-vertical", ctx.isMenuInsideDropDown)("ant-menu-vertical", !ctx.isMenuInsideDropDown)("ant-dropdown-menu-sub", ctx.isMenuInsideDropDown)("ant-menu-sub", !ctx.isMenuInsideDropDown)("ant-menu-rtl", ctx.dir === "rtl");
      ɵɵproperty("ngClass", ctx.menuClass);
      ɵɵadvance();
      ɵɵproperty("ngTemplateOutlet", ctx.templateOutlet);
    }
  },
  dependencies: [NgClass, NgTemplateOutlet],
  encapsulation: 2,
  data: {
    animation: [zoomBigMotion, slideMotion]
  },
  changeDetection: 0
});
var NzSubmenuNoneInlineChildComponent = _NzSubmenuNoneInlineChildComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzSubmenuNoneInlineChildComponent, [{
    type: Component,
    args: [{
      selector: "[nz-submenu-none-inline-child]",
      exportAs: "nzSubmenuNoneInlineChild",
      encapsulation: ViewEncapsulation$1.None,
      animations: [zoomBigMotion, slideMotion],
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `
    <div
      [class.ant-dropdown-menu]="isMenuInsideDropDown"
      [class.ant-menu]="!isMenuInsideDropDown"
      [class.ant-dropdown-menu-vertical]="isMenuInsideDropDown"
      [class.ant-menu-vertical]="!isMenuInsideDropDown"
      [class.ant-dropdown-menu-sub]="isMenuInsideDropDown"
      [class.ant-menu-sub]="!isMenuInsideDropDown"
      [class.ant-menu-rtl]="dir === 'rtl'"
      [ngClass]="menuClass"
    >
      <ng-template [ngTemplateOutlet]="templateOutlet"></ng-template>
    </div>
  `,
      host: {
        class: "ant-menu-submenu ant-menu-submenu-popup",
        "[class.ant-menu-light]": "theme === 'light'",
        "[class.ant-menu-dark]": "theme === 'dark'",
        "[class.ant-menu-submenu-placement-bottom]": "mode === 'horizontal'",
        "[class.ant-menu-submenu-placement-right]": "mode === 'vertical' && position === 'right'",
        "[class.ant-menu-submenu-placement-left]": "mode === 'vertical' && position === 'left'",
        "[class.ant-menu-submenu-rtl]": 'dir ==="rtl"',
        "[@slideMotion]": "expandState",
        "[@zoomBigMotion]": "expandState",
        "(mouseenter)": "setMouseState(true)",
        "(mouseleave)": "setMouseState(false)"
      },
      imports: [NgClass, NgTemplateOutlet],
      standalone: true
    }]
  }], () => [{
    type: Directionality,
    decorators: [{
      type: Optional
    }]
  }], {
    menuClass: [{
      type: Input
    }],
    theme: [{
      type: Input
    }],
    templateOutlet: [{
      type: Input
    }],
    isMenuInsideDropDown: [{
      type: Input
    }],
    mode: [{
      type: Input
    }],
    position: [{
      type: Input
    }],
    nzDisabled: [{
      type: Input
    }],
    nzOpen: [{
      type: Input
    }],
    subMenuMouseState: [{
      type: Output
    }]
  });
})();
var _NzSubMenuTitleComponent = class _NzSubMenuTitleComponent {
  constructor(cdr, directionality) {
    this.cdr = cdr;
    this.directionality = directionality;
    this.nzIcon = null;
    this.nzTitle = null;
    this.isMenuInsideDropDown = false;
    this.nzDisabled = false;
    this.paddingLeft = null;
    this.mode = "vertical";
    this.toggleSubMenu = new EventEmitter();
    this.subMenuMouseState = new EventEmitter();
    this.dir = "ltr";
    this.destroy$ = new Subject();
  }
  ngOnInit() {
    this.dir = this.directionality.value;
    this.directionality.change?.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
      this.dir = direction;
      this.cdr.detectChanges();
    });
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  setMouseState(state) {
    if (!this.nzDisabled) {
      this.subMenuMouseState.next(state);
    }
  }
  clickTitle() {
    if (this.mode === "inline" && !this.nzDisabled) {
      this.toggleSubMenu.emit();
    }
  }
};
_NzSubMenuTitleComponent.ɵfac = function NzSubMenuTitleComponent_Factory(t) {
  return new (t || _NzSubMenuTitleComponent)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(Directionality, 8));
};
_NzSubMenuTitleComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzSubMenuTitleComponent,
  selectors: [["", "nz-submenu-title", ""]],
  hostVars: 8,
  hostBindings: function NzSubMenuTitleComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("click", function NzSubMenuTitleComponent_click_HostBindingHandler() {
        return ctx.clickTitle();
      })("mouseenter", function NzSubMenuTitleComponent_mouseenter_HostBindingHandler() {
        return ctx.setMouseState(true);
      })("mouseleave", function NzSubMenuTitleComponent_mouseleave_HostBindingHandler() {
        return ctx.setMouseState(false);
      });
    }
    if (rf & 2) {
      ɵɵstyleProp("padding-left", ctx.dir === "rtl" ? null : ctx.paddingLeft, "px")("padding-right", ctx.dir === "rtl" ? ctx.paddingLeft : null, "px");
      ɵɵclassProp("ant-dropdown-menu-submenu-title", ctx.isMenuInsideDropDown)("ant-menu-submenu-title", !ctx.isMenuInsideDropDown);
    }
  },
  inputs: {
    nzIcon: "nzIcon",
    nzTitle: "nzTitle",
    isMenuInsideDropDown: "isMenuInsideDropDown",
    nzDisabled: "nzDisabled",
    paddingLeft: "paddingLeft",
    mode: "mode"
  },
  outputs: {
    toggleSubMenu: "toggleSubMenu",
    subMenuMouseState: "subMenuMouseState"
  },
  exportAs: ["nzSubmenuTitle"],
  standalone: true,
  features: [ɵɵStandaloneFeature],
  attrs: _c4,
  ngContentSelectors: _c1,
  decls: 5,
  vars: 3,
  consts: [["nz-icon", "", 3, "nzType"], [4, "nzStringTemplateOutlet"], [1, "ant-dropdown-menu-submenu-expand-icon"], [1, "ant-menu-title-content"], ["nz-icon", "", "nzType", "left", 1, "ant-dropdown-menu-submenu-arrow-icon"], ["nz-icon", "", "nzType", "right", 1, "ant-dropdown-menu-submenu-arrow-icon"], [1, "ant-menu-submenu-arrow"]],
  template: function NzSubMenuTitleComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵtemplate(0, NzSubMenuTitleComponent_Conditional_0_Template, 1, 1, "span", 0)(1, NzSubMenuTitleComponent_ng_container_1_Template, 3, 1, "ng-container", 1);
      ɵɵprojection(2);
      ɵɵtemplate(3, NzSubMenuTitleComponent_Conditional_3_Template, 3, 1, "span", 2)(4, NzSubMenuTitleComponent_Conditional_4_Template, 1, 0);
    }
    if (rf & 2) {
      ɵɵconditional(0, ctx.nzIcon ? 0 : -1);
      ɵɵadvance();
      ɵɵproperty("nzStringTemplateOutlet", ctx.nzTitle);
      ɵɵadvance(2);
      ɵɵconditional(3, ctx.isMenuInsideDropDown ? 3 : 4);
    }
  },
  dependencies: [NzIconModule, NzIconDirective, NzOutletModule, NzStringTemplateOutletDirective],
  encapsulation: 2,
  changeDetection: 0
});
var NzSubMenuTitleComponent = _NzSubMenuTitleComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzSubMenuTitleComponent, [{
    type: Component,
    args: [{
      selector: "[nz-submenu-title]",
      exportAs: "nzSubmenuTitle",
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `
    @if (nzIcon) {
      <span nz-icon [nzType]="nzIcon"></span>
    }
    <ng-container *nzStringTemplateOutlet="nzTitle">
      <span class="ant-menu-title-content">{{ nzTitle }}</span>
    </ng-container>
    <ng-content />
    @if (isMenuInsideDropDown) {
      <span class="ant-dropdown-menu-submenu-expand-icon">
        @switch (dir) {
          @case ('rtl') {
            <span nz-icon nzType="left" class="ant-dropdown-menu-submenu-arrow-icon"></span>
          }
          @default {
            <span nz-icon nzType="right" class="ant-dropdown-menu-submenu-arrow-icon"></span>
          }
        }
      </span>
    } @else {
      <span class="ant-menu-submenu-arrow"></span>
    }
  `,
      host: {
        "[class.ant-dropdown-menu-submenu-title]": "isMenuInsideDropDown",
        "[class.ant-menu-submenu-title]": "!isMenuInsideDropDown",
        "[style.paddingLeft.px]": `dir === 'rtl' ? null : paddingLeft `,
        "[style.paddingRight.px]": `dir === 'rtl' ? paddingLeft : null`,
        "(click)": "clickTitle()",
        "(mouseenter)": "setMouseState(true)",
        "(mouseleave)": "setMouseState(false)"
      },
      imports: [NzIconModule, NzOutletModule],
      standalone: true
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: Directionality,
    decorators: [{
      type: Optional
    }]
  }], {
    nzIcon: [{
      type: Input
    }],
    nzTitle: [{
      type: Input
    }],
    isMenuInsideDropDown: [{
      type: Input
    }],
    nzDisabled: [{
      type: Input
    }],
    paddingLeft: [{
      type: Input
    }],
    mode: [{
      type: Input
    }],
    toggleSubMenu: [{
      type: Output
    }],
    subMenuMouseState: [{
      type: Output
    }]
  });
})();
var listOfVerticalPositions = [POSITION_MAP.rightTop, POSITION_MAP.right, POSITION_MAP.rightBottom, POSITION_MAP.leftTop, POSITION_MAP.left, POSITION_MAP.leftBottom];
var listOfHorizontalPositions = [POSITION_MAP.bottomLeft, POSITION_MAP.bottomRight, POSITION_MAP.topRight, POSITION_MAP.topLeft];
var _NzSubMenuComponent = class _NzSubMenuComponent {
  /** set the submenu host open status directly **/
  setOpenStateWithoutDebounce(open) {
    this.nzSubmenuService.setOpenStateWithoutDebounce(open);
  }
  toggleSubMenu() {
    this.setOpenStateWithoutDebounce(!this.nzOpen);
  }
  setMouseEnterState(value) {
    this.isActive = value;
    if (this.mode !== "inline") {
      this.nzSubmenuService.setMouseEnterTitleOrOverlayState(value);
    }
  }
  setTriggerWidth() {
    if (this.mode === "horizontal" && this.platform.isBrowser && this.cdkOverlayOrigin && this.nzPlacement === "bottomLeft") {
      this.triggerWidth = this.cdkOverlayOrigin.nativeElement.getBoundingClientRect().width;
    }
  }
  onPositionChange(position) {
    const placement = getPlacementName(position);
    if (placement === "rightTop" || placement === "rightBottom" || placement === "right") {
      this.position = "right";
    } else if (placement === "leftTop" || placement === "leftBottom" || placement === "left") {
      this.position = "left";
    }
  }
  constructor(nzMenuService, cdr, nzSubmenuService, platform, isMenuInsideDropDown, directionality, noAnimation) {
    this.nzMenuService = nzMenuService;
    this.cdr = cdr;
    this.nzSubmenuService = nzSubmenuService;
    this.platform = platform;
    this.isMenuInsideDropDown = isMenuInsideDropDown;
    this.directionality = directionality;
    this.noAnimation = noAnimation;
    this.nzMenuClassName = "";
    this.nzPaddingLeft = null;
    this.nzTitle = null;
    this.nzIcon = null;
    this.nzOpen = false;
    this.nzDisabled = false;
    this.nzPlacement = "bottomLeft";
    this.nzOpenChange = new EventEmitter();
    this.cdkOverlayOrigin = null;
    this.listOfNzSubMenuComponent = null;
    this.listOfNzMenuItemDirective = null;
    this.level = this.nzSubmenuService.level;
    this.destroy$ = new Subject();
    this.position = "right";
    this.triggerWidth = null;
    this.theme = "light";
    this.mode = "vertical";
    this.inlinePaddingLeft = null;
    this.overlayPositions = listOfVerticalPositions;
    this.isSelected = false;
    this.isActive = false;
    this.dir = "ltr";
  }
  ngOnInit() {
    this.nzMenuService.theme$.pipe(takeUntil(this.destroy$)).subscribe((theme) => {
      this.theme = theme;
      this.cdr.markForCheck();
    });
    this.nzSubmenuService.mode$.pipe(takeUntil(this.destroy$)).subscribe((mode) => {
      this.mode = mode;
      if (mode === "horizontal") {
        this.overlayPositions = [POSITION_MAP[this.nzPlacement], ...listOfHorizontalPositions];
      } else if (mode === "vertical") {
        this.overlayPositions = listOfVerticalPositions;
      }
      this.cdr.markForCheck();
    });
    combineLatest([this.nzSubmenuService.mode$, this.nzMenuService.inlineIndent$]).pipe(takeUntil(this.destroy$)).subscribe(([mode, inlineIndent]) => {
      this.inlinePaddingLeft = mode === "inline" ? this.level * inlineIndent : null;
      this.cdr.markForCheck();
    });
    this.nzSubmenuService.isCurrentSubMenuOpen$.pipe(takeUntil(this.destroy$)).subscribe((open) => {
      this.isActive = open;
      if (open !== this.nzOpen) {
        this.setTriggerWidth();
        this.nzOpen = open;
        this.nzOpenChange.emit(this.nzOpen);
        this.cdr.markForCheck();
      }
    });
    this.dir = this.directionality.value;
    this.directionality.change?.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
      this.dir = direction;
      this.cdr.markForCheck();
    });
  }
  ngAfterContentInit() {
    this.setTriggerWidth();
    const listOfNzMenuItemDirective = this.listOfNzMenuItemDirective;
    const changes = listOfNzMenuItemDirective.changes;
    const mergedObservable = merge(...[changes, ...listOfNzMenuItemDirective.map((menu) => menu.selected$)]);
    changes.pipe(startWith(listOfNzMenuItemDirective), switchMap(() => mergedObservable), startWith(true), map(() => listOfNzMenuItemDirective.some((e) => e.nzSelected)), takeUntil(this.destroy$)).subscribe((selected) => {
      this.isSelected = selected;
      this.cdr.markForCheck();
    });
  }
  ngOnChanges(changes) {
    const {
      nzOpen
    } = changes;
    if (nzOpen) {
      this.nzSubmenuService.setOpenStateWithoutDebounce(this.nzOpen);
      this.setTriggerWidth();
    }
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
};
_NzSubMenuComponent.ɵfac = function NzSubMenuComponent_Factory(t) {
  return new (t || _NzSubMenuComponent)(ɵɵdirectiveInject(MenuService), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(NzSubmenuService), ɵɵdirectiveInject(Platform), ɵɵdirectiveInject(NzIsMenuInsideDropDownToken), ɵɵdirectiveInject(Directionality, 8), ɵɵdirectiveInject(NzNoAnimationDirective, 9));
};
_NzSubMenuComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzSubMenuComponent,
  selectors: [["", "nz-submenu", ""]],
  contentQueries: function NzSubMenuComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, _NzSubMenuComponent, 5);
      ɵɵcontentQuery(dirIndex, NzMenuItemComponent, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.listOfNzSubMenuComponent = _t);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.listOfNzMenuItemDirective = _t);
    }
  },
  viewQuery: function NzSubMenuComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(CdkOverlayOrigin, 7, ElementRef);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.cdkOverlayOrigin = _t.first);
    }
  },
  hostVars: 34,
  hostBindings: function NzSubMenuComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("ant-dropdown-menu-submenu", ctx.isMenuInsideDropDown)("ant-dropdown-menu-submenu-disabled", ctx.isMenuInsideDropDown && ctx.nzDisabled)("ant-dropdown-menu-submenu-open", ctx.isMenuInsideDropDown && ctx.nzOpen)("ant-dropdown-menu-submenu-selected", ctx.isMenuInsideDropDown && ctx.isSelected)("ant-dropdown-menu-submenu-vertical", ctx.isMenuInsideDropDown && ctx.mode === "vertical")("ant-dropdown-menu-submenu-horizontal", ctx.isMenuInsideDropDown && ctx.mode === "horizontal")("ant-dropdown-menu-submenu-inline", ctx.isMenuInsideDropDown && ctx.mode === "inline")("ant-dropdown-menu-submenu-active", ctx.isMenuInsideDropDown && ctx.isActive)("ant-menu-submenu", !ctx.isMenuInsideDropDown)("ant-menu-submenu-disabled", !ctx.isMenuInsideDropDown && ctx.nzDisabled)("ant-menu-submenu-open", !ctx.isMenuInsideDropDown && ctx.nzOpen)("ant-menu-submenu-selected", !ctx.isMenuInsideDropDown && ctx.isSelected)("ant-menu-submenu-vertical", !ctx.isMenuInsideDropDown && ctx.mode === "vertical")("ant-menu-submenu-horizontal", !ctx.isMenuInsideDropDown && ctx.mode === "horizontal")("ant-menu-submenu-inline", !ctx.isMenuInsideDropDown && ctx.mode === "inline")("ant-menu-submenu-active", !ctx.isMenuInsideDropDown && ctx.isActive)("ant-menu-submenu-rtl", ctx.dir === "rtl");
    }
  },
  inputs: {
    nzMenuClassName: "nzMenuClassName",
    nzPaddingLeft: "nzPaddingLeft",
    nzTitle: "nzTitle",
    nzIcon: "nzIcon",
    nzOpen: "nzOpen",
    nzDisabled: "nzDisabled",
    nzPlacement: "nzPlacement"
  },
  outputs: {
    nzOpenChange: "nzOpenChange"
  },
  exportAs: ["nzSubmenu"],
  standalone: true,
  features: [ɵɵProvidersFeature([NzSubmenuService]), ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
  attrs: _c5,
  ngContentSelectors: _c7,
  decls: 7,
  vars: 8,
  consts: [["origin", "cdkOverlayOrigin"], ["subMenuTemplate", ""], ["nz-submenu-title", "", "cdkOverlayOrigin", "", 3, "subMenuMouseState", "toggleSubMenu", "nzIcon", "nzTitle", "mode", "nzDisabled", "isMenuInsideDropDown", "paddingLeft"], ["nz-submenu-inline-child", "", 3, "mode", "nzOpen", "nzNoAnimation", "menuClass", "templateOutlet"], ["cdkConnectedOverlay", "", 3, "positionChange", "cdkConnectedOverlayPositions", "cdkConnectedOverlayOrigin", "cdkConnectedOverlayWidth", "cdkConnectedOverlayOpen", "cdkConnectedOverlayTransformOriginOn"], ["nz-submenu-none-inline-child", "", 3, "subMenuMouseState", "theme", "mode", "nzOpen", "position", "nzDisabled", "isMenuInsideDropDown", "templateOutlet", "menuClass", "nzNoAnimation"]],
  template: function NzSubMenuComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = ɵɵgetCurrentView();
      ɵɵprojectionDef(_c6);
      ɵɵelementStart(0, "div", 2, 0);
      ɵɵlistener("subMenuMouseState", function NzSubMenuComponent_Template_div_subMenuMouseState_0_listener($event) {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.setMouseEnterState($event));
      })("toggleSubMenu", function NzSubMenuComponent_Template_div_toggleSubMenu_0_listener() {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.toggleSubMenu());
      });
      ɵɵtemplate(2, NzSubMenuComponent_Conditional_2_Template, 1, 0);
      ɵɵelementEnd();
      ɵɵtemplate(3, NzSubMenuComponent_Conditional_3_Template, 1, 6, "div", 3)(4, NzSubMenuComponent_Conditional_4_Template, 1, 5)(5, NzSubMenuComponent_ng_template_5_Template, 1, 0, "ng-template", null, 1, ɵɵtemplateRefExtractor);
    }
    if (rf & 2) {
      ɵɵproperty("nzIcon", ctx.nzIcon)("nzTitle", ctx.nzTitle)("mode", ctx.mode)("nzDisabled", ctx.nzDisabled)("isMenuInsideDropDown", ctx.isMenuInsideDropDown)("paddingLeft", ctx.nzPaddingLeft || ctx.inlinePaddingLeft);
      ɵɵadvance(2);
      ɵɵconditional(2, !ctx.nzTitle ? 2 : -1);
      ɵɵadvance();
      ɵɵconditional(3, ctx.mode === "inline" ? 3 : 4);
    }
  },
  dependencies: [NzSubMenuTitleComponent, NzSubmenuInlineChildComponent, NzNoAnimationDirective, NzSubmenuNoneInlineChildComponent, OverlayModule, CdkConnectedOverlay, CdkOverlayOrigin],
  encapsulation: 2,
  changeDetection: 0
});
var NzSubMenuComponent = _NzSubMenuComponent;
__decorate([InputBoolean()], NzSubMenuComponent.prototype, "nzOpen", void 0);
__decorate([InputBoolean()], NzSubMenuComponent.prototype, "nzDisabled", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzSubMenuComponent, [{
    type: Component,
    args: [{
      selector: "[nz-submenu]",
      exportAs: "nzSubmenu",
      providers: [NzSubmenuService],
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      preserveWhitespaces: false,
      template: `
    <div
      nz-submenu-title
      cdkOverlayOrigin
      #origin="cdkOverlayOrigin"
      [nzIcon]="nzIcon"
      [nzTitle]="nzTitle"
      [mode]="mode"
      [nzDisabled]="nzDisabled"
      [isMenuInsideDropDown]="isMenuInsideDropDown"
      [paddingLeft]="nzPaddingLeft || inlinePaddingLeft"
      (subMenuMouseState)="setMouseEnterState($event)"
      (toggleSubMenu)="toggleSubMenu()"
    >
      @if (!nzTitle) {
        <ng-content select="[title]" />
      }
    </div>
    @if (mode === 'inline') {
      <div
        nz-submenu-inline-child
        [mode]="mode"
        [nzOpen]="nzOpen"
        [@.disabled]="!!noAnimation?.nzNoAnimation"
        [nzNoAnimation]="noAnimation?.nzNoAnimation"
        [menuClass]="nzMenuClassName"
        [templateOutlet]="subMenuTemplate"
      ></div>
    } @else {
      <ng-template
        cdkConnectedOverlay
        (positionChange)="onPositionChange($event)"
        [cdkConnectedOverlayPositions]="overlayPositions"
        [cdkConnectedOverlayOrigin]="origin"
        [cdkConnectedOverlayWidth]="triggerWidth!"
        [cdkConnectedOverlayOpen]="nzOpen"
        [cdkConnectedOverlayTransformOriginOn]="'.ant-menu-submenu'"
      >
        <div
          nz-submenu-none-inline-child
          [theme]="theme"
          [mode]="mode"
          [nzOpen]="nzOpen"
          [position]="position"
          [nzDisabled]="nzDisabled"
          [isMenuInsideDropDown]="isMenuInsideDropDown"
          [templateOutlet]="subMenuTemplate"
          [menuClass]="nzMenuClassName"
          [@.disabled]="!!noAnimation?.nzNoAnimation"
          [nzNoAnimation]="noAnimation?.nzNoAnimation"
          (subMenuMouseState)="setMouseEnterState($event)"
        ></div>
      </ng-template>
    }

    <ng-template #subMenuTemplate>
      <ng-content />
    </ng-template>
  `,
      host: {
        "[class.ant-dropdown-menu-submenu]": `isMenuInsideDropDown`,
        "[class.ant-dropdown-menu-submenu-disabled]": `isMenuInsideDropDown && nzDisabled`,
        "[class.ant-dropdown-menu-submenu-open]": `isMenuInsideDropDown && nzOpen`,
        "[class.ant-dropdown-menu-submenu-selected]": `isMenuInsideDropDown && isSelected`,
        "[class.ant-dropdown-menu-submenu-vertical]": `isMenuInsideDropDown && mode === 'vertical'`,
        "[class.ant-dropdown-menu-submenu-horizontal]": `isMenuInsideDropDown && mode === 'horizontal'`,
        "[class.ant-dropdown-menu-submenu-inline]": `isMenuInsideDropDown && mode === 'inline'`,
        "[class.ant-dropdown-menu-submenu-active]": `isMenuInsideDropDown && isActive`,
        "[class.ant-menu-submenu]": `!isMenuInsideDropDown`,
        "[class.ant-menu-submenu-disabled]": `!isMenuInsideDropDown && nzDisabled`,
        "[class.ant-menu-submenu-open]": `!isMenuInsideDropDown && nzOpen`,
        "[class.ant-menu-submenu-selected]": `!isMenuInsideDropDown && isSelected`,
        "[class.ant-menu-submenu-vertical]": `!isMenuInsideDropDown && mode === 'vertical'`,
        "[class.ant-menu-submenu-horizontal]": `!isMenuInsideDropDown && mode === 'horizontal'`,
        "[class.ant-menu-submenu-inline]": `!isMenuInsideDropDown && mode === 'inline'`,
        "[class.ant-menu-submenu-active]": `!isMenuInsideDropDown && isActive`,
        "[class.ant-menu-submenu-rtl]": `dir === 'rtl'`
      },
      imports: [NzSubMenuTitleComponent, NzSubmenuInlineChildComponent, NzNoAnimationDirective, NzSubmenuNoneInlineChildComponent, OverlayModule],
      standalone: true
    }]
  }], () => [{
    type: MenuService
  }, {
    type: ChangeDetectorRef
  }, {
    type: NzSubmenuService
  }, {
    type: Platform
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [NzIsMenuInsideDropDownToken]
    }]
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
    nzMenuClassName: [{
      type: Input
    }],
    nzPaddingLeft: [{
      type: Input
    }],
    nzTitle: [{
      type: Input
    }],
    nzIcon: [{
      type: Input
    }],
    nzOpen: [{
      type: Input
    }],
    nzDisabled: [{
      type: Input
    }],
    nzPlacement: [{
      type: Input
    }],
    nzOpenChange: [{
      type: Output
    }],
    cdkOverlayOrigin: [{
      type: ViewChild,
      args: [CdkOverlayOrigin, {
        static: true,
        read: ElementRef
      }]
    }],
    listOfNzSubMenuComponent: [{
      type: ContentChildren,
      args: [forwardRef(() => NzSubMenuComponent), {
        descendants: true
      }]
    }],
    listOfNzMenuItemDirective: [{
      type: ContentChildren,
      args: [NzMenuItemComponent, {
        descendants: true
      }]
    }]
  });
})();
function MenuServiceFactory() {
  const serviceInsideDropDown = inject(MenuService, {
    skipSelf: true,
    optional: true
  });
  const serviceOutsideDropDown = inject(NzMenuServiceLocalToken);
  return serviceInsideDropDown ?? serviceOutsideDropDown;
}
function MenuDropDownTokenFactory() {
  const isMenuInsideDropDownToken = inject(NzIsMenuInsideDropDownToken, {
    skipSelf: true,
    optional: true
  });
  return isMenuInsideDropDownToken ?? false;
}
var _NzMenuDirective = class _NzMenuDirective {
  setInlineCollapsed(inlineCollapsed) {
    this.nzInlineCollapsed = inlineCollapsed;
    this.inlineCollapsed$.next(inlineCollapsed);
  }
  updateInlineCollapse() {
    if (this.listOfNzMenuItemDirective) {
      if (this.nzInlineCollapsed) {
        this.listOfOpenedNzSubMenuComponent = this.listOfNzSubMenuComponent.filter((submenu) => submenu.nzOpen);
        this.listOfNzSubMenuComponent.forEach((submenu) => submenu.setOpenStateWithoutDebounce(false));
      } else {
        this.listOfOpenedNzSubMenuComponent.forEach((submenu) => submenu.setOpenStateWithoutDebounce(true));
        this.listOfOpenedNzSubMenuComponent = [];
      }
    }
  }
  constructor(nzMenuService, isMenuInsideDropDown, cdr, directionality) {
    this.nzMenuService = nzMenuService;
    this.isMenuInsideDropDown = isMenuInsideDropDown;
    this.cdr = cdr;
    this.directionality = directionality;
    this.nzInlineIndent = 24;
    this.nzTheme = "light";
    this.nzMode = "vertical";
    this.nzInlineCollapsed = false;
    this.nzSelectable = !this.isMenuInsideDropDown;
    this.nzClick = new EventEmitter();
    this.actualMode = "vertical";
    this.dir = "ltr";
    this.inlineCollapsed$ = new BehaviorSubject(this.nzInlineCollapsed);
    this.mode$ = new BehaviorSubject(this.nzMode);
    this.destroy$ = new Subject();
    this.listOfOpenedNzSubMenuComponent = [];
  }
  ngOnInit() {
    combineLatest([this.inlineCollapsed$, this.mode$]).pipe(takeUntil(this.destroy$)).subscribe(([inlineCollapsed, mode]) => {
      this.actualMode = inlineCollapsed ? "vertical" : mode;
      this.nzMenuService.setMode(this.actualMode);
      this.cdr.markForCheck();
    });
    this.nzMenuService.descendantMenuItemClick$.pipe(takeUntil(this.destroy$)).subscribe((menu) => {
      this.nzClick.emit(menu);
      if (this.nzSelectable && !menu.nzMatchRouter) {
        this.listOfNzMenuItemDirective.forEach((item) => item.setSelectedState(item === menu));
      }
    });
    this.dir = this.directionality.value;
    this.directionality.change?.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
      this.dir = direction;
      this.nzMenuService.setMode(this.actualMode);
      this.cdr.markForCheck();
    });
  }
  ngAfterContentInit() {
    this.inlineCollapsed$.pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.updateInlineCollapse();
      this.cdr.markForCheck();
    });
  }
  ngOnChanges(changes) {
    const {
      nzInlineCollapsed,
      nzInlineIndent,
      nzTheme,
      nzMode
    } = changes;
    if (nzInlineCollapsed) {
      this.inlineCollapsed$.next(this.nzInlineCollapsed);
    }
    if (nzInlineIndent) {
      this.nzMenuService.setInlineIndent(this.nzInlineIndent);
    }
    if (nzTheme) {
      this.nzMenuService.setTheme(this.nzTheme);
    }
    if (nzMode) {
      this.mode$.next(this.nzMode);
      if (!changes.nzMode.isFirstChange() && this.listOfNzSubMenuComponent) {
        this.listOfNzSubMenuComponent.forEach((submenu) => submenu.setOpenStateWithoutDebounce(false));
      }
    }
  }
  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
};
_NzMenuDirective.ɵfac = function NzMenuDirective_Factory(t) {
  return new (t || _NzMenuDirective)(ɵɵdirectiveInject(MenuService), ɵɵdirectiveInject(NzIsMenuInsideDropDownToken), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(Directionality, 8));
};
_NzMenuDirective.ɵdir = ɵɵdefineDirective({
  type: _NzMenuDirective,
  selectors: [["", "nz-menu", ""]],
  contentQueries: function NzMenuDirective_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, NzMenuItemComponent, 5);
      ɵɵcontentQuery(dirIndex, NzSubMenuComponent, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.listOfNzMenuItemDirective = _t);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.listOfNzSubMenuComponent = _t);
    }
  },
  hostVars: 34,
  hostBindings: function NzMenuDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("ant-dropdown-menu", ctx.isMenuInsideDropDown)("ant-dropdown-menu-root", ctx.isMenuInsideDropDown)("ant-dropdown-menu-light", ctx.isMenuInsideDropDown && ctx.nzTheme === "light")("ant-dropdown-menu-dark", ctx.isMenuInsideDropDown && ctx.nzTheme === "dark")("ant-dropdown-menu-vertical", ctx.isMenuInsideDropDown && ctx.actualMode === "vertical")("ant-dropdown-menu-horizontal", ctx.isMenuInsideDropDown && ctx.actualMode === "horizontal")("ant-dropdown-menu-inline", ctx.isMenuInsideDropDown && ctx.actualMode === "inline")("ant-dropdown-menu-inline-collapsed", ctx.isMenuInsideDropDown && ctx.nzInlineCollapsed)("ant-menu", !ctx.isMenuInsideDropDown)("ant-menu-root", !ctx.isMenuInsideDropDown)("ant-menu-light", !ctx.isMenuInsideDropDown && ctx.nzTheme === "light")("ant-menu-dark", !ctx.isMenuInsideDropDown && ctx.nzTheme === "dark")("ant-menu-vertical", !ctx.isMenuInsideDropDown && ctx.actualMode === "vertical")("ant-menu-horizontal", !ctx.isMenuInsideDropDown && ctx.actualMode === "horizontal")("ant-menu-inline", !ctx.isMenuInsideDropDown && ctx.actualMode === "inline")("ant-menu-inline-collapsed", !ctx.isMenuInsideDropDown && ctx.nzInlineCollapsed)("ant-menu-rtl", ctx.dir === "rtl");
    }
  },
  inputs: {
    nzInlineIndent: "nzInlineIndent",
    nzTheme: "nzTheme",
    nzMode: "nzMode",
    nzInlineCollapsed: "nzInlineCollapsed",
    nzSelectable: "nzSelectable"
  },
  outputs: {
    nzClick: "nzClick"
  },
  exportAs: ["nzMenu"],
  standalone: true,
  features: [ɵɵProvidersFeature([
    {
      provide: NzMenuServiceLocalToken,
      useClass: MenuService
    },
    /** use the top level service **/
    {
      provide: MenuService,
      useFactory: MenuServiceFactory
    },
    /** check if menu inside dropdown-menu component **/
    {
      provide: NzIsMenuInsideDropDownToken,
      useFactory: MenuDropDownTokenFactory
    }
  ]), ɵɵNgOnChangesFeature]
});
var NzMenuDirective = _NzMenuDirective;
__decorate([InputBoolean()], NzMenuDirective.prototype, "nzInlineCollapsed", void 0);
__decorate([InputBoolean()], NzMenuDirective.prototype, "nzSelectable", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzMenuDirective, [{
    type: Directive,
    args: [{
      selector: "[nz-menu]",
      exportAs: "nzMenu",
      providers: [
        {
          provide: NzMenuServiceLocalToken,
          useClass: MenuService
        },
        /** use the top level service **/
        {
          provide: MenuService,
          useFactory: MenuServiceFactory
        },
        /** check if menu inside dropdown-menu component **/
        {
          provide: NzIsMenuInsideDropDownToken,
          useFactory: MenuDropDownTokenFactory
        }
      ],
      host: {
        "[class.ant-dropdown-menu]": `isMenuInsideDropDown`,
        "[class.ant-dropdown-menu-root]": `isMenuInsideDropDown`,
        "[class.ant-dropdown-menu-light]": `isMenuInsideDropDown && nzTheme === 'light'`,
        "[class.ant-dropdown-menu-dark]": `isMenuInsideDropDown && nzTheme === 'dark'`,
        "[class.ant-dropdown-menu-vertical]": `isMenuInsideDropDown && actualMode === 'vertical'`,
        "[class.ant-dropdown-menu-horizontal]": `isMenuInsideDropDown && actualMode === 'horizontal'`,
        "[class.ant-dropdown-menu-inline]": `isMenuInsideDropDown && actualMode === 'inline'`,
        "[class.ant-dropdown-menu-inline-collapsed]": `isMenuInsideDropDown && nzInlineCollapsed`,
        "[class.ant-menu]": `!isMenuInsideDropDown`,
        "[class.ant-menu-root]": `!isMenuInsideDropDown`,
        "[class.ant-menu-light]": `!isMenuInsideDropDown && nzTheme === 'light'`,
        "[class.ant-menu-dark]": `!isMenuInsideDropDown && nzTheme === 'dark'`,
        "[class.ant-menu-vertical]": `!isMenuInsideDropDown && actualMode === 'vertical'`,
        "[class.ant-menu-horizontal]": `!isMenuInsideDropDown && actualMode === 'horizontal'`,
        "[class.ant-menu-inline]": `!isMenuInsideDropDown && actualMode === 'inline'`,
        "[class.ant-menu-inline-collapsed]": `!isMenuInsideDropDown && nzInlineCollapsed`,
        "[class.ant-menu-rtl]": `dir === 'rtl'`
      },
      standalone: true
    }]
  }], () => [{
    type: MenuService
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [NzIsMenuInsideDropDownToken]
    }]
  }, {
    type: ChangeDetectorRef
  }, {
    type: Directionality,
    decorators: [{
      type: Optional
    }]
  }], {
    listOfNzMenuItemDirective: [{
      type: ContentChildren,
      args: [NzMenuItemComponent, {
        descendants: true
      }]
    }],
    listOfNzSubMenuComponent: [{
      type: ContentChildren,
      args: [NzSubMenuComponent, {
        descendants: true
      }]
    }],
    nzInlineIndent: [{
      type: Input
    }],
    nzTheme: [{
      type: Input
    }],
    nzMode: [{
      type: Input
    }],
    nzInlineCollapsed: [{
      type: Input
    }],
    nzSelectable: [{
      type: Input
    }],
    nzClick: [{
      type: Output
    }]
  });
})();
function MenuGroupFactory() {
  const isMenuInsideDropDownToken = inject(NzIsMenuInsideDropDownToken, {
    optional: true,
    skipSelf: true
  });
  return isMenuInsideDropDownToken ?? false;
}
var _NzMenuGroupComponent = class _NzMenuGroupComponent {
  constructor(elementRef, renderer, isMenuInsideDropDown) {
    this.elementRef = elementRef;
    this.renderer = renderer;
    this.isMenuInsideDropDown = isMenuInsideDropDown;
    const className = this.isMenuInsideDropDown ? "ant-dropdown-menu-item-group" : "ant-menu-item-group";
    this.renderer.addClass(elementRef.nativeElement, className);
  }
  ngAfterViewInit() {
    const ulElement = this.titleElement.nativeElement.nextElementSibling;
    if (ulElement) {
      const className = this.isMenuInsideDropDown ? "ant-dropdown-menu-item-group-list" : "ant-menu-item-group-list";
      this.renderer.addClass(ulElement, className);
    }
  }
};
_NzMenuGroupComponent.ɵfac = function NzMenuGroupComponent_Factory(t) {
  return new (t || _NzMenuGroupComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(NzIsMenuInsideDropDownToken));
};
_NzMenuGroupComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzMenuGroupComponent,
  selectors: [["", "nz-menu-group", ""]],
  viewQuery: function NzMenuGroupComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c8, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.titleElement = _t.first);
    }
  },
  inputs: {
    nzTitle: "nzTitle"
  },
  exportAs: ["nzMenuGroup"],
  standalone: true,
  features: [ɵɵProvidersFeature([
    /** check if menu inside dropdown-menu component **/
    {
      provide: NzIsMenuInsideDropDownToken,
      useFactory: MenuGroupFactory
    }
  ]), ɵɵStandaloneFeature],
  attrs: _c9,
  ngContentSelectors: _c11,
  decls: 5,
  vars: 6,
  consts: [["titleElement", ""], [4, "nzStringTemplateOutlet"]],
  template: function NzMenuGroupComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef(_c10);
      ɵɵelementStart(0, "div", null, 0);
      ɵɵtemplate(2, NzMenuGroupComponent_ng_container_2_Template, 2, 1, "ng-container", 1)(3, NzMenuGroupComponent_Conditional_3_Template, 1, 0);
      ɵɵelementEnd();
      ɵɵprojection(4);
    }
    if (rf & 2) {
      ɵɵclassProp("ant-menu-item-group-title", !ctx.isMenuInsideDropDown)("ant-dropdown-menu-item-group-title", ctx.isMenuInsideDropDown);
      ɵɵadvance(2);
      ɵɵproperty("nzStringTemplateOutlet", ctx.nzTitle);
      ɵɵadvance();
      ɵɵconditional(3, !ctx.nzTitle ? 3 : -1);
    }
  },
  dependencies: [NzOutletModule, NzStringTemplateOutletDirective],
  encapsulation: 2,
  changeDetection: 0
});
var NzMenuGroupComponent = _NzMenuGroupComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzMenuGroupComponent, [{
    type: Component,
    args: [{
      selector: "[nz-menu-group]",
      exportAs: "nzMenuGroup",
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [
        /** check if menu inside dropdown-menu component **/
        {
          provide: NzIsMenuInsideDropDownToken,
          useFactory: MenuGroupFactory
        }
      ],
      encapsulation: ViewEncapsulation$1.None,
      template: `
    <div
      [class.ant-menu-item-group-title]="!isMenuInsideDropDown"
      [class.ant-dropdown-menu-item-group-title]="isMenuInsideDropDown"
      #titleElement
    >
      <ng-container *nzStringTemplateOutlet="nzTitle">{{ nzTitle }}</ng-container>
      @if (!nzTitle) {
        <ng-content select="[title]" />
      }
    </div>
    <ng-content></ng-content>
  `,
      preserveWhitespaces: false,
      imports: [NzOutletModule],
      standalone: true
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [NzIsMenuInsideDropDownToken]
    }]
  }], {
    nzTitle: [{
      type: Input
    }],
    titleElement: [{
      type: ViewChild,
      args: ["titleElement"]
    }]
  });
})();
var _NzMenuDividerDirective = class _NzMenuDividerDirective {
  constructor(elementRef) {
    this.elementRef = elementRef;
  }
};
_NzMenuDividerDirective.ɵfac = function NzMenuDividerDirective_Factory(t) {
  return new (t || _NzMenuDividerDirective)(ɵɵdirectiveInject(ElementRef));
};
_NzMenuDividerDirective.ɵdir = ɵɵdefineDirective({
  type: _NzMenuDividerDirective,
  selectors: [["", "nz-menu-divider", ""]],
  hostAttrs: [1, "ant-dropdown-menu-item-divider"],
  exportAs: ["nzMenuDivider"],
  standalone: true
});
var NzMenuDividerDirective = _NzMenuDividerDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzMenuDividerDirective, [{
    type: Directive,
    args: [{
      selector: "[nz-menu-divider]",
      exportAs: "nzMenuDivider",
      host: {
        class: "ant-dropdown-menu-item-divider"
      },
      standalone: true
    }]
  }], () => [{
    type: ElementRef
  }], null);
})();
var _NzMenuModule = class _NzMenuModule {
};
_NzMenuModule.ɵfac = function NzMenuModule_Factory(t) {
  return new (t || _NzMenuModule)();
};
_NzMenuModule.ɵmod = ɵɵdefineNgModule({
  type: _NzMenuModule,
  imports: [NzMenuDirective, NzMenuItemComponent, NzSubMenuComponent, NzMenuDividerDirective, NzMenuGroupComponent, NzSubMenuTitleComponent, NzSubmenuInlineChildComponent, NzSubmenuNoneInlineChildComponent],
  exports: [NzMenuDirective, NzMenuItemComponent, NzSubMenuComponent, NzMenuDividerDirective, NzMenuGroupComponent]
});
_NzMenuModule.ɵinj = ɵɵdefineInjector({
  imports: [NzSubMenuComponent, NzMenuGroupComponent, NzSubMenuTitleComponent]
});
var NzMenuModule = _NzMenuModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzMenuModule, [{
    type: NgModule,
    args: [{
      imports: [NzMenuDirective, NzMenuItemComponent, NzSubMenuComponent, NzMenuDividerDirective, NzMenuGroupComponent, NzSubMenuTitleComponent, NzSubmenuInlineChildComponent, NzSubmenuNoneInlineChildComponent],
      exports: [NzMenuDirective, NzMenuItemComponent, NzSubMenuComponent, NzMenuDividerDirective, NzMenuGroupComponent]
    }]
  }], null, null);
})();

export {
  NzIsMenuInsideDropDownToken,
  NzMenuServiceLocalToken,
  MenuService,
  NzSubmenuService,
  NzMenuItemComponent,
  NzSubmenuInlineChildComponent,
  NzSubmenuNoneInlineChildComponent,
  NzSubMenuTitleComponent,
  NzSubMenuComponent,
  MenuServiceFactory,
  MenuDropDownTokenFactory,
  NzMenuDirective,
  MenuGroupFactory,
  NzMenuGroupComponent,
  NzMenuDividerDirective,
  NzMenuModule
};
//# sourceMappingURL=chunk-FVT4LRN6.js.map
