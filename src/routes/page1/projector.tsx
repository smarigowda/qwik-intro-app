import { Slot, component$ } from "@builder.io/qwik";

export interface ProjectorProps {
  message: string;
  color: string;
}

export const Projector = component$((props: ProjectorProps) => {
  return (
    <div>
      <Slot />
      <span style={{ color: props.color }}>{props.message}</span>
    </div>
  );
});
