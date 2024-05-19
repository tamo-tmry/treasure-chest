/**
 * @jest-environment node
 */

import { createMocks } from "node-mocks-http";
import { GET, POST } from "@/app/api/checklist/route";
import { NextRequest, NextResponse } from "next/server";
import { json } from "stream/consumers";

describe("Checklist API Test", () => {
 const baseUrl = process.env.NEXT_PUBLIC_BASE_URL; 

  describe("GET /checklists", () => {
    it("should return data when API call is successful", async () => {
      const mockData = { message: "success" };
      global.fetch = jest.fn().mockResolvedValue({
        ok: true,
        json: async () => (mockData),
      });

      const response = await GET();
      expect(response.status).toBe(200);
      expect(await response.json()).toEqual(mockData);
    })

    it("should return error when API call fails with non-200 status", async() => {
      global.fetch = jest.fn().mockResolvedValue({
        ok: false,
        status: 500,
      })

      const response = await GET();

      expect(response.status).toBe(500);
      expect(await response.json()).toEqual({ error: "GET /checklists" });
    })

    it("should return error when API call throws an expection", async() => {
      global.fetch = jest.fn().mockRejectedValue(new Error("API call failed"));

      const response = await GET();

      expect(response.status).toBe(500);
      expect(await response.json()).toEqual({ error: "GET /checklists" });
    })
  })

  describe("POST /checklists", () => {
    it("should return data when API call is successful", async () => {
      const mockData = { id: "1" };
      global.fetch = jest.fn().mockResolvedValue({ 
        ok: true,
        json: async () => (mockData),
        status: 201
      })

      const req = new NextRequest(new URL(`${baseUrl}/api/checklists`), {
        method: "POST",
        body: JSON.stringify({ label: "test" }),
      });

      const response = await POST(req)

      expect(response.status).toBe(201);
    })

    it("should return error when API call fails with non-200 status", async () => {
      global.fetch = jest.fn().mockResolvedValue({
        ok: false,
        status: 500,
      })

      const req = new NextRequest(new URL(`${baseUrl}/api/checklists`), {
        method: "POST",
        body: JSON.stringify({ label: "test" }),
      });

      const response = await POST(req);

      expect(response.status).toBe(500);
    })

    it("should return error when API call throws an exception", async () => {
      global.fetch = jest.fn().mockRejectedValue(new Error("API call failed"));

      const req = new NextRequest(new URL(`${baseUrl}/api/checklists`), {
        method: "POST",
        body: JSON.stringify({ label: "test" }),
      });

      const response = await POST(req);

      expect(response.status).toBe(500);
    })
  })
});
