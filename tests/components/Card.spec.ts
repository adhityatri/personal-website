import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import Card from '~/components/Card.vue';

describe('Component: Card', () => {
  it('renders the card container', () => {
    const wrapper = mount(Card);
    expect(wrapper.find('.card').exists()).toBe(true);
  });

  it('has shadow-md class', () => {
    const wrapper = mount(Card);
    expect(wrapper.find('.card').classes()).toContain('shadow-md');
  });

  it('renders slot content', () => {
    const wrapper = mount(Card, {
      slots: {
        default: '<p>Card content</p>',
      },
    });
    expect(wrapper.text()).toContain('Card content');
  });

  it('renders multiple slot elements', () => {
    const wrapper = mount(Card, {
      slots: {
        default: '<h3>Title</h3><p>Description</p>',
      },
    });
    expect(wrapper.find('h3').exists()).toBe(true);
    expect(wrapper.find('p').exists()).toBe(true);
  });
});
