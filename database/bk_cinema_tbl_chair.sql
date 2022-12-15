-- MySQL dump 10.13  Distrib 8.0.30, for Win64 (x86_64)
--
-- Host: 127.0.0.110    Database: bk_cinema
-- ------------------------------------------------------
-- Server version	8.0.30

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `tbl_chair`
--

DROP TABLE IF EXISTS `tbl_chair`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_chair` (
  `chair` varchar(10) NOT NULL,
  `idTicket` int NOT NULL,
  PRIMARY KEY (`idTicket`,`chair`),
  CONSTRAINT `tbl_chair_ibfk_1` FOREIGN KEY (`idTicket`) REFERENCES `tbl_ticket` (`idTicket`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_chair`
--

LOCK TABLES `tbl_chair` WRITE;
/*!40000 ALTER TABLE `tbl_chair` DISABLE KEYS */;
INSERT INTO `tbl_chair` VALUES ('A0',18),('A1',18),('A10',18),('A2',18),('A3',18),('A4',18),('A5',18),('A6',18),('A7',18),('A8',18),('A9',18),('B0',18),('B10',18),('C0',18),('C10',18),('D0',18),('D10',18),('D2',18),('D8',18),('D9',18),('E0',18),('E10',18),('E2',18),('E4',18),('F0',18),('F10',18),('F2',18),('F8',18),('F9',18),('G0',18),('G10',18),('G4',18),('G5',18),('H0',18),('H1',18),('H10',18),('H2',18),('H3',18),('H4',18),('H5',18),('H6',18),('H7',18),('H8',18),('H9',18),('G8',21),('G9',21),('A7',22),('A8',22),('B7',22),('B8',22),('B8',23),('C8',23),('D8',23),('E9',23);
/*!40000 ALTER TABLE `tbl_chair` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-12-14 23:53:44
