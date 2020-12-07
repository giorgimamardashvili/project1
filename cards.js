const cardsContainer = document.querySelector('.cards');
console.log(cardsContainer);

const arr = [
    {value: 'anima', img: './Resources/img/Rectangle 49.svg', icon1: './Resources/img/icons/Plus.svg', icon2: './Resources/img/icons/Heart.svg', title: 'UI Components for Unity Gaming'},
    {value: 'web', img: './Resources/img/Rectangle 49.svg', icon1: './Resources/img/icons/Plus.svg', icon2: './Resources/img/icons/Heart.svg', title: 'UI Components for Unity Gaming'},
    {value: '3d', img: './Resources/img/Rectangle 49.svg', icon1: './Resources/img/icons/Plus.svg', icon2: './Resources/img/icons/Heart.svg', title: 'UI Components for Unity Gaming'},
    {value: 'appD', img: './Resources/img/Rectangle 49.svg', icon1: './Resources/img/icons/Plus.svg', icon2: './Resources/img/icons/Heart.svg', title: 'UI Components for Unity Gaming'},
    {value: 'anima', img: './Resources/img/Rectangle 49.svg', icon1: './Resources/img/icons/Plus.svg', icon2: './Resources/img/icons/Heart.svg', title: 'UI Components for Unity Gaming'},
    {value: 'illu', img: './Resources/img/Rectangle 49.svg', icon1: './Resources/img/icons/Plus.svg', icon2: './Resources/img/icons/Heart.svg', title: 'UI Components for Unity Gaming'},
    {value: 'typo', img: './Resources/img/Rectangle 49.svg', icon1: './Resources/img/icons/Plus.svg', icon2: './Resources/img/icons/Heart.svg', title: 'UI Components for Unity Gaming'},
    {value: 'web', img: './Resources/img/Rectangle 49.svg', icon1: './Resources/img/icons/Plus.svg', icon2: './Resources/img/icons/Heart.svg', title: 'UI Components for Unity Gaming'}
];

function cardShow (cards) {
    for(let i=0; i<cards.length; i++){
        const currentCard = cards[i];
        const newCard = document.createElement('div');
        newCard.classList.add('card_1');
        newCard.classList.add(`${currentCard.value}`);
        newCard.innerHTML = `
        
            <img src="${currentCard.img}" alt=""><span>${currentCard.title}</span>
            <div class="hover"><img src="${currentCard.icon1}" alt="">
            <img src="${currentCard.icon2}" alt="">
        

        `;
        
        cardsContainer.appendChild(newCard);
    }
}

cardShow(arr);