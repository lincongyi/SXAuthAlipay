import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import styleImport, { VantResolve } from 'vite-plugin-style-import'
import AutoImport from 'unplugin-auto-import/vite'
import { viteVConsole } from 'vite-plugin-vconsole'
const path = require('path')

// https://vitejs.dev/config/
export default ({mode}) =>
  defineConfig({
    base: './',
    plugins: [
      vue(),
      AutoImport({
        imports: ['vue'],
        // Generate corresponding .eslintrc-auto-import.json file.
        eslintrc: {
          enabled: false, // Default `false`
          filepath: './.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
          globalsPropValue: true, // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
        },
        dts: './auto-import.d.ts'
      }),
      viteVConsole({
        entry: [
          path.resolve('src/pages/demo/main.js'),
          path.resolve('src/pages/auth/main.js'),
          path.resolve('src/pages/authResult/main.js'),
        ], // entry for each page, different from the above
        localEnabled: mode === 'development',
        enabled: mode === 'development',
        config: {
          maxLogNumber: 1000,
          theme: 'dark'
        }
      }),
      styleImport({
        resolves: [VantResolve()],
      }),
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
        '@images': path.resolve(__dirname, './src/assets'),
      },
    },
    pluginOptions: {
      'style-resources-loader': {
        preProcessor: 'scss',
        patterns: []
      }
    },
    build: {
      rollupOptions: {
        input: {
          index: path.resolve(__dirname, 'index.html'),
          demo: path.resolve(__dirname, 'demo.html'),
          auth: path.resolve(__dirname, 'auth.html'),
          toMiniProgram: path.resolve(__dirname, 'toMiniProgram.html'),
          authResult: path.resolve(__dirname, 'authResult.html'),
        }
      },
    },
    server: {
      host: '0.0.0.0',
      proxy: {
        // ?????????demo????????????
        [loadEnv(mode, process.cwd()).VITE_DEMO_BASE_URL]: {
          target: loadEnv(mode, process.cwd()).VITE_PROXY_DEMO_BASE_URL,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/bpi/, '/api'),
        },
        // ???????????????????????????
        [loadEnv(mode, process.cwd()).VITE_AUTH_BASE_URL]: {
          target: loadEnv(mode, process.cwd()).VITE_PROXY_AUTH_BASE_URL,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ''),
        },
      }
    }
  })
