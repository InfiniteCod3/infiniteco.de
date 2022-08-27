var i=0;
setInterval(function(){
    var titles=[
"|C|",
"|Cr|",
"|Crm|",
"|Crmn|",
"|Crmnl|",
"|Crmn|",
"|Crm|",
"|Cr|",
"|C|",
"||",
]

    if(i===titles.length) {
        i=0;
    }
    document.title = titles[i];
    i++;
}, 500);

