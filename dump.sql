-- MySQL dump 10.13  Distrib 5.5.46, for debian-linux-gnu (x86_64)
--
-- Host: mysql.server    Database: grupoej$grupoej
-- ------------------------------------------------------
-- Server version	5.5.42-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Current Database: `grupoej$grupoej`
--

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `grupoej$grupoej` /*!40100 DEFAULT CHARACTER SET utf8 */;

USE `grupoej$grupoej`;

--
-- Table structure for table `auth_group`
--

DROP TABLE IF EXISTS `auth_group`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `auth_group` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(80) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_group`
--

LOCK TABLES `auth_group` WRITE;
/*!40000 ALTER TABLE `auth_group` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_group` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_group_permissions`
--

DROP TABLE IF EXISTS `auth_group_permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `auth_group_permissions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `group_id` int(11) NOT NULL,
  `permission_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `group_id` (`group_id`,`permission_id`),
  KEY `auth_group_p_permission_id_1a3466c97533aa1_fk_auth_permission_id` (`permission_id`),
  CONSTRAINT `auth_group_permission_group_id_20b557b0e9fadd6e_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`),
  CONSTRAINT `auth_group_p_permission_id_1a3466c97533aa1_fk_auth_permission_id` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_group_permissions`
--

LOCK TABLES `auth_group_permissions` WRITE;
/*!40000 ALTER TABLE `auth_group_permissions` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_group_permissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_permission`
--

DROP TABLE IF EXISTS `auth_permission`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `auth_permission` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `content_type_id` int(11) NOT NULL,
  `codename` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `content_type_id` (`content_type_id`,`codename`),
  CONSTRAINT `auth__content_type_id_1786e9735b5625b5_fk_django_content_type_id` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=64 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_permission`
--

LOCK TABLES `auth_permission` WRITE;
/*!40000 ALTER TABLE `auth_permission` DISABLE KEYS */;
INSERT INTO `auth_permission` VALUES (1,'Can add log entry',1,'add_logentry'),(2,'Can change log entry',1,'change_logentry'),(3,'Can delete log entry',1,'delete_logentry'),(4,'Can add permission',2,'add_permission'),(5,'Can change permission',2,'change_permission'),(6,'Can delete permission',2,'delete_permission'),(7,'Can add group',3,'add_group'),(8,'Can change group',3,'change_group'),(9,'Can delete group',3,'delete_group'),(10,'Can add user',4,'add_user'),(11,'Can change user',4,'change_user'),(12,'Can delete user',4,'delete_user'),(13,'Can add content type',5,'add_contenttype'),(14,'Can change content type',5,'change_contenttype'),(15,'Can delete content type',5,'delete_contenttype'),(16,'Can add session',6,'add_session'),(17,'Can change session',6,'change_session'),(18,'Can delete session',6,'delete_session'),(19,'Can add user profile',7,'add_userprofile'),(20,'Can change user profile',7,'change_userprofile'),(21,'Can delete user profile',7,'delete_userprofile'),(22,'Can add ubigeo',8,'add_ubigeo'),(23,'Can change ubigeo',8,'change_ubigeo'),(24,'Can delete ubigeo',8,'delete_ubigeo'),(25,'Can add modulo',9,'add_modulo'),(26,'Can change modulo',9,'change_modulo'),(27,'Can delete modulo',9,'delete_modulo'),(28,'Can add menu',10,'add_menu'),(29,'Can change menu',10,'change_menu'),(30,'Can delete menu',10,'delete_menu'),(31,'Can add cliente',11,'add_cliente'),(32,'Can change cliente',11,'change_cliente'),(33,'Can delete cliente',11,'delete_cliente'),(34,'Can add prestamo',12,'add_prestamo'),(35,'Can change prestamo',12,'change_prestamo'),(36,'Can delete prestamo',12,'delete_prestamo'),(37,'Can add producto',13,'add_producto'),(38,'Can change producto',13,'change_producto'),(39,'Can delete producto',13,'delete_producto'),(40,'Can add pedido',14,'add_pedido'),(41,'Can change pedido',14,'change_pedido'),(42,'Can delete pedido',14,'delete_pedido'),(43,'Can add detalle pedido',15,'add_detallepedido'),(44,'Can change detalle pedido',15,'change_detallepedido'),(45,'Can delete detalle pedido',15,'delete_detallepedido'),(46,'Can add venta',16,'add_venta'),(47,'Can change venta',16,'change_venta'),(48,'Can delete venta',16,'delete_venta'),(49,'Can add detalle venta',17,'add_detalleventa'),(50,'Can change detalle venta',17,'change_detalleventa'),(51,'Can delete detalle venta',17,'delete_detalleventa'),(52,'Can add guia remision',18,'add_guiaremision'),(53,'Can change guia remision',18,'change_guiaremision'),(54,'Can delete guia remision',18,'delete_guiaremision'),(55,'Can add detalle guia',19,'add_detalleguia'),(56,'Can change detalle guia',19,'change_detalleguia'),(57,'Can delete detalle guia',19,'delete_detalleguia'),(58,'Can add vale',20,'add_vale'),(59,'Can change vale',20,'change_vale'),(60,'Can delete vale',20,'delete_vale'),(61,'Can add detalle vale',21,'add_detallevale'),(62,'Can change detalle vale',21,'change_detallevale'),(63,'Can delete detalle vale',21,'delete_detallevale');
/*!40000 ALTER TABLE `auth_permission` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_user`
--

DROP TABLE IF EXISTS `auth_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `auth_user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `password` varchar(128) NOT NULL,
  `last_login` datetime DEFAULT NULL,
  `is_superuser` tinyint(1) NOT NULL,
  `username` varchar(30) NOT NULL,
  `first_name` varchar(30) NOT NULL,
  `last_name` varchar(30) NOT NULL,
  `email` varchar(254) NOT NULL,
  `is_staff` tinyint(1) NOT NULL,
  `is_active` tinyint(1) NOT NULL,
  `date_joined` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_user`
--

LOCK TABLES `auth_user` WRITE;
/*!40000 ALTER TABLE `auth_user` DISABLE KEYS */;
INSERT INTO `auth_user` VALUES (1,'pbkdf2_sha256$20000$8Sw2ebvuQfpc$DrBy4b2kxLlCZ+36zvh2qUppWf2Glh0yQAROuftOJj4=','2016-01-12 03:19:24',1,'admin','Carlos Yosimar','Ruiz Vasquez','',1,1,'2016-01-09 06:24:54'),(2,'pbkdf2_sha256$20000$R8mr0AEq3zfH$77ZYWUYUJPR5mn5UN6nUXBkRGSiFOAPvn+Df5LFVKus=','2016-01-19 20:33:40',1,'jllamoctanta','Joel','Carrasco Llamoctanta','',1,1,'2016-01-09 18:08:51');
/*!40000 ALTER TABLE `auth_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_user_groups`
--

DROP TABLE IF EXISTS `auth_user_groups`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `auth_user_groups` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `group_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `user_id` (`user_id`,`group_id`),
  KEY `auth_user_groups_group_id_7b78cba2aac84c08_fk_auth_group_id` (`group_id`),
  CONSTRAINT `auth_user_groups_group_id_7b78cba2aac84c08_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`),
  CONSTRAINT `auth_user_groups_user_id_a728e71cd3390c7_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_user_groups`
--

