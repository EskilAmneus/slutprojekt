
// Get the URL parameters
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

// Get the image source and troop name from the URL parameters
const imageSrc = urlParams.get('src');
const Number = urlParams.get('number');


troop = ["Barbar","Bågskytt","Jätte","Troll","Murförstörare","Ballong","Trollkarl","Helare","Drake","P.E.E.K.A","Bäbisdrake","Gruvarbetare","Elektrodrake","Yeti","Drakryttare","Elektrotitan","Minion","Grisryttare","Valkyria","Golem","Häxa","Lavahund","Bowlare","Is golem","Huvudjagare","Superbarbar","Superbågskytt","Smygtroll","Supermurförstörare","Superjätte","Raketballong","Supertrollkarl","Superdrake","Infernodrake","Superminion","Supervalkyria","Superhäxa","Ishund","Superbowlare","Supergruvarberare","Blixttrolldryck","Läketrolldryck","Arghetstrolldryck","Hopptrolldryck","Frystrolldryck","Clontrolldryck","Osynlighetstrolldryck","Återkallelsetrolldryck","Gifttrolldryck","Jordbävningstrolldryck","Snabbhetstrolldryck","Skelettrolldryck","Fladdermustrolldryck","Kanon","Bågskyttetorn","Mur","Mortar","Luftförsvar","Trollkarlstorn","Luftblåsare","Gömd tesla","Bombtorn","X-bow","Infernotorn","Örnartelleri","Scatterskjutare","Trolldryckstorn","Monolith","Rådhus nivå-12","Rådhus nivå-13","Rådhus nivå-14","Rådhus nivå-15","Bomb","Fjäderfälla","Luftmina","Jättebomb","Sökande luftmina","Skelettfälla","Virvelvindfälla"];
troopName = troop[Number];


