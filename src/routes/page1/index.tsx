import { component$, useSignal, useTask$ } from "@builder.io/qwik";

import { Projector } from "./projector";

export default component$(() => {
  const messageSignal = useSignal("");
  const colorSignal = useSignal("black");

  useTask$(({ track }) => {
    track(() => messageSignal.value);
    if (messageSignal.value.indexOf("red") >= 0) {
      colorSignal.value = "red";
    } else {
      colorSignal.value = "black";
    }
  });
  return (
    <div>
      This is Page 1
      <hr />
      <input
        type="text"
        value={messageSignal.value}
        placeholder="Type, something..."
        onInput$={(event) =>
          (messageSignal.value = (event.target as HTMLInputElement).value)
        }
      />
      <hr />
      <Projector message={messageSignal.value} color={colorSignal.value}>
        Message... !
      </Projector>
    </div>
  );
});
