import type { Product, ApiResponse, User } from "../types/index";
import { mockProducts, mockUser, mockSuggestions } from "../data/mockData";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const apiService = {
  getProducts: async (): Promise<ApiResponse<Product[]>> => {
    await delay(800);
    return {
      data: mockProducts,
      success: true,
    };
  },

  getProductById: async (id: string): Promise<ApiResponse<Product>> => {
    await delay(500);
    const product = mockProducts.find((p) => p.id === id);
    if (!product) {
      return {
        data: {} as Product,
        success: false,
        message: "Product not found",
      };
    }
    return {
      data: product,
      success: true,
    };
  },

  getSuggestions: async (): Promise<ApiResponse<Product[]>> => {
    await delay(1200);

    if (Math.random() < 0.2) {
      return {
        data: [],
        success: false,
        message: "Không thể lấy gợi ý lúc này. Vui lòng thử lại sau.",
      };
    }

    return {
      data: mockSuggestions,
      success: true,
    };
  },

  getUserProfile: async (): Promise<ApiResponse<User>> => {
    await delay(300);
    return {
      data: mockUser,
      success: true,
    };
  },

  chatbotQuery: async (message: string): Promise<ApiResponse<string>> => {
    await delay(1000);

    const lowercaseMessage = message.toLowerCase();
    let response = "";

    if (
      lowercaseMessage.includes("tiếng anh") ||
      lowercaseMessage.includes("english")
    ) {
      response =
        'Tôi khuyên bạn nên thử khóa học "Complete English Speaking Course with Native Teachers" - rất phù hợp cho người muốn cải thiện kỹ năng giao tiếp tiếng Anh. Khóa học có giá 890.000 VNĐ với giảm giá từ 1.290.000 VNĐ!';
    } else if (
      lowercaseMessage.includes("lập trình") ||
      lowercaseMessage.includes("programming")
    ) {
      response =
        'Dựa trên nhu cầu lập trình của bạn, tôi recommend khóa "Advanced React & TypeScript Development" với giá 1.250.000 VNĐ. Khóa học này sẽ giúp bạn thành thạo React và TypeScript, rất cần thiết cho lập trình viên hiện đại!';
    } else if (
      lowercaseMessage.includes("marketing") ||
      lowercaseMessage.includes("bán hàng")
    ) {
      response =
        'Khóa học "Digital Marketing Masterclass 2025" sẽ perfect cho bạn! Giá chỉ 750.000 VNĐ, bao gồm SEO, social media, và paid advertising. Rất phù hợp cho beginners!';
    } else if (
      lowercaseMessage.includes("thiết kế") ||
      lowercaseMessage.includes("design")
    ) {
      response =
        'Tôi suggest khóa "UI/UX Design Fundamentals" với giá 650.000 VNĐ. Khóa học này sẽ dạy bạn từ cơ bản đến nâng cao về thiết kế giao diện người dùng!';
    } else if (
      lowercaseMessage.includes("data science") ||
      lowercaseMessage.includes("machine learning")
    ) {
      response =
        'Khóa học "Data Science with Python & Machine Learning" sẽ ideal cho bạn! Giá 1.450.000 VNĐ, bao gồm Python, pandas, và machine learning với TensorFlow.';
    } else if (
      lowercaseMessage.includes("photography") ||
      lowercaseMessage.includes("chụp ảnh")
    ) {
      response =
        'Tôi recommend "Photography Masterclass - Portrait & Landscape" với giá 580.000 VNĐ. Khóa học này sẽ dạy bạn kỹ thuật chụp ảnh chuyên nghiệp!';
    } else {
      response =
        "Tôi có thể giúp bạn tìm khóa học phù hợp! Hãy cho tôi biết bạn quan tâm đến lĩnh vực nào: tiếng Anh, lập trình, marketing, thiết kế, data science, hoặc photography?";
    }

    return {
      data: response,
      success: true,
    };
  },
};
