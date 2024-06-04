import styles from "./ArticleList.module.css";
import React from 'react';
import { Link } from 'react-router-dom';

const ArticleList = ({ articleLinks, articleTypes }) => {

    return (
        <div className={styles["links-list"]}>
            {
                articleTypes.map(({ title, type }, i) => (
                    <section key={i} className={styles['article-type-links']}>
                        <h3 style={{ fontSize: '20px' }}>{title}</h3>
                        <div className={styles['article-list-container']}>
                            <ul className={styles['article-list']}>
                                {
                                    articleLinks
                                        .filter(link => link.type === type)
                                        .slice(0, articleLinks.filter(link => link.type === type).length / 3)
                                        .map((link, ind) => (
                                            <li key={ind}>
                                                <Link className={styles['article-list-link']} to={`/guide/${link.href}?articleName=${link.text}`}>
                                                    {link.text}
                                                </Link>
                                            </li>
                                        ))
                                }
                            </ul>
                            <ul className={styles['article-list']}>
                                {
                                    articleLinks
                                        .filter(link => link.type === type)
                                        .slice(articleLinks.filter(link => link.type === type).length / 3, (articleLinks.filter(link => link.type === type).length / 3) * 2)
                                        .map((link, ind) => (
                                            <li key={ind}>
                                                <Link className={styles['article-list-link']} to={`/guide/${link.href}?articleName=${link.text}`}>
                                                    {link.text}
                                                </Link>
                                            </li>
                                        ))
                                }
                            </ul>
                            <ul className={styles['article-list']}>
                                {
                                    articleLinks
                                        .filter(link => link.type === type)
                                        .slice(-articleLinks.filter(link => link.type === type).length / 3)
                                        .map((link, ind) => (
                                            <li key={ind}>
                                                <Link className={styles['article-list-link']} to={`/guide/${link.href}?articleName=${link.text}`}>
                                                    {link.text}
                                                </Link>
                                            </li>
                                        ))
                                }
                            </ul>
                        </div>
                    </section>
                ))
            }
        </div>
    );
};

export default ArticleList;