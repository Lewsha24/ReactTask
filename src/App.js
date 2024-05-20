import React, {useTransition} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
// import { useHover } from './useHover';
// import { useLocalStorage } from './useLocalStorage';
// import { useFetch } from './useFetch';
import './App.css';

// Чтобы проверить, что все работает, вам стоит раскомментировать каждый компонент по отдельности
// Так же вам стоит раскомментировать импортированный  кастомный класс

//Task 3
//Answer 3
// function App() {
//     const { hovered, ref } = useHover();
//     console.log(ref.current)
//     return (
//         <div ref={ref}>
//             {hovered ? 'На меня навели мышку' : 'Наведи мышкой на меня'}
//         </div>
//     );
// }
//

//Task 2
//Answer 2
// function App() {
//     const [token, { setItem, removeItem }] = useLocalStorage('token');
//
//     return (
//         <div>
//             <p>
//                 Твой токен: { token }
//             </p>
//             <div>
//                 <button onClick={() => setItem('new-token')}>
//                     Задать токен
//                 </button>
//                 <button onClick={() => removeItem()}>
//                     Удалить токен
//                 </button>
//             </div>
//         </div>
//     );
// }

// Task 1
// Answer 1
// function App() {
//         const {
//             data,
//             isLoading,
//             error,
//             refetch
//         } = useFetch('https://jsonplaceholder.typicode.com/posts');
//     console.log(isLoading)
//     return (
//         <div>
//             <div>
//                 <button onClick={() => refetch({
//                     params: {
//                         _limit: 3
//                     }
//                 })}>
//                     Перезапросить
//                 </button>
//             </div>
//             {isLoading && 'Загрузка...'}
//             {error && 'Произошла ошибка'}
//             {data && !isLoading && data.map(item => <div key={item.id}>{item.title}</div>) }
//         </div>
//     );
// }


export default App;