console.log('What is going on here?');
chrome.runtime.onMessage.addListener();

let elements = document.querySelectorAll("p, h1, h2, h3, h4, input, video, button, nav, dl, pre, abbr, th, td, caption, dd");

let links = document.querySelectorAll("a, label, mw-collapsible-toggle mw-collapsible-toggle-default mw-collapsible-toggle-collapsed, a.mw-collapsible-text");

let imgs = document.querySelectorAll("img, img.thumbimage, td.infobox-image, a.image, div.tsingle, div#mwe_player_0.PopUpMediaTransform, div#mwe_player_2.PopUpMediaTransform, img.mwe-math-fallback-image-inline");

let divs = document.querySelectorAll("div.thumbcaption, div.toctitle, div.hatnote.navigation-not-searchable, div.spoken-wikipedia-disclaimer, div.spoken-wikipedia-header, div.spoken-wikipedia-footer, div.mw-references-wrap.mw-references-columns, div.mw-references-wrap, div.searchresults, div.searchdidyoumean, div.results-info, div.documentation-startbox, div.mw-indicators, div.mwe-popups-container, div.module-shortcutboxplain.plainlist.noprint, div.div-col, div.refbegin,  div.noprint.metadata.navbox, div.metadata.plainlinks.sistersitebox.plainlist.mbox-small, div.noprint.portal.plainlist.tright, div.barbox, div.reflist.reflist-columns.references-column-width.reflist-lower-alpha, div.reflist.reflist-columns.references-column-width, div.trow");

let special = document.querySelectorAll("div#siteSub.noprint, div#catlinks.catlinks, cite.citation.book.cs1, td.mbox-text, td.infobox-data, th.infobox-above, th.infobox-header,th.infobox-label, th.infobox-data, td.infobox-data.role, td.infobox-full-data, td.sidebar-pretitle, td.sidebar-content.plainlist, th.navbox-title, th.navbox-group, li::marker, .navpopup, th.navbox-group, td.navbox-list.navbox-odd, td.mp-subpanel, button.mw-interlanguage-selector.mw-ui-button, td.navbox-list.navbox-odd, td.navbox-list.navbox-even");

let footer = document.querySelectorAll("li#footer-info-lastmod, li#footer-info-copyright, li#footer-places-privacy, li#footer-places-about, li#footer-places-disclaimer, li#footer-places-contact, li#footer-places-mobileview, li#footer-places-developers, li#footer-places-statslink, li#footer-places-cookiestatement, ul#footer-icons.noprint");

let spans = document.querySelectorAll("span.tocnumber, span.toctitle, span.toctext, mw.headline");

document.querySelectorAll('li').className = "lists"
let list = document.getElementsByClassName('lists');
    while(list.length > 0){
      list[i].style.transform="rotateY(180deg)";
      list[i].style.transform="rotateX(180deg)";
      list[i].style.fontFamily = "Lucida Handwriting,cursive";
      list[i].style.fontSize = "medium";
    }


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
imgs[i].style.filter = "blur(6Px)"
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

let content5 = document.getElementById('p-lang-label');
content5.remove();

var annotation = document.getElementById('Annotations');
annotation.remove();

let content6 = document.getElementsByClassName('wb-langlinks-edit wb-langlinks-link');
    while(content6.length > 0){
        content6[0].parentNode.removeChild(content6[0]);
    }

let content7 = document.getElementsByClassName('cbnnr-main');
    while(content7.length > 0){
        content7[0].parentNode.removeChild(content7[0]);
    }

let content8 = document.getElementsByClassName('wikitable');
    while(content8.length > 0){
        content8[0].parentNode.removeChild(content8[0]);
    }

let content9 = document.getElementsByClassName('vector-menu-heading');
    while(content9.length > 0){
        content9[0].parentNode.removeChild(content9[0]);
    }

let content10 = document.getElementsByClassName('uls-settings-trigger');
    while(content10.length > 0){
        content10[0].parentNode.removeChild(content10[0]);
    }

var lists1 = document.getElementsByTagName("ol"), index;

for (index = lists1.length - 1; index >= 0; index--) {
    lists1[index].parentNode.removeChild(lists1[index]);
}

function gotMessage(request, sender, sendResponse){
  console.log(request);
}
chrome.runtime.onMessage.addListener(gotMessage);
