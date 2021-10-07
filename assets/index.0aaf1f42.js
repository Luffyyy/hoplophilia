import{r as y,c as g,a as l,o as h,b as S,d as n,w as p,e as c,u,F as $,f as b,i as I,g as k,h as E,j as U,k as M}from"./vendor.631dbe6c.js";const H=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function r(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerpolicy&&(i.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?i.credentials="include":a.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(a){if(a.ep)return;a.ep=!0;const i=r(a);fetch(a.href,i)}};H();function A(t,e){return`<Items> 
	<!--${t}-->
	<Item name="arround_generic" identifier="arround_generic" category="Equipment" interactthroughwalls="true" cargocontaineridentifier="metalcrate" tags="smallitem" impactsoundtag="impact_metal_light" hideinmenus="true" scale="0.5">
		<InventoryIcon texture="Content/Items/InventoryIconAtlas.png" sourcerect="896,960,64,64" origin="0.5,0.5" />
		<Sprite texture="Content/Items/Weapons/weapons_new.png " sourcerect="195,282,17,6" depth="0.55" origin="0.5,0.5" />
		<Body width="40" height="14" density="40" />
		<Pickable slots="Any" msg="ItemMsgPickUpSelect"/>
		<Projectile characterusable="false" hitscan="true" removeonhit="true">
			<ParticleEmitter particle="tracerfirearm" particleamount="1" velocitymin="0" velocitymax="0" colormultiplier="255,255,115,175" scalemultiplier="1,0.6"/>
			<Attack structuredamage="3.5" targetforce="6" itemdamage="30" severlimbsprobability="0.10">
				<Affliction identifier="bleeding" strength="30" />
				<Affliction identifier="gunshotwound" strength="34" />
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

	<Item name="${t} Magazine" identifier="${e}mag" scale="0.5" category="Equipment" cargocontaineridentifier="metalcrate" linkable="true" tags="smallitem" impactsoundtag="impact_metal_light">
		<PreferredContainer primary="${e}" minamount="1" maxamount="1" spawnprobability="1"/>
		<PreferredContainer primary="secarmcab" minamount="0" maxamount="2" spawnprobability="0.25"/>
		<PreferredContainer primary="wrecksecarmcab" minamount="0" maxamount="4" spawnprobability="0.33"/>
		<PreferredContainer primary="abandonedsecarmcab" minamount="1" maxamount="3" spawnprobability="0.4"/>
		<Price baseprice="100" soldeverywhere="false">
			<Price locationtype="outpost" multiplier="1.5" sold="false"/>
			<Price locationtype="city" multiplier="1.25" minavailable="2" />
			<Price locationtype="research" multiplier="1.25" sold="false"/>
			<Price locationtype="military" multiplier="0.9" minavailable="4" />
			<Price locationtype="mine" multiplier="1.25" sold="false"/>
		</Price>
		<Deconstruct time="10">
			<Item identifier="plastic" copycondition="false"/>
		</Deconstruct>
		<InventoryIcon texture="Mods/Hoplophilia/${t}/${e}mag.png" sourcerect="960,960,64,64" />
		<Sprite texture="Mods/Hoplophilia/${t}/${e}mag.png" depth="0.54" sourcerect="146,157,33,44" origin="0.5,0.5" />
		<Body width="30" height="40" density="50" />
		<ItemContainer hideitems="true" capacity="1" drawinventory="false" canbeselected="false" ShowConditionInContainedStateIndicator="true" SpawnWithId="arround_generic" removecontaineditemsondeconstruct="true" containedstateindicatorstyle="bullet">
			<Containable items="arround_generic" />
			<!--Spawn an SMG round on use. Condition -5.0 -> 20 shots per magazine.-->
			<StatusEffect type="OnUse" target="This" condition="-3.22" disabledeltatime="true">
				<SpawnItem identifiers="arround_generic" spawnposition="ThisInventory" />
			</StatusEffect>
		</ItemContainer>
		<!--Magazines can be combined to raise condition.-->
		<Holdable canBeCombined="true" slots="Any,RightHand,LeftHand" handle1="0,0" msg="ItemMsgPickUpSelect" />
		<Upgrade gameversion="0.10.0.0" scale="0.5" />
	</Item>

	<Item name="${t}" identifier="${e}" category="Equipment" cargocontaineridentifier="metalcrate" tags="smallitem,weapon,gun" Scale="0.5" impactsoundtag="impact_metal_light">
		<PreferredContainer primary="weaponholder" spawnprobability="0.1"/>
		<PreferredContainer primary="secarmcab" minamount="1" maxamount="2" spawnprobability="1"/>
		<PreferredContainer primary="wrecksecarmcab" minamount="0" maxamount="2" spawnprobability="0.33"/>
		<PreferredContainer primary="abandonedsecarmcab" minamount="1" maxamount="1" spawnprobability="0.4"/>
		<Price baseprice="300" soldeverywhere="false">
			<Price locationtype="outpost" multiplier="1.5" sold="false"/>
			<Price locationtype="city" multiplier="1.25" minavailable="1" />
			<Price locationtype="research" multiplier="1.25" sold="false"/>
			<Price locationtype="military" multiplier="0.9" minavailable="2" />
			<Price locationtype="mine" multiplier="1.25" sold="false"/>
		</Price>
		<Deconstruct time="10">
			<Item identifier="steel" />
			<Item identifier="plastic" />
		</Deconstruct>
		<InventoryIcon texture="Mods/Hoplophilia/${e}/${e}.png" sourcerect="832,830,64,64" origin="0.5,0.5" />
		<Sprite texture="Mods/Hoplophilia/${t}/${e}.png" sourcerect="0,121,144,80" depth="0.55" origin="0.5,0.5" />
		<Body width="140" height="60" density="50" />
		<Holdable slots="Any,RightHand+LeftHand" controlpose="true" holdpos="35,-10" aimpos="35,-10" handle1="-15,-6" handle2="26,7" holdangle="-40" msg="ItemMsgPickUpSelect"/>
		<RangedWeapon reload="0.1" barrelpos="14,6" spread="10" unskilledspread="16" combatPriority="80" drawhudwhenequipped="true" crosshairscale="0.2">
			<Crosshair texture="Content/Items/Weapons/Crosshairs.png" sourcerect="0,256,256,256" />
			<CrosshairPointer texture="Content/Items/Weapons/Crosshairs.png" sourcerect="256,256,256,256" />
			<ParticleEmitter particle="muzzleflash" particleamount="1" velocitymin="0" velocitymax="0" />
			<Sound file="Mods/Hoplophilia/${t}/${e}1.ogg" type="OnUse" range="3000" selectionmode="Random" />
			<Sound file="Mods/Hoplophilia/${t}/${e}2.ogg" type="OnUse" range="3000" />
			<Sound file="Mods/Hoplophilia/${t}/${e}3.ogg" type="OnUse" range="3000" />
			<StatusEffect type="OnUse">
				<Explosion range="250.0" force="5" shockwave="false" smoke="false" flames="false" sparks="false" underwaterbubble="false" camerashake="4.0" />
			</StatusEffect>
			<!--"Use" contained magazine to spawn projectiles.-->
			<StatusEffect type="OnUse" target="Contained">
				<Use />
			</StatusEffect>
			<RequiredItems items="${e}mag" type="Contained" msg="ItemMsgAmmoRequired" />
			<RequiredSkill identifier="weapons" level="50" />
		</RangedWeapon>
		<ItemContainer capacity="1" maxstacksize="1" hideitems="true" containedstateindicatorstyle="bullet">
			<Containable items="${e}mag" />
		</ItemContainer>
		<aitarget sightrange="2000" soundrange="4000" fadeouttime="5" />
		<Upgrade gameversion="0.10.0.0" scale="0.5" />
	</Item>
</Items>`}function R(t,e){return`<Items>
	<!--${t}-->
	<Item name="${t} Bullet" identifier="${e}round" category="Equipment" interactthroughwalls="true" cargocontaineridentifier="metalcrate" tags="smallitem" impactsoundtag="impact_metal_light" hideinmenus="true" scale="0.5">
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
	
	<Item name="${t} Magazine" identifier="${e}mag" scale="0.5" category="Equipment" cargocontaineridentifier="metalcrate" linkable="true" tags="smallitem" impactsoundtag="impact_metal_light">
		<PreferredContainer primary="${e}" minamount="1" maxamount="1" spawnprobability="1"/>
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
		<InventoryIcon texture="Mods/Hoplophilia/${t}/${e}mag.png" sourcerect="0,0,64,64" />
		<Sprite texture="Mods/Hoplophilia/${t}/${e}mag.png" depth="0.54" sourcerect="0,0,64,64" origin="0.5,0.5" />
		<Body width="30" height="40" density="50" />
		<ItemContainer hideitems="true" capacity="1" drawinventory="false" canbeselected="false" ShowConditionInContainedStateIndicator="true" SpawnWithId="${e}round" removecontaineditemsondeconstruct="true" containedstateindicatorstyle="bullet">
			<Containable items="${e}round" />
			<!--Spawn an SMG round on use. Condition -5.0 -> 20 shots per magazine.-->
			<StatusEffect type="OnUse" target="This" condition="-5.8" disabledeltatime="true">
				<SpawnItem identifiers="${e}round" spawnposition="ThisInventory" />
			</StatusEffect>
		</ItemContainer>
		<!--Magazines can be combined to raise condition.-->
		<Holdable canBeCombined="true" slots="Any,RightHand,LeftHand" handle1="0,0" msg="ItemMsgPickUpSelect" />
		<Upgrade gameversion="0.10.0.0" scale="0.5" />
	</Item>
	
	<Item name="${t}" identifier="${e}" category="Equipment" cargocontaineridentifier="metalcrate" tags="smallitem,weapon,gun" Scale="0.5" impactsoundtag="impact_metal_light">
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
		<InventoryIcon texture="Mods/Hoplophilia/${t}/${e}.png" sourcerect="0,0,64,64" origin="0.5,0.5" />
		<Sprite texture="Mods/Hoplophilia/${t}/${e}.png" sourcerect="0,0,64,64" depth="0.55" origin="0.5,0.5" />
		<Body width="72" height="40" density="50" />
		<Holdable slots="Any,RightHand,LeftHand" controlpose="true" aimpos="90,10" handle1="-10,-6" msg="ItemMsgPickUpSelect" />
		<RangedWeapon barrelpos="6,10" spread="0" unskilledspread="2" combatPriority="70" drawhudwhenequipped="true" crosshairscale="0.2" reload="0.5">
			<Crosshair texture="Content/Items/Weapons/Crosshairs.png" sourcerect="0,256,256,256" />
			<CrosshairPointer texture="Content/Items/Weapons/Crosshairs.png" sourcerect="256,256,256,256" />
			<ParticleEmitter particle="muzzleflash" particleamount="1" velocitymin="0" velocitymax="0" />
			<Sound file="Mods/Hoplophilia/${t}/${e}.ogg" type="OnUse" range="3000" />
			<StatusEffect type="OnUse">
				<Explosion range="150.0" force="3" shockwave="false" smoke="false" flames="false" flash="false" sparks="false" underwaterbubble="false" camerashake="1.5" />
			</StatusEffect>
			<!--"Use" contained magazine to spawn projectiles.-->
			<StatusEffect type="OnUse" target="Contained">
				<Use />
			</StatusEffect>
			<RequiredItems items="${e}mag" type="Contained" msg="ItemMsgAmmoRequired" />
			<RequiredSkill identifier="weapons" level="30" />
		</RangedWeapon>
		<ItemContainer capacity="1" maxstacksize="1" hideitems="true" containedstateindicatorstyle="bullet">
			<Containable items="${e}mag" />
		</ItemContainer>
		<aitarget sightrange="2000" soundrange="4000" fadeouttime="5" />
		<Upgrade gameversion="0.10.0.0" scale="0.5" />
	</Item>
</Items>
`}const q=c("img",{src:"https://media.discordapp.net/stickers/859988234376052746.png?size=160"},null,-1),O=["href","download"],z=c("img",{src:"https://media.discordapp.net/stickers/885973869167530015.png?size=64"},null,-1),B=c("span",{style:{"margin-top":"auto","margin-bottom":"auto"}},"Download",-1),L=[z,B],W={style:{margin:"0","max-height":"650px",overflow:"scroll"}},T=b("		"),j=["innerHTML"],D=b(`
	`),V={setup(t){let e=y(""),r=y(!1),o=g(()=>e.value.toLowerCase());const a=g(()=>k.highlight(s.value,{language:"xml"}).value),i=g(()=>"data:text/plain;charset=utf-8,"+encodeURIComponent(s.value)),s=g(()=>r.value?A(e.value,o.value):R(e.value,o.value));return(F,d)=>{const _=l("el-input"),f=l("el-form-item"),v=l("el-checkbox"),P=l("el-form"),C=l("el-col"),x=l("el-row");return h(),S($,null,[n(x,{justify:"center"},{default:p(()=>[n(C,{span:12,style:{"text-align":"center"}},{default:p(()=>[q,n(P,{style:{"text-align":"left","margin-top":"0.5rem"}},{default:p(()=>[n(f,{label:"Gun Name"},{default:p(()=>[n(_,{modelValue:u(e),"onUpdate:modelValue":d[0]||(d[0]=m=>I(e)?e.value=m:e=m)},null,8,["modelValue"])]),_:1}),n(f,null,{default:p(()=>[n(v,{modelValue:u(r),"onUpdate:modelValue":d[1]||(d[1]=m=>I(r)?r.value=m:r=m),label:"Assault Rifle"},null,8,["modelValue"])]),_:1})]),_:1}),c("a",{href:u(i),download:`${u(o)}.xml`,style:{display:"inline-flex",gap:"0.5rem"}},L,8,O)]),_:1})]),_:1}),c("pre",W,[T,c("code",{class:"hljs",innerHTML:u(a)},null,8,j),D])],64)}}};const N={setup(t){return(e,r)=>(h(),E(V))}};const w=U(N);w.use(M);w.mount("#app");
