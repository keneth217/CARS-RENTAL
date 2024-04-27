import {
  NzConfigService,
  inputToRGB,
  rgbToHex,
  rgbToHsv
} from "./chunk-J7ZMYXK5.js";
import {
  InputBoolean,
  warn
} from "./chunk-PGMGKWAT.js";
import {
  Platform
} from "./chunk-2FVUDUB4.js";
import {
  DomSanitizer
} from "./chunk-UPSRJ2V7.js";
import {
  HttpBackend,
  HttpClient
} from "./chunk-WCYJYOZL.js";
import {
  DOCUMENT
} from "./chunk-KKPSRQXY.js";
import {
  ChangeDetectorRef,
  Directive,
  ElementRef,
  Inject,
  Injectable,
  InjectionToken,
  Input,
  NgModule,
  NgZone,
  Observable,
  Optional,
  Renderer2,
  RendererFactory2,
  SecurityContext,
  Self,
  Subject,
  __decorate,
  catchError,
  filter,
  finalize,
  from,
  isDevMode,
  map,
  of,
  setClassMetadata,
  share,
  take,
  takeUntil,
  tap,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵclassProp,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵinject
} from "./chunk-QIBLZIJK.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-J4B6MK7R.js";

// node_modules/@ant-design/colors/es/generate.js
var hueStep = 2;
var saturationStep = 0.16;
var saturationStep2 = 0.05;
var brightnessStep1 = 0.05;
var brightnessStep2 = 0.15;
var lightColorCount = 5;
var darkColorCount = 4;
var darkColorMap = [{
  index: 7,
  opacity: 0.15
}, {
  index: 6,
  opacity: 0.25
}, {
  index: 5,
  opacity: 0.3
}, {
  index: 5,
  opacity: 0.45
}, {
  index: 5,
  opacity: 0.65
}, {
  index: 5,
  opacity: 0.85
}, {
  index: 4,
  opacity: 0.9
}, {
  index: 3,
  opacity: 0.95
}, {
  index: 2,
  opacity: 0.97
}, {
  index: 1,
  opacity: 0.98
}];
function toHsv(_ref) {
  var r = _ref.r, g = _ref.g, b = _ref.b;
  var hsv = rgbToHsv(r, g, b);
  return {
    h: hsv.h * 360,
    s: hsv.s,
    v: hsv.v
  };
}
function toHex(_ref2) {
  var r = _ref2.r, g = _ref2.g, b = _ref2.b;
  return "#".concat(rgbToHex(r, g, b, false));
}
function mix(rgb1, rgb2, amount) {
  var p = amount / 100;
  var rgb = {
    r: (rgb2.r - rgb1.r) * p + rgb1.r,
    g: (rgb2.g - rgb1.g) * p + rgb1.g,
    b: (rgb2.b - rgb1.b) * p + rgb1.b
  };
  return rgb;
}
function getHue(hsv, i, light) {
  var hue;
  if (Math.round(hsv.h) >= 60 && Math.round(hsv.h) <= 240) {
    hue = light ? Math.round(hsv.h) - hueStep * i : Math.round(hsv.h) + hueStep * i;
  } else {
    hue = light ? Math.round(hsv.h) + hueStep * i : Math.round(hsv.h) - hueStep * i;
  }
  if (hue < 0) {
    hue += 360;
  } else if (hue >= 360) {
    hue -= 360;
  }
  return hue;
}
function getSaturation(hsv, i, light) {
  if (hsv.h === 0 && hsv.s === 0) {
    return hsv.s;
  }
  var saturation;
  if (light) {
    saturation = hsv.s - saturationStep * i;
  } else if (i === darkColorCount) {
    saturation = hsv.s + saturationStep;
  } else {
    saturation = hsv.s + saturationStep2 * i;
  }
  if (saturation > 1) {
    saturation = 1;
  }
  if (light && i === lightColorCount && saturation > 0.1) {
    saturation = 0.1;
  }
  if (saturation < 0.06) {
    saturation = 0.06;
  }
  return Number(saturation.toFixed(2));
}
function getValue(hsv, i, light) {
  var value;
  if (light) {
    value = hsv.v + brightnessStep1 * i;
  } else {
    value = hsv.v - brightnessStep2 * i;
  }
  if (value > 1) {
    value = 1;
  }
  return Number(value.toFixed(2));
}
function generate(color) {
  var opts = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  var patterns = [];
  var pColor = inputToRGB(color);
  for (var i = lightColorCount; i > 0; i -= 1) {
    var hsv = toHsv(pColor);
    var colorString = toHex(inputToRGB({
      h: getHue(hsv, i, true),
      s: getSaturation(hsv, i, true),
      v: getValue(hsv, i, true)
    }));
    patterns.push(colorString);
  }
  patterns.push(toHex(pColor));
  for (var _i = 1; _i <= darkColorCount; _i += 1) {
    var _hsv = toHsv(pColor);
    var _colorString = toHex(inputToRGB({
      h: getHue(_hsv, _i),
      s: getSaturation(_hsv, _i),
      v: getValue(_hsv, _i)
    }));
    patterns.push(_colorString);
  }
  if (opts.theme === "dark") {
    return darkColorMap.map(function(_ref3) {
      var index = _ref3.index, opacity = _ref3.opacity;
      var darkColorString = toHex(mix(inputToRGB(opts.backgroundColor || "#141414"), inputToRGB(patterns[index]), opacity * 100));
      return darkColorString;
    });
  }
  return patterns;
}

// node_modules/@ant-design/colors/es/index.js
var presetPrimaryColors = {
  red: "#F5222D",
  volcano: "#FA541C",
  orange: "#FA8C16",
  gold: "#FAAD14",
  yellow: "#FADB14",
  lime: "#A0D911",
  green: "#52C41A",
  cyan: "#13C2C2",
  blue: "#1677FF",
  geekblue: "#2F54EB",
  purple: "#722ED1",
  magenta: "#EB2F96",
  grey: "#666666"
};
var presetPalettes = {};
var presetDarkPalettes = {};
Object.keys(presetPrimaryColors).forEach(function(key) {
  presetPalettes[key] = generate(presetPrimaryColors[key]);
  presetPalettes[key].primary = presetPalettes[key][5];
  presetDarkPalettes[key] = generate(presetPrimaryColors[key], {
    theme: "dark",
    backgroundColor: "#141414"
  });
  presetDarkPalettes[key].primary = presetDarkPalettes[key][5];
});
var red = presetPalettes.red;
var volcano = presetPalettes.volcano;
var gold = presetPalettes.gold;
var orange = presetPalettes.orange;
var yellow = presetPalettes.yellow;
var lime = presetPalettes.lime;
var green = presetPalettes.green;
var cyan = presetPalettes.cyan;
var blue = presetPalettes.blue;
var geekblue = presetPalettes.geekblue;
var purple = presetPalettes.purple;
var magenta = presetPalettes.magenta;
var grey = presetPalettes.grey;
var gray = presetPalettes.grey;

