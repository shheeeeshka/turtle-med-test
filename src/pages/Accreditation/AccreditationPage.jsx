import styles from "./AccreditationPage.module.css";

import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button"
import { useNavigate } from "react-router-dom";

const AccreditationPage = () => {
    const navigate = useNavigate();
    const [blocks, setBlocks] = useState([]);

    useEffect(() => {
        setBlocks(["1-100", "101-200", "201-300", "301-400", "401-500", "501-600", "701-800", "901-1000", "1001-1100", "1101-1200", "1201-1300", "1301-1400", "1401-1500", "1501-1600", "1601-1700", "1701-1800"]);
    }, []);

    return (
        <div className={styles["accr-wrap"]}>
            <ul className={styles["theme-blocks"]}>
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
            <div className={styles["test-var"]}>
                <Button variant="outline-primary"
                    onClick={() => navigate('/test?withTimer=false')} // withTimer - boolean value responsible for the presence of a timer in the test
                >
                    Тренировка
                </Button>
                <Button
                    onClick={() => navigate('/test?withTimer=true&&modifiable=false')}
                // modifiable - boolean value responsible for ability to modify timer (default time is set in TestComponent if it's not set manually)
                >
                    Зачёт
                </Button>
            </div>
        </div>
    );
}

export default AccreditationPage;