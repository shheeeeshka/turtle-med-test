import "./NewsPage.css";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const NewsPage = () => {
    const [imgArticles, setImgArticles] = useState([]);

    useEffect(() => {
        setImgArticles([
            { link: "/", imgSrc: "https://img.medscapestatic.com/thumbnail_library/ss-adult-brain-tumors.jpg?interpolation=lanczos-none&resize=300:*", title: "Опухоли головного мозга у взрослых: проблема распространения" },
            { link: "/", imgSrc: "https://img.medscapestatic.com/thumbnail_library/ss_tako_thumb.jpg?interpolation=lanczos-none&resize=300:*", title: "Инфекции мочевыводящих путей: патологии и проблемы" },
            { link: "/", imgSrc: "https://img.medscapestatic.com/thumbnail_library/thumb_2022_UTI.jpg?interpolation=lanczos-none&resize=300:*", title: "Невозможно пропустить диагноз желудочно-кишечного тракта" },
            { link: "/", imgSrc: "https://img.medscapestatic.com/thumbnail_library/wc_240205_Inflamed_appendix_removal_800x450.jpg?interpolation=lanczos-none&resize=300:*", title: "Ключи к диагностике синдрома разбитого сердца (Такоцубо..." },
        ]);
    }, []);

    return (
        <div className="article-collection">
            <ul className="img-article-list">
                {
                    imgArticles.map((article, ind) => (
                        <li className="img-article-list-item" key={ind}>
                            <div>
                                <Link to={article.link} className="img-article-list-link">
                                    <img style={{ width: '100%' }} src={article.imgSrc} alt="" />
                                </Link>
                            </div>
                            <div className="img-article-description">
                                <Link to={article.link} className="img-article-list-link">
                                    <span>
                                        {
                                            article.title
                                        }
                                    </span>
                                </Link>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default NewsPage;