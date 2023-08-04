import {createBrowserRouter, Navigate} from "react-router-dom";
import {MainLayout} from "./layouts/MainLayout";
import {CarsPage} from "./pages/CarsPage";
import {CommentsPage} from "./pages/CommentsPage";
import {PostsPage} from "./pages/PostsPage";

const router = createBrowserRouter([
    {
        path:'',
        element:<MainLayout/>,
        children:[
            {
                index:true,
                element:<Navigate to={'cars'}/>
            },
            {
                path:'/cars',
                element:<CarsPage/>
            },
            {
                path:'/comments',
                element:<CommentsPage/>
            },
            {
                path:'/posts',
                element:<PostsPage/>
            }

        ]
    }
]);

export {router}
