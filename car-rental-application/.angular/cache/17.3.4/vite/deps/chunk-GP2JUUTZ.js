import {
  NzWaveModule
} from "./chunk-HMAJJIJ3.js";
import {
  NzTransitionPatchModule
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
  InputBoolean
} from "./chunk-PGMGKWAT.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  ElementRef,
  Input,
  NgModule,
  NgZone,
  Optional,
  Renderer2,
  Subject,
  ViewEncapsulation$1,
  __decorate,
  filter,
  fromEvent,
  setClassMetadata,
  startWith,
  takeUntil,
  ɵɵNgOnChangesFeature,
  ɵɵStandaloneFeature,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵloadQuery,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵqueryRefresh,
  ɵɵtemplate
} from "./chunk-QIBLZIJK.js";

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-button.mjs
var _c0 = ["nz-button", ""];
var _c1 = ["*"];
function NzButtonComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 0);
  }
}
var NZ_CONFIG_MODULE_NAME = "button";
var _NzButtonComponent = class _NzButtonComponent {
  insertSpan(nodes, renderer) {
    nodes.forEach((node) => {
      if (node.nodeName === "#text") {
        const span = renderer.createElement("span");
        const parent = renderer.parentNode(node);
        renderer.insertBefore(parent, span, node);
        renderer.appendChild(span, node);
      }
    });
  }
  get iconOnly() {
    const listOfNode = Array.from(this.elementRef?.nativeElement?.childNodes || []);
    const noText = listOfNode.every((node) => node.nodeName !== "#text");
    const noSpan = listOfNode.filter((node) => {
      return !(node.nodeName === "#comment" || !!node?.attributes?.getNamedItem("nz-icon"));
    }).length == 0;
    return !!this.nzIconDirectiveElement && noSpan && noText;
  }
  constructor(ngZone, elementRef, cdr, renderer, nzConfigService, directionality) {
    this.ngZone = ngZone;
    this.elementRef = elementRef;
    this.cdr = cdr;
    this.renderer = renderer;
    this.nzConfigService = nzConfigService;
    this.directionality = directionality;
    this._nzModuleName = NZ_CONFIG_MODULE_NAME;
    this.nzBlock = false;
    this.nzGhost = false;
    this.nzSearch = false;
    this.nzLoading = false;
    this.nzDanger = false;
    this.disabled = false;
    this.tabIndex = null;
    this.nzType = null;
    this.nzShape = null;
    this.nzSize = "default";
    this.dir = "ltr";
    this.destroy$ = new Subject();
    this.loading$ = new Subject();
    this.nzConfigService.getConfigChangeEventForComponent(NZ_CONFIG_MODULE_NAME).pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.cdr.markForCheck();
    });
  }
  ngOnInit() {
    this.directionality.change?.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
      this.dir = direction;
      this.cdr.detectChanges();
    });
    this.dir = this.directionality.value;
    this.ngZone.runOutsideAngular(() => {
      fromEvent(this.elementRef.nativeElement, "click", {
        capture: true
      }).pipe(takeUntil(this.destroy$)).subscribe((event) => {
        if (this.disabled && event.target?.tagName === "A" || this.nzLoading) {
          event.preventDefault();
          event.stopImmediatePropagation();
        }
      });
    });
  }
  ngOnChanges(changes) {
    const {
      nzLoading
    } = changes;
    if (nzLoading) {
      this.loading$.next(this.nzLoading);
    }
  }
  ngAfterViewInit() {
    this.insertSpan(this.elementRef.nativeElement.childNodes, this.renderer);
  }
  ngAfterContentInit() {
    this.loading$.pipe(startWith(this.nzLoading), filter(() => !!this.nzIconDirectiveElement), takeUntil(this.destroy$)).subscribe((loading) => {
      const nativeElement = this.nzIconDirectiveElement.nativeElement;
      if (loading) {
        this.renderer.setStyle(nativeElement, "display", "none");
      } else {
        this.renderer.removeStyle(nativeElement, "display");
      }
    });
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
};
_NzButtonComponent.ɵfac = function NzButtonComponent_Factory(t) {
  return new (t || _NzButtonComponent)(ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(NzConfigService), ɵɵdirectiveInject(Directionality, 8));
};
_NzButtonComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzButtonComponent,
  selectors: [["button", "nz-button", ""], ["a", "nz-button", ""]],
  contentQueries: function NzButtonComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, NzIconDirective, 5, ElementRef);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.nzIconDirectiveElement = _t.first);
    }
  },
  hostAttrs: [1, "ant-btn"],
  hostVars: 32,
  hostBindings: function NzButtonComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("tabindex", ctx.disabled ? -1 : ctx.tabIndex === null ? null : ctx.tabIndex)("disabled", ctx.disabled || null);
      ɵɵclassProp("ant-btn-primary", ctx.nzType === "primary")("ant-btn-dashed", ctx.nzType === "dashed")("ant-btn-link", ctx.nzType === "link")("ant-btn-text", ctx.nzType === "text")("ant-btn-circle", ctx.nzShape === "circle")("ant-btn-round", ctx.nzShape === "round")("ant-btn-lg", ctx.nzSize === "large")("ant-btn-sm", ctx.nzSize === "small")("ant-btn-dangerous", ctx.nzDanger)("ant-btn-loading", ctx.nzLoading)("ant-btn-background-ghost", ctx.nzGhost)("ant-btn-block", ctx.nzBlock)("ant-input-search-button", ctx.nzSearch)("ant-btn-rtl", ctx.dir === "rtl")("ant-btn-icon-only", ctx.iconOnly);
    }
  },
  inputs: {
    nzBlock: "nzBlock",
    nzGhost: "nzGhost",
    nzSearch: "nzSearch",
    nzLoading: "nzLoading",
    nzDanger: "nzDanger",
    disabled: "disabled",
    tabIndex: "tabIndex",
    nzType: "nzType",
    nzShape: "nzShape",
    nzSize: "nzSize"
  },
  exportAs: ["nzButton"],
  standalone: true,
  features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
  attrs: _c0,
  ngContentSelectors: _c1,
  decls: 2,
  vars: 1,
  consts: [["nz-icon", "", "nzType", "loading"]],
  template: function NzButtonComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵtemplate(0, NzButtonComponent_Conditional_0_Template, 1, 0, "span", 0);
      ɵɵprojection(1);
    }
    if (rf & 2) {
      ɵɵconditional(0, ctx.nzLoading ? 0 : -1);
    }
  },
  dependencies: [NzIconModule, NzIconDirective],
  encapsulation: 2,
  changeDetection: 0
});
var NzButtonComponent = _NzButtonComponent;
__decorate([InputBoolean()], NzButtonComponent.prototype, "nzBlock", void 0);
__decorate([InputBoolean()], NzButtonComponent.prototype, "nzGhost", void 0);
__decorate([InputBoolean()], NzButtonComponent.prototype, "nzSearch", void 0);
__decorate([InputBoolean()], NzButtonComponent.prototype, "nzLoading", void 0);
__decorate([InputBoolean()], NzButtonComponent.prototype, "nzDanger", void 0);
__decorate([InputBoolean()], NzButtonComponent.prototype, "disabled", void 0);
__decorate([WithConfig()], NzButtonComponent.prototype, "nzSize", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzButtonComponent, [{
    type: Component,
    args: [{
      selector: "button[nz-button], a[nz-button]",
      exportAs: "nzButton",
      preserveWhitespaces: false,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      template: `
    @if (nzLoading) {
      <span nz-icon nzType="loading"></span>
    }
    <ng-content></ng-content>
  `,
      host: {
        class: "ant-btn",
        "[class.ant-btn-primary]": `nzType === 'primary'`,
        "[class.ant-btn-dashed]": `nzType === 'dashed'`,
        "[class.ant-btn-link]": `nzType === 'link'`,
        "[class.ant-btn-text]": `nzType === 'text'`,
        "[class.ant-btn-circle]": `nzShape === 'circle'`,
        "[class.ant-btn-round]": `nzShape === 'round'`,
        "[class.ant-btn-lg]": `nzSize === 'large'`,
        "[class.ant-btn-sm]": `nzSize === 'small'`,
        "[class.ant-btn-dangerous]": `nzDanger`,
        "[class.ant-btn-loading]": `nzLoading`,
        "[class.ant-btn-background-ghost]": `nzGhost`,
        "[class.ant-btn-block]": `nzBlock`,
        "[class.ant-input-search-button]": `nzSearch`,
        "[class.ant-btn-rtl]": `dir === 'rtl'`,
        "[class.ant-btn-icon-only]": `iconOnly`,
        "[attr.tabindex]": "disabled ? -1 : (tabIndex === null ? null : tabIndex)",
        "[attr.disabled]": "disabled || null"
      },
      imports: [NzIconModule],
      standalone: true
    }]
  }], () => [{
    type: NgZone
  }, {
    type: ElementRef
  }, {
    type: ChangeDetectorRef
  }, {
    type: Renderer2
  }, {
    type: NzConfigService
  }, {
    type: Directionality,
    decorators: [{
      type: Optional
    }]
  }], {
    nzIconDirectiveElement: [{
      type: ContentChild,
      args: [NzIconDirective, {
        read: ElementRef
      }]
    }],
    nzBlock: [{
      type: Input
    }],
    nzGhost: [{
      type: Input
    }],
    nzSearch: [{
      type: Input
    }],
    nzLoading: [{
      type: Input
    }],
    nzDanger: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    tabIndex: [{
      type: Input
    }],
    nzType: [{
      type: Input
    }],
    nzShape: [{
      type: Input
    }],
    nzSize: [{
      type: Input
    }]
  });
})();
var _NzButtonGroupComponent = class _NzButtonGroupComponent {
  constructor(directionality) {
    this.directionality = directionality;
    this.nzSize = "default";
    this.dir = "ltr";
    this.destroy$ = new Subject();
  }
  ngOnInit() {
    this.dir = this.directionality.value;
    this.directionality.change?.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
      this.dir = direction;
    });
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
};
_NzButtonGroupComponent.ɵfac = function NzButtonGroupComponent_Factory(t) {
  return new (t || _NzButtonGroupComponent)(ɵɵdirectiveInject(Directionality, 8));
};
_NzButtonGroupComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzButtonGroupComponent,
  selectors: [["nz-button-group"]],
  hostAttrs: [1, "ant-btn-group"],
  hostVars: 6,
  hostBindings: function NzButtonGroupComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("ant-btn-group-lg", ctx.nzSize === "large")("ant-btn-group-sm", ctx.nzSize === "small")("ant-btn-group-rtl", ctx.dir === "rtl");
    }
  },
  inputs: {
    nzSize: "nzSize"
  },
  exportAs: ["nzButtonGroup"],
  standalone: true,
  features: [ɵɵStandaloneFeature],
  ngContentSelectors: _c1,
  decls: 1,
  vars: 0,
  template: function NzButtonGroupComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
