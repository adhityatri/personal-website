import { describe, it, expect, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import NavMenu from '~/components/NavMenu.vue';

describe('Component: NavMenu', () => {
  it('renders the navigation menu', () => {
    const wrapper = mount(NavMenu);
    expect(wrapper.find('div').exists()).toBe(true);
  });

  it('contains UNavigationMenu component', () => {
    const wrapper = mount(NavMenu);
    expect(wrapper.find('nav').exists()).toBe(true);
  });

  it('contains Resume download button', () => {
    const wrapper = mount(NavMenu);
    expect(wrapper.text()).toContain('Resume');
  });

  it('opens resume link in new tab when Resume button is clicked', async () => {
    const mockNavigateTo = vi.fn(() => Promise.resolve());
    vi.stubGlobal('navigateTo', mockNavigateTo);

    const wrapper = mount(NavMenu);
    const buttons = wrapper.findAll('button');
    const resumeButton = buttons.find((b) => b.text().includes('Resume'));

    await resumeButton!.trigger('click');

    expect(mockNavigateTo).toHaveBeenCalledWith(
      expect.stringContaining('drive.google.com'),
      expect.objectContaining({
        external: true,
        open: { target: '_blank' },
      })
    );
  });
});
