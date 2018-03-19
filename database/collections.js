/**
 * The prototype for collections.
 *
 * @param {string}   title         the title of the collection
 * @param {string}   datePublished a string to be converted to a date object
 * @param {string[]} comicIds      the comics in the collection, in order
 */
function Collection(title, datePublished, comicIds) {
  this.id = title.replace(/[\W+]/g, '');
  this.title = title;

  // Create a Date object from the datePublished string
  this.date = new Date(datePublished);

  this.yearPublished = this.date.getFullYear();
  this.monthPublished = this.date.getMonth() + 1;
  this.comicIds = comicIds;
}

// These should be in reading order
var collections = [];
collections.push(
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
    'Marvel Masterworks: The Uncanny X-Men Vol. 10',
    '2017-2',
    [
      'MagikVol11',
      'MagikVol12',
      'MagikVol13',
      'MagikVol14',
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
    'Marvel Masterworks: The Uncanny X-Men Vol. 10',
    '2017-2',
    [
      'UncannyXMenVol1181',
      'UncannyXMenVol1182',
      'UncannyXMenVol1183',
      'UncannyXMenVol1184',
      'UncannyXMenVol1185',
      'UncannyXMenVol1186',
      'UncannyXMenVol1187',
      'UncannyXMenVol1188'
    ]
  ),
  new Collection(
    'X-Men Epic Collection Vol. 12: The Gift',
    '2016-1',
    [
      'UncannyXMenVol1189',
      'UncannyXMenVol1190',
      'UncannyXMenVol1191',
      'UncannyXMenVol1192',
      'XMenAnnualVol18',
      'XMenAlphaFlightVol11',
      'XMenAlphaFlightVol12',
      'UncannyXMenVol1193',
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
      'UncannyXMenVol1205',
      'UncannyXMenVol1206',
      'UncannyXMenVol1207',
      'UncannyXMenVol1208',
      'UncannyXMenVol1209',
      'XMenAnnualVol110'
    ]
  ),
  new Collection(
    'X-Men: Mutant Massacre',
    '2013-2-12',
    [
      'UncannyXMenVol1210',
      'XFactorVol19',
      'UncannyXMenVol1211',
      'XFactorVol110',
      'NewMutantsVol146',
      'ThorVol1373',
      'PowerPackVol127',
      'ThorVol1374',
      'UncannyXMenVol1212',
      'XFactorVol111',
      'DaredevilVol1238',
      'UncannyXMenVol1213',
      'UncannyXMenVol1214'
    ]
  ),
  new Collection(
    'X-Men: Old Soldiers (Partial)',
    '2004-7',
    [
      'UncannyXMenVol1215'
    ]
  ),
  new Collection(
    'Essential X-Men: Vol. 7 (Partial)',
    '2006-4-12',
    [
      'UncannyXMenVol1216',
      'UncannyXMenVol1217',
      'UncannyXMenVol1218',
      'UncannyXMenVol1219'
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
    'X-Force Omnibus',
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
    'X-Force Omnibus',
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
    'Uncollected (Shattershot event)',
    null,
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
    'X-Force Omnibus',
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
    'X-Force: The Phalanx Covenant HC (Partial)',
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
    'X-Force: The Phalanx Covenant HC (Partial)',
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
    'X-Force: The Phalanx Covenant HC (Partial)',
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
    'Generation X Classic: Vol. 1 (Partial)',
    '2010-12-15',
    [
      'GenerationXVol14'
    ]
  ),
  new Collection(
    'X-Force: The Phalanx Covenant HC (Partial)',
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
      'XMenAgeofApocalypseOneShotVol10',
      'XMenAgeofApocalypseVol11',
      'XMenAgeofApocalypseVol12',
      'XMenAgeofApocalypseVol13',
      'XMenAgeofApocalypseVol14',
      'XMenAgeofApocalypseVol15',
      'XMenAgeofApocalypseVol16'
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
  /**
   * Roughly ordered for flow of crossovers until here.
   */
  new Collection(
    'X-Men: The Adventures of Cyclops & Phoenix (Partial)',
    '2014-9-17',
    [
      'XMenBooksofAskaniVol11',
      'AskanisonVol11',
      'AskanisonVol12',
      'AskanisonVol13',
      'AskanisonVol14',
      'XMenPhoenixVol11',
      'XMenPhoenixVol12',
      'XMenPhoenixVol13'
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
    'X-Men: Age of Apocalypse: The Complete Epic Book 4 (Partial)',
    '2006-11-1',
    [
      'XManVol153',
      'XManVol154',
      'XMenPrimeVol11',
    ]
  ),
  /**
   * Big gap here, and in general the contents after here need to be reviewed.
   */
  new Collection(
    'Cable Vol. 1: Messiah War',
    '2008-12',
    ['CableVol21']
  ),
  new Collection(
    'X-Men: Messiah Complex',
    '2008-11',
    [
      'UncannyXMenVol1492',
      'UncannyXMenVol1493',
      'UncannyXMenVol1494'
   ]
  ),
  new Collection(
    'Uncanny X-Men: Divided We Stand',
    '2008-10',
    [
      'UncannyXMenVol1495',
      'UncannyXMenVol1496'
    ]
  ),
  new Collection(
    'Uncanny X-Men: Manifest Destiny',
    '2009-10',
    [
      'UncannyXMenVol1500',
      'UncannyXMenVol1501',
      'UncannyXMenVol1502',
      'UncannyXMenVol1503',
      'XMenFreeComicBookDayVol20081',
      'XMenManifestDestinyVol11',
      'XMenManifestDestinyVol12',
      'XMenManifestDestinyVol13',
      'XMenManifestDestinyVol14',
      'XMenManifestDestinyVol15'
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
    'Uncanny X-Men: The Five Lights (aka Uncanny X-Men: The Birth of Generation Hope)',
    '2010-12',
    [
      'UncannyXMenVol1526',
      'UncannyXMenVol1527',
      'UncannyXMenVol1528',
      'UncannyXMenVol1529',
      'UncannyXMenVol1534'
    ]
  ),
  new Collection(
    'X-Men: Second Coming',
    '2011-6',
    [
      'SecondComingPrepareVol11',
      'XMenSecondComingVol11',
      'XMenSecondComingVol12',
      'UncannyXMenVol1523',
      'UncannyXMenVol1524',
      'UncannyXMenVol1525',
      'NewMutantsVol312',
      'NewMutantsVol313',
      'NewMutantsVol314',
      'XMenLegacyVol1235',
      'XMenLegacyVol1236',
      'XMenLegacyVol1237',
      'XForceVol326',
      'XForceVol327',
      'XForceVol328'
    ]
  )
);
