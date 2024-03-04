import { Route, Routes } from "react-router-dom";

import Layout from "../Layout"; // Базовая разметка
import AdminPage from "../../pages/AdminPage"; // Админка
import ArticlesPage from "../../pages/ArticlesPage"; // Страница со ссылками на статьи
import NewsPage from "../../pages/NewsPage"; // Страница с новостями
import DiseasePage from "../../pages/DiseasePage"; // Промежуточная страница между ArticlesPage и ArticlePage
import ArticlePage from "../../pages/ArticlePage"; // Страница статьи (шаблон)
import AccreditationPage from "../../pages/AccreditationPage";
import TestPage from "../../pages/TestPage";

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route path="/admin" element={<AdminPage />} />
                <Route path="/articles" element={<ArticlesPage />} />
                <Route path="/news" element={<NewsPage />} />
                <Route path="/guide/:diseaseName" element={<DiseasePage />} />
                <Route path="/article/:articleName" element={<ArticlePage />} />
                <Route path="/accreditation" element={<AccreditationPage />} />
                <Route path="/test" element={<TestPage />} />
            </Route>
            <Route path="*" element={<></>} />
        </Routes>
    );
}

export default AppRouter;