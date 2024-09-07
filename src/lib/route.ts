/**
 * @description Public routes
 * An array of routes that are public and do not require authentication
 * 
 * @type {string[]}
 */
export const publicRoutes = [
    "/",
    "/bike-on-rent",
    "/bike-on-rent/:bikeId",
    "/about",
    "/contact",
    "/privacy-policy",
    "/terms-conditions",
    "cancellation-policy",
    "/blog"
];

/**
 * @description Routes that require authentication
 * An array of routes that are used for the authentication process
 * These routes will redirect loggedin users to /settings
 * @type {string[]}
 */
export const authRoutes = [
    "/auth/login",
    "/auth/login/verify-otp",
    "/auth/register",
    "/auth/forgot-password",
    "/auth/reset-password",
    "/auth/forgot-password/verify-otp",
    "/auth/error",
];

/**
 * @description Prefix for all auth routes
 * Routes that start with this prefix are  used for API authentication process
 * @type {string}
 */

export const apiAuthPrefix="/api/auth";

/**
 * @description Default login redirect
 * The default route to redirect to after a successful login
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT="/";