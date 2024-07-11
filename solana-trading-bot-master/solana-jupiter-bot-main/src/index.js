#!/usr/bin/env node
"use strict";
const React = require("react");
const importJsx = require("import-jsx");
const { render } = require("ink");
const meow = require("meow");
const chalk = require("chalk");

// 환경 변수 및 함수 로드
const { checkForEnvFile, checkWallet, checkArbReady } = require("./utils");

// .env 파일 존재 여부 확인
checkForEnvFile();

// .env 파일 로드
require("dotenv").config();

// Solana 지갑 설정 확인
checkWallet();

// ARB 준비 여부 확인 함수
const isArbReady = async () => {
    try {
        await checkArbReady(); // ARB 프로토콜 준비 여부 확인
        return true; // 준비 완료 시 true 반환
    } catch (error) {
        console.error(chalk.black.bgRedBright(`\n${error.message}\n`)); // 에러 메시지 출력
        process.exit(1); // 에러 발생 시 프로세스 종료
    }
};

// ARB 준비 여부 확인 후 처리
isArbReady().then((arbReady) => {
    if (!arbReady) {
        console.error(chalk.red("ARB is not ready!")); // ARB 준비되지 않은 경우 메시지 출력
        process.exit(1); // 프로세스 종료
    }

    // meow를 사용하여 CLI 인터페이스 설정
    const cli = meow(`
        Usage
          $ solana-jupiter-bot

        Options
          --name  Your name

        Examples
          $ solana-jupiter-bot --name=John
          Hello, John
    `, {
        flags: {
            name: {
                type: 'string',
                alias: 'n'
            }
        }
    });

    // 디버깅을 위해 환경 변수 출력
    console.log('SOLANA_WALLET_PRIVATE_KEY:', process.env.SOLANA_WALLET_PRIVATE_KEY);
    console.log('DEFAULT_RPC:', process.env.DEFAULT_RPC);
    console.log('ALT_RPC_LIST:', process.env.ALT_RPC_LIST);

    // Ink를 사용하여 React 애플리케이션 렌더링
    render(React.createElement(importJsx('./src/index.js'), cli.flags)).waitUntilExit();
});