barbarian = ("Barbaren är en närstridsgrupp med ett mål. Han är den första truppen som låses upp i barackerna. Han framstår som en manlig kiltklädd krigare med ett argt, stridsfärdigt uttryck, hungrig på förstörelse. Han har kortklippt blont hår och en lång, gul hästskomustasch. I strid använder han ett svärd som han använder för att attackera. Barbarianer har inget föredraget mål när de attackerar; de kommer helt enkelt att attackera den närmaste byggnaden. Men om de blir medvetna om fiendens klanborgstrupper, hjältar eller skelettfälla skelett (antingen genom att själva bli attackerade eller genom att vara nära en annan vänlig trupp under attack), och kan slå tillbaka mot dem, kommer de att lämna sin tidigare riktade byggnad och engagera istället fiendens trupper. När alla fientliga trupper i närheten är besegrade, kommer barbarerna att fortsätta att attackera den närmaste strukturen.")
archer = ("Bågskytten är en avståndstrupp med ett mål upplåst med en nivå 2 baracker. Hon är den första avståndstruppen som är upplåst i barackerna, och den andra totala truppen som är upplåst i spelet. Pilbågskytten är en kvinnlig krigare med skarpa ögon. Hon bär en kort, ljusgrön klänning, en cape med huva, ett läderbälte och en bifogad liten påse. Hon har en koger slängd på ryggen, en guldfärgad kort rosett i vänster hand och ett gyllene band på var och en av hennes överarmar.Bågskyttar har inget föredraget mål när de anfaller; de kommer helt enkelt att attackera den närmaste byggnaden. Men om de blir medvetna om fiendens klanborgstrupper, hjältar eller skelettfälla skelett (antingen genom att själva bli attackerade eller genom att vara nära en annan vänlig trupp under attack), och kan slå tillbaka mot dem, kommer de att lämna sin tidigare riktade byggnad och engagera istället fiendens trupper. När alla de närliggande fiendetrupperna har besegrats, kommer bågskyttarna att fortsätta att attackera den närmaste strukturen.")
giant = ("Jätten är den tredje truppen som är upplåst i barackerna. Jättens första mål är försvar, vilket gör dem till en idealisk trupp att distribuera för att snabbt bli av med försvar. Men på grund av deras låga attackskada är de bättre att använda i stora grupper. Jättar prioriterar defensiva strukturer framför alla andra mål, och kommer att kringgå alla andra typer av fiendens byggnader och trupper medan eventuella försvar finns kvar på slagfältet. Detta är sant även om de är under attack av fiendens Clan Castle-trupper, hjältar eller Skelettfälla-skelett. Observera att som alla trupper som prioriterar försvar, anser jättarna inte att klanborgen är ett försvar oavsett om det innehåller fientliga trupper eller inte, men anser att den försvarande Grand Warden och det aktiverade stadshusvapnet (om något) är defensivt. byggnader. När alla försvar förstörs, blir jättarna som vilken annan trupp som helst utan något föredraget mål; de kommer att attackera den närmaste byggnaden till dem oavsett typ, och kommer att vända och attackera fiendens enheter om de blir medvetna om någon i närheten och kan slå tillbaka mot dem. De kommer dock inte att byta mål till fiendens enheter förrän deras tidigare mål förstörts.")
goblin = ("Trollet är den fjärde truppen som spelaren låser upp i baracken. Trollet är en grön varelse med en säck på ryggen där han lägger allt guld han har snott. Trollen primära mål är resurser och de gör dubbla skadan på alla byggnader som räknas till resurserna. Därför är trollen en ideal trupp om man vill farma resurser snabbt. Trollet är den snabbaste truppen i hela spelet och kan därför utlösa fällor utan att ta skada av dem. Troll har dock mycket lite liv och dör väldigt lätt. ")
wallBreaker = ("Murförstörarna är den femte truppen som spelaren låser upp i baracken. Som man kan höra på namnet så specialiserar murförstöraren sig på att förstöra motståndarens murar. Murförstöraren prioriterar murar över allt annat och attakerar närmaste murdelen från var den är utplacerad. Murförstöraren gör 40 gånger mer skada på murar gämfört med andra byggnader. Om det inte finns några murar kvar på slagfältet så attakerar murförstöraren vanliga byggnader istället men gör väldigt lite skada. Murförstörarna överlever inte sin attck och spränger sig själva med muren.")
balloon = ("Ballongen är den sjätte truppen spelaren låser upp i baracken. Det är den första flygande truppen spelaren låser upp. Ballongen är som jätten och fukuserar på att förstöra alla defensiva byggnader före allt annat. Ballongen släpper bomber medans den flyger över byggnaderna. När den dör så gör också lite skada där den krashar. Ballongen är en mycket stark trupp i de flesta rådhusnivåerna om den används rätt. En bra strategi är lava-loon, där spelaren sätter ut lavabjässar som tankar all skada, och sedan ballonger bakom. ")
wizard = ("Trollkarlen är den sjunde truppen som spelaren låser upp i baracken. Trollkarlen attakerar på ett litet avstånd från byggnaden. Trollkarlar har ingen specific byggnad de attackerar utan de går på den närmaste byggnaden. I lägre rådhusnivåer är trollkarlen stark i mångtal. Trollkarlen kan också vara bra i högre rådhusnivåer där den används för att snabbt ta ut byggnader utanför basen.")
healer = ("Helaren låser spelaren upp när baracken når nivå 8. Den är en flygande trupp som inte har några attackfunktioner. Helaren fukuserar bara på att hålla de andra tupperna vid liv, men den kan bara hela trupper som går på marken och inte flygande trupper. Helaren är en av de bästa trupperna i spelet enbart eftersom den är delaktig i den bästa strategin i spelet: drottinggång (queenwalk). Den går ut på att spelaren sätter ut bågskyttedrottningen med 4-5 helare bakom dem som håller den vid liv.")
dragon = ("Draken är den nionde truppen spelaren låser upp, vilket man gör i rådhusnivå 7. Draken är en flygande trupp som attakerar allt i sin väg. Draken attakerar genom att spruta eld som gör splash damage. Draken är en mycket stark trupp som används framförallt mellan rådhusnivå 7 till 11. Draken kombineras mycket bra med blixttrollformeln som kan användas för att ta ut luftförsvaren, som är drakens största hot.")
pekka = ("P.E.E.K.A är den tionde truppen spelaren låser upp vilket kräver rådhusnivå 8. Den är den mest mystiska truppen i spelet, ingen vet vad det är för något. P.E.E.K.A är en mycket långsam trupp med väldig mycket hälsa och skada. Den har också en väldigt långsam attackhastighet. P.E.E.K.A var en väldigt bra trupp länge, men numera är den ganska dålig och bortglömd. P.E.E.K.A kan vara en bra trupp mellan rådhusnivåerna 8-9, men eftersom den är så långsam har den problem med större baser.")
babyDragon = ("Den elfte truppen spelaren låser upp i baracken är bäbisdraken. Den är en flygande trupp som attakerar med spalsh damage. Bäbisdraken har en unik förmåga, när den inte finns några allierade truppen nära den så får den ökad attackskada och attackhastighet. Bäbisdrakar har inte en favorit byggnad att attackra utan attakerar vad som helst. Bäbisdraken är dock inte en superbra trupp. Den brukar inte användas med så många åt gången. Primärfunktionen för bäbisdraken i de flesta attacker är att förtöra oviktiga byggnader utanför basen, så att andra trupper kan gå in i basen.")
miner = ("Gruvarbetaren är den tolfte truppen spelaren låser upp i elexir-baracken. Den kan borra sig under marken till byggnader. Medan den är under marken kan den inte bli skjuten på eller utlösa några fällor. Gruvarbetaren kringgår också alla murar eftersom den gräver sig under dem. Gruvarbetaren har inte någon favoritbyggnad att attackera och kommer attackera den närmaste byggnaden. Gruvarbeteren är mycket stark i vissa strategier. Till exempel om man kombinerar den med grisryttare och läketrolldrycker.")
electroDragon = ("Elektrodraken är den trettonde truppen spelaren låser upp i elexir-baracken. Den är den mest använda truppen i hela spelet av folk som är över rådhusnivå-11 där den blir upplåst. Elektrodraken är extremt stark och kräver ansträngning för att få mycket värde. Elektrodraken är en flygande trupp som skickar blixtar som studsar mellan byggnader. Den gör mycket skada, har mycket hälsa och låg attackhastighet. Elektrodraken exploderar i blixtar när den dör och gör extra skada. Elektrodrake har inte någon favoritbyggnad att attackera och kommer attackera vad som helst.")
yeti = ("Yetin låser spelaren upp vid nivå 14 på elexirbaracken, vilket kräver rådhusnivå-12. Yetis har ganska mycket hälsa och skada. De har en korg med \"yetimites\" på ryggen som hoppar av för varje 600 skada yetin tar, tills han har slut på dem. När yetin dör hoppar resterande av \"yetimitesen\" av. Yetis attackerar vilket byggnad som helst.")
dragonRider = ("Drakryttaren är den femtonde truppen spelaren låser upp i elexirbaracken, vilket kräver rådhusnivå-13. Drakryttaren attackerar bara försvarsbyggnader tills alla är förstörda. Drakryttaren har väldigt mycket hälsa, mer än draken och elektrodraken. Den är också ganska snabb.")
electroTitan = ("Spelaren låser upp electotitanen vid nivå 16 på elixirbaracken vilket är högsta nivån på den, för detta krävs rådhusnivå-14. Elektrotitanen har mycket hälsa och kan ta mycket stryck innnan hon dör. Hon kan göra skada till byggnader genom väggar eftesom hon har en aura av elektricitet runt sig. Elektrotitanen har inte någon favoritbyggnad att attackera och attackar den närmaste byggnaden.")
minion = "Minionen är den första mörkerelixirtruppen som spelaren låser upp. Minionen är en flygande trupp som spottar mörkerelixir på byggnader. Den har inte någon favoritbyggnad och attackerar vilken byggnad som helst. Minionen är för liten för att bli upptäckt av någon luftmina."
hogRider = "Grisryttaren är den andra truppen spelaren låser upp i mörkerelixirbaracken. Grisryttaren har medelmåttig hälsa och låg skada. Men den är snabb och kan hoppa över väggar. Grisryttaren attackerar defensiva byggnader före allting annat. "
valkyrie = "Valkyrian är en trupp som låses upp när Dark Barracks har uppgraderats till nivå 3 vilket kräver Town Hall level 8. Hon är en häftig krigare med orange hår, klädd i en lång läderhårduk med matchande bysthållare i läder och knähöga stövlar. Hon använder en massiv dubbelbladig yxa, som är ungefär hälften av hennes storlek. Valkyrier har inget föredraget mål när de attackerar; de kommer helt enkelt att attackera den närmaste byggnaden. Men om de blir medvetna om fiendens klanborgstrupper, hjältar eller skelettfälla skelett (antingen genom att själva bli attackerade eller genom att vara nära en annan vänlig trupp under attack), och kan slå tillbaka mot dem, kommer de att lämna sin tidigare riktade byggnad och engagera istället fiendens trupper. När alla de närliggande fiendens trupper har besegrats, kommer valkyriorna att fortsätta att attackera den närmaste strukturen. Valkyrier snurrar sina yxor runt dem som deras metod för attack, vilket gör att de kan attackera flera mål runt dem samtidigt. De kommer att springa in mellan byggnaderna för att göra detta när det är ett idealiskt alternativ. De kommer dock inte att springa förbi en byggnad för att maximera spinneffekten."
golem = "Golem är en Dark Elixir Troop som låses upp när Dark Barracks har uppgraderats till nivå 4. De är långsamma marktrupper med låg skada men kommer med enorma träffpunkter. När en Golem är besegrad, skapar den två eller tre Golemiter (beroende på Golems nivå) som fortsätter att slåss, var och en bär 1/5 av Golems statistik. Dessa golemiter tillfogar området skada när de förstörs. Golems prioriterar defensiva strukturer framför alla andra mål, och kommer att kringgå alla andra typer av fiendens byggnader och trupper medan eventuella försvar finns kvar på slagfältet. Detta är sant även om de är under attack av fiendens Clan Castle-trupper, hjältar eller Skelettfälla-skelett. Notera att precis som alla trupper som prioriterar försvar, anser Golems inte att klanborgen är ett försvar oavsett om det innehåller fientliga trupper eller inte, men anser att den försvarande Grand Warden och det aktiverade stadshusvapnet (om något finns) är defensivt. byggnader. När alla försvar är förstörda blir Golems som vilken annan trupp som helst utan något föredraget mål; de kommer att attackera den närmaste byggnaden till dem oavsett typ, och kommer att vända och attackera fiendens enheter om de blir medvetna om någon i närheten och kan slå tillbaka mot dem. De kommer dock inte att byta mål till fiendens enheter förrän deras tidigare mål förstörts."
witch = "Häxan är en stänkskadande Dark Elixir-trupp i hembyn som låses upp när Dark Barracks har uppgraderats till nivå 5, vilket kräver Town Hall nivå 9. Häxan skjuter blå projektiler mot sitt mål och kan kalla fram döda krigare från tidigare strider , Skeletten. Endast ett visst antal skelett per häxa kan kallas till slagfältet samtidigt (se tabellen nedan för detaljer). Häxan har kort lila hår som går ner till hennes axlar och har glödande rosa ögon. Hon bär två gyllene axelstycken, ett gyllene bälte, två guldarmband och en trasig kjol. Hon bär också en trasig lila cape och håller en stav med en getskalle. Häxor har inget föredraget mål när de attackerar; de kommer helt enkelt att attackera den närmaste byggnaden. Men om de blir medvetna om fiendens klanborgstrupper, hjältar eller skelettfälla skelett (antingen genom att själva bli attackerade eller genom att vara nära en annan vänlig trupp under attack), och kan slå tillbaka mot dem, kommer de att lämna sin tidigare riktade byggnad och engagera istället fiendens trupper. När alla fiendens trupper i närheten har besegrats, kommer häxorna att fortsätta att attackera den närmaste strukturen."
lavaHound = "Lavahunden är en lufttank med hög träffpunkt med låg skada och måttlig hastighet. Den är upplåst på Dark Barracks nivå 6. Lavahunden är ett eldigt, hunddjur med ett par små vingar. Den är innesluten med flera härdade stenplattor över sin kropp och lava rinner genom varje söm. När lavahunden besegras exploderar den och orsakar en liten mängd skada i området samtidigt som den leker många lavavalpar, som kommer att fortsätta att attackera närliggande mål. Lavahundar prioriterar luftförsvar framför alla andra mål och kommer att kringgå alla andra fiendens byggnader och trupper medan eventuella luftförsvar finns kvar på slagfältet. Detta är sant även om de är under attack av fiendens Clan Castle-trupper, hjältar eller Skelettfälla-skelett. När alla luftförsvar har förstörts kommer de att fortsätta att attackera alla andra återstående försvar. Observera att som alla trupper som prioriterar försvar, anser Lava Hounds inte att klanborgen är ett försvar oavsett om det innehåller fientliga trupper eller inte, men anser att den försvarande Grand Warden och det aktiverade rådhusvapnet (om det finns något) är försvarsbyggnader. När alla återstående försvar förstörs, blir Lava Hounds som vilken annan trupp som helst utan något föredraget mål; de kommer att attackera den närmaste byggnaden till dem oavsett typ, och kommer att vända och attackera fiendens enheter om de blir medvetna om någon i närheten och kan slå tillbaka mot dem."
bowler = "Bowlern är en trupp som kastar ett stort stenblock som studsar; dela ut stänkskador på den första studsen och dela ut stänkskador igen när den landar. Bowlern låses upp på Dark Barracks nivå 7, som är upplåst på Town Hall nivå 10. Bowlern är den första marktrupp som är upplåst som kan skada flera byggnader i en rak linje. Bowlerns stenblock kommer bara att rulla tillräckligt långt för att träffa två mål. Bowlare har inget föredraget mål när de anfaller; de kommer helt enkelt att attackera den närmaste byggnaden. Men om de blir medvetna om fiendens klanborgstrupper, hjältar eller skelettfälla skelett (antingen genom att själva bli attackerade eller genom att vara nära en annan vänlig trupp under attack), och kan slå tillbaka mot dem, kommer de att lämna sin tidigare riktade byggnad och engagera istället fiendens trupper. När alla de närliggande fiendetrupperna har besegrats, kommer bowlarna att fortsätta att attackera den närmaste strukturen."
iceGolem = "Isgolem är en trupp som låses upp när Dark Barracks har uppgraderats till nivå 8, vilket kräver Town Hall nivå 11. Isgolems är kraftfulla tankningsenheter med låg skada men höga träffpunkter för det bostadsutrymme de upptar. Deras attacker saktar ner vad de än attackerar, vilket minskar påverkade försvarsbyggnader eller enheters eldhastighet med 50 % under 2 sekunder. Vid döden fryser Isgolem allt i en stor radie, vilket helt immobiliserar alla försvar och fientliga enheter som fångas inom. Men frysningen vid döden orsakar ingen skada. En Isgolems dödsfrysning kommer inte att hindra fällor från att utlösas och inte heller stoppa en utlösande fälla från att gå av. (Fällan kommer dock att se ut som om den träffades av Ice Golem) Isgolems prioriterar defensiva strukturer framför alla andra mål, och kommer att kringgå alla andra typer av fientliga byggnader och trupper medan eventuella försvar finns kvar på slagfältet. Detta är sant även om de är under attack av fiendens Clan Castle-trupper, hjältar eller Skelettfälla-skelett. Notera att som alla trupper som prioriterar försvar, anser Isgolems inte att klanborgen är ett försvar oavsett om det innehåller fientliga trupper eller inte, men anser att den försvarande Grand Warden och det aktiverade stadshusvapnet (om något) är försvarsbyggnader. När alla försvar förstörs blir Isgolems som vilken annan trupp som helst utan något föredraget mål; de kommer att attackera den närmaste byggnaden till dem oavsett typ, och kommer att vända och attackera fiendens enheter om de blir medvetna om någon i närheten och kan slå tillbaka mot dem. De kommer dock inte att byta mål till fiendens enheter förrän deras tidigare mål förstörts."
headhunter = "Headhuntern är en trupp som låses upp när Dark Barracks har uppgraderats till nivå 9, vilket kräver att spelaren är på Town Hall level 12. Headhunters prioriterar Heroes framför alla andra mål, och kommer att kringgå alla andra typer av fiendens byggnader och trupper medan någon fiende Hjältar finns kvar på slagfältet. Detta gäller även om de är under attack av fiendens Clan Castle-trupper eller Skelettfälla-skelett. Observera att den försvarande Grand Warden anses vara ett försvar och inte en hjälte. När alla fiendens hjältar har slagits ut blir Headhunters som vilken annan trupp som helst utan något föredraget mål; de kommer att attackera den närmaste byggnaden till dem oavsett typ, och kommer att vända och attackera fiendens enheter om de blir medvetna om någon i närheten och kan slå tillbaka mot dem. Headhunterns attacker har en Poison Spell-effekt, som tillfälligt saktar ner trupper och hjältar som attackeras. Giftet påverkar inte byggnader och skadar inte av sig självt. Headhunterns förmågor gäller inte en försvarande Grand Warden eftersom han anses vara en byggnad. Headhunters kan kringgå väggar för att nå alla mål bakom dem. Headhuntern delar samma rörelsehastighet med troll, smygtroll, Minions och gruvarbetare."
superBarbarian = "Superbarbaren är en supertrupp baserad på barbaren. Det kan låsas upp genom att boosta barbaren när barbaren är minst nivå 8. Att boosta barbaren kräver 25 000 Dark Elixir eller en superdryck, och om du gör det kan barbaren boostas i 3 dagar. Nivån på Super Barbarian/Hemby du får från boosten motsvarar nivån på Barbarian du har. Superbarbaren är en närstridsenhet med hög skada per sekund och en bra mängd träffpunkter för sitt bostadsutrymme. Dessutom tillåter hans Rage-förmåga honom att få ökad hastighet och skada under de första 8 sekunderna efter att han har utplacerats, liknande Raged Barbarians från Builder Base. På grund av nivåkravet kräver spelare Town Hall 11 för att öka Barbarians till Super Barbarians. Men på grund av gränsen för laboratorienivån kräver spelare ett Clan Castle på nivå 5 eller högre för att få ett donerat, vilket gör att alla Town Hall 9 eller högre kan få ett. Superbarbarer har inget föredraget mål när de attackerar; de kommer helt enkelt att attackera den närmaste byggnaden. Men om de blir medvetna om fiendens klanborgstrupper, hjältar eller skelettfälla skelett (antingen genom att själva bli attackerade eller genom att vara nära en annan vänlig trupp under attack), och kan slå tillbaka mot dem, kommer de att lämna sin tidigare riktade byggnad och engagera istället fiendens trupper. När alla de närliggande fiendetrupperna har besegrats, kommer superbarbarerna att fortsätta att attackera den närmaste strukturen."
superArcher = "Superbågskytt är en Super Trupp baserad på bågskytten. Den kan låsas upp genom att boosta bågskytten när den är minst nivå 8. Att boosta bågskytten kräver 25 000 Dark Elixir eller en Super Potion, och om du gör det kan bågskytten boostas i 3 dagar. Nivån på Superbågskytten du får från boosten motsvarar nivån på bågskytten du har. Superbågskytten är en enhet med lång räckvidd som avfyrar pilar som kan penetrera flera byggnader samtidigt och skada dem alla samtidigt. På grund av nivåkravet kräver spelare Town Hall 11 för att öka Archers till Superbågskytten. Men på grund av gränsen för laboratorienivån kräver spelare ett Clan Castle på nivå 5 eller högre för att få ett donerat, vilket gör att alla rådhus 9 eller högre kan få ett. Superbågskytten har inget föredraget mål när de anfaller; de kommer helt enkelt att attackera den närmaste byggnaden. Men om de blir medvetna om fiendens klanborgstrupper, hjältar eller skelettfälla skelett (antingen genom att själva bli attackerade eller genom att vara nära en annan vänlig trupp under attack), och kan slå tillbaka mot dem, kommer de att lämna sin tidigare riktade byggnad och engagera istället fiendens trupper. När alla de närliggande fiendetrupperna har besegrats, kommer Superbågskytten att fortsätta att attackera den närmaste strukturen."
sneakyGoblin = "Smygtrollet är en Super Troop baserad på troll. Det kan låsas upp genom att boosta trollet när trollet är minst nivå 7, och när rådhuset uppgraderas till nivå 11 eller högre. Att boosta trollet kräver 25 000 Dark Elixir eller en Super Potion, och om du gör det kan trollet boostas i 3 dagar. Nivån på smygtrollet du får från boosten motsvarar nivån på trollet du har. På grund av Town Hall-kravet kräver spelare Town Hall 11 för att förstärka troll till smygtroll, även om nivåkravet kan uppnås före Town Hall 11. Men på grund av laboratorienivågränsen kräver spelare ett nivå 4 Clan Castle eller högre i för att få en donerad, så att vem som helst rådhus nivå 8 eller högre kan få en. Smygtrollet är Super Troop-versionen av Goblin som gör mer skada och har fler träffpunkter. Dess Cloak-förmåga gör att den förblir osynlig i 5 sekunder efter att den har distribuerats. Smygtroll prioriterar resursbyggnader framför alla andra mål och kommer att kringgå alla andra typer av fiendebyggnader och trupper medan eventuella resursbyggnader finns kvar på slagfältet. Detta är sant även om de är under attack av fiendens Clan Castle-trupper, hjältar eller Skelettfälla-skelett. Notera att liksom alla trupper som prioriterar resurser, anser smygtroll att klanborgen och rådhuset är resursbyggnader oavsett om de innehåller byte eller inte och om rådhusets vapen (om något) är aktiverat eller inte; smygtroll kommer företrädesvis att rikta sig mot dem förutom att de orsakar dubbel skada. När alla resursbyggnader är förstörda blir smygtroll som vilken annan trupp som helst utan något föredraget mål; de kommer att attackera den närmaste byggnaden till dem oavsett typ, och kommer att vända och attackera fiendens enheter om de blir medvetna om någon i närheten och kan slå tillbaka mot dem."
superWallBreaker = "Supermurförstöraren är en Super Troop baserad på murförstöraren. Den kan låsas upp genom att boosta murförstöraren när den är minst nivå 7. Att boosta murförstöraren kräver 25 000 Dark Elixir eller en Super Potion, och gör det möjligt för murförstöraren att boostas i 3 dagar. Nivån på Supermurförstöraren du får från boosten motsvarar nivån på murförstöraren du har. På grund av nivåkravet kräver spelare Town Hall 11 för att öka murförstöraren till Supermurförstöraren. Men på grund av gränsen för laboratorienivån kräver spelare ett Clan Castle på nivå 5 eller högre för att få ett donerat, vilket gör att alla Town Hall 9 eller högre kan få ett. Supermurförstöraren är en förbättrad version av murförstöraren som rullar på en stor tunna bomb. Den rör sig något snabbare än en vanlig murförstörare och kan göra mer skada. Dess Mega Bomb-förmåga garanterar att dess bomb går av oavsett om den träffar sitt mål eller inte. Skadan som utsätts av förmågan är precis tillräckligt hög för att förstöra alla relativa nivåväggar i en träff, och tillräcklig för att förstöra väggar upp till två TH-nivåer högre i en träff om Supermurförstöraren når en vägg och lyckas göra sin normala skada. Supermurförstöraren har två typer av skador; dess normala skada och skada när den förstörs. Om Supermurförstöraren lyckas nå sitt mål gör den båda typerna av skada samtidigt; men om den tas ut innan dess gör den inte sin normala skada och gör bara den skada den gör när den förstörs. Supermurförstöraren prioriterar Walls framför alla andra mål och kommer helt att ignorera alla byggnader eller fientliga trupper medan till och med ett enda segment av Wall existerar på slagfältet. Om alla väggsegment förstörs blir Supermurförstöraren som vilken annan trupp som helst utan något föredraget mål; de kommer att attackera den närmaste byggnaden till dem oavsett typ, och kommer att vända och attackera fiendens enheter om de blir medvetna om någon i närheten och kan slå tillbaka mot dem."
superGiant = "Superjätten är en supertrupp baserad på jätten. Den kan låsas upp genom att boosta jätten när jätten är minst nivå 9. Att boosta jätten kräver 25 000 Dark Elixir eller en superdryck, och om du gör det kan jätten boostas i 3 dagar. Nivån på Superjätten du får från boosten motsvarar nivån på jätten du har. Superjätten är en närstridsenhet med ett mycket stort antal träffpunkter för sitt husutrymme. Dess murbrytar-förmåga gör att den kan ge extra skada (5x) på murar, men trots detta riktar den sig inte företräde till murar. På grund av nivåkravet kräver spelare Town Hall 12 för att förstärka jättar till Superjätten. Men på grund av gränsen för laboratorienivån kräver spelare ett Clan Castle på nivå 6 eller högre för att få ett donerat, vilket gör att alla Town Hall 10 eller högre kan få ett. Superjättarna prioriterar defensiva strukturer framför alla andra mål, och kommer att kringgå alla andra typer av fiendebyggnader och trupper medan eventuella försvar finns kvar på slagfältet. Detta är sant även om de är under attack av fiendens Clan Castle-trupper, hjältar eller Skelettfälla-skelett. Notera att precis som alla trupper som prioriterar försvar, anser Superjätten inte att klanborgen är ett försvar oavsett om det innehåller fientliga trupper eller inte, men anser att den försvarande Grand Warden och det aktiverade stadshusvapnet (om något finns) är försvarsbyggnader. När alla försvar förstörs blir Superjätten som vilken annan trupp som helst utan något föredraget mål; de kommer att attackera den närmaste byggnaden till dem oavsett typ, och kommer att vända och attackera fiendens enheter om de blir medvetna om någon i närheten och kan slå tillbaka mot dem. De kommer dock inte att byta mål till fiendens enheter förrän deras tidigare mål förstörts."
rocketBalloon = "Raketballongen är en supertrupp baserad på ballongen. Den kan låsas upp genom att boosta ballongen när ballongen är minst nivå 8. Raketballongen har raketer fästa vid den, därav namnet, som ger den en ökad hastighet under de första fyra sekunderna efter utplaceringen. Denna hastighetsökning är likvärdig med en hastespell på nivå 5. Bortsett från det har raketballongen högre skada när den förstörs och är något snabbare än vanliga ballonger när fartökningen försvinner, men har samma skada och träffpunkter som ballonger på samma nivå. Att boosta ballongen kräver 25 000 Dark Elixir eller en superdryck, och om du gör det kan ballongen boostas i 3 dagar. Nivån på raketballong du får från boosten motsvarar nivån på ballong du har. På grund av nivåkravet kräver spelare Town Hall 12 för att förstärka ballonger till raketballonger. Men på grund av gränsen för laboratorienivån kräver spelare ett Clan Castle på nivå 6 eller högre för att få ett donerat, vilket gör att alla Town Hall 10 eller högre kan få ett. Raketballonger prioriterar defensiva strukturer framför alla andra mål och kommer att kringgå alla andra typer av fiendens byggnader och trupper medan eventuella försvar finns kvar på slagfältet. Detta är sant även om de är under attack av fiendens Clan Castle-trupper, hjältar eller Skelettfälla-skelett. Notera att precis som alla trupper som prioriterar försvar, anser raketballonger inte att klanborgen är ett försvar oavsett om det innehåller fientliga trupper eller inte, men anser att den försvarande Grand Warden och det aktiverade stadshusvapnet (om något) är försvarsbyggnader. När alla försvar förstörs blir raketballonger som vilken annan trupp som helst utan något föredraget mål; de kommer att attackera den närmaste byggnaden till dem oavsett typ, och kommer att vända och attackera fiendens enheter om de blir medvetna om någon i närheten och kan slå tillbaka mot dem. De kommer dock inte att byta mål till fiendens enheter förrän deras tidigare mål förstörts."
superWizard = "Supertrollkarlen är en supertrupp baserad på guiden. Den kan låsas upp genom att boosta guiden när guiden är minst nivå 9. Att boosta guiden kräver 25 000 Dark Elixir eller en superdryck, och om du gör det kan guiden boostas i 3 dagar. Nivån på Supertrollkarl Village du får från boosten motsvarar nivån på trollkarl du har. Super Supertrollkarl attackerar med blandade eld-blixtar attacker som kan kedja till flera mål. Till skillnad från Electrodrakars kedjeblixt förgrenar Supertrollkarl kedjor sig från det primära målet (i motsats till Electrodrakars kedjor som förgrenar sig från det tidigare målet). Denna kedja kan träffa upp till nio andra mål som är tillräckligt nära det primära målet (som gör 40 % av den vanliga skadan på vart och ett), så den totala attacken kan träffa upp till totalt tio mål. På grund av nivåkravet kräver spelare Town Hall 12 för att förstärka trollkarlar till Supertrollkarlar. Men på grund av gränsen för laboratorienivån kräver spelare ett Clan Castle på nivå 6 eller högre för att få ett donerat, vilket gör att alla Town Hall 10 eller högre kan få ett. Supertrollkarlar har inget föredraget mål när de attackerar; de kommer helt enkelt att attackera den närmaste byggnaden. Men om de blir medvetna om fiendens klanborgstrupper, hjältar eller skelettfälla skelett (antingen genom att själva bli attackerade eller genom att vara nära en annan vänlig trupp under attack), och kan slå tillbaka mot dem, kommer de att lämna sin tidigare riktade byggnad och engagera istället fiendens trupper. När alla de närliggande fiendetrupperna har besegrats, kommer Supertrollkarlar att fortsätta att attackera den närmaste strukturen."
superDragon = "Superdraken är en supertrupp baserad på draken. Den kan låsas upp genom att boosta draken när draken är minst nivå 7. Att boosta draken kräver 25 000 Dark Elixir eller en superdryck, och om du gör det kan draken boostas i 3 dagar. Nivån på Superdraken du får från boosten motsvarar nivån på draken du har. Superdraken är en drake som skjuter upp lågor, liknande Roaster-försvaret i Builder Base. Dess låga slår 10 gånger, var och en gör stänkskada över ett stort effektområde (cirka 1-bricka? radie). På grund av nivåkravet kräver spelare Town Hall 12 för att öka draken till Superdraken. Spelare kräver dock ett Clan Castle på nivå 8 eller högre för att få ett donerat, vilket betyder att inte många kan få en. Superdraken har inget föredraget mål när de attackerar; de kommer helt enkelt att attackera den närmaste byggnaden. Men om de blir medvetna om fiendens klanborgstrupper, hjältar eller skelettfälla skelett (antingen genom att själva bli attackerade eller genom att vara nära en annan vänlig trupp under attack), och kan slå tillbaka mot dem, kommer de att lämna sin tidigare riktade byggnad och engagera istället fiendens trupper. När alla de närliggande fiendetrupperna har besegrats, kommer Superdraken att fortsätta att attackera den närmaste strukturen."
infernoDragon = "Infernodraken är en Super Troop baserad på Babydraken. Den kan låsas upp genom att boosta Babydraken när Babydraken är minst nivå 6. Infernodraken är en superversion av Babydraken som attackerar med en inferno stråle som bygger upp skada över tiden, ungefär som enmåls Inferno Torn. Att boosta Babydarken kräver 25 000 Dark Elixir eller en Super Potion, och gör det möjligt för Babydraken att boostas i 3 dagar. Nivån på Infernodraken du får från boosten motsvarar nivån på Babydraken du har. På grund av nivåkravet kräver spelare Town Hall 12 för att förstärka Babydraken till Infernodraken. Men på grund av gränsen för laboratorienivån kräver spelare ett Clan Castle på nivå 6 eller högre för att få ett donerat, vilket gör att alla Town Hall 10 eller högre kan få en. Infernodraken har inget föredraget mål när den attackerar; den kommer helt enkelt att attackera den närmaste byggnaden. Men om de blir medvetna om fiendens klanborgstrupper, hjältar eller skelettfälla skelett (antingen genom att själva bli attackerade eller genom att vara nära en annan vänlig trupp under attack), och kan slå tillbaka mot dem, kommer de att lämna sin tidigare riktade byggnad och engagera istället fiendens trupper. När alla de närliggande fiendetrupperna har besegrats, kommer Infernodraken att fortsätta att attackera den närmaste strukturen."
superMinion = "Superminionen är en Super Troop baserad på minionen. Den kan låsas upp genom att boosta minionen när den är minst nivå 8. Att boosta minionen kräver 25 000 Dark Elixir eller en Super Potion, och gör det möjligt för minionen att boostas i 3 dagar. Nivån på Superminionen du får från boosten motsvarar nivån på minionen du har. På grund av nivåkravet kräver spelare Town Hall 12 för att öka minionen till Superminionen. Men på grund av gränsen för laboratorienivån kräver spelare ett Clan Castle på nivå 6 eller högre för att få ett donerat, vilket gör att alla Town Hall 10 eller högre kan få ett. Superminionen är en mycket större minion som skjuter raketer från långt avstånd till attack. Dess långskottsförmåga gör det möjligt för den att skjuta sina första 6 skott (de första 3 i försvar) på mycket långt avstånd. Till skillnad från den vanliga minionen kan Superminionen upptäckas och attackeras av Seeking Air Mines. Superminionen har inget föredraget mål när de attackerar; de kommer helt enkelt att attackera den närmaste byggnaden. Men om de blir medvetna om fiendens klanborgstrupper, hjältar eller skelettfälla skelett (antingen genom att själva bli attackerade eller genom att vara nära en annan vänlig trupp under attack), och kan slå tillbaka mot dem, kommer de att lämna sin tidigare riktade byggnad och engagera istället fiendens trupper. När alla fiendens trupper i närheten har besegrats, kommer Superminionen att fortsätta att attackera den närmaste strukturen."
superValkyrie = "Supervalkyrian är en Super Troop baserad på valkyrian. Det kan låsas upp genom att boosta valkyrian när valkyrian är minst nivå 7. Att boosta valkyrian kräver 25 000 Dark Elixir eller en superdryck, och om du gör det kan valkyrian boostas i 3 dagar. Nivån på Supervalkyrian du får från boosten motsvarar nivån på valkyrian du har. På grund av nivåkravet kräver spelare Town Hall 12 för att öka valkyrian till Supervalkyrian. Men på grund av gränsen för laboratorienivån kräver spelare ett Clan Castle på nivå 6 eller högre för att få ett donerat, vilket gör att alla Town Hall 10 eller högre kan få ett. Supervalkyrian är en valkyria med ökade träffpunkter och skada, men tappar en Rage Spell-liknande effekt vid döden (även om denna effekt är visuellt annorlunda än en Rage Spell, beter sig den identiskt med några undantag). Supervalkyrians Rage Spell är identisk med en nivå 4 Rage Spell när det gäller skadeökning och hastighetsökning. Men hennes Rage Spell påverkar ett mindre område (radie med fyra brickor, jämfört med Rage Spells 5) och varar kortare än en vanlig Rage Spell. Supervalkyrian har inget föredraget mål när de attackerar; de kommer helt enkelt att attackera den närmaste byggnaden. Men om de blir medvetna om fiendens klanborgstrupper, hjältar eller skelettfälla skelett (antingen genom att själva bli attackerade eller genom att vara nära en annan vänlig trupp under attack), och kan slå tillbaka mot dem, kommer de att lämna sin tidigare riktade byggnad och engagera istället fiendens trupper. När alla de närliggande fiendetrupperna har besegrats, kommer Supervalkyrian att fortsätta att attackera den närmaste strukturen."
superWitch = "Superhäxan är en Super Troop baserad på häxan. Den kan låsas upp genom att boosta häxan när häxan är minst nivå 5. Superhäxor har inget föredraget mål när de attackerar; de kommer helt enkelt att attackera den närmaste byggnaden. Men om de blir medvetna om fiendens klanborgstrupper, hjältar eller skelettfälla skelett (antingen genom att själva bli attackerade eller genom att vara nära en annan vänlig trupp under attack), och kan slå tillbaka mot dem, kommer de att lämna sin tidigare riktade byggnad och engagera istället fiendens trupper. När alla de närliggande fiendetrupperna har besegrats, kommer Superhäxorna att fortsätta att attackera den närmaste strukturen. Att boosta häxan kräver 25 000 Dark Elixir eller en superdryck, och gör det möjligt för häxan att boostas i 3 dagar. Nivån på Superhäxan du får från boosten motsvarar nivån på häxan du har. På grund av nivåkravet kräver spelare Town Hall 12 för att förstärka häxan till Superhäxan. Spelare kräver dock ett Clan Castle på nivå 8 eller högre för att få ett donerat, vilket innebär att truppen endast är tillgänglig på Town Hall 12 eller högre. Istället för att skapa horder av skelett, som har låg skada och hälsa, men som kommer i höga antal, skapar Superhäxan ett enda jätteskelett känt som Big Boy som har höga skador och träffpunkter. Hon kan bara ha en bog boy aktiv åt gången, även om hon kan kalla en annan om big boy förstörs."
iceHound = "Ishunden är en supertrupp baserad på lavahunden. Den kan låsas upp genom att boosta Lavahunden när Lavahunden är minst nivå 5. Att boosta Lavahunden kräver 25 000 Dark Elixir eller en Super Potion, och gör det möjligt för Lavahunden att boostas i 3 dagar. Nivån på Ishunden du får från boosten motsvarar nivån på Lavahund du har. Ishunden liknar en lavahund, förutom med högre träffpunkter, en förmåga att kyla mål som den träffar och få färre ungar jämfört med lavahunden, som saktar ner drabbade mål precis som Istrolkarlen och IsGolem. Vid döden fryser den det omgivande området som en isgolem och släpper flera isungar. Ishunden gör också lite mindre skada än lavahunden. På grund av nivåkravet kräver spelare Town Hall 12 för att förstärka Lavahunden till Ishunden. Spelare kräver dock ett klanslott på nivå 8 eller högre för att få ett donerat, vilket innebär att de troligen redan har truppen upplåst eller kan göra det på samma rådhusnivå. Ishundar prioriterar luftförsvar framför alla andra mål, och kommer att kringgå alla andra fiendens byggnader och trupper medan eventuella luftförsvar finns kvar på slagfältet. Detta är sant även om de är under attack av fiendens Clan Castle-trupper, hjältar eller Skelettfälla-skelett. När alla luftförsvar har förstörts kommer de att fortsätta att attackera alla andra återstående försvar. Observera att som alla trupper som prioriterar försvar, anser Ishunden inte att klanborgen är ett försvar oavsett om det innehåller fientliga trupper eller inte, men anser att den försvarande Grand Warden och det aktiverade stadshusvapnet (om det finns något) är försvarsbyggnader. När alla återstående försvar förstörs, blir Ishunden som vilken annan trupp som helst utan något föredraget mål; de kommer att attackera den närmaste byggnaden till dem oavsett typ, och kommer att vända och attackera fiendens enheter om de blir medvetna om någon i närheten och kan slå tillbaka mot dem."
superBowler = "Superbowlern är en Super Troop baserad på bowlern. Den kan låsas upp genom att boosta Bowlern när Bowlern är minst nivå 4. Superbowlern kastar förstorade lila stenblock som kan studsa tre gånger (jämfört med en normal Bowler vars stenblock studsar två gånger), vilket gör stänkskador vid varje slag. Successiva studsar sker med 3 brickor från varandra. Att boosta Bowlern kräver 25 000 Dark Elixir eller en Super Potion, och gör det möjligt för Bowlern att boostas i 3 dagar. Nivån på Superbowlern du får från boosten motsvarar nivån på bowlern du har. På grund av nivåkravet kräver spelare Town Hall 12 för att höja bowlern till Superbowlern. Men på grund av gränsen för laboratorienivån kräver spelare ett Clan Castle på nivå 6 eller högre för att få ett donerat, vilket gör att alla Town Hall 10 eller högre kan få ett. Superbowlern har inget föredraget mål när de anfaller; de kommer helt enkelt att attackera den närmaste byggnaden. Men om de blir medvetna om fiendens klanborgstrupper, hjältar eller skelettfälla skelett (antingen genom att själva bli attackerade eller genom att vara nära en annan vänlig trupp under attack), och kan slå tillbaka mot dem, kommer de att lämna sin tidigare riktade byggnad och engagera istället fiendens trupper. När alla fiendens trupper i närheten har besegrats, kommer Superbowlern att fortsätta att attackera den närmaste strukturen."
superMiner = "Supergruvarbetaren är en Super Troop baserad på gruvarbetaren. Det kan låsas upp genom att boosta gruvarbetaren när gruvarbetaren är minst nivå 7. Att boosta gruvarbetaren kräver 25 000 Dark Elixir eller en superdryck, och om du gör det kan gruvarbetaren boostas i 3 dagar. Nivån på Supergruvarbetaren du får från boosten motsvarar nivån på gruvarbetaren du har. Supergruvarbetaren använder en borr för att attackera och gör skada som ökar ju längre den attackerar, liknande Infernodraken. Supergruvarbetaren bär också en explosiv tunna, som detonerar vid hans död; bomben skadar i hög grad alla byggnader och fiendens markenheter inom en radie på två plattor. Precis som gruvarbetaren gräver Supergruvarbetaren ner under jorden för att attackera, vilket gör den osårbar för försvar medan den är under jord. På grund av nivåkravet kräver spelare Town Hall 13 för att öka gruvarbetaren till Supergruvarbetaren. Spelare kräver dock ett Clan Castle på nivå 7 eller högre för att få ett donerat, vilket betyder att inte många kan få ett. Supergruvarbetaren har inget föredraget mål när de attackerar; de kommer helt enkelt att attackera den närmaste byggnaden. Men om de blir medvetna om fiendens klanborgstrupper, hjältar eller skelettfälla skelett (antingen genom att själva bli attackerade eller genom att vara nära en annan vänlig trupp under attack), och kan slå tillbaka mot dem, kommer de att lämna sin tidigare riktade byggnad och engagera istället fiendens trupper. När alla de närliggande fiendetrupperna har besegrats, kommer Supergruvarbetaren att fortsätta att attackera den närmaste strukturen."
lightningSpell = "Blixtbesvärjelsen är den första Elixir-besvärjelsen som låses upp i trollformsfabriken, och låses upp automatiskt när trollformelfabriken har byggts färdigt, vilket kräver att stadshuset är på nivå 5. Blixtbesvärjelsen skadar byggnader och fiendens trupper i en liten radie, med undantag för resursförråd, rådhuset och klanborgen. Om en defensiv byggnad eller trupp träffas av bulten, bedövas den kort och riktar sig om."
healingSpell = "Läketrollformeln är den andra besvärjelsen som låses upp på Level 2 Spell Factory, vilket kräver att stadshuset är på nivå 6. När den placeras bildar besvärjelsen en stationär ring av helande på marken. Alla vänliga trupper och hjältar inom ringen kommer att bli helade (mark eller luft), inklusive healers. Även om hjältar också kan helas av läketrollformeln, reduceras läkningshastigheten till 55 % av normala trupper. Å andra sidan är Siege Machines helt opåverkade av Healing Spell. Den varar i totalt 12 sekunder (40 läkande \"pulser\" var 0,3 sekund). Visuellt ger läketrollformeln en medelstor radie med gula nyanser av glödande färg som representerar den helande effekten. En liknande effekt kan ses medan healern läker."
rageSpell = "Arghetstrolldyrcken är den 3:e besvärjelsen som låses upp när Spell Factory är nivå 3 eller högre, vilket kräver att stadshuset är minst nivå 7. Den skapar en genomskinlig lila ring på slagfältet som ökar rörelsehastigheten och skadan för alla vänliga trupper och Hjältar inne i ringen. När det gäller healers ökar arghetstrollformeln l dens helande med en liknande mängd. Arghetstrolldryckens effekt varar i 18 sekunder. Rage Spell har en minskad effekt på Heroes, och ger dem bara 50 % av dess skada och fartökningar. Siege Machines kan inte påverkas av arghetstrolldyrcken. När en trupp lämnar arghetstrolldyrcken effektområde kommer raserianeffekten att försvinna tills de kommer in i området igen. Det har funnits en hel del förvirring om huruvida den listade \"skadeökningen\" är additiv (+130 % skada) eller multiplikativ (skada * 1,3)."
jumpSpell = "Hoppbesvärjelsen är den 4:e Elixirbesvärjelsen som låses upp på nivå 4 trollformelfabriken tillsammans med frystrollformeln, som kräver att stadshuset är på nivå 9. Hoppbesvärjelsen tillåter marktrupper och hjältar att hoppa över murar. Hopptrollformler har ingen som helst effekt på enheter som kan kringgå väggar, såsom luftenheter, Hog Riders, Miners, Headhunters, Grand Warden och Royal Champion. Hopptrollformeln kommer inte heller att påverka beteendet hos markbeläggningsmaskiner som Wall Wrecker. Uppgradering av denna besvärjelse kommer att öka dess varaktighet på slagfältet med cirka 20 sekunder (nivå 3 Hopptrollformel varar tre gånger så länge som nivå 1 Hopptrollformel)."
freezeSpell = "Frystrollformeln är den 5:e Elixir-besvärjelsen som låses upp på nivå 4 Spell Factory tillsammans med hopptrollformeln, som kräver att stadshuset är på nivå 9. Frystrollformeln används för att tillfälligt inaktivera försvar och/eller mark- och lufttrupper från fiendens klan Slott inom en liten radie. Tills besvärjelsens varaktighet är slut, kommer de påverkade fiendens enheter varken att röra sig eller attackera (eller läka, i fallet med en healer som fryses). Fiendetrupper som inte är inom dess radie när besvärjelsen fälls är opåverkade av Freeze-besvärjelsen, även om de flyttar in i effektområdet medan den fortfarande är aktiv. Det är en av de billigaste Elixir-besvärjelserna i spelet, på grund av att den bara tar ett spelutrymme jämfört med två eller tre för de flesta andra Elixir-trollformler."
cloneSpell = "Klonbesvärjelsen är den 6:e Elixirbesvärjelsen som låses upp på nivå 5 Spell Factory, vilket kräver att stadshuset är på nivå 10. Som namnet på denna förtrollning antyder, klonar den trupper som kommer in i förtrollningens radie. De kopierade trupperna är lika i nivå med den ursprungliga truppen och verkar med full hälsa. De varar bara en begränsad tid och kan förstöras i förtid av försvar. En enda trupp räcker för att generera kopior av sig själv för besvärjningsnivåns husrum. Den kan klona alla trupper utom hjältar, husdjur, superhäxan, ishunden, superdraken (de tre sistnämnda tar upp för mycket husutrymme). Den kan till och med klona alla befintliga kloner."
invisibilitySpell = "Osynlighetstrollformeln är den 7:e Elixir-besvärjelsen som är tillgänglig för Town Hall 11, låst upp genom att uppgradera Spell Factory till nivå 6. Den tillåter alla offensiva eller defensiva enheter (med undantag för Walls and Siege Machines) i dess radie att bli osynliga och vara oförmögna att bli föremål för någonting tills de går utanför radien eller varaktigheten tar slut. Om besvärjelsen träffar en byggnad som trupperna ursprungligen riktade in sig på, kommer de att lämna sitt tidigare mål och engagera sig i ett annat som är nära dem. Osynliga enheter kan fortfarande påverkas av andra trollformler och kan även träffas indirekt genom stänkskadande attacker eller på annat sätt. Skadliga projektiler kommer fortfarande att träffa alla trupper som de riktar in sig på om de skickas innan besvärjelsen har påverkat den riktade truppen."
recallSpell = "Återkallningsbesvärjelsen är den åttonde besvärjelsen som låses upp när trollformsfabriken är nivå 7, vilket kräver att stadshuset är minst nivå 13. När det är utplacerat skickar det trupper, hjältar och husdjur i sitt effektområde tillbaka till utbyggnadsfältet, vilket tillåter dem att återutplaceras någon annanstans (med förbehåll för byns utplaceringszoner). Siege Machines kan inte återkallas på grund av deras besvärjelseimmunitet. Återkallelsetrollformeln har bara en begränsad kapacitet, och denna kapacitet ökar när den uppgraderas. Om den inte kan återkalla alla enheter inom sitt effektområde, har enheterna med högst bostadsyta prioritet. Mellan enheter med samma bostadsyta kommer enheter som sätts in först att prioriteras."
poisonSpell = "Gifttrollformeln är den första Dark Spell som låses upp i Dark Spell Factory, och låses upp automatiskt när Dark Spell Factory har byggts färdigt, vilket kräver att stadshuset är på nivå 8. Det saktar ner alla fiendens Clan Castle Troops, Heroes, och skelett inom dess effektområde (och får dem att ta skada med tiden). Men byggnader förblir opåverkade av gifttrollformeln. Gifttrollformeln ökar långsamt i skada ju längre en enhet förblir förgiftad. Effekten varar i ytterligare 6 sekunder efter att enheten lämnar giftradien."
earthquakeSpell = "Jordbävingstrollfromeln är den andra Dark Spell som låses upp på nivå 2 Dark Spell Factory, vilket kräver att stadshuset är på nivå 8. Den delar ut en procentandel av skadorna på alla byggnader inom sitt effektområde, utom förråden. Liksom blixten kan jordbävningstrollformler inte skada resurslagringar, men kan skada resurssamlare. Den största skillnaden är att jordbävingstrollfromeln på något sätt kan skada rådhuset och klanborgen."
hasteSpell = "Snabbhetstrolldrycken är den 3:e Dark Elixir-besvärjelsen som låses upp på Dark Spell Factory-nivå 3 som kräver att stadshuset är på nivå 9. På samma sätt som en arghetstrollformeln ökar den truppernas rörelsehastighet i dess effektområde, men till en större effekt; Men snabbhetstrolldrycken ökar inte deras skada. Snabbhetstrolldrycken har också en något mindre radie än en arghetstrolldryck. Till skillnad från arghetstrolldrycken är Snabbhetstrolldrycken halva besvärjelsen av dem. Liksom med läketrolldrycken och arghetstrolldrycken har Snabbhetstrolldrycken en minskad effekt på Heroes, och ger dem bara 50 % av sin hastighetshöjning."
skeletonSpell = "Skelettbesvärjelsen är den 4:e mörka besvärjelsen som låses upp på nivå 4 Dark Spell Factory som kräver att stadshuset är på nivå 9. När denna besvärjelse kastas fram kallar den flera skelett på slagfältet. Dessa skelett är mycket svaga, men kan ge en bra distraktion. Liksom skelett som tillkallats av häxor, utlöser de inte fällor eller Clan Castle-trupper. Besvärjelsens skelett gör mycket mindre skada på resursbyggnader. I synnerhet påverkar detta dess interaktion med rådhuset, vilket förhindrar att det lätt förstörs."
batSpell = "Fladdermusbesvärjelsen är den 5:e och sista mörka besvärjelsen som låses upp på nivå 5 Dark Spell Factory som kräver att stadshuset är på nivå 10. När den kastar denna besvärjelse tillkallar den flera fladdermöss på slagfältet över tiden (dess lekningsmetod liknar den som en skelettbesvärjelse). Dessa fladdermöss har låg hälsa och målförsvar. Liksom skelett utlöser inte fladdermöss fällor eller Clan Castle-trupper. Fladdermöss prioriterar defensiva strukturer framför alla andra mål, och kommer att kringgå alla andra typer av fiendens byggnader och trupper medan eventuella försvar finns kvar på slagfältet. Detta är sant även om de är under attack av fiendens Clan Castle-trupper, hjältar eller Skelettfälla-skelett. Observera att precis som alla trupper som prioriterar försvar, så anser inte fladdermössen att klanborgen är ett försvar oavsett om det innehåller fientliga trupper eller inte, men anser att den försvarande Grand Warden och det aktiverade stadshusvapnet (om något) är defensivt. byggnader. När alla försvar förstörs blir fladdermöss som vilken annan trupp som helst utan något föredraget mål; de kommer att attackera den närmaste byggnaden till dem oavsett typ, och kommer att vända sig och attackera fiendens enheter om de blir medvetna om någon i närheten och kan slå tillbaka mot dem. De kommer dock inte att byta mål till fiendens enheter förrän deras tidigare mål förstörts. Fladdermöss som skapats från Bat Spell ger mindre skada på resurslagringar; i synnerhet gäller detta Rådhusets Giga Tesla, och Giga Inferno, eftersom det klassas som ett försvar och ett resursförråd. Fladdermössen relaterar också till Builder Base-truppen, även känd som Night Witch. Natthäxan skapar fladdermöss som relaterar till fladdermössen i fladdermusbesvärjelsen. Natthäxans fladdermöss attackerar dock vilket mål som helst."
cannon = "Kanonen är ett försvar med ett mål som ger måttlig skada. Det är den första defensiva strukturen som en spelare bygger i början av sitt Clash of Clans-äventyr. Spelaren måste bygga en under handledningen. Kanoner är både billiga och snabba att uppgradera på lägre nivåer. Kanoner kan skjuta vilken markenhet som helst, som barbarer och bågskyttar, men den kan inte skjuta några luftenheter, som drakar, ballonger etc. Från och med nivå 7, som kräver Town Hall 6, kan byggmästaren rusta upp en kanon för att få den att likna en dubbelkanon, om han är tillgänglig. Detta kräver också att minst en dubbelkanon i Builder Base är nivå 4 eller högre, vilket kräver Builder Hall 4."
archerTower = "Bågskyttetorn är ett försvar med ett mål i hembyn. De är det andra försvaret som är tillgängligt för spelare och det första försvaret som attackerar flygtrupper, upplåsta vid Town Hall 2. Bågskyttetorn är extremt mångsidiga strukturer. De kan rikta in sig på både mark- och luftenheter och de har utmärkt räckvidd. Denna mångsidighet innebär att de bör utgöra hörnstenen i varje spelares försvar. Från och med nivå 10, som är vid Town Hall 8, kan ett bågskyttetorn rustas upp av Master Builder om han är tillgänglig och minst ett bågskyttetorn i Builder Base uppgraderas till nivå 6, vilket är på Builder Hall 6. Detta ger bågskyttetorn ett \"Fast Attack\"-läge, som fördubblar dess skadeuttag på bekostnad av dess räckvidd, som sågskyttetorn i Builder Base."

