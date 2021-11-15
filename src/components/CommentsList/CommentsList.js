import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getComments } from '../../store/api';
import * as Styled from './styles';

const CommentsList = () => {

    const dispatch = useDispatch();

    const isLoadingComments = useSelector(state => state.commentsReducer.isLoading);
    const comments = useSelector(state => state.commentsReducer.comments);
    const errorComments = useSelector(state => state.commentsReducer.error);
    
    const [search, setSearch] = useState();
    const [commentsState, setCommentsState] = useState(comments);

    const [filtersBtn, setFiltersBtn] = useState();

    const itemsEls = useRef([]);
    const getRef = (element) => (itemsEls.current.push(element));
    
    useEffect(() => {
        dispatch(getComments());
    }, []);

    useEffect(() => {
        getDommensUrl();
    }, [comments]);

    useEffect(() => {
        if (search?.length > 0) {
            setCommentsState(filterCommentsSearch('name'));
        } else {
            setCommentsState(comments);
        }
    }, [comments, search]);

    useEffect(() => {
        if (filtersBtn) {
            urlActiveFilter();
        }
    }, [filtersBtn]);

    // Получение массива с домменами зонами (зоны после точки в email)
    const getDommensUrl = () => {
        const dommens = comments.map(comment => comment.email);
        const dommensArr = [];
        // Оставим только домменые зоны
        dommens.map((item) => {
            const url = item.split('.');
            dommensArr.push(url[url.length-1]);
        });
        // Оставим только уникальные доммены
        const uniqueDommens = Array.from(new Set(dommensArr));
        // Создадим массив объектов для кнопок фильтров по домменой зоне
        const btnArrDommensFiltres = []
        uniqueDommens.map((item, index) => {
            btnArrDommensFiltres.push({
                id: index + 1,
                name: item,
                active: false
            })
        });
        setFiltersBtn(btnArrDommensFiltres)
    };

    // Запись в массив выбраного фильтра кнопки 
    const handleFilterBtn = (index) => {
        // Выделение кнопки фильтра при клике (активный фильтр или нет)
        itemsEls.current[index].classList.toggle('active');

        // Переключение фильтра кнопок фильтров по доменной зоне
        let filters = filtersBtn;
        filters.map((item) => {
            if (index + 1 === item.id) {
                item['active'] = !item.active; // При клике меняем поле active true/false (активный фильтр или нет)
            }
        });
        setFiltersBtn(filters);
    };

     // Фильтрация по названию комментария (по каждому символу поле name)
    const filterCommentsSearch = (nameFilter) => {
        let matched_terms = [];
        let search_term = search ?? '';
        search_term = search_term.toLowerCase().trim();
        comments.forEach(item => {
            if (item[nameFilter].toLowerCase().indexOf(search_term) !== -1) {
                matched_terms.push(item); 
            }
        })
        return matched_terms;
    };

    // Выбор фильтра домменой зоны которая соответствует url страницы пользователя
    const urlActiveFilter = () => {
        const url = 'com'; // Сделал как пример, так как проект запущен на localhost
        filtersBtn.map((item, index) => {
            if (item.name === url) {
                itemsEls.current[index].classList.add('active');
            }
        });
    };

    return (
        <>
            <Styled.Title>
                Filtred list
            </Styled.Title>
            <Styled.BlueBlock>
                <Styled.SearchWrapper>
                    <Styled.BlockBox>
                        Search
                        <Styled.SearchInput 
                            placeholder='Enter Name'
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </Styled.BlockBox>
                    <Styled.SearchButtonWrapper>
                        <Styled.BlockBox>
                            Show only
                        </Styled.BlockBox>
                        {filtersBtn ? filtersBtn.map((button, index) => {
                            return (
                                <Styled.SearchButtonFilter 
                                    key={getRef}
                                    ref={(element) => itemsEls.current[index] = element}
                                    onClick={() => handleFilterBtn(index)}
                                >
                                    {`.${button.name}`}
                                </Styled.SearchButtonFilter>
                            ) 
                        }) : []}
                    </Styled.SearchButtonWrapper>
                </Styled.SearchWrapper>
            </Styled.BlueBlock>
            {isLoadingComments && <h1>Идет загрузка...</h1>}
            {errorComments && <h1>{errorComments}</h1>}
            {commentsState.map((item) => {
                return (
                    <Styled.CommentsListWrapper key={item.id}>
                    <Styled.CommentsItem>
                        <Styled.CommentsItemTitle>{item.name}</Styled.CommentsItemTitle>
                        <Styled.CommentsItemLink 
                            href={'mailto:',`${item.email}`}
                        >
                            {item.email}
                        </Styled.CommentsItemLink>
                        <Styled.CommentsItemText>{item.body}</Styled.CommentsItemText>
                    </Styled.CommentsItem>
                    </Styled.CommentsListWrapper>
                )
            })}
        </>
    )
};

export default CommentsList;