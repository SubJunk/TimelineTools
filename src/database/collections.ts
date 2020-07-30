const collections = [];

/**
 * The prototype for collections.
 *
 * @param title         the title of the collection
 * @param datePublished a string to be converted to a date object
 * @param comicIds      the comics in the collection, in order
 */
function Collection(title: string, datePublished: string, comicIds: string[]) {
  this.allCollectionComicIds = [];
  this.id = title.replace(/[\W+]/g, '');
  this.title = title;

  // Create a Date object from the datePublished string
  this.date = new Date(datePublished);

  this.yearPublished = this.date.getFullYear();
  this.monthPublished = this.date.getMonth() + 1;
  this.comicIds = comicIds;
  this.visible = false;
}

// These should be in reading order
collections.push(
  new Collection(
    'X-Men Epic Collection: Children of the Atom',
    '2015-1-6',
    [
      'UncannyXMenVol11',
      'UncannyXMenVol12',
      'UncannyXMenVol13',
      'UncannyXMenVol14',
      'UncannyXMenVol15',
      'UncannyXMenVol16',
      'UncannyXMenVol17',
      'UncannyXMenVol18',
      'UncannyXMenVol19',
      'UncannyXMenVol110',
      'UncannyXMenVol111',
      'UncannyXMenVol112',
      'UncannyXMenVol113',
      'UncannyXMenVol114',
      'UncannyXMenVol115',
      'UncannyXMenVol116',
      'UncannyXMenVol117',
      'UncannyXMenVol118',
      'UncannyXMenVol119',
      'UncannyXMenVol120',
      'UncannyXMenVol121',
      'UncannyXMenVol122',
      'UncannyXMenVol123',
    ]
  ),
  new Collection(
    'X-Men: First Class, Vol. 1: Tomorrow\'s Brightest',
    '2007-7-4',
    [
      'XMenFirstClassVol11',
      'XMenFirstClassVol12',
      'XMenFirstClassVol13',
      'XMenFirstClassVol14',
      'XMenFirstClassVol15',
      'XMenFirstClassVol16',
      'XMenFirstClassVol17',
      'XMenFirstClassVol18',
    ]
  ),
  new Collection(
    'X-Men: First Class - Mutant Mayhem',
    '2008-4-2',
    [
      'XMenFirstClassVol21',
      'XMenFirstClassVol22',
      'XMenFirstClassVol23',
      'XMenFirstClassVol24',
      'XMenFirstClassVol25',
      'XMenFirstClassSpecialVol11',
    ]
  ),
  new Collection(
    'X-Men: First Class - Band of Brothers',
    '2008-11-26',
    [
      'XMenFirstClassVol26',
      'XMenFirstClassVol27',
      'XMenFirstClassVol28',
      'XMenFirstClassVol29',
      'XMenFirstClassVol210',
    ]
  ),
  new Collection(
    'X-Men: First Class - The Wonder Years',
    '2009-3-18',
    [
      'XMenFirstClassVol211',
      'XMenFirstClassVol212',
      'XMenFirstClassVol213',
      'XMenFirstClassVol214',
      'XMenFirstClassVol215',
      'XMenFirstClassVol216',
      'GiantSizeXMenFirstClassVol11',
    ]
  ),
  new Collection(
    'X-Men Epic Collection: Lonely Are the Hunted',
    '2016-12-7',
    [
      'UncannyXMenVol124',
      'UncannyXMenVol125',
      'UncannyXMenVol126',
      'UncannyXMenVol127',
      'UncannyXMenVol128',
      'UncannyXMenVol129',
      'UncannyXMenVol130',
      'UncannyXMenVol131',
      'UncannyXMenVol132',
      'UncannyXMenVol133',
      'UncannyXMenVol134',
      'UncannyXMenVol135',
      'UncannyXMenVol136',
      'UncannyXMenVol137',
      'UncannyXMenVol138',
      'UncannyXMenVol139',
      'UncannyXMenVol140',
      'UncannyXMenVol141',
      'UncannyXMenVol142',
      'UncannyXMenVol143',
      'UncannyXMenVol144',
      'UncannyXMenVol145',
      'AvengersVol153',
    ]
  ),
  new Collection(
    'X-Men Epic Collection: The Sentinels Live',
    '2018-11-14',
    [
      'UncannyXMenVol146',
      'UncannyXMenVol147',
      'UncannyXMenVol148',
      'KaZarVol12',
      'KaZarVol13',
      'MarvelTalesVol230',
      'UncannyXMenVol149',
      'UncannyXMenVol150',
      'UncannyXMenVol151',
      'UncannyXMenVol152',
      'UncannyXMenVol153',
      'UncannyXMenVol154',
      'UncannyXMenVol155',
      'UncannyXMenVol156',
      'UncannyXMenVol157',
      'UncannyXMenVol158',
      'UncannyXMenVol159',
      'UncannyXMenVol160',
      'UncannyXMenVol161',
      'UncannyXMenVol162',
      'UncannyXMenVol163',
      'UncannyXMenVol164',
      'UncannyXMenVol165',
      'UncannyXMenVol166',
    ]
  ),
  new Collection(
    'X-Men: The Hidden Years, Vol. 1',
    '2017-11-2',
    [
      'XMenTheHiddenYearsVol11',
      'XMenTheHiddenYearsVol12',
      'XMenTheHiddenYearsVol13',
      'XMenTheHiddenYearsVol14',
      'XMenTheHiddenYearsVol15',
      'XMenTheHiddenYearsVol16',
      'XMenTheHiddenYearsVol17',
      'XMenTheHiddenYearsVol18',
      'XMenTheHiddenYearsVol19',
      'XMenTheHiddenYearsVol110',
      'XMenTheHiddenYearsVol111',
      'XMenTheHiddenYearsVol112',
    ]
  ),
  new Collection(
    'X-Men: The Hidden Years, Vol. 2',
    '2017-11-9',
    [
      'XMenTheHiddenYearsVol113',
      'XMenTheHiddenYearsVol114',
      'XMenTheHiddenYearsVol115',
      'XMenTheHiddenYearsVol116',
      'XMenTheHiddenYearsVol117',
      'XMenTheHiddenYearsVol118',
      'XMenTheHiddenYearsVol119',
      'XMenTheHiddenYearsVol120',
      'XMenTheHiddenYearsVol121',
      'XMenTheHiddenYearsVol122',
    ]
  ),
  new Collection(
    'Marvel Masterworks: The X-Men Vol. 7',
    '2008-10-15',
    [
      'TheAmazingSpiderManVol192',
      'IncredibleHulkVol1150',
      'MarvelTeamUpVol14',
      'AmazingAdventuresVol211',
      'AmazingAdventuresVol212',
      'AmazingAdventuresVol213',
      'AmazingAdventuresVol214',
      'AmazingAdventuresVol215',
      'AmazingAdventuresVol216',
      'IncredibleHulkVol1161',
    ]
  ),
  new Collection(
    'Marvel Masterworks: The X-Men Vol. 8',
    '2010-3-24',
    [
      'AvengersVol1110',
      'AvengersVol1111',
      'IncredibleHulkVol1172',
      'CaptainAmericaVol1172',
      'CaptainAmericaVol1173',
      'CaptainAmericaVol1174',
      'CaptainAmericaVol1175',
      'MarvelTeamUpVol123',
      'DefendersVol115',
      'DefendersVol116',
      'IncredibleHulkVol1180',
      'IncredibleHulkVol1181',
      'MarvelTeamUpVol138',
      'GiantSizeFantasticFourVol14',
    ]
  ),
  new Collection(
    'X-Men: First Class Finals',
    '2009-8-26',
    [
      'XMenFirstClassFinalsVol11',
      'XMenFirstClassFinalsVol12',
      'XMenFirstClassFinalsVol13',
      'XMenFirstClassFinalsVol14',
    ]
  ),
  new Collection(
    'X-Men Epic Collection Vol. 5: Second Genesis',
    '2017-4',
    [
      'GiantSizeXMenVol11',
      'UncannyXMenVol194',
      'UncannyXMenVol195',
      'UncannyXMenVol196',
      'UncannyXMenVol197',
      'UncannyXMenVol198',
      'UncannyXMenVol199',
      'UncannyXMenVol1100',
      'UncannyXMenVol1101',
      'UncannyXMenVol1102',
      'UncannyXMenVol1103',
      'UncannyXMenVol1104',
      'UncannyXMenVol1105',
      'UncannyXMenVol1106',
      'UncannyXMenVol1107',
      'UncannyXMenVol1108',
      'IronFistVol114',
      'IronFistVol115',
      'UncannyXMenVol1109',
      'MarvelTeamUpVol11976',
      'MarvelTeamUpVol153',
      'UncannyXMenVol1110',
      'MarvelTeamUpVol169',
      'MarvelTeamUpVol170',
    ]
  ),
  new Collection(
    'Marvel Masterworks: The Uncanny X-Men Vol. 3',
    '2011-1',
    [
      'UncannyXMenVol1111',
      'UncannyXMenVol1112',
      'UncannyXMenVol1113',
      'UncannyXMenVol1114',
      'UncannyXMenVol1115',
      'UncannyXMenVol1116',
      'UncannyXMenVol1117',
      'UncannyXMenVol1118',
      'UncannyXMenVol1119',
      'UncannyXMenVol1120',
      'UncannyXMenVol1121',
    ]
  ),
  new Collection(
    'Marvel Masterworks: The Uncanny X-Men Vol. 4',
    '2012-2',
    [
      'UncannyXMenVol1122',
      'UncannyXMenVol1123',
      'UncannyXMenVol1124',
      'XMenAnnualVol13',
      'UncannyXMenVol1125',
      'UncannyXMenVol1126',
      'UncannyXMenVol1127',
      'UncannyXMenVol1128',
      'UncannyXMenVol1129',
      'UncannyXMenVol1130',
      'UncannyXMenVol1131'
    ]
  ),
  new Collection(
    'Marvel Masterworks: The Uncanny X-Men Vol. 5',
    '2012-7',
    [
      'UncannyXMenVol1132',
      'UncannyXMenVol1133',
      'UncannyXMenVol1134',
      'UncannyXMenVol1135',
      'UncannyXMenVol1136',
      'UncannyXMenVol1137',
      'UncannyXMenVol1138',
      'XMenAnnualVol14',
      'UncannyXMenVol1139',
      'UncannyXMenVol1140'
    ]
  ),
  new Collection(
    'Marvel Masterworks: The Uncanny X-Men Vol. 6',
    '2008-2',
    [
      'UncannyXMenVol1141',
      'UncannyXMenVol1142',
      'UncannyXMenVol1143',
      'UncannyXMenVol1144',
      'UncannyXMenVol1145',
      'UncannyXMenVol1146',
      'UncannyXMenVol1147',
      'UncannyXMenVol1148',
      'UncannyXMenVol1149',
      'UncannyXMenVol1150',
    ]
  ),
  new Collection(
    'Marvel Masterworks: The Uncanny X-Men Vol. 7',
    '2011-1',
    [
      'AvengersAnnualVol110',
      'XMenAnnualVol15',
      'UncannyXMenVol1151',
      'UncannyXMenVol1152',
      'UncannyXMenVol1153',
      'UncannyXMenVol1154',
      'UncannyXMenVol1155',
      'UncannyXMenVol1156',
      'UncannyXMenVol1157',
      'UncannyXMenVol1158',
      'UncannyXMenVol1159'
    ]
  ),
  new Collection(
    'Marvel Masterworks: The Uncanny X-Men Vol. 8',
    '2012-2',
    [
      'UncannyXMenVol1160',
      'UncannyXMenVol1161',
      'UncannyXMenVol1162',
      'UncannyXMenVol1163',
      'UncannyXMenVol1164',
      'UncannyXMenVol1165',
      'UncannyXMenVol1166',
      'UncannyXMenVol1167',
      'XMenAnnualVol16'
    ]
  ),
  new Collection(
    'Marvel Masterworks: The Uncanny X-Men Vol. 9',
    '2015-1',
    [
      'MarvelGraphicNovelVol15',
      'UncannyXMenVol1168',
      'UncannyXMenVol1169',
      'UncannyXMenVol1170',
      'UncannyXMenVol1171',
      'WolverineVol11',
      'WolverineVol12',
      'WolverineVol13',
      'WolverineVol14',
      'UncannyXMenVol1172',
      'UncannyXMenVol1173',
      'UncannyXMenVol1174',
      'UncannyXMenVol1175',
      'XMenAnnualVol17'
    ]
  ),
  new Collection(
    'Marvel Masterworks: The Uncanny X-Men Vol. 10 (Partial)',
    '2017-2',
    [
      'MagikVol11',
      'MagikVol12',
      'MagikVol13',
      'MagikVol14',
    ]
  ),
  new Collection(
    'The Uncanny X-Men Omnibus Vol. 4',
    '2021-3-2',
    [
      'UncannyXMenVol1176',
      'UncannyXMenVol1177',
      'UncannyXMenVol1178',
      'UncannyXMenVol1179',
      'UncannyXMenVol1180'
    ]
  ),
  new Collection(
    'Secret Wars',
    '2011-12-28',
    [
      'SecretWarsVol11',
      'SecretWarsVol12',
      'SecretWarsVol13',
      'SecretWarsVol14',
      'SecretWarsVol15',
      'SecretWarsVol16',
      'SecretWarsVol17',
      'SecretWarsVol18',
      'SecretWarsVol19',
      'SecretWarsVol110',
      'SecretWarsVol111',
      'SecretWarsVol112'
    ]
  ),
  new Collection(
    'The Uncanny X-Men Omnibus Vol. 4',
    '2021-3-2',
    [
      'UncannyXMenVol1181',
      'UncannyXMenVol1182',
      'UncannyXMenVol1183',
      'UncannyXMenVol1184',
      'UncannyXMenVol1185',
      'UncannyXMenVol1186',
      'UncannyXMenVol1187',
      'UncannyXMenVol1188',
      'KittyPrydeandWolverineVol11',
      'KittyPrydeandWolverineVol12',
      'KittyPrydeandWolverineVol13',
      'KittyPrydeandWolverineVol14',
      'KittyPrydeandWolverineVol15',
      'KittyPrydeandWolverineVol16',
      'UncannyXMenVol1189',
      'UncannyXMenVol1190',
      'UncannyXMenVol1191',
      'UncannyXMenVol1192',
      'XMenAnnualVol18',
      'XMenAlphaFlightVol11',
      'XMenAlphaFlightVol12',
      'UncannyXMenVol1193'
    ]
  ),
  new Collection(
    'X-Men: Legion - Shadow King Rising (Partial)',
    '2018-1-17',
    [
      'NewMutantsVol126',
      'NewMutantsVol127',
      'NewMutantsVol128'
    ]
  ),
  new Collection(
    'X-Men Epic Collection Vol. 12: The Gift (Partial)',
    '2016-1',
    [
      'UncannyXMenVol1194',
      'UncannyXMenVol1195',
      'UncannyXMenVol1196',
      'UncannyXMenVol1197',
      'UncannyXMenVol1198',
      'NightcrawlerVol11',
      'NightcrawlerVol12',
      'NightcrawlerVol13',
      'NightcrawlerVol14'
    ]
  ),
  new Collection(
    'X-Men: Ghosts',
    '2013-5',
    [
      'UncannyXMenVol1199',
      'UncannyXMenVol1200',
      'UncannyXMenVol1201'
    ]
  ),
  new Collection(
    'X-Men: Phoenix Rising',
    '2011-9-14',
    [
      'AvengersVol1263',
      'FantasticFourVol1286',
      'XFactorVol11'
    ]
  ),
  new Collection(
    'X-Men: Ghosts',
    '2013-5',
    [
      'UncannyXMenVol1202',
      'UncannyXMenVol1203',
      'UncannyXMenVol1204',
      'UncannyXMenVol1205'
    ]
  ),
  new Collection(
    'X-Men: Legion - Shadow King Rising (Partial)',
    '2018-1-17',
    [
      'NewMutantsVol144'
    ]
  ),
  new Collection(
    'X-Men: Ghosts',
    '2013-5',
    [
      'UncannyXMenVol1206',
      'UncannyXMenVol1207',
      'UncannyXMenVol1208',
      'UncannyXMenVol1209',
      'XMenAnnualVol110'
    ]
  ),
  new Collection(
    'X-Men: Mutant Massacre Omnibus',
    '2018-11-20',
    [
      'UncannyXMenVol1210',
      'XFactorVol19',
      'UncannyXMenVol1211',
      'XFactorVol110',
      'NewMutantsVol146',
      'ThorVol1373',
      'PowerPackVol127',
      'UncannyXMenVol1212',
      'ThorVol1374',
      'XFactorVol111',
      'DaredevilVol1238',
      'UncannyXMenVol1213',
      'XFactorVol112',
      'UncannyXMenVol1214',
      'UncannyXMenVol1215',
      'UncannyXMenVol1216',
      'XFactorVol113',
      'XFactorVol114',
      'XFactorVol115',
      'UncannyXMenVol1217',
      'UncannyXMenVol1218',
      'UncannyXMenVol1219',
      'ThorVol1377',
      'XFactorVol116',
      'ThorVol1378',
      'XFactorVol117',
      'XFactorAnnualVol12',
      'XMenvstheAvengersVol11',
      'XMenvstheAvengersVol12',
      'XMenvstheAvengersVol13',
      'XMenvstheAvengersVol14',
      'XMenAnnualVol111',
      'FantasticFourvstheXMenVol11',
      'FantasticFourvstheXMenVol12',
      'FantasticFourvstheXMenVol13',
      'FantasticFourvstheXMenVol14'
    ]
  ),
  new Collection(
    'X-Men: The Fall of the Mutants',
    '2011-5-18',
    [
      'XFactorVol119',
      'XFactorVol120',
      'XFactorVol121',
      'XFactorVol122',
      'XFactorVol123',
      'XFactorVol124',
      'XFactorVol125',
      'PowerPackVol135',
      'DaredevilVol1252',
      'CaptainAmericaVol1339',
      'XFactorVol126',
      'FantasticFourVol1312',
      'UncannyXMenVol1220',
      'UncannyXMenVol1221',
      'UncannyXMenVol1222',
      'UncannyXMenVol1223',
      'UncannyXMenVol1224',
      'IncredibleHulkVol1340',
      'UncannyXMenVol1225',
      'UncannyXMenVol1226',
      'UncannyXMenVol1227',
      'NewMutantsVol155',
      'NewMutantsVol156',
      'NewMutantsVol157',
      'NewMutantsVol158',
      'NewMutantsVol159',
      'NewMutantsVol160',
      'NewMutantsVol161'
    ]
  ),
  new Collection(
    'X-Men: Inferno Prologue',
    '2014-12-3',
    [
      'XFactorVol127',
      'XFactorVol128',
      'XFactorVol129',
      'UncannyXMenVol1228',
      'UncannyXMenVol1229',
      'UncannyXMenVol1230',
      'NewMutantsVol162',
      'NewMutantsVol163',
      'NewMutantsVol164',
      'NewMutantsVol165',
      'NewMutantsVol166',
      'UncannyXMenVol1231',
      'UncannyXMenVol1232',
      'UncannyXMenVol1233',
      'UncannyXMenVol1234',
      'XFactorAnnualVol13',
      'NewMutantsAnnualVol14',
      'XMenAnnualVol112',
      'XFactorVol130',
      'XFactorVol131',
      'XFactorVol132',
      'UncannyXMenVol1235',
      'UncannyXMenVol1236',
      'UncannyXMenVol1237',
      'UncannyXMenVol1238',
      'NewMutantsVol167',
      'NewMutantsVol168',
      'NewMutantsVol169',
      'NewMutantsVol170'
    ]
  ),
  new Collection(
    'X-Men: Inferno',
    '2009-5-28',
    [
      'XFactorVol133',
      'XTerminatorsVol11',
      'XFactorVol134',
      'XTerminatorsVol12',
      'UncannyXMenVol1239',
      'XFactorVol135',
      'XFactorVol136',
      'UncannyXMenVol1240',
      'XTerminatorsVol13',
      'NewMutantsVol171',
      'XTerminatorsVol14',
      'NewMutantsVol172',
      'UncannyXMenVol1241',
      'XFactorVol137',
      'NewMutantsVol173',
      'UncannyXMenVol1242',
      'XFactorVol138',
      'UncannyXMenVol1243',
      'XFactorVol139',
      'XFactorAnnualVol14',
      'XFactorVol140'
    ]
  ),
  new Collection(
    'X-Men by Chris Claremont & Jim Lee Omnibus, Vol. 1',
    '2011-10-19',
    [
      'UncannyXMenVol1244',
      'UncannyXMenVol1245',
      'XMenAnnualVol113',
      'UncannyXMenVol1246',
      'UncannyXMenVol1247',
      'UncannyXMenVol1248',
      'UncannyXMenVol1249',
      'UncannyXMenVol1250',
      'UncannyXMenVol1251',
      'UncannyXMenVol1252',
      'UncannyXMenVol1253',
      'UncannyXMenVol1254',
      'UncannyXMenVol1255',
      'UncannyXMenVol1256',
      'UncannyXMenVol1257',
      'UncannyXMenVol1258',
      'UncannyXMenVol1259',
      'UncannyXMenVol1260',
      'UncannyXMenVol1261',
      'UncannyXMenVol1262',
      'UncannyXMenVol1263',
      'UncannyXMenVol1264',
      'UncannyXMenVol1265',
      'UncannyXMenVol1266',
      'UncannyXMenVol1267',
      'UncannyXMenVol1268',
      'UncannyXMenVol1269'
    ]
  ),
  new Collection(
    'Cable and the New Mutants (Partial)',
    '2011-1',
    [
      'NewMutantsVol187',
      'NewMutantsVol188',
      'NewMutantsVol189',
      'NewMutantsVol190',
      'NewMutantsVol191',
      'NewMutantsVol192',
      'NewMutantsVol193',
      'NewMutantsVol194'
    ]
  ),
  new Collection(
    'X-Men: X-Tinction Agenda',
    '1998-12',
    [
      'UncannyXMenVol1270',
      'NewMutantsVol195',
      'XFactorVol160',
      'UncannyXMenVol1271',
      'NewMutantsVol196',
      'XFactorVol161',
      'UncannyXMenVol1272',
      'NewMutantsVol197',
      'XFactorVol162'
    ]
  ),
  new Collection(
    'X-Men by Chris Claremont & Jim Lee Omnibus, Vol. 2',
    '2012-1-25',
    [
      'XFactorVol163',
      'XFactorVol164',
      'UncannyXMenVol1273',
      'UncannyXMenVol1274',
      'UncannyXMenVol1275',
      'UncannyXMenVol1276',
      'UncannyXMenVol1277',
      'XFactorVol165',
      'XFactorVol166',
      'XFactorVol167',
      'XFactorVol168',
      'UncannyXMenVol1278',
      'UncannyXMenVol1279',
      'XFactorVol169',
      'UncannyXMenVol1280',
      'XFactorVol170'
    ]
  ),
  new Collection(
    'Deadpool vs. X-Force',
    '2014-11-5',
    [
      'DeadpoolvsXForceVol11',
      'DeadpoolvsXForceVol12',
      'DeadpoolvsXForceVol13',
      'DeadpoolvsXForceVol14'
    ]
  ),
  new Collection(
    'X-Force Omnibus Vol. 1',
    '2013-2-6',
    [
      'NewMutantsVol198',
      'NewMutantsVol199',
      'NewMutantsVol1100',
      'NewMutantsAnnualVol17',
      'XMenAnnualVol115',
      'XFactorAnnualVol16',
      'XForceVol11',
      'XForceVol12',
      'XForceVol13',
      'SpiderManVol116',
      'XForceVol14'
    ]
  ),
  new Collection(
    'X-Men by Chris Claremont & Jim Lee Omnibus, Vol. 2',
    '2012-1-25',
    [
      'XMenVol21',
      'XMenVol22',
      'XMenVol23',
      'XMenVol24',
      'XMenVol25',
      'XMenVol26',
      'XMenVol27'
    ]
  ),
  new Collection(
    'X-Men: Bishop\'s Crossing',
    '2016-11-23',
    [
      'UncannyXMenVol1281',
      'UncannyXMenVol1282',
      'UncannyXMenVol1283',
      'UncannyXMenVol1284',
      'UncannyXMenVol1285',
      'UncannyXMenVol1286',
      'UncannyXMenVol1287'
    ]
  ),
  new Collection(
    'X-Men by Chris Claremont & Jim Lee Omnibus, Vol. 2',
    '2012-1-25',
    [
      'XMenVol28',
      'GhostRiderVol326',
      'XMenVol29',
      'GhostRiderVol327'
    ]
  ),
  new Collection(
    'X-Men: Bishop\'s Crossing',
    '2016-11-23',
    [
      'UncannyXMenVol1288',
      'UncannyXMenVol1289',
      'UncannyXMenVol1290'
    ]
  ),
  new Collection(
    'X-Force Omnibus Vol. 1',
    '2013-2-6',
    [
      'XForceVol15',
      'XForceVol16',
      'XForceVol17',
      'XForceVol18',
      'XForceVol19',
      'XForceVol110',
    ]
  ),
  new Collection(
    'X-Men: Shattershot',
    '1992-5',
    [
      'XMenAnnualVol21',
      'XMenAnnualVol116',
      'XFactorAnnualVol17',
      'XForceAnnualVol11'
    ]
  ),
  new Collection(
    'X-Men by Chris Claremont & Jim Lee Omnibus, Vol. 2',
    '2012-1-25',
    [
      'XMenVol210',
      'XMenVol211'
    ]
  ),
  new Collection(
    'X-Force Omnibus Vol. 1',
    '2013-2-6',
    [
      'XForceVol111',
      'XForceVol112',
      'XForceVol113',
      'XForceVol114',
      'XForceVol115',
      'CableBloodMetalVol11',
      'CableBloodMetalVol12'
    ]
  ),
  new Collection(
    'X-Men: Bishop\'s Crossing',
    '2016-11-23',
    [
      'UncannyXMenVol1291',
      'UncannyXMenVol1292',
      'UncannyXMenVol1293',
      'XMenVol212',
      'XMenVol213'
    ]
  ),
  new Collection(
    'X-Men: X-Cutioner\'s Song',
    '2016-12-14',
    [
      'UncannyXMenVol1294',
      'XFactorVol184',
      'XMenVol214',
      'XForceVol116',
      'UncannyXMenVol1295',
      'XFactorVol185',
      'XMenVol215',
      'XForceVol117',
      'UncannyXMenVol1296',
      'XFactorVol186',
      'XMenVol216',
      'XForceVol118',
      'UncannyXMenVol1297',
      'StryfesStrikeFileVol11'
    ]
  ),
  new Collection(
    'X-Men: A Skinning of Souls',
    '2013-11-20',
    [
      'XMenVol217',
      'XMenVol218',
      'XMenVol219'
    ]
  ),
  new Collection(
    'Deadpool & X-Force Omnibus',
    '2017-11-1',
    [
      'NewWarriorsVol131',
      'XForceVol119'
    ]
  ),
  new Collection(
    'X-Men: Fatal Attractions',
    '2016-9-21',
    [
      'UncannyXMenVol1298',
      'UncannyXMenVol1299',
      'XFactorVol187',
      'XFactorVol188',
      'XFactorVol189',
      'XFactorVol190',
      'XFactorVol191',
      'UncannyXMenVol1300'
    ]
  ),
  new Collection(
    'Deadpool & X-Force Omnibus',
    '2017-11-1',
    [
      'XForceVol120',
      'XForceVol121',
      'XForceVol122',
      'XForceVol123'
    ]
  ),
  new Collection(
    'X-Men: Legacy - Sins of the Father',
    '2009-3-11',
    [
      'XMenTheUnlikelySagaofXavierMagnetoandStanVol11',
      'XMenOddMenOutVol11',
    ]
  ),
  new Collection(
    'X-Men: Fatal Attractions',
    '2016-9-21',
    [
      'XMenAnnualVol117',
      'XMenUnlimitedVol11'
    ]
  ),
  new Collection(
    'Deadpool & X-Force Omnibus',
    '2017-11-1',
    [
      'XForceVol124',
      'CableVol11',
      'CableVol12',
      'CableVol13',
      'CableVol14'
    ]
  ),
  new Collection(
    'X-Men: A Skinning of Souls',
    '2013-11-20',
    [
      'XMenVol220',
      'XMenVol221',
      'XMenVol222',
      'XMenVol223'
    ]
  ),
  new Collection(
    'X-Men: Fatal Attractions',
    '2016-9-21',
    [
      'UncannyXMenVol1301',
      'UncannyXMenVol1302',
      'UncannyXMenVol1303',
      'XFactorVol192'
    ]
  ),
  new Collection(
    'Deadpool & X-Force Omnibus',
    '2017-11-1',
    [
      'DeadpoolTheCircleChaseVol11',
      'DeadpoolTheCircleChaseVol12',
      'DeadpoolTheCircleChaseVol13',
      'DeadpoolTheCircleChaseVol14',
      'XForceVol125'
    ]
  ),
  new Collection(
    'X-Men: A Skinning of Souls',
    '2013-11-20',
    [
      'XMenVol224'
    ]
  ),
  new Collection(
    'X-Men: Fatal Attractions',
    '2016-9-21',
    [
      'UncannyXMenVol1304',
      'XMenUnlimitedVol12'
    ]
  ),
  new Collection(
    'Deadpool & X-Force Omnibus',
    '2017-11-1',
    [
      'XForceVol126'
    ]
  ),
  new Collection(
    'X-Men: Fatal Attractions',
    '2016-9-21',
    [
      'UncannyXMenVol1305'
    ]
  ),
  new Collection(
    'X-Men: Phalanx Covenant',
    '2014-2-5',
    [
      'UncannyXMenVol1306'
    ]
  ),
  new Collection(
    'X-Men: Gambit Classic, Vol. 1 (Partial)',
    '2009-5',
    [
      'GambitVol11',
      'GambitVol12',
      'GambitVol13',
      'GambitVol14'
    ]
  ),
  new Collection(
    'Deadpool & X-Force Omnibus',
    '2017-11-1',
    [
      'XForceAnnualVol12',
      'XForceVol127',
      'XForceVol128',
      'CableVol15',
      'NomadVol220'
    ]
  ),
  new Collection(
    'X-Men: Fatal Attractions',
    '2016-9-21',
    [
      'XMenVol225',
      'WolverineVol275',
      'ExcaliburVol171'
    ]
  ),
  new Collection(
    'X-Men: The Wedding of Cyclops and Phoenix HC',
    '2018-5-21',
    [
      'AvengersVol1368',
      'XMenVol226',
      'AvengersWestCoastVol2101',
      'UncannyXMenVol1307',
      'AvengersVol1369'
    ]
  ),
  new Collection(
    'X-Men: The Wedding of Cyclops and Phoenix (Partial)',
    '2012-9-19',
    [
      'XMenAnnualVol22'
    ]
  ),
  new Collection(
    'X-Men: The Wedding of Cyclops and Phoenix HC',
    '2018-5-19',
    [
      'XMenVol227',
      'XMenUnlimitedVol13',

    ]
  ),
  new Collection(
    'Deadpool & X-Force Omnibus',
    '2017-11-1',
    [
      'XForceVol129',
      'XForceVol130',
    ]
  ),
  new Collection(
    'X-Men: The Wedding of Cyclops and Phoenix HC',
    '2018-5-19',
    [
      'CableVol16',
      'CableVol17',
      'CableVol18',
      'UncannyXMenVol1308',
      'XMenVol228'
    ]
  ),
  new Collection(
    'Deadpool & X-Force Omnibus',
    '2017-11-1',
    [
      'XForceVol131'
    ]
  ),
  new Collection(
    'X-Men: The Wedding of Cyclops and Phoenix HC',
    '2018-5-19',
    [
      'UncannyXMenVol1309',
      'XMenVol229'
    ]
  ),
  new Collection(
    'X-Force: Child\'s Play',
    '2016-5-12',
    [
      'XForceVol132',
      'NewWarriorsVol145',
      'XForceVol133',
      'NewWarriorsVol146',
      'XForceVol134'
    ]
  ),
  new Collection(
    'Cable Classic: Vol. 2',
    '2009-7-22',
    [
      'CableVol19',
      'CableVol110',
      'CableVol111'
    ]
  ),
  new Collection(
    'X-Men: The Wedding of Cyclops and Phoenix HC',
    '2018-5-19',
    [
      'XMenAnnualVol118',
      'XMenTheWeddingAlbumVol11',
      'UncannyXMenVol1310',
      'XMenVol230',
      'WhatIfVol260',
      'XMenVol231',
      'XMenVol232'
    ]
  ),
  new Collection(
    'X-Men: Phalanx Covenant',
    '2014-2-5',
    [
      'UncannyXMenVol1311',
      'UncannyXMenVol1312',
      'UncannyXMenVol1313',
      'UncannyXMenVol1314'
    ]
  ),
  new Collection(
    'X-Men: Legionquest',
    '2018-4-17',
    [
      'XMenUnlimitedVol14',
      'XMenUnlimitedVol15'
    ]
  ),
  new Collection(
    'X-Men: The Wedding of Cyclops and Phoenix HC',
    '2018-5-19',
    [
      'XMenVol233'
    ]
  ),
  new Collection(
    'Cable Classic: Vol. 2',
    '2009-7-22',
    [
      'CableVol112',
      'CableVol113',
      'CableVol114'
    ]
  ),
  new Collection(
    'X-Men: Phalanx Covenant',
    '2014-2-5',
    [
      'ExcaliburVol178',
      'ExcaliburVol179',
      'ExcaliburVol180'
    ]
  ),
  new Collection(
    'X-Men: The Wedding of Cyclops and Phoenix HC',
    '2018-5-19',
    [
      'XMenVol234'
    ]
  ),
  new Collection(
    'X-Force: Child\'s Play',
    '2016-5-12',
    [
      'XForceVol135',
      'XForceVol136',
      'XForceVol137'
    ]
  ),
  new Collection(
    'X-Men: Phalanx Covenant',
    '2014-2-5',
    [
      'ExcaliburVol181'
    ]
  ),
  new Collection(
    'Deadpool & X-Force Omnibus',
    '2017-11-1',
    [
      'DeadpoolVol11',
      'DeadpoolVol12',
      'DeadpoolVol13',
      'DeadpoolVol14'
    ]
  ),
  new Collection(
    'X-Men: Fatal Attractions',
    '2016-9-21',
    [
      'UncannyXMenVol1315'
    ]
  ),
  new Collection(
    'Cable Classic: Vol. 3 (Partial)',
    '2016-9-8',
    [
      'CableVol115'
    ]
  ),
  new Collection(
    'X-Men: The Wedding of Cyclops and Phoenix HC',
    '2018-5-17',
    [
      'AdventuresofCyclopsPhoenixVol11',
      'AdventuresofCyclopsPhoenixVol12',
      'AdventuresofCyclopsPhoenixVol13',
      'AdventuresofCyclopsPhoenixVol14'
    ]
  ),
  new Collection(
    'X-Men: The Wedding of Cyclops and Phoenix HC',
    '2018-5-19',
    [
      'XMenVol235'
    ]
  ),
  new Collection(
    'X-Men: Phalanx Covenant',
    '2014-2-5',
    [
      'UncannyXMenVol1316',
      'XMenVol236',
      'UncannyXMenVol1317',
      'XMenVol237',
      'XFactorVol1106',
      'XForceVol138',
      'ExcaliburVol182',
      'WolverineVol285',
      'CableVol116'
    ]
  ),
  new Collection(
    'Wolverine Epic Collection: The Dying Game',
    '2015-12-2',
    [
      'WolverineVol287'
    ]
  ),
  new Collection(
    'X-Force: Phalanx Covenant HC (Partial)',
    '2013-8-14',
    [
      'XForceVol139'
    ]
  ),
  new Collection(
    'X-Force: Child\'s Play',
    '2016-5-12',
    [
      'XForceAnnualVol13'
    ]
  ),
  new Collection(
    'X-Men: Legionquest',
    '2018-4-17',
    [
      'XMenUnlimitedVol16'
    ]
  ),
  new Collection(
    'Bishop: The Mountjoy Crisis',
    '1996-5',
    [
      'BishopVol11',
      'BishopVol12',
      'BishopVol13',
      'BishopVol14'
    ]
  ),
  new Collection(
    'X-Men: Legionquest',
    '2018-4-17',
    [
      'XFactorVol1107'
    ]
  ),
  new Collection(
    'X-Force: Phalanx Covenant HC (Partial)',
    '2013-8-14',
    [
      'XForceVol140',
      'XForceVol141'
    ]
  ),
  new Collection(
    'X-Men: Legionquest',
    '2018-4-17',
    [
      'XMenUnlimitedVol17'
    ]
  ),
  new Collection(
    'Wolverine Epic Collection: The Dying Game',
    '2015-12-2',
    [
      'WolverineVol288'
    ]
  ),
  new Collection(
    'Cable Classic: Vol. 3 (Partial)',
    '2016-9-8',
    [
      'CableVol117',
      'CableVol118',
      'CableVol119'
    ]
  ),
  new Collection(
    'X-Men: Legionquest',
    '2018-4-17',
    [
      'UncannyXMenVol1318',
      'XMenVol238'
    ]
  ),
  new Collection(
    'Generation X Classic: Vol. 1 (Partial)',
    '2010-12-15',
    [
      'GenerationXVol11',
      'GenerationXVol12',
      'GenerationXVol13'
    ]
  ),
  new Collection(
    'X-Men: Legionquest',
    '2018-4-17',
    [
      'XMenVol239'
    ]
  ),
  new Collection(
    'Gambit Classic, Volume 2',
    '2013-2-5',
    [
      'RogueVol11',
      'RogueVol12',
      'RogueVol13',
      'RogueVol14'
    ]
  ),
  new Collection(
    'Wolverine Epic Collection: The Dying Game',
    '2015-12-2',
    [
      'WolverineVol289'
    ]
  ),
  new Collection(
    'X-Force: Phalanx Covenant HC (Partial)',
    '2013-8-14',
    [
      'XForceVol142'
    ]
  ),
  new Collection(
    'X-Men: Legionquest',
    '2018-4-17',
    [
      'UncannyXMenVol1319',
      'XFactorVol1108',
      'XFactorVol1109',
      'UncannyXMenVol1320',
      'XMenVol240',
      'UncannyXMenVol1321',
      'CableVol120',
      'XMenVol241'
    ]
  ),
  new Collection(
    'Wolverine Epic Collection: The Dying Game',
    '2015-12-2',
    [
      'WolverineVol290'
    ]
  ),
  new Collection(
    'Generation X Classic: Vol. 1 (Partial)',
    '2010-12-15',
    [
      'GenerationXVol14'
    ]
  ),
  new Collection(
    'X-Force: Phalanx Covenant HC (Partial)',
    '2013-8-14',
    [
      'XForceVol143'
    ]
  ),
  new Collection(
    'X-Men: Age of Apocalypse: Dawn',
    '2016-2-10',
    [
      'XMenChroniclesVol11',
      'TalesfromtheAgeofApocalypseSinsterBloodlinesVol11',
      'XManVol1-1',
      'XMenChroniclesVol12',
      'TalesfromtheAgeofApocalypseBytheLightVol11',
      'BlinkVol11',
      'BlinkVol12',
      'BlinkVol13',
      'BlinkVol14'
    ]
  ),
  new Collection(
    'X-Men: The New Age of Apocalypse',
    '2006-7-6',
    [
      'XMenAgeofApocalypseOneShotVol10'
    ]
  ),
  new Collection(
    'X-Men: Age of Apocalypse Omnibus (Partial)',
    '2012-2-22',
    [
      'XMenAlphaVol11',
      'GenerationNextVol11',
      'AstonishingXMenVol11',
      'GambitandtheXTernalsVol11',
      'WeaponXVol11',
      'FactorXVol11',
      'XManVol11'
    ]
  ),
  new Collection(
    'X-Men: Age of Apocalypse: Dawn',
    '2016-2-10',
    [
      'AgeofApocalypseTheChosenVol11',
    ]
  ),
  new Collection(
    'X-Men: Age of Apocalypse Omnibus (Partial)',
    '2012-2-22',
    [
      'XCalibreVol11',
      'AmazingXMenVol11',
      'GenerationNextVol12',
      'AstonishingXMenVol12',
      'GambitandtheXTernalsVol12',
      'WeaponXVol12',
      'XCalibreVol12',
      'FactorXVol12',
      'XManVol12',
      'AmazingXMenVol12',
      'XCalibreVol13',
      'FactorXVol13'
    ]
  ),
  new Collection(
    'X-Men: Age of Apocalypse: The Complete Epic Book 3 (Partial)',
    '2006-4-12',
    [
      'XUniverseVol11'
    ]
  ),
  new Collection(
    'X-Men: Age of Apocalypse Omnibus (Partial)',
    '2012-2-22',
    [
      'AstonishingXMenVol13',
      'AmazingXMenVol13',
      'XManVol13',
      'WeaponXVol13',
      'GenerationNextVol13',
      'GambitandtheXTernalsVol13',
      'AstonishingXMenVol14',
      'GenerationNextVol14',
      'XManVol14',
      'XCalibreVol14',
      'FactorXVol14',
      'GambitandtheXTernalsVol14',
      'WeaponXVol14',
      'AmazingXMenVol14'
    ]
  ),
  new Collection(
    'X-Men: Age of Apocalypse: The Complete Epic Book 4 (Partial)',
    '2006-11-1',
    [
      'XUniverseVol12'
    ]
  ),
  new Collection(
    'X-Men: Age of Apocalypse Omnibus (Partial)',
    '2012-2-22',
    [
      'XMenOmegaVol11'
    ]
  ),
  new Collection(
    'X-Men: The New Age of Apocalypse',
    '2006-7-6',
    [
      'XMenAgeofApocalypseVol11',
      'XMenAgeofApocalypseVol12',
      'XMenAgeofApocalypseVol13',
      'XMenAgeofApocalypseVol14',
      'XMenAgeofApocalypseVol15',
      'XMenAgeofApocalypseVol16'
    ]
  ),
  new Collection(
    'X-Men: Road to Onslaught Vol. 1',
    '2014-1-22',
    [
      'XMenPrimeVol11'
    ]
  ),
  new Collection(
    'X-Man: The Man Who Fell to Earth',
    '2012-6-20',
    [
      'XManVol15'
    ]
  ),
  new Collection(
    'Wolverine Epic Collection: The Dying Game',
    '2015-12-2',
    [
      'WolverineVol291'
    ]
  ),
  new Collection(
    'X-Men: Road to Onslaught Vol. 1',
    '2014-1-22',
    [
      'UncannyXMenVol1322',
      'XMenVol242',
      'XMenVol243',
      'XMenVol244'
    ]
  ),
  new Collection(
    'Cable & X-Force Classic Vol. 1',
    '2014-1-22',
    [
      'CableVol121',
      'XForceVol144'
    ]
  ),
  new Collection(
    'X-Man: The Man Who Fell to Earth',
    '2012-6-20',
    [
      'XManVol16'
    ]
  ),
  new Collection(
    'Cable & X-Force Classic Vol. 1',
    '2014-1-22',
    [
      'CableVol122'
    ]
  ),
  new Collection(
    'Wolverine Epic Collection: The Dying Game',
    '2015-12-2',
    [
      'WolverineAnnualVol11'
    ]
  ),
  new Collection(
    'Cable & X-Force Classic Vol. 1',
    '2014-1-22',
    [
      'XForceVol145',
      'XForceVol146'
    ]
  ),
  new Collection(
    'X-Men: Road to Onslaught Vol. 1',
    '2014-1-22',
    [
      'UncannyXMenVol1323',
      'UncannyXMenVol1324'
    ]
  ),
  new Collection(
    'Wolverine Epic Collection: The Dying Game',
    '2015-12-2',
    [
      'WolverineVol292'
    ]
  ),
  new Collection(
    'Generation X Classic Vol. 2',
    '2014-1-22',
    [
      'GenerationXVol15',
      'GenerationXVol16'
    ]
  ),
  new Collection(
    'Cable & X-Force Classic Vol. 1',
    '2014-1-22',
    [
      'XForceVol147'
    ]
  ),
  new Collection(
    'Wolverine Epic Collection: The Dying Game',
    '2015-12-2',
    [
      'WolverineKnightofTerraVol11'
    ]
  ),
  new Collection(
    'X-Man: The Man Who Fell to Earth',
    '2012-6-20',
    [
      'XManVol17'
    ]
  ),
  new Collection(
    'X-Men: Road to Onslaught Vol. 1',
    '2014-1-22',
    [
      'XMenAnnualVol31'
    ]
  ),
  new Collection(
    'Wolverine Epic Collection: The Dying Game',
    '2015-12-2',
    [
      'WolverineVol293'
    ]
  ),
  new Collection(
    'X-Men: Road to Onslaught Vol. 1',
    '2014-1-22',
    [
      'UncannyXMenVol1325',
      'XMenVol245',
      'UncannyXMenVol1326',
      'XMenUnlimitedVol18'
    ]
  ),
  new Collection(
    'Wolverine Epic Collection: The Dying Game',
    '2015-12-2',
    [
      'WolverineVol294'
    ]
  ),
  new Collection(
    'X-Men: The Adventures of Cyclops & Phoenix (Partial)',
    '2014-9-17',
    [
      'XMenBooksofAskaniVol11',
      'AskanisonVol11',
      'AskanisonVol12',
      'AskanisonVol13',
      'AskanisonVol14'
    ]
  ),
  new Collection(
    'Cable & X-Force Classic Vol. 1',
    '2014-1-22',
    [
      'CableVol123',
      'CableVol124',
      'CableVol125'
    ]
  ),
  new Collection(
    'X-Man: The Man Who Fell to Earth',
    '2012-6-20',
    [
      'XManVol18',
      'XManVol19',
      'XManVol110'
    ]
  ),
  new Collection(
    'Wolverine & Gambit: Victims',
    '2002-6-1',
    [
      'WolverineGambitVictimsVol11',
      'WolverineGambitVictimsVol12',
      'WolverineGambitVictimsVol13',
      'WolverineGambitVictimsVol14',
    ]
  ),
  new Collection(
    'Generation X Classic Vol. 2',
    '2014-1-22',
    [
      'GenerationXVol17',
      'GenerationXVol18',
      'GenerationXVol19'
    ]
  ),
  new Collection(
    'Cable & X-Force Classic Vol. 1',
    '2014-1-22',
    [
      'XForceVol148'
    ]
  ),
  new Collection(
    'X-Men: Road to Onslaught Vol. 2',
    '2014-11-20',
    [
      'XMenClanDestineVol11',
      'XMenClanDestineVol12',
      'XMenAnnualVol119'
    ]
  ),
  new Collection(
    'Wolverine Epic Collection: The Dying Game',
    '2015-12-2',
    [
      'WolverineVol295'
    ]
  ),
  new Collection(
    'Generation X Classic Vol. 2',
    '2014-1-22',
    [
      'GenerationXAnnualVol11',
      'GenerationXVol110',
      'GenerationXVol111'
    ]
  ),
  new Collection(
    'X-Men: Road to Onslaught Vol. 2',
    '2014-11-20',
    [
      'XMenVol246',
      'XMenVol247',
      'UncannyXMenVol1327'
    ]
  ),
  new Collection(
    'X-Man: The Man Who Fell to Earth',
    '2012-6-20',
    [
      'XManVol111'
    ]
  ),
  new Collection(
    'Wolverine Epic Collection: The Dying Game',
    '2015-12-2',
    [
      'WolverineVol296'
    ]
  ),
  new Collection(
    'X-Men: Road to Onslaught Vol. 2',
    '2014-11-20',
    [
      'XMenUnlimitedVol19'
    ]
  ),
  new Collection(
    'Cable & X-Force Classic Vol. 1',
    '2014-1-22',
    [
      'CableVol126',
      'CableVol127',
      'CableVol128'
    ]
  ),
  new Collection(
    'Cable & X-Force: Onslaught Rising (Partial)',
    '2018-2-21',
    [
      'XForceCableAnnualVol11'
    ]
  ),
  new Collection(
    'X-Man: The Man Who Fell to Earth',
    '2012-6-20',
    [
      'XManVol112'
    ]
  ),
  new Collection(
    'X-Men: Road to Onslaught Vol. 2',
    '2014-11-20',
    [
      'UncannyXMenVol1328',
      'SabretoothSpecialVol11',
      'XMenVol248',
      'XMenVol249'
    ]
  ),
  new Collection(
    'X-Men: Road to Onslaught Vol. 3',
    '2014-12-24',
    [
      'UncannyXMenVol1329',
      'UncannyXMenVol1330'
    ]
  ),
  new Collection(
    'Cable & X-Force: Onslaught Rising (Partial)',
    '2018-2-21',
    [
      'XForceVol149',
      'XForceVol150',
      'XForceVol151'
    ]
  ),
  new Collection(
    'X-Man: The Man Who Fell to Earth',
    '2012-6-20',
    [
      'CableVol129',
      'XManVol113'
    ]
  ),
  new Collection(
    'X-Men: Road to Onslaught Vol. 3',
    '2014-12-24',
    [
      'ArchangelVol11',
      'XMenvsBroodVol11',
      'XMenvsBroodVol12',
      'XMenUnlimitedVol110',
      'XMenVol250',
      'UncannyXMenVol1331'
    ]
  ),
  new Collection(
    'The Further Adventures of Cyclops and Phoenix',
    '1997-10-15',
    [
      'FurtherAdventuresofCyclopsPhoenixVol11',
      'FurtherAdventuresofCyclopsPhoenixVol12',
      'FurtherAdventuresofCyclopsPhoenixVol13',
      'FurtherAdventuresofCyclopsPhoenixVol14',
    ]
  ),
  new Collection(
    'Cable & X-Force: Onslaught Rising (Partial)',
    '2018-2-21',
    [
      'XForceVol152',
      'XForceVol153'
    ]
  ),
  new Collection(
    'X-Man: The Man Who Fell to Earth',
    '2012-6-20',
    [
      'ExcaliburVol195',
      'CableVol130',
      'XManVol114',
      'CableVol131'
    ]
  ),
  new Collection(
    'Cable & X-Force: Onslaught Rising (Partial)',
    '2018-2-21',
    [
      'XForceVol154'
    ]
  ),
  new Collection(
    'Wolverine Epic Collection: The Dying Game',
    '2015-12-2',
    [
      'WolverineVol297',
      'WolverineVol298',
      'WolverineVol299',
      'WolverineVol2100'
    ]
  ),
  new Collection(
    'X-Men: Road to Onslaught Vol. 3',
    '2014-12-24',
    [
      'UncannyXMenVol1332',
      'WolverineVol2101',
      'XMenVol251',
      'XMenVol252',
      'XavierInstituteAlumniYearbookVol11'
    ]
  ),
  new Collection(
    'X-Men: Onslaught Aftermath',
    '2019-4-2',
    [
      'UncannyXMenAnnualVol11',
    ]
  ),
  new Collection(
    'X-Men/Avengers: Onslaught Omnibus',
    '2015-8-19',
    [
      'CableVol132',
      'UncannyXMenVol1333',
      'XForceVol155'
    ]
  ),
  new Collection(
    'Cable & X-Force: Onslaught Rising (Partial)',
    '2018-2-21',
    [
      'XForceVol156'
    ]
  ),
  new Collection(
    'X-Men/Avengers: Onslaught Omnibus',
    '2015-8-19',
    [
      'XManVol115',
      'XManVol116',
      'XManVol117',
      'XMenVol253',
      'XMenUnlimitedVol111',
      'CableVol133',
      'UncannyXMenVol1334',
      'XMenVol254',
      'OnslaughtXMenVol11',
      'UncannyXMenVol1335',
      'AvengersVol1401',
    ]
  ),
  new Collection(
    'X-Men: The Complete Onslaught Epic Book 2 (Partial)',
    '2008-5-21',
    [
      'ExcaliburVol1100'
    ]
  ),
  new Collection(
    'X-Men/Avengers: Onslaught Omnibus',
    '2015-8-19',
    [
      'FantasticFourVol1415',
      'CableVol134',
      'IncredibleHulkVol1444',
      'WolverineVol2104',
      'XFactorVol1125',
      'XFactorVol1126',
      'TheAmazingSpiderManVol1415',
      'GreenGoblinVol112',
      'SpiderManVol172',
      'XManVol118',
      'XForceVol157',
      'XMenVol255',
      'UncannyXMenVol1336',
      'CableVol135',
      'XForceVol158',
      'XManVol119',
      'IncredibleHulkVol1445',
      'IronManVol1332',
      'AvengersVol1402',
      'PunisherVol311',
      'ThorVol1502',
      'WolverineVol2105',
      'FantasticFourVol1416',
      'XMenVol256'
    ]
  ),
  new Collection(
    'X-Men: Onslaught Aftermath',
    '2019-4-2',
    [
      'XMenUnlimitedVol112',
    ]
  ),
  new Collection(
    'X-Men: The Complete Onslaught Epic Book 4 (Partial)',
    '2008-12-24',
    [
      'XMenRoadtoOnslaughtVol11'
    ]
  ),
  new Collection(
    'X-Men/Avengers: Onslaught Omnibus',
    '2015-8-19',
    [
      'OnslaughtMarvelUniverseVol11',
      'CableVol136',
      'UncannyXMenVol1337',
      'XMenVol257',
      'XMenAnnualVol25',
      'OnslaughtEpilogueVol11'
    ]
  ),
  new Collection(
    'X-Men: Onslaught Aftermath',
    '2019-4-2',
    [
      'UncannyXMenVol1338',
      'UncannyXMenAnnualVol12',
      'XMenVol258',
      'UncannyXMenVol1339',
      'XMenVol259',
      'XMenUnlimitedVol113',
      'UncannyXMenVol1340',
      'XFactorVol1130',
    ]
  ),
  new Collection(
    'Deadpool Classic Vol. 4',
    '2011-1-19',
    [
      'DeadpoolVol20'
    ]
  ),
  new Collection(
    'Deadpool Classic Vol. 1 (Partial)',
    '2008-4-23',
    [
      'DeadpoolVol21'
    ]
  ),
  new Collection(
    'X-Men: Onslaught Aftermath',
    '2019-4-2',
    [
      'XMenVol260',
      'XMenVol261',
      'XMenAnnualVol33',
      'XMenUnlimitedVol114',
    ]
  ),
  new Collection(
    'X-Men: Age of Apocalypse: Dawn',
    '2016-2-10',
    [
      'XManAnnualVol11'
    ]
  ),
  new Collection(
    'X-Men: Domino',
    '2018-4-25',
    [
      'DominoVol11',
      'DominoVol12',
      'DominoVol13'
    ]
  ),
  new Collection(
    'X-Men: The Trial of Gambit (Partial)',
    '2016-7-20',
    [
      'UncannyXMenVol1341',
      'UncannyXMenVol1342'
    ]
  ),
  new Collection(
    'Deadpool Classic Vol. 2',
    '2009-4-1',
    [
      'DeadpoolVol22',
      'DeadpoolVol23'
    ]
  ),
  new Collection(
    'X-Men: The Trial of Gambit (Partial)',
    '2016-7-20',
    [
      'UncannyXMenVol1343',
      'UncannyXMenVol1344'
    ]
  ),
  new Collection(
    'Deadpool Classic Vol. 2',
    '2009-4-1',
    [
      'DeadpoolVol24',
      'DeadpoolVol25'
    ]
  ),
  new Collection(
    'X-Men: Operation: Zero Tolerance',
    '2008-8-15',
    [
      'GenerationXVol126',
      'GenerationXVol127'
    ]
  ),
  new Collection(
    'Deadpool Classic Vol. 2',
    '2009-4-1',
    [
      'DeadpoolVol26'
    ]
  ),
  new Collection(
    'X-Men: The Trial of Gambit (Partial)',
    '2016-7-20',
    [
      'UncannyXMenVol1345',
      'XMenVol262',
      'XMenVol263'
    ]
  ),
  new Collection(
    'X-Men: Operation: Zero Tolerance',
    '2008-8-15',
    [
      'XForceVol167',
      'XMenVol264',
      'GenerationXVol128',
      'XMenVol265'
    ]
  ),
  new Collection(
    'Cable: The Hellfire Hunt',
    '2017-11-15',
    [
      'CableVol1-1'
    ]
  ),
  new Collection(
    'X-Men: The Trial of Gambit (Partial)',
    '2016-7-20',
    [
      'UncannyXMenVol1-1',
      'XMenVol2-1'
    ]
  ),
  new Collection(
    'Deadpool Classic Vol. 2',
    '2009-4-1',
    [
      'DeadpoolVol2-1',
      'DeadpoolVol27',
      'DaredevilDeadpoolAnnualVol11',
      'DeadpoolVol28'
    ]
  ),
  new Collection(
    'X-Men: Operation: Zero Tolerance',
    '2008-8-15',
    [
      'UncannyXMenVol1346',
      'GenerationXVol129',
      'XMenVol266',
      'WolverineVol2115',
      'XForceVol168',
      'CableVol145',
      'CableVol146',
      'CableVol147',
      'XForceVol169',
      'WolverineVol2116',
      'GenerationXVol130',
      'GenerationXVol131'
    ]
  ),
  new Collection(
    'X-Men: The Trial of Gambit (Partial)',
    '2016-7-20',
    [
      'UncannyXMenVol1347'
    ]
  ),
  new Collection(
    'X-Men: Operation: Zero Tolerance',
    '2008-8-15',
    [
      'XMenVol267'
    ]
  ),
  new Collection(
    'X-Men: The Trial of Gambit (Partial)',
    '2016-7-20',
    [
      'UncannyXMenVol1348'
    ]
  ),
  new Collection(
    'X-Men: Operation: Zero Tolerance',
    '2008-8-15',
    [
      'XMenVol268',
      'WolverineVol2117',
      'XManVol130'
    ]
  ),
  new Collection(
    'X-Men: Operation: Zero Tolerance',
    '2008-8-15',
    [
      'XForceVol170'
    ]
  ),
  new Collection(
    'X-Men: The Trial of Gambit (Partial)',
    '2016-7-20',
    [
      'UncannyXMenVol1349'
    ]
  ),
  new Collection(
    'X-Men: Operation: Zero Tolerance',
    '2008-8-15',
    [
      'XMenVol269',
      'WolverineVol2118'
    ]
  ),
  new Collection(
    'Deadpool Classic Vol. 3 (Partial)',
    '2009-11-25',
    [
      'DeadpoolVol29'
    ]
  ),
  new Collection(
    'X-Men: The Trial of Gambit (Partial)',
    '2016-7-20',
    [
      'UncannyXMenVol1350'
    ]
  ),
  new Collection(
    'Deadpool Classic Vol. 3 (Partial)',
    '2009-11-25',
    [
      'DeadpoolVol210'
    ]
  ),
  new Collection(
    'X-Men: Operation: Zero Tolerance',
    '2008-8-15',
    [
      'XMenVol270'
    ]
  ),
  new Collection(
    'Deadpool Classic Vol. 3 (Partial)',
    '2009-11-25',
    [
      'DeadpoolVol211',
      'DeadpoolVol212'
    ]
  ),
  new Collection(
    'Cable: The Hellfire Hunt',
    '2017-11-15',
    [
      'CableVol148',
      'CableVol149',
      'CableVol150',
      'CableVol151',
      'CableVol152',
      'CableVol153',
      'CableVol154'
    ]
  ),
  new Collection(
    'X-Men: Blue Vol. 0: Reunion',
    '2018-3-21',
    [
      'XMenUnlimitedVol117'
    ]
  ),
  new Collection(
    'Wolverine: Not Dead Yet',
    '2013-1-2',
    [
      'WolverineVol2119',
      'WolverineVol2120',
      'WolverineVol2121',
      'WolverineVol2122'
    ]
  ),
  new Collection(
    'Gambit Classic, Volume 2',
    '2013-2-5',
    [
      'GambitVol21',
      'GambitVol22',
      'GambitVol23',
      'GambitVol24'
    ]
  ),
  new Collection(
    'X-Men: Gold Vol. 0: Homecoming (Partial)',
    '2018-3-28',
    [
      'XMenUnlimitedVol118',
      'XMenVol271',
      'XMenVol272'
    ]
  ),
  new Collection(
    'Deadpool Classic Vol. 3 (Partial)',
    '2009-11-25',
    [
      'DeadpoolVol213'
    ]
  ),
  new Collection(
    'X-Men: Blue Vol. 0: Reunion',
    '2018-3-21',
    [
      'UncannyXMenVol1351',
      'UncannyXMenVol1352'
    ]
  ),
  new Collection(
    'Cable: The Hellfire Hunt',
    '2017-11-15',
    [
      'CableMachineManAnnualVol11',
      'MachineManBastionAnnualVol11'
    ]
  ),
  new Collection(
    'X-Men: Blue Vol. 0: Reunion',
    '2018-3-21',
    [
      'UncannyXMenVol1353',
      'UncannyXMenVol1354',
      'UncannyXMenVol1355'
    ]
  ),
  new Collection(
    'X-Men: Gold Vol. 0: Homecoming (Partial)',
    '2018-3-28',
    [
      'XMenVol273'
    ]
  ),
  new Collection(
    'Deadpool Classic Vol. 3 (Partial)',
    '2009-11-25',
    [
      'DeadpoolVol214',
      'DeadpoolVol215'
    ]
  ),
  new Collection(
    'Cable: The Hellfire Hunt',
    '2017-11-15',
    [
      'CableVol155',
      'CableVol156'
    ]
  ),
  new Collection(
    'X-Men: Gold Vol. 0: Homecoming (Partial)',
    '2018-3-28',
    [
      'XMenVol274',
      'XMenVol275',
      'XMenVol276'
    ]
  ),
  new Collection(
    'Deadpool Classic Vol. 3 (Partial)',
    '2009-11-25',
    [
      'DeadpoolVol216',
      'DeadpoolVol217'
    ]
  ),
  new Collection(
    'X-Men: Blue Vol. 0: Reunion',
    '2018-3-21',
    [
      'UncannyXMenVol1356',
      'UncannyXMenVol1357'
    ]
  ),
  new Collection(
    'X-Men: Gold Vol. 0: Homecoming (Partial)',
    '2018-3-28',
    [
      'UncannyXMenVol1358',
      'XMenVol277',
      'XMenVol278'
    ]
  ),
  new Collection(
    'Deadpool Classic Vol. 4',
    '2011-1-19',
    [
      'DeadpoolandDeathAnnualVol11',
      'DeadpoolVol218',
      'DeadpoolVol219'
    ]
  ),
  new Collection(
    'Cable: The Hellfire Hunt',
    '2017-11-15',
    [
      'CableVol157',
      'CableVol158'
    ]
  ),
  new Collection(
    'X-Men: Blue Vol. 0: Reunion',
    '2018-3-21',
    [
      'UncannyXMenVol1359',
      'UncannyXMenFantasticFourAnnualVol11',
      'CerebrosGuidetotheXMenVol11'
    ]
  ),
  new Collection(
    'Deadpool Classic Vol. 4',
    '2011-1-19',
    [
      'DeadpoolVol220',
      'DeadpoolVol221'
    ]
  ),
  new Collection(
    'X-Men: Gold Vol. 0: Homecoming (Partial)',
    '2018-3-28',
    [
      'XMenVol279'
    ]
  ),
  new Collection(
    'Cable: The Nemesis Contract',
    '2018-1-10',
    [
      'CableVol159',
      'CableVol160',
      'CableVol161',
      'CableVol162'
    ]
  ),
  new Collection(
    'Deadpool Classic Vol. 4',
    '2011-1-19',
    [
      'DeadpoolVol222',
      'DeadpoolVol223'
    ]
  ),
  new Collection(
    'X-Men: The Hunt for Professor X',
    '2015-6-17',
    [
      'UncannyXMenVol1360',
      'XMenVol280',
      'UncannyXMenVol1361',
      'XMenVol281',
      'UncannyXMenVol1362',
      'XMenVol282',
      'UncannyXMenVol1363',
      'XMenVol283',
      'UncannyXMenVol1364',
      'XMenVol284',
      'XMenUnlimitedVol122'
    ]
  ),
  new Collection(
    'X-Men: Gold Vol. 0: Homecoming (Partial)',
    '2018-3-28',
    [
      'XMenDrDoomAnnualVol11'
    ]
  ),
  new Collection(
    'Deadpool Classic Vol. 4',
    '2011-1-19',
    [
      'DeadpoolVol224',
      'DeadpoolVol225'
    ]
  ),
  new Collection(
    'Wolverine Epic Collection: Shadow of Apocalypse (Partial)',
    '2017-2-1',
    [
      'WolverineVol2133',
      'WolverineVol2134',
      'WolverineVol2135',
      'WolverineVol2136',
      'WolverineVol2137',
      'WolverineVol2138',
    ]
  ),
  new Collection(
    'Cable: The Nemesis Contract',
    '2018-1-10',
    [
      'XManVol145',
      'XManVol146',
      'CableVol163',
      'XManVol147'
    ]
  ),
  new Collection(
    'Deadpool Classic Vol. 5',
    '2011-6-1',
    [
      'BabysFirstDeadpoolBookVol11',
      'DeadpoolTeamUpVol11'
    ]
  ),
  new Collection(
    'Wolverine Epic Collection: Blood Debt',
    '2018-3-28',
    [
      'WolverineAnnualVol21',
    ]
  ),
  new Collection(
    'Wolverine Epic Collection: Shadow of Apocalypse (Partial)',
    '2017-2-1',
    [
      'WolverineVol2139'
    ]
  ),
  new Collection(
    'X-Men: The Hunt for Professor X',
    '2015-6-17',
    [
      'UncannyXMenVol1365',
      'XMenVol20.5',
    ]
  ),
  new Collection(
    'Deadpool Classic Vol. 5',
    '2011-6-1',
    [
      'DeadpoolVol226',
      'DeadpoolVol227'
    ]
  ),
  new Collection(
    'Cable: The Nemesis Contract',
    '2018-1-10',
    [
      'CableVol164',
      'CableVol165'
    ]
  ),
  new Collection(
    'X-Men: The Magneto War (Partial)',
    '2018-10-23',
    [
      'XMenVol285',
      'XMENTHEMAGNETOWAR1Vol11',
      'UncannyXMenVol1366',
      'XMenVol286',
      'UncannyXMenVol1367',
      'XMenVol287'
    ]
  ),
  new Collection(
    'Deadpool Classic Vol. 5',
    '2011-6-1',
    [
      'DeadpoolVol228',
      'DeadpoolVol229'
    ]
  ),
  new Collection(
    'Cable: The Nemesis Contract',
    '2018-1-10',
    [
      'CableVol166',
      'CableVol167',
      'CableVol168',
      'CableVol169',
      'CableVol170'
    ]
  ),
  new Collection(
    'X-Men: The Magneto War (Partial)',
    '2018-10-23',
    [
      'XMenUnlimitedVol123',
      'UncannyXMenVol1368',
      'XMenVol288',
      'UncannyXMenVol1369',
      'MagnetoRexVol11',
      'MagnetoRexVol12',
      'MagnetoRexVol13'
    ]
  ),
  new Collection(
    'X-Men: Age of Apocalypse: The Complete Epic Book 4 (Partial)',
    '2006-11-1',
    [
      'XManVol153',
      'XManVol154'
    ]
  ),
  new Collection(
    'X-Men: The Magneto War (Partial)',
    '2018-10-23',
    [
      'XMenVol289',
      'UncannyXMenVol1370',
      'XMenVol290',
    ]
  ),
  new Collection(
    'X-Men Vs. Apocalypse: The Twelve Omnibus',
    '2020-2-18',
    [
      'UncannyXMenVol1371',
      'XMenVol291',
      'XMenAnnualVol41'
    ]
  ),
  new Collection(
    'Deadpool Classic Vol. 5',
    '2011-6-1',
    [
      'DeadpoolVol230',
      'DeadpoolVol231'
    ]
  ),
  new Collection(
    'Wolverine Epic Collection: Shadow of Apocalypse (Partial)',
    '2017-2-1',
    [
      'WolverineVol2140'
    ]
  ),
  new Collection(
    'X-Men Vs. Apocalypse: The Twelve Omnibus',
    '2020-2-18',
    [
      'XMenUnlimitedVol124'
    ]
  ),
  new Collection(
    'Wolverine Epic Collection: Shadow of Apocalypse (Partial)',
    '2017-2-1',
    [
      'WolverineVol2141',
      'WolverineVol2142',
      'WolverineVol2143',
      'IncredibleHulkVol28',
      'WolverineVol2144'
    ]
  ),
  new Collection(
    'Cable: The Nemesis Contract',
    '2018-1-10',
    [
      'CableAnnualVol11'
    ]
  ),
  new Collection(
    'Deadpool Classic Vol. 5',
    '2011-6-1',
    [
      'DeadpoolVol232',
      'DeadpoolVol233'
    ]
  ),
  new Collection(
    'X-Men Vs. Apocalypse: The Twelve Omnibus',
    '2020-2-18',
    [
      'CableVol171',
      'UncannyXMenVol1372',
      'XMenVol292',
      'GambitVol38',
      'GambitVol39',
      'AstonishingXMenVol21',
      'AstonishingXMenVol22',
      'AstonishingXMenVol23',
      'UncannyXMenVol1373',
      'UncannyXMenVol1374',
      'XMenVol293',
      'XMenVol294',
      'UncannyXMenVol1375',
      'XMenVol295'
    ]
  ),
  new Collection(
    'Deadpool Classic Vol. 6',
    '2012-1-18',
    [
      'DeadpoolVol234',
      'DeadpoolVol235',
    ]
  ),
  new Collection(
    'X-Men Vs. Apocalypse: The Twelve Omnibus',
    '2020-2-18',
    [
      'WolverineVol2145',
      'CableVol172',
      'CableVol173',
      'CableVol174'
    ]
  ),
  new Collection(
    'Cable: The Hellfire Hunt',
    '2017-11-15',
    [
      'WolverineCableGutsandGloryVol11'
    ]
  ),
  new Collection(
    'X-Men: The Adventures of Cyclops & Phoenix (Partial)',
    '2014-9-17',
    [
      'XMenPhoenixVol11',
      'XMenPhoenixVol12',
      'XMenPhoenixVol13'
    ]
  ),
  new Collection(
    'Deadpool Classic Vol. 6',
    '2012-1-18',
    [
      'DeadpoolVol236',
      'DeadpoolVol237',
    ]
  ),
  new Collection(
    'X-Men Vs. Apocalypse: The Twelve Omnibus',
    '2020-2-18',
    [
      'XMenUnlimitedVol125',
      'UncannyXMenVol1376',
      'CableVol175',
      'XMenVol296',
      'WolverineVol2146',
      'WolverineVol2147',
      'UncannyXMenVol1377',
      'CableVol176',
      'XMenVol297',
    ]
  ),
  new Collection(
    'Deadpool Classic Vol. 6',
    '2012-1-18',
    [
      'DeadpoolVol238',
      'DeadpoolVol239',
    ]
  ),
  new Collection(
    'X-Men: Eve of Destruction',
    '2019-7-9',
    [
      'UncannyXMenAnnualVol21',
    ]
  ),
  new Collection(
    'X-Men Vs. Apocalypse: The Twelve Omnibus',
    '2020-2-18',
    [
      'UncannyXMenVol1378',
      'CableVol177',
      'X51Vol18',
      'XMenUnlimitedVol126',
      'WolverineVol2148',
      'XMenVol298',
      'UncannyXMenVol1379',
      'XForceVol1101',
      'CableVol178',
      'WolverineVol2149',
      'XMenVol299',
      'UncannyXMenVol1380',
    ]
  ),
  new Collection(
    'X-Men: Eve of Destruction',
    '2019-7-9',
    [
      'MagnetoDarkSeductionVol11',
      'MagnetoDarkSeductionVol12',
      'MagnetoDarkSeductionVol13',
      'MagnetoDarkSeductionVol14',
    ]
  ),
  new Collection(
    'Deadpool Classic Vol. 6',
    '2012-1-18',
    [
      'DeadpoolVol240',
      'DeadpoolVol241',
    ]
  ),
  new Collection(
    'Counter-X Vol. 2',
    '2008-9-3',
    [
      'GenerationXVol163',
      'GenerationXVol164',
      'GenerationXVol165',
      'GenerationXVol166',
      'GenerationXVol167',
      'GenerationXVol168',
      'GenerationXVol169',
      'GenerationXVol170',
    ]
  ),
  new Collection(
    'Cable: Revolution',
    '2018-4-28',
    [
      'CableVol179',
      'CableVol180',
      'CableVol181',
      'CableVol182',
      'CableVol183',
      'CableVol184',
    ]
  ),
  new Collection(
    'Counter-X Vol. 1',
    '2008-7-2',
    [
      'XForceVol1102',
      'XForceVol1103',
      'XForceVol1104',
      'XForceVol1105',
      'XForceVol1106',
      'XForceVol1107',
      'XForceVol1108',
      'XForceVol1109',
    ]
  ),
  new Collection(
    'X-Men: Revolution',
    '2018-8-14',
    [
      'XMenUnlimitedVol127',
      'XMenBlackSunVol11',
      'XMenBlackSunVol12',
      'XMenBlackSunVol13',
      'XMenBlackSunVol14',
      'XMenBlackSunVol15',
    ]
  ),
  new Collection(
    'X-Men: Revolution',
    '2018-8-14',
    [
      'XMenVol2100',
      'XMenVol2101',
      'UncannyXMenVol1381',
      'UncannyXMenVol1382',
    ]
  ),
  new Collection(
    'Deadpool Classic Vol. 6',
    '2012-1-18',
    [
      'DeadpoolVol242',
      'DeadpoolVol243',
    ]
  ),
  new Collection(
    'Wolverine Epic Collection: Blood Debt',
    '2018-3-28',
    [
      'WolverineVol2150',
      'WolverineVol2151',
      'WolverineVol2152',
      'WolverineVol2153',
    ]
  ),
  new Collection(
    'X-Men: Revolution',
    '2018-8-14',
    [
      'XMenVol2102',
      'UncannyXMenVol1383',
      'XMenAnnualVol51',
      'XMenVol2103',
      'XMenUnlimitedVol128',
      'UncannyXMenVol1384',
      'XMenVol2104',
      'UncannyXMenVol1385',
    ]
  ),
  new Collection(
    'X-Men: Eve of Destruction',
    '2019-7-9',
    [
      'XMenForeverVol11',
      'XMenForeverVol12',
      'XMenForeverVol13',
      'XMenForeverVol14',
      'XMenForeverVol15',
      'XMenForeverVol16',
      'XMenDeclassifiedVol11',
    ]
  ),
  new Collection(
    'Deadpool Classic Vol. 6',
    '2012-1-18',
    [
      'DeadpoolVol244',
      'BlackPantherVol323',
      'DeadpoolVol245',
    ]
  ),
  new Collection(
    'X-Men: Revolution',
    '2018-8-14',
    [
      'XMenVol2105',
      'XMenVol2106',
      'UncannyXMenVol1386',
      'UncannyXMenVol1387',
      'BishopTheLastXManVol115',
      'XMenVol2107',
      'XMenUnlimitedVol129',
    ]
  ),
  new Collection(
    'Cable: Revolution',
    '2018-4-28',
    [
      'CableVol185',
      'CableVol186',
    ]
  ),
  new Collection(
    'Wolverine Epic Collection: Blood Debt',
    '2018-3-28',
    [
      'WolverineVol2154',
      'WolverineVol2155',
      'WolverineVol2156',
      'WolverineVol2157',
    ]
  ),
  new Collection(
    'Counter-X: X-Force - Rage War',
    '2012-8',
    [
      'XForceVol1110',
      'XForceVol1111',
      'XForceVol1112',
      'XForceVol1113',
    ]
  ),
  new Collection(
    'X-Men: Revolution',
    '2018-8-14',
    [
      'UncannyXMenVol1388',
      'CableVol187',
      'BishopTheLastXManVol116',
      'XMenVol2108',
    ]
  ),
  new Collection(
    'Counter-X: X-Force - Rage War',
    '2012-8',
    [
      'XForceVol1114',
      'XForceVol1115',
    ]
  ),
  new Collection(
    'Counter-X: Generation X - Four Days',
    '2013-2-13',
    [
      'GenerationXVol171',
      'GenerationXVol172',
      'GenerationXVol173',
      'GenerationXVol174',
    ]
  ),
  new Collection(
    'Wolverine Epic Collection: Blood Debt',
    '2018-3-28',
    [
      'WolverineVol2158',
    ]
  ),
  new Collection(
    'X-Men: Revolution',
    '2018-8-14',
    [
      'UncannyXMenVol1389',
    ]
  ),
  new Collection(
    'X-Men: Eve of Destruction',
    '2019-7-9',
    [
      'XMenUnlimitedVol133',
    ]
  ),
  new Collection(
    'Cable: Revolution',
    '2018-4-28',
    [
      'CableVol188',
    ]
  ),
  new Collection(
    'Wolverine: The Best There Is',
    '2002-9',
    [
      'WolverineVol2159',
      'WolverineVol2160',
      'WolverineVol2161',
    ]
  ),
  new Collection(
    'X-Men: Revolution',
    '2018-8-14',
    [
      'XMenVol2109',
    ]
  ),
  new Collection(
    'X-Men: Eve of Destruction',
    '2019-7-9',
    [
      'XMenSearchforCyclopsVol11',
      'XMenSearchforCyclopsVol12',
      'XMenSearchforCyclopsVol13',
      'XMenSearchforCyclopsVol14',
    ]
  ),
  new Collection(
    'Cable: Revolution',
    '2018-4-28',
    [
      'CableVol189',
      'CableVol190',
      'CableVol191',
      'CableVol192',
      'CableVol193',
      'CableVol194',
      'CableVol195',
    ]
  ),
  new Collection(
    'X-Men: Eve of Destruction',
    '2019-7-9',
    [
      'UncannyXMenVol1390',
      'XMenVol2110',
      'XMenUnlimitedVol130',
      'XMenUnlimitedVol131',
    ]
  ),
  new Collection(
    'Wolverine/Deadpool: Weapon X',
    '1999-11-30',
    [
      'WolverineVol2162',
      'WolverineVol2163',
      'WolverineVol2164',
      'WolverineVol2165',
      'WolverineVol2166',
      'DeadpoolVol257',
      'DeadpoolVol258',
      'DeadpoolVol259',
      'DeadpoolVol260',
    ]
  ),
  new Collection(
    'Wolverine: The Best There Is',
    '2002-9',
    [
      'WolverineVol2167',
      'WolverineVol2168',
      'WolverineVol2169',
    ]
  ),
  new Collection(
    'X-Men: Eve of Destruction',
    '2019-7-9',
    [
      'UncannyXMenVol1391',
    ]
  ),
  new Collection(
    'Cable: Revolution',
    '2018-4-28',
    [
      'CableVol196',
    ]
  ),
  new Collection(
    'X-Men: Eve of Destruction',
    '2019-7-9',
    [
      'XMenVol2111',
      'UncannyXMenVol1392',
      'XMenVol2112',
      'UncannyXMenVol1393',
      'XMenVol2113',
      'XMenUnlimitedVol132',
    ]
  ),
  new Collection(
    'Cable: Soldier X',
    '2018-11-6',
    [
      'CableVol197',
      'CableVol198',
      'CableVol199',
      'CableVol1100',
      'CableVol1101',
      'CableVol1102',
      'CableVol1103',
      'CableVol1104',
    ]
  ),
  new Collection(
    'X-Treme X-Men, Volume 1: Destiny',
    '2003-5-1',
    [
      'XTremeXMenVol11',
      'XTremeXMenVol12',
      'XTremeXMenVol13',
      'XTremeXMenVol14',
    ]
  ),
  new Collection(
    'Wolverine Epic Collection: Blood Debt',
    '2018-3-28',
    [
      'OriginVol11',
      'OriginVol12',
      'OriginVol13',
      'OriginVol14',
      'OriginVol15',
      'OriginVol16',
    ]
  ),
  new Collection(
    'Counter-X: Generation X - Four Days',
    '2013-2-13',
    [
      'GenerationXVol175',
    ]
  ),
  new Collection(
    'X-Men: X-Corps',
    '2013-11-12',
    [
      'UncannyXMenVol1394',
    ]
  ),
  new Collection(
    'New X-Men Omnibus',
    '2016-9-20',
    [
      'NewXMenVol1114',
      'NewXMenVol1115',
      'NewXMenVol1116',
    ]
  ),
  new Collection(
    'X-Men: X-Corps',
    '2013-11-12',
    [
      'UncannyXMenVol1395',
      'UncannyXMenVol1396',
      'UncannyXMenVol1397',
      'UncannyXMenVol1398',
    ]
  ),
  new Collection(
    'X-Men Icons: Cyclops',
    '2004-4-1',
    [
      'IconsCyclopsVol11',
      'IconsCyclopsVol12',
      'IconsCyclopsVol13',
      'IconsCyclopsVol14',
    ]
  ),
  new Collection(
    'X-Treme X-Men: Savage Land',
    '2002-4-1',
    [
      'XTremeXMenTheSavageLandVol11',
      'XTremeXMenTheSavageLandVol12',
      'XTremeXMenTheSavageLandVol13',
      'XTremeXMenTheSavageLandVol14',
    ]
  ),
  new Collection(
    'Cable: Soldier X',
    '2018-11-6',
    [
      'CableVol1105',
      'CableVol1106',
      'CableVol1107',
    ]
  ),
  new Collection(
    'X-Treme X-Men, Volume 1: Destiny',
    '2003-5-1',
    [
      'XTremeXMenVol15',
      'XTremeXMenVol16',
      'XTremeXMenVol17',
      'XTremeXMenVol18',
    ]
  ),
  new Collection(
    'New X-Men Omnibus',
    '2016-9-20',
    [
      'NewXMenAnnualVol11',
      'NewXMenVol1117',
      'NewXMenVol1118',
      'NewXMenVol1119',
      'NewXMenVol1120',
      'NewXMenVol1121',
    ]
  ),
  new Collection(
    'X-Men: X-Corps',
    '2013-11-12',
    [
      'UncannyXMenVol1399',
      'UncannyXMenVol1400',
      'UncannyXMenAnnualVol31',
    ]
  ),
  new Collection(
    'New X-Men Omnibus',
    '2016-9-20',
    [
      'NewXMenVol1122',
    ]
  ),
  new Collection(
    'X-Men: X-Corps',
    '2013-11-12',
    [
      'UncannyXMenVol1401',
    ]
  ),
  new Collection(
    'X-Treme X-Men, Volume 1: Destiny',
    '2003-5-1',
    [
      'XTremeXMenVol19',
    ]
  ),
  new Collection(
    'New X-Men Omnibus',
    '2016-9-20',
    [
      'NewXMenVol1123',
      'NewXMenVol1124',
      'NewXMenVol1125',
      'NewXMenVol1126',
    ]
  ),
  new Collection(
    'X-Men: X-Corps',
    '2013-11-12',
    [
      'UncannyXMenVol1402',
      'UncannyXMenVol1403',
      'UncannyXMenVol1404',
      'UncannyXMenVol1405',
      'UncannyXMenVol1406',
      'UncannyXMenVol1407',
    ]
  ),
  new Collection(
    'X-Factor: The Mountaintop',
    '2003-6-4',
    [
      'XFactorVol21',
      'XFactorVol22',
      'XFactorVol23',
      'XFactorVol24',
    ]
  ),
  new Collection(
    'X-Treme X-Men Volume 8: Prisoner of Fire',
    '2004-7-28',
    [
      'XTremeXMenAnnualVol11',
    ]
  ),
  new Collection(
    'X-Treme X-Men Volume 2: Invasion',
    '2003-1-6',
    [
      'XTremeXMenVol110',
      'XTremeXMenVol111',
      'XTremeXMenVol112',
      'XTremeXMenVol113',
      'XTremeXMenVol114',
      'XTremeXMenVol115',
      'XTremeXMenVol116',
      'XTremeXMenVol117',
      'XTremeXMenVol118',
    ]
  ),
  new Collection(
    'New X-Men Omnibus',
    '2016-9-20',
    [
      'NewXMenVol1127',
    ]
  ),
  new Collection(
    'X-Men: X-Corps',
    '2013-11-12',
    [
      'UncannyXMenVol1408',
      'UncannyXMenVol1409',
    ]
  ),
  new Collection(
    'X-Men Legends Vol. IV: Hated & Feared (Partial)',
    '2003-12-3',
    [
      'XMenUnlimitedVol135',
      'XMenUnlimitedVol136',
    ]
  ),
  new Collection(
    'X-Treme X-Men Volume 3: Schism',
    '2003-5-28',
    [
      'XTremeXMenVol119',
    ]
  ),
  new Collection(
    'New X-Men Omnibus',
    '2016-9-20',
    [
      'NewXMenVol1128',
      'NewXMenVol1129',
      'NewXMenVol1130',
      'NewXMenVol1131',
      'NewXMenVol1132',
      'NewXMenVol1133',
    ]
  ),
  new Collection(
    'Uncanny X-Men Vol. 1: Hope',
    '2003-1-20',
    [
      'UncannyXMenVol1410',
      'UncannyXMenVol1411',
      'UncannyXMenVol1412',
      'UncannyXMenVol1413',
    ]
  ),
  new Collection(
    'X-Treme X-Men Volume 3: Schism',
    '2003-5-28',
    [
      'XTremeXMenXPoseVol11',
      'XTremeXMenXPoseVol12',
    ]
  ),
  new Collection(
    'Wolverine Legends Vol. 3: Law of the Jungle',
    '2003-3-19',
    [
      'WolverineVol2181',
      'WolverineVol2182',
      'WolverineVol2183',
      'WolverineVol2184',
      'WolverineVol2185',
    ]
  ),
  new Collection(
    'X-Treme X-Men Volume 4: Mekanix',
    '2003-6-30',
    [
      'XTremeXMenMekanixVol11',
      'XTremeXMenMekanixVol12',
      'XTremeXMenMekanixVol13',
      'XTremeXMenMekanixVol14',
      'XTremeXMenMekanixVol15',
      'XTremeXMenMekanixVol16',
    ]
  ),
  new Collection(
    'Uncanny X-Men Vol. 1: Hope',
    '2003-1-20',
    [
      'UncannyXMenVol1414',
      'UncannyXMenVol1415',
    ]
  ),
  new Collection(
    'X-Men Legends Vol. IV: Hated & Feared (Partial)',
    '2003-12-3',
    [
      'XMenUnlimitedVol140',
      'XMenUnlimitedVol142',
    ]
  ),
  new Collection(
    'Cable: Soldier X',
    '2018-11-6',
    [
      'SoldierXVol11',
      'SoldierXVol12',
      'SoldierXVol13',
      'SoldierXVol14',
      'SoldierXVol15',
      'SoldierXVol16',
    ]
  ),
  new Collection(
    'Uncanny X-Men Vol. 2: Dominant Species',
    '2003-5-21',
    [
      'UncannyXMenVol1416',
    ]
  ),
  new Collection(
    'New X-Men Omnibus',
    '2016-9-20',
    [
      'NewXMenVol1134',
    ]
  ),
  new Collection(
    'Wolverine Legends Vol. 3: Law of the Jungle',
    '2003-3-19',
    [
      'WolverineVol2186',
    ]
  ),
  new Collection(
    'Cable: Soldier X',
    '2018-11-6',
    [
      'SoldierXVol17',
      'SoldierXVol18',
    ]
  ),
  new Collection(
    'Uncanny X-Men Vol. 2: Dominant Species',
    '2003-5-21',
    [
      'UncannyXMenVol1417',
      'UncannyXMenVol1418',
      'UncannyXMenVol1419',
      'UncannyXMenVol1420',
    ]
  ),
  new Collection(
    'Wolverine by Daniel Way: The Complete Collection Vol. 1',
    '2017-1-31',
    [
      'WolverineVol2187',
    ]
  ),
  new Collection(
    'X-Treme X-Men Volume 3: Schism',
    '2003-5-28',
    [
      'XTremeXMenVol120',
      'XTremeXMenVol121',
      'XTremeXMenVol122',
      'XTremeXMenVol123',
    ]
  ),
  new Collection(
    'Cable: Soldier X',
    '2018-11-6',
    [
      'SoldierXVol19',
      'SoldierXVol110',
    ]
  ),
  new Collection(
    'Uncanny X-Men Vol. 3: Holy War',
    '2003-9-15',
    [
      'UncannyXMenVol1421',
      'UncannyXMenVol1422',
      'UncannyXMenVol1423',
      'UncannyXMenVol1424',
    ]
  ),
  new Collection(
    'New X-Men Omnibus',
    '2016-9-20',
    [
      'NewXMenVol1135',
      'NewXMenVol1136',
      'NewXMenVol1137',
      'NewXMenVol1138',
    ]
  ),
  new Collection(
    'Wolverine by Daniel Way: The Complete Collection Vol. 1',
    '2017-1-31',
    [
      'WolverineVol2188',
      'WolverineVol2189',
    ]
  ),
  new Collection(
    'X-Treme X-Men Volume 6: Intifada',
    '2004-3-1',
    [
      'XTremeXMenVol124',
    ]
  ),
  new Collection(
    'Cable: Soldier X',
    '2018-11-6',
    [
      'SoldierXVol111',
      'SoldierXVol112',
    ]
  ),
  new Collection(
    'New X-Men Omnibus',
    '2016-9-20',
    [
      'NewXMenVol1139',
      'NewXMenVol1140',
      'NewXMenVol1141',
    ]
  ),
  new Collection(
    'X-Treme X-Men Volume 5: God Loves, Man Kills',
    '2003-10-27',
    [
      'XTremeXMenVol125',
      'XTremeXMenVol126',
      'XTremeXMenVol127',
      'XTremeXMenVol128',
      'XTremeXMenVol129',
      'XTremeXMenVol130',
    ]
  ),
  new Collection(
    'New Mutants: Back to School - The Complete Collection',
    '2018-1-24',
    [
      'NewMutantsVol21',
      'NewMutantsVol22',
      'NewMutantsVol23',
      'NewMutantsVol24',
      'NewMutantsVol25',
      'NewMutantsVol26',
    ]
  ),
  new Collection(
    'X-Men Legends Vol. IV: Hated & Feared (Partial)',
    '2003-12-3',
    [
      'XMenUnlimitedVol146',
      'XMenUnlimitedVol147',
      'XMenUnlimitedVol148',
    ]
  ),
  new Collection(
    'Mystique by Brian K. Vaughan Ultimate Collection',
    '2011-5-25',
    [
      'MystiqueVol11',
      'MystiqueVol12',
      'MystiqueVol13',
      'MystiqueVol14',
      'MystiqueVol15',
      'MystiqueVol16',
    ]
  ),
  new Collection(
    'Uncanny X-Men Vol. 3: Holy War',
    '2003-9-15',
    [
      'UncannyXMenVol1425',
      'UncannyXMenVol1426',
      'UncannyXMenVol1427',
    ]
  ),
  new Collection(
    'X-Men Legends Vol. IV: Hated & Feared (Partial)',
    '2003-12-3',
    [
      'XMenUnlimitedVol149',
    ]
  ),
  new Collection(
    'Emma Frost Ultimate Collection',
    '2011-5-25',
    [
      'EmmaFrostVol11',
      'EmmaFrostVol12',
      'EmmaFrostVol13',
      'EmmaFrostVol14',
      'EmmaFrostVol15',
      'EmmaFrostVol16',
    ]
  ),
  new Collection(
    'Uncanny X-Men Vol. 4: The Draco',
    '2004-3-1',
    [
      'UncannyXMenVol1428',
      'UncannyXMenVol1429',
      'UncannyXMenVol1430',
      'UncannyXMenVol1431',
      'UncannyXMenVol1432',
      'UncannyXMenVol1433',
      'UncannyXMenVol1434',
    ]
  ),
  new Collection(
    'Wolverine Vol. 1: The Brotherhood',
    '2004-2-1',
    [
      'WolverineVol31',
      'WolverineVol32',
      'WolverineVol33',
      'WolverineVol34',
      'WolverineVol35',
      'WolverineVol36',
    ]
  ),
  new Collection(
    'New Mutants: Back to School - The Complete Collection',
    '2018-1-24',
    [
      'NewMutantsVol27',
      'NewMutantsVol28',
      'NewMutantsVol29',
      'NewMutantsVol210',
      'NewMutantsVol211',
      'NewMutantsVol212',
    ]
  ),
  new Collection(
    'X-Treme X-Men Volume 6: Intifada',
    '2004-3-1',
    [
      'XTremeXMenVol131',
      'XTremeXMenVol132',
      'XTremeXMenVol133',
      'XTremeXMenVol134',
      'XTremeXMenVol135',
    ]
  ),
  new Collection(
    'Uncanny X-Men Vol. 6: Bright New Mourning',
    '2004-6-23',
    [
      'UncannyXMenVol1435',
      'UncannyXMenVol1436',
    ]
  ),
  new Collection(
    'Uncanny X-Men Vol. 5: She Lies with Angels',
    '2004-5-5',
    [
      'UncannyXMenVol1437',
      'UncannyXMenVol1438',
      'UncannyXMenVol1439',
      'UncannyXMenVol1440',
      'UncannyXMenVol1441',
    ]
  ),
  new Collection(
    'Mystique by Brian K. Vaughan Ultimate Collection',
    '2011-5-25',
    [
      'MystiqueVol17',
      'MystiqueVol18',
      'MystiqueVol19',
      'MystiqueVol110',
      'MystiqueVol111',
      'MystiqueVol112',
      'MystiqueVol113',
    ]
  ),
  new Collection(
    'X-Treme X-Men Volume 7: Storm - The Arena',
    '2004-4-1',
    [
      'XTremeXMenVol136',
      'XTremeXMenVol137',
      'XTremeXMenVol138',
      'XTremeXMenVol139',
    ]
  ),
  new Collection(
    'Wolverine Vol. 2: Coyote Crossing',
    '2004-4-21',
    [
      'WolverineVol37',
      'WolverineVol38',
      'WolverineVol39',
      'WolverineVol310',
      'WolverineVol311',
    ]
  ),
  new Collection(
    'Wolverine Vol. 3: Return of the Native',
    '2004-10-13',
    [
      'WolverineVol312',
    ]
  ),
  new Collection(
    'Deadpool & Cable Omnibus',
    '2014-11-11',
    [
      'CableDeadpoolVol11',
      'CableDeadpoolVol12',
      'CableDeadpoolVol13',
      'CableDeadpoolVol14',
      'CableDeadpoolVol15',
      'CableDeadpoolVol16',
    ]
  ),
  new Collection(
    'New X-Men Omnibus',
    '2016-9-20',
    [
      'NewXMenVol1142',
      'NewXMenVol1143',
      'NewXMenVol1144',
      'NewXMenVol1145',
      'NewXMenVol1146',
      'NewXMenVol1147',
      'NewXMenVol1148',
      'NewXMenVol1149',
      'NewXMenVol1150',
    ]
  ),
  new Collection(
    'X-Treme X-Men Volume 8: Prisoner of Fire',
    '2004-7-28',
    [
      'XTremeXMenVol140',
      'XTremeXMenVol141',
      'XTremeXMenVol142',
      'XTremeXMenVol143',
      'XTremeXMenVol144',
      'XTremeXMenVol145',
    ]
  ),
  new Collection(
    'New X-Men Omnibus',
    '2016-9-20',
    [
      'NewXMenVol1151',
      'NewXMenVol1152',
      'NewXMenVol1153',
      'NewXMenVol1154',
    ]
  ),
  new Collection(
    'Uncanny X-Men Vol. 6: Bright New Mourning',
    '2004-6-23',
    [
      'NewXMenVol1155',
      'NewXMenVol1156',
      'UncannyXMenVol1442',
      'UncannyXMenVol1443',
    ]
  ),
  new Collection(
    'New Mutants: Back to School - The Complete Collection',
    '2018-1-24',
    [
      'NewMutantsVol213',
    ]
  ),
  new Collection(
    'X-Treme X-Men Volume 8: Prisoner of Fire',
    '2004-7-28',
    [
      'XTremeXMenVol146',
    ]
  ),
  new Collection(
    'X-Men: Day of the Atom',
    '2005-3-2',
    [
      'XMenVol3157',
      'XMenVol3158',
      'XMenVol3159',
      'XMenVol3160',
    ]
  ),
  new Collection(
    'Uncanny X-Men - The New Age Vol. 1: The End of History',
    '2004-12-15',
    [
      'UncannyXMenVol1444',
      'UncannyXMenVol1445',
      'UncannyXMenVol1446',
      'UncannyXMenVol1447',
      'UncannyXMenVol1448',
      'UncannyXMenVol1449',
    ]
  ),
  new Collection(
    'Astonishing X-Men Omnibus',
    '2009-10-7',
    [
      'AstonishingXMenVol31',
      'AstonishingXMenVol32',
      'AstonishingXMenVol33',
      'AstonishingXMenVol34',
      'AstonishingXMenVol35',
      'AstonishingXMenVol36',
    ]
  ),
  new Collection(
    'New X-Men: Academy X - Complete Collection',
    '2018-12-31',
    [
      'NewXMenVol21',
      'NewXMenVol22',
      'NewXMenVol23',
      'NewXMenVol24',
      'NewXMenVol25',
      'NewXMenVol26',
    ]
  ),
  new Collection(
    'Excalibur Vol. 1: Forging the Sword',
    '2004-10-27',
    [
      'ExcaliburVol31',
      'ExcaliburVol32',
      'ExcaliburVol33',
      'ExcaliburVol34',
    ]
  ),
  new Collection(
    'District X Vol. 1: Mr. M',
    '2005-1-12',
    [
      'DistrictXVol11',
      'DistrictXVol12',
      'DistrictXVol13',
      'DistrictXVol14',
      'DistrictXVol15',
      'DistrictXVol16',
    ]
  ),
  new Collection(
    'Emma Frost Ultimate Collection',
    '2011-5-25',
    [
      'EmmaFrostVol17',
      'EmmaFrostVol18',
      'EmmaFrostVol19',
      'EmmaFrostVol110',
      'EmmaFrostVol111',
      'EmmaFrostVol112',
    ]
  ),
  new Collection(
    'Wolverine Vol. 3: Return of the Native',
    '2004-10-13',
    [
      'WolverineVol313',
      'WolverineVol314',
      'WolverineVol315',
      'WolverineVol316',
      'WolverineVol317',
      'WolverineVol318',
      'WolverineVol319',
    ]
  ),
  new Collection(
    'Mystique by Sean Mckeever Ultimate Collection',
    '2011-6-22',
    [
      'MystiqueVol114',
      'MystiqueVol115',
      'MystiqueVol116',
      'MystiqueVol117',
      'MystiqueVol118',
    ]
  ),
  new Collection(
    'Emma Frost Ultimate Collection',
    '2011-5-25',
    [
      'EmmaFrostVol113',
      'EmmaFrostVol114',
      'EmmaFrostVol115',
      'EmmaFrostVol116',
      'EmmaFrostVol117',
      'EmmaFrostVol118',
    ]
  ),
  new Collection(
    'Rogue: The Complete Collection',
    '2015-9-1',
    [
      'RogueVol31',
      'RogueVol32',
      'RogueVol33',
      'RogueVol34',
      'RogueVol35',
      'RogueVol36',
    ]
  ),
  new Collection(
    'Mystique by Sean Mckeever Ultimate Collection',
    '2011-6-22',
    [
      'MystiqueVol119',
      'MystiqueVol120',
      'MystiqueVol121',
      'MystiqueVol122',
      'MystiqueVol123',
      'MystiqueVol124',
    ]
  ),
  new Collection(
    'X-Factor by Peter David: The Complete Collection, Vol. 1',
    '2014-2-4',
    [
      'MadroxVol11',
      'MadroxVol12',
      'MadroxVol13',
      'MadroxVol14',
      'MadroxVol15',
    ]
  ),
  new Collection(
    'Nightcrawler: The Devil Inside',
    '2005-5-25',
    [
      'NightcrawlerVol31',
      'NightcrawlerVol32',
      'NightcrawlerVol33',
      'NightcrawlerVol34',
    ]
  ),
  new Collection(
    'Wolverine by Daniel Way: The Complete Collection Vol. 1',
    '2017-1-31',
    [
      'SabretoothVol21',
      'SabretoothVol22',
      'SabretoothVol23',
      'SabretoothVol24',
    ]
  ),
  new Collection(
    'NYX: Wannabe',
    '2006-5-10',
    [
      'NYXVol11',
      'NYXVol12',
      'NYXVol13',
      'NYXVol14',
      'NYXVol15',
      'NYXVol16',
      'NYXVol17',
    ]
  ),
  new Collection(
    'Uncanny X-Men - The New Age Vol. 2: The Cruelest Cut',
    '2005-2-2',
    [
      'UncannyXMenVol1450',
      'UncannyXMenVol1451',
    ]
  ),
  new Collection(
    'X-Men: Day of the Atom',
    '2005-3-2',
    [
      'XMenVol3161',
      'XMenVol3162',
      'XMenVol3163',
      'XMenVol3164',
      'XMenVol3165',
    ]
  ),
  new Collection(
    'Excalibur Vol. 2: Saturday Night Fever',
    '2005-5-18',
    [
      'ExcaliburVol35',
      'ExcaliburVol36',
      'ExcaliburVol37',
    ]
  ),
  new Collection(
    'New X-Men: Academy X - Complete Collection',
    '2018-12-31',
    [
      'NewXMenVol27',
      'NewXMenVol28',
      'NewXMenVol29',
    ]
  ),
  new Collection(
    'District X Vol. 2: Underground',
    '2005-9-7',
    [
      'DistrictXVol17',
      'DistrictXVol18',
      'DistrictXVol19',
      'DistrictXVol110',
      'DistrictXVol111',
      'DistrictXVol112',
    ]
  ),
  new Collection(
    'Deadpool & Cable Omnibus',
    '2014-11-11',
    [
      'CableDeadpoolVol17',
      'CableDeadpoolVol18',
      'CableDeadpoolVol19',
      'CableDeadpoolVol110',
    ]
  ),
  new Collection(
    'Gambit: House of Cards',
    '2005-3-9',
    [
      'GambitVol41',
      'GambitVol42',
      'GambitVol43',
      'GambitVol44',
      'GambitVol45',
      'GambitVol46',
    ]
  ),
  new Collection(
    'Nightcrawler: The Devil Inside',
    '2005-5-25',
    [
      'NightcrawlerVol35',
      'NightcrawlerVol36',
    ]
  ),
  new Collection(
    'Uncanny X-Men - The New Age Vol. 2: The Cruelest Cut',
    '2005-2-2',
    [
      'UncannyXMenVol1452',
      'UncannyXMenVol1453',
      'UncannyXMenVol1454',
    ]
  ),
  new Collection(
    'X-Men: Golgotha',
    '2005-7-13',
    [
      'XMenVol3166',
      'XMenVol3167',
      'XMenVol3168',
      'XMenVol3169',
      'XMenVol3170',
    ]
  ),
  new Collection(
    'Excalibur Vol. 2: Saturday Night Fever',
    '2005-5-18',
    [
      'ExcaliburVol38',
      'ExcaliburVol39',
      'ExcaliburVol310',
    ]
  ),
  new Collection(
    'Gambit: Hath No Fury',
    '2005-9-14',
    [
      'GambitVol47',
      'GambitVol48',
      'GambitVol49',
      'GambitVol410',
      'GambitVol411',
      'GambitVol412',
    ]
  ),
  new Collection(
    'New X-Men: Academy X - Complete Collection',
    '2018-12-31',
    [
      'NewXMenVol210',
      'NewXMenVol211',
      'NewXMenVol212',
    ]
  ),
  new Collection(
    'District X Vol. 2: Underground',
    '2005-9-7',
    [
      'DistrictXVol113',
      'DistrictXVol114',
    ]
  ),
  new Collection(
    'Deadpool & Cable Omnibus',
    '2014-11-11',
    [
      'CableDeadpoolVol111',
      'CableDeadpoolVol112',
      'CableDeadpoolVol113',
      'CableDeadpoolVol114',
    ]
  ),
  new Collection(
    'X-Force & Cable Vol. 1: The Legend Returns',
    '2005-3-30',
    [
      'XForceVol21',
      'XForceVol22',
      'XForceVol23',
      'XForceVol24',
      'XForceVol25',
      'XForceVol26',
    ]
  ),
  new Collection(
    'Nightcrawler: The Winding Way',
    '2006-2-22',
    [
      'NightcrawlerVol37',
      'NightcrawlerVol38',
      'NightcrawlerVol39',
      'NightcrawlerVol310',
      'NightcrawlerVol311',
      'NightcrawlerVol312',
    ]
  ),
  new Collection(
    'X-23: Innocence Lost',
    '2006-4-12',
    [
      'X23Vol11',
      'X23Vol12',
      'X23Vol13',
      'X23Vol14',
      'X23Vol15',
      'X23Vol16',
    ]
  ),
  new Collection(
    'Uncanny X-Men - The New Age Vol. 3: On Ice',
    '2005-8-10',
    [
      'UncannyXMenVol1455',
      'UncannyXMenVol1456',
      'UncannyXMenVol1457',
      'UncannyXMenVol1458',
      'UncannyXMenVol1459',
    ]
  ),
  new Collection(
    'X-Men: Phoenix - Endsong/Warsong Ultimate Collection',
    '2012-6-13',
    [
      'XMenPhoenixEndsongVol11',
      'XMenPhoenixEndsongVol12',
      'XMenPhoenixEndsongVol13',
      'XMenPhoenixEndsongVol14',
      'XMenPhoenixEndsongVol15',
    ]
  ),
  new Collection(
    'Wolverine: Enemy of the State Ultimate Collection',
    '2008-6-11',
    [
      'WolverineVol320',
      'WolverineVol321',
      'WolverineVol322',
      'WolverineVol323',
      'WolverineVol324',
      'WolverineVol325',
      'WolverineVol326',
      'WolverineVol327',
      'WolverineVol328',
      'WolverineVol329',
      'WolverineVol330',
      'WolverineVol331',
    ]
  ),
  new Collection(
    'New X-Men: Academy X - Complete Collection',
    '2018-12-31',
    [
      'NewXMenVol213',
    ]
  ),
  new Collection(
    'Uncanny X-Men - The New Age Vol. 3: On Ice',
    '2005-8-10',
    [
      'UncannyXMenVol1460',
      'UncannyXMenVol1461',
    ]
  ),
  new Collection(
    'Astonishing X-Men Omnibus',
    '2009-10-7',
    [
      'AstonishingXMenVol37',
      'AstonishingXMenVol38',
      'AstonishingXMenVol39',
      'AstonishingXMenVol310',
      'AstonishingXMenVol311',
      'AstonishingXMenVol312',
    ]
  ),
  new Collection(
    'Rogue: The Complete Collection',
    '2015-9-1',
    [
      'RogueVol37',
      'RogueVol38',
      'RogueVol39',
      'RogueVol310',
      'RogueVol311',
      'RogueVol312',
    ]
  ),
  new Collection(
    'X-Men: Bizarre Love Triangle',
    '2005-10-12',
    [
      'XMenVol3171',
      'XMenVol3172',
      'XMenVol3173',
      'XMenVol3174',
    ]
  ),
  new Collection(
    'Uncanny X-Men: The Complete Collection by Matt Fraction Vol. 1 (Partial)',
    '2013-3-5',
    [
      'XMenUnlimitedVol29',
    ]
  ),
  new Collection(
    'New X-Men: Academy X - Complete Collection',
    '2018-12-31',
    [
      'NewXMenVol214',
      'NewXMenVol215',
      'NewXMenHellionsVol11',
      'NewXMenHellionsVol12',
      'NewXMenHellionsVol13',
      'NewXMenHellionsVol14',
      'NewXMenAcademyXYearbookSpecialVol11',
    ]
  ),
  new Collection(
    'Wolverine: Blood & Sorrow',
    '2007-6-27',
    [
      'XMenUnlimitedVol212',
    ]
  ),
  new Collection(
    'Wolverine: Enemy of the State Ultimate Collection',
    '2008-6-11',
    [
      'WolverineVol332',
    ]
  ),
  new Collection(
    'X-Men: Kitty Pryde - Shadow & Flame',
    '2006-1-18',
    [
      'XMenKittyPrydeShadowFlameVol11',
      'XMenKittyPrydeShadowFlameVol12',
      'XMenKittyPrydeShadowFlameVol13',
      'XMenKittyPrydeShadowFlameVol14',
      'XMenKittyPrydeShadowFlameVol15',
    ]
  ),
  new Collection(
    'X-Men: Colossus Bloodline',
    '2005-6-18',
    [
      'XMenColossusBloodlineVol11',
      'XMenColossusBloodlineVol12',
      'XMenColossusBloodlineVol13',
      'XMenColossusBloodlineVol14',
      'XMenColossusBloodlineVol15',
    ]
  ),
  new Collection(
    'Ororo: Before the Storm',
    '2005-12-7',
    [
      'OroroBeforetheStormVol11',
      'OroroBeforetheStormVol12',
      'OroroBeforetheStormVol13',
      'OroroBeforetheStormVol14',
    ]
  ),
  new Collection(
    'X-Men/Black Panther: Wild Kingdom',
    '2006-1-25',
    [
      'XMenVol3175',
      'BlackPantherVol48',
      'XMenVol3176',
      'BlackPantherVol49',
    ]
  ),
  new Collection(
    'House of M: Excalibur - Prelude',
    '2005-7-27',
    [
      'ExcaliburVol311',
      'ExcaliburVol312',
      'ExcaliburVol313',
      'ExcaliburVol314',
    ]
  ),
  new Collection(
    'House of M',
    '2006-2-1',
    [
      'HouseofMVol11',
      'HouseofMVol12',
      'HouseofMVol13',
      'HouseofMVol14',
      'HouseofMVol15',
    ]
  ),
  new Collection(
    'Deadpool & Cable Omnibus',
    '2014-11-11',
    [
      'CableDeadpoolVol115',
      'CableDeadpoolVol116',
      'CableDeadpoolVol117',
      'CableDeadpoolVol118',
    ]
  ),
  new Collection(
    'House of M: Uncanny X-Men',
    '2006-1-25',
    [
      'UncannyXMenVol1462',
      'UncannyXMenVol1463',
      'UncannyXMenVol1464',
      'UncannyXMenVol1465',
      'SecretsoftheHouseofMVol11',
    ]
  ),
  new Collection(
    'House of M',
    '2006-2-1',
    [
      'HouseofMVol16',
      'HouseofMVol17',
      'HouseofMVol18',
    ]
  ),
  new Collection(
    'X-Men and Spider-Man',
    '2009-12-9',
    [
      'XMenSpiderManVol11',
      'XMenSpiderManVol12',
      'XMenSpiderManVol13',
      'XMenSpiderManVol14',
    ]
  ),
  new Collection(
    'Decimation: X-Men - The Day After',
    '2006-4-26',
    [
      'DecimationHouseofMTheDayAfterVol11',
    ]
  ),
  new Collection(
    'Deadpool & Cable Omnibus',
    '2014-11-11',
    [
      'CableDeadpoolVol119',
      'CableDeadpoolVol120',
      'CableDeadpoolVol121',
      'CableDeadpoolVol122',
      'CableDeadpoolVol123',
    ]
  ),
  new Collection(
    'Decimation: X-Men - The Day After',
    '2006-4-26',
    [
      'XMenVol3177',
      'XMenVol3178',
      'XMenVol3179',
    ]
  ),
  new Collection(
    'New X-Men: Childhood\'s End Vol. 1',
    '2006-4-26',
    [
      'NewXMenVol220',
      'NewXMenVol221',
      'NewXMenVol222',
      'NewXMenVol223',
    ]
  ),
  new Collection(
    'Decimation: Generation M',
    '2006-6-28',
    [
      'GenerationMVol11',
      'GenerationMVol12',
      'GenerationMVol13',
      'GenerationMVol14',
      'GenerationMVol15',
    ]
  ),
  new Collection(
    'Decimation: X-Men - The 198',
    '2006-8-30',
    [
      'XMenThe198Vol11',
      'XMenThe198Vol12',
      'XMenThe198Vol13',
      'XMenThe198Vol14',
      'XMenThe198Vol15',
    ]
  ),
  new Collection(
    'X-Factor by Peter David: The Complete Collection, Vol. 1',
    '2014-2-4',
    [
      'XFactorVol31',
      'XFactorVol32',
      'XFactorVol33',
      'XFactorVol34',
      'XFactorVol35',
      'XFactorVol36',
    ]
  ),
  new Collection(
    'Wolverine by Daniel Way: The Complete Collection Vol. 1',
    '2017-1-31',
    [
      'WolverineVol333',
      'WolverineVol334',
      'WolverineVol335',
    ]
  ),
  new Collection(
    'New Excalibur Vol. 1: Defenders of the Realm',
    '2006-7-26',
    [
      'NewExcaliburVol11',
      'NewExcaliburVol12',
      'NewExcaliburVol13',
    ]
  ),
  new Collection(
    'Uncanny X-Men - The New Age Vol. 4: End of Greys',
    '2006-6-21',
    [
      'UncannyXMenVol1466',
      'UncannyXMenVol1467',
      'UncannyXMenVol1468',
    ]
  ),
  new Collection(
    'New Excalibur Vol. 1: Defenders of the Realm',
    '2006-7-26',
    [
      'NewExcaliburVol14',
      'NewExcaliburVol15',
      'NewExcaliburVol16',
      'NewExcaliburVol17',
    ]
  ),
  new Collection(
    'New X-Men: Childhood\'s End Vol. 2',
    '2006-8-2',
    [
      'NewXMenVol224',
      'NewXMenVol225',
      'NewXMenVol226',
      'NewXMenVol227',
    ]
  ),
  new Collection(
    'Wolverine by Daniel Way: The Complete Collection Vol. 1',
    '2017-1-31',
    [
      'WolverineVol336',
      'WolverineVol337',
      'WolverineVol338',
      'WolverineVol339',
      'WolverineVol340',
    ]
  ),
  new Collection(
    'Wolverine: Origins Vol. 1 - Born in Blood',
    '2007-4-4',
    [
      'WolverineOriginsVol11',
      'WolverineOriginsVol12',
      'WolverineOriginsVol13',
      'WolverineOriginsVol14',
      'WolverineOriginsVol15',
    ]
  ),
  new Collection(
    'Wolverine: Blood & Sorrow',
    '2007-6-27',
    [
      'WolverineVol341',
    ]
  ),
  new Collection(
    'Deadpool & Cable Omnibus',
    '2014-11-11',
    [
      'CableDeadpoolVol124',
      'CableDeadpoolVol125',
      'CableDeadpoolVol126',
      'CableDeadpoolVol127',
    ]
  ),
  new Collection(
    'Uncanny X-Men - The New Age Vol. 4: End of Greys',
    '2006-6-21',
    [
      'UncannyXMenVol1469',
      'UncannyXMenVol1470',
      'UncannyXMenVol1471',
    ]
  ),
  new Collection(
    'Uncanny X-Men - The New Age Vol. 5: First Foursaken',
    '2006-6-21',
    [
      'UncannyXMenVol1472',
      'UncannyXMenVol1473',
      'UncannyXMenVol1474',
    ]
  ),
  new Collection(
    'Wolverine: Blood & Sorrow',
    '2007-6-27',
    [
      'GiantSizeWolverineVol11',
    ]
  ),
  new Collection(
    'New Excalibur Vol. 2: Last Days of Camelot',
    '2007-3-14',
    [
      'NewExcaliburVol18',
      'NewExcaliburVol19',
    ]
  ),
  new Collection(
    'Uncanny X-Men - The New Age Vol. 5: First Foursaken',
    '2006-6-21',
    [
      'UncannyXMenAnnualVol41',
    ]
  ),
  new Collection(
    'Decimation: X-Men - The Day After',
    '2006-4-26',
    [
      'XMenVol3180',
      'XMenVol3181',
    ]
  ),
  new Collection(
    'X-Men: The Blood of Apocalypse (Partial)',
    '2006-7-12',
    [
      'XMenVol3182',
      'XMenVol3183',
      'XMenVol3184',
      'XMenVol3185',
      'XMenVol3186',
      'XMenVol3187',
    ]
  ),
  new Collection(
    'Deadpool & Cable Omnibus',
    '2014-11-11',
    [
      'CableDeadpoolVol128',
      'CableDeadpoolVol129',
    ]
  ),
  new Collection(
    'New Excalibur Vol. 2: Last Days of Camelot',
    '2007-3-14',
    [
      'NewExcaliburVol110',
      'NewExcaliburVol111',
      'NewExcaliburVol112',
    ]
  ),
  new Collection(
    'Wolverine: Origins Vol. 2 - Savior',
    '2007-9-19',
    [
      'WolverineOriginsVol16',
      'WolverineOriginsVol17',
      'WolverineOriginsVol18',
      'WolverineOriginsVol19',
      'WolverineOriginsVol110',
    ]
  ),
  new Collection(
    'X-Men: Deadly Genesis',
    '2006-12-27',
    [
      'XMenDeadlyGenesisVol11',
      'XMenDeadlyGenesisVol12',
      'XMenDeadlyGenesisVol13',
      'XMenDeadlyGenesisVol14',
      'XMenDeadlyGenesisVol15',
      'XMenDeadlyGenesisVol16',
    ]
  ),
  new Collection(
    'X-Factor by Peter David: The Complete Collection, Vol. 1',
    '2014-2-4',
    [
      'XFactorVol37',
    ]
  ),
  new Collection(
    'Uncanny X-Men: Rise & Fall of the Shi\'ar Empire',
    '2007-7-25',
    [
      'UncannyXMenVol1475',
      'UncannyXMenVol1476',
      'UncannyXMenVol1477',
      'UncannyXMenVol1478',
      'UncannyXMenVol1479',
      'UncannyXMenVol1480',
      'UncannyXMenVol1481',
      'UncannyXMenVol1482',
      'UncannyXMenVol1483',
      'UncannyXMenVol1484',
      'UncannyXMenVol1485',
      'UncannyXMenVol1486',
    ]
  ),
  new Collection(
    'X-Men: Supernovas',
    '2007-8-8',
    [
      'XMenVol3188',
      'XMenVol3189',
      'XMenVol3190',
      'XMenVol3191',
      'XMenVol3192',
      'XMenVol3193',
    ]
  ),
  new Collection(
    'Wolverine: Origins Vol. 3 - Swift and Terrible',
    '2007-11-14',
    [
      'WolverineOriginsVol111',
      'WolverineOriginsVol112',
      'WolverineOriginsVol113',
      'WolverineOriginsVol114',
      'WolverineOriginsVol115',
    ]
  ),
  new Collection(
    'X-23: Target X',
    '2007-8-22',
    [
      'X23TargetXVol11',
      'X23TargetXVol12',
      'X23TargetXVol13',
      'X23TargetXVol14',
      'X23TargetXVol15',
      'X23TargetXVol16',
    ]
  ),
  new Collection(
    'Civil War',
    '2007-4-11',
    [
      'CivilWarVol11',
    ]
  ),
  new Collection(
    'X-Factor by Peter David: The Complete Collection, Vol. 1',
    '2014-2-4',
    [
      'XFactorVol38',
    ]
  ),
  new Collection(
    'Civil War',
    '2007-4-11',
    [
      'CivilWarVol12',
    ]
  ),
  new Collection(
    'Deadpool & Cable Omnibus',
    '2014-11-11',
    [
      'CableDeadpoolVol130',
    ]
  ),
  new Collection(
    'Civil War',
    '2007-4-11',
    [
      'CivilWarVol13',
    ]
  ),
  new Collection(
    'X-Factor by Peter David: The Complete Collection, Vol. 1',
    '2014-2-4',
    [
      'XFactorVol39',
    ]
  ),
  new Collection(
    'Civil War: X-Men',
    '2007-4-25',
    [
      'CivilWarXMenVol11',
      'CivilWarXMenVol12',
      'CivilWarXMenVol13',
      'CivilWarXMenVol14',
    ]
  ),
  new Collection(
    'Civil War: X-Men',
    '2007-5-2',
    [
      'WolverineVol342',
      'WolverineVol343',
      'WolverineVol344',
      'WolverineVol345',
      'WolverineVol346',
      'WolverineVol347',
      'WolverineVol348',
    ]
  ),
  new Collection(
    'X-Factor by Peter David: The Complete Collection, Vol. 1',
    '2014-2-4',
    [
      'XFactorVol310',
      'XFactorVol311',
      'XFactorVol312',
    ]
  ),
  new Collection(
    'Civil War',
    '2007-4-11',
    [
      'CivilWarVol14',
    ]
  ),
  new Collection(
    'Deadpool & Cable Omnibus',
    '2014-11-11',
    [
      'CableDeadpoolVol131',
      'CableDeadpoolVol132',
    ]
  ),
  new Collection(
    'Civil War',
    '2007-4-11',
    [
      'CivilWarVol15',
      'CivilWarVol16',
      'CivilWarVol17',
    ]
  ),
  new Collection(
    'New X-Men: Childhood\'s End Vol. 3',
    '2006-12-6',
    [
      'NewXMenVol228',
      'NewXMenVol229',
      'NewXMenVol230',
      'NewXMenVol231',
    ]
  ),
  new Collection(
    'Deadpool & Cable Omnibus',
    '2014-11-11',
    [
      'CableDeadpoolVol133',
      'CableDeadpoolVol134',
      'CableDeadpoolVol135',
    ]
  ),
  new Collection(
    'New X-Men: Childhood\'s End Vol. 3',
    '2006-12-6',
    [
      'NewXMenVol232',
    ]
  ),
  new Collection(
    'Wolverine: Blood & Sorrow',
    '2007-6-27',
    [
      'WolverineVol349',
    ]
  ),
  new Collection(
    'X-Factor by Peter David: The Complete Collection, Vol. 2',
    '2014-6-10',
    [
      'XFactorVol313',
    ]
  ),
  new Collection(
    'New Excalibur Vol. 2: Last Days of Camelot',
    '2007-3-14',
    [
      'NewExcaliburVol113',
      'NewExcaliburVol114',
      'NewExcaliburVol115',
    ]
  ),
  new Collection(
    'Deadpool & Cable Omnibus',
    '2014-11-11',
    [
      'CableDeadpoolVol136',
      'CableDeadpoolVol137',
      'CableDeadpoolVol138',
      'CableDeadpoolVol139',
    ]
  ),
  new Collection(
    'X-Men: Phoenix - Endsong/Warsong Ultimate Collection',
    '2012-6-13',
    [
      'XMenPhoenixWarsongVol11',
      'XMenPhoenixWarsongVol12',
      'XMenPhoenixWarsongVol13',
      'XMenPhoenixWarsongVol14',
      'XMenPhoenixWarsongVol15',
    ]
  ),
  new Collection(
    'New X-Men: Childhood\'s End Vol. 4',
    '2007-5-30',
    [
      'NewXMenVol233',
      'NewXMenVol234',
      'NewXMenVol235',
      'NewXMenVol236',
    ]
  ),
  new Collection(
    'New Excalibur Vol. 3: Battle for Eternity',
    '2007-12-5',
    [
      'NewExcaliburVol116',
      'NewExcaliburVol117',
    ]
  ),
  new Collection(
    'X-Factor by Peter David: The Complete Collection, Vol. 2',
    '2014-6-10',
    [
      'XFactorVol314',
      'XFactorVol315',
      'XFactorVol316',
      'XFactorVol317',
    ]
  ),
  new Collection(
    'New X-Men: Childhood\'s End Vol. 5 (Partial)',
    '2007-12-12',
    [
      'NewXMenVol237',
      'NewXMenVol238',
      'NewXMenVol239',
    ]
  ),
  new Collection(
    'X-Factor by Peter David: The Complete Collection, Vol. 2',
    '2014-6-10',
    [
      'XFactorVol318',
      'XFactorVol319',
      'XFactorVol320',
    ]
  ),
  new Collection(
    'Wolverine: Evolution',
    '2008-3-5',
    [
      'WolverineVol350',
      'WolverineVol351',
      'WolverineVol352',
      'WolverineVol353',
      'WolverineVol354',
      'WolverineVol355',
    ]
  ),
  new Collection(
    'Wolverine: Origins Vol. 4 - Our War',
    '2008-6-11',
    [
      'WolverineOriginsAnnualVol11',
    ]
  ),
  new Collection(
    'Wolverine: The Death of Wolverine',
    '2008-7-23',
    [
      'WolverineVol356',
    ]
  ),
  new Collection(
    'World War Hulk: X-Men',
    '2008-5-14',
    [
      'GhostRiderVol512',
      'IronManDirectorofSHIELDVol119',
      'WorldWarHulkXMenVol11',
      'IrredeemableAntManVol110',
      'AvengersTheInitiativeVol14',
      'GhostRiderVol513',
      'WorldWarHulkXMenVol12',
      'IronManDirectorofSHIELDVol120',
      'WorldWarHulkXMenVol13',
      'AvengersTheInitiativeVol15',
    ]
  ),
  new Collection(
    'New Excalibur Vol. 3: Battle for Eternity',
    '2007-12-5',
    [
      'NewExcaliburVol118',
      'NewExcaliburVol119',
      'NewExcaliburVol120',
      'NewExcaliburVol121',
      'NewExcaliburVol122',
      'NewExcaliburVol123',
      'NewExcaliburVol124',
    ]
  ),
  new Collection(
    'X-Men: Die by the Sword',
    '2008-3-26',
    [
      'XMenDiebytheSwordVol11',
      'XMenDiebytheSwordVol12',
      'XMenDiebytheSwordVol13',
      'XMenDiebytheSwordVol14',
      'XMenDiebytheSwordVol15',
    ]
  ),
  new Collection(
    'Wolverine: Origins Vol. 4 - Our War',
    '2008-6-11',
    [
      'WolverineOriginsVol116',
      'WolverineOriginsVol117',
      'WolverineOriginsVol118',
      'WolverineOriginsVol119',
      'WolverineOriginsVol120',
    ]
  ),
  new Collection(
    'Wolverine: The Death of Wolverine',
    '2008-7-23',
    [
      'WolverineVol357',
      'WolverineVol358',
      'WolverineVol359',
      'WolverineVol360',
      'WolverineVol361',
    ]
  ),
  new Collection(
    'X-Men: Emperor Vulcan',
    '2008-4-23',
    [
      'XMenEmperorVulcanVol11',
      'XMenEmperorVulcanVol12',
      'XMenEmperorVulcanVol13',
      'XMenEmperorVulcanVol14',
      'XMenEmperorVulcanVol15',
    ]
  ),
  new Collection(
    'Mystic Arcana',
    '2016-2-18',
    [
      'MysticArcanaVol11',
      'MysticArcanaVol12',
      'MysticArcanaVol13',
      'MysticArcanaVol14',
    ]
  ),
  new Collection(
    'Astonishing X-Men Omnibus',
    '2009-10-7',
    [
      'AstonishingXMenVol313',
      'AstonishingXMenVol314',
      'AstonishingXMenVol315',
      'AstonishingXMenVol316',
      'AstonishingXMenVol317',
      'AstonishingXMenVol318',
      'AstonishingXMenVol319',
      'AstonishingXMenVol320',
      'AstonishingXMenVol321',
      'AstonishingXMenVol322',
      'AstonishingXMenVol323',
      'AstonishingXMenVol324',
      'GiantSizeAstonishingXMenVol11',
    ]
  ),
  new Collection(
    'X-Men: Supernovas',
    '2007-8-8',
    [
      'XMenAnnualVol61',
      'XMenVol3194',
      'XMenVol3195',
      'XMenVol3196',
      'XMenVol3197',
      'XMenVol3198',
    ]
  ),
  new Collection(
    'Deadpool & Cable Omnibus',
    '2014-11-11',
    [
      'CableDeadpoolVol140',
    ]
  ),
  new Collection(
    'X-Men: Supernovas',
    '2007-8-8',
    [
      'XMenVol3199',
    ]
  ),
  new Collection(
    'Deadpool & Cable Omnibus',
    '2014-11-11',
    [
      'CableDeadpoolVol141',
    ]
  ),
  new Collection(
    'Uncanny X-Men: The Extremists (Partial)',
    '2008-1-9',
    [
      'UncannyXMenVol1487',
    ]
  ),
  new Collection(
    'X-Men: Endangered Species',
    '2008-1-9',
    [
      'XMenEndangeredSpeciesVol11',
      'XMenVol3200',
    ]
  ),
  new Collection(
    'Deadpool & Cable Omnibus',
    '2014-11-11',
    [
      'CableDeadpoolVol142',
    ]
  ),
  new Collection(
    'X-Men: Endangered Species',
    '2008-1-9',
    [
      'UncannyXMenVol1488',
      'XFactorVol321',
      'NewXMenVol240',
      'XMenVol3201',
      'UncannyXMenVol1489',
      'XFactorVol322',
      'NewXMenVol241',
      'XMenVol3202',
      'UncannyXMenVol1490',
      'XFactorVol323',
      'NewXMenVol242',
      'XMenVol3203',
      'UncannyXMenVol1491',
    ]
  ),
  new Collection(
    'Deadpool & Cable Omnibus',
    '2014-11-11',
    [
      'CableDeadpoolVol143',
      'CableDeadpoolVol144',
      'CableDeadpoolVol145',
      'CableDeadpoolVol146',
      'CableDeadpoolVol147',
      'CableDeadpoolVol148',
    ]
  ),
  new Collection(
    'X-Factor by Peter David: The Complete Collection, Vol. 2 (Partial)',
    '2014-6-10',
    [
      'XFactorVol324',
    ]
  ),
  new Collection(
    'X-Men: Endangered Species',
    '2008-1-9',
    [
      'XMenVol3204',
    ]
  ),
  new Collection(
    'New X-Men: Childhood\'s End Vol. 5 (Partial)',
    '2007-12-12',
    [
      'NewXMenVol243',
    ]
  ),
  new Collection(
    'X-Men: Magneto Testament',
    '2009-6-10',
    [
      'XMenMagnetoTestamentVol11',
      'XMenMagnetoTestamentVol12',
      'XMenMagnetoTestamentVol13',
      'XMenMagnetoTestamentVol14',
      'XMenMagnetoTestamentVol15',
    ]
  ),
  new Collection(
    'X-Men: Messiah Complex',
    '2008-10-29',
    [
      'XMenMessiahComplexMutantFilesVol11',
      'XMenMessiahComplexVol11',
      'UncannyXMenVol1492',
      'XFactorVol325',
      'NewXMenVol244',
      'XMenVol3205',
      'UncannyXMenVol1493',
      'XFactorVol326',
      'NewXMenVol245',
      'XMenVol3206',
      'UncannyXMenVol1494',
      'XFactorVol327',
      'NewXMenVol246',
      'XMenVol3207',
    ]
  ),
  new Collection(
    'Deadpool & Cable Omnibus',
    '2014-11-11',
    [
      'CableDeadpoolVol149',
      'CableDeadpoolVol150',
    ]
  ),
  new Collection(
    'Wolverine: Get Mystique',
    '2008-8-27',
    [
      'WolverineVol362',
      'WolverineVol363',
      'WolverineVol364',
      'WolverineVol365',
    ]
  ),
  new Collection(
    'X-Men: Legacy - Divided He Stands',
    '2008-8-27',
    [
      'XMenLegacyVol1208',
      'XMenLegacyVol1209',
      'XMenLegacyVol1210',
      'XMenLegacyVol1211',
      'XMenLegacyVol1212',
    ]
  ),
  new Collection(
    'X-Men: Legacy - Sins of the Father',
    '2009-3-11',
    [
      'XMenLegacyVol1213',
      'XMenLegacyVol1214',
    ]
  ),
  new Collection(
    'Young X-Men, Vol. 1: Final Genesis',
    '2008-12-3',
    [
      'YoungXMenVol11',
      'YoungXMenVol12',
      'YoungXMenVol13',
      'YoungXMenVol14',
      'YoungXMenVol15',
    ]
  ),
  new Collection(
    'X-Factor by Peter David: The Complete Collection, Vol. 2 (Partial)',
    '2014-6-10',
    [
      'XFactorVol328',
      'XFactorVol329',
      'XFactorVol330',
      'XFactorVol331',
      'XFactorVol332',
    ]
  ),
  new Collection(
    'X-Force Vol. 1: Angels and Demons',
    '2009-1-28',
    [
      'XForceVol31',
      'XForceVol32',
      'XForceVol33',
      'XForceVol34',
      'XForceVol35',
      'XForceVol36',
    ]
  ),
  new Collection(
    'Uncanny X-Men: Divided We Stand',
    '2008-10',
    [
      'UncannyXMenVol1495',
      'UncannyXMenVol1496',
      'UncannyXMenVol1497',
      'UncannyXMenVol1498',
      'UncannyXMenVol1499',
    ]
  ),
  new Collection(
    'X-Men: Divided We Stand',
    '2008-9-3',
    [
      'XMenDividedWeStandVol11',
      'XMenDividedWeStandVol12',
      'XMenFreeComicBookDayVol20081',
    ]
  ),
  new Collection(
    'Cable Vol. 1: Messiah War',
    '2008-10-8',
    [
      'CableVol21',
      'CableVol22',
      'CableVol23',
      'CableVol24',
      'CableVol25',
    ]
  ),
  new Collection(
    'Wolverine: Logan',
    '2009-4-29',
    [
      'LoganVol11',
      'LoganVol12',
      'LoganVol13',
    ]
  ),
  new Collection(
    'X-Men: Angel - Revelations',
    '2009-1-7',
    [
      'AngelRevelationsVol11',
      'AngelRevelationsVol12',
      'AngelRevelationsVol13',
      'AngelRevelationsVol14',
      'AngelRevelationsVol15',
    ]
  ),
  new Collection(
    'War of Kings: Road to War of Kings',
    '2009-6-3',
    [
      'WarofKingsSagaVol11',
      'SecretInvasionWarofKingsVol11',
    ]
  ),
  new Collection(
    'War of Kings: Road to War of Kings',
    '2009-6-3',
    [
      'XMenKingbreakerVol11',
      'XMenKingbreakerVol12',
      'XMenKingbreakerVol13',
      'XMenKingbreakerVol14',
    ]
  ),
  new Collection(
    'X-Men: Manifest Destiny',
    '2009-5-27',
    [
      'XMenManifestDestinyVol11',
      'XMenManifestDestinyVol12',
      'XMenManifestDestinyVol13',
      'XMenManifestDestinyVol14',
      'XMenManifestDestinyVol15',
      'XMenManifestDestinyNightcrawlerVol11',
      'WolverineManifestDestinyVol11',
      'WolverineManifestDestinyVol12',
      'WolverineManifestDestinyVol13',
      'WolverineManifestDestinyVol14',
    ]
  ),
  new Collection(
    'Astonishing X-Men: Ghost Box',
    '2009-9-2',
    [
      'AstonishingXMenVol325',
      'AstonishingXMenVol326',
      'AstonishingXMenVol327',
      'AstonishingXMenGhostBoxesVol11',
      'AstonishingXMenGhostBoxesVol12',
      'AstonishingXMenVol328',
      'AstonishingXMenVol329',
      'AstonishingXMenVol330',
    ]
  ),
  new Collection(
    'Uncanny X-Men: The Complete Collection by Matt Fraction Vol. 1 (Partial)',
    '2013-3-5',
    [
      'UncannyXMenVol1500',
    ]
  ),
  new Collection(
    'X-Men: Legacy - Sins of the Father',
    '2009-3-11',
    [
      'XMenLegacyVol1215',
      'XMenLegacyVol1216',
    ]
  ),
  new Collection(
    'X-Men: Original Sin',
    '2009-8-5',
    [
      'WolverineOriginsVol128',
      'XMenOriginalSinVol11',
      'XMenLegacyVol1217',
      'WolverineOriginsVol129',
      'XMenLegacyVol1218',
      'WolverineOriginsVol130',
    ]
  ),
  new Collection(
    'Uncanny X-Men: The Complete Collection by Matt Fraction Vol. 1 (Partial)',
    '2013-3-5',
    [
      'UncannyXMenVol1501',
      'UncannyXMenVol1502',
      'UncannyXMenVol1503',
    ]
  ),
  new Collection(
    'NYX: No Way Home',
    '2009-9-2',
    [
      'NYXNoWayHomeVol11',
      'NYXNoWayHomeVol12',
      'NYXNoWayHomeVol13',
      'NYXNoWayHomeVol14',
      'NYXNoWayHomeVol15',
      'NYXNoWayHomeVol16',
    ]
  ),
  new Collection(
    'Cable Vol. 2: Waiting for the End of the World',
    '2009-5-27',
    [
      'CableVol26',
      'CableVol27',
      'CableVol28',
      'CableVol29',
      'CableVol210',
      'KingSizeCableSpectacularVol11',
    ]
  ),
  new Collection(
    'X-Factor Vol. 6: Secret Invasion',
    '2009-5-27',
    [
      'XFactorVol333',
      'SheHulkVol231',
      'XFactorVol334',
    ]
  ),
  new Collection(
    'Secret Invasion: X-Men',
    '2009-3-25',
    [
      'SecretInvasionXMenVol11',
      'SecretInvasionXMenVol12',
      'SecretInvasionXMenVol13',
      'SecretInvasionXMenVol14',
    ]
  ),
  new Collection(
    'X-Factor by Peter David: The Complete Collection, Vol. 2 (Partial)',
    '2014-6-10',
    [
      'XFactorTheQuickandtheDeadVol11',
    ]
  ),
  new Collection(
    'X-Force Vol. 2: Old Ghosts',
    '2014-6-10',
    [
      'XForceVol37',
      'XForceVol38',
      'XForceVol39',
      'XForceVol310',
      'XForceVol311',
    ]
  ),
  new Collection(
    'X-Force Vol. 3: Not Forgotten',
    '2010-4-7',
    [
      'XForceVol312',
    ]
  ),
  new Collection(
    'X-Men: Worlds Apart',
    '2009-6-10',
    [
      'XMenWorldsApartVol11',
      'XMenWorldsApartVol12',
      'XMenWorldsApartVol13',
      'XMenWorldsApartVol14',
    ]
  ),
  new Collection(
    'Uncanny X-Men: The Complete Collection by Matt Fraction Vol. 1 (Partial)',
    '2013-3-5',
    [
      'UncannyXMenVol1504',
      'UncannyXMenVol1505',
      'UncannyXMenAnnualVol42',
      'UncannyXMenVol1506',
      'UncannyXMenVol1507',
    ]
  ),
  new Collection(
    'Young X-Men - Volume 2: Books of Revelations (Partial)',
    '2009-6-3',
    [
      'YoungXMenVol16',
      'YoungXMenVol17',
      'YoungXMenVol18',
      'YoungXMenVol19',
      'YoungXMenVol110',
      'YoungXMenVol111',
      'YoungXMenVol112',
    ]
  ),
  new Collection(
    'X-Infernus (Partial)',
    '2009-7-1',
    [
      'XMenUnlimitedVol214',
      'XInfernusSagaVol11',
      'XInfernusVol11',
      'XInfernusVol12',
      'XInfernusVol13',
      'XInfernusVol14',
    ]
  ),
  new Collection(
    'Uncanny X-Men: The Complete Collection by Matt Fraction Vol. 1 (Partial)',
    '2013-3-5',
    [
      'UncannyXMenVol1508',
      'UncannyXMenVol1509',
      'UncannyXMenVol1510',
      'UncannyXMenVol1511',
    ]
  ),
  new Collection(
    'Uncanny X-Men: The Complete Collection by Matt Fraction Vol. 2',
    '2013-3-5',
    [
      'UncannyXMenVol1512',
    ]
  ),
  new Collection(
    'Eternals: Manifest Destiny',
    '2016-12-29',
    [
      'EternalsManifestDestinyVol17',
      'EternalsManifestDestinyVol18',
      'EternalsManifestDestinyVol19',
      'EternalsAnnualVol21',
    ]
  ),
  new Collection(
    'X-Factor Vol. 6: Secret Invasion',
    '2009-5-27',
    [
      'XFactorVol335',
      'XFactorVol336',
      'XFactorVol337',
      'XFactorVol338',
    ]
  ),
  new Collection(
    'X-Factor Vol. 7: Time and a Half',
    '2009-9-2',
    [
      'XFactorVol339',
    ]
  ),
  new Collection(
    'New Mutants Vol. 1: Return of Legion',
    '2010-5-12',
    [
      'MarvelSpotlightVol341',
      'NewMutantsVol31',
      'NewMutantsVol32',
      'NewMutantsVol33',
      'NewMutantsVol34',
    ]
  ),
  new Collection(
    'Astonishing X-Men Vol. 6: Exogenetic',
    '2011-3-9',
    [
      'AstonishingXMenVol331',
      'AstonishingXMenVol332',
      'AstonishingXMenVol333',
      'AstonishingXMenVol334',
      'AstonishingXMenVol335',
    ]
  ),
  new Collection(
    'Astonishing X-Men: Xenogenesis',
    '2011-10-5',
    [
      'AstonishingXMenXenogenesisVol11',
      'AstonishingXMenXenogenesisVol12',
      'AstonishingXMenXenogenesisVol13',
      'AstonishingXMenXenogenesisVol14',
      'AstonishingXMenXenogenesisVol15',
    ]
  ),
  new Collection(
    'X-Force/Cable: Messiah War',
    '2010-1-6',
    [
      'CableVol211',
      'CableVol212',
      'XMenTheLivesandTimesofLucasBishopVol11',
      'XMenTheLivesandTimesofLucasBishopVol12',
      'XMenTheLivesandTimesofLucasBishopVol13',
    ]
  ),
  new Collection(
    'X-Force Vol. 3: Not Forgotten',
    '2010-4-7',
    [
      'XForceVol313',
    ]
  ),
  new Collection(
    'X-Force/Cable: Messiah War',
    '2010-1-6',
    [
      'XForceCableMessiahWarPrologueVol11',
      'CableVol213',
      'XForceVol314',
      'CableVol214',
      'XForceVol315',
      'CableVol215',
      'XForceVol316',
      'XMenFutureHistoryTheMessiahWarSourcebookVol11',
    ]
  ),
  new Collection(
    'X-Force Vol. 3: Not Forgotten',
    '2010-4-7',
    [
      'XForceVol317',
      'XForceVol318',
      'XForceVol319',
      'XForceVol320',
    ]
  ),
  new Collection(
    'X-Men: Domino',
    '2018-4-25',
    [
      'XForceSexandViolenceVol11',
      'XForceSexandViolenceVol12',
      'XForceSexandViolenceVol13',
    ]
  ),
  new Collection(
    'Dark Reign: Deadpool / Thunderbolts',
    '2009-6-24',
    [
      'DeadpoolVol38',
      'ThunderboltsVol2130',
      'DeadpoolVol39',
      'ThunderboltsVol2131',
    ]
  ),
  new Collection(
    'New Exiles Vol. 4: Away We Go',
    '2009-5-27',
    [
      'NewExilesVol116',
      'NewExilesVol117',
      'NewExilesVol118',
      'XMenSwordoftheBraddocksVol11',
    ]
  ),
  new Collection(
    'X-Men Legacy: Salvage',
    '2009-11-25',
    [
      'XMenLegacyVol1219',
      'XMenLegacyVol1220',
      'XMenLegacyVol1221',
      'XMenLegacyVol1222',
      'XMenLegacyVol1223',
      'XMenLegacyVol1224',
      'XMenLegacyVol1225',
    ]
  ),
  new Collection(
    'Uncanny X-Men: The Complete Collection by Matt Fraction Vol. 2',
    '2013-3-5',
    [
      'DarkReignTheCabalVol11',
    ]
  ),
  new Collection(
    'Uncanny X-Men: The Complete Collection by Matt Fraction Vol. 2',
    '2013-3-5',
    [
      'DarkAvengersUncannyXMenUtopiaVol11',
    ]
  ),
  new Collection(
    'Avengers/X-Men: Utopia (Partial)',
    '2011-12-15',
    [
      'DarkXMenTheBeginningVol11',
    ]
  ),
  new Collection(
    'Uncanny X-Men: The Complete Collection by Matt Fraction Vol. 2',
    '2013-3-5',
    [
      'UncannyXMenVol1513',
      'DarkAvengersVol17',
    ]
  ),
  new Collection(
    'Avengers/X-Men: Utopia (Partial)',
    '2011-12-15',
    [
      'DarkXMenTheBeginningVol12',
      'XMenLegacyVol1226',
      'XMenLegacyVol1227',
      'DarkXMenTheBeginningVol13',
    ]
  ),
  new Collection(
    'Uncanny X-Men: The Complete Collection by Matt Fraction Vol. 2',
    '2013-3-5',
    [
      'UncannyXMenVol1514',
      'DarkAvengersVol18',
      'DarkAvengersUncannyXMenExodusVol11',
    ]
  ),
  new Collection(
    'Avengers/X-Men: Utopia (Partial)',
    '2011-12-15',
    [
      'DarkXMenTheConfessionVol11',
    ]
  ),
  new Collection(
    'Uncanny X-Men: The Complete Collection by Matt Fraction Vol. 2',
    '2013-3-5',
    [
      'DarkReignTheListXMenVol11',
    ]
  ),
  new Collection(
    'Deadpool Vol. 3: X Marks the Spot',
    '2010-5-19',
    [
      'DeadpoolVol313',
      'DeadpoolVol314',
    ]
  ),
  new Collection(
    'Dark X-Men',
    '2010-11-24',
    [
      'DarkXMenVol11',
      'DarkXMenVol12',
      'DarkXMenVol13',
      'DarkXMenVol14',
      'DarkXMenVol15',
    ]
  ),
  new Collection(
    'X-Factor Vol. 7: Time and a Half',
    '2009-9-2',
    [
      'XFactorVol340',
      'XFactorVol341',
      'XFactorVol342',
      'XFactorVol343',
      'XFactorVol344',
      'XFactorVol345',
    ]
  ),
  new Collection(
    'X-Factor Vol. 8: Overtime',
    '2010-5-5',
    [
      'XFactorVol346',
      'XFactorVol347',
      'XFactorVol348',
      'XFactorVol349',
      'XFactorVol350',
      'XFactorLaylaMillerVol11',
    ]
  ),
  new Collection(
    'X-Factor: Invisible Woman Has Vanished',
    '2010-6-2',
    [
      'XFactorVol3200',
      'XFactorVol3201',
      'XFactorVol3202',
      'XFactorVol3203',
    ]
  ),
  new Collection(
    'X-Men: Psylocke',
    '2010-6-9',
    [
      'PsylockeVol11',
      'PsylockeVol12',
      'PsylockeVol13',
      'PsylockeVol14',
    ]
  ),
  new Collection(
    'Deadpool Vol. 3: X Marks the Spot',
    '2010-5-19',
    [
      'DeadpoolVol315',
    ]
  ),
  new Collection(
    'X-Men: Legacy - Emplate',
    '2010-7-28',
    [
      'XMenLegacyAnnualVol11',
    ]
  ),
  new Collection(
    'Uncanny X-Men: The Complete Collection by Matt Fraction Vol. 2',
    '2013-3-5',
    [
      'UncannyXMenVol1515',
    ]
  ),
  new Collection(
    'Deadpool Vol. 3: X Marks the Spot',
    '2010-5-19',
    [
      'DeadpoolVol316',
    ]
  ),
  new Collection(
    'Uncanny X-Men: The Complete Collection by Matt Fraction Vol. 2',
    '2013-3-5',
    [
      'UncannyXMenVol1516',
    ]
  ),
  new Collection(
    'X-Men: Legacy - Emplate',
    '2010-7-28',
    [
      'XMenLegacyVol1228',
    ]
  ),
  new Collection(
    'Deadpool Vol. 3: X Marks the Spot',
    '2010-5-19',
    [
      'DeadpoolVol317',
    ]
  ),
  new Collection(
    'X-Men: Legacy - Emplate',
    '2010-7-28',
    [
      'XMenLegacyVol1229',
    ]
  ),
  new Collection(
    'Uncanny X-Men: The Complete Collection by Matt Fraction Vol. 2',
    '2013-3-5',
    [
      'UncannyXMenVol1517',
    ]
  ),
  new Collection(
    'X-Men: Nation X (Partial)',
    '2010-10-27',
    [
      'NationXVol11',
    ]
  ),
  new Collection(
    'Deadpool Vol. 3: X Marks the Spot',
    '2010-5-19',
    [
      'DeadpoolVol318',
    ]
  ),
  new Collection(
    'X-Men: Legacy - Emplate',
    '2010-7-28',
    [
      'XMenLegacyVol1230',
    ]
  ),
  new Collection(
    'New Mutants Vol. 1: Return of Legion',
    '2010-5-12',
    [
      'NewMutantsVol35',
    ]
  ),
  new Collection(
    'X-Necrosha (Partial)',
    '2010-12-29',
    [
      'XNecroshaTheGatheringVol11',
      'XNecroshaVol11',
      'NewMutantsVol36',
      'XForceVol321',
      'NewMutantsVol37',
      'XForceVol322',
      'NewMutantsVol38',
      'XForceVol323',
      'XMenLegacyVol1231',
      'XMenLegacyVol1232',
      'XForceVol324',
      'XMenLegacyVol1233',
      'XForceVol325',
    ]
  ),
  new Collection(
    'Uncanny X-Men: The Complete Collection by Matt Fraction Vol. 2',
    '2013-3-5',
    [
      'UncannyXMenVol1518',
      'UncannyXMenVol1519',
    ]
  ),
  new Collection(
    'X-Factor: Second Coming (Partial)',
    '2010-9-1',
    [
      'NationXXFactorVol11',
    ]
  ),
  new Collection(
    'X-Men: Nation X (Partial)',
    '2010-10-27',
    [
      'NationXVol12',
      'UncannyXMenVol1520',
      'UncannyXMenVol1521',
      'NationXVol13',
      'NationXVol14',
      'UncannyXMenVol1522',
    ]
  ),
  new Collection(
    'X-Necrosha (Partial)',
    '2010-12-29',
    [
      'XForceAnnualVol21',
    ]
  ),
  new Collection(
    'X-Necrosha (Partial)',
    '2010-12-29',
    [
      'XMenLegacyVol1234',
    ]
  ),
  new Collection(
    'New Mutants: Necrosha (Partial)',
    '2010-11-24',
    [
      'NewMutantsVol39',
      'NewMutantsVol310',
      'NewMutantsVol311',
    ]
  ),
  new Collection(
    'Cable Vol. 3: Stranded',
    '2010-5-19',
    [
      'CableVol216',
      'CableVol217',
      'CableVol218',
      'CableVol219',
      'CableVol220',
    ]
  ),
  new Collection(
    'Cable Vol. 4: Homecoming (Partial)',
    '2010-5-19',
    [
      'CableVol221',
      'CableVol222',
      'CableVol223',
      'CableVol224',
      'DeadpoolCableVol125',
    ]
  ),
  new Collection(
    'X-Men: Second Coming',
    '2011-6-22',
    [
      'SecondComingPrepareVol11',
    ]
  ),
  new Collection(
    'X-Men: Second Coming Revelations',
    '2011-7-6',
    [
      'XMenHopeVol11',
    ]
  ),
  new Collection(
    'X-Men: Second Coming',
    '2011-6-22',
    [
      'XMenSecondComingVol11',
      'UncannyXMenVol1523',
      'NewMutantsVol312',
      'XMenLegacyVol1235',
      'XForceVol326',
      'UncannyXMenVol1524',
      'NewMutantsVol313',
      'XMenLegacyVol1236',
      'XForceVol327',
      'UncannyXMenVol1525',
      'NewMutantsVol314',
      'XMenLegacyVol1237',
      'XForceVol328',
      'XMenSecondComingVol12',
    ]
  ),
  new Collection(
    'X-Men: Second Coming Revelations',
    '2011-7-6',
    [
      'XMenHellboundVol11',
      'XMenSecondComingRevelationsBlindScienceVol11',
      'XMenHellboundVol12',
      'XMenHellboundVol13',
    ]
  ),
  /**
   * Roughly ordered for flow of crossovers until here.
   */
  new Collection(
    'X-Men: Second Coming Revelations',
    '2011-7-6',
    [
      'XFactorVol3204',
      'XFactorVol3205',
      'XFactorVol3206',
    ]
  ),
  new Collection(
    'X-Men: Domino',
    '2018-4-25',
    [
      'DominoVol21',
      'DominoVol22',
      'DominoVol23',
      'DominoVol24',
    ]
  ),
  /**
   * Big gap here, and in general the contents after here need to be reviewed.
   */
  new Collection(
    'Uncanny X-Men: The Birth of Generation Hope',
    '2010-12',
    [
      'UncannyXMenVol1526',
      'UncannyXMenVol1527',
      'UncannyXMenVol1528',
      'UncannyXMenVol1529'
    ]
  ),
  new Collection(
    'Uncanny X-Men: Quarantine',
    '2011-6',
    [
      'UncannyXMenVol1530',
      'UncannyXMenVol1531',
      'UncannyXMenVol1532',
      'UncannyXMenVol1533',
      'UncannyXMenVol1534'
    ]
  ),
  new Collection(
    'Uncanny X-Men: Breaking Point',
    '2011-9',
    [
      'UncannyXMenVol1534.1',
      'UncannyXMenVol1535',
      'UncannyXMenVol1536',
      'UncannyXMenVol1537',
      'UncannyXMenVol1538',
      'UncannyXMenVol1539'
    ]
  ),
  new Collection(
    'Uncanny X-Men: Fear Itself',
    '2012-3',
    [
      'UncannyXMenVol1540',
      'UncannyXMenVol1541',
      'UncannyXMenVol1542',
      'UncannyXMenVol1543',
      'UncannyXMenVol1544'
    ]
  )
);

export class Collections {
  public static getCollections() {
    return collections;
  }
}