troop_info_list = [barbarian,archer,giant,goblin,wallBreaker,balloon,wizard,healer,dragon,pekka,babyDragon,miner,electroDragon,yeti,dragonRider,electroTitan,minion,hogRider,valkyrie,golem,witch,lavaHound,bowler,iceGolem,headhunter,superBarbarian,superArcher,sneakyGoblin,superWallBreaker,superGiant,rocketBalloon,superWizard,superDragon,infernoDragon,superMinion,superValkyrie,superWitch,iceHound,superBowler,superMiner,lightningSpell,healingSpell,rageSpell,jumpSpell,freezeSpell,cloneSpell,invisibilitySpell,recallSpell,poisonSpell,earthquakeSpell,hasteSpell,skeletonSpell,batSpell,cannon,archerTower];

troopInfo = troop_info_list[Number];

r_cannon = "bilder/cannon1.png"
r_archerTower = "bilder/archer-tower1.webp"
r_mortar = "bilder/mortar1.png"
r_wizardTower = "bilder/wizard-tower1.png"
r_bombTower = "bilder/bomb-tower1.webp"
r_eagleArtillery = "bilder/eagle-artillery1.webp"
r_scatterShot = "bilder/Scattershot1.webp"
r_springTrap = "bilder/spring-trap.webp"
r_giantBomb = "bilder/giant-bomb.webp"
r_bomb = "bilder/bomb.png"
r_wall ="bilder/wall1.png"
r_airDefence = "bilder/air-defence1.webp"
r_seekingAirMine = "bilder/seeking-air-mine.webp"
r_hiddenTesla = "bilder/hidden-tesla1.png"
r_infernoTower = "bilder/inferno-tower1.png"
r_monolith = "bilder/monolith1.webp"
r_skeletonTrap = "bilder/skeleton-trap.webp"
r_airBomb = "bilder/air-bomb.webp"
r_Xbow = "bilder/XBow1.png"

