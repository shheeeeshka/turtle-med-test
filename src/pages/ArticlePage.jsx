import { useEffect, useState } from "react";

const ArticlePage = () => {
    const [content, setContent] = useState(null);

    useEffect(() => {
        // get article content (html преобразованный в строку)
        setContent("<p>Article Content</p>");
    }, []);

    return <div dangerouslySetInnerHTML={{ __html: content }} />
};

export default ArticlePage;