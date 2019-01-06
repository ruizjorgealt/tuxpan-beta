// Created by iWeb 3.0.1 local-build-20100623

function createMediaStream_id2()
{return IWCreatePhotocast("file://localhost/Users/Jorge/Dropbox/Public/Gente%20de%20Tuxpan%20Nayarit/Site/Fotos/Pages/Dia_de_los_Muertos_files/rss.xml",true);}
function initializeMediaStream_id2()
{createMediaStream_id2().load('file://localhost/Users/Jorge/Dropbox/Public/Gente%20de%20Tuxpan%20Nayarit/Site/Fotos/Pages',function(imageStream)
{var entryCount=imageStream.length;var headerView=widgets['widget1'];headerView.setPreferenceForKey(imageStream.length,'entryCount');NotificationCenter.postNotification(new IWNotification('SetPage','id2',{pageIndex:0}));});}
function layoutMediaGrid_id2(range)
{createMediaStream_id2().load('file://localhost/Users/Jorge/Dropbox/Public/Gente%20de%20Tuxpan%20Nayarit/Site/Fotos/Pages',function(imageStream)
{if(range==null)
{range=new IWRange(0,imageStream.length);}
IWLayoutPhotoGrid('id2',new IWPhotoGridLayout(2,new IWSize(305,305),new IWSize(305,0),new IWSize(305,320),27,27,0,new IWSize(31,34)),new IWPhotoFrame([IWCreateImage('Dia_de_los_Muertos_files/Freestyle_01.png'),IWCreateImage('Dia_de_los_Muertos_files/Freestyle_02.png'),IWCreateImage('Dia_de_los_Muertos_files/Freestyle_03.png'),IWCreateImage('Dia_de_los_Muertos_files/Freestyle_06.png'),IWCreateImage('Dia_de_los_Muertos_files/Freestyle_09.png'),IWCreateImage('Dia_de_los_Muertos_files/Freestyle_08.png'),IWCreateImage('Dia_de_los_Muertos_files/Freestyle_07.png'),IWCreateImage('Dia_de_los_Muertos_files/Freestyle_04.png')],null,2,0.800000,3.000000,3.000000,3.000000,3.000000,22.000000,24.000000,23.000000,25.000000,166.000000,222.000000,166.000000,222.000000,null,null,null,0.100000),imageStream,range,null,null,1.000000,{backgroundColor:'rgb(0, 0, 0)',reflectionHeight:100,reflectionOffset:2,captionHeight:100,fullScreen:0,transitionIndex:2},'../../Media/slideshow.html','widget1','widget2','widget3')});}
function relayoutMediaGrid_id2(notification)
{var userInfo=notification.userInfo();var range=userInfo['range'];layoutMediaGrid_id2(range);}
function onStubPage()
{var args=window.location.href.toQueryParams();parent.IWMediaStreamPhotoPageSetMediaStream(createMediaStream_id2(),args.id);}
if(window.stubPage)
{onStubPage();}
setTransparentGifURL('../../Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({shadow_0:new IWShadow({blurRadius:1,offset:new IWPoint(1.4142,1.4142),color:'#000000',opacity:0.440000}),stroke_0:new IWPhotoFrame([IWCreateImage('Dia_de_los_Muertos_files/Crayon_BK_v4%20%2801%29.png'),IWCreateImage('Dia_de_los_Muertos_files/Crayon_BK_v4%20%2802%29.png'),IWCreateImage('Dia_de_los_Muertos_files/Crayon_BK_v4%20%2803%29.png'),IWCreateImage('Dia_de_los_Muertos_files/Crayon_BK_v4%20%2805%29.png'),IWCreateImage('Dia_de_los_Muertos_files/Crayon_BK_v4%20%2808%29.png'),IWCreateImage('Dia_de_los_Muertos_files/Crayon_BK_v4%20%2807%29.png'),IWCreateImage('Dia_de_los_Muertos_files/Crayon_BK_v4%20%2806%29.png'),IWCreateImage('Dia_de_los_Muertos_files/Crayon_BK_v4%20%2804%29.png')],null,0,0.250000,19.000000,19.000000,19.000000,19.000000,41.000000,41.000000,41.000000,41.000000,2.000000,1.000000,2.000000,1.000000,null,null,null,0.100000),shadow_1:new IWShadow({blurRadius:7,offset:new IWPoint(4.9497,4.9497),color:'#000000',opacity:0.440000})});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{IWRegisterNamedImage('comment overlay','../../Media/Photo-Overlay-Comment.png')
IWRegisterNamedImage('movie overlay','../../Media/Photo-Overlay-Movie.png')
loadMozillaCSS('Dia_de_los_Muertos_files/Dia_de_los_MuertosMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');NotificationCenter.addObserver(null,relayoutMediaGrid_id2,'RangeChanged','id2')
fixAllIEPNGs('../../Media/transparent.gif');Widget.onload();applyEffects()
initializeMediaStream_id2()}
function onPageUnload()
{Widget.onunload();}