// node_modules/@ant-design/icons-angular/fesm2022/ant-design-icons-angular.mjs
var ANT_ICON_ANGULAR_CONSOLE_PREFIX = "[@ant-design/icons-angular]:";
function error(message) {
  console.error(`${ANT_ICON_ANGULAR_CONSOLE_PREFIX} ${message}.`);
}
function warn2(message) {
  if (isDevMode()) {
    console.warn(`${ANT_ICON_ANGULAR_CONSOLE_PREFIX} ${message}.`);
  }
}
function getSecondaryColor(primaryColor) {
  return generate(primaryColor)[0];
}
function withSuffix(name2, theme) {
  switch (theme) {
    case "fill":
      return `${name2}-fill`;
    case "outline":
      return `${name2}-o`;
    case "twotone":
      return `${name2}-twotone`;
    case void 0:
      return name2;
    default:
      throw new Error(`${ANT_ICON_ANGULAR_CONSOLE_PREFIX}Theme "${theme}" is not a recognized theme!`);
  }
}
function withSuffixAndColor(name2, theme, pri, sec) {
  return `${withSuffix(name2, theme)}-${pri}-${sec}`;
}
function mapAbbrToTheme(abbr) {
  return abbr === "o" ? "outline" : abbr;
}
function alreadyHasAThemeSuffix(name2) {
  return name2.endsWith("-fill") || name2.endsWith("-o") || name2.endsWith("-twotone");
}
function isIconDefinition(target) {
  return typeof target === "object" && typeof target.name === "string" && (typeof target.theme === "string" || target.theme === void 0) && typeof target.icon === "string";
}
function getIconDefinitionFromAbbr(str) {
  const arr = str.split("-");
  const theme = mapAbbrToTheme(arr.splice(arr.length - 1, 1)[0]);
  const name2 = arr.join("-");
  return {
    name: name2,
    theme,
    icon: ""
  };
}
function cloneSVG(svg) {
  return svg.cloneNode(true);
}
function replaceFillColor(raw) {
  return raw.replace(/['"]#333['"]/g, '"primaryColor"').replace(/['"]#E6E6E6['"]/g, '"secondaryColor"').replace(/['"]#D9D9D9['"]/g, '"secondaryColor"').replace(/['"]#D8D8D8['"]/g, '"secondaryColor"');
}
function getNameAndNamespace(type) {
  const split = type.split(":");
  switch (split.length) {
    case 1:
      return [type, ""];
    case 2:
      return [split[1], split[0]];
    default:
      throw new Error(`${ANT_ICON_ANGULAR_CONSOLE_PREFIX}The icon type ${type} is not valid!`);
  }
}
function hasNamespace(type) {
  return getNameAndNamespace(type)[1] !== "";
}
function NameSpaceIsNotSpecifyError() {
  return new Error(`${ANT_ICON_ANGULAR_CONSOLE_PREFIX}Type should have a namespace. Try "namespace:${name}".`);
}
function IconNotFoundError(icon) {
  return new Error(`${ANT_ICON_ANGULAR_CONSOLE_PREFIX}the icon ${icon} does not exist or is not registered.`);
}
function HttpModuleNotImport() {
  error(`you need to import "HttpClientModule" to use dynamic importing.`);
  return null;
}
function UrlNotSafeError(url) {
  return new Error(`${ANT_ICON_ANGULAR_CONSOLE_PREFIX}The url "${url}" is unsafe.`);
}
function SVGTagNotFoundError() {
  return new Error(`${ANT_ICON_ANGULAR_CONSOLE_PREFIX}<svg> tag not found.`);
}
function DynamicLoadingTimeoutError() {
  return new Error(`${ANT_ICON_ANGULAR_CONSOLE_PREFIX}Importing timeout error.`);
}
var JSONP_HANDLER_NAME = "__ant_icon_load";
var ANT_ICONS = new InjectionToken("ant_icons");
var _IconService = class _IconService {
  set twoToneColor({
    primaryColor,
    secondaryColor
  }) {
    this._twoToneColorPalette.primaryColor = primaryColor;
    this._twoToneColorPalette.secondaryColor = secondaryColor || getSecondaryColor(primaryColor);
  }
  get twoToneColor() {
    return __spreadValues({}, this._twoToneColorPalette);
  }
  /**
   * Disable dynamic loading (support static loading only).
   */
  get _disableDynamicLoading() {
    return false;
  }
  constructor(_rendererFactory, _handler, _document, sanitizer, _antIcons) {
    this._rendererFactory = _rendererFactory;
    this._handler = _handler;
    this._document = _document;
    this.sanitizer = sanitizer;
    this._antIcons = _antIcons;
    this.defaultTheme = "outline";
    this._svgDefinitions = /* @__PURE__ */ new Map();
    this._svgRenderedDefinitions = /* @__PURE__ */ new Map();
    this._inProgressFetches = /* @__PURE__ */ new Map();
    this._assetsUrlRoot = "";
    this._twoToneColorPalette = {
      primaryColor: "#333333",
      secondaryColor: "#E6E6E6"
    };
    this._enableJsonpLoading = false;
    this._jsonpIconLoad$ = new Subject();
    this._renderer = this._rendererFactory.createRenderer(null, null);
    if (this._handler) {
      this._http = new HttpClient(this._handler);
    }
    if (this._antIcons) {
      this.addIcon(...this._antIcons);
    }
  }
  /**
   * Call this method to switch to jsonp like loading.
   */
  useJsonpLoading() {
    if (!this._enableJsonpLoading) {
      this._enableJsonpLoading = true;
      window[JSONP_HANDLER_NAME] = (icon) => {
        this._jsonpIconLoad$.next(icon);
      };
    } else {
      warn2("You are already using jsonp loading.");
    }
  }
  /**
   * Change the prefix of the inline svg resources, so they could be deployed elsewhere, like CDN.
   * @param prefix
   */
  changeAssetsSource(prefix) {
    this._assetsUrlRoot = prefix.endsWith("/") ? prefix : prefix + "/";
  }
  /**
   * Add icons provided by ant design.
   * @param icons
   */
  addIcon(...icons) {
    icons.forEach((icon) => {
      this._svgDefinitions.set(withSuffix(icon.name, icon.theme), icon);
    });
  }
  /**
   * Register an icon. Namespace is required.
   * @param type
   * @param literal
   */
  addIconLiteral(type, literal) {
    const [_, namespace] = getNameAndNamespace(type);
    if (!namespace) {
      throw NameSpaceIsNotSpecifyError();
    }
    this.addIcon({
      name: type,
      icon: literal
    });
  }
  /**
   * Remove all cache.
   */
  clear() {
    this._svgDefinitions.clear();
    this._svgRenderedDefinitions.clear();
  }
  /**
   * Get a rendered `SVGElement`.
   * @param icon
   * @param twoToneColor
   */
  getRenderedContent(icon, twoToneColor) {
    const definition = isIconDefinition(icon) ? icon : this._svgDefinitions.get(icon) || null;
    if (!definition && this._disableDynamicLoading) {
      throw IconNotFoundError(icon);
    }
    const $iconDefinition = definition ? of(definition) : this._loadIconDynamically(icon);
    return $iconDefinition.pipe(map((i) => {
      if (!i) {
        throw IconNotFoundError(icon);
      }
      return this._loadSVGFromCacheOrCreateNew(i, twoToneColor);
    }));
  }
  getCachedIcons() {
    return this._svgDefinitions;
  }
  /**
   * Get raw svg and assemble a `IconDefinition` object.
   * @param type
   */
  _loadIconDynamically(type) {
    if (!this._http && !this._enableJsonpLoading) {
      return of(HttpModuleNotImport());
    }
    let inProgress = this._inProgressFetches.get(type);
    if (!inProgress) {
      const [name2, namespace] = getNameAndNamespace(type);
      const icon = namespace ? {
        name: type,
        icon: ""
      } : getIconDefinitionFromAbbr(name2);
      const suffix = this._enableJsonpLoading ? ".js" : ".svg";
      const url = (namespace ? `${this._assetsUrlRoot}assets/${namespace}/${name2}` : `${this._assetsUrlRoot}assets/${icon.theme}/${icon.name}`) + suffix;
      const safeUrl = this.sanitizer.sanitize(SecurityContext.URL, url);
      if (!safeUrl) {
        throw UrlNotSafeError(url);
      }
      const source = !this._enableJsonpLoading ? this._http.get(safeUrl, {
        responseType: "text"
      }).pipe(map((literal) => __spreadProps(__spreadValues({}, icon), {
        icon: literal
      }))) : this._loadIconDynamicallyWithJsonp(icon, safeUrl);
      inProgress = source.pipe(tap((definition) => this.addIcon(definition)), finalize(() => this._inProgressFetches.delete(type)), catchError(() => of(null)), share());
      this._inProgressFetches.set(type, inProgress);
    }
    return inProgress;
  }
  _loadIconDynamicallyWithJsonp(icon, url) {
    return new Observable((subscriber) => {
      const loader = this._document.createElement("script");
      const timer = setTimeout(() => {
        clean();
        subscriber.error(DynamicLoadingTimeoutError());
      }, 6e3);
      loader.src = url;
      function clean() {
        loader.parentNode.removeChild(loader);
        clearTimeout(timer);
      }
      this._document.body.appendChild(loader);
      this._jsonpIconLoad$.pipe(filter((i) => i.name === icon.name && i.theme === icon.theme), take(1)).subscribe((i) => {
        subscriber.next(i);
        clean();
      });
    });
  }
  /**
   * Render a new `SVGElement` for a given `IconDefinition`, or make a copy from cache.
   * @param icon
   * @param twoToneColor
   */
  _loadSVGFromCacheOrCreateNew(icon, twoToneColor) {
    let svg;
    const pri = twoToneColor || this._twoToneColorPalette.primaryColor;
    const sec = getSecondaryColor(pri) || this._twoToneColorPalette.secondaryColor;
    const key = icon.theme === "twotone" ? withSuffixAndColor(icon.name, icon.theme, pri, sec) : icon.theme === void 0 ? icon.name : withSuffix(icon.name, icon.theme);
    const cached = this._svgRenderedDefinitions.get(key);
    if (cached) {
      svg = cached.icon;
    } else {
      svg = this._setSVGAttribute(this._colorizeSVGIcon(
        // Icons provided by ant design should be refined to remove preset colors.
        this._createSVGElementFromString(hasNamespace(icon.name) ? icon.icon : replaceFillColor(icon.icon)),
        icon.theme === "twotone",
        pri,
        sec
      ));
      this._svgRenderedDefinitions.set(key, __spreadProps(__spreadValues({}, icon), {
        icon: svg
      }));
    }
    return cloneSVG(svg);
  }
  _createSVGElementFromString(str) {
    const div = this._document.createElement("div");
    div.innerHTML = str;
    const svg = div.querySelector("svg");
    if (!svg) {
      throw SVGTagNotFoundError;
    }
    return svg;
  }
  _setSVGAttribute(svg) {
    this._renderer.setAttribute(svg, "width", "1em");
    this._renderer.setAttribute(svg, "height", "1em");
    return svg;
  }
  _colorizeSVGIcon(svg, twotone, pri, sec) {
    if (twotone) {
      const children = svg.childNodes;
      const length = children.length;
      for (let i = 0; i < length; i++) {
        const child = children[i];
        if (child.getAttribute("fill") === "secondaryColor") {
          this._renderer.setAttribute(child, "fill", sec);
        } else {
          this._renderer.setAttribute(child, "fill", pri);
        }
      }
    }
    this._renderer.setAttribute(svg, "fill", "currentColor");
    return svg;
  }
};
_IconService.ɵfac = function IconService_Factory(t) {
  return new (t || _IconService)(ɵɵinject(RendererFactory2), ɵɵinject(HttpBackend, 8), ɵɵinject(DOCUMENT, 8), ɵɵinject(DomSanitizer), ɵɵinject(ANT_ICONS, 8));
};
_IconService.ɵprov = ɵɵdefineInjectable({
  token: _IconService,
  factory: _IconService.ɵfac
});
var IconService = _IconService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IconService, [{
    type: Injectable
  }], () => [{
    type: RendererFactory2
  }, {
    type: HttpBackend,
    decorators: [{
      type: Optional
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: DomSanitizer
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [ANT_ICONS]
    }]
  }], null);
})();
function checkMeta(prev, after) {
  return prev.type === after.type && prev.theme === after.theme && prev.twoToneColor === after.twoToneColor;
}
var _IconDirective = class _IconDirective {
  constructor(_iconService, _elementRef, _renderer) {
    this._iconService = _iconService;
    this._elementRef = _elementRef;
    this._renderer = _renderer;
  }
  ngOnChanges(changes) {
    if (changes.type || changes.theme || changes.twoToneColor) {
      this._changeIcon();
    }
  }
  /**
   * Render a new icon in the current element. Remove the icon when `type` is falsy.
   */
  _changeIcon() {
    return new Promise((resolve) => {
      if (!this.type) {
        this._clearSVGElement();
        resolve(null);
        return;
      }
      const beforeMeta = this._getSelfRenderMeta();
      this._iconService.getRenderedContent(this._parseIconType(this.type, this.theme), this.twoToneColor).subscribe((svg) => {
        const afterMeta = this._getSelfRenderMeta();
        if (checkMeta(beforeMeta, afterMeta)) {
          this._setSVGElement(svg);
          resolve(svg);
        } else {
          resolve(null);
        }
      });
    });
  }
  _getSelfRenderMeta() {
    return {
      type: this.type,
      theme: this.theme,
      twoToneColor: this.twoToneColor
    };
  }
  /**
   * Parse a icon to the standard form, an `IconDefinition` or a string like 'account-book-fill` (with a theme suffixed).
   * If namespace is specified, ignore theme because it meaningless for users' icons.
   *
   * @param type
   * @param theme
   */
  _parseIconType(type, theme) {
    if (isIconDefinition(type)) {
      return type;
    } else {
      const [name2, namespace] = getNameAndNamespace(type);
      if (namespace) {
        return type;
      }
      if (alreadyHasAThemeSuffix(name2)) {
        if (!!theme) {
          warn2(`'type' ${name2} already gets a theme inside so 'theme' ${theme} would be ignored`);
        }
        return name2;
      } else {
        return withSuffix(name2, theme || this._iconService.defaultTheme);
      }
    }
  }
  _setSVGElement(svg) {
    this._clearSVGElement();
    this._renderer.appendChild(this._elementRef.nativeElement, svg);
  }
  _clearSVGElement() {
    const el = this._elementRef.nativeElement;
    const children = el.childNodes;
    const length = children.length;
    for (let i = length - 1; i >= 0; i--) {
      const child = children[i];
      if (child.tagName?.toLowerCase() === "svg") {
        this._renderer.removeChild(el, child);
      }
    }
  }
};
_IconDirective.ɵfac = function IconDirective_Factory(t) {
  return new (t || _IconDirective)(ɵɵdirectiveInject(IconService), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2));
};
_IconDirective.ɵdir = ɵɵdefineDirective({
  type: _IconDirective,
  selectors: [["", "antIcon", ""]],
  inputs: {
    type: "type",
    theme: "theme",
    twoToneColor: "twoToneColor"
  },
  features: [ɵɵNgOnChangesFeature]
});
var IconDirective = _IconDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IconDirective, [{
    type: Directive,
    args: [{
      selector: "[antIcon]"
    }]
  }], () => [{
    type: IconService
  }, {
    type: ElementRef
  }, {
    type: Renderer2
  }], {
    type: [{
      type: Input
    }],
    theme: [{
      type: Input
    }],
    twoToneColor: [{
      type: Input
    }]
  });
})();
var _IconModule = class _IconModule {
};
_IconModule.ɵfac = function IconModule_Factory(t) {
  return new (t || _IconModule)();
};
_IconModule.ɵmod = ɵɵdefineNgModule({
  type: _IconModule,
  declarations: [IconDirective],
  exports: [IconDirective]
});
_IconModule.ɵinj = ɵɵdefineInjector({
  providers: [IconService]
});
var IconModule = _IconModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IconModule, [{
    type: NgModule,
    args: [{
      exports: [IconDirective],
      declarations: [IconDirective],
      providers: [IconService]
    }]
  }], null, null);
})();

