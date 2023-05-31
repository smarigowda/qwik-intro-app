import { Slot, component$ } from "@builder.io/qwik";

export interface ProjectorProps {
  message: string;
}

export const Projector = component$((props: ProjectorProps) => {
  return (
    <div>
      <Slot />
      {props.message}
    </div>
  );
});
