import { u as i } from "./index.js";
import { html as n, customElement as m } from "@umbraco-cms/backoffice/external/lit";
var p = Object.getOwnPropertyDescriptor, w = (t, l, d, o) => {
  for (var e = o > 1 ? void 0 : o ? p(l, d) : l, r = t.length - 1, a; r >= 0; r--)
    (a = t[r]) && (e = a(e) || e);
  return e;
};
const u = "forms-field-preview-password";
let s = class extends i {
  render() {
    return n`<input
      type="password"
      readonly
      disabled
      tabindex="-1"
      placeholder=${this.getSettingValue("Placeholder")}
    />`;
  }
};
s = w([
  m(u)
], s);
const f = s;
export {
  s as FormsFieldPreviewPassword,
  f as default
};
//# sourceMappingURL=password-field-preview.element.js.map
