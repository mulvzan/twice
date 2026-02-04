export const MESSAGES = {
  TODO: {
    SUCCESS: {
      CREATE: '添加成功',
      UPDATE: '更新成功',
      DELETE: '删除成功',
    },
    ERROR: {
      CREATE: '添加失败，请重试',
      UPDATE: '更新失败，请重试',
      DELETE: '删除失败，请重试',
      LOAD: '加载失败，请刷新页面重试',
    },
  },
  AUTH: {
    SUCCESS: '登录成功！',
    ERROR: '登录失败，请重试',
  },
  CONTACT: {
    SUCCESS: '用户新增成功！',
    ERROR: '用户新增失败，请重试',
  }
} as const;