import { getAge } from "../../src/plugins/get-age.plugin";

describe("plugins/get-age.plugin.ts", () => {
  test("getAge should return birthdate", () => {
    const Age = getAge("July 20, 98 00:20:18");
    expect(Age).toBe(26);
  });
});
