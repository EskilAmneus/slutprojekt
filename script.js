
// Get the URL parameters
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

// Get the image source and troop name from the URL parameters
const imageSrc = urlParams.get('src');
const Number = urlParams.get('number');


troop = ["Barbar","Bågskytt","Jätte","Troll","Murförstörare","Ballong","Trollkarl","Helare","Drake","P.E.E.K.A","Bäbisdrake","Gruvarbetare","Elektrodrake","Yeti","Drakryttare","Elektrotitan","Minion","Grisryttare","Valkyria","Golem","Häxa","Lava bjässe","Bowlare","Is golem","Huvudjagare","Superbarbar","Superbågskytt","Smygtroll","Supermurförstörare","Superjätte","Raketballong","Supertrollkarl","Superdrake","Infernodrake","Superminion","Supervalkyria","Superhäxa","Isbjässe","Superbowlare","Supergruvarberare","Blixttrolldryck","Läketrolldryck","Arghetstrolldryck","Hopptrolldryck","Frystrolldryck","Clontrolldryck","Osynlighetstrolldryck","Återkallelsetrolldryck","Gifttrolldryck","Jordbävningstrolldryck","Snabbhetstrolldryck","Skelettrolldryck","Fladdermustrolldryck"];
troopName = troop[Number];


barbarian = "Barbaren är en närstridsgrupp med ett mål. Han är den första truppen som låses upp i barackerna. Han framstår som en manlig kiltklädd krigare med ett argt, stridsfärdigt uttryck, hungrig på förstörelse. Han har kortklippt blont hår och en lång, gul hästskomustasch. I strid använder han ett svärd som han använder för att attackera. Barbarianer har inget föredraget mål när de attackerar; de kommer helt enkelt att attackera den närmaste byggnaden. Men om de blir medvetna om fiendens klanborgstrupper, hjältar eller skelettfälla skelett (antingen genom att själva bli attackerade eller genom att vara nära en annan vänlig trupp under attack), och kan slå tillbaka mot dem, kommer de att lämna sin tidigare riktade byggnad och engagera istället fiendens trupper. När alla fientliga trupper i närheten är besegrade, kommer barbarerna att fortsätta att attackera den närmaste strukturen."
archer = "Bågskytten är en avståndstrupp med ett mål upplåst med en nivå 2 baracker. Hon är den första avståndstruppen som är upplåst i barackerna, och den andra totala truppen som är upplåst i spelet. Pilbågskytten är en kvinnlig krigare med skarpa ögon. Hon bär en kort, ljusgrön klänning, en cape med huva, ett läderbälte och en bifogad liten påse. Hon har en koger slängd på ryggen, en guldfärgad kort rosett i vänster hand och ett gyllene band på var och en av hennes överarmar.Bågskyttar har inget föredraget mål när de anfaller; de kommer helt enkelt att attackera den närmaste byggnaden. Men om de blir medvetna om fiendens klanborgstrupper, hjältar eller skelettfälla skelett (antingen genom att själva bli attackerade eller genom att vara nära en annan vänlig trupp under attack), och kan slå tillbaka mot dem, kommer de att lämna sin tidigare riktade byggnad och engagera istället fiendens trupper. När alla de närliggande fiendetrupperna har besegrats, kommer bågskyttarna att fortsätta att attackera den närmaste strukturen."
giant = "Jätten är den tredje truppen som är upplåst i barackerna. Jättens första mål är försvar, vilket gör dem till en idealisk trupp att distribuera för att snabbt bli av med försvar. Men på grund av deras låga attackskada är de bättre att använda i stora grupper. Jättar prioriterar defensiva strukturer framför alla andra mål, och kommer att kringgå alla andra typer av fiendens byggnader och trupper medan eventuella försvar finns kvar på slagfältet. Detta är sant även om de är under attack av fiendens Clan Castle-trupper, hjältar eller Skelettfälla-skelett. Observera att som alla trupper som prioriterar försvar, anser jättarna inte att klanborgen är ett försvar oavsett om det innehåller fientliga trupper eller inte, men anser att den försvarande Grand Warden och det aktiverade stadshusvapnet (om något) är defensivt. byggnader. När alla försvar förstörs, blir jättarna som vilken annan trupp som helst utan något föredraget mål; de kommer att attackera den närmaste byggnaden till dem oavsett typ, och kommer att vända och attackera fiendens enheter om de blir medvetna om någon i närheten och kan slå tillbaka mot dem. De kommer dock inte att byta mål till fiendens enheter förrän deras tidigare mål förstörts."
goblin = "Trollet är den fjärde truppen som spelaren låser upp i baracken. Trollet är en grön varelse med en säck på ryggen där han lägger allt guld han har snott. Trollen primära mål är resurser och de gör dubbla skadan på alla byggnader som räknas till resurserna. Därför är trollen en ideal trupp om man vill farma resurser snabbt. Trollet är den snabbaste truppen i hela spelet och kan därför utlösa fällor utan att ta skada av dem. Troll har dock mycket lite liv och dör väldigt lätt. "
wallBreaker = "Murförstörarna är den femte truppen som spelaren låser upp i baracken. Som man kan höra på namnet så specialiserar murförstöraren sig på att förstöra motståndarens murar. Murförstöraren prioriterar murar över allt annat och attakerar närmaste murdelen från var den är utplacerad. Murförstöraren gör 40 gånger mer skada på murar gämfört med andra byggnader. Om det inte finns några murar kvar på slagfältet så attakerar murförstöraren vanliga byggnader istället men gör väldigt lite skada. Murförstörarna överlever inte sin attck och spränger sig själva med muren."
balloon = "Ballongen är den sjätte truppen spelaren låser upp i baracken. Det är den första flygande truppen spelaren låser upp. Ballongen är som jätten och fukuserar på att förstöra alla defensiva byggnader före allt annat. Ballongen släpper bomber medans den flyger över byggnaderna. När den dör så gör också lite skada där den krashar. Ballongen är en mycket stark trupp i de flesta rådhusnivåerna om den används rätt. En bra strategi är lava-loon, där spelaren sätter ut lavabjässar som tankar all skada, och sedan ballonger bakom. "
wizard = "Trollkarlen är den sjunde truppen som spelaren låser upp i baracken. Trollkarlen attakerar på ett litet avstånd från byggnaden. Trollkarlar har ingen specific byggnad de attackerar utan de går på den närmaste byggnaden. I lägre rådhusnivåer är trollkarlen stark i mångtal. Trollkarlen kan också vara bra i högre rådhusnivåer där den används för att snabbt ta ut byggnader utanför basen."
healer = "Helaren låser spelaren upp när baracken når nivå 8. Den är en flygande trupp som inte har några attackfunktioner. Helaren fukuserar bara på att hålla de andra tupperna vid liv, men den kan bara hela trupper som går på marken och inte flygande trupper. Helaren är en av de bästa trupperna i spelet enbart eftersom den är delaktig i den bästa strategin i spelet: drottinggång (queenwalk). Den går ut på att spelaren sätter ut bågskyttedrottningen med 4-5 helare bakom dem som håller den vid liv."
dragon = "Draken är den nionde truppen spelaren låser upp, vilket man gör i rådhusnivå 7. Draken är en flygande trupp som attakerar allt i sin väg. Draken attakerar genom att spruta eld som gör splash damage. Draken är en mycket stark trupp som används framförallt mellan rådhusnivå 7 till 11. Draken kombineras mycket bra med blixttrollformeln som kan användas för att ta ut luftförsvaren, som är drakens största hot."
pekka = "P.E.E.K.A är den tionde truppen spelaren låser upp vilket kräver rådhusnivå 8. Den är den mest mystiska truppen i spelet, ingen vet vad det är för något. P.E.E.K.A är en mycket långsam trupp med väldig mycket hälsa och skada. Den har också en väldigt långsam attackhastighet. P.E.E.K.A var en väldigt bra trupp länge, men numera är den ganska dålig och bortglömd. P.E.E.K.A kan vara en bra trupp mellan rådhusnivåerna 8-9, men eftersom den är så långsam har den problem med större baser."
babyDragon = "Den elfte truppen spelaren låser upp i baracken är bäbisdraken. Den är en flygande trupp som attakerar med spalsh damage. Bäbisdraken har en unik förmåga, när den inte finns några allierade truppen nära den så får den ökad attackskada och attackhastighet. Bäbisdrakar har inte en favorit byggnad att attackra utan attakerar vad som helst. Bäbisdraken är dock inte en superbra trupp. Den brukar inte användas med så många åt gången. Primärfunktionen för bäbisdraken i de flesta attacker är att förtöra oviktiga byggnader utanför basen, så att andra trupper kan gå in i basen."
miner = "Gruvarbetaren är den tolfte truppen spelaren låser upp i elexir-baracken. Den kan borra sig under marken till byggnader. Medan den är under marken kan den inte bli skjuten på eller utlösa några fällor. Gruvarbetaren kringgår också alla murar eftersom den gräver sig under dem. Gruvarbetaren har inte någon favoritbyggnad att attackera och kommer attackera den närmaste byggnaden. Gruvarbeteren är mycket stark i vissa strategier. Till exempel om man kombinerar den med grisryttare och läketrolldrycker."
electroDragon = "Elektrodraken är den trettonde truppen spelaren låser upp i elexir-baracken. Den är den mest använda truppen i hela spelet av folk som är över rådhusnivå-11 där den blir upplåst. Elektrodraken är extremt stark och kräver ansträngning för att få mycket värde. Elektrodraken är en flygande trupp som skickar blixtar som studsar mellan byggnader. Den gör mycket skada, har mycket hälsa och låg attackhastighet. Elektrodraken exploderar i blixtar när den dör och gör extra skada. Elektrodrake har inte någon favoritbyggnad att attackera och kommer attackera vad som helst."
yeti = "Yetin låser spelaren upp vid nivå 14 på elexirbaracken, vilket kräver rådhusnivå-12. Yetis har ganska mycket hälsa och skada. De har en korg med \"yetimites\" på ryggen som hoppar av för varje 600 skada yetin tar, tills han har slut på dem. När yetin dör hoppar resterande av \"yetimitesen\" av. Yetis attackerar vilket byggnad som helst."
dragonRider = "Drakryttaren är den femtonde truppen spelaren låser upp i elexirbaracken, vilket kräver rådhusnivå-13. Drakryttaren attackerar bara försvarsbyggnader tills alla är förstörda. Drakryttaren har väldigt mycket hälsa, mer än draken och elektrodraken. Den är också ganska snabb."
electroTitan = "Spelaren låser upp electotitanen vid nivå 16 på elixirbaracken vilket är högsta nivån på den, för detta krävs rådhusnivå-14. Elektrotitanen har mycket hälsa och kan ta mycket stryck innnan hon dör. Hon kan göra skada till byggnader genom väggar eftesom hon har en aura av elektricitet runt sig. Elektrotitanen har inte någon favoritbyggnad att attackera och attackar den närmaste byggnaden."
minion = ""
hogRider = ""
valkyrie = ""
golem = ""
witch = ""
lavaHound = ""
bowler = ""
iceGolem = ""
headhunter = ""
superBarbarian = ""
superArcher = ""
sneakyGoblin = ""
superWallBreaker = ""
superGiant = ""
rocketBalloon = ""
superWizard = ""
superDragon = ""
infernoDragon = ""
superMinion = ""
superValkyrie = ""
superWitch = ""
iceHound = ""
superBowler = ""
superMiner = ""
lightningSpell = ""
healingSpell = ""
rageSpell = ""
jumpSpell = ""
freezeSpell = ""
cloneSpell = ""
invisibilitySpell = ""
recallSpell = ""
poisonSpell = ""
earthquakeSpell = ""
hasteSpell = ""
skeletonSpell = ""
batSpell = ""


troop_info_list = [barbarian,archer,giant,goblin,wallBreaker,balloon,wizard,healer,dragon,pekka,babyDragon,miner,electroDragon,yeti,dragonRider,electroTitan,minion,hogRider,valkyrie,golem,witch,lavaHound,bowler,iceGolem,headhunter,superBarbarian,superArcher,sneakyGoblin,superWallBreaker,superGiant,rocketBalloon,superWizard,superDragon,infernoDragon,superMinion,superValkyrie,superWitch,iceHound,superBowler,superMiner,lightningSpell,healingSpell,rageSpell,jumpSpell,freezeSpell,cloneSpell,invisibilitySpell,recallSpell,poisonSpell,earthquakeSpell,hasteSpell,skeletonSpell,batSpell];

troopInfo = troop_info_list[Number];







// Update the image source and troop name on the page
const imgElement = document.querySelector('.img2');
imgElement.src = imageSrc;

const h1Element = document.querySelector('#troop-text h1');
h1Element.textContent = troopName;
    
const pElement = document.querySelector('#troop-info');
pElement.textContent = troopInfo;
