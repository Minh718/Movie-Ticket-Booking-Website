drop database if exists `bk_cinema`;
use bk_cinema;
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
-- Table structure for table `tbl_user`
--

DROP TABLE IF EXISTS `tbl_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_user` (
  `idUser` int NOT NULL AUTO_INCREMENT,
  `firstName` varchar(40) DEFAULT NULL,
  `lastName` varchar(40) DEFAULT NULL,
  `phone` varchar(11) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(50) NOT NULL,
  `gender` varchar(5) DEFAULT NULL,
  `isAdmin` tinyint DEFAULT '0',
  `point` int DEFAULT '0',
  PRIMARY KEY (`idUser`),
  UNIQUE KEY `phone` (`phone`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_user`
--

LOCK TABLES `tbl_user` WRITE;
/*!40000 ALTER TABLE `tbl_user` DISABLE KEYS */;
INSERT INTO `tbl_user` VALUES (1,'Nhóm','7','0123456789','cuthemongcho380@gmail.com','123456789','nam',1,35);
/*!40000 ALTER TABLE `tbl_user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-12-17 20:46:15



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
-- Table structure for table `tbl_room`
--

DROP TABLE IF EXISTS `tbl_room`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_room` (
  `name` varchar(10) NOT NULL,
  PRIMARY KEY (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_room`
--

LOCK TABLES `tbl_room` WRITE;
/*!40000 ALTER TABLE `tbl_room` DISABLE KEYS */;
INSERT INTO `tbl_room` VALUES ('01'),('02'),('03'),('04'),('05');
/*!40000 ALTER TABLE `tbl_room` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-12-17 20:46:14



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
-- Table structure for table `tbl_show`
--

DROP TABLE IF EXISTS `tbl_show`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_show` (
  `idShow` int NOT NULL AUTO_INCREMENT,
  `idMovie` int NOT NULL,
  `price` int DEFAULT NULL,
  `room` varchar(5) NOT NULL,
  PRIMARY KEY (`idShow`),
  KEY `room` (`room`),
  CONSTRAINT `tbl_show_ibfk_1` FOREIGN KEY (`room`) REFERENCES `tbl_room` (`name`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=48 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_show`
--

LOCK TABLES `tbl_show` WRITE;
/*!40000 ALTER TABLE `tbl_show` DISABLE KEYS */;
INSERT INTO `tbl_show` VALUES (38,736526,95000,'04'),(39,873126,95000,'03'),(40,988233,42000,'03'),(41,1013860,95000,'04'),(42,724495,52000,'04'),(43,436270,80000,'02'),(44,1024546,20000,'03'),(45,747803,1234,'03'),(46,76600,95000,'04'),(47,1049233,22000,'03');
/*!40000 ALTER TABLE `tbl_show` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-12-17 20:46:15

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
-- Table structure for table `tbl_date_show`
--

DROP TABLE IF EXISTS `tbl_date_show`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_date_show` (
  `idShow` int NOT NULL,
  `dateShow` date NOT NULL,
  PRIMARY KEY (`idShow`,`dateShow`),
  CONSTRAINT `tbl_date_show_ibfk_1` FOREIGN KEY (`idShow`) REFERENCES `tbl_show` (`idShow`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_date_show`
--

LOCK TABLES `tbl_date_show` WRITE;
/*!40000 ALTER TABLE `tbl_date_show` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbl_date_show` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

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
-- Table structure for table `tbl_hour_show`
--

DROP TABLE IF EXISTS `tbl_hour_show`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_hour_show` (
  `idShow` int NOT NULL,
  `dateShow` date NOT NULL,
  `idHour` int NOT NULL AUTO_INCREMENT,
  `hour` time NOT NULL,
  PRIMARY KEY (`idHour`),
  KEY `tbl_hour_show_ibfk_1` (`idShow`,`dateShow`)
) ENGINE=InnoDB AUTO_INCREMENT=134 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_hour_show`
--

LOCK TABLES `tbl_hour_show` WRITE;
/*!40000 ALTER TABLE `tbl_hour_show` DISABLE KEYS */;
INSERT INTO `tbl_hour_show` VALUES (35,'2022-12-20',40,'17:00:00'),(35,'2022-12-20',41,'23:00:00'),(35,'2022-12-20',42,'13:00:00'),(35,'2022-12-20',43,'11:00:00'),(35,'2022-12-20',44,'15:00:00'),(35,'2022-12-19',45,'15:00:00'),(35,'2022-12-19',46,'23:00:00'),(35,'2022-12-21',47,'19:00:00'),(35,'2022-12-21',48,'17:00:00'),(35,'2022-12-20',49,'19:00:00'),(35,'2022-12-21',50,'23:00:00'),(36,'2022-12-18',51,'11:00:00'),(36,'2022-12-18',52,'13:00:00'),(36,'2022-12-18',53,'23:00:00'),(36,'2022-12-18',54,'15:00:00'),(36,'2022-12-18',55,'17:00:00'),(36,'2022-12-18',56,'19:00:00'),(30,'2022-12-17',57,'11:00:00'),(30,'2022-12-17',58,'13:00:00'),(30,'2022-12-17',59,'23:00:00'),(30,'2022-12-17',60,'17:00:00'),(36,'2022-12-20',61,'17:00:00'),(36,'2022-12-20',62,'15:00:00'),(36,'2022-12-20',63,'13:00:00'),(36,'2022-12-20',64,'23:00:00'),(38,'2022-12-17',65,'11:00:00'),(38,'2022-12-17',66,'13:00:00'),(38,'2022-12-17',67,'15:00:00'),(38,'2022-12-17',68,'17:00:00'),(39,'2022-12-17',69,'11:00:00'),(39,'2022-12-17',70,'13:00:00'),(39,'2022-12-17',71,'15:00:00'),(39,'2022-12-17',72,'17:00:00'),(40,'2022-12-17',73,'09:00:00'),(40,'2022-12-17',74,'21:00:00'),(40,'2022-12-17',75,'19:00:00'),(40,'2022-12-17',76,'23:00:00'),(38,'2022-12-19',77,'13:00:00'),(38,'2022-12-19',78,'15:00:00'),(38,'2022-12-19',79,'17:00:00'),(38,'2022-12-19',80,'19:00:00'),(38,'2022-12-19',81,'21:00:00'),(39,'2022-12-20',82,'17:00:00'),(39,'2022-12-20',83,'15:00:00'),(39,'2022-12-20',84,'13:00:00'),(42,'2022-12-18',85,'11:00:00'),(42,'2022-12-18',86,'13:00:00'),(42,'2022-12-18',87,'17:00:00'),(42,'2022-12-18',88,'19:00:00'),(41,'2022-12-21',89,'17:00:00'),(41,'2022-12-21',90,'13:00:00'),(41,'2022-12-21',91,'11:00:00'),(44,'2022-12-22',92,'17:00:00'),(43,'2022-12-22',93,'17:00:00'),(43,'2022-12-22',94,'15:00:00'),(43,'2022-12-22',95,'13:00:00'),(43,'2022-12-22',96,'11:00:00'),(43,'2022-12-22',97,'09:00:00'),(43,'2022-12-22',98,'07:00:00'),(43,'2022-12-22',99,'19:00:00'),(43,'2022-12-22',100,'21:00:00'),(43,'2022-12-22',101,'23:00:00'),(44,'2022-12-21',102,'07:00:00'),(44,'2022-12-21',103,'09:00:00'),(44,'2022-12-21',104,'11:00:00'),(44,'2022-12-21',105,'13:00:00'),(44,'2022-12-21',106,'15:00:00'),(44,'2022-12-21',107,'17:00:00'),(44,'2022-12-21',108,'19:00:00'),(44,'2022-12-21',109,'21:00:00'),(44,'2022-12-21',110,'23:00:00'),(44,'2022-12-19',111,'07:00:00'),(44,'2022-12-19',112,'09:00:00'),(44,'2022-12-19',113,'11:00:00'),(44,'2022-12-19',114,'13:00:00'),(44,'2022-12-19',115,'15:00:00'),(44,'2022-12-19',116,'17:00:00'),(44,'2022-12-19',117,'19:00:00'),(44,'2022-12-19',118,'21:00:00'),(44,'2022-12-19',119,'23:00:00'),(45,'2022-12-20',120,'07:00:00'),(45,'2022-12-20',121,'09:00:00'),(45,'2022-12-20',122,'11:00:00'),(45,'2022-12-20',123,'19:00:00'),(45,'2022-12-20',124,'21:00:00'),(45,'2022-12-20',125,'23:00:00'),(47,'2022-12-22',126,'07:00:00'),(47,'2022-12-22',127,'09:00:00'),(47,'2022-12-22',128,'11:00:00'),(47,'2022-12-22',129,'13:00:00'),(47,'2022-12-22',130,'15:00:00'),(47,'2022-12-22',131,'19:00:00'),(47,'2022-12-22',132,'21:00:00'),(47,'2022-12-22',133,'23:00:00');
/*!40000 ALTER TABLE `tbl_hour_show` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-12-17 20:46:15


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
-- Table structure for table `tbl_ticket`
--

DROP TABLE IF EXISTS `tbl_ticket`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_ticket` (
  `idTicket` int NOT NULL AUTO_INCREMENT,
  `idHour` int NOT NULL,
  `idUser` int NOT NULL,
  PRIMARY KEY (`idTicket`),
  KEY `idHour` (`idHour`),
  KEY `idUser` (`idUser`),
  CONSTRAINT `tbl_ticket_ibfk_1` FOREIGN KEY (`idHour`) REFERENCES `tbl_hour_show` (`idHour`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `tbl_ticket_ibfk_2` FOREIGN KEY (`idUser`) REFERENCES `tbl_user` (`idUser`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_ticket`
--

LOCK TABLES `tbl_ticket` WRITE;
/*!40000 ALTER TABLE `tbl_ticket` DISABLE KEYS */;
INSERT INTO `tbl_ticket` VALUES (31,77,1);
/*!40000 ALTER TABLE `tbl_ticket` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-12-17 20:46:15

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
-- Table structure for table `tbl_article`
--

DROP TABLE IF EXISTS `tbl_article`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_article` (
  `idArticle` int NOT NULL AUTO_INCREMENT,
  `title` varchar(100) DEFAULT NULL,
  `summary` text,
  `content` longtext,
  `img` varchar(150) DEFAULT NULL,
  PRIMARY KEY (`idArticle`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_article`
--

LOCK TABLES `tbl_article` WRITE;
/*!40000 ALTER TABLE `tbl_article` DISABLE KEYS */;
INSERT INTO `tbl_article` VALUES (1,'Secret Invasion - loạt phim mở rộng của Vũ trụ Điện ảnh Marvel','Disney đã chính thức công bố dự án Secret Invasion, cùng với nhiều dự án khác trong năm nay. Ban đầu thông tin về bộ phim khá ít ỏi, nhưng sau những dự án thành công khác như WandaVision và The Falcon And The Winter Soldier, bộ phim đã có nhưng bước triển khai rõ ràng hơn.','Disney đã chính thức công bố dự án Secret Invasion, cùng với nhiều dự án khác trong năm nay. Ban đầu thông tin về bộ phim khá ít ỏi, nhưng sau những dự án thành công khác như WandaVision và The Falcon And The Winter Soldier, bộ phim đã có nhưng bước triển khai rõ ràng hơn.$Vũ trụ Điện ảnh Marvel ngày càng mở rộng và tiếp tục phát triển thông qua những series mới về các siêu anh hùng, bao gồm Wanda Maximoff, Vision, Loki hay Hawkeye… Vậy nên 8 tập truyện ngắn Secret Invasion (Bí Mật Cuộc Xâm Lược) cũng không ngoại lệ. Đây là một miniseries Marvel Comics được yêu thích, phát hành vào năm 2009, của tác giả Brian Michael Bendis, người đã phát triển câu chuyện như phần tiếp theo trực tiếp  từ cốt truyện Annihilation năm 2006.$Trong loạt truyện tranh Secret Invasion, kể về việc người Skrulls đã dành nhiều năm để lên kế hoạch xâm chiếm Trái đất, sau khi hành tinh của họ bị Galactus nuốt chửng. Bộ tộc Skrulls có khả năng thay đổi hình dạng của mình, thậm chí một số còn có thể hoá thân và có khả năng như các siêu anh hùng thật sự. Ví dụ như nhân vật Hoàng Hậu Veranke, người đã sống với hình dạng nữ Người Nhện để dễ dàng tiếp cận các anh hùng khác trên trái đất. Và giúp những người Skrulls xâm nhập vào các nhóm khác như S.H.I.E.L.D., Fantastic Four...$Chủng tộc người Skrulls, từng được mô tả trong Captain Marvel, khi cho thấy khả năng thay đổi hình dạng một cách đáng ngạc nhiên của họ. Và những nhân vật từng xuất hiện trong Captain Marvel, bao gồm: Đại tá Nicholas Joseph Fury (do Samuel L.Jackson thủ vai), người đã góp mặt tổng cộng 11 bộ phim Marvel; nhân vật Talos (Ben Mendelsohn thủ vai), được mọi người xem là Dị nhân của tộc Skrulls vì không có khả năng biến hình… đều xác nhận sẽ tham gia loạt phim Secret Invasion.$Một số những cái tên nổi tiếng khác cũng sẽ đàm phán để tham gia Secret Invasion như: ngôi sao được đề cử Oscar trong phim Once Night In Miami, Kingsley Ben-Adir (một số nguồn tin cho rằng anh sẽ đảm nhận vai phản diện trong loạt phim); Nữ diễn viên từng đạt giải Oscar, Olivia Colman; Nữ hoàng trong Game Of Thrones, Emilia Clarke cũng đã được chọn tham gia phim, cùng với Killian Scott, Christopher McDonald...$Với đội ngũ dàn diễn viên ấn tượng như thế này, khán giả hoàn toàn có thể kỳ vọng vào những kế hoạch lớn mà Marvel đã chuẩn bị cho họ. Loạt phim Secret Invasion sẽ được viết bởi Kyle Bradstreet, người đứng sau series Mr. Robot. Trong khi đó Thomas Bezucha (Let Him Go) và Ali Selim (The Looming Tower) sẽ tham gia đạo diễn.$Hiện tại, thông tin chi tiết về cốt truyện cho Secret Invasion vẫn còn rất ít vì quá trình sản xuất cho chương trình thậm chí còn chưa bắt đầu. Loạt phim cũng không có ngày phát hành cụ thể. Tuy nhiên nếu đúng như mô tả, loạt phim sẽ có liên quan đến phần tiếp theo của Captain Marvel 2 sẽ ra mắt vào ngày 11 tháng 11 năm 2022. Như vậy Secret Invasion sẽ phải khởi chiếu trên Disney + trước đó.$','https://i0.wp.com/www.bigglasgowcomicpage.com/wp-content/uploads/2021/03/SECRET-INVASION-2.jpg?fit=1920%2C1080&ssl=1'),(2,'Ant-Man and the Wasp: Quantumania - Bom tấn mở màn Phase 5 của MCU','Ant-Man and the Wasp: Quantumania là dự án phim siêu anh hùng tiếp theo của Marvel Studio sau siêu phẩm Black Panther: Wakanda Forever. Tiếp nối sự thành công của 2 phần phim trước đó là Ant-Man (2015) và Ant-Man and the Wasp (2018), đạo diễn Peyton Reed sẽ cho ra mắt phần thứ 3 của loạt phim đình đám này. Người Kiến 3 hứa hẹn sẽ là một khởi đầu hoành tráng cho Giai đoạn 5 của MCU.','Ant-Man and the Wasp: Quantumania là dự án phim siêu anh hùng tiếp theo của Marvel Studio sau siêu phẩm Black Panther: Wakanda Forever. Tiếp nối sự thành công của 2 phần phim trước đó là Ant-Man (2015) và Ant-Man and the Wasp (2018), đạo diễn Peyton Reed sẽ cho ra mắt phần thứ 3 của loạt phim đình đám này. Người Kiến 3 hứa hẹn sẽ là một khởi đầu hoành tráng cho Giai đoạn 5 của MCU.$Sau 4 năm chờ đợi thì cuối cùng Marvel cũng tiết lộ những hình ảnh đầu tiên trong “Người Kiến và Chiến binh Ong: Giới lượng tử” kèm theo ngày ra rạp của bộ phim.$Phần mới của loạt phim về siêu anh hùng Người Kiến này vẫn có sự góp mặt của dàn diễn viên cũ vô cùng quen thuộc với khán giả. Paul Rudd sẽ trở lại trong vai Scott Lang - Người Kiến của chúng ta. Evangeline Lilly trong vai Hope van Dyne - Chiến binh Ong và Michael Douglas trong vai Hank Pym cùng những nhân vật thân quen khác.$Xuôi theo dòng sự kiện trong MCU, phần phim thứ 3 trong loạt phim về Người Kiến cũng được đặt trong bối cảnh ngay trận chiến với Thanos. Sau khi hoà bình vũ trụ vừa được thiết lập lại, Scott Lang tự tạo cho mình sự thoải mái, tận hưởng hương vị của người nổi tiếng khi là một thành viên của Avengers giải cứu thế giới.$Tuy nhiên, niềm vui không được bao lâu, thì cô con gái của anh - Cassie Lang, bị rơi vào Giới lượng tử trong khi đang giúp anh thực hiện một thí nghiệm. Scott ngay lập tức phải vào trong đó để cứu con gái. Tại đây, anh đụng độ với phản diện chính của bộ phim - Kang the Conqueror.$Là một bộ phim siêu anh hùng mở đầu cho Phase 5 (Giai đoạn 5) đồng thời cũng là mở đầu cho The Multiverse SAGA, sẽ chẳng lạ gì nếu Ant-Man and the Wasp: Quantumania có yếu tố xuất hiện của đa vũ trụ và các dòng thời gian khác. Trong SAGA mới này của MCU sẽ tập trung tới một cuộc chiến lớn có thiên hướng hủy diệt đa vũ trụ cho nên ngoài Người Kiến 3, các phần phim khác có thể cũng có yếu tố của đa vũ trụ xen vào.$Sau Avengers: End Game, cuộc sống của cả nhân loại bị đảo lộn. Những người bị biến mất sau cú búng tay của Thanos bất ngờ quay trở lại. Gia đình của Scott cũng không ngoại lệ. Cassie - Con gái của Scott, may mắn không bị biến mất, giờ đây đã trưởng thành.$Điều mà có lẽ làm cho khán giả bất ngờ nhất là Cassie sẽ trở thành một siêu anh hùng sát cánh cùng bố mẹ mình trong phần phim mới này. Trong poster, ta có thể thấy được bộ suit đặc biệt của cô. Đó là một bộ giáp màu tím mộng mơ và có mặt nạ giống với Scott.$Việc Cassie Lang trở thành một anh hùng giống như bố mình tựa như cách mà Kate Bishop tiếp bước Hawkeye hay Natasha Romanoff truyền lại danh xưng Black Widow cho em gái mình. Từ Phase 5 trở đi, khán giả dự đoán rằng sẽ có một lớp siêu anh hùng mới đầy tài năng tiếp bước lớp anh hùng cũ của Avengers.$Người Kiến 3 có đôi chút liên quan đến TV series Loki. Sự liên kết đặc biệt ấy chính là Kang – Phản diện chính trong phần phim này của Người Kiến. Nếu các bạn còn nhớ, trong Loki mùa 1, nhân vật Jonathan Majors đã tiết lộ rằng còn có nhiều phiên bản xấu của mình tồn tại ở những dòng thời gian khác nhau. Và Kang chính là một phiên bản độc ác của ông trong vũ trụ này của Scott.$Tạo hình của Kang trong Ant-Man and the Wasp: Quantumania cũng rất đặc biệt, khá sát với ngoại hình trong truyện tranh Marvel Comics. Với vẻ ngoài lạnh lùng cùng với bộ suit che hết tóc, Kang the Conqueror đã bộc lộ được sự xấu xa và dã tâm chinh phục mọi thứ của mình. Đối mặt với một phản diện mạnh mẽ như vậy, gia đình Scott sẽ làm gì để chống lại Kang? Mọi thứ sẽ được giải đáp trong phần phim mới của Người Kiến sắp sửa ra mặt vào tháng 2 năm 2023.$Ant-Man and the Wasp: Quantumania đã được ấn định ngày ra mắt vào ngày 17 tháng 2 năm 2023. Người Kiến phần 3 hứa hẹn sẽ là một khởi đầu hoành tráng cho Giai đoạn 5 của vũ trụ điện ảnh Marvel. Mọi người nhớ theo dõi BlogAnChoi để cập nhật những tin tức mới nhất về bộ phim này nhé!$','https://bloganchoi.com/wp-content/uploads/2022/08/ant-man.jpg'),(3,'Ms. Marvel rục rịch renew cho mùa phim thứ 2?','Có vẻ như Iman Vellani sẽ được đảm bảo một tương lai tươi sáng bất chấp động làn sóng ủng hộ không quá tích cực từ khán giả. Theo một báo cáo mới từ Daniel RPK, Marvel Studios có thể vừa bật đèn xanh cho một mùa phim mới của Ms. Marvel và tất nhiên vẫn sẽ là phát hành trên Disney +.','Có vẻ như Iman Vellani sẽ được đảm bảo một tương lai tươi sáng bất chấp động làn sóng ủng hộ không quá tích cực từ khán giả. Theo một báo cáo mới từ Daniel RPK, Marvel Studios có thể vừa bật đèn xanh cho một mùa phim mới của Ms. Marvel và tất nhiên vẫn sẽ là phát hành trên Disney +.$Chương trình xoay quanh anh hùng tuổi teen Kamala Khan của Vellani trong quá trình trưởng thành tại New Jersey. Ban đầu đây được cho là một câu chuyện gốc của nhân vật và nếu rò rỉ này là chính xác, Marvel sẽ lần đầu tiên thay đổi hướng đi cho một loạt phim, từ limited thành ongoing.$Kamala sẽ sớm tái xuất khán giả trong The Marvels (2023), hậu truyện của Captain Marvel, nơi cô bé có cơ hội hợp tác với thần tượng Carol Danvers và Monica Rambeau sau khi sức mạnh của bộ ba trục trặc, tương tác qua lại. Có khả năng mùa thứ hai của Ms. Marvel sẽ diễn ra ngay sau các sự kiện của phim, khám phá một phiên bản nữ anh hùng cứng cáp hơn, qua đó tiến gần với một vai trò siêu anh hùng chuyên nghiệp đúng nghĩa.$Thách thức đối với Marvel ở thời kỳ chuyển giao chẳng phải những siêu phẩm, thuyết đa vũ trụ ghê gớm mà đó là đảm bảo rằng tất cả các anh hùng mới mà họ giới thiệu đều sẽ được cung cấp điều kiện phát triển sâu sắc như thế hệ đầu tiên. Jennifer Walters, Kate Bishop hay đặc biệt là Kamala Khan cần nhiều hơn sự cầu thị từ phía khán giả và thời gian sẽ đem đến câu trả lời thỏa đáng nhất.$','https://www.mytrustworth.com/wp-content/uploads/2022/09/msmarvel.jpeg'),(4,'Marvel tung trích đoạn bị cắt trong Avengers: End Game, dân mạng  dậy sóng ','Đã ba tháng kể từ thời điểm  Avengers: End Game  ra rạp, khi người hâm mộ vừa mới nguôi ngoai sau cái chết của Iron Man (Robert Downey Jr) trong trận chiến chống lại Thanos (Josh Brolin), Marvel bất ngờ tung trích đoạn bị cắt trong bom tấn này khiến dân mạng một lần nữa  dậy sóng .','Đã ba tháng kể từ thời điểm “Avengers: End Game” ra rạp, khi người hâm mộ vừa mới nguôi ngoai sau cái chết của Iron Man (Robert Downey Jr) trong trận chiến chống lại Thanos (Josh Brolin), Marvel bất ngờ tung trích đoạn bị cắt trong bom tấn này khiến dân mạng một lần nữa “dậy sóng”.$Trong video, khi Pepper (Gwyneth Paltrow) rơi nước mắt nói lời tạm biệt chồng, các siêu anh hùng đau thương từ từ quỳ xuống để tôn vinh hành động cao đẹp của Tony. Cử chỉ này bắt đầu từ Hawkeye (Jeremy Renner), rồi đến Black Panther (Chadwick Boseman), Captain Marvel (Brie Larson), Ant-Man (Paul Rudd), Captain America (Chris Evans), Doctor Strange (Benedict Cumberbatch), nhóm Guardians of the Galaxy… Đây không chỉ là cách biệt đội Avengers bày tỏ sự kính trọng đến đồng đội, mà còn khẳng định Iron Man là siêu anh hùng đầu tiên mở ra đế chế Vũ trụ Điện ảnh Marvel.$Nhân vật duy nhất thờ ơ trước cái chết của Tony là Gamora (Zoe Saldana). Cô chỉ nhìn rồi xoay người bỏ đi. Điều này hoàn toàn hợp lý vì Gamora này đến từ quá khứ - một vũ trụ khác, nơi cô chưa từng tiếp xúc với Tony.$Chỉ kéo dài hơn 1 phút, trích đoạn thực ra gây “bão” cộng đồng mạng quốc tế khi thu hút hàng triệu lượt xem trên Youtube và các kênh chia sẻ video khác.$Nhiều người cho biết, không thể kìm được nước mắt khi xem đoạn video. Đa phần người hâm mộ đánh giá cao việc Tony có được sự tôn vinh mà anh xứng đáng có. Bên cạnh đó, không ít người chỉ ra khoảnh khắc Doctor Strange không cầm được nước mắt khi quỳ xuống.$“Tôi thích cảnh này vì nó cho thấy, Doctor Strange rất đau đớn dù anh ấy biết trước điều đó sẽ xảy ra”, một người dùng mạng bình luận.$“End Game” là phần cuối cùng của series Avengers “làm mưa làm gió” các phòng rạp toàn cầu trong 11 năm qua. Tuần trước, bom tấn này đã vượt Avatar, trở thành phim có doanh thu cao nhất mọi thời.$','https://genk.mediacdn.vn/139269124445442048/2020/2/14/1-15816746144451193748082.jpg'),(5,'Fan Marvel chê kỹ xảo phim  She-Hulk ','Nhiều người hâm mộ Marvel bày tỏ thất vọng với tạo hình và kỹ xảo trong trailer về series  She-Hulk: Attorney at Law .','Theo The Direct, sau trailer công bố hôm 18/5, nhiều khán giả của Marvel không hài lòng với phần CGI tạo làn da xanh của nhân vật chính Jennifer Walters - em gái người khổng lồ xanh The Hulk. Matt Ramos - người chuyên sáng tạo nội dung mạng xã hội có hơn 2,7 triệu lượt theo dõi trên TikTok - nhận xét:  Phần kỹ xảo của She-Hulk chắc chắn cần cải thiện trước khi phát sóng .$Cây viết Christopher Marc của trang The Playlist nói những hình ảnh trong trailer She-Hulk trông giả tạo và thiếu hoàn thiện.  Tôi có thể chờ đợi đến mùa thu hoặc thậm chí sang năm để đội ngũ VFX sửa lại phần kỹ xảo , anh viết trên Twitter.$Trên trang cá nhân, Bella - một nhà thiết kế đồ họa - bày tỏ khó hiểu khi phần CGI của Hulk được làm tốt trong khi nhân vật Jennifer Walters thì không.  Tôi hiểu rằng đôi khi hình ảnh trong trailer là những sản phẩm chưa hoàn thiện về mặt kỹ xảo. Tuy nhiên, các phân đoạn về She-Hulk đều trông rất tệ .$Trong phim, Tatiana Maslany đóng nữ luật sư Jennifer Walters - em họ Bruce Banner/Hulk (Mark Ruffalo). Theo nguyên tác truyện tranh, cô được anh họ cứu sống nhờ truyền máu có chứa phóng xạ của mình, đồng thời thừa hưởng siêu năng lực hóa khổng lồ xanh. Êkíp dùng công nghệ CGI cho các cảnh nhân vật Walters gồng cơ bắp và biến thành She-Hulk.$Chuyên thể loại phim siêu anh hùng, Marvel nổi tiếng về những tác phẩm có phần kỹ xảo hiện đại và đẹp mắt. Theo The Direct, hãng phim chỉ tin tưởng một số đội ngũ sản xuất VFX tên tuổi và giàu kinh nghiệm cho các dự án. Tuy nhiên, ngành sản xuất phim chịu ảnh hưởng nặng từ đại dịch suốt hai năm qua khiến nhiều đội ngũ thiếu hụt nhân sự và không còn giữ được phong độ.$She-Hulk, dự kiến phát hành tháng 8, gồm chín tập. Dự án về nhân vật chính hoàn toàn được tạo hình bởi công nghệ CGI. Các chuyên gia trong ngành đánh giá yếu tố này khiến khâu hậu kỳ rất phức tạp. Tuy nhiên, Marvel còn gần ba tháng để khắc phục hình ảnh cho dự án.$Năm 2019, êkíp Sonic the Hedgehog từng nhận nhiều lời chê khi giới thiệu tạo hình nhân vật nhím Sonic trong trailer đầu tiên. Hãng Sony phải sửa lại để đáp ứng kỳ vọng của người hâm mộ. Dự án sau đó thu gần 320 triệu USD toàn cầu, thuộc top 10 phim ăn khách nhất trong năm 2020.$','https://thegioidienanh.vn/stores/news_dataimages/anhvu/102022/14/14/croped/5448_01.jpg'),(6,'Đô ra e mon chú mèo máy đến từ tương lai','Nghệ sĩ Huỳnh Quang Thái - chỉ huy dàn hợp xướng Sài Gòn - chia sẻ: \"Không phải ca khúc nào cũng phù hợp để chuyển soạn cho hợp xướng hát, vì thế khâu chọn bài phải dựa vào kinh nghiệm và tài nghệ của nhà soạn nhạc. Nhạc sĩ Trương Chí đã nghiên cứu nhiều ca khúc nổi tiếng và cuối cùng chọn Ngựa ô thương nhớ vì nhận thấy ca khúc này có tuyến giai điệu đẹp, cái hồn dân tộc cũng được truyền tải rất khéo léo và đầy chất thơ\".\n\n','Nghệ sĩ Huỳnh Quang Thái - chỉ huy dàn hợp xướng Sài Gòn - chia sẻ: \"Không phải ca khúc nào cũng phù hợp để chuyển soạn cho hợp xướng hát, vì thế khâu chọn bài phải dựa vào kinh nghiệm và tài nghệ của nhà soạn nhạc. Nhạc sĩ Trương Chí đã nghiên cứu nhiều ca khúc nổi tiếng và cuối cùng chọn Ngựa ô thương nhớ vì nhận thấy ca khúc này có tuyến giai điệu đẹp, cái hồn dân tộc cũng được truyền tải rất khéo léo và đầy chất thơ\".\n\nNghệ sĩ Huỳnh Quang Thái - chỉ huy dàn hợp xướng Sài Gòn - chia sẻ: \"Không phải ca khúc nào cũng phù hợp để chuyển soạn cho hợp xướng hát, vì thế khâu chọn bài phải dựa vào kinh nghiệm và tài nghệ của nhà soạn nhạc. Nhạc sĩ Trương Chí đã nghiên cứu nhiều ca khúc nổi tiếng và cuối cùng chọn Ngựa ô thương nhớ vì nhận thấy ca khúc này có tuyến giai điệu đẹp, cái hồn dân tộc cũng được truyền tải rất khéo léo và đầy chất thơ\".\n\n','https://pic-bstarstatic.akamaized.net/ugc/08930304b8a04bbacb60ce4e5944f12d.jpg@720w_405h_1e_1c_1f.webp');
/*!40000 ALTER TABLE `tbl_article` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-12-17 20:46:16

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
-- Table structure for table `tbl_commentarticle`
--

DROP TABLE IF EXISTS `tbl_commentarticle`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_commentarticle` (
  `idUser` int NOT NULL,
  `idArticle` int NOT NULL,
  `content` varchar(250) NOT NULL,
  `date_create` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`idUser`,`idArticle`,`content`,`date_create`),
  KEY `idArticle` (`idArticle`),
  CONSTRAINT `tbl_commentarticle_ibfk_1` FOREIGN KEY (`idUser`) REFERENCES `tbl_user` (`idUser`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `tbl_commentarticle_ibfk_2` FOREIGN KEY (`idArticle`) REFERENCES `tbl_article` (`idArticle`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_commentarticle`
--

LOCK TABLES `tbl_commentarticle` WRITE;
/*!40000 ALTER TABLE `tbl_commentarticle` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbl_commentarticle` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-12-17 20:46:14


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
INSERT INTO `tbl_chair` VALUES ('F7',31);
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

-- Dump completed on 2022-12-17 20:46:14


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
-- Table structure for table `tbl_voucher`
--

DROP TABLE IF EXISTS `tbl_voucher`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_voucher` (
  `idVoucher` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) DEFAULT NULL,
  `end_date` date DEFAULT (curdate()),
  `value` int NOT NULL,
  `start_date` date DEFAULT (curdate()),
  `maximum` int DEFAULT '0',
  `suffix` varchar(1) NOT NULL,
  `point` int NOT NULL DEFAULT '10',
  PRIMARY KEY (`idVoucher`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_voucher`
--

LOCK TABLES `tbl_voucher` WRITE;
/*!40000 ALTER TABLE `tbl_voucher` DISABLE KEYS */;
INSERT INTO `tbl_voucher` VALUES (10,'Nạp lần đầu','2022-12-29',12,'2022-12-16',15,'%',22),(11,'Đăng nhập lần đâu','2022-12-16',12,'2022-12-16',0,'k',22),(12,'nạp lần cuối','2022-12-17',80,'2022-12-16',0,'k',73),(13,'Lần đầu mua vé','2022-12-31',20,'2022-12-16',0,'k',10),(14,'Dẫn ny xem phim','2022-12-29',20,'2022-12-17',0,'k',12);
/*!40000 ALTER TABLE `tbl_voucher` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-12-17 20:46:14

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
-- Table structure for table `tbl_voucheruser`
--

DROP TABLE IF EXISTS `tbl_voucheruser`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_voucheruser` (
  `idUser` int NOT NULL,
  `idVoucher` int NOT NULL,
  `isUse` bit(1) DEFAULT b'0',
  PRIMARY KEY (`idUser`,`idVoucher`),
  KEY `idVoucher` (`idVoucher`),
  CONSTRAINT `tbl_voucheruser_ibfk_1` FOREIGN KEY (`idUser`) REFERENCES `tbl_user` (`idUser`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `tbl_voucheruser_ibfk_2` FOREIGN KEY (`idVoucher`) REFERENCES `tbl_voucher` (`idVoucher`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_voucheruser`
--

LOCK TABLES `tbl_voucheruser` WRITE;
/*!40000 ALTER TABLE `tbl_voucheruser` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbl_voucheruser` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-12-17 20:46:14


DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `convert_voucher`(
IN vIdVoucher INT,
IN vIdUser INT,
IN vPoint INT
)
BEGIN
INSERT INTO tbl_voucheruser (idUser, idVoucher) values (vIdUser, vIdVoucher);
UPDATE tbl_user SET point = point - vpoint WHERE idUser = vIdUser;
END

DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `get_all_tickets_user`(
IN vIdUser INT
)
BEGIN
SELECT idMovie, room, TIME_FORMAT(hour, "%H:%i") as hour, DATE_FORMAT(dateShow, '%d/%m/%Y') as dateShow , price, idTicket
FROM tbl_ticket natural join tbl_hour_show natural join tbl_show 
where idUser = vIdUser;
END

DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `take_all_hours_in_room`(
IN vroom varchar(5),
IN vDateShow varchar(20),
IN vidShow INT,
In ofShow BIT
)
BEGIN
IF(ofShow = 0) THEN
SELECT TIME_FORMAT(hour, "%H:%i") as hour FROM tbl_hour_show NATURAL JOIN tbl_show WHERE room = vroom AND dateShow = vDateShow AND idShow != vidShow;
ELSE 
SELECT TIME_FORMAT(hour, "%H:%i") as hour FROM tbl_hour_show NATURAL JOIN tbl_show WHERE room = vroom AND dateShow = vDateShow AND idShow = vidShow;
END IF;
END




-- Dump completed on 2022-12-17 20:46:15







