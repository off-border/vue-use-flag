import { ref } from 'vue';

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

  return [flag, on, off, toggle] as const;
}
