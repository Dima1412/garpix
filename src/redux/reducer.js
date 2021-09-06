


let initialState = {
    sections : [
        "Все партнеры",
        "Популярные",
        "Супермаркеты",
        "Кафе и рестораны",
        "Такси",
        "Красота",
        "Электроника и бытовая техника",
        "Зоотовары",
        "Кино и театр",
        "Доп пункт 1",
        "Доп пункт 2",
        "Доп пункт 3"        
    ],
    partners : [
        {id : 1, title : "М.видео", percent : "От 1,5%", logo : '/images/partners/mvideo.svg'},
        {id : 2, title : "Бургер кинг", percent : "От 3%", logo : '/images/partners/bk.svg'},
        {id : 3, title : "Евросеть", percent : "2%", logo : '/images/partners/evroset.svg'},
        {id : 4, title : "Lamoda", percent : "3%", logo : '/images/partners/lamoda.svg'},
        {id : 5, title : "OZON", percent : "4,5%", logo : '/images/partners/OZON.svg'},
        {id : 6, title : "Пятерочка", percent : "От 2,5%", logo : '/images/partners/5ter.svg'},
        {id : 7, title : "Booking Car", percent : "От 1%", logo : '/images/partners/bookingCar.svg'},
        {id : 8, title : "Будь здоров", percent : "2%", logo : '/images/partners/budzdorov.svg'},
        {id : 9, title : "LitRes", percent : "6%", logo : '/images/partners/litres.svg'},
        {id : 10, title : "Мегафон", percent : "3,5%", logo : '/images/partners/megafon.svg'},
        {id : 11, title : "MyToys", percent : "От 1,3%", logo : '/images/partners/mytoys.svg'},
        {id : 12, title : "Посуда центр", percent : "От 2,5%", logo : '/images/partners/posuda.svg'},
        {id : 13, title : "Республика", percent : "2,5%", logo : '/images/partners/respublic.svg'},
        {id : 14, title : "Сбер-страхование", percent : "3%", logo : '/images/partners/sber-strah.svg'},
        {id : 15, title : "Технопарк", percent : "7%", logo : '/images/partners/technopark.svg'},
        {id : 16, title : "TezTour", percent : "2%", logo : '/images/partners/tezTour.svg'},
        {id : 17, title : "Tripster", percent : "3,5%", logo : '/images/partners/tripster.svg'},
        {id : 18, title : "BORK", percent : "4,5%", logo : '/images/partners/bork.svg'}
    ],
    stocks : [
        {id : 1, title : "Евросеть", stocktext : "10% спасибо за покупки в черную пятницу", print : "/images/stocks/evroset.png", logo : '/images/partners/evroset.svg'},
        {id : 2, title : "М.видео", stocktext : "15% спасибо для студентов", print : "/images/stocks/mvideo.png", logo : '/images/partners/mvideo.svg'},
        {id : 3, title : "Технопарк", stocktext : "20% спасибо за технику Electrolux", print : "/images/stocks/technopark.png", logo : '/images/partners/technopark.svg'},
        {id : 2, title : "LitRes", stocktext : "15% спасибо для студентов", print : "/images/stocks/litres.jpg", logo : '/images/partners/litres.svg'},
        {id : 1, title : "Tripster", stocktext : "10% спасибо за покупки в черную пятницу", print : "/images/stocks/tripster.png", logo : '/images/partners/tripster.svg'},
        {id : 2, title : "Мегафон", stocktext : "15% спасибо для студентов", print : "/images/stocks/megafon.png", logo : '/images/partners/megafon.svg'},
        {id : 3, title : "OZON", stocktext : "20% спасибо за просто так", print : "/images/stocks/ozon.png", logo : '/images/partners/ozon.svg'}
    ]
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
      default:
        return state;
    }
};


export default reducer;

