export const translations = {
  zh: {
    common: {
      submit: '提交',
      cancel: '取消',
      delete: '删除',
      edit: '编辑',
    },
    todo: {
      title: '待办事项',
      placeholder: '请输入待办事项',
      empty: '暂无待办事项',
    },
    auth: {
      login: '登录',
      username: '用户名',
      password: '密码',
    }
  }
} as const;

export type TranslationKeys = keyof typeof translations.zh;