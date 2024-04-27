import {
  InputBoolean,
  coerceElement
} from "./chunk-PGMGKWAT.js";
import {
  Directive,
  ElementRef,
  EventEmitter,
  Injectable,
  Input,
  NgModule,
  Observable,
  Output,
  Subject,
  __decorate,
  setClassMetadata,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵinject
} from "./chunk-QIBLZIJK.js";

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-cdk-resize-observer.mjs
var _NzResizeObserverFactory = class _NzResizeObserverFactory {
  create(callback) {
    return typeof ResizeObserver === "undefined" ? null : new ResizeObserver(callback);
  }
};
_NzResizeObserverFactory.ɵfac = function NzResizeObserverFactory_Factory(t) {
  return new (t || _NzResizeObserverFactory)();
};
_NzResizeObserverFactory.ɵprov = ɵɵdefineInjectable({
  token: _NzResizeObserverFactory,
  factory: _NzResizeObserverFactory.ɵfac,
  providedIn: "root"
});
var NzResizeObserverFactory = _NzResizeObserverFactory;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzResizeObserverFactory, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var _NzResizeObserver = class _NzResizeObserver {
  constructor(nzResizeObserverFactory) {
    this.nzResizeObserverFactory = nzResizeObserverFactory;
    this.observedElements = /* @__PURE__ */ new Map();
  }
  ngOnDestroy() {
    this.observedElements.forEach((_, element) => this.cleanupObserver(element));
  }
  observe(elementOrRef) {
    const element = coerceElement(elementOrRef);
    return new Observable((observer) => {
      const stream = this.observeElement(element);
      const subscription = stream.subscribe(observer);
      return () => {
        subscription.unsubscribe();
        this.unobserveElement(element);
      };
    });
  }
  /**
   * Observes the given element by using the existing ResizeObserver if available, or creating a
   * new one if not.
   */
  observeElement(element) {
    if (!this.observedElements.has(element)) {
      const stream = new Subject();
      const observer = this.nzResizeObserverFactory.create((mutations) => stream.next(mutations));
      if (observer) {
        observer.observe(element);
      }
      this.observedElements.set(element, {
        observer,
        stream,
        count: 1
      });
    } else {
      this.observedElements.get(element).count++;
    }
    return this.observedElements.get(element).stream;
  }
  /**
   * Un-observes the given element and cleans up the underlying ResizeObserver if nobody else is
   * observing this element.
   */
  unobserveElement(element) {
    if (this.observedElements.has(element)) {
      this.observedElements.get(element).count--;
      if (!this.observedElements.get(element).count) {
        this.cleanupObserver(element);
      }
    }
  }
  /** Clean up the underlying ResizeObserver for the specified element. */
  cleanupObserver(element) {
    if (this.observedElements.has(element)) {
      const {
        observer,
        stream
      } = this.observedElements.get(element);
      if (observer) {
        observer.disconnect();
      }
      stream.complete();
      this.observedElements.delete(element);
    }
  }
};
_NzResizeObserver.ɵfac = function NzResizeObserver_Factory(t) {
  return new (t || _NzResizeObserver)(ɵɵinject(NzResizeObserverFactory));
};
_NzResizeObserver.ɵprov = ɵɵdefineInjectable({
  token: _NzResizeObserver,
  factory: _NzResizeObserver.ɵfac,
  providedIn: "root"
});
var NzResizeObserver = _NzResizeObserver;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzResizeObserver, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: NzResizeObserverFactory
  }], null);
})();
var _NzResizeObserverDirective = class _NzResizeObserverDirective {
  subscribe() {
    this.unsubscribe();
    this.currentSubscription = this.nzResizeObserver.observe(this.elementRef).subscribe(this.nzResizeObserve);
  }
  unsubscribe() {
    this.currentSubscription?.unsubscribe();
  }
  constructor(nzResizeObserver, elementRef) {
    this.nzResizeObserver = nzResizeObserver;
    this.elementRef = elementRef;
    this.nzResizeObserve = new EventEmitter();
    this.nzResizeObserverDisabled = false;
    this.currentSubscription = null;
  }
  ngAfterContentInit() {
    if (!this.currentSubscription && !this.nzResizeObserverDisabled) {
      this.subscribe();
    }
  }
  ngOnDestroy() {
    this.unsubscribe();
  }
  ngOnChanges(changes) {
    const {
      nzResizeObserve
    } = changes;
    if (nzResizeObserve) {
      if (this.nzResizeObserverDisabled) {
        this.unsubscribe();
      } else {
        this.subscribe();
      }
    }
  }
};
_NzResizeObserverDirective.ɵfac = function NzResizeObserverDirective_Factory(t) {
  return new (t || _NzResizeObserverDirective)(ɵɵdirectiveInject(NzResizeObserver), ɵɵdirectiveInject(ElementRef));
};
_NzResizeObserverDirective.ɵdir = ɵɵdefineDirective({
  type: _NzResizeObserverDirective,
  selectors: [["", "nzResizeObserver", ""]],
  inputs: {
    nzResizeObserverDisabled: "nzResizeObserverDisabled"
  },
  outputs: {
    nzResizeObserve: "nzResizeObserve"
  },
  standalone: true,
  features: [ɵɵProvidersFeature([NzResizeObserverFactory]), ɵɵNgOnChangesFeature]
});
var NzResizeObserverDirective = _NzResizeObserverDirective;
__decorate([InputBoolean()], NzResizeObserverDirective.prototype, "nzResizeObserverDisabled", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzResizeObserverDirective, [{
    type: Directive,
    args: [{
      selector: "[nzResizeObserver]",
      standalone: true,
      providers: [NzResizeObserverFactory]
    }]
  }], () => [{
    type: NzResizeObserver
  }, {
    type: ElementRef
  }], {
    nzResizeObserve: [{
      type: Output
    }],
    nzResizeObserverDisabled: [{
      type: Input
    }]
  });
})();
var _NzResizeObserverModule = class _NzResizeObserverModule {
};
_NzResizeObserverModule.ɵfac = function NzResizeObserverModule_Factory(t) {
  return new (t || _NzResizeObserverModule)();
};
_NzResizeObserverModule.ɵmod = ɵɵdefineNgModule({
  type: _NzResizeObserverModule,
  imports: [NzResizeObserverDirective],
  exports: [NzResizeObserverDirective]
});
_NzResizeObserverModule.ɵinj = ɵɵdefineInjector({});
var NzResizeObserverModule = _NzResizeObserverModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzResizeObserverModule, [{
    type: NgModule,
    args: [{
      imports: [NzResizeObserverDirective],
      exports: [NzResizeObserverDirective]
    }]
  }], null, null);
})();

export {
  NzResizeObserver
};
//# sourceMappingURL=chunk-OC6Z4MTO.js.map
