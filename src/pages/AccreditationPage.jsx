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
                    onClick={() => navigate('/test?withTimer=false')}
                >
                    Тренировка
                </Button>
                <Button
                    onClick={() => navigate('/test?withTimer=true&&modifiable=false')}
                >
                    Зачёт
                </Button>
            </div>
        </div>
    );
}

export default AccreditationPage;