r_barbarian = "bilder/barbarian.png"
r_archer = "bilder/archer.png"
r_goblin = "bilder/goblin.png"
r_dragon = "bilder/dragon.webp"
r_electroDragon = "bilder/electro-dragon.webp"
r_balloon = "bilder/balloon.webp"
r_minion = "bilder/minion.webp"
r_pekka = "bilder/pekka.png"
r_hogRider = "bilder/hog-rider.png"
r_giant = "bilder/giant.png"
r_wallBreaker = "bilder/wall-breaker.webp"
r_superWallBreaker = "bilder/super-wall-breaker.webp"
r_witch = "bilder/witch.png"
r_batSpell = "bilder/bat-spell.webp"
r_electroTitan = "bilder/electro-titan.webp"
r_iceGolem = "bilder/ice-golem.webp"
r_golem = "bilder/golem.webp"
r_lavaHound = "bilder/lava-hound.webp"
r_miner = "bilder/miner.webp"
r_sneakyGoblin = "bilder/sneaky-goblin.webp"
r_wizard = "bilder/wizard.webp"
r_healer = "bilder/healer.webp"

h_cannon = "army-product-page.html?src=bilder/cannon1.png&number=53"
h_archerTower = "army-product-page.html?src=bilder/archer-tower1.webp&number=54"
h_mortar = "army-product-page.html?src=bilder/mortar1.png&number=56"
h_wizardTower = "army-product-page.html?src=bilder/wizard-tower1.png&number=58"
h_bombTower = "army-product-page.html?src=bilder/bomb-tower1.webp&number=61"
h_eagleArtillery = "army-product-page.html?src=bilder/eagle-artillery1.webp&number=64"
h_scatterShot = "army-product-page.html?src=bilder/scattershot1.webp&number=65"
h_springTrap = "army-product-page.html?src=bilder/spring-trap.webp&number=73"
h_giantBomb = "army-product-page.html?src=bilder/giant-bomb.webp&number=75"
h_bomb = "army-product-page.html?src=bilder/bomb.png&number=72"
h_wall = "army-product-page.html?src=bilder/wall1.png&number=55"
h_airDefence = "army-product-page.html?src=bilder/air-defence1.webp&number=57"
h_seekingAirMine = "army-product-page.html?src=bilder/seeking-air-mine.webp&number=76"
h_hiddenTesla = "army-product-page.html?src=bilder/hidden-tesla.png&number=60"
h_infernoTower = "army-product-page.html?src=bilder/inferno-tower1.png&number=63"
h_monolith = "army-product-page.html?src=bilder/monolith1.webp&number=67"
h_skeletonTrap = "army-product-page.html?src=bilder/skeleton-trap.webp&number=77"
h_airBomb = "army-product-page.html?src=bilder/air-bomb.webp&number=74"
h_Xbow = "army-product-page.html?src=bilder/XBow1.png&number=62"

