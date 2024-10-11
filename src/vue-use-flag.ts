import { ref } from 'vue';

type OnFn = () => void;
type OffFn = () => void;
type ToggleFn = () => void;

export function useFlag(initialValue = false) {
    const flag = ref<boolean>(initialValue);

    const on = () => {
        flag.value = true;
    };

    const off = () => {
        flag.value = false;
    };

    const toggle = () => {
        flag.value = !flag.value;
    };

    // "as On/Off/ToggleFn" types for more intuitive type hints
    return [flag, on as OnFn, off as OffFn, toggle as ToggleFn] as const;
}
