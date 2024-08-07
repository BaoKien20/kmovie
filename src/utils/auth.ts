import {jwtDecode } from "jwt-decode"
import { NextRequest } from "next/server";

interface TokenData {
    exp: number;
  }
export function isTokenExpired(token?: string | null): boolean {
    if(!token) return true;
  try {
    const { exp }: TokenData = jwtDecode(token);
    if (Date.now() >= exp * 1000) {
      return true;
    } else {
      return false;
    }
  } catch {
    return true;
  }
}

export function isTokenOneDayToExpired(token?: string | null): boolean {
    if(!token) return true;
  try {
    const { exp }: TokenData = jwtDecode(token);
    if (Date.now() >= (exp - 24*60*60) * 1000) {
      return true;
    } else {
      return false;
    }
  } catch {
    return true;
  }
}



