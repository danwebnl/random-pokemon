import { afterEach, beforeAll, afterAll } from "vitest"
import { cleanup } from "@testing-library/react"
import "@testing-library/jest-dom/vitest"
import { server } from "../src/mocks/server.js"

// Establish API mocking before all tests.
beforeAll(() => server.listen())

// runs a cleanup after each test case (e.g. clearing jsdom)
afterEach(() => {
  cleanup()
  server.resetHandlers()
})

// Clean up after the tests are finished.
afterAll(() => server.close())
