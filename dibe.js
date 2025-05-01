let fontcss = document.createElement('style');
let darkcss = document.createElement('style');
let spimgurl = chrome.runtime.getURL('image/sp_img.png');
let spminurl = chrome.runtime.getURL('image/sp_minor_txt.png')
let spnumurl = chrome.runtime.getURL('image/sp_num.png')
let hidpi_css = undefined;

if(window.devicePixelRatio >= 2){
    let iconimgurl_2x = chrome.runtime.getURL('image/icon_img-2x.png');
    let spminurl_2x = chrome.runtime.getURL('image/sp_minor_txt-2x.png');
    let spimgurl_2x = chrome.runtime.getURL('image/sp_img-2x.png');
    let spnumurl_2x = chrome.runtime.getURL('image/sp_num-2x.png');
    let spsnsurl_2x = chrome.runtime.getURL('image/sp_sns-2x.png');
    let iconminiurl_2x = chrome.runtime.getURL('image/icon_mini-2x.png');
    let sploginouturl_2x = chrome.runtime.getURL('image/sp_loginout-2x.png');
    let spnftimgurl_2x = chrome.runtime.getURL('image/sp_nftimage-2x.png');

    hidpi_css = document.createElement('style');
    hidpi_css.type = "text/css";
    hidpi_css.textContent = ".icon_img {background-image: url(" + iconimgurl_2x + ") !important; background-size: 30px 910px !important;}\
    .ranking_tit {background-image: url(" + spminurl_2x + ") !important; background-size: 300px 300px !important;}\
    .sp_img {background-image: url(" + spimgurl_2x + ") !important; background-size: 300px 1300px !important;}\
    .txt_img {background: url(" + spminurl_2x + ") 0 -188px no-repeat !important; background-size: 300px 300px !important;}\
    .num_img {background-image: url(" + spnumurl_2x + ") !important; background-size: 20px 338px !important;}\
    .outsied_img {background-image: url(" + spminurl_2x + ") !important; background-size: 300px 300px !important;}\
    .btn_write.txt::before {background:url(" + spimgurl_2x + ") no-repeat -133px -1023px !important; background-size: 300px 1300px !important;}\
    .sp_loginout {background-image:url(" + sploginouturl_2x + ") !important; background-size: 50px 115px !important;}\
    .sp_image {background-image:url(" + spnftimgurl_2x + ") !important; background-size: 500px 500px !important;}\
    .sp_sns{background-image:url(" + spsnsurl_2x + ") !important; background-size: 198px 435px !important;}\
    .icon_mini {background:url(" + iconminiurl_2x + ") no-repeat 0 0 !important; background-size: 16px 12px !important;}\
    .listwrap .time_best .tab_btn:after {background:url(" + spimgurl_2x + ")no-repeat -109px -1047px !important; background-size: 300px 1300px !important;}\
    .listwrap .time_best .tab_btn.best.on:after{background-position: -133px -1047px !important;}\
    .listwrap .time_best .tab_btn.light.on:after{background-position:-133px -1071px !important;}\
    .listwrap .time_best .tab_btn.night.on:after{background-position:-109px -1071px !important;}\
    .noacs_img::after {background:url(" + spimgurl_2x + ") no-repeat -0px -590px !important; background-size: 300px 1300px !important;}\
    .noacs_img.sp_img {display:contents !important;}";
}

