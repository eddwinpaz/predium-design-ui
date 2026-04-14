import {
  ref,
  readonly,
  inject,
  provide,
  type InjectionKey,
  type Ref,
} from "vue";

export interface SnackbarOptions {
  message: string;
  kind?: "default" | "success" | "error";
  actionText?: string;
  progress?: boolean;
  duration?: "short" | "medium" | "long" | "infinite";
  onAction?: () => void;
}

export type SnackbarPlacement =
  | "top"
  | "topLeft"
  | "topRight"
  | "bottom"
  | "bottomLeft"
  | "bottomRight";

export interface SnackbarEntry extends SnackbarOptions {
  id: number;
}

interface SnackbarContext {
  current: Ref<SnackbarEntry | null>;
  enqueue: (options: SnackbarOptions) => void;
  dequeue: () => void;
}

let idCounter = 0;

export const SNACKBAR_KEY: InjectionKey<SnackbarContext> = Symbol("snackbar");

const DURATION_MS: Record<string, number> = {
  short: 1500,
  medium: 3000,
  long: 5000,
  infinite: 0,
};

export function createSnackbarProvider() {
  const queue = ref<SnackbarEntry[]>([]);
  const current = ref<SnackbarEntry | null>(null);
  let timer: ReturnType<typeof setTimeout> | null = null;

  function clearTimer() {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
  }

  function showNext() {
    clearTimer();
    if (queue.value.length === 0) {
      current.value = null;
      return;
    }
    const next = queue.value.shift()!;
    current.value = next;
    const dur = DURATION_MS[next.duration ?? "medium"] ?? 3000;
    if (dur > 0) {
      timer = setTimeout(() => {
        dequeue();
      }, dur);
    }
  }

  function enqueue(options: SnackbarOptions) {
    const entry: SnackbarEntry = { ...options, id: ++idCounter };
    if (!current.value) {
      current.value = entry;
      const dur = DURATION_MS[entry.duration ?? "medium"] ?? 3000;
      if (dur > 0) {
        timer = setTimeout(() => {
          dequeue();
        }, dur);
      }
    } else {
      queue.value.push(entry);
    }
  }

  function dequeue() {
    clearTimer();
    current.value = null;
    // Small delay before showing next to allow exit transition
    setTimeout(() => {
      showNext();
    }, 150);
  }

  const context: SnackbarContext = {
    current: readonly(current) as Ref<SnackbarEntry | null>,
    enqueue,
    dequeue,
  };

  provide(SNACKBAR_KEY, context);

  return context;
}

export function useSnackbar(): SnackbarContext {
  const context = inject(SNACKBAR_KEY);
  if (!context) {
    throw new Error("useSnackbar() must be used inside a <SnackbarProvider>");
  }
  return context;
}
