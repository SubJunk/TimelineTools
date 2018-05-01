/**
 * The prototype for individual comics.
 *
 * @param {number}   issue
 * @param {string}   datePublished
 * @param {string}   seriesVolumeId
 * @param {string[]} [titles]
 */
function Comic(issue, datePublished, seriesVolumeId, titles) {
  // Create a Date object from the datePublished string
  this.date = new Date(datePublished);

  this.id = seriesVolumeId + issue;
  this.issue = issue;
  this.yearPublished = this.date.getFullYear();
  this.monthPublished = this.date.getMonth() + 1;
  this.seriesVolumeId = seriesVolumeId;
  this.titles = titles ? titles : [];
}

var comics = [];

/**
 * Add multiple comics in a seriesVolume.
 *
 * @param {number}   issue
 * @param {string}   datePublished
 * @param {string}   seriesVolumeId
 * @param {string[]} [titles]
 */
function addComicsInSeriesVolume(seriesVolumeId, comicsInSeriesVolume) {
  _.each(comicsInSeriesVolume, function(comic) {
    comics.push(
      new Comic(
        comic[0],
        comic[1],
        seriesVolumeId,
        comic[2]
      )
    );
  });
}

addComicsInSeriesVolume('AdventuresofCyclopsPhoenixVol1', [
  [1, '1994-5'],
  [2, '1994-6'],
  [3, '1994-7'],
  [4, '1994-8']
])
addComicsInSeriesVolume('AgeofApocalypseTheChosenVol1', [[1, '1995-4']])
addComicsInSeriesVolume('AmazingXMenVol1', [
  [1, '1995-3'],
  [2, '1995-4'],
  [3, '1995-5'],
  [4, '1995-6']
])
addComicsInSeriesVolume('ArchangelVol1', [[1, '1996-2']])
addComicsInSeriesVolume('AskanisonVol1', [
  [1, '1996-1'],
  [2, '1996-4'],
  [3, '1996-5'],
  [4, '1996-6']
])
addComicsInSeriesVolume('AstonishingXMenVol1', [
  [1, '1995-3'],
  [2, '1995-4'],
  [3, '1995-5'],
  [4, '1995-6']
])
addComicsInSeriesVolume('AvengersAnnualVol1', [[10, '1981-10']])
addComicsInSeriesVolume('AvengersVol1', [
  [263, '1986-1-10'],
  [368, '1993-11'],
  [369, '1993-12']
])
addComicsInSeriesVolume('AvengersWestCoastVol2', [[101, '1993-12']])
addComicsInSeriesVolume('BishopVol1', [
  [1, '1994-12'],
  [2, '1995-1'],
  [3, '1995-2'],
  [4, '1995-3']
])
addComicsInSeriesVolume('BlinkVol1', [
  [1, '2001-3'],
  [2, '2001-4'],
  [3, '2001-5'],
  [4, '2001-6']
])
addComicsInSeriesVolume('CableBloodMetalVol1', [
  [1, '1992-10'],
  [2, '1992-11']
])
addComicsInSeriesVolume('CableVol1', [
  [1,  '1993-5'],
  [2,  '1993-6'],
  [3,  '1993-7'],
  [4,  '1993-8'],
  [5,  '1993-11'],
  [6,  '1993-12'],
  [7,  '1994-1'],
  [8,  '1994-2'],
  [9,  '1994-3'],
  [10, '1994-4'],
  [11, '1994-5'],
  [12, '1994-6'],
  [13, '1994-7'],
  [14, '1994-8'],
  [15, '1994-9'],
  [16, '1994-10'],
  [17, '1994-11'],
  [18, '1994-12'],
  [19, '1995-1'],
  [20, '1995-2'],
  [21, '1995-7'],
  [22, '1995-8'],
  [23, '1995-9'],
  [24, '1995-10'],
  [25, '1995-11'],
  [26, '1995-12'],
  [27, '1996-1'],
  [28, '1996-2'],
  [29, '1996-3'],
  [30, '1996-4'],
  [31, '1996-5']
])
addComicsInSeriesVolume('ExcaliburVol1', [
  [71, '1993-11'],
  [78, '1994-6'],
  [79, '1994-7'],
  [80, '1994-8'],
  [81, '1994-9'],
  [82, '1994-10'],
  [95, '1996-3']
])
addComicsInSeriesVolume('FactorXVol1', [
  [1, '1995-3'],
  [2, '1995-4'],
  [3, '1995-5'],
  [4, '1995-6']
])
addComicsInSeriesVolume('FantasticFourvstheXMenVol1', [
  [1, '1987-2'],
  [2, '1987-3'],
  [3, '1987-4'],
  [4, '1987-6']
])
addComicsInSeriesVolume('FurtherAdventuresofCyclopsandPhoenixVol1', [
  [1, '1996-6'],
  [2, '1996-7'],
  [3, '1996-8'],
  [4, '1996-9']
])
addComicsInSeriesVolume('GambitandtheXTernalsVol1', [
  [1, '1995-3'],
  [2, '1995-4'],
  [3, '1995-5'],
  [4, '1995-6']
])
addComicsInSeriesVolume('GenerationNextVol1', [
  [1, '1995-3'],
  [2, '1995-4'],
  [3, '1995-5'],
  [4, '1995-6']
])
addComicsInSeriesVolume('GenerationXVol1', [
  [1, '1994-11'],
  [2, '1994-12'],
  [3, '1995-1'],
  [4, '1995-2'],
  [5, '1995-7'],
  [6, '1995-8'],
  [7, '1995-9'],
  [8, '1995-10'],
  [9, '1995-11'],
  [10, '1995-12'],
  [11, '1996-1']
])
addComicsInSeriesVolume('GenerationXAnnualVol1', [[1, '1995-11']])
addComicsInSeriesVolume('SabretoothSpecialVol1', [[1, '1996-1']])
addComicsInSeriesVolume('TalesfromtheAgeofApocalypseBytheLightVol1', [[1, '1996-12']])
addComicsInSeriesVolume('TalesfromtheAgeofApocalypseSinsterBloodlinesVol1', [[1, '1997-12']])
addComicsInSeriesVolume('ThorVol1', [
  [373, '1986-11'],
  [374, '1986-12'],
  [377, '1987-3'],
  [378, '1987-4']
])
addComicsInSeriesVolume('UncannyXMenVol1', [
  [94, '1975-8', ['The Doomsmith Scenario!']],
  [95, '1975-10', ['Warhunt!']],
  [96, '1975-12', ['Night of the Demon!']],
  [97, '1976-2', ['My Brother, My Enemy!']],
  [98, '1976-4', ['Merry Christmas, X-Men — The Sentinels Have Returned!']],
  [99, '1976-6', ['Deathstar, Rising!']],
  [100, '1976-8', ['Greater Love Hath No X-Man...']],
  [101, '1976-10', ['Like a Phoenix, from the Ashes']],
  [102, '1976-12', ['Who Will Stop the Juggernaut?']],
  [103, '1977-2', ['The Fall of the Tower']],
  [104, '1977-4', ['The Gentleman\'s Name is Magneto']],
  [105, '1977-6', ['Phoenix Unleashed!']],
  [106, '1977-8', ['Dark Shroud of the Past!']],
  [107, '1977-10', ['Where No X-Man Has Gone Before!']],
  [108, '1977-12', ['Armageddon Now']],
  [109, '1978-2', ['Home are the Heroes!']],
  [110, '1978-4', ['The \'X\'-Sanction']],
  [111, '1978-6', ['Mindgames!']],
  [112, '1978-8', ['Magneto Triumphant!']],
  [113, '1978-9', ['Showdown!']],
  [114, '1978-10', ['Desolation']],
  [115, '1978-11', ['Visions of Death!']],
  [116, '1978-12', ['To Save the Savage Land']],
  [117, '1979-1', ['Psi War!']],
  [118, '1979-2', ['The Submergence of Japan']],
  [119, '1979-3', ['\'Twas the Night Before Christmas...']],
  [120, '1979-4', ['Wanted: Wolverine! Dead or Alive!']],
  [121, '1979-5', ['Shoot-Out at the Stampede!']],
  [122, '1979-6', ['Cry for the Children!']],
  [123, '1979-7', ['Listen -- Stop Me if You\'ve Heard It -- But This One Will Kill You!']],
  [124, '1979-8', ['He Only Laughs When I Hurt!']],
  [125, '1979-9', ['There\'s Something Awful on Muir Island!']],
  [126, '1979-10', ['How Sharper Than a Serpent\'s Tooth...!']],
  [127, '1979-11', ['The Quality of Hatred!']],
  [128, '1979-12', ['The Action of the Tiger!']],
  [129, '1980-1', ['God Spare the Child...']],
  [130, '1980-2', ['Dazzler']],
  [131, '1980-3', ['Run for Your Life!']],
  [132, '1980-4', ['And Hellfire is Their Name!']],
  [133, '1980-5', ['Wolverine: Alone!']],
  [134, '1980-6', ['Too Late, the Heroes!']],
  [135, '1980-7', ['Dark Phoenix']],
  [136, '1980-8', ['Child of Light and Darkness!']],
  [137, '1980-9', ['The Fate of the Phoenix!']],
  [138, '1980-10', ['Elegy']],
  [139, '1980-11', ['...Something Wicked This Way Comes!']],
  [140, '1980-12', ['Rage!']],
  [141, '1981-1'],
  [142, '1981-2'],
  [143, '1981-3'],
  [144, '1981-4'],
  [145, '1981-5'],
  [146, '1981-6'],
  [147, '1981-7'],
  [148, '1981-8'],
  [149, '1981-9'],
  [150, '1981-10'],
  [151, '1981-11'],
  [152, '1981-12'],
  [153, '1982-1'],
  [154, '1982-2'],
  [155, '1982-3'],
  [156, '1982-4-10'],
  [157, '1982-5'],
  [158, '1982-6'],
  [159, '1982-7'],
  [160, '1982-8'],
  [161, '1982-9'],
  [162, '1982-10'],
  [163, '1982-11'],
  [164, '1982-12'],
  [165, '1983-1'],
  [166, '1983-2'],
  [167, '1983-3'],
  [168, '1983-4'],
  [169, '1983-5'],
  [170, '1983-6'],
  [171, '1983-7'],
  [172, '1983-8'],
  [173, '1983-9'],
  [174, '1983-10'],
  [175, '1983-11'],
  [176, '1983-12'],
  [177, '1984-1'],
  [178, '1984-2'],
  [179, '1984-3'],
  [180, '1984-4'],
  [181, '1984-5'],
  [182, '1984-6'],
  [183, '1984-7'],
  [184, '1984-8'],
  [185, '1984-9'],
  [186, '1984-10'],
  [187, '1984-11'],
  [188, '1984-12'],
  [189, '1985-1'],
  [190, '1985-2'],
  [191, '1985-3'],
  [192, '1985-4'],
  [193, '1985-5'],
  [194, '1985-6'],
  [195, '1985-7'],
  [196, '1985-8'],
  [197, '1985-9'],
  [198, '1985-10'],
  [199, '1985-11'],
  [200, '1985-12'],
  [201, '1986-1'],
  [202, '1986-2'],
  [203, '1986-3'],
  [204, '1986-4'],
  [205, '1986-5'],
  [206, '1986-6'],
  [207, '1986-7'],
  [208, '1986-8'],
  [209, '1986-9'],
  [210, '1986-10'],
  [211, '1986-11'],
  [212, '1986-12'],
  [213, '1987-1'],
  [214, '1987-2'],
  [215, '1987-3'],
  [216, '1987-4'],
  [217, '1987-5'],
  [218, '1987-6'],
  [219, '1987-7'],
  [220, '1987-8'],
  [221, '1987-9'],
  [222, '1987-10'],
  [223, '1987-11'],
  [224, '1987-12'],
  [225, '1988-1'],
  [226, '1988-2'],
  [227, '1988-3'],
  [228, '1988-4'],
  [229, '1988-5'],
  [230, '1988-6'],
  [231, '1988-7'],
  [232, '1988-8'],
  [233, '1988-9-10'],
  [234, '1988-9-20'],
  [235, '1988-10-10'],
  [236, '1988-10-20'],
  [237, '1988-11-10'],
  [238, '1988-11-20'],
  [239, '1988-12'],
  [240, '1989-1'],
  [241, '1989-2'],
  [242, '1989-3'],
  [243, '1989-4'],
  [244, '1989-5'],
  [245, '1989-6'],
  [246, '1989-7'],
  [247, '1989-8'],
  [248, '1989-9'],
  [249, '1989-10-10'],
  [250, '1989-10-20'],
  [251, '1989-11-10'],
  [252, '1989-11-20'],
  [253, '1989-11-30'],
  [254, '1989-12-10'],
  [255, '1989-12-20'],
  [256, '1989-12-30'],
  [257, '1990-1'],
  [258, '1990-2'],
  [259, '1990-3'],
  [260, '1990-4'],
  [261, '1990-5'],
  [262, '1990-6'],
  [263, '1990-7-10'],
  [264, '1990-7-20'],
  [265, '1990-8-10'],
  [266, '1990-8-20'],
  [267, '1990-9-10'],
  [268, '1990-9-20'],
  [269, '1990-10'],
  [270, '1990-11'],
  [271, '1990-12'],
  [272, '1991-1'],
  [273, '1991-2'],
  [274, '1991-3'],
  [275, '1991-4'],
  [276, '1991-5'],
  [277, '1991-6'],
  [278, '1991-7'],
  [279, '1991-8'],
  [280, '1991-9'],
  [281, '1991-10'],
  [282, '1991-11'],
  [283, '1991-12'],
  [284, '1992-1'],
  [285, '1992-2'],
  [286, '1992-3'],
  [287, '1992-4'],
  [288, '1992-5'],
  [289, '1992-6'],
  [290, '1992-7'],
  [291, '1992-8'],
  [292, '1992-9'],
  [293, '1992-10'],
  [294, '1992-11'],
  [295, '1992-12'],
  [296, '1993-1'],
  [297, '1993-2'],
  [298, '1993-3'],
  [299, '1993-4'],
  [300, '1993-5'],
  [301, '1993-6'],
  [302, '1993-7'],
  [303, '1993-8'],
  [304, '1993-9'],
  [305, '1993-10'],
  [306, '1993-11'],
  [307, '1993-12'],
  [308, '1994-1'],
  [309, '1994-2'],
  [310, '1994-3'],
  [311, '1994-4'],
  [312, '1994-5'],
  [313, '1994-6'],
  [314, '1994-7'],
  [315, '1994-8'],
  [316, '1994-9'],
  [317, '1994-10'],
  [318, '1994-11'],
  [319, '1994-12'],
  [320, '1995-1'],
  [321, '1995-2'],
  [322, '1995-7'],
  [323, '1995-8'],
  [324, '1995-9'],
  [325, '1995-10'],
  [326, '1995-11'],
  [327, '1995-12'],
  [328, '1996-1'],
  [329, '1996-2'],
  [330, '1996-3'],
  [331, '1996-4'],
  [332, '1996-5'],
/**
 * Complete until here
 */
  [492, '2008-1', ['Messiah Complex: Chapter Two']],
  [493, '2008-2', ['Messiah Complex: Chapter Six']],
  [494, '2008-3', ['Messiah Complex: Chapter Ten']],
  [495, '2008-4', ['X-Men: Divided (Part 1)']],
  [496, '2008-5', ['X-Men: Divided (Part 2)']],
  [500, '2008-9', ['SFX (1 of 3)']],
  [501, '2008-10', ['SFX (2 of 3): All Tomorrow\'s Parties']],
  [502, '2008-11', ['SFX (3 of 3) - Beginning to See the Light']],
  [503, '2008-12', ['Beginning To See The Light']],
  [523, '2010-6', ['Second Coming (Chapter Two)']],
  [524, '2010-7', ['Second Coming (Chapter Six)']],
  [525, '2010-8', ['Second Coming (Chapter Ten)']],
  [540, '2011-9', ['Uncanny X-Men Vol 1 #540']],
  [541, '2011-9', ['Uncanny X-Men Vol 1 #541']],
  [542, '2011-10', ['Uncanny X-Men Vol 1 #542']],
  [543, '2011-11', ['Uncanny X-Men Vol 1 #543']],
  [544, '2011-12', ['Uncanny']],
  [534.1, '2011-6', ['Uncanny X-Men Vol 1 #534.1']],
  [535, '2011-6', ['Breaking Point (Part One)']],
  [536, '2011-6', ['Breaking Point: Part Two']],
  [537, '2011-7', ['Breaking Point (Part 3)']],
  [538, '2011-8', ['Breaking Point (Conclusion)']],
  [539, '2011-8', ['Losing Hope']],
  [530, '2011-1', ['Quarantine: Part 1']],
  [531, '2011-2', ['Quarantine (Part Two)']],
  [532, '2011-3', ['Quarantine (Part Three)']],
  [533, '2011-4', ['Quarantine (Part Four)']],
  [534, '2011-5', ['Quarantine (Part Five)']],
  [526, '2010-9', ['The Five Lights (Part 1): Freak Like Me', 'Rebuilding']],
  [527, '2010-10', ['The Five Lights (Part 2) - Velocidad']],
  [528, '2010-11', ['The Five Lights (Part 3)']],
  [529, '2010-12', ['The Five Lights (Part Four)']]
])
addComicsInSeriesVolume('WeaponXVol1', [
  [1, '1995-3'],
  [2, '1995-4'],
  [3, '1995-5'],
  [4, '1995-6']
])
addComicsInSeriesVolume('WolverineVol1', [
  [1, '1982-9'],
  [2, '1982-10'],
  [3, '1982-11'],
  [4, '1982-12']
])
addComicsInSeriesVolume('WolverineVol2', [
  [75, '1993-11'],
  [85, '1994-9'],
  [101, '1996-5']
])
addComicsInSeriesVolume('WolverineGambitVictimsVol1', [
  [1, '1995-9'],
  [2, '1995-10'],
  [3, '1995-11'],
  [4, '1995-12'],
])
addComicsInSeriesVolume('XCalibreVol1', [
  [1, '1995-3'],
  [2, '1995-4'],
  [3, '1995-5'],
  [4, '1995-6']
])
addComicsInSeriesVolume('XFactorVol1', [
  [1, '1986-2-10'],
  [9, '1986-10'],
  [10, '1986-11'],
  [11, '1986-12'],
  [12, '1987-1'],
  [13, '1987-2'],
  [14, '1987-3'],
  [15, '1987-4'],
  [16, '1987-5'],
  [17, '1987-6'],
  [19, '1987-8'],
  [20, '1987-9'],
  [21, '1987-10'],
  [22, '1987-11'],
  [23, '1987-12'],
  [24, '1988-1'],
  [25, '1988-2'],
  [26, '1988-3'],
  [27, '1988-4'],
  [28, '1988-5'],
  [29, '1988-6'],
  [30, '1988-7'],
  [31, '1988-8'],
  [32, '1988-9'],
  [33, '1988-10'],
  [34, '1988-11'],
  [35, '1988-12'],
  [36, '1989-1'],
  [37, '1989-2'],
  [38, '1989-3'],
  [39, '1989-4'],
  [40, '1989-5'],
  [60, '1990-11'],
  [61, '1990-12'],
  [62, '1991-1'],
  [63, '1991-2'],
  [64, '1991-3'],
  [65, '1991-4'],
  [66, '1991-5'],
  [67, '1991-6'],
  [68, '1991-7'],
  [69, '1991-8'],
  [70, '1991-9'],
  [84, '1992-11'],
  [85, '1992-12'],
  [86, '1993-1'],
  [87, '1993-2'],
  [88, '1993-3'],
  [89, '1993-4'],
  [90, '1993-5'],
  [91, '1993-6'],
  [92, '1993-7'],
  [106, '1994-9'],
  [107, '1994-10'],
  [108, '1994-11'],
  [109, '1994-12']
])
addComicsInSeriesVolume('XFactorAnnualVol1', [
  [2, '1987-10'],
  [3, '1988-8'],
  [4, '1989-10'],
  [6, '1991-8'],
  [7, '1992-5']
])
addComicsInSeriesVolume('XForceVol1', [
  [1, '1991-8'],
  [2, '1991-9'],
  [3, '1991-10'],
  [4, '1991-11'],
  [5, '1991-12'],
  [6, '1992-1'],
  [7, '1992-2'],
  [8, '1992-3'],
  [9, '1992-4'],
  [10, '1992-5'],
  [11, '1992-6'],
  [12, '1992-7'],
  [13, '1992-8'],
  [14, '1992-9'],
  [15, '1992-10'],
  [16, '1992-11'],
  [17, '1992-12'],
  [18, '1993-1'],
  [19, '1993-2'],
  [20, '1993-3'],
  [21, '1993-4'],
  [22, '1993-5'],
  [23, '1993-6'],
  [24, '1993-7'],
  [25, '1993-8'],
  [26, '1993-9'],
  [27, '1993-10'],
  [28, '1993-11'],
  [29, '1993-12'],
  [30, '1994-1'],
  [31, '1994-2'],
  [32, '1994-3'],
  [33, '1994-4'],
  [34, '1994-5'],
  [35, '1994-6'],
  [36, '1994-7'],
  [37, '1994-8'],
  [38, '1994-9'],
  [39, '1994-10'],
  [40, '1994-11'],
  [41, '1994-12'],
  [42, '1995-1'],
  [43, '1995-2'],
  [44, '1995-7'],
  [45, '1995-8'],
  [46, '1995-9'],
  [47, '1995-10'],
  [48, '1995-11'],
  [49, '1995-12'],
  [50, '1996-1'],
  [51, '1996-2'],
  [52, '1996-3'],
  [53, '1996-4'],
  [54, '1996-5'],
  [55, '1996-6'],
  [56, '1996-7']
])
addComicsInSeriesVolume('XForceCableAnnualVol1', [
  [1, '1995-12']
])
addComicsInSeriesVolume('XManVol1', [
  [-1, '1997-7'],
  [1, '1995-3'],
  [2, '1995-4'],
  [3, '1995-5'],
  [4, '1995-6'],
  [5, '1995-7'],
  [6, '1995-8'],
  [7, '1995-9'],
  [8, '1995-10'],
  [9, '1995-11'],
  [10, '1995-12'],
  [11, '1996-1'],
  [12, '1996-2'],
  [13, '1996-3'],
  [14, '1996-4'],
  [53, '1999-7'],
  [54, '1999-8']
])
addComicsInSeriesVolume('XManAnnualVol1', [[1, '1996-12']])
addComicsInSeriesVolume('XMenVol2', [
  [1, '1991-10'],
  [2, '1991-11'],
  [3, '1991-12'],
  [4, '1992-1'],
  [5, '1992-2'],
  [6, '1992-3'],
  [7, '1992-4'],
  [8, '1992-5'],
  [9, '1992-6'],
  [10, '1992-7'],
  [11, '1992-8'],
  [12, '1992-9'],
  [13, '1992-10'],
  [14, '1992-11'],
  [15, '1992-12'],
  [16, '1993-1'],
  [17, '1993-2'],
  [18, '1993-3'],
  [19, '1993-4'],
  [20, '1993-5'],
  [21, '1993-6'],
  [22, '1993-7'],
  [23, '1993-8'],
  [24, '1993-9'],
  [25, '1993-10'],
  [26, '1993-11'],
  [27, '1993-12'],
  [28, '1994-1'],
  [29, '1994-2'],
  [30, '1994-3'],
  [31, '1994-4'],
  [32, '1994-5'],
  [33, '1994-6'],
  [34, '1994-7'],
  [35, '1994-8'],
  [36, '1994-9'],
  [37, '1994-10'],
  [38, '1994-11'],
  [39, '1994-12'],
  [40, '1995-1'],
  [41, '1995-2'],
  [42, '1995-7'],
  [43, '1995-8'],
  [44, '1995-9'],
  [45, '1995-10'],
  [46, '1995-11'],
  [47, '1995-12'],
  [48, '1996-1'],
  [49, '1996-2'],
  [50, '1996-3'],
  [51, '1996-4'],
  [52, '1996-5']
])
addComicsInSeriesVolume('XMenAgeofApocalypseVol1', [
  [1, '2005-3-2'],
  [2, '2005-3-9'],
  [3, '2005-3-16'],
  [4, '2005-3-23'],
  [5, '2005-3-30'],
  [6, '2005-4-27']
])
addComicsInSeriesVolume('XMenAgeofApocalypseOneShotVol1', [[0, '2005-3-2']])
addComicsInSeriesVolume('XMenAlphaVol1', [[1, '1995-2']])
addComicsInSeriesVolume('XMenAnnualVol1', [
  [3, '1979-8'],
  [4, '1980-11'],
  [5, '1981-11'],
  [6, '1982-11'],
  [7, '1983-12'],
  [8, '1984-9'],
  [10, '1987-1'],
  [11, '1987-11'],
  [12, '1988-10'],
  [13, '1989-8'],
  [15, '1991-8'],
  [16, '1992-5'],
  [17, '1993-6'],
  [18, '1994-7'],
  [19, '1995-11']
])
addComicsInSeriesVolume('XMenAnnualVol2', [
  [1, '1992-5'],
  [2, '1993-10']
])
addComicsInSeriesVolume('XMenAnnualVol3', [[1, '1995-10']])
addComicsInSeriesVolume('XMenBooksofAskaniVol1', [[1, '1995-2-1']])
addComicsInSeriesVolume('XMenBroodVol1', [
  [1, '1996-9'],
  [2, '1996-10'],
])
addComicsInSeriesVolume('XMenChroniclesVol1', [
  [1, '1995-3'],
  [2, '1995-6']
])
addComicsInSeriesVolume('XMenClanDestineVol1', [
  [1, '1996-10'],
  [2, '1996-11']
])
addComicsInSeriesVolume('XMenOmegaVol1', [[1, '1995-6']])
addComicsInSeriesVolume('XMenPrimeVol1', [[1, '1995-7']])
addComicsInSeriesVolume('XMenPhoenixVol1', [
  [1, '1999-12'],
  [2, '2000-1'],
  [3, '2000-3']
])
addComicsInSeriesVolume('XMenUnlimitedVol1', [
  [1, '1993-6'],
  [2, '1993-9'],
  [3, '1993-12'],
  [4, '1994-3'],
  [5, '1994-6'],
  [6, '1994-9'],
  [7, '1994-12'],
  [8, '1995-10'],
  [9, '1995-12'],
  [10, '1996-3']
])
addComicsInSeriesVolume('XMenvstheAvengersVol1', [
  [1, '1987-4'],
  [2, '1987-5'],
  [3, '1987-6'],
  [4, '1987-7']
])
addComicsInSeriesVolume('XUniverseVol1', [
  [1, '1995-5'],
  [2, '1995-6']
])
addComicsInSeriesVolume('XavierInstituteAlumniYearbookVol1', [[1, '1996-12']])

