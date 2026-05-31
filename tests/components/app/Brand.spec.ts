import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { mount } from '@vue/test-utils';
import Brand from '~/components/app/Brand.vue';

describe('Component: AppBrand', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('renders the brand container', () => {
    const wrapper = mount(Brand);
    expect(wrapper.find('div').exists()).toBe(true);
  });

  it('displays ATWU link text', () => {
    const wrapper = mount(Brand);
    expect(wrapper.text()).toContain('ATWU');
  });

  it('displays initial rotating text on desktop', () => {
    vi.stubGlobal('useDevice', () => ({
      isMobile: false,
      isDesktop: true,
      isDesktopOrTablet: true,
      isTablet: false,
    }));

    const wrapper = mount(Brand);
    expect(wrapper.text()).toContain('Adhitya Tri Wahyu Utomo');
  });

  it('hides rotating text on mobile', () => {
    vi.stubGlobal('useDevice', () => ({
      isMobile: true,
      isDesktop: false,
      isDesktopOrTablet: false,
      isTablet: false,
    }));

    const wrapper = mount(Brand);
    // On mobile, only ATWU should show, not the rotating text
    expect(wrapper.text()).toContain('ATWU');
    expect(wrapper.text()).not.toContain('|');
  });

  it('rotates text after 10 seconds', async () => {
    vi.stubGlobal('useDevice', () => ({
      isMobile: false,
      isDesktop: true,
      isDesktopOrTablet: true,
      isTablet: false,
    }));

    const wrapper = mount(Brand);
    expect(wrapper.text()).toContain('Adhitya Tri Wahyu Utomo');

    vi.advanceTimersByTime(10000);
    await wrapper.vm.$nextTick();

    expect(wrapper.text()).toContain('Software Engineer');
  });

  it('cycles through all texts', async () => {
    vi.stubGlobal('useDevice', () => ({
      isMobile: false,
      isDesktop: true,
      isDesktopOrTablet: true,
      isTablet: false,
    }));

    const wrapper = mount(Brand);

    vi.advanceTimersByTime(10000);
    await wrapper.vm.$nextTick();
    expect(wrapper.text()).toContain('Software Engineer');

    vi.advanceTimersByTime(10000);
    await wrapper.vm.$nextTick();
    expect(wrapper.text()).toContain('Vue.js Enthusiast');

    vi.advanceTimersByTime(10000);
    await wrapper.vm.$nextTick();
    expect(wrapper.text()).toContain('Adhitya Tri Wahyu Utomo');
  });
});
