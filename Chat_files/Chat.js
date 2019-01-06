// Created by iWeb 3.0.1 local-build-20100804

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({shadow_0:new IWShadow({blurRadius:4,offset:new IWPoint(-0.0000,2.0000),color:'#000000',opacity:0.440000}),stroke_0:new IWPhotoFrame([IWCreateImage('Chat_files/Crayon_BK_v4%20%2801%29.png'),IWCreateImage('Chat_files/Crayon_BK_v4%20%2802%29.png'),IWCreateImage('Chat_files/Crayon_BK_v4%20%2803%29.png'),IWCreateImage('Chat_files/Crayon_BK_v4%20%2805%29.png'),IWCreateImage('Chat_files/Crayon_BK_v4%20%2808%29.png'),IWCreateImage('Chat_files/Crayon_BK_v4%20%2807%29.png'),IWCreateImage('Chat_files/Crayon_BK_v4%20%2806%29.png'),IWCreateImage('Chat_files/Crayon_BK_v4%20%2804%29.png')],null,0,0.250000,19.000000,19.000000,19.000000,19.000000,41.000000,41.000000,41.000000,41.000000,2.000000,1.000000,2.000000,1.000000,null,null,null,0.100000)});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Chat_files/ChatMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');detectBrowser();fixAllIEPNGs('Media/transparent.gif');Widget.onload();applyEffects()}
function onPageUnload()
{Widget.onunload();}
