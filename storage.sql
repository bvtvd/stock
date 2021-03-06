/*
Navicat MySQL Data Transfer

Source Server         : local
Source Server Version : 50553
Source Host           : localhost:3306
Source Database       : storage

Target Server Type    : MYSQL
Target Server Version : 50553
File Encoding         : 65001

Date: 2018-04-26 09:44:51
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for category
-- ----------------------------
DROP TABLE IF EXISTS `category`;
CREATE TABLE `category` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `pid` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of category
-- ----------------------------
INSERT INTO `category` VALUES ('1', '成品类', null, '2018-04-23 02:38:18', '0');
INSERT INTO `category` VALUES ('5', '配品配件', '2018-04-23 03:04:45', '2018-04-23 03:04:45', '0');
INSERT INTO `category` VALUES ('3', '原料类', '2018-03-21 17:21:08', '2018-04-23 02:38:31', '0');

-- ----------------------------
-- Table structure for finished_storage
-- ----------------------------
DROP TABLE IF EXISTS `finished_storage`;
CREATE TABLE `finished_storage` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `product_id` int(11) DEFAULT NULL COMMENT '产品ID',
  `address` varchar(255) DEFAULT NULL COMMENT '库存地点',
  `price` decimal(11,2) DEFAULT NULL COMMENT '产品单价',
  `quantity` int(11) DEFAULT '0' COMMENT '产品数量',
  `storage_money` decimal(11,2) DEFAULT NULL COMMENT '入库金额',
  `metering_unit` varchar(255) DEFAULT NULL COMMENT '计量单位',
  `remarks` text COMMENT '备注',
  `appendix` varchar(255) DEFAULT NULL COMMENT '附件',
  `appendix_name` varchar(255) DEFAULT NULL COMMENT '附件名称',
  `created_user` int(11) DEFAULT NULL COMMENT '经办人',
  `storage_time` timestamp NULL DEFAULT NULL COMMENT '入库时间',
  `storage_type` tinyint(1) DEFAULT NULL COMMENT '1=生产入库 2=调拨入库 3=退货入库',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COMMENT='成品类入库';

-- ----------------------------
-- Records of finished_storage
-- ----------------------------
INSERT INTO `finished_storage` VALUES ('1', '1', '1', '1.00', '1', '1.00', null, '1', 'storage/appendix/nongye.md', 'nongye.md', '2', '2018-04-09 06:24:51', '1', '2018-04-09 06:20:24', '2018-04-12 07:41:42', null);

-- ----------------------------
-- Table structure for migrations
-- ----------------------------
DROP TABLE IF EXISTS `migrations`;
CREATE TABLE `migrations` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `migration` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of migrations
-- ----------------------------
INSERT INTO `migrations` VALUES ('1', '2014_10_12_000000_create_users_table', '1');
INSERT INTO `migrations` VALUES ('2', '2014_10_12_100000_create_password_resets_table', '1');
INSERT INTO `migrations` VALUES ('3', '2016_06_01_000001_create_oauth_auth_codes_table', '1');
INSERT INTO `migrations` VALUES ('4', '2016_06_01_000002_create_oauth_access_tokens_table', '1');
INSERT INTO `migrations` VALUES ('5', '2016_06_01_000003_create_oauth_refresh_tokens_table', '1');
INSERT INTO `migrations` VALUES ('6', '2016_06_01_000004_create_oauth_clients_table', '1');
INSERT INTO `migrations` VALUES ('7', '2016_06_01_000005_create_oauth_personal_access_clients_table', '1');
INSERT INTO `migrations` VALUES ('8', '2018_03_21_164054_create_permission_tables', '2');

-- ----------------------------
-- Table structure for model_has_permissions
-- ----------------------------
DROP TABLE IF EXISTS `model_has_permissions`;
CREATE TABLE `model_has_permissions` (
  `permission_id` int(10) unsigned NOT NULL,
  `model_id` int(10) unsigned NOT NULL,
  `model_type` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`permission_id`,`model_id`,`model_type`),
  KEY `model_has_permissions_model_id_model_type_index` (`model_id`,`model_type`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of model_has_permissions
-- ----------------------------

-- ----------------------------
-- Table structure for model_has_roles
-- ----------------------------
DROP TABLE IF EXISTS `model_has_roles`;
CREATE TABLE `model_has_roles` (
  `role_id` int(10) unsigned NOT NULL,
  `model_id` int(10) unsigned NOT NULL,
  `model_type` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`role_id`,`model_id`,`model_type`),
  KEY `model_has_roles_model_id_model_type_index` (`model_id`,`model_type`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of model_has_roles
-- ----------------------------

-- ----------------------------
-- Table structure for oauth_access_tokens
-- ----------------------------
DROP TABLE IF EXISTS `oauth_access_tokens`;
CREATE TABLE `oauth_access_tokens` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `client_id` int(11) NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `scopes` text COLLATE utf8mb4_unicode_ci,
  `revoked` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `expires_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `oauth_access_tokens_user_id_index` (`user_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of oauth_access_tokens
-- ----------------------------
INSERT INTO `oauth_access_tokens` VALUES ('edc668efa1544a0417198619a1536f76911e41b7d405f666bc15f062b2f6c40a9bee0c8e0f615eca', '2', '1', 'test', '[]', '0', '2018-04-23 06:12:25', '2018-04-23 06:12:25', '2019-04-23 06:12:25');

-- ----------------------------
-- Table structure for oauth_auth_codes
-- ----------------------------
DROP TABLE IF EXISTS `oauth_auth_codes`;
CREATE TABLE `oauth_auth_codes` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` int(11) NOT NULL,
  `client_id` int(11) NOT NULL,
  `scopes` text COLLATE utf8mb4_unicode_ci,
  `revoked` tinyint(1) NOT NULL,
  `expires_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of oauth_auth_codes
-- ----------------------------

-- ----------------------------
-- Table structure for oauth_clients
-- ----------------------------
DROP TABLE IF EXISTS `oauth_clients`;
CREATE TABLE `oauth_clients` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `secret` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `redirect` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `personal_access_client` tinyint(1) NOT NULL,
  `password_client` tinyint(1) NOT NULL,
  `revoked` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `oauth_clients_user_id_index` (`user_id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of oauth_clients
-- ----------------------------
INSERT INTO `oauth_clients` VALUES ('1', null, 'Laravel Personal Access Client', '2ovSD9hNiJoghw383Rb7oZDyeSG8jN9OSm7ZN5az', 'http://localhost', '1', '0', '0', '2018-03-20 17:29:32', '2018-03-20 17:29:32');
INSERT INTO `oauth_clients` VALUES ('2', null, 'Laravel Password Grant Client', 'nHPiO6O5iuaL2Gi7gGMi2LJtHTZub7bsK64RcSGn', 'http://localhost', '0', '1', '0', '2018-03-20 17:29:32', '2018-03-20 17:29:32');

-- ----------------------------
-- Table structure for oauth_personal_access_clients
-- ----------------------------
DROP TABLE IF EXISTS `oauth_personal_access_clients`;
CREATE TABLE `oauth_personal_access_clients` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `client_id` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `oauth_personal_access_clients_client_id_index` (`client_id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of oauth_personal_access_clients
-- ----------------------------
INSERT INTO `oauth_personal_access_clients` VALUES ('1', '1', '2018-03-20 17:29:32', '2018-03-20 17:29:32');

-- ----------------------------
-- Table structure for oauth_refresh_tokens
-- ----------------------------
DROP TABLE IF EXISTS `oauth_refresh_tokens`;
CREATE TABLE `oauth_refresh_tokens` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `access_token_id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `revoked` tinyint(1) NOT NULL,
  `expires_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `oauth_refresh_tokens_access_token_id_index` (`access_token_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of oauth_refresh_tokens
-- ----------------------------

-- ----------------------------
-- Table structure for open
-- ----------------------------
DROP TABLE IF EXISTS `open`;
CREATE TABLE `open` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `url` varchar(255) DEFAULT NULL COMMENT '链接',
  `status` tinyint(255) DEFAULT NULL COMMENT '开关状态 0 关闭 1打开',
  `tag` varchar(255) DEFAULT NULL COMMENT '唯一标识',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of open
-- ----------------------------
INSERT INTO `open` VALUES ('2', 'www.baidu.com', '0', '531368375d1661c181c37df1902b39f2', '2018-04-17 08:14:29', '2018-04-17 08:15:48', null);

-- ----------------------------
-- Table structure for outgoing_product
-- ----------------------------
DROP TABLE IF EXISTS `outgoing_product`;
CREATE TABLE `outgoing_product` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `outgoing_quantity` int(11) DEFAULT NULL COMMENT '出库数量',
  `product_price` decimal(11,2) DEFAULT NULL COMMENT '商品价格',
  `product_id` int(11) DEFAULT NULL COMMENT '商品ID',
  `outgoing_id` int(11) DEFAULT NULL COMMENT '出库ID',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of outgoing_product
-- ----------------------------

-- ----------------------------
-- Table structure for outgoing_storage
-- ----------------------------
DROP TABLE IF EXISTS `outgoing_storage`;
CREATE TABLE `outgoing_storage` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `created_user` varchar(255) DEFAULT NULL COMMENT '申请人',
  `business_id` int(11) DEFAULT NULL COMMENT '商家ID',
  `outgoing_address` varchar(255) DEFAULT NULL COMMENT '出货地点',
  `contract_number` varchar(255) DEFAULT NULL COMMENT '合同编号',
  `outgoing_type` tinyint(1) DEFAULT NULL COMMENT '分类 1=销售 2=样品 3=调拨出库',
  `taxation` tinyint(1) DEFAULT NULL COMMENT '税费 1=无 2=增值税 3=增值税加3%代扣税',
  `appendix` varchar(255) DEFAULT NULL COMMENT '附件',
  `appendix_name` varchar(255) DEFAULT NULL COMMENT '附件名称',
  `content` text,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of outgoing_storage
-- ----------------------------

-- ----------------------------
-- Table structure for password_resets
-- ----------------------------
DROP TABLE IF EXISTS `password_resets`;
CREATE TABLE `password_resets` (
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  KEY `password_resets_email_index` (`email`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of password_resets
-- ----------------------------

-- ----------------------------
-- Table structure for permissions
-- ----------------------------
DROP TABLE IF EXISTS `permissions`;
CREATE TABLE `permissions` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `guard_name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `display_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '菜单名称',
  `pid` int(11) DEFAULT NULL,
  `display` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of permissions
-- ----------------------------
INSERT INTO `permissions` VALUES ('1', '/admin/menu', 'web', null, null, '菜单管理', '0', '1', null);
INSERT INTO `permissions` VALUES ('2', '/admin/product', 'api', '2018-03-21 17:13:59', '2018-04-17 07:33:52', '产品管理', '0', '1', null);
INSERT INTO `permissions` VALUES ('3', '/admin/system', 'api', '2018-03-21 17:21:08', '2018-04-17 07:33:55', '系统设置', '0', '1', null);
INSERT INTO `permissions` VALUES ('4', '/admin/system/category', 'api', '2018-03-21 17:21:32', '2018-03-21 17:21:32', '分类管理', '3', '1', null);
INSERT INTO `permissions` VALUES ('5', '/admin/finished', 'api', '2018-04-08 07:39:58', '2018-04-17 07:33:39', '成品类', '0', '0', null);
INSERT INTO `permissions` VALUES ('6', '/admin/finished/storage', 'api', '2018-04-08 07:40:49', '2018-04-08 07:40:49', '入库管理', '5', '1', null);
INSERT INTO `permissions` VALUES ('9', '/admin/finished/outgoing', 'api', '2018-04-23 03:05:26', '2018-04-23 03:05:26', '出库管理', '5', '1', null);

-- ----------------------------
-- Table structure for product
-- ----------------------------
DROP TABLE IF EXISTS `product`;
CREATE TABLE `product` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL COMMENT '产品名称',
  `category_id` int(11) DEFAULT NULL COMMENT '产品分类',
  `market_price` decimal(10,2) DEFAULT NULL COMMENT '市场单价',
  `metering_unit` varchar(255) DEFAULT NULL COMMENT '计量单位',
  `spec` varchar(255) DEFAULT NULL COMMENT '规格',
  `created_user` int(11) DEFAULT NULL COMMENT '添加人',
  `desc` text COMMENT '详情',
  `status` tinyint(1) DEFAULT NULL COMMENT '状态 0 = 禁用 1=启用',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of product
-- ----------------------------
INSERT INTO `product` VALUES ('1', '测试', '1', '12.00', '瓶', '12', '2', '21', '0', '2018-04-08 06:38:42', '2018-04-12 07:42:06', null);
INSERT INTO `product` VALUES ('3', '测试2', '3', '100.00', '两', '100', '2', '100', '1', '2018-04-23 02:39:12', '2018-04-23 02:39:12', null);

-- ----------------------------
-- Table structure for roles
-- ----------------------------
DROP TABLE IF EXISTS `roles`;
CREATE TABLE `roles` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `guard_name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of roles
-- ----------------------------

-- ----------------------------
-- Table structure for role_has_permissions
-- ----------------------------
DROP TABLE IF EXISTS `role_has_permissions`;
CREATE TABLE `role_has_permissions` (
  `permission_id` int(10) unsigned NOT NULL,
  `role_id` int(10) unsigned NOT NULL,
  PRIMARY KEY (`permission_id`,`role_id`),
  KEY `role_has_permissions_role_id_foreign` (`role_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of role_has_permissions
-- ----------------------------

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES ('2', 'admin', '$2y$10$gFheUlkXVfwnqkZxTQeoyuADIbU1H99oiY9dYY4mm4kGPzYmcNgfy', null, null, null);
