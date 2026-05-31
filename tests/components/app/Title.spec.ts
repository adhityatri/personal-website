import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import Title from '~/components/app/Title.vue';

describe('Component: AppTitle', () => {
  it('renders the title container', () => {
    const wrapper = mount(Title);
    expect(wrapper.find('div').exists()).toBe(true);
  });

  it('renders slot content', () => {
    const wrapper = mount(Title, {
      slots: {
        default: 'Section Title',
      },
    });
    expect(wrapper.text()).toContain('Section Title');
  });

  it('has teal text color', () => {
    const wrapper = mount(Title);
    expect(wrapper.find('div').classes()).toContain('text-[#006d77]');
  });

  it('has bold font weight', () => {
    const wrapper = mount(Title);
    expect(wrapper.find('div').classes()).toContain('font-bold');
  });

  it('renders the accent bar', () => {
    const wrapper = mount(Title);
    const bar = wrapper.findAll('div').at(1);
    expect(bar!.classes()).toContain('bg-[#006d77]');
    expect(bar!.classes()).toContain('h-[4px]');
    expect(bar!.classes()).toContain('w-[40px]');
  });
});