h_barbarian = "army-product-page.html?src=bilder/barbarian.png&number=0"
h_archer = "army-product-page.html?src=bilder/archer.png&number=1"
h_goblin = "army-product-page.html?src=bilder/goblin.png&number=3"
h_dragon = "army-product-page.html?src=bilder/dragon.webp&number=8"
h_electroDragon = "army-product-page.html?src=bilder/electro-dragon.webp&number=12"
h_balloon = "army-product-page.html?src=bilder/balloon.webp&number=5"
h_minion = "army-product-page.html?src=bilder/minion.webp&number=16"
h_pekka = "army-product-page.html?src=bilder/pekka.png&number=9"
h_hogRider = "army-product-page.html?src=bilder/hog-rider.png&number=17"
h_giant = "army-product-page.html?src=bilder/giant.png&number=2"
h_wallBreaker = "army-product-page.html?src=bilder/wall-breaker.webp&number=4"
h_superWallBreaker = "army-product-page.html?src=bilder/super-wall-breaker.webp&number=28"
h_witch = "army-product-page.html?src=bilder/witch.png&number=20"
h_batSpell = "army-product-page.html?src=bilder/bat-spell.webp&number=52"
h_electroTitan = "army-product-page.html?src=bilder/electro-titan.webp&number=15"
h_iceGolem = "army-product-page.html?src=bilder/ice-golem.webp&number=23"
h_golem = "army-product-page.html?src=bilder/golem.webp&number=19"
h_lavaHound = "army-product-page.html?src=bilder/lava-hound.webp&number=21"
h_miner = "army-product-page.html?src=bilder/miner.webp&number=11"
h_sneakyGoblin = "army-product-page.html?src=bilder/sneaky-goblin.webp&number=27"
h_wizard = "army-product-page.html?src=bilder/wizard.webp&number=6"
h_healer = "army-product-page.html?src=bilder/healer.webp&number=7"