var NzButtonGroupComponent = _NzButtonGroupComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzButtonGroupComponent, [{
    type: Component,
    args: [{
      selector: "nz-button-group",
      exportAs: "nzButtonGroup",
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      host: {
        class: "ant-btn-group",
        "[class.ant-btn-group-lg]": `nzSize === 'large'`,
        "[class.ant-btn-group-sm]": `nzSize === 'small'`,
        "[class.ant-btn-group-rtl]": `dir === 'rtl'`
      },
      preserveWhitespaces: false,
      template: ` <ng-content></ng-content> `,
      standalone: true
    }]
  }], () => [{
    type: Directionality,
    decorators: [{
      type: Optional
    }]
  }], {
    nzSize: [{
      type: Input
    }]
  });
})();
var _NzButtonModule = class _NzButtonModule {
};
_NzButtonModule.ɵfac = function NzButtonModule_Factory(t) {
  return new (t || _NzButtonModule)();
};
_NzButtonModule.ɵmod = ɵɵdefineNgModule({
  type: _NzButtonModule,
  imports: [NzButtonComponent, NzButtonGroupComponent],
  exports: [NzButtonComponent, NzButtonGroupComponent, NzTransitionPatchModule, NzWaveModule]
});
_NzButtonModule.ɵinj = ɵɵdefineInjector({
  imports: [NzButtonComponent, NzTransitionPatchModule, NzWaveModule]
});
var NzButtonModule = _NzButtonModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzButtonModule, [{
    type: NgModule,
    args: [{
      imports: [NzButtonComponent, NzButtonGroupComponent],
      exports: [NzButtonComponent, NzButtonGroupComponent, NzTransitionPatchModule, NzWaveModule]
    }]
  }], null, null);
})();

export {
  NzButtonComponent,
  NzButtonGroupComponent,
  NzButtonModule
};
//# sourceMappingURL=chunk-GP2JUUTZ.js.map
