console.log('What is going on here?');
chrome.runtime.onMessage.addListener();

let elements = document.querySelectorAll("i, b, p, h1, h2, h3, h4, input, video, button, nav, dl, pre, abbr, th, td");
let links = document.querySelectorAll("a, label");
// let h3label = document.querySelectorAll("h3#p-interaction-label.vector-menu-heading");
let imgs = document.querySelectorAll("img.thumbimage, td.infobox-image, img.image");
let divs = document.querySelectorAll("div.thumbcaption, div.toctitle, div.hatnote.navigation-not-searchable, div.div-col, div.refbegin, div.refbegin-columns.references-column-width, div.reflist.reflist-columns.references-column-width, div.spoken-wikipedia-disclaimer, div.spoken-wikipedia-header, div.spoken-wikipedia-footer, div.mw-references-wrap.mw-references-columns, div.mw-references-wrap, div.searchresults, div.searchdidyoumean, div.results-info, div.documentation-startbox, div.mw-indicators, div.mwe-popups-container, div.module-shortcutboxplain.plainlist.noprint");
let special = document.querySelectorAll("div#siteSub.noprint, div#catlinks.catlinks, table.wikitable, cite.citation.book.cs1, td.navbox-list.navbox-odd, td.navbox-list.navbox-even, td.mbox-text, td.infobox-data, th.infobox-above, th.infobox-header,th.infobox-label, th.infobox-data, td.infobox-data.role, td.infobox-full-data, td.sidebar-pretitle, td.sidebar-content.plainlist, th.navbox-title, td.navbox-abovebelow, th.navbox-group, li::marker, .navpopup");
let footer = document.querySelectorAll("li#footer-info-lastmod, li#footer-info-copyright, li#footer-places-privacy, li#footer-places-about, li#footer-places-disclaimer, li#footer-places-contact, li#footer-places-mobileview, li#footer-places-developers, li#footer-places-statslink, li#footer-places-cookiestatement, ul#footer-icons.noprint");
let spans = document.querySelectorAll("span, span.toctitle, span.toctext");
// let text = document.getElementById("text");

for (let i=0 ; i<elements.length ; i+=1) {
elements[i].style.transform="rotateY(180deg)";
elements[i].style.transform="rotateX(180deg)";
elements[i].style.fontFamily = "Lucida Handwriting,cursive";
elements[i].style.fontSize = "medium";
}

for (let i=0 ; i<links.length ; i+=1) {
links[i].style.transform="rotateY(180deg)";
links[i].style.transform="rotateX(180deg)";
links[i].style.color="black";
links[i].style.fontFamily = "Lucida Handwriting,cursive";
links[i].style.fontSize = "medium";
}

for (let i=0 ; i<imgs.length ; i+=1) {
imgs[i].style.transform="rotateY(180deg)";
imgs[i].style.transform="rotateX(180deg)";
imgs[i].style.filter = "blur(10Px)"
}

for (let i=0 ; i<divs.length ; i+=1) {
divs[i].style.transform="rotateY(180deg)";
divs[i].style.transform="rotateX(180deg)";
divs[i].style.fontFamily = "Lucida Handwriting,cursive";
divs[i].style.fontSize = "medium";
}

for (let i=0 ; i<special.length ; i+=1) {
special[i].style.transform="rotateY(180deg)";
special[i].style.transform="rotateX(180deg)";
special[i].style.fontFamily = "Lucida Handwriting,cursive";
special[i].style.fontSize = "medium";
}

for (let i=0 ; i<footer.length ; i+=1) {
footer[i].style.transform="rotateY(180deg)";
footer[i].style.transform="rotateX(180deg)";
footer[i].style.fontFamily = "Lucida Handwriting,cursive";
footer[i].style.fontSize = "medium";
}

for (let i=0 ; i<spans.length ; i+=1) {
spans[i].style.transform="rotateY(180deg)";
spans[i].style.transform="rotateX(180deg)";
spans[i].style.fontFamily = "Lucida Handwriting,cursive";
spans[i].style.fontSize = "medium";
}

let header = document.getElementById('mw-head');
header.remove();

let content1 = document.getElementById('p-interaction-label');
content1.remove();

let content2 = document.getElementById('p-tb-label');
content2.remove();

let content3 = document.getElementById('p-coll-print_export-label');
content3.remove();

let content4 = document.getElementById('p-wikibase-otherprojects-label');
content4.remove();

let content5 = document.getElementById('p-lang-label');
content5.remove();

let popups = document.getElementById('preview');
popups.remove();

let content6 = document.getElementsByClassName('wb-langlinks-edit wb-langlinks-link');
    while(content6.length > 0){
        content6[0].parentNode.removeChild(content6[0]);
    }

let content7 = document.getElementsByClassName('mw-indicators');
    while(content7.length > 0){
        content6[0].parentNode.removeChild(content7[0]);
    }


// let input = document.querySelector(".input");
// let check = document.querySelector(".mwe-popups-settings-page");
//
// check.disabled == true;

// mwe-popups-settings-page

// let content6 = document.getElementByClassName('mw-indicators');
// content6.remove();
// document.getElementById("a").removeEventListener("mouseover", myFunction);

// for (let i=0 ; i<h3label.length ; i+=1) {
// h3label[i].style.fontFamily = "Lucida Handwriting,cursive";
// h3label[i].style.fontSize = "medium";
// }

// for (let i=0 ; i<text.length ; i+=1) {
// text[i].style.transform="rotateY(180deg)";
// text[i].style.transform="rotateX(180deg)";
// text[i].style.fontFamily = "Lucida Handwriting,cursive";
// text[i].style.fontSize = "medium";
// }


function gotMessage(request, sender, sendResponse){
  console.log(request);
}
chrome.runtime.onMessage.addListener(gotMessage);
