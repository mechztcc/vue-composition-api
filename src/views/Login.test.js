import { describe, expect, it, test } from 'vitest';

import { mount } from '@vue/test-utils';

import Login from './Login.vue';

test('adds 1 + 2 to equal 3', () => {
  const wrapper = mount(Login);

  describe('Render component', () => {
    it('Should render component');

    console.log(wrapper);
    expect(wrapper.contains('h3')).toBe(true);
  });
});
