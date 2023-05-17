-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : dim. 14 mai 2023 à 16:57
-- Version du serveur : 8.0.31
-- Version de PHP : 8.0.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `nefti`
--

-- --------------------------------------------------------

--
-- Structure de la table `catégories`
--

DROP TABLE IF EXISTS `catégories`;
CREATE TABLE IF NOT EXISTS `catégories` (
  `id_type_obsèque` int NOT NULL,
  `id_Défunt_position` int NOT NULL,
  `id_personnalisation_cercueil` int NOT NULL,
  `id_transfert_corps` int NOT NULL,
  `id_maître_de_cérémonie` int NOT NULL,
  `id_préparation_défunt` int NOT NULL,
  `id_présentation_salon_funéraire` int NOT NULL,
  `id_lieu_recueillement` int NOT NULL,
  `id_capiton` int NOT NULL,
  `id_sépulture` int NOT NULL,
  `id_concession_funéraire` int NOT NULL,
  `id_avis_décès` int NOT NULL,
  `id_faire_part` int NOT NULL,
  `id_embaumement_corps` int NOT NULL,
  `id_carte_remerciement` int NOT NULL,
  `id_type_cérémonie` int NOT NULL,
  `id_type_funérailles` int NOT NULL,
  `id_garder_corps` int NOT NULL,
  `id_type_cercueil` int NOT NULL,
  `id_ornements` int NOT NULL,
  `id_lieu_cérémonie` int NOT NULL,
  `id_fleur` int NOT NULL,
  `id_composition_fleurale` int NOT NULL,
  `id_cendre` int NOT NULL,
  `id_démarches` int NOT NULL,
  `id_lieu_inhumation` int NOT NULL,
  UNIQUE KEY `type d'obsèque` (`id_type_obsèque`),
  UNIQUE KEY `Défunt position` (`id_Défunt_position`),
  UNIQUE KEY `personnalisation cercueil` (`id_personnalisation_cercueil`),
  UNIQUE KEY `transfert du corps` (`id_transfert_corps`),
  UNIQUE KEY `maître de cérémonie` (`id_maître_de_cérémonie`),
  UNIQUE KEY `préparation défunt` (`id_préparation_défunt`),
  UNIQUE KEY `présentation salon funéraire` (`id_présentation_salon_funéraire`),
  UNIQUE KEY `lieu recueillement` (`id_lieu_recueillement`),
  UNIQUE KEY `capiton` (`id_capiton`),
  UNIQUE KEY `sépulture` (`id_sépulture`),
  UNIQUE KEY `concession funéraire` (`id_concession_funéraire`),
  UNIQUE KEY `avis décès` (`id_avis_décès`),
  UNIQUE KEY `faire part` (`id_faire_part`),
  UNIQUE KEY `embaumement du corps` (`id_embaumement_corps`),
  UNIQUE KEY `carte remerciement` (`id_carte_remerciement`),
  UNIQUE KEY `type cérémonie` (`id_type_cérémonie`),
  UNIQUE KEY `type funérailles` (`id_type_funérailles`),
  UNIQUE KEY `garder corps` (`id_garder_corps`),
  UNIQUE KEY `type cercueil` (`id_type_cercueil`),
  UNIQUE KEY `ornements` (`id_ornements`),
  UNIQUE KEY `lieu cérémonie` (`id_lieu_cérémonie`),
  UNIQUE KEY `fleur` (`id_fleur`),
  UNIQUE KEY `composition fleurale` (`id_composition_fleurale`),
  UNIQUE KEY `cendre` (`id_cendre`),
  UNIQUE KEY `démarches` (`id_démarches`),
  UNIQUE KEY `lieu de l'inhumation` (`id_lieu_inhumation`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
