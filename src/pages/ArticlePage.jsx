import { useEffect, useState } from "react";

const ArticlePage = () => {
    const [content, setContent] = useState(null);

    useEffect(() => {
        // get article content (html преобразованный в строку)
        setContent("<p>Article Content</p>");
        // !! устанавливать в виде html разметки, не преобразовывать в строку, иначе стили статьи сломаются !!
    }, []);

    return <div dangerouslySetInnerHTML={{ __html: content }} />
    // уязвимый для XSS атак компонент
};

export default ArticlePage;