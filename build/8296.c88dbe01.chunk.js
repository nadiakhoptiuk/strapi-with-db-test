"use strict";(self.webpackChunk_13_candles_cms=self.webpackChunk_13_candles_cms||[]).push([[8296],{1350:(D,i,t)=>{t.d(i,{a:()=>L});var n=t(67294),a=t(20297),o=t(14293),l=t.n(o),u=t(86896),d=t(16550),r=t(75021);const E="strapi-notification-seat-limit",m="https://cloud.strapi.io/profile/billing",_="https://strapi.io/billing/request-seats",L=()=>{const{formatMessage:e}=(0,u.Z)(),{license:f,isError:c,isLoading:T}=(0,r.q)(),g=(0,a.lm)(),{pathname:M}=(0,d.TH)(),{enforcementUserCount:C,permittedSeats:O,licenseLimitStatus:s,isHostedOnStrapiCloud:I}=f;n.useEffect(()=>{if(c||T)return;const A=!l()(O)&&!window.sessionStorage.getItem(`${E}-${M}`)&&(s==="AT_LIMIT"||s==="OVER_LIMIT");let P;s==="OVER_LIMIT"?P="warning":s==="AT_LIMIT"&&(P="softWarning"),A&&g({type:P,message:e({id:"notification.ee.warning.over-.message",defaultMessage:"Add seats to {licenseLimitStatus, select, OVER_LIMIT {invite} other {re-enable}} Users. If you already did it but it's not reflected in Strapi yet, make sure to restart your app."},{licenseLimitStatus:s}),title:e({id:"notification.ee.warning.at-seat-limit.title",defaultMessage:"{licenseLimitStatus, select, OVER_LIMIT {Over} other {At}} seat limit ({enforcementUserCount}/{permittedSeats})"},{licenseLimitStatus:s,enforcementUserCount:C,permittedSeats:O}),link:{url:I?m:_,label:e({id:"notification.ee.warning.seat-limit.link",defaultMessage:"{isHostedOnStrapiCloud, select, true {ADD SEATS} other {CONTACT SALES}}"},{isHostedOnStrapiCloud:I})},blockTransition:!0,onClose(){window.sessionStorage.setItem(`${E}-${M}`,"true")}})},[g,f,M,e,T,O,s,C,I,c])}},75021:(D,i,t)=>{t.d(i,{q:()=>l});var n=t(67294),a=t(20297),o=t(88767);function l({enabled:u}={enabled:!0}){const{get:d}=(0,a.kY)(),{data:r,isError:E,isLoading:m}=(0,o.useQuery)(["ee","license-limit-info"],async()=>{const{data:{data:e}}=await d("/admin/license-limit-information");return e},{enabled:u}),_=n.useMemo(()=>r??{},[r]),L=n.useCallback(e=>(_?.features??[]).find(c=>c.name===e)?.options??{},[_?.features]);return{license:_,getFeature:L,isError:E,isLoading:m}}},66831:(D,i,t)=>{t.r(i),t.d(i,{HomePageEE:()=>l});var n=t(67294),a=t(96753),o=t(1350);function l(){return(0,o.a)(),n.createElement(a.HomePageCE,null)}}}]);
