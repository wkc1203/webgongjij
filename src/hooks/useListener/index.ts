import { useState } from 'react'
import { useLifecycles } from 'react-use'
type event = 'storage_evt'
export function useListener(event: event) {
  const [event_val, setEvent_val] = useState()
  const listener = (params: any) => setEvent_val(params)
  useLifecycles(() => {
    document.addEventListener(event, listener)
  }, () => {
    document.removeEventListener(event, listener)
  })
  return event_val
}