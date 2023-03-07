import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard/index";
import ProductList from "./scenes/products/products"
import CategoryList from "./scenes/categories/categories"
import BrandList from "./scenes/brands/brands"
import UserList from "./scenes/users/users"


function App() {
  const [theme, colorMode] = useMode();
  return(
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <div className="app">
        <Sidebar />
          <main className="content">
            <Topbar />
            <Routes>
              <Route path="/" exact={true} element={<Dashboard />} />
              <Route path="/products" element={<ProductList />} />
              <Route path="/categories" element={<CategoryList />} />
              <Route path="/brands" element={<BrandList />} />
              <Route path="/users" element={<UserList />} />
             
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>

  ) 
}

export default App;
