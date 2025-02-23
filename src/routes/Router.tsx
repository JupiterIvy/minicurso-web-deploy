import {Route, Routes} from "react-router-dom";
import {Login} from "@pages/general/Login";
import {Home} from "@pages/general/Home";
import {Layout} from "../layout/Layout.tsx";
import {RequireAuth} from "@/provider/Auth";
import {RoutersPathName} from "@/routes/schemas.ts";

export const Router: any = () => {
    return (
        <Routes>
            <Route
                path={RoutersPathName.Login}
                element={<Login/>}
            />

            <Route
                path="/"
                element={
                        <Layout/>
                    // <RequireAuth>
                    // </RequireAuth>
                }
            >
                <Route
                    path={RoutersPathName.Home}
                    element={<Home/>}
                />


            </Route>
        </Routes>
    )
}
