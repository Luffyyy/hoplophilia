<template>
	<div style="text-align:center;">
		<img src="https://media.discordapp.net/stickers/859988234376052746.png?size=160">
		<el-form>
			<el-form-item label="Gun Name">
				<el-input v-model="gunName"/>
			</el-form-item>
			<a :href="downloadResult" :download="`${gunId}.xml`" style="display: inline-flex; gap: 0.5rem">
				<img src="https://media.discordapp.net/stickers/885973869167530015.png?size=64">
				<span style="margin-top: auto; margin-bottom: auto;">Download</span>
			</a>
			<br>
		</el-form>
		<br>
		<br>
	</div>
	<pre>
		<code class="hljs" style="max-height: 600px;" v-html="parsedResult"/>
	</pre>
</template>

<script setup>
	import { computed, ref } from "vue-demi";
	import hljs from 'highlight.js/lib/common';

	let gunName = ref('');
	let gunId = computed(() => gunName.value.toLowerCase());

	const result = computed(() => {
return `<Items>
	<Item name="${gunName.value} Bullet" identifier="${gunId.value}round" category="Equipment" interactthroughwalls="true" cargocontaineridentifier="metalcrate" tags="smallitem" impactsoundtag="impact_metal_light" hideinmenus="true" scale="0.5">
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
	
	<Item name="${gunName.value} Magazine" identifier="${gunId.value}mag" scale="0.5" category="Equipment" cargocontaineridentifier="metalcrate" linkable="true" tags="smallitem" impactsoundtag="impact_metal_light">
		<PreferredContainer primary="${gunId.value}" minamount="1" maxamount="1" spawnprobability="1"/>
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
		<InventoryIcon texture="Mods/Hoplophilia/${gunName.value}/${gunId.value}mag.png" sourcerect="0,0,64,64" />
		<Sprite texture="Mods/Hoplophilia/${gunName.value}/${gunId.value}mag.png" depth="0.54" sourcerect="0,0,64,64" origin="0.5,0.5" />
		<Body width="30" height="40" density="50" />
		<ItemContainer hideitems="true" capacity="1" drawinventory="false" canbeselected="false" ShowConditionInContainedStateIndicator="true" SpawnWithId="${gunId.value}round" removecontaineditemsondeconstruct="true" containedstateindicatorstyle="bullet">
		<Containable items="${gunId.value}round" />
		<!--Spawn an SMG round on use. Condition -5.0 -> 20 shots per magazine.-->
		<StatusEffect type="OnUse" target="This" condition="-5.8" disabledeltatime="true">
			<SpawnItem identifiers="${gunId.value}round" spawnposition="ThisInventory" />
		</StatusEffect>
		</ItemContainer>
		<!--Magazines can be combined to raise condition.-->
		<Holdable canBeCombined="true" slots="Any,RightHand,LeftHand" handle1="0,0" msg="ItemMsgPickUpSelect" />
		<Upgrade gameversion="0.10.0.0" scale="0.5" />
	</Item>
	
	<Item name="${gunName.value}" identifier="${gunId.value}" category="Equipment" cargocontaineridentifier="metalcrate" tags="smallitem,weapon,gun" Scale="0.5" impactsoundtag="impact_metal_light">
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
		<InventoryIcon texture="Mods/Hoplophilia/${gunName.value}/${gunId.value}.png" sourcerect="0,0,64,64" origin="0.5,0.5" />
		<Sprite texture="Mods/Hoplophilia/${gunName.value}/${gunId.value}.png" sourcerect="0,0,64,64" depth="0.55" origin="0.5,0.5" />
		<Body width="72" height="40" density="50" />
		<Holdable slots="Any,RightHand,LeftHand" controlpose="true" aimpos="90,10" handle1="-10,-6" msg="ItemMsgPickUpSelect" />
		<RangedWeapon barrelpos="6,10" spread="0" unskilledspread="2" combatPriority="70" drawhudwhenequipped="true" crosshairscale="0.2" reload="0.5">
		<Crosshair texture="Content/Items/Weapons/Crosshairs.png" sourcerect="0,256,256,256" />
		<CrosshairPointer texture="Content/Items/Weapons/Crosshairs.png" sourcerect="256,256,256,256" />
		<ParticleEmitter particle="muzzleflash" particleamount="1" velocitymin="0" velocitymax="0" />
			<Sound file="Mods/Hoplophilia/${gunName.value}/${gunId.value}.ogg" type="OnUse" range="3000" />
		<StatusEffect type="OnUse">
			<Explosion range="150.0" force="3" shockwave="false" smoke="false" flames="false" flash="false" sparks="false" underwaterbubble="false" camerashake="1.5" />
		</StatusEffect>
		<!--"Use" contained magazine to spawn projectiles.-->
		<StatusEffect type="OnUse" target="Contained">
			<Use />
		</StatusEffect>
		<RequiredItems items="${gunId.value}mag" type="Contained" msg="ItemMsgAmmoRequired" />
		<RequiredSkill identifier="weapons" level="30" />
		</RangedWeapon>
		<ItemContainer capacity="1" maxstacksize="1" hideitems="true" containedstateindicatorstyle="bullet">
		<Containable items="${gunId.value}mag" />
		</ItemContainer>
		<aitarget sightrange="2000" soundrange="4000" fadeouttime="5" />
		<Upgrade gameversion="0.10.0.0" scale="0.5" />
	</Item>
</Items>`;
	})
	const parsedResult = computed(() => hljs.highlight(result.value, {language: 'xml'}).value);
	const downloadResult = computed(() => 'data:text/plain;charset=utf-8,' + encodeURIComponent(result.value));
</script>