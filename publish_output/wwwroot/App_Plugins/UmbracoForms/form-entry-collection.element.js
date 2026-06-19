import { css as f, customElement as c, html as m } from "@umbraco-cms/backoffice/external/lit";
import { UmbCollectionDefaultElement as u } from "@umbraco-cms/backoffice/collection";
import { UmbLitElement as d } from "@umbraco-cms/backoffice/lit-element";
import "./form-entry-table-collection-view.element.js";
var p = Object.getOwnPropertyDescriptor, y = (r, n, i, l) => {
  for (var e = l > 1 ? void 0 : l ? p(n, i) : n, t = r.length - 1, o; t >= 0; t--)
    (o = r[t]) && (e = o(e) || e);
  return e;
};
const v = "form-entry-collection-header";
let a = class extends d {
  render() {
    return m`
      <umb-collection-action-bundle></umb-collection-action-bundle>
      <div>
        <form-entry-filter-text></form-entry-filter-text>
        <form-entry-filter-date-range-selector></form-entry-filter-date-range-selector>
      </div>
    `;
  }
};
a.styles = [
  f`
      :host {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        gap: var(--uui-size-space-5);
        white-space: nowrap;
        align-items: center;
      }

      div {
        width: 100%;
        display: flex;
        justify-content: space-between;
        gap: var(--uui-size-space-5);
        align-items: center;
        margin-right: var(--uui-size-5);
      }

      forms-entry-filter-text {
        width: 100%;
      }
    `
];
a = y([
  c(v)
], a);
var h = Object.getOwnPropertyDescriptor, g = (r, n, i, l) => {
  for (var e = l > 1 ? void 0 : l ? h(n, i) : n, t = r.length - 1, o; t >= 0; t--)
    (o = r[t]) && (e = o(e) || e);
  return e;
};
const b = "form-entry-collection";
let s = class extends u {
  renderToolbar() {
    return m`<form-entry-collection-header
      slot="header"
    ></form-entry-collection-header> `;
  }
};
s = g([
  c(b)
], s);
const C = s;
export {
  s as FormEntryCollectionElement,
  C as default
};
//# sourceMappingURL=form-entry-collection.element.js.map
