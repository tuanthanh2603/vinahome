import type {UserType} from "~/types/UserType";

export const loginWithGoogle = async (accessToken: string): Promise<UserType> => {
    try {
        return await $fetch<UserType>("http://localhost:8080/api/v1/auth/google-login", {
            method: "POST",
            body: {accessToken},
        });
    } catch (error) {
        console.error("Login failed: ", error);
        throw error;
    }
};
