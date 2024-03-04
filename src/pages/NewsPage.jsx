import { useEffect, useState } from "react";
import NewsCard from "../components/NewsCard";

const NewsPage = () => {
    const [imgArticles, setImgArticles] = useState([]);

    useEffect(() => {
        setImgArticles([
            { link: "/", imgSrc: "https://img.medscapestatic.com/thumbnail_library/ss-adult-brain-tumors.jpg?interpolation=lanczos-none&resize=300:*", title: "Опухоли головного мозга у взрослых: проблема распространения" },
            { link: "/", imgSrc: "https://img.medscapestatic.com/thumbnail_library/ss_tako_thumb.jpg?interpolation=lanczos-none&resize=300:*", title: "Инфекции мочевыводящих путей: патологии и проблемы" },
            { link: "/", imgSrc: "https://img.medscapestatic.com/thumbnail_library/thumb_2022_UTI.jpg?interpolation=lanczos-none&resize=300:*", title: "Невозможно пропустить диагноз желудочно-кишечного тракта" },
            { link: "/", imgSrc: "https://img.medscapestatic.com/thumbnail_library/wc_240205_Inflamed_appendix_removal_800x450.jpg?interpolation=lanczos-none&resize=300:*", title: "Ключи к диагностике синдрома разбитого сердца (Такоцубо..." },
        ]);
    }, [])

    return (
        <NewsCard imgArticles={imgArticles} />
    );
}

export default NewsPage;