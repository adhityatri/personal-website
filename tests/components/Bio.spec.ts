import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import Bio from '~/components/Bio.vue';

describe('Component: Bio', () => {
  it('renders the bio section', () => {
    const wrapper = mount(Bio);
    expect(wrapper.find('div').exists()).toBe(true);
  });

  it('displays Bio title via app-title', () => {
    const wrapper = mount(Bio);
    expect(wrapper.text()).toContain('Bio');
  });

  it('displays all bio timeline entries', () => {
    const wrapper = mount(Bio);
    expect(wrapper.text()).toContain('1991');
    expect(wrapper.text()).toContain('2013');
    expect(wrapper.text()).toContain('2022');
    expect(wrapper.text()).toContain('2025');
  });

  it('displays birth info', () => {
    const wrapper = mount(Bio);
    expect(wrapper.text()).toContain('Jember, Indonesia');
  });

  it('displays education info', () => {
    const wrapper = mount(Bio);
    expect(wrapper.text()).toContain('Informatics Engineering');
    expect(wrapper.text()).toContain('STIKI Malang');
  });

  it('displays work history', () => {
    const wrapper = mount(Bio);
    expect(wrapper.text()).toContain('Infogobal Teknologi Semesta');
    expect(wrapper.text()).toContain('Gramedia Asri Media');
  });

  it('displays current freelance status', () => {
    const wrapper = mount(Bio);
    expect(wrapper.text()).toContain('Freelance Software Developer');
  });

  it('renders correct number of timeline items', () => {
    const wrapper = mount(Bio);
    const items = wrapper.findAll('li');
    expect(items.length).toBe(5);
  });
});
