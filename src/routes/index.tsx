import {
  Signal,
  Slot,
  component$,
  useSignal,
  useTask$,
} from "@builder.io/qwik";

export default component$(() => {
  const isVisible = useSignal(false);
  const isBeerGiven = useSignal(false);

  useTask$(({ track }) => {
    track(() => isBeerGiven.value);

    if (isBeerGiven.value) {
      isVisible.value = true;
    } else {
      isVisible.value = false;
    }
  });
  return (
    <div>
      <button onClick$={() => (isVisible.value = !isVisible.value)}>
        Toggle Visibility
      </button>
      <BeerGiver isBeerGiven={isBeerGiven} />
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

export interface BeerGiverProps {
  isBeerGiven: Signal<boolean>;
}

export const BeerGiver = component$((props: BeerGiverProps) => {
  return (
    <>
      <div>
        <button
          onClick$={() => {
            props.isBeerGiven.value = !props.isBeerGiven.value;
          }}
        >
          Give/ Take a beer to Misko...
        </button>
      </div>
    </>
  );
});
