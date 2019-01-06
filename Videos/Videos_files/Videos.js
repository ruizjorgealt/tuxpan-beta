// Created by iWeb 3.0.1 local-build-20100623

setTransparentGifURL('../Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({shadow_3:new IWShadow({blurRadius:14,offset:new IWPoint(1.4142,1.4142),color:'#000000',opacity:0.440000}),shadow_0:new IWShadow({blurRadius:13,offset:new IWPoint(1.4142,1.4142),color:'#000000',opacity:0.440000}),shadow_4:new IWShadow({blurRadius:9,offset:new IWPoint(5.6569,5.6569),color:'#000000',opacity:0.440000}),stroke_0:new IWPhotoFrame([IWCreateImage('Videos_files/Crayon_BK_v4%20%2801%29.png'),IWCreateImage('Videos_files/Crayon_BK_v4%20%2802%29.png'),IWCreateImage('Videos_files/Crayon_BK_v4%20%2803%29.png'),IWCreateImage('Videos_files/Crayon_BK_v4%20%2805%29.png'),IWCreateImage('Videos_files/Crayon_BK_v4%20%2808%29.png'),IWCreateImage('Videos_files/Crayon_BK_v4%20%2807%29.png'),IWCreateImage('Videos_files/Crayon_BK_v4%20%2806%29.png'),IWCreateImage('Videos_files/Crayon_BK_v4%20%2804%29.png')],null,0,0.250000,19.000000,19.000000,19.000000,19.000000,41.000000,41.000000,41.000000,41.000000,2.000000,1.000000,2.000000,1.000000,null,null,null,0.100000),shadow_1:new IWShadow({blurRadius:12,offset:new IWPoint(1.4142,1.4142),color:'#000000',opacity:0.600000}),shadow_5:new IWShadow({blurRadius:11,offset:new IWPoint(4.2426,4.2426),color:'#ffffff',opacity:1.000000}),shadow_2:new IWShadow({blurRadius:14,offset:new IWPoint(1.4142,1.4142),color:'#000000',opacity:0.440000})});registry.applyEffects();}
function hostedOnDM()
{return false;}
function photocastSubscribe()
{photocastHelper("file://localhost/Users/Jorge/Dropbox/Public/Gente%20de%20Tuxpan%20Nayarit/Site/Videos/rss.xml");}
function onPageLoad()
{loadMozillaCSS('Videos_files/VideosMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');detectBrowser();fixAllIEPNGs('../Media/transparent.gif');Widget.onload();fixupAllIEPNGBGs();applyEffects()}
function onPageUnload()
{Widget.onunload();}
