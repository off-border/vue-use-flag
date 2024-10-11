import { ref } from 'vue';
export function useFlag(initialValue = false) {
    const flag = ref(initialValue);
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
    return [flag, on, off, toggle];
}
