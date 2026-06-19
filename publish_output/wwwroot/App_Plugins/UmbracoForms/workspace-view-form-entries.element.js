import { c as f, K as w } from "./index.js";
import { LitElement as E, when as d, html as p, customElement as O } from "@umbraco-cms/backoffice/external/lit";
import { UmbElementMixin as u } from "@umbraco-cms/backoffice/element-api";
var C = Object.getOwnPropertyDescriptor, v = (e) => {
  throw TypeError(e);
}, k = (e, t, r, n) => {
  for (var a = n > 1 ? void 0 : n ? C(t, r) : t, o = e.length - 1, _; o >= 0; o--)
    (_ = e[o]) && (a = _(a) || a);
  return a;
}, h = (e, t, r) => t.has(e) || v("Cannot " + r), l = (e, t, r) => (h(e, t, "read from private field"), r ? r.call(e) : t.get(e)), m = (e, t, r) => t.has(e) ? v("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), M = (e, t, r, n) => (h(e, t, "write to private field"), t.set(e, r), r), s, i;
const S = "workspace-view-form-entries";
let c = class extends u(E) {
  constructor() {
    super(), m(this, s), m(this, i, {
      pageSize: 10
    }), this.consumeContext(f, (e) => {
      M(this, s, e);
    });
  }
  render() {
    var e;
    return p` ${d(
      !((e = l(this, s)) != null && e.getIsNew()),
      () => p`<umb-collection
          alias=${w}
          .config=${l(this, i)}
        ></umb-collection>`
    )}`;
  }
};
s = /* @__PURE__ */ new WeakMap();
i = /* @__PURE__ */ new WeakMap();
c = k([
  O(S)
], c);
const W = c;
export {
  c as UmbWorkspaceViewFormEntriesElement,
  W as default
};
//# sourceMappingURL=workspace-view-form-entries.element.js.map
