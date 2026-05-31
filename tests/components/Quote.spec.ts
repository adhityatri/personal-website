import { describe, it, expect, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import Quote from '~/components/quote.vue';

describe('Component: Quote', () => {
  it('renders the quote section', () => {
    const wrapper = mount(Quote);
    expect(wrapper.find('div').exists()).toBe(true);
  });

  it('displays the quote text', () => {
    const wrapper = mount(Quote);
    expect(wrapper.text()).toContain('Turning');
    expect(wrapper.text()).toContain('ideas');
    expect(wrapper.text()).toContain('into impactful digital solutions');
  });

  it('has teal background color class', () => {
    const wrapper = mount(Quote);
    expect(wrapper.find('div').classes()).toContain('bg-[#006d77]');
  });

  it('has white text color', () => {
    const wrapper = mount(Quote);
    expect(wrapper.find('div').classes()).toContain('text-white');
  });

  it('applies self-center width on mobile', () => {
    vi.stubGlobal('useDevice', () => ({
      isMobile: true,
      isDesktop: false,
      isDesktopOrTablet: false,
      isTablet: false,
    }));

    const wrapper = mount(Quote);
    expect(wrapper.find('div').classes()).toContain('w-[85%]');
    expect(wrapper.find('div').classes()).toContain('self-center');
  });

  it('applies full width on desktop', () => {
    vi.stubGlobal('useDevice', () => ({
      isMobile: false,
      isDesktop: true,
      isDesktopOrTablet: true,
      isTablet: false,
    }));

    const wrapper = mount(Quote);
    expect(wrapper.find('div').classes()).toContain('w-full');
  });
});
