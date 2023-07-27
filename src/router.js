import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayout} from "./layouts/MainLayout/MainLayout";
import {TodosPage,AlbumsPage,CommentsPage,PostsPage,NotFoundPage} from "./pages";


const router = createBrowserRouter([
    {
        path:'',
        element:<MainLayout/>,
        children:[
            {
                index: true,
                element:<Navigate to={'todos'}/>
            },
            {
                path:'todos',
                element:<TodosPage/>
            },
            {
                path:'albums',
                element:<AlbumsPage/>
            },
            {
                path:'comments',
                element:<CommentsPage/>,
                children:[
                    {
                        path:`posts/:postId`,
                        element:<PostsPage/>,
                    }
                ]
            }
        ]
    },
    {
        path:'*',
        element:<NotFoundPage/>
    }
]);

export {router}