import { describe, it, expect, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import BlogPage from '~/pages/blog/index.vue';

describe('Pages: Blog', () => {
  it('renders the blog page', () => {
    const wrapper = mount(BlogPage);
    expect(wrapper.find('div').exists()).toBe(true);
  });

  it('displays under construction message', () => {
    const wrapper = mount(BlogPage);
    expect(wrapper.text()).toContain('Pardon our dust');
    expect(wrapper.text()).toContain('This page is getting a makeover');
  });

  it('displays Blog Page title', () => {
    const wrapper = mount(BlogPage);
    expect(wrapper.text()).toContain('Blog Page');
  });

  it('has a Back To Home button', () => {
    const wrapper = mount(BlogPage);
    expect(wrapper.text()).toContain('Back To Home');
  });

  it('calls router.back when Back To Home is clicked', async () => {
    const mockBack = vi.fn();
    vi.stubGlobal('useRouter', () => ({ back: mockBack }));

    const wrapper = mount(BlogPage);
    const button = wrapper.find('button');
    await button.trigger('click');

    expect(mockBack).toHaveBeenCalled();
  });

  it('calls useHead with correct title', () => {
    const mockUseHead = vi.fn();
    vi.stubGlobal('useHead', mockUseHead);

    mount(BlogPage);

    expect(mockUseHead).toHaveBeenCalledWith(
      expect.objectContaining({
        title: 'Blog - Adhitya Tri',
      })
    );
  });
});
