import axios from "axios";
import swapiGetter from "./swapiGetter";

jest.mock("axios");
// jest.mock("axios", () => ({
//   __esModule: true,
//   default: {
//     get: jest.fn().mockResolvedValue({ data: { name: "Mock Jedi" } }),
//   },
// }));

const mockedAxios = axios as jest.Mocked<typeof axios>;
mockedAxios.get.mockResolvedValue({ data: { name: "Mock Jedi" } });

describe("swapiGetter", () => {
  afterEach(jest.clearAllMocks);

  it("should return a name", async () => {
    const result = await swapiGetter(1);
    console.log("RESULT->", result);
    expect(result).toBe("Mock Jedi");
    expect(mockedAxios.get).toHaveBeenCalled();
  });
});
