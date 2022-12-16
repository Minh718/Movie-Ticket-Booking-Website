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
-- Table structure for table `tbl_movie`
--

DROP TABLE IF EXISTS `tbl_movie`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_movie` (
  `id` int NOT NULL,
  `title` varchar(100) DEFAULT NULL,
  `poster_path` varchar(100) DEFAULT NULL,
  `backdrop_path` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_movie`
--

LOCK TABLES `tbl_movie` WRITE;
/*!40000 ALTER TABLE `tbl_movie` DISABLE KEYS */;
INSERT INTO `tbl_movie` VALUES (76600,'Avatar: The Way of Water','/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg','/198vrF8k7mfQ4FjDJsBmdQcaiyq.jpg'),(436270,'Black Adam','/pFlaoHTZeyNkG83vxsAJiGzfSsa.jpg','/bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg'),(724495,'The Woman King','/lQMJHnHxUyj8kJlC2YOKNuzuwMP.jpg','/7zQJYV02yehWrQN6NjKsBorqUUS.jpg'),(736526,'Troll','/9z4jRr43JdtU66P0iy8h18OyLql.jpg','/53BC9F2tpZnsGno2cLhzvGprDYS.jpg'),(873126,'My Name Is Vendetta','/7l3war94J4tRyWUiLAGokr3ViF2.jpg','/83IYtUhc7Vs8XYi5UYc2lUKuyMo.jpg'),(900667,'One Piece Film Red','/m80kPdrmmtEh9wlLroCp0bwUGH0.jpg','/54PmeEzQMvpojpJBku61ZGQnWUX.jpg'),(988233,'Hex','/xFJHb43ZAnnuiDztxZYsmyopweb.jpg','/90ZZIoWQLLEXSVm0ik3eEQBinul.jpg'),(1013860,'R.I.P.D. 2: Rise of the Damned','/g4yJTzMtOBUTAR2Qnmj8TYIcFVq.jpg','/kmzppWh7ljL6K9fXW72bPN3gKwu.jpg'),(1049233,'Lesson Plan','/wawP3mOUeRBrAtnbPwWK5eFaMdV.jpg','/dsWxCsAdsocMNQFbhe39ynAOhBa.jpg');
/*!40000 ALTER TABLE `tbl_movie` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-12-16 21:08:13
