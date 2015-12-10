CREATE DATABASE  IF NOT EXISTS `grupoej` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `grupoej`;
-- MySQL dump 10.13  Distrib 5.6.27, for debian-linux-gnu (x86_64)
--
-- Host: localhost    Database: grupoej
-- ------------------------------------------------------
-- Server version	5.6.27-0ubuntu0.14.04.1

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
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
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
  KEY `auth_group__permission_id_7cbf99c96fb369c7_fk_auth_permission_id` (`permission_id`),
  CONSTRAINT `auth_group__permission_id_7cbf99c96fb369c7_fk_auth_permission_id` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  CONSTRAINT `auth_group_permissions_group_id_fdc3a71dbe00e46_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
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
  CONSTRAINT `auth__content_type_id_7cc7794de9b32a5b_fk_django_content_type_id` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=67 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_permission`
--

LOCK TABLES `auth_permission` WRITE;
/*!40000 ALTER TABLE `auth_permission` DISABLE KEYS */;
INSERT INTO `auth_permission` VALUES (1,'Can add log entry',1,'add_logentry'),(2,'Can change log entry',1,'change_logentry'),(3,'Can delete log entry',1,'delete_logentry'),(4,'Can add permission',2,'add_permission'),(5,'Can change permission',2,'change_permission'),(6,'Can delete permission',2,'delete_permission'),(7,'Can add group',3,'add_group'),(8,'Can change group',3,'change_group'),(9,'Can delete group',3,'delete_group'),(10,'Can add user',4,'add_user'),(11,'Can change user',4,'change_user'),(12,'Can delete user',4,'delete_user'),(13,'Can add content type',5,'add_contenttype'),(14,'Can change content type',5,'change_contenttype'),(15,'Can delete content type',5,'delete_contenttype'),(16,'Can add session',6,'add_session'),(17,'Can change session',6,'change_session'),(18,'Can delete session',6,'delete_session'),(19,'Can add user profile',7,'add_userprofile'),(20,'Can change user profile',7,'change_userprofile'),(21,'Can delete user profile',7,'delete_userprofile'),(22,'Can add ubigeo',8,'add_ubigeo'),(23,'Can change ubigeo',8,'change_ubigeo'),(24,'Can delete ubigeo',8,'delete_ubigeo'),(28,'Can add cliente',10,'add_cliente'),(29,'Can change cliente',10,'change_cliente'),(30,'Can delete cliente',10,'delete_cliente'),(31,'Can add producto',11,'add_producto'),(32,'Can change producto',11,'change_producto'),(33,'Can delete producto',11,'delete_producto'),(34,'Can add pedido',12,'add_pedido'),(35,'Can change pedido',12,'change_pedido'),(36,'Can delete pedido',12,'delete_pedido'),(37,'Can add detalle pedido',13,'add_detallepedido'),(38,'Can change detalle pedido',13,'change_detallepedido'),(39,'Can delete detalle pedido',13,'delete_detallepedido'),(40,'Can add venta',14,'add_venta'),(41,'Can change venta',14,'change_venta'),(42,'Can delete venta',14,'delete_venta'),(43,'Can add detalle venta',15,'add_detalleventa'),(44,'Can change detalle venta',15,'change_detalleventa'),(45,'Can delete detalle venta',15,'delete_detalleventa'),(46,'Can add guia remision',16,'add_guiaremision'),(47,'Can change guia remision',16,'change_guiaremision'),(48,'Can delete guia remision',16,'delete_guiaremision'),(49,'Can add detalle guia',17,'add_detalleguia'),(50,'Can change detalle guia',17,'change_detalleguia'),(51,'Can delete detalle guia',17,'delete_detalleguia'),(52,'Can add vale',18,'add_vale'),(53,'Can change vale',18,'change_vale'),(54,'Can delete vale',18,'delete_vale'),(55,'Can add detalle vale',19,'add_detallevale'),(56,'Can change detalle vale',19,'change_detallevale'),(57,'Can delete detalle vale',19,'delete_detallevale'),(58,'Can add prestamo',20,'add_prestamo'),(59,'Can change prestamo',20,'change_prestamo'),(60,'Can delete prestamo',20,'delete_prestamo'),(61,'Can add modulo',21,'add_modulo'),(62,'Can change modulo',21,'change_modulo'),(63,'Can delete modulo',21,'delete_modulo'),(64,'Can add menu',22,'add_menu'),(65,'Can change menu',22,'change_menu'),(66,'Can delete menu',22,'delete_menu');
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
  `last_login` datetime(6) DEFAULT NULL,
  `is_superuser` tinyint(1) NOT NULL,
  `username` varchar(30) NOT NULL,
  `first_name` varchar(30) NOT NULL,
  `last_name` varchar(30) NOT NULL,
  `email` varchar(254) NOT NULL,
  `is_staff` tinyint(1) NOT NULL,
  `is_active` tinyint(1) NOT NULL,
  `date_joined` datetime(6) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_user`
--

LOCK TABLES `auth_user` WRITE;
/*!40000 ALTER TABLE `auth_user` DISABLE KEYS */;
INSERT INTO `auth_user` VALUES (1,'pbkdf2_sha256$20000$63ytICabX6n6$A8rTO2YUUy+cH4MyYNV3urpn1GgySvJlL2IHiprk13U=','2015-12-07 04:37:10.146776',1,'admin','','','cyrv@hotmail.com',1,1,'2015-11-02 03:32:16.279137'),(2,'pbkdf2_sha256$20000$qDg7mRlSFajk$vpXjGWjGzhW0VFx0tfop9hZc4rF8b2y469+nMqp65SY=','2015-11-13 03:50:55.271969',1,'carlos','','','',1,1,'2015-11-13 03:41:41.208008');
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
  KEY `auth_user_groups_group_id_15bcdf4c7aecc369_fk_auth_group_id` (`group_id`),
  CONSTRAINT `auth_user_groups_group_id_15bcdf4c7aecc369_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`),
  CONSTRAINT `auth_user_groups_user_id_26332ce9d1c9eee0_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
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
  KEY `auth_user_us_permission_id_604f2b49fb36cc8_fk_auth_permission_id` (`permission_id`),
  CONSTRAINT `auth_user_us_permission_id_604f2b49fb36cc8_fk_auth_permission_id` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  CONSTRAINT `auth_user_user_permissi_user_id_206b7992a567bfb0_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
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
  `creado` datetime(6) NOT NULL,
  `actualizado` datetime(6) NOT NULL,
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
  KEY `cliente_cliente_creador_id_7237daca72679a27_fk_auth_user_id` (`creador_id`),
  KEY `cliente_cliente_editor_id_26217ff9630877e6_fk_auth_user_id` (`editor_id`),
  CONSTRAINT `cliente_cliente_creador_id_7237daca72679a27_fk_auth_user_id` FOREIGN KEY (`creador_id`) REFERENCES `auth_user` (`id`),
  CONSTRAINT `cliente_cliente_editor_id_26217ff9630877e6_fk_auth_user_id` FOREIGN KEY (`editor_id`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cliente_cliente`
