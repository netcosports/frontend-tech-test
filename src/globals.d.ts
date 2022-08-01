declare global {
  namespace NodeJS {
    interface ProcessEnv {
      APP_ENV: 'development' | 'staging' | 'production';
    }
  }
}

export {};
