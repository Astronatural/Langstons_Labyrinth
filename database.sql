
-- USER is a reserved keyword with Postgres
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);


CREATE TABLE "game" (
    "id" SERIAL PRIMARY KEY,
	"name" VARCHAR(255),
	"totaltiles" INT,
	"party_pos" INT,
	"boss_pos" INT,
	"user_id" INT,
	"turn" INT
);


CREATE TABLE "game_tiles" (
"id" SERIAL PRIMARY KEY,
"game_id" INT,
"user_id" INT,
"shape_url" VARCHAR(225),
"tile_orientation" INT,
"tile_pos" INT
);


CREATE TABLE "tiledex" (
"id" SERIAL PRIMARY KEY,
"name" VARCHAR(225),
"shape" VARCHAR(225)
);
