import {
  CommonModule,
  NgClass,
  isPlatformServer
} from "./chunk-LFBOADA7.js";
import {
  Component,
  ElementRef,
  EventEmitter,
  Inject,
  Input,
  NgModule,
  NgZone,
  Output,
  PLATFORM_ID,
  ViewChild,
  setClassMetadata,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵloadQuery,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵviewQuery
} from "./chunk-CKIAAGGV.js";
import {
  Subject,
  __decorate,
  __metadata,
  fromEvent,
  takeUntil
} from "./chunk-VW7P5FPZ.js";
import {
  __export
} from "./chunk-CPNXOV62.js";

// node_modules/@egjs/component/dist/component.esm.js
function __values(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m)
    return m.call(o);
  if (o && typeof o.length === "number")
    return {
      next: function() {
        if (o && i >= o.length)
          o = void 0;
        return {
          value: o && o[i++],
          done: !o
        };
      }
    };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m)
    return o;
  var i = m.call(o), r, ar = [], e;
  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
      ar.push(r.value);
  } catch (error) {
    e = {
      error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"]))
        m.call(i);
    } finally {
      if (e)
        throw e.error;
    }
  }
  return ar;
}
function __spread() {
  for (var ar = [], i = 0; i < arguments.length; i++)
    ar = ar.concat(__read(arguments[i]));
  return ar;
}
var isUndefined = function(value) {
  return typeof value === "undefined";
};
var ComponentEvent = function() {
  function ComponentEvent2(eventType, props) {
    var e_1, _a2;
    this._canceled = false;
    if (props) {
      try {
        for (var _b = __values(Object.keys(props)), _c = _b.next(); !_c.done; _c = _b.next()) {
          var key = _c.value;
          this[key] = props[key];
        }
      } catch (e_1_1) {
        e_1 = {
          error: e_1_1
        };
      } finally {
        try {
          if (_c && !_c.done && (_a2 = _b.return))
            _a2.call(_b);
        } finally {
          if (e_1)
            throw e_1.error;
        }
      }
    }
    this.eventType = eventType;
  }
  var __proto = ComponentEvent2.prototype;
  __proto.stop = function() {
    this._canceled = true;
  };
  __proto.isCanceled = function() {
    return this._canceled;
  };
  return ComponentEvent2;
}();
var Component2 = function() {
  function Component3() {
    this._eventHandler = {};
  }
  var __proto = Component3.prototype;
  __proto.trigger = function(event) {
    var params = [];
    for (var _i = 1; _i < arguments.length; _i++) {
      params[_i - 1] = arguments[_i];
    }
    var eventName = event instanceof ComponentEvent ? event.eventType : event;
    var handlers = __spread(this._eventHandler[eventName] || []);
    if (handlers.length <= 0) {
      return this;
    }
    if (event instanceof ComponentEvent) {
      event.currentTarget = this;
      handlers.forEach(function(handler) {
        handler(event);
      });
    } else {
      handlers.forEach(function(handler) {
        handler.apply(void 0, __spread(params));
      });
    }
    return this;
  };
  __proto.once = function(eventName, handlerToAttach) {
    var _this = this;
    if (typeof eventName === "object" && isUndefined(handlerToAttach)) {
      var eventHash = eventName;
      for (var key in eventHash) {
        this.once(key, eventHash[key]);
      }
      return this;
    } else if (typeof eventName === "string" && typeof handlerToAttach === "function") {
      var listener_1 = function() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }
        handlerToAttach.apply(void 0, __spread(args));
        _this.off(eventName, listener_1);
      };
      this.on(eventName, listener_1);
    }
    return this;
  };
  __proto.hasOn = function(eventName) {
    return !!this._eventHandler[eventName];
  };
  __proto.on = function(eventName, handlerToAttach) {
    if (typeof eventName === "object" && isUndefined(handlerToAttach)) {
      var eventHash = eventName;
      for (var name in eventHash) {
        this.on(name, eventHash[name]);
      }
      return this;
    } else if (typeof eventName === "string" && typeof handlerToAttach === "function") {
      var handlerList = this._eventHandler[eventName];
      if (isUndefined(handlerList)) {
        this._eventHandler[eventName] = [];
        handlerList = this._eventHandler[eventName];
      }
      handlerList.push(handlerToAttach);
    }
    return this;
  };
  __proto.off = function(eventName, handlerToDetach) {
    if (isUndefined(eventName)) {
      this._eventHandler = {};
      return this;
    }
    if (isUndefined(handlerToDetach)) {
      if (typeof eventName === "string") {
        delete this._eventHandler[eventName];
        return this;
      } else {
        var eventHash = eventName;
        for (var name in eventHash) {
          this.off(name, eventHash[name]);
        }
        return this;
      }
    }
    var handlerList = this._eventHandler[eventName];
    if (handlerList) {
      var length5 = handlerList.length;
      for (var i = 0; i < length5; ++i) {
        if (handlerList[i] === handlerToDetach) {
          handlerList.splice(i, 1);
          if (length5 <= 1) {
            delete this._eventHandler[eventName];
          }
          break;
        }
      }
    }
    return this;
  };
  Component3.VERSION = "3.0.5";
  return Component3;
}();
var ComponentEvent$1 = ComponentEvent;
var component_esm_default = Component2;

// node_modules/gl-matrix/esm/common.js
var EPSILON = 1e-6;
var ARRAY_TYPE = typeof Float32Array !== "undefined" ? Float32Array : Array;
var RANDOM = Math.random;
var degree = Math.PI / 180;
if (!Math.hypot)
  Math.hypot = function() {
    var y = 0, i = arguments.length;
    while (i--) {
      y += arguments[i] * arguments[i];
    }
    return Math.sqrt(y);
  };

// node_modules/gl-matrix/esm/mat3.js
function create() {
  var out = new ARRAY_TYPE(9);
  if (ARRAY_TYPE != Float32Array) {
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[5] = 0;
    out[6] = 0;
    out[7] = 0;
  }
  out[0] = 1;
  out[4] = 1;
  out[8] = 1;
  return out;
}

// node_modules/gl-matrix/esm/mat4.js
var mat4_exports = {};
__export(mat4_exports, {
  add: () => add,
  adjoint: () => adjoint,
  clone: () => clone,
  copy: () => copy,
  create: () => create2,
  determinant: () => determinant,
  equals: () => equals,
  exactEquals: () => exactEquals,
  frob: () => frob,
  fromQuat: () => fromQuat,
  fromQuat2: () => fromQuat2,
  fromRotation: () => fromRotation,
  fromRotationTranslation: () => fromRotationTranslation,
  fromRotationTranslationScale: () => fromRotationTranslationScale,
  fromRotationTranslationScaleOrigin: () => fromRotationTranslationScaleOrigin,
  fromScaling: () => fromScaling,
  fromTranslation: () => fromTranslation,
  fromValues: () => fromValues,
  fromXRotation: () => fromXRotation,
  fromYRotation: () => fromYRotation,
  fromZRotation: () => fromZRotation,
  frustum: () => frustum,
  getRotation: () => getRotation,
  getScaling: () => getScaling,
  getTranslation: () => getTranslation,
  identity: () => identity,
  invert: () => invert,
  lookAt: () => lookAt,
  mul: () => mul,
  multiply: () => multiply,
  multiplyScalar: () => multiplyScalar,
  multiplyScalarAndAdd: () => multiplyScalarAndAdd,
  ortho: () => ortho,
  orthoNO: () => orthoNO,
  orthoZO: () => orthoZO,
  perspective: () => perspective,
  perspectiveFromFieldOfView: () => perspectiveFromFieldOfView,
  perspectiveNO: () => perspectiveNO,
  perspectiveZO: () => perspectiveZO,
  rotate: () => rotate,
  rotateX: () => rotateX,
  rotateY: () => rotateY,
  rotateZ: () => rotateZ,
  scale: () => scale,
  set: () => set,
  str: () => str,
  sub: () => sub,
  subtract: () => subtract,
  targetTo: () => targetTo,
  translate: () => translate,
  transpose: () => transpose
});
function create2() {
  var out = new ARRAY_TYPE(16);
  if (ARRAY_TYPE != Float32Array) {
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[11] = 0;
    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
  }
  out[0] = 1;
  out[5] = 1;
  out[10] = 1;
  out[15] = 1;
  return out;
}
function clone(a) {
  var out = new ARRAY_TYPE(16);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  out[9] = a[9];
  out[10] = a[10];
  out[11] = a[11];
  out[12] = a[12];
  out[13] = a[13];
  out[14] = a[14];
  out[15] = a[15];
  return out;
}
function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  out[9] = a[9];
  out[10] = a[10];
  out[11] = a[11];
  out[12] = a[12];
  out[13] = a[13];
  out[14] = a[14];
  out[15] = a[15];
  return out;
}
function fromValues(m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
  var out = new ARRAY_TYPE(16);
  out[0] = m00;
  out[1] = m01;
  out[2] = m02;
  out[3] = m03;
  out[4] = m10;
  out[5] = m11;
  out[6] = m12;
  out[7] = m13;
  out[8] = m20;
  out[9] = m21;
  out[10] = m22;
  out[11] = m23;
  out[12] = m30;
  out[13] = m31;
  out[14] = m32;
  out[15] = m33;
  return out;
}
function set(out, m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
  out[0] = m00;
  out[1] = m01;
  out[2] = m02;
  out[3] = m03;
  out[4] = m10;
  out[5] = m11;
  out[6] = m12;
  out[7] = m13;
  out[8] = m20;
  out[9] = m21;
  out[10] = m22;
  out[11] = m23;
  out[12] = m30;
  out[13] = m31;
  out[14] = m32;
  out[15] = m33;
  return out;
}
function identity(out) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = 1;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 1;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
function transpose(out, a) {
  if (out === a) {
    var a01 = a[1], a02 = a[2], a03 = a[3];
    var a12 = a[6], a13 = a[7];
    var a23 = a[11];
    out[1] = a[4];
    out[2] = a[8];
    out[3] = a[12];
    out[4] = a01;
    out[6] = a[9];
    out[7] = a[13];
    out[8] = a02;
    out[9] = a12;
    out[11] = a[14];
    out[12] = a03;
    out[13] = a13;
    out[14] = a23;
  } else {
    out[0] = a[0];
    out[1] = a[4];
    out[2] = a[8];
    out[3] = a[12];
    out[4] = a[1];
    out[5] = a[5];
    out[6] = a[9];
    out[7] = a[13];
    out[8] = a[2];
    out[9] = a[6];
    out[10] = a[10];
    out[11] = a[14];
    out[12] = a[3];
    out[13] = a[7];
    out[14] = a[11];
    out[15] = a[15];
  }
  return out;
}
function invert(out, a) {
  var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3];
  var a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7];
  var a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11];
  var a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];
  var b00 = a00 * a11 - a01 * a10;
  var b01 = a00 * a12 - a02 * a10;
  var b02 = a00 * a13 - a03 * a10;
  var b03 = a01 * a12 - a02 * a11;
  var b04 = a01 * a13 - a03 * a11;
  var b05 = a02 * a13 - a03 * a12;
  var b06 = a20 * a31 - a21 * a30;
  var b07 = a20 * a32 - a22 * a30;
  var b08 = a20 * a33 - a23 * a30;
  var b09 = a21 * a32 - a22 * a31;
  var b10 = a21 * a33 - a23 * a31;
  var b11 = a22 * a33 - a23 * a32;
  var det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
  if (!det) {
    return null;
  }
  det = 1 / det;
  out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
  out[1] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
  out[2] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
  out[3] = (a22 * b04 - a21 * b05 - a23 * b03) * det;
  out[4] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
  out[5] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
  out[6] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
  out[7] = (a20 * b05 - a22 * b02 + a23 * b01) * det;
  out[8] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
  out[9] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
  out[10] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
  out[11] = (a21 * b02 - a20 * b04 - a23 * b00) * det;
  out[12] = (a11 * b07 - a10 * b09 - a12 * b06) * det;
  out[13] = (a00 * b09 - a01 * b07 + a02 * b06) * det;
  out[14] = (a31 * b01 - a30 * b03 - a32 * b00) * det;
  out[15] = (a20 * b03 - a21 * b01 + a22 * b00) * det;
  return out;
}
function adjoint(out, a) {
  var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3];
  var a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7];
  var a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11];
  var a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];
  out[0] = a11 * (a22 * a33 - a23 * a32) - a21 * (a12 * a33 - a13 * a32) + a31 * (a12 * a23 - a13 * a22);
  out[1] = -(a01 * (a22 * a33 - a23 * a32) - a21 * (a02 * a33 - a03 * a32) + a31 * (a02 * a23 - a03 * a22));
  out[2] = a01 * (a12 * a33 - a13 * a32) - a11 * (a02 * a33 - a03 * a32) + a31 * (a02 * a13 - a03 * a12);
  out[3] = -(a01 * (a12 * a23 - a13 * a22) - a11 * (a02 * a23 - a03 * a22) + a21 * (a02 * a13 - a03 * a12));
  out[4] = -(a10 * (a22 * a33 - a23 * a32) - a20 * (a12 * a33 - a13 * a32) + a30 * (a12 * a23 - a13 * a22));
  out[5] = a00 * (a22 * a33 - a23 * a32) - a20 * (a02 * a33 - a03 * a32) + a30 * (a02 * a23 - a03 * a22);
  out[6] = -(a00 * (a12 * a33 - a13 * a32) - a10 * (a02 * a33 - a03 * a32) + a30 * (a02 * a13 - a03 * a12));
  out[7] = a00 * (a12 * a23 - a13 * a22) - a10 * (a02 * a23 - a03 * a22) + a20 * (a02 * a13 - a03 * a12);
  out[8] = a10 * (a21 * a33 - a23 * a31) - a20 * (a11 * a33 - a13 * a31) + a30 * (a11 * a23 - a13 * a21);
  out[9] = -(a00 * (a21 * a33 - a23 * a31) - a20 * (a01 * a33 - a03 * a31) + a30 * (a01 * a23 - a03 * a21));
  out[10] = a00 * (a11 * a33 - a13 * a31) - a10 * (a01 * a33 - a03 * a31) + a30 * (a01 * a13 - a03 * a11);
  out[11] = -(a00 * (a11 * a23 - a13 * a21) - a10 * (a01 * a23 - a03 * a21) + a20 * (a01 * a13 - a03 * a11));
  out[12] = -(a10 * (a21 * a32 - a22 * a31) - a20 * (a11 * a32 - a12 * a31) + a30 * (a11 * a22 - a12 * a21));
  out[13] = a00 * (a21 * a32 - a22 * a31) - a20 * (a01 * a32 - a02 * a31) + a30 * (a01 * a22 - a02 * a21);
  out[14] = -(a00 * (a11 * a32 - a12 * a31) - a10 * (a01 * a32 - a02 * a31) + a30 * (a01 * a12 - a02 * a11));
  out[15] = a00 * (a11 * a22 - a12 * a21) - a10 * (a01 * a22 - a02 * a21) + a20 * (a01 * a12 - a02 * a11);
  return out;
}
function determinant(a) {
  var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3];
  var a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7];
  var a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11];
  var a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];
  var b00 = a00 * a11 - a01 * a10;
  var b01 = a00 * a12 - a02 * a10;
  var b02 = a00 * a13 - a03 * a10;
  var b03 = a01 * a12 - a02 * a11;
  var b04 = a01 * a13 - a03 * a11;
  var b05 = a02 * a13 - a03 * a12;
  var b06 = a20 * a31 - a21 * a30;
  var b07 = a20 * a32 - a22 * a30;
  var b08 = a20 * a33 - a23 * a30;
  var b09 = a21 * a32 - a22 * a31;
  var b10 = a21 * a33 - a23 * a31;
  var b11 = a22 * a33 - a23 * a32;
  return b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
}
function multiply(out, a, b) {
  var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3];
  var a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7];
  var a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11];
  var a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];
  var b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3];
  out[0] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
  out[1] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
  out[2] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
  out[3] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
  b0 = b[4];
  b1 = b[5];
  b2 = b[6];
  b3 = b[7];
  out[4] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
  out[5] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
  out[6] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
  out[7] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
  b0 = b[8];
  b1 = b[9];
  b2 = b[10];
  b3 = b[11];
  out[8] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
  out[9] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
  out[10] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
  out[11] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
  b0 = b[12];
  b1 = b[13];
  b2 = b[14];
  b3 = b[15];
  out[12] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
  out[13] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
  out[14] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
  out[15] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
  return out;
}
function translate(out, a, v) {
  var x = v[0], y = v[1], z = v[2];
  var a00, a01, a02, a03;
  var a10, a11, a12, a13;
  var a20, a21, a22, a23;
  if (a === out) {
    out[12] = a[0] * x + a[4] * y + a[8] * z + a[12];
    out[13] = a[1] * x + a[5] * y + a[9] * z + a[13];
    out[14] = a[2] * x + a[6] * y + a[10] * z + a[14];
    out[15] = a[3] * x + a[7] * y + a[11] * z + a[15];
  } else {
    a00 = a[0];
    a01 = a[1];
    a02 = a[2];
    a03 = a[3];
    a10 = a[4];
    a11 = a[5];
    a12 = a[6];
    a13 = a[7];
    a20 = a[8];
    a21 = a[9];
    a22 = a[10];
    a23 = a[11];
    out[0] = a00;
    out[1] = a01;
    out[2] = a02;
    out[3] = a03;
    out[4] = a10;
    out[5] = a11;
    out[6] = a12;
    out[7] = a13;
    out[8] = a20;
    out[9] = a21;
    out[10] = a22;
    out[11] = a23;
    out[12] = a00 * x + a10 * y + a20 * z + a[12];
    out[13] = a01 * x + a11 * y + a21 * z + a[13];
    out[14] = a02 * x + a12 * y + a22 * z + a[14];
    out[15] = a03 * x + a13 * y + a23 * z + a[15];
  }
  return out;
}
function scale(out, a, v) {
  var x = v[0], y = v[1], z = v[2];
  out[0] = a[0] * x;
  out[1] = a[1] * x;
  out[2] = a[2] * x;
  out[3] = a[3] * x;
  out[4] = a[4] * y;
  out[5] = a[5] * y;
  out[6] = a[6] * y;
  out[7] = a[7] * y;
  out[8] = a[8] * z;
  out[9] = a[9] * z;
  out[10] = a[10] * z;
  out[11] = a[11] * z;
  out[12] = a[12];
  out[13] = a[13];
  out[14] = a[14];
  out[15] = a[15];
  return out;
}
function rotate(out, a, rad, axis) {
  var x = axis[0], y = axis[1], z = axis[2];
  var len4 = Math.hypot(x, y, z);
  var s, c, t;
  var a00, a01, a02, a03;
  var a10, a11, a12, a13;
  var a20, a21, a22, a23;
  var b00, b01, b02;
  var b10, b11, b12;
  var b20, b21, b22;
  if (len4 < EPSILON) {
    return null;
  }
  len4 = 1 / len4;
  x *= len4;
  y *= len4;
  z *= len4;
  s = Math.sin(rad);
  c = Math.cos(rad);
  t = 1 - c;
  a00 = a[0];
  a01 = a[1];
  a02 = a[2];
  a03 = a[3];
  a10 = a[4];
  a11 = a[5];
  a12 = a[6];
  a13 = a[7];
  a20 = a[8];
  a21 = a[9];
  a22 = a[10];
  a23 = a[11];
  b00 = x * x * t + c;
  b01 = y * x * t + z * s;
  b02 = z * x * t - y * s;
  b10 = x * y * t - z * s;
  b11 = y * y * t + c;
  b12 = z * y * t + x * s;
  b20 = x * z * t + y * s;
  b21 = y * z * t - x * s;
  b22 = z * z * t + c;
  out[0] = a00 * b00 + a10 * b01 + a20 * b02;
  out[1] = a01 * b00 + a11 * b01 + a21 * b02;
  out[2] = a02 * b00 + a12 * b01 + a22 * b02;
  out[3] = a03 * b00 + a13 * b01 + a23 * b02;
  out[4] = a00 * b10 + a10 * b11 + a20 * b12;
  out[5] = a01 * b10 + a11 * b11 + a21 * b12;
  out[6] = a02 * b10 + a12 * b11 + a22 * b12;
  out[7] = a03 * b10 + a13 * b11 + a23 * b12;
  out[8] = a00 * b20 + a10 * b21 + a20 * b22;
  out[9] = a01 * b20 + a11 * b21 + a21 * b22;
  out[10] = a02 * b20 + a12 * b21 + a22 * b22;
  out[11] = a03 * b20 + a13 * b21 + a23 * b22;
  if (a !== out) {
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
  }
  return out;
}
function rotateX(out, a, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad);
  var a10 = a[4];
  var a11 = a[5];
  var a12 = a[6];
  var a13 = a[7];
  var a20 = a[8];
  var a21 = a[9];
  var a22 = a[10];
  var a23 = a[11];
  if (a !== out) {
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
  }
  out[4] = a10 * c + a20 * s;
  out[5] = a11 * c + a21 * s;
  out[6] = a12 * c + a22 * s;
  out[7] = a13 * c + a23 * s;
  out[8] = a20 * c - a10 * s;
  out[9] = a21 * c - a11 * s;
  out[10] = a22 * c - a12 * s;
  out[11] = a23 * c - a13 * s;
  return out;
}
function rotateY(out, a, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad);
  var a00 = a[0];
  var a01 = a[1];
  var a02 = a[2];
  var a03 = a[3];
  var a20 = a[8];
  var a21 = a[9];
  var a22 = a[10];
  var a23 = a[11];
  if (a !== out) {
    out[4] = a[4];
    out[5] = a[5];
    out[6] = a[6];
    out[7] = a[7];
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
  }
  out[0] = a00 * c - a20 * s;
  out[1] = a01 * c - a21 * s;
  out[2] = a02 * c - a22 * s;
  out[3] = a03 * c - a23 * s;
  out[8] = a00 * s + a20 * c;
  out[9] = a01 * s + a21 * c;
  out[10] = a02 * s + a22 * c;
  out[11] = a03 * s + a23 * c;
  return out;
}
function rotateZ(out, a, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad);
  var a00 = a[0];
  var a01 = a[1];
  var a02 = a[2];
  var a03 = a[3];
  var a10 = a[4];
  var a11 = a[5];
  var a12 = a[6];
  var a13 = a[7];
  if (a !== out) {
    out[8] = a[8];
    out[9] = a[9];
    out[10] = a[10];
    out[11] = a[11];
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
  }
  out[0] = a00 * c + a10 * s;
  out[1] = a01 * c + a11 * s;
  out[2] = a02 * c + a12 * s;
  out[3] = a03 * c + a13 * s;
  out[4] = a10 * c - a00 * s;
  out[5] = a11 * c - a01 * s;
  out[6] = a12 * c - a02 * s;
  out[7] = a13 * c - a03 * s;
  return out;
}
function fromTranslation(out, v) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = 1;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 1;
  out[11] = 0;
  out[12] = v[0];
  out[13] = v[1];
  out[14] = v[2];
  out[15] = 1;
  return out;
}
function fromScaling(out, v) {
  out[0] = v[0];
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = v[1];
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = v[2];
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
function fromRotation(out, rad, axis) {
  var x = axis[0], y = axis[1], z = axis[2];
  var len4 = Math.hypot(x, y, z);
  var s, c, t;
  if (len4 < EPSILON) {
    return null;
  }
  len4 = 1 / len4;
  x *= len4;
  y *= len4;
  z *= len4;
  s = Math.sin(rad);
  c = Math.cos(rad);
  t = 1 - c;
  out[0] = x * x * t + c;
  out[1] = y * x * t + z * s;
  out[2] = z * x * t - y * s;
  out[3] = 0;
  out[4] = x * y * t - z * s;
  out[5] = y * y * t + c;
  out[6] = z * y * t + x * s;
  out[7] = 0;
  out[8] = x * z * t + y * s;
  out[9] = y * z * t - x * s;
  out[10] = z * z * t + c;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
function fromXRotation(out, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad);
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = c;
  out[6] = s;
  out[7] = 0;
  out[8] = 0;
  out[9] = -s;
  out[10] = c;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
function fromYRotation(out, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad);
  out[0] = c;
  out[1] = 0;
  out[2] = -s;
  out[3] = 0;
  out[4] = 0;
  out[5] = 1;
  out[6] = 0;
  out[7] = 0;
  out[8] = s;
  out[9] = 0;
  out[10] = c;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
function fromZRotation(out, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad);
  out[0] = c;
  out[1] = s;
  out[2] = 0;
  out[3] = 0;
  out[4] = -s;
  out[5] = c;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 1;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
function fromRotationTranslation(out, q, v) {
  var x = q[0], y = q[1], z = q[2], w = q[3];
  var x2 = x + x;
  var y2 = y + y;
  var z2 = z + z;
  var xx = x * x2;
  var xy = x * y2;
  var xz = x * z2;
  var yy = y * y2;
  var yz = y * z2;
  var zz = z * z2;
  var wx = w * x2;
  var wy = w * y2;
  var wz = w * z2;
  out[0] = 1 - (yy + zz);
  out[1] = xy + wz;
  out[2] = xz - wy;
  out[3] = 0;
  out[4] = xy - wz;
  out[5] = 1 - (xx + zz);
  out[6] = yz + wx;
  out[7] = 0;
  out[8] = xz + wy;
  out[9] = yz - wx;
  out[10] = 1 - (xx + yy);
  out[11] = 0;
  out[12] = v[0];
  out[13] = v[1];
  out[14] = v[2];
  out[15] = 1;
  return out;
}
function fromQuat2(out, a) {
  var translation = new ARRAY_TYPE(3);
  var bx = -a[0], by = -a[1], bz = -a[2], bw = a[3], ax = a[4], ay = a[5], az = a[6], aw = a[7];
  var magnitude = bx * bx + by * by + bz * bz + bw * bw;
  if (magnitude > 0) {
    translation[0] = (ax * bw + aw * bx + ay * bz - az * by) * 2 / magnitude;
    translation[1] = (ay * bw + aw * by + az * bx - ax * bz) * 2 / magnitude;
    translation[2] = (az * bw + aw * bz + ax * by - ay * bx) * 2 / magnitude;
  } else {
    translation[0] = (ax * bw + aw * bx + ay * bz - az * by) * 2;
    translation[1] = (ay * bw + aw * by + az * bx - ax * bz) * 2;
    translation[2] = (az * bw + aw * bz + ax * by - ay * bx) * 2;
  }
  fromRotationTranslation(out, a, translation);
  return out;
}
function getTranslation(out, mat) {
  out[0] = mat[12];
  out[1] = mat[13];
  out[2] = mat[14];
  return out;
}
function getScaling(out, mat) {
  var m11 = mat[0];
  var m12 = mat[1];
  var m13 = mat[2];
  var m21 = mat[4];
  var m22 = mat[5];
  var m23 = mat[6];
  var m31 = mat[8];
  var m32 = mat[9];
  var m33 = mat[10];
  out[0] = Math.hypot(m11, m12, m13);
  out[1] = Math.hypot(m21, m22, m23);
  out[2] = Math.hypot(m31, m32, m33);
  return out;
}
function getRotation(out, mat) {
  var scaling = new ARRAY_TYPE(3);
  getScaling(scaling, mat);
  var is1 = 1 / scaling[0];
  var is2 = 1 / scaling[1];
  var is3 = 1 / scaling[2];
  var sm11 = mat[0] * is1;
  var sm12 = mat[1] * is2;
  var sm13 = mat[2] * is3;
  var sm21 = mat[4] * is1;
  var sm22 = mat[5] * is2;
  var sm23 = mat[6] * is3;
  var sm31 = mat[8] * is1;
  var sm32 = mat[9] * is2;
  var sm33 = mat[10] * is3;
  var trace = sm11 + sm22 + sm33;
  var S = 0;
  if (trace > 0) {
    S = Math.sqrt(trace + 1) * 2;
    out[3] = 0.25 * S;
    out[0] = (sm23 - sm32) / S;
    out[1] = (sm31 - sm13) / S;
    out[2] = (sm12 - sm21) / S;
  } else if (sm11 > sm22 && sm11 > sm33) {
    S = Math.sqrt(1 + sm11 - sm22 - sm33) * 2;
    out[3] = (sm23 - sm32) / S;
    out[0] = 0.25 * S;
    out[1] = (sm12 + sm21) / S;
    out[2] = (sm31 + sm13) / S;
  } else if (sm22 > sm33) {
    S = Math.sqrt(1 + sm22 - sm11 - sm33) * 2;
    out[3] = (sm31 - sm13) / S;
    out[0] = (sm12 + sm21) / S;
    out[1] = 0.25 * S;
    out[2] = (sm23 + sm32) / S;
  } else {
    S = Math.sqrt(1 + sm33 - sm11 - sm22) * 2;
    out[3] = (sm12 - sm21) / S;
    out[0] = (sm31 + sm13) / S;
    out[1] = (sm23 + sm32) / S;
    out[2] = 0.25 * S;
  }
  return out;
}
function fromRotationTranslationScale(out, q, v, s) {
  var x = q[0], y = q[1], z = q[2], w = q[3];
  var x2 = x + x;
  var y2 = y + y;
  var z2 = z + z;
  var xx = x * x2;
  var xy = x * y2;
  var xz = x * z2;
  var yy = y * y2;
  var yz = y * z2;
  var zz = z * z2;
  var wx = w * x2;
  var wy = w * y2;
  var wz = w * z2;
  var sx = s[0];
  var sy = s[1];
  var sz = s[2];
  out[0] = (1 - (yy + zz)) * sx;
  out[1] = (xy + wz) * sx;
  out[2] = (xz - wy) * sx;
  out[3] = 0;
  out[4] = (xy - wz) * sy;
  out[5] = (1 - (xx + zz)) * sy;
  out[6] = (yz + wx) * sy;
  out[7] = 0;
  out[8] = (xz + wy) * sz;
  out[9] = (yz - wx) * sz;
  out[10] = (1 - (xx + yy)) * sz;
  out[11] = 0;
  out[12] = v[0];
  out[13] = v[1];
  out[14] = v[2];
  out[15] = 1;
  return out;
}
function fromRotationTranslationScaleOrigin(out, q, v, s, o) {
  var x = q[0], y = q[1], z = q[2], w = q[3];
  var x2 = x + x;
  var y2 = y + y;
  var z2 = z + z;
  var xx = x * x2;
  var xy = x * y2;
  var xz = x * z2;
  var yy = y * y2;
  var yz = y * z2;
  var zz = z * z2;
  var wx = w * x2;
  var wy = w * y2;
  var wz = w * z2;
  var sx = s[0];
  var sy = s[1];
  var sz = s[2];
  var ox = o[0];
  var oy = o[1];
  var oz = o[2];
  var out0 = (1 - (yy + zz)) * sx;
  var out1 = (xy + wz) * sx;
  var out2 = (xz - wy) * sx;
  var out4 = (xy - wz) * sy;
  var out5 = (1 - (xx + zz)) * sy;
  var out6 = (yz + wx) * sy;
  var out8 = (xz + wy) * sz;
  var out9 = (yz - wx) * sz;
  var out10 = (1 - (xx + yy)) * sz;
  out[0] = out0;
  out[1] = out1;
  out[2] = out2;
  out[3] = 0;
  out[4] = out4;
  out[5] = out5;
  out[6] = out6;
  out[7] = 0;
  out[8] = out8;
  out[9] = out9;
  out[10] = out10;
  out[11] = 0;
  out[12] = v[0] + ox - (out0 * ox + out4 * oy + out8 * oz);
  out[13] = v[1] + oy - (out1 * ox + out5 * oy + out9 * oz);
  out[14] = v[2] + oz - (out2 * ox + out6 * oy + out10 * oz);
  out[15] = 1;
  return out;
}
function fromQuat(out, q) {
  var x = q[0], y = q[1], z = q[2], w = q[3];
  var x2 = x + x;
  var y2 = y + y;
  var z2 = z + z;
  var xx = x * x2;
  var yx = y * x2;
  var yy = y * y2;
  var zx = z * x2;
  var zy = z * y2;
  var zz = z * z2;
  var wx = w * x2;
  var wy = w * y2;
  var wz = w * z2;
  out[0] = 1 - yy - zz;
  out[1] = yx + wz;
  out[2] = zx - wy;
  out[3] = 0;
  out[4] = yx - wz;
  out[5] = 1 - xx - zz;
  out[6] = zy + wx;
  out[7] = 0;
  out[8] = zx + wy;
  out[9] = zy - wx;
  out[10] = 1 - xx - yy;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
function frustum(out, left, right, bottom, top, near, far) {
  var rl = 1 / (right - left);
  var tb = 1 / (top - bottom);
  var nf = 1 / (near - far);
  out[0] = near * 2 * rl;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = near * 2 * tb;
  out[6] = 0;
  out[7] = 0;
  out[8] = (right + left) * rl;
  out[9] = (top + bottom) * tb;
  out[10] = (far + near) * nf;
  out[11] = -1;
  out[12] = 0;
  out[13] = 0;
  out[14] = far * near * 2 * nf;
  out[15] = 0;
  return out;
}
function perspectiveNO(out, fovy, aspect, near, far) {
  var f = 1 / Math.tan(fovy / 2), nf;
  out[0] = f / aspect;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = f;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[11] = -1;
  out[12] = 0;
  out[13] = 0;
  out[15] = 0;
  if (far != null && far !== Infinity) {
    nf = 1 / (near - far);
    out[10] = (far + near) * nf;
    out[14] = 2 * far * near * nf;
  } else {
    out[10] = -1;
    out[14] = -2 * near;
  }
  return out;
}
var perspective = perspectiveNO;
function perspectiveZO(out, fovy, aspect, near, far) {
  var f = 1 / Math.tan(fovy / 2), nf;
  out[0] = f / aspect;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = f;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[11] = -1;
  out[12] = 0;
  out[13] = 0;
  out[15] = 0;
  if (far != null && far !== Infinity) {
    nf = 1 / (near - far);
    out[10] = far * nf;
    out[14] = far * near * nf;
  } else {
    out[10] = -1;
    out[14] = -near;
  }
  return out;
}
function perspectiveFromFieldOfView(out, fov, near, far) {
  var upTan = Math.tan(fov.upDegrees * Math.PI / 180);
  var downTan = Math.tan(fov.downDegrees * Math.PI / 180);
  var leftTan = Math.tan(fov.leftDegrees * Math.PI / 180);
  var rightTan = Math.tan(fov.rightDegrees * Math.PI / 180);
  var xScale = 2 / (leftTan + rightTan);
  var yScale = 2 / (upTan + downTan);
  out[0] = xScale;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = yScale;
  out[6] = 0;
  out[7] = 0;
  out[8] = -((leftTan - rightTan) * xScale * 0.5);
  out[9] = (upTan - downTan) * yScale * 0.5;
  out[10] = far / (near - far);
  out[11] = -1;
  out[12] = 0;
  out[13] = 0;
  out[14] = far * near / (near - far);
  out[15] = 0;
  return out;
}
function orthoNO(out, left, right, bottom, top, near, far) {
  var lr = 1 / (left - right);
  var bt = 1 / (bottom - top);
  var nf = 1 / (near - far);
  out[0] = -2 * lr;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = -2 * bt;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 2 * nf;
  out[11] = 0;
  out[12] = (left + right) * lr;
  out[13] = (top + bottom) * bt;
  out[14] = (far + near) * nf;
  out[15] = 1;
  return out;
}
var ortho = orthoNO;
function orthoZO(out, left, right, bottom, top, near, far) {
  var lr = 1 / (left - right);
  var bt = 1 / (bottom - top);
  var nf = 1 / (near - far);
  out[0] = -2 * lr;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = -2 * bt;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = nf;
  out[11] = 0;
  out[12] = (left + right) * lr;
  out[13] = (top + bottom) * bt;
  out[14] = near * nf;
  out[15] = 1;
  return out;
}
function lookAt(out, eye, center, up) {
  var x0, x1, x2, y0, y1, y2, z0, z1, z2, len4;
  var eyex = eye[0];
  var eyey = eye[1];
  var eyez = eye[2];
  var upx = up[0];
  var upy = up[1];
  var upz = up[2];
  var centerx = center[0];
  var centery = center[1];
  var centerz = center[2];
  if (Math.abs(eyex - centerx) < EPSILON && Math.abs(eyey - centery) < EPSILON && Math.abs(eyez - centerz) < EPSILON) {
    return identity(out);
  }
  z0 = eyex - centerx;
  z1 = eyey - centery;
  z2 = eyez - centerz;
  len4 = 1 / Math.hypot(z0, z1, z2);
  z0 *= len4;
  z1 *= len4;
  z2 *= len4;
  x0 = upy * z2 - upz * z1;
  x1 = upz * z0 - upx * z2;
  x2 = upx * z1 - upy * z0;
  len4 = Math.hypot(x0, x1, x2);
  if (!len4) {
    x0 = 0;
    x1 = 0;
    x2 = 0;
  } else {
    len4 = 1 / len4;
    x0 *= len4;
    x1 *= len4;
    x2 *= len4;
  }
  y0 = z1 * x2 - z2 * x1;
  y1 = z2 * x0 - z0 * x2;
  y2 = z0 * x1 - z1 * x0;
  len4 = Math.hypot(y0, y1, y2);
  if (!len4) {
    y0 = 0;
    y1 = 0;
    y2 = 0;
  } else {
    len4 = 1 / len4;
    y0 *= len4;
    y1 *= len4;
    y2 *= len4;
  }
  out[0] = x0;
  out[1] = y0;
  out[2] = z0;
  out[3] = 0;
  out[4] = x1;
  out[5] = y1;
  out[6] = z1;
  out[7] = 0;
  out[8] = x2;
  out[9] = y2;
  out[10] = z2;
  out[11] = 0;
  out[12] = -(x0 * eyex + x1 * eyey + x2 * eyez);
  out[13] = -(y0 * eyex + y1 * eyey + y2 * eyez);
  out[14] = -(z0 * eyex + z1 * eyey + z2 * eyez);
  out[15] = 1;
  return out;
}
function targetTo(out, eye, target, up) {
  var eyex = eye[0], eyey = eye[1], eyez = eye[2], upx = up[0], upy = up[1], upz = up[2];
  var z0 = eyex - target[0], z1 = eyey - target[1], z2 = eyez - target[2];
  var len4 = z0 * z0 + z1 * z1 + z2 * z2;
  if (len4 > 0) {
    len4 = 1 / Math.sqrt(len4);
    z0 *= len4;
    z1 *= len4;
    z2 *= len4;
  }
  var x0 = upy * z2 - upz * z1, x1 = upz * z0 - upx * z2, x2 = upx * z1 - upy * z0;
  len4 = x0 * x0 + x1 * x1 + x2 * x2;
  if (len4 > 0) {
    len4 = 1 / Math.sqrt(len4);
    x0 *= len4;
    x1 *= len4;
    x2 *= len4;
  }
  out[0] = x0;
  out[1] = x1;
  out[2] = x2;
  out[3] = 0;
  out[4] = z1 * x2 - z2 * x1;
  out[5] = z2 * x0 - z0 * x2;
  out[6] = z0 * x1 - z1 * x0;
  out[7] = 0;
  out[8] = z0;
  out[9] = z1;
  out[10] = z2;
  out[11] = 0;
  out[12] = eyex;
  out[13] = eyey;
  out[14] = eyez;
  out[15] = 1;
  return out;
}
function str(a) {
  return "mat4(" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ", " + a[4] + ", " + a[5] + ", " + a[6] + ", " + a[7] + ", " + a[8] + ", " + a[9] + ", " + a[10] + ", " + a[11] + ", " + a[12] + ", " + a[13] + ", " + a[14] + ", " + a[15] + ")";
}
function frob(a) {
  return Math.hypot(a[0], a[1], a[2], a[3], a[4], a[5], a[6], a[7], a[8], a[9], a[10], a[11], a[12], a[13], a[14], a[15]);
}
function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  out[3] = a[3] + b[3];
  out[4] = a[4] + b[4];
  out[5] = a[5] + b[5];
  out[6] = a[6] + b[6];
  out[7] = a[7] + b[7];
  out[8] = a[8] + b[8];
  out[9] = a[9] + b[9];
  out[10] = a[10] + b[10];
  out[11] = a[11] + b[11];
  out[12] = a[12] + b[12];
  out[13] = a[13] + b[13];
  out[14] = a[14] + b[14];
  out[15] = a[15] + b[15];
  return out;
}
function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  out[3] = a[3] - b[3];
  out[4] = a[4] - b[4];
  out[5] = a[5] - b[5];
  out[6] = a[6] - b[6];
  out[7] = a[7] - b[7];
  out[8] = a[8] - b[8];
  out[9] = a[9] - b[9];
  out[10] = a[10] - b[10];
  out[11] = a[11] - b[11];
  out[12] = a[12] - b[12];
  out[13] = a[13] - b[13];
  out[14] = a[14] - b[14];
  out[15] = a[15] - b[15];
  return out;
}
function multiplyScalar(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  out[3] = a[3] * b;
  out[4] = a[4] * b;
  out[5] = a[5] * b;
  out[6] = a[6] * b;
  out[7] = a[7] * b;
  out[8] = a[8] * b;
  out[9] = a[9] * b;
  out[10] = a[10] * b;
  out[11] = a[11] * b;
  out[12] = a[12] * b;
  out[13] = a[13] * b;
  out[14] = a[14] * b;
  out[15] = a[15] * b;
  return out;
}
function multiplyScalarAndAdd(out, a, b, scale6) {
  out[0] = a[0] + b[0] * scale6;
  out[1] = a[1] + b[1] * scale6;
  out[2] = a[2] + b[2] * scale6;
  out[3] = a[3] + b[3] * scale6;
  out[4] = a[4] + b[4] * scale6;
  out[5] = a[5] + b[5] * scale6;
  out[6] = a[6] + b[6] * scale6;
  out[7] = a[7] + b[7] * scale6;
  out[8] = a[8] + b[8] * scale6;
  out[9] = a[9] + b[9] * scale6;
  out[10] = a[10] + b[10] * scale6;
  out[11] = a[11] + b[11] * scale6;
  out[12] = a[12] + b[12] * scale6;
  out[13] = a[13] + b[13] * scale6;
  out[14] = a[14] + b[14] * scale6;
  out[15] = a[15] + b[15] * scale6;
  return out;
}
function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && a[4] === b[4] && a[5] === b[5] && a[6] === b[6] && a[7] === b[7] && a[8] === b[8] && a[9] === b[9] && a[10] === b[10] && a[11] === b[11] && a[12] === b[12] && a[13] === b[13] && a[14] === b[14] && a[15] === b[15];
}
function equals(a, b) {
  var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3];
  var a4 = a[4], a5 = a[5], a6 = a[6], a7 = a[7];
  var a8 = a[8], a9 = a[9], a10 = a[10], a11 = a[11];
  var a12 = a[12], a13 = a[13], a14 = a[14], a15 = a[15];
  var b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3];
  var b4 = b[4], b5 = b[5], b6 = b[6], b7 = b[7];
  var b8 = b[8], b9 = b[9], b10 = b[10], b11 = b[11];
  var b12 = b[12], b13 = b[13], b14 = b[14], b15 = b[15];
  return Math.abs(a0 - b0) <= EPSILON * Math.max(1, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= EPSILON * Math.max(1, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= EPSILON * Math.max(1, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= EPSILON * Math.max(1, Math.abs(a3), Math.abs(b3)) && Math.abs(a4 - b4) <= EPSILON * Math.max(1, Math.abs(a4), Math.abs(b4)) && Math.abs(a5 - b5) <= EPSILON * Math.max(1, Math.abs(a5), Math.abs(b5)) && Math.abs(a6 - b6) <= EPSILON * Math.max(1, Math.abs(a6), Math.abs(b6)) && Math.abs(a7 - b7) <= EPSILON * Math.max(1, Math.abs(a7), Math.abs(b7)) && Math.abs(a8 - b8) <= EPSILON * Math.max(1, Math.abs(a8), Math.abs(b8)) && Math.abs(a9 - b9) <= EPSILON * Math.max(1, Math.abs(a9), Math.abs(b9)) && Math.abs(a10 - b10) <= EPSILON * Math.max(1, Math.abs(a10), Math.abs(b10)) && Math.abs(a11 - b11) <= EPSILON * Math.max(1, Math.abs(a11), Math.abs(b11)) && Math.abs(a12 - b12) <= EPSILON * Math.max(1, Math.abs(a12), Math.abs(b12)) && Math.abs(a13 - b13) <= EPSILON * Math.max(1, Math.abs(a13), Math.abs(b13)) && Math.abs(a14 - b14) <= EPSILON * Math.max(1, Math.abs(a14), Math.abs(b14)) && Math.abs(a15 - b15) <= EPSILON * Math.max(1, Math.abs(a15), Math.abs(b15));
}
var mul = multiply;
var sub = subtract;

// node_modules/gl-matrix/esm/quat.js
var quat_exports = {};
__export(quat_exports, {
  add: () => add4,
  calculateW: () => calculateW,
  clone: () => clone4,
  conjugate: () => conjugate,
  copy: () => copy4,
  create: () => create5,
  dot: () => dot3,
  equals: () => equals4,
  exactEquals: () => exactEquals4,
  exp: () => exp,
  fromEuler: () => fromEuler,
  fromMat3: () => fromMat3,
  fromValues: () => fromValues4,
  getAngle: () => getAngle,
  getAxisAngle: () => getAxisAngle,
  identity: () => identity2,
  invert: () => invert2,
  len: () => len2,
  length: () => length3,
  lerp: () => lerp3,
  ln: () => ln,
  mul: () => mul3,
  multiply: () => multiply3,
  normalize: () => normalize3,
  pow: () => pow,
  random: () => random2,
  rotateX: () => rotateX3,
  rotateY: () => rotateY3,
  rotateZ: () => rotateZ3,
  rotationTo: () => rotationTo,
  scale: () => scale4,
  set: () => set4,
  setAxes: () => setAxes,
  setAxisAngle: () => setAxisAngle,
  slerp: () => slerp,
  sqlerp: () => sqlerp,
  sqrLen: () => sqrLen2,
  squaredLength: () => squaredLength3,
  str: () => str3
});

// node_modules/gl-matrix/esm/vec3.js
var vec3_exports = {};
__export(vec3_exports, {
  add: () => add2,
  angle: () => angle,
  bezier: () => bezier,
  ceil: () => ceil,
  clone: () => clone2,
  copy: () => copy2,
  create: () => create3,
  cross: () => cross,
  dist: () => dist,
  distance: () => distance,
  div: () => div,
  divide: () => divide,
  dot: () => dot,
  equals: () => equals2,
  exactEquals: () => exactEquals2,
  floor: () => floor,
  forEach: () => forEach,
  fromValues: () => fromValues2,
  hermite: () => hermite,
  inverse: () => inverse,
  len: () => len,
  length: () => length,
  lerp: () => lerp,
  max: () => max,
  min: () => min,
  mul: () => mul2,
  multiply: () => multiply2,
  negate: () => negate,
  normalize: () => normalize,
  random: () => random,
  rotateX: () => rotateX2,
  rotateY: () => rotateY2,
  rotateZ: () => rotateZ2,
  round: () => round,
  scale: () => scale2,
  scaleAndAdd: () => scaleAndAdd,
  set: () => set2,
  sqrDist: () => sqrDist,
  sqrLen: () => sqrLen,
  squaredDistance: () => squaredDistance,
  squaredLength: () => squaredLength,
  str: () => str2,
  sub: () => sub2,
  subtract: () => subtract2,
  transformMat3: () => transformMat3,
  transformMat4: () => transformMat4,
  transformQuat: () => transformQuat,
  zero: () => zero
});
function create3() {
  var out = new ARRAY_TYPE(3);
  if (ARRAY_TYPE != Float32Array) {
    out[0] = 0;
    out[1] = 0;
    out[2] = 0;
  }
  return out;
}
function clone2(a) {
  var out = new ARRAY_TYPE(3);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  return out;
}
function length(a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  return Math.hypot(x, y, z);
}
function fromValues2(x, y, z) {
  var out = new ARRAY_TYPE(3);
  out[0] = x;
  out[1] = y;
  out[2] = z;
  return out;
}
function copy2(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  return out;
}
function set2(out, x, y, z) {
  out[0] = x;
  out[1] = y;
  out[2] = z;
  return out;
}
function add2(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  return out;
}
function subtract2(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  return out;
}
function multiply2(out, a, b) {
  out[0] = a[0] * b[0];
  out[1] = a[1] * b[1];
  out[2] = a[2] * b[2];
  return out;
}
function divide(out, a, b) {
  out[0] = a[0] / b[0];
  out[1] = a[1] / b[1];
  out[2] = a[2] / b[2];
  return out;
}
function ceil(out, a) {
  out[0] = Math.ceil(a[0]);
  out[1] = Math.ceil(a[1]);
  out[2] = Math.ceil(a[2]);
  return out;
}
function floor(out, a) {
  out[0] = Math.floor(a[0]);
  out[1] = Math.floor(a[1]);
  out[2] = Math.floor(a[2]);
  return out;
}
function min(out, a, b) {
  out[0] = Math.min(a[0], b[0]);
  out[1] = Math.min(a[1], b[1]);
  out[2] = Math.min(a[2], b[2]);
  return out;
}
function max(out, a, b) {
  out[0] = Math.max(a[0], b[0]);
  out[1] = Math.max(a[1], b[1]);
  out[2] = Math.max(a[2], b[2]);
  return out;
}
function round(out, a) {
  out[0] = Math.round(a[0]);
  out[1] = Math.round(a[1]);
  out[2] = Math.round(a[2]);
  return out;
}
function scale2(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  return out;
}
function scaleAndAdd(out, a, b, scale6) {
  out[0] = a[0] + b[0] * scale6;
  out[1] = a[1] + b[1] * scale6;
  out[2] = a[2] + b[2] * scale6;
  return out;
}
function distance(a, b) {
  var x = b[0] - a[0];
  var y = b[1] - a[1];
  var z = b[2] - a[2];
  return Math.hypot(x, y, z);
}
function squaredDistance(a, b) {
  var x = b[0] - a[0];
  var y = b[1] - a[1];
  var z = b[2] - a[2];
  return x * x + y * y + z * z;
}
function squaredLength(a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  return x * x + y * y + z * z;
}
function negate(out, a) {
  out[0] = -a[0];
  out[1] = -a[1];
  out[2] = -a[2];
  return out;
}
function inverse(out, a) {
  out[0] = 1 / a[0];
  out[1] = 1 / a[1];
  out[2] = 1 / a[2];
  return out;
}
function normalize(out, a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  var len4 = x * x + y * y + z * z;
  if (len4 > 0) {
    len4 = 1 / Math.sqrt(len4);
  }
  out[0] = a[0] * len4;
  out[1] = a[1] * len4;
  out[2] = a[2] * len4;
  return out;
}
function dot(a, b) {
  return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
}
function cross(out, a, b) {
  var ax = a[0], ay = a[1], az = a[2];
  var bx = b[0], by = b[1], bz = b[2];
  out[0] = ay * bz - az * by;
  out[1] = az * bx - ax * bz;
  out[2] = ax * by - ay * bx;
  return out;
}
function lerp(out, a, b, t) {
  var ax = a[0];
  var ay = a[1];
  var az = a[2];
  out[0] = ax + t * (b[0] - ax);
  out[1] = ay + t * (b[1] - ay);
  out[2] = az + t * (b[2] - az);
  return out;
}
function hermite(out, a, b, c, d, t) {
  var factorTimes2 = t * t;
  var factor1 = factorTimes2 * (2 * t - 3) + 1;
  var factor2 = factorTimes2 * (t - 2) + t;
  var factor3 = factorTimes2 * (t - 1);
  var factor4 = factorTimes2 * (3 - 2 * t);
  out[0] = a[0] * factor1 + b[0] * factor2 + c[0] * factor3 + d[0] * factor4;
  out[1] = a[1] * factor1 + b[1] * factor2 + c[1] * factor3 + d[1] * factor4;
  out[2] = a[2] * factor1 + b[2] * factor2 + c[2] * factor3 + d[2] * factor4;
  return out;
}
function bezier(out, a, b, c, d, t) {
  var inverseFactor = 1 - t;
  var inverseFactorTimesTwo = inverseFactor * inverseFactor;
  var factorTimes2 = t * t;
  var factor1 = inverseFactorTimesTwo * inverseFactor;
  var factor2 = 3 * t * inverseFactorTimesTwo;
  var factor3 = 3 * factorTimes2 * inverseFactor;
  var factor4 = factorTimes2 * t;
  out[0] = a[0] * factor1 + b[0] * factor2 + c[0] * factor3 + d[0] * factor4;
  out[1] = a[1] * factor1 + b[1] * factor2 + c[1] * factor3 + d[1] * factor4;
  out[2] = a[2] * factor1 + b[2] * factor2 + c[2] * factor3 + d[2] * factor4;
  return out;
}
function random(out, scale6) {
  scale6 = scale6 || 1;
  var r = RANDOM() * 2 * Math.PI;
  var z = RANDOM() * 2 - 1;
  var zScale = Math.sqrt(1 - z * z) * scale6;
  out[0] = Math.cos(r) * zScale;
  out[1] = Math.sin(r) * zScale;
  out[2] = z * scale6;
  return out;
}
function transformMat4(out, a, m) {
  var x = a[0], y = a[1], z = a[2];
  var w = m[3] * x + m[7] * y + m[11] * z + m[15];
  w = w || 1;
  out[0] = (m[0] * x + m[4] * y + m[8] * z + m[12]) / w;
  out[1] = (m[1] * x + m[5] * y + m[9] * z + m[13]) / w;
  out[2] = (m[2] * x + m[6] * y + m[10] * z + m[14]) / w;
  return out;
}
function transformMat3(out, a, m) {
  var x = a[0], y = a[1], z = a[2];
  out[0] = x * m[0] + y * m[3] + z * m[6];
  out[1] = x * m[1] + y * m[4] + z * m[7];
  out[2] = x * m[2] + y * m[5] + z * m[8];
  return out;
}
function transformQuat(out, a, q) {
  var qx = q[0], qy = q[1], qz = q[2], qw = q[3];
  var x = a[0], y = a[1], z = a[2];
  var uvx = qy * z - qz * y, uvy = qz * x - qx * z, uvz = qx * y - qy * x;
  var uuvx = qy * uvz - qz * uvy, uuvy = qz * uvx - qx * uvz, uuvz = qx * uvy - qy * uvx;
  var w2 = qw * 2;
  uvx *= w2;
  uvy *= w2;
  uvz *= w2;
  uuvx *= 2;
  uuvy *= 2;
  uuvz *= 2;
  out[0] = x + uvx + uuvx;
  out[1] = y + uvy + uuvy;
  out[2] = z + uvz + uuvz;
  return out;
}
function rotateX2(out, a, b, rad) {
  var p = [], r = [];
  p[0] = a[0] - b[0];
  p[1] = a[1] - b[1];
  p[2] = a[2] - b[2];
  r[0] = p[0];
  r[1] = p[1] * Math.cos(rad) - p[2] * Math.sin(rad);
  r[2] = p[1] * Math.sin(rad) + p[2] * Math.cos(rad);
  out[0] = r[0] + b[0];
  out[1] = r[1] + b[1];
  out[2] = r[2] + b[2];
  return out;
}
function rotateY2(out, a, b, rad) {
  var p = [], r = [];
  p[0] = a[0] - b[0];
  p[1] = a[1] - b[1];
  p[2] = a[2] - b[2];
  r[0] = p[2] * Math.sin(rad) + p[0] * Math.cos(rad);
  r[1] = p[1];
  r[2] = p[2] * Math.cos(rad) - p[0] * Math.sin(rad);
  out[0] = r[0] + b[0];
  out[1] = r[1] + b[1];
  out[2] = r[2] + b[2];
  return out;
}
function rotateZ2(out, a, b, rad) {
  var p = [], r = [];
  p[0] = a[0] - b[0];
  p[1] = a[1] - b[1];
  p[2] = a[2] - b[2];
  r[0] = p[0] * Math.cos(rad) - p[1] * Math.sin(rad);
  r[1] = p[0] * Math.sin(rad) + p[1] * Math.cos(rad);
  r[2] = p[2];
  out[0] = r[0] + b[0];
  out[1] = r[1] + b[1];
  out[2] = r[2] + b[2];
  return out;
}
function angle(a, b) {
  var ax = a[0], ay = a[1], az = a[2], bx = b[0], by = b[1], bz = b[2], mag1 = Math.sqrt(ax * ax + ay * ay + az * az), mag2 = Math.sqrt(bx * bx + by * by + bz * bz), mag = mag1 * mag2, cosine = mag && dot(a, b) / mag;
  return Math.acos(Math.min(Math.max(cosine, -1), 1));
}
function zero(out) {
  out[0] = 0;
  out[1] = 0;
  out[2] = 0;
  return out;
}
function str2(a) {
  return "vec3(" + a[0] + ", " + a[1] + ", " + a[2] + ")";
}
function exactEquals2(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2];
}
function equals2(a, b) {
  var a0 = a[0], a1 = a[1], a2 = a[2];
  var b0 = b[0], b1 = b[1], b2 = b[2];
  return Math.abs(a0 - b0) <= EPSILON * Math.max(1, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= EPSILON * Math.max(1, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= EPSILON * Math.max(1, Math.abs(a2), Math.abs(b2));
}
var sub2 = subtract2;
var mul2 = multiply2;
var div = divide;
var dist = distance;
var sqrDist = squaredDistance;
var len = length;
var sqrLen = squaredLength;
var forEach = function() {
  var vec = create3();
  return function(a, stride, offset, count, fn, arg) {
    var i, l;
    if (!stride) {
      stride = 3;
    }
    if (!offset) {
      offset = 0;
    }
    if (count) {
      l = Math.min(count * stride + offset, a.length);
    } else {
      l = a.length;
    }
    for (i = offset; i < l; i += stride) {
      vec[0] = a[i];
      vec[1] = a[i + 1];
      vec[2] = a[i + 2];
      fn(vec, vec, arg);
      a[i] = vec[0];
      a[i + 1] = vec[1];
      a[i + 2] = vec[2];
    }
    return a;
  };
}();

// node_modules/gl-matrix/esm/vec4.js
function create4() {
  var out = new ARRAY_TYPE(4);
  if (ARRAY_TYPE != Float32Array) {
    out[0] = 0;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
  }
  return out;
}
function clone3(a) {
  var out = new ARRAY_TYPE(4);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  return out;
}
function fromValues3(x, y, z, w) {
  var out = new ARRAY_TYPE(4);
  out[0] = x;
  out[1] = y;
  out[2] = z;
  out[3] = w;
  return out;
}
function copy3(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  return out;
}
function set3(out, x, y, z, w) {
  out[0] = x;
  out[1] = y;
  out[2] = z;
  out[3] = w;
  return out;
}
function add3(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  out[3] = a[3] + b[3];
  return out;
}
function scale3(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  out[3] = a[3] * b;
  return out;
}
function length2(a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  var w = a[3];
  return Math.hypot(x, y, z, w);
}
function squaredLength2(a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  var w = a[3];
  return x * x + y * y + z * z + w * w;
}
function normalize2(out, a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  var w = a[3];
  var len4 = x * x + y * y + z * z + w * w;
  if (len4 > 0) {
    len4 = 1 / Math.sqrt(len4);
  }
  out[0] = x * len4;
  out[1] = y * len4;
  out[2] = z * len4;
  out[3] = w * len4;
  return out;
}
function dot2(a, b) {
  return a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3];
}
function lerp2(out, a, b, t) {
  var ax = a[0];
  var ay = a[1];
  var az = a[2];
  var aw = a[3];
  out[0] = ax + t * (b[0] - ax);
  out[1] = ay + t * (b[1] - ay);
  out[2] = az + t * (b[2] - az);
  out[3] = aw + t * (b[3] - aw);
  return out;
}
function exactEquals3(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3];
}
function equals3(a, b) {
  var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3];
  var b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3];
  return Math.abs(a0 - b0) <= EPSILON * Math.max(1, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= EPSILON * Math.max(1, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= EPSILON * Math.max(1, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= EPSILON * Math.max(1, Math.abs(a3), Math.abs(b3));
}
var forEach2 = function() {
  var vec = create4();
  return function(a, stride, offset, count, fn, arg) {
    var i, l;
    if (!stride) {
      stride = 4;
    }
    if (!offset) {
      offset = 0;
    }
    if (count) {
      l = Math.min(count * stride + offset, a.length);
    } else {
      l = a.length;
    }
    for (i = offset; i < l; i += stride) {
      vec[0] = a[i];
      vec[1] = a[i + 1];
      vec[2] = a[i + 2];
      vec[3] = a[i + 3];
      fn(vec, vec, arg);
      a[i] = vec[0];
      a[i + 1] = vec[1];
      a[i + 2] = vec[2];
      a[i + 3] = vec[3];
    }
    return a;
  };
}();

// node_modules/gl-matrix/esm/quat.js
function create5() {
  var out = new ARRAY_TYPE(4);
  if (ARRAY_TYPE != Float32Array) {
    out[0] = 0;
    out[1] = 0;
    out[2] = 0;
  }
  out[3] = 1;
  return out;
}
function identity2(out) {
  out[0] = 0;
  out[1] = 0;
  out[2] = 0;
  out[3] = 1;
  return out;
}
function setAxisAngle(out, axis, rad) {
  rad = rad * 0.5;
  var s = Math.sin(rad);
  out[0] = s * axis[0];
  out[1] = s * axis[1];
  out[2] = s * axis[2];
  out[3] = Math.cos(rad);
  return out;
}
function getAxisAngle(out_axis, q) {
  var rad = Math.acos(q[3]) * 2;
  var s = Math.sin(rad / 2);
  if (s > EPSILON) {
    out_axis[0] = q[0] / s;
    out_axis[1] = q[1] / s;
    out_axis[2] = q[2] / s;
  } else {
    out_axis[0] = 1;
    out_axis[1] = 0;
    out_axis[2] = 0;
  }
  return rad;
}
function getAngle(a, b) {
  var dotproduct = dot3(a, b);
  return Math.acos(2 * dotproduct * dotproduct - 1);
}
function multiply3(out, a, b) {
  var ax = a[0], ay = a[1], az = a[2], aw = a[3];
  var bx = b[0], by = b[1], bz = b[2], bw = b[3];
  out[0] = ax * bw + aw * bx + ay * bz - az * by;
  out[1] = ay * bw + aw * by + az * bx - ax * bz;
  out[2] = az * bw + aw * bz + ax * by - ay * bx;
  out[3] = aw * bw - ax * bx - ay * by - az * bz;
  return out;
}
function rotateX3(out, a, rad) {
  rad *= 0.5;
  var ax = a[0], ay = a[1], az = a[2], aw = a[3];
  var bx = Math.sin(rad), bw = Math.cos(rad);
  out[0] = ax * bw + aw * bx;
  out[1] = ay * bw + az * bx;
  out[2] = az * bw - ay * bx;
  out[3] = aw * bw - ax * bx;
  return out;
}
function rotateY3(out, a, rad) {
  rad *= 0.5;
  var ax = a[0], ay = a[1], az = a[2], aw = a[3];
  var by = Math.sin(rad), bw = Math.cos(rad);
  out[0] = ax * bw - az * by;
  out[1] = ay * bw + aw * by;
  out[2] = az * bw + ax * by;
  out[3] = aw * bw - ay * by;
  return out;
}
function rotateZ3(out, a, rad) {
  rad *= 0.5;
  var ax = a[0], ay = a[1], az = a[2], aw = a[3];
  var bz = Math.sin(rad), bw = Math.cos(rad);
  out[0] = ax * bw + ay * bz;
  out[1] = ay * bw - ax * bz;
  out[2] = az * bw + aw * bz;
  out[3] = aw * bw - az * bz;
  return out;
}
function calculateW(out, a) {
  var x = a[0], y = a[1], z = a[2];
  out[0] = x;
  out[1] = y;
  out[2] = z;
  out[3] = Math.sqrt(Math.abs(1 - x * x - y * y - z * z));
  return out;
}
function exp(out, a) {
  var x = a[0], y = a[1], z = a[2], w = a[3];
  var r = Math.sqrt(x * x + y * y + z * z);
  var et = Math.exp(w);
  var s = r > 0 ? et * Math.sin(r) / r : 0;
  out[0] = x * s;
  out[1] = y * s;
  out[2] = z * s;
  out[3] = et * Math.cos(r);
  return out;
}
function ln(out, a) {
  var x = a[0], y = a[1], z = a[2], w = a[3];
  var r = Math.sqrt(x * x + y * y + z * z);
  var t = r > 0 ? Math.atan2(r, w) / r : 0;
  out[0] = x * t;
  out[1] = y * t;
  out[2] = z * t;
  out[3] = 0.5 * Math.log(x * x + y * y + z * z + w * w);
  return out;
}
function pow(out, a, b) {
  ln(out, a);
  scale4(out, out, b);
  exp(out, out);
  return out;
}
function slerp(out, a, b, t) {
  var ax = a[0], ay = a[1], az = a[2], aw = a[3];
  var bx = b[0], by = b[1], bz = b[2], bw = b[3];
  var omega, cosom, sinom, scale0, scale1;
  cosom = ax * bx + ay * by + az * bz + aw * bw;
  if (cosom < 0) {
    cosom = -cosom;
    bx = -bx;
    by = -by;
    bz = -bz;
    bw = -bw;
  }
  if (1 - cosom > EPSILON) {
    omega = Math.acos(cosom);
    sinom = Math.sin(omega);
    scale0 = Math.sin((1 - t) * omega) / sinom;
    scale1 = Math.sin(t * omega) / sinom;
  } else {
    scale0 = 1 - t;
    scale1 = t;
  }
  out[0] = scale0 * ax + scale1 * bx;
  out[1] = scale0 * ay + scale1 * by;
  out[2] = scale0 * az + scale1 * bz;
  out[3] = scale0 * aw + scale1 * bw;
  return out;
}
function random2(out) {
  var u1 = RANDOM();
  var u2 = RANDOM();
  var u3 = RANDOM();
  var sqrt1MinusU1 = Math.sqrt(1 - u1);
  var sqrtU1 = Math.sqrt(u1);
  out[0] = sqrt1MinusU1 * Math.sin(2 * Math.PI * u2);
  out[1] = sqrt1MinusU1 * Math.cos(2 * Math.PI * u2);
  out[2] = sqrtU1 * Math.sin(2 * Math.PI * u3);
  out[3] = sqrtU1 * Math.cos(2 * Math.PI * u3);
  return out;
}
function invert2(out, a) {
  var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3];
  var dot5 = a0 * a0 + a1 * a1 + a2 * a2 + a3 * a3;
  var invDot = dot5 ? 1 / dot5 : 0;
  out[0] = -a0 * invDot;
  out[1] = -a1 * invDot;
  out[2] = -a2 * invDot;
  out[3] = a3 * invDot;
  return out;
}
function conjugate(out, a) {
  out[0] = -a[0];
  out[1] = -a[1];
  out[2] = -a[2];
  out[3] = a[3];
  return out;
}
function fromMat3(out, m) {
  var fTrace = m[0] + m[4] + m[8];
  var fRoot;
  if (fTrace > 0) {
    fRoot = Math.sqrt(fTrace + 1);
    out[3] = 0.5 * fRoot;
    fRoot = 0.5 / fRoot;
    out[0] = (m[5] - m[7]) * fRoot;
    out[1] = (m[6] - m[2]) * fRoot;
    out[2] = (m[1] - m[3]) * fRoot;
  } else {
    var i = 0;
    if (m[4] > m[0])
      i = 1;
    if (m[8] > m[i * 3 + i])
      i = 2;
    var j = (i + 1) % 3;
    var k = (i + 2) % 3;
    fRoot = Math.sqrt(m[i * 3 + i] - m[j * 3 + j] - m[k * 3 + k] + 1);
    out[i] = 0.5 * fRoot;
    fRoot = 0.5 / fRoot;
    out[3] = (m[j * 3 + k] - m[k * 3 + j]) * fRoot;
    out[j] = (m[j * 3 + i] + m[i * 3 + j]) * fRoot;
    out[k] = (m[k * 3 + i] + m[i * 3 + k]) * fRoot;
  }
  return out;
}
function fromEuler(out, x, y, z) {
  var halfToRad = 0.5 * Math.PI / 180;
  x *= halfToRad;
  y *= halfToRad;
  z *= halfToRad;
  var sx = Math.sin(x);
  var cx = Math.cos(x);
  var sy = Math.sin(y);
  var cy = Math.cos(y);
  var sz = Math.sin(z);
  var cz = Math.cos(z);
  out[0] = sx * cy * cz - cx * sy * sz;
  out[1] = cx * sy * cz + sx * cy * sz;
  out[2] = cx * cy * sz - sx * sy * cz;
  out[3] = cx * cy * cz + sx * sy * sz;
  return out;
}
function str3(a) {
  return "quat(" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ")";
}
var clone4 = clone3;
var fromValues4 = fromValues3;
var copy4 = copy3;
var set4 = set3;
var add4 = add3;
var mul3 = multiply3;
var scale4 = scale3;
var dot3 = dot2;
var lerp3 = lerp2;
var length3 = length2;
var len2 = length3;
var squaredLength3 = squaredLength2;
var sqrLen2 = squaredLength3;
var normalize3 = normalize2;
var exactEquals4 = exactEquals3;
var equals4 = equals3;
var rotationTo = function() {
  var tmpvec3 = create3();
  var xUnitVec3 = fromValues2(1, 0, 0);
  var yUnitVec3 = fromValues2(0, 1, 0);
  return function(out, a, b) {
    var dot5 = dot(a, b);
    if (dot5 < -0.999999) {
      cross(tmpvec3, xUnitVec3, a);
      if (len(tmpvec3) < 1e-6)
        cross(tmpvec3, yUnitVec3, a);
      normalize(tmpvec3, tmpvec3);
      setAxisAngle(out, tmpvec3, Math.PI);
      return out;
    } else if (dot5 > 0.999999) {
      out[0] = 0;
      out[1] = 0;
      out[2] = 0;
      out[3] = 1;
      return out;
    } else {
      cross(tmpvec3, a, b);
      out[0] = tmpvec3[0];
      out[1] = tmpvec3[1];
      out[2] = tmpvec3[2];
      out[3] = 1 + dot5;
      return normalize3(out, out);
    }
  };
}();
var sqlerp = function() {
  var temp1 = create5();
  var temp2 = create5();
  return function(out, a, b, c, d, t) {
    slerp(temp1, a, d, t);
    slerp(temp2, b, c, t);
    slerp(out, temp1, temp2, 2 * t * (1 - t));
    return out;
  };
}();
var setAxes = function() {
  var matr = create();
  return function(out, view, right, up) {
    matr[0] = right[0];
    matr[3] = right[1];
    matr[6] = right[2];
    matr[1] = up[0];
    matr[4] = up[1];
    matr[7] = up[2];
    matr[2] = -view[0];
    matr[5] = -view[1];
    matr[8] = -view[2];
    return normalize3(out, fromMat3(out, matr));
  };
}();

// node_modules/gl-matrix/esm/vec2.js
var vec2_exports = {};
__export(vec2_exports, {
  add: () => add5,
  angle: () => angle2,
  ceil: () => ceil2,
  clone: () => clone5,
  copy: () => copy5,
  create: () => create6,
  cross: () => cross2,
  dist: () => dist2,
  distance: () => distance2,
  div: () => div2,
  divide: () => divide2,
  dot: () => dot4,
  equals: () => equals5,
  exactEquals: () => exactEquals5,
  floor: () => floor2,
  forEach: () => forEach3,
  fromValues: () => fromValues5,
  inverse: () => inverse2,
  len: () => len3,
  length: () => length4,
  lerp: () => lerp4,
  max: () => max2,
  min: () => min2,
  mul: () => mul4,
  multiply: () => multiply4,
  negate: () => negate2,
  normalize: () => normalize4,
  random: () => random3,
  rotate: () => rotate2,
  round: () => round2,
  scale: () => scale5,
  scaleAndAdd: () => scaleAndAdd2,
  set: () => set5,
  sqrDist: () => sqrDist2,
  sqrLen: () => sqrLen3,
  squaredDistance: () => squaredDistance2,
  squaredLength: () => squaredLength4,
  str: () => str4,
  sub: () => sub3,
  subtract: () => subtract3,
  transformMat2: () => transformMat2,
  transformMat2d: () => transformMat2d,
  transformMat3: () => transformMat32,
  transformMat4: () => transformMat42,
  zero: () => zero2
});
function create6() {
  var out = new ARRAY_TYPE(2);
  if (ARRAY_TYPE != Float32Array) {
    out[0] = 0;
    out[1] = 0;
  }
  return out;
}
function clone5(a) {
  var out = new ARRAY_TYPE(2);
  out[0] = a[0];
  out[1] = a[1];
  return out;
}
function fromValues5(x, y) {
  var out = new ARRAY_TYPE(2);
  out[0] = x;
  out[1] = y;
  return out;
}
function copy5(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  return out;
}
function set5(out, x, y) {
  out[0] = x;
  out[1] = y;
  return out;
}
function add5(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  return out;
}
function subtract3(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  return out;
}
function multiply4(out, a, b) {
  out[0] = a[0] * b[0];
  out[1] = a[1] * b[1];
  return out;
}
function divide2(out, a, b) {
  out[0] = a[0] / b[0];
  out[1] = a[1] / b[1];
  return out;
}
function ceil2(out, a) {
  out[0] = Math.ceil(a[0]);
  out[1] = Math.ceil(a[1]);
  return out;
}
function floor2(out, a) {
  out[0] = Math.floor(a[0]);
  out[1] = Math.floor(a[1]);
  return out;
}
function min2(out, a, b) {
  out[0] = Math.min(a[0], b[0]);
  out[1] = Math.min(a[1], b[1]);
  return out;
}
function max2(out, a, b) {
  out[0] = Math.max(a[0], b[0]);
  out[1] = Math.max(a[1], b[1]);
  return out;
}
function round2(out, a) {
  out[0] = Math.round(a[0]);
  out[1] = Math.round(a[1]);
  return out;
}
function scale5(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  return out;
}
function scaleAndAdd2(out, a, b, scale6) {
  out[0] = a[0] + b[0] * scale6;
  out[1] = a[1] + b[1] * scale6;
  return out;
}
function distance2(a, b) {
  var x = b[0] - a[0], y = b[1] - a[1];
  return Math.hypot(x, y);
}
function squaredDistance2(a, b) {
  var x = b[0] - a[0], y = b[1] - a[1];
  return x * x + y * y;
}
function length4(a) {
  var x = a[0], y = a[1];
  return Math.hypot(x, y);
}
function squaredLength4(a) {
  var x = a[0], y = a[1];
  return x * x + y * y;
}
function negate2(out, a) {
  out[0] = -a[0];
  out[1] = -a[1];
  return out;
}
function inverse2(out, a) {
  out[0] = 1 / a[0];
  out[1] = 1 / a[1];
  return out;
}
function normalize4(out, a) {
  var x = a[0], y = a[1];
  var len4 = x * x + y * y;
  if (len4 > 0) {
    len4 = 1 / Math.sqrt(len4);
  }
  out[0] = a[0] * len4;
  out[1] = a[1] * len4;
  return out;
}
function dot4(a, b) {
  return a[0] * b[0] + a[1] * b[1];
}
function cross2(out, a, b) {
  var z = a[0] * b[1] - a[1] * b[0];
  out[0] = out[1] = 0;
  out[2] = z;
  return out;
}
function lerp4(out, a, b, t) {
  var ax = a[0], ay = a[1];
  out[0] = ax + t * (b[0] - ax);
  out[1] = ay + t * (b[1] - ay);
  return out;
}
function random3(out, scale6) {
  scale6 = scale6 || 1;
  var r = RANDOM() * 2 * Math.PI;
  out[0] = Math.cos(r) * scale6;
  out[1] = Math.sin(r) * scale6;
  return out;
}
function transformMat2(out, a, m) {
  var x = a[0], y = a[1];
  out[0] = m[0] * x + m[2] * y;
  out[1] = m[1] * x + m[3] * y;
  return out;
}
function transformMat2d(out, a, m) {
  var x = a[0], y = a[1];
  out[0] = m[0] * x + m[2] * y + m[4];
  out[1] = m[1] * x + m[3] * y + m[5];
  return out;
}
function transformMat32(out, a, m) {
  var x = a[0], y = a[1];
  out[0] = m[0] * x + m[3] * y + m[6];
  out[1] = m[1] * x + m[4] * y + m[7];
  return out;
}
function transformMat42(out, a, m) {
  var x = a[0];
  var y = a[1];
  out[0] = m[0] * x + m[4] * y + m[12];
  out[1] = m[1] * x + m[5] * y + m[13];
  return out;
}
function rotate2(out, a, b, rad) {
  var p0 = a[0] - b[0], p1 = a[1] - b[1], sinC = Math.sin(rad), cosC = Math.cos(rad);
  out[0] = p0 * cosC - p1 * sinC + b[0];
  out[1] = p0 * sinC + p1 * cosC + b[1];
  return out;
}
function angle2(a, b) {
  var x1 = a[0], y1 = a[1], x2 = b[0], y2 = b[1], mag = Math.sqrt(x1 * x1 + y1 * y1) * Math.sqrt(x2 * x2 + y2 * y2), cosine = mag && (x1 * x2 + y1 * y2) / mag;
  return Math.acos(Math.min(Math.max(cosine, -1), 1));
}
function zero2(out) {
  out[0] = 0;
  out[1] = 0;
  return out;
}
function str4(a) {
  return "vec2(" + a[0] + ", " + a[1] + ")";
}
function exactEquals5(a, b) {
  return a[0] === b[0] && a[1] === b[1];
}
function equals5(a, b) {
  var a0 = a[0], a1 = a[1];
  var b0 = b[0], b1 = b[1];
  return Math.abs(a0 - b0) <= EPSILON * Math.max(1, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= EPSILON * Math.max(1, Math.abs(a1), Math.abs(b1));
}
var len3 = length4;
var sub3 = subtract3;
var mul4 = multiply4;
var div2 = divide2;
var dist2 = distance2;
var sqrDist2 = squaredDistance2;
var sqrLen3 = squaredLength4;
var forEach3 = function() {
  var vec = create6();
  return function(a, stride, offset, count, fn, arg) {
    var i, l;
    if (!stride) {
      stride = 2;
    }
    if (!offset) {
      offset = 0;
    }
    if (count) {
      l = Math.min(count * stride + offset, a.length);
    } else {
      l = a.length;
    }
    for (i = offset; i < l; i += stride) {
      vec[0] = a[i];
      vec[1] = a[i + 1];
      fn(vec, vec, arg);
      a[i] = vec[0];
      a[i + 1] = vec[1];
    }
    return a;
  };
}();

// node_modules/@cfcs/core/dist/cfcs.esm.js
var CFCS_DETECTED_DEPENDENCIES_VERSION = 1;
var CFCS_DETECTED_DEPENDENCIES = "__CFCS_DETECTED_DEPENDENCIES__";
var extendStatics = function(d, b) {
  extendStatics = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function(d2, b2) {
    d2.__proto__ = b2;
  } || function(d2, b2) {
    for (var p in b2)
      if (Object.prototype.hasOwnProperty.call(b2, p))
        d2[p] = b2[p];
  };
  return extendStatics(d, b);
};
function __extends(d, b) {
  if (typeof b !== "function" && b !== null)
    throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
  extendStatics(d, b);
  function __() {
    this.constructor = d;
  }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
function getDetectedStack() {
  Object[CFCS_DETECTED_DEPENDENCIES] = Object[CFCS_DETECTED_DEPENDENCIES] || {};
  var versionList = Object[CFCS_DETECTED_DEPENDENCIES];
  versionList[CFCS_DETECTED_DEPENDENCIES_VERSION] = versionList[CFCS_DETECTED_DEPENDENCIES_VERSION] || [];
  return versionList[CFCS_DETECTED_DEPENDENCIES_VERSION];
}
function getCurrentDetected() {
  var stack = getDetectedStack();
  return stack[stack.length - 1];
}
function detectDependencies(host) {
  var stack = getDetectedStack();
  var observers = [];
  var detected = {
    host,
    observers,
    push: function(observer) {
      if (host !== observer && observers.indexOf(observer) === -1) {
        observers.push(observer);
      }
    }
  };
  stack.push(detected);
  return detected;
}
function endDetectDependencies() {
  var stack = getDetectedStack();
  return stack.pop();
}
var Observer = function() {
  function Observer2(value) {
    this._emitter = new component_esm_default();
    this._current = value;
  }
  var __proto = Observer2.prototype;
  Object.defineProperty(__proto, "current", {
    /**
     * return the current value.
     */
    get: function() {
      var currentDetected = getCurrentDetected();
      currentDetected === null || currentDetected === void 0 ? void 0 : currentDetected.push(this);
      return this._current;
    },
    set: function(value) {
      this._setCurrent(value);
    },
    enumerable: false,
    configurable: true
  });
  __proto.subscribe = function(callback) {
    this.current;
    this._emitter.on("update", callback);
    return this;
  };
  __proto.unsubscribe = function(callback) {
    this._emitter.off("update", callback);
    return this;
  };
  __proto._setCurrent = function(value) {
    var prevValue = this._current;
    var isUpdate = value !== prevValue;
    this._current = value;
    if (isUpdate) {
      this._emitter.trigger("update", value, prevValue);
    }
  };
  __proto.toString = function() {
    return "".concat(this.current);
  };
  __proto.valueOf = function() {
    return this.current;
  };
  return Observer2;
}();
var ComputedObserver = function(_super) {
  __extends(ComputedObserver2, _super);
  function ComputedObserver2(_computedCallback) {
    var _this = _super.call(this) || this;
    _this._computedCallback = _computedCallback;
    _this._registered = [];
    _this._onCheckUpdate = function() {
      _this._setCurrent(_this.current);
    };
    _this._current = _this.current;
    return _this;
  }
  var __proto = ComputedObserver2.prototype;
  Object.defineProperty(__proto, "current", {
    get: function() {
      var _this = this;
      detectDependencies(this);
      var value = this._computedCallback();
      var results = endDetectDependencies();
      this._registered.forEach(function(observer) {
        observer.unsubscribe(_this._onCheckUpdate);
      });
      results.observers.forEach(function(observer) {
        observer.subscribe(_this._onCheckUpdate);
      });
      this._registered = results.observers;
      return value;
    },
    enumerable: false,
    configurable: true
  });
  return ComputedObserver2;
}(Observer);

// node_modules/@egjs/imready/dist/imready.esm.js
var extendStatics2 = function(d, b) {
  extendStatics2 = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function(d2, b2) {
    d2.__proto__ = b2;
  } || function(d2, b2) {
    for (var p in b2)
      if (Object.prototype.hasOwnProperty.call(b2, p))
        d2[p] = b2[p];
  };
  return extendStatics2(d, b);
};
function __extends2(d, b) {
  if (typeof b !== "function" && b !== null)
    throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
  extendStatics2(d, b);
  function __() {
    this.constructor = d;
  }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var __assign = function() {
  __assign = Object.assign || function __assign2(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
function __spreadArrays() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++)
    s += arguments[i].length;
  for (var r = Array(s), k = 0, i = 0; i < il; i++)
    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
      r[k] = a[j];
  return r;
}
var isWindow = typeof window !== "undefined";
var ua = isWindow ? window.navigator.userAgent : "";
var SUPPORT_COMPUTEDSTYLE = isWindow ? !!("getComputedStyle" in window) : false;
var IS_IE = /MSIE|Trident|Windows Phone|Edge/.test(ua);
var SUPPORT_ADDEVENTLISTENER = isWindow ? !!("addEventListener" in document) : false;
var WIDTH = "width";
var HEIGHT = "height";
function getAttribute(el, name) {
  return el.getAttribute(name) || "";
}
function toArray(arr) {
  return [].slice.call(arr);
}
function hasSizeAttribute(target, prefix) {
  if (prefix === void 0) {
    prefix = "data-";
  }
  return !!target.getAttribute(prefix + "width");
}
function hasLoadingAttribute(target, prefix) {
  if (prefix === void 0) {
    prefix = "data-";
  }
  return "loading" in target && target.getAttribute("loading") === "lazy" || !!target.getAttribute(prefix + "lazy");
}
function hasSkipAttribute(target, prefix) {
  if (prefix === void 0) {
    prefix = "data-";
  }
  return !!target.getAttribute(prefix + "skip");
}
function addEvent(element, type, handler) {
  if (SUPPORT_ADDEVENTLISTENER) {
    element.addEventListener(type, handler, false);
  } else if (element.attachEvent) {
    element.attachEvent("on" + type, handler);
  } else {
    element["on" + type] = handler;
  }
}
function removeEvent(element, type, handler) {
  if (element.removeEventListener) {
    element.removeEventListener(type, handler, false);
  } else if (element.detachEvent) {
    element.detachEvent("on" + type, handler);
  } else {
    element["on" + type] = null;
  }
}
function innerWidth(el) {
  return getSize(el, "Width");
}
function innerHeight(el) {
  return getSize(el, "Height");
}
function getStyles(el) {
  return (SUPPORT_COMPUTEDSTYLE ? window.getComputedStyle(el) : el.currentStyle) || {};
}
function getSize(el, name) {
  var size = el["client" + name] || el["offset" + name];
  return parseFloat(size || getStyles(el)[name.toLowerCase()]) || 0;
}
function getContentElements(element, tags, prefix) {
  var skipElements = toArray(element.querySelectorAll(__spreadArrays(["[" + prefix + "skip] [" + prefix + "width]"], tags.map(function(tag) {
    return ["[" + prefix + "skip] " + tag, tag + "[" + prefix + "skip]", "[" + prefix + "width] " + tag].join(", ");
  })).join(", ")));
  return toArray(element.querySelectorAll("[" + prefix + "width], " + tags.join(", "))).filter(function(el) {
    return skipElements.indexOf(el) === -1;
  });
}
var elements = [];
function addAutoSizer(element, prefix) {
  !elements.length && addEvent(window, "resize", resizeAllAutoSizers);
  element.__PREFIX__ = prefix;
  elements.push(element);
  resize(element);
}
function removeAutoSizer(element, prefix) {
  var index = elements.indexOf(element);
  if (index < 0) {
    return;
  }
  var fixed = getAttribute(element, prefix + "fixed");
  delete element.__PREFIX__;
  element.style[fixed === HEIGHT ? WIDTH : HEIGHT] = "";
  elements.splice(index, 1);
  !elements.length && removeEvent(window, "resize", resizeAllAutoSizers);
}
function resize(element, prefix) {
  if (prefix === void 0) {
    prefix = "data-";
  }
  var elementPrefix = element.__PREFIX__ || prefix;
  var dataWidth = parseInt(getAttribute(element, "" + elementPrefix + WIDTH), 10) || 0;
  var dataHeight = parseInt(getAttribute(element, "" + elementPrefix + HEIGHT), 10) || 0;
  var fixed = getAttribute(element, elementPrefix + "fixed");
  if (fixed === HEIGHT) {
    var size = innerHeight(element) || dataHeight;
    element.style[WIDTH] = dataWidth / dataHeight * size + "px";
  } else {
    var size = innerWidth(element) || dataWidth;
    element.style[HEIGHT] = dataHeight / dataWidth * size + "px";
  }
}
function resizeAllAutoSizers() {
  elements.forEach(function(element) {
    resize(element);
  });
}
var Loader = function(_super) {
  __extends2(Loader2, _super);
  function Loader2(element, options) {
    if (options === void 0) {
      options = {};
    }
    var _this = _super.call(this) || this;
    _this.isReady = false;
    _this.isPreReady = false;
    _this.hasDataSize = false;
    _this.hasLoading = false;
    _this.isSkip = false;
    _this.onCheck = function(e) {
      _this.clear();
      if (e && e.type === "error") {
        _this.onError(_this.element);
      }
      if (_this.hasLoading && _this.checkElement()) {
        return;
      }
      var withPreReady = !_this.hasDataSize && !_this.hasLoading;
      _this.onReady(withPreReady);
    };
    _this.options = __assign({
      prefix: "data-"
    }, options);
    _this.element = element;
    var prefix = _this.options.prefix;
    _this.hasDataSize = hasSizeAttribute(element, prefix);
    _this.isSkip = hasSkipAttribute(element, prefix);
    _this.hasLoading = hasLoadingAttribute(element, prefix);
    return _this;
  }
  var __proto = Loader2.prototype;
  __proto.check = function() {
    if (this.isSkip || !this.checkElement()) {
      this.onAlreadyReady(true);
      return false;
    }
    if (this.hasDataSize) {
      addAutoSizer(this.element, this.options.prefix);
    }
    if (this.hasDataSize || this.hasLoading) {
      this.onAlreadyPreReady();
    }
    return true;
  };
  __proto.addEvents = function() {
    var _this = this;
    var element = this.element;
    this.constructor.EVENTS.forEach(function(name) {
      addEvent(element, name, _this.onCheck);
    });
  };
  __proto.clear = function() {
    var _this = this;
    var element = this.element;
    this.constructor.EVENTS.forEach(function(name) {
      removeEvent(element, name, _this.onCheck);
    });
    this.removeAutoSizer();
  };
  __proto.destroy = function() {
    this.clear();
    this.off();
  };
  __proto.removeAutoSizer = function() {
    if (this.hasDataSize) {
      var prefix = this.options.prefix;
      removeAutoSizer(this.element, prefix);
    }
  };
  __proto.onError = function(target) {
    this.trigger("error", {
      element: this.element,
      target
    });
  };
  __proto.onPreReady = function() {
    if (this.isPreReady) {
      return;
    }
    this.isPreReady = true;
    this.trigger("preReady", {
      element: this.element,
      hasLoading: this.hasLoading,
      isSkip: this.isSkip
    });
  };
  __proto.onReady = function(withPreReady) {
    if (this.isReady) {
      return;
    }
    withPreReady = !this.isPreReady && withPreReady;
    if (withPreReady) {
      this.isPreReady = true;
    }
    this.removeAutoSizer();
    this.isReady = true;
    this.trigger("ready", {
      element: this.element,
      withPreReady,
      hasLoading: this.hasLoading,
      isSkip: this.isSkip
    });
  };
  __proto.onAlreadyError = function(target) {
    var _this = this;
    setTimeout(function() {
      _this.onError(target);
    });
  };
  __proto.onAlreadyPreReady = function() {
    var _this = this;
    setTimeout(function() {
      _this.onPreReady();
    });
  };
  __proto.onAlreadyReady = function(withPreReady) {
    var _this = this;
    setTimeout(function() {
      _this.onReady(withPreReady);
    });
  };
  Loader2.EVENTS = [];
  return Loader2;
}(component_esm_default);
var ElementLoader = function(_super) {
  __extends2(ElementLoader2, _super);
  function ElementLoader2() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  var __proto = ElementLoader2.prototype;
  __proto.setHasLoading = function(hasLoading) {
    this.hasLoading = hasLoading;
  };
  __proto.check = function() {
    if (this.isSkip) {
      this.onAlreadyReady(true);
      return false;
    }
    if (this.hasDataSize) {
      addAutoSizer(this.element, this.options.prefix);
      this.onAlreadyPreReady();
    } else {
      this.trigger("requestChildren");
    }
    return true;
  };
  __proto.checkElement = function() {
    return true;
  };
  __proto.destroy = function() {
    this.clear();
    this.trigger("requestDestroy");
    this.off();
  };
  __proto.onAlreadyPreReady = function() {
    _super.prototype.onAlreadyPreReady.call(this);
    this.trigger("reqeustReadyChildren");
  };
  ElementLoader2.EVENTS = [];
  return ElementLoader2;
}(Loader);
var ImReadyManager = function(_super) {
  __extends2(ImReadyManager2, _super);
  function ImReadyManager2(options) {
    if (options === void 0) {
      options = {};
    }
    var _this = _super.call(this) || this;
    _this.readyCount = 0;
    _this.preReadyCount = 0;
    _this.totalCount = 0;
    _this.totalErrorCount = 0;
    _this.isPreReadyOver = true;
    _this.elementInfos = [];
    _this.options = __assign({
      loaders: {},
      prefix: "data-"
    }, options);
    return _this;
  }
  var __proto = ImReadyManager2.prototype;
  __proto.check = function(elements2) {
    var _this = this;
    var prefix = this.options.prefix;
    this.clear();
    this.elementInfos = toArray(elements2).map(function(element, index) {
      var loader = _this.getLoader(element, {
        prefix
      });
      loader.check();
      loader.on("error", function(e) {
        _this.onError(index, e.target);
      }).on("preReady", function(e) {
        var info = _this.elementInfos[index];
        info.hasLoading = e.hasLoading;
        info.isSkip = e.isSkip;
        var isPreReady = _this.checkPreReady(index);
        _this.onPreReadyElement(index);
        isPreReady && _this.onPreReady();
      }).on("ready", function(_a2) {
        var withPreReady = _a2.withPreReady, hasLoading = _a2.hasLoading, isSkip = _a2.isSkip;
        var info = _this.elementInfos[index];
        info.hasLoading = hasLoading;
        info.isSkip = isSkip;
        var isPreReady = withPreReady && _this.checkPreReady(index);
        var isReady = _this.checkReady(index);
        withPreReady && _this.onPreReadyElement(index);
        _this.onReadyElement(index);
        isPreReady && _this.onPreReady();
        isReady && _this.onReady();
      });
      return {
        loader,
        element,
        hasLoading: false,
        hasError: false,
        isPreReady: false,
        isReady: false,
        isSkip: false
      };
    });
    var length5 = this.elementInfos.length;
    this.totalCount = length5;
    if (!length5) {
      setTimeout(function() {
        _this.onPreReady();
        _this.onReady();
      });
    }
    return this;
  };
  __proto.getTotalCount = function() {
    return this.totalCount;
  };
  __proto.isPreReady = function() {
    return this.elementInfos.every(function(info) {
      return info.isPreReady;
    });
  };
  __proto.isReady = function() {
    return this.elementInfos.every(function(info) {
      return info.isReady;
    });
  };
  __proto.hasError = function() {
    return this.totalErrorCount > 0;
  };
  __proto.clear = function() {
    this.isPreReadyOver = false;
    this.totalCount = 0;
    this.preReadyCount = 0;
    this.readyCount = 0;
    this.totalErrorCount = 0;
    this.elementInfos.forEach(function(info) {
      if (info.loader) {
        info.loader.destroy();
      }
    });
    this.elementInfos = [];
  };
  __proto.destroy = function() {
    this.clear();
    this.off();
  };
  __proto.getLoader = function(element, options) {
    var _this = this;
    var tagName = element.tagName.toLowerCase();
    var loaders = this.options.loaders;
    var prefix = options.prefix;
    var tags = Object.keys(loaders);
    if (loaders[tagName]) {
      return new loaders[tagName](element, options);
    }
    var loader = new ElementLoader(element, options);
    var children = toArray(element.querySelectorAll(tags.join(", ")));
    loader.setHasLoading(children.some(function(el) {
      return hasLoadingAttribute(el, prefix);
    }));
    var withPreReady = false;
    var childrenImReady = this.clone().on("error", function(e) {
      loader.onError(e.target);
    }).on("ready", function() {
      loader.onReady(withPreReady);
    });
    loader.on("requestChildren", function() {
      var contentElements = getContentElements(element, tags, _this.options.prefix);
      childrenImReady.check(contentElements).on("preReady", function(e) {
        withPreReady = e.isReady;
        if (!withPreReady) {
          loader.onPreReady();
        }
      });
    }).on("reqeustReadyChildren", function() {
      childrenImReady.check(children);
    }).on("requestDestroy", function() {
      childrenImReady.destroy();
    });
    return loader;
  };
  __proto.clone = function() {
    return new ImReadyManager2(__assign({}, this.options));
  };
  __proto.checkPreReady = function(index) {
    this.elementInfos[index].isPreReady = true;
    ++this.preReadyCount;
    if (this.preReadyCount < this.totalCount) {
      return false;
    }
    return true;
  };
  __proto.checkReady = function(index) {
    this.elementInfos[index].isReady = true;
    ++this.readyCount;
    if (this.readyCount < this.totalCount) {
      return false;
    }
    return true;
  };
  __proto.onError = function(index, target) {
    var info = this.elementInfos[index];
    info.hasError = true;
    this.trigger(new ComponentEvent$1("error", {
      element: info.element,
      index,
      target,
      errorCount: this.getErrorCount(),
      totalErrorCount: ++this.totalErrorCount
    }));
  };
  __proto.onPreReadyElement = function(index) {
    var info = this.elementInfos[index];
    this.trigger(new ComponentEvent$1("preReadyElement", {
      element: info.element,
      index,
      preReadyCount: this.preReadyCount,
      readyCount: this.readyCount,
      totalCount: this.totalCount,
      isPreReady: this.isPreReady(),
      isReady: this.isReady(),
      hasLoading: info.hasLoading,
      isSkip: info.isSkip
    }));
  };
  __proto.onPreReady = function() {
    this.isPreReadyOver = true;
    this.trigger(new ComponentEvent$1("preReady", {
      readyCount: this.readyCount,
      totalCount: this.totalCount,
      isReady: this.isReady(),
      hasLoading: this.hasLoading()
    }));
  };
  __proto.onReadyElement = function(index) {
    var info = this.elementInfos[index];
    this.trigger(new ComponentEvent$1("readyElement", {
      index,
      element: info.element,
      hasError: info.hasError,
      errorCount: this.getErrorCount(),
      totalErrorCount: this.totalErrorCount,
      preReadyCount: this.preReadyCount,
      readyCount: this.readyCount,
      totalCount: this.totalCount,
      isPreReady: this.isPreReady(),
      isReady: this.isReady(),
      hasLoading: info.hasLoading,
      isPreReadyOver: this.isPreReadyOver,
      isSkip: info.isSkip
    }));
  };
  __proto.onReady = function() {
    this.trigger(new ComponentEvent$1("ready", {
      errorCount: this.getErrorCount(),
      totalErrorCount: this.totalErrorCount,
      totalCount: this.totalCount
    }));
  };
  __proto.getErrorCount = function() {
    return this.elementInfos.filter(function(info) {
      return info.hasError;
    }).length;
  };
  __proto.hasLoading = function() {
    return this.elementInfos.some(function(info) {
      return info.hasLoading;
    });
  };
  return ImReadyManager2;
}(component_esm_default);
var ImageLoader = function(_super) {
  __extends2(ImageLoader2, _super);
  function ImageLoader2() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  var __proto = ImageLoader2.prototype;
  __proto.checkElement = function() {
    var element = this.element;
    var src = element.getAttribute("src");
    if (element.complete) {
      if (src) {
        if (!element.naturalWidth) {
          this.onAlreadyError(element);
        }
        return false;
      } else {
        this.onAlreadyPreReady();
      }
    }
    this.addEvents();
    IS_IE && element.setAttribute("src", src);
    return true;
  };
  ImageLoader2.EVENTS = ["load", "error"];
  return ImageLoader2;
}(Loader);
var VideoLoader = function(_super) {
  __extends2(VideoLoader2, _super);
  function VideoLoader2() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  var __proto = VideoLoader2.prototype;
  __proto.checkElement = function() {
    var element = this.element;
    if (element.readyState >= 1) {
      return false;
    }
    if (element.error) {
      this.onAlreadyError(element);
      return false;
    }
    this.addEvents();
    return true;
  };
  VideoLoader2.EVENTS = ["loadedmetadata", "error"];
  return VideoLoader2;
}(Loader);
var ImReady = function(_super) {
  __extends2(ImReady2, _super);
  function ImReady2(options) {
    if (options === void 0) {
      options = {};
    }
    return _super.call(this, __assign({
      loaders: {
        img: ImageLoader,
        video: VideoLoader
      }
    }, options)) || this;
  }
  return ImReady2;
}(ImReadyManager);
var imready_esm_default = ImReady;

// node_modules/@egjs/view360/dist/view360.esm.js
function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}
var View360Error = class _View360Error extends Error {
  /**
   * Create new instance of View360Error
   * @ko View360Error의 인스턴스를 생성합니다.
   * @param message - Error message {@ko 에러 메시지}
   * @param code - Error code {@ko 에러 코드}
   */
  constructor(message, code) {
    super(message);
    Object.setPrototypeOf(this, _View360Error.prototype);
    this.name = "View360Error";
    this.code = code;
  }
};
var ERROR_CODES = {
  /**
   * The given value's type is not expected
   * @ko 주어진 값의 타입이 잘못되었을 경우
   * @since 4.0.0
   */
  WRONG_TYPE: 0,
  /**
   * The given value is not a supported option
   * @ko 잘못된 옵션을 받았을 경우
   * @since 4.0.0
   */
  WRONG_OPTION: 1,
  /**
   * The element with given CSS selector does not exist
   * @ko 주어진 CSS 셀렉터로 엘리먼트를 찾지 못했을 경우
   * @since 4.0.0
   */
  ELEMENT_NOT_FOUND: 2,
  /**
   * Couldn't find canvas element inside the given container element.
   * @ko 컨테이너 엘리먼트 내부에서 캔버스 엘리먼트를 찾지 못했을 경우
   * @since 4.0.0
   */
  CANVAS_NOT_FOUND: 3,
  /**
   * The browser does not support WebGL
   * @ko 브라우저가 WebGL을 지원하지 않는 경우
   * @since 4.0.0
   */
  WEBGL_NOT_SUPPORTED: 4,
  /**
   * Failed creating canvas 2D context
   * @ko 캔버스 2D 컨텍스트를 생성하지 못한 경우
   * @since 4.0.0
   */
  FAILED_CREATE_CONTEXT_2D: 5,
  /**
   * `init()` is called before setting {@link View360Options#projection}
   * @ko {@link View360Options#projection}을 설정하기 전에 `init()`이 호출된 경우
   * @since 4.0.0
   */
  PROVIDE_PROJECTION_FIRST: 6,
  /**
   * Failed linking WebGL program. Only can be thrown when {@link View360Options#debug} is `true`.
   * @ko WebGL 프로그램 링크에 실패한 경우. {@link View360Options#debug}를 `true`로 설정한 경우에만 발생할 수 있습니다.
   * @since 4.0.0
   */
  FAILED_LINKING_PROGRAM: 7,
  /**
   * Arguments are not sufficient for the given property.
   * @ko 프로퍼티에 값이 충분히 주어지지 않았을 때
   * @since 4.0.0
   */
  INSUFFICIENT_ARGS: 8
};
var MESSAGES = {
  WRONG_TYPE: (val, types) => `${typeof val} is not a ${types.map((type) => `"${type}"`).join(" or ")}.`,
  WRONG_OPTION: (val, optionName) => `Bad option: given "${val}" for option "${optionName}".`,
  ELEMENT_NOT_FOUND: (query) => `Element with selector "${query}" not found.`,
  CANVAS_NOT_FOUND: "The canvas element was not found inside the given root element.",
  WEBGL_NOT_SUPPORTED: "WebGL is not supported on this browser.",
  FAILED_CREATE_CONTEXT_2D: "Failed to create canvas 2D context",
  PROVIDE_PROJECTION_FIRST: '"projection" should be provided before initialization.',
  FAILED_LINKING_PROGRAM: (msg, shaderLog) => `Failed linking WebGL program - "${msg}
Shader compile Log: ${shaderLog}`,
  INSUFFICIENT_ARGS: (val, name) => `Insufficient arguments: given "${val}" for "${name}".`
};
var ERROR = {
  CODES: ERROR_CODES,
  MESSAGES
};
var EVENTS$1 = {
  MOUSE_DOWN: "mousedown",
  MOUSE_MOVE: "mousemove",
  MOUSE_UP: "mouseup",
  TOUCH_START: "touchstart",
  TOUCH_MOVE: "touchmove",
  TOUCH_END: "touchend",
  WHEEL: "wheel",
  RESIZE: "resize",
  CONTEXT_MENU: "contextmenu",
  MOUSE_ENTER: "mouseenter",
  MOUSE_LEAVE: "mouseleave",
  POINTER_DOWN: "pointerdown",
  POINTER_MOVE: "pointermove",
  POINTER_UP: "pointerup",
  POINTER_CANCEL: "pointercancel",
  POINTER_ENTER: "pointerenter",
  POINTER_LEAVE: "pointerleave",
  KEY_DOWN: "keydown",
  KEY_UP: "keyup",
  LOAD: "load",
  ERROR: "error",
  CLICK: "click",
  DOUBLE_CLICK: "dblclick",
  CONTEXT_CREATE_ERROR: "webglcontextcreationerror",
  CONTEXT_LOST: "webglcontextlost",
  CONTEXT_RESTORED: "webglcontextrestored",
  DEVICE_ORIENTATION: "deviceorientation",
  DEVICE_MOTION: "devicemotion",
  ORIENTATION_CHANGE: "orientationchange",
  VIDEO_PLAY: "play",
  VIDEO_PAUSE: "pause",
  VIDEO_LOADED_DATA: "loadeddata",
  VIDEO_VOLUME_CHANGE: "volumechange",
  VIDEO_TIME_UPDATE: "timeupdate",
  VIDEO_DURATION_CHANGE: "durationchange",
  VIDEO_CAN_PLAYTHROUGH: "canplaythrough",
  TRANSITION_END: "transitionend",
  XR_END: "end"
};
var EL_DIV = "div";
var EL_BUTTON = "button";
var MOUSE_BUTTON;
(function(MOUSE_BUTTON2) {
  MOUSE_BUTTON2[MOUSE_BUTTON2["LEFT"] = 0] = "LEFT";
  MOUSE_BUTTON2[MOUSE_BUTTON2["MIDDLE"] = 1] = "MIDDLE";
  MOUSE_BUTTON2[MOUSE_BUTTON2["RIGHT"] = 2] = "RIGHT";
})(MOUSE_BUTTON || (MOUSE_BUTTON = {}));
var CURSOR = {
  GRAB: "grab",
  GRABBING: "grabbing",
  NONE: ""
};
var KEY_DIRECTION = ["LEFT", "UP", "RIGHT", "DOWN"];
var DIRECTION_KEY_CODE;
(function(DIRECTION_KEY_CODE2) {
  DIRECTION_KEY_CODE2[DIRECTION_KEY_CODE2["LEFT"] = 37] = "LEFT";
  DIRECTION_KEY_CODE2[DIRECTION_KEY_CODE2["UP"] = 38] = "UP";
  DIRECTION_KEY_CODE2[DIRECTION_KEY_CODE2["RIGHT"] = 39] = "RIGHT";
  DIRECTION_KEY_CODE2[DIRECTION_KEY_CODE2["DOWN"] = 40] = "DOWN";
})(DIRECTION_KEY_CODE || (DIRECTION_KEY_CODE = {}));
var SPACE_KEY_CODE = 32;
var DIRECTION_KEY_NAME = {
  LEFT: "ArrowLeft",
  UP: "ArrowUp",
  RIGHT: "ArrowRight",
  DOWN: "ArrowDown"
};
var SPACE_KEY_NAME = " ";
var FULLSCREEN_REQUEST = ["requestFullscreen", "webkitRequestFullscreen", "webkitRequestFullScreen", "webkitCancelFullScreen", "mozRequestFullScreen", "msRequestFullscreen"];
var FULLSCREEN_ELEMENT = ["fullscreenElement", "webkitFullscreenElement", "webkitCurrentFullScreenElement", "mozFullScreenElement", "msFullscreenElement"];
var FULLSCREEN_EXIT = ["exitFullscreen", "webkitExitFullscreen", "webkitCancelFullScreen", "mozCancelFullScreen", "msExitFullscreen"];
var FULLSCREEN_CHANGE = ["fullscreenchange", "webkitfullscreenchange", "mozfullscreenchange", "MSFullscreenChange"];
var DEFAULT_CLASS = {
  CONTAINER: "view360-container",
  CANVAS: "view360-canvas",
  CTX_LOST: "view360-ctx-lost",
  IN_VR: "view360-vr-presenting",
  HOTSPOT_CONTAINER: "view360-hotspots",
  HOTSPOT: "view360-hotspot",
  HOTSPOT_VISIBLE: "view360-hotspot-visible",
  HOTSPOT_FLIP_X: "view360-hotspot-flip-x",
  HOTSPOT_FLIP_Y: "view360-hotspot-flip-y"
};
var EVENTS = {
  READY: "ready",
  LOAD_START: "loadStart",
  LOAD: "load",
  PROJECTION_CHANGE: "projectionChange",
  RESIZE: "resize",
  BEFORE_RENDER: "beforeRender",
  RENDER: "render",
  INPUT_START: "inputStart",
  INPUT_END: "inputEnd",
  VIEW_CHANGE: "viewChange",
  STATIC_CLICK: "staticClick",
  VR_START: "vrStart",
  VR_END: "vrEnd"
};
var EASING = {
  LINEAR: (x) => x,
  SINE_WAVE: (x) => Math.sin(x * Math.PI * 2),
  EASE_OUT_CUBIC: (x) => 1 - Math.pow(1 - x, 3),
  EASE_OUT_BOUNCE: (x) => {
    const n1 = 7.5625;
    const d1 = 2.75;
    if (x < 1 / d1) {
      return n1 * x * x;
    } else if (x < 2 / d1) {
      return n1 * (x -= 1.5 / d1) * x + 0.75;
    } else if (x < 2.5 / d1) {
      return n1 * (x -= 2.25 / d1) * x + 0.9375;
    } else {
      return n1 * (x -= 2.625 / d1) * x + 0.984375;
    }
  }
};
var _a;
var CAMERA_EVENTS = {
  CHANGE: "change",
  ANIMATION_END: "animationEnd"
};
var OBJECT_3D_EVENTS = {
  UPDATE: "update"
};
var CONTROL_EVENTS = {
  INPUT_START: "inputStart",
  CHANGE: "change",
  INPUT_END: "inputEnd",
  ENABLE: "enable",
  DISABLE: "disable",
  STATIC_CLICK: "staticClick"
};
var DEG_TO_RAD = Math.PI / 180;
var RAD_TO_DEG = 180 / Math.PI;
var DEFAULT_EASING = EASING.EASE_OUT_CUBIC;
var DEFAULT_ANIMATION_DURATION = 300;
var INFINITE_RANGE = {
  min: -Infinity,
  max: Infinity
};
var DEFAULT_PITCH_RANGE = {
  min: -90,
  max: 90
};
var DEFAULT_ZOOM_RANGE = {
  min: 0.6,
  max: 10
};
var ROTATE;
(function(ROTATE2) {
  ROTATE2[ROTATE2["ZERO"] = 0] = "ZERO";
  ROTATE2[ROTATE2["CW_90"] = 1] = "CW_90";
  ROTATE2[ROTATE2["CCW_90"] = 2] = "CCW_90";
  ROTATE2[ROTATE2["CW_180"] = 3] = "CW_180";
})(ROTATE || (ROTATE = {}));
var VIDEO_TIME_CHANGE_EVENT = "view360videotimechange";
var SVG_NAMESPACE = "http://www.w3.org/2000/svg";
var SESSION_VR = "immersive-vr";
var XR_REFERENCE_SPACE = "local";
var EPSILON2 = (_a = Number.EPSILON) !== null && _a !== void 0 ? _a : 2220446049250313e-31;
var isString2 = (val) => typeof val === "string";
var isElement = (val) => !!val && val.nodeType === Node.ELEMENT_NODE;
var createElement = (className, tag = EL_DIV) => {
  const el = document.createElement(tag);
  el.classList.add(className);
  return el;
};
var getNullableElement = (el, parent) => {
  let targetEl = null;
  if (isString2(el)) {
    const parentEl = parent ? parent : document;
    const queryResult = parentEl.querySelector(el);
    if (!queryResult) {
      return null;
    }
    targetEl = queryResult;
  } else if (isElement(el)) {
    targetEl = el;
  }
  return targetEl;
};
var getElement = (el, parent) => {
  const targetEl = getNullableElement(el, parent);
  if (!targetEl) {
    if (isString2(el)) {
      throw new View360Error(ERROR.MESSAGES.ELEMENT_NOT_FOUND(el), ERROR.CODES.ELEMENT_NOT_FOUND);
    } else {
      throw new View360Error(ERROR.MESSAGES.WRONG_TYPE(el, ["HTMLElement", "string"]), ERROR.CODES.WRONG_TYPE);
    }
  }
  return targetEl;
};
var findCanvas = (root, selector) => {
  const canvas = root.querySelector(selector);
  if (!canvas) {
    throw new View360Error(ERROR.MESSAGES.CANVAS_NOT_FOUND, ERROR.CODES.CANVAS_NOT_FOUND);
  }
  return canvas;
};
var range = (end) => {
  if (!end || end <= 0) {
    return [];
  }
  return Array.apply(0, Array(end)).map((undef, idx) => idx);
};
var clamp = (x, min3, max3) => Math.max(Math.min(x, max3), min3);
var lerp5 = (a, b, t) => {
  return a * (1 - t) + b * t;
};
var circulate = (val, min3, max3) => {
  const size = Math.abs(max3 - min3);
  if (val < min3) {
    const offset = (min3 - val) % size;
    val = max3 - offset;
  } else if (val > max3) {
    const offset = (val - max3) % size;
    val = min3 + offset;
  }
  return val;
};
var findIndex = (array, checker) => {
  for (let idx = 0; idx < array.length; idx++) {
    if (checker(array[idx])) {
      return idx;
    }
  }
  return -1;
};
var getObjectOption = (val) => typeof val === "object" ? val : {};
var toVerticalFov = (fovRadian, aspect) => {
  return Math.atan(Math.tan(fovRadian * 0.5) / aspect) * 2;
};
var reorderCube = (arr, order, defaultOrder = "RLUDFB") => {
  return defaultOrder.split("").map((face) => order.indexOf(face)).map((index) => arr[index]);
};
var isFullscreen = () => {
  if (!document)
    return false;
  for (const key of FULLSCREEN_ELEMENT) {
    if (document[key])
      return true;
  }
  return false;
};
var sensorCanBeEnabledIOS = () => {
  return window.isSecureContext && !!DeviceMotionEvent && "requestPermission" in DeviceMotionEvent;
};
var hfovToZoom = (baseFov, fov) => {
  const renderingWidth = Math.tan(DEG_TO_RAD * baseFov * 0.5);
  const zoomedWidth = Math.tan(DEG_TO_RAD * fov * 0.5);
  return renderingWidth / zoomedWidth;
};
var eulerToQuat = (out, yaw, pitch, roll) => {
  quat_exports.identity(out);
  const pitchThreshold = 0.01;
  const pitchClamped = clamp(pitch, -90 + pitchThreshold, 90 - pitchThreshold);
  quat_exports.rotateY(out, out, yaw * DEG_TO_RAD);
  quat_exports.rotateX(out, out, pitchClamped * DEG_TO_RAD);
  quat_exports.rotateZ(out, out, roll * DEG_TO_RAD);
  return out;
};
var quatToEuler = (quaternion) => {
  const x = quaternion[0];
  const y = quaternion[1];
  const z = quaternion[2];
  const w = quaternion[3];
  const x2 = x * x;
  const y2 = y * y;
  const z2 = z * z;
  const w2 = w * w;
  const unit = x2 + y2 + z2 + w2;
  const test = x * w - y * z;
  let pitch, yaw;
  if (test > 0.499995 * unit) {
    pitch = Math.PI / 2;
    yaw = 2 * Math.atan2(y, x);
  } else if (test < -0.499995 * unit) {
    pitch = -Math.PI / 2;
    yaw = -2 * Math.atan2(y, x);
  } else {
    const view = vec3_exports.fromValues(0, 0, 1);
    const up = vec3_exports.fromValues(0, 1, 0);
    vec3_exports.transformQuat(view, view, quaternion);
    vec3_exports.transformQuat(up, up, quaternion);
    const viewXZ = Math.sqrt(view[0] * view[0] + view[2] * view[2]);
    pitch = Math.atan2(-view[1], viewXZ);
    yaw = Math.atan2(view[0], view[2]);
  }
  return {
    pitch: clamp(pitch * RAD_TO_DEG, -90, 90),
    yaw: circulate(yaw * RAD_TO_DEG, 0, 360)
  };
};
var Motion = class {
  /**
   * Current interpolated value
   * @ko 현재 보간된 값
   * @since 4.0.0
   */
  get val() {
    return this._val;
  }
  /**
   * Start(from) value of interpolation
   * @ko 보간 시작 값
   * @since 4.0.0
   */
  get start() {
    return this._start;
  }
  /**
   * End(to) value of interpolation
   * @ko 보간 끝 값
   * @since 4.0.0
   */
  get end() {
    return this._end;
  }
  /**
   * Interpolation progress value (0 ~ 1)
   * @ko 현재 보간 진행정도 (0 ~ 1)
   * @since 4.0.0
   */
  get progress() {
    return this._progress;
  }
  /**
   * Whether the interpolation is in active state.
   * @ko 보간 진행중인지 여부. `true`일 경우 보간이 진행중입니다.
   * @since 4.0.0
   */
  get activated() {
    return this._activated;
  }
  /**
   * Duration of the interpolation
   * @ko 보간할 시간
   * @since 4.0.0
   */
  get duration() {
    return this._duration;
  }
  set duration(val) {
    this._duration = val;
  }
  /**
   * Whether to loop interpolation on finish
   * @ko 보간이 끝난 이후에 다시 시작할지 여부
   * @since 4.0.0
   */
  get loop() {
    return this._loop;
  }
  set loop(val) {
    this._loop = val;
  }
  /**
   * Range of the interpolation
   * @ko 보간 범위
   * @since 4.0.0
   */
  get range() {
    return this._range;
  }
  /**
   * Easing function of the interpolation
   * @ko 보간에 사용되는 easing function
   * @since 4.0.0
   */
  get easing() {
    return this._easing;
  }
  set easing(val) {
    this._easing = val;
  }
  /**
   * Create new instance.
   * @ko 새로운 인스턴스를 생성합니다.
   * @param options Options {@ko 옵션들}
   * @param options.duration Duration of the interpolation {@ko 보간할 시간}
   * @param options.loop Whether to loop interpolation on finish {@ko 보간이 끝난 이후에 다시 시작할지 여부}
   * @param options.range Range of the interpolation {@ko 보간 범위}
   * @param options.loop Easing function of the interpolation {@ko 보간에 사용되는 easing function}
   */
  constructor({
    duration = DEFAULT_ANIMATION_DURATION,
    loop = false,
    range: range2 = {
      min: 0,
      max: 1
    },
    easing = DEFAULT_EASING
  } = {}) {
    this._duration = duration;
    this._loop = loop;
    this._range = range2;
    this._easing = easing;
    this._activated = false;
    this.reset(0);
  }
  /**
   * Update motion and progress it by given deltaTime
   * @ko 주어진 deltaTime만큼 보간을 진행합니다.
   * @param deltaTime - number of milisec to update motion {@ko 보간을 진행할 시간, 밀리초 단위}
   * @returns Difference(delta) of the value from the last update. {@ko 지난 업데이트 이후의 값 변화량}
   * @since 4.0.0
   */
  update(deltaTime) {
    if (!this._activated) {
      this._val = this._end;
      return 0;
    }
    const start = this._start;
    const end = this._end;
    const duration = this._duration;
    const prev = this._val;
    const loop = this._loop;
    const nextProgress = this._progress + deltaTime / duration;
    this._progress = loop ? circulate(nextProgress, 0, 1) : clamp(nextProgress, 0, 1);
    const easedProgress = this._easing(this._progress);
    this._val = lerp5(start, end, easedProgress);
    if (!loop && this._progress >= 1) {
      this._activated = false;
    }
    return this._val - prev;
  }
  /**
   * Set `start`, `end` to the given value and set `progress` to 0.
   * @ko 주어진 값으로 시작 지점, 끝 지점을 초기화하고 progress를 0으로 세팅합니다.
   * @param defaultVal - Value to reset {@ko 초기화할 값}
   * @since 4.0.0
   */
  reset(defaultVal) {
    const range2 = this._range;
    const val = clamp(defaultVal, range2.min, range2.max);
    this._start = val;
    this._end = val;
    this._val = val;
    this._progress = 0;
    this._activated = false;
  }
  /**
   * Add delta to start & end and current value.
   * @ko 현재 & 끝 및 현재 값에 주어진 값을 더합니다.
   * @param delta - Delta value to add {@ko 추가할 값}
   */
  add(delta) {
    const range2 = this._range;
    this._start = clamp(this._start + delta, range2.min, range2.max);
    this._end = clamp(this._end + delta, range2.min, range2.max);
    this._val = clamp(this._val + delta, range2.min, range2.max);
  }
  /**
   * Set current value to start, and end to current value + delta, then reset progress to 0.
   * @ko 현재 값을 시작 지점으로, 그에서 delta만큼 추가된 값을 끝점으로 하고 progress를 0으로 갱신합니다.
   * @param delta - Delta value to add {@ko 추가할 값}
   */
  setNewEndByDelta(delta) {
    const range2 = this._range;
    this._start = this._val;
    this._end = clamp(this._end + delta, range2.min, range2.max);
    this._progress = 0;
    this._activated = true;
  }
  /**
   * Set new range of the interpolation.
   * @ko 보간의 범위를 변경합니다.
   * @param min - New minimum range {@ko 변경할 범위의 최소값}
   * @param max - New maximum range {@ko 변경할 범위의 최대값}
   */
  setRange(min3, max3) {
    this._start = clamp(this._start, min3, max3);
    this._end = clamp(this._end, min3, max3);
    this._range = {
      min: min3,
      max: max3
    };
  }
};
var CameraAnimation = class {
  /**
   * Duration of the animation
   * @ko 애니메이션 재생시간
   * @since 4.0.0
   */
  get duration() {
    return this._motion.duration;
  }
  set duration(val) {
    this._motion.duration = val;
  }
  /**
   * Easing function of the animation
   * @ko 애니메이션의 easing function
   * @since 4.0.0
   */
  get easing() {
    return this._motion.easing;
  }
  set easing(val) {
    this._motion.easing = val;
  }
  /**
   * Create new instance
   * @ko 새로운 인스턴스를 생성합니다.
   * @param camera - Camera to animate {@ko 애니메이션을 적용할 카메라}
   * @param from - Start pose {@ko 애니메이션이 시작 시점의 카메라의 회전 및 줌}
   * @param to - End pose {@ko 애니메이션이 끝났을 때 카메라의 회전 및 줌}
   * @param options - Options {@ko 옵션들}
   * @param options.duration - Animation duration {@ko 애니메이션 재생 시간}
   * @param options.easing - Animation easing function {@ko 애니메이션 easing function}
   */
  constructor(camera, from, to, {
    duration = DEFAULT_ANIMATION_DURATION,
    easing = DEFAULT_EASING
  } = {}) {
    this._camera = camera;
    this._motion = new Motion({
      duration,
      easing,
      range: {
        min: 0,
        max: 1
      }
    });
    this._from = from;
    this._to = to;
    this._finishPromise = new Promise((resolve) => {
      this._finish = resolve;
    });
    this._motion.setNewEndByDelta(1);
  }
  /**
   * Return a promise that resolved on animation end.
   * @ko 애니메이션 재생이 끝났을 때 resolve되는 Promise를 반환합니다.
   * @since 4.0.0
   */
  getFinishPromise() {
    return this._finishPromise;
  }
  /**
   * Update animation by given deltaTime.
   * @ko 주어진 시간만큼 애니메이션을 업데이트합니다.
   * @param deltaTime Number of milisec to update {@ko 업데이트할 시간, 밀리초 단위}
   * @since 4.0.0
   */
  update(deltaTime) {
    const camera = this._camera;
    const from = this._from;
    const to = this._to;
    const motion = this._motion;
    motion.update(deltaTime);
    const progress = motion.val;
    const rotation = quat_exports.create();
    const zoom = lerp5(from.zoom, to.zoom, progress);
    quat_exports.slerp(rotation, from.rotation, to.rotation, progress);
    camera.rotate(rotation, zoom);
    if (progress >= 1) {
      this._finish();
    }
  }
};
var Camera = class extends component_esm_default {
  /**
   * Camera's width / height ratio
   * @ko 카메라의 가로 / 세로 비율
   * @readonly
   */
  get aspect() {
    return this._aspect;
  }
  /**
   * Whether the camera's rotation changed from the last frame.
   * @ko 마지막 프레임 이후로 카메라의 회전값이 변경되었는지 나타내는 플래그.
   * @readonly
   */
  get changed() {
    return this._changed;
  }
  /**
   * @copy View360#yawRange
   */
  get yawRange() {
    return this._initialYawRange;
  }
  set yawRange(val) {
    this._initialYawRange = val;
  }
  /**
   * @copy View360#pitchRange
   */
  get pitchRange() {
    return this._initialPitchRange;
  }
  set pitchRange(val) {
    this._initialPitchRange = val;
  }
  /**
   * @copy View360#zoomRange
   */
  get zoomRange() {
    return this._initialZoomRange;
  }
  set zoomRange(val) {
    this._initialZoomRange = val;
  }
  /**
   * Create new instance of Camera
   * @param options - Camera options {@ko 카메라 옵션들}
   */
  constructor({
    initialYaw,
    initialPitch,
    initialZoom,
    yawRange,
    pitchRange,
    zoomRange,
    fov
  }) {
    super();
    this.yaw = initialYaw;
    this.pitch = initialPitch;
    this.zoom = initialZoom;
    this.rollOffset = 0;
    this.initialYaw = initialYaw;
    this.initialPitch = initialPitch;
    this.initialZoom = initialZoom;
    this.position = vec3_exports.create();
    this.animation = null;
    this._up = vec3_exports.fromValues(0, 1, 0);
    this._aspect = 1;
    this._initialYawRange = yawRange;
    this._initialPitchRange = pitchRange;
    this._initialZoomRange = zoomRange;
    this._yawRange = yawRange;
    this._pitchRange = pitchRange;
    this._zoomRange = zoomRange;
    this.quaternion = quat_exports.create();
    this._updateQuaternion();
    this.viewMatrix = mat4_exports.create();
    this.projectionMatrix = mat4_exports.create();
    this.fov = fov;
    this._maxRenderHeight = -1;
  }
  /**
   * Destroy instance and detach all event listeners
   * @ko 인스턴스를 삭제하고 모든 이벤트 리스너를 삭제합니다.
   * @since 4.0.0
   */
  destroy() {
    this.off();
  }
  /**
   * Refresh internal size value.
   * @ko 내부 크기값을 갱신합니다.
   * @param width - New width {@ko 변경된 너비값}
   * @param height - New height {@ko 변경된 높이값}
   * @since 4.0.0
   */
  resize(width, height) {
    const prevAspect = this._aspect;
    this._aspect = width / height;
    if (this._aspect !== prevAspect) {
      this.updateMatrix();
    }
  }
  /**
   * Change camera's rotation with euler values.
   * @ko 카메라 회전을 오일러 각 방향으로 변경합니다.
   * @param rotation - Rotation values {@ko 회전 값}
   * @param rotation.yaw - yaw(y-axis rotation) to look at {@ko 바라볼 yaw(y축 회전) 값}
   * @param rotation.pitch - pitch(x-axis rotation) to look at {@ko 바라볼 pitch(x축 회전) 값}
   * @param rotation.zoom - zoom value to apply {@ko 적용할 카메라 줌 값}
   * @since 4.0.0
   */
  lookAt({
    yaw = this.yaw,
    pitch = this.pitch,
    zoom = this.zoom
  }) {
    const prevQuaternion = quat_exports.clone(this.quaternion);
    const prevZoom = this.zoom;
    this.yaw = circulate(yaw, 0, 360);
    this.pitch = clamp(pitch, -90, 90);
    this.zoom = zoom;
    this._updateQuaternion();
    const zoomDiff = Math.abs(zoom - prevZoom);
    if (!quat_exports.equals(this.quaternion, prevQuaternion) || zoomDiff >= EPSILON2 * 10) {
      this.updateMatrix();
    }
  }
  /**
   * Change camera's rotation with quaternion.
   * @ko 카메라 회전을 Quaternion을 이용해서 변경합니다.
   * @param rotation - Quaternion to apply {@ko 적용할 Quaternion}
   * @param zoom - zoom value to apply {@ko 적용할 카메라 줌 값}
   * @since 4.0.0
   */
  rotate(rotation, zoom = this.zoom) {
    const normalized = quat_exports.normalize(quat_exports.create(), rotation);
    const isSameRotation = quat_exports.equals(this.quaternion, normalized);
    quat_exports.copy(this.quaternion, normalized);
    const prevZoom = this.zoom;
    const {
      yaw,
      pitch
    } = quatToEuler(normalized);
    this.yaw = yaw;
    this.pitch = pitch;
    this.zoom = zoom;
    const zoomDiff = Math.abs(zoom - prevZoom);
    if (!isSameRotation || zoomDiff >= EPSILON2 * 10) {
      this.updateMatrix();
    }
  }
  /**
   * Change camera's rotation to given euler values by the given duration.
   * @ko 카메라를 주어진 방향으로 주어진 시간동안 서서히 이동시킵니다.
   * @param options - Animation parameters {@ko 애니메이션 패러미터}
   * @param options.yaw - yaw(y-axis rotation) to look at {@ko 바라볼 yaw(y축 회전) 값}
   * @param options.pitch - pitch(x-axis rotation) to look at {@ko 바라볼 pitch(x축 회전) 값}
   * @param options.zoom - zoom value to apply {@ko 적용할 카메라 줌 값}
   * @param options.duration - Duration of the animation {@ko 애니메이션 시간}
   * @param options.easing - Easing function for the animation {@ko 애니메이션에 적용할 easing function}
   */
  animateTo({
    yaw = this.yaw,
    pitch = this.pitch,
    zoom = this.zoom,
    duration = 0,
    easing = DEFAULT_EASING
  } = {}) {
    return __awaiter(this, void 0, void 0, function* () {
      if (this.yaw === yaw && this.pitch === pitch && this.zoom === zoom)
        return;
      const from = {
        rotation: quat_exports.clone(this.quaternion),
        zoom: this.zoom
      };
      const to = {
        rotation: eulerToQuat(quat_exports.create(), yaw, pitch, this.rollOffset),
        zoom
      };
      const animation = new CameraAnimation(this, from, to, {
        duration,
        easing
      });
      const finishPromise = animation.getFinishPromise();
      this.animation = animation;
      finishPromise.then(() => {
        this.animation = null;
        this.trigger(CAMERA_EVENTS.ANIMATION_END, {
          animation
        });
      });
      return finishPromise;
    });
  }
  /**
   * @hidden
   */
  restrictYawRange(min3, max3) {
    this._yawRange = {
      min: min3,
      max: max3
    };
  }
  /**
   * @hidden
   */
  restrictPitchRange(min3, max3) {
    this._pitchRange = {
      min: min3,
      max: max3
    };
  }
  /**
   * @hidden
   */
  restrictZoomRange(min3, max3) {
    this._zoomRange = {
      min: min3,
      max: max3
    };
  }
  /**
   * @hidden
   */
  restrictRenderHeight(height) {
    this._maxRenderHeight = height;
  }
  /**
   * @hidden
   */
  resetRange() {
    this._yawRange = this._initialYawRange;
    this._pitchRange = this._initialPitchRange;
    this._zoomRange = this._initialZoomRange;
    this._maxRenderHeight = -1;
  }
  /**
   * Get actual yaw range by the given zoom value.
   * @ko 주어진 zoom 값에 대한 실제 yaw 범위값을 반환합니다.
   * @since 4.0.0
   */
  getYawRange(zoom) {
    const yawLimit = this._yawRange;
    const maxRenderHeight = this._maxRenderHeight;
    if (!yawLimit)
      return INFINITE_RANGE;
    const halfHFov = this.getHorizontalFov(zoom) * 0.5;
    let minYaw = yawLimit.min;
    let maxYaw = yawLimit.max;
    if (maxRenderHeight > 0) {
      const halfVFovRad = toVerticalFov(halfHFov * DEG_TO_RAD, this._aspect);
      const h = maxRenderHeight * 0.5;
      const t = Math.tan(halfVFovRad);
      const d = Math.sqrt((1 + h * h) / (1 + t * t));
      const theta = Math.atan(Math.tan(halfHFov * DEG_TO_RAD) * d) * RAD_TO_DEG;
      minYaw = yawLimit.min + theta;
      maxYaw = yawLimit.max - theta;
    }
    if (minYaw > maxYaw) {
      minYaw = 0;
      maxYaw = 0;
    }
    return {
      min: minYaw,
      max: maxYaw
    };
  }
  /**
   * Get actual pitch range by the given zoom value.
   * @ko 주어진 zoom 값에 대한 실제 pitch 범위값을 반환합니다.
   * @since 4.0.0
   */
  getPitchRange(zoom) {
    const pitchLimit = this._pitchRange;
    const maxRenderHeight = this._maxRenderHeight;
    if (!pitchLimit)
      return DEFAULT_PITCH_RANGE;
    let minPitch = pitchLimit.min;
    let maxPitch = pitchLimit.max;
    if (maxRenderHeight > 0) {
      const halfVFov = this.getVerticalFov(zoom) * 0.5;
      minPitch = pitchLimit.min + halfVFov;
      maxPitch = pitchLimit.max - halfVFov;
    }
    if (minPitch > maxPitch) {
      minPitch = 0;
      maxPitch = 0;
    }
    return {
      min: Math.max(minPitch, -90),
      max: Math.min(maxPitch, 90)
    };
  }
  /**
   * Get actual zoom range in fov degrees.
   * @ko 실제 줌 범위를 fov각의 범위로 반환합니다.
   * @since 4.0.0
   */
  getZoomRange() {
    var _a2;
    const limit = (_a2 = this._zoomRange) !== null && _a2 !== void 0 ? _a2 : DEFAULT_ZOOM_RANGE;
    const minFov = this.getHorizontalFov(limit.max);
    const maxFov = this.getHorizontalFov(limit.min);
    const currentFov = this.getHorizontalFov(this.zoom);
    return {
      min: Math.max(minFov, 1),
      max: Math.min(maxFov, 180),
      current: currentFov
    };
  }
  /**
   * Return horizontal fov value when the given zoom is applied. (in degrees, °)
   * @ko 주어진 zoom 값이 적용되었을 때의 수평 fov값을 반환합니다. (도 단위, °)
   * @returns Zoomed horizontal FOV {@ko 줌이 적용된 수평 fov값}
   * @since 4.0.0
   */
  getHorizontalFov(zoom = this.zoom) {
    return this._getZoomedHorizontalFov(zoom) * RAD_TO_DEG;
  }
  /**
   * Return vertical fov value when the given zoom is applied. (in degrees, °)
   * @ko 주어진 zoom 값이 적용되었을 때의 수직 fov값을 반환합니다. (도 단위, °)
   * @returns Zoomed vertical FOV {@ko 줌이 적용된 수직 fov값}
   * @since 4.0.0
   */
  getVerticalFov(zoom = this.zoom) {
    const aspect = this._aspect;
    const hFov = this._getZoomedHorizontalFov(zoom);
    const vFov = toVerticalFov(hFov, aspect);
    return vFov * RAD_TO_DEG;
  }
  /**
   * Calculate zoom value for the given fov.
   * @ko 주어진 fov값을 zoom값으로 변환합니다.
   * @param fov horizontal fov (in degrees, °) {@ko 수평 fov 값 (도 단위, °)}
   * @since 4.0.0
   */
  fovToZoom(fov) {
    const baseFov = this.fov;
    const renderingWidth = Math.tan(DEG_TO_RAD * baseFov * 0.5);
    const zoomedWidth = Math.tan(DEG_TO_RAD * fov * 0.5);
    return renderingWidth / zoomedWidth;
  }
  /**
   * Update inner matrixes.
   * @ko 내부 행렬들을 업데이트합니다.
   * @internal
   * @since 4.0.0
   */
  updateMatrix() {
    const up = this._up;
    const aspect = this._aspect;
    const viewMatrix = this.viewMatrix;
    const projMatrix = this.projectionMatrix;
    const position = this.position;
    const rotation = this.quaternion;
    const upDir = vec3_exports.create();
    const viewDir = vec3_exports.fromValues(0, 0, -1);
    vec3_exports.transformQuat(viewDir, viewDir, rotation);
    vec3_exports.transformQuat(upDir, up, rotation);
    const hFov = this._getZoomedHorizontalFov();
    const vFov = toVerticalFov(hFov, aspect);
    mat4_exports.lookAt(viewMatrix, position, viewDir, upDir);
    mat4_exports.perspective(projMatrix, vFov, aspect, 0.1, 100);
    this._changed = true;
  }
  /**
   * @hidden
   */
  onFrameRender() {
    this._changed = false;
  }
  _updateQuaternion() {
    eulerToQuat(this.quaternion, this.yaw, this.pitch, this.rollOffset);
  }
  /**
   * @param zoom Current zoom value
   * @returns horizontal fov including zoom, in radian
   */
  _getZoomedHorizontalFov(zoom = this.zoom) {
    return 2 * Math.atan(Math.tan(DEG_TO_RAD * this.fov * 0.5) / zoom);
  }
};
var MouseInput = class extends component_esm_default {
  constructor() {
    super();
    this._onMouseDown = (evt) => {
      const el = this._el;
      if (!el || evt.button !== MOUSE_BUTTON.LEFT)
        return;
      evt.preventDefault();
      if (el.focus) {
        el.focus();
      } else {
        window.focus();
      }
      this._prevPos[0] = evt.clientX;
      this._prevPos[1] = evt.clientY;
      window.addEventListener(EVENTS$1.MOUSE_MOVE, this._onMouseMove, false);
      window.addEventListener(EVENTS$1.MOUSE_UP, this._onMouseUp, false);
      this.trigger(CONTROL_EVENTS.INPUT_START, {
        srcEvent: evt,
        isTouch: false,
        isKeyboard: false
      });
    };
    this._onMouseMove = (evt) => {
      evt.preventDefault();
      const x = evt.clientX;
      const y = evt.clientY;
      const prevPos = this._prevPos;
      const deltaX = x - prevPos[0];
      const deltaY = y - prevPos[1];
      this.trigger(CONTROL_EVENTS.CHANGE, {
        delta: {
          x: deltaX,
          y: deltaY
        },
        isTouch: false,
        isKeyboard: false
      });
      prevPos[0] = x;
      prevPos[1] = y;
    };
    this._onMouseUp = () => {
      this._prevPos[0] = 0;
      this._prevPos[1] = 0;
      window.removeEventListener(EVENTS$1.MOUSE_MOVE, this._onMouseMove, false);
      window.removeEventListener(EVENTS$1.MOUSE_UP, this._onMouseUp, false);
      this.trigger(CONTROL_EVENTS.INPUT_END, {
        isTouch: false,
        isKeyboard: false,
        scrolling: false
      });
    };
    this._el = null;
    this._prevPos = [0, 0];
  }
  enable(element) {
    if (this._el)
      return;
    element.addEventListener(EVENTS$1.MOUSE_DOWN, this._onMouseDown);
    this._el = element;
  }
  disable() {
    const element = this._el;
    if (!element)
      return;
    element.removeEventListener(EVENTS$1.MOUSE_DOWN, this._onMouseDown);
    window.removeEventListener(EVENTS$1.MOUSE_MOVE, this._onMouseMove, false);
    window.removeEventListener(EVENTS$1.MOUSE_UP, this._onMouseUp, false);
    this._el = null;
  }
};
var TouchInput = class extends component_esm_default {
  get scrollable() {
    return this._scrollable;
  }
  set scrollable(val) {
    this._scrollable = val;
  }
  constructor() {
    super();
    this._onTouchStart = (evt) => {
      if (evt.touches.length > 1 || this._scrolling)
        return;
      const touch = evt.touches[0];
      this._isFirstTouch = true;
      this._prevPos[0] = touch.clientX;
      this._prevPos[1] = touch.clientY;
      this.trigger(CONTROL_EVENTS.INPUT_START, {
        srcEvent: evt,
        isTouch: true,
        isKeyboard: false
      });
    };
    this._onTouchMove = (evt) => {
      if (evt.touches.length > 1 || this._scrolling)
        return;
      const touch = evt.touches[0];
      const scrollable = this._scrollable;
      const prevPos = this._prevPos;
      const x = touch.clientX;
      const y = touch.clientY;
      const deltaX = x - prevPos[0];
      const deltaY = y - prevPos[1];
      if (this._isFirstTouch) {
        if (scrollable && !isFullscreen()) {
          if (Math.abs(deltaY) > Math.abs(deltaX)) {
            this._scrolling = true;
            return;
          }
        }
        this._isFirstTouch = false;
      }
      if (evt.cancelable !== false) {
        evt.preventDefault();
      }
      this.trigger(CONTROL_EVENTS.CHANGE, {
        delta: {
          x: deltaX,
          y: deltaY
        },
        isTouch: true,
        isKeyboard: false
      });
      prevPos[0] = x;
      prevPos[1] = y;
    };
    this._onTouchEnd = (evt) => {
      if (evt.touches.length !== 0)
        return;
      const touch = evt.touches[0];
      const prevPos = this._prevPos;
      if (touch) {
        prevPos[0] = touch.clientX;
        prevPos[1] = touch.clientY;
      } else {
        prevPos[0] = 0;
        prevPos[1] = 0;
        this.trigger(CONTROL_EVENTS.INPUT_END, {
          isTouch: true,
          isKeyboard: false,
          scrolling: this._scrolling
        });
      }
      if (evt.cancelable !== false) {
        evt.preventDefault();
      }
      this._scrolling = false;
    };
    this._el = null;
    this._prevPos = [0, 0];
    this._isFirstTouch = false;
    this._scrolling = false;
    this._scrollable = false;
  }
  enable(element) {
    if (this._el)
      return;
    element.addEventListener(EVENTS$1.TOUCH_START, this._onTouchStart, {
      passive: false
    });
    element.addEventListener(EVENTS$1.TOUCH_MOVE, this._onTouchMove, {
      passive: false
    });
    element.addEventListener(EVENTS$1.TOUCH_END, this._onTouchEnd);
    this._el = element;
  }
  disable() {
    const element = this._el;
    if (!element)
      return;
    element.removeEventListener(EVENTS$1.TOUCH_START, this._onTouchStart);
    element.removeEventListener(EVENTS$1.TOUCH_MOVE, this._onTouchMove);
    element.removeEventListener(EVENTS$1.TOUCH_END, this._onTouchEnd);
    this._el = null;
  }
};
var KeyboardInput = class extends component_esm_default {
  get active() {
    const pressed = this._pressed;
    return pressed.LEFT || pressed.UP || pressed.RIGHT || pressed.DOWN;
  }
  constructor() {
    super();
    this._onKeyDown = (evt) => {
      if (evt.location !== KeyboardEvent.DOM_KEY_LOCATION_STANDARD)
        return;
      this._updateKeyPress(evt, true);
      const pressedCount = this._getPressedKeyCount();
      if (pressedCount <= 0)
        return;
      evt.preventDefault();
      if (pressedCount === 1 && !evt.repeat) {
        this.trigger(CONTROL_EVENTS.INPUT_START, {
          srcEvent: evt,
          isTouch: false,
          isKeyboard: true
        });
      }
    };
    this._onKeyUp = (evt) => {
      if (evt.location !== KeyboardEvent.DOM_KEY_LOCATION_STANDARD)
        return;
      this._updateKeyPress(evt, false);
      const pressedCount = this._getPressedKeyCount();
      if (pressedCount > 0)
        return;
      this.trigger(CONTROL_EVENTS.INPUT_END, {
        isTouch: false,
        isKeyboard: true,
        scrolling: false
      });
    };
    this._el = null;
    this._clearPressedKeys();
  }
  enable(element) {
    if (this._el)
      return;
    element.addEventListener(EVENTS$1.KEY_DOWN, this._onKeyDown);
    element.addEventListener(EVENTS$1.KEY_UP, this._onKeyUp);
    this._el = element;
    this._clearPressedKeys();
  }
  disable() {
    const element = this._el;
    if (!element)
      return;
    element.removeEventListener(EVENTS$1.KEY_DOWN, this._onKeyDown);
    element.removeEventListener(EVENTS$1.KEY_UP, this._onKeyUp);
    this._el = null;
    this._clearPressedKeys();
  }
  update() {
    const delta = this._getDeltaByPressedKeys();
    if (delta.x !== 0 || delta.y !== 0) {
      this.trigger(CONTROL_EVENTS.CHANGE, {
        delta,
        isTouch: false,
        isKeyboard: true
      });
    }
  }
  _clearPressedKeys() {
    this._pressed = KEY_DIRECTION.reduce((obj, keyName) => {
      return Object.assign(Object.assign({}, obj), {
        [keyName]: false
      });
    }, {});
  }
  _updateKeyPress(event, isEnable) {
    const pressed = this._pressed;
    const keyToUpdate = event.keyCode != null ? DIRECTION_KEY_CODE[event.keyCode] : DIRECTION_KEY_NAME[event.key];
    if (!keyToUpdate)
      return;
    pressed[keyToUpdate] = isEnable;
  }
  _getPressedKeyCount() {
    return KEY_DIRECTION.filter((key) => this._pressed[key]).length;
  }
  _getDeltaByPressedKeys() {
    const pressed = this._pressed;
    let x = 0;
    let y = 0;
    if (pressed.LEFT) {
      x += 1;
    }
    if (pressed.RIGHT) {
      x -= 1;
    }
    if (pressed.UP) {
      y += 1;
    }
    if (pressed.DOWN) {
      y -= 1;
    }
    return {
      x,
      y
    };
  }
};
var RotateControl = class extends component_esm_default {
  /**
   * @copy CameraControl#enabled
   */
  get enabled() {
    return this._enabled;
  }
  /**
   * @hidden
   */
  get enableBlocked() {
    return this._enableBlocked;
  }
  /**
   * @copy CameraControl#animating
   */
  get animating() {
    return this._keyboardInput.active || this._xMotion.activated || this._yMotion.activated;
  }
  /**
   * Current yaw value
   * @ko 현재 yaw 값
   * @readonly
   * @since 4.0.0
   */
  get yaw() {
    return this._xMotion;
  }
  /**
   * Current pitch value
   * @ko 현재 pitch 값
   * @readonly
   * @since 4.0.0
   */
  get pitch() {
    return this._yMotion;
  }
  /**
   * @copy View360#scrollable
   */
  get scrollable() {
    return this._touchInput.scrollable;
  }
  set scrollable(val) {
    this._touchInput.scrollable = val;
  }
  /**
   * Scale factor for mouse/touch rotation
   * @ko 마우스/터치를 통한 회전 배율
   * @default [1, 1]
   * @since 4.0.0
   */
  get pointerScale() {
    return this._pointerScale;
  }
  set pointerScale(val) {
    this._pointerScale = val;
  }
  /**
   * Scale factor for keyboard rotation
   * @ko 키보드를 통한 회전 배율
   * @default [1, 1]
   * @since 4.0.0
   */
  get keyboardScale() {
    return this._keyboardScale;
  }
  set keyboardScale(val) {
    this._keyboardScale = val;
  }
  /**
   * Duration of the input animation (ms)
   * @ko 회전 애니메이션의 시간 (ms)
   * @default 300
   */
  get duration() {
    return this._duration;
  }
  set duration(val) {
    this._duration = val;
    this._xMotion.duration = val;
    this._yMotion.duration = val;
  }
  /**
   * Easing function of the animation
   * @ko 회전 애니메이션에 적용할 easing 함수
   * @default EASING.EASE_OUT_CUBIC
   * @see EASING
   */
  get easing() {
    return this._easing;
  }
  set easing(val) {
    this._easing = val;
    this._xMotion.easing = val;
    this._yMotion.easing = val;
  }
  /**
   * Disable X-axis(pitch) rotation.
   * @ko x축 회전(pitch)을 비활성화합니다.
   * @default false
   */
  get disablePitch() {
    return this._disablePitch;
  }
  set disablePitch(val) {
    this._disablePitch = val;
  }
  /**
   * Disable Y-axis(yaw) rotation.
   * @ko y축 회전(yaw)을 비활성화합니다.
   * @default false
   */
  get disableYaw() {
    return this._disableYaw;
  }
  set disableYaw(val) {
    this._disableYaw = val;
  }
  /**
   * Disable rotation by keyboard.
   * @ko 키보드를 이용한 회전을 비활성화합니다.
   * @default false
   */
  get disableKeyboard() {
    return this._disableKeyboard;
  }
  set disableKeyboard(val) {
    this._disableKeyboard = val;
  }
  /**
   * Create new RotateControl instance
   * @ko RotateControl의 인스턴스를 생성합니다.
   * @param controlEl - Element to attach handlers {@ko 입력을 받을 엘리먼트}
   * @param enableBlocked - Whether to disable control on init {@ko 초기화 과정에서 컨트롤 활성화 여부}
   * @param options - Options for control {@ko 컨트롤 옵션들}
   */
  constructor(controlEl, enableBlocked, {
    duration = DEFAULT_ANIMATION_DURATION,
    easing = DEFAULT_EASING,
    pointerScale = [1, 1],
    keyboardScale = [1, 1],
    disablePitch = false,
    disableYaw = false,
    disableKeyboard = false
  } = {}) {
    super();
    this._onInputStart = (evt) => {
      this._changedWhileDragging = false;
      this.trigger(CONTROL_EVENTS.INPUT_START, Object.assign(Object.assign({}, evt), {
        inputType: "rotate"
      }));
    };
    this._onChange = (evt) => {
      const delta = evt.delta;
      const invZoomScale = 1 / this._zoomScale;
      const screenScale = this._screenScale;
      const keyboardScale2 = this._keyboardScale;
      const pointerScale2 = this._pointerScale;
      let scale6;
      if (evt.isKeyboard) {
        scale6 = [keyboardScale2[0] * invZoomScale, keyboardScale2[1] * invZoomScale];
      } else {
        scale6 = [pointerScale2[0] * screenScale[0] * invZoomScale, pointerScale2[1] * screenScale[1] * invZoomScale];
      }
      const scaledX = delta.x * scale6[0];
      const scaledY = delta.y * scale6[1];
      this._xMotion.setNewEndByDelta(scaledX);
      this._yMotion.setNewEndByDelta(scaledY);
      this._changedWhileDragging = true;
    };
    this._onInputEnd = (evt) => {
      this.trigger(CONTROL_EVENTS.INPUT_END, Object.assign(Object.assign({}, evt), {
        inputType: "rotate"
      }));
      if (!this._changedWhileDragging && !evt.isKeyboard && !evt.scrolling) {
        this.trigger(CONTROL_EVENTS.STATIC_CLICK, {
          isTouch: evt.isTouch
        });
      }
      this._changedWhileDragging = false;
    };
    this._controlEl = controlEl;
    this._pointerScale = pointerScale;
    this._keyboardScale = keyboardScale;
    this._duration = duration;
    this._easing = easing;
    this._disablePitch = disablePitch;
    this._disableYaw = disableYaw;
    this._disableKeyboard = disableKeyboard;
    this._enableBlocked = enableBlocked;
    this._mouseInput = new MouseInput();
    this._touchInput = new TouchInput();
    this._keyboardInput = new KeyboardInput();
    this._xMotion = new Motion({
      duration,
      range: INFINITE_RANGE,
      easing
    });
    this._yMotion = new Motion({
      duration,
      range: DEFAULT_PITCH_RANGE,
      easing
    });
    this._screenScale = [1, 1];
    this._zoomScale = 1;
    this._enabled = false;
    this._changedWhileDragging = false;
    this._bindInputs();
  }
  destroy() {
    this.disable();
    this._mouseInput.off();
    this._touchInput.off();
    this._keyboardInput.off();
    this.off();
    this._changedWhileDragging = false;
  }
  /**
   * @hidden
   */
  update(delta) {
    if (!this._enabled)
      return;
    const xMotion = this._xMotion;
    const yMotion = this._yMotion;
    const keyboardInput = this._keyboardInput;
    if (!this._disableKeyboard) {
      keyboardInput.update();
    }
    if (!this._disablePitch) {
      yMotion.update(delta);
    }
    if (!this._disableYaw) {
      xMotion.update(delta);
    }
  }
  /**
   * @hidden
   */
  updateRange(camera, zoom) {
    const yawRange = camera.getYawRange(zoom);
    const pitchRange = camera.getPitchRange(zoom);
    this._xMotion.setRange(yawRange.min, yawRange.max);
    this._yMotion.setRange(pitchRange.min, pitchRange.max);
  }
  /**
   * @hidden
   */
  setZoomScale(val) {
    this._zoomScale = val;
  }
  /**
   * Resize control to match target size.
   * @ko 컨트롤의 내부 크기를 갱신합니다.
   * @param hfov - Camera horizontal fov in degrees {@ko 카메라의 수평방향 fov값 (도 단위)}
   * @param aspect - Camera aspect {@ko 카메라 가로/세로 비율}
   * @param width - New width {@ko 갱신된 너비}
   * @param height - New height {@ko 갱신된 높이}
   */
  resize(hfov, aspect, width, height) {
    const vfov = toVerticalFov(hfov * DEG_TO_RAD, aspect) * RAD_TO_DEG;
    this._screenScale[0] = hfov / width;
    this._screenScale[1] = vfov / height;
  }
  enable() {
    if (this._enabled)
      return;
    const element = this._controlEl;
    this._mouseInput.enable(element);
    this._touchInput.enable(element);
    this._keyboardInput.enable(element);
    this._enabled = true;
    this._enableBlocked = false;
    this.trigger(CONTROL_EVENTS.ENABLE, {
      control: this,
      updateCursor: true
    });
  }
  disable() {
    if (!this._enabled)
      return;
    this._mouseInput.disable();
    this._touchInput.disable();
    this._keyboardInput.disable();
    this._enabled = false;
    this.trigger(CONTROL_EVENTS.DISABLE, {
      updateCursor: true
    });
  }
  sync(camera) {
    this.updateRange(camera, camera.zoom);
    this._xMotion.reset(camera.yaw);
    this._yMotion.reset(camera.pitch);
  }
  _bindInputs() {
    const mouseInput = this._mouseInput;
    const touchInput = this._touchInput;
    const keyboardInput = this._keyboardInput;
    mouseInput.on(CONTROL_EVENTS.INPUT_START, this._onInputStart);
    mouseInput.on(CONTROL_EVENTS.CHANGE, this._onChange);
    mouseInput.on(CONTROL_EVENTS.INPUT_END, this._onInputEnd);
    touchInput.on(CONTROL_EVENTS.INPUT_START, this._onInputStart);
    touchInput.on(CONTROL_EVENTS.CHANGE, this._onChange);
    touchInput.on(CONTROL_EVENTS.INPUT_END, this._onInputEnd);
    keyboardInput.on(CONTROL_EVENTS.INPUT_START, this._onInputStart);
    keyboardInput.on(CONTROL_EVENTS.CHANGE, this._onChange);
    keyboardInput.on(CONTROL_EVENTS.INPUT_END, this._onInputEnd);
  }
};
var WheelInput = class extends component_esm_default {
  get scrollable() {
    return this._scrollable;
  }
  set scrollable(val) {
    this._scrollable = val;
  }
  constructor() {
    super();
    this._onWheel = (evt) => {
      const scrollable = this._scrollable;
      if (evt.deltaY === 0 || scrollable)
        return;
      evt.preventDefault();
      evt.stopPropagation();
      if (this._inputTimer < 0) {
        this.trigger(CONTROL_EVENTS.INPUT_START, {
          srcEvent: evt,
          isTouch: false,
          isKeyboard: false
        });
      } else {
        this._clearTimer();
      }
      const delta = this._baseScale * evt.deltaY;
      this.trigger(CONTROL_EVENTS.CHANGE, {
        delta,
        isTouch: false,
        isKeyboard: false
      });
      this._inputTimer = window.setTimeout(() => {
        this.trigger(CONTROL_EVENTS.INPUT_END, {
          isTouch: false,
          isKeyboard: false,
          scrolling: false
        });
        this._inputTimer = -1;
      }, DEFAULT_ANIMATION_DURATION);
    };
    this._el = null;
    this._baseScale = 0.04;
    this._scrollable = false;
    this._inputTimer = -1;
  }
  enable(element) {
    if (this._el)
      return;
    element.addEventListener(EVENTS$1.WHEEL, this._onWheel, {
      passive: false,
      capture: false
    });
    this._el = element;
    this._clearTimer();
  }
  disable() {
    const element = this._el;
    if (!element)
      return;
    element.removeEventListener(EVENTS$1.WHEEL, this._onWheel, false);
    this._el = null;
    this._clearTimer();
  }
  _clearTimer() {
    window.clearTimeout(this._inputTimer);
    this._inputTimer = -1;
  }
};
var PinchInput = class extends component_esm_default {
  constructor() {
    super();
    this._onTouchMove = (evt) => {
      const touches = evt.touches;
      if (touches.length !== 2)
        return;
      if (!evt.cancelable)
        return;
      evt.preventDefault();
      evt.stopPropagation();
      const prevDistance = this._prevDistance;
      const diff = [touches[0].pageX - touches[1].pageX, touches[0].pageY - touches[1].pageY];
      const distance3 = Math.sqrt(diff[0] * diff[0] + diff[1] * diff[1]) * this._baseScale;
      const delta = this._isFirstTouch ? 0 : distance3 - prevDistance;
      if (this._isFirstTouch) {
        this.trigger(CONTROL_EVENTS.INPUT_START, {
          srcEvent: evt,
          isTouch: true,
          isKeyboard: false
        });
      }
      this._prevDistance = distance3;
      this._isFirstTouch = false;
      this.trigger(CONTROL_EVENTS.CHANGE, {
        delta,
        isTouch: true,
        isKeyboard: false
      });
    };
    this._onTouchEnd = (evt) => {
      if (evt.touches.length !== 0)
        return;
      if (!this._isFirstTouch) {
        this.trigger(CONTROL_EVENTS.INPUT_END, {
          isTouch: true,
          isKeyboard: false,
          scrolling: false
        });
      }
      this._prevDistance = -1;
      this._isFirstTouch = true;
    };
    this._el = null;
    this._baseScale = -0.2;
    this._prevDistance = -1;
    this._isFirstTouch = true;
  }
  enable(element) {
    if (this._el)
      return;
    element.addEventListener(EVENTS$1.TOUCH_MOVE, this._onTouchMove, {
      passive: false,
      capture: false
    });
    element.addEventListener(EVENTS$1.TOUCH_END, this._onTouchEnd);
    this._el = element;
    this._prevDistance = -1;
    this._isFirstTouch = true;
  }
  disable() {
    const element = this._el;
    if (!element)
      return;
    element.removeEventListener(EVENTS$1.TOUCH_MOVE, this._onTouchMove, false);
    element.removeEventListener(EVENTS$1.TOUCH_END, this._onTouchEnd);
    this._el = null;
  }
};
var ZoomControl = class extends component_esm_default {
  /**
   * @copy CameraControl#enabled
   */
  get enabled() {
    return this._enabled;
  }
  /**
   * @hidden
   */
  get enableBlocked() {
    return this._enableBlocked;
  }
  /**
   * @copy CameraControl#animating
   */
  get animating() {
    return this._motion.activated;
  }
  /**
   * Current zoom value
   * @ko 현재 줌 값
   * @since 4.0.0
   * @readonly
   */
  get zoom() {
    return this._motion.val;
  }
  /**
   * @copy View360#wheelScrollable
   */
  get scrollable() {
    return this._wheelInput.scrollable;
  }
  set scrollable(val) {
    this._wheelInput.scrollable = val;
  }
  /**
   * @hidden
   */
  get range() {
    return this._motion.range;
  }
  /**
   * Scale factor of the zoom
   * @ko 입력에 의한 줌 배율
   * @default 1
   * @since 4.0.0
   */
  get scale() {
    return this._scale;
  }
  set scale(val) {
    this._scale = val;
  }
  /**
   * Duration of the input animation (ms)
   * @ko 회전 애니메이션의 시간 (ms)
   * @default 300
   * @since 4.0.0
   */
  get duration() {
    return this._motion.duration;
  }
  /**
   * Easing function of the animation
   * @ko 회전 애니메이션에 적용할 easing 함수
   * @default EASING.EASE_OUT_CUBIC
   * @see EASING
   * @since 4.0.0
   */
  get easing() {
    return this._motion.easing;
  }
  /**
   * Create new ZoomControl instance
   * @ko ZoomControl의 인스턴스를 생성합니다.
   * @param controlEl - Element to attach handlers {@ko 입력을 받을 엘리먼트}
   * @param enableBlocked - Whether to disable control on init {@ko 초기화 과정에서 컨트롤 활성화 여부}
   * @param options - Options for control {@ko 컨트롤 옵션들}
   */
  constructor(controlEl, enableBlocked, {
    scale: scale6 = 1,
    duration = DEFAULT_ANIMATION_DURATION,
    easing = DEFAULT_EASING
  } = {}) {
    super();
    this._onInputStart = (evt) => {
      this.trigger(CONTROL_EVENTS.INPUT_START, Object.assign(Object.assign({}, evt), {
        inputType: "zoom"
      }));
    };
    this._onChange = ({
      delta
    }) => {
      const scale7 = this._scale;
      const scaledDelta = delta * scale7;
      this._motion.setNewEndByDelta(scaledDelta);
    };
    this._onInputEnd = (evt) => {
      this.trigger(CONTROL_EVENTS.INPUT_END, Object.assign(Object.assign({}, evt), {
        inputType: "zoom"
      }));
    };
    this._scale = scale6;
    this._controlEl = controlEl;
    this._enableBlocked = enableBlocked;
    this._wheelInput = new WheelInput();
    this._pinchInput = new PinchInput();
    this._motion = new Motion({
      duration,
      easing,
      range: INFINITE_RANGE
    });
    this._enabled = false;
    this._bindInputs();
  }
  destroy() {
    this.disable();
    this._wheelInput.off();
    this._pinchInput.off();
    this.off();
  }
  /**
   * @hidden
   */
  update(delta) {
    if (!this._enabled)
      return;
    const motion = this._motion;
    motion.update(delta);
  }
  enable() {
    if (this._enabled)
      return;
    const element = this._controlEl;
    this._wheelInput.enable(element);
    this._pinchInput.enable(element);
    this._enabled = true;
    this._enableBlocked = false;
    this.trigger(CONTROL_EVENTS.ENABLE, {
      control: this,
      updateCursor: false
    });
  }
  disable() {
    if (!this._enabled)
      return;
    this._wheelInput.disable();
    this._pinchInput.disable();
    this._enabled = false;
    this.trigger(CONTROL_EVENTS.DISABLE, {
      updateCursor: false
    });
  }
  sync(camera) {
    const motion = this._motion;
    const range2 = camera.getZoomRange();
    motion.setRange(range2.min, range2.max);
    motion.reset(range2.current);
  }
  _bindInputs() {
    const wheelInput = this._wheelInput;
    const pinchInput = this._pinchInput;
    wheelInput.on(CONTROL_EVENTS.INPUT_START, this._onInputStart);
    wheelInput.on(CONTROL_EVENTS.CHANGE, this._onChange);
    wheelInput.on(CONTROL_EVENTS.INPUT_END, this._onInputEnd);
    pinchInput.on(CONTROL_EVENTS.INPUT_START, this._onInputStart);
    pinchInput.on(CONTROL_EVENTS.CHANGE, this._onChange);
    pinchInput.on(CONTROL_EVENTS.INPUT_END, this._onInputEnd);
  }
};
var ROTATE_CONSTANT = {
  PITCH_DELTA: 1,
  YAW_DELTA_BY_ROLL: 2,
  YAW_DELTA_BY_YAW: 3
};
ROTATE_CONSTANT[ROTATE_CONSTANT.PITCH_DELTA] = {
  targetAxis: [0, 1, 0],
  meshPoint: [0, 0, 1]
};
ROTATE_CONSTANT[ROTATE_CONSTANT.YAW_DELTA_BY_ROLL] = {
  targetAxis: [0, 1, 0],
  meshPoint: [1, 0, 0]
};
ROTATE_CONSTANT[ROTATE_CONSTANT.YAW_DELTA_BY_YAW] = {
  targetAxis: [1, 0, 0],
  meshPoint: [0, 0, 1]
};
var GyroInput = class extends component_esm_default {
  get enabled() {
    return this._enabled;
  }
  get orientationUpdated() {
    return this._orientationUpdated;
  }
  get ignoreRoll() {
    return this._ignoreRoll;
  }
  set ignoreRoll(val) {
    this._ignoreRoll = val;
  }
  constructor() {
    super();
    this._onDeviceOrientation = (evt) => {
      const prevOrientation = this._orientation;
      const {
        alpha,
        beta,
        gamma
      } = evt;
      if (alpha == null || beta == null || gamma == null)
        return;
      prevOrientation.alpha = alpha;
      prevOrientation.beta = beta;
      prevOrientation.gamma = gamma;
      this._orientationUpdated = true;
      if (this._needsCalibrate) {
        this._needsCalibrate = false;
        this._calibrateSensor();
      }
    };
    this._updateScreenOrientation = () => {
      if (window.screen && window.screen.orientation && window.screen.orientation.angle !== void 0) {
        this._screenOrientation = screen.orientation.angle;
      } else if (window.orientation !== void 0) {
        this._screenOrientation = window.orientation >= 0 ? window.orientation : 360 + window.orientation;
      } else {
        this._screenOrientation = 0;
      }
    };
    this.quaternion = quat_exports.create();
    this._orientation = {
      alpha: 0,
      beta: 90,
      gamma: 0
    };
    this._yawOrigin = 0;
    this._yawOffset = 0;
    this._orientationUpdated = false;
    this._screenOrientation = 0;
    this._needsCalibrate = true;
    this._enabled = false;
  }
  enable() {
    if (this._enabled)
      return;
    window.addEventListener(EVENTS$1.DEVICE_ORIENTATION, this._onDeviceOrientation);
    window.addEventListener(EVENTS$1.ORIENTATION_CHANGE, this._updateScreenOrientation);
    this._updateScreenOrientation();
    this._orientationUpdated = false;
    this._needsCalibrate = true;
    this._enabled = true;
  }
  disable() {
    if (!this._enabled)
      return;
    window.removeEventListener(EVENTS$1.DEVICE_ORIENTATION, this._onDeviceOrientation);
    window.removeEventListener(EVENTS$1.ORIENTATION_CHANGE, this._updateScreenOrientation);
    this._enabled = false;
  }
  update() {
    this._updateRotation();
    this._orientationUpdated = false;
  }
  collectDelta() {
    if (!this._orientationUpdated) {
      return {
        pitch: 0,
        yaw: 0
      };
    }
    const prevRotation = quat_exports.clone(this.quaternion);
    this._updateRotation();
    this._orientationUpdated = false;
    return this._toEulerDelta(prevRotation, this.quaternion);
  }
  setInitialRotation(yaw) {
    this._yawOrigin = yaw;
  }
  _calibrateSensor() {
    const yawOrigin = this._yawOrigin;
    const rotation = this.quaternion;
    this._yawOffset = 0;
    this._updateRotation();
    const {
      yaw: sensorYaw
    } = quatToEuler(rotation);
    this._yawOffset = sensorYaw - yawOrigin;
    this._updateRotation();
    this._needsCalibrate = false;
  }
  _updateRotation() {
    const rotation = this.quaternion;
    const {
      alpha,
      beta,
      gamma
    } = this._orientation;
    quat_exports.identity(rotation);
    quat_exports.rotateY(rotation, rotation, (alpha - this._yawOffset) * DEG_TO_RAD);
    quat_exports.rotateX(rotation, rotation, beta * DEG_TO_RAD);
    quat_exports.rotateZ(rotation, rotation, -gamma * DEG_TO_RAD);
    const screen2 = quat_exports.create();
    const screenAngle = -this._screenOrientation * 0.5 * DEG_TO_RAD;
    const world = quat_exports.fromValues(-Math.sqrt(0.5), 0, 0, Math.sqrt(0.5));
    quat_exports.set(screen2, 0, Math.sin(screenAngle), 0, Math.cos(screenAngle));
    quat_exports.multiply(rotation, rotation, screen2);
    quat_exports.multiply(rotation, rotation, world);
    quat_exports.normalize(rotation, rotation);
  }
  _toEulerDelta(prevQuat, currentQuat) {
    return {
      yaw: this._getDeltaYaw(prevQuat, currentQuat),
      pitch: this._getDeltaPitch(prevQuat, currentQuat)
    };
  }
  _getDeltaYaw(prvQ, curQ) {
    const yawDeltaByYaw = this._getRotationDelta(prvQ, curQ, ROTATE_CONSTANT.YAW_DELTA_BY_YAW);
    const yawDeltaByRoll = this._getRotationDelta(prvQ, curQ, ROTATE_CONSTANT.YAW_DELTA_BY_ROLL) * Math.sin(this._extractPitchFromQuat(curQ));
    return yawDeltaByRoll + yawDeltaByYaw;
  }
  _getDeltaPitch(prvQ, curQ) {
    return this._getRotationDelta(prvQ, curQ, ROTATE_CONSTANT.PITCH_DELTA);
  }
  _getRotationDelta(prevQ, curQ, rotateKind) {
    const targetAxis = vec3_exports.fromValues(ROTATE_CONSTANT[rotateKind].targetAxis[0], ROTATE_CONSTANT[rotateKind].targetAxis[1], ROTATE_CONSTANT[rotateKind].targetAxis[2]);
    const meshPoint = ROTATE_CONSTANT[rotateKind].meshPoint;
    const prevQuaternion = quat_exports.clone(prevQ);
    const curQuaternion = quat_exports.clone(curQ);
    quat_exports.normalize(prevQuaternion, prevQuaternion);
    quat_exports.normalize(curQuaternion, curQuaternion);
    let prevPoint = vec3_exports.fromValues(0, 0, 1);
    let curPoint = vec3_exports.fromValues(0, 0, 1);
    vec3_exports.transformQuat(prevPoint, prevPoint, prevQuaternion);
    vec3_exports.transformQuat(curPoint, curPoint, curQuaternion);
    vec3_exports.transformQuat(targetAxis, targetAxis, curQuaternion);
    const rotateDistance = vec3_exports.dot(targetAxis, vec3_exports.cross(vec3_exports.create(), prevPoint, curPoint));
    const rotateDirection = rotateDistance > 0 ? 1 : -1;
    const meshPoint2 = vec3_exports.fromValues(meshPoint[0], meshPoint[1], meshPoint[2]);
    let meshPoint3;
    if (rotateKind !== ROTATE_CONSTANT.YAW_DELTA_BY_YAW) {
      meshPoint3 = vec3_exports.fromValues(0, rotateDirection, 0);
    } else {
      meshPoint3 = vec3_exports.fromValues(rotateDirection, 0, 0);
    }
    vec3_exports.transformQuat(meshPoint2, meshPoint2, curQuaternion);
    vec3_exports.transformQuat(meshPoint3, meshPoint3, curQuaternion);
    const vecU = meshPoint2;
    const vecV = meshPoint3;
    const vecN = vec3_exports.create();
    vec3_exports.cross(vecN, vecU, vecV);
    vec3_exports.normalize(vecN, vecN);
    const coefficientA = vecN[0];
    const coefficientB = vecN[1];
    const coefficientC = vecN[2];
    curPoint = vec3_exports.fromValues(meshPoint[0], meshPoint[1], meshPoint[2]);
    vec3_exports.transformQuat(curPoint, curPoint, curQuaternion);
    prevPoint = vec3_exports.fromValues(meshPoint[0], meshPoint[1], meshPoint[2]);
    vec3_exports.transformQuat(prevPoint, prevPoint, prevQuaternion);
    let distance3 = Math.abs(prevPoint[0] * coefficientA + prevPoint[1] * coefficientB + prevPoint[2] * coefficientC);
    const projectedPrevPoint = vec3_exports.create();
    vec3_exports.subtract(projectedPrevPoint, prevPoint, vec3_exports.scale(vec3_exports.create(), vecN, distance3));
    let trigonometricRatio = (projectedPrevPoint[0] * curPoint[0] + projectedPrevPoint[1] * curPoint[1] + projectedPrevPoint[2] * curPoint[2]) / (vec3_exports.length(projectedPrevPoint) * vec3_exports.length(curPoint));
    if (trigonometricRatio > 1) {
      trigonometricRatio = 1;
    }
    const theta = Math.acos(trigonometricRatio);
    const crossVec = vec3_exports.cross(vec3_exports.create(), curPoint, projectedPrevPoint);
    distance3 = coefficientA * crossVec[0] + coefficientB * crossVec[1] + coefficientC * crossVec[2];
    let thetaDirection;
    if (rotateKind !== ROTATE_CONSTANT.YAW_DELTA_BY_YAW) {
      thetaDirection = distance3 > 0 ? 1 : -1;
    } else {
      thetaDirection = distance3 < 0 ? 1 : -1;
    }
    const deltaRadian = theta * thetaDirection * rotateDirection;
    return deltaRadian * RAD_TO_DEG;
  }
  _extractPitchFromQuat(quaternion) {
    const baseV = vec3_exports.fromValues(0, 0, 1);
    vec3_exports.transformQuat(baseV, baseV, quaternion);
    return -1 * Math.atan2(baseV[1], Math.sqrt(Math.pow(baseV[0], 2) + Math.pow(baseV[2], 2)));
  }
};
var GyroControl = class extends component_esm_default {
  /**
   * @copy CameraControl#enabled
   */
  get enabled() {
    return this._input.enabled;
  }
  /**
   * @hidden
   */
  get enableBlocked() {
    return this._enableBlocked;
  }
  /**
   * @copy CameraControl#animating
   */
  get animating() {
    return this._input.enabled && this._input.orientationUpdated;
  }
  /**
   * When `true`, ignore gyroscope's roll(z-axis rotation) value.
   * :::caution
   * Setting `false` will ignore camera's range limit.
   * Options like {@link View360Options#yawRange}, {@link View360Options#pitchRange} are ignored, and {@link CylinderProjection} also can't force it's camera range limit.
   * :::
   * @ko `true`일 경우 자이로스코프 입력의 roll(z축 회전)값을 무시합니다.
   * :::caution
   * 이 값을 `false`로 설정할 경우 카메라 범위 제약을 무시합니다.
   * {@link View360Options#yawRange}, {@link View360Options#pitchRange}와 같은 값은 무시되며, {@link CylinderProjection} 사용시에도 범위를 벗어날 수 있습니다.
   * :::
   * @default true
   * @since 4.0.0
   */
  get ignoreRoll() {
    return this._ignoreRoll;
  }
  set ignoreRoll(val) {
    this._ignoreRoll = val;
  }
  /**
   * Return availability of the gyroscope.
   * :::caution
   * This will always return false until user permission under environments like iOS which requires user permission when using gyroscope.
   * :::
   * @ko 자이로스코프 사용 가능 여부를 반환합니다.
   * :::caution
   * iOS와 같이 GyroScope 사용시 사용자 Permission을 요구하는 환경에서는 사용자 Permission을 받기 전까지 항상 `false`입니다.
   * :::
   * @example
   * ```ts
   * const gyroAvailable = await GyroControl.isAvailable();
   * ```
   */
  static isAvailable() {
    return __awaiter(this, void 0, void 0, function* () {
      if (!DeviceMotionEvent) {
        return false;
      }
      let onDeviceMotionChange;
      const listenDeviceMotion = () => new Promise((res) => {
        onDeviceMotionChange = (evt) => {
          res(evt.rotationRate && evt.rotationRate.alpha != null);
        };
        window.addEventListener(EVENTS$1.DEVICE_MOTION, onDeviceMotionChange);
      });
      const timeout = () => new Promise((res) => {
        setTimeout(() => res(false), 1e3);
      });
      return Promise.race([listenDeviceMotion(), timeout()]).then((available) => {
        window.removeEventListener(EVENTS$1.DEVICE_MOTION, onDeviceMotionChange);
        return available;
      });
    });
  }
  /**
   * Request user permission for gyroscope sensor.
   * This can be used in environments like iOS which requires user permission when using gyroscope sensors.
   * @ko 사용자의 sensor permission 취득을 요청합니다.
   * iOS와 같이 gyroscope 사용시 사용자 Permission을 요구하는 환경에서 사용 가능합니다.
   * @returns Whether the permission is granted {@ko 사용자 permission 취득 여부}
   */
  static requestSensorPermission() {
    return __awaiter(this, void 0, void 0, function* () {
      if (sensorCanBeEnabledIOS()) {
        return DeviceMotionEvent.requestPermission().then((permissionState) => {
          return permissionState === "granted";
        }).catch(() => false);
      }
      return true;
    });
  }
  /**
   * Create new GyroControl instance
   * @ko GyroControl의 인스턴스를 생성합니다.
   * @param enableBlocked - Whether to disable control on init {@ko 초기화 과정에서 컨트롤 활성화 여부}
   * @param options - Options for control {@ko 컨트롤 옵션들}
   */
  constructor(enableBlocked, {
    ignoreRoll = true
  } = {}) {
    super();
    this._enableBlocked = enableBlocked;
    this._ignoreRoll = ignoreRoll;
    this._input = new GyroInput();
  }
  /**
   * @copy CameraControl#destroy
   */
  destroy() {
    this.disable();
    this._input.off();
    this.off();
  }
  /**
   * @hidden
   */
  update(camera, yaw, pitch, zoom) {
    if (!this._ignoreRoll) {
      this._updateQuaternion(camera, zoom);
    } else {
      this._updateYawPitch(camera, yaw, pitch, zoom);
    }
  }
  /**
   * @copy CameraControl#enable
   */
  enable() {
    if (this._input.enabled)
      return;
    this._input.enable();
    this._enableBlocked = false;
    this.trigger(CONTROL_EVENTS.ENABLE, {
      control: this,
      updateCursor: false
    });
  }
  /**
   * @copy CameraControl#disable
   */
  disable() {
    if (!this._input.enabled)
      return;
    this._input.disable();
    this.trigger(CONTROL_EVENTS.DISABLE, {
      updateCursor: false
    });
  }
  /**
   * @copy CameraControl#sync
   */
  sync() {
  }
  // eslint-disable-line @typescript-eslint/no-empty-function
  _updateYawPitch(camera, yaw, pitch, zoom) {
    const input = this._input;
    if (!input.enabled)
      return;
    const {
      yaw: yawDelta,
      pitch: pitchDelta
    } = input.collectDelta();
    yaw.add(yawDelta);
    pitch.add(pitchDelta);
    camera.lookAt({
      yaw: yaw.val,
      pitch: pitch.val,
      zoom
    });
  }
  _updateQuaternion(camera, zoom) {
    const input = this._input;
    if (!input.enabled)
      return;
    input.update();
    camera.rotate(input.quaternion, zoom);
  }
};
var PanoControl = class {
  /**
   * @copy View360#useGrabCursor
   */
  get useGrabCursor() {
    return this._useGrabCursor;
  }
  set useGrabCursor(val) {
    if (val === this._useGrabCursor)
      return;
    this._useGrabCursor = val;
    if (val && this._enabled) {
      this._setCursor(CURSOR.GRAB);
    } else if (!val) {
      this._setCursor(CURSOR.NONE);
    }
  }
  /**
   * @copy View360#disableContextMenu
   */
  get disableContextMenu() {
    return this._disableContextMenu;
  }
  set disableContextMenu(val) {
    if (val === this._disableContextMenu)
      return;
    this._disableContextMenu = val;
    if (val && this._enabled) {
      this._blockContextMenu();
    } else if (!val) {
      this._restoreContextMenu();
    }
  }
  /**
   * @copy View360#disableContextMenu
   */
  get scrollable() {
    return this._rotateControl.scrollable;
  }
  set scrollable(val) {
    this._rotateControl.scrollable = val;
  }
  /**
   * @copy View360#disableContextMenu
   */
  get wheelScrollable() {
    return this._zoomControl.scrollable;
  }
  set wheelScrollable(val) {
    this._zoomControl.scrollable = val;
  }
  /**
   * When `true`, disables rotation slow-down by zoom-value.
   * @ko `true`일 경우 줌 된 정도에 따라 회전속도를 늦추는 동작을 비활성화합니다.
   * @since 4.0.0
   */
  get ignoreZoomScale() {
    return this._ignoreZoomScale;
  }
  set ignoreZoomScale(val) {
    this._ignoreZoomScale = val;
  }
  /**
   * Whether the control is enabled or not
   * @ko 컨트롤 활성화 여부를 가리키는 값
   * @readonly
   * @since 4.0.0
   */
  get enabled() {
    return this._enabled;
  }
  /**
   * @copy View360#rotate
   */
  get rotate() {
    return this._rotateControl;
  }
  /**
   * @copy View360#zoom
   */
  get zoom() {
    return this._zoomControl;
  }
  /**
   * @copy View360#gyro
   */
  get gyro() {
    return this._gyroControl;
  }
  /**
   * Whether one of the controls is animating at the moment
   * @ko 현재 컨트롤 중 하나라도 동작중인지 여부를 나타내는 값
   * @readonly
   * @since 4.0.0
   */
  get animating() {
    return this._rotateControl.animating || this._zoomControl.animating || this._gyroControl.animating;
  }
  /**
   * Create new instance.
   * @ko 새 인스턴스를 생성합니다.
   * @param element - Canvas element {@ko 캔버스 엘리먼트}
   * @param camera - Camera instance {@ko Camera 인스턴스}
   * @param options - Options for PanoControl {@ko PanoControl 옵션들}
   */
  constructor(element, camera, {
    useGrabCursor,
    scrollable,
    wheelScrollable,
    disableContextMenu,
    rotate: rotate3,
    zoom,
    gyro
  }) {
    this._preventContextMenu = (evt) => {
      evt.preventDefault();
    };
    this._onInputStart = (evt) => {
      if (this._useGrabCursor && !evt.isKeyboard) {
        this._setCursor(CURSOR.GRABBING);
      }
    };
    this._onInputEnd = (evt) => {
      if (this._useGrabCursor && !evt.isKeyboard) {
        this._setCursor(CURSOR.GRAB);
      }
    };
    this._onEnable = ({
      control,
      updateCursor
    }) => {
      if (updateCursor && this._useGrabCursor) {
        this._setCursor(CURSOR.GRAB);
      }
      control.sync(this._camera);
    };
    this._onDisable = ({
      updateCursor
    }) => {
      if (updateCursor) {
        this._setCursor(CURSOR.NONE);
      }
    };
    this._onCameraAnimationEnd = ({
      animation
    }) => {
      animation.getFinishPromise().then(() => {
        this.sync();
      });
    };
    this._useGrabCursor = useGrabCursor;
    this._disableContextMenu = disableContextMenu;
    this._camera = camera;
    this._controlEl = element;
    this._ignoreZoomScale = false;
    this._enabled = false;
    this._rotateControl = new RotateControl(element, !rotate3, getObjectOption(rotate3));
    this._zoomControl = new ZoomControl(element, !zoom, getObjectOption(zoom));
    this._gyroControl = new GyroControl(!gyro, getObjectOption(gyro));
    this._rotateControl.scrollable = scrollable;
    this._zoomControl.scrollable = wheelScrollable;
    this._bindEvents();
  }
  /**
   * Destroy the instance and remove all event listeners attached.
   * This also will reset CSS cursor to initial.
   * @ko 인스턴스를 삭제하고 부착된 모든 이벤트 리스너를 제거합니다.
   * 또한, 캔버스에 적용된 CSS cursor도 제거합니다.
   * @since 4.0.0
   */
  destroy() {
    this.disable();
    this._rotateControl.destroy();
    this._zoomControl.destroy();
    this._setCursor(CURSOR.NONE);
  }
  /**
   * Resize control to match target size.
   * @ko 컨트롤이 내부에 캐시하고 있는 크기값을 갱신합니다.
   * @param width New width {@ko 변경된 너비}
   * @param height New height {@ko 변경된 높이}
   * @since 4.0.0
   */
  resize(width, height) {
    const camera = this._camera;
    this._rotateControl.resize(camera.fov, camera.aspect, width, height);
  }
  /**
   * Enable this control and add event listeners.
   * @ko 컨트롤을 활성화하고 이벤트 리스너들을 추가합니다.
   * @since 4.0.0
   */
  enable() {
    return __awaiter(this, void 0, void 0, function* () {
      if (this._enabled)
        return;
      if (!this._rotateControl.enableBlocked) {
        this._rotateControl.enable();
      }
      if (!this._zoomControl.enableBlocked) {
        this._zoomControl.enable();
      }
      if (!this._gyroControl.enableBlocked) {
        if (yield GyroControl.isAvailable()) {
          this._gyroControl.enable();
        }
      }
      this.sync();
      if (this._disableContextMenu) {
        this._blockContextMenu();
      }
      this._enabled = true;
    });
  }
  /**
   * Disable this control and remove all event listeners
   * @ko 컨트롤을 비활성화하고 모든 이벤트 리스너들을 제거합니다.
   * @since 4.0.0
   */
  disable() {
    if (!this._enabled)
      return;
    this._rotateControl.disable();
    this._zoomControl.disable();
    this._gyroControl.disable();
    this._restoreContextMenu();
    this._enabled = false;
  }
  /**
   * Update control by given deltaTime
   * @ko 컨트롤을 주어진 시간만큼 업데이트합니다.
   * @param delta Number of milisec to update {@ko 업데이트할 시간, 밀리초 단위}
   * @since 4.0.0
   * @internal
   */
  update(delta) {
    const camera = this._camera;
    const rotateControl = this._rotateControl;
    const zoomControl = this._zoomControl;
    const gyroControl = this._gyroControl;
    zoomControl.update(delta);
    const zoom = hfovToZoom(camera.fov, zoomControl.zoom);
    const zoomScale = this._ignoreZoomScale ? 1 : Math.max(zoom, 1);
    rotateControl.setZoomScale(zoomScale);
    rotateControl.updateRange(camera, zoom);
    rotateControl.update(delta);
    const yaw = rotateControl.yaw;
    const pitch = rotateControl.pitch;
    if (gyroControl.enabled) {
      gyroControl.update(camera, yaw, pitch, zoom);
    } else {
      camera.lookAt({
        yaw: yaw.val,
        pitch: pitch.val,
        zoom
      });
    }
  }
  /**
   * Synchronize this control's state to current camera state
   * @ko 컨트롤을 카메라의 현재 상태와 동기화합니다.
   * @since 4.0.0
   */
  sync() {
    const camera = this._camera;
    this._zoomControl.sync(camera);
    this._rotateControl.sync(camera);
  }
  _blockContextMenu() {
    const el = this._controlEl;
    el.addEventListener(EVENTS$1.CONTEXT_MENU, this._preventContextMenu);
  }
  _restoreContextMenu() {
    const el = this._controlEl;
    el.removeEventListener(EVENTS$1.CONTEXT_MENU, this._preventContextMenu);
  }
  _setCursor(newCursor) {
    if (!this._useGrabCursor && newCursor !== CURSOR.NONE)
      return;
    const targetEl = this._controlEl;
    targetEl.style.cursor = newCursor;
  }
  _bindEvents() {
    const rotateControl = this._rotateControl;
    const zoomControl = this._zoomControl;
    rotateControl.on(CONTROL_EVENTS.INPUT_START, this._onInputStart);
    rotateControl.on(CONTROL_EVENTS.INPUT_END, this._onInputEnd);
    rotateControl.on(CONTROL_EVENTS.ENABLE, this._onEnable);
    rotateControl.on(CONTROL_EVENTS.DISABLE, this._onDisable);
    zoomControl.on(CONTROL_EVENTS.ENABLE, this._onEnable);
    zoomControl.on(CONTROL_EVENTS.DISABLE, this._onDisable);
    this._camera.on(CAMERA_EVENTS.ANIMATION_END, this._onCameraAnimationEnd);
  }
};
var Texture = class {
  constructor({
    width,
    height,
    flipY
  }) {
    this.width = width;
    this.height = height;
    this.flipY = flipY;
    this.wrapS = WebGLRenderingContext.CLAMP_TO_EDGE;
    this.wrapT = WebGLRenderingContext.CLAMP_TO_EDGE;
  }
  destroy() {
  }
  isVideo() {
    return false;
  }
  isCube() {
    return false;
  }
};
var Texture2D = class extends Texture {
  constructor({
    source,
    width,
    height,
    flipY
  }) {
    super({
      width,
      height,
      flipY
    });
    this.source = source;
  }
};
var TextureVideo = class extends Texture2D {
  destroy() {
    const video = this.source;
    video.pause();
    video.removeAttribute("src");
    video.load();
  }
  isVideo() {
    return true;
  }
  isPaused() {
    const video = this.source;
    return video.paused || video.ended || video.readyState <= 2;
  }
  hasAudio() {
    const video = this.source;
    if (video.audioTracks) {
      return video.audioTracks.length > 0;
    }
    if (video.webkitAudioDecodedByteCount != null) {
      return video.webkitAudioDecodedByteCount > 0;
    }
    if (video.mozHasAudio != null) {
      return video.mozHasAudio;
    }
    return true;
  }
};
var TextureCube = class extends Texture {
  constructor({
    sources,
    width,
    height,
    flipY
  }) {
    super({
      width,
      height,
      flipY
    });
    this.sources = sources;
  }
  isCube() {
    return true;
  }
};
var TextureLoader = class {
  constructor() {
    this._loadChecker = new imready_esm_default();
  }
  load(src, video) {
    return __awaiter(this, void 0, void 0, function* () {
      if (video) {
        return this.loadVideo(src, getObjectOption(video));
      } else {
        if (Array.isArray(src) && src.length > 1) {
          return this.loadCubeImage(src);
        } else {
          const imgSrc = Array.isArray(src) ? src[0] : src;
          return this.loadImage(imgSrc);
        }
      }
    });
  }
  loadImage(src) {
    return __awaiter(this, void 0, void 0, function* () {
      const images = this._toImageArray(src);
      return this._load(images, (resolve) => {
        const image = images[0];
        resolve(new Texture2D({
          source: image,
          width: image.naturalWidth,
          height: image.naturalHeight,
          flipY: true
        }));
      });
    });
  }
  loadCubeImage(src) {
    return __awaiter(this, void 0, void 0, function* () {
      const images = this._toImageArray(src);
      return this._load(images, (resolve) => {
        resolve(new TextureCube({
          sources: images,
          width: images[0].naturalWidth,
          height: images[0].naturalHeight,
          flipY: false
        }));
      });
    });
  }
  loadVideo(src, videoConfig) {
    return __awaiter(this, void 0, void 0, function* () {
      const config = Object.assign({
        autoplay: true,
        muted: true,
        loop: false,
        volume: 1
      }, videoConfig);
      const video = this._toVideoElement(src, config);
      return this._load([video], (resolve) => {
        const {
          autoplay,
          muted
        } = config;
        video.currentTime = 0;
        if (autoplay && muted) {
          video.play().catch(() => void 0);
        }
        resolve(new TextureVideo({
          source: video,
          width: video.videoWidth,
          height: video.videoHeight,
          flipY: true
        }));
      });
    });
  }
  _load(content, onLoad) {
    const loader = this._loadChecker;
    return new Promise((resolve, reject) => {
      loader.once("ready", (evt) => {
        if (evt.errorCount > 0)
          return;
        onLoad(resolve);
      });
      loader.once("error", reject);
      loader.check(content);
    });
  }
  _toImageArray(src) {
    const srcs = Array.isArray(src) ? src : [src];
    return srcs.map((source) => {
      if (isString2(source)) {
        const imgEl = new Image();
        imgEl.crossOrigin = "anonymous";
        imgEl.src = source;
        return imgEl;
      } else {
        return source;
      }
    });
  }
  _toVideoElement(src, {
    muted,
    loop,
    volume
  }) {
    if (src instanceof HTMLVideoElement) {
      return src;
    }
    const video = document.createElement("video");
    video.crossOrigin = "anonymous";
    video.playsInline = true;
    video.setAttribute("webkit-playsinline", "");
    video.muted = muted;
    video.volume = volume;
    video.loop = loop;
    if (Array.isArray(src)) {
      src.forEach((source) => this._appendSourceElement(video, source));
    } else {
      this._appendSourceElement(video, src);
    }
    const sourceCount = video.querySelectorAll("source").length;
    if (sourceCount > 0 && video.readyState < 1) {
      video.load();
    }
    return video;
  }
  _appendSourceElement(video, src) {
    if (src instanceof HTMLSourceElement) {
      return src;
    }
    const sourceEl = document.createElement("source");
    sourceEl.src = src;
    video.appendChild(sourceEl);
  }
};
var FrameAnimator = class {
  /** */
  constructor(maxDeltaTime, context = window) {
    this.maxDeltaTime = maxDeltaTime;
    this._context = context;
    this._rafId = -1;
    this._rafTimer = -1;
    this._lastUpdateTime = -1;
  }
  start(callback) {
    const context = this._context;
    if (!context || !callback)
      return;
    if (this._rafId >= 0 || this._rafTimer >= 0)
      return;
    const loop = (_time, frame) => {
      const time = Date.now();
      const delta = Math.min(time - this._lastUpdateTime, this.maxDeltaTime * 1e3);
      callback(delta, frame);
      this._lastUpdateTime = time;
      this._rafId = context.requestAnimationFrame(loop);
    };
    this._lastUpdateTime = Date.now();
    this._rafId = context.requestAnimationFrame(loop);
  }
  stop() {
    if (this._rafId >= 0) {
      this._context.cancelAnimationFrame(this._rafId);
    }
    if (this._rafTimer >= 0) {
      clearTimeout(this._rafTimer);
    }
    this._rafId = -1;
    this._rafTimer = -1;
  }
  changeContext(context) {
    this.stop();
    this._context = context;
  }
};
var AutoResizer = class {
  get useResizeObserver() {
    return this._useResizeObserver;
  }
  /**
   * Returns whether AutoResizer is enabled
   */
  get enabled() {
    return this._enabled;
  }
  /** */
  constructor(useResizeObserver, onResize) {
    this._skipFirstResize = /* @__PURE__ */ (() => {
      let isFirstResize = true;
      return () => {
        if (isFirstResize) {
          isFirstResize = false;
          return;
        }
        this._onResize();
      };
    })();
    this._useResizeObserver = useResizeObserver;
    this._enabled = false;
    this._resizeObserver = null;
    this._onResize = onResize;
  }
  /**
   * Enable resizer
   */
  enable(element) {
    if (this._enabled) {
      this.disable();
    }
    if (this._useResizeObserver && !!window.ResizeObserver) {
      const bbox = element.getBoundingClientRect();
      const resizeImmediate = bbox.width !== 0 || bbox.height !== 0;
      const resizeObserver = new ResizeObserver(resizeImmediate ? this._skipFirstResize : this._onResize);
      resizeObserver.observe(element);
      this._resizeObserver = resizeObserver;
    } else {
      window.addEventListener(EVENTS$1.RESIZE, this._onResize);
    }
    this._enabled = true;
    return this;
  }
  /**
   * Disable resizer
   */
  disable() {
    if (!this._enabled)
      return this;
    const resizeObserver = this._resizeObserver;
    if (resizeObserver) {
      resizeObserver.disconnect();
      this._resizeObserver = null;
    } else {
      window.removeEventListener(EVENTS$1.RESIZE, this._onResize);
    }
    this._enabled = false;
    return this;
  }
};
var Autoplay = class {
  /**
   * Whether autoplay is enabled or not
   * @ko 자동재생 활성화 여부를 나타내는 값
   * @readonly
   * @since 4.0.0
   */
  get enabled() {
    return this._enabled;
  }
  /**
   * @hidden
   */
  get enableBlocked() {
    return this._enableBlocked;
  }
  /**
   * Whether autoplay is updating the camera at the moment
   * @ko 현재 자동재생이 동작중인지 여부를 나타내는 값
   * @readonly
   * @since 4.0.0
   */
  get playing() {
    return this._enabled && !this._interrupted;
  }
  /**
   * Reactivation delay after mouse input in milisecond.
   * @ko 재활성화되기까지의 시간 (밀리초 단위)
   * @default 2000
   * @since 4.0.0
   */
  get delay() {
    return this._delay;
  }
  set delay(val) {
    this._delay = val;
  }
  /**
   * Reactivation delay after mouse leave when using {@link AutoplayOptions#pauseOnHover}
   * @ko {@link AutoplayOptions#pauseOnHover} 사용시 마우스가 캔버스 영역을 떠난 뒤 자동재생이 다시 활성화되기까지의 시간
   * @default 0
   * @since 4.0.0
   */
  get delayOnMouseLeave() {
    return this._delayOnMouseLeave;
  }
  set delayOnMouseLeave(val) {
    this._delayOnMouseLeave = val;
  }
  /**
   * Y-axis(yaw) rotation speed
   * @ko Y-축 회전(yaw)의 속도
   * @default 1
   * @since 4.0.0
   */
  get speed() {
    return this._speed;
  }
  set speed(val) {
    this._speed = val;
  }
  /**
   * Whether to pause rotation on mouse hover
   * @ko 마우스가 캔버스 영역에 들어왔을 때 자동재생을 정지할지 여부
   * @default false
   * @since 4.0.0
   */
  get pauseOnHover() {
    return this._pauseOnHover;
  }
  set pauseOnHover(val) {
    this._pauseOnHover = val;
  }
  /**
   * Whether user can interrupt the rotation with click/wheel input
   * @ko 클릭이나 휠같은 사용자 인터랙션시 자동재생을 멈출지 여부
   * @default true
   * @since 4.0.0
   */
  get canInterrupt() {
    return this._canInterrupt;
  }
  set canInterrupt(val) {
    this._canInterrupt = val;
  }
  /**
   * Whether to disable autoplay on user interrupt
   * @ko 사용자 동작에 의해 자동재생이 정지할 때, {@link Autoplay#disable}을 호출하여 자동재생을 영구히 정지할지 여부
   * @default false
   * @since 4.0.0
   */
  get disableOnInterrupt() {
    return this._disableOnInterrupt;
  }
  set disableOnInterrupt(val) {
    this._disableOnInterrupt = val;
  }
  /**
   * Create new AutoPlayer instance
   * @param camera - Instance of the {@link Camera} {@ko Camera의 인스턴스}
   * @param element - Canvas element {@ko 캔버스 엘리먼트}
   * @param options - Autoplay options {@ko 자동재생 옵션들}
   * @since 4.0.0
   */
  constructor(viewer, element, options) {
    this._onInputStart = () => {
      if (!this._canInterrupt)
        return;
      this._interrupted = true;
      this._clearTimeout();
    };
    this._onInputEnd = () => {
      this._setUninterruptedAfterDelay(this._delay);
    };
    this._onGyroEnable = () => {
      this.disable();
    };
    this._onMouseEnter = () => {
      if (!this._pauseOnHover)
        return;
      this._interrupted = true;
      this._hovering = true;
    };
    this._onMouseLeave = () => {
      if (!this._pauseOnHover)
        return;
      this._hovering = false;
      this._setUninterruptedAfterDelay(this._delayOnMouseLeave);
    };
    this._camera = viewer.camera;
    this._control = viewer.control;
    this._element = element;
    this._enabled = false;
    this._interrupted = false;
    this._interruptionTimer = -1;
    this._hovering = false;
    const {
      delay = 2e3,
      delayOnMouseLeave = 0,
      speed = 1,
      pauseOnHover = false,
      canInterrupt = true,
      disableOnInterrupt = false
    } = getObjectOption(options);
    this._enableBlocked = !options;
    this._delay = delay;
    this._delayOnMouseLeave = delayOnMouseLeave;
    this._speed = speed;
    this._pauseOnHover = pauseOnHover;
    this._canInterrupt = canInterrupt;
    this._disableOnInterrupt = disableOnInterrupt;
  }
  /**
   * Destroy the instance and remove all event listeners attached
   * @ko 인스턴스를 제거하고 연결된 모든 이벤트 핸들러를 삭제합니다.
   * @since 4.0.0
   */
  destroy() {
    this.disable();
  }
  /**
   * Rotate camera by given deltaTime
   * @ko 주어진 deltaTime만큼 카메라를 회전시킵니다.
   * @param deltaTime - Number of milisec to update {@ko 업데이트할 시간, 밀리초 단위}
   * @since 4.0.0
   */
  update(deltaTime) {
    if (!this._enabled)
      return;
    if (this._interrupted) {
      if (this._disableOnInterrupt) {
        this.disable();
      }
      return;
    }
    const camera = this._camera;
    const delta = -this._speed * deltaTime / 100;
    camera.yaw = circulate(camera.yaw + delta, 0, 360);
  }
  /**
   * Enable autoplay and add event listeners.
   * @ko 자동재생을 활성화하고 이벤트리스너들을 추가합니다.
   * @since 4.0.0
   */
  enable() {
    const control = this._control;
    const element = this._element;
    if (this._enabled || control.gyro.enabled)
      return;
    control.rotate.on(CONTROL_EVENTS.INPUT_START, this._onInputStart);
    control.rotate.on(CONTROL_EVENTS.INPUT_END, this._onInputEnd);
    control.zoom.on(CONTROL_EVENTS.INPUT_START, this._onInputStart);
    control.zoom.on(CONTROL_EVENTS.INPUT_END, this._onInputEnd);
    control.gyro.on(CONTROL_EVENTS.ENABLE, this._onGyroEnable);
    element.addEventListener(EVENTS$1.MOUSE_ENTER, this._onMouseEnter, false);
    element.addEventListener(EVENTS$1.MOUSE_LEAVE, this._onMouseLeave, false);
    this._enabled = true;
    this._enableBlocked = false;
  }
  /**
   * Enable autoplay after current `delay` value.
   * @ko 현재의 `delay`값만큼 시간이 지난 다음에 자동재생을 활성화합니다.
   * @since 4.0.0
   */
  enableAfterDelay() {
    this.enable();
    this._interrupted = true;
    this._setUninterruptedAfterDelay(this._delay);
  }
  /**
   * Disable autoplay and remove all event handlers.
   * @ko 자동재생을 비활성화하고 모든 이벤트 핸들러를 제거합니다.
   * @since 4.0.0
   */
  disable() {
    if (!this._enabled)
      return;
    const control = this._control;
    const element = this._element;
    control.rotate.off(CONTROL_EVENTS.INPUT_START, this._onInputStart);
    control.rotate.off(CONTROL_EVENTS.INPUT_END, this._onInputEnd);
    control.zoom.off(CONTROL_EVENTS.INPUT_START, this._onInputStart);
    control.zoom.off(CONTROL_EVENTS.INPUT_END, this._onInputEnd);
    control.gyro.off(CONTROL_EVENTS.ENABLE, this._onGyroEnable);
    element.removeEventListener(EVENTS$1.MOUSE_ENTER, this._onMouseEnter, false);
    element.removeEventListener(EVENTS$1.MOUSE_LEAVE, this._onMouseLeave, false);
    this._enabled = false;
    this._interrupted = false;
    this._hovering = false;
    this._clearTimeout();
  }
  _setUninterruptedAfterDelay(delay) {
    if (this._hovering)
      return;
    this._clearTimeout();
    if (delay > 0) {
      this._interruptionTimer = window.setTimeout(() => {
        this._interrupted = false;
        this._interruptionTimer = -1;
      }, delay);
    } else {
      this._interrupted = false;
      this._interruptionTimer = -1;
    }
  }
  _clearTimeout() {
    if (this._interruptionTimer >= 0) {
      window.clearTimeout(this._interruptionTimer);
      this._interruptionTimer = -1;
    }
  }
};
var XRManager = class extends component_esm_default {
  /**
   * Create new instance.
   * 새 인스턴스를 생성합니다.
   * @param ctx - Instance of WebGL context helper {@ko WebGL 콘텍스트 헬퍼의 인스턴스}
   * @param options - Options {@ko 옵션들}
   */
  constructor(ctx, options = {}) {
    super();
    this.destroy = () => {
      this.exit();
      this.off();
    };
    this._onSessionEnd = () => {
      this.exit();
      this.trigger(EVENTS.VR_END);
    };
    this._xrSession = null;
    this._xrRefSpace = null;
    this._ctx = ctx;
    this._options = options;
  }
  /**
   * Returns WebXR availability.
   * @ko WebXR 사용 가능 여부를 반환합니다.
   * @since 4.0.0
   */
  isAvailable() {
    return __awaiter(this, void 0, void 0, function* () {
      const xr = window.navigator.xr;
      if (!xr)
        return false;
      return xr.isSessionSupported(SESSION_VR).then((available) => {
        return available;
      }).catch(() => {
        return false;
      });
    });
  }
  /**
   * Enter VR session
   * @ko VR 세션에 진입합니다.
   * @since 4.0.0
   */
  enter() {
    return __awaiter(this, void 0, void 0, function* () {
      const ctx = this._ctx;
      const xr = window.navigator.xr;
      if (!xr)
        return;
      yield GyroControl.requestSensorPermission();
      const options = Object.assign({
        requiredFeatures: [XR_REFERENCE_SPACE]
      }, this._options);
      yield ctx.makeXRCompatible();
      const session = yield xr.requestSession(SESSION_VR, options);
      ctx.bindXRLayer(session);
      const refSpace = yield session.requestReferenceSpace(XR_REFERENCE_SPACE);
      this._setSession(session, refSpace);
      this.trigger(EVENTS.VR_START, {
        session
      });
    });
  }
  /**
   * Exit VR session
   * @ko VR 세션에서 나갑니다.
   * @since 4.0.0
   */
  exit() {
    const xrSession = this._xrSession;
    if (xrSession) {
      xrSession.end().catch(() => void 0);
    }
    this._xrSession = null;
    this._xrRefSpace = null;
  }
  /**
   * @hidden
   */
  canRender(frame) {
    const refSpace = this._xrRefSpace;
    if (!refSpace)
      return false;
    const pose = frame.getViewerPose(refSpace);
    return !!pose;
  }
  /**
   * @hidden
   */
  getEyeParams(frame) {
    const session = frame.session;
    const pose = frame.getViewerPose(this._xrRefSpace);
    if (!pose)
      return null;
    const glLayer = session.renderState.baseLayer;
    if (!glLayer)
      return null;
    return pose.views.map((view) => {
      const viewport = glLayer.getViewport(view);
      const vMatrix = view.transform.inverse.matrix;
      return {
        viewport,
        vMatrix,
        pMatrix: view.projectionMatrix
      };
    });
  }
  _setSession(session, refSpace) {
    this._xrSession = session;
    this._xrRefSpace = refSpace;
    session.addEventListener(EVENTS$1.XR_END, this._onSessionEnd);
  }
};
var Hotspot = class {
  constructor(element, position) {
    this.element = element;
    this.position = position;
  }
};
var HotspotRenderer = class {
  /**
   * Create new instance
   * @ko 새 인스턴스를 생성합니다.
   * @param rootEl - Container element for hotspots {@ko 핫스팟들의 컨테이너 엘리먼트}
   * @param renderer - instance of WebGLRenderer {@ko WebGLRenderer의 인스턴스}
   * @param options - Hotspot options {@ko Hotspot 옵션들 }
   */
  constructor(rootEl, renderer, {
    zoom = false
  }) {
    this._containerEl = getNullableElement(`.${DEFAULT_CLASS.HOTSPOT_CONTAINER}`, rootEl);
    this._renderer = renderer;
    this._hotspots = [];
    this._zoom = zoom;
  }
  /**
   * Refresh hotspots by collecting hotspot elements from current hotspot root element
   * @ko 현재 핫스팟 루트 엘리먼트 내에서 핫스팟 엘리먼트들을 수집하여 갱신합니다.
   * @throws {ERROR_CODES.INSUFFICIENT_ARGS} if data-position doesn't include all x, y, z values {@ko data-position이 x, y, z좌표를 전부 포함하고 있지 않을 때}
   */
  refresh() {
    const container = this._containerEl;
    if (!container)
      return;
    const hotspotEls = [].slice.apply(container.querySelectorAll(`.${DEFAULT_CLASS.HOTSPOT}`));
    this._hotspots = hotspotEls.map((el) => this._parseHotspot(el));
  }
  /**
   * Render hotspots
   * @ko 핫스팟들을 렌더링합니다.
   * @param camera - Instance of Camera {@ko Camera의 인스턴스}
   */
  render(camera) {
    const hotspots = this._hotspots;
    const halfWidth = this._renderer.width * 0.5;
    const halfHeight = this._renderer.height * 0.5;
    const zoom = camera.zoom;
    const centerTransform = "translate(-50%, -50%)";
    const zoomTransform = this._zoom ? `scale(${zoom})` : "";
    hotspots.forEach((hotspot) => {
      const position = hotspot.position;
      const relPos = vec3_exports.create();
      vec3_exports.copy(relPos, position);
      vec3_exports.transformMat4(relPos, relPos, camera.viewMatrix);
      vec3_exports.transformMat4(relPos, relPos, camera.projectionMatrix);
      if (relPos[2] > 1 || relPos[2] < 0) {
        hotspot.element.classList.remove(DEFAULT_CLASS.HOTSPOT_VISIBLE);
        return;
      }
      const screenPos = vec2_exports.fromValues(relPos[0] * halfWidth + halfWidth, -relPos[1] * halfHeight + halfHeight);
      hotspot.element.classList.add(DEFAULT_CLASS.HOTSPOT_VISIBLE);
      hotspot.element.style.transform = [centerTransform, `translate(${screenPos[0]}px, ${screenPos[1]}px)`, zoomTransform].join(" ");
    });
  }
  _parseHotspot(element) {
    const yawStr = element.dataset.yaw;
    const pitchStr = element.dataset.pitch;
    const positionStr = element.dataset.position;
    if (yawStr || pitchStr) {
      const yaw = yawStr ? parseFloat(yawStr) : 0;
      const pitch = pitchStr ? parseFloat(pitchStr) : 0;
      const position = this._yawPitchToVec3(yaw, pitch);
      return new Hotspot(element, position);
    } else if (positionStr) {
      const pos = positionStr.split(" ").map((val) => parseFloat(val));
      if (pos.length < 3) {
        throw new View360Error(ERROR.MESSAGES.INSUFFICIENT_ARGS(positionStr, 'hotspot attribute "data-position"'), ERROR.CODES.INSUFFICIENT_ARGS);
      }
      return new Hotspot(element, vec3_exports.fromValues(pos[0], pos[1], pos[2]));
    } else {
      const defaultPos = vec3_exports.fromValues(0, 0, -1);
      return new Hotspot(element, defaultPos);
    }
  }
  _yawPitchToVec3(yaw, pitch) {
    const yawRad = yaw * DEG_TO_RAD;
    const pitchRad = pitch * DEG_TO_RAD;
    const position = vec3_exports.create();
    position[1] = Math.sin(pitchRad);
    position[2] = Math.cos(pitchRad);
    position[0] = position[2] * Math.sin(-yawRad);
    position[2] = -position[2] * Math.cos(-yawRad);
    return position;
  }
};
var VertexArrayObject = class {
  get count() {
    return this.geometry.indicies.count;
  }
  constructor(obj, geometry, buffers) {
    this.obj = obj;
    this.geometry = geometry;
    this.buffers = buffers;
  }
};
var WebGLContext = class {
  get canvas() {
    return this._canvas;
  }
  get maxTextureSize() {
    return this._maxTextureSize;
  }
  get isWebGL2() {
    return this._isWebGL2;
  }
  get supportVAO() {
    return this._isWebGL2 || !!this._extensions.vao;
  }
  get lost() {
    return this._contextLost;
  }
  get debug() {
    return this._debug;
  }
  constructor(canvas, debug) {
    this._onContextLost = () => {
      const canvas2 = this._canvas;
      canvas2.classList.add(DEFAULT_CLASS.CTX_LOST);
      this._contextLost = true;
    };
    this._onContextRestore = () => {
      const canvas2 = this._canvas;
      canvas2.classList.remove(DEFAULT_CLASS.CTX_LOST);
      this._contextLost = false;
    };
    this._canvas = canvas;
    this._contextLost = false;
    this._debug = debug;
    this._extensions = {
      vao: null,
      loseContext: null
    };
  }
  init() {
    const canvas = this._canvas;
    const {
      gl,
      isWebGL2
    } = this._getContext(canvas);
    this._gl = gl;
    this._maxTextureSize = gl.getParameter(gl.MAX_TEXTURE_SIZE);
    this._isWebGL2 = isWebGL2;
    if (!this._isWebGL2) {
      this._extensions.vao = gl.getExtension("OES_vertex_array_object");
    }
    this._extensions.loseContext = gl.getExtension("WEBGL_lose_context");
    canvas.addEventListener(EVENTS$1.CONTEXT_LOST, this._onContextLost);
    canvas.addEventListener(EVENTS$1.CONTEXT_RESTORED, this._onContextRestore);
  }
  destroy() {
    const gl = this._gl;
    const canvas = this._canvas;
    if (gl) {
      gl.bindBuffer(gl.ARRAY_BUFFER, null);
      gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);
    }
    canvas.removeEventListener(EVENTS$1.CONTEXT_LOST, this._onContextLost);
    canvas.removeEventListener(EVENTS$1.CONTEXT_RESTORED, this._onContextRestore);
  }
  forceLoseContext() {
    const extension = this._extensions.loseContext;
    if (!extension)
      return;
    extension.loseContext();
  }
  forceRestoreContext() {
    const extension = this._extensions.loseContext;
    if (!extension)
      return;
    extension.restoreContext();
  }
  clear() {
    const gl = this._gl;
    gl.clear(gl.COLOR_BUFFER_BIT);
  }
  resize() {
    const gl = this._gl;
    gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
  }
  viewport(x, y, width, height) {
    const gl = this._gl;
    gl.viewport(x, y, width, height);
  }
  createVAO(geometry, shaderProgram) {
    const nativeVAO = this._createNativeVAO();
    const vao = new VertexArrayObject(nativeVAO, geometry, {
      indicies: this._createBuffer(),
      position: this._createBuffer(),
      uv: this._createBuffer()
    });
    if (nativeVAO) {
      this._bindNativeVAO(nativeVAO);
      this._supplyGeometryData(vao, shaderProgram);
      this._bindNativeVAO(null);
      this._unbindBuffers();
    }
    return vao;
  }
  draw(vao, shaderProgram) {
    const gl = this._gl;
    if (vao.obj) {
      this._bindNativeVAO(vao.obj);
    } else {
      this._supplyGeometryData(vao, shaderProgram);
    }
    gl.drawElements(gl.TRIANGLES, vao.count, gl.UNSIGNED_SHORT, 0);
    if (vao.obj) {
      this._bindNativeVAO(null);
    } else {
      this._unbindBuffers();
    }
  }
  releaseVAO(vao) {
    if (vao.obj) {
      this._deleteNativeVAO(vao.obj);
    }
    this._deleteBuffer(vao.buffers.indicies);
    this._deleteBuffer(vao.buffers.position);
    this._deleteBuffer(vao.buffers.uv);
  }
  getUniformLocations(program, uniforms) {
    const gl = this._gl;
    const uniformLocations = Object.keys(uniforms).reduce((locations, key) => {
      locations[key] = gl.getUniformLocation(program, key);
      return locations;
    }, {});
    return Object.assign(Object.assign({}, this._getCommonUniformLocations(program)), uniformLocations);
  }
  updateCommonUniforms(entity, camera, shaderProgram) {
    const gl = this._gl;
    const uniformLocations = shaderProgram.uniformLocations;
    const matrix = entity.matrix;
    const mvMatrix = mat4_exports.create();
    mat4_exports.multiply(mvMatrix, camera.viewMatrix, matrix);
    gl.uniformMatrix4fv(uniformLocations.uMVMatrix, false, mvMatrix);
    gl.uniformMatrix4fv(uniformLocations.uPMatrix, false, camera.projectionMatrix);
  }
  updateVRUniforms(shaderProgram, mvMatrix, pMatrix, eyeIndex) {
    const gl = this._gl;
    const uniformLocations = shaderProgram.uniformLocations;
    gl.uniformMatrix4fv(uniformLocations.uMVMatrix, false, mvMatrix);
    gl.uniformMatrix4fv(uniformLocations.uPMatrix, false, pMatrix);
    if (uniformLocations.uEye) {
      gl.uniform1f(uniformLocations.uEye, eyeIndex);
    }
  }
  updateUniforms(shaderProgram) {
    const gl = this._gl;
    const uniforms = shaderProgram.uniforms;
    const uniformLocations = shaderProgram.uniformLocations;
    for (const key in uniforms) {
      const uniform = uniforms[key];
      const location = uniformLocations[key];
      if (!uniform)
        continue;
      if (uniform.needsUpdate) {
        uniform.update(gl, location, this._isWebGL2);
      }
    }
  }
  releaseShaderResources(shaderProgram) {
    const gl = this._gl;
    const uniforms = shaderProgram.uniforms;
    for (const key in uniforms) {
      const uniform = uniforms[key];
      if (!uniform)
        continue;
      if (uniform.needsUpdate) {
        uniform.destroy(gl);
      }
    }
    gl.deleteProgram(shaderProgram.program);
  }
  useProgram(shaderProgram) {
    const gl = this._gl;
    gl.useProgram(shaderProgram.program);
  }
  createProgram(vertexShader, fragmentShader) {
    const gl = this._gl;
    const program = gl.createProgram();
    const vs2 = this._compileShader(gl.VERTEX_SHADER, vertexShader);
    const fs2 = this._compileShader(gl.FRAGMENT_SHADER, fragmentShader);
    gl.attachShader(program, vs2);
    gl.attachShader(program, fs2);
    gl.bindAttribLocation(program, 0, "position");
    gl.bindAttribLocation(program, 1, "uv");
    gl.linkProgram(program);
    if (this._debug && !gl.getProgramParameter(program, gl.LINK_STATUS)) {
      let shaderLog = null;
      if (!gl.getShaderParameter(vs2, gl.COMPILE_STATUS)) {
        shaderLog = gl.getShaderInfoLog(vs2);
      } else if (!gl.getShaderParameter(fs2, gl.COMPILE_STATUS)) {
        shaderLog = gl.getShaderInfoLog(fs2);
      }
      throw new View360Error(ERROR.MESSAGES.FAILED_LINKING_PROGRAM(gl.getProgramInfoLog(program), shaderLog), ERROR.CODES.FAILED_LINKING_PROGRAM);
    }
    gl.deleteShader(vs2);
    gl.deleteShader(fs2);
    return program;
  }
  createWebGLTexture(texData) {
    const gl = this._gl;
    const texture = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, texData.wrapS);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, texData.wrapT);
    if (!texData.isVideo() && this._isWebGL2) {
      const gl2 = gl;
      gl2.texStorage2D(gl2.TEXTURE_2D, 1, gl2.RGBA8, texData.width, texData.height);
    }
    return texture;
  }
  createWebGLCubeTexture(texData, size) {
    const gl = this._gl;
    const texture = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_CUBE_MAP, texture);
    gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_WRAP_S, texData.wrapS);
    gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_WRAP_T, texData.wrapT);
    if (this._isWebGL2) {
      const gl2 = gl;
      gl2.texStorage2D(gl2.TEXTURE_CUBE_MAP, 1, gl2.RGBA8, size, size);
    }
    return texture;
  }
  makeXRCompatible() {
    return __awaiter(this, void 0, void 0, function* () {
      const gl = this._gl;
      const attributes = gl.getContextAttributes();
      if (attributes && attributes.xrCompatible !== true) {
        yield gl.makeXRCompatible();
      }
    });
  }
  bindXRLayer(session) {
    const gl = this._gl;
    const xrLayer = new XRWebGLLayer(session, gl);
    session.updateRenderState({
      baseLayer: xrLayer
    });
  }
  bindXRFrame(frame) {
    const gl = this._gl;
    const session = frame.session;
    const baseLayer = session.renderState.baseLayer;
    gl.bindFramebuffer(gl.FRAMEBUFFER, baseLayer.framebuffer);
  }
  useDefaultFrameBuffer() {
    const gl = this._gl;
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
  }
  _createBuffer() {
    return this._gl.createBuffer();
  }
  _deleteBuffer(buffer) {
    return this._gl.deleteBuffer(buffer);
  }
  _createNativeVAO() {
    const gl = this._gl;
    if (this._isWebGL2) {
      return gl.createVertexArray();
    } else {
      const ext = this._extensions.vao;
      return (ext === null || ext === void 0 ? void 0 : ext.createVertexArrayOES()) || null;
    }
  }
  _bindNativeVAO(vao) {
    const gl = this._gl;
    if (this._isWebGL2) {
      gl.bindVertexArray(vao);
    } else {
      const ext = this._extensions.vao;
      ext === null || ext === void 0 ? void 0 : ext.bindVertexArrayOES(vao);
    }
  }
  _deleteNativeVAO(vao) {
    const gl = this._gl;
    if (this._isWebGL2) {
      gl.deleteVertexArray(vao);
    } else {
      const ext = this._extensions.vao;
      ext === null || ext === void 0 ? void 0 : ext.deleteVertexArrayOES(vao);
    }
  }
  _supplyGeometryData(vao, shaderProgram) {
    const geometry = vao.geometry;
    this._supplyIndiciesData(geometry.indicies, vao.buffers.indicies);
    this._supplyAttributeData(geometry.vertices, shaderProgram.program, "position", vao.buffers.position);
    this._supplyAttributeData(geometry.uvs, shaderProgram.program, "uv", vao.buffers.uv);
  }
  _unbindBuffers() {
    const gl = this._gl;
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);
  }
  _supplyIndiciesData(indicies, buffer) {
    const gl = this._gl;
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, indicies.data, gl.STATIC_DRAW);
  }
  _supplyAttributeData(attribute, program, name, buffer) {
    const gl = this._gl;
    const attribLocation = gl.getAttribLocation(program, name);
    if (attribLocation < 0)
      return;
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, attribute.data, gl.STATIC_DRAW);
    gl.vertexAttribPointer(attribLocation, attribute.itemSize, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(attribLocation);
  }
  _compileShader(type, src) {
    const gl = this._gl;
    const shader = gl.createShader(type);
    gl.shaderSource(shader, src);
    gl.compileShader(shader);
    return shader;
  }
  _getCommonUniformLocations(program) {
    const gl = this._gl;
    return {
      uMVMatrix: gl.getUniformLocation(program, "uMVMatrix"),
      uPMatrix: gl.getUniformLocation(program, "uPMatrix")
    };
  }
  _getContext(canvas) {
    const webglIdentifiers = ["webgl2", "webgl", "experimental-webgl", "webkit-3d", "moz-webgl"];
    let context = null;
    let isWebGL2 = false;
    const contextAttributes = {
      preserveDrawingBuffer: false,
      antialias: false
    };
    const onWebglContextCreationError = (e) => e.statusMessage;
    canvas.addEventListener(EVENTS$1.CONTEXT_CREATE_ERROR, onWebglContextCreationError);
    for (const identifier of webglIdentifiers) {
      try {
        context = canvas.getContext(identifier, contextAttributes);
        isWebGL2 = identifier === "webgl2";
      } catch (t) {
      }
      if (context) {
        break;
      }
    }
    canvas.removeEventListener(EVENTS$1.CONTEXT_CREATE_ERROR, onWebglContextCreationError);
    if (!context) {
      throw new View360Error(ERROR.MESSAGES.WEBGL_NOT_SUPPORTED, ERROR.CODES.WEBGL_NOT_SUPPORTED);
    }
    return {
      gl: context,
      isWebGL2
    };
  }
};
var WebGLRenderer = class {
  /**
   * Canvas element
   * @ko 캔버스 엘리먼트
   * @since 4.0.0
   */
  get canvas() {
    return this._canvas;
  }
  /**
   * Canvas's width (`devicePixelRatio` is not applied)
   * @ko 캔버스의 보이는 너비 (`devicePixelRatio`가 적용되지 않은)
   * @since 4.0.0
   */
  get width() {
    return this._elementSize.x;
  }
  /**
   * Canvas's height (`devicePixelRatio` is not applied)
   * @ko 캔버스의 높이 (`devicePixelRatio`가 적용되지 않은)
   * @since 4.0.0
   */
  get height() {
    return this._elementSize.y;
  }
  /**
   * Current `devicePixelRatio` value.
   * @ko 현재 `devicePixelRatio` 값.
   * @since 4.0.0
   * @example
   * ```js
   * cosnt renderingWidth = view360.renderer.width * view360.renderer.pixelRatio;
   * ```
   */
  get pixelRatio() {
    return this._pixelRatio;
  }
  /**
   * Width / height ratio (= width / height)
   * @ko 너비 / 높이의 비율 (= width / height)
   * @since 4.0.0
   * @example
   * ```js
   * const aspect = view360.renderer.width / view360.renderer.pixelRatio;
   * assert(aspect === view360.renderer.aspect);
   * ```
   */
  get aspect() {
    return this._elementSize.x / this._elementSize.y;
  }
  /**
   * Create new instance
   * @ko 새 인스턴스를 생성합니다.
   * @param canvas - Canvas element {@ko 캔버스 엘리먼트}
   * @param debug - Whether to enable WebGL debugging {@ko WebGL debug 활성화 여부 }
   */
  constructor(canvas, debug) {
    this._canvas = canvas;
    this._elementSize = {
      x: 0,
      y: 0
    };
    this._pixelRatio = 1;
    this.ctx = new WebGLContext(canvas, debug);
  }
  /**
   * Destroy instance and release all resources.
   * @ko 인스턴스를 제거하고 사용된 리소스를 전부 해제합니다.
   * @since 4.0.0
   */
  destroy() {
    const canvas = this._canvas;
    this.ctx.destroy();
    canvas.width = 1;
    canvas.height = 1;
  }
  /**
   * Resize canvas and renew inner size cache.
   * @ko 캔버스의 크기를 재계산해서 내부의 사이즈 캐시값을 갱신합니다.
   * @since 4.0.0
   */
  resize() {
    const canvas = this._canvas;
    const canvasSize = this._elementSize;
    const devicePixelRatio = window.devicePixelRatio;
    canvasSize.x = canvas.clientWidth;
    canvasSize.y = canvas.clientHeight;
    canvas.width = canvasSize.x * devicePixelRatio;
    canvas.height = canvasSize.y * devicePixelRatio;
    this._pixelRatio = devicePixelRatio;
    this.ctx.resize();
  }
  /**
   * Render projection
   * @ko 프로젝션을 렌더링합니다.
   * @param projection - Projection to render {@ko 렌더링할 프로젝션}
   * @param cameraa - Camera instance {@ko 카메라의 인스턴스}
   * @since 4.0.0
   */
  render(mesh, camera) {
    const ctx = this.ctx;
    if (ctx.lost)
      return;
    ctx.clear();
    ctx.useProgram(mesh.program);
    ctx.updateCommonUniforms(mesh, camera, mesh.program);
    mesh.update({
      camera
    });
    ctx.updateUniforms(mesh.program);
    ctx.draw(mesh.vao, mesh.program);
  }
  /**
   * Render VR frame, only used for rendering frames inside VR sessions.
   * @ko VR 프레임을 렌더링합니다. VR 세션 진입 도중에만 사용됩니다.
   * @internal
   * @param mesh - Triangle mesh to render {@ko 렌더링할 메쉬}
   * @param vr - Instance of XRManager {@ko XRManager의 인스턴스}
   * @param frame - VR frame {@ko VR 프레임}
   * @since 4.0.0
   */
  renderVR(mesh, vr, frame) {
    const ctx = this.ctx;
    const eyeParams = vr.getEyeParams(frame);
    if (!eyeParams || !mesh)
      return;
    ctx.bindXRFrame(frame);
    ctx.useProgram(mesh.program);
    ctx.updateUniforms(mesh.program);
    eyeParams.forEach((eye, eyeIndex) => {
      const viewport = eye.viewport;
      const mvMatrix = mat4_exports.multiply(mat4_exports.create(), eye.vMatrix, mesh.matrix);
      ctx.viewport(viewport.x, viewport.y, viewport.width, viewport.height);
      ctx.updateVRUniforms(mesh.program, mvMatrix, eye.pMatrix, eyeIndex);
      ctx.draw(mesh.vao, mesh.program);
    });
  }
};
var View360 = class extends component_esm_default {
  /**
   * Root element (`.view360-container`)
   * @ko 루트 엘리먼트 (`.view360-container`)
   * @since 4.0.0
   * @readonly
   * @example
   * ```html
   * <div id="viewer" class="view360-container">
   *   <canvas class="view360-canvas"></canvas>
   * </div>
   * ```
   * ```ts
   * import View360 from "@egjs/view360";
   *
   * const viewer = new View360("#viewer");
   * console.log(viewer.rootEl); // Element with id "viewer"
   * ```
   */
  get rootEl() {
    return this._rootEl;
  }
  /**
   * Projection renderer.
   * @ko 프로젝션 렌더러.
   * @since 4.0.0
   * @readonly
   */
  get renderer() {
    return this._renderer;
  }
  /**
   * Projection camera.
   * @ko 프로젝션 카메라.
   * @since 4.0.0
   * @readonly
   */
  get camera() {
    return this._camera;
  }
  /**
   * Rotate/Zoom Controller.
   * @ko 회전/줌 컨트롤러.
   * @since 4.0.0
   * @readonly
   */
  get control() {
    return this._control;
  }
  /**
   * WebXR-based VR manager.
   * @ko WebXR 기반의 VR 기능 매니저 인스턴스.
   * @since 4.0.0
   * @readonly
   * @example
   * ```ts
   * // Example: Enter VR
   * // This must be called on user interaction, else will be rejected.
   * viewer.vr.enter();
   * ```
   */
  get vr() {
    return this._vr;
  }
  /**
   * Hotspot renderer.
   * You can also change options of {@link View360Options#hotspot} with this.
   * @ko 핫스팟 렌더러 인스턴스.
   * {@link View360Options#hotspot} 옵션 변경도 가능합니다.
   * @since 4.0.0
   * @readonly
   */
  get hotspot() {
    return this._hotspot;
  }
  /**
   * An array of plugins added.
   * @ko 추가된 플러그인의 배열
   * @since 4.0.0
   * @readonly
   * @example
   * ```ts
   * const viewer = new View360("#el_id", {
   *   plugins: [new ControlBar()]
   * });
   *
   * console.log(viewer.plugins); // [ControlBar]
   *
   * viewer.addPlugins(new LoadingSpinner()) // [ControlBar, LoadingSpinner];
   * ```
   */
  get plugins() {
    return this._plugins;
  }
  /**
   * An instance of {@link Projection} that currently enabled. `null` if not initialized yet.
   * You should call {@link View360#load} to change panorama src or projection type.
   * @ko 현재 사용중인 {@link Projection}의 인스턴스. 프로젝션을 활성화하지 않았을 경우 `null`입니다.
   * 파노라마 이미지 소스나 프로젝션 타입을 변경하려면 {@link View360#load}를 호출하면 됩니다.
   * @since 4.0.0
   * @example
   * ```ts
   * const viewer = new View360
   * ```
   */
  get projection() {
    return this._projection;
  }
  set projection(val) {
    if (this._initialized && val) {
      this.load(val);
    } else {
      this._projection = val;
    }
  }
  /**
   * An instance of triangle mesh to render.
   * @ko 렌더링할 triangle mesh의 인스턴스
   * @internal
   * @since 4.0.0
   * @readonly
   */
  get mesh() {
    return this._mesh;
  }
  /**
   * A boolean value whether {@link View360#init init()} is called before.
   * @ko {@link View360#init init()}이 호출되었는지 여부를 가리키는 값
   * @since 4.0.0
   * @readonly
   * @example
   * ```ts
   * const viewer = new View360("#el", { autoInit: false });
   *
   * console.log(viewer.initialized); // false
   *
   * await viewer.init();
   *
   * console.log(viewer.initialized); // true
   * ```
   */
  get initialized() {
    return this._initialized;
  }
  /**
   * Instance of the Autoplay manager.
   * You can also change {@link View360Options#autoplay} options with this.
   * @ko Autoplay 기능의 매니저 인스턴스.
   * 이 인스턴스를 통해 {@link View360Options#autoplay} 옵션을 변경하는 것도 가능합니다.
   * @since 4.0.0
   * @readonly
   * @example
   * ```ts
   * // Disable autoplay
   * viewer.autoplay.disable();
   * ```
   */
  get autoplay() {
    return this._autoplay;
  }
  /**
   * When this value is `true` and {@link View360Options#projection} is set, {@link View360#init init()} will be called automatically when instance is created.
   * @ko 이 값이 `true`이고, {@link View360Options#projection}이 설정되었으면, 인스턴스 생성 시점에 자동으로 {@link View360#init init()}을 호출합니다.
   * @default true
   * @since 4.0.0
   * @example
   * ```ts
   * import View360, { EquirectProjection, EVENTS } from "@egjs/view360";
   *
   * // viewer.init() is called on instance creation
   * // But as `init` is asynchronous, you should wait for "ready" event if you want to do something after initialization.
   * const viewer = new View360("#el_id", {
   *   autoInit: true,
   *   projection: new EquirectProjection({ src: "SRC_TO_URL" })
   * });
   *
   * console.log(viewer.initialized); // false, as `init` is asynchronous
   *
   * viewer.once(EVENTS.READY, () => {
   *   console.log(viewer.initialized); // true
   * });
   * ```
   */
  get autoInit() {
    return this._autoInit;
  }
  /**
   * When `true`, {@link View360#resize} is called when the canvas size is changed.
   * @ko `true`일 경우, 캔버스의 크기가 변경되었을 때 자동으로 {@link View360#resize}를 호출합니다.
   * @default true
   * @since 4.0.0
   * @see View360#useResizeObserver
   * @example
   * ```ts
   * const viewer = new View360("#el_id", {
   *   autoResize: true
   * });
   *
   * // This can trigger `viewer.resize()` if the canvas size was not 400px
   * const canvas = viewer.renderer.canvas;
   * canvas.style.width = "400px";
   * ```
   */
  get autoResize() {
    return this._autoResize;
  }
  /**
   * CSS selector for canvas element to render panorama image/video.
   * The canvas element should be placed inside the root element. (Dont' have to be direct child)
   * @ko 파노라마 이미지/비디오를 렌더링할 canvas 엘리먼트의 CSS 선택자
   * 캔버스 엘리먼트는 루트 엘리먼트 내부에 있어야합니다. 루트 엘리먼트의 직계 자식 엘리먼트(Direct child element)일 필요는 없습니다.
   * @default "canvas"
   * @since 4.0.0
   * @example
   * ```html
   * <div class="view360-container">
   *   <canvas id="not_this_one"></canvas>
   *   <!-- This will be selected -->
   *   <canvas id="canvas_to_select"></canvas>
   * </div>
   * ```
   *
   * ```ts
   * const viewer = new View360("#el_id", {
   *   canvasSelector: "#canvas_to_select"
   * });
   * ```
   */
  get canvasSelector() {
    return this._canvasSelector;
  }
  /**
   * When `true`, it will use {@link ResizeObserver} API to detect canvas size change when {@link View360Options#autoResize} is enabled.
   * @ko `true`일 때 {@link View360Options#autoResize}가 활성화되었으면, 사용 가능한 환경에서 {@link ResizeObserver} API를 사용해서 캔버스 크기 변화를 추적합니다.
   * @default true
   * @since 4.0.0
   */
  get useResizeObserver() {
    return this._useResizeObserver;
  }
  /**
   * {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex tabindex} attribute for the canvas element.
   * This is necessary for the keyboard controls.
   * By default, `0` will be assigned. `null` to disable.
   * @ko 캔버스 엘리먼트에 적용할 {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex tabindex} 어트리뷰트의 값.
   * 이 값을 설정해야만 키보드 컨트롤을 사용 가능합니다.
   * 기본값으로 `0`이 설정됩니다. `null`로 지정하면 `tabindex`를 설정하지 않습니다.
   * @see RotateControlOptions#disableKeyboard
   * @default 0
   * @since 4.0.0
   * @example
   * ```ts
   * const viewer = new View360("#el_id", {
   *   tabindex: 5
   * });
   * ```
   *
   * ```html
   * <!-- After init -->
   * <div class="view360-container">
   *   <canvas class="view360-canvas" tabindex="5"></canvas>
   * </div>
   * ```
   */
  get tabIndex() {
    return this._tabIndex;
  }
  set tabIndex(val) {
    const canvas = this._renderer.canvas;
    this._tabIndex = val;
    if (val != null) {
      canvas.tabIndex = val;
    } else {
      canvas.removeAttribute("tabindex");
    }
  }
  /**
   * A maximum delta time between frames in seconds.
   * It can prevent camera or control changing too fast when frame being late.
   * @ko 프레임간 시간 차이의 최대값. (초 단위)
   * 퍼포먼스 등의 이유로 프레임 렌더링이 늦어졌을 때, 화면이 갑작스럽게 바뀌는 것을 막아줍니다.
   * @default 1 / 30
   * @since 4.0.0
   */
  get maxDeltaTime() {
    return this._animator.maxDeltaTime;
  }
  set maxDeltaTime(val) {
    this._animator.maxDeltaTime = val;
  }
  /**
   * Enable WebGL debugging. Setting this to `true` can decrease performance.
   * This is used internally on developing View360.
   * @ko WebGL 디버깅을 활성화합니다. 이 값을 `true`로 할 경우 성능이 하락할 수 있습니다.
   * 이 옵션은 View360을 개발하기 위해 내부적으로 사용됩니다.
   * @default false
   */
  get debug() {
    return this._debug;
  }
  set debug(val) {
    this._debug = val;
  }
  // Camera options
  /**
   * Initial yaw (y-axis rotation) value for camera. (in degrees, °)
   * As View360 uses right-handed coordinate system internally, camera will rotate counter-clockwise by this value.
   * @ko 카메라의 초기 yaw(y축 회전)값 (도 단위, °)
   * View360은 오른손 좌표계를 사용하기 때문에, 카메라가 해당 값만큼 시계 반대방향으로 회전합니다.
   * @default 0
   * @since 4.0.0
   * @example
   * ```ts
   * const viewer = new View360("#el_id", {
   *   initialYaw: 30
   * });
   *
   * viewer.on("ready", () => {
   *   console.log(viewer.camera.yaw); // 30
   * });
   * ```
   */
  get initialYaw() {
    return this._camera.initialYaw;
  }
  set initialYaw(val) {
    this._camera.initialYaw = val;
  }
  /**
   * Initial pitch (x-axis rotation) value for camera. (in degrees, °)
   * As View360 uses right-handed coordinate system internally, positive value will make camera to look upside, while negative value will look down.
   * @ko 카메라의 초기 pitch(x축 회전)값 (도 단위, °)
   * View360은 오른손 좌표계를 사용하기 때문에, 양(+)의 값은 카메라가 위를 보게 하고, 음(-)의 값은 카메라가 아래를 보게 합니다.
   * @default 0
   * @since 4.0.0
   * @example
   * ```ts
   * const viewer = new View360("#el_id", {
   *   initialPitch: 60
   * });
   *
   * viewer.on("ready", () => {
   *   console.log(viewer.camera.pitch); // 60
   * });
   * ```
   */
  get initialPitch() {
    return this._camera.initialPitch;
  }
  set initialPitch(val) {
    this._camera.initialPitch = val;
  }
  /**
   * Initial zoom value for camera.
   * Setting this value to `2` will enlarge panorama 200% by width.
   * @ko 카메라의 초기 줌 값.
   * 이 값을 `2`로 설정할 경우 파노라마 이미지를 가로 기준 200%만큼 확대합니다.
   * @default 1
   * @since 4.0.0
   * @example
   * ```ts
   * const viewer = new View360("#el_id", {
   *   initialZoom: 2
   * });
   *
   * viewer.on("ready", () => {
   *   console.log(viewer.camera.zoom); // 2
   * });
   * ```
   */
  get initialZoom() {
    return this._camera.initialZoom;
  }
  set initialZoom(val) {
    this._camera.initialZoom = val;
  }
  /**
   * Restrict yaw(y-axis rotation) range. (in degrees, °)
   * @ko yaw(y축 회전) 범위를 제한합니다. (도 단위, °)
   * @since 4.0.0
   * @example
   * ```ts
   * const viewer = new View360("#el_id", {
   *   yawRange: [-30, 30]
   * });
   *
   * viewer.on("ready", () => {
   *   console.log(viewer.camera.yaw); // 0
   *   viewer.camera.lookAt({ yaw: 60  });
   *   console.log(viewer.camera.yaw); // 30
   * });
   * ```
   */
  get yawRange() {
    return this._camera.yawRange;
  }
  set yawRange(val) {
    this._camera.yawRange = val;
    if (this._projection)
      this._projection.updateCamera(this._camera);
  }
  /**
   * Restrict pitch(x-axis rotation) range. (in degrees, °)
   * @ko pitch(x축 회전) 범위를 제한합니다. (도 단위, °)
   * @default null
   * @since 4.0.0
   * @example
   * ```ts
   * const viewer = new View360("#el_id", {
   *   pitchRange: [-45, 45]
   * });
   *
   * viewer.on("ready", () => {
   *   console.log(viewer.camera.pitch); // 0
   *   viewer.camera.lookAt({ pitch: 60  });
   *   console.log(viewer.camera.pitch); // 45
   * });
   * ```
   */
  get pitchRange() {
    return this._camera.pitchRange;
  }
  set pitchRange(val) {
    this._camera.pitchRange = val;
    if (this._projection)
      this._projection.updateCamera(this._camera);
  }
  /**
   * Restrict camera zoom range.
   * If `null`, a default zoom range from `0.6` to `10` will be used.
   * @ko 카메라 줌 범위를 제한합니다.
   * `null`일 경우 기본값으로 `0.6`에서 `10`의 범위를 사용합니다.
   * @default null
   * @since 4.0.0
   * @example
   * ```ts
   * const viewer = new View360("#el_id", {
   *   zoomRange: [0.5, 4]
   * });
   *
   * viewer.on("ready", () => {
   *   console.log(viewer.camera.zoom); // 1
   *   viewer.camera.lookAt({ zoom: 6  });
   *   console.log(viewer.camera.zoom); // 4
   * });
   * ```
   */
  get zoomRange() {
    return this._camera.zoomRange;
  }
  set zoomRange(val) {
    this._camera.zoomRange = val;
    if (this._projection)
      this._projection.updateCamera(this._camera);
  }
  /**
   * Camera's horizontal FOV(Field of View). (in degrees, °)
   * @ko 카메라의 수평 FOV(Field of View) 값. (도 단위, °)
   * @default 90
   * @since 4.0.0
   * @example
   * ```ts
   * // Init with fov: 120
   * const viewer = new View360("#el_id", { fov: 120 });
   *
   * // Back to 90
   * viewer.fov = 90;
   * ```
   */
  get fov() {
    return this._camera.fov;
  }
  set fov(val) {
    const camera = this._camera;
    const control = this._control;
    camera.fov = val;
    camera.updateMatrix();
    control.sync();
  }
  // Control options
  /**
   * A control for camera rotation.
   * You can also change options of {@link View360Options#rotate} with this.
   * @ko 카메라 회전을 담당하는 컨트롤.
   * {@link View360Options#rotate} 옵션 변경도 가능합니다.
   * @since 4.0.0
   * @readonly
   */
  get rotate() {
    return this._control.rotate;
  }
  /**
   * A control for camera zoom.
   * You can also change options of {@link View360Options#zoom} with this.
   * @ko 카메라 줌을 담당하는 컨트롤.
   * {@link View360Options#zoom} 옵션 변경도 가능합니다.
   * @since 4.0.0
   * @readonly
   */
  get zoom() {
    return this._control.zoom;
  }
  /**
   * A control for camera rotation with gyroscope input.
   * You can also change options of {@link View360Options#gyro} with this.
   * @ko 자이로스코프를 통한 카메라 회전을 담당하는 컨트롤.
   * {@link View360Options#gyro} 옵션 변경도 가능합니다.
   * @since 4.0.0
   * @readonly
   */
  get gyro() {
    return this._control.gyro;
  }
  /**
   * Apply CSS {@link https://developer.mozilla.org/en-US/docs/Web/CSS/cursor cursor} by current state of input when using mouse.
   * If `true`, this will add CSS style to canvas element. It'll apply `cursor: "grab"` by default and `cursor: "grabbing"` when holding the mouse button.
   * @ko 마우스 사용시 CSS {@link https://developer.mozilla.org/en-US/docs/Web/CSS/cursor cursor}값을 자동으로 변경할지 여부.
   * `true`일 경우 기본 상태에서 `cursor: "grab"`을, 입력 도중에 `cursor: "grabbing"`을 캔버스에 적용합니다.
   * @default true
   * @since 4.0.0
   */
  get useGrabCursor() {
    return this._control.useGrabCursor;
  }
  set useGrabCursor(val) {
    this._control.useGrabCursor = val;
  }
  /**
   * Disable context menu which pops up on mouse right click.
   * @ko 마우스 우클릭시 표시되는 컨텍스트 메뉴를 비활성화합니다.
   * @default false
   * @since 4.0.0
   */
  get disableContextMenu() {
    return this._control.disableContextMenu;
  }
  set disableContextMenu(val) {
    this._control.disableContextMenu = val;
  }
  /**
   * If `true`, enables scroll on mobile(touch) devices on canvas.
   * :::caution
   * When this option is enabled, users must swipe horizontally first then vertically to change view up or down.
   * :::
   * @ko `true`로 설정할 경우, 모바일(터치) 환경의 캔버스 영역 내에서 스크롤을 가능하게 합니다.
   * :::caution
   * 이 값을 활성화할 경우, 사용자가 카메라 뷰를 위/아래로 바꾸기 위해서는 먼저 가로로 스와이프한 이후에 세로로 스와이프해야만 합니다.
   * :::
   * @since 4.0.0
   * @default true
   */
  get scrollable() {
    return this._control.scrollable;
  }
  set scrollable(val) {
    this._control.scrollable = val;
  }
  /**
   * If `true`, enables scroll by mouse wheel on canvas.
   * :::caution
   * When this option is enabled, zoom by mouse wheel will be disabled.
   * :::
   * @ko `true`로 설정할 경우, 캔버스 영역 내에서 마우스 휠을 이용한 페이지 스크롤이 가능해집니다.
   * :::caution
   * 이 값을 활성화할 경우, 마우스 휠을 통한 줌이 불가능하게 됩니다.
   * :::
   * @since 4.0.0
   * @default false
   */
  get wheelScrollable() {
    return this._control.wheelScrollable;
  }
  set wheelScrollable(val) {
    this._control.wheelScrollable = val;
  }
  /**
   * Create new instance of View360
   * @ko View360의 새로운 인스턴스를 생성합니다
   * @param root - Root element(`.view360-container`) to mount View360
   * Can be either a CSS selector or HTMLElement.
   * {@ko View360을 마운트할 루트 엘리먼트, CSS 셀렉터나 HTMLElement를 지정 가능합니다.}
   * @param options - Options to apply
   * {@ko 적용할 옵션들}
   * @example
   * ```ts
   * import View360, { EquirectProjection } from "@egjs/view360";
   *
   * // Create new View360 instance
   * const viewer = new View360("#id-of-a-container", {
   *   projection: new EquirectProjection({
   *     src: "URL_TO_PANORAMA_IMAGE_OR_VIDEO",
   *   })
   * });
   * ```
   */
  constructor(root, {
    projection = null,
    initialYaw = 0,
    initialPitch = 0,
    initialZoom = 1,
    yawRange = null,
    pitchRange = null,
    zoomRange = null,
    fov = 90,
    useGrabCursor = true,
    disableContextMenu = false,
    rotate: rotate3 = true,
    zoom = true,
    gyro = false,
    scrollable = true,
    wheelScrollable = false,
    autoplay = false,
    hotspot = {},
    autoInit = true,
    autoResize = true,
    canvasSelector = "canvas",
    useResizeObserver = true,
    on = {},
    plugins = [],
    maxDeltaTime = 1 / 30,
    tabIndex = 0,
    debug = false
  } = {}) {
    super();
    this.renderFrame = (delta) => {
      const camera = this._camera;
      const renderer = this._renderer;
      const control = this._control;
      const hotspot2 = this._hotspot;
      const autoPlayer = this._autoplay;
      const mesh = this._mesh;
      if (!mesh)
        return;
      this._emit(EVENTS.BEFORE_RENDER);
      if (autoPlayer.playing) {
        autoPlayer.update(delta);
        control.sync();
      }
      if (camera.animation) {
        camera.animation.update(delta);
      } else {
        control.update(delta);
      }
      renderer.render(mesh, camera);
      hotspot2.render(camera);
      if (camera.changed) {
        this._emit(EVENTS.VIEW_CHANGE, {
          yaw: camera.yaw,
          pitch: camera.pitch,
          zoom: camera.zoom,
          quaternion: [camera.quaternion[0], camera.quaternion[1], camera.quaternion[2], camera.quaternion[3]]
        });
      }
      camera.onFrameRender();
      this._emit(EVENTS.RENDER);
    };
    this._renderFrameOnDemand = (delta) => {
      const camera = this._camera;
      const control = this._control;
      const autoplay2 = this._autoplay;
      const mesh = this._mesh;
      const texture = mesh === null || mesh === void 0 ? void 0 : mesh.getTexture();
      if (!this._initialized || !texture)
        return;
      if (!camera.animation && !control.animating && !autoplay2.playing && !texture.isVideo())
        return;
      this.renderFrame(delta);
    };
    this._renderVRFrame = (_delta, frame) => {
      const vr = this._vr;
      const mesh = this._mesh;
      const renderer = this._renderer;
      if (!mesh)
        return;
      this._emit(EVENTS.BEFORE_RENDER);
      renderer.renderVR(mesh, vr, frame);
      this._emit(EVENTS.RENDER);
    };
    this._rootEl = getElement(root);
    this._plugins = plugins;
    this._initialized = false;
    this._autoInit = autoInit;
    this._autoResize = autoResize;
    this._canvasSelector = canvasSelector;
    this._useResizeObserver = useResizeObserver;
    this._tabIndex = tabIndex;
    this._debug = debug;
    const canvas = findCanvas(this._rootEl, canvasSelector);
    this._renderer = new WebGLRenderer(canvas, debug);
    this._camera = new Camera({
      initialYaw,
      initialPitch,
      initialZoom,
      fov,
      yawRange,
      pitchRange,
      zoomRange
    });
    this._control = new PanoControl(canvas, this._camera, {
      useGrabCursor,
      scrollable,
      wheelScrollable,
      disableContextMenu,
      rotate: rotate3,
      zoom,
      gyro
    });
    this._animator = new FrameAnimator(maxDeltaTime);
    this._autoplay = new Autoplay(this, canvas, autoplay);
    this._projection = projection;
    this._mesh = null;
    this._autoResizer = new AutoResizer(useResizeObserver, () => this.resize());
    this._vr = new XRManager(this._renderer.ctx);
    this._hotspot = new HotspotRenderer(this._rootEl, this._renderer, hotspot);
    this._addEventHandlers(on);
    if (projection && autoInit) {
      this.init();
    }
  }
  /**
   * Destroy instance and release all resources.
   * @ko 인스턴스를 제거하고 모든 리소스를 해제합니다.
   * @since 4.0.0
   */
  destroy() {
    this._camera.destroy();
    this._animator.stop();
    this._renderer.destroy();
    this._control.destroy();
    this._autoResizer.disable();
    if (this._mesh) {
      this._mesh.destroy(this._renderer.ctx);
      this._mesh = null;
    }
    this._plugins.forEach((plugin) => plugin.destroy(this));
    this._initialized = false;
  }
  /**
   * Initialize inner components and load projection src.
   * @ko 내부 컴포넌트들을 초기화하고 프로젝션 소스를 로드합니다.
   * @since 4.0.0
   */
  init() {
    return __awaiter(this, void 0, void 0, function* () {
      if (!this._projection) {
        throw new View360Error(ERROR.MESSAGES.PROVIDE_PROJECTION_FIRST, ERROR.CODES.PROVIDE_PROJECTION_FIRST);
      }
      const renderer = this._renderer;
      const camera = this._camera;
      const control = this._control;
      const animator = this._animator;
      const hotspot = this._hotspot;
      const projection = this._projection;
      const canvas = renderer.canvas;
      this._bindComponentEvents();
      renderer.ctx.init();
      this._resizeComponents();
      camera.updateMatrix();
      if (this._autoResize) {
        this._autoResizer.enable(canvas);
      }
      if (!this._autoplay.enableBlocked) {
        this._autoplay.enable();
      }
      this._plugins.forEach((plugin) => {
        plugin.init(this);
      });
      const texture = yield this._loadTexture(projection);
      this._applyProjection(projection, texture);
      hotspot.refresh();
      animator.start(this._renderFrameOnDemand);
      yield control.enable();
      if (this._tabIndex != null && !canvas.hasAttribute("tabIndex")) {
        canvas.tabIndex = this._tabIndex;
      }
      this._initialized = true;
      this.renderFrame(0);
      this._emit(EVENTS.READY);
    });
  }
  /**
   * Load new panorama image/video and display it.
   * This will {@link View360#init init()} View360 if it's not initialized yet.
   * @ko 새로운 파노라마 이미지 혹은 비디오를 로드하고 표시합니다.
   * 만약 View360이 아직 초기화되지 않았다면, {@link View360#init init()}을 호출합니다.
   * @param projection - Projection & video options for new source. {@ko 새로운 파노라마 이미지/비디오에 적용할 옵션들}
   * @returns `Promise<true>` if load was successful. {@ko 프로젝션 로드에 성공했을 경우 `Promise<true>`를 반환합니다. }
   * @since 4.0.0
   * @example
   * ```ts
   * // Change to video
   * viewer.load({
   *   src: "URL_TO_NEW_VIDEO",
   *   video: true
   * });
   * ```
   */
  load(projection) {
    return __awaiter(this, void 0, void 0, function* () {
      if (!projection)
        return false;
      if (this._initialized) {
        const texture = yield this._loadTexture(projection);
        this._applyProjection(projection, texture);
        this.renderFrame(0);
      } else {
        this._projection = projection;
        this.init();
      }
      return true;
    });
  }
  /**
   * Refresh component's size by current
   * @ko View360이 내부적으로 캐시하고 있는 엘리먼트 크기를 현재 크기로 갱신합니다.
   * @since 4.0.0
   */
  resize() {
    if (!this._initialized)
      return;
    this._resizeComponents();
    this.renderFrame(0);
    const {
      width,
      height
    } = this._renderer;
    this._emit(EVENTS.RESIZE, {
      width,
      height
    });
  }
  /**
   * Add new plugins
   * @ko 새로운 플러그인을 추가합니다.
   * @param plugins Plugins to add {@ko 추가할 플러그인들}
   * @see View360Options#plugins
   * @since 4.0.0
   * @example
   * ```ts
   * // Add a single plugin
   * viewer.addPlugins(new ControlBar());
   *
   * // Add multiple plugins
   * viewer.addPlugins(new ControlBar(), new LoadingSpinner());
   * ```
   */
  addPlugins(...plugins) {
    if (this._initialized) {
      plugins.forEach((plugin) => {
        plugin.init(this);
      });
    }
    this._plugins.push(...plugins);
  }
  /**
   * Remove plugins.
   * @ko 플러그인을 제거합니다.
   * @param plugins Plugins to remove {@ko 제거할 플러그인들}
   * @since 4.0.0
   * @example
   * ```ts
   * // Remove a single plugin
   * viewer.removePlugins(plugin1);
   *
   * // Remove multiple plugins
   * viewer.removePlugins(plugin2, plugin3);
   * ```
   */
  removePlugins(...plugins) {
    plugins.forEach((plugin) => {
      const pluginIdx = this._plugins.indexOf(plugin);
      if (pluginIdx < 0)
        return;
      plugin.destroy(this);
      this._plugins.splice(pluginIdx, 1);
    });
  }
  _emit(eventName, ...params) {
    const evtParams = params ? params[0] : {};
    this.trigger(eventName, Object.assign({
      type: eventName,
      target: this
    }, evtParams));
  }
  _applyProjection(projection, texture) {
    const camera = this._camera;
    const control = this._control;
    const renderer = this._renderer;
    const mesh = this._mesh;
    if (mesh) {
      mesh.destroy(renderer.ctx);
    }
    const newMesh = projection.createMesh(renderer.ctx, texture);
    projection.updateCamera(camera);
    projection.updateControl(control);
    this._mesh = newMesh;
    this._emit(EVENTS.PROJECTION_CHANGE, {
      projection
    });
  }
  _loadTexture(projection) {
    return __awaiter(this, void 0, void 0, function* () {
      const contentLoader = new TextureLoader();
      const {
        src,
        video
      } = projection;
      this._emit(EVENTS.LOAD_START, {
        src,
        video
      });
      const texture = yield contentLoader.load(src, video);
      this._emit(EVENTS.LOAD, {
        src,
        video
      });
      return texture;
    });
  }
  _resizeComponents() {
    const renderer = this._renderer;
    const camera = this._camera;
    const control = this._control;
    renderer.resize();
    camera.resize(renderer.width, renderer.height);
    control.resize(renderer.width, renderer.height);
  }
  _addEventHandlers(events) {
    Object.keys(events).forEach((evtName) => {
      this.on(evtName, events[evtName]);
    });
  }
  _bindComponentEvents() {
    const root = this._rootEl;
    const control = this._control;
    const animator = this._animator;
    const renderer = this._renderer;
    const vr = this._vr;
    const controlEventsToPropagate = [CONTROL_EVENTS.STATIC_CLICK, CONTROL_EVENTS.INPUT_START, CONTROL_EVENTS.INPUT_END];
    controlEventsToPropagate.forEach((evtName) => {
      control.rotate.on(evtName, (evt) => {
        this._emit(evtName, evt);
      });
      control.zoom.on(evtName, (evt) => {
        this._emit(evtName, evt);
      });
    });
    vr.on(EVENTS.VR_START, (evt) => {
      root.classList.add(DEFAULT_CLASS.IN_VR);
      animator.changeContext(evt.session);
      animator.start(this._renderVRFrame);
      this._emit(EVENTS.VR_START);
    });
    vr.on(EVENTS.VR_END, () => {
      root.classList.remove(DEFAULT_CLASS.IN_VR);
      renderer.ctx.useDefaultFrameBuffer();
      animator.changeContext(window);
      animator.start(this._renderFrameOnDemand);
      this.resize();
      this._emit(EVENTS.VR_END);
    });
  }
};
View360.VERSION = "4.0.0-beta.7";
var Object3D = class extends component_esm_default {
  /**
   * Create new instance.
   * @ko 새로운 인스턴스를 생성합니다.
   */
  constructor() {
    super();
    this.matrix = mat4_exports.create();
    this.rotation = quat_exports.create();
    this.position = vec3_exports.fromValues(0, 0, 0);
    this.scale = vec3_exports.fromValues(1, 1, 1);
  }
  /**
   * Update local matrix of the object.
   * @ko 오브젝트의 local matrix를 갱신합니다.
   * @since 4.0.0
   */
  updateMatrix() {
    mat4_exports.fromRotationTranslationScale(this.matrix, this.rotation, this.position, this.scale);
  }
  update(ctx) {
    this.trigger(OBJECT_3D_EVENTS.UPDATE, ctx);
  }
};
var LoadingSpinner = class _LoadingSpinner {
  /**
   * Create a new instance of LoadingSpinner. {@ko LoadingSpinner의 새 인스턴스를 생성합니다.}
   * @param options Options {@ko 옵션들}
   */
  constructor({
    className = {}
  } = {}) {
    this._startLoading = ({
      target: viewer
    }) => {
      viewer.rootEl.appendChild(this._container);
      if (viewer.initialized) {
        viewer.once(EVENTS.LOAD, this._detachElements);
      } else {
        viewer.once(EVENTS.READY, this._detachElements);
      }
    };
    this._detachElements = ({
      target: viewer
    }) => {
      const container = this._container;
      if (!container)
        return;
      if (container.parentElement === viewer.rootEl) {
        viewer.rootEl.removeChild(container);
      }
    };
    this.className = className;
    this._container = this._createElements();
  }
  init(viewer) {
    viewer.on(EVENTS.LOAD_START, this._startLoading);
  }
  destroy(viewer) {
    viewer.off(EVENTS.LOAD_START, this._startLoading);
    this._detachElements({
      target: viewer
    });
  }
  _createElements() {
    const className = Object.assign(Object.assign({}, this.className), _LoadingSpinner.DEFAULT_CLASS);
    const container = createElement(className.CONTAINER);
    const ring = createElement(className.RING);
    container.appendChild(ring);
    return container;
  }
};
LoadingSpinner.DEFAULT_CLASS = {
  /**
   * A class name for the container element
   * @ko 컨테이너 엘리먼트의 클래스 이름
   * @since 4.0.0
   */
  CONTAINER: "view360-spinner",
  /**
   * A class name for the spinning ring element
   * @ko 돌아가는 링 엘리먼트의 클래스 이름
   * @since 4.0.0
   */
  RING: "view360-spinner-ring"
};
var ControlBarItem = class {
  /**
   * Create new instance of the ControlBarItem
   * @ko ControlBarItem의 새로운 인스턴스를 생성합니다.
   * @param options Options {@ko 옵션들}
   */
  constructor(options) {
    this.position = options.position;
    this.order = options.order;
  }
};
var CONTROL_BAR_DEFAULT_CLASS = {
  CONTROLS_ROOT: "view360-controls",
  CONTROLS_BG: "view360-controls-background",
  CONTROLS_MAIN: "view360-controls-main",
  CONTROLS_TOP: "view360-controls-top",
  CONTROLS_BOTTOM: "view360-controls-bottom",
  CONTROLS_MID: "view360-controls-mid",
  CONTROLS_LEFT: "view360-controls-left",
  CONTROLS_RIGHT: "view360-controls-right",
  CONTROLS_FLOAT_LEFT: "view360-controls-float-left",
  CONTROLS_FLOAT_RIGHT: "view360-controls-float-right",
  CONTROLS_BUTTON: "view360-controls-button",
  PROGRESS_ROOT: "view360-controls-progress",
  VOLUME_ROOT: "view360-controls-volume",
  RANGE_ROOT: "view360-range",
  RANGE_TRACK: "view360-range-track",
  RANGE_THUMB: "view360-range-thumb",
  RANGE_FILLER: "view360-range-filler",
  PLAY_BUTTON: "view360-controls-play",
  PAUSE_BUTTON: "view360-controls-pause",
  UNMUTED_BUTTON: "view360-controls-unmuted",
  MUTED_BUTTON: "view360-controls-muted",
  FULLSCREEN_BUTTON: "view360-controls-fullscreen",
  FULLSCREEN_EXIT_BUTTON: "view360-controls-fullscreen-exit",
  VR_BUTTON: "view360-controls-vr",
  GYRO_ENABLED: "view360-controls-gyro-enabled",
  GYRO_DISABLED: "view360-controls-gyro-disabled",
  VIDEO_TIME_DISPLAY: "view360-controls-time",
  PIEVIEW_ROOT: "view360-controls-pie",
  FIXED: "view360-controls-fixed",
  UNAVAILABLE: "view360-controls-unavailable",
  HIDDEN: "view360-controls-hidden"
};
var CONTROL_BAR_ITEM_POSITION = {
  /**
   * Place control bar item floating at top-left corner
   * @ko 아이템을 왼쪽 위 구석에 표시합니다.
   * @since 4.0.0
   */
  TOP_LEFT: "top-left",
  /**
   * Place control bar item floating at top-right corner
   * @ko 아이템을 오른쪽 위 구석에 표시합니다.
   * @since 4.0.0
   */
  TOP_RIGHT: "top-right",
  /**
   * Place control bar item at upper block inside the bottom control bar.
   * @ko 아이템을 하단에 표시되는 컨트롤바 내에서 위쪽 블럭에 표시합니다.
   * @since 4.0.0
   */
  MAIN_TOP: "main-top",
  /**
   * Place control bar item at lower block inside the bottom control bar.
   * @ko 아이템을 하단에 표시되는 컨트롤바 내에서 하단 블럭에 표시합니다.
   * @since 4.0.0
   */
  MAIN_BOTTOM: "main-bottom",
  /**
   * Place control bar item at center-left block inside the bottom control bar.
   * @ko 아이템을 하단에 표시되는 컨트롤바 내에서 중간 왼쪽 블럭에 표시합니다.
   * @since 4.0.0
   */
  MAIN_LEFT: "main-left",
  /**
   * Place control bar item at center-right block inside the bottom control bar.
   * @ko 아이템을 하단에 표시되는 컨트롤바 내에서 중간 오른쪽 블럭에 표시합니다.
   * @since 4.0.0
   */
  MAIN_RIGHT: "main-right"
};
var RangeControl = class extends component_esm_default {
  /**
   *
   */
  constructor() {
    super();
    this._onHold = ({
      srcEvent,
      isTouch
    }) => {
      var _a2;
      const bbox = this._bbox;
      if (!bbox)
        return;
      const x = isTouch ? srcEvent.touches[0].pageX : srcEvent.pageX;
      const elX = bbox.x + ((_a2 = window.scrollX) !== null && _a2 !== void 0 ? _a2 : window.pageXOffset);
      const clamepdX = clamp(x, elX, elX + bbox.width);
      const progress = (clamepdX - elX) / bbox.width;
      this._motion.reset(clamepdX);
      this.thumbEl.classList.add(this._fixedClass);
      this.trigger(CONTROL_EVENTS.INPUT_START, progress);
    };
    this._onChange = ({
      delta
    }) => {
      var _a2;
      const motion = this._motion;
      const bbox = this._bbox;
      if (!bbox)
        return;
      motion.setNewEndByDelta(delta.x);
      motion.update(1);
      const elX = bbox.x + ((_a2 = window.scrollX) !== null && _a2 !== void 0 ? _a2 : window.pageXOffset);
      const clampedX = clamp(motion.val, elX, elX + bbox.width);
      const progress = (clampedX - elX) / bbox.width;
      this.trigger(CONTROL_EVENTS.CHANGE, progress);
    };
    this._onRelease = () => {
      const bbox = this._bbox;
      if (!bbox)
        return;
      this.thumbEl.classList.remove(this._fixedClass);
      this.trigger(CONTROL_EVENTS.INPUT_END);
    };
    const root = document.createElement(EL_DIV);
    const track = document.createElement(EL_DIV);
    const thumb = document.createElement(EL_DIV);
    const filler = document.createElement(EL_DIV);
    root.draggable = false;
    track.appendChild(filler);
    track.appendChild(thumb);
    root.appendChild(track);
    this.rootEl = root;
    this.trackEl = track;
    this.thumbEl = thumb;
    this.fillerEl = filler;
    this._mouseInput = new MouseInput();
    this._touchInput = new TouchInput();
    this._motion = new Motion({
      duration: 1,
      range: INFINITE_RANGE,
      easing: (x) => x
    });
    this._bbox = {
      x: 0,
      y: 0,
      width: 0,
      height: 0,
      left: 0,
      right: 0,
      bottom: 0,
      top: 0
    };
    this._fixedClass = CONTROL_BAR_DEFAULT_CLASS.FIXED;
  }
  init(className) {
    const mouseInput = this._mouseInput;
    const touchInput = this._touchInput;
    this.rootEl.classList.add(className.RANGE_ROOT);
    this.trackEl.classList.add(className.RANGE_TRACK);
    this.thumbEl.classList.add(className.RANGE_THUMB);
    this.fillerEl.classList.add(className.RANGE_FILLER);
    this._fixedClass = className.FIXED;
    mouseInput.on(CONTROL_EVENTS.INPUT_START, this._onHold);
    touchInput.on(CONTROL_EVENTS.INPUT_START, this._onHold);
    mouseInput.on(CONTROL_EVENTS.INPUT_END, this._onRelease);
    touchInput.on(CONTROL_EVENTS.INPUT_END, this._onRelease);
    mouseInput.on(CONTROL_EVENTS.CHANGE, this._onChange);
    touchInput.on(CONTROL_EVENTS.CHANGE, this._onChange);
    mouseInput.enable(this.rootEl);
    touchInput.enable(this.rootEl);
    this.resize();
  }
  destroy() {
    const mouseInput = this._mouseInput;
    const touchInput = this._touchInput;
    this.rootEl.className = "";
    this.trackEl.className = "";
    this.thumbEl.className = "";
    this.fillerEl.className = "";
    mouseInput.off();
    touchInput.off();
    mouseInput.disable();
    touchInput.disable();
  }
  resize() {
    this._bbox = this.trackEl.getBoundingClientRect();
  }
  updateStyle(progress) {
    const width = this._bbox.width;
    const clampedProgress = clamp(progress, 0, 1);
    this.fillerEl.style.width = `${clampedProgress * 100}%`;
    this.thumbEl.style.transform = `translateX(${clampedProgress * width}px)`;
  }
};
var ProgressBar = class extends ControlBarItem {
  get element() {
    return this._rangeControl.rootEl;
  }
  /**
   * Create a new instance.
   * @ko 새로운 인스턴스를 생성합니다.
   * @param options - Options {@ko 옵션들}
   */
  constructor({
    position = CONTROL_BAR_ITEM_POSITION.MAIN_TOP,
    order = 9999
  } = {}) {
    super({
      position,
      order
    });
    this._onResize = () => {
      this._rangeControl.resize();
    };
    this._onTimeUpdate = () => {
      const video = this._video;
      if (!video)
        return;
      this._currentTime = video.source.currentTime;
      this._rangeControl.updateStyle(this._currentTime / this._duration);
    };
    this._onDurationChange = () => {
      const video = this._video;
      if (!video)
        return;
      this._duration = video.source.duration;
      this._rangeControl.updateStyle(this._currentTime / this._duration);
    };
    this._onHold = (progress) => {
      const video = this._video;
      const controlBar = this._controlBar;
      if (!video || !controlBar)
        return;
      const paused = video.isPaused();
      video.source.pause();
      const time = video.source.duration * progress;
      video.source.currentTime = time;
      video.source.dispatchEvent(new CustomEvent(VIDEO_TIME_CHANGE_EVENT, {
        detail: {
          time
        }
      }));
      controlBar.rootEl.classList.add(controlBar.className.FIXED);
      this._wasPaused = !this._playPromise && paused;
    };
    this._onControl = (progress) => {
      const video = this._video;
      if (!video)
        return;
      const time = video.source.duration * progress;
      video.source.currentTime = time;
      video.source.dispatchEvent(new CustomEvent(VIDEO_TIME_CHANGE_EVENT, {
        detail: {
          time
        }
      }));
    };
    this._onRelease = () => {
      const video = this._video;
      const controlBar = this._controlBar;
      if (video && controlBar) {
        if (!this._wasPaused && !this._playPromise) {
          this._playPromise = video.source.play().catch(() => void 0);
          this._playPromise.then(() => {
            this._playPromise = null;
          });
          controlBar.rootEl.classList.remove(controlBar.className.FIXED);
        }
      }
      this._wasPaused = false;
    };
    this.position = position;
    this.order = order;
    this._controlBar = null;
    this._rangeControl = new RangeControl();
    this._video = null;
    this._wasPaused = false;
    this._currentTime = 0;
    this._duration = 0;
    this._playPromise = null;
  }
  init(viewer, controlBar) {
    var _a2;
    const video = (_a2 = viewer.mesh) === null || _a2 === void 0 ? void 0 : _a2.getTexture();
    const element = this.element;
    const rangeControl = this._rangeControl;
    const unavailableClass = controlBar.className.UNAVAILABLE;
    if (!video || !video.isVideo()) {
      element.classList.add(unavailableClass);
      return;
    }
    element.classList.remove(unavailableClass);
    element.classList.add(controlBar.className.PROGRESS_ROOT);
    viewer.on(EVENTS.RESIZE, this._onResize);
    video.source.addEventListener(EVENTS$1.VIDEO_TIME_UPDATE, this._onTimeUpdate);
    video.source.addEventListener(EVENTS$1.VIDEO_DURATION_CHANGE, this._onDurationChange);
    video.source.addEventListener(VIDEO_TIME_CHANGE_EVENT, this._onTimeUpdate);
    rangeControl.init(controlBar.className);
    rangeControl.on(CONTROL_EVENTS.INPUT_START, this._onHold);
    rangeControl.on(CONTROL_EVENTS.CHANGE, this._onControl);
    rangeControl.on(CONTROL_EVENTS.INPUT_END, this._onRelease);
    this._video = video;
    this._currentTime = video.source.currentTime;
    this._duration = video.source.duration;
    this._controlBar = controlBar;
    rangeControl.updateStyle(this._currentTime / this._duration);
  }
  destroy(viewer) {
    const video = this._video;
    viewer.off(EVENTS.RESIZE, this._onResize);
    if (video) {
      video.source.removeEventListener(EVENTS$1.VIDEO_TIME_UPDATE, this._onTimeUpdate);
      video.source.removeEventListener(EVENTS$1.VIDEO_DURATION_CHANGE, this._onDurationChange);
      video.source.removeEventListener(VIDEO_TIME_CHANGE_EVENT, this._onTimeUpdate);
    }
    this._rangeControl.destroy();
    this._video = null;
    this._playPromise = null;
  }
};
var PlayButton = class extends ControlBarItem {
  /**
   * Create a new instance.
   * @ko 새로운 인스턴스를 생성합니다.
   * @param options - Options {@ko 옵션들}
   */
  constructor({
    position = CONTROL_BAR_ITEM_POSITION.MAIN_LEFT,
    order = 9999
  } = {}) {
    super({
      position,
      order
    });
    this._onClick = () => {
      const video = this._video;
      if (!video)
        return;
      if (this._paused) {
        video.source.play();
      } else {
        video.source.pause();
      }
    };
    this._onPlay = () => {
      if (!this._controlBar)
        return;
      const element = this.element;
      const className = this._controlBar.className;
      element.classList.add(className.PAUSE_BUTTON);
      element.classList.remove(className.PLAY_BUTTON);
      element.title = "Pause Video";
      this._paused = false;
    };
    this._onPause = () => {
      if (!this._controlBar)
        return;
      const element = this.element;
      const className = this._controlBar.className;
      element.classList.add(className.PLAY_BUTTON);
      element.classList.remove(className.PAUSE_BUTTON);
      element.title = "Play Video";
      this._paused = true;
    };
    this.element = document.createElement(EL_BUTTON);
    this._video = null;
    this._paused = true;
    this._controlBar = null;
  }
  init(viewer, controlBar) {
    var _a2;
    const element = this.element;
    const video = (_a2 = viewer.mesh) === null || _a2 === void 0 ? void 0 : _a2.getTexture();
    const className = controlBar.className;
    const unavailableClass = className.UNAVAILABLE;
    if (!video || !video.isVideo()) {
      element.classList.add(unavailableClass);
      return;
    }
    element.classList.add(className.CONTROLS_BUTTON);
    element.classList.remove(unavailableClass);
    const paused = video.isPaused();
    this._video = video;
    this._paused = paused;
    this._controlBar = controlBar;
    if (paused) {
      this._onPause();
    } else {
      this._onPlay();
    }
    element.addEventListener(EVENTS$1.CLICK, this._onClick);
    video.source.addEventListener(EVENTS$1.VIDEO_PLAY, this._onPlay);
    video.source.addEventListener(EVENTS$1.VIDEO_PAUSE, this._onPause);
  }
  destroy() {
    const video = this._video;
    const element = this.element;
    if (!video)
      return;
    element.className = "";
    element.removeEventListener(EVENTS$1.CLICK, this._onClick);
    video.source.removeEventListener(EVENTS$1.VIDEO_PLAY, this._onPlay);
    video.source.removeEventListener(EVENTS$1.VIDEO_PAUSE, this._onPause);
    this._video = null;
    this._paused = true;
    this._controlBar = null;
  }
};
var VolumeControl = class extends ControlBarItem {
  get element() {
    return this._rootEl;
  }
  /**
   * Create a new instance.
   * @ko 새로운 인스턴스를 생성합니다.
   * @param options - Options {@ko 옵션들}
   */
  constructor({
    position = CONTROL_BAR_ITEM_POSITION.MAIN_RIGHT,
    order = 9999
  } = {}) {
    super({
      position,
      order
    });
    this._onResize = () => {
      this._rangeControl.resize();
      this._updateDisplay();
    };
    this._onClick = () => {
      const video = this._video;
      if (!video || this._rootEl.disabled)
        return;
      video.source.muted = !video.source.muted;
    };
    this._onVolumeChange = () => {
      const button = this._buttonEl;
      const video = this._video;
      const controlBar = this._controlBar;
      if (!video || !controlBar)
        return;
      const className = controlBar.className;
      if (video.source.muted || video.source.volume === 0) {
        button.classList.add(className.MUTED_BUTTON);
        button.classList.remove(className.UNMUTED_BUTTON);
      } else {
        button.classList.add(className.UNMUTED_BUTTON);
        button.classList.remove(className.MUTED_BUTTON);
      }
      this._updateDisplay();
    };
    this._onHold = (progress) => {
      const video = this._video;
      const controlBar = this._controlBar;
      if (!video || !controlBar)
        return;
      const className = controlBar.className;
      video.source.volume = progress;
      this._rootEl.classList.add(className.FIXED);
      controlBar.containerEl.classList.add(className.FIXED);
      this._updateDisplay();
    };
    this._onChange = (progress) => {
      const video = this._video;
      if (!video)
        return;
      video.source.volume = progress;
      if (progress > 0) {
        video.source.muted = false;
      } else {
        video.source.muted = true;
      }
      this._updateDisplay();
    };
    this._onRelease = () => {
      const controlBar = this._controlBar;
      if (!controlBar)
        return;
      const className = controlBar.className;
      this._rootEl.classList.remove(className.FIXED);
      controlBar.containerEl.classList.remove(className.FIXED);
    };
    this._updateDisplay = () => {
      const video = this._video;
      const root = this._rootEl;
      if (!video)
        return;
      if (!video.hasAudio()) {
        root.disabled = true;
        return;
      }
      root.disabled = false;
      const volume = video.source.muted ? 0 : video.source.volume;
      this._rangeControl.updateStyle(volume);
    };
    this._controlBar = null;
    this._rangeControl = new RangeControl();
    this._createElements();
    this._video = null;
  }
  init(viewer, controlBar) {
    var _a2;
    const video = (_a2 = viewer.mesh) === null || _a2 === void 0 ? void 0 : _a2.getTexture();
    const root = this._rootEl;
    const button = this._buttonEl;
    const rangeControl = this._rangeControl;
    const className = controlBar.className;
    const unavailableClass = className.UNAVAILABLE;
    if (!video || !video.isVideo()) {
      root.classList.add(unavailableClass);
      return;
    }
    root.classList.remove(unavailableClass);
    root.classList.add(className.CONTROLS_BUTTON);
    root.classList.add(className.VOLUME_ROOT);
    button.classList.add(className.CONTROLS_BUTTON);
    if (video.source.muted) {
      button.classList.add(className.MUTED_BUTTON);
    } else {
      button.classList.add(className.UNMUTED_BUTTON);
    }
    viewer.on(EVENTS.RESIZE, this._onResize);
    root.addEventListener(EVENTS$1.TRANSITION_END, this._onResize);
    button.addEventListener(EVENTS$1.CLICK, this._onClick);
    video.source.addEventListener(EVENTS$1.VIDEO_VOLUME_CHANGE, this._onVolumeChange);
    video.source.addEventListener(EVENTS$1.VIDEO_LOADED_DATA, this._updateDisplay);
    video.source.addEventListener(EVENTS$1.VIDEO_CAN_PLAYTHROUGH, this._updateDisplay);
    rangeControl.init(className);
    rangeControl.on(CONTROL_EVENTS.INPUT_START, this._onHold);
    rangeControl.on(CONTROL_EVENTS.CHANGE, this._onChange);
    rangeControl.on(CONTROL_EVENTS.INPUT_END, this._onRelease);
    this._controlBar = controlBar;
    this._video = video;
    this._updateDisplay();
  }
  destroy(viewer) {
    const video = this._video;
    const button = this._buttonEl;
    const root = this._rootEl;
    root.className = "";
    button.className = "";
    viewer.off(EVENTS.RESIZE, this._onResize);
    root.removeEventListener(EVENTS$1.TRANSITION_END, this._onResize);
    button.removeEventListener(EVENTS$1.CLICK, this._onClick);
    if (video) {
      video.source.removeEventListener(EVENTS$1.VIDEO_VOLUME_CHANGE, this._onVolumeChange);
      video.source.removeEventListener(EVENTS$1.VIDEO_LOADED_DATA, this._updateDisplay);
      video.source.removeEventListener(EVENTS$1.VIDEO_CAN_PLAYTHROUGH, this._updateDisplay);
    }
    this._controlBar = null;
    this._rangeControl.destroy();
    this._video = null;
  }
  _createElements() {
    const root = document.createElement(EL_BUTTON);
    const buttonEl = document.createElement(EL_DIV);
    root.appendChild(this._rangeControl.rootEl);
    root.appendChild(buttonEl);
    root.title = "Toggle Mute";
    this._rootEl = root;
    this._buttonEl = buttonEl;
  }
};
var FullscreenButton = class extends ControlBarItem {
  /**
   * Create a new instance.
   * @ko 새로운 인스턴스를 생성합니다.
   * @param options - Options {@ko 옵션들}
   */
  constructor({
    position = CONTROL_BAR_ITEM_POSITION.MAIN_RIGHT,
    order = 9999
  } = {}) {
    super({
      position,
      order
    });
    this._onClick = () => {
      const target = this._targetEl;
      if (!target)
        return;
      if (isFullscreen()) {
        this._exitFullscreen();
      } else {
        this._requestFullscreen(target);
      }
    };
    this._onFullscreenChange = () => {
      const element = this.element;
      const controlBar = this._controlBar;
      if (!controlBar)
        return;
      const className = controlBar.className;
      if (isFullscreen()) {
        element.classList.add(className.FULLSCREEN_EXIT_BUTTON);
        element.classList.remove(className.FULLSCREEN_BUTTON);
      } else {
        element.classList.add(className.FULLSCREEN_BUTTON);
        element.classList.remove(className.FULLSCREEN_EXIT_BUTTON);
      }
    };
    this.element = document.createElement(EL_BUTTON);
    this.element.title = "Toggle Fullscreen";
    this._controlBar = null;
    this._targetEl = null;
  }
  init(viewer, controlBar) {
    const element = this.element;
    const className = controlBar.className;
    if (!this._fullscreenAvailable()) {
      element.classList.add(className.UNAVAILABLE);
      return;
    }
    element.classList.add(className.CONTROLS_BUTTON);
    element.classList.remove(className.UNAVAILABLE);
    element.addEventListener(EVENTS$1.CLICK, this._onClick);
    this._addFullscreenHandlers();
    if (isFullscreen()) {
      element.classList.add(className.FULLSCREEN_EXIT_BUTTON);
    } else {
      element.classList.add(className.FULLSCREEN_BUTTON);
    }
    this._controlBar = controlBar;
    this._targetEl = viewer.rootEl;
  }
  destroy() {
    const element = this.element;
    element.className = "";
    element.removeEventListener(EVENTS$1.CLICK, this._onClick);
    this._removeFullscreenHandlers();
    this._controlBar = null;
    this._targetEl = null;
  }
  _fullscreenAvailable() {
    return FULLSCREEN_REQUEST.some((key) => !!document[key]);
  }
  _requestFullscreen(el) {
    for (const key of FULLSCREEN_REQUEST) {
      const request = el[key];
      if (request) {
        request.call(el);
        return;
      }
    }
  }
  _exitFullscreen() {
    for (const key of FULLSCREEN_EXIT) {
      const exit = document[key];
      if (exit) {
        exit.call(document);
        return;
      }
    }
  }
  _addFullscreenHandlers() {
    FULLSCREEN_CHANGE.forEach((evtName) => {
      document.addEventListener(evtName, this._onFullscreenChange);
    });
  }
  _removeFullscreenHandlers() {
    FULLSCREEN_CHANGE.forEach((evtName) => {
      document.removeEventListener(evtName, this._onFullscreenChange);
    });
  }
};
var VideoTime = class extends ControlBarItem {
  /**
   * Create a new instance.
   * @ko 새로운 인스턴스를 생성합니다.
   * @param options - Options {@ko 옵션들}
   */
  constructor({
    position = CONTROL_BAR_ITEM_POSITION.MAIN_LEFT,
    order = 9999
  } = {}) {
    super({
      position,
      order
    });
    this._onTimeUpdate = () => {
      const video = this._video;
      if (!video)
        return;
      this._currentTime = video.source.currentTime;
      this._updateDisplay();
    };
    this._onDurationChange = () => {
      const video = this._video;
      if (!video)
        return;
      this._duration = video.source.duration;
      this._updateDisplay();
    };
    this._onCustomTimeChange = (evt) => {
      this._currentTime = evt.detail.time;
      this._updateDisplay();
    };
    this.element = document.createElement(EL_DIV);
    this._video = null;
    this._currentTime = 0;
    this._duration = 0;
  }
  init(viewer, controlBar) {
    var _a2;
    const video = (_a2 = viewer.mesh) === null || _a2 === void 0 ? void 0 : _a2.getTexture();
    const element = this.element;
    const className = controlBar.className;
    if (!video || !video.isVideo()) {
      element.classList.add(className.UNAVAILABLE);
      return;
    }
    element.classList.add(className.VIDEO_TIME_DISPLAY);
    element.classList.remove(className.UNAVAILABLE);
    video.source.addEventListener(EVENTS$1.VIDEO_TIME_UPDATE, this._onTimeUpdate);
    video.source.addEventListener(EVENTS$1.VIDEO_DURATION_CHANGE, this._onDurationChange);
    video.source.addEventListener(VIDEO_TIME_CHANGE_EVENT, this._onCustomTimeChange);
    this._video = video;
    this._currentTime = video.source.currentTime;
    this._duration = video.source.duration;
    this._updateDisplay();
  }
  destroy() {
    const video = this._video;
    if (!video)
      return;
    this.element.className = "";
    video.source.removeEventListener(EVENTS$1.VIDEO_TIME_UPDATE, this._onTimeUpdate);
    video.source.removeEventListener(EVENTS$1.VIDEO_DURATION_CHANGE, this._onDurationChange);
    video.source.removeEventListener(VIDEO_TIME_CHANGE_EVENT, this._onCustomTimeChange);
    this._video = null;
  }
  _updateDisplay() {
    const time = this._currentTime;
    const timeMinute = Math.floor(time / 60);
    const timeSeconds = Math.floor(time - timeMinute * 60);
    const timeSecondsFormatted = timeSeconds < 10 ? `0${timeSeconds}` : timeSeconds;
    const duration = this._duration;
    const durationMinute = Math.floor(duration / 60);
    const durationSeconds = Math.floor(duration - durationMinute * 60);
    const durationSecondsFormatted = durationSeconds < 10 ? `0${durationSeconds}` : durationSeconds;
    this.element.innerText = `${timeMinute}:${timeSecondsFormatted} / ${durationMinute}:${durationSecondsFormatted}`;
  }
};
var PieView = class extends ControlBarItem {
  /**
   * Create a new instance.
   * @ko 새로운 인스턴스를 생성합니다.
   * @param options - Options {@ko 옵션들}
   */
  constructor({
    resetCamera = true,
    position = CONTROL_BAR_ITEM_POSITION.TOP_RIGHT,
    order = 9999
  } = {}) {
    super({
      position,
      order
    });
    this._onClick = () => {
      const viewer = this._viewer;
      const resetCamera2 = this.resetCamera;
      if (!viewer || !resetCamera2)
        return;
      const {
        yaw = viewer.initialYaw,
        pitch = viewer.initialPitch,
        zoom = viewer.initialZoom,
        duration = 500
      } = getObjectOption(resetCamera2);
      viewer.camera.animateTo({
        yaw,
        pitch,
        zoom,
        duration
      });
    };
    this._updatePie = ({
      target: viewer
    }) => {
      const piePath = this._piePathEl;
      const rangeCircle = this._rangeCircleEl;
      const camera = viewer.camera;
      const fov = camera.getHorizontalFov();
      const yawRange = camera.getYawRange(camera.zoom);
      const halfFov = fov * 0.5;
      const pieRadius = 24 * Math.PI;
      const pieDeg = pieRadius * fov / 360;
      const pieOffset = pieRadius * (camera.yaw + halfFov + 90) / 360;
      piePath.setAttribute("stroke-dasharray", `${pieDeg} ${pieRadius - pieDeg}`);
      piePath.setAttribute("stroke-dashoffset", `${pieOffset}`);
      if (isFinite(yawRange.min) && isFinite(yawRange.max)) {
        const radius = 45 * Math.PI;
        const min3 = (circulate(yawRange.min, -180, 180) - halfFov) / 360;
        const max3 = (circulate(yawRange.max, -180, 180) + halfFov) / 360;
        const rangeDiff = radius * Math.abs(max3 - min3);
        const offset = -radius * (min3 - 0.25);
        rangeCircle.setAttribute("stroke-dasharray", `${rangeDiff} ${radius - rangeDiff}`);
        rangeCircle.setAttribute("stroke-dashoffset", `${offset}`);
      } else {
        rangeCircle.setAttribute("stroke-dasharray", "");
        rangeCircle.setAttribute("stroke-dashoffset", "");
      }
    };
    this.element = document.createElement(EL_DIV);
    this.element.title = "Reset view";
    this.resetCamera = resetCamera;
    this._createPieElements();
    this._viewer = null;
  }
  init(viewer, controlBar) {
    const element = this.element;
    if (!viewer.initialized) {
      viewer.once(EVENTS.READY, this._updatePie);
    } else {
      this._updatePie({
        target: viewer
      });
    }
    const rootClass = controlBar.className.PIEVIEW_ROOT;
    element.classList.add(rootClass);
    if (this.resetCamera) {
      element.addEventListener(EVENTS$1.CLICK, this._onClick);
    }
    viewer.on(EVENTS.VIEW_CHANGE, this._updatePie);
    this._viewer = viewer;
  }
  destroy(viewer) {
    const element = this.element;
    element.removeEventListener(EVENTS$1.CLICK, this._onClick);
    element.className = "";
    viewer.off(EVENTS.READY, this._updatePie);
    viewer.off(EVENTS.VIEW_CHANGE, this._updatePie);
    this._viewer = null;
  }
  _createPieElements() {
    const root = this.element;
    const pieSVG = document.createElementNS(SVG_NAMESPACE, "svg");
    pieSVG.setAttribute("viewBox", "0 0 48 48");
    pieSVG.setAttribute("width", "100%");
    pieSVG.setAttribute("height", "100%");
    const piePath = document.createElementNS(SVG_NAMESPACE, "circle");
    piePath.setAttribute("stroke", "currentColor");
    piePath.setAttribute("fill", "transparent");
    piePath.setAttribute("cx", "24");
    piePath.setAttribute("cy", "24");
    piePath.setAttribute("r", "12");
    piePath.setAttribute("stroke-width", "24");
    pieSVG.appendChild(piePath);
    const rangeCircle = document.createElementNS(SVG_NAMESPACE, "circle");
    rangeCircle.setAttribute("stroke", "currentColor");
    rangeCircle.setAttribute("fill", "transparent");
    rangeCircle.setAttribute("cx", "24");
    rangeCircle.setAttribute("cy", "24");
    rangeCircle.setAttribute("r", "22.5");
    rangeCircle.setAttribute("stroke-width", "3");
    pieSVG.appendChild(rangeCircle);
    root.appendChild(pieSVG);
    this._piePathEl = piePath;
    this._rangeCircleEl = rangeCircle;
  }
};
var VRButton = class extends ControlBarItem {
  /**
   * Create a new instance.
   * @ko 새로운 인스턴스를 생성합니다.
   * @param options - Options {@ko 옵션들}
   */
  constructor({
    position = CONTROL_BAR_ITEM_POSITION.MAIN_RIGHT,
    order = 9999
  } = {}) {
    super({
      position,
      order
    });
    this._onClick = () => {
      const viewer = this._viewer;
      if (!viewer)
        return;
      viewer.vr.enter();
    };
    this.element = document.createElement(EL_BUTTON);
    this.element.title = "Enter VR";
    this._viewer = null;
  }
  init(viewer, controlBar) {
    const element = this.element;
    const className = controlBar.className;
    element.classList.add(className.UNAVAILABLE);
    element.classList.add(className.VR_BUTTON);
    element.classList.add(className.CONTROLS_BUTTON);
    viewer.vr.isAvailable().then((available) => {
      if (available) {
        element.classList.remove(className.UNAVAILABLE);
      }
    });
    element.addEventListener(EVENTS$1.CLICK, this._onClick);
    this._viewer = viewer;
  }
  destroy() {
    const element = this.element;
    element.className = "";
    element.removeEventListener(EVENTS$1.CLICK, this._onClick);
    this._viewer = null;
  }
};
var GyroButton = class extends ControlBarItem {
  /**
   * Create a new instance.
   * @ko 새로운 인스턴스를 생성합니다.
   * @param options - Options {@ko 옵션들}
   */
  constructor({
    position = CONTROL_BAR_ITEM_POSITION.MAIN_RIGHT,
    order = 9999
  } = {}) {
    super({
      position,
      order
    });
    this._onClick = () => {
      const viewer = this._viewer;
      const controlBar = this._controlBar;
      if (!viewer || !controlBar)
        return;
      const gyroControl = viewer.control.gyro;
      if (gyroControl.enabled) {
        gyroControl.disable();
      } else {
        GyroControl.requestSensorPermission().then((available) => {
          if (available) {
            gyroControl.enable();
          } else {
            this.element.classList.add(controlBar.className.UNAVAILABLE);
          }
        });
      }
    };
    this._updateStyle = () => {
      const element = this.element;
      const viewer = this._viewer;
      const controlBar = this._controlBar;
      if (!viewer || !controlBar)
        return;
      const gyroControl = viewer.control.gyro;
      const className = controlBar.className;
      if (gyroControl.enabled) {
        element.classList.add(className.GYRO_ENABLED);
        element.classList.remove(className.GYRO_DISABLED);
      } else {
        element.classList.add(className.GYRO_DISABLED);
        element.classList.remove(className.GYRO_ENABLED);
      }
    };
    this.element = document.createElement(EL_DIV);
    this.element.title = "Toggle gyroscope control";
  }
  init(viewer, controlBar) {
    const element = this.element;
    const className = controlBar.className;
    element.addEventListener(EVENTS$1.CLICK, this._onClick);
    element.classList.add(className.CONTROLS_BUTTON);
    element.classList.add(className.UNAVAILABLE);
    const enableButton = () => {
      element.classList.remove(className.UNAVAILABLE);
      viewer.control.gyro.on(CONTROL_EVENTS.ENABLE, this._updateStyle);
      viewer.control.gyro.on(CONTROL_EVENTS.DISABLE, this._updateStyle);
    };
    if (sensorCanBeEnabledIOS()) {
      enableButton();
    } else {
      GyroControl.isAvailable().then((available) => {
        if (!available)
          return;
        enableButton();
      });
    }
    this._controlBar = controlBar;
    this._viewer = viewer;
    this._updateStyle();
  }
  destroy(viewer) {
    const element = this.element;
    viewer.control.gyro.off(CONTROL_EVENTS.ENABLE, this._updateStyle);
    viewer.control.gyro.off(CONTROL_EVENTS.DISABLE, this._updateStyle);
    element.removeEventListener(EVENTS$1.CLICK, this._onClick);
    element.className = "";
    this._controlBar = null;
    this._viewer = null;
  }
};
var AutoHide = class {
  get enabled() {
    return !!this._targetEl;
  }
  get hidden() {
    return this._controlBar.containerEl.classList.contains(this._hiddenClass);
  }
  get _hiddenClass() {
    return this._controlBar.className.HIDDEN;
  }
  get _fixedClass() {
    return this._controlBar.className.FIXED;
  }
  constructor(controlBar, {
    initialDelay = 3e3,
    delay = 0,
    idleDelay: activationDelay = 3e3
  }) {
    this._onMouseEnter = () => {
      this._isCursorInside = true;
      this.show();
    };
    this._onMouseLeave = () => {
      this._isCursorInside = false;
      this._hideAfterDelay();
    };
    this._onMouseMove = () => {
      if (!this._isFullscreen)
        return;
      this.showTemporaliy();
    };
    this._onHold = (evt) => {
      this._isGrabbing = true;
      if (evt.pointerType === "mouse") {
        this._isCursorInside = true;
      }
      window.addEventListener(EVENTS$1.MOUSE_UP, this._onRelease);
      this.show();
    };
    this._onRelease = () => {
      this._isGrabbing = false;
      window.removeEventListener(EVENTS$1.MOUSE_UP, this._onRelease);
      this._hideAfterDelay();
    };
    this._onVideoPlay = () => {
      const root = this._targetEl;
      if (!root)
        return;
      this._controlBar.containerEl.classList.remove(this._fixedClass);
    };
    this._onVideoPause = () => {
      const root = this._targetEl;
      if (!root)
        return;
      this._controlBar.containerEl.classList.add(this._fixedClass);
    };
    this._onFullscreenChange = () => {
      this._isFullscreen = isFullscreen();
      if (this._isFullscreen) {
        this._hideAfterDelay();
      }
    };
    this._controlBar = controlBar;
    this._initialDelay = initialDelay;
    this._delay = delay;
    this._idleDelay = activationDelay;
    this._timer = -1;
    this._isCursorInside = false;
    this._isGrabbing = false;
    this._isFullscreen = false;
    this._video = null;
    this._targetEl = null;
  }
  enable(viewer) {
    var _a2;
    if (this._targetEl) {
      this.disable(viewer);
    }
    const initialDelay = this._initialDelay;
    const root = viewer.rootEl;
    this._targetEl = viewer.rootEl;
    this._timer = window.setTimeout(() => {
      this.hide();
    }, initialDelay);
    root.addEventListener(EVENTS$1.MOUSE_DOWN, this._onHold);
    root.addEventListener(EVENTS$1.MOUSE_ENTER, this._onMouseEnter);
    root.addEventListener(EVENTS$1.MOUSE_MOVE, this._onMouseMove);
    root.addEventListener(EVENTS$1.MOUSE_LEAVE, this._onMouseLeave);
    this._addFullscreenHandlers();
    const video = (_a2 = viewer.mesh) === null || _a2 === void 0 ? void 0 : _a2.getTexture();
    if (!video || !video.isVideo()) {
      return;
    }
    if (video.isPaused()) {
      this._controlBar.containerEl.classList.add(this._fixedClass);
    }
    video.source.addEventListener(EVENTS$1.VIDEO_PLAY, this._onVideoPlay);
    video.source.addEventListener(EVENTS$1.VIDEO_PAUSE, this._onVideoPause);
    this._video = video;
  }
  disable(viewer) {
    if (!this._targetEl)
      return;
    const controlBar = this._controlBar;
    const root = viewer.rootEl;
    const video = this._video;
    root.removeEventListener(EVENTS$1.MOUSE_DOWN, this._onHold);
    window.removeEventListener(EVENTS$1.MOUSE_UP, this._onRelease);
    root.removeEventListener(EVENTS$1.MOUSE_ENTER, this._onMouseEnter);
    root.removeEventListener(EVENTS$1.MOUSE_MOVE, this._onMouseMove);
    root.removeEventListener(EVENTS$1.MOUSE_LEAVE, this._onMouseLeave);
    this._removeFullscreenHandlers();
    window.clearTimeout(this._timer);
    controlBar.containerEl.classList.remove(this._fixedClass);
    if (video) {
      video.source.removeEventListener(EVENTS$1.VIDEO_PLAY, this._onVideoPlay);
      video.source.removeEventListener(EVENTS$1.VIDEO_PAUSE, this._onVideoPause);
    }
    this._isCursorInside = false;
    this._isGrabbing = false;
    this._video = null;
    this._targetEl = null;
  }
  show() {
    this._clearHideTimer();
    this._controlBar.containerEl.classList.remove(this._hiddenClass);
  }
  showTemporaliy() {
    this.show();
    this._hideAfterDelay(this._idleDelay);
  }
  hide() {
    this._clearHideTimer();
    this._controlBar.containerEl.classList.add(this._hiddenClass);
  }
  _clearHideTimer() {
    if (this._timer) {
      window.clearTimeout(this._timer);
      this._timer = -1;
    }
  }
  _hideAfterDelay(delay = this._delay) {
    if (this._isGrabbing || !this._isFullscreen && this._isCursorInside)
      return;
    this._clearHideTimer();
    if (delay <= 0) {
      this.hide();
    } else {
      this._timer = window.setTimeout(() => {
        this.hide();
      }, delay);
    }
  }
  _addFullscreenHandlers() {
    FULLSCREEN_CHANGE.forEach((evtName) => {
      document.addEventListener(evtName, this._onFullscreenChange);
    });
  }
  _removeFullscreenHandlers() {
    FULLSCREEN_CHANGE.forEach((evtName) => {
      document.removeEventListener(evtName, this._onFullscreenChange);
    });
  }
};
var VideoControl = class {
  constructor() {
    this._onKeyDown = (event) => {
      const video = this._video;
      if (!video)
        return;
      event.preventDefault();
      event.stopPropagation();
      const videoEl = video.source;
      const keyPressed = event.keyCode != null ? DIRECTION_KEY_CODE[event.keyCode] : DIRECTION_KEY_NAME[event.key];
      switch (keyPressed) {
        case "LEFT":
        case "RIGHT":
          return this._changeVideoTime(videoEl, keyPressed === "RIGHT");
        case "UP":
        case "DOWN":
          return this._changeVideoVolume(videoEl, keyPressed === "UP");
      }
      const spacePressed = event.keyCode === SPACE_KEY_CODE || event.key === SPACE_KEY_NAME;
      if (spacePressed) {
        this._toggleVideo(video);
      }
    };
  }
  enable(root, video) {
    this._video = video;
    root.addEventListener(EVENTS$1.KEY_DOWN, this._onKeyDown, true);
  }
  disable(root) {
    this._video = null;
    root.removeEventListener(EVENTS$1.KEY_DOWN, this._onKeyDown, true);
  }
  _changeVideoTime(video, forward) {
    const delta = forward ? 5 : -5;
    video.currentTime += delta;
    video.dispatchEvent(new CustomEvent(VIDEO_TIME_CHANGE_EVENT, {
      detail: {
        time: video.currentTime
      }
    }));
  }
  _changeVideoVolume(video, increase) {
    const delta = increase ? 0.1 : -0.1;
    if (video.muted) {
      video.volume = clamp(delta, 0, 1);
    } else {
      video.volume = clamp(video.volume + delta, 0, 1);
    }
    if (video.volume > 0) {
      video.muted = false;
    } else {
      video.muted = true;
    }
  }
  _toggleVideo(video) {
    if (video.isPaused()) {
      video.source.play();
    } else {
      video.source.pause();
    }
  }
};
var ControlBar = class _ControlBar {
  /**
   * Root element of the control bar
   * @ko 컨트롤바의 루트 엘리먼트
   * @since 4.0.0
   */
  get rootEl() {
    return this._rootEl;
  }
  /**
   * Container element of the control bar
   * @ko 컨트롤바의 컨테이너 엘리먼트
   * @since 4.0.0
   */
  get containerEl() {
    return this._containerEl;
  }
  /**
   * Background element of the control bar
   * @ko 컨트롤바의 배경 엘리먼트
   * @since 4.0.0
   */
  get backgroundEl() {
    return this._bgEl;
  }
  /**
   * Control bar's default items created by {@link ControlBarOptions}
   * @ko 주어진 {@link ControlBarOptions}에 의해 생성된 디폴트 아이템들
   * @since 4.0.0
   */
  get items() {
    return this._items;
  }
  /**
   * Custom control bar items
   * @ko 커스텀 컨트롤바 아이템들을 추가합니다.
   * @since 4.0.0
   */
  get customItems() {
    return this._customItems;
  }
  /**
   * Create new instance of ControlBar.
   * @ko ControlBar의 새 인스턴스를 생성합니다.
   * @param options - Options {@ko 옵션들}
   */
  constructor({
    autoHide,
    showBackground,
    clickToPlay = true,
    keyboardControls = true,
    progressBar = true,
    playButton = true,
    volumeButton = true,
    fullscreenButton = true,
    videoTime = true,
    pieView = true,
    vrButton = true,
    gyroButton = true,
    className = {},
    customItems = []
  } = {}) {
    var _a2;
    this._onStaticClick = ({
      target: viewer,
      isTouch
    }) => {
      var _a3;
      const autoHider = this._autoHider;
      if (isTouch) {
        if (!autoHider.enabled)
          return;
        if (autoHider.hidden) {
          autoHider.showTemporaliy();
        } else {
          autoHider.hide();
        }
      } else {
        if (!this.clickToPlay)
          return;
        const video = (_a3 = viewer.mesh) === null || _a3 === void 0 ? void 0 : _a3.getTexture();
        if (!video || !video.isVideo())
          return;
        if (video.isPaused()) {
          video.source.play();
        } else {
          video.source.pause();
        }
      }
    };
    this._onNewSrcLoad = ({
      target: viewer
    }) => {
      const items = this._items;
      this._updateBackground(viewer);
      this._updateAutoHide(viewer);
      this._updateKeyboardHandler(viewer);
      Object.keys(items).forEach((key) => {
        const category = items[key];
        category.forEach((item) => {
          item.destroy(viewer, this);
          item.init(viewer, this);
        });
      });
    };
    this.autoHide = autoHide;
    this.showBackground = showBackground;
    this.clickToPlay = clickToPlay;
    this.keyboardControls = keyboardControls;
    this.progressBar = progressBar;
    this.playButton = playButton;
    this.volumeButton = volumeButton;
    this.fullscreenButton = fullscreenButton;
    this.videoTime = videoTime;
    this.pieView = pieView;
    this.vrButton = vrButton;
    this.gyroButton = gyroButton;
    this.className = Object.assign(Object.assign({}, _ControlBar.DEFAULT_CLASS), className);
    const rootClass = (_a2 = className.CONTROLS_ROOT) !== null && _a2 !== void 0 ? _a2 : _ControlBar.DEFAULT_CLASS.CONTROLS_ROOT;
    this._rootEl = createElement(rootClass);
    this._createPositionWrappers();
    this._items = Object.keys(_ControlBar.POSITION).reduce((items, key) => {
      items[_ControlBar.POSITION[key]] = [];
      return items;
    }, {});
    this._customItems = customItems;
    this._autoHider = new AutoHide(this, getObjectOption(autoHide));
    this._videoControl = new VideoControl();
    customItems.forEach((item) => {
      this._items[item.position].push(item);
    });
  }
  init(viewer) {
    const panoRoot = viewer.rootEl;
    const controlsRoot = this._rootEl;
    const defaultItems = this._createDefaultItems();
    this._updateBackground(viewer);
    this._updateAutoHide(viewer);
    this._updateKeyboardHandler(viewer);
    panoRoot.appendChild(controlsRoot);
    this._addItem(viewer, defaultItems);
    this._addItem(viewer, this._customItems);
    viewer.on(EVENTS.PROJECTION_CHANGE, this._onNewSrcLoad);
    viewer.on(EVENTS.STATIC_CLICK, this._onStaticClick);
  }
  destroy(viewer) {
    const panoRoot = viewer.rootEl;
    const controlsRoot = this._rootEl;
    const items = this._items;
    if (controlsRoot.parentElement === panoRoot) {
      panoRoot.removeChild(controlsRoot);
    }
    Object.keys(items).forEach((key) => {
      const category = items[key];
      category.forEach((item) => {
        item.destroy(viewer, this);
      });
      items[key] = [];
    });
    this._clearItemElements();
    this._autoHider.disable(viewer);
    this._videoControl.disable(panoRoot);
    viewer.off(EVENTS.PROJECTION_CHANGE, this._onNewSrcLoad);
    viewer.off(EVENTS.STATIC_CLICK, this._onStaticClick);
  }
  _addItem(viewer, items) {
    for (const item of items) {
      const category = this._items[item.position];
      const wrapper = this._wrapperEl[item.position];
      const nextSiblingIndex = findIndex(category, (sibling) => sibling.order > item.order);
      if (nextSiblingIndex >= 0) {
        const nextSibling = category[nextSiblingIndex].element;
        category.splice(nextSiblingIndex, 0, item);
        wrapper.insertBefore(item.element, nextSibling);
      } else {
        category.push(item);
        wrapper.appendChild(item.element);
      }
      item.init(viewer, this);
    }
  }
  _createPositionWrappers() {
    const className = Object.assign(Object.assign({}, _ControlBar.DEFAULT_CLASS), this.className);
    const rootEl = this._rootEl;
    const backgroundEl = createElement(className.CONTROLS_BG);
    const floatLeftEl = createElement(className.CONTROLS_FLOAT_LEFT);
    const floatRightEl = createElement(className.CONTROLS_FLOAT_RIGHT);
    rootEl.appendChild(floatLeftEl);
    rootEl.appendChild(floatRightEl);
    const container = createElement(className.CONTROLS_MAIN);
    const topWrapper = createElement(className.CONTROLS_TOP);
    const bottomWrapper = createElement(className.CONTROLS_BOTTOM);
    const midWrapper = createElement(className.CONTROLS_MID);
    const leftControlsWrapper = createElement(className.CONTROLS_LEFT);
    const rightControlsWrapper = createElement(className.CONTROLS_RIGHT);
    midWrapper.appendChild(leftControlsWrapper);
    midWrapper.appendChild(rightControlsWrapper);
    container.appendChild(backgroundEl);
    container.appendChild(topWrapper);
    container.appendChild(midWrapper);
    container.appendChild(bottomWrapper);
    rootEl.appendChild(container);
    this._bgEl = backgroundEl;
    this._containerEl = container;
    this._wrapperEl = {
      [_ControlBar.POSITION.MAIN_TOP]: topWrapper,
      [_ControlBar.POSITION.MAIN_LEFT]: leftControlsWrapper,
      [_ControlBar.POSITION.MAIN_RIGHT]: rightControlsWrapper,
      [_ControlBar.POSITION.MAIN_BOTTOM]: bottomWrapper,
      [_ControlBar.POSITION.TOP_LEFT]: floatLeftEl,
      [_ControlBar.POSITION.TOP_RIGHT]: floatRightEl
    };
  }
  _clearItemElements() {
    const wrappers = Object.keys(_ControlBar.POSITION).map((key) => _ControlBar.POSITION[key]).map((pos) => this._wrapperEl[pos]);
    wrappers.forEach((wrapper) => {
      while (wrapper.firstChild) {
        wrapper.removeChild(wrapper.firstChild);
      }
    });
  }
  _updateAutoHide(viewer) {
    var _a2;
    const autoHide = this.autoHide;
    const autoHider = this._autoHider;
    if (autoHide != null) {
      if (autoHide) {
        autoHider.enable(viewer);
      } else {
        autoHider.disable(viewer);
      }
    } else {
      const texture = (_a2 = viewer.mesh) === null || _a2 === void 0 ? void 0 : _a2.getTexture();
      if (texture && texture.isVideo()) {
        autoHider.enable(viewer);
      } else {
        autoHider.disable(viewer);
      }
    }
  }
  _updateBackground(viewer) {
    var _a2, _b;
    const background = this._bgEl;
    const showBackground = this.showBackground;
    const hiddenClass = (_a2 = this.className.HIDDEN) !== null && _a2 !== void 0 ? _a2 : _ControlBar.DEFAULT_CLASS.HIDDEN;
    if (showBackground != null) {
      if (showBackground) {
        background.classList.remove(hiddenClass);
      } else {
        background.classList.add(hiddenClass);
      }
    } else {
      const texture = (_b = viewer.mesh) === null || _b === void 0 ? void 0 : _b.getTexture();
      if (texture && texture.isVideo()) {
        background.classList.remove(hiddenClass);
      } else {
        background.classList.add(hiddenClass);
      }
    }
  }
  _updateKeyboardHandler(viewer) {
    var _a2;
    const panoRoot = viewer.rootEl;
    const videoControl = this._videoControl;
    const texture = (_a2 = viewer.mesh) === null || _a2 === void 0 ? void 0 : _a2.getTexture();
    if (this.keyboardControls && texture && texture.isVideo()) {
      videoControl.enable(panoRoot, texture);
    } else {
      videoControl.disable(panoRoot);
    }
  }
  _createDefaultItems() {
    const items = [];
    if (this.progressBar) {
      items.push(new ProgressBar(getObjectOption(this.progressBar)));
    }
    if (this.playButton) {
      items.push(new PlayButton(getObjectOption(this.playButton)));
    }
    if (this.volumeButton) {
      items.push(new VolumeControl(getObjectOption(this.volumeButton)));
    }
    if (this.gyroButton) {
      items.push(new GyroButton(getObjectOption(this.gyroButton)));
    }
    if (this.vrButton) {
      items.push(new VRButton(getObjectOption(this.vrButton)));
    }
    if (this.fullscreenButton) {
      items.push(new FullscreenButton(getObjectOption(this.fullscreenButton)));
    }
    if (this.videoTime) {
      items.push(new VideoTime(getObjectOption(this.videoTime)));
    }
    if (this.pieView) {
      items.push(new PieView(getObjectOption(this.pieView)));
    }
    return items;
  }
};
ControlBar.DEFAULT_CLASS = CONTROL_BAR_DEFAULT_CLASS;
ControlBar.POSITION = CONTROL_BAR_ITEM_POSITION;
var Projection = class {
  /**
   * Create new instance
   * @ko 새로운 인스턴스를 생성합니다.
   * @param options - Options {@ko 옵션들}
   */
  constructor({
    src,
    video = false
  }) {
    this.src = src;
    this.video = video;
  }
  /**
   * Update camera to match projection's settings.
   * @ko 현재 프로젝션의 세팅으로 카메라를 업데이트합니다.
   * @param camera - Instance of the camera to update {@ko 업데이트할 카메라의 인스턴스}
   * @since 4.0.0
   */
  updateCamera(camera) {
    camera.resetRange();
  }
  /**
   * Update control to match projection's settings.
   * @ko 현재 프로젝션의 세팅으로 컨트롤을 업데이트합니다.
   * @param control - Instance of the control to update {@ko 업데이트할 컨트롤의 인스턴스}
   * @since 4.0.0
   */
  updateControl(control) {
    control.ignoreZoomScale = false;
  }
};
var Uniform = class {
  constructor() {
    this.needsUpdate = true;
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  destroy(gl) {
  }
};
var UniformTextureCube = class extends Uniform {
  constructor(ctx, texture, cubemapOrder) {
    super();
    this.texture = texture;
    this._webglTexture = ctx.createWebGLCubeTexture(texture, texture.width);
    this._cubemapOrder = cubemapOrder;
  }
  destroy(gl) {
    this.texture.destroy();
    gl.deleteTexture(this._webglTexture);
  }
  update(gl, location, isWebGL2) {
    const texture = this.texture;
    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, texture.flipY);
    gl.uniform1i(location, 0);
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_CUBE_MAP, this._webglTexture);
    const sources = reorderCube(texture.sources, this._cubemapOrder);
    sources.forEach((src, idx) => {
      if (isWebGL2) {
        gl.texSubImage2D(gl.TEXTURE_CUBE_MAP_POSITIVE_X + idx, 0, 0, 0, gl.RGBA, gl.UNSIGNED_BYTE, src);
      } else {
        gl.texImage2D(gl.TEXTURE_CUBE_MAP_POSITIVE_X + idx, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, src);
      }
    });
    if (!texture.isVideo()) {
      this.needsUpdate = false;
    }
  }
};
var CubeTexturePainter = class {
  get size() {
    return this._size;
  }
  constructor(texture, cubemapOrder) {
    this.texture = texture;
    this._renderingOrder = reorderCube(range(6), cubemapOrder);
    const canvas = document.createElement("canvas");
    this._calcRenderingSize();
    canvas.width = this._size;
    canvas.height = this._size;
    this._canvas = canvas;
    this._ctx = canvas.getContext("2d");
  }
  destroy() {
    const canvas = this._canvas;
    canvas.width = 1;
    canvas.height = 1;
    this._canvas = null;
  }
  draw(gl, isWebGL2) {
    const size = this._size;
    const texture = this.texture;
    let surfaceIdx = 0;
    for (let row = 0; row < this._row; row++) {
      for (let column = 0; column < this._column; column++) {
        const x = size * column;
        const y = size * row;
        const renderingFace = this._renderingOrder[surfaceIdx];
        this._ctx.drawImage(texture.source, x, y, size, size, 0, 0, size, size);
        if (isWebGL2) {
          gl.texSubImage2D(gl.TEXTURE_CUBE_MAP_POSITIVE_X + renderingFace, 0, 0, 0, gl.RGBA, gl.UNSIGNED_BYTE, this._canvas);
        } else {
          gl.texImage2D(gl.TEXTURE_CUBE_MAP_POSITIVE_X + renderingFace, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, this._canvas);
        }
        surfaceIdx++;
      }
    }
  }
  _calcRenderingSize() {
    const {
      width,
      height
    } = this.texture;
    const aspect = width / height;
    if (aspect === 1 / 6) {
      this._size = width;
      this._row = 6;
      this._column = 1;
    } else if (aspect === 6) {
      this._size = height;
      this._row = 1;
      this._column = 6;
    } else if (aspect === 2 / 3) {
      this._size = width * 0.5;
      this._row = 3;
      this._column = 2;
    } else {
      this._size = width / 3;
      this._row = 2;
      this._column = 3;
    }
  }
};
var UniformCanvasCube = class extends Uniform {
  get texture() {
    return this._painter.texture;
  }
  constructor(ctx, texture, cubemapOrder) {
    super();
    this._painter = new CubeTexturePainter(texture, cubemapOrder);
    this._webglTexture = ctx.createWebGLCubeTexture(texture, this._painter.size);
  }
  destroy(gl) {
    gl.deleteTexture(this._webglTexture);
    this._painter.destroy();
  }
  update(gl, location, isWebGL2) {
    const texture = this.texture;
    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, false);
    gl.uniform1i(location, 0);
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_CUBE_MAP, this._webglTexture);
    this._painter.draw(gl, isWebGL2);
    if (!texture.isVideo()) {
      this.needsUpdate = false;
    }
  }
};
var TriangleMesh = class extends Object3D {
  constructor(vao, program) {
    super();
    this.vao = vao;
    this.program = program;
  }
  destroy(ctx) {
    ctx.releaseVAO(this.vao);
    ctx.releaseShaderResources(this.program);
  }
  getTexture() {
    return this.program.uniforms.uTexture.texture;
  }
};
var ShaderProgram = class {
  constructor(ctx, vertexShader, fragmentShader, uniforms) {
    this.program = ctx.createProgram(vertexShader, fragmentShader);
    this.uniforms = uniforms;
    this.uniformLocations = ctx.getUniformLocations(this.program, uniforms);
  }
};
var VertexData = class {
  /** */
  constructor(data, itemSize) {
    this.data = data;
    this.itemSize = itemSize;
    this.count = data.length / itemSize;
  }
};
var Geometry = class {
  /** */
  constructor(vertices, indicies, uvs) {
    this.vertices = new VertexData(new Float32Array(vertices), 3);
    this.indicies = new VertexData(new Uint16Array(indicies), 1);
    this.uvs = new VertexData(new Float32Array(uvs), 2);
  }
};
var CubeGeometry = class extends Geometry {
  constructor({
    order,
    rotateUV
  }) {
    const vertices = [
      // back
      1,
      -1,
      1,
      -1,
      -1,
      1,
      -1,
      1,
      1,
      1,
      1,
      1,
      // front
      -1,
      -1,
      -1,
      1,
      -1,
      -1,
      1,
      1,
      -1,
      -1,
      1,
      -1,
      // up
      -1,
      1,
      -1,
      1,
      1,
      -1,
      1,
      1,
      1,
      -1,
      1,
      1,
      // down
      -1,
      -1,
      1,
      1,
      -1,
      1,
      1,
      -1,
      -1,
      -1,
      -1,
      -1,
      // right
      1,
      -1,
      -1,
      1,
      -1,
      1,
      1,
      1,
      1,
      1,
      1,
      -1,
      // left
      -1,
      -1,
      1,
      -1,
      -1,
      -1,
      -1,
      1,
      -1,
      -1,
      1,
      1
    ];
    const indicies = [0, 1, 2, 0, 2, 3, 4, 5, 6, 4, 6, 7, 8, 9, 10, 8, 10, 11, 12, 13, 14, 12, 14, 15, 16, 17, 18, 16, 18, 19, 20, 21, 22, 20, 22, 23];
    const oneThird = 1 / 3;
    const coords = [];
    for (let r = 1; r >= 0; r--) {
      for (let c = 0; c < 3; c++) {
        const coord = [c * oneThird, r * 0.5, (c + 1) * oneThird, r * 0.5, (c + 1) * oneThird, (r + 1) * 0.5, c * oneThird, (r + 1) * 0.5];
        coords.push(coord);
      }
    }
    if (rotateUV) {
      rotateUV.forEach((degree2, idx) => {
        if (degree2 === ROTATE.ZERO)
          return;
        const coord = coords[idx];
        let newOrder;
        if (degree2 === ROTATE.CW_90) {
          newOrder = [1, 2, 3, 0];
        } else if (degree2 === ROTATE.CCW_90) {
          newOrder = [3, 0, 1, 2];
        } else {
          newOrder = [2, 3, 0, 1];
        }
        const newCoords = Array(coord.length);
        for (let uvIdx = 0; uvIdx < coord.length / 2; uvIdx++) {
          newCoords[uvIdx * 2 + 0] = coord[newOrder[uvIdx] * 2 + 0];
          newCoords[uvIdx * 2 + 1] = coord[newOrder[uvIdx] * 2 + 1];
        }
        coords[idx] = newCoords;
      });
    }
    const uvs = reorderCube(coords, order, "BFUDRL").reduce((acc, val) => acc.concat(val), []);
    super(vertices, indicies, uvs);
  }
};
var vs$3 = "#define GLSLIFY 1\nattribute vec3 position;attribute vec2 uv;uniform mat4 uMVMatrix;uniform mat4 uPMatrix;varying highp vec3 vPos;void main(){vPos=position;gl_Position=uPMatrix*uMVMatrix*vec4(position,1.0);}";
var fs$3 = "#define GLSLIFY 1\nuniform samplerCube uTexture;varying highp vec3 vPos;void main(){gl_FragColor=textureCube(uTexture,vec3(vPos.x,vPos.y,-vPos.z));}";
var CubemapProjection = class extends Projection {
  /**
   * Create new instance.
   * @ko 새 인스턴스를 생성합니다.
   * @param options Options {@ko Options}
   */
  constructor(options) {
    super(options);
    const {
      cubemapOrder = "RLUDFB",
      cubemapFlipX = false
    } = options;
    this._cubemapOrder = cubemapOrder;
    this._cubemapFlipX = cubemapFlipX;
  }
  createMesh(ctx, texture) {
    const cubemapOrder = this._cubemapOrder;
    const cubemapFlipX = this._cubemapFlipX;
    const uniforms = {
      uTexture: texture.isCube() ? new UniformTextureCube(ctx, texture, cubemapOrder) : new UniformCanvasCube(ctx, texture, cubemapOrder)
    };
    const geometry = new CubeGeometry({
      order: cubemapOrder
    });
    const program = new ShaderProgram(ctx, vs$3, fs$3, uniforms);
    const vao = ctx.createVAO(geometry, program);
    const mesh = new TriangleMesh(vao, program);
    if (cubemapFlipX) {
      mesh.scale[0] = -1;
    }
    mesh.updateMatrix();
    return mesh;
  }
};
var UniformTexture2D = class extends Uniform {
  constructor(ctx, texture) {
    super();
    this.texture = texture;
    this._webglTexture = ctx.createWebGLTexture(texture);
  }
  destroy(gl) {
    this.texture.destroy();
    gl.deleteTexture(this._webglTexture);
  }
  update(gl, location, isWebGL2) {
    const texture = this.texture;
    const isVideo = texture.isVideo();
    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, texture.flipY);
    gl.uniform1i(location, 0);
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, this._webglTexture);
    if (!isVideo && isWebGL2) {
      gl.texSubImage2D(gl.TEXTURE_2D, 0, 0, 0, gl.RGBA, gl.UNSIGNED_BYTE, texture.source);
    } else {
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, texture.source);
    }
    if (!isVideo) {
      this.needsUpdate = false;
    }
  }
};
var vs$2 = "#define GLSLIFY 1\nattribute vec3 position;attribute vec2 uv;uniform mat4 uMVMatrix;uniform mat4 uPMatrix;varying highp vec2 vUV;void main(){vUV=uv;gl_Position=uPMatrix*uMVMatrix*vec4(position,1.0);}";
var fs$2 = "#define GLSLIFY 1\nuniform sampler2D uTexture;varying highp vec2 vUV;void main(){gl_FragColor=texture2D(uTexture,vUV.st);}";
var CubestripProjection = class extends Projection {
  /**
   * Create new instance.
   * @ko 새 인스턴스를 생성합니다.
   * @param options Options {@ko Options}
   */
  constructor(options) {
    super(options);
    const {
      cubemapOrder = "RLUDFB",
      cubemapFlipX = false
    } = options;
    this._cubemapOrder = cubemapOrder;
    this._cubemapFlipX = cubemapFlipX;
  }
  createMesh(ctx, texture) {
    const cubemapOrder = this._cubemapOrder;
    const cubemapFlipX = this._cubemapFlipX;
    const uniforms = {
      uTexture: new UniformTexture2D(ctx, texture)
    };
    const geometry = new CubeGeometry({
      order: cubemapOrder
    });
    const program = new ShaderProgram(ctx, vs$2, fs$2, uniforms);
    const vao = ctx.createVAO(geometry, program);
    const mesh = new TriangleMesh(vao, program);
    if (cubemapFlipX) {
      mesh.scale[0] = -1;
    }
    mesh.updateMatrix();
    return mesh;
  }
};
var CylinderGeometry = class extends Geometry {
  constructor(maxTheta) {
    const vertices = [];
    const indicies = [];
    const uvs = [];
    const height = 1;
    const radialSegments = 60;
    const halfHeight = height * 0.5;
    const heightSegments = [-halfHeight, halfHeight];
    const invRadialSegments = 1 / radialSegments;
    const angleConst = maxTheta * invRadialSegments;
    for (let yIdx = 0; yIdx < 2; yIdx++) {
      const y = heightSegments[yIdx];
      for (let lngIdx = 0; lngIdx <= radialSegments; lngIdx++) {
        const angle3 = lngIdx * angleConst + Math.PI - maxTheta * 0.5;
        const x = Math.cos(angle3);
        const z = Math.sin(angle3);
        const u = lngIdx * invRadialSegments;
        const v = yIdx;
        uvs.push(u, v);
        vertices.push(x, y, z);
        if (yIdx === 0 && lngIdx < radialSegments) {
          const a = lngIdx;
          const b = a + radialSegments + 1;
          indicies.push(a, b, a + 1, b, b + 1, a + 1);
        }
      }
    }
    super(vertices, indicies, uvs);
  }
};
var CylindricalProjection = class extends Projection {
  /**
   * Create new instance.
   * @ko 새 인스턴스를 생성합니다.
   * @param options Options {@ko Options}
   */
  constructor(options) {
    super(options);
    const {
      partial = false
    } = options;
    this._partial = partial;
    this._aspect = 1;
    this._halfHeight = 0;
    this._mesh = null;
  }
  createMesh(ctx, texture) {
    if (this._mesh)
      return this._mesh;
    const partial = this._partial;
    const {
      width,
      height
    } = texture;
    const aspect = width / height;
    const halfVFov = 180 / aspect;
    const cylinderHeight = partial ? 1 : 2 * Math.tan(halfVFov * DEG_TO_RAD);
    const cylinderTheta = partial ? aspect : 2 * Math.PI;
    const geometry = new CylinderGeometry(cylinderTheta);
    const program = new ShaderProgram(ctx, vs$2, fs$2, {
      uTexture: new UniformTexture2D(ctx, texture)
    });
    const vao = ctx.createVAO(geometry, program);
    const mesh = new TriangleMesh(vao, program);
    mesh.scale[1] = cylinderHeight;
    quat_exports.identity(mesh.rotation);
    quat_exports.rotateY(mesh.rotation, mesh.rotation, -Math.PI / 2);
    mesh.updateMatrix();
    this._aspect = aspect;
    this._halfHeight = cylinderHeight * 0.5;
    this._mesh = mesh;
    return mesh;
  }
  updateCamera(camera) {
    super.updateCamera(camera);
    const mesh = this._mesh;
    const aspect = this._aspect;
    const halfHeight = this._halfHeight;
    if (!mesh)
      return;
    if (this._partial) {
      const restrictedYaw = 0.5 * aspect * RAD_TO_DEG;
      camera.restrictYawRange(-restrictedYaw, restrictedYaw);
    }
    const restrictedPitch = Math.atan2(halfHeight, 1) * RAD_TO_DEG;
    const minZoom = Math.tan(camera.fov * DEG_TO_RAD * 0.5) / (halfHeight * camera.aspect);
    camera.restrictPitchRange(-restrictedPitch, restrictedPitch);
    camera.restrictZoomRange(minZoom, Infinity);
    camera.restrictRenderHeight(halfHeight * 2);
  }
};
var fs$1 = "#define PI 3.14159265359\nprecision mediump float;\n#define GLSLIFY 1\nuniform sampler2D uTexture;varying highp vec2 vUV;const vec2 OPERATE_COORDS_RANGE=vec2(-1.0,1.0);const vec2 TEXTURE_COORDS_RANGE=vec2(0.0,1.0);const float ONE_THIRD=1.0/3.0;const float EAC_CONST=2.0/PI;float scale(vec2 domainRange,vec2 targetRange,float val){float unit=1.0/(domainRange[1]-domainRange[0]);return targetRange[0]+(targetRange[1]-targetRange[0])*(val-domainRange[0])*unit;}void main(void){float transformedCoordX;float transformedCoordY;float texRangeXStart=floor(vUV.s*3.)*ONE_THIRD;float texRangeYStart=floor(vUV.t*2.)*0.5;vec2 orgTextureRangeX=vec2(texRangeXStart,texRangeXStart+ONE_THIRD);vec2 orgTextureRangeY=vec2(texRangeYStart,texRangeYStart+0.5);float px=scale(orgTextureRangeX,OPERATE_COORDS_RANGE,vUV.s);float py=scale(orgTextureRangeY,OPERATE_COORDS_RANGE,vUV.t);float qu=EAC_CONST*atan(px)+0.5;float qv=EAC_CONST*atan(py)+0.5;transformedCoordX=scale(TEXTURE_COORDS_RANGE,orgTextureRangeX,qu);transformedCoordY=scale(TEXTURE_COORDS_RANGE,orgTextureRangeY,qv);gl_FragColor=texture2D(uTexture,vec2(transformedCoordX,transformedCoordY));}";
var EquiangularProjection = class extends Projection {
  createMesh(ctx, texture) {
    const uniforms = {
      uTexture: new UniformTexture2D(ctx, texture)
    };
    const geometry = new CubeGeometry({
      order: "LFRDBU",
      rotateUV: [ROTATE.ZERO, ROTATE.ZERO, ROTATE.ZERO, ROTATE.CW_90, ROTATE.CCW_90, ROTATE.CW_90]
    });
    const program = new ShaderProgram(ctx, vs$2, fs$1, uniforms);
    const vao = ctx.createVAO(geometry, program);
    const mesh = new TriangleMesh(vao, program);
    return mesh;
  }
};
var SphereGeometry = class extends Geometry {
  /** */
  constructor() {
    const widthSegments = 60;
    const heightSegments = 60;
    const ANGLE_CORRECTION_FOR_CENTER_ALIGN = -0.5 * Math.PI;
    const uvs = [];
    const vertices = [];
    const indicies = [];
    let latIdx;
    let lngIdx;
    for (latIdx = 0; latIdx <= widthSegments; latIdx++) {
      const theta = (latIdx / widthSegments - 0.5) * Math.PI;
      const sinTheta = Math.sin(theta);
      const cosTheta = Math.cos(theta);
      for (lngIdx = 0; lngIdx <= heightSegments; lngIdx++) {
        const phi = (lngIdx / heightSegments - 0.5) * 2 * Math.PI + ANGLE_CORRECTION_FOR_CENTER_ALIGN;
        const sinPhi = Math.sin(phi);
        const cosPhi = Math.cos(phi);
        const x = cosPhi * cosTheta;
        const y = sinTheta;
        const z = sinPhi * cosTheta;
        const u = lngIdx / heightSegments;
        const v = latIdx / widthSegments;
        uvs.push(u, v);
        vertices.push(x, y, z);
        if (lngIdx !== heightSegments && latIdx !== widthSegments) {
          const a = latIdx * (heightSegments + 1) + lngIdx;
          const b = a + heightSegments + 1;
          indicies.push(a, a + 1, b, b, a + 1, b + 1);
        }
      }
    }
    super(vertices, indicies, uvs);
  }
};
var EquirectProjection = class extends Projection {
  /**
   * Create new instance
   * @ko 새로운 인스턴스를 생성합니다.
   * @param options - Options {@ko 옵션들}
   */
  constructor(options) {
    super(options);
  }
  createMesh(ctx, texture) {
    const uniforms = {
      uTexture: new UniformTexture2D(ctx, texture)
    };
    const geometry = new SphereGeometry();
    const program = new ShaderProgram(ctx, vs$2, fs$2, uniforms);
    const vao = ctx.createVAO(geometry, program);
    const mesh = new TriangleMesh(vao, program);
    return mesh;
  }
};
var UniformFloat = class extends Uniform {
  constructor(val) {
    super();
    this.val = val;
  }
  update(gl, location) {
    gl.uniform1f(location, this.val);
    this.needsUpdate = false;
  }
};
var PlaneGeometry = class extends Geometry {
  /** */
  constructor(width = 2, height = 2, z = -1) {
    const halfWidth = width * 0.5;
    const halfHeight = height * 0.5;
    const vertices = [-halfWidth, -halfHeight, z, halfWidth, -halfHeight, z, -halfWidth, halfHeight, z, halfWidth, halfHeight, z];
    const indicies = [0, 1, 2, 2, 1, 3];
    const uvs = [0, 0, 1, 0, 0, 1, 1, 1];
    super(vertices, indicies, uvs);
  }
};
var vs$1 = "#define GLSLIFY 1\nattribute vec3 position;attribute vec2 uv;uniform mat4 uMVMatrix;uniform mat4 uPMatrix;varying highp vec2 vUV;void main(){vUV=uv;gl_Position=vec4(position,1.0);}";
var fs = "precision mediump float;\n#define GLSLIFY 1\nuniform sampler2D uTexture;uniform float uYaw;uniform float uPitch;uniform float uZoom;varying highp vec2 vUV;const float PI=3.1415926536;const float PI_2=PI*0.5;vec2 toStereographicUV(in vec2 uv,in vec2 center){float R=1.*uZoom;vec2 texLatLon=(uv*2.-1.)*vec2(PI,PI_2);vec2 central=(center*2.-1.)*vec2(PI,PI_2)+vec2(PI,0);float x=texLatLon.x;float y=texLatLon.y;float rou=sqrt(x*x+y*y);float c=2.0*atan(rou,R*0.5);float sin_c=sin(c);float cos_c=cos(c);float sin_cy=sin(central.y);float cos_cy=cos(central.y);float lat=asin(cos_c*sin_cy+(y*sin_c*cos_cy)/rou);float lon=central.x+atan(x*sin_c,rou*cos_cy*cos_c-y*sin_cy*sin_c);float u=(lon/PI+1.0)*0.5;float v=(lat/PI_2+1.0)*0.5;return vec2(u,v);}void main(){vec2 central=vec2(uYaw,uPitch);vec2 uv=toStereographicUV(vUV,central);gl_FragColor=texture2D(uTexture,uv);}";
var LittlePlanetProjection = class extends Projection {
  /**
   * Create new instance
   * @ko 새로운 인스턴스를 생성합니다.
   * @param options - Options {@ko 옵션들}
   */
  constructor(options) {
    super(options);
  }
  createMesh(ctx, texture) {
    texture.wrapS = WebGLRenderingContext.REPEAT;
    texture.wrapT = WebGLRenderingContext.REPEAT;
    const uniforms = {
      uTexture: new UniformTexture2D(ctx, texture),
      uYaw: new UniformFloat(0),
      uPitch: new UniformFloat(0.5),
      uZoom: new UniformFloat(1)
    };
    const geometry = new PlaneGeometry();
    const program = new ShaderProgram(ctx, vs$1, fs, uniforms);
    const vao = ctx.createVAO(geometry, program);
    const mesh = new TriangleMesh(vao, program);
    mesh.on(OBJECT_3D_EVENTS.UPDATE, ({
      camera
    }) => {
      const uniforms2 = mesh.program.uniforms;
      uniforms2.uYaw.val = camera.yaw / 360;
      uniforms2.uPitch.val = camera.pitch / 180 + 0.5;
      uniforms2.uZoom.val = camera.zoom;
      uniforms2.uYaw.needsUpdate = true;
      uniforms2.uPitch.needsUpdate = true;
      uniforms2.uZoom.needsUpdate = true;
    });
    return mesh;
  }
  updateControl(control) {
    control.ignoreZoomScale = true;
  }
};
var UniformVector4Array = class extends Uniform {
  constructor(val) {
    super();
    this.val = val;
  }
  update(gl, location) {
    gl.uniform4fv(location, this.val.reduce((arr, vector) => [...arr, ...vector], []));
    this.needsUpdate = false;
  }
};
var vs = "#define GLSLIFY 1\nattribute vec3 position;attribute vec2 uv;uniform mat4 uMVMatrix;uniform mat4 uPMatrix;uniform vec4 uTexScaleOffset[2];uniform float uEye;varying highp vec2 vUV;void main(){vec4 scaleOffset=uTexScaleOffset[int(uEye)];vUV=uv.xy*scaleOffset.xy+scaleOffset.zw;gl_Position=uPMatrix*uMVMatrix*vec4(position,1.0);}";
var StereoEquiProjection = class _StereoEquiProjection extends Projection {
  /**
   * Create new instance
   * @ko 새로운 인스턴스를 생성합니다.
   * @param options - Options {@ko 옵션들}
   */
  constructor(options) {
    super(options);
    this._mode = options.mode;
  }
  createMesh(ctx, texture) {
    let leftEye;
    let rightEye;
    switch (this._mode) {
      case _StereoEquiProjection.MODE.LEFT_RIGHT:
        leftEye = [0.5, 1, 0, 0];
        rightEye = [0.5, 1, 0.5, 0];
        break;
      default:
        leftEye = [1, 0.5, 0, 0];
        rightEye = [1, 0.5, 0, 0.5];
    }
    const uniforms = {
      uTexture: new UniformTexture2D(ctx, texture),
      uEye: new UniformFloat(0),
      uTexScaleOffset: new UniformVector4Array([leftEye, rightEye])
    };
    const geometry = new SphereGeometry();
    const program = new ShaderProgram(ctx, vs, fs$2, uniforms);
    const vao = ctx.createVAO(geometry, program);
    const mesh = new TriangleMesh(vao, program);
    return mesh;
  }
};
StereoEquiProjection.MODE = {
  /**
   * @ko 이미지가 왼쪽/오른쪽으로 구성되어있을 경우
   * @since 4.0.0
   */
  LEFT_RIGHT: "left_right",
  /**
   * @ko 이미지가 위/아래로 구성되어있을 경우
   * @since 4.0.0
   */
  TOP_BOTTOM: "top_bottom"
};
var withMethods = (prototype, attr) => {
  [component_esm_default.prototype, View360.prototype].forEach((proto) => {
    Object.getOwnPropertyNames(proto).filter((name) => name.charAt(0) !== "_" && name !== "constructor").forEach((name) => {
      const descriptor = Object.getOwnPropertyDescriptor(proto, name);
      if (descriptor.value) {
        Object.defineProperty(prototype, name, {
          value: function(...args) {
            return descriptor.value.call(this[attr], ...args);
          }
        });
      } else {
        const getterDescriptor = {};
        if (descriptor.get) {
          getterDescriptor.get = function() {
            var _a2;
            return this[attr] && ((_a2 = descriptor.get) === null || _a2 === void 0 ? void 0 : _a2.call(this[attr]));
          };
        }
        if (descriptor.set) {
          getterDescriptor.set = function(...args) {
            var _a2;
            return (_a2 = descriptor.set) === null || _a2 === void 0 ? void 0 : _a2.call(this[attr], ...args);
          };
        }
        Object.defineProperty(prototype, name, getterDescriptor);
      }
    });
  });
};
var getValidProps = (propsObj) => {
  return Object.keys(propsObj).reduce((props, propName) => {
    if (propsObj[propName] != null) {
      props[propName] = propsObj[propName];
    }
    return props;
  }, {});
};
var VIEW360_METHODS = [
  "destroy",
  "init",
  "load",
  "resize",
  "addPlugins",
  "removePlugins",
  "renderFrame",
  // @egjs/component methods
  "on",
  "hasOn",
  "once",
  "off",
  "trigger"
];

// node_modules/@egjs/ngx-view360/fesm2020/egjs-ngx-view360.mjs
var _c0 = ["canvas"];
var _c1 = ["*"];
var View360Interface = class {
};
__decorate([withMethods, __metadata("design:type", View360)], View360Interface.prototype, "_view360", void 0);
var optionNames = Object.getOwnPropertyNames(View360.prototype).filter((name) => {
  const descriptor = Object.getOwnPropertyDescriptor(View360.prototype, name);
  if (name.startsWith("_"))
    return false;
  if (name === "constructor")
    return false;
  if (descriptor?.value)
    return false;
  return true;
});
var setterNames = optionNames.filter((name) => {
  const descriptor = Object.getOwnPropertyDescriptor(View360.prototype, name);
  return !!descriptor.set;
});
var NgxView360Component = class extends View360Interface {
  constructor(_elRef, _platformId, _ngZone) {
    super();
    this._elRef = _elRef;
    this._platformId = _platformId;
    this._ngZone = _ngZone;
    this.readyEmitter = new EventEmitter();
    this.loadStartEmitter = new EventEmitter();
    this.loadEmitter = new EventEmitter();
    this.projectionChangeEmitter = new EventEmitter();
    this.resizeEmitter = new EventEmitter();
    this.beforeRenderEmitter = new EventEmitter();
    this.renderEmitter = new EventEmitter();
    this.inputStartEmitter = new EventEmitter();
    this.inputEndEmitter = new EventEmitter();
    this.viewChangeEmitter = new EventEmitter();
    this.staticClickEmitter = new EventEmitter();
    this.vrStartEmitter = new EventEmitter();
    this.vrEndEmitter = new EventEmitter();
    this._destroy$ = new Subject();
    this._view360 = null;
  }
  get element() {
    return this._elRef.nativeElement;
  }
  get _canvasElClass() {
    return `${DEFAULT_CLASS.CANVAS} ${this.canvasClass ?? ""}`.trim();
  }
  ngAfterViewInit() {
    if (isPlatformServer(this._platformId))
      return;
    const container = this._elRef.nativeElement;
    const options = this.options ?? {};
    this._view360 = this._ngZone.runOutsideAngular(() => new View360(container, options));
    this._bindEvents();
  }
  ngOnDestroy() {
    this._destroy$.next();
    this._view360?.destroy();
  }
  ngOnChanges(changes) {
    const view360 = this._view360;
    if (!view360)
      return;
    const changed = changes.options;
    if (!changed)
      return;
    const prev = changed.previousValue;
    const current = changed.currentValue;
    setterNames.forEach((name) => {
      const oldProp = prev[name];
      const newProp = current[name];
      if (newProp !== oldProp) {
        view360[name] = newProp;
      }
    });
  }
  _bindEvents() {
    const view360 = this._view360;
    Object.keys(EVENTS).forEach((evtKey) => {
      const evtName = EVENTS[evtKey];
      fromEvent(view360, evtName).pipe(takeUntil(this._destroy$)).subscribe((event) => {
        const emitter = this[`${evtName}Emitter`];
        if (emitter && emitter.observers.length > 0) {
          this._ngZone.run(() => emitter.emit(event));
        }
      });
    });
  }
};
NgxView360Component.ɵfac = function NgxView360Component_Factory(t) {
  return new (t || NgxView360Component)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(PLATFORM_ID), ɵɵdirectiveInject(NgZone));
};
NgxView360Component.ɵcmp = ɵɵdefineComponent({
  type: NgxView360Component,
  selectors: [["ngx-view360"], ["", "NgxView360", ""]],
  viewQuery: function NgxView360Component_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.canvas = _t.first);
    }
  },
  hostAttrs: [1, "view360-container", 2, "display", "block"],
  inputs: {
    options: "options",
    canvasClass: "canvasClass"
  },
  outputs: {
    readyEmitter: "ready",
    loadStartEmitter: "loadStart",
    loadEmitter: "load",
    projectionChangeEmitter: "projectionChange",
    resizeEmitter: "resize",
    beforeRenderEmitter: "beforeRender",
    renderEmitter: "render",
    inputStartEmitter: "inputStart",
    inputEndEmitter: "inputEnd",
    viewChangeEmitter: "viewChange",
    staticClickEmitter: "staticClick",
    vrStartEmitter: "vrStart",
    vrEndEmitter: "vrEnd"
  },
  features: [ɵɵInheritDefinitionFeature, ɵɵNgOnChangesFeature],
  ngContentSelectors: _c1,
  decls: 3,
  vars: 1,
  consts: [["canvas", ""], [3, "ngClass"]],
  template: function NgxView360Component_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵelement(0, "canvas", 1, 0);
      ɵɵprojection(2);
    }
    if (rf & 2) {
      ɵɵproperty("ngClass", ctx._canvasElClass);
    }
  },
  dependencies: [NgClass],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxView360Component, [{
    type: Component,
    args: [{
      selector: "ngx-view360, [NgxView360]",
      template: `
    <canvas #canvas [ngClass]="_canvasElClass"></canvas>
    <ng-content></ng-content>
  `,
      host: {
        style: "display: block;",
        class: "view360-container"
      }
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: void 0,
      decorators: [{
        type: Inject,
        args: [PLATFORM_ID]
      }]
    }, {
      type: NgZone
    }];
  }, {
    options: [{
      type: Input
    }],
    canvasClass: [{
      type: Input
    }],
    readyEmitter: [{
      type: Output,
      args: ["ready"]
    }],
    loadStartEmitter: [{
      type: Output,
      args: ["loadStart"]
    }],
    loadEmitter: [{
      type: Output,
      args: ["load"]
    }],
    projectionChangeEmitter: [{
      type: Output,
      args: ["projectionChange"]
    }],
    resizeEmitter: [{
      type: Output,
      args: ["resize"]
    }],
    beforeRenderEmitter: [{
      type: Output,
      args: ["beforeRender"]
    }],
    renderEmitter: [{
      type: Output,
      args: ["render"]
    }],
    inputStartEmitter: [{
      type: Output,
      args: ["inputStart"]
    }],
    inputEndEmitter: [{
      type: Output,
      args: ["inputEnd"]
    }],
    viewChangeEmitter: [{
      type: Output,
      args: ["viewChange"]
    }],
    staticClickEmitter: [{
      type: Output,
      args: ["staticClick"]
    }],
    vrStartEmitter: [{
      type: Output,
      args: ["vrStart"]
    }],
    vrEndEmitter: [{
      type: Output,
      args: ["vrEnd"]
    }],
    canvas: [{
      type: ViewChild,
      args: ["canvas"]
    }]
  });
})();
var NgxView360Module = class {
};
NgxView360Module.ɵfac = function NgxView360Module_Factory(t) {
  return new (t || NgxView360Module)();
};
NgxView360Module.ɵmod = ɵɵdefineNgModule({
  type: NgxView360Module,
  declarations: [NgxView360Component],
  imports: [CommonModule],
  exports: [NgxView360Component]
});
NgxView360Module.ɵinj = ɵɵdefineInjector({
  imports: [CommonModule]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxView360Module, [{
    type: NgModule,
    args: [{
      declarations: [NgxView360Component],
      imports: [CommonModule],
      exports: [NgxView360Component]
    }]
  }], null, null);
})();
export {
  AutoResizer,
  Autoplay,
  Camera,
  CameraAnimation,
  ControlBar,
  ControlBarItem,
  CubemapProjection,
  CubestripProjection,
  CylindricalProjection,
  DEFAULT_CLASS,
  EASING,
  ERROR_CODES,
  EVENTS,
  EquiangularProjection,
  EquirectProjection,
  FullscreenButton,
  GyroControl,
  Hotspot,
  HotspotRenderer,
  LittlePlanetProjection,
  LoadingSpinner,
  Motion,
  NgxView360Component,
  NgxView360Module,
  Object3D,
  PanoControl,
  PieView,
  PlayButton,
  ProgressBar,
  Projection,
  RotateControl,
  StereoEquiProjection,
  VIEW360_METHODS,
  VideoTime,
  View360Error,
  VolumeControl,
  WebGLRenderer,
  XRManager,
  ZoomControl,
  getValidProps,
  withMethods
};
/*! Bundled license information:

@egjs/component/dist/component.esm.js:
  (*! *****************************************************************************
  Copyright (c) Microsoft Corporation.
  
  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.
  
  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** *)
*/
//# sourceMappingURL=@egjs_ngx-view360.js.map
