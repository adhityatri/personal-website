import { vi } from 'vitest';
import { config } from '@vue/test-utils';
import { ref, shallowRef, onMounted, watchEffect } from 'vue';

// Mock Nuxt auto-imported Vue APIs globally
vi.stubGlobal('ref', ref);
vi.stubGlobal('shallowRef', shallowRef);
vi.stubGlobal('onMounted', onMounted);
vi.stubGlobal('watchEffect', watchEffect);

// Mock Nuxt composables globally
vi.stubGlobal('useDevice', () => ({
  isMobile: false,
  isDesktop: true,
  isDesktopOrTablet: true,
  isTablet: false,
}));

vi.stubGlobal('useHead', () => {});
vi.stubGlobal('definePageMeta', () => {});
vi.stubGlobal('useRouter', () => ({
  back: vi.fn(),
  push: vi.fn(),
}));
vi.stubGlobal('useRoute', () => ({
  path: '/',
  name: 'index',
}));
vi.stubGlobal('navigateTo', vi.fn(() => Promise.resolve()));

// Mock Nuxt components as stubs
// Use kebab-case names to match how they appear in templates
config.global.stubs = {
  // Nuxt UI components
  'UApp': { template: '<div><slot /></div>' },
  'UContainer': { template: '<div><slot /></div>' },
  'UButton': { template: '<button @click="$emit(\'click\')"><slot /></button>', props: ['icon', 'size', 'variant', 'class'] },
  'UIcon': { template: '<span />', props: ['name', 'class'] },
  'UNavigationMenu': { template: '<nav><slot /></nav>', props: ['items'] },
  // Nuxt built-in
  'NuxtPage': { template: '<div data-testid="nuxt-page" />' },
  'NuxtLink': { template: '<a><slot /></a>', props: ['to'] },
  'NuxtImg': { template: '<img />', props: ['provider', 'src', 'alt'] },
  'nuxt-page': { template: '<div data-testid="nuxt-page" />' },
  'nuxt-link': { template: '<a><slot /></a>', props: ['to'] },
  'nuxt-img': { template: '<img />', props: ['provider', 'src', 'alt'] },
  // App components (kebab-case as used in templates)
  'top-bar': { template: '<div data-testid="top-bar" />' },
  'app-footer': { template: '<div data-testid="app-footer" />' },
  'app-brand': { template: '<div data-testid="app-brand" />' },
  'app-title': { template: '<div><slot /></div>' },
  'nav-menu': { template: '<div data-testid="nav-menu" />' },
  'hero-profile': { template: '<div data-testid="hero-profile" />' },
  'hero-image': { template: '<div data-testid="hero-image" />' },
  'bio': { template: '<div data-testid="bio" />' },
  'project': { template: '<div data-testid="project" />', props: ['mode'] },
  'card': { template: '<div class="card"><slot /></div>' },
  'promote': { template: '<div data-testid="promote" />', props: ['withAction', 'class'] },
  'quote': { template: '<div data-testid="quote" />' },
  'get-in-touch': { template: '<button data-testid="get-in-touch" />', props: ['class'] },
  'social-media': { template: '<div data-testid="social-media" />', props: ['solid', 'sosmedOnly'] },
  'my-picture': { template: '<div data-testid="my-picture" />' },
  'Transition': { template: '<div><slot /></div>' },
};
