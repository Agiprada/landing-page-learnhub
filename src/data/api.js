import axios from "axios";

export const getCourses = async () => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_API_BASE_URL}/course`
    );
    return response.data.data;
  } catch (error) {
    console.error("Error fetching course data:", error.message);
    return [];
  }
};
