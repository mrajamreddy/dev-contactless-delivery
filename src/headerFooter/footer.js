import React, { Component } from 'react';
import './ibm.css'

class Footer extends Component {
    render() {
        return (
            <footer role="contentinfo" aria-label="IBM">
            <div id="ibm-footer-module">
               <section role="region" aria-label="Resources">
                  <div class="ibm-fluid ibm-word-break" id="ibm-footer-module-links">
                     <div class="ibm-footermenu-list ibm-col-12-3 ibm-col-8-2" aria-label="Discover">
                        <h3 class="ibm-bold">Discover</h3>
                        <ul class="ibm-plain-list ibm-textcolumns-small-2">
                           <li><a href="https://www.ibm.com/in-en/products/?lnk=fdi-inen">Products</a></li>
                           <li><a href="https://www.ibm.com/in-en/products/trials?lnk=fdi-inen">Trials</a></li>
                           <li><a href="https://www.ibm.com/in-en/services?lnk=fdi-inen">Services</a></li>
                           <li><a href="https://www.ibm.com/in-en/industries?lnk=fdi-inen">Industries</a></li>
                           <li><a href="https://www.ibm.com/in-en/products/offers-and-discounts?lnk=fdi-inen">IBM discounts</a></li>
                           <li><a href="https://www.ibm.com/case-studies?lnk=fdi_inen">Case studies</a></li>
                        </ul>
                     </div>
                     <div class="ibm-footermenu-list ibm-col-12-3 ibm-col-8-2" aria-label="Information for...">
                        <h3 class="ibm-bold">Information for...</h3>
                        <ul class="ibm-plain-list ibm-textcolumns-small-2">
                           <li><a href="https://www.ibm.com/developerworks/">Developers</a></li>
                           <li><a href="https://www.ibm.com/partnerworld">Business Partners</a></li>
                           <li><a href="https://www.ibm.com/shop/americas/content/home/en_US/government-contracts.html">Federal and state contracts</a></li>
                        </ul>
                     </div>
                     <div class="ibm-footermenu-list ibm-col-12-3 ibm-col-8-2" aria-label="Connect with us">
                        <h3 class="ibm-bold">Connect with us</h3>
                        <ul class="ibm-plain-list ibm-textcolumns-small-2">
                           <li><a href="https://www.ibm.com/support/in/en/?lnk=fcw">Support</a></li>
                           <li><a href="https://www.ibm.com/connect/ibm/in/en/">Find a sales rep</a></li>
                           <li><a href="https://www.ibm.com/partnerworld/wps/bplocator/search.jsp">Find a Business Partner</a></li>
                        </ul>
                     </div>
                     <div class="ibm-footermenu-list ibm-col-12-3 ibm-col-8-2" aria-label="About IBM">
                        <h3 class="ibm-bold">About IBM</h3>
                        <ul class="ibm-plain-list ibm-textcolumns-small-2">
                           <li><a href="https://www.ibm.com/in-en/employment/">Careers</a></li>
                           <li><a href="https://www.ibm.com/press/in/en/index.wss">Latest news</a></li>
                           <li><a href="https://www.ibm.com/investor/">Investor relations</a></li>
                           <li><a href="https://www.ibm.com/ibm/responsibility/">Corporate responsibility</a></li>
                           <li><a href="https://www.ibm.com/in-en/about">About IBM</a></li>
                        </ul>
                     </div>
                  </div>
                  <div class="ibm-footer-locale-columns ibm-fluid">
                     <div id="ibm-footer-locale-selector" class="ibm-col-12-3 ibm-col-medium-12-6 ibm-col-8-2 ibm-col-medium-8-4 ibm-fright">
                        <h3 class="ibm-bold">Select a country/region</h3>
                        <select class="ibm-fullwidth select2-hidden-accessible ibm-widget-processed width-335" aria-label="Select a country/region" tabindex="-1" aria-hidden="true">
                           <optgroup label="Translated versions of this page">
                              <option data-localecode="en-in" value="/in-en/products/category/technology/cognitive-computing-and-AI">India - English</option>
                              <option data-localecode="es-ar" value="/ar-es/products/category/technology/cognitive-computing-and-AI">Argentina - Spanish</option>
                              <option data-localecode="en-au" value="/au-en/products/category/technology/cognitive-computing-and-AI">Australia - English</option>
                              <option data-localecode="de-at" value="/at-de/products/category/technology/cognitive-computing-and-AI">Austria - German</option>
                              <option data-localecode="en-be" value="/be-en/products/category/technology/cognitive-computing-and-AI">Belgium/Luxembourg - English</option>
                              <option data-localecode="pt-br" value="/br-pt/products/category/technology/cognitive-computing-and-AI">Brazil - Portuguese</option>
                              <option data-localecode="en-ca" value="/ca-en/products/category/technology/cognitive-computing-and-AI">Canada - English</option>
                              <option data-localecode="fr-ca" value="/ca-fr/products/category/technology/cognitive-computing-and-AI">Canada - French</option>
                              <option data-localecode="es-cl" value="/cl-es/products/category/technology/cognitive-computing-and-AI">Chile - Spanish</option>
                              <option data-localecode="zh-cn" value="/cn-zh/products/category/technology/cognitive-computing-and-AI">China - Chinese (Simplified)</option>
                              <option data-localecode="es-co" value="/co-es/products/category/technology/cognitive-computing-and-AI">Colombia - Spanish</option>
                              <option data-localecode="en-cy" value="/cy-en/products/category/technology/cognitive-computing-and-AI">Cyprus - English</option>
                              <option data-localecode="en-cz" value="/cz-en/products/category/technology/cognitive-computing-and-AI">Czech Republic - English</option>
                              <option data-localecode="en-dk" value="/dk-en/products/category/technology/cognitive-computing-and-AI">Denmark - English</option>
                              <option data-localecode="en-eg" value="/eg-en/products/category/technology/cognitive-computing-and-AI">Egypt - English</option>
                              <option data-localecode="en-fi" value="/fi-en/products/category/technology/cognitive-computing-and-AI">Finland - English</option>
                              <option data-localecode="fr-fr" value="/fr-fr/products/category/technology/cognitive-computing-and-AI">France - French</option>
                              <option data-localecode="de-de" value="/de-de/products/category/technology/cognitive-computing-and-AI">Germany - German</option>
                              <option data-localecode="en-hk" value="/hk-en/products/category/technology/cognitive-computing-and-AI">Hong Kong - English</option>
                              <option data-localecode="en-hu" value="/hu-en/products/category/technology/cognitive-computing-and-AI">Hungary - English</option>
                              <option data-localecode="en-id" value="/id-en/products/category/technology/cognitive-computing-and-AI">Indonesia - English</option>
                              <option data-localecode="en-ie" value="/ie-en/products/category/technology/cognitive-computing-and-AI">Ireland - English</option>
                              <option data-localecode="en-il" value="/il-en/products/category/technology/cognitive-computing-and-AI">Israel - English</option>
                              <option data-localecode="it-it" value="/it-it/products/category/technology/cognitive-computing-and-AI">Italy - Italian</option>
                              <option data-localecode="ja-jp" value="/jp-ja/products/category/technology/cognitive-computing-and-AI">Japan - Japanese</option>
                              <option data-localecode="ko-kr" value="/kr-ko/products/category/technology/cognitive-computing-and-AI">Korea, Republic of - Korean</option>
                              <option data-localecode="en-my" value="/my-en/products/category/technology/cognitive-computing-and-AI">Malaysia - English</option>
                              <option data-localecode="es-mx" value="/mx-es/products/category/technology/cognitive-computing-and-AI">Mexico - Spanish</option>
                              <option data-localecode="en-nl" value="/nl-en/products/category/technology/cognitive-computing-and-AI">Netherlands - English</option>
                              <option data-localecode="en-nz" value="/nz-en/products/category/technology/cognitive-computing-and-AI">New Zealand - English</option>
                              <option data-localecode="en-no" value="/no-en/products/category/technology/cognitive-computing-and-AI">Norway - English</option>
                              <option data-localecode="es-pe" value="/pe-es/products/category/technology/cognitive-computing-and-AI">Peru - Spanish</option>
                              <option data-localecode="en-ph" value="/ph-en/products/category/technology/cognitive-computing-and-AI">Philippines - English</option>
                              <option data-localecode="pl-pl" value="/pl-pl/products/category/technology/cognitive-computing-and-AI">Poland - Polish</option>
                              <option data-localecode="en-pt" value="/pt-en/products/category/technology/cognitive-computing-and-AI">Portugal - English</option>
                              <option data-localecode="en-ro" value="/ro-en/products/category/technology/cognitive-computing-and-AI">Romania - English</option>
                              <option data-localecode="ru-ru" value="/ru-ru/products/category/technology/cognitive-computing-and-AI">Russian Federation - Russian</option>
                              <option data-localecode="en-sa" value="/sa-en/products/category/technology/cognitive-computing-and-AI">Saudi Arabia - English</option>
                              <option data-localecode="en-sg" value="/sg-en/products/category/technology/cognitive-computing-and-AI">Singapore - English</option>
                              <option data-localecode="en-za" value="/za-en/products/category/technology/cognitive-computing-and-AI">South Africa - English</option>
                              <option data-localecode="es-es" value="/es-es/products/category/technology/cognitive-computing-and-AI">Spain - Spanish</option>
                              <option data-localecode="en-se" value="/se-en/products/category/technology/cognitive-computing-and-AI">Sweden - English</option>
                              <option data-localecode="fr-ch" value="/ch-fr/products/category/technology/cognitive-computing-and-AI">Switzerland - French</option>
                              <option data-localecode="de-ch" value="/ch-de/products/category/technology/cognitive-computing-and-AI">Switzerland - German</option>
                              <option data-localecode="zh-tw" value="/tw-zh/products/category/technology/cognitive-computing-and-AI">Taiwan - Traditional Chinese</option>
                              <option data-localecode="en-th" value="/th-en/products/category/technology/cognitive-computing-and-AI">Thailand - English</option>
                              <option data-localecode="tr-tr" value="/tr-tr/products/category/technology/cognitive-computing-and-AI">Turkey - Turkish</option>
                              <option data-localecode="en-ae" value="/ae-en/products/category/technology/cognitive-computing-and-AI">United Arab Emirates - English</option>
                              <option data-localecode="en-uk" value="/uk-en/products/category/technology/cognitive-computing-and-AI">United Kingdom - English</option>
                              <option data-localecode="en-us" value="/us-en/products/category/technology/cognitive-computing-and-AI">United States - English</option>
                              <option data-localecode="en-vn" value="/vn-en/products/category/technology/cognitive-computing-and-AI">Vietnam - English</option>
                           </optgroup>
                           <optgroup label="Worldwide ibm.com home pages">
                              <option data-localecode="en-af" value="http://www.ibm.com/af-en/?lnk=fcc">Afghanistan - English</option>
                              <option data-localecode="fr-dz" value="http://www.ibm.com/dz-fr/?lnk=fcc">Algeria - French</option>
                              <option data-localecode="pt-ao" value="http://www.ibm.com/ao-pt/?lnk=fcc">Angola - Portuguese</option>
                              <option data-localecode="en-ai" value="http://www.ibm.com/ai-en/?lnk=fcc">Anguilla - English</option>
                              <option data-localecode="en-ag" value="http://www.ibm.com/ag-en/?lnk=fcc">Antigua and Barbuda - English</option>
                              <option data-localecode="en-aw" value="http://www.ibm.com/aw-en/?lnk=fcc">Aruba - English</option>
                              <option data-localecode="en-bs" value="http://www.ibm.com/bs-en/?lnk=fcc">Bahamas - English</option>
                              <option data-localecode="en-bh" value="http://www.ibm.com/bh-en/?lnk=fcc">Bahrain - English</option>
                              <option data-localecode="en-bd" value="http://www.ibm.com/bd-en/?lnk=fcc">Bangladesh - English</option>
                              <option data-localecode="en-bb" value="http://www.ibm.com/bb-en/?lnk=fcc">Barbados - English</option>
                              <option data-localecode="nl-be" value="http://www.ibm.com/be-nl/?lnk=fcc">Belgium/Luxembourg - Dutch</option>
                              <option data-localecode="fr-be" value="http://www.ibm.com/be-fr/?lnk=fcc">Belgium/Luxembourg - French</option>
                              <option data-localecode="en-bm" value="http://www.ibm.com/bm-en/?lnk=fcc">Bermuda - English</option>
                              <option data-localecode="es-bo" value="http://www.ibm.com/bo-es/?lnk=fcc">Bolivia - Spanish</option>
                              <option data-localecode="en-bw" value="http://www.ibm.com/bw-en/?lnk=fcc">Botswana - English</option>
                              <option data-localecode="en-bn" value="http://www.ibm.com/bn-en/?lnk=fcc">Brunei Darussalam - English</option>
                              <option data-localecode="bg-bg" value="http://www.ibm.com/bg-bg/?lnk=fcc">Bulgaria - Bulgarian</option>
                              <option data-localecode="en-bg" value="http://www.ibm.com/bg-en/?lnk=fcc">Bulgaria - English</option>
                              <option data-localecode="fr-bf" value="http://www.ibm.com/bf-fr/?lnk=fcc">Burkina Faso - French</option>
                              <option data-localecode="en-kh" value="http://www.ibm.com/kh-en/?lnk=fcc">Cambodia - English</option>
                              <option data-localecode="en-cm" value="http://www.ibm.com/cm-en/?lnk=fcc">Cameroon - English</option>
                              <option data-localecode="fr-cm" value="http://www.ibm.com/cm-fr/?lnk=fcc">Cameroon - French</option>
                              <option data-localecode="en-ky" value="http://www.ibm.com/ky-en/?lnk=fcc">Cayman Islands - English</option>
                              <option data-localecode="fr-td" value="http://www.ibm.com/td-fr/?lnk=fcc">Chad - French</option>
                              <option data-localecode="fr-cg" value="http://www.ibm.com/cg-fr/?lnk=fcc">Congo - French</option>
                              <option data-localecode="fr-cd" value="http://www.ibm.com/cd-fr/?lnk=fcc">Congo, The Democratic Republic of the - French</option>
                              <option data-localecode="es-cr" value="http://www.ibm.com/cr-es/?lnk=fcc">Costa Rica - Spanish</option>
                              <option data-localecode="hr-hr" value="http://www.ibm.com/hr-hr/?lnk=fcc">Croatia - Croatian</option>
                              <option data-localecode="en-hr" value="http://www.ibm.com/hr-en/?lnk=fcc">Croatia - English</option>
                              <option data-localecode="en-cw" value="http://www.ibm.com/cw-en/?lnk=fcc">Curacao - English</option>
                              <option data-localecode="cs-cz" value="http://www.ibm.com/cz-cs/?lnk=fcc">Czech Republic - Czech</option>
                              <option data-localecode="da-dk" value="http://www.ibm.com/dk-da/?lnk=fcc">Denmark - Danish</option>
                              <option data-localecode="en-dm" value="http://www.ibm.com/dm-en/?lnk=fcc">Dominica - English</option>
                              <option data-localecode="es-ec" value="http://www.ibm.com/ec-es/?lnk=fcc">Ecuador - Spanish</option>
                              <option data-localecode="en-ee" value="http://www.ibm.com/ee-en/?lnk=fcc">Estonia - English</option>
                              <option data-localecode="et-ee" value="http://www.ibm.com/ee-et/?lnk=fcc">Estonia - Estonian</option>
                              <option data-localecode="en-et" value="http://www.ibm.com/et-en/?lnk=fcc">Ethiopia - English</option>
                              <option data-localecode="fi-fi" value="http://www.ibm.com/fi-fi/?lnk=fcc">Finland - Finnish</option>
                              <option data-localecode="fr-ga" value="http://www.ibm.com/ga-fr/?lnk=fcc">Gabon - French</option>
                              <option data-localecode="en-gh" value="http://www.ibm.com/gh-en/?lnk=fcc">Ghana - English</option>
                              <option data-localecode="en-gr" value="http://www.ibm.com/gr-en/?lnk=fcc">Greece - English</option>
                              <option data-localecode="el-gr" value="http://www.ibm.com/gr-el/?lnk=fcc">Greece - Greek</option>
                              <option data-localecode="en-gd" value="http://www.ibm.com/gd-en/?lnk=fcc">Grenada - English</option>
                              <option data-localecode="en-gy" value="http://www.ibm.com/gy-en/?lnk=fcc">Guyana - English</option>
                              <option data-localecode="hu-hu" value="http://www.ibm.com/hu-hu/?lnk=fcc">Hungary - Hungarian</option>
                              <option data-localecode="en-iq" value="http://www.ibm.com/iq-en/?lnk=fcc">Iraq - English</option>
                              <option data-localecode="he-il" value="http://www.ibm.com/il-he/?lnk=fcc">Israel - Hebrew</option>
                              <option data-localecode="fr-ci" value="http://www.ibm.com/ci-fr/?lnk=fcc">Ivory Coast - French</option>
                              <option data-localecode="en-jm" value="http://www.ibm.com/jm-en/?lnk=fcc">Jamaica - English</option>
                              <option data-localecode="en-jo" value="http://www.ibm.com/jo-en/?lnk=fcc">Jordan - English</option>
                              <option data-localecode="en-kz" value="http://www.ibm.com/kz-en/?lnk=fcc">Kazakhstan - English</option>
                              <option data-localecode="kk-kz" value="http://www.ibm.com/kz-kk/?lnk=fcc">Kazakhstan - Kazakh</option>
                              <option data-localecode="en-ke" value="http://www.ibm.com/ke-en/?lnk=fcc">Kenya - English</option>
                              <option data-localecode="en-kw" value="http://www.ibm.com/kw-en/?lnk=fcc">Kuwait - English</option>
                              <option data-localecode="en-lv" value="http://www.ibm.com/lv-en/?lnk=fcc">Latvia - English</option>
                              <option data-localecode="lv-lv" value="http://www.ibm.com/lv-lv/?lnk=fcc">Latvia - Latvian</option>
                              <option data-localecode="en-lb" value="http://www.ibm.com/lb-en/?lnk=fcc">Lebanon - English</option>
                              <option data-localecode="en-ly" value="http://www.ibm.com/ly-en/?lnk=fcc">Libya - English</option>
                              <option data-localecode="en-lt" value="http://www.ibm.com/lt-en/?lnk=fcc">Lithuania - English</option>
                              <option data-localecode="lt-lt" value="http://www.ibm.com/lt-lt/?lnk=fcc">Lithuania - Lithuanian</option>
                              <option data-localecode="fr-mg" value="http://www.ibm.com/mg-fr/?lnk=fcc">Madagascar - French</option>
                              <option data-localecode="en-mw" value="http://www.ibm.com/mw-en/?lnk=fcc">Malawi - English</option>
                              <option data-localecode="en-mu" value="http://www.ibm.com/mu-en/?lnk=fcc">Mauritius - English</option>
                              <option data-localecode="fr-mu" value="http://www.ibm.com/mu-fr/?lnk=fcc">Mauritius - French</option>
                              <option data-localecode="en-ms" value="http://www.ibm.com/ms-en/?lnk=fcc">Montserrat - English</option>
                              <option data-localecode="fr-ma" value="http://www.ibm.com/ma-fr/?lnk=fcc">Morocco - French</option>
                              <option data-localecode="pt-mz" value="http://www.ibm.com/mz-pt/?lnk=fcc">Mozambique - Portuguese</option>
                              <option data-localecode="en-na" value="http://www.ibm.com/na-en/?lnk=fcc">Namibia - English</option>
                              <option data-localecode="en-np" value="http://www.ibm.com/np-en/?lnk=fcc">Nepal - English</option>
                              <option data-localecode="nl-nl" value="http://www.ibm.com/nl-nl/?lnk=fcc">Netherlands - Dutch</option>
                              <option data-localecode="fr-ne" value="http://www.ibm.com/ne-fr/?lnk=fcc">Niger - French</option>
                              <option data-localecode="en-ng" value="http://www.ibm.com/ng-en/?lnk=fcc">Nigeria - English</option>
                              <option data-localecode="no-no" value="http://www.ibm.com/no-no/?lnk=fcc">Norway - Norwegian</option>
                              <option data-localecode="en-om" value="http://www.ibm.com/om-en/?lnk=fcc">Oman - English</option>
                              <option data-localecode="en-pk" value="http://www.ibm.com/pk-en/?lnk=fcc">Pakistan - English</option>
                              <option data-localecode="es-py" value="http://www.ibm.com/py-es/?lnk=fcc">Paraguay - Spanish</option>
                              <option data-localecode="pt-pt" value="http://www.ibm.com/pt-pt/?lnk=fcc">Portugal - Portuguese</option>
                              <option data-localecode="en-qa" value="http://www.ibm.com/qa-en/?lnk=fcc">Qatar - English</option>
                              <option data-localecode="ro-ro" value="http://www.ibm.com/ro-ro/?lnk=fcc">Romania - Romanian</option>
                              <option data-localecode="en-kn" value="http://www.ibm.com/kn-en/?lnk=fcc">Saint Kitts and Nevis - English</option>
                              <option data-localecode="en-lc" value="http://www.ibm.com/lc-en/?lnk=fcc">Saint Lucia - English</option>
                              <option data-localecode="en-vc" value="http://www.ibm.com/vc-en/?lnk=fcc">Saint Vincent and the Grenadines - English</option>
                              <option data-localecode="ar-sa" value="http://www.ibm.com/sa-ar/?lnk=fcc">Saudi Arabia - Arabic</option>
                              <option data-localecode="fr-sn" value="http://www.ibm.com/sn-fr/?lnk=fcc">Senegal - French</option>
                              <option data-localecode="en-rs" value="http://www.ibm.com/rs-en/?lnk=fcc">Serbia - English</option>
                              <option data-localecode="sr-rs" value="http://www.ibm.com/rs-sr/?lnk=fcc">Serbia - Serbian</option>
                              <option data-localecode="fr-sc" value="http://www.ibm.com/sc-fr/?lnk=fcc">Seychelles - French</option>
                              <option data-localecode="en-sl" value="http://www.ibm.com/sl-en/?lnk=fcc">Sierra Leone - English</option>
                              <option data-localecode="en-sk" value="http://www.ibm.com/sk-en/?lnk=fcc">Slovakia - English</option>
                              <option data-localecode="sk-sk" value="http://www.ibm.com/sk-sk/?lnk=fcc">Slovakia - Slovak</option>
                              <option data-localecode="en-si" value="http://www.ibm.com/si-en/?lnk=fcc">Slovenia - English</option>
                              <option data-localecode="sl-si" value="http://www.ibm.com/si-sl/?lnk=fcc">Slovenia - Slovenian</option>
                              <option data-localecode="en-lk" value="http://www.ibm.com/lk-en/?lnk=fcc">Sri Lanka - English</option>
                              <option data-localecode="en-sr" value="http://www.ibm.com/sr-en/?lnk=fcc">Suriname - English</option>
                              <option data-localecode="sv-se" value="http://www.ibm.com/se-sv/?lnk=fcc">Sweden - Swedish</option>
                              <option data-localecode="en-tz" value="http://www.ibm.com/tz-en/?lnk=fcc">Tanzania, United Republic of - English</option>
                              <option data-localecode="en-tt" value="http://www.ibm.com/tt-en/?lnk=fcc">Trinidad and Tobago - English</option>
                              <option data-localecode="fr-tn" value="http://www.ibm.com/tn-fr/?lnk=fcc">Tunisia - French</option>
                              <option data-localecode="en-tc" value="http://www.ibm.com/tc-en/?lnk=fcc">Turks and Caicos Islands - English</option>
                              <option data-localecode="en-ug" value="http://www.ibm.com/ug-en/?lnk=fcc">Uganda - English</option>
                              <option data-localecode="en-ua" value="http://www.ibm.com/ua-en/?lnk=fcc">Ukraine - English</option>
                              <option data-localecode="uk-ua" value="http://www.ibm.com/ua-uk/?lnk=fcc">Ukraine - Ukrainian</option>
                              <option data-localecode="ar-ae" value="http://www.ibm.com/ae-ar/?lnk=fcc">United Arab Emirates - Arabic</option>
                              <option data-localecode="es-uy" value="http://www.ibm.com/uy-es/?lnk=fcc">Uruguay - Spanish</option>
                              <option data-localecode="en-uz" value="http://www.ibm.com/uz-en/?lnk=fcc">Uzbekistan - English</option>
                              <option data-localecode="uz-uz" value="http://www.ibm.com/uz-uz/?lnk=fcc">Uzbekistan - Uzbek</option>
                              <option data-localecode="es-ve" value="http://www.ibm.com/ve-es/?lnk=fcc">Venezuela - Spanish</option>
                              <option data-localecode="vi-vn" value="http://www.ibm.com/vn-vi/?lnk=fcc">Vietnam - Vietnamese</option>
                              <option data-localecode="en-vg" value="http://www.ibm.com/vg-en/?lnk=fcc">Virgin Islands, British - English</option>
                              <option data-localecode="en-ye" value="http://www.ibm.com/ye-en/?lnk=fcc">Yemen - English</option>
                              <option data-localecode="en-zm" value="http://www.ibm.com/zm-en/?lnk=fcc">Zambia - English</option>
                              <option data-localecode="en-zw" value="http://www.ibm.com/zw-en/?lnk=fcc">Zimbabwe - English</option>
                           </optgroup>
                        </select>
                        <span class="select2 select2-container select2-container--default width-100" dir="ltr"><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-labelledby="select2-uih1-container"><span class="select2-selection__rendered" id="select2-uih1-container" title="India - English">India - English</span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
                     </div>
                  </div>
                  <div class="ibm-fluid ibm-padding-bottom-0">
                     <div class="ibm-col-12-12 ibm-col-8-8">
                        <div class="ibm-rule ibm-alternate ibm-nospacing ibm-gray-30">
                           <hr />
                        </div>
                     </div>
                  </div>
               </section>
            </div>
            <div id="ibm-footer">
               <div class="ibm-fluid ibm-padding-bottom-0">
                  <div class="ibm-col-12-12 ibm-col-8-8">
                     <div class="ibm-footer-corporate-links ibm-word-break-all">
                        <ul class="ibm-padding-bottom-0 ibm-textcolumns-small-2">
                           <li><a href="https://www.ibm.com/contact/in/en/?lnk=flg">Contact</a></li>
                           <li><a href="https://www.ibm.com/privacy/in/en/?lnk=flg">Privacy</a></li>
                           <li><a href="https://www.ibm.com/legal/in/en/?lnk=flg">Terms of use</a></li>
                           <li><a href="https://www.ibm.com/accessibility/in/en/?lnk=flg">Accessibility</a></li>
                           <li id="ibm-truste-cp"><a href="#" onclick="truste.eu.clickListener();return false;">Cookie preferences</a></li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </footer>

        )
    }
}

export default Footer;