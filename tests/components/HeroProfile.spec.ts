import { describe, it, expect, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import HeroProfile from '~/components/HeroProfile.vue';

describe('Component: HeroProfile', () => {
  it('renders the hero section', () => {
    const wrapper = mount(HeroProfile);
    expect(wrapper.find('div').exists()).toBe(true);
  });

  it('displays greeting text', () => {
    const wrapper = mount(HeroProfile);
    expect(wrapper.text()).toContain('Hello,');
  });

  it('displays the name', () => {
    const wrapper = mount(HeroProfile);
    expect(wrapper.text()).toContain('Adhitya Tri W. U.');
  });

  it('displays the position', () => {
    const wrapper = mount(HeroProfile);
    expect(wrapper.text()).toContain('Software Engineer');
  });

  it('displays the description', () => {
    const wrapper = mount(HeroProfile);
    expect(wrapper.text()).toContain('Seasoned Software Engineer');
    expect(wrapper.text()).toContain('10+ years');
  });

  it('contains get-in-touch component', () => {
    const wrapper = mount(HeroProfile);
    expect(wrapper.find('[data-testid="get-in-touch"]').exists()).toBe(true);
  });

  it('contains social-media component', () => {
    const wrapper = mount(HeroProfile);
    expect(wrapper.find('[data-testid="social-media"]').exists()).toBe(true);
  });

  it('contains hero-image component', () => {
    const wrapper = mount(HeroProfile);
    expect(wrapper.find('[data-testid="hero-image"]').exists()).toBe(true);
  });
});
