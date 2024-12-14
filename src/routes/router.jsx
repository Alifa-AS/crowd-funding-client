import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import Home from "../Components/Pages/Home/Home";
import Login from "../Components/Pages/Login";
import Register from "../Components/Pages/Register";
import AllCampaign from "../Components/Pages/AllCampaign";
import AddNewCampaign from "../Components/Pages/AddNewCampaign ";
import MyCampaign from "../Components/Pages/MyCampaign";
import MyDonations from "../Components/Pages/MyDonations ";
import Details from "../Components/Pages/Details/Details";
import Users from "../Components/Pages/Users";
import PrivateRoutes from "./PrivateRoutes";
import UpdateCampaign from "../Components/Pages/UpdateCampaign";



const router  = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        errorElement: <ErrorPage />,

        children : [
            {
                path: '/',
                element: <Home />,
                loader: () => fetch('http://localhost:5000/activeCampaigns')
            },
            {
                path: '/register',
                element: <Register />,
            },
            {
                path: '/login',
                element: <Login />,
            },
            {
                path: '/allCampaign',
                element: <AllCampaign />,
                loader: () => fetch('http://localhost:5000/campaign')
            },
            {
                path: '/addNewCampaign',     
                element: (
                        <PrivateRoutes>
                           <AddNewCampaign />
                        </PrivateRoutes>
                       ),    
            },
            {
                path: '/myCampaign',       
                element: (
                        <PrivateRoutes>
                            <MyCampaign />
                        </PrivateRoutes>
                         ),     
            },
            {
                path: '/myDonations',
                element: (
                        <PrivateRoutes>
                            <MyDonations />
                        </PrivateRoutes> 
                        ),      
            },
            {
                path: '/users',
                element: (
                        <PrivateRoutes>
                            <Users />
                        </PrivateRoutes> 
                        ),
                loader: () => fetch('http://localhost:5000/users')
            },
            {
                path: '/details/:id',
                element: (
                        <PrivateRoutes>
                            <Details />
                        </PrivateRoutes>
                ),
                loader:({params})=>fetch(`http://localhost:5000/details/${params.id}`)
            },
            {
                path: '/updateCampaign/:id',
                element: (
                        <PrivateRoutes>
                            <UpdateCampaign />
                        </PrivateRoutes>
                ),
                loader:({params})=>fetch(`http://localhost:5000/updateCampaign/${params.id}`)
            },
        ]
    },

])
export default router;