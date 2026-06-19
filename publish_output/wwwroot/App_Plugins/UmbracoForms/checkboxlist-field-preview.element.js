import { u as p } from "./index.js";
import { repeat as m, when as c, html as i, css as h, customElement as u } from "@umbraco-cms/backoffice/external/lit";
import { UmbTextStyles as d } from "@umbraco-cms/backoffice/style";
var v = Object.getOwnPropertyDescriptor, b = (e, a, o, r) => {
  for (var s = r > 1 ? void 0 : r ? v(a, o) : a, l = e.length - 1, n; l >= 0; l--)
    (n = e[l]) && (s = n(s) || s);
  return s;
};
const f = "forms-field-preview-checkboxlist";
let t = class extends p {
  render() {
    return i`
      ${m(
      this.prevalues.slice(0, 5),
      (e) => i`
          <div
            class=${this.getSettingValue("DisplayLayout") ? this.getSettingValue("DisplayLayout").toLowerCase() : ""}
          >
            <span>
              <input type="checkbox" disabled tabindex="-1" />
              <label>${e.caption || e.value}</label>
            </span>
          </div>
        `
    )}
      ${c(
      this.prevalues.length > 5,
      () => i` <span class="ellipsis">...</span> `
    )}
    `;
  }
};
t.styles = [
  d,
  h`
      .horizontal {
        display: inline;
      }

      .horizontal .span {
        margin-right: 10px;
      }

      .ellipsis {
        margin-left: 24px;
      }
    `
];
t = b([
  u(f)
], t);
const w = t;
export {
  t as FormsFieldPreviewCheckboxList,
  w as default
};
//# sourceMappingURL=checkboxlist-field-preview.element.js.map
