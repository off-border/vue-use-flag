type OnFn = () => void;
type OffFn = () => void;
type ToggleFn = () => void;
export declare function useFlag(initialValue?: boolean): readonly [import("vue").Ref<boolean, boolean>, OnFn, OffFn, ToggleFn];
export {};
