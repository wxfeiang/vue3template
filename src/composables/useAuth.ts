import { http } from '@/plugins/http';
import router from '@/router';
import { reactive, ref } from 'vue';
const storage = useStorage();
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
    // 返回数据的类型
    const data = await http.request<ApiData<any>>({
      url: '/mock/sys/login',
      method: 'post',
      data: loginFrom,
    });
    ElMessage({
      message: data.message,
      type: 'success',
    });

    // 参数 空配置
    storage.set(CacheEnum.TOKEN_NAME, data.data.token);
    router.push({ name: 'home' });
  } catch (error) {}
};
const testToke = async () => {
  try {
    // 返回数据的类型
    const data = await http.request<ApiData<any>>({
      url: '/users/testtoken',
      method: 'GET',
    });
    ElMessage({
      message: data.message,
      type: 'success',
    });
  } catch {
    console.log('🍉');
  }
};

export default () => {
  return { Login, userInfo, testToke, loginFrom, rules };
};
