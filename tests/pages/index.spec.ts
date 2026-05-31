import { describe, it, expect, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import IndexPage from '~/pages/index.vue';

describe('Pages: Index (Homepage)', () => {
  it('renders the homepage layout', () => {
    const wrapper = mount(IndexPage);
    expect(wrapper.find('div').exists()).toBe(true);
  });

  it('contains hero-profile component', () => {
    const wrapper = mount(IndexPage);
    expect(wrapper.find('[data-testid="hero-profile"]').exists()).toBe(true);
  });

  it('contains quote component', () => {
    const wrapper = mount(IndexPage);
    expect(wrapper.find('[data-testid="quote"]').exists()).toBe(true);
  });

  it('contains bio component', () => {
    const wrapper = mount(IndexPage);
    expect(wrapper.find('[data-testid="bio"]').exists()).toBe(true);
  });

  it('contains project component', () => {
    const wrapper = mount(IndexPage);
    expect(wrapper.find('[data-testid="project"]').exists()).toBe(true);
  });

  it('contains promote component', () => {
    const wrapper = mount(IndexPage);
    expect(wrapper.find('[data-testid="promote"]').exists()).toBe(true);
  });

  it('calls useHead with correct title', () => {
    const mockUseHead = vi.fn();
    vi.stubGlobal('useHead', mockUseHead);

    mount(IndexPage);

    expect(mockUseHead).toHaveBeenCalledWith(
      expect.objectContaining({
        title: 'Adhitya Tri W. U. - Software Engineer',
      })
    );
  });
});
