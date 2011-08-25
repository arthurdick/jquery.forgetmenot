# forgetmenot: jQuery plugin

Forget-Me-Not is a jQuery plugin that uses localstorage to remember form input.

## Usage

First, load [jQuery](http://jquery.com/) and the forgetmenot plugin:

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js"></script>
    <script src="jquery.forgetmenot.js" type="text/javascript"></script>

Then, attach it to an input box:

        <textarea id="mytext" cols=50 rows=5 ></textarea>
        <script type="text/javascript">
            $('#mytext').forgetMeNot('textKey');
        </script>

## Author

[Arthur Dick](http://arthurdick.com)

## License

[MIT License](http://www.opensource.org/licenses/mit-license.php)

Copyright (c) 2011, Arthur Dick

