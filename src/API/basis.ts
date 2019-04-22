export enum code {
  error = '-1',
  success = '0',
  init = 1,
}

export interface res {
  code: code,
  success?: boolean,
  message?: string,
  msg?: string,
  exception?: string,
}