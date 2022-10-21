import { environment } from "src/environments/environment"

/**
 * Helper class for build the routes needed for the API requests
 */
export class ApiRoutes {
    USERS_PREFIX = '/users'
    USER_ME_ROUTE = '/me'


    AUTH_PREFIX = '/auth'
    AUTH_LOGIN_ROUTE = '/login'
    AUTH_LOGOUT_ROUTE = '/logout'


    public getUserMeRoute() {
        return ApiRoutes.getAPIHostRoute() + this.USERS_PREFIX + this.USER_ME_ROUTE;
    }

    public getAuthLoginRoute() {
        return ApiRoutes.getAPIHostRoute() + this.AUTH_PREFIX + this.AUTH_LOGIN_ROUTE;
    }

    public getAuthLogoutRoute() {
        return ApiRoutes.getAPIHostRoute() + this.AUTH_PREFIX + this.AUTH_LOGOUT_ROUTE;
    }

    private static getAPIHostRoute(): string {
        return environment.host + environment.api_version
    }
}