if(Number == 0){
    sImg = r_cannon 
    sImg2 = r_archerTower
    sImg3 = ""
    sHref = h_cannon 
    sHref2 = h_archerTower 
    sHref3 = ""
    wImg = r_mortar 
    wImg2 = r_wizardTower
    wImg3 = r_bombTower
    wHref = h_mortar
    wHref2 = h_wizardTower
    wHref3 = h_bombTower
}
else if(Number == 1){
    sImg = r_cannon
    sImg2 = r_archerTower
    sImg3 = ""
    sHref = h_cannon 
    sHref2 = h_archerTower 
    sHref3 = ""
    wImg = r_mortar 
    wImg2 = r_wizardTower
    wImg3 = r_bombTower
    wHref = h_mortar
    wHref2 = h_wizardTower
    wHref3 = h_bombTower
}
else if(Number == 2){
    sImg = r_cannon
    sImg2 = r_archerTower
    sImg3 = r_wizardTower
    sHref = h_cannon 
    sHref2 = h_archerTower 
    sHref3 = h_wizardTower
    wImg = r_eagleArtillery 
    wImg2 = r_scatterShot
    wImg3 = r_bombTower
    wHref = h_eagleArtillery
    wHref2 = h_scatterShot
    wHref3 = h_bombTower
}
else if(Number == 3){
    sImg = r_springTrap
    sImg2 = r_giantBomb
    sImg3 = r_bomb
    sHref = h_springTrap
    sHref2 = h_giantBomb
    sHref3 = h_bomb
    wImg = r_mortar
    wImg2 = r_wizardTower
    wImg3 = r_bombTower
    wHref = h_mortar
    wHref2 = h_wizardTower
    wHref3 = h_bombTower
}

else if(Number == 4){
    sImg = r_wall
    sImg2 = ""
    sImg3 = ""
    sHref = h_wall
    sHref2 = ""
    sHref3 = ""
    wImg = r_mortar
    wImg2 = ""
    wImg3 = ""
    wHref = h_mortar
    wHref2 = ""
    wHref3 = ""
}

else if(Number == 5){
    sImg = r_cannon
    sImg2 = r_mortar
    sImg3 = r_bombTower
    sHref = h_cannon
    sHref2 = h_mortar
    sHref3 = h_bombTower
    wImg = r_airDefence
    wImg2 = r_seekingAirMine
    wImg3 = r_scatterShot
    wHref = h_airDefence
    wHref2 = h_seekingAirMine
    wHref3 = h_scatterShot
}

else if(Number == 6){
    sImg = r_cannon
    sImg2 = r_hiddenTesla
    sImg3 = r_airDefence
    sHref = h_cannon
    sHref2 = h_hiddenTesla
    sHref3 = h_airDefence
    wImg = r_mortar
    wImg2 = r_scatterShot
    wImg3 = r_eagleArtillery
    wHref = h_mortar
    wHref2 = h_scatterShot
    wHref3 = h_eagleArtillery
}

else if(Number == 7){
    sImg = ""
    sImg2 = ""
    sImg3 = ""
    sHref = ""
    sHref2 = ""
    sHref3 = ""
    wImg = r_airDefence
    wImg2 = r_archerTower
    wImg3 = r_seekingAirMine
    wHref = h_airDefence
    wHref2 = h_archerTower
    wHref3 = h_seekingAirMine
}

else if(Number == 8){
    sImg = r_cannon
    sImg2 = r_mortar
    sImg3 = r_bombTower
    sHref = h_cannon
    sHref2 = h_mortar
    sHref3 = h_bombTower
    wImg = r_airDefence
    wImg2 = r_infernoTower
    wImg3 = r_scatterShot
    wHref = h_airDefence
    wHref2 = h_infernoTower
    wHref3 = h_scatterShot
}

else if(Number == 9){
    sImg = r_cannon
    sImg2 = r_archerTower
    sImg3 = r_mortar
    sHref = h_cannon
    sHref2 = h_archerTower
    sHref3 = h_mortar
    wImg = r_infernoTower
    wImg2 = r_hiddenTesla
    wImg3 = r_monolith
    wHref = h_infernoTower
    wHref2 = h_hiddenTesla
    wHref3 = h_monolith
}

else if(Number == 10){
    sImg = r_cannon
    sImg2 = r_mortar
    sImg3 = r_bombTower
    sHref = h_cannon
    sHref2 = h_mortar
    sHref3 = h_bombTower
    wImg = r_airDefence
    wImg2 = r_seekingAirMine
    wImg3 = r_archerTower
    wHref = h_airDefence
    wHref2 = h_seekingAirMine
    wHref3 = h_archerTower
}

else if(Number == 11){
    sImg = r_wall
    sImg2 = r_eagleArtillery
    sImg3 = r_airDefence
    sHref = h_wall
    sHref2 = h_eagleArtillery
    sHref3 = h_airDefence
    wImg = r_scatterShot
    wImg2 = r_giantBomb
    wImg3 = ""
    wHref = h_scatterShot
    wHref2 = h_giantBomb
    wHref3 = ""
}

else if(Number == 12){
    sImg = r_cannon
    sImg2 = r_mortar
    sImg3 = r_bombTower
    sHref = h_cannon
    sHref2 = h_mortar
    sHref3 = h_bombTower
    wImg = r_infernoTower
    wImg2 = r_monolith
    wImg3 = r_airDefence
    wHref = h_infernoTower
    wHref2 = h_monolith
    wHref3 = h_airDefence
}

else if(Number == 13){
    sImg = r_airDefence
    sImg2 = r_archerTower
    sImg3 = r_cannon
    sHref = h_airDefence
    sHref2 = h_archerTower
    sHref3 = h_cannon
    wImg = r_eagleArtillery
    wImg2 = r_scatterShot
    wImg3 = r_monolith
    wHref = h_eagleArtillery
    wHref2 = h_scatterShot
    wHref3 = h_monolith
}

else if(Number == 14){
    sImg = r_wall
    sImg2 = r_cannon
    sImg3 = r_mortar
    sHref = h_wall
    sHref2 = h_cannon
    sHref3 = h_mortar
    wImg = r_monolith
    wImg2 = r_infernoTower
    wImg3 = r_seekingAirMine
    wHref = h_monolith
    wHref2 = h_infernoTower
    wHref3 = h_seekingAirMine
}

else if(Number == 15){
    sImg = r_skeletonTrap
    sImg2 = r_archerTower
    sImg3 = r_airDefence
    sHref = h_skeletonTrap
    sHref2 = h_archerTower
    sHref3 = h_airDefence
    wImg = r_monolith
    wImg2 = r_infernoTower
    wImg3 = r_scatterShot
    wHref = h_monolith
    wHref2 = h_infernoTower
    wHref3 = h_scatterShot
}

else if(Number == 16){
    sImg = r_airBomb
    sImg2 = r_seekingAirMine
    sImg3 = r_cannon
    sHref = h_airBomb
    sHref2 = h_seekingAirMine
    sHref3 = h_cannon
    wImg = r_archerTower
    wImg2 = r_airDefence
    wImg3 = r_wizardTower
    wHref = h_archerTower
    wHref2 = h_airDefence
    wHref3 = h_wizardTower
}

else if(Number == 17){
    sImg = r_wall
    sImg2 = r_airDefence
    sImg3 = r_archerTower
    sHref = h_wall
    sHref2 = h_airDefence
    sHref3 = h_archerTower
    wImg = r_springTrap
    wImg2 = r_bombTower
    wImg3 = r_scatterShot
    wHref = h_springTrap
    wHref2 = h_bombTower
    wHref3 = h_scatterShot
}

else if(Number == 18){
    sImg = r_airDefence
    sImg2 = r_cannon
    sImg3 = r_archerTower
    sHref = h_airDefence
    sHref2 = h_cannon
    sHref3 = h_archerTower
    wImg = r_eagleArtillery
    wImg2 = r_scatterShot
    wImg3 = r_bombTower
    wHref = h_eagleArtillery
    wHref2 = h_scatterShot
    wHref3 = h_bombTower
}

else if(Number == 19){
    sImg = r_cannon
    sImg2 = r_wizardTower
    sImg3 = r_airDefence
    sHref = h_cannon
    sHref2 = h_wizardTower
    sHref3 = h_airDefence
    wImg = r_monolith
    wImg2 = r_infernoTower
    wImg3 = r_scatterShot
    wHref = h_monolith
    wHref2 = h_infernoTower
    wHref3 = h_scatterShot
}

else if(Number == 20){
    sImg = r_infernoTower
    sImg2 = r_monolith
    sImg3 = r_cannon
    sHref = h_infernoTower
    sHref2 = h_monolith
    sHref3 = h_cannon
    wImg = r_bombTower
    wImg2 = r_wizardTower
    wImg3 = r_scatterShot
    wHref = h_bombTower
    wHref2 = h_wizardTower
    wHref3 = h_scatterShot
}

