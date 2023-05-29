import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <div>
      <HelloWorld />
      <div>Change me please!</div>
    </div>
  );
});

export const HelloWorld = component$(() => {
  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
});
