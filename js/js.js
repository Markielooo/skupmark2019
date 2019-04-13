<script language="JavaScript">

    var n = 0;

    function findInPage(str) {
    if (str == "") return false;

    if (document.layers) {

    if (!window.find(str)) {while(window.find(str, false, true)) n++;}
    else n++;

    if (n == 0) alert("The word \""+ str +"\" was not found on this page.");
    }

    if (document.all) {
    var txt = window.document.body.createTextRange();
    var found = txt.findText(str);

    for (var i = 0; i <= n && found != false; i++) {
        txt.moveStart("character", 1);
        txt.moveEnd("textedit");
    }

    if (found) {
        txt.moveStart("character", -1);
        txt.findText(str);
        txt.select();
        txt.scrollIntoView();
        n++;
    }

    else {
        if (n > 0) {
        n = 0;
        findInPage(str);
        }

    else alert("The word \""+ str +"\" was not found on this page.");
    }

    return false;
}
</script>