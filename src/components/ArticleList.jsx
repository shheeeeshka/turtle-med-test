import React from 'react';
import { Link } from 'react-router-dom';

const ArticleList = ({ articleLinks, articleTypes }) => {

    return (
        <div className="links-list">
            {
                articleTypes.map(({ title, type }, i) => (
                    <section key={i} className='article-type-links'>
                        <h3 style={{ fontSize: '20px' }}>{title}</h3>
                        <div className='article-list-container'>
                            <ul className='article-list'>
                                {
                                    articleLinks
                                        .filter(link => link.type === type)
                                        .slice(0, articleLinks.filter(link => link.type === type).length / 3)
                                        .map((link, ind) => (
                                            <li key={ind}>
                                                <Link className='article-list-link' to={`/guide/${link.href}?articleName=${link.text}`}>
                                                    {link.text}
                                                </Link>
                                            </li>
                                        ))
                                }
                            </ul>
                            <ul className='article-list'>
                                {
                                    articleLinks
                                        .filter(link => link.type === type)
                                        .slice(articleLinks.filter(link => link.type === type).length / 3, (articleLinks.filter(link => link.type === type).length / 3) * 2)
                                        .map((link, ind) => (
                                            <li key={ind}>
                                                <Link className='article-list-link' to={`/guide/${link.href}?articleName=${link.text}`}>
                                                    {link.text}
                                                </Link>
                                            </li>
                                        ))
                                }
                            </ul>
                            <ul className='article-list'>
                                {
                                    articleLinks
                                        .filter(link => link.type === type)
                                        .slice(-articleLinks.filter(link => link.type === type).length / 3)
                                        .map((link, ind) => (
                                            <li key={ind}>
                                                <Link className='article-list-link' to={`/guide/${link.href}?articleName=${link.text}`}>
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