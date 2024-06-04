import { useEffect, useState } from "react";

const ArticlePage = () => {
    const [content, setContent] = useState(null);

    useEffect(() => {
        setContent("<p>Article Content</p>");
    }, []);

    return <div dangerouslySetInnerHTML={{ __html: content }} />
};

export default ArticlePage;