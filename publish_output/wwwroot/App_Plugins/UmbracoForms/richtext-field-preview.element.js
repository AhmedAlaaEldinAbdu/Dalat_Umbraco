import { u as n } from "./index.js";
import { unsafeHTML as a, customElement as c } from "@umbraco-cms/backoffice/external/lit";
var f = Object.getOwnPropertyDescriptor, u = (s, l, o, i) => {
  for (var e = i > 1 ? void 0 : i ? f(l, o) : l, t = s.length - 1, m; t >= 0; t--)
    (m = s[t]) && (e = m(e) || e);
  return e;
};
const v = "forms-field-preview-richtext";
let r = class extends n {
  render() {
    return a(this.getSettingValue("Html"));
  }
};
r = u([
  c(v)
], r);
const w = r;
export {
  r as FormsFieldPreviewRichtext,
  w as default
};
//# sourceMappingURL=richtext-field-preview.element.js.map
