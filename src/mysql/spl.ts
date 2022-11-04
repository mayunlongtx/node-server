export const queryClass = `SELECT * from class`
export const queryNoun = `SELECT * from noun_name`

export const addNoun = 'INSERT INTO noun_name (`name`, `english_name`, `alias_name`, `description`, `class_id`,`operate_user`,`remark`,`create_time`,`update_time`) VALUES ( ?,?,?,?,?,?,?,?,?)'

export const delNoun = 'DELETE FROM noun_name'