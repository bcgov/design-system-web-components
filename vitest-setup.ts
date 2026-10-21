import { expect } from 'vitest';
import { prettifyHtml } from '@stencil/vitest';
import { defineCustomElements } from "./dist/loader";

const snapshotComponents = new Set(['bcgov-breadcrumb', 'bcgov-header', 'bcgov-menu']);

// These light-DOM components need native HTML serialization because mock-doc does not support indexed attribute access.
// This resolves failures in snapshot tests that fail with the error: "PrettyFormatPluginError: Cannot read properties of undefined (reading 'name')".
expect.addSnapshotSerializer({
  test(value): value is HTMLElement {
    return value instanceof HTMLElement && snapshotComponents.has(value.localName);
  },
  serialize(element) {
    return prettifyHtml(element.outerHTML.replace(/<!---->/g, ''));
  },
});

defineCustomElements();
