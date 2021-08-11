import MyDashboard from "../assets/myDashboard.svg";
import Appointments from "../assets/appointments.svg";
import Settings from "../assets/settings.svg";
/* import History from "../assets/history.svg"; */

const DashboardNavigation = [
  {
    uri: "/dashboard",
    title: "My Dashboard",
    image: MyDashboard,
  },
  {
    uri: "/dashboard/appointments",
    title: "Appointments",
    image: Appointments,
  },
  {
    uri: "/dashboard/history",
    title: "History",
    /* image: History, */
  },
  {
    uri: "/dashboard/settings",
    title: "Settings",
    image: Settings,
  },
];

export default DashboardNavigation;