comics.push(
  new Comic(1, '2008-5', 'CableVol2', ['War Baby (Chapter 1)']),

  new Comic(339, '1988-3', 'CaptainAmericaVol1'),

  new Comic(238, '1987-1', 'DaredevilVol1'),
  new Comic(252, '1988-3', 'DaredevilVol1'),

  new Comic(1, '1994-8', 'DeadpoolVol1'),
  new Comic(2, '1994-9', 'DeadpoolVol1'),
  new Comic(3, '1994-10', 'DeadpoolVol1'),
  new Comic(4, '1994-11', 'DeadpoolVol1'),

  new Comic(1, '1993-8', 'DeadpoolTheCircleChaseVol1'),
  new Comic(2, '1993-9', 'DeadpoolTheCircleChaseVol1'),
  new Comic(3, '1993-10', 'DeadpoolTheCircleChaseVol1'),
  new Comic(4, '1993-11', 'DeadpoolTheCircleChaseVol1'),

  new Comic(1, '2014-7-2', 'DeadpoolvsXForceVol1'),
  new Comic(2, '2014-7-23', 'DeadpoolvsXForceVol1'),
  new Comic(3, '2014-8-20', 'DeadpoolvsXForceVol1'),
  new Comic(4, '2014-9-3', 'DeadpoolvsXForceVol1'),

  new Comic(286, '1986-1-10', 'FantasticFourVol1'),
  new Comic(312, '1988-3', 'FantasticFourVol1'),

  new Comic(1, '1993-12', 'GambitVol1'),
  new Comic(2, '1994-1', 'GambitVol1'),
  new Comic(3, '1994-2', 'GambitVol1'),
  new Comic(4, '1994-3', 'GambitVol1'),

  new Comic(26, '1992-6', 'GhostRiderVol3'),
  new Comic(27, '1992-7', 'GhostRiderVol3'),

  new Comic(340, '1988-2', 'IncredibleHulkVol1'),

  new Comic(14, '1977-8', 'IronFistVol1', ['Snowfire']),
  new Comic(15, '1977-9', 'IronFistVol1', ['Enter, the X-Men']),

  new Comic(1, '1983-12', 'MagikVol1'),
  new Comic(2, '1984-1', 'MagikVol1'),
  new Comic(3, '1984-2', 'MagikVol1'),
  new Comic(4, '1984-3', 'MagikVol1'),

  new Comic(5, '1983-1', 'MarvelGraphicNovelVol1'),

  new Comic(1976, '1976-12', 'MarvelTeamUpVol1', ['The Lords of Light and Darkness!']),
  new Comic(53, '1977-1', 'MarvelTeamUpVol1', ['Nightmare in New Mexico!']),
  new Comic(69, '1978-5', 'MarvelTeamUpVol1', ['Night of the Living God!']),
  new Comic(70, '1978-6', 'MarvelTeamUpVol1', ['Whom Gods Destroy!']),

  new Comic(46, '1986-12', 'NewMutantsVol1'),
  new Comic(55, '1987-9', 'NewMutantsVol1'),
  new Comic(56, '1987-10', 'NewMutantsVol1'),
  new Comic(57, '1987-11', 'NewMutantsVol1'),
  new Comic(58, '1987-12', 'NewMutantsVol1'),
  new Comic(59, '1988-1', 'NewMutantsVol1'),
  new Comic(60, '1988-2', 'NewMutantsVol1'),
  new Comic(61, '1988-3', 'NewMutantsVol1'),
  new Comic(62, '1988-4', 'NewMutantsVol1'),
  new Comic(63, '1988-5', 'NewMutantsVol1'),
  new Comic(64, '1988-6', 'NewMutantsVol1'),
  new Comic(65, '1988-7', 'NewMutantsVol1'),
  new Comic(66, '1988-8', 'NewMutantsVol1'),
  new Comic(67, '1988-9', 'NewMutantsVol1'),
  new Comic(68, '1988-10', 'NewMutantsVol1'),
  new Comic(69, '1988-11', 'NewMutantsVol1'),
  new Comic(70, '1988-12', 'NewMutantsVol1'),
  new Comic(71, '1989-1', 'NewMutantsVol1'),
  new Comic(72, '1989-2', 'NewMutantsVol1'),
  new Comic(73, '1989-3', 'NewMutantsVol1'),
  new Comic(87, '1990-3', 'NewMutantsVol1'),
  new Comic(88, '1990-4', 'NewMutantsVol1'),
  new Comic(89, '1990-5', 'NewMutantsVol1'),
  new Comic(90, '1990-6', 'NewMutantsVol1'),
  new Comic(91, '1990-7', 'NewMutantsVol1'),
  new Comic(92, '1990-8', 'NewMutantsVol1'),
  new Comic(93, '1990-9', 'NewMutantsVol1'),
  new Comic(94, '1990-10', 'NewMutantsVol1'),
  new Comic(95, '1990-11', 'NewMutantsVol1'),
  new Comic(96, '1990-12', 'NewMutantsVol1'),
  new Comic(97, '1991-1', 'NewMutantsVol1'),
  new Comic(98, '1991-2', 'NewMutantsVol1'),
  new Comic(99, '1991-3', 'NewMutantsVol1'),
  new Comic(100, '1991-4', 'NewMutantsVol1'),

  new Comic(12, '2010-6', 'NewMutantsVol3', ['Second Coming (Chapter Three)']),
  new Comic(13, '2010-7', 'NewMutantsVol3', ['Second Coming (Chapter Seven)']),
  new Comic(14, '2010-8', 'NewMutantsVol3', ['Second Coming (Chapter Eleven)']),

  new Comic(4, '1988-9', 'NewMutantsAnnualVol1'),
  new Comic(7, '1991-8', 'NewMutantsAnnualVol1'),

  new Comic(31, '1993-1', 'NewWarriorsVol1'),
  new Comic(45, '1994-3', 'NewWarriorsVol1'),
  new Comic(46, '1994-4', 'NewWarriorsVol1'),

  new Comic(1, '1985-11', 'NightcrawlerVol1'),
  new Comic(2, '1985-12', 'NightcrawlerVol1'),
  new Comic(3, '1986-1', 'NightcrawlerVol1'),
  new Comic(4, '1986-2', 'NightcrawlerVol1'),

  new Comic(20, '1993-12', 'NomadVol2'),

  new Comic(27, '1986-12', 'PowerPackVol1'),
  new Comic(35, '1988-2', 'PowerPackVol1'),

  new Comic(1, '2010-4', 'SecondComingPrepareVol1', ['Where Were You?']),

  new Comic(1, '1984-5', 'SecretWarsVol1'),
  new Comic(2, '1984-6', 'SecretWarsVol1'),
  new Comic(3, '1984-7', 'SecretWarsVol1'),
  new Comic(4, '1984-8', 'SecretWarsVol1'),
  new Comic(5, '1984-9', 'SecretWarsVol1'),
  new Comic(6, '1984-10', 'SecretWarsVol1'),
  new Comic(7, '1984-11', 'SecretWarsVol1'),
  new Comic(8, '1984-12', 'SecretWarsVol1'),
  new Comic(9, '1985-1', 'SecretWarsVol1'),
  new Comic(10, '1985-2', 'SecretWarsVol1'),
  new Comic(11, '1985-3', 'SecretWarsVol1'),
  new Comic(12, '1985-4', 'SecretWarsVol1'),
  new Comic(16, '1991-11', 'SpiderManVol1'),

  new Comic(1, '1993-1-1', 'StryfesStrikeFileVol1'),

  new Comic(1, '1975-5', 'GiantSizeXMenVol1', ['Deadly Genesis!', 'Call Him...Cyclops', 'I, the Iceman', 'The Female of the Species!']),

  new Comic(60, '1994-4', 'WhatIfVol2'),

  new Comic(26, '2010-6', 'XForceVol3', ['Second Coming (Chapter Five)']),
  new Comic(27, '2010-7', 'XForceVol3', ['Second Coming (Chapter Nine)']),
  new Comic(28, '2010-9', 'XForceVol3', ['Second Coming, Chapter 13']),

  new Comic(1, '1992-5', 'XForceAnnualVol1'),
  new Comic(2, '1993-10', 'XForceAnnualVol1'),
  new Comic(3, '1994-10', 'XForceAnnualVol1'),

  new Comic(1, '1985-12', 'XMenAlphaFlightVol1'),
  new Comic(2, '1986-1', 'XMenAlphaFlightVol1'),

  new Comic(1, '2008-5', 'XMenFreeComicBookDayVol2008', ['X-Men: Pixies & Demons']),

  new Comic(235, '2010-6', 'XMenLegacyVol1', ['Second Coming (Chapter Four)']),
  new Comic(236, '2010-7', 'XMenLegacyVol1', ['Second Coming (Chapter Eight)']),
  new Comic(237, '2010-8', 'XMenLegacyVol1', ['Second Coming (Chapter Twelve)']),

  new Comic(1, '2008-11', 'XMenManifestDestinyVol1', ['Untitled']),
  new Comic(2, '2008-12', 'XMenManifestDestinyVol1', ['Kill or Cure (Part 2)','Good With the Bad','Flaw']),
  new Comic(3, '2009-1', 'XMenManifestDestinyVol1', ['Kill or Cure (Part 3)','Abomination','Uncheerable']),
  new Comic(4, '2009-2', 'XMenManifestDestinyVol1', ['Kill or Cure (Part 4)','Mercury','Work It Out']),
  new Comic(5, '2009-3', 'XMenManifestDestinyVol1', ['Kill or Cure (Part 5)','Nick\'s','Dazzler: Solo']),

  new Comic(1, '2010-5', 'XMenSecondComingVol1', ['Second Coming, Chapter One']),
  new Comic(2, '2010-9', 'XMenSecondComingVol1', ['Second Coming Chapter XIV']),

  new Comic(1, '1994-1-1', 'XMenTheWeddingAlbumVol1'),

  new Comic(1, '1988-10', 'XTerminatorsVol1'),
  new Comic(2, '1988-11', 'XTerminatorsVol1'),
  new Comic(3, '1988-12', 'XTerminatorsVol1'),
  new Comic(4, '1989-1', 'XTerminatorsVol1')
);