// Created by iWeb 3.0.1 local-build-20100623

function createMediaStream_id2()
{return IWCreatePhotocast("file://localhost/Users/Jorge/Dropbox/Public/Gente%20de%20Tuxpan%20Nayarit/Site/Fotos/Pages/Colaboracion_de_Rafael_Martinez_Ahuamada_files/rss.xml",true);}
function initializeMediaStream_id2()
{createMediaStream_id2().load('file://localhost/Users/Jorge/Dropbox/Public/Gente%20de%20Tuxpan%20Nayarit/Site/Fotos/Pages',function(imageStream)
{var entryCount=imageStream.length;var headerView=widgets['widget1'];headerView.setPreferenceForKey(imageStream.length,'entryCount');NotificationCenter.postNotification(new IWNotification('SetPage','id2',{pageIndex:0}));});}
function layoutMediaGrid_id2(range)
{createMediaStream_id2().load('file://localhost/Users/Jorge/Dropbox/Public/Gente%20de%20Tuxpan%20Nayarit/Site/Fotos/Pages',function(imageStream)
{if(range==null)
{range=new IWRange(0,imageStream.length);}
IWLayoutPhotoGrid('id2',new IWPhotoGridLayout(3,new IWSize(202,202),new IWSize(202,0),new IWSize(224,217),27,27,0,new IWSize(-2,10)),new IWPhotoFrame([IWCreateImage('Colaboracion_de_Rafael_Martinez_Ahuamada_files/GraphPaper_01.png'),IWCreateImage('Colaboracion_de_Rafael_Martinez_Ahuamada_files/GraphPaper_02.png'),IWCreateImage('Colaboracion_de_Rafael_Martinez_Ahuamada_files/GraphPaper_01_1.png'),IWCreateImage('Colaboracion_de_Rafael_Martinez_Ahuamada_files/GraphPaper_01_2.png'),IWCreateImage('Colaboracion_de_Rafael_Martinez_Ahuamada_files/GraphPaper_09.png'),IWCreateImage('Colaboracion_de_Rafael_Martinez_Ahuamada_files/GraphPaper_08.png'),IWCreateImage('Colaboracion_de_Rafael_Martinez_Ahuamada_files/GraphPaper_07.png'),IWCreateImage('Colaboracion_de_Rafael_Martinez_Ahuamada_files/GraphPaper_01_3.png')],null,0,0.400000,90.000000,0.000000,90.000000,0.000000,89.000000,11.000000,89.000000,7.000000,11.000000,11.000000,11.000000,11.000000,'Colaboracion_de_Rafael_Martinez_Ahuamada_files/graphpaper_tape.png',new IWPoint(0.500000,0),new IWSize(155,47),0.300000),imageStream,range,null,null,1.000000,{backgroundColor:'rgb(0, 0, 0)',reflectionHeight:100,reflectionOffset:2,captionHeight:100,fullScreen:0,transitionIndex:2},'../../Media/slideshow.html','widget1','widget2','widget3')});}
function relayoutMediaGrid_id2(notification)
{var userInfo=notification.userInfo();var range=userInfo['range'];layoutMediaGrid_id2(range);}
function onStubPage()
{var args=window.location.href.toQueryParams();parent.IWMediaStreamPhotoPageSetMediaStream(createMediaStream_id2(),args.id);}
if(window.stubPage)
{onStubPage();}
setTransparentGifURL('../../Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({shadow_1:new IWShadow({blurRadius:11,offset:new IWPoint(10.6066,10.6066),color:'#000000',opacity:0.440000}),stroke_0:new IWPhotoFrame([IWCreateImage('Colaboracion_de_Rafael_Martinez_Ahuamada_files/Crayon_BK_v4%20%2801%29.png'),IWCreateImage('Colaboracion_de_Rafael_Martinez_Ahuamada_files/Crayon_BK_v4%20%2802%29.png'),IWCreateImage('Colaboracion_de_Rafael_Martinez_Ahuamada_files/Crayon_BK_v4%20%2803%29.png'),IWCreateImage('Colaboracion_de_Rafael_Martinez_Ahuamada_files/Crayon_BK_v4%20%2805%29.png'),IWCreateImage('Colaboracion_de_Rafael_Martinez_Ahuamada_files/Crayon_BK_v4%20%2808%29.png'),IWCreateImage('Colaboracion_de_Rafael_Martinez_Ahuamada_files/Crayon_BK_v4%20%2807%29.png'),IWCreateImage('Colaboracion_de_Rafael_Martinez_Ahuamada_files/Crayon_BK_v4%20%2806%29.png'),IWCreateImage('Colaboracion_de_Rafael_Martinez_Ahuamada_files/Crayon_BK_v4%20%2804%29.png')],null,0,0.250000,19.000000,19.000000,19.000000,19.000000,41.000000,41.000000,41.000000,41.000000,2.000000,1.000000,2.000000,1.000000,null,null,null,0.100000),shadow_0:new IWShadow({blurRadius:7,offset:new IWPoint(4.9497,4.9497),color:'#000000',opacity:0.440000})});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{IWRegisterNamedImage('comment overlay','../../Media/Photo-Overlay-Comment.png')
IWRegisterNamedImage('movie overlay','../../Media/Photo-Overlay-Movie.png')
loadMozillaCSS('Colaboracion_de_Rafael_Martinez_Ahuamada_files/Colaboracion_de_Rafael_Martinez_AhuamadaMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');NotificationCenter.addObserver(null,relayoutMediaGrid_id2,'RangeChanged','id2')
fixAllIEPNGs('../../Media/transparent.gif');Widget.onload();applyEffects()
initializeMediaStream_id2()}
function onPageUnload()
{Widget.onunload();}
