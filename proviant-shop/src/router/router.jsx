import React from "react"
import {MainPage} from "../pages/MainPage";
import {CatalogPage} from "../pages/CatalogPage";
import {ContactsPage} from "../pages/ContactsPage";
import {CartPage} from "../pages/CartPage";
import { ReactComponent as Cart } from '../assets/images/shopCart.svg'
import {CategoryPage} from "../pages/CategoryPage";

export const routes = [
    {
        path: "/",
        element: <MainPage/>,
        title: "Главная",
    },
    {
        path: "/catalog",
        element: <CatalogPage/>,
        title: "Каталог",
    },
    {
        path: "/contacts",
        element: <ContactsPage/>,
        title: "Контакты",
    },
    {
        path: "/cart",
        element: <CartPage/>,
        title: <Cart/>,
    },
    {
        path: "/categories",
        element: <CategoryPage/>,
        title: "",
    },
]