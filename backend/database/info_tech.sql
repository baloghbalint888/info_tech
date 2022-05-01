-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1
-- Létrehozás ideje: 2022. Máj 02. 00:08
-- Kiszolgáló verziója: 10.4.21-MariaDB
-- PHP verzió: 8.0.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Adatbázis: `info_tech`
--
CREATE DATABASE IF NOT EXISTS `info_tech` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_hungarian_ci;
USE `info_tech`;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `admin`
--

CREATE TABLE `admin` (
  `login` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_hungarian_ci NOT NULL,
  `password` int(30) NOT NULL,
  `name` varchar(40) CHARACTER SET utf8mb4 COLLATE utf8mb4_hungarian_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- A tábla adatainak kiíratása `admin`
--

INSERT INTO `admin` (`login`, `password`, `name`) VALUES
('babalint', 123, 'Balogh Bálint'),
('kildiko', 123, 'Juhászné Kovács Ildikó'),
('rekalaca', 123, 'Rékási László');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `bills`
--

CREATE TABLE `bills` (
  `bill_id` int(11) NOT NULL,
  `productID` int(11) DEFAULT NULL,
  `prod_amount` int(11) DEFAULT NULL,
  `serviceID` int(11) DEFAULT NULL,
  `net_value` int(11) NOT NULL,
  `gross_value` int(11) NOT NULL,
  `vat_id` int(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- A tábla adatainak kiíratása `bills`
--

INSERT INTO `bills` (`bill_id`, `productID`, `prod_amount`, `serviceID`, `net_value`, `gross_value`, `vat_id`) VALUES
(1, 2, 1, NULL, 140945, 179000, 1),
(2, 3, 1, 1, 182677, 232200, 1),
(3, 2, 8, NULL, 984252, 1250000, 1),
(4, 5, 30, NULL, 417323, 530000, 1),
(5, 1, 1, NULL, 219685, 279000, 1);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `bill_head`
--

CREATE TABLE `bill_head` (
  `ID` int(11) NOT NULL,
  `userID` int(20) DEFAULT NULL,
  `supplierID` int(11) DEFAULT NULL,
  `date` date NOT NULL,
  `total` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- A tábla adatainak kiíratása `bill_head`
--

INSERT INTO `bill_head` (`ID`, `userID`, `supplierID`, `date`, `total`) VALUES
(1, 1, NULL, '2022-01-10', 179000),
(2, 9, NULL, '2022-01-11', 232200),
(3, NULL, 1, '2022-01-12', 1250000),
(4, NULL, 4, '2022-01-13', 530000),
(5, 7, NULL, '2022-01-14', 279000);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `bill_switch`
--

CREATE TABLE `bill_switch` (
  `ID` int(11) NOT NULL,
  `bill_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_hungarian_ci;

--
-- A tábla adatainak kiíratása `bill_switch`
--

INSERT INTO `bill_switch` (`ID`, `bill_id`) VALUES
(1, 1),
(2, 2),
(3, 3),
(4, 4),
(5, 5);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `cart`
--

CREATE TABLE `cart` (
  `ID` int(11) NOT NULL,
  `userID` int(20) NOT NULL,
  `productID` int(11) DEFAULT NULL,
  `serviceID` int(11) DEFAULT NULL,
  `prod_amount` int(11) DEFAULT NULL,
  `date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- A tábla adatainak kiíratása `cart`
--

INSERT INTO `cart` (`ID`, `userID`, `productID`, `serviceID`, `prod_amount`, `date`) VALUES
(1, 5, 2, NULL, 1, '2022-02-08'),
(7, 54, 4, NULL, 2, '1990-11-08'),
(11, 54, 16, NULL, 1, '2022-05-01'),
(12, 54, 14, NULL, 2, '2022-05-01'),
(13, 54, 13, NULL, 1, '2022-05-01'),
(14, 54, 14, NULL, 2, '2022-05-01'),
(15, 54, 15, NULL, 1, '2022-05-01'),
(16, 54, 16, NULL, 2, '2022-05-01'),
(17, 54, 14, NULL, 1, '2022-05-01'),
(18, 54, 16, NULL, 1, '2022-05-01'),
(19, 54, 15, NULL, 2, '2022-05-01');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `categories`
--

CREATE TABLE `categories` (
  `ID` int(11) NOT NULL,
  `description` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_hungarian_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- A tábla adatainak kiíratása `categories`
--

INSERT INTO `categories` (`ID`, `description`) VALUES
(2, 'Asztali PC'),
(6, 'Csatlakozók'),
(8, 'Hangkártyák'),
(9, 'Jelerősítők'),
(5, 'Kábelek'),
(1, 'Laptopok'),
(4, 'Nyomtatók'),
(3, 'Routerek'),
(10, 'SSD meghajtók'),
(7, 'Videókártyák');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `distribution`
--

CREATE TABLE `distribution` (
  `catID` int(2) NOT NULL,
  `productID` int(11) NOT NULL,
  `name` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_hungarian_ci NOT NULL,
  `amount` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_hungarian_ci NOT NULL DEFAULT 'db',
  `picture` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_hungarian_ci NOT NULL,
  `description` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_hungarian_ci NOT NULL,
  `vat_id` int(2) NOT NULL DEFAULT 1,
  `net_value` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- A tábla adatainak kiíratása `distribution`
--

INSERT INTO `distribution` (`catID`, `productID`, `name`, `amount`, `picture`, `description`, `vat_id`, `net_value`) VALUES
(1, 1, 'LENOVO V15-IIL 82C5000QHV', 'db', 'levonov15.png', 'Intel® Core™ i5-1035G1 Processor (6M Cache, Up to 3.60) • Microsoft Windows 10 Home • 8GB DDR4 2666MHz RAM (2x4GB) • 256GB M.2 PCIe SSD • 15.6\" FullHD (1920 x 1080) matt LCD kijelző • Intel® UHD Graphics integrált grafikus vezérlő • Wi-Fi 802.11 ac • Bluetooth 4.2 • HDMI (1db) • USB 2.0 (1db) • USB 3.0 (2db) • MMC/SD/SDHX/SDXC-kártyaolvasó • VGA Webkamera (beépített) • Garancia: 24 hónap', 1, 220000),
(1, 2, 'LENOVO IDEAPAD 3 15IIL05 81WE008KHV', 'db', 'lenovoideapad3.png', 'AMD® Ryzen™ 5-5500U 6 magos 2.1 GHz Mobile APU (8M Cache, up to 4.0 GHz) • Operációs rendszer nélkül • 8GB (4+4) DDR4 3200MHz RAM • 256GB M.2 2242 PCIe 3.0x4 NVMe SSD • 15.6\" FullHD (1920 x 1080) matt IPS LCD kijelző • AMD Radeon™ Graphics integrált grafikus vezérlő • Wi-Fi 802.11 ac • Bluetooth 5.0 • HDMI (1db) • USB 2.0 (1db) • USB 3.0 (1db) • USB-C 3.0 (1db) • MMC/SD/SDHX/SDXC-kártyaolvasó • 720p IR Beépített Webkamera Windows Hello támogatással • Garancia: 36 hónap', 1, 140945),
(2, 3, 'DELL VOSTRO 3681', 'db', 'dellvostro.png', 'Intel® Core™ i3-10100 Processor (6M Cache, up to 4.30 GHz) • Ubuntu (Linux) • 8GB DDR4 2666MHz RAM • 256GB M.2 PCIe SSD • Intel® UHD Graphics 630 integrált grafikus vezérlő • 1000Mbps RJ45 (1 db) • Wi-Fi 802.11 ac • Bluetooth 4.2 • HDMI (1db) • VGA(1db) • USB2.0(4db) • USB3.0(4db) • DVD+-RW • MMC/SD/SDHX/SDXC-kártyaolvasó • Garancia: 36 hónap', 1, 176378),
(2, 4, 'ASUS VIVOBOOK PRO 14 OLED', 'db', 'asussrx.png', 'Intel® Core™ i7-11370H Processor (12M Cache, up to 4.80 GHz, with IPU) • Operációs rendszer nélkül • 16GB DDR4 RAM • 512 GB M.2 NVMe™ PCIe® 3.0 SSD • 14\" 2.8K (2880x1800) fényes OLED (PANTONE Validated) kijelző • NVIDIA® GeForce™ GTX 1650 4GB GDDR6 grafikus vezérlő • Wi-Fi 802.11 ax • Bluetooth 5.0 • HDMI (1db) • USB 2.0 (2db) • USB 3.0 (1db) • USB-C 4.0 (1db) • 720p HD kamera Privacy Shutter kamerafedéllel• Garancia: 36 hónap', 1, 338575),
(3, 5, 'TP-Link Archer AX10 AX1500', 'db', 'tplinkarch.png', 'TP-LInk router • Vezetékes csatlakozás: 4db Gigabit LAN (RJ-45) + 1db 1000Mbps WAN (RJ-45) • Vezeték nélküli kapcsolat: Wi-Fi 802.11ax/ac/n/a (5GHz), 802.11n/b/g (2.4GHz) • Adatátvitel: 1201 Mbps (5 GHz, 11ax),  300 Mbps (2.4 GHz, 11n) • 4db külső antenna • Méret 260.2 x 135 x 38.6mm • Garancia: 36 hónap', 1, 18339),
(3, 6, 'Asus RT-AX55 AX1800 Mbps Dual-band', 'db', 'asusrtax55.png', 'Működési frekvencia: 2.4 GHz / 5 GHz • Tulajdonságok: Router app, MU-MIMO, Smart Connect, Traffic Analyzer, Adaptive QoS, AiProtection Classic, Parental Control, VPN server : PPTP Server, OpenVPN Server, IPSec server, VPN client : PPTP client, L2TP client, OpenVPN client, IPTV support, OFDMA, Bandwidth Limiter, Beamforming • Portok: RJ45 for Gigabits BaseT for WAN x 1, RJ45 for Gigabits BaseT for LAN x 4 • Garancia: 36 hónap', 1, 27551),
(3, 7, 'TP-Link TL-MR100 4G', 'db', 'tplinktlmr100.png', 'Vezeték nélküli 4G LTE router • Szín: Fekete • Csatlakozások: 10/100Mbps LAN Port • 10/100Mbps LAN/WAN Port • Micro SIM Card Slot • Wi-Fi sztenderd : IEEE 802.11b/g/n • Frekvencia: 2.4 GHz\r\nAdatátvitel: 300 Mbps • Vezeték nélküli biztonság: 64/128-bit WEP, WPA/WPA2, WPA-PSK/WPA2-PSK titkosítások • Mobil hálózat típusa: 4G: FDD-LTE: B1/B3/B5/B7/B8/B20 (2100/1800/850/2600/900/800 MHz)\r\nTDD-LTE: B38/B40/B41 (2600/2300/2500 MHz)\r\n3G: HSPA/UMTS: B1/B5/B8 (2100/850/900 MHz)\r\n', 1, 22827),
(3, 8, 'MERCUSYS MR70X WIRELESS AX1800', 'db', 'tendaac6.png', 'MERCUSYS router • Vezetékes csatlakozás: 3db 1000Mbit LAN + 1db WAN • Vezeték nélküli kapcsolat: Wi-Fi 802.11ax - 1201 Mbps (5 GHz) + 574 Mbps (2.4 GHz) • Biztonsági megoldások WPA2 titkosítás, WPA-PSK/WPA2-PSK, WPA3-PSK • Tűzfal :SPI Firewall, IP and MAC Address Binding • 4db 5 dBi-es fix Omni-Directional antenna• Garancia: 36 hónap', 1, 13307),
(4, 9, 'HP Deskjet 2320 All-in-One', 'db', 'hpdesk.png', 'Nyomtató/Másoló/Szkenner • Tintasugaras • Színes • Nyomtatási felbontás: 4800 x 1200 dpi • Nyomtatási sebesség: 7,5 lap/perc (Fekete-fehér A4), 5,5 lap/perc (Színes A4) • Másolás felbontás: 600 x 300 dpi • Másolási sebesség: 6 lap/perc (Fekete-fehér A4), 3 lap/perc (Színes A4) • Szkennelés felbontás: 1200 dpi • Csatlakoztatási lehetőségek: USB• Garancia: 12 hónap', 1, 13921),
(4, 10, 'Canon PIXMA TS3450', 'db', 'canonpixma.png', 'Nyomtató/Másoló/Szkenner/Fax • Tintasugaras • Színes • Nyomtatási felbontás: 4800 x 1200 dpi • Nyomtatási sebesség: 8,8 lap/perc (Fekete-fehér A4) • Nyomtatási sebesség: 4,4 lap/perc (Színes A4) • Másolási sebesség: 27 lap/perc (Fekete-fehér A4) • Másolási sebesség: 3,6 lap/perc (Színes A4) • Szkennelés felbontása: 600 x 1200 dpi • Csatlakozási lehetőségek: USB, Wi-Fi • Garancia: 12 hónap', 1, 20010),
(4, 11, 'HP DESKJET INK ADVANTAGE 3762', 'db', 'hpdeskink.png', 'Nyomtató/Másoló/Szkenner • Tintasugaras • Színes • Nyomtatási felbontás: 4800 x 1200 dpi • Nyomtatási sebesség: 8 lap/perc (Fekete-fehér A4), 5,5 lap/perc (Színes A4) • Másolás felbontás: 300 x 300 dpi • Másolási sebesség: 2,5 lap/perc (Fekete-fehér A4), 4 lap/perc (Színes A4) • Szkennelés felbontás: 600 dpi • Csatlakoztatási lehetőségek: Wi-Fi, USB• Garancia: 12 hónap', 1, 17315),
(4, 12, 'Epson L3210 multifunkciós tintatartályos nyomtató', 'db', 'epsonl3210.png', 'Nyomtató/Másol/Scann • Tintasugaras • Színes • Nyomtatási felbontás: 5760 x 1440 dpi • Nyomtatási sebesség: 33 lap/perc (Fekete-fehér A4), 15 lap/perc (Színes A4) • Szkennelési felbontás: 600 x 1200 dpi • Csatlakozási lehetőségek: USB• Garancia: 12 hónap', 1, 40937),
(5, 13, 'ROLINE UTP CAT6 PATCH KÁBEL 1 méteres', 'db', 'rolinecat6.png', 'Roline UTP Patchkábel • Vég1: RJ45 • Vég2: RJ45 • Hossz: 1m • Garancia: 12 hónap', 1, 622),
(5, 14, 'UTP Cat6 patch kábel 10 m DK-1617', 'db', 'nonamecat6.png', 'Funkció: Patch • Hosszúság: 10 m • Kategória: PC Egyéb • Vég 1: UTP • Vég 2: UTP• Garancia: 12 hónap', 1, 1543),
(5, 15, 'HDMI kábel 3m AK-330114-030-S', 'db', 'hdmi3m.png', 'Kolink HDMI kábel • Csatlakozó1 HDMI apa • Csatlakozó2 HDMI apa • Kábelhossz 2m • Gyártói cikkszám KKTMHH02V • Garancia: 12 hónap\r\n\r\n', 1, 1002),
(5, 16, 'Goobay 93999 USB 3.0 hosszabbító kábel 3m', 'db', 'goobayusb.png', 'USB A-A típusú hosszabbító kábel. Alkalmazási terület: USB szkennerek, nyomtatók, digitális kamerák, külső periféria házak, CD írók, USB hangszórók kábeleinek hosszabbítása.\r\n• Garancia: 12 hónap', 1, 1173);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `purchases`
--

CREATE TABLE `purchases` (
  `ID` int(11) NOT NULL,
  `userID` int(11) NOT NULL,
  `productID` int(11) DEFAULT NULL,
  `prod_amount` int(11) DEFAULT NULL,
  `date` date NOT NULL,
  `shipping_date` date NOT NULL,
  `shipping_adress` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_hungarian_ci NOT NULL,
  `payment_method` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_hungarian_ci NOT NULL,
  `serviceID` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- A tábla adatainak kiíratása `purchases`
--

INSERT INTO `purchases` (`ID`, `userID`, `productID`, `prod_amount`, `date`, `shipping_date`, `shipping_adress`, `payment_method`, `serviceID`) VALUES
(1, 1, 2, 1, '2022-01-06', '2022-01-10', '4320 Nagykálló, Mártírok útja 6.', 'készpénz', 1),
(2, 9, 3, 1, '2022-01-07', '2022-01-11', '4400 Nyíregyháza, Orosi út 44.', 'készpénz', 1),
(3, 7, 1, 2, '2022-01-10', '2022-01-14', '4326 Máriapócs, Bátori út 6.', 'átutalás', NULL);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `services`
--

CREATE TABLE `services` (
  `serviceID` int(11) NOT NULL,
  `description` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_hungarian_ci NOT NULL,
  `net_value` int(11) NOT NULL,
  `vat_id` int(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- A tábla adatainak kiíratása `services`
--

INSERT INTO `services` (`serviceID`, `description`, `net_value`, `vat_id`) VALUES
(1001, '30 perc helyszíni munkavégzés kiszállással együtt Szabolcs Szatmár Bereg megye területén.', 6457, 1),
(1002, '30 perc helyszíni munkavégzés sürgősségi kiszállással (3 órán belül) együtt Szabolcs Szatmár Bereg megye területén.', 9441, 1),
(1003, 'Minden további megkezdett 30 perc munkaidő.', 2598, 1);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `stock`
--

CREATE TABLE `stock` (
  `productID` int(11) NOT NULL,
  `stock` int(100) NOT NULL,
  `change_date` date NOT NULL,
  `increment` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- A tábla adatainak kiíratása `stock`
--

INSERT INTO `stock` (`productID`, `stock`, `change_date`, `increment`) VALUES
(1, 15, '2022-02-09', -1),
(2, 8, '2022-02-09', 2),
(3, 6, '2022-02-08', 3);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `suppliers`
--

CREATE TABLE `suppliers` (
  `ID` int(11) NOT NULL,
  `name` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_hungarian_ci NOT NULL,
  `reg_number` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_hungarian_ci NOT NULL,
  `tax_reg` varchar(11) CHARACTER SET utf8mb4 COLLATE utf8mb4_hungarian_ci NOT NULL,
  `address` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_hungarian_ci NOT NULL,
  `bank_account` varchar(40) CHARACTER SET utf8mb4 COLLATE utf8mb4_hungarian_ci NOT NULL,
  `email` varchar(89) CHARACTER SET utf8mb4 COLLATE utf8mb4_hungarian_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- A tábla adatainak kiíratása `suppliers`
--

INSERT INTO `suppliers` (`ID`, `name`, `reg_number`, `tax_reg`, `address`, `bank_account`, `email`) VALUES
(1, 'Lenovo Magyarország', '0109287221', '25752371241', '1037 Budapest, Montevideó utca 16. A. ép.', '10918001-00000002-12345678', 'megrendelo@lenovo.hu'),
(2, 'TP-LINK NET HUNGARY KFT', '0109200044', '25106505243', '1093 Budapest, Közraktár utca 30-32. 3. em.', '12001008-01492317-00308765', 'info@tplink.hu'),
(3, 'Hewlett-Packard Info Kft.', '0109904183', '14445710244', '1123 Budapest, Alkotás utca 55-61.', '12001008-01492317-11223344', 'hpmegrendel@hp.hu'),
(4, 'LAN Számítástechnikai Szolgáltató Kft.', '0109162407', '10678994242', '1155 Budapest Kolozsvár u. 7.', '10102244-59716600-01000007', 'sales@lan.hu'),
(5, 'ASUS MAGYARORSZÁG KFT.', '0109882161', '13964661242', '1075 Budapest, Wesselényi u. 16.', '12012204-01497372-00177777', 'asus_sale@asus.hu');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `supp_switch`
--

CREATE TABLE `supp_switch` (
  `productID` int(11) NOT NULL,
  `ID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_hungarian_ci;

--
-- A tábla adatainak kiíratása `supp_switch`
--

INSERT INTO `supp_switch` (`productID`, `ID`) VALUES
(1, 1),
(2, 1),
(3, 3);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `users`
--

CREATE TABLE `users` (
  `userID` int(11) NOT NULL,
  `login` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_hungarian_ci NOT NULL,
  `password` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_hungarian_ci NOT NULL,
  `name` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_hungarian_ci NOT NULL,
  `phone` varchar(40) CHARACTER SET utf8mb4 COLLATE utf8mb4_hungarian_ci NOT NULL,
  `birth` date DEFAULT NULL,
  `email` varchar(89) CHARACTER SET utf8mb4 COLLATE utf8mb4_hungarian_ci NOT NULL,
  `billing_address` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_hungarian_ci NOT NULL,
  `shipping_address` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_hungarian_ci NOT NULL,
  `tax_reg` varchar(13) CHARACTER SET utf8mb4 COLLATE utf8mb4_hungarian_ci DEFAULT NULL,
  `is_admin` tinyint(1) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- A tábla adatainak kiíratása `users`
--

INSERT INTO `users` (`userID`, `login`, `password`, `name`, `phone`, `birth`, `email`, `billing_address`, `shipping_address`, `tax_reg`, `is_admin`) VALUES
(14, 'beluka99', '$2b$10$UqcJ00P1RBOfgCfwr64FFuQ', 'Kiss Béla', '305233552', '1998-12-16', 'kissbela@hotmail.com', '4400 Nyíregyháza, Nád utca 22.', '4400 Nyíregyháza, Nád utca 22.', '11111111111', 0),
(15, 'kissJanos01', '$2b$10$7rhlmyNOrImaDPiRwJ7Rpua', 'Kiss Jancsi', '305233553', '1998-07-09', 'kisjanos@hotmail.hu', '4400 Nyíregyháza, Nád utca 22.', '4400 Nyíregyháza, Nád utca 22.', '11111111111', 0),
(54, 'mkr1337', '$2a$10$gOulIVqg.PzSG3qXeickQeZj.Oce3QbD1a7DvIskJMUbdlpEdFrNK', 'mkR1337', '305233551', '1998-12-31', 'baloghbalint888@gmail.com', '4400 Nyíregyháza, Nád utca 22.', '4400 Nyíregyháza, Nád utca 22.', '11111111111', 1),
(60, 'maki', '$2a$10$NSJmXClIy4g6CESwMPyjvehWLfhpOXhOwp1qyasHHRU9ol/Oz0z0C', 'Balogh Bálint', '305233553', '1999-11-08', 'baloghbalint888@gmail.com', '4400 Nyíregyháza, Nád utca 22.', '4400 Nyíregyháza, Nád utca 22.', '11111111111', 0),
(61, 'admin', '$2a$10$5GrZsOskBkBcR7X8XxuGzOOrPwFjWtNPtEiuUS..h8gZ7OxDWhEHe', 'Admin Admin', '301234567', '2000-01-01', 'admin@admin.com', '1111 Admin, Admin st. 1', '1111 Admin, Admin st. 1', '11111111111', 1),
(62, 'user', '$2a$10$ehtEHU8uKSUzKEkfA.aMverjnvDdXDo3ZsJ1/AcM8xAKeTu5jPYZi', 'User User', '301234567', '2000-01-01', 'user@user.com', '1111 User, User st. 1', '1111 User, User st. 1', '11111111111', 0);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `vat`
--

CREATE TABLE `vat` (
  `vat_id` int(4) NOT NULL,
  `vat_percentage` int(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- A tábla adatainak kiíratása `vat`
--

INSERT INTO `vat` (`vat_id`, `vat_percentage`) VALUES
(1, 27);

--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`login`),
  ADD KEY `name` (`name`);

--
-- A tábla indexei `bills`
--
ALTER TABLE `bills`
  ADD PRIMARY KEY (`bill_id`);

--
-- A tábla indexei `bill_head`
--
ALTER TABLE `bill_head`
  ADD PRIMARY KEY (`ID`);

--
-- A tábla indexei `bill_switch`
--
ALTER TABLE `bill_switch`
  ADD PRIMARY KEY (`bill_id`,`ID`);

--
-- A tábla indexei `cart`
--
ALTER TABLE `cart`
  ADD PRIMARY KEY (`ID`);

--
-- A tábla indexei `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `description` (`description`);

--
-- A tábla indexei `distribution`
--
ALTER TABLE `distribution`
  ADD PRIMARY KEY (`productID`),
  ADD KEY `name` (`name`);

--
-- A tábla indexei `purchases`
--
ALTER TABLE `purchases`
  ADD PRIMARY KEY (`ID`);

--
-- A tábla indexei `services`
--
ALTER TABLE `services`
  ADD PRIMARY KEY (`serviceID`);

--
-- A tábla indexei `stock`
--
ALTER TABLE `stock`
  ADD PRIMARY KEY (`productID`);

--
-- A tábla indexei `suppliers`
--
ALTER TABLE `suppliers`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `name` (`name`);

--
-- A tábla indexei `supp_switch`
--
ALTER TABLE `supp_switch`
  ADD PRIMARY KEY (`productID`,`ID`);

--
-- A tábla indexei `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`userID`),
  ADD UNIQUE KEY `login` (`login`) USING BTREE;

--
-- A tábla indexei `vat`
--
ALTER TABLE `vat`
  ADD PRIMARY KEY (`vat_id`);

--
-- A kiírt táblák AUTO_INCREMENT értéke
--

--
-- AUTO_INCREMENT a táblához `bill_head`
--
ALTER TABLE `bill_head`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT a táblához `cart`
--
ALTER TABLE `cart`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=71;

--
-- AUTO_INCREMENT a táblához `distribution`
--
ALTER TABLE `distribution`
  MODIFY `productID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT a táblához `purchases`
--
ALTER TABLE `purchases`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT a táblához `users`
--
ALTER TABLE `users`
  MODIFY `userID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=63;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
