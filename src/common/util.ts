import { format } from "./date"

// src/common/utils/utils.ts
export function isValidKey(key: string | number | symbol, object: object): key is keyof typeof object {
  return key in object
}

/**
 * 下划线转驼峰
 * @param str
 * @returns
 */
export function lineToHump(str: string): string {
  if (str.startsWith('_')) {
    return str
  }
  return str.replace(/\_(\w)/g, (all, letter: string) => letter.toUpperCase())
}

/**
 * 驼峰转下划线
 * @param str
 * @returns
 */
export function humpToLine(str = ''): string {
  if (typeof str !== 'string') {
    return str
  }
  
  return str.replace(/([A-Z])/g, '_$1').toLowerCase()
}

/**
 * 将对象的所有属性由下划线转换成驼峰
 * @param obj
 * @returns
 */
export function lineToHumpObject(obj: Object) {
  let key: string
  const element: {
    [key: string]: any
  } = {}
  for (key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (isValidKey(key, obj)) {
        const value = obj[key]
        if (typeof key === 'string' && (key as string).indexOf('_time') > -1) {
          element[lineToHump(key)] = format(value)
        } else {
          element[lineToHump(key)] = value
        }
      }
    }
  }
  return {
    ...element,
  }
}

/**
 * 将对象的所有属性由驼峰转换为下划线
 * @param obj
 * @returns
 */
export function humpToLineObject(obj: Object) {
  let key: string
  const element: {
    [key: string]: any
  } = {}
  for (key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (isValidKey(key, obj)) {
        const value = obj[key]
        element[humpToLine(key)] = value || null
      }
    }
  }
  return {
    ...element,
  }
}

