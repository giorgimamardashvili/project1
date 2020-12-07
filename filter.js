function sort() {
    const buttons = document.querySelectorAll('.btn');
    const cards = document.querySelectorAll('.card_1');

    function filter (category, items) {
        items.forEach((item) => {
            const isItemFiltered = !item.classList.contains(category);
            if (isItemFiltered) {
                item.classList.add('hide');
            } else {
                item.classList.remove('hide');
            }
        })
    }

    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            const currentCategory = button.dataset.filter;
            filter(currentCategory, cards);
        });
    });

    
}


sort();