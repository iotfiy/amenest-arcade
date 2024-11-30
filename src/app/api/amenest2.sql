SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

CREATE TABLE `arcade` (
  `arcade_id` varchar(16) NOT NULL,
  `coins_required` int(11) NOT NULL,
  `venu_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `arcade`
--

INSERT INTO `arcade` (`arcade_id`, `coins_required`, `venu_id`) VALUES
('ARCADE001', 10, 1),
('ARCADE002', 15, 2),
('ARCADE003', 20, 3);

-- --------------------------------------------------------

--
-- Table structure for table `arcade_api`
--

CREATE TABLE `arcade_api` (
  `arcade_id` varchar(16) NOT NULL,
  `api_key` varchar(128) NOT NULL,
  `ip_address` varchar(20) NOT NULL,
  `port` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `arcade_game`
--

CREATE TABLE `arcade_game` (
  `arcade_id` varchar(16) NOT NULL,
  `game_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `game`
--

CREATE TABLE `game` (
  `game_id` int(11) NOT NULL,
  `game_name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `payment_logs`
--

CREATE TABLE `payment_logs` (
  `arcade_id` varchar(16) NOT NULL,
  `transaction_id` varchar(128) NOT NULL,
  `amount` double NOT NULL,
  `timestamp` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `email` varchar(32) NOT NULL,
  `password` varchar(64) NOT NULL,
  `role` enum('manager','superadmin') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`email`, `password`, `role`) VALUES
('ahmed@gmail.com', 's1mple', 'manager'),
('jawwad@gmail.com', '$2b$10$5gHz0I1MInmu0nfg1jdLmO9XeaH2Pg2rDvv/wVgUXDoQ3QK3J1y/W', 'manager'),
('umer@gmail.com', 's1mple', 'superadmin');

-- --------------------------------------------------------

--
-- Table structure for table `users_arcade`
--

CREATE TABLE `users_arcade` (
  `email` varchar(32) NOT NULL,
  `arcade_id` varchar(16) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `venue_management`
--

CREATE TABLE `venue_management` (
  `venu_id` int(11) NOT NULL,
  `venu_name` varchar(255) NOT NULL,
  `venu_city` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `venue_management`
--

INSERT INTO `venue_management` (`venu_id`, `venu_name`, `venu_city`) VALUES
(1, 'Arcade001  Venue', 'Karachi'),
(2, 'Arcade002  Venue', 'Lahore'),
(3, 'Arcade003  venue', 'Islamabad');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `arcade`
--
ALTER TABLE `arcade`
  ADD PRIMARY KEY (`arcade_id`),
  ADD KEY `fk_venue_id` (`venu_id`);

--
-- Indexes for table `arcade_api`
--
ALTER TABLE `arcade_api`
  ADD PRIMARY KEY (`arcade_id`);

--
-- Indexes for table `arcade_game`
--
ALTER TABLE `arcade_game`
  ADD PRIMARY KEY (`arcade_id`,`game_id`),
  ADD KEY `game_id` (`game_id`);

--
-- Indexes for table `game`
--
ALTER TABLE `game`
  ADD PRIMARY KEY (`game_id`);

--
-- Indexes for table `payment_logs`
--
ALTER TABLE `payment_logs`
  ADD PRIMARY KEY (`transaction_id`),
  ADD KEY `fk_payment_logs_arcade_arcade_id` (`arcade_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `users_arcade`
--
ALTER TABLE `users_arcade`
  ADD PRIMARY KEY (`email`,`arcade_id`),
  ADD KEY `arcade_id` (`arcade_id`);

--
-- Indexes for table `venue_management`
--
ALTER TABLE `venue_management`
  ADD PRIMARY KEY (`venu_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `game`
--
ALTER TABLE `game`
  MODIFY `game_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `venue_management`
--
ALTER TABLE `venue_management`
  MODIFY `venu_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

ALTER TABLE `arcade`
  ADD CONSTRAINT `fk_venue_id` FOREIGN KEY (`venu_id`) REFERENCES `venue_management` (`venu_id`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `arcade_api`
  ADD CONSTRAINT `arcade_api_fk` FOREIGN KEY (`arcade_id`) REFERENCES `arcade` (`arcade_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_arcade_api_arcade_id` FOREIGN KEY (`arcade_id`) REFERENCES `arcade` (`arcade_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `arcade_game`
--
ALTER TABLE `arcade_game`
  ADD CONSTRAINT `arcade_game_ibfk_1` FOREIGN KEY (`arcade_id`) REFERENCES `arcade` (`arcade_id`) ON DELETE CASCADE,
  ADD CONSTRAINT `arcade_game_ibfk_2` FOREIGN KEY (`game_id`) REFERENCES `game` (`game_id`) ON DELETE CASCADE,
  ADD CONSTRAINT `fk_arcade_game_arcade_id` FOREIGN KEY (`arcade_id`) REFERENCES `arcade` (`arcade_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `payment_logs`
--
ALTER TABLE `payment_logs`
  ADD CONSTRAINT `fk_payment_logs_arcade_arcade_id` FOREIGN KEY (`arcade_id`) REFERENCES `arcade` (`arcade_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `users_arcade`
--
ALTER TABLE `users_arcade`
  ADD CONSTRAINT `users_arcade_ibfk_1` FOREIGN KEY (`email`) REFERENCES `users` (`email`) ON DELETE CASCADE,
  ADD CONSTRAINT `users_arcade_ibfk_2` FOREIGN KEY (`arcade_id`) REFERENCES `arcade` (`arcade_id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
