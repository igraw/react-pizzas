import React from 'react';
import { useSelector, useDispatch } from "react-redux";

import { Categories, SortPopup, PizzaBlock, PizzaLoadingBlock } from "../components";
import { setCategory, setSortBy } from "../redux/actions/filters";
import { fetchPizzas } from "../redux/actions/pizzas";
import { addPizzaToCart } from "../redux/actions/cart";



const categoryNames = ["Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"];
const sortItems = [
    { name: "популярности", type: "popular", order: "desc" },
    { name: "цене", type: "price", order: "desc" },
    { name: "алфавиту", type: "name", order: "asc" },
];

function Home() {

    const dispatch = useDispatch();

    const items = useSelector((state) => state.pizzas.items);
    const cartItems = useSelector((state) => state.cart.items);
    const isLoaded = useSelector((state) => state.pizzas.isLoaded);
    const { category, sortBy } = useSelector((state) => state.filters);

    React.useEffect(() => {
        dispatch(fetchPizzas(sortBy, category))
    }, [category, sortBy])

    const onSelectCategory = React.useCallback((index) => {
        dispatch(setCategory(index))
    }, [])
    const onSelectSortType = React.useCallback((type) => {
        dispatch(setSortBy(type))
    }, [])
    const handlePizzaToCart = (obj) => {
        dispatch(addPizzaToCart(obj))
    }

    return (

        <div className="container">
            <div className="content__top">
                <Categories
                    activeCategory={category}
                    onClickCategory={onSelectCategory}
                    items={categoryNames}

                />
                <SortPopup
                    activeSortType={sortBy.type}
                    items={sortItems}
                    onClickSortType={onSelectSortType}
                />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {isLoaded
                    ? items.map((obj) => (
                        <PizzaBlock
                            onClickAddPizza={handlePizzaToCart}
                            key={obj.id}
                            addedCount={cartItems[obj.id] && cartItems[obj.id].length}
                            {...obj}
                        />))
                    : Array(10)
                        .fill(0)
                        .map((_, index) => {
                            <PizzaLoadingBlock
                                key={index}
                            />
                        }
                        )}

            </div>
        </div>
    )
}

export default Home;
