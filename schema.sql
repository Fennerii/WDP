CREATE DATABASE IF NOT EXISTS odd_jobs;
USE odd_jobs;

CREATE TABLE User (
    UserID     INT          NOT NULL AUTO_INCREMENT,
    FirstName  VARCHAR(50)  NOT NULL,
    LastName   VARCHAR(50)  NOT NULL,
    Username   VARCHAR(50)  NOT NULL,
    Password   VARCHAR(255) NOT NULL,  
    Email      VARCHAR(255) NULL,
    Phone      VARCHAR(20)  NULL,
    DateJoined DATETIME     NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT pk_user PRIMARY KEY (UserID),
    CONSTRAINT uq_user_username UNIQUE (Username),
    CONSTRAINT uq_user_email UNIQUE (Email)
);

CREATE TABLE Category (
    CategoryID   INT          NOT NULL AUTO_INCREMENT,
    CategoryName VARCHAR(50)  NOT NULL,
    Description  VARCHAR(255) NULL,
    CONSTRAINT pk_category PRIMARY KEY (CategoryID),
    CONSTRAINT uq_category_name UNIQUE (CategoryName)
);

CREATE TABLE Job (
    JobID       INT           NOT NULL AUTO_INCREMENT,
    Title       VARCHAR(100)  NOT NULL,
    Description TEXT          NOT NULL,
    Location    VARCHAR(150)  NOT NULL,
    PayRate     DECIMAL(8,2)  NOT NULL,
    DatePosted  DATETIME      NOT NULL DEFAULT CURRENT_TIMESTAMP,
    Expiry      DATETIME      NULL,
    Status      ENUM('Open', 'Filled', 'Closed') NOT NULL DEFAULT 'Open',
    UserID      INT           NOT NULL,
    CategoryID  INT           NOT NULL,
    CONSTRAINT pk_job PRIMARY KEY (JobID),
    CONSTRAINT chk_job_payrate CHECK (PayRate >= 0),
    CONSTRAINT chk_job_expiry CHECK (Expiry IS NULL OR Expiry > DatePosted),
    CONSTRAINT fk_job_user FOREIGN KEY (UserID)
        REFERENCES User (UserID)
        ON DELETE CASCADE
        ON UPDATE CASCADE,
    CONSTRAINT fk_job_category FOREIGN KEY (CategoryID)
        REFERENCES Category (CategoryID)
        ON DELETE RESTRICT
        ON UPDATE CASCADE
);