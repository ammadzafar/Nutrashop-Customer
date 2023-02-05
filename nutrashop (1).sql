-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 04, 2021 at 02:56 PM
-- Server version: 10.4.18-MariaDB
-- PHP Version: 7.3.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `nutrashop`
--

-- --------------------------------------------------------

--
-- Table structure for table `admins`
--

CREATE TABLE `admins` (
  `id` int(11) NOT NULL,
  `firstName` varchar(255) DEFAULT NULL,
  `lastName` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `attributeproducts`
--

CREATE TABLE `attributeproducts` (
  `id` int(11) NOT NULL,
  `attributeId` int(11) NOT NULL,
  `productId` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `attributes`
--

CREATE TABLE `attributes` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `attributevalues`
--

CREATE TABLE `attributevalues` (
  `id` int(11) NOT NULL,
  `attributeId` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `brands`
--

CREATE TABLE `brands` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `slug` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `seo_title` varchar(255) DEFAULT NULL,
  `seo_description` text DEFAULT NULL,
  `seo_keywords` text DEFAULT NULL,
  `isPopular` tinyint(1) NOT NULL DEFAULT 0,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `brands`
--

INSERT INTO `brands` (`id`, `name`, `slug`, `description`, `image`, `seo_title`, `seo_description`, `seo_keywords`, `isPopular`, `createdAt`, `updatedAt`) VALUES
(1, 'test', 'test', '', 'brands/1621676128960-brands-04 Approved & In Progress.png', NULL, NULL, NULL, 1, '2021-04-11 16:49:41', '2021-05-22 09:35:28'),
(2, 'test2', 'test2', 'rest', 'brands/1620550709197-brands-thumbnail_5757a466-3eb7-44bb-a7ff-3357c19e6237.jpg', NULL, NULL, NULL, 1, '2021-05-09 08:58:29', '2021-05-22 09:35:31'),
(3, 'brand', 'brand', 'vhgfcgdchgb', 'brands/1621676143542-brands-03 Proposals Received.png', NULL, NULL, NULL, 1, '2021-05-09 09:02:31', '2021-05-22 09:35:43');

-- --------------------------------------------------------

--
-- Table structure for table `collectionmenus`
--

CREATE TABLE `collectionmenus` (
  `id` int(11) NOT NULL,
  `collectionId` int(11) NOT NULL,
  `menuId` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `collectionmenus`
--

INSERT INTO `collectionmenus` (`id`, `collectionId`, `menuId`, `createdAt`, `updatedAt`) VALUES
(1, 1, 1, '2021-05-09 09:00:01', '2021-05-09 09:00:01');

-- --------------------------------------------------------

--
-- Table structure for table `collectionproducts`
--

CREATE TABLE `collectionproducts` (
  `id` int(11) NOT NULL,
  `collectionId` int(11) NOT NULL,
  `productId` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `collectionproducts`
--

INSERT INTO `collectionproducts` (`id`, `collectionId`, `productId`, `createdAt`, `updatedAt`) VALUES
(7, 1, 1, '2021-05-22 09:45:26', '2021-05-22 09:45:26');

-- --------------------------------------------------------

--
-- Table structure for table `collections`
--

CREATE TABLE `collections` (
  `id` int(11) NOT NULL,
  `collectionId` int(11) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `slug` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `visibility` tinyint(1) DEFAULT 1 COMMENT '1 for published 0 for hidden',
  `seo_title` varchar(255) DEFAULT NULL,
  `seo_description` text DEFAULT NULL,
  `seo_keywords` text DEFAULT NULL,
  `isPopular` tinyint(1) NOT NULL DEFAULT 0,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `collections`
--

INSERT INTO `collections` (`id`, `collectionId`, `name`, `slug`, `description`, `image`, `visibility`, `seo_title`, `seo_description`, `seo_keywords`, `isPopular`, `createdAt`, `updatedAt`) VALUES
(1, NULL, 'test', 'test', '', 'collections/1618159822431-brands-cake-img.png', 1, NULL, NULL, NULL, 1, '2021-04-11 16:50:22', '2021-04-11 16:50:22');

-- --------------------------------------------------------

--
-- Table structure for table `customers`
--

CREATE TABLE `customers` (
  `id` int(11) NOT NULL,
  `firstName` varchar(255) DEFAULT NULL,
  `lastName` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `menus`
--

CREATE TABLE `menus` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `slug` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `menus`
--

INSERT INTO `menus` (`id`, `name`, `slug`, `createdAt`, `updatedAt`) VALUES
(1, 'MUltivitamins and supplements', 'multivitamins-and-supplements', '2021-05-09 09:00:01', '2021-05-09 09:00:01');

-- --------------------------------------------------------

--
-- Table structure for table `orderproducts`
--

CREATE TABLE `orderproducts` (
  `id` int(11) NOT NULL,
  `orderId` int(11) NOT NULL,
  `productId` int(11) NOT NULL,
  `quantity` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` int(11) NOT NULL,
  `order_no` varchar(255) DEFAULT NULL,
  `statusId` int(11) NOT NULL,
  `customerId` int(11) NOT NULL,
  `address` varchar(255) DEFAULT NULL,
  `province` varchar(255) DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `productimages`
--

CREATE TABLE `productimages` (
  `id` int(11) NOT NULL,
  `path` varchar(255) DEFAULT NULL,
  `productId` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `brandId` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `slug` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `callForPrice` tinyint(1) DEFAULT 0,
  `price` double DEFAULT 0,
  `regularPrice` double DEFAULT 0,
  `quantity` int(11) DEFAULT 0,
  `stockStatus` enum('in_stock','out_of_stock','stock_back') DEFAULT NULL,
  `sku` varchar(255) DEFAULT NULL,
  `barcode` varchar(255) DEFAULT NULL,
  `visibility` tinyint(1) DEFAULT 1 COMMENT '1 for published 0 for hidden',
  `seo_title` varchar(255) DEFAULT NULL,
  `seo_description` text DEFAULT NULL,
  `seo_keywords` text DEFAULT NULL,
  `isPopular` tinyint(1) NOT NULL DEFAULT 0,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `brandId`, `name`, `slug`, `description`, `callForPrice`, `price`, `regularPrice`, `quantity`, `stockStatus`, `sku`, `barcode`, `visibility`, `seo_title`, `seo_description`, `seo_keywords`, `isPopular`, `createdAt`, `updatedAt`) VALUES
(1, 1, 'test', 'test', '<p>&lt;p&gt;testaetaw&lt;/p&gt;</p>', 0, 0, 123, 0, 'in_stock', '', NULL, 1, 'test', 'test', 'test', 0, '2021-04-11 16:51:19', '2021-05-22 09:45:26');

-- --------------------------------------------------------

--
-- Table structure for table `producttags`
--

CREATE TABLE `producttags` (
  `id` int(11) NOT NULL,
  `productId` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `reviews`
--

CREATE TABLE `reviews` (
  `id` int(11) NOT NULL,
  `customerId` int(11) NOT NULL,
  `productId` int(11) NOT NULL,
  `rating` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `sequelizemeta`
--

CREATE TABLE `sequelizemeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
('20201230202358-create-admin.js'),
('20201230203637-create-brand.js'),
('20210117160733-create-collection.js'),
('20210117162953-create-product.js'),
('20210117162960-create-product-tag.js'),
('20210117164414-create-product-image.js'),
('20210202110820-create-attribute.js'),
('20210202110919-create-attribute-value.js'),
('20210202111605-create-attribute-product.js'),
('20210202112200-create-variant.js'),
('20210202124146-create-variant-value.js'),
('20210202124506-create-variant-image.js'),
('20210211181338-create-collection-products.js'),
('20210216185308-create-menu.js'),
('20210222182020-create-collection-menus.js'),
('20210312184547-create-status.js'),
('20210312184626-create-customer.js'),
('20210312184848-create-order.js'),
('20210312184913-create-order-products.js'),
('20210323090009-create-test.js'),
('20210326114114-create-review.js');

-- --------------------------------------------------------

--
-- Table structure for table `statuses`
--

CREATE TABLE `statuses` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `tests`
--

CREATE TABLE `tests` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `lastName` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `variantimages`
--

CREATE TABLE `variantimages` (
  `id` int(11) NOT NULL,
  `path` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `variants`
--

CREATE TABLE `variants` (
  `id` int(11) NOT NULL,
  `productId` int(11) NOT NULL,
  `price` double DEFAULT 0,
  `sku` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `variantvalues`
--

CREATE TABLE `variantvalues` (
  `id` int(11) NOT NULL,
  `productId` int(11) NOT NULL,
  `VariantId` int(11) NOT NULL,
  `attributeId` int(11) NOT NULL,
  `valueId` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admins`
--
ALTER TABLE `admins`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `attributeproducts`
--
ALTER TABLE `attributeproducts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `attributeId` (`attributeId`),
  ADD KEY `productId` (`productId`);

--
-- Indexes for table `attributes`
--
ALTER TABLE `attributes`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `attributevalues`
--
ALTER TABLE `attributevalues`
  ADD PRIMARY KEY (`id`),
  ADD KEY `attributeId` (`attributeId`);

--
-- Indexes for table `brands`
--
ALTER TABLE `brands`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `slug` (`slug`);

--
-- Indexes for table `collectionmenus`
--
ALTER TABLE `collectionmenus`
  ADD PRIMARY KEY (`id`),
  ADD KEY `collectionId` (`collectionId`),
  ADD KEY `menuId` (`menuId`);

--
-- Indexes for table `collectionproducts`
--
ALTER TABLE `collectionproducts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `collectionId` (`collectionId`),
  ADD KEY `productId` (`productId`);

--
-- Indexes for table `collections`
--
ALTER TABLE `collections`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `slug` (`slug`),
  ADD KEY `collectionId` (`collectionId`);

--
-- Indexes for table `customers`
--
ALTER TABLE `customers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `menus`
--
ALTER TABLE `menus`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `slug` (`slug`);

--
-- Indexes for table `orderproducts`
--
ALTER TABLE `orderproducts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `orderId` (`orderId`),
  ADD KEY `productId` (`productId`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `statusId` (`statusId`),
  ADD KEY `customerId` (`customerId`);

--
-- Indexes for table `productimages`
--
ALTER TABLE `productimages`
  ADD PRIMARY KEY (`id`),
  ADD KEY `productId` (`productId`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `slug` (`slug`),
  ADD KEY `brandId` (`brandId`);

--
-- Indexes for table `producttags`
--
ALTER TABLE `producttags`
  ADD PRIMARY KEY (`id`),
  ADD KEY `productId` (`productId`);

--
-- Indexes for table `reviews`
--
ALTER TABLE `reviews`
  ADD PRIMARY KEY (`id`),
  ADD KEY `customerId` (`customerId`),
  ADD KEY `productId` (`productId`);

--
-- Indexes for table `sequelizemeta`
--
ALTER TABLE `sequelizemeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `statuses`
--
ALTER TABLE `statuses`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tests`
--
ALTER TABLE `tests`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `variantimages`
--
ALTER TABLE `variantimages`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `variants`
--
ALTER TABLE `variants`
  ADD PRIMARY KEY (`id`),
  ADD KEY `productId` (`productId`);

--
-- Indexes for table `variantvalues`
--
ALTER TABLE `variantvalues`
  ADD PRIMARY KEY (`id`),
  ADD KEY `productId` (`productId`),
  ADD KEY `VariantId` (`VariantId`),
  ADD KEY `attributeId` (`attributeId`),
  ADD KEY `valueId` (`valueId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admins`
--
ALTER TABLE `admins`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `attributeproducts`
--
ALTER TABLE `attributeproducts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `attributes`
--
ALTER TABLE `attributes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `attributevalues`
--
ALTER TABLE `attributevalues`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `brands`
--
ALTER TABLE `brands`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `collectionmenus`
--
ALTER TABLE `collectionmenus`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `collectionproducts`
--
ALTER TABLE `collectionproducts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `collections`
--
ALTER TABLE `collections`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `customers`
--
ALTER TABLE `customers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `menus`
--
ALTER TABLE `menus`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `orderproducts`
--
ALTER TABLE `orderproducts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `productimages`
--
ALTER TABLE `productimages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `producttags`
--
ALTER TABLE `producttags`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `reviews`
--
ALTER TABLE `reviews`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `statuses`
--
ALTER TABLE `statuses`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tests`
--
ALTER TABLE `tests`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `variantimages`
--
ALTER TABLE `variantimages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `variants`
--
ALTER TABLE `variants`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `variantvalues`
--
ALTER TABLE `variantvalues`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `attributeproducts`
--
ALTER TABLE `attributeproducts`
  ADD CONSTRAINT `attributeproducts_ibfk_1` FOREIGN KEY (`attributeId`) REFERENCES `attributes` (`id`),
  ADD CONSTRAINT `attributeproducts_ibfk_2` FOREIGN KEY (`productId`) REFERENCES `products` (`id`);

--
-- Constraints for table `attributevalues`
--
ALTER TABLE `attributevalues`
  ADD CONSTRAINT `attributevalues_ibfk_1` FOREIGN KEY (`attributeId`) REFERENCES `attributes` (`id`);

--
-- Constraints for table `collectionmenus`
--
ALTER TABLE `collectionmenus`
  ADD CONSTRAINT `collectionmenus_ibfk_1` FOREIGN KEY (`collectionId`) REFERENCES `collections` (`id`),
  ADD CONSTRAINT `collectionmenus_ibfk_2` FOREIGN KEY (`menuId`) REFERENCES `menus` (`id`);

--
-- Constraints for table `collectionproducts`
--
ALTER TABLE `collectionproducts`
  ADD CONSTRAINT `collectionproducts_ibfk_1` FOREIGN KEY (`collectionId`) REFERENCES `collections` (`id`),
  ADD CONSTRAINT `collectionproducts_ibfk_2` FOREIGN KEY (`productId`) REFERENCES `products` (`id`);

--
-- Constraints for table `collections`
--
ALTER TABLE `collections`
  ADD CONSTRAINT `collections_ibfk_1` FOREIGN KEY (`collectionId`) REFERENCES `collections` (`id`);

--
-- Constraints for table `orderproducts`
--
ALTER TABLE `orderproducts`
  ADD CONSTRAINT `orderproducts_ibfk_1` FOREIGN KEY (`orderId`) REFERENCES `orders` (`id`),
  ADD CONSTRAINT `orderproducts_ibfk_2` FOREIGN KEY (`productId`) REFERENCES `products` (`id`);

--
-- Constraints for table `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`statusId`) REFERENCES `statuses` (`id`),
  ADD CONSTRAINT `orders_ibfk_2` FOREIGN KEY (`customerId`) REFERENCES `customers` (`id`);

--
-- Constraints for table `productimages`
--
ALTER TABLE `productimages`
  ADD CONSTRAINT `productimages_ibfk_1` FOREIGN KEY (`productId`) REFERENCES `products` (`id`);

--
-- Constraints for table `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`brandId`) REFERENCES `brands` (`id`);

--
-- Constraints for table `producttags`
--
ALTER TABLE `producttags`
  ADD CONSTRAINT `producttags_ibfk_1` FOREIGN KEY (`productId`) REFERENCES `products` (`id`);

--
-- Constraints for table `reviews`
--
ALTER TABLE `reviews`
  ADD CONSTRAINT `reviews_ibfk_1` FOREIGN KEY (`customerId`) REFERENCES `customers` (`id`),
  ADD CONSTRAINT `reviews_ibfk_2` FOREIGN KEY (`productId`) REFERENCES `products` (`id`);

--
-- Constraints for table `variants`
--
ALTER TABLE `variants`
  ADD CONSTRAINT `variants_ibfk_1` FOREIGN KEY (`productId`) REFERENCES `products` (`id`);

--
-- Constraints for table `variantvalues`
--
ALTER TABLE `variantvalues`
  ADD CONSTRAINT `variantvalues_ibfk_1` FOREIGN KEY (`productId`) REFERENCES `products` (`id`),
  ADD CONSTRAINT `variantvalues_ibfk_2` FOREIGN KEY (`VariantId`) REFERENCES `variants` (`id`),
  ADD CONSTRAINT `variantvalues_ibfk_3` FOREIGN KEY (`attributeId`) REFERENCES `attributes` (`id`),
  ADD CONSTRAINT `variantvalues_ibfk_4` FOREIGN KEY (`valueId`) REFERENCES `attributevalues` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
