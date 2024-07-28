import {
  require_maplibre_gl
} from "./chunk-EOQ73HZF.js";
import {
  NgForOf,
  NgIf,
  NgTemplateOutlet
} from "./chunk-LFBOADA7.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  Directive,
  ElementRef,
  EventEmitter,
  Host,
  HostListener,
  Inject,
  Injectable,
  Input,
  InputFlags,
  NgModule,
  NgZone,
  Optional,
  Output,
  TemplateRef,
  ViewChild,
  ViewEncapsulation$1,
  afterNextRender,
  forwardRef,
  setClassMetadata,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵinject,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵqueryRefresh,
  ɵɵresolveWindow,
  ɵɵtemplate,
  ɵɵviewQuery
} from "./chunk-CKIAAGGV.js";
import {
  AsyncSubject,
  Subject,
  Subscription,
  debounceTime,
  filter,
  first,
  firstValueFrom,
  fromEvent,
  map,
  merge,
  startWith,
  switchMap,
  take,
  takeUntil,
  tap
} from "./chunk-VW7P5FPZ.js";
import {
  __async,
  __spreadProps,
  __spreadValues,
  __toESM
} from "./chunk-CPNXOV62.js";

// node_modules/@maplibre/ngx-maplibre-gl/fesm2022/maplibre-ngx-maplibre-gl.mjs
var import_maplibre_gl = __toESM(require_maplibre_gl(), 1);
var _c0 = ["content"];
var _c1 = ["*"];
var _c2 = ["container"];
var _c3 = () => ({
  "circle-radius": 0
});
var _c4 = (a0) => ({
  $implicit: a0
});
function MarkersForClustersComponent_ng_container_1_ng_container_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function MarkersForClustersComponent_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "mgl-marker", 3);
    ɵɵtemplate(2, MarkersForClustersComponent_ng_container_1_ng_container_1_ng_container_2_Template, 1, 0, "ng-container", 4);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const feature_r1 = ɵɵnextContext().$implicit;
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("feature", feature_r1);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.clusterPointTpl)("ngTemplateOutletContext", ɵɵpureFunction1(3, _c4, feature_r1));
  }
}
function MarkersForClustersComponent_ng_container_1_ng_container_2_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function MarkersForClustersComponent_ng_container_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "mgl-marker", 3);
    ɵɵtemplate(2, MarkersForClustersComponent_ng_container_1_ng_container_2_ng_container_2_Template, 1, 0, "ng-container", 4);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const feature_r1 = ɵɵnextContext().$implicit;
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("feature", feature_r1);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.pointTpl)("ngTemplateOutletContext", ɵɵpureFunction1(3, _c4, feature_r1));
  }
}
function MarkersForClustersComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, MarkersForClustersComponent_ng_container_1_ng_container_1_Template, 3, 5, "ng-container", 2)(2, MarkersForClustersComponent_ng_container_1_ng_container_2_Template, 3, 5, "ng-container", 2);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const feature_r1 = ctx.$implicit;
    ɵɵadvance();
    ɵɵproperty("ngIf", feature_r1.properties.cluster);
    ɵɵadvance();
    ɵɵproperty("ngIf", !feature_r1.properties.cluster);
  }
}
var _MapService = class _MapService {
  constructor(zone) {
    this.zone = zone;
    this.mapCreated = new AsyncSubject();
    this.mapLoaded = new AsyncSubject();
    this.markersToRemove = [];
    this.popupsToRemove = [];
    this.imageIdsToRemove = [];
    this.subscription = new Subscription();
    this.mapCreated$ = this.mapCreated.asObservable();
    this.mapLoaded$ = this.mapLoaded.asObservable();
  }
  setup(options) {
    this.zone.onStable.pipe(first()).subscribe(() => {
      this.createMap(options.mapOptions);
      this.hookEvents(options.mapEvents);
      this.mapEvents = options.mapEvents;
      this.mapCreated.next(void 0);
      this.mapCreated.complete();
      if (options.mapOptions.terrain) {
        this.mapInstance.on("load", () => {
          this.updateTerrain(options.mapOptions.terrain);
        });
      }
    });
  }
  destroyMap() {
    if (this.mapInstance) {
      this.subscription.unsubscribe();
      this.mapInstance.remove();
    }
  }
  updateMinZoom(minZoom) {
    return this.zone.runOutsideAngular(() => {
      this.mapInstance.setMinZoom(minZoom);
    });
  }
  updateMaxZoom(maxZoom) {
    return this.zone.runOutsideAngular(() => {
      this.mapInstance.setMaxZoom(maxZoom);
    });
  }
  updateMinPitch(minPitch) {
    return this.zone.runOutsideAngular(() => {
      this.mapInstance.setMinPitch(minPitch);
    });
  }
  updateMaxPitch(maxPitch) {
    return this.zone.runOutsideAngular(() => {
      this.mapInstance.setMaxPitch(maxPitch);
    });
  }
  updateRenderWorldCopies(status) {
    return this.zone.runOutsideAngular(() => {
      this.mapInstance.setRenderWorldCopies(status);
    });
  }
  updateScrollZoom(status) {
    return this.zone.runOutsideAngular(() => {
      status ? this.mapInstance.scrollZoom.enable() : this.mapInstance.scrollZoom.disable();
    });
  }
  updateDragRotate(status) {
    return this.zone.runOutsideAngular(() => {
      status ? this.mapInstance.dragRotate.enable() : this.mapInstance.dragRotate.disable();
    });
  }
  updateTouchPitch(status) {
    return this.zone.runOutsideAngular(() => {
      status ? this.mapInstance.touchPitch.enable() : this.mapInstance.touchPitch.disable();
    });
  }
  updateTouchZoomRotate(status) {
    return this.zone.runOutsideAngular(() => {
      status ? this.mapInstance.touchZoomRotate.enable() : this.mapInstance.touchZoomRotate.disable();
    });
  }
  updateDoubleClickZoom(status) {
    return this.zone.runOutsideAngular(() => {
      status ? this.mapInstance.doubleClickZoom.enable() : this.mapInstance.doubleClickZoom.disable();
    });
  }
  updateKeyboard(status) {
    return this.zone.runOutsideAngular(() => {
      status ? this.mapInstance.keyboard.enable() : this.mapInstance.keyboard.disable();
    });
  }
  updateDragPan(status) {
    return this.zone.runOutsideAngular(() => {
      status ? this.mapInstance.dragPan.enable() : this.mapInstance.dragPan.disable();
    });
  }
  updateBoxZoom(status) {
    return this.zone.runOutsideAngular(() => {
      status ? this.mapInstance.boxZoom.enable() : this.mapInstance.boxZoom.disable();
    });
  }
  updateStyle(style) {
    return this.zone.runOutsideAngular(() => {
      this.mapInstance.setStyle(style);
    });
  }
  updateMaxBounds(maxBounds) {
    return this.zone.runOutsideAngular(() => {
      this.mapInstance.setMaxBounds(maxBounds);
    });
  }
  updateTerrain(options) {
    return this.zone.runOutsideAngular(() => {
      this.mapInstance.setTerrain(options);
    });
  }
  getTerrain() {
    return this.zone.runOutsideAngular(() => {
      return this.mapInstance.getTerrain();
    });
  }
  changeCanvasCursor(cursor) {
    const canvas = this.mapInstance.getCanvasContainer();
    canvas.style.cursor = cursor;
  }
  queryRenderedFeatures(pointOrBox, parameters) {
    return this.mapInstance.queryRenderedFeatures(pointOrBox, parameters);
  }
  panTo(center, options) {
    return this.zone.runOutsideAngular(() => {
      this.mapInstance.panTo(center, options);
    });
  }
  move(movingMethod, movingOptions, zoom, center, bearing, pitch) {
    return this.zone.runOutsideAngular(() => {
      this.mapInstance[movingMethod](__spreadProps(__spreadValues({}, movingOptions), {
        zoom: zoom != null ? zoom : this.mapInstance.getZoom(),
        center: center != null ? center : this.mapInstance.getCenter(),
        bearing: bearing != null ? bearing : this.mapInstance.getBearing(),
        pitch: pitch != null ? pitch : this.mapInstance.getPitch()
      }));
    });
  }
  addLayer(layer, bindEvents, before) {
    this.zone.runOutsideAngular(() => {
      Object.keys(layer.layerOptions).forEach((key) => {
        const tkey = key;
        if (layer.layerOptions[tkey] === void 0) {
          delete layer.layerOptions[tkey];
        }
      });
      this.mapInstance.addLayer(layer.layerOptions, before);
      if (bindEvents) {
        if (layer.layerEvents.layerClick.observers.length) {
          this.mapInstance.on("click", layer.layerOptions.id, (evt) => {
            this.zone.run(() => {
              layer.layerEvents.layerClick.emit(evt);
            });
          });
        }
        if (layer.layerEvents.layerDblClick.observers.length) {
          this.mapInstance.on("dblclick", layer.layerOptions.id, (evt) => {
            this.zone.run(() => {
              layer.layerEvents.layerDblClick.emit(evt);
            });
          });
        }
        if (layer.layerEvents.layerMouseDown.observers.length) {
          this.mapInstance.on("mousedown", layer.layerOptions.id, (evt) => {
            this.zone.run(() => {
              layer.layerEvents.layerMouseDown.emit(evt);
            });
          });
        }
        if (layer.layerEvents.layerMouseUp.observers.length) {
          this.mapInstance.on("mouseup", layer.layerOptions.id, (evt) => {
            this.zone.run(() => {
              layer.layerEvents.layerMouseUp.emit(evt);
            });
          });
        }
        if (layer.layerEvents.layerMouseEnter.observers.length) {
          this.mapInstance.on("mouseenter", layer.layerOptions.id, (evt) => {
            this.zone.run(() => {
              layer.layerEvents.layerMouseEnter.emit(evt);
            });
          });
        }
        if (layer.layerEvents.layerMouseLeave.observers.length) {
          this.mapInstance.on("mouseleave", layer.layerOptions.id, (evt) => {
            this.zone.run(() => {
              layer.layerEvents.layerMouseLeave.emit(evt);
            });
          });
        }
        if (layer.layerEvents.layerMouseMove.observers.length) {
          this.mapInstance.on("mousemove", layer.layerOptions.id, (evt) => {
            this.zone.run(() => {
              layer.layerEvents.layerMouseMove.emit(evt);
            });
          });
        }
        if (layer.layerEvents.layerMouseOver.observers.length) {
          this.mapInstance.on("mouseover", layer.layerOptions.id, (evt) => {
            this.zone.run(() => {
              layer.layerEvents.layerMouseOver.emit(evt);
            });
          });
        }
        if (layer.layerEvents.layerMouseOut.observers.length) {
          this.mapInstance.on("mouseout", layer.layerOptions.id, (evt) => {
            this.zone.run(() => {
              layer.layerEvents.layerMouseOut.emit(evt);
            });
          });
        }
        if (layer.layerEvents.layerContextMenu.observers.length) {
          this.mapInstance.on("contextmenu", layer.layerOptions.id, (evt) => {
            this.zone.run(() => {
              layer.layerEvents.layerContextMenu.emit(evt);
            });
          });
        }
        if (layer.layerEvents.layerTouchStart.observers.length) {
          this.mapInstance.on("touchstart", layer.layerOptions.id, (evt) => {
            this.zone.run(() => {
              layer.layerEvents.layerTouchStart.emit(evt);
            });
          });
        }
        if (layer.layerEvents.layerTouchEnd.observers.length) {
          this.mapInstance.on("touchend", layer.layerOptions.id, (evt) => {
            this.zone.run(() => {
              layer.layerEvents.layerTouchEnd.emit(evt);
            });
          });
        }
        if (layer.layerEvents.layerTouchCancel.observers.length) {
          this.mapInstance.on("touchcancel", layer.layerOptions.id, (evt) => {
            this.zone.run(() => {
              layer.layerEvents.layerTouchCancel.emit(evt);
            });
          });
        }
      }
    });
  }
  removeLayer(layerId) {
    this.zone.runOutsideAngular(() => {
      if (this.mapInstance.getLayer(layerId) != null) {
        this.mapInstance.removeLayer(layerId);
      }
    });
  }
  addMarker(marker) {
    const options = {
      offset: marker.markersOptions.offset,
      anchor: marker.markersOptions.anchor,
      color: marker.markersOptions.color,
      draggable: !!marker.markersOptions.draggable,
      rotationAlignment: marker.markersOptions.rotationAlignment,
      rotation: marker.markersOptions.rotation,
      pitchAlignment: marker.markersOptions.pitchAlignment,
      clickTolerance: marker.markersOptions.clickTolerance
    };
    if (marker.markersOptions.element.childNodes.length > 0) {
      options.element = marker.markersOptions.element;
    }
    const markerInstance = new import_maplibre_gl.Marker(options);
    if (marker.markersEvents.markerDragStart.observers.length) {
      markerInstance.on("dragstart", (event) => {
        if (event) {
          const {
            target
          } = event;
          this.zone.run(() => {
            marker.markersEvents.markerDragStart.emit(target);
          });
        }
      });
    }
    if (marker.markersEvents.markerDrag.observers.length) {
      markerInstance.on("drag", (event) => {
        if (event) {
          const {
            target
          } = event;
          this.zone.run(() => {
            marker.markersEvents.markerDrag.emit(target);
          });
        }
      });
    }
    if (marker.markersEvents.markerDragEnd.observers.length) {
      markerInstance.on("dragend", (event) => {
        if (event) {
          const {
            target
          } = event;
          this.zone.run(() => {
            marker.markersEvents.markerDragEnd.emit(target);
          });
        }
      });
    }
    const lngLat = marker.markersOptions.feature ? marker.markersOptions.feature.geometry.coordinates : marker.markersOptions.lngLat;
    markerInstance.setLngLat(lngLat);
    return this.zone.runOutsideAngular(() => {
      markerInstance.addTo(this.mapInstance);
      return markerInstance;
    });
  }
  removeMarker(marker) {
    this.markersToRemove.push(marker);
  }
  createPopup(popup, element) {
    return this.zone.runOutsideAngular(() => {
      Object.keys(popup.popupOptions).forEach((key) => popup.popupOptions[key] === void 0 && delete popup.popupOptions[key]);
      const popupInstance = new import_maplibre_gl.Popup(popup.popupOptions);
      popupInstance.setDOMContent(element);
      if (popup.popupEvents.popupClose.observers.length) {
        popupInstance.on("close", () => {
          this.zone.run(() => {
            popup.popupEvents.popupClose.emit();
          });
        });
      }
      if (popup.popupEvents.popupOpen.observers.length) {
        popupInstance.on("open", () => {
          this.zone.run(() => {
            popup.popupEvents.popupOpen.emit();
          });
        });
      }
      return popupInstance;
    });
  }
  addPopupToMap(popup, lngLat, skipOpenEvent = false) {
    return this.zone.runOutsideAngular(() => {
      if (skipOpenEvent && popup._listeners) {
        delete popup._listeners["open"];
      }
      popup.setLngLat(lngLat);
      popup.addTo(this.mapInstance);
    });
  }
  addPopupToMarker(marker, popup) {
    return this.zone.runOutsideAngular(() => {
      marker.setPopup(popup);
    });
  }
  removePopupFromMap(popup, skipCloseEvent = false) {
    if (skipCloseEvent && popup._listeners) {
      delete popup._listeners["close"];
    }
    this.popupsToRemove.push(popup);
  }
  removePopupFromMarker(marker) {
    return this.zone.runOutsideAngular(() => {
      marker.setPopup(void 0);
    });
  }
  addControl(control, position) {
    return this.zone.runOutsideAngular(() => {
      this.mapInstance.addControl(control, position);
    });
  }
  removeControl(control) {
    return this.zone.runOutsideAngular(() => {
      this.mapInstance.removeControl(control);
    });
  }
  loadAndAddImage(imageId, url, options) {
    return __async(this, null, function* () {
      return this.zone.runOutsideAngular(() => __async(this, null, function* () {
        const image = yield this.mapInstance.loadImage(url);
        this.addImage(imageId, image.data, options);
      }));
    });
  }
  addImage(imageId, data, options) {
    return this.zone.runOutsideAngular(() => {
      this.mapInstance.addImage(imageId, data, options);
    });
  }
  removeImage(imageId) {
    this.imageIdsToRemove.push(imageId);
  }
  addSource(sourceId, source) {
    return this.zone.runOutsideAngular(() => {
      Object.keys(source).forEach((key) => source[key] === void 0 && delete source[key]);
      this.mapInstance.addSource(sourceId, source);
    });
  }
  getSource(sourceId) {
    return this.mapInstance.getSource(sourceId);
  }
  removeSource(sourceId) {
    this.zone.runOutsideAngular(() => {
      this.findLayersBySourceId(sourceId).forEach((layer) => this.mapInstance.removeLayer(layer.id));
      this.mapInstance.removeSource(sourceId);
    });
  }
  setAllLayerPaintProperty(layerId, paint) {
    return this.zone.runOutsideAngular(() => {
      Object.keys(paint).forEach((key) => {
        this.mapInstance.setPaintProperty(layerId, key, paint[key]);
      });
    });
  }
  setAllLayerLayoutProperty(layerId, layout) {
    return this.zone.runOutsideAngular(() => {
      Object.keys(layout).forEach((key) => {
        this.mapInstance.setLayoutProperty(layerId, key, layout[key]);
      });
    });
  }
  setLayerFilter(layerId, filter2) {
    return this.zone.runOutsideAngular(() => {
      this.mapInstance.setFilter(layerId, filter2);
    });
  }
  setLayerBefore(layerId, beforeId) {
    return this.zone.runOutsideAngular(() => {
      this.mapInstance.moveLayer(layerId, beforeId);
    });
  }
  setLayerZoomRange(layerId, minZoom, maxZoom) {
    return this.zone.runOutsideAngular(() => {
      this.mapInstance.setLayerZoomRange(layerId, minZoom ? minZoom : 0, maxZoom ? maxZoom : 20);
    });
  }
  fitBounds(bounds, options) {
    return this.zone.runOutsideAngular(() => {
      this.mapInstance.fitBounds(bounds, options);
    });
  }
  fitScreenCoordinates(points, bearing, options) {
    return this.zone.runOutsideAngular(() => {
      this.mapInstance.fitScreenCoordinates(points[0], points[1], bearing, options);
    });
  }
  applyChanges() {
    this.zone.runOutsideAngular(() => {
      this.removeMarkers();
      this.removePopups();
      this.removeImages();
    });
  }
  createMap(options) {
    NgZone.assertNotInAngularZone();
    Object.keys(options).forEach((key) => {
      const tkey = key;
      if (options[tkey] === void 0) {
        delete options[tkey];
      }
    });
    this.mapInstance = new import_maplibre_gl.Map(options);
    const isIEorEdge = window && /msie\s|trident\/|edge\//i.test(window.navigator.userAgent);
    if (isIEorEdge) {
      this.mapInstance.setStyle(options.style);
    }
    this.subscription.add(this.zone.onMicrotaskEmpty.subscribe(() => this.applyChanges()));
  }
  removeMarkers() {
    for (const marker of this.markersToRemove) {
      marker.remove();
    }
    this.markersToRemove = [];
  }
  removePopups() {
    for (const popup of this.popupsToRemove) {
      popup.remove();
    }
    this.popupsToRemove = [];
  }
  removeImages() {
    for (const imageId of this.imageIdsToRemove) {
      this.mapInstance.removeImage(imageId);
    }
    this.imageIdsToRemove = [];
  }
  findLayersBySourceId(sourceId) {
    const layers = this.mapInstance.getStyle().layers;
    if (layers == null) {
      return [];
    }
    return layers.filter((l) => "source" in l ? l.source === sourceId : false);
  }
  hookEvents(events) {
    this.mapInstance.on("load", (evt) => {
      this.mapLoaded.next(void 0);
      this.mapLoaded.complete();
      this.zone.run(() => {
        events.mapLoad.emit(evt.target);
      });
    });
    if (events.mapResize.observers.length) {
      this.mapInstance.on("resize", (evt) => this.zone.run(() => {
        events.mapResize.emit(evt);
      }));
    }
    if (events.mapRemove.observers.length) {
      this.mapInstance.on("remove", (evt) => this.zone.run(() => {
        events.mapRemove.emit(evt);
      }));
    }
    if (events.mapMouseDown.observers.length) {
      this.mapInstance.on("mousedown", (evt) => this.zone.run(() => {
        events.mapMouseDown.emit(evt);
      }));
    }
    if (events.mapMouseUp.observers.length) {
      this.mapInstance.on("mouseup", (evt) => this.zone.run(() => {
        events.mapMouseUp.emit(evt);
      }));
    }
    if (events.mapMouseMove.observers.length) {
      this.mapInstance.on("mousemove", (evt) => this.zone.run(() => {
        events.mapMouseMove.emit(evt);
      }));
    }
    if (events.mapClick.observers.length) {
      this.mapInstance.on("click", (evt) => this.zone.run(() => {
        events.mapClick.emit(evt);
      }));
    }
    if (events.mapDblClick.observers.length) {
      this.mapInstance.on("dblclick", (evt) => this.zone.run(() => {
        events.mapDblClick.emit(evt);
      }));
    }
    if (events.mapMouseOver.observers.length) {
      this.mapInstance.on("mouseover", (evt) => this.zone.run(() => {
        events.mapMouseOver.emit(evt);
      }));
    }
    if (events.mapMouseOut.observers.length) {
      this.mapInstance.on("mouseout", (evt) => this.zone.run(() => {
        events.mapMouseOut.emit(evt);
      }));
    }
    if (events.mapContextMenu.observers.length) {
      this.mapInstance.on("contextmenu", (evt) => this.zone.run(() => {
        events.mapContextMenu.emit(evt);
      }));
    }
    if (events.mapTouchStart.observers.length) {
      this.mapInstance.on("touchstart", (evt) => this.zone.run(() => {
        events.mapTouchStart.emit(evt);
      }));
    }
    if (events.mapTouchEnd.observers.length) {
      this.mapInstance.on("touchend", (evt) => this.zone.run(() => {
        events.mapTouchEnd.emit(evt);
      }));
    }
    if (events.mapTouchMove.observers.length) {
      this.mapInstance.on("touchmove", (evt) => this.zone.run(() => {
        events.mapTouchMove.emit(evt);
      }));
    }
    if (events.mapTouchCancel.observers.length) {
      this.mapInstance.on("touchcancel", (evt) => this.zone.run(() => {
        events.mapTouchCancel.emit(evt);
      }));
    }
    if (events.mapWheel.observers.length) {
      this.mapInstance.on("wheel", (evt) => this.zone.run(() => {
        events.mapWheel.emit(evt);
      }));
    }
    if (events.moveStart.observers.length) {
      this.mapInstance.on("movestart", (evt) => this.zone.run(() => events.moveStart.emit(evt)));
    }
    if (events.move.observers.length) {
      this.mapInstance.on("move", (evt) => this.zone.run(() => events.move.emit(evt)));
    }
    if (events.moveEnd.observers.length) {
      this.mapInstance.on("moveend", (evt) => this.zone.run(() => events.moveEnd.emit(evt)));
    }
    if (events.mapDragStart.observers.length) {
      this.mapInstance.on("dragstart", (evt) => this.zone.run(() => {
        events.mapDragStart.emit(evt);
      }));
    }
    if (events.mapDrag.observers.length) {
      this.mapInstance.on("drag", (evt) => this.zone.run(() => {
        events.mapDrag.emit(evt);
      }));
    }
    if (events.mapDragEnd.observers.length) {
      this.mapInstance.on("dragend", (evt) => this.zone.run(() => {
        events.mapDragEnd.emit(evt);
      }));
    }
    if (events.zoomStart.observers.length) {
      this.mapInstance.on("zoomstart", (evt) => this.zone.run(() => events.zoomStart.emit(evt)));
    }
    if (events.zoomEvt.observers.length) {
      this.mapInstance.on("zoom", (evt) => this.zone.run(() => events.zoomEvt.emit(evt)));
    }
    if (events.zoomEnd.observers.length) {
      this.mapInstance.on("zoomend", (evt) => this.zone.run(() => events.zoomEnd.emit(evt)));
    }
    if (events.rotateStart.observers.length) {
      this.mapInstance.on("rotatestart", (evt) => this.zone.run(() => events.rotateStart.emit(evt)));
    }
    if (events.rotate.observers.length) {
      this.mapInstance.on("rotate", (evt) => this.zone.run(() => events.rotate.emit(evt)));
    }
    if (events.rotateEnd.observers.length) {
      this.mapInstance.on("rotateend", (evt) => this.zone.run(() => events.rotateEnd.emit(evt)));
    }
    if (events.pitchStart.observers.length) {
      this.mapInstance.on("pitchstart", (evt) => this.zone.run(() => events.pitchStart.emit(evt)));
    }
    if (events.pitchEvt.observers.length) {
      this.mapInstance.on("pitch", (evt) => this.zone.run(() => events.pitchEvt.emit(evt)));
    }
    if (events.pitchEnd.observers.length) {
      this.mapInstance.on("pitchend", (evt) => this.zone.run(() => events.pitchEnd.emit(evt)));
    }
    if (events.boxZoomStart.observers.length) {
      this.mapInstance.on("boxzoomstart", (evt) => this.zone.run(() => events.boxZoomStart.emit(evt)));
    }
    if (events.boxZoomEnd.observers.length) {
      this.mapInstance.on("boxzoomend", (evt) => this.zone.run(() => events.boxZoomEnd.emit(evt)));
    }
    if (events.boxZoomCancel.observers.length) {
      this.mapInstance.on("boxzoomcancel", (evt) => this.zone.run(() => events.boxZoomCancel.emit(evt)));
    }
    if (events.webGlContextLost.observers.length) {
      this.mapInstance.on("webglcontextlost", (evt) => this.zone.run(() => events.webGlContextLost.emit(evt)));
    }
    if (events.webGlContextRestored.observers.length) {
      this.mapInstance.on("webglcontextrestored", (evt) => this.zone.run(() => events.webGlContextRestored.emit(evt)));
    }
    if (events.render.observers.length) {
      this.mapInstance.on("render", (evt) => this.zone.run(() => events.render.emit(evt)));
    }
    if (events.mapError.observers.length) {
      this.mapInstance.on("error", (evt) => this.zone.run(() => {
        events.mapError.emit(evt);
      }));
    }
    if (events.data.observers.length) {
      this.mapInstance.on("data", (evt) => this.zone.run(() => events.data.emit(evt)));
    }
    if (events.styleData.observers.length) {
      this.mapInstance.on("styledata", (evt) => this.zone.run(() => events.styleData.emit(evt)));
    }
    if (events.sourceData.observers.length) {
      this.mapInstance.on("sourcedata", (evt) => this.zone.run(() => events.sourceData.emit(evt)));
    }
    if (events.dataLoading.observers.length) {
      this.mapInstance.on("dataloading", (evt) => this.zone.run(() => events.dataLoading.emit(evt)));
    }
    if (events.styleDataLoading.observers.length) {
      this.mapInstance.on("styledataloading", (evt) => this.zone.run(() => events.styleDataLoading.emit(evt)));
    }
    if (events.sourceDataLoading.observers.length) {
      this.mapInstance.on("sourcedataloading", (evt) => this.zone.run(() => events.sourceDataLoading.emit(evt)));
    }
    if (events.styleImageMissing.observers.length) {
      this.mapInstance.on("styleimagemissing", (evt) => this.zone.run(() => events.styleImageMissing.emit(evt)));
    }
    if (events.idle.observers.length) {
      this.mapInstance.on("idle", (evt) => this.zone.run(() => events.idle.emit(evt)));
    }
  }
};
_MapService.ɵfac = function MapService_Factory(t) {
  return new (t || _MapService)(ɵɵinject(NgZone));
};
_MapService.ɵprov = ɵɵdefineInjectable({
  token: _MapService,
  factory: _MapService.ɵfac
});
var MapService = _MapService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MapService, [{
    type: Injectable
  }], () => [{
    type: NgZone
  }], null);
})();
var CustomControl = class {
  constructor(container) {
    this.container = container;
  }
  onAdd() {
    return this.container;
  }
  onRemove() {
    return this.container.parentNode.removeChild(this.container);
  }
  getDefaultPosition() {
    return "top-right";
  }
};
var _ControlComponent = class _ControlComponent {
  constructor(mapService) {
    this.mapService = mapService;
    afterNextRender(() => {
      if (this.content.nativeElement.childNodes.length) {
        this.control = new CustomControl(this.content.nativeElement);
        this.mapService.mapCreated$.subscribe(() => {
          this.mapService.addControl(this.control, this.position);
        });
      }
    });
  }
  ngOnDestroy() {
    if (this.mapService?.mapInstance?.hasControl(this.control)) {
      this.mapService.removeControl(this.control);
    }
  }
};
_ControlComponent.ɵfac = function ControlComponent_Factory(t) {
  return new (t || _ControlComponent)(ɵɵdirectiveInject(MapService));
};
_ControlComponent.ɵcmp = ɵɵdefineComponent({
  type: _ControlComponent,
  selectors: [["mgl-control"]],
  viewQuery: function ControlComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c0, 7);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.content = _t.first);
    }
  },
  inputs: {
    position: "position"
  },
  standalone: true,
  features: [ɵɵStandaloneFeature],
  ngContentSelectors: _c1,
  decls: 3,
  vars: 0,
  consts: [["content", ""], [1, "maplibregl-ctrl"]],
  template: function ControlComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵelementStart(0, "div", 1, 0);
      ɵɵprojection(2);
      ɵɵelementEnd();
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
var ControlComponent = _ControlComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ControlComponent, [{
    type: Component,
    args: [{
      selector: "mgl-control",
      template: '<div class="maplibregl-ctrl" #content><ng-content></ng-content></div>',
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: true
    }]
  }], () => [{
    type: MapService
  }], {
    position: [{
      type: Input
    }],
    content: [{
      type: ViewChild,
      args: ["content", {
        static: true
      }]
    }]
  });
})();
var _AttributionControlDirective = class _AttributionControlDirective {
  constructor(mapService, controlComponent) {
    this.mapService = mapService;
    this.controlComponent = controlComponent;
  }
  ngAfterContentInit() {
    this.mapService.mapCreated$.subscribe(() => {
      if (this.controlComponent.control) {
        throw new Error("Another control is already set for this control");
      }
      const options = {};
      if (this.compact !== void 0) {
        options.compact = this.compact;
      }
      if (this.customAttribution !== void 0) {
        options.customAttribution = this.customAttribution;
      }
      this.controlComponent.control = new import_maplibre_gl.AttributionControl(options);
      this.mapService.addControl(this.controlComponent.control, this.controlComponent.position);
    });
  }
};
_AttributionControlDirective.ɵfac = function AttributionControlDirective_Factory(t) {
  return new (t || _AttributionControlDirective)(ɵɵdirectiveInject(MapService), ɵɵdirectiveInject(ControlComponent, 1));
};
_AttributionControlDirective.ɵdir = ɵɵdefineDirective({
  type: _AttributionControlDirective,
  selectors: [["", "mglAttribution", ""]],
  inputs: {
    compact: "compact",
    customAttribution: "customAttribution"
  },
  standalone: true
});
var AttributionControlDirective = _AttributionControlDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AttributionControlDirective, [{
    type: Directive,
    args: [{
      selector: "[mglAttribution]",
      standalone: true
    }]
  }], () => [{
    type: MapService
  }, {
    type: ControlComponent,
    decorators: [{
      type: Host
    }]
  }], {
    compact: [{
      type: Input
    }],
    customAttribution: [{
      type: Input
    }]
  });
})();
var _FullscreenControlDirective = class _FullscreenControlDirective {
  onFullscreen() {
    this.mapService.mapInstance.resize();
  }
  constructor(mapService, controlComponent) {
    this.mapService = mapService;
    this.controlComponent = controlComponent;
  }
  ngAfterContentInit() {
    this.mapService.mapCreated$.subscribe(() => {
      if (this.controlComponent.control) {
        throw new Error("Another control is already set for this control");
      }
      this.controlComponent.control = new import_maplibre_gl.FullscreenControl({
        container: this.container
      });
      this.mapService.addControl(this.controlComponent.control, this.controlComponent.position);
    });
  }
};
_FullscreenControlDirective.ɵfac = function FullscreenControlDirective_Factory(t) {
  return new (t || _FullscreenControlDirective)(ɵɵdirectiveInject(MapService), ɵɵdirectiveInject(ControlComponent, 1));
};
_FullscreenControlDirective.ɵdir = ɵɵdefineDirective({
  type: _FullscreenControlDirective,
  selectors: [["", "mglFullscreen", ""]],
  hostBindings: function FullscreenControlDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("webkitfullscreenchange", function FullscreenControlDirective_webkitfullscreenchange_HostBindingHandler($event) {
        return ctx.onFullscreen($event.target);
      }, false, ɵɵresolveWindow);
    }
  },
  inputs: {
    container: "container"
  },
  standalone: true
});
var FullscreenControlDirective = _FullscreenControlDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FullscreenControlDirective, [{
    type: Directive,
    args: [{
      selector: "[mglFullscreen]",
      standalone: true
    }]
  }], () => [{
    type: MapService
  }, {
    type: ControlComponent,
    decorators: [{
      type: Host
    }]
  }], {
    container: [{
      type: Input
    }],
    onFullscreen: [{
      type: HostListener,
      args: ["window:webkitfullscreenchange", ["$event.target"]]
    }]
  });
})();
var _GeolocateControlDirective = class _GeolocateControlDirective {
  constructor(mapService, controlComponent) {
    this.mapService = mapService;
    this.controlComponent = controlComponent;
    this.geolocate = new EventEmitter();
  }
  ngAfterContentInit() {
    this.mapService.mapCreated$.subscribe(() => {
      if (this.controlComponent.control) {
        throw new Error("Another control is already set for this control");
      }
      const options = {
        positionOptions: this.positionOptions,
        fitBoundsOptions: this.fitBoundsOptions,
        trackUserLocation: this.trackUserLocation,
        showUserLocation: this.showUserLocation
      };
      Object.keys(options).forEach((key) => {
        const tkey = key;
        if (options[tkey] === void 0) {
          delete options[tkey];
        }
      });
      this.controlComponent.control = new import_maplibre_gl.GeolocateControl(options);
      this.controlComponent.control.on("geolocate", (data) => {
        this.geolocate.emit(data);
      });
      this.mapService.addControl(this.controlComponent.control, this.controlComponent.position);
    });
  }
};
_GeolocateControlDirective.ɵfac = function GeolocateControlDirective_Factory(t) {
  return new (t || _GeolocateControlDirective)(ɵɵdirectiveInject(MapService), ɵɵdirectiveInject(ControlComponent, 1));
};
_GeolocateControlDirective.ɵdir = ɵɵdefineDirective({
  type: _GeolocateControlDirective,
  selectors: [["", "mglGeolocate", ""]],
  inputs: {
    positionOptions: "positionOptions",
    fitBoundsOptions: "fitBoundsOptions",
    trackUserLocation: "trackUserLocation",
    showUserLocation: "showUserLocation"
  },
  outputs: {
    geolocate: "geolocate"
  },
  standalone: true
});
var GeolocateControlDirective = _GeolocateControlDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GeolocateControlDirective, [{
    type: Directive,
    args: [{
      selector: "[mglGeolocate]",
      standalone: true
    }]
  }], () => [{
    type: MapService
  }, {
    type: ControlComponent,
    decorators: [{
      type: Host
    }]
  }], {
    positionOptions: [{
      type: Input
    }],
    fitBoundsOptions: [{
      type: Input
    }],
    trackUserLocation: [{
      type: Input
    }],
    showUserLocation: [{
      type: Input
    }],
    geolocate: [{
      type: Output
    }]
  });
})();
var _NavigationControlDirective = class _NavigationControlDirective {
  constructor(mapService, controlComponent) {
    this.mapService = mapService;
    this.controlComponent = controlComponent;
  }
  ngAfterContentInit() {
    this.mapService.mapCreated$.subscribe(() => {
      if (this.controlComponent.control) {
        throw new Error("Another control is already set for this control");
      }
      const options = {};
      if (this.showCompass !== void 0) {
        options.showCompass = this.showCompass;
      }
      if (this.showZoom !== void 0) {
        options.showZoom = this.showZoom;
      }
      if (this.visualizePitch != void 0) {
        options.visualizePitch = this.visualizePitch;
      }
      this.controlComponent.control = new import_maplibre_gl.NavigationControl(options);
      this.mapService.addControl(this.controlComponent.control, this.controlComponent.position);
    });
  }
};
_NavigationControlDirective.ɵfac = function NavigationControlDirective_Factory(t) {
  return new (t || _NavigationControlDirective)(ɵɵdirectiveInject(MapService), ɵɵdirectiveInject(ControlComponent, 1));
};
_NavigationControlDirective.ɵdir = ɵɵdefineDirective({
  type: _NavigationControlDirective,
  selectors: [["", "mglNavigation", ""]],
  inputs: {
    showCompass: "showCompass",
    showZoom: "showZoom",
    visualizePitch: "visualizePitch"
  },
  standalone: true
});
var NavigationControlDirective = _NavigationControlDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NavigationControlDirective, [{
    type: Directive,
    args: [{
      selector: "[mglNavigation]",
      standalone: true
    }]
  }], () => [{
    type: MapService
  }, {
    type: ControlComponent,
    decorators: [{
      type: Host
    }]
  }], {
    showCompass: [{
      type: Input
    }],
    showZoom: [{
      type: Input
    }],
    visualizePitch: [{
      type: Input
    }]
  });
})();
var _ScaleControlDirective = class _ScaleControlDirective {
  constructor(mapService, controlComponent) {
    this.mapService = mapService;
    this.controlComponent = controlComponent;
  }
  ngOnChanges(changes) {
    if (changes.unit && !changes.unit.isFirstChange()) {
      this.controlComponent.control.setUnit(changes.unit.currentValue);
    }
  }
  ngAfterContentInit() {
    this.mapService.mapCreated$.subscribe(() => {
      if (this.controlComponent.control) {
        throw new Error("Another control is already set for this control");
      }
      const options = {};
      if (this.maxWidth !== void 0) {
        options.maxWidth = this.maxWidth;
      }
      if (this.unit !== void 0) {
        options.unit = this.unit;
      }
      this.controlComponent.control = new import_maplibre_gl.ScaleControl(options);
      this.mapService.addControl(this.controlComponent.control, this.controlComponent.position);
    });
  }
};
_ScaleControlDirective.ɵfac = function ScaleControlDirective_Factory(t) {
  return new (t || _ScaleControlDirective)(ɵɵdirectiveInject(MapService), ɵɵdirectiveInject(ControlComponent, 1));
};
_ScaleControlDirective.ɵdir = ɵɵdefineDirective({
  type: _ScaleControlDirective,
  selectors: [["", "mglScale", ""]],
  inputs: {
    maxWidth: "maxWidth",
    unit: "unit"
  },
  standalone: true,
  features: [ɵɵNgOnChangesFeature]
});
var ScaleControlDirective = _ScaleControlDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScaleControlDirective, [{
    type: Directive,
    args: [{
      selector: "[mglScale]",
      standalone: true
    }]
  }], () => [{
    type: MapService
  }, {
    type: ControlComponent,
    decorators: [{
      type: Host
    }]
  }], {
    maxWidth: [{
      type: Input
    }],
    unit: [{
      type: Input
    }]
  });
})();
var _TerrainControlDirective = class _TerrainControlDirective {
  constructor(mapService, controlComponent) {
    this.mapService = mapService;
    this.controlComponent = controlComponent;
  }
  ngAfterContentInit() {
    this.mapService.mapCreated$.subscribe(() => {
      if (this.controlComponent.control) {
        throw new Error("Another control is already set for this control");
      }
      const options = {
        source: this.source,
        exaggeration: this.exaggeration ?? 1
      };
      this.controlComponent.control = new import_maplibre_gl.TerrainControl(options);
      this.mapService.addControl(this.controlComponent.control, this.controlComponent.position);
    });
  }
};
_TerrainControlDirective.ɵfac = function TerrainControlDirective_Factory(t) {
  return new (t || _TerrainControlDirective)(ɵɵdirectiveInject(MapService), ɵɵdirectiveInject(ControlComponent, 1));
};
_TerrainControlDirective.ɵdir = ɵɵdefineDirective({
  type: _TerrainControlDirective,
  selectors: [["", "mglTerrain", ""]],
  inputs: {
    source: "source",
    exaggeration: "exaggeration"
  },
  standalone: true
});
var TerrainControlDirective = _TerrainControlDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TerrainControlDirective, [{
    type: Directive,
    args: [{
      selector: "[mglTerrain]",
      standalone: true
    }]
  }], () => [{
    type: MapService
  }, {
    type: ControlComponent,
    decorators: [{
      type: Host
    }]
  }], {
    source: [{
      type: Input
    }],
    exaggeration: [{
      type: Input
    }]
  });
})();
var _GeoJSONSourceComponent = class _GeoJSONSourceComponent {
  constructor(mapService, zone) {
    this.mapService = mapService;
    this.zone = zone;
    this.type = "geojson";
    this.updateFeatureData = new Subject();
    this.sub = new Subscription();
    this.sourceAdded = false;
    this.featureIdCounter = 0;
  }
  ngOnInit() {
    if (!this.data) {
      this.data = {
        type: "FeatureCollection",
        features: []
      };
    }
    const sub1 = this.mapService.mapLoaded$.subscribe(() => {
      this.init();
      const sub = fromEvent(this.mapService.mapInstance, "styledata").pipe(filter(() => !this.mapService.mapInstance.getSource(this.id))).subscribe(() => {
        this.init();
      });
      this.sub.add(sub);
    });
    this.sub.add(sub1);
  }
  ngOnChanges(changes) {
    if (!this.sourceAdded) {
      return;
    }
    if (changes.maxzoom && !changes.maxzoom.isFirstChange() || changes.attribution && !changes.attribution.isFirstChange() || changes.buffer && !changes.buffer.isFirstChange() || changes.tolerance && !changes.tolerance.isFirstChange() || changes.cluster && !changes.cluster.isFirstChange() || changes.clusterRadius && !changes.clusterRadius.isFirstChange() || changes.clusterMaxZoom && !changes.clusterMaxZoom.isFirstChange() || changes.clusterMinPoints && !changes.clusterMinPoints.isFirstChange() || changes.clusterProperties && !changes.clusterProperties.isFirstChange() || changes.lineMetrics && !changes.lineMetrics.isFirstChange() || changes.generateId && !changes.generateId.isFirstChange() || changes.promoteId && !changes.promoteId.isFirstChange() || changes.filter && !changes.filter.isFirstChange()) {
      this.ngOnDestroy();
      this.ngOnInit();
    }
    if (changes.data && !changes.data.isFirstChange()) {
      const source = this.mapService.getSource(this.id);
      if (source === void 0) {
        return;
      }
      source.setData(this.data);
    }
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
    if (this.sourceAdded) {
      this.mapService.removeSource(this.id);
      this.sourceAdded = false;
    }
  }
  /**
   * For clustered sources, fetches the zoom at which the given cluster expands.
   * @param clusterId The value of the cluster's cluster_id property.
   */
  getClusterExpansionZoom(clusterId) {
    return __async(this, null, function* () {
      const source = this.mapService.getSource(this.id);
      return this.zone.run(() => __async(this, null, function* () {
        return source.getClusterExpansionZoom(clusterId);
      }));
    });
  }
  /**
   * For clustered sources, fetches the children of the given cluster on the next zoom level (as an array of GeoJSON features).
   * @param clusterId The value of the cluster's cluster_id property.
   */
  getClusterChildren(clusterId) {
    return __async(this, null, function* () {
      const source = this.mapService.getSource(this.id);
      return this.zone.run(() => __async(this, null, function* () {
        return source.getClusterChildren(clusterId);
      }));
    });
  }
  /**
   * For clustered sources, fetches the original points that belong to the cluster (as an array of GeoJSON features).
   * @param clusterId The value of the cluster's cluster_id property.
   * @param limit The maximum number of features to return.
   * @param offset The number of features to skip (e.g. for pagination).
   */
  getClusterLeaves(clusterId, limit, offset) {
    return __async(this, null, function* () {
      const source = this.mapService.getSource(this.id);
      return this.zone.run(() => __async(this, null, function* () {
        return source.getClusterLeaves(clusterId, limit, offset);
      }));
    });
  }
  _addFeature(feature) {
    const collection = this.data;
    collection.features.push(feature);
    this.updateFeatureData.next(void 0);
  }
  _removeFeature(feature) {
    const collection = this.data;
    const index = collection.features.indexOf(feature);
    if (index > -1) {
      collection.features.splice(index, 1);
    }
    this.updateFeatureData.next(void 0);
  }
  _getNewFeatureId() {
    return ++this.featureIdCounter;
  }
  init() {
    const source = {
      type: "geojson",
      data: this.data,
      maxzoom: this.maxzoom,
      attribution: this.attribution,
      buffer: this.buffer,
      tolerance: this.tolerance,
      cluster: this.cluster,
      clusterRadius: this.clusterRadius,
      clusterMaxZoom: this.clusterMaxZoom,
      clusterMinPoints: this.clusterMinPoints,
      clusterProperties: this.clusterProperties,
      lineMetrics: this.lineMetrics,
      generateId: this.generateId,
      promoteId: this.promoteId,
      filter: this.filter
    };
    this.mapService.addSource(this.id, source);
    const sub = this.updateFeatureData.pipe(debounceTime(0)).subscribe(() => {
      const source2 = this.mapService.getSource(this.id);
      if (source2 === void 0) {
        return;
      }
      source2.setData(this.data);
    });
    this.sub.add(sub);
    this.sourceAdded = true;
  }
};
_GeoJSONSourceComponent.ɵfac = function GeoJSONSourceComponent_Factory(t) {
  return new (t || _GeoJSONSourceComponent)(ɵɵdirectiveInject(MapService), ɵɵdirectiveInject(NgZone));
};
_GeoJSONSourceComponent.ɵcmp = ɵɵdefineComponent({
  type: _GeoJSONSourceComponent,
  selectors: [["mgl-geojson-source"]],
  inputs: {
    id: "id",
    data: "data",
    maxzoom: "maxzoom",
    attribution: "attribution",
    buffer: "buffer",
    tolerance: "tolerance",
    cluster: "cluster",
    clusterRadius: "clusterRadius",
    clusterMaxZoom: "clusterMaxZoom",
    clusterMinPoints: "clusterMinPoints",
    clusterProperties: "clusterProperties",
    lineMetrics: "lineMetrics",
    generateId: "generateId",
    promoteId: "promoteId",
    filter: "filter"
  },
  standalone: true,
  features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
  decls: 0,
  vars: 0,
  template: function GeoJSONSourceComponent_Template(rf, ctx) {
  },
  encapsulation: 2,
  changeDetection: 0
});
var GeoJSONSourceComponent = _GeoJSONSourceComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GeoJSONSourceComponent, [{
    type: Component,
    args: [{
      selector: "mgl-geojson-source",
      template: "",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: true
    }]
  }], () => [{
    type: MapService
  }, {
    type: NgZone
  }], {
    id: [{
      type: Input
    }],
    data: [{
      type: Input
    }],
    maxzoom: [{
      type: Input
    }],
    attribution: [{
      type: Input
    }],
    buffer: [{
      type: Input
    }],
    tolerance: [{
      type: Input
    }],
    cluster: [{
      type: Input
    }],
    clusterRadius: [{
      type: Input
    }],
    clusterMaxZoom: [{
      type: Input
    }],
    clusterMinPoints: [{
      type: Input
    }],
    clusterProperties: [{
      type: Input
    }],
    lineMetrics: [{
      type: Input
    }],
    generateId: [{
      type: Input
    }],
    promoteId: [{
      type: Input
    }],
    filter: [{
      type: Input
    }]
  });
})();
var _FeatureComponent = class _FeatureComponent {
  constructor(geoJSONSourceComponent) {
    this.geoJSONSourceComponent = geoJSONSourceComponent;
    this.type = "Feature";
  }
  ngOnInit() {
    if (!this.id) {
      this.id = this.geoJSONSourceComponent._getNewFeatureId();
    }
    this.feature = {
      type: this.type,
      geometry: this.geometry,
      properties: this.properties ? this.properties : {}
    };
    this.feature.id = this.id;
    this.geoJSONSourceComponent._addFeature(this.feature);
  }
  ngOnDestroy() {
    this.geoJSONSourceComponent._removeFeature(this.feature);
  }
  updateCoordinates(coordinates) {
    this.feature.geometry.coordinates = coordinates;
    this.geoJSONSourceComponent.updateFeatureData.next(void 0);
  }
};
_FeatureComponent.ɵfac = function FeatureComponent_Factory(t) {
  return new (t || _FeatureComponent)(ɵɵdirectiveInject(forwardRef(() => GeoJSONSourceComponent)));
};
_FeatureComponent.ɵcmp = ɵɵdefineComponent({
  type: _FeatureComponent,
  selectors: [["mgl-feature"]],
  inputs: {
    id: "id",
    geometry: "geometry",
    properties: "properties"
  },
  standalone: true,
  features: [ɵɵStandaloneFeature],
  decls: 0,
  vars: 0,
  template: function FeatureComponent_Template(rf, ctx) {
  },
  encapsulation: 2,
  changeDetection: 0
});
var FeatureComponent = _FeatureComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FeatureComponent, [{
    type: Component,
    args: [{
      selector: "mgl-feature",
      template: "",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: true
    }]
  }], () => [{
    type: GeoJSONSourceComponent,
    decorators: [{
      type: Inject,
      args: [forwardRef(() => GeoJSONSourceComponent)]
    }]
  }], {
    id: [{
      type: Input
    }],
    geometry: [{
      type: Input
    }],
    properties: [{
      type: Input
    }]
  });
})();
var _DraggableDirective = class _DraggableDirective {
  constructor(mapService, ngZone, featureComponent) {
    this.mapService = mapService;
    this.ngZone = ngZone;
    this.featureComponent = featureComponent;
    this.featureDragStart = new EventEmitter();
    this.featureDragEnd = new EventEmitter();
    this.featureDrag = new EventEmitter();
    this.sub = new Subscription();
  }
  ngOnInit() {
    let enter$;
    let leave$;
    let updateCoords;
    if (this.featureComponent && this.layer) {
      enter$ = this.layer.layerMouseEnter;
      leave$ = this.layer.layerMouseLeave;
      updateCoords = this.featureComponent.updateCoordinates.bind(this.featureComponent);
      if (this.featureComponent.geometry.type !== "Point") {
        throw new Error("mglDraggable only support point feature");
      }
    } else {
      throw new Error("mglDraggable can only be used on Feature (with a layer as input) or Marker");
    }
    this.handleDraggable(enter$, leave$, updateCoords);
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
  handleDraggable(enter$, leave$, updateCoords) {
    let moving = false;
    let inside = false;
    this.mapService.mapCreated$.subscribe(() => {
      const mouseUp$ = fromEvent(this.mapService.mapInstance, "mouseup");
      const dragStart$ = enter$.pipe(filter(() => !moving), filter((evt) => this.filterFeature(evt)), tap(() => {
        inside = true;
        this.mapService.changeCanvasCursor("move");
        this.mapService.updateDragPan(false);
      }), switchMap(() => fromEvent(this.mapService.mapInstance, "mousedown").pipe(takeUntil(leave$))));
      const dragging$ = dragStart$.pipe(switchMap(() => fromEvent(this.mapService.mapInstance, "mousemove").pipe(takeUntil(mouseUp$))));
      const dragEnd$ = dragStart$.pipe(switchMap(() => mouseUp$.pipe(take(1))));
      this.sub.add(dragStart$.subscribe((evt) => {
        moving = true;
        if (this.featureDragStart.observers.length) {
          this.ngZone.run(() => {
            this.featureDragStart.emit(evt);
          });
        }
      }));
      this.sub.add(dragging$.subscribe((evt) => {
        updateCoords([evt.lngLat.lng, evt.lngLat.lat]);
        if (this.featureDrag.observers.length) {
          this.ngZone.run(() => {
            this.featureDrag.emit(evt);
          });
        }
      }));
      this.sub.add(dragEnd$.subscribe((evt) => {
        moving = false;
        if (this.featureDragEnd.observers.length) {
          this.ngZone.run(() => {
            this.featureDragEnd.emit(evt);
          });
        }
        if (!inside) {
          this.mapService.changeCanvasCursor("");
          this.mapService.updateDragPan(true);
        }
      }));
      this.sub.add(leave$.pipe(tap(() => inside = false), filter(() => !moving)).subscribe(() => {
        this.mapService.changeCanvasCursor("");
        this.mapService.updateDragPan(true);
      }));
    });
  }
  filterFeature(evt) {
    if (this.featureComponent && this.layer) {
      const feature = this.mapService.queryRenderedFeatures(evt.point, {
        layers: [this.layer.id],
        filter: ["all", ["==", "$type", "Point"], ["==", "$id", this.featureComponent.id]]
      })[0];
      if (!feature) {
        return false;
      }
    }
    return true;
  }
};
_DraggableDirective.ɵfac = function DraggableDirective_Factory(t) {
  return new (t || _DraggableDirective)(ɵɵdirectiveInject(MapService), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(FeatureComponent, 9));
};
_DraggableDirective.ɵdir = ɵɵdefineDirective({
  type: _DraggableDirective,
  selectors: [["", "mglDraggable", ""]],
  inputs: {
    layer: [InputFlags.None, "mglDraggable", "layer"]
  },
  outputs: {
    featureDragStart: "featureDragStart",
    featureDragEnd: "featureDragEnd",
    featureDrag: "featureDrag"
  },
  standalone: true
});
var DraggableDirective = _DraggableDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DraggableDirective, [{
    type: Directive,
    args: [{
      selector: "[mglDraggable]",
      standalone: true
    }]
  }], () => [{
    type: MapService
  }, {
    type: NgZone
  }, {
    type: FeatureComponent,
    decorators: [{
      type: Optional
    }, {
      type: Host
    }]
  }], {
    layer: [{
      type: Input,
      args: ["mglDraggable"]
    }],
    featureDragStart: [{
      type: Output
    }],
    featureDragEnd: [{
      type: Output
    }],
    featureDrag: [{
      type: Output
    }]
  });
})();
var _ImageComponent = class _ImageComponent {
  constructor(mapService, zone) {
    this.mapService = mapService;
    this.zone = zone;
    this.imageError = new EventEmitter();
    this.imageLoaded = new EventEmitter();
    this.isAdded = false;
    this.isAdding = false;
  }
  ngOnInit() {
    this.sub = this.mapService.mapLoaded$.pipe(switchMap(() => fromEvent(this.mapService.mapInstance, "styledata").pipe(startWith(void 0), filter(() => !this.isAdding && !this.mapService.mapInstance.hasImage(this.id))))).subscribe(() => this.init());
  }
  ngOnChanges(changes) {
    if (changes.data && !changes.data.isFirstChange() || changes.options && !changes.options.isFirstChange() || changes.url && !changes.url.isFirstChange()) {
      this.ngOnDestroy();
      this.ngOnInit();
    }
  }
  ngOnDestroy() {
    if (this.isAdded) {
      this.mapService.removeImage(this.id);
    }
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
  init() {
    return __async(this, null, function* () {
      this.isAdding = true;
      if (this.data) {
        this.mapService.addImage(this.id, this.data, this.options);
        this.isAdded = true;
        this.isAdding = false;
      } else if (this.url) {
        try {
          yield this.mapService.loadAndAddImage(this.id, this.url, this.options);
          this.isAdded = true;
          this.isAdding = false;
          this.zone.run(() => {
            this.imageLoaded.emit();
          });
        } catch (error) {
          this.zone.run(() => {
            this.imageError.emit(error);
          });
        }
      }
    });
  }
};
_ImageComponent.ɵfac = function ImageComponent_Factory(t) {
  return new (t || _ImageComponent)(ɵɵdirectiveInject(MapService), ɵɵdirectiveInject(NgZone));
};
_ImageComponent.ɵcmp = ɵɵdefineComponent({
  type: _ImageComponent,
  selectors: [["mgl-image"]],
  inputs: {
    id: "id",
    data: "data",
    options: "options",
    url: "url"
  },
  outputs: {
    imageError: "imageError",
    imageLoaded: "imageLoaded"
  },
  standalone: true,
  features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
  decls: 0,
  vars: 0,
  template: function ImageComponent_Template(rf, ctx) {
  },
  encapsulation: 2
});
var ImageComponent = _ImageComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ImageComponent, [{
    type: Component,
    args: [{
      selector: "mgl-image",
      template: "",
      standalone: true
    }]
  }], () => [{
    type: MapService
  }, {
    type: NgZone
  }], {
    id: [{
      type: Input
    }],
    data: [{
      type: Input
    }],
    options: [{
      type: Input
    }],
    url: [{
      type: Input
    }],
    imageError: [{
      type: Output
    }],
    imageLoaded: [{
      type: Output
    }]
  });
})();
var _LayerComponent = class _LayerComponent {
  constructor(mapService) {
    this.mapService = mapService;
    this.layerClick = new EventEmitter();
    this.layerDblClick = new EventEmitter();
    this.layerMouseDown = new EventEmitter();
    this.layerMouseUp = new EventEmitter();
    this.layerMouseEnter = new EventEmitter();
    this.layerMouseLeave = new EventEmitter();
    this.layerMouseMove = new EventEmitter();
    this.layerMouseOver = new EventEmitter();
    this.layerMouseOut = new EventEmitter();
    this.layerContextMenu = new EventEmitter();
    this.layerTouchStart = new EventEmitter();
    this.layerTouchEnd = new EventEmitter();
    this.layerTouchCancel = new EventEmitter();
    this.layerAdded = false;
  }
  ngOnInit() {
    this.sub = this.mapService.mapLoaded$.pipe(switchMap(() => fromEvent(this.mapService.mapInstance, "styledata").pipe(map(() => false), filter(() => !this.mapService.mapInstance.getLayer(this.id)), startWith(true)))).subscribe((bindEvents) => this.init(bindEvents));
  }
  ngOnChanges(changes) {
    if (!this.layerAdded) {
      return;
    }
    if (changes.paint && !changes.paint.isFirstChange()) {
      this.mapService.setAllLayerPaintProperty(this.id, changes.paint.currentValue);
    }
    if (changes.layout && !changes.layout.isFirstChange()) {
      this.mapService.setAllLayerLayoutProperty(this.id, changes.layout.currentValue);
    }
    if (changes.filter && !changes.filter.isFirstChange()) {
      this.mapService.setLayerFilter(this.id, changes.filter.currentValue);
    }
    if (changes.before && !changes.before.isFirstChange()) {
      this.mapService.setLayerBefore(this.id, changes.before.currentValue);
    }
    if (changes.minzoom && !changes.minzoom.isFirstChange() || changes.maxzoom && !changes.maxzoom.isFirstChange()) {
      this.mapService.setLayerZoomRange(this.id, this.minzoom, this.maxzoom);
    }
  }
  ngOnDestroy() {
    if (this.layerAdded) {
      this.mapService.removeLayer(this.id);
      if (void 0 !== this.sourceIdAdded) {
        if (this.mapService.getSource(this.sourceIdAdded)) {
          this.mapService.removeSource(this.sourceIdAdded);
        }
      }
    }
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
  init(bindEvents) {
    const layer = {
      layerOptions: {
        id: this.id,
        type: this.type,
        source: this.source,
        metadata: this.metadata,
        // eslint-disable-next-line @typescript-eslint/naming-convention
        "source-layer": this.sourceLayer,
        minzoom: this.minzoom,
        maxzoom: this.maxzoom,
        filter: this.filter,
        layout: this.layout,
        paint: this.paint
      },
      layerEvents: {
        layerClick: this.layerClick,
        layerDblClick: this.layerDblClick,
        layerMouseDown: this.layerMouseDown,
        layerMouseUp: this.layerMouseUp,
        layerMouseEnter: this.layerMouseEnter,
        layerMouseLeave: this.layerMouseLeave,
        layerMouseMove: this.layerMouseMove,
        layerMouseOver: this.layerMouseOver,
        layerMouseOut: this.layerMouseOut,
        layerContextMenu: this.layerContextMenu,
        layerTouchStart: this.layerTouchStart,
        layerTouchEnd: this.layerTouchEnd,
        layerTouchCancel: this.layerTouchCancel
      }
    };
    if (this.removeSource && typeof this.source !== "string") {
      if (void 0 === this.mapService.getSource(this.id)) {
        this.sourceIdAdded = this.id;
      }
    }
    this.mapService.addLayer(layer, bindEvents, this.before);
    if (void 0 !== this.sourceIdAdded) {
      if (void 0 === this.mapService.getSource(this.sourceIdAdded)) {
        this.sourceIdAdded = void 0;
      }
    }
    this.layerAdded = true;
  }
};
_LayerComponent.ɵfac = function LayerComponent_Factory(t) {
  return new (t || _LayerComponent)(ɵɵdirectiveInject(MapService));
};
_LayerComponent.ɵcmp = ɵɵdefineComponent({
  type: _LayerComponent,
  selectors: [["mgl-layer"]],
  inputs: {
    id: "id",
    source: "source",
    type: "type",
    metadata: "metadata",
    sourceLayer: "sourceLayer",
    removeSource: "removeSource",
    filter: "filter",
    layout: "layout",
    paint: "paint",
    before: "before",
    minzoom: "minzoom",
    maxzoom: "maxzoom"
  },
  outputs: {
    layerClick: "layerClick",
    layerDblClick: "layerDblClick",
    layerMouseDown: "layerMouseDown",
    layerMouseUp: "layerMouseUp",
    layerMouseEnter: "layerMouseEnter",
    layerMouseLeave: "layerMouseLeave",
    layerMouseMove: "layerMouseMove",
    layerMouseOver: "layerMouseOver",
    layerMouseOut: "layerMouseOut",
    layerContextMenu: "layerContextMenu",
    layerTouchStart: "layerTouchStart",
    layerTouchEnd: "layerTouchEnd",
    layerTouchCancel: "layerTouchCancel"
  },
  standalone: true,
  features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
  decls: 0,
  vars: 0,
  template: function LayerComponent_Template(rf, ctx) {
  },
  encapsulation: 2
});
var LayerComponent = _LayerComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LayerComponent, [{
    type: Component,
    args: [{
      selector: "mgl-layer",
      template: "",
      standalone: true
    }]
  }], () => [{
    type: MapService
  }], {
    id: [{
      type: Input
    }],
    source: [{
      type: Input
    }],
    type: [{
      type: Input
    }],
    metadata: [{
      type: Input
    }],
    sourceLayer: [{
      type: Input
    }],
    removeSource: [{
      type: Input
    }],
    filter: [{
      type: Input
    }],
    layout: [{
      type: Input
    }],
    paint: [{
      type: Input
    }],
    before: [{
      type: Input
    }],
    minzoom: [{
      type: Input
    }],
    maxzoom: [{
      type: Input
    }],
    layerClick: [{
      type: Output
    }],
    layerDblClick: [{
      type: Output
    }],
    layerMouseDown: [{
      type: Output
    }],
    layerMouseUp: [{
      type: Output
    }],
    layerMouseEnter: [{
      type: Output
    }],
    layerMouseLeave: [{
      type: Output
    }],
    layerMouseMove: [{
      type: Output
    }],
    layerMouseOver: [{
      type: Output
    }],
    layerMouseOut: [{
      type: Output
    }],
    layerContextMenu: [{
      type: Output
    }],
    layerTouchStart: [{
      type: Output
    }],
    layerTouchEnd: [{
      type: Output
    }],
    layerTouchCancel: [{
      type: Output
    }]
  });
})();
var _MapComponent = class _MapComponent {
  get mapInstance() {
    return this.mapService.mapInstance;
  }
  constructor(mapService, elementRef) {
    this.mapService = mapService;
    this.elementRef = elementRef;
    this.movingMethod = "flyTo";
    this.mapResize = new EventEmitter();
    this.mapRemove = new EventEmitter();
    this.mapMouseDown = new EventEmitter();
    this.mapMouseUp = new EventEmitter();
    this.mapMouseMove = new EventEmitter();
    this.mapClick = new EventEmitter();
    this.mapDblClick = new EventEmitter();
    this.mapMouseOver = new EventEmitter();
    this.mapMouseOut = new EventEmitter();
    this.mapContextMenu = new EventEmitter();
    this.mapTouchStart = new EventEmitter();
    this.mapTouchEnd = new EventEmitter();
    this.mapTouchMove = new EventEmitter();
    this.mapTouchCancel = new EventEmitter();
    this.mapWheel = new EventEmitter();
    this.moveStart = new EventEmitter();
    this.move = new EventEmitter();
    this.moveEnd = new EventEmitter();
    this.mapDragStart = new EventEmitter();
    this.mapDrag = new EventEmitter();
    this.mapDragEnd = new EventEmitter();
    this.zoomStart = new EventEmitter();
    this.zoomEvt = new EventEmitter();
    this.zoomEnd = new EventEmitter();
    this.rotateStart = new EventEmitter();
    this.rotate = new EventEmitter();
    this.rotateEnd = new EventEmitter();
    this.pitchStart = new EventEmitter();
    this.pitchEvt = new EventEmitter();
    this.pitchEnd = new EventEmitter();
    this.boxZoomStart = new EventEmitter();
    this.boxZoomEnd = new EventEmitter();
    this.boxZoomCancel = new EventEmitter();
    this.webGlContextLost = new EventEmitter();
    this.webGlContextRestored = new EventEmitter();
    this.mapLoad = new EventEmitter();
    this.idle = new EventEmitter();
    this.render = new EventEmitter();
    this.mapError = new EventEmitter();
    this.data = new EventEmitter();
    this.styleData = new EventEmitter();
    this.sourceData = new EventEmitter();
    this.dataLoading = new EventEmitter();
    this.styleDataLoading = new EventEmitter();
    this.sourceDataLoading = new EventEmitter();
    this.styleImageMissing = new EventEmitter();
    this.subscriptions = [];
    afterNextRender(() => {
      if (this.preserveDrawingBuffer) {
        const htmlElement = this.elementRef.nativeElement;
        htmlElement.setAttribute("data-cy", "map");
        this.subscriptions.push(this.mapLoad.subscribe(() => {
          htmlElement.setAttribute("data-loaded", "true");
        }));
        this.subscriptions.push(this.idle.subscribe(() => {
          htmlElement.setAttribute("data-idle", "true");
        }));
        this.subscriptions.push(this.render.subscribe(() => {
          htmlElement.removeAttribute("data-idle");
        }));
      }
      this.mapService.setup({
        mapOptions: {
          collectResourceTiming: this.collectResourceTiming,
          container: this.mapContainer.nativeElement,
          crossSourceCollisions: this.crossSourceCollisions,
          fadeDuration: this.fadeDuration,
          minZoom: this.minZoom,
          maxZoom: this.maxZoom,
          minPitch: this.minPitch,
          maxPitch: this.maxPitch,
          style: this.style,
          hash: this.hash,
          interactive: this.interactive,
          bearingSnap: this.bearingSnap,
          pitchWithRotate: this.pitchWithRotate,
          clickTolerance: this.clickTolerance,
          attributionControl: this.attributionControl,
          logoPosition: this.logoPosition,
          failIfMajorPerformanceCaveat: this.failIfMajorPerformanceCaveat,
          preserveDrawingBuffer: this.preserveDrawingBuffer,
          refreshExpiredTiles: this.refreshExpiredTiles,
          maxBounds: this.maxBounds,
          scrollZoom: this.scrollZoom,
          boxZoom: this.boxZoom,
          dragRotate: this.dragRotate,
          dragPan: this.dragPan,
          keyboard: this.keyboard,
          doubleClickZoom: this.doubleClickZoom,
          touchPitch: this.touchPitch,
          touchZoomRotate: this.touchZoomRotate,
          trackResize: this.trackResize,
          center: this.center,
          zoom: this.zoom,
          bearing: this.bearing,
          pitch: this.pitch,
          renderWorldCopies: this.renderWorldCopies,
          maxTileCacheSize: this.maxTileCacheSize,
          localIdeographFontFamily: this.localIdeographFontFamily,
          transformRequest: this.transformRequest,
          bounds: this.bounds ? this.bounds : this.fitBounds,
          fitBoundsOptions: this.fitBoundsOptions,
          antialias: this.antialias,
          locale: this.locale,
          cooperativeGestures: this.cooperativeGestures,
          terrain: this.terrain
        },
        mapEvents: this
      });
      if (this.cursorStyle) {
        this.mapService.changeCanvasCursor(this.cursorStyle);
      }
    });
  }
  ngOnDestroy() {
    this.mapService.destroyMap();
    for (const subscription of this.subscriptions) {
      subscription.unsubscribe();
    }
  }
  ngOnChanges(changes) {
    return __async(this, null, function* () {
      yield firstValueFrom(this.mapService.mapCreated$);
      if (changes.cursorStyle && !changes.cursorStyle.isFirstChange()) {
        this.mapService.changeCanvasCursor(changes.cursorStyle.currentValue);
      }
      if (changes.minZoom && !changes.minZoom.isFirstChange()) {
        this.mapService.updateMinZoom(changes.minZoom.currentValue);
      }
      if (changes.maxZoom && !changes.maxZoom.isFirstChange()) {
        this.mapService.updateMaxZoom(changes.maxZoom.currentValue);
      }
      if (changes.minPitch && !changes.minPitch.isFirstChange()) {
        this.mapService.updateMinPitch(changes.minPitch.currentValue);
      }
      if (changes.maxPitch && !changes.maxPitch.isFirstChange()) {
        this.mapService.updateMaxPitch(changes.maxPitch.currentValue);
      }
      if (changes.renderWorldCopies && !changes.renderWorldCopies.isFirstChange()) {
        this.mapService.updateRenderWorldCopies(changes.renderWorldCopies.currentValue);
      }
      if (changes.scrollZoom && !changes.scrollZoom.isFirstChange()) {
        this.mapService.updateScrollZoom(changes.scrollZoom.currentValue);
      }
      if (changes.dragRotate && !changes.dragRotate.isFirstChange()) {
        this.mapService.updateDragRotate(changes.dragRotate.currentValue);
      }
      if (changes.touchPitch && !changes.touchPitch.isFirstChange()) {
        this.mapService.updateTouchPitch(changes.touchPitch.currentValue);
      }
      if (changes.touchZoomRotate && !changes.touchZoomRotate.isFirstChange()) {
        this.mapService.updateTouchZoomRotate(changes.touchZoomRotate.currentValue);
      }
      if (changes.doubleClickZoom && !changes.doubleClickZoom.isFirstChange()) {
        this.mapService.updateDoubleClickZoom(changes.doubleClickZoom.currentValue);
      }
      if (changes.keyboard && !changes.keyboard.isFirstChange()) {
        this.mapService.updateKeyboard(changes.keyboard.currentValue);
      }
      if (changes.dragPan && !changes.dragPan.isFirstChange()) {
        this.mapService.updateDragPan(changes.dragPan.currentValue);
      }
      if (changes.boxZoom && !changes.boxZoom.isFirstChange()) {
        this.mapService.updateBoxZoom(changes.boxZoom.currentValue);
      }
      if (changes.style && !changes.style.isFirstChange()) {
        this.mapService.updateStyle(changes.style.currentValue);
      }
      if (changes.maxBounds && !changes.maxBounds.isFirstChange()) {
        this.mapService.updateMaxBounds(changes.maxBounds.currentValue);
      }
      if (changes.fitBounds && changes.fitBounds.currentValue && !changes.fitBounds.isFirstChange()) {
        this.mapService.fitBounds(changes.fitBounds.currentValue, this.fitBoundsOptions);
      }
      if (changes.fitScreenCoordinates && changes.fitScreenCoordinates.currentValue) {
        if ((this.center || this.zoom || this.pitch || this.fitBounds) && changes.fitScreenCoordinates.isFirstChange()) {
          console.warn("[ngx-maplibre-gl] center / zoom / pitch / fitBounds inputs are being overridden by fitScreenCoordinates input");
        }
        this.mapService.fitScreenCoordinates(changes.fitScreenCoordinates.currentValue, this.bearing ? this.bearing[0] : 0, this.movingOptions);
      }
      if (this.centerWithPanTo && changes.center && !changes.center.isFirstChange() && !changes.zoom && !changes.bearing && !changes.pitch) {
        this.mapService.panTo(this.center, this.panToOptions);
      } else if (changes.center && !changes.center.isFirstChange() || changes.zoom && !changes.zoom.isFirstChange() || changes.bearing && !changes.bearing.isFirstChange() && !changes.fitScreenCoordinates || changes.pitch && !changes.pitch.isFirstChange()) {
        this.mapService.move(this.movingMethod, this.movingOptions, changes.zoom && this.zoom ? this.zoom[0] : void 0, changes.center ? this.center : void 0, changes.bearing && this.bearing ? this.bearing[0] : void 0, changes.pitch && this.pitch ? this.pitch[0] : void 0);
      }
      if (changes.terrain && !changes.terrain.isFirstChange()) {
        this.mapService.updateTerrain(changes.terrain.currentValue);
      }
    });
  }
};
_MapComponent.ɵfac = function MapComponent_Factory(t) {
  return new (t || _MapComponent)(ɵɵdirectiveInject(MapService), ɵɵdirectiveInject(ElementRef));
};
_MapComponent.ɵcmp = ɵɵdefineComponent({
  type: _MapComponent,
  selectors: [["mgl-map"]],
  viewQuery: function MapComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c2, 7);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.mapContainer = _t.first);
    }
  },
  inputs: {
    collectResourceTiming: "collectResourceTiming",
    crossSourceCollisions: "crossSourceCollisions",
    customMapboxApiUrl: "customMapboxApiUrl",
    fadeDuration: "fadeDuration",
    hash: "hash",
    refreshExpiredTiles: "refreshExpiredTiles",
    failIfMajorPerformanceCaveat: "failIfMajorPerformanceCaveat",
    bearingSnap: "bearingSnap",
    interactive: "interactive",
    pitchWithRotate: "pitchWithRotate",
    clickTolerance: "clickTolerance",
    attributionControl: "attributionControl",
    logoPosition: "logoPosition",
    maxTileCacheSize: "maxTileCacheSize",
    localIdeographFontFamily: "localIdeographFontFamily",
    preserveDrawingBuffer: "preserveDrawingBuffer",
    trackResize: "trackResize",
    transformRequest: "transformRequest",
    bounds: "bounds",
    antialias: "antialias",
    locale: "locale",
    cooperativeGestures: "cooperativeGestures",
    minZoom: "minZoom",
    maxZoom: "maxZoom",
    minPitch: "minPitch",
    maxPitch: "maxPitch",
    scrollZoom: "scrollZoom",
    dragRotate: "dragRotate",
    touchPitch: "touchPitch",
    touchZoomRotate: "touchZoomRotate",
    doubleClickZoom: "doubleClickZoom",
    keyboard: "keyboard",
    dragPan: "dragPan",
    boxZoom: "boxZoom",
    style: "style",
    center: "center",
    maxBounds: "maxBounds",
    zoom: "zoom",
    bearing: "bearing",
    pitch: "pitch",
    fitBoundsOptions: "fitBoundsOptions",
    renderWorldCopies: "renderWorldCopies",
    terrain: "terrain",
    movingMethod: "movingMethod",
    movingOptions: "movingOptions",
    fitBounds: "fitBounds",
    fitScreenCoordinates: "fitScreenCoordinates",
    centerWithPanTo: "centerWithPanTo",
    panToOptions: "panToOptions",
    cursorStyle: "cursorStyle"
  },
  outputs: {
    mapResize: "mapResize",
    mapRemove: "mapRemove",
    mapMouseDown: "mapMouseDown",
    mapMouseUp: "mapMouseUp",
    mapMouseMove: "mapMouseMove",
    mapClick: "mapClick",
    mapDblClick: "mapDblClick",
    mapMouseOver: "mapMouseOver",
    mapMouseOut: "mapMouseOut",
    mapContextMenu: "mapContextMenu",
    mapTouchStart: "mapTouchStart",
    mapTouchEnd: "mapTouchEnd",
    mapTouchMove: "mapTouchMove",
    mapTouchCancel: "mapTouchCancel",
    mapWheel: "mapWheel",
    moveStart: "moveStart",
    move: "move",
    moveEnd: "moveEnd",
    mapDragStart: "mapDragStart",
    mapDrag: "mapDrag",
    mapDragEnd: "mapDragEnd",
    zoomStart: "zoomStart",
    zoomEvt: "zoomEvt",
    zoomEnd: "zoomEnd",
    rotateStart: "rotateStart",
    rotate: "rotate",
    rotateEnd: "rotateEnd",
    pitchStart: "pitchStart",
    pitchEvt: "pitchEvt",
    pitchEnd: "pitchEnd",
    boxZoomStart: "boxZoomStart",
    boxZoomEnd: "boxZoomEnd",
    boxZoomCancel: "boxZoomCancel",
    webGlContextLost: "webGlContextLost",
    webGlContextRestored: "webGlContextRestored",
    mapLoad: "mapLoad",
    idle: "idle",
    render: "render",
    mapError: "mapError",
    data: "data",
    styleData: "styleData",
    sourceData: "sourceData",
    dataLoading: "dataLoading",
    styleDataLoading: "styleDataLoading",
    sourceDataLoading: "sourceDataLoading",
    styleImageMissing: "styleImageMissing"
  },
  standalone: true,
  features: [ɵɵProvidersFeature([MapService]), ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
  decls: 2,
  vars: 0,
  consts: [["container", ""]],
  template: function MapComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelement(0, "div", null, 0);
    }
  },
  styles: ["[_nghost-%COMP%]{display:block}div[_ngcontent-%COMP%]{height:100%;width:100%}"],
  changeDetection: 0
});
var MapComponent = _MapComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MapComponent, [{
    type: Component,
    args: [{
      selector: "mgl-map",
      template: "<div #container></div>",
      providers: [MapService],
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: true,
      styles: [":host{display:block}div{height:100%;width:100%}\n"]
    }]
  }], () => [{
    type: MapService
  }, {
    type: ElementRef
  }], {
    collectResourceTiming: [{
      type: Input
    }],
    crossSourceCollisions: [{
      type: Input
    }],
    customMapboxApiUrl: [{
      type: Input
    }],
    fadeDuration: [{
      type: Input
    }],
    hash: [{
      type: Input
    }],
    refreshExpiredTiles: [{
      type: Input
    }],
    failIfMajorPerformanceCaveat: [{
      type: Input
    }],
    bearingSnap: [{
      type: Input
    }],
    interactive: [{
      type: Input
    }],
    pitchWithRotate: [{
      type: Input
    }],
    clickTolerance: [{
      type: Input
    }],
    attributionControl: [{
      type: Input
    }],
    logoPosition: [{
      type: Input
    }],
    maxTileCacheSize: [{
      type: Input
    }],
    localIdeographFontFamily: [{
      type: Input
    }],
    preserveDrawingBuffer: [{
      type: Input
    }],
    trackResize: [{
      type: Input
    }],
    transformRequest: [{
      type: Input
    }],
    bounds: [{
      type: Input
    }],
    antialias: [{
      type: Input
    }],
    locale: [{
      type: Input
    }],
    cooperativeGestures: [{
      type: Input
    }],
    minZoom: [{
      type: Input
    }],
    maxZoom: [{
      type: Input
    }],
    minPitch: [{
      type: Input
    }],
    maxPitch: [{
      type: Input
    }],
    scrollZoom: [{
      type: Input
    }],
    dragRotate: [{
      type: Input
    }],
    touchPitch: [{
      type: Input
    }],
    touchZoomRotate: [{
      type: Input
    }],
    doubleClickZoom: [{
      type: Input
    }],
    keyboard: [{
      type: Input
    }],
    dragPan: [{
      type: Input
    }],
    boxZoom: [{
      type: Input
    }],
    style: [{
      type: Input
    }],
    center: [{
      type: Input
    }],
    maxBounds: [{
      type: Input
    }],
    zoom: [{
      type: Input
    }],
    bearing: [{
      type: Input
    }],
    pitch: [{
      type: Input
    }],
    fitBoundsOptions: [{
      type: Input
    }],
    renderWorldCopies: [{
      type: Input
    }],
    terrain: [{
      type: Input
    }],
    movingMethod: [{
      type: Input
    }],
    movingOptions: [{
      type: Input
    }],
    fitBounds: [{
      type: Input
    }],
    fitScreenCoordinates: [{
      type: Input
    }],
    centerWithPanTo: [{
      type: Input
    }],
    panToOptions: [{
      type: Input
    }],
    cursorStyle: [{
      type: Input
    }],
    mapResize: [{
      type: Output
    }],
    mapRemove: [{
      type: Output
    }],
    mapMouseDown: [{
      type: Output
    }],
    mapMouseUp: [{
      type: Output
    }],
    mapMouseMove: [{
      type: Output
    }],
    mapClick: [{
      type: Output
    }],
    mapDblClick: [{
      type: Output
    }],
    mapMouseOver: [{
      type: Output
    }],
    mapMouseOut: [{
      type: Output
    }],
    mapContextMenu: [{
      type: Output
    }],
    mapTouchStart: [{
      type: Output
    }],
    mapTouchEnd: [{
      type: Output
    }],
    mapTouchMove: [{
      type: Output
    }],
    mapTouchCancel: [{
      type: Output
    }],
    mapWheel: [{
      type: Output
    }],
    moveStart: [{
      type: Output
    }],
    move: [{
      type: Output
    }],
    moveEnd: [{
      type: Output
    }],
    mapDragStart: [{
      type: Output
    }],
    mapDrag: [{
      type: Output
    }],
    mapDragEnd: [{
      type: Output
    }],
    zoomStart: [{
      type: Output
    }],
    zoomEvt: [{
      type: Output
    }],
    zoomEnd: [{
      type: Output
    }],
    rotateStart: [{
      type: Output
    }],
    rotate: [{
      type: Output
    }],
    rotateEnd: [{
      type: Output
    }],
    pitchStart: [{
      type: Output
    }],
    pitchEvt: [{
      type: Output
    }],
    pitchEnd: [{
      type: Output
    }],
    boxZoomStart: [{
      type: Output
    }],
    boxZoomEnd: [{
      type: Output
    }],
    boxZoomCancel: [{
      type: Output
    }],
    webGlContextLost: [{
      type: Output
    }],
    webGlContextRestored: [{
      type: Output
    }],
    mapLoad: [{
      type: Output
    }],
    idle: [{
      type: Output
    }],
    render: [{
      type: Output
    }],
    mapError: [{
      type: Output
    }],
    data: [{
      type: Output
    }],
    styleData: [{
      type: Output
    }],
    sourceData: [{
      type: Output
    }],
    dataLoading: [{
      type: Output
    }],
    styleDataLoading: [{
      type: Output
    }],
    sourceDataLoading: [{
      type: Output
    }],
    styleImageMissing: [{
      type: Output
    }],
    mapContainer: [{
      type: ViewChild,
      args: ["container", {
        static: true
      }]
    }]
  });
})();
var _MarkerComponent = class _MarkerComponent {
  constructor(mapService) {
    this.mapService = mapService;
    this.markerDragStart = new EventEmitter();
    this.markerDragEnd = new EventEmitter();
    this.markerDrag = new EventEmitter();
  }
  ngOnInit() {
    if (this.feature && this.lngLat) {
      throw new Error("feature and lngLat input are mutually exclusive");
    }
  }
  ngOnChanges(changes) {
    if (changes.lngLat && !changes.lngLat.isFirstChange()) {
      this.markerInstance.setLngLat(this.lngLat);
    }
    if (changes.feature && !changes.feature.isFirstChange()) {
      this.markerInstance.setLngLat(this.feature.geometry.coordinates);
    }
    if (changes.draggable && !changes.draggable.isFirstChange()) {
      this.markerInstance.setDraggable(!!this.draggable);
    }
    if (changes.popupShown && !changes.popupShown.isFirstChange()) {
      changes.popupShown.currentValue ? this.markerInstance.getPopup().addTo(this.mapService.mapInstance) : this.markerInstance.getPopup().remove();
    }
    if (changes.pitchAlignment && !changes.pitchAlignment.isFirstChange()) {
      this.markerInstance.setPitchAlignment(changes.pitchAlignment.currentValue);
    }
    if (changes.rotationAlignment && !changes.rotationAlignment.isFirstChange()) {
      this.markerInstance.setRotationAlignment(changes.rotationAlignment.currentValue);
    }
    if (changes.rotation && !changes.rotation.isFirstChange()) {
      this.markerInstance.setRotation(changes.rotation.currentValue);
    }
  }
  ngAfterViewInit() {
    this.mapService.mapCreated$.subscribe(() => {
      this.markerInstance = this.mapService.addMarker({
        markersOptions: {
          offset: this.offset,
          anchor: this.anchor,
          color: this.color,
          pitchAlignment: this.pitchAlignment,
          rotationAlignment: this.rotationAlignment,
          rotation: this.rotation,
          draggable: !!this.draggable,
          element: this.content.nativeElement,
          feature: this.feature,
          lngLat: this.lngLat,
          clickTolerance: this.clickTolerance
        },
        markersEvents: {
          markerDragStart: this.markerDragStart,
          markerDrag: this.markerDrag,
          markerDragEnd: this.markerDragEnd
        }
      });
    });
  }
  ngOnDestroy() {
    this.mapService.removeMarker(this.markerInstance);
    this.markerInstance = void 0;
  }
  togglePopup() {
    this.markerInstance.togglePopup();
  }
  updateCoordinates(coordinates) {
    this.markerInstance.setLngLat(coordinates);
  }
};
_MarkerComponent.ɵfac = function MarkerComponent_Factory(t) {
  return new (t || _MarkerComponent)(ɵɵdirectiveInject(MapService));
};
_MarkerComponent.ɵcmp = ɵɵdefineComponent({
  type: _MarkerComponent,
  selectors: [["mgl-marker"]],
  viewQuery: function MarkerComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c0, 7);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.content = _t.first);
    }
  },
  inputs: {
    offset: "offset",
    anchor: "anchor",
    clickTolerance: "clickTolerance",
    color: "color",
    feature: "feature",
    lngLat: "lngLat",
    draggable: "draggable",
    popupShown: "popupShown",
    className: "className",
    pitchAlignment: "pitchAlignment",
    rotationAlignment: "rotationAlignment",
    rotation: "rotation"
  },
  outputs: {
    markerDragStart: "markerDragStart",
    markerDragEnd: "markerDragEnd",
    markerDrag: "markerDrag"
  },
  standalone: true,
  features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
  ngContentSelectors: _c1,
  decls: 3,
  vars: 2,
  consts: [["content", ""]],
  template: function MarkerComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵelementStart(0, "div", null, 0);
      ɵɵprojection(2);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵclassMap(ctx.className);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
