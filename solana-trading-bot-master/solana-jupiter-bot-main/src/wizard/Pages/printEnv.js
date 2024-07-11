// printEnv.js

// dotenv 패키지를 사용하여 .env 파일 로드
require('dotenv').config();

// 환경 변수 출력
console.log('SOLANA_WALLET_PRIVATE_KEY:', process.env.SOLANA_WALLET_PRIVATE_KEY);
console.log('DEFAULT_RPC:', process.env.DEFAULT_RPC);
console.log('ALT_RPC_LIST:', process.env.ALT_RPC_LIST);
