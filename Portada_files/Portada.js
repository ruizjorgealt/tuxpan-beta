// Created by iWeb 3.0.1 local-build-20100805

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({shadow_1:new IWShadow({blurRadius:10,offset:new IWPoint(0.0000,0.0000),color:'#ffffff',opacity:0.440000}),reflection_0:new IWReflection({opacity:0.50,offset:1.00}),stroke_0:new IWStrokeParts([{rect:new IWRect(-1,1,2,98),url:'Portada_files/stroke.png'},{rect:new IWRect(-1,-1,2,2),url:'Portada_files/stroke_1.png'},{rect:new IWRect(1,-1,718,2),url:'Portada_files/stroke_2.png'},{rect:new IWRect(719,-1,2,2),url:'Portada_files/stroke_3.png'},{rect:new IWRect(719,1,2,98),url:'Portada_files/stroke_4.png'},{rect:new IWRect(719,99,2,2),url:'Portada_files/stroke_5.png'},{rect:new IWRect(1,99,718,2),url:'Portada_files/stroke_6.png'},{rect:new IWRect(-1,99,2,2),url:'Portada_files/stroke_7.png'}],new IWSize(720,100)),shadow_2:new IWShadow({blurRadius:27,offset:new IWPoint(0.0000,0.0000),color:'#ffffff',opacity:1.000000}),shadow_0:new IWShadow({blurRadius:27,offset:new IWPoint(0.0000,0.0000),color:'#ffffff',opacity:1.000000})});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Portada_files/PortadaMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');fixAllIEPNGs('Media/transparent.gif');Widget.onload();fixupAllIEPNGBGs();fixupIECSS3Opacity('id4');applyEffects()}
function onPageUnload()
{Widget.onunload();}