else if(Number == 21){
    sImg = r_airDefence
    sImg2 = ""
    sImg3 = ""
    sHref = h_airDefence
    sHref2 = ""
    sHref3 = ""
    wImg = r_airDefence
    wImg2 = r_seekingAirMine
    wImg3 = r_infernoTower
    wHref = h_airDefence
    wHref2 = h_seekingAirMine
    wHref3 = h_infernoTower
}

else if(Number == 22){
    sImg = r_infernoTower
    sImg2 = r_bombTower
    sImg3 = r_airDefence
    sHref = h_infernoTower
    sHref2 = h_bombTower
    sHref3 = h_airDefence
    wImg = r_eagleArtillery
    wImg2 = r_scatterShot
    wImg3 = ""
    wHref = h_eagleArtillery
    wHref2 = h_scatterShot
    wHref3 = ""
}

else if(Number == 23){
    sImg = r_infernoTower
    sImg2 = r_Xbow
    sImg3 = ""
    sHref = h_infernoTower
    sHref2 = h_Xbow
    sHref3 = ""
    wImg = r_monolith
    wImg2 = r_archerTower
    wImg3 = r_eagleArtillery
    wHref = h_monolith
    wHref2 = h_archerTower
    wHref3 = h_eagleArtillery
}

else if(Number == 24){
    sImg = ""
    sImg2 = ""
    sImg3 = ""
    sHref = ""
    sHref2 = ""
    sHref3 = ""
    wImg = r_cannon
    wImg2 = r_archerTower
    wImg3 = r_Xbow
    wHref = h_cannon
    wHref2 = h_archerTower
    wHref3 = h_Xbow
}

else if(Number == 25){
    sImg = r_airDefence
    sImg2 = r_wall
    sImg3 = r_wizardTower
    sHref = h_airDefence
    sHref2 = r_wall
    sHref3 = r_wizardTower
    wImg = r_Xbow
    wImg2 = r_eagleArtillery
    wImg3 = r_scatterShot
    wHref = h_Xbow
    wHref2 = h_eagleArtillery
    wHref3 = h_scatterShot
}

else if(Number == 26){
    sImg = r_archerTower
    sImg2 = r_wizardTower
    sImg3 = r_cannon
    sHref = h_archerTower
    sHref2 = h_wizardTower
    sHref3 = h_cannon
    wImg = r_scatterShot
    wImg2 = r_eagleArtillery
    wImg3 = ""
    wHref = h_scatterShot
    wHref2 = h_eagleArtillery
    wHref3 = ""
}

else if(Number == 27){
    sImg = r_springTrap
    sImg2 = r_giantBomb
    sImg3 = r_bomb
    sHref = h_springTrap
    sHref2 = h_giantBomb
    sHref3 = h_bomb
    wImg = r_mortar
    wImg2 = r_wizardTower
    wImg3 = r_bombTower
    wHref = h_mortar
    wHref2 = h_wizardTower
    wHref3 = h_bombTower
}

else if(Number == 28){
    sImg = r_wall
    sImg2 = ""
    sImg3 = ""
    sHref = h_wall
    sHref2 = ""
    sHref3 = ""
    wImg = ""
    wImg2 = ""
    wImg3 = ""
    wHref = ""
    wHref2 = ""
    wHref3 = ""
}

else if(Number == 29){
    sImg = r_cannon
    sImg2 = r_archerTower
    sImg3 = r_wizardTower
    sHref = h_cannon 
    sHref2 = h_archerTower 
    sHref3 = h_wizardTower
    wImg = r_eagleArtillery 
    wImg2 = r_scatterShot
    wImg3 = r_bombTower
    wHref = h_eagleArtillery
    wHref2 = h_scatterShot
    wHref3 = h_bombTower
}

else if(Number == 30){
    sImg = r_cannon
    sImg2 = r_mortar
    sImg3 = r_bombTower
    sHref = h_cannon
    sHref2 = h_mortar
    sHref3 = h_bombTower
    wImg = r_airDefence
    wImg2 = r_seekingAirMine
    wImg3 = r_scatterShot
    wHref = h_airDefence
    wHref2 = h_seekingAirMine
    wHref3 = h_scatterShot
}

else if(Number == 31){
    sImg = r_cannon
    sImg2 = r_hiddenTesla
    sImg3 = r_airDefence
    sHref = h_cannon
    sHref2 = h_hiddenTesla
    sHref3 = h_airDefence
    wImg = r_mortar
    wImg2 = r_scatterShot
    wImg3 = r_eagleArtillery
    wHref = h_mortar
    wHref2 = h_scatterShot
    wHref3 = h_eagleArtillery
}

else if(Number == 32){
    sImg = r_cannon
    sImg2 = r_mortar
    sImg3 = r_bombTower
    sHref = h_cannon
    sHref2 = h_mortar
    sHref3 = h_bombTower
    wImg = r_airDefence
    wImg2 = r_infernoTower
    wImg3 = r_scatterShot
    wHref = h_airDefence
    wHref2 = h_infernoTower
    wHref3 = h_scatterShot
}

else if(Number == 33){
    sImg = r_cannon
    sImg2 = r_mortar
    sImg3 = r_bombTower
    sHref = h_cannon
    sHref2 = h_mortar
    sHref3 = h_bombTower
    wImg = r_airDefence
    wImg2 = r_seekingAirMine
    wImg3 = r_archerTower
    wHref = h_airDefence
    wHref2 = h_seekingAirMine
    wHref3 = h_archerTower
}

else if(Number == 34){
    sImg = r_airBomb
    sImg2 = r_seekingAirMine
    sImg3 = r_cannon
    sHref = h_airBomb
    sHref2 = h_seekingAirMine
    sHref3 = h_cannon
    wImg = r_archerTower
    wImg2 = r_airDefence
    wImg3 = r_wizardTower
    wHref = h_archerTower
    wHref2 = h_airDefence
    wHref3 = h_wizardTower
}

else if(Number == 35){
    sImg = r_airDefence
    sImg2 = r_cannon
    sImg3 = r_archerTower
    sHref = h_airDefence
    sHref2 = h_cannon
    sHref3 = h_archerTower
    wImg = r_eagleArtillery
    wImg2 = r_scatterShot
    wImg3 = r_bombTower
    wHref = h_eagleArtillery
    wHref2 = h_scatterShot
    wHref3 = h_bombTower
}

else if(Number == 36){
    sImg = r_Xbow
    sImg2 = r_monolith
    sImg3 = r_cannon
    sHref = h_Xbow
    sHref2 = h_monolith
    sHref3 = h_cannon
    wImg = r_bombTower
    wImg2 = r_wizardTower
    wImg3 = r_scatterShot
    wHref = h_bombTower
    wHref2 = h_wizardTower
    wHref3 = h_scatterShot
}

else if(Number == 37){
    sImg = r_airDefence
    sImg2 = ""
    sImg3 = ""
    sHref = h_airDefence
    sHref2 = ""
    sHref3 = ""
    wImg = r_airDefence
    wImg2 = r_seekingAirMine
    wImg3 = r_infernoTower
    wHref = h_airDefence
    wHref2 = h_seekingAirMine
    wHref3 = h_infernoTower
}

else if(Number == 38){
    sImg = r_infernoTower
    sImg2 = r_bombTower
    sImg3 = r_airDefence
    sHref = h_infernoTower
    sHref2 = h_bombTower
    sHref3 = h_airDefence
    wImg = r_eagleArtillery
    wImg2 = r_scatterShot
    wImg3 = ""
    wHref = h_eagleArtillery
    wHref2 = h_scatterShot
    wHref3 = ""
}

else if(Number == 39){
    sImg = r_wall
    sImg2 = r_eagleArtillery
    sImg3 = r_airDefence
    sHref = h_wall
    sHref2 = h_eagleArtillery
    sHref3 = h_airDefence
    wImg = r_scatterShot
    wImg2 = r_giantBomb
    wImg3 = ""
    wHref = h_scatterShot
    wHref2 = h_giantBomb
    wHref3 = ""
}

else if(Number == 40){
    sImg = r_airDefence
    sImg2 = r_archerTower
    sImg3 = r_cannon
    sHref = h_airDefence
    sHref2 = r_archerTower
    sHref3 = r_cannon
    wImg = r_eagleArtillery
    wImg2 = r_Xbow
    wImg3 = r_wizardTower
    wHref = h_eagleArtillery
    wHref2 = h_Xbow
    wHref3 = h_wizardTower
}

else if(Number == 41){
    sImg = r_scatterShot
    sImg2 = r_bombTower
    sImg3 = r_wizardTower
    sHref = h_scatterShot
    sHref2 = h_bombTower
    sHref3 = h_wizardTower
    wImg = ""
    wImg2 = ""
    wImg3 = ""
    wHref = ""
    wHref2 = ""
    wHref3 = ""
}
else if(Number == 42){
    sImg = ""
    sImg2 = ""
    sImg3 = ""
    sHref = ""
    sHref2 = ""
    sHref3 = ""
    wImg = ""
    wImg2 = ""
    wImg3 = ""
    wHref = ""
    wHref2 = ""
    wHref3 = ""
}
else if(Number == 43){
    sImg = r_wall
    sImg2 = ""
    sImg3 = ""
    sHref = h_wall
    sHref2 = ""
    sHref3 = ""
    wImg = ""
    wImg2 = ""
    wImg3 = ""
    wHref = ""
    wHref2 = ""
    wHref3 = ""
}
else if(Number == 44){
    sImg = r_infernoTower
    sImg2 = r_eagleArtillery
    sImg3 = r_airDefence
    sHref = h_infernoTower
    sHref2 = h_eagleArtillery
    sHref3 = h_airDefence
    wImg = r_wall
    wImg2 = r_archerTower
    wImg3 = r_cannon
    wHref = h_wall
    wHref2 = h_archerTower
    wHref3 = h_cannon
}
else if(Number == 45){
    sImg = ""
    sImg2 = ""
    sImg3 = ""
    sHref = ""
    sHref2 = ""
    sHref3 = ""
    wImg = ""
    wImg2 = ""
    wImg3 = ""
    wHref = ""
    wHref2 = ""
    wHref3 = ""
}
else if(Number == 46){
    sImg = r_infernoTower
    sImg2 = r_scatterShot
    sImg3 = r_eagleArtillery
    sHref = h_infernoTower
    sHref2 = h_scatterShot
    sHref3 = h_eagleArtillery
    wImg = r_wall
    wImg2 = ""
    wImg3 = ""
    wHref = r_wall
    wHref2 = ""
    wHref3 = ""
}
else if(Number == 47){
    sImg = ""
    sImg2 = ""
    sImg3 = ""
    sHref = ""
    sHref2 = ""
    sHref3 = ""
    wImg = ""
    wImg2 = ""
    wImg3 = ""
    wHref = "" 
    wHref2 = ""
    wHref3 = ""
}
else if(Number == 48){
    sImg = ""
    sImg2 = ""
    sImg3 = ""
    sHref = ""
    sHref2 = ""
    sHref3 = ""
    wImg = ""
    wImg2 = ""
    wImg3 = ""
    wHref = ""
    wHref2 = ""
    wHref3 = ""
}
else if(Number == 49){
    sImg = r_wall
    sImg2 = ""
    sImg3 = ""
    sHref = h_wall
    sHref2 = ""
    sHref3 = "" 
    wImg = ""
    wImg2 = ""
    wImg3 = ""
    wHref = ""
    wHref2 = ""
    wHref3 = ""
}
else if(Number == 50){
    sImg = ""
    sImg2 = ""
    sImg3 = ""
    sHref = ""
    sHref2 = ""
    sHref3 = ""
    wImg = ""
    wImg2 = ""
    wImg3 = ""
    wHref = ""
    wHref2 = ""
    wHref3 = ""
}
else if(Number == 51){
    sImg = r_infernoTower
    sImg2 = r_eagleArtillery
    sImg3 = r_airDefence
    sHref = h_infernoTower
    sHref2 = h_eagleArtillery
    sHref3 = h_airDefence
    wImg = r_wizardTower
    wImg2 = ""
    wImg3 = ""
    wHref = r_wizardTower
    wHref2 = ""
    wHref3 = ""
}

