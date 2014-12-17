/*
 * Copyright (c) 2007-2014 Kaazing Corporation. All rights reserved.
 * 
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 * 
 *   http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

"use strict";function checkBrowserVersion(){var a={Explorer:{Windows:"9"},Chrome:{Windows:"26",Mac:"26",Linux:"26",Android:"26",iPad:"26"},Firefox:{Windows:"22",Mac:"22",Android:"15",Linux:"22"},Safari:{Mac:"6",Linux:"22"}},b={OS:BrowserDetect.OS,browser:BrowserDetect.browser,version:BrowserDetect.version,supported:!1,minSupported:-1},c=a[b.browser];if(c){var d=c[b.OS];if(d){b.minSupported=d,d=d.split(".");for(var e=(""+b.version).split("."),f=Math.min(d.length,e.length),g,h,i=0;f>i&&(g=e[i],h=d[i],!isNaN(parseFloat(g))&&isFinite(g)&&(g=parseInt(g),h=parseInt(h)),!(h>g));i++){if(g>h){b.supported=!0;break}if(i==f-1&&d.length<=e.length){b.supported=!0;break}}}}return b}var BrowserDetect={init:function(){this.browser=this.searchString(this.dataBrowser)||"An unknown browser",this.version=this.searchVersion(navigator.userAgent)||this.searchVersion(navigator.appVersion)||"an unknown version",this.OS=this.searchString(this.dataOS)||"an unknown OS",this.mobile=navigator.userAgent.toLowerCase().indexOf("mobile")>=0},searchString:function(a){for(var b=0;b<a.length;b++){var c=a[b].string,d=a[b].prop;if(this.versionSearchString=a[b].versionSearch||a[b].identity,c){if(-1!=c.indexOf(a[b].subString))return a[b].identity}else if(d)return a[b].identity}},searchVersion:function(a){var b=a.indexOf(this.versionSearchString);if(-1!=b)return parseFloat(a.substring(b+this.versionSearchString.length+1))},dataBrowser:[{string:navigator.userAgent,subString:"Chrome",identity:"Chrome"},{string:navigator.userAgent,subString:"CriOS",identity:"Chrome"},{string:navigator.userAgent,subString:"OmniWeb",versionSearch:"OmniWeb/",identity:"OmniWeb"},{string:navigator.vendor,subString:"Apple",identity:"Safari",versionSearch:"Version"},{string:navigator.vendor,subString:"Google",identity:"Safari",versionSearch:"Version"},{prop:window.opera,identity:"Opera",versionSearch:"Version"},{string:navigator.vendor,subString:"iCab",identity:"iCab"},{string:navigator.vendor,subString:"KDE",identity:"Konqueror"},{string:navigator.userAgent,subString:"Firefox",identity:"Firefox"},{string:navigator.vendor,subString:"Camino",identity:"Camino"},{string:navigator.userAgent,subString:"Netscape",identity:"Netscape"},{string:navigator.userAgent,subString:"MSIE",identity:"Explorer",versionSearch:"MSIE"},{string:navigator.userAgent,subString:"Trident/",identity:"Explorer",versionSearch:"rv"},{string:navigator.userAgent,subString:"Gecko",identity:"Mozilla",versionSearch:"rv"},{string:navigator.userAgent,subString:"Mozilla",identity:"Netscape",versionSearch:"Mozilla"}],dataOS:[{string:navigator.platform,subString:"Win",identity:"Windows"},{string:navigator.platform,subString:"Mac",identity:"Mac"},{string:navigator.userAgent,subString:"Android",identity:"Android"},{string:navigator.platform,subString:"iPad",identity:"iPad"},{string:navigator.platform,subString:"iPhone",identity:"iPhone"},{string:navigator.platform,subString:"iPod",identity:"iPod"},{string:navigator.platform,subString:"Linux",identity:"Linux"}]};BrowserDetect.init();var browserInfo=checkBrowserVersion();browserInfo.supported||(window.location="unsupported_browser.html?browser="+browserInfo.browser+"&os="+browserInfo.OS+"&version="+browserInfo.version+"&min="+browserInfo.minSupported);