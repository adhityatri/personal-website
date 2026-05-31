import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import Footer from '~/components/app/Footer.vue';

describe('Component: AppFooter', () => {
  it('renders the footer element', () => {
    const wrapper = mount(Footer);
    expect(wrapper.find('footer').exists()).toBe(true);
  });

  it('displays copyright text', () => {
    const wrapper = mount(Footer);
    expect(wrapper.text()).toContain('Copyright © 2025');
  });

  it('displays "All Rights Reserved"', () => {
    const wrapper = mount(Footer);
    expect(wrapper.text()).toContain('All Rights Reserved');
  });

  it('displays author name', () => {
    const wrapper = mount(Footer);
    expect(wrapper.text()).toContain('Adhitya Tri');
  });

  it('has centered text', () => {
    const wrapper = mount(Footer);
    expect(wrapper.find('footer').classes()).toContain('text-center');
  });

  it('author name is bold and colored', () => {
    const wrapper = mount(Footer);
    const bold = wrapper.find('b');
    expect(bold.exists()).toBe(true);
    expect(bold.classes()).toContain('text-[#006d77]');
  });
});
