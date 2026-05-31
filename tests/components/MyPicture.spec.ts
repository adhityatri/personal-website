import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import MyPicture from '~/components/MyPicture.vue';

describe('Component: MyPicture', () => {
  it('renders the picture container', () => {
    const wrapper = mount(MyPicture);
    expect(wrapper.find('div').exists()).toBe(true);
  });

  it('contains an img element (nuxt-img stub)', () => {
    const wrapper = mount(MyPicture);
    expect(wrapper.find('img').exists()).toBe(true);
  });

  it('has fixed dimensions', () => {
    const wrapper = mount(MyPicture);
    const container = wrapper.find('div');
    expect(container.classes()).toContain('h-[350px]');
    expect(container.classes()).toContain('w-[350px]');
  });

  it('has rounded corners', () => {
    const wrapper = mount(MyPicture);
    const container = wrapper.find('div');
    expect(container.classes()).toContain('rounded-xl');
  });
});
