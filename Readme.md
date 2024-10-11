# useFlag() Vue 3 composable

A simple composable aimed to simplify **flag-like** (or on/off switch) boolean variables handling

For example, you need a ref for stroging modal's opening state:

```js
const [isModalOpened, openModal, closeModal, toggleModal] = useFlag();

// set isModalOpened to true
openModal();

// set isModalOpened to false
closeModal();

// toggle
toggleModal();
```

```html
<template>
    <MyModal v-if="isModalOpened"> some content </MyModal>
</template>
```

## Usage

```js
const [flag, on, off, toggle] = useFlag();
```

`flag` - a ref sroging the value

`on()` - sets flag value to `true`

`off()` - sets flag value to `false`

`toggle()` - toggles flag value between `true` and `false`
