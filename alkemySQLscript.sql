-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema AlkemyChallenge
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema AlkemyChallenge
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `AlkemyChallenge` ;
USE `AlkemyChallenge` ;

-- -----------------------------------------------------
-- Table `AlkemyChallenge`.`personajes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `AlkemyChallenge`.`personajes` (
  `id_personaje` INT NOT NULL AUTO_INCREMENT,
  `imagen_personaje` LONGBLOB NULL,
  `edad_personaje` INT(11) NULL,
  `peso_personaje` INT(11) NULL,
  `historia_personaje` VARCHAR(150) NULL,
  PRIMARY KEY (`id_personaje`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `AlkemyChallenge`.`filmaciones`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `AlkemyChallenge`.`filmaciones` (
  `id_filmacion` INT NOT NULL AUTO_INCREMENT,
  `titulo_filmacion` VARCHAR(45) NULL,
  `fechacreacion_filmacion` DATETIME NULL,
  `calificacion_filmacion` FLOAT NULL,
  PRIMARY KEY (`id_filmacion`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `AlkemyChallenge`.`generos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `AlkemyChallenge`.`generos` (
  `id_genero` INT NOT NULL AUTO_INCREMENT,
  `nombre_genero` VARCHAR(45) NULL,
  `imagen_genero` BLOB NULL,
  PRIMARY KEY (`id_genero`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `AlkemyChallenge`.`generos_filmaciones`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `AlkemyChallenge`.`generos_filmaciones` (
  `id_genero_filmacion` INT NOT NULL AUTO_INCREMENT,
  `id_genero` INT NOT NULL,
  `id_filmacion` INT NOT NULL,
  PRIMARY KEY (`id_genero_filmacion`),
  INDEX `fk_genero_filmacion_genero1_idx` (`id_genero` ASC),
  INDEX `fk_generos_filmaciones_filmaciones1_idx` (`id_filmacion` ASC),
  CONSTRAINT `fk_genero_filmacion_genero1`
    FOREIGN KEY (`id_genero`)
    REFERENCES `AlkemyChallenge`.`generos` (`id_genero`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_generos_filmaciones_filmaciones1`
    FOREIGN KEY (`id_filmacion`)
    REFERENCES `AlkemyChallenge`.`filmaciones` (`id_filmacion`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `AlkemyChallenge`.`personajes_filmaciones`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `AlkemyChallenge`.`personajes_filmaciones` (
  `idpersonajes_filmaciones` INT NOT NULL AUTO_INCREMENT,
  `id_filmacion` INT NOT NULL,
  `id_personaje` INT NOT NULL,
  PRIMARY KEY (`idpersonajes_filmaciones`),
  INDEX `fk_personajes_filmaciones_filmaciones1_idx` (`id_filmacion` ASC),
  INDEX `fk_personajes_filmaciones_personajes1_idx` (`id_personaje` ASC),
  CONSTRAINT `fk_personajes_filmaciones_filmaciones1`
    FOREIGN KEY (`id_filmacion`)
    REFERENCES `AlkemyChallenge`.`filmaciones` (`id_filmacion`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_personajes_filmaciones_personajes1`
    FOREIGN KEY (`id_personaje`)
    REFERENCES `AlkemyChallenge`.`personajes` (`id_personaje`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `AlkemyChallenge`.`usuarios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `AlkemyChallenge`.`usuarios` (
  `idusuarios` INT NOT NULL AUTO_INCREMENT,
  `email_usuario` VARCHAR(45) NOT NULL,
  `password_usuario` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idusuarios`))
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
