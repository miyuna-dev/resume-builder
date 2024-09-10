import { User } from "react-feather";

export const menuItems = [
   {
     title: <User />,
     url: '/profile',
     cname: 'icon',
     submenu: [
       {
         title: 'Login',
         url: 'login',
         cname: 'icon',
       },
       {
        title: 'Signup',
        url: 'signup',
        cname: 'icon',
    },
     ],
   },
 ];
 