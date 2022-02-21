import React, { useEffect, useState } from "react";
import api from "../../api/api";
import List from "../../components/List/List";
import Search from "../../components/Search/Search";
import Header from "../../containers/Header/Header";
import Section from "../../containers/Section/Section";
import "./Home.css"

const Home = () => {
    const [bookList, setBookList] = useState([]);

    useEffect(() => {
        fetchData('');
    }, [])

    /*const filterList = (term) => {
        fetchData(term);
    }*/

    const fetchData = async(term) => {
        const result = await api.get(term);
        setBookList(result.data.hits)
    }

    return(
        <div className="Home">
            <Header title="Lista de livros"/>
            <Section className="SearchSection">
                <Search searchCallback={fetchData}/>
            </Section>
            <Section className="ListSection">
                <List bookList={bookList}/>
            </Section>
        </div>
    )
}

export default Home;