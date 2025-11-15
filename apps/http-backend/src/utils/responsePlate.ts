import type { Response } from "express";

export const responsePlate = (
  res: Response,
  {
    status = 200,
    success = true,
    message,
    data,
  }: { status?: number; success?: boolean; message: string; data?: any }
) => {
  return res.status(status).json({
    success,
    message,
    data,
    timestamp: new Date().toISOString(),
  });
};
