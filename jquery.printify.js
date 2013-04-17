/*
* jQuery Printify v1.0
* https://github.com/xenposeidon/printify
* April 2013
*/
jQuery.fn.printify = function () {
    if (this.size() > 1) {
        this.eq(0).print();
        return;
    } else if (!this.size()) {
        return;
    }
    var iFrame = $('#printifycontainer').length > 0 ? $('#printifycontainer') : $(document.createElement('iframe')).attr('name', 'printifycontainer').attr('id', 'printifycontainer');
    var printElement = this;
    $(iFrame).on('load', function () {
        iFrame.contents().find('body').html(printElement.html());
        iFrame.get(0).contentWindow.focus();
        iFrame.get(0).contentWindow.print();
        setTimeout(function () { iFrame.remove(); }, (6000));
    });
    iFrame.css("width", "1px").css("height", "1px").css("position", "absolute").css("left", "-9999px").appendTo('body');    
}