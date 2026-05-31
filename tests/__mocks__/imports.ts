import { ref, onMounted, shallowRef, watchEffect } from 'vue';

// Mock Nuxt auto-imports
export const useDevice = () => ({
  isMobile: false,
  isDesktop: true,
  isDesktopOrTablet: true,
  isTablet: false,
});

export const useHead = (_options: any) => {};
export const definePageMeta = (_options: any) => {};
export const useRouter = () => ({
  back: () => {},
  push: () => {},
});
export const useRoute = () => ({
  path: '/',
  name: 'index',
});
export const navigateTo = (_path: any, _options?: any) => Promise.resolve();
export const defineProps = (props: any) => props;
export const defineEmits = (emits: any) => emits;

export { ref, onMounted, shallowRef, watchEffect };
