import { describe, it, expect, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import TopBar from '~/components/TopBar.vue';

const createWrapper = (isDesktopOrTablet = true) => {
  return mount(TopBar, {
    global: {
      mocks: {
        useDevice: () => ({
          isMobile: !isDesktopOrTablet,
          isDesktop: isDesktopOrTablet,
          isDesktopOrTablet,
          isTablet: false,
        }),
      },
    },
  });
};

describe('Component: TopBar', () => {
  it('renders the nav container', () => {
    const wrapper = createWrapper();
    expect(wrapper.find('div').exists()).toBe(true);
  });

  it('contains app-brand component', () => {
    const wrapper = createWrapper();
    expect(wrapper.find('[data-testid="app-brand"]').exists()).toBe(true);
  });

  it('shows nav-menu on desktop', () => {
    const wrapper = createWrapper(true);
    expect(wrapper.find('[data-testid="nav-menu"]').exists()).toBe(true);
  });

  it('hides nav-menu on mobile', () => {
    const wrapper = createWrapper(false);
    expect(wrapper.find('[data-testid="nav-menu"]').exists()).toBe(false);
  });
});
