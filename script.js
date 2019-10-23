if (!$('#quiet-comment-button-container').length) {
  var classToggleName = 'comments-quiet';
  var $prReviewTools = $('.pr-review-tools');

  var $buttonContainer = $('<div class="diffbar-item" id="quiet-comment-button-container"></div>');
  var $button = $('<button type="button" class="btn btn-sm btn-success js-menu-target" aria-expanded="false" aria-haspopup="true"></button>');
  var setButtonText = function() {
    var buttonText = $button.hasClass(classToggleName) ? 'Show Comments' : 'Quiet Comments';
    $button.text(buttonText)
  };

  setButtonText();

  $button.appendTo($buttonContainer);
  $buttonContainer.prependTo($prReviewTools);

  $button.click(function() {
    var elements = $('.js-inline-comments-container');
    if ($button.hasClass(classToggleName)) {
      elements.css('display', '');
    } else {
      elements.css('display', 'none');
    };
    $button.toggleClass(classToggleName);
    setButtonText();
  });
}
