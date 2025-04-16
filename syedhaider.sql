-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 24, 2023 at 03:52 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `syedhaider`
--

-- --------------------------------------------------------

--
-- Table structure for table `appointments`
--

CREATE TABLE `appointments` (
  `patient_name` varchar(100) NOT NULL,
  `email` varchar(199) NOT NULL,
  `doctor` varchar(99) NOT NULL,
  `appointment_date` date NOT NULL,
  `reason` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `appointments`
--

INSERT INTO `appointments` (`patient_name`, `email`, `doctor`, `appointment_date`, `reason`) VALUES
('Ali Raza', 'user1@example.com', 'Prof. Sarah Gilbert', '2023-11-21', 'wese e');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `firstname` varchar(100) NOT NULL,
  `lastname` varchar(50) NOT NULL,
  `gender` enum('male','female','other') NOT NULL,
  `username` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`firstname`, `lastname`, `gender`, `username`, `email`, `password`) VALUES
('', '', 'male', '', '', ''),
('ali', 'raza', 'male', 'aliraza', 'ali@techsofty.com', 'ali'),
('haider', 'rizvi', 'male', 'hd', 'haider@gmail.com', 'haider'),
('battery', 'low', 'male', 'plugin', 'needcharger@gmail.com', 'chargingstart'),
('abc', 'def', 'male', 'ghi', 'jkl@gmail.com', 'mno'),
('as', 'asd', 'male', 'asdf', 'ali@techsofty.com', 'abc'),
('abc', 'def', 'male', 'asd', 'user1@example.com', 'asdasd'),
('user1', '1', 'male', '1', '1@mail.com', '1'),
('user2', '2', 'male', '2', '2@mail.com', '2');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
