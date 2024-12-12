import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { icons } from "../base-components/Lucide";

export interface Menu {
  icon: keyof typeof icons;
  title: string;
  pathname?: string;
  subMenu?: Menu[];
  ignore?: boolean;
}

export interface SideMenuState {
  menu: Array<Menu | "divider">;
}

const initialState: SideMenuState = {
  menu: [
    {
      icon: "Activity",
      pathname: "/",
      title: "Tableau de Board",
    },
{
  icon: "ShoppingBag",
  title: "Liste Client",
      pathname: "/client",
},
{
  icon: "ShoppingBag",
  title: "Commandes Story",
      pathname: "/commandes",
},
    {
      icon: "Activity",
      pathname: "/commande_story",
      title: "Commandes Story par PACK",
    },
{
  icon: "Edit",
  title: "Liste des Categories",
      pathname: "/category",
},
{
  icon: "Edit",
  title: "Liste des Stroy",
      pathname: "/list_story",
},
{
  icon: "ShoppingBag",
  title: "Liste des Packs",
      pathname: "/subscription",
},
{
  icon: "Inbox",
  pathname: "/employe",
  title: "Liste des Employers",
},
{
  icon: "Inbox",
  pathname: "/role",
  title: "Liste des Roles",
},
{
  icon: "Inbox",
  pathname: "/pages",
  title: "Liste des Pages",
},
],
};

export const sideMenuSlice = createSlice({
  name: "sideMenu",
  initialState,
  reducers: {},
});

export const selectSideMenu = (state: RootState) => state.sideMenu.menu;

export default sideMenuSlice.reducer;
