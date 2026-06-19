var Sm = Object.defineProperty;
var Ds = (t) => {
  throw TypeError(t);
};
var bm = (t, e, r) => e in t ? Sm(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r;
var Rs = (t, e, r) => bm(t, typeof e != "symbol" ? e + "" : e, r), Ia = (t, e, r) => e.has(t) || Ds("Cannot " + r);
var c = (t, e, r) => (Ia(t, e, "read from private field"), r ? r.call(t) : e.get(t)), h = (t, e, r) => e.has(t) ? Ds("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), y = (t, e, r, a) => (Ia(t, e, "write to private field"), a ? a.call(t, r) : e.set(t, r), r), F = (t, e, r) => (Ia(t, e, "access private method"), r);
import { UmbModalToken as C, UMB_MODAL_MANAGER_CONTEXT as q, UmbModalBaseElement as be, umbConfirmModal as Po } from "@umbraco-cms/backoffice/modal";
import { UmbEntityActionBase as re } from "@umbraco-cms/backoffice/entity-action";
import { UmbConditionBase as gn, umbExtensionsRegistry as vn } from "@umbraco-cms/backoffice/extension-registry";
import { UmbContextToken as L } from "@umbraco-cms/backoffice/context-api";
import { UmbContextBase as Fm, UmbControllerBase as _n } from "@umbraco-cms/backoffice/class-api";
import { tryExecute as d, UmbApiError as wm } from "@umbraco-cms/backoffice/resources";
import { UmbObjectState as Is, partialUpdateFrozenArray as Ut, filterFrozenArray as Us, appendToFrozenArray as zs, assignToFrozenObject as Em } from "@umbraco-cms/backoffice/observable-api";
import { UMB_CURRENT_USER_CONTEXT as Sn } from "@umbraco-cms/backoffice/current-user";
import { UmbTreeServerDataSourceBase as ua, UmbUniqueTreeStore as da, UmbTreeRepositoryBase as ma, UMB_TREE_PICKER_MODAL_ALIAS as bn } from "@umbraco-cms/backoffice/tree";
import { UmbDetailStoreBase as Fe, UmbItemStoreBase as Fn } from "@umbraco-cms/backoffice/store";
import { UmbId as K } from "@umbraco-cms/backoffice/id";
import { UmbDetailRepositoryBase as we, UmbItemServerDataSourceBase as wn, UmbItemRepositoryBase as En } from "@umbraco-cms/backoffice/repository";
import { UmbWorkspaceActionBase as $m, UmbSaveWorkspaceAction as Tr } from "@umbraco-cms/backoffice/workspace";
import { customElement as f, html as n, css as x, property as m, when as p, map as Cm, state as b, queryAll as $n, nothing as Tm, LitElement as Dt, unsafeHTML as Cn, repeat as Tn } from "@umbraco-cms/backoffice/external/lit";
import { UmbSorterController as ii } from "@umbraco-cms/backoffice/sorter";
import { UmbLitElement as Ee } from "@umbraco-cms/backoffice/lit-element";
import { UMB_NOTIFICATION_CONTEXT as ai } from "@umbraco-cms/backoffice/notification";
import { firstValueFrom as xo, first as Om } from "@umbraco-cms/backoffice/external/rxjs";
import { generateAlias as Ws, blobDownload as Pm, ensurePathEndsWithSlash as xm, splitStringToArray as On } from "@umbraco-cms/backoffice/utils";
import { UMB_DOCUMENT_ENTITY_TYPE as Mm, UmbDocumentPreviewRepository as km } from "@umbraco-cms/backoffice/document";
import { UMB_SERVER_CONTEXT as Am } from "@umbraco-cms/backoffice/server";
import { UmbLocalizationController as Dm } from "@umbraco-cms/backoffice/localization-api";
import { loadManifestApi as Rm } from "@umbraco-cms/backoffice/extension-api";
import { MediaService as Im } from "@umbraco-cms/backoffice/external/backend-api";
import { encodeFolderName as Um } from "@umbraco-cms/backoffice/router";
import { UMB_COLLECTION_ALIAS_CONDITION as Mo, UmbDefaultCollectionContext as zm, UMB_COLLECTION_CONTEXT as Wm } from "@umbraco-cms/backoffice/collection";
import { UmbEntityBulkActionBase as Lm } from "@umbraco-cms/backoffice/entity-bulk-action";
import { UMB_AUTH_CONTEXT as Vm } from "@umbraco-cms/backoffice/auth";
import { UmbElementMixin as st } from "@umbraco-cms/backoffice/element-api";
import { UUITextareaEvent as Nm, UUIRefNodeFormElement as qm, UUIRefNodeElement as Bm, UUIFormControlMixin as Pn } from "@umbraco-cms/backoffice/external/uui";
import { UmbTextStyles as xn } from "@umbraco-cms/backoffice/style";
import { UmbPickerInputContext as Mn } from "@umbraco-cms/backoffice/picker-input";
const jm = [
  {
    type: "localization",
    alias: "Forms.Localization.En",
    weight: -100,
    name: "English (US)",
    meta: {
      culture: "en-us"
    },
    js: () => import("./en.js")
  },
  {
    type: "localization",
    alias: "Forms.Localization.Cs_CZ",
    weight: -100,
    name: "Czech",
    meta: {
      culture: "cs"
    },
    js: () => import("./cs-cz.js")
  },
  {
    type: "localization",
    alias: "Forms.Localization.Da_DK",
    weight: -100,
    name: "Danish",
    meta: {
      culture: "da"
    },
    js: () => import("./da-dk.js")
  },
  {
    type: "localization",
    alias: "Forms.Localization.En_GB",
    weight: -100,
    name: "English (UK)",
    meta: {
      culture: "en"
    },
    js: () => import("./en-gb.js")
  },
  {
    type: "localization",
    alias: "Forms.Localization.Es_ES",
    weight: -100,
    name: "Spanish",
    meta: {
      culture: "es"
    },
    js: () => import("./es-es.js")
  },
  {
    type: "localization",
    alias: "Forms.Localization.Fr_FR",
    weight: -100,
    name: "French",
    meta: {
      culture: "fr"
    },
    js: () => import("./fr-fr.js")
  },
  {
    type: "localization",
    alias: "Forms.Localization.It_IT",
    weight: -100,
    name: "Italian",
    meta: {
      culture: "it"
    },
    js: () => import("./it-it.js")
  },
  {
    type: "localization",
    alias: "Forms.Localization.Pl_PL",
    weight: -100,
    name: "Polish",
    meta: {
      culture: "pl"
    },
    js: () => import("./pl-pl.js")
  },
  {
    type: "localization",
    alias: "Forms.Localization.Nl_NL",
    weight: -100,
    name: "Dutch",
    meta: {
      culture: "nl"
    },
    js: () => import("./nl-nl.js")
  }
], Ym = [...jm], Rt = "forms-datasource", oi = "forms-datasource-root", Gm = new C(
  "Forms.Modal.DataSourceCreateOptions",
  {
    modal: {
      type: "sidebar",
      size: "small"
    }
  }
);
class Hm extends re {
  async execute() {
    const e = await this.getContext(q);
    if (!e) throw new Error("Modal manager not found");
    await e.open(
      this,
      Gm
    ).onSubmit().catch(() => {
    });
  }
}
const Km = [
  {
    type: "entityAction",
    kind: "create",
    alias: "Forms.EntityAction.DataSource.Create",
    name: "Create Data Source Entity Action",
    weight: 1e3,
    api: Hm,
    forEntityTypes: [oi],
    meta: {
      icon: "icon-add",
      label: "Create..."
    }
  },
  {
    type: "modal",
    alias: "Forms.Modal.DataSourceCreateOptions",
    name: "Data Source Create Options Modal",
    js: () => import("./datasource-create-options-modal.element.js")
  }
], Xm = new C(
  "Forms.Modal.DatasourceDeleteConfirm",
  {
    modal: {
      type: "sidebar",
      size: "small"
    }
  }
);
class Jm extends re {
  async execute() {
    const e = await this.getContext(q);
    if (!e) throw new Error("Modal manager not found");
    await e.open(
      this,
      Xm,
      {
        data: {
          unique: this.args.unique
        }
      }
    ).onSubmit().catch(() => {
    });
  }
}
const Qm = [
  {
    type: "entityAction",
    kind: "delete",
    alias: "Forms.EntityAction.Datasource.Delete",
    name: "Delete Datasource Entity Action",
    weight: 100,
    api: Jm,
    forEntityTypes: [Rt],
    meta: {
      icon: "icon-delete",
      label: "Delete..."
    }
  },
  {
    type: "modal",
    alias: "Forms.Modal.DatasourceDeleteConfirm",
    name: "Prevalue Source Delete Confirm Modal",
    js: () => import("./datasource-delete-confirm-modal.element.js")
  }
], Zm = [
  {
    type: "entityAction",
    kind: "reloadTreeItemChildren",
    alias: "Forms.EntityAction.DataSource.ReloadChildrenOf",
    name: "Reload Children",
    forEntityTypes: [oi]
  }
], ep = [
  ...Zm,
  ...Km,
  ...Qm
], kn = "Forms.Condition.DataSourceCreated", tp = [
  {
    type: "condition",
    name: "Forms Data Source Created Condition",
    alias: kn,
    api: () => import("./datasource-created.condition.js")
  }
], rp = [...tp], ko = "Umb.Section.Forms", Ot = "Umb.Menu.Forms", ip = {
  type: "section",
  alias: ko,
  name: "Forms Section",
  weight: 0,
  meta: {
    label: "#sections_forms",
    pathname: "forms"
  }
}, ap = [
  {
    type: "sectionSidebarApp",
    kind: "menu",
    alias: "Umb.SectionSidebarMenu.Forms",
    name: "Forms Section Sidebar Menu Forms",
    weight: 400,
    meta: {
      label: "#sections_forms",
      menu: Ot
    },
    conditions: [
      {
        alias: "Umb.Condition.SectionAlias",
        match: ko
      }
    ]
  }
], op = [
  {
    type: "menu",
    alias: Ot,
    name: "Forms Menu",
    meta: {
      label: "#sections_forms"
    }
  }
], sp = [ip, ...ap, ...op], si = new L("forms-context"), An = {
  SHOW: "Show"
}, Dn = {
  ALL: "All"
}, np = {
  IS: "Is"
}, lp = {
  MARK_MANDATORY_FIELDS: "MarkMandatoryFields"
}, wt = {
  FALSE: "False",
  TRUE: "True"
}, me = {
  NONE: "None",
  SHOW_AT_TOP: "ShowAtTop",
  SHOW_AT_BOTTOM: "ShowAtBottom"
}, Rn = {
  DESCENDING: "Descending"
};
var cp = async (t, e) => {
  let r = typeof e == "function" ? await e(t) : e;
  if (r) return t.scheme === "bearer" ? `Bearer ${r}` : t.scheme === "basic" ? `Basic ${btoa(r)}` : r;
}, up = { bodySerializer: (t) => JSON.stringify(t, (e, r) => typeof r == "bigint" ? r.toString() : r) }, dp = (t) => {
  switch (t) {
    case "label":
      return ".";
    case "matrix":
      return ";";
    case "simple":
      return ",";
    default:
      return "&";
  }
}, mp = (t) => {
  switch (t) {
    case "form":
      return ",";
    case "pipeDelimited":
      return "|";
    case "spaceDelimited":
      return "%20";
    default:
      return ",";
  }
}, pp = (t) => {
  switch (t) {
    case "label":
      return ".";
    case "matrix":
      return ";";
    case "simple":
      return ",";
    default:
      return "&";
  }
}, In = ({ allowReserved: t, explode: e, name: r, style: a, value: i }) => {
  if (!e) {
    let l = (t ? i : i.map((g) => encodeURIComponent(g))).join(mp(a));
    switch (a) {
      case "label":
        return `.${l}`;
      case "matrix":
        return `;${r}=${l}`;
      case "simple":
        return l;
      default:
        return `${r}=${l}`;
    }
  }
  let o = dp(a), s = i.map((l) => a === "label" || a === "simple" ? t ? l : encodeURIComponent(l) : pa({ allowReserved: t, name: r, value: l })).join(o);
  return a === "label" || a === "matrix" ? o + s : s;
}, pa = ({ allowReserved: t, name: e, value: r }) => {
  if (r == null) return "";
  if (typeof r == "object") throw new Error("Deeply-nested arrays/objects aren’t supported. Provide your own `querySerializer()` to handle these.");
  return `${e}=${t ? r : encodeURIComponent(r)}`;
}, Un = ({ allowReserved: t, explode: e, name: r, style: a, value: i, valueOnly: o }) => {
  if (i instanceof Date) return o ? i.toISOString() : `${r}=${i.toISOString()}`;
  if (a !== "deepObject" && !e) {
    let g = [];
    Object.entries(i).forEach(([k, O]) => {
      g = [...g, k, t ? O : encodeURIComponent(O)];
    });
    let S = g.join(",");
    switch (a) {
      case "form":
        return `${r}=${S}`;
      case "label":
        return `.${S}`;
      case "matrix":
        return `;${r}=${S}`;
      default:
        return S;
    }
  }
  let s = pp(a), l = Object.entries(i).map(([g, S]) => pa({ allowReserved: t, name: a === "deepObject" ? `${r}[${g}]` : g, value: S })).join(s);
  return a === "label" || a === "matrix" ? s + l : l;
}, hp = /\{[^{}]+\}/g, fp = ({ path: t, url: e }) => {
  let r = e, a = e.match(hp);
  if (a) for (let i of a) {
    let o = !1, s = i.substring(1, i.length - 1), l = "simple";
    s.endsWith("*") && (o = !0, s = s.substring(0, s.length - 1)), s.startsWith(".") ? (s = s.substring(1), l = "label") : s.startsWith(";") && (s = s.substring(1), l = "matrix");
    let g = t[s];
    if (g == null) continue;
    if (Array.isArray(g)) {
      r = r.replace(i, In({ explode: o, name: s, style: l, value: g }));
      continue;
    }
    if (typeof g == "object") {
      r = r.replace(i, Un({ explode: o, name: s, style: l, value: g, valueOnly: !0 }));
      continue;
    }
    if (l === "matrix") {
      r = r.replace(i, `;${pa({ name: s, value: g })}`);
      continue;
    }
    let S = encodeURIComponent(l === "label" ? `.${g}` : g);
    r = r.replace(i, S);
  }
  return r;
}, zn = ({ allowReserved: t, array: e, object: r } = {}) => (a) => {
  let i = [];
  if (a && typeof a == "object") for (let o in a) {
    let s = a[o];
    if (s != null) if (Array.isArray(s)) {
      let l = In({ allowReserved: t, explode: !0, name: o, style: "form", value: s, ...e });
      l && i.push(l);
    } else if (typeof s == "object") {
      let l = Un({ allowReserved: t, explode: !0, name: o, style: "deepObject", value: s, ...r });
      l && i.push(l);
    } else {
      let l = pa({ allowReserved: t, name: o, value: s });
      l && i.push(l);
    }
  }
  return i.join("&");
}, yp = (t) => {
  var r;
  if (!t) return "stream";
  let e = (r = t.split(";")[0]) == null ? void 0 : r.trim();
  if (e) {
    if (e.startsWith("application/json") || e.endsWith("+json")) return "json";
    if (e === "multipart/form-data") return "formData";
    if (["application/", "audio/", "image/", "video/"].some((a) => e.startsWith(a))) return "blob";
    if (e.startsWith("text/")) return "text";
  }
}, gp = async ({ security: t, ...e }) => {
  for (let r of t) {
    let a = await cp(r, e.auth);
    if (!a) continue;
    let i = r.name ?? "Authorization";
    switch (r.in) {
      case "query":
        e.query || (e.query = {}), e.query[i] = a;
        break;
      case "cookie":
        e.headers.append("Cookie", `${i}=${a}`);
        break;
      case "header":
      default:
        e.headers.set(i, a);
        break;
    }
    return;
  }
}, Ls = (t) => vp({ baseUrl: t.baseUrl, path: t.path, query: t.query, querySerializer: typeof t.querySerializer == "function" ? t.querySerializer : zn(t.querySerializer), url: t.url }), vp = ({ baseUrl: t, path: e, query: r, querySerializer: a, url: i }) => {
  let o = i.startsWith("/") ? i : `/${i}`, s = (t ?? "") + o;
  e && (s = fp({ path: e, url: s }));
  let l = r ? a(r) : "";
  return l.startsWith("?") && (l = l.substring(1)), l && (s += `?${l}`), s;
}, Vs = (t, e) => {
  var a;
  let r = { ...t, ...e };
  return (a = r.baseUrl) != null && a.endsWith("/") && (r.baseUrl = r.baseUrl.substring(0, r.baseUrl.length - 1)), r.headers = Wn(t.headers, e.headers), r;
}, Wn = (...t) => {
  let e = new Headers();
  for (let r of t) {
    if (!r || typeof r != "object") continue;
    let a = r instanceof Headers ? r.entries() : Object.entries(r);
    for (let [i, o] of a) if (o === null) e.delete(i);
    else if (Array.isArray(o)) for (let s of o) e.append(i, s);
    else o !== void 0 && e.set(i, typeof o == "object" ? JSON.stringify(o) : o);
  }
  return e;
}, Ua = class {
  constructor() {
    Rs(this, "_fns");
    this._fns = [];
  }
  clear() {
    this._fns = [];
  }
  getInterceptorIndex(t) {
    return typeof t == "number" ? this._fns[t] ? t : -1 : this._fns.indexOf(t);
  }
  exists(t) {
    let e = this.getInterceptorIndex(t);
    return !!this._fns[e];
  }
  eject(t) {
    let e = this.getInterceptorIndex(t);
    this._fns[e] && (this._fns[e] = null);
  }
  update(t, e) {
    let r = this.getInterceptorIndex(t);
    return this._fns[r] ? (this._fns[r] = e, t) : !1;
  }
  use(t) {
    return this._fns = [...this._fns, t], this._fns.length - 1;
  }
}, _p = () => ({ error: new Ua(), request: new Ua(), response: new Ua() }), Sp = zn({ allowReserved: !1, array: { explode: !0, style: "form" }, object: { explode: !0, style: "deepObject" } }), bp = { "Content-Type": "application/json" }, Ln = (t = {}) => ({ ...up, headers: bp, parseAs: "auto", querySerializer: Sp, ...t }), Fp = (t = {}) => {
  let e = Vs(Ln(), t), r = () => ({ ...e }), a = (s) => (e = Vs(e, s), r()), i = _p(), o = async (s) => {
    let l = { ...e, ...s, fetch: s.fetch ?? e.fetch ?? globalThis.fetch, headers: Wn(e.headers, s.headers) };
    l.security && await gp({ ...l, security: l.security }), l.body && l.bodySerializer && (l.body = l.bodySerializer(l.body)), (l.body === void 0 || l.body === "") && l.headers.delete("Content-Type");
    let g = Ls(l), S = { redirect: "follow", ...l }, k = new Request(g, S);
    for (let A of i.request._fns) A && (k = await A(k, l));
    let O = l.fetch, z = await O(k);
    for (let A of i.response._fns) A && (z = await A(z, k, l));
    let Q = { request: k, response: z };
    if (z.ok) {
      if (z.status === 204 || z.headers.get("Content-Length") === "0") return l.responseStyle === "data" ? {} : { data: {}, ...Q };
      let A = (l.parseAs === "auto" ? yp(z.headers.get("Content-Type")) : l.parseAs) ?? "json";
      if (A === "stream") return l.responseStyle === "data" ? z.body : { data: z.body, ...Q };
      let P = await z[A]();
      return A === "json" && (l.responseValidator && await l.responseValidator(P), l.responseTransformer && (P = await l.responseTransformer(P))), l.responseStyle === "data" ? P : { data: P, ...Q };
    }
    let _ = await z.text();
    try {
      _ = JSON.parse(_);
    } catch {
    }
    let B = _;
    for (let A of i.error._fns) A && (B = await A(_, z, k, l));
    if (B = B || {}, l.throwOnError) throw B;
    return l.responseStyle === "data" ? void 0 : { error: B, ...Q };
  };
  return { buildUrl: Ls, connect: (s) => o({ ...s, method: "CONNECT" }), delete: (s) => o({ ...s, method: "DELETE" }), get: (s) => o({ ...s, method: "GET" }), getConfig: r, head: (s) => o({ ...s, method: "HEAD" }), interceptors: i, options: (s) => o({ ...s, method: "OPTIONS" }), patch: (s) => o({ ...s, method: "PATCH" }), post: (s) => o({ ...s, method: "POST" }), put: (s) => o({ ...s, method: "PUT" }), request: o, setConfig: a, trace: (s) => o({ ...s, method: "TRACE" }) };
};
const u = Fp(
  Ln({
    baseUrl: "http://localhost:50877",
    throwOnError: !0
  })
);
class wp {
  static getConfig(e) {
    return ((e == null ? void 0 : e.client) ?? u).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/forms/management/api/v1/config",
      ...e
    });
  }
}
class Ep {
  static getDataSourceType(e) {
    return ((e == null ? void 0 : e.client) ?? u).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/forms/management/api/v1/data-source-type",
      ...e
    });
  }
  static getDataSourceTypeById(e) {
    return (e.client ?? u).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/forms/management/api/v1/data-source-type/{id}",
      ...e
    });
  }
}
class He {
  static getDataSource(e) {
    return ((e == null ? void 0 : e.client) ?? u).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/forms/management/api/v1/data-source",
      ...e
    });
  }
  static postDataSource(e) {
    return ((e == null ? void 0 : e.client) ?? u).post({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/forms/management/api/v1/data-source",
      ...e,
      headers: {
        "Content-Type": "application/json",
        ...e == null ? void 0 : e.headers
      }
    });
  }
  static deleteDataSourceById(e) {
    return (e.client ?? u).delete({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/forms/management/api/v1/data-source/{id}",
      ...e
    });
  }
  static getDataSourceById(e) {
    return (e.client ?? u).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/forms/management/api/v1/data-source/{id}",
      ...e
    });
  }
  static putDataSourceById(e) {
    return (e.client ?? u).put({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/forms/management/api/v1/data-source/{id}",
      ...e,
      headers: {
        "Content-Type": "application/json",
        ...e.headers
      }
    });
  }
  static getDataSourceScaffold(e) {
    return ((e == null ? void 0 : e.client) ?? u).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/forms/management/api/v1/data-source/scaffold",
      ...e
    });
  }
  static getDatasourceWizardByIdScaffold(e) {
    return (e.client ?? u).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/forms/management/api/v1/datasource/wizard/{id}/scaffold",
      ...e
    });
  }
  static postDatasourceWizardCreateForm(e) {
    return ((e == null ? void 0 : e.client) ?? u).post({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/forms/management/api/v1/datasource/wizard/create-form",
      ...e,
      headers: {
        "Content-Type": "application/json",
        ...e == null ? void 0 : e.headers
      }
    });
  }
  static getTreeDataSourceRoot(e) {
    return ((e == null ? void 0 : e.client) ?? u).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/forms/management/api/v1/tree/data-source/root",
      ...e
    });
  }
}
class UE {
  static getTreeEmailTemplateChildrenByParentPath(e) {
    return (e.client ?? u).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/forms/management/api/v1/tree/email-template/children/{parentPath}",
      ...e
    });
  }
  static getTreeEmailTemplateRoot(e) {
    return ((e == null ? void 0 : e.client) ?? u).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/forms/management/api/v1/tree/email-template/root",
      ...e
    });
  }
}
class Qa {
  static getExport(e) {
    return ((e == null ? void 0 : e.client) ?? u).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/forms/management/api/v1/export",
      ...e
    });
  }
  static postExport(e) {
    return ((e == null ? void 0 : e.client) ?? u).post({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/forms/management/api/v1/export",
      ...e
    });
  }
  static getExportTypes(e) {
    return ((e == null ? void 0 : e.client) ?? u).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/forms/management/api/v1/export/types",
      ...e
    });
  }
}
class ha {
  static getFieldType(e) {
    return ((e == null ? void 0 : e.client) ?? u).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/forms/management/api/v1/field-type",
      ...e
    });
  }
  static getFieldTypeById(e) {
    return (e.client ?? u).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/forms/management/api/v1/field-type/{id}",
      ...e
    });
  }
  static getFieldTypeRichtextDatatype(e) {
    return ((e == null ? void 0 : e.client) ?? u).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/forms/management/api/v1/field-type/richtext-datatype",
      ...e
    });
  }
  static getFieldTypeValidationPattern(e) {
    return ((e == null ? void 0 : e.client) ?? u).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/forms/management/api/v1/field-type/validation-pattern",
      ...e
    });
  }
}
class dt {
  static postFolder(e) {
    return ((e == null ? void 0 : e.client) ?? u).post({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/forms/management/api/v1/folder",
      ...e,
      headers: {
        "Content-Type": "application/json",
        ...e == null ? void 0 : e.headers
      }
    });
  }
  static deleteFolderById(e) {
    return (e.client ?? u).delete({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/forms/management/api/v1/folder/{id}",
      ...e
    });
  }
  static getFolderById(e) {
    return (e.client ?? u).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/forms/management/api/v1/folder/{id}",
      ...e
    });
  }
  static putFolderById(e) {
    return (e.client ?? u).put({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/forms/management/api/v1/folder/{id}",
      ...e,
      headers: {
        "Content-Type": "application/json",
        ...e.headers
      }
    });
  }
  static getFolderByIdIsEmpty(e) {
    return (e.client ?? u).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/forms/management/api/v1/folder/{id}/is-empty",
      ...e
    });
  }
  static putFolderByIdMove(e) {
    return (e.client ?? u).put({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/forms/management/api/v1/folder/{id}/move",
      ...e,
      headers: {
        "Content-Type": "application/json",
        ...e.headers
      }
    });
  }
  static getItemFolder(e) {
    return ((e == null ? void 0 : e.client) ?? u).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/forms/management/api/v1/item/folder",
      ...e
    });
  }
}
class $p {
  static getFormTemplate(e) {
    return ((e == null ? void 0 : e.client) ?? u).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/forms/management/api/v1/form-template",
      ...e
    });
  }
}
class ee {
  static getForm(e) {
    return ((e == null ? void 0 : e.client) ?? u).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/forms/management/api/v1/form",
      ...e
    });
  }
  static postForm(e) {
    return ((e == null ? void 0 : e.client) ?? u).post({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/forms/management/api/v1/form",
      ...e,
      headers: {
        "Content-Type": "application/json",
        ...e == null ? void 0 : e.headers
      }
    });
  }
  static postFormFieldByIdValidateSettings(e) {
    return (e.client ?? u).post({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/forms/management/api/v1/form-field/{id}/validate-settings",
      ...e,
      headers: {
        "Content-Type": "application/json",
        ...e.headers
      }
    });
  }
  static postFormWorkflowByIdValidateSettings(e) {
    return (e.client ?? u).post({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/forms/management/api/v1/form-workflow/{id}/validate-settings",
      ...e,
      headers: {
        "Content-Type": "application/json",
        ...e.headers
      }
    });
  }
  static deleteFormById(e) {
    return (e.client ?? u).delete({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/forms/management/api/v1/form/{id}",
      ...e
    });
  }
  static getFormById(e) {
    return (e.client ?? u).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/forms/management/api/v1/form/{id}",
      ...e
    });
  }
  static putFormById(e) {
    return (e.client ?? u).put({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/forms/management/api/v1/form/{id}",
      ...e,
      headers: {
        "Content-Type": "application/json",
        ...e.headers
      }
    });
  }
  static postFormByIdCopy(e) {
    return (e.client ?? u).post({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/forms/management/api/v1/form/{id}/copy",
      ...e,
      headers: {
        "Content-Type": "application/json",
        ...e.headers
      }
    });
  }
  static postFormByIdCopyWorkflows(e) {
    return (e.client ?? u).post({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/forms/management/api/v1/form/{id}/copy-workflows",
      ...e,
      headers: {
        "Content-Type": "application/json",
        ...e.headers
      }
    });
  }
  static getFormByIdHasRelations(e) {
    return (e.client ?? u).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/forms/management/api/v1/form/{id}/has-relations",
      ...e
    });
  }
  static putFormByIdMove(e) {
    return (e.client ?? u).put({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/forms/management/api/v1/form/{id}/move",
      ...e,
      headers: {
        "Content-Type": "application/json",
        ...e.headers
      }
    });
  }
  static getFormByIdRelations(e) {
    return (e.client ?? u).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/forms/management/api/v1/form/{id}/relations",
      ...e
    });
  }
  static getFormExport(e) {
    return ((e == null ? void 0 : e.client) ?? u).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/forms/management/api/v1/form/export",
      ...e
    });
  }
  static postFormImport(e) {
    return ((e == null ? void 0 : e.client) ?? u).post({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/forms/management/api/v1/form/import",
      ...e,
      headers: {
        "Content-Type": "application/json",
        ...e == null ? void 0 : e.headers
      }
    });
  }
  static getFormScaffold(e) {
    return ((e == null ? void 0 : e.client) ?? u).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/forms/management/api/v1/form/scaffold",
      ...e
    });
  }
  static getFormScaffoldByTemplate(e) {
    return (e.client ?? u).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/forms/management/api/v1/form/scaffold/{template}",
      ...e
    });
  }
  static getItemForm(e) {
    return ((e == null ? void 0 : e.client) ?? u).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/forms/management/api/v1/item/form",
      ...e
    });
  }
  static getTreeFormChildrenByParentId(e) {
    return (e.client ?? u).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/forms/management/api/v1/tree/form/children/{parentId}",
      ...e
    });
  }
  static getTreeFormRoot(e) {
    return ((e == null ? void 0 : e.client) ?? u).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/forms/management/api/v1/tree/form/root",
      ...e
    });
  }
}
class zE {
  static getLicensingStatus(e) {
    return ((e == null ? void 0 : e.client) ?? u).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/forms/management/api/v1/licensing/status",
      ...e
    });
  }
}
class Cp {
  static getMediaByPath(e) {
    return ((e == null ? void 0 : e.client) ?? u).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/forms/management/api/v1/media/by-path",
      ...e
    });
  }
}
class WE {
  static getPickerDataType(e) {
    return ((e == null ? void 0 : e.client) ?? u).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/forms/management/api/v1/picker/data-type",
      ...e
    });
  }
  static getPickerDocumentType(e) {
    return ((e == null ? void 0 : e.client) ?? u).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/forms/management/api/v1/picker/document-type",
      ...e
    });
  }
  static getPickerDocumentTypeByAliasProperties(e) {
    return (e.client ?? u).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/forms/management/api/v1/picker/document-type/{alias}/properties",
      ...e
    });
  }
  static postPickerDocumentTypeMappingsRefresh(e) {
    return ((e == null ? void 0 : e.client) ?? u).post({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/forms/management/api/v1/picker/document-type/mappings/refresh",
      ...e,
      headers: {
        "Content-Type": "application/json",
        ...e == null ? void 0 : e.headers
      }
    });
  }
}
class Tp {
  static getPrevalueSourceType(e) {
    return ((e == null ? void 0 : e.client) ?? u).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/forms/management/api/v1/prevalue-source-type",
      ...e
    });
  }
  static getPrevalueSourceTypeById(e) {
    return (e.client ?? u).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/forms/management/api/v1/prevalue-source-type/{id}",
      ...e
    });
  }
}
class mt {
  static getPrevalueSource(e) {
    return ((e == null ? void 0 : e.client) ?? u).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/forms/management/api/v1/prevalue-source",
      ...e
    });
  }
  static postPrevalueSource(e) {
    return ((e == null ? void 0 : e.client) ?? u).post({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/forms/management/api/v1/prevalue-source",
      ...e,
      headers: {
        "Content-Type": "application/json",
        ...e == null ? void 0 : e.headers
      }
    });
  }
  static deletePrevalueSourceById(e) {
    return (e.client ?? u).delete({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/forms/management/api/v1/prevalue-source/{id}",
      ...e
    });
  }
  static getPrevalueSourceById(e) {
    return (e.client ?? u).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/forms/management/api/v1/prevalue-source/{id}",
      ...e
    });
  }
  static putPrevalueSourceById(e) {
    return (e.client ?? u).put({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/forms/management/api/v1/prevalue-source/{id}",
      ...e,
      headers: {
        "Content-Type": "application/json",
        ...e.headers
      }
    });
  }
  static getPrevalueSourceByIdValues(e) {
    return (e.client ?? u).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/forms/management/api/v1/prevalue-source/{id}/values",
      ...e
    });
  }
  static getPrevalueSourceScaffold(e) {
    return ((e == null ? void 0 : e.client) ?? u).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/forms/management/api/v1/prevalue-source/scaffold",
      ...e
    });
  }
  static getTreePrevalueSourceRoot(e) {
    return ((e == null ? void 0 : e.client) ?? u).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/forms/management/api/v1/tree/prevalue-source/root",
      ...e
    });
  }
}
class Je {
  static getFormByFormIdRecord(e) {
    return (e.client ?? u).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/forms/management/api/v1/form/{formId}/record",
      ...e
    });
  }
  static putFormByFormIdRecordByRecordId(e) {
    return (e.client ?? u).put({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/forms/management/api/v1/form/{formId}/record/{recordId}",
      ...e,
      headers: {
        "Content-Type": "application/json",
        ...e.headers
      }
    });
  }
  static getFormByFormIdRecordByRecordIdAuditTrail(e) {
    return (e.client ?? u).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/forms/management/api/v1/form/{formId}/record/{recordId}/audit-trail",
      ...e
    });
  }
  static getFormByFormIdRecordByRecordIdWorkflowAuditTrail(e) {
    return (e.client ?? u).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/forms/management/api/v1/form/{formId}/record/{recordId}/workflow-audit-trail",
      ...e
    });
  }
  static postFormByFormIdRecordByRecordIdWorkflowByWorkflowIdRetry(e) {
    return (e.client ?? u).post({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/forms/management/api/v1/form/{formId}/record/{recordId}/workflow/{workflowId}/retry",
      ...e
    });
  }
  static postFormByFormIdRecordActionsByActionIdExecute(e) {
    return (e.client ?? u).post({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/forms/management/api/v1/form/{formId}/record/actions/{actionId}/execute",
      ...e,
      headers: {
        "Content-Type": "application/json",
        ...e.headers
      }
    });
  }
  static getFormByFormIdRecordMetadata(e) {
    return (e.client ?? u).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/forms/management/api/v1/form/{formId}/record/metadata",
      ...e
    });
  }
  static getFormByFormIdRecordPageNumber(e) {
    return (e.client ?? u).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/forms/management/api/v1/form/{formId}/record/page-number",
      ...e
    });
  }
  static getRecordSetActions(e) {
    return ((e == null ? void 0 : e.client) ?? u).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/forms/management/api/v1/record-set-actions",
      ...e
    });
  }
}
class se {
  static deleteSecurityUserGroupByIdFormSecurity(e) {
    return (e.client ?? u).delete({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/forms/management/api/v1/security/user-group/{id}/form-security",
      ...e
    });
  }
  static getSecurityUserGroupByIdFormSecurity(e) {
    return (e.client ?? u).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/forms/management/api/v1/security/user-group/{id}/form-security",
      ...e
    });
  }
  static postSecurityUserGroupByIdFormSecurity(e) {
    return (e.client ?? u).post({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/forms/management/api/v1/security/user-group/{id}/form-security",
      ...e,
      headers: {
        "Content-Type": "application/json",
        ...e.headers
      }
    });
  }
  static putSecurityUserGroupByIdFormSecurity(e) {
    return (e.client ?? u).put({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/forms/management/api/v1/security/user-group/{id}/form-security",
      ...e,
      headers: {
        "Content-Type": "application/json",
        ...e.headers
      }
    });
  }
  static deleteSecurityUserByIdFormSecurity(e) {
    return (e.client ?? u).delete({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/forms/management/api/v1/security/user/{id}/form-security",
      ...e
    });
  }
  static getSecurityUserByIdFormSecurity(e) {
    return (e.client ?? u).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/forms/management/api/v1/security/user/{id}/form-security",
      ...e
    });
  }
  static postSecurityUserByIdFormSecurity(e) {
    return (e.client ?? u).post({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/forms/management/api/v1/security/user/{id}/form-security",
      ...e,
      headers: {
        "Content-Type": "application/json",
        ...e.headers
      }
    });
  }
  static putSecurityUserByIdFormSecurity(e) {
    return (e.client ?? u).put({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/forms/management/api/v1/security/user/{id}/form-security",
      ...e,
      headers: {
        "Content-Type": "application/json",
        ...e.headers
      }
    });
  }
  static getSecurityUserCurrentFormSecurity(e) {
    return ((e == null ? void 0 : e.client) ?? u).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/forms/management/api/v1/security/user/current/form-security",
      ...e
    });
  }
  static getSecurityUserUsersToAssign(e) {
    return ((e == null ? void 0 : e.client) ?? u).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/forms/management/api/v1/security/user/users-to-assign",
      ...e
    });
  }
  static getTreeSecurityChildrenByParentId(e) {
    return (e.client ?? u).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/forms/management/api/v1/tree/security/children/{parentId}",
      ...e
    });
  }
  static getTreeSecurityRoot(e) {
    return ((e == null ? void 0 : e.client) ?? u).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/forms/management/api/v1/tree/security/root",
      ...e
    });
  }
}
class Op {
  static getTheme(e) {
    return ((e == null ? void 0 : e.client) ?? u).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/forms/management/api/v1/theme",
      ...e
    });
  }
}
class LE {
  static getUpdatesVersion(e) {
    return ((e == null ? void 0 : e.client) ?? u).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/forms/management/api/v1/updates/version",
      ...e
    });
  }
}
class Vn {
  static getWorkflowType(e) {
    return ((e == null ? void 0 : e.client) ?? u).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/forms/management/api/v1/workflow-type",
      ...e
    });
  }
  static getWorkflowTypeById(e) {
    return (e.client ?? u).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/forms/management/api/v1/workflow-type/{id}",
      ...e
    });
  }
}
var Yt, Gt, la, Nn;
class Ns extends Fm {
  constructor(r) {
    super(r, si);
    h(this, la);
    h(this, Yt);
    h(this, Gt);
    y(this, Yt, new Is(void 0)), this.config = c(this, Yt).asObservable(), y(this, Gt, new Is(
      void 0
    )), this.userSecurity = c(this, Gt).asObservable();
  }
  async hostConnected() {
    super.hostConnected(), this.consumeContext(Sn, (r) => {
      this.observe(r == null ? void 0 : r.currentUser, async (a) => {
        var i;
        (i = a == null ? void 0 : a.allowedSections) != null && i.includes(ko) && (F(this, la, Nn).call(this), this.getUserSecurity());
      });
    });
  }
  async getUserSecurity() {
    const { data: r } = await d(
      this,
      se.getSecurityUserCurrentFormSecurity({
        query: { includeFormFieldDetails: !1 }
      })
    );
    c(this, Gt).setValue(r);
  }
}
Yt = new WeakMap(), Gt = new WeakMap(), la = new WeakSet(), Nn = async function() {
  const { data: r } = await d(this, wp.getConfig());
  c(this, Yt).setValue(r);
};
const Pp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  FormsContext: Ns,
  default: Ns
}, Symbol.toStringTag, { value: "Module" }));
class xp extends gn {
  constructor(e, r) {
    super(e, r), this.consumeContext(si, (a) => {
      this.observe(a == null ? void 0 : a.userSecurity, (i) => {
        i && (this.permitted = this.config.match(i));
      });
    });
  }
}
const Ao = "Forms.Condition.SecurityOption", ce = "Forms.Condition.SecurityPermission", Mp = [
  {
    type: "condition",
    name: "Form Workspace View Condition",
    alias: ce,
    api: xp
  },
  {
    type: "condition",
    name: "Form Security Options Condition",
    alias: Ao,
    api: () => import("./security-options.condition.js")
  }
], kp = [...Mp];
class Ap extends ua {
  constructor(e) {
    super(e, {
      getRootItems: qn,
      getChildrenOf: Dp,
      getAncestorsOf: Rp,
      mapper: Ip
    });
  }
}
const qn = () => (
  // eslint-disable-next-line local-rules/no-direct-api-import
  He.getTreeDataSourceRoot()
), Dp = (t) => {
  if (t.parent.unique === null)
    return qn();
  throw new Error("Not supported for the data source tree");
}, Rp = () => {
  throw new Error("Not supported for the data source tree");
}, Ip = (t) => ({
  unique: t.id,
  parent: {
    unique: null,
    entityType: oi
  },
  name: t.name,
  entityType: Rt,
  isFolder: t.isFolder,
  hasChildren: t.hasChildren
});
class Up extends da {
  constructor(e) {
    super(e, Bn.contextAlias);
  }
}
const Bn = new L("FormsDataSourceTreeStore");
class zp extends ma {
  constructor(e) {
    super(
      e,
      Ap,
      Bn
    );
  }
  async requestTreeRoot() {
    const { data: e } = await this._treeSource.getRootItems({
      skip: 0,
      take: 0
    }), r = e ? e.total > 0 : !1;
    return { data: {
      unique: null,
      entityType: oi,
      name: "Data Sources",
      hasChildren: r,
      isFolder: !0
    } };
  }
}
const Wp = {
  type: "menuItem",
  kind: "tree",
  alias: "Forms.MenuItem.DataSource",
  name: "Forms Data Source Menu Item",
  weight: 400,
  meta: {
    label: "Data Sources",
    entityType: Rt,
    treeAlias: "Forms.Tree.DataSources",
    menus: [Ot]
  }
}, Lp = [Wp], jn = "Forms.Repository.DataSources.Tree", Vp = "Forms.Store.DataSources.Tree", Np = "Forms.Tree.DataSources", qp = {
  type: "repository",
  alias: jn,
  name: "Data Source Tree Repository",
  api: zp
}, Bp = {
  type: "treeStore",
  alias: Vp,
  name: "Data Source Tree Store",
  api: Up
}, jp = {
  type: "tree",
  kind: "default",
  alias: Np,
  name: "Data Source Tree",
  meta: {
    repositoryAlias: jn
  },
  conditions: [
    {
      alias: ce,
      match: (t) => t.userSecurity.manageDataSources
    }
  ]
}, Yp = {
  type: "treeItem",
  kind: "default",
  alias: "Forms.TreeItem.DataSource",
  name: "Data Source Tree Item",
  forEntityTypes: [
    oi,
    Rt
  ]
}, Gp = [
  qp,
  Bp,
  jp,
  Yp,
  ...Lp
];
class Hp extends Fe {
  constructor(e) {
    super(e, Yn.contextAlias);
  }
}
const Yn = new L("DataSourceDetailStore");
var Ne;
class Kp {
  constructor(e) {
    h(this, Ne);
    y(this, Ne, e);
  }
  /**
   * Creates a new data source scaffold
   * @param {(string | null)} parentUnique
   * @return { DataSourceDetailModel }
   * @memberof FormsDataSourceDetailServerDataSource
   */
  async createScaffold() {
    return { data: {
      entityType: Rt,
      unique: K.new(),
      id: K.new(),
      created: "",
      name: "",
      settings: {},
      formDataSourceTypeId: "",
      valid: !1,
      updated: ""
    } };
  }
  /**
   * Fetches a data source with the given id from the server
   * @param {string} unique
   * @return {FormDataSource}
   * @memberof FormsDataSourceDetailServerDataSource
   */
  async read(e) {
    if (!e) throw new Error("Unique is missing");
    const { data: r, error: a } = await d(
      c(this, Ne),
      He.getDataSourceById({ path: { id: e } })
    );
    return a ? { error: a } : { data: r };
  }
  /**
   * Inserts a new data source on the server
   * @param {FormDataSource} dataSource
   * @return {*}
   * @memberof FormsDataSourceDetailServerDataSource
   */
  async create(e) {
    if (!e) throw new Error("Datasource is missing");
    if (!e.unique) throw new Error("Datasource unique is missing");
    const { error: r } = await d(
      c(this, Ne),
      He.postDataSource({ body: e })
    );
    return r ? { error: r } : this.read(e.unique);
  }
  /**
   * Updates a data source on the server
   * @param {FormDataSource} dataSource
   * @return {*}
   * @memberof FormsDataSourceDetailServerDataSource
   */
  async update(e) {
    if (!e.unique) throw new Error("Unique is missing");
    const { error: r } = await d(
      c(this, Ne),
      He.putDataSourceById({
        path: { id: e.id },
        body: e
      })
    );
    return r ? { error: r } : this.read(e.unique);
  }
  /**
   * Deletes a data source on the server
   * @param {string} unique
   * @return {*}
   * @memberof FormsDataSourceDetailServerDataSource
   */
  async delete(e) {
    if (!e) throw new Error("Unique is missing");
    return await d(
      c(this, Ne),
      He.deleteDataSourceById({ path: { id: e } })
    );
  }
}
Ne = new WeakMap();
class Xp extends we {
  constructor(e) {
    super(
      e,
      Kp,
      Yn
    );
  }
  async requestDataSourceScaffold() {
    const { data: e, error: r } = await d(
      this._host,
      He.getDataSourceScaffold()
    );
    return r ? { error: r } : { data: e };
  }
  async requestDataSourceWizardScaffold(e) {
    const { data: r, error: a } = await d(
      this._host,
      He.getDatasourceWizardByIdScaffold({ path: { id: e } })
    );
    return a ? { error: a } : { data: r };
  }
}
const Jp = "Forms.Repository.DataSource.Detail", Qp = "Forms.Store.DataSource.Detail", Zp = {
  type: "repository",
  alias: Jp,
  name: "Data Source Detail Repository",
  api: Xp
}, eh = {
  type: "store",
  alias: Qp,
  name: "Data Source Detail Store",
  api: Hp
}, th = [Zp, eh], rh = [...th], ih = new L(
  "UmbWorkspaceContext",
  void 0,
  (t) => {
    var e;
    return ((e = t.getEntityType) == null ? void 0 : e.call(t)) === Rt;
  }
);
var zr;
class ah {
  constructor(e) {
    h(this, zr);
    y(this, zr, e);
  }
  async getCollection() {
    const { data: e, error: r } = await d(
      c(this, zr),
      ha.getFieldType()
    );
    return r ? { error: r } : {
      data: {
        items: e,
        total: e.length
      }
    };
  }
}
zr = new WeakMap();
var Wr;
class Di {
  constructor(e) {
    h(this, Wr);
    y(this, Wr, new ah(e));
  }
  async requestCollection() {
    return c(this, Wr).getCollection();
  }
  destroy() {
  }
}
Wr = new WeakMap();
const oh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  FormsFieldTypeCollectionRepository: Di,
  default: Di
}, Symbol.toStringTag, { value: "Module" })), sh = "Forms.Repository.FieldType.Collection", nh = {
  type: "repository",
  alias: sh,
  name: "Field Type Collection Repository",
  api: () => Promise.resolve().then(() => oh)
}, lh = [nh], oe = "forms-form", dr = "forms-form-root", ue = "forms-folder", Za = "forms-form-entry";
class ch extends ua {
  constructor(e) {
    super(e, {
      getRootItems: Gn,
      getChildrenOf: uh,
      getAncestorsOf: dh,
      mapper: mh
    });
  }
}
const Gn = () => (
  // eslint-disable-next-line local-rules/no-direct-api-import
  ee.getTreeFormRoot({})
), uh = (t) => t.parent.unique === null ? Gn() : ee.getTreeFormChildrenByParentId({
  path: { parentId: t.parent.unique }
}), dh = () => {
  throw new Error("Not supported for the forms tree");
}, mh = (t) => {
  var e;
  return {
    unique: t.id,
    parent: {
      unique: ((e = t.parent) == null ? void 0 : e.id) || null,
      entityType: t.parent ? ue : dr
    },
    name: t.name,
    path: t.path,
    entityType: t.isFolder ? ue : oe,
    isFolder: t.isFolder,
    hasChildren: t.hasChildren
  };
};
class ph extends da {
  constructor(e) {
    super(e, Hn.contextAlias);
  }
}
const Hn = new L("FormsFormTreeStore");
class hh extends ma {
  constructor(e) {
    super(e, ch, Hn);
  }
  async requestTreeRoot() {
    const { data: e } = await this._treeSource.getRootItems({
      skip: 0,
      take: 0
    }), r = e ? e.total > 0 : !1;
    return { data: {
      unique: null,
      entityType: dr,
      name: "Forms",
      hasChildren: r,
      isFolder: !0
    } };
  }
}
const fh = {
  type: "menuItem",
  kind: "tree",
  alias: "Forms.MenuItem.Form",
  name: "Forms Form Menu Item",
  weight: 600,
  meta: {
    label: "Forms",
    entityType: oe,
    icon: "icon-folder",
    treeAlias: "Forms.Tree.Forms",
    menus: [Ot]
  }
}, yh = [fh], Kn = "Forms.Repository.Forms.Tree", gh = "Forms.Store.Forms.Tree", Do = "Forms.Tree.Forms", vh = {
  type: "repository",
  alias: Kn,
  name: "Form Tree Repository",
  api: hh
}, _h = {
  type: "treeStore",
  alias: gh,
  name: "Form Tree Store",
  api: ph
}, Sh = {
  type: "tree",
  kind: "default",
  alias: Do,
  name: "Forms Tree",
  meta: {
    repositoryAlias: Kn
  }
  // No condition on this tree, as it's accessible from content for picking forms.
}, bh = {
  type: "treeItem",
  kind: "default",
  alias: "Forms.TreeItem.Form",
  name: "Form Tree Item",
  forEntityTypes: [
    dr,
    oe,
    ue
  ]
}, Fh = [
  vh,
  _h,
  Sh,
  bh,
  ...yh
], wh = new C(bn, {
  modal: {
    type: "sidebar",
    size: "small"
  },
  data: {
    treeAlias: Do
  }
}), Xn = "Umb.Modal.Forms.ChooseFieldType", Jn = new C(Xn, {
  modal: {
    type: "sidebar",
    size: "medium"
  }
}), Qn = "Umb.Modal.Forms.ChooseWorkflowType", Eh = new C(Qn, {
  modal: {
    type: "sidebar",
    size: "medium"
  }
}), Zn = "Umb.Modal.Forms.ConfigureWorkflow", $h = new C(Zn, {
  modal: {
    type: "sidebar",
    size: "medium"
  }
}), el = "Umb.Modal.Forms.CreateFormFromDataSource", Ch = new C(el, {
  modal: {
    type: "sidebar",
    size: "medium"
  }
}), tl = "Umb.Modal.Forms.EditPage", Th = new C(tl, {
  modal: {
    type: "sidebar",
    size: "medium"
  }
}), rl = "Umb.Modal.Forms.EditFieldset", Oh = new C(rl, {
  modal: {
    type: "sidebar",
    size: "medium"
  }
}), il = "Umb.Modal.Forms.EditField", Ph = new C(il, {
  modal: {
    type: "sidebar",
    size: "medium"
  }
}), al = "Umb.Modal.Forms.EditSubmitMessage", ol = new C(al, {
  modal: {
    type: "sidebar",
    size: "medium"
  }
}), sl = "Umb.Modal.Forms.EditWorkflow", nl = new C(sl, {
  modal: {
    type: "sidebar",
    size: "medium"
  }
}), ll = "Forms.EntryDetails.Modal", xh = new C(ll, {
  modal: {
    type: "sidebar",
    size: "large"
  }
}), Mh = new C(bn, {
  modal: {
    type: "sidebar",
    size: "small"
  },
  data: {
    treeAlias: Do
  }
}), cl = "Umb.Modal.Forms.ExportEntries", kh = new C(cl, {
  modal: {
    type: "sidebar",
    size: "small"
  }
}), ul = "Umb.Modal.Forms.Preview", VE = new C(ul, {
  modal: {
    type: "dialog",
    size: "medium"
  }
});
var Ah = Object.getOwnPropertyDescriptor, dl = (t) => {
  throw TypeError(t);
}, Dh = (t, e, r, a) => {
  for (var i = a > 1 ? void 0 : a ? Ah(e, r) : e, o = t.length - 1, s; o >= 0; o--)
    (s = t[o]) && (i = s(i) || i);
  return i;
}, Ro = (t, e, r) => e.has(t) || dl("Cannot " + r), Rh = (t, e, r) => (Ro(t, e, "read from private field"), r ? r.call(t) : e.get(t)), qs = (t, e, r) => e.has(t) ? dl("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), Ih = (t, e, r, a) => (Ro(t, e, "write to private field"), e.set(t, r), r), Bs = (t, e, r) => (Ro(t, e, "access private method"), r), Ri, gi, ml, pl;
const Uh = "form-choose-field-type-modal";
let Ii = class extends be {
  constructor() {
    super(), qs(this, gi), qs(this, Ri, []), Bs(this, gi, ml).call(this);
  }
  render() {
    return n`<umb-body-layout
      .headline=${this.localize.term("formEdit_chooseFieldType")}
    >
      <uui-box>
        <uui-ref-list>
          ${Rh(this, Ri).map(
      (t) => n`<umb-ref-item
                .name=${t.name}
                .detail=${t.description}
                .icon=${t.icon}
                @open=${() => Bs(this, gi, pl).call(this, t)}
              ></umb-ref-item>`
    )}
        </uui-ref-list>
      </uui-box>
      <div slot="actions">
        <uui-button
          label=${this.localize.term("general_close")}
          @click=${this._rejectModal}
        ></uui-button>
      </div>
    </umb-body-layout>`;
  }
};
Ri = /* @__PURE__ */ new WeakMap();
gi = /* @__PURE__ */ new WeakSet();
ml = async function() {
  const t = new Di(this), { data: e } = await t.requestCollection();
  Ih(this, Ri, (e == null ? void 0 : e.items) || []), this.requestUpdate();
};
pl = function(t) {
  var e, r;
  (e = this.modalContext) == null || e.updateValue({ selectedValue: t }), (r = this.modalContext) == null || r.submit();
};
Ii = Dh([
  f(Uh)
], Ii);
const zh = Ii, Wh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get FormsChooseFieldTypeModalElement() {
    return Ii;
  },
  default: zh
}, Symbol.toStringTag, { value: "Module" }));
var Lr;
class Lh {
  constructor(e) {
    h(this, Lr);
    y(this, Lr, e);
  }
  async getCollection() {
    const { data: e, error: r } = await d(
      c(this, Lr),
      Vn.getWorkflowType()
    );
    return r ? { error: r } : {
      data: {
        items: e,
        total: e.length
      }
    };
  }
}
Lr = new WeakMap();
var Vr;
class eo {
  constructor(e) {
    h(this, Vr);
    y(this, Vr, new Lh(
      e
    ));
  }
  async requestCollection() {
    return c(this, Vr).getCollection();
  }
  destroy() {
  }
}
Vr = new WeakMap();
const Vh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  FormsWorkflowTypeCollectionRepository: eo,
  default: eo
}, Symbol.toStringTag, { value: "Module" }));
var Nh = Object.getOwnPropertyDescriptor, hl = (t) => {
  throw TypeError(t);
}, qh = (t, e, r, a) => {
  for (var i = a > 1 ? void 0 : a ? Nh(e, r) : e, o = t.length - 1, s; o >= 0; o--)
    (s = t[o]) && (i = s(i) || i);
  return i;
}, Io = (t, e, r) => e.has(t) || hl("Cannot " + r), Bh = (t, e, r) => (Io(t, e, "read from private field"), r ? r.call(t) : e.get(t)), js = (t, e, r) => e.has(t) ? hl("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), jh = (t, e, r, a) => (Io(t, e, "write to private field"), e.set(t, r), r), Ys = (t, e, r) => (Io(t, e, "access private method"), r), Ui, vi, fl, yl;
const Yh = "form-choose-workflow-type-modal";
let zi = class extends be {
  constructor() {
    super(), js(this, vi), js(this, Ui, []), Ys(this, vi, fl).call(this);
  }
  render() {
    return n`<umb-body-layout
      headline=${this.localize.term("formWorkflows_chooseWorkflowType")}
    >
      <uui-box>
        <uui-ref-list>
          ${Bh(this, Ui).map(
      (t) => n`<umb-ref-item
                .name=${t.name}
                .detail=${t.description}
                .icon=${t.icon}
                @open=${() => Ys(this, vi, yl).call(this, t)}
              ></umb-ref-item>`
    )}
        </uui-ref-list>
      </uui-box>
      <div slot="actions">
        <uui-button
          label=${this.localize.term("general_close")}
          @click="${this._rejectModal}"
        ></uui-button>
      </div>
    </umb-body-layout>`;
  }
};
Ui = /* @__PURE__ */ new WeakMap();
vi = /* @__PURE__ */ new WeakSet();
fl = async function() {
  const t = new eo(this), { data: e } = await t.requestCollection();
  jh(this, Ui, (e == null ? void 0 : e.items) || []), this.requestUpdate();
};
yl = function(t) {
  var e, r;
  (e = this.modalContext) == null || e.updateValue({ selectedValue: t }), (r = this.modalContext) == null || r.submit();
};
zi = qh([
  f(Yh)
], zi);
const Gh = zi, Hh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get FormsChooseWorkflowTypeModalElement() {
    return zi;
  },
  default: Gh
}, Symbol.toStringTag, { value: "Module" })), De = new L(
  "UmbWorkspaceContext",
  void 0,
  (t) => {
    var e;
    return ((e = t.getEntityType) == null ? void 0 : e.call(t)) === oe;
  }
);
class tt {
  static getPageScaffold() {
    const e = K.new(), r = this.getFieldsetScaffold();
    return r.page = e, {
      caption: "",
      fieldSets: [r],
      sortOrder: 0,
      id: e,
      form: "",
      buttonCondition: null
    };
  }
  static getFieldsetScaffold() {
    return {
      caption: "",
      sortOrder: 0,
      id: K.new(),
      page: "",
      containers: [this.getContainerScaffold()],
      condition: null
    };
  }
  static getContainerScaffold() {
    return {
      id: K.new(),
      caption: "",
      width: 12,
      fields: []
    };
  }
  static getQuestionScaffold() {
    return {
      caption: "",
      alias: "",
      tooltip: "",
      id: K.new(),
      cssClass: "",
      fieldTypeId: "",
      mandatory: !1,
      prevalueSourceId: "",
      preValues: [],
      dataSourceFieldKey: "",
      condition: this.getConditionScaffold(),
      regex: "",
      requiredErrorMessage: "",
      invalidErrorMessage: "",
      containsSensitiveData: !1,
      settings: {},
      allowedUploadTypes: [],
      allowMultipleFileUploads: !1
    };
  }
  static getConditionScaffold() {
    return {
      id: K.new(),
      enabled: !1,
      actionType: An.SHOW,
      logicType: Dn.ALL,
      rules: []
    };
  }
  static getWorkflowScaffold() {
    return {
      id: K.new(),
      name: "",
      form: "",
      active: !0,
      includeSensitiveData: wt.FALSE,
      isDeleted: !1,
      sortOrder: 0,
      workflowTypeId: "",
      workflowTypeName: "",
      workflowTypeDescription: "",
      workflowTypeIcon: "",
      workflowTypeGroup: "",
      settings: {},
      isMandatory: !1,
      condition: null
    };
  }
}
class ni {
  constructor(e, r, a) {
    this.config = {
      getUniqueOfElement: (i) => i.getAttribute("sort-unique"),
      getUniqueOfModel: (i) => i,
      identifier: e,
      itemSelector: r,
      containerSelector: a
    };
  }
}
var Kh = Object.defineProperty, Xh = Object.getOwnPropertyDescriptor, gl = (t) => {
  throw TypeError(t);
}, Re = (t, e, r, a) => {
  for (var i = a > 1 ? void 0 : a ? Xh(e, r) : e, o = t.length - 1, s; o >= 0; o--)
    (s = t[o]) && (i = (a ? s(e, r, i) : s(i)) || i);
  return a && i && Kh(e, r, i), i;
}, Uo = (t, e, r) => e.has(t) || gl("Cannot " + r), v = (t, e, r) => (Uo(t, e, "read from private field"), r ? r.call(t) : e.get(t)), Ue = (t, e, r) => e.has(t) ? gl("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), Ke = (t, e, r, a) => (Uo(t, e, "write to private field"), e.set(t, r), r), V = (t, e, r) => (Uo(t, e, "access private method"), r), ke, rt, te, Er, he, Qe, fa, I, vl, zo, _l, Sl, bl, Wo, Lo, Fl, mr, vr;
const Jh = "form-configure-workflow-stage";
let ve = class extends Ee {
  constructor() {
    super(), Ue(this, I), Ue(this, ke), Ue(this, rt), this.collectionName = "", Ue(this, te, []), Ue(this, Er, {}), Ue(this, he), this.label = "", this.description = "", this.icon = "", this.allFields = [], Ue(this, Qe, []), Ue(this, fa), this.consumeContext(q, (t) => {
      Ke(this, ke, t);
    }), this.consumeContext(De, (t) => {
      Ke(this, rt, t);
    });
  }
  set workflows(t) {
    Ke(this, te, structuredClone(t));
    for (let e = 0; e < v(this, te).length; e++) {
      const r = v(this, te)[e];
      v(this, Er)[r.id] = this.collectionName;
    }
    V(this, I, vl).call(this), V(this, I, zo).call(this);
  }
  get workflows() {
    return v(this, te);
  }
  get workflowStages() {
    return v(this, Er);
  }
  set submitMessageDetail(t) {
    Ke(this, he, structuredClone(t));
  }
  get submitMessageDetail() {
    return v(this, he);
  }
  render() {
    return n` ${V(this, I, vr).call(this, {
      icon: this.icon,
      label: this.label,
      description: this.description
    })}
      ${p(
      this.submitMessageDetail,
      () => n`<uui-button @click=${V(this, I, _l)}>
            ${V(this, I, vr).call(this, {
        icon: "icon-document",
        label: this.localize.term("formWorkflows_submitMessage"),
        description: this.localize.term(
          "formWorkflows_defaultWorkflowDescription"
        ),
        iconClass: "square"
      })}
          </uui-button>`
    )}
      <div class="workflows-${this.collectionName}">
        ${this.workflows.map(
      (t, e) => n` <div
              class="sortable-stage workflow-${this.collectionName}"
              sort-unique=${t.id}
            >
              <uui-button
                @click=${async () => await V(this, I, Sl).call(this, e)}
              >
                ${V(this, I, vr).call(this, {
        icon: t.workflowTypeIcon,
        label: t.name,
        description: t.workflowTypeDescription,
        iconClass: "square"
      })}
              </uui-button>
              ${p(
        !t.isMandatory,
        () => n` <uui-action-bar>
                    <uui-button
                      label=${this.localize.term("general_remove")}
                      @click=${() => V(this, I, Fl).call(this, e)}
                    ></uui-button>
                  </uui-action-bar>`
      )}
            </div>`
    )}
      </div>
      <uui-button @click=${V(this, I, bl)}>
        ${V(this, I, vr).call(this, {
      label: this.localize.term("formWorkflows_addWorkflow"),
      iconClass: "square dashed"
    })}
      </uui-button>`;
  }
};
ke = /* @__PURE__ */ new WeakMap();
rt = /* @__PURE__ */ new WeakMap();
te = /* @__PURE__ */ new WeakMap();
Er = /* @__PURE__ */ new WeakMap();
he = /* @__PURE__ */ new WeakMap();
Qe = /* @__PURE__ */ new WeakMap();
fa = /* @__PURE__ */ new WeakMap();
I = /* @__PURE__ */ new WeakSet();
vl = function() {
  Ke(this, fa, new ii(this, {
    ...new ni(
      "Forms.SorterIdentifier.Workflows",
      `.workflow-${this.collectionName}`,
      `.workflows-${this.collectionName}`
    ).config,
    onChange: ({ model: t }) => {
      Ke(this, Qe, t);
    },
    onEnd: () => {
      Ke(this, te, [...v(this, te)].sort(
        (t, e) => v(this, Qe).indexOf(t.id) - v(this, Qe).indexOf(e.id)
      )), V(this, I, mr).call(this);
    }
  }));
};
zo = function() {
  var t;
  Ke(this, Qe, []);
  for (let e = 0; e < v(this, te).length; e++) {
    const r = v(this, te)[e];
    v(this, Qe).push(r.id);
  }
  (t = v(this, fa)) == null || t.setModel(v(this, Qe));
};
_l = async function() {
  var a, i, o;
  if (!v(this, ke) || !v(this, rt)) return;
  const t = await v(this, rt).getRichTextConfiguration(), r = await v(this, ke).open(
    this,
    ol,
    {
      data: {
        richTextConfiguration: t
      },
      value: {
        messageOnSubmit: (a = v(this, he)) == null ? void 0 : a.messageOnSubmit,
        messageOnSubmitIsHtml: ((i = v(this, he)) == null ? void 0 : i.messageOnSubmitIsHtml) || !1,
        goToPageOnSubmit: (o = v(this, he)) == null ? void 0 : o.goToPageOnSubmit
      }
    }
  ).onSubmit().catch(() => {
  });
  !r || !v(this, he) || (v(this, he).messageOnSubmit = r.messageOnSubmit, v(this, he).messageOnSubmitIsHtml = r.messageOnSubmitIsHtml, v(this, he).goToPageOnSubmit = r.goToPageOnSubmit, V(this, I, mr).call(this));
};
Sl = async function(t) {
  if (!v(this, ke)) return;
  const e = v(this, te)[t], a = await (await V(this, I, Wo).call(this, e, !1)).onSubmit().catch(() => {
  });
  a && (V(this, I, Lo).call(this, v(this, te)[t], a), v(this, Er)[v(this, te)[t].id] = a.collectionName, V(this, I, mr).call(this));
};
bl = async function() {
  var o;
  if (!v(this, ke)) return;
  if (!v(this, rt)) throw new Error("No workspace context");
  const e = await v(this, ke).open(
    this,
    Eh
  ).onSubmit().catch(() => {
  });
  if (!(e != null && e.selectedValue)) return;
  const r = tt.getWorkflowScaffold();
  r.form = (o = v(this, rt)) == null ? void 0 : o.getUnique(), r.sortOrder = v(this, te).length, r.workflowTypeId = e.selectedValue.id, r.workflowTypeName = e.selectedValue.name, r.workflowTypeIcon = e.selectedValue.icon, r.workflowTypeDescription = e.selectedValue.description, r.workflowTypeGroup = e.selectedValue.group;
  const i = await (await V(this, I, Wo).call(this, r, !0)).onSubmit().catch(() => {
  });
  i && (V(this, I, Lo).call(this, r, i), v(this, te).push(r), V(this, I, zo).call(this), V(this, I, mr).call(this));
};
Wo = async function(t, e) {
  const r = await v(this, rt).loadWorkflowType(
    t.workflowTypeId
  );
  if (!r)
    throw new Error(
      "Workflow type with id " + t.workflowTypeId + " could not be found."
    );
  const a = t.settings;
  if (e)
    for (let i = 0; i < r.settings.length; i++) {
      const o = r.settings[i];
      o.defaultValue && (a[o.alias] = o.defaultValue);
    }
  return v(this, ke).open(this, nl, {
    data: {
      fields: this.allFields,
      workflowType: r,
      isNew: e
    },
    value: {
      name: t.name,
      active: t.active,
      includeSensitiveData: t.includeSensitiveData === wt.TRUE,
      collectionName: this.collectionName,
      settings: a,
      condition: t.condition
    }
  });
};
Lo = function(t, e) {
  t.name = e.name, t.active = e.active, t.includeSensitiveData = e.includeSensitiveData ? wt.TRUE : wt.FALSE, t.settings = e.settings, t.condition = e.condition;
};
Fl = function(t) {
  v(this, te).splice(t, 1), V(this, I, mr).call(this);
};
mr = function() {
  this.requestUpdate(), this.dispatchEvent(
    new CustomEvent("change", { composed: !0, bubbles: !0 })
  );
};
vr = function(t) {
  return n`<div class="stage-block">
      <uui-icon
        .name=${t.icon ?? null}
        class="stage-icon ${t.iconClass}"
      ></uui-icon>
      <div>
        ${p(t.label, () => n`<strong>${t.label}</strong>`)}
        ${p(
    t.description,
    () => n`<small> ${t.description} </small>`
  )}
      </div>
    </div>`;
};
ve.styles = [
  x`
      :host {
        display: block;
        position: relative;
        z-index: 1;
      }

      :host:after {
        content: "";
        display: block;
        width: 1px;
        background-color: var(--uui-color-border-standalone);
        position: absolute;
        top: var(--uui-size-5);
        bottom: var(--uui-size-5);
        left: 27px;
        z-index: -1;
      }

      uui-button {
        --uui-button-padding-left-factor: 1;
        --uui-button-padding-right-factor: 1;
        --uui-button-padding-bottom-factor: 1;
        --uui-button-padding-top-factor: 1;
        text-align: left;
      }

      /* uui-button internally multiplies the above factors by --uui-size 2,
        but since we're setting the factor to 1, we don't need the calc()
      */
      :host > .stage-block {
        padding: var(--uui-size-2);
      }

      .stage-block {
        display: flex;
        column-gap: var(--uui-size-3);
        align-items: center;
        --icon-radius: 50%;
        --border-style: solid;
      }

      .stage-block > div {
        display: flex;
        flex-direction: column;
        line-height: 1.4;
      }

      .stage-icon {
        position: relative;
        background: white;
        padding: var(--uui-size-3);
        border-radius: var(--icon-radius);
        border-width: 1px;
        border-style: var(--border-style);
        border-color: var(--uui-color-border-standalone);
        width: 22px;
        height: 22px;
      }

      .square {
        --icon-radius: var(--uui-border-radius);
      }

      .dashed {
        --border-style: dashed;
      }

      .sortable-stage {
        display: flex;
        align-items: center;
        cursor: move;
      }

      .sortable-stage > uui-button {
        margin-right: auto;
      }

      uui-action-bar {
        opacity: 0;
        transition: opacity 120ms;
        margin-left: auto;
      }

      .sortable-stage:hover uui-action-bar {
        opacity: 1;
      }
    `
];
Re([
  m()
], ve.prototype, "collectionName", 2);
Re([
  m({ type: Array })
], ve.prototype, "workflows", 1);
Re([
  m()
], ve.prototype, "workflowStages", 1);
Re([
  m({ type: Object })
], ve.prototype, "submitMessageDetail", 1);
Re([
  m()
], ve.prototype, "label", 2);
Re([
  m()
], ve.prototype, "description", 2);
Re([
  m()
], ve.prototype, "icon", 2);
Re([
  m({ type: Array })
], ve.prototype, "allFields", 2);
ve = Re([
  f(Jh)
], ve);
var Qh = Object.getOwnPropertyDescriptor, wl = (t) => {
  throw TypeError(t);
}, Zh = (t, e, r, a) => {
  for (var i = a > 1 ? void 0 : a ? Qh(e, r) : e, o = t.length - 1, s; o >= 0; o--)
    (s = t[o]) && (i = s(i) || i);
  return i;
}, ef = (t, e, r) => e.has(t) || wl("Cannot " + r), tf = (t, e, r) => e.has(t) ? wl("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), _i = (t, e, r) => (ef(t, e, "access private method"), r), zt, Si, El;
const rf = "form-configure-workflow-modal";
let Or = class extends be {
  constructor() {
    super(...arguments), tf(this, zt);
  }
  render() {
    var t, e, r, a, i;
    return n`<umb-body-layout
      headline=${this.localize.term("formWorkflows_configureWorkflow")}
    >
      <uui-box>
        <form-configure-workflow-stage
          collectionName="onSubmit"
          .workflows=${((t = this.value.workflows) == null ? void 0 : t.onSubmit) ?? []}
          .submitMessageDetail=${this.value.submitMessageDetail}
          .allFields=${((e = this.data) == null ? void 0 : e.fields) ?? []}
          .label=${this.localize.term("formWorkflows_onSubmit")}
          .description=${this.localize.term(
      "formWorkflows_onSubmitDescription"
    )}
          icon="icon-check"
          @change=${(o) => _i(this, zt, Si).call(this, o, "onSubmit")}
        >
        </form-configure-workflow-stage>
        <form-configure-workflow-stage
          collectionName="onApprove"
          .workflows=${((r = this.value.workflows) == null ? void 0 : r.onApprove) ?? []}
          .allFields=${((a = this.data) == null ? void 0 : a.fields) ?? []}
          .label=${this.localize.term("formWorkflows_onApprove")}
          .description=${this.localize.term(
      "formWorkflows_onApproveDescription"
    )}
          icon="icon-thumb-up"
          @change=${(o) => _i(this, zt, Si).call(this, o, "onApprove")}
        >
        </form-configure-workflow-stage>

        ${p(
      (i = this.data) == null ? void 0 : i.manualApproval,
      () => {
        var o, s;
        return n`<form-configure-workflow-stage
              collectionName="onReject"
              .workflows=${((o = this.value.workflows) == null ? void 0 : o.onReject) ?? []}
              .allFields=${((s = this.data) == null ? void 0 : s.fields) ?? []}
              .label=${this.localize.term("formWorkflows_onReject")}
              .description=${this.localize.term(
          "formWorkflows_onRejectDescription"
        )}
              icon="icon-delete"
              @change=${(l) => _i(this, zt, Si).call(this, l, "onReject")}
            >
            </form-configure-workflow-stage>`;
      }
    )}
      </uui-box>
      <div slot="actions">
        <uui-button
          label=${this.localize.term("general_close")}
          @click="${this._rejectModal}"
        ></uui-button>
        <uui-button
          color="positive"
          look="primary"
          label=${this.localize.term("general_submit")}
          @click=${this._submitModal}
        ></uui-button>
      </div>
    </umb-body-layout>`;
  }
};
zt = /* @__PURE__ */ new WeakSet();
Si = function(t, e) {
  var l, g;
  const r = t.target, a = r.submitMessageDetail;
  a && ((l = this.modalContext) == null || l.updateValue({ submitMessageDetail: a }));
  const i = r.workflows, o = structuredClone(this.value.workflows);
  o && (o[e] = i, (g = this.modalContext) == null || g.updateValue({ workflows: o }));
  const s = r.workflowStages;
  for (let S = 0; S < i.length; S++) {
    const k = i[S], O = s[k.id];
    O && O !== e && _i(this, zt, El).call(this, S, e, s[k.id]);
  }
};
El = function(t, e, r) {
  var l;
  if (!this.value.workflows) return;
  const a = structuredClone(this.value.workflows), o = a[e].splice(t, 1)[0];
  a[r].push(o), (l = this.modalContext) == null || l.updateValue({ workflows: a });
};
Or.styles = x`
    form-configure-workflow-stage + form-configure-workflow-stage {
      margin-top: var(--uui-size-5);
    }
  `;
Or = Zh([
  f(rf)
], Or);
const af = Or, of = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get FormsConfigureWorkflowModalElement() {
    return Or;
  },
  default: af
}, Symbol.toStringTag, { value: "Module" })), Pt = "00000000-0000-0000-0000-000000000000", NE = {
  year: "numeric",
  month: "long",
  day: "numeric"
}, sf = {
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric"
};
var nf = Object.getOwnPropertyDescriptor, $l = (t) => {
  throw TypeError(t);
}, lf = (t, e, r, a) => {
  for (var i = a > 1 ? void 0 : a ? nf(e, r) : e, o = t.length - 1, s; o >= 0; o--)
    (s = t[o]) && (i = s(i) || i);
  return i;
}, Vo = (t, e, r) => e.has(t) || $l("Cannot " + r), za = (t, e, r) => (Vo(t, e, "read from private field"), e.get(t)), Gs = (t, e, r) => e.has(t) ? $l("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), cf = (t, e, r, a) => (Vo(t, e, "write to private field"), e.set(t, r), r), Oe = (t, e, r) => (Vo(t, e, "access private method"), r), Vt, fe, Cl, Tl, Ol, Pl, ya, xl, Ml;
const uf = "form-create-from-datasource-modal";
let Wi = class extends be {
  constructor() {
    super(), Gs(this, fe), Gs(this, Vt), this.consumeContext(ai, (t) => {
      cf(this, Vt, t);
    });
  }
  render() {
    var t, e, r, a;
    return n`<umb-body-layout headline=${this.localize.term("formDataSources_createFormFromDataSource")}>
      <uui-box>
        <umb-property-layout
          alias="name"
          label=${this.localize.term("formDataSources_formName")}
        >
          <uui-input
            slot="editor"
            id="name"
            .value=${(e = (t = this.value) == null ? void 0 : t.wizard) == null ? void 0 : e.formName}
            @change=${Oe(this, fe, Cl)}
            label="name"
          >
        </umb-property-layout>
        <umb-property-layout
          alias="mapping"
          label=${this.localize.term("formDataSources_selectFields")}
          description=${this.localize.term(
      "formDataSources_selectFieldsDescription"
    )}
        >
          <table
            slot="editor"
            >
            <thead>
              <tr>
                <th>${this.localize.term("general_name")}</th>
                <th>Include</th>
                <th>Field Type</th>
                <th>${this.localize.term("formDataSources_defaultValue")}</th>
              </tr>
            </thead>
            <tbody>
              ${Cm(
      (a = (r = this.value) == null ? void 0 : r.wizard) == null ? void 0 : a.mappings,
      (i, o) => {
        var s;
        return n`
                  <tr>
                    <td>${i.name}</td>
                    <td>
                      <uui-toggle
                        ?checked=${i.include}
                        @change=${(l) => Oe(this, fe, Tl).call(this, l, o)}
                      ></uui-toggle>
                    </td>
                    <td>
                      <uui-select
                        .disabled=${!i.include}
                        @change=${(l) => Oe(this, fe, Ol).call(this, l, o)}
                        .options=${((s = this.data) == null ? void 0 : s.fieldTypes.map((l) => ({
          name: l.name,
          value: l.id,
          selected: l.id === i.fieldTypeId
        }))) ?? []}
                      >
                      </uui-select>
                    </td>
                    <td>
                      <uui-input
                        id="defaultValue"
                        .value=${i.defaultValue}
                        @change=${(l) => Oe(this, fe, Pl).call(this, l, o)}
                        label=${this.localize.term(
          "formDataSources_defaultValue"
        )}
                      >
                    </td>
                  </tr>
                `;
      }
    )}
            </tbody>
          </table>
        </umb-property-layout>
      </uui-box>
      <div slot="actions">
        <uui-button
          .label=${this.localize.term("general_close")}
          @click=${this._rejectModal}
        ></uui-button>
        <uui-button
          color="positive"
          look="primary"
          label=${this.localize.term("general_submit")}
          @click=${Oe(this, fe, xl)}
        ></uui-button>
      </div>
    </umb-body-layout>`;
  }
};
Vt = /* @__PURE__ */ new WeakMap();
fe = /* @__PURE__ */ new WeakSet();
Cl = function(t) {
  var a, i, o;
  if (!((a = this.value) != null && a.wizard)) return;
  const e = t.target.value.toString(), r = structuredClone((i = this.value) == null ? void 0 : i.wizard);
  r.formName = e, (o = this.modalContext) == null || o.updateValue({ wizard: r });
};
Tl = function(t, e) {
  Oe(this, fe, ya).call(this, e, "include", t.target.checked);
};
Ol = function(t, e) {
  Oe(this, fe, ya).call(this, e, "fieldTypeId", t.target.value.toString());
};
Pl = function(t, e) {
  Oe(this, fe, ya).call(this, e, "defaultValue", t.target.value.toString());
};
ya = function(t, e, r) {
  var i, o, s;
  if (!((i = this.value) != null && i.wizard)) return;
  const a = structuredClone((o = this.value) == null ? void 0 : o.wizard);
  a.mappings[t][e] = r, (s = this.modalContext) == null || s.updateValue({ wizard: a });
};
xl = async function() {
  var t, e, r, a, i;
  if ((t = this.value) != null && t.wizard)
    if (Oe(this, fe, Ml).call(this)) {
      const { error: o } = await d(
        this,
        He.postDatasourceWizardCreateForm({
          body: this.value.wizard
        }),
        {
          disableNotifications: !0
        }
      );
      if (o) {
        const s = { data: { message: "Could not create form." } };
        (a = za(this, Vt)) == null || a.peek("danger", s);
      } else {
        const s = {
          data: {
            message: "Form '" + this.value.wizard.formName + "' created."
          }
        };
        (e = za(this, Vt)) == null || e.peek("positive", s), (r = this.modalContext) == null || r.submit();
      }
    } else {
      const o = {
        data: {
          message: "Could not create form. Please select a type for each included field."
        }
      };
      (i = za(this, Vt)) == null || i.peek("danger", o);
    }
};
Ml = function() {
  var t;
  if (!((t = this.value) != null && t.wizard)) return !1;
  for (let e = 0; e < this.value.wizard.mappings.length; e++) {
    const r = this.value.wizard.mappings[e];
    if (r.include && r.fieldTypeId === Pt)
      return !1;
  }
  return !0;
};
Wi = lf([
  f(uf)
], Wi);
const df = Wi, mf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get FormsFormCreateFromDataSourceModalElement() {
    return Wi;
  },
  default: df
}, Symbol.toStringTag, { value: "Module" }));
var pf = Object.defineProperty, hf = Object.getOwnPropertyDescriptor, kl = (t) => {
  throw TypeError(t);
}, ga = (t, e, r, a) => {
  for (var i = a > 1 ? void 0 : a ? hf(e, r) : e, o = t.length - 1, s; o >= 0; o--)
    (s = t[o]) && (i = (a ? s(e, r, i) : s(i)) || i);
  return a && i && pf(e, r, i), i;
}, No = (t, e, r) => e.has(t) || kl("Cannot " + r), G = (t, e, r) => (No(t, e, "read from private field"), r ? r.call(t) : e.get(t)), Wa = (t, e, r) => e.has(t) ? kl("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), Hs = (t, e, r, a) => (No(t, e, "write to private field"), e.set(t, r), r), X = (t, e, r) => (No(t, e, "access private method"), r), Wt, H, N, Al, Dl, Rl, Il, Ul, zl, to, Wl, nt, Ll, Vl;
const ff = "form-edit-conditions";
var li = /* @__PURE__ */ ((t) => (t[t.FIELD = 0] = "FIELD", t[t.FIELDSET = 1] = "FIELDSET", t[t.PAGE = 2] = "PAGE", t[t.WORKFLOW = 3] = "WORKFLOW", t))(li || {});
let rr = class extends Ee {
  constructor() {
    super(), Wa(this, N), Wa(this, Wt), Wa(this, H, {
      id: "",
      enabled: !1,
      actionType: An.SHOW,
      logicType: Dn.ALL,
      rules: []
    }), this.fields = [], this.appliedTo = 0, this.consumeContext(De, (t) => {
      Hs(this, Wt, t);
    });
  }
  set value(t) {
    Hs(this, H, t ? structuredClone(t) : G(this, H));
    for (let e = 0; e < G(this, H).rules.length; e++)
      G(this, H).rules[e] = structuredClone(G(this, H).rules[e]);
  }
  get value() {
    return G(this, H);
  }
  render() {
    var t, e;
    return n` <div class="flex center">
        <uui-select
          name="actionType"
          @change=${X(this, N, Dl)}
          .options=${((t = G(this, Wt)) == null ? void 0 : t.getConditionActionTypes.map(
      (r) => ({
        name: this.localize.term(
          `formConditions_${this.appliedTo === 3 ? "workflow" : ""}actionType${r.value}`
        ),
        value: r.value,
        selected: r.value === G(this, H).actionType
      })
    )) ?? []}
        ></uui-select>
        <span
          >${this.localize.term(
      "formConditions_" + X(this, N, Ll).call(this)
    )}</span
        >
        <uui-select
          name="logicType"
          @change=${X(this, N, Rl)}
          .options=${((e = G(this, Wt)) == null ? void 0 : e.getConditionLogicTypes.map(
      (r) => ({
        name: this.localize.term("formConditions_logicType" + r.value),
        value: r.value,
        selected: r.value === G(this, H).logicType
      })
    )) ?? []}
        >
        </uui-select>
        <span
          >${this.localize.term("formConditions_ofTheFollowingMatch")}:</span
        >
      </div>

      ${G(this, H).rules.map((r, a) => X(this, N, Vl).call(this, r, a))}

      <uui-button
        label=${this.localize.term("formConditions_addCondition")}
        look="secondary"
        color="default"
        @click=${X(this, N, Il)}
        >${this.localize.term("formConditions_addCondition")}</uui-button
      >`;
  }
};
Wt = /* @__PURE__ */ new WeakMap();
H = /* @__PURE__ */ new WeakMap();
N = /* @__PURE__ */ new WeakSet();
Al = function(t) {
  const e = this.fields.find((r) => r.id === t);
  return (e == null ? void 0 : e.preValues.map((r) => r.value)) ?? [];
};
Dl = function(t) {
  G(this, H).actionType = t.target.value, X(this, N, nt).call(this);
};
Rl = function(t) {
  G(this, H).logicType = t.target.value, X(this, N, nt).call(this);
};
Il = function() {
  G(this, H).rules.push({
    id: K.new(),
    field: Pt,
    operator: np.IS,
    value: ""
  }), X(this, N, nt).call(this);
};
Ul = function(t, e) {
  G(this, H).rules[e].field = t.target.value.toString(), X(this, N, nt).call(this);
};
zl = function(t, e) {
  G(this, H).rules[e].operator = t.target.value, X(this, N, nt).call(this);
};
to = function(t, e) {
  G(this, H).rules[e].value = t, X(this, N, nt).call(this);
};
Wl = function(t) {
  G(this, H).rules.splice(t, 1), X(this, N, nt).call(this);
};
nt = function() {
  this.requestUpdate(), this.dispatchEvent(
    new CustomEvent("change", { composed: !0, bubbles: !0 })
  );
};
Ll = function() {
  switch (this.appliedTo) {
    case 1:
      return "thisFieldSetIf";
    case 2:
      return "buttonsForThisPageIf";
    case 3:
      return "thisWorkflowIf";
    default:
      return "thisFieldIf";
  }
};
Vl = function(t, e) {
  var a;
  const r = X(this, N, Al).call(this, t.field);
  return n`<div class="flex center condition-rule">
      <div class="grow">
        <uui-select
          name="field"
          .placeholder=${this.localize.term("formConditions_selectField")}
          @change=${(i) => X(this, N, Ul).call(this, i, e)}
          .options=${this.fields.map((i) => ({
    name: i.caption,
    value: i.id,
    selected: i.id === t.field
  }))}
        >
        </uui-select>
      </div>

      <div class="grow">
        <uui-select
          name="operator"
          @change=${(i) => X(this, N, zl).call(this, i, e)}
          .options=${((a = G(this, Wt)) == null ? void 0 : a.getConditionOperators.map((i) => ({
    name: this.localize.term("formConditions_operator" + i.value),
    value: i.value,
    selected: i.value === t.operator
  }))) ?? []}
        >
        </uui-select>
      </div>

      <div class="grow">
        ${p(
    r.length > 0,
    () => n`<uui-select
              name="value"
              @change=${(i) => X(this, N, to).call(this, i.target.value.toString(), e)}
              .options=${r.map((i) => ({
      name: i,
      value: i,
      selected: i === t.value
    }))}
            >
            </uui-select>`,
    () => n`<uui-input
              name="value"
              type="text"
              value=${t.value}
              @change=${(i) => X(this, N, to).call(this, i.target.value.toString(), e)}
            ></uui-input>`
  )}
      </div>

      <uui-button
        label=${this.localize.term("general_delete")}
        look="secondary"
        color="default"
        @click=${() => X(this, N, Wl).call(this, e)}
      >
        <uui-icon name="delete"></uui-icon>
      </uui-button>
    </div>`;
};
rr.styles = [
  x`
      .flex {
        display: flex;
        column-gap: var(--uui-size-3);
      }

      .grow {
        flex: 1;

        * {
          width: 100%;
        }
      }

      .center {
        align-items: center;
      }

      :host > uui-button {
        margin-top: var(--uui-size-5);
      }

      .condition-rule {
        margin-top: var(--uui-size-3);
      }

      .condition-rule:first-of-type {
        margin-top: var(--uui-size-5);
      }
    `
];
ga([
  m({ type: Object })
], rr.prototype, "value", 1);
ga([
  m({ type: Array })
], rr.prototype, "fields", 2);
ga([
  m({ type: li })
], rr.prototype, "appliedTo", 2);
rr = ga([
  f(ff)
], rr);
var yf = Object.defineProperty, gf = Object.getOwnPropertyDescriptor, Nl = (t) => {
  throw TypeError(t);
}, ql = (t, e, r, a) => {
  for (var i = a > 1 ? void 0 : a ? gf(e, r) : e, o = t.length - 1, s; o >= 0; o--)
    (s = t[o]) && (i = (a ? s(e, r, i) : s(i)) || i);
  return a && i && yf(e, r, i), i;
}, vf = (t, e, r) => e.has(t) || Nl("Cannot " + r), _f = (t, e, r) => e.has(t) ? Nl("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), Ks = (t, e, r) => (vf(t, e, "access private method"), r), bi, Bl, jl;
const Sf = "form-edit-page-modal";
let Pr = class extends be {
  constructor() {
    super(...arguments), _f(this, bi), this._conditionEnabled = !1;
  }
  connectedCallback() {
    var t, e;
    super.connectedCallback(), this._conditionEnabled = ((e = (t = this.value) == null ? void 0 : t.buttonCondition) == null ? void 0 : e.enabled) ?? !1;
  }
  render() {
    return n`<umb-body-layout
      headline=${this.localize.term("formEdit_editPage")}
    >
      <div id="main">
        <uui-box>
          <umb-property-layout
            alias="conditions"
            .label=${this.localize.term("formConditions_title")}
            .description=${this.localize.term(
      "formConditions_pageConditionsDescription"
    )}
          >
            <div slot="editor">
              <uui-toggle
                ?checked=${this._conditionEnabled}
                .label=${this._conditionEnabled ? "On" : "Off"}
                @change=${Ks(this, bi, Bl)}
              ></uui-toggle>
              ${p(
      this._conditionEnabled,
      () => {
        var t;
        return n`<form-edit-conditions
                    .value=${this.value.buttonCondition}
                    .fields=${((t = this.data) == null ? void 0 : t.fields) ?? []}
                    .appliedTo=${li.PAGE}
                    @change=${Ks(this, bi, jl)}
                  ></form-edit-conditions>`;
      }
    )}
            </div>
          </umb-property-layout>
        </uui-box>
      </div>
      <div slot="actions">
        <uui-button
          label=${this.localize.term("general_close")}
          @click=${this._rejectModal}
        ></uui-button>
        <uui-button
          color="positive"
          look="primary"
          label=${this.localize.term("general_submit")}
          @click=${this._submitModal}
        ></uui-button>
      </div>
    </umb-body-layout>`;
  }
};
bi = /* @__PURE__ */ new WeakSet();
Bl = function(t) {
  var r;
  this._conditionEnabled = t.target.checked;
  const e = {
    ...this.value.buttonCondition,
    enabled: this._conditionEnabled
  };
  (r = this.modalContext) == null || r.updateValue({ buttonCondition: e });
};
jl = function(t) {
  var r;
  const e = t.target.value ?? void 0;
  (r = this.modalContext) == null || r.updateValue({ buttonCondition: e });
};
ql([
  b()
], Pr.prototype, "_conditionEnabled", 2);
Pr = ql([
  f(Sf)
], Pr);
const bf = Pr, Ff = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get FormsEditPageModalElement() {
    return Pr;
  },
  default: bf
}, Symbol.toStringTag, { value: "Module" }));
var wf = Object.defineProperty, Ef = Object.getOwnPropertyDescriptor, Yl = (t) => {
  throw TypeError(t);
}, qo = (t, e, r, a) => {
  for (var i = a > 1 ? void 0 : a ? Ef(e, r) : e, o = t.length - 1, s; o >= 0; o--)
    (s = t[o]) && (i = (a ? s(e, r, i) : s(i)) || i);
  return a && i && wf(e, r, i), i;
}, Bo = (t, e, r) => e.has(t) || Yl("Cannot " + r), Gl = (t, e, r) => (Bo(t, e, "read from private field"), r ? r.call(t) : e.get(t)), Xs = (t, e, r) => e.has(t) ? Yl("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), $f = (t, e, r, a) => (Bo(t, e, "write to private field"), e.set(t, r), r), ze = (t, e, r) => (Bo(t, e, "access private method"), r), Li, pe, Hl, Kl, Xl, jo, Jl, Ql, Zl, ec;
const Cf = "form-edit-fieldset-modal";
let xt = class extends be {
  constructor() {
    super(), Xs(this, pe), this._conditionEnabled = !1, this._containers = [], Xs(this, Li, 12), this.consumeContext(si, (t) => {
      t && this.observe(t.config, (e) => {
        e && $f(this, Li, e == null ? void 0 : e.maxNumberOfColumnsInFormGroup);
      });
    });
  }
  connectedCallback() {
    var t, e, r;
    super.connectedCallback(), this._conditionEnabled = ((e = (t = this.value) == null ? void 0 : t.condition) == null ? void 0 : e.enabled) ?? !1, this._containers = structuredClone((r = this.value) == null ? void 0 : r.containers) ?? [];
  }
  render() {
    var t;
    return n`<umb-body-layout
      headline=${this.localize.term("formEdit_editGroup")}
    >
      <div id="main">
        <uui-box>
          <umb-property-layout alias="page" label="Page">
            <div slot="editor">
              <uui-select
                label="Page"
                @change=${ze(this, pe, Hl)}
                .options=${((t = this.data) == null ? void 0 : t.pages.map((e, r) => {
      var a;
      return {
        name: e.caption ?? `Page ${r + 1}`,
        value: e.id,
        selected: r === ((a = this.value) == null ? void 0 : a.pageIndex)
      };
    })) ?? []}
              >
              </uui-select>
            </div>
          </umb-property-layout>

          <umb-property-layout
            alias="columns"
            orientation="vertical"
            .label=${this.localize.term("fieldSetColumns_title")}
            .description=${this.localize.term("fieldSetColumns_setNumber")}
          >
            <div slot="editor">
              <strong
                >${this.localize.term(
      "fieldSetColumns_columnNumberDescription",
      this._containers.length
    )}</strong
              >
              <div id="columnsTemplate">
                ${this._containers.map(
      (e, r) => p(
        this._containers.length === 1,
        () => n`<div></div>`,
        () => n`<uui-button
                        id="container-${r}"
                        label="Remove column"
                        color="default"
                        look="primary"
                        @click=${() => ze(this, pe, Xl).call(this, r)}
                      ></uui-button>`
      )
    )}
              </div>
              <uui-button
                id="addColumn"
                label="Add column"
                look="primary"
                color="default"
                ?disabled=${Gl(this, pe, ec)}
                @click=${ze(this, pe, Kl)}
              ></uui-button>
            </div>
          </umb-property-layout>
          <umb-property-layout
            alias="conditions"
            .label=${this.localize.term("formConditions_title")}
          >
            <div slot="editor">
              <uui-toggle
                ?checked=${this._conditionEnabled}
                .label=${this._conditionEnabled ? "On" : "Off"}
                @change=${ze(this, pe, Jl)}
              ></uui-toggle>
              ${p(
      this._conditionEnabled,
      () => {
        var e;
        return n`<form-edit-conditions
                    .value=${this.value.condition}
                    .fields=${((e = this.data) == null ? void 0 : e.fields) ?? []}
                    .appliedTo=${li.FIELDSET}
                    @change=${ze(this, pe, Ql)}
                  ></form-edit-conditions>`;
      }
    )}
            </div>
          </umb-property-layout>
        </uui-box>
      </div>
      <div slot="actions">
        <uui-button
          .label=${this.localize.term("general_close")}
          @click=${this._rejectModal}
        ></uui-button>
        <uui-button
          color="positive"
          look="primary"
          label=${this.localize.term("general_submit")}
          @click=${ze(this, pe, Zl)}
        ></uui-button>
      </div>
    </umb-body-layout>`;
  }
};
Li = /* @__PURE__ */ new WeakMap();
pe = /* @__PURE__ */ new WeakSet();
Hl = function(t) {
  var r;
  const e = t.target._input.selectedIndex - 1;
  (r = this.modalContext) == null || r.updateValue({ pageIndex: e });
};
Kl = function() {
  this._containers.push(tt.getContainerScaffold()), ze(this, pe, jo).call(this);
};
Xl = function(t) {
  this._containers.splice(t, 1), ze(this, pe, jo).call(this);
};
jo = function() {
  const t = 12 / this._containers.length;
  this._containers.forEach((e) => e.width = t), this.requestUpdate();
};
Jl = function(t) {
  var r;
  this._conditionEnabled = t.target.checked;
  const e = structuredClone(this.value.condition);
  e.enabled = this._conditionEnabled, (r = this.modalContext) == null || r.updateValue({ condition: e });
};
Ql = function(t) {
  var r;
  const e = t.target.value ?? void 0;
  (r = this.modalContext) == null || r.updateValue({ condition: e });
};
Zl = function() {
  var t, e;
  (t = this.modalContext) == null || t.updateValue({ containers: this._containers }), (e = this.modalContext) == null || e.submit();
};
ec = function() {
  return this._containers.length === Gl(this, Li);
};
xt.styles = [
  x`
      #columnsTemplate {
        width: 100%;
        height: var(--uui-size-24);
        box-sizing: border-box;
        padding: var(--uui-size-1);
        border: 2px solid var(--uui-color-border);
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        margin-bottom: var(--uui-size-4);
        gap: var(--uui-size-1);
        border-radius: var(--uui-border-radius);
      }

      #columnsTemplate > * {
        background: var(--uui-color-interactive);
        flex: 1;
      }
    `
];
qo([
  b()
], xt.prototype, "_conditionEnabled", 2);
qo([
  b()
], xt.prototype, "_containers", 2);
xt = qo([
  f(Cf)
], xt);
const Tf = xt, Of = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get FormsEditFieldsetModalElement() {
    return xt;
  },
  default: Tf
}, Symbol.toStringTag, { value: "Module" }));
var Ht, Kt, vt, Nr, qr, J, ro, Fi, tc, wi, rc;
class Pf {
  constructor(e, r, a) {
    h(this, J);
    h(this, Ht);
    h(this, Kt);
    h(this, vt);
    h(this, Nr);
    h(this, qr, {});
    y(this, Ht, e), y(this, Kt, new Dm(c(this, Ht))), y(this, vt, r), y(this, Nr, a);
  }
  async loadSettingValueConverterApis() {
    const e = vn.getAllExtensions().filter((r) => r.type === "formsSettingValueConverter").map((r) => r);
    for (let r = 0; r < e.length; r++) {
      const a = e[r], i = await Rm(a.api);
      if (i) {
        const o = new i(c(this, Ht));
        o && (c(this, qr)[a.propertyEditorUiAlias] = o);
      }
    }
  }
  setProviderType(e) {
    y(this, vt, e);
  }
  getLocalizedSettingDetail(e, r, a) {
    const i = c(this, Nr) + "_" + c(this, vt).alias + e.alias + r, o = c(this, Kt).term(i);
    return o && o.length > 0 && o !== i ? o : a;
  }
  async getSettingValues(e) {
    const r = [];
    for (const [a, i] of Object.entries(e)) {
      const o = await F(this, J, tc).call(this, a, i);
      r.push({ alias: a, value: o });
    }
    return r;
  }
  async getSettingsConfig(e, r) {
    const a = [];
    for (const i of e)
      await F(this, J, ro).call(this, a, i.alias, e);
    for (const i of r)
      a.find((o) => o.alias === i.alias) || await F(this, J, ro).call(this, a, i.alias, []);
    return a;
  }
  async getSettingPropertyConfig(e, r) {
    const a = F(this, J, wi).call(this, e);
    if (!a)
      return [];
    const i = F(this, J, Fi).call(this, a.view);
    return i ? await i.getSettingPropertyConfig(
      a,
      e,
      r
    ) : [];
  }
  async getUpdatedSettingsForPersistence(e, r) {
    if (r) {
      const i = Object.fromEntries(
        r.map((o) => [o.alias, o.defaultValue])
      );
      e = e.filter((o) => o.value !== i[o.alias]);
    }
    const a = {};
    for (let i = 0; i < e.length; i++) {
      const o = e[i];
      a[o.alias] = await F(this, J, rc).call(this, o);
    }
    return a;
  }
  createValidationErrorNotification(e, r) {
    var o;
    const a = wm.isUmbApiError(r) ? ((o = r.problemDetails.detail) == null ? void 0 : o.split("|").join(", ")) ?? r.message : r.message;
    return {
      data: {
        headline: c(this, Kt).term(e),
        message: a
      }
    };
  }
  getPropertyConfigForSetting(e, r) {
    var a;
    return ((a = e.find((i) => i.alias === r.alias)) == null ? void 0 : a.value) ?? [];
  }
  getPropertyAppearanceForSetting(e) {
    return e === "Umb.PropertyEditorUi.Tiptap" ? { labelOnTop: !0 } : void 0;
  }
}
Ht = new WeakMap(), Kt = new WeakMap(), vt = new WeakMap(), Nr = new WeakMap(), qr = new WeakMap(), J = new WeakSet(), ro = async function(e, r, a) {
  e.push({
    alias: r,
    value: await this.getSettingPropertyConfig(r, a)
  });
}, Fi = function(e) {
  return c(this, qr)[e];
}, tc = async function(e, r) {
  const a = F(this, J, wi).call(this, e);
  if (!a)
    return null;
  const i = F(this, J, Fi).call(this, a.view);
  return i ? await i.getSettingValueForEditor(
    a,
    e,
    r
  ) : r;
}, wi = function(e) {
  return c(this, vt).settings.find((r) => r.alias === e);
}, rc = async function(e) {
  const r = F(this, J, wi).call(this, e.alias);
  if (!r)
    return "";
  const a = F(this, J, Fi).call(this, r.view);
  return a ? await a.getSettingValueForPersistence(
    r,
    e
  ) : e.value;
};
var xf = Object.defineProperty, Mf = Object.getOwnPropertyDescriptor, ic = (t) => {
  throw TypeError(t);
}, lt = (t, e, r, a) => {
  for (var i = a > 1 ? void 0 : a ? Mf(e, r) : e, o = t.length - 1, s; o >= 0; o--)
    (s = t[o]) && (i = (a ? s(e, r, i) : s(i)) || i);
  return a && i && xf(e, r, i), i;
}, Yo = (t, e, r) => e.has(t) || ic("Cannot " + r), le = (t, e, r) => (Yo(t, e, "read from private field"), r ? r.call(t) : e.get(t)), La = (t, e, r) => e.has(t) ? ic("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), Js = (t, e, r, a) => (Yo(t, e, "write to private field"), e.set(t, r), r), T = (t, e, r) => (Yo(t, e, "access private method"), r), ie, Ei, E, ac, oc, sc, nc, lc, cc, uc, dc, mc, pc, hc, fc, yc, gc, vc, _c, Sc, bc, Fc, wc, Go, Ho, Ec, $c, Cc, Tc;
const kf = "form-edit-field-modal";
let de = class extends be {
  constructor() {
    super(...arguments), La(this, E), La(this, ie), this._aliasLocked = !0, this._settingValues = [], this._settingsConfig = [], this._settingsConfigLoaded = !1, this._showRegex = !1, this._showRegexReadonly = !1, this._conditionEnabled = !1, La(this, Ei);
  }
  async connectedCallback() {
    var e, r, a, i, o;
    super.connectedCallback();
    const t = await this.getContext(Sn);
    if (!t) throw new Error("Current user context not found");
    Js(this, Ei, await xo(t.currentUser)), Js(this, ie, new Pf(
      this,
      this.value.fieldType,
      "formProviderFieldTypes"
    )), await le(this, ie).loadSettingValueConverterApis(), await T(this, E, ac).call(this), this._settingsConfig = await le(this, ie).getSettingsConfig(
      this._settingValues,
      this.value.fieldType.settings
    ), this._settingsConfigLoaded = !0, (e = this.data) != null && e.isNew && ((r = this.value.fieldType) != null && r.mandatoryByDefault) && ((a = this.modalContext) == null || a.updateValue({ mandatory: !0 })), this._conditionEnabled = ((o = (i = this.value) == null ? void 0 : i.condition) == null ? void 0 : o.enabled) ?? !1, T(this, E, Go).call(this);
  }
  render() {
    var t, e, r, a, i, o, s, l, g, S, k, O, z, Q;
    return n`<umb-body-layout
      headline=${this.localize.term("formEdit_editField")}
    >
      <div id="main">
        <uui-box>
          <uui-input
            id="caption"
            .value=${(t = this.value) == null ? void 0 : t.caption}
            @change=${T(this, E, oc)}
            label="caption"
          >
            <uui-input
              name="alias"
              slot="append"
              label="alias"
              .value=${(e = this.value) == null ? void 0 : e.alias}
              @change=${T(this, E, nc)}
              placeholder="Enter alias..."
              ?disabled=${this._aliasLocked}
            >
              <!-- TODO: validation for bad characters -->
              <div
                @click=${T(this, E, sc)}
                @keydown=${() => ""}
                id="alias-lock"
                slot="prepend"
              >
                <uui-icon
                  name=${this._aliasLocked ? "icon-lock" : "icon-unlocked"}
                ></uui-icon>
              </div> </uui-input
          ></uui-input>

          <umb-ref-property-editor-ui
            standalone
            .name=${(r = this.value) == null ? void 0 : r.fieldType.name}
            .alias=${(a = this.value) == null ? void 0 : a.fieldType.alias}
            .propertyEditorSchemaAlias=${(i = this.value) == null ? void 0 : i.fieldType.description}
          >
            <umb-icon name=${(o = this.value) == null ? void 0 : o.fieldType.icon} slot="icon"></umb-icon>
            <uui-action-bar slot="actions">
              <uui-button
                label="Change"
                @click=${T(this, E, cc)}
              ></uui-button>
            </uui-action-bar>
          </umb-ref-property-editor-ui>

          <umb-property-layout
            alias="tooltip"
            label=${this.localize.term("formEdit_helpText")}
          >
            <uui-textarea
              slot="editor"
              name="tooltip"
              .value=${(s = this.value) == null ? void 0 : s.tooltip}
              @change=${T(this, E, lc)}
              label="tooltip"
            ></uui-textarea>
          </umb-property-layout>

          ${p(
      this.data && !this.data.isNew,
      () => n`<umb-property-layout alias="group" label="Group">
                <uui-select
                  label="Group"
                  slot="editor"
                  @change=${T(this, E, dc)}
                  .options=${T(this, E, uc).call(this).map((_) => ({
        name: _.name,
        value: _.id,
        selected: _.selected
      })) ?? []}
                >
                </uui-select>
              </umb-property-layout>`
    )}

          <umb-property-layout
            alias="fieldSettings_sensitiveData"
            .label=${this.localize.term("fieldSettings_sensitiveData")}
          >
            <!--
            // Verify that the current user is allowed to view & change the property 'containsSensitiveData'.
            // We allow a user that doesn't have the permission to set the value to true or false, but if
            // they or anyone else has previously set it to true, they aren't allowed to see or edit it.
            // See: https://github.com/umbraco/Umbraco.Forms.Issues/issues/1233
            -->
            ${(l = le(this, Ei)) != null && l.hasAccessToSensitiveData || ((g = this.value) == null ? void 0 : g.containsSensitiveData) === !1 ? n` <uui-toggle
                  slot="editor"
                  ?checked=${(S = this.value) == null ? void 0 : S.containsSensitiveData}
                  .label=${this.localize.term(
      "fieldSettings_sensitiveDataLabel"
    )}
                  @change=${T(this, E, hc)}
                ></uui-toggle>` : n` <div slot="editor">
                  ${this.localize.term("fieldSettings_sensitiveDataLabel")}
                </div>`}
          </umb-property-layout>

          ${p(
      (k = this.value) == null ? void 0 : k.fieldType.supportsUploadTypes,
      () => {
        var _, B;
        return n`<umb-property-layout
                  alias="allowedUploadTypes"
                  .label=${this.localize.term(
          "fieldSettings_allowedFileUploadTypes"
        )}
                >
                  <form-edit-allowed-file-upload-types
                    slot="editor"
                    .value=${this.value.allowedUploadTypes ?? []}
                    @change=${T(this, E, pc)}
                  ></form-edit-allowed-file-upload-types>
                </umb-property-layout>
                <umb-property-layout
                  alias="allowMultipleFileUploads"
                  .label=${this.localize.term(
          "fieldSettings_allowMultipleFileUploads"
        )}
                >
                  <uui-toggle
                    slot="editor"
                    ?checked=${(_ = this.value) == null ? void 0 : _.allowMultipleFileUploads}
                    label=${(B = this.value) != null && B.allowedUploadTypes ? "Multiple files" : "Single file only"}
                    @change=${T(this, E, fc)}
                  ></uui-toggle>
                </umb-property-layout>`;
      }
    )}
          ${p(
      (O = this.value) == null ? void 0 : O.fieldType.supportsPrevalues,
      () => {
        var _, B, A, P;
        return n`<umb-property-layout
                alias="prevalues"
                .label=${this.localize.term("fieldSettings_prevalues")}
                .description=${this.localize.term(
          (((B = (_ = this.data) == null ? void 0 : _.prevalueSources) == null ? void 0 : B.length) ?? 0) > 0 ? "fieldSettings_prevaluesProvideWithSources" : "fieldSettings_prevaluesProvide"
        )}
              >
                <div slot="editor">
                  ${p(
          !this.value.prevalueSourceId || this.value.prevalueSourceId === Pt,
          () => n`<form-edit-prevalues
                        .value=${this.value.prevalues}
                        @change=${T(this, E, yc)}
                      ></form-edit-prevalues>`
        )}
                  ${p(
          (((P = (A = this.data) == null ? void 0 : A.prevalueSources) == null ? void 0 : P.length) ?? 0) > 0,
          () => n`<div id="prevalueSource">
                        <label for="prevalueSource"
                          >${this.localize.term(
            "fieldSettings_prevaluesSource"
          )}</label
                        >
                        <uui-select
                          label="Prevalue Source"
                          name="prevalueSource"
                          @change=${T(this, E, vc)}
                          .options=${T(this, E, gc).call(this)}
                        >
                        </uui-select>
                      </div>`
        )}
                </div>
              </umb-property-layout>`;
      }
    )}
          ${p(
      le(this, ie) && this.value && this._settingsConfigLoaded,
      () => n` <umb-property-dataset
                .value=${this._settingValues}
                @change=${T(this, E, mc)}
              >
                ${this.value.fieldType.settings.map(
        (_) => n`
                    <umb-property
                      ?inert=${_.isReadOnly}
                      .label=${le(this, ie).getLocalizedSettingDetail(
          _,
          "Label",
          _.name
        )}
                      .description=${le(this, ie).getLocalizedSettingDetail(
          _,
          "Description",
          _.description
        )}
                      alias=${_.alias}
                      .config=${le(this, ie).getPropertyConfigForSetting(
          this._settingsConfig,
          _
        )}
                      .appearance=${le(this, ie).getPropertyAppearanceForSetting(
          _.view
        )}
                      property-editor-ui-alias=${_.view}
                    >
                    </umb-property>
                  `
      )}
              </umb-property-dataset>`
    )}
          ${p(
      (z = this.value) == null ? void 0 : z.fieldType.supportsMandatory,
      () => {
        var _, B, A;
        return n`<umb-property-layout
                alias="mandatory"
                .label=${this.localize.term("fieldSettings_mandatory")}
              >
                <div slot="editor">
                  <uui-toggle
                    ?checked=${(_ = this.value) == null ? void 0 : _.mandatory}
                    .label=${(B = this.value) != null && B.mandatory ? "On" : "Off"}
                    @change=${T(this, E, _c)}
                  ></uui-toggle>
                  ${p(
          (A = this.value) == null ? void 0 : A.mandatory,
          () => {
            var P;
            return n`<uui-input
                        id="requiredErrorMessage"
                        name="requiredErrorMessage"
                        .value=${(P = this.value) == null ? void 0 : P.requiredErrorMessage}
                        @change=${T(this, E, Sc)}
                        label="Error message"
                        placeholder=${this.localize.term(
              "validation_mandatoryMessage"
            )}
                      ></uui-input>`;
          }
        )}
                </div>
              </umb-property-layout>`;
      }
    )}
          <!-- TODO => make this a component-->
          ${p(
      (Q = this.value) == null ? void 0 : Q.fieldType.supportsRegex,
      () => {
        var _, B, A;
        return n`<umb-property-layout
                alias="regex"
                .label=${this.localize.term("formSettings_validation")}
              >
                <div slot="editor">
                  <uui-select
                    name="regex"
                    @change=${T(this, E, bc)}
                    .options=${[
          {
            name: "",
            value: "",
            selected: !this.value.regex
          },
          ...((_ = this.data) == null ? void 0 : _.validationPatterns.map((P) => ({
            name: P.labelKey.length > 0 ? this.localize.term(P.labelKey) : P.name,
            value: P.pattern,
            selected: P.pattern === this.value.regex
          }))) ?? [],
          {
            name: this.localize.term(
              "validation_enterCustomValidation"
            ),
            value: ".*",
            selected: T(this, E, Fc).call(this)
          }
        ]}
                  >
                  </uui-select>

                  ${p(
          this._showRegex,
          () => {
            var P;
            return n`
                      <textarea
                        placeholder=${this.localize.term(
              "fieldSettings_enterRegex"
            )}
                        ?disabled=${this._showRegexReadonly}
                        @change=${T(this, E, wc)}
                      >
${(P = this.value) == null ? void 0 : P.regex}</textarea
                      >
                    `;
          }
        )}
                  ${p(
          (((A = (B = this.value) == null ? void 0 : B.regex) == null ? void 0 : A.length) ?? 0) > 0,
          () => {
            var P;
            return n`
                      <uui-input
                        id="invalidErrorMessage"
                        name="invalidErrorMessage"
                        .value=${(P = this.value) == null ? void 0 : P.invalidErrorMessage}
                        @change=${T(this, E, Ec)}
                        label="Error message"
                        placeholder=${this.localize.term(
              "validation_mandatoryMessage"
            )}
                      ></uui-input>
                    `;
          }
        )}
                </div>
              </umb-property-layout>`;
      }
    )}

          <umb-property-layout
            alias="conditions"
            .label=${this.localize.term("formConditions_title")}
          >
            <div slot="editor">
              <uui-toggle
                ?checked=${this._conditionEnabled}
                .label=${this._conditionEnabled ? "On" : "Off"}
                @change=${T(this, E, $c)}
              ></uui-toggle>
              ${p(
      this._conditionEnabled,
      () => {
        var _;
        return n`<form-edit-conditions
                    .value=${this.value.condition}
                    .fields=${((_ = this.data) == null ? void 0 : _.fields) ?? []}
                    .appliedTo=${li.FIELD}
                    @change=${T(this, E, Cc)}
                  ></form-edit-conditions>`;
      }
    )}
            </div>
          </umb-property-layout>
        </uui-box>
      </div>
      <div slot="actions">
        <uui-button
          label=${this.localize.term("general_close")}
          @click=${this._rejectModal}
        ></uui-button>
        <uui-button
          color="positive"
          look="primary"
          label=${this.localize.term("general_submit")}
          @click=${T(this, E, Tc)}
        ></uui-button>
      </div>
    </umb-body-layout>`;
  }
};
ie = /* @__PURE__ */ new WeakMap();
Ei = /* @__PURE__ */ new WeakMap();
E = /* @__PURE__ */ new WeakSet();
ac = async function() {
  var e;
  const t = { ...this.value.settings };
  (e = this.value) == null || e.fieldType.settings.forEach((r) => {
    t[r.alias] || (t[r.alias] = r.defaultValue);
  }), this._settingValues = await le(this, ie).getSettingValues(t);
};
oc = function(t) {
  var i, o;
  const e = t.target.value.toString(), r = this.value.caption, a = this.value.alias;
  this._aliasLocked && Ws(r ?? "") === a && ((i = this.modalContext) == null || i.updateValue({ alias: Ws(e) })), (o = this.modalContext) == null || o.updateValue({ caption: e });
};
sc = function() {
  this._aliasLocked = !this._aliasLocked;
};
nc = function(t) {
  var r;
  const e = t.target.value.toString();
  (r = this.modalContext) == null || r.updateValue({ alias: e });
};
lc = function(t) {
  var r;
  const e = t.target.value.toString();
  (r = this.modalContext) == null || r.updateValue({ tooltip: e });
};
cc = async function() {
  const t = await this.getContext(q);
  if (!t) throw new Error("Modal manager not found");
  t.open(
    this,
    Jn
  ).onSubmit().then(async (r) => {
    var a, i;
    r.selectedValue && ((a = this.modalContext) == null || a.updateValue({ fieldType: r.selectedValue }), (i = le(this, ie)) == null || i.setProviderType(r.selectedValue), this.requestUpdate());
  }).catch(() => {
  });
};
uc = function() {
  const t = [];
  if (!this.data) return t;
  for (let e = 0; e < this.data.pages.length; e++) {
    const r = this.data.pages[e];
    for (let a = 0; a < r.fieldSets.length; a++) {
      const i = r.fieldSets[a];
      for (let o = 0; o < i.containers.length; o++) {
        const s = i.containers[o], l = e + "_" + a + "_" + o;
        t.push({
          id: l,
          name: (r.caption || "Page " + (e + 1)) + " > " + (i.caption || "Group " + (a + 1)) + " > " + (s.caption || "Container " + (o + 1)),
          selected: this.value.containerIndexPath === l
        });
      }
    }
  }
  return t;
};
dc = function(t) {
  var r;
  const e = t.target.value.toString();
  (r = this.modalContext) == null || r.updateValue({ containerIndexPath: e });
};
mc = async function(t) {
  const e = t.target.value;
  this._settingValues = e;
};
pc = function(t) {
  var r;
  const e = t.target.value;
  (r = this.modalContext) == null || r.updateValue({ allowedUploadTypes: e });
};
hc = function(t) {
  var r;
  const e = t.target.checked;
  (r = this.modalContext) == null || r.updateValue({ containsSensitiveData: e });
};
fc = function(t) {
  var r;
  const e = t.target.checked;
  (r = this.modalContext) == null || r.updateValue({ allowMultipleFileUploads: e });
};
yc = function(t) {
  var r;
  const e = t.target.value;
  (r = this.modalContext) == null || r.updateValue({ prevalues: e });
};
gc = function() {
  var e;
  const t = ((e = this.data) == null ? void 0 : e.prevalueSources.map((r) => ({
    name: r.name,
    value: r.id,
    selected: r.id === this.value.prevalueSourceId
  }))) ?? [];
  return t.unshift({
    name: "---" + this.localize.term("general_choose") + "---",
    value: Pt,
    selected: this.value.prevalueSourceId === Pt
  }), t;
};
vc = function(t) {
  var r;
  const e = t.target.value.toString();
  (r = this.modalContext) == null || r.updateValue({ prevalueSourceId: e });
};
_c = function(t) {
  var r;
  const e = t.target.checked;
  (r = this.modalContext) == null || r.updateValue({ mandatory: e });
};
Sc = function(t) {
  var r;
  const e = t.target.value.toString();
  (r = this.modalContext) == null || r.updateValue({ requiredErrorMessage: e });
};
bc = function(t) {
  var r;
  const e = t.target.value.toString();
  (r = this.modalContext) == null || r.updateValue({ regex: e }), T(this, E, Go).call(this);
};
Fc = function() {
  return this.value.regex ? T(this, E, Ho).call(this, this.value.regex) === void 0 : !1;
};
wc = function(t) {
  var a;
  const r = t.target.value.trim();
  (a = this.modalContext) == null || a.updateValue({ regex: r.length > 0 ? r : null });
};
Go = function() {
  var t, e;
  if ((e = (t = this.value) == null ? void 0 : t.regex) != null && e.length) {
    const r = T(this, E, Ho).call(this, this.value.regex);
    this._showRegex = !0, this._showRegexReadonly = r !== void 0;
  } else
    this._showRegex = !1, this._showRegexReadonly = !1;
};
Ho = function(t) {
  var e;
  return (e = this.data) == null ? void 0 : e.validationPatterns.find((r) => r.pattern === t);
};
Ec = function(t) {
  var r;
  const e = t.target.value.toString();
  (r = this.modalContext) == null || r.updateValue({ invalidErrorMessage: e });
};
$c = function(t) {
  var r;
  this._conditionEnabled = t.target.checked;
  const e = structuredClone(this.value.condition);
  e.enabled = this._conditionEnabled, (r = this.modalContext) == null || r.updateValue({ condition: e });
};
Cc = function(t) {
  var r;
  const e = t.target.value ?? void 0;
  (r = this.modalContext) == null || r.updateValue({ condition: e });
};
Tc = async function() {
  var a;
  const t = await le(this, ie).getUpdatedSettingsForPersistence(
    this._settingValues,
    this.value.fieldType.settings
  ), e = {
    path: {
      id: this.value.fieldType.id
    },
    body: {
      caption: this.value.caption,
      alias: this.value.alias,
      settings: t,
      allowedUploadTypes: this.value.allowedUploadTypes
    }
  }, { error: r } = await d(
    this,
    ee.postFormFieldByIdValidateSettings(e),
    {
      disableNotifications: !0
    }
  );
  if (r) {
    const i = le(this, ie).createValidationErrorNotification(
      "formEdit_saveFieldFailedTitle",
      r
    ), o = await this.getContext(
      ai
    );
    o == null || o.peek("danger", i);
  } else
    (a = this.modalContext) == null || a.updateValue({ settings: t }), this._submitModal();
};
de.styles = [
  x`
      #caption {
        display: flex;
        flex: 1 1 auto;
        margin-bottom: var(--uui-size-6);
      }

      uui-toggle {
        display: block;
      }

      textarea {
        box-sizing: border-box;
        resize: vertical;
        width: 100%;
      }

      textarea + *,
      uui-select + *,
      uui-toggle + * {
        width: 100%;
        margin-top: var(--uui-size-3);
      }

      uui-toggle + form-edit-conditions {
        display: block;
      }

      #prevalueSource {
        margin-top: var(--uui-size-5);
      }

      [inert] {
        opacity: 0.5;
      }
    `
];
lt([
  b()
], de.prototype, "_aliasLocked", 2);
lt([
  b()
], de.prototype, "_settingValues", 2);
lt([
  b()
], de.prototype, "_settingsConfig", 2);
lt([
  b()
], de.prototype, "_settingsConfigLoaded", 2);
lt([
  b()
], de.prototype, "_showRegex", 2);
lt([
  b()
], de.prototype, "_showRegexReadonly", 2);
lt([
  b()
], de.prototype, "_conditionEnabled", 2);
de = lt([
  f(kf)
], de);
const Af = de, Df = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get FormsEditFieldModalElement() {
    return de;
  },
  default: Af
}, Symbol.toStringTag, { value: "Module" }));
var Rf = Object.defineProperty, If = Object.getOwnPropertyDescriptor, Oc = (t) => {
  throw TypeError(t);
}, va = (t, e, r, a) => {
  for (var i = a > 1 ? void 0 : a ? If(e, r) : e, o = t.length - 1, s; o >= 0; o--)
    (s = t[o]) && (i = (a ? s(e, r, i) : s(i)) || i);
  return a && i && Rf(e, r, i), i;
}, Uf = (t, e, r) => e.has(t) || Oc("Cannot " + r), zf = (t, e, r) => e.has(t) ? Oc("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), Me = (t, e, r) => (Uf(t, e, "access private method"), r), ge, Vi, Pc, xc, Mc, kc, Ac, Dc;
const Wf = "form-edit-submit-message-modal";
let Mt = class extends be {
  constructor() {
    super(...arguments), zf(this, ge), this._richTextConfiguration = [], this._value = [];
  }
  connectedCallback() {
    var t;
    super.connectedCallback(), this._richTextConfiguration = (t = this.data) == null ? void 0 : t.richTextConfiguration, this._value = Object.keys(this.value ?? {}).map((e) => ({
      alias: e,
      value: this.value[e]
    })), Me(this, ge, Pc).call(this);
  }
  render() {
    return n`<umb-body-layout
      headline=${this.localize.term("formEdit_editSubmitMessage")}
    >
      <uui-box>
        <umb-property-dataset .value=${this._value} @change=${Me(this, ge, Ac)}>
          <umb-property
            .alias=${"messageOnSubmitIsHtml"}
            .label=${this.localize.term("formWorkflows_messageOnSubmitFormat")}
            .config=${[
      {
        alias: "showLabels",
        value: !0
      },
      {
        alias: "labelOn",
        value: this.localize.term(
          "formWorkflows_messageOnSubmitIsHtmlToggleTextOn"
        )
      },
      {
        alias: "labelOff",
        value: this.localize.term(
          "formWorkflows_messageOnSubmitIsHtmlToggleTextOff"
        )
      }
    ]}
            property-editor-ui-alias="Umb.PropertyEditorUi.Toggle"
          ></umb-property>
          <umb-property
            .alias=${"messageOnSubmit"}
            .label=${this.localize.term("formWorkflows_messageOnSubmit")}
            .description=${this.localize.term(
      "formWorkflows_messageOnSubmitDescription"
    )}
            .appearance=${{ labelOnTop: this._isHtml ?? !1 }}
            .config=${this._richTextConfiguration}
            .propertyEditorUiAlias=${`Umb.PropertyEditorUi.${this._isHtml ? "Tiptap" : "TextArea"}`}
          >
          </umb-property>
          <umb-property 
            .alias=${"goToPageOnSubmit"}
            .label=${this.localize.term("formWorkflows_goToPage")}
            .description=${this.localize.term(
      "formWorkflows_goToPageDescription"
    )}
            .config=${[{ alias: "validationLimit", value: { max: 1 } }]}
            property-editor-ui-alias="Umb.PropertyEditorUi.DocumentPicker"></umb-property>
          </umb-property>        
        </umb-property-dataset>
      </uui-box>
      <div slot="actions">
        <uui-button
          label=${this.localize.term("general_close")}
          @click=${this._rejectModal}
        ></uui-button>
        <uui-button
          color="positive"
          look="primary"
          label=${this.localize.term("general_submit")}
          @click=${Me(this, ge, Dc)}
        ></uui-button>
      </div>
    </umb-body-layout>`;
  }
};
ge = /* @__PURE__ */ new WeakSet();
Vi = function(t, e) {
  return t.find((r) => r.alias === e);
};
Pc = function() {
  if (this._isHtml = this.value.messageOnSubmitIsHtml, this._isHtml) {
    const t = Me(this, ge, Vi).call(this, this._value, "messageOnSubmit");
    t.value = {
      markup: t == null ? void 0 : t.value
    };
  }
};
xc = function(t) {
  if (!t.trim().length) return "";
  let r = "<p>" + t.replace(/\r/g, "").split(/\n\n/).join("</p><p>") + "</p>";
  return r = r.replace(/\n/g, "<br/>"), { markup: r };
};
Mc = function(t) {
  return new DOMParser().parseFromString(t, "text/html").body.textContent || "";
};
kc = function(t) {
  return this._isHtml ? typeof t == "string" ? Me(this, ge, xc).call(this, t) : t : typeof t == "object" ? Me(this, ge, Mc).call(this, t == null ? void 0 : t.markup) : t;
};
Ac = function(t) {
  var a, i;
  let e = t.target.value;
  this._isHtml = !!((a = Me(this, ge, Vi).call(this, e, "messageOnSubmitIsHtml")) != null && a.value);
  const r = (i = Me(this, ge, Vi).call(this, e, "messageOnSubmit")) == null ? void 0 : i.value;
  e = Ut(
    e,
    {
      alias: "messageOnSubmit",
      value: Me(this, ge, kc).call(this, r)
    },
    (o) => o.alias === "messageOnSubmit"
  ), this._value = e;
};
Dc = function() {
  var e;
  const t = Object.fromEntries(
    this._value.map(({ alias: r, value: a }) => [r, a])
  );
  typeof t.messageOnSubmit == "object" && (t.messageOnSubmit = ((e = t.messageOnSubmit) == null ? void 0 : e.markup) ?? ""), this.updateValue(t), this._submitModal();
};
va([
  b()
], Mt.prototype, "_richTextConfiguration", 2);
va([
  b()
], Mt.prototype, "_value", 2);
va([
  b()
], Mt.prototype, "_isHtml", 2);
Mt = va([
  f(Wf)
], Mt);
const Lf = Mt, Vf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get FormsEditSubmitMessageModalElement() {
    return Mt;
  },
  default: Lf
}, Symbol.toStringTag, { value: "Module" }));
var Nf = Object.defineProperty, qf = Object.getOwnPropertyDescriptor, Rc = (t) => {
  throw TypeError(t);
}, Ic = (t, e, r, a) => {
  for (var i = a > 1 ? void 0 : a ? qf(e, r) : e, o = t.length - 1, s; o >= 0; o--)
    (s = t[o]) && (i = (a ? s(e, r, i) : s(i)) || i);
  return a && i && Nf(e, r, i), i;
}, Ko = (t, e, r) => e.has(t) || Rc("Cannot " + r), Et = (t, e, r) => (Ko(t, e, "read from private field"), r ? r.call(t) : e.get(t)), gr = (t, e, r) => e.has(t) ? Rc("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), Va = (t, e, r, a) => (Ko(t, e, "write to private field"), e.set(t, r), r), ae = (t, e, r) => (Ko(t, e, "access private method"), r), xr, Ni, qi, Mr, Z, Uc, $r, io, zc, Wc, Lc, ci;
const Bf = "form-edit-allowed-file-upload-types";
let ao = class extends Ee {
  constructor() {
    super(), gr(this, Z), gr(this, xr), gr(this, Ni, [
      {
        name: "Allow all files",
        type: "",
        checked: "false"
      },
      {
        name: "PDF",
        type: "pdf",
        checked: "false"
      },
      {
        name: "DOCX",
        type: "docx",
        checked: "false"
      },
      {
        name: "XLSX",
        type: "xlsx",
        checked: "false"
      },
      {
        name: "TXT",
        type: "txt",
        checked: "false"
      },
      {
        name: "PNG",
        type: "png",
        checked: "false"
      },
      {
        name: "JPG",
        type: "jpg",
        checked: "false"
      },
      {
        name: "GIF",
        type: "gif",
        checked: "false"
      }
    ]), gr(this, qi, []), gr(this, Mr, []), this._value = structuredClone(
      Et(this, Ni)
    ), this.consumeContext(ai, (t) => {
      Va(this, xr, t);
    }), this.consumeContext(si, (t) => {
      t && this.observe(t.config, (e) => {
        e && (Va(this, qi, e == null ? void 0 : e.disallowedFileUploadExtensions.split(",").filter(Boolean)), Va(this, Mr, e == null ? void 0 : e.allowedFileUploadExtensions.split(",").filter(Boolean)));
      });
    });
  }
  set value(t) {
    this._value = structuredClone(t), ae(this, Z, Uc).call(this);
  }
  get value() {
    return this._value;
  }
  render() {
    return n`<div>
      ${this.value.filter((t) => t.checked.length > 0).map(
      (t, e) => n`<div>
              <uui-toggle
                ?checked=${t.checked === "true"}
                ?disabled=${e > 0 && ae(this, Z, io).call(this)}
                .label=${t.name}
                @change=${() => ae(this, Z, zc).call(this, e)}
              ></uui-toggle>
            </div>`
    )}
      <div>
        <b
          >${this.localize.term(
      "formFileUpload_userDefinedAllowedFileTypes"
    )}</b
        >
      </div>
      <div>
        ${this.value.filter((t) => t.checked.length === 0).map(
      (t, e) => n`<div>
                <span>${t.name}</span>
                <uui-button
                  label=${this.localize.term("general_delete")}
                  look="secondary"
                  color="default"
                  @click=${() => ae(this, Z, Lc).call(this, e)}
                >
                  <uui-icon name="icon-delete"></uui-icon>
                </uui-button>
              </div>`
    )}
      </div>
      <form>
        <uui-input
          id="addNew"
          type="text"
          size="30"
          .placeholder=${this.localize.term(
      "formFileUpload_addAllowedFileType"
    )}
        ></uui-input>
        <uui-button
          label=${this.localize.term("general_add")}
          look="secondary"
          color="default"
          .disabled="${ae(this, Z, io).call(this)}"
          @click=${() => ae(this, Z, Wc).call(this)}
        >
          <uui-icon name="icon-add"></uui-icon>
        </uui-button>
      </form>
    </div>`;
  }
};
xr = /* @__PURE__ */ new WeakMap();
Ni = /* @__PURE__ */ new WeakMap();
qi = /* @__PURE__ */ new WeakMap();
Mr = /* @__PURE__ */ new WeakMap();
Z = /* @__PURE__ */ new WeakSet();
Uc = function() {
  let t = !1;
  this._value.length === 0 && (t = !0), Et(this, Ni).filter(
    (r) => ae(this, Z, $r).call(this, r.type)
  ).forEach((r) => {
    this._value.find((a) => a.type === r.type) || this._value.push({
      name: r.name,
      type: r.type,
      checked: "false"
    });
  }), this._value.filter((r) => ae(this, Z, $r).call(this, r.type)).length > 0 && (this._value = this._value.filter(
    (r) => ae(this, Z, $r).call(this, r.type)
  )), t && ae(this, Z, ci).call(this);
};
$r = function(t) {
  return t === "" ? !0 : !(Et(this, qi).includes(t) || Et(this, Mr).length > 0 && Et(this, Mr).includes(t) === !1);
};
io = function() {
  return this.value[0].checked === "true";
};
zc = function(t) {
  const e = this._value[t].checked;
  this._value[t].checked = e === "true" ? "false" : "true", ae(this, Z, ci).call(this);
};
Wc = function() {
  var a, i, o;
  const t = (a = this.shadowRoot) == null ? void 0 : a.getElementById(
    "addNew"
  ), e = t.value.toString().replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  if (t.value = "", e.length === 0)
    return;
  if (!ae(this, Z, $r).call(this, e)) {
    (i = Et(this, xr)) == null || i.peek("danger", {
      data: {
        headline: this.localize.term(
          "formFileUpload_disallowedFileExtensionErrorTitle"
        ),
        message: this.localize.term(
          "formFileUpload_disallowedFileExtensionErrorMessage"
        )
      }
    });
    return;
  }
  if (this._value.findIndex(function(s) {
    return s.type.toLowerCase() === e;
  }) >= 0) {
    (o = Et(this, xr)) == null || o.peek("danger", {
      data: {
        headline: this.localize.term(
          "formFileUpload_duplicateFileTypeErrorTitle"
        ),
        message: this.localize.term(
          "formFileUpload_duplicateFileTypeErrorMessage"
        )
      }
    });
    return;
  }
  this._value.push({
    type: e,
    name: e.toUpperCase(),
    checked: ""
  }), ae(this, Z, ci).call(this);
};
Lc = function(t) {
  const e = this.value.filter(
    (r) => r.checked.length > 0
  ).length;
  this._value.splice(t + e, 1), ae(this, Z, ci).call(this);
};
ci = function() {
  this.requestUpdate(), this.dispatchEvent(
    new CustomEvent("change", { composed: !0, bubbles: !0 })
  );
};
Ic([
  m()
], ao.prototype, "value", 1);
ao = Ic([
  f(Bf)
], ao);
var jf = Object.defineProperty, Yf = Object.getOwnPropertyDescriptor, Vc = (t) => {
  throw TypeError(t);
}, Xo = (t, e, r, a) => {
  for (var i = a > 1 ? void 0 : a ? Yf(e, r) : e, o = t.length - 1, s; o >= 0; o--)
    (s = t[o]) && (i = (a ? s(e, r, i) : s(i)) || i);
  return a && i && jf(e, r, i), i;
}, Jo = (t, e, r) => e.has(t) || Vc("Cannot " + r), Bi = (t, e, r) => (Jo(t, e, "read from private field"), r ? r.call(t) : e.get(t)), Na = (t, e, r) => e.has(t) ? Vc("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), Nc = (t, e, r, a) => (Jo(t, e, "write to private field"), e.set(t, r), r), W = (t, e, r) => (Jo(t, e, "access private method"), r), pt, Qo, D, qc, ji, _a, Sa, Zo, es, Bc, jc, Yc, Gc, ba;
const Gf = "form-edit-prevalues";
let kr = class extends Ee {
  constructor() {
    super(...arguments), Na(this, D), Na(this, pt, []), Na(this, Qo, new ii(this, {
      ...new ni(
        "Forms.SorterIdentifier.Prevalues",
        "tr.prevalue-row",
        "tbody.prevalues-container"
      ).config,
      onChange: ({ model: t }) => {
        Nc(this, pt, t);
      },
      onEnd: () => {
        const t = structuredClone(this._value);
        t.sort(
          (e, r) => Bi(this, pt).indexOf(e.value) - Bi(this, pt).indexOf(r.value)
        ), this._value = t, W(this, D, ba).call(this);
      }
    })), this._value = [], this._editIndex = -1;
  }
  set value(t) {
    this._value = structuredClone(t), W(this, D, qc).call(this);
  }
  get value() {
    return this._value;
  }
  render() {
    return n` <table>
      <thead>
        <tr>
          <th></th>
          <th>Value</th>
          <th>Caption</th>
          <th></th>
        </tr>
      </thead>
      <tbody class="prevalues-container">
        ${this.value.map(
      (t, e) => n`<tr class="prevalue-row" sort-unique=${t.value}>
              <td><uui-icon name="icon-navigation"></uui-icon></td>
              <td>${t.value}</td>
              <td>${t.caption}</td>
              <td>
                <uui-action-bar>
                  <uui-button
                    label="edit"
                    look="secondary"
                    color="default"
                    @click=${() => W(this, D, Bc).call(this, e)}
                  >
                    <uui-icon name="edit"></uui-icon>
                  </uui-button>
                  <uui-button
                    label=${this.localize.term("general_delete")}
                    look="secondary"
                    color="default"
                    @click=${() => W(this, D, Gc).call(this, e)}
                  >
                    <uui-icon name="delete"></uui-icon>
                  </uui-button>
                </uui-action-bar>
              </td>
            </tr>`
    )}

        <tr>
          <td></td>
          <td>
            <uui-input
              id="value"
              name="value"
              type="text"
              size="30"
              maxlength="255"
              .placeholder=${this.localize.term("formPrevalues_newValue")}
            ></uui-input>
          </td>
          <td>
            <uui-input
              id="caption"
              name="caption"
              type="text"
              size="30"
              maxlength="255"
              .placeholder=${this.localize.term("formPrevalues_newCaption")}
            ></uui-input>
          </td>
          <td>
            <uui-action-bar>
              <uui-button
                label="add"
                look="secondary"
                color="default"
                @click=${W(this, D, jc)}
              >
                <uui-icon
                  .name=${W(this, D, ji).call(this) ? "icon-save" : "add"}
                ></uui-icon>
              </uui-button>
              ${p(
      W(this, D, ji).call(this),
      () => n`<uui-button
                    label="add"
                    look="secondary"
                    color="default"
                    @click=${W(this, D, Yc)}
                    ><uui-icon name="wrong"></uui-icon
                  ></uui-button>`
    )}
            </uui-action-bar>
          </td>
        </tr>
      </tbody>
    </table>`;
  }
};
pt = /* @__PURE__ */ new WeakMap();
Qo = /* @__PURE__ */ new WeakMap();
D = /* @__PURE__ */ new WeakSet();
qc = function() {
  Nc(this, pt, this._value.map((t) => t.value)), Bi(this, Qo).setModel(Bi(this, pt));
};
ji = function() {
  return this._editIndex > -1;
};
_a = function() {
  return W(this, D, Zo).call(this, "value");
};
Sa = function() {
  return W(this, D, Zo).call(this, "caption");
};
Zo = function(t) {
  var e;
  return (e = this.shadowRoot) == null ? void 0 : e.getElementById(t);
};
es = function() {
  W(this, D, _a).call(this).value = "", W(this, D, Sa).call(this).value = "", this._editIndex = -1;
};
Bc = function(t) {
  this._editIndex = t;
  const e = this._value[this._editIndex];
  W(this, D, _a).call(this).value = e.value, W(this, D, Sa).call(this).value = e.caption || "";
};
jc = function() {
  const t = W(this, D, _a).call(this).value, e = W(this, D, Sa).call(this).value;
  W(this, D, ji).call(this) ? (this._value[this._editIndex].value = t, this._value[this._editIndex].caption = e) : this._value.push({
    value: t,
    caption: e
  }), W(this, D, es).call(this), W(this, D, ba).call(this);
};
Yc = function() {
  W(this, D, es).call(this);
};
Gc = async function(t) {
  await Po(this, {
    headline: this.localize.term("formPrevalues_deletePrevalueHeadline"),
    content: this.localize.term("formPrevalues_deletePrevalueMessage"),
    confirmLabel: this.localize.term("general_yes"),
    color: "danger"
  }), this._value.splice(t, 1), W(this, D, ba).call(this);
};
ba = function() {
  this.requestUpdate(), this.dispatchEvent(
    new CustomEvent("change", { composed: !0, bubbles: !0 })
  );
};
kr.styles = [
  x`
      table {
        width: 100%;
      }

      th:last-child {
        width: 120px;
      }

      /* match padding to uui-input */
      td:not(:has(uui-input, uui-button)) {
        padding: var(--uui-size-1, 3px) var(--uui-size-space-3, 9px);
      }

      th {
        text-align: left;
      }

      .prevalue-row {
        cursor: move;
      }
    `
];
Xo([
  m({ type: Array })
], kr.prototype, "value", 1);
Xo([
  b()
], kr.prototype, "_editIndex", 2);
kr = Xo([
  f(Gf)
], kr);
const Fa = new L("UmbCollectionContext");
var Hf = Object.defineProperty, Kf = Object.getOwnPropertyDescriptor, Hc = (t) => {
  throw TypeError(t);
}, ui = (t, e, r, a) => {
  for (var i = a > 1 ? void 0 : a ? Kf(e, r) : e, o = t.length - 1, s; o >= 0; o--)
    (s = t[o]) && (i = (a ? s(e, r, i) : s(i)) || i);
  return a && i && Hf(e, r, i), i;
}, Xf = (t, e, r) => e.has(t) || Hc("Cannot " + r), Jf = (t, e, r) => e.has(t) ? Hc("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), qa = (t, e, r) => (Xf(t, e, "access private method"), r), _r, Kc, Xc, Jc;
const Qf = "form-export-entries-modal";
let it = class extends be {
  constructor() {
    super(...arguments), Jf(this, _r), this._exportTypes = [], this._selectedExportType = void 0, this._exporting = !1;
  }
  async connectedCallback() {
    var e;
    super.connectedCallback();
    const { data: t } = await d(
      this,
      Qa.getExportTypes({ query: { formId: (e = this.data) == null ? void 0 : e.unique } })
    );
    this._exportTypes = t;
  }
  render() {
    return n`<umb-body-layout
      .headline=${this.localize.term("formEntries_export")}
    >
      <uui-box>
        <umb-property-layout
          orientation="vertical"
          .label=${this.localize.term("formEntries_chooseExportFormat")}
        >
          <div slot="editor">
            <uui-ref-list>
              ${this._exportTypes.map(
      (t) => n`<umb-ref-item
                    selectable
                    select-only
                    id=${t.alias}
                    .name=${this.localize.term(
        `formProviderExportTypes_${t.alias}`
      )}
                    .icon=${t.icon}
                    .detail=${this.localize.term(
        `formProviderExportTypes_${t.alias}Description`
      )}
                    @selected=${() => qa(this, _r, Kc).call(this, t)}
                    @deselected=${qa(this, _r, Xc)}
                  ></umb-ref-item>`
    )}
            </uui-ref-list>
          </div>
        </umb-property-layout>
      </uui-box>
      <div slot="actions">
        <uui-button
          label=${this.localize.term("general_close")}
          @click=${this._rejectModal}
        ></uui-button>
        <uui-button
          look="primary"
          color="positive"
          label=${this.localize.term("actions_export")}
          .disabled=${!this._selectedExportType || this._exporting}
          @click=${qa(this, _r, Jc)}
        ></uui-button>
      </div>
    </umb-body-layout>`;
  }
};
_r = /* @__PURE__ */ new WeakSet();
Kc = function(t) {
  var e;
  (e = this._refItems) == null || e.forEach((r) => {
    r.id !== t.alias && (r.selected = !1);
  }), this._selectedExportType = t.id;
};
Xc = function() {
  this._selectedExportType = void 0;
};
Jc = async function() {
  var s;
  if (this._exporting || !this._selectedExportType) return;
  this._exporting = !0;
  const t = await this.getContext(
    Fa
  );
  if (!t)
    throw new Error("Form entry collection context not found");
  const e = {
    ...await xo(t.filter),
    formId: (s = this.data) == null ? void 0 : s.unique,
    exportType: this._selectedExportType
  }, {
    data: { formId: r, fileName: a }
  } = await d(this, Qa.postExport({ query: e })), { data: i } = await d(
    this,
    Qa.getExport({ query: { fileName: a, formId: r } })
  );
  Pm(i, a, "text/xml"), this._exporting = !1;
  const o = await this.getContext(ai);
  o == null || o.peek("positive", {
    data: {
      message: "Export complete."
    }
  }), this._submitModal();
};
ui([
  b()
], it.prototype, "_exportTypes", 2);
ui([
  $n("umb-ref-item")
], it.prototype, "_refItems", 2);
ui([
  b()
], it.prototype, "_selectedExportType", 2);
ui([
  b()
], it.prototype, "_exporting", 2);
it = ui([
  f(Qf)
], it);
const Zf = it, ey = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get FormsExportEntriesModalElement() {
    return it;
  },
  default: Zf
}, Symbol.toStringTag, { value: "Module" }));
var ty = Object.defineProperty, ry = Object.getOwnPropertyDescriptor, Qc = (t) => {
  throw TypeError(t);
}, ts = (t, e, r, a) => {
  for (var i = a > 1 ? void 0 : a ? ry(e, r) : e, o = t.length - 1, s; o >= 0; o--)
    (s = t[o]) && (i = (a ? s(e, r, i) : s(i)) || i);
  return a && i && ty(e, r, i), i;
}, iy = (t, e, r) => e.has(t) || Qc("Cannot " + r), ay = (t, e, r) => e.has(t) ? Qc("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), oy = (t, e, r) => (iy(t, e, "access private method"), r), oo, Zc;
const sy = "form-preview-modal";
let ir = class extends be {
  constructor() {
    super(...arguments), ay(this, oo), this._loading = !0, this._relations = [];
  }
  async connectedCallback() {
    var e;
    await super.connectedCallback();
    const t = (e = this.data) == null ? void 0 : e.unique;
    if (t) {
      const { data: r } = await d(
        this,
        ee.getFormByIdRelations({ path: { id: t } })
      );
      this._loading = !1, r && (this._relations = r.items.filter(
        (a) => a.nodeType === Mm
      ));
    } else
      this._loading = !1;
  }
  render() {
    return this._loading ? Tm : n`
        <umb-body-layout headline=${this.localize.term("formPreview_headline")}>
          ${p(
      this._relations.length === 0,
      () => this.localize.term("formPreview_descriptionNoItems"),
      () => n`
              <p>${this.localize.term("formPreview_description")}</p>
              <uui-box>
                <uui-ref-list>
                  ${this._relations.map(
        (t) => n`
                      <uui-ref-node
                        .name="${t.nodeName}"
                        @open=${() => oy(this, oo, Zc).call(this, t.nodeKey)}
                      >
                        ${p(
          t.contentTypeIcon,
          () => n`<umb-icon slot="icon" name="${t.contentTypeIcon}"></uui-icon>`
        )}
                        ${p(
          t.nodePublished,
          () => n`<uui-tag size="s" slot="tag" color="positive"
                              >${this.localize.term(
            "content_published"
          )}</uui-tag
                            >`
        )}
                      </uui-ref-node>
                    `
      )}
                </uui-ref-list>
              </uui-box>
            `
    )}
          <uui-button
            slot="actions"
            label=${this.localize.term("general_close")}
            @click=${this._rejectModal}
          ></uui-button>
        </umb-body-layout>
      `;
  }
};
oo = /* @__PURE__ */ new WeakSet();
Zc = async function(t) {
  await new km(this).enter();
  const e = await this.getContext(Am);
  if (!e)
    throw new Error("Server context is missing");
  const r = e.getBackofficePath(), a = new URL(
    xm(r) + "preview",
    window.location.origin
  );
  a.searchParams.set("id", t);
  const i = window.open(
    a.toString(),
    `umbpreview-${t}`
  );
  i == null || i.focus(), this._rejectModal();
};
ts([
  b()
], ir.prototype, "_loading", 2);
ts([
  b()
], ir.prototype, "_relations", 2);
ir = ts([
  f(sy)
], ir);
const ny = ir, ly = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get FormsPreviewModalElement() {
    return ir;
  },
  default: ny
}, Symbol.toStringTag, { value: "Module" }));
class cy extends $m {
  async execute() {
    const e = await this.getContext(q);
    if (!e) throw new Error("Modal manager context not found");
    const r = await this.getContext(
      ih
    ), a = new Di(this), { data: i } = await a.requestCollection(), o = (i == null ? void 0 : i.items) || [];
    e.open(
      this,
      Ch,
      {
        data: {
          fieldTypes: o
        },
        value: {
          wizard: await (r == null ? void 0 : r.getWizardScaffold())
        }
      }
    ).onSubmit().catch(() => {
    });
  }
}
const Ar = "Forms.Workspace.DataSource", uy = {
  type: "workspace",
  kind: "routable",
  alias: Ar,
  name: "Data Source Workspace",
  api: () => import("./datasource-workspace.context.js"),
  meta: {
    entityType: Rt
  }
}, dy = [
  {
    type: "workspaceView",
    alias: "Forms.WorkspaceView.DataSource.Design",
    name: "Form Workspace Design View",
    element: () => import("./workspace-view-datasource-design.element.js"),
    weight: 90,
    meta: {
      label: "Design",
      pathname: "design",
      icon: "document"
    },
    conditions: [
      {
        alias: "Umb.Condition.WorkspaceAlias",
        match: Ar
      },
      {
        alias: ce,
        match: (t) => t.userSecurity.manageDataSources
      }
    ]
  },
  {
    type: "workspaceView",
    alias: "Forms.WorkspaceView.DataSource.Info",
    name: "Form Workspace Info View",
    element: () => import("./workspace-view-datasource-info.element.js"),
    weight: 90,
    meta: {
      label: "Info",
      pathname: "info",
      icon: "info"
    },
    conditions: [
      {
        alias: "Umb.Condition.WorkspaceAlias",
        match: Ar
      },
      {
        alias: ce,
        match: (t) => t.userSecurity.manageDataSources
      }
    ]
  }
], my = [
  {
    type: "workspaceAction",
    kind: "default",
    alias: "Forms.WorkspaceAction.DataSource.Save",
    name: "Save Data Source Workspace Action",
    api: Tr,
    meta: {
      label: "Save",
      look: "primary",
      color: "positive"
    },
    conditions: [
      {
        alias: "Umb.Condition.WorkspaceAlias",
        match: Ar
      }
    ]
  },
  {
    type: "workspaceAction",
    kind: "default",
    alias: "Forms.WorkspaceAction.DataSource.CreateForm",
    name: "Create Form From Data Source Workspace Action",
    api: cy,
    meta: {
      label: "Create Form"
    },
    conditions: [
      {
        alias: "Umb.Condition.WorkspaceAlias",
        match: Ar
      },
      {
        alias: kn
      }
    ]
  }
], py = [uy, ...dy, ...my], hy = [
  ...rp,
  ...Gp,
  ...rh,
  ...ep,
  ...py
], fy = "Forms.Repository.DataSourceType.Collection", yy = {
  type: "repository",
  alias: fy,
  name: "Data Source Type Collection Repository",
  api: () => import("./datasource-type-collection.repository.js")
}, gy = [yy];
var Br;
class vy {
  constructor(e) {
    h(this, Br);
    y(this, Br, e);
  }
  async read(e) {
    if (!e) throw new Error("Unique is missing");
    const { data: r, error: a } = await d(
      c(this, Br),
      Ep.getDataSourceTypeById({ path: { id: e } })
    );
    return a ? { error: a } : { data: r };
  }
  createScaffold() {
    throw new Error("Method not implemented.");
  }
  create() {
    throw new Error("Method not implemented.");
  }
  update() {
    throw new Error("Method not implemented.");
  }
  delete() {
    throw new Error("Method not implemented.");
  }
}
Br = new WeakMap();
class _y extends Fe {
  constructor(e) {
    super(e, eu.contextAlias);
  }
}
const eu = new L(
  "FormsDataSourceTypeDetailStore"
);
class Sy extends we {
  constructor(e) {
    super(
      e,
      vy,
      eu
    );
  }
}
const by = "Forms.Repository.DataSourceType.Detail", Fy = "Forms.Store.DataSourceType.Detail", wy = {
  type: "repository",
  alias: by,
  name: "Data Source Type Detail Repository",
  api: Sy
}, Ey = {
  type: "store",
  alias: Fy,
  name: "Field Data Source Type Detail Store",
  api: _y
}, $y = [wy, Ey], Cy = [
  ...gy,
  ...$y
];
var jr;
class Ty {
  constructor(e) {
    h(this, jr);
    y(this, jr, e);
  }
  async read(e) {
    if (!e) throw new Error("Unique is missing");
    return await d(
      c(this, jr),
      ha.getFieldTypeById({ path: { id: e } })
    );
  }
  createScaffold() {
    throw new Error("Method not implemented.");
  }
  create() {
    throw new Error("Method not implemented.");
  }
  update() {
    throw new Error("Method not implemented.");
  }
  delete() {
    throw new Error("Method not implemented.");
  }
}
jr = new WeakMap();
class Oy extends Fe {
  constructor(e) {
    super(e, tu.contextAlias);
  }
}
const tu = new L("FormsFieldTypeDetailStore");
class Py extends we {
  constructor(e) {
    super(
      e,
      Ty,
      tu
    );
  }
  async requestValidationPatterns() {
    const { data: e, error: r } = await d(
      this._host,
      ha.getFieldTypeValidationPattern()
    );
    return r ? { error: r } : { data: e };
  }
}
const xy = "Forms.Repository.FieldType.Detail", My = "Forms.Store.FieldType.Detail", ky = {
  type: "repository",
  alias: xy,
  name: "Field Type Detail Repository",
  api: Py
}, Ay = {
  type: "store",
  alias: My,
  name: "Field Type Detail Store",
  api: Oy
}, Dy = [ky, Ay], Ry = [
  ...lh,
  ...Dy
], Iy = "Forms.Repository.PrevalueSourceType.Collection", Uy = {
  type: "repository",
  alias: Iy,
  name: "Prevalue Source Type Collection Repository",
  api: () => import("./prevaluesource-type-collection.repository.js")
}, zy = [Uy];
var Yr;
class Wy {
  constructor(e) {
    h(this, Yr);
    y(this, Yr, e);
  }
  async read(e) {
    if (!e) throw new Error("Unique is missing");
    return await d(
      c(this, Yr),
      Tp.getPrevalueSourceTypeById({
        path: { id: e }
      })
    );
  }
  createScaffold() {
    throw new Error("Method not implemented.");
  }
  create() {
    throw new Error("Method not implemented.");
  }
  update() {
    throw new Error("Method not implemented.");
  }
  delete() {
    throw new Error("Method not implemented.");
  }
}
Yr = new WeakMap();
class Ly extends Fe {
  constructor(e) {
    super(e, ru.contextAlias);
  }
}
const ru = new L(
  "FormsPrevalueSourceTypeDetailStore"
);
class Vy extends we {
  constructor(e) {
    super(
      e,
      Wy,
      ru
    );
  }
}
const Ny = "Forms.Repository.PrevalueSourceType.Detail", qy = "Forms.Store.PrevalueSourceType.Detail", By = {
  type: "repository",
  alias: Ny,
  name: "Prevalue Source Type Detail Repository",
  api: Vy
}, jy = {
  type: "store",
  alias: qy,
  name: "Field Prevalue Source Type Detail Store",
  api: Ly
}, Yy = [By, jy], Gy = [
  ...zy,
  ...Yy
];
class Hy {
  async getSettingValueForEditor(e, r, a) {
    return Promise.resolve(a);
  }
  async getSettingValueForPersistence(e, r) {
    var a;
    if (Array.isArray(r.value)) {
      const i = r.value;
      return Promise.resolve((i == null ? void 0 : i.length) > 0 ? i[0] : "");
    } else
      return Promise.resolve(((a = r.value) == null ? void 0 : a.toString()) || "");
  }
  async getSettingPropertyConfig(e) {
    const r = [];
    return r.push({
      alias: "multiple",
      value: !1
    }), r.push({
      alias: "items",
      value: e.prevalues
    }), Promise.resolve(r);
  }
  destroy() {
  }
}
class Ky {
  async getSettingValueForEditor(e, r, a) {
    return Promise.resolve(a);
  }
  async getSettingValueForPersistence(e, r) {
    var a;
    return Promise.resolve(((a = r.value) == null ? void 0 : a.toString()) || "");
  }
  async getSettingPropertyConfig(e) {
    const r = [];
    return e.prevalues.length >= 1 && (r.push({
      alias: "min",
      value: e.prevalues[0]
    }), e.prevalues.length >= 2 && (r.push({
      alias: "max",
      value: e.prevalues[1]
    }), e.prevalues.length >= 3 && r.push({
      alias: "step",
      value: e.prevalues[2]
    }))), Promise.resolve(r);
  }
  destroy() {
  }
}
var Xt;
class Xy {
  constructor(e) {
    h(this, Xt);
    y(this, Xt, e);
  }
  async getSettingValueForEditor(e, r, a) {
    if (a) {
      const { data: i, error: o } = await d(
        c(this, Xt),
        Cp.getMediaByPath({
          query: { path: encodeURIComponent(a) }
        }),
        {
          disableNotifications: !0
        }
      );
      if (!o)
        return Promise.resolve(i.id);
    }
    return Promise.resolve("");
  }
  async getSettingValueForPersistence(e, r) {
    var i, o;
    const a = r.value;
    if (a) {
      const { data: s } = await d(
        c(this, Xt),
        Im.getMediaUrls({ query: { id: [a] } }),
        {
          disableNotifications: !0
        }
      ), l = (o = (i = s == null ? void 0 : s[0]) == null ? void 0 : i.urlInfos) == null ? void 0 : o[0].url;
      if (!l) return Promise.resolve("");
      const g = new URL(l).pathname;
      return Promise.resolve(g);
    }
    return Promise.resolve("");
  }
  async getSettingPropertyConfig() {
    const e = [];
    return e.push({
      alias: "validationLimit",
      value: {
        min: 1,
        max: 1
      }
    }), Promise.resolve(e);
  }
  destroy() {
  }
}
Xt = new WeakMap();
class Jy {
  async getSettingValueForEditor(e, r, a) {
    if (!isNaN(parseFloat(a))) {
      const i = Math.trunc(parseFloat(a) * 10);
      return Promise.resolve({ from: i, to: i });
    }
    return Promise.resolve(void 0);
  }
  async getSettingValueForPersistence(e, r) {
    const a = ((r.value ? parseInt(r.value.from) : 5) / 10).toFixed(1);
    return Promise.resolve(a);
  }
  async getSettingPropertyConfig(e, r, a) {
    var s, l;
    const i = [];
    i.push({
      alias: "enableRange",
      value: !1
    });
    let o = ((l = (s = a.find((g) => g.alias === r)) == null ? void 0 : s.value) == null ? void 0 : l.toString()) || "";
    return isNaN(parseFloat(o)) && (o = ""), e.prevalues.length >= 1 && (i.push({
      alias: "minVal",
      value: parseFloat(e.prevalues[0]) * 10
    }), e.prevalues.length >= 2 && (i.push({
      alias: "maxVal",
      value: parseFloat(e.prevalues[1]) * 10
    }), e.prevalues.length >= 3 && (i.push({
      alias: "step",
      value: parseFloat(e.prevalues[2]) * 10
    }), e.prevalues.length >= 3 && o.length === 0 ? i.push({
      alias: "initVal1",
      value: parseFloat(e.prevalues[3]) * 10
    }) : i.push({
      alias: "initVal1",
      value: parseFloat(o)
    })))), Promise.resolve(i);
  }
  destroy() {
  }
}
var Gr;
class Qs {
  constructor(e) {
    h(this, Gr);
    y(this, Gr, e);
  }
  async getSettingValueForEditor(e, r, a) {
    const i = { markup: a };
    return Promise.resolve(i);
  }
  async getSettingValueForPersistence(e, r) {
    const a = r.value ? r.value.markup : "";
    return Promise.resolve(a);
  }
  async getSettingPropertyConfig() {
    const e = [], { data: r } = await d(
      c(this, Gr),
      ha.getFieldTypeRichtextDatatype(),
      {
        disableNotifications: !0
      }
    );
    return r.configurationData && (e.push({
      alias: "maxImageSize",
      value: r.configurationData.maxImageSize
    }), e.push({
      alias: "toolbar",
      value: r.configurationData.toolbar
    }), r.configurationData.extensions && e.push({
      alias: "extensions",
      value: r.configurationData.extensions
    }), r.configurationData.mode && e.push({
      alias: "mode",
      value: r.configurationData.mode
    }), r.configurationData.stylesheets && e.push({
      alias: "stylesheets",
      value: r.configurationData.stylesheets
    })), e;
  }
  destroy() {
  }
}
Gr = new WeakMap();
class Qy {
  async getSettingValueForEditor(e, r, a) {
    let i = !1;
    return a ? i = a.toLowerCase() === "true" : i = e.prevalues.length >= 1 && e.prevalues[0].toLowerCase() === "true", Promise.resolve(i);
  }
  async getSettingValueForPersistence(e, r) {
    const a = r.value ? "True" : "False";
    return Promise.resolve(a);
  }
  async getSettingPropertyConfig() {
    const e = [];
    return Promise.resolve(e);
  }
  destroy() {
  }
}
class Zy {
  async getSettingValueForEditor(e, r, a) {
    return Promise.resolve(a);
  }
  async getSettingValueForPersistence(e, r) {
    const a = r.value ? r.value.temporaryFileId : "";
    return Promise.resolve(a);
  }
  async getSettingPropertyConfig() {
    const e = [];
    return e.push({
      alias: "multiple",
      value: !1
    }), e.push({
      alias: "fileExtensions",
      value: ["txt"]
    }), Promise.resolve(e);
  }
  destroy() {
  }
}
class eg {
  async getSettingValueForEditor(e, r, a) {
    return a.length === 0 ? Promise.resolve({}) : Promise.resolve(JSON.parse(a));
  }
  async getSettingValueForPersistence(e, r) {
    return Promise.resolve(JSON.stringify(r.value));
  }
  async getSettingPropertyConfig() {
    return Promise.resolve([]);
  }
  destroy() {
  }
}
class tg {
  async getSettingValueForEditor(e, r, a) {
    let i = [];
    return a ? i = a.split(",") : i = [], Promise.resolve(i);
  }
  async getSettingValueForPersistence(e, r) {
    const a = r.value.join(",");
    return Promise.resolve(a);
  }
  async getSettingPropertyConfig() {
    const e = [];
    return Promise.resolve(e);
  }
  destroy() {
  }
}
class rg {
  async getSettingValueForEditor(e, r, a) {
    return Promise.resolve(a);
  }
  async getSettingValueForPersistence(e, r) {
    var a;
    return Promise.resolve(((a = r.value) == null ? void 0 : a.toString()) || "");
  }
  async getSettingPropertyConfig(e) {
    const r = [];
    return r.push({
      alias: "settingProvidingDocTypeAlias",
      value: e.prevalues.length > 0 ? e.prevalues[0] : ""
    }), Promise.resolve(r);
  }
  destroy() {
  }
}
const ig = [
  {
    type: "formsSettingValueConverter",
    alias: "Forms.SettingValueConverter.Dropdown",
    name: "Dropdown Setting Value Converter",
    propertyEditorUiAlias: "Umb.PropertyEditorUi.Dropdown",
    api: Hy
  },
  {
    type: "formsSettingValueConverter",
    alias: "Forms.SettingValueConverter.Integer",
    name: "Number Setting Value Converter",
    propertyEditorUiAlias: "Umb.PropertyEditorUi.Integer",
    api: Ky
  },
  {
    type: "formsSettingValueConverter",
    alias: "Forms.SettingValueConverter.MediaEntityPicker",
    name: "Media Entity Picker Setting Value Converter",
    propertyEditorUiAlias: "Umb.PropertyEditorUi.MediaEntityPicker",
    api: Xy
  },
  {
    type: "formsSettingValueConverter",
    alias: "Forms.SettingValueConverter.Slider",
    name: "Number Slider Value Converter",
    propertyEditorUiAlias: "Umb.PropertyEditorUi.Slider",
    api: Jy
  },
  {
    type: "formsSettingValueConverter",
    alias: "Forms.SettingValueConverter.RichText.TinyMCE",
    name: "Rich Text Setting Value Converter",
    propertyEditorUiAlias: "Umb.PropertyEditorUi.TinyMCE",
    api: Qs
  },
  {
    type: "formsSettingValueConverter",
    alias: "Forms.SettingValueConverter.RichText.Tiptap",
    name: "Rich Text Setting Value Converter",
    propertyEditorUiAlias: "Umb.PropertyEditorUi.Tiptap",
    api: Qs
  },
  {
    type: "formsSettingValueConverter",
    alias: "Forms.SettingValueConverter.Toggle",
    name: "Number Toggle Value Converter",
    propertyEditorUiAlias: "Umb.PropertyEditorUi.Toggle",
    api: Qy
  },
  {
    type: "formsSettingValueConverter",
    alias: "Forms.SettingValueConverter.Upload",
    name: "Upload Setting Value Converter",
    propertyEditorUiAlias: "Umb.PropertyEditorUi.UploadField",
    api: Zy
  },
  {
    type: "formsSettingValueConverter",
    alias: "Forms.SettingValueConverter.SourcePicker",
    name: "Source Picker Setting Value Converter",
    propertyEditorUiAlias: "Umb.PropertyEditorUi.ContentPicker.Source",
    api: eg
  },
  {
    type: "formsSettingValueConverter",
    alias: "Forms.SettingValueConverter.MultipleTextString",
    name: "Multiple Text String Setting Value Converter",
    propertyEditorUiAlias: "Umb.PropertyEditorUi.MultipleTextString",
    api: tg
  },
  {
    type: "formsSettingValueConverter",
    alias: "Forms.SettingValueConverter.DocumentTypeFieldPicker",
    name: "Document Type Field Picker Setting Value Converter",
    propertyEditorUiAlias: "Forms.PropertyEditorUi.DocumentTypeFieldPicker",
    api: rg
  }
], ag = "Forms.Repository.WorkflowType.Collection", og = {
  type: "repository",
  alias: ag,
  name: "Workflow Type Collection Repository",
  api: () => Promise.resolve().then(() => Vh)
}, sg = [og];
var Hr;
class ng {
  constructor(e) {
    h(this, Hr);
    y(this, Hr, e);
  }
  async read(e) {
    if (!e) throw new Error("Unique is missing");
    return await d(
      c(this, Hr),
      Vn.getWorkflowTypeById({ path: { id: e } })
    );
  }
  createScaffold() {
    throw new Error("Method not implemented.");
  }
  create() {
    throw new Error("Method not implemented.");
  }
  update() {
    throw new Error("Method not implemented.");
  }
  delete() {
    throw new Error("Method not implemented.");
  }
}
Hr = new WeakMap();
class lg extends Fe {
  constructor(e) {
    super(e, iu.contextAlias);
  }
}
const iu = new L(
  "FormsWorkflowTypeDetailStore"
);
class cg extends we {
  constructor(e) {
    super(
      e,
      ng,
      iu
    );
  }
}
const ug = "Forms.Repository.WorkflowType.Detail", dg = "Forms.Store.WorkflowType.Detail", mg = {
  type: "repository",
  alias: ug,
  name: "Workflow Type Detail Repository",
  api: cg
}, pg = {
  type: "store",
  alias: dg,
  name: "Field Workflow Type Detail Store",
  api: lg
}, hg = [mg, pg], fg = [
  ...sg,
  ...hg
], yg = [
  ...Cy,
  ...Ry,
  ...Gy,
  ...ig,
  ...fg
], gg = "email-template", vg = "email-template-root", _g = "email-template-folder", au = "Forms.Repository.EmailTemplate.Tree", Sg = "Forms.Store.EmailTemplate.Tree", bg = "Forms.Tree.EmailTemplate", Fg = {
  type: "repository",
  alias: au,
  name: "Email Template Tree Repository",
  api: () => import("./email-template-tree.repository.js")
}, wg = {
  type: "treeStore",
  alias: Sg,
  name: "Email Template Tree Store",
  api: () => import("./email-template-tree.store.js")
}, Eg = {
  type: "tree",
  kind: "default",
  alias: bg,
  name: "Email Template Tree",
  meta: {
    repositoryAlias: au
  }
}, $g = {
  type: "treeItem",
  kind: "default",
  alias: "Forms.TreeItem.EmailTemplate",
  name: "Email Template Tree Item",
  forEntityTypes: [
    vg,
    gg,
    _g
  ]
}, Cg = [
  Fg,
  wg,
  Eg,
  $g
], Tg = [...Cg];
class Og extends gn {
  constructor(e, r) {
    super(e, r), this.consumeContext(De, (a) => {
      const i = a == null ? void 0 : a.getData();
      this.permitted = i ? this.config.match(i) : !1;
    });
  }
}
const so = "Forms.Condition.FormSettings", Pg = [
  {
    type: "condition",
    name: "Form Settings Condition",
    alias: so,
    api: Og
  }
], xg = [...Pg];
class Mg extends Fe {
  constructor(e) {
    super(e, ou.contextAlias);
  }
}
const ou = new L("FormDetailStore");
var qe;
class kg {
  constructor(e) {
    h(this, qe);
    y(this, qe, e);
  }
  /**
   * Creates a new Form scaffold
   * @param {(string | null)} parentUnique
   * @return { FormDetailModel }
   * @memberof FormsFormDetailServerDataSource
   */
  async createScaffold() {
    const e = K.new();
    return { data: {
      entityType: "form",
      unique: e,
      id: e,
      created: (/* @__PURE__ */ new Date()).toJSON(),
      updated: (/* @__PURE__ */ new Date()).toJSON(),
      messageOnSubmitIsHtml: !1,
      displayDefaultFields: !0,
      daysToRetainApprovedRecordsFor: 0,
      daysToRetainRejectedRecordsFor: 0,
      daysToRetainSubmittedRecordsFor: 0,
      selectedDisplayFields: [],
      nodeId: 0,
      name: "",
      path: "",
      formWorkflows: {
        onSubmit: [],
        onApprove: [],
        onReject: []
      },
      pages: [],
      fieldIndicationType: lp.MARK_MANDATORY_FIELDS,
      indicator: "*",
      showValidationSummary: !1,
      hideFieldValidation: !1,
      requiredErrorMessage: "",
      invalidErrorMessage: "",
      messageOnSubmit: "",
      manualApproval: !1,
      storeRecordsLocally: !1,
      autocompleteAttribute: "",
      disableDefaultStylesheet: !1,
      submitLabel: "",
      nextLabel: "",
      prevLabel: "",
      showPagingOnMultiPageForms: me.NONE,
      pagingDetailsFormat: "",
      pageCaptionFormat: "",
      showSummaryPageOnMultiPageForms: !1,
      validationRules: []
    } };
  }
  /**
   * Fetches a Form with the given id from the server
   * @param {string} unique
   * @return {FormDesign}
   * @memberof FormsFormDetailServerDataSource
   */
  async read(e) {
    if (!e) throw new Error("Unique is missing");
    const { data: r, error: a } = await d(
      c(this, qe),
      ee.getFormById({ path: { id: e } })
    );
    return a ? { error: a } : { data: r };
  }
  /**
   * Inserts a new Form on the server
   * @param {FormDetailModel} form
   * @return {*}
   * @memberof FormsFormDetailServerDataSource
   */
  async create(e) {
    if (!e) throw new Error("Form is missing");
    if (!e.unique) throw new Error("Form unique is missing");
    const { error: r } = await d(
      c(this, qe),
      ee.postForm({ body: e })
    );
    return r ? { error: r } : this.read(e.unique);
  }
  /**
   * Updates a Form on the server
   * @param {FormDetailModel} Form
   * @return {*}
   * @memberof FormsFormDetailServerDataSource
   */
  async update(e) {
    if (!e.unique) throw new Error("Unique is missing");
    const { error: r } = await d(
      c(this, qe),
      ee.putFormById({ path: { id: e.id }, body: e })
    );
    return r ? { error: r } : this.read(e.unique);
  }
  /**
   * Deletes a Form on the server
   * @param {string} unique
   * @return {*}
   * @memberof FormsFormDetailServerDataSource
   */
  async delete(e) {
    if (!e) throw new Error("Unique is missing");
    return await d(
      c(this, qe),
      ee.deleteFormById({ path: { id: e } })
    );
  }
}
qe = new WeakMap();
class Ag extends we {
  constructor(e) {
    super(
      e,
      kg,
      ou
    );
  }
  async requestRecordsMetaData(e) {
    if (!e) throw new Error("Unique is missing");
    const { data: r, error: a } = await d(
      this._host,
      Je.getFormByFormIdRecordMetadata({ path: { formId: e } })
    );
    return a ? { error: a } : { data: r };
  }
  async requestHasRelations(e) {
    if (!e) throw new Error("Unique is missing");
    const { data: r, error: a } = await d(
      this._host,
      ee.getFormByIdHasRelations({ path: { id: e } })
    );
    return a ? { error: a } : { data: r };
  }
  async requestTemplates() {
    const { data: e, error: r } = await d(
      this._host,
      $p.getFormTemplate()
    );
    return r ? { error: r } : { data: e };
  }
  async requestFormScaffold(e) {
    const { data: r, error: a } = e.length === 0 ? await d(this, ee.getFormScaffold()) : await d(
      this,
      ee.getFormScaffoldByTemplate({ path: { template: e } })
    );
    return a ? { error: a } : { data: r };
  }
  async copyForm(e, r, a, i) {
    if (!e) throw new Error("Unique is missing");
    const o = {
      newName: a,
      copyWorkflows: r,
      copyToFolderId: i
    }, { data: s, error: l } = await d(
      this._host,
      ee.postFormByIdCopy({ path: { id: e }, body: o })
    );
    return l ? { error: l } : { data: s };
  }
  async copyFormWorkflows(e, r, a) {
    if (!e) throw new Error("sourceId is missing");
    if (!r) throw new Error("destinationId is missing");
    const i = {
      sourceId: e,
      destinationId: r,
      workflowIds: a
    }, { data: o, error: s } = await d(
      this._host,
      ee.postFormByIdCopyWorkflows({ path: { id: e }, body: i })
    );
    return s ? { error: s } : { data: o };
  }
  async moveForm(e, r) {
    if (!e) throw new Error("Unique is missing");
    const a = {
      parentId: r
    }, { data: i, error: o } = await d(
      this._host,
      ee.putFormByIdMove({ path: { id: e }, body: a })
    );
    return o ? { error: o } : { data: i };
  }
}
var Be;
class Dg {
  constructor(e) {
    h(this, Be);
    y(this, Be, e);
  }
  async createScaffold(e) {
    return { data: {
      entityType: ue,
      unique: K.new(),
      name: "",
      ...e
    } };
  }
  async read(e) {
    if (!e) throw new Error("Unique is missing");
    const { data: r, error: a } = await d(
      c(this, Be),
      dt.getFolderById({ path: { id: e } })
    );
    return a ? { error: a } : {
      data: {
        unique: r.id,
        entityType: ue,
        name: r.name,
        isFolder: !0,
        hasChildren: !0,
        // TODO: Check if the folder has children
        parent: {
          unique: r.parentId ? r.parentId : null,
          entityType: ue
        }
      }
    };
  }
  async create(e, r) {
    if (!e) throw new Error("Data is missing");
    if (!e.unique) throw new Error("Unique is missing");
    if (!e.name) throw new Error("Name is missing");
    const a = {
      id: e.unique,
      parent: r ? { id: r } : null,
      name: e.name
    }, { error: i } = await d(
      c(this, Be),
      dt.postFolder({ body: a })
    );
    return i ? { error: i } : this.read(e.unique);
  }
  async update(e) {
    if (!e) throw new Error("Data is missing");
    if (!e.unique) throw new Error("Unique is missing");
    if (!e.name) throw new Error("Folder name is missing");
    const { error: r } = await d(
      c(this, Be),
      dt.putFolderById({
        path: { id: e.unique },
        body: { name: e.name }
      })
    );
    return r ? { error: r } : this.read(e.unique);
  }
  async delete(e) {
    if (!e) throw new Error("Unique is missing");
    return await d(
      c(this, Be),
      dt.deleteFolderById({ path: { id: e } })
    );
  }
}
Be = new WeakMap();
class Rg extends Fe {
  constructor(e) {
    super(e, su.contextAlias);
  }
}
const su = new L("FormFolderDetailStore");
class Ig extends we {
  constructor(e) {
    super(
      e,
      Dg,
      su
    );
  }
  async isEmpty(e) {
    if (!e) throw new Error("Unique is missing");
    const { data: r } = await d(
      this._host,
      dt.getFolderByIdIsEmpty({ path: { id: e } })
    );
    return r;
  }
  async moveFolder(e, r) {
    if (!e) throw new Error("Unique is missing");
    const a = {
      parentId: r
    }, { data: i, error: o } = await d(
      this._host,
      dt.putFolderByIdMove({ path: { id: e }, body: a })
    );
    return o ? { error: o } : { data: i };
  }
}
const Ug = "Forms.Repository.Form.Detail", zg = "Forms.Store.Form.Detail", nu = "Forms.Repository.Folder.Detail", Wg = "Forms.Store.Folder.Detail", Lg = [
  {
    type: "repository",
    alias: Ug,
    name: "Form Detail Repository",
    api: Ag
  },
  {
    type: "repository",
    alias: nu,
    name: "Form Folder Detail Repository",
    api: Ig
  }
], Vg = [
  {
    type: "store",
    alias: zg,
    name: "Form Detail Store",
    api: Mg
  },
  {
    type: "store",
    alias: Wg,
    name: "Form Folder Detail Store",
    api: Rg
  }
], Ng = [...Lg, ...Vg];
class qg extends wn {
  constructor(e) {
    super(e, { getItems: Bg, mapper: jg });
  }
}
const Bg = (t) => (
  // eslint-disable-next-line local-rules/no-direct-api-import
  ee.getItemForm({ query: { id: t } })
), jg = (t) => ({
  unique: t.id,
  name: t.name
});
class Yg extends Fn {
  constructor(e) {
    super(e, lu.contextAlias);
  }
}
const lu = new L("FormsFormItemStore");
class Gg extends En {
  constructor(e) {
    super(e, qg, lu);
  }
}
class Hg extends Fn {
  constructor(e) {
    super(e, cu.contextAlias);
  }
}
const cu = new L("FormsFolderItemStore");
class Kg extends wn {
  constructor(e) {
    super(e, { getItems: Xg, mapper: Jg });
  }
}
const Xg = (t) => (
  // eslint-disable-next-line local-rules/no-direct-api-import
  dt.getItemFolder({ query: { id: t } })
), Jg = (t) => ({
  unique: t.id,
  name: t.name
});
class Qg extends En {
  constructor(e) {
    super(
      e,
      Kg,
      cu
    );
  }
}
const uu = "Forms.Repository.Form.Item", du = "Forms.Repository.Folder.Item", Zg = "Forms.Store.Form.Item", ev = "Forms.Store.Folder.Item", tv = [
  {
    type: "repository",
    alias: uu,
    name: "Forms Form Item Repository",
    api: Gg
  },
  {
    type: "repository",
    alias: du,
    name: "Forms Folder Item Repository",
    api: Qg
  }
], rv = [
  {
    type: "itemStore",
    alias: Zg,
    name: "Forms Form Item Store",
    api: Yg
  },
  {
    type: "itemStore",
    alias: ev,
    name: "Forms Folder Item Store",
    api: Hg
  }
], iv = [...tv, ...rv], av = new C(
  "Forms.Modal.FormCreateOptions",
  {
    modal: {
      type: "sidebar",
      size: "small"
    }
  }
);
class ov extends re {
  async execute() {
    const e = await this.getContext(q);
    if (!e) throw new Error("Modal manager not found");
    await e.open(
      this,
      av,
      {
        data: {
          parent: {
            entityType: this.args.entityType,
            unique: this.args.unique
          }
        }
      }
    ).onSubmit().catch(() => {
    });
  }
}
const sv = [
  {
    type: "entityAction",
    kind: "default",
    alias: "Forms.EntityAction.Form.Create",
    name: "Create Form Entity Action",
    weight: 100,
    api: ov,
    forEntityTypes: [
      dr,
      ue
    ],
    meta: {
      icon: "icon-add",
      label: "Create..."
    }
  },
  {
    type: "modal",
    alias: "Forms.Modal.FormCreateOptions",
    name: "Form Create Options Modal",
    js: () => import("./form-create-options-modal.element.js")
  }
], nv = [...sv], lv = new C(
  "Forms.Modal.FormCopyOptions",
  {
    modal: {
      type: "sidebar",
      size: "small"
    }
  }
);
class cv extends re {
  async execute() {
    const e = await this.getContext(q);
    if (!e) throw new Error("Modal manager not found");
    await e.open(
      this,
      lv,
      {
        data: {
          unique: this.args.unique
        }
      }
    ).onSubmit().catch(() => {
    });
  }
}
const uv = [
  {
    type: "entityAction",
    kind: "default",
    alias: "Forms.EntityAction.Form.Copy",
    name: "Copy Form Entity Action",
    weight: 80,
    api: cv,
    forEntityTypes: [oe],
    meta: {
      icon: "icon-documents",
      label: "Copy..."
    }
  },
  {
    type: "modal",
    alias: "Forms.Modal.FormCopyOptions",
    name: "Form Copy Options Modal",
    js: () => import("./form-copy-options-modal.element.js")
  }
], dv = [...uv], mv = new C(
  "Forms.Modal.FormCopyWorkflowsOptions",
  {
    modal: {
      type: "sidebar",
      size: "medium"
    }
  }
);
class pv extends re {
  async execute() {
    const e = await this.getContext(q);
    if (!e) throw new Error("Modal manager not found");
    await e.open(
      this,
      mv,
      {
        data: {
          unique: this.args.unique
        }
      }
    ).onSubmit().catch(() => {
    });
  }
}
const hv = [
  {
    type: "entityAction",
    kind: "default",
    alias: "Forms.EntityAction.Form.CopyWorkflows",
    name: "Copy Form Workflows Entity Action",
    weight: 75,
    api: pv,
    forEntityTypes: [oe],
    meta: {
      icon: "icon-documents",
      label: "Copy Workflows..."
    }
  },
  {
    type: "modal",
    alias: "Forms.Modal.FormCopyWorkflowsOptions",
    name: "Form Copy Workflows Options Modal",
    js: () => import("./form-copy-workflows-options-modal.element.js")
  }
], fv = [...hv], yv = new C(
  "Forms.Modal.FormDeleteConfirm",
  {
    modal: {
      type: "sidebar",
      size: "small"
    }
  }
);
class gv extends re {
  async execute() {
    const e = await this.getContext(q);
    if (!e) throw new Error("Modal manager not found");
    await e.open(
      this,
      yv,
      {
        data: {
          unique: this.args.unique
        }
      }
    ).onSubmit().catch(() => {
    });
  }
}
const vv = [
  {
    type: "entityAction",
    kind: "default",
    alias: "Forms.EntityAction.Form.Delete",
    name: "Delete Form Entity Action",
    weight: 50,
    api: gv,
    forEntityTypes: [oe],
    meta: {
      icon: "icon-delete",
      label: "Delete..."
    }
  },
  {
    type: "modal",
    alias: "Forms.Modal.FormDeleteConfirm",
    name: "Form Delete Confirm Modal",
    js: () => import("./form-delete-confirm-modal.element.js")
  }
], _v = [...vv], Sv = new C(
  "Forms.Modal.FolderDeleteConfirm",
  {
    modal: {
      type: "sidebar",
      size: "small"
    }
  }
);
class bv extends re {
  async execute() {
    const e = await this.getContext(q);
    if (!e) throw new Error("Modal manager not found");
    await e.open(
      this,
      Sv,
      {
        data: {
          unique: this.args.unique
        }
      }
    ).onSubmit().catch(() => {
    });
  }
}
const Fv = [
  {
    type: "entityAction",
    kind: "default",
    alias: "Forms.EntityAction.Folder.Delete",
    name: "Delete Folder Entity Action",
    weight: 50,
    api: bv,
    forEntityTypes: [ue],
    meta: {
      icon: "icon-delete",
      label: "Delete..."
    }
  },
  {
    type: "modal",
    alias: "Forms.Modal.FolderDeleteConfirm",
    name: "Folder Delete Confirm Modal",
    js: () => import("./folder-delete-confirm-modal.element.js")
  }
], wv = [...Fv], Ev = new C(
  "Forms.Modal.FormMoveOptions",
  {
    modal: {
      type: "sidebar",
      size: "small"
    }
  }
);
class $v extends re {
  async execute() {
    const e = await this.getContext(q);
    if (!e) throw new Error("Modal manager not found");
    await e.open(
      this,
      Ev,
      {
        data: {
          unique: this.args.unique
        }
      }
    ).onSubmit().catch(() => {
    });
  }
}
const Cv = [
  {
    type: "entityAction",
    kind: "default",
    alias: "Forms.EntityAction.Form.Move",
    name: "Copy Form Entity Action",
    weight: 90,
    api: $v,
    forEntityTypes: [oe],
    meta: {
      icon: "icon-enter",
      label: "Move..."
    }
  },
  {
    type: "modal",
    alias: "Forms.Modal.FormMoveOptions",
    name: "Form Move Options Modal",
    js: () => import("./form-move-options-modal.element.js")
  }
], Tv = [...Cv], Ov = new C(
  "Forms.Modal.FolderMoveOptions",
  {
    modal: {
      type: "sidebar",
      size: "small"
    }
  }
);
class Pv extends re {
  async execute() {
    const e = await this.getContext(q);
    if (!e) throw new Error("Modal manager not found");
    await e.open(
      this,
      Ov,
      {
        data: {
          unique: this.args.unique
        }
      }
    ).onSubmit().catch(() => {
    });
  }
}
const xv = [
  {
    type: "entityAction",
    kind: "default",
    alias: "Forms.EntityAction.Folder.Move",
    name: "Copy Form Entity Action",
    weight: 90,
    api: Pv,
    forEntityTypes: [ue],
    meta: {
      icon: "icon-enter",
      label: "Move..."
    }
  },
  {
    type: "modal",
    alias: "Forms.Modal.FolderMoveOptions",
    name: "Folder Move Options Modal",
    js: () => import("./folder-move-options-modal.element.js")
  }
], Mv = [...xv], kv = new C("Forms.Modal.ExportForm", {
  modal: {
    type: "sidebar",
    size: "small"
  }
});
class Av extends re {
  async execute() {
    const e = await this.getContext(q);
    if (!e) throw new Error("Modal manager not found");
    await e.open(this, kv, {
      data: {
        unique: this.args.unique
      }
    }).onSubmit().catch(() => {
    });
  }
}
const Dv = [
  {
    type: "entityAction",
    kind: "default",
    alias: "Forms.EntityAction.Form.Export",
    name: "Export Form Entity Action",
    weight: 60,
    api: Av,
    forEntityTypes: [oe],
    meta: {
      icon: "icon-download-alt",
      label: "Export Form Definition"
    }
  },
  {
    type: "modal",
    alias: "Forms.Modal.ExportForm",
    name: "Export Form Modal",
    js: () => import("./form-export-modal.element.js")
  }
], Rv = [...Dv], Iv = new C("Forms.Modal.ImportForm", {
  modal: {
    type: "sidebar",
    size: "small"
  }
});
class Uv extends re {
  async execute() {
    const e = await this.getContext(q);
    if (!e) throw new Error("Modal manager not found");
    await e.open(this, Iv, {
      data: {
        unique: this.args.unique
      }
    }).onSubmit().catch(() => {
    });
  }
}
const zv = [
  {
    type: "entityAction",
    kind: "default",
    alias: "Forms.EntityAction.Form.Import",
    name: "Import Form Entity Action",
    weight: 70,
    api: Uv,
    forEntityTypes: [
      dr,
      ue
    ],
    meta: {
      icon: "icon-page-up",
      label: "Import Form Definition"
    }
  },
  {
    type: "modal",
    alias: "Forms.Modal.ImportForm",
    name: "Import Form Modal",
    js: () => import("./form-import-modal.element.js")
  }
], Wv = [...zv], Lv = [
  {
    type: "entityAction",
    kind: "reloadTreeItemChildren",
    alias: "Forms.EntityAction.Folder.ReloadChildrenOf",
    name: "Reload Children",
    forEntityTypes: [
      ue,
      dr
    ]
  },
  {
    type: "entityAction",
    kind: "folderUpdate",
    alias: "Forms.EntityAction.Folder.Rename",
    name: "Rename Folder",
    weight: 95,
    forEntityTypes: [ue],
    meta: {
      folderRepositoryAlias: nu
    }
  }
], Vv = [
  ...Lv,
  ...nv,
  ...dv,
  ...fv,
  ..._v,
  ...wv,
  ...Tv,
  ...Mv,
  ...Rv,
  ...Wv
], Nv = [
  {
    type: "formsFieldPreview",
    alias: "Forms.FieldPreview.TextBox",
    name: "Text Box Field Preview",
    element: () => Promise.resolve().then(() => jb)
  },
  {
    type: "formsFieldPreview",
    alias: "Forms.FieldPreview.TextArea",
    name: "Text Area Field Preview",
    element: () => Promise.resolve().then(() => Lb)
  },
  {
    type: "formsFieldPreview",
    alias: "Forms.FieldPreview.Checkbox",
    name: "Checkbox Field Preview",
    element: () => import("./checkbox-field-preview.element.js")
  },
  {
    type: "formsFieldPreview",
    alias: "Forms.FieldPreview.DataConsent",
    name: "Data Consent Field Preview",
    element: () => import("./dataconsent-field-preview.element.js")
  },
  {
    type: "formsFieldPreview",
    alias: "Forms.FieldPreview.DatePicker",
    name: "Date Picker Field Preview",
    element: () => import("./datepicker-field-preview.element.js")
  },
  {
    type: "formsFieldPreview",
    alias: "Forms.FieldPreview.Dropdown",
    name: "Dropdown Field Preview",
    element: () => import("./dropdown-field-preview.element.js")
  },
  {
    type: "formsFieldPreview",
    alias: "Forms.FieldPreview.FileUpload",
    name: "File Upload Field Preview",
    element: () => import("./fileupload-field-preview.element.js")
  },
  {
    type: "formsFieldPreview",
    alias: "Forms.FieldPreview.HiddenField",
    name: "Hidden Field Preview",
    element: () => import("./hidden-field-preview.element.js")
  },
  {
    type: "formsFieldPreview",
    alias: "Forms.FieldPreview.PasswordField",
    name: "Password Field Preview",
    element: () => import("./password-field-preview.element.js")
  },
  {
    type: "formsFieldPreview",
    alias: "Forms.FieldPreview.RadioButtonList",
    name: "Radio Button List Field Preview",
    element: () => import("./radiobuttonlist-field-preview.element.js")
  },
  {
    type: "formsFieldPreview",
    alias: "Forms.FieldPreview.CheckboxList",
    name: "Checkbox List Field Preview",
    element: () => import("./checkboxlist-field-preview.element.js")
  },
  {
    type: "formsFieldPreview",
    alias: "Forms.FieldPreview.RecaptchaV2",
    name: "Recaptcha V2 Field Preview",
    element: () => import("./recaptchav2-field-preview.element.js")
  },
  {
    type: "formsFieldPreview",
    alias: "Forms.FieldPreview.RecaptchaV3",
    name: "Recaptcha V3 Field Preview",
    element: () => import("./recaptchav3-field-preview.element.js")
  },
  {
    type: "formsFieldPreview",
    alias: "Forms.FieldPreview.TitleAndDescription",
    name: "Title And Description Field Preview",
    element: () => import("./titleanddescription-field-preview.element.js")
  },
  {
    type: "formsFieldPreview",
    alias: "Forms.FieldPreview.Richtext",
    name: "Richtext Field Preview",
    element: () => import("./richtext-field-preview.element.js")
  }
], qv = [
  ...Ng,
  ...iv
];
var Jt, _t;
class Bv extends _n {
  constructor(r) {
    super(r);
    h(this, Jt);
    h(this, _t);
    y(this, Jt, r);
  }
  async getCollection(r) {
    var k;
    const a = await this.getContext(De);
    if (!a) throw new Error("Form workspace context not found");
    if (y(this, _t, await xo(
      a.unique.pipe(Om((O) => !!O))
    )), !c(this, _t))
      return {
        data: {
          total: 0,
          items: []
        }
      };
    if (location.href.includes(
      `modal/${Um(xh.toString())}`
    )) {
      const O = location.href.split("/").pop(), z = ((k = await d(
        this,
        Je.getFormByFormIdRecordPageNumber({
          path: {
            formId: c(this, _t)
          },
          query: {
            recordId: O,
            skip: 0,
            take: r.take,
            sortBy: "created",
            sortOrder: Rn.DESCENDING
          }
        })
      )) == null ? void 0 : k.data) ?? 1;
      r = {
        ...r,
        skip: (z - 1) * r.take
      };
      const Q = await this.getContext(
        Fa
      );
      Q == null || Q.pagination.setCurrentPageNumber(z);
    }
    const { data: i, error: o } = await d(
      c(this, Jt),
      Je.getFormByFormIdRecord({
        path: {
          formId: c(this, _t)
        },
        query: {
          ...r
        }
      })
    );
    if (o)
      return { error: o };
    const { schema: s, results: l, totalNumberOfResults: g } = i, S = l.map(
      (O) => {
        var Q, _;
        return {
          unique: O.uniqueId,
          entityType: Za,
          id: O.id,
          created: new Date(O.created),
          updated: new Date(O.updated),
          state: O.state,
          pageName: (Q = O.umbracoPage) == null ? void 0 : Q.name,
          documentUnique: (_ = O.umbracoPage) == null ? void 0 : _.unique,
          fields: O.fields,
          member: O.member
        };
      }
    );
    return S.unshift({
      entityType: Za,
      schema: s,
      unique: "",
      fields: [],
      id: 0,
      created: /* @__PURE__ */ new Date(),
      updated: /* @__PURE__ */ new Date(),
      state: "",
      pageName: "",
      documentUnique: ""
    }), {
      data: {
        items: S,
        total: g
      }
    };
  }
  async execute(r, a, i) {
    return await d(
      c(this, Jt),
      Je.postFormByFormIdRecordActionsByActionIdExecute({
        path: { formId: r, actionId: i },
        body: { recordKeys: a }
      })
    );
  }
}
Jt = new WeakMap(), _t = new WeakMap();
var Qt;
class no {
  constructor(e) {
    h(this, Qt);
    y(this, Qt, new Bv(e));
  }
  async requestCollection(e = {
    skip: 0,
    take: 10,
    formId: ""
  }) {
    return e.sortBy || (e = {
      ...e,
      sortBy: "created",
      sortOrder: Rn.DESCENDING
    }), c(this, Qt).getCollection(e);
  }
  async execute(e, r, a) {
    return c(this, Qt).execute(e, r, a);
  }
  destroy() {
  }
}
Qt = new WeakMap();
const jv = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  FormsFormEntryCollectionRepository: no,
  default: no
}, Symbol.toStringTag, { value: "Module" }));
var Zt;
class Yv {
  constructor(e) {
    h(this, Zt);
    y(this, Zt, e);
  }
  async getCollection(e) {
    const { data: r, error: a } = await d(
      c(this, Zt),
      Je.getFormByFormIdRecordByRecordIdWorkflowAuditTrail({
        path: e
      })
    );
    if (a)
      return { error: a };
    const i = r.map(
      (o) => ({
        entityType: "forms-record-workflow-audit-entry",
        unique: o.id.toString(),
        workflowKey: o.workflowKey,
        name: o.name,
        typeName: o.typeName,
        executedOn: new Date(o.executedOn),
        executionStage: o.executionStage,
        result: o.result
      })
    );
    return { data: { items: i, total: i.length } };
  }
  async executeWorkflow(e, r, a) {
    await d(
      c(this, Zt),
      Je.postFormByFormIdRecordByRecordIdWorkflowByWorkflowIdRetry({
        path: {
          formId: e,
          recordId: r,
          workflowId: a
        }
      })
    );
  }
}
Zt = new WeakMap();
var er;
class Zs {
  constructor(e) {
    h(this, er);
    y(this, er, new Yv(e));
  }
  async requestCollection(e = {
    formId: "",
    recordId: ""
  }) {
    return c(this, er).getCollection(e);
  }
  async executeWorkflow(e, r, a) {
    await c(this, er).executeWorkflow(e, r, a);
  }
  destroy() {
  }
}
er = new WeakMap();
const Gv = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  FormsFormEntryWorkflowAuditCollectionRepository: Zs,
  default: Zs
}, Symbol.toStringTag, { value: "Module" }));
var Kr;
class Hv {
  constructor(e) {
    h(this, Kr);
    y(this, Kr, e);
  }
  async getCollection(e) {
    const { data: r, error: a } = await d(
      c(this, Kr),
      Je.getFormByFormIdRecordByRecordIdAuditTrail({ path: e })
    );
    if (a)
      return { error: a };
    const i = r.map(
      (o) => ({
        entityType: "forms-record-audit-entry",
        unique: o.id.toString(),
        updatedBy: o.updatedBy,
        updatedOn: new Date(o.updatedOn)
      })
    );
    return {
      data: {
        items: i,
        total: i.length
      }
    };
  }
}
Kr = new WeakMap();
var Xr;
class en {
  constructor(e) {
    h(this, Xr);
    y(this, Xr, new Hv(e));
  }
  async requestCollection(e = {
    formId: "",
    recordId: ""
  }) {
    return c(this, Xr).getCollection(e);
  }
  destroy() {
  }
}
Xr = new WeakMap();
const Kv = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  FormsFormEntryRecordAuditCollectionRepository: en,
  default: en
}, Symbol.toStringTag, { value: "Module" })), mu = "Forms.Repository.Entry.Collection", Xv = "Forms.Repository.EntryWorkflowAudit.Collection", Jv = "Forms.Repository.EntryRecordAudit.Collection", Qv = [
  {
    type: "repository",
    alias: mu,
    name: "Entry Collection Repository",
    api: () => Promise.resolve().then(() => jv)
  },
  {
    type: "repository",
    alias: Xv,
    name: "Entry Workflow Audit Collection Repository",
    api: () => Promise.resolve().then(() => Gv)
  },
  {
    type: "repository",
    alias: Jv,
    name: "Entry Record Audit Collection Repository",
    api: () => Promise.resolve().then(() => Kv)
  }
], Zv = [...Qv], pu = "Forms.CollectionView.Entry.Table", e_ = {
  type: "collectionView",
  alias: pu,
  name: "Form Entries Table Collection View",
  js: () => import("./form-entry-table-collection-view.element.js"),
  meta: {
    label: "Table",
    icon: "icon-list",
    pathName: "table"
  },
  conditions: [
    {
      alias: Mo,
      match: "Forms.Collection.Entry"
    }
  ]
}, t_ = [e_];
class r_ extends _n {
  async execute() {
    const e = await this.getContext(q);
    if (!e) throw new Error("Modal manager not found");
    const r = await this.getContext(
      De
    );
    if (!r) throw new Error("Form workspace context not found");
    await e.open(this, kh, {
      data: {
        unique: r.getUnique()
      }
    }).onSubmit().catch(() => {
    });
  }
}
const i_ = {
  type: "collectionAction",
  kind: "button",
  name: "Export Records Collection Action",
  alias: "Forms.CollectionAction.Records.Export",
  api: r_,
  weight: 200,
  meta: {
    label: "Export"
  },
  conditions: [
    {
      alias: Mo,
      match: "Forms.Collection.Entry"
    }
  ]
}, a_ = [i_];
var Jr, lo;
class o_ extends zm {
  constructor(r) {
    super(r, pu);
    h(this, Jr);
  }
  oneMonthAgo() {
    const r = /* @__PURE__ */ new Date(), a = new Date(r.setMonth(r.getMonth() - 1));
    return F(this, Jr, lo).call(this, a);
  }
  today() {
    return F(this, Jr, lo).call(this, /* @__PURE__ */ new Date());
  }
}
Jr = new WeakSet(), lo = function(r) {
  const a = String(r.getDate()).padStart(2, "0"), i = String(r.getMonth() + 1).padStart(2, "0");
  return r.getFullYear() + "-" + i + "-" + a;
};
const hu = "Forms.Collection.Entry", s_ = {
  type: "collection",
  alias: hu,
  name: "Form Entries Collection",
  api: o_,
  element: () => import("./form-entry-collection.element.js"),
  meta: {
    repositoryAlias: mu
  }
}, n_ = [
  s_,
  ...t_,
  ...Zv,
  ...a_
];
var Qr, Zr, ei;
class rs extends Lm {
  constructor(r, a, i) {
    super(r, a);
    h(this, Qr);
    h(this, Zr);
    h(this, ei, "");
    this.consumeContext(De, async (o) => {
      y(this, Qr, o);
    }), this.consumeContext(Wm, (o) => {
      y(this, Zr, o);
    }), y(this, ei, i);
  }
  async execute() {
    await new no(this._host).execute(
      c(this, Qr).getUnique(),
      this.selection,
      c(this, ei)
    ), c(this, Zr).requestCollection();
  }
}
Qr = new WeakMap(), Zr = new WeakMap(), ei = new WeakMap();
const l_ = "cb126b70-9011-11df-a4ee-0800200c9a66";
class c_ extends rs {
  constructor(e, r) {
    super(e, r, l_);
  }
}
const u_ = "cb126b79-9011-11df-a4ee-0800200c9a66";
class d_ extends rs {
  constructor(e, r) {
    super(e, r, u_);
  }
}
const m_ = "84cd75a7-d3d9-4551-9c1a-3f478b4ec9ed";
class p_ extends rs {
  constructor(e, r) {
    super(e, r, m_);
  }
}
const h_ = [
  {
    name: "Approve",
    weight: 100,
    api: d_,
    conditions: [
      {
        alias: so,
        match: (t) => t.manualApproval
      }
    ]
  },
  {
    name: "Reject",
    weight: 90,
    api: p_,
    conditions: [
      {
        alias: so,
        match: (t) => t.manualApproval
      }
    ]
  },
  {
    name: "Delete",
    weight: 10,
    api: c_,
    conditions: [
      {
        alias: ce,
        match: (t) => t.userSecurity.deleteEntries
      }
    ]
  }
], f_ = h_.map(
  (t) => ({
    type: "entityBulkAction",
    alias: `Forms.EntityBulkAction.Entry.${t.name}`,
    name: `${t.name} Form Entry Bulk Action`,
    weight: t.weight,
    api: t.api,
    meta: {
      label: t.name
    },
    forEntityTypes: [Za],
    conditions: [
      {
        alias: Mo,
        match: hu
      },
      ...t.conditions ?? []
    ]
  })
), y_ = [...f_], Le = "Forms.Workspace.Form", g_ = {
  type: "workspace",
  kind: "routable",
  alias: Le,
  name: "Form Workspace",
  api: () => import("./form-workspace.context.js"),
  meta: {
    entityType: oe
  }
}, v_ = [
  {
    type: "workspaceView",
    alias: "Forms.WorkspaceView.Form.Design",
    name: "Form Workspace Design View",
    element: () => import("./workspace-view-form-design.element.js"),
    weight: 50,
    meta: {
      label: "Design",
      pathname: "design",
      icon: "document"
    },
    conditions: [
      {
        alias: "Umb.Condition.WorkspaceAlias",
        match: Le
      },
      {
        alias: ce,
        match: (t) => t.userSecurity.manageForms
      }
    ]
  },
  {
    type: "workspaceView",
    alias: "Forms.WorkspaceView.Form.Settings",
    name: "Form Workspace Settings View",
    element: () => import("./workspace-view-form-settings.element.js"),
    weight: 40,
    meta: {
      label: "Settings",
      pathname: "settings",
      icon: "settings"
    },
    conditions: [
      {
        alias: "Umb.Condition.WorkspaceAlias",
        match: Le
      },
      {
        alias: ce,
        match: (t) => t.userSecurity.manageForms
      }
    ]
  },
  {
    type: "workspaceView",
    alias: "Forms.WorkspaceView.Form.Advanced",
    name: "Form Workspace Advanced View",
    element: () => import("./workspace-view-form-advanced.element.js"),
    weight: 30,
    meta: {
      label: "Advanced",
      pathname: "advanced",
      icon: "code"
    },
    conditions: [
      {
        alias: "Umb.Condition.WorkspaceAlias",
        match: Le
      },
      {
        alias: ce,
        match: (t) => t.userSecurity.manageForms
      },
      {
        alias: Ao,
        match: (t) => t.enableAdvancedValidationRules
      }
      // This is necessary as ConditionType is defined in core, and we don't have the ability to extend it.
    ]
  },
  {
    type: "workspaceView",
    alias: "Forms.WorkspaceView.Form.Entries",
    name: "Form Workspace Entries View",
    element: () => import("./workspace-view-form-entries.element.js"),
    weight: 20,
    meta: {
      label: "Entries",
      pathname: "entries",
      icon: "icon-categories"
    },
    conditions: [
      {
        alias: "Umb.Condition.WorkspaceAlias",
        match: Le
      },
      {
        alias: ce,
        match: (t) => t.userSecurity.viewEntries
      }
    ]
  },
  {
    type: "workspaceView",
    alias: "Forms.WorkspaceView.Form.Info",
    name: "Form Workspace Info View",
    element: () => import("./workspace-view-form-info.element.js"),
    weight: 10,
    meta: {
      label: "Info",
      pathname: "info",
      icon: "info"
    },
    conditions: [
      {
        alias: "Umb.Condition.WorkspaceAlias",
        match: Le
      }
    ]
  }
], __ = [
  {
    type: "workspaceAction",
    kind: "default",
    alias: "Forms.WorkspaceAction.Form.Save",
    name: "Save Form Workspace Action",
    weight: 80,
    api: Tr,
    meta: {
      label: "#buttons_save",
      look: "primary",
      color: "positive"
    },
    conditions: [
      {
        alias: "Umb.Condition.WorkspaceAlias",
        match: Le
      }
    ]
  },
  {
    type: "workspaceAction",
    kind: "default",
    alias: "Forms.WorkspaceAction.Form.SaveAndPreview",
    name: "Save And Preview Form Workspace Action",
    weight: 90,
    api: () => import("./save-and-preview.action.js"),
    meta: {
      label: "#buttons_saveAndPreview"
    },
    conditions: [
      {
        alias: "Umb.Condition.WorkspaceAlias",
        match: Le
      }
    ]
  }
], S_ = [
  g_,
  ...v_,
  ...__,
  ...y_
], b_ = [...n_], F_ = [
  ...xg,
  ...Vv,
  ...Nv,
  ...Fh,
  ...qv,
  ...S_,
  ...b_
], pr = "forms-prevalue", di = "forms-prevalue-root";
class w_ extends ua {
  constructor(e) {
    super(e, {
      getRootItems: fu,
      getChildrenOf: E_,
      getAncestorsOf: $_,
      mapper: C_
    });
  }
}
const fu = () => (
  // eslint-disable-next-line local-rules/no-direct-api-import
  mt.getTreePrevalueSourceRoot()
), E_ = (t) => {
  if (t.parent.unique === null)
    return fu();
  throw new Error("Not supported for the data source tree");
}, $_ = () => {
  throw new Error("Not supported for the data source tree");
}, C_ = (t) => ({
  unique: t.id,
  parent: {
    unique: null,
    entityType: di
  },
  name: t.name,
  entityType: pr,
  isFolder: t.isFolder,
  hasChildren: t.hasChildren
});
class T_ extends da {
  constructor(e) {
    super(e, yu.contextAlias);
  }
}
const yu = new L(
  "FormsPrevalueSourceTreeStore"
);
class O_ extends ma {
  constructor(e) {
    super(
      e,
      w_,
      yu
    );
  }
  async requestTreeRoot() {
    const { data: e } = await this._treeSource.getRootItems({
      skip: 0,
      take: 0
    }), r = e ? e.total > 0 : !1;
    return { data: {
      unique: null,
      entityType: di,
      name: "Prevalue Sources",
      hasChildren: r,
      isFolder: !0
    } };
  }
}
const P_ = {
  type: "menuItem",
  kind: "tree",
  alias: "Forms.MenuItem.PrevalueSource",
  name: "Forms Prevalue Source Menu Item",
  weight: 200,
  meta: {
    label: "Prevalue Sources",
    entityType: pr,
    treeAlias: "Forms.Tree.PrevalueSources",
    menus: [Ot]
  }
}, x_ = [P_], gu = "Forms.Repository.PrevalueSources.Tree", M_ = "Forms.Store.PrevalueSources.Tree", k_ = "Forms.Tree.PrevalueSources", A_ = {
  type: "repository",
  alias: gu,
  name: "Prevalue Source Tree Repository",
  api: O_
}, D_ = {
  type: "treeStore",
  alias: M_,
  name: "Prevalue Source Tree Store",
  api: T_
}, R_ = {
  type: "tree",
  kind: "default",
  alias: k_,
  name: "Prevalue Source Tree",
  meta: {
    repositoryAlias: gu
  },
  conditions: [
    {
      alias: ce,
      match: (t) => t.userSecurity.managePreValueSources
    }
  ]
}, I_ = {
  type: "treeItem",
  kind: "default",
  alias: "Forms.TreeItem.PrevalueSource",
  name: "Prevalue Source Tree Item",
  forEntityTypes: [
    di,
    pr
  ]
}, U_ = [
  A_,
  D_,
  R_,
  I_,
  ...x_
], z_ = "Forms.Repository.PrevalueSourceCollection", W_ = {
  type: "repository",
  alias: z_,
  name: "Prevalue Source Collection Repository",
  api: () => import("./prevaluesource-collection.repository.js")
}, L_ = [W_];
class V_ extends Fe {
  constructor(e) {
    super(e, vu.contextAlias);
  }
}
const vu = new L(
  "PrevalueSourceDetailStore"
);
var je;
class N_ {
  constructor(e) {
    h(this, je);
    y(this, je, e);
  }
  /**
   * Creates a new prevalue source scaffold
   * @param {(string | null)} parentUnique
   * @return { FieldPreValueSource }
   * @memberof FormsPrevalueSourceDetailServerDataSource
   */
  async createScaffold() {
    return { data: {
      entityType: pr,
      unique: K.new(),
      id: K.new(),
      created: "",
      name: "",
      settings: {},
      fieldPreValueSourceTypeId: "",
      cachePrevaluesFor: "",
      updated: ""
    } };
  }
  /**
   * Fetches a prevalue source with the given id from the server
   * @param {string} unique
   * @return {FieldPreValueSource}
   * @memberof FormsPrevalueSourceDetailServerDataSource
   */
  async read(e) {
    if (!e) throw new Error("Unique is missing");
    const { data: r, error: a } = await d(
      c(this, je),
      mt.getPrevalueSourceById({ path: { id: e } })
    );
    return a ? { error: a } : { data: r };
  }
  /**
   * Inserts a new prevalue source on the server
   * @param {FormDetailModel} form
   * @return {*}
   * @memberof FormsPrevalueSourceDetailServerDataSource
   */
  async create(e) {
    if (!e) throw new Error("Prevalue source is missing");
    if (!e.unique)
      throw new Error("Prevalue source unique is missing");
    const { error: r } = await d(
      c(this, je),
      mt.postPrevalueSource({ body: e })
    );
    return r ? { error: r } : this.read(e.unique);
  }
  /**
   * Updates a prevalue source on the server
   * @param {FormDetailModel} Form
   * @return {*}
   * @memberof FormsPrevalueSourceDetailServerDataSource
   */
  async update(e) {
    if (!e.unique) throw new Error("Unique is missing");
    const { error: r } = await d(
      c(this, je),
      mt.putPrevalueSourceById({
        path: { id: e.id },
        body: e
      })
    );
    return r ? { error: r } : this.read(e.unique);
  }
  /**
   * Deletes a prevalue source on the server
   * @param {string} unique
   * @return {*}
   * @memberof FormsPrevalueSourceDetailServerDataSource
   */
  async delete(e) {
    if (!e) throw new Error("Unique is missing");
    return await d(
      c(this, je),
      mt.deletePrevalueSourceById({ path: { id: e } })
    );
  }
}
je = new WeakMap();
class _u extends we {
  constructor(e) {
    super(
      e,
      N_,
      vu
    );
  }
  async requestPrevalueSourceScaffold() {
    const { data: e, error: r } = await d(
      this._host,
      mt.getPrevalueSourceScaffold()
    );
    return r ? { error: r } : { data: e };
  }
  async requestPrevalues(e, r, a) {
    const { data: i, error: o } = await d(
      this._host,
      mt.getPrevalueSourceByIdValues({
        path: { id: e },
        query: { formId: r, fieldId: a }
      })
    );
    return o ? { error: o } : { data: i };
  }
}
const q_ = "Forms.Repository.PrevalueSource.Detail", B_ = "Forms.Store.PrevalueSource.Detail", j_ = {
  type: "repository",
  alias: q_,
  name: "Prevalue Source Detail Repository",
  api: _u
}, Y_ = {
  type: "store",
  alias: B_,
  name: "PRevalue Source Detail Store",
  api: V_
}, G_ = [j_, Y_], H_ = [...L_, ...G_], K_ = new C(
  "Forms.Modal.PrevalueSourceCreateOptions",
  {
    modal: {
      type: "sidebar",
      size: "small"
    }
  }
);
class X_ extends re {
  async execute() {
    const e = await this.getContext(q);
    if (!e) throw new Error("Modal manager not found");
    await e.open(
      this,
      K_,
      {
        data: {}
      }
    ).onSubmit().catch(() => {
    });
  }
}
const J_ = [
  {
    type: "entityAction",
    kind: "default",
    alias: "Forms.EntityAction.PrevalueSource.Create",
    name: "Create Prevalue Source Entity Action",
    weight: 1e3,
    api: X_,
    forEntityTypes: [di],
    meta: {
      icon: "icon-add",
      label: "Create..."
    }
  },
  {
    type: "modal",
    alias: "Forms.Modal.PrevalueSourceCreateOptions",
    name: "Prevalue Source Create Options Modal",
    js: () => import("./prevaluesource-create-options-modal.element.js")
  }
], Q_ = [...J_], Z_ = new C(
  "Forms.Modal.PrevalueSourceDeleteConfirm",
  {
    modal: {
      type: "sidebar",
      size: "small"
    }
  }
);
class eS extends re {
  async execute() {
    const e = await this.getContext(q);
    if (!e) throw new Error("Modal manager not found");
    await e.open(
      this,
      Z_,
      {
        data: {
          unique: this.args.unique
        }
      }
    ).onSubmit().catch(() => {
    });
  }
}
const tS = [
  {
    type: "entityAction",
    kind: "default",
    alias: "Forms.EntityAction.PrevalueSource.Delete",
    name: "Delete Form Entity Action",
    weight: 100,
    api: eS,
    forEntityTypes: [pr],
    meta: {
      icon: "icon-delete",
      label: "Delete..."
    }
  },
  {
    type: "modal",
    alias: "Forms.Modal.PrevalueSourceDeleteConfirm",
    name: "Prevalue Source Delete Confirm Modal",
    js: () => import("./prevaluesource-delete-confirm-modal.element.js")
  }
], rS = [...tS], iS = [
  {
    type: "entityAction",
    kind: "reloadTreeItemChildren",
    alias: "Forms.EntityAction.PrevalueSource.ReloadChildrenOf",
    name: "Reload Children",
    forEntityTypes: [di]
  }
], aS = [
  ...iS,
  ...Q_,
  ...rS
], Yi = "Forms.Workspace.PrevalueSource", oS = {
  type: "workspace",
  kind: "routable",
  alias: Yi,
  name: "Prevalue Source Workspace",
  api: () => import("./prevaluesource-workspace.context.js"),
  meta: {
    entityType: pr
  }
}, sS = [
  {
    type: "workspaceView",
    alias: "Forms.WorkspaceView.PrevalueSource.Design",
    name: "Form Workspace Design View",
    element: () => import("./workspace-view-prevaluesource-design.element.js"),
    weight: 90,
    meta: {
      label: "Design",
      pathname: "design",
      icon: "document"
    },
    conditions: [
      {
        alias: "Umb.Condition.WorkspaceAlias",
        match: Yi
      },
      {
        alias: ce,
        match: (t) => t.userSecurity.managePreValueSources
      }
    ]
  },
  {
    type: "workspaceView",
    alias: "Forms.WorkspaceView.PrevalueSource.Info",
    name: "Form Workspace Info View",
    element: () => import("./workspace-view-prevaluesource-info.element.js"),
    weight: 90,
    meta: {
      label: "Info",
      pathname: "info",
      icon: "info"
    },
    conditions: [
      {
        alias: "Umb.Condition.WorkspaceAlias",
        match: Yi
      },
      {
        alias: ce,
        match: (t) => t.userSecurity.managePreValueSources
      }
    ]
  }
], nS = [
  {
    type: "workspaceAction",
    kind: "default",
    alias: "Forms.WorkspaceAction.PrevalueSource.Save",
    name: "Save Prevalue Source Workspace Action",
    api: Tr,
    meta: {
      label: "Save",
      look: "primary",
      color: "positive"
    },
    conditions: [
      {
        alias: "Umb.Condition.WorkspaceAlias",
        match: Yi
      }
    ]
  }
], lS = [oS, ...sS, ...nS], cS = [
  ...U_,
  ...H_,
  ...aS,
  ...lS
], hr = "forms-security-user", mi = "forms-security-user-group", wa = "forms-security-user-folder", is = "forms-security-user-group-folder", as = "forms-security-root", uS = new C(
  "Forms.Modal.UserSecurityCreateOptions",
  {
    modal: {
      type: "sidebar",
      size: "small"
    }
  }
);
class dS extends re {
  async execute() {
    const e = await this.getContext(q);
    if (!e) throw new Error("Modal manager not found");
    await e.open(
      this,
      uS,
      {
        data: {}
      }
    ).onSubmit().catch(() => {
    });
  }
}
const mS = [
  {
    type: "entityAction",
    kind: "default",
    alias: "Forms.EntityAction.Security.User.Create",
    name: "Create User Security Record Entity Action",
    weight: 1e3,
    api: dS,
    forEntityTypes: [wa],
    meta: {
      icon: "icon-add",
      label: "Create..."
    }
  },
  {
    type: "modal",
    alias: "Forms.Modal.UserSecurityCreateOptions",
    name: "User Security Create Options Modal",
    js: () => import("./user-security-create-options-modal.element.js")
  }
], pS = [...mS], hS = new C(
  "Forms.Modal.UserSecurityDeleteConfirm",
  {
    modal: {
      type: "sidebar",
      size: "small"
    }
  }
);
class fS extends re {
  async execute() {
    const e = await this.getContext(q);
    if (!e) throw new Error("Modal manager not found");
    await e.open(
      this,
      hS,
      {
        data: {
          unique: this.args.unique
        }
      }
    ).onSubmit().catch(() => {
    });
  }
}
const yS = [
  {
    type: "entityAction",
    kind: "default",
    alias: "Forms.EntityAction.Security.User.Delete",
    name: "Delete Form Entity Action",
    weight: 100,
    api: fS,
    forEntityTypes: [hr],
    meta: {
      icon: "icon-delete",
      label: "Delete..."
    },
    conditions: [
      {
        alias: Ao,
        match: (t) => t.manageSecurityWithUserGroups
      }
      // This is necessary as ConditionType is defined in core, and we don't have the ability to extend it.
    ]
  },
  {
    type: "modal",
    alias: "Forms.Modal.UserSecurityDeleteConfirm",
    name: "User Security Delete Confirm Modal",
    js: () => import("./user-security-delete-confirm-modal.element.js")
  }
], gS = [...yS], vS = [
  {
    type: "entityAction",
    kind: "reloadTreeItemChildren",
    alias: "Forms.EntityAction.Security.ReloadChildrenOf",
    name: "Reload Children",
    forEntityTypes: [
      as,
      wa,
      is
    ]
  }
], _S = [
  ...vS,
  ...pS,
  ...gS
];
class SS extends Fe {
  constructor(e) {
    super(e, Su.contextAlias);
  }
}
const Su = new L(
  "FormsSecurityUserDetailStore"
);
var Ye;
class bS {
  constructor(e) {
    h(this, Ye);
    y(this, Ye, e);
  }
  async createScaffold(e = {}) {
    const r = e.unique ? e.unique : K.new();
    return { data: {
      entityType: hr,
      unique: r,
      name: "",
      key: r,
      userSecurity: {
        manageDataSources: !1,
        managePreValueSources: !1,
        manageWorkflows: !1,
        manageForms: !1,
        viewEntries: !1,
        editEntries: !1,
        deleteEntries: !1,
        user: ""
      },
      startFolderIds: [],
      formsSecurity: []
    } };
  }
  async read(e) {
    if (!e) throw new Error("Unique is missing");
    return await d(
      c(this, Ye),
      se.getSecurityUserByIdFormSecurity({ path: { id: e } })
    );
  }
  async create(e) {
    if (!e) throw new Error("Security item is missing");
    if (!e.unique) throw new Error("Security item unique is missing");
    const { error: r } = await d(
      c(this, Ye),
      se.postSecurityUserByIdFormSecurity({
        path: { id: e.unique },
        body: e
      })
    );
    return r ? { error: r } : this.read(e.unique);
  }
  async update(e) {
    if (!e.unique) throw new Error("Unique is missing");
    const { error: r } = await d(
      c(this, Ye),
      se.putSecurityUserByIdFormSecurity({
        path: { id: e.unique },
        body: e
      })
    );
    return r ? { error: r } : this.read(e.unique);
  }
  async delete(e) {
    if (!e) throw new Error("Unique is missing");
    return await d(
      c(this, Ye),
      se.deleteSecurityUserByIdFormSecurity({
        path: { id: e }
      })
    );
  }
}
Ye = new WeakMap();
class FS extends we {
  constructor(e) {
    super(
      e,
      bS,
      Su
    );
  }
  async requestUsersToAssign() {
    return await d(
      this,
      se.getSecurityUserUsersToAssign()
    );
  }
}
const wS = "Forms.Repository.Security.User.Detail", ES = "Forms.Store.Security.User.Detail", $S = {
  type: "repository",
  alias: wS,
  name: "Form User Source Detail Repository",
  api: FS
}, CS = {
  type: "store",
  alias: ES,
  name: "Form User Security Detail Store",
  api: SS
}, TS = [$S, CS];
class OS extends Fe {
  constructor(e) {
    super(e, bu.contextAlias);
  }
}
const bu = new L(
  "FormsSecurityUserGroupDetailStore"
);
var Ge;
class PS {
  constructor(e) {
    h(this, Ge);
    y(this, Ge, e);
  }
  async createScaffold() {
    return { data: {
      entityType: mi,
      unique: K.new(),
      name: "",
      key: "",
      userGroupSecurity: {
        manageDataSources: !1,
        managePreValueSources: !1,
        manageWorkflows: !1,
        manageForms: !1,
        viewEntries: !1,
        editEntries: !1,
        deleteEntries: !1,
        userGroupId: 0
      },
      startFolderIds: [],
      formsSecurity: []
    } };
  }
  async read(e) {
    if (!e) throw new Error("Unique is missing");
    return await d(
      c(this, Ge),
      se.getSecurityUserGroupByIdFormSecurity({
        path: { id: e }
      })
    );
  }
  async create(e) {
    if (!e) throw new Error("Security item is missing");
    if (!e.unique) throw new Error("Security item unique is missing");
    const { error: r } = await d(
      c(this, Ge),
      se.postSecurityUserGroupByIdFormSecurity({
        path: { id: e.unique },
        body: e
      })
    );
    return r ? { error: r } : this.read(e.unique);
  }
  async update(e) {
    if (!e.unique) throw new Error("Unique is missing");
    const { error: r } = await d(
      c(this, Ge),
      se.putSecurityUserGroupByIdFormSecurity({
        path: { id: e.unique },
        body: e
      })
    );
    return r ? { error: r } : this.read(e.unique);
  }
  async delete(e) {
    if (!e) throw new Error("Unique is missing");
    return await d(
      c(this, Ge),
      se.deleteSecurityUserGroupByIdFormSecurity({
        path: { id: e }
      })
    );
  }
}
Ge = new WeakMap();
class xS extends we {
  constructor(e) {
    super(
      e,
      PS,
      bu
    );
  }
}
const MS = "Forms.Repository.Security.UserGroup.Detail", kS = "Forms.Store.Security.UserGroup.Detail", AS = {
  type: "repository",
  alias: MS,
  name: "Form User Group Source Detail Repository",
  api: xS
}, DS = {
  type: "store",
  alias: kS,
  name: "Form User Group Security Detail Store",
  api: OS
}, RS = [AS, DS], IS = [...TS, ...RS];
class US extends ua {
  constructor(e) {
    super(e, {
      getRootItems: Fu,
      getChildrenOf: zS,
      getAncestorsOf: WS,
      mapper: LS
    });
  }
}
const Fu = () => (
  // eslint-disable-next-line local-rules/no-direct-api-import
  se.getTreeSecurityRoot()
), zS = (t) => t.parent.unique === null ? Fu() : (
  // eslint-disable-next-line local-rules/no-direct-api-import
  se.getTreeSecurityChildrenByParentId({
    path: { parentId: t.parent.unique }
  })
), WS = () => {
  throw new Error("Not supported for the security tree");
}, LS = (t) => {
  var e;
  return {
    unique: t.id,
    parent: { unique: ((e = t.parent) == null ? void 0 : e.id) || "", entityType: "" },
    name: t.name,
    entityType: t.isFolder ? t.id === "207c2294-970b-4e1f-82fd-ae8996ef171d" ? wa : is : t.isGroup ? mi : hr,
    isFolder: t.isFolder,
    hasChildren: t.hasChildren
  };
};
class VS extends da {
  constructor(e) {
    super(e, wu.contextAlias);
  }
}
const wu = new L("FormsSecurityTreeStore");
class NS extends ma {
  constructor(e) {
    super(
      e,
      US,
      wu
    );
  }
  async requestTreeRoot() {
    const { data: e } = await this._treeSource.getRootItems({
      skip: 0,
      take: 0
    }), r = e ? e.total > 0 : !1;
    return { data: {
      unique: null,
      entityType: as,
      name: "Security",
      hasChildren: r,
      isFolder: !0
    } };
  }
}
const qS = [
  {
    type: "menuItem",
    kind: "tree",
    alias: "Forms.MenuItem.UserSecurity",
    name: "Forms Security User Menu Item",
    weight: 200,
    meta: {
      label: "User Security",
      entityType: hr,
      treeAlias: "Forms.Tree.Security",
      menus: [Ot]
    }
  },
  {
    type: "menuItem",
    kind: "tree",
    alias: "Forms.MenuItem.UserGroupSecurity",
    name: "Forms Security User Group Menu Item",
    weight: 200,
    meta: {
      label: "User Group Security",
      entityType: mi,
      treeAlias: "Forms.Tree.GroupSecurity",
      menus: [Ot]
    }
  }
], BS = [...qS], Eu = "Forms.Repository.Security.Tree", jS = "Forms.Store.Security.Tree", YS = "Forms.Tree.Security", GS = {
  type: "repository",
  alias: Eu,
  name: "Forms Security Tree Repository",
  api: NS
}, HS = {
  type: "treeStore",
  alias: jS,
  name: "Forms Security Tree Store",
  api: VS
}, KS = {
  type: "tree",
  kind: "default",
  alias: YS,
  name: "Forms Security Tree",
  meta: {
    repositoryAlias: Eu
  },
  conditions: [
    {
      alias: "Umb.Condition.SectionUserPermission",
      match: "Umb.Section.Users"
    }
  ]
}, XS = {
  type: "treeItem",
  kind: "default",
  alias: "Forms.TreeItem.Security",
  name: "Forms Security Tree Item",
  forEntityTypes: [
    hr,
    mi,
    wa,
    is,
    as
  ]
}, JS = [
  GS,
  HS,
  KS,
  XS,
  ...BS
], os = "Forms.Workspace.Security.User", ss = "Forms.Workspace.Security.UserGroup", QS = [
  {
    type: "workspace",
    kind: "routable",
    alias: os,
    name: "Forms User Security Workspace",
    api: () => import("./security-user-workspace.context.js"),
    meta: {
      entityType: hr
    }
  },
  {
    type: "workspace",
    kind: "routable",
    alias: ss,
    name: "Forms User Group Security Workspace",
    api: () => import("./security-user-group-workspace.context.js"),
    meta: {
      entityType: mi
    }
  }
], ZS = [
  {
    type: "workspaceView",
    alias: "Forms.WorkspaceView.Security.User.Permissions",
    name: "Security Workspace User Permissions View",
    element: () => import("./workspace-view-security-user-permissions.element.js"),
    weight: 90,
    meta: {
      label: "Permissions",
      pathname: "permissions",
      icon: "user"
    },
    conditions: [
      {
        alias: "Umb.Condition.WorkspaceAlias",
        match: os
      }
      // TODO: user permissions for access to manage form security
    ]
  },
  {
    type: "workspaceView",
    alias: "Forms.WorkspaceView.Security.UserGroup.Permissions",
    name: "Security Workspace User Group Permissions View",
    element: () => import("./workspace-view-security-user-group-permissions.element.js"),
    weight: 90,
    meta: {
      label: "Permissions",
      pathname: "permissions",
      icon: "user"
    },
    conditions: [
      {
        alias: "Umb.Condition.WorkspaceAlias",
        match: ss
      }
      // TODO: user permissions for access to manage form security
    ]
  }
], eb = [
  {
    type: "workspaceAction",
    kind: "default",
    alias: "Forms.WorkspaceAction.Security.User.Save",
    name: "Save Security Workspace Action",
    api: Tr,
    meta: {
      label: "Save",
      look: "primary",
      color: "positive"
    },
    conditions: [
      {
        alias: "Umb.Condition.WorkspaceAlias",
        match: os
      }
    ]
  },
  {
    type: "workspaceAction",
    kind: "default",
    alias: "Forms.WorkspaceAction.Security.UserGroup.Save",
    name: "Save Security Workspace Action",
    api: Tr,
    meta: {
      label: "Save",
      look: "primary",
      color: "positive"
    },
    conditions: [
      {
        alias: "Umb.Condition.WorkspaceAlias",
        match: ss
      }
    ]
  }
], tb = [
  ...QS,
  ...ZS,
  ...eb
], rb = [
  ...kp,
  ..._S,
  ...IS,
  ...JS,
  ...tb
], ib = [
  {
    type: "dashboard",
    alias: "forms.dashboard",
    name: "Forms Dashboard",
    weight: 100,
    elementName: "forms-dashboard",
    js: () => import("./forms-dashboard.element.js"),
    meta: {
      label: "Forms",
      pathname: "forms"
    },
    conditions: [
      {
        alias: "Umb.Condition.SectionAlias",
        match: "Umb.Section.Forms"
      }
    ]
  }
], ab = [...ib], ob = [
  ...hy,
  ...yg,
  ...Tg,
  ...F_,
  ...cS,
  ...sp,
  ...rb,
  ...ab
], sb = [
  {
    type: "modal",
    alias: tl,
    name: "Forms Edit Page Modal",
    js: () => Promise.resolve().then(() => Ff)
  },
  {
    type: "modal",
    alias: rl,
    name: "Forms Edit Fieldset Modal",
    js: () => Promise.resolve().then(() => Of)
  },
  {
    type: "modal",
    alias: il,
    name: "Forms Edit Field Modal",
    js: () => Promise.resolve().then(() => Df)
  },
  {
    type: "modal",
    alias: Zn,
    name: "Forms Configure Workflow Modal",
    js: () => Promise.resolve().then(() => of)
  },
  {
    type: "modal",
    alias: el,
    name: "Forms Create Form From DataSource Modal",
    js: () => Promise.resolve().then(() => mf)
  },
  {
    type: "modal",
    alias: al,
    name: "Forms Edit Submit Message Modal",
    js: () => Promise.resolve().then(() => Vf)
  },
  {
    type: "modal",
    alias: sl,
    name: "Forms Edit Workflow Modal",
    js: () => import("./form-edit-workflow-modal.element.js")
  },
  {
    type: "modal",
    alias: Xn,
    name: "Forms Choose Field Type Modal",
    js: () => Promise.resolve().then(() => Wh)
  },
  {
    type: "modal",
    alias: Qn,
    name: "Forms Choose Workflow Type Modal",
    js: () => Promise.resolve().then(() => Hh)
  },
  {
    type: "modal",
    alias: ll,
    name: "Forms Entry Details Modal",
    js: () => import("./form-entry-details-modal.element.js")
  },
  {
    type: "modal",
    alias: cl,
    name: "Forms Export Entries Modal",
    js: () => Promise.resolve().then(() => ey)
  },
  {
    type: "modal",
    alias: ul,
    name: "Forms Preview Modal",
    js: () => Promise.resolve().then(() => ly)
  }
], nb = [...sb], lb = [
  {
    type: "propertyEditorUi",
    alias: "Forms.PropertyEditorUi.FormPicker.Single",
    name: "Single Form Picker Property Editor",
    js: () => import("./form-picker-single-property-editor.element.js"),
    meta: {
      label: "Form Picker (Single)",
      propertyEditorSchemaAlias: "UmbracoForms.FormPicker",
      icon: "icon-umb-contour",
      group: "forms"
    }
  },
  {
    type: "propertyEditorUi",
    alias: "Forms.PropertyEditorUi.FormPicker.Multiple",
    name: "Multiple Form Picker Property Editor",
    js: () => import("./form-picker-multiple-property-editor.element.js"),
    meta: {
      label: "Form Picker (Multiple)",
      propertyEditorSchemaAlias: "UmbracoForms.FormPicker",
      icon: "icon-umb-contour",
      group: "forms"
    }
  }
], cb = {
  type: "propertyEditorSchema",
  name: "Form Picker",
  alias: "UmbracoForms.FormPicker",
  meta: {
    defaultPropertyEditorUiAlias: "Forms.PropertyEditorUi.FormPicker.Single",
    settings: {
      properties: [
        {
          alias: "allowedFolders",
          label: "Allowed Folders",
          description: "Select the folders from which forms that can be chosen in the picker, or leave empty to allow all folders to be used.",
          propertyEditorUiAlias: "Forms.PropertyEditorUi.FolderPicker.Multiple"
        },
        {
          alias: "allowedForms",
          label: "Allowed Forms",
          description: "Select the individual forms that can be chosen in the picker, or leave empty to allow all forms to be used.",
          propertyEditorUiAlias: "Forms.PropertyEditorUi.FormPicker.Multiple"
        }
      ]
    }
  }
}, ub = {
  type: "propertyEditorUi",
  alias: "Forms.PropertyEditorUi.FormDetailsPicker",
  name: "Form Details Picker Property Editor",
  js: () => import("./form-details-picker-property-editor.element.js"),
  meta: {
    label: "Form Details Picker",
    propertyEditorSchemaAlias: "UmbracoForms.FormDetailsPicker",
    icon: "icon-umb-contour",
    group: "forms"
  }
}, db = {
  type: "propertyEditorSchema",
  name: "Form Details Picker",
  alias: "UmbracoForms.FormDetailsPicker",
  meta: {
    defaultPropertyEditorUiAlias: "Forms.PropertyEditorUi.FormDetailsPicker",
    settings: {
      properties: [
        {
          alias: "allowedFolders",
          label: "Allowed Folders",
          description: "Select the folders from which forms that can be chosen in the picker, or leave empty to allow all folders to be used.",
          propertyEditorUiAlias: "Forms.PropertyEditorUi.FolderPicker.Multiple"
        },
        {
          alias: "allowedForms",
          label: "Allowed Forms",
          description: "Select the individual forms that can be chosen in the picker, or leave empty to allow all forms to be used.",
          propertyEditorUiAlias: "Forms.PropertyEditorUi.FormPicker.Multiple"
        },
        {
          alias: "includeThemePicker",
          label: "Include Theme Picker",
          description: "Select whether to allow editors to select the theme for the form.",
          propertyEditorUiAlias: "Umb.PropertyEditorUi.Toggle"
        },
        {
          alias: "includeRedirectPicker",
          label: "Include Redirect Picker",
          description: "Select whether to allow editors to override the page to redirect to after the form is submitted.",
          propertyEditorUiAlias: "Umb.PropertyEditorUi.Toggle"
        }
      ]
    }
  }
}, mb = {
  type: "propertyEditorUi",
  alias: "Forms.PropertyEditorUi.FolderPicker.Multiple",
  name: "Multiple Folder Picker Property Editor",
  js: () => import("./folder-picker-multiple-property-editor.element.js"),
  meta: {
    label: "Folder Picker (Multiple)",
    propertyEditorSchemaAlias: "UmbracoForms.FolderPicker",
    icon: "icon-umb-contour",
    group: "forms"
  }
}, pb = {
  type: "propertyEditorUi",
  alias: "Forms.PropertyEditorUi.ThemePicker",
  name: "Theme Picker Property Editor",
  js: () => import("./theme-picker-property-editor.element.js"),
  meta: {
    label: "Theme Picker",
    propertyEditorSchemaAlias: "UmbracoForms.ThemePicker",
    icon: "icon-brush",
    group: "forms"
  }
}, hb = {
  type: "propertyEditorUi",
  alias: "Forms.PropertyEditorUi.DataTypePicker",
  name: "Forms Data Type Picker Property Editor",
  js: () => import("./data-type-picker-property-editor.element.js"),
  meta: {
    label: "Data Type Picker",
    icon: "icon-umb-contour",
    group: "forms"
  }
}, fb = {
  type: "propertyEditorUi",
  alias: "Forms.PropertyEditorUi.DatePicker.Relative",
  name: "Forms Relative Date Picker Property Editor",
  js: () => import("./date-picker-relative-property-editor.element.js"),
  meta: {
    label: "Relative Date Picker",
    icon: "icon-umb-contour",
    group: "forms"
  }
}, yb = {
  type: "propertyEditorUi",
  alias: "Forms.PropertyEditorUi.DocumentMapper",
  name: "Forms Document Mapper Property Editor",
  js: () => import("./document-mapper-property-editor.element.js"),
  meta: {
    label: "Document Mapper",
    icon: "icon-umb-contour",
    group: "forms"
  }
}, gb = {
  type: "propertyEditorUi",
  alias: "Forms.PropertyEditorUi.DocumentTypePicker",
  name: "Forms Document Type Picker Property Editor",
  js: () => import("./document-type-picker-property-editor.element.js"),
  meta: {
    label: "Document Type Picker",
    icon: "icon-umb-contour",
    group: "forms"
  }
}, vb = {
  type: "propertyEditorUi",
  alias: "Forms.PropertyEditorUi.DocumentTypeFieldPicker",
  name: "Forms Document Type Field Picker Property Editor",
  js: () => import("./document-type-field-picker-property-editor.element.js"),
  meta: {
    label: "Document Type Field Picker",
    icon: "icon-umb-contour",
    group: "forms"
  }
}, _b = {
  type: "propertyEditorUi",
  alias: "Forms.PropertyEditorUi.EmailTemplatePicker",
  name: "Forms Email Template Picker Property Editor",
  js: () => import("./email-template-picker-property-editor.element.js"),
  meta: {
    label: "Email Template Picker",
    icon: "icon-umb-contour",
    group: "forms"
  }
}, Sb = {
  type: "propertyEditorUi",
  alias: "Forms.PropertyEditorUi.FieldMapper",
  name: "Forms Field Mapper Property Editor",
  js: () => import("./field-mapper-property-editor.element.js"),
  meta: {
    label: "Field Mapper",
    icon: "icon-umb-contour",
    group: "forms"
  }
}, bb = {
  type: "propertyEditorUi",
  alias: "Forms.PropertyEditorUi.Password",
  name: "Forms Password Property Editor",
  js: () => import("./password-property-editor.element.js"),
  meta: {
    label: "Password",
    icon: "icon-umb-contour",
    group: "forms"
  }
}, Fb = {
  type: "propertyEditorUi",
  alias: "Forms.PropertyEditorUi.StandardFieldMapper",
  name: "Forms Standard Field Mapper Property Editor",
  js: () => import("./standard-field-mapper-property-editor.element.js"),
  meta: {
    label: "Standard Field Mapper",
    icon: "icon-umb-contour",
    group: "forms"
  }
}, wb = {
  type: "propertyEditorUi",
  alias: "Forms.PropertyEditorUi.TextWithFieldPicker",
  name: "Forms Text With Field Picker Property Editor",
  js: () => import("./text-with-field-picker-property-editor.element.js"),
  meta: {
    label: "Text with Field Picker",
    icon: "icon-umb-contour",
    group: "forms"
  }
}, Eb = [
  ...lb,
  cb,
  ub,
  db,
  mb,
  pb,
  hb,
  fb,
  yb,
  gb,
  vb,
  _b,
  Sb,
  bb,
  Fb,
  wb
], $b = {
  type: "globalContext",
  alias: "Forms.GlobalContext",
  name: "Umbraco Forms Global Context",
  api: () => Promise.resolve().then(() => Pp)
}, Cb = [$b], Tb = [
  {
    type: "ufmComponent",
    alias: "Forms.Markdown.FormName",
    name: "Form Name UFM Component",
    api: () => import("./form-name.component.js"),
    meta: { marker: "umbFormName:", alias: "umbFormName" }
  }
];
var Ob = Object.defineProperty, Pb = Object.getOwnPropertyDescriptor, $u = (t) => {
  throw TypeError(t);
}, ns = (t, e, r, a) => {
  for (var i = a > 1 ? void 0 : a ? Pb(e, r) : e, o = t.length - 1, s; o >= 0; o--)
    (s = t[o]) && (i = (a ? s(e, r, i) : s(i)) || i);
  return a && i && Ob(e, r, i), i;
}, ls = (t, e, r) => e.has(t) || $u("Cannot " + r), Gi = (t, e, r) => (ls(t, e, "read from private field"), e.get(t)), Ba = (t, e, r) => e.has(t) ? $u("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), xb = (t, e, r, a) => (ls(t, e, "write to private field"), e.set(t, r), r), Sr = (t, e, r) => (ls(t, e, "access private method"), r), ar, cs, ut, Cu, Tu, Ou, co;
const Mb = "form-grid";
let Dr = class extends st(Dt) {
  constructor() {
    super(...arguments), Ba(this, ut), Ba(this, ar, 10), Ba(this, cs, 10), this._forms = [];
  }
  async connectedCallback() {
    super.connectedCallback();
    const { data: t } = await d(this, ee.getForm());
    this._forms = t;
  }
  render() {
    return n`<div class="header">
        <h4>${this.localize.term("formsDashboard_yourForms")}</h4>
        ${Sr(this, ut, co).call(this)}
      </div>
      <uui-ref-list>
        ${this._forms.slice(0, Gi(this, ar) - 1).map(
      (t) => n`<ref-form
                .model=${t}
                .config=${this.config}
                @edit=${() => Sr(this, ut, Cu).call(this, t.id)}
                @view=${() => Sr(this, ut, Tu).call(this, t.id)}
              ></ref-form>`
    )}
      </uui-ref-list>
      <div class="footer">${Sr(this, ut, co).call(this)}</div>`;
  }
};
ar = /* @__PURE__ */ new WeakMap();
cs = /* @__PURE__ */ new WeakMap();
ut = /* @__PURE__ */ new WeakSet();
Cu = function(t) {
  history.pushState(
    {},
    "",
    `/umbraco/section/forms/workspace/${oe}/edit/${t}`
  );
};
Tu = function(t) {
  history.pushState(
    {},
    "",
    `/umbraco/section/forms/workspace/${oe}/edit/${t}/view/entries`
  );
};
Ou = function() {
  xb(this, ar, Gi(this, ar) + Gi(this, cs)), this.requestUpdate();
};
co = function() {
  if (!(this._forms.length <= Gi(this, ar)))
    return n` <uui-button
      @click=${Sr(this, ut, Ou)}
      .label=${this.localize.term("formsDashboard_showMore")}
    ></uui-button>`;
};
Dr.styles = [
  x`
      .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .footer {
        margin-top: 10px;
        width: 100%;
        text-align: right;
      }
    `
];
ns([
  m({ type: Object })
], Dr.prototype, "config", 2);
ns([
  b()
], Dr.prototype, "_forms", 2);
Dr = ns([
  f(Mb)
], Dr);
var kb = Object.defineProperty, Ab = Object.getOwnPropertyDescriptor, Pu = (t, e, r, a) => {
  for (var i = a > 1 ? void 0 : a ? Ab(e, r) : e, o = t.length - 1, s; o >= 0; o--)
    (s = t[o]) && (i = (a ? s(e, r, i) : s(i)) || i);
  return a && i && kb(e, r, i), i;
};
const Db = "forms-licensing";
let Hi = class extends st(
  Dt
) {
  render() {
    var t, e;
    return p(
      ((t = this.status) == null ? void 0 : t.isValid) == !1 || ((e = this.status) == null ? void 0 : e.isTrial),
      () => {
        var r, a;
        return n`
        <uui-box
          headline="${this.localize.term(
          ((r = this.status) == null ? void 0 : r.isValid) == !1 ? "formsDashboard_invalidLicense" : "formsDashboard_trialTitle"
        )}"
        >
          ${p(
          ((a = this.status) == null ? void 0 : a.isValid) == !1,
          () => {
            var i;
            return n`
              <div class="alert alert-error">
                ${this.localize.term("formsDashboard_invalidLicenseValidFor")}
                <pre>${(i = this.status) == null ? void 0 : i.licenseLimitations}</pre>
                ${this.localize.term("formsDashboard_reconfigure")}
              </div>
            `;
          }
        )}
          <p>${this.localize.term("formsDashboard_trialDescription")}</p>
          <uui-button
            look="primary"
            color="positive"
            href="https://umbra.co/43Rr7TT"
            target="_blank"
            .label=${this.localize.term("formsDashboard_buyLicense")}
          ></uui-button>
          <uui-button
            look="primary"
            color="default"
            href="https://docs.umbraco.com/umbraco-forms/installation/the-licensing-model#configuring-your-license"
            target="_blank"
            .label=${this.localize.term("formsDashboard_configureLicense")}
          ></uui-button>
        </uui-box>
      `;
      }
    );
  }
};
Hi.styles = [
  x`
      .alert {
        border-left: 4px solid;
        border-radius: var(--uui-border-radius);
        padding: var(--uui-size-3);
      }

      .alert-error {
        border-left-color: var(--uui-color-danger);
      }
    `
];
Pu([
  m({ type: Object })
], Hi.prototype, "status", 2);
Hi = Pu([
  f(Db)
], Hi);
var Rb = Object.defineProperty, xu = (t, e, r, a) => {
  for (var i = void 0, o = t.length - 1, s; o >= 0; o--)
    (s = t[o]) && (i = s(e, r, i) || i);
  return i && Rb(e, r, i), i;
};
class Ea extends Ee {
  constructor() {
    super(...arguments), this.prevalues = [], this.settings = {};
  }
  getSettingValue(e) {
    return this.settings[e];
  }
}
xu([
  m({ type: Array })
], Ea.prototype, "prevalues");
xu([
  m()
], Ea.prototype, "settings");
var Ib = Object.getOwnPropertyDescriptor, Ub = (t, e, r, a) => {
  for (var i = a > 1 ? void 0 : a ? Ib(e, r) : e, o = t.length - 1, s; o >= 0; o--)
    (s = t[o]) && (i = s(i) || i);
  return i;
};
const zb = "forms-field-preview-text-area";
let Ki = class extends Ea {
  render() {
    return n`<textarea
      rows="5"
      readonly
      disabled
      tabindex="-1"
      placeholder=${this.getSettingValue("Placeholder")}
    >
${this.getSettingValue("DefaultValue")}</textarea
    >`;
  }
};
Ki = Ub([
  f(zb)
], Ki);
const Wb = Ki, Lb = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get FormsFieldPreviewTextArea() {
    return Ki;
  },
  default: Wb
}, Symbol.toStringTag, { value: "Module" }));
var Vb = Object.getOwnPropertyDescriptor, Nb = (t, e, r, a) => {
  for (var i = a > 1 ? void 0 : a ? Vb(e, r) : e, o = t.length - 1, s; o >= 0; o--)
    (s = t[o]) && (i = s(i) || i);
  return i;
};
const qb = "forms-field-preview-text-box";
let Xi = class extends Ea {
  render() {
    return n`<input
      type="${this.getSettingValue("FieldType") || "text"}"
      readonly
      disabled
      tabindex="-1"
      placeholder="${this.getSettingValue("Placeholder")}"
      value="${this.getSettingValue("DefaultValue")}"
    />`;
  }
};
Xi = Nb([
  f(qb)
], Xi);
const Bb = Xi, jb = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get FormsFieldPreviewTextBox() {
    return Xi;
  },
  default: Bb
}, Symbol.toStringTag, { value: "Module" }));
var Yb = Object.defineProperty, Gb = (t, e, r, a) => {
  for (var i = void 0, o = t.length - 1, s; o >= 0; o--)
    (s = t[o]) && (i = s(e, r, i) || i);
  return i && Yb(e, r, i), i;
}, St, ca, Mu;
const Ms = class Ms extends st(
  Dt
) {
  constructor() {
    super();
    h(this, ca);
    h(this, St);
    this.consumeContext(De, (r) => {
      r && (y(this, St, r), F(this, ca, Mu).call(this));
    });
  }
  onObserveForm() {
  }
  getAllFieldsForForm() {
    var r;
    return (r = c(this, St)) == null ? void 0 : r.getAllFields();
  }
  setPropertyValue(r, a) {
    var i;
    (i = c(this, St)) == null || i.setFormProperty(r, a), this.dispatchEvent(new CustomEvent("valueChange"));
  }
};
St = new WeakMap(), ca = new WeakSet(), Mu = function() {
  this.observe(c(this, St).data, (r) => {
    r && (this.form = r, this.onObserveForm());
  });
}, Ms.styles = [
  x`
      .flex {
        display: flex;
        flex-direction: column;
      }

      .flex + .flex {
        margin-top: var(--uui-size-3);
      }

      .flex.gap {
        margin-top: var(--uui-size-5);
      }

      .flex + uui-toggle {
        display: block;
        margin-top: var(--uui-size-3);
      }
    `
];
let Ji = Ms;
Gb([
  b()
], Ji.prototype, "form");
var Hb = Object.defineProperty, Kb = Object.getOwnPropertyDescriptor, ku = (t) => {
  throw TypeError(t);
}, Au = (t, e, r, a) => {
  for (var i = a > 1 ? void 0 : a ? Kb(e, r) : e, o = t.length - 1, s; o >= 0; o--)
    (s = t[o]) && (i = (a ? s(e, r, i) : s(i)) || i);
  return a && i && Hb(e, r, i), i;
}, us = (t, e, r) => e.has(t) || ku("Cannot " + r), ja = (t, e, r) => (us(t, e, "read from private field"), e.get(t)), tn = (t, e, r) => e.has(t) ? ku("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), Xb = (t, e, r, a) => (us(t, e, "write to private field"), e.set(t, r), r), U = (t, e, r) => (us(t, e, "access private method"), r), Nt, M, Qi, $a, Ca, ds, ms, ps, Du, Ru, Iu, Uu, hs, zu;
const Jb = "forms-advanced-validation-rules";
let Zi = class extends Ji {
  constructor() {
    super(), tn(this, M), tn(this, Nt), this._editIndex = -1, this.consumeContext(ai, (t) => {
      Xb(this, Nt, t);
    });
  }
  render() {
    return n`<umb-property-layout
      alias="validationRules"
      .label=${this.localize.term("formAdvanced_validationRules")}
      .description=${this.localize.term(
      "formAdvanced_validationRulesDescription"
    )}
    >
      <div slot="editor">
        <div class="flex">
          <uui-table>
            <uui-table-head>
              <uui-table-head-cell>
                Rule
                <small
                  >${Cn(
      this.localize.term(
        "formAdvanced_validationRulesRuleDescription"
      )
    )}</small
                >
              </uui-table-head-cell>
              <uui-table-head-cell>
                Message
                <small
                  >${this.localize.term(
      "formAdvanced_validationRulesErrorMessageDescription"
    )}</small
                >
              </uui-table-head-cell>
              <uui-table-head-cell>
                Field
                <small
                  >${this.localize.term(
      "formAdvanced_validationRulesFieldDescription"
    )}</small
                >
              </uui-table-head-cell>
              <uui-table-head-cell> </uui-table-head-cell>
            </uui-table-head>
            ${this.form.validationRules.map(
      (t, e) => n` <uui-table-row>
                  <uui-table-cell
                    ><code>${U(this, M, hs).call(this, t.rule)}</code></uui-table-cell
                  >
                  <uui-table-cell>${t.errorMessage}</uui-table-cell>
                  <uui-table-cell
                    >${U(this, M, zu).call(this, t.fieldId)}</uui-table-cell
                  >
                  <uui-table-head-cell>
                    <uui-action-bar>
                      <uui-button
                        label="edit"
                        look="secondary"
                        color="default"
                        @click=${() => U(this, M, Du).call(this, e)}
                      >
                        <uui-icon name="edit"></uui-icon>
                      </uui-button>
                      <uui-button
                        label=${this.localize.term("general_delete")}
                        look="secondary"
                        color="default"
                        @click=${() => U(this, M, Uu).call(this, e)}
                      >
                        <uui-icon name="delete"></uui-icon>
                      </uui-button>
                    </uui-action-bar>
                  </uui-table-head-cell>
                </uui-table-row>`
    )}

            <uui-table-row>
              <uui-table-cell>
                <uui-textarea
                  id="rule"
                  rows="8"
                  class="json"
                  placeholder="${this.localize.term(
      "formAdvanced_validationRuleDefinition"
    )}"
                ></uui-textarea>
              </uui-table-cell>
              <uui-table-cell>
                <uui-textarea
                  id="errorMessage"
                  rows="8"
                  placeholder="${this.localize.term(
      "formAdvanced_validationRuleErrorMessage"
    )}"
                ></uui-textarea>
              </uui-table-cell>
              <uui-table-cell>
                <uui-select
                  id="fieldId"
                  .options=${this.getAllFieldsForForm().map((t) => ({
      name: this.localize.term(t.caption),
      value: t.id,
      selected: this._editIndex > -1 && t.id === this.form.validationRules[this._editIndex].fieldId
    }))}
                >
                </uui-select>
              </uui-table-cell>
              <uui-table-cell>
                <uui-action-bar>
                  <uui-button
                    label="add"
                    look="secondary"
                    color="default"
                    @click=${U(this, M, Ru)}
                  >
                    <uui-icon
                      .name=${U(this, M, Qi).call(this) ? "icon-save" : "add"}
                    ></uui-icon>
                  </uui-button>
                  ${p(
      U(this, M, Qi).call(this),
      () => n`<uui-button
                        label="add"
                        look="secondary"
                        color="default"
                        @click=${U(this, M, Iu)}
                        ><uui-icon name="wrong"></uui-icon
                      ></uui-button>`
    )}
                </uui-action-bar>
              </uui-table-cell>
            </uui-table-row>
          </uui-table>
        </div>
      </div>
    </umb-property-layout>`;
  }
};
Nt = /* @__PURE__ */ new WeakMap();
M = /* @__PURE__ */ new WeakSet();
Qi = function() {
  return this._editIndex > -1;
};
$a = function() {
  return U(this, M, ms).call(this, "rule");
};
Ca = function() {
  return U(this, M, ms).call(this, "errorMessage");
};
ds = function() {
  var t;
  return (t = this.shadowRoot) == null ? void 0 : t.getElementById("fieldId");
};
ms = function(t) {
  var e;
  return (e = this.shadowRoot) == null ? void 0 : e.getElementById(t);
};
ps = function() {
  U(this, M, $a).call(this).value = "", U(this, M, Ca).call(this).value = "", U(this, M, ds).call(this).value = "", this._editIndex = -1;
};
Du = function(t) {
  this._editIndex = t;
  const e = this.form.validationRules[this._editIndex];
  U(this, M, $a).call(this).value = U(this, M, hs).call(this, e.rule), U(this, M, Ca).call(this).value = e.errorMessage;
};
Ru = function() {
  var i, o, s;
  let t = U(this, M, $a).call(this).value.toString();
  const e = U(this, M, Ca).call(this).value.toString(), r = U(this, M, ds).call(this).value.toString();
  try {
    t = JSON.stringify(JSON.parse(t));
  } catch {
    const l = {
      data: {
        headline: this.localize.term(
          "formAdvanced_validationRulesErrorTitle"
        ),
        message: this.localize.term(
          "formAdvanced_validationRulesRuleErrorDescription"
        )
      }
    };
    (i = ja(this, Nt)) == null || i.peek("danger", l);
    return;
  }
  if (e.trim().length === 0) {
    const l = {
      data: {
        headline: this.localize.term(
          "formAdvanced_validationRulesErrorTitle"
        ),
        message: this.localize.term(
          "formAdvanced_validationRulesMessageErrorDescription"
        )
      }
    };
    (o = ja(this, Nt)) == null || o.peek("danger", l);
    return;
  }
  if (r.length === 0) {
    const l = {
      data: {
        headline: this.localize.term(
          "formAdvanced_validationRulesErrorTitle"
        ),
        message: this.localize.term(
          "formAdvanced_validationRulesFieldErrorDescription"
        )
      }
    };
    (s = ja(this, Nt)) == null || s.peek("danger", l);
    return;
  }
  const a = structuredClone(this.form.validationRules);
  U(this, M, Qi).call(this) ? (a[this._editIndex].rule = t, a[this._editIndex].errorMessage = e, a[this._editIndex].fieldId = r) : a.push({
    rule: t,
    errorMessage: e,
    fieldId: r
  }), this.setPropertyValue("validationRules", a), U(this, M, ps).call(this);
};
Iu = function() {
  U(this, M, ps).call(this);
};
Uu = async function(t) {
  await Po(this, {
    headline: this.localize.term("formAdvanced_deleteValidationRuleHeadline"),
    content: this.localize.term("formAdvanced_deleteValidationRuleMessage"),
    confirmLabel: this.localize.term("general_yes"),
    color: "danger"
  });
  const e = structuredClone(this.form.validationRules);
  e.splice(t, 1), this.setPropertyValue("validationRules", e);
};
hs = function(t) {
  const e = JSON.parse(t);
  return JSON.stringify(e, null, 2);
};
zu = function(t) {
  const e = this.getAllFieldsForForm().filter(
    (a) => a.id === t
  );
  if (e.length === 0)
    return "";
  const r = e[0];
  return r.caption + " (" + r.alias + ")";
};
Zi.styles = [
  x`
      uui-table-head-cell,
      uui-table-cell {
        vertical-align: top;
      }
      uui-table-head-cell small {
        display: block;
        font-weight: normal;
      }
      uui-table-cell code {
        background-color: var(--uui-color-surface-alt);
        border: solid 1px var(--uui-color-border-standalone);
        display: block;
        white-space: pre;
        font-family: monospace;
        font-size: 13px;
        padding: 4px;
        white-space: pre;
      }
      uui-textarea {
        width: 100%;
      }
      uui-textarea.json {
        font-family: monospace;
      }
    `
];
Au([
  b()
], Zi.prototype, "_editIndex", 2);
Zi = Au([
  f(Jb)
], Zi);
var j, tr, R, $i, uo, mo, po, br, ho;
class qE {
  constructor(e, r) {
    h(this, R);
    h(this, j);
    h(this, tr);
    if (!r) throw new Error("workspaceContext is missing");
    if (!e) throw new Error("host is missing");
    y(this, tr, e), y(this, j, r);
  }
  getHostElement() {
    return c(this, tr).getHostElement();
  }
  addFormPage(e = !1) {
    const r = c(this, j).getData();
    if (!r) return;
    const a = tt.getPageScaffold();
    a.form = r.unique;
    const i = [...c(this, j).getData().pages];
    e ? i.unshift(a) : i.push(a), c(this, j).setFormProperty("pages", i);
  }
  async deleteFormPage(e) {
    if (!e) throw new Error("page is missing");
    F(this, R, $i).call(this, "page", () => {
      const r = c(this, j).getData().pages;
      c(this, j).setFormProperty(
        "pages",
        Us(r, (a) => a.id !== e.id)
      );
    });
  }
  addFormGroup(e) {
    if (!e) throw new Error("page is missing");
    const r = tt.getFieldsetScaffold();
    r.sortOrder = e.fieldSets.length, r.page = e.id, F(this, R, br).call(this, e, r);
  }
  deleteFormGroup(e) {
    if (!e) throw new Error("fieldset is missing");
    F(this, R, $i).call(this, "group", () => {
      const r = F(this, R, ho).call(this, e.page), a = [...r.fieldSets];
      a.splice(a.indexOf(e), 1), c(this, j).setFormProperty(
        "pages",
        Ut(
          c(this, j).getData().pages,
          {
            ...r,
            fieldSets: a
          },
          (i) => i.id === r.id
        )
      );
    });
  }
  copyFormGroup(e) {
    if (!e) throw new Error("fieldset is missing");
    const r = F(this, R, ho).call(this, e.page), a = structuredClone(e);
    a.sortOrder = r.fieldSets.length, a.page = r.id, a.id = K.new(), a.containers.forEach(
      (i) => i.fields.forEach((o) => o.id = K.new())
    ), F(this, R, br).call(this, r, a);
  }
  deleteQuestion(e, r, a) {
    if (!r) throw new Error("fieldsetId is missing");
    if (!a) throw new Error("pageId is missing");
    F(this, R, $i).call(this, "question", () => {
      const { page: i, fieldset: o, container: s } = F(this, R, po).call(this, e, r, a);
      F(this, R, br).call(this, i, {
        ...o,
        containers: Ut(
          o.containers,
          {
            ...s,
            fields: Us(
              s.fields,
              (l) => l.id !== e.id
            )
          },
          (l) => l === s
        )
      });
    });
  }
  copyQuestion(e, r, a) {
    if (!r) throw new Error("fieldsetId is missing");
    if (!a) throw new Error("pageId is missing");
    const i = structuredClone(e);
    i.id = K.new(), i.alias = F(this, R, uo).call(this, e.alias, c(this, j).getAllFieldAliases());
    const { fieldset: o, container: s } = F(this, R, po).call(this, e, r, a);
    this.insertQuestion(
      i,
      o,
      s,
      s.fields.indexOf(e) + 1
    );
  }
  /**
   * Handles inserting a copied field into the correct fieldset
   */
  insertQuestion(e, r, a, i) {
    if (!r) throw new Error("fieldset is missing");
    if (!a) throw new Error("container is missing");
    const o = r.containers.findIndex((l) => l === a), s = zs(a.fields, e, (l) => l.id);
    i !== void 0 && s.splice(i, 0, s.pop()), F(this, R, mo).call(this, r, a, o, s);
  }
  /** returns an array of objects sorted against the sortedIds array */
  reorderArray(e, r) {
    const a = [...e];
    return a.sort((i, o) => r.indexOf(i.id) - r.indexOf(o.id)), a;
  }
  reorderGroups(e, r) {
    c(this, j).setFormProperty(
      "pages",
      Ut(
        c(this, j).getData().pages,
        Em(e, {
          fieldSets: this.reorderArray(
            e.fieldSets,
            r
          )
        }),
        (a) => a.id === e.id
      )
    );
  }
  reorderQuestions(e, r, a) {
    const i = this.reorderArray(r.fields, a), o = e.containers.findIndex((s) => s === r);
    F(this, R, mo).call(this, e, r, o, i);
  }
}
j = new WeakMap(), tr = new WeakMap(), R = new WeakSet(), $i = async function(e, r) {
  await Po(c(this, tr), {
    headline: `Delete ${e}`,
    content: `Are you sure you want to delete this ${e}?`,
    confirmLabel: "Delete",
    color: "danger"
  }), r();
}, uo = function(e, r) {
  let a = "";
  const i = e.match(/\d+$/);
  if (i) {
    const s = e.substring(0, e.length - i[0].length), g = parseInt(i[0], 10) + 1;
    a = s + g;
  } else
    a = e + "2";
  let o = !1;
  for (let s = 0; s < r.length; s++)
    if (r[s] === a) {
      o = !0;
      break;
    }
  return o ? F(this, R, uo).call(this, a, r) : a;
}, mo = function(e, r, a, i) {
  const o = {
    ...r,
    fields: i
  }, s = {
    ...e,
    containers: Ut(
      e.containers,
      o,
      (S) => e.containers.indexOf(S) === a
    )
  }, g = c(this, j).getData().pages.find((S) => S.id === s.page);
  F(this, R, br).call(this, g, s);
}, po = function(e, r, a) {
  function i(S, k) {
    return S.length === 1 ? S[0] : S.find(k);
  }
  const o = c(this, j).getData(), s = i(o.pages, (S) => S.id === a), l = i(s.fieldSets, (S) => S.id === r), g = i(
    l.containers,
    (S) => S.fields.some((k) => k.id === e.id)
  );
  return { page: s, fieldset: l, container: g };
}, br = function(e, r) {
  const a = {
    ...e,
    fieldSets: zs(e.fieldSets, r, (i) => i.id)
  };
  c(this, j).setFormProperty(
    "pages",
    Ut(
      c(this, j).getData().pages,
      a,
      (i) => i.id === a.id
    )
  );
}, ho = function(e) {
  const r = c(this, j).getData().pages.find((a) => a.id === e);
  if (!r) throw new Error("page is missing");
  return r;
};
const Qb = new L("FormStructureManager");
var Zb = Object.defineProperty, eF = Object.getOwnPropertyDescriptor, Ta = (t, e, r, a) => {
  for (var i = a > 1 ? void 0 : a ? eF(e, r) : e, o = t.length - 1, s; o >= 0; o--)
    (s = t[o]) && (i = (a ? s(e, r, i) : s(i)) || i);
  return a && i && Zb(e, r, i), i;
}, bt;
class $e extends st(
  Dt
) {
  constructor() {
    super();
    h(this, bt);
    this.index = 0, this.allFields = [], this.allFieldTypes = [], y(this, bt, !1), this.consumeContext(De, (r) => {
      this.workspaceContext = r;
    }), this.consumeContext(q, (r) => {
      this.modalContext = r;
    }), this.consumeContext(Qb, (r) => {
      this.structureManager = r;
    });
  }
  set sortModeActive(r) {
    var a, i;
    y(this, bt, r), c(this, bt) ? (a = this.sortModeEnabled) == null || a.call(this) : (i = this.sortModeDisabled) == null || i.call(this);
  }
  get sortModeActive() {
    return c(this, bt);
  }
  async editNewOrExistingField(r, a, i) {
    if (!this.modalContext) return;
    const o = await this.workspaceContext.loadFieldType(
      r.fieldTypeId
    );
    if (!o)
      throw new Error(
        "Field type with id " + r.fieldTypeId + " could not be found."
      );
    const s = this.workspaceContext.getAllPages();
    let l = [];
    if (o.supportsRegex) {
      const Ce = await this.workspaceContext.loadValidationPatterns();
      Ce && (l = Ce);
    }
    let g = [];
    if (o.supportsPrevalues) {
      const Ce = await this.workspaceContext.loadPrevalueSources();
      Ce && (g = Ce);
    }
    const S = r.caption, k = r.alias, O = r.tooltip, z = r.containsSensitiveData, Q = r.allowedUploadTypes, _ = r.allowMultipleFileUploads, B = r.preValues, A = r.prevalueSourceId, P = r.mandatory, fm = r.requiredErrorMessage, ym = r.regex, gm = r.invalidErrorMessage, vm = r.condition ? structuredClone(r.condition) : tt.getConditionScaffold(), As = r.settings;
    if (a)
      for (let Ce = 0; Ce < o.settings.length; Ce++) {
        const Ra = o.settings[Ce];
        Ra.defaultValue && (As[Ra.alias] = Ra.defaultValue);
      }
    const _m = this.workspaceContext.getContainerIndexPathForField(r.id);
    this.modalContext.open(this, Ph, {
      data: {
        fields: this.allFields,
        pages: s,
        validationPatterns: l,
        prevalueSources: g,
        isNew: a
      },
      value: {
        caption: S,
        alias: k,
        tooltip: O,
        fieldType: o,
        containsSensitiveData: z,
        allowedUploadTypes: Q,
        allowMultipleFileUploads: _,
        prevalues: B,
        prevalueSourceId: A,
        mandatory: P,
        requiredErrorMessage: fm,
        regex: ym,
        invalidErrorMessage: gm,
        condition: vm,
        settings: As,
        containerIndexPath: _m
      }
    }).onSubmit().then(i).catch(() => {
    });
  }
}
bt = new WeakMap();
Ta([
  m({ type: Number })
], $e.prototype, "index", 2);
Ta([
  m({ type: Array })
], $e.prototype, "allFields", 2);
Ta([
  m({ type: Array })
], $e.prototype, "allFieldTypes", 2);
Ta([
  m({ type: Boolean, reflect: !0, attribute: "sort-mode-active" })
], $e.prototype, "sortModeActive", 1);
var tF = Object.defineProperty, rF = Object.getOwnPropertyDescriptor, Wu = (t) => {
  throw TypeError(t);
}, Lu = (t, e, r, a) => {
  for (var i = a > 1 ? void 0 : a ? rF(e, r) : e, o = t.length - 1, s; o >= 0; o--)
    (s = t[o]) && (i = (a ? s(e, r, i) : s(i)) || i);
  return a && i && tF(e, r, i), i;
}, fs = (t, e, r) => e.has(t) || Wu("Cannot " + r), Ci = (t, e, r) => (fs(t, e, "read from private field"), r ? r.call(t) : e.get(t)), Ya = (t, e, r) => e.has(t) ? Wu("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), fo = (t, e, r, a) => (fs(t, e, "write to private field"), e.set(t, r), r), ct = (t, e, r) => (fs(t, e, "access private method"), r), Oa, $t, Te, Vu, Nu, qu, Bu, ju, Yu, Gu;
const iF = "forms-form-page";
let ea = class extends $e {
  constructor() {
    super(...arguments), Ya(this, Te), Ya(this, Oa), Ya(this, $t, []);
  }
  sortModeEnabled() {
    ct(this, Te, Vu).call(this), ct(this, Te, Nu).call(this);
  }
  render() {
    var t, e, r;
    return n`<div id="pageHeader">
        <div id="pageNumber">${this.index + 1}</div>
        <uui-input
          .value=${(t = this.page) == null ? void 0 : t.caption}
          @change=${ct(this, Te, Yu)}
          label="caption"
          .placeholder=${this.localize.term("formEdit_pageTitlePlaceholder")}
        ></uui-input>
        ${p(
      !this.sortModeActive,
      () => n`<div id="pageActions">
              <uui-action-bar>
                <uui-button
                  label="edit"
                  look="secondary"
                  color="default"
                  @click=${ct(this, Te, qu)}
                >
                  <uui-icon name="settings"></uui-icon>
                </uui-button>
                <uui-button
                  label=${this.localize.term("general_delete")}
                  look="secondary"
                  color="default"
                  @click=${ct(this, Te, Bu)}
                >
                  <uui-icon name="delete"></uui-icon>
                </uui-button>
              </uui-action-bar>
            </div>`
    )}
      </div>

      ${p(
      !this.sortModeActive,
      () => {
        var a, i;
        return n` <forms-form-condition-summary
            formElement="pageButton"
            .condition=${(a = this.page) == null ? void 0 : a.buttonCondition}
            .operatorTypes=${((i = this.workspaceContext) == null ? void 0 : i.getConditionOperators) ?? []}
            .allFields=${this.allFields}
          >
          </forms-form-condition-summary>`;
      }
    )}

      <div id="pageFieldsets" class="page-${(e = this.page) == null ? void 0 : e.id}">
        ${(r = this.page) == null ? void 0 : r.fieldSets.map(
      (a, i) => {
        var o;
        return n`<forms-form-fieldset
              class="fieldset-${(o = this.page) == null ? void 0 : o.id}"
              sort-unique="${a.id}"
              .fieldset=${a}
              .index=${i}
              .pageIndex=${this.index}
              .allFields=${this.allFields}
              .allFieldTypes=${this.allFieldTypes}
              .sortModeActive=${this.sortModeActive}
            ></forms-form-fieldset>`;
      }
    )}
      </div>
      <div id="pageFooter">
        ${p(
      !this.sortModeActive,
      () => n` <uui-button
              @click=${ct(this, Te, ju)}
              look="outline"
              label=${this.localize.term("formEdit_addGroup")}
            ></uui-button>`
    )}
      </div>`;
  }
};
Oa = /* @__PURE__ */ new WeakMap();
$t = /* @__PURE__ */ new WeakMap();
Te = /* @__PURE__ */ new WeakSet();
Vu = function() {
  var t, e;
  fo(this, Oa, new ii(this, {
    ...new ni(
      "Forms.SorterIdentifier.Fieldset",
      `forms-form-fieldset.fieldset-${(t = this.page) == null ? void 0 : t.id}`,
      `.page-${(e = this.page) == null ? void 0 : e.id}`
    ).config,
    onChange: ({ model: r }) => {
      fo(this, $t, r);
    },
    onEnd: () => {
      var r;
      (r = this.structureManager) == null || r.reorderGroups(this.page, Ci(this, $t));
    }
  }));
};
Nu = function() {
  var e;
  fo(this, $t, []);
  const t = this.page.fieldSets;
  for (let r = 0; r < t.length; r++) {
    const a = t[r];
    Ci(this, $t).push(a.id);
  }
  (e = Ci(this, Oa)) == null || e.setModel(Ci(this, $t));
};
qu = async function() {
  var a;
  if (!this.modalContext) return;
  const t = (a = this.page) != null && a.buttonCondition ? structuredClone(this.page.buttonCondition) : tt.getConditionScaffold(), r = await this.modalContext.open(this, Th, {
    data: {
      fields: this.allFields
    },
    value: {
      buttonCondition: t
    }
  }).onSubmit().catch(() => {
  });
  r && ct(this, Te, Gu).call(this, "buttonCondition", r.buttonCondition);
};
Bu = function() {
  var t;
  (t = this.structureManager) == null || t.deleteFormPage(this.page);
};
ju = function() {
  var t;
  (t = this.structureManager) == null || t.addFormGroup(this.page);
};
Yu = function(t) {
  if (this.page) {
    const e = t.target.value.toString();
    this.workspaceContext.setPageProperty(this.index, "caption", e);
  }
};
Gu = function(t, e) {
  this.workspaceContext.setPageProperty(this.index, t, e);
};
ea.styles = [
  x`
      :host {
        display: block;
        background: #e9e9eb;
        padding: 15px;
        margin-bottom: 30px;
        border-radius: 3px;
      }

      #pageHeader {
        margin-bottom: 15px;
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        align-items: center;
        font-size: 14px;
        font-weight: bold;
      }
      #pageNumber {
        width: 23px;
        height: 23px;
        line-height: 23px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #ffffff;
        border: 1px solid #bbbabf;
        margin-right: 5px;
      }
      #pageActions {
        color: #817f85;
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        margin-left: auto;
        padding-left: 10px;
      }
      #pageFooter {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 15px;
      }

      forms-form-fieldset + forms-form-fieldset {
        display: block;
        margin-top: var(--uui-size-5);
      }
    `
];
Lu([
  m({ type: Object })
], ea.prototype, "page", 2);
ea = Lu([
  f(iF)
], ea);
var aF = Object.defineProperty, oF = Object.getOwnPropertyDescriptor, Hu = (t) => {
  throw TypeError(t);
}, pi = (t, e, r, a) => {
  for (var i = a > 1 ? void 0 : a ? oF(e, r) : e, o = t.length - 1, s; o >= 0; o--)
    (s = t[o]) && (i = (a ? s(e, r, i) : s(i)) || i);
  return a && i && aF(e, r, i), i;
}, sF = (t, e, r) => e.has(t) || Hu("Cannot " + r), nF = (t, e, r) => e.has(t) ? Hu("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), rn = (t, e, r) => (sF(t, e, "access private method"), r), Ti, Ku, Xu;
const lF = "forms-form-condition-summary";
let kt = class extends st(
  Dt
) {
  constructor() {
    super(...arguments), nF(this, Ti), this.allFields = [], this.operatorTypes = [], this.formElement = "field";
  }
  render() {
    var t;
    return n` ${p(
      (t = this.condition) == null ? void 0 : t.enabled,
      () => {
        var e, r, a;
        return n`<div class="condition-summary">
          ${Cn(
          `<span>${this.localize.term("formConditions_" + this.formElement + "ConditionStatus", (e = this.condition) == null ? void 0 : e.actionType, (r = this.condition) == null ? void 0 : r.logicType.toLowerCase())}</span`
        )}
          ${(a = this.condition) == null ? void 0 : a.rules.map(
          (i, o) => n`<span>
              <strong>${rn(this, Ti, Ku).call(this, i.field)}</strong>
              ${rn(this, Ti, Xu).call(this, i.operator)}</span>
              <strong>${i.value.length > 0 ? n`${i.value}` : this.localize.term("formConditions_empty")}</strong>${p(o < this.condition.rules.length - 1, () => n`<span>, </span>`)}
            </span>`
        )}
        </div>`;
      }
    )}`;
  }
};
Ti = /* @__PURE__ */ new WeakSet();
Ku = function(t) {
  var e;
  return (e = this.allFields.find((r) => r.id === t)) == null ? void 0 : e.caption;
};
Xu = function(t) {
  var e;
  return (e = this.operatorTypes.find((r) => r.value === t)) == null ? void 0 : e.name;
};
kt.styles = [
  x`
      .condition-summary {
        font-size: 12px;
        margin-top: 8px;
        padding-left: 6px;
        padding-right: 6px;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        background: #f6f3fd;
        border: 1px solid #413659;
        border-radius: 3px;
        display: inline-block;
        max-width: 800px;

        span {
          font-style: italic;
        }
      }
    `
];
pi([
  m({ type: Object })
], kt.prototype, "condition", 2);
pi([
  m({ type: Array })
], kt.prototype, "allFields", 2);
pi([
  m({ type: Array })
], kt.prototype, "operatorTypes", 2);
pi([
  m()
], kt.prototype, "formElement", 2);
kt = pi([
  f(lF)
], kt);
var cF = Object.defineProperty, uF = Object.getOwnPropertyDescriptor, Ju = (t) => {
  throw TypeError(t);
}, Ie = (t, e, r, a) => {
  for (var i = a > 1 ? void 0 : a ? uF(e, r) : e, o = t.length - 1, s; o >= 0; o--)
    (s = t[o]) && (i = (a ? s(e, r, i) : s(i)) || i);
  return a && i && cF(e, r, i), i;
}, dF = (t, e, r) => e.has(t) || Ju("Cannot " + r), mF = (t, e, r) => e.has(t) ? Ju("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), $ = (t, e, r) => (dF(t, e, "access private method"), r), w, Qu, ys, Zu, ed, td, rd, id, ad, od, Y, sd, nd;
const pF = "forms-form-field";
let _e = class extends $e {
  constructor() {
    super(...arguments), mF(this, w), this.pageIndex = 0, this.fieldsetIndex = 0, this.containerIndex = 0, this._aliasLocked = !0, this._fieldPrevalues = [];
  }
  async connectedCallback() {
    super.connectedCallback(), await $(this, w, Qu).call(this);
  }
  renderSortableField() {
    return n`<div class="sortable">
      <uui-icon name="icon-navigation"></uui-icon>
      ${this.field.caption}
      <span style="color: var(--uui-color-disabled-contrast)"
        >(${this.field.alias})</span
      >
    </div>`;
  }
  render() {
    return this.sortModeActive ? this.renderSortableField() : n`<div id="fieldHeader">
        <!-- TODO => lifted from doc type header, confirm changes are ok -->
        <uui-input
          id="caption"
          name="caption"
          .value=${this.field.caption}
          @change="${$(this, w, rd)}"
          label="caption"
        >
          <!-- TODO: should use UUI-LOCK-INPUT, but that does not fire an event when its locked/unlocked -->
          <uui-input
            name="alias"
            slot="append"
            label="alias"
            @change=${$(this, w, ad)}
            .value=${this.field.alias}
            placeholder="Enter alias..."
            ?disabled=${this._aliasLocked}
          >
            <!-- TODO: validation for bad characters -->
            <div
              @click=${$(this, w, id)}
              @keydown=${() => ""}
              id="alias-lock"
              slot="prepend"
            >
              <uui-icon
                name=${this._aliasLocked ? "icon-lock" : "icon-unlocked"}
              ></uui-icon>
            </div>
          </uui-input>
        </uui-input>

        <uui-action-bar>
          <uui-button
            label="edit"
            look="secondary"
            color="default"
            @click=${$(this, w, Zu)}
          >
            <uui-icon name="settings"></uui-icon>
          </uui-button>
          <uui-button
            label="copy"
            look="secondary"
            color="default"
            @click=${$(this, w, td)}
          >
            <uui-icon name="copy"></uui-icon>
          </uui-button>
          <uui-button
            label=${this.localize.term("general_delete")}
            look="secondary"
            color="default"
            @click=${$(this, w, ed)}
          >
            <uui-icon name="delete"></uui-icon>
          </uui-button>
        </uui-action-bar>
      </div>

      <div id="fieldContent">
        <div id="help">
          <uui-textarea
            name="tooltip"
            .placeholder=${this.localize.term("formEdit_helpText")}
            .value=${this.field.tooltip}
            @change="${$(this, w, od)}"
            label="tooltip"
          ></uui-textarea>
        </div>
        ${$(this, w, sd).call(this, this.field)}
      </div>

      ${p(
      !this.sortModeActive,
      () => {
        var t;
        return n` <forms-form-condition-summary
            formElement="field"
            .condition=${this.field.condition ?? void 0}
            .operatorTypes=${((t = this.workspaceContext) == null ? void 0 : t.getConditionOperators) ?? []}
            .allFields=${this.allFields}
          >
          </forms-form-condition-summary>`;
      }
    )} `;
  }
};
w = /* @__PURE__ */ new WeakSet();
Qu = async function() {
  await $(this, w, ys).call(this, this.field.prevalueSourceId, this.field.preValues);
};
ys = async function(t, e) {
  if (this.workspaceContext)
    if (t !== Pt) {
      const r = new _u(this), { data: a } = await r.requestPrevalues(
        this.field.prevalueSourceId,
        this.workspaceContext.getUnique(),
        this.field.id
      );
      a && (this._fieldPrevalues = a.map((i) => ({ value: i.value, caption: i.caption })));
    } else
      this._fieldPrevalues = e;
};
Zu = async function() {
  const t = async (e) => {
    $(this, w, Y).call(this, "caption", e.caption), $(this, w, Y).call(this, "alias", e.alias), $(this, w, Y).call(this, "tooltip", e.tooltip), $(this, w, Y).call(this, "fieldTypeId", e.fieldType.id), $(this, w, Y).call(this, "containsSensitiveData", e.containsSensitiveData), $(this, w, Y).call(this, "allowedUploadTypes", e.allowedUploadTypes), $(this, w, Y).call(this, "allowMultipleFileUploads", e.allowMultipleFileUploads), $(this, w, Y).call(this, "preValues", e.prevalues), $(this, w, Y).call(this, "prevalueSourceId", e.prevalueSourceId), $(this, w, Y).call(this, "mandatory", e.mandatory), $(this, w, Y).call(this, "requiredErrorMessage", e.requiredErrorMessage), $(this, w, Y).call(this, "regex", e.regex), $(this, w, Y).call(this, "invalidErrorMessage", e.invalidErrorMessage), $(this, w, Y).call(this, "settings", e.settings), $(this, w, Y).call(this, "condition", e.condition);
    const r = this.workspaceContext.getContainerIndexPathForField(this.field.id);
    this.workspaceContext.moveField(
      this.field.id,
      r,
      e.containerIndexPath
    ), await $(this, w, ys).call(this, e.prevalueSourceId, e.prevalues);
  };
  await this.editNewOrExistingField(this.field, !1, t);
};
ed = function() {
  var t;
  (t = this.structureManager) == null || t.deleteQuestion(
    this.field,
    this.fieldsetId,
    this.pageId
  );
};
td = function() {
  var t;
  (t = this.structureManager) == null || t.copyQuestion(
    this.field,
    this.fieldsetId,
    this.pageId
  );
};
rd = function(t) {
  if (this.field) {
    const e = "caption";
    t.target.name === e && $(this, w, Y).call(this, e, t.target.value.toString());
  }
};
id = function() {
  this._aliasLocked = !this._aliasLocked;
};
ad = function(t) {
  if (this.field) {
    const e = "alias";
    t.target.name === e && $(this, w, Y).call(this, e, t.target.value.toString());
  }
};
od = function(t) {
  if (t instanceof Nm && this.field) {
    const e = t.composedPath()[0], r = "tooltip";
    e.name === r && $(this, w, Y).call(this, r, e.value.toString());
  }
};
Y = function(t, e) {
  this.workspaceContext.setFieldProperty(
    this.pageIndex,
    this.fieldsetIndex,
    this.containerIndex,
    this.index,
    t,
    e
  );
};
sd = function(t) {
  const e = this.allFieldTypes.find(
    (r) => r.id == t.fieldTypeId
  );
  if (e)
    return n`<div id="fieldType">
      <div id="tags">
        <uui-tag look="default">${e.name}</uui-tag>
        ${p(
      t.mandatory,
      () => n`<uui-tag look="default"
              ><span
                >* ${this.localize.term("general_mandatory")}</span
              ></uui-tag
            >`
    )}
        ${p(
      t.containsSensitiveData,
      () => n`<uui-tag look="default"
              ><span
                ><uui-icon name="icon-lock"></uui-icon>${this.localize.term(
        "fieldSettings_sensitiveData"
      )}</span
              ></uui-tag
            >`
    )}
      </div>
      ${$(this, w, nd).call(this, t, e)}
    </div>`;
};
nd = function(t, e) {
  return vn.getByAlias(
    e.previewView
  ) ? n`<umb-extension-slot
        type="formsFieldPreview"
        .filter=${(a) => a.alias === e.previewView}
        .props=${{ settings: t.settings, prevalues: this._fieldPrevalues }}
      >
      </umb-extension-slot>` : n``;
};
_e.styles = [
  x`
      :host {
        display: block;
        border-bottom: 1px solid #e9e9eb;
        padding: var(--uui-size-layout-1) 0;
      }

      #fieldHeader {
        display: flex;
        margin-bottom: var(--uui-size-3);
      }

      uui-action-bar {
        margin-left: var(--uui-size-3);
      }

      #caption {
        flex: 1;
        margin-right: var(--uui-size-3);
      }

      #help {
        width: 300px;
      }

      #fieldContent {
        display: flex;
      }

      #fieldType {
        flex: 1 1 auto;
        background-color: var(--uui-color-surface-alt);
        margin-left: var(--uui-size-3);
        padding: var(--uui-size-3);
      }

      #tags {
        margin-bottom: var(--uui-size-3);
        display: flex;
        gap: var(--uui-size-space-2);
      }

      :host([sort-mode-active]) {
        position: relative;
        display: flex;
        padding: 0;
        margin-bottom: var(--uui-size-3);
      }

      :host([sort-mode-active]:last-of-type) {
        margin-bottom: 0;
      }

      :host([sort-mode-active]:not([inherited])) {
        cursor: grab;
      }

      :host([sort-mode-active]) .sortable {
        flex: 1;
        display: flex;
        background-color: var(--uui-color-divider);
        align-items: center;
        padding: 0 var(--uui-size-3);
        gap: var(--uui-size-3);
      }

      :host([sort-mode-active]) uui-input {
        max-width: 75px;
      }

      /* Placeholder style, used when property is being dragged.*/
      :host(.--umb-sorter-placeholder) > * {
        visibility: hidden;
      }

      :host(.--umb-sorter-placeholder)::after {
        content: "";
        inset: 0;
        position: absolute;
        border: 1px dashed var(--uui-color-divider-emphasis);
        border-radius: var(--uui-border-radius);
      }

      uui-tag uui-icon {
        font-size: xx-small;
        margin-right: 4px;
      }
    `
];
Ie([
  m({ type: Object })
], _e.prototype, "field", 2);
Ie([
  m()
], _e.prototype, "fieldsetId", 2);
Ie([
  m()
], _e.prototype, "pageId", 2);
Ie([
  m({ type: Number })
], _e.prototype, "pageIndex", 2);
Ie([
  m({ type: Number })
], _e.prototype, "fieldsetIndex", 2);
Ie([
  m({ type: Number })
], _e.prototype, "containerIndex", 2);
Ie([
  b()
], _e.prototype, "_aliasLocked", 2);
Ie([
  b()
], _e.prototype, "_fieldPrevalues", 2);
_e = Ie([
  f(pF)
], _e);
var hF = Object.defineProperty, fF = Object.getOwnPropertyDescriptor, ld = (t) => {
  throw TypeError(t);
}, Pa = (t, e, r, a) => {
  for (var i = a > 1 ? void 0 : a ? fF(e, r) : e, o = t.length - 1, s; o >= 0; o--)
    (s = t[o]) && (i = (a ? s(e, r, i) : s(i)) || i);
  return a && i && hF(e, r, i), i;
}, yF = (t, e, r) => e.has(t) || ld("Cannot " + r), gF = (t, e, r) => e.has(t) ? ld("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), ht = (t, e, r) => (yF(t, e, "access private method"), r), Pe, cd, ud, dd, md, ta;
const vF = "forms-form-fieldset";
let or = class extends $e {
  constructor() {
    super(...arguments), gF(this, Pe), this.pageIndex = 0, this.fieldTypes = [];
  }
  render() {
    var t;
    return n`<uui-box
      ><div slot="header">
        ${p(
      !this.sortModeActive,
      () => {
        var e;
        return n` <uui-input
              .value=${(e = this.fieldset) == null ? void 0 : e.caption}
              label="caption"
              .placeholder=${this.localize.term(
          "formEdit_groupTitlePlaceholder"
        )}
              @change=${ht(this, Pe, md)}
            ></uui-input>`;
      },
      () => {
        var e, r, a;
        return n`<uui-icon name="icon-navigation"></uui-icon>
          ${(e = this.fieldset) != null && e.caption && ((r = this.fieldset) == null ? void 0 : r.caption) !== "" ? (a = this.fieldset) == null ? void 0 : a.caption : this.localize.term("formEdit_groupTitlePlaceholder")}
        </div>`;
      }
    )}
      </div>
      ${p(
      !this.sortModeActive,
      () => n`<div slot="header-actions">
            <uui-action-bar>
              <uui-button
                label="edit"
                look="secondary"
                color="default"
                @click=${ht(this, Pe, cd)}
              >
                <uui-icon name="settings"></uui-icon>
              </uui-button>
              <uui-button
                label="copy"
                look="secondary"
                color="default"
                @click=${ht(this, Pe, dd)}
              >
                <uui-icon name="copy"></uui-icon>
              </uui-button>
              <uui-button
                label=${this.localize.term("general_delete")}
                look="secondary"
                color="default"
                @click=${ht(this, Pe, ud)}
              >
                <uui-icon name="delete"></uui-icon>
              </uui-button>
            </uui-action-bar>
          </div>`
    )}
      ${p(
      !this.sortModeActive,
      () => {
        var e, r;
        return n` <forms-form-condition-summary
            formElement="fieldset"
            .condition=${((e = this.fieldset) == null ? void 0 : e.condition) ?? void 0}
            .operatorTypes=${((r = this.workspaceContext) == null ? void 0 : r.getConditionOperators) ?? []}
            .allFields=${this.allFields}
          >
          </forms-form-condition-summary>`;
      }
    )}

      <div id="fieldsetContainers">
        ${(t = this.fieldset) == null ? void 0 : t.containers.map(
      (e, r) => n`<forms-form-fieldset-container
              .fieldset=${this.fieldset}
              .container=${e}
              .index=${r}
              .fieldsetIndex=${this.index}
              .pageIndex=${this.pageIndex}
              .allFields=${this.allFields}
              .allFieldTypes=${this.allFieldTypes}
              .sortModeActive=${this.sortModeActive}
            ></forms-form-fieldset-container>`
    )}
      </div>
    </uui-box>`;
  }
};
Pe = /* @__PURE__ */ new WeakSet();
cd = async function() {
  if (!this.modalContext || !this.workspaceContext || !this.fieldset) return;
  const t = this.workspaceContext.getAllPages(), e = this.pageIndex, r = this.fieldset.condition ? structuredClone(this.fieldset.condition) : tt.getConditionScaffold(), a = structuredClone(this.fieldset.containers), o = await this.modalContext.open(
    this,
    Oh,
    {
      data: {
        fields: this.allFields,
        pages: t
      },
      value: {
        condition: r,
        containers: a,
        pageIndex: e
      }
    }
  ).onSubmit().catch(() => {
  });
  o && (this.fieldset && this.workspaceContext.moveFieldSet(
    this.pageIndex,
    this.index,
    o.pageIndex
  ), ht(this, Pe, ta).call(this, "condition", o.condition), ht(this, Pe, ta).call(this, "containers", o.containers));
};
ud = function() {
  var t;
  (t = this.structureManager) == null || t.deleteFormGroup(this.fieldset);
};
dd = function() {
  var t;
  (t = this.structureManager) == null || t.copyFormGroup(this.fieldset);
};
md = function(t) {
  if (this.fieldset) {
    const e = t.target.value.toString();
    ht(this, Pe, ta).call(this, "caption", e);
  }
};
ta = function(t, e) {
  this.workspaceContext.setFieldsetProperty(
    this.pageIndex,
    this.index,
    t,
    e
  );
};
or.styles = [
  x`
      uui-input {
        flex: 1;
      }

      #header {
        display: flex;
        align-items: center;
        column-gap: var(--uui-size-2);
      }

      #fieldsetContainers {
        display: flex;
        column-gap: var(--uui-size-space-5);
      }

      forms-form-fieldset-container {
        box-sizing: border-box;
        display: flex;
        flex: 1;
      }
    `
];
Pa([
  m({ type: Object })
], or.prototype, "fieldset", 2);
Pa([
  m({ type: Number })
], or.prototype, "pageIndex", 2);
Pa([
  m({ type: Array })
], or.prototype, "fieldTypes", 2);
or = Pa([
  f(vF)
], or);
var _F = Object.defineProperty, SF = Object.getOwnPropertyDescriptor, pd = (t) => {
  throw TypeError(t);
}, fr = (t, e, r, a) => {
  for (var i = a > 1 ? void 0 : a ? SF(e, r) : e, o = t.length - 1, s; o >= 0; o--)
    (s = t[o]) && (i = (a ? s(e, r, i) : s(i)) || i);
  return a && i && _F(e, r, i), i;
}, gs = (t, e, r) => e.has(t) || pd("Cannot " + r), Oi = (t, e, r) => (gs(t, e, "read from private field"), r ? r.call(t) : e.get(t)), Ga = (t, e, r) => e.has(t) ? pd("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), yo = (t, e, r, a) => (gs(t, e, "write to private field"), e.set(t, r), r), Ha = (t, e, r) => (gs(t, e, "access private method"), r), Ct, xa, Fr, hd, fd, yd;
const bF = "forms-form-fieldset-container";
let at = class extends $e {
  constructor() {
    super(...arguments), Ga(this, Fr), this.pageIndex = 0, this.fieldsetIndex = 0, this.fieldTypes = [], Ga(this, Ct, []), Ga(this, xa);
  }
  sortModeEnabled() {
    Ha(this, Fr, hd).call(this), Ha(this, Fr, fd).call(this);
  }
  render() {
    var t, e, r;
    return n`<div
      class="fieldset-container fieldset-container-${(t = this.container) == null ? void 0 : t.id} ${(e = this.container) != null && e.fields.length ? "" : "empty"}"
    >
      ${(r = this.container) == null ? void 0 : r.fields.map(
      (a, i) => {
        var o;
        return n`<forms-form-field
            class="container-${(o = this.container) == null ? void 0 : o.id}"
            sort-unique=${a.id}
            .field=${a}
            .fieldsetId=${this.fieldset.id}
            .pageId=${this.fieldset.page}
            .pageIndex=${this.pageIndex}
            .fieldsetIndex=${this.fieldsetIndex}
            .containerIndex=${this.index}
            .index=${i}
            .allFields=${this.allFields}
            .allFieldTypes=${this.allFieldTypes}
            .sortModeActive=${this.sortModeActive}
          ></forms-form-field>`;
      }
    )}
      ${p(
      !this.sortModeActive,
      () => n` <uui-button
            class="add-question-button"
            @click=${Ha(this, Fr, yd)}
            look="secondary"
            label=${this.localize.term("formEdit_addQuestion")}
          ></uui-button>`
    )}
    </div>`;
  }
};
Ct = /* @__PURE__ */ new WeakMap();
xa = /* @__PURE__ */ new WeakMap();
Fr = /* @__PURE__ */ new WeakSet();
hd = function() {
  var t, e;
  yo(this, xa, new ii(this, {
    ...new ni(
      "Forms.SorterIdentifier.Field",
      `forms-form-field.container-${(t = this.container) == null ? void 0 : t.id}`,
      `.fieldset-container-${(e = this.container) == null ? void 0 : e.id}`
    ).config,
    onChange: ({ model: r }) => {
      yo(this, Ct, r);
    },
    onEnd: () => {
      var r;
      (r = this.structureManager) == null || r.reorderQuestions(
        this.fieldset,
        this.container,
        Oi(this, Ct)
      );
    }
  }));
};
fd = function() {
  var e;
  yo(this, Ct, []);
  const t = this.container.fields;
  for (let r = 0; r < t.length; r++) {
    const a = t[r];
    Oi(this, Ct).push(a.id);
  }
  (e = Oi(this, xa)) == null || e.setModel(Oi(this, Ct));
};
yd = function() {
  this.modalContext.open(
    this,
    Jn
  ).onSubmit().then(async (e) => {
    if (!e.selectedValue) return;
    if (!this.workspaceContext) throw new Error("No workspace context");
    const r = tt.getQuestionScaffold();
    r.fieldTypeId = e.selectedValue.id;
    const a = async (i) => {
      var o;
      r.caption = i.caption, r.alias = i.alias, r.tooltip = i.tooltip, r.fieldTypeId = i.fieldType.id, r.containsSensitiveData = i.containsSensitiveData, r.allowedUploadTypes = i.allowedUploadTypes, r.allowMultipleFileUploads = i.allowMultipleFileUploads, r.preValues = i.prevalues, r.prevalueSourceId = i.prevalueSourceId || Pt, r.mandatory = i.mandatory, r.requiredErrorMessage = i.requiredErrorMessage, r.regex = i.regex, r.invalidErrorMessage = i.invalidErrorMessage, r.settings = i.settings, r.condition = i.condition, (o = this.structureManager) == null || o.insertQuestion(
        r,
        this.fieldset,
        this.container
      );
    };
    await this.editNewOrExistingField(r, !0, a);
  }).catch(() => {
  });
};
at.styles = [
  x`
      uui-input,
      .fieldset-container {
        flex: 1;
      }

      .fieldset-container + .fieldset-container {
        border-left: 1px solid var(--uui-color-divider-standalone);
      }

      .add-question-button {
        margin-top: var(--add-button-margin, var(--uui-size-3));
      }

      .empty {
        --add-button-margin: 0;

        display: flex;
        justify-content: center;
        align-items: center;
        flex: 1;
        border: 2px dashed var(--uui-color-divider-standalone);
      }
    `
];
fr([
  m({ type: Object })
], at.prototype, "fieldset", 2);
fr([
  m({ type: Object })
], at.prototype, "container", 2);
fr([
  m({ type: Number })
], at.prototype, "pageIndex", 2);
fr([
  m({ type: Number })
], at.prototype, "fieldsetIndex", 2);
fr([
  m({ type: Array })
], at.prototype, "fieldTypes", 2);
at = fr([
  f(bF)
], at);
var FF = Object.defineProperty, wF = Object.getOwnPropertyDescriptor, gd = (t) => {
  throw TypeError(t);
}, Ma = (t, e, r, a) => {
  for (var i = a > 1 ? void 0 : a ? wF(e, r) : e, o = t.length - 1, s; o >= 0; o--)
    (s = t[o]) && (i = (a ? s(e, r, i) : s(i)) || i);
  return a && i && FF(e, r, i), i;
}, EF = (t, e, r) => e.has(t) || gd("Cannot " + r), $F = (t, e, r) => e.has(t) ? gd("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), CF = (t, e, r) => (EF(t, e, "access private method"), r), go, vd;
const TF = "forms-form-workflow-summary";
let sr = class extends $e {
  constructor() {
    super(...arguments), $F(this, go), this.manualApproval = !1;
  }
  render() {
    var t, e, r;
    return n`<uui-box>
      <div class="flex">
        <div>
          <forms-form-workflow-summary-stage
            .workflows=${((t = this.workflows) == null ? void 0 : t.onSubmit) ?? []}
            .submitMessageDetail=${this.submitMessageDetail}
            .allFields=${this.allFields}
            .label=${this.localize.term("formWorkflows_onSubmit")}
            collectionName="onSubmit"
            icon="icon-check"
          ></forms-form-workflow-summary-stage>
          ${p(
      (((e = this.workflows) == null ? void 0 : e.onApprove) ?? []).length > 0,
      () => {
        var a;
        return n`<forms-form-workflow-summary-stage
                .workflows=${((a = this.workflows) == null ? void 0 : a.onApprove) ?? []}
                .allFields=${this.allFields}
                .label=${this.localize.term("formWorkflows_onApprove") + (this.manualApproval ? " (" + this.localize.term("formWorkflows_automatic") + ")" : "")}
                collectionName="onApprove"
                icon="icon-thumb-up"
              ></forms-form-workflow-summary-stage>`;
      }
    )}
          ${p(
      this.manualApproval && (((r = this.workflows) == null ? void 0 : r.onReject) ?? []).length > 0,
      () => {
        var a;
        return n`<forms-form-workflow-summary-stage
                .workflows=${((a = this.workflows) == null ? void 0 : a.onReject) ?? []}
                .allFields=${this.allFields}
                .label=${this.localize.term("formWorkflows_onReject")}
                collectionName="onReject"
                icon="icon-delete"
              ></forms-form-workflow-summary-stage>`;
      }
    )}
        </div>
        <uui-button
          @click=${CF(this, go, vd)}
          look="secondary"
          label=${this.localize.term("formWorkflows_configureWorkflow")}
        ></uui-button>
      </div>
    </uui-box>`;
  }
};
go = /* @__PURE__ */ new WeakSet();
vd = function() {
  if (!this.modalContext) return;
  this.modalContext.open(
    this,
    $h,
    {
      data: {
        manualApproval: this.manualApproval,
        fields: this.allFields
      },
      value: {
        workflows: this.workflows,
        submitMessageDetail: this.submitMessageDetail
      }
    }
  ).onSubmit().then((e) => {
    e.submitMessageDetail && (this.workspaceContext.setFormProperty(
      "messageOnSubmit",
      e.submitMessageDetail.messageOnSubmit
    ), this.workspaceContext.setFormProperty(
      "messageOnSubmitIsHtml",
      e.submitMessageDetail.messageOnSubmitIsHtml
    ), this.workspaceContext.setFormProperty(
      "goToPageOnSubmit",
      e.submitMessageDetail.goToPageOnSubmit
    )), e.workflows && this.workspaceContext.setFormProperty(
      "formWorkflows",
      e.workflows
    );
  }).catch(() => {
  });
};
sr.styles = [
  x`
      .flex {
        display: flex;
        column-gap: var(--uui-size-5);
      }

      .flex > div:first-child {
        flex: 1;
      }

      uui-button {
        align-self: center;
      }

      forms-form-workflow-summary-stage + forms-form-workflow-summary-stage {
        margin-top: var(--uui-size-5);
      }
    `
];
Ma([
  m({ type: Object })
], sr.prototype, "workflows", 2);
Ma([
  m({ type: Object })
], sr.prototype, "submitMessageDetail", 2);
Ma([
  m({ type: Boolean })
], sr.prototype, "manualApproval", 2);
sr = Ma([
  f(TF)
], sr);
var OF = Object.defineProperty, PF = Object.getOwnPropertyDescriptor, _d = (t) => {
  throw TypeError(t);
}, yr = (t, e, r, a) => {
  for (var i = a > 1 ? void 0 : a ? PF(e, r) : e, o = t.length - 1, s; o >= 0; o--)
    (s = t[o]) && (i = (a ? s(e, r, i) : s(i)) || i);
  return a && i && OF(e, r, i), i;
}, xF = (t, e, r) => e.has(t) || _d("Cannot " + r), MF = (t, e, r) => e.has(t) ? _d("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), an = (t, e, r) => (xF(t, e, "access private method"), r), Pi, Sd, bd;
const kF = "forms-form-workflow-summary-stage";
let ot = class extends $e {
  constructor() {
    super(...arguments), MF(this, Pi), this.workflows = [], this.collectionName = "", this.label = "", this.icon = "";
  }
  render() {
    var t;
    return n` <uui-icon .name=${this.icon}></uui-icon>
      <span>${this.label}</span>
      <uui-icon name="icon-arrow-right"></uui-icon>
      ${p(
      this.submitMessageDetail,
      () => n`<uui-button
            compact
            look="outline"
            color="positive"
            .label=${this.localize.term("formWorkflows_submitMessage")}
            @click=${an(this, Pi, Sd)}
          ></uui-button>`
    )}
      ${(t = this.workflows) == null ? void 0 : t.map(
      (e, r) => n` ${p(
        this.submitMessageDetail || r > 0,
        () => n`<span>and</span>`
      )}
            <uui-button
              compact
              label=${e.name}
              look=${e.active ? "outline" : "placeholder"}
              color=${e.active ? "positive" : "default"}
              @click=${() => an(this, Pi, bd).call(this, r)}
            ></uui-button>`
    )}`;
  }
};
Pi = /* @__PURE__ */ new WeakSet();
Sd = async function() {
  var a, i, o;
  if (!this.modalContext || !this.workspaceContext) return;
  const t = await this.workspaceContext.getRichTextConfiguration(), r = await this.modalContext.open(
    this,
    ol,
    {
      data: {
        richTextConfiguration: t
      },
      value: {
        messageOnSubmit: (a = this.submitMessageDetail) == null ? void 0 : a.messageOnSubmit,
        messageOnSubmitIsHtml: ((i = this.submitMessageDetail) == null ? void 0 : i.messageOnSubmitIsHtml) || !1,
        goToPageOnSubmit: (o = this.submitMessageDetail) == null ? void 0 : o.goToPageOnSubmit
      }
    }
  ).onSubmit().catch(() => {
  });
  r && (this.workspaceContext.setFormProperty(
    "messageOnSubmit",
    r.messageOnSubmit
  ), this.workspaceContext.setFormProperty(
    "messageOnSubmitIsHtml",
    r.messageOnSubmitIsHtml
  ), this.workspaceContext.setFormProperty(
    "goToPageOnSubmit",
    r.goToPageOnSubmit
  ));
};
bd = async function(t) {
  if (!this.modalContext) return;
  const e = this.workflows[t], r = await this.workspaceContext.loadWorkflowType(
    e.workflowTypeId
  );
  if (!r)
    throw new Error(
      `Workflow type with id ${e.workflowTypeId} could not be found.`
    );
  const i = await this.modalContext.open(
    this,
    nl,
    {
      data: {
        fields: this.allFields,
        workflowType: r,
        isNew: !1
      },
      value: {
        name: e.name,
        active: e.active,
        includeSensitiveData: e.includeSensitiveData === wt.TRUE,
        collectionName: this.collectionName,
        settings: e.settings,
        condition: e.condition
      }
    }
  ).onSubmit().catch(() => {
  });
  !this.workspaceContext || !i || (this.workspaceContext.setWorkflowProperty(
    this.collectionName,
    t,
    "name",
    i.name
  ), this.workspaceContext.setWorkflowProperty(
    this.collectionName,
    t,
    "active",
    i.active
  ), this.workspaceContext.setWorkflowProperty(
    this.collectionName,
    t,
    "includeSensitiveData",
    i.includeSensitiveData ? wt.TRUE : wt.FALSE
  ), this.workspaceContext.setWorkflowProperty(
    this.collectionName,
    t,
    "settings",
    i.settings
  ), this.workspaceContext.setWorkflowProperty(
    this.collectionName,
    t,
    "condition",
    i.condition
  ), i.collectionName != this.collectionName && this.workspaceContext.moveWorkflow(
    t,
    this.collectionName,
    i.collectionName
  ));
};
ot.styles = [
  x`
      :host {
        display: flex;
        align-items: center;
        column-gap: var(--uui-size-3);
      }

      uui-icon:first-of-type {
        border: 1px solid var(--uui-color-border-standalone);
        border-radius: 50%;
        padding: var(--uui-size-2);
        width: var(--uui-size-6);
        height: var(--uui-size-6);
      }
    `
];
yr([
  m({ type: Array })
], ot.prototype, "workflows", 2);
yr([
  m()
], ot.prototype, "collectionName", 2);
yr([
  m({ type: Object })
], ot.prototype, "submitMessageDetail", 2);
yr([
  m()
], ot.prototype, "label", 2);
yr([
  m()
], ot.prototype, "icon", 2);
ot = yr([
  f(kF)
], ot);
var AF = Object.defineProperty, DF = (t, e, r, a) => {
  for (var i = void 0, o = t.length - 1, s; o >= 0; o--)
    (s = t[o]) && (i = s(e, r, i) || i);
  return i && AF(e, r, i), i;
}, Ft, ur, Fd, wd;
const ks = class ks extends st(
  Dt
) {
  constructor() {
    super();
    h(this, ur);
    h(this, Ft);
    this.consumeContext(De, (r) => {
      r && (y(this, Ft, r), F(this, ur, Fd).call(this));
    });
  }
  onObserveForm() {
  }
  getAllFieldsForForm() {
    var r;
    return (r = c(this, Ft)) == null ? void 0 : r.getAllFields();
  }
  onInputChange(r, a) {
    const i = r.composedPath()[0];
    this.setPropertyValue(a, i.value.toString());
  }
  onRadioChange(r, a) {
    this.setPropertyValue(a, r.target.value);
  }
  onSelectChange(r, a) {
    this.setPropertyValue(a, r.target.value);
  }
  setPropertyValue(r, a) {
    var i;
    (i = c(this, Ft)) == null || i.setFormProperty(r, a), this.dispatchEvent(new CustomEvent("valueChange"));
  }
  renderToggle(r, a, i) {
    const o = this.localize.term(i);
    return n`<uui-toggle
      ?checked=${r}
      .label=${o}
      @change=${(s) => F(this, ur, wd).call(this, s, a)}
    ></uui-toggle>`;
  }
};
Ft = new WeakMap(), ur = new WeakSet(), Fd = function() {
  this.observe(c(this, Ft).data, (r) => {
    r && (this.form = r, this.onObserveForm());
  });
}, wd = function(r, a) {
  this.setPropertyValue(a, r.target.checked);
}, ks.styles = [
  x`
      .flex {
        display: flex;
        flex-direction: column;
      }

      .flex + .flex {
        margin-top: var(--uui-size-3);
      }

      .flex.gap {
        margin-top: var(--uui-size-5);
      }

      .flex + uui-toggle {
        display: block;
        margin-top: var(--uui-size-3);
      }
    `
];
let ne = ks;
DF([
  b()
], ne.prototype, "form");
var RF = Object.getOwnPropertyDescriptor, IF = (t, e, r, a) => {
  for (var i = a > 1 ? void 0 : a ? RF(e, r) : e, o = t.length - 1, s; o >= 0; o--)
    (s = t[o]) && (i = s(i) || i);
  return i;
};
const UF = "forms-settings-store-records";
let on = class extends ne {
  constructor() {
    super(...arguments), this.alias = "storeRecordsLocally";
  }
  render() {
    return n` <umb-property-layout
      .alias=${this.alias}
      .label=${this.localize.term("formSettings_storeRecords")}
      .description=${this.localize.term("formSettings_storeRecordsDescription")}
    >
      <div slot="editor">
        ${this.renderToggle(
      this.form.storeRecordsLocally,
      this.alias,
      "formSettings_storeRecordsConfirm"
    )}
      </div>
    </umb-property-layout>`;
  }
};
on = IF([
  f(UF)
], on);
var zF = Object.getOwnPropertyDescriptor, WF = (t, e, r, a) => {
  for (var i = a > 1 ? void 0 : a ? zF(e, r) : e, o = t.length - 1, s; o >= 0; o--)
    (s = t[o]) && (i = s(i) || i);
  return i;
};
const LF = "forms-settings-captions";
let sn = class extends ne {
  render() {
    var t, e, r;
    return n` <umb-property-layout
      alias="captions"
      .label=${this.localize.term("formSettings_captions")}
      .description=${this.localize.term("formSettings_captionsDescription")}
    >
      <div slot="editor">
        <div class="flex">
          <uui-label
            >${this.localize.term(
      "formSettings_captionSubmitButton"
    )}</uui-label
          >
          <uui-input
            type="text"
            .label=${this.localize.term("formSettings_captionSubmitButton")}
            .value=${(t = this.form) == null ? void 0 : t.submitLabel}
            @change=${(a) => this.onInputChange(a, "submitLabel")}
          ></uui-input>
        </div>
        <div class="flex">
          <uui-label
            >${this.localize.term("formSettings_captionNextButton")}</uui-label
          >
          <uui-input
            type="text"
            .label=${this.localize.term("formSettings_captionNextButton")}
            .value=${(e = this.form) == null ? void 0 : e.nextLabel}
            @change=${(a) => this.onInputChange(a, "nextLabel")}
          ></uui-input>
        </div>
        <div class="flex">
          <uui-label
            >${this.localize.term(
      "formSettings_captionPreviousButton"
    )}</uui-label
          >
          <uui-input
            type="text"
            .label=${this.localize.term("formSettings_captionPreviousButton")}
            .value=${(r = this.form) == null ? void 0 : r.prevLabel}
            @change=${(a) => this.onInputChange(a, "prevLabel")}
          ></uui-input>
        </div>
      </div>
    </umb-property-layout>`;
  }
};
sn = WF([
  f(LF)
], sn);
var VF = Object.getOwnPropertyDescriptor, NF = (t, e, r, a) => {
  for (var i = a > 1 ? void 0 : a ? VF(e, r) : e, o = t.length - 1, s; o >= 0; o--)
    (s = t[o]) && (i = s(i) || i);
  return i;
};
const qF = "forms-settings-styling";
let nn = class extends ne {
  render() {
    var t, e;
    return n` <umb-property-layout
      alias="styling"
      .label=${this.localize.term("formSettings_styling")}
      .description=${this.localize.term("formSettings_stylingDescription")}
    >
      <div slot="editor">
        <div class="flex">
          <uui-label
            >${this.localize.term("formSettings_formCssClass")}</uui-label
          >
          <uui-input
            type="text"
            .label=${this.localize.term("formSettings_formCssClass")}
            .value=${((t = this.form) == null ? void 0 : t.cssClass) ?? ""}
            @change=${(r) => this.onInputChange(r, "cssClass")}
          ></uui-input>
        </div>
        ${this.renderToggle(
      (e = this.form) == null ? void 0 : e.disableDefaultStylesheet,
      "disableDefaultStylesheet",
      "formSettings_disableDefaultStylesheet"
    )}
      </div>
    </umb-property-layout>`;
  }
};
nn = NF([
  f(qF)
], nn);
var BF = Object.getOwnPropertyDescriptor, Ed = (t) => {
  throw TypeError(t);
}, jF = (t, e, r, a) => {
  for (var i = a > 1 ? void 0 : a ? BF(e, r) : e, o = t.length - 1, s; o >= 0; o--)
    (s = t[o]) && (i = s(i) || i);
  return i;
}, YF = (t, e, r) => e.has(t) || Ed("Cannot " + r), GF = (t, e, r) => (YF(t, e, "read from private field"), r ? r.call(t) : e.get(t)), HF = (t, e, r) => e.has(t) ? Ed("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), vo;
const KF = "forms-settings-validation";
let ln = class extends ne {
  constructor() {
    super(...arguments), HF(this, vo, [
      {
        label: this.localize.term("formSettings_markFieldsNoIndicator"),
        value: "NoIndicator"
      },
      {
        label: this.localize.term("formSettings_markMandatoryFields"),
        value: "MarkMandatoryFields"
      },
      {
        label: this.localize.term("formSettings_markOptionalFields"),
        value: "MarkOptionalFields"
      }
    ]);
  }
  render() {
    var t, e, r, a, i, o;
    return n` <umb-property-layout
      alias="validation"
      .label=${this.localize.term("formSettings_validation")}
      .description=${this.localize.term("formSettings_validationDescription")}
    >
      <div slot="editor">
        <div class="flex">
          <uui-label
            >${this.localize.term(
      "formSettings_mandatoryErrorMessage"
    )}</uui-label
          >
          <small
            >${this.localize.term(
      "formSettings_mandatoryErrorMessageDescription"
    )}</small
          >
          <uui-input
            type="text"
            .label=${this.localize.term("formSettings_mandatoryErrorMessage")}
            .value=${((t = this.form) == null ? void 0 : t.requiredErrorMessage) ?? ""}
            @change=${(s) => this.onInputChange(s, "requiredErrorMessage")}
          ></uui-input>
        </div>
        <div class="flex gap">
          <uui-label
            >${this.localize.term(
      "formSettings_invalidErrorMessage"
    )}</uui-label
          >
          <small
            >${this.localize.term(
      "formSettings_invalidErrorMessageDescription"
    )}</small
          >
          <uui-input
            type="text"
            .label=${this.localize.term("formSettings_invalidErrorMessage")}
            .value=${((e = this.form) == null ? void 0 : e.invalidErrorMessage) ?? ""}
            @change=${(s) => this.onInputChange(s, "invalidErrorMessage")}
          ></uui-input>
        </div>
        ${this.renderToggle(
      (r = this.form) == null ? void 0 : r.showValidationSummary,
      "showValidationSummary",
      "formSettings_showValidationSummary"
    )}
        ${this.renderToggle(
      (a = this.form) == null ? void 0 : a.hideFieldValidation,
      "hideFieldValidation",
      "formSettings_hideFieldValidationLabels"
    )}
        <div class="flex gap">
          <uui-label
            >${this.localize.term("formSettings_markFields")}</uui-label
          >
          <uui-radio-group
            .value=${(i = this.form) == null ? void 0 : i.fieldIndicationType}
            @change=${(s) => this.onRadioChange(s, "fieldIndicationType")}
          >
            ${GF(this, vo).map(
      (s) => n`<uui-radio
                  name=${"fieldIndicationType"}
                  value=${s.value}
                  label=${s.label}
                ></uui-radio>`
    )}
          </uui-radio-group>
        </div>
        <div class="flex gap">
          <uui-label>${this.localize.term("formSettings_indicator")}</uui-label>
          <small
            >${this.localize.term("formSettings_changeIndicatorSymbol")}</small
          >
          <uui-input
            type="text"
            .label=${this.localize.term("formSettings_indicator")}
            .value=${((o = this.form) == null ? void 0 : o.indicator) ?? ""}
            @change=${(s) => this.onInputChange(s, "indicator")}
          ></uui-input>
        </div>
      </div>
    </umb-property-layout>`;
  }
};
vo = /* @__PURE__ */ new WeakMap();
ln = jF([
  f(KF)
], ln);
var XF = Object.getOwnPropertyDescriptor, $d = (t) => {
  throw TypeError(t);
}, JF = (t, e, r, a) => {
  for (var i = a > 1 ? void 0 : a ? XF(e, r) : e, o = t.length - 1, s; o >= 0; o--)
    (s = t[o]) && (i = s(i) || i);
  return i;
}, QF = (t, e, r) => e.has(t) || $d("Cannot " + r), ZF = (t, e, r) => (QF(t, e, "read from private field"), r ? r.call(t) : e.get(t)), ew = (t, e, r) => e.has(t) ? $d("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), _o;
const tw = "forms-settings-autocomplete";
let cn = class extends ne {
  constructor() {
    super(...arguments), ew(this, _o, [
      {
        label: this.localize.term("formSettings_autocompleteNone"),
        value: "None"
      },
      {
        label: this.localize.term("formSettings_autocompleteOn"),
        value: "On"
      },
      {
        label: this.localize.term("formSettings_autocompleteOff"),
        value: "Off"
      }
    ]);
  }
  render() {
    return n` <umb-property-layout
      alias="autocomplete"
      .label=${this.localize.term("formSettings_autocomplete")}
      .description=${this.localize.term("formSettings_autocompleteDescription")}
    >
      <div slot="editor" class="flex">
        <uui-label
          >${this.localize.term(
      "formSettings_autocompleteAttributeValue"
    )}</uui-label
        >
        <uui-radio-group
          .value=${this.form.autocompleteAttribute}
          @change=${(t) => this.onRadioChange(t, "autoCompleteAttribute")}
        >
          ${ZF(this, _o).map(
      (t) => n`<uui-radio
                name=${"autoCompleteAttribute"}
                value=${t.value}
                label=${t.label}
              ></uui-radio>`
    )}
        </uui-radio-group>
      </div>
    </umb-property-layout>`;
  }
};
_o = /* @__PURE__ */ new WeakMap();
cn = JF([
  f(tw)
], cn);
var rw = Object.getOwnPropertyDescriptor, iw = (t, e, r, a) => {
  for (var i = a > 1 ? void 0 : a ? rw(e, r) : e, o = t.length - 1, s; o >= 0; o--)
    (s = t[o]) && (i = s(i) || i);
  return i;
};
const aw = "forms-settings-moderation";
let un = class extends ne {
  constructor() {
    super(...arguments), this.alias = "manualApproval";
  }
  render() {
    var t;
    return n` <umb-property-layout
      .alias=${this.alias}
      .label=${this.localize.term("formSettings_moderation")}
      .description=${this.localize.term("formSettings_moderationDescription")}
    >
      <div slot="editor">
        ${this.renderToggle(
      (t = this.form) == null ? void 0 : t.manualApproval,
      this.alias,
      "formSettings_enablePostModeration"
    )}
      </div>
    </umb-property-layout>`;
  }
};
un = iw([
  f(aw)
], un);
var ow = Object.getOwnPropertyDescriptor, Cd = (t) => {
  throw TypeError(t);
}, sw = (t, e, r, a) => {
  for (var i = a > 1 ? void 0 : a ? ow(e, r) : e, o = t.length - 1, s; o >= 0; o--)
    (s = t[o]) && (i = s(i) || i);
  return i;
}, Td = (t, e, r) => e.has(t) || Cd("Cannot " + r), nw = (t, e, r) => (Td(t, e, "read from private field"), r ? r.call(t) : e.get(t)), lw = (t, e, r) => e.has(t) ? Cd("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), cw = (t, e, r, a) => (Td(t, e, "write to private field"), e.set(t, r), r), xi;
const uw = "forms-settings-data-retention";
let So = class extends ne {
  constructor() {
    super(), lw(this, xi, !1), this.consumeContext(si, (t) => {
      t && this.observe(t.config, (e) => {
        e && cw(this, xi, e == null ? void 0 : e.scheduledRecordDeletionEnabled);
      });
    });
  }
  render() {
    return n`<umb-property-layout
      alias="dataRetention"
      .label=${this.localize.term("formSettings_dataRetention")}
      .description=${this.localize.term(
      "formSettings_dataRetentionDescription"
    )}
    >
      <div slot="editor">
        <forms-settings-data-retention-stage stage="Submitted">
        </forms-settings-data-retention-stage>
        <forms-settings-data-retention-stage stage="Approved">
        </forms-settings-data-retention-stage>
        <forms-settings-data-retention-stage stage="Rejected">
        </forms-settings-data-retention-stage>

        ${p(
      !nw(this, xi),
      () => n`<div class="note">
              ${this.localize.term(
        "formSettings_scheduledRecordDeletionNotEnabled"
      )}
            </div>`
    )}
      </div>
    </umb-property-layout>`;
  }
};
xi = /* @__PURE__ */ new WeakMap();
So.styles = [
  x`
      .note {
        font-style: italic;
        margin-top: 10px;
      }
    `
];
So = sw([
  f(uw)
], So);
var dw = Object.defineProperty, mw = Object.getOwnPropertyDescriptor, Od = (t) => {
  throw TypeError(t);
}, vs = (t, e, r, a) => {
  for (var i = a > 1 ? void 0 : a ? mw(e, r) : e, o = t.length - 1, s; o >= 0; o--)
    (s = t[o]) && (i = (a ? s(e, r, i) : s(i)) || i);
  return a && i && dw(e, r, i), i;
}, _s = (t, e, r) => e.has(t) || Od("Cannot " + r), pw = (t, e, r) => (_s(t, e, "read from private field"), r ? r.call(t) : e.get(t)), dn = (t, e, r) => e.has(t) ? Od("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), hw = (t, e, r, a) => (_s(t, e, "write to private field"), e.set(t, r), r), xe = (t, e, r) => (_s(t, e, "access private method"), r), ra, ye, Ss, bo, Rr, Pd;
const fw = "forms-settings-data-retention-stage";
let ia = class extends ne {
  constructor() {
    super(...arguments), dn(this, ye), dn(this, ra, 365), this._showDaysToRetain = !1, this.stage = "";
  }
  connectedCallback() {
    super.connectedCallback(), this._showDaysToRetain = this.form[xe(this, ye, Rr).call(this)] > 0;
  }
  render() {
    return n` <div>
      <uui-toggle
        ?checked=${this._showDaysToRetain}
        .label=${this.localize.term(
      `formSettings_dataRetention${this._showDaysToRetain ? "Remove" : "Retain"}${this.stage}Records`
    )}
        @change=${xe(this, ye, Pd)}
      ></uui-toggle>
      ${p(
      this._showDaysToRetain,
      () => n`<div>
            <uui-label>
              ${this.localize.term(
        `formSettings_dataRetentionFor${this.stage}Records`
      )}
            </uui-label>
            <uui-input
              type="number"
              name="numberOfDays"
              .value=${xe(this, ye, Ss).call(this)}
              @change=${(t) => this.onInputChange(t, xe(this, ye, Rr).call(this))}
              label="numberOfDays"
            ></uui-input>
          </div>`
    )}
    </div>`;
  }
};
ra = /* @__PURE__ */ new WeakMap();
ye = /* @__PURE__ */ new WeakSet();
Ss = function() {
  return this.form[xe(this, ye, Rr).call(this)];
};
bo = function(t) {
  return this.setPropertyValue(xe(this, ye, Rr).call(this), t);
};
Rr = function() {
  return `daysToRetain${this.stage}RecordsFor`;
};
Pd = function() {
  this._showDaysToRetain = !this._showDaysToRetain, this._showDaysToRetain ? xe(this, ye, bo).call(this, pw(this, ra)) : (hw(this, ra, xe(this, ye, Ss).call(this)), xe(this, ye, bo).call(this, 0));
};
vs([
  b()
], ia.prototype, "_showDaysToRetain", 2);
vs([
  m()
], ia.prototype, "stage", 2);
ia = vs([
  f(fw)
], ia);
var yw = Object.defineProperty, gw = Object.getOwnPropertyDescriptor, xd = (t) => {
  throw TypeError(t);
}, Md = (t, e, r, a) => {
  for (var i = a > 1 ? void 0 : a ? gw(e, r) : e, o = t.length - 1, s; o >= 0; o--)
    (s = t[o]) && (i = (a ? s(e, r, i) : s(i)) || i);
  return a && i && yw(e, r, i), i;
}, bs = (t, e, r) => e.has(t) || xd("Cannot " + r), Tt = (t, e, r) => (bs(t, e, "read from private field"), r ? r.call(t) : e.get(t)), fi = (t, e, r) => e.has(t) ? xd("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), kd = (t, e, r, a) => (bs(t, e, "write to private field"), e.set(t, r), r), Ze = (t, e, r) => (bs(t, e, "access private method"), r), Xe, Fs, ka, Se, Ad, Fo, Dd, Rd, Id, Ud, zd;
const vw = "forms-settings-fields-display";
let wo = class extends ne {
  constructor() {
    super(...arguments), fi(this, Se), fi(this, Xe, []), fi(this, Fs, new ii(this, {
      ...new ni(
        "Forms.SorterIdentifier.DisplayField",
        ".display-field-row"
      ).config,
      onChange: ({ model: t }) => {
        kd(this, Xe, t);
      },
      onEnd: () => {
        const t = structuredClone(
          this.form.selectedDisplayFields
        );
        t.sort(
          (e, r) => Tt(this, Xe).indexOf(e.alias) - Tt(this, Xe).indexOf(r.alias)
        ), this.setPropertyValue("selectedDisplayFields", t);
      }
    })), this.formFields = [], fi(this, ka, [
      {
        name: "member",
        labelKey: "formEntries_member"
      },
      {
        name: "state",
        labelKey: "formEntries_state"
      },
      {
        name: "created",
        labelKey: "formEntries_submittedOn"
      },
      {
        name: "update",
        labelKey: "formEntries_updatedOn"
      },
      {
        name: "workflows",
        labelKey: "formEdit_workflows"
      }
    ]);
  }
  onObserveForm() {
    Ze(this, Se, Ad).call(this);
  }
  render() {
    return n`<umb-property-layout
      alias="fieldsDisplayed"
      .label=${this.localize.term("formSettings_fieldsDisplayed")}
      .description=${this.localize.term(
      "formSettings_fieldsDisplayedDescription"
    )}
    >
      <div slot="editor">
        <div class="flex">
          ${this.renderToggle(
      this.form.displayDefaultFields,
      "displayDefaultFields",
      "formSettings_displayDefaultFields"
    )}
        </div>
        <div class="flex">
          ${p(
      this.form.displayDefaultFields,
      () => n`
              ${this.localize.term(
        "formSettings_displayDefaultFieldsDescription"
      )}
            `,
      () => n` ${Ze(this, Se, Ud).call(this)} ${Ze(this, Se, zd).call(this)} `
    )}
        </div>
      </div>
    </umb-property-layout>`;
  }
};
Xe = /* @__PURE__ */ new WeakMap();
Fs = /* @__PURE__ */ new WeakMap();
ka = /* @__PURE__ */ new WeakMap();
Se = /* @__PURE__ */ new WeakSet();
Ad = function() {
  kd(this, Xe, []);
  const t = this.form.selectedDisplayFields;
  for (let e = 0; e < t.length; e++) {
    const r = t[e];
    Tt(this, Xe).push(r.alias);
  }
  Tt(this, Fs).setModel(Tt(this, Xe));
};
Fo = function(t, e) {
  return this.form.selectedDisplayFields.some(
    (r) => r.alias === t && r.isSystem === e
  );
};
Dd = function() {
  var a;
  const t = (a = this.shadowRoot) == null ? void 0 : a.getElementById(
    "fields"
  ), e = t.value.toString(), r = structuredClone(
    this.form.selectedDisplayFields
  );
  if (e.startsWith("_system_")) {
    const i = Tt(this, ka).find(
      (o) => "_system_" + o.name === e
    );
    i && r.push({
      alias: i.name,
      caption: this.localize.term(i.labelKey),
      isSystem: !0
    });
  } else {
    const i = this.formFields.find(
      (o) => o.alias === e
    );
    i && r.push({
      alias: i.alias,
      caption: i.caption,
      isSystem: !1
    });
  }
  this.setPropertyValue("selectedDisplayFields", r), t.value = "";
};
Rd = function(t, e) {
  const r = t.target.value.toString(), a = structuredClone(
    this.form.selectedDisplayFields
  );
  a[e].caption = r || "", this.setPropertyValue("selectedDisplayFields", a);
};
Id = function(t) {
  const e = structuredClone(
    this.form.selectedDisplayFields
  );
  e.splice(t, 1), this.setPropertyValue("selectedDisplayFields", e);
};
Ud = function() {
  return n`<div>
      <uui-select
        style="width:300px"
        id="fields"
        .options=${[
    ...this.formFields.filter((t) => !Ze(this, Se, Fo).call(this, t.alias, !1)).map((t) => ({
      name: this.localize.term(t.caption),
      value: t.alias,
      group: this.localize.term("formSettings_formFields")
    })),
    ...Tt(this, ka).filter((t) => !Ze(this, Se, Fo).call(this, t.name, !0)).map((t) => ({
      name: this.localize.term(t.labelKey),
      value: `_system_${t.name}`,
      group: this.localize.term("formSettings_systemFields")
    }))
  ]}
      >
      </uui-select>
      <uui-button
        label=${this.localize.term("general_add")}
        look="secondary"
        color="default"
        @click=${Ze(this, Se, Dd)}
      ></uui-button>
    </div>`;
};
zd = function() {
  return this.form.selectedDisplayFields.length === 0 ? n` ${this.localize.term("formSettings_noSelectedDisplayFields")} ` : n`<uui-table>
          <uui-table-head>
            <uui-table-head-cell></uui-table-head-cell>
            <uui-table-head-cell
              >${this.localize.term("general_alias")}</uui-table-head-cell
            >
            <uui-table-head-cell
              >${this.localize.term("general_header")}</uui-table-head-cell
            >
            <uui-table-head-cell></uui-table-head-cell>
          </uui-table-head>
          ${this.form.selectedDisplayFields.map(
    (t, e) => n`<uui-table-row
                class="display-field-row"
                sort-unique=${t.alias}
              >
                <uui-table-cell
                  ><uui-icon name="icon-navigation"></uui-icon
                ></uui-table-cell>
                <uui-table-cell>
                  ${t.alias}
                  ${p(
      t.isSystem,
      () => n`<span
                        >(${this.localize.term("general_systemField")})</span
                      >`
    )}
                </uui-table-cell>
                <uui-table-cell>
                  ${t.isSystem ? n`<uui-input
                        id="caption"
                        name="caption"
                        .value=${t.caption}
                        @change=${(r) => Ze(this, Se, Rd).call(this, r, e)}
                        label="Caption"
                      ></uui-input>` : n`${t.caption}`}
                </uui-table-cell>
                <uui-table-cell>
                  <uui-button
                    label="Remove Field"
                    look="secondary"
                    color="default"
                    @click=${() => Ze(this, Se, Id).call(this, e)}
                    ><uui-icon name="icon-trash"></uui-icon
                  ></uui-button>
                </uui-table-cell>
              </uui-table-row>`
  )}
        </uui-table>`;
};
Md([
  m({ type: Array })
], wo.prototype, "formFields", 2);
wo = Md([
  f(vw)
], wo);
var _w = Object.getOwnPropertyDescriptor, Wd = (t) => {
  throw TypeError(t);
}, Sw = (t, e, r, a) => {
  for (var i = a > 1 ? void 0 : a ? _w(e, r) : e, o = t.length - 1, s; o >= 0; o--)
    (s = t[o]) && (i = s(i) || i);
  return i;
}, bw = (t, e, r) => e.has(t) || Wd("Cannot " + r), Fw = (t, e, r) => e.has(t) ? Wd("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), ww = (t, e, r) => (bw(t, e, "access private method"), r), Eo, Ld;
const Ew = "forms-settings-multi-page";
let mn = class extends ne {
  constructor() {
    super(...arguments), Fw(this, Eo);
  }
  render() {
    var t, e, r, a;
    return n`<umb-property-layout
      alias="multipage"
      .label=${this.localize.term("formSettings_multiPageForms")}
      .description=${this.localize.term(
      "formSettings_multiPageFormsDescription"
    )}
    >
      <div slot="editor">
        <div class="flex">
          <uui-label
            >${this.localize.term(
      "formSettings_multiPageFormsShowPaging"
    )}</uui-label
          >
          <uui-select
            id="multiPageFormsShowPaging"
            .options=${ww(this, Eo, Ld).call(this, this.form.showPagingOnMultiPageForms)}
            @change=${(i) => this.onSelectChange(i, "showPagingOnMultiPageForms")}
          >
          </uui-select>
        </div>
        <div class="flex">
          <uui-label
            >${this.localize.term(
      "formSettings_pagingDetailsFormat"
    )}</uui-label
          >
          <uui-input
            type="text"
            .label=${this.localize.term("formSettings_pagingDetailsFormat")}
            .value=${(t = this.form) == null ? void 0 : t.pagingDetailsFormat}
            @change=${(i) => this.onInputChange(i, "pagingDetailsFormat")}
          ></uui-input>
        </div>
        <div class="flex">
          <uui-label
            >${this.localize.term("formSettings_pageCaptionFormat")}</uui-label
          >
          <uui-input
            type="text"
            .label=${this.localize.term("formSettings_pageCaptionFormat")}
            .value=${(e = this.form) == null ? void 0 : e.pageCaptionFormat}
            @change=${(i) => this.onInputChange(i, "pageCaptionFormat")}
          ></uui-input>
        </div>
        ${this.renderToggle(
      (r = this.form) == null ? void 0 : r.showSummaryPageOnMultiPageForms,
      "showSummaryPageOnMultiPageForms",
      "formSettings_multiPageFormsShowSummaryPage"
    )}
        <div class="flex">
          <uui-label
            >${this.localize.term("formSettings_summaryLabel")}</uui-label
          >
          <uui-input
            type="text"
            .label=${this.localize.term("formSettings_summaryLabel")}
            .value=${(a = this.form) == null ? void 0 : a.summaryLabel}
            @change=${(i) => this.onInputChange(i, "summaryLabel")}
          ></uui-input>
        </div>
      </div>
    </umb-property-layout>`;
  }
};
Eo = /* @__PURE__ */ new WeakSet();
Ld = function(t) {
  return [
    {
      name: this.localize.term("formSettings_multiPageFormsNavigationNone"),
      value: me.NONE.toString(),
      selected: t === me.NONE.toString()
    },
    {
      name: this.localize.term(
        "formSettings_multiPageFormsNavigationShowOnTop"
      ),
      value: me.SHOW_AT_TOP.toString(),
      selected: t === me.SHOW_AT_TOP.toString()
    },
    {
      name: this.localize.term(
        "formSettings_multiPageFormsNavigationShowOnBottom"
      ),
      value: me.SHOW_AT_BOTTOM.toString(),
      selected: t === me.SHOW_AT_BOTTOM.toString()
    },
    {
      name: this.localize.term(
        "formSettings_multiPageFormsNavigationShowOnTopAndBottom"
      ),
      value: me.SHOW_AT_TOP.toString() + ", " + me.SHOW_AT_BOTTOM.toString(),
      selected: t === me.SHOW_AT_TOP.toString() + ", " + me.SHOW_AT_BOTTOM.toString()
    }
  ];
};
mn = Sw([
  f(Ew)
], mn);
var $w = Object.defineProperty, Cw = Object.getOwnPropertyDescriptor, Vd = (t) => {
  throw TypeError(t);
}, hi = (t, e, r, a) => {
  for (var i = a > 1 ? void 0 : a ? Cw(e, r) : e, o = t.length - 1, s; o >= 0; o--)
    (s = t[o]) && (i = (a ? s(e, r, i) : s(i)) || i);
  return a && i && $w(e, r, i), i;
}, ws = (t, e, r) => e.has(t) || Vd("Cannot " + r), qt = (t, e, r) => (ws(t, e, "read from private field"), r ? r.call(t) : e.get(t)), yi = (t, e, r) => e.has(t) ? Vd("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), Ka = (t, e, r, a) => (ws(t, e, "write to private field"), e.set(t, r), r), Mi = (t, e, r) => (ws(t, e, "access private method"), r), Ir, ft, Es, Lt, Nd, qd, Bd, jd;
const Tw = "form-security-table";
let At = class extends st(Dt) {
  constructor() {
    super(...arguments), yi(this, Lt), this.records = [], yi(this, Ir, "formName"), yi(this, ft, "asc"), yi(this, Es, [
      {
        key: "formName",
        label: "formSecurity_formName"
      },
      {
        key: "formCreated",
        label: "content_createDate",
        labelSuffix: "(UTC)"
      },
      {
        key: "hasAccess",
        label: "formSecurity_hasAccess"
      }
    ]);
  }
  get _allFormsAccessible() {
    return this.records.every((t) => t.hasAccess);
  }
  render() {
    return n`<div id="header">
        ${this.localize.term("formSecurity_selectAndDeselect")}
        <uui-toggle
          ?checked=${this._allFormsAccessible}
          @change=${Mi(this, Lt, Nd)}
        ></uui-toggle>
      </div>
      <uui-table>
        <uui-table-head> ${Mi(this, Lt, jd).call(this)} </uui-table-head>
        ${this.records.map(
      (t) => n`<uui-table-row>
              <uui-table-cell>
                <div>${t.formName}</div>
                <small>${t.fields}</small>
              </uui-table-cell>
              <uui-table-cell>
                <umb-localize-date
                  .date=${t.formCreated}
                  .options=${sf}
                ></umb-localize-date>
              </uui-table-cell>
              <uui-table-cell>
                <uui-toggle
                  ?checked=${t.hasAccess}
                  label=${this.localize.term("formSecurity_hasAccess")}
                  @change=${() => Mi(this, Lt, Bd).call(this, t.form)}
                ></uui-toggle>
              </uui-table-cell>
            </uui-table-row>`
    )}
      </uui-table>`;
  }
};
Ir = /* @__PURE__ */ new WeakMap();
ft = /* @__PURE__ */ new WeakMap();
Es = /* @__PURE__ */ new WeakMap();
Lt = /* @__PURE__ */ new WeakSet();
Nd = function() {
  const t = !this._allFormsAccessible;
  this.records.forEach((e) => {
    var r;
    (r = this.set) == null || r.call(this, e.form, t), e = { ...e, hasAccess: t };
  }), this.dispatchEvent(new CustomEvent("valueChange"));
};
qd = function(t) {
  qt(this, Ir) !== t ? Ka(this, ft, "asc") : Ka(this, ft, qt(this, ft) === "asc" ? "desc" : "asc"), Ka(this, Ir, t), this.records = [...this.records].sort((e, r) => {
    switch (t) {
      case "hasAccess":
        return Number(e.hasAccess) - Number(r.hasAccess);
      case "formCreated":
        return Date.parse(e.formCreated) - Date.parse(r.formCreated);
      default:
        return e[t].localeCompare(r[t]);
    }
  }), qt(this, ft) === "desc" && this.records.reverse();
};
Bd = function(t) {
  var r;
  (r = this.toggle) == null || r.call(this, t);
  let e = this.records.find((a) => a.form === t);
  e && (e = { ...e, hasAccess: !(e != null && e.hasAccess) }), this.dispatchEvent(new CustomEvent("valueChange"));
};
jd = function() {
  return n`${qt(this, Es).map(
    (t) => n`<uui-table-head-cell>
          <button @click=${() => Mi(this, Lt, qd).call(this, t.key)}>
            ${this.localize.term(t.label) + (t.labelSuffix ? ` ${t.labelSuffix}` : "")}
            <uui-symbol-sort
              ?active=${qt(this, Ir) === t.key}
              ?descending=${qt(this, ft) === "desc"}
            ></uui-symbol-sort>
          </button>
        </uui-table-head-cell>`
  )}`;
};
At.styles = x`
    #header {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      column-gap: var(--uui-size-3);
    }

    uui-table-head-cell button {
      background-color: transparent;
      color: inherit;
      border: none;
      cursor: pointer;
      font-weight: inherit;
      font-size: inherit;
      display: inline-flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      padding: var(--uui-size-5) var(--uui-size-1);
    }
  `;
hi([
  m()
], At.prototype, "set", 2);
hi([
  m()
], At.prototype, "toggle", 2);
hi([
  m({ type: Array })
], At.prototype, "records", 2);
hi([
  b()
], At.prototype, "_allFormsAccessible", 1);
At = hi([
  f(Tw)
], At);
var Ow = Object.defineProperty, Pw = Object.getOwnPropertyDescriptor, Yd = (t) => {
  throw TypeError(t);
}, Aa = (t, e, r, a) => {
  for (var i = a > 1 ? void 0 : a ? Pw(e, r) : e, o = t.length - 1, s; o >= 0; o--)
    (s = t[o]) && (i = (a ? s(e, r, i) : s(i)) || i);
  return a && i && Ow(e, r, i), i;
}, $s = (t, e, r) => e.has(t) || Yd("Cannot " + r), wr = (t, e, r) => ($s(t, e, "read from private field"), e.get(t)), pn = (t, e, r) => e.has(t) ? Yd("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), xw = (t, e, r, a) => ($s(t, e, "write to private field"), e.set(t, r), r), hn = (t, e, r) => ($s(t, e, "access private method"), r), We, ki, $o;
let nr = class extends Ee {
  constructor() {
    super(), pn(this, ki), pn(this, We), this.consumeContext(Fa, (t) => {
      var e, r;
      xw(this, We, t), this._startDate = (e = wr(this, We)) == null ? void 0 : e.oneMonthAgo(), this._endDate = (r = wr(this, We)) == null ? void 0 : r.today();
    });
  }
  render() {
    var t, e;
    return n`
      <div class="input-container">
        <uui-label for="start-date">From:</uui-label>
        <uui-input
          id="start-date"
          type="date"
          label="From"
          .max=${(t = wr(this, We)) == null ? void 0 : t.today()}
          .value=${this._startDate}
          @change=${hn(this, ki, $o)}
        ></uui-input>
      </div>
      <div class="input-container">
        <uui-label for="end-date">To: </uui-label>
        <uui-input
          id="end-date"
          type="date"
          label="To"
          .min=${this._startDate}
          .max=${(e = wr(this, We)) == null ? void 0 : e.today()}
          .value=${this._endDate}
          @change=${hn(this, ki, $o)}
        ></uui-input>
      </div>
    `;
  }
};
We = /* @__PURE__ */ new WeakMap();
ki = /* @__PURE__ */ new WeakSet();
$o = function() {
  var t;
  this._inputs.forEach((e) => {
    e.id === "start-date" ? this._startDate = e.value.toString() : e.id === "end-date" && (this._endDate = e.value.toString());
  }), (t = wr(this, We)) == null || t.setFilter({
    startDate: this._startDate,
    endDate: this._endDate
  });
};
nr.styles = [
  xn,
  x`
      :host {
        display: flex;
        gap: var(--uui-size-space-5);
      }

      .input-container {
        display: flex;
        align-items: baseline;
        column-gap: var(--uui-size-space-3);
      }
    `
];
Aa([
  b()
], nr.prototype, "_startDate", 2);
Aa([
  b()
], nr.prototype, "_endDate", 2);
Aa([
  $n("uui-input")
], nr.prototype, "_inputs", 2);
nr = Aa([
  f("form-entry-filter-date-range-selector")
], nr);
var Mw = Object.defineProperty, kw = Object.getOwnPropertyDescriptor, Gd = (t) => {
  throw TypeError(t);
}, Hd = (t, e, r, a) => {
  for (var i = a > 1 ? void 0 : a ? kw(e, r) : e, o = t.length - 1, s; o >= 0; o--)
    (s = t[o]) && (i = (a ? s(e, r, i) : s(i)) || i);
  return a && i && Mw(e, r, i), i;
}, Cs = (t, e, r) => e.has(t) || Gd("Cannot " + r), Aw = (t, e, r) => (Cs(t, e, "read from private field"), e.get(t)), fn = (t, e, r) => e.has(t) ? Gd("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), Dw = (t, e, r, a) => (Cs(t, e, "write to private field"), e.set(t, r), r), Rw = (t, e, r) => (Cs(t, e, "access private method"), r), aa, Co, Kd;
let oa = class extends Ee {
  constructor() {
    super(), fn(this, Co), this._filterText = "", fn(this, aa), this.consumeContext(Fa, (t) => {
      Dw(this, aa, t);
    });
  }
  render() {
    return n`
      <uui-input
        label="Filter entries"
        placeholder=${this.localize.term("formEntries_filterEntries")}
        .value=${this._filterText}
        @change=${Rw(this, Co, Kd)}
      ></uui-input>
    `;
  }
};
aa = /* @__PURE__ */ new WeakMap();
Co = /* @__PURE__ */ new WeakSet();
Kd = function(t) {
  var r;
  const e = t.target.value;
  this._filterText = e.toString(), (r = Aw(this, aa)) == null || r.setFilter({ filter: this._filterText });
};
oa.styles = [
  xn,
  x`
      :host,
      uui-input {
        width: 100%;
      }
    `
];
Hd([
  b()
], oa.prototype, "_filterText", 2);
oa = Hd([
  f("form-entry-filter-text")
], oa);
var Iw = Object.defineProperty, Uw = Object.getOwnPropertyDescriptor, Xd = (t) => {
  throw TypeError(t);
}, Da = (t, e, r, a) => {
  for (var i = a > 1 ? void 0 : a ? Uw(e, r) : e, o = t.length - 1, s; o >= 0; o--)
    (s = t[o]) && (i = (a ? s(e, r, i) : s(i)) || i);
  return a && i && Iw(e, r, i), i;
}, zw = (t, e, r) => e.has(t) || Xd("Cannot " + r), Ww = (t, e, r) => e.has(t) ? Xd("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), To = (t, e, r) => (zw(t, e, "access private method"), r), Cr, Jd, Oo;
const Lw = "ref-form";
let lr = class extends st(
  qm
) {
  constructor() {
    super(...arguments), Ww(this, Cr), this.selectable = !1, this._count = 0;
  }
  async connectedCallback() {
    var t, e;
    if (super.connectedCallback(), !(!this.model || !((t = this.config) != null && t.viewEntries)))
      if ("count" in this.model)
        this._count = this.model.count;
      else {
        const { data: r } = await d(
          this,
          Je.getFormByFormIdRecordMetadata({
            path: { formId: (e = this.model) == null ? void 0 : e.id }
          })
        );
        this._count = r.count;
      }
  }
  render() {
    var t, e, r;
    return n`
      <div id="open-part" tabindex="0">
        <div id="content">
          <span id="icon"><uui-icon .svg=${this.fallbackIcon}></uui-icon></span>
          <div id="info">
            <div id="name">${this.model.name}</div>
            ${this.renderDetail()}
          </div>
        </div>
      </div>
      <div id="select-border"></div>

      <slot name="actions" id="actions-container">
        <uui-action-bar>
          ${p(
      (t = this.config) == null ? void 0 : t.manageForms,
      () => To(this, Cr, Oo).call(this, "edit", "formsDashboard_editForm")
    )}
          ${p(
      (e = this.config) == null ? void 0 : e.viewEntries,
      () => To(this, Cr, Oo).call(this, "view", "formsDashboard_viewEntries")
    )}
        </uui-action-bar>
      </slot>
      ${p(
      (r = this.config) == null ? void 0 : r.viewEntries,
      () => n` <uui-tag size="s" slot="tag" color="positive"
            >${this.localize.term(
        "formsDashboard_entriesCount",
        this._count
      )}</uui-tag
          >`
    )}
    `;
  }
};
Cr = /* @__PURE__ */ new WeakSet();
Jd = function(t) {
  this.dispatchEvent(new CustomEvent(t));
};
Oo = function(t, e) {
  return n`<uui-button
      @click=${() => To(this, Cr, Jd).call(this, t)}
      label=${this.localize.term(e)}
    ></uui-button>`;
};
lr.styles = [
  ...Bm.styles,
  x`
      #open-part {
        cursor: default;
      }

      #open-part:hover #name,
      #open-part:hover #icon {
        color: var(--uui-color-text) !important;
        text-decoration: none !important;
      }

      #info {
        min-width: 150px;
      }

      #actions-container {
        margin-left: auto;
      }

      uui-action-bar {
        justify-content: end;
      }

      uui-tag {
        margin: 0 var(--uui-size-8);
      }
    `
];
Da([
  m({ type: Object })
], lr.prototype, "model", 2);
Da([
  m({ type: Object })
], lr.prototype, "config", 2);
Da([
  b()
], lr.prototype, "_count", 2);
lr = Da([
  f(Lw)
], lr);
class Vw extends Mn {
  constructor(e) {
    super(
      e,
      uu,
      Mh
    );
  }
}
var Nw = Object.defineProperty, qw = Object.getOwnPropertyDescriptor, Qd = (t) => {
  throw TypeError(t);
}, It = (t, e, r, a) => {
  for (var i = a > 1 ? void 0 : a ? qw(e, r) : e, o = t.length - 1, s; o >= 0; o--)
    (s = t[o]) && (i = (a ? s(e, r, i) : s(i)) || i);
  return a && i && Nw(e, r, i), i;
}, Zd = (t, e, r) => e.has(t) || Qd("Cannot " + r), Bt = (t, e, r) => (Zd(t, e, "read from private field"), r ? r.call(t) : e.get(t)), Xa = (t, e, r) => e.has(t) ? Qd("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), cr = (t, e, r) => (Zd(t, e, "access private method"), r), yt, et, em, tm, Ts, rm, im, am, om;
const Bw = "forms-input-form";
let Ae = class extends Pn(
  Ee,
  ""
) {
  constructor() {
    super(), Xa(this, et), this.multiple = !1, this.allowedFolders = [], this.allowedForms = [], Xa(this, yt, new Vw(this)), Xa(this, Ts, (t) => !t.isFolder && (this.allowedForms.length === 0 || this.allowedForms.indexOf(t.unique) > -1) && (this.allowedFolders.length === 0 || this.allowedFolders.some(
      (e) => On(t.path).includes(e)
    ))), this.observe(
      Bt(this, yt).selectedItems,
      (t) => this._items = t
    );
  }
  get selection() {
    return Bt(this, yt).getSelection();
  }
  set selection(t) {
    Bt(this, yt).setSelection(t ?? []);
  }
  async connectedCallback() {
    super.connectedCallback();
    const { data: t } = await d(
      this,
      se.getSecurityUserCurrentFormSecurity({
        query: { includeFormFieldDetails: !1 }
      })
    );
    this._userSecurity = t.userSecurity;
  }
  getFormElement() {
  }
  render() {
    return n`${cr(this, et, im).call(this)} ${cr(this, et, am).call(this)}`;
  }
};
yt = /* @__PURE__ */ new WeakMap();
et = /* @__PURE__ */ new WeakSet();
em = function(t) {
  history.pushState(
    {},
    "",
    `/umbraco/section/forms/workspace/${oe}/edit/${t}`
  );
};
tm = function(t) {
  history.pushState(
    {},
    "",
    `/umbraco/section/forms/workspace/${oe}/edit/${t}/view/entries`
  );
};
Ts = /* @__PURE__ */ new WeakMap();
rm = function() {
  Bt(this, yt).openPicker({
    hideTreeRoot: !0,
    multiple: this.multiple,
    pickableFilter: Bt(this, Ts)
  });
};
im = function() {
  var t;
  if ((t = this._items) != null && t.length)
    return n`<uui-ref-list>
      ${Tn(
      this._items,
      (e) => e.unique,
      (e) => cr(this, et, om).call(this, e)
    )}
    </uui-ref-list>`;
};
am = function() {
  return n`<uui-button
      id="add-button"
      look="placeholder"
      @click=${cr(this, et, rm)}
      label=${this.localize.term("general_choose")}
    ></uui-button>`;
};
om = function(t) {
  var e, r;
  if (t.unique)
    return n`
      <uui-ref-node name=${t.name}>
        <umb-icon slot="icon" name="icon-umb-contour"></umb-icon>
        <uui-action-bar slot="actions">
          ${p(
      (e = this._userSecurity) == null ? void 0 : e.manageForms,
      () => n`<uui-button
                @click=${() => cr(this, et, em).call(this, t.unique)}
                label=${this.localize.term("general_edit")}
              ></uui-button>`
    )}
          ${p(
      (r = this._userSecurity) == null ? void 0 : r.viewEntries,
      () => n`<uui-button
                @click=${() => cr(this, et, tm).call(this, t.unique)}
                label=${this.localize.term("general_open")}
              ></uui-button>`
    )}
          <uui-button
            @click=${() => Bt(this, yt).requestRemoveItem(t.unique)}
            label=${this.localize.term(
      "formPicker_removeItemButtonLabel",
      t.name
    )}
          >
            ${this.localize.term("general_remove")}
          </uui-button>
        </uui-action-bar>
      </uui-ref-node>
    `;
};
Ae.styles = [
  x`
      #add-button {
        width: 100%;
      }

      uui-ref-node[drag-placeholder] {
        opacity: 0.2;
      }
    `
];
It([
  m({ type: Array })
], Ae.prototype, "selection", 1);
It([
  m({ type: Boolean })
], Ae.prototype, "multiple", 2);
It([
  m({ type: Array })
], Ae.prototype, "allowedFolders", 2);
It([
  m({ type: Array })
], Ae.prototype, "allowedForms", 2);
It([
  b()
], Ae.prototype, "_userSecurity", 2);
It([
  b()
], Ae.prototype, "_items", 2);
Ae = It([
  f(Bw)
], Ae);
class jw extends Mn {
  constructor(e) {
    super(e, du, wh);
  }
}
var Yw = Object.defineProperty, Gw = Object.getOwnPropertyDescriptor, sm = (t) => {
  throw TypeError(t);
}, Os = (t, e, r, a) => {
  for (var i = a > 1 ? void 0 : a ? Gw(e, r) : e, o = t.length - 1, s; o >= 0; o--)
    (s = t[o]) && (i = (a ? s(e, r, i) : s(i)) || i);
  return a && i && Yw(e, r, i), i;
}, nm = (t, e, r) => e.has(t) || sm("Cannot " + r), gt = (t, e, r) => (nm(t, e, "read from private field"), r ? r.call(t) : e.get(t)), Ja = (t, e, r) => e.has(t) ? sm("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), sa = (t, e, r) => (nm(t, e, "access private method"), r), Ve, Ps, jt, lm, cm, um, dm;
const Hw = "forms-input-folder";
let Ur = class extends Pn(
  Ee,
  ""
) {
  constructor() {
    super(), Ja(this, jt), Ja(this, Ve, new jw(this)), Ja(this, Ps, (t) => t.isFolder), this.observe(
      gt(this, Ve).selection,
      (t) => this.value = t.join(",")
    ), this.observe(
      gt(this, Ve).selectedItems,
      (t) => this._items = t
    );
  }
  get selection() {
    return gt(this, Ve).getSelection();
  }
  set selection(t) {
    gt(this, Ve).setSelection(t ?? []);
  }
  set value(t) {
    this.selection = On(t);
  }
  get value() {
    return this.selection.join(",");
  }
  connectedCallback() {
    super.connectedCallback();
  }
  getFormElement() {
  }
  render() {
    return n`${sa(this, jt, cm).call(this)} ${sa(this, jt, um).call(this)}`;
  }
};
Ve = /* @__PURE__ */ new WeakMap();
Ps = /* @__PURE__ */ new WeakMap();
jt = /* @__PURE__ */ new WeakSet();
lm = function() {
  gt(this, Ve).openPicker({
    pickableFilter: gt(this, Ps)
  });
};
cm = function() {
  var t;
  if ((t = this._items) != null && t.length)
    return n`<uui-ref-list>
      ${Tn(
      this._items,
      (e) => e.unique,
      (e) => sa(this, jt, dm).call(this, e)
    )}
    </uui-ref-list>`;
};
um = function() {
  return n`<uui-button
      id="add-button"
      look="placeholder"
      @click=${sa(this, jt, lm)}
      label=${this.localize.term("general_choose")}
    ></uui-button>`;
};
dm = function(t) {
  if (t.unique)
    return n`
      <uui-ref-node name=${t.name}>
        <umb-icon slot="icon" name="icon-folder"></umb-icon>
        <uui-action-bar slot="actions">
          <uui-button
            @click=${() => gt(this, Ve).requestRemoveItem(t.unique)}
            label=${this.localize.term(
      "formPicker_removeItemButtonLabel",
      t.name
    )}
          >
            ${this.localize.term("general_remove")}
          </uui-button>
        </uui-action-bar>
      </uui-ref-node>
    `;
};
Ur.styles = [
  x`
      #add-button {
        width: 100%;
      }

      uui-ref-node[drag-placeholder] {
        opacity: 0.2;
      }
    `
];
Os([
  m()
], Ur.prototype, "value", 1);
Os([
  b()
], Ur.prototype, "_items", 2);
Ur = Os([
  f(Hw)
], Ur);
var ti;
class Kw {
  constructor(e) {
    h(this, ti);
    y(this, ti, e);
  }
  async getCollection() {
    const { data: e, error: r } = await d(
      c(this, ti),
      Op.getTheme()
    );
    if (r)
      return { error: r };
    const a = e.map((i) => ({
      name: i.name,
      entityType: "forms-theme",
      unique: i.name
    }));
    return {
      data: {
        items: a,
        total: a.length
      }
    };
  }
}
ti = new WeakMap();
var ri;
class Xw {
  constructor(e) {
    h(this, ri);
    y(this, ri, new Kw(e));
  }
  async requestCollection() {
    return c(this, ri).getCollection();
  }
  destroy() {
  }
}
ri = new WeakMap();
var Jw = Object.defineProperty, Qw = Object.getOwnPropertyDescriptor, mm = (t) => {
  throw TypeError(t);
}, xs = (t, e, r, a) => {
  for (var i = a > 1 ? void 0 : a ? Qw(e, r) : e, o = t.length - 1, s; o >= 0; o--)
    (s = t[o]) && (i = (a ? s(e, r, i) : s(i)) || i);
  return a && i && Jw(e, r, i), i;
}, Zw = (t, e, r) => e.has(t) || mm("Cannot " + r), eE = (t, e, r) => e.has(t) ? mm("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), yn = (t, e, r) => (Zw(t, e, "access private method"), r), Ai, pm, hm;
const tE = "forms-input-theme";
let na = class extends Ee {
  constructor() {
    super(...arguments), eE(this, Ai), this._options = [], this.value = "";
  }
  async connectedCallback() {
    super.connectedCallback(), await yn(this, Ai, pm).call(this);
  }
  render() {
    return n`
      <uui-select
        name="themePicker"
        label="Theme picker"
        @change=${yn(this, Ai, hm)}
        .options=${this._options.map((t) => ({
      name: t,
      value: t,
      selected: t === this.value
    }))}
      >
      </uui-select>
    `;
  }
};
Ai = /* @__PURE__ */ new WeakSet();
pm = async function() {
  const t = new Xw(this), { data: e } = await t.requestCollection();
  this._options = (e == null ? void 0 : e.items.map((r) => r.name)) ?? [];
};
hm = function(t) {
  const e = t.target.value.toString();
  e !== this.value && (this.value = e, this.dispatchEvent(
    new CustomEvent("change", { composed: !0, bubbles: !0 })
  ));
};
xs([
  b()
], na.prototype, "_options", 2);
xs([
  m()
], na.prototype, "value", 2);
na = xs([
  f(tE)
], na);
const rE = [
  ...Cb,
  ...ob,
  ...Ym,
  ...nb,
  ...Eb,
  ...Tb
], BE = (t, e) => {
  e.registerMany(rE), t.consumeContext(Vm, async (r) => {
    if (!r) return;
    const a = r.getOpenApiConfiguration();
    u.setConfig({
      baseUrl: (a == null ? void 0 : a.base) ?? "",
      auth: (a == null ? void 0 : a.token) ?? void 0,
      credentials: (a == null ? void 0 : a.credentials) ?? "same-origin"
    });
  });
};
export {
  Ep as $,
  ha as A,
  mt as B,
  li as C,
  sf as D,
  UE as E,
  Dn as F,
  Pt as G,
  qE as H,
  Qb as I,
  Di as J,
  hu as K,
  zE as L,
  VE as M,
  Yi as N,
  _u as O,
  Pf as P,
  Vy as Q,
  Je as R,
  se as S,
  di as T,
  LE as U,
  os as V,
  hr as W,
  FS as X,
  ss as Y,
  mi as Z,
  xS as _,
  An as a,
  nl as a$,
  Tp as a0,
  nu as a1,
  ue as a2,
  dr as a3,
  Do as a4,
  Ig as a5,
  Fa as a6,
  xh as a7,
  wa as a8,
  BE as a9,
  mu as aA,
  Xv as aB,
  Jv as aC,
  nr as aD,
  oa as aE,
  lr as aF,
  Ae as aG,
  Ur as aH,
  na as aI,
  wh as aJ,
  Xn as aK,
  Jn as aL,
  Qn as aM,
  Eh as aN,
  Zn as aO,
  $h as aP,
  el as aQ,
  Ch as aR,
  tl as aS,
  Th as aT,
  rl as aU,
  Oh as aV,
  il as aW,
  Ph as aX,
  al as aY,
  ol as aZ,
  sl as a_,
  Dr as aa,
  Hi as ab,
  Ki as ac,
  Xi as ad,
  Ji as ae,
  Zi as af,
  ea as ag,
  kt as ah,
  _e as ai,
  or as aj,
  at as ak,
  sr as al,
  ot as am,
  ne as an,
  on as ao,
  sn as ap,
  nn as aq,
  ln as ar,
  cn as as,
  un as at,
  So as au,
  ia as av,
  wo as aw,
  mn as ax,
  At as ay,
  no as az,
  ee as b,
  ll as b0,
  Mh as b1,
  cl as b2,
  kh as b3,
  ul as b4,
  Ii as b5,
  zi as b6,
  ve as b7,
  Or as b8,
  Wi as b9,
  Pr as ba,
  xt as bb,
  de as bc,
  Mt as bd,
  ao as be,
  rr as bf,
  kr as bg,
  it as bh,
  ir as bi,
  Ns as bj,
  De as c,
  si as d,
  Zs as e,
  en as f,
  Gg as g,
  NE as h,
  WE as i,
  ih as j,
  pr as k,
  bg as l,
  Ar as m,
  Xp as n,
  Sy as o,
  oi as p,
  Rt as q,
  _g as r,
  gg as s,
  vg as t,
  Ea as u,
  Le as v,
  Ag as w,
  Py as x,
  cg as y,
  oe as z
};
//# sourceMappingURL=index.js.map
