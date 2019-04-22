import { getGlobalData } from './index';
import { sendMessageToNative } from '@util/index';

export function orLogin() {
  sendMessageToNative({ type: 'push' })
  return getGlobalData('token') !== ''
}