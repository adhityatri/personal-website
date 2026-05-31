import { describe, it, expect, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import HeroImage from '~/components/HeroImage.vue';

describe('Component: HeroImage', () => {
  it('renders the hero image container', () => {
    const wrapper = mount(HeroImage);
    expect(wrapper.find('div').exists()).toBe(true);
  });

  it('contains an img element (nuxt-img stub)', () => {
    const wrapper = mount(HeroImage);
    expect(wrapper.find('img').exists()).toBe(true);
  });

  it('renders decorative shapes', () => {
    const wrapper = mount(HeroImage);
    const divs = wrapper.findAll('div');
    // Should have multiple decorative divs (background shapes)
    expect(divs.length).toBeGreaterThan(3);
  });

  it('applies full width on mobile', () => {
    vi.stubGlobal('useDevice', () => ({
      isMobile: true,
      isDesktop: false,
      isDesktopOrTablet: false,
      isTablet: false,
    }));

    const wrapper = mount(HeroImage);
    expect(wrapper.find('div').classes()).toContain('w-full');
  });

  it('applies fixed width on desktop', () => {
    vi.stubGlobal('useDevice', () => ({
      isMobile: false,
      isDesktop: true,
      isDesktopOrTablet: true,
      isTablet: false,
    }));

    const wrapper = mount(HeroImage);
    expect(wrapper.find('div').classes()).toContain('w-[420px]');
  });
});
