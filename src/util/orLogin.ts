import { getGlobalData } from './index';
import { sendMessageToNative } from '@util/index';

export function orLogin() {
  const token = getGlobalData('token')
  if (!!token) {
    sendMessageToNative({ type: 'push' })
    return true
  } else {
    sendMessageToNative({ type: 'login' })
    return false
  }
}