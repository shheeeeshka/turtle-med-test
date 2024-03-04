import { useEffect, useState } from "react";
import ArticleList from "../components/ArticleList";

const ArticlesPage = () => {
    const [articleLinks, setArticleLinks] = useState([]);
    const [articleTypes, setArticlleTypes] = useState([]);

    // вместо статичной установки, обращаться к бд

    useEffect(() => {
        setArticleLinks([
            { text: 'Аллергия и иммунология', href: 'allergy', type: "medicine" },
            { text: 'Анатомия', href: 'anatomy', type: "medicine" },
            { text: 'Анестезиология', href: 'anesthesiology', type: "medicine" },
            { text: 'Лечение рака, стадирование и обобщение рекомендаций', href: 'cancer', type: "medicine" },
            { text: 'Кардиология', href: 'cardiology', type: "medicine" },
            { text: 'Кардиологические рекомендации', href: 'cardio-recommendations', type: "medicine" },
            { text: 'Клинические процедуры', href: 'clinical-procedures', type: "medicine" },
            { text: 'Реанимационная помощь', href: 'resuscitation' },
            { text: 'Здоровье зубов и полости рта', href: 'dental-health', type: "medicine" },
            { text: 'Дерматология', href: 'dermatology', type: "medicine" },
            { text: 'Общая хирургия', href: 'general-surgery', type: "medicine" },
            { text: 'Нейрохирургия', href: 'neurosurgery', type: "medicine" },
            { text: 'Офтальмология', href: 'ophthalmology', type: "medicine" },
            { text: 'Неотложная медицинская помощь', href: 'emergency-medical-help', type: "medicine" },
            { text: 'Эндокринология', href: 'endocrinology', type: "medicine" },
            { text: 'Гастроэнтерология', href: 'gastroenterology', type: "medicine" },
            { text: 'Геномная медицина', href: 'genomic-medicine', type: "operation" },
            { text: 'Гематология', href: 'hematology', type: "operation" },
            { text: 'Инфекционные заболевания', href: 'infectious-diseases', type: "operation" },
            { text: 'Лабораторная медицина', href: 'laboratory-medicine', type: "operation" },
            { text: 'Нефрология', href: 'nephrology', type: "operation" },
            { text: 'Сердечные заболевания и медицина интенсивной терапии', href: 'heart-diseases-and-intensive-care-medicine', type: "pediatrics" },
            { text: 'Развивающие и поведенческие заболевания', href: 'developmental-and-behavioral-disorders', type: "pediatrics" },
            { text: 'Общая медицина', href: 'general-medicine', type: "pediatrics" },
            { text: 'Онкология', href: 'oncology', type: "pediatrics" },
            { text: 'Патология', href: 'pathology' },
            { text: 'Периоперационный уход', href: 'perioperative-care', type: "pediatrics" },
            { text: 'Физическая медицина и реабилитация', href: 'physical-medicine-and-rehabilitation', type: "pediatrics" },
            { text: 'Психиатрия', href: 'psychiatry', type: "pediatrics" },
            { text: 'Пульмонология', href: 'pulmonology', type: "pediatrics" },
            { text: 'Радиология', href: 'radiology', type: "pediatrics" },
            { text: 'Редкие заболевания', href: 'rare-diseases', type: "pediatrics" },
            { text: 'Ревматология', href: 'rheumatology', type: "pediatrics" },
            { text: 'Спортивная медицина', href: 'sports-medicine', type: "pediatrics" },
            { text: 'Трансплантация', href: 'transplantation', type: "pediatrics" },
            { text: 'Травма', href: 'trauma', type: "pediatrics" },
            { text: 'Урология', href: 'urology', type: "pediatrics" },
        ]);

        setArticlleTypes([
            { title: "Лекарство", type: "medicine" },
            { title: "Операция", type: "operation" },
            { title: "Педиатрия", type: "pediatrics" }
        ]);
    }, [])

    // вместо статичной установки, обращаться к бд

    return (
        <>
            <section style={{ width: '50%' }}>
                <ArticleList articleLinks={articleLinks} articleTypes={articleTypes} />
            </section>
        </>
    );
}

export default ArticlesPage;