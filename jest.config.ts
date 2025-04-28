import { Config } from "jest";

const config: Config = {
	preset: "ts-jest",
	testEnvironment: "jsdom",
	setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
	globals: {
		"ts-jest": {
			tsconfig: "./tsconfig.app.json",
		},
	},
};

export default config;