var MarkerComponent = _MarkerComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MarkerComponent, [{
    type: Component,
    args: [{
      selector: "mgl-marker",
      template: '<div [class]="className" #content><ng-content></ng-content></div>',
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: true
    }]
  }], () => [{
    type: MapService
  }], {
    offset: [{
      type: Input
    }],
    anchor: [{
      type: Input
    }],
    clickTolerance: [{
      type: Input
    }],
    color: [{
      type: Input
    }],
    feature: [{
      type: Input
    }],
    lngLat: [{
      type: Input
    }],
    draggable: [{
      type: Input
    }],
    popupShown: [{
      type: Input
    }],
    className: [{
      type: Input
    }],
    pitchAlignment: [{
      type: Input
    }],
    rotationAlignment: [{
      type: Input
    }],
    rotation: [{
      type: Input
    }],
    markerDragStart: [{
      type: Output
    }],
    markerDragEnd: [{
      type: Output
    }],
    markerDrag: [{
      type: Output
    }],
    content: [{
      type: ViewChild,
      args: ["content", {
        static: true
      }]
    }]
  });
})();
var _PointDirective = class _PointDirective {
};
_PointDirective.ɵfac = function PointDirective_Factory(t) {
  return new (t || _PointDirective)();
};
_PointDirective.ɵdir = ɵɵdefineDirective({
  type: _PointDirective,
  selectors: [["ng-template", "mglPoint", ""]],
  standalone: true
});
var PointDirective = _PointDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PointDirective, [{
    type: Directive,
    args: [{
      selector: "ng-template[mglPoint]",
      standalone: true
    }]
  }], null, null);
})();
var _ClusterPointDirective = class _ClusterPointDirective {
};
_ClusterPointDirective.ɵfac = function ClusterPointDirective_Factory(t) {
  return new (t || _ClusterPointDirective)();
};
_ClusterPointDirective.ɵdir = ɵɵdefineDirective({
  type: _ClusterPointDirective,
  selectors: [["ng-template", "mglClusterPoint", ""]],
  standalone: true
});
var ClusterPointDirective = _ClusterPointDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ClusterPointDirective, [{
    type: Directive,
    args: [{
      selector: "ng-template[mglClusterPoint]",
      standalone: true
    }]
  }], null, null);
})();
var uniqId = 0;
var _MarkersForClustersComponent = class _MarkersForClustersComponent {
  constructor(mapService, changeDetectorRef, ngZone) {
    this.mapService = mapService;
    this.changeDetectorRef = changeDetectorRef;
    this.ngZone = ngZone;
    this.layerId = `mgl-markers-for-clusters-${uniqId++}`;
    this.sub = new Subscription();
  }
  ngAfterContentInit() {
    const clusterDataUpdate = () => fromEvent(this.mapService.mapInstance, "data").pipe(filter((e) => e.sourceId === this.source && e.sourceDataType !== "metadata" && this.mapService.mapInstance.isSourceLoaded(this.source)));
    const sub = this.mapService.mapCreated$.pipe(switchMap(clusterDataUpdate), switchMap(() => merge(fromEvent(this.mapService.mapInstance, "move"), fromEvent(this.mapService.mapInstance, "moveend")).pipe(startWith(void 0)))).subscribe(() => {
      this.ngZone.run(() => {
        this.updateCluster();
      });
    });
    this.sub.add(sub);
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
  trackByClusterPoint(_index, clusterPoint) {
    return clusterPoint.id;
  }
  updateCluster() {
    const params = {
      layers: [this.layerId]
    };
    if (!this.pointTpl) {
      params.filter = ["==", "cluster", true];
    }
    this.clusterPoints = this.mapService.mapInstance.queryRenderedFeatures(params);
    this.changeDetectorRef.markForCheck();
  }
};
_MarkersForClustersComponent.ɵfac = function MarkersForClustersComponent_Factory(t) {
  return new (t || _MarkersForClustersComponent)(ɵɵdirectiveInject(MapService), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(NgZone));
};
_MarkersForClustersComponent.ɵcmp = ɵɵdefineComponent({
  type: _MarkersForClustersComponent,
  selectors: [["mgl-markers-for-clusters"]],
  contentQueries: function MarkersForClustersComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, PointDirective, 5, TemplateRef);
      ɵɵcontentQuery(dirIndex, ClusterPointDirective, 5, TemplateRef);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.pointTpl = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.clusterPointTpl = _t.first);
    }
  },
  inputs: {
    source: "source"
  },
  standalone: true,
  features: [ɵɵStandaloneFeature],
  decls: 2,
  vars: 6,
  consts: [["type", "circle", 3, "id", "source", "paint"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [4, "ngIf"], [3, "feature"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"]],
  template: function MarkersForClustersComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelement(0, "mgl-layer", 0);
      ɵɵtemplate(1, MarkersForClustersComponent_ng_container_1_Template, 3, 2, "ng-container", 1);
    }
    if (rf & 2) {
      ɵɵproperty("id", ctx.layerId)("source", ctx.source)("paint", ɵɵpureFunction0(5, _c3));
      ɵɵadvance();
      ɵɵproperty("ngForOf", ctx.clusterPoints)("ngForTrackBy", ctx.trackByClusterPoint);
    }
  },
  dependencies: [LayerComponent, NgForOf, NgIf, MarkerComponent, NgTemplateOutlet],
  encapsulation: 2,
  changeDetection: 0
});
var MarkersForClustersComponent = _MarkersForClustersComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MarkersForClustersComponent, [{
    type: Component,
    args: [{
      selector: "mgl-markers-for-clusters",
      template: `
    <mgl-layer
      [id]="layerId"
      [source]="source"
      type="circle"
      [paint]="{ 'circle-radius': 0 }"
    ></mgl-layer>
    <ng-container
      *ngFor="let feature of clusterPoints; trackBy: trackByClusterPoint"
    >
      <ng-container *ngIf="feature.properties.cluster">
        <mgl-marker [feature]="feature">
          <ng-container
            *ngTemplateOutlet="clusterPointTpl; context: { $implicit: feature }"
          ></ng-container>
        </mgl-marker>
      </ng-container>
      <ng-container *ngIf="!feature.properties.cluster">
        <mgl-marker [feature]="feature">
          <ng-container
            *ngTemplateOutlet="pointTpl; context: { $implicit: feature }"
          ></ng-container>
        </mgl-marker>
      </ng-container>
    </ng-container>
  `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      preserveWhitespaces: false,
      standalone: true,
      imports: [LayerComponent, NgForOf, NgIf, MarkerComponent, NgTemplateOutlet]
    }]
  }], () => [{
    type: MapService
  }, {
    type: ChangeDetectorRef
  }, {
    type: NgZone
  }], {
    source: [{
      type: Input
    }],
    pointTpl: [{
      type: ContentChild,
      args: [PointDirective, {
        read: TemplateRef,
        static: false
      }]
    }],
    clusterPointTpl: [{
      type: ContentChild,
      args: [ClusterPointDirective, {
        read: TemplateRef,
        static: false
      }]
    }]
  });
})();
var _PopupComponent = class _PopupComponent {
  constructor(mapService) {
    this.mapService = mapService;
    this.popupClose = new EventEmitter();
    this.popupOpen = new EventEmitter();
    afterNextRender(() => {
      this.popupInstance = this.createPopup();
      this.addPopup(this.popupInstance);
    });
  }
  ngOnInit() {
    if (this.lngLat && this.marker || this.feature && this.lngLat || this.feature && this.marker) {
      throw new Error("marker, lngLat, feature input are mutually exclusive");
    }
  }
  ngOnChanges(changes) {
    if (changes.feature && !changes.feature.isFirstChange()) {
      const newlngLat = changes.lngLat ? this.lngLat : this.feature.geometry.coordinates;
      this.mapService.removePopupFromMap(this.popupInstance, true);
      const popupInstanceTmp = this.createPopup();
      this.mapService.addPopupToMap(popupInstanceTmp, newlngLat, this.popupInstance.isOpen());
      this.popupInstance = popupInstanceTmp;
    }
    if (changes.lngLat && !changes.lngLat.isFirstChange()) {
      this.popupInstance.setLngLat(this.lngLat);
    }
    if (changes.marker && !changes.marker.isFirstChange()) {
      const previousMarker = changes.marker.previousValue;
      if (previousMarker.markerInstance) {
        this.mapService.removePopupFromMarker(previousMarker.markerInstance);
      }
      if (this.marker && this.marker.markerInstance && this.popupInstance) {
        this.mapService.addPopupToMarker(this.marker.markerInstance, this.popupInstance);
      }
    }
    if (changes.offset && !changes.offset.isFirstChange() && this.popupInstance) {
      this.popupInstance.setOffset(this.offset);
    }
  }
  ngOnDestroy() {
    if (this.popupInstance) {
      if (this.lngLat || this.feature) {
        this.mapService.removePopupFromMap(this.popupInstance);
      } else if (this.marker && this.marker.markerInstance) {
        this.mapService.removePopupFromMarker(this.marker.markerInstance);
      }
    }
    this.popupInstance = void 0;
  }
  createPopup() {
    return this.mapService.createPopup({
      popupOptions: {
        closeButton: this.closeButton,
        closeOnClick: this.closeOnClick,
        closeOnMove: this.closeOnMove,
        focusAfterOpen: this.focusAfterOpen,
        anchor: this.anchor,
        offset: this.offset,
        className: this.className,
        maxWidth: this.maxWidth
      },
      popupEvents: {
        popupOpen: this.popupOpen,
        popupClose: this.popupClose
      }
    }, this.content.nativeElement);
  }
  addPopup(popup) {
    this.mapService.mapCreated$.subscribe(() => {
      if (this.lngLat || this.feature) {
        this.mapService.addPopupToMap(popup, this.lngLat ? this.lngLat : this.feature.geometry.coordinates);
      } else if (this.marker && this.marker.markerInstance) {
        this.mapService.addPopupToMarker(this.marker.markerInstance, popup);
      } else {
        throw new Error("mgl-popup need either lngLat/marker/feature to be set");
      }
    });
  }
};
_PopupComponent.ɵfac = function PopupComponent_Factory(t) {
  return new (t || _PopupComponent)(ɵɵdirectiveInject(MapService));
};
_PopupComponent.ɵcmp = ɵɵdefineComponent({
  type: _PopupComponent,
  selectors: [["mgl-popup"]],
  viewQuery: function PopupComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c0, 7);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.content = _t.first);
    }
  },
  inputs: {
    closeButton: "closeButton",
    closeOnClick: "closeOnClick",
    closeOnMove: "closeOnMove",
    focusAfterOpen: "focusAfterOpen",
    anchor: "anchor",
    className: "className",
    maxWidth: "maxWidth",
    feature: "feature",
    lngLat: "lngLat",
    marker: "marker",
    offset: "offset"
  },
  outputs: {
    popupClose: "popupClose",
    popupOpen: "popupOpen"
  },
  standalone: true,
  features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
  ngContentSelectors: _c1,
  decls: 3,
  vars: 0,
  consts: [["content", ""], ["data-cy", "mgl-popup"]],
  template: function PopupComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵelementStart(0, "div", 1, 0);
      ɵɵprojection(2);
      ɵɵelementEnd();
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
var PopupComponent = _PopupComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PopupComponent, [{
    type: Component,
    args: [{
      selector: "mgl-popup",
      template: '<div #content data-cy="mgl-popup"><ng-content></ng-content></div>',
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: true
    }]
  }], () => [{
    type: MapService
  }], {
    closeButton: [{
      type: Input
    }],
    closeOnClick: [{
      type: Input
    }],
    closeOnMove: [{
      type: Input
    }],
    focusAfterOpen: [{
      type: Input
    }],
    anchor: [{
      type: Input
    }],
    className: [{
      type: Input
    }],
    maxWidth: [{
      type: Input
    }],
    feature: [{
      type: Input
    }],
    lngLat: [{
      type: Input
    }],
    marker: [{
      type: Input
    }],
    offset: [{
      type: Input
    }],
    popupClose: [{
      type: Output
    }],
    popupOpen: [{
      type: Output
    }],
    content: [{
      type: ViewChild,
      args: ["content", {
        static: true
      }]
    }]
  });
})();
var _CanvasSourceComponent = class _CanvasSourceComponent {
  constructor(mapService) {
    this.mapService = mapService;
    this.type = "canvas";
    this.sourceAdded = false;
    this.sub = new Subscription();
  }
  ngOnInit() {
    const sub1 = this.mapService.mapLoaded$.subscribe(() => {
      this.init();
      const sub = fromEvent(this.mapService.mapInstance, "styledata").pipe(filter(() => !this.mapService.mapInstance.getSource(this.id))).subscribe(() => {
        this.init();
      });
      this.sub.add(sub);
    });
    this.sub.add(sub1);
  }
  ngOnChanges(changes) {
    if (!this.sourceAdded) {
      return;
    }
    if (changes.canvas && !changes.canvas.isFirstChange() || changes.animate && !changes.animate.isFirstChange()) {
      this.ngOnDestroy();
      this.ngOnInit();
    } else if (changes.coordinates && !changes.coordinates.isFirstChange()) {
      const source = this.mapService.getSource(this.id);
      if (source === void 0) {
        return;
      }
      source.setCoordinates(this.coordinates);
    }
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
    if (this.sourceAdded) {
      this.mapService.removeSource(this.id);
      this.sourceAdded = false;
    }
  }
  init() {
    const source = {
      type: "canvas",
      coordinates: this.coordinates,
      canvas: this.canvas,
      animate: this.animate
    };
    this.mapService.addSource(this.id, source);
    this.sourceAdded = true;
  }
};
_CanvasSourceComponent.ɵfac = function CanvasSourceComponent_Factory(t) {
  return new (t || _CanvasSourceComponent)(ɵɵdirectiveInject(MapService));
};
_CanvasSourceComponent.ɵcmp = ɵɵdefineComponent({
  type: _CanvasSourceComponent,
  selectors: [["mgl-canvas-source"]],
  inputs: {
    id: "id",
    coordinates: "coordinates",
    canvas: "canvas",
    animate: "animate"
  },
  standalone: true,
  features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
  decls: 0,
  vars: 0,
  template: function CanvasSourceComponent_Template(rf, ctx) {
  },
  encapsulation: 2,
  changeDetection: 0
});
var CanvasSourceComponent = _CanvasSourceComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CanvasSourceComponent, [{
    type: Component,
    args: [{
      selector: "mgl-canvas-source",
      template: "",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: true
    }]
  }], () => [{
    type: MapService
  }], {
    id: [{
      type: Input
    }],
    coordinates: [{
      type: Input
    }],
    canvas: [{
      type: Input
    }],
    animate: [{
      type: Input
    }]
  });
})();
var _ImageSourceComponent = class _ImageSourceComponent {
  constructor(mapService) {
    this.mapService = mapService;
    this.type = "image";
  }
  ngOnInit() {
    this.sub = this.mapService.mapLoaded$.subscribe(() => this.init());
  }
  ngOnChanges(changes) {
    if (this.sourceId === void 0) {
      return;
    }
    const source = this.mapService.getSource(this.sourceId);
    if (source === void 0) {
      return;
    }
    source.updateImage({
      url: changes.url === void 0 ? void 0 : this.url,
      coordinates: changes.coordinates === void 0 ? void 0 : this.coordinates
    });
  }
  ngOnDestroy() {
    if (this.sub !== void 0) {
      this.sub.unsubscribe();
    }
    if (this.sourceId !== void 0) {
      this.mapService.removeSource(this.sourceId);
      this.sourceId = void 0;
    }
  }
  init() {
    const imageSource = {
      type: "image",
      url: this.url,
      coordinates: this.coordinates
    };
    this.mapService.addSource(this.id, imageSource);
    this.sourceId = this.id;
  }
};
_ImageSourceComponent.ɵfac = function ImageSourceComponent_Factory(t) {
  return new (t || _ImageSourceComponent)(ɵɵdirectiveInject(MapService));
};
_ImageSourceComponent.ɵcmp = ɵɵdefineComponent({
  type: _ImageSourceComponent,
  selectors: [["mgl-image-source"]],
  inputs: {
    id: "id",
    url: "url",
    coordinates: "coordinates"
  },
  standalone: true,
  features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
  decls: 0,
  vars: 0,
  template: function ImageSourceComponent_Template(rf, ctx) {
  },
  encapsulation: 2,
  changeDetection: 0
});
var ImageSourceComponent = _ImageSourceComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ImageSourceComponent, [{
    type: Component,
    args: [{
      selector: "mgl-image-source",
      template: "",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: true
    }]
  }], () => [{
    type: MapService
  }], {
    id: [{
      type: Input
    }],
    url: [{
      type: Input
    }],
    coordinates: [{
      type: Input
    }]
  });
})();
var _RasterDemSourceComponent = class _RasterDemSourceComponent {
  constructor(mapService) {
    this.mapService = mapService;
    this.type = "raster-dem";
    this.sourceAdded = false;
    this.sub = new Subscription();
  }
  ngOnInit() {
    const sub1 = this.mapService.mapLoaded$.subscribe(() => {
      this.init();
      const sub = fromEvent(this.mapService.mapInstance, "styledata").pipe(filter(() => !this.mapService.mapInstance.getSource(this.id))).subscribe(() => {
        this.init();
      });
      this.sub.add(sub);
    });
    this.sub.add(sub1);
  }
  ngOnChanges(changes) {
    if (!this.sourceAdded) {
      return;
    }
    if (changes.url && !changes.url.isFirstChange() || changes.tiles && !changes.tiles.isFirstChange() || changes.bounds && !changes.bounds.isFirstChange() || changes.minzoom && !changes.minzoom.isFirstChange() || changes.maxzoom && !changes.maxzoom.isFirstChange() || changes.tileSize && !changes.tileSize.isFirstChange() || changes.attribution && !changes.attribution.isFirstChange() || changes.encoding && !changes.encoding.isFirstChange()) {
      this.ngOnDestroy();
      this.ngOnInit();
    }
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
    if (this.sourceAdded) {
      this.mapService.removeSource(this.id);
      this.sourceAdded = false;
    }
  }
  init() {
    const source = {
      type: this.type,
      url: this.url,
      tiles: this.tiles,
      bounds: this.bounds,
      minzoom: this.minzoom,
      maxzoom: this.maxzoom,
      tileSize: this.tileSize,
      attribution: this.attribution,
      encoding: this.encoding
    };
    this.mapService.addSource(this.id, source);
    this.sourceAdded = true;
  }
};
_RasterDemSourceComponent.ɵfac = function RasterDemSourceComponent_Factory(t) {
  return new (t || _RasterDemSourceComponent)(ɵɵdirectiveInject(MapService));
};
_RasterDemSourceComponent.ɵcmp = ɵɵdefineComponent({
  type: _RasterDemSourceComponent,
  selectors: [["mgl-raster-dem-source"]],
  inputs: {
    id: "id",
    url: "url",
    tiles: "tiles",
    bounds: "bounds",
    minzoom: "minzoom",
    maxzoom: "maxzoom",
    tileSize: "tileSize",
    attribution: "attribution",
    encoding: "encoding"
  },
  standalone: true,
  features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
  decls: 0,
  vars: 0,
  template: function RasterDemSourceComponent_Template(rf, ctx) {
  },
  encapsulation: 2,
  changeDetection: 0
});
var RasterDemSourceComponent = _RasterDemSourceComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RasterDemSourceComponent, [{
    type: Component,
    args: [{
      selector: "mgl-raster-dem-source",
      template: "",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: true
    }]
  }], () => [{
    type: MapService
  }], {
    id: [{
      type: Input
    }],
    url: [{
      type: Input
    }],
    tiles: [{
      type: Input
    }],
    bounds: [{
      type: Input
    }],
    minzoom: [{
      type: Input
    }],
    maxzoom: [{
      type: Input
    }],
    tileSize: [{
      type: Input
    }],
    attribution: [{
      type: Input
    }],
    encoding: [{
      type: Input
    }]
  });
})();
var _RasterSourceComponent = class _RasterSourceComponent {
  constructor(mapService) {
    this.mapService = mapService;
    this.type = "raster";
    this.sourceAdded = false;
    this.sub = new Subscription();
  }
  ngOnInit() {
    const sub1 = this.mapService.mapLoaded$.subscribe(() => {
      this.init();
      const sub = fromEvent(this.mapService.mapInstance, "styledata").pipe(filter(() => !this.mapService.mapInstance.getSource(this.id))).subscribe(() => {
        this.init();
      });
      this.sub.add(sub);
    });
    this.sub.add(sub1);
  }
  ngOnChanges(changes) {
    if (!this.sourceAdded) {
      return;
    }
    if (changes.url && !changes.url.isFirstChange() || changes.tiles && !changes.tiles.isFirstChange() || changes.bounds && !changes.bounds.isFirstChange() || changes.minzoom && !changes.minzoom.isFirstChange() || changes.maxzoom && !changes.maxzoom.isFirstChange() || changes.tileSize && !changes.tileSize.isFirstChange() || changes.scheme && !changes.scheme.isFirstChange() || changes.attribution && !changes.attribution.isFirstChange()) {
      this.ngOnDestroy();
      this.ngOnInit();
    }
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
    if (this.sourceAdded) {
      this.mapService.removeSource(this.id);
      this.sourceAdded = false;
    }
  }
  init() {
    const source = {
      type: this.type,
      url: this.url,
      tiles: this.tiles,
      bounds: this.bounds,
      minzoom: this.minzoom,
      maxzoom: this.maxzoom,
      tileSize: this.tileSize,
      scheme: this.scheme,
      attribution: this.attribution
    };
    this.mapService.addSource(this.id, source);
    this.sourceAdded = true;
  }
};
_RasterSourceComponent.ɵfac = function RasterSourceComponent_Factory(t) {
  return new (t || _RasterSourceComponent)(ɵɵdirectiveInject(MapService));
};
_RasterSourceComponent.ɵcmp = ɵɵdefineComponent({
  type: _RasterSourceComponent,
  selectors: [["mgl-raster-source"]],
  inputs: {
    id: "id",
    url: "url",
    tiles: "tiles",
    bounds: "bounds",
    minzoom: "minzoom",
    maxzoom: "maxzoom",
    tileSize: "tileSize",
    scheme: "scheme",
    attribution: "attribution"
  },
  standalone: true,
  features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
  decls: 0,
  vars: 0,
  template: function RasterSourceComponent_Template(rf, ctx) {
  },
  encapsulation: 2,
  changeDetection: 0
});
var RasterSourceComponent = _RasterSourceComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RasterSourceComponent, [{
    type: Component,
    args: [{
      selector: "mgl-raster-source",
      template: "",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: true
    }]
  }], () => [{
    type: MapService
  }], {
    id: [{
      type: Input
    }],
    url: [{
      type: Input
    }],
    tiles: [{
      type: Input
    }],
    bounds: [{
      type: Input
    }],
    minzoom: [{
      type: Input
    }],
    maxzoom: [{
      type: Input
    }],
    tileSize: [{
      type: Input
    }],
    scheme: [{
      type: Input
    }],
    attribution: [{
      type: Input
    }]
  });
})();
var _VectorSourceComponent = class _VectorSourceComponent {
  constructor(mapService) {
    this.mapService = mapService;
    this.type = "vector";
    this.sourceAdded = false;
    this.sub = new Subscription();
  }
  ngOnInit() {
    const sub1 = this.mapService.mapLoaded$.subscribe(() => {
      this.init();
      const sub = fromEvent(this.mapService.mapInstance, "styledata").pipe(filter(() => !this.mapService.mapInstance.getSource(this.id))).subscribe(() => {
        this.init();
      });
      this.sub.add(sub);
    });
    this.sub.add(sub1);
  }
  ngOnChanges(changes) {
    if (!this.sourceAdded) {
      return;
    }
    if (changes.bounds && !changes.bounds.isFirstChange() || changes.scheme && !changes.scheme.isFirstChange() || changes.minzoom && !changes.minzoom.isFirstChange() || changes.maxzoom && !changes.maxzoom.isFirstChange() || changes.attribution && !changes.attribution.isFirstChange() || changes.promoteId && !changes.promoteId.isFirstChange()) {
      this.ngOnDestroy();
      this.ngOnInit();
    } else if (changes.url && !changes.url.isFirstChange() || changes.tiles && !changes.tiles.isFirstChange()) {
      const source = this.mapService.getSource(this.id);
      if (source === void 0) {
        return;
      }
      if (changes.url && this.url) {
        source.setUrl(this.url);
      }
      if (changes.tiles && this.tiles) {
        source.setTiles(this.tiles);
      }
    }
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
    if (this.sourceAdded) {
      this.mapService.removeSource(this.id);
      this.sourceAdded = false;
    }
  }
  init() {
    const source = {
      type: this.type,
      url: this.url,
      tiles: this.tiles,
      bounds: this.bounds,
      scheme: this.scheme,
      minzoom: this.minzoom,
      maxzoom: this.maxzoom,
      attribution: this.attribution,
      promoteId: this.promoteId
    };
    this.mapService.addSource(this.id, source);
    this.sourceAdded = true;
  }
};
_VectorSourceComponent.ɵfac = function VectorSourceComponent_Factory(t) {
  return new (t || _VectorSourceComponent)(ɵɵdirectiveInject(MapService));
};
_VectorSourceComponent.ɵcmp = ɵɵdefineComponent({
  type: _VectorSourceComponent,
  selectors: [["mgl-vector-source"]],
  inputs: {
    id: "id",
    url: "url",
    tiles: "tiles",
    bounds: "bounds",
    scheme: "scheme",
    minzoom: "minzoom",
    maxzoom: "maxzoom",
    attribution: "attribution",
    promoteId: "promoteId"
  },
  standalone: true,
  features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
  decls: 0,
  vars: 0,
  template: function VectorSourceComponent_Template(rf, ctx) {
  },
  encapsulation: 2,
  changeDetection: 0
});
var VectorSourceComponent = _VectorSourceComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VectorSourceComponent, [{
    type: Component,
    args: [{
      selector: "mgl-vector-source",
      template: "",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: true
    }]
  }], () => [{
    type: MapService
  }], {
    id: [{
      type: Input
    }],
    url: [{
      type: Input
    }],
    tiles: [{
      type: Input
    }],
    bounds: [{
      type: Input
    }],
    scheme: [{
      type: Input
    }],
    minzoom: [{
      type: Input
    }],
    maxzoom: [{
      type: Input
    }],
    attribution: [{
      type: Input
    }],
    promoteId: [{
      type: Input
    }]
  });
})();
var _VideoSourceComponent = class _VideoSourceComponent {
  constructor(mapService) {
    this.mapService = mapService;
    this.type = "video";
    this.sourceAdded = false;
    this.sub = new Subscription();
  }
  ngOnInit() {
    const sub1 = this.mapService.mapLoaded$.subscribe(() => {
      this.init();
      const sub = fromEvent(this.mapService.mapInstance, "styledata").pipe(filter(() => !this.mapService.mapInstance.getSource(this.id))).subscribe(() => {
        this.init();
      });
      this.sub.add(sub);
    });
    this.sub.add(sub1);
  }
  ngOnChanges(changes) {
    if (!this.sourceAdded) {
      return;
    }
    if (changes.urls && !changes.urls.isFirstChange()) {
      this.ngOnDestroy();
      this.ngOnInit();
    } else if (changes.coordinates && !changes.coordinates.isFirstChange()) {
      const source = this.mapService.getSource(this.id);
      if (source === void 0) {
        return;
      }
      source.setCoordinates(this.coordinates);
    }
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
    if (this.sourceAdded) {
      this.mapService.removeSource(this.id);
      this.sourceAdded = false;
    }
  }
  init() {
    const source = {
      type: "video",
      urls: this.urls,
      coordinates: this.coordinates
    };
    this.mapService.addSource(this.id, source);
    this.sourceAdded = true;
  }
};
_VideoSourceComponent.ɵfac = function VideoSourceComponent_Factory(t) {
  return new (t || _VideoSourceComponent)(ɵɵdirectiveInject(MapService));
};
_VideoSourceComponent.ɵcmp = ɵɵdefineComponent({
  type: _VideoSourceComponent,
  selectors: [["mgl-video-source"]],
  inputs: {
    id: "id",
    urls: "urls",
    coordinates: "coordinates"
  },
  standalone: true,
  features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
  decls: 0,
  vars: 0,
  template: function VideoSourceComponent_Template(rf, ctx) {
  },
  encapsulation: 2,
  changeDetection: 0
});
var VideoSourceComponent = _VideoSourceComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VideoSourceComponent, [{
    type: Component,
    args: [{
      selector: "mgl-video-source",
      template: "",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: true
    }]
  }], () => [{
    type: MapService
  }], {
    id: [{
      type: Input
    }],
    urls: [{
      type: Input
    }],
    coordinates: [{
      type: Input
    }]
  });
})();
var componentsAndDirectives = [MapComponent, LayerComponent, DraggableDirective, ImageComponent, VectorSourceComponent, GeoJSONSourceComponent, RasterDemSourceComponent, RasterSourceComponent, ImageSourceComponent, VideoSourceComponent, CanvasSourceComponent, FeatureComponent, MarkerComponent, PopupComponent, ControlComponent, FullscreenControlDirective, NavigationControlDirective, GeolocateControlDirective, AttributionControlDirective, ScaleControlDirective, PointDirective, ClusterPointDirective, MarkersForClustersComponent, TerrainControlDirective];
var _NgxMapLibreGLModule = class _NgxMapLibreGLModule {
};
_NgxMapLibreGLModule.ɵfac = function NgxMapLibreGLModule_Factory(t) {
  return new (t || _NgxMapLibreGLModule)();
};
_NgxMapLibreGLModule.ɵmod = ɵɵdefineNgModule({
  type: _NgxMapLibreGLModule,
  imports: [MapComponent, LayerComponent, DraggableDirective, ImageComponent, VectorSourceComponent, GeoJSONSourceComponent, RasterDemSourceComponent, RasterSourceComponent, ImageSourceComponent, VideoSourceComponent, CanvasSourceComponent, FeatureComponent, MarkerComponent, PopupComponent, ControlComponent, FullscreenControlDirective, NavigationControlDirective, GeolocateControlDirective, AttributionControlDirective, ScaleControlDirective, PointDirective, ClusterPointDirective, MarkersForClustersComponent, TerrainControlDirective],
  exports: [MapComponent, LayerComponent, DraggableDirective, ImageComponent, VectorSourceComponent, GeoJSONSourceComponent, RasterDemSourceComponent, RasterSourceComponent, ImageSourceComponent, VideoSourceComponent, CanvasSourceComponent, FeatureComponent, MarkerComponent, PopupComponent, ControlComponent, FullscreenControlDirective, NavigationControlDirective, GeolocateControlDirective, AttributionControlDirective, ScaleControlDirective, PointDirective, ClusterPointDirective, MarkersForClustersComponent, TerrainControlDirective]
});
_NgxMapLibreGLModule.ɵinj = ɵɵdefineInjector({});
var NgxMapLibreGLModule = _NgxMapLibreGLModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxMapLibreGLModule, [{
    type: NgModule,
    args: [{
      imports: [...componentsAndDirectives],
      exports: [...componentsAndDirectives]
    }]
  }], null, null);
})();
export {
  AttributionControlDirective,
  CanvasSourceComponent,
  ClusterPointDirective,
  ControlComponent,
  CustomControl,
  DraggableDirective,
  FeatureComponent,
  FullscreenControlDirective,
  GeoJSONSourceComponent,
  GeolocateControlDirective,
  ImageComponent,
  ImageSourceComponent,
  LayerComponent,
  MapComponent,
  MapService,
  MarkerComponent,
  MarkersForClustersComponent,
  NavigationControlDirective,
  NgxMapLibreGLModule,
  PointDirective,
  PopupComponent,
  RasterDemSourceComponent,
  RasterSourceComponent,
  ScaleControlDirective,
  TerrainControlDirective,
  VectorSourceComponent,
  VideoSourceComponent
};
//# sourceMappingURL=@maplibre_ngx-maplibre-gl.js.map
