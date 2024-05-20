import React, {useTransition} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {useFetch} from "./useFetch";

function App() {
        const {
            data,
            isLoading,
            error,
            refetch
        } = useFetch('https://jsonplaceholder.typicode.com/posts');
    console.log(isLoading)
    return (
        <div>
            <div>
                <button onClick={() => refetch({
                    params: {
                        _limit: 3
                    }
                })}>
                    Перезапросить
                </button>
            </div>
            {isLoading && 'Загрузка...'}
            {error && 'Произошла ошибка'}
            {data && !isLoading && data.map(item => <div key={item.id}>{item.title}</div>) }
        </div>
    );
}


export default App;