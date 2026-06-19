var Qn = (t) => {
  throw TypeError(t);
};
var hn = (t, e, n) => e.has(t) || Qn("Cannot " + n);
var u = (t, e, n) => (hn(t, e, "read from private field"), n ? n.call(t) : e.get(t)), m = (t, e, n) => e.has(t) ? Qn("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, n), y = (t, e, n, s) => (hn(t, e, "write to private field"), s ? s.call(t, n) : e.set(t, n), n), Rt = (t, e, n) => (hn(t, e, "access private method"), n);
import { UMB_AUTH_CONTEXT as Os } from "@umbraco-cms/backoffice/auth";
import { css as M, property as A, customElement as L, LitElement as et, html as p, ifDefined as xs, nothing as T, classMap as _t, state as _, when as Wt, query as ni } from "@umbraco-cms/backoffice/external/lit";
import { UmbElementMixin as $t } from "@umbraco-cms/backoffice/element-api";
import { USYNC_SIGNALR_CONTEXT_TOKEN as Rn, HandlerStatus as rt, ChangeType as he, USYNC_DETAILS_MODAL as si, USYNC_IMPORT_SINGLE_MODAL as ri, uSyncConstants as D, uSyncActionRepository as Ns, USYNC_CORE_CONTEXT_TOKEN as Ds, uSyncWorkspaceContext as ii, uSyncActionDataSource as oi, USyncSettingsDataSource as ai, uSyncMigrationDataSource as ci, ActionsService as it, MigrationsService as un, SettingsService as Ot, uSyncMenuElement as li, SyncLegacyFilesCondition as hi } from "@jumoo/uSync";
import { UMB_MODAL_MANAGER_CONTEXT as Qt, UmbModalBaseElement as en, UmbModalToken as tn } from "@umbraco-cms/backoffice/modal";
import { diffWords as ui } from "@umbraco-cms/backoffice/utils";
import { UmbLitElement as tt } from "@umbraco-cms/backoffice/lit-element";
import { UmbObjectState as ue, UmbArrayState as xt, UmbBooleanState as dn } from "@umbraco-cms/backoffice/observable-api";
import { UmbContextToken as Ms } from "@umbraco-cms/backoffice/context-api";
import { UmbControllerBase as On } from "@umbraco-cms/backoffice/class-api";
import * as es from "@jumoo/uSync/external/signalr";
import { UMB_WORKSPACE_CONTEXT as di } from "@umbraco-cms/backoffice/workspace";
import { UmbTextStyles as pi } from "@umbraco-cms/backoffice/style";
import { tryExecute as B } from "@umbraco-cms/backoffice/resources";
import { UmbConditionBase as Ls, umbExtensionsRegistry as Us } from "@umbraco-cms/backoffice/extension-registry";
import { UmbExtensionsManifestInitializer as fi } from "@umbraco-cms/backoffice/extension-api";
import { UMB_SECTION_CONTEXT as zs } from "@umbraco-cms/backoffice/section";
import { UmbId as gi } from "@umbraco-cms/backoffice/id";
import { UmbTemporaryFileManager as _i, TemporaryFileStatus as Hs } from "@umbraco-cms/backoffice/temporary-file";
const mi = "change", yi = "uploaded";
class Si extends Event {
  constructor(e) {
    super(mi, {
      bubbles: !0,
      composed: !0,
      cancelable: !1
    }), this.file = e;
  }
}
class vi extends Event {
  constructor(e) {
    super(yi, {
      bubbles: !0,
      composed: !0,
      cancelable: !1
    }), this.result = e;
  }
}
const bi = "usync-action-click";
class wi extends Event {
  constructor(e) {
    super(bi, {
      bubbles: !0,
      composed: !0,
      cancelable: !1
    }), this.button = e;
  }
}
const Ei = "perform-action";
class Ci extends Event {
  constructor(e, n, s, r, i) {
    super(Ei, {
      bubbles: !0,
      composed: !0,
      cancelable: !1
    }), this.group = e, this.key = n, this.force = s, this.clean = r, this.file = i;
  }
}
var $i = Object.defineProperty, Ai = Object.getOwnPropertyDescriptor, Bs = (t) => {
  throw TypeError(t);
}, nn = (t, e, n, s) => {
  for (var r = s > 1 ? void 0 : s ? Ai(e, n) : e, i = t.length - 1, o; i >= 0; i--)
    (o = t[i]) && (r = (s ? o(e, n, r) : o(r)) || r);
  return s && r && $i(e, n, r), r;
}, ki = (t, e, n) => e.has(t) || Bs("Cannot " + n), Ii = (t, e, n) => e.has(t) ? Bs("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, n), Pi = (t, e, n) => (ki(t, e, "access private method"), n), En, Ws;
let Fe = class extends et {
  constructor() {
    super(...arguments), Ii(this, En), this.disabled = !1;
  }
  render() {
    var e, n;
    const t = this.group.buttons.map((s) => p`
				<usync-action-button
					.button=${s}
					.disabled=${this.disabled}
					state=${xs(this.state)}
					@usync-action-click=${(r) => Pi(this, En, Ws).call(this, r, this.group)}></usync-action-button>
			`);
    return p`
			<uui-box class="action-box ${this.disabled ? "disabled" : ""}">
				<div class="box-content">
					<h2 class="box-heading">${(e = this.group) == null ? void 0 : e.groupName}</h2>
					<umb-icon name=${(n = this.group) == null ? void 0 : n.icon}></umb-icon>
					<div class="box-buttons">${t}</div>
				</div>
			</uui-box>
		`;
  }
};
En = /* @__PURE__ */ new WeakSet();
Ws = function(t, e) {
  t != null && t.button && this.dispatchEvent(
    new Ci(
      e,
      t.button.key,
      t.button.force,
      t.button.clean,
      t.button.file
    )
  );
};
Fe.styles = M`
		:host {
			flex-grow: 1;
		}

		.action-box {
			transition: opacity 0.2s ease-in-out;
		}

		.box-content {
			display: flex;
			flex-direction: column;
			align-items: center;
		}

		.box-heading {
			font-size: var(--uui-size-8);
			margin: 0;
		}

		umb-icon {
			margin: var(--uui-size-8) 0 var(--uui-size-10);
			font-size: var(--uui-type-h2-size);
			color: var(--uui-color-text-alt);
		}

		uui-button {
			margin: 0 var(--uui-size-space-2);
			font-size: var(--uui-size-6);
		}

		.box-buttons {
			margin: var(--uui-size-space-2) 0;
		}

		.disabled {
			opacity: 0.4;
		}
	`;
nn([
  A({ type: Object })
], Fe.prototype, "group", 2);
nn([
  A({ type: String })
], Fe.prototype, "state", 2);
nn([
  A({ type: Boolean })
], Fe.prototype, "disabled", 2);
Fe = nn([
  L("usync-action-box")
], Fe);
var Ti = Object.defineProperty, Ri = Object.getOwnPropertyDescriptor, js = (t) => {
  throw TypeError(t);
}, Pe = (t, e, n, s) => {
  for (var r = s > 1 ? void 0 : s ? Ri(e, n) : e, i = t.length - 1, o; i >= 0; i--)
    (o = t[i]) && (r = (s ? o(e, n, r) : o(r)) || r);
  return s && r && Ti(e, n, r), r;
}, Oi = (t, e, n) => e.has(t) || js("Cannot " + n), xi = (t, e, n) => e.has(t) ? js("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, n), Ni = (t, e, n) => (Oi(t, e, "access private method"), n), Cn, Vs;
let te = class extends $t(et) {
  constructor() {
    super(), xi(this, Cn), this.title = "", this.complete = !1, this.showProgress = !0, this.consumeContext(Rn, (t) => {
      t && (this.observe(t.update, (e) => {
        this.updateMsg = e;
      }), this.observe(t.add, (e) => {
        this.addMsg = e;
      }));
    });
  }
  render() {
    var a, d, h, f;
    let t = this.actions;
    if ((!this.actions || this.actions.length === 0) && (t = (a = this.addMsg) == null ? void 0 : a.handlers), !t) return T;
    let e = 0;
    const s = 100 / t.length, r = (((d = this.updateMsg) == null ? void 0 : d.count) ?? 0) / (((h = this.updateMsg) == null ? void 0 : h.total) ?? 1);
    let i = t == null ? void 0 : t.map((S) => (S.status == rt.COMPLETE && e++, p`
				<div
					class="action 
                    ${S.status == rt.COMPLETE ? "complete" : ""} 
                    ${S.status == rt.PROCESSING ? "working" : ""}">
					<div class="icon-holder">
						<uui-icon .name=${S.icon ?? "icon-box"}></uui-icon>
						${this.renderBadge(S)}
					</div>
					<h4>${S.name ?? "unknown"}</h4>
				</div>
			`)), o = this.showProgress ? e * s + r * s - s : 0;
    this.complete ? Ni(this, Cn, Vs).call(this) : this.showProgress = !0;
    const c = { hidden: !this.showProgress };
    return p`
			<uui-box>
				<h2>${this.title}</h2>
				<div class="action-list">${i}</div>
				<div class="update-box">${(f = this.updateMsg) == null ? void 0 : f.message}</div>
				<uui-progress-bar
					progress=${o}
					class=${_t(c)}></uui-progress-bar>
			</uui-box>
		`;
  }
  renderBadge(t) {
    if (t.status == rt.PENDING) return;
    if (t.status == rt.PROCESSING)
      return p`<uui-badge color="positive" look="default">
				<uui-icon name="icon-circle-dotted" class="rotating"></uui-icon
			></uui-badge>`;
    const e = t.inError ? "warning" : "positive", n = t.inError ? "Some errors occured duing import" : "Changes imported successfully";
    return !this.complete || t.changes == 0 ? p`<uui-badge .color=${e} look="default" title=${n}
				><uui-icon name="icon-check"></uui-icon
			></uui-badge>` : p`<uui-badge .color=${e} title=${n}>${t.changes}</uui-badge>`;
  }
};
Cn = /* @__PURE__ */ new WeakSet();
Vs = function() {
  window.setTimeout(() => {
    this.showProgress = !1;
  }, 2e3);
};
te.styles = M`
		:host {
			display: block;
		}

		h2 {
			text-align: center;
			margin: 0;
		}

		.action-list {
			margin-top: var(--uui-size-space-4);
			padding: var(--uui-size-space-4) 0;
			display: flex;
			flex-wrap: wrap;
			justify-content: center;
		}

		.action {
			display: flex;
			flex-direction: column;
			align-items: center;
			min-width: var(--uui-size-layout-5);
			color: var(--uui-color-text-alt);
			opacity: 0.67;
			margin: var(--uui-size-space-4) 0 var(--uui-size-space-6);
		}

		.action h4 {
			margin: var(--uui-size-space-4) 0;
		}

		.icon-holder {
			position: relative;
			padding: 0 var(--uui-size-7);
		}

		.rotating {
			animation: spin-animation 2s infinite;
			animation-timing-function: linear;
			display: inline-block;
		}

		@keyframes spin-animation {
			0% {
				transform: rotate(360deg);
			}
			100% {
				transform: rotate(0deg);
			}
		}

		.action uui-icon {
			font-size: var(--uui-size-12);
		}

		.action uui-badge uui-icon {
			font-size: var(--uui-type-h4-size);
		}

		.complete {
			color: var(--uui-color-default-emphasis);
		}

		.working {
			color: var(--uui-color-positive);
			opacity: 1;
		}

		.update-box {
			font-weight: bold;
			text-align: center;
		}

		uui-progress-bar {
			padding: 0;
			margin: 0;
		}

		.hidden {
			opacity: 0;
		}
	`;
Pe([
  _()
], te.prototype, "updateMsg", 2);
Pe([
  _()
], te.prototype, "addMsg", 2);
Pe([
  A({ type: String })
], te.prototype, "title", 2);
Pe([
  A({ type: Array })
], te.prototype, "actions", 2);
Pe([
  A({ type: Boolean })
], te.prototype, "complete", 2);
Pe([
  _()
], te.prototype, "showProgress", 2);
te = Pe([
  L("usync-progress-box")
], te);
var Di = Object.defineProperty, Mi = Object.getOwnPropertyDescriptor, Fs = (t) => {
  throw TypeError(t);
}, nt = (t, e, n, s) => {
  for (var r = s > 1 ? void 0 : s ? Mi(e, n) : e, i = t.length - 1, o; i >= 0; i--)
    (o = t[i]) && (r = (s ? o(e, n, r) : o(r)) || r);
  return s && r && Di(e, n, r), r;
}, xn = (t, e, n) => e.has(t) || Fs("Cannot " + n), Li = (t, e, n) => (xn(t, e, "read from private field"), e.get(t)), ts = (t, e, n) => e.has(t) ? Fs("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, n), Ui = (t, e, n, s) => (xn(t, e, "write to private field"), e.set(t, n), n), ns = (t, e, n) => (xn(t, e, "access private method"), n), jt, Dt, qs, Gs;
let pe = class extends $t(et) {
  constructor() {
    super(), ts(this, Dt), ts(this, jt), this.results = [], this.hideResultBar = !1, this.hideActions = !1, this.showAll = !1, this.changeCount = 0, this.consumeContext(Qt, (t) => {
      Ui(this, jt, t);
    });
  }
  groupBy(t, e) {
    return t.reduce((n, s) => {
      const r = e(s), i = n[r] || [];
      return i.push(s), { ...n, [r]: i };
    }, {});
  }
  render() {
    var n, s, r;
    this.changeCount = ((n = this.results) == null ? void 0 : n.filter((i) => i.change !== he.NO_CHANGE).length) ?? 0;
    const t = this.groupBy(this.results || [], (i) => i.itemType), e = [];
    for (const i in t) {
      if ((t[i].filter((a) => a.change !== he.NO_CHANGE).length ?? 0) === 0 && !this.showAll) continue;
      const c = p`<usync-result-group
				.groupName=${i}
				.results=${t[i]}
				.showAll=${this.showAll}
				@show-detail=${ns(this, Dt, Gs)}></usync-result-group> `;
      e.push(c);
    }
    return this.changeCount == 0 && !this.showAll ? p`
					${this.renderResultBar(((s = this.results) == null ? void 0 : s.length) || 0, this.changeCount)}
					<div class="empty">
						<umb-localize key="uSync_noChange"></umb-localize>
					</div>
				` : p`<div id="result-box">
					${this.renderResultBar(((r = this.results) == null ? void 0 : r.length) || 0, this.changeCount)}
					${e}
				</div>`;
  }
  renderResultBar(t, e) {
    if (this.hideResultBar) return T;
    const n = e === 0 ? "uSync_noChangeCount" : "uSync_changeCount";
    return p`<div class="result-header">
			<uui-toggle
				.label=${this.localize.term("uSync_showAll")}
				?checked=${this.showAll}
				@change=${ns(this, Dt, qs)}></uui-toggle>
			<umb-localize .key=${n} .args=${[t, e]}
				>${e}/${t} items</umb-localize
			>
		</div>`;
  }
};
jt = /* @__PURE__ */ new WeakMap();
Dt = /* @__PURE__ */ new WeakSet();
qs = function() {
  this.showAll = !this.showAll;
};
Gs = async function(t) {
  var s;
  if (console.debug("Showing detail for action:", t.action), t.action.change == he.EXPORT) return;
  const e = (s = Li(this, jt)) == null ? void 0 : s.open(this, si, {
    data: {
      item: t.action,
      showActions: !this.hideActions && (t.action.change == he.CREATE || t.action.change == he.UPDATE || t.action.change == he.IMPORT)
    }
  });
  await (e == null ? void 0 : e.onSubmit().catch(() => {
  }));
};
pe.styles = M`
		:host {
			display: block;
			margin: var(--uui-size-space-4) 0;
			display: flex;
			flex-direction: column;
			gap: var(--uui-size-space-4);
		}

		#result-box {
			display: flex;
			flex-direction: column;
			gap: var(--uui-size-space-4);
		}

		uui-table {
			position: relative;
			z-index: 100;
		}

		.result-header {
			display: flex;
			justify-content: space-between;
			padding: var(--uui-size-space-4);
			border: 1px solid var(--uui-color-border);
			padding: var(--uui-size-space-4);
		}

		.result-header h3 {
			margin: 0;
			padding: 0;
		}

		.empty {
			padding: var(--uui-size-20);
			font-size: var(--uui-type-h5-size);
			text-align: center;
			font-weight: 900;
		}

		.error {
			background-color: #fce4ec;
		}
	`;
nt([
  A({ type: Array })
], pe.prototype, "results", 2);
nt([
  A({ type: Boolean })
], pe.prototype, "hideResultBar", 2);
nt([
  A({ type: Boolean })
], pe.prototype, "hideActions", 2);
nt([
  _()
], pe.prototype, "showAll", 2);
nt([
  _()
], pe.prototype, "changeCount", 2);
pe = nt([
  L("usync-results")
], pe);
var zi = Object.defineProperty, Hi = Object.getOwnPropertyDescriptor, Ys = (t) => {
  throw TypeError(t);
}, Ks = (t, e, n, s) => {
  for (var r = s > 1 ? void 0 : s ? Hi(e, n) : e, i = t.length - 1, o; i >= 0; i--)
    (o = t[i]) && (r = (s ? o(e, n, r) : o(r)) || r);
  return s && r && zi(e, n, r), r;
}, Bi = (t, e, n) => e.has(t) || Ys("Cannot " + n), Wi = (t, e, n) => e.has(t) ? Ys("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, n), ss = (t, e, n) => (Bi(t, e, "access private method"), n), Mt, $n;
let Vt = class extends $t(et) {
  constructor() {
    super(...arguments), Wi(this, Mt);
  }
  render() {
    var t, e;
    return ((t = this.item) == null ? void 0 : t.change) == he.CREATE ? this.render_create() : ((e = this.item) == null ? void 0 : e.details.length) ?? !1 ? this.renderChangeTable() : this.renderNoChanges();
  }
  renderChangeTable() {
    return p`
			<uui-table>
				<uui-table-head>
					<uui-table-head-cell>
						<umb-localize key="uSync_changeAction">Action</umb-localize>
					</uui-table-head-cell>
					<uui-table-head-cell>
						<umb-localize key="uSync_changeItem">Item</umb-localize>
					</uui-table-head-cell>
					<uui-table-head-cell>
						<umb-localize key="uSync_changeDiffrence">Difference</umb-localize>
					</uui-table-head-cell>
				</uui-table-head>
				${this.render_details()}
			</uui-table>
		`;
  }
  renderNoChanges() {
    var t;
    return p`
			<div class="change-box">
				<h3>
					<umb-localize key="uSync_noChanges${(t = this.item) == null ? void 0 : t.change}"
						>No changes</umb-localize
					>
				</h3>
				${this.renderMessage()}
			</div>
		`;
  }
  render_create() {
    return p`
			<div class="change-box">
				<h3>
					<umb-localize key="uSync_changeCreate">This item is being created</umb-localize>
				</h3>
			</div>
		`;
  }
  renderMessage() {
    var n, s, r, i, o;
    const t = ((s = (n = this.item) == null ? void 0 : n.message) == null ? void 0 : s.length) ?? !1 ? (r = this.item) == null ? void 0 : r.message : ((i = this.item) == null ? void 0 : i.change) == he.IMPORT ? "No changes were made but the item was imported" : "...", e = { error: ((o = this.item) == null ? void 0 : o.success) == !1 };
    return p`<div class="${_t(e)}">${t}</div> `;
  }
  render_details() {
    var e;
    var t = (e = this.item) == null ? void 0 : e.details.map((n) => {
      const s = ss(this, Mt, $n).call(this, n.oldValue), r = ss(this, Mt, $n).call(this, n.newValue), o = ui(s, r).map((c) => c.added ? p`<ins>${c.value}</ins>` : c.removed ? p`<del>${c.value}</del>` : p`<span>${c.value}</span>`);
      return p`
				<uui-table-row>
					<uui-table-cell>${n.name}</uui-table-cell>
					<uui-table-cell>${n.change}</uui-table-cell>
					<uui-table-cell class="detail-data">
						<pre>${o}</pre>
					</uui-table-cell>
				</uui-table-row>
			`;
    });
    return t;
  }
  render_changes() {
  }
};
Mt = /* @__PURE__ */ new WeakSet();
$n = function(t) {
  try {
    return JSON.stringify(JSON.parse(t ?? ""), null, 1);
  } catch {
    return t ?? "";
  }
};
Vt.styles = M`
		:host {
			display: block;
			margin: var(--uui-size-space-4) 0;
		}

		.change-box {
			display: block;
			padding: var(
				--uui-box-header-padding,
				var(--uui-size-space-4, 12px) var(--uui-size-space-5, 18px)
			);
		}

		.change-box h3 {
			margin: 0;
		}

		.error {
			color: var(--uui-color-danger);
			margin-top: var(--uui-size-space-2);
		}

		uui-table-cell {
			vertical-align: top;
		}

		uui-table-cell pre {
			margin: 0;
			padding: 0;
		}

		pre ins {
			color: var(--uui-color-positive);
		}

		pre del {
			color: var(--uui-color-danger);
		}
	`;
Ks([
  A({ type: Object })
], Vt.prototype, "item", 2);
Vt = Ks([
  L("usync-change-view")
], Vt);
var ji = /* @__PURE__ */ ((t) => (t.STANDARD = "Standard", t.VAR_ARGS = "VarArgs", t.ANY = "Any", t.HAS_THIS = "HasThis", t.EXPLICIT_THIS = "ExplicitThis", t))(ji || {}), Vi = /* @__PURE__ */ ((t) => (t.NO_CHANGE = "NoChange", t.CREATE = "Create", t.UPDATE = "Update", t.DELETE = "Delete", t.ERROR = "Error", t.WARNING = "Warning", t))(Vi || {}), Y = /* @__PURE__ */ ((t) => (t.NO_CHANGE = "NoChange", t.CREATE = "Create", t.IMPORT = "Import", t.EXPORT = "Export", t.UPDATE = "Update", t.DELETE = "Delete", t.WILL_CHANGE = "WillChange", t.INFORMATION = "Information", t.ROLLEDBACK = "Rolledback", t.FAIL = "Fail", t.IMPORT_FAIL = "ImportFail", t.MISMATCH = "Mismatch", t.PARENT_MISSING = "ParentMissing", t.HIDDEN = "Hidden", t.CLEAN = "Clean", t.REMOVED = "Removed", t))(Y || {}), Fi = /* @__PURE__ */ ((t) => (t.NONE = "None", t.SPECIAL_NAME = "SpecialName", t.RT_SPECIAL_NAME = "RTSpecialName", t.RESERVED_MASK = "ReservedMask", t))(Fi || {}), qi = /* @__PURE__ */ ((t) => (t.DEFAULT = "Default", t.INFO = "Info", t.ERROR = "Error", t.SUCCESS = "Success", t.WARNING = "Warning", t))(qi || {}), Gi = /* @__PURE__ */ ((t) => (t.PRIVATE_SCOPE = "PrivateScope", t.PRIVATE = "Private", t.FAM_AND_ASSEM = "FamANDAssem", t.ASSEMBLY = "Assembly", t.FAMILY = "Family", t.FAM_OR_ASSEM = "FamORAssem", t.PUBLIC = "Public", t.FIELD_ACCESS_MASK = "FieldAccessMask", t.STATIC = "Static", t.INIT_ONLY = "InitOnly", t.LITERAL = "Literal", t.NOT_SERIALIZED = "NotSerialized", t.HAS_FIELD_RVA = "HasFieldRVA", t.SPECIAL_NAME = "SpecialName", t.RT_SPECIAL_NAME = "RTSpecialName", t.HAS_FIELD_MARSHAL = "HasFieldMarshal", t.PINVOKE_IMPL = "PinvokeImpl", t.HAS_DEFAULT = "HasDefault", t.RESERVED_MASK = "ReservedMask", t))(Gi || {}), Yi = /* @__PURE__ */ ((t) => (t.NONE = "None", t.COVARIANT = "Covariant", t.CONTRAVARIANT = "Contravariant", t.VARIANCE_MASK = "VarianceMask", t.REFERENCE_TYPE_CONSTRAINT = "ReferenceTypeConstraint", t.NOT_NULLABLE_VALUE_TYPE_CONSTRAINT = "NotNullableValueTypeConstraint", t.DEFAULT_CONSTRUCTOR_CONSTRAINT = "DefaultConstructorConstraint", t.SPECIAL_CONSTRAINT_MASK = "SpecialConstraintMask", t.ALLOW_BY_REF_LIKE = "AllowByRefLike", t))(Yi || {}), Ki = /* @__PURE__ */ ((t) => (t.PENDING = "Pending", t.PROCESSING = "Processing", t.COMPLETE = "Complete", t.ERROR = "Error", t))(Ki || {}), Xi = /* @__PURE__ */ ((t) => (t.SEQUENTIAL = "Sequential", t.EXPLICIT = "Explicit", t.AUTO = "Auto", t))(Xi || {}), Ji = /* @__PURE__ */ ((t) => (t.CONSTRUCTOR = "Constructor", t.EVENT = "Event", t.FIELD = "Field", t.METHOD = "Method", t.PROPERTY = "Property", t.TYPE_INFO = "TypeInfo", t.CUSTOM = "Custom", t.NESTED_TYPE = "NestedType", t.ALL = "All", t))(Ji || {}), Zi = /* @__PURE__ */ ((t) => (t.PRIVATE_SCOPE = "PrivateScope", t.REUSE_SLOT = "ReuseSlot", t.PRIVATE = "Private", t.FAM_AND_ASSEM = "FamANDAssem", t.ASSEMBLY = "Assembly", t.FAMILY = "Family", t.FAM_OR_ASSEM = "FamORAssem", t.PUBLIC = "Public", t.MEMBER_ACCESS_MASK = "MemberAccessMask", t.UNMANAGED_EXPORT = "UnmanagedExport", t.STATIC = "Static", t.FINAL = "Final", t.VIRTUAL = "Virtual", t.HIDE_BY_SIG = "HideBySig", t.NEW_SLOT = "NewSlot", t.VTABLE_LAYOUT_MASK = "VtableLayoutMask", t.CHECK_ACCESS_ON_OVERRIDE = "CheckAccessOnOverride", t.ABSTRACT = "Abstract", t.SPECIAL_NAME = "SpecialName", t.RT_SPECIAL_NAME = "RTSpecialName", t.PINVOKE_IMPL = "PinvokeImpl", t.HAS_SECURITY = "HasSecurity", t.REQUIRE_SEC_OBJECT = "RequireSecObject", t.RESERVED_MASK = "ReservedMask", t))(Zi || {}), Qi = /* @__PURE__ */ ((t) => (t.IL = "IL", t.MANAGED = "Managed", t.NATIVE = "Native", t.OPTIL = "OPTIL", t.CODE_TYPE_MASK = "CodeTypeMask", t.RUNTIME = "Runtime", t.MANAGED_MASK = "ManagedMask", t.UNMANAGED = "Unmanaged", t.NO_INLINING = "NoInlining", t.FORWARD_REF = "ForwardRef", t.SYNCHRONIZED = "Synchronized", t.NO_OPTIMIZATION = "NoOptimization", t.PRESERVE_SIG = "PreserveSig", t.AGGRESSIVE_INLINING = "AggressiveInlining", t.AGGRESSIVE_OPTIMIZATION = "AggressiveOptimization", t.INTERNAL_CALL = "InternalCall", t.ASYNC = "Async", t.MAX_METHOD_IMPL_VAL = "MaxMethodImplVal", t))(Qi || {}), eo = /* @__PURE__ */ ((t) => (t.NONE = "None", t.IN = "In", t.OUT = "Out", t.LCID = "Lcid", t.RETVAL = "Retval", t.OPTIONAL = "Optional", t.HAS_DEFAULT = "HasDefault", t.HAS_FIELD_MARSHAL = "HasFieldMarshal", t.RESERVED3 = "Reserved3", t.RESERVED4 = "Reserved4", t.RESERVED_MASK = "ReservedMask", t))(eo || {}), to = /* @__PURE__ */ ((t) => (t.NONE = "None", t.SPECIAL_NAME = "SpecialName", t.RT_SPECIAL_NAME = "RTSpecialName", t.HAS_DEFAULT = "HasDefault", t.RESERVED2 = "Reserved2", t.RESERVED3 = "Reserved3", t.RESERVED4 = "Reserved4", t.RESERVED_MASK = "ReservedMask", t))(to || {}), no = /* @__PURE__ */ ((t) => (t.NONE = "None", t.LEVEL1 = "Level1", t.LEVEL2 = "Level2", t))(no || {}), so = /* @__PURE__ */ ((t) => (t.NORMAL = "Normal", t.ROOT = "Root", t.PRODUCTION = "Production", t))(so || {}), ro = /* @__PURE__ */ ((t) => (t.NORMAL = "Normal", t.BACKGROUND = "Background", t))(ro || {}), io = /* @__PURE__ */ ((t) => (t.NOT_PUBLIC = "NotPublic", t.AUTO_LAYOUT = "AutoLayout", t.ANSI_CLASS = "AnsiClass", t.CLASS = "Class", t.PUBLIC = "Public", t.NESTED_PUBLIC = "NestedPublic", t.NESTED_PRIVATE = "NestedPrivate", t.NESTED_FAMILY = "NestedFamily", t.NESTED_ASSEMBLY = "NestedAssembly", t.NESTED_FAM_AND_ASSEM = "NestedFamANDAssem", t.VISIBILITY_MASK = "VisibilityMask", t.NESTED_FAM_OR_ASSEM = "NestedFamORAssem", t.SEQUENTIAL_LAYOUT = "SequentialLayout", t.EXPLICIT_LAYOUT = "ExplicitLayout", t.LAYOUT_MASK = "LayoutMask", t.INTERFACE = "Interface", t.CLASS_SEMANTICS_MASK = "ClassSemanticsMask", t.ABSTRACT = "Abstract", t.SEALED = "Sealed", t.SPECIAL_NAME = "SpecialName", t.RT_SPECIAL_NAME = "RTSpecialName", t.IMPORT = "Import", t.SERIALIZABLE = "Serializable", t.WINDOWS_RUNTIME = "WindowsRuntime", t.UNICODE_CLASS = "UnicodeClass", t.AUTO_CLASS = "AutoClass", t.STRING_FORMAT_MASK = "StringFormatMask", t.CUSTOM_FORMAT_CLASS = "CustomFormatClass", t.HAS_SECURITY = "HasSecurity", t.RESERVED_MASK = "ReservedMask", t.BEFORE_FIELD_INIT = "BeforeFieldInit", t.CUSTOM_FORMAT_MASK = "CustomFormatMask", t))(io || {});
const oo = {
  bodySerializer: (t) => JSON.stringify(
    t,
    (e, n) => typeof n == "bigint" ? n.toString() : n
  )
}, ao = ({
  onRequest: t,
  onSseError: e,
  onSseEvent: n,
  responseTransformer: s,
  responseValidator: r,
  sseDefaultRetryDelay: i,
  sseMaxRetryAttempts: o,
  sseMaxRetryDelay: c,
  sseSleepFn: a,
  url: d,
  ...h
}) => {
  let f;
  const S = a ?? ((b) => new Promise((U) => setTimeout(U, b)));
  return { stream: async function* () {
    let b = i ?? 3e3, U = 0;
    const fe = h.signal ?? new AbortController().signal;
    for (; !fe.aborted; ) {
      U++;
      const st = h.headers instanceof Headers ? h.headers : new Headers(h.headers);
      f !== void 0 && st.set("Last-Event-ID", f);
      try {
        const ge = {
          redirect: "follow",
          ...h,
          body: h.serializedBody,
          headers: st,
          signal: fe
        };
        let F = new Request(d, ge);
        t && (F = await t(d, ge));
        const H = await (h.fetch ?? globalThis.fetch)(F);
        if (!H.ok)
          throw new Error(
            `SSE failed: ${H.status} ${H.statusText}`
          );
        if (!H.body) throw new Error("No body in SSE response");
        const q = H.body.pipeThrough(new TextDecoderStream()).getReader();
        let ln = "";
        const Yn = () => {
          try {
            q.cancel();
          } catch {
          }
        };
        fe.addEventListener("abort", Yn);
        try {
          for (; ; ) {
            const { done: Zr, value: Qr } = await q.read();
            if (Zr) break;
            ln += Qr;
            const Kn = ln.split(`

`);
            ln = Kn.pop() ?? "";
            for (const ei of Kn) {
              const ti = ei.split(`
`), Tt = [];
              let Xn;
              for (const W of ti)
                if (W.startsWith("data:"))
                  Tt.push(W.replace(/^data:\s*/, ""));
                else if (W.startsWith("event:"))
                  Xn = W.replace(/^event:\s*/, "");
                else if (W.startsWith("id:"))
                  f = W.replace(/^id:\s*/, "");
                else if (W.startsWith("retry:")) {
                  const Zn = Number.parseInt(
                    W.replace(/^retry:\s*/, ""),
                    10
                  );
                  Number.isNaN(Zn) || (b = Zn);
                }
              let _e, Jn = !1;
              if (Tt.length) {
                const W = Tt.join(`
`);
                try {
                  _e = JSON.parse(W), Jn = !0;
                } catch {
                  _e = W;
                }
              }
              Jn && (r && await r(_e), s && (_e = await s(_e))), n == null || n({
                data: _e,
                event: Xn,
                id: f,
                retry: b
              }), Tt.length && (yield _e);
            }
          }
        } finally {
          fe.removeEventListener("abort", Yn), q.releaseLock();
        }
        break;
      } catch (ge) {
        if (e == null || e(ge), o !== void 0 && U >= o)
          break;
        const F = Math.min(
          b * 2 ** (U - 1),
          c ?? 3e4
        );
        await S(F);
      }
    }
  }() };
}, co = (t) => {
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
}, lo = (t) => {
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
}, ho = (t) => {
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
}, Xs = ({
  allowReserved: t,
  explode: e,
  name: n,
  style: s,
  value: r
}) => {
  if (!e) {
    const c = (t ? r : r.map((a) => encodeURIComponent(a))).join(lo(s));
    switch (s) {
      case "label":
        return `.${c}`;
      case "matrix":
        return `;${n}=${c}`;
      case "simple":
        return c;
      default:
        return `${n}=${c}`;
    }
  }
  const i = co(s), o = r.map((c) => s === "label" || s === "simple" ? t ? c : encodeURIComponent(c) : sn({
    allowReserved: t,
    name: n,
    value: c
  })).join(i);
  return s === "label" || s === "matrix" ? i + o : o;
}, sn = ({
  allowReserved: t,
  name: e,
  value: n
}) => {
  if (n == null)
    return "";
  if (typeof n == "object")
    throw new Error(
      "Deeply-nested arrays/objects aren’t supported. Provide your own `querySerializer()` to handle these."
    );
  return `${e}=${t ? n : encodeURIComponent(n)}`;
}, Js = ({
  allowReserved: t,
  explode: e,
  name: n,
  style: s,
  value: r,
  valueOnly: i
}) => {
  if (r instanceof Date)
    return i ? r.toISOString() : `${n}=${r.toISOString()}`;
  if (s !== "deepObject" && !e) {
    let a = [];
    Object.entries(r).forEach(([h, f]) => {
      a = [
        ...a,
        h,
        t ? f : encodeURIComponent(f)
      ];
    });
    const d = a.join(",");
    switch (s) {
      case "form":
        return `${n}=${d}`;
      case "label":
        return `.${d}`;
      case "matrix":
        return `;${n}=${d}`;
      default:
        return d;
    }
  }
  const o = ho(s), c = Object.entries(r).map(
    ([a, d]) => sn({
      allowReserved: t,
      name: s === "deepObject" ? `${n}[${a}]` : a,
      value: d
    })
  ).join(o);
  return s === "label" || s === "matrix" ? o + c : c;
}, uo = /\{[^{}]+\}/g, po = ({ path: t, url: e }) => {
  let n = e;
  const s = e.match(uo);
  if (s)
    for (const r of s) {
      let i = !1, o = r.substring(1, r.length - 1), c = "simple";
      o.endsWith("*") && (i = !0, o = o.substring(0, o.length - 1)), o.startsWith(".") ? (o = o.substring(1), c = "label") : o.startsWith(";") && (o = o.substring(1), c = "matrix");
      const a = t[o];
      if (a == null)
        continue;
      if (Array.isArray(a)) {
        n = n.replace(
          r,
          Xs({ explode: i, name: o, style: c, value: a })
        );
        continue;
      }
      if (typeof a == "object") {
        n = n.replace(
          r,
          Js({
            explode: i,
            name: o,
            style: c,
            value: a,
            valueOnly: !0
          })
        );
        continue;
      }
      if (c === "matrix") {
        n = n.replace(
          r,
          `;${sn({
            name: o,
            value: a
          })}`
        );
        continue;
      }
      const d = encodeURIComponent(
        c === "label" ? `.${a}` : a
      );
      n = n.replace(r, d);
    }
  return n;
}, fo = ({
  baseUrl: t,
  path: e,
  query: n,
  querySerializer: s,
  url: r
}) => {
  const i = r.startsWith("/") ? r : `/${r}`;
  let o = (t ?? "") + i;
  e && (o = po({ path: e, url: o }));
  let c = n ? s(n) : "";
  return c.startsWith("?") && (c = c.substring(1)), c && (o += `?${c}`), o;
};
function go(t) {
  const e = t.body !== void 0;
  if (e && t.bodySerializer)
    return "serializedBody" in t ? t.serializedBody !== void 0 && t.serializedBody !== "" ? t.serializedBody : null : t.body !== "" ? t.body : null;
  if (e)
    return t.body;
}
const _o = async (t, e) => {
  const n = typeof e == "function" ? await e(t) : e;
  if (n)
    return t.scheme === "bearer" ? `Bearer ${n}` : t.scheme === "basic" ? `Basic ${btoa(n)}` : n;
}, Zs = ({
  allowReserved: t,
  array: e,
  object: n
} = {}) => (r) => {
  const i = [];
  if (r && typeof r == "object")
    for (const o in r) {
      const c = r[o];
      if (c != null)
        if (Array.isArray(c)) {
          const a = Xs({
            allowReserved: t,
            explode: !0,
            name: o,
            style: "form",
            value: c,
            ...e
          });
          a && i.push(a);
        } else if (typeof c == "object") {
          const a = Js({
            allowReserved: t,
            explode: !0,
            name: o,
            style: "deepObject",
            value: c,
            ...n
          });
          a && i.push(a);
        } else {
          const a = sn({
            allowReserved: t,
            name: o,
            value: c
          });
          a && i.push(a);
        }
    }
  return i.join("&");
}, mo = (t) => {
  var n;
  if (!t)
    return "stream";
  const e = (n = t.split(";")[0]) == null ? void 0 : n.trim();
  if (e) {
    if (e.startsWith("application/json") || e.endsWith("+json"))
      return "json";
    if (e === "multipart/form-data")
      return "formData";
    if (["application/", "audio/", "image/", "video/"].some(
      (s) => e.startsWith(s)
    ))
      return "blob";
    if (e.startsWith("text/"))
      return "text";
  }
}, yo = (t, e) => {
  var n, s;
  return e ? !!(t.headers.has(e) || (n = t.query) != null && n[e] || (s = t.headers.get("Cookie")) != null && s.includes(`${e}=`)) : !1;
}, So = async ({
  security: t,
  ...e
}) => {
  for (const n of t) {
    if (yo(e, n.name))
      continue;
    const s = await _o(n, e.auth);
    if (!s)
      continue;
    const r = n.name ?? "Authorization";
    switch (n.in) {
      case "query":
        e.query || (e.query = {}), e.query[r] = s;
        break;
      case "cookie":
        e.headers.append("Cookie", `${r}=${s}`);
        break;
      case "header":
      default:
        e.headers.set(r, s);
        break;
    }
  }
}, rs = (t) => fo({
  baseUrl: t.baseUrl,
  path: t.path,
  query: t.query,
  querySerializer: typeof t.querySerializer == "function" ? t.querySerializer : Zs(t.querySerializer),
  url: t.url
}), is = (t, e) => {
  var s;
  const n = { ...t, ...e };
  return (s = n.baseUrl) != null && s.endsWith("/") && (n.baseUrl = n.baseUrl.substring(0, n.baseUrl.length - 1)), n.headers = Qs(t.headers, e.headers), n;
}, vo = (t) => {
  const e = [];
  return t.forEach((n, s) => {
    e.push([s, n]);
  }), e;
}, Qs = (...t) => {
  const e = new Headers();
  for (const n of t) {
    if (!n)
      continue;
    const s = n instanceof Headers ? vo(n) : Object.entries(n);
    for (const [r, i] of s)
      if (i === null)
        e.delete(r);
      else if (Array.isArray(i))
        for (const o of i)
          e.append(r, o);
      else i !== void 0 && e.set(
        r,
        typeof i == "object" ? JSON.stringify(i) : i
      );
  }
  return e;
};
class pn {
  constructor() {
    this.fns = [];
  }
  clear() {
    this.fns = [];
  }
  eject(e) {
    const n = this.getInterceptorIndex(e);
    this.fns[n] && (this.fns[n] = null);
  }
  exists(e) {
    const n = this.getInterceptorIndex(e);
    return !!this.fns[n];
  }
  getInterceptorIndex(e) {
    return typeof e == "number" ? this.fns[e] ? e : -1 : this.fns.indexOf(e);
  }
  update(e, n) {
    const s = this.getInterceptorIndex(e);
    return this.fns[s] ? (this.fns[s] = n, e) : !1;
  }
  use(e) {
    return this.fns.push(e), this.fns.length - 1;
  }
}
const bo = () => ({
  error: new pn(),
  request: new pn(),
  response: new pn()
}), wo = Zs({
  allowReserved: !1,
  array: {
    explode: !0,
    style: "form"
  },
  object: {
    explode: !0,
    style: "deepObject"
  }
}), Eo = {
  "Content-Type": "application/json"
}, er = (t = {}) => ({
  ...oo,
  headers: Eo,
  parseAs: "auto",
  querySerializer: wo,
  ...t
}), Co = (t = {}) => {
  let e = is(er(), t);
  const n = () => ({ ...e }), s = (d) => (e = is(e, d), n()), r = bo(), i = async (d) => {
    const h = {
      ...e,
      ...d,
      fetch: d.fetch ?? e.fetch ?? globalThis.fetch,
      headers: Qs(e.headers, d.headers),
      serializedBody: void 0
    };
    h.security && await So({
      ...h,
      security: h.security
    }), h.requestValidator && await h.requestValidator(h), h.body !== void 0 && h.bodySerializer && (h.serializedBody = h.bodySerializer(h.body)), (h.body === void 0 || h.serializedBody === "") && h.headers.delete("Content-Type");
    const f = rs(h);
    return { opts: h, url: f };
  }, o = async (d) => {
    const { opts: h, url: f } = await i(d), S = {
      redirect: "follow",
      ...h,
      body: go(h)
    };
    let k = new Request(f, S);
    for (const x of r.request.fns)
      x && (k = await x(k, h));
    const K = h.fetch;
    let b = await K(k);
    for (const x of r.response.fns)
      x && (b = await x(b, k, h));
    const U = {
      request: k,
      response: b
    };
    if (b.ok) {
      const x = (h.parseAs === "auto" ? mo(b.headers.get("Content-Type")) : h.parseAs) ?? "json";
      if (b.status === 204 || b.headers.get("Content-Length") === "0") {
        let q;
        switch (x) {
          case "arrayBuffer":
          case "blob":
          case "text":
            q = await b[x]();
            break;
          case "formData":
            q = new FormData();
            break;
          case "stream":
            q = b.body;
            break;
          case "json":
          default:
            q = {};
            break;
        }
        return h.responseStyle === "data" ? q : {
          data: q,
          ...U
        };
      }
      let H;
      switch (x) {
        case "arrayBuffer":
        case "blob":
        case "formData":
        case "json":
        case "text":
          H = await b[x]();
          break;
        case "stream":
          return h.responseStyle === "data" ? b.body : {
            data: b.body,
            ...U
          };
      }
      return x === "json" && (h.responseValidator && await h.responseValidator(H), h.responseTransformer && (H = await h.responseTransformer(H))), h.responseStyle === "data" ? H : {
        data: H,
        ...U
      };
    }
    const fe = await b.text();
    let st;
    try {
      st = JSON.parse(fe);
    } catch {
    }
    const ge = st ?? fe;
    let F = ge;
    for (const x of r.error.fns)
      x && (F = await x(ge, b, k, h));
    if (F = F || {}, h.throwOnError)
      throw F;
    return h.responseStyle === "data" ? void 0 : {
      error: F,
      ...U
    };
  }, c = (d) => (h) => o({ ...h, method: d }), a = (d) => async (h) => {
    const { opts: f, url: S } = await i(h);
    return ao({
      ...f,
      body: f.body,
      headers: f.headers,
      method: d,
      onRequest: async (k, K) => {
        let b = new Request(k, K);
        for (const U of r.request.fns)
          U && (b = await U(b, f));
        return b;
      },
      url: S
    });
  };
  return {
    buildUrl: rs,
    connect: c("CONNECT"),
    delete: c("DELETE"),
    get: c("GET"),
    getConfig: n,
    head: c("HEAD"),
    interceptors: r,
    options: c("OPTIONS"),
    patch: c("PATCH"),
    post: c("POST"),
    put: c("PUT"),
    request: o,
    setConfig: s,
    sse: {
      connect: a("CONNECT"),
      delete: a("DELETE"),
      get: a("GET"),
      head: a("HEAD"),
      options: a("OPTIONS"),
      patch: a("PATCH"),
      post: a("POST"),
      put: a("PUT"),
      trace: a("TRACE")
    },
    trace: c("TRACE")
  };
}, P = Co(er({
  baseUrl: "http://localhost:28580",
  throwOnError: !0
}));
class wl {
  /**
   * @deprecated
   */
  static getActions(e) {
    return ((e == null ? void 0 : e.client) ?? P).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/usync/api/v1/Actions",
      ...e
    });
  }
  static getActionsBySet(e) {
    return ((e == null ? void 0 : e.client) ?? P).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/usync/api/v1/ActionsBySet",
      ...e
    });
  }
  static download(e) {
    return ((e == null ? void 0 : e.client) ?? P).post({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/usync/api/v1/Download",
      ...e
    });
  }
  static importSingle(e) {
    return ((e == null ? void 0 : e.client) ?? P).post({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/usync/api/v1/Import",
      ...e,
      headers: {
        "Content-Type": "application/json",
        ...e == null ? void 0 : e.headers
      }
    });
  }
  static performAction(e) {
    return ((e == null ? void 0 : e.client) ?? P).post({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/usync/api/v1/Perform",
      ...e,
      headers: {
        "Content-Type": "application/json",
        ...e == null ? void 0 : e.headers
      }
    });
  }
  static processUpload(e) {
    return ((e == null ? void 0 : e.client) ?? P).post({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/usync/api/v1/ProcessUpload",
      ...e
    });
  }
}
class El {
  static mergeExportFolder(e) {
    return ((e == null ? void 0 : e.client) ?? P).post({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/usync/api/v1/MergeExport",
      ...e
    });
  }
}
class Cl {
  static checkLegacy(e) {
    return ((e == null ? void 0 : e.client) ?? P).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/usync/api/v1/CheckLegacy",
      ...e
    });
  }
  static copyLegacy(e) {
    return ((e == null ? void 0 : e.client) ?? P).post({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/usync/api/v1/CopyLegacy",
      ...e
    });
  }
  static ignoreLegacy(e) {
    return ((e == null ? void 0 : e.client) ?? P).post({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/usync/api/v1/IgnoreLegacy",
      ...e
    });
  }
}
class $l {
  static getAddOns(e) {
    return ((e == null ? void 0 : e.client) ?? P).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/usync/api/v1/AddOns",
      ...e
    });
  }
  static getAddonSplash(e) {
    return ((e == null ? void 0 : e.client) ?? P).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/usync/api/v1/AddOnSplash",
      ...e
    });
  }
  static getHandlerSetSettings(e) {
    return ((e == null ? void 0 : e.client) ?? P).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/usync/api/v1/HandlerSettings",
      ...e
    });
  }
  static getSets(e) {
    return ((e == null ? void 0 : e.client) ?? P).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/usync/api/v1/Sets",
      ...e
    });
  }
  static getSettings(e) {
    return ((e == null ? void 0 : e.client) ?? P).get({
      security: [
        {
          scheme: "bearer",
          type: "http"
        }
      ],
      url: "/umbraco/usync/api/v1/Settings",
      ...e
    });
  }
}
var $o = Object.defineProperty, Ao = Object.getOwnPropertyDescriptor, At = (t, e, n, s) => {
  for (var r = s > 1 ? void 0 : s ? Ao(e, n) : e, i = t.length - 1, o; i >= 0; i--)
    (o = t[i]) && (r = (s ? o(e, n, r) : o(r)) || r);
  return s && r && $o(e, n, r), r;
};
let Ce = class extends tt {
  constructor() {
    super(...arguments), this.expanded = !1, this.showAll = !1, this.results = [], this.groupName = "";
  }
  getChangeCount() {
    var t;
    return (t = this.results) == null ? void 0 : t.filter((e) => e.change !== Y.NO_CHANGE).length;
  }
  render() {
    var e;
    const t = this.getChangeCount() ?? 0;
    return t === 0 && !this.showAll ? T : p`
			<uui-box
				class=${_t({
      has_changes: t > 0
    })}>
				<div
					class="summary ${Wt(this.expanded, () => "expanded")}"
					@click=${() => this.expanded = !this.expanded}>
					<h4>${this.localize.term("uSync_" + this.groupName)}</h4>
					<div class="summary-right">
						<h4 class="count">${t}/${(e = this.results) == null ? void 0 : e.length}</h4>
						<uui-icon
							name="icon-play"
							class=${_t({ expanded: this.expanded })}></uui-icon>
					</div>
				</div>
				<uui-table>
					${Wt(
      this.expanded == !0,
      () => p`${this.renderGroupedRows(this.results)}`
    )}
				</uui-table>
			</uui-box>
		`;
  }
  renderGroupedRows(t) {
    return t == null ? void 0 : t.map((n) => !this.showAll && n.change == Y.NO_CHANGE ? T : p`<usync-result-row .result=${n}></usync-result-row>`);
  }
};
Ce.styles = M`
		uui-box {
			cursor: pointer;
			--uui-box-default-padding: 0;
		}

		.expanded {
			border-bottom: 1px solid var(--uui-color-border);
		}

		.summary {
			display: flex;
			margin: 0;
			padding: 0 20px;
			justify-content: space-between;
		}

		.summary-right {
			display: flex;
			align-items: center;
			gap: var(--uui-size-space-2);
			color: var(--uui-color-border-emphasis);
		}

		.summary-right uui-icon {
			transform: rotate(90deg);
			transition: transform 0.5s cubic-bezier(0.42, 0, 0.37, 1.62);
		}

		.summary-right uui-icon.expanded {
			transform: rotate(-90deg);
			border-bottom: none;
		}

		.count {
			color: var(--uui-text);
		}
	`;
