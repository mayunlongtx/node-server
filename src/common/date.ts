// src/common/utils/date.ts
import moment from 'moment'
import Config from '../mysql/default'

/**
 * 格式化时间
 * @param date
 * @param pattern
 * @returns
 */
export function format(date: Date, pattern = Config.DEFAULT_DATE_FORMAT) {
  return moment(date).format(pattern)
}