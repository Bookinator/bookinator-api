var config = {
	mongoHost : process.env.mongoHost || "CHANGEME",
	mongoPort : process.env.mongoPort || "CHANGEME",
	mongoDb : process.env.mongoDb || "CHANGEME",
	mongoUser : process.env.mongoUser || "CHANGEME",
	mongoPasswd : process.env.mongoPasswd || "CHANGEME",
	jwtSecret: process.env.jwtSecret || "CHANGEME",
	port: process.env.PORT || 3300
};

module.exports = config;