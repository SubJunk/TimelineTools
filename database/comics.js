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
comics.push(
  new Comic(10, '1981-10', 'AvengersAnnualVol1'),

  new Comic(263, '1986-1-10', 'AvengersVol1'),
  new Comic(368, '1993-11', 'AvengersVol1'),
  new Comic(369, '1993-12', 'AvengersVol1'),

  new Comic(101, '1993-12', 'AvengersWestCoastVol2'),

  new Comic(1, '1996-12', 'BlackKnightExodusVol1'),

  new Comic(1, '1992-10', 'CableBloodMetalVol1'),
  new Comic(2, '1992-11', 'CableBloodMetalVol1'),

  new Comic(1, '1993-5', 'CableVol1'),
  new Comic(2, '1993-6', 'CableVol1'),
  new Comic(3, '1993-7', 'CableVol1'),
  new Comic(4, '1993-8', 'CableVol1'),
  new Comic(5, '1993-11', 'CableVol1'),
  new Comic(6, '1993-12', 'CableVol1'),
  new Comic(7, '1994-1', 'CableVol1'),
  new Comic(8, '1994-2', 'CableVol1'),
  new Comic(9, '1994-3', 'CableVol1'),
  new Comic(10, '1994-4', 'CableVol1'),
  new Comic(11, '1994-5', 'CableVol1'),
  new Comic(12, '1994-6', 'CableVol1'),
  new Comic(13, '1994-7', 'CableVol1'),
  new Comic(14, '1994-8', 'CableVol1'),
  // new Comic(15, '1994-9', 'CableVol1'),
  // new Comic(16, '1994-10', 'CableVol1'),

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

  new Comic(71, '1993-11', 'ExcaliburVol1'),
  new Comic(78, '1994-6', 'ExcaliburVol1'),
  new Comic(79, '1994-7', 'ExcaliburVol1'),
  new Comic(80, '1994-8', 'ExcaliburVol1'),
  new Comic(81, '1994-9', 'ExcaliburVol1'),
  new Comic(82, '1994-10', 'ExcaliburVol1'),

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

  new Comic(373, '1986-11', 'ThorVol1'),
  new Comic(374, '1986-12', 'ThorVol1'),

  new Comic(1, '1975-5', 'GiantSizeXMenVol1', ['Deadly Genesis!', 'Call Him...Cyclops', 'I, the Iceman', 'The Female of the Species!']),

  new Comic(94, '1975-8', 'UncannyXMenVol1', ['The Doomsmith Scenario!']),
  new Comic(95, '1975-10', 'UncannyXMenVol1', ['Warhunt!']),
  new Comic(96, '1975-12', 'UncannyXMenVol1', ['Night of the Demon!']),
  new Comic(97, '1976-2', 'UncannyXMenVol1', ['My Brother, My Enemy!']),
  new Comic(98, '1976-4', 'UncannyXMenVol1', ['Merry Christmas, X-Men — The Sentinels Have Returned!']),
  new Comic(99, '1976-6', 'UncannyXMenVol1', ['Deathstar, Rising!']),
  new Comic(100, '1976-8', 'UncannyXMenVol1', ['Greater Love Hath No X-Man...']),
  new Comic(101, '1976-10', 'UncannyXMenVol1', ['Like a Phoenix, from the Ashes']),
  new Comic(102, '1976-12', 'UncannyXMenVol1', ['Who Will Stop the Juggernaut?']),
  new Comic(103, '1977-2', 'UncannyXMenVol1', ['The Fall of the Tower']),
  new Comic(104, '1977-4', 'UncannyXMenVol1', ['The Gentleman\'s Name is Magneto']),
  new Comic(105, '1977-6', 'UncannyXMenVol1', ['Phoenix Unleashed!']),
  new Comic(106, '1977-8', 'UncannyXMenVol1', ['Dark Shroud of the Past!']),
  new Comic(107, '1977-10', 'UncannyXMenVol1', ['Where No X-Man Has Gone Before!']),
  new Comic(108, '1977-12', 'UncannyXMenVol1', ['Armageddon Now']),
  new Comic(109, '1978-2', 'UncannyXMenVol1', ['Home are the Heroes!']),
  new Comic(110, '1978-4', 'UncannyXMenVol1', ['The \'X\'-Sanction']),
  new Comic(111, '1978-6', 'UncannyXMenVol1', ['Mindgames!']),
  new Comic(112, '1978-8', 'UncannyXMenVol1', ['Magneto Triumphant!']),
  new Comic(113, '1978-9', 'UncannyXMenVol1', ['Showdown!']),
  new Comic(114, '1978-10', 'UncannyXMenVol1', ['Desolation']),
  new Comic(115, '1978-11', 'UncannyXMenVol1', ['Visions of Death!']),
  new Comic(116, '1978-12', 'UncannyXMenVol1', ['To Save the Savage Land']),
  new Comic(117, '1979-1', 'UncannyXMenVol1', ['Psi War!']),
  new Comic(118, '1979-2', 'UncannyXMenVol1', ['The Submergence of Japan']),
  new Comic(119, '1979-3', 'UncannyXMenVol1', ['\'Twas the Night Before Christmas...']),
  new Comic(120, '1979-4', 'UncannyXMenVol1', ['Wanted: Wolverine! Dead or Alive!']),
  new Comic(121, '1979-5', 'UncannyXMenVol1', ['Shoot-Out at the Stampede!']),
  new Comic(122, '1979-6', 'UncannyXMenVol1', ['Cry for the Children!']),
  new Comic(123, '1979-7', 'UncannyXMenVol1', ['Listen -- Stop Me if You\'ve Heard It -- But This One Will Kill You!']),
  new Comic(124, '1979-8', 'UncannyXMenVol1', ['He Only Laughs When I Hurt!']),
  new Comic(125, '1979-9', 'UncannyXMenVol1', ['There\'s Something Awful on Muir Island!']),
  new Comic(126, '1979-10', 'UncannyXMenVol1', ['How Sharper Than a Serpent\'s Tooth...!']),
  new Comic(127, '1979-11', 'UncannyXMenVol1', ['The Quality of Hatred!']),
  new Comic(128, '1979-12', 'UncannyXMenVol1', ['The Action of the Tiger!']),
  new Comic(129, '1980-1', 'UncannyXMenVol1', ['God Spare the Child...']),
  new Comic(130, '1980-2', 'UncannyXMenVol1', ['Dazzler']),
  new Comic(131, '1980-3', 'UncannyXMenVol1', ['Run for Your Life!']),
  new Comic(132, '1980-4', 'UncannyXMenVol1', ['And Hellfire is Their Name!']),
  new Comic(133, '1980-5', 'UncannyXMenVol1', ['Wolverine: Alone!']),
  new Comic(134, '1980-6', 'UncannyXMenVol1', ['Too Late, the Heroes!']),
  new Comic(135, '1980-7', 'UncannyXMenVol1', ['Dark Phoenix']),
  new Comic(136, '1980-8', 'UncannyXMenVol1', ['Child of Light and Darkness!']),
  new Comic(137, '1980-9', 'UncannyXMenVol1', ['The Fate of the Phoenix!']),
  new Comic(138, '1980-10', 'UncannyXMenVol1', ['Elegy']),
  new Comic(139, '1980-11', 'UncannyXMenVol1', ['...Something Wicked This Way Comes!']),
  new Comic(140, '1980-12', 'UncannyXMenVol1', ['Rage!']),
  new Comic(141, '1981-1', 'UncannyXMenVol1'),
  new Comic(142, '1981-2', 'UncannyXMenVol1'),
  new Comic(143, '1981-3', 'UncannyXMenVol1'),
  new Comic(144, '1981-4', 'UncannyXMenVol1'),
  new Comic(145, '1981-5', 'UncannyXMenVol1'),
  new Comic(146, '1981-6', 'UncannyXMenVol1'),
  new Comic(147, '1981-7', 'UncannyXMenVol1'),
  new Comic(148, '1981-8', 'UncannyXMenVol1'),
  new Comic(149, '1981-9', 'UncannyXMenVol1'),
  new Comic(150, '1981-10', 'UncannyXMenVol1'),
  new Comic(151, '1981-11', 'UncannyXMenVol1'),
  new Comic(152, '1981-12', 'UncannyXMenVol1'),
  new Comic(153, '1982-1', 'UncannyXMenVol1'),
  new Comic(154, '1982-2', 'UncannyXMenVol1'),
  new Comic(155, '1982-3', 'UncannyXMenVol1'),
  new Comic(156, '1982-4-10', 'UncannyXMenVol1'),
  new Comic(157, '1982-5', 'UncannyXMenVol1'),
  new Comic(158, '1982-6', 'UncannyXMenVol1'),
  new Comic(159, '1982-7', 'UncannyXMenVol1'),
  new Comic(160, '1982-8', 'UncannyXMenVol1'),
  new Comic(161, '1982-9', 'UncannyXMenVol1'),
  new Comic(162, '1982-10', 'UncannyXMenVol1'),
  new Comic(163, '1982-11', 'UncannyXMenVol1'),
  new Comic(164, '1982-12', 'UncannyXMenVol1'),
  new Comic(165, '1983-1', 'UncannyXMenVol1'),
  new Comic(166, '1983-2', 'UncannyXMenVol1'),
  new Comic(167, '1983-3', 'UncannyXMenVol1'),
  new Comic(168, '1983-4', 'UncannyXMenVol1'),
  new Comic(169, '1983-5', 'UncannyXMenVol1'),
  new Comic(170, '1983-6', 'UncannyXMenVol1'),
  new Comic(171, '1983-7', 'UncannyXMenVol1'),
  new Comic(172, '1983-8', 'UncannyXMenVol1'),
  new Comic(173, '1983-9', 'UncannyXMenVol1'),
  new Comic(174, '1983-10', 'UncannyXMenVol1'),
  new Comic(175, '1983-11', 'UncannyXMenVol1'),
  new Comic(176, '1983-12', 'UncannyXMenVol1'),
  new Comic(177, '1984-1', 'UncannyXMenVol1'),
  new Comic(178, '1984-2', 'UncannyXMenVol1'),
  new Comic(179, '1984-3', 'UncannyXMenVol1'),
  new Comic(180, '1984-4', 'UncannyXMenVol1'),
  new Comic(181, '1984-5', 'UncannyXMenVol1'),
  new Comic(182, '1984-6', 'UncannyXMenVol1'),
  new Comic(183, '1984-7', 'UncannyXMenVol1'),
  new Comic(184, '1984-8', 'UncannyXMenVol1'),
  new Comic(185, '1984-9', 'UncannyXMenVol1'),
  new Comic(186, '1984-10', 'UncannyXMenVol1'),
  new Comic(187, '1984-11', 'UncannyXMenVol1'),
  new Comic(188, '1984-12', 'UncannyXMenVol1'),
  new Comic(189, '1985-1', 'UncannyXMenVol1'),
  new Comic(190, '1985-2', 'UncannyXMenVol1'),
  new Comic(191, '1985-3', 'UncannyXMenVol1'),
  new Comic(192, '1985-4', 'UncannyXMenVol1'),
  new Comic(193, '1985-5', 'UncannyXMenVol1'),
  new Comic(194, '1985-6', 'UncannyXMenVol1'),
  new Comic(195, '1985-7', 'UncannyXMenVol1'),
  new Comic(196, '1985-8', 'UncannyXMenVol1'),
  new Comic(197, '1985-9', 'UncannyXMenVol1'),
  new Comic(198, '1985-10', 'UncannyXMenVol1'),
  new Comic(199, '1985-11', 'UncannyXMenVol1'),
  new Comic(200, '1985-12', 'UncannyXMenVol1'),
  new Comic(201, '1986-1', 'UncannyXMenVol1'),
  new Comic(202, '1986-2', 'UncannyXMenVol1'),
  new Comic(203, '1986-3', 'UncannyXMenVol1'),
  new Comic(204, '1986-4', 'UncannyXMenVol1'),
  new Comic(205, '1986-5', 'UncannyXMenVol1'),
  new Comic(206, '1986-6', 'UncannyXMenVol1'),
  new Comic(207, '1986-7', 'UncannyXMenVol1'),
  new Comic(208, '1986-8', 'UncannyXMenVol1'),
  new Comic(209, '1986-9', 'UncannyXMenVol1'),
  new Comic(210, '1986-10', 'UncannyXMenVol1'),
  new Comic(211, '1986-11', 'UncannyXMenVol1'),
  new Comic(212, '1986-12', 'UncannyXMenVol1'),
  new Comic(213, '1987-1', 'UncannyXMenVol1'),
  new Comic(214, '1987-2', 'UncannyXMenVol1'),
  new Comic(215, '1987-3', 'UncannyXMenVol1'),
  new Comic(216, '1987-4', 'UncannyXMenVol1'),
  new Comic(217, '1987-5', 'UncannyXMenVol1'),
  new Comic(218, '1987-6', 'UncannyXMenVol1'),
  new Comic(219, '1987-7', 'UncannyXMenVol1'),
  new Comic(220, '1987-8', 'UncannyXMenVol1'),
  new Comic(221, '1987-9', 'UncannyXMenVol1'),
  new Comic(222, '1987-10', 'UncannyXMenVol1'),
  new Comic(223, '1987-11', 'UncannyXMenVol1'),
  new Comic(224, '1987-12', 'UncannyXMenVol1'),
  new Comic(225, '1988-1', 'UncannyXMenVol1'),
  new Comic(226, '1988-2', 'UncannyXMenVol1'),
  new Comic(227, '1988-3', 'UncannyXMenVol1'),
  new Comic(228, '1988-4', 'UncannyXMenVol1'),
  new Comic(229, '1988-5', 'UncannyXMenVol1'),
  new Comic(230, '1988-6', 'UncannyXMenVol1'),
  new Comic(231, '1988-7', 'UncannyXMenVol1'),
  new Comic(232, '1988-8', 'UncannyXMenVol1'),
  new Comic(233, '1988-9-10', 'UncannyXMenVol1'),
  new Comic(234, '1988-9-20', 'UncannyXMenVol1'),
  new Comic(235, '1988-10-10', 'UncannyXMenVol1'),
  new Comic(236, '1988-10-20', 'UncannyXMenVol1'),
  new Comic(237, '1988-11-10', 'UncannyXMenVol1'),
  new Comic(238, '1988-11-20', 'UncannyXMenVol1'),
  new Comic(239, '1988-12', 'UncannyXMenVol1'),
  new Comic(240, '1989-1', 'UncannyXMenVol1'),
  new Comic(241, '1989-2', 'UncannyXMenVol1'),
  new Comic(242, '1989-3', 'UncannyXMenVol1'),
  new Comic(243, '1989-4', 'UncannyXMenVol1'),
  new Comic(244, '1989-5', 'UncannyXMenVol1'),
  new Comic(245, '1989-6', 'UncannyXMenVol1'),
  new Comic(246, '1989-7', 'UncannyXMenVol1'),
  new Comic(247, '1989-8', 'UncannyXMenVol1'),
  new Comic(248, '1989-9', 'UncannyXMenVol1'),
  new Comic(249, '1989-10-10', 'UncannyXMenVol1'),
  new Comic(250, '1989-10-20', 'UncannyXMenVol1'),
  new Comic(251, '1989-11-10', 'UncannyXMenVol1'),
  new Comic(252, '1989-11-20', 'UncannyXMenVol1'),
  new Comic(253, '1989-11-30', 'UncannyXMenVol1'),
  new Comic(254, '1989-12-10', 'UncannyXMenVol1'),
  new Comic(255, '1989-12-20', 'UncannyXMenVol1'),
  new Comic(256, '1989-12-30', 'UncannyXMenVol1'),
  new Comic(257, '1990-1', 'UncannyXMenVol1'),
  new Comic(258, '1990-2', 'UncannyXMenVol1'),
  new Comic(259, '1990-3', 'UncannyXMenVol1'),
  new Comic(260, '1990-4', 'UncannyXMenVol1'),
  new Comic(261, '1990-5', 'UncannyXMenVol1'),
  new Comic(262, '1990-6', 'UncannyXMenVol1'),
  new Comic(263, '1990-7-10', 'UncannyXMenVol1'),
  new Comic(264, '1990-7-20', 'UncannyXMenVol1'),
  new Comic(265, '1990-8-10', 'UncannyXMenVol1'),
  new Comic(266, '1990-8-20', 'UncannyXMenVol1'),
  new Comic(267, '1990-9-10', 'UncannyXMenVol1'),
  new Comic(268, '1990-9-20', 'UncannyXMenVol1'),
  new Comic(269, '1990-10', 'UncannyXMenVol1'),
  new Comic(270, '1990-11', 'UncannyXMenVol1'),
  new Comic(271, '1990-12', 'UncannyXMenVol1'),
  new Comic(272, '1991-1', 'UncannyXMenVol1'),
  new Comic(273, '1991-2', 'UncannyXMenVol1'),
  new Comic(274, '1991-3', 'UncannyXMenVol1'),
  new Comic(275, '1991-4', 'UncannyXMenVol1'),
  new Comic(276, '1991-5', 'UncannyXMenVol1'),
  new Comic(277, '1991-6', 'UncannyXMenVol1'),
  new Comic(278, '1991-7', 'UncannyXMenVol1'),
  new Comic(279, '1991-8', 'UncannyXMenVol1'),
  new Comic(280, '1991-9', 'UncannyXMenVol1'),
  new Comic(281, '1991-10', 'UncannyXMenVol1'),
  new Comic(282, '1991-11', 'UncannyXMenVol1'),
  new Comic(283, '1991-12', 'UncannyXMenVol1'),
  new Comic(284, '1992-1', 'UncannyXMenVol1'),
  new Comic(285, '1992-2', 'UncannyXMenVol1'),
  new Comic(286, '1992-3', 'UncannyXMenVol1'),
  new Comic(287, '1992-4', 'UncannyXMenVol1'),
  new Comic(288, '1992-5', 'UncannyXMenVol1'),
  new Comic(289, '1992-6', 'UncannyXMenVol1'),
  new Comic(290, '1992-7', 'UncannyXMenVol1'),
  new Comic(291, '1992-8', 'UncannyXMenVol1'),
  new Comic(292, '1992-9', 'UncannyXMenVol1'),
  new Comic(293, '1992-10', 'UncannyXMenVol1'),
  new Comic(294, '1992-11', 'UncannyXMenVol1'),
  new Comic(295, '1992-12', 'UncannyXMenVol1'),
  new Comic(296, '1993-1', 'UncannyXMenVol1'),
  new Comic(297, '1993-2', 'UncannyXMenVol1'),
  new Comic(298, '1993-3', 'UncannyXMenVol1'),
  new Comic(299, '1993-4', 'UncannyXMenVol1'),
  new Comic(300, '1993-5', 'UncannyXMenVol1'),
  new Comic(301, '1993-6', 'UncannyXMenVol1'),
  new Comic(302, '1993-7', 'UncannyXMenVol1'),
  new Comic(303, '1993-8', 'UncannyXMenVol1'),
  new Comic(304, '1993-9', 'UncannyXMenVol1'),
  new Comic(305, '1993-10', 'UncannyXMenVol1'),
  new Comic(306, '1993-11', 'UncannyXMenVol1'),
  new Comic(307, '1993-12', 'UncannyXMenVol1'),
  new Comic(308, '1994-1', 'UncannyXMenVol1'),
  new Comic(309, '1994-2', 'UncannyXMenVol1'),
  new Comic(310, '1994-3', 'UncannyXMenVol1'),
  new Comic(311, '1994-4', 'UncannyXMenVol1'),
  new Comic(312, '1994-5', 'UncannyXMenVol1'),
  new Comic(313, '1994-6', 'UncannyXMenVol1'),
  new Comic(314, '1994-7', 'UncannyXMenVol1'),
  new Comic(315, '1994-8', 'UncannyXMenVol1'),
  new Comic(316, '1994-9', 'UncannyXMenVol1'),
  new Comic(317, '1994-10', 'UncannyXMenVol1'),
  new Comic(492, '2008-1', 'UncannyXMenVol1', ['Messiah Complex: Chapter Two']),
  new Comic(493, '2008-2', 'UncannyXMenVol1', ['Messiah Complex: Chapter Six']),
  new Comic(494, '2008-3', 'UncannyXMenVol1', ['Messiah Complex: Chapter Ten']),
  new Comic(495, '2008-4', 'UncannyXMenVol1', ['X-Men: Divided (Part 1)']),
  new Comic(496, '2008-5', 'UncannyXMenVol1', ['X-Men: Divided (Part 2)']),
  new Comic(500, '2008-9', 'UncannyXMenVol1', ['SFX (1 of 3)']),
  new Comic(501, '2008-10', 'UncannyXMenVol1', ['SFX (2 of 3): All Tomorrow\'s Parties']),
  new Comic(502, '2008-11', 'UncannyXMenVol1', ['SFX (3 of 3) - Beginning to See the Light']),
  new Comic(503, '2008-12', 'UncannyXMenVol1', ['Beginning To See The Light']),
  new Comic(523, '2010-6', 'UncannyXMenVol1', ['Second Coming (Chapter Two)']),
  new Comic(524, '2010-7', 'UncannyXMenVol1', ['Second Coming (Chapter Six)']),
  new Comic(525, '2010-8', 'UncannyXMenVol1', ['Second Coming (Chapter Ten)']),
  new Comic(540, '2011-9', 'UncannyXMenVol1', ['Uncanny X-Men Vol 1 #540']),
  new Comic(541, '2011-9', 'UncannyXMenVol1', ['Uncanny X-Men Vol 1 #541']),
  new Comic(542, '2011-10', 'UncannyXMenVol1', ['Uncanny X-Men Vol 1 #542']),
  new Comic(543, '2011-11', 'UncannyXMenVol1', ['Uncanny X-Men Vol 1 #543']),
  new Comic(544, '2011-12', 'UncannyXMenVol1', ['Uncanny']),
  new Comic(534.1, '2011-6', 'UncannyXMenVol1', ['Uncanny X-Men Vol 1 #534.1']),
  new Comic(535, '2011-6', 'UncannyXMenVol1', ['Breaking Point (Part One)']),
  new Comic(536, '2011-6', 'UncannyXMenVol1', ['Breaking Point: Part Two']),
  new Comic(537, '2011-7', 'UncannyXMenVol1', ['Breaking Point (Part 3)']),
  new Comic(538, '2011-8', 'UncannyXMenVol1', ['Breaking Point (Conclusion)']),
  new Comic(539, '2011-8', 'UncannyXMenVol1', ['Losing Hope']),
  new Comic(530, '2011-1', 'UncannyXMenVol1', ['Quarantine: Part 1']),
  new Comic(531, '2011-2', 'UncannyXMenVol1', ['Quarantine (Part Two)']),
  new Comic(532, '2011-3', 'UncannyXMenVol1', ['Quarantine (Part Three)']),
  new Comic(533, '2011-4', 'UncannyXMenVol1', ['Quarantine (Part Four)']),
  new Comic(534, '2011-5', 'UncannyXMenVol1', ['Quarantine (Part Five)']),
  new Comic(526, '2010-9', 'UncannyXMenVol1', ['The Five Lights (Part 1): Freak Like Me', 'Rebuilding']),
  new Comic(527, '2010-10', 'UncannyXMenVol1', ['The Five Lights (Part 2) - Velocidad']),
  new Comic(528, '2010-11', 'UncannyXMenVol1', ['The Five Lights (Part 3)']),
  new Comic(529, '2010-12', 'UncannyXMenVol1', ['The Five Lights (Part Four)']),

  new Comic(60, '1994-4', 'WhatIfVol2'),

  new Comic(1, '1982-9', 'WolverineVol1'),
  new Comic(2, '1982-10', 'WolverineVol1'),
  new Comic(3, '1982-11', 'WolverineVol1'),
  new Comic(4, '1982-12', 'WolverineVol1'),

  new Comic(75, '1993-11', 'WolverineVol2'),
  new Comic(85, '1994-9', 'WolverineVol2'),

  new Comic(1, '1986-2-10', 'XFactorVol1'),
  new Comic(9, '1986-10', 'XFactorVol1'),
  new Comic(10, '1986-11', 'XFactorVol1'),
  new Comic(11, '1986-12', 'XFactorVol1'),
  new Comic(19, '1987-8', 'XFactorVol1'),
  new Comic(20, '1987-9', 'XFactorVol1'),
  new Comic(21, '1987-10', 'XFactorVol1'),
  new Comic(22, '1987-11', 'XFactorVol1'),
  new Comic(23, '1987-12', 'XFactorVol1'),
  new Comic(24, '1988-1', 'XFactorVol1'),
  new Comic(25, '1988-2', 'XFactorVol1'),
  new Comic(26, '1988-3', 'XFactorVol1'),
  new Comic(27, '1988-4', 'XFactorVol1'),
  new Comic(28, '1988-5', 'XFactorVol1'),
  new Comic(29, '1988-6', 'XFactorVol1'),
  new Comic(30, '1988-7', 'XFactorVol1'),
  new Comic(31, '1988-8', 'XFactorVol1'),
  new Comic(32, '1988-9', 'XFactorVol1'),
  new Comic(33, '1988-10', 'XFactorVol1'),
  new Comic(34, '1988-11', 'XFactorVol1'),
  new Comic(35, '1988-12', 'XFactorVol1'),
  new Comic(36, '1989-1', 'XFactorVol1'),
  new Comic(37, '1989-2', 'XFactorVol1'),
  new Comic(38, '1989-3', 'XFactorVol1'),
  new Comic(39, '1989-4', 'XFactorVol1'),
  new Comic(40, '1989-5', 'XFactorVol1'),
  new Comic(60, '1990-11', 'XFactorVol1'),
  new Comic(61, '1990-12', 'XFactorVol1'),
  new Comic(62, '1991-1', 'XFactorVol1'),
  new Comic(63, '1991-2', 'XFactorVol1'),
  new Comic(64, '1991-3', 'XFactorVol1'),
  new Comic(65, '1991-4', 'XFactorVol1'),
  new Comic(66, '1991-5', 'XFactorVol1'),
  new Comic(67, '1991-6', 'XFactorVol1'),
  new Comic(68, '1991-7', 'XFactorVol1'),
  new Comic(69, '1991-8', 'XFactorVol1'),
  new Comic(70, '1991-9', 'XFactorVol1'),
  new Comic(84, '1992-11', 'XFactorVol1'),
  new Comic(85, '1992-12', 'XFactorVol1'),
  new Comic(86, '1993-1', 'XFactorVol1'),
  new Comic(87, '1993-2', 'XFactorVol1'),
  new Comic(88, '1993-3', 'XFactorVol1'),
  new Comic(89, '1993-4', 'XFactorVol1'),
  new Comic(90, '1993-5', 'XFactorVol1'),
  new Comic(91, '1993-6', 'XFactorVol1'),
  new Comic(92, '1993-7', 'XFactorVol1'),
  new Comic(106, '1994-9', 'XFactorVol1'),

  new Comic(3, '1988-8', 'XFactorAnnualVol1'),
  new Comic(4, '1989-10', 'XFactorAnnualVol1'),
  new Comic(6, '1991-8', 'XFactorAnnualVol1'),
  new Comic(7, '1992-5', 'XFactorAnnualVol1'),

  new Comic(1, '1991-8', 'XForceVol1'),
  new Comic(2, '1991-9', 'XForceVol1'),
  new Comic(3, '1991-10', 'XForceVol1'),
  new Comic(4, '1991-11', 'XForceVol1'),
  new Comic(5, '1991-12', 'XForceVol1'),
  new Comic(6, '1992-1', 'XForceVol1'),
  new Comic(7, '1992-2', 'XForceVol1'),
  new Comic(8, '1992-3', 'XForceVol1'),
  new Comic(9, '1992-4', 'XForceVol1'),
  new Comic(10, '1992-5', 'XForceVol1'),
  new Comic(11, '1992-6', 'XForceVol1'),
  new Comic(12, '1992-7', 'XForceVol1'),
  new Comic(13, '1992-8', 'XForceVol1'),
  new Comic(14, '1992-9', 'XForceVol1'),
  new Comic(15, '1992-10', 'XForceVol1'),
  new Comic(16, '1992-11', 'XForceVol1'),
  new Comic(17, '1992-12', 'XForceVol1'),
  new Comic(18, '1993-1', 'XForceVol1'),
  new Comic(19, '1993-2', 'XForceVol1'),
  new Comic(20, '1993-3', 'XForceVol1'),
  new Comic(21, '1993-4', 'XForceVol1'),
  new Comic(22, '1993-5', 'XForceVol1'),
  new Comic(23, '1993-6', 'XForceVol1'),
  new Comic(24, '1993-7', 'XForceVol1'),
  new Comic(25, '1993-8', 'XForceVol1'),
  new Comic(26, '1993-9', 'XForceVol1'),
  new Comic(27, '1993-10', 'XForceVol1'),
  new Comic(28, '1993-11', 'XForceVol1'),
  new Comic(29, '1993-12', 'XForceVol1'),
  new Comic(30, '1994-1', 'XForceVol1'),
  new Comic(31, '1994-2', 'XForceVol1'),
  new Comic(32, '1994-3', 'XForceVol1'),
  new Comic(33, '1994-4', 'XForceVol1'),
  new Comic(34, '1994-5', 'XForceVol1'),
  new Comic(35, '1994-6', 'XForceVol1'),
  new Comic(36, '1994-7', 'XForceVol1'),
  new Comic(37, '1994-8', 'XForceVol1'),
  new Comic(38, '1994-9', 'XForceVol1'),

  new Comic(26, '2010-6', 'XForceVol3', ['Second Coming (Chapter Five)']),
  new Comic(27, '2010-7', 'XForceVol3', ['Second Coming (Chapter Nine)']),
  new Comic(28, '2010-9', 'XForceVol3', ['Second Coming, Chapter 13']),

  new Comic(1, '1992-5', 'XForceAnnualVol1'),
  new Comic(2, '1993-10', 'XForceAnnualVol1'),
  new Comic(3, '1994-10', 'XForceAnnualVol1'),

  new Comic(1, '1991-10', 'XMenVol2'),
  new Comic(2, '1991-11', 'XMenVol2'),
  new Comic(3, '1991-12', 'XMenVol2'),
  new Comic(4, '1992-1', 'XMenVol2'),
  new Comic(5, '1992-2', 'XMenVol2'),
  new Comic(6, '1992-3', 'XMenVol2'),
  new Comic(7, '1992-4', 'XMenVol2'),
  new Comic(8, '1992-5', 'XMenVol2'),
  new Comic(9, '1992-6', 'XMenVol2'),
  new Comic(10, '1992-7', 'XMenVol2'),
  new Comic(11, '1992-8', 'XMenVol2'),
  new Comic(12, '1992-9', 'XMenVol2'),
  new Comic(13, '1992-10', 'XMenVol2'),
  new Comic(14, '1992-11', 'XMenVol2'),
  new Comic(15, '1992-12', 'XMenVol2'),
  new Comic(16, '1993-1', 'XMenVol2'),
  new Comic(17, '1993-2', 'XMenVol2'),
  new Comic(18, '1993-3', 'XMenVol2'),
  new Comic(19, '1993-4', 'XMenVol2'),
  new Comic(20, '1993-5', 'XMenVol2'),
  new Comic(21, '1993-6', 'XMenVol2'),
  new Comic(22, '1993-7', 'XMenVol2'),
  new Comic(23, '1993-8', 'XMenVol2'),
  new Comic(24, '1993-9', 'XMenVol2'),
  new Comic(25, '1993-10', 'XMenVol2'),
  new Comic(26, '1993-11', 'XMenVol2'),
  new Comic(27, '1993-12', 'XMenVol2'),
  new Comic(28, '1994-1', 'XMenVol2'),
  new Comic(29, '1994-2', 'XMenVol2'),
  new Comic(30, '1994-3', 'XMenVol2'),
  new Comic(31, '1994-4', 'XMenVol2'),
  new Comic(32, '1994-5', 'XMenVol2'),
  new Comic(33, '1994-6', 'XMenVol2'),
  new Comic(34, '1994-7', 'XMenVol2'),
  new Comic(35, '1994-8', 'XMenVol2'),
  new Comic(36, '1994-9', 'XMenVol2'),
  new Comic(37, '1994-10', 'XMenVol2'),

  new Comic(3, '1979-8', 'XMenAnnualVol1', ['A Fire in the Sky!']),
  new Comic(4, '1980-11', 'XMenAnnualVol1', ['Nightcrawler\'s Inferno']),
  new Comic(5, '1981-11', 'XMenAnnualVol1'),
  new Comic(6, '1982-11', 'XMenAnnualVol1'),
  new Comic(7, '1983-12', 'XMenAnnualVol1'),
  new Comic(8, '1984-9', 'XMenAnnualVol1'),
  new Comic(10, '1987-1', 'XMenAnnualVol1'),
  new Comic(12, '1988-10', 'XMenAnnualVol1'),
  new Comic(13, '1989-8', 'XMenAnnualVol1'),
  new Comic(15, '1991-8', 'XMenAnnualVol1'),
  new Comic(16, '1992-5', 'XMenAnnualVol1'),
  new Comic(17, '1993-6', 'XMenAnnualVol1'),
  new Comic(18, '1994-7', 'XMenAnnualVol1'),

  new Comic(1, '1992-5', 'XMenAnnualVol2'),
  new Comic(2, '1993-10', 'XMenAnnualVol2'),

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

  new Comic(1, '1993-6', 'XMenUnlimitedVol1'),
  new Comic(2, '1993-9', 'XMenUnlimitedVol1'),
  new Comic(3, '1993-12', 'XMenUnlimitedVol1'),

  new Comic(1, '1988-10', 'XTerminatorsVol1'),
  new Comic(2, '1988-11', 'XTerminatorsVol1'),
  new Comic(3, '1988-12', 'XTerminatorsVol1'),
  new Comic(4, '1989-1', 'XTerminatorsVol1')
);