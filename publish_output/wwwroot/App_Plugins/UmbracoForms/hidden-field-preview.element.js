import { u as m } from "./index.js";
import { html as o, customElement as a } from "@umbraco-cms/backoffice/external/lit";
var f = Object.getOwnPropertyDescriptor, p = (d, i, n, l) => {
  for (var e = l > 1 ? void 0 : l ? f(i, n) : i, r = d.length - 1, s; r >= 0; r--)
    (s = d[r]) && (e = s(e) || e);
  return e;
};
const v = "forms-field-preview-hiddenfield";
let t = class extends m {
  render() {
    return o`<input disabled type="hidden" />`;
  }
};
t = p([
  a(v)
], t);
const c = t;
export {
  t as FormsFieldPreviewHiddenField,
  c as default
};
//# sourceMappingURL=hidden-field-preview.element.js.map
