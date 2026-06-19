import { a5 as y, a2 as M, a3 as D } from "./index.js";
import "@umbraco-cms/backoffice/id";
import "@umbraco-cms/backoffice/resources";
import "@umbraco-cms/backoffice/repository";
import { html as l, customElement as F } from "@umbraco-cms/backoffice/external/lit";
import { UmbModalBaseElement as T } from "@umbraco-cms/backoffice/modal";
import { UMB_ACTION_EVENT_CONTEXT as w } from "@umbraco-cms/backoffice/action";
import { UmbRequestReloadChildrenOfEntityEvent as O } from "@umbraco-cms/backoffice/entity-action";
var q = Object.getOwnPropertyDescriptor, E = (e) => {
  throw TypeError(e);
}, C = (e, t, a, r) => {
  for (var d = r > 1 ? void 0 : r ? q(t, a) : t, u = e.length - 1, _; u >= 0; u--)
    (_ = e[u]) && (d = _(d) || d);
  return d;
}, h = (e, t, a) => t.has(e) || E("Cannot " + a), o = (e, t, a) => (h(e, t, "read from private field"), a ? a.call(e) : t.get(e)), c = (e, t, a) => t.has(e) ? E("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, a), f = (e, t, a, r) => (h(e, t, "write to private field"), t.set(e, a), a), R = (e, t, a) => (h(e, t, "access private method"), a), i, s, n, m, v;
let p = class extends T {
  constructor() {
    super(...arguments), c(this, m), c(this, i), c(this, s), c(this, n, new y(this));
  }
  async connectedCallback() {
    var a;
    if (super.connectedCallback(), !((a = this.data) != null && a.unique)) return;
    const e = await o(this, n).requestByUnique(this.data.unique);
    f(this, i, e.data);
    const t = await o(this, n).isEmpty(this.data.unique);
    f(this, s, t), this.requestUpdate();
  }
  render() {
    var e;
    return l`
      <umb-body-layout
        headline=${this.localize.term("formDelete_folderDeleteModalHeadline")}
      >
        <uui-box>
          <p>
            ${o(this, s) ? l`${this.localize.term(
      "formDelete_folderDeleteModalHeadline",
      (e = o(this, i)) == null ? void 0 : e.name
    )}` : l`${this.localize.term("formDelete_folderNotEmptyMessage")}`}
          </p>
        </uui-box>
        <uui-button
          slot="actions"
          id="cancel"
          label=${this.localize.term("general_cancel")}
          @click="${this._rejectModal}"
          >${this.localize.term("general_cancel")}</uui-button
        >
        ${o(this, s) ? l`<uui-button
              slot="actions"
              type="button"
              label=${this.localize.term("general_delete")}
              look="primary"
              color="danger"
              @click=${R(this, m, v)}
            ></uui-button>` : l``}
      </umb-body-layout>
    `;
  }
};
i = /* @__PURE__ */ new WeakMap();
s = /* @__PURE__ */ new WeakMap();
n = /* @__PURE__ */ new WeakMap();
m = /* @__PURE__ */ new WeakSet();
v = async function(e) {
  var t;
  if (e.stopPropagation(), (t = this.data) != null && t.unique && o(this, i)) {
    await o(this, n).delete(this.data.unique);
    const a = new O({
      entityType: o(this, i).parentUnique ? M : D,
      unique: o(this, i).parentUnique
    }), r = await this.getContext(w);
    r == null || r.dispatchEvent(a);
  }
  this._submitModal();
};
p = C([
  F("forms-folder-delete-confirm-modal")
], p);
const P = p;
export {
  p as FormsFolderDeleteConfirmModalElement,
  P as default
};
//# sourceMappingURL=folder-delete-confirm-modal.element.js.map
