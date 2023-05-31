import { component$, useSignal } from "@builder.io/qwik";

export default component$(() => {
  let isVisible = useSignal(false);
  return (
    <div>
      <button onClick$={() => (isVisible.value = !isVisible.value)}>
        Toggle Visibility
      </button>
      {isVisible.value && (
        <div>
          <HelloWorld />
        </div>
      )}
    </div>
  );
});

export const HelloWorld = component$(() => {
  return (
    <div>
      <h1>Hello World ! is visible !!!</h1>
    </div>
  );
});
