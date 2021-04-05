export function delay(callback: (...args: any[]) => void, ms: number = 0): (...args: any[]) => void {
  let timer: number|null = null
  let argsStore: any[]
  return (...args: any[]) => {
    argsStore = args
    if (timer !== null) {
      clearTimeout(timer)
    }
    // @ts-ignore
    timer = setTimeout(callback, ms, ...argsStore)
  }
}