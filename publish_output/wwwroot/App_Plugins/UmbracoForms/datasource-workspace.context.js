var f = (t) => {
  throw TypeError(t);
};
var v = (t, s, e) => s.has(t) || f("Cannot " + e);
var o = (t, s, e) => (v(t, s, "read from private field"), e ? e.call(t) : s.get(t)), l = (t, s, e) => s.has(t) ? f("Cannot add the same private member more than once") : s instanceof WeakSet ? s.add(t) : s.set(t, e), d = (t, s, e, a) => (v(t, s, "write to private field"), a ? a.call(t, e) : s.set(t, e), e);
import { j as O, m as R, n as q, o as N, p as C, q as b } from "./index.js";
import { UmbElementMixin as I } from "@umbraco-cms/backoffice/element-api";
import { LitElement as U, html as A, css as P, state as F, property as W, customElement as k } from "@umbraco-cms/backoffice/external/lit";
import { UmbSubmittableWorkspaceContextBase as x } from "@umbraco-cms/backoffice/workspace";
import { UmbObjectState as M } from "@umbraco-cms/backoffice/observable-api";
import { UMB_ACTION_EVENT_CONTEXT as z } from "@umbraco-cms/backoffice/action";
import { UmbRequestReloadChildrenOfEntityEvent as B, UmbRequestReloadStructureForEntityEvent as V } from "@umbraco-cms/backoffice/entity-action";
import { UMB_NOTIFICATION_CONTEXT as Y } from "@umbraco-cms/backoffice/notification";
import { UmbLocalizationController as $ } from "@umbraco-cms/backoffice/localization-api";
var L = Object.defineProperty, X = Object.getOwnPropertyDescriptor, E = (t) => {
  throw TypeError(t);
}, S = (t, s, e, a) => {
  for (var i = a > 1 ? void 0 : a ? X(s, e) : s, n = t.length - 1, m; n >= 0; n--)
    (m = t[n]) && (i = (a ? m(s, e, i) : m(i)) || i);
  return a && i && L(s, e, i), i;
}, _ = (t, s, e) => s.has(t) || E("Cannot " + e), y = (t, s, e) => (_(t, s, "read from private field"), s.get(t)), T = (t, s, e) => s.has(t) ? E("Cannot add the same private member more than once") : s instanceof WeakSet ? s.add(t) : s.set(t, e), K = (t, s, e, a) => (_(t, s, "write to private field"), s.set(t, e), e), w = (t, s, e) => (_(t, s, "access private method"), e), c, h, g, D;
const G = "forms-datasource-workspace-editor";
let u = class extends I(
  U
) {
  constructor() {
    super(), T(this, h), this._dataSourceName = "", T(this, c), this.consumeContext(O, (t) => {
      K(this, c, t), w(this, h, g).call(this);
    });
  }
  render() {
    return A` <umb-workspace-editor alias="Forms.Workspace.DataSources">
      <uui-input
        slot="header"
        id="nameInput"
        label=${this.localize.term("placeholders_entername")}
        placeholder=${this.localize.term("placeholders_entername")}
        required
        .value=${this._dataSourceName}
        @input="${w(this, h, D)}"
      ></uui-input>
    </umb-workspace-editor>`;
  }
};
c = /* @__PURE__ */ new WeakMap();
h = /* @__PURE__ */ new WeakSet();
g = function() {
  y(this, c) && this.observe(
    y(this, c).data,
    (t) => this._dataSourceName = (t == null ? void 0 : t.name) ?? ""
  );
};
D = function(t) {
  var s;
  (s = y(this, c)) == null || s.setName(t.target.value.toString());
};
u.styles = [
  P`
      :host {
        display: block;
        width: 100%;
        height: 100%;
      }

      #nameInput {
        flex: 1 1 auto;
      }
    `
];
S([
  F()
], u.prototype, "_dataSourceName", 2);
S([
  W({ type: String, attribute: !1 })
], u.prototype, "workspaceAlias", 2);
u = S([
  k(G)
], u);
var r, p;
class j extends x {
  constructor(e) {
    super(e, R);
    l(this, r);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    l(this, p);
    this.dataSourceRepository = new q(
      this
    ), this.dataSourceTypeRepository = new N(this), d(this, r, new M(void 0)), this.data = o(this, r).asObservable(), this.unique = o(this, r).asObservablePart((a) => a == null ? void 0 : a.unique), this.name = o(this, r).asObservablePart((a) => a == null ? void 0 : a.name), this.id = o(this, r).asObservablePart((a) => a == null ? void 0 : a.unique), this.routes.setRoutes([
      {
        path: "create/:type",
        component: u,
        setup: async (a, i) => {
          const n = i.match.params.type;
          await this.create(n);
        }
      },
      {
        path: "edit/:unique",
        component: u,
        setup: (a, i) => {
          const n = i.match.params.unique;
          this.load(n);
        }
      }
    ]);
  }
  async load(e) {
    d(this, p, this.dataSourceRepository.requestByUnique(e));
    const { data: a } = await o(this, p);
    a && (this.setIsNew(!1), o(this, r).update(a), this.view.setTitle(a.name || ""));
  }
  async create(e) {
    let i = (await this.dataSourceRepository.requestDataSourceScaffold()).data;
    return i.formDataSourceTypeId = e, this.modalContext && (i = { ...i, ...this.modalContext.data.preset }), this.setIsNew(!0), o(this, r).setValue(i), { data: i };
  }
  async requestSave() {
    await this.submit();
  }
  async submit() {
    if (!o(this, r).value || !o(this, r).value.unique) return;
    if (o(this, r).value.name.trim().length === 0) {
      const a = await this.getContext(
        Y
      ), i = new $(this);
      a == null || a.peek("danger", {
        data: {
          message: i.term("formEdit_noNameForForm")
        }
      });
      return;
    }
    const e = await this.getContext(z);
    if (this.getIsNew()) {
      await this.dataSourceRepository.create(o(this, r).value, null);
      const a = new B({
        entityType: C,
        unique: null
      });
      e == null || e.dispatchEvent(a), this.setIsNew(!1);
    } else {
      await this.dataSourceRepository.save(o(this, r).value);
      const a = new V({
        unique: this.getUnique(),
        entityType: this.getEntityType()
      });
      e == null || e.dispatchEvent(a);
    }
  }
  async loadDataSourceType(e) {
    const { data: a } = await this.dataSourceTypeRepository.requestByUnique(e);
    return a;
  }
  getData() {
    return o(this, r).getValue();
  }
  getUnique() {
    var e;
    return ((e = this.getData()) == null ? void 0 : e.unique) || "";
  }
  getDataSourceTypeId() {
    var e;
    return ((e = this.getData()) == null ? void 0 : e.formDataSourceTypeId) || "";
  }
  getEntityType() {
    return b;
  }
  getName() {
    var e;
    return (e = o(this, r).getValue()) == null ? void 0 : e.name;
  }
  setName(e) {
    o(this, r).update({ name: e });
  }
  setDataSourceProperty(e, a) {
    o(this, r).update({ [e]: a });
  }
  getDataSourceProperty(e) {
    var a;
    return (a = this.getData()) == null ? void 0 : a[e];
  }
  async getWizardScaffold() {
    const { data: e } = await this.dataSourceRepository.requestDataSourceWizardScaffold(
      this.getUnique()
    );
    return e;
  }
  destroy() {
    o(this, r).destroy(), super.destroy();
  }
}
r = new WeakMap(), p = new WeakMap();
const oe = j;
export {
  j as FormsDataSourceWorkspaceContext,
  oe as api
};
//# sourceMappingURL=datasource-workspace.context.js.map
