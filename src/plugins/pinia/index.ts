import { createPinia } from 'pinia';
import { App } from 'vue';

const setup = (app: App) => {
  app.use(createPinia());
};

export { setup };
