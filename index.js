$("#inpt_search").on('focus', function() {
    $(this).parent('label').addClass('active');
});

function search(data, keyword) {
    var wanted = [];
    for (var name in data) {
        //console.log(list[name].keywords)
        if (data[name].keywords.indexOf(keyword) !== -1) {
            wanted.push(name);
        }
    }
    //console.log(wanted);
    return wanted;
}
$("#inpt_search").on('change', function() {
    $("div.cntr-innr img").remove();
    $.getJSON("search.json", function(result) {
        //console.log(search(result, $("#inpt_search").val()));
        var html = "";
        var emojis = search(result, $("#inpt_search").val());
        if (emojis.length > 0) {
            for (var image in emojis) {
                html += "<img src='http://grimacing.karmies.com/emojis/" + emojis[image] + ".png'/>";
            }
            $("div.cntr-innr").append(html);
        } else {
            $("div.cntr-innr").append("Keyword not found, try another");
        }

    });




});

$("#inpt_search").on('blur', function() {
    if ($(this).val().length === 0) {
        $(this).parent('label').removeClass('active');
    }

});
