import { u as o } from "./index.js";
import { html as m, customElement as v } from "@umbraco-cms/backoffice/external/lit";
var l = Object.freeze, f = Object.defineProperty, _ = Object.getOwnPropertyDescriptor, w = (e, t, i, c) => {
  for (var r = c > 1 ? void 0 : c ? _(t, i) : t, a = e.length - 1, p; a >= 0; a--)
    (p = e[a]) && (r = p(r) || r);
  return r;
}, d = (e, t) => l(f(e, "raw", { value: l(e.slice()) })), n;
const u = "forms-field-preview-recaptchav2";
let s = class extends o {
  render() {
    return m(n || (n = d([`<script
      src="https://www.google.com/recaptcha/api.js"
      async
      defer
      type="application/javascript"
    ><\/script>`])));
  }
};
s = w([
  v(u)
], s);
const F = s;
export {
  s as FormsFieldPreviewRecaptchaV2,
  F as default
};
//# sourceMappingURL=recaptchav2-field-preview.element.js.map
