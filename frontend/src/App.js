import logo from "./logo.svg";
import "./App.css";
import Main from "./components/main";
import Login from "./components/main/Login";
import Signup from "./components/main/Signup";
import { BrowserRouter, Route, Link, Routes, Navigate } from "react-router-dom";
import Admin from "./components/admin";

import Dashboard from "./components/admin/Dashboard";
import Manageuser from "./components/admin/Manageuser";
import AdminProfile from "./components/admin/Profile";
import UserProfile from "./components/user/Profile";
import User from "./components/user";
import Home from "./components/main/Home";

import ContactUs from "./components/main/ContactUs";

import ManageBlog from "./components/user/ManageBlog";
import ResetPassword from "./components/main/ResetPassword";
// import Addvideo from './components/user/Addvideo';
import AddBlog from "./components/user/AddBlog";
import Authorizer from "./components/Auth";
import Sidebar from "./components/admin/Sidebar";
import VideoManager from "./components/user/VideoManager";
import Blog from "./components/blog";
import BlogManager from "./components/blog/BlogManager";
import ViewBlog from "./components/blog/ViewBlog";
import TermsOfService from "./components/main/TermsOfService";
import { AppProvider } from "./components/user/AppContext";
import AddVideo from "./components/user/AddVideo";
import ListBlog from "./components/blog/ListBlog";

function App() {
  return (
    <div>
       <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/main/home" />} />
          <Route element={<Main />} path="main">
            <Route path="login" element={<Login />} />
            <Route path="home" element={<Home />} />
            <Route path="listblog" element={<ListBlog />} />

            <Route path="resetpassword" element={<ResetPassword />} />

            <Route path="contactus" element={<ContactUs />} />
            <Route path="signup" element={<Signup />} />
            <Route path="termsofservice" element={<TermsOfService />} />
          </Route>

          <Route element={<Admin />} path="admin">
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="sidebar" element={<Sidebar />} />
            <Route path="manageuser" element={<Manageuser />} />
            <Route path="profile" element={<AdminProfile />} />

            <Route path="videomanager" element={<VideoManager />} />
          </Route>

          <Route element={<User />} path="user">
            <Route path="profile" element={<UserProfile />} />
            <Route path="manageblog" element={<ManageBlog />} />
            <Route
              path="addblog"
              element={
                <Authorizer>
                  <AddBlog />
                </Authorizer>
              }
            />
            <Route path="managevideo" element={<VideoManager />} />
            <Route path="addvideo" element={<AddVideo />} />
          </Route>

          <Route element={<Blog />} path="blog">
            <Route
            
              element={
                <Authorizer>
                  <AddBlog />
                </Authorizer>
              }
              path="addblog/:videoid"
            />
            <Route
              element={
                <Authorizer>
                  <BlogManager />
                </Authorizer>
              }
              path="blogmanager/:id"
            />
            <Route
              element={
                <Authorizer>
                  <ViewBlog />
                </Authorizer>
              }
              path="viewblog/:id"
            />
            <Route element={<ListBlog></ListBlog>} path="listblog"></Route>
            <Route element={<AddBlog></AddBlog>} path="addblog"></Route>
            <Route element={<ViewBlog></ViewBlog>} path="viewblog"></Route>
            <Route element={<BlogManager></BlogManager>} path="blogmanager"></Route>
          </Route>
        </Routes>
      </BrowserRouter>
      </AppProvider>
    </div>
  );
}

export default App;
