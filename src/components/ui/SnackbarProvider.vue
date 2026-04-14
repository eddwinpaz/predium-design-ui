<script setup lang="ts">
import { computed } from "vue";
import SnackbarElement from "./SnackbarElement.vue";
import { createSnackbarProvider, type SnackbarPlacement } from "./useSnackbar";

const props = withDefaults(
  defineProps<{
    placement?: SnackbarPlacement;
  }>(),
  {
    placement: "top",
  },
);

const { current, dequeue } = createSnackbarProvider();

function handleAction() {
  if (current.value?.onAction) {
    current.value.onAction();
  }
  dequeue();
}

const containerClasses = computed(() => {
  const base =
    "fixed z-[10000] flex pointer-events-none px-[16px] sm:px-[24px]";
  const map: Record<SnackbarPlacement, string> = {
    top: `${base} top-[16px] left-0 right-0 justify-center`,
    topLeft: `${base} top-[16px] left-0 right-0 justify-start`,
    topRight: `${base} top-[16px] left-0 right-0 justify-end`,
    bottom: `${base} bottom-[16px] left-0 right-0 justify-center`,
    bottomLeft: `${base} bottom-[16px] left-0 right-0 justify-start`,
    bottomRight: `${base} bottom-[16px] left-0 right-0 justify-end`,
  };
  return map[props.placement];
});

const isTop = computed(() => props.placement.startsWith("top"));
</script>

<template>
  <slot />
  <Teleport to="body">
    <div :class="containerClasses">
      <Transition
        :enter-active-class="'transition duration-300 ease-out'"
        :enter-from-class="
          isTop ? '-translate-y-4 opacity-0' : 'translate-y-4 opacity-0'
        "
        :enter-to-class="'translate-y-0 opacity-100'"
        :leave-active-class="'transition duration-200 ease-in'"
        :leave-from-class="'translate-y-0 opacity-100'"
        :leave-to-class="
          isTop ? '-translate-y-4 opacity-0' : 'translate-y-4 opacity-0'
        "
      >
        <div v-if="current" class="pointer-events-auto w-full sm:w-auto">
          <SnackbarElement
            :message="current.message"
            :kind="current.kind"
            :action-text="current.actionText"
            :progress="current.progress"
            @action-click="handleAction"
            @close="dequeue"
          />
        </div>
      </Transition>
    </div>
  </Teleport>
</template>
