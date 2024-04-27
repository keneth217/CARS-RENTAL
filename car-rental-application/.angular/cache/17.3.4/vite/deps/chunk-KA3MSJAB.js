import {
  CdkConnectedOverlay,
  CdkOverlayOrigin,
  ConnectionPositionPair
} from "./chunk-Y2LXB4LJ.js";
import {
  NzDestroyService
} from "./chunk-7UXDNT2U.js";
import {
  InputBoolean,
  coerceElement
} from "./chunk-PGMGKWAT.js";
import {
  ANIMATION_MODULE_TYPE,
  Directive,
  ElementRef,
  Inject,
  Input,
  NgModule,
  Optional,
  Renderer2,
  __decorate,
  setClassMetadata,
  takeUntil,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵdefineDirective,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject
} from "./chunk-QIBLZIJK.js";

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-core-no-animation.mjs
var DISABLED_CLASSNAME = "nz-animate-disabled";
var _NzNoAnimationDirective = class _NzNoAnimationDirective {
  constructor(element, renderer, animationType) {
    this.element = element;
    this.renderer = renderer;
    this.animationType = animationType;
    this.nzNoAnimation = false;
  }
  ngOnChanges() {
    this.updateClass();
  }
  ngAfterViewInit() {
    this.updateClass();
  }
  updateClass() {
    const element = coerceElement(this.element);
    if (!element) {
      return;
    }
    if (this.nzNoAnimation || this.animationType === "NoopAnimations") {
      this.renderer.addClass(element, DISABLED_CLASSNAME);
    } else {
      this.renderer.removeClass(element, DISABLED_CLASSNAME);
    }
  }
};
_NzNoAnimationDirective.ɵfac = function NzNoAnimationDirective_Factory(t) {
  return new (t || _NzNoAnimationDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ANIMATION_MODULE_TYPE, 8));
};
_NzNoAnimationDirective.ɵdir = ɵɵdefineDirective({
  type: _NzNoAnimationDirective,
  selectors: [["", "nzNoAnimation", ""]],
  inputs: {
    nzNoAnimation: "nzNoAnimation"
  },
  exportAs: ["nzNoAnimation"],
  standalone: true,
  features: [ɵɵNgOnChangesFeature]
});
var NzNoAnimationDirective = _NzNoAnimationDirective;
__decorate([InputBoolean()], NzNoAnimationDirective.prototype, "nzNoAnimation", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzNoAnimationDirective, [{
    type: Directive,
    args: [{
      selector: "[nzNoAnimation]",
      exportAs: "nzNoAnimation",
      standalone: true
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [ANIMATION_MODULE_TYPE]
    }]
  }], {
    nzNoAnimation: [{
      type: Input
    }]
  });
})();
var _NzNoAnimationModule = class _NzNoAnimationModule {
};
_NzNoAnimationModule.ɵfac = function NzNoAnimationModule_Factory(t) {
  return new (t || _NzNoAnimationModule)();
};
_NzNoAnimationModule.ɵmod = ɵɵdefineNgModule({
  type: _NzNoAnimationModule,
  imports: [NzNoAnimationDirective],
  exports: [NzNoAnimationDirective]
});
_NzNoAnimationModule.ɵinj = ɵɵdefineInjector({});
var NzNoAnimationModule = _NzNoAnimationModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzNoAnimationModule, [{
    type: NgModule,
    args: [{
      imports: [NzNoAnimationDirective],
      exports: [NzNoAnimationDirective]
    }]
  }], null, null);
})();

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-core-overlay.mjs
var POSITION_MAP = {
  top: new ConnectionPositionPair({
    originX: "center",
    originY: "top"
  }, {
    overlayX: "center",
    overlayY: "bottom"
  }),
  topCenter: new ConnectionPositionPair({
    originX: "center",
    originY: "top"
  }, {
    overlayX: "center",
    overlayY: "bottom"
  }),
  topLeft: new ConnectionPositionPair({
    originX: "start",
    originY: "top"
  }, {
    overlayX: "start",
    overlayY: "bottom"
  }),
  topRight: new ConnectionPositionPair({
    originX: "end",
    originY: "top"
  }, {
    overlayX: "end",
    overlayY: "bottom"
  }),
  right: new ConnectionPositionPair({
    originX: "end",
    originY: "center"
  }, {
    overlayX: "start",
    overlayY: "center"
  }),
  rightTop: new ConnectionPositionPair({
    originX: "end",
    originY: "top"
  }, {
    overlayX: "start",
    overlayY: "top"
  }),
  rightBottom: new ConnectionPositionPair({
    originX: "end",
    originY: "bottom"
  }, {
    overlayX: "start",
    overlayY: "bottom"
  }),
  bottom: new ConnectionPositionPair({
    originX: "center",
    originY: "bottom"
  }, {
    overlayX: "center",
    overlayY: "top"
  }),
  bottomCenter: new ConnectionPositionPair({
    originX: "center",
    originY: "bottom"
  }, {
    overlayX: "center",
    overlayY: "top"
  }),
  bottomLeft: new ConnectionPositionPair({
    originX: "start",
    originY: "bottom"
  }, {
    overlayX: "start",
    overlayY: "top"
  }),
  bottomRight: new ConnectionPositionPair({
    originX: "end",
    originY: "bottom"
  }, {
    overlayX: "end",
    overlayY: "top"
  }),
  left: new ConnectionPositionPair({
    originX: "start",
    originY: "center"
  }, {
    overlayX: "end",
    overlayY: "center"
  }),
  leftTop: new ConnectionPositionPair({
    originX: "start",
    originY: "top"
  }, {
    overlayX: "end",
    overlayY: "top"
  }),
  leftBottom: new ConnectionPositionPair({
    originX: "start",
    originY: "bottom"
  }, {
    overlayX: "end",
    overlayY: "bottom"
  })
};
var DEFAULT_TOOLTIP_POSITIONS = [POSITION_MAP.top, POSITION_MAP.right, POSITION_MAP.bottom, POSITION_MAP.left];
var DEFAULT_CASCADER_POSITIONS = [POSITION_MAP.bottomLeft, POSITION_MAP.bottomRight, POSITION_MAP.topLeft, POSITION_MAP.topRight, POSITION_MAP.topCenter, POSITION_MAP.bottomCenter];
var DEFAULT_MENTION_TOP_POSITIONS = [new ConnectionPositionPair({
  originX: "start",
  originY: "bottom"
}, {
  overlayX: "start",
  overlayY: "bottom"
}), new ConnectionPositionPair({
  originX: "start",
  originY: "bottom"
}, {
  overlayX: "end",
  overlayY: "bottom"
})];
var DEFAULT_MENTION_BOTTOM_POSITIONS = [POSITION_MAP.bottomLeft, new ConnectionPositionPair({
  originX: "start",
  originY: "bottom"
}, {
  overlayX: "end",
  overlayY: "top"
})];
function getPlacementName(position) {
  for (const placement in POSITION_MAP) {
    if (position.connectionPair.originX === POSITION_MAP[placement].originX && position.connectionPair.originY === POSITION_MAP[placement].originY && position.connectionPair.overlayX === POSITION_MAP[placement].overlayX && position.connectionPair.overlayY === POSITION_MAP[placement].overlayY) {
      return placement;
    }
  }
  return void 0;
}
var DATE_PICKER_POSITION_MAP = {
  bottomLeft: new ConnectionPositionPair({
    originX: "start",
    originY: "bottom"
  }, {
    overlayX: "start",
    overlayY: "top"
  }, void 0, 2),
  topLeft: new ConnectionPositionPair({
    originX: "start",
    originY: "top"
  }, {
    overlayX: "start",
    overlayY: "bottom"
  }, void 0, -2),
  bottomRight: new ConnectionPositionPair({
    originX: "end",
    originY: "bottom"
  }, {
    overlayX: "end",
    overlayY: "top"
  }, void 0, 2),
  topRight: new ConnectionPositionPair({
    originX: "end",
    originY: "top"
  }, {
    overlayX: "end",
    overlayY: "bottom"
  }, void 0, -2)
};
var DEFAULT_DATE_PICKER_POSITIONS = [DATE_PICKER_POSITION_MAP.bottomLeft, DATE_PICKER_POSITION_MAP.topLeft, DATE_PICKER_POSITION_MAP.bottomRight, DATE_PICKER_POSITION_MAP.topRight];
var _NzConnectedOverlayDirective = class _NzConnectedOverlayDirective {
  constructor(cdkConnectedOverlay, nzDestroyService) {
    this.cdkConnectedOverlay = cdkConnectedOverlay;
    this.nzDestroyService = nzDestroyService;
    this.nzArrowPointAtCenter = false;
    this.cdkConnectedOverlay.backdropClass = "nz-overlay-transparent-backdrop";
    this.cdkConnectedOverlay.positionChange.pipe(takeUntil(this.nzDestroyService)).subscribe((position) => {
      if (this.nzArrowPointAtCenter) {
        this.updateArrowPosition(position);
      }
    });
  }
  updateArrowPosition(position) {
    const originRect = this.getOriginRect();
    const placement = getPlacementName(position);
    let offsetX = 0;
    let offsetY = 0;
    if (placement === "topLeft" || placement === "bottomLeft") {
      offsetX = originRect.width / 2 - 14;
    } else if (placement === "topRight" || placement === "bottomRight") {
      offsetX = -(originRect.width / 2 - 14);
    } else if (placement === "leftTop" || placement === "rightTop") {
      offsetY = originRect.height / 2 - 10;
    } else if (placement === "leftBottom" || placement === "rightBottom") {
      offsetY = -(originRect.height / 2 - 10);
    }
    if (this.cdkConnectedOverlay.offsetX !== offsetX || this.cdkConnectedOverlay.offsetY !== offsetY) {
      this.cdkConnectedOverlay.offsetY = offsetY;
      this.cdkConnectedOverlay.offsetX = offsetX;
      this.cdkConnectedOverlay.overlayRef.updatePosition();
    }
  }
  getFlexibleConnectedPositionStrategyOrigin() {
    if (this.cdkConnectedOverlay.origin instanceof CdkOverlayOrigin) {
      return this.cdkConnectedOverlay.origin.elementRef;
    } else {
      return this.cdkConnectedOverlay.origin;
    }
  }
  getOriginRect() {
    const origin = this.getFlexibleConnectedPositionStrategyOrigin();
    if (origin instanceof ElementRef) {
      return origin.nativeElement.getBoundingClientRect();
    }
    if (origin instanceof Element) {
      return origin.getBoundingClientRect();
    }
    const width = origin.width || 0;
    const height = origin.height || 0;
    return {
      top: origin.y,
      bottom: origin.y + height,
      left: origin.x,
      right: origin.x + width,
      height,
      width
    };
  }
};
_NzConnectedOverlayDirective.ɵfac = function NzConnectedOverlayDirective_Factory(t) {
  return new (t || _NzConnectedOverlayDirective)(ɵɵdirectiveInject(CdkConnectedOverlay), ɵɵdirectiveInject(NzDestroyService));
};
_NzConnectedOverlayDirective.ɵdir = ɵɵdefineDirective({
  type: _NzConnectedOverlayDirective,
  selectors: [["", "cdkConnectedOverlay", "", "nzConnectedOverlay", ""]],
  inputs: {
    nzArrowPointAtCenter: "nzArrowPointAtCenter"
  },
  exportAs: ["nzConnectedOverlay"],
  features: [ɵɵProvidersFeature([NzDestroyService])]
});
var NzConnectedOverlayDirective = _NzConnectedOverlayDirective;
__decorate([InputBoolean()], NzConnectedOverlayDirective.prototype, "nzArrowPointAtCenter", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzConnectedOverlayDirective, [{
    type: Directive,
    args: [{
      selector: "[cdkConnectedOverlay][nzConnectedOverlay]",
      exportAs: "nzConnectedOverlay",
      providers: [NzDestroyService]
    }]
  }], () => [{
    type: CdkConnectedOverlay
  }, {
    type: NzDestroyService
  }], {
    nzArrowPointAtCenter: [{
      type: Input
    }]
  });
})();
var _NzOverlayModule = class _NzOverlayModule {
};
_NzOverlayModule.ɵfac = function NzOverlayModule_Factory(t) {
  return new (t || _NzOverlayModule)();
};
_NzOverlayModule.ɵmod = ɵɵdefineNgModule({
  type: _NzOverlayModule,
  declarations: [NzConnectedOverlayDirective],
  exports: [NzConnectedOverlayDirective]
});
_NzOverlayModule.ɵinj = ɵɵdefineInjector({});
var NzOverlayModule = _NzOverlayModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzOverlayModule, [{
    type: NgModule,
    args: [{
      declarations: [NzConnectedOverlayDirective],
      exports: [NzConnectedOverlayDirective]
    }]
  }], null, null);
})();

export {
  NzNoAnimationDirective,
  POSITION_MAP,
  DEFAULT_TOOLTIP_POSITIONS,
  getPlacementName,
  DATE_PICKER_POSITION_MAP,
  DEFAULT_DATE_PICKER_POSITIONS,
  NzConnectedOverlayDirective,
  NzOverlayModule
};
//# sourceMappingURL=chunk-KA3MSJAB.js.map
