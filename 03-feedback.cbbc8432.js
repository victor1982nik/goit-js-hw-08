var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},t={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in a)return a[e].exports;if(e in t){var n=t[e];delete t[e];var l={id:e,exports:{}};return a[e]=l,n.call(l.exports,l,l.exports),l.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,a){t[e]=a},e.parcelRequired7c6=n);var l=n("kEUo3"),o=n("5uEKZ");const r=document.querySelector(".feedback-form"),i=r.elements.email,s=r.elements.message;!function(){const e=(0,o.getData)("feedback-form-state");e&&(i.value=e.email,s.value=e.message)}(),r.addEventListener("input",(0,l.throttle)((function(e){(0,o.saveData)({email:i.value,message:s.value},"feedback-form-state")}),500)),r.addEventListener("submit",(function(e){e.preventDefault(),console.log({email:i.value,message:s.value}),i.value="",s.value="",localStorage.clear()}));
//# sourceMappingURL=03-feedback.cbbc8432.js.map
