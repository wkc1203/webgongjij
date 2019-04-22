import { getGlobalData, setGlobalData } from './globalData';
import { orLogin } from './orLogin';
import { sendMessageToNative } from './sendMessageToNative';
import { validate } from './validate';
import { storage } from './storage';

export {
  orLogin,
  sendMessageToNative,
  getGlobalData,
  setGlobalData,
  validate,
  storage as storage_evt
}