import { u as a } from "./index.js";
import { repeat as m, html as n, customElement as d } from "@umbraco-cms/backoffice/external/lit";
var c = Object.getOwnPropertyDescriptor, u = (e, s, p, i) => {
  for (var t = i > 1 ? void 0 : i ? c(s, p) : s, r = e.length - 1, l; r >= 0; r--)
    (l = e[r]) && (t = l(t) || t);
  return t;
};
const v = "forms-field-preview-dropdown";
let o = class extends a {
  render() {
    return n`<select tabindex="-1" style="opacity: 0.5; min-width: 300px">
      <option>${this.getSettingValue("SelectPrompt")}</option>
      ${m(
      this.prevalues,
      (e) => n`<option>${e.caption || e.value}</option>`
    )}
    </select>`;
  }
};
o = u([
  d(v)
], o);
const F = o;
export {
  o as FormsFieldPreviewDropdown,
  F as default
};
//# sourceMappingURL=dropdown-field-preview.element.js.map
