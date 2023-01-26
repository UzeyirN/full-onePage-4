import MainRoot from './../components/MainRoot';
import Home from './../pages/Home';
import AboutUs from './../pages/AboutUs';
import Courses from './../pages/Courses';
import Elements from './../pages/Elements';
import Add from './../pages/Add';
import Contact from './../pages/Contact';

const ROUTES = [
    {
        path: "/",
        element: <MainRoot />,
        children: [
            {
                path: "",
                element: <Home />
            },
            {
                path: "about",
                element: <AboutUs />
            },
            {
                path: "courses",
                element: <Courses />
            },
            {
                path: "elements",
                element: <Elements />
            },
            {
                path: "add",
                element: <Add />
            },
            {
                path: "contact",
                element: <Contact />
            }
        ]
    }
]

export default ROUTES