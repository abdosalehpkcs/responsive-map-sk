"use strict";
(self["webpackChunkresponsive_maps"] = self["webpackChunkresponsive_maps"] || []).push([["main"],{

/***/ 6401:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _services_navigator_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/navigator.service */ 1136);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 5879);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 5187);
/* harmony import */ var _leaflet_map_leaflet_map_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./leaflet-map/leaflet-map.component */ 451);
/* harmony import */ var _filter_filter_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filter/filter.component */ 8124);
/* harmony import */ var _search_component_search_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./search-component/search.component */ 5873);








class AppComponent {
  constructor(elementRef, renderer, nav) {
    this.elementRef = elementRef;
    this.renderer = renderer;
    this.nav = nav;
  }
  ngOnInit() {
    const element = this.elementRef.nativeElement;
    this.renderer.listen(element, 'click', event => {
      const clickedElement = event.target;
      if (clickedElement.tagName === 'BUTTON' && clickedElement.id === 'navigateButton') {
        const latitude = clickedElement.getAttribute('latitude');
        const longitude = clickedElement.getAttribute('longitude');
        this.nav.emitEvent('navigate', [latitude, longitude]);
      }
    });
  }
  receiveMap(map) {
    this.map = map;
  }
  receiveZoom(zoom) {
    this.zoom = zoom;
  }
  static #_ = this.ɵfac = function AppComponent_Factory(t) {
    return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_navigator_service__WEBPACK_IMPORTED_MODULE_0__.NavigatorService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["app-root"]],
    decls: 5,
    vars: 0,
    consts: [[1, "fs-container"], ["id", "main-map", 3, "map$", "zoom$"]],
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-search");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 0)(2, "app-leaflet-map", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("map$", function AppComponent_Template_app_leaflet_map_map__2_listener($event) {
          return ctx.receiveMap($event);
        })("zoom$", function AppComponent_Template_app_leaflet_map_zoom__2_listener($event) {
          return ctx.receiveZoom($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "app-filter")(4, "router-outlet");
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterOutlet, _leaflet_map_leaflet_map_component__WEBPACK_IMPORTED_MODULE_1__.LeafletMapComponent, _filter_filter_component__WEBPACK_IMPORTED_MODULE_2__.FilterComponent, _search_component_search_component__WEBPACK_IMPORTED_MODULE_3__.SearchComponent],
    styles: ["p[_ngcontent-%COMP%] {\n  font-family: Lato;\n}\n\n.fs-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0px;\n  left: 0px;\n}\n\n.button-style[_ngcontent-%COMP%] {\n  font-size: 1em;\n  margin-bottom: 1%;\n  padding: 0.5em;\n  text-align: center;\n  width: 100%;\n}\n\n.button-style[_ngcontent-%COMP%]:hover {\n  background-color: #e0e0e0;\n}"]
  });
}

/***/ }),

/***/ 8629:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule),
/* harmony export */   initializeApp: () => (/* binding */ initializeApp)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 5879);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ 6593);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ 2931);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 5187);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 6401);
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.routes */ 2016);
/* harmony import */ var _leaflet_map_leaflet_map_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./leaflet-map/leaflet-map.component */ 451);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 9862);
/* harmony import */ var _services_csv_reader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/csv-reader.service */ 2944);
/* harmony import */ var _filter_filter_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./filter/filter.component */ 8124);
/* harmony import */ var _search_component_search_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./search-component/search.component */ 5873);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 6223);
/* harmony import */ var _asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @asymmetrik/ngx-leaflet */ 2150);















function initializeApp(csvReaderService) {
  return () => csvReaderService.getCsvData();
}
class AppModule {
  static #_ = this.ɵfac = function AppModule_Factory(t) {
    return new (t || AppModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
    type: AppModule,
    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent]
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
    providers: [{
      provide: _angular_core__WEBPACK_IMPORTED_MODULE_6__.APP_INITIALIZER,
      useFactory: initializeApp,
      deps: [_services_csv_reader_service__WEBPACK_IMPORTED_MODULE_3__.CsvReaderService],
      multi: true
    }],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forRoot(_app_routes__WEBPACK_IMPORTED_MODULE_1__.appRoutes, {
      initialNavigation: 'enabledBlocking'
    }), _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClientModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__.BrowserAnimationsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule, _asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_12__.LeafletModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent, _leaflet_map_leaflet_map_component__WEBPACK_IMPORTED_MODULE_2__.LeafletMapComponent, _filter_filter_component__WEBPACK_IMPORTED_MODULE_4__.FilterComponent, _search_component_search_component__WEBPACK_IMPORTED_MODULE_5__.SearchComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClientModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__.BrowserAnimationsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule, _asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_12__.LeafletModule],
    exports: [_leaflet_map_leaflet_map_component__WEBPACK_IMPORTED_MODULE_2__.LeafletMapComponent]
  });
})();

/***/ }),

/***/ 2016:
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   appRoutes: () => (/* binding */ appRoutes)
/* harmony export */ });
const appRoutes = [];

/***/ }),

/***/ 8124:
/*!********************************************!*\
  !*** ./src/app/filter/filter.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FilterComponent: () => (/* binding */ FilterComponent)
/* harmony export */ });
/* harmony import */ var _services_csv_reader_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/csv-reader.service */ 2944);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/animations */ 6825);
/* harmony import */ var _envs_env_prod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../envs/env.prod */ 8086);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 5879);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6814);






