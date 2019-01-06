// Created by iWeb 3.0.1 local-build-20100623

function createMediaStream_id2()
{return IWCreatePhotocast("file://localhost/Users/Jorge/Dropbox/Public/Gente%20de%20Tuxpan%20Nayarit/Site/Fotos/Pages/17_de_Marzo_files/rss.xml",true);}
function initializeMediaStream_id2()
{createMediaStream_id2().load('file://localhost/Users/Jorge/Dropbox/Public/Gente%20de%20Tuxpan%20Nayarit/Site/Fotos/Pages',function(imageStream)
{var entryCount=imageStream.length;var headerView=widgets['widget1'];headerView.setPreferenceForKey(imageStream.length,'entryCount');NotificationCenter.postNotification(new IWNotification('SetPage','id2',{pageIndex:0}));});}
function layoutMediaGrid_id2(range)
{createMediaStream_id2().load('file://localhost/Users/Jorge/Dropbox/Public/Gente%20de%20Tuxpan%20Nayarit/Site/Fotos/Pages',function(imageStream)
{if(range==null)
{range=new IWRange(0,imageStream.length);}
IWLayoutPhotoGrid('id2',new IWPhotoGridLayout(2,new IWSize(254,254),new IWSize(254,0),new IWSize(305,269),27,27,0,new IWSize(28,26)),new IWPhotoFrame([IWCreateImage('17_de_Marzo_files/highlighter_ul.png'),IWCreateImage('17_de_Marzo_files/highlighter_top.png'),IWCreateImage('17_de_Marzo_files/highlighter_ur.png'),IWCreateImage('17_de_Marzo_files/highlighter_right.png'),IWCreateImage('17_de_Marzo_files/highlighter_lr.png'),IWCreateImage('17_de_Marzo_files/highlighter_bottom.png'),IWCreateImage('17_de_Marzo_files/highlighter_ll.png'),IWCreateImage('17_de_Marzo_files/highlighter_left.png')],null,1,0.900000,17.000000,24.000000,17.000000,24.000000,33.000000,38.000000,33.000000,38.000000,40.000000,40.000000,40.000000,40.000000,null,null,null,0.500000),imageStream,range,null,null,1.000000,{backgroundColor:'rgb(0, 0, 0)',reflectionHeight:100,reflectionOffset:2,captionHeight:100,fullScreen:0,transitionIndex:2},'../../Media/slideshow.html','widget1','widget2','widget3')});}
function relayoutMediaGrid_id2(notification)
{var userInfo=notification.userInfo();var range=userInfo['range'];layoutMediaGrid_id2(range);}
function onStubPage()
{var args=window.location.href.toQueryParams();parent.IWMediaStreamPhotoPageSetMediaStream(createMediaStream_id2(),args.id);}
if(window.stubPage)
{onStubPage();}
setTransparentGifURL('../../Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWPhotoFrame([IWCreateImage('17_de_Marzo_files/Crayon_BK_v4%20%2801%29.png'),IWCreateImage('17_de_Marzo_files/Crayon_BK_v4%20%2802%29.png'),IWCreateImage('17_de_Marzo_files/Crayon_BK_v4%20%2803%29.png'),IWCreateImage('17_de_Marzo_files/Crayon_BK_v4%20%2805%29.png'),IWCreateImage('17_de_Marzo_files/Crayon_BK_v4%20%2808%29.png'),IWCreateImage('17_de_Marzo_files/Crayon_BK_v4%20%2807%29.png'),IWCreateImage('17_de_Marzo_files/Crayon_BK_v4%20%2806%29.png'),IWCreateImage('17_de_Marzo_files/Crayon_BK_v4%20%2804%29.png')],null,0,0.250000,19.000000,19.000000,19.000000,19.000000,41.000000,41.000000,41.000000,41.000000,2.000000,1.000000,2.000000,1.000000,null,null,null,0.100000),shadow_0:new IWShadow({blurRadius:8,offset:new IWPoint(7.7782,7.7782),color:'#000000',opacity:0.440000}),shadow_2:new IWShadow({blurRadius:9,offset:new IWPoint(8.4853,8.4853),color:'#000000',opacity:0.440000}),shadow_1:new IWShadow({blurRadius:7,offset:new IWPoint(7.0711,7.0711),color:'#000000',opacity:0.440000})});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{IWRegisterNamedImage('comment overlay','../../Media/Photo-Overlay-Comment.png')
IWRegisterNamedImage('movie overlay','../../Media/Photo-Overlay-Movie.png')
loadMozillaCSS('17_de_Marzo_files/17_de_MarzoMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');NotificationCenter.addObserver(null,relayoutMediaGrid_id2,'RangeChanged','id2')
fixAllIEPNGs('../../Media/transparent.gif');Widget.onload();applyEffects()
initializeMediaStream_id2()}
function onPageUnload()
{Widget.onunload();}
