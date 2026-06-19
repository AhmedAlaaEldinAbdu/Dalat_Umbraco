import { u as s } from "./index.js";
import { html as c, customElement as d } from "@umbraco-cms/backoffice/external/lit";
var m = Object.getOwnPropertyDescriptor, u = (l, o, n, a) => {
  for (var e = a > 1 ? void 0 : a ? m(o, n) : o, t = l.length - 1, i; t >= 0; t--)
    (i = l[t]) && (e = i(e) || e);
  return e;
};
const p = "forms-field-preview-datepicker";
let r = class extends s {
  render() {
    return c`<input
        type="text"
        autocomplete="off"
        disabled
        readonly
        placeholder="${this.getSettingValue("Placeholder")}"
      />
      <button class="btn" disabled>
        <uui-icon name="icon-calendar"></uui-icon>
      </button>`;
  }
};
r = u([
  d(p)
], r);
const P = r;
export {
  r as FormsFieldPreviewDatePicker,
  P as default
};
//# sourceMappingURL=datepicker-field-preview.element.js.map
