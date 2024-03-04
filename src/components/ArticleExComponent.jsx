const ArticleExampleComponent = ({ content }) => (
    <div dangerouslySetInnerHTML={{ __html: content }} />
);

export default ArticleExampleComponent;