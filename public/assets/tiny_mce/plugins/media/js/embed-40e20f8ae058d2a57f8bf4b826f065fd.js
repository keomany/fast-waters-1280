function writeFlash(e){writeEmbed("D27CDB6E-AE6D-11cf-96B8-444553540000","http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,40,0","application/x-shockwave-flash",e)}function writeShockWave(e){writeEmbed("166B1BCA-3F9C-11CF-8075-444553540000","http://download.macromedia.com/pub/shockwave/cabs/director/sw.cab#version=8,5,1,0","application/x-director",e)}function writeQuickTime(e){writeEmbed("02BF25D5-8C17-4B23-BC80-D3488ABDDC6B","http://www.apple.com/qtactivex/qtplugin.cab#version=6,0,2,0","video/quicktime",e)}function writeRealMedia(e){writeEmbed("CFCDAA03-8BE4-11cf-B84B-0020AFBBCCFA","http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,40,0","audio/x-pn-realaudio-plugin",e)}function writeWindowsMedia(e){e.url=e.src,writeEmbed("6BF52A52-394A-11D3-B153-00C04F79FAA6","http://activex.microsoft.com/activex/controls/mplayer/en/nsmp2inf.cab#Version=5,1,52,701","application/x-mplayer2",e)}function writeEmbed(e,i,a,t){var o,n="";n+='<object classid="clsid:'+e+'" codebase="'+i+'"',n+="undefined"!=typeof t.id?'id="'+t.id+'"':"",n+="undefined"!=typeof t.name?'name="'+t.name+'"':"",n+="undefined"!=typeof t.width?'width="'+t.width+'"':"",n+="undefined"!=typeof t.height?'height="'+t.height+'"':"",n+="undefined"!=typeof t.align?'align="'+t.align+'"':"",n+=">";for(o in t)n+='<param name="'+o+'" value="'+t[o]+'">';n+='<embed type="'+a+'"';for(o in t)n+=o+'="'+t[o]+'" ';n+="></embed></object>",document.write(n)}