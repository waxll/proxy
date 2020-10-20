/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["C:/Users/XieSenshi/Desktop/Blog/public/2020/04/14/firstblog.html","3fcbad46f0d679663ea7838501b376c4"],["C:/Users/XieSenshi/Desktop/Blog/public/2020/05/04/blogjcjc.html","787942a004831efae65a95e440ace614"],["C:/Users/XieSenshi/Desktop/Blog/public/2020/05/04/ghsn.html","9ff75f1b531afed9211029dffd0a51a7"],["C:/Users/XieSenshi/Desktop/Blog/public/2020/07/25/a1.html","0a4856ce89a11de01903b6bffc5b9284"],["C:/Users/XieSenshi/Desktop/Blog/public/2020/07/25/a2.html","5bb2e4d04abe02d4cb83dec0f8e4b5a9"],["C:/Users/XieSenshi/Desktop/Blog/public/404.html","2c9f727fdf6edf186120d3f425f72381"],["C:/Users/XieSenshi/Desktop/Blog/public/404/index.html","8b237aee1f3795c473e586f4c9d5f645"],["C:/Users/XieSenshi/Desktop/Blog/public/about/index.html","e149e430abe693f8d2d873fe99e3eeae"],["C:/Users/XieSenshi/Desktop/Blog/public/archives/2020/04/index.html","1984d6247ff8d0631f38ee6cb71ad670"],["C:/Users/XieSenshi/Desktop/Blog/public/archives/2020/05/index.html","b34780f825219ac0a5ad126bf78372e0"],["C:/Users/XieSenshi/Desktop/Blog/public/archives/2020/07/index.html","a7bfb3c6b9893a33f298e843d0132cc7"],["C:/Users/XieSenshi/Desktop/Blog/public/archives/2020/index.html","ac9103e03b50e6f8adec71e34fde27e7"],["C:/Users/XieSenshi/Desktop/Blog/public/archives/index.html","013f3e6ceebe1f509ae1d087eae8f79c"],["C:/Users/XieSenshi/Desktop/Blog/public/blog/categories/index.html","dca9d8f2122a76d9145649717cb87e47"],["C:/Users/XieSenshi/Desktop/Blog/public/blog/tags/index.html","fda47d4ded731a3879a10f010e21972c"],["C:/Users/XieSenshi/Desktop/Blog/public/categories/Web/index.html","634194bb03e0ba993d4670acd74257e4"],["C:/Users/XieSenshi/Desktop/Blog/public/categories/index.html","9fa840f05b9885bc82e20239fe5ae95a"],["C:/Users/XieSenshi/Desktop/Blog/public/categories/单片机/index.html","0f5a03199ba6a9b42042862785cae0da"],["C:/Users/XieSenshi/Desktop/Blog/public/categories/博客搭建/index.html","7f8aeaf97df9ae0a3f293019e7283573"],["C:/Users/XieSenshi/Desktop/Blog/public/css/style.css","5178d3c1ef6685b66b2d873a42da8b98"],["C:/Users/XieSenshi/Desktop/Blog/public/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["C:/Users/XieSenshi/Desktop/Blog/public/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["C:/Users/XieSenshi/Desktop/Blog/public/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["C:/Users/XieSenshi/Desktop/Blog/public/friends/index.html","24756897bd1fafb0f1912910e29d3286"],["C:/Users/XieSenshi/Desktop/Blog/public/img/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["C:/Users/XieSenshi/Desktop/Blog/public/img/azure.svg","570248db796e292bf7b59a650cd079c8"],["C:/Users/XieSenshi/Desktop/Blog/public/img/baidu.svg","dc8c2616588c33ff4f70f43579c639d6"],["C:/Users/XieSenshi/Desktop/Blog/public/index.html","f8ba70eda168810b09c53d3d69c1021d"],["C:/Users/XieSenshi/Desktop/Blog/public/journal/index.html","b2c862b12748a6a8ca22a321a0aa204a"],["C:/Users/XieSenshi/Desktop/Blog/public/js/app.js","f8c9d4c7dc3bd0add4aef5099c806af6"],["C:/Users/XieSenshi/Desktop/Blog/public/js/dj.js","ebfb57bb650658a4c32494460d95a3e7"],["C:/Users/XieSenshi/Desktop/Blog/public/js/fireworks.js","08e171a2b442c5c25dc3efee6d418796"],["C:/Users/XieSenshi/Desktop/Blog/public/js/search.js","e9d8258f51e5d90e1b5a733d09ce2d35"],["C:/Users/XieSenshi/Desktop/Blog/public/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["C:/Users/XieSenshi/Desktop/Blog/public/mylist/index.html","7f126cacfaa36b2c212b7f06ac21186b"],["C:/Users/XieSenshi/Desktop/Blog/public/photo/index.html","d6ee002730b24acb68397172fc50aaaf"],["C:/Users/XieSenshi/Desktop/Blog/public/photo2/index.html","933bfeedf477d2263dc1949384ff54a8"],["C:/Users/XieSenshi/Desktop/Blog/public/photo3/index.html","d110d7fae21af997c62aaa0dd5a640e9"],["C:/Users/XieSenshi/Desktop/Blog/public/sw-register.js","0c12ef68abcbc3675bb1e1abbe833135"],["C:/Users/XieSenshi/Desktop/Blog/public/sw.js","df23fb8ac02301a1929dfda85ee1891c"],["C:/Users/XieSenshi/Desktop/Blog/public/tags/AT89C51/index.html","af2cc6833733317d15cf114d68c7fec9"],["C:/Users/XieSenshi/Desktop/Blog/public/tags/C51汇编/index.html","d48d25cdd663db83e0b2917136fbc62f"],["C:/Users/XieSenshi/Desktop/Blog/public/tags/Hexo/index.html","9f208a5f62bccfa7389994ed561e9bb0"],["C:/Users/XieSenshi/Desktop/Blog/public/tags/index.html","8cdf749b86b07759f459a019dc830d94"],["C:/Users/XieSenshi/Desktop/Blog/public/tags/js/index.html","dce91f32d9a445fdf182c9619817647b"],["C:/Users/XieSenshi/Desktop/Blog/public/鼠标点击效果/index.html","c98d44f20db47d4563565af83793a471"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







