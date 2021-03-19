
//pull data by verifying the contents exist
function addBlog(){
    var obj={};
    obj.title = document.getElementById("title").value;
    obj.desc = document.getElementById("desc").value;
    obj.image = document.getElementById("image").value;
    clearData();
    if(obj.title == ""){
        window.alert("Title not defined");
        return;
    }else if (obj.desc == "") {
        window.alert("Description not given");
        return;
    }

    
    if(obj.image == ""){
        if(Math.random() >= .30){
            var w = Math.floor(Math.random()*200) +200;
            var h = Math.floor(Math.random()*200) +200;
            obj.image = " https://placeimg.com/"+w+"/"+h+"/any";
        }
    }
    addArticleRow(obj,sessionKey);
    addObjectToStorage(obj);
}

function clearStorage(){
    sessionStorage.clear()
    sessionKey=0;
    window.alert("Sucessfully deleted all articles from session storage, refreshing page");
    location.reload()
} 
 
function addArticleRow(obj,index){
    var newHeader = document.createElement("h1");
    newHeader.innerHTML = obj.title;

    var createNewPara = document.createElement("p");
    createNewPara.innerHTML = obj.desc;
    

    var newCol = document.createElement("div");
    newCol.className = "col-7 articleContent";
    newCol.id = "article"+index.toString();
    newCol.appendChild(newHeader);
    newCol.appendChild(createNewPara)

    var newRow = document.createElement("div");
    newRow.className = "row justify-content-center rowMargin"
    newRow.appendChild(newCol);
    
    var articlesCollect = document.getElementById("articlesCollect");
    articlesCollect.insertBefore(newRow,articlesCollect.firstChild);

    addBackgroundToArticle(obj.image,index);
}

function addBackgroundToArticle(image,index){
    var sheet = document.styleSheets[0];
    var articleID = "#article"+index.toString();
    if (image == ""){
        var r = Math.floor((Math.random() * 255) + 1);        var g = Math.floor((Math.random() * 255) + 1);
        var b = Math.floor((Math.random() * 255) + 1);
        var rgbStr = 'rgb('+r+','+g+','+b+');'
        sheet.insertRule(articleID+'{background-color: '+rgbStr+';}',sheet.cssRules.length);
    }else{
        sheet.insertRule(articleID+'{background: url('+image+');}',sheet.cssRules.length);
    }
}

function randomArticle(){    //random article
    document.getElementById("title").value = "Article #" +sessionKey.toString();
    document.getElementById("desc").value = "Situational overload is not the problem. When we complain about information overload, what we’re usually complaining about is ambient overload. This is an altogether different beast. Ambient overload doesn’t involve needles in haystacks. It involves haystack-sized piles of needles. We experience ambient overload when we’re surrounded by so much information that is of immediate interest to us that we feel overwhelmed by the neverending pressure of trying to keep up with it all. We keep clicking links, keep hitting the refresh key, keep opening new tabs, keep checking email in-boxes and RSS feeds, keep scanning Amazon and Netflix recommendations – and yet the pile of interesting information never shrinks.";
    addBlog();
}

function clearData(){
    document.getElementById("title").value = "";
    document.getElementById("desc").value = "";
    document.getElementById("image").value = "";
}


var sessionKey = findNextSessionNum();  //gather all articles which are saved in sessionstorage
function findNextSessionNum(){
    var i=0;
    while(sessionStorage.key(i)!=null){
        addArticleRow(JSON.parse(sessionStorage.getItem('article'+i.toString())),i);
        i++;
    }
    return i;
}

function addObjectToStorage(obj){
    sessionStorage.setItem('article'+sessionKey.toString(),JSON.stringify(obj));
    sessionKey++;
}