--

LOCK TABLES `cliente_cliente` WRITE;
/*!40000 ALTER TABLE `cliente_cliente` DISABLE KEYS */;
INSERT INTO `cliente_cliente` VALUES (1,'2015-11-07 01:06:59.117188','2015-12-05 16:31:43.709814','RODRIGO','Ruiz','DNI','46823743','ckabskca@gmail.com','41552112','ZSSD','jkwnejkwenkjrnwje','ndjddnjwne',1,1,'JURIDICA'),(2,'2015-12-01 03:51:40.936835','2015-12-09 02:36:01.712442','JUAN','RODRIGEZ','DNI','41254742','asda@d.com','92241','MIGUEL IGLECIAS 845','asdas','Juan',1,1,'NATURAL'),(4,'2015-12-01 03:57:07.989411','2015-12-09 02:35:45.410394','CARLOS YOSIMAR','RUIZ','DNI','121561378','C@G.COM','942412','21132A12','','',1,1,'NATURAL'),(5,'2015-12-01 04:08:23.656043','2015-12-09 02:35:40.577708','SHEILA','SOTERO DELGADO','DNI','1452148','SSOTERO@GMAIL.COM','9455741','JUANAS','','',1,1,'NATURAL'),(7,'2015-12-08 14:20:59.694507','2015-12-09 02:35:31.830867','Joel','LLamoctanta','RUC','41254125','asa@hotmail.com','9494411','asas','','',1,1,'NATURAL'),(8,'2015-12-09 02:31:04.133599','2015-12-09 02:35:24.300289','Juan Manuel','Rodrigo','DNI','45214587','as@hotmail.com','9874585412','qawsed','asd','sdasd',1,1,'NATURAL'),(9,'2015-12-09 02:36:33.859819','2015-12-09 03:52:58.046089','sdasda','','DNI','4125412','1452@g.com','sadas','asda','','ewqe',1,1,'NATURAL'),(10,'2015-12-09 03:58:58.386401','2015-12-09 03:59:06.991105','asdasd','','DNI','asdsadasdaf','asdas@gmail.com','asdasdasad','asdasdasdasdsad','asdasdasda','asdasdsa',1,1,'NATURAL');
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
  `creado` datetime(6) NOT NULL,
  `actualizado` datetime(6) NOT NULL,
  `cantidad_entrega` smallint(5) unsigned NOT NULL,
  `cantidad_devuelta` smallint(5) unsigned NOT NULL,
  `cliente_id` int(11) NOT NULL,
  `creador_id` int(11) NOT NULL,
  `editor_id` int(11) DEFAULT NULL,
  `producto_id` int(11) NOT NULL,
  `guia_remision` varchar(8),
  `vale` varchar(8),
  `venta` varchar(8),
  PRIMARY KEY (`id`),
  KEY `cliente_presta_cliente_id_6c36b6d8d54962c5_fk_cliente_cliente_id` (`cliente_id`),
  KEY `cliente_prestamo_creador_id_12ead384139794e5_fk_auth_user_id` (`creador_id`),
  KEY `cliente_prestamo_editor_id_2fc7cdeecafd78ab_fk_auth_user_id` (`editor_id`),
  KEY `cliente_pre_producto_id_757786ab9e5ce3fa_fk_producto_producto_id` (`producto_id`),
  CONSTRAINT `cliente_pre_producto_id_757786ab9e5ce3fa_fk_producto_producto_id` FOREIGN KEY (`producto_id`) REFERENCES `producto_producto` (`id`),
  CONSTRAINT `cliente_presta_cliente_id_6c36b6d8d54962c5_fk_cliente_cliente_id` FOREIGN KEY (`cliente_id`) REFERENCES `cliente_cliente` (`id`),
  CONSTRAINT `cliente_prestamo_creador_id_12ead384139794e5_fk_auth_user_id` FOREIGN KEY (`creador_id`) REFERENCES `auth_user` (`id`),
  CONSTRAINT `cliente_prestamo_editor_id_2fc7cdeecafd78ab_fk_auth_user_id` FOREIGN KEY (`editor_id`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
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
  `action_time` datetime(6) NOT NULL,
  `object_id` longtext,
  `object_repr` varchar(200) NOT NULL,
  `action_flag` smallint(5) unsigned NOT NULL,
  `change_message` longtext NOT NULL,
  `content_type_id` int(11) DEFAULT NULL,
  `user_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `djang_content_type_id_2951d21af27656d7_fk_django_content_type_id` (`content_type_id`),
  KEY `django_admin_log_user_id_f37a4335b89170b_fk_auth_user_id` (`user_id`),
  CONSTRAINT `djang_content_type_id_2951d21af27656d7_fk_django_content_type_id` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`),
  CONSTRAINT `django_admin_log_user_id_f37a4335b89170b_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=69 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_admin_log`
--

