// helpers/token.ts 파일

import { TOKEN_PROGRAM_ID } from '@solana/spl-token';
import { PublicKey } from '@solana/web3.js';

export async function getToken(token: string) {
  switch (token) {
    case 'WSOL': {
      throw new Error(`WSOL token is not directly supported in this context.`);
    }
    case 'USDC': {
      // 예시: USDC 토큰 생성 시 필요한 정보들을 제공하여 생성
      return {
        tokenAddress: new PublicKey('EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v'),
        decimals: 6,
        symbol: 'USDC',
        name: 'USDC',
      };
    }
    default: {
      throw new Error(`Unsupported quote mint "${token}". Supported values are USDC and WSOL`);
    }
  }
}