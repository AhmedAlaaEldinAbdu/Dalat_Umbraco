import { u as a } from "./index.js";
import { html as d, customElement as m } from "@umbraco-cms/backoffice/external/lit";
var p = Object.getOwnPropertyDescriptor, v = (i, l, o, s) => {
  for (var e = s > 1 ? void 0 : s ? p(l, o) : l, t = i.length - 1, n; t >= 0; t--)
    (n = i[t]) && (e = n(e) || e);
  return e;
};
const c = "forms-field-preview-titleanddescription";
let r = class extends a {
  render() {
    return d` <h3>
        ${this.getSettingValue("Headline") ?? "Sample headline"}
      </h3>
      <div>${this.getSettingValue("BodyText") ?? "Sample body text"}</div>`;
  }
};
r = v([
  m(c)
], r);
const h = r;
export {
  r as FormsFieldPreviewTitleAndDescription,
  h as default
};
//# sourceMappingURL=titleanddescription-field-preview.element.js.map
