import { describe, it, expect, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import Promote from '~/components/Promote.vue';

describe('Component: Promote', () => {
  it('renders the promote section', () => {
    const wrapper = mount(Promote);
    expect(wrapper.find('div').exists()).toBe(true);
  });

  it('displays collaboration heading', () => {
    const wrapper = mount(Promote);
    expect(wrapper.text()).toContain('Interested in collaborating with me?');
  });

  it('displays description text', () => {
    const wrapper = mount(Promote);
    expect(wrapper.text()).toContain('open dialogue');
  });

  it('hides get-in-touch when withAction is false', () => {
    const wrapper = mount(Promote, {
      props: { withAction: false },
    });
    expect(wrapper.find('[data-testid="get-in-touch"]').exists()).toBe(false);
  });

  it('shows get-in-touch when withAction is true', () => {
    const wrapper = mount(Promote, {
      props: { withAction: true },
    });
    expect(wrapper.find('[data-testid="get-in-touch"]').exists()).toBe(true);
  });

  it('applies mobile width class on mobile', () => {
    vi.stubGlobal('useDevice', () => ({
      isMobile: true,
      isDesktop: false,
      isDesktopOrTablet: false,
      isTablet: false,
    }));

    const wrapper = mount(Promote);
    expect(wrapper.find('div').classes()).toContain('w-[85%]');
  });

  it('applies full width on desktop', () => {
    vi.stubGlobal('useDevice', () => ({
      isMobile: false,
      isDesktop: true,
      isDesktopOrTablet: true,
      isTablet: false,
    }));

    const wrapper = mount(Promote);
    expect(wrapper.find('div').classes()).toContain('w-full');
  });
});
