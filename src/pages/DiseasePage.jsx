import { useEffect, useState } from "react";
import Button from "react-bootstrap/esm/Button";
import Collapse from "react-bootstrap/esm/Collapse";
import { Link, useSearchParams } from "react-router-dom";

const DiseasePage = () => {
    const [searchParams] = useSearchParams();
    const [diseaseInfo, setDiseaseInfo] = useState({});
    const [displayMethod, setDisplayMethod] = useState("category");
    const [displayedLinks, setDisplayedLinks] = useState(null);
    const [buttonText, setButtonText] = useState("Раскрыть все");
    const [isDropdownActive, setIsDropdownActive] = useState({});
    const [letters, setLetters] = useState(["Все"]);

    const diseaseName = searchParams.get("articleName");

    useEffect(() => {
        // fetch(`/api/disease/${diseaseName}`)
        //   .then((response) => response.json())
        //   .then((data) => setDiseaseInfo(data));
        // props ?

        setDiseaseInfo({
            name: diseaseName,
            linksInfo: [
                {
                    title: "Чрезвычайные ситуации на дыхательных путях",
                    type: "Критические события",
                    link: "tromboz",
                },
                {
                    title: "Чрезвычайные ситуации на дыхательных путях",
                    type: "Другое",
                    link: "tromboz",
                },
                {
                    title: "Чрезвычайные ситуации на дыхательных путях",
                    type: "Другое",
                    link: "tromboz",
                },
                {
                    title: "Чрезвычайные ситуации на дыхательных путях",
                    type: "Другое",
                    link: "tromboz",
                },
                {
                    title: "Анафилаксия в операционной",
                    type: "Процедуры",
                    link: "anafilaksia",
                },
                {
                    title: "Аортальный стеноз у некардиохирургических пациентов",
                    type: "Критические события",
                    link: "stenoz",
                },
                {
                    title: "Катастрофические кровотечения и коагуляции в операционной",
                    type: "Критические события",
                    link: "krovotok",
                },
                {
                    title: "Осложнения каротидной эндартерэктомии (КЭА) в отделении посленаркозной помощи (ПАКУ)",
                    type: "Процедуры",
                    link: "tromboz",
                },
                {
                    title: "Осложнения региональных блоков",
                    type: "Процедуры",
                    link: "oslozhnenia-reg-blokov",
                },
                {
                    title: "Тромбоз глубоких вен и легочная эмболия в операционной",
                    type: "Критические события",
                    link: "tromboz",
                },
            ],
        });
    }, [diseaseName]);

    useEffect(() => {
        if (diseaseInfo?.linksInfo) {
            const linkTitles = diseaseInfo?.linksInfo?.map(({ title }) => title);
            const uniqueLetters = Array.from(new Set(linkTitles.map((title) => title.slice(0, 1).toUpperCase())));
            const sortedLetters = uniqueLetters.sort();
            sortedLetters.unshift("Все");
            setLetters(sortedLetters);
        }
    }, [diseaseInfo])

    if (!diseaseInfo?.linksInfo) {
        return <div>Loading...</div>;
    }

    const groupedLinks = diseaseInfo?.linksInfo?.reduce((acc, linkInfo) => {
        if (!acc[linkInfo.type]) {
            acc[linkInfo.type] = [];
        }
        acc[linkInfo.type].push(linkInfo);
        return acc;
    }, {});

    const sortedLinks = Object.values(groupedLinks).flat().sort((a, b) => a.title.localeCompare(b.title));

    return (
        <div className="disease-block">
            <h1>{diseaseInfo?.name}</h1>
            <div className="divider"></div>
            <div className="display-articles-method-block">
                <h3>Отображать статьи: </h3>

                <div className="display-method-btns-wrap">
                    <button className={`display-method ${displayMethod === "category" ? "active" : ""}`} onClick={() => setDisplayMethod("category")}>
                        По категориям
                    </button>
                    <button className={`display-method ${displayMethod === "alphabetically" ? "active" : ""}`} onClick={() => setDisplayMethod("alphabetically")}>
                        По алфавиту
                    </button>
                </div>
            </div>
            {
                displayMethod === "category" ?
                    <>
                        <Button variant="outline-primary" className="btn-disp-art-meth" onClick={() => {
                            if (buttonText === "Раскрыть все") {
                                setIsDropdownActive(Object.fromEntries(Object.keys(groupedLinks).map((type) => [type, true])));
                                setButtonText("Свернуть все");
                            } else {
                                setIsDropdownActive(Object.fromEntries(Object.keys(groupedLinks).map((type) => [type, false])));
                                setButtonText("Раскрыть все");
                            }
                        }}>
                            {buttonText}
                        </Button>
                        <section className="art-links-container">
                            {
                                Object.entries(groupedLinks).map(([type, links]) => (
                                    <div key={type}>
                                        <Button variant="link"
                                            className="disease-type-btn"
                                            onClick={() => setIsDropdownActive(active => ({ ...active, [type]: !active[type] }))}
                                            aria-controls={`${type}-collapse`}
                                            aria-expanded={isDropdownActive[type]}>
                                            {type}
                                            <span className={`arrow${!isDropdownActive[type] ? " rotated" : ""}`}>
                                                <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M7.41 8.59L12 13.17L16.59 8.59L18 10L12 16L6 10L7.41 8.59Z" fill="currentColor" />
                                                </svg>
                                            </span>
                                        </Button>

                                        <Collapse in={isDropdownActive[type]}>
                                            <div id={`${type}-collapse`}>
                                                <ul className="disease-list">
                                                    {
                                                        links.map(({ title, link }, i) => (
                                                            <li key={i}>
                                                                <Link to={`/article/${link}`}>{title}</Link>
                                                            </li>
                                                        ))
                                                    }
                                                </ul>
                                            </div>
                                        </Collapse>
                                    </div>
                                ))
                            }
                        </section>
                    </>
                    :
                    <section>
                        <div className="alpha-select-wrap">
                            {
                                letters.map((lt, i) => (
                                    <button
                                        className="btn-alpha-select"
                                        key={i}
                                        onClick={() => {
                                            lt === "Все" ?
                                                setDisplayedLinks(null) :
                                                setDisplayedLinks(sortedLinks?.filter((sortedLink) => sortedLink.title.slice(0, 1) === lt))
                                        }}
                                    >
                                        {lt}
                                    </button>
                                ))
                            }
                        </div>
                        <ul className="disease-list">
                            {
                                !displayedLinks ?
                                    sortedLinks?.map(({ title, _, link }, i) => (
                                        <li key={i}>
                                            <Link to={`/article/${link}`}>{title}</Link>
                                        </li>
                                    )) :
                                    displayedLinks?.map(({ title, _, link }, i) => (
                                        <li key={i}>
                                            <Link to={`/article/${link}`}>{title}</Link>
                                        </li>
                                    ))
                            }
                        </ul>
                    </section>
            }
        </div>
    );
};

export default DiseasePage;