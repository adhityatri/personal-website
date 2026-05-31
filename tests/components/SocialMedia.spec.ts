import { describe, it, expect, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import SocialMedia from '~/components/SocialMedia.vue';

describe('Component: SocialMedia', () => {
  it('renders the social media list', () => {
    const wrapper = mount(SocialMedia);
    expect(wrapper.find('ul').exists()).toBe(true);
  });

  it('displays "Social Media" label', () => {
    const wrapper = mount(SocialMedia);
    expect(wrapper.text()).toContain('Social Media');
  });

  it('renders correct number of social links', () => {
    const wrapper = mount(SocialMedia);
    const listItems = wrapper.findAll('li');
    // 1 label + 2 social links
    expect(listItems.length).toBe(3);
  });

  it('opens LinkedIn in new tab when clicked', async () => {
    const mockOpen = vi.fn();
    window.open = mockOpen;

    const wrapper = mount(SocialMedia);
    const listItems = wrapper.findAll('li');
    await listItems[1].trigger('click');

    expect(mockOpen).toHaveBeenCalledWith(
      'https://www.linkedin.com/in/adhitya-tri/',
      '_blank'
    );
  });

  it('opens GitHub in new tab when clicked', async () => {
    const mockOpen = vi.fn();
    window.open = mockOpen;

    const wrapper = mount(SocialMedia);
    const listItems = wrapper.findAll('li');
    await listItems[2].trigger('click');

    expect(mockOpen).toHaveBeenCalledWith(
      'https://github.com/adhityatri',
      '_blank'
    );
  });

  it('applies solid class when solid prop is true', () => {
    const wrapper = mount(SocialMedia, {
      props: { solid: true },
    });
    expect(wrapper.find('ul').classes()).toContain('solid');
  });
});
