import { u as n } from "./index.js";
import { html as a, customElement as c } from "@umbraco-cms/backoffice/external/lit";
var d = Object.getOwnPropertyDescriptor, p = (o, s, i, l) => {
  for (var e = l > 1 ? void 0 : l ? d(s, i) : s, r = o.length - 1, m; r >= 0; r--)
    (m = o[r]) && (e = m(e) || e);
  return e;
};
const v = "forms-field-preview-checkbox";
let t = class extends n {
  render() {
    return a`<input type="checkbox" disabled tabindex="-1" />`;
  }
};
t = p([
  c(v)
], t);
const b = t;
export {
  t as FormsFieldPreviewCheckbox,
  b as default
};
//# sourceMappingURL=checkbox-field-preview.element.js.map
