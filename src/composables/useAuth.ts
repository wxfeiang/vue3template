import router from '@/router';
import { reactive, ref } from 'vue';
// 暂时直接引用路由
//
interface userInfo {
  name: string;
  id: number;
}

let userInfo = ref(<userInfo>{});
const loginFrom = reactive({
  username: 'admin',
  password: '123456',
});
const rules = {
  username: {
    type: 'string',
    required: true,
    message: '请填用户名',
    trigger: ['blur'],
  },
  password: {
    type: 'string',
    required: true,
    message: '请输入密码',
    trigger: ['blur', 'change'],
  },
};

const Login = async () => {
  try {
    // const data = await http.post("/mock/sys/login", loginFrom, config) // 参数 空配置
    // authStore.SETTIKEN(data.token)
    // userInfo.value = data

    const route = router.resolve({ name: 'home' });
    location.href = route.fullPath;
  } catch (error) {
    console.log('🍏', error);
  }
};
const getToken = async () => {
  try {
    const config = {
      params: {}, // 提交参数 params  url拼接
      custom: { auth: true, toast: true },
    };
  } catch {
    console.log('🍉');
  }
};

export default () => {
  return { Login, userInfo, getToken, loginFrom, rules };
};
