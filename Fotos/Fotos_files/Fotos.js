// Created by iWeb 3.0.1 local-build-20100805

function createMediaStream_id2()
{return IWCreateMediaCollection("file://localhost/Users/Jorge/Dropbox/Public/Gente%20de%20Tuxpan%20Nayarit/Site/Fotos/Fotos_files/rss.xml",true,0,["No photos yet","%d photo","%d photos"],["","%d clip","%d clips"]);}
function initializeMediaStream_id2()
{createMediaStream_id2().load('file://localhost/Users/Jorge/Dropbox/Public/Gente%20de%20Tuxpan%20Nayarit/Site/Fotos',function(imageStream)
{var entryCount=imageStream.length;var headerView=widgets['widget9'];headerView.setPreferenceForKey(imageStream.length,'entryCount');NotificationCenter.postNotification(new IWNotification('SetPage','id2',{pageIndex:0}));});}
function layoutMediaGrid_id2(range)
{createMediaStream_id2().load('file://localhost/Users/Jorge/Dropbox/Public/Gente%20de%20Tuxpan%20Nayarit/Site/Fotos',function(imageStream)
{if(range==null)
{range=new IWRange(0,imageStream.length);}
IWLayoutPhotoGrid('id2',new IWPhotoGridLayout(2,new IWSize(309,232),new IWSize(309,49),new IWSize(309,296),27,27,0,new IWSize(108,95)),new IWPhotoFrame([IWCreateImage('Fotos_files/spiralbook-creme_ul.png'),IWCreateImage('Fotos_files/spiralbook-creme_top.png'),IWCreateImage('Fotos_files/spiralbook-creme_ur.png'),IWCreateImage('Fotos_files/spiralbook-creme_right.png'),IWCreateImage('Fotos_files/spiralbook-creme_lr.png'),IWCreateImage('Fotos_files/spiralbook-creme_bottom.png'),IWCreateImage('Fotos_files/spiralbook-creme_ll.png'),IWCreateImage('Fotos_files/spiralbook-creme_left.png')],null,1,1.000000,15.000000,0.000000,0.000000,0.000000,83.000000,40.000000,40.000000,55.000000,106.000000,40.000000,40.000000,32.000000,null,null,null,0.300000),imageStream,range,(null),null,1.000000,null,'../Media/slideshow.html','widget9',null,'widget10',{showTitle:true,showMetric:false})});}
function relayoutMediaGrid_id2(notification)
{var userInfo=notification.userInfo();var range=userInfo['range'];layoutMediaGrid_id2(range);}
function onStubPage()
{var args=window.location.href.toQueryParams();parent.IWMediaStreamPhotoPageSetMediaStream(createMediaStream_id2(),args.id);}
if(window.stubPage)
{onStubPage();}
setTransparentGifURL('../Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWPhotoFrame([IWCreateImage('Fotos_files/Crayon_BK_v4%20%2801%29.png'),IWCreateImage('Fotos_files/Crayon_BK_v4%20%2802%29.png'),IWCreateImage('Fotos_files/Crayon_BK_v4%20%2803%29.png'),IWCreateImage('Fotos_files/Crayon_BK_v4%20%2805%29.png'),IWCreateImage('Fotos_files/Crayon_BK_v4%20%2808%29.png'),IWCreateImage('Fotos_files/Crayon_BK_v4%20%2807%29.png'),IWCreateImage('Fotos_files/Crayon_BK_v4%20%2806%29.png'),IWCreateImage('Fotos_files/Crayon_BK_v4%20%2804%29.png')],null,0,0.250000,19.000000,19.000000,19.000000,19.000000,41.000000,41.000000,41.000000,41.000000,2.000000,1.000000,2.000000,1.000000,null,null,null,0.100000)});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{IWRegisterNamedImage('comment overlay','../Media/Photo-Overlay-Comment.png')
IWRegisterNamedImage('movie overlay','../Media/Photo-Overlay-Movie.png')
loadMozillaCSS('Fotos_files/FotosMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');NotificationCenter.addObserver(null,relayoutMediaGrid_id2,'RangeChanged','id2')
fixAllIEPNGs('../Media/transparent.gif');Widget.onload();fixupAllIEPNGBGs();applyEffects()
initializeMediaStream_id2()}
function onPageUnload()
{Widget.onunload();}
