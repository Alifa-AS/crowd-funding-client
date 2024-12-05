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


const router  = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        errorElement: <ErrorPage />,

        children : [
            {
                path: '/',
                element: <Home />
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
            },
            {
                path: '/addNewCampaign',     
                element: <AddNewCampaign />,     //private
            },
            {
                path: '/myCampaign',       
                element: <MyCampaign />,      //private
            },
            {
                path: '/MyDonations',
                element: <MyDonations />,       //private
            },
        ]
    },

])
export default router;