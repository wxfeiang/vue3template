import { ApiEnum } from '@/enum/ApiEnum';
import { http } from '@/plugins/http';
// import { defineStore } from 'pinia'

export default defineStore('user', {
  state: () => {
    return {
      user: undefined as UserModel | undefined,
    };
  },
  actions: {
    async getCurrentUser() {
      if (useAuth().isLogin()) {
        //TODO: 未完成===
        this.user = await http.request<UserModel>({
          url: ApiEnum.CURRENT_USER,
        });
      }
    },
  },
});