function FilterComponent_button_5_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Deselect All");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
}
function FilterComponent_button_5_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Zru\u0161i\u0165 v\u00FDber");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
}
function FilterComponent_button_5_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\u0421\u043A\u0430\u0441\u0443\u0432\u0430\u0442\u0438 \u0432\u0438\u0431\u0456\u0440");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
}
function FilterComponent_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FilterComponent_button_5_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r9.markAs(false));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, FilterComponent_button_5_ng_container_1_Template, 2, 0, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, FilterComponent_button_5_ng_container_2_Template, 2, 0, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, FilterComponent_button_5_ng_container_3_Template, 2, 0, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.language === "en");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.language === "da");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.language === "uk");
  }
}
function FilterComponent_button_6_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Select All");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
}
function FilterComponent_button_6_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Vybra\u0165 v\u0161etko");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
}
function FilterComponent_button_6_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\u0412\u0438\u0431\u0440\u0430\u0442\u0438 \u0432\u0441\u0456");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
}
function FilterComponent_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FilterComponent_button_6_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r15);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r14.markAs(true));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, FilterComponent_button_6_ng_container_1_Template, 2, 0, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, FilterComponent_button_6_ng_container_2_Template, 2, 0, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, FilterComponent_button_6_ng_container_3_Template, 2, 0, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.language === "en");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.language === "da");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.language === "uk");
  }
}
function FilterComponent_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Clear Navigation");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
}
function FilterComponent_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Zmaza\u0165 navig\u00E1ciu");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
}
function FilterComponent_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u0438 \u043D\u0430\u0432\u0456\u0433\u0430\u0446\u0456\u044E");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
}
function FilterComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 9)(1, "label")(2, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function FilterComponent_div_11_Template_input_change_2_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r19);
      const item_r16 = restoredCtx.$implicit;
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r18.onCheckboxChange(item_r16));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", item_r16.checked);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", item_r16.name, " ");
  }
}
const _c0 = function (a0, a1) {
  return {
    "fa-times": a0,
    "fa-filter": a1
  };
};
const _c1 = function (a0) {
  return {
    "hidden": a0
  };
};
class FilterComponent {
  toggleFilter() {
    this.isFilterVisible = !this.isFilterVisible;
  }
  constructor(csvReaderService) {
    this.csvReaderService = csvReaderService;
    this.language = _envs_env_prod__WEBPACK_IMPORTED_MODULE_1__.APP_CONFIG.language;
    this.uniqueCategoriesSet = [];
    this.isFilterVisible = true;
    this.setCategories();
  }
  setCategories() {
    const geoJSON = this.csvReaderService.csvToGeoJSON();
    this.getUniqueCategories(geoJSON);
  }
  getUniqueCategories(geoJSON) {
    geoJSON.features.forEach(feature => {
      if (!this.uniqueCategoriesSet.find(category => category.name === feature.properties.category)) this.uniqueCategoriesSet.push({
        name: feature.properties.category,
        checked: true
      });
    });
  }
  onCheckboxChange(item) {
    const foundItemIndex = this.uniqueCategoriesSet.findIndex(category => category.name === item.name);
    if (foundItemIndex !== -1) {
      this.uniqueCategoriesSet[foundItemIndex].checked = !this.uniqueCategoriesSet[foundItemIndex].checked;
    }
    this.csvReaderService.setCsvPredefinedPoints(this.uniqueCategoriesSet);
  }
  clearNavigation() {
    this.csvReaderService.clearNavigatation();
  }
  markAs(checked) {
    this.uniqueCategoriesSet.forEach(item => {
      item.checked = checked;
    });
    this.csvReaderService.setCsvPredefinedPoints(this.uniqueCategoriesSet);
  }
  allChecked() {
    return this.uniqueCategoriesSet.some(item => item.checked === false);
  }
  static #_ = this.ɵfac = function FilterComponent_Factory(t) {
    return new (t || FilterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_csv_reader_service__WEBPACK_IMPORTED_MODULE_0__.CsvReaderService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: FilterComponent,
    selectors: [["app-filter"]],
    decls: 12,
    vars: 13,
    consts: [[1, "filter-container"], [1, "toggle-button", 3, "click"], [1, "fa", 3, "ngClass"], [1, "filter-content", 3, "ngClass"], [1, "button-section"], ["class", "button-style", 3, "click", 4, "ngIf"], [1, "button-style", 3, "click"], [4, "ngIf"], ["class", "checkbox-list", 4, "ngFor", "ngForOf"], [1, "checkbox-list"], ["type", "checkbox", 1, "category-label", "category-checkbox", 3, "checked", "change"]],
    template: function FilterComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FilterComponent_Template_button_click_1_listener() {
          return ctx.toggleFilter();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3)(4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, FilterComponent_button_5_Template, 4, 3, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, FilterComponent_button_6_Template, 4, 3, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FilterComponent_Template_button_click_7_listener() {
          return ctx.clearNavigation();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, FilterComponent_ng_container_8_Template, 2, 0, "ng-container", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, FilterComponent_ng_container_9_Template, 2, 0, "ng-container", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, FilterComponent_ng_container_10_Template, 2, 0, "ng-container", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, FilterComponent_div_11_Template, 4, 2, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](8, _c0, !ctx.isFilterVisible, ctx.isFilterVisible));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](11, _c1, ctx.isFilterVisible));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.allChecked());
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.allChecked());
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.language === "en");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.language === "da");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.language === "uk");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.uniqueCategoriesSet);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf],
    styles: ["@charset \"UTF-8\";\n.filter-container[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 80px;\n  z-index: 1000;\n  margin-left: 3px;\n}\n\n.toggle-button[_ngcontent-%COMP%] {\n  font-size: 1em;\n  margin-bottom: 1%;\n  padding: 0.5em;\n  background-color: #fff;\n  border: 2px solid #ccc;\n  cursor: pointer;\n}\n\n.filter-content[_ngcontent-%COMP%] {\n  padding: 1%;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  background-color: #fff;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\n  max-width: 100%;\n  max-height: 90vh;\n  overflow-y: auto;\n  display: flex;\n  flex-direction: column;\n  transition: opacity 0.5s ease-in-out;\n  min-width: 250px;\n}\n\n.filter-content.hidden[_ngcontent-%COMP%] {\n  opacity: 0;\n  max-height: 0;\n  overflow: hidden;\n}\n\n.button-section[_ngcontent-%COMP%] {\n  background-color: rgb(255, 255, 255);\n}\n\n.checkbox-list[_ngcontent-%COMP%] {\n  padding: 2%;\n}\n\n.button-style[_ngcontent-%COMP%] {\n  font-size: 1em;\n  margin-bottom: 1%;\n  padding: 0.5em;\n  text-align: center;\n  width: 100%;\n}\n\n.button-style[_ngcontent-%COMP%]:hover {\n  background-color: #e0e0e0;\n}\n\n.category-checkbox[_ngcontent-%COMP%] {\n  margin-right: 10px;\n  appearance: none;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  width: 16px;\n  height: 16px;\n  border: 2px solid #ccc;\n  border-radius: 3px;\n  display: inline-block;\n  position: relative;\n  vertical-align: middle;\n  cursor: pointer;\n  outline: none;\n  margin-bottom: 5px;\n}\n\n.category-checkbox[_ngcontent-%COMP%]:checked {\n  background-color: #5cb85c;\n  border: 2px solid #5cb85c;\n}\n\n.category-checkbox[_ngcontent-%COMP%]:checked::after {\n  content: \"\u2713\";\n  font-size: 10px;\n  color: white;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.category-label[_ngcontent-%COMP%] {\n  font-size: 14px;\n}"],
    data: {
      animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.trigger)('fadeInOut', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.state)('in', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
        opacity: 1
      })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.state)('out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
        opacity: 0
      })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.transition)('void => *', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.animate)(300)), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.transition)('* => void', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.animate)(300))])]
    }
  });
}

