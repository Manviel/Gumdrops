/* eslint-disable */
declare module '@gumdrops/core' {
  import type { DefineComponent } from 'vue'

  export const Button: DefineComponent<{}, {}, any>
  export const Typography: DefineComponent<{}, {}, any>

  const _default: {
    Button: typeof Button
    Typography: typeof Typography
  }

  export default _default
}
