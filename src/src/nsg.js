import { sleeveHelper } from "./helpers.js";

export async function main(ns) {
	async function run() {
		if (toRun != undefined) {
			ns.run(toRun[0]);
			if (toRun[1]) {
				ns.tail(toRun[0]);
			}
			//await ns.sleep(100);
			toRun = undefined;
		}
	}
	async function sleeve() {
		if (sleeveDo.action != undefined) {
			sleeveHelper.setTask(ns, true, undefined, sleeveDo.action, sleeveDo.task)
			sleeveDo.action = undefined;
		}
	}
	async function bnalert() {
		if (bna != 0) {
			switch (bna) {
				case 1:
					ns.alert(
						`The first BitNode created by the Enders to imprison the minds of humans. It became the prototype and testing-grounds for all of the BitNodes that followed.<br><br>This is the first BitNode that you play through. It has no special modifications or mechanics.<br><br>Destroying this BitNode will give you Source-File 1, or if you already have this Source-File it will upgrade its level up to a maximum of 3. This Source-File lets the player start with 32GB of RAM on his/her home computer when entering a new BitNode, and also increases all of the player's multipliers by:<br><br>16% / 24% / 28%`
					);
					break;
				case 2:
					ns.alert(
						`From the shadows, they rose.<br><br>Organized crime groups quickly filled the void of power left behind from the collapse of Western government in the 2050s. As society and civilization broke down, people quickly succumbed to the innate human impulse of evil and savagery. The organized crime factions quickly rose to the top of the modern world.<br><br>Certain Factions (Slum Snakes, Tetrads, The Syndicate, The Dark Army, Speakers For The Dead, NiteSec, The Black Hand) give the player the ability to form and manage their own gangs. These gangs will earn the player money and reputation with the corresponding Faction.<br>Every Augmentation in the game will be available through the Factions listed above.<br><br>Destroying this BitNode will give you Source-File 2, or if you already have this Source-File it will upgrade its level up to a maximum of 3. This Source-File allows you to form gangs in other BitNodes once your karma decreases to a certain value. It also increases the player's crime success rate, crime money, and charisma multipliers by:<br><br>24% / 36% / 42%`
					)
					break;
				case 3:
					ns.alert(
						`Our greatest illusion is that a healthy society can revolve around a single-minded pursuit of wealth.<br><br>Sometime in the early 21st century economic and political globalization turned the world into a corporatocracy, and it never looked back. Now, the privileged elite will happily bankrupt their own countrymen, decimate their own community, and evict their neighbors from houses in their desperate bid to increase their wealth.<br><br>In this BitNode you can create and manage your own corporation. Running a successful corporation has the potential of generating massive profits.<br><br>Destroying this BitNode will give you Source-File 3, or if you already have this Source-File it will upgrade its level up to a maximum of 3. This Source-File lets you create corporations on other BitNodes (although some BitNodes will disable this mechanic) and level 3 permanently unlocks the full API. This Source-File also increases your charisma and company salary multipliers by:<br>8% / 12% / 14%`
					)
					break;
				case 4:
					ns.alert(
						`The Singularity has arrived. The human race is gone, replaced by artificially superintelligent beings that are more machine than man.<br><br><br>In this BitNode you will gain access to a new set of Netscript Functions known as Singularity Functions. These functions allow you to control most aspects of the game through scripts, including working for factions/companies, purchasing/installing Augmentations, and creating programs.<br><br>Destroying this BitNode will give you Source-File 4, or if you already have this Source-File it will upgrade its level up to a maximum of 3. This Source-File lets you access and use the Singularity Functions in other BitNodes. Each level of this Source-File reduces the RAM cost of singularity functions:<br>16x / 4x / 1x`
					)
					break;
				case 5:
					ns.alert(
						`They said it couldn't be done. They said the human brain, along with its consciousness and intelligence, couldn't be replicated. They said the complexity of the brain results from unpredictable, nonlinear interactions that couldn't be modeled by 1's and 0's. They were wrong.<br><br>Destroying this BitNode will give you Source-File 5, or if you already have this Source-File it will upgrade its level up to a maximum of 3. This Source-File grants you a special new stat called Intelligence. Intelligence is unique because it is permanent and persistent (it never gets reset back to 1). However, gaining Intelligence experience is much slower than other stats. Higher Intelligence levels will boost your production for many actions in the game. <br><br>In addition, this Source-File will unlock the getBitNodeMultipliers() Netscript function and let you start with Formulas.exe, and will also raise all of your hacking-related multipliers by:<br>8% / 12% / 14%`
					)
					break;
				case 6:
					ns.alert(
						`In the middle of the 21st century, OmniTek Incorporated began designing and manufacturing advanced synthetic androids, or Synthoids for short. They achieved a major technological breakthrough in the sixth generation of their Synthoid design, called MK-VI, by developing a hyperintelligent AI. Many argue that this was the first sentient AI ever created. This resulted in Synthoid models that were stronger, faster, and more intelligent than the humans that had created them.<br><br>In this BitNode, you will be able to access the Bladeburners Division at the NSA, which provides a new mechanic for progression.<br><br>Destroying this BitNode will give you Source-File 6, or if you already have this Source-File it will upgrade its level up to a maximum of 3. This Source-File allows you to access the NSA's Bladeburners Division in other BitNodes. In addition, this Source-File will raise both the level and experience gain rate of all your combat stats by:<br><br>8% / 12% / 14%`
					)
					break;
				case 7:
					ns.alert(
						`In the middle of the 21st century, you were doing cutting-edge work at OmniTek Incorporated as part of the AI design team for advanced synthetic androids, or Synthoids for short. You helped achieve a major technological breakthrough in the sixth generation of the company's Synthoid design, called MK-VI, by developing a hyperintelligent AI. Many argue that this was the first sentient AI ever created. This resulted in Synthoid models that were stronger, faster, and more intelligent than the humans that had created them.<br><br>In this BitNode you will be able to access the Bladeburners API, which allows you to access Bladeburners functionality through Netscript.<br><br>Destroying this BitNode will give you Source-File 7, or if you already have this Source-File it will upgrade its level up to a maximum of 3. This Source-File allows you to access the Bladeburners Netscript API in other BitNodes. In addition, this Source-File will increase all of your Bladeburners multipliers by:<br>8% / 12% / 14%`
					)
					break;
				case 8:
					ns.alert(
						`You are trying to make a name for yourself as an up-and-coming hedge fund manager on Wall Street.<br><br>In this BitNode:<br>You start with $250 million<br>You start with a WSE membership and access to the TIX API<br>You are able to short stocks and place different types of orders (limit/stop)<br><br>Destroying this BitNode will give you Source-File 8, or if you already have this Source-File it will upgrade its level up to a maximum of 3. This Source-File grants the following benefits:<br><br>Level 1: Permanent access to WSE and TIX API<br>Level 2: Ability to short stocks in other BitNodes<br>Level 3: Ability to use limit/stop orders in other BitNodes<br><br>This Source-File also increases your hacking growth multipliers by:<br>12% / 18% / 21%`
					)
					break;
				case 9:
					ns.alert(
						`When Fulcrum Secret Technologies released their open-source Linux distro Chapeau, it quickly became the OS of choice for the underground hacking community. Chapeau became especially notorious for powering the Hacknet, a global, decentralized network used for nefarious purposes. Fulcrum Secret Technologies quickly abandoned the project and dissociated themselves from it.<br><br>This BitNode unlocks the Hacknet Server, an upgraded version of the Hacknet Node. Hacknet Servers generate hashes, which can be spent on a variety of different upgrades.<br><br>Destroying this BitNode will give you Source-File 9, or if you already have this Source-File it will upgrade its level up to a maximum of 3. This Source-File grants the following benefits:<br><br>Level 1: Permanently unlocks the Hacknet Server in other BitNodes<br>Level 2: You start with 128GB of RAM on your home computer when entering a new BitNode<br>Level 3: Grants a highly-upgraded Hacknet Server when entering a new BitNode.<br>(Note that the Level 3 effect of this Source-File only applies when entering a new BitNode, NOT when installing Augmentations)<br><br>This Source-File also increases your hacknet multipliers by:<br>8% / 12% / 14%`
					)
					break;
				case 10:
					ns.alert(
						`In 2084, VitaLife unveiled to the world the Persona Core, a technology that allowed people to digitize their consciousness. Their consciousness could then be transferred into Synthoids or other bodies by transmitting the digitized data. Human bodies became nothing more than 'sleeves' for the human consciousness. Mankind had finally achieved immortality - at least for those that could afford it.<br><br>This BitNode unlocks Sleeve and grafting technologies. Sleeve technology allows you to:<br><br>1. Grafting: Visit VitaLife in New Tokyo to be able to obtain Augmentations without needing to install<br>2. Duplicate Sleeves: Duplicate your consciousness into Synthoids, allowing you to perform different tasks synchronously.<br><br>Grafting technology allows you to graft Augmentations, which is an alternative way of installing Augmentations.<br><br>Destroying this BitNode will give you Source-File 10, or if you already have this Source-File it will upgrade its level up to a maximum of 3. This Source-File unlocks Sleeve technology, and the Grafting API in other BitNodes. Each level of this Source-File also grants you a Duplicate Sleeve.`
					)
					break;
				case 11:
					ns.alert(
						`The 2050s was defined by the massive amounts of violent civil unrest and anarchic rebellion that rose all around the world. It was this period of disorder that eventually lead to the governmental reformation of many global superpowers, most notably the USA and China. But just as the world was slowly beginning to recover from these dark times, financial catastrophe hit.<br><br>In many countries, the high cost of trying to deal with the civil disorder bankrupted the governments. In all of this chaos and confusion, hackers were able to steal billions of dollars from the world's largest electronic banks, prompting an international banking crisis as governments were unable to bail out insolvent banks. Now, the world is slowly crumbling in the middle of the biggest economic crisis of all time.<br><br>Destroying this BitNode will give you Source-File 11, or if you already have this Source-File it will upgrade its level up to a maximum of 3. This Source-File makes it so that company favor increases BOTH the player's salary and reputation gain rate at that company by 1% per favor (rather than just the reputation gain). This Source-File also increases the player's company salary and reputation gain multipliers by:<br>32% / 48% / 56%<br><br>It also reduces the price increase for every aug bought by:<br>4% / 6% / 7%`
					)
					break;
				case 12:
					ns.alert(
						`To iterate is human, to recurse divine.<br><br>Every time this BitNode is destroyed, it becomes slightly harder. Destroying this BitNode will give you Source-File 12, or if you already have this Source-File it will upgrade its level. There is no maximum level for Source-File 12. Each level of Source-File 12 lets you start any BitNodes with NeuroFlux Governor equal to the level of this source file.`
					)
					break;
				case 13:
					ns.alert(
						`With the invention of Augmentations in the 2040s a religious group known as the Church Of the Machine God has rallied far more support than anyone would have hoped.<br><br>Their leader, Allison "Mother" Stanek is said to have created her own Augmentation whose power goes beyond any other. Find her in Chongqing and gain her trust.<br><br>Destroying this BitNode will give you Source-File 13, or if you already have this Source-File it will upgrade its level up to a maximum of 3. This Source-File lets the Church Of the Machine God appear in other BitNodes.<br><br>Each level of this Source-File increases the size of Stanek's Gift.`
					)
			}
			bna = 0;
		}
	}
  while (true) {
		run();
		sleeve();
		bnalert();
		await ns.sleep(100);
  }
}
