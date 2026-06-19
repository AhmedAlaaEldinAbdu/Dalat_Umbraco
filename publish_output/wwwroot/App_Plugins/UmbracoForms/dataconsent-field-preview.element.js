import { u as i } from "./index.js";
import { html as m, customElement as c } from "@umbraco-cms/backoffice/external/lit";
var d = Object.getOwnPropertyDescriptor, p = (s, a, o, l) => {
  for (var e = l > 1 ? void 0 : l ? d(a, o) : a, t = s.length - 1, n; t >= 0; t--)
    (n = s[t]) && (e = n(e) || e);
  return e;
};
const u = "forms-field-preview-dataconsent";
let r = class extends i {
  render() {
    return m`<input type="checkbox" disabled tabindex="-1" />
      <label>${this.getSettingValue("AcceptCopy")}</label>`;
  }
};
r = p([
  c(u)
], r);
const b = r;
export {
  r as FormsFieldPreviewDataConsent,
  b as default
};
//# sourceMappingURL=dataconsent-field-preview.element.js.map
