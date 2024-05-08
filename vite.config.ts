/* eslint-disable @typescript-eslint/no-var-requires */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import viteEslint from 'vite-plugin-eslint'
import { resolve } from 'path'
import svgr from 'vite-plugin-svgr'
import postcsspxtoviewport from 'postcss-px-to-viewport'

/** 路径查找 */
const pathResolve = (dir: string): string => {
  return resolve(__dirname, '.', dir)
}

// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    base: '/',
    define: {},
    plugins: [
      react(),
      viteEslint({
        failOnError: false,
      }),
      svgr(),
    ],
    resolve: {
      alias: [
        {
          find: /@\//,
          replacement: pathResolve('src') + '/',
        },
      ],
      extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json'],
    },
    css: {
      postcss: {
        plugins: [
          postcsspxtoviewport({
            unitToConvert: 'px', // 要转化的单位
            viewportWidth: 750, // UI设计稿的宽度
            unitPrecision: 6, // 转换后的精度，即小数点位数
            propList: ['*'], // 指定转换的css属性的单位，*代表全部css属性的单位都进行转换
            viewportUnit: 'vw', // 指定需要转换成的视窗单位，默认vw
            fontViewportUnit: 'vw', // 指定字体需要转换成的视窗单位，默认vw
            selectorBlackList: ['ignore-'], // 指定不转换为视窗单位的类名，
            minPixelValue: 1, // 默认值1，小于或等于1px则不进行转换
            mediaQuery: true, // 是否在媒体查询的css代码中也进行转换，默认false
            replace: true, // 是否转换后直接更换属性值
            // exclude: [/node_modules/], // 设置忽略文件，用正则做目录名匹配
            exclude: [],
            landscape: false, // 是否处理横屏情况
          }),
        ],
      },
    },
    postcss: {
      plugins: [require('autoprefixer'), require('cssnano')],
    },
    server: {
      open: false,
      port: 3331,
      proxy: {
        '/api': 'https://kan-dev.rokid.com',
      },
    },
  }
})
