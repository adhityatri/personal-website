import { describe, it, expect, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import WorkPage from '~/pages/work/index.vue';

describe('Pages: Work', () => {
  it('renders the work page', () => {
    const wrapper = mount(WorkPage);
    expect(wrapper.find('div').exists()).toBe(true);
  });

  it('contains project component', () => {
    const wrapper = mount(WorkPage);
    expect(wrapper.find('[data-testid="project"]').exists()).toBe(true);
  });

  it('calls definePageMeta with correct name', () => {
    const mockDefinePageMeta = vi.fn();
    vi.stubGlobal('definePageMeta', mockDefinePageMeta);

    mount(WorkPage);

    expect(mockDefinePageMeta).toHaveBeenCalledWith(
      expect.objectContaining({
        title: 'Work',
        name: 'work-pages',
      })
    );
  });
});
