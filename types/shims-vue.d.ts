declare module '*.vue' {
  import { DefineComponent } from 'vue'
  const component: DefineComponent<
    Record<string, string>,
    Record<string, string>,
    any
  >
  export default component
}

declare module '*.scss' {
  const scss: Record<string, string>
  export default scss
}
