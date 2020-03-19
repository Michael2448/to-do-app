$(function() {
    const dealListElem = $('.js-dealsList');
    const newDealTitleElem = $('.js-newDealTitleInputtedText');
    const newDealContentElem = $('.js-newDealContentInputtedText');
    const contentBeforeAddDealsElem = $('.js-absenseDealsText');
    const sendFormElem = $('.js-sendForm');

    sendFormElem.on('submit', function(ev) {
        let idDealsListItemContent = `f${(~~(Math.random()*1e8)).toString(16)}`;
        ev.preventDefault();
        contentBeforeAddDealsElem.hide();

        dealListElem.append(`
        <li class = "js-dealsListItem deals-list-item">
            <article>
                <header class="header"> 
                    <h3 class="deals-list-item-titles">${newDealTitleElem.val()}</h3>
                    <button name="button-delete" class="js-deleteDealButton delete-deal-button" aria-label="Удалить дело"></button>
                    <button name="button-turn" class="js-turnDealButton turn-deal-button" aria-label="Свернуть описание дела" aria-expanded="true" aria-controls=${idDealsListItemContent}></button>
                </header>

                <p class="deals-list-item-content js-dealsListItemContent" id=${idDealsListItemContent}>${newDealContentElem.val()}</p>
            </article>
        </li>`);

        this.reset();
    });
    dealListElem.on('click','.js-deleteDealButton',function() {
        this.closest('.js-dealsListItem').remove();
        if (dealListElem.children().length === 0) {
            contentBeforeAddDealsElem.show();
        }
    });
    dealListElem.on('click','.js-turnDealButton',function() {
        $(this).closest('.js-dealsListItem').find('.js-dealsListItemContent').slideToggle(1200);
        $(this).toggleClass('rotate');

        if ($(this).attr('aria-expanded') === 'true') {
            $(this).attr('aria-expanded','false');
            $(this).attr('aria-label','Развернуть описание дела');
        } else {
            $(this).attr('aria-expanded','true');
            $(this).attr('aria-label','Свернуть описание дела');
        }
    });
});

