import { useState } from 'react';
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ArticleExampleComponent from '../components/ArticleExComponent';

const AdminPage = () => {
    const [show, setShow] = useState(false);
    const [articleContent, setArticleContent] = useState("");

    const toolbarOptions = [
        ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
        ['blockquote', 'code-block'],
        ['link', 'image', 'video', 'formula'],

        [{ 'header': 1 }, { 'header': 2 }],               // custom button values
        [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'list': 'check' }],
        [{ 'script': 'sub' }, { 'script': 'super' }],      // superscript/subscript
        [{ 'indent': '-1' }, { 'indent': '+1' }],          // outdent/indent
        [{ 'direction': 'rtl' }],                         // text direction

        [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

        [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
        [{ 'font': [] }],
        [{ 'align': [] }],

        ['clean']                                         // remove formatting button
    ];

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleAddArticle = () => {
        // добавление статьи на сервер ? облако ? бд + добавление данных о статье в бд

        setShow(false);
        setArticleContent("");
    };

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Добавить статью (по готовности)
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Добавление статьи</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="add-article-modal-block">
                        <label htmlFor="5113">Название статьи</label>
                        <input type="text" id='5113' />
                    </div>

                    <div className="add-article-modal-block">
                        <label htmlFor="5114">Ссылка на статью</label>
                        <input type="text" id='5114' />
                    </div>

                    <div className="add-article-modal-block">
                        <label htmlFor="5115">Тип статьи ('medicine', 'pediatrics')</label>
                        <input type="text" id='5115' />
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Закрыть
                    </Button>
                    <Button variant="primary" onClick={handleAddArticle}>
                        Добавить
                    </Button>
                </Modal.Footer>
            </Modal>

            <ReactQuill
                theme='snow'
                modules={{ toolbar: toolbarOptions }}
                className='quill-editor'
                value={articleContent}
                onChange={setArticleContent}
                placeholder='Введите содержание статьи'
            />

            <ArticleExampleComponent content={articleContent} />
        </>
    );
}

export default AdminPage;