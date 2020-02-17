import React from 'react'
import {Pagination} from 'react-bootstrap'
import api from '../services/api'

const ListPagination= props => {
    let currentPage = props.currentPage;
    let items = [];
    let articlesCount=props.articlesCount
    let limit=api.limit
    let numberOfPages=Math.ceil(articlesCount/limit)
    for (let number = 1; number <= numberOfPages; number++) {
        let setPage = ()=>{
            props.onSetPage(number)
        }
    items.push(
        <Pagination.Item key={number} active={number === currentPage}
        onClick={setPage}>
        {number}
        </Pagination.Item>,
    );
    }
    return <Pagination style={{flexWrap:'wrap'}}>{items}</Pagination>
}
export default ListPagination