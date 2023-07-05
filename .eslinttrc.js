/*
 * @Description:
 * @Version: 2.0
 * @Author: ZhangZan
 * @Date: 2023-03-23 13:55:20
 * @LastEditors: ZhangZan
 * @LastEditTime: 2023-06-15 11:03:13
 */
module.exports = {
  rules: { 'vue/comment-directive': 'off' }
}
// module.exports = {
//   root: true,
//   env: {
//     node: true
//   },
//   extends: ['plugin:vue/essential', 'eslint:recommended'],
//   parserOptions: {
//     sourceType: 'module',
//     ecmaVersion: 12,
//     parser: '@typescript-eslint/parser'
//   },
//   plugins: ['vue', '@typescript-eslint'],
//   rules: {
//     'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
//     'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
//   },
//   overrides: [
//     {
//       // 匹配views和二级目录中的index.vue
//       files: ['src/views/index.vue', 'src/views/**/index.vue'],
//       //给上述匹配的文件指定规则
//       rules: {
//         'vue/multi-word-component-names': 'off'
//       }
//     },
//     {
//       files: [
//         '**/__tests__/*.{j,t}s?(x)',
//         '**/tests/unit/**/*.spec.{j,t}s?(x)'
//       ],
//       env: {
//         jest: true
//       }
//     }
//   ]
// }