LOCK TABLES `django_admin_log` WRITE;
/*!40000 ALTER TABLE `django_admin_log` DISABLE KEYS */;
INSERT INTO `django_admin_log` VALUES (2,'2015-11-07 01:06:59.131059','1','carlos - ruiz',1,'',10,1),(3,'2015-11-07 01:19:55.659518','1','Bidon con Caño blanco de 20 L',1,'',11,1),(4,'2015-11-07 01:20:32.125536','2','Agua en Caja de 20 L',1,'',11,1),(5,'2015-11-07 01:30:46.388841','3','Nro pedido0001',1,'',12,1),(6,'2015-11-07 01:40:29.031738','5','Productos > Bidon con Caño blanco de 20 L',1,'',13,1),(7,'2015-11-07 01:40:57.004119','6','Productos > Agua en Caja de 20 L',1,'',13,1),(8,'2015-11-07 01:43:54.224634','1','BOLETA Nro11',1,'',14,1),(9,'2015-11-07 01:48:58.681796','1','Prestamo object',1,'',20,1),(10,'2015-11-14 20:41:54.723225','1','Administracion',1,'',21,2),(11,'2015-11-14 20:42:50.850897','1','Modelo',1,'',22,2),(12,'2015-11-14 20:49:19.871258','2','MODULO CLIENTES',1,'',21,2),(13,'2015-11-14 20:49:34.903484','3','MODULO PRODUCTOS',1,'',21,2),(14,'2015-11-14 20:49:56.979078','4','MODULO PEDIDOS',1,'',21,2),(15,'2015-11-14 20:50:08.764260','5','MODULO VENTAS',1,'',21,2),(16,'2015-11-14 20:50:49.063723','6','MODULO GUIAS',1,'',21,2),(17,'2015-11-14 20:51:01.394249','7','MODULO VALES',1,'',21,2),(18,'2015-11-14 20:51:22.701018','1','ADMINISTRACION',2,'Changed nombre.',21,2),(19,'2015-11-14 20:52:31.103929','2','CLIENTES',2,'Changed nombre.',21,2),(20,'2015-11-14 20:52:31.118606','3','PRODUCTOS',2,'Changed nombre.',21,2),(21,'2015-11-14 20:52:31.129211','4','PEDIDOS',2,'Changed nombre.',21,2),(22,'2015-11-14 20:52:31.138340','5','VENTAS',2,'Changed nombre.',21,2),(23,'2015-11-14 20:52:31.152960','6','GUIAS',2,'Changed nombre.',21,2),(24,'2015-11-14 20:52:31.163221','7','VALES',2,'Changed nombre.',21,2),(25,'2015-11-14 20:54:34.135600','2','Modulo',1,'',22,2),(26,'2015-11-14 20:54:46.269197','1','Menu',2,'Modificado/a nombre.',22,2),(27,'2015-11-14 20:55:34.733084','2','Modulo',2,'Modificado/a control.',22,2),(28,'2015-11-14 21:04:28.027708','3','Cliente',1,'',22,2),(29,'2015-11-14 21:05:58.455831','4','Guias',1,'',22,2),(30,'2015-11-14 21:09:25.672690','5','Pedido',1,'',22,2),(31,'2015-11-14 21:09:48.553803','6','Venta',1,'',22,2),(32,'2015-11-14 21:13:33.370765','7','Producto',1,'',22,2),(33,'2015-11-14 21:14:32.870126','8','Vales',1,'',22,2),(34,'2015-11-14 21:15:11.600670','8','Vales',2,'Modificado/a orden.',22,2),(35,'2015-11-14 21:15:11.611033','7','Producto',2,'Modificado/a orden.',22,2),(36,'2015-11-14 21:15:11.620414','6','Venta',2,'Modificado/a orden.',22,2),(37,'2015-11-14 21:15:11.653279','5','Pedido',2,'Modificado/a orden.',22,2),(38,'2015-11-14 21:15:11.663467','4','Guias',2,'Modificado/a orden.',22,2),(39,'2015-11-14 21:15:11.674382','3','Cliente',2,'Modificado/a orden.',22,2),(40,'2015-11-22 05:27:56.182335','1','Bidon con Caño blanco de 20 L',2,'Modificado/a imagen.',11,1),(41,'2015-11-22 06:26:55.704026','1','Bidon con Caño blanco de 20 L',2,'Modificado/a imagen.',11,1),(42,'2015-11-22 06:27:14.888154','1','Bidon con Caño blanco de 20 L',2,'Modificado/a imagen.',11,1),(43,'2015-11-22 06:27:52.282596','2','Agua en Caja de 20 L',2,'Modificado/a imagen.',11,1),(44,'2015-11-22 06:28:39.857360','1','Bidon con Caño blanco de 20 L',2,'Modificado/a imagen.',11,1),(45,'2015-11-22 06:28:44.851600','2','Agua en Caja de 20 L',2,'Modificado/a imagen.',11,1),(46,'2015-11-22 06:28:52.682362','1','Bidon con Caño blanco de 20 L',2,'Modificado/a imagen.',11,1),(47,'2015-11-22 06:29:15.975095','1','Bidon con Caño blanco de 20 L',2,'Modificado/a imagen.',11,1),(48,'2015-11-22 06:29:21.460991','1','Bidon con Caño blanco de 20 L',2,'Modificado/a imagen.',11,1),(49,'2015-11-22 07:28:20.596613','2','Agua en Caja de 20 L',2,'Modificado/a imagen.',11,1),(50,'2015-11-22 07:37:04.382220','1','Bidon con Caño blanco de 20 L',2,'Modificado/a imagen.',11,1),(51,'2015-11-23 00:37:35.129350','2','Agua en Caja de 20 L',2,'Modificado/a imagen.',11,1),(52,'2015-11-23 06:02:05.249539','3','Producto 1',1,'',11,1),(53,'2015-11-23 06:16:00.428047','4','Aasdasda',2,'Modificado/a imagen.',11,1),(54,'2015-11-29 01:28:21.483203','4','BIDON TRANSPARENTE CON CAÑO',2,'Modificado/a descripcion y imagen.',11,1),(55,'2015-11-29 01:51:02.936722','7','BIDON DESCARTABLE',1,'',11,1),(56,'2015-11-29 01:52:29.811333','8','BIDON CON BASE  TRANSPARENTE',1,'',11,1),(57,'2015-11-29 01:53:07.642514','9','BIDON CON BASE AZUL',1,'',11,1),(58,'2015-11-29 01:53:39.737623','10','AGUA EN CAJA 20 LTS',1,'',11,1),(59,'2015-11-29 04:39:18.283862','3','Cliente',2,'Modificado/a control.',22,1),(60,'2015-11-29 04:55:03.912234','3','Cliente',2,'Modificado/a control.',22,1),(61,'2015-12-01 02:52:29.425078','1','carlos - ruiz',2,'Modificado/a tipocliente.',10,1),(62,'2015-12-06 20:07:58.300901','4','CARLOS YOSIMAR  Nro pedido  0002',1,'',12,1),(63,'2015-12-06 21:57:26.992771','1','Productos > BIDON TRANSPARENTE CON CAÑO',1,'',13,1),(64,'2015-12-06 22:06:51.359202','2','Productos > BIDON TRANSPARENTE CON CAÑO',1,'',13,1),(65,'2015-12-06 22:06:58.983438','2','Productos > BIDON DESCARTABLE',2,'Modificado/a producto.',13,1),(66,'2015-12-07 03:34:56.068014','5','SHEILA  Nro pedido  0003',1,'',12,1),(67,'2015-12-08 14:13:27.252996','6','RODRIGO  Nro pedido  0004',1,'',12,1),(68,'2015-12-08 14:50:33.108805','3','RODRIGO  Nro pedido  0001',2,'Modificado/a estado.',12,1);
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
  UNIQUE KEY `django_content_type_app_label_514eac63585fc81e_uniq` (`app_label`,`model`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_content_type`
--

LOCK TABLES `django_content_type` WRITE;
/*!40000 ALTER TABLE `django_content_type` DISABLE KEYS */;
INSERT INTO `django_content_type` VALUES (1,'admin','logentry'),(3,'auth','group'),(2,'auth','permission'),(4,'auth','user'),(10,'cliente','cliente'),(20,'cliente','prestamo'),(5,'contenttypes','contenttype'),(17,'guia','detalleguia'),(16,'guia','guiaremision'),(22,'inicio','menu'),(21,'inicio','modulo'),(8,'inicio','ubigeo'),(7,'inicio','userprofile'),(13,'pedido','detallepedido'),(12,'pedido','pedido'),(11,'producto','producto'),(6,'sessions','session'),(19,'vale','detallevale'),(18,'vale','vale'),(15,'venta','detalleventa'),(14,'venta','venta');
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
  `applied` datetime(6) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_migrations`
--

LOCK TABLES `django_migrations` WRITE;
/*!40000 ALTER TABLE `django_migrations` DISABLE KEYS */;
INSERT INTO `django_migrations` VALUES (1,'contenttypes','0001_initial','2015-11-02 02:40:29.530849'),(2,'auth','0001_initial','2015-11-02 02:40:30.536424'),(3,'admin','0001_initial','2015-11-02 02:40:30.799507'),(4,'contenttypes','0002_remove_content_type_name','2015-11-02 02:40:31.062168'),(5,'auth','0002_alter_permission_name_max_length','2015-11-02 02:40:31.195185'),(6,'auth','0003_alter_user_email_max_length','2015-11-02 02:40:31.296771'),(7,'auth','0004_alter_user_username_opts','2015-11-02 02:40:31.318058'),(8,'auth','0005_alter_user_last_login_null','2015-11-02 02:40:31.461421'),(9,'auth','0006_require_contenttypes_0002','2015-11-02 02:40:31.467401'),(10,'sessions','0001_initial','2015-11-02 02:40:31.565677'),(11,'cliente','0001_initial','2015-11-02 03:31:15.460965'),(12,'producto','0001_initial','2015-11-02 03:31:15.743613'),(13,'pedido','0001_initial','2015-11-02 03:31:17.073759'),(14,'venta','0001_initial','2015-11-02 03:31:18.362648'),(15,'guia','0001_initial','2015-11-02 03:31:19.812683'),(16,'inicio','0001_initial','2015-11-02 03:31:20.063288'),(17,'vale','0001_initial','2015-11-02 03:31:21.310845'),(18,'cliente','0002_auto_20151102_0359','2015-11-07 00:58:29.205353'),(19,'cliente','0003_auto_20151102_0402','2015-11-07 00:58:29.854731'),(20,'producto','0002_auto_20151107_0119','2015-11-07 01:19:27.357111'),(21,'venta','0002_auto_20151107_0143','2015-11-07 01:43:33.977557'),(22,'inicio','0002_auto_20151114_2025','2015-11-14 20:25:58.648147'),(23,'cliente','0004_auto_20151129_0034','2015-11-29 05:34:28.479731'),(24,'cliente','0005_remove_cliente_ubigeo','2015-11-29 05:41:13.817442'),(25,'cliente','0006_auto_20151129_1211','2015-11-29 17:11:28.732693'),(26,'cliente','0007_auto_20151130_2256','2015-12-01 03:56:16.794091'),(27,'cliente','0008_auto_20151130_2313','2015-12-01 04:13:12.896591'),(28,'pedido','0002_auto_20151202_2308','2015-12-03 04:08:18.455925'),(29,'pedido','0003_pedido_estado','2015-12-03 04:30:19.364498'),(30,'venta','0003_remove_venta_cliente','2015-12-03 04:30:19.604916');
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
  `expire_date` datetime(6) NOT NULL,
  PRIMARY KEY (`session_key`),
  KEY `django_session_de54fa62` (`expire_date`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_session`
--

LOCK TABLES `django_session` WRITE;
/*!40000 ALTER TABLE `django_session` DISABLE KEYS */;
INSERT INTO `django_session` VALUES ('3goafmdo0vrpzd4syoc6rm3dieg35pyo','NDczODFmMzYwZTA1ZGEyMjY3ZTk1YWQ0ZGIyY2U0NjQ4YzhkZTA5Yzp7Il9hdXRoX3VzZXJfYmFja2VuZCI6ImRqYW5nby5jb250cmliLmF1dGguYmFja2VuZHMuTW9kZWxCYWNrZW5kIiwiX2F1dGhfdXNlcl9oYXNoIjoiMDZlZGVmYWVlY2EyYmExZGE5OTQ4ZWJjNWZiNjVhMTcxNGIyMDAxOCIsIl9hdXRoX3VzZXJfaWQiOiIxIn0=','2015-12-13 00:20:38.047672'),('7lsmy483rb2ar7hjbpho5lc0pyhjwn3s','MTY2OWU5YTU0YmQ5YWEwMDI4ZWZjYWQ5N2YwNGM4MTI3YzcyMjFiNjp7Il9hdXRoX3VzZXJfaWQiOiIxIiwiX2F1dGhfdXNlcl9iYWNrZW5kIjoiZGphbmdvLmNvbnRyaWIuYXV0aC5iYWNrZW5kcy5Nb2RlbEJhY2tlbmQiLCJfYXV0aF91c2VyX2hhc2giOiIwNmVkZWZhZWVjYTJiYTFkYTk5NDhlYmM1ZmI2NWExNzE0YjIwMDE4In0=','2015-12-06 01:14:40.880422'),('7rw8kgq2zjzmqdho8ggpr616typd3jfb','MTY2OWU5YTU0YmQ5YWEwMDI4ZWZjYWQ5N2YwNGM4MTI3YzcyMjFiNjp7Il9hdXRoX3VzZXJfaWQiOiIxIiwiX2F1dGhfdXNlcl9iYWNrZW5kIjoiZGphbmdvLmNvbnRyaWIuYXV0aC5iYWNrZW5kcy5Nb2RlbEJhY2tlbmQiLCJfYXV0aF91c2VyX2hhc2giOiIwNmVkZWZhZWVjYTJiYTFkYTk5NDhlYmM1ZmI2NWExNzE0YjIwMDE4In0=','2015-11-16 03:33:03.770636'),('9iekpcplyzkh3b13rzeo9orujres5qc0','MjE5NDA2YWMwNDcyOTIyMDk2YjI3NDM5YWYxYjRjYTgxMjZlOGM1MDp7Il9hdXRoX3VzZXJfaWQiOiIxIiwiX2F1dGhfdXNlcl9oYXNoIjoiMDZlZGVmYWVlY2EyYmExZGE5OTQ4ZWJjNWZiNjVhMTcxNGIyMDAxOCIsIl9hdXRoX3VzZXJfYmFja2VuZCI6ImRqYW5nby5jb250cmliLmF1dGguYmFja2VuZHMuTW9kZWxCYWNrZW5kIn0=','2015-12-20 19:57:47.101486'),('iheeo91mw9vnzjfvuauf2e2s19kcuf00','NDczODFmMzYwZTA1ZGEyMjY3ZTk1YWQ0ZGIyY2U0NjQ4YzhkZTA5Yzp7Il9hdXRoX3VzZXJfYmFja2VuZCI6ImRqYW5nby5jb250cmliLmF1dGguYmFja2VuZHMuTW9kZWxCYWNrZW5kIiwiX2F1dGhfdXNlcl9oYXNoIjoiMDZlZGVmYWVlY2EyYmExZGE5OTQ4ZWJjNWZiNjVhMTcxNGIyMDAxOCIsIl9hdXRoX3VzZXJfaWQiOiIxIn0=','2015-12-21 04:37:10.151936'),('iphb0f25unwetgxd0jfkt555fwg07fv8','ZWVhMzYyNmI0YjdmOWM4NTExMjRmMTFlMzE5Y2M4ZDE1ZjY0N2MxNzp7Il9hdXRoX3VzZXJfYmFja2VuZCI6ImRqYW5nby5jb250cmliLmF1dGguYmFja2VuZHMuTW9kZWxCYWNrZW5kIiwiX2F1dGhfdXNlcl9pZCI6IjIiLCJfYXV0aF91c2VyX2hhc2giOiI5MzBlY2M5NzVkOTgzMDk3YjA2MTYzMTQyZTA4OGMxY2EwMjllNjE5In0=','2015-11-27 03:42:50.728752'),('mlpdv6wq6651z7sraup1bzbiv3gjq5xz','MjE5NDA2YWMwNDcyOTIyMDk2YjI3NDM5YWYxYjRjYTgxMjZlOGM1MDp7Il9hdXRoX3VzZXJfaWQiOiIxIiwiX2F1dGhfdXNlcl9oYXNoIjoiMDZlZGVmYWVlY2EyYmExZGE5OTQ4ZWJjNWZiNjVhMTcxNGIyMDAxOCIsIl9hdXRoX3VzZXJfYmFja2VuZCI6ImRqYW5nby5jb250cmliLmF1dGguYmFja2VuZHMuTW9kZWxCYWNrZW5kIn0=','2015-12-12 22:53:13.320968'),('ncb0ileflqip6uitjzw8jswpzoh4tlog','NjBiZDNmNmI0ODQwOTZkMjVhNDAwZTgzOTUxNjMwZGMyMjE1YmQ0NTp7Il9hdXRoX3VzZXJfaGFzaCI6IjA2ZWRlZmFlZWNhMmJhMWRhOTk0OGViYzVmYjY1YTE3MTRiMjAwMTgiLCJfYXV0aF91c2VyX2lkIjoiMSIsIl9hdXRoX3VzZXJfYmFja2VuZCI6ImRqYW5nby5jb250cmliLmF1dGguYmFja2VuZHMuTW9kZWxCYWNrZW5kIn0=','2015-12-13 01:11:46.556689'),('vyh6gzfezhwsytxuyp98en4e8d0no6i8','MjE5NDA2YWMwNDcyOTIyMDk2YjI3NDM5YWYxYjRjYTgxMjZlOGM1MDp7Il9hdXRoX3VzZXJfaWQiOiIxIiwiX2F1dGhfdXNlcl9oYXNoIjoiMDZlZGVmYWVlY2EyYmExZGE5OTQ4ZWJjNWZiNjVhMTcxNGIyMDAxOCIsIl9hdXRoX3VzZXJfYmFja2VuZCI6ImRqYW5nby5jb250cmliLmF1dGguYmFja2VuZHMuTW9kZWxCYWNrZW5kIn0=','2015-12-12 22:51:27.985112'),('xizffm5ty3sqo5bcmcmkz13kjb4aaqpp','NjBiZDNmNmI0ODQwOTZkMjVhNDAwZTgzOTUxNjMwZGMyMjE1YmQ0NTp7Il9hdXRoX3VzZXJfaGFzaCI6IjA2ZWRlZmFlZWNhMmJhMWRhOTk0OGViYzVmYjY1YTE3MTRiMjAwMTgiLCJfYXV0aF91c2VyX2lkIjoiMSIsIl9hdXRoX3VzZXJfYmFja2VuZCI6ImRqYW5nby5jb250cmliLmF1dGguYmFja2VuZHMuTW9kZWxCYWNrZW5kIn0=','2015-11-21 01:05:48.722624'),('xqmxr8q0nh9fb8noyhixg4wp7uvoj4ti','NDczODFmMzYwZTA1ZGEyMjY3ZTk1YWQ0ZGIyY2U0NjQ4YzhkZTA5Yzp7Il9hdXRoX3VzZXJfYmFja2VuZCI6ImRqYW5nby5jb250cmliLmF1dGguYmFja2VuZHMuTW9kZWxCYWNrZW5kIiwiX2F1dGhfdXNlcl9oYXNoIjoiMDZlZGVmYWVlY2EyYmExZGE5OTQ4ZWJjNWZiNjVhMTcxNGIyMDAxOCIsIl9hdXRoX3VzZXJfaWQiOiIxIn0=','2015-11-28 20:31:19.402359');
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
  `creado` datetime(6) NOT NULL,
  `actualizado` datetime(6) NOT NULL,
  `cantidad` smallint(5) unsigned NOT NULL,
  `creador_id` int(11) NOT NULL,
  `editor_id` int(11) DEFAULT NULL,
  `guia_remision_id` int(11) NOT NULL,
  `producto_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `guia_detalleguia_creador_id_7b591f8b47fd5c74_fk_auth_user_id` (`creador_id`),
  KEY `guia_detalleguia_editor_id_6595cbfe898c8b81_fk_auth_user_id` (`editor_id`),
  KEY `guia_detalleguia_eb83a8d5` (`guia_remision_id`),
  KEY `guia_detalleguia_bb91903a` (`producto_id`),
  CONSTRAINT `guia_d_guia_remision_id_1a44066c8aa3b240_fk_guia_guiaremision_id` FOREIGN KEY (`guia_remision_id`) REFERENCES `guia_guiaremision` (`id`),
  CONSTRAINT `guia_detall_producto_id_56bcd893e6e30a58_fk_producto_producto_id` FOREIGN KEY (`producto_id`) REFERENCES `producto_producto` (`id`),
  CONSTRAINT `guia_detalleguia_creador_id_7b591f8b47fd5c74_fk_auth_user_id` FOREIGN KEY (`creador_id`) REFERENCES `auth_user` (`id`),
  CONSTRAINT `guia_detalleguia_editor_id_6595cbfe898c8b81_fk_auth_user_id` FOREIGN KEY (`editor_id`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
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
  `creado` datetime(6) NOT NULL,
  `actualizado` datetime(6) NOT NULL,
  `punto_partida` varchar(500) NOT NULL,
  `punto_llegada` varchar(500) NOT NULL,
  `fecha_emision` date NOT NULL,
  `fecha_translado` date NOT NULL,
  `cliente_id` int(11) NOT NULL,
  `creador_id` int(11) NOT NULL,
  `editor_id` int(11) DEFAULT NULL,
  `venta_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `guia_guiaremis_cliente_id_409adf595e8f7c44_fk_cliente_cliente_id` (`cliente_id`),
  KEY `guia_guiaremision_creador_id_3ad7bd9f278ddfea_fk_auth_user_id` (`creador_id`),
  KEY `guia_guiaremision_editor_id_7052541c60555143_fk_auth_user_id` (`editor_id`),
  KEY `guia_guiaremision_venta_id_4ab62c64c8cc3cf4_fk_venta_venta_id` (`venta_id`),
  CONSTRAINT `guia_guiaremis_cliente_id_409adf595e8f7c44_fk_cliente_cliente_id` FOREIGN KEY (`cliente_id`) REFERENCES `cliente_cliente` (`id`),
  CONSTRAINT `guia_guiaremision_creador_id_3ad7bd9f278ddfea_fk_auth_user_id` FOREIGN KEY (`creador_id`) REFERENCES `auth_user` (`id`),
  CONSTRAINT `guia_guiaremision_editor_id_7052541c60555143_fk_auth_user_id` FOREIGN KEY (`editor_id`) REFERENCES `auth_user` (`id`),
  CONSTRAINT `guia_guiaremision_venta_id_4ab62c64c8cc3cf4_fk_venta_venta_id` FOREIGN KEY (`venta_id`) REFERENCES `venta_venta` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
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
  `creado` datetime(6) NOT NULL,
  `actualizado` datetime(6) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `iconoclase` varchar(100) DEFAULT NULL,
  `orden` smallint(6) NOT NULL,
  `control` varchar(250) NOT NULL,
  `creador_id` int(11) NOT NULL,
  `editor_id` int(11) DEFAULT NULL,
  `menupadre_id` int(11) DEFAULT NULL,
  `modulo_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `inicio_menu_creador_id_28abd8b4545bd0e3_fk_auth_user_id` (`creador_id`),
  KEY `inicio_menu_editor_id_5bfb8b3edc0e88f1_fk_auth_user_id` (`editor_id`),
  KEY `inicio_menu_menupadre_id_93a56371c699f78_fk_inicio_menu_id` (`menupadre_id`),
  KEY `inicio_menu_7ba91c57` (`modulo_id`),
  CONSTRAINT `inicio_menu_creador_id_28abd8b4545bd0e3_fk_auth_user_id` FOREIGN KEY (`creador_id`) REFERENCES `auth_user` (`id`),
  CONSTRAINT `inicio_menu_editor_id_5bfb8b3edc0e88f1_fk_auth_user_id` FOREIGN KEY (`editor_id`) REFERENCES `auth_user` (`id`),
  CONSTRAINT `inicio_menu_menupadre_id_93a56371c699f78_fk_inicio_menu_id` FOREIGN KEY (`menupadre_id`) REFERENCES `inicio_menu` (`id`),
  CONSTRAINT `inicio_menu_modulo_id_3e6ff54ed0d8bea6_fk_inicio_modulo_id` FOREIGN KEY (`modulo_id`) REFERENCES `inicio_modulo` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `inicio_menu`
--

LOCK TABLES `inicio_menu` WRITE;
/*!40000 ALTER TABLE `inicio_menu` DISABLE KEYS */;
INSERT INTO `inicio_menu` VALUES (1,'2015-11-14 20:42:50.850298','2015-11-14 20:54:46.246653','Menu','',1,'inicio.view.menus.Menu',1,NULL,NULL,1),(2,'2015-11-14 20:54:34.133425','2015-11-14 20:55:34.704914','Modulo','',2,'inicio.view.modulos.Modulo',1,NULL,NULL,1),(3,'2015-11-14 21:04:28.027051','2015-11-29 04:55:03.906397','Cliente','',3,'cliente.view.clientes.Cliente',1,NULL,NULL,2),(4,'2015-11-14 21:05:58.455057','2015-11-14 21:15:11.658011','Guias','',7,'guia.view.guias.Guia',1,NULL,NULL,6),(5,'2015-11-14 21:09:25.672150','2015-11-14 21:15:11.628171','Pedido','',4,'pedido.view.pedidos.Pedido',1,NULL,NULL,4),(6,'2015-11-14 21:09:48.552851','2015-11-14 21:15:11.615424','Venta','',5,'venta.view.ventas.Venta',1,NULL,NULL,5),(7,'2015-11-14 21:13:33.370249','2015-11-14 21:15:11.605288','Producto','',8,'producto.view.productos.Producto',1,NULL,NULL,3),(8,'2015-11-14 21:14:32.869470','2015-11-14 21:15:11.594256','Vales','',6,'vale.view.vales.Vale',1,NULL,NULL,7);
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
  `creado` datetime(6) NOT NULL,
  `actualizado` datetime(6) NOT NULL,
  `nombre` varchar(20) NOT NULL,
  `orden` smallint(6) NOT NULL,
  `creador_id` int(11) NOT NULL,
  `editor_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `inicio_modulo_creador_id_171ba2566a77d3f7_fk_auth_user_id` (`creador_id`),
  KEY `inicio_modulo_editor_id_404bcd9f3165d3fb_fk_auth_user_id` (`editor_id`),
  CONSTRAINT `inicio_modulo_creador_id_171ba2566a77d3f7_fk_auth_user_id` FOREIGN KEY (`creador_id`) REFERENCES `auth_user` (`id`),
  CONSTRAINT `inicio_modulo_editor_id_404bcd9f3165d3fb_fk_auth_user_id` FOREIGN KEY (`editor_id`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `inicio_modulo`
--

LOCK TABLES `inicio_modulo` WRITE;
/*!40000 ALTER TABLE `inicio_modulo` DISABLE KEYS */;
INSERT INTO `inicio_modulo` VALUES (1,'2015-11-14 20:41:54.722711','2015-11-14 20:51:22.695528','ADMINISTRACION',1,1,NULL),(2,'2015-11-14 20:49:19.870615','2015-11-14 20:52:31.086723','CLIENTES',2,1,NULL),(3,'2015-11-14 20:49:34.902829','2015-11-14 20:52:31.113334','PRODUCTOS',3,1,NULL),(4,'2015-11-14 20:49:56.978255','2015-11-14 20:52:31.123309','PEDIDOS',4,1,NULL),(5,'2015-11-14 20:50:08.763633','2015-11-14 20:52:31.133386','VENTAS',5,2,NULL),(6,'2015-11-14 20:50:49.063065','2015-11-14 20:52:31.146086','GUIAS',6,1,NULL),(7,'2015-11-14 20:51:01.393632','2015-11-14 20:52:31.157480','VALES',7,1,NULL);
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
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
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
  CONSTRAINT `inicio_userprofile_user_id_42f4b91440639ab4_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
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
  `creado` datetime(6) NOT NULL,
  `actualizado` datetime(6) NOT NULL,
  `cantidad` smallint(5) unsigned NOT NULL,
  `creador_id` int(11) NOT NULL,
  `editor_id` int(11) DEFAULT NULL,
  `pedido_id` int(11) NOT NULL,
  `producto_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `pedido_detallepedido_creador_id_fd0d04ddd6a4e30_fk_auth_user_id` (`creador_id`),
  KEY `pedido_detallepedido_editor_id_4c5c1f6e4818a5fd_fk_auth_user_id` (`editor_id`),
  KEY `pedido_detallepedido_8253d097` (`pedido_id`),
  KEY `pedido_detallepedido_bb91903a` (`producto_id`),
  CONSTRAINT `pedido_deta_producto_id_572954c5cdf64764_fk_producto_producto_id` FOREIGN KEY (`producto_id`) REFERENCES `producto_producto` (`id`),
  CONSTRAINT `pedido_detalleped_pedido_id_36afb1ee5dfa30bc_fk_pedido_pedido_id` FOREIGN KEY (`pedido_id`) REFERENCES `pedido_pedido` (`id`),
  CONSTRAINT `pedido_detallepedido_creador_id_fd0d04ddd6a4e30_fk_auth_user_id` FOREIGN KEY (`creador_id`) REFERENCES `auth_user` (`id`),
  CONSTRAINT `pedido_detallepedido_editor_id_4c5c1f6e4818a5fd_fk_auth_user_id` FOREIGN KEY (`editor_id`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pedido_detallepedido`
--

LOCK TABLES `pedido_detallepedido` WRITE;
/*!40000 ALTER TABLE `pedido_detallepedido` DISABLE KEYS */;
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
  `creado` datetime(6) NOT NULL,
  `actualizado` datetime(6) NOT NULL,
  `fecha_pedido` date NOT NULL,
  `fecha_entrega` date DEFAULT NULL,
  `nro_pedido` varchar(10) NOT NULL,
  `cliente_id` int(11) NOT NULL,
  `creador_id` int(11) NOT NULL,
  `editor_id` int(11) DEFAULT NULL,
  `estado` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `pedido_pedido_cliente_id_23fa6726e4fc6d1a_fk_cliente_cliente_id` (`cliente_id`),
  KEY `pedido_pedido_creador_id_7e8c87ae17872174_fk_auth_user_id` (`creador_id`),
  KEY `pedido_pedido_editor_id_b20bf73d5e4cc67_fk_auth_user_id` (`editor_id`),
  CONSTRAINT `pedido_pedido_cliente_id_23fa6726e4fc6d1a_fk_cliente_cliente_id` FOREIGN KEY (`cliente_id`) REFERENCES `cliente_cliente` (`id`),
  CONSTRAINT `pedido_pedido_creador_id_7e8c87ae17872174_fk_auth_user_id` FOREIGN KEY (`creador_id`) REFERENCES `auth_user` (`id`),
  CONSTRAINT `pedido_pedido_editor_id_b20bf73d5e4cc67_fk_auth_user_id` FOREIGN KEY (`editor_id`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pedido_pedido`
--

LOCK TABLES `pedido_pedido` WRITE;
/*!40000 ALTER TABLE `pedido_pedido` DISABLE KEYS */;
INSERT INTO `pedido_pedido` VALUES (3,'2015-11-07 01:30:46.388214','2015-12-08 14:50:33.107145','2015-11-07','2015-11-27','0001',1,1,NULL,1),(4,'2015-12-06 20:07:58.293278','2015-12-06 20:07:58.293308','2015-12-06','2015-12-06','0002',4,1,NULL,0),(5,'2015-12-07 03:34:56.067089','2015-12-07 03:34:56.067144','2015-12-06','2015-12-06','0003',5,2,NULL,0),(6,'2015-12-08 14:13:27.233376','2015-12-08 14:13:27.233434','2015-12-08','2015-12-24','0004',1,1,NULL,0);
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
  `creado` datetime(6) NOT NULL,
  `actualizado` datetime(6) NOT NULL,
  `descripcion` varchar(200) NOT NULL,
  `cantidad_actual` smallint(5) unsigned NOT NULL,
  `precio` decimal(10,2) NOT NULL,
  `imagen` varchar(100) DEFAULT NULL,
  `creador_id` int(11) NOT NULL,
  `editor_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `producto_producto_creador_id_7476a5c5b8afe78f_fk_auth_user_id` (`creador_id`),
  KEY `producto_producto_editor_id_323d2c9fd79364e2_fk_auth_user_id` (`editor_id`),
  CONSTRAINT `producto_producto_creador_id_7476a5c5b8afe78f_fk_auth_user_id` FOREIGN KEY (`creador_id`) REFERENCES `auth_user` (`id`),
  CONSTRAINT `producto_producto_editor_id_323d2c9fd79364e2_fk_auth_user_id` FOREIGN KEY (`editor_id`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `producto_producto`
--

LOCK TABLES `producto_producto` WRITE;
/*!40000 ALTER TABLE `producto_producto` DISABLE KEYS */;
INSERT INTO `producto_producto` VALUES (19,'2015-12-10 03:28:31.728016','2015-12-10 04:51:18.429188','Producto 1',6,5.00,'',1,1),(20,'2015-12-10 03:28:53.660383','2015-12-10 03:28:53.660415','asdasd',2,3.00,'',1,NULL);
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
  `creado` datetime(6) NOT NULL,
  `actualizado` datetime(6) NOT NULL,
  `cantidad` smallint(5) unsigned NOT NULL,
  `precio` decimal(10,2) NOT NULL,
  `creador_id` int(11) NOT NULL,
  `editor_id` int(11) DEFAULT NULL,
  `producto_id` int(11) NOT NULL,
  `vale_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `vale_detallevale_creador_id_1759622460dbb419_fk_auth_user_id` (`creador_id`),
  KEY `vale_detallevale_editor_id_76bab7dc4f15ee5a_fk_auth_user_id` (`editor_id`),
  KEY `vale_detall_producto_id_66ca2fe26b90591b_fk_producto_producto_id` (`producto_id`),
  KEY `vale_detallevale_9c93d103` (`vale_id`),
  CONSTRAINT `vale_detall_producto_id_66ca2fe26b90591b_fk_producto_producto_id` FOREIGN KEY (`producto_id`) REFERENCES `producto_producto` (`id`),
  CONSTRAINT `vale_detallevale_creador_id_1759622460dbb419_fk_auth_user_id` FOREIGN KEY (`creador_id`) REFERENCES `auth_user` (`id`),
  CONSTRAINT `vale_detallevale_editor_id_76bab7dc4f15ee5a_fk_auth_user_id` FOREIGN KEY (`editor_id`) REFERENCES `auth_user` (`id`),
  CONSTRAINT `vale_detallevale_vale_id_39dcdba07ec6bc0e_fk_vale_vale_id` FOREIGN KEY (`vale_id`) REFERENCES `vale_vale` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vale_detallevale`
--

LOCK TABLES `vale_detallevale` WRITE;
/*!40000 ALTER TABLE `vale_detallevale` DISABLE KEYS */;
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
  `creado` datetime(6) NOT NULL,
  `actualizado` datetime(6) NOT NULL,
  `fecha` date NOT NULL,
  `numero` varchar(10) NOT NULL,
  `total` decimal(10,2) NOT NULL,
  `observaciones` longtext NOT NULL,
  `cliente_id` int(11) NOT NULL,
  `creador_id` int(11) NOT NULL,
  `editor_id` int(11) DEFAULT NULL,
  `venta_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `vale_vale_cliente_id_497a3fd8994be29a_fk_cliente_cliente_id` (`cliente_id`),
  KEY `vale_vale_creador_id_2eed5cdf27737ef4_fk_auth_user_id` (`creador_id`),
  KEY `vale_vale_editor_id_1be56a522a6726e7_fk_auth_user_id` (`editor_id`),
  KEY `vale_vale_venta_id_eecf1e0f14ade16_fk_venta_venta_id` (`venta_id`),
  CONSTRAINT `vale_vale_cliente_id_497a3fd8994be29a_fk_cliente_cliente_id` FOREIGN KEY (`cliente_id`) REFERENCES `cliente_cliente` (`id`),
  CONSTRAINT `vale_vale_creador_id_2eed5cdf27737ef4_fk_auth_user_id` FOREIGN KEY (`creador_id`) REFERENCES `auth_user` (`id`),
  CONSTRAINT `vale_vale_editor_id_1be56a522a6726e7_fk_auth_user_id` FOREIGN KEY (`editor_id`) REFERENCES `auth_user` (`id`),
  CONSTRAINT `vale_vale_venta_id_eecf1e0f14ade16_fk_venta_venta_id` FOREIGN KEY (`venta_id`) REFERENCES `venta_venta` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vale_vale`
--

LOCK TABLES `vale_vale` WRITE;
/*!40000 ALTER TABLE `vale_vale` DISABLE KEYS */;
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
  `creado` datetime(6) NOT NULL,
  `actualizado` datetime(6) NOT NULL,
  `cantidad` smallint(5) unsigned NOT NULL,
  `precio` decimal(10,2) NOT NULL,
  `descuento` decimal(10,2) NOT NULL,
  `creador_id` int(11) NOT NULL,
  `editor_id` int(11) DEFAULT NULL,
  `producto_id` int(11) NOT NULL,
  `venta_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `venta_detalleventa_creador_id_7b3640cb540764d4_fk_auth_user_id` (`creador_id`),
  KEY `venta_detalleventa_editor_id_1445a1ce172ddbb9_fk_auth_user_id` (`editor_id`),
  KEY `venta_detal_producto_id_348de56881ff1d20_fk_producto_producto_id` (`producto_id`),
  KEY `venta_detalleventa_a3d89257` (`venta_id`),
  CONSTRAINT `venta_detal_producto_id_348de56881ff1d20_fk_producto_producto_id` FOREIGN KEY (`producto_id`) REFERENCES `producto_producto` (`id`),
  CONSTRAINT `venta_detalleventa_creador_id_7b3640cb540764d4_fk_auth_user_id` FOREIGN KEY (`creador_id`) REFERENCES `auth_user` (`id`),
  CONSTRAINT `venta_detalleventa_editor_id_1445a1ce172ddbb9_fk_auth_user_id` FOREIGN KEY (`editor_id`) REFERENCES `auth_user` (`id`),
  CONSTRAINT `venta_detalleventa_venta_id_5f1c2be2394c07f6_fk_venta_venta_id` FOREIGN KEY (`venta_id`) REFERENCES `venta_venta` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `venta_detalleventa`
--

LOCK TABLES `venta_detalleventa` WRITE;
/*!40000 ALTER TABLE `venta_detalleventa` DISABLE KEYS */;
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
  `creado` datetime(6) NOT NULL,
  `actualizado` datetime(6) NOT NULL,
  `fecha` date NOT NULL,
  `tipo_documento` varchar(7) NOT NULL,
  `numero_documento` varchar(10) NOT NULL,
  `numero_correlativo` varchar(4) NOT NULL,
  `sub_total` decimal(10,2) DEFAULT NULL,
  `igv` decimal(10,2) DEFAULT NULL,
  `total` decimal(10,2) DEFAULT NULL,
  `creador_id` int(11) NOT NULL,
  `editor_id` int(11) DEFAULT NULL,
  `pedido_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `venta_venta_creador_id_580e038cf65479c4_fk_auth_user_id` (`creador_id`),
  KEY `venta_venta_editor_id_645d1f1a75488be9_fk_auth_user_id` (`editor_id`),
  KEY `venta_venta_pedido_id_a7f854e9f191bb0_fk_pedido_pedido_id` (`pedido_id`),
  CONSTRAINT `venta_venta_creador_id_580e038cf65479c4_fk_auth_user_id` FOREIGN KEY (`creador_id`) REFERENCES `auth_user` (`id`),
  CONSTRAINT `venta_venta_editor_id_645d1f1a75488be9_fk_auth_user_id` FOREIGN KEY (`editor_id`) REFERENCES `auth_user` (`id`),
  CONSTRAINT `venta_venta_pedido_id_a7f854e9f191bb0_fk_pedido_pedido_id` FOREIGN KEY (`pedido_id`) REFERENCES `pedido_pedido` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `venta_venta`
--

LOCK TABLES `venta_venta` WRITE;
/*!40000 ALTER TABLE `venta_venta` DISABLE KEYS */;
INSERT INTO `venta_venta` VALUES (1,'2015-11-07 01:43:54.224041','2015-11-07 01:43:54.224074','2015-11-07','BOLETA','11','001',NULL,NULL,NULL,1,NULL,3);
/*!40000 ALTER TABLE `venta_venta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'grupoej'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2015-12-09 23:54:12