darkcss.type = 'text/css';
darkcss.textContent = "body, button, input, select, table, textarea{color:#e0e0e0 !important;}\
span, .gall_list .gall_num, .gall_list .gall_date, .gall_list .gall_count, .gall_list .gall_recommend,.comment_wrap,th,.view_content_wrap, .list .gall_list td{color:#acacac !important;}\
body, .left_content, .content_box, .issuebox, .login_box, .user_option, .dcfoot, .ad_bottom_list, .btn_recommend_box, .btn_hitgall, .btn_snsmore, .btn_report, .reply_box, .cmt_write_box, .minor_ranking_box {background-color:#222 !important;}\
.cmt_txt_cont textarea, .user_info_input input, .inner_search input, .bottom_array .select_area, .put_inquiry {background-color:#333 !important; border:none !important;}\
#write_wrap{border: 1px solid #484848 !important;}\
.write_subject {border: 1px solid #484848 !important;}\
.write_subject > .tit {background:#333 !important;}\
.subject_list .sel {background:#353a5a !important;}\
.tx-content-container, #tx_canvas_source {color:#e0e0e0 !important; background-color:#333 !important;}\
.rcont_wiki {background:none !important;}\
.newvisit_history {background:#2b2b2b !important; border:1px solid #484848 !important;}\
.newvisit_history::before {border:none !important;}\
.box_head, .cate_tit, .under_paging {background:#2b2b2b !important;}\
.page_head h2 a {color: #e0e0e0 !important;}\
.content_box .img_box img {filter: brightness(0.5);}\
.content_box .img_box img:hover {filter: brightness(1);}\
.content_box .img_box, .content_box .img_box {border: none !important;}\
.icon_img{filter:saturate(0.7);}\
.writer_nikcon img {filter: brightness(0.7);}\
.logo_img {filter: invert(1);}\
.writing_view_box img {filter: brightness(0.75) !important;}\
.writing_view_box video {filter: brightness(0.75) !important;}\
.written_dccon, .info_viewimg img, .img_dccon img, .logClass img {filter: brightness(0.85) !important;}\
.concept_imgbox img, .mintro_imgbox {filter: brightness(0.75) !important;}\
th{border-color: #353a5a !important;}\
.pop_wrap.file .pop_head, .pop_wrap .pop_head.bg{background: #353a5a !important;}\
.pop_wrap{border:1px solid #353a5a !important;}\
.gall_list{border-bottom:1px solid #353a5a!important;}\
.array_tab button.on, .btn_blue, .btn_lightpurple{background:#353a5a !important; border: none !important;}\
.gnb_bar, .depth2, .depthbox{background-color:#2b2b2b !important; border:none !important;}\
.login_box{border: 1px solid #353a5a !important;}\
.dc_all{border-top: 2px solid #353a5a !important; border-bottom: 1px solid #353a5a !important; border-left:1px solid #484848 !important; border-right:1px solid #484848 !important;}\
.bottom_search, .bottom_array{background:#353a5a !important; border:1px solid #353a5a !important}\
.top_search{background:#353a5a !important; border:none !important}\
.btn_visit{background: #353a5a !important; border-left: 2px solid #222222 !important;}\
.word_close{background: #353a5a !important;}\
.word_tit{background: #e0e0e0 !important;}\
.auto_wordwrap{border:2px solid #454c7b !important; background: #2b2b2b !important;}\
#search_type_txt{color: #e0e0e0 !important;}\
.right_content .page_num {color: #acacac !important;}\
.bottom_array .select_area .inner{background-color:#353a5a !important;}\
.content_box, .cmt_write_box, .issue_wrap {border-top:2px solid #353a5a !important;}\
.view_comment .cmt_write_box{border-bottom:2px soild #454c7b !important;}\
.visit_history .tit{color:#454c7b !important;}\
.center_box ul li a.on {border-radius: 3px !important; padding: 3px 3px 2px 3px !important; background: #353a5a !important;}\
.center_box ul li:first-child a{background:none! important;}\
.cmt_write_box .user_info_input.id > label {background: #333333 !important;}\
.cmt_delpw_box{border:2px solid #353a5a !important;}\
.cmt_bg_box {background:#333 !important; border:1px solid #484848 !important;}\
.btn_cmtpw_close{background: #353a5a !important;}\
.cmt_mdf_del .btn_ok, .cont_btnbox .btn_ok{background: #454c7b !important;}\
.option_box, .user_data_list{background: #333333 !important; border: 1px solid #484848 !important;}\
.user_data_list li{border-top: 1px solid #848484 !important;}\
.user_data_list li:first-child { border-top: none !important;}\
.pop_content.under_catelist{background:#333333 !important;}\
.pop_hot_mgall, .pop_hot_gall {background:#333333 !important;}\
.subject_morelist {background: #333333 !important; border: 1px #484848 solid !important;}\
.tbt.bg {background:#1d1d1d !important;}\
.crt {background: #1b1b1b !important;}\
.txt {color:#acacac !important;}\
.bg_grey{background-color:#e0e0e0 !important;}\
.bg_grey a{color:#333 !important;}\
.bg_jingrey{background-color:#333333 !important;}\
.font_lightblue {color: #525eaa !important;}\
.font_red {color: #d31900 !important;}\
.adult_report, .gall_report{color: #333 !important;}\
.info_txtlist{color: #acacac !important;}\
.icon_guide_open{width: 18px !important; height: 20px !important;}\
.option_box li{color:#e0e0e0 !important;}\
.gnb_list li a {color:#dfdfdf !important;}\
.gnb_list li a.on {color:#fff200 !important;}\
.mini_infotxt .head .tit.fl{color:#acacac !important;}\
.minicate_wrap .catehead .fl {color:#acacac !important;}\
.minicate_wrap .mini_new .tit.fl{color:#333 !important;}\
.minor_intro_box{color:#acacac !important;}\
.minor_ranking_box{border-left: 1px solid #484848 !important;}\
.miniwrap .img_contbox{border-right: 1px solid #484848 !important;}\
.block_tab button{color: #555555 !important;}\
.btn_enroll{color: #555555 !important;}\
.btn_white, .btn_whitepurple, .array_tab button{background:#484848 !important; border:none !important;}\
.btn_white_round {background:none !important;}\
.btn_grey_roundbg {background: #484848 !important; border:none !important;}\
.btn_cmt_refresh, .btn_cmt_close{color: #acacac !important;}\
.output_array .select_area, .select_box.array_latest, .select_arraybox{background: none !important; color:#e0e0e0 !important; border:1px solid #484848 !important;}\
.content_box, .array_tab button {border:1px solid #484848 !important;}\
a, .user_info{color:#acacac !important;}\
.album_txtbox{color:#acacac !important;}\
.font_red span{color: #d31900 !important;}\
.cmt_info, .reply_list li, .recom_bottom_box, .comment_wrap .bottom_paging_box {border-top:1px solid #484848 !important;}\
.btn_hitgall, .btn_snsmore, .btn_report {border-right:1px solid #484848 !important; text-shadow:none !important;}\
.dcwiki > button{background:none !important;}\
.gallview_head, .all_list{border-bottom:1px solid #484848 !important;}\
.gallview_head .gall_comment a{background:none !important;}\
.bnt_comment_more, .bnt_reply_more{color: #acacac !important;}\
.reply_box, .btn_recommend_box, .appending_file_box {border: 1px solid #484848 !important;}\
.all_list dl{border-left: 1px solid #484848 !important;}\
.all_list dt, .all_list dt a{color: #acacac !important;}\
.user_info_input, .cmt_write_box .kap_codeimg {border:none !important;}\
.list .gall_tit a:visited {color:#947ba5 !important;}\
tbody tr:hover{background-color:#484848 !important;}\
tbody td{border-top:1px solid #2d2d2d !important;}\
.album_head:hover, .album_body:hover{background:none !important;}\
.ip_pc {color: #6c946c !important;} .ip_mobile {color: #6e88b7 !important;} .ip_proxy {color: #af6969 !important;}\
.sp_img {background-image: url('" + spimgurl + "') !important;}\
.btn_cmt_delete{background:none !important; background-image: url('" + spimgurl + "') !important; background-position: -268px -200px !important;}\
.btn_add {color:#555555 !important;}\
.ranking_tit{background-image:url('" + spminurl + "') !important;}\
.txt_img{background:url('" + spminurl + "') 0 -188px no-repeat !important;}\
.outsied_img{background:url('" + spminurl + "') 0 -157px no-repeat !important;}\
.num_img{background-image:url('" + spnumurl + "') !important;}\
.content_box.img_upcont, .content_box.file_upcont{background:none !important;}\
.vote_wrap.makebox{background:#ffffff !important;}\
.noacs_img::after {background:url(" + spimgurl + ") no-repeat -0px -590px !important; background-size: 300px 1300px !important;}\
#article_loader {border: 6px solid #333333 !important; border-top: 6px solid #454c7b !important;}\
.noacs_img.sp_img {display:contents !important;}";

fontcss.type = "text/css";
fontcss.textContent = "body, button, input, select, table, textarea{\
font-family: Dotum,'돋움',Helvetica,\"Apple SD Gothic Neo\",sans-serif !important;}\
.put_inquiry, .input_box label{font-family: Gulim !important;}\
.gall_list{font-family:'굴림',Gulim !important;}\
.gall_list .gall_num, .gall_list .gall_date, .gall_list .gall_count, .gall_list .gall_recommend {\
font-family: tahoma,sans-serif !important;}\
.comment_wrap,.view_content_wrap {font-family: '굴림',Gulim !important;}\
th {font-family: Dotum,'돋움' !important;}";

chrome.storage.local.get(null, (item) => {
    if (item['isdefaultfont'] === true) {
        document.head.appendChild(fontcss);
    } 
    if (item['isdarkmode'] === true){
        document.head.appendChild(darkcss);
    } else {
        hidpi_css && document.head.appendChild(hidpi_css);
    }
});