// node_modules/@ant-design/icons-angular/fesm2022/ant-design-icons-angular-icons.mjs
var BarsOutline = {
  name: "bars",
  theme: "outline",
  icon: '<svg viewBox="0 0 1024 1024" focusable="false"><path d="M912 192H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM104 228a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0z" /></svg>'
};
var CalendarOutline = {
  name: "calendar",
  theme: "outline",
  icon: '<svg viewBox="64 64 896 896" focusable="false"><path d="M880 184H712v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H384v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H144c-17.7 0-32 14.3-32 32v664c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V216c0-17.7-14.3-32-32-32zm-40 656H184V460h656v380zM184 392V256h128v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h256v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h128v136H184z" /></svg>'
};
var CaretDownFill = {
  name: "caret-down",
  theme: "fill",
  icon: '<svg viewBox="0 0 1024 1024" focusable="false"><path d="M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z" /></svg>'
};
var CaretUpFill = {
  name: "caret-up",
  theme: "fill",
  icon: '<svg viewBox="0 0 1024 1024" focusable="false"><path d="M858.9 689L530.5 308.2c-9.4-10.9-27.5-10.9-37 0L165.1 689c-12.2 14.2-1.2 35 18.5 35h656.8c19.7 0 30.7-20.8 18.5-35z" /></svg>'
};
var CheckCircleFill = {
  name: "check-circle",
  theme: "fill",
  icon: '<svg viewBox="64 64 896 896" focusable="false"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z" /></svg>'
};
var CheckCircleOutline = {
  name: "check-circle",
  theme: "outline",
  icon: '<svg viewBox="64 64 896 896" focusable="false"><path d="M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0051.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z" /><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" /></svg>'
};
var CheckOutline = {
  name: "check",
  theme: "outline",
  icon: '<svg viewBox="64 64 896 896" focusable="false"><path d="M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z" /></svg>'
};
var CaretDownOutline = {
  name: "caret-down",
  theme: "outline",
  icon: '<svg viewBox="0 0 1024 1024" focusable="false"><path d="M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z" /></svg>'
};
var CloseCircleFill = {
  name: "close-circle",
  theme: "fill",
  icon: '<svg fill-rule="evenodd" viewBox="64 64 896 896" focusable="false"><path d="M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64zm127.98 274.82h-.04l-.08.06L512 466.75 384.14 338.88c-.04-.05-.06-.06-.08-.06a.12.12 0 00-.07 0c-.03 0-.05.01-.09.05l-45.02 45.02a.2.2 0 00-.05.09.12.12 0 000 .07v.02a.27.27 0 00.06.06L466.75 512 338.88 639.86c-.05.04-.06.06-.06.08a.12.12 0 000 .07c0 .03.01.05.05.09l45.02 45.02a.2.2 0 00.09.05.12.12 0 00.07 0c.02 0 .04-.01.08-.05L512 557.25l127.86 127.87c.04.04.06.05.08.05a.12.12 0 00.07 0c.03 0 .05-.01.09-.05l45.02-45.02a.2.2 0 00.05-.09.12.12 0 000-.07v-.02a.27.27 0 00-.05-.06L557.25 512l127.87-127.86c.04-.04.05-.06.05-.08a.12.12 0 000-.07c0-.03-.01-.05-.05-.09l-45.02-45.02a.2.2 0 00-.09-.05.12.12 0 00-.07 0z" /></svg>'
};
var CloseCircleOutline = {
  name: "close-circle",
  theme: "outline",
  icon: '<svg fill-rule="evenodd" viewBox="64 64 896 896" focusable="false"><path d="M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64zm0 76c-205.4 0-372 166.6-372 372s166.6 372 372 372 372-166.6 372-372-166.6-372-372-372zm128.01 198.83c.03 0 .05.01.09.06l45.02 45.01a.2.2 0 01.05.09.12.12 0 010 .07c0 .02-.01.04-.05.08L557.25 512l127.87 127.86a.27.27 0 01.05.06v.02a.12.12 0 010 .07c0 .03-.01.05-.05.09l-45.02 45.02a.2.2 0 01-.09.05.12.12 0 01-.07 0c-.02 0-.04-.01-.08-.05L512 557.25 384.14 685.12c-.04.04-.06.05-.08.05a.12.12 0 01-.07 0c-.03 0-.05-.01-.09-.05l-45.02-45.02a.2.2 0 01-.05-.09.12.12 0 010-.07c0-.02.01-.04.06-.08L466.75 512 338.88 384.14a.27.27 0 01-.05-.06l-.01-.02a.12.12 0 010-.07c0-.03.01-.05.05-.09l45.02-45.02a.2.2 0 01.09-.05.12.12 0 01.07 0c.02 0 .04.01.08.06L512 466.75l127.86-127.86c.04-.05.06-.06.08-.06a.12.12 0 01.07 0z" /></svg>'
};
var ClockCircleOutline = {
  name: "clock-circle",
  theme: "outline",
  icon: '<svg viewBox="64 64 896 896" focusable="false"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" /><path d="M686.7 638.6L544.1 535.5V288c0-4.4-3.6-8-8-8H488c-4.4 0-8 3.6-8 8v275.4c0 2.6 1.2 5 3.3 6.5l165.4 120.6c3.6 2.6 8.6 1.8 11.2-1.7l28.6-39c2.6-3.7 1.8-8.7-1.8-11.2z" /></svg>'
};
var CloseOutline = {
  name: "close",
  theme: "outline",
  icon: '<svg fill-rule="evenodd" viewBox="64 64 896 896" focusable="false"><path d="M799.86 166.31c.02 0 .04.02.08.06l57.69 57.7c.04.03.05.05.06.08a.12.12 0 010 .06c0 .03-.02.05-.06.09L569.93 512l287.7 287.7c.04.04.05.06.06.09a.12.12 0 010 .07c0 .02-.02.04-.06.08l-57.7 57.69c-.03.04-.05.05-.07.06a.12.12 0 01-.07 0c-.03 0-.05-.02-.09-.06L512 569.93l-287.7 287.7c-.04.04-.06.05-.09.06a.12.12 0 01-.07 0c-.02 0-.04-.02-.08-.06l-57.69-57.7c-.04-.03-.05-.05-.06-.07a.12.12 0 010-.07c0-.03.02-.05.06-.09L454.07 512l-287.7-287.7c-.04-.04-.05-.06-.06-.09a.12.12 0 010-.07c0-.02.02-.04.06-.08l57.7-57.69c.03-.04.05-.05.07-.06a.12.12 0 01.07 0c.03 0 .05.02.09.06L512 454.07l287.7-287.7c.04-.04.06-.05.09-.06a.12.12 0 01.07 0z" /></svg>'
};
var CaretUpOutline = {
  name: "caret-up",
  theme: "outline",
  icon: '<svg viewBox="0 0 1024 1024" focusable="false"><path d="M858.9 689L530.5 308.2c-9.4-10.9-27.5-10.9-37 0L165.1 689c-12.2 14.2-1.2 35 18.5 35h656.8c19.7 0 30.7-20.8 18.5-35z" /></svg>'
};
var CopyOutline = {
  name: "copy",
  theme: "outline",
  icon: '<svg viewBox="64 64 896 896" focusable="false"><path d="M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z" /></svg>'
};
var DeleteOutline = {
  name: "delete",
  theme: "outline",
  icon: '<svg viewBox="64 64 896 896" focusable="false"><path d="M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z" /></svg>'
};
var DoubleLeftOutline = {
  name: "double-left",
  theme: "outline",
  icon: '<svg viewBox="64 64 896 896" focusable="false"><path d="M272.9 512l265.4-339.1c4.1-5.2.4-12.9-6.3-12.9h-77.3c-4.9 0-9.6 2.3-12.6 6.1L186.8 492.3a31.99 31.99 0 000 39.5l255.3 326.1c3 3.9 7.7 6.1 12.6 6.1H532c6.7 0 10.4-7.7 6.3-12.9L272.9 512zm304 0l265.4-339.1c4.1-5.2.4-12.9-6.3-12.9h-77.3c-4.9 0-9.6 2.3-12.6 6.1L490.8 492.3a31.99 31.99 0 000 39.5l255.3 326.1c3 3.9 7.7 6.1 12.6 6.1H836c6.7 0 10.4-7.7 6.3-12.9L576.9 512z" /></svg>'
};
var DoubleRightOutline = {
  name: "double-right",
  theme: "outline",
  icon: '<svg viewBox="64 64 896 896" focusable="false"><path d="M533.2 492.3L277.9 166.1c-3-3.9-7.7-6.1-12.6-6.1H188c-6.7 0-10.4 7.7-6.3 12.9L447.1 512 181.7 851.1A7.98 7.98 0 00188 864h77.3c4.9 0 9.6-2.3 12.6-6.1l255.3-326.1c9.1-11.7 9.1-27.9 0-39.5zm304 0L581.9 166.1c-3-3.9-7.7-6.1-12.6-6.1H492c-6.7 0-10.4 7.7-6.3 12.9L751.1 512 485.7 851.1A7.98 7.98 0 00492 864h77.3c4.9 0 9.6-2.3 12.6-6.1l255.3-326.1c9.1-11.7 9.1-27.9 0-39.5z" /></svg>'
};
var DownOutline = {
  name: "down",
  theme: "outline",
  icon: '<svg viewBox="64 64 896 896" focusable="false"><path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z" /></svg>'
};
var EditOutline = {
  name: "edit",
  theme: "outline",
  icon: '<svg viewBox="64 64 896 896" focusable="false"><path d="M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z" /></svg>'
};
var EllipsisOutline = {
  name: "ellipsis",
  theme: "outline",
  icon: '<svg viewBox="64 64 896 896" focusable="false"><path d="M176 511a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0z" /></svg>'
};
var ExclamationCircleOutline = {
  name: "exclamation-circle",
  theme: "outline",
  icon: '<svg viewBox="64 64 896 896" focusable="false"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" /><path d="M464 688a48 48 0 1096 0 48 48 0 10-96 0zm24-112h48c4.4 0 8-3.6 8-8V296c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8z" /></svg>'
};
var ExclamationCircleFill = {
  name: "exclamation-circle",
  theme: "fill",
  icon: '<svg viewBox="64 64 896 896" focusable="false"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z" /></svg>'
};
var FileFill = {
  name: "file",
  theme: "fill",
  icon: '<svg viewBox="64 64 896 896" focusable="false"><path d="M854.6 288.7c6 6 9.4 14.1 9.4 22.6V928c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32h424.7c8.5 0 16.7 3.4 22.7 9.4l215.2 215.3zM790.2 326L602 137.8V326h188.2z" /></svg>'
};
var FilterFill = {
  name: "filter",
  theme: "fill",
  icon: '<svg viewBox="64 64 896 896" focusable="false"><path d="M349 838c0 17.7 14.2 32 31.8 32h262.4c17.6 0 31.8-14.3 31.8-32V642H349v196zm531.1-684H143.9c-24.5 0-39.8 26.7-27.5 48l221.3 376h348.8l221.3-376c12.1-21.3-3.2-48-27.7-48z" /></svg>'
};
var InfoCircleOutline = {
  name: "info-circle",
  theme: "outline",
  icon: '<svg viewBox="64 64 896 896" focusable="false"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" /><path d="M464 336a48 48 0 1096 0 48 48 0 10-96 0zm72 112h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V456c0-4.4-3.6-8-8-8z" /></svg>'
};
var InfoCircleFill = {
  name: "info-circle",
  theme: "fill",
  icon: '<svg viewBox="64 64 896 896" focusable="false"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z" /></svg>'
};
var FileOutline = {
  name: "file",
  theme: "outline",
  icon: '<svg viewBox="64 64 896 896" focusable="false"><path d="M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM790.2 326H602V137.8L790.2 326zm1.8 562H232V136h302v216a42 42 0 0042 42h216v494z" /></svg>'
};
var LeftOutline = {
  name: "left",
  theme: "outline",
  icon: '<svg viewBox="64 64 896 896" focusable="false"><path d="M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z" /></svg>'
};
var LoadingOutline = {
  name: "loading",
  theme: "outline",
  icon: '<svg viewBox="0 0 1024 1024" focusable="false"><path d="M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z" /></svg>'
};
var EyeOutline = {
  name: "eye",
  theme: "outline",
  icon: '<svg viewBox="64 64 896 896" focusable="false"><path d="M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z" /></svg>'
};
var PaperClipOutline = {
  name: "paper-clip",
  theme: "outline",
  icon: '<svg viewBox="64 64 896 896" focusable="false"><path d="M779.3 196.6c-94.2-94.2-247.6-94.2-341.7 0l-261 260.8c-1.7 1.7-2.6 4-2.6 6.4s.9 4.7 2.6 6.4l36.9 36.9a9 9 0 0012.7 0l261-260.8c32.4-32.4 75.5-50.2 121.3-50.2s88.9 17.8 121.2 50.2c32.4 32.4 50.2 75.5 50.2 121.2 0 45.8-17.8 88.8-50.2 121.2l-266 265.9-43.1 43.1c-40.3 40.3-105.8 40.3-146.1 0-19.5-19.5-30.2-45.4-30.2-73s10.7-53.5 30.2-73l263.9-263.8c6.7-6.6 15.5-10.3 24.9-10.3h.1c9.4 0 18.1 3.7 24.7 10.3 6.7 6.7 10.3 15.5 10.3 24.9 0 9.3-3.7 18.1-10.3 24.7L372.4 653c-1.7 1.7-2.6 4-2.6 6.4s.9 4.7 2.6 6.4l36.9 36.9a9 9 0 0012.7 0l215.6-215.6c19.9-19.9 30.8-46.3 30.8-74.4s-11-54.6-30.8-74.4c-41.1-41.1-107.9-41-149 0L463 364 224.8 602.1A172.22 172.22 0 00174 724.8c0 46.3 18.1 89.8 50.8 122.5 33.9 33.8 78.3 50.7 122.7 50.7 44.4 0 88.8-16.9 122.6-50.7l309.2-309C824.8 492.7 850 432 850 367.5c.1-64.6-25.1-125.3-70.7-170.9z" /></svg>'
};
var QuestionCircleOutline = {
  name: "question-circle",
  theme: "outline",
  icon: '<svg viewBox="64 64 896 896" focusable="false"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" /><path d="M623.6 316.7C593.6 290.4 554 276 512 276s-81.6 14.5-111.6 40.7C369.2 344 352 380.7 352 420v7.6c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V420c0-44.1 43.1-80 96-80s96 35.9 96 80c0 31.1-22 59.6-56.1 72.7-21.2 8.1-39.2 22.3-52.1 40.9-13.1 19-19.9 41.8-19.9 64.9V620c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-22.7a48.3 48.3 0 0130.9-44.8c59-22.7 97.1-74.7 97.1-132.5.1-39.3-17.1-76-48.3-103.3zM472 732a40 40 0 1080 0 40 40 0 10-80 0z" /></svg>'
};
var RightOutline = {
  name: "right",
  theme: "outline",
  icon: '<svg viewBox="64 64 896 896" focusable="false"><path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z" /></svg>'
};
var RotateLeftOutline = {
  name: "rotate-left",
  theme: "outline",
  icon: '<svg viewBox="64 64 896 896" focusable="false"><defs><style /></defs><path d="M672 418H144c-17.7 0-32 14.3-32 32v414c0 17.7 14.3 32 32 32h528c17.7 0 32-14.3 32-32V450c0-17.7-14.3-32-32-32zm-44 402H188V494h440v326z" /><path d="M819.3 328.5c-78.8-100.7-196-153.6-314.6-154.2l-.2-64c0-6.5-7.6-10.1-12.6-6.1l-128 101c-4 3.1-3.9 9.1 0 12.3L492 318.6c5.1 4 12.7.4 12.6-6.1v-63.9c12.9.1 25.9.9 38.8 2.5 42.1 5.2 82.1 18.2 119 38.7 38.1 21.2 71.2 49.7 98.4 84.3 27.1 34.7 46.7 73.7 58.1 115.8a325.95 325.95 0 016.5 140.9h74.9c14.8-103.6-11.3-213-81-302.3z" /></svg>'
};
var RotateRightOutline = {
  name: "rotate-right",
  theme: "outline",
  icon: '<svg viewBox="64 64 896 896" focusable="false"><defs><style /></defs><path d="M480.5 251.2c13-1.6 25.9-2.4 38.8-2.5v63.9c0 6.5 7.5 10.1 12.6 6.1L660 217.6c4-3.2 4-9.2 0-12.3l-128-101c-5.1-4-12.6-.4-12.6 6.1l-.2 64c-118.6.5-235.8 53.4-314.6 154.2A399.75 399.75 0 00123.5 631h74.9c-.9-5.3-1.7-10.7-2.4-16.1-5.1-42.1-2.1-84.1 8.9-124.8 11.4-42.2 31-81.1 58.1-115.8 27.2-34.7 60.3-63.2 98.4-84.3 37-20.6 76.9-33.6 119.1-38.8z" /><path d="M880 418H352c-17.7 0-32 14.3-32 32v414c0 17.7 14.3 32 32 32h528c17.7 0 32-14.3 32-32V450c0-17.7-14.3-32-32-32zm-44 402H396V494h440v326z" /></svg>'
};
var SearchOutline = {
  name: "search",
  theme: "outline",
  icon: '<svg viewBox="64 64 896 896" focusable="false"><path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z" /></svg>'
};
var StarFill = {
  name: "star",
  theme: "fill",
  icon: '<svg viewBox="64 64 896 896" focusable="false"><path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z" /></svg>'
};
var SwapRightOutline = {
  name: "swap-right",
  theme: "outline",
  icon: '<svg viewBox="0 0 1024 1024" focusable="false"><path d="M873.1 596.2l-164-208A32 32 0 00684 376h-64.8c-6.7 0-10.4 7.7-6.3 13l144.3 183H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h695.9c26.8 0 41.7-30.8 25.2-51.8z" /></svg>'
};
var UploadOutline = {
  name: "upload",
  theme: "outline",
  icon: '<svg viewBox="64 64 896 896" focusable="false"><path d="M400 317.7h73.9V656c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V317.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 163a8 8 0 00-12.6 0l-112 141.7c-4.1 5.3-.4 13 6.3 13zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z" /></svg>'
};
var UpOutline = {
  name: "up",
  theme: "outline",
  icon: '<svg viewBox="64 64 896 896" focusable="false"><path d="M890.5 755.3L537.9 269.2c-12.8-17.6-39-17.6-51.7 0L133.5 755.3A8 8 0 00140 768h75c5.1 0 9.9-2.5 12.9-6.6L512 369.8l284.1 391.6c3 4.1 7.8 6.6 12.9 6.6h75c6.5 0 10.3-7.4 6.5-12.7z" /></svg>'
};
var VerticalAlignTopOutline = {
  name: "vertical-align-top",
  theme: "outline",
  icon: '<svg viewBox="64 64 896 896" focusable="false"><path d="M859.9 168H164.1c-4.5 0-8.1 3.6-8.1 8v60c0 4.4 3.6 8 8.1 8h695.8c4.5 0 8.1-3.6 8.1-8v-60c0-4.4-3.6-8-8.1-8zM518.3 355a8 8 0 00-12.6 0l-112 141.7a7.98 7.98 0 006.3 12.9h73.9V848c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V509.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 355z" /></svg>'
};
var ZoomInOutline = {
  name: "zoom-in",
  theme: "outline",
  icon: '<svg viewBox="64 64 896 896" focusable="false"><path d="M637 443H519V309c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v134H325c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h118v134c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V519h118c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8zm284 424L775 721c122.1-148.9 113.6-369.5-26-509-148-148.1-388.4-148.1-537 0-148.1 148.6-148.1 389 0 537 139.5 139.6 360.1 148.1 509 26l146 146c3.2 2.8 8.3 2.8 11 0l43-43c2.8-2.7 2.8-7.8 0-11zM696 696c-118.8 118.7-311.2 118.7-430 0-118.7-118.8-118.7-311.2 0-430 118.8-118.7 311.2-118.7 430 0 118.7 118.8 118.7 311.2 0 430z" /></svg>'
};
var ZoomOutOutline = {
  name: "zoom-out",
  theme: "outline",
  icon: '<svg viewBox="64 64 896 896" focusable="false"><path d="M637 443H325c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h312c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8zm284 424L775 721c122.1-148.9 113.6-369.5-26-509-148-148.1-388.4-148.1-537 0-148.1 148.6-148.1 389 0 537 139.5 139.6 360.1 148.1 509 26l146 146c3.2 2.8 8.3 2.8 11 0l43-43c2.8-2.7 2.8-7.8 0-11zM696 696c-118.8 118.7-311.2 118.7-430 0-118.7-118.8-118.7-311.2 0-430 118.8-118.7 311.2-118.7 430 0 118.7 118.8 118.7 311.2 0 430z" /></svg>'
};

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-icon.mjs
var NZ_ICONS_USED_BY_ZORRO = [BarsOutline, CalendarOutline, CaretUpFill, CaretUpOutline, CaretDownFill, CaretDownOutline, CheckCircleFill, CheckCircleOutline, CheckOutline, ClockCircleOutline, CloseCircleOutline, CloseCircleFill, CloseOutline, CopyOutline, DeleteOutline, DoubleLeftOutline, DoubleRightOutline, DownOutline, EditOutline, EllipsisOutline, ExclamationCircleFill, ExclamationCircleOutline, EyeOutline, FileFill, FileOutline, FilterFill, InfoCircleFill, InfoCircleOutline, LeftOutline, LoadingOutline, PaperClipOutline, QuestionCircleOutline, RightOutline, RotateRightOutline, RotateLeftOutline, StarFill, SearchOutline, StarFill, UploadOutline, VerticalAlignTopOutline, UpOutline, SwapRightOutline, ZoomInOutline, ZoomOutOutline];
var NZ_ICONS = new InjectionToken("nz_icons");
var NZ_ICON_DEFAULT_TWOTONE_COLOR = new InjectionToken("nz_icon_default_twotone_color");
var DEFAULT_TWOTONE_COLOR = "#1890ff";
var _NzIconService = class _NzIconService extends IconService {
  get _disableDynamicLoading() {
    return !this.platform.isBrowser;
  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
      this.subscription = null;
    }
  }
  normalizeSvgElement(svg) {
    if (!svg.getAttribute("viewBox")) {
      this._renderer.setAttribute(svg, "viewBox", "0 0 1024 1024");
    }
    if (!svg.getAttribute("width") || !svg.getAttribute("height")) {
      this._renderer.setAttribute(svg, "width", "1em");
      this._renderer.setAttribute(svg, "height", "1em");
    }
    if (!svg.getAttribute("fill")) {
      this._renderer.setAttribute(svg, "fill", "currentColor");
    }
  }
  fetchFromIconfont(opt) {
    const {
      scriptUrl
    } = opt;
    if (this._document && !this.iconfontCache.has(scriptUrl)) {
      const script = this._renderer.createElement("script");
      this._renderer.setAttribute(script, "src", scriptUrl);
      this._renderer.setAttribute(script, "data-namespace", scriptUrl.replace(/^(https?|http):/g, ""));
      this._renderer.appendChild(this._document.body, script);
      this.iconfontCache.add(scriptUrl);
    }
  }
  createIconfontIcon(type) {
    return this._createSVGElementFromString(`<svg><use xlink:href="${type}"></svg>`);
  }
  constructor(rendererFactory, sanitizer, nzConfigService, platform, handler, _document, icons) {
    super(rendererFactory, handler, _document, sanitizer, [...NZ_ICONS_USED_BY_ZORRO, ...icons || []]);
    this.nzConfigService = nzConfigService;
    this.platform = platform;
    this.configUpdated$ = new Subject();
    this.iconfontCache = /* @__PURE__ */ new Set();
    this.subscription = null;
    this.onConfigChange();
    this.configDefaultTwotoneColor();
    this.configDefaultTheme();
  }
  onConfigChange() {
    this.subscription = this.nzConfigService.getConfigChangeEventForComponent("icon").subscribe(() => {
      this.configDefaultTwotoneColor();
      this.configDefaultTheme();
      this.configUpdated$.next();
    });
  }
  configDefaultTheme() {
    const iconConfig = this.getConfig();
    this.defaultTheme = iconConfig.nzTheme || "outline";
  }
  configDefaultTwotoneColor() {
    const iconConfig = this.getConfig();
    const defaultTwotoneColor = iconConfig.nzTwotoneColor || DEFAULT_TWOTONE_COLOR;
    let primaryColor = DEFAULT_TWOTONE_COLOR;
    if (defaultTwotoneColor) {
      if (defaultTwotoneColor.startsWith("#")) {
        primaryColor = defaultTwotoneColor;
      } else {
        warn("Twotone color must be a hex color!");
      }
    }
    this.twoToneColor = {
      primaryColor
    };
  }
  getConfig() {
    return this.nzConfigService.getConfigForComponent("icon") || {};
  }
};
_NzIconService.ɵfac = function NzIconService_Factory(t) {
  return new (t || _NzIconService)(ɵɵinject(RendererFactory2), ɵɵinject(DomSanitizer), ɵɵinject(NzConfigService), ɵɵinject(Platform), ɵɵinject(HttpBackend, 8), ɵɵinject(DOCUMENT, 8), ɵɵinject(NZ_ICONS, 8));
};
_NzIconService.ɵprov = ɵɵdefineInjectable({
  token: _NzIconService,
  factory: _NzIconService.ɵfac,
  providedIn: "root"
});
var NzIconService = _NzIconService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzIconService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: RendererFactory2
  }, {
    type: DomSanitizer
  }, {
    type: NzConfigService
  }, {
    type: Platform
  }, {
    type: HttpBackend,
    decorators: [{
      type: Optional
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [NZ_ICONS]
    }]
  }], null);
})();
var NZ_ICONS_PATCH = new InjectionToken("nz_icons_patch");
var _NzIconPatchService = class _NzIconPatchService {
  constructor(extraIcons, rootIconService) {
    this.extraIcons = extraIcons;
    this.rootIconService = rootIconService;
    this.patched = false;
  }
  doPatch() {
    if (this.patched) {
      return;
    }
    this.extraIcons.forEach((iconDefinition) => this.rootIconService.addIcon(iconDefinition));
    this.patched = true;
  }
};
_NzIconPatchService.ɵfac = function NzIconPatchService_Factory(t) {
  return new (t || _NzIconPatchService)(ɵɵinject(NZ_ICONS_PATCH, 2), ɵɵinject(NzIconService));
};
_NzIconPatchService.ɵprov = ɵɵdefineInjectable({
  token: _NzIconPatchService,
  factory: _NzIconPatchService.ɵfac
});
var NzIconPatchService = _NzIconPatchService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzIconPatchService, [{
    type: Injectable
  }], () => [{
    type: void 0,
    decorators: [{
      type: Self
    }, {
      type: Inject,
      args: [NZ_ICONS_PATCH]
    }]
  }, {
    type: NzIconService
  }], null);
})();
var _NzIconDirective = class _NzIconDirective extends IconDirective {
  set nzSpin(value) {
    this.spin = value;
  }
  set nzType(value) {
    this.type = value;
  }
  set nzTheme(value) {
    this.theme = value;
  }
  set nzTwotoneColor(value) {
    this.twoToneColor = value;
  }
  set nzIconfont(value) {
    this.iconfont = value;
  }
  constructor(ngZone, changeDetectorRef, elementRef, iconService, renderer, iconPatch) {
    super(iconService, elementRef, renderer);
    this.ngZone = ngZone;
    this.changeDetectorRef = changeDetectorRef;
    this.iconService = iconService;
    this.renderer = renderer;
    this.cacheClassName = null;
    this.nzRotate = 0;
    this.spin = false;
    this.destroy$ = new Subject();
    if (iconPatch) {
      iconPatch.doPatch();
    }
    this.el = elementRef.nativeElement;
  }
  ngOnChanges(changes) {
    const {
      nzType,
      nzTwotoneColor,
      nzSpin,
      nzTheme,
      nzRotate
    } = changes;
    if (nzType || nzTwotoneColor || nzSpin || nzTheme) {
      this.changeIcon2();
    } else if (nzRotate) {
      this.handleRotate(this.el.firstChild);
    } else {
      this._setSVGElement(this.iconService.createIconfontIcon(`#${this.iconfont}`));
    }
  }
  ngOnInit() {
    this.renderer.setAttribute(this.el, "class", `anticon ${this.el.className}`.trim());
  }
  /**
   * If custom content is provided, try to normalize SVG elements.
   */
  ngAfterContentChecked() {
    if (!this.type) {
      const children = this.el.children;
      let length = children.length;
      if (!this.type && children.length) {
        while (length--) {
          const child = children[length];
          if (child.tagName.toLowerCase() === "svg") {
            this.iconService.normalizeSvgElement(child);
          }
        }
      }
    }
  }
  ngOnDestroy() {
    this.destroy$.next();
  }
  /**
   * Replacement of `changeIcon` for more modifications.
   */
  changeIcon2() {
    this.setClassName();
    this.ngZone.runOutsideAngular(() => {
      from(this._changeIcon()).pipe(takeUntil(this.destroy$)).subscribe({
        next: (svgOrRemove) => {
          this.ngZone.run(() => {
            this.changeDetectorRef.detectChanges();
            if (svgOrRemove) {
              this.setSVGData(svgOrRemove);
              this.handleSpin(svgOrRemove);
              this.handleRotate(svgOrRemove);
            }
          });
        },
        error: warn
      });
    });
  }
  handleSpin(svg) {
    if (this.spin || this.type === "loading") {
      this.renderer.addClass(svg, "anticon-spin");
    } else {
      this.renderer.removeClass(svg, "anticon-spin");
    }
  }
  handleRotate(svg) {
    if (this.nzRotate) {
      this.renderer.setAttribute(svg, "style", `transform: rotate(${this.nzRotate}deg)`);
    } else {
      this.renderer.removeAttribute(svg, "style");
    }
  }
  setClassName() {
    if (this.cacheClassName) {
      this.renderer.removeClass(this.el, this.cacheClassName);
    }
    this.cacheClassName = `anticon-${this.type}`;
    this.renderer.addClass(this.el, this.cacheClassName);
  }
  setSVGData(svg) {
    this.renderer.setAttribute(svg, "data-icon", this.type);
    this.renderer.setAttribute(svg, "aria-hidden", "true");
  }
};
_NzIconDirective.ɵfac = function NzIconDirective_Factory(t) {
  return new (t || _NzIconDirective)(ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NzIconService), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(NzIconPatchService, 8));
};
_NzIconDirective.ɵdir = ɵɵdefineDirective({
  type: _NzIconDirective,
  selectors: [["", "nz-icon", ""]],
  hostVars: 2,
  hostBindings: function NzIconDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("anticon", true);
    }
  },
  inputs: {
    nzSpin: "nzSpin",
    nzRotate: "nzRotate",
    nzType: "nzType",
    nzTheme: "nzTheme",
    nzTwotoneColor: "nzTwotoneColor",
    nzIconfont: "nzIconfont"
  },
  exportAs: ["nzIcon"],
  standalone: true,
  features: [ɵɵInheritDefinitionFeature, ɵɵNgOnChangesFeature]
});
var NzIconDirective = _NzIconDirective;
__decorate([InputBoolean()], NzIconDirective.prototype, "nzSpin", null);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzIconDirective, [{
    type: Directive,
    args: [{
      selector: "[nz-icon]",
      exportAs: "nzIcon",
      host: {
        "[class.anticon]": "true"
      },
      standalone: true
    }]
  }], () => [{
    type: NgZone
  }, {
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NzIconService
  }, {
    type: Renderer2
  }, {
    type: NzIconPatchService,
    decorators: [{
      type: Optional
    }]
  }], {
    nzSpin: [{
      type: Input
    }],
    nzRotate: [{
      type: Input
    }],
    nzType: [{
      type: Input
    }],
    nzTheme: [{
      type: Input
    }],
    nzTwotoneColor: [{
      type: Input
    }],
    nzIconfont: [{
      type: Input
    }]
  });
})();
var _NzIconModule = class _NzIconModule {
  static forRoot(icons) {
    return {
      ngModule: _NzIconModule,
      providers: [{
        provide: NZ_ICONS,
        useValue: icons
      }]
    };
  }
  static forChild(icons) {
    return {
      ngModule: _NzIconModule,
      providers: [NzIconPatchService, {
        provide: NZ_ICONS_PATCH,
        useValue: icons
      }]
    };
  }
};
_NzIconModule.ɵfac = function NzIconModule_Factory(t) {
  return new (t || _NzIconModule)();
};
_NzIconModule.ɵmod = ɵɵdefineNgModule({
  type: _NzIconModule,
  imports: [NzIconDirective],
  exports: [NzIconDirective]
});
_NzIconModule.ɵinj = ɵɵdefineInjector({});
var NzIconModule = _NzIconModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzIconModule, [{
    type: NgModule,
    args: [{
      imports: [NzIconDirective],
      exports: [NzIconDirective]
    }]
  }], null, null);
})();

export {
  NZ_ICONS_USED_BY_ZORRO,
  NZ_ICONS,
  NZ_ICON_DEFAULT_TWOTONE_COLOR,
  DEFAULT_TWOTONE_COLOR,
  NzIconService,
  NZ_ICONS_PATCH,
  NzIconPatchService,
  NzIconDirective,
  NzIconModule
};
//# sourceMappingURL=chunk-X43JKLZC.js.map
