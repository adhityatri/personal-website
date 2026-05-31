import { describe, it, expect, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import LabPage from '~/pages/lab/index.vue';

describe('Pages: Lab', () => {
  it('renders the lab page', () => {
    const wrapper = mount(LabPage);
    expect(wrapper.find('div').exists()).toBe(true);
  });

  it('displays under construction message', () => {
    const wrapper = mount(LabPage);
    expect(wrapper.text()).toContain('Pardon our dust');
    expect(wrapper.text()).toContain('This page is getting a makeover');
  });

  it('displays Labs Page title', () => {
    const wrapper = mount(LabPage);
    expect(wrapper.text()).toContain('Labs Page');
  });

  it('has a Back To Home button', () => {
    const wrapper = mount(LabPage);
    expect(wrapper.text()).toContain('Back To Home');
  });

  it('navigates to home when Back To Home is clicked', async () => {
    const mockNavigateTo = vi.fn(() => Promise.resolve());
    vi.stubGlobal('navigateTo', mockNavigateTo);

    const wrapper = mount(LabPage);
    const button = wrapper.find('button');
    await button.trigger('click');

    expect(mockNavigateTo).toHaveBeenCalledWith('/');
  });

  it('calls useHead with correct title', () => {
    const mockUseHead = vi.fn();
    vi.stubGlobal('useHead', mockUseHead);

    mount(LabPage);

    expect(mockUseHead).toHaveBeenCalledWith(
      expect.objectContaining({
        title: 'Labs - Adhitya Tri',
      })
    );
  });
});
