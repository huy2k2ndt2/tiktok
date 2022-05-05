import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes } from "./routes";
import { DefaultLayout } from "./components/Layout";
import { Fragment, useEffect } from "react";

function App() {
    useEffect(() => {
        console.log("App run");
    }, []);

    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoutes.map((route) => {
                        const Layout = route.layout ? route.layout : route.layout === null ? Fragment : DefaultLayout;

                        const Page = route.component;

                        return (
                            <Route
                                key={route.key}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
