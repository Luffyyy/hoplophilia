import{r as I,c as l,a as c,o as f,b as w,d as n,e as m,w as g,u as s,F as x,f as y,i as P,g as C,h as S,j as k,k as $}from"./vendor.61d59770.js";const E=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerpolicy&&(i.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?i.credentials="include":a.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=t(a);fetch(a.href,i)}};E();const U={style:{"text-align":"center"}},M=n("img",{src:"https://media.discordapp.net/stickers/859988234376052746.png?size=160"},null,-1),A=["href","download"],H=n("img",{src:"https://media.discordapp.net/stickers/885973869167530015.png?size=64"},null,-1),R=n("span",{style:{"margin-top":"auto","margin-bottom":"auto"}},"Download",-1),q=[H,R],L=n("br",null,null,-1),O=n("br",null,null,-1),z=n("br",null,null,-1),B=y("		"),N=["innerHTML"],T=y(`
	`),j={setup(u){let e=I(""),t=l(()=>e.value.toLowerCase());const r=l(()=>C.highlight(i.value,{language:"xml"}).value),a=l(()=>"data:text/plain;charset=utf-8,"+encodeURIComponent(i.value)),i=l(()=>`<Items>
	<Item name="${e.value} Bullet" identifier="${t.value}round" category="Equipment" interactthroughwalls="true" cargocontaineridentifier="metalcrate" tags="smallitem" impactsoundtag="impact_metal_light" hideinmenus="true" scale="0.5">
		<InventoryIcon texture="Content/Items/InventoryIconAtlas.png" sourcerect="896,960,64,64" origin="0.5,0.5" />
		<Sprite texture="Content/Items/Weapons/weapons_new.png" sourcerect="195,282,17,6" depth="0.55" origin="0.5,0.5" />
		<Body width="40" height="14" density="40" />
		<Pickable slots="Any" msg="ItemMsgPickUpSelect"/>
		<Projectile characterusable="false" hitscan="true" removeonhit="true">
		<ParticleEmitter particle="tracerfirearm" particleamount="1" velocitymin="0" velocitymax="0" colormultiplier="255,255,115,175" scalemultiplier="1,0.6"/>
		<Attack structuredamage="0.95" targetforce="6" itemdamage="20" severlimbsprobability="0.05">
			<Affliction identifier="gunshotwound" strength="45" />
			<Affliction identifier="internaldamage" strength="35" />
			<Affliction identifier="stun" strength="0.10" />
		</Attack>
		<StatusEffect type="OnImpact" target="UseTarget">
			<ParticleEmitter particle="impactfirearm" particleamount="1" velocitymin="0" velocitymax="0" />
		</StatusEffect>
		<StatusEffect type="OnImpact" target="UseTarget">
			<Conditional entitytype="eq Structure"/>
			<Conditional hastag="eq door"/>
			<ParticleEmitter particle="spark" copyentityangle="true" anglemin="-10" anglemax="10" particleamount="5" velocitymin="-10" velocitymax="-200" scalemin="0.5" scalemax="1" />
		</StatusEffect>
		</Projectile>
		<Upgrade gameversion="0.10.0.0" scale="0.5" />
	</Item>
	
	<Item name="${e.value} Magazine" identifier="${t.value}mag" scale="0.5" category="Equipment" cargocontaineridentifier="metalcrate" linkable="true" tags="smallitem" impactsoundtag="impact_metal_light">
		<PreferredContainer primary="${t.value}" minamount="1" maxamount="1" spawnprobability="1"/>
		<PreferredContainer primary="secarmcab" minamount="0" maxamount="17" spawnprobability="0.25"/>
		<PreferredContainer primary="wrecksecarmcab" minamount="0" maxamount="4" spawnprobability="0.33"/>
		<PreferredContainer primary="abandonedsecarmcab" minamount="1" maxamount="2" spawnprobability="0.4"/>
		<Price baseprice="96" soldeverywhere="false">
		<Price locationtype="outpost" multiplier="1.5" sold="false"/>
		<Price locationtype="city" multiplier="1.25" minavailable="2" />
		<Price locationtype="research" multiplier="1.25" sold="false"/>
		<Price locationtype="military" multiplier="0.9" minavailable="4" />
		<Price locationtype="mine" multiplier="1.25" sold="false"/>
		</Price>
		<Deconstruct time="10">
		<Item identifier="plastic" copycondition="false"/>
		</Deconstruct>
		<InventoryIcon texture="Mods/Hoplophilia/${e.value}/${t.value}mag.png" sourcerect="0,0,64,64" />
		<Sprite texture="Mods/Hoplophilia/${e.value}/${t.value}mag.png" depth="0.54" sourcerect="0,0,64,64" origin="0.5,0.5" />
		<Body width="30" height="40" density="50" />
		<ItemContainer hideitems="true" capacity="1" drawinventory="false" canbeselected="false" ShowConditionInContainedStateIndicator="true" SpawnWithId="${t.value}round" removecontaineditemsondeconstruct="true" containedstateindicatorstyle="bullet">
		<Containable items="${t.value}round" />
		<!--Spawn an SMG round on use. Condition -5.0 -> 20 shots per magazine.-->
		<StatusEffect type="OnUse" target="This" condition="-5.8" disabledeltatime="true">
			<SpawnItem identifiers="${t.value}round" spawnposition="ThisInventory" />
		</StatusEffect>
		</ItemContainer>
		<!--Magazines can be combined to raise condition.-->
		<Holdable canBeCombined="true" slots="Any,RightHand,LeftHand" handle1="0,0" msg="ItemMsgPickUpSelect" />
		<Upgrade gameversion="0.10.0.0" scale="0.5" />
	</Item>
	
	<Item name="${e.value}" identifier="${t.value}" category="Equipment" cargocontaineridentifier="metalcrate" tags="smallitem,weapon,gun" Scale="0.5" impactsoundtag="impact_metal_light">
		<PreferredContainer primary="weaponholder" spawnprobability="0.2"/>
		<PreferredContainer primary="secarmcab" minamount="1" maxamount="3" spawnprobability="1"/>
		<PreferredContainer primary="wrecksecarmcab" minamount="0" maxamount="2" spawnprobability="0.33"/>
		<PreferredContainer primary="abandonedsecarmcab" minamount="1" maxamount="1" spawnprobability="0.4"/>
		<Price baseprice="250" soldeverywhere="false">
		<Price locationtype="outpost" multiplier="1.5" sold="false"/>
		<Price locationtype="city" multiplier="1.25" minavailable="1" />
		<Price locationtype="research" multiplier="1.25" sold="false"/>
		<Price locationtype="military" multiplier="0.9" minavailable="3" />
		<Price locationtype="mine" multiplier="1.25" sold="false"/>
		</Price>
		<Deconstruct time="10">
		<Item identifier="steel" />
		<Item identifier="plastic" />
		</Deconstruct>
		<InventoryIcon texture="Mods/Hoplophilia/${e.value}/${t.value}.png" sourcerect="0,0,64,64" origin="0.5,0.5" />
		<Sprite texture="Mods/Hoplophilia/${e.value}/${t.value}.png" sourcerect="0,0,64,64" depth="0.55" origin="0.5,0.5" />
		<Body width="72" height="40" density="50" />
		<Holdable slots="Any,RightHand,LeftHand" controlpose="true" aimpos="90,10" handle1="-10,-6" msg="ItemMsgPickUpSelect" />
		<RangedWeapon barrelpos="6,10" spread="0" unskilledspread="2" combatPriority="70" drawhudwhenequipped="true" crosshairscale="0.2" reload="0.5">
		<Crosshair texture="Content/Items/Weapons/Crosshairs.png" sourcerect="0,256,256,256" />
		<CrosshairPointer texture="Content/Items/Weapons/Crosshairs.png" sourcerect="256,256,256,256" />
		<ParticleEmitter particle="muzzleflash" particleamount="1" velocitymin="0" velocitymax="0" />
			<Sound file="Mods/Hoplophilia/${e.value}/${t.value}.ogg" type="OnUse" range="3000" />
		<StatusEffect type="OnUse">
			<Explosion range="150.0" force="3" shockwave="false" smoke="false" flames="false" flash="false" sparks="false" underwaterbubble="false" camerashake="1.5" />
		</StatusEffect>
		<!--"Use" contained magazine to spawn projectiles.-->
		<StatusEffect type="OnUse" target="Contained">
			<Use />
		</StatusEffect>
		<RequiredItems items="${t.value}mag" type="Contained" msg="ItemMsgAmmoRequired" />
		<RequiredSkill identifier="weapons" level="30" />
		</RangedWeapon>
		<ItemContainer capacity="1" maxstacksize="1" hideitems="true" containedstateindicatorstyle="bullet">
		<Containable items="${t.value}mag" />
		</ItemContainer>
		<aitarget sightrange="2000" soundrange="4000" fadeouttime="5" />
		<Upgrade gameversion="0.10.0.0" scale="0.5" />
	</Item>
</Items>`);return(o,p)=>{const v=c("el-input"),b=c("el-form-item"),_=c("el-form");return f(),w(x,null,[n("div",U,[M,m(_,null,{default:g(()=>[m(b,{label:"Gun Name"},{default:g(()=>[m(v,{modelValue:s(e),"onUpdate:modelValue":p[0]||(p[0]=d=>P(e)?e.value=d:e=d)},null,8,["modelValue"])]),_:1}),n("a",{href:s(a),download:`${s(t)}.xml`,style:{display:"inline-flex",gap:"0.5rem"}},q,8,A),L]),_:1}),O,z]),n("pre",null,[B,n("code",{class:"hljs",style:{"max-height":"600px"},innerHTML:s(r)},null,8,N),T])],64)}}};const D={setup(u){return(e,t)=>(f(),S(j))}};const h=k(D);h.use($);h.mount("#app");
