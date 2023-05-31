import { Slot, component$, useSignal } from "@builder.io/qwik";

export default component$(() => {
  const isVisible = useSignal(false);
  return (
    <div>
      <button onClick$={() => (isVisible.value = !isVisible.value)}>
        Toggle Visibility
      </button>
      {isVisible.value && (
        <HelloWorld>
          <h1>Hello World ! is visible !!!</h1>
        </HelloWorld>
      )}
    </div>
  );
});

export const HelloWorld = component$(() => {
  return (
    <div>
      <Slot />
    </div>
  );
});