/***/ }),

/***/ 451:
/*!******************************************************!*\
  !*** ./src/app/leaflet-map/leaflet-map.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LeafletMapComponent: () => (/* binding */ LeafletMapComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 5879);
/* harmony import */ var _services_csv_reader_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/csv-reader.service */ 2944);
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! leaflet */ 8433);
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @asymmetrik/ngx-leaflet */ 2150);






class LeafletMapComponent {
  constructor(csvReaderService) {
    this.csvReaderService = csvReaderService;
    this.map$ = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.zoom$ = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.options = {
      layers: [(0,leaflet__WEBPACK_IMPORTED_MODULE_1__.tileLayer)('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        opacity: 0.7,
        maxZoom: 20,
        detectRetina: true,
        attribution: '&copy; <a href="https://stadiamaps.com/" target="_blank">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/about" target="_blank">OpenStreetMap</a> contributors'
      })],
      zoom: 15,
      center: (0,leaflet__WEBPACK_IMPORTED_MODULE_1__.latLng)(48.148598, 17.107748)
    };
  }
  ngOnDestroy() {
    this.map?.clearAllEventListeners();
    this.map?.remove();
  }
  onMapReady(map) {
    this.map = map;
    this.map$.emit(map);
    this.zoom = map.getZoom();
    this.zoom$.emit(this.zoom);
    this.csvReaderService.map = this.map;
    this.csvReaderService.setCurrentLocation();
    this.csvReaderService.setCsvPredefinedPoints();
  }
  onMapZoomEnd(e) {
    this.zoom = e.target.getZoom();
    this.zoom$.emit(this.zoom);
  }
  static #_ = this.ɵfac = function LeafletMapComponent_Factory(t) {
    return new (t || LeafletMapComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_csv_reader_service__WEBPACK_IMPORTED_MODULE_0__.CsvReaderService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: LeafletMapComponent,
    selectors: [["app-leaflet-map"]],
    inputs: {
      options: "options"
    },
    outputs: {
      map$: "map$",
      zoom$: "zoom$"
    },
    decls: 1,
    vars: 1,
    consts: [["leaflet", "", 1, "map-container", 3, "leafletOptions", "leafletMapReady", "leafletMapZoomEnd"]],
    template: function LeafletMapComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("leafletMapReady", function LeafletMapComponent_Template_div_leafletMapReady_0_listener($event) {
          return ctx.onMapReady($event);
        })("leafletMapZoomEnd", function LeafletMapComponent_Template_div_leafletMapZoomEnd_0_listener($event) {
          return ctx.onMapZoomEnd($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("leafletOptions", ctx.options);
      }
    },
    dependencies: [_asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_3__.LeafletDirective],
    styles: [".map-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  position: inherit;\n}"]
  });
}

/***/ }),

/***/ 5873:
/*!******************************************************!*\
  !*** ./src/app/search-component/search.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SearchComponent: () => (/* binding */ SearchComponent)
/* harmony export */ });
/* harmony import */ var _services_csv_reader_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/csv-reader.service */ 2944);
/* harmony import */ var _envs_env_prod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../envs/env.prod */ 8086);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 5879);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6814);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 6223);






