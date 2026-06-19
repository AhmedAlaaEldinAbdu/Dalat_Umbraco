import { u as p } from "./index.js";
import { repeat as m, when as u, html as l, css as d, customElement as v } from "@umbraco-cms/backoffice/external/lit";
import { UmbTextStyles as c } from "@umbraco-cms/backoffice/style";
var h = Object.getOwnPropertyDescriptor, f = (e, a, o, r) => {
  for (var t = r > 1 ? void 0 : r ? h(a, o) : a, i = e.length - 1, n; i >= 0; i--)
    (n = e[i]) && (t = n(t) || t);
  return t;
};
const g = "forms-field-preview-radiobuttonlist";
let s = class extends p {
  render() {
    return l`
      ${m(
      this.prevalues.slice(0, 5),
      (e) => l`
          <div
            class=${this.getSettingValue("DisplayLayout") ? this.getSettingValue("DisplayLayout").toLowerCase() : ""}
          >
            <span>
              <input type="radio" disabled tabindex="-1" />
              <label>${e.caption || e.value}</label>
            </span>
          </div>
        `
    )}
      ${u(
      this.prevalues.length > 5,
      () => l` <span class="ellipsis">...</span> `
    )}
    `;
  }
};
s.styles = [
  c,
  d`
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
s = f([
  v(g)
], s);
const x = s;
export {
  s as FormsFieldPreviewRadioButtonList,
  x as default
};
//# sourceMappingURL=radiobuttonlist-field-preview.element.js.map
