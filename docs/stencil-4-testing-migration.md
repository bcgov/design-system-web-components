# Migrating component tests to Stencil 4

This guide describes the repository's Stencil 4 test pattern for migrating component tests from the Stencil 2 setup. The current reference is [`bcgov-button.cmp.test.ts`](../src/components/bcgov-button/bcgov-button.cmp.test.ts).

## Stencil 2 and Stencil 4 at a glance

| Stencil 2 in this repository | Stencil 4 standard in this repository |
| --- | --- |
| Jest 26 and `stencil test --spec` | Vitest through `stencil-test --prod --reporter=verbose` (`npm test`) |
| `*.spec.ts` component tests | `*.cmp.test.ts` component tests |
| Import the component class and `newSpecPage` from `@stencil/core/testing` | Import `render` and test helpers from `@stencil/vitest` |
| Render a test page with `{ components, html }` and assert `page.root` | Render a template string and assert against the returned `root` DOM element |
| Jest APIs and Stencil's mock-document page | Vitest APIs; the repository's component tests run with its Stencil/Vitest browser setup |

Examples of the old `newSpecPage` pattern remain in disabled `*.spec.tsoff` files, such as [`bcgov-breadcrumb.spec.tsoff`](../src/components/bcgov-breadcrumb/bcgov-breadcrumb.spec.tsoff). Use the current test runner and patterns below for new migrations rather than copying the old Jest setup.

## Migration steps

1. **Inventory the old suite.** Separate component behavior tests from utility-only tests. Note public props, slots, accessibility behavior, emitted events, browser APIs, and any dependency mocks.
2. **Keep test setup aligned with this repository.** Use the existing `npm test` command and `@stencil/vitest` helpers; do not add a separate Jest configuration or register the component manually. Rename migrated component tests to `*.cmp.test.ts`. Keep utility tests as `*.unit.test.ts` and use Vitest directly, as in `src/components/general.unit.test.ts`. Run only the unit-test project with `npx vitest run --project unit`.
3. **Replace page construction with `render`.** Replace `newSpecPage({ components, html })` with `await render('<my-component ...>content</my-component>')`. Use the returned `root` to query rendered elements. Use `setProps` to change properties and `waitForChanges` after actions or updates when the DOM updates asynchronously.
4. **Replace Jest-only APIs.** Import `describe`, `it`, `expect`, and `render` from `@stencil/vitest`. Import `vi` from `vitest` for spies and mock functions. Keep assertions focused on accessible behavior and public DOM rather than component internals.
5. **Mock only a real boundary.** Prefer injecting a callback or dependency and replacing it with `vi.fn()`. Stub browser APIs or network requests only when the test needs deterministic behavior. Avoid mocking implementation details or stable dependencies. In the current Stencil test pipeline, component imports may be bundled before Vitest can intercept them with `vi.mock`; module-level component dependency mocking requires changing the compilation/test setup, so do not assume a Jest-style module mock will work.
6. **Migrate event coverage.** Trigger user-visible DOM events such as `click()` or `dispatchEvent()`, then assert the resulting public behavior. For a component that emits a custom event, use `spyOnEvent` from the `render` result and assert event count and detail with `toHaveReceivedEvent*` matchers. Await `waitForChanges()` if the event schedules a render.
7. **Choose snapshots deliberately.** Snapshot a small, stable public markup contract where it improves reviewability. Keep assertions for behavior, accessibility, and event effects even when a snapshot exists. Avoid broad snapshots of generated SVG, browser-dependent output, or large DOM trees that obscure meaningful changes. If output is inherently unstable, document why a focused assertion is used instead.
8. **Verify the migrated suite.** Run `npm test`, then `npm run build`. Install Chromium with `npx playwright install chromium` if the browser test runner reports that it is unavailable. Check the repository's CI result before submitting.

## Reference patterns

The reference suite shows a focused markup snapshot, a mocked callback supplied through a component prop, and a real click that changes the target's visible state. This button component does not emit a custom event; the click test therefore checks the user-visible result rather than asserting a non-existent event. For emitted events, use this pattern:

```ts
const { root, spyOnEvent, waitForChanges } = await render('<my-component></my-component>');
const changed = spyOnEvent('valueChange');

root.dispatchEvent(new CustomEvent('valueChange', {
  bubbles: true,
  detail: { value: 'updated' },
}));
await waitForChanges();

expect(changed).toHaveReceivedEventTimes(1);
expect(changed).toHaveReceivedEventDetail({ value: 'updated' });
```

In a component's own test, cause the component to emit its event through its user-facing interaction or prop change; dispatching the event directly is appropriate only when testing a consumer/listener.

## Known exceptions

- **Utility-only tests:** They do not need a component render; keep them as `*.unit.test.ts` and test the exported function directly.
- **Real browser behavior:** Layout, focus, and browser APIs should be exercised in the configured browser test environment. A DOM-only unit test cannot prove layout or browser integration.
- **Custom events:** The button reference has no `@Event()` emitter. Use its click-driven state change as the interaction example; do not invent a custom event for test convenience.
- **Generated output:** Components that inject third-party markup (for example, Font Awesome SVG) should usually assert the meaningful accessible behavior or wrapper rather than snapshotting the entire generated asset.
- **Global listeners and shared state:** Tests that touch `window`, timers, or shared globals should restore spies and clean up state where the component/API permits it. If a component does not clean up a global listener, avoid broad assertions that depend on listener counts.
- **Runner differences:** A Stencil 2 `newSpecPage` test used a mock document. If a test depends on real layout or native browser event behavior, migrate it to browser-based testing rather than treating the old mock-document result as equivalent.

For the installed helper API and runner-specific limitations, see the [`@stencil/vitest` documentation](https://github.com/stenciljs/vitest).
