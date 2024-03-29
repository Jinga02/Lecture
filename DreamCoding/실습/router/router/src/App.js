/** @format */

import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Videos from "./pages/Videos";
import Root from "./pages/Root";
import VideoDetail from "./pages/VideoDetail";

// 라우트 구성을 사용하여 BrowserRouter를 생성합니다.
const router = createBrowserRouter([
  {
    path: "/", // 루트 경로
    element: <Root />, // 루트 경로에 렌더링할 컴포넌트
    errorElement: <NotFound />, // 오류 또는 404가 발생할 경우 렌더링할 컴포넌트
    children: [
      { index: true, element: <Home /> }, // 인덱스 경로, Home 컴포넌트를 렌더링합니다. 인덱스 경로란 경로가 따로 명시되지 않았을때 기본적으로 렌더링되는 경로를 의미한다.
      { path: "/videos", element: <Videos /> }, // "/videos" 경로, Videos 컴포넌트를 렌더링합니다.
      { path: "/videos/:videoId", element: <VideoDetail /> }, // "/videos/:videoId" 경로, VideoDetail 컴포넌트를 렌더링합니다.
    ],
  },
]);

// 주 앱 컴포넌트
function App() {
  // RouterProvider로 앱 전체를 감싸고 구성된 라우터를 제공합니다.
  return <RouterProvider router={router} />;
}

// 앱 컴포넌트를 기본 내보내기로 제공합니다.
export default App;
