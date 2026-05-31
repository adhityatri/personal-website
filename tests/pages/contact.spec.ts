import { describe, it, expect, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import ContactPage from '~/pages/contact/index.vue';

describe('Pages: Contact', () => {
  it('renders the contact page', () => {
    const wrapper = mount(ContactPage);
    expect(wrapper.find('div').exists()).toBe(true);
  });

  it('displays the profile name', () => {
    const wrapper = mount(ContactPage);
    expect(wrapper.text()).toContain('Adhitya Tri Wahyu Utomo');
  });

  it('displays the position', () => {
    const wrapper = mount(ContactPage);
    expect(wrapper.text()).toContain('Software Engineer');
  });

  it('displays the location', () => {
    const wrapper = mount(ContactPage);
    expect(wrapper.text()).toContain('Jember, Indonesia');
  });

  it('displays the phone number', () => {
    const wrapper = mount(ContactPage);
    expect(wrapper.text()).toContain('+6285158022805');
  });

  it('displays the email', () => {
    const wrapper = mount(ContactPage);
    expect(wrapper.text()).toContain('adhityatri.work@gmail.com');
  });

  it('contains social-media component', () => {
    const wrapper = mount(ContactPage);
    expect(wrapper.find('[data-testid="social-media"]').exists()).toBe(true);
  });

  it('contains get-in-touch component', () => {
    const wrapper = mount(ContactPage);
    expect(wrapper.find('[data-testid="get-in-touch"]').exists()).toBe(true);
  });

  it('calls useHead with correct title', () => {
    const mockUseHead = vi.fn();
    vi.stubGlobal('useHead', mockUseHead);

    mount(ContactPage);

    expect(mockUseHead).toHaveBeenCalledWith(
      expect.objectContaining({
        title: 'Contact - Adhitya Tri W. U. | Software Engineer',
      })
    );
  });
});
