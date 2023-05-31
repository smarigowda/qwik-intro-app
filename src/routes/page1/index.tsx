import { component$, useSignal } from "@builder.io/qwik";

import { Projector } from "./projector";

export default component$(() => {
  const messageSignal = useSignal("");
  return (
    <div>
      This is Page 1
      <hr />
      <input
        type="text"
        value={messageSignal.value}
        placeholder="Type, listening to OnInput event..."
        onInput$={(event) =>
          (messageSignal.value = (event.target as HTMLInputElement).value)
        }
      />
      <hr />
      <Projector message={messageSignal.value} >Message... !</Projector>
    </div>
  );
});