else if(Number == 52){
    sImg = r_infernoTower
    sImg2 = r_airDefence
    sImg3 = r_eagleArtillery
    sHref = h_infernoTower
    sHref2 = h_airDefence
    sHref3 = r_eagleArtillery
    wImg = r_wizardTower
    wImg2 = ""
    wImg3 = ""
    wHref = h_wizardTower
    wHref2 = ""
    wHref3 = ""
}

else if(Number == 53){
    sImg = r_barbarian
    sImg2 = r_archer
    sImg3 = r_goblin
    sHref = h_barbarian
    sHref2 = h_archer
    sHref3 = h_goblin
    wImg = r_dragon
    wImg2 = r_electroDragon
    wImg3 = r_balloon
    wHref = h_dragon
    wHref2 = h_electroDragon
    wHref3 = h_balloon
}


else if(Number == 54){
    sImg = r_minion
    sImg2 = r_goblin
    sImg3 = r_barbarian
    sHref = h_minion
    sHref2 = h_goblin
    sHref3 = h_barbarian
    wImg = r_pekka
    wImg2 = r_hogRider
    wImg3 = r_giant
    wHref = h_pekka
    wHref2 = h_hogRider
    wHref3 = h_giant
}

else if(Number == 55){
    sImg = r_barbarian
    sImg2 = r_archer
    sImg3 = r_goblin
    sHref = h_barbarian
    sHref2 = h_archer
    sHref3 = h_goblin
    wImg = r_wallBreaker
    wImg2 = r_superWallBreaker
    wImg3 = r_balloon
    wHref = h_wallBreaker
    wHref2 = h_superWallBreaker
    wHref3 = h_balloon
}
else if(Number == 56){
    sImg = r_barbarian
    sImg2 = r_archer
    sImg3 = r_goblin
    sHref = h_barbarian
    sHref2 = h_archer
    sHref3 = h_goblin
    wImg = r_dragon
    wImg2 = r_electroDragon
    wImg3 = r_balloon
    wHref = h_dragon
    wHref2 = h_electroDragon
    wHref3 = h_balloon
}
else if(Number == 57){
    sImg = r_dragon
    sImg2 = r_electroDragon
    sImg3 = r_balloon
    sHref = h_dragon
    sHref2 = h_electroDragon
    sHref3 = h_balloon
    wImg = r_giant
    wImg2 = r_hogRider
    wImg3 = r_pekka
    wHref = h_giant
    wHref2 = h_hogRider
    wHref3 = h_pekka
}
else if(Number == 58){
    sImg = r_barbarian
    sImg2 = r_witch
    sImg3 = r_batSpell
    sHref = h_barbarian
    sHref2 = h_witch
    sHref3 = h_batSpell
    wImg = r_pekka
    wImg2 = r_dragon
    wImg3 = r_balloon
    wHref = h_pekka
    wHref2 = h_dragon
    wHref3 = h_balloon
}
else if(Number == 59){
    sImg = r_balloon
    sImg2 = r_electroDragon
    sImg3 = r_dragon
    sHref = h_balloon
    sHref2 = h_electroDragon
    sHref3 = h_dragon
    wImg = r_pekka
    wImg2 = r_hogRider
    wImg3 = r_giant
    wHref = h_pekka
    wHref2 = h_hogRider
    wHref3 = h_giant
}
else if(Number == 60){
    sImg = r_pekka
    sImg2 = r_barbarian
    sImg3 = r_minion
    sHref = h_pekka
    sHref2 = h_barbarian
    sHref3 = h_minion
    wImg = r_giant
    wImg2 = r_dragon
    wImg3 = r_electroDragon
    wHref = h_giant
    wHref2 = h_dragon
    wHref3 = h_electroDragon
}
else if(Number == 61){
    sImg = r_hogRider
    sImg2 = r_barbarian
    sImg3 = r_giant
    sHref = h_hogRider
    sHref2 = h_barbarian
    sHref3 = h_giant
    wImg = r_dragon
    wImg2 = r_electroDragon
    wImg3 = r_balloon
    wHref = h_dragon
    wHref2 = h_electroDragon
    wHref3 = h_balloon
}
else if(Number == 62){
    sImg = r_electroTitan
    sImg2 = r_witch
    sImg3 = r_balloon
    sHref = h_electroTitan
    sHref2 = h_witch
    sHref3 = h_balloon
    wImg = r_iceGolem
    wImg2 = r_golem
    wImg3 = r_lavaHound
    wHref = h_iceGolem
    wHref2 = h_golem
    wHref3 = h_lavaHound
}
else if(Number == 63){
    sImg = r_electroDragon
    sImg2 = r_dragon
    sImg3 = r_pekka
    sHref = h_electroDragon
    sHref2 = h_dragon
    sHref3 = h_pekka
    wImg = r_witch
    wImg2 = r_hogRider
    wImg3 = r_balloon
    wHref = h_witch
    wHref2 = h_hogRider
    wHref3 = h_balloon
}
else if(Number == 64){
    sImg = r_electroDragon
    sImg2 = r_dragon
    sImg3 = r_giant
    sHref = h_electroDragon
    sHref2 = h_dragon
    sHref3 = h_giant
    wImg = r_miner
    wImg2 = ""
    wImg3 = ""
    wHref = h_miner
    wHref2 = ""
    wHref3 = ""
}
else if(Number == 65){
    sImg = r_hogRider
    sImg2 = r_balloon
    sImg3 = r_miner
    sHref = h_hogRider
    sHref2 = h_balloon
    sHref3 = h_miner
    wImg = r_iceGolem
    wImg2 = r_electroTitan
    wImg3 = ""
    wHref = h_iceGolem
    wHref2 = h_electroTitan
    wHref3 = ""
}
else if(Number == 66){
    sImg = ""
    sImg2 = ""
    sImg3 = ""
    sHref = ""
    sHref2 = ""
    sHref3 = ""
    wImg = ""
    wImg2 = ""
    wImg3 = ""
    wHref = ""
    wHref2 = ""
    wHref3 = ""
}
else if(Number == 67){
    sImg = r_electroTitan
    sImg2 = r_electroDragon
    sImg3 = r_golem
    sHref = h_electroTitan
    sHref2 = h_electroDragon
    sHref3 = h_golem
    wImg = r_witch
    wImg2 = r_hogRider
    wImg3 = r_miner
    wHref = h_witch
    wHref2 = h_hogRider
    wHref3 = h_miner
}
else if(Number == 68){
    sImg = r_pekka
    sImg2 = r_hogRider
    sImg3 = r_balloon
    sHref = h_pekka
    sHref2 = h_hogRider
    sHref3 = h_balloon
    wImg = r_sneakyGoblin
    wImg2 = r_electroDragon
    wImg3 = r_dragon
    wHref = h_sneakyGoblin
    wHref2 = h_electroDragon
    wHref3 = h_dragon
}
else if(Number == 69){
    sImg = r_witch
    sImg2 = r_hogRider
    sImg3 = r_balloon
    sHref = h_witch
    sHref2 = h_hogRider
    sHref3 = h_balloon
    wImg = r_electroDragon
    wImg2 = r_sneakyGoblin
    wImg3 = ""
    wHref = h_electroDragon
    wHref2 = h_sneakyGoblin
    wHref3 = ""
}
else if(Number == 70){
    sImg = r_witch
    sImg2 = r_hogRider
    sImg3 = r_balloon
    sHref = h_witch
    sHref2 = h_hogRider
    sHref3 = h_balloon
    wImg = r_electroDragon
    wImg2 = r_sneakyGoblin
    wImg3 = ""
    wHref = h_electroDragon
    wHref2 = h_sneakyGoblin
    wHref3 = ""
}
else if(Number == 71){
    sImg = r_witch
    sImg2 = r_hogRider
    sImg3 = r_balloon
    sHref = h_witch
    sHref2 = h_hogRider
    sHref3 = h_balloon
    wImg = r_electroDragon
    wImg2 = r_sneakyGoblin
    wImg3 = ""
    wHref = h_electroDragon
    wHref2 = h_sneakyGoblin
    wHref3 = ""
}
else if(Number == 72){
    sImg = r_barbarian
    sImg2 = r_archer
    sImg3 = r_hogRider
    sHref = h_barbarian
    sHref2 = h_archer
    sHref3 = h_hogRider
    wImg = r_goblin
    wImg2 = r_sneakyGoblin
    wImg3 = r_pekka
    wHref = h_goblin
    wHref2 = h_sneakyGoblin
    wHref3 = h_pekka
}
else if(Number == 73){
    sImg = r_hogRider
    sImg2 = r_wizard
    sImg3 = r_witch
    sHref = h_hogRider
    sHref2 = h_wizard
    sHref3 = h_witch
    wImg = r_goblin
    wImg2 = r_sneakyGoblin
    wImg3 = r_pekka
    wHref = h_goblin
    wHref2 = h_sneakyGoblin
    wHref3 = h_pekka
}
else if(Number == 74){
    sImg = r_healer
    sImg2 = r_balloon
    sImg3 = r_dragon
    sHref = h_healer
    sHref2 = h_balloon
    sHref3 = h_dragon
    wImg = r_minion
    wImg2 = r_giant
    wImg3 = r_barbarian
    wHref = h_minion
    wHref2 = h_giant
    wHref3 = h_barbarian
}
else if(Number == 75){
    sImg = r_hogRider
    sImg2 = r_witch
    sImg3 = r_giant
    sHref = h_hogRider
    sHref2 = h_witch
    sHref3 = h_giant
    wImg = r_dragon
    wImg2 = r_goblin
    wImg3 = r_sneakyGoblin
    wHref = h_dragon
    wHref2 = h_goblin
    wHref3 = h_sneakyGoblin
}
else if(Number == 76){
    sImg = r_electroDragon
    sImg2 = r_dragon
    sImg3 = r_healer
    sHref = h_electroDragon
    sHref2 = h_dragon
    sHref3 = h_healer
    wImg = r_minion
    wImg2 = r_barbarian
    wImg3 = r_archer
    wHref = h_minion
    wHref2 = h_barbarian
    wHref3 = h_archer
}
else if(Number == 77){
    sImg = r_pekka
    sImg2 = r_electroDragon
    sImg3 = r_healer
    sHref = h_pekka
    sHref2 = h_electroDragon
    sHref3 = h_healer
    wImg = r_electroTitan
    wImg2 = r_dragon
    wImg3 = r_wizard
    wHref = h_electroTitan
    wHref2 = h_dragon
    wHref3 = h_wizard
}
else if(Number == 78){
    sImg = r_electroDragon
    sImg2 = r_dragon
    sImg3 = r_witch
    sHref = h_electroDragon
    sHref2 = h_dragon
    sHref3 = h_witch
    wImg = r_pekka
    wImg2 = ""
    wImg3 = ""
    wHref = h_pekka
    wHref2 = ""
    wHref3 = ""
}
// Update the image source and troop name on the page
const imgElement = document.querySelector('.img2');
imgElement.src = imageSrc;

const h1Element = document.querySelector('#troop-text h1');
h1Element.textContent = troopName;
    
const pElement = document.querySelector('#troop-info');
pElement.textContent = troopInfo;

//_____________________________________________________
const imgElement1 = document.querySelector('#s-img');
imgElement1.src = sImg;

const imgElement2 = document.querySelector('#s-img2');
imgElement2.src = sImg2;

const imgElement3 = document.querySelector('#s-img3');
imgElement3.src = sImg3;
//_____________________________________________________

const hrefElement1 = document.querySelector('#s-href');
hrefElement1.href = sHref;

const hrefElement2 = document.querySelector('#s-href2');
hrefElement2.href = sHref2;

const hrefElement3 = document.querySelector('#s-href3');
hrefElement3.href = sHref3;
//________________________________________________________

const imgElement4 = document.querySelector('#w-img');
imgElement4.src = wImg;

const imgElement5 = document.querySelector('#w-img2');
imgElement5.src = wImg2;

const imgElement6 = document.querySelector('#w-img3');
imgElement6.src = wImg3;
//_________________________________________________________

const hrefElement4 = document.querySelector('#w-href');
hrefElement4.href = wHref;

const hrefElement5 = document.querySelector('#w-href2');
hrefElement5.href = wHref2;

const hrefElement6 = document.querySelector('#w-href3');
hrefElement6.href = wHref3;