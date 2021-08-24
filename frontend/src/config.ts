const defaultConfig = {
  backendUrl: 'http://localhost:3000',
  redminePublicUrl: 'https://redmine.org'
};

const configStore = {
  config: null as Record<string, any>|null
}

function getFromEnv(value: string): any {
  // @ts-ignore
  if (!window['__env__']) return null;
  // @ts-ignore
  const env = window['__env__'];
  if (env.hasOwnProperty(value)) {
    return env[value];
  } else {
    return null;
  }
}

export function getConfig(): Record<string, any> {
  if (!configStore.config) {
    configStore.config = {
      backendUrl: getFromEnv('REDMINE_KANBAN_FRONTEND_API_URL') || defaultConfig.backendUrl,
      redminePublicUrl: getFromEnv('REDMINE_KANBAN_FRONTEND_REDMINE_PUBLIC_URL') || defaultConfig.redminePublicUrl
    }
  }
  return configStore.config;
}
