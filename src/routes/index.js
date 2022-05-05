import { v4 as uuidv4 } from "uuid";

// Layouts
import { HeaderOnly } from '@/components/Layout';

// Pages
import Home from '@/pages/Home';
import Following from '@/pages/Following';
import Profile from '@/pages/Profile';
import Upload from '@/pages/Upload';
import Login from "@/pages/Login";
// import Search from '@/pages/Search';

// Public routes
const publicRoutes = [
  { path: "/", component: Home, key: uuidv4() },
  { path: "/login", component: Login, key: uuidv4() },
  { path: "/following", component: Following, key: uuidv4() },
  { path: "/profile", component: Profile, key: uuidv4() },
  { path: "/upload", component: Upload, layout: HeaderOnly, key: uuidv4() },
  // { path: "/search", component: Search, layout: null, key: uuidv4() },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