LOCK TABLES `auth_user_groups` WRITE;
/*!40000 ALTER TABLE `auth_user_groups` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_user_groups` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_user_user_permissions`
--

DROP TABLE IF EXISTS `auth_user_user_permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `auth_user_user_permissions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `permission_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `user_id` (`user_id`,`permission_id`),
  KEY `auth_user_u_permission_id_1c4afdced2e23ceb_fk_auth_permission_id` (`permission_id`),
  CONSTRAINT `auth_user_user_permissi_user_id_390dfec66f51f817_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`),
  CONSTRAINT `auth_user_u_permission_id_1c4afdced2e23ceb_fk_auth_permission_id` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_user_user_permissions`
--

LOCK TABLES `auth_user_user_permissions` WRITE;
/*!40000 ALTER TABLE `auth_user_user_permissions` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_user_user_permissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cliente_cliente`
--

DROP TABLE IF EXISTS `cliente_cliente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cliente_cliente` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `creado` datetime NOT NULL,
  `actualizado` datetime NOT NULL,
  `nombres` varchar(150) NOT NULL,
  `apellidos` varchar(80),
  `tipo_documento` varchar(3) NOT NULL,
  `nro_documento` varchar(11) NOT NULL,
  `email` varchar(45) DEFAULT NULL,
  `telefono` varchar(10) DEFAULT NULL,
  `direccion` varchar(150) DEFAULT NULL,
  `area` varchar(200) DEFAULT NULL,
  `responsable` varchar(45) DEFAULT NULL,
  `creador_id` int(11) NOT NULL,
  `editor_id` int(11) DEFAULT NULL,
  `tipocliente` varchar(8) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `nro_documento` (`nro_documento`),
  UNIQUE KEY `telefono` (`telefono`),
  UNIQUE KEY `email` (`email`),
  KEY `cliente_cliente_creador_id_7d3570ad5cf2429a_fk_auth_user_id` (`creador_id`),
  KEY `cliente_cliente_editor_id_738650bd3524ffd_fk_auth_user_id` (`editor_id`),
  CONSTRAINT `cliente_cliente_creador_id_7d3570ad5cf2429a_fk_auth_user_id` FOREIGN KEY (`creador_id`) REFERENCES `auth_user` (`id`),
  CONSTRAINT `cliente_cliente_editor_id_738650bd3524ffd_fk_auth_user_id` FOREIGN KEY (`editor_id`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cliente_cliente`
--

LOCK TABLES `cliente_cliente` WRITE;
/*!40000 ALTER TABLE `cliente_cliente` DISABLE KEYS */;
INSERT INTO `cliente_cliente` VALUES (3,'2016-01-12 02:51:07','2016-01-12 02:51:07','joel','llamoctanta','DNI','44819962','joel.llamoctanta@grupoej.com','930278932','Jr. San Pablo 590','','',2,NULL,'NATURAL'),(4,'2016-01-12 03:23:30','2016-01-12 03:35:05','Maritza','Albines Saldaña','DNI','40207610','albines@hotmail.com','947022705','Ramón Ribeiro s/n Barrio Cruz Blanca','','',2,2,'NATURAL'),(5,'2016-01-19 04:46:55','2016-01-19 04:46:55','UNC','','RUC','20148258601','notiene@gmail.com','995117148','AV. ATAHUALPA N° 1050','PLANIFICACIÓN','Secretaria',2,NULL,'NATURAL'),(6,'2016-01-19 04:53:08','2016-01-19 04:53:08','SANTA TERESITA','','RUC','20491812991','notiene12@gmail.com','976536986','Av Atahualpa 226','6 GRADO','Prof. Gladis',2,NULL,'NATURAL'),(7,'2016-01-19 23:13:56','2016-01-19 23:21:15','Gobierno Regional Cajamarca','','RUC','20491812999','notiene@hotmail.com','#076535325','Jr. los sauces 220','recursos humanos','Sr. Juan',1,1,'NATURAL'),(8,'2016-01-19 23:16:35','2016-01-19 23:16:35','Gobierno Regional Cajamarca','','RUC','29491812992','notiene1@hotmail.com','076852313','JR. los Sauces','logisitica','Sr. Maria',1,NULL,'NATURAL');
/*!40000 ALTER TABLE `cliente_cliente` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cliente_prestamo`
--

DROP TABLE IF EXISTS `cliente_prestamo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cliente_prestamo` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `creado` datetime NOT NULL,
  `actualizado` datetime NOT NULL,
  `cantidad_entrega` smallint(5) unsigned NOT NULL,
  `cantidad_devuelta` smallint(5) unsigned NOT NULL,
  `cliente_id` int(11) NOT NULL,
  `creador_id` int(11) NOT NULL,
  `editor_id` int(11) DEFAULT NULL,
  `producto_id` int(11) NOT NULL,
  `nro_documento` varchar(45),
  `tipo_documento` varchar(30) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `cliente_presta_cliente_id_6e211d3aa3581b89_fk_cliente_cliente_id` (`cliente_id`),
  KEY `cliente_prestamo_creador_id_240df5373823632e_fk_auth_user_id` (`creador_id`),
  KEY `cliente_prestamo_editor_id_fd8c4cbb81e48f5_fk_auth_user_id` (`editor_id`),
  KEY `cliente_pre_producto_id_3c12d105c4ad1420_fk_producto_producto_id` (`producto_id`),
  CONSTRAINT `cliente_prestamo_creador_id_240df5373823632e_fk_auth_user_id` FOREIGN KEY (`creador_id`) REFERENCES `auth_user` (`id`),
  CONSTRAINT `cliente_prestamo_editor_id_fd8c4cbb81e48f5_fk_auth_user_id` FOREIGN KEY (`editor_id`) REFERENCES `auth_user` (`id`),
  CONSTRAINT `cliente_presta_cliente_id_6e211d3aa3581b89_fk_cliente_cliente_id` FOREIGN KEY (`cliente_id`) REFERENCES `cliente_cliente` (`id`),
  CONSTRAINT `cliente_pre_producto_id_3c12d105c4ad1420_fk_producto_producto_id` FOREIGN KEY (`producto_id`) REFERENCES `producto_producto` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cliente_prestamo`
--

LOCK TABLES `cliente_prestamo` WRITE;
/*!40000 ALTER TABLE `cliente_prestamo` DISABLE KEYS */;
/*!40000 ALTER TABLE `cliente_prestamo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_admin_log`
--

DROP TABLE IF EXISTS `django_admin_log`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `django_admin_log` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `action_time` datetime NOT NULL,
  `object_id` longtext,
  `object_repr` varchar(200) NOT NULL,
  `action_flag` smallint(5) unsigned NOT NULL,
  `change_message` longtext NOT NULL,
  `content_type_id` int(11) DEFAULT NULL,
  `user_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `djang_content_type_id_5149500ac6bafec9_fk_django_content_type_id` (`content_type_id`),
  KEY `django_admin_log_user_id_199a21f3390b757f_fk_auth_user_id` (`user_id`),
  CONSTRAINT `django_admin_log_user_id_199a21f3390b757f_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`),
  CONSTRAINT `djang_content_type_id_5149500ac6bafec9_fk_django_content_type_id` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=61 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_admin_log`
--

LOCK TABLES `django_admin_log` WRITE;
/*!40000 ALTER TABLE `django_admin_log` DISABLE KEYS */;
INSERT INTO `django_admin_log` VALUES (1,'2016-01-09 06:35:28','1','CONSULTAS',1,'',9,1),(2,'2016-01-09 06:37:10','2','PEDIDOS',1,'',9,1),(3,'2016-01-09 06:38:02','3','VENTAS',1,'',9,1),(4,'2016-01-09 06:38:44','4','VALES',1,'',9,1),(5,'2016-01-09 06:39:26','5','GUIAS',1,'',9,1),(6,'2016-01-09 06:39:48','6','PRODUCTOS',1,'',9,1),(7,'2016-01-09 06:40:40','7','CLIENTES',1,'',9,1),(8,'2016-01-09 06:43:41','1','Pedidos Pendientes',1,'',10,1),(9,'2016-01-09 06:44:35','2','Pedidos Vencidos',1,'',10,1),(10,'2016-01-09 06:45:11','3','REGISTRO DE PEDIDOS',1,'',10,1),(11,'2016-01-09 06:46:56','4','Ventas Registradas',1,'',10,1),(12,'2016-01-09 06:47:20','3','Registro de Pedidos',2,'Modificado/a nombre.',10,1),(13,'2016-01-09 06:49:03','5','Registro de Vales',1,'',10,1),(14,'2016-01-09 06:52:25','6','Registros de Guias',1,'',10,1),(15,'2016-01-09 06:53:38','7','Registro de Productos',1,'',10,1),(16,'2016-01-09 06:54:05','8','Registro de Clientes',1,'',10,1),(17,'2016-01-09 06:58:12','3','Registro de Pedidos',2,'Modificado/a control.',10,1),(18,'2016-01-09 07:06:22','1','SIN_COMPOROBANTE Nro000001',3,'',16,1),(19,'2016-01-09 07:06:45','2','Carlos Yosimar  Nro pedido  000002',3,'',14,1),(20,'2016-01-09 07:06:45','1','Carlos Yosimar  Nro pedido  000001',3,'',14,1),(21,'2016-01-09 07:06:57','1','Carlos Yosimar - Ruiz Vasquez',3,'',11,1),(22,'2016-01-09 18:08:51','2','jcarrasco',1,'',4,1),(23,'2016-01-09 18:36:24','2','jcarrasco',2,'Modificado/a first_name y last_name.',4,1),(24,'2016-01-09 18:36:39','2','jcarrasco',2,'Modificado/a is_staff y is_superuser.',4,1),(25,'2016-01-09 18:37:14','1','admin',2,'Modificado/a first_name y last_name.',4,1),(26,'2016-01-09 18:38:18','2','jcarrasco',2,'Modificado/a password.',4,1),(27,'2016-01-10 00:44:48','2','jllamoctanta',2,'Modificado/a username.',4,1),(28,'2016-01-10 23:28:00','2','Pedidos Vencidos',2,'Modificado/a control.',10,1),(29,'2016-01-10 23:28:00','1','Pedidos Pendientes',2,'Modificado/a control.',10,1),(30,'2016-01-11 17:43:25','1','admin',2,'Modificado/a password.',4,2),(31,'2016-01-11 17:43:43','1','admin',2,'Modificado/a password.',4,2),(32,'2016-01-13 17:15:27','4','Maritza - Albines Saldaña nro: 000004',3,'',20,1),(33,'2016-01-13 17:15:27','3','joel - llamoctanta nro: 000003',3,'',20,1),(34,'2016-01-13 17:15:27','2','joel - llamoctanta nro: 000002',3,'',20,1),(35,'2016-01-13 17:15:27','1','Maritza - Albines Saldaña nro: 000001',3,'',20,1),(36,'2016-01-13 17:15:41','8','joel  Nro pedido  000006',3,'',14,1),(37,'2016-01-13 17:15:41','7','Maritza  Nro pedido  000005',3,'',14,1),(38,'2016-01-13 17:15:41','6','Maritza  Nro pedido  000004',3,'',14,1),(39,'2016-01-13 17:15:41','5','joel  Nro pedido  000003',3,'',14,1),(40,'2016-01-13 17:15:41','4','Maritza  Nro pedido  000002',3,'',14,1),(41,'2016-01-13 17:15:41','3','joel  Nro pedido  000001',3,'',14,1),(42,'2016-01-19 04:31:56','6','Maritza - Albines Saldaña nro: 000002',3,'',20,1),(43,'2016-01-19 04:31:56','5','joel - llamoctanta nro: 000001',3,'',20,1),(44,'2016-01-19 04:32:34','12','joel  Nro pedido  000004',3,'',14,1),(45,'2016-01-19 04:32:34','11','Maritza  Nro pedido  000003',3,'',14,1),(46,'2016-01-19 04:32:34','10','joel  Nro pedido  000002',3,'',14,1),(47,'2016-01-19 04:32:34','9','joel  Nro pedido  000001',3,'',14,1),(48,'2016-01-19 19:43:28','17','Maritza  Nro pedido  000004',3,'',14,1),(49,'2016-01-19 19:43:28','16','SANTA TERESITA  Nro pedido  000004',3,'',14,1),(50,'2016-01-19 19:43:28','14','SANTA TERESITA  Nro pedido  000002',3,'',14,1),(51,'2016-01-19 19:43:28','13','UNC  Nro pedido  000001',3,'',14,1),(52,'2016-01-19 19:44:28','8','joel - llamoctanta nro: 000001',3,'',20,1),(53,'2016-01-19 23:10:54','14','SIN_COMPOROBANTE Nro087845',3,'',16,1),(54,'2016-01-19 23:10:54','13','FACTURA Nro000358',3,'',16,1),(55,'2016-01-19 23:10:54','12','BOLETA Nro000254',3,'',16,1),(56,'2016-01-19 23:10:54','11','SIN_COMPOROBANTE Nro000598',3,'',16,1),(57,'2016-01-19 23:10:54','10','BOLETA Nro000002',3,'',16,1),(58,'2016-01-19 23:11:30','10','SANTA TERESITA -  nro: 000002',3,'',20,1),(59,'2016-01-19 23:11:30','9','UNC -  nro: 000001',3,'',20,1),(60,'2016-01-19 23:11:46','2','joel',3,'',18,1);
/*!40000 ALTER TABLE `django_admin_log` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_content_type`
--

DROP TABLE IF EXISTS `django_content_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `django_content_type` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `app_label` varchar(100) NOT NULL,
  `model` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `django_content_type_app_label_290930e20df247be_uniq` (`app_label`,`model`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_content_type`
--

LOCK TABLES `django_content_type` WRITE;
/*!40000 ALTER TABLE `django_content_type` DISABLE KEYS */;
INSERT INTO `django_content_type` VALUES (1,'admin','logentry'),(3,'auth','group'),(2,'auth','permission'),(4,'auth','user'),(11,'cliente','cliente'),(12,'cliente','prestamo'),(5,'contenttypes','contenttype'),(19,'guia','detalleguia'),(18,'guia','guiaremision'),(10,'inicio','menu'),(9,'inicio','modulo'),(8,'inicio','ubigeo'),(7,'inicio','userprofile'),(15,'pedido','detallepedido'),(14,'pedido','pedido'),(13,'producto','producto'),(6,'sessions','session'),(21,'vale','detallevale'),(20,'vale','vale'),(17,'venta','detalleventa'),(16,'venta','venta');
/*!40000 ALTER TABLE `django_content_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_migrations`
--

DROP TABLE IF EXISTS `django_migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `django_migrations` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `app` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `applied` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=43 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_migrations`
--

LOCK TABLES `django_migrations` WRITE;
/*!40000 ALTER TABLE `django_migrations` DISABLE KEYS */;
INSERT INTO `django_migrations` VALUES (1,'contenttypes','0001_initial','2016-01-09 06:14:23'),(2,'auth','0001_initial','2016-01-09 06:16:33'),(3,'admin','0001_initial','2016-01-09 06:16:57'),(4,'contenttypes','0002_remove_content_type_name','2016-01-09 06:16:57'),(5,'auth','0002_alter_permission_name_max_length','2016-01-09 06:16:57'),(6,'auth','0003_alter_user_email_max_length','2016-01-09 06:16:57'),(7,'auth','0004_alter_user_username_opts','2016-01-09 06:16:57'),(8,'auth','0005_alter_user_last_login_null','2016-01-09 06:16:57'),(9,'auth','0006_require_contenttypes_0002','2016-01-09 06:16:57'),(10,'producto','0001_initial','2016-01-09 06:17:20'),(11,'cliente','0001_initial','2016-01-09 06:18:10'),(12,'cliente','0002_auto_20151102_0359','2016-01-09 06:18:34'),(13,'cliente','0003_auto_20151102_0402','2016-01-09 06:18:35'),(14,'cliente','0004_auto_20151129_0034','2016-01-09 06:18:40'),(15,'cliente','0005_remove_cliente_ubigeo','2016-01-09 06:18:40'),(16,'cliente','0006_auto_20151129_1211','2016-01-09 06:18:40'),(17,'cliente','0007_auto_20151130_2256','2016-01-09 06:18:41'),(18,'cliente','0008_auto_20151130_2313','2016-01-09 06:18:41'),(19,'pedido','0001_initial','2016-01-09 06:19:28'),(20,'venta','0001_initial','2016-01-09 06:20:15'),(21,'guia','0001_initial','2016-01-09 06:21:03'),(22,'inicio','0001_initial','2016-01-09 06:21:50'),(23,'inicio','0002_auto_20151114_2025','2016-01-09 06:22:33'),(24,'pedido','0002_auto_20151202_2308','2016-01-09 06:22:33'),(25,'pedido','0003_pedido_estado','2016-01-09 06:22:33'),(26,'pedido','0004_auto_20160109_0113','2016-01-09 06:22:33'),(27,'producto','0002_auto_20151107_0119','2016-01-09 06:22:33'),(28,'producto','0003_remove_producto_cantidad_actual','2016-01-09 06:22:33'),(29,'sessions','0001_initial','2016-01-09 06:22:56'),(30,'vale','0001_initial','2016-01-09 06:23:40'),(31,'vale','0002_auto_20151212_1206','2016-01-09 06:23:40'),(32,'vale','0003_auto_20151213_1534','2016-01-09 06:23:41'),(33,'vale','0004_auto_20151213_1622','2016-01-09 06:23:41'),(34,'vale','0005_auto_20151213_1701','2016-01-09 06:23:41'),(35,'vale','0006_auto_20160109_0113','2016-01-09 06:23:41'),(36,'venta','0002_auto_20151107_0143','2016-01-09 06:23:42'),(37,'venta','0003_remove_venta_cliente','2016-01-09 06:23:42'),(38,'venta','0004_auto_20160109_0113','2016-01-09 06:23:43'),(39,'vale','0007_auto_20160112_2347','2016-01-13 04:47:44'),(40,'venta','0005_auto_20160112_2347','2016-01-13 04:47:45'),(41,'guia','0002_auto_20160114_2328','2016-01-15 04:28:14'),(42,'cliente','0009_auto_20160119_1257','2016-01-19 17:57:23');
/*!40000 ALTER TABLE `django_migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_session`
--

DROP TABLE IF EXISTS `django_session`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `django_session` (
  `session_key` varchar(40) NOT NULL,
  `session_data` longtext NOT NULL,
  `expire_date` datetime NOT NULL,
  PRIMARY KEY (`session_key`),
  KEY `django_session_de54fa62` (`expire_date`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_session`
--

LOCK TABLES `django_session` WRITE;
/*!40000 ALTER TABLE `django_session` DISABLE KEYS */;
INSERT INTO `django_session` VALUES ('82v0vb5srrv3wczn10djipt5wkjb1ofy','MDlkMjE3ZWRhYjVhYjhlNGE5ZDlhZmUzOWQwNmU1ZTE3ZjNmZjNhMjp7Il9hdXRoX3VzZXJfaWQiOiIyIiwiX2F1dGhfdXNlcl9oYXNoIjoiZDM5ODg4OTE5MzMzZWE2YjkxODIzNjk5ZTUwMmRjNzAwNTEyMjE5ZiIsIl9hdXRoX3VzZXJfYmFja2VuZCI6ImRqYW5nby5jb250cmliLmF1dGguYmFja2VuZHMuTW9kZWxCYWNrZW5kIn0=','2016-01-26 02:29:34'),('apnyr1xxe6o4fc2rqj1e1moboi7zv1m9','NDI4NmMyZmRlOWJmZDA1YmY4MmM3NWRjNDRlMTJmM2VhYTQzNzE1Zjp7Il9hdXRoX3VzZXJfaGFzaCI6IjMxOGVlYjNmMzgxOTkwOWY5NmU2NTFhZDFkMDFlODdlMTAzN2ZjN2YiLCJfYXV0aF91c2VyX2lkIjoiMSIsIl9hdXRoX3VzZXJfYmFja2VuZCI6ImRqYW5nby5jb250cmliLmF1dGguYmFja2VuZHMuTW9kZWxCYWNrZW5kIn0=','2016-01-25 17:44:00'),('b09b5v62w352y3vs8wp0g353lqog9pq2','MDlkMjE3ZWRhYjVhYjhlNGE5ZDlhZmUzOWQwNmU1ZTE3ZjNmZjNhMjp7Il9hdXRoX3VzZXJfaWQiOiIyIiwiX2F1dGhfdXNlcl9oYXNoIjoiZDM5ODg4OTE5MzMzZWE2YjkxODIzNjk5ZTUwMmRjNzAwNTEyMjE5ZiIsIl9hdXRoX3VzZXJfYmFja2VuZCI6ImRqYW5nby5jb250cmliLmF1dGguYmFja2VuZHMuTW9kZWxCYWNrZW5kIn0=','2016-01-26 16:32:58'),('d0t2fl51oy3deu08ngt2vq80pbwmab63','MjA2YmU4MjAxMTQ4ZWRkMjdjMzYxNTlhY2E5MjU4ZDc3Mzg2NDk2ODp7Il9hdXRoX3VzZXJfaGFzaCI6ImQzOTg4ODkxOTMzM2VhNmI5MTgyMzY5OWU1MDJkYzcwMDUxMjIxOWYiLCJfYXV0aF91c2VyX2JhY2tlbmQiOiJkamFuZ28uY29udHJpYi5hdXRoLmJhY2tlbmRzLk1vZGVsQmFja2VuZCIsIl9hdXRoX3VzZXJfaWQiOiIyIn0=','2016-02-02 20:33:40'),('hgio96q1p6p53uqrk3fv4pqtueyi218d','OTY2ZTI0MGYwOWI4NzQ2ZDgwZjRjOWUwMjdmNjY1ZmM5NzhlYTc0MDp7Il9hdXRoX3VzZXJfaWQiOiIxIiwiX2F1dGhfdXNlcl9oYXNoIjoiMzE4ZWViM2YzODE5OTA5Zjk2ZTY1MWFkMWQwMWU4N2UxMDM3ZmM3ZiIsIl9hdXRoX3VzZXJfYmFja2VuZCI6ImRqYW5nby5jb250cmliLmF1dGguYmFja2VuZHMuTW9kZWxCYWNrZW5kIn0=','2016-01-26 03:19:24'),('j8rximtar6ttwnklnxyaaef6ufz0pyv6','NDI4NmMyZmRlOWJmZDA1YmY4MmM3NWRjNDRlMTJmM2VhYTQzNzE1Zjp7Il9hdXRoX3VzZXJfaGFzaCI6IjMxOGVlYjNmMzgxOTkwOWY5NmU2NTFhZDFkMDFlODdlMTAzN2ZjN2YiLCJfYXV0aF91c2VyX2lkIjoiMSIsIl9hdXRoX3VzZXJfYmFja2VuZCI6ImRqYW5nby5jb250cmliLmF1dGguYmFja2VuZHMuTW9kZWxCYWNrZW5kIn0=','2016-01-25 17:45:10'),('rt9c1f9a4g7na60qhpkrrtlvwypphl1q','OTY2ZTI0MGYwOWI4NzQ2ZDgwZjRjOWUwMjdmNjY1ZmM5NzhlYTc0MDp7Il9hdXRoX3VzZXJfaWQiOiIxIiwiX2F1dGhfdXNlcl9oYXNoIjoiMzE4ZWViM2YzODE5OTA5Zjk2ZTY1MWFkMWQwMWU4N2UxMDM3ZmM3ZiIsIl9hdXRoX3VzZXJfYmFja2VuZCI6ImRqYW5nby5jb250cmliLmF1dGguYmFja2VuZHMuTW9kZWxCYWNrZW5kIn0=','2016-01-26 01:20:50'),('ywihnaax75ut2yay01eu01wda9n6qmyw','YmZmYmZkOTI1ZDhjMGUzYTI1YjM1N2E0YjcxZmRkYTIzNDMxMTlmODp7Il9hdXRoX3VzZXJfaWQiOiIyIiwiX2F1dGhfdXNlcl9iYWNrZW5kIjoiZGphbmdvLmNvbnRyaWIuYXV0aC5iYWNrZW5kcy5Nb2RlbEJhY2tlbmQiLCJfYXV0aF91c2VyX2hhc2giOiJkMzk4ODg5MTkzMzNlYTZiOTE4MjM2OTllNTAyZGM3MDA1MTIyMTlmIn0=','2016-02-02 04:18:05');
/*!40000 ALTER TABLE `django_session` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `guia_detalleguia`
--

DROP TABLE IF EXISTS `guia_detalleguia`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `guia_detalleguia` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `creado` datetime NOT NULL,
  `actualizado` datetime NOT NULL,
  `cantidad` smallint(5) unsigned NOT NULL,
  `creador_id` int(11) NOT NULL,
  `editor_id` int(11) DEFAULT NULL,
  `guia_remision_id` int(11) NOT NULL,
  `producto_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `guia_detalleguia_creador_id_547deabc45b19e26_fk_auth_user_id` (`creador_id`),
  KEY `guia_detalleguia_editor_id_26c8b1ac5eec0c3_fk_auth_user_id` (`editor_id`),
  KEY `guia_detalleguia_eb83a8d5` (`guia_remision_id`),
  KEY `guia_detalleguia_bb91903a` (`producto_id`),
  CONSTRAINT `guia_detalleguia_creador_id_547deabc45b19e26_fk_auth_user_id` FOREIGN KEY (`creador_id`) REFERENCES `auth_user` (`id`),
  CONSTRAINT `guia_detalleguia_editor_id_26c8b1ac5eec0c3_fk_auth_user_id` FOREIGN KEY (`editor_id`) REFERENCES `auth_user` (`id`),
  CONSTRAINT `guia_detall_producto_id_4719cc71b438db18_fk_producto_producto_id` FOREIGN KEY (`producto_id`) REFERENCES `producto_producto` (`id`),
  CONSTRAINT `guia_d_guia_remision_id_162c5735e1fa0427_fk_guia_guiaremision_id` FOREIGN KEY (`guia_remision_id`) REFERENCES `guia_guiaremision` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `guia_detalleguia`
--

LOCK TABLES `guia_detalleguia` WRITE;
/*!40000 ALTER TABLE `guia_detalleguia` DISABLE KEYS */;
/*!40000 ALTER TABLE `guia_detalleguia` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `guia_guiaremision`
--

DROP TABLE IF EXISTS `guia_guiaremision`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `guia_guiaremision` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `creado` datetime NOT NULL,
  `actualizado` datetime NOT NULL,
  `punto_partida` varchar(500) NOT NULL,
  `punto_llegada` varchar(500) NOT NULL,
  `fecha_emision` date NOT NULL,
  `fecha_translado` date NOT NULL,
  `cliente_id` int(11) NOT NULL,
  `creador_id` int(11) NOT NULL,
  `editor_id` int(11) DEFAULT NULL,
  `pedido_id` int(11),
  PRIMARY KEY (`id`),
  KEY `guia_guiaremis_cliente_id_699165376ec726c0_fk_cliente_cliente_id` (`cliente_id`),
  KEY `guia_guiaremision_creador_id_495d4a21f2d21a7d_fk_auth_user_id` (`creador_id`),
  KEY `guia_guiaremision_editor_id_48ddeaf75ad142e6_fk_auth_user_id` (`editor_id`),
  KEY `guia_guiaremision_8253d097` (`pedido_id`),
  CONSTRAINT `guia_guiaremision_creador_id_495d4a21f2d21a7d_fk_auth_user_id` FOREIGN KEY (`creador_id`) REFERENCES `auth_user` (`id`),
  CONSTRAINT `guia_guiaremision_editor_id_48ddeaf75ad142e6_fk_auth_user_id` FOREIGN KEY (`editor_id`) REFERENCES `auth_user` (`id`),
  CONSTRAINT `guia_guiaremision_pedido_id_14ff223401a7d068_fk_pedido_pedido_id` FOREIGN KEY (`pedido_id`) REFERENCES `pedido_pedido` (`id`),
  CONSTRAINT `guia_guiaremis_cliente_id_699165376ec726c0_fk_cliente_cliente_id` FOREIGN KEY (`cliente_id`) REFERENCES `cliente_cliente` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `guia_guiaremision`
--

LOCK TABLES `guia_guiaremision` WRITE;
/*!40000 ALTER TABLE `guia_guiaremision` DISABLE KEYS */;
/*!40000 ALTER TABLE `guia_guiaremision` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `inicio_menu`
--

DROP TABLE IF EXISTS `inicio_menu`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `inicio_menu` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `creado` datetime NOT NULL,
  `actualizado` datetime NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `iconoclase` varchar(100) DEFAULT NULL,
  `orden` smallint(6) NOT NULL,
  `control` varchar(250) NOT NULL,
  `creador_id` int(11) NOT NULL,
  `editor_id` int(11) DEFAULT NULL,
  `menupadre_id` int(11) DEFAULT NULL,
  `modulo_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `inicio_menu_creador_id_1b10b135e8d7ba40_fk_auth_user_id` (`creador_id`),
  KEY `inicio_menu_editor_id_1203fd27e9afe9ef_fk_auth_user_id` (`editor_id`),
  KEY `inicio_menu_menupadre_id_32e9181f5137fce1_fk_inicio_menu_id` (`menupadre_id`),
  KEY `inicio_menu_7ba91c57` (`modulo_id`),
  CONSTRAINT `inicio_menu_creador_id_1b10b135e8d7ba40_fk_auth_user_id` FOREIGN KEY (`creador_id`) REFERENCES `auth_user` (`id`),
  CONSTRAINT `inicio_menu_editor_id_1203fd27e9afe9ef_fk_auth_user_id` FOREIGN KEY (`editor_id`) REFERENCES `auth_user` (`id`),
  CONSTRAINT `inicio_menu_menupadre_id_32e9181f5137fce1_fk_inicio_menu_id` FOREIGN KEY (`menupadre_id`) REFERENCES `inicio_menu` (`id`),
  CONSTRAINT `inicio_menu_modulo_id_4ec5a5343b338c35_fk_inicio_modulo_id` FOREIGN KEY (`modulo_id`) REFERENCES `inicio_modulo` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `inicio_menu`
--

LOCK TABLES `inicio_menu` WRITE;
/*!40000 ALTER TABLE `inicio_menu` DISABLE KEYS */;
INSERT INTO `inicio_menu` VALUES (1,'2016-01-09 06:43:41','2016-01-10 23:28:00','Pedidos Pendientes','',1,'inicio.view.pedidospendientes.PedidoPendiente',1,NULL,NULL,1),(2,'2016-01-09 06:44:35','2016-01-10 23:28:00','Pedidos Vencidos','',2,'inicio.view.pedidosvencidos.PedidoVencido',1,NULL,NULL,1),(3,'2016-01-09 06:45:11','2016-01-09 06:58:12','Registro de Pedidos','',1,'pedido.view.pedidos.Pedido',1,NULL,NULL,2),(4,'2016-01-09 06:46:56','2016-01-09 06:46:56','Ventas Registradas','',1,'venta.view.ventas.Venta',1,NULL,NULL,3),(5,'2016-01-09 06:49:03','2016-01-09 06:49:03','Registro de Vales','',1,'vale.view.vales.Vale',1,NULL,NULL,4),(6,'2016-01-09 06:52:25','2016-01-09 06:52:25','Registros de Guias','',1,'guia.view.guias.Guia',1,NULL,NULL,5),(7,'2016-01-09 06:53:38','2016-01-09 06:53:38','Registro de Productos','',1,'producto.view.productos.Producto',1,NULL,NULL,6),(8,'2016-01-09 06:54:05','2016-01-09 06:54:05','Registro de Clientes','',1,'cliente.view.clientes.Cliente',1,NULL,NULL,7);
/*!40000 ALTER TABLE `inicio_menu` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `inicio_modulo`
--

DROP TABLE IF EXISTS `inicio_modulo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `inicio_modulo` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `creado` datetime NOT NULL,
  `actualizado` datetime NOT NULL,
  `nombre` varchar(20) NOT NULL,
  `orden` smallint(6) NOT NULL,
  `creador_id` int(11) NOT NULL,
  `editor_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `inicio_modulo_creador_id_38d861f85c683d13_fk_auth_user_id` (`creador_id`),
  KEY `inicio_modulo_editor_id_7b58b8ca629f0d7c_fk_auth_user_id` (`editor_id`),
  CONSTRAINT `inicio_modulo_creador_id_38d861f85c683d13_fk_auth_user_id` FOREIGN KEY (`creador_id`) REFERENCES `auth_user` (`id`),
  CONSTRAINT `inicio_modulo_editor_id_7b58b8ca629f0d7c_fk_auth_user_id` FOREIGN KEY (`editor_id`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `inicio_modulo`
--

LOCK TABLES `inicio_modulo` WRITE;
/*!40000 ALTER TABLE `inicio_modulo` DISABLE KEYS */;
INSERT INTO `inicio_modulo` VALUES (1,'2016-01-09 06:35:28','2016-01-09 06:35:28','CONSULTAS',1,1,NULL),(2,'2016-01-09 06:37:10','2016-01-09 06:37:10','PEDIDOS',2,1,NULL),(3,'2016-01-09 06:38:02','2016-01-09 06:38:02','VENTAS',3,1,NULL),(4,'2016-01-09 06:38:44','2016-01-09 06:38:44','VALES',4,1,NULL),(5,'2016-01-09 06:39:26','2016-01-09 06:39:26','GUIAS',5,1,NULL),(6,'2016-01-09 06:39:48','2016-01-09 06:39:48','PRODUCTOS',6,1,NULL),(7,'2016-01-09 06:40:40','2016-01-09 06:40:40','CLIENTES',7,1,NULL);
/*!40000 ALTER TABLE `inicio_modulo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `inicio_ubigeo`
--

DROP TABLE IF EXISTS `inicio_ubigeo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `inicio_ubigeo` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `coddpto` varchar(2) NOT NULL,
  `codprov` varchar(2) NOT NULL,
  `coddist` varchar(2) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `capital` varchar(100) NOT NULL,
  `regionid` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `inicio_ubigeo`
--

LOCK TABLES `inicio_ubigeo` WRITE;
/*!40000 ALTER TABLE `inicio_ubigeo` DISABLE KEYS */;
/*!40000 ALTER TABLE `inicio_ubigeo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `inicio_userprofile`
--

DROP TABLE IF EXISTS `inicio_userprofile`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `inicio_userprofile` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `tipousuario` varchar(1) NOT NULL,
  `user_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `user_id` (`user_id`),
  CONSTRAINT `inicio_userprofile_user_id_36b8eddea3a1351a_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `inicio_userprofile`
--

LOCK TABLES `inicio_userprofile` WRITE;
/*!40000 ALTER TABLE `inicio_userprofile` DISABLE KEYS */;
/*!40000 ALTER TABLE `inicio_userprofile` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pedido_detallepedido`
--

DROP TABLE IF EXISTS `pedido_detallepedido`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `pedido_detallepedido` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `creado` datetime NOT NULL,
  `actualizado` datetime NOT NULL,
  `cantidad` smallint(5) unsigned NOT NULL,
  `creador_id` int(11) NOT NULL,
  `editor_id` int(11) DEFAULT NULL,
  `pedido_id` int(11) NOT NULL,
  `producto_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `pedido_detallepedido_creador_id_c916c5107d6abc_fk_auth_user_id` (`creador_id`),
  KEY `pedido_detallepedido_editor_id_43e9d4a3c2c40c2d_fk_auth_user_id` (`editor_id`),
  KEY `pedido_detallepedido_8253d097` (`pedido_id`),
  KEY `pedido_detallepedido_bb91903a` (`producto_id`),
  CONSTRAINT `pedido_detallepedido_creador_id_c916c5107d6abc_fk_auth_user_id` FOREIGN KEY (`creador_id`) REFERENCES `auth_user` (`id`),
  CONSTRAINT `pedido_detallepedido_editor_id_43e9d4a3c2c40c2d_fk_auth_user_id` FOREIGN KEY (`editor_id`) REFERENCES `auth_user` (`id`),
  CONSTRAINT `pedido_detallepedi_pedido_id_76f3b9bedbf47b6_fk_pedido_pedido_id` FOREIGN KEY (`pedido_id`) REFERENCES `pedido_pedido` (`id`),
  CONSTRAINT `pedido_deta_producto_id_17f588cdde7945de_fk_producto_producto_id` FOREIGN KEY (`producto_id`) REFERENCES `producto_producto` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=38 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pedido_detallepedido`
--

LOCK TABLES `pedido_detallepedido` WRITE;
/*!40000 ALTER TABLE `pedido_detallepedido` DISABLE KEYS */;
INSERT INTO `pedido_detallepedido` VALUES (20,'2016-01-19 19:51:58','2016-01-19 19:51:58',4,1,NULL,18,10),(21,'2016-01-19 20:08:13','2016-01-19 20:08:13',3,1,NULL,19,4),(22,'2016-01-19 20:38:50','2016-01-19 20:38:50',1,2,NULL,20,7),(23,'2016-01-19 20:38:54','2016-01-19 20:38:55',1,2,NULL,20,3),(24,'2016-01-19 20:46:08','2016-01-19 20:46:08',1,2,NULL,22,7),(25,'2016-01-19 20:46:08','2016-01-19 20:46:08',1,2,NULL,22,3),(26,'2016-01-19 21:05:41','2016-01-19 21:05:41',1,2,NULL,23,10),(27,'2016-01-19 21:06:19','2016-01-19 21:06:19',1,2,NULL,24,10),(29,'2016-01-19 21:07:49','2016-01-19 21:07:49',1,2,NULL,26,10),(30,'2016-01-19 21:39:21','2016-01-19 21:39:21',3,1,NULL,22,4),(31,'2016-01-19 21:39:35','2016-01-19 21:39:35',2,1,NULL,21,3),(32,'2016-01-19 21:39:40','2016-01-19 21:39:40',2,1,NULL,21,10),(33,'2016-01-19 21:41:32','2016-01-19 21:41:32',2,1,NULL,18,2),(35,'2016-01-19 21:47:11','2016-01-19 21:47:11',3,1,NULL,21,9),(36,'2016-01-19 23:30:09','2016-01-19 23:30:09',20,1,NULL,27,10),(37,'2016-01-19 23:38:43','2016-01-19 23:38:43',20,1,NULL,28,10);
/*!40000 ALTER TABLE `pedido_detallepedido` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pedido_pedido`
--

DROP TABLE IF EXISTS `pedido_pedido`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `pedido_pedido` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `creado` datetime NOT NULL,
  `actualizado` datetime NOT NULL,
  `fecha_pedido` date NOT NULL,
  `fecha_entrega` date DEFAULT NULL,
  `nro_pedido` varchar(10) NOT NULL,
  `cliente_id` int(11) NOT NULL,
  `creador_id` int(11) NOT NULL,
  `editor_id` int(11) DEFAULT NULL,
  `estado` tinyint(1) NOT NULL,
  `nro_dias` smallint(5) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `pedido_pedido_cliente_id_7e4eec5d5938fa1f_fk_cliente_cliente_id` (`cliente_id`),
  KEY `pedido_pedido_creador_id_752e5f882becb5d6_fk_auth_user_id` (`creador_id`),
  KEY `pedido_pedido_editor_id_44b348cf7a27b9ed_fk_auth_user_id` (`editor_id`),
  CONSTRAINT `pedido_pedido_cliente_id_7e4eec5d5938fa1f_fk_cliente_cliente_id` FOREIGN KEY (`cliente_id`) REFERENCES `cliente_cliente` (`id`),
  CONSTRAINT `pedido_pedido_creador_id_752e5f882becb5d6_fk_auth_user_id` FOREIGN KEY (`creador_id`) REFERENCES `auth_user` (`id`),
  CONSTRAINT `pedido_pedido_editor_id_44b348cf7a27b9ed_fk_auth_user_id` FOREIGN KEY (`editor_id`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pedido_pedido`
--

LOCK TABLES `pedido_pedido` WRITE;
/*!40000 ALTER TABLE `pedido_pedido` DISABLE KEYS */;
INSERT INTO `pedido_pedido` VALUES (18,'2016-01-19 19:51:40','2016-01-19 19:51:40','2016-01-19','2016-01-24','000001',6,1,NULL,0,5),(19,'2016-01-19 19:52:10','2016-01-19 20:08:21','2016-01-19','2016-01-20','000002',5,1,NULL,1,1),(20,'2016-01-19 20:38:35','2016-01-19 20:46:08','2016-01-19','2016-01-20','000003',5,2,NULL,1,1),(21,'2016-01-19 20:45:25','2016-01-19 20:45:25','2016-01-19','2016-01-20','000004',5,2,NULL,0,1),(22,'2016-01-19 20:46:08','2016-01-19 20:46:08','2016-01-19','2016-01-20','000005',5,2,NULL,0,1),(23,'2016-01-19 21:05:41','2016-01-19 21:06:19','2016-01-19','2016-01-19','000006',5,2,NULL,1,0),(24,'2016-01-19 21:06:19','2016-01-19 21:06:41','2016-01-19','2016-01-24','000007',5,2,NULL,1,5),(26,'2016-01-19 21:07:49','2016-01-19 21:08:22','2016-01-19','2016-01-19','000009',6,2,NULL,1,0),(27,'2016-01-19 23:29:39','2016-01-19 23:38:43','2016-01-19','2016-01-20','000009',8,1,NULL,1,1),(28,'2016-01-19 23:38:43','2016-01-19 23:38:43','2016-01-19','2016-01-20','000010',8,1,NULL,0,1);
/*!40000 ALTER TABLE `pedido_pedido` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `producto_producto`
--

DROP TABLE IF EXISTS `producto_producto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `producto_producto` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `creado` datetime NOT NULL,
  `actualizado` datetime NOT NULL,
  `descripcion` varchar(200) NOT NULL,
  `precio` decimal(10,2) NOT NULL,
  `imagen` varchar(100) DEFAULT NULL,
  `creador_id` int(11) NOT NULL,
  `editor_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `producto_producto_creador_id_30bff40c7ff90f64_fk_auth_user_id` (`creador_id`),
  KEY `producto_producto_editor_id_6b4bf2f46553f52b_fk_auth_user_id` (`editor_id`),
  CONSTRAINT `producto_producto_creador_id_30bff40c7ff90f64_fk_auth_user_id` FOREIGN KEY (`creador_id`) REFERENCES `auth_user` (`id`),
  CONSTRAINT `producto_producto_editor_id_6b4bf2f46553f52b_fk_auth_user_id` FOREIGN KEY (`editor_id`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `producto_producto`
--

LOCK TABLES `producto_producto` WRITE;
/*!40000 ALTER TABLE `producto_producto` DISABLE KEYS */;
INSERT INTO `producto_producto` VALUES (2,'2016-01-12 02:51:47','2016-01-19 04:39:27','BIDÓN DE AGUA ECOVID CON VÁLVULA -TRANSPARENTE- 20 lts.',10.00,'photos/Botellon_Con_Caño.jpg',2,2),(3,'2016-01-12 03:25:48','2016-01-19 04:39:09','BIDÓN DE AGUA ECOVID -RECTANGULAR CELESTE- 20 lts.',10.00,'photos/Bidonce_celeste.jpg',2,2),(4,'2016-01-19 04:33:40','2016-01-19 04:41:28','BIDÓN DE AGUA ECOVID CON CAÑO  -TRANSPARENTE- 20 lts.',10.00,'photos/B_caño.png',2,2),(5,'2016-01-19 04:34:14','2016-01-19 04:38:12','BIDÓN DE AGUA ECOVID CON CAÑO -BLANCO- 20 lts.',10.00,'',2,2),(6,'2016-01-19 04:35:30','2016-01-19 04:38:01','BIDÓN DE AGUA ECOVID CON VÁLVULA -BLANCO- 20 lts.',10.00,'',2,2),(7,'2016-01-19 04:35:59','2016-01-19 04:37:49','BIDÓN DE AGUA ECOVID CON BASE -TRANSPARENTE- 20 lts.',10.00,'',2,2),(8,'2016-01-19 04:36:10','2016-01-19 04:37:10','BIDÓN DE AGUA ECOVID CON BASE -BLANCO- 20 lts. ',10.00,'',2,2),(9,'2016-01-19 04:36:21','2016-01-19 04:37:32','BIDÓN DE AGUA ECOVID CON BASE -OTRO- 20 lts.',10.00,'',2,2),(10,'2016-01-19 04:42:39','2016-01-19 04:59:56','CAJA DE AGUA ECOVID 20 lts.',20.00,'photos/AGUA_EN_CAJA_20_LTS.png',2,2);
/*!40000 ALTER TABLE `producto_producto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vale_detallevale`
--

DROP TABLE IF EXISTS `vale_detallevale`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `vale_detallevale` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `creado` datetime NOT NULL,
  `actualizado` datetime NOT NULL,
  `cantidad` smallint(5) unsigned NOT NULL,
  `precio` decimal(10,2) NOT NULL,
  `creador_id` int(11) NOT NULL,
  `editor_id` int(11) DEFAULT NULL,
  `producto_id` int(11) NOT NULL,
  `vale_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `vale_detallevale_creador_id_6ef847ae3c970aa4_fk_auth_user_id` (`creador_id`),
  KEY `vale_detallevale_editor_id_ea61e4fb07349eb_fk_auth_user_id` (`editor_id`),
  KEY `vale_detall_producto_id_5f4ffffbd3ab0ff6_fk_producto_producto_id` (`producto_id`),
  KEY `vale_detallevale_9c93d103` (`vale_id`),
  CONSTRAINT `vale_detallevale_creador_id_6ef847ae3c970aa4_fk_auth_user_id` FOREIGN KEY (`creador_id`) REFERENCES `auth_user` (`id`),
  CONSTRAINT `vale_detallevale_editor_id_ea61e4fb07349eb_fk_auth_user_id` FOREIGN KEY (`editor_id`) REFERENCES `auth_user` (`id`),
  CONSTRAINT `vale_detallevale_vale_id_5f48540f702a7b77_fk_vale_vale_id` FOREIGN KEY (`vale_id`) REFERENCES `vale_vale` (`id`),
  CONSTRAINT `vale_detall_producto_id_5f4ffffbd3ab0ff6_fk_producto_producto_id` FOREIGN KEY (`producto_id`) REFERENCES `producto_producto` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vale_detallevale`
--

LOCK TABLES `vale_detallevale` WRITE;
/*!40000 ALTER TABLE `vale_detallevale` DISABLE KEYS */;
INSERT INTO `vale_detallevale` VALUES (13,'2016-01-19 23:41:12','2016-01-19 23:41:12',3,10.00,1,NULL,2,11);
/*!40000 ALTER TABLE `vale_detallevale` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vale_vale`
--

DROP TABLE IF EXISTS `vale_vale`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `vale_vale` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `creado` datetime NOT NULL,
  `actualizado` datetime NOT NULL,
  `fecha` date NOT NULL,
  `numero` varchar(10) DEFAULT NULL,
  `total` decimal(10,2) DEFAULT NULL,
  `observaciones` longtext,
  `cliente_id` int(11) NOT NULL,
  `creador_id` int(11) NOT NULL,
  `editor_id` int(11) DEFAULT NULL,
  `pedido_id` int(11),
  PRIMARY KEY (`id`),
  KEY `vale_vale_creador_id_19a4e30a2a18cde9_fk_auth_user_id` (`creador_id`),
  KEY `vale_vale_editor_id_8114b6984d3783a_fk_auth_user_id` (`editor_id`),
  KEY `vale_vale_cliente_id_1f55faca9768194_fk_cliente_cliente_id` (`cliente_id`),
  KEY `vale_vale_8253d097` (`pedido_id`),
  CONSTRAINT `vale_vale_cliente_id_1f55faca9768194_fk_cliente_cliente_id` FOREIGN KEY (`cliente_id`) REFERENCES `cliente_cliente` (`id`),
  CONSTRAINT `vale_vale_creador_id_19a4e30a2a18cde9_fk_auth_user_id` FOREIGN KEY (`creador_id`) REFERENCES `auth_user` (`id`),
  CONSTRAINT `vale_vale_editor_id_8114b6984d3783a_fk_auth_user_id` FOREIGN KEY (`editor_id`) REFERENCES `auth_user` (`id`),
  CONSTRAINT `vale_vale_pedido_id_3e474194b392d0fc_fk_pedido_pedido_id` FOREIGN KEY (`pedido_id`) REFERENCES `pedido_pedido` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vale_vale`
--

LOCK TABLES `vale_vale` WRITE;
/*!40000 ALTER TABLE `vale_vale` DISABLE KEYS */;
INSERT INTO `vale_vale` VALUES (11,'2016-01-19 23:41:03','2016-01-19 23:41:12','2016-01-19','000001',30.00,'',3,1,NULL,NULL);
/*!40000 ALTER TABLE `vale_vale` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `venta_detalleventa`
--

DROP TABLE IF EXISTS `venta_detalleventa`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `venta_detalleventa` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `creado` datetime NOT NULL,
  `actualizado` datetime NOT NULL,
  `cantidad` smallint(5) unsigned NOT NULL,
  `precio` decimal(10,2) NOT NULL,
  `creador_id` int(11) NOT NULL,
  `editor_id` int(11) DEFAULT NULL,
  `producto_id` int(11) NOT NULL,
  `venta_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `venta_detalleventa_creador_id_6ad8c6e1f3d073b9_fk_auth_user_id` (`creador_id`),
  KEY `venta_detalleventa_editor_id_193277fbb6eff9f6_fk_auth_user_id` (`editor_id`),
  KEY `venta_detal_producto_id_7be1d1b432fd5815_fk_producto_producto_id` (`producto_id`),
  KEY `venta_detalleventa_a3d89257` (`venta_id`),
  CONSTRAINT `venta_detalleventa_creador_id_6ad8c6e1f3d073b9_fk_auth_user_id` FOREIGN KEY (`creador_id`) REFERENCES `auth_user` (`id`),
  CONSTRAINT `venta_detalleventa_editor_id_193277fbb6eff9f6_fk_auth_user_id` FOREIGN KEY (`editor_id`) REFERENCES `auth_user` (`id`),
  CONSTRAINT `venta_detalleventa_venta_id_26d7d29167905f2b_fk_venta_venta_id` FOREIGN KEY (`venta_id`) REFERENCES `venta_venta` (`id`),
  CONSTRAINT `venta_detal_producto_id_7be1d1b432fd5815_fk_producto_producto_id` FOREIGN KEY (`producto_id`) REFERENCES `producto_producto` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `venta_detalleventa`
--

LOCK TABLES `venta_detalleventa` WRITE;
/*!40000 ALTER TABLE `venta_detalleventa` DISABLE KEYS */;
INSERT INTO `venta_detalleventa` VALUES (19,'2016-01-19 23:38:43','2016-01-19 23:38:43',20,20.00,1,NULL,10,15);
/*!40000 ALTER TABLE `venta_detalleventa` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `venta_venta`
--

DROP TABLE IF EXISTS `venta_venta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `venta_venta` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `creado` datetime NOT NULL,
  `actualizado` datetime NOT NULL,
  `fecha` date NOT NULL,
  `tipo_documento` varchar(30) NOT NULL,
  `numero_documento` varchar(10) NOT NULL,
  `numero_correlativo` varchar(4) NOT NULL,
  `sub_total` decimal(10,2) DEFAULT NULL,
  `igv` decimal(10,2) DEFAULT NULL,
  `total` decimal(10,2) DEFAULT NULL,
  `creador_id` int(11) NOT NULL,
  `editor_id` int(11) DEFAULT NULL,
  `pedido_id` int(11) DEFAULT NULL,
  `estado` varchar(20) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `venta_venta_creador_id_3aa1a00d3d2ae7a4_fk_auth_user_id` (`creador_id`),
  KEY `venta_venta_editor_id_726f6e3d19bed915_fk_auth_user_id` (`editor_id`),
  KEY `venta_venta_pedido_id_59bc666558778778_fk_pedido_pedido_id` (`pedido_id`),
  CONSTRAINT `venta_venta_creador_id_3aa1a00d3d2ae7a4_fk_auth_user_id` FOREIGN KEY (`creador_id`) REFERENCES `auth_user` (`id`),
  CONSTRAINT `venta_venta_editor_id_726f6e3d19bed915_fk_auth_user_id` FOREIGN KEY (`editor_id`) REFERENCES `auth_user` (`id`),
  CONSTRAINT `venta_venta_pedido_id_59bc666558778778_fk_pedido_pedido_id` FOREIGN KEY (`pedido_id`) REFERENCES `pedido_pedido` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `venta_venta`
--

LOCK TABLES `venta_venta` WRITE;
/*!40000 ALTER TABLE `venta_venta` DISABLE KEYS */;
INSERT INTO `venta_venta` VALUES (15,'2016-01-19 23:38:43','2016-01-19 23:38:43','2016-01-19','BOLETA','000001','0001',338.98,61.02,400.00,1,NULL,27,'ACTIVO');
/*!40000 ALTER TABLE `venta_venta` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2016-01-20 15:16:43
