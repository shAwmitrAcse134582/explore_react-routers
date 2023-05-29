import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import About from './components/About/About';
import Products from './components/Products/Products';
import Main from './layout/Main';
import Friends from './components/Friends/Friends';
import FriendDeteil from './components/FriendDeteil/FriendDeteil';
import Posts from './components/Posts/Posts';
import PostDeteils from './components/PostDeteils/PostDeteils';
function App() {
  const router=createBrowserRouter([
     {
      path:'/',element:<Main></Main>,children:[
        {
          path:'/home',element:<Home></Home>
         },
         {
          path:'/products',element:<Products></Products>
         },
         {
          path:'friends',
          loader: async()=>{
           return  fetch('https://jsonplaceholder.typicode.com/users')
          },
          element:<Friends></Friends>
         },
         {
            path:'/friend/:friendId',
            loader:async({params})=>{
             return fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`) ;
            },
            element:<FriendDeteil></FriendDeteil>
         },
         {
          path:'posts',
          loader:async()=>{
            return fetch('https://jsonplaceholder.typicode.com/posts');
          },
          element:<Posts></Posts>
         },
         {
            path:'/post/:postId',
            loader: async({params})=>{
                return fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
            },
            element:<PostDeteils></PostDeteils>
         }

      ]
     },
    
     {
      path:'/about',element:<About></About>
     },
     {
      path:'/*',element:<div>This route is not found</div>
     }
    

  ])
  return (
    <div className="App">

     <RouterProvider router={router}></RouterProvider> 
      
    </div>
  );
}

export default App;
