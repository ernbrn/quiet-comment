if (!$('#quiet-comment-button-container').length) {
  var classToggleName = 'comments-quiet';
  var $prReveiewTools = $('.pr-review-tools');

  var $buttonContainer = $('<div class="diffbar-item" id="quiet-comment-button-container"></div>');
  var $button = $('<button type="button" class="btn btn-sm btn-success js-menu-target" aria-expanded="false" aria-haspopup="true"></button>');
  var setButtonText = function() {
    var buttonText = $button.hasClass(classToggleName) ? 'Show Comments' : 'Quiet Comments';
    $button.text(buttonText)
  };

  setButtonText();

  $button.appendTo($buttonContainer);
  $buttonContainer.prependTo($prReveiewTools);

  $button.click(function() {
    var elements = document.getElementsByClassName('js-toggle-file-notes');
    [].forEach.call(elements, function(el) {
      el.checked = !$button.hasClass(classToggleName);
      el.click();
    });
    $button.toggleClass(classToggleName);
    setButtonText();
  });
}
