import { Link } from "react-router-dom";

const NewsCard = ({ imgArticles }) => {
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

export default NewsCard;