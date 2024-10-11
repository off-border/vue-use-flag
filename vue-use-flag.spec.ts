import { describe, expect, it } from 'vitest';
import { useFlag } from './vue-use-flag';

describe('A composable for handling simple flag refs', () => {
  describe('useFlag() [no initial value]', () => {
    it('- set flag.value to false', () => {
      const [flag, on, off, toggle] = useFlag();
      expect(flag.value).toBe(false);
    });
  });

  describe('useFlag(initialValue)', () => {
    it('- set flag.value to initialValue', () => {
      const [flag, on, off, toggle] = useFlag(true);
      expect(flag.value).toBe(true);
    });
  });

  describe('on()', () => {
    it('- set flag.value to true', () => {
      const [flag, on, off, toggle] = useFlag();
      on();
      expect(flag.value).toBe(true);
    });
  });

  describe('off()', () => {
    it('- set flag.value to false', () => {
      const [flag, on, off, toggle] = useFlag(true);
      off();
      expect(flag.value).toBe(false);
    });
  });

  describe('toggle()', () => {
    it('- toggle flag.value', () => {
      const [flag, on, off, toggle] = useFlag();
      toggle();
      expect(flag.value).toBe(true);
      toggle();
      expect(flag.value).toBe(false);
    });
  });
});