function SearchComponent_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "All");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
}
function SearchComponent_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "V\u0161etky");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
}
function SearchComponent_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\u0412\u0441\u0456");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
}
function SearchComponent_option_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const city_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", city_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](city_r5);
  }
}
function SearchComponent_ul_10_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("mousedown", function SearchComponent_ul_10_li_1_Template_li_mousedown_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9);
      const result_r7 = restoredCtx.$implicit;
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r8.navigateTo(result_r7));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const result_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", result_r7.name, " ");
  }
}
function SearchComponent_ul_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ul", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, SearchComponent_ul_10_li_1_Template, 2, 1, "li", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r4.searchResults);
  }
}
class SearchComponent {
  constructor(csvReaderService) {
    this.csvReaderService = csvReaderService;
    this.language = _envs_env_prod__WEBPACK_IMPORTED_MODULE_1__.APP_CONFIG.language;
    this.searchTerm = '';
    this.selectedOption = 'all';
    this.originalSearchResults = [];
    this.filteredByCitySearchResults = [];
    this.searchResults = [];
    this.cities = [];
  }
  ngOnInit() {
    this.originalSearchResults = this.csvReaderService.csvData;
    this.filteredByCitySearchResults = this.originalSearchResults;
    this.originalSearchResults.forEach(result => {
      const city = result.City;
      if (!this.cities.includes(city) && city !== '') {
        this.cities.push(city);
      }
    });
  }
  onSearchChange() {
    this.searchResults = this.searchTerm ? this.filteredByCitySearchResults.filter(result => result.name.toLowerCase().includes(this.searchTerm.toLowerCase())) : [];
  }
  onDropdownChange(event) {
    this.selectedOption = event.target.value;
    this.filteredByCitySearchResults = this.selectedOption.toLowerCase() === 'all' ? this.originalSearchResults : this.originalSearchResults.filter(result => result.City.toLowerCase().includes(this.selectedOption.toLowerCase()));
    this.onSearchChange();
    this.csvReaderService.setCsvPredefinedPointsByCity(this.selectedOption);
  }
  navigateTo(result) {
    this.csvReaderService.navigateTo(result.latitude, result.longitude);
  }
  clearSearchInput() {
    this.searchTerm = '';
  }
  static #_ = this.ɵfac = function SearchComponent_Factory(t) {
    return new (t || SearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_csv_reader_service__WEBPACK_IMPORTED_MODULE_0__.CsvReaderService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: SearchComponent,
    selectors: [["app-search"]],
    decls: 11,
    vars: 8,
    consts: [[1, "search-container"], [1, "select-dropdown", 3, "ngModel", "ngModelChange", "change"], ["value", "all", "selected", ""], [4, "ngIf"], [3, "value", 4, "ngFor", "ngForOf"], [1, "search-input-container"], ["id", "search-input", "type", "text", "autocomplete", "on", 1, "search-input", 3, "placeholder", "ngModel", "ngModelChange", "input"], [1, "fa", "fa-times-circle", "close-button", 3, "click"], ["class", "autocomplete-results", 4, "ngIf"], [3, "value"], [1, "autocomplete-results"], ["class", "result-item", 3, "mousedown", 4, "ngFor", "ngForOf"], [1, "result-item", 3, "mousedown"]],
    template: function SearchComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "select", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function SearchComponent_Template_select_ngModelChange_1_listener($event) {
          return ctx.selectedOption = $event;
        })("change", function SearchComponent_Template_select_change_1_listener($event) {
          return ctx.onDropdownChange($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "option", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, SearchComponent_ng_container_3_Template, 2, 0, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, SearchComponent_ng_container_4_Template, 2, 0, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, SearchComponent_ng_container_5_Template, 2, 0, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, SearchComponent_option_6_Template, 2, 2, "option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 5)(8, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function SearchComponent_Template_input_ngModelChange_8_listener($event) {
          return ctx.searchTerm = $event;
        })("input", function SearchComponent_Template_input_input_8_listener() {
          return ctx.onSearchChange();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SearchComponent_Template_i_click_9_listener() {
          return ctx.clearSearchInput();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, SearchComponent_ul_10_Template, 2, 1, "ul", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.selectedOption);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.language === "en");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.language === "da");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.language === "uk");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.cities);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("placeholder", ctx.language === "en" ? "Search..." : ctx.language === "da" ? "H\u013Eada\u0165..." : "\u041F\u043E\u0448\u0443\u043A...")("ngModel", ctx.searchTerm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.searchResults.length > 0);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel],
    styles: ["\n\n\n\n.search-container[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 8px;\n  transform: translateX(50%);\n  z-index: 1500;\n}\n@media (max-width: 576px) {\n  .search-container[_ngcontent-%COMP%] {\n    right: 42%;\n  }\n}\n@media (min-width: 577px) and (max-width: 768px) {\n  .search-container[_ngcontent-%COMP%] {\n    right: 42%;\n  }\n}\n@media (min-width: 769px) and (max-width: 992px) {\n  .search-container[_ngcontent-%COMP%] {\n    right: 60%;\n  }\n}\n@media (min-width: 993px) and (max-width: 1200px) {\n  .search-container[_ngcontent-%COMP%] {\n    right: 60%;\n  }\n}\n@media (min-width: 1201px) {\n  .search-container[_ngcontent-%COMP%] {\n    right: 40%;\n    transform: translateX(10%);\n  }\n}\n\n#search-input[_ngcontent-%COMP%] {\n  padding: 10px;\n  width: 300px;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n}\n\n.autocomplete-results[_ngcontent-%COMP%] {\n  position: absolute;\n  top: calc(100% + 5px); \n\n  left: 0;\n  max-height: 200px;\n  overflow-y: auto;\n  padding: 10px;\n  margin-top: 0px;\n  border-radius: 0 0 5px 5px;\n  background-color: #fff;\n  opacity: 0; \n\n  pointer-events: none; \n\n  transition: opacity 0.2s ease; \n\n}\n@media (max-width: 576px) {\n  .autocomplete-results[_ngcontent-%COMP%] {\n    width: calc(100% - 25px); \n\n  }\n}\n@media (min-width: 577px) and (max-width: 768px) {\n  .autocomplete-results[_ngcontent-%COMP%] {\n    width: calc(100% - 110px);\n  }\n}\n@media (min-width: 769px) and (max-width: 992px) {\n  .autocomplete-results[_ngcontent-%COMP%] {\n    width: calc(100% - 25px);\n  }\n}\n@media (min-width: 993px) and (max-width: 1200px) {\n  .autocomplete-results[_ngcontent-%COMP%] {\n    width: calc(100% - 110px);\n  }\n}\n@media (min-width: 1201px) {\n  .autocomplete-results[_ngcontent-%COMP%] {\n    width: calc(100% - 25px);\n  }\n}\n\n.search-container[_ngcontent-%COMP%]:focus-within   .autocomplete-results[_ngcontent-%COMP%] {\n  opacity: 1; \n\n  pointer-events: auto; \n\n}\n\n.autocomplete-results[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding: 10px;\n  list-style: none;\n  cursor: pointer;\n}\n\n.autocomplete-results[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  background-color: #f0f0f0;\n}\n\n.select-dropdown[_ngcontent-%COMP%] {\n  padding: 10px;\n  width: 321px;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  background-color: #fff;\n  color: #333;\n}\n\n.select-dropdown[_ngcontent-%COMP%]:hover {\n  border-color: #aaa;\n}\n\n\n\n.select-dropdown[_ngcontent-%COMP%]:after {\n  content: \"\\f078\"; \n\n  position: absolute;\n  top: 50%;\n  right: 10px;\n  transform: translateY(-50%);\n}\n\n\n\n.select-dropdown[_ngcontent-%COMP%]:focus {\n  border-color: #aaa;\n  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);\n}\n\n\n\n.select-dropdown[_ngcontent-%COMP%]::-ms-expand {\n  display: none;\n}\n\n\n\n.select-dropdown[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] {\n  background-color: #fff;\n  color: #333;\n}\n\n\n\n.select-dropdown[_ngcontent-%COMP%]   option[_ngcontent-%COMP%]:hover {\n  background-color: #f0f0f0;\n}\n\n\n\n.select-dropdown[_ngcontent-%COMP%]   option[_ngcontent-%COMP%]:focus {\n  background-color: #f0f0f0;\n}\n\n\n\n.search-input-container[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n}\n\n\n\n.close-button[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 10px;\n  right: 5%;\n  transform: translateX(50%);\n  cursor: pointer;\n  font-size: 16px;\n  color: #555;\n  z-index: 1500px;\n}\n\n.close-button[_ngcontent-%COMP%]:hover {\n  color: #333; \n\n}"]
  });
}

