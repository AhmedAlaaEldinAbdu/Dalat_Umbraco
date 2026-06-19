import { UmbElementMixin as B } from "@umbraco-cms/backoffice/element-api";
import { LitElement as E, html as l, css as P, property as m, customElement as M, classMap as N, when as F, state as A } from "@umbraco-cms/backoffice/external/lit";
import { USYNC_CORE_CONTEXT_TOKEN as H } from "@jumoo/uSync";
var T = Object.defineProperty, j = Object.getOwnPropertyDescriptor, C = (e) => {
  throw TypeError(e);
}, u = (e, t, s, n) => {
  for (var i = n > 1 ? void 0 : n ? j(t, s) : t, r = e.length - 1, a; r >= 0; r--)
    (a = e[r]) && (i = (n ? a(t, s, i) : a(i)) || i);
  return n && i && T(t, s, i), i;
}, L = (e, t, s) => t.has(e) || C("Cannot " + s), R = (e, t, s) => t.has(e) ? C("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, s), V = (e, t, s) => (L(e, t, "access private method"), s), g, G;
let c = class extends E {
  constructor() {
    super(...arguments), R(this, g);
  }
  render() {
    return l`
			<div class="usync-setting-value">
				<div class="info">
					<h5>${this.name}</h5>
					<div>${this.description}</div>
				</div>
				<div class="value">${V(this, g, G).call(this)}</div>
			</div>
		`;
  }
};
g = /* @__PURE__ */ new WeakSet();
G = function() {
  if (this.value === void 0 || this.value === null)
    return l`(Not Set)`;
  if (typeof this.value == "boolean") {
    const e = { _set: this.value };
    return l`
				<uui-icon
					name=${this.value ? "icon-check" : "icon-wrong"}
					class=${N(e)}></uui-icon>
			`;
  } else if (Array.isArray(this.value)) {
    const e = this.value.map((t) => l`<li>${t}</li>`);
    return l`<ul>
					${e}
				</ul>`;
  } else
    return l` <div>${this.value}</div> `;
};
c.styles = P`
		.usync-setting-value {
			display: flex;
			justify-content: space-between;
			padding: var(--uui-size-space-2) 0;
			border-bottom: 1px solid var(--uui-color-divider);
		}

		.usync-setting-value h5 {
			margin: 0;
			padding: 0;
		}

		uui-icon {
			color: var(--uui-color-danger);
		}

		uui-icon._set {
			color: var(--uui-color-positive);
		}

		ul {
			list-style: none;
		}
	`;
u([
  m({ type: String })
], c.prototype, "name", 2);
u([
  m({ type: String })
], c.prototype, "description", 2);
u([
  m()
], c.prototype, "value", 2);
c = u([
  M("usync-setting-item")
], c);
var I = Object.defineProperty, W = Object.getOwnPropertyDescriptor, S = (e, t, s, n) => {
  for (var i = n > 1 ? void 0 : n ? W(t, s) : t, r = e.length - 1, a; r >= 0; r--)
    (a = e[r]) && (i = (n ? a(t, s, i) : a(i)) || i);
  return n && i && I(t, s, i), i;
};
let o = class extends B(E) {
  constructor() {
    super(), this.consumeContext(H, (e) => {
      e && (this.observe(e.settings, (t) => {
        t && (this.settings = t, e.getDefaultHandlerSetSettings(this.settings.defaultSet ?? "Default"));
      }), this.observe(e.handlerSettings, (t) => {
        t && (this.handlerSettings = t);
      }), e.getSettings());
    });
  }
  render() {
    var e, t, s, n, i, r, a, d, h, y, p, v, $, _, f, z, U, b, D, x, O;
    return l`
			<umb-body-layout>
				<div class="usync-settings-layout">
					<div>
						<uui-box headline=${this.localize.term("USyncSettings_settings")}>
							<usync-setting-item
								.name=${this.localize.term("USyncSettings_processingMode")}
								.description=${this.localize.term("USyncSettings_processingModeDesc")}
								.value=${(e = this.settings) == null ? void 0 : e.processingMode}></usync-setting-item>
							<usync-setting-item
								.name=${this.localize.term("USyncSettings_importAtStartup")}
								.description=${this.localize.term("USyncSettings_importAtStartupDesc")}
								.value=${(t = this.settings) == null ? void 0 : t.importAtStartup}></usync-setting-item>
							<usync-setting-item
								.name=${this.localize.term("USyncSettings_exportAtStartup")}
								.description=${this.localize.term("USyncSettings_exportAtStartupDesc")}
								.value=${(s = this.settings) == null ? void 0 : s.exportAtStartup}></usync-setting-item>

							<usync-setting-item
								.name=${this.localize.term("USyncSettings_exportOnSave")}
								.description=${this.localize.term("USyncSettings_exportOnSaveDesc")}
								.value=${(n = this.settings) == null ? void 0 : n.exportOnSave}></usync-setting-item>

							<usync-setting-item
								.name=${this.localize.term("USyncSettings_uiEnabledGroups")}
								.description=${this.localize.term("USyncSettings_uiEnabledGroupsDesc")}
								.value=${(i = this.settings) == null ? void 0 : i.uiEnabledGroups}></usync-setting-item>

							<usync-setting-item
								.name=${this.localize.term("USyncSettings_failOnMissingParent")}
								.description=${this.localize.term(
      "USyncSettings_failOnMissingParentDesc"
    )}
								.value=${(r = this.settings) == null ? void 0 : r.failOnMissingParent}></usync-setting-item>
						</uui-box>

						<uui-box headline=${this.localize.term("USyncSettings_filesAndFolders")}>
							<usync-setting-item
								.name=${this.localize.term("USyncSettings_rootSite")}
								.description=${this.localize.term("USyncSettings_rootSiteDesc")}
								.value=${(a = this.settings) == null ? void 0 : a.isRootSite}></usync-setting-item>

							<usync-setting-item
								.name=${this.localize.term("USyncSettings_rootLocked")}
								.description=${this.localize.term("USyncSettings_rootLockedDesc")}
								.value=${(d = this.settings) == null ? void 0 : d.lockRoot}></usync-setting-item>

							<usync-setting-item
								.name=${this.localize.term("USyncSettings_folders")}
								.description=${this.localize.term("USyncSettings_foldersDesc")}
								.value=${(h = this.settings) == null ? void 0 : h.folders}></usync-setting-item>
						</uui-box>
					</div>

					<div>
						<uui-box headline=${this.localize.term("USyncSettings_handlerDefaults")}>
							<usync-setting-item
								.name=${this.localize.term("USyncSettings_handlerSet")}
								.description=${this.localize.term("USyncSettings_handlerSetDesc")}
								.value=${(y = this.settings) == null ? void 0 : y.defaultSet}></usync-setting-item>

							<usync-setting-item
								.name=${this.localize.term("USyncSettings_flatStructure")}
								.description=${this.localize.term("USyncSettings_flatStructureDesc")}
								.value=${(v = (p = this.handlerSettings) == null ? void 0 : p.handlerDefaults) == null ? void 0 : v.useFlatStructure}></usync-setting-item>

							<usync-setting-item
								.name=${this.localize.term("USyncSettings_guidNames")}
								.description=${this.localize.term("USyncSettings_guidNamesDesc")}
								.value=${(_ = ($ = this.handlerSettings) == null ? void 0 : $.handlerDefaults) == null ? void 0 : _.guidNames}></usync-setting-item>

							<usync-setting-item
								.name=${this.localize.term("USyncSettings_handlerGroups")}
								.description=${this.localize.term("USyncSettings_handlerGroupsDesc")}
								.value=${(z = (f = this.handlerSettings) == null ? void 0 : f.handlerDefaults) == null ? void 0 : z.group}></usync-setting-item>

							<usync-setting-item
								.name=${this.localize.term("USyncSettings_failOnMissingParent")}
								.description=${this.localize.term(
      "USyncSettings_failOnMissingParentDesc"
    )}
								.value=${(b = (U = this.handlerSettings) == null ? void 0 : U.handlerDefaults) == null ? void 0 : b.failOnMissingParent}></usync-setting-item>

							<usync-setting-item
								.name=${this.localize.term("USyncSettings_disabledHandlers")}
								.description=${this.localize.term("USyncSettings_disabledHandlersDesc")}
								.value=${(D = this.handlerSettings) == null ? void 0 : D.disabledHandlers}></usync-setting-item>
						</uui-box>
						<uui-box headline=${this.localize.term("USyncSettings_bootSettings")}>
							<usync-setting-item
								.name=${this.localize.term("USyncSettings_firstBoot")}
								.description=${this.localize.term("USyncSettings_firstBootDesc")}
								.value=${(x = this.settings) == null ? void 0 : x.importOnFirstBoot}></usync-setting-item>
							${F(
      (O = this.settings) == null ? void 0 : O.importOnFirstBoot,
      () => {
        var w;
        return l` <usync-setting-item
										.name=${this.localize.term("USyncSettings_firstBootGroup")}
										.description=${this.localize.term("USyncSettings_firstBootGroupDesc")}
										.value=${(w = this.settings) == null ? void 0 : w.firstBootGroup}></usync-setting-item>`;
      }
    )}
						</uui-box>
					</div>
				</div>
				<div class="setting-link">
					<umb-localize key="USyncSettings_help"></umb-localize>
				</div>
			</umb-body-layout>
		`;
  }
};
o.styles = P`
		:host {
			display: block;
			margin: calc(var(--uui-size-space-4) * -1) 0;
		}

		.usync-settings-layout {
			display: grid;
			grid-template-columns: 5fr 5fr;
			grid-template-rows: auto auto;
			gap: var(--uui-size-space-4) var(--uui-size-space-4);
			grid-auto-flow: row;
			grid-template-areas: 'settings info', 'handler info';
		}

		.setting-link {
			text-align: center;
		}

		uui-box {
			margin: var(--uui-size-space-4) 0;
		}
	`;
S([
  A()
], o.prototype, "settings", 2);
S([
  A()
], o.prototype, "handlerSettings", 2);
o = S([
  M("usync-settings-view")
], o);
const Y = o;
export {
  o as USyncSettingsViewElement,
  Y as default,
  c as uSyncSettingItemElement
};
//# sourceMappingURL=settings.element-CTQB81J4.js.map
