import { createStore } from "vuex";

// 定义用户信息的数据结构
export interface UserProps {
  isLogin: boolean;
  username: string;
  uid: number;
  regTime: number;
  favs: number;
  roles: string;

  name?: string;
  gender?: string;
  pic?: string;
  mobile?: string;
  regmark?: string;
}

export interface ResponseType<P = {}> {
  code: number;
  msg: string;
  data: P;
}

export interface ImageProps {
  _id?: string;
  url?: string;
  createdAt?: string;
  fitUrl?: string;
}
export interface ColumnProps {
  _id: string;
  title: string;
  avatar?: ImageProps;
  description: string;
}
export interface PostProps {
  _id?: string;
  title: string;
  excerpt?: string;
  content?: string;
  image?: ImageProps | string;
  createdAt?: string;
  column: string;
  author?: string | UserProps;
  isHTML?: boolean;
}
interface ListProps<P> {
  [id: string]: P;
}
export interface GlobalErrorProps {
  status: boolean;
  message?: string;
}
export interface GlobalDataProps {
  token: string;
  error: GlobalErrorProps;
  loading: boolean;
  columns: { data: ListProps<ColumnProps>; currentPage: number; total: number };
  posts: { data: ListProps<PostProps>; loadedColumns: string[] };
  user: UserProps;
}

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {},
});
