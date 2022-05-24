import React from "react"
import {MainPage} from "../pages/MainPage"
import {CatalogPage} from "../pages/CatalogPage"
import {ContactsPage} from "../pages/ContactsPage"
import {CartPage} from "../pages/CartPage"
import {CategoryPage} from "../pages/CategoryPage"
import {AdminPage} from "../pages/AdminPage"
import {ReactComponent as Cart} from '../assets/images/shopCart.svg'
import { ItemsCartCount } from '../components/ItemsCartCount'


export const routes = [{
    path: "/", element: <MainPage/>, title: "Главная",
}, {
    path: "/catalog", element: <CatalogPage/>, title: "Каталог",
}, {
    path: "/contacts", element: <ContactsPage/>, title: "Контакты",
}, {
    path: "/cart", element: <CartPage/>, title: <div style={{display:"flex", cursor:"pointer"}}><Cart/> <ItemsCartCount/></div>,
}, {
    path: "/categories/:id", element: <CategoryPage/>, title: "",
}, {
    path: "/admin", element: <AdminPage/>, title: "",
}, {
    path: "*", element: <MainPage/>, title: '',
}]