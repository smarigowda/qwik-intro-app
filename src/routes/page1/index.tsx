import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <div>
      This is Page 1
      <hr />
      <input
        type="text"
        placeholder="Type, listening to keydown event)"
        onKeyDown$={(event) => console.log(event.key)}
      />
      <hr />
      <div>You typed: </div>
    </div>
  );
});
