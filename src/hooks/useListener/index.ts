import { useState, useEffect } from 'react'
import { useLifecycles } from 'react-use'
type event = 'storage_evt'
export function useListener(event: event, fn?: (...rest: any) => void) {
  const [event_val, setEvent_val] = useState()
  useEffect(() => {
    fn && fn(event_val)
  }, [event_val])
  const listener = (params: any) => setEvent_val(params)
  useLifecycles(() => {
    document.addEventListener(event, listener)
  }, () => {
    document.removeEventListener(event, listener)
  })
  return event_val
}