/***/ }),

/***/ 2944:
/*!************************************************!*\
  !*** ./src/app/services/csv-reader.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CsvReaderService: () => (/* binding */ CsvReaderService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 708);
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! leaflet */ 8433);
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var leaflet_routing_machine__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! leaflet-routing-machine */ 7119);
/* harmony import */ var leaflet_routing_machine__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(leaflet_routing_machine__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var leaflet_markercluster__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! leaflet.markercluster */ 6821);
/* harmony import */ var leaflet_markercluster__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(leaflet_markercluster__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _navigator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navigator.service */ 1136);
/* harmony import */ var _envs_env_prod__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../envs/env.prod */ 8086);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 5879);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 9862);
/* harmony import */ var ngx_papaparse__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-papaparse */ 6027);












leaflet__WEBPACK_IMPORTED_MODULE_0__.Marker.prototype.options.icon = new leaflet__WEBPACK_IMPORTED_MODULE_0__.Icon({
  iconSize: [25, 41],
  iconAnchor: [13, 0],
  iconUrl: './responsive-map-sk/assets/marker-icon.png',
  shadowUrl: './responsive-map-sk/assets/marker-shadow.png'
});
var Category;
(function (Category) {
  Category["Zdravie"] = "Zdravie a terapie";
  Category["PsychologickaPomoc"] = "Psychologick\u00E1 pomoc";
  Category["IntegracneCentra"] = "Integra\u010Dn\u00E9 centr\u00E1";
  Category["StarostlivostDo7Rokov"] = "Starostlivos\u0165 do 7 rokov";
  Category["PlatformaRodin"] = "Platforma rod\u00EDn";
  Category["Skola"] = "\u0160kola";
  Category["FinancnaAMaterialnaPodpora"] = "Finan\u010Dn\u00E1 a materi\u00E1lna podpora";
  Category["PsychosocialnaPodpora"] = "Psychosoci\u00E1lna podpora";
  Category["PodlaZnevyhodnenia"] = "Pod\u013Ea znev\u00FDhodnenia";
  Category["VolnyCas"] = "Vo\u013En\u00FD \u010Das";
  Category["VynimkaPreUkrajinskeMuzov"] = "V\u00FDnimka pre ukrajinsk\u00FDch mu\u017Eov staraj\u00FAcich sa o osobu so zdravotn\u00FDm znev\u00FDhodnen\u00EDm";
  Category["VseobecneInformaciePreOdidencov"] = "V\u0161eobecn\u00E9 inform\u00E1cie pre od\u00EDdencov z Ukrajiny na Slovensku";
  Category["HealthAndTherapy"] = "Health and therapy";
  Category["PsychologicalHelp"] = "Psychological help";
  Category["IntegrationCenters"] = "Integration centers";
  Category["CareForChildrenUnder7"] = "Care for Children under 7";
  Category["PlatformOfFamilies"] = "Platform of families";
  Category["School"] = "School";
  Category["FinancialSupport"] = "Financial Support";
  Category["PsychosocialSupport"] = "Psychosocial support";
  Category["ServicesByDisability"] = "Services by Disability";
  Category["FreeTime"] = "Free time";
  Category["\u0417\u0434\u043E\u0440\u043E\u0432\u044F\u0406\u0422\u0435\u0440\u0430\u043F\u0456\u044F"] = "\u0417\u0434\u043E\u0440\u043E\u0432\u044F \u0456 \u0442\u0435\u0440\u0430\u043F\u0456\u044F";
  Category["\u041F\u0441\u0438\u0445\u043E\u043B\u043E\u0433\u0456\u0447\u043D\u0430\u0414\u043E\u043F\u043E\u043C\u043E\u0433\u0430"] = "\u043F\u0441\u0438\u0445\u043E\u043B\u043E\u0433\u0456\u0447\u043D\u0430 \u0434\u043E\u043F\u043E\u043C\u043E\u0433\u0430";
  Category["\u0426\u0435\u043D\u0442\u0440\u0438\u0406\u043D\u0442\u0435\u0433\u0440\u0430\u0446\u0456\u0457"] = "\u0446\u0435\u043D\u0442\u0440\u0438 \u0456\u043D\u0442\u0435\u0433\u0440\u0430\u0446\u0456\u0457";
  Category["\u0414\u043E\u0433\u043B\u044F\u0434\u0417\u0430\u0414\u0456\u0442\u044C\u043C\u0438\u0414\u043E7\u0420\u043E\u043A\u0456\u0432"] = "\u0414\u043E\u0433\u043B\u044F\u0434 \u0437\u0430 \u0434\u0456\u0442\u044C\u043C\u0438 \u0434\u043E 7 \u0440\u043E\u043A\u0456\u0432";
  Category["\u041F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0430\u0421\u0456\u043C\u0435\u0439"] = "\u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0430 \u0441\u0456\u043C\u0435\u0439";
  Category["\u0428\u043A\u043E\u043B\u0430"] = "\u0428\u043A\u043E\u043B\u0430";
  Category["\u0424\u0456\u043D\u0430\u043D\u0441\u043E\u0432\u0430\u041F\u0456\u0434\u0442\u0440\u0438\u043C\u043A\u0430"] = "\u0424\u0456\u043D\u0430\u043D\u0441\u043E\u0432\u0430 \u043F\u0456\u0434\u0442\u0440\u0438\u043C\u043A\u0430";
  Category["\u041F\u0441\u0438\u0445\u043E\u043B\u043E\u0433\u0456\u0447\u043D\u043E\u0421\u043E\u0446\u0456\u0430\u043B\u044C\u043D\u0430\u041F\u0456\u0434\u0442\u0440\u0438\u043C\u043A\u0430"] = "\u041F\u0441\u0438\u0445\u043E\u043B\u043E\u0433\u0456\u0447\u043D\u043E- \u0441\u043E\u0446\u0456\u0430\u043B\u044C\u043D\u0430 \u043F\u0456\u0434\u0442\u0440\u0438\u043C\u043A\u0430";
  Category["\u041F\u043E\u0441\u043B\u0443\u0433\u0438\u0414\u043B\u044F\u041E\u0441\u0456\u0431\u0417\u041E\u0431\u043C\u0435\u0436\u0435\u043D\u0438\u043C\u0438\u041C\u043E\u0436\u043B\u0438\u0432\u043E\u0441\u0442\u044F\u043C\u0438"] = "\u041F\u043E\u0441\u043B\u0443\u0433\u0438 \u0434\u043B\u044F \u043E\u0441\u0456\u0431 \u0437 \u043E\u0431\u043C\u0435\u0436\u0435\u043D\u0438\u043C\u0438 \u043C\u043E\u0436\u043B\u0438\u0432\u043E\u0441\u0442\u044F\u043C\u0438";
  Category["\u0414\u043E\u0437\u0432\u0456\u043B\u043B\u044F"] = "\u0434\u043E\u0437\u0432\u0456\u043B\u043B\u044F";
  Category["Default"] = "default";
})(Category || (Category = {}));
class CsvReaderService {
  constructor(http, papa, navigatorService) {
    this.http = http;
    this.papa = papa;
    this.navigatorService = navigatorService;
    this.csvData = [];
    this.filterdData = [];
    this.currentLatitude = 0;
    this.currentLongitude = 0;
    this.icon = {
      icon: new leaflet__WEBPACK_IMPORTED_MODULE_0__.Icon({
        iconSize: [25, 41],
        iconAnchor: [13, 0],
        iconUrl: './responsive-map-sk/assets/marker-icon.png',
        shadowUrl: './responsive-map-sk/assets/marker-shadow.png'
      })
    };
    this.navigatorService.getEvent('navigate').subscribe(e => {
      this.navigateTo(e[0], e[1]);
    });
  }
  getCsvData() {
    const csvUrl = './responsive-map-sk/points.csv';
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.lastValueFrom)(this.http.get(csvUrl, {
      responseType: 'text'
    })).then(data => {
      this.csvData = this.parseCsvData(data);
      this.filterdData = this.csvData;
    }).catch(error => {
      console.error('Error reading CSV', error);
      throw error; // Rethrow the error to be caught by APP_INITIALIZER
    });
  }

  parseCsvData(csvText) {
    const parsedData = this.papa.parse(csvText, {
      header: true,
      skipEmptyLines: true
    }).data;
    return parsedData;
  }
  csvToGeoJSON() {
    const geoJSONFeatures = this.filterdData.filter(row => !isNaN(row.latitude) && !isNaN(row.longitude)).map(row => ({
      type: 'Feature',
      properties: {
        name: row.name,
        category: row.Category,
        city: row.City,
        address: row.Address,
        website: row.Website,
        contact: row.Contact,
        email: row.Email,
        description: row.Description,
        selectable: true
      },
      geometry: {
        type: 'Point',
        coordinates: [row.latitude, row.longitude]
      }
    }));
    return {
      type: 'FeatureCollection',
      features: geoJSONFeatures
    };
  }
  setCurrentLocation() {
    if (this.map) {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
          const {
            latitude,
            longitude
          } = position.coords;
          this.currentLatitude = latitude;
          this.currentLongitude = longitude;
          const marker = new leaflet__WEBPACK_IMPORTED_MODULE_0__.Marker([latitude, longitude]).addTo(this.map);
          marker.bindPopup(_envs_env_prod__WEBPACK_IMPORTED_MODULE_4__.APP_CONFIG.language === 'en' ? "You are here!" : _envs_env_prod__WEBPACK_IMPORTED_MODULE_4__.APP_CONFIG.language === 'da' ? "Ste tu!" : "Ви тут!").openPopup();
          this.map.setView([latitude, longitude]);
        });
      }
    } else {
      console.log("Geolocation is not supported by your browser.");
    }
  }
  setCsvPredefinedPoints(filterdCategoriesSet = []) {
    this.markers?.clearLayers();
    this.markers = new leaflet__WEBPACK_IMPORTED_MODULE_0__.MarkerClusterGroup({
      spiderfyOnMaxZoom: true,
      showCoverageOnHover: true,
      zoomToBoundsOnClick: true
    });
    if (filterdCategoriesSet.length === 0) {
      this.filterdData.forEach(feature => {
        const marker = this.createMarker(feature);
        this.markers.addLayer(marker);
      });
    } else {
      this.filterdData.forEach(feature => {
        if (filterdCategoriesSet.find(item => item.name === feature.Category)?.checked) {
          const marker = this.createMarker(feature);
          this.markers.addLayer(marker);
        }
      });
    }
    if (this.map) this.map.addLayer(this.markers);
  }
  setCsvPredefinedPointsByCity(city = 'all') {
    this.markers?.clearLayers();
    this.markers = new leaflet__WEBPACK_IMPORTED_MODULE_0__.MarkerClusterGroup({
      spiderfyOnMaxZoom: true,
      showCoverageOnHover: true,
      zoomToBoundsOnClick: true
    });
    if (city === 'all') {
      this.filterdData.forEach(feature => {
        const marker = this.createMarker(feature);
        this.markers.addLayer(marker);
      });
    } else {
      this.filterdData.forEach(feature => {
        if (feature.City === city) {
          const marker = this.createMarker(feature);
          this.markers.addLayer(marker);
        }
      });
    }
    if (this.map) this.map.addLayer(this.markers);
  }
  createMarker(feature) {
    const iconURL = this.getCategoryImage(feature.Category);
    this.icon = {
      icon: new leaflet__WEBPACK_IMPORTED_MODULE_0__.Icon({
        iconSize: [25, 25],
        iconAnchor: [13, 0],
        iconUrl: iconURL,
        shadowUrl: '',
        className: "circular-icon"
      })
    };
    const marker = new leaflet__WEBPACK_IMPORTED_MODULE_0__.Marker([feature.longitude, feature.latitude], this.icon);
    const popupContent = this.getPopUpContentDiv(feature);
    marker.bindPopup(popupContent);
    return marker;
  }
  getPopUpContentDiv(feature) {
    return `
      <div class="popup-container">
          <h3>${feature.name}</h3>
          <p>Category: ${feature.Category}</p>
          <p>City: ${feature.City}</p>
          <p>Address: ${feature.Address}</p>
          <p>Website: ${feature.Website}</p>
          <p>Contact: ${feature.Contact}</p>
          <p>Email: ${feature.Email}</p>
          <p>Description: ${feature.Description}</p>
          <div class="navigate-button-container">
          <button id="navigateButton" class="navigate-button" latitude="${feature.latitude}" longitude="${feature.longitude}">Navigate</button>
          </div>
      </div>
    `;
  }
  getCategoryImage(category) {
    const categoryImageMap = {
      [Category.Zdravie]: "./responsive-map-sk/assets/svg/zdravie.svg",
      [Category.PsychologickaPomoc]: "./responsive-map-sk/assets/svg/psychosocialna-podpora.svg",
      [Category.IntegracneCentra]: "./responsive-map-sk/assets/svg/PSI.svg",
      [Category.StarostlivostDo7Rokov]: "./responsive-map-sk/assets/svg/starostlivost-pre-deti-do-7-rokov.svg",
      [Category.PlatformaRodin]: "./responsive-map-sk/assets/svg/trojlistok-platforma.svg",
      [Category.Skola]: "./responsive-map-sk/assets/svg/skola.svg",
      [Category.FinancnaAMaterialnaPodpora]: "./responsive-map-sk/assets/svg/financna-podpora.svg",
      [Category.PsychosocialnaPodpora]: "./responsive-map-sk/assets/svg/psychosocialna-podpora.svg",
      [Category.PodlaZnevyhodnenia]: "./responsive-map-sk/assets/svg/nevidiaci.svg",
      [Category.VolnyCas]: "./responsive-map-sk/assets/svg/sport.svg",
      [Category.VynimkaPreUkrajinskeMuzov]: "./responsive-map-sk/assets/svg/vynimka-pre-ukrajinskych-muzov.svg",
      [Category.VseobecneInformaciePreOdidencov]: "./responsive-map-sk/assets/svg/vseobecne-informacie.svg",
      [Category.HealthAndTherapy]: "./responsive-map-sk/assets/svg/zdravie.svg",
      [Category.PsychologicalHelp]: "./responsive-map-sk/assets/svg/psychosocialna-podpora.svg",
      [Category.IntegrationCenters]: "./responsive-map-sk/assets/svg/PSI.svg",
      [Category.CareForChildrenUnder7]: "./responsive-map-sk/assets/svg/starostlivost-pre-deti-do-7-rokov.svg",
      [Category.PlatformOfFamilies]: "./responsive-map-sk/assets/svg/trojlistok-platforma.svg",
      [Category.School]: "./responsive-map-sk/assets/svg/skola.svg",
      [Category.FinancialSupport]: "./responsive-map-sk/assets/svg/financna-podpora.svg",
      [Category.PsychosocialSupport]: "./responsive-map-sk/assets/svg/psychosocialna-podpora.svg",
      [Category.ServicesByDisability]: "./responsive-map-sk/assets/svg/nevidiaci.svg",
      [Category.FreeTime]: "./responsive-map-sk/assets/svg/sport.svg",
      [Category.ЗдоровяІТерапія]: "./responsive-map-sk/assets/svg/zdravie.svg",
      [Category.ПсихологічнаДопомога]: "./responsive-map-sk/assets/svg/psychosocialna-podpora.svg",
      [Category.ЦентриІнтеграції]: "./responsive-map-sk/assets/svg/PSI.svg",
      [Category.ДоглядЗаДітьмиДо7Років]: "./responsive-map-sk/assets/svg/starostlivost-pre-deti-do-7-rokov.svg",
      [Category.ПлатформаСімей]: "./responsive-map-sk/assets/svg/trojlistok-platforma.svg",
      [Category.Школа]: "./responsive-map-sk/assets/svg/skola.svg",
      [Category.ФінансоваПідтримка]: "./responsive-map-sk/assets/svg/financna-podpora.svg",
      [Category.ПсихологічноСоціальнаПідтримка]: "./responsive-map-sk/assets/svg/psychosocialna-podpora.svg",
      [Category.ПослугиДляОсібЗОбмеженимиМожливостями]: "./responsive-map-sk/assets/svg/nevidiaci.svg",
      [Category.Дозвілля]: "./responsive-map-sk/assets/svg/sport.svg",
      [Category.Default]: "./responsive-map-sk/assets/svg/trojlistok-platforma.svg"
    };
    return categoryImageMap[category] || categoryImageMap[Category.Default];
  }
  navigateTo(latitude, longitude) {
    this.clearNavigatation();
    const _firstLatLng = new leaflet__WEBPACK_IMPORTED_MODULE_0__.LatLng(this.currentLatitude, this.currentLongitude);
    const _secondLatLng = new leaflet__WEBPACK_IMPORTED_MODULE_0__.LatLng(longitude, latitude);
    const _length = this.map?.distance(_firstLatLng, _secondLatLng);
    const routerOptions = {
      language: _envs_env_prod__WEBPACK_IMPORTED_MODULE_4__.APP_CONFIG.language,
      suppressDemoServerWarning: true
    };
    this.currentRouting = leaflet__WEBPACK_IMPORTED_MODULE_0__.Routing.control({
      waypoints: [_firstLatLng, _secondLatLng],
      routeWhileDragging: true,
      router: leaflet__WEBPACK_IMPORTED_MODULE_0__.Routing.osrmv1(routerOptions)
    }).on('routesfound', event => {
      this.map?.zoomOut(_length);
    }).on('routingerror', error => {}).addTo(this.map);
  }
  clearNavigatation() {
    if (this.currentRouting) this.map?.removeControl(this.currentRouting);
  }
  static #_ = this.ɵfac = function CsvReaderService_Factory(t) {
    return new (t || CsvReaderService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](ngx_papaparse__WEBPACK_IMPORTED_MODULE_8__.Papa), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_navigator_service__WEBPACK_IMPORTED_MODULE_3__.NavigatorService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
    token: CsvReaderService,
    factory: CsvReaderService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 1136:
/*!***********************************************!*\
  !*** ./src/app/services/navigator.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NavigatorService: () => (/* binding */ NavigatorService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 2013);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 5879);


class NavigatorService {
  constructor() {
    this.eventSubjects = {};
  }
  // Method to emit an event
  emitEvent(eventName, eventData) {
    if (!this.eventSubjects[eventName]) {
      this.eventSubjects[eventName] = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    }
    this.eventSubjects[eventName].next(eventData);
  }
  // Method to subscribe to an event
  getEvent(eventName) {
    if (!this.eventSubjects[eventName]) {
      this.eventSubjects[eventName] = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    }
    return this.eventSubjects[eventName].asObservable();
  }
  static #_ = this.ɵfac = function NavigatorService_Factory(t) {
    return new (t || NavigatorService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: NavigatorService,
    factory: NavigatorService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 8086:
/*!******************************!*\
  !*** ./src/envs/env.prod.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   APP_CONFIG: () => (/* binding */ APP_CONFIG)
/* harmony export */ });
const APP_CONFIG = {
  language: 'da'
};

/***/ }),

/***/ 4913:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 6593);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 8629);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4913)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);