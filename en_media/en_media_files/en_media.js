// Created by iWeb 3.0.4 local-build-20160130

function createMediaStream_id13()
{return IWCreateMediaCollection("http://www.kiyoikaze.org/Kiyoikaze/en_media/en_media_files/rss.xml",true,255,["No photos yet","%d photo","%d photos"],["","%d clip","%d clips"]);}
function initializeMediaStream_id13()
{createMediaStream_id13().load('http://www.kiyoikaze.org/Kiyoikaze/en_media',function(imageStream)
{var entryCount=imageStream.length;var headerView=widgets['widget4'];headerView.setPreferenceForKey(imageStream.length,'entryCount');NotificationCenter.postNotification(new IWNotification('SetPage','id13',{pageIndex:0}));});}
function layoutMediaGrid_id13(range)
{createMediaStream_id13().load('http://www.kiyoikaze.org/Kiyoikaze/en_media',function(imageStream)
{if(range==null)
{range=new IWRange(0,imageStream.length);}
IWLayoutPhotoGrid('id13',new IWPhotoGridLayout(4,new IWSize(194,145),new IWSize(194,32),new IWSize(242,192),27,27,0,new IWSize(18,17)),new IWPhotoFrame([IWCreateImage('en_media_files/ul.png'),IWCreateImage('en_media_files/top.png'),IWCreateImage('en_media_files/ur.png'),IWCreateImage('en_media_files/right.png'),IWCreateImage('en_media_files/lr.png'),IWCreateImage('en_media_files/bottom.png'),IWCreateImage('en_media_files/ll.png'),IWCreateImage('en_media_files/left.png')],null,0,0.300000,130.000000,10.000000,118.000000,45.000000,147.000000,30.000000,157.000000,83.000000,251.000000,120.000000,260.000000,120.000000,null,null,null,0.300000),imageStream,range,(null),null,1.000000,null,'../Media/slideshow.html','widget4',null,'widget5',{showTitle:true,showMetric:true})});}
function relayoutMediaGrid_id13(notification)
{var userInfo=notification.userInfo();var range=userInfo['range'];layoutMediaGrid_id13(range);}
function onStubPage()
{var args=window.location.href.toQueryParams();parent.IWMediaStreamPhotoPageSetMediaStream(createMediaStream_id13(),args.id);}
if(window.stubPage)
{onStubPage();}
setTransparentGifURL('../Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWEmptyStroke()});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{IWRegisterNamedImage('comment overlay','../Media/Photo-Overlay-Comment.png')
IWRegisterNamedImage('movie overlay','../Media/Photo-Overlay-Movie.png')
loadMozillaCSS('en_media_files/en_mediaMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');adjustLineHeightIfTooBig('id4');adjustFontSizeIfTooBig('id4');adjustLineHeightIfTooBig('id5');adjustFontSizeIfTooBig('id5');adjustLineHeightIfTooBig('id6');adjustFontSizeIfTooBig('id6');adjustLineHeightIfTooBig('id7');adjustFontSizeIfTooBig('id7');adjustLineHeightIfTooBig('id8');adjustFontSizeIfTooBig('id8');adjustLineHeightIfTooBig('id9');adjustFontSizeIfTooBig('id9');adjustLineHeightIfTooBig('id10');adjustFontSizeIfTooBig('id10');adjustLineHeightIfTooBig('id11');adjustFontSizeIfTooBig('id11');adjustLineHeightIfTooBig('id12');adjustFontSizeIfTooBig('id12');NotificationCenter.addObserver(null,relayoutMediaGrid_id13,'RangeChanged','id13')
adjustLineHeightIfTooBig('id14');adjustFontSizeIfTooBig('id14');fixAllIEPNGs('../Media/transparent.gif');Widget.onload();applyEffects()
initializeMediaStream_id13()}
function onPageUnload()
{Widget.onunload();}
