import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button"
import { useNavigate } from "react-router-dom";

const AccreditationPage = () => {
    const navigate = useNavigate();
    const [blocks, setBlocks] = useState([]);

    useEffect(() => {
        setBlocks(["1-100", "101-200", "201-300", "301-400", "1-100", "101-200", "201-300", "301-400", "1-100", "101-200", "201-300", "301-400", "1-100", "101-200", "201-300", "301-400"]);
    }, []);

    return (
        <div className="accr-wrap">
            <ul className="theme-blocks">
                {
                    blocks?.map((interval, i) => (
                        <li key={i}>
                            <button
                                onClick={() => navigate(`/test?withTimer=true&&modifiable=true&&interval=${interval}`)}
                            >
                                {interval}
                            </button>
                        </li>
                    ))
                }
            </ul>
            <div className="test-var">
                <Button variant="outline-primary"
                    onClick={() => navigate('/test?withTimer=false')} // withTimer - булевое значение, отвечающее за наличие таймера в тесте
                >
                    Тренировка
                </Button>
                <Button
                    onClick={() => navigate('/test?withTimer=true&&modifiable=false')}
                // modifiable - булевое значение, отвечающее за возможность изменения времени таймера в тесте (дефолтное время устанавливается в самом тесте, если оно не указано вручную)
                >
                    Зачёт
                </Button>
            </div>
        </div>
    );
}

// обратите внимание, что ссылки на тесты ведут на страницу TestPage, а не напрямую на TestComponent

export default AccreditationPage;