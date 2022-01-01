import "./Styles/App.css";
import SearchPage from "./Pages/SearchPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./Pages/HomePage";
import PageNotFound from "./Pages/NotFoundPage";
import Footer from "./Components/Footer";
import ImagesPage from "./Pages/ImagesPage";
import NewsPage from "./Pages/NewsPage";

function App() {
    return (
        <div className='App'>
            <BrowserRouter>
                <Routes>
                    <Route exact path='/' element={<HomePage />} />
                    <Route path='/images' element={<ImagesPage />} />
                    <Route path='/news' element={<NewsPage />} />
                    <Route path='/search' element={<SearchPage />} />

                    <Route path='*' element={<PageNotFound />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
