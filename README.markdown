# forgetmenot: jQuery plugin

Forget-Me-Not is a jQuery plugin that uses localstorage to remember form input.

## Usage

First, load [jQuery](http://jquery.com/) and the
plugin:

    <script src="jquery.min.js" type="text/javascript"></script>
    <script src="jquery.forgetmenot.js" type="text/javascript"></script>

Then, attach it to your input box:

    <pre>
      jQuery(document).ready(function() {
        $('#commentField').forgetMeNot('remembercomment');
      });
    </pre>

## Author

[Arthur Dick](http://arthurdick.com)

## License

[MIT License](http://www.opensource.org/licenses/mit-license.php)

Copyright (c) 2011, Arthur Dick

