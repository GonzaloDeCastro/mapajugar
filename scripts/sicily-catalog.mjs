/**
 * Schede delle nove province siciliane. Il campo `wiki` è il titolo
 * della voce (it.wikipedia, e se manca en.wikipedia o Commons).
 * Gli item senza foto vengono omessi da build-sicily-content.mjs.
 */
export const SICILY_CATALOG = [
  {
    slug: "agrigento",
    name: "Agrigento",
    shortName: "AG",
    description:
      "Costa di templi dorati, spiagge bianche e l'isola di Lampedusa. Agrigento guarda l'Africa ed è la provincia dei Greci e del grano.",
    flora:
      "Mandorli in fiore a febbraio, fichi d'India sui muretti e ulivi che scendono verso il mare.",
    fauna:
      "Grillaio sulle rupi della Valle dei Templi, tartarughe a Lampedusa e gabbiani corsi sulle isole Pelagie.",
    foodsText: "Macco di fave, biancomangiare e caponata.",
    curiosity:
      "Il Tempio della Concordia, del V secolo a.C., è uno dei templi greci meglio conservati al mondo.",
    spotlight:
      "Agrigento ha circa quattrocentodiecimila abitanti. Il capoluogo sta su un colle; nel territorio ci sono Sciacca, Licata e, molto più a sud, Lampedusa e Linosa.\nLa provincia è famosa per la Valle dei Templi, la Scala dei Turchi e un mare che d'estate si riempie di tartarughe.",
    plants: [
      {
        name: "Mandorlo",
        wiki: "Prunus dulcis",
        description:
          "A febbraio i mandorleti della provincia si coprono di fiori bianchi e rosa, prima delle foglie. Dai frutti si fanno dolci e latte di mandorla.",
      },
      {
        name: "Fico d'India",
        wiki: "Opuntia ficus-indica",
        description:
          "Cresce sui pendii secchi e sui muretti a secco. Il frutto si sbuccia con due tagli e si mangia fresco, a fine estate.",
      },
      {
        name: "Ulivo",
        wiki: "Olea europaea",
        description:
          "Gli ulivi bassi e contorti segnano le colline fino al mare. L'olio di queste terre accompagna il macco e il pane.",
      },
    ],
    animals: [
      {
        name: "Grillaio",
        wiki: "Falco naumanni",
        description:
          "Piccolo falco che nidifica in colonie tra i tetti e le rupi vicino ai templi. Mangia grilli e cavallette nei campi di grano.",
      },
      {
        name: "Tartaruga marina",
        wiki: "Caretta caretta",
        description:
          "A Lampedusa, sulla Spiaggia dei Conigli, depone le uova nella sabbia. I nidi si proteggono finché i piccoli non raggiungono il mare.",
      },
      {
        name: "Gabbiano corso",
        wiki: "Ichthyaetus audouinii",
        description:
          "Gabbiano raro, con il becco rosso, che vive sulle isole Pelagie. Pesca di notte e non ruba il cibo come altri gabbiani.",
      },
    ],
    foods: [
      {
        name: "Macco di fave",
        wiki: "Macco di fave",
        description:
          "Purea di fave secche, olio e finocchietto. Era il piatto dei contadini e si mangia ancora con il pane, tiepido.",
      },
      {
        name: "Biancomangiare",
        wiki: "Biancomangiare",
        description:
          "Dolce morbido di latte di mandorla e amido, bianco e fresco. Si prepara per le feste, spesso con cannella o scorza di limone.",
      },
      {
        name: "Caponata",
        wiki: "Caponata",
        description:
          "Verdure fritte, melanzane, sedano, capperi e olive, in agrodolce. Si mangia fredda, d'estate, con il pane.",
      },
    ],
    tourism: [
      {
        name: "Valle dei Templi",
        wiki: "Valle dei Templi",
        description:
          "Fila di templi greci su una cresta davanti al mare. Al tramonto la pietra diventa color miele.",
      },
      {
        name: "Scala dei Turchi",
        wiki: "Scala dei Turchi",
        description:
          "Falesia bianca di marna, a gradini, tra Realmonte e Porto Empedocle. Sembra una scala scolpita dal vento e dal sale.",
      },
      {
        name: "Lampedusa",
        wiki: "Lampedusa",
        description:
          "L'isola abitata più a sud d'Italia, più vicina alla Tunisia che a Palermo. L'acqua della Spiaggia dei Conigli è tra le più chiare del Mediterraneo.",
      },
    ],
    history: [
      {
        name: "Tempio della Concordia",
        wiki: "Tempio della Concordia",
        description:
          "Costruito intorno al 430 a.C., divenne poi una chiesa e per questo non fu smontato. Oggi è il simbolo di Agrigento antica, Akragas.",
      },
      {
        name: "Empedocle",
        wiki: "Empedocle",
        description:
          "Filosofo di Akragas, nel V secolo a.C. Immaginò che tutto nascesse da quattro radici: terra, acqua, aria e fuoco.",
      },
      {
        name: "Luigi Pirandello",
        wiki: "Luigi Pirandello",
        description:
          "Scrittore nato in provincia, a Caos, nel 1867. Vinse il Nobel e raccontò persone che portano tante maschere, come in teatro.",
      },
    ],
  },
  {
    slug: "caltanissetta",
    name: "Caltanissetta",
    shortName: "CL",
    description:
      "Cuore di zolfo, grano e torrone. Caltanissetta sta in mezzo all'isola, tra colline gialle d'estate e castelli sulle rocce.",
    flora:
      "Grano duro a perdita d'occhio, ferule alte sui cigli e lentisco nella macchia.",
    fauna:
      "Istrici di notte, volpi tra i calanchi e poiane che girano sopra le colline.",
    foodsText: "Torrone di miele, cavatelli e pane del Dittaino.",
    curiosity:
      "Per secoli qui si scavava lo zolfo, esportato in tutta Europa per fare polvere da sparo e acido.",
    spotlight:
      "Caltanissetta ha circa duecentocinquantamila abitanti. Il capoluogo è un crocevia; intorno ci sono Gela, sulla costa, e Mussomeli, con il suo castello.\nLa provincia è famosa per le antiche solfare, il torrone della festa di San Michele e i campi di grano duro.",
    plants: [
      {
        name: "Grano duro",
        wiki: "Triticum durum",
        description:
          "Il grano alto e dorato di queste colline diventa semola per il pane e la pasta. D'estate i campi sembrano un mare fermo.",
      },
      {
        name: "Ferula",
        wiki: "Ferula communis",
        description:
          "Pianta alta, con fiori gialli a ombrello, tipica dei cigli e dei pascoli. I pastori ne usavano il fusto secco, leggero e resistente.",
      },
      {
        name: "Lentisco",
        wiki: "Pistacia lentiscus",
        description:
          "Arbusto sempreverde della macchia, con bacche rosse che diventano nere. Le foglie, stropicciate, odorano di resina.",
      },
    ],
    animals: [
      {
        name: "Istrice",
        wiki: "Hystrix cristata",
        description:
          "Roditore notturno coperto di aculeoli. Di giorno resta nella tana; di notte esce a cercare radici e frutta caduta.",
      },
      {
        name: "Volpe",
        wiki: "Vulpes vulpes",
        description:
          "Si muove tra calanchi e campi al crepuscolo. Mangia insetti, uva e piccoli animali, e si adatta anche vicino ai paesi.",
      },
      {
        name: "Poiana",
        wiki: "Buteo buteo",
        description:
          "Rapace che plana in cerchi larghi sopra le colline. Caccia topi e lucertole e spesso si posa sui pali.",
      },
    ],
    foods: [
      {
        name: "Torrone di Caltanissetta",
        wiki: "Torrone di Caltanissetta",
        description:
          "Torrone di miele, mandorle e pistacchi, duro da spezzare. Si prepara soprattutto per la festa di San Michele, a settembre.",
      },
      {
        name: "Cavatelli",
        wiki: "Cavatelli",
        description:
          "Pasta corta di semola, condita con sugo di pomodoro e ricotta salata. È il formato dei giorni di festa nelle case dell'interno.",
      },
      {
        name: "Pagnotta del Dittaino",
        wiki: "Pagnotta del Dittaino",
        description:
          "Pane di semola di grano duro, cotto a legna, con la crosta scura. Prende il nome dal fiume Dittaino, che attraversa queste campagne.",
      },
    ],
    tourism: [
      {
        name: "Castello di Mussomeli",
        wiki: "Castello di Mussomeli",
        description:
          "Castello del Trecento incollato a uno sperone di roccia. Sotto, il vuoto; dentro, sale e leggende di prigioni.",
      },
      {
        name: "Cattedrale di Caltanissetta",
        wiki: "Cattedrale di Caltanissetta",
        description:
          "Chiesa grande del capoluogo, rifatta nell'Ottocento, con una scalinata che domina la piazza. Dentro custodisce tele e marmi.",
      },
      {
        name: "Monte Capodarso",
        wiki: "Riserva naturale Monte Capodarso e Valle dell'Imera Meridionale",
        description:
          "Riserva di gessi, calanchi e il fiume Imera. È un paesaggio nudo, bello dopo la pioggia, quando il verde dura poco.",
      },
    ],
    history: [
      {
        name: "Solfare",
        wiki: "Solfara",
        description:
          "Miniere di zolfo scavate a mano, con bambini che per decenni portarono il minerale sulle spalle. Oggi molte sono musei o ruderi.",
      },
      {
        name: "Fasci siciliani",
        wiki: "Fasci siciliani",
        description:
          "Nel 1893 i contadini e i minatori si organizzarono per chiedere pane e salari più giusti. Lo Stato rispose con il carcere e i cannoni.",
      },
      {
        name: "Gela greca",
        wiki: "Gela",
        description:
          "Gela fu fondata dai Greci nel 689 a.C. e da lì partì la colonizzazione di Agrigento. Sulla costa restano mura e un museo archeologico.",
      },
    ],
  },
  {
    slug: "catania",
    name: "Catania",
    shortName: "CT",
    description:
      "Città nera di lava ai piedi dell'Etna, con elefante di pietra, arancini e una costa di ciclopi. Catania è la porta orientale della Sicilia.",
    flora:
      "Ginestre e castagni sulle pendici dell'Etna, e pistacchi nei terreni scuri di Bronte.",
    fauna:
      "Coturnice tra le lave, volpe nei boschi etnei e riccio nei giardini della città.",
    foodsText: "Pasta alla Norma, arancino e granita con brioche.",
    curiosity:
      "L'Etna è il vulcano attivo più alto d'Europa. La sua lava ha distrutto e ricostruito Catania più di una volta.",
    spotlight:
      "Catania ha circa un milione di abitanti nella città metropolitana. Il capoluogo sta sul mare; intorno ci sono Acireale, Caltagirone e i paesi dell'Etna.\nLa provincia è famosa per il vulcano, il barocco nero, il pistacchio di Bronte e una cucina di melanzane, ricotta e ghiaccio.",
    plants: [
      {
        name: "Ginestra dell'Etna",
        wiki: "Genista aetnensis",
        description:
          "Arbusto della lava, con fiori gialli che a giugno coprono i fianchi dell'Etna. Resiste al terreno povero e al vento di montagna.",
      },
      {
        name: "Castagno",
        wiki: "Castanea sativa",
        description:
          "Boschi di castagno coprono un anello del vulcano. In autunno i ricci si aprono e le castagne finiscono nel fuoco e nei dolci.",
      },
      {
        name: "Pistacchio",
        wiki: "Pistacia vera",
        description:
          "A Bronte il pistacchio cresce sulla lava. Il frutto verde entra nel pesto, nei dolci e persino nel salame e nel gelato.",
      },
    ],
    animals: [
      {
        name: "Coturnice siciliana",
        wiki: "Alectoris graeca",
        description:
          "Uccello di terra, con il becco e le zampe rosse, che vive tra le pietre dell'Etna e dei monti. Corre più volentieri di quanto voli.",
      },
      {
        name: "Volpe",
        wiki: "Vulpes vulpes",
        description:
          "Nei boschi etnei esce di sera. Si riconosce dalla coda folta e si nutre di topi, frutta e quello che trova nei paesi di montagna.",
      },
      {
        name: "Riccio",
        wiki: "Erinaceus europaeus",
        description:
          "Piccolo mammifero coperto di aculei, comune nei giardini e nelle campagne. Di notte cerca insetti e lumache; se ha paura diventa una palla.",
      },
    ],
    foods: [
      {
        name: "Pasta alla Norma",
        wiki: "Pasta alla Norma",
        description:
          "Pasta con pomodoro, melanzane fritte, ricotta salata e basilico. Prende il nome dall'opera Norma, di Bellini, figlio di Catania.",
      },
      {
        name: "Arancino",
        wiki: "Arancina",
        description:
          "Riso allo zafferano, ragù e piselli, impanato e fritto. A Catania si dice arancino, al maschile, e spesso ha la forma a punta.",
      },
      {
        name: "Granita",
        wiki: "Granita",
        description:
          "Ghiaccio granuloso al limone, mandorla o caffè, mangiato a colazione con la brioche col tuppo. D'estate è il rito della città.",
      },
    ],
    tourism: [
      {
        name: "Etna",
        wiki: "Etna",
        description:
          "Vulcano che si vede da quasi tutta la provincia. Si sale tra lave nere, boschi e, d'inverno, anche la neve.",
      },
      {
        name: "Fontana dell'Elefante",
        wiki: "Fontana dell'Elefante",
        description:
          "Elefante di pietra lavica in piazza Duomo, con un obelisco egizio sulla schiena. I catanesi lo chiamano u Liotru ed è il simbolo della città.",
      },
      {
        name: "Caltagirone",
        wiki: "Caltagirone",
        description:
          "Città della ceramica, con una scala di 142 gradini coperti di maioliche colorate. A luglio la scala si illumina con migliaia di lumi.",
      },
    ],
    history: [
      {
        name: "Eruzione del 1669",
        wiki: "Eruzione dell'Etna del 1669",
        description:
          "La lava raggiunse Catania e arrivò fino al mare, spostando la costa. Le mura fermarono in parte il fiume di fuoco, ma interi quartieri sparirono.",
      },
      {
        name: "Sant'Agata",
        wiki: "Festa di Sant'Agata",
        description:
          "Dal 3 al 5 febbraio la città porta in spalla il fercolo della santa, tra candelore e fuochi. È una delle feste religiose più grandi d'Europa.",
      },
      {
        name: "Vincenzo Bellini",
        wiki: "Vincenzo Bellini",
        description:
          "Compositore nato a Catania nel 1801. Le sue opere, come Norma, si cantano ancora in tutto il mondo; il teatro massimo della città porta il suo nome.",
      },
    ],
  },
  {
    slug: "enna",
    name: "Enna",
    shortName: "EN",
    description:
      "La provincia più alta e meno popolata della Sicilia, chiamata l'ombelico dell'isola. Da Enna si vede quasi tutto il resto.",
    flora:
      "Sulla viola nei pascoli di primavera, papaveri nei seminati e lecci sui versanti più freschi.",
    fauna:
      "Istrici, poiane e gheppi che cacciano sopra il lago di Pergusa.",
    foodsText: "Piacentinu ennese, cassatella di Agira e pecorino.",
    curiosity:
      "Federico II chiamò Enna l'ombelico della Sicilia perché sta quasi al centro geometrico dell'isola.",
    spotlight:
      "Enna ha circa centocinquantacinquemila abitanti, meno di ogni altra provincia siciliana. Il capoluogo è il più alto d'Italia tra i capoluoghi di provincia, sopra i 900 metri.\nIl territorio è famoso per il Castello di Lombardia, i mosaici di Piazza Armerina e il lago di Pergusa.",
    plants: [
      {
        name: "Sulla",
        wiki: "Hedysarum coronarium",
        description:
          "Fiore viola dei pascoli siciliani, che in primavera colora intere vallate. Le api ne fanno un miele chiaro e le pecore la brucano volentieri.",
      },
      {
        name: "Papavero",
        wiki: "Papaver rhoeas",
        description:
          "Macchie rosse tra il grano, a maggio. Il petalo è fragile e dura un giorno; il seme resta per l'anno dopo.",
      },
      {
        name: "Leccio",
        wiki: "Quercus ilex",
        description:
          "Quercia sempreverde delle colline interne. Le ghiande nutrivano i maiali e il legno, duro, serviva per gli attrezzi.",
      },
    ],
    animals: [
      {
        name: "Istrice",
        wiki: "Hystrix cristata",
        description:
          "Di notte attraversa le strade di campagna e lascia aculeoli sul sentiero. È timido: se lo sorprendi, sbatte gli aculei e scappa all'indietro.",
      },
      {
        name: "Poiana",
        wiki: "Buteo buteo",
        description:
          "Si vede spesso sopra Pergusa e le creste di Enna, ferma nel vento. Da lassù controlla i campi in cerca di prede piccole.",
      },
      {
        name: "Gheppio",
        wiki: "Falco tinnunculus",
        description:
          "Falco che resta sospeso in aria, sbattendo le ali, per mirare topi e insetti. Nidifica su rocce e vecchi palazzi.",
      },
    ],
    foods: [
      {
        name: "Piacentinu ennese",
        wiki: "Piacentinu ennese",
        description:
          "Pecorino allo zafferano, giallo, con grani di pepe nero. Lo zafferano, raro, tinge la pasta del formaggio e le dà un profumo dolce.",
      },
      {
        name: "Cassatella di Agira",
        wiki: "Cassatella di Agira",
        description:
          "Mezzaluna fritta ripiena di crema di cacao, mandorle e ceci. È il dolce di Agira, un paese della provincia, e si mangia tiepida.",
      },
      {
        name: "Pecorino siciliano",
        wiki: "Pecorino siciliano",
        description:
          "Formaggio di pecora, stagionato, che si taglia a spicchi o si grattugia sulla pasta. Nell'interno, dove pascolano le greggi, è il formaggio di ogni giorno.",
      },
    ],
    tourism: [
      {
        name: "Castello di Lombardia",
        wiki: "Castello di Lombardia",
        description:
          "Fortezza enorme sopra Enna, con torri e cortili. Dalla torre più alta, nei giorni limpidi, si vede l'Etna e a volte anche il mare.",
      },
      {
        name: "Villa romana del Casale",
        wiki: "Villa romana del Casale",
        description:
          "Villa del IV secolo a Piazza Armerina, patrimonio dell'umanità. I mosaici mostrano cacce, animali e ragazze in costume da ginnastica.",
      },
      {
        name: "Lago di Pergusa",
        wiki: "Lago di Pergusa",
        description:
          "Unico lago naturale della Sicilia, in una conca tra i monti. D'estate si ritira; d'inverno torna, e intorno ci sono uccelli e una pista storica.",
      },
    ],
    history: [
      {
        name: "Piazza Armerina",
        wiki: "Piazza Armerina",
        description:
          "Piazza Armerina è un paese dell'interno, con una cattedrale barocca in cima alla scalinata. Poco lontano, la villa romana del Casale conserva i mosaici più famosi della Sicilia.",
      },
      {
        name: "Federico II",
        wiki: "Federico II di Svevia",
        description:
          "Nel Duecento fece di Castrogiovanni, l'antico nome di Enna, una piazzaforte al centro del regno. Da qui controllava le strade dell'isola.",
      },
      {
        name: "Ratto di Proserpina",
        wiki: "Ratto di Proserpina",
        description:
          "Il mito greco ambienta qui il rapimento di Proserpina da parte di Ade, dio degli inferi. Il lago di Pergusa sarebbe la porta di quel mondo sotterraneo.",
      },
    ],
  },
  {
    slug: "messina",
    name: "Messina",
    shortName: "ME",
    description:
      "Lo stretto, il pesce spada, Taormina e le isole Eolie. Messina è il ponte naturale tra la Sicilia e il resto d'Italia.",
    flora:
      "Faggi sui Nebrodi, limoni sulla costa e ginestre gialle sulle Eolie.",
    fauna:
      "Pesce spada nello stretto, falco della regina sulle Eolie e delfini tra le due rive.",
    foodsText: "Pasta 'ncasciata, pidoni e granita.",
    curiosity:
      "Nel 1908 un terremoto e uno tsunami distrussero Messina in pochi minuti. La città fu ricostruita più larga e bassa.",
    spotlight:
      "Messina ha circa seicentomila abitanti. Il capoluogo guarda la Calabria, a pochi chilometri; nel territorio ci sono Taormina, Milazzo e le sette isole Eolie.\nLa provincia è famosa per lo stretto, i Nebrodi, il teatro di Taormina e una cucina di pesce spada.",
    plants: [
      {
        name: "Faggio",
        wiki: "Fagus sylvatica",
        description:
          "Sui Nebrodi, monti della provincia, ci sono faggete insolite così a sud. D'autunno le foglie diventano rame e il bosco si fa silenzioso.",
      },
      {
        name: "Limone",
        wiki: "Citrus limon",
        description:
          "Gli agrumeti della costa ionica profumano in fiore, tra febbraio e marzo. Il succo entra nella ghiotta di pesce spada e nella granita.",
      },
      {
        name: "Ginestra",
        wiki: "Spartium junceum",
        description:
          "Arbusto di fiori gialli che copre le scogliere e le Eolie a maggio. L'odore è forte, dolce, e si sente anche dal mare.",
      },
    ],
    animals: [
      {
        name: "Pesce spada",
        wiki: "Xiphias gladius",
        description:
          "Attraversa lo stretto in primavera e in estate. I pescatori lo cercavano con le feluche, barche alte da cui si avvista la pinna.",
      },
      {
        name: "Falco della regina",
        wiki: "Falco eleonorae",
        description:
          "Nidifica in colonie sulle Eolie e caccia uccelli migratori in volo. Arriva tardi, d'estate, quando gli altri falchi hanno già i piccoli.",
      },
      {
        name: "Delfino striato",
        wiki: "Stenella coeruleoalba",
        description:
          "Nel canale tra Scilla e Cariddi si vedono gruppi di delfini. Saltano accanto ai traghetti che uniscono Messina a Villa San Giovanni.",
      },
    ],
    foods: [
      {
        name: "Pasta 'ncasciata",
        wiki: "Pasta 'ncasciata",
        description:
          "Pasta al forno con ragù, uova sode, melanzane, caciocavallo e, spesso, piselli. È il piatto della domenica messinese.",
      },
      {
        name: "Pidone",
        wiki: "Pidone",
        description:
          "Mezzelune fritte, ripiene di verdure, acciughe o tuma. A Messina si comprano calde, in strada, come spuntino.",
      },
      {
        name: "Granita",
        wiki: "Granita",
        description:
          "A Messina la granita al caffè si copre di panna e si mangia a colazione. Il ghiaccio si raschia fine, e non è un sorbetto liscio.",
      },
    ],
    tourism: [
      {
        name: "Isole Eolie",
        wiki: "Isole Eolie",
        description:
          "Sette isole vulcaniche: Lipari, Vulcano, Salina, Stromboli, Panarea, Alicudi e Filicudi. Stromboli erutta quasi ogni giorno, in piccoli scoppi.",
      },
      {
        name: "Taormina",
        wiki: "Taormina",
        description:
          "Borgo sul monte, con un teatro greco affacciato sul mare e sull'Etna. La cavea è ancora usata per spettacoli.",
      },
      {
        name: "Tindari",
        wiki: "Tindari",
        description:
          "Promontorio con un teatro greco e un santuario sopra il mare. Sotto, i laghetti di Marinello cambiano forma con le mareggiate.",
      },
    ],
    history: [
      {
        name: "Terremoto del 1908",
        wiki: "Terremoto di Messina del 1908",
        description:
          "Il 28 dicembre 1908 la terra tremò e il mare entrò in città. Morirono decine di migliaia di persone; Messina fu ricostruita quasi da zero.",
      },
      {
        name: "Stretto di Messina",
        wiki: "Stretto di Messina",
        description:
          "Braccio di mare tra Sicilia e Calabria, con correnti fortissime. Gli antichi lo popolavano di mostri, Scilla e Cariddi, per spiegare i gorghi.",
      },
      {
        name: "Antonello da Messina",
        wiki: "Antonello da Messina",
        description:
          "Pittore del Quattrocento che portò in Italia la tecnica a olio delle Fiandre. I suoi ritratti hanno uno sguardo che sembra vivo.",
      },
    ],
  },
  {
    slug: "palermo",
    name: "Palermo",
    shortName: "PA",
    description:
      "Capitale della Sicilia, tra la Conca d'Oro, i mercati e i mosaici normanni. Palermo è una città di tante lingue e di una cucina di strada famosa.",
    flora:
      "Aranci amari della Conca d'Oro, ficus enormi all'Orto botanico e palma nana sul Pellegrino.",
    fauna:
      "Falco pellegrino sulle falesie del Pellegrino, civetta nei casolari e lucertola siciliana sui muri assolati.",
    foodsText: "Panelle, sfincione e pasta con le sarde.",
    curiosity:
      "Nella Cappella Palatina, a pochi metri, convivono mosaici bizantini, archi arabi e un soffitto di legno intagliato.",
    spotlight:
      "Palermo ha circa un milione e duecentomila abitanti nella città metropolitana. È il capoluogo della Sicilia; nel territorio ci sono Monreale, Cefalù e l'isola di Ustica.\nLa provincia è famosa per i palazzi normanni, i mercati e una cucina di strada che si mangia in piedi.",
    plants: [
      {
        name: "Arancio amaro",
        wiki: "Citrus × aurantium",
        description:
          "La Conca d'Oro, la piana di Palermo, era un giardino di agrumi. L'arancio amaro profuma le strade a primavera e la scorza si candisce.",
      },
      {
        name: "Ficus magnolioide",
        wiki: "Ficus macrophylla",
        description:
          "A Piazza Marina un ficus gigante fa ombra con radici che scendono dai rami come colonne. Fu piantato nell'Ottocento e oggi è un monumento della città.",
      },
      {
        name: "Palma nana",
        wiki: "Chamaerops humilis",
        description:
          "Unica palma spontanea d'Europa. Sul Monte Pellegrino e sulle coste rocciose forma cespugli bassi, resistenti al sale e al vento.",
      },
    ],
    animals: [
      {
        name: "Falco pellegrino",
        wiki: "Falco peregrinus",
        description:
          "Nidifica sulle pareti del Monte Pellegrino, sopra la città. È il volatile più veloce del mondo quando si lancia in picchiata.",
      },
      {
        name: "Civetta",
        wiki: "Athene noctua",
        description:
          "Piccolo rapace notturno dei casolari e dei muri a secco. Di giorno si vede spesso su un palo, con gli occhi gialli aperti.",
      },
      {
        name: "Lucertola siciliana",
        wiki: "Podarcis siculus",
        description:
          "Corre sui muri caldi di chiese e mercati. Maschi e femmine hanno disegni diversi, e d'inverno sparisce nelle fessure.",
      },
    ],
    foods: [
      {
        name: "Panelle",
        wiki: "Panelle",
        description:
          "Frittelle sottili di farina di ceci, salate e pepate. Si mangiano nella mafalda, un panino, insieme alle crocchè di patate.",
      },
      {
        name: "Sfincione",
        wiki: "Sfincione",
        description:
          "Pizza alta e morbida, con cipolla, pomodoro, caciocavallo e pangrattato. Non è la pizza napoletana: è il forno di Palermo.",
      },
      {
        name: "Pasta con le sarde",
        wiki: "Pasta con le sarde",
        description:
          "Pasta con sarde fresche, finocchietto selvatico, uvetta e pinoli. Unisce il mare e l'orto, e si prepara da marzo a settembre.",
      },
    ],
    tourism: [
      {
        name: "Cappella Palatina",
        wiki: "Cappella Palatina",
        description:
          "Cappella del Palazzo dei Normanni, coperta di mosaici d'oro. Il soffitto di legno è di artigiani arabi e racconta scene di corte.",
      },
      {
        name: "Duomo di Monreale",
        wiki: "Duomo di Monreale",
        description:
          "Cattedrale su una collina sopra Palermo, con un Cristo enorme nel mosaico dell'abside. Il chiostro ha colonnine tutte diverse.",
      },
      {
        name: "Cefalù",
        wiki: "Cefalù",
        description:
          "Borgo sotto una rocca, con un duomo normanno e un lungomare corto. Dal paese si sale alla rocca, tra mura megalitiche e la vista sul Tirreno.",
      },
    ],
    history: [
      {
        name: "Vespri siciliani",
        wiki: "Vespri siciliani",
        description:
          "Nel 1282, a Palermo, una rivolta cacciò gli Angioini. La guerra che seguì cambiò il re della Sicilia e lasciò il nome a un'opera di Verdi.",
      },
      {
        name: "Ruggero II",
        wiki: "Ruggero II di Sicilia",
        description:
          "Nel 1130 divenne il primo re di Sicilia e tenne corte a Palermo. Nel suo palazzo lavoravano greci, arabi e latini, ognuno nella propria lingua.",
      },
      {
        name: "Palazzo dei Normanni",
        wiki: "Palazzo dei Normanni",
        description:
          "Fu palazzo degli emiri e poi dei re normanni. Oggi è la sede dell'Assemblea regionale siciliana, e la Cappella Palatina è il suo cuore.",
      },
    ],
  },
  {
    slug: "ragusa",
    name: "Ragusa",
    shortName: "RG",
    description:
      "Barocco di pietra chiara, cioccolato di Modica e colline iblee. Ragusa è la provincia più a sud della Sicilia orientale.",
    flora:
      "Carrubi secolari, timo sulle pietre e ulivi che disegnano i muretti a secco.",
    fauna:
      "Ghiandaia marina dai colori accesi, istrice nei valloni e averla che infilza le prede sui rovi.",
    foodsText: "Cioccolato di Modica, scaccia e caciocavallo ragusano.",
    curiosity:
      "Il cioccolato di Modica si lavora a freddo, come facevano gli Spagnoli, e i granelli di zucchero restano croccanti.",
    spotlight:
      "Ragusa ha circa trecentoventimila abitanti. Il capoluogo è diviso in due: Ragusa superiore e Ragusa Ibla, nel vallone. Modica, Scicli e Vittoria completano il barocco degli Iblei.\nLa provincia è famosa per il cioccolato, il formaggio ragusano e i paesi ricostruiti dopo il terremoto del 1693.",
    plants: [
      {
        name: "Carrubo",
        wiki: "Ceratonia siliqua",
        description:
          "Albero largo, con baccelli dolci che un tempo sostituivano il cioccolato e nutrivano gli animali. Negli Iblei ce ne sono di secolari, isolati nei campi.",
      },
      {
        name: "Timo",
        wiki: "Thymbra capitata",
        description:
          "Piccolo arbusto aromatico delle pietre calde. In cucina profuma il ragusano e le carni; in fiore attira le api d'estate.",
      },
      {
        name: "Ulivo",
        wiki: "Olea europaea",
        description:
          "Gli ulivi degli Iblei stanno spesso dentro recinti di pietra a secco. L'olio è fruttato e accompagna la scaccia e le verdure.",
      },
    ],
    animals: [
      {
        name: "Ghiandaia marina",
        wiki: "Coracias garrulus",
        description:
          "Uccello turchese e castano che arriva in primavera e caccia insetti dai fili e dai muretti. Il volo, visto da sotto, sembra un lampo blu.",
      },
      {
        name: "Istrice",
        wiki: "Hystrix cristata",
        description:
          "Nei valloni iblei esce di notte a cercare bulbi e frutta. Gli aculeoli che perde sono cavi e leggeri, a bande bianche e nere.",
      },
      {
        name: "Averla capirossa",
        wiki: "Lanius senator",
        description:
          "Uccello con la testa rossiccia che infilza grilli e lucertole sulle spine, come in una dispensa. Nidifica tra gli ulivi e parte in autunno.",
      },
    ],
    foods: [
      {
        name: "Cioccolato di Modica",
        wiki: "Cioccolato di Modica",
        description:
          "Cacao lavorato a bassa temperatura, con zucchero che non si scioglie del tutto. Può essere alla vaniglia, al pepe o alla cannella.",
      },
      {
        name: "Scaccia",
        wiki: "Scaccia",
        description:
          "Focaccia ripiegata, farcita di pomodoro e caciocavallo, o di ricotta e cipolla. Si porta nelle gite e si taglia a rettangoli.",
      },
      {
        name: "Ragusano",
        wiki: "Ragusano",
        description:
          "Caciocavallo a forma di parallelepipedo, stagionato appeso. Si mangia a fette o si fa sciogliere sulla pasta e sulle verdure.",
      },
    ],
    tourism: [
      {
        name: "Ragusa Ibla",
        wiki: "Ragusa Ibla",
        description:
          "Centro antico nel fondovalle, con palazzi barocchi e la cupola di San Giorgio in fondo a una scalinata. Di sera le pietre diventano rosa.",
      },
      {
        name: "Modica",
        wiki: "Modica",
        description:
          "Città costruita su due colline, famosa per il cioccolato e il duomo di San Giorgio. Le case scendono una sull'altra fino al torrente coperto.",
      },
      {
        name: "Scicli",
        wiki: "Scicli",
        description:
          "Borgo barocco in una valle stretta, con chiese scavate quasi nella roccia. Via Francesco Mormino Penna è una fila di palazzi del Settecento.",
      },
    ],
    history: [
      {
        name: "Contea di Modica",
        wiki: "Contea di Modica",
        description:
          "Per secoli Modica fu capitale di una contea grande e quasi autonoma. Dal castello dei conti si dominava la valle e un territorio che arrivava fino a Siracusa.",
      },
      {
        name: "Terremoto del 1693",
        wiki: "Terremoto del Val di Noto del 1693",
        description:
          "L'11 gennaio 1693 un terremoto rase al suolo decine di paesi. Li ricostruirono in stile barocco: per questo Ragusa, Modica e Scicli sono patrimonio dell'umanità.",
      },
      {
        name: "Cava d'Ispica",
        wiki: "Cava d'Ispica",
        description:
          "Canyon lungo tredici chilometri, abitato dalla preistoria al Medioevo. Nelle pareti si vedono ancora tombe, chiese rupestri e colombaie.",
      },
    ],
  },
  {
    slug: "siracusa",
    name: "Siracusa",
    shortName: "SR",
    description:
      "Isola di Ortigia, teatro greco e papiro sul fiume Ciane. Siracusa fu una delle città più potenti del mondo antico.",
    flora:
      "Papiro sul Ciane, mandorli di Avola e melograni nei cortili di Ortigia.",
    fauna:
      "Fenicotteri a Vendicari, avocette nelle saline e tartarughe sulle spiagge del sud.",
    foodsText: "Pasta alla siracusana, mandorla di Avola e sarde a beccafico.",
    curiosity:
      "Archimede nacque a Siracusa. Si racconta che gridò «Eureka» uscendo da un bagno, dopo aver capito come misurare il volume di una corona.",
    spotlight:
      "Siracusa ha circa trecentottantamila abitanti. Il capoluogo vive sull'isola di Ortigia e sulla terraferma; Noto, Avola e Pachino stanno più a sud.\nLa provincia è famosa per il teatro greco, il barocco di Noto, il papiro e le mandorle di Avola.",
    plants: [
      {
        name: "Papiro",
        wiki: "Cyperus papyrus",
        description:
          "Cresce lungo il fiume Ciane, vicino alla città, ed è una delle poche stazioni spontanee d'Europa. Gli antichi ne facevano fogli per scrivere.",
      },
      {
        name: "Mandorlo",
        wiki: "Prunus dulcis",
        description:
          "Ad Avola e dintorni il mandorlo è una coltivazione storica. La mandorla, dolce e intensa, entra in paste di mandorla, granite e biscotti.",
      },
      {
        name: "Melograno",
        wiki: "Punica granatum",
        description:
          "Albero dei cortili, con fiori rossi e frutti pieni di chicchi. In autunno si apre a mano e macchia le dita.",
      },
    ],
    animals: [
      {
        name: "Fenicottero",
        wiki: "Phoenicopterus roseus",
        description:
          "Nella riserva di Vendicari si fermano stormi rosa, soprattutto in migrazione. Filtrano l'acqua bassa con il becco ricurvo.",
      },
      {
        name: "Avocetta",
        wiki: "Recurvirostra avosetta",
        description:
          "Uccello bianco e nero, con il becco sottile piegato all'insù. Nelle saline cammina nell'acqua e spazza il fango di lato.",
      },
      {
        name: "Tartaruga marina",
        wiki: "Caretta caretta",
        description:
          "Nidifica su alcune spiagge del sud della provincia. I centri di recupero curano gli esemplari feriti da reti e plastica.",
      },
    ],
    foods: [
      {
        name: "Pasta alla siracusana",
        wiki: "Pasta alla siracusana",
        description:
          "Pasta con pomodoro, acciughe, peperoni, olive e capperi. È un sugo di dispensa e di mare, tipico della cucina della città.",
      },
      {
        name: "Mandorla di Avola",
        wiki: "Mandorla di Avola",
        description:
          "Mandorla dolce, dalla forma a goccia, usata in pasta reale, confetti e granita. Avola, in provincia, le ha dato il nome.",
      },
      {
        name: "Sarde a beccafico",
        wiki: "Sarde a beccafico",
        description:
          "Sarde aperte, arrotolate con pangrattato, pinoli e uvetta, e cotte al forno. Il nome imita un uccello che si cibava di fichi.",
      },
    ],
    tourism: [
      {
        name: "Ortigia",
        wiki: "Ortigia",
        description:
          "Isola piccola, cuore della città antica, unita alla terra da ponti. Ci sono il duomo, la fonte Aretusa e i vicoli sul mare.",
      },
      {
        name: "Teatro greco",
        wiki: "Teatro greco di Siracusa",
        description:
          "Teatro del V secolo a.C. scavato nella roccia, enorme. Ogni primavera ospita ancora tragedie greche, in italiano e a volte in siciliano.",
      },
      {
        name: "Noto",
        wiki: "Noto",
        description:
          "Città barocca ricostruita dopo il 1693, tutta di pietra color miele. La cattedrale e il palazzo Ducezio chiudono una scena da teatro.",
      },
    ],
    history: [
      {
        name: "Duomo di Siracusa",
        wiki: "Duomo di Siracusa",
        description:
          "Il duomo è una chiesa costruita dentro un tempio greco di Atena: le colonne doriche sono ancora nei muri. Si vede, da fuori, la storia a strati della città.",
      },
      {
        name: "Archimede",
        wiki: "Archimede",
        description:
          "Matematico e inventore siracusano del III secolo a.C. Studiò leve, specchi e il numero pi greco, e difese la città con macchine da guerra.",
      },
      {
        name: "Dionisio I",
        wiki: "Dionisio I di Siracusa",
        description:
          "Tiranno che nel IV secolo a.C. fece di Siracusa la più forte potenza d'Occidente. A lui si lega l'Orecchio di Dionisio, una grotta che amplifica i sussurri.",
      },
    ],
  },
  {
    slug: "trapani",
    name: "Trapani",
    shortName: "TP",
    description:
      "Sale, cuscus, Erice sulle nuvole e il tempio di Segesta. Trapani è l'ovest della Sicilia, con Pantelleria e le isole Egadi.",
    flora:
      "Capperi di Pantelleria, zibibbo sulle terrazze e palma nana nella riserva dello Zingaro.",
    fauna:
      "Fenicotteri nelle saline, tonni al largo delle Egadi e berte che nidificano sulle scogliere.",
    foodsText: "Cuscus alla trapanese, pesto rosso e busiate.",
    curiosity:
      "Le saline di Trapani e Paceco funzionano ancora con il vento: l'acqua evapora e resta il sale, rosa al tramonto.",
    spotlight:
      "Trapani ha circa quattrocentoquindicimila abitanti. Il capoluogo è uno stretto promontorio sul mare; Erice sta sul monte, e nel territorio ci sono Marsala, le Egadi e Pantelleria.\nLa provincia è famosa per il sale, il cuscus, Segesta e un vino dolce, lo zibibbo.",
    plants: [
      {
        name: "Cappero",
        wiki: "Capparis spinosa",
        description:
          "Cresce nei muri e, a Pantelleria, si coltiva sui terrazzamenti di lava. Si mangiano i boccioli sotto sale e anche il frutto, il cucuncio.",
      },
      {
        name: "Zibibbo",
        wiki: "Zibibbo",
        description:
          "Uva dolce di Pantelleria, allevata bassa contro il vento. Diventa passito: un vino d'uva appassita al sole.",
      },
      {
        name: "Palma nana",
        wiki: "Chamaerops humilis",
        description:
          "Nella riserva dello Zingaro copre la costa tra il mare e la montagna. È la palma spontanea del Mediterraneo, bassa e resistente.",
      },
    ],
    animals: [
      {
        name: "Fenicottero",
        wiki: "Phoenicopterus roseus",
        description:
          "Nelle saline tra Trapani e Marsala forma stormi rosa per buona parte dell'anno. Il colore viene dai piccoli crostacei di cui si nutre.",
      },
      {
        name: "Tonno rosso",
        wiki: "Thunnus thynnus",
        description:
          "Passa davanti alle Egadi in primavera. Per secoli la mattanza, una pesca collettiva con le reti, scandì il calendario di Favignana.",
      },
      {
        name: "Berta maggiore",
        wiki: "Calonectris diomedea",
        description:
          "Uccello di mare che nidifica in tana sulle Egadi e torna di notte, per non farsi vedere dai gabbiani. Il verso, al buio, sembra un lamento.",
      },
    ],
    foods: [
      {
        name: "Cuscus alla trapanese",
        wiki: "Cuscus alla trapanese",
        description:
          "Semola lavorata a mano e servita con brodo di pesce. È il piatto che racconta il legame di Trapani con il Nord Africa.",
      },
      {
        name: "Pesto alla trapanese",
        wiki: "Pesto alla trapanese",
        description:
          "Pesto rosso di pomodoro crudo, mandorle, aglio e basilico, sulla busiata. Non ha pinoli: qui la mandorla è la frutta secca di casa.",
      },
      {
        name: "Busiate",
        wiki: "Busiate",
        description:
          "Pasta arrotolata intorno a un ferro, a forma di cavatappi. Tiene bene il pesto e il cuscus non c'entra: è il formato tipico della provincia.",
      },
    ],
    tourism: [
      {
        name: "Erice",
        wiki: "Erice",
        description:
          "Paese medievale a 750 metri, spesso dentro le nuvole. Si sale da Trapani in funivia e, quando è sereno, si vedono le Egadi.",
      },
      {
        name: "Saline di Trapani",
        wiki: "Saline di Trapani",
        description:
          "Vasche basse, mulini a vento e cumuli di sale tra la città e Marsala. Al tramonto l'acqua diventa rosa per le alghe e i fenicotteri.",
      },
      {
        name: "Segesta",
        wiki: "Segesta",
        description:
          "Tempio dorico incompiuto, solo, su una collina, e più in alto un teatro che guarda il golfo. Fu città degli Elimi, un popolo anteriore ai Greci.",
      },
    ],
    history: [
      {
        name: "Mozia",
        wiki: "Mozia",
        description:
          "Isola fenicia nello Stagnone, di fronte a Marsala. Ci vivevano commercianti che salavano il pesce; oggi si visita con una barca bassa.",
      },
      {
        name: "Elimi",
        wiki: "Elimi",
        description:
          "Popolo della Sicilia occidentale, a Segesta e Erice, prima del dominio greco. Si alleavano ora con Atene ora con Cartagine, secondo il momento.",
      },
      {
        name: "Tonnara Florio",
        wiki: "Tonnara Florio",
        description:
          "A Favignana, la tonnara dei Florio era la fabbrica del tonno. Per secoli, in primavera, le barche chiudevano i tonni in un sistema di reti chiamato mattanza.",
      },
    ],
  },
];