At([
  _()
], Ce.prototype, "expanded", 2);
At([
  A({ type: Boolean })
], Ce.prototype, "showAll", 2);
At([
  A({ type: Array })
], Ce.prototype, "results", 2);
At([
  A({ type: String })
], Ce.prototype, "groupName", 2);
Ce = At([
  L("usync-result-group")
], Ce);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const tr = (t) => (e, n) => {
  n !== void 0 ? n.addInitializer(() => {
    customElements.define(t, e);
  }) : customElements.define(t, e);
};
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Lt = globalThis, Nn = Lt.ShadowRoot && (Lt.ShadyCSS === void 0 || Lt.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, Dn = Symbol(), os = /* @__PURE__ */ new WeakMap();
let nr = class {
  constructor(e, n, s) {
    if (this._$cssResult$ = !0, s !== Dn) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e, this.t = n;
  }
  get styleSheet() {
    let e = this.o;
    const n = this.t;
    if (Nn && e === void 0) {
      const s = n !== void 0 && n.length === 1;
      s && (e = os.get(n)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), s && os.set(n, e));
    }
    return e;
  }
  toString() {
    return this.cssText;
  }
};
const ko = (t) => new nr(typeof t == "string" ? t : t + "", void 0, Dn), Io = (t, ...e) => {
  const n = t.length === 1 ? t[0] : e.reduce((s, r, i) => s + ((o) => {
    if (o._$cssResult$ === !0) return o.cssText;
    if (typeof o == "number") return o;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + o + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(r) + t[i + 1], t[0]);
  return new nr(n, t, Dn);
}, Po = (t, e) => {
  if (Nn) t.adoptedStyleSheets = e.map((n) => n instanceof CSSStyleSheet ? n : n.styleSheet);
  else for (const n of e) {
    const s = document.createElement("style"), r = Lt.litNonce;
    r !== void 0 && s.setAttribute("nonce", r), s.textContent = n.cssText, t.appendChild(s);
  }
}, as = Nn ? (t) => t : (t) => t instanceof CSSStyleSheet ? ((e) => {
  let n = "";
  for (const s of e.cssRules) n += s.cssText;
  return ko(n);
})(t) : t;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: To, defineProperty: Ro, getOwnPropertyDescriptor: Oo, getOwnPropertyNames: xo, getOwnPropertySymbols: No, getPrototypeOf: Do } = Object, de = globalThis, cs = de.trustedTypes, Mo = cs ? cs.emptyScript : "", fn = de.reactiveElementPolyfillSupport, dt = (t, e) => t, Ft = { toAttribute(t, e) {
  switch (e) {
    case Boolean:
      t = t ? Mo : null;
      break;
    case Object:
    case Array:
      t = t == null ? t : JSON.stringify(t);
  }
  return t;
}, fromAttribute(t, e) {
  let n = t;
  switch (e) {
    case Boolean:
      n = t !== null;
      break;
    case Number:
      n = t === null ? null : Number(t);
      break;
    case Object:
    case Array:
      try {
        n = JSON.parse(t);
      } catch {
        n = null;
      }
  }
  return n;
} }, Mn = (t, e) => !To(t, e), ls = { attribute: !0, type: String, converter: Ft, reflect: !1, useDefault: !1, hasChanged: Mn };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), de.litPropertyMetadata ?? (de.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
let Te = class extends HTMLElement {
  static addInitializer(e) {
    this._$Ei(), (this.l ?? (this.l = [])).push(e);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(e, n = ls) {
    if (n.state && (n.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(e) && ((n = Object.create(n)).wrapped = !0), this.elementProperties.set(e, n), !n.noAccessor) {
      const s = Symbol(), r = this.getPropertyDescriptor(e, s, n);
      r !== void 0 && Ro(this.prototype, e, r);
    }
  }
  static getPropertyDescriptor(e, n, s) {
    const { get: r, set: i } = Oo(this.prototype, e) ?? { get() {
      return this[n];
    }, set(o) {
      this[n] = o;
    } };
    return { get: r, set(o) {
      const c = r == null ? void 0 : r.call(this);
      i == null || i.call(this, o), this.requestUpdate(e, c, s);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(e) {
    return this.elementProperties.get(e) ?? ls;
  }
  static _$Ei() {
    if (this.hasOwnProperty(dt("elementProperties"))) return;
    const e = Do(this);
    e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(dt("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(dt("properties"))) {
      const n = this.properties, s = [...xo(n), ...No(n)];
      for (const r of s) this.createProperty(r, n[r]);
    }
    const e = this[Symbol.metadata];
    if (e !== null) {
      const n = litPropertyMetadata.get(e);
      if (n !== void 0) for (const [s, r] of n) this.elementProperties.set(s, r);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [n, s] of this.elementProperties) {
      const r = this._$Eu(n, s);
      r !== void 0 && this._$Eh.set(r, n);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(e) {
    const n = [];
    if (Array.isArray(e)) {
      const s = new Set(e.flat(1 / 0).reverse());
      for (const r of s) n.unshift(as(r));
    } else e !== void 0 && n.push(as(e));
    return n;
  }
  static _$Eu(e, n) {
    const s = n.attribute;
    return s === !1 ? void 0 : typeof s == "string" ? s : typeof e == "string" ? e.toLowerCase() : void 0;
  }
  constructor() {
    super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
  }
  _$Ev() {
    var e;
    this._$ES = new Promise((n) => this.enableUpdating = n), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), (e = this.constructor.l) == null || e.forEach((n) => n(this));
  }
  addController(e) {
    var n;
    (this._$EO ?? (this._$EO = /* @__PURE__ */ new Set())).add(e), this.renderRoot !== void 0 && this.isConnected && ((n = e.hostConnected) == null || n.call(e));
  }
  removeController(e) {
    var n;
    (n = this._$EO) == null || n.delete(e);
  }
  _$E_() {
    const e = /* @__PURE__ */ new Map(), n = this.constructor.elementProperties;
    for (const s of n.keys()) this.hasOwnProperty(s) && (e.set(s, this[s]), delete this[s]);
    e.size > 0 && (this._$Ep = e);
  }
  createRenderRoot() {
    const e = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return Po(e, this.constructor.elementStyles), e;
  }
  connectedCallback() {
    var e;
    this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), (e = this._$EO) == null || e.forEach((n) => {
      var s;
      return (s = n.hostConnected) == null ? void 0 : s.call(n);
    });
  }
  enableUpdating(e) {
  }
  disconnectedCallback() {
    var e;
    (e = this._$EO) == null || e.forEach((n) => {
      var s;
      return (s = n.hostDisconnected) == null ? void 0 : s.call(n);
    });
  }
  attributeChangedCallback(e, n, s) {
    this._$AK(e, s);
  }
  _$ET(e, n) {
    var i;
    const s = this.constructor.elementProperties.get(e), r = this.constructor._$Eu(e, s);
    if (r !== void 0 && s.reflect === !0) {
      const o = (((i = s.converter) == null ? void 0 : i.toAttribute) !== void 0 ? s.converter : Ft).toAttribute(n, s.type);
      this._$Em = e, o == null ? this.removeAttribute(r) : this.setAttribute(r, o), this._$Em = null;
    }
  }
  _$AK(e, n) {
    var i, o;
    const s = this.constructor, r = s._$Eh.get(e);
    if (r !== void 0 && this._$Em !== r) {
      const c = s.getPropertyOptions(r), a = typeof c.converter == "function" ? { fromAttribute: c.converter } : ((i = c.converter) == null ? void 0 : i.fromAttribute) !== void 0 ? c.converter : Ft;
      this._$Em = r, this[r] = a.fromAttribute(n, c.type) ?? ((o = this._$Ej) == null ? void 0 : o.get(r)) ?? null, this._$Em = null;
    }
  }
  requestUpdate(e, n, s) {
    var r;
    if (e !== void 0) {
      const i = this.constructor, o = this[e];
      if (s ?? (s = i.getPropertyOptions(e)), !((s.hasChanged ?? Mn)(o, n) || s.useDefault && s.reflect && o === ((r = this._$Ej) == null ? void 0 : r.get(e)) && !this.hasAttribute(i._$Eu(e, s)))) return;
      this.C(e, n, s);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$EP());
  }
  C(e, n, { useDefault: s, reflect: r, wrapped: i }, o) {
    s && !(this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Map())).has(e) && (this._$Ej.set(e, o ?? n ?? this[e]), i !== !0 || o !== void 0) || (this._$AL.has(e) || (this.hasUpdated || s || (n = void 0), this._$AL.set(e, n)), r === !0 && this._$Em !== e && (this._$Eq ?? (this._$Eq = /* @__PURE__ */ new Set())).add(e));
  }
  async _$EP() {
    this.isUpdatePending = !0;
    try {
      await this._$ES;
    } catch (n) {
      Promise.reject(n);
    }
    const e = this.scheduleUpdate();
    return e != null && await e, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    var s;
    if (!this.isUpdatePending) return;
    if (!this.hasUpdated) {
      if (this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this._$Ep) {
        for (const [i, o] of this._$Ep) this[i] = o;
        this._$Ep = void 0;
      }
      const r = this.constructor.elementProperties;
      if (r.size > 0) for (const [i, o] of r) {
        const { wrapped: c } = o, a = this[i];
        c !== !0 || this._$AL.has(i) || a === void 0 || this.C(i, void 0, o, a);
      }
    }
    let e = !1;
    const n = this._$AL;
    try {
      e = this.shouldUpdate(n), e ? (this.willUpdate(n), (s = this._$EO) == null || s.forEach((r) => {
        var i;
        return (i = r.hostUpdate) == null ? void 0 : i.call(r);
      }), this.update(n)) : this._$EM();
    } catch (r) {
      throw e = !1, this._$EM(), r;
    }
    e && this._$AE(n);
  }
  willUpdate(e) {
  }
  _$AE(e) {
    var n;
    (n = this._$EO) == null || n.forEach((s) => {
      var r;
      return (r = s.hostUpdated) == null ? void 0 : r.call(s);
    }), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(e)), this.updated(e);
  }
  _$EM() {
    this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = !1;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$ES;
  }
  shouldUpdate(e) {
    return !0;
  }
  update(e) {
    this._$Eq && (this._$Eq = this._$Eq.forEach((n) => this._$ET(n, this[n]))), this._$EM();
  }
  updated(e) {
  }
  firstUpdated(e) {
  }
};
Te.elementStyles = [], Te.shadowRootOptions = { mode: "open" }, Te[dt("elementProperties")] = /* @__PURE__ */ new Map(), Te[dt("finalized")] = /* @__PURE__ */ new Map(), fn == null || fn({ ReactiveElement: Te }), (de.reactiveElementVersions ?? (de.reactiveElementVersions = [])).push("2.1.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Lo = { attribute: !0, type: String, converter: Ft, reflect: !1, hasChanged: Mn }, Uo = (t = Lo, e, n) => {
  const { kind: s, metadata: r } = n;
  let i = globalThis.litPropertyMetadata.get(r);
  if (i === void 0 && globalThis.litPropertyMetadata.set(r, i = /* @__PURE__ */ new Map()), s === "setter" && ((t = Object.create(t)).wrapped = !0), i.set(n.name, t), s === "accessor") {
    const { name: o } = n;
    return { set(c) {
      const a = e.get.call(this);
      e.set.call(this, c), this.requestUpdate(o, a, t);
    }, init(c) {
      return c !== void 0 && this.C(o, void 0, t, c), c;
    } };
  }
  if (s === "setter") {
    const { name: o } = n;
    return function(c) {
      const a = this[o];
      e.call(this, c), this.requestUpdate(o, a, t);
    };
  }
  throw Error("Unsupported decorator location: " + s);
};
function sr(t) {
  return (e, n) => typeof n == "object" ? Uo(t, e, n) : ((s, r, i) => {
    const o = r.hasOwnProperty(i);
    return r.constructor.createProperty(i, s), o ? Object.getOwnPropertyDescriptor(r, i) : void 0;
  })(t, e, n);
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function rr(t) {
  return sr({ ...t, state: !0, attribute: !1 });
}
const zo = "show-detail";
class Ho extends Event {
  constructor(e) {
    super(zo, {
      bubbles: !0,
      composed: !0,
      cancelable: !1
    }), this.action = e;
  }
}
var Bo = Object.defineProperty, Wo = Object.getOwnPropertyDescriptor, ir = (t) => {
  throw TypeError(t);
}, or = (t, e, n, s) => {
  for (var r = s > 1 ? void 0 : s ? Wo(e, n) : e, i = t.length - 1, o; i >= 0; i--)
    (o = t[i]) && (r = (s ? o(e, n, r) : o(r)) || r);
  return s && r && Bo(e, n, r), r;
}, jo = (t, e, n) => e.has(t) || ir("Cannot " + n), Vo = (t, e, n) => e.has(t) ? ir("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, n), hs = (t, e, n) => (jo(t, e, "access private method"), n), Ut, ar, cr;
let qe = class extends en {
  constructor() {
    super(), Vo(this, Ut);
  }
  render() {
    var t, e;
    return p`
			<umb-body-layout headline="Changes : ${((t = this.data) == null ? void 0 : t.item.name) ?? ""}">
				<div class="layout">
					<uui-box style="--uui-box-default-padding: 0;">
						<div slot="header" id="header">
							<h3><umb-localize key="uSync_detailHeadline"></umb-localize></h3>
							<umb-localize key="uSync_detailHeader"></umb-localize>
						</div>
						<div slot="header-actions">${this.renderActions()}</div>
					</uui-box>
					<uui-box style="--uui-box-default-padding: 0;">
						<usync-change-view .item=${(e = this.data) == null ? void 0 : e.item}></usync-change-view>
					</uui-box>
				</div>
				<div slot="actions">
					<uui-button
						id="cancel"
						.label=${this.localize.term("general_close")}
						@click="${hs(this, Ut, cr)}"></uui-button>
				</div>
			</umb-body-layout>
		`;
  }
  renderActions() {
    var t;
    return (t = this.data) != null && t.showActions ? p` <uui-button
			id="import"
			type="button"
			look="outline"
			.state=${this.importState}
			.label=${this.localize.term("uSync_importSingle")}
			@click="${hs(this, Ut, ar)}"></uui-button>` : T;
  }
};
Ut = /* @__PURE__ */ new WeakSet();
ar = async function(t) {
  var r, i;
  if (t.stopPropagation(), !((r = this.data) != null && r.item)) return;
  const e = await this.getContext(Qt);
  if (!e) return;
  const n = e.open(this, ri, {
    data: { action: (i = this.data) == null ? void 0 : i.item }
  });
  return await (n == null ? void 0 : n.onSubmit().catch(() => {
  }));
};
cr = function() {
  var t;
  (t = this.modalContext) == null || t.reject();
};
qe.styles = M`
		.layout {
			display: flex;
			flex-direction: column;
			gap: var(--uui-size-space-4);
		}

		#header h3 {
			margin: 0;
		}
	`;
or([
  _()
], qe.prototype, "importState", 2);
qe = or([
  L("usync-details-modal")
], qe);
const Fo = qe, qo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Fo,
  get uSyncDetailsModalElement() {
    return qe;
  }
}, Symbol.toStringTag, { value: "Module" })), Il = new tn("usync.details.modal", {
  modal: {
    type: "sidebar",
    size: "large"
  }
});
var Go = Object.defineProperty, Yo = Object.getOwnPropertyDescriptor, lr = (t) => {
  throw TypeError(t);
}, Ko = (t, e, n, s) => {
  for (var r = s > 1 ? void 0 : s ? Yo(e, n) : e, i = t.length - 1, o; i >= 0; i--)
    (o = t[i]) && (r = (s ? o(e, n, r) : o(r)) || r);
  return s && r && Go(e, n, r), r;
}, Xo = (t, e, n) => e.has(t) || lr("Cannot " + n), Jo = (t, e, n) => e.has(t) ? lr("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, n), Zo = (t, e, n) => (Xo(t, e, "access private method"), n), An, hr;
let qt = class extends en {
  constructor() {
    super(...arguments), Jo(this, An);
  }
  render() {
    var e, n, s;
    const t = `Error: ${((e = this.data) == null ? void 0 : e.action.name) ?? ""} [${(n = this.data) == null ? void 0 : n.action.itemType}]`;
    return p`<umb-body-layout .headline=${t}>
			<strong>
				<umb-localize key="uSync_errorHeader"></umb-localize>
			</strong>
			<div class="error">${(s = this.data) == null ? void 0 : s.action.message}</div>
			<div slot="actions">
				<uui-button
					id="cancel"
					.label=${this.localize.term("general_close")}
					@click="${Zo(this, An, hr)}"></uui-button>
			</div>
		</umb-body-layout>`;
  }
};
An = /* @__PURE__ */ new WeakSet();
hr = function() {
  var t;
  (t = this.modalContext) == null || t.reject();
};
qt.styles = M`
		umb-body-layout {
			max-width: 450px;
		}

		.error {
			padding: 10px;
			font-family: monospace;
			color: red;
		}
	`;
qt = Ko([
  L("usync-error-modal")
], qt);
const Qo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get default() {
    return qt;
  }
}, Symbol.toStringTag, { value: "Module" })), ea = new tn("usync.error.modal", {
  modal: {
    type: "dialog"
  }
}), Pl = new tn("usync.import.single.modal", {
  modal: {
    type: "dialog"
  }
});
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const pt = globalThis, Gt = pt.trustedTypes, us = Gt ? Gt.createPolicy("lit-html", { createHTML: (t) => t }) : void 0, ur = "$lit$", se = `lit$${Math.random().toFixed(9).slice(2)}$`, dr = "?" + se, ta = `<${dr}>`, $e = document, mt = () => $e.createComment(""), yt = (t) => t === null || typeof t != "object" && typeof t != "function", Ln = Array.isArray, na = (t) => Ln(t) || typeof (t == null ? void 0 : t[Symbol.iterator]) == "function", gn = `[ 	
\f\r]`, ot = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, ds = /-->/g, ps = />/g, me = RegExp(`>|${gn}(?:([^\\s"'>=/]+)(${gn}*=${gn}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), fs = /'/g, gs = /"/g, pr = /^(?:script|style|textarea|title)$/i, sa = (t) => (e, ...n) => ({ _$litType$: t, strings: e, values: n }), at = sa(1), Ge = Symbol.for("lit-noChange"), I = Symbol.for("lit-nothing"), _s = /* @__PURE__ */ new WeakMap(), ye = $e.createTreeWalker($e, 129);
function fr(t, e) {
  if (!Ln(t) || !t.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return us !== void 0 ? us.createHTML(e) : e;
}
const ra = (t, e) => {
  const n = t.length - 1, s = [];
  let r, i = e === 2 ? "<svg>" : e === 3 ? "<math>" : "", o = ot;
  for (let c = 0; c < n; c++) {
    const a = t[c];
    let d, h, f = -1, S = 0;
    for (; S < a.length && (o.lastIndex = S, h = o.exec(a), h !== null); ) S = o.lastIndex, o === ot ? h[1] === "!--" ? o = ds : h[1] !== void 0 ? o = ps : h[2] !== void 0 ? (pr.test(h[2]) && (r = RegExp("</" + h[2], "g")), o = me) : h[3] !== void 0 && (o = me) : o === me ? h[0] === ">" ? (o = r ?? ot, f = -1) : h[1] === void 0 ? f = -2 : (f = o.lastIndex - h[2].length, d = h[1], o = h[3] === void 0 ? me : h[3] === '"' ? gs : fs) : o === gs || o === fs ? o = me : o === ds || o === ps ? o = ot : (o = me, r = void 0);
    const k = o === me && t[c + 1].startsWith("/>") ? " " : "";
    i += o === ot ? a + ta : f >= 0 ? (s.push(d), a.slice(0, f) + ur + a.slice(f) + se + k) : a + se + (f === -2 ? c : k);
  }
  return [fr(t, i + (t[n] || "<?>") + (e === 2 ? "</svg>" : e === 3 ? "</math>" : "")), s];
};
class St {
  constructor({ strings: e, _$litType$: n }, s) {
    let r;
    this.parts = [];
    let i = 0, o = 0;
    const c = e.length - 1, a = this.parts, [d, h] = ra(e, n);
    if (this.el = St.createElement(d, s), ye.currentNode = this.el.content, n === 2 || n === 3) {
      const f = this.el.content.firstChild;
      f.replaceWith(...f.childNodes);
    }
    for (; (r = ye.nextNode()) !== null && a.length < c; ) {
      if (r.nodeType === 1) {
        if (r.hasAttributes()) for (const f of r.getAttributeNames()) if (f.endsWith(ur)) {
          const S = h[o++], k = r.getAttribute(f).split(se), K = /([.?@])?(.*)/.exec(S);
          a.push({ type: 1, index: i, name: K[2], strings: k, ctor: K[1] === "." ? oa : K[1] === "?" ? aa : K[1] === "@" ? ca : rn }), r.removeAttribute(f);
        } else f.startsWith(se) && (a.push({ type: 6, index: i }), r.removeAttribute(f));
        if (pr.test(r.tagName)) {
          const f = r.textContent.split(se), S = f.length - 1;
          if (S > 0) {
            r.textContent = Gt ? Gt.emptyScript : "";
            for (let k = 0; k < S; k++) r.append(f[k], mt()), ye.nextNode(), a.push({ type: 2, index: ++i });
            r.append(f[S], mt());
          }
        }
      } else if (r.nodeType === 8) if (r.data === dr) a.push({ type: 2, index: i });
      else {
        let f = -1;
        for (; (f = r.data.indexOf(se, f + 1)) !== -1; ) a.push({ type: 7, index: i }), f += se.length - 1;
      }
      i++;
    }
  }
  static createElement(e, n) {
    const s = $e.createElement("template");
    return s.innerHTML = e, s;
  }
}
function Ye(t, e, n = t, s) {
  var o, c;
  if (e === Ge) return e;
  let r = s !== void 0 ? (o = n._$Co) == null ? void 0 : o[s] : n._$Cl;
  const i = yt(e) ? void 0 : e._$litDirective$;
  return (r == null ? void 0 : r.constructor) !== i && ((c = r == null ? void 0 : r._$AO) == null || c.call(r, !1), i === void 0 ? r = void 0 : (r = new i(t), r._$AT(t, n, s)), s !== void 0 ? (n._$Co ?? (n._$Co = []))[s] = r : n._$Cl = r), r !== void 0 && (e = Ye(t, r._$AS(t, e.values), r, s)), e;
}
class ia {
  constructor(e, n) {
    this._$AV = [], this._$AN = void 0, this._$AD = e, this._$AM = n;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(e) {
    const { el: { content: n }, parts: s } = this._$AD, r = ((e == null ? void 0 : e.creationScope) ?? $e).importNode(n, !0);
    ye.currentNode = r;
    let i = ye.nextNode(), o = 0, c = 0, a = s[0];
    for (; a !== void 0; ) {
      if (o === a.index) {
        let d;
        a.type === 2 ? d = new kt(i, i.nextSibling, this, e) : a.type === 1 ? d = new a.ctor(i, a.name, a.strings, this, e) : a.type === 6 && (d = new la(i, this, e)), this._$AV.push(d), a = s[++c];
      }
      o !== (a == null ? void 0 : a.index) && (i = ye.nextNode(), o++);
    }
    return ye.currentNode = $e, r;
  }
  p(e) {
    let n = 0;
    for (const s of this._$AV) s !== void 0 && (s.strings !== void 0 ? (s._$AI(e, s, n), n += s.strings.length - 2) : s._$AI(e[n])), n++;
  }
}
class kt {
  get _$AU() {
    var e;
    return ((e = this._$AM) == null ? void 0 : e._$AU) ?? this._$Cv;
  }
  constructor(e, n, s, r) {
    this.type = 2, this._$AH = I, this._$AN = void 0, this._$AA = e, this._$AB = n, this._$AM = s, this.options = r, this._$Cv = (r == null ? void 0 : r.isConnected) ?? !0;
  }
  get parentNode() {
    let e = this._$AA.parentNode;
    const n = this._$AM;
    return n !== void 0 && (e == null ? void 0 : e.nodeType) === 11 && (e = n.parentNode), e;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(e, n = this) {
    e = Ye(this, e, n), yt(e) ? e === I || e == null || e === "" ? (this._$AH !== I && this._$AR(), this._$AH = I) : e !== this._$AH && e !== Ge && this._(e) : e._$litType$ !== void 0 ? this.$(e) : e.nodeType !== void 0 ? this.T(e) : na(e) ? this.k(e) : this._(e);
  }
  O(e) {
    return this._$AA.parentNode.insertBefore(e, this._$AB);
  }
  T(e) {
    this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
  }
  _(e) {
    this._$AH !== I && yt(this._$AH) ? this._$AA.nextSibling.data = e : this.T($e.createTextNode(e)), this._$AH = e;
  }
  $(e) {
    var i;
    const { values: n, _$litType$: s } = e, r = typeof s == "number" ? this._$AC(e) : (s.el === void 0 && (s.el = St.createElement(fr(s.h, s.h[0]), this.options)), s);
    if (((i = this._$AH) == null ? void 0 : i._$AD) === r) this._$AH.p(n);
    else {
      const o = new ia(r, this), c = o.u(this.options);
      o.p(n), this.T(c), this._$AH = o;
    }
  }
  _$AC(e) {
    let n = _s.get(e.strings);
    return n === void 0 && _s.set(e.strings, n = new St(e)), n;
  }
  k(e) {
    Ln(this._$AH) || (this._$AH = [], this._$AR());
    const n = this._$AH;
    let s, r = 0;
    for (const i of e) r === n.length ? n.push(s = new kt(this.O(mt()), this.O(mt()), this, this.options)) : s = n[r], s._$AI(i), r++;
    r < n.length && (this._$AR(s && s._$AB.nextSibling, r), n.length = r);
  }
  _$AR(e = this._$AA.nextSibling, n) {
    var s;
    for ((s = this._$AP) == null ? void 0 : s.call(this, !1, !0, n); e && e !== this._$AB; ) {
      const r = e.nextSibling;
      e.remove(), e = r;
    }
  }
  setConnected(e) {
    var n;
    this._$AM === void 0 && (this._$Cv = e, (n = this._$AP) == null || n.call(this, e));
  }
}
class rn {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(e, n, s, r, i) {
    this.type = 1, this._$AH = I, this._$AN = void 0, this.element = e, this.name = n, this._$AM = r, this.options = i, s.length > 2 || s[0] !== "" || s[1] !== "" ? (this._$AH = Array(s.length - 1).fill(new String()), this.strings = s) : this._$AH = I;
  }
  _$AI(e, n = this, s, r) {
    const i = this.strings;
    let o = !1;
    if (i === void 0) e = Ye(this, e, n, 0), o = !yt(e) || e !== this._$AH && e !== Ge, o && (this._$AH = e);
    else {
      const c = e;
      let a, d;
      for (e = i[0], a = 0; a < i.length - 1; a++) d = Ye(this, c[s + a], n, a), d === Ge && (d = this._$AH[a]), o || (o = !yt(d) || d !== this._$AH[a]), d === I ? e = I : e !== I && (e += (d ?? "") + i[a + 1]), this._$AH[a] = d;
    }
    o && !r && this.j(e);
  }
  j(e) {
    e === I ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
  }
}
class oa extends rn {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(e) {
    this.element[this.name] = e === I ? void 0 : e;
  }
}
class aa extends rn {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(e) {
    this.element.toggleAttribute(this.name, !!e && e !== I);
  }
}
class ca extends rn {
  constructor(e, n, s, r, i) {
    super(e, n, s, r, i), this.type = 5;
  }
  _$AI(e, n = this) {
    if ((e = Ye(this, e, n, 0) ?? I) === Ge) return;
    const s = this._$AH, r = e === I && s !== I || e.capture !== s.capture || e.once !== s.once || e.passive !== s.passive, i = e !== I && (s === I || r);
    r && this.element.removeEventListener(this.name, this, s), i && this.element.addEventListener(this.name, this, e), this._$AH = e;
  }
  handleEvent(e) {
    var n;
    typeof this._$AH == "function" ? this._$AH.call(((n = this.options) == null ? void 0 : n.host) ?? this.element, e) : this._$AH.handleEvent(e);
  }
}
class la {
  constructor(e, n, s) {
    this.element = e, this.type = 6, this._$AN = void 0, this._$AM = n, this.options = s;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(e) {
    Ye(this, e);
  }
}
const _n = pt.litHtmlPolyfillSupport;
_n == null || _n(St, kt), (pt.litHtmlVersions ?? (pt.litHtmlVersions = [])).push("3.3.0");
const ha = (t, e, n) => {
  const s = (n == null ? void 0 : n.renderBefore) ?? e;
  let r = s._$litPart$;
  if (r === void 0) {
    const i = (n == null ? void 0 : n.renderBefore) ?? null;
    s._$litPart$ = r = new kt(e.insertBefore(mt(), i), i, void 0, n ?? {});
  }
  return r._$AI(t), r;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const be = globalThis;
class zt extends Te {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    var n;
    const e = super.createRenderRoot();
    return (n = this.renderOptions).renderBefore ?? (n.renderBefore = e.firstChild), e;
  }
  update(e) {
    const n = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this._$Do = ha(n, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    var e;
    super.connectedCallback(), (e = this._$Do) == null || e.setConnected(!0);
  }
  disconnectedCallback() {
    var e;
    super.disconnectedCallback(), (e = this._$Do) == null || e.setConnected(!1);
  }
  render() {
    return Ge;
  }
}
var Rs;
zt._$litElement$ = !0, zt.finalized = !0, (Rs = be.litElementHydrateSupport) == null || Rs.call(be, { LitElement: zt });
const mn = be.litElementPolyfillSupport;
mn == null || mn({ LitElement: zt });
(be.litElementVersions ?? (be.litElementVersions = [])).push("4.2.0");
var j, ie, xe, Ne, De, Zt, gr;
class ua extends On {
  constructor(n) {
    super(n);
    m(this, Zt);
    m(this, j);
    m(this, ie);
    m(this, xe);
    m(this, Ne);
    m(this, De);
    y(this, ie, new ue(!1)), this.connected = u(this, ie).asObservable(), y(this, xe, new ue(void 0)), this.update = u(this, xe).asObservable(), y(this, Ne, new ue(void 0)), this.add = u(this, Ne).asObservable(), y(this, De, new ue(void 0)), this.complete = u(this, De).asObservable(), this.provideContext(Rn, this), this.consumeContext(Os, async (s) => {
      !s || !(s != null && s.getOpenApiConfiguration()) || Rt(this, Zt, gr).call(this, "/umbraco/SyncHub", await s.getLatestToken());
    });
  }
  hostConnected() {
    super.hostConnected();
  }
  hostDisconnected() {
    var n;
    super.hostDisconnected(), (n = u(this, j)) == null || n.stop().then(() => {
      u(this, ie).setValue(!1);
    });
  }
  getClientId() {
    var n;
    return ((n = u(this, j)) == null ? void 0 : n.connectionId) ?? null;
  }
}
j = new WeakMap(), ie = new WeakMap(), xe = new WeakMap(), Ne = new WeakMap(), De = new WeakMap(), Zt = new WeakSet(), gr = function(n, s) {
  y(this, j, new es.HubConnectionBuilder().withUrl(n, { accessTokenFactory: () => s }).configureLogging(es.LogLevel.Warning).build()), u(this, j).on("add", (r) => {
    u(this, Ne).setValue(r);
  }), u(this, j).on("update", (r) => {
    u(this, xe).setValue(r);
  }), u(this, j).on("complete", (r) => {
    u(this, De).setValue(r);
  }), u(this, j).start().then(() => {
    u(this, ie).setValue(!0);
  }), u(this, j).onclose(() => {
    u(this, ie).setValue(!1);
  });
};
const da = new tn("usync.import.modal", {
  modal: {
    type: "dialog"
  }
});
var pa = Object.defineProperty, fa = Object.getOwnPropertyDescriptor, _r = (t) => {
  throw TypeError(t);
}, mr = (t, e, n, s) => {
  for (var r = s > 1 ? void 0 : s ? fa(e, n) : e, i = t.length - 1, o; i >= 0; i--)
    (o = t[i]) && (r = (s ? o(e, n, r) : o(r)) || r);
  return s && r && pa(e, n, r), r;
}, ga = (t, e, n) => e.has(t) || _r("Cannot " + n), _a = (t, e, n) => e.has(t) ? _r("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, n), yn = (t, e, n) => (ga(t, e, "access private method"), n), ct, yr, Sr, vr;
let Ke = class extends en {
  constructor() {
    super(...arguments), _a(this, ct);
  }
  render() {
    return p`
			<umb-body-layout .headline=${this.localize.term("uSync_importHeader")}>
				${this.renderForm()} ${this.renderResult()}
			</umb-body-layout>
		`;
  }
  renderForm() {
    if (this.result === void 0)
      return p` ${this.localize.term("uSync_uploadIntro")}
			<usync-file-upload @uploaded=${yn(this, ct, vr)}></usync-file-upload>
			<div slot="actions">
				<uui-button
					id="cancel"
					.label=${this.localize.term("general_close")}
					@click="${yn(this, ct, yr)}"></uui-button>
			</div>`;
  }
  renderResult() {
    if (this.result != null)
      return p`${Wt(
        this.result.success,
        () => p`${this.localize.term("uSync_uploadSuccess")}`,
        () => {
          var t;
          return p`${this.localize.term("uSync_uploadError")} ${(t = this.result) == null ? void 0 : t.errors}`;
        }
      )}
			<div slot="actions">
				<uui-button id="continue" label="Import" @click="${yn(this, ct, Sr)}"></uui-button>
			</div>`;
  }
};
ct = /* @__PURE__ */ new WeakSet();
yr = function() {
  var t;
  (t = this.modalContext) == null || t.reject();
};
Sr = function() {
  var t, e;
  this.value = (t = this.result) == null ? void 0 : t.success, (e = this.modalContext) == null || e.submit();
};
vr = function(t) {
  this.result = t.result;
};
Ke.styles = M`
		umb-body-layout {
			max-width: 450px;
		}

		usync-file-upload {
			padding: 10px 0;
		}
	`;
mr([
  _()
], Ke.prototype, "result", 2);
Ke = mr([
  L("usync-import-dialog")
], Ke);
const ma = Ke, ya = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ma,
  get uSyncImportModalDialog() {
    return Ke;
  }
}, Symbol.toStringTag, { value: "Module" }));
var N, oe, Me, Le, Ue, X, ae, J, Z, ze, He, Be, We;
class ms extends On {
  constructor(n) {
    var s, r, i;
    super(n);
    m(this, N);
    m(this, oe);
    m(this, Me);
    m(this, Le);
    m(this, Ue);
    m(this, X);
    m(this, ae);
    m(this, J);
    m(this, Z);
    m(this, ze);
    m(this, He);
    m(this, Be);
    m(this, We);
    this.workspaceAlias = D.workspace.alias, y(this, oe, null), y(this, Me, new xt([], (o) => o.key)), this.actions = u(this, Me).asObservable(), y(this, Le, new ue(void 0)), this.workingGroup = u(this, Le).asObservable(), y(this, Ue, new xt([], (o) => o.name)), this.currentAction = u(this, Ue).asObservable(), y(this, X, new dn(!1)), this.working = u(this, X).asObservable(), y(this, ae, new dn(!1)), this.inBackground = u(this, ae).asObservable(), y(this, J, new dn(!1)), this.completed = u(this, J).asObservable(), y(this, Z, new xt([], (o) => o.name)), this.results = u(this, Z).asObservable(), y(this, ze, new ue(void 0)), this.settings = (s = u(this, ze)) == null ? void 0 : s.asObservable(), y(this, He, new ue(void 0)), this.handlerSettings = (r = u(this, He)) == null ? void 0 : r.asObservable(), y(this, Be, new xt([], (o) => o)), this.sets = u(this, Be).asObservable(), y(this, We, new ue(void 0)), this.legacy = (i = u(this, We)) == null ? void 0 : i.asObservable(), this.provideContext(Un, this), this.provideContext(di, this), y(this, N, new Ns(this)), y(this, oe, new ua(this)), this.observe(u(this, oe).connected, (o) => {
      console.debug("SignalR connected", o);
    }), this.observe(u(this, oe).complete, (o) => {
      o && o.success && (u(this, J).setValue(!0), u(this, X).setValue(!1), u(this, ae).setValue(!1), u(this, Z).setValue(o.actions ?? []));
    });
  }
  getEntityType() {
    return D.workspace.rootElement;
  }
  /**
   * Return the current actions from the repository
   */
  async getActions(n) {
    const { data: s } = await u(this, N).getActions(n);
    s && u(this, Me).setValue(s);
  }
  /**
   * Get the current uSync settings
   */
  async getSettings() {
    const { data: n } = await u(this, N).getSettings();
    return n && u(this, ze).setValue(n), n;
  }
  async getAddons() {
    const { data: n } = await u(this, N).getAddons();
    return n;
  }
  /**
   * Check to see if there is a legacy uSync folder on disk.
   */
  async checkLegacy() {
    const { data: n } = await u(this, N).checkLegacy();
    return n && u(this, We).setValue(n), n;
  }
  async ignoreLegacy() {
    const { data: n } = await u(this, N).ignoreLegacy();
    return n ?? !1;
  }
  async copyLegacy() {
    const { data: n } = await u(this, N).copyLegacy();
    return n ?? !1;
  }
  /**
   * Get handler defaults.
   */
  async getDefaultHandlerSetSettings(n) {
    const { data: s } = await u(this, N).getHandlerSettings(n);
    s && u(this, He).setValue(s);
  }
  async getHandlerSets() {
    const { data: n } = await u(this, N).getSets();
    n && u(this, Be).setValue(n);
  }
  /**
   * Perform an action (e.g import, export, etc) with options
   * @param options options for the action
   */
  async performAction(n) {
    var c;
    var s = ((c = u(this, oe)) == null ? void 0 : c.getClientId()) ?? "";
    u(this, X).setValue(!0), u(this, J).setValue(!1), u(this, Z).setValue([]), u(this, Le).setValue(n.group);
    var r = !1, i = "", o = 0;
    if (n.file && n.action === "Import" && !await this.uploadFile()) {
      u(this, J).setValue(!0), u(this, X).setValue(!1), u(this, Z).setValue([]);
      return;
    }
    do {
      const { data: a } = await u(this, N).performAction({
        id: i,
        set: n.setName,
        action: n.action,
        group: n.group.key,
        force: n.force,
        clean: n.clean,
        file: n.file,
        step: o,
        clientId: s
      });
      if (a) {
        o++;
        let d = a.status ?? [];
        u(this, Ue).setValue(d), i = a.requestId, r = a.complete, u(this, ae).setValue(a.inBackground), r && u(this, Z).setValue((a == null ? void 0 : a.actions) ?? []);
      } else
        r = !0;
    } while (!r);
    n.file && n.action === "Export" && await this.downloadFile(i), u(this, ae).getValue() || (u(this, J).setValue(!0), u(this, X).setValue(!1));
  }
  async uploadFile() {
    const n = await this.getContext(Qt);
    return n ? !!await n.open(this, da, {
      data: {}
    }).onSubmit().catch(() => !1) : void 0;
  }
  async downloadFile(n) {
    const s = await u(this, N).downloadFile(n);
    if (!s) return;
    const r = window.URL.createObjectURL(s), i = document.createElement("a");
    i.href = r, i.download = "usync-export.zip", document.body.appendChild(i), i.dispatchEvent(new MouseEvent("click")), i.remove(), window.URL.revokeObjectURL(r);
  }
  async importSingle(n) {
    return n ? await u(this, N).importSingle(n) : void 0;
  }
}
N = new WeakMap(), oe = new WeakMap(), Me = new WeakMap(), Le = new WeakMap(), Ue = new WeakMap(), X = new WeakMap(), ae = new WeakMap(), J = new WeakMap(), Z = new WeakMap(), ze = new WeakMap(), He = new WeakMap(), Be = new WeakMap(), We = new WeakMap();
const Un = new Ms(
  "uSyncWorkspaceContext"
), Sa = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  USYNC_CORE_CONTEXT_TOKEN: Un,
  default: ms,
  uSyncWorkspaceContext: ms
}, Symbol.toStringTag, { value: "Module" }));
var va = Object.defineProperty, ba = Object.getOwnPropertyDescriptor, br = (t) => {
  throw TypeError(t);
}, O = (t, e, n, s) => {
  for (var r = s > 1 ? void 0 : s ? ba(e, n) : e, i = t.length - 1, o; i >= 0; i--)
    (o = t[i]) && (r = (s ? o(e, n, r) : o(r)) || r);
  return s && r && va(e, n, r), r;
}, zn = (t, e, n) => e.has(t) || br("Cannot " + n), ft = (t, e, n) => (zn(t, e, "read from private field"), e.get(t)), ys = (t, e, n) => e.has(t) ? br("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, n), wa = (t, e, n, s) => (zn(t, e, "write to private field"), e.set(t, n), n), ne = (t, e, n) => (zn(t, e, "access private method"), n), re, G, wr, Er, Cr, $r, Ar, kr, Ir, Pr;
let C = class extends tt {
  constructor() {
    super(), ys(this, G), ys(this, re), this._loaded = !1, this._working = !1, this._completed = !1, this._inBackground = !1, this._connected = !1, this._showProgress = !1, this._results = [], this._disabled = !1, this._setName = "Default", this._sets = [], this.consumeContext(Rn, (t) => {
      t && this.observe(t.connected, (e) => {
        this._connected = e;
      });
    }), this.consumeContext(Ds, (t) => {
      t && (wa(this, re, t), t.getSettings(), this.observe(t.settings, (e) => {
        var n, s;
        e && (this._setName = e.defaultSet ?? "Default", (n = ft(this, re)) == null || n.checkLegacy(), (s = ft(this, re)) == null || s.getHandlerSets());
      }), this.observe(t.sets, (e) => {
        var n;
        e && (this._sets = e, (n = ft(this, re)) == null || n.getActions(this._setName));
      }), this.observe(t.actions, (e) => {
        !e || e.length == 0 || (this._actions = e, this._loaded = this._actions !== null);
      }), this.observe(t.currentAction, (e) => {
        this._workingActions = e;
      }), this.observe(t.working, (e) => {
        this._working = e, this._working ? (this._buttonState = "waiting", this._disabled = !0) : this._disabled = !1;
      }), this.observe(t.results, (e) => {
        this._results = e;
      }), this.observe(t.completed, (e) => {
        this._completed = e, this._completed && (this._buttonState = "success");
      }), this.observe(t.legacy, (e) => {
        this._legacy = e;
      }), this.observe(t.inBackground, (e) => {
        this._inBackground = e;
      }), this.observe(t.workingGroup, (e) => {
        e && (this._group = e);
      }));
    });
  }
  render() {
    return this._loaded == !1 ? p`<uui-loader></uui-loader>` : p`
				<umb-body-layout>
					${ne(this, G, Cr).call(this)} ${ne(this, G, Er).call(this)}
					<div class="wrapper">
						${ne(this, G, $r).call(this)} ${ne(this, G, Ar).call(this)}
						${ne(this, G, Pr).call(this)}
						${ne(this, G, kr).call(this)}${ne(this, G, Ir).call(this)}
					</div>
				</umb-body-layout>
			`;
  }
};
re = /* @__PURE__ */ new WeakMap();
G = /* @__PURE__ */ new WeakSet();
wr = function(t) {
  var e;
  t && (this._showProgress = !0, (e = ft(this, re)) == null || e.performAction({
    setName: this._setName,
    group: t.group,
    action: t.key,
    force: t.force ?? !1,
    clean: t.clean ?? !1,
    file: t.file ?? !1
  }));
};
Er = function() {
  if (this._sets.length < 2) return T;
  var t = this._sets.map((e) => ({
    name: e.name,
    value: e.name,
    selected: e.name === this._setName
  }));
  return p`<div class="set-picker">
			<label for="set-select"
				>${this.localize.term("USyncSettings_currentHandlerSet")}</label
			>
			<uui-select
				id="set-select"
				.label=${this.localize.term("USyncSettings_currentHandlerSet")}
				.options=${t}
				@change=${(e) => {
    var s;
    const n = e.target;
    this._setName = n.value, (s = ft(this, re)) == null || s.getActions(this._setName);
  }}>
			</uui-select>
		</div> `;
};
Cr = function() {
  var t;
  return (t = this._legacy) != null && t.hasLegacy ? p`
					<div class="legacy-banner">
						<umb-icon name="icon-alert"></umb-icon>
						${this.localize.term("uSync_legacyBanner")}
					</div>
				` : T;
};
$r = function() {
  var e;
  if (!this._actions || !Array.isArray(this._actions)) return T;
  var t = (e = this._actions) == null ? void 0 : e.map((n) => p`
				<usync-action-box
					.disabled=${this._disabled}
					.group="${n}"
					.state=${this._buttonState}
					@perform-action=${ne(this, G, wr)}>
				</usync-action-box>
			`);
  return p` <div class="action-buttons-box">${t}</div> `;
};
Ar = function() {
  return this._showProgress === !0 || this._completed === !0 ? T : p`
			<umb-empty-state>
				<h2>
					<uui-icon name="usync-logo"></uui-icon>
					<umb-localize key="uSync_banner"></umb-localize>
				</h2>
			</umb-empty-state>
		`;
};
kr = function() {
  var t;
  return this._showProgress == !1 && this._completed == !1 ? T : p`
			<usync-progress-box
				.title=${((t = this._group) == null ? void 0 : t.groupName) ?? "doh!"}
				.actions=${this._workingActions}
				.complete=${this._completed}></usync-progress-box>
		`;
};
Ir = function() {
  return this._completed ? p`<usync-results .results=${this._results}></usync-results>` : T;
};
Pr = function() {
  return !this._inBackground || !this._working ? T : this._connected ? p`<uui-box class="banner info">
			<uui-icon name="icon-info"></uui-icon>
			${this.localize.term("uSync_runningInBackground")}
		</uui-box>` : p` <uui-box class="banner warning">
				<uui-icon name="icon-alert"></uui-icon>
				${this.localize.term("uSync_runningInBackground")}
				<br />
				${this.localize.term("uSync_connectionLost")}
			</uui-box>`;
};
C.styles = [
  M`
			:host {
				display: block;
				margin-top: calc(var(--uui-size-space-4) * -1);
			}

			.wrapper {
				display: flex;
				flex-direction: column;
				gap: var(--uui-size-space-4);
			}

			.legacy-banner {
				display: flex;
				gap: var(--uui-size-space-2);
				padding: var(--uui-size-space-4);
				margin: var(--uui-size-space-4) 0;
				background-color: var(--uui-color-warning);
				color: var(--uui-color-warning-contrast);
			}

			.results-box {
				position: relative;
				display: block;
				z-index: 1;
			}

			.action-buttons-box {
				position: relative;
				display: flex;
				gap: var(--uui-size-space-4);
				flex-wrap: wrap;
				align-content: stretch;
				z-index: 1;
			}

			umb-empty-state {
				position: absolute;
				top: 50%;
				transform: translateY(-50%);
				left: 0;
				right: 0;
				margin: 0 auto;
				text-align: center;
				color: var(--uui-color-border);
				z-index: 0;
			}

			umb-empty-state h2 {
				font-size: var(--uui-type-h2-size);
			}

			umb-empty-state uui-icon {
				position: relative;
				top: var(--uui-size-2);
			}

			.set-picker {
				display: flex;
				flex-direction: row;
				align-items: center;
				justify-content: flex-end;
				gap: var(--uui-size-space-2);
				margin-bottom: var(--uui-size-space-4);
				border: 1px solid var(--uui-color-border);
				padding: var(--uui-size-space-4);
			}

			.set-picker label {
				font-weight: 700;
			}

			.set-picker label::after {
				content: ':';
			}

			.info {
				background-color: var(--uui-color-positive);
				color: var(--uui-color-positive-contrast);
			}

			.warning {
				background-color: var(--uui-color-warning);
				color: var(--uui-color-warning-contrast);
			}
		`
];
O([
  _()
], C.prototype, "_actions", 2);
O([
  _()
], C.prototype, "_workingActions", 2);
O([
  _()
], C.prototype, "_loaded", 2);
O([
  _()
], C.prototype, "_legacy", 2);
O([
  _()
], C.prototype, "_buttonState", 2);
O([
  _()
], C.prototype, "_working", 2);
O([
  _()
], C.prototype, "_completed", 2);
O([
  _()
], C.prototype, "_inBackground", 2);
O([
  _()
], C.prototype, "_connected", 2);
O([
  _()
], C.prototype, "_showProgress", 2);
O([
  _()
], C.prototype, "_group", 2);
O([
  _()
], C.prototype, "_results", 2);
O([
  _()
], C.prototype, "_disabled", 2);
O([
  _()
], C.prototype, "_setName", 2);
O([
  _()
], C.prototype, "_sets", 2);
C = O([
  L("usync-default-view")
], C);
const Ea = C, Ca = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ea,
  get uSyncDefaultViewElement() {
    return C;
  }
}, Symbol.toStringTag, { value: "Module" }));
var $a = Object.defineProperty, Aa = Object.getOwnPropertyDescriptor, Tr = (t) => {
  throw TypeError(t);
}, Rr = (t, e, n, s) => {
  for (var r = s > 1 ? void 0 : s ? Aa(e, n) : e, i = t.length - 1, o; i >= 0; i--)
    (o = t[i]) && (r = (s ? o(e, n, r) : o(r)) || r);
  return s && r && $a(e, n, r), r;
}, Or = (t, e, n) => e.has(t) || Tr("Cannot " + n), Ss = (t, e, n) => (Or(t, e, "read from private field"), n ? n.call(t) : e.get(t)), ka = (t, e, n) => e.has(t) ? Tr("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, n), Ia = (t, e, n, s) => (Or(t, e, "write to private field"), e.set(t, n), n), lt;
let Xe = class extends $t(et) {
  constructor() {
    super(), ka(this, lt), this.version = D.version, Ia(this, lt, new ii(this)), this.observe(Ss(this, lt).completed, (t) => {
    });
  }
  async connectedCallback() {
    super.connectedCallback();
    const t = await Ss(this, lt).getAddons();
    this.version = `v${(t == null ? void 0 : t.version) ?? D.version}`;
  }
  render() {
    return p`
			<umb-workspace-editor .enforceNoFooter=${!0}>
				<div slot="header" class="header">
					<div>
						<strong><umb-localize key="uSync_name"></umb-localize></strong><br /><em
							>${this.version}</em
						>
					</div>
				</div>
			</umb-workspace-editor>
		`;
  }
};
lt = /* @__PURE__ */ new WeakMap();
Xe.styles = [
  pi,
  M`
			umb-workspace-editor > div.header {
				display: flex;
				align-items: center;
				align-content: center;
			}
		`
];
Rr([
  _()
], Xe.prototype, "version", 2);
Xe = Rr([
  L("usync-workspace-root")
], Xe);
const Pa = Xe, Ta = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Pa,
  get uSyncWorkspaceRootElement() {
    return Xe;
  }
}, Symbol.toStringTag, { value: "Module" }));
var Ra = Object.defineProperty, Oa = Object.getOwnPropertyDescriptor, xr = (t) => {
  throw TypeError(t);
}, Hn = (t, e, n, s) => {
  for (var r = s > 1 ? void 0 : s ? Oa(e, n) : e, i = t.length - 1, o; i >= 0; i--)
    (o = t[i]) && (r = (s ? o(e, n, r) : o(r)) || r);
  return s && r && Ra(e, n, r), r;
}, Bn = (t, e, n) => e.has(t) || xr("Cannot " + n), xa = (t, e, n) => (Bn(t, e, "read from private field"), n ? n.call(t) : e.get(t)), vs = (t, e, n) => e.has(t) ? xr("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, n), Na = (t, e, n, s) => (Bn(t, e, "write to private field"), e.set(t, n), n), bs = (t, e, n) => (Bn(t, e, "access private method"), n), Yt, Ht, Nr, Dr;
let Je = class extends en {
  constructor() {
    super(), vs(this, Ht), vs(this, Yt), this.consumeContext(Un, (t) => {
      t && Na(this, Yt, t);
    });
  }
  render() {
    var t, e;
    return at`<umb-body-layout
			.headline=${`Import : ${((t = this.data) == null ? void 0 : t.action.name) ?? ""} [${(e = this.data) == null ? void 0 : e.action.itemType}]`}>
			${this.renderResult()}
			<div slot="actions">
				<uui-button
					id="cancel"
					.label=${this.localize.term("general_close")}
					@click="${bs(this, Ht, Nr)}"></uui-button>
				${Wt(
      !this.result,
      () => at` <uui-button
							id="import"
							look="primary"
							color="positive"
							type="button"
							.state=${this.importState}
							.label=${this.localize.term("uSync_importSingle")}
							@click="${bs(this, Ht, Dr)}"></uui-button>`
    )}
			</div>
		</umb-body-layout>`;
  }
  renderResult() {
    return this.result ? this.result.success ? at`<div>
				<umb-localize key="uSync_importSingleSuccess"></umb-localize>
			</div>` : at`<div>
				<umb-localize
					key="uSync_importSingleFailed"
					.args=${[this.result.message]}></umb-localize>
			</div>` : at` <strong>
				<umb-localize key="uSync_importSingleWarning"></umb-localize>
			</strong>`;
  }
};
Yt = /* @__PURE__ */ new WeakMap();
Ht = /* @__PURE__ */ new WeakSet();
Nr = function() {
  var t;
  (t = this.modalContext) == null || t.reject();
};
Dr = async function() {
  var e, n;
  if (!((e = this.data) != null && e.action)) return;
  this.importState = "waiting";
  const t = await ((n = xa(this, Yt)) == null ? void 0 : n.importSingle(this.data.action));
  this.result = t == null ? void 0 : t.data, t != null && t.data.success ? this.importState = "success" : this.importState = "failed";
};
Je.styles = Io`
		umb-body-layout {
			min-width: 450px;
			max-width: 450px;
		}
	`;
Hn([
  rr()
], Je.prototype, "importState", 2);
Hn([
  rr()
], Je.prototype, "result", 2);
Je = Hn([
  tr("usync-import-single-modal")
], Je);
const Da = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get default() {
    return Je;
  }
}, Symbol.toStringTag, { value: "Module" }));
var Ma = Object.defineProperty, La = Object.getOwnPropertyDescriptor, Mr = (t) => {
  throw TypeError(t);
}, Lr = (t, e, n, s) => {
  for (var r = s > 1 ? void 0 : s ? La(e, n) : e, i = t.length - 1, o; i >= 0; i--)
    (o = t[i]) && (r = (s ? o(e, n, r) : o(r)) || r);
  return s && r && Ma(e, n, r), r;
}, Ua = (t, e, n) => e.has(t) || Mr("Cannot " + n), za = (t, e, n) => e.has(t) ? Mr("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, n), ws = (t, e, n) => (Ua(t, e, "access private method"), n), Bt, Ur, zr;
let Kt = class extends tt {
  constructor() {
    super(...arguments), za(this, Bt);
  }
  render() {
    if (!this.result) return null;
    const t = this.result, e = t.change == Y.NO_CHANGE ? "icon-trafic" : t.success ? "icon-check color-green" : "icon-wrong color-red", n = t.change == Y.NO_CHANGE || t.change == Y.EXPORT;
    return p`<div
			class="${_t({ no_change: n })} row"
			@click=${() => ws(this, Bt, Ur).call(this, t)}>
			<div class="icon-cell" .noPadding=${!0}>
				<umb-icon .name=${e}></umb-icon>
			</div>
			<div class="row-content" .clipText=${!0}>
				<div class="item-detail">
					<div class="item-change">${t.change}</div>
				</div>
				<div class="item-name">
					<div>${t.name}</div>
					<div>${this.renderMessage(t)}</div>
				</div>
			</div>
		</div>`;
  }
  renderMessage(t) {
    return t.change != Y.FAIL && t.change != Y.IMPORT_FAIL || !t.message ? p`<em>${t.message}</em>` : p` <uui-button
					look="outline"
					color="danger"
					label="View error"
					compact
					@click=${(e) => ws(this, Bt, zr).call(this, e, t)}></uui-button>`;
  }
};
Bt = /* @__PURE__ */ new WeakSet();
Ur = async function(t) {
  t.change == Y.NO_CHANGE || t.change == Y.EXPORT || this.dispatchEvent(new Ho(t));
};
zr = async function(t, e) {
  t.stopPropagation();
  const n = await this.getContext(Qt), s = n == null ? void 0 : n.open(this, ea, {
    data: {
      action: e
    }
  });
  return await (s == null ? void 0 : s.onSubmit().catch(() => {
  }));
};
Kt.styles = M`
		.row {
			display: flex;
			align-items: center;
			gap: var(--uui-size-space-5);
			padding: var(--uui-size-space-5);
			border-bottom: 1px solid var(--uui-color-border);
			cursor: pointer;
		}

		.row:hover {
			background-color: var(--uui-color-surface-alt);
		}

		.no_change {
			color: var(--uui-color-disabled-contrast);
			cursor: default;
		}

		.row-content {
			gap: 10px;
			flex-grow: 1;
			display: flex;
			align-items: center;
			justify-content: space-between;
		}

		.item-name {
			display: flex;
			font-weight: bold;
			align-items: center;
			flex-grow: 2;
			justify-content: space-between;
		}

		.item-detail {
			display: flex;
			flex-direction: column;
			font-size: smaller;
			min-width: 60px;
		}
	`;
Lr([
  sr({ type: Object })
], Kt.prototype, "result", 2);
Kt = Lr([
  tr("usync-result-row")
], Kt);
const Tl = new Ms(
  "uSyncSignalRContext"
);
class we extends Error {
  /** Constructs a new instance of {@link @microsoft/signalr.HttpError}.
   *
   * @param {string} errorMessage A descriptive error message.
   * @param {number} statusCode The HTTP status code represented by this error.
   */
  constructor(e, n) {
    const s = new.target.prototype;
    super(`${e}: Status code '${n}'`), this.statusCode = n, this.__proto__ = s;
  }
}
class Wn extends Error {
  /** Constructs a new instance of {@link @microsoft/signalr.TimeoutError}.
   *
   * @param {string} errorMessage A descriptive error message.
   */
  constructor(e = "A timeout occurred.") {
    const n = new.target.prototype;
    super(e), this.__proto__ = n;
  }
}
class V extends Error {
  /** Constructs a new instance of {@link AbortError}.
   *
   * @param {string} errorMessage A descriptive error message.
   */
  constructor(e = "An abort occurred.") {
    const n = new.target.prototype;
    super(e), this.__proto__ = n;
  }
}
class Ha extends Error {
  /** Constructs a new instance of {@link @microsoft/signalr.UnsupportedTransportError}.
   *
   * @param {string} message A descriptive error message.
   * @param {HttpTransportType} transport The {@link @microsoft/signalr.HttpTransportType} this error occurred on.
   */
  constructor(e, n) {
    const s = new.target.prototype;
    super(e), this.transport = n, this.errorType = "UnsupportedTransportError", this.__proto__ = s;
  }
}
class Ba extends Error {
  /** Constructs a new instance of {@link @microsoft/signalr.DisabledTransportError}.
   *
   * @param {string} message A descriptive error message.
   * @param {HttpTransportType} transport The {@link @microsoft/signalr.HttpTransportType} this error occurred on.
   */
  constructor(e, n) {
    const s = new.target.prototype;
    super(e), this.transport = n, this.errorType = "DisabledTransportError", this.__proto__ = s;
  }
}
class Wa extends Error {
  /** Constructs a new instance of {@link @microsoft/signalr.FailedToStartTransportError}.
   *
   * @param {string} message A descriptive error message.
   * @param {HttpTransportType} transport The {@link @microsoft/signalr.HttpTransportType} this error occurred on.
   */
  constructor(e, n) {
    const s = new.target.prototype;
    super(e), this.transport = n, this.errorType = "FailedToStartTransportError", this.__proto__ = s;
  }
}
class Es extends Error {
  /** Constructs a new instance of {@link @microsoft/signalr.FailedToNegotiateWithServerError}.
   *
   * @param {string} message A descriptive error message.
   */
  constructor(e) {
    const n = new.target.prototype;
    super(e), this.errorType = "FailedToNegotiateWithServerError", this.__proto__ = n;
  }
}
class ja extends Error {
  /** Constructs a new instance of {@link @microsoft/signalr.AggregateErrors}.
   *
   * @param {string} message A descriptive error message.
   * @param {Error[]} innerErrors The collection of errors this error is aggregating.
   */
  constructor(e, n) {
    const s = new.target.prototype;
    super(e), this.innerErrors = n, this.__proto__ = s;
  }
}
class Hr {
  constructor(e, n, s) {
    this.statusCode = e, this.statusText = n, this.content = s;
  }
}
class on {
  get(e, n) {
    return this.send({
      ...n,
      method: "GET",
      url: e
    });
  }
  post(e, n) {
    return this.send({
      ...n,
      method: "POST",
      url: e
    });
  }
  delete(e, n) {
    return this.send({
      ...n,
      method: "DELETE",
      url: e
    });
  }
  /** Gets all cookies that apply to the specified URL.
   *
   * @param url The URL that the cookies are valid for.
   * @returns {string} A string containing all the key-value cookie pairs for the specified URL.
   */
  // @ts-ignore
  getCookieString(e) {
    return "";
  }
}
var l;
(function(t) {
  t[t.Trace = 0] = "Trace", t[t.Debug = 1] = "Debug", t[t.Information = 2] = "Information", t[t.Warning = 3] = "Warning", t[t.Error = 4] = "Error", t[t.Critical = 5] = "Critical", t[t.None = 6] = "None";
})(l || (l = {}));
class vt {
  constructor() {
  }
  /** @inheritDoc */
  // eslint-disable-next-line
  log(e, n) {
  }
}
vt.instance = new vt();
const Va = "10.0.0";
class E {
  static isRequired(e, n) {
    if (e == null)
      throw new Error(`The '${n}' argument is required.`);
  }
  static isNotEmpty(e, n) {
    if (!e || e.match(/^\s*$/))
      throw new Error(`The '${n}' argument should not be empty.`);
  }
  static isIn(e, n, s) {
    if (!(e in n))
      throw new Error(`Unknown ${s} value: ${e}.`);
  }
}
class w {
  // react-native has a window but no document so we should check both
  static get isBrowser() {
    return !w.isNode && typeof window == "object" && typeof window.document == "object";
  }
  // WebWorkers don't have a window object so the isBrowser check would fail
  static get isWebWorker() {
    return !w.isNode && typeof self == "object" && "importScripts" in self;
  }
  // react-native has a window but no document
  static get isReactNative() {
    return !w.isNode && typeof window == "object" && typeof window.document > "u";
  }
  // Node apps shouldn't have a window object, but WebWorkers don't either
  // so we need to check for both WebWorker and window
  static get isNode() {
    return typeof process < "u" && process.release && process.release.name === "node";
  }
}
function bt(t, e) {
  let n = "";
  return Ae(t) ? (n = `Binary data of length ${t.byteLength}`, e && (n += `. Content: '${Fa(t)}'`)) : typeof t == "string" && (n = `String data of length ${t.length}`, e && (n += `. Content: '${t}'`)), n;
}
function Fa(t) {
  const e = new Uint8Array(t);
  let n = "";
  return e.forEach((s) => {
    const r = s < 16 ? "0" : "";
    n += `0x${r}${s.toString(16)} `;
  }), n.substring(0, n.length - 1);
}
function Ae(t) {
  return t && typeof ArrayBuffer < "u" && (t instanceof ArrayBuffer || // Sometimes we get an ArrayBuffer that doesn't satisfy instanceof
  t.constructor && t.constructor.name === "ArrayBuffer");
}
async function Br(t, e, n, s, r, i) {
  const o = {}, [c, a] = Ze();
  o[c] = a, t.log(l.Trace, `(${e} transport) sending data. ${bt(r, i.logMessageContent)}.`);
  const d = Ae(r) ? "arraybuffer" : "text", h = await n.post(s, {
    content: r,
    headers: { ...o, ...i.headers },
    responseType: d,
    timeout: i.timeout,
    withCredentials: i.withCredentials
  });
  t.log(l.Trace, `(${e} transport) request complete. Response status: ${h.statusCode}.`);
}
function qa(t) {
  return t === void 0 ? new Xt(l.Information) : t === null ? vt.instance : t.log !== void 0 ? t : new Xt(t);
}
class Ga {
  constructor(e, n) {
    this._subject = e, this._observer = n;
  }
  dispose() {
    const e = this._subject.observers.indexOf(this._observer);
    e > -1 && this._subject.observers.splice(e, 1), this._subject.observers.length === 0 && this._subject.cancelCallback && this._subject.cancelCallback().catch((n) => {
    });
  }
}
class Xt {
  constructor(e) {
    this._minLevel = e, this.out = console;
  }
  log(e, n) {
    if (e >= this._minLevel) {
      const s = `[${(/* @__PURE__ */ new Date()).toISOString()}] ${l[e]}: ${n}`;
      switch (e) {
        case l.Critical:
        case l.Error:
          this.out.error(s);
          break;
        case l.Warning:
          this.out.warn(s);
          break;
        case l.Information:
          this.out.info(s);
          break;
        default:
          this.out.log(s);
          break;
      }
    }
  }
}
function Ze() {
  let t = "X-SignalR-User-Agent";
  return w.isNode && (t = "User-Agent"), [t, Ya(Va, Ka(), Ja(), Xa())];
}
function Ya(t, e, n, s) {
  let r = "Microsoft SignalR/";
  const i = t.split(".");
  return r += `${i[0]}.${i[1]}`, r += ` (${t}; `, e && e !== "" ? r += `${e}; ` : r += "Unknown OS; ", r += `${n}`, s ? r += `; ${s}` : r += "; Unknown Runtime Version", r += ")", r;
}
function Ka() {
  if (w.isNode)
    switch (process.platform) {
      case "win32":
        return "Windows NT";
      case "darwin":
        return "macOS";
      case "linux":
        return "Linux";
      default:
        return process.platform;
    }
  else
    return "";
}
function Xa() {
  if (w.isNode)
    return process.versions.node;
}
function Ja() {
  return w.isNode ? "NodeJS" : "Browser";
}
function Sn(t) {
  return t.stack ? t.stack : t.message ? t.message : `${t}`;
}
function Za() {
  if (typeof globalThis < "u")
    return globalThis;
  if (typeof self < "u")
    return self;
  if (typeof window < "u")
    return window;
  if (typeof global < "u")
    return global;
  throw new Error("could not find global");
}
class Qa extends on {
  constructor(e) {
    if (super(), this._logger = e, typeof fetch > "u" || w.isNode) {
      const n = typeof __webpack_require__ == "function" ? __non_webpack_require__ : require;
      this._jar = new (n("tough-cookie")).CookieJar(), typeof fetch > "u" ? this._fetchType = n("node-fetch") : this._fetchType = fetch, this._fetchType = n("fetch-cookie")(this._fetchType, this._jar);
    } else
      this._fetchType = fetch.bind(Za());
    if (typeof AbortController > "u") {
      const n = typeof __webpack_require__ == "function" ? __non_webpack_require__ : require;
      this._abortControllerType = n("abort-controller");
    } else
      this._abortControllerType = AbortController;
  }
  /** @inheritDoc */
  async send(e) {
    if (e.abortSignal && e.abortSignal.aborted)
      throw new V();
    if (!e.method)
      throw new Error("No method defined.");
    if (!e.url)
      throw new Error("No url defined.");
    const n = new this._abortControllerType();
    let s;
    e.abortSignal && (e.abortSignal.onabort = () => {
      n.abort(), s = new V();
    });
    let r = null;
    if (e.timeout) {
      const a = e.timeout;
      r = setTimeout(() => {
        n.abort(), this._logger.log(l.Warning, "Timeout from HTTP request."), s = new Wn();
      }, a);
    }
    e.content === "" && (e.content = void 0), e.content && (e.headers = e.headers || {}, Ae(e.content) ? e.headers["Content-Type"] = "application/octet-stream" : e.headers["Content-Type"] = "text/plain;charset=UTF-8");
    let i;
    try {
      i = await this._fetchType(e.url, {
        body: e.content,
        cache: "no-cache",
        credentials: e.withCredentials === !0 ? "include" : "same-origin",
        headers: {
          "X-Requested-With": "XMLHttpRequest",
          ...e.headers
        },
        method: e.method,
        mode: "cors",
        redirect: "follow",
        signal: n.signal
      });
    } catch (a) {
      throw s || (this._logger.log(l.Warning, `Error from HTTP request. ${a}.`), a);
    } finally {
      r && clearTimeout(r), e.abortSignal && (e.abortSignal.onabort = null);
    }
    if (!i.ok) {
      const a = await Cs(i, "text");
      throw new we(a || i.statusText, i.status);
    }
    const c = await Cs(i, e.responseType);
    return new Hr(i.status, i.statusText, c);
  }
  getCookieString(e) {
    let n = "";
    return w.isNode && this._jar && this._jar.getCookies(e, (s, r) => n = r.join("; ")), n;
  }
}
function Cs(t, e) {
  let n;
  switch (e) {
    case "arraybuffer":
      n = t.arrayBuffer();
      break;
    case "text":
      n = t.text();
      break;
    case "blob":
    case "document":
    case "json":
      throw new Error(`${e} is not supported.`);
    default:
      n = t.text();
      break;
  }
  return n;
}
class ec extends on {
  constructor(e) {
    super(), this._logger = e;
  }
  /** @inheritDoc */
  send(e) {
    return e.abortSignal && e.abortSignal.aborted ? Promise.reject(new V()) : e.method ? e.url ? new Promise((n, s) => {
      const r = new XMLHttpRequest();
      r.open(e.method, e.url, !0), r.withCredentials = e.withCredentials === void 0 ? !0 : e.withCredentials, r.setRequestHeader("X-Requested-With", "XMLHttpRequest"), e.content === "" && (e.content = void 0), e.content && (Ae(e.content) ? r.setRequestHeader("Content-Type", "application/octet-stream") : r.setRequestHeader("Content-Type", "text/plain;charset=UTF-8"));
      const i = e.headers;
      i && Object.keys(i).forEach((o) => {
        r.setRequestHeader(o, i[o]);
      }), e.responseType && (r.responseType = e.responseType), e.abortSignal && (e.abortSignal.onabort = () => {
        r.abort(), s(new V());
      }), e.timeout && (r.timeout = e.timeout), r.onload = () => {
        e.abortSignal && (e.abortSignal.onabort = null), r.status >= 200 && r.status < 300 ? n(new Hr(r.status, r.statusText, r.response || r.responseText)) : s(new we(r.response || r.responseText || r.statusText, r.status));
      }, r.onerror = () => {
        this._logger.log(l.Warning, `Error from HTTP request. ${r.status}: ${r.statusText}.`), s(new we(r.statusText, r.status));
      }, r.ontimeout = () => {
        this._logger.log(l.Warning, "Timeout from HTTP request."), s(new Wn());
      }, r.send(e.content);
    }) : Promise.reject(new Error("No url defined.")) : Promise.reject(new Error("No method defined."));
  }
}
class tc extends on {
  /** Creates a new instance of the {@link @microsoft/signalr.DefaultHttpClient}, using the provided {@link @microsoft/signalr.ILogger} to log messages. */
  constructor(e) {
    if (super(), typeof fetch < "u" || w.isNode)
      this._httpClient = new Qa(e);
    else if (typeof XMLHttpRequest < "u")
      this._httpClient = new ec(e);
    else
      throw new Error("No usable HttpClient found.");
  }
  /** @inheritDoc */
  send(e) {
    return e.abortSignal && e.abortSignal.aborted ? Promise.reject(new V()) : e.method ? e.url ? this._httpClient.send(e) : Promise.reject(new Error("No url defined.")) : Promise.reject(new Error("No method defined."));
  }
  getCookieString(e) {
    return this._httpClient.getCookieString(e);
  }
}
class z {
  static write(e) {
    return `${e}${z.RecordSeparator}`;
  }
  static parse(e) {
    if (e[e.length - 1] !== z.RecordSeparator)
      throw new Error("Message is incomplete.");
    const n = e.split(z.RecordSeparator);
    return n.pop(), n;
  }
}
z.RecordSeparatorCode = 30;
z.RecordSeparator = String.fromCharCode(z.RecordSeparatorCode);
class nc {
  // Handshake request is always JSON
  writeHandshakeRequest(e) {
    return z.write(JSON.stringify(e));
  }
  parseHandshakeResponse(e) {
    let n, s;
    if (Ae(e)) {
      const c = new Uint8Array(e), a = c.indexOf(z.RecordSeparatorCode);
      if (a === -1)
        throw new Error("Message is incomplete.");
      const d = a + 1;
      n = String.fromCharCode.apply(null, Array.prototype.slice.call(c.slice(0, d))), s = c.byteLength > d ? c.slice(d).buffer : null;
    } else {
      const c = e, a = c.indexOf(z.RecordSeparator);
      if (a === -1)
        throw new Error("Message is incomplete.");
      const d = a + 1;
      n = c.substring(0, d), s = c.length > d ? c.substring(d) : null;
    }
    const r = z.parse(n), i = JSON.parse(r[0]);
    if (i.type)
      throw new Error("Expected a handshake response from the server.");
    return [s, i];
  }
}
var g;
(function(t) {
  t[t.Invocation = 1] = "Invocation", t[t.StreamItem = 2] = "StreamItem", t[t.Completion = 3] = "Completion", t[t.StreamInvocation = 4] = "StreamInvocation", t[t.CancelInvocation = 5] = "CancelInvocation", t[t.Ping = 6] = "Ping", t[t.Close = 7] = "Close", t[t.Ack = 8] = "Ack", t[t.Sequence = 9] = "Sequence";
})(g || (g = {}));
class sc {
  constructor() {
    this.observers = [];
  }
  next(e) {
    for (const n of this.observers)
      n.next(e);
  }
  error(e) {
    for (const n of this.observers)
      n.error && n.error(e);
  }
  complete() {
    for (const e of this.observers)
      e.complete && e.complete();
  }
  subscribe(e) {
    return this.observers.push(e), new Ga(this, e);
  }
}
class rc {
  constructor(e, n, s) {
    this._bufferSize = 1e5, this._messages = [], this._totalMessageCount = 0, this._waitForSequenceMessage = !1, this._nextReceivingSequenceId = 1, this._latestReceivedSequenceId = 0, this._bufferedByteCount = 0, this._reconnectInProgress = !1, this._protocol = e, this._connection = n, this._bufferSize = s;
  }
  async _send(e) {
    const n = this._protocol.writeMessage(e);
    let s = Promise.resolve();
    if (this._isInvocationMessage(e)) {
      this._totalMessageCount++;
      let r = () => {
      }, i = () => {
      };
      Ae(n) ? this._bufferedByteCount += n.byteLength : this._bufferedByteCount += n.length, this._bufferedByteCount >= this._bufferSize && (s = new Promise((o, c) => {
        r = o, i = c;
      })), this._messages.push(new ic(n, this._totalMessageCount, r, i));
    }
    try {
      this._reconnectInProgress || await this._connection.send(n);
    } catch {
      this._disconnected();
    }
    await s;
  }
  _ack(e) {
    let n = -1;
    for (let s = 0; s < this._messages.length; s++) {
      const r = this._messages[s];
      if (r._id <= e.sequenceId)
        n = s, Ae(r._message) ? this._bufferedByteCount -= r._message.byteLength : this._bufferedByteCount -= r._message.length, r._resolver();
      else if (this._bufferedByteCount < this._bufferSize)
        r._resolver();
      else
        break;
    }
    n !== -1 && (this._messages = this._messages.slice(n + 1));
  }
  _shouldProcessMessage(e) {
    if (this._waitForSequenceMessage)
      return e.type !== g.Sequence ? !1 : (this._waitForSequenceMessage = !1, !0);
    if (!this._isInvocationMessage(e))
      return !0;
    const n = this._nextReceivingSequenceId;
    return this._nextReceivingSequenceId++, n <= this._latestReceivedSequenceId ? (n === this._latestReceivedSequenceId && this._ackTimer(), !1) : (this._latestReceivedSequenceId = n, this._ackTimer(), !0);
  }
  _resetSequence(e) {
    if (e.sequenceId > this._nextReceivingSequenceId) {
      this._connection.stop(new Error("Sequence ID greater than amount of messages we've received."));
      return;
    }
    this._nextReceivingSequenceId = e.sequenceId;
  }
  _disconnected() {
    this._reconnectInProgress = !0, this._waitForSequenceMessage = !0;
  }
  async _resend() {
    const e = this._messages.length !== 0 ? this._messages[0]._id : this._totalMessageCount + 1;
    await this._connection.send(this._protocol.writeMessage({ type: g.Sequence, sequenceId: e }));
    const n = this._messages;
    for (const s of n)
      await this._connection.send(s._message);
    this._reconnectInProgress = !1;
  }
  _dispose(e) {
    e ?? (e = new Error("Unable to reconnect to server."));
    for (const n of this._messages)
      n._rejector(e);
  }
  _isInvocationMessage(e) {
    switch (e.type) {
      case g.Invocation:
      case g.StreamItem:
      case g.Completion:
      case g.StreamInvocation:
      case g.CancelInvocation:
        return !0;
      case g.Close:
      case g.Sequence:
      case g.Ping:
      case g.Ack:
        return !1;
    }
  }
  _ackTimer() {
    this._ackTimerHandle === void 0 && (this._ackTimerHandle = setTimeout(async () => {
      try {
        this._reconnectInProgress || await this._connection.send(this._protocol.writeMessage({ type: g.Ack, sequenceId: this._latestReceivedSequenceId }));
      } catch {
      }
      clearTimeout(this._ackTimerHandle), this._ackTimerHandle = void 0;
    }, 1e3));
  }
}
class ic {
  constructor(e, n, s, r) {
    this._message = e, this._id = n, this._resolver = s, this._rejector = r;
  }
}
const oc = 30 * 1e3, ac = 15 * 1e3, cc = 1e5;
var v;
(function(t) {
  t.Disconnected = "Disconnected", t.Connecting = "Connecting", t.Connected = "Connected", t.Disconnecting = "Disconnecting", t.Reconnecting = "Reconnecting";
})(v || (v = {}));
class jn {
  /** @internal */
  // Using a public static factory method means we can have a private constructor and an _internal_
  // create method that can be used by HubConnectionBuilder. An "internal" constructor would just
  // be stripped away and the '.d.ts' file would have no constructor, which is interpreted as a
  // public parameter-less constructor.
  static create(e, n, s, r, i, o, c) {
    return new jn(e, n, s, r, i, o, c);
  }
  constructor(e, n, s, r, i, o, c) {
    this._nextKeepAlive = 0, this._freezeEventListener = () => {
      this._logger.log(l.Warning, "The page is being frozen, this will likely lead to the connection being closed and messages being lost. For more information see the docs at https://learn.microsoft.com/aspnet/core/signalr/javascript-client#bsleep");
    }, E.isRequired(e, "connection"), E.isRequired(n, "logger"), E.isRequired(s, "protocol"), this.serverTimeoutInMilliseconds = i ?? oc, this.keepAliveIntervalInMilliseconds = o ?? ac, this._statefulReconnectBufferSize = c ?? cc, this._logger = n, this._protocol = s, this.connection = e, this._reconnectPolicy = r, this._handshakeProtocol = new nc(), this.connection.onreceive = (a) => this._processIncomingData(a), this.connection.onclose = (a) => this._connectionClosed(a), this._callbacks = {}, this._methods = {}, this._closedCallbacks = [], this._reconnectingCallbacks = [], this._reconnectedCallbacks = [], this._invocationId = 0, this._receivedHandshakeResponse = !1, this._connectionState = v.Disconnected, this._connectionStarted = !1, this._cachedPingMessage = this._protocol.writeMessage({ type: g.Ping });
  }
  /** Indicates the state of the {@link HubConnection} to the server. */
  get state() {
    return this._connectionState;
  }
  /** Represents the connection id of the {@link HubConnection} on the server. The connection id will be null when the connection is either
   *  in the disconnected state or if the negotiation step was skipped.
   */
  get connectionId() {
    return this.connection && this.connection.connectionId || null;
  }
  /** Indicates the url of the {@link HubConnection} to the server. */
  get baseUrl() {
    return this.connection.baseUrl || "";
  }
  /**
   * Sets a new url for the HubConnection. Note that the url can only be changed when the connection is in either the Disconnected or
   * Reconnecting states.
   * @param {string} url The url to connect to.
   */
  set baseUrl(e) {
    if (this._connectionState !== v.Disconnected && this._connectionState !== v.Reconnecting)
      throw new Error("The HubConnection must be in the Disconnected or Reconnecting state to change the url.");
    if (!e)
      throw new Error("The HubConnection url must be a valid url.");
    this.connection.baseUrl = e;
  }
  /** Starts the connection.
   *
   * @returns {Promise<void>} A Promise that resolves when the connection has been successfully established, or rejects with an error.
   */
  start() {
    return this._startPromise = this._startWithStateTransitions(), this._startPromise;
  }
  async _startWithStateTransitions() {
    if (this._connectionState !== v.Disconnected)
      return Promise.reject(new Error("Cannot start a HubConnection that is not in the 'Disconnected' state."));
    this._connectionState = v.Connecting, this._logger.log(l.Debug, "Starting HubConnection.");
    try {
      await this._startInternal(), w.isBrowser && window.document.addEventListener("freeze", this._freezeEventListener), this._connectionState = v.Connected, this._connectionStarted = !0, this._logger.log(l.Debug, "HubConnection connected successfully.");
    } catch (e) {
      return this._connectionState = v.Disconnected, this._logger.log(l.Debug, `HubConnection failed to start successfully because of error '${e}'.`), Promise.reject(e);
    }
  }
  async _startInternal() {
    this._stopDuringStartError = void 0, this._receivedHandshakeResponse = !1;
    const e = new Promise((n, s) => {
      this._handshakeResolver = n, this._handshakeRejecter = s;
    });
    await this.connection.start(this._protocol.transferFormat);
    try {
      let n = this._protocol.version;
      this.connection.features.reconnect || (n = 1);
      const s = {
        protocol: this._protocol.name,
        version: n
      };
      if (this._logger.log(l.Debug, "Sending handshake request."), await this._sendMessage(this._handshakeProtocol.writeHandshakeRequest(s)), this._logger.log(l.Information, `Using HubProtocol '${this._protocol.name}'.`), this._cleanupTimeout(), this._resetTimeoutPeriod(), this._resetKeepAliveInterval(), await e, this._stopDuringStartError)
        throw this._stopDuringStartError;
      (this.connection.features.reconnect || !1) && (this._messageBuffer = new rc(this._protocol, this.connection, this._statefulReconnectBufferSize), this.connection.features.disconnected = this._messageBuffer._disconnected.bind(this._messageBuffer), this.connection.features.resend = () => {
        if (this._messageBuffer)
          return this._messageBuffer._resend();
      }), this.connection.features.inherentKeepAlive || await this._sendMessage(this._cachedPingMessage);
    } catch (n) {
      throw this._logger.log(l.Debug, `Hub handshake failed with error '${n}' during start(). Stopping HubConnection.`), this._cleanupTimeout(), this._cleanupPingTimer(), await this.connection.stop(n), n;
    }
  }
  /** Stops the connection.
   *
   * @returns {Promise<void>} A Promise that resolves when the connection has been successfully terminated, or rejects with an error.
   */
  async stop() {
    const e = this._startPromise;
    this.connection.features.reconnect = !1, this._stopPromise = this._stopInternal(), await this._stopPromise;
    try {
      await e;
    } catch {
    }
  }
  _stopInternal(e) {
    if (this._connectionState === v.Disconnected)
      return this._logger.log(l.Debug, `Call to HubConnection.stop(${e}) ignored because it is already in the disconnected state.`), Promise.resolve();
    if (this._connectionState === v.Disconnecting)
      return this._logger.log(l.Debug, `Call to HttpConnection.stop(${e}) ignored because the connection is already in the disconnecting state.`), this._stopPromise;
    const n = this._connectionState;
    return this._connectionState = v.Disconnecting, this._logger.log(l.Debug, "Stopping HubConnection."), this._reconnectDelayHandle ? (this._logger.log(l.Debug, "Connection stopped during reconnect delay. Done reconnecting."), clearTimeout(this._reconnectDelayHandle), this._reconnectDelayHandle = void 0, this._completeClose(), Promise.resolve()) : (n === v.Connected && this._sendCloseMessage(), this._cleanupTimeout(), this._cleanupPingTimer(), this._stopDuringStartError = e || new V("The connection was stopped before the hub handshake could complete."), this.connection.stop(e));
  }
  async _sendCloseMessage() {
    try {
      await this._sendWithProtocol(this._createCloseMessage());
    } catch {
    }
  }
  /** Invokes a streaming hub method on the server using the specified name and arguments.
   *
   * @typeparam T The type of the items returned by the server.
   * @param {string} methodName The name of the server method to invoke.
   * @param {any[]} args The arguments used to invoke the server method.
   * @returns {IStreamResult<T>} An object that yields results from the server as they are received.
   */
  stream(e, ...n) {
    const [s, r] = this._replaceStreamingParams(n), i = this._createStreamInvocation(e, n, r);
    let o;
    const c = new sc();
    return c.cancelCallback = () => {
      const a = this._createCancelInvocation(i.invocationId);
      return delete this._callbacks[i.invocationId], o.then(() => this._sendWithProtocol(a));
    }, this._callbacks[i.invocationId] = (a, d) => {
      if (d) {
        c.error(d);
        return;
      } else a && (a.type === g.Completion ? a.error ? c.error(new Error(a.error)) : c.complete() : c.next(a.item));
    }, o = this._sendWithProtocol(i).catch((a) => {
      c.error(a), delete this._callbacks[i.invocationId];
    }), this._launchStreams(s, o), c;
  }
  _sendMessage(e) {
    return this._resetKeepAliveInterval(), this.connection.send(e);
  }
  /**
   * Sends a js object to the server.
   * @param message The js object to serialize and send.
   */
  _sendWithProtocol(e) {
    return this._messageBuffer ? this._messageBuffer._send(e) : this._sendMessage(this._protocol.writeMessage(e));
  }
  /** Invokes a hub method on the server using the specified name and arguments. Does not wait for a response from the receiver.
   *
   * The Promise returned by this method resolves when the client has sent the invocation to the server. The server may still
   * be processing the invocation.
   *
   * @param {string} methodName The name of the server method to invoke.
   * @param {any[]} args The arguments used to invoke the server method.
   * @returns {Promise<void>} A Promise that resolves when the invocation has been successfully sent, or rejects with an error.
   */
  send(e, ...n) {
    const [s, r] = this._replaceStreamingParams(n), i = this._sendWithProtocol(this._createInvocation(e, n, !0, r));
    return this._launchStreams(s, i), i;
  }
  /** Invokes a hub method on the server using the specified name and arguments.
   *
   * The Promise returned by this method resolves when the server indicates it has finished invoking the method. When the promise
   * resolves, the server has finished invoking the method. If the server method returns a result, it is produced as the result of
   * resolving the Promise.
   *
   * @typeparam T The expected return type.
   * @param {string} methodName The name of the server method to invoke.
   * @param {any[]} args The arguments used to invoke the server method.
   * @returns {Promise<T>} A Promise that resolves with the result of the server method (if any), or rejects with an error.
   */
  invoke(e, ...n) {
    const [s, r] = this._replaceStreamingParams(n), i = this._createInvocation(e, n, !1, r);
    return new Promise((c, a) => {
      this._callbacks[i.invocationId] = (h, f) => {
        if (f) {
          a(f);
          return;
        } else h && (h.type === g.Completion ? h.error ? a(new Error(h.error)) : c(h.result) : a(new Error(`Unexpected message type: ${h.type}`)));
      };
      const d = this._sendWithProtocol(i).catch((h) => {
        a(h), delete this._callbacks[i.invocationId];
      });
      this._launchStreams(s, d);
    });
  }
  on(e, n) {
    !e || !n || (e = e.toLowerCase(), this._methods[e] || (this._methods[e] = []), this._methods[e].indexOf(n) === -1 && this._methods[e].push(n));
  }
  off(e, n) {
    if (!e)
      return;
    e = e.toLowerCase();
    const s = this._methods[e];
    if (s)
      if (n) {
        const r = s.indexOf(n);
        r !== -1 && (s.splice(r, 1), s.length === 0 && delete this._methods[e]);
      } else
        delete this._methods[e];
  }
  /** Registers a handler that will be invoked when the connection is closed.
   *
   * @param {Function} callback The handler that will be invoked when the connection is closed. Optionally receives a single argument containing the error that caused the connection to close (if any).
   */
  onclose(e) {
    e && this._closedCallbacks.push(e);
  }
  /** Registers a handler that will be invoked when the connection starts reconnecting.
   *
   * @param {Function} callback The handler that will be invoked when the connection starts reconnecting. Optionally receives a single argument containing the error that caused the connection to start reconnecting (if any).
   */
  onreconnecting(e) {
    e && this._reconnectingCallbacks.push(e);
  }
  /** Registers a handler that will be invoked when the connection successfully reconnects.
   *
   * @param {Function} callback The handler that will be invoked when the connection successfully reconnects.
   */
  onreconnected(e) {
    e && this._reconnectedCallbacks.push(e);
  }
  _processIncomingData(e) {
    if (this._cleanupTimeout(), this._receivedHandshakeResponse || (e = this._processHandshakeResponse(e), this._receivedHandshakeResponse = !0), e) {
      const n = this._protocol.parseMessages(e, this._logger);
      for (const s of n)
        if (!(this._messageBuffer && !this._messageBuffer._shouldProcessMessage(s)))
          switch (s.type) {
            case g.Invocation:
              this._invokeClientMethod(s).catch((r) => {
                this._logger.log(l.Error, `Invoke client method threw error: ${Sn(r)}`);
              });
              break;
            case g.StreamItem:
            case g.Completion: {
              const r = this._callbacks[s.invocationId];
              if (r) {
                s.type === g.Completion && delete this._callbacks[s.invocationId];
                try {
                  r(s);
                } catch (i) {
                  this._logger.log(l.Error, `Stream callback threw error: ${Sn(i)}`);
                }
              }
              break;
            }
            case g.Ping:
              break;
            case g.Close: {
              this._logger.log(l.Information, "Close message received from server.");
              const r = s.error ? new Error("Server returned an error on close: " + s.error) : void 0;
              s.allowReconnect === !0 ? this.connection.stop(r) : this._stopPromise = this._stopInternal(r);
              break;
            }
            case g.Ack:
              this._messageBuffer && this._messageBuffer._ack(s);
              break;
            case g.Sequence:
              this._messageBuffer && this._messageBuffer._resetSequence(s);
              break;
            default:
              this._logger.log(l.Warning, `Invalid message type: ${s.type}.`);
              break;
          }
    }
    this._resetTimeoutPeriod();
  }
  _processHandshakeResponse(e) {
    let n, s;
    try {
      [s, n] = this._handshakeProtocol.parseHandshakeResponse(e);
    } catch (r) {
      const i = "Error parsing handshake response: " + r;
      this._logger.log(l.Error, i);
      const o = new Error(i);
      throw this._handshakeRejecter(o), o;
    }
    if (n.error) {
      const r = "Server returned handshake error: " + n.error;
      this._logger.log(l.Error, r);
      const i = new Error(r);
      throw this._handshakeRejecter(i), i;
    } else
      this._logger.log(l.Debug, "Server handshake complete.");
    return this._handshakeResolver(), s;
  }
  _resetKeepAliveInterval() {
    this.connection.features.inherentKeepAlive || (this._nextKeepAlive = (/* @__PURE__ */ new Date()).getTime() + this.keepAliveIntervalInMilliseconds, this._cleanupPingTimer());
  }
  _resetTimeoutPeriod() {
    if (!this.connection.features || !this.connection.features.inherentKeepAlive) {
      this._timeoutHandle = setTimeout(() => this.serverTimeout(), this.serverTimeoutInMilliseconds);
      let e = this._nextKeepAlive - (/* @__PURE__ */ new Date()).getTime();
      if (e < 0) {
        this._connectionState === v.Connected && this._trySendPingMessage();
        return;
      }
      this._pingServerHandle === void 0 && (e < 0 && (e = 0), this._pingServerHandle = setTimeout(async () => {
        this._connectionState === v.Connected && await this._trySendPingMessage();
      }, e));
    }
  }
  // eslint-disable-next-line @typescript-eslint/naming-convention
  serverTimeout() {
    this.connection.stop(new Error("Server timeout elapsed without receiving a message from the server."));
  }
  async _invokeClientMethod(e) {
    const n = e.target.toLowerCase(), s = this._methods[n];
    if (!s) {
      this._logger.log(l.Warning, `No client method with the name '${n}' found.`), e.invocationId && (this._logger.log(l.Warning, `No result given for '${n}' method and invocation ID '${e.invocationId}'.`), await this._sendWithProtocol(this._createCompletionMessage(e.invocationId, "Client didn't provide a result.", null)));
      return;
    }
    const r = s.slice(), i = !!e.invocationId;
    let o, c, a;
    for (const d of r)
      try {
        const h = o;
        o = await d.apply(this, e.arguments), i && o && h && (this._logger.log(l.Error, `Multiple results provided for '${n}'. Sending error to server.`), a = this._createCompletionMessage(e.invocationId, "Client provided multiple results.", null)), c = void 0;
      } catch (h) {
        c = h, this._logger.log(l.Error, `A callback for the method '${n}' threw error '${h}'.`);
      }
    a ? await this._sendWithProtocol(a) : i ? (c ? a = this._createCompletionMessage(e.invocationId, `${c}`, null) : o !== void 0 ? a = this._createCompletionMessage(e.invocationId, null, o) : (this._logger.log(l.Warning, `No result given for '${n}' method and invocation ID '${e.invocationId}'.`), a = this._createCompletionMessage(e.invocationId, "Client didn't provide a result.", null)), await this._sendWithProtocol(a)) : o && this._logger.log(l.Error, `Result given for '${n}' method but server is not expecting a result.`);
  }
  _connectionClosed(e) {
    this._logger.log(l.Debug, `HubConnection.connectionClosed(${e}) called while in state ${this._connectionState}.`), this._stopDuringStartError = this._stopDuringStartError || e || new V("The underlying connection was closed before the hub handshake could complete."), this._handshakeResolver && this._handshakeResolver(), this._cancelCallbacksWithError(e || new Error("Invocation canceled due to the underlying connection being closed.")), this._cleanupTimeout(), this._cleanupPingTimer(), this._connectionState === v.Disconnecting ? this._completeClose(e) : this._connectionState === v.Connected && this._reconnectPolicy ? this._reconnect(e) : this._connectionState === v.Connected && this._completeClose(e);
  }
  _completeClose(e) {
    if (this._connectionStarted) {
      this._connectionState = v.Disconnected, this._connectionStarted = !1, this._messageBuffer && (this._messageBuffer._dispose(e ?? new Error("Connection closed.")), this._messageBuffer = void 0), w.isBrowser && window.document.removeEventListener("freeze", this._freezeEventListener);
      try {
        this._closedCallbacks.forEach((n) => n.apply(this, [e]));
      } catch (n) {
        this._logger.log(l.Error, `An onclose callback called with error '${e}' threw error '${n}'.`);
      }
    }
  }
  async _reconnect(e) {
    const n = Date.now();
    let s = 0, r = e !== void 0 ? e : new Error("Attempting to reconnect due to a unknown error."), i = this._getNextRetryDelay(s, 0, r);
    if (i === null) {
      this._logger.log(l.Debug, "Connection not reconnecting because the IRetryPolicy returned null on the first reconnect attempt."), this._completeClose(e);
      return;
    }
    if (this._connectionState = v.Reconnecting, e ? this._logger.log(l.Information, `Connection reconnecting because of error '${e}'.`) : this._logger.log(l.Information, "Connection reconnecting."), this._reconnectingCallbacks.length !== 0) {
      try {
        this._reconnectingCallbacks.forEach((o) => o.apply(this, [e]));
      } catch (o) {
        this._logger.log(l.Error, `An onreconnecting callback called with error '${e}' threw error '${o}'.`);
      }
      if (this._connectionState !== v.Reconnecting) {
        this._logger.log(l.Debug, "Connection left the reconnecting state in onreconnecting callback. Done reconnecting.");
        return;
      }
    }
    for (; i !== null; ) {
      if (this._logger.log(l.Information, `Reconnect attempt number ${s + 1} will start in ${i} ms.`), await new Promise((o) => {
        this._reconnectDelayHandle = setTimeout(o, i);
      }), this._reconnectDelayHandle = void 0, this._connectionState !== v.Reconnecting) {
        this._logger.log(l.Debug, "Connection left the reconnecting state during reconnect delay. Done reconnecting.");
        return;
      }
      try {
        if (await this._startInternal(), this._connectionState = v.Connected, this._logger.log(l.Information, "HubConnection reconnected successfully."), this._reconnectedCallbacks.length !== 0)
          try {
            this._reconnectedCallbacks.forEach((o) => o.apply(this, [this.connection.connectionId]));
          } catch (o) {
            this._logger.log(l.Error, `An onreconnected callback called with connectionId '${this.connection.connectionId}; threw error '${o}'.`);
          }
        return;
      } catch (o) {
        if (this._logger.log(l.Information, `Reconnect attempt failed because of error '${o}'.`), this._connectionState !== v.Reconnecting) {
          this._logger.log(l.Debug, `Connection moved to the '${this._connectionState}' from the reconnecting state during reconnect attempt. Done reconnecting.`), this._connectionState === v.Disconnecting && this._completeClose();
          return;
        }
        s++, r = o instanceof Error ? o : new Error(o.toString()), i = this._getNextRetryDelay(s, Date.now() - n, r);
      }
    }
    this._logger.log(l.Information, `Reconnect retries have been exhausted after ${Date.now() - n} ms and ${s} failed attempts. Connection disconnecting.`), this._completeClose();
  }
  _getNextRetryDelay(e, n, s) {
    try {
      return this._reconnectPolicy.nextRetryDelayInMilliseconds({
        elapsedMilliseconds: n,
        previousRetryCount: e,
        retryReason: s
      });
    } catch (r) {
      return this._logger.log(l.Error, `IRetryPolicy.nextRetryDelayInMilliseconds(${e}, ${n}) threw error '${r}'.`), null;
    }
  }
  _cancelCallbacksWithError(e) {
    const n = this._callbacks;
    this._callbacks = {}, Object.keys(n).forEach((s) => {
      const r = n[s];
      try {
        r(null, e);
      } catch (i) {
        this._logger.log(l.Error, `Stream 'error' callback called with '${e}' threw error: ${Sn(i)}`);
      }
    });
  }
  _cleanupPingTimer() {
    this._pingServerHandle && (clearTimeout(this._pingServerHandle), this._pingServerHandle = void 0);
  }
  _cleanupTimeout() {
    this._timeoutHandle && clearTimeout(this._timeoutHandle);
  }
  _createInvocation(e, n, s, r) {
    if (s)
      return r.length !== 0 ? {
        target: e,
        arguments: n,
        streamIds: r,
        type: g.Invocation
      } : {
        target: e,
        arguments: n,
        type: g.Invocation
      };
    {
      const i = this._invocationId;
      return this._invocationId++, r.length !== 0 ? {
        target: e,
        arguments: n,
        invocationId: i.toString(),
        streamIds: r,
        type: g.Invocation
      } : {
        target: e,
        arguments: n,
        invocationId: i.toString(),
        type: g.Invocation
      };
    }
  }
  _launchStreams(e, n) {
    if (e.length !== 0) {
      n || (n = Promise.resolve());
      for (const s in e)
        e[s].subscribe({
          complete: () => {
            n = n.then(() => this._sendWithProtocol(this._createCompletionMessage(s)));
          },
          error: (r) => {
            let i;
            r instanceof Error ? i = r.message : r && r.toString ? i = r.toString() : i = "Unknown error", n = n.then(() => this._sendWithProtocol(this._createCompletionMessage(s, i)));
          },
          next: (r) => {
            n = n.then(() => this._sendWithProtocol(this._createStreamItemMessage(s, r)));
          }
        });
    }
  }
  _replaceStreamingParams(e) {
    const n = [], s = [];
    for (let r = 0; r < e.length; r++) {
      const i = e[r];
      if (this._isObservable(i)) {
        const o = this._invocationId;
        this._invocationId++, n[o] = i, s.push(o.toString()), e.splice(r, 1);
      }
    }
    return [n, s];
  }
  _isObservable(e) {
    return e && e.subscribe && typeof e.subscribe == "function";
  }
  _createStreamInvocation(e, n, s) {
    const r = this._invocationId;
    return this._invocationId++, s.length !== 0 ? {
      target: e,
      arguments: n,
      invocationId: r.toString(),
      streamIds: s,
      type: g.StreamInvocation
    } : {
      target: e,
      arguments: n,
      invocationId: r.toString(),
      type: g.StreamInvocation
    };
  }
  _createCancelInvocation(e) {
    return {
      invocationId: e,
      type: g.CancelInvocation
    };
  }
  _createStreamItemMessage(e, n) {
    return {
      invocationId: e,
      item: n,
      type: g.StreamItem
    };
  }
  _createCompletionMessage(e, n, s) {
    return n ? {
      error: n,
      invocationId: e,
      type: g.Completion
    } : {
      invocationId: e,
      result: s,
      type: g.Completion
    };
  }
  _createCloseMessage() {
    return { type: g.Close };
  }
  async _trySendPingMessage() {
    try {
      await this._sendMessage(this._cachedPingMessage);
    } catch {
      this._cleanupPingTimer();
    }
  }
}
const lc = [0, 2e3, 1e4, 3e4, null];
class $s {
  constructor(e) {
    this._retryDelays = e !== void 0 ? [...e, null] : lc;
  }
  nextRetryDelayInMilliseconds(e) {
    return this._retryDelays[e.previousRetryCount];
  }
}
class Ee {
}
Ee.Authorization = "Authorization";
Ee.Cookie = "Cookie";
class hc extends on {
  constructor(e, n) {
    super(), this._innerClient = e, this._accessTokenFactory = n;
  }
  async send(e) {
    let n = !0;
    this._accessTokenFactory && (!this._accessToken || e.url && e.url.indexOf("/negotiate?") > 0) && (n = !1, this._accessToken = await this._accessTokenFactory()), this._setAuthorizationHeader(e);
    const s = await this._innerClient.send(e);
    return n && s.statusCode === 401 && this._accessTokenFactory ? (this._accessToken = await this._accessTokenFactory(), this._setAuthorizationHeader(e), await this._innerClient.send(e)) : s;
  }
  _setAuthorizationHeader(e) {
    e.headers || (e.headers = {}), this._accessToken ? e.headers[Ee.Authorization] = `Bearer ${this._accessToken}` : this._accessTokenFactory && e.headers[Ee.Authorization] && delete e.headers[Ee.Authorization];
  }
  getCookieString(e) {
    return this._innerClient.getCookieString(e);
  }
}
var $;
(function(t) {
  t[t.None = 0] = "None", t[t.WebSockets = 1] = "WebSockets", t[t.ServerSentEvents = 2] = "ServerSentEvents", t[t.LongPolling = 4] = "LongPolling";
})($ || ($ = {}));
var R;
(function(t) {
  t[t.Text = 1] = "Text", t[t.Binary = 2] = "Binary";
})(R || (R = {}));
let uc = class {
  constructor() {
    this._isAborted = !1, this.onabort = null;
  }
  abort() {
    this._isAborted || (this._isAborted = !0, this.onabort && this.onabort());
  }
  get signal() {
    return this;
  }
  get aborted() {
    return this._isAborted;
  }
};
class As {
  // This is an internal type, not exported from 'index' so this is really just internal.
  get pollAborted() {
    return this._pollAbort.aborted;
  }
  constructor(e, n, s) {
    this._httpClient = e, this._logger = n, this._pollAbort = new uc(), this._options = s, this._running = !1, this.onreceive = null, this.onclose = null;
  }
  async connect(e, n) {
    if (E.isRequired(e, "url"), E.isRequired(n, "transferFormat"), E.isIn(n, R, "transferFormat"), this._url = e, this._logger.log(l.Trace, "(LongPolling transport) Connecting."), n === R.Binary && typeof XMLHttpRequest < "u" && typeof new XMLHttpRequest().responseType != "string")
      throw new Error("Binary protocols over XmlHttpRequest not implementing advanced features are not supported.");
    const [s, r] = Ze(), i = { [s]: r, ...this._options.headers }, o = {
      abortSignal: this._pollAbort.signal,
      headers: i,
      timeout: 1e5,
      withCredentials: this._options.withCredentials
    };
    n === R.Binary && (o.responseType = "arraybuffer");
    const c = `${e}&_=${Date.now()}`;
    this._logger.log(l.Trace, `(LongPolling transport) polling: ${c}.`);
    const a = await this._httpClient.get(c, o);
    a.statusCode !== 200 ? (this._logger.log(l.Error, `(LongPolling transport) Unexpected response code: ${a.statusCode}.`), this._closeError = new we(a.statusText || "", a.statusCode), this._running = !1) : this._running = !0, this._receiving = this._poll(this._url, o);
  }
  async _poll(e, n) {
    try {
      for (; this._running; )
        try {
          const s = `${e}&_=${Date.now()}`;
          this._logger.log(l.Trace, `(LongPolling transport) polling: ${s}.`);
          const r = await this._httpClient.get(s, n);
          r.statusCode === 204 ? (this._logger.log(l.Information, "(LongPolling transport) Poll terminated by server."), this._running = !1) : r.statusCode !== 200 ? (this._logger.log(l.Error, `(LongPolling transport) Unexpected response code: ${r.statusCode}.`), this._closeError = new we(r.statusText || "", r.statusCode), this._running = !1) : r.content ? (this._logger.log(l.Trace, `(LongPolling transport) data received. ${bt(r.content, this._options.logMessageContent)}.`), this.onreceive && this.onreceive(r.content)) : this._logger.log(l.Trace, "(LongPolling transport) Poll timed out, reissuing.");
        } catch (s) {
          this._running ? s instanceof Wn ? this._logger.log(l.Trace, "(LongPolling transport) Poll timed out, reissuing.") : (this._closeError = s, this._running = !1) : this._logger.log(l.Trace, `(LongPolling transport) Poll errored after shutdown: ${s.message}`);
        }
    } finally {
      this._logger.log(l.Trace, "(LongPolling transport) Polling complete."), this.pollAborted || this._raiseOnClose();
    }
  }
  async send(e) {
    return this._running ? Br(this._logger, "LongPolling", this._httpClient, this._url, e, this._options) : Promise.reject(new Error("Cannot send until the transport is connected"));
  }
  async stop() {
    this._logger.log(l.Trace, "(LongPolling transport) Stopping polling."), this._running = !1, this._pollAbort.abort();
    try {
      await this._receiving, this._logger.log(l.Trace, `(LongPolling transport) sending DELETE request to ${this._url}.`);
      const e = {}, [n, s] = Ze();
      e[n] = s;
      const r = {
        headers: { ...e, ...this._options.headers },
        timeout: this._options.timeout,
        withCredentials: this._options.withCredentials
      };
      let i;
      try {
        await this._httpClient.delete(this._url, r);
      } catch (o) {
        i = o;
      }
      i ? i instanceof we && (i.statusCode === 404 ? this._logger.log(l.Trace, "(LongPolling transport) A 404 response was returned from sending a DELETE request.") : this._logger.log(l.Trace, `(LongPolling transport) Error sending a DELETE request: ${i}`)) : this._logger.log(l.Trace, "(LongPolling transport) DELETE request accepted.");
    } finally {
      this._logger.log(l.Trace, "(LongPolling transport) Stop finished."), this._raiseOnClose();
    }
  }
  _raiseOnClose() {
    if (this.onclose) {
      let e = "(LongPolling transport) Firing onclose event.";
      this._closeError && (e += " Error: " + this._closeError), this._logger.log(l.Trace, e), this.onclose(this._closeError);
    }
  }
}
class dc {
  constructor(e, n, s, r) {
    this._httpClient = e, this._accessToken = n, this._logger = s, this._options = r, this.onreceive = null, this.onclose = null;
  }
  async connect(e, n) {
    return E.isRequired(e, "url"), E.isRequired(n, "transferFormat"), E.isIn(n, R, "transferFormat"), this._logger.log(l.Trace, "(SSE transport) Connecting."), this._url = e, this._accessToken && (e += (e.indexOf("?") < 0 ? "?" : "&") + `access_token=${encodeURIComponent(this._accessToken)}`), new Promise((s, r) => {
      let i = !1;
      if (n !== R.Text) {
        r(new Error("The Server-Sent Events transport only supports the 'Text' transfer format"));
        return;
      }
      let o;
      if (w.isBrowser || w.isWebWorker)
        o = new this._options.EventSource(e, { withCredentials: this._options.withCredentials });
      else {
        const c = this._httpClient.getCookieString(e), a = {};
        a.Cookie = c;
        const [d, h] = Ze();
        a[d] = h, o = new this._options.EventSource(e, { withCredentials: this._options.withCredentials, headers: { ...a, ...this._options.headers } });
      }
      try {
        o.onmessage = (c) => {
          if (this.onreceive)
            try {
              this._logger.log(l.Trace, `(SSE transport) data received. ${bt(c.data, this._options.logMessageContent)}.`), this.onreceive(c.data);
            } catch (a) {
              this._close(a);
              return;
            }
        }, o.onerror = (c) => {
          i ? this._close() : r(new Error("EventSource failed to connect. The connection could not be found on the server, either the connection ID is not present on the server, or a proxy is refusing/buffering the connection. If you have multiple servers check that sticky sessions are enabled."));
        }, o.onopen = () => {
          this._logger.log(l.Information, `SSE connected to ${this._url}`), this._eventSource = o, i = !0, s();
        };
      } catch (c) {
        r(c);
        return;
      }
    });
  }
  async send(e) {
    return this._eventSource ? Br(this._logger, "SSE", this._httpClient, this._url, e, this._options) : Promise.reject(new Error("Cannot send until the transport is connected"));
  }
  stop() {
    return this._close(), Promise.resolve();
  }
  _close(e) {
    this._eventSource && (this._eventSource.close(), this._eventSource = void 0, this.onclose && this.onclose(e));
  }
}
class pc {
  constructor(e, n, s, r, i, o) {
    this._logger = s, this._accessTokenFactory = n, this._logMessageContent = r, this._webSocketConstructor = i, this._httpClient = e, this.onreceive = null, this.onclose = null, this._headers = o;
  }
  async connect(e, n) {
    E.isRequired(e, "url"), E.isRequired(n, "transferFormat"), E.isIn(n, R, "transferFormat"), this._logger.log(l.Trace, "(WebSockets transport) Connecting.");
    let s;
    return this._accessTokenFactory && (s = await this._accessTokenFactory()), new Promise((r, i) => {
      e = e.replace(/^http/, "ws");
      let o;
      const c = this._httpClient.getCookieString(e);
      let a = !1;
      if (w.isNode || w.isReactNative) {
        const d = {}, [h, f] = Ze();
        d[h] = f, s && (d[Ee.Authorization] = `Bearer ${s}`), c && (d[Ee.Cookie] = c), o = new this._webSocketConstructor(e, void 0, {
          headers: { ...d, ...this._headers }
        });
      } else
        s && (e += (e.indexOf("?") < 0 ? "?" : "&") + `access_token=${encodeURIComponent(s)}`);
      o || (o = new this._webSocketConstructor(e)), n === R.Binary && (o.binaryType = "arraybuffer"), o.onopen = (d) => {
        this._logger.log(l.Information, `WebSocket connected to ${e}.`), this._webSocket = o, a = !0, r();
      }, o.onerror = (d) => {
        let h = null;
        typeof ErrorEvent < "u" && d instanceof ErrorEvent ? h = d.error : h = "There was an error with the transport", this._logger.log(l.Information, `(WebSockets transport) ${h}.`);
      }, o.onmessage = (d) => {
        if (this._logger.log(l.Trace, `(WebSockets transport) data received. ${bt(d.data, this._logMessageContent)}.`), this.onreceive)
          try {
            this.onreceive(d.data);
          } catch (h) {
            this._close(h);
            return;
          }
      }, o.onclose = (d) => {
        if (a)
          this._close(d);
        else {
          let h = null;
          typeof ErrorEvent < "u" && d instanceof ErrorEvent ? h = d.error : h = "WebSocket failed to connect. The connection could not be found on the server, either the endpoint may not be a SignalR endpoint, the connection ID is not present on the server, or there is a proxy blocking WebSockets. If you have multiple servers check that sticky sessions are enabled.", i(new Error(h));
        }
      };
    });
  }
  send(e) {
    return this._webSocket && this._webSocket.readyState === this._webSocketConstructor.OPEN ? (this._logger.log(l.Trace, `(WebSockets transport) sending data. ${bt(e, this._logMessageContent)}.`), this._webSocket.send(e), Promise.resolve()) : Promise.reject("WebSocket is not in the OPEN state");
  }
  stop() {
    return this._webSocket && this._close(void 0), Promise.resolve();
  }
  _close(e) {
    this._webSocket && (this._webSocket.onclose = () => {
    }, this._webSocket.onmessage = () => {
    }, this._webSocket.onerror = () => {
    }, this._webSocket.close(), this._webSocket = void 0), this._logger.log(l.Trace, "(WebSockets transport) socket closed."), this.onclose && (this._isCloseEvent(e) && (e.wasClean === !1 || e.code !== 1e3) ? this.onclose(new Error(`WebSocket closed with status code: ${e.code} (${e.reason || "no reason given"}).`)) : e instanceof Error ? this.onclose(e) : this.onclose());
  }
  _isCloseEvent(e) {
    return e && typeof e.wasClean == "boolean" && typeof e.code == "number";
  }
}
const ks = 100;
class fc {
  constructor(e, n = {}) {
    if (this._stopPromiseResolver = () => {
    }, this.features = {}, this._negotiateVersion = 1, E.isRequired(e, "url"), this._logger = qa(n.logger), this.baseUrl = this._resolveUrl(e), n = n || {}, n.logMessageContent = n.logMessageContent === void 0 ? !1 : n.logMessageContent, typeof n.withCredentials == "boolean" || n.withCredentials === void 0)
      n.withCredentials = n.withCredentials === void 0 ? !0 : n.withCredentials;
    else
      throw new Error("withCredentials option was not a 'boolean' or 'undefined' value");
    n.timeout = n.timeout === void 0 ? 100 * 1e3 : n.timeout;
    let s = null, r = null;
    if (w.isNode && typeof require < "u") {
      const i = typeof __webpack_require__ == "function" ? __non_webpack_require__ : require;
      s = i("ws"), r = i("eventsource");
    }
    !w.isNode && typeof WebSocket < "u" && !n.WebSocket ? n.WebSocket = WebSocket : w.isNode && !n.WebSocket && s && (n.WebSocket = s), !w.isNode && typeof EventSource < "u" && !n.EventSource ? n.EventSource = EventSource : w.isNode && !n.EventSource && typeof r < "u" && (n.EventSource = r), this._httpClient = new hc(n.httpClient || new tc(this._logger), n.accessTokenFactory), this._connectionState = "Disconnected", this._connectionStarted = !1, this._options = n, this.onreceive = null, this.onclose = null;
  }
  async start(e) {
    if (e = e || R.Binary, E.isIn(e, R, "transferFormat"), this._logger.log(l.Debug, `Starting connection with transfer format '${R[e]}'.`), this._connectionState !== "Disconnected")
      return Promise.reject(new Error("Cannot start an HttpConnection that is not in the 'Disconnected' state."));
    if (this._connectionState = "Connecting", this._startInternalPromise = this._startInternal(e), await this._startInternalPromise, this._connectionState === "Disconnecting") {
      const n = "Failed to start the HttpConnection before stop() was called.";
      return this._logger.log(l.Error, n), await this._stopPromise, Promise.reject(new V(n));
    } else if (this._connectionState !== "Connected") {
      const n = "HttpConnection.startInternal completed gracefully but didn't enter the connection into the connected state!";
      return this._logger.log(l.Error, n), Promise.reject(new V(n));
    }
    this._connectionStarted = !0;
  }
  send(e) {
    return this._connectionState !== "Connected" ? Promise.reject(new Error("Cannot send data if the connection is not in the 'Connected' State.")) : (this._sendQueue || (this._sendQueue = new Vn(this.transport)), this._sendQueue.send(e));
  }
  async stop(e) {
    if (this._connectionState === "Disconnected")
      return this._logger.log(l.Debug, `Call to HttpConnection.stop(${e}) ignored because the connection is already in the disconnected state.`), Promise.resolve();
    if (this._connectionState === "Disconnecting")
      return this._logger.log(l.Debug, `Call to HttpConnection.stop(${e}) ignored because the connection is already in the disconnecting state.`), this._stopPromise;
    this._connectionState = "Disconnecting", this._stopPromise = new Promise((n) => {
      this._stopPromiseResolver = n;
    }), await this._stopInternal(e), await this._stopPromise;
  }
  async _stopInternal(e) {
    this._stopError = e;
    try {
      await this._startInternalPromise;
    } catch {
    }
    if (this.transport) {
      try {
        await this.transport.stop();
      } catch (n) {
        this._logger.log(l.Error, `HttpConnection.transport.stop() threw error '${n}'.`), this._stopConnection();
      }
      this.transport = void 0;
    } else
      this._logger.log(l.Debug, "HttpConnection.transport is undefined in HttpConnection.stop() because start() failed.");
  }
  async _startInternal(e) {
    let n = this.baseUrl;
    this._accessTokenFactory = this._options.accessTokenFactory, this._httpClient._accessTokenFactory = this._accessTokenFactory;
    try {
      if (this._options.skipNegotiation)
        if (this._options.transport === $.WebSockets)
          this.transport = this._constructTransport($.WebSockets), await this._startTransport(n, e);
        else
          throw new Error("Negotiation can only be skipped when using the WebSocket transport directly.");
      else {
        let s = null, r = 0;
        do {
          if (s = await this._getNegotiationResponse(n), this._connectionState === "Disconnecting" || this._connectionState === "Disconnected")
            throw new V("The connection was stopped during negotiation.");
          if (s.error)
            throw new Error(s.error);
          if (s.ProtocolVersion)
            throw new Error("Detected a connection attempt to an ASP.NET SignalR Server. This client only supports connecting to an ASP.NET Core SignalR Server. See https://aka.ms/signalr-core-differences for details.");
          if (s.url && (n = s.url), s.accessToken) {
            const i = s.accessToken;
            this._accessTokenFactory = () => i, this._httpClient._accessToken = i, this._httpClient._accessTokenFactory = void 0;
          }
          r++;
        } while (s.url && r < ks);
        if (r === ks && s.url)
          throw new Error("Negotiate redirection limit exceeded.");
        await this._createTransport(n, this._options.transport, s, e);
      }
      this.transport instanceof As && (this.features.inherentKeepAlive = !0), this._connectionState === "Connecting" && (this._logger.log(l.Debug, "The HttpConnection connected successfully."), this._connectionState = "Connected");
    } catch (s) {
      return this._logger.log(l.Error, "Failed to start the connection: " + s), this._connectionState = "Disconnected", this.transport = void 0, this._stopPromiseResolver(), Promise.reject(s);
    }
  }
  async _getNegotiationResponse(e) {
    const n = {}, [s, r] = Ze();
    n[s] = r;
    const i = this._resolveNegotiateUrl(e);
    this._logger.log(l.Debug, `Sending negotiation request: ${i}.`);
    try {
      const o = await this._httpClient.post(i, {
        content: "",
        headers: { ...n, ...this._options.headers },
        timeout: this._options.timeout,
        withCredentials: this._options.withCredentials
      });
      if (o.statusCode !== 200)
        return Promise.reject(new Error(`Unexpected status code returned from negotiate '${o.statusCode}'`));
      const c = JSON.parse(o.content);
      return (!c.negotiateVersion || c.negotiateVersion < 1) && (c.connectionToken = c.connectionId), c.useStatefulReconnect && this._options._useStatefulReconnect !== !0 ? Promise.reject(new Es("Client didn't negotiate Stateful Reconnect but the server did.")) : c;
    } catch (o) {
      let c = "Failed to complete negotiation with the server: " + o;
      return o instanceof we && o.statusCode === 404 && (c = c + " Either this is not a SignalR endpoint or there is a proxy blocking the connection."), this._logger.log(l.Error, c), Promise.reject(new Es(c));
    }
  }
  _createConnectUrl(e, n) {
    return n ? e + (e.indexOf("?") === -1 ? "?" : "&") + `id=${n}` : e;
  }
  async _createTransport(e, n, s, r) {
    let i = this._createConnectUrl(e, s.connectionToken);
    if (this._isITransport(n)) {
      this._logger.log(l.Debug, "Connection was provided an instance of ITransport, using that directly."), this.transport = n, await this._startTransport(i, r), this.connectionId = s.connectionId;
      return;
    }
    const o = [], c = s.availableTransports || [];
    let a = s;
    for (const d of c) {
      const h = this._resolveTransportOrError(d, n, r, (a == null ? void 0 : a.useStatefulReconnect) === !0);
      if (h instanceof Error)
        o.push(`${d.transport} failed:`), o.push(h);
      else if (this._isITransport(h)) {
        if (this.transport = h, !a) {
          try {
            a = await this._getNegotiationResponse(e);
          } catch (f) {
            return Promise.reject(f);
          }
          i = this._createConnectUrl(e, a.connectionToken);
        }
        try {
          await this._startTransport(i, r), this.connectionId = a.connectionId;
          return;
        } catch (f) {
          if (this._logger.log(l.Error, `Failed to start the transport '${d.transport}': ${f}`), a = void 0, o.push(new Wa(`${d.transport} failed: ${f}`, $[d.transport])), this._connectionState !== "Connecting") {
            const S = "Failed to select transport before stop() was called.";
            return this._logger.log(l.Debug, S), Promise.reject(new V(S));
          }
        }
      }
    }
    return o.length > 0 ? Promise.reject(new ja(`Unable to connect to the server with any of the available transports. ${o.join(" ")}`, o)) : Promise.reject(new Error("None of the transports supported by the client are supported by the server."));
  }
  _constructTransport(e) {
    switch (e) {
      case $.WebSockets:
        if (!this._options.WebSocket)
          throw new Error("'WebSocket' is not supported in your environment.");
        return new pc(this._httpClient, this._accessTokenFactory, this._logger, this._options.logMessageContent, this._options.WebSocket, this._options.headers || {});
      case $.ServerSentEvents:
        if (!this._options.EventSource)
          throw new Error("'EventSource' is not supported in your environment.");
        return new dc(this._httpClient, this._httpClient._accessToken, this._logger, this._options);
      case $.LongPolling:
        return new As(this._httpClient, this._logger, this._options);
      default:
        throw new Error(`Unknown transport: ${e}.`);
    }
  }
  _startTransport(e, n) {
    return this.transport.onreceive = this.onreceive, this.features.reconnect ? this.transport.onclose = async (s) => {
      let r = !1;
      if (this.features.reconnect)
        try {
          this.features.disconnected(), await this.transport.connect(e, n), await this.features.resend();
        } catch {
          r = !0;
        }
      else {
        this._stopConnection(s);
        return;
      }
      r && this._stopConnection(s);
    } : this.transport.onclose = (s) => this._stopConnection(s), this.transport.connect(e, n);
  }
  _resolveTransportOrError(e, n, s, r) {
    const i = $[e.transport];
    if (i == null)
      return this._logger.log(l.Debug, `Skipping transport '${e.transport}' because it is not supported by this client.`), new Error(`Skipping transport '${e.transport}' because it is not supported by this client.`);
    if (gc(n, i))
      if (e.transferFormats.map((c) => R[c]).indexOf(s) >= 0) {
        if (i === $.WebSockets && !this._options.WebSocket || i === $.ServerSentEvents && !this._options.EventSource)
          return this._logger.log(l.Debug, `Skipping transport '${$[i]}' because it is not supported in your environment.'`), new Ha(`'${$[i]}' is not supported in your environment.`, i);
        this._logger.log(l.Debug, `Selecting transport '${$[i]}'.`);
        try {
          return this.features.reconnect = i === $.WebSockets ? r : void 0, this._constructTransport(i);
        } catch (c) {
          return c;
        }
      } else
        return this._logger.log(l.Debug, `Skipping transport '${$[i]}' because it does not support the requested transfer format '${R[s]}'.`), new Error(`'${$[i]}' does not support ${R[s]}.`);
    else
      return this._logger.log(l.Debug, `Skipping transport '${$[i]}' because it was disabled by the client.`), new Ba(`'${$[i]}' is disabled by the client.`, i);
  }
  _isITransport(e) {
    return e && typeof e == "object" && "connect" in e;
  }
  _stopConnection(e) {
    if (this._logger.log(l.Debug, `HttpConnection.stopConnection(${e}) called while in state ${this._connectionState}.`), this.transport = void 0, e = this._stopError || e, this._stopError = void 0, this._connectionState === "Disconnected") {
      this._logger.log(l.Debug, `Call to HttpConnection.stopConnection(${e}) was ignored because the connection is already in the disconnected state.`);
      return;
    }
    if (this._connectionState === "Connecting")
      throw this._logger.log(l.Warning, `Call to HttpConnection.stopConnection(${e}) was ignored because the connection is still in the connecting state.`), new Error(`HttpConnection.stopConnection(${e}) was called while the connection is still in the connecting state.`);
    if (this._connectionState === "Disconnecting" && this._stopPromiseResolver(), e ? this._logger.log(l.Error, `Connection disconnected with error '${e}'.`) : this._logger.log(l.Information, "Connection disconnected."), this._sendQueue && (this._sendQueue.stop().catch((n) => {
      this._logger.log(l.Error, `TransportSendQueue.stop() threw error '${n}'.`);
    }), this._sendQueue = void 0), this.connectionId = void 0, this._connectionState = "Disconnected", this._connectionStarted) {
      this._connectionStarted = !1;
      try {
        this.onclose && this.onclose(e);
      } catch (n) {
        this._logger.log(l.Error, `HttpConnection.onclose(${e}) threw error '${n}'.`);
      }
    }
  }
  _resolveUrl(e) {
    if (e.lastIndexOf("https://", 0) === 0 || e.lastIndexOf("http://", 0) === 0)
      return e;
    if (!w.isBrowser)
      throw new Error(`Cannot resolve '${e}'.`);
    const n = window.document.createElement("a");
    return n.href = e, this._logger.log(l.Information, `Normalizing '${e}' to '${n.href}'.`), n.href;
  }
  _resolveNegotiateUrl(e) {
    const n = new URL(e);
    n.pathname.endsWith("/") ? n.pathname += "negotiate" : n.pathname += "/negotiate";
    const s = new URLSearchParams(n.searchParams);
    return s.has("negotiateVersion") || s.append("negotiateVersion", this._negotiateVersion.toString()), s.has("useStatefulReconnect") ? s.get("useStatefulReconnect") === "true" && (this._options._useStatefulReconnect = !0) : this._options._useStatefulReconnect === !0 && s.append("useStatefulReconnect", "true"), n.search = s.toString(), n.toString();
  }
}
function gc(t, e) {
  return !t || (e & t) !== 0;
}
class Vn {
  constructor(e) {
    this._transport = e, this._buffer = [], this._executing = !0, this._sendBufferedData = new Nt(), this._transportResult = new Nt(), this._sendLoopPromise = this._sendLoop();
  }
  send(e) {
    return this._bufferData(e), this._transportResult || (this._transportResult = new Nt()), this._transportResult.promise;
  }
  stop() {
    return this._executing = !1, this._sendBufferedData.resolve(), this._sendLoopPromise;
  }
  _bufferData(e) {
    if (this._buffer.length && typeof this._buffer[0] != typeof e)
      throw new Error(`Expected data to be of type ${typeof this._buffer} but was of type ${typeof e}`);
    this._buffer.push(e), this._sendBufferedData.resolve();
  }
  async _sendLoop() {
    for (; ; ) {
      if (await this._sendBufferedData.promise, !this._executing) {
        this._transportResult && this._transportResult.reject("Connection stopped.");
        break;
      }
      this._sendBufferedData = new Nt();
      const e = this._transportResult;
      this._transportResult = void 0;
      const n = typeof this._buffer[0] == "string" ? this._buffer.join("") : Vn._concatBuffers(this._buffer);
      this._buffer.length = 0;
      try {
        await this._transport.send(n), e.resolve();
      } catch (s) {
        e.reject(s);
      }
    }
  }
  static _concatBuffers(e) {
    const n = e.map((i) => i.byteLength).reduce((i, o) => i + o), s = new Uint8Array(n);
    let r = 0;
    for (const i of e)
      s.set(new Uint8Array(i), r), r += i.byteLength;
    return s.buffer;
  }
}
class Nt {
  constructor() {
    this.promise = new Promise((e, n) => [this._resolver, this._rejecter] = [e, n]);
  }
  resolve() {
    this._resolver();
  }
  reject(e) {
    this._rejecter(e);
  }
}
const _c = "json";
class mc {
  constructor() {
    this.name = _c, this.version = 2, this.transferFormat = R.Text;
  }
  /** Creates an array of {@link @microsoft/signalr.HubMessage} objects from the specified serialized representation.
   *
   * @param {string} input A string containing the serialized representation.
   * @param {ILogger} logger A logger that will be used to log messages that occur during parsing.
   */
  parseMessages(e, n) {
    if (typeof e != "string")
      throw new Error("Invalid input for JSON hub protocol. Expected a string.");
    if (!e)
      return [];
    n === null && (n = vt.instance);
    const s = z.parse(e), r = [];
    for (const i of s) {
      const o = JSON.parse(i);
      if (typeof o.type != "number")
        throw new Error("Invalid payload.");
      switch (o.type) {
        case g.Invocation:
          this._isInvocationMessage(o);
          break;
        case g.StreamItem:
          this._isStreamItemMessage(o);
          break;
        case g.Completion:
          this._isCompletionMessage(o);
          break;
        case g.Ping:
          break;
        case g.Close:
          break;
        case g.Ack:
          this._isAckMessage(o);
          break;
        case g.Sequence:
          this._isSequenceMessage(o);
          break;
        default:
          n.log(l.Information, "Unknown message type '" + o.type + "' ignored.");
          continue;
      }
      r.push(o);
    }
    return r;
  }
  /** Writes the specified {@link @microsoft/signalr.HubMessage} to a string and returns it.
   *
   * @param {HubMessage} message The message to write.
   * @returns {string} A string containing the serialized representation of the message.
   */
  writeMessage(e) {
    return z.write(JSON.stringify(e));
  }
  _isInvocationMessage(e) {
    this._assertNotEmptyString(e.target, "Invalid payload for Invocation message."), e.invocationId !== void 0 && this._assertNotEmptyString(e.invocationId, "Invalid payload for Invocation message.");
  }
  _isStreamItemMessage(e) {
    if (this._assertNotEmptyString(e.invocationId, "Invalid payload for StreamItem message."), e.item === void 0)
      throw new Error("Invalid payload for StreamItem message.");
  }
  _isCompletionMessage(e) {
    if (e.result && e.error)
      throw new Error("Invalid payload for Completion message.");
    !e.result && e.error && this._assertNotEmptyString(e.error, "Invalid payload for Completion message."), this._assertNotEmptyString(e.invocationId, "Invalid payload for Completion message.");
  }
  _isAckMessage(e) {
    if (typeof e.sequenceId != "number")
      throw new Error("Invalid SequenceId for Ack message.");
  }
  _isSequenceMessage(e) {
    if (typeof e.sequenceId != "number")
      throw new Error("Invalid SequenceId for Sequence message.");
  }
  _assertNotEmptyString(e, n) {
    if (typeof e != "string" || e === "")
      throw new Error(n);
  }
}
const yc = {
  trace: l.Trace,
  debug: l.Debug,
  info: l.Information,
  information: l.Information,
  warn: l.Warning,
  warning: l.Warning,
  error: l.Error,
  critical: l.Critical,
  none: l.None
};
function Sc(t) {
  const e = yc[t.toLowerCase()];
  if (typeof e < "u")
    return e;
  throw new Error(`Unknown log level: ${t}`);
}
class Ol {
  configureLogging(e) {
    if (E.isRequired(e, "logging"), vc(e))
      this.logger = e;
    else if (typeof e == "string") {
      const n = Sc(e);
      this.logger = new Xt(n);
    } else
      this.logger = new Xt(e);
    return this;
  }
  withUrl(e, n) {
    return E.isRequired(e, "url"), E.isNotEmpty(e, "url"), this.url = e, typeof n == "object" ? this.httpConnectionOptions = { ...this.httpConnectionOptions, ...n } : this.httpConnectionOptions = {
      ...this.httpConnectionOptions,
      transport: n
    }, this;
  }
  /** Configures the {@link @microsoft/signalr.HubConnection} to use the specified Hub Protocol.
   *
   * @param {IHubProtocol} protocol The {@link @microsoft/signalr.IHubProtocol} implementation to use.
   */
  withHubProtocol(e) {
    return E.isRequired(e, "protocol"), this.protocol = e, this;
  }
  withAutomaticReconnect(e) {
    if (this.reconnectPolicy)
      throw new Error("A reconnectPolicy has already been set.");
    return e ? Array.isArray(e) ? this.reconnectPolicy = new $s(e) : this.reconnectPolicy = e : this.reconnectPolicy = new $s(), this;
  }
  /** Configures {@link @microsoft/signalr.HubConnection.serverTimeoutInMilliseconds} for the {@link @microsoft/signalr.HubConnection}.
   *
   * @returns The {@link @microsoft/signalr.HubConnectionBuilder} instance, for chaining.
   */
  withServerTimeout(e) {
    return E.isRequired(e, "milliseconds"), this._serverTimeoutInMilliseconds = e, this;
  }
  /** Configures {@link @microsoft/signalr.HubConnection.keepAliveIntervalInMilliseconds} for the {@link @microsoft/signalr.HubConnection}.
   *
   * @returns The {@link @microsoft/signalr.HubConnectionBuilder} instance, for chaining.
   */
  withKeepAliveInterval(e) {
    return E.isRequired(e, "milliseconds"), this._keepAliveIntervalInMilliseconds = e, this;
  }
  /** Enables and configures options for the Stateful Reconnect feature.
   *
   * @returns The {@link @microsoft/signalr.HubConnectionBuilder} instance, for chaining.
   */
  withStatefulReconnect(e) {
    return this.httpConnectionOptions === void 0 && (this.httpConnectionOptions = {}), this.httpConnectionOptions._useStatefulReconnect = !0, this._statefulReconnectBufferSize = e == null ? void 0 : e.bufferSize, this;
  }
  /** Creates a {@link @microsoft/signalr.HubConnection} from the configuration options specified in this builder.
   *
   * @returns {HubConnection} The configured {@link @microsoft/signalr.HubConnection}.
   */
  build() {
    const e = this.httpConnectionOptions || {};
    if (e.logger === void 0 && (e.logger = this.logger), !this.url)
      throw new Error("The 'HubConnectionBuilder.withUrl' method must be called before building the connection.");
    const n = new fc(this.url, e);
    return jn.create(n, this.logger || vt.instance, this.protocol || new mc(), this.reconnectPolicy, this._serverTimeoutInMilliseconds, this._keepAliveIntervalInMilliseconds, this._statefulReconnectBufferSize);
  }
}
function vc(t) {
  return t.log !== void 0;
}
var Q, ce, Se;
class xl extends On {
  constructor(n) {
    super(n);
    m(this, Q);
    m(this, ce);
    m(this, Se);
    y(this, Q, new oi(this)), y(this, ce, new ai(this)), y(this, Se, new ci(this));
  }
  /**
   * Get the list of possible actions from the server
   * @returns Promise
   */
  async getActions(n) {
    return u(this, Q).getActionsBySet(n);
  }
  /**
   * Request of the action to perform
   * @returns PerformActionResponse.
   */
  async performAction(n) {
    return u(this, Q).performAction({
      requestId: n.id,
      action: n.action,
      options: {
        group: n.group,
        force: n.force ?? !1,
        clean: n.clean ?? !1,
        files: n.file ?? !1,
        clientId: n.clientId,
        set: n.set ?? "Default"
      },
      stepNumber: n.step
    });
  }
  /**
   * Retreives the current uSync settings
   * @returns the current uSync settings
   */
  async getSettings() {
    return await u(this, ce).getSettings();
  }
  async getAddons() {
    return await u(this, ce).getAddons();
  }
  /**
   * Get the handler settings based on the set.
   * @param setName name of the handler set in the configuration
   * @returns the settings for the named handler set.
   */
  async getHandlerSettings(n) {
    return await u(this, ce).getHandlerSettings(n);
  }
  /**
   * Checks to see if there are legacy datatypes on disk.
   * @returns results of a check for legacy files
   */
  async checkLegacy() {
    return await u(this, Se).checkLegacy();
  }
  /**
   * sets a .ignore folder in the legacy folder so we don't detect it next time.
   * @returns true if the legacy folder is ignored.
   */
  async ignoreLegacy() {
    return await u(this, Se).ignoreLegacy();
  }
  /**
   * copies the legacy folder to the new v14 folder.
   * @returns true if the legacy folder is copied to the new folder.
   */
  async copyLegacy() {
    return await u(this, Se).copyLegacy();
  }
  async downloadFile(n) {
    return (await u(this, Q).downloadFile(n)).data;
  }
  async processUpload(n) {
    return (await u(this, Q).processUpload(n)).data;
  }
  async getSets() {
    return await u(this, ce).getSets();
  }
  async importSingle(n) {
    return await u(this, Q).importSingle(n);
  }
}
Q = new WeakMap(), ce = new WeakMap(), Se = new WeakMap();
var ee;
class Nl {
  constructor(e) {
    m(this, ee);
    y(this, ee, e);
  }
  async getActionsBySet(e) {
    return await B(
      u(this, ee),
      it.getActionsBySet({
        query: { setName: e }
      })
    );
  }
  async performAction(e) {
    return await B(
      u(this, ee),
      it.performAction({
        body: e
      })
    );
  }
  async downloadFile(e) {
    return await B(
      u(this, ee),
      it.download({
        query: {
          requestId: e
        }
      })
    );
  }
  async processUpload(e) {
    return await B(
      u(this, ee),
      it.processUpload({
        query: {
          tempKey: e
        }
      })
    );
  }
  async importSingle(e) {
    return await B(
      u(this, ee),
      it.importSingle({
        body: e
      })
    );
  }
}
ee = new WeakMap();
var ve;
class Dl {
  constructor(e) {
    m(this, ve);
    y(this, ve, e);
  }
  async checkLegacy() {
    return await B(u(this, ve), un.checkLegacy());
  }
  async ignoreLegacy() {
    return await B(u(this, ve), un.ignoreLegacy());
  }
  async copyLegacy() {
    return await B(u(this, ve), un.copyLegacy());
  }
}
ve = new WeakMap();
var le;
class Ml {
  constructor(e) {
    m(this, le);
    y(this, le, e);
  }
  async getSettings() {
    return await B(u(this, le), Ot.getSettings());
  }
  async getHandlerSettings(e) {
    return await B(
      u(this, le),
      Ot.getHandlerSetSettings({ query: { id: e } })
    );
  }
  async getAddons() {
    return await B(u(this, le), Ot.getAddOns());
  }
  async getSets() {
    return await B(u(this, le), Ot.getSets());
  }
}
le = new WeakMap();
const bc = {
  name: "uSync",
  path: "usync",
  icon: "icon-infinity",
  menuName: "Syncronisation",
  menuAlias: "usync.menu",
  version: "17.x",
  conditions: {
    legacy: "usync.legacy.condition"
  },
  workspace: {
    alias: "usync.workspace",
    rootElement: "usync-root",
    elementName: "usync-workspace-root",
    contextAlias: "usync.workspace.context",
    defaultView: {
      alias: "usync.workspace.default"
    },
    settingView: {
      alias: "usync.workspace.settings"
    },
    addOnView: {
      alias: "usync.workspace.addons"
    },
    legacyView: {
      alais: "usync.workspace.legacy"
    }
  }
}, Ll = bc;
class Ul extends Ls {
  constructor(e, n) {
    super(e, n), this.config = n.config, this.consumeContext(Ds, (s) => {
      s && s.checkLegacy().then((r) => {
        this.permitted = (r == null ? void 0 : r.hasLegacy) ?? !1;
      });
    });
  }
}
const kn = "usync.section";
var je, Ve, Ct, In;
class wc extends Ls {
  constructor(n, s) {
    super(n, s);
    m(this, Ct);
    m(this, je);
    m(this, Ve);
    new fi(
      this,
      Us,
      "section",
      () => !0,
      async (r) => {
        y(this, Ve, r.map((i) => i.alias)), this.permitted = Rt(this, Ct, In).call(this);
      },
      "uSyncAllSectionsManifestFilter"
    ), this.consumeContext(zs, (r) => {
      r && this.observe(r.alias, (i) => {
        y(this, je, i), this.permitted = Rt(this, Ct, In).call(this);
      });
    });
  }
}
je = new WeakMap(), Ve = new WeakMap(), Ct = new WeakSet(), In = function() {
  return !u(this, je) || !u(this, Ve) ? !1 : !u(this, Ve).includes(kn) || u(this, je) === kn;
};
var Ec = Object.defineProperty, Cc = Object.getOwnPropertyDescriptor, Wr = (t) => {
  throw TypeError(t);
}, an = (t, e, n, s) => {
  for (var r = s > 1 ? void 0 : s ? Cc(e, n) : e, i = t.length - 1, o; i >= 0; i--)
    (o = t[i]) && (r = (s ? o(e, n, r) : o(r)) || r);
  return s && r && Ec(e, n, r), r;
}, Fn = (t, e, n) => e.has(t) || Wr("Cannot " + n), Is = (t, e, n) => (Fn(t, e, "read from private field"), e.get(t)), Ps = (t, e, n) => e.has(t) ? Wr("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, n), $c = (t, e, n, s) => (Fn(t, e, "write to private field"), e.set(t, n), n), Ac = (t, e, n) => (Fn(t, e, "access private method"), n), wt, Pn, jr;
let Et = class extends $t(et) {
  constructor() {
    super(), Ps(this, Pn), Ps(this, wt), this.hasChildren = !1, Us.byType("usync-menuItem").subscribe((t) => {
      this.hasChildren = t.length > 0;
    }), this.consumeContext(zs, (t) => {
      this.observe(
        t == null ? void 0 : t.pathname,
        (e) => {
          $c(this, wt, e), Ac(this, Pn, jr).call(this);
        },
        "observePathname"
      );
    });
  }
  render() {
    return p`<umb-menu-item-layout
			label=${this.manifest.meta.label ?? this.manifest.name}
			icon-name=${this.manifest.meta.icon ?? "icon-bug"}
			.href=${this.itemPath}
			?has-Children=${this.hasChildren}
			>${this.renderChildren()}
		</umb-menu-item-layout>`;
  }
  renderChildren() {
    return p`<umb-extension-slot
			type="usync-menuItem"
			default-element="umb-menu-item-default"></umb-extension-slot>`;
  }
};
wt = /* @__PURE__ */ new WeakMap();
Pn = /* @__PURE__ */ new WeakSet();
jr = function() {
  Is(this, wt) && (this.itemPath = `section/${Is(this, wt)}/workspace/${this.manifest.meta.entityType}`);
};
an([
  A({ type: Object, attribute: !1 })
], Et.prototype, "manifest", 2);
an([
  _()
], Et.prototype, "hasChildren", 2);
an([
  _()
], Et.prototype, "itemPath", 2);
Et = an([
  L("usync-menu")
], Et);
const Vr = "usync.condition.new-section", kc = "Umb.Section.Settings", Re = {
  alias: "usync.menu",
  name: "uSync",
  icon: "icon-infinity",
  rootElement: D.workspace.rootElement
}, Fr = {
  type: "menu",
  alias: Re.alias,
  name: Re.name,
  meta: {
    label: Re.name,
    icon: Re.icon,
    entityType: Re.rootElement
  }
}, Ic = {
  type: "menuItem",
  alias: "usync.menu.item",
  name: "uSync menu item",
  element: li,
  meta: {
    label: "uSync",
    icon: "usync-logo",
    entityType: D.workspace.rootElement,
    menus: [Re.alias]
  }
}, Pc = {
  type: "sectionSidebarApp",
  kind: "menu",
  alias: "usync.sidebarapp",
  name: "uSync section sidebar menu",
  weight: 150,
  meta: {
    label: "Synchronisation",
    menu: Fr.alias
  },
  conditions: [
    {
      alias: "Umb.Condition.SectionAlias",
      oneOf: [kc, kn]
    },
    {
      alias: Vr
    }
  ]
}, Tc = [
  // uSyncSection,
  Fr,
  Pc,
  Ic
  // subMenuItem
], Rc = {
  type: "modal",
  alias: "usync.import.modal",
  name: "uSync import modal",
  js: () => Promise.resolve().then(() => ya)
}, Oc = [Rc];
var xc = Object.defineProperty, Nc = Object.getOwnPropertyDescriptor, qr = (t) => {
  throw TypeError(t);
}, It = (t, e, n, s) => {
  for (var r = s > 1 ? void 0 : s ? Nc(e, n) : e, i = t.length - 1, o; i >= 0; i--)
    (o = t[i]) && (r = (s ? o(e, n, r) : o(r)) || r);
  return s && r && xc(e, n, r), r;
}, Dc = (t, e, n) => e.has(t) || qr("Cannot " + n), Mc = (t, e, n) => e.has(t) ? qr("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, n), vn = (t, e, n) => (Dc(t, e, "access private method"), n), ht, Tn, Gr;
let ke = class extends tt {
  constructor() {
    super(...arguments), Mc(this, ht), this.disabled = !1, this._popoverOpen = !1;
  }
  render() {
    var t, e, n;
    return p`
			<uui-button-group>
				<uui-button
					class="action-button"
					.disabled=${this.disabled}
					label=${this.localize.term(`uSync_${(t = this.button) == null ? void 0 : t.label}`)}
					color=${(e = this.button) == null ? void 0 : e.color}
					look=${(n = this.button) == null ? void 0 : n.look}
					state=${xs(this.state)}
					@click=${() => vn(this, ht, Tn).call(this, this.button)}></uui-button>

				${this.renderDropdown(this.button)}
			</uui-button-group>
		`;
  }
  renderDropdown(t) {
    var s, r;
    if (!((s = this.button) != null && s.children)) return T;
    const e = (r = this.button) == null ? void 0 : r.children.map((i) => p` <uui-menu-item
				.disabled=${this.disabled}
				.label=${this.localize.term(`uSync_${i.label}`)}
				@click-label=${() => vn(this, ht, Tn).call(this, i)}></uui-menu-item>`);
    if (e.length == 0) return T;
    const n = `popover_${t == null ? void 0 : t.key}`;
    return p`
			<uui-button
				.disabled=${this.disabled}
				popovertarget=${n}
				.label=${this.button.label}
				color=${t == null ? void 0 : t.color}
				look=${t == null ? void 0 : t.look}
				compact>
				<uui-symbol-expand
					class="expand-symbol"
					.open=${this._popoverOpen}></uui-symbol-expand>
			</uui-button>

			<uui-popover-container
				id=${n}
				margin="6"
				placement="bottom-end"
				@toggle=${vn(this, ht, Gr)}>
				<umb-popover-layout>
					<uui-scroll-container> ${e} </uui-scroll-container>
				</umb-popover-layout>
			</uui-popover-container>
		`;
  }
};
ht = /* @__PURE__ */ new WeakSet();
Tn = function(t) {
  t && this.dispatchEvent(new wi(t));
};
Gr = function(t) {
  this._popoverOpen = t.newState === "open";
};
ke.styles = M`
		.action-button {
			min-width: 110px;
		}

		.expand-symbol {
			transform: rotate(90deg);
		}

		.expand-symbol[open] {
			transform: rotate(180deg);
		}
	`;
It([
  A({ type: Object })
], ke.prototype, "button", 2);
It([
  A({ type: String })
], ke.prototype, "state", 2);
It([
  A({ type: Boolean })
], ke.prototype, "disabled", 2);
It([
  _()
], ke.prototype, "_popoverOpen", 2);
ke = It([
  L("usync-action-button")
], ke);
var Lc = Object.defineProperty, Uc = Object.getOwnPropertyDescriptor, Pt = (t, e, n, s) => {
  for (var r = s > 1 ? void 0 : s ? Uc(e, n) : e, i = t.length - 1, o; i >= 0; i--)
    (o = t[i]) && (r = (s ? o(e, n, r) : o(r)) || r);
  return s && r && Lc(e, n, r), r;
};
let Ie = class extends tt {
  constructor() {
    super(...arguments), this.label = "Upload", this.accept = "";
  }
  async _getFile(t) {
    return await new Promise((e, n) => {
      t.file(e, n);
    });
  }
  async _onFilePickerChange() {
    const e = (this._input.files ? Array.from(this._input.files) : [])[0], s = e instanceof File ? e : await this._getFile(e);
    this._file = s, this._dispachChangeEvent();
  }
  async _removeFile() {
    this._file = void 0, this._input.value = "", this._dispachChangeEvent();
  }
  _onUpload() {
    this._input.click();
  }
  _dispachChangeEvent() {
    this.dispatchEvent(new Si(this._file));
  }
  render() {
    return p`<input
				@click=${(t) => t.stopPropagation()}
				type="file"
				id="file"
				this.accept=${this.accept}
				@change=${this._onFilePickerChange} />
			${this._renderFile()} ${this._renderButton()}`;
  }
  _renderFile() {
    return this._file ? p` <div class="file">
			<div>${this._file.name}</div>
			<uui-button
				@click="${() => this._removeFile()}"
				compact
				color="danger"
				label="Remove">
				<umb-icon name="icon-trash"></umb-icon>
			</uui-button>
		</div>` : T;
  }
  _renderButton() {
    return this._file ? T : p` <uui-button
					id="add-button"
					look="placeholder"
					label=${this.label}
					@click="${this._onUpload}"></uui-button>`;
  }
};
Ie.styles = [
  M`
			.file {
				display: flex;
				align-items: center;
				gap: var(--uui-size-space-2);
			}

			#file {
				display: none;
			}

			#add-button {
				width: 100%;
			}
		`
];
Pt([
  A({ type: String })
], Ie.prototype, "label", 2);
Pt([
  A({ type: String })
], Ie.prototype, "accept", 2);
Pt([
  ni("#file")
], Ie.prototype, "_input", 2);
Pt([
  _()
], Ie.prototype, "_file", 2);
Ie = Pt([
  L("usync-upload-file-picker")
], Ie);
var zc = Object.defineProperty, Hc = Object.getOwnPropertyDescriptor, Yr = (t) => {
  throw TypeError(t);
}, cn = (t, e, n, s) => {
  for (var r = s > 1 ? void 0 : s ? Hc(e, n) : e, i = t.length - 1, o; i >= 0; i--)
    (o = t[i]) && (r = (s ? o(e, n, r) : o(r)) || r);
  return s && r && zc(e, n, r), r;
}, qn = (t, e, n) => e.has(t) || Yr("Cannot " + n), Gn = (t, e, n) => (qn(t, e, "read from private field"), n ? n.call(t) : e.get(t)), bn = (t, e, n) => e.has(t) ? Yr("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, n), Ts = (t, e, n, s) => (qn(t, e, "write to private field"), e.set(t, n), n), wn = (t, e, n) => (qn(t, e, "access private method"), n), gt, Jt, ut, Kr, Xr, Jr;
let Qe = class extends tt {
  constructor() {
    super(), bn(this, ut), bn(this, gt), bn(this, Jt), Ts(this, gt, new _i(this)), Ts(this, Jt, new Ns(this)), this.observe(Gn(this, gt).queue, (t) => {
      t.forEach((e) => {
        e.status === Hs.SUCCESS && (wn(this, ut, Xr).call(this, e.temporaryUnique), this.buttonState = "success");
      });
    });
  }
  render() {
    return p`${this.renderUploadForm()}`;
  }
  renderUploadForm() {
    return p` ${this.renderFile()} ${this.renderUploadButton()} `;
  }
  renderFile() {
    return p`
			<div class="upload-box">
				<usync-upload-file-picker
					label="Select uSync Zip file"
					@change=${wn(this, ut, Jr)}></usync-upload-file-picker>
			</div>
		`;
  }
  renderUploadButton() {
    return this.selected ? p`<uui-button
			type="button"
			look="primary"
			@click="${wn(this, ut, Kr)}"
			label="Upload"
			.state=${this.buttonState}></uui-button>` : T;
  }
};
gt = /* @__PURE__ */ new WeakMap();
Jt = /* @__PURE__ */ new WeakMap();
ut = /* @__PURE__ */ new WeakSet();
Kr = function() {
  if (!this.selected) return;
  this.buttonState = "waiting";
  const t = {
    temporaryUnique: gi.new(),
    file: this.selected,
    status: Hs.WAITING
  };
  Gn(this, gt).upload([t]);
};
Xr = async function(t) {
  const e = await Gn(this, Jt).processUpload(t);
  if (!(e != null && e.success)) {
    console.log("upload error", e);
    return;
  }
  this.dispatchEvent(new vi(e));
};
Jr = function(t) {
  this.selected = t.file;
};
Qe.styles = M`
		:host {
			display: flex;
			justify-content: space-between;
		}

		.upload-box {
			flex-grow: 2;
		}

		usync-upload-file-picker {
			width: 100%;
			flex-grow: 2;
		}
	`;
cn([
  _()
], Qe.prototype, "buttonState", 2);
cn([
  _()
], Qe.prototype, "selected", 2);
cn([
  _()
], Qe.prototype, "result", 2);
Qe = cn([
  L("usync-file-upload")
], Qe);
const Oe = D.workspace.alias, Bc = {
  type: "workspace",
  alias: Oe,
  name: "uSync core workspace",
  js: () => Promise.resolve().then(() => Ta),
  meta: {
    entityType: D.workspace.rootElement
  }
}, Wc = {
  type: "workspaceContext",
  alias: D.workspace.contextAlias,
  name: "uSync workspace context",
  js: () => Promise.resolve().then(() => Sa),
  conditions: [
    {
      alias: "Umb.Condition.WorkspaceAlias",
      match: Oe
    }
  ]
}, jc = [
  {
    type: "workspaceView",
    alias: D.workspace.defaultView.alias,
    name: "uSync workspace default view",
    js: () => Promise.resolve().then(() => Ca),
    weight: 300,
    meta: {
      label: "Default",
      pathname: "default",
      icon: "usync-logo"
    },
    conditions: [
      {
        alias: "Umb.Condition.WorkspaceAlias",
        match: Oe
      }
    ]
  },
  {
    type: "workspaceView",
    alias: D.workspace.settingView.alias,
    name: "uSync workspace settings view",
    js: () => import("./settings.element-CTQB81J4.js"),
    weight: 200,
    meta: {
      label: "Settings",
      pathname: "settings",
      icon: "icon-settings"
    },
    conditions: [
      {
        alias: "Umb.Condition.WorkspaceAlias",
        match: Oe
      }
    ]
  },
  {
    type: "workspaceView",
    alias: D.workspace.addOnView.alias,
    name: "uSync addons",
    js: () => import("./addons.element-C_4i0uPA.js"),
    weight: 100,
    meta: {
      label: "AddOns",
      pathname: "addons",
      icon: "icon-box"
    },
    conditions: [
      {
        alias: "Umb.Condition.WorkspaceAlias",
        match: Oe
      }
    ]
  },
  {
    type: "workspaceView",
    alias: D.workspace.legacyView.alais,
    name: "uSync legacy",
    js: () => import("./legacy.element-BO9gTyXF.js"),
    weight: 150,
    meta: {
      label: "Legacy",
      pathname: "legacy",
      icon: "icon-dock-connector color-red"
    },
    conditions: [
      {
        alias: "Umb.Condition.WorkspaceAlias",
        match: Oe
      },
      {
        alias: D.conditions.legacy,
        hasLegacyFiles: !0
      }
    ]
  }
], Vc = [], Fc = [
  Wc,
  Bc,
  ...jc,
  ...Vc,
  ...Oc
], qc = [
  {
    type: "localization",
    alias: "usync.lang.enus",
    name: "English",
    weight: 0,
    meta: {
      culture: "en"
    },
    js: () => import("./en-us-tyFQxUQT.js")
  }
], Gc = [...qc], Yc = {
  type: "modal",
  alias: "usync.details.modal",
  name: "usync details modal",
  js: () => Promise.resolve().then(() => qo)
}, Kc = {
  type: "modal",
  alias: "usync.legacy.modal",
  name: "uSync legacy modal",
  js: () => import("./legacy-modal-element-CKIH2-p4.js")
}, Xc = {
  type: "modal",
  alias: "usync.error.modal",
  name: "uSync error modal",
  js: () => Promise.resolve().then(() => Qo)
}, Jc = {
  type: "modal",
  alias: "usync.import.single.modal",
  name: "uSync single import modal",
  js: () => Promise.resolve().then(() => Da)
}, Zc = [Yc, Kc, Xc, Jc], Qc = [
  {
    type: "condition",
    alias: D.conditions.legacy,
    name: "uSync Legacy Files Condition",
    api: hi
  },
  {
    type: "condition",
    alias: Vr,
    name: "uSync New Section Condition",
    api: wc
  }
], el = {
  type: "icons",
  alias: "usync.icons",
  name: "uSync Icons",
  js: () => import("./icons-DpRH-q6X.js")
}, tl = [el], nl = [
  ...Gc,
  ...Tc,
  ...Fc,
  ...Zc,
  ...Qc,
  ...tl
], zl = (t, e) => {
  e.registerMany(nl), t.consumeContext(Os, (n) => {
    if (n) {
      var s = n.getOpenApiConfiguration();
      P.setConfig({
        auth: s.token,
        baseUrl: s.base,
        credentials: s.credentials
      }), P.interceptors.request.use(async (r, i) => {
        const o = await n.getLatestToken();
        return r.headers.set("Authorization", `Bearer ${o}`), r;
      });
    }
  });
};
export {
  V as AbortError,
  wl as ActionsService,
  ji as CallingConventions,
  Vi as ChangeDetailType,
  Y as ChangeType,
  tc as DefaultHttpClient,
  Fi as EventAttributes,
  qi as EventMessageTypeModel,
  Gi as FieldAttributes,
  El as FoldersService,
  Yi as GenericParameterAttributes,
  Ki as HandlerStatus,
  on as HttpClient,
  we as HttpError,
  Hr as HttpResponse,
  $ as HttpTransportType,
  jn as HubConnection,
  Ol as HubConnectionBuilder,
  v as HubConnectionState,
  mc as JsonHubProtocol,
  Xi as LayoutKind,
  l as LogLevel,
  Ji as MemberTypes,
  g as MessageType,
  Zi as MethodAttributes,
  Qi as MethodImplAttributes,
  Cl as MigrationsService,
  vt as NullLogger,
  eo as ParameterAttributes,
  to as PropertyAttributes,
  no as SecurityRuleSet,
  $l as SettingsService,
  sc as Subject,
  so as SyncFolderMode,
  Ul as SyncLegacyFilesCondition,
  wc as SyncNewSectionCondition,
  ro as SyncProcessingMode,
  Wn as TimeoutError,
  R as TransferFormat,
  io as TypeAttributes,
  Un as USYNC_CORE_CONTEXT_TOKEN,
  Il as USYNC_DETAILS_MODAL,
  ea as USYNC_ERROR_MODAL,
  Pl as USYNC_IMPORT_SINGLE_MODAL,
  Tl as USYNC_SIGNALR_CONTEXT_TOKEN,
  Ml as USyncSettingsDataSource,
  Va as VERSION,
  P as client,
  zl as onInit,
  Fe as uSyncActionBox,
  Nl as uSyncActionDataSource,
  xl as uSyncActionRepository,
  Vt as uSyncChangeView,
  Ll as uSyncConstants,
  qe as uSyncDetailsModalElement,
  Et as uSyncMenuElement,
  Dl as uSyncMigrationDataSource,
  te as uSyncProcessBox,
  Ce as uSyncResultGroupView,
  Kt as uSyncResultRow,
  pe as uSyncResultsView,
  ua as uSyncSignalRContext,
  ms as uSyncWorkspaceContext,
  Xe as uSyncWorkspaceRootElement
};
//# sourceMappingURL=uSync.js.map
