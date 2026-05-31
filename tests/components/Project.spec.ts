import { describe, it, expect, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import Project from '~/components/Project.vue';

// Mock the JSON import
vi.mock('~/data/project.json', () => ({
  default: [
    {
      title: 'Project A',
      client: 'Client A',
      descriptions: 'Description A',
      technology: ['Vue', 'Nuxt'],
    },
    {
      title: 'Project B',
      client: 'Client B',
      descriptions: 'Description B',
      technology: ['React', 'Node'],
    },
    {
      title: 'Project C',
      client: 'Client C',
      descriptions: 'Description C',
      technology: ['Angular', '.NET'],
    },
    {
      title: 'Project D',
      client: 'Client D',
      technology: ['Go', 'Docker'],
    },
  ],
}));

describe('Component: Project', () => {
  it('renders the project section', () => {
    const wrapper = mount(Project);
    expect(wrapper.find('div').exists()).toBe(true);
  });

  it('displays default title "Latest Selected Projects"', () => {
    const wrapper = mount(Project);
    expect(wrapper.text()).toContain('Latest Selected Projects');
  });

  it('shows only 3 projects in homepage mode', () => {
    const wrapper = mount(Project, {
      props: { mode: 'homepage' },
    });
    const cards = wrapper.findAll('.card');
    expect(cards.length).toBe(3);
  });

  it('shows all projects in workpage mode', () => {
    const wrapper = mount(Project, {
      props: { mode: 'workpage' },
    });
    const cards = wrapper.findAll('.card');
    expect(cards.length).toBe(4);
  });

  it('displays project titles', () => {
    const wrapper = mount(Project, {
      props: { mode: 'workpage' },
    });
    expect(wrapper.text()).toContain('Project A');
    expect(wrapper.text()).toContain('Project B');
  });

  it('displays client names', () => {
    const wrapper = mount(Project, {
      props: { mode: 'workpage' },
    });
    expect(wrapper.text()).toContain('Client A');
    expect(wrapper.text()).toContain('Client B');
  });

  it('displays technology tags', () => {
    const wrapper = mount(Project, {
      props: { mode: 'workpage' },
    });
    expect(wrapper.text()).toContain('Vue');
    expect(wrapper.text()).toContain('Nuxt');
  });

  it('shows "No Descriptions" for projects without descriptions', () => {
    const wrapper = mount(Project, {
      props: { mode: 'workpage' },
    });
    expect(wrapper.text()).toContain('No Descriptions');
  });

  it('shows View More button in homepage mode', () => {
    const wrapper = mount(Project, {
      props: { mode: 'homepage' },
    });
    expect(wrapper.text()).toContain('View More');
  });

  it('hides View More button in workpage mode', () => {
    const wrapper = mount(Project, {
      props: { mode: 'workpage' },
    });
    const buttons = wrapper.findAll('button');
    expect(buttons.length).toBe(0);
  });

  it('navigates to work page when View More is clicked', async () => {
    const mockNavigateTo = vi.fn(() => Promise.resolve());
    vi.stubGlobal('navigateTo', mockNavigateTo);

    const wrapper = mount(Project, {
      props: { mode: 'homepage' },
    });
    const button = wrapper.find('button');
    await button.trigger('click');

    expect(mockNavigateTo).toHaveBeenCalledWith({ name: 'work-pages' });
  });
});
