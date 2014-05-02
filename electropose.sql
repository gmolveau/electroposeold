-- phpMyAdmin SQL Dump
-- version 3.4.11.1deb2
-- http://www.phpmyadmin.net
--
-- Client: localhost
-- Généré le: Ven 02 Mai 2014 à 16:16
-- Version du serveur: 5.5.35
-- Version de PHP: 5.4.4-14+deb7u8

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de données: `electropose`
--

-- --------------------------------------------------------

--
-- Structure de la table `sounds`
--

CREATE TABLE IF NOT EXISTS `sounds` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(254) NOT NULL,
  `liensc` varchar(254) NOT NULL,
  `lienyt` varchar(254) NOT NULL,
  `artwork` varchar(254) NOT NULL,
  `genre` varchar(254) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=4 ;

--
-- Contenu de la table `sounds`
--

INSERT INTO `sounds` (`id`, `name`, `liensc`, `lienyt`, `artwork`, `genre`) VALUES
(1, 'Marvin Gaye - Sexual Healing (Kygo Remix)', 'http://soundcloud.com/kygo/marvin-gaye-sexual-healing', 'http://www.youtube.com/watch?v=kEPgqvjwgtE', 'https://i4.sndcdn.com/artworks-000063355166-wja5au-t500x500.jpg?8063923', 'Deep House'),
(2, 'Empire Of The Sun - We Are The People (RÉMI CAUMONT REMIX)', 'http://soundcloud.com/remicaumont/we-are-the-people?in=electropose/sets/electropose-november-2013', 'http://www.youtube.com/watch?v=t4bfW_4Mm8s', 'https://i1.sndcdn.com/artworks-000035917118-t2jsqt-t500x500.jpg?8063923', 'Indie Electronic'),
(3, 'Kinder Raum - La Pluie Triste (Ferdinand remix)', 'http://soundcloud.com/f-e-r-d-i-n-a-n-d/la-pluie-triste-ferdinand-remix', 'http://www.youtube.com/watch?v=XCvWkUtOLkw', 'https://i2.sndcdn.com/artworks-000037628840-ilpwxj-t500x500.jpg?b09b136', 'Electronic');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
