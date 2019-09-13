/*I want to note that, I am having an issue with the value returning unidentified when the click is executed, the element
post but there is no value.

After I checked it against the code following in the next section, we seem to be having the same issue? 
Help please! *\


$(function(){
  $('#js-shopping-list-form').submit(function(event) {
    event.preventDefault();
    let listItem = $('.js-shopping-list-entry').val();

      $('#shopping-list-entry').val('');


    
      $('.shopping-list').append(
      `<li>
          <span class="shopping-item">${listItem}</span>
          <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
          <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
          <span class="button-label">delete</span>
          </button>
          </div>
      </li>`);
  });

  $('.shopping-list').on('click', '.shopping-item-delete', function(event) {
    $(this).closest('li').remove();
  });

  $('.shopping-list').on('click', '.shopping-item-toggle', function(event) {
    $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
  });

});
