const card = {
    name: 'Zar',
    color: {
        r: 255,
        g: 23,
        b: 24
    }
}

 const card2 = {...card, color: {...card.color}} // Создали новый объект на основе card объекта
// чтобы не заниматься охинеей , можно запарсить card
// const card2 = JSON.parse(JSON.stringify(card))
card2.name = 'her'

card2.color.r = 50
card2.color.g = 7
card2.color.b = 54



console.log(card)
console.log(card2)

