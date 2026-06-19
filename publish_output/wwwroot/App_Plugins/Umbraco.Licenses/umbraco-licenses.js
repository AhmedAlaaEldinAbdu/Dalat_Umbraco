import { UMB_AUTH_CONTEXT as Ce } from "@umbraco-cms/backoffice/auth";
import { css as K, property as ce, state as q, customElement as Q, when as g, repeat as F, html as p, ifDefined as ke } from "@umbraco-cms/backoffice/external/lit";
import { tryExecute as de } from "@umbraco-cms/backoffice/resources";
import { UMB_NOTIFICATION_CONTEXT as je } from "@umbraco-cms/backoffice/notification";
import { UmbLitElement as X } from "@umbraco-cms/backoffice/lit-element";
const Ue = {
  bodySerializer: (e) => JSON.stringify(
    e,
    (t, s) => typeof s == "bigint" ? s.toString() : s
  )
}, Te = ({
  onRequest: e,
  onSseError: t,
  onSseEvent: s,
  responseTransformer: i,
  responseValidator: r,
  sseDefaultRetryDelay: l,
  sseMaxRetryAttempts: a,
  sseMaxRetryDelay: o,
  sseSleepFn: c,
  url: u,
  ...n
}) => {
  let f;
  const T = c ?? ((d) => new Promise((y) => setTimeout(y, d)));
  return { stream: async function* () {
    let d = l ?? 3e3, y = 0;
    const E = n.signal ?? new AbortController().signal;
    for (; !E.aborted; ) {
      y++;
      const A = n.headers instanceof Headers ? n.headers : new Headers(n.headers);
      f !== void 0 && A.set("Last-Event-ID", f);
      try {
        const O = {
          redirect: "follow",
          ...n,
          body: n.serializedBody,
          headers: A,
          signal: E
        };
        let w = new Request(u, O);
        e && (w = await e(u, O));
        const v = await (n.fetch ?? globalThis.fetch)(w);
        if (!v.ok)
          throw new Error(
            `SSE failed: ${v.status} ${v.statusText}`
          );
        if (!v.body) throw new Error("No body in SSE response");
        const $ = v.body.pipeThrough(new TextDecoderStream()).getReader();
        let M = "";
        const se = () => {
          try {
            $.cancel();
          } catch {
          }
        };
        E.addEventListener("abort", se);
        try {
          for (; ; ) {
            const { done: ze, value: Se } = await $.read();
            if (ze) break;
            M += Se;
            const re = M.split(`

`);
            M = re.pop() ?? "";
            for (const Ee of re) {
              const Oe = Ee.split(`
`), B = [];
              let ie;
              for (const _ of Oe)
                if (_.startsWith("data:"))
                  B.push(_.replace(/^data:\s*/, ""));
                else if (_.startsWith("event:"))
                  ie = _.replace(/^event:\s*/, "");
                else if (_.startsWith("id:"))
                  f = _.replace(/^id:\s*/, "");
                else if (_.startsWith("retry:")) {
                  const ne = Number.parseInt(
                    _.replace(/^retry:\s*/, ""),
                    10
                  );
                  Number.isNaN(ne) || (d = ne);
                }
              let C, ae = !1;
              if (B.length) {
                const _ = B.join(`
`);
                try {
                  C = JSON.parse(_), ae = !0;
                } catch {
                  C = _;
                }
              }
              ae && (r && await r(C), i && (C = await i(C))), s?.({
                data: C,
                event: ie,
                id: f,
                retry: d
              }), B.length && (yield C);
            }
          }
        } finally {
          E.removeEventListener("abort", se), $.releaseLock();
        }
        break;
      } catch (O) {
        if (t?.(O), a !== void 0 && y >= a)
          break;
        const w = Math.min(
          d * 2 ** (y - 1),
          o ?? 3e4
        );
        await T(w);
      }
    }
  }() };
}, Ae = (e) => {
  switch (e) {
    case "label":
      return ".";
    case "matrix":
      return ";";
    case "simple":
      return ",";
    default:
      return "&";
  }
}, Le = (e) => {
  switch (e) {
    case "form":
      return ",";
    case "pipeDelimited":
      return "|";
    case "spaceDelimited":
      return "%20";
    default:
      return ",";
  }
}, Ie = (e) => {
  switch (e) {
    case "label":
      return ".";
    case "matrix":
      return ";";
    case "simple":
      return ",";
    default:
      return "&";
  }
}, ue = ({
  allowReserved: e,
  explode: t,
  name: s,
  style: i,
  value: r
}) => {
  if (!t) {
    const o = (e ? r : r.map((c) => encodeURIComponent(c))).join(Le(i));
    switch (i) {
      case "label":
        return `.${o}`;
      case "matrix":
        return `;${s}=${o}`;
      case "simple":
        return o;
      default:
        return `${s}=${o}`;
    }
  }
  const l = Ae(i), a = r.map((o) => i === "label" || i === "simple" ? e ? o : encodeURIComponent(o) : H({
    allowReserved: e,
    name: s,
    value: o
  })).join(l);
  return i === "label" || i === "matrix" ? l + a : a;
}, H = ({
  allowReserved: e,
  name: t,
  value: s
}) => {
  if (s == null)
    return "";
  if (typeof s == "object")
    throw new Error(
      "Deeply-nested arrays/objects aren’t supported. Provide your own `querySerializer()` to handle these."
    );
  return `${t}=${e ? s : encodeURIComponent(s)}`;
}, he = ({
  allowReserved: e,
  explode: t,
  name: s,
  style: i,
  value: r,
  valueOnly: l
}) => {
  if (r instanceof Date)
    return l ? r.toISOString() : `${s}=${r.toISOString()}`;
  if (i !== "deepObject" && !t) {
    let c = [];
    Object.entries(r).forEach(([n, f]) => {
      c = [
        ...c,
        n,
        e ? f : encodeURIComponent(f)
      ];
    });
    const u = c.join(",");
    switch (i) {
      case "form":
        return `${s}=${u}`;
      case "label":
        return `.${u}`;
      case "matrix":
        return `;${s}=${u}`;
      default:
        return u;
    }
  }
  const a = Ie(i), o = Object.entries(r).map(
    ([c, u]) => H({
      allowReserved: e,
      name: i === "deepObject" ? `${s}[${c}]` : c,
      value: u
    })
  ).join(a);
  return i === "label" || i === "matrix" ? a + o : o;
}, De = /\{[^{}]+\}/g, qe = ({ path: e, url: t }) => {
  let s = t;
  const i = t.match(De);
  if (i)
    for (const r of i) {
      let l = !1, a = r.substring(1, r.length - 1), o = "simple";
      a.endsWith("*") && (l = !0, a = a.substring(0, a.length - 1)), a.startsWith(".") ? (a = a.substring(1), o = "label") : a.startsWith(";") && (a = a.substring(1), o = "matrix");
      const c = e[a];
      if (c == null)
        continue;
      if (Array.isArray(c)) {
        s = s.replace(
          r,
          ue({ explode: l, name: a, style: o, value: c })
        );
        continue;
      }
      if (typeof c == "object") {
        s = s.replace(
          r,
          he({
            explode: l,
            name: a,
            style: o,
            value: c,
            valueOnly: !0
          })
        );
        continue;
      }
      if (o === "matrix") {
        s = s.replace(
          r,
          `;${H({
            name: a,
            value: c
          })}`
        );
        continue;
      }
      const u = encodeURIComponent(
        o === "label" ? `.${c}` : c
      );
      s = s.replace(r, u);
    }
  return s;
}, Pe = ({
  baseUrl: e,
  path: t,
  query: s,
  querySerializer: i,
  url: r
}) => {
  const l = r.startsWith("/") ? r : `/${r}`;
  let a = (e ?? "") + l;
  t && (a = qe({ path: t, url: a }));
  let o = s ? i(s) : "";
  return o.startsWith("?") && (o = o.substring(1)), o && (a += `?${o}`), a;
};
function Be(e) {
  const t = e.body !== void 0;
  if (t && e.bodySerializer)
    return "serializedBody" in e ? e.serializedBody !== void 0 && e.serializedBody !== "" ? e.serializedBody : null : e.body !== "" ? e.body : null;
  if (t)
    return e.body;
}
const Ne = async (e, t) => {
  const s = typeof t == "function" ? await t(e) : t;
  if (s)
    return e.scheme === "bearer" ? `Bearer ${s}` : e.scheme === "basic" ? `Basic ${btoa(s)}` : s;
}, fe = ({
  parameters: e = {},
  ...t
} = {}) => (i) => {
  const r = [];
  if (i && typeof i == "object")
    for (const l in i) {
      const a = i[l];
      if (a == null)
        continue;
      const o = e[l] || t;
      if (Array.isArray(a)) {
        const c = ue({
          allowReserved: o.allowReserved,
          explode: !0,
          name: l,
          style: "form",
          value: a,
          ...o.array
        });
        c && r.push(c);
      } else if (typeof a == "object") {
        const c = he({
          allowReserved: o.allowReserved,
          explode: !0,
          name: l,
          style: "deepObject",
          value: a,
          ...o.object
        });
        c && r.push(c);
      } else {
        const c = H({
          allowReserved: o.allowReserved,
          name: l,
          value: a
        });
        c && r.push(c);
      }
    }
  return r.join("&");
}, We = (e) => {
  if (!e)
    return "stream";
  const t = e.split(";")[0]?.trim();
  if (t) {
    if (t.startsWith("application/json") || t.endsWith("+json"))
      return "json";
    if (t === "multipart/form-data")
      return "formData";
    if (["application/", "audio/", "image/", "video/"].some(
      (s) => t.startsWith(s)
    ))
      return "blob";
    if (t.startsWith("text/"))
      return "text";
  }
}, Ve = (e, t) => t ? !!(e.headers.has(t) || e.query?.[t] || e.headers.get("Cookie")?.includes(`${t}=`)) : !1, Re = async ({
  security: e,
  ...t
}) => {
  for (const s of e) {
    if (Ve(t, s.name))
      continue;
    const i = await Ne(s, t.auth);
    if (!i)
      continue;
    const r = s.name ?? "Authorization";
    switch (s.in) {
      case "query":
        t.query || (t.query = {}), t.query[r] = i;
        break;
      case "cookie":
        t.headers.append("Cookie", `${r}=${i}`);
        break;
      case "header":
      default:
        t.headers.set(r, i);
        break;
    }
  }
}, oe = (e) => Pe({
  baseUrl: e.baseUrl,
  path: e.path,
  query: e.query,
  querySerializer: typeof e.querySerializer == "function" ? e.querySerializer : fe(e.querySerializer),
  url: e.url
}), le = (e, t) => {
  const s = { ...e, ...t };
  return s.baseUrl?.endsWith("/") && (s.baseUrl = s.baseUrl.substring(0, s.baseUrl.length - 1)), s.headers = pe(e.headers, t.headers), s;
}, He = (e) => {
  const t = [];
  return e.forEach((s, i) => {
    t.push([i, s]);
  }), t;
}, pe = (...e) => {
  const t = new Headers();
  for (const s of e) {
    if (!s)
      continue;
    const i = s instanceof Headers ? He(s) : Object.entries(s);
    for (const [r, l] of i)
      if (l === null)
        t.delete(r);
      else if (Array.isArray(l))
        for (const a of l)
          t.append(r, a);
      else l !== void 0 && t.set(
        r,
        typeof l == "object" ? JSON.stringify(l) : l
      );
  }
  return t;
};
class G {
  constructor() {
    this.fns = [];
  }
  clear() {
    this.fns = [];
  }
  eject(t) {
    const s = this.getInterceptorIndex(t);
    this.fns[s] && (this.fns[s] = null);
  }
  exists(t) {
    const s = this.getInterceptorIndex(t);
    return !!this.fns[s];
  }
  getInterceptorIndex(t) {
    return typeof t == "number" ? this.fns[t] ? t : -1 : this.fns.indexOf(t);
  }
  update(t, s) {
    const i = this.getInterceptorIndex(t);
    return this.fns[i] ? (this.fns[i] = s, t) : !1;
  }
  use(t) {
    return this.fns.push(t), this.fns.length - 1;
  }
}
const Me = () => ({
  error: new G(),
  request: new G(),
  response: new G()
}), Fe = fe({
  allowReserved: !1,
  array: {
    explode: !0,
    style: "form"
  },
  object: {
    explode: !0,
    style: "deepObject"
  }
}), Ge = {
  "Content-Type": "application/json"
}, me = (e = {}) => ({
  ...Ue,
  headers: Ge,
  parseAs: "auto",
  querySerializer: Fe,
  ...e
}), Je = (e = {}) => {
  let t = le(me(), e);
  const s = () => ({ ...t }), i = (u) => (t = le(t, u), s()), r = Me(), l = async (u) => {
    const n = {
      ...t,
      ...u,
      fetch: u.fetch ?? t.fetch ?? globalThis.fetch,
      headers: pe(t.headers, u.headers),
      serializedBody: void 0
    };
    n.security && await Re({
      ...n,
      security: n.security
    }), n.requestValidator && await n.requestValidator(n), n.body !== void 0 && n.bodySerializer && (n.serializedBody = n.bodySerializer(n.body)), (n.body === void 0 || n.serializedBody === "") && n.headers.delete("Content-Type");
    const f = oe(n);
    return { opts: n, url: f };
  }, a = async (u) => {
    const { opts: n, url: f } = await l(u), T = {
      redirect: "follow",
      ...n,
      body: Be(n)
    };
    let z = new Request(f, T);
    for (const m of r.request.fns)
      m && (z = await m(z, n));
    const P = n.fetch;
    let d = await P(z);
    for (const m of r.response.fns)
      m && (d = await m(d, z, n));
    const y = {
      request: z,
      response: d
    };
    if (d.ok) {
      const m = (n.parseAs === "auto" ? We(d.headers.get("Content-Type")) : n.parseAs) ?? "json";
      if (d.status === 204 || d.headers.get("Content-Length") === "0") {
        let $;
        switch (m) {
          case "arrayBuffer":
          case "blob":
          case "text":
            $ = await d[m]();
            break;
          case "formData":
            $ = new FormData();
            break;
          case "stream":
            $ = d.body;
            break;
          case "json":
          default:
            $ = {};
            break;
        }
        return n.responseStyle === "data" ? $ : {
          data: $,
          ...y
        };
      }
      let v;
      switch (m) {
        case "arrayBuffer":
        case "blob":
        case "formData":
        case "json":
        case "text":
          v = await d[m]();
          break;
        case "stream":
          return n.responseStyle === "data" ? d.body : {
            data: d.body,
            ...y
          };
      }
      return m === "json" && (n.responseValidator && await n.responseValidator(v), n.responseTransformer && (v = await n.responseTransformer(v))), n.responseStyle === "data" ? v : {
        data: v,
        ...y
      };
    }
    const E = await d.text();
    let A;
    try {
      A = JSON.parse(E);
    } catch {
    }
    const O = A ?? E;
    let w = O;
    for (const m of r.error.fns)
      m && (w = await m(O, d, z, n));
    if (w = w || {}, n.throwOnError)
      throw w;
    return n.responseStyle === "data" ? void 0 : {
      error: w,
      ...y
    };
  }, o = (u) => (n) => a({ ...n, method: u }), c = (u) => async (n) => {
    const { opts: f, url: T } = await l(n);
    return Te({
      ...f,
      body: f.body,
      headers: f.headers,
      method: u,
      onRequest: async (z, P) => {
        let d = new Request(z, P);
        for (const y of r.request.fns)
          y && (d = await y(d, f));
        return d;
      },
      url: T
    });
  };
  return {
    buildUrl: oe,
    connect: o("CONNECT"),
    delete: o("DELETE"),
    get: o("GET"),
    getConfig: s,
    head: o("HEAD"),
    interceptors: r,
    options: o("OPTIONS"),
    patch: o("PATCH"),
    post: o("POST"),
    put: o("PUT"),
    request: a,
    setConfig: i,
    sse: {
      connect: c("CONNECT"),
      delete: c("DELETE"),
      get: c("GET"),
      head: c("HEAD"),
      options: c("OPTIONS"),
      patch: c("PATCH"),
      post: c("POST"),
      put: c("PUT"),
      trace: c("TRACE")
    },
    trace: o("TRACE")
  };
}, W = Je(me({
  baseUrl: "http://localhost:63430",
  throwOnError: !0
}));
class be {
  static getUmbracoBackofficeApiLicensesAll(t) {
    return (t?.client ?? W).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/backoffice/api/licenses/all",
      ...t
    });
  }
  static postUmbracoBackofficeApiLicensesValidate(t) {
    return (t?.client ?? W).post({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/backoffice/api/licenses/validate",
      ...t,
      headers: {
        "Content-Type": "application/json",
        ...t?.headers
      }
    });
  }
  static postUmbracoLicensesValidatedLicenseRelay(t) {
    return (t?.client ?? W).post({
      url: "/umbraco/licenses/validatedLicense/relay",
      ...t,
      headers: {
        "Content-Type": "application/json",
        ...t?.headers
      }
    });
  }
}
const Ke = [
  {
    type: "dashboard",
    alias: "Umb.Licenses.Dashboard",
    name: "Umbraco Licenses Dashboard",
    elementName: "umb-licenses-dashboard",
    js: () => Promise.resolve().then(() => ut),
    meta: {
      label: "#dashboardTabs_licenses",
      pathname: "licenses"
    },
    conditions: [
      {
        alias: "Umb.Condition.SectionAlias",
        match: "Umb.Section.Settings"
      }
    ]
  }
], Qe = [...Ke], Xe = [
  {
    type: "localization",
    alias: "Licenses.Localization.En_US",
    weight: -100,
    name: "English (US)",
    meta: {
      culture: "en"
    },
    js: () => import("./en-us.js")
  },
  {
    type: "localization",
    alias: "Licenses.Localization.En_GB",
    weight: -100,
    name: "English (UK)",
    meta: {
      culture: "en-gb"
    },
    js: () => import("./en-gb.js")
  }
], Ze = [...Xe];
var Ye = Object.defineProperty, et = Object.getOwnPropertyDescriptor, ye = (e) => {
  throw TypeError(e);
}, U = (e, t, s, i) => {
  for (var r = i > 1 ? void 0 : i ? et(t, s) : t, l = e.length - 1, a; l >= 0; l--)
    (a = e[l]) && (r = (i ? a(t, s, r) : a(r)) || r);
  return i && r && Ye(t, s, r), r;
}, Z = (e, t, s) => t.has(e) || ye("Cannot " + s), L = (e, t, s) => (Z(e, t, "read from private field"), s ? s.call(e) : t.get(e)), N = (e, t, s) => t.has(e) ? ye("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, s), Y = (e, t, s, i) => (Z(e, t, "write to private field"), t.set(e, s), s), b = (e, t, s) => (Z(e, t, "access private method"), s), V, R, j, h, ve, ge, ee, _e, we, x;
const tt = "umb-license-card";
let S = class extends X {
  constructor() {
    super(...arguments), N(this, h), N(this, V), this._loading = !1, this._features = [], this._variables = [], N(this, R), N(this, j);
  }
  connectedCallback() {
    super.connectedCallback(), this.consumeContext(je, (e) => {
      Y(this, V, e);
    }), this._features = Object.entries(this.model?.features ?? {}).map((e) => ({
      name: e[0],
      active: e[1]
    })), this._variables = Object.entries(this.model?.variables ?? {}).map((e) => ({
      name: e[0],
      value: e[1]
    })), b(this, h, ee).call(this), b(this, h, ge).call(this), b(this, h, ve).call(this);
  }
  render() {
    return p`
      <uui-box ?valid=${!L(this, j)}>
        <span slot="headline">${this.model?.productId}</span>
        <uui-button
          slot="header-actions"
          id="validateBtn"
          look="secondary"
          compact
          @click=${b(this, h, _e)}
          label=${this.localize.term("licenses_validate")}
          .state=${this._loading ? "waiting" : void 0}
        ></uui-button>
        <dl>
          ${g(
      this.model?.licenseKey,
      () => b(this, h, x).call(this, "licenses_licenseKey", "License key", this.model?.licenseKey)
    )}
          ${g(
      this.model?.domains?.length,
      () => b(this, h, x).call(this, "licenses_licensedDomains", "Licensed domains", p`
              <ul>
                ${F(
        this.model?.domains ?? [],
        (e) => e,
        (e) => p`
                    <li>
                      <span>
                        ${e}
                        ${g(
          e === L(this, R),
          () => p`<uui-tag color="positive"><umb-localize key="general_current">Current</umb-localize></uui-tag>`
        )}
                      </span>
                    </li>
                  `
      )}
              </ul>
            `, "domains")
    )}
          ${g(
      this._features.length,
      () => b(this, h, x).call(this, "licenses_features", "Features", p`
              <ul>
                ${F(
        this._features,
        (e) => e.name,
        (e) => p`
                    <li class="feature-${e.active ? "active" : "inactive"}">
                      ${e.name}
                      <uui-icon
                        .name=${e.active ? "umb:check" : "umb:delete"}
                        class="license-icon color-${e.active ? "green" : "red"}"
                        ></uui-icon>
                    </li>
                  `
      )}
              </ul>
            `, "features")
    )}
          ${g(
      this._variables.length,
      () => b(this, h, x).call(this, "licenses_variables", "Variables", p`
              <ul>
                ${F(
        this._variables,
        (e) => e.name,
        (e) => p`<li>${e.name}: ${e.value}</li>`
      )}
              </ul>
            `, "variables")
    )}
          ${g(
      this.model?.tier,
      () => b(this, h, x).call(this, "licenses_tier", "Tier", this.model?.tier)
    )}
          ${g(
      this.model?.expiresOn,
      () => b(this, h, x).call(this, "licenses_expiresOn", "Expires on", this.model?.expiresOn)
    )}
          ${g(
      this.model?.lastValidatedOn,
      () => b(this, h, x).call(this, "licenses_lastValidated", "Last validated", this.model?.lastValidatedOn)
    )}
          ${g(
      this.model?.lastSuccessfullyValidatedOn,
      () => b(this, h, x).call(this, "licenses_lastSuccessfullyValidated", "Last successfully validated", this.model?.lastSuccessfullyValidatedOn)
    )}
          ${g(
      L(this, j),
      () => b(this, h, x).call(this, "general_error", "Error", L(this, j))
    )}
        </dl>
      </uui-box>
    `;
  }
};
V = /* @__PURE__ */ new WeakMap();
R = /* @__PURE__ */ new WeakMap();
j = /* @__PURE__ */ new WeakMap();
h = /* @__PURE__ */ new WeakSet();
ve = function() {
  Y(this, R, this.model?.domains?.find(
    (e) => e.startsWith("*") ? this.applicationUrl?.endsWith(e.substring(1)) : this.applicationUrl === e
  ));
};
ge = function() {
  this.model?.lastResult?.startsWith("Valid") || Y(this, j, this.localize.term(
    `licenses_validation${this.model?.lastResult}`,
    [this.model?.productId]
  ));
};
ee = function() {
  ["lastValidatedOn", "lastSuccessfullyValidatedOn", "expiresOn"].forEach(
    (e) => {
      this.model?.[e] && (this.model?.[e].endsWith("Z") || (this.model[e] += "Z"), this.model[e] = this.localize.date(this.model[e], {
        dateStyle: "medium",
        timeStyle: "short"
      }));
    }
  );
};
_e = async function() {
  this._loading = !0;
  const { data: e } = await de(
    this,
    be.postUmbracoBackofficeApiLicensesValidate({ body: { productId: this.model?.productId } }),
    {
      disableNotifications: !0
    }
  );
  this._loading = !1, e.license && (e.success && (this.model = { ...this.model, ...e.license }, b(this, h, ee).call(this)), b(this, h, we).call(this, e.status, e.success));
};
we = function(e, t) {
  e && L(this, V)?.peek(t ? "positive" : "danger", {
    data: {
      message: this.localize.term(`licenses_validation${e}`, [
        this.model?.productId
      ])
    }
  });
};
x = function(e, t, s, i) {
  return p`
      <div id=${ke(i)}>
        <dt><umb-localize .key=${e}>${t}</umb-localize></dt>
        <dd>${s}</dd>
      </div>`;
};
S.styles = [
  K`
      :host {
        display: flex;
      }

      uui-box {
        --uui-color-divider-standalone: var(--uui-color-danger);

        width: 100%;
        border: 1px solid var(--uui-color-danger);
        box-shadow: 0 1px 3px rgba(191, 33, 78, 0.12),
          0 1px 2px rgba(191, 33, 78, 0.24);
      }

      uui-box[valid] {
        --uui-color-divider-standalone: var(--uui-color-positive);

        border-color: var(--uui-color-positive);
        box-shadow: 0 1px 3px rgba(25, 134, 74, 0.12),
          0 1px 2px rgba(25, 134, 74, 0.24);
      }

      ul,
      dl {
        margin: 0;
      }

      dl {
        list-style: none;
      }

      dl > div {
        display: flex;
        column-gap: var(--uui-size-3);
      }

      dl > div + div {
        margin-top: var(--uui-size-4);
      }

      dt {
        font-weight: 700;
        line-height: 1.3;
        min-width: 100px;
        max-width: 100px;
      }

      dd {
        word-break: break-word;
        line-height: 1.3;
      }

      dd ul {
        padding-left: 0;
      }

      li {
        overflow: hidden;
        text-overflow: ellipsis;
      }

      li span {
        white-space: nowrap;
        display: flex;
        align-items: center;
        gap: var(--uui-size-2);
      }

      .license-icon {
        width: 1.4em;
        height: 1.4em;
      }

      .license-icon[name="umb:alert"] {
        color: var(--uui-color-danger-standalone);
      }

      uui-tag {
        --uui-type-small-size: 10px;
        --uui-size-space-1: 0;
        padding: 0 2px;
        text-transform: uppercase;
      }

      #domains,
      #features,
      #variables {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      #domains dd,
      #features dd,
      #variables dd {
        overflow: hidden;
      }
    `
];
U([
  ce({ type: Object })
], S.prototype, "model", 2);
U([
  ce()
], S.prototype, "applicationUrl", 2);
U([
  q()
], S.prototype, "_loading", 2);
U([
  q()
], S.prototype, "_features", 2);
U([
  q()
], S.prototype, "_variables", 2);
S = U([
  Q(tt)
], S);
var st = Object.defineProperty, rt = Object.getOwnPropertyDescriptor, $e = (e) => {
  throw TypeError(e);
}, te = (e, t, s, i) => {
  for (var r = i > 1 ? void 0 : i ? rt(t, s) : t, l = e.length - 1, a; l >= 0; l--)
    (a = e[l]) && (r = (i ? a(t, s, r) : a(r)) || r);
  return i && r && st(t, s, r), r;
}, xe = (e, t, s) => t.has(e) || $e("Cannot " + s), J = (e, t, s) => (xe(e, t, "read from private field"), s ? s.call(e) : t.get(e)), it = (e, t, s) => t.has(e) ? $e("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, s), at = (e, t, s, i) => (xe(e, t, "write to private field"), t.set(e, s), s), k;
const nt = "umb-licenses-grid";
let I = class extends X {
  constructor() {
    super(...arguments), this._licenses = [], this._loaded = !1, it(this, k);
  }
  async connectedCallback() {
    super.connectedCallback();
    const { data: e, error: t } = await de(
      this,
      be.getUmbracoBackofficeApiLicensesAll(),
      {
        disableNotifications: !0
      }
    );
    if (t) {
      this._loaded = !0;
      return;
    }
    this._licenses = e.licenses, at(this, k, e.applicationUrl), this._loaded = !0;
  }
  render() {
    return p`
      ${g(
      !this._loaded,
      () => p`<div class="relative" style="grid-column: 1 / 5; margin-top: var(--uui-size-5);"><uui-loader></uui-loader></div>`,
      () => p`
          <div>
            <umb-localize
              key="licenses_validationUrl"
              .tokens=${[J(this, k)]}
              >Application URL used in validation request</umb-localize
            >: <strong>${J(this, k)}</strong>
          </div>
          ${g(
        this._licenses.length,
        () => p`
              <div id="grid">
              ${this._licenses.map(
          (e) => p`
                <umb-license-card
                  .model=${e}
                  .applicationUrl=${J(this, k)}
                ></umb-license-card>`
        )}
              </div>
            `,
        () => p`
              <umb-empty-state>
                <umb-localize key="content_listViewNoItems">There are no items show in the list.</umb-localize>
              </umb-empty-state>
            `
      )}
        `
    )}
    `;
  }
};
k = /* @__PURE__ */ new WeakMap();
I.styles = [
  K`
      :host {
        container-type: inline-size;
        display: block;
      }

      #grid {
        --column-count: 1;
        display: grid;
        grid-gap: var(--uui-size-7);
        grid-template-columns: repeat(var(--column-count), minmax(0, 1fr));
        margin-top: var(--uui-size-layout-1);
      }

      @container (min-width: 800px) {
        #grid {
          --column-count: 2;
        }
      }

      @container (min-width: 1100px) {
        #grid {
          --column-count: 3;
        }
      }

      @container (min-width: 1500px) {
        #grid {
          --column-count: 4;
        }
      }

      umb-empty-state {
        margin: var(--uui-size-layout-3) 0 var(--uui-size-layout-2);
      }
    `
];
te([
  q()
], I.prototype, "_licenses", 2);
te([
  q()
], I.prototype, "_loaded", 2);
I = te([
  Q(nt)
], I);
var ot = Object.getOwnPropertyDescriptor, lt = (e, t, s, i) => {
  for (var r = i > 1 ? void 0 : i ? ot(t, s) : t, l = e.length - 1, a; l >= 0; l--)
    (a = e[l]) && (r = a(r) || r);
  return r;
};
const ct = "umb-licenses-dashboard";
let D = class extends X {
  render() {
    return p`
      <uui-box .headline=${this.localize.term("licenses_registeredLicenses")}>
        <umb-localize key="licenses_registeredLicensesDescription"
          >Allows you to view the details of each license and provides tools for
          requesting revalidation.</umb-localize
        >
        <umb-licenses-grid></umb-licenses-grid>
      </uui-box>
    `;
  }
};
D.styles = [
  K`
      :host {
        display: block;
        padding: var(--uui-size-layout-1);
      }
    `
];
D = lt([
  Q(ct)
], D);
const dt = D, ut = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get LicensesDashboardElement() {
    return D;
  },
  default: dt
}, Symbol.toStringTag, { value: "Module" })), ht = [
  ...Qe,
  ...Ze
], vt = (e, t) => {
  t.registerMany(ht), e.consumeContext(Ce, async (s) => {
    if (!s) return;
    const i = s.getOpenApiConfiguration();
    W.setConfig({
      baseUrl: i.base,
      auth: await s.getLatestToken(),
      credentials: i.credentials
    });
  });
};
export {
  S as LicenseCardElement,
  D as LicensesDashboardElement,
  I as LicensesGridElement,
  vt as onInit
};
//# sourceMappingURL=umbraco-licenses.js.map
