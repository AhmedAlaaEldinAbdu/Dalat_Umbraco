import { u as a } from "./index.js";
import { html as m, customElement as p } from "@umbraco-cms/backoffice/external/lit";
var d = Object.getOwnPropertyDescriptor, f = (l, s, n, o) => {
  for (var e = o > 1 ? void 0 : o ? d(s, n) : s, r = l.length - 1, i; r >= 0; r--)
    (i = l[r]) && (e = i(e) || e);
  return e;
};
const u = "forms-field-preview-fileupload";
let t = class extends a {
  render() {
    return m`<input disabled type="file" />
      <p>
        <strong>Current file(s):</strong>
      </p>`;
  }
};
t = f([
  p(u)
], t);
const c = t;
export {
  t as FormsFieldPreviewFileUpload,
  c as default
};
//# sourceMappingURL=fileupload-field-preview.element.js.map
