import { describe, it, expect, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import GetInTouch from '~/components/GetInTouch.vue';

describe('Component: GetInTouch', () => {
  it('renders the button', () => {
    const wrapper = mount(GetInTouch);
    expect(wrapper.find('button').exists()).toBe(true);
  });

  it('displays "Get in Touch" text', () => {
    const wrapper = mount(GetInTouch);
    expect(wrapper.text()).toContain('Get in Touch');
  });

  it('opens mailto link when clicked', async () => {
    const mockLocation = { href: '' };
    Object.defineProperty(window, 'location', {
      value: mockLocation,
      writable: true,
      configurable: true,
    });

    const wrapper = mount(GetInTouch);
    await wrapper.find('button').trigger('click');

    expect(mockLocation.href).toContain('mailto:');
    expect(mockLocation.href).toContain('adhityatri.work');
  });

  it('includes subject in mailto', async () => {
    const mockLocation = { href: '' };
    Object.defineProperty(window, 'location', {
      value: mockLocation,
      writable: true,
      configurable: true,
    });

    const wrapper = mount(GetInTouch);
    await wrapper.find('button').trigger('click');

    expect(mockLocation.href).toContain('subject=');
  });
});
