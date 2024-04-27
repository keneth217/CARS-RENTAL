import {
  NzResizeObserver
} from "./chunk-OC6Z4MTO.js";
import {
  LEFT_ARROW,
  RIGHT_ARROW
} from "./chunk-T4JA2NQD.js";
import {
  NzDragService,
  NzResizeService
} from "./chunk-7UXDNT2U.js";
import "./chunk-ICUNVL6H.js";
import {
  Directionality
} from "./chunk-7DIIEDL6.js";
import {
  NzConfigService,
  WithConfig
} from "./chunk-J7ZMYXK5.js";
import {
  InputBoolean,
  InputNumber
} from "./chunk-PGMGKWAT.js";
import {
  Platform
} from "./chunk-2FVUDUB4.js";
import {
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
  Inject,
  InjectionToken,
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
  debounceTime,
  distinctUntilChanged,
  fromEvent,
  setClassMetadata,
  takeUntil,
  timer,
  ɵɵNgOnChangesFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵviewQuery
} from "./chunk-QIBLZIJK.js";
import "./chunk-J4B6MK7R.js";

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-carousel.mjs
var _c0 = ["slickList"];
var _c1 = ["slickTrack"];
var _c2 = ["*"];
var _c3 = (a0) => ({
  $implicit: a0
});
function NzCarouselComponent_Conditional_6_For_2_ng_template_1_Template(rf, ctx) {
}
function NzCarouselComponent_Conditional_6_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li", 9);
    ɵɵlistener("click", function NzCarouselComponent_Conditional_6_For_2_Template_li_click_0_listener() {
      const $index_r3 = ɵɵrestoreView(_r2).$index;
      const ctx_r3 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r3.onLiClick($index_r3));
    });
    ɵɵtemplate(1, NzCarouselComponent_Conditional_6_For_2_ng_template_1_Template, 0, 0, "ng-template", 10);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const $index_r3 = ctx.$index;
    const ctx_r3 = ɵɵnextContext(2);
    const renderDotTemplate_r5 = ɵɵreference(8);
    ɵɵclassProp("slick-active", $index_r3 === ctx_r3.activeIndex);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r3.nzDotRender || renderDotTemplate_r5)("ngTemplateOutletContext", ɵɵpureFunction1(4, _c3, $index_r3));
  }
}
function NzCarouselComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "ul", 7);
    ɵɵrepeaterCreate(1, NzCarouselComponent_Conditional_6_For_2_Template, 2, 6, "li", 8, ɵɵrepeaterTrackByIdentity);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    ɵɵclassProp("slick-dots-top", ctx_r3.nzDotPosition === "top")("slick-dots-bottom", ctx_r3.nzDotPosition === "bottom")("slick-dots-left", ctx_r3.nzDotPosition === "left")("slick-dots-right", ctx_r3.nzDotPosition === "right");
    ɵɵadvance();
    ɵɵrepeater(ctx_r3.carouselContents);
  }
}
function NzCarouselComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "button");
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const index_r6 = ctx.$implicit;
    ɵɵadvance();
    ɵɵtextInterpolate(index_r6 + 1);
  }
}
var _NzCarouselContentDirective = class _NzCarouselContentDirective {
  set isActive(value) {
    this._active = value;
    if (this.isActive) {
      this.renderer.addClass(this.el, "slick-active");
    } else {
      this.renderer.removeClass(this.el, "slick-active");
    }
  }
  get isActive() {
    return this._active;
  }
  constructor(elementRef, renderer) {
    this.renderer = renderer;
    this._active = false;
    this.el = elementRef.nativeElement;
  }
};
_NzCarouselContentDirective.ɵfac = function NzCarouselContentDirective_Factory(t) {
  return new (t || _NzCarouselContentDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2));
};
_NzCarouselContentDirective.ɵdir = ɵɵdefineDirective({
  type: _NzCarouselContentDirective,
  selectors: [["", "nz-carousel-content", ""]],
  hostAttrs: [1, "slick-slide"],
  exportAs: ["nzCarouselContent"],
  standalone: true
});
var NzCarouselContentDirective = _NzCarouselContentDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzCarouselContentDirective, [{
    type: Directive,
    args: [{
      selector: "[nz-carousel-content]",
      exportAs: "nzCarouselContent",
      host: {
        class: "slick-slide"
      },
      standalone: true
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: Renderer2
  }], null);
})();
var NzCarouselBaseStrategy = class {
  get maxIndex() {
    return this.length - 1;
  }
  get firstEl() {
    return this.contents[0].el;
  }
  get lastEl() {
    return this.contents[this.maxIndex].el;
  }
  constructor(carouselComponent, cdr, renderer, platform, options) {
    this.cdr = cdr;
    this.renderer = renderer;
    this.platform = platform;
    this.options = options;
    this.carouselComponent = carouselComponent;
  }
  /**
   * Initialize dragging sequences.
   *
   * @param contents
   */
  withCarouselContents(contents) {
    const carousel = this.carouselComponent;
    this.slickListEl = carousel.slickListEl;
    this.slickTrackEl = carousel.slickTrackEl;
    this.contents = contents?.toArray() || [];
    this.length = this.contents.length;
    if (this.platform.isBrowser) {
      const rect = carousel.el.getBoundingClientRect();
      this.unitWidth = rect.width;
      this.unitHeight = rect.height;
    } else {
      contents?.forEach((content, index) => {
        if (index === 0) {
          this.renderer.setStyle(content.el, "width", "100%");
        } else {
          this.renderer.setStyle(content.el, "display", "none");
        }
      });
    }
  }
  /**
   * When user drag the carousel component.
   *
   * @optional
   */
  dragging(_vector) {
  }
  /**
   * Destroy a scroll strategy.
   */
  dispose() {
  }
  getFromToInBoundary(f, t) {
    const length = this.maxIndex + 1;
    return {
      from: (f + length) % length,
      to: (t + length) % length
    };
  }
};
var NzCarouselOpacityStrategy = class extends NzCarouselBaseStrategy {
  withCarouselContents(contents) {
    super.withCarouselContents(contents);
    if (this.contents) {
      this.slickTrackEl.style.width = `${this.length * this.unitWidth}px`;
      this.contents.forEach((content, i) => {
        this.renderer.setStyle(content.el, "opacity", this.carouselComponent.activeIndex === i ? "1" : "0");
        this.renderer.setStyle(content.el, "position", "relative");
        this.renderer.setStyle(content.el, "width", `${this.unitWidth}px`);
        this.renderer.setStyle(content.el, "left", `${-this.unitWidth * i}px`);
        this.renderer.setStyle(content.el, "transition", ["opacity 500ms ease 0s", "visibility 500ms ease 0s"]);
      });
    }
  }
  switch(_f, _t) {
    const {
      to: t
    } = this.getFromToInBoundary(_f, _t);
    const complete$ = new Subject();
    this.contents.forEach((content, i) => {
      this.renderer.setStyle(content.el, "opacity", t === i ? "1" : "0");
    });
    setTimeout(() => {
      complete$.next();
      complete$.complete();
    }, this.carouselComponent.nzTransitionSpeed);
    return complete$;
  }
  dispose() {
    this.contents.forEach((content) => {
      this.renderer.setStyle(content.el, "transition", null);
      this.renderer.setStyle(content.el, "opacity", null);
      this.renderer.setStyle(content.el, "width", null);
      this.renderer.setStyle(content.el, "left", null);
    });
    super.dispose();
  }
};
var NzCarouselTransformStrategy = class extends NzCarouselBaseStrategy {
  get vertical() {
    return this.carouselComponent.vertical;
  }
  constructor(carouselComponent, cdr, renderer, platform, options) {
    super(carouselComponent, cdr, renderer, platform, options);
    this.isDragging = false;
    this.isTransitioning = false;
  }
  dispose() {
    super.dispose();
    this.renderer.setStyle(this.slickTrackEl, "transform", null);
  }
  withCarouselContents(contents) {
    super.withCarouselContents(contents);
    const carousel = this.carouselComponent;
    const activeIndex = carousel.activeIndex;
    if (this.platform.isBrowser && this.contents.length) {
      this.renderer.setStyle(this.slickListEl, "height", `${this.unitHeight}px`);
      if (this.vertical) {
        this.renderer.setStyle(this.slickTrackEl, "width", `${this.unitWidth}px`);
        this.renderer.setStyle(this.slickTrackEl, "height", `${this.length * this.unitHeight}px`);
        this.renderer.setStyle(this.slickTrackEl, "transform", `translate3d(0, ${-activeIndex * this.unitHeight}px, 0)`);
      } else {
        this.renderer.setStyle(this.slickTrackEl, "height", `${this.unitHeight}px`);
        this.renderer.setStyle(this.slickTrackEl, "width", `${this.length * this.unitWidth}px`);
        this.renderer.setStyle(this.slickTrackEl, "transform", `translate3d(${-activeIndex * this.unitWidth}px, 0, 0)`);
      }
      this.contents.forEach((content) => {
        this.renderer.setStyle(content.el, "position", "relative");
        this.renderer.setStyle(content.el, "width", `${this.unitWidth}px`);
        this.renderer.setStyle(content.el, "height", `${this.unitHeight}px`);
      });
    }
  }
  switch(_f, _t) {
    const {
      to: t
    } = this.getFromToInBoundary(_f, _t);
    const complete$ = new Subject();
    this.renderer.setStyle(this.slickTrackEl, "transition", `transform ${this.carouselComponent.nzTransitionSpeed}ms ease`);
    if (this.vertical) {
      this.verticalTransform(_f, _t);
    } else {
      this.horizontalTransform(_f, _t);
    }
    this.isTransitioning = true;
    this.isDragging = false;
    setTimeout(() => {
      this.renderer.setStyle(this.slickTrackEl, "transition", null);
      this.contents.forEach((content) => {
        this.renderer.setStyle(content.el, this.vertical ? "top" : "left", null);
      });
      if (this.vertical) {
        this.renderer.setStyle(this.slickTrackEl, "transform", `translate3d(0, ${-t * this.unitHeight}px, 0)`);
      } else {
        this.renderer.setStyle(this.slickTrackEl, "transform", `translate3d(${-t * this.unitWidth}px, 0, 0)`);
      }
      this.isTransitioning = false;
      complete$.next();
      complete$.complete();
    }, this.carouselComponent.nzTransitionSpeed);
    return complete$.asObservable();
  }
  dragging(_vector) {
    if (this.isTransitioning) {
      return;
    }
    const activeIndex = this.carouselComponent.activeIndex;
    if (this.carouselComponent.vertical) {
      if (!this.isDragging && this.length > 2) {
        if (activeIndex === this.maxIndex) {
          this.prepareVerticalContext(true);
        } else if (activeIndex === 0) {
          this.prepareVerticalContext(false);
        }
      }
      this.renderer.setStyle(this.slickTrackEl, "transform", `translate3d(0, ${-activeIndex * this.unitHeight + _vector.x}px, 0)`);
    } else {
      if (!this.isDragging && this.length > 2) {
        if (activeIndex === this.maxIndex) {
          this.prepareHorizontalContext(true);
        } else if (activeIndex === 0) {
          this.prepareHorizontalContext(false);
        }
      }
      this.renderer.setStyle(this.slickTrackEl, "transform", `translate3d(${-activeIndex * this.unitWidth + _vector.x}px, 0, 0)`);
    }
    this.isDragging = true;
  }
  verticalTransform(_f, _t) {
    const {
      from: f,
      to: t
    } = this.getFromToInBoundary(_f, _t);
    const needToAdjust = this.length > 2 && _t !== t;
    if (needToAdjust) {
      this.prepareVerticalContext(t < f);
      this.renderer.setStyle(this.slickTrackEl, "transform", `translate3d(0, ${-_t * this.unitHeight}px, 0)`);
    } else {
      this.renderer.setStyle(this.slickTrackEl, "transform", `translate3d(0, ${-t * this.unitHeight}px, 0`);
    }
  }
  horizontalTransform(_f, _t) {
    const {
      from: f,
      to: t
    } = this.getFromToInBoundary(_f, _t);
    const needToAdjust = this.length > 2 && _t !== t;
    if (needToAdjust) {
      this.prepareHorizontalContext(t < f);
      this.renderer.setStyle(this.slickTrackEl, "transform", `translate3d(${-_t * this.unitWidth}px, 0, 0)`);
    } else {
      this.renderer.setStyle(this.slickTrackEl, "transform", `translate3d(${-t * this.unitWidth}px, 0, 0`);
    }
  }
  prepareVerticalContext(lastToFirst) {
    if (lastToFirst) {
      this.renderer.setStyle(this.firstEl, "top", `${this.length * this.unitHeight}px`);
      this.renderer.setStyle(this.lastEl, "top", null);
    } else {
      this.renderer.setStyle(this.firstEl, "top", null);
      this.renderer.setStyle(this.lastEl, "top", `${-this.unitHeight * this.length}px`);
    }
  }
  prepareHorizontalContext(lastToFirst) {
    if (lastToFirst) {
      this.renderer.setStyle(this.firstEl, "left", `${this.length * this.unitWidth}px`);
      this.renderer.setStyle(this.lastEl, "left", null);
    } else {
      this.renderer.setStyle(this.firstEl, "left", null);
      this.renderer.setStyle(this.lastEl, "left", `${-this.unitWidth * this.length}px`);
    }
  }
};
var NZ_CAROUSEL_CUSTOM_STRATEGIES = new InjectionToken("nz-carousel-custom-strategies");
var NZ_CONFIG_MODULE_NAME = "carousel";
var _NzCarouselComponent = class _NzCarouselComponent {
  set nzDotPosition(value) {
    this._dotPosition = value;
    if (value === "left" || value === "right") {
      this.vertical = true;
    } else {
      this.vertical = false;
    }
  }
  get nzDotPosition() {
    return this._dotPosition;
  }
  constructor(elementRef, nzConfigService, ngZone, renderer, cdr, platform, resizeService, nzDragService, nzResizeObserver, directionality, customStrategies) {
    this.nzConfigService = nzConfigService;
    this.ngZone = ngZone;
    this.renderer = renderer;
    this.cdr = cdr;
    this.platform = platform;
    this.resizeService = resizeService;
    this.nzDragService = nzDragService;
    this.nzResizeObserver = nzResizeObserver;
    this.directionality = directionality;
    this.customStrategies = customStrategies;
    this._nzModuleName = NZ_CONFIG_MODULE_NAME;
    this.nzEffect = "scrollx";
    this.nzEnableSwipe = true;
    this.nzDots = true;
    this.nzAutoPlay = false;
    this.nzAutoPlaySpeed = 3e3;
    this.nzTransitionSpeed = 500;
    this.nzLoop = true;
    this.nzStrategyOptions = void 0;
    this._dotPosition = "bottom";
    this.nzBeforeChange = new EventEmitter();
    this.nzAfterChange = new EventEmitter();
    this.activeIndex = 0;
    this.vertical = false;
    this.transitionInProgress = null;
    this.dir = "ltr";
    this.destroy$ = new Subject();
    this.gestureRect = null;
    this.pointerDelta = null;
    this.isTransiting = false;
    this.isDragging = false;
    this.onLiClick = (index) => {
      if (this.dir === "rtl") {
        this.goTo(this.carouselContents.length - 1 - index);
      } else {
        this.goTo(index);
      }
    };
    this.pointerDown = (event) => {
      if (!this.isDragging && !this.isTransiting && this.nzEnableSwipe) {
        this.clearScheduledTransition();
        this.gestureRect = this.slickListEl.getBoundingClientRect();
        this.nzDragService.requestDraggingSequence(event).subscribe((delta) => {
          this.pointerDelta = delta;
          this.isDragging = true;
          this.strategy?.dragging(this.pointerDelta);
        }, () => {
        }, () => {
          if (this.nzEnableSwipe && this.isDragging) {
            const xDelta = this.pointerDelta ? this.pointerDelta.x : 0;
            if (Math.abs(xDelta) > this.gestureRect.width / 3 && (this.nzLoop || xDelta <= 0 && this.activeIndex + 1 < this.carouselContents.length || xDelta > 0 && this.activeIndex > 0)) {
              this.goTo(xDelta > 0 ? this.activeIndex - 1 : this.activeIndex + 1);
            } else {
              this.goTo(this.activeIndex);
            }
            this.gestureRect = null;
            this.pointerDelta = null;
          }
          this.isDragging = false;
        });
      }
    };
    this.nzDotPosition = "bottom";
    this.el = elementRef.nativeElement;
  }
  ngOnInit() {
    this.slickListEl = this.slickList.nativeElement;
    this.slickTrackEl = this.slickTrack.nativeElement;
    this.dir = this.directionality.value;
    this.directionality.change.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
      this.dir = direction;
      this.markContentActive(this.activeIndex);
      this.cdr.detectChanges();
    });
    this.ngZone.runOutsideAngular(() => {
      fromEvent(this.slickListEl, "keydown").pipe(takeUntil(this.destroy$)).subscribe((event) => {
        const {
          keyCode
        } = event;
        if (keyCode !== LEFT_ARROW && keyCode !== RIGHT_ARROW) {
          return;
        }
        event.preventDefault();
        this.ngZone.run(() => {
          if (keyCode === LEFT_ARROW) {
            this.pre();
          } else {
            this.next();
          }
          this.cdr.markForCheck();
        });
      });
    });
    this.nzResizeObserver.observe(this.el).pipe(debounceTime(100), distinctUntilChanged(), takeUntil(this.destroy$)).subscribe(() => {
      this.layout();
    });
  }
  ngAfterContentInit() {
    this.markContentActive(0);
  }
  ngAfterViewInit() {
    this.carouselContents.changes.subscribe(() => {
      this.markContentActive(0);
      this.layout();
    });
    this.resizeService.subscribe().pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.layout();
    });
    this.switchStrategy();
    this.markContentActive(0);
    this.layout();
    Promise.resolve().then(() => {
      this.layout();
    });
  }
  ngOnChanges(changes) {
    const {
      nzEffect,
      nzDotPosition
    } = changes;
    if (nzEffect && !nzEffect.isFirstChange()) {
      this.switchStrategy();
      this.markContentActive(0);
      this.layout();
    }
    if (nzDotPosition && !nzDotPosition.isFirstChange()) {
      this.switchStrategy();
      this.markContentActive(0);
      this.layout();
    }
    if (!this.nzAutoPlay || !this.nzAutoPlaySpeed) {
      this.clearScheduledTransition();
    } else {
      this.scheduleNextTransition();
    }
  }
  ngOnDestroy() {
    this.clearScheduledTransition();
    if (this.strategy) {
      this.strategy.dispose();
    }
    this.destroy$.next();
    this.destroy$.complete();
  }
  next() {
    this.goTo(this.activeIndex + 1);
  }
  pre() {
    this.goTo(this.activeIndex - 1);
  }
  goTo(index) {
    if (this.carouselContents && this.carouselContents.length && !this.isTransiting && (this.nzLoop || index >= 0 && index < this.carouselContents.length)) {
      const length = this.carouselContents.length;
      const from = this.activeIndex;
      const to = (index + length) % length;
      this.isTransiting = true;
      this.nzBeforeChange.emit({
        from,
        to
      });
      this.strategy.switch(this.activeIndex, index).subscribe(() => {
        this.scheduleNextTransition();
        this.nzAfterChange.emit(to);
        this.isTransiting = false;
      });
      this.markContentActive(to);
      this.cdr.markForCheck();
    }
  }
  switchStrategy() {
    if (this.strategy) {
      this.strategy.dispose();
    }
    const customStrategy = this.customStrategies ? this.customStrategies.find((s) => s.name === this.nzEffect) : null;
    if (customStrategy) {
      this.strategy = new customStrategy.strategy(this, this.cdr, this.renderer, this.platform);
      return;
    }
    this.strategy = this.nzEffect === "scrollx" ? new NzCarouselTransformStrategy(this, this.cdr, this.renderer, this.platform) : new NzCarouselOpacityStrategy(this, this.cdr, this.renderer, this.platform);
  }
  scheduleNextTransition() {
    this.clearScheduledTransition();
    if (this.nzAutoPlay && this.nzAutoPlaySpeed > 0 && this.platform.isBrowser) {
      this.transitionInProgress = setTimeout(() => {
        this.goTo(this.activeIndex + 1);
      }, this.nzAutoPlaySpeed);
    }
  }
  clearScheduledTransition() {
    if (this.transitionInProgress) {
      clearTimeout(this.transitionInProgress);
      this.transitionInProgress = null;
    }
  }
  markContentActive(index) {
    this.activeIndex = index;
    if (this.carouselContents) {
      this.carouselContents.forEach((slide, i) => {
        if (this.dir === "rtl") {
          slide.isActive = index === this.carouselContents.length - 1 - i;
        } else {
          slide.isActive = index === i;
        }
      });
    }
    this.cdr.markForCheck();
  }
  layout() {
    if (this.strategy) {
      this.strategy.withCarouselContents(this.carouselContents);
    }
  }
};
_NzCarouselComponent.ɵfac = function NzCarouselComponent_Factory(t) {
  return new (t || _NzCarouselComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NzConfigService), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(Platform), ɵɵdirectiveInject(NzResizeService), ɵɵdirectiveInject(NzDragService), ɵɵdirectiveInject(NzResizeObserver), ɵɵdirectiveInject(Directionality, 8), ɵɵdirectiveInject(NZ_CAROUSEL_CUSTOM_STRATEGIES, 8));
};
_NzCarouselComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzCarouselComponent,
  selectors: [["nz-carousel"]],
  contentQueries: function NzCarouselComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, NzCarouselContentDirective, 4);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.carouselContents = _t);
    }
  },
  viewQuery: function NzCarouselComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c0, 7);
      ɵɵviewQuery(_c1, 7);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.slickList = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.slickTrack = _t.first);
    }
  },
  hostAttrs: [1, "ant-carousel"],
  hostVars: 4,
  hostBindings: function NzCarouselComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("ant-carousel-vertical", ctx.vertical)("ant-carousel-rtl", ctx.dir === "rtl");
    }
  },
  inputs: {
    nzDotRender: "nzDotRender",
    nzEffect: "nzEffect",
    nzEnableSwipe: "nzEnableSwipe",
    nzDots: "nzDots",
    nzAutoPlay: "nzAutoPlay",
    nzAutoPlaySpeed: "nzAutoPlaySpeed",
    nzTransitionSpeed: "nzTransitionSpeed",
    nzLoop: "nzLoop",
    nzStrategyOptions: "nzStrategyOptions",
    nzDotPosition: "nzDotPosition"
  },
  outputs: {
    nzBeforeChange: "nzBeforeChange",
    nzAfterChange: "nzAfterChange"
  },
  exportAs: ["nzCarousel"],
  standalone: true,
  features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
  ngContentSelectors: _c2,
  decls: 9,
  vars: 3,
  consts: [["slickList", ""], ["slickTrack", ""], ["renderDotTemplate", ""], [1, "slick-initialized", "slick-slider"], ["tabindex", "-1", 1, "slick-list", 3, "mousedown", "touchstart"], [1, "slick-track"], [1, "slick-dots", 3, "slick-dots-top", "slick-dots-bottom", "slick-dots-left", "slick-dots-right"], [1, "slick-dots"], [3, "slick-active"], [3, "click"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"]],
  template: function NzCarouselComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = ɵɵgetCurrentView();
      ɵɵprojectionDef();
      ɵɵelementStart(0, "div", 3)(1, "div", 4, 0);
      ɵɵlistener("mousedown", function NzCarouselComponent_Template_div_mousedown_1_listener($event) {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.pointerDown($event));
      })("touchstart", function NzCarouselComponent_Template_div_touchstart_1_listener($event) {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.pointerDown($event));
      });
      ɵɵelementStart(3, "div", 5, 1);
      ɵɵprojection(5);
      ɵɵelementEnd()();
      ɵɵtemplate(6, NzCarouselComponent_Conditional_6_Template, 3, 8, "ul", 6);
      ɵɵelementEnd();
      ɵɵtemplate(7, NzCarouselComponent_ng_template_7_Template, 2, 1, "ng-template", null, 2, ɵɵtemplateRefExtractor);
    }
    if (rf & 2) {
      ɵɵclassProp("slick-vertical", ctx.nzDotPosition === "left" || ctx.nzDotPosition === "right");
      ɵɵadvance(6);
      ɵɵconditional(6, ctx.nzDots ? 6 : -1);
    }
  },
  dependencies: [NgTemplateOutlet],
  encapsulation: 2,
  changeDetection: 0
});
var NzCarouselComponent = _NzCarouselComponent;
__decorate([WithConfig()], NzCarouselComponent.prototype, "nzEffect", void 0);
__decorate([WithConfig(), InputBoolean()], NzCarouselComponent.prototype, "nzEnableSwipe", void 0);
__decorate([WithConfig(), InputBoolean()], NzCarouselComponent.prototype, "nzDots", void 0);
__decorate([WithConfig(), InputBoolean()], NzCarouselComponent.prototype, "nzAutoPlay", void 0);
__decorate([WithConfig(), InputNumber()], NzCarouselComponent.prototype, "nzAutoPlaySpeed", void 0);
__decorate([InputNumber()], NzCarouselComponent.prototype, "nzTransitionSpeed", void 0);
__decorate([WithConfig()], NzCarouselComponent.prototype, "nzLoop", void 0);
__decorate([WithConfig()], NzCarouselComponent.prototype, "nzDotPosition", null);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzCarouselComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      selector: "nz-carousel",
      exportAs: "nzCarousel",
      preserveWhitespaces: false,
      template: `
    <div
      class="slick-initialized slick-slider"
      [class.slick-vertical]="nzDotPosition === 'left' || nzDotPosition === 'right'"
    >
      <div
        #slickList
        class="slick-list"
        tabindex="-1"
        (mousedown)="pointerDown($event)"
        (touchstart)="pointerDown($event)"
      >
        <!-- Render carousel items. -->
        <div class="slick-track" #slickTrack>
          <ng-content></ng-content>
        </div>
      </div>
      <!-- Render dots. -->
      @if (nzDots) {
        <ul
          class="slick-dots"
          [class.slick-dots-top]="nzDotPosition === 'top'"
          [class.slick-dots-bottom]="nzDotPosition === 'bottom'"
          [class.slick-dots-left]="nzDotPosition === 'left'"
          [class.slick-dots-right]="nzDotPosition === 'right'"
        >
          @for (content of carouselContents; track content) {
            <li [class.slick-active]="$index === activeIndex" (click)="onLiClick($index)">
              <ng-template
                [ngTemplateOutlet]="nzDotRender || renderDotTemplate"
                [ngTemplateOutletContext]="{ $implicit: $index }"
              ></ng-template>
            </li>
          }
        </ul>
      }
    </div>

    <ng-template #renderDotTemplate let-index>
      <button>{{ index + 1 }}</button>
    </ng-template>
  `,
      host: {
        class: "ant-carousel",
        "[class.ant-carousel-vertical]": "vertical",
        "[class.ant-carousel-rtl]": `dir === 'rtl'`
      },
      imports: [NgTemplateOutlet],
      standalone: true
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: NzConfigService
  }, {
    type: NgZone
  }, {
    type: Renderer2
  }, {
    type: ChangeDetectorRef
  }, {
    type: Platform
  }, {
    type: NzResizeService
  }, {
    type: NzDragService
  }, {
    type: NzResizeObserver
  }, {
    type: Directionality,
    decorators: [{
      type: Optional
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [NZ_CAROUSEL_CUSTOM_STRATEGIES]
    }]
  }], {
    carouselContents: [{
      type: ContentChildren,
      args: [NzCarouselContentDirective]
    }],
    slickList: [{
      type: ViewChild,
      args: ["slickList", {
        static: true
      }]
    }],
    slickTrack: [{
      type: ViewChild,
      args: ["slickTrack", {
        static: true
      }]
    }],
    nzDotRender: [{
      type: Input
    }],
    nzEffect: [{
      type: Input
    }],
    nzEnableSwipe: [{
      type: Input
    }],
    nzDots: [{
      type: Input
    }],
    nzAutoPlay: [{
      type: Input
    }],
    nzAutoPlaySpeed: [{
      type: Input
    }],
    nzTransitionSpeed: [{
      type: Input
    }],
    nzLoop: [{
      type: Input
    }],
    nzStrategyOptions: [{
      type: Input
    }],
    nzDotPosition: [{
      type: Input
    }],
    nzBeforeChange: [{
      type: Output
    }],
    nzAfterChange: [{
      type: Output
    }]
  });
})();
var _NzCarouselModule = class _NzCarouselModule {
};
_NzCarouselModule.ɵfac = function NzCarouselModule_Factory(t) {
  return new (t || _NzCarouselModule)();
};
_NzCarouselModule.ɵmod = ɵɵdefineNgModule({
  type: _NzCarouselModule,
  imports: [NzCarouselComponent, NzCarouselContentDirective],
  exports: [NzCarouselComponent, NzCarouselContentDirective]
});
_NzCarouselModule.ɵinj = ɵɵdefineInjector({});
var NzCarouselModule = _NzCarouselModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzCarouselModule, [{
    type: NgModule,
    args: [{
      imports: [NzCarouselComponent, NzCarouselContentDirective],
      exports: [NzCarouselComponent, NzCarouselContentDirective]
    }]
  }], null, null);
})();
var NzCarouselTransformNoLoopStrategy = class extends NzCarouselBaseStrategy {
  get vertical() {
    return this.carouselComponent.vertical;
  }
  constructor(carouselComponent, cdr, renderer, platform, options) {
    super(carouselComponent, cdr, renderer, platform, options);
    this.isTransitioning = false;
  }
  dispose() {
    this.renderer.setStyle(this.slickTrackEl, "transform", null);
    super.dispose();
  }
  withCarouselContents(contents) {
    super.withCarouselContents(contents);
    const carousel = this.carouselComponent;
    const activeIndex = carousel.activeIndex;
    if (this.platform.isBrowser && this.contents.length) {
      this.renderer.setStyle(this.slickListEl, "height", `${this.unitHeight}px`);
      if (this.platform.isBrowser && this.contents.length) {
        this.renderer.setStyle(this.slickListEl, "height", `${this.unitHeight}px`);
        if (this.vertical) {
          this.renderer.setStyle(this.slickTrackEl, "width", `${this.unitWidth}px`);
          this.renderer.setStyle(this.slickTrackEl, "height", `${this.length * this.unitHeight}px`);
          this.renderer.setStyle(this.slickTrackEl, "transform", `translate3d(0, ${-activeIndex * this.unitHeight}px, 0)`);
        } else {
          this.renderer.setStyle(this.slickTrackEl, "height", `${this.unitHeight}px`);
          this.renderer.setStyle(this.slickTrackEl, "width", `${this.length * this.unitWidth}px`);
          this.renderer.setStyle(this.slickTrackEl, "transform", `translate3d(${-activeIndex * this.unitWidth}px, 0, 0)`);
        }
        this.contents.forEach((content) => {
          this.renderer.setStyle(content.el, "position", "relative");
          this.renderer.setStyle(content.el, "width", `${this.unitWidth}px`);
          this.renderer.setStyle(content.el, "height", `${this.unitHeight}px`);
        });
      }
    }
  }
  switch(_f, _t) {
    const to = (_t + this.length) % this.length;
    const transitionSpeed = this.carouselComponent.nzTransitionSpeed;
    const complete$ = new Subject();
    this.renderer.setStyle(this.slickTrackEl, "transition", `transform ${transitionSpeed}ms ease`);
    if (this.vertical) {
      this.renderer.setStyle(this.slickTrackEl, "transform", `translate3d(0, ${-to * this.unitHeight}px, 0)`);
    } else {
      this.renderer.setStyle(this.slickTrackEl, "transform", `translate3d(${-to * this.unitWidth}px, 0, 0)`);
    }
    this.isTransitioning = true;
    setTimeout(() => {
      this.isTransitioning = false;
      complete$.next();
      complete$.complete();
    }, transitionSpeed);
    return complete$.asObservable();
  }
  dragging(vector) {
    if (this.isTransitioning) {
      return;
    }
    const activeIndex = this.carouselComponent.activeIndex;
    if (this.vertical) {
      this.renderer.setStyle(this.slickTrackEl, "transform", `translate3d(0, ${-activeIndex * this.unitHeight + vector.x}px, 0)`);
    } else {
      this.renderer.setStyle(this.slickTrackEl, "transform", `translate3d(${-activeIndex * this.unitWidth + vector.x}px, 0, 0)`);
    }
  }
};
var NzCarouselFlipStrategy = class extends NzCarouselBaseStrategy {
  withCarouselContents(contents) {
    super.withCarouselContents(contents);
    if (this.contents) {
      this.renderer.setStyle(this.slickListEl, "width", `${this.unitWidth}px`);
      this.renderer.setStyle(this.slickTrackEl, "width", `${this.length * this.unitWidth}px`);
      this.contents.forEach((content, i) => {
        const cur = this.carouselComponent.activeIndex === i;
        this.renderer.setStyle(content.el, "transform", cur ? "rotateY(0deg)" : "rotateY(180deg)");
        this.renderer.setStyle(content.el, "position", "relative");
        this.renderer.setStyle(content.el, "width", `${this.unitWidth}px`);
        this.renderer.setStyle(content.el, "left", `${-this.unitWidth * i}px`);
        this.renderer.setStyle(content.el, "transform-style", "preserve-3d");
        this.renderer.setStyle(content.el, "backface-visibility", "hidden");
      });
      const {
        carouselComponent
      } = this;
      carouselComponent.ngZone.runOutsideAngular(() => {
        timer(carouselComponent.nzTransitionSpeed).subscribe(() => {
          this.contents.forEach((c) => this.renderer.setStyle(c.el, "transition", ["transform 500ms ease 0s"]));
        });
      });
    }
  }
  switch(rawF, rawT) {
    const {
      from,
      to
    } = this.getFromToInBoundary(rawF, rawT);
    const complete$ = new Subject();
    const speed = this.carouselComponent.nzTransitionSpeed;
    timer(speed).subscribe(() => {
      complete$.next();
      complete$.complete();
    });
    if (rawF === rawT) {
      return complete$;
    }
    this.contents.forEach((content, i) => {
      if (i === from) {
        this.renderer.setStyle(content.el, "transform", "rotateY(180deg)");
      } else if (i === to) {
        this.renderer.setStyle(content.el, "transform", "rotateY(0deg)");
      }
    });
    return complete$.asObservable();
  }
  dispose() {
    this.contents.forEach((content) => {
      this.renderer.setStyle(content.el, "transition", null);
      this.renderer.setStyle(content.el, "transform", null);
      this.renderer.setStyle(content.el, "width", null);
      this.renderer.setStyle(content.el, "left", null);
      this.renderer.setStyle(content.el, "transform-style", null);
      this.renderer.setStyle(content.el, "backface-visibility", null);
    });
    super.dispose();
  }
};
export {
  NZ_CAROUSEL_CUSTOM_STRATEGIES,
  NzCarouselBaseStrategy,
  NzCarouselComponent,
  NzCarouselContentDirective,
  NzCarouselFlipStrategy,
  NzCarouselModule,
  NzCarouselOpacityStrategy,
  NzCarouselTransformNoLoopStrategy,
  NzCarouselTransformStrategy
};
//# sourceMappingURL=ng-zorro-antd_carousel.js